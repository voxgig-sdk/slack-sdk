# Slack Lua SDK



The Lua SDK for the Slack API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Adminapp()` — each with the same small set of operations (`list`, `load`, `create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/slack-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("slack_sdk")

local client = sdk.new({
  apikey = os.getenv("SLACK_APIKEY"),
})
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Adminapp():create({ ok = true })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local adminteam, err = client:Adminteam():load()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Adminteam():load()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
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
cd lua && busted test/
```


## Reference

### SlackSDK

```lua
local sdk = require("slack_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### SlackSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Adminapp` | `(data) -> AdminappEntity` | Create an Adminapp entity instance. |
| `Adminappsapproved` | `(data) -> AdminappsapprovedEntity` | Create an Adminappsapproved entity instance. |
| `Adminappsrequest` | `(data) -> AdminappsrequestEntity` | Create an Adminappsrequest entity instance. |
| `Adminappsrestricted` | `(data) -> AdminappsrestrictedEntity` | Create an Adminappsrestricted entity instance. |
| `Adminconversation` | `(data) -> AdminconversationEntity` | Create an Adminconversation entity instance. |
| `Adminconversationsekm` | `(data) -> AdminconversationsekmEntity` | Create an Adminconversationsekm entity instance. |
| `AdminconversationsrestrictAccess` | `(data) -> AdminconversationsrestrictAccessEntity` | Create an AdminconversationsrestrictAccess entity instance. |
| `Adminemoji` | `(data) -> AdminemojiEntity` | Create an Adminemoji entity instance. |
| `AdmininviteRequest` | `(data) -> AdmininviteRequestEntity` | Create an AdmininviteRequest entity instance. |
| `AdmininviteRequestsapproved` | `(data) -> AdmininviteRequestsapprovedEntity` | Create an AdmininviteRequestsapproved entity instance. |
| `AdmininviteRequestsdenied` | `(data) -> AdmininviteRequestsdeniedEntity` | Create an AdmininviteRequestsdenied entity instance. |
| `Adminteam` | `(data) -> AdminteamEntity` | Create an Adminteam entity instance. |
| `Adminteamsadmin` | `(data) -> AdminteamsadminEntity` | Create an Adminteamsadmin entity instance. |
| `Adminteamsowner` | `(data) -> AdminteamsownerEntity` | Create an Adminteamsowner entity instance. |
| `Adminteamssetting` | `(data) -> AdminteamssettingEntity` | Create an Adminteamssetting entity instance. |
| `Adminuser` | `(data) -> AdminuserEntity` | Create an Adminuser entity instance. |
| `Adminusergroup` | `(data) -> AdminusergroupEntity` | Create an Adminusergroup entity instance. |
| `Adminuserssession` | `(data) -> AdminuserssessionEntity` | Create an Adminuserssession entity instance. |
| `Api` | `(data) -> ApiEntity` | Create an Api entity instance. |
| `App` | `(data) -> AppEntity` | Create an App entity instance. |
| `Appseventauthorization` | `(data) -> AppseventauthorizationEntity` | Create an Appseventauthorization entity instance. |
| `Appspermission` | `(data) -> AppspermissionEntity` | Create an Appspermission entity instance. |
| `Appspermissionsresource` | `(data) -> AppspermissionsresourceEntity` | Create an Appspermissionsresource entity instance. |
| `Appspermissionsscope` | `(data) -> AppspermissionsscopeEntity` | Create an Appspermissionsscope entity instance. |
| `Appspermissionsuser` | `(data) -> AppspermissionsuserEntity` | Create an Appspermissionsuser entity instance. |
| `Auth` | `(data) -> AuthEntity` | Create an Auth entity instance. |
| `Bot` | `(data) -> BotEntity` | Create a Bot entity instance. |
| `Call` | `(data) -> CallEntity` | Create a Call entity instance. |
| `Callsparticipant` | `(data) -> CallsparticipantEntity` | Create a Callsparticipant entity instance. |
| `Chat` | `(data) -> ChatEntity` | Create a Chat entity instance. |
| `ChatscheduledMessage` | `(data) -> ChatscheduledMessageEntity` | Create a ChatscheduledMessage entity instance. |
| `Conversation` | `(data) -> ConversationEntity` | Create a Conversation entity instance. |
| `Dialog` | `(data) -> DialogEntity` | Create a Dialog entity instance. |
| `Dnd` | `(data) -> DndEntity` | Create a Dnd entity instance. |
| `Emoji` | `(data) -> EmojiEntity` | Create an Emoji entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Filescomment` | `(data) -> FilescommentEntity` | Create a Filescomment entity instance. |
| `Filesremote` | `(data) -> FilesremoteEntity` | Create a Filesremote entity instance. |
| `Migration` | `(data) -> MigrationEntity` | Create a Migration entity instance. |
| `Oauth` | `(data) -> OauthEntity` | Create an Oauth entity instance. |
| `Oauthv2` | `(data) -> Oauthv2Entity` | Create an Oauthv2 entity instance. |
| `Pin` | `(data) -> PinEntity` | Create a Pin entity instance. |
| `Reaction` | `(data) -> ReactionEntity` | Create a Reaction entity instance. |
| `Reminder` | `(data) -> ReminderEntity` | Create a Reminder entity instance. |
| `Rtm` | `(data) -> RtmEntity` | Create a Rtm entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `Star` | `(data) -> StarEntity` | Create a Star entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `Teamprofile` | `(data) -> TeamprofileEntity` | Create a Teamprofile entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `Usergroup` | `(data) -> UsergroupEntity` | Create an Usergroup entity instance. |
| `Usergroupsuser` | `(data) -> UsergroupsuserEntity` | Create an Usergroupsuser entity instance. |
| `Usersprofile` | `(data) -> UsersprofileEntity` | Create an Usersprofile entity instance. |
| `View` | `(data) -> ViewEntity` | Create a View entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local adminappsapproved, err = client:Adminappsapproved():load()
    if err then error(err) end
    -- adminappsapproved is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Adminapp

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create.

API path: `/admin.apps.approve`

#### Adminappsapproved

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.apps.approved.list`

#### Adminappsrequest

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.apps.requests.list`

#### Adminappsrestricted

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

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

Operations: Create, List, Load.

API path: `/admin.conversations.create`

#### Adminconversationsekm

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.conversations.ekm.listOriginalConnectedChannelInfo`

#### AdminconversationsrestrictAccess

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.conversations.restrictAccess.addGroup`

#### Adminemoji

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.emoji.addAlias`

#### AdmininviteRequest

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.inviteRequests.approve`

#### AdmininviteRequestsapproved

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.inviteRequests.approved.list`

#### AdmininviteRequestsdenied

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.inviteRequests.denied.list`

#### Adminteam

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.teams.create`

#### Adminteamsadmin

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.teams.admins.list`

#### Adminteamsowner

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/admin.teams.owners.list`

#### Adminteamssetting

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.teams.settings.setDefaultChannels`

#### Adminuser

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.users.invite`

#### Adminusergroup

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/admin.usergroups.addTeams`

#### Adminuserssession

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create.

API path: `/admin.users.session.reset`

#### Api

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/api.test`

#### App

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/apps.uninstall`

#### Appseventauthorization

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

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

Operations: Load.

API path: `/apps.permissions.request`

#### Appspermissionsresource

| Field | Description |
| --- | --- |
| `id` |  |
| `type` |  |

Operations: List.

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

Operations: Load.

API path: `/apps.permissions.scopes.list`

#### Appspermissionsuser

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

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

Operations: Load.

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

Operations: Load.

API path: `/bots.info`

#### Call

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/calls.add`

#### Callsparticipant

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create.

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

Operations: Create, Load.

API path: `/chat.postMessage`

#### ChatscheduledMessage

| Field | Description |
| --- | --- |
| `channel_id` |  |
| `date_created` |  |
| `id` |  |
| `post_at` |  |
| `text` |  |

Operations: List.

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

Operations: Create, List, Load.

API path: `/conversations.open`

#### Dialog

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

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

Operations: Create, Load.

API path: `/dnd.setSnooze`

#### Emoji

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

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

Operations: Create, List.

API path: `/files.upload`

#### Filescomment

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create.

API path: `/files.comments.delete`

#### Filesremote

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Create, Load.

API path: `/files.remote.update`

#### Migration

| Field | Description |
| --- | --- |
| `enterprise_id` |  |
| `invalid_user_ids` |  |
| `ok` |  |
| `team_id` |  |
| `user_id_map` |  |

Operations: List.

API path: `/migration.exchange`

#### Oauth

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/oauth.access`

#### Oauthv2

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/oauth.v2.access`

#### Pin

| Field | Description |
| --- | --- |
| `items` |  |
| `ok` |  |

Operations: Create, Load.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load.

API path: `/reminders.add`

#### Rtm

| Field | Description |
| --- | --- |
| `ok` |  |
| `self` |  |
| `team` |  |
| `url` |  |

Operations: Load.

API path: `/rtm.connect`

#### Search

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/search.messages`

#### Star

| Field | Description |
| --- | --- |
| `items` |  |
| `ok` |  |
| `paging` |  |

Operations: Create, List.

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

Operations: List, Load.

API path: `/team.integrationLogs`

#### Teamprofile

| Field | Description |
| --- | --- |
| `fields` |  |

Operations: Load.

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

Operations: Create, List, Load.

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

Operations: Create, List.

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

Operations: Create, List.

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

Operations: Create, Load.

API path: `/users.profile.set`

#### View

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/views.update`

#### Workflow

| Field | Description |
| --- | --- |
| `ok` |  |

Operations: Load.

API path: `/workflows.updateStep`



## Entities


### Adminapp

Create an instance: `local adminapp = client:Adminapp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```lua
local adminapp, err = client:Adminapp():create({
  ok = true, -- boolean
})
```


### Adminappsapproved

Create an instance: `local adminappsapproved = client:Adminappsapproved(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local adminappsapproved, err = client:Adminappsapproved():load({ token = "token" })
```


### Adminappsrequest

Create an instance: `local adminappsrequest = client:Adminappsrequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local adminappsrequest, err = client:Adminappsrequest():load({ token = "token" })
```


### Adminappsrestricted

Create an instance: `local adminappsrestricted = client:Adminappsrestricted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local adminappsrestricted, err = client:Adminappsrestricted():load({ token = "token" })
```


### Adminconversation

Create an instance: `local adminconversation = client:Adminconversation(nil)`

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
| `can_thread` | `table` |  |
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
| `members` | `table` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |
| `num_members` | `number` |  |
| `ok` | `boolean` |  |
| `pending_shared` | `table` |  |
| `previous_names` | `table` |  |
| `priority` | `number` |  |
| `purpose` | `table` |  |
| `response_metadata` | `table` |  |
| `team_ids` | `table` |  |
| `topic` | `table` |  |
| `unlinked` | `number` |  |
| `unread_count` | `number` |  |
| `unread_count_display` | `number` |  |
| `who_can_post` | `table` |  |

#### Example: Load

```lua
local adminconversation, err = client:Adminconversation():load({ channel_id = "channel_id" })
```

#### Example: List

```lua
local adminconversations, err = client:Adminconversation():list()
```

#### Example: Create

```lua
local adminconversation, err = client:Adminconversation():create({
  is_private = true, -- boolean
  name = "example_name", -- string
  created = 1, -- number
  creator = "example_creator", -- string
  id = "example_id", -- string
  is_channel = true, -- boolean
  is_mpim = true, -- boolean
  is_org_shared = true, -- boolean
  is_shared = true, -- boolean
  members = {}, -- table
  name_normalized = "example_name_normalized", -- string
  ok = true, -- boolean
  purpose = {}, -- table
  response_metadata = {}, -- table
  team_ids = {}, -- table
  topic = {}, -- table
})
```


### Adminconversationsekm

Create an instance: `local adminconversationsekm = client:Adminconversationsekm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local adminconversationsekm, err = client:Adminconversationsekm():load({ token = "token" })
```


### AdminconversationsrestrictAccess

Create an instance: `local adminconversationsrestrict_access = client:AdminconversationsrestrictAccess(nil)`

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

```lua
local adminconversationsrestrict_access, err = client:AdminconversationsrestrictAccess():load({ channel_id = "channel_id", token = "token" })
```

#### Example: Create

```lua
local adminconversationsrestrict_access, err = client:AdminconversationsrestrictAccess():create({
  channel_id = "example_channel_id", -- string
  group_id = "example_group_id", -- string
  token = "example_token", -- string
  ok = true, -- boolean
})
```


### Adminemoji

Create an instance: `local adminemoji = client:Adminemoji(nil)`

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

```lua
local adminemoji, err = client:Adminemoji():load({ token = "token" })
```

#### Example: Create

```lua
local adminemoji, err = client:Adminemoji():create({
  name = "example_name", -- string
  token = "example_token", -- string
  ok = true, -- boolean
})
```


### AdmininviteRequest

Create an instance: `local admininvite_request = client:AdmininviteRequest(nil)`

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

```lua
local admininvite_request, err = client:AdmininviteRequest():load()
```

#### Example: Create

```lua
local admininvite_request, err = client:AdmininviteRequest():create({
  invite_request_id = "example_invite_request_id", -- string
  ok = true, -- boolean
})
```


### AdmininviteRequestsapproved

Create an instance: `local admininvite_requestsapproved = client:AdmininviteRequestsapproved(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local admininvite_requestsapproved, err = client:AdmininviteRequestsapproved():load()
```


### AdmininviteRequestsdenied

Create an instance: `local admininvite_requestsdenied = client:AdmininviteRequestsdenied(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local admininvite_requestsdenied, err = client:AdmininviteRequestsdenied():load()
```


### Adminteam

Create an instance: `local adminteam = client:Adminteam(nil)`

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

```lua
local adminteam, err = client:Adminteam():load()
```

#### Example: Create

```lua
local adminteam, err = client:Adminteam():create({
  team_domain = "example_team_domain", -- any
  team_name = "example_team_name", -- any
  ok = true, -- boolean
})
```


### Adminteamsadmin

Create an instance: `local adminteamsadmin = client:Adminteamsadmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local adminteamsadmin, err = client:Adminteamsadmin():load({ team_id = "team_id", token = "token" })
```


### Adminteamsowner

Create an instance: `local adminteamsowner = client:Adminteamsowner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local adminteamsowner, err = client:Adminteamsowner():load({ team_id = "team_id", token = "token" })
```


### Adminteamssetting

Create an instance: `local adminteamssetting = client:Adminteamssetting(nil)`

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

```lua
local adminteamssetting, err = client:Adminteamssetting():load({ team_id = "team_id" })
```

#### Example: Create

```lua
local adminteamssetting, err = client:Adminteamssetting():create({
  team_id = "example_team_id", -- string
  ok = true, -- boolean
})
```


### Adminuser

Create an instance: `local adminuser = client:Adminuser(nil)`

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

```lua
local adminuser, err = client:Adminuser():load({ team_id = "team_id" })
```

#### Example: Create

```lua
local adminuser, err = client:Adminuser():create({
  team_id = "example_team_id", -- string
  ok = true, -- boolean
})
```


### Adminusergroup

Create an instance: `local adminusergroup = client:Adminusergroup(nil)`

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

```lua
local adminusergroup, err = client:Adminusergroup():load({ usergroup_id = "usergroup_id" })
```

#### Example: Create

```lua
local adminusergroup, err = client:Adminusergroup():create({
  usergroup_id = "example_usergroup_id", -- string
  ok = true, -- boolean
})
```


### Adminuserssession

Create an instance: `local adminuserssession = client:Adminuserssession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```lua
local adminuserssession, err = client:Adminuserssession():create({
  user_id = "example_user_id", -- string
  ok = true, -- boolean
})
```


### Api

Create an instance: `local api = client:Api(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local api, err = client:Api():load()
```


### App

Create an instance: `local app = client:App(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local app, err = client:App():load()
```


### Appseventauthorization

Create an instance: `local appseventauthorization = client:Appseventauthorization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local appseventauthorization, err = client:Appseventauthorization():load({ event_context = "event_context" })
```


### Appspermission

Create an instance: `local appspermission = client:Appspermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `table` |  |
| `channel` | `table` |  |
| `group` | `table` |  |
| `im` | `table` |  |
| `mpim` | `table` |  |
| `ok` | `boolean` |  |
| `team` | `table` |  |

#### Example: Load

```lua
local appspermission, err = client:Appspermission():load({ scope = "scope", token = "token", trigger_id = "trigger_id" })
```


### Appspermissionsresource

Create an instance: `local appspermissionsresource = client:Appspermissionsresource(nil)`

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

```lua
local appspermissionsresources, err = client:Appspermissionsresource():list()
```


### Appspermissionsscope

Create an instance: `local appspermissionsscope = client:Appspermissionsscope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `table` |  |
| `channel` | `table` |  |
| `group` | `table` |  |
| `im` | `table` |  |
| `mpim` | `table` |  |
| `team` | `table` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local appspermissionsscope, err = client:Appspermissionsscope():load({ token = "token" })
```


### Appspermissionsuser

Create an instance: `local appspermissionsuser = client:Appspermissionsuser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local appspermissionsuser, err = client:Appspermissionsuser():load({ token = "token" })
```


### Auth

Create an instance: `local auth = client:Auth(nil)`

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

```lua
local auth, err = client:Auth():load({ token = "token" })
```


### Bot

Create an instance: `local bot = client:Bot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` |  |
| `deleted` | `boolean` |  |
| `icons` | `table` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated` | `number` |  |
| `user_id` | `string` |  |

#### Example: Load

```lua
local bot, err = client:Bot():load({ token = "token" })
```


### Call

Create an instance: `local call = client:Call(nil)`

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

```lua
local call, err = client:Call():load({ id = "call_id" })
```

#### Example: Create

```lua
local call, err = client:Call():create({
  external_unique_id = "example_external_unique_id", -- string
  join_url = "example_join_url", -- any
  ok = true, -- boolean
})
```


### Callsparticipant

Create an instance: `local callsparticipant = client:Callsparticipant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```lua
local callsparticipant, err = client:Callsparticipant():create({
  id = "example_id", -- string
  user = "example_user", -- any
  ok = true, -- boolean
})
```


### Chat

Create an instance: `local chat = client:Chat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `table` |  |
| `blocks` | `table` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `table` |  |
| `channel` | `string` |  |
| `client_msg_id` | `string` |  |
| `comment` | `table` |  |
| `display_as_bot` | `boolean` |  |
| `file` | `table` |  |
| `files` | `table` |  |
| `icons` | `table` |  |
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
| `pinned_to` | `table` |  |
| `purpose` | `string` |  |
| `reactions` | `table` |  |
| `reply_count` | `number` |  |
| `reply_users` | `table` |  |
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
| `user_profile` | `table` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local chat, err = client:Chat():load({ channel = "channel", message_t = "message_t", token = "token" })
```

#### Example: Create

```lua
local chat, err = client:Chat():create({
  channel = "example_channel", -- any
  bot_profile = {}, -- table
  comment = {}, -- table
  message_ts = "example_message_ts", -- string
  ok = true, -- boolean
  permalink = "example_permalink", -- string
  ts = "example_ts", -- string
  type = "example_type", -- string
  user_profile = {}, -- table
})
```


### ChatscheduledMessage

Create an instance: `local chatscheduled_message = client:ChatscheduledMessage(nil)`

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

```lua
local chatscheduled_messages, err = client:ChatscheduledMessage():list()
```


### Conversation

Create an instance: `local conversation = client:Conversation(nil)`

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
| `attachments` | `table` |  |
| `blocks` | `table` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `table` |  |
| `channel` | `any` |  |
| `channels` | `table` |  |
| `client_msg_id` | `string` |  |
| `comment` | `table` |  |
| `display_as_bot` | `boolean` |  |
| `file` | `table` |  |
| `files` | `table` |  |
| `has_more` | `boolean` |  |
| `icons` | `table` |  |
| `inviter` | `string` |  |
| `is_delayed_message` | `boolean` |  |
| `is_intro` | `boolean` |  |
| `is_starred` | `boolean` |  |
| `last_read` | `string` |  |
| `latest_reply` | `string` |  |
| `members` | `table` |  |
| `messages` | `table` |  |
| `name` | `string` |  |
| `no_op` | `boolean` |  |
| `not_in_channel` | `boolean` |  |
| `ok` | `boolean` |  |
| `old_name` | `string` |  |
| `parent_user_id` | `string` |  |
| `permalink` | `string` |  |
| `pinned_to` | `table` |  |
| `purpose` | `string` |  |
| `reactions` | `table` |  |
| `reply_count` | `number` |  |
| `reply_users` | `table` |  |
| `reply_users_count` | `number` |  |
| `response_metadata` | `table` |  |
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
| `user_profile` | `table` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |
| `warning` | `string` |  |

#### Example: Load

```lua
local conversation, err = client:Conversation():load()
```

#### Example: List

```lua
local conversations, err = client:Conversation():list()
```

#### Example: Create

```lua
local conversation, err = client:Conversation():create({
  bot_profile = {}, -- table
  channels = {}, -- table
  comment = {}, -- table
  members = {}, -- table
  messages = {}, -- table
  ok = true, -- boolean
  text = "example_text", -- string
  ts = "example_ts", -- string
  type = "example_type", -- string
  user_profile = {}, -- table
})
```


### Dialog

Create an instance: `local dialog = client:Dialog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local dialog, err = client:Dialog():load({ dialog = "dialog", trigger_id = "trigger_id" })
```


### Dnd

Create an instance: `local dnd = client:Dnd(nil)`

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

```lua
local dnd, err = client:Dnd():load()
```

#### Example: Create

```lua
local dnd, err = client:Dnd():create({
  num_minute = 1, -- number
  token = "example_token", -- string
  dnd_enabled = true, -- boolean
  next_dnd_end_ts = 1, -- number
  next_dnd_start_ts = 1, -- number
  ok = true, -- boolean
})
```


### Emoji

Create an instance: `local emoji = client:Emoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local emoji, err = client:Emoji():load({ token = "token" })
```


### File

Create an instance: `local file = client:File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `table` |  |
| `comments` | `table` |  |
| `comments_count` | `number` |  |
| `content_html` | `nil` |  |
| `created` | `number` |  |
| `date_delete` | `number` |  |
| `display_as_bot` | `boolean` |  |
| `editable` | `boolean` |  |
| `editor` | `string` |  |
| `external_id` | `string` |  |
| `external_type` | `string` |  |
| `external_url` | `string` |  |
| `file` | `table` |  |
| `filetype` | `string` |  |
| `groups` | `table` |  |
| `has_rich_preview` | `boolean` |  |
| `id` | `string` |  |
| `image_exif_rotation` | `number` |  |
| `ims` | `table` |  |
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
| `paging` | `table` |  |
| `permalink` | `string` |  |
| `permalink_public` | `string` |  |
| `pinned_info` | `table` |  |
| `pinned_to` | `table` |  |
| `pretty_type` | `string` |  |
| `preview` | `string` |  |
| `public_url_shared` | `boolean` |  |
| `reactions` | `table` |  |
| `response_metadata` | `any` |  |
| `shares` | `table` |  |
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

```lua
local files, err = client:File():list()
```

#### Example: Create

```lua
local file, err = client:File():create({
  comments = {}, -- table
  ok = true, -- boolean
  paging = {}, -- table
})
```


### Filescomment

Create an instance: `local filescomment = client:Filescomment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Create

```lua
local filescomment, err = client:Filescomment():create({
  ok = true, -- boolean
})
```


### Filesremote

Create an instance: `local filesremote = client:Filesremote(nil)`

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

```lua
local filesremote, err = client:Filesremote():load()
```

#### Example: Create

```lua
local filesremote, err = client:Filesremote():create({
  ok = true, -- boolean
})
```


### Migration

Create an instance: `local migration = client:Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise_id` | `string` |  |
| `invalid_user_ids` | `table` |  |
| `ok` | `boolean` |  |
| `team_id` | `string` |  |
| `user_id_map` | `table` |  |

#### Example: List

```lua
local migrations, err = client:Migration():list()
```


### Oauth

Create an instance: `local oauth = client:Oauth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local oauth, err = client:Oauth():load()
```


### Oauthv2

Create an instance: `local oauthv2 = client:Oauthv2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local oauthv2, err = client:Oauthv2():load({ code = "code" })
```


### Pin

Create an instance: `local pin = client:Pin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `table` |  |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local pin, err = client:Pin():load({ channel = "channel", token = "token" })
```

#### Example: Create

```lua
local pin, err = client:Pin():create({
  channel = "example_channel", -- any
})
```


### Reaction

Create an instance: `local reaction = client:Reaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `table` |  |
| `items` | `table` |  |
| `ok` | `boolean` |  |
| `paging` | `table` |  |
| `response_metadata` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local reaction, err = client:Reaction():load({ token = "token" })
```

#### Example: List

```lua
local reactions, err = client:Reaction():list()
```

#### Example: Create

```lua
local reaction, err = client:Reaction():create({
  name = "example_name", -- string
  items = {}, -- table
  paging = {}, -- table
})
```


### Reminder

Create an instance: `local reminder = client:Reminder(nil)`

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

```lua
local reminder, err = client:Reminder():load()
```

#### Example: List

```lua
local reminders, err = client:Reminder():list()
```

#### Example: Create

```lua
local reminder, err = client:Reminder():create({
  text = "example_text", -- any
  time = "example_time", -- any
  creator = "example_creator", -- string
  id = "example_id", -- string
  ok = true, -- boolean
  recurring = true, -- boolean
})
```


### Rtm

Create an instance: `local rtm = client:Rtm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |
| `self` | `table` |  |
| `team` | `table` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local rtm, err = client:Rtm():load({ token = "token" })
```


### Search

Create an instance: `local search = client:Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local search, err = client:Search():load({ query = "query", token = "token" })
```


### Star

Create an instance: `local star = client:Star(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `table` |  |
| `ok` | `boolean` |  |
| `paging` | `table` |  |

#### Example: List

```lua
local stars, err = client:Star():list()
```

#### Example: Create

```lua
local star, err = client:Star():create({
  items = {}, -- table
  ok = true, -- boolean
  paging = {}, -- table
})
```


### Team

Create an instance: `local team = client:Team(nil)`

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
| `country` | `string|nil` |  |
| `created` | `number` |  |
| `date` | `string` |  |
| `date_create` | `number` |  |
| `date_first` | `number` |  |
| `date_last` | `number` |  |
| `deleted` | `boolean` |  |
| `description` | `nil|string` |  |
| `discoverable` | `any` |  |
| `domain` | `string` |  |
| `email_domain` | `string` |  |
| `enterprise_id` | `string` |  |
| `enterprise_name` | `string` |  |
| `external_org_migrations` | `table` |  |
| `has_compliance_export` | `boolean` |  |
| `icon` | `table` |  |
| `id` | `string` |  |
| `ip` | `string|nil` |  |
| `is_assigned` | `boolean` |  |
| `is_enterprise` | `number` |  |
| `is_over_storage_limit` | `boolean` |  |
| `isp` | `string|nil` |  |
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
| `primary_owner` | `table` |  |
| `region` | `string|nil` |  |
| `scope` | `string` |  |
| `service_id` | `string` |  |
| `service_type` | `string` |  |
| `sso_provider` | `table` |  |
| `user_agent` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local team, err = client:Team():load({ token = "token" })
```

#### Example: List

```lua
local teams, err = client:Team():list()
```


### Teamprofile

Create an instance: `local teamprofile = client:Teamprofile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `table` |  |

#### Example: Load

```lua
local teamprofile, err = client:Teamprofile():load({ token = "token" })
```


### User

Create an instance: `local user = client:User(nil)`

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
| `channels` | `table` |  |
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
| `members` | `table` |  |
| `ok` | `boolean` |  |
| `online` | `boolean` |  |
| `presence` | `string` |  |
| `response_metadata` | `table` |  |
| `team` | `table` |  |
| `user` | `any` |  |

#### Example: Load

```lua
local user, err = client:User():load({ token = "token" })
```

#### Example: List

```lua
local users, err = client:User():list()
```

#### Example: Create

```lua
local user, err = client:User():create({
  token = "example_token", -- string
  avatar_hash = "example_avatar_hash", -- string
  cache_ts = 1, -- number
  channels = {}, -- table
  image_1024 = "example_image_1024", -- string
  image_192 = "example_image_192", -- string
  image_24 = "example_image_24", -- string
  image_32 = "example_image_32", -- string
  image_48 = "example_image_48", -- string
  image_512 = "example_image_512", -- string
  image_72 = "example_image_72", -- string
  image_original = "example_image_original", -- string
  members = {}, -- table
  ok = true, -- boolean
  presence = "example_presence", -- string
  response_metadata = {}, -- table
  user = "example_user", -- any
})
```


### Usergroup

Create an instance: `local usergroup = client:Usergroup(nil)`

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
| `prefs` | `table` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `number` |  |
| `users` | `table` |  |

#### Example: List

```lua
local usergroups, err = client:Usergroup():list()
```

#### Example: Create

```lua
local usergroup, err = client:Usergroup():create({
  usergroup = "example_usergroup", -- any
  auto_provision = true, -- boolean
  auto_type = "example_auto_type", -- any
  created_by = "example_created_by", -- string
  date_create = 1, -- number
  date_delete = 1, -- number
  date_update = 1, -- number
  deleted_by = "example_deleted_by", -- any
  enterprise_subteam_id = "example_enterprise_subteam_id", -- string
  id = "example_id", -- string
  is_external = true, -- boolean
  is_subteam = true, -- boolean
  is_usergroup = true, -- boolean
  prefs = {}, -- table
  team_id = "example_team_id", -- string
  updated_by = "example_updated_by", -- string
})
```


### Usergroupsuser

Create an instance: `local usergroupsuser = client:Usergroupsuser(nil)`

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
| `prefs` | `table` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `number` |  |
| `users` | `table` |  |

#### Example: List

```lua
local usergroupsusers, err = client:Usergroupsuser():list()
```

#### Example: Create

```lua
local usergroupsuser, err = client:Usergroupsuser():create({
  user = "example_user", -- any
  usergroup = "example_usergroup", -- any
  auto_provision = true, -- boolean
  auto_type = "example_auto_type", -- any
  created_by = "example_created_by", -- string
  date_create = 1, -- number
  date_delete = 1, -- number
  date_update = 1, -- number
  deleted_by = "example_deleted_by", -- any
  description = "example_description", -- string
  enterprise_subteam_id = "example_enterprise_subteam_id", -- string
  handle = "example_handle", -- string
  id = "example_id", -- string
  is_external = true, -- boolean
  is_subteam = true, -- boolean
  is_usergroup = true, -- boolean
  name = "example_name", -- string
  ok = true, -- boolean
  prefs = {}, -- table
  team_id = "example_team_id", -- string
  updated_by = "example_updated_by", -- string
})
```


### Usersprofile

Create an instance: `local usersprofile = client:Usersprofile(nil)`

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
| `email` | `nil|string` |  |
| `fields` | `table|nil` |  |
| `first_name` | `nil|string` |  |
| `guest_expiration_ts` | `nil|number` |  |
| `guest_invited_by` | `nil|string` |  |
| `image_1024` | `nil|string` |  |
| `image_192` | `nil|string` |  |
| `image_24` | `nil|string` |  |
| `image_32` | `nil|string` |  |
| `image_48` | `nil|string` |  |
| `image_512` | `nil|string` |  |
| `image_72` | `nil|string` |  |
| `image_original` | `nil|string` |  |
| `is_app_user` | `boolean` |  |
| `is_custom_image` | `boolean` |  |
| `is_restricted` | `nil|boolean` |  |
| `is_ultra_restricted` | `nil|boolean` |  |
| `last_avatar_image_hash` | `string` |  |
| `last_name` | `nil|string` |  |
| `memberships_count` | `number` |  |
| `name` | `nil|string` |  |
| `phone` | `string` |  |
| `pronouns` | `string` |  |
| `real_name` | `string` |  |
| `real_name_normalized` | `string` |  |
| `skype` | `string` |  |
| `status_default_emoji` | `string` |  |
| `status_default_text` | `string` |  |
| `status_default_text_canonical` | `nil|string` |  |
| `status_emoji` | `string` |  |
| `status_expiration` | `number` |  |
| `status_text` | `string` |  |
| `status_text_canonical` | `nil|string` |  |
| `team` | `string` |  |
| `title` | `string` |  |
| `updated` | `number` |  |
| `user_id` | `string` |  |
| `username` | `nil|string` |  |

#### Example: Load

```lua
local usersprofile, err = client:Usersprofile():load({ token = "token" })
```

#### Example: Create

```lua
local usersprofile, err = client:Usersprofile():create({
  avatar_hash = "example_avatar_hash", -- string
  display_name = "example_display_name", -- string
  display_name_normalized = "example_display_name_normalized", -- string
  fields = {}, -- table|nil
  phone = "example_phone", -- string
  real_name = "example_real_name", -- string
  real_name_normalized = "example_real_name_normalized", -- string
  skype = "example_skype", -- string
  status_emoji = "example_status_emoji", -- string
  status_text = "example_status_text", -- string
  title = "example_title", -- string
})
```


### View

Create an instance: `local view = client:View(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local view, err = client:View():load()
```


### Workflow

Create an instance: `local workflow = client:Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |

#### Example: Load

```lua
local workflow, err = client:Workflow():load({ workflow_step_edit_id = "workflow_step_edit_id" })
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── slack_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`slack_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local adminteam = client:Adminteam()
adminteam:load()

-- adminteam:data_get() now returns the adminteam data from the last load
-- adminteam:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
