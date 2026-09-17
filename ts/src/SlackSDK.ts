// Slack Ts SDK

import { AdminappEntity } from './entity/AdminappEntity'
import { AdminappsapprovedEntity } from './entity/AdminappsapprovedEntity'
import { AdminappsrequestEntity } from './entity/AdminappsrequestEntity'
import { AdminappsrestrictedEntity } from './entity/AdminappsrestrictedEntity'
import { AdminconversationEntity } from './entity/AdminconversationEntity'
import { AdminconversationsekmEntity } from './entity/AdminconversationsekmEntity'
import { AdminconversationsrestrictAccessEntity } from './entity/AdminconversationsrestrictAccessEntity'
import { AdminemojiEntity } from './entity/AdminemojiEntity'
import { AdmininviteRequestEntity } from './entity/AdmininviteRequestEntity'
import { AdmininviteRequestsapprovedEntity } from './entity/AdmininviteRequestsapprovedEntity'
import { AdmininviteRequestsdeniedEntity } from './entity/AdmininviteRequestsdeniedEntity'
import { AdminteamEntity } from './entity/AdminteamEntity'
import { AdminteamsadminEntity } from './entity/AdminteamsadminEntity'
import { AdminteamsownerEntity } from './entity/AdminteamsownerEntity'
import { AdminteamssettingEntity } from './entity/AdminteamssettingEntity'
import { AdminuserEntity } from './entity/AdminuserEntity'
import { AdminusergroupEntity } from './entity/AdminusergroupEntity'
import { AdminuserssessionEntity } from './entity/AdminuserssessionEntity'
import { ApiEntity } from './entity/ApiEntity'
import { AppEntity } from './entity/AppEntity'
import { AppseventauthorizationEntity } from './entity/AppseventauthorizationEntity'
import { AppspermissionEntity } from './entity/AppspermissionEntity'
import { AppspermissionsresourceEntity } from './entity/AppspermissionsresourceEntity'
import { AppspermissionsscopeEntity } from './entity/AppspermissionsscopeEntity'
import { AppspermissionsuserEntity } from './entity/AppspermissionsuserEntity'
import { AuthEntity } from './entity/AuthEntity'
import { BotEntity } from './entity/BotEntity'
import { CallEntity } from './entity/CallEntity'
import { CallsparticipantEntity } from './entity/CallsparticipantEntity'
import { ChatEntity } from './entity/ChatEntity'
import { ChatscheduledMessageEntity } from './entity/ChatscheduledMessageEntity'
import { ConversationEntity } from './entity/ConversationEntity'
import { DialogEntity } from './entity/DialogEntity'
import { DndEntity } from './entity/DndEntity'
import { EmojiEntity } from './entity/EmojiEntity'
import { FileEntity } from './entity/FileEntity'
import { FilescommentEntity } from './entity/FilescommentEntity'
import { FilesremoteEntity } from './entity/FilesremoteEntity'
import { MigrationEntity } from './entity/MigrationEntity'
import { OauthEntity } from './entity/OauthEntity'
import { Oauthv2Entity } from './entity/Oauthv2Entity'
import { PinEntity } from './entity/PinEntity'
import { ReactionEntity } from './entity/ReactionEntity'
import { ReminderEntity } from './entity/ReminderEntity'
import { RtmEntity } from './entity/RtmEntity'
import { SearchEntity } from './entity/SearchEntity'
import { StarEntity } from './entity/StarEntity'
import { TeamEntity } from './entity/TeamEntity'
import { TeamprofileEntity } from './entity/TeamprofileEntity'
import { UserEntity } from './entity/UserEntity'
import { UsergroupEntity } from './entity/UsergroupEntity'
import { UsergroupsuserEntity } from './entity/UsergroupsuserEntity'
import { UsersprofileEntity } from './entity/UsersprofileEntity'
import { ViewEntity } from './entity/ViewEntity'
import { WorkflowEntity } from './entity/WorkflowEntity'

export type * from './SlackTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { SlackEntityBase } from './SlackEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class SlackSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
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
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('SlackSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
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
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('SlackSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('SlackSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Adminapp().list()` / `client.Adminapp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminapp(entopts?: Record<string, any>) {
    const self = this
    return new AdminappEntity(self, entopts)
  }


  // Entity access: `client.Adminappsapproved().list()` / `client.Adminappsapproved().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminappsapproved(entopts?: Record<string, any>) {
    const self = this
    return new AdminappsapprovedEntity(self, entopts)
  }


  // Entity access: `client.Adminappsrequest().list()` / `client.Adminappsrequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminappsrequest(entopts?: Record<string, any>) {
    const self = this
    return new AdminappsrequestEntity(self, entopts)
  }


  // Entity access: `client.Adminappsrestricted().list()` / `client.Adminappsrestricted().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminappsrestricted(entopts?: Record<string, any>) {
    const self = this
    return new AdminappsrestrictedEntity(self, entopts)
  }


  // Entity access: `client.Adminconversation().list()` / `client.Adminconversation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminconversation(entopts?: Record<string, any>) {
    const self = this
    return new AdminconversationEntity(self, entopts)
  }


  // Entity access: `client.Adminconversationsekm().list()` / `client.Adminconversationsekm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminconversationsekm(entopts?: Record<string, any>) {
    const self = this
    return new AdminconversationsekmEntity(self, entopts)
  }


  // Entity access: `client.AdminconversationsrestrictAccess().list()` / `client.AdminconversationsrestrictAccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AdminconversationsrestrictAccess(entopts?: Record<string, any>) {
    const self = this
    return new AdminconversationsrestrictAccessEntity(self, entopts)
  }


  // Entity access: `client.Adminemoji().list()` / `client.Adminemoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminemoji(entopts?: Record<string, any>) {
    const self = this
    return new AdminemojiEntity(self, entopts)
  }


  // Entity access: `client.AdmininviteRequest().list()` / `client.AdmininviteRequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AdmininviteRequest(entopts?: Record<string, any>) {
    const self = this
    return new AdmininviteRequestEntity(self, entopts)
  }


  // Entity access: `client.AdmininviteRequestsapproved().list()` / `client.AdmininviteRequestsapproved().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AdmininviteRequestsapproved(entopts?: Record<string, any>) {
    const self = this
    return new AdmininviteRequestsapprovedEntity(self, entopts)
  }


  // Entity access: `client.AdmininviteRequestsdenied().list()` / `client.AdmininviteRequestsdenied().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AdmininviteRequestsdenied(entopts?: Record<string, any>) {
    const self = this
    return new AdmininviteRequestsdeniedEntity(self, entopts)
  }


  // Entity access: `client.Adminteam().list()` / `client.Adminteam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminteam(entopts?: Record<string, any>) {
    const self = this
    return new AdminteamEntity(self, entopts)
  }


  // Entity access: `client.Adminteamsadmin().list()` / `client.Adminteamsadmin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminteamsadmin(entopts?: Record<string, any>) {
    const self = this
    return new AdminteamsadminEntity(self, entopts)
  }


  // Entity access: `client.Adminteamsowner().list()` / `client.Adminteamsowner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminteamsowner(entopts?: Record<string, any>) {
    const self = this
    return new AdminteamsownerEntity(self, entopts)
  }


  // Entity access: `client.Adminteamssetting().list()` / `client.Adminteamssetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminteamssetting(entopts?: Record<string, any>) {
    const self = this
    return new AdminteamssettingEntity(self, entopts)
  }


  // Entity access: `client.Adminuser().list()` / `client.Adminuser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminuser(entopts?: Record<string, any>) {
    const self = this
    return new AdminuserEntity(self, entopts)
  }


  // Entity access: `client.Adminusergroup().list()` / `client.Adminusergroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminusergroup(entopts?: Record<string, any>) {
    const self = this
    return new AdminusergroupEntity(self, entopts)
  }


  // Entity access: `client.Adminuserssession().list()` / `client.Adminuserssession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Adminuserssession(entopts?: Record<string, any>) {
    const self = this
    return new AdminuserssessionEntity(self, entopts)
  }


  // Entity access: `client.Api().list()` / `client.Api().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Api(entopts?: Record<string, any>) {
    const self = this
    return new ApiEntity(self, entopts)
  }


  // Entity access: `client.App().list()` / `client.App().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  App(entopts?: Record<string, any>) {
    const self = this
    return new AppEntity(self, entopts)
  }


  // Entity access: `client.Appseventauthorization().list()` / `client.Appseventauthorization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Appseventauthorization(entopts?: Record<string, any>) {
    const self = this
    return new AppseventauthorizationEntity(self, entopts)
  }


  // Entity access: `client.Appspermission().list()` / `client.Appspermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Appspermission(entopts?: Record<string, any>) {
    const self = this
    return new AppspermissionEntity(self, entopts)
  }


  // Entity access: `client.Appspermissionsresource().list()` / `client.Appspermissionsresource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Appspermissionsresource(entopts?: Record<string, any>) {
    const self = this
    return new AppspermissionsresourceEntity(self, entopts)
  }


  // Entity access: `client.Appspermissionsscope().list()` / `client.Appspermissionsscope().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Appspermissionsscope(entopts?: Record<string, any>) {
    const self = this
    return new AppspermissionsscopeEntity(self, entopts)
  }


  // Entity access: `client.Appspermissionsuser().list()` / `client.Appspermissionsuser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Appspermissionsuser(entopts?: Record<string, any>) {
    const self = this
    return new AppspermissionsuserEntity(self, entopts)
  }


  // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Auth(entopts?: Record<string, any>) {
    const self = this
    return new AuthEntity(self, entopts)
  }


  // Entity access: `client.Bot().list()` / `client.Bot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Bot(entopts?: Record<string, any>) {
    const self = this
    return new BotEntity(self, entopts)
  }


  // Entity access: `client.Call().list()` / `client.Call().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Call(entopts?: Record<string, any>) {
    const self = this
    return new CallEntity(self, entopts)
  }


  // Entity access: `client.Callsparticipant().list()` / `client.Callsparticipant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Callsparticipant(entopts?: Record<string, any>) {
    const self = this
    return new CallsparticipantEntity(self, entopts)
  }


  // Entity access: `client.Chat().list()` / `client.Chat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Chat(entopts?: Record<string, any>) {
    const self = this
    return new ChatEntity(self, entopts)
  }


  // Entity access: `client.ChatscheduledMessage().list()` / `client.ChatscheduledMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChatscheduledMessage(entopts?: Record<string, any>) {
    const self = this
    return new ChatscheduledMessageEntity(self, entopts)
  }


  // Entity access: `client.Conversation().list()` / `client.Conversation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conversation(entopts?: Record<string, any>) {
    const self = this
    return new ConversationEntity(self, entopts)
  }


  // Entity access: `client.Dialog().list()` / `client.Dialog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dialog(entopts?: Record<string, any>) {
    const self = this
    return new DialogEntity(self, entopts)
  }


  // Entity access: `client.Dnd().list()` / `client.Dnd().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dnd(entopts?: Record<string, any>) {
    const self = this
    return new DndEntity(self, entopts)
  }


  // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Emoji(entopts?: Record<string, any>) {
    const self = this
    return new EmojiEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts?: Record<string, any>) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.Filescomment().list()` / `client.Filescomment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Filescomment(entopts?: Record<string, any>) {
    const self = this
    return new FilescommentEntity(self, entopts)
  }


  // Entity access: `client.Filesremote().list()` / `client.Filesremote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Filesremote(entopts?: Record<string, any>) {
    const self = this
    return new FilesremoteEntity(self, entopts)
  }


  // Entity access: `client.Migration().list()` / `client.Migration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Migration(entopts?: Record<string, any>) {
    const self = this
    return new MigrationEntity(self, entopts)
  }


  // Entity access: `client.Oauth().list()` / `client.Oauth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Oauth(entopts?: Record<string, any>) {
    const self = this
    return new OauthEntity(self, entopts)
  }


  // Entity access: `client.Oauthv2().list()` / `client.Oauthv2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Oauthv2(entopts?: Record<string, any>) {
    const self = this
    return new Oauthv2Entity(self, entopts)
  }


  // Entity access: `client.Pin().list()` / `client.Pin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pin(entopts?: Record<string, any>) {
    const self = this
    return new PinEntity(self, entopts)
  }


  // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reaction(entopts?: Record<string, any>) {
    const self = this
    return new ReactionEntity(self, entopts)
  }


  // Entity access: `client.Reminder().list()` / `client.Reminder().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reminder(entopts?: Record<string, any>) {
    const self = this
    return new ReminderEntity(self, entopts)
  }


  // Entity access: `client.Rtm().list()` / `client.Rtm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rtm(entopts?: Record<string, any>) {
    const self = this
    return new RtmEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts?: Record<string, any>) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.Star().list()` / `client.Star().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Star(entopts?: Record<string, any>) {
    const self = this
    return new StarEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts?: Record<string, any>) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.Teamprofile().list()` / `client.Teamprofile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Teamprofile(entopts?: Record<string, any>) {
    const self = this
    return new TeamprofileEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.Usergroup().list()` / `client.Usergroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usergroup(entopts?: Record<string, any>) {
    const self = this
    return new UsergroupEntity(self, entopts)
  }


  // Entity access: `client.Usergroupsuser().list()` / `client.Usergroupsuser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usergroupsuser(entopts?: Record<string, any>) {
    const self = this
    return new UsergroupsuserEntity(self, entopts)
  }


  // Entity access: `client.Usersprofile().list()` / `client.Usersprofile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usersprofile(entopts?: Record<string, any>) {
    const self = this
    return new UsersprofileEntity(self, entopts)
  }


  // Entity access: `client.View().list()` / `client.View().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  View(entopts?: Record<string, any>) {
    const self = this
    return new ViewEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new SlackSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return SlackSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Slack' }
  }

  toString() {
    return 'Slack ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = SlackSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  SlackEntityBase,

  SlackSDK,
  SDK,
}


