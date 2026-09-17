# Slack Python SDK



The Python SDK for the Slack API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Adminapp()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/slack-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from slack_sdk import SlackSDK

client = SlackSDK({
    "apikey": os.environ.get("SLACK_APIKEY"),
})
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Adminapp().create({"ok": True})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    adminteam = client.Adminteam().load()
    print(adminteam)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = SlackSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
adminteam = client.Adminteam().load()
# adminteam contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = SlackSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### SlackSDK

```python
from slack_sdk import SlackSDK

client = SlackSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = SlackSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### SlackSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `adminapp = client.Adminapp()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```python
adminapp = client.Adminapp().create({
    "ok": True,  # bool
})
```


### Adminappsapproved

Create an instance: `adminappsapproved = client.Adminappsapproved()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminappsapproved = client.Adminappsapproved().load({"token": "token"})
```


### Adminappsrequest

Create an instance: `adminappsrequest = client.Adminappsrequest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminappsrequest = client.Adminappsrequest().load({"token": "token"})
```


### Adminappsrestricted

Create an instance: `adminappsrestricted = client.Adminappsrestricted()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminappsrestricted = client.Adminappsrestricted().load({"token": "token"})
```


### Adminconversation

Create an instance: `adminconversation = client.Adminconversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted_user` | `str` |  |
| `can_thread` | `dict` |  |
| `channel_id` | `str` |  |
| `created` | `int` |  |
| `creator` | `str` |  |
| `id` | `str` |  |
| `is_archived` | `bool` |  |
| `is_channel` | `bool` |  |
| `is_frozen` | `bool` |  |
| `is_general` | `bool` |  |
| `is_member` | `bool` |  |
| `is_moved` | `int` |  |
| `is_mpim` | `bool` |  |
| `is_non_threadable` | `bool` |  |
| `is_org_shared` | `bool` |  |
| `is_pending_ext_shared` | `bool` |  |
| `is_private` | `bool` |  |
| `is_read_only` | `bool` |  |
| `is_shared` | `bool` |  |
| `is_thread_only` | `bool` |  |
| `last_read` | `str` |  |
| `latest` | `Any` |  |
| `members` | `list` |  |
| `name` | `str` |  |
| `name_normalized` | `str` |  |
| `num_members` | `int` |  |
| `ok` | `bool` |  |
| `pending_shared` | `list` |  |
| `previous_names` | `list` |  |
| `priority` | `float` |  |
| `purpose` | `dict` |  |
| `response_metadata` | `dict` |  |
| `team_ids` | `list` |  |
| `topic` | `dict` |  |
| `unlinked` | `int` |  |
| `unread_count` | `int` |  |
| `unread_count_display` | `int` |  |
| `who_can_post` | `dict` |  |

#### Example: Load

```python
adminconversation = client.Adminconversation().load({"channel_id": "channel_id"})
```

#### Example: List

```python
adminconversations = client.Adminconversation().list()
```

#### Example: Create

```python
adminconversation = client.Adminconversation().create({
    "is_private": True,  # bool
    "name": "example_name",  # str
    "created": 1,  # int
    "creator": "example_creator",  # str
    "id": "example_id",  # str
    "is_channel": True,  # bool
    "is_mpim": True,  # bool
    "is_org_shared": True,  # bool
    "is_shared": True,  # bool
    "members": [],  # list
    "name_normalized": "example_name_normalized",  # str
    "ok": True,  # bool
    "purpose": {},  # dict
    "response_metadata": {},  # dict
    "team_ids": [],  # list
    "topic": {},  # dict
})
```


### Adminconversationsekm

Create an instance: `adminconversationsekm = client.Adminconversationsekm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminconversationsekm = client.Adminconversationsekm().load({"token": "token"})
```


### AdminconversationsrestrictAccess

Create an instance: `adminconversationsrestrict_access = client.AdminconversationsrestrictAccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminconversationsrestrict_access = client.AdminconversationsrestrictAccess().load({"channel_id": "channel_id", "token": "token"})
```

#### Example: Create

```python
adminconversationsrestrict_access = client.AdminconversationsrestrictAccess().create({
    "channel_id": "example_channel_id",  # str
    "group_id": "example_group_id",  # str
    "token": "example_token",  # str
    "ok": True,  # bool
})
```


### Adminemoji

Create an instance: `adminemoji = client.Adminemoji()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminemoji = client.Adminemoji().load({"token": "token"})
```

#### Example: Create

```python
adminemoji = client.Adminemoji().create({
    "name": "example_name",  # str
    "token": "example_token",  # str
    "ok": True,  # bool
})
```


### AdmininviteRequest

Create an instance: `admininvite_request = client.AdmininviteRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
admininvite_request = client.AdmininviteRequest().load()
```

#### Example: Create

```python
admininvite_request = client.AdmininviteRequest().create({
    "invite_request_id": "example_invite_request_id",  # str
    "ok": True,  # bool
})
```


### AdmininviteRequestsapproved

Create an instance: `admininvite_requestsapproved = client.AdmininviteRequestsapproved()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
admininvite_requestsapproved = client.AdmininviteRequestsapproved().load()
```


### AdmininviteRequestsdenied

Create an instance: `admininvite_requestsdenied = client.AdmininviteRequestsdenied()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
admininvite_requestsdenied = client.AdmininviteRequestsdenied().load()
```


### Adminteam

Create an instance: `adminteam = client.Adminteam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminteam = client.Adminteam().load()
```

#### Example: Create

```python
adminteam = client.Adminteam().create({
    "team_domain": "example_team_domain",  # Any
    "team_name": "example_team_name",  # Any
    "ok": True,  # bool
})
```


### Adminteamsadmin

Create an instance: `adminteamsadmin = client.Adminteamsadmin()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminteamsadmin = client.Adminteamsadmin().load({"team_id": "team_id", "token": "token"})
```


### Adminteamsowner

Create an instance: `adminteamsowner = client.Adminteamsowner()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminteamsowner = client.Adminteamsowner().load({"team_id": "team_id", "token": "token"})
```


### Adminteamssetting

Create an instance: `adminteamssetting = client.Adminteamssetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminteamssetting = client.Adminteamssetting().load({"team_id": "team_id"})
```

#### Example: Create

```python
adminteamssetting = client.Adminteamssetting().create({
    "team_id": "example_team_id",  # str
    "ok": True,  # bool
})
```


### Adminuser

Create an instance: `adminuser = client.Adminuser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminuser = client.Adminuser().load({"team_id": "team_id"})
```

#### Example: Create

```python
adminuser = client.Adminuser().create({
    "team_id": "example_team_id",  # str
    "ok": True,  # bool
})
```


### Adminusergroup

Create an instance: `adminusergroup = client.Adminusergroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
adminusergroup = client.Adminusergroup().load({"usergroup_id": "usergroup_id"})
```

#### Example: Create

```python
adminusergroup = client.Adminusergroup().create({
    "usergroup_id": "example_usergroup_id",  # str
    "ok": True,  # bool
})
```


### Adminuserssession

Create an instance: `adminuserssession = client.Adminuserssession()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```python
adminuserssession = client.Adminuserssession().create({
    "user_id": "example_user_id",  # str
    "ok": True,  # bool
})
```


### Api

Create an instance: `api = client.Api()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
api = client.Api().load()
```


### App

Create an instance: `app = client.App()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
app = client.App().load()
```


### Appseventauthorization

Create an instance: `appseventauthorization = client.Appseventauthorization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
appseventauthorization = client.Appseventauthorization().load({"event_context": "event_context"})
```


### Appspermission

Create an instance: `appspermission = client.Appspermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `dict` |  |
| `channel` | `dict` |  |
| `group` | `dict` |  |
| `im` | `dict` |  |
| `mpim` | `dict` |  |
| `ok` | `bool` |  |
| `team` | `dict` |  |

#### Example: Load

```python
appspermission = client.Appspermission().load({"scope": "scope", "token": "token", "trigger_id": "trigger_id"})
```


### Appspermissionsresource

Create an instance: `appspermissionsresource = client.Appspermissionsresource()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `type` | `str` |  |

#### Example: List

```python
appspermissionsresources = client.Appspermissionsresource().list({"token": "example"})
```


### Appspermissionsscope

Create an instance: `appspermissionsscope = client.Appspermissionsscope()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `list` |  |
| `channel` | `list` |  |
| `group` | `list` |  |
| `im` | `list` |  |
| `mpim` | `list` |  |
| `team` | `list` |  |
| `user` | `list` |  |

#### Example: Load

```python
appspermissionsscope = client.Appspermissionsscope().load({"token": "token"})
```


### Appspermissionsuser

Create an instance: `appspermissionsuser = client.Appspermissionsuser()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
appspermissionsuser = client.Appspermissionsuser().load({"token": "token"})
```


### Auth

Create an instance: `auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bot_id` | `str` |  |
| `is_enterprise_install` | `bool` |  |
| `ok` | `bool` |  |
| `revoked` | `bool` |  |
| `team` | `str` |  |
| `team_id` | `str` |  |
| `url` | `str` |  |
| `user` | `str` |  |
| `user_id` | `str` |  |

#### Example: Load

```python
auth = client.Auth().load({"token": "token"})
```


### Bot

Create an instance: `bot = client.Bot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `str` |  |
| `deleted` | `bool` |  |
| `icons` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `updated` | `int` |  |
| `user_id` | `str` |  |

#### Example: Load

```python
bot = client.Bot().load({"token": "token"})
```


### Call

Create an instance: `call = client.Call()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
call = client.Call().load({"id": "call_id"})
```

#### Example: Create

```python
call = client.Call().create({
    "external_unique_id": "example_external_unique_id",  # str
    "join_url": "example_join_url",  # Any
    "ok": True,  # bool
})
```


### Callsparticipant

Create an instance: `callsparticipant = client.Callsparticipant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```python
callsparticipant = client.Callsparticipant().create({
    "id": "example_id",  # str
    "user": "example_user",  # Any
    "ok": True,  # bool
})
```


### Chat

Create an instance: `chat = client.Chat()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `list` |  |
| `blocks` | `list` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `str` |  |
| `bot_profile` | `dict` |  |
| `channel` | `str` |  |
| `client_msg_id` | `str` |  |
| `comment` | `dict` |  |
| `display_as_bot` | `bool` |  |
| `file` | `dict` |  |
| `files` | `list` |  |
| `icons` | `dict` |  |
| `inviter` | `str` |  |
| `is_delayed_message` | `bool` |  |
| `is_intro` | `bool` |  |
| `is_starred` | `bool` |  |
| `last_read` | `str` |  |
| `latest_reply` | `str` |  |
| `message_ts` | `str` |  |
| `name` | `str` |  |
| `ok` | `bool` |  |
| `old_name` | `str` |  |
| `parent_user_id` | `str` |  |
| `permalink` | `str` |  |
| `pinned_to` | `list` |  |
| `purpose` | `str` |  |
| `reactions` | `list` |  |
| `reply_count` | `int` |  |
| `reply_users` | `list` |  |
| `reply_users_count` | `int` |  |
| `source_team` | `str` |  |
| `subscribed` | `bool` |  |
| `subtype` | `str` |  |
| `team` | `str` |  |
| `text` | `str` |  |
| `thread_ts` | `str` |  |
| `topic` | `str` |  |
| `ts` | `str` |  |
| `type` | `str` |  |
| `unread_count` | `int` |  |
| `upload` | `bool` |  |
| `user` | `str` |  |
| `user_profile` | `dict` |  |
| `user_team` | `str` |  |
| `username` | `str` |  |

#### Example: Load

```python
chat = client.Chat().load({"channel": "channel", "message_t": "message_t", "token": "token"})
```

#### Example: Create

```python
chat = client.Chat().create({
    "channel": "example_channel",  # Any
    "bot_profile": {},  # dict
    "comment": {},  # dict
    "message_ts": "example_message_ts",  # str
    "ok": True,  # bool
    "permalink": "example_permalink",  # str
    "ts": "example_ts",  # str
    "type": "example_type",  # str
    "user_profile": {},  # dict
})
```


### ChatscheduledMessage

Create an instance: `chatscheduled_message = client.ChatscheduledMessage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel_id` | `str` |  |
| `date_created` | `int` |  |
| `id` | `str` |  |
| `post_at` | `int` |  |
| `text` | `str` |  |

#### Example: List

```python
chatscheduled_messages = client.ChatscheduledMessage().list()
```


### Conversation

Create an instance: `conversation = client.Conversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_closed` | `bool` |  |
| `already_open` | `bool` |  |
| `attachments` | `list` |  |
| `blocks` | `list` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `str` |  |
| `bot_profile` | `dict` |  |
| `channel` | `Any` |  |
| `channels` | `list` |  |
| `client_msg_id` | `str` |  |
| `comment` | `dict` |  |
| `display_as_bot` | `bool` |  |
| `file` | `dict` |  |
| `files` | `list` |  |
| `has_more` | `bool` |  |
| `icons` | `dict` |  |
| `inviter` | `str` |  |
| `is_delayed_message` | `bool` |  |
| `is_intro` | `bool` |  |
| `is_starred` | `bool` |  |
| `last_read` | `str` |  |
| `latest_reply` | `str` |  |
| `members` | `list` |  |
| `messages` | `list` |  |
| `name` | `str` |  |
| `no_op` | `bool` |  |
| `not_in_channel` | `bool` |  |
| `ok` | `bool` |  |
| `old_name` | `str` |  |
| `parent_user_id` | `str` |  |
| `permalink` | `str` |  |
| `pinned_to` | `list` |  |
| `purpose` | `str` |  |
| `reactions` | `list` |  |
| `reply_count` | `int` |  |
| `reply_users` | `list` |  |
| `reply_users_count` | `int` |  |
| `response_metadata` | `dict` |  |
| `source_team` | `str` |  |
| `subscribed` | `bool` |  |
| `subtype` | `str` |  |
| `team` | `str` |  |
| `text` | `str` |  |
| `thread_ts` | `str` |  |
| `topic` | `str` |  |
| `ts` | `str` |  |
| `type` | `str` |  |
| `unread_count` | `int` |  |
| `upload` | `bool` |  |
| `user` | `str` |  |
| `user_profile` | `dict` |  |
| `user_team` | `str` |  |
| `username` | `str` |  |
| `warning` | `str` |  |

#### Example: Load

```python
conversation = client.Conversation().load()
```

#### Example: List

```python
conversations = client.Conversation().list()
```

#### Example: Create

```python
conversation = client.Conversation().create({
    "bot_profile": {},  # dict
    "channels": [],  # list
    "comment": {},  # dict
    "members": [],  # list
    "messages": [],  # list
    "ok": True,  # bool
    "text": "example_text",  # str
    "ts": "example_ts",  # str
    "type": "example_type",  # str
    "user_profile": {},  # dict
})
```


### Dialog

Create an instance: `dialog = client.Dialog()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
dialog = client.Dialog().load({"dialog": "dialog", "trigger_id": "trigger_id"})
```


### Dnd

Create an instance: `dnd = client.Dnd()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dnd_enabled` | `bool` |  |
| `next_dnd_end_ts` | `int` |  |
| `next_dnd_start_ts` | `int` |  |
| `ok` | `bool` |  |
| `snooze_enabled` | `bool` |  |
| `snooze_endtime` | `int` |  |
| `snooze_remaining` | `int` |  |

#### Example: Load

```python
dnd = client.Dnd().load()
```

#### Example: Create

```python
dnd = client.Dnd().create({
    "num_minute": 1,  # int
    "token": "example_token",  # str
    "dnd_enabled": True,  # bool
    "next_dnd_end_ts": 1,  # int
    "next_dnd_start_ts": 1,  # int
    "ok": True,  # bool
})
```


### Emoji

Create an instance: `emoji = client.Emoji()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
emoji = client.Emoji().load({"token": "token"})
```


### File

Create an instance: `file = client.File()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `list` |  |
| `comments` | `list` |  |
| `comments_count` | `int` |  |
| `content_html` | `None` |  |
| `created` | `int` |  |
| `date_delete` | `int` |  |
| `display_as_bot` | `bool` |  |
| `editable` | `bool` |  |
| `editor` | `str` |  |
| `external_id` | `str` |  |
| `external_type` | `str` |  |
| `external_url` | `str` |  |
| `file` | `dict` |  |
| `filetype` | `str` |  |
| `groups` | `list` |  |
| `has_rich_preview` | `bool` |  |
| `id` | `str` |  |
| `image_exif_rotation` | `int` |  |
| `ims` | `list` |  |
| `is_external` | `bool` |  |
| `is_public` | `bool` |  |
| `is_starred` | `bool` |  |
| `is_tombstoned` | `bool` |  |
| `last_editor` | `str` |  |
| `mimetype` | `str` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `non_owner_editable` | `bool` |  |
| `num_stars` | `int` |  |
| `ok` | `bool` |  |
| `original_h` | `int` |  |
| `original_w` | `int` |  |
| `paging` | `dict` |  |
| `permalink` | `str` |  |
| `permalink_public` | `str` |  |
| `pinned_info` | `dict` |  |
| `pinned_to` | `list` |  |
| `pretty_type` | `str` |  |
| `preview` | `str` |  |
| `public_url_shared` | `bool` |  |
| `reactions` | `list` |  |
| `response_metadata` | `Any` |  |
| `shares` | `dict` |  |
| `size` | `int` |  |
| `source_team` | `str` |  |
| `state` | `str` |  |
| `thumb_1024` | `str` |  |
| `thumb_1024_h` | `int` |  |
| `thumb_1024_w` | `int` |  |
| `thumb_160` | `str` |  |
| `thumb_360` | `str` |  |
| `thumb_360_h` | `int` |  |
| `thumb_360_w` | `int` |  |
| `thumb_480` | `str` |  |
| `thumb_480_h` | `int` |  |
| `thumb_480_w` | `int` |  |
| `thumb_64` | `str` |  |
| `thumb_720` | `str` |  |
| `thumb_720_h` | `int` |  |
| `thumb_720_w` | `int` |  |
| `thumb_80` | `str` |  |
| `thumb_800` | `str` |  |
| `thumb_800_h` | `int` |  |
| `thumb_800_w` | `int` |  |
| `thumb_960` | `str` |  |
| `thumb_960_h` | `int` |  |
| `thumb_960_w` | `int` |  |
| `thumb_tiny` | `str` |  |
| `timestamp` | `int` |  |
| `title` | `str` |  |
| `updated` | `int` |  |
| `url_private` | `str` |  |
| `url_private_download` | `str` |  |
| `user` | `str` |  |
| `user_team` | `str` |  |
| `username` | `str` |  |

#### Example: List

```python
files = client.File().list()
```

#### Example: Create

```python
file = client.File().create({
    "comments": [],  # list
    "ok": True,  # bool
    "paging": {},  # dict
})
```


### Filescomment

Create an instance: `filescomment = client.Filescomment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```python
filescomment = client.Filescomment().create({
    "ok": True,  # bool
})
```


### Filesremote

Create an instance: `filesremote = client.Filesremote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
filesremote = client.Filesremote().load()
```

#### Example: Create

```python
filesremote = client.Filesremote().create({
    "ok": True,  # bool
})
```


### Migration

Create an instance: `migration = client.Migration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise_id` | `str` |  |
| `invalid_user_ids` | `list` |  |
| `ok` | `bool` |  |
| `team_id` | `str` |  |
| `user_id_map` | `dict` |  |

#### Example: List

```python
migrations = client.Migration().list({"token": "example", "user": "example"})
```


### Oauth

Create an instance: `oauth = client.Oauth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
oauth = client.Oauth().load()
```


### Oauthv2

Create an instance: `oauthv2 = client.Oauthv2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
oauthv2 = client.Oauthv2().load({"code": "code"})
```


### Pin

Create an instance: `pin = client.Pin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `list` |  |
| `ok` | `bool` |  |

#### Example: Load

```python
pin = client.Pin().load({"channel": "channel", "token": "token"})
```

#### Example: Create

```python
pin = client.Pin().create({
    "channel": "example_channel",  # Any
})
```


### Reaction

Create an instance: `reaction = client.Reaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `dict` |  |
| `items` | `list` |  |
| `ok` | `bool` |  |
| `paging` | `dict` |  |
| `response_metadata` | `Any` |  |
| `type` | `str` |  |

#### Example: Load

```python
reaction = client.Reaction().load({"token": "token"})
```

#### Example: List

```python
reactions = client.Reaction().list({"token": "example"})
```

#### Example: Create

```python
reaction = client.Reaction().create({
    "name": "example_name",  # str
    "items": [],  # list
    "paging": {},  # dict
})
```


### Reminder

Create an instance: `reminder = client.Reminder()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `complete_ts` | `int` |  |
| `creator` | `str` |  |
| `id` | `str` |  |
| `ok` | `bool` |  |
| `recurring` | `bool` |  |
| `text` | `str` |  |
| `time` | `int` |  |
| `user` | `str` |  |

#### Example: Load

```python
reminder = client.Reminder().load()
```

#### Example: List

```python
reminders = client.Reminder().list()
```

#### Example: Create

```python
reminder = client.Reminder().create({
    "text": "example_text",  # Any
    "time": "example_time",  # Any
    "creator": "example_creator",  # str
    "id": "example_id",  # str
    "ok": True,  # bool
    "recurring": True,  # bool
})
```


### Rtm

Create an instance: `rtm = client.Rtm()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |
| `self` | `dict` |  |
| `team` | `dict` |  |
| `url` | `str` |  |

#### Example: Load

```python
rtm = client.Rtm().load({"token": "token"})
```


### Search

Create an instance: `search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
search = client.Search().load({"query": "query", "token": "token"})
```


### Star

Create an instance: `star = client.Star()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `list` |  |
| `ok` | `bool` |  |
| `paging` | `dict` |  |

#### Example: List

```python
stars = client.Star().list()
```

#### Example: Create

```python
star = client.Star().create({
    "items": [],  # list
    "ok": True,  # bool
    "paging": {},  # dict
})
```


### Team

Create an instance: `team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_app_id` | `str` |  |
| `app_id` | `str` |  |
| `app_type` | `str` |  |
| `archived` | `bool` |  |
| `avatar_base_url` | `str` |  |
| `change_type` | `str` |  |
| `channel` | `str` |  |
| `count` | `int` |  |
| `country` | `str | None` |  |
| `created` | `int` |  |
| `date` | `str` |  |
| `date_create` | `int` |  |
| `date_first` | `int` |  |
| `date_last` | `int` |  |
| `deleted` | `bool` |  |
| `description` | `None | str` |  |
| `discoverable` | `Any` |  |
| `domain` | `str` |  |
| `email_domain` | `str` |  |
| `enterprise_id` | `str` |  |
| `enterprise_name` | `str` |  |
| `external_org_migrations` | `dict` |  |
| `has_compliance_export` | `bool` |  |
| `icon` | `dict` |  |
| `id` | `str` |  |
| `ip` | `str | None` |  |
| `is_assigned` | `bool` |  |
| `is_enterprise` | `int` |  |
| `is_over_storage_limit` | `bool` |  |
| `isp` | `str | None` |  |
| `limit_ts` | `int` |  |
| `locale` | `str` |  |
| `messages_count` | `int` |  |
| `msg_edit_window_mins` | `int` |  |
| `name` | `str` |  |
| `ok` | `bool` |  |
| `over_integrations_limit` | `bool` |  |
| `over_storage_limit` | `bool` |  |
| `pay_prod_cur` | `str` |  |
| `plan` | `str` |  |
| `primary_owner` | `dict` |  |
| `region` | `str | None` |  |
| `scope` | `str` |  |
| `service_id` | `str` |  |
| `service_type` | `str` |  |
| `sso_provider` | `dict` |  |
| `user_agent` | `str` |  |
| `user_id` | `str` |  |
| `user_name` | `str` |  |
| `username` | `str` |  |

#### Example: Load

```python
team = client.Team().load({"token": "token"})
```

#### Example: List

```python
teams = client.Team().list({"token": "example"})
```


### Teamprofile

Create an instance: `teamprofile = client.Teamprofile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `list` |  |

#### Example: Load

```python
teamprofile = client.Teamprofile().load({"token": "token"})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_away` | `bool` |  |
| `avatar_hash` | `str` |  |
| `cache_ts` | `int` |  |
| `channels` | `list` |  |
| `connection_count` | `int` |  |
| `image_1024` | `str` |  |
| `image_192` | `str` |  |
| `image_24` | `str` |  |
| `image_32` | `str` |  |
| `image_48` | `str` |  |
| `image_512` | `str` |  |
| `image_72` | `str` |  |
| `image_original` | `str` |  |
| `last_activity` | `int` |  |
| `manual_away` | `bool` |  |
| `members` | `list` |  |
| `ok` | `bool` |  |
| `online` | `bool` |  |
| `presence` | `str` |  |
| `response_metadata` | `dict` |  |
| `team` | `dict` |  |
| `user` | `Any` |  |

#### Example: Load

```python
user = client.User().load({"token": "token"})
```

#### Example: List

```python
users = client.User().list()
```

#### Example: Create

```python
user = client.User().create({
    "token": "example_token",  # str
    "avatar_hash": "example_avatar_hash",  # str
    "cache_ts": 1,  # int
    "channels": [],  # list
    "image_1024": "example_image_1024",  # str
    "image_192": "example_image_192",  # str
    "image_24": "example_image_24",  # str
    "image_32": "example_image_32",  # str
    "image_48": "example_image_48",  # str
    "image_512": "example_image_512",  # str
    "image_72": "example_image_72",  # str
    "image_original": "example_image_original",  # str
    "members": [],  # list
    "ok": True,  # bool
    "presence": "example_presence",  # str
    "response_metadata": {},  # dict
    "user": "example_user",  # Any
})
```


### Usergroup

Create an instance: `usergroup = client.Usergroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `bool` |  |
| `auto_type` | `Any` |  |
| `channel_count` | `int` |  |
| `created_by` | `str` |  |
| `date_create` | `int` |  |
| `date_delete` | `int` |  |
| `date_update` | `int` |  |
| `deleted_by` | `Any` |  |
| `description` | `str` |  |
| `enterprise_subteam_id` | `str` |  |
| `handle` | `str` |  |
| `id` | `str` |  |
| `is_external` | `bool` |  |
| `is_subteam` | `bool` |  |
| `is_usergroup` | `bool` |  |
| `name` | `str` |  |
| `prefs` | `dict` |  |
| `team_id` | `str` |  |
| `updated_by` | `str` |  |
| `user_count` | `int` |  |
| `users` | `list` |  |

#### Example: List

```python
usergroups = client.Usergroup().list({"token": "example"})
```

#### Example: Create

```python
usergroup = client.Usergroup().create({
    "usergroup": "example_usergroup",  # Any
    "auto_provision": True,  # bool
    "auto_type": "example_auto_type",  # Any
    "created_by": "example_created_by",  # str
    "date_create": 1,  # int
    "date_delete": 1,  # int
    "date_update": 1,  # int
    "deleted_by": "example_deleted_by",  # Any
    "enterprise_subteam_id": "example_enterprise_subteam_id",  # str
    "id": "example_id",  # str
    "is_external": True,  # bool
    "is_subteam": True,  # bool
    "is_usergroup": True,  # bool
    "prefs": {},  # dict
    "team_id": "example_team_id",  # str
    "updated_by": "example_updated_by",  # str
})
```


### Usergroupsuser

Create an instance: `usergroupsuser = client.Usergroupsuser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `bool` |  |
| `auto_type` | `Any` |  |
| `channel_count` | `int` |  |
| `created_by` | `str` |  |
| `date_create` | `int` |  |
| `date_delete` | `int` |  |
| `date_update` | `int` |  |
| `deleted_by` | `Any` |  |
| `description` | `str` |  |
| `enterprise_subteam_id` | `str` |  |
| `handle` | `str` |  |
| `id` | `str` |  |
| `is_external` | `bool` |  |
| `is_subteam` | `bool` |  |
| `is_usergroup` | `bool` |  |
| `name` | `str` |  |
| `ok` | `bool` |  |
| `prefs` | `dict` |  |
| `team_id` | `str` |  |
| `updated_by` | `str` |  |
| `user_count` | `int` |  |
| `users` | `list` |  |

#### Example: List

```python
usergroupsusers = client.Usergroupsuser().list({"token": "example", "usergroup": "example"})
```

#### Example: Create

```python
usergroupsuser = client.Usergroupsuser().create({
    "user": "example_user",  # Any
    "usergroup": "example_usergroup",  # Any
    "auto_provision": True,  # bool
    "auto_type": "example_auto_type",  # Any
    "created_by": "example_created_by",  # str
    "date_create": 1,  # int
    "date_delete": 1,  # int
    "date_update": 1,  # int
    "deleted_by": "example_deleted_by",  # Any
    "description": "example_description",  # str
    "enterprise_subteam_id": "example_enterprise_subteam_id",  # str
    "handle": "example_handle",  # str
    "id": "example_id",  # str
    "is_external": True,  # bool
    "is_subteam": True,  # bool
    "is_usergroup": True,  # bool
    "name": "example_name",  # str
    "ok": True,  # bool
    "prefs": {},  # dict
    "team_id": "example_team_id",  # str
    "updated_by": "example_updated_by",  # str
})
```


### Usersprofile

Create an instance: `usersprofile = client.Usersprofile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `always_active` | `bool` |  |
| `api_app_id` | `str` |  |
| `avatar_hash` | `str` |  |
| `bot_id` | `str` |  |
| `display_name` | `str` |  |
| `display_name_normalized` | `str` |  |
| `email` | `None | str` |  |
| `fields` | `dict | None | list` |  |
| `first_name` | `None | str` |  |
| `guest_expiration_ts` | `None | int` |  |
| `guest_invited_by` | `None | str` |  |
| `image_1024` | `None | str` |  |
| `image_192` | `None | str` |  |
| `image_24` | `None | str` |  |
| `image_32` | `None | str` |  |
| `image_48` | `None | str` |  |
| `image_512` | `None | str` |  |
| `image_72` | `None | str` |  |
| `image_original` | `None | str` |  |
| `is_app_user` | `bool` |  |
| `is_custom_image` | `bool` |  |
| `is_restricted` | `None | bool` |  |
| `is_ultra_restricted` | `None | bool` |  |
| `last_avatar_image_hash` | `str` |  |
| `last_name` | `None | str` |  |
| `memberships_count` | `int` |  |
| `name` | `None | str` |  |
| `phone` | `str` |  |
| `pronouns` | `str` |  |
| `real_name` | `str` |  |
| `real_name_normalized` | `str` |  |
| `skype` | `str` |  |
| `status_default_emoji` | `str` |  |
| `status_default_text` | `str` |  |
| `status_default_text_canonical` | `None | str` |  |
| `status_emoji` | `str` |  |
| `status_expiration` | `int` |  |
| `status_text` | `str` |  |
| `status_text_canonical` | `None | str` |  |
| `team` | `str` |  |
| `title` | `str` |  |
| `updated` | `int` |  |
| `user_id` | `str` |  |
| `username` | `None | str` |  |

#### Example: Load

```python
usersprofile = client.Usersprofile().load({"token": "token"})
```

#### Example: Create

```python
usersprofile = client.Usersprofile().create({
    "avatar_hash": "example_avatar_hash",  # str
    "display_name": "example_display_name",  # str
    "display_name_normalized": "example_display_name_normalized",  # str
    "fields": {},  # dict | None | list
    "phone": "example_phone",  # str
    "real_name": "example_real_name",  # str
    "real_name_normalized": "example_real_name_normalized",  # str
    "skype": "example_skype",  # str
    "status_emoji": "example_status_emoji",  # str
    "status_text": "example_status_text",  # str
    "title": "example_title",  # str
})
```


### View

Create an instance: `view = client.View()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
view = client.View().load()
```


### Workflow

Create an instance: `workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```python
workflow = client.Workflow().load({"workflow_step_edit_id": "workflow_step_edit_id"})
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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── slack_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`slack_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
adminteam = client.Adminteam()
adminteam.load()

# adminteam.data_get() now returns the adminteam data from the last load
# adminteam.match_get() returns the last match criteria
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
