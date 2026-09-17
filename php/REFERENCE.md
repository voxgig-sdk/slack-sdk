# Slack PHP SDK Reference

Complete API reference for the Slack PHP SDK.


## SlackSDK

### Constructor

```php
require_once __DIR__ . '/slack_sdk.php';

$client = new SlackSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SlackSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = SlackSDK::test();
```


### Instance Methods

#### `Adminapp($data = null)`

Create a new `AdminappEntity` instance. Pass `null` for no initial data.

#### `Adminappsapproved($data = null)`

Create a new `AdminappsapprovedEntity` instance. Pass `null` for no initial data.

#### `Adminappsrequest($data = null)`

Create a new `AdminappsrequestEntity` instance. Pass `null` for no initial data.

#### `Adminappsrestricted($data = null)`

Create a new `AdminappsrestrictedEntity` instance. Pass `null` for no initial data.

#### `Adminconversation($data = null)`

Create a new `AdminconversationEntity` instance. Pass `null` for no initial data.

#### `Adminconversationsekm($data = null)`

Create a new `AdminconversationsekmEntity` instance. Pass `null` for no initial data.

#### `AdminconversationsrestrictAccess($data = null)`

Create a new `AdminconversationsrestrictAccessEntity` instance. Pass `null` for no initial data.

#### `Adminemoji($data = null)`

Create a new `AdminemojiEntity` instance. Pass `null` for no initial data.

#### `AdmininviteRequest($data = null)`

Create a new `AdmininviteRequestEntity` instance. Pass `null` for no initial data.

#### `AdmininviteRequestsapproved($data = null)`

Create a new `AdmininviteRequestsapprovedEntity` instance. Pass `null` for no initial data.

#### `AdmininviteRequestsdenied($data = null)`

Create a new `AdmininviteRequestsdeniedEntity` instance. Pass `null` for no initial data.

#### `Adminteam($data = null)`

Create a new `AdminteamEntity` instance. Pass `null` for no initial data.

#### `Adminteamsadmin($data = null)`

Create a new `AdminteamsadminEntity` instance. Pass `null` for no initial data.

#### `Adminteamsowner($data = null)`

Create a new `AdminteamsownerEntity` instance. Pass `null` for no initial data.

#### `Adminteamssetting($data = null)`

Create a new `AdminteamssettingEntity` instance. Pass `null` for no initial data.

#### `Adminuser($data = null)`

Create a new `AdminuserEntity` instance. Pass `null` for no initial data.

#### `Adminusergroup($data = null)`

Create a new `AdminusergroupEntity` instance. Pass `null` for no initial data.

#### `Adminuserssession($data = null)`

Create a new `AdminuserssessionEntity` instance. Pass `null` for no initial data.

#### `Api($data = null)`

Create a new `ApiEntity` instance. Pass `null` for no initial data.

#### `App($data = null)`

Create a new `AppEntity` instance. Pass `null` for no initial data.

#### `Appseventauthorization($data = null)`

Create a new `AppseventauthorizationEntity` instance. Pass `null` for no initial data.

#### `Appspermission($data = null)`

Create a new `AppspermissionEntity` instance. Pass `null` for no initial data.

#### `Appspermissionsresource($data = null)`

Create a new `AppspermissionsresourceEntity` instance. Pass `null` for no initial data.

#### `Appspermissionsscope($data = null)`

Create a new `AppspermissionsscopeEntity` instance. Pass `null` for no initial data.

#### `Appspermissionsuser($data = null)`

Create a new `AppspermissionsuserEntity` instance. Pass `null` for no initial data.

#### `Auth($data = null)`

Create a new `AuthEntity` instance. Pass `null` for no initial data.

#### `Bot($data = null)`

Create a new `BotEntity` instance. Pass `null` for no initial data.

#### `Call($data = null)`

Create a new `CallEntity` instance. Pass `null` for no initial data.

#### `Callsparticipant($data = null)`

Create a new `CallsparticipantEntity` instance. Pass `null` for no initial data.

#### `Chat($data = null)`

Create a new `ChatEntity` instance. Pass `null` for no initial data.

#### `ChatscheduledMessage($data = null)`

Create a new `ChatscheduledMessageEntity` instance. Pass `null` for no initial data.

#### `Conversation($data = null)`

Create a new `ConversationEntity` instance. Pass `null` for no initial data.

#### `Dialog($data = null)`

Create a new `DialogEntity` instance. Pass `null` for no initial data.

#### `Dnd($data = null)`

Create a new `DndEntity` instance. Pass `null` for no initial data.

#### `Emoji($data = null)`

Create a new `EmojiEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `Filescomment($data = null)`

Create a new `FilescommentEntity` instance. Pass `null` for no initial data.

#### `Filesremote($data = null)`

Create a new `FilesremoteEntity` instance. Pass `null` for no initial data.

#### `Migration($data = null)`

Create a new `MigrationEntity` instance. Pass `null` for no initial data.

#### `Oauth($data = null)`

Create a new `OauthEntity` instance. Pass `null` for no initial data.

#### `Oauthv2($data = null)`

Create a new `Oauthv2Entity` instance. Pass `null` for no initial data.

#### `Pin($data = null)`

Create a new `PinEntity` instance. Pass `null` for no initial data.

#### `Reaction($data = null)`

Create a new `ReactionEntity` instance. Pass `null` for no initial data.

#### `Reminder($data = null)`

Create a new `ReminderEntity` instance. Pass `null` for no initial data.

#### `Rtm($data = null)`

Create a new `RtmEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `Star($data = null)`

Create a new `StarEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `Teamprofile($data = null)`

Create a new `TeamprofileEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `Usergroup($data = null)`

Create a new `UsergroupEntity` instance. Pass `null` for no initial data.

#### `Usergroupsuser($data = null)`

Create a new `UsergroupsuserEntity` instance. Pass `null` for no initial data.

#### `Usersprofile($data = null)`

Create a new `UsersprofileEntity` instance. Pass `null` for no initial data.

#### `View($data = null)`

Create a new `ViewEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): SlackUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AdminappEntity

```php
$adminapp = $client->Adminapp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminapp()->create([
  "ok" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminappEntity`

Create a new `AdminappEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminappsapprovedEntity

```php
$adminappsapproved = $client->Adminappsapproved();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminappsapproved()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminappsapprovedEntity`

Create a new `AdminappsapprovedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminappsrequestEntity

```php
$adminappsrequest = $client->Adminappsrequest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminappsrequest()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminappsrequestEntity`

Create a new `AdminappsrequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminappsrestrictedEntity

```php
$adminappsrestricted = $client->Adminappsrestricted();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminappsrestricted()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminappsrestrictedEntity`

Create a new `AdminappsrestrictedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminconversationEntity

```php
$adminconversation = $client->Adminconversation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted_user` | `string` | No |  |
| `can_thread` | `array` | No |  |
| `channel_id` | `string` | No |  |
| `created` | `int` | Yes |  |
| `creator` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_archived` | `bool` | No |  |
| `is_channel` | `bool` | Yes |  |
| `is_frozen` | `bool` | No |  |
| `is_general` | `bool` | No |  |
| `is_member` | `bool` | No |  |
| `is_moved` | `int` | No |  |
| `is_mpim` | `bool` | Yes |  |
| `is_non_threadable` | `bool` | No |  |
| `is_org_shared` | `bool` | Yes |  |
| `is_pending_ext_shared` | `bool` | No |  |
| `is_private` | `bool` | Yes |  |
| `is_read_only` | `bool` | No |  |
| `is_shared` | `bool` | Yes |  |
| `is_thread_only` | `bool` | No |  |
| `last_read` | `string` | No |  |
| `latest` | `mixed` | No |  |
| `members` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `num_members` | `int` | No |  |
| `ok` | `bool` | Yes |  |
| `pending_shared` | `array` | No |  |
| `previous_names` | `array` | No |  |
| `priority` | `float` | No |  |
| `purpose` | `array` | Yes |  |
| `response_metadata` | `array` | Yes |  |
| `team_ids` | `array` | Yes |  |
| `topic` | `array` | Yes |  |
| `unlinked` | `int` | No |  |
| `unread_count` | `int` | No |  |
| `unread_count_display` | `int` | No |  |
| `who_can_post` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminconversation()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Adminconversation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminconversation()->load(["channel_id" => "channel_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminconversationEntity`

Create a new `AdminconversationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminconversationsekmEntity

```php
$adminconversationsekm = $client->Adminconversationsekm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminconversationsekm()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminconversationsekmEntity`

Create a new `AdminconversationsekmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminconversationsrestrictAccessEntity

```php
$adminconversationsrestrict_access = $client->AdminconversationsrestrictAccess();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AdminconversationsrestrictAccess()->create([
  "channel_id" => null, // string
  "group_id" => null, // string
  "token" => null, // string
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AdminconversationsrestrictAccess()->load(["channel_id" => "channel_id", "token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminconversationsrestrictAccessEntity`

Create a new `AdminconversationsrestrictAccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminemojiEntity

```php
$adminemoji = $client->Adminemoji();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminemoji()->create([
  "name" => null, // string
  "token" => null, // string
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminemoji()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminemojiEntity`

Create a new `AdminemojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdmininviteRequestEntity

```php
$admininvite_request = $client->AdmininviteRequest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AdmininviteRequest()->create([
  "invite_request_id" => null, // string
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AdmininviteRequest()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdmininviteRequestEntity`

Create a new `AdmininviteRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdmininviteRequestsapprovedEntity

```php
$admininvite_requestsapproved = $client->AdmininviteRequestsapproved();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AdmininviteRequestsapproved()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdmininviteRequestsapprovedEntity`

Create a new `AdmininviteRequestsapprovedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdmininviteRequestsdeniedEntity

```php
$admininvite_requestsdenied = $client->AdmininviteRequestsdenied();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AdmininviteRequestsdenied()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdmininviteRequestsdeniedEntity`

Create a new `AdmininviteRequestsdeniedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminteamEntity

```php
$adminteam = $client->Adminteam();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminteam()->create([
  "team_domain" => null, // mixed
  "team_name" => null, // mixed
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminteam()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminteamEntity`

Create a new `AdminteamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminteamsadminEntity

```php
$adminteamsadmin = $client->Adminteamsadmin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminteamsadmin()->load(["team_id" => "team_id", "token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminteamsadminEntity`

Create a new `AdminteamsadminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminteamsownerEntity

```php
$adminteamsowner = $client->Adminteamsowner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminteamsowner()->load(["team_id" => "team_id", "token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminteamsownerEntity`

Create a new `AdminteamsownerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminteamssettingEntity

```php
$adminteamssetting = $client->Adminteamssetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminteamssetting()->create([
  "team_id" => null, // string
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminteamssetting()->load(["team_id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminteamssettingEntity`

Create a new `AdminteamssettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminuserEntity

```php
$adminuser = $client->Adminuser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminuser()->create([
  "team_id" => null, // string
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminuser()->load(["team_id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminuserEntity`

Create a new `AdminuserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminusergroupEntity

```php
$adminusergroup = $client->Adminusergroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminusergroup()->create([
  "usergroup_id" => null, // string
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Adminusergroup()->load(["usergroup_id" => "usergroup_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminusergroupEntity`

Create a new `AdminusergroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminuserssessionEntity

```php
$adminuserssession = $client->Adminuserssession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Adminuserssession()->create([
  "user_id" => null, // string
  "ok" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminuserssessionEntity`

Create a new `AdminuserssessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiEntity

```php
$api = $client->Api();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Api()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiEntity`

Create a new `ApiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppEntity

```php
$app = $client->App();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->App()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppEntity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppseventauthorizationEntity

```php
$appseventauthorization = $client->Appseventauthorization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Appseventauthorization()->load(["event_context" => "event_context"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppseventauthorizationEntity`

Create a new `AppseventauthorizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppspermissionEntity

```php
$appspermission = $client->Appspermission();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `array` | Yes |  |
| `channel` | `array` | Yes |  |
| `group` | `array` | Yes |  |
| `im` | `array` | Yes |  |
| `mpim` | `array` | Yes |  |
| `ok` | `bool` | Yes |  |
| `team` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Appspermission()->load(["scope" => "scope", "token" => "token", "trigger_id" => "trigger_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppspermissionEntity`

Create a new `AppspermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppspermissionsresourceEntity

```php
$appspermissionsresource = $client->Appspermissionsresource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Appspermissionsresource()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppspermissionsresourceEntity`

Create a new `AppspermissionsresourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppspermissionsscopeEntity

```php
$appspermissionsscope = $client->Appspermissionsscope();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `array` | No |  |
| `channel` | `array` | No |  |
| `group` | `array` | No |  |
| `im` | `array` | No |  |
| `mpim` | `array` | No |  |
| `team` | `array` | No |  |
| `user` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Appspermissionsscope()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppspermissionsscopeEntity`

Create a new `AppspermissionsscopeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppspermissionsuserEntity

```php
$appspermissionsuser = $client->Appspermissionsuser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Appspermissionsuser()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppspermissionsuserEntity`

Create a new `AppspermissionsuserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthEntity

```php
$auth = $client->Auth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bot_id` | `string` | No |  |
| `is_enterprise_install` | `bool` | No |  |
| `ok` | `bool` | Yes |  |
| `revoked` | `bool` | Yes |  |
| `team` | `string` | Yes |  |
| `team_id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Auth()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthEntity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BotEntity

```php
$bot = $client->Bot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `icons` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `updated` | `int` | Yes |  |
| `user_id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Bot()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BotEntity`

Create a new `BotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallEntity

```php
$call = $client->Call();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Call()->create([
  "external_unique_id" => null, // string
  "join_url" => null, // mixed
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Call()->load(["id" => "call_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallEntity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallsparticipantEntity

```php
$callsparticipant = $client->Callsparticipant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Callsparticipant()->create([
  "id" => null, // string
  "user" => null, // mixed
  "ok" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallsparticipantEntity`

Create a new `CallsparticipantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatEntity

```php
$chat = $client->Chat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `array` | No |  |
| `blocks` | `array` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `array` | Yes |  |
| `channel` | `string` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `array` | Yes |  |
| `display_as_bot` | `bool` | No |  |
| `file` | `array` | No |  |
| `files` | `array` | No |  |
| `icons` | `array` | No |  |
| `inviter` | `string` | No |  |
| `is_delayed_message` | `bool` | No |  |
| `is_intro` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `last_read` | `string` | No |  |
| `latest_reply` | `string` | No |  |
| `message_ts` | `string` | Yes |  |
| `name` | `string` | No |  |
| `ok` | `bool` | Yes |  |
| `old_name` | `string` | No |  |
| `parent_user_id` | `string` | No |  |
| `permalink` | `string` | Yes |  |
| `pinned_to` | `array` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `array` | No |  |
| `reply_count` | `int` | No |  |
| `reply_users` | `array` | No |  |
| `reply_users_count` | `int` | No |  |
| `source_team` | `string` | No |  |
| `subscribed` | `bool` | No |  |
| `subtype` | `string` | No |  |
| `team` | `string` | No |  |
| `text` | `string` | Yes |  |
| `thread_ts` | `string` | No |  |
| `topic` | `string` | No |  |
| `ts` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `unread_count` | `int` | No |  |
| `upload` | `bool` | No |  |
| `user` | `string` | No |  |
| `user_profile` | `array` | Yes |  |
| `user_team` | `string` | No |  |
| `username` | `string` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `attachments` | - | - |
| `blocks` | - | - |
| `bot_id` | - | Yes |
| `bot_profile` | - | - |
| `channel` | - | Yes |
| `client_msg_id` | - | - |
| `comment` | - | - |
| `display_as_bot` | - | - |
| `file` | - | - |
| `files` | - | - |
| `icons` | - | - |
| `inviter` | - | - |
| `is_delayed_message` | - | - |
| `is_intro` | - | - |
| `is_starred` | - | - |
| `last_read` | - | - |
| `latest_reply` | - | - |
| `message_ts` | - | - |
| `name` | - | - |
| `ok` | - | - |
| `old_name` | - | - |
| `parent_user_id` | - | - |
| `permalink` | - | Yes |
| `pinned_to` | - | - |
| `purpose` | - | - |
| `reactions` | - | - |
| `reply_count` | - | - |
| `reply_users` | - | - |
| `reply_users_count` | - | - |
| `source_team` | - | - |
| `subscribed` | - | - |
| `subtype` | - | - |
| `team` | - | Yes |
| `text` | - | - |
| `thread_ts` | - | - |
| `topic` | - | - |
| `ts` | - | Yes |
| `type` | - | - |
| `unread_count` | - | - |
| `upload` | - | - |
| `user` | - | Yes |
| `user_profile` | - | - |
| `user_team` | - | - |
| `username` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Chat()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Chat()->load(["channel" => "channel", "message_t" => "message_t", "token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatEntity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatscheduledMessageEntity

```php
$chatscheduled_message = $client->ChatscheduledMessage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel_id` | `string` | Yes |  |
| `date_created` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `post_at` | `int` | Yes |  |
| `text` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ChatscheduledMessage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatscheduledMessageEntity`

Create a new `ChatscheduledMessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationEntity

```php
$conversation = $client->Conversation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_closed` | `bool` | No |  |
| `already_open` | `bool` | No |  |
| `attachments` | `array` | No |  |
| `blocks` | `array` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `array` | Yes |  |
| `channel` | `mixed` | Yes |  |
| `channels` | `array` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `array` | Yes |  |
| `display_as_bot` | `bool` | No |  |
| `file` | `array` | No |  |
| `files` | `array` | No |  |
| `has_more` | `bool` | No |  |
| `icons` | `array` | No |  |
| `inviter` | `string` | No |  |
| `is_delayed_message` | `bool` | No |  |
| `is_intro` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `last_read` | `string` | No |  |
| `latest_reply` | `string` | No |  |
| `members` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | No |  |
| `no_op` | `bool` | No |  |
| `not_in_channel` | `bool` | No |  |
| `ok` | `bool` | Yes |  |
| `old_name` | `string` | No |  |
| `parent_user_id` | `string` | No |  |
| `permalink` | `string` | No |  |
| `pinned_to` | `array` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `array` | No |  |
| `reply_count` | `int` | No |  |
| `reply_users` | `array` | No |  |
| `reply_users_count` | `int` | No |  |
| `response_metadata` | `array` | No |  |
| `source_team` | `string` | No |  |
| `subscribed` | `bool` | No |  |
| `subtype` | `string` | No |  |
| `team` | `string` | No |  |
| `text` | `string` | Yes |  |
| `thread_ts` | `string` | No |  |
| `topic` | `string` | No |  |
| `ts` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `unread_count` | `int` | No |  |
| `upload` | `bool` | No |  |
| `user` | `string` | No |  |
| `user_profile` | `array` | Yes |  |
| `user_team` | `string` | No |  |
| `username` | `string` | No |  |
| `warning` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `already_closed` | - | - | - |
| `already_open` | - | - | - |
| `attachments` | - | - | - |
| `blocks` | - | - | - |
| `bot_id` | - | - | - |
| `bot_profile` | - | - | - |
| `channel` | - | - | - |
| `channels` | - | - | - |
| `client_msg_id` | - | - | - |
| `comment` | - | - | - |
| `display_as_bot` | - | - | - |
| `file` | - | - | - |
| `files` | - | - | - |
| `has_more` | - | - | - |
| `icons` | - | - | - |
| `inviter` | - | - | - |
| `is_delayed_message` | - | - | - |
| `is_intro` | - | - | - |
| `is_starred` | - | - | - |
| `last_read` | - | - | - |
| `latest_reply` | - | - | - |
| `members` | - | - | - |
| `messages` | - | - | - |
| `name` | - | - | - |
| `no_op` | - | - | - |
| `not_in_channel` | - | - | - |
| `ok` | - | - | - |
| `old_name` | - | - | - |
| `parent_user_id` | - | - | - |
| `permalink` | - | - | - |
| `pinned_to` | - | - | - |
| `purpose` | - | - | - |
| `reactions` | - | - | - |
| `reply_count` | - | - | - |
| `reply_users` | - | - | - |
| `reply_users_count` | - | - | - |
| `response_metadata` | - | Yes | - |
| `source_team` | - | - | - |
| `subscribed` | - | - | - |
| `subtype` | - | - | - |
| `team` | - | - | - |
| `text` | - | - | - |
| `thread_ts` | - | - | - |
| `topic` | - | - | - |
| `ts` | - | - | - |
| `type` | - | - | - |
| `unread_count` | - | - | - |
| `upload` | - | - | - |
| `user` | - | - | - |
| `user_profile` | - | - | - |
| `user_team` | - | - | - |
| `username` | - | - | - |
| `warning` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Conversation()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Conversation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Conversation()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationEntity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DialogEntity

```php
$dialog = $client->Dialog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dialog()->load(["dialog" => "dialog", "trigger_id" => "trigger_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DialogEntity`

Create a new `DialogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DndEntity

```php
$dnd = $client->Dnd();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dnd_enabled` | `bool` | Yes |  |
| `next_dnd_end_ts` | `int` | Yes |  |
| `next_dnd_start_ts` | `int` | Yes |  |
| `ok` | `bool` | Yes |  |
| `snooze_enabled` | `bool` | No |  |
| `snooze_endtime` | `int` | No |  |
| `snooze_remaining` | `int` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `dnd_enabled` | - | - |
| `next_dnd_end_ts` | - | - |
| `next_dnd_start_ts` | - | - |
| `ok` | - | - |
| `snooze_enabled` | - | Yes |
| `snooze_endtime` | - | Yes |
| `snooze_remaining` | - | Yes |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dnd()->create([
  "num_minute" => null, // int
  "token" => null, // string
  "dnd_enabled" => null, // bool
  "next_dnd_end_ts" => null, // int
  "next_dnd_start_ts" => null, // int
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dnd()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DndEntity`

Create a new `DndEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmojiEntity

```php
$emoji = $client->Emoji();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Emoji()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmojiEntity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `array` | No |  |
| `comments` | `array` | Yes |  |
| `comments_count` | `int` | No |  |
| `content_html` | `null` | No |  |
| `created` | `int` | No |  |
| `date_delete` | `int` | No |  |
| `display_as_bot` | `bool` | No |  |
| `editable` | `bool` | No |  |
| `editor` | `string` | No |  |
| `external_id` | `string` | No |  |
| `external_type` | `string` | No |  |
| `external_url` | `string` | No |  |
| `file` | `array` | Yes |  |
| `filetype` | `string` | No |  |
| `groups` | `array` | No |  |
| `has_rich_preview` | `bool` | No |  |
| `id` | `string` | No |  |
| `image_exif_rotation` | `int` | No |  |
| `ims` | `array` | No |  |
| `is_external` | `bool` | No |  |
| `is_public` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `is_tombstoned` | `bool` | No |  |
| `last_editor` | `string` | No |  |
| `mimetype` | `string` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | No |  |
| `non_owner_editable` | `bool` | No |  |
| `num_stars` | `int` | No |  |
| `ok` | `bool` | Yes |  |
| `original_h` | `int` | No |  |
| `original_w` | `int` | No |  |
| `paging` | `array` | Yes |  |
| `permalink` | `string` | No |  |
| `permalink_public` | `string` | No |  |
| `pinned_info` | `array` | No |  |
| `pinned_to` | `array` | No |  |
| `pretty_type` | `string` | No |  |
| `preview` | `string` | No |  |
| `public_url_shared` | `bool` | No |  |
| `reactions` | `array` | No |  |
| `response_metadata` | `mixed` | No |  |
| `shares` | `array` | No |  |
| `size` | `int` | No |  |
| `source_team` | `string` | No |  |
| `state` | `string` | No |  |
| `thumb_1024` | `string` | No |  |
| `thumb_1024_h` | `int` | No |  |
| `thumb_1024_w` | `int` | No |  |
| `thumb_160` | `string` | No |  |
| `thumb_360` | `string` | No |  |
| `thumb_360_h` | `int` | No |  |
| `thumb_360_w` | `int` | No |  |
| `thumb_480` | `string` | No |  |
| `thumb_480_h` | `int` | No |  |
| `thumb_480_w` | `int` | No |  |
| `thumb_64` | `string` | No |  |
| `thumb_720` | `string` | No |  |
| `thumb_720_h` | `int` | No |  |
| `thumb_720_w` | `int` | No |  |
| `thumb_80` | `string` | No |  |
| `thumb_800` | `string` | No |  |
| `thumb_800_h` | `int` | No |  |
| `thumb_800_w` | `int` | No |  |
| `thumb_960` | `string` | No |  |
| `thumb_960_h` | `int` | No |  |
| `thumb_960_w` | `int` | No |  |
| `thumb_tiny` | `string` | No |  |
| `timestamp` | `int` | No |  |
| `title` | `string` | No |  |
| `updated` | `int` | No |  |
| `url_private` | `string` | No |  |
| `url_private_download` | `string` | No |  |
| `user` | `string` | No |  |
| `user_team` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->File()->create([
  "comments" => null, // array
  "ok" => null, // bool
  "paging" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->File()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FilescommentEntity

```php
$filescomment = $client->Filescomment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Filescomment()->create([
  "ok" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FilescommentEntity`

Create a new `FilescommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FilesremoteEntity

```php
$filesremote = $client->Filesremote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Filesremote()->create([
  "ok" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Filesremote()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FilesremoteEntity`

Create a new `FilesremoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MigrationEntity

```php
$migration = $client->Migration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise_id` | `string` | Yes |  |
| `invalid_user_ids` | `array` | No |  |
| `ok` | `bool` | Yes |  |
| `team_id` | `string` | Yes |  |
| `user_id_map` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Migration()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MigrationEntity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OauthEntity

```php
$oauth = $client->Oauth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Oauth()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OauthEntity`

Create a new `OauthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Oauthv2Entity

```php
$oauthv2 = $client->Oauthv2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Oauthv2()->load(["code" => "code"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Oauthv2Entity`

Create a new `Oauthv2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PinEntity

```php
$pin = $client->Pin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `array` | No |  |
| `ok` | `bool` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `items` | - | - |
| `ok` | - | Yes |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Pin()->create([
  "channel" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Pin()->load(["channel" => "channel", "token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PinEntity`

Create a new `PinEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReactionEntity

```php
$reaction = $client->Reaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `array` | No |  |
| `items` | `array` | Yes |  |
| `ok` | `bool` | No |  |
| `paging` | `array` | Yes |  |
| `response_metadata` | `mixed` | No |  |
| `type` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `file` | - | - | - |
| `items` | - | - | - |
| `ok` | - | Yes | Yes |
| `paging` | - | - | - |
| `response_metadata` | - | - | - |
| `type` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Reaction()->create([
  "name" => null, // string
  "items" => null, // array
  "paging" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Reaction()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Reaction()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReactionEntity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReminderEntity

```php
$reminder = $client->Reminder();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `complete_ts` | `int` | No |  |
| `creator` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ok` | `bool` | Yes |  |
| `recurring` | `bool` | Yes |  |
| `text` | `string` | Yes |  |
| `time` | `int` | No |  |
| `user` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Reminder()->create([
  "text" => null, // mixed
  "time" => null, // mixed
  "creator" => null, // string
  "id" => null, // string
  "ok" => null, // bool
  "recurring" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Reminder()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Reminder()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReminderEntity`

Create a new `ReminderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RtmEntity

```php
$rtm = $client->Rtm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |
| `self` | `array` | Yes |  |
| `team` | `array` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rtm()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RtmEntity`

Create a new `RtmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Search()->load(["query" => "query", "token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StarEntity

```php
$star = $client->Star();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `array` | Yes |  |
| `ok` | `bool` | Yes |  |
| `paging` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Star()->create([
  "items" => null, // array
  "ok" => null, // bool
  "paging" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Star()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StarEntity`

Create a new `StarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_app_id` | `string` | No |  |
| `app_id` | `string` | Yes |  |
| `app_type` | `string` | Yes |  |
| `archived` | `bool` | No |  |
| `avatar_base_url` | `string` | No |  |
| `change_type` | `string` | Yes |  |
| `channel` | `string` | No |  |
| `count` | `int` | Yes |  |
| `country` | `mixed` | Yes |  |
| `created` | `int` | No |  |
| `date` | `string` | Yes |  |
| `date_create` | `int` | No |  |
| `date_first` | `int` | Yes |  |
| `date_last` | `int` | Yes |  |
| `deleted` | `bool` | No |  |
| `description` | `mixed` | No |  |
| `discoverable` | `mixed` | No |  |
| `domain` | `string` | Yes |  |
| `email_domain` | `string` | Yes |  |
| `enterprise_id` | `string` | No |  |
| `enterprise_name` | `string` | No |  |
| `external_org_migrations` | `array` | Yes |  |
| `has_compliance_export` | `bool` | No |  |
| `icon` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `ip` | `mixed` | Yes |  |
| `is_assigned` | `bool` | No |  |
| `is_enterprise` | `int` | No |  |
| `is_over_storage_limit` | `bool` | No |  |
| `isp` | `mixed` | Yes |  |
| `limit_ts` | `int` | No |  |
| `locale` | `string` | No |  |
| `messages_count` | `int` | No |  |
| `msg_edit_window_mins` | `int` | No |  |
| `name` | `string` | Yes |  |
| `ok` | `bool` | Yes |  |
| `over_integrations_limit` | `bool` | No |  |
| `over_storage_limit` | `bool` | No |  |
| `pay_prod_cur` | `string` | No |  |
| `plan` | `string` | No |  |
| `primary_owner` | `array` | Yes |  |
| `region` | `mixed` | Yes |  |
| `scope` | `string` | Yes |  |
| `service_id` | `string` | No |  |
| `service_type` | `string` | No |  |
| `sso_provider` | `array` | No |  |
| `user_agent` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamprofileEntity

```php
$teamprofile = $client->Teamprofile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Teamprofile()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamprofileEntity`

Create a new `TeamprofileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_away` | `bool` | No |  |
| `avatar_hash` | `string` | Yes |  |
| `cache_ts` | `int` | Yes |  |
| `channels` | `array` | Yes |  |
| `connection_count` | `int` | No |  |
| `image_1024` | `string` | Yes |  |
| `image_192` | `string` | Yes |  |
| `image_24` | `string` | Yes |  |
| `image_32` | `string` | Yes |  |
| `image_48` | `string` | Yes |  |
| `image_512` | `string` | Yes |  |
| `image_72` | `string` | Yes |  |
| `image_original` | `string` | Yes |  |
| `last_activity` | `int` | No |  |
| `manual_away` | `bool` | No |  |
| `members` | `array` | Yes |  |
| `ok` | `bool` | Yes |  |
| `online` | `bool` | No |  |
| `presence` | `string` | Yes |  |
| `response_metadata` | `array` | Yes |  |
| `team` | `array` | No |  |
| `user` | `mixed` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `auto_away` | - | - | - |
| `avatar_hash` | - | - | - |
| `cache_ts` | - | - | - |
| `channels` | - | - | - |
| `connection_count` | - | - | - |
| `image_1024` | - | - | - |
| `image_192` | - | - | - |
| `image_24` | - | - | - |
| `image_32` | - | - | - |
| `image_48` | - | - | - |
| `image_512` | - | - | - |
| `image_72` | - | - | - |
| `image_original` | - | - | - |
| `last_activity` | - | - | - |
| `manual_away` | - | - | - |
| `members` | - | - | - |
| `ok` | Yes | - | - |
| `online` | - | - | - |
| `presence` | - | - | - |
| `response_metadata` | - | Yes | - |
| `team` | - | - | - |
| `user` | Yes | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->User()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsergroupEntity

```php
$usergroup = $client->Usergroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `bool` | Yes |  |
| `auto_type` | `mixed` | Yes |  |
| `channel_count` | `int` | No |  |
| `created_by` | `string` | Yes |  |
| `date_create` | `int` | Yes |  |
| `date_delete` | `int` | Yes |  |
| `date_update` | `int` | Yes |  |
| `deleted_by` | `mixed` | Yes |  |
| `description` | `string` | Yes |  |
| `enterprise_subteam_id` | `string` | Yes |  |
| `handle` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_external` | `bool` | Yes |  |
| `is_subteam` | `bool` | Yes |  |
| `is_usergroup` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `prefs` | `array` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `int` | No |  |
| `users` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Usergroup()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Usergroup()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsergroupEntity`

Create a new `UsergroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsergroupsuserEntity

```php
$usergroupsuser = $client->Usergroupsuser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `bool` | Yes |  |
| `auto_type` | `mixed` | Yes |  |
| `channel_count` | `int` | No |  |
| `created_by` | `string` | Yes |  |
| `date_create` | `int` | Yes |  |
| `date_delete` | `int` | Yes |  |
| `date_update` | `int` | Yes |  |
| `deleted_by` | `mixed` | Yes |  |
| `description` | `string` | Yes |  |
| `enterprise_subteam_id` | `string` | Yes |  |
| `handle` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_external` | `bool` | Yes |  |
| `is_subteam` | `bool` | Yes |  |
| `is_usergroup` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `ok` | `bool` | Yes |  |
| `prefs` | `array` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `int` | No |  |
| `users` | `array` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `auto_provision` | - | - |
| `auto_type` | - | - |
| `channel_count` | - | - |
| `created_by` | - | - |
| `date_create` | - | - |
| `date_delete` | - | - |
| `date_update` | - | - |
| `deleted_by` | - | - |
| `description` | - | - |
| `enterprise_subteam_id` | - | - |
| `handle` | - | - |
| `id` | - | - |
| `is_external` | - | - |
| `is_subteam` | - | - |
| `is_usergroup` | - | - |
| `name` | - | - |
| `ok` | - | - |
| `prefs` | - | - |
| `team_id` | - | - |
| `updated_by` | - | - |
| `user_count` | - | - |
| `users` | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Usergroupsuser()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Usergroupsuser()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsergroupsuserEntity`

Create a new `UsergroupsuserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsersprofileEntity

```php
$usersprofile = $client->Usersprofile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `always_active` | `bool` | No |  |
| `api_app_id` | `string` | No |  |
| `avatar_hash` | `string` | Yes |  |
| `bot_id` | `string` | No |  |
| `display_name` | `string` | Yes |  |
| `display_name_normalized` | `string` | Yes |  |
| `email` | `mixed` | No |  |
| `fields` | `mixed` | Yes |  |
| `first_name` | `mixed` | No |  |
| `guest_expiration_ts` | `mixed` | No |  |
| `guest_invited_by` | `mixed` | No |  |
| `image_1024` | `mixed` | No |  |
| `image_192` | `mixed` | No |  |
| `image_24` | `mixed` | No |  |
| `image_32` | `mixed` | No |  |
| `image_48` | `mixed` | No |  |
| `image_512` | `mixed` | No |  |
| `image_72` | `mixed` | No |  |
| `image_original` | `mixed` | No |  |
| `is_app_user` | `bool` | No |  |
| `is_custom_image` | `bool` | No |  |
| `is_restricted` | `mixed` | No |  |
| `is_ultra_restricted` | `mixed` | No |  |
| `last_avatar_image_hash` | `string` | No |  |
| `last_name` | `mixed` | No |  |
| `memberships_count` | `int` | No |  |
| `name` | `mixed` | No |  |
| `phone` | `string` | Yes |  |
| `pronouns` | `string` | No |  |
| `real_name` | `string` | Yes |  |
| `real_name_normalized` | `string` | Yes |  |
| `skype` | `string` | Yes |  |
| `status_default_emoji` | `string` | No |  |
| `status_default_text` | `string` | No |  |
| `status_default_text_canonical` | `mixed` | No |  |
| `status_emoji` | `string` | Yes |  |
| `status_expiration` | `int` | No |  |
| `status_text` | `string` | Yes |  |
| `status_text_canonical` | `mixed` | No |  |
| `team` | `string` | No |  |
| `title` | `string` | Yes |  |
| `updated` | `int` | No |  |
| `user_id` | `string` | No |  |
| `username` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Usersprofile()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Usersprofile()->load(["token" => "token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsersprofileEntity`

Create a new `UsersprofileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ViewEntity

```php
$view = $client->View();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->View()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ViewEntity`

Create a new `ViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["workflow_step_edit_id" => "workflow_step_edit_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new SlackSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

