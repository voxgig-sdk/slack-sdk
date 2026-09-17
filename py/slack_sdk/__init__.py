# Slack SDK

from slack_sdk.utility.voxgig_struct import voxgig_struct as vs
from slack_sdk.core.utility_type import SlackUtility
from slack_sdk.core.spec import SlackSpec
from slack_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from slack_sdk.utility import register

# Load features
from slack_sdk.feature.base_feature import SlackBaseFeature
from slack_sdk.features import _has_feature, _make_feature


class SlackSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = SlackUtility()
        self._utility = utility

        from slack_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return SlackUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = SlackSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "SlackSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("SlackSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Adminapp(self, data=None) -> "AdminappEntity":
        """Entity factory: client.Adminapp().list() / client.Adminapp().load({"id": ...})."""
        from slack_sdk.entity.adminapp_entity import AdminappEntity
        return AdminappEntity(self, data)


    def Adminappsapproved(self, data=None) -> "AdminappsapprovedEntity":
        """Entity factory: client.Adminappsapproved().list() / client.Adminappsapproved().load({"id": ...})."""
        from slack_sdk.entity.adminappsapproved_entity import AdminappsapprovedEntity
        return AdminappsapprovedEntity(self, data)


    def Adminappsrequest(self, data=None) -> "AdminappsrequestEntity":
        """Entity factory: client.Adminappsrequest().list() / client.Adminappsrequest().load({"id": ...})."""
        from slack_sdk.entity.adminappsrequest_entity import AdminappsrequestEntity
        return AdminappsrequestEntity(self, data)


    def Adminappsrestricted(self, data=None) -> "AdminappsrestrictedEntity":
        """Entity factory: client.Adminappsrestricted().list() / client.Adminappsrestricted().load({"id": ...})."""
        from slack_sdk.entity.adminappsrestricted_entity import AdminappsrestrictedEntity
        return AdminappsrestrictedEntity(self, data)


    def Adminconversation(self, data=None) -> "AdminconversationEntity":
        """Entity factory: client.Adminconversation().list() / client.Adminconversation().load({"id": ...})."""
        from slack_sdk.entity.adminconversation_entity import AdminconversationEntity
        return AdminconversationEntity(self, data)


    def Adminconversationsekm(self, data=None) -> "AdminconversationsekmEntity":
        """Entity factory: client.Adminconversationsekm().list() / client.Adminconversationsekm().load({"id": ...})."""
        from slack_sdk.entity.adminconversationsekm_entity import AdminconversationsekmEntity
        return AdminconversationsekmEntity(self, data)


    def AdminconversationsrestrictAccess(self, data=None) -> "AdminconversationsrestrictAccessEntity":
        """Entity factory: client.AdminconversationsrestrictAccess().list() / client.AdminconversationsrestrictAccess().load({"id": ...})."""
        from slack_sdk.entity.adminconversationsrestrict_access_entity import AdminconversationsrestrictAccessEntity
        return AdminconversationsrestrictAccessEntity(self, data)


    def Adminemoji(self, data=None) -> "AdminemojiEntity":
        """Entity factory: client.Adminemoji().list() / client.Adminemoji().load({"id": ...})."""
        from slack_sdk.entity.adminemoji_entity import AdminemojiEntity
        return AdminemojiEntity(self, data)


    def AdmininviteRequest(self, data=None) -> "AdmininviteRequestEntity":
        """Entity factory: client.AdmininviteRequest().list() / client.AdmininviteRequest().load({"id": ...})."""
        from slack_sdk.entity.admininvite_request_entity import AdmininviteRequestEntity
        return AdmininviteRequestEntity(self, data)


    def AdmininviteRequestsapproved(self, data=None) -> "AdmininviteRequestsapprovedEntity":
        """Entity factory: client.AdmininviteRequestsapproved().list() / client.AdmininviteRequestsapproved().load({"id": ...})."""
        from slack_sdk.entity.admininvite_requestsapproved_entity import AdmininviteRequestsapprovedEntity
        return AdmininviteRequestsapprovedEntity(self, data)


    def AdmininviteRequestsdenied(self, data=None) -> "AdmininviteRequestsdeniedEntity":
        """Entity factory: client.AdmininviteRequestsdenied().list() / client.AdmininviteRequestsdenied().load({"id": ...})."""
        from slack_sdk.entity.admininvite_requestsdenied_entity import AdmininviteRequestsdeniedEntity
        return AdmininviteRequestsdeniedEntity(self, data)


    def Adminteam(self, data=None) -> "AdminteamEntity":
        """Entity factory: client.Adminteam().list() / client.Adminteam().load({"id": ...})."""
        from slack_sdk.entity.adminteam_entity import AdminteamEntity
        return AdminteamEntity(self, data)


    def Adminteamsadmin(self, data=None) -> "AdminteamsadminEntity":
        """Entity factory: client.Adminteamsadmin().list() / client.Adminteamsadmin().load({"id": ...})."""
        from slack_sdk.entity.adminteamsadmin_entity import AdminteamsadminEntity
        return AdminteamsadminEntity(self, data)


    def Adminteamsowner(self, data=None) -> "AdminteamsownerEntity":
        """Entity factory: client.Adminteamsowner().list() / client.Adminteamsowner().load({"id": ...})."""
        from slack_sdk.entity.adminteamsowner_entity import AdminteamsownerEntity
        return AdminteamsownerEntity(self, data)


    def Adminteamssetting(self, data=None) -> "AdminteamssettingEntity":
        """Entity factory: client.Adminteamssetting().list() / client.Adminteamssetting().load({"id": ...})."""
        from slack_sdk.entity.adminteamssetting_entity import AdminteamssettingEntity
        return AdminteamssettingEntity(self, data)


    def Adminuser(self, data=None) -> "AdminuserEntity":
        """Entity factory: client.Adminuser().list() / client.Adminuser().load({"id": ...})."""
        from slack_sdk.entity.adminuser_entity import AdminuserEntity
        return AdminuserEntity(self, data)


    def Adminusergroup(self, data=None) -> "AdminusergroupEntity":
        """Entity factory: client.Adminusergroup().list() / client.Adminusergroup().load({"id": ...})."""
        from slack_sdk.entity.adminusergroup_entity import AdminusergroupEntity
        return AdminusergroupEntity(self, data)


    def Adminuserssession(self, data=None) -> "AdminuserssessionEntity":
        """Entity factory: client.Adminuserssession().list() / client.Adminuserssession().load({"id": ...})."""
        from slack_sdk.entity.adminuserssession_entity import AdminuserssessionEntity
        return AdminuserssessionEntity(self, data)


    def Api(self, data=None) -> "ApiEntity":
        """Entity factory: client.Api().list() / client.Api().load({"id": ...})."""
        from slack_sdk.entity.api_entity import ApiEntity
        return ApiEntity(self, data)


    def App(self, data=None) -> "AppEntity":
        """Entity factory: client.App().list() / client.App().load({"id": ...})."""
        from slack_sdk.entity.app_entity import AppEntity
        return AppEntity(self, data)


    def Appseventauthorization(self, data=None) -> "AppseventauthorizationEntity":
        """Entity factory: client.Appseventauthorization().list() / client.Appseventauthorization().load({"id": ...})."""
        from slack_sdk.entity.appseventauthorization_entity import AppseventauthorizationEntity
        return AppseventauthorizationEntity(self, data)


    def Appspermission(self, data=None) -> "AppspermissionEntity":
        """Entity factory: client.Appspermission().list() / client.Appspermission().load({"id": ...})."""
        from slack_sdk.entity.appspermission_entity import AppspermissionEntity
        return AppspermissionEntity(self, data)


    def Appspermissionsresource(self, data=None) -> "AppspermissionsresourceEntity":
        """Entity factory: client.Appspermissionsresource().list() / client.Appspermissionsresource().load({"id": ...})."""
        from slack_sdk.entity.appspermissionsresource_entity import AppspermissionsresourceEntity
        return AppspermissionsresourceEntity(self, data)


    def Appspermissionsscope(self, data=None) -> "AppspermissionsscopeEntity":
        """Entity factory: client.Appspermissionsscope().list() / client.Appspermissionsscope().load({"id": ...})."""
        from slack_sdk.entity.appspermissionsscope_entity import AppspermissionsscopeEntity
        return AppspermissionsscopeEntity(self, data)


    def Appspermissionsuser(self, data=None) -> "AppspermissionsuserEntity":
        """Entity factory: client.Appspermissionsuser().list() / client.Appspermissionsuser().load({"id": ...})."""
        from slack_sdk.entity.appspermissionsuser_entity import AppspermissionsuserEntity
        return AppspermissionsuserEntity(self, data)


    def Auth(self, data=None) -> "AuthEntity":
        """Entity factory: client.Auth().list() / client.Auth().load({"id": ...})."""
        from slack_sdk.entity.auth_entity import AuthEntity
        return AuthEntity(self, data)


    def Bot(self, data=None) -> "BotEntity":
        """Entity factory: client.Bot().list() / client.Bot().load({"id": ...})."""
        from slack_sdk.entity.bot_entity import BotEntity
        return BotEntity(self, data)


    def Call(self, data=None) -> "CallEntity":
        """Entity factory: client.Call().list() / client.Call().load({"id": ...})."""
        from slack_sdk.entity.call_entity import CallEntity
        return CallEntity(self, data)


    def Callsparticipant(self, data=None) -> "CallsparticipantEntity":
        """Entity factory: client.Callsparticipant().list() / client.Callsparticipant().load({"id": ...})."""
        from slack_sdk.entity.callsparticipant_entity import CallsparticipantEntity
        return CallsparticipantEntity(self, data)


    def Chat(self, data=None) -> "ChatEntity":
        """Entity factory: client.Chat().list() / client.Chat().load({"id": ...})."""
        from slack_sdk.entity.chat_entity import ChatEntity
        return ChatEntity(self, data)


    def ChatscheduledMessage(self, data=None) -> "ChatscheduledMessageEntity":
        """Entity factory: client.ChatscheduledMessage().list() / client.ChatscheduledMessage().load({"id": ...})."""
        from slack_sdk.entity.chatscheduled_message_entity import ChatscheduledMessageEntity
        return ChatscheduledMessageEntity(self, data)


    def Conversation(self, data=None) -> "ConversationEntity":
        """Entity factory: client.Conversation().list() / client.Conversation().load({"id": ...})."""
        from slack_sdk.entity.conversation_entity import ConversationEntity
        return ConversationEntity(self, data)


    def Dialog(self, data=None) -> "DialogEntity":
        """Entity factory: client.Dialog().list() / client.Dialog().load({"id": ...})."""
        from slack_sdk.entity.dialog_entity import DialogEntity
        return DialogEntity(self, data)


    def Dnd(self, data=None) -> "DndEntity":
        """Entity factory: client.Dnd().list() / client.Dnd().load({"id": ...})."""
        from slack_sdk.entity.dnd_entity import DndEntity
        return DndEntity(self, data)


    def Emoji(self, data=None) -> "EmojiEntity":
        """Entity factory: client.Emoji().list() / client.Emoji().load({"id": ...})."""
        from slack_sdk.entity.emoji_entity import EmojiEntity
        return EmojiEntity(self, data)


    def File(self, data=None) -> "FileEntity":
        """Entity factory: client.File().list() / client.File().load({"id": ...})."""
        from slack_sdk.entity.file_entity import FileEntity
        return FileEntity(self, data)


    def Filescomment(self, data=None) -> "FilescommentEntity":
        """Entity factory: client.Filescomment().list() / client.Filescomment().load({"id": ...})."""
        from slack_sdk.entity.filescomment_entity import FilescommentEntity
        return FilescommentEntity(self, data)


    def Filesremote(self, data=None) -> "FilesremoteEntity":
        """Entity factory: client.Filesremote().list() / client.Filesremote().load({"id": ...})."""
        from slack_sdk.entity.filesremote_entity import FilesremoteEntity
        return FilesremoteEntity(self, data)


    def Migration(self, data=None) -> "MigrationEntity":
        """Entity factory: client.Migration().list() / client.Migration().load({"id": ...})."""
        from slack_sdk.entity.migration_entity import MigrationEntity
        return MigrationEntity(self, data)


    def Oauth(self, data=None) -> "OauthEntity":
        """Entity factory: client.Oauth().list() / client.Oauth().load({"id": ...})."""
        from slack_sdk.entity.oauth_entity import OauthEntity
        return OauthEntity(self, data)


    def Oauthv2(self, data=None) -> "Oauthv2Entity":
        """Entity factory: client.Oauthv2().list() / client.Oauthv2().load({"id": ...})."""
        from slack_sdk.entity.oauthv2_entity import Oauthv2Entity
        return Oauthv2Entity(self, data)


    def Pin(self, data=None) -> "PinEntity":
        """Entity factory: client.Pin().list() / client.Pin().load({"id": ...})."""
        from slack_sdk.entity.pin_entity import PinEntity
        return PinEntity(self, data)


    def Reaction(self, data=None) -> "ReactionEntity":
        """Entity factory: client.Reaction().list() / client.Reaction().load({"id": ...})."""
        from slack_sdk.entity.reaction_entity import ReactionEntity
        return ReactionEntity(self, data)


    def Reminder(self, data=None) -> "ReminderEntity":
        """Entity factory: client.Reminder().list() / client.Reminder().load({"id": ...})."""
        from slack_sdk.entity.reminder_entity import ReminderEntity
        return ReminderEntity(self, data)


    def Rtm(self, data=None) -> "RtmEntity":
        """Entity factory: client.Rtm().list() / client.Rtm().load({"id": ...})."""
        from slack_sdk.entity.rtm_entity import RtmEntity
        return RtmEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from slack_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def Star(self, data=None) -> "StarEntity":
        """Entity factory: client.Star().list() / client.Star().load({"id": ...})."""
        from slack_sdk.entity.star_entity import StarEntity
        return StarEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from slack_sdk.entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def Teamprofile(self, data=None) -> "TeamprofileEntity":
        """Entity factory: client.Teamprofile().list() / client.Teamprofile().load({"id": ...})."""
        from slack_sdk.entity.teamprofile_entity import TeamprofileEntity
        return TeamprofileEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from slack_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def Usergroup(self, data=None) -> "UsergroupEntity":
        """Entity factory: client.Usergroup().list() / client.Usergroup().load({"id": ...})."""
        from slack_sdk.entity.usergroup_entity import UsergroupEntity
        return UsergroupEntity(self, data)


    def Usergroupsuser(self, data=None) -> "UsergroupsuserEntity":
        """Entity factory: client.Usergroupsuser().list() / client.Usergroupsuser().load({"id": ...})."""
        from slack_sdk.entity.usergroupsuser_entity import UsergroupsuserEntity
        return UsergroupsuserEntity(self, data)


    def Usersprofile(self, data=None) -> "UsersprofileEntity":
        """Entity factory: client.Usersprofile().list() / client.Usersprofile().load({"id": ...})."""
        from slack_sdk.entity.usersprofile_entity import UsersprofileEntity
        return UsersprofileEntity(self, data)


    def View(self, data=None) -> "ViewEntity":
        """Entity factory: client.View().list() / client.View().load({"id": ...})."""
        from slack_sdk.entity.view_entity import ViewEntity
        return ViewEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from slack_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "SlackSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from slack_sdk.entity.adminapp_entity import AdminappEntity
    from slack_sdk.entity.adminappsapproved_entity import AdminappsapprovedEntity
    from slack_sdk.entity.adminappsrequest_entity import AdminappsrequestEntity
    from slack_sdk.entity.adminappsrestricted_entity import AdminappsrestrictedEntity
    from slack_sdk.entity.adminconversation_entity import AdminconversationEntity
    from slack_sdk.entity.adminconversationsekm_entity import AdminconversationsekmEntity
    from slack_sdk.entity.adminconversationsrestrict_access_entity import AdminconversationsrestrictAccessEntity
    from slack_sdk.entity.adminemoji_entity import AdminemojiEntity
    from slack_sdk.entity.admininvite_request_entity import AdmininviteRequestEntity
    from slack_sdk.entity.admininvite_requestsapproved_entity import AdmininviteRequestsapprovedEntity
    from slack_sdk.entity.admininvite_requestsdenied_entity import AdmininviteRequestsdeniedEntity
    from slack_sdk.entity.adminteam_entity import AdminteamEntity
    from slack_sdk.entity.adminteamsadmin_entity import AdminteamsadminEntity
    from slack_sdk.entity.adminteamsowner_entity import AdminteamsownerEntity
    from slack_sdk.entity.adminteamssetting_entity import AdminteamssettingEntity
    from slack_sdk.entity.adminuser_entity import AdminuserEntity
    from slack_sdk.entity.adminusergroup_entity import AdminusergroupEntity
    from slack_sdk.entity.adminuserssession_entity import AdminuserssessionEntity
    from slack_sdk.entity.api_entity import ApiEntity
    from slack_sdk.entity.app_entity import AppEntity
    from slack_sdk.entity.appseventauthorization_entity import AppseventauthorizationEntity
    from slack_sdk.entity.appspermission_entity import AppspermissionEntity
    from slack_sdk.entity.appspermissionsresource_entity import AppspermissionsresourceEntity
    from slack_sdk.entity.appspermissionsscope_entity import AppspermissionsscopeEntity
    from slack_sdk.entity.appspermissionsuser_entity import AppspermissionsuserEntity
    from slack_sdk.entity.auth_entity import AuthEntity
    from slack_sdk.entity.bot_entity import BotEntity
    from slack_sdk.entity.call_entity import CallEntity
    from slack_sdk.entity.callsparticipant_entity import CallsparticipantEntity
    from slack_sdk.entity.chat_entity import ChatEntity
    from slack_sdk.entity.chatscheduled_message_entity import ChatscheduledMessageEntity
    from slack_sdk.entity.conversation_entity import ConversationEntity
    from slack_sdk.entity.dialog_entity import DialogEntity
    from slack_sdk.entity.dnd_entity import DndEntity
    from slack_sdk.entity.emoji_entity import EmojiEntity
    from slack_sdk.entity.file_entity import FileEntity
    from slack_sdk.entity.filescomment_entity import FilescommentEntity
    from slack_sdk.entity.filesremote_entity import FilesremoteEntity
    from slack_sdk.entity.migration_entity import MigrationEntity
    from slack_sdk.entity.oauth_entity import OauthEntity
    from slack_sdk.entity.oauthv2_entity import Oauthv2Entity
    from slack_sdk.entity.pin_entity import PinEntity
    from slack_sdk.entity.reaction_entity import ReactionEntity
    from slack_sdk.entity.reminder_entity import ReminderEntity
    from slack_sdk.entity.rtm_entity import RtmEntity
    from slack_sdk.entity.search_entity import SearchEntity
    from slack_sdk.entity.star_entity import StarEntity
    from slack_sdk.entity.team_entity import TeamEntity
    from slack_sdk.entity.teamprofile_entity import TeamprofileEntity
    from slack_sdk.entity.user_entity import UserEntity
    from slack_sdk.entity.usergroup_entity import UsergroupEntity
    from slack_sdk.entity.usergroupsuser_entity import UsergroupsuserEntity
    from slack_sdk.entity.usersprofile_entity import UsersprofileEntity
    from slack_sdk.entity.view_entity import ViewEntity
    from slack_sdk.entity.workflow_entity import WorkflowEntity
