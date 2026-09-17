# Slack Lua SDK Reference

Complete API reference for the Slack Lua SDK.


## SlackSDK

### Constructor

```lua
local sdk = require("slack_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Adminapp(data)`

Create a new `Adminapp` entity instance. Pass `nil` for no initial data.

#### `Adminappsapproved(data)`

Create a new `Adminappsapproved` entity instance. Pass `nil` for no initial data.

#### `Adminappsrequest(data)`

Create a new `Adminappsrequest` entity instance. Pass `nil` for no initial data.

#### `Adminappsrestricted(data)`

Create a new `Adminappsrestricted` entity instance. Pass `nil` for no initial data.

#### `Adminconversation(data)`

Create a new `Adminconversation` entity instance. Pass `nil` for no initial data.

#### `Adminconversationsekm(data)`

Create a new `Adminconversationsekm` entity instance. Pass `nil` for no initial data.

#### `AdminconversationsrestrictAccess(data)`

Create a new `AdminconversationsrestrictAccess` entity instance. Pass `nil` for no initial data.

#### `Adminemoji(data)`

Create a new `Adminemoji` entity instance. Pass `nil` for no initial data.

#### `AdmininviteRequest(data)`

Create a new `AdmininviteRequest` entity instance. Pass `nil` for no initial data.

#### `AdmininviteRequestsapproved(data)`

Create a new `AdmininviteRequestsapproved` entity instance. Pass `nil` for no initial data.

#### `AdmininviteRequestsdenied(data)`

Create a new `AdmininviteRequestsdenied` entity instance. Pass `nil` for no initial data.

#### `Adminteam(data)`

Create a new `Adminteam` entity instance. Pass `nil` for no initial data.

#### `Adminteamsadmin(data)`

Create a new `Adminteamsadmin` entity instance. Pass `nil` for no initial data.

#### `Adminteamsowner(data)`

Create a new `Adminteamsowner` entity instance. Pass `nil` for no initial data.

#### `Adminteamssetting(data)`

Create a new `Adminteamssetting` entity instance. Pass `nil` for no initial data.

#### `Adminuser(data)`

Create a new `Adminuser` entity instance. Pass `nil` for no initial data.

#### `Adminusergroup(data)`

Create a new `Adminusergroup` entity instance. Pass `nil` for no initial data.

#### `Adminuserssession(data)`

Create a new `Adminuserssession` entity instance. Pass `nil` for no initial data.

#### `Api(data)`

Create a new `Api` entity instance. Pass `nil` for no initial data.

#### `App(data)`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Appseventauthorization(data)`

Create a new `Appseventauthorization` entity instance. Pass `nil` for no initial data.

#### `Appspermission(data)`

Create a new `Appspermission` entity instance. Pass `nil` for no initial data.

#### `Appspermissionsresource(data)`

Create a new `Appspermissionsresource` entity instance. Pass `nil` for no initial data.

#### `Appspermissionsscope(data)`

Create a new `Appspermissionsscope` entity instance. Pass `nil` for no initial data.

#### `Appspermissionsuser(data)`

Create a new `Appspermissionsuser` entity instance. Pass `nil` for no initial data.

#### `Auth(data)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Bot(data)`

Create a new `Bot` entity instance. Pass `nil` for no initial data.

#### `Call(data)`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Callsparticipant(data)`

Create a new `Callsparticipant` entity instance. Pass `nil` for no initial data.

#### `Chat(data)`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `ChatscheduledMessage(data)`

Create a new `ChatscheduledMessage` entity instance. Pass `nil` for no initial data.

#### `Conversation(data)`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `Dialog(data)`

Create a new `Dialog` entity instance. Pass `nil` for no initial data.

#### `Dnd(data)`

Create a new `Dnd` entity instance. Pass `nil` for no initial data.

#### `Emoji(data)`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Filescomment(data)`

Create a new `Filescomment` entity instance. Pass `nil` for no initial data.

#### `Filesremote(data)`

Create a new `Filesremote` entity instance. Pass `nil` for no initial data.

#### `Migration(data)`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Oauth(data)`

Create a new `Oauth` entity instance. Pass `nil` for no initial data.

#### `Oauthv2(data)`

Create a new `Oauthv2` entity instance. Pass `nil` for no initial data.

#### `Pin(data)`

Create a new `Pin` entity instance. Pass `nil` for no initial data.

#### `Reaction(data)`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Reminder(data)`

Create a new `Reminder` entity instance. Pass `nil` for no initial data.

#### `Rtm(data)`

Create a new `Rtm` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Star(data)`

Create a new `Star` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `Teamprofile(data)`

Create a new `Teamprofile` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Usergroup(data)`

Create a new `Usergroup` entity instance. Pass `nil` for no initial data.

#### `Usergroupsuser(data)`

Create a new `Usergroupsuser` entity instance. Pass `nil` for no initial data.

#### `Usersprofile(data)`

Create a new `Usersprofile` entity instance. Pass `nil` for no initial data.

#### `View(data)`

Create a new `View` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AdminappEntity

```lua
local adminapp = client:Adminapp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminapp():create({
  ok = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminappsapprovedEntity

```lua
local adminappsapproved = client:Adminappsapproved(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminappsapproved():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappsapprovedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminappsrequestEntity

```lua
local adminappsrequest = client:Adminappsrequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminappsrequest():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappsrequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminappsrestrictedEntity

```lua
local adminappsrestricted = client:Adminappsrestricted(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminappsrestricted():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappsrestrictedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminconversationEntity

```lua
local adminconversation = client:Adminconversation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted_user` | `string` | No |  |
| `can_thread` | `table` | No |  |
| `channel_id` | `string` | No |  |
| `created` | `number` | Yes |  |
| `creator` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_archived` | `boolean` | No |  |
| `is_channel` | `boolean` | Yes |  |
| `is_frozen` | `boolean` | No |  |
| `is_general` | `boolean` | No |  |
| `is_member` | `boolean` | No |  |
| `is_moved` | `number` | No |  |
| `is_mpim` | `boolean` | Yes |  |
| `is_non_threadable` | `boolean` | No |  |
| `is_org_shared` | `boolean` | Yes |  |
| `is_pending_ext_shared` | `boolean` | No |  |
| `is_private` | `boolean` | Yes |  |
| `is_read_only` | `boolean` | No |  |
| `is_shared` | `boolean` | Yes |  |
| `is_thread_only` | `boolean` | No |  |
| `last_read` | `string` | No |  |
| `latest` | `any` | No |  |
| `members` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `num_members` | `number` | No |  |
| `ok` | `boolean` | Yes |  |
| `pending_shared` | `table` | No |  |
| `previous_names` | `table` | No |  |
| `priority` | `number` | No |  |
| `purpose` | `table` | Yes |  |
| `response_metadata` | `table` | Yes |  |
| `team_ids` | `table` | Yes |  |
| `topic` | `table` | Yes |  |
| `unlinked` | `number` | No |  |
| `unread_count` | `number` | No |  |
| `unread_count_display` | `number` | No |  |
| `who_can_post` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminconversation():create({
  is_private = --[[ boolean ]],
  name = --[[ string ]],
  created = --[[ number ]],
  creator = --[[ string ]],
  id = --[[ string ]],
  is_channel = --[[ boolean ]],
  is_mpim = --[[ boolean ]],
  is_org_shared = --[[ boolean ]],
  is_shared = --[[ boolean ]],
  members = --[[ table ]],
  name_normalized = --[[ string ]],
  ok = --[[ boolean ]],
  purpose = --[[ table ]],
  response_metadata = --[[ table ]],
  team_ids = --[[ table ]],
  topic = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Adminconversation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminconversation():load({ channel_id = "channel_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminconversationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminconversationsekmEntity

```lua
local adminconversationsekm = client:Adminconversationsekm(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminconversationsekm():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminconversationsekmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminconversationsrestrictAccessEntity

```lua
local adminconversationsrestrict_access = client:AdminconversationsrestrictAccess(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AdminconversationsrestrictAccess():create({
  channel_id = --[[ string ]],
  group_id = --[[ string ]],
  token = --[[ string ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AdminconversationsrestrictAccess():load({ channel_id = "channel_id", token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminconversationsrestrictAccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminemojiEntity

```lua
local adminemoji = client:Adminemoji(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminemoji():create({
  name = --[[ string ]],
  token = --[[ string ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminemoji():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminemojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdmininviteRequestEntity

```lua
local admininvite_request = client:AdmininviteRequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AdmininviteRequest():create({
  invite_request_id = --[[ string ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AdmininviteRequest():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdmininviteRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdmininviteRequestsapprovedEntity

```lua
local admininvite_requestsapproved = client:AdmininviteRequestsapproved(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AdmininviteRequestsapproved():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdmininviteRequestsapprovedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdmininviteRequestsdeniedEntity

```lua
local admininvite_requestsdenied = client:AdmininviteRequestsdenied(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AdmininviteRequestsdenied():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdmininviteRequestsdeniedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminteamEntity

```lua
local adminteam = client:Adminteam(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminteam():create({
  team_domain = --[[ any ]],
  team_name = --[[ any ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminteam():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminteamsadminEntity

```lua
local adminteamsadmin = client:Adminteamsadmin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminteamsadmin():load({ team_id = "team_id", token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamsadminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminteamsownerEntity

```lua
local adminteamsowner = client:Adminteamsowner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminteamsowner():load({ team_id = "team_id", token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamsownerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminteamssettingEntity

```lua
local adminteamssetting = client:Adminteamssetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminteamssetting():create({
  team_id = --[[ string ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminteamssetting():load({ team_id = "team_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamssettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminuserEntity

```lua
local adminuser = client:Adminuser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminuser():create({
  team_id = --[[ string ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminuser():load({ team_id = "team_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminuserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminusergroupEntity

```lua
local adminusergroup = client:Adminusergroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminusergroup():create({
  usergroup_id = --[[ string ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Adminusergroup():load({ usergroup_id = "usergroup_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminusergroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminuserssessionEntity

```lua
local adminuserssession = client:Adminuserssession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Adminuserssession():create({
  user_id = --[[ string ]],
  ok = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminuserssessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiEntity

```lua
local api = client:Api(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Api():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppEntity

```lua
local app = client:App(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:App():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppseventauthorizationEntity

```lua
local appseventauthorization = client:Appseventauthorization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Appseventauthorization():load({ event_context = "event_context" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppseventauthorizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppspermissionEntity

```lua
local appspermission = client:Appspermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `table` | Yes |  |
| `channel` | `table` | Yes |  |
| `group` | `table` | Yes |  |
| `im` | `table` | Yes |  |
| `mpim` | `table` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `team` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Appspermission():load({ scope = "scope", token = "token", trigger_id = "trigger_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppspermissionsresourceEntity

```lua
local appspermissionsresource = client:Appspermissionsresource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Appspermissionsresource():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionsresourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppspermissionsscopeEntity

```lua
local appspermissionsscope = client:Appspermissionsscope(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `table` | No |  |
| `channel` | `table` | No |  |
| `group` | `table` | No |  |
| `im` | `table` | No |  |
| `mpim` | `table` | No |  |
| `team` | `table` | No |  |
| `user` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Appspermissionsscope():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionsscopeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppspermissionsuserEntity

```lua
local appspermissionsuser = client:Appspermissionsuser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Appspermissionsuser():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionsuserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthEntity

```lua
local auth = client:Auth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bot_id` | `string` | No |  |
| `is_enterprise_install` | `boolean` | No |  |
| `ok` | `boolean` | Yes |  |
| `revoked` | `boolean` | Yes |  |
| `team` | `string` | Yes |  |
| `team_id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Auth():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BotEntity

```lua
local bot = client:Bot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | Yes |  |
| `deleted` | `boolean` | Yes |  |
| `icons` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `updated` | `number` | Yes |  |
| `user_id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Bot():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallEntity

```lua
local call = client:Call(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Call():create({
  external_unique_id = --[[ string ]],
  join_url = --[[ any ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Call():load({ id = "call_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallsparticipantEntity

```lua
local callsparticipant = client:Callsparticipant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Callsparticipant():create({
  id = --[[ string ]],
  user = --[[ any ]],
  ok = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallsparticipantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatEntity

```lua
local chat = client:Chat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `table` | No |  |
| `blocks` | `table` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `table` | Yes |  |
| `channel` | `string` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `table` | Yes |  |
| `display_as_bot` | `boolean` | No |  |
| `file` | `table` | No |  |
| `files` | `table` | No |  |
| `icons` | `table` | No |  |
| `inviter` | `string` | No |  |
| `is_delayed_message` | `boolean` | No |  |
| `is_intro` | `boolean` | No |  |
| `is_starred` | `boolean` | No |  |
| `last_read` | `string` | No |  |
| `latest_reply` | `string` | No |  |
| `message_ts` | `string` | Yes |  |
| `name` | `string` | No |  |
| `ok` | `boolean` | Yes |  |
| `old_name` | `string` | No |  |
| `parent_user_id` | `string` | No |  |
| `permalink` | `string` | Yes |  |
| `pinned_to` | `table` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `table` | No |  |
| `reply_count` | `number` | No |  |
| `reply_users` | `table` | No |  |
| `reply_users_count` | `number` | No |  |
| `source_team` | `string` | No |  |
| `subscribed` | `boolean` | No |  |
| `subtype` | `string` | No |  |
| `team` | `string` | No |  |
| `text` | `string` | Yes |  |
| `thread_ts` | `string` | No |  |
| `topic` | `string` | No |  |
| `ts` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `unread_count` | `number` | No |  |
| `upload` | `boolean` | No |  |
| `user` | `string` | No |  |
| `user_profile` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Chat():create({
  channel = --[[ any ]],
  bot_profile = --[[ table ]],
  comment = --[[ table ]],
  message_ts = --[[ string ]],
  ok = --[[ boolean ]],
  permalink = --[[ string ]],
  ts = --[[ string ]],
  type = --[[ string ]],
  user_profile = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Chat():load({ channel = "channel", message_t = "message_t", token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatscheduledMessageEntity

```lua
local chatscheduled_message = client:ChatscheduledMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel_id` | `string` | Yes |  |
| `date_created` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `post_at` | `number` | Yes |  |
| `text` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ChatscheduledMessage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatscheduledMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationEntity

```lua
local conversation = client:Conversation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_closed` | `boolean` | No |  |
| `already_open` | `boolean` | No |  |
| `attachments` | `table` | No |  |
| `blocks` | `table` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `table` | Yes |  |
| `channel` | `any` | Yes |  |
| `channels` | `table` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `table` | Yes |  |
| `display_as_bot` | `boolean` | No |  |
| `file` | `table` | No |  |
| `files` | `table` | No |  |
| `has_more` | `boolean` | No |  |
| `icons` | `table` | No |  |
| `inviter` | `string` | No |  |
| `is_delayed_message` | `boolean` | No |  |
| `is_intro` | `boolean` | No |  |
| `is_starred` | `boolean` | No |  |
| `last_read` | `string` | No |  |
| `latest_reply` | `string` | No |  |
| `members` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | No |  |
| `no_op` | `boolean` | No |  |
| `not_in_channel` | `boolean` | No |  |
| `ok` | `boolean` | Yes |  |
| `old_name` | `string` | No |  |
| `parent_user_id` | `string` | No |  |
| `permalink` | `string` | No |  |
| `pinned_to` | `table` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `table` | No |  |
| `reply_count` | `number` | No |  |
| `reply_users` | `table` | No |  |
| `reply_users_count` | `number` | No |  |
| `response_metadata` | `table` | No |  |
| `source_team` | `string` | No |  |
| `subscribed` | `boolean` | No |  |
| `subtype` | `string` | No |  |
| `team` | `string` | No |  |
| `text` | `string` | Yes |  |
| `thread_ts` | `string` | No |  |
| `topic` | `string` | No |  |
| `ts` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `unread_count` | `number` | No |  |
| `upload` | `boolean` | No |  |
| `user` | `string` | No |  |
| `user_profile` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Conversation():create({
  bot_profile = --[[ table ]],
  channels = --[[ table ]],
  comment = --[[ table ]],
  members = --[[ table ]],
  messages = --[[ table ]],
  ok = --[[ boolean ]],
  text = --[[ string ]],
  ts = --[[ string ]],
  type = --[[ string ]],
  user_profile = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Conversation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Conversation():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DialogEntity

```lua
local dialog = client:Dialog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dialog():load({ dialog = "dialog", trigger_id = "trigger_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DialogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DndEntity

```lua
local dnd = client:Dnd(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dnd_enabled` | `boolean` | Yes |  |
| `next_dnd_end_ts` | `number` | Yes |  |
| `next_dnd_start_ts` | `number` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `snooze_enabled` | `boolean` | No |  |
| `snooze_endtime` | `number` | No |  |
| `snooze_remaining` | `number` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dnd():create({
  num_minute = --[[ number ]],
  token = --[[ string ]],
  dnd_enabled = --[[ boolean ]],
  next_dnd_end_ts = --[[ number ]],
  next_dnd_start_ts = --[[ number ]],
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dnd():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DndEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmojiEntity

```lua
local emoji = client:Emoji(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Emoji():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `table` | No |  |
| `comments` | `table` | Yes |  |
| `comments_count` | `number` | No |  |
| `content_html` | `nil` | No |  |
| `created` | `number` | No |  |
| `date_delete` | `number` | No |  |
| `display_as_bot` | `boolean` | No |  |
| `editable` | `boolean` | No |  |
| `editor` | `string` | No |  |
| `external_id` | `string` | No |  |
| `external_type` | `string` | No |  |
| `external_url` | `string` | No |  |
| `file` | `table` | Yes |  |
| `filetype` | `string` | No |  |
| `groups` | `table` | No |  |
| `has_rich_preview` | `boolean` | No |  |
| `id` | `string` | No |  |
| `image_exif_rotation` | `number` | No |  |
| `ims` | `table` | No |  |
| `is_external` | `boolean` | No |  |
| `is_public` | `boolean` | No |  |
| `is_starred` | `boolean` | No |  |
| `is_tombstoned` | `boolean` | No |  |
| `last_editor` | `string` | No |  |
| `mimetype` | `string` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | No |  |
| `non_owner_editable` | `boolean` | No |  |
| `num_stars` | `number` | No |  |
| `ok` | `boolean` | Yes |  |
| `original_h` | `number` | No |  |
| `original_w` | `number` | No |  |
| `paging` | `table` | Yes |  |
| `permalink` | `string` | No |  |
| `permalink_public` | `string` | No |  |
| `pinned_info` | `table` | No |  |
| `pinned_to` | `table` | No |  |
| `pretty_type` | `string` | No |  |
| `preview` | `string` | No |  |
| `public_url_shared` | `boolean` | No |  |
| `reactions` | `table` | No |  |
| `response_metadata` | `any` | No |  |
| `shares` | `table` | No |  |
| `size` | `number` | No |  |
| `source_team` | `string` | No |  |
| `state` | `string` | No |  |
| `thumb_1024` | `string` | No |  |
| `thumb_1024_h` | `number` | No |  |
| `thumb_1024_w` | `number` | No |  |
| `thumb_160` | `string` | No |  |
| `thumb_360` | `string` | No |  |
| `thumb_360_h` | `number` | No |  |
| `thumb_360_w` | `number` | No |  |
| `thumb_480` | `string` | No |  |
| `thumb_480_h` | `number` | No |  |
| `thumb_480_w` | `number` | No |  |
| `thumb_64` | `string` | No |  |
| `thumb_720` | `string` | No |  |
| `thumb_720_h` | `number` | No |  |
| `thumb_720_w` | `number` | No |  |
| `thumb_80` | `string` | No |  |
| `thumb_800` | `string` | No |  |
| `thumb_800_h` | `number` | No |  |
| `thumb_800_w` | `number` | No |  |
| `thumb_960` | `string` | No |  |
| `thumb_960_h` | `number` | No |  |
| `thumb_960_w` | `number` | No |  |
| `thumb_tiny` | `string` | No |  |
| `timestamp` | `number` | No |  |
| `title` | `string` | No |  |
| `updated` | `number` | No |  |
| `url_private` | `string` | No |  |
| `url_private_download` | `string` | No |  |
| `user` | `string` | No |  |
| `user_team` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:File():create({
  comments = --[[ table ]],
  ok = --[[ boolean ]],
  paging = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:File():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FilescommentEntity

```lua
local filescomment = client:Filescomment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Filescomment():create({
  ok = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FilescommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FilesremoteEntity

```lua
local filesremote = client:Filesremote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Filesremote():create({
  ok = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Filesremote():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FilesremoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MigrationEntity

```lua
local migration = client:Migration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise_id` | `string` | Yes |  |
| `invalid_user_ids` | `table` | No |  |
| `ok` | `boolean` | Yes |  |
| `team_id` | `string` | Yes |  |
| `user_id_map` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Migration():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OauthEntity

```lua
local oauth = client:Oauth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Oauth():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OauthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Oauthv2Entity

```lua
local oauthv2 = client:Oauthv2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Oauthv2():load({ code = "code" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Oauthv2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PinEntity

```lua
local pin = client:Pin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `table` | No |  |
| `ok` | `boolean` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `items` | - | - |
| `ok` | - | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Pin():create({
  channel = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Pin():load({ channel = "channel", token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PinEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReactionEntity

```lua
local reaction = client:Reaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `table` | No |  |
| `items` | `table` | Yes |  |
| `ok` | `boolean` | No |  |
| `paging` | `table` | Yes |  |
| `response_metadata` | `any` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Reaction():create({
  name = --[[ string ]],
  items = --[[ table ]],
  paging = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Reaction():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Reaction():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReminderEntity

```lua
local reminder = client:Reminder(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `complete_ts` | `number` | No |  |
| `creator` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `recurring` | `boolean` | Yes |  |
| `text` | `string` | Yes |  |
| `time` | `number` | No |  |
| `user` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Reminder():create({
  text = --[[ any ]],
  time = --[[ any ]],
  creator = --[[ string ]],
  id = --[[ string ]],
  ok = --[[ boolean ]],
  recurring = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Reminder():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Reminder():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReminderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RtmEntity

```lua
local rtm = client:Rtm(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |
| `self` | `table` | Yes |  |
| `team` | `table` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rtm():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RtmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Search():load({ query = "query", token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StarEntity

```lua
local star = client:Star(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `table` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `paging` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Star():create({
  items = --[[ table ]],
  ok = --[[ boolean ]],
  paging = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Star():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_app_id` | `string` | No |  |
| `app_id` | `string` | Yes |  |
| `app_type` | `string` | Yes |  |
| `archived` | `boolean` | No |  |
| `avatar_base_url` | `string` | No |  |
| `change_type` | `string` | Yes |  |
| `channel` | `string` | No |  |
| `count` | `number` | Yes |  |
| `country` | `string|nil` | Yes |  |
| `created` | `number` | No |  |
| `date` | `string` | Yes |  |
| `date_create` | `number` | No |  |
| `date_first` | `number` | Yes |  |
| `date_last` | `number` | Yes |  |
| `deleted` | `boolean` | No |  |
| `description` | `nil|string` | No |  |
| `discoverable` | `any` | No |  |
| `domain` | `string` | Yes |  |
| `email_domain` | `string` | Yes |  |
| `enterprise_id` | `string` | No |  |
| `enterprise_name` | `string` | No |  |
| `external_org_migrations` | `table` | Yes |  |
| `has_compliance_export` | `boolean` | No |  |
| `icon` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `ip` | `string|nil` | Yes |  |
| `is_assigned` | `boolean` | No |  |
| `is_enterprise` | `number` | No |  |
| `is_over_storage_limit` | `boolean` | No |  |
| `isp` | `string|nil` | Yes |  |
| `limit_ts` | `number` | No |  |
| `locale` | `string` | No |  |
| `messages_count` | `number` | No |  |
| `msg_edit_window_mins` | `number` | No |  |
| `name` | `string` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `over_integrations_limit` | `boolean` | No |  |
| `over_storage_limit` | `boolean` | No |  |
| `pay_prod_cur` | `string` | No |  |
| `plan` | `string` | No |  |
| `primary_owner` | `table` | Yes |  |
| `region` | `string|nil` | Yes |  |
| `scope` | `string` | Yes |  |
| `service_id` | `string` | No |  |
| `service_type` | `string` | No |  |
| `sso_provider` | `table` | No |  |
| `user_agent` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Team():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamprofileEntity

```lua
local teamprofile = client:Teamprofile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Teamprofile():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamprofileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_away` | `boolean` | No |  |
| `avatar_hash` | `string` | Yes |  |
| `cache_ts` | `number` | Yes |  |
| `channels` | `table` | Yes |  |
| `connection_count` | `number` | No |  |
| `image_1024` | `string` | Yes |  |
| `image_192` | `string` | Yes |  |
| `image_24` | `string` | Yes |  |
| `image_32` | `string` | Yes |  |
| `image_48` | `string` | Yes |  |
| `image_512` | `string` | Yes |  |
| `image_72` | `string` | Yes |  |
| `image_original` | `string` | Yes |  |
| `last_activity` | `number` | No |  |
| `manual_away` | `boolean` | No |  |
| `members` | `table` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `online` | `boolean` | No |  |
| `presence` | `string` | Yes |  |
| `response_metadata` | `table` | Yes |  |
| `team` | `table` | No |  |
| `user` | `any` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:User():create({
  token = --[[ string ]],
  avatar_hash = --[[ string ]],
  cache_ts = --[[ number ]],
  channels = --[[ table ]],
  image_1024 = --[[ string ]],
  image_192 = --[[ string ]],
  image_24 = --[[ string ]],
  image_32 = --[[ string ]],
  image_48 = --[[ string ]],
  image_512 = --[[ string ]],
  image_72 = --[[ string ]],
  image_original = --[[ string ]],
  members = --[[ table ]],
  ok = --[[ boolean ]],
  presence = --[[ string ]],
  response_metadata = --[[ table ]],
  user = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsergroupEntity

```lua
local usergroup = client:Usergroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `boolean` | Yes |  |
| `auto_type` | `any` | Yes |  |
| `channel_count` | `number` | No |  |
| `created_by` | `string` | Yes |  |
| `date_create` | `number` | Yes |  |
| `date_delete` | `number` | Yes |  |
| `date_update` | `number` | Yes |  |
| `deleted_by` | `any` | Yes |  |
| `description` | `string` | Yes |  |
| `enterprise_subteam_id` | `string` | Yes |  |
| `handle` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_external` | `boolean` | Yes |  |
| `is_subteam` | `boolean` | Yes |  |
| `is_usergroup` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `prefs` | `table` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `number` | No |  |
| `users` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Usergroup():create({
  usergroup = --[[ any ]],
  auto_provision = --[[ boolean ]],
  auto_type = --[[ any ]],
  created_by = --[[ string ]],
  date_create = --[[ number ]],
  date_delete = --[[ number ]],
  date_update = --[[ number ]],
  deleted_by = --[[ any ]],
  enterprise_subteam_id = --[[ string ]],
  id = --[[ string ]],
  is_external = --[[ boolean ]],
  is_subteam = --[[ boolean ]],
  is_usergroup = --[[ boolean ]],
  prefs = --[[ table ]],
  team_id = --[[ string ]],
  updated_by = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Usergroup():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsergroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsergroupsuserEntity

```lua
local usergroupsuser = client:Usergroupsuser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `boolean` | Yes |  |
| `auto_type` | `any` | Yes |  |
| `channel_count` | `number` | No |  |
| `created_by` | `string` | Yes |  |
| `date_create` | `number` | Yes |  |
| `date_delete` | `number` | Yes |  |
| `date_update` | `number` | Yes |  |
| `deleted_by` | `any` | Yes |  |
| `description` | `string` | Yes |  |
| `enterprise_subteam_id` | `string` | Yes |  |
| `handle` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_external` | `boolean` | Yes |  |
| `is_subteam` | `boolean` | Yes |  |
| `is_usergroup` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `prefs` | `table` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `number` | No |  |
| `users` | `table` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Usergroupsuser():create({
  user = --[[ any ]],
  usergroup = --[[ any ]],
  auto_provision = --[[ boolean ]],
  auto_type = --[[ any ]],
  created_by = --[[ string ]],
  date_create = --[[ number ]],
  date_delete = --[[ number ]],
  date_update = --[[ number ]],
  deleted_by = --[[ any ]],
  description = --[[ string ]],
  enterprise_subteam_id = --[[ string ]],
  handle = --[[ string ]],
  id = --[[ string ]],
  is_external = --[[ boolean ]],
  is_subteam = --[[ boolean ]],
  is_usergroup = --[[ boolean ]],
  name = --[[ string ]],
  ok = --[[ boolean ]],
  prefs = --[[ table ]],
  team_id = --[[ string ]],
  updated_by = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Usergroupsuser():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsergroupsuserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsersprofileEntity

```lua
local usersprofile = client:Usersprofile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `always_active` | `boolean` | No |  |
| `api_app_id` | `string` | No |  |
| `avatar_hash` | `string` | Yes |  |
| `bot_id` | `string` | No |  |
| `display_name` | `string` | Yes |  |
| `display_name_normalized` | `string` | Yes |  |
| `email` | `nil|string` | No |  |
| `fields` | `table|nil` | Yes |  |
| `first_name` | `nil|string` | No |  |
| `guest_expiration_ts` | `nil|number` | No |  |
| `guest_invited_by` | `nil|string` | No |  |
| `image_1024` | `nil|string` | No |  |
| `image_192` | `nil|string` | No |  |
| `image_24` | `nil|string` | No |  |
| `image_32` | `nil|string` | No |  |
| `image_48` | `nil|string` | No |  |
| `image_512` | `nil|string` | No |  |
| `image_72` | `nil|string` | No |  |
| `image_original` | `nil|string` | No |  |
| `is_app_user` | `boolean` | No |  |
| `is_custom_image` | `boolean` | No |  |
| `is_restricted` | `nil|boolean` | No |  |
| `is_ultra_restricted` | `nil|boolean` | No |  |
| `last_avatar_image_hash` | `string` | No |  |
| `last_name` | `nil|string` | No |  |
| `memberships_count` | `number` | No |  |
| `name` | `nil|string` | No |  |
| `phone` | `string` | Yes |  |
| `pronouns` | `string` | No |  |
| `real_name` | `string` | Yes |  |
| `real_name_normalized` | `string` | Yes |  |
| `skype` | `string` | Yes |  |
| `status_default_emoji` | `string` | No |  |
| `status_default_text` | `string` | No |  |
| `status_default_text_canonical` | `nil|string` | No |  |
| `status_emoji` | `string` | Yes |  |
| `status_expiration` | `number` | No |  |
| `status_text` | `string` | Yes |  |
| `status_text_canonical` | `nil|string` | No |  |
| `team` | `string` | No |  |
| `title` | `string` | Yes |  |
| `updated` | `number` | No |  |
| `user_id` | `string` | No |  |
| `username` | `nil|string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Usersprofile():create({
  avatar_hash = --[[ string ]],
  display_name = --[[ string ]],
  display_name_normalized = --[[ string ]],
  fields = --[[ table|nil ]],
  phone = --[[ string ]],
  real_name = --[[ string ]],
  real_name_normalized = --[[ string ]],
  skype = --[[ string ]],
  status_emoji = --[[ string ]],
  status_text = --[[ string ]],
  title = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Usersprofile():load({ token = "token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersprofileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ViewEntity

```lua
local view = client:View(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:View():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ workflow_step_edit_id = "workflow_step_edit_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
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

