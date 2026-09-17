# Slack TypeScript SDK



The TypeScript SDK for the Slack API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Adminapp()` — each with a small set of operations (`list`, `load`, `create`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/slack-sdk/releases](https://github.com/voxgig-sdk/slack-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { SlackSDK } from '@voxgig-sdk/slack'

const client = new SlackSDK({
  apikey: process.env.SLACK_APIKEY,
})
```

### 4. Create, update, and remove

```ts
// Create — returns the created Adminapp ENTITY (.data() for the record)
const created = await client.Adminapp().create({
  ok: true,
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const adminteam = await client.Adminteam().load()
  console.log(adminteam)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = SlackSDK.test()

const adminteam = await client.Adminteam().load()
// adminteam is the entity, populated with mock response data
// — call adminteam.data() for the record itself
console.log(adminteam)
```

You can also use the instance method:

```ts
const client = new SlackSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Adminteam()

// First call runs the operation and stores its result
await entity.load()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new SlackSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SLACK_TEST_LIVE=TRUE
SLACK_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### SlackSDK

#### Constructor

```ts
new SlackSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Adminapp(data?)` | `AdminappEntity` | Create an Adminapp entity instance. |
| `Adminappsapproved(data?)` | `AdminappsapprovedEntity` | Create an Adminappsapproved entity instance. |
| `Adminappsrequest(data?)` | `AdminappsrequestEntity` | Create an Adminappsrequest entity instance. |
| `Adminappsrestricted(data?)` | `AdminappsrestrictedEntity` | Create an Adminappsrestricted entity instance. |
| `Adminconversation(data?)` | `AdminconversationEntity` | Create an Adminconversation entity instance. |
| `Adminconversationsekm(data?)` | `AdminconversationsekmEntity` | Create an Adminconversationsekm entity instance. |
| `AdminconversationsrestrictAccess(data?)` | `AdminconversationsrestrictAccessEntity` | Create an AdminconversationsrestrictAccess entity instance. |
| `Adminemoji(data?)` | `AdminemojiEntity` | Create an Adminemoji entity instance. |
| `AdmininviteRequest(data?)` | `AdmininviteRequestEntity` | Create an AdmininviteRequest entity instance. |
| `AdmininviteRequestsapproved(data?)` | `AdmininviteRequestsapprovedEntity` | Create an AdmininviteRequestsapproved entity instance. |
| `AdmininviteRequestsdenied(data?)` | `AdmininviteRequestsdeniedEntity` | Create an AdmininviteRequestsdenied entity instance. |
| `Adminteam(data?)` | `AdminteamEntity` | Create an Adminteam entity instance. |
| `Adminteamsadmin(data?)` | `AdminteamsadminEntity` | Create an Adminteamsadmin entity instance. |
| `Adminteamsowner(data?)` | `AdminteamsownerEntity` | Create an Adminteamsowner entity instance. |
| `Adminteamssetting(data?)` | `AdminteamssettingEntity` | Create an Adminteamssetting entity instance. |
| `Adminuser(data?)` | `AdminuserEntity` | Create an Adminuser entity instance. |
| `Adminusergroup(data?)` | `AdminusergroupEntity` | Create an Adminusergroup entity instance. |
| `Adminuserssession(data?)` | `AdminuserssessionEntity` | Create an Adminuserssession entity instance. |
| `Api(data?)` | `ApiEntity` | Create an Api entity instance. |
| `App(data?)` | `AppEntity` | Create an App entity instance. |
| `Appseventauthorization(data?)` | `AppseventauthorizationEntity` | Create an Appseventauthorization entity instance. |
| `Appspermission(data?)` | `AppspermissionEntity` | Create an Appspermission entity instance. |
| `Appspermissionsresource(data?)` | `AppspermissionsresourceEntity` | Create an Appspermissionsresource entity instance. |
| `Appspermissionsscope(data?)` | `AppspermissionsscopeEntity` | Create an Appspermissionsscope entity instance. |
| `Appspermissionsuser(data?)` | `AppspermissionsuserEntity` | Create an Appspermissionsuser entity instance. |
| `Auth(data?)` | `AuthEntity` | Create an Auth entity instance. |
| `Bot(data?)` | `BotEntity` | Create a Bot entity instance. |
| `Call(data?)` | `CallEntity` | Create a Call entity instance. |
| `Callsparticipant(data?)` | `CallsparticipantEntity` | Create a Callsparticipant entity instance. |
| `Chat(data?)` | `ChatEntity` | Create a Chat entity instance. |
| `ChatscheduledMessage(data?)` | `ChatscheduledMessageEntity` | Create a ChatscheduledMessage entity instance. |
| `Conversation(data?)` | `ConversationEntity` | Create a Conversation entity instance. |
| `Dialog(data?)` | `DialogEntity` | Create a Dialog entity instance. |
| `Dnd(data?)` | `DndEntity` | Create a Dnd entity instance. |
| `Emoji(data?)` | `EmojiEntity` | Create an Emoji entity instance. |
| `File(data?)` | `FileEntity` | Create a File entity instance. |
| `Filescomment(data?)` | `FilescommentEntity` | Create a Filescomment entity instance. |
| `Filesremote(data?)` | `FilesremoteEntity` | Create a Filesremote entity instance. |
| `Migration(data?)` | `MigrationEntity` | Create a Migration entity instance. |
| `Oauth(data?)` | `OauthEntity` | Create an Oauth entity instance. |
| `Oauthv2(data?)` | `Oauthv2Entity` | Create an Oauthv2 entity instance. |
| `Pin(data?)` | `PinEntity` | Create a Pin entity instance. |
| `Reaction(data?)` | `ReactionEntity` | Create a Reaction entity instance. |
| `Reminder(data?)` | `ReminderEntity` | Create a Reminder entity instance. |
| `Rtm(data?)` | `RtmEntity` | Create a Rtm entity instance. |
| `Search(data?)` | `SearchEntity` | Create a Search entity instance. |
| `Star(data?)` | `StarEntity` | Create a Star entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `Teamprofile(data?)` | `TeamprofileEntity` | Create a Teamprofile entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `Usergroup(data?)` | `UsergroupEntity` | Create an Usergroup entity instance. |
| `Usergroupsuser(data?)` | `UsergroupsuserEntity` | Create an Usergroupsuser entity instance. |
| `Usersprofile(data?)` | `UsersprofileEntity` | Create an Usersprofile entity instance. |
| `View(data?)` | `ViewEntity` | Create a View entity instance. |
| `Workflow(data?)` | `WorkflowEntity` | Create a Workflow entity instance. |
| `tester(testopts?, sdkopts?)` | `SlackSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `SlackSDK.test(testopts?, sdkopts?)` | `SlackSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): SlackSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Adminapp

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create.

API path: `/admin.apps.approve`

#### Adminappsapproved

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.apps.approved.list`

#### Adminappsrequest

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.apps.requests.list`

#### Adminappsrestricted

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.apps.restricted.list`

#### Adminconversation

| Field | Description |
| --- | --- |
| `accepted_user` |  |
| `can_thread` |  |
| `channel_id` |  |
| `created` |  |
| `creator` |  |
| `id` |  |
| `is_archived` |  |
| `is_channel` |  |
| `is_frozen` |  |
| `is_general` |  |
| `is_member` |  |
| `is_moved` |  |
| `is_mpim` |  |
| `is_non_threadable` |  |
| `is_org_shared` |  |
| `is_pending_ext_shared` |  |
| `is_private` |  |
| `is_read_only` |  |
| `is_shared` |  |
| `is_thread_only` |  |
| `last_read` |  |
| `latest` |  |
| `members` |  |
| `name` |  |
| `name_normalized` |  |
| `num_members` |  |
| `ok` |  |
| `pending_shared` |  |
| `previous_names` |  |
| `priority` |  |
| `purpose` |  |
| `response_metadata` |  |
| `team_ids` |  |
| `topic` |  |
| `unlinked` |  |
| `unread_count` |  |
| `unread_count_display` |  |
| `who_can_post` |  |

Operations: create, list, load.

API path: `/admin.conversations.create`

#### Adminconversationsekm

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.conversations.ekm.listOriginalConnectedChannelInfo`

#### AdminconversationsrestrictAccess

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.conversations.restrictAccess.addGroup`

#### Adminemoji

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.emoji.addAlias`

#### AdmininviteRequest

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.inviteRequests.approve`

#### AdmininviteRequestsapproved

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.inviteRequests.approved.list`

#### AdmininviteRequestsdenied

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.inviteRequests.denied.list`

#### Adminteam

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.teams.create`

#### Adminteamsadmin

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.teams.admins.list`

#### Adminteamsowner

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/admin.teams.owners.list`

#### Adminteamssetting

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.teams.settings.setDefaultChannels`

#### Adminuser

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.users.invite`

#### Adminusergroup

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/admin.usergroups.addTeams`

#### Adminuserssession

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create.

API path: `/admin.users.session.reset`

#### Api

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/api.test`

#### App

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/apps.uninstall`

#### Appseventauthorization

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/apps.event.authorizations.list`

#### Appspermission

| Field | Description |
| --- | --- |
| `app_home` |  |
| `channel` |  |
| `group` |  |
| `im` |  |
| `mpim` |  |
| `ok` |  |
| `team` |  |

Operations: load.

API path: `/apps.permissions.request`

#### Appspermissionsresource

| Field | Description |
| --- | --- |
| `id` |  |
| `type` |  |

Operations: list.

API path: `/apps.permissions.resources.list`

#### Appspermissionsscope

| Field | Description |
| --- | --- |
| `app_home` |  |
| `channel` |  |
| `group` |  |
| `im` |  |
| `mpim` |  |
| `team` |  |
| `user` |  |

Operations: load.

API path: `/apps.permissions.scopes.list`

#### Appspermissionsuser

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/apps.permissions.users.request`

#### Auth

| Field | Description |
| --- | --- |
| `bot_id` |  |
| `is_enterprise_install` |  |
| `ok` |  |
| `revoked` |  |
| `team` |  |
| `team_id` |  |
| `url` |  |
| `user` |  |
| `user_id` |  |

Operations: load.

API path: `/auth.revoke`

#### Bot

| Field | Description |
| --- | --- |
| `app_id` |  |
| `deleted` |  |
| `icons` |  |
| `id` |  |
| `name` |  |
| `updated` |  |
| `user_id` |  |

Operations: load.

API path: `/bots.info`

#### Call

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/calls.add`

#### Callsparticipant

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create.

API path: `/calls.participants.add`

#### Chat

| Field | Description |
| --- | --- |
| `attachments` |  |
| `blocks` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` |  |
| `bot_profile` |  |
| `channel` |  |
| `client_msg_id` |  |
| `comment` |  |
| `display_as_bot` |  |
| `file` |  |
| `files` |  |
| `icons` |  |
| `inviter` |  |
| `is_delayed_message` |  |
| `is_intro` |  |
| `is_starred` |  |
| `last_read` |  |
| `latest_reply` |  |
| `message_ts` |  |
| `name` |  |
| `ok` |  |
| `old_name` |  |
| `parent_user_id` |  |
| `permalink` |  |
| `pinned_to` |  |
| `purpose` |  |
| `reactions` |  |
| `reply_count` |  |
| `reply_users` |  |
| `reply_users_count` |  |
| `source_team` |  |
| `subscribed` |  |
| `subtype` |  |
| `team` |  |
| `text` |  |
| `thread_ts` |  |
| `topic` |  |
| `ts` |  |
| `type` |  |
| `unread_count` |  |
| `upload` |  |
| `user` |  |
| `user_profile` |  |
| `user_team` |  |
| `username` |  |

Operations: create, load.

API path: `/chat.postMessage`

#### ChatscheduledMessage

| Field | Description |
| --- | --- |
| `channel_id` |  |
| `date_created` |  |
| `id` |  |
| `post_at` |  |
| `text` |  |

Operations: list.

API path: `/chat.scheduledMessages.list`

#### Conversation

| Field | Description |
| --- | --- |
| `already_closed` |  |
| `already_open` |  |
| `attachments` |  |
| `blocks` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` |  |
| `bot_profile` |  |
| `channel` |  |
| `channels` |  |
| `client_msg_id` |  |
| `comment` |  |
| `display_as_bot` |  |
| `file` |  |
| `files` |  |
| `has_more` |  |
| `icons` |  |
| `inviter` |  |
| `is_delayed_message` |  |
| `is_intro` |  |
| `is_starred` |  |
| `last_read` |  |
| `latest_reply` |  |
| `members` |  |
| `messages` |  |
| `name` |  |
| `no_op` |  |
| `not_in_channel` |  |
| `ok` |  |
| `old_name` |  |
| `parent_user_id` |  |
| `permalink` |  |
| `pinned_to` |  |
| `purpose` |  |
| `reactions` |  |
| `reply_count` |  |
| `reply_users` |  |
| `reply_users_count` |  |
| `response_metadata` |  |
| `source_team` |  |
| `subscribed` |  |
| `subtype` |  |
| `team` |  |
| `text` |  |
| `thread_ts` |  |
| `topic` |  |
| `ts` |  |
| `type` |  |
| `unread_count` |  |
| `upload` |  |
| `user` |  |
| `user_profile` |  |
| `user_team` |  |
| `username` |  |
| `warning` |  |

Operations: create, list, load.

API path: `/conversations.open`

#### Dialog

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/dialog.open`

#### Dnd

| Field | Description |
| --- | --- |
| `dnd_enabled` |  |
| `next_dnd_end_ts` |  |
| `next_dnd_start_ts` |  |
| `ok` |  |
| `snooze_enabled` |  |
| `snooze_endtime` |  |
| `snooze_remaining` |  |

Operations: create, load.

API path: `/dnd.setSnooze`

#### Emoji

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/emoji.list`

#### File

| Field | Description |
| --- | --- |
| `channels` |  |
| `comments` |  |
| `comments_count` |  |
| `content_html` |  |
| `created` |  |
| `date_delete` |  |
| `display_as_bot` |  |
| `editable` |  |
| `editor` |  |
| `external_id` |  |
| `external_type` |  |
| `external_url` |  |
| `file` |  |
| `filetype` |  |
| `groups` |  |
| `has_rich_preview` |  |
| `id` |  |
| `image_exif_rotation` |  |
| `ims` |  |
| `is_external` |  |
| `is_public` |  |
| `is_starred` |  |
| `is_tombstoned` |  |
| `last_editor` |  |
| `mimetype` |  |
| `mode` |  |
| `name` |  |
| `non_owner_editable` |  |
| `num_stars` |  |
| `ok` |  |
| `original_h` |  |
| `original_w` |  |
| `paging` |  |
| `permalink` |  |
| `permalink_public` |  |
| `pinned_info` |  |
| `pinned_to` |  |
| `pretty_type` |  |
| `preview` |  |
| `public_url_shared` |  |
| `reactions` |  |
| `response_metadata` |  |
| `shares` |  |
| `size` |  |
| `source_team` |  |
| `state` |  |
| `thumb_1024` |  |
| `thumb_1024_h` |  |
| `thumb_1024_w` |  |
| `thumb_160` |  |
| `thumb_360` |  |
| `thumb_360_h` |  |
| `thumb_360_w` |  |
| `thumb_480` |  |
| `thumb_480_h` |  |
| `thumb_480_w` |  |
| `thumb_64` |  |
| `thumb_720` |  |
| `thumb_720_h` |  |
| `thumb_720_w` |  |
| `thumb_80` |  |
| `thumb_800` |  |
| `thumb_800_h` |  |
| `thumb_800_w` |  |
| `thumb_960` |  |
| `thumb_960_h` |  |
| `thumb_960_w` |  |
| `thumb_tiny` |  |
| `timestamp` |  |
| `title` |  |
| `updated` |  |
| `url_private` |  |
| `url_private_download` |  |
| `user` |  |
| `user_team` |  |
| `username` |  |

Operations: create, list.

API path: `/files.upload`

#### Filescomment

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create.

API path: `/files.comments.delete`

#### Filesremote

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: create, load.

API path: `/files.remote.update`

#### Migration

| Field | Description |
| --- | --- |
| `enterprise_id` |  |
| `invalid_user_ids` |  |
| `ok` |  |
| `team_id` |  |
| `user_id_map` |  |

Operations: list.

API path: `/migration.exchange`

#### Oauth

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/oauth.access`

#### Oauthv2

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/oauth.v2.access`

#### Pin

| Field | Description |
| --- | --- |
| `items` |  |
| `ok` |  |

Operations: create, load.

API path: `/pins.add`

#### Reaction

| Field | Description |
| --- | --- |
| `file` |  |
| `items` |  |
| `ok` |  |
| `paging` |  |
| `response_metadata` |  |
| `type` |  |

Operations: create, list, load.

API path: `/reactions.remove`

#### Reminder

| Field | Description |
| --- | --- |
| `complete_ts` |  |
| `creator` |  |
| `id` |  |
| `ok` |  |
| `recurring` |  |
| `text` |  |
| `time` |  |
| `user` |  |

Operations: create, list, load.

API path: `/reminders.add`

#### Rtm

| Field | Description |
| --- | --- |
| `ok` |  |
| `self` |  |
| `team` |  |
| `url` |  |

Operations: load.

API path: `/rtm.connect`

#### Search

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/search.messages`

#### Star

| Field | Description |
| --- | --- |
| `items` |  |
| `ok` |  |
| `paging` |  |

Operations: create, list.

API path: `/stars.add`

#### Team

| Field | Description |
| --- | --- |
| `admin_app_id` |  |
| `app_id` |  |
| `app_type` |  |
| `archived` |  |
| `avatar_base_url` |  |
| `change_type` |  |
| `channel` |  |
| `count` |  |
| `country` |  |
| `created` |  |
| `date` |  |
| `date_create` |  |
| `date_first` |  |
| `date_last` |  |
| `deleted` |  |
| `description` |  |
| `discoverable` |  |
| `domain` |  |
| `email_domain` |  |
| `enterprise_id` |  |
| `enterprise_name` |  |
| `external_org_migrations` |  |
| `has_compliance_export` |  |
| `icon` |  |
| `id` |  |
| `ip` |  |
| `is_assigned` |  |
| `is_enterprise` |  |
| `is_over_storage_limit` |  |
| `isp` |  |
| `limit_ts` |  |
| `locale` |  |
| `messages_count` |  |
| `msg_edit_window_mins` |  |
| `name` |  |
| `ok` |  |
| `over_integrations_limit` |  |
| `over_storage_limit` |  |
| `pay_prod_cur` |  |
| `plan` |  |
| `primary_owner` |  |
| `region` |  |
| `scope` |  |
| `service_id` |  |
| `service_type` |  |
| `sso_provider` |  |
| `user_agent` |  |
| `user_id` |  |
| `user_name` |  |
| `username` |  |

Operations: list, load.

API path: `/team.integrationLogs`

#### Teamprofile

| Field | Description |
| --- | --- |
| `fields` |  |

Operations: load.

API path: `/team.profile.get`

#### User

| Field | Description |
| --- | --- |
| `auto_away` |  |
| `avatar_hash` |  |
| `cache_ts` |  |
| `channels` |  |
| `connection_count` |  |
| `image_1024` |  |
| `image_192` |  |
| `image_24` |  |
| `image_32` |  |
| `image_48` |  |
| `image_512` |  |
| `image_72` |  |
| `image_original` |  |
| `last_activity` |  |
| `manual_away` |  |
| `members` |  |
| `ok` |  |
| `online` |  |
| `presence` |  |
| `response_metadata` |  |
| `team` |  |
| `user` |  |

Operations: create, list, load.

API path: `/users.setPhoto`

#### Usergroup

| Field | Description |
| --- | --- |
| `auto_provision` |  |
| `auto_type` |  |
| `channel_count` |  |
| `created_by` |  |
| `date_create` |  |
| `date_delete` |  |
| `date_update` |  |
| `deleted_by` |  |
| `description` |  |
| `enterprise_subteam_id` |  |
| `handle` |  |
| `id` |  |
| `is_external` |  |
| `is_subteam` |  |
| `is_usergroup` |  |
| `name` |  |
| `prefs` |  |
| `team_id` |  |
| `updated_by` |  |
| `user_count` |  |
| `users` |  |

Operations: create, list.

API path: `/usergroups.update`

#### Usergroupsuser

| Field | Description |
| --- | --- |
| `auto_provision` |  |
| `auto_type` |  |
| `channel_count` |  |
| `created_by` |  |
| `date_create` |  |
| `date_delete` |  |
| `date_update` |  |
| `deleted_by` |  |
| `description` |  |
| `enterprise_subteam_id` |  |
| `handle` |  |
| `id` |  |
| `is_external` |  |
| `is_subteam` |  |
| `is_usergroup` |  |
| `name` |  |
| `ok` |  |
| `prefs` |  |
| `team_id` |  |
| `updated_by` |  |
| `user_count` |  |
| `users` |  |

Operations: create, list.

API path: `/usergroups.users.update`

#### Usersprofile

| Field | Description |
| --- | --- |
| `always_active` |  |
| `api_app_id` |  |
| `avatar_hash` |  |
| `bot_id` |  |
| `display_name` |  |
| `display_name_normalized` |  |
| `email` |  |
| `fields` |  |
| `first_name` |  |
| `guest_expiration_ts` |  |
| `guest_invited_by` |  |
| `image_1024` |  |
| `image_192` |  |
| `image_24` |  |
| `image_32` |  |
| `image_48` |  |
| `image_512` |  |
| `image_72` |  |
| `image_original` |  |
| `is_app_user` |  |
| `is_custom_image` |  |
| `is_restricted` |  |
| `is_ultra_restricted` |  |
| `last_avatar_image_hash` |  |
| `last_name` |  |
| `memberships_count` |  |
| `name` |  |
| `phone` |  |
| `pronouns` |  |
| `real_name` |  |
| `real_name_normalized` |  |
| `skype` |  |
| `status_default_emoji` |  |
| `status_default_text` |  |
| `status_default_text_canonical` |  |
| `status_emoji` |  |
| `status_expiration` |  |
| `status_text` |  |
| `status_text_canonical` |  |
| `team` |  |
| `title` |  |
| `updated` |  |
| `user_id` |  |
| `username` |  |

Operations: create, load.

API path: `/users.profile.set`

#### View

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/views.update`

#### Workflow

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: load.

API path: `/workflows.updateStep`



## Entities


### Adminapp

Create an instance: `const adminapp = client.Adminapp()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```ts
const adminapp = await client.Adminapp().create({
  ok: true,
})
```


### Adminappsapproved

Create an instance: `const adminappsapproved = client.Adminappsapproved()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminappsapproved = await client.Adminappsapproved().load({ token: 'token' })
```


### Adminappsrequest

Create an instance: `const adminappsrequest = client.Adminappsrequest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminappsrequest = await client.Adminappsrequest().load({ token: 'token' })
```


### Adminappsrestricted

Create an instance: `const adminappsrestricted = client.Adminappsrestricted()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminappsrestricted = await client.Adminappsrestricted().load({ token: 'token' })
```


### Adminconversation

Create an instance: `const adminconversation = client.Adminconversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted_user` | `string` |  |
| `can_thread` | `Record<string, any>` |  |
| `channel_id` | `string` |  |
| `created` | `number` |  |
| `creator` | `string` |  |
| `id` | `string` |  |
| `is_archived` | `boolean` |  |
| `is_channel` | `boolean` |  |
| `is_frozen` | `boolean` |  |
| `is_general` | `boolean` |  |
| `is_member` | `boolean` |  |
| `is_moved` | `number` |  |
| `is_mpim` | `boolean` |  |
| `is_non_threadable` | `boolean` |  |
| `is_org_shared` | `boolean` |  |
| `is_pending_ext_shared` | `boolean` |  |
| `is_private` | `boolean` |  |
| `is_read_only` | `boolean` |  |
| `is_shared` | `boolean` |  |
| `is_thread_only` | `boolean` |  |
| `last_read` | `string` |  |
| `latest` | `any` |  |
| `members` | `any[]` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |
| `num_members` | `number` |  |
| `ok` | `boolean` |  |
| `pending_shared` | `any[]` |  |
| `previous_names` | `any[]` |  |
| `priority` | `number` |  |
| `purpose` | `Record<string, any>` |  |
| `response_metadata` | `Record<string, any>` |  |
| `team_ids` | `any[]` |  |
| `topic` | `Record<string, any>` |  |
| `unlinked` | `number` |  |
| `unread_count` | `number` |  |
| `unread_count_display` | `number` |  |
| `who_can_post` | `Record<string, any>` |  |

#### Example: Load

```ts
const adminconversation = await client.Adminconversation().load({ channel_id: 'channel_id' })
```

#### Example: List

```ts
const adminconversations = await client.Adminconversation().list()
```

#### Example: Create

```ts
const adminconversation = await client.Adminconversation().create({
  is_private: true,
  name: 'example_name',
  created: 1,
  creator: 'example_creator',
  id: 'example_id',
  is_channel: true,
  is_mpim: true,
  is_org_shared: true,
  is_shared: true,
  members: [],
  name_normalized: 'example_name_normalized',
  ok: true,
  purpose: {},
  response_metadata: {},
  team_ids: [],
  topic: {},
})
```


### Adminconversationsekm

Create an instance: `const adminconversationsekm = client.Adminconversationsekm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminconversationsekm = await client.Adminconversationsekm().load({ token: 'token' })
```


### AdminconversationsrestrictAccess

Create an instance: `const adminconversationsrestrict_access = client.AdminconversationsrestrictAccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminconversationsrestrict_access = await client.AdminconversationsrestrictAccess().load({ channel_id: 'channel_id', token: 'token' })
```

#### Example: Create

```ts
const adminconversationsrestrict_access = await client.AdminconversationsrestrictAccess().create({
  channel_id: 'example_channel_id',
  group_id: 'example_group_id',
  token: 'example_token',
  ok: true,
})
```


### Adminemoji

Create an instance: `const adminemoji = client.Adminemoji()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminemoji = await client.Adminemoji().load({ token: 'token' })
```

#### Example: Create

```ts
const adminemoji = await client.Adminemoji().create({
  name: 'example_name',
  token: 'example_token',
  ok: true,
})
```


### AdmininviteRequest

Create an instance: `const admininvite_request = client.AdmininviteRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const admininvite_request = await client.AdmininviteRequest().load()
```

#### Example: Create

```ts
const admininvite_request = await client.AdmininviteRequest().create({
  invite_request_id: 'example_invite_request_id',
  ok: true,
})
```


### AdmininviteRequestsapproved

Create an instance: `const admininvite_requestsapproved = client.AdmininviteRequestsapproved()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const admininvite_requestsapproved = await client.AdmininviteRequestsapproved().load()
```


### AdmininviteRequestsdenied

Create an instance: `const admininvite_requestsdenied = client.AdmininviteRequestsdenied()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const admininvite_requestsdenied = await client.AdmininviteRequestsdenied().load()
```


### Adminteam

Create an instance: `const adminteam = client.Adminteam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminteam = await client.Adminteam().load()
```

#### Example: Create

```ts
const adminteam = await client.Adminteam().create({
  team_domain: 'example_team_domain',
  team_name: 'example_team_name',
  ok: true,
})
```


### Adminteamsadmin

Create an instance: `const adminteamsadmin = client.Adminteamsadmin()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminteamsadmin = await client.Adminteamsadmin().load({ team_id: 'team_id', token: 'token' })
```


### Adminteamsowner

Create an instance: `const adminteamsowner = client.Adminteamsowner()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminteamsowner = await client.Adminteamsowner().load({ team_id: 'team_id', token: 'token' })
```


### Adminteamssetting

Create an instance: `const adminteamssetting = client.Adminteamssetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminteamssetting = await client.Adminteamssetting().load({ team_id: 'team_id' })
```

#### Example: Create

```ts
const adminteamssetting = await client.Adminteamssetting().create({
  team_id: 'example_team_id',
  ok: true,
})
```


### Adminuser

Create an instance: `const adminuser = client.Adminuser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminuser = await client.Adminuser().load({ team_id: 'team_id' })
```

#### Example: Create

```ts
const adminuser = await client.Adminuser().create({
  team_id: 'example_team_id',
  ok: true,
})
```


### Adminusergroup

Create an instance: `const adminusergroup = client.Adminusergroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const adminusergroup = await client.Adminusergroup().load({ usergroup_id: 'usergroup_id' })
```

#### Example: Create

```ts
const adminusergroup = await client.Adminusergroup().create({
  usergroup_id: 'example_usergroup_id',
  ok: true,
})
```


### Adminuserssession

Create an instance: `const adminuserssession = client.Adminuserssession()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```ts
const adminuserssession = await client.Adminuserssession().create({
  user_id: 'example_user_id',
  ok: true,
})
```


### Api

Create an instance: `const api = client.Api()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const api = await client.Api().load()
```


### App

Create an instance: `const app = client.App()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const app = await client.App().load()
```


### Appseventauthorization

Create an instance: `const appseventauthorization = client.Appseventauthorization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const appseventauthorization = await client.Appseventauthorization().load({ event_context: 'event_context' })
```


### Appspermission

Create an instance: `const appspermission = client.Appspermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `Record<string, any>` |  |
| `channel` | `Record<string, any>` |  |
| `group` | `Record<string, any>` |  |
| `im` | `Record<string, any>` |  |
| `mpim` | `Record<string, any>` |  |
| `ok` | `boolean` |  |
| `team` | `Record<string, any>` |  |

#### Example: Load

```ts
const appspermission = await client.Appspermission().load({ scope: 'scope', token: 'token', trigger_id: 'trigger_id' })
```


### Appspermissionsresource

Create an instance: `const appspermissionsresource = client.Appspermissionsresource()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const appspermissionsresources = await client.Appspermissionsresource().list({ token: "example" })
```


### Appspermissionsscope

Create an instance: `const appspermissionsscope = client.Appspermissionsscope()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `any[]` |  |
| `channel` | `any[]` |  |
| `group` | `any[]` |  |
| `im` | `any[]` |  |
| `mpim` | `any[]` |  |
| `team` | `any[]` |  |
| `user` | `any[]` |  |

#### Example: Load

```ts
const appspermissionsscope = await client.Appspermissionsscope().load({ token: 'token' })
```


### Appspermissionsuser

Create an instance: `const appspermissionsuser = client.Appspermissionsuser()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const appspermissionsuser = await client.Appspermissionsuser().load({ token: 'token' })
```


### Auth

Create an instance: `const auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bot_id` | `string` |  |
| `is_enterprise_install` | `boolean` |  |
| `ok` | `boolean` |  |
| `revoked` | `boolean` |  |
| `team` | `string` |  |
| `team_id` | `string` |  |
| `url` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |

#### Example: Load

```ts
const auth = await client.Auth().load({ token: 'token' })
```


### Bot

Create an instance: `const bot = client.Bot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` |  |
| `deleted` | `boolean` |  |
| `icons` | `Record<string, any>` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated` | `number` |  |
| `user_id` | `string` |  |

#### Example: Load

```ts
const bot = await client.Bot().load({ token: 'token' })
```


### Call

Create an instance: `const call = client.Call()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const call = await client.Call().load({ id: 'call_id' })
```

#### Example: Create

```ts
const call = await client.Call().create({
  external_unique_id: 'example_external_unique_id',
  join_url: 'example_join_url',
  ok: true,
})
```


### Callsparticipant

Create an instance: `const callsparticipant = client.Callsparticipant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```ts
const callsparticipant = await client.Callsparticipant().create({
  id: 'example_id',
  user: 'example_user',
  ok: true,
})
```


### Chat

Create an instance: `const chat = client.Chat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` |  |
| `blocks` | `any[]` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `Record<string, any>` |  |
| `channel` | `string` |  |
| `client_msg_id` | `string` |  |
| `comment` | `Record<string, any>` |  |
| `display_as_bot` | `boolean` |  |
| `file` | `Record<string, any>` |  |
| `files` | `any[]` |  |
| `icons` | `Record<string, any>` |  |
| `inviter` | `string` |  |
| `is_delayed_message` | `boolean` |  |
| `is_intro` | `boolean` |  |
| `is_starred` | `boolean` |  |
| `last_read` | `string` |  |
| `latest_reply` | `string` |  |
| `message_ts` | `string` |  |
| `name` | `string` |  |
| `ok` | `boolean` |  |
| `old_name` | `string` |  |
| `parent_user_id` | `string` |  |
| `permalink` | `string` |  |
| `pinned_to` | `any[]` |  |
| `purpose` | `string` |  |
| `reactions` | `any[]` |  |
| `reply_count` | `number` |  |
| `reply_users` | `any[]` |  |
| `reply_users_count` | `number` |  |
| `source_team` | `string` |  |
| `subscribed` | `boolean` |  |
| `subtype` | `string` |  |
| `team` | `string` |  |
| `text` | `string` |  |
| `thread_ts` | `string` |  |
| `topic` | `string` |  |
| `ts` | `string` |  |
| `type` | `string` |  |
| `unread_count` | `number` |  |
| `upload` | `boolean` |  |
| `user` | `string` |  |
| `user_profile` | `Record<string, any>` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const chat = await client.Chat().load({ channel: 'channel', message_t: 'message_t', token: 'token' })
```

#### Example: Create

```ts
const chat = await client.Chat().create({
  channel: 'example_channel',
  bot_profile: {},
  comment: {},
  message_ts: 'example_message_ts',
  ok: true,
  permalink: 'example_permalink',
  ts: 'example_ts',
  type: 'example_type',
  user_profile: {},
})
```


### ChatscheduledMessage

Create an instance: `const chatscheduled_message = client.ChatscheduledMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel_id` | `string` |  |
| `date_created` | `number` |  |
| `id` | `string` |  |
| `post_at` | `number` |  |
| `text` | `string` |  |

#### Example: List

```ts
const chatscheduled_messages = await client.ChatscheduledMessage().list()
```


### Conversation

Create an instance: `const conversation = client.Conversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_closed` | `boolean` |  |
| `already_open` | `boolean` |  |
| `attachments` | `any[]` |  |
| `blocks` | `any[]` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `Record<string, any>` |  |
| `channel` | `any` |  |
| `channels` | `any[]` |  |
| `client_msg_id` | `string` |  |
| `comment` | `Record<string, any>` |  |
| `display_as_bot` | `boolean` |  |
| `file` | `Record<string, any>` |  |
| `files` | `any[]` |  |
| `has_more` | `boolean` |  |
| `icons` | `Record<string, any>` |  |
| `inviter` | `string` |  |
| `is_delayed_message` | `boolean` |  |
| `is_intro` | `boolean` |  |
| `is_starred` | `boolean` |  |
| `last_read` | `string` |  |
| `latest_reply` | `string` |  |
| `members` | `any[]` |  |
| `messages` | `any[]` |  |
| `name` | `string` |  |
| `no_op` | `boolean` |  |
| `not_in_channel` | `boolean` |  |
| `ok` | `boolean` |  |
| `old_name` | `string` |  |
| `parent_user_id` | `string` |  |
| `permalink` | `string` |  |
| `pinned_to` | `any[]` |  |
| `purpose` | `string` |  |
| `reactions` | `any[]` |  |
| `reply_count` | `number` |  |
| `reply_users` | `any[]` |  |
| `reply_users_count` | `number` |  |
| `response_metadata` | `Record<string, any>` |  |
| `source_team` | `string` |  |
| `subscribed` | `boolean` |  |
| `subtype` | `string` |  |
| `team` | `string` |  |
| `text` | `string` |  |
| `thread_ts` | `string` |  |
| `topic` | `string` |  |
| `ts` | `string` |  |
| `type` | `string` |  |
| `unread_count` | `number` |  |
| `upload` | `boolean` |  |
| `user` | `string` |  |
| `user_profile` | `Record<string, any>` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |
| `warning` | `string` |  |

#### Example: Load

```ts
const conversation = await client.Conversation().load()
```

#### Example: List

```ts
const conversations = await client.Conversation().list()
```

#### Example: Create

```ts
const conversation = await client.Conversation().create({
  bot_profile: {},
  channels: [],
  comment: {},
  members: [],
  messages: [],
  ok: true,
  text: 'example_text',
  ts: 'example_ts',
  type: 'example_type',
  user_profile: {},
})
```


### Dialog

Create an instance: `const dialog = client.Dialog()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const dialog = await client.Dialog().load({ dialog: 'dialog', trigger_id: 'trigger_id' })
```


### Dnd

Create an instance: `const dnd = client.Dnd()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dnd_enabled` | `boolean` |  |
| `next_dnd_end_ts` | `number` |  |
| `next_dnd_start_ts` | `number` |  |
| `ok` | `boolean` |  |
| `snooze_enabled` | `boolean` |  |
| `snooze_endtime` | `number` |  |
| `snooze_remaining` | `number` |  |

#### Example: Load

```ts
const dnd = await client.Dnd().load()
```

#### Example: Create

```ts
const dnd = await client.Dnd().create({
  num_minute: 1,
  token: 'example_token',
  dnd_enabled: true,
  next_dnd_end_ts: 1,
  next_dnd_start_ts: 1,
  ok: true,
})
```


### Emoji

Create an instance: `const emoji = client.Emoji()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const emoji = await client.Emoji().load({ token: 'token' })
```


### File

Create an instance: `const file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `any[]` |  |
| `comments` | `any[]` |  |
| `comments_count` | `number` |  |
| `content_html` | `null` |  |
| `created` | `number` |  |
| `date_delete` | `number` |  |
| `display_as_bot` | `boolean` |  |
| `editable` | `boolean` |  |
| `editor` | `string` |  |
| `external_id` | `string` |  |
| `external_type` | `string` |  |
| `external_url` | `string` |  |
| `file` | `Record<string, any>` |  |
| `filetype` | `string` |  |
| `groups` | `any[]` |  |
| `has_rich_preview` | `boolean` |  |
| `id` | `string` |  |
| `image_exif_rotation` | `number` |  |
| `ims` | `any[]` |  |
| `is_external` | `boolean` |  |
| `is_public` | `boolean` |  |
| `is_starred` | `boolean` |  |
| `is_tombstoned` | `boolean` |  |
| `last_editor` | `string` |  |
| `mimetype` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `non_owner_editable` | `boolean` |  |
| `num_stars` | `number` |  |
| `ok` | `boolean` |  |
| `original_h` | `number` |  |
| `original_w` | `number` |  |
| `paging` | `Record<string, any>` |  |
| `permalink` | `string` |  |
| `permalink_public` | `string` |  |
| `pinned_info` | `Record<string, any>` |  |
| `pinned_to` | `any[]` |  |
| `pretty_type` | `string` |  |
| `preview` | `string` |  |
| `public_url_shared` | `boolean` |  |
| `reactions` | `any[]` |  |
| `response_metadata` | `any` |  |
| `shares` | `Record<string, any>` |  |
| `size` | `number` |  |
| `source_team` | `string` |  |
| `state` | `string` |  |
| `thumb_1024` | `string` |  |
| `thumb_1024_h` | `number` |  |
| `thumb_1024_w` | `number` |  |
| `thumb_160` | `string` |  |
| `thumb_360` | `string` |  |
| `thumb_360_h` | `number` |  |
| `thumb_360_w` | `number` |  |
| `thumb_480` | `string` |  |
| `thumb_480_h` | `number` |  |
| `thumb_480_w` | `number` |  |
| `thumb_64` | `string` |  |
| `thumb_720` | `string` |  |
| `thumb_720_h` | `number` |  |
| `thumb_720_w` | `number` |  |
| `thumb_80` | `string` |  |
| `thumb_800` | `string` |  |
| `thumb_800_h` | `number` |  |
| `thumb_800_w` | `number` |  |
| `thumb_960` | `string` |  |
| `thumb_960_h` | `number` |  |
| `thumb_960_w` | `number` |  |
| `thumb_tiny` | `string` |  |
| `timestamp` | `number` |  |
| `title` | `string` |  |
| `updated` | `number` |  |
| `url_private` | `string` |  |
| `url_private_download` | `string` |  |
| `user` | `string` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |

#### Example: List

```ts
const files = await client.File().list()
```

#### Example: Create

```ts
const file = await client.File().create({
  comments: [],
  ok: true,
  paging: {},
})
```


### Filescomment

Create an instance: `const filescomment = client.Filescomment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```ts
const filescomment = await client.Filescomment().create({
  ok: true,
})
```


### Filesremote

Create an instance: `const filesremote = client.Filesremote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const filesremote = await client.Filesremote().load()
```

#### Example: Create

```ts
const filesremote = await client.Filesremote().create({
  ok: true,
})
```


### Migration

Create an instance: `const migration = client.Migration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise_id` | `string` |  |
| `invalid_user_ids` | `any[]` |  |
| `ok` | `boolean` |  |
| `team_id` | `string` |  |
| `user_id_map` | `Record<string, any>` |  |

#### Example: List

```ts
const migrations = await client.Migration().list({ token: "example", user: "example" })
```


### Oauth

Create an instance: `const oauth = client.Oauth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const oauth = await client.Oauth().load()
```


### Oauthv2

Create an instance: `const oauthv2 = client.Oauthv2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const oauthv2 = await client.Oauthv2().load({ code: 'code' })
```


### Pin

Create an instance: `const pin = client.Pin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `any[]` |  |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const pin = await client.Pin().load({ channel: 'channel', token: 'token' })
```

#### Example: Create

```ts
const pin = await client.Pin().create({
  channel: 'example_channel',
})
```


### Reaction

Create an instance: `const reaction = client.Reaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `Record<string, any>` |  |
| `items` | `any[]` |  |
| `ok` | `boolean` |  |
| `paging` | `Record<string, any>` |  |
| `response_metadata` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const reaction = await client.Reaction().load({ token: 'token' })
```

#### Example: List

```ts
const reactions = await client.Reaction().list({ token: "example" })
```

#### Example: Create

```ts
const reaction = await client.Reaction().create({
  name: 'example_name',
  items: [],
  paging: {},
})
```


### Reminder

Create an instance: `const reminder = client.Reminder()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `complete_ts` | `number` |  |
| `creator` | `string` |  |
| `id` | `string` |  |
| `ok` | `boolean` |  |
| `recurring` | `boolean` |  |
| `text` | `string` |  |
| `time` | `number` |  |
| `user` | `string` |  |

#### Example: Load

```ts
const reminder = await client.Reminder().load()
```

#### Example: List

```ts
const reminders = await client.Reminder().list()
```

#### Example: Create

```ts
const reminder = await client.Reminder().create({
  text: 'example_text',
  time: 'example_time',
  creator: 'example_creator',
  id: 'example_id',
  ok: true,
  recurring: true,
})
```


### Rtm

Create an instance: `const rtm = client.Rtm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |
| `self` | `Record<string, any>` |  |
| `team` | `Record<string, any>` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const rtm = await client.Rtm().load({ token: 'token' })
```


### Search

Create an instance: `const search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const search = await client.Search().load({ query: 'query', token: 'token' })
```


### Star

Create an instance: `const star = client.Star()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `any[]` |  |
| `ok` | `boolean` |  |
| `paging` | `Record<string, any>` |  |

#### Example: List

```ts
const stars = await client.Star().list()
```

#### Example: Create

```ts
const star = await client.Star().create({
  items: [],
  ok: true,
  paging: {},
})
```


### Team

Create an instance: `const team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_app_id` | `string` |  |
| `app_id` | `string` |  |
| `app_type` | `string` |  |
| `archived` | `boolean` |  |
| `avatar_base_url` | `string` |  |
| `change_type` | `string` |  |
| `channel` | `string` |  |
| `count` | `number` |  |
| `country` | `string | null` |  |
| `created` | `number` |  |
| `date` | `string` |  |
| `date_create` | `number` |  |
| `date_first` | `number` |  |
| `date_last` | `number` |  |
| `deleted` | `boolean` |  |
| `description` | `null | string` |  |
| `discoverable` | `any` |  |
| `domain` | `string` |  |
| `email_domain` | `string` |  |
| `enterprise_id` | `string` |  |
| `enterprise_name` | `string` |  |
| `external_org_migrations` | `Record<string, any>` |  |
| `has_compliance_export` | `boolean` |  |
| `icon` | `Record<string, any>` |  |
| `id` | `string` |  |
| `ip` | `string | null` |  |
| `is_assigned` | `boolean` |  |
| `is_enterprise` | `number` |  |
| `is_over_storage_limit` | `boolean` |  |
| `isp` | `string | null` |  |
| `limit_ts` | `number` |  |
| `locale` | `string` |  |
| `messages_count` | `number` |  |
| `msg_edit_window_mins` | `number` |  |
| `name` | `string` |  |
| `ok` | `boolean` |  |
| `over_integrations_limit` | `boolean` |  |
| `over_storage_limit` | `boolean` |  |
| `pay_prod_cur` | `string` |  |
| `plan` | `string` |  |
| `primary_owner` | `Record<string, any>` |  |
| `region` | `string | null` |  |
| `scope` | `string` |  |
| `service_id` | `string` |  |
| `service_type` | `string` |  |
| `sso_provider` | `Record<string, any>` |  |
| `user_agent` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const team = await client.Team().load({ token: 'token' })
```

#### Example: List

```ts
const teams = await client.Team().list({ token: "example" })
```


### Teamprofile

Create an instance: `const teamprofile = client.Teamprofile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `any[]` |  |

#### Example: Load

```ts
const teamprofile = await client.Teamprofile().load({ token: 'token' })
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_away` | `boolean` |  |
| `avatar_hash` | `string` |  |
| `cache_ts` | `number` |  |
| `channels` | `any[]` |  |
| `connection_count` | `number` |  |
| `image_1024` | `string` |  |
| `image_192` | `string` |  |
| `image_24` | `string` |  |
| `image_32` | `string` |  |
| `image_48` | `string` |  |
| `image_512` | `string` |  |
| `image_72` | `string` |  |
| `image_original` | `string` |  |
| `last_activity` | `number` |  |
| `manual_away` | `boolean` |  |
| `members` | `any[]` |  |
| `ok` | `boolean` |  |
| `online` | `boolean` |  |
| `presence` | `string` |  |
| `response_metadata` | `Record<string, any>` |  |
| `team` | `Record<string, any>` |  |
| `user` | `any` |  |

#### Example: Load

```ts
const user = await client.User().load({ token: 'token' })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
  token: 'example_token',
  avatar_hash: 'example_avatar_hash',
  cache_ts: 1,
  channels: [],
  image_1024: 'example_image_1024',
  image_192: 'example_image_192',
  image_24: 'example_image_24',
  image_32: 'example_image_32',
  image_48: 'example_image_48',
  image_512: 'example_image_512',
  image_72: 'example_image_72',
  image_original: 'example_image_original',
  members: [],
  ok: true,
  presence: 'example_presence',
  response_metadata: {},
  user: 'example_user',
})
```


### Usergroup

Create an instance: `const usergroup = client.Usergroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `boolean` |  |
| `auto_type` | `any` |  |
| `channel_count` | `number` |  |
| `created_by` | `string` |  |
| `date_create` | `number` |  |
| `date_delete` | `number` |  |
| `date_update` | `number` |  |
| `deleted_by` | `any` |  |
| `description` | `string` |  |
| `enterprise_subteam_id` | `string` |  |
| `handle` | `string` |  |
| `id` | `string` |  |
| `is_external` | `boolean` |  |
| `is_subteam` | `boolean` |  |
| `is_usergroup` | `boolean` |  |
| `name` | `string` |  |
| `prefs` | `Record<string, any>` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `number` |  |
| `users` | `any[]` |  |

#### Example: List

```ts
const usergroups = await client.Usergroup().list({ token: "example" })
```

#### Example: Create

```ts
const usergroup = await client.Usergroup().create({
  usergroup: 'example_usergroup',
  auto_provision: true,
  auto_type: 'example_auto_type',
  created_by: 'example_created_by',
  date_create: 1,
  date_delete: 1,
  date_update: 1,
  deleted_by: 'example_deleted_by',
  enterprise_subteam_id: 'example_enterprise_subteam_id',
  id: 'example_id',
  is_external: true,
  is_subteam: true,
  is_usergroup: true,
  prefs: {},
  team_id: 'example_team_id',
  updated_by: 'example_updated_by',
})
```


### Usergroupsuser

Create an instance: `const usergroupsuser = client.Usergroupsuser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `boolean` |  |
| `auto_type` | `any` |  |
| `channel_count` | `number` |  |
| `created_by` | `string` |  |
| `date_create` | `number` |  |
| `date_delete` | `number` |  |
| `date_update` | `number` |  |
| `deleted_by` | `any` |  |
| `description` | `string` |  |
| `enterprise_subteam_id` | `string` |  |
| `handle` | `string` |  |
| `id` | `string` |  |
| `is_external` | `boolean` |  |
| `is_subteam` | `boolean` |  |
| `is_usergroup` | `boolean` |  |
| `name` | `string` |  |
| `ok` | `boolean` |  |
| `prefs` | `Record<string, any>` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `number` |  |
| `users` | `any[]` |  |

#### Example: List

```ts
const usergroupsusers = await client.Usergroupsuser().list({ token: "example", usergroup: "example" })
```

#### Example: Create

```ts
const usergroupsuser = await client.Usergroupsuser().create({
  user: 'example_user',
  usergroup: 'example_usergroup',
  auto_provision: true,
  auto_type: 'example_auto_type',
  created_by: 'example_created_by',
  date_create: 1,
  date_delete: 1,
  date_update: 1,
  deleted_by: 'example_deleted_by',
  description: 'example_description',
  enterprise_subteam_id: 'example_enterprise_subteam_id',
  handle: 'example_handle',
  id: 'example_id',
  is_external: true,
  is_subteam: true,
  is_usergroup: true,
  name: 'example_name',
  ok: true,
  prefs: {},
  team_id: 'example_team_id',
  updated_by: 'example_updated_by',
})
```


### Usersprofile

Create an instance: `const usersprofile = client.Usersprofile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `always_active` | `boolean` |  |
| `api_app_id` | `string` |  |
| `avatar_hash` | `string` |  |
| `bot_id` | `string` |  |
| `display_name` | `string` |  |
| `display_name_normalized` | `string` |  |
| `email` | `null | string` |  |
| `fields` | `Record<string, any> | null | any[]` |  |
| `first_name` | `null | string` |  |
| `guest_expiration_ts` | `null | number` |  |
| `guest_invited_by` | `null | string` |  |
| `image_1024` | `null | string` |  |
| `image_192` | `null | string` |  |
| `image_24` | `null | string` |  |
| `image_32` | `null | string` |  |
| `image_48` | `null | string` |  |
| `image_512` | `null | string` |  |
| `image_72` | `null | string` |  |
| `image_original` | `null | string` |  |
| `is_app_user` | `boolean` |  |
| `is_custom_image` | `boolean` |  |
| `is_restricted` | `null | boolean` |  |
| `is_ultra_restricted` | `null | boolean` |  |
| `last_avatar_image_hash` | `string` |  |
| `last_name` | `null | string` |  |
| `memberships_count` | `number` |  |
| `name` | `null | string` |  |
| `phone` | `string` |  |
| `pronouns` | `string` |  |
| `real_name` | `string` |  |
| `real_name_normalized` | `string` |  |
| `skype` | `string` |  |
| `status_default_emoji` | `string` |  |
| `status_default_text` | `string` |  |
| `status_default_text_canonical` | `null | string` |  |
| `status_emoji` | `string` |  |
| `status_expiration` | `number` |  |
| `status_text` | `string` |  |
| `status_text_canonical` | `null | string` |  |
| `team` | `string` |  |
| `title` | `string` |  |
| `updated` | `number` |  |
| `user_id` | `string` |  |
| `username` | `null | string` |  |

#### Example: Load

```ts
const usersprofile = await client.Usersprofile().load({ token: 'token' })
```

#### Example: Create

```ts
const usersprofile = await client.Usersprofile().create({
  avatar_hash: 'example_avatar_hash',
  display_name: 'example_display_name',
  display_name_normalized: 'example_display_name_normalized',
  fields: {},
  phone: 'example_phone',
  real_name: 'example_real_name',
  real_name_normalized: 'example_real_name_normalized',
  skype: 'example_skype',
  status_emoji: 'example_status_emoji',
  status_text: 'example_status_text',
  title: 'example_title',
})
```


### View

Create an instance: `const view = client.View()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const view = await client.View().load()
```


### Workflow

Create an instance: `const workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ workflow_step_edit_id: 'workflow_step_edit_id' })
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
slack/
├── src/
│   ├── SlackSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { SlackSDK } from '@voxgig-sdk/slack'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const adminteam = client.Adminteam()
await adminteam.load()

// adminteam.data() now returns the adminteam data from the last `load`
// adminteam.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
