"use strict";
// Slack Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.SlackSDK = exports.SlackEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AdminappEntity_1 = require("./entity/AdminappEntity");
const AdminappsapprovedEntity_1 = require("./entity/AdminappsapprovedEntity");
const AdminappsrequestEntity_1 = require("./entity/AdminappsrequestEntity");
const AdminappsrestrictedEntity_1 = require("./entity/AdminappsrestrictedEntity");
const AdminconversationEntity_1 = require("./entity/AdminconversationEntity");
const AdminconversationsekmEntity_1 = require("./entity/AdminconversationsekmEntity");
const AdminconversationsrestrictAccessEntity_1 = require("./entity/AdminconversationsrestrictAccessEntity");
const AdminemojiEntity_1 = require("./entity/AdminemojiEntity");
const AdmininviteRequestEntity_1 = require("./entity/AdmininviteRequestEntity");
const AdmininviteRequestsapprovedEntity_1 = require("./entity/AdmininviteRequestsapprovedEntity");
const AdmininviteRequestsdeniedEntity_1 = require("./entity/AdmininviteRequestsdeniedEntity");
const AdminteamEntity_1 = require("./entity/AdminteamEntity");
const AdminteamsadminEntity_1 = require("./entity/AdminteamsadminEntity");
const AdminteamsownerEntity_1 = require("./entity/AdminteamsownerEntity");
const AdminteamssettingEntity_1 = require("./entity/AdminteamssettingEntity");
const AdminuserEntity_1 = require("./entity/AdminuserEntity");
const AdminusergroupEntity_1 = require("./entity/AdminusergroupEntity");
const AdminuserssessionEntity_1 = require("./entity/AdminuserssessionEntity");
const ApiEntity_1 = require("./entity/ApiEntity");
const AppEntity_1 = require("./entity/AppEntity");
const AppseventauthorizationEntity_1 = require("./entity/AppseventauthorizationEntity");
const AppspermissionEntity_1 = require("./entity/AppspermissionEntity");
const AppspermissionsresourceEntity_1 = require("./entity/AppspermissionsresourceEntity");
const AppspermissionsscopeEntity_1 = require("./entity/AppspermissionsscopeEntity");
const AppspermissionsuserEntity_1 = require("./entity/AppspermissionsuserEntity");
const AuthEntity_1 = require("./entity/AuthEntity");
const BotEntity_1 = require("./entity/BotEntity");
const CallEntity_1 = require("./entity/CallEntity");
const CallsparticipantEntity_1 = require("./entity/CallsparticipantEntity");
const ChatEntity_1 = require("./entity/ChatEntity");
const ChatscheduledMessageEntity_1 = require("./entity/ChatscheduledMessageEntity");
const ConversationEntity_1 = require("./entity/ConversationEntity");
const DialogEntity_1 = require("./entity/DialogEntity");
const DndEntity_1 = require("./entity/DndEntity");
const EmojiEntity_1 = require("./entity/EmojiEntity");
const FileEntity_1 = require("./entity/FileEntity");
const FilescommentEntity_1 = require("./entity/FilescommentEntity");
const FilesremoteEntity_1 = require("./entity/FilesremoteEntity");
const MigrationEntity_1 = require("./entity/MigrationEntity");
const OauthEntity_1 = require("./entity/OauthEntity");
const Oauthv2Entity_1 = require("./entity/Oauthv2Entity");
const PinEntity_1 = require("./entity/PinEntity");
const ReactionEntity_1 = require("./entity/ReactionEntity");
const ReminderEntity_1 = require("./entity/ReminderEntity");
const RtmEntity_1 = require("./entity/RtmEntity");
const SearchEntity_1 = require("./entity/SearchEntity");
const StarEntity_1 = require("./entity/StarEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TeamprofileEntity_1 = require("./entity/TeamprofileEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UsergroupEntity_1 = require("./entity/UsergroupEntity");
const UsergroupsuserEntity_1 = require("./entity/UsergroupsuserEntity");
const UsersprofileEntity_1 = require("./entity/UsersprofileEntity");
const ViewEntity_1 = require("./entity/ViewEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const SlackEntityBase_1 = require("./SlackEntityBase");
Object.defineProperty(exports, "SlackEntityBase", { enumerable: true, get: function () { return SlackEntityBase_1.SlackEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class SlackSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('SlackSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('SlackSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('SlackSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Adminapp().list()` / `client.Adminapp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminapp(entopts) {
        const self = this;
        return new AdminappEntity_1.AdminappEntity(self, entopts);
    }
    // Entity access: `client.Adminappsapproved().list()` / `client.Adminappsapproved().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminappsapproved(entopts) {
        const self = this;
        return new AdminappsapprovedEntity_1.AdminappsapprovedEntity(self, entopts);
    }
    // Entity access: `client.Adminappsrequest().list()` / `client.Adminappsrequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminappsrequest(entopts) {
        const self = this;
        return new AdminappsrequestEntity_1.AdminappsrequestEntity(self, entopts);
    }
    // Entity access: `client.Adminappsrestricted().list()` / `client.Adminappsrestricted().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminappsrestricted(entopts) {
        const self = this;
        return new AdminappsrestrictedEntity_1.AdminappsrestrictedEntity(self, entopts);
    }
    // Entity access: `client.Adminconversation().list()` / `client.Adminconversation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminconversation(entopts) {
        const self = this;
        return new AdminconversationEntity_1.AdminconversationEntity(self, entopts);
    }
    // Entity access: `client.Adminconversationsekm().list()` / `client.Adminconversationsekm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminconversationsekm(entopts) {
        const self = this;
        return new AdminconversationsekmEntity_1.AdminconversationsekmEntity(self, entopts);
    }
    // Entity access: `client.AdminconversationsrestrictAccess().list()` / `client.AdminconversationsrestrictAccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminconversationsrestrictAccess(entopts) {
        const self = this;
        return new AdminconversationsrestrictAccessEntity_1.AdminconversationsrestrictAccessEntity(self, entopts);
    }
    // Entity access: `client.Adminemoji().list()` / `client.Adminemoji().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminemoji(entopts) {
        const self = this;
        return new AdminemojiEntity_1.AdminemojiEntity(self, entopts);
    }
    // Entity access: `client.AdmininviteRequest().list()` / `client.AdmininviteRequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdmininviteRequest(entopts) {
        const self = this;
        return new AdmininviteRequestEntity_1.AdmininviteRequestEntity(self, entopts);
    }
    // Entity access: `client.AdmininviteRequestsapproved().list()` / `client.AdmininviteRequestsapproved().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdmininviteRequestsapproved(entopts) {
        const self = this;
        return new AdmininviteRequestsapprovedEntity_1.AdmininviteRequestsapprovedEntity(self, entopts);
    }
    // Entity access: `client.AdmininviteRequestsdenied().list()` / `client.AdmininviteRequestsdenied().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdmininviteRequestsdenied(entopts) {
        const self = this;
        return new AdmininviteRequestsdeniedEntity_1.AdmininviteRequestsdeniedEntity(self, entopts);
    }
    // Entity access: `client.Adminteam().list()` / `client.Adminteam().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminteam(entopts) {
        const self = this;
        return new AdminteamEntity_1.AdminteamEntity(self, entopts);
    }
    // Entity access: `client.Adminteamsadmin().list()` / `client.Adminteamsadmin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminteamsadmin(entopts) {
        const self = this;
        return new AdminteamsadminEntity_1.AdminteamsadminEntity(self, entopts);
    }
    // Entity access: `client.Adminteamsowner().list()` / `client.Adminteamsowner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminteamsowner(entopts) {
        const self = this;
        return new AdminteamsownerEntity_1.AdminteamsownerEntity(self, entopts);
    }
    // Entity access: `client.Adminteamssetting().list()` / `client.Adminteamssetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminteamssetting(entopts) {
        const self = this;
        return new AdminteamssettingEntity_1.AdminteamssettingEntity(self, entopts);
    }
    // Entity access: `client.Adminuser().list()` / `client.Adminuser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminuser(entopts) {
        const self = this;
        return new AdminuserEntity_1.AdminuserEntity(self, entopts);
    }
    // Entity access: `client.Adminusergroup().list()` / `client.Adminusergroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminusergroup(entopts) {
        const self = this;
        return new AdminusergroupEntity_1.AdminusergroupEntity(self, entopts);
    }
    // Entity access: `client.Adminuserssession().list()` / `client.Adminuserssession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Adminuserssession(entopts) {
        const self = this;
        return new AdminuserssessionEntity_1.AdminuserssessionEntity(self, entopts);
    }
    // Entity access: `client.Api().list()` / `client.Api().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Api(entopts) {
        const self = this;
        return new ApiEntity_1.ApiEntity(self, entopts);
    }
    // Entity access: `client.App().list()` / `client.App().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    App(entopts) {
        const self = this;
        return new AppEntity_1.AppEntity(self, entopts);
    }
    // Entity access: `client.Appseventauthorization().list()` / `client.Appseventauthorization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Appseventauthorization(entopts) {
        const self = this;
        return new AppseventauthorizationEntity_1.AppseventauthorizationEntity(self, entopts);
    }
    // Entity access: `client.Appspermission().list()` / `client.Appspermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Appspermission(entopts) {
        const self = this;
        return new AppspermissionEntity_1.AppspermissionEntity(self, entopts);
    }
    // Entity access: `client.Appspermissionsresource().list()` / `client.Appspermissionsresource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Appspermissionsresource(entopts) {
        const self = this;
        return new AppspermissionsresourceEntity_1.AppspermissionsresourceEntity(self, entopts);
    }
    // Entity access: `client.Appspermissionsscope().list()` / `client.Appspermissionsscope().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Appspermissionsscope(entopts) {
        const self = this;
        return new AppspermissionsscopeEntity_1.AppspermissionsscopeEntity(self, entopts);
    }
    // Entity access: `client.Appspermissionsuser().list()` / `client.Appspermissionsuser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Appspermissionsuser(entopts) {
        const self = this;
        return new AppspermissionsuserEntity_1.AppspermissionsuserEntity(self, entopts);
    }
    // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Auth(entopts) {
        const self = this;
        return new AuthEntity_1.AuthEntity(self, entopts);
    }
    // Entity access: `client.Bot().list()` / `client.Bot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Bot(entopts) {
        const self = this;
        return new BotEntity_1.BotEntity(self, entopts);
    }
    // Entity access: `client.Call().list()` / `client.Call().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Call(entopts) {
        const self = this;
        return new CallEntity_1.CallEntity(self, entopts);
    }
    // Entity access: `client.Callsparticipant().list()` / `client.Callsparticipant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Callsparticipant(entopts) {
        const self = this;
        return new CallsparticipantEntity_1.CallsparticipantEntity(self, entopts);
    }
    // Entity access: `client.Chat().list()` / `client.Chat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Chat(entopts) {
        const self = this;
        return new ChatEntity_1.ChatEntity(self, entopts);
    }
    // Entity access: `client.ChatscheduledMessage().list()` / `client.ChatscheduledMessage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChatscheduledMessage(entopts) {
        const self = this;
        return new ChatscheduledMessageEntity_1.ChatscheduledMessageEntity(self, entopts);
    }
    // Entity access: `client.Conversation().list()` / `client.Conversation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Conversation(entopts) {
        const self = this;
        return new ConversationEntity_1.ConversationEntity(self, entopts);
    }
    // Entity access: `client.Dialog().list()` / `client.Dialog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dialog(entopts) {
        const self = this;
        return new DialogEntity_1.DialogEntity(self, entopts);
    }
    // Entity access: `client.Dnd().list()` / `client.Dnd().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dnd(entopts) {
        const self = this;
        return new DndEntity_1.DndEntity(self, entopts);
    }
    // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Emoji(entopts) {
        const self = this;
        return new EmojiEntity_1.EmojiEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.Filescomment().list()` / `client.Filescomment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Filescomment(entopts) {
        const self = this;
        return new FilescommentEntity_1.FilescommentEntity(self, entopts);
    }
    // Entity access: `client.Filesremote().list()` / `client.Filesremote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Filesremote(entopts) {
        const self = this;
        return new FilesremoteEntity_1.FilesremoteEntity(self, entopts);
    }
    // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Migration(entopts) {
        const self = this;
        return new MigrationEntity_1.MigrationEntity(self, entopts);
    }
    // Entity access: `client.Oauth().list()` / `client.Oauth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Oauth(entopts) {
        const self = this;
        return new OauthEntity_1.OauthEntity(self, entopts);
    }
    // Entity access: `client.Oauthv2().list()` / `client.Oauthv2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Oauthv2(entopts) {
        const self = this;
        return new Oauthv2Entity_1.Oauthv2Entity(self, entopts);
    }
    // Entity access: `client.Pin().list()` / `client.Pin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pin(entopts) {
        const self = this;
        return new PinEntity_1.PinEntity(self, entopts);
    }
    // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Reaction(entopts) {
        const self = this;
        return new ReactionEntity_1.ReactionEntity(self, entopts);
    }
    // Entity access: `client.Reminder().list()` / `client.Reminder().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Reminder(entopts) {
        const self = this;
        return new ReminderEntity_1.ReminderEntity(self, entopts);
    }
    // Entity access: `client.Rtm().list()` / `client.Rtm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rtm(entopts) {
        const self = this;
        return new RtmEntity_1.RtmEntity(self, entopts);
    }
    // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Search(entopts) {
        const self = this;
        return new SearchEntity_1.SearchEntity(self, entopts);
    }
    // Entity access: `client.Star().list()` / `client.Star().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Star(entopts) {
        const self = this;
        return new StarEntity_1.StarEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.Teamprofile().list()` / `client.Teamprofile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Teamprofile(entopts) {
        const self = this;
        return new TeamprofileEntity_1.TeamprofileEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.Usergroup().list()` / `client.Usergroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usergroup(entopts) {
        const self = this;
        return new UsergroupEntity_1.UsergroupEntity(self, entopts);
    }
    // Entity access: `client.Usergroupsuser().list()` / `client.Usergroupsuser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usergroupsuser(entopts) {
        const self = this;
        return new UsergroupsuserEntity_1.UsergroupsuserEntity(self, entopts);
    }
    // Entity access: `client.Usersprofile().list()` / `client.Usersprofile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usersprofile(entopts) {
        const self = this;
        return new UsersprofileEntity_1.UsersprofileEntity(self, entopts);
    }
    // Entity access: `client.View().list()` / `client.View().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    View(entopts) {
        const self = this;
        return new ViewEntity_1.ViewEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new SlackSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return SlackSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Slack' };
    }
    toString() {
        return 'Slack ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.SlackSDK = SlackSDK;
const SDK = SlackSDK;
exports.SDK = SDK;
//# sourceMappingURL=SlackSDK.js.map