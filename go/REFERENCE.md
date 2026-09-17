# Slack Golang SDK Reference

Complete API reference for the Slack Golang SDK.


## SlackSDK

### Constructor

```go
func NewSlackSDK(options map[string]any) *SlackSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *SlackSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *SlackSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Adminapp(data map[string]any) SlackEntity`

Create a new `Adminapp` entity instance. Pass `nil` for no initial data.

#### `Adminappsapproved(data map[string]any) SlackEntity`

Create a new `Adminappsapproved` entity instance. Pass `nil` for no initial data.

#### `Adminappsrequest(data map[string]any) SlackEntity`

Create a new `Adminappsrequest` entity instance. Pass `nil` for no initial data.

#### `Adminappsrestricted(data map[string]any) SlackEntity`

Create a new `Adminappsrestricted` entity instance. Pass `nil` for no initial data.

#### `Adminconversation(data map[string]any) SlackEntity`

Create a new `Adminconversation` entity instance. Pass `nil` for no initial data.

#### `Adminconversationsekm(data map[string]any) SlackEntity`

Create a new `Adminconversationsekm` entity instance. Pass `nil` for no initial data.

#### `AdminconversationsrestrictAccess(data map[string]any) SlackEntity`

Create a new `AdminconversationsrestrictAccess` entity instance. Pass `nil` for no initial data.

#### `Adminemoji(data map[string]any) SlackEntity`

Create a new `Adminemoji` entity instance. Pass `nil` for no initial data.

#### `AdmininviteRequest(data map[string]any) SlackEntity`

Create a new `AdmininviteRequest` entity instance. Pass `nil` for no initial data.

#### `AdmininviteRequestsapproved(data map[string]any) SlackEntity`

Create a new `AdmininviteRequestsapproved` entity instance. Pass `nil` for no initial data.

#### `AdmininviteRequestsdenied(data map[string]any) SlackEntity`

Create a new `AdmininviteRequestsdenied` entity instance. Pass `nil` for no initial data.

#### `Adminteam(data map[string]any) SlackEntity`

Create a new `Adminteam` entity instance. Pass `nil` for no initial data.

#### `Adminteamsadmin(data map[string]any) SlackEntity`

Create a new `Adminteamsadmin` entity instance. Pass `nil` for no initial data.

#### `Adminteamsowner(data map[string]any) SlackEntity`

Create a new `Adminteamsowner` entity instance. Pass `nil` for no initial data.

#### `Adminteamssetting(data map[string]any) SlackEntity`

Create a new `Adminteamssetting` entity instance. Pass `nil` for no initial data.

#### `Adminuser(data map[string]any) SlackEntity`

Create a new `Adminuser` entity instance. Pass `nil` for no initial data.

#### `Adminusergroup(data map[string]any) SlackEntity`

Create a new `Adminusergroup` entity instance. Pass `nil` for no initial data.

#### `Adminuserssession(data map[string]any) SlackEntity`

Create a new `Adminuserssession` entity instance. Pass `nil` for no initial data.

#### `Api(data map[string]any) SlackEntity`

Create a new `Api` entity instance. Pass `nil` for no initial data.

#### `App(data map[string]any) SlackEntity`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Appseventauthorization(data map[string]any) SlackEntity`

Create a new `Appseventauthorization` entity instance. Pass `nil` for no initial data.

#### `Appspermission(data map[string]any) SlackEntity`

Create a new `Appspermission` entity instance. Pass `nil` for no initial data.

#### `Appspermissionsresource(data map[string]any) SlackEntity`

Create a new `Appspermissionsresource` entity instance. Pass `nil` for no initial data.

#### `Appspermissionsscope(data map[string]any) SlackEntity`

Create a new `Appspermissionsscope` entity instance. Pass `nil` for no initial data.

#### `Appspermissionsuser(data map[string]any) SlackEntity`

Create a new `Appspermissionsuser` entity instance. Pass `nil` for no initial data.

#### `Auth(data map[string]any) SlackEntity`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `Bot(data map[string]any) SlackEntity`

Create a new `Bot` entity instance. Pass `nil` for no initial data.

#### `Call(data map[string]any) SlackEntity`

Create a new `Call` entity instance. Pass `nil` for no initial data.

#### `Callsparticipant(data map[string]any) SlackEntity`

Create a new `Callsparticipant` entity instance. Pass `nil` for no initial data.

#### `Chat(data map[string]any) SlackEntity`

Create a new `Chat` entity instance. Pass `nil` for no initial data.

#### `ChatscheduledMessage(data map[string]any) SlackEntity`

Create a new `ChatscheduledMessage` entity instance. Pass `nil` for no initial data.

#### `Conversation(data map[string]any) SlackEntity`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `Dialog(data map[string]any) SlackEntity`

Create a new `Dialog` entity instance. Pass `nil` for no initial data.

#### `Dnd(data map[string]any) SlackEntity`

Create a new `Dnd` entity instance. Pass `nil` for no initial data.

#### `Emoji(data map[string]any) SlackEntity`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `File(data map[string]any) SlackEntity`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Filescomment(data map[string]any) SlackEntity`

Create a new `Filescomment` entity instance. Pass `nil` for no initial data.

#### `Filesremote(data map[string]any) SlackEntity`

Create a new `Filesremote` entity instance. Pass `nil` for no initial data.

#### `Migration(data map[string]any) SlackEntity`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Oauth(data map[string]any) SlackEntity`

Create a new `Oauth` entity instance. Pass `nil` for no initial data.

#### `Oauthv2(data map[string]any) SlackEntity`

Create a new `Oauthv2` entity instance. Pass `nil` for no initial data.

#### `Pin(data map[string]any) SlackEntity`

Create a new `Pin` entity instance. Pass `nil` for no initial data.

#### `Reaction(data map[string]any) SlackEntity`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Reminder(data map[string]any) SlackEntity`

Create a new `Reminder` entity instance. Pass `nil` for no initial data.

#### `Rtm(data map[string]any) SlackEntity`

Create a new `Rtm` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) SlackEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Star(data map[string]any) SlackEntity`

Create a new `Star` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) SlackEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `Teamprofile(data map[string]any) SlackEntity`

Create a new `Teamprofile` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) SlackEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Usergroup(data map[string]any) SlackEntity`

Create a new `Usergroup` entity instance. Pass `nil` for no initial data.

#### `Usergroupsuser(data map[string]any) SlackEntity`

Create a new `Usergroupsuser` entity instance. Pass `nil` for no initial data.

#### `Usersprofile(data map[string]any) SlackEntity`

Create a new `Usersprofile` entity instance. Pass `nil` for no initial data.

#### `View(data map[string]any) SlackEntity`

Create a new `View` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) SlackEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AdminappEntity

```go
adminapp := client.Adminapp(nil)
fmt.Println(adminapp.GetName()) // "adminapp"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminapp(nil).Create(map[string]any{
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminappEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminappsapprovedEntity

```go
adminappsapproved := client.Adminappsapproved(nil)
fmt.Println(adminappsapproved.GetName()) // "adminappsapproved"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminappsapproved(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminappsapprovedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminappsrequestEntity

```go
adminappsrequest := client.Adminappsrequest(nil)
fmt.Println(adminappsrequest.GetName()) // "adminappsrequest"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminappsrequest(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminappsrequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminappsrestrictedEntity

```go
adminappsrestricted := client.Adminappsrestricted(nil)
fmt.Println(adminappsrestricted.GetName()) // "adminappsrestricted"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminappsrestricted(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminappsrestrictedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminconversationEntity

```go
adminconversation := client.Adminconversation(nil)
fmt.Println(adminconversation.GetName()) // "adminconversation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted_user` | `string` | No |  |
| `can_thread` | `map[string]any` | No |  |
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
| `latest` | `any` | No |  |
| `members` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `num_members` | `int` | No |  |
| `ok` | `bool` | Yes |  |
| `pending_shared` | `[]any` | No |  |
| `previous_names` | `[]any` | No |  |
| `priority` | `float64` | No |  |
| `purpose` | `map[string]any` | Yes |  |
| `response_metadata` | `map[string]any` | Yes |  |
| `team_ids` | `[]any` | Yes |  |
| `topic` | `map[string]any` | Yes |  |
| `unlinked` | `int` | No |  |
| `unread_count` | `int` | No |  |
| `unread_count_display` | `int` | No |  |
| `who_can_post` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Adminconversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminconversation(nil).Load(map[string]any{"channel_id": "channel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminconversation(nil).Create(map[string]any{
    "is_private": true,
    "name": "example_name",
    "created": 1,
    "creator": "example_creator",
    "id": "example_id",
    "is_channel": true,
    "is_mpim": true,
    "is_org_shared": true,
    "is_shared": true,
    "members": []any{},
    "name_normalized": "example_name_normalized",
    "ok": true,
    "purpose": map[string]any{},
    "response_metadata": map[string]any{},
    "team_ids": []any{},
    "topic": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminconversationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminconversationsekmEntity

```go
adminconversationsekm := client.Adminconversationsekm(nil)
fmt.Println(adminconversationsekm.GetName()) // "adminconversationsekm"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminconversationsekm(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminconversationsekmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminconversationsrestrictAccessEntity

```go
adminconversationsrestrictAccess := client.AdminconversationsrestrictAccess(nil)
fmt.Println(adminconversationsrestrictAccess.GetName()) // "adminconversationsrestrict_access"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AdminconversationsrestrictAccess(nil).Load(map[string]any{"channel_id": "channel_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AdminconversationsrestrictAccess(nil).Create(map[string]any{
    "channel_id": "example_channel_id",
    "group_id": "example_group_id",
    "token": "example_token",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminconversationsrestrictAccessEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminemojiEntity

```go
adminemoji := client.Adminemoji(nil)
fmt.Println(adminemoji.GetName()) // "adminemoji"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminemoji(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminemoji(nil).Create(map[string]any{
    "name": "example_name",
    "token": "example_token",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminemojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdmininviteRequestEntity

```go
admininviteRequest := client.AdmininviteRequest(nil)
fmt.Println(admininviteRequest.GetName()) // "admininvite_request"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AdmininviteRequest(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AdmininviteRequest(nil).Create(map[string]any{
    "invite_request_id": "example_invite_request_id",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdmininviteRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdmininviteRequestsapprovedEntity

```go
admininviteRequestsapproved := client.AdmininviteRequestsapproved(nil)
fmt.Println(admininviteRequestsapproved.GetName()) // "admininvite_requestsapproved"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AdmininviteRequestsapproved(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdmininviteRequestsapprovedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdmininviteRequestsdeniedEntity

```go
admininviteRequestsdenied := client.AdmininviteRequestsdenied(nil)
fmt.Println(admininviteRequestsdenied.GetName()) // "admininvite_requestsdenied"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AdmininviteRequestsdenied(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdmininviteRequestsdeniedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminteamEntity

```go
adminteam := client.Adminteam(nil)
fmt.Println(adminteam.GetName()) // "adminteam"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminteam(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminteam(nil).Create(map[string]any{
    "team_domain": "example_team_domain",
    "team_name": "example_team_name",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminteamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminteamsadminEntity

```go
adminteamsadmin := client.Adminteamsadmin(nil)
fmt.Println(adminteamsadmin.GetName()) // "adminteamsadmin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminteamsadmin(nil).Load(map[string]any{"team_id": "team_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminteamsadminEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminteamsownerEntity

```go
adminteamsowner := client.Adminteamsowner(nil)
fmt.Println(adminteamsowner.GetName()) // "adminteamsowner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminteamsowner(nil).Load(map[string]any{"team_id": "team_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminteamsownerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminteamssettingEntity

```go
adminteamssetting := client.Adminteamssetting(nil)
fmt.Println(adminteamssetting.GetName()) // "adminteamssetting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminteamssetting(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminteamssetting(nil).Create(map[string]any{
    "team_id": "example_team_id",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminteamssettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminuserEntity

```go
adminuser := client.Adminuser(nil)
fmt.Println(adminuser.GetName()) // "adminuser"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminuser(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminuser(nil).Create(map[string]any{
    "team_id": "example_team_id",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminuserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminusergroupEntity

```go
adminusergroup := client.Adminusergroup(nil)
fmt.Println(adminusergroup.GetName()) // "adminusergroup"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Adminusergroup(nil).Load(map[string]any{"usergroup_id": "usergroup_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminusergroup(nil).Create(map[string]any{
    "usergroup_id": "example_usergroup_id",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminusergroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminuserssessionEntity

```go
adminuserssession := client.Adminuserssession(nil)
fmt.Println(adminuserssession.GetName()) // "adminuserssession"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Adminuserssession(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminuserssessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiEntity

```go
api := client.Api(nil)
fmt.Println(api.GetName()) // "api"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Api(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppEntity

```go
app := client.App(nil)
fmt.Println(app.GetName()) // "app"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.App(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppseventauthorizationEntity

```go
appseventauthorization := client.Appseventauthorization(nil)
fmt.Println(appseventauthorization.GetName()) // "appseventauthorization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Appseventauthorization(nil).Load(map[string]any{"event_context": "event_context"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppseventauthorizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppspermissionEntity

```go
appspermission := client.Appspermission(nil)
fmt.Println(appspermission.GetName()) // "appspermission"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `map[string]any` | Yes |  |
| `channel` | `map[string]any` | Yes |  |
| `group` | `map[string]any` | Yes |  |
| `im` | `map[string]any` | Yes |  |
| `mpim` | `map[string]any` | Yes |  |
| `ok` | `bool` | Yes |  |
| `team` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Appspermission(nil).Load(map[string]any{"scope": "scope", "token": "token", "trigger_id": "trigger_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppspermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppspermissionsresourceEntity

```go
appspermissionsresource := client.Appspermissionsresource(nil)
fmt.Println(appspermissionsresource.GetName()) // "appspermissionsresource"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Appspermissionsresource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppspermissionsresourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppspermissionsscopeEntity

```go
appspermissionsscope := client.Appspermissionsscope(nil)
fmt.Println(appspermissionsscope.GetName()) // "appspermissionsscope"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `[]any` | No |  |
| `channel` | `[]any` | No |  |
| `group` | `[]any` | No |  |
| `im` | `[]any` | No |  |
| `mpim` | `[]any` | No |  |
| `team` | `[]any` | No |  |
| `user` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Appspermissionsscope(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppspermissionsscopeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppspermissionsuserEntity

```go
appspermissionsuser := client.Appspermissionsuser(nil)
fmt.Println(appspermissionsuser.GetName()) // "appspermissionsuser"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Appspermissionsuser(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppspermissionsuserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthEntity

```go
auth := client.Auth(nil)
fmt.Println(auth.GetName()) // "auth"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Auth(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BotEntity

```go
bot := client.Bot(nil)
fmt.Println(bot.GetName()) // "bot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `icons` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `updated` | `int` | Yes |  |
| `user_id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Bot(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CallEntity

```go
call := client.Call(nil)
fmt.Println(call.GetName()) // "call"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Call(nil).Load(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Call(nil).Create(map[string]any{
    "external_unique_id": "example_external_unique_id",
    "join_url": "example_join_url",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CallsparticipantEntity

```go
callsparticipant := client.Callsparticipant(nil)
fmt.Println(callsparticipant.GetName()) // "callsparticipant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Callsparticipant(nil).Create(map[string]any{
    "id": "example_id",
    "user": "example_user",
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallsparticipantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChatEntity

```go
chat := client.Chat(nil)
fmt.Println(chat.GetName()) // "chat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `[]any` | No |  |
| `blocks` | `[]any` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `map[string]any` | Yes |  |
| `channel` | `string` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `map[string]any` | Yes |  |
| `display_as_bot` | `bool` | No |  |
| `file` | `map[string]any` | No |  |
| `files` | `[]any` | No |  |
| `icons` | `map[string]any` | No |  |
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
| `pinned_to` | `[]any` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `[]any` | No |  |
| `reply_count` | `int` | No |  |
| `reply_users` | `[]any` | No |  |
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
| `user_profile` | `map[string]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Chat(nil).Load(map[string]any{"channel": "channel", "message_t": "message_t", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Chat(nil).Create(map[string]any{
    "channel": "example_channel",
    "bot_profile": map[string]any{},
    "comment": map[string]any{},
    "message_ts": "example_message_ts",
    "ok": true,
    "permalink": "example_permalink",
    "ts": "example_ts",
    "type": "example_type",
    "user_profile": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChatscheduledMessageEntity

```go
chatscheduledMessage := client.ChatscheduledMessage(nil)
fmt.Println(chatscheduledMessage.GetName()) // "chatscheduled_message"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ChatscheduledMessage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatscheduledMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConversationEntity

```go
conversation := client.Conversation(nil)
fmt.Println(conversation.GetName()) // "conversation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_closed` | `bool` | No |  |
| `already_open` | `bool` | No |  |
| `attachments` | `[]any` | No |  |
| `blocks` | `[]any` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `map[string]any` | Yes |  |
| `channel` | `any` | Yes |  |
| `channels` | `[]any` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `map[string]any` | Yes |  |
| `display_as_bot` | `bool` | No |  |
| `file` | `map[string]any` | No |  |
| `files` | `[]any` | No |  |
| `has_more` | `bool` | No |  |
| `icons` | `map[string]any` | No |  |
| `inviter` | `string` | No |  |
| `is_delayed_message` | `bool` | No |  |
| `is_intro` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `last_read` | `string` | No |  |
| `latest_reply` | `string` | No |  |
| `members` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | No |  |
| `no_op` | `bool` | No |  |
| `not_in_channel` | `bool` | No |  |
| `ok` | `bool` | Yes |  |
| `old_name` | `string` | No |  |
| `parent_user_id` | `string` | No |  |
| `permalink` | `string` | No |  |
| `pinned_to` | `[]any` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `[]any` | No |  |
| `reply_count` | `int` | No |  |
| `reply_users` | `[]any` | No |  |
| `reply_users_count` | `int` | No |  |
| `response_metadata` | `map[string]any` | No |  |
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
| `user_profile` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Conversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Conversation(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Conversation(nil).Create(map[string]any{
    "bot_profile": map[string]any{},
    "channels": []any{},
    "comment": map[string]any{},
    "members": []any{},
    "messages": []any{},
    "ok": true,
    "text": "example_text",
    "ts": "example_ts",
    "type": "example_type",
    "user_profile": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DialogEntity

```go
dialog := client.Dialog(nil)
fmt.Println(dialog.GetName()) // "dialog"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dialog(nil).Load(map[string]any{"dialog": "dialog", "trigger_id": "trigger_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DialogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DndEntity

```go
dnd := client.Dnd(nil)
fmt.Println(dnd.GetName()) // "dnd"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dnd(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Dnd(nil).Create(map[string]any{
    "num_minute": 1,
    "token": "example_token",
    "dnd_enabled": true,
    "next_dnd_end_ts": 1,
    "next_dnd_start_ts": 1,
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DndEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmojiEntity

```go
emoji := client.Emoji(nil)
fmt.Println(emoji.GetName()) // "emoji"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Emoji(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileEntity

```go
file := client.File(nil)
fmt.Println(file.GetName()) // "file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `[]any` | No |  |
| `comments` | `[]any` | Yes |  |
| `comments_count` | `int` | No |  |
| `content_html` | `any` | No |  |
| `created` | `int` | No |  |
| `date_delete` | `int` | No |  |
| `display_as_bot` | `bool` | No |  |
| `editable` | `bool` | No |  |
| `editor` | `string` | No |  |
| `external_id` | `string` | No |  |
| `external_type` | `string` | No |  |
| `external_url` | `string` | No |  |
| `file` | `map[string]any` | Yes |  |
| `filetype` | `string` | No |  |
| `groups` | `[]any` | No |  |
| `has_rich_preview` | `bool` | No |  |
| `id` | `string` | No |  |
| `image_exif_rotation` | `int` | No |  |
| `ims` | `[]any` | No |  |
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
| `paging` | `map[string]any` | Yes |  |
| `permalink` | `string` | No |  |
| `permalink_public` | `string` | No |  |
| `pinned_info` | `map[string]any` | No |  |
| `pinned_to` | `[]any` | No |  |
| `pretty_type` | `string` | No |  |
| `preview` | `string` | No |  |
| `public_url_shared` | `bool` | No |  |
| `reactions` | `[]any` | No |  |
| `response_metadata` | `any` | No |  |
| `shares` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.File(nil).Create(map[string]any{
    "comments": []any{},
    "ok": true,
    "paging": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FilescommentEntity

```go
filescomment := client.Filescomment(nil)
fmt.Println(filescomment.GetName()) // "filescomment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Filescomment(nil).Create(map[string]any{
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FilescommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FilesremoteEntity

```go
filesremote := client.Filesremote(nil)
fmt.Println(filesremote.GetName()) // "filesremote"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Filesremote(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Filesremote(nil).Create(map[string]any{
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FilesremoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MigrationEntity

```go
migration := client.Migration(nil)
fmt.Println(migration.GetName()) // "migration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise_id` | `string` | Yes |  |
| `invalid_user_ids` | `[]any` | No |  |
| `ok` | `bool` | Yes |  |
| `team_id` | `string` | Yes |  |
| `user_id_map` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Migration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OauthEntity

```go
oauth := client.Oauth(nil)
fmt.Println(oauth.GetName()) // "oauth"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Oauth(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OauthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Oauthv2Entity

```go
oauthv2 := client.Oauthv2(nil)
fmt.Println(oauthv2.GetName()) // "oauthv2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Oauthv2(nil).Load(map[string]any{"code": "code"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `Oauthv2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PinEntity

```go
pin := client.Pin(nil)
fmt.Println(pin.GetName()) // "pin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `[]any` | No |  |
| `ok` | `bool` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `items` | - | - |
| `ok` | - | Yes |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Pin(nil).Load(map[string]any{"channel": "channel", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Pin(nil).Create(map[string]any{
    "channel": "example_channel",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PinEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReactionEntity

```go
reaction := client.Reaction(nil)
fmt.Println(reaction.GetName()) // "reaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `map[string]any` | No |  |
| `items` | `[]any` | Yes |  |
| `ok` | `bool` | No |  |
| `paging` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Reaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Reaction(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Reaction(nil).Create(map[string]any{
    "name": "example_name",
    "items": []any{},
    "paging": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReminderEntity

```go
reminder := client.Reminder(nil)
fmt.Println(reminder.GetName()) // "reminder"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Reminder(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Reminder(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Reminder(nil).Create(map[string]any{
    "text": "example_text",
    "time": "example_time",
    "creator": "example_creator",
    "id": "example_id",
    "ok": true,
    "recurring": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReminderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RtmEntity

```go
rtm := client.Rtm(nil)
fmt.Println(rtm.GetName()) // "rtm"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |
| `self` | `map[string]any` | Yes |  |
| `team` | `map[string]any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rtm(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RtmEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Search(nil).Load(map[string]any{"query": "query", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StarEntity

```go
star := client.Star(nil)
fmt.Println(star.GetName()) // "star"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `[]any` | Yes |  |
| `ok` | `bool` | Yes |  |
| `paging` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Star(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Star(nil).Create(map[string]any{
    "items": []any{},
    "ok": true,
    "paging": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
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
| `country` | `any` | Yes |  |
| `created` | `int` | No |  |
| `date` | `string` | Yes |  |
| `date_create` | `int` | No |  |
| `date_first` | `int` | Yes |  |
| `date_last` | `int` | Yes |  |
| `deleted` | `bool` | No |  |
| `description` | `any` | No |  |
| `discoverable` | `any` | No |  |
| `domain` | `string` | Yes |  |
| `email_domain` | `string` | Yes |  |
| `enterprise_id` | `string` | No |  |
| `enterprise_name` | `string` | No |  |
| `external_org_migrations` | `map[string]any` | Yes |  |
| `has_compliance_export` | `bool` | No |  |
| `icon` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `ip` | `any` | Yes |  |
| `is_assigned` | `bool` | No |  |
| `is_enterprise` | `int` | No |  |
| `is_over_storage_limit` | `bool` | No |  |
| `isp` | `any` | Yes |  |
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
| `primary_owner` | `map[string]any` | Yes |  |
| `region` | `any` | Yes |  |
| `scope` | `string` | Yes |  |
| `service_id` | `string` | No |  |
| `service_type` | `string` | No |  |
| `sso_provider` | `map[string]any` | No |  |
| `user_agent` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Team(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamprofileEntity

```go
teamprofile := client.Teamprofile(nil)
fmt.Println(teamprofile.GetName()) // "teamprofile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Teamprofile(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamprofileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_away` | `bool` | No |  |
| `avatar_hash` | `string` | Yes |  |
| `cache_ts` | `int` | Yes |  |
| `channels` | `[]any` | Yes |  |
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
| `members` | `[]any` | Yes |  |
| `ok` | `bool` | Yes |  |
| `online` | `bool` | No |  |
| `presence` | `string` | Yes |  |
| `response_metadata` | `map[string]any` | Yes |  |
| `team` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.User(nil).Create(map[string]any{
    "token": "example_token",
    "avatar_hash": "example_avatar_hash",
    "cache_ts": 1,
    "channels": []any{},
    "image_1024": "example_image_1024",
    "image_192": "example_image_192",
    "image_24": "example_image_24",
    "image_32": "example_image_32",
    "image_48": "example_image_48",
    "image_512": "example_image_512",
    "image_72": "example_image_72",
    "image_original": "example_image_original",
    "members": []any{},
    "ok": true,
    "presence": "example_presence",
    "response_metadata": map[string]any{},
    "user": "example_user",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsergroupEntity

```go
usergroup := client.Usergroup(nil)
fmt.Println(usergroup.GetName()) // "usergroup"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `bool` | Yes |  |
| `auto_type` | `any` | Yes |  |
| `channel_count` | `int` | No |  |
| `created_by` | `string` | Yes |  |
| `date_create` | `int` | Yes |  |
| `date_delete` | `int` | Yes |  |
| `date_update` | `int` | Yes |  |
| `deleted_by` | `any` | Yes |  |
| `description` | `string` | Yes |  |
| `enterprise_subteam_id` | `string` | Yes |  |
| `handle` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_external` | `bool` | Yes |  |
| `is_subteam` | `bool` | Yes |  |
| `is_usergroup` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `prefs` | `map[string]any` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `int` | No |  |
| `users` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Usergroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Usergroup(nil).Create(map[string]any{
    "usergroup": "example_usergroup",
    "auto_provision": true,
    "auto_type": "example_auto_type",
    "created_by": "example_created_by",
    "date_create": 1,
    "date_delete": 1,
    "date_update": 1,
    "deleted_by": "example_deleted_by",
    "enterprise_subteam_id": "example_enterprise_subteam_id",
    "id": "example_id",
    "is_external": true,
    "is_subteam": true,
    "is_usergroup": true,
    "prefs": map[string]any{},
    "team_id": "example_team_id",
    "updated_by": "example_updated_by",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsergroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsergroupsuserEntity

```go
usergroupsuser := client.Usergroupsuser(nil)
fmt.Println(usergroupsuser.GetName()) // "usergroupsuser"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `bool` | Yes |  |
| `auto_type` | `any` | Yes |  |
| `channel_count` | `int` | No |  |
| `created_by` | `string` | Yes |  |
| `date_create` | `int` | Yes |  |
| `date_delete` | `int` | Yes |  |
| `date_update` | `int` | Yes |  |
| `deleted_by` | `any` | Yes |  |
| `description` | `string` | Yes |  |
| `enterprise_subteam_id` | `string` | Yes |  |
| `handle` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_external` | `bool` | Yes |  |
| `is_subteam` | `bool` | Yes |  |
| `is_usergroup` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `ok` | `bool` | Yes |  |
| `prefs` | `map[string]any` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `int` | No |  |
| `users` | `[]any` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Usergroupsuser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Usergroupsuser(nil).Create(map[string]any{
    "user": "example_user",
    "usergroup": "example_usergroup",
    "auto_provision": true,
    "auto_type": "example_auto_type",
    "created_by": "example_created_by",
    "date_create": 1,
    "date_delete": 1,
    "date_update": 1,
    "deleted_by": "example_deleted_by",
    "description": "example_description",
    "enterprise_subteam_id": "example_enterprise_subteam_id",
    "handle": "example_handle",
    "id": "example_id",
    "is_external": true,
    "is_subteam": true,
    "is_usergroup": true,
    "name": "example_name",
    "ok": true,
    "prefs": map[string]any{},
    "team_id": "example_team_id",
    "updated_by": "example_updated_by",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsergroupsuserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsersprofileEntity

```go
usersprofile := client.Usersprofile(nil)
fmt.Println(usersprofile.GetName()) // "usersprofile"
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
| `email` | `any` | No |  |
| `fields` | `any` | Yes |  |
| `first_name` | `any` | No |  |
| `guest_expiration_ts` | `any` | No |  |
| `guest_invited_by` | `any` | No |  |
| `image_1024` | `any` | No |  |
| `image_192` | `any` | No |  |
| `image_24` | `any` | No |  |
| `image_32` | `any` | No |  |
| `image_48` | `any` | No |  |
| `image_512` | `any` | No |  |
| `image_72` | `any` | No |  |
| `image_original` | `any` | No |  |
| `is_app_user` | `bool` | No |  |
| `is_custom_image` | `bool` | No |  |
| `is_restricted` | `any` | No |  |
| `is_ultra_restricted` | `any` | No |  |
| `last_avatar_image_hash` | `string` | No |  |
| `last_name` | `any` | No |  |
| `memberships_count` | `int` | No |  |
| `name` | `any` | No |  |
| `phone` | `string` | Yes |  |
| `pronouns` | `string` | No |  |
| `real_name` | `string` | Yes |  |
| `real_name_normalized` | `string` | Yes |  |
| `skype` | `string` | Yes |  |
| `status_default_emoji` | `string` | No |  |
| `status_default_text` | `string` | No |  |
| `status_default_text_canonical` | `any` | No |  |
| `status_emoji` | `string` | Yes |  |
| `status_expiration` | `int` | No |  |
| `status_text` | `string` | Yes |  |
| `status_text_canonical` | `any` | No |  |
| `team` | `string` | No |  |
| `title` | `string` | Yes |  |
| `updated` | `int` | No |  |
| `user_id` | `string` | No |  |
| `username` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Usersprofile(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Usersprofile(nil).Create(map[string]any{
    "avatar_hash": "example_avatar_hash",
    "display_name": "example_display_name",
    "display_name_normalized": "example_display_name_normalized",
    "fields": map[string]any{},
    "phone": "example_phone",
    "real_name": "example_real_name",
    "real_name_normalized": "example_real_name_normalized",
    "skype": "example_skype",
    "status_emoji": "example_status_emoji",
    "status_text": "example_status_text",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsersprofileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ViewEntity

```go
view := client.View(nil)
fmt.Println(view.GetName()) // "view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.View(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"workflow_step_edit_id": "workflow_step_edit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewSlackSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

