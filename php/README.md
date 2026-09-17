# Slack PHP SDK



The PHP SDK for the Slack API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Adminapp()` — with named operations (`list`/`load`/`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/slack-sdk/releases](https://github.com/voxgig-sdk/slack-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'slack_sdk.php';

$client = new SlackSDK([
    "apikey" => getenv("SLACK_APIKEY"),
]);
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Adminapp record.
$created = $client->Adminapp()->create(["ok" => true]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $adminteam = $client->Adminteam()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = SlackSDK::test([
    "entity" => ["call" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$call = $client->Call()->load(["id" => "test01"]);
print_r($call->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new SlackSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
SLACK_TEST_LIVE=TRUE
SLACK_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### SlackSDK

```php
require_once 'slack_sdk.php';
$client = new SlackSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = SlackSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### SlackSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Adminapp` | `($data): AdminappEntity` | Create an Adminapp entity instance. |
| `Adminappsapproved` | `($data): AdminappsapprovedEntity` | Create an Adminappsapproved entity instance. |
| `Adminappsrequest` | `($data): AdminappsrequestEntity` | Create an Adminappsrequest entity instance. |
| `Adminappsrestricted` | `($data): AdminappsrestrictedEntity` | Create an Adminappsrestricted entity instance. |
| `Adminconversation` | `($data): AdminconversationEntity` | Create an Adminconversation entity instance. |
| `Adminconversationsekm` | `($data): AdminconversationsekmEntity` | Create an Adminconversationsekm entity instance. |
| `AdminconversationsrestrictAccess` | `($data): AdminconversationsrestrictAccessEntity` | Create an AdminconversationsrestrictAccess entity instance. |
| `Adminemoji` | `($data): AdminemojiEntity` | Create an Adminemoji entity instance. |
| `AdmininviteRequest` | `($data): AdmininviteRequestEntity` | Create an AdmininviteRequest entity instance. |
| `AdmininviteRequestsapproved` | `($data): AdmininviteRequestsapprovedEntity` | Create an AdmininviteRequestsapproved entity instance. |
| `AdmininviteRequestsdenied` | `($data): AdmininviteRequestsdeniedEntity` | Create an AdmininviteRequestsdenied entity instance. |
| `Adminteam` | `($data): AdminteamEntity` | Create an Adminteam entity instance. |
| `Adminteamsadmin` | `($data): AdminteamsadminEntity` | Create an Adminteamsadmin entity instance. |
| `Adminteamsowner` | `($data): AdminteamsownerEntity` | Create an Adminteamsowner entity instance. |
| `Adminteamssetting` | `($data): AdminteamssettingEntity` | Create an Adminteamssetting entity instance. |
| `Adminuser` | `($data): AdminuserEntity` | Create an Adminuser entity instance. |
| `Adminusergroup` | `($data): AdminusergroupEntity` | Create an Adminusergroup entity instance. |
| `Adminuserssession` | `($data): AdminuserssessionEntity` | Create an Adminuserssession entity instance. |
| `Api` | `($data): ApiEntity` | Create an Api entity instance. |
| `App` | `($data): AppEntity` | Create an App entity instance. |
| `Appseventauthorization` | `($data): AppseventauthorizationEntity` | Create an Appseventauthorization entity instance. |
| `Appspermission` | `($data): AppspermissionEntity` | Create an Appspermission entity instance. |
| `Appspermissionsresource` | `($data): AppspermissionsresourceEntity` | Create an Appspermissionsresource entity instance. |
| `Appspermissionsscope` | `($data): AppspermissionsscopeEntity` | Create an Appspermissionsscope entity instance. |
| `Appspermissionsuser` | `($data): AppspermissionsuserEntity` | Create an Appspermissionsuser entity instance. |
| `Auth` | `($data): AuthEntity` | Create an Auth entity instance. |
| `Bot` | `($data): BotEntity` | Create a Bot entity instance. |
| `Call` | `($data): CallEntity` | Create a Call entity instance. |
| `Callsparticipant` | `($data): CallsparticipantEntity` | Create a Callsparticipant entity instance. |
| `Chat` | `($data): ChatEntity` | Create a Chat entity instance. |
| `ChatscheduledMessage` | `($data): ChatscheduledMessageEntity` | Create a ChatscheduledMessage entity instance. |
| `Conversation` | `($data): ConversationEntity` | Create a Conversation entity instance. |
| `Dialog` | `($data): DialogEntity` | Create a Dialog entity instance. |
| `Dnd` | `($data): DndEntity` | Create a Dnd entity instance. |
| `Emoji` | `($data): EmojiEntity` | Create an Emoji entity instance. |
| `File` | `($data): FileEntity` | Create a File entity instance. |
| `Filescomment` | `($data): FilescommentEntity` | Create a Filescomment entity instance. |
| `Filesremote` | `($data): FilesremoteEntity` | Create a Filesremote entity instance. |
| `Migration` | `($data): MigrationEntity` | Create a Migration entity instance. |
| `Oauth` | `($data): OauthEntity` | Create an Oauth entity instance. |
| `Oauthv2` | `($data): Oauthv2Entity` | Create an Oauthv2 entity instance. |
| `Pin` | `($data): PinEntity` | Create a Pin entity instance. |
| `Reaction` | `($data): ReactionEntity` | Create a Reaction entity instance. |
| `Reminder` | `($data): ReminderEntity` | Create a Reminder entity instance. |
| `Rtm` | `($data): RtmEntity` | Create a Rtm entity instance. |
| `Search` | `($data): SearchEntity` | Create a Search entity instance. |
| `Star` | `($data): StarEntity` | Create a Star entity instance. |
| `Team` | `($data): TeamEntity` | Create a Team entity instance. |
| `Teamprofile` | `($data): TeamprofileEntity` | Create a Teamprofile entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `Usergroup` | `($data): UsergroupEntity` | Create an Usergroup entity instance. |
| `Usergroupsuser` | `($data): UsergroupsuserEntity` | Create an Usergroupsuser entity instance. |
| `Usersprofile` | `($data): UsersprofileEntity` | Create an Usersprofile entity instance. |
| `View` | `($data): ViewEntity` | Create a View entity instance. |
| `Workflow` | `($data): WorkflowEntity` | Create a Workflow entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$adminapp = $client->Adminapp();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```php
$adminapp = $client->Adminapp()->create([
    "ok" => null, // bool
]);
```


### Adminappsapproved

Create an instance: `$adminappsapproved = $client->Adminappsapproved();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminappsapproved record (throws on error).
$adminappsapproved = $client->Adminappsapproved()->load(["token" => "token"]);
```


### Adminappsrequest

Create an instance: `$adminappsrequest = $client->Adminappsrequest();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminappsrequest record (throws on error).
$adminappsrequest = $client->Adminappsrequest()->load(["token" => "token"]);
```


### Adminappsrestricted

Create an instance: `$adminappsrestricted = $client->Adminappsrestricted();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminappsrestricted record (throws on error).
$adminappsrestricted = $client->Adminappsrestricted()->load(["token" => "token"]);
```


### Adminconversation

Create an instance: `$adminconversation = $client->Adminconversation();`

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
| `can_thread` | `array` |  |
| `channel_id` | `string` |  |
| `created` | `int` |  |
| `creator` | `string` |  |
| `id` | `string` |  |
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
| `last_read` | `string` |  |
| `latest` | `mixed` |  |
| `members` | `array` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |
| `num_members` | `int` |  |
| `ok` | `bool` |  |
| `pending_shared` | `array` |  |
| `previous_names` | `array` |  |
| `priority` | `float` |  |
| `purpose` | `array` |  |
| `response_metadata` | `array` |  |
| `team_ids` | `array` |  |
| `topic` | `array` |  |
| `unlinked` | `int` |  |
| `unread_count` | `int` |  |
| `unread_count_display` | `int` |  |
| `who_can_post` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminconversation record (throws on error).
$adminconversation = $client->Adminconversation()->load(["channel_id" => "channel_id"]);
```

#### Example: List

```php
// list() returns an array of Adminconversation records (throws on error).
$adminconversations = $client->Adminconversation()->list();
```

#### Example: Create

```php
$adminconversation = $client->Adminconversation()->create([
    "is_private" => null, // bool
    "name" => null, // string
    "created" => null, // int
    "creator" => null, // string
    "id" => null, // string
    "is_channel" => null, // bool
    "is_mpim" => null, // bool
    "is_org_shared" => null, // bool
    "is_shared" => null, // bool
    "members" => null, // array
    "name_normalized" => null, // string
    "ok" => null, // bool
    "purpose" => null, // array
    "response_metadata" => null, // array
    "team_ids" => null, // array
    "topic" => null, // array
]);
```


### Adminconversationsekm

Create an instance: `$adminconversationsekm = $client->Adminconversationsekm();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminconversationsekm record (throws on error).
$adminconversationsekm = $client->Adminconversationsekm()->load(["token" => "token"]);
```


### AdminconversationsrestrictAccess

Create an instance: `$adminconversationsrestrict_access = $client->AdminconversationsrestrictAccess();`

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

```php
// load() returns the ENTITY — call data_get() for the AdminconversationsrestrictAccess record (throws on error).
$adminconversationsrestrict_access = $client->AdminconversationsrestrictAccess()->load(["channel_id" => "channel_id", "token" => "token"]);
```

#### Example: Create

```php
$adminconversationsrestrict_access = $client->AdminconversationsrestrictAccess()->create([
    "channel_id" => null, // string
    "group_id" => null, // string
    "token" => null, // string
    "ok" => null, // bool
]);
```


### Adminemoji

Create an instance: `$adminemoji = $client->Adminemoji();`

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

```php
// load() returns the ENTITY — call data_get() for the Adminemoji record (throws on error).
$adminemoji = $client->Adminemoji()->load(["token" => "token"]);
```

#### Example: Create

```php
$adminemoji = $client->Adminemoji()->create([
    "name" => null, // string
    "token" => null, // string
    "ok" => null, // bool
]);
```


### AdmininviteRequest

Create an instance: `$admininvite_request = $client->AdmininviteRequest();`

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

```php
// load() returns the ENTITY — call data_get() for the AdmininviteRequest record (throws on error).
$admininvite_request = $client->AdmininviteRequest()->load();
```

#### Example: Create

```php
$admininvite_request = $client->AdmininviteRequest()->create([
    "invite_request_id" => null, // string
    "ok" => null, // bool
]);
```


### AdmininviteRequestsapproved

Create an instance: `$admininvite_requestsapproved = $client->AdmininviteRequestsapproved();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdmininviteRequestsapproved record (throws on error).
$admininvite_requestsapproved = $client->AdmininviteRequestsapproved()->load();
```


### AdmininviteRequestsdenied

Create an instance: `$admininvite_requestsdenied = $client->AdmininviteRequestsdenied();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AdmininviteRequestsdenied record (throws on error).
$admininvite_requestsdenied = $client->AdmininviteRequestsdenied()->load();
```


### Adminteam

Create an instance: `$adminteam = $client->Adminteam();`

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

```php
// load() returns the ENTITY — call data_get() for the Adminteam record (throws on error).
$adminteam = $client->Adminteam()->load();
```

#### Example: Create

```php
$adminteam = $client->Adminteam()->create([
    "team_domain" => null, // mixed
    "team_name" => null, // mixed
    "ok" => null, // bool
]);
```


### Adminteamsadmin

Create an instance: `$adminteamsadmin = $client->Adminteamsadmin();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminteamsadmin record (throws on error).
$adminteamsadmin = $client->Adminteamsadmin()->load(["team_id" => "team_id", "token" => "token"]);
```


### Adminteamsowner

Create an instance: `$adminteamsowner = $client->Adminteamsowner();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Adminteamsowner record (throws on error).
$adminteamsowner = $client->Adminteamsowner()->load(["team_id" => "team_id", "token" => "token"]);
```


### Adminteamssetting

Create an instance: `$adminteamssetting = $client->Adminteamssetting();`

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

```php
// load() returns the ENTITY — call data_get() for the Adminteamssetting record (throws on error).
$adminteamssetting = $client->Adminteamssetting()->load(["team_id" => "team_id"]);
```

#### Example: Create

```php
$adminteamssetting = $client->Adminteamssetting()->create([
    "team_id" => null, // string
    "ok" => null, // bool
]);
```


### Adminuser

Create an instance: `$adminuser = $client->Adminuser();`

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

```php
// load() returns the ENTITY — call data_get() for the Adminuser record (throws on error).
$adminuser = $client->Adminuser()->load(["team_id" => "team_id"]);
```

#### Example: Create

```php
$adminuser = $client->Adminuser()->create([
    "team_id" => null, // string
    "ok" => null, // bool
]);
```


### Adminusergroup

Create an instance: `$adminusergroup = $client->Adminusergroup();`

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

```php
// load() returns the ENTITY — call data_get() for the Adminusergroup record (throws on error).
$adminusergroup = $client->Adminusergroup()->load(["usergroup_id" => "usergroup_id"]);
```

#### Example: Create

```php
$adminusergroup = $client->Adminusergroup()->create([
    "usergroup_id" => null, // string
    "ok" => null, // bool
]);
```


### Adminuserssession

Create an instance: `$adminuserssession = $client->Adminuserssession();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```php
$adminuserssession = $client->Adminuserssession()->create([
    "user_id" => null, // string
    "ok" => null, // bool
]);
```


### Api

Create an instance: `$api = $client->Api();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Api record (throws on error).
$api = $client->Api()->load();
```


### App

Create an instance: `$app = $client->App();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the App record (throws on error).
$app = $client->App()->load();
```


### Appseventauthorization

Create an instance: `$appseventauthorization = $client->Appseventauthorization();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Appseventauthorization record (throws on error).
$appseventauthorization = $client->Appseventauthorization()->load(["event_context" => "event_context"]);
```


### Appspermission

Create an instance: `$appspermission = $client->Appspermission();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `array` |  |
| `channel` | `array` |  |
| `group` | `array` |  |
| `im` | `array` |  |
| `mpim` | `array` |  |
| `ok` | `bool` |  |
| `team` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Appspermission record (throws on error).
$appspermission = $client->Appspermission()->load(["scope" => "scope", "token" => "token", "trigger_id" => "trigger_id"]);
```


### Appspermissionsresource

Create an instance: `$appspermissionsresource = $client->Appspermissionsresource();`

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

```php
// list() returns an array of Appspermissionsresource records (throws on error).
$appspermissionsresources = $client->Appspermissionsresource()->list();
```


### Appspermissionsscope

Create an instance: `$appspermissionsscope = $client->Appspermissionsscope();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `array` |  |
| `channel` | `array` |  |
| `group` | `array` |  |
| `im` | `array` |  |
| `mpim` | `array` |  |
| `team` | `array` |  |
| `user` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Appspermissionsscope record (throws on error).
$appspermissionsscope = $client->Appspermissionsscope()->load(["token" => "token"]);
```


### Appspermissionsuser

Create an instance: `$appspermissionsuser = $client->Appspermissionsuser();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Appspermissionsuser record (throws on error).
$appspermissionsuser = $client->Appspermissionsuser()->load(["token" => "token"]);
```


### Auth

Create an instance: `$auth = $client->Auth();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bot_id` | `string` |  |
| `is_enterprise_install` | `bool` |  |
| `ok` | `bool` |  |
| `revoked` | `bool` |  |
| `team` | `string` |  |
| `team_id` | `string` |  |
| `url` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Auth record (throws on error).
$auth = $client->Auth()->load(["token" => "token"]);
```


### Bot

Create an instance: `$bot = $client->Bot();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` |  |
| `deleted` | `bool` |  |
| `icons` | `array` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated` | `int` |  |
| `user_id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Bot record (throws on error).
$bot = $client->Bot()->load(["token" => "token"]);
```


### Call

Create an instance: `$call = $client->Call();`

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

```php
// load() returns the ENTITY — call data_get() for the Call record (throws on error).
$call = $client->Call()->load(["id" => "call_id"]);
```

#### Example: Create

```php
$call = $client->Call()->create([
    "external_unique_id" => null, // string
    "join_url" => null, // mixed
    "ok" => null, // bool
]);
```


### Callsparticipant

Create an instance: `$callsparticipant = $client->Callsparticipant();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```php
$callsparticipant = $client->Callsparticipant()->create([
    "id" => null, // string
    "user" => null, // mixed
    "ok" => null, // bool
]);
```


### Chat

Create an instance: `$chat = $client->Chat();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `array` |  |
| `blocks` | `array` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `array` |  |
| `channel` | `string` |  |
| `client_msg_id` | `string` |  |
| `comment` | `array` |  |
| `display_as_bot` | `bool` |  |
| `file` | `array` |  |
| `files` | `array` |  |
| `icons` | `array` |  |
| `inviter` | `string` |  |
| `is_delayed_message` | `bool` |  |
| `is_intro` | `bool` |  |
| `is_starred` | `bool` |  |
| `last_read` | `string` |  |
| `latest_reply` | `string` |  |
| `message_ts` | `string` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `old_name` | `string` |  |
| `parent_user_id` | `string` |  |
| `permalink` | `string` |  |
| `pinned_to` | `array` |  |
| `purpose` | `string` |  |
| `reactions` | `array` |  |
| `reply_count` | `int` |  |
| `reply_users` | `array` |  |
| `reply_users_count` | `int` |  |
| `source_team` | `string` |  |
| `subscribed` | `bool` |  |
| `subtype` | `string` |  |
| `team` | `string` |  |
| `text` | `string` |  |
| `thread_ts` | `string` |  |
| `topic` | `string` |  |
| `ts` | `string` |  |
| `type` | `string` |  |
| `unread_count` | `int` |  |
| `upload` | `bool` |  |
| `user` | `string` |  |
| `user_profile` | `array` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Chat record (throws on error).
$chat = $client->Chat()->load(["channel" => "channel", "message_t" => "message_t", "token" => "token"]);
```

#### Example: Create

```php
$chat = $client->Chat()->create([
    "channel" => null, // mixed
    "bot_profile" => null, // array
    "comment" => null, // array
    "message_ts" => null, // string
    "ok" => null, // bool
    "permalink" => null, // string
    "ts" => null, // string
    "type" => null, // string
    "user_profile" => null, // array
]);
```


### ChatscheduledMessage

Create an instance: `$chatscheduled_message = $client->ChatscheduledMessage();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel_id` | `string` |  |
| `date_created` | `int` |  |
| `id` | `string` |  |
| `post_at` | `int` |  |
| `text` | `string` |  |

#### Example: List

```php
// list() returns an array of ChatscheduledMessage records (throws on error).
$chatscheduled_messages = $client->ChatscheduledMessage()->list();
```


### Conversation

Create an instance: `$conversation = $client->Conversation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_closed` | `bool` |  |
| `already_open` | `bool` |  |
| `attachments` | `array` |  |
| `blocks` | `array` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `array` |  |
| `channel` | `mixed` |  |
| `channels` | `array` |  |
| `client_msg_id` | `string` |  |
| `comment` | `array` |  |
| `display_as_bot` | `bool` |  |
| `file` | `array` |  |
| `files` | `array` |  |
| `has_more` | `bool` |  |
| `icons` | `array` |  |
| `inviter` | `string` |  |
| `is_delayed_message` | `bool` |  |
| `is_intro` | `bool` |  |
| `is_starred` | `bool` |  |
| `last_read` | `string` |  |
| `latest_reply` | `string` |  |
| `members` | `array` |  |
| `messages` | `array` |  |
| `name` | `string` |  |
| `no_op` | `bool` |  |
| `not_in_channel` | `bool` |  |
| `ok` | `bool` |  |
| `old_name` | `string` |  |
| `parent_user_id` | `string` |  |
| `permalink` | `string` |  |
| `pinned_to` | `array` |  |
| `purpose` | `string` |  |
| `reactions` | `array` |  |
| `reply_count` | `int` |  |
| `reply_users` | `array` |  |
| `reply_users_count` | `int` |  |
| `response_metadata` | `array` |  |
| `source_team` | `string` |  |
| `subscribed` | `bool` |  |
| `subtype` | `string` |  |
| `team` | `string` |  |
| `text` | `string` |  |
| `thread_ts` | `string` |  |
| `topic` | `string` |  |
| `ts` | `string` |  |
| `type` | `string` |  |
| `unread_count` | `int` |  |
| `upload` | `bool` |  |
| `user` | `string` |  |
| `user_profile` | `array` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |
| `warning` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Conversation record (throws on error).
$conversation = $client->Conversation()->load();
```

#### Example: List

```php
// list() returns an array of Conversation records (throws on error).
$conversations = $client->Conversation()->list();
```

#### Example: Create

```php
$conversation = $client->Conversation()->create([
    "bot_profile" => null, // array
    "channels" => null, // array
    "comment" => null, // array
    "members" => null, // array
    "messages" => null, // array
    "ok" => null, // bool
    "text" => null, // string
    "ts" => null, // string
    "type" => null, // string
    "user_profile" => null, // array
]);
```


### Dialog

Create an instance: `$dialog = $client->Dialog();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Dialog record (throws on error).
$dialog = $client->Dialog()->load(["dialog" => "dialog", "trigger_id" => "trigger_id"]);
```


### Dnd

Create an instance: `$dnd = $client->Dnd();`

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

```php
// load() returns the ENTITY — call data_get() for the Dnd record (throws on error).
$dnd = $client->Dnd()->load();
```

#### Example: Create

```php
$dnd = $client->Dnd()->create([
    "num_minute" => null, // int
    "token" => null, // string
    "dnd_enabled" => null, // bool
    "next_dnd_end_ts" => null, // int
    "next_dnd_start_ts" => null, // int
    "ok" => null, // bool
]);
```


### Emoji

Create an instance: `$emoji = $client->Emoji();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Emoji record (throws on error).
$emoji = $client->Emoji()->load(["token" => "token"]);
```


### File

Create an instance: `$file = $client->File();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `array` |  |
| `comments` | `array` |  |
| `comments_count` | `int` |  |
| `content_html` | `null` |  |
| `created` | `int` |  |
| `date_delete` | `int` |  |
| `display_as_bot` | `bool` |  |
| `editable` | `bool` |  |
| `editor` | `string` |  |
| `external_id` | `string` |  |
| `external_type` | `string` |  |
| `external_url` | `string` |  |
| `file` | `array` |  |
| `filetype` | `string` |  |
| `groups` | `array` |  |
| `has_rich_preview` | `bool` |  |
| `id` | `string` |  |
| `image_exif_rotation` | `int` |  |
| `ims` | `array` |  |
| `is_external` | `bool` |  |
| `is_public` | `bool` |  |
| `is_starred` | `bool` |  |
| `is_tombstoned` | `bool` |  |
| `last_editor` | `string` |  |
| `mimetype` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `non_owner_editable` | `bool` |  |
| `num_stars` | `int` |  |
| `ok` | `bool` |  |
| `original_h` | `int` |  |
| `original_w` | `int` |  |
| `paging` | `array` |  |
| `permalink` | `string` |  |
| `permalink_public` | `string` |  |
| `pinned_info` | `array` |  |
| `pinned_to` | `array` |  |
| `pretty_type` | `string` |  |
| `preview` | `string` |  |
| `public_url_shared` | `bool` |  |
| `reactions` | `array` |  |
| `response_metadata` | `mixed` |  |
| `shares` | `array` |  |
| `size` | `int` |  |
| `source_team` | `string` |  |
| `state` | `string` |  |
| `thumb_1024` | `string` |  |
| `thumb_1024_h` | `int` |  |
| `thumb_1024_w` | `int` |  |
| `thumb_160` | `string` |  |
| `thumb_360` | `string` |  |
| `thumb_360_h` | `int` |  |
| `thumb_360_w` | `int` |  |
| `thumb_480` | `string` |  |
| `thumb_480_h` | `int` |  |
| `thumb_480_w` | `int` |  |
| `thumb_64` | `string` |  |
| `thumb_720` | `string` |  |
| `thumb_720_h` | `int` |  |
| `thumb_720_w` | `int` |  |
| `thumb_80` | `string` |  |
| `thumb_800` | `string` |  |
| `thumb_800_h` | `int` |  |
| `thumb_800_w` | `int` |  |
| `thumb_960` | `string` |  |
| `thumb_960_h` | `int` |  |
| `thumb_960_w` | `int` |  |
| `thumb_tiny` | `string` |  |
| `timestamp` | `int` |  |
| `title` | `string` |  |
| `updated` | `int` |  |
| `url_private` | `string` |  |
| `url_private_download` | `string` |  |
| `user` | `string` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |

#### Example: List

```php
// list() returns an array of File records (throws on error).
$files = $client->File()->list();
```

#### Example: Create

```php
$file = $client->File()->create([
    "comments" => null, // array
    "ok" => null, // bool
    "paging" => null, // array
]);
```


### Filescomment

Create an instance: `$filescomment = $client->Filescomment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```php
$filescomment = $client->Filescomment()->create([
    "ok" => null, // bool
]);
```


### Filesremote

Create an instance: `$filesremote = $client->Filesremote();`

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

```php
// load() returns the ENTITY — call data_get() for the Filesremote record (throws on error).
$filesremote = $client->Filesremote()->load();
```

#### Example: Create

```php
$filesremote = $client->Filesremote()->create([
    "ok" => null, // bool
]);
```


### Migration

Create an instance: `$migration = $client->Migration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise_id` | `string` |  |
| `invalid_user_ids` | `array` |  |
| `ok` | `bool` |  |
| `team_id` | `string` |  |
| `user_id_map` | `array` |  |

#### Example: List

```php
// list() returns an array of Migration records (throws on error).
$migrations = $client->Migration()->list();
```


### Oauth

Create an instance: `$oauth = $client->Oauth();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Oauth record (throws on error).
$oauth = $client->Oauth()->load();
```


### Oauthv2

Create an instance: `$oauthv2 = $client->Oauthv2();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Oauthv2 record (throws on error).
$oauthv2 = $client->Oauthv2()->load(["code" => "code"]);
```


### Pin

Create an instance: `$pin = $client->Pin();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `array` |  |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Pin record (throws on error).
$pin = $client->Pin()->load(["channel" => "channel", "token" => "token"]);
```

#### Example: Create

```php
$pin = $client->Pin()->create([
    "channel" => null, // mixed
]);
```


### Reaction

Create an instance: `$reaction = $client->Reaction();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `array` |  |
| `items` | `array` |  |
| `ok` | `bool` |  |
| `paging` | `array` |  |
| `response_metadata` | `mixed` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Reaction record (throws on error).
$reaction = $client->Reaction()->load(["token" => "token"]);
```

#### Example: List

```php
// list() returns an array of Reaction records (throws on error).
$reactions = $client->Reaction()->list();
```

#### Example: Create

```php
$reaction = $client->Reaction()->create([
    "name" => null, // string
    "items" => null, // array
    "paging" => null, // array
]);
```


### Reminder

Create an instance: `$reminder = $client->Reminder();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `complete_ts` | `int` |  |
| `creator` | `string` |  |
| `id` | `string` |  |
| `ok` | `bool` |  |
| `recurring` | `bool` |  |
| `text` | `string` |  |
| `time` | `int` |  |
| `user` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Reminder record (throws on error).
$reminder = $client->Reminder()->load();
```

#### Example: List

```php
// list() returns an array of Reminder records (throws on error).
$reminders = $client->Reminder()->list();
```

#### Example: Create

```php
$reminder = $client->Reminder()->create([
    "text" => null, // mixed
    "time" => null, // mixed
    "creator" => null, // string
    "id" => null, // string
    "ok" => null, // bool
    "recurring" => null, // bool
]);
```


### Rtm

Create an instance: `$rtm = $client->Rtm();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |
| `self` | `array` |  |
| `team` | `array` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Rtm record (throws on error).
$rtm = $client->Rtm()->load(["token" => "token"]);
```


### Search

Create an instance: `$search = $client->Search();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Search record (throws on error).
$search = $client->Search()->load(["query" => "query", "token" => "token"]);
```


### Star

Create an instance: `$star = $client->Star();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `array` |  |
| `ok` | `bool` |  |
| `paging` | `array` |  |

#### Example: List

```php
// list() returns an array of Star records (throws on error).
$stars = $client->Star()->list();
```

#### Example: Create

```php
$star = $client->Star()->create([
    "items" => null, // array
    "ok" => null, // bool
    "paging" => null, // array
]);
```


### Team

Create an instance: `$team = $client->Team();`

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
| `archived` | `bool` |  |
| `avatar_base_url` | `string` |  |
| `change_type` | `string` |  |
| `channel` | `string` |  |
| `count` | `int` |  |
| `country` | `mixed` |  |
| `created` | `int` |  |
| `date` | `string` |  |
| `date_create` | `int` |  |
| `date_first` | `int` |  |
| `date_last` | `int` |  |
| `deleted` | `bool` |  |
| `description` | `mixed` |  |
| `discoverable` | `mixed` |  |
| `domain` | `string` |  |
| `email_domain` | `string` |  |
| `enterprise_id` | `string` |  |
| `enterprise_name` | `string` |  |
| `external_org_migrations` | `array` |  |
| `has_compliance_export` | `bool` |  |
| `icon` | `array` |  |
| `id` | `string` |  |
| `ip` | `mixed` |  |
| `is_assigned` | `bool` |  |
| `is_enterprise` | `int` |  |
| `is_over_storage_limit` | `bool` |  |
| `isp` | `mixed` |  |
| `limit_ts` | `int` |  |
| `locale` | `string` |  |
| `messages_count` | `int` |  |
| `msg_edit_window_mins` | `int` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `over_integrations_limit` | `bool` |  |
| `over_storage_limit` | `bool` |  |
| `pay_prod_cur` | `string` |  |
| `plan` | `string` |  |
| `primary_owner` | `array` |  |
| `region` | `mixed` |  |
| `scope` | `string` |  |
| `service_id` | `string` |  |
| `service_type` | `string` |  |
| `sso_provider` | `array` |  |
| `user_agent` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Team record (throws on error).
$team = $client->Team()->load(["token" => "token"]);
```

#### Example: List

```php
// list() returns an array of Team records (throws on error).
$teams = $client->Team()->list();
```


### Teamprofile

Create an instance: `$teamprofile = $client->Teamprofile();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Teamprofile record (throws on error).
$teamprofile = $client->Teamprofile()->load(["token" => "token"]);
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_away` | `bool` |  |
| `avatar_hash` | `string` |  |
| `cache_ts` | `int` |  |
| `channels` | `array` |  |
| `connection_count` | `int` |  |
| `image_1024` | `string` |  |
| `image_192` | `string` |  |
| `image_24` | `string` |  |
| `image_32` | `string` |  |
| `image_48` | `string` |  |
| `image_512` | `string` |  |
| `image_72` | `string` |  |
| `image_original` | `string` |  |
| `last_activity` | `int` |  |
| `manual_away` | `bool` |  |
| `members` | `array` |  |
| `ok` | `bool` |  |
| `online` | `bool` |  |
| `presence` | `string` |  |
| `response_metadata` | `array` |  |
| `team` | `array` |  |
| `user` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the User record (throws on error).
$user = $client->User()->load(["token" => "token"]);
```

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```

#### Example: Create

```php
$user = $client->User()->create([
    "token" => null, // string
    "avatar_hash" => null, // string
    "cache_ts" => null, // int
    "channels" => null, // array
    "image_1024" => null, // string
    "image_192" => null, // string
    "image_24" => null, // string
    "image_32" => null, // string
    "image_48" => null, // string
    "image_512" => null, // string
    "image_72" => null, // string
    "image_original" => null, // string
    "members" => null, // array
    "ok" => null, // bool
    "presence" => null, // string
    "response_metadata" => null, // array
    "user" => null, // mixed
]);
```


### Usergroup

Create an instance: `$usergroup = $client->Usergroup();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `bool` |  |
| `auto_type` | `mixed` |  |
| `channel_count` | `int` |  |
| `created_by` | `string` |  |
| `date_create` | `int` |  |
| `date_delete` | `int` |  |
| `date_update` | `int` |  |
| `deleted_by` | `mixed` |  |
| `description` | `string` |  |
| `enterprise_subteam_id` | `string` |  |
| `handle` | `string` |  |
| `id` | `string` |  |
| `is_external` | `bool` |  |
| `is_subteam` | `bool` |  |
| `is_usergroup` | `bool` |  |
| `name` | `string` |  |
| `prefs` | `array` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `int` |  |
| `users` | `array` |  |

#### Example: List

```php
// list() returns an array of Usergroup records (throws on error).
$usergroups = $client->Usergroup()->list();
```

#### Example: Create

```php
$usergroup = $client->Usergroup()->create([
    "usergroup" => null, // mixed
    "auto_provision" => null, // bool
    "auto_type" => null, // mixed
    "created_by" => null, // string
    "date_create" => null, // int
    "date_delete" => null, // int
    "date_update" => null, // int
    "deleted_by" => null, // mixed
    "enterprise_subteam_id" => null, // string
    "id" => null, // string
    "is_external" => null, // bool
    "is_subteam" => null, // bool
    "is_usergroup" => null, // bool
    "prefs" => null, // array
    "team_id" => null, // string
    "updated_by" => null, // string
]);
```


### Usergroupsuser

Create an instance: `$usergroupsuser = $client->Usergroupsuser();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `bool` |  |
| `auto_type` | `mixed` |  |
| `channel_count` | `int` |  |
| `created_by` | `string` |  |
| `date_create` | `int` |  |
| `date_delete` | `int` |  |
| `date_update` | `int` |  |
| `deleted_by` | `mixed` |  |
| `description` | `string` |  |
| `enterprise_subteam_id` | `string` |  |
| `handle` | `string` |  |
| `id` | `string` |  |
| `is_external` | `bool` |  |
| `is_subteam` | `bool` |  |
| `is_usergroup` | `bool` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `prefs` | `array` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `int` |  |
| `users` | `array` |  |

#### Example: List

```php
// list() returns an array of Usergroupsuser records (throws on error).
$usergroupsusers = $client->Usergroupsuser()->list();
```

#### Example: Create

```php
$usergroupsuser = $client->Usergroupsuser()->create([
    "user" => null, // mixed
    "usergroup" => null, // mixed
    "auto_provision" => null, // bool
    "auto_type" => null, // mixed
    "created_by" => null, // string
    "date_create" => null, // int
    "date_delete" => null, // int
    "date_update" => null, // int
    "deleted_by" => null, // mixed
    "description" => null, // string
    "enterprise_subteam_id" => null, // string
    "handle" => null, // string
    "id" => null, // string
    "is_external" => null, // bool
    "is_subteam" => null, // bool
    "is_usergroup" => null, // bool
    "name" => null, // string
    "ok" => null, // bool
    "prefs" => null, // array
    "team_id" => null, // string
    "updated_by" => null, // string
]);
```


### Usersprofile

Create an instance: `$usersprofile = $client->Usersprofile();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `always_active` | `bool` |  |
| `api_app_id` | `string` |  |
| `avatar_hash` | `string` |  |
| `bot_id` | `string` |  |
| `display_name` | `string` |  |
| `display_name_normalized` | `string` |  |
| `email` | `mixed` |  |
| `fields` | `mixed` |  |
| `first_name` | `mixed` |  |
| `guest_expiration_ts` | `mixed` |  |
| `guest_invited_by` | `mixed` |  |
| `image_1024` | `mixed` |  |
| `image_192` | `mixed` |  |
| `image_24` | `mixed` |  |
| `image_32` | `mixed` |  |
| `image_48` | `mixed` |  |
| `image_512` | `mixed` |  |
| `image_72` | `mixed` |  |
| `image_original` | `mixed` |  |
| `is_app_user` | `bool` |  |
| `is_custom_image` | `bool` |  |
| `is_restricted` | `mixed` |  |
| `is_ultra_restricted` | `mixed` |  |
| `last_avatar_image_hash` | `string` |  |
| `last_name` | `mixed` |  |
| `memberships_count` | `int` |  |
| `name` | `mixed` |  |
| `phone` | `string` |  |
| `pronouns` | `string` |  |
| `real_name` | `string` |  |
| `real_name_normalized` | `string` |  |
| `skype` | `string` |  |
| `status_default_emoji` | `string` |  |
| `status_default_text` | `string` |  |
| `status_default_text_canonical` | `mixed` |  |
| `status_emoji` | `string` |  |
| `status_expiration` | `int` |  |
| `status_text` | `string` |  |
| `status_text_canonical` | `mixed` |  |
| `team` | `string` |  |
| `title` | `string` |  |
| `updated` | `int` |  |
| `user_id` | `string` |  |
| `username` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Usersprofile record (throws on error).
$usersprofile = $client->Usersprofile()->load(["token" => "token"]);
```

#### Example: Create

```php
$usersprofile = $client->Usersprofile()->create([
    "avatar_hash" => null, // string
    "display_name" => null, // string
    "display_name_normalized" => null, // string
    "fields" => null, // mixed
    "phone" => null, // string
    "real_name" => null, // string
    "real_name_normalized" => null, // string
    "skype" => null, // string
    "status_emoji" => null, // string
    "status_text" => null, // string
    "title" => null, // string
]);
```


### View

Create an instance: `$view = $client->View();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the View record (throws on error).
$view = $client->View()->load();
```


### Workflow

Create an instance: `$workflow = $client->Workflow();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Workflow record (throws on error).
$workflow = $client->Workflow()->load(["workflow_step_edit_id" => "workflow_step_edit_id"]);
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

Features are the extension mechanism. A feature is a PHP class
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

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── slack_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`slack_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$adminteam = $client->Adminteam();
$adminteam->load();

// $adminteam->data_get() now returns the adminteam data from the last load
// $adminteam->match_get() returns the last match criteria
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
