# Slack Python SDK Reference

Complete API reference for the Slack Python SDK.


## SlackSDK

### Constructor

```python
from slack_sdk import SlackSDK

client = SlackSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SlackSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = SlackSDK.test()
```


### Instance Methods

#### `Adminapp(data=None)`

Create a new `AdminappEntity` instance. Pass `None` for no initial data.

#### `Adminappsapproved(data=None)`

Create a new `AdminappsapprovedEntity` instance. Pass `None` for no initial data.

#### `Adminappsrequest(data=None)`

Create a new `AdminappsrequestEntity` instance. Pass `None` for no initial data.

#### `Adminappsrestricted(data=None)`

Create a new `AdminappsrestrictedEntity` instance. Pass `None` for no initial data.

#### `Adminconversation(data=None)`

Create a new `AdminconversationEntity` instance. Pass `None` for no initial data.

#### `Adminconversationsekm(data=None)`

Create a new `AdminconversationsekmEntity` instance. Pass `None` for no initial data.

#### `AdminconversationsrestrictAccess(data=None)`

Create a new `AdminconversationsrestrictAccessEntity` instance. Pass `None` for no initial data.

#### `Adminemoji(data=None)`

Create a new `AdminemojiEntity` instance. Pass `None` for no initial data.

#### `AdmininviteRequest(data=None)`

Create a new `AdmininviteRequestEntity` instance. Pass `None` for no initial data.

#### `AdmininviteRequestsapproved(data=None)`

Create a new `AdmininviteRequestsapprovedEntity` instance. Pass `None` for no initial data.

#### `AdmininviteRequestsdenied(data=None)`

Create a new `AdmininviteRequestsdeniedEntity` instance. Pass `None` for no initial data.

#### `Adminteam(data=None)`

Create a new `AdminteamEntity` instance. Pass `None` for no initial data.

#### `Adminteamsadmin(data=None)`

Create a new `AdminteamsadminEntity` instance. Pass `None` for no initial data.

#### `Adminteamsowner(data=None)`

Create a new `AdminteamsownerEntity` instance. Pass `None` for no initial data.

#### `Adminteamssetting(data=None)`

Create a new `AdminteamssettingEntity` instance. Pass `None` for no initial data.

#### `Adminuser(data=None)`

Create a new `AdminuserEntity` instance. Pass `None` for no initial data.

#### `Adminusergroup(data=None)`

Create a new `AdminusergroupEntity` instance. Pass `None` for no initial data.

#### `Adminuserssession(data=None)`

Create a new `AdminuserssessionEntity` instance. Pass `None` for no initial data.

#### `Api(data=None)`

Create a new `ApiEntity` instance. Pass `None` for no initial data.

#### `App(data=None)`

Create a new `AppEntity` instance. Pass `None` for no initial data.

#### `Appseventauthorization(data=None)`

Create a new `AppseventauthorizationEntity` instance. Pass `None` for no initial data.

#### `Appspermission(data=None)`

Create a new `AppspermissionEntity` instance. Pass `None` for no initial data.

#### `Appspermissionsresource(data=None)`

Create a new `AppspermissionsresourceEntity` instance. Pass `None` for no initial data.

#### `Appspermissionsscope(data=None)`

Create a new `AppspermissionsscopeEntity` instance. Pass `None` for no initial data.

#### `Appspermissionsuser(data=None)`

Create a new `AppspermissionsuserEntity` instance. Pass `None` for no initial data.

#### `Auth(data=None)`

Create a new `AuthEntity` instance. Pass `None` for no initial data.

#### `Bot(data=None)`

Create a new `BotEntity` instance. Pass `None` for no initial data.

#### `Call(data=None)`

Create a new `CallEntity` instance. Pass `None` for no initial data.

#### `Callsparticipant(data=None)`

Create a new `CallsparticipantEntity` instance. Pass `None` for no initial data.

#### `Chat(data=None)`

Create a new `ChatEntity` instance. Pass `None` for no initial data.

#### `ChatscheduledMessage(data=None)`

Create a new `ChatscheduledMessageEntity` instance. Pass `None` for no initial data.

#### `Conversation(data=None)`

Create a new `ConversationEntity` instance. Pass `None` for no initial data.

#### `Dialog(data=None)`

Create a new `DialogEntity` instance. Pass `None` for no initial data.

#### `Dnd(data=None)`

Create a new `DndEntity` instance. Pass `None` for no initial data.

#### `Emoji(data=None)`

Create a new `EmojiEntity` instance. Pass `None` for no initial data.

#### `File(data=None)`

Create a new `FileEntity` instance. Pass `None` for no initial data.

#### `Filescomment(data=None)`

Create a new `FilescommentEntity` instance. Pass `None` for no initial data.

#### `Filesremote(data=None)`

Create a new `FilesremoteEntity` instance. Pass `None` for no initial data.

#### `Migration(data=None)`

Create a new `MigrationEntity` instance. Pass `None` for no initial data.

#### `Oauth(data=None)`

Create a new `OauthEntity` instance. Pass `None` for no initial data.

#### `Oauthv2(data=None)`

Create a new `Oauthv2Entity` instance. Pass `None` for no initial data.

#### `Pin(data=None)`

Create a new `PinEntity` instance. Pass `None` for no initial data.

#### `Reaction(data=None)`

Create a new `ReactionEntity` instance. Pass `None` for no initial data.

#### `Reminder(data=None)`

Create a new `ReminderEntity` instance. Pass `None` for no initial data.

#### `Rtm(data=None)`

Create a new `RtmEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `Star(data=None)`

Create a new `StarEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `Teamprofile(data=None)`

Create a new `TeamprofileEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `Usergroup(data=None)`

Create a new `UsergroupEntity` instance. Pass `None` for no initial data.

#### `Usergroupsuser(data=None)`

Create a new `UsergroupsuserEntity` instance. Pass `None` for no initial data.

#### `Usersprofile(data=None)`

Create a new `UsersprofileEntity` instance. Pass `None` for no initial data.

#### `View(data=None)`

Create a new `ViewEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AdminappEntity

```python
adminapp = client.Adminapp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminapp().create({
    "ok": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminappsapprovedEntity

```python
adminappsapproved = client.Adminappsapproved()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminappsapproved().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappsapprovedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminappsrequestEntity

```python
adminappsrequest = client.Adminappsrequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminappsrequest().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappsrequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminappsrestrictedEntity

```python
adminappsrestricted = client.Adminappsrestricted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminappsrestricted().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminappsrestrictedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminconversationEntity

```python
adminconversation = client.Adminconversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted_user` | `str` | No |  |
| `can_thread` | `dict` | No |  |
| `channel_id` | `str` | No |  |
| `created` | `int` | Yes |  |
| `creator` | `str` | Yes |  |
| `id` | `str` | Yes |  |
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
| `last_read` | `str` | No |  |
| `latest` | `Any` | No |  |
| `members` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `name_normalized` | `str` | Yes |  |
| `num_members` | `int` | No |  |
| `ok` | `bool` | Yes |  |
| `pending_shared` | `list` | No |  |
| `previous_names` | `list` | No |  |
| `priority` | `float` | No |  |
| `purpose` | `dict` | Yes |  |
| `response_metadata` | `dict` | Yes |  |
| `team_ids` | `list` | Yes |  |
| `topic` | `dict` | Yes |  |
| `unlinked` | `int` | No |  |
| `unread_count` | `int` | No |  |
| `unread_count_display` | `int` | No |  |
| `who_can_post` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminconversation().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Adminconversation().list()
for adminconversation in results:
    print(adminconversation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminconversation().load({"channel_id": "channel_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminconversationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminconversationsekmEntity

```python
adminconversationsekm = client.Adminconversationsekm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminconversationsekm().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminconversationsekmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminconversationsrestrictAccessEntity

```python
adminconversationsrestrict_access = client.AdminconversationsrestrictAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AdminconversationsrestrictAccess().create({
    "channel_id": "example_channel_id",  # str
    "group_id": "example_group_id",  # str
    "token": "example_token",  # str
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AdminconversationsrestrictAccess().load({"channel_id": "channel_id", "token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminconversationsrestrictAccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminemojiEntity

```python
adminemoji = client.Adminemoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminemoji().create({
    "name": "example_name",  # str
    "token": "example_token",  # str
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminemoji().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminemojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdmininviteRequestEntity

```python
admininvite_request = client.AdmininviteRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AdmininviteRequest().create({
    "invite_request_id": "example_invite_request_id",  # str
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AdmininviteRequest().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdmininviteRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdmininviteRequestsapprovedEntity

```python
admininvite_requestsapproved = client.AdmininviteRequestsapproved()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AdmininviteRequestsapproved().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdmininviteRequestsapprovedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdmininviteRequestsdeniedEntity

```python
admininvite_requestsdenied = client.AdmininviteRequestsdenied()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AdmininviteRequestsdenied().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdmininviteRequestsdeniedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminteamEntity

```python
adminteam = client.Adminteam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminteam().create({
    "team_domain": "example_team_domain",  # Any
    "team_name": "example_team_name",  # Any
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminteam().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminteamsadminEntity

```python
adminteamsadmin = client.Adminteamsadmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminteamsadmin().load({"team_id": "team_id", "token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamsadminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminteamsownerEntity

```python
adminteamsowner = client.Adminteamsowner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminteamsowner().load({"team_id": "team_id", "token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamsownerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminteamssettingEntity

```python
adminteamssetting = client.Adminteamssetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminteamssetting().create({
    "team_id": "example_team_id",  # str
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminteamssetting().load({"team_id": "team_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminteamssettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminuserEntity

```python
adminuser = client.Adminuser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminuser().create({
    "team_id": "example_team_id",  # str
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminuser().load({"team_id": "team_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminuserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminusergroupEntity

```python
adminusergroup = client.Adminusergroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminusergroup().create({
    "usergroup_id": "example_usergroup_id",  # str
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Adminusergroup().load({"usergroup_id": "usergroup_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminusergroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminuserssessionEntity

```python
adminuserssession = client.Adminuserssession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Adminuserssession().create({
    "user_id": "example_user_id",  # str
    "ok": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminuserssessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiEntity

```python
api = client.Api()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Api().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppEntity

```python
app = client.App()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.App().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppseventauthorizationEntity

```python
appseventauthorization = client.Appseventauthorization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Appseventauthorization().load({"event_context": "event_context"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppseventauthorizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppspermissionEntity

```python
appspermission = client.Appspermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `dict` | Yes |  |
| `channel` | `dict` | Yes |  |
| `group` | `dict` | Yes |  |
| `im` | `dict` | Yes |  |
| `mpim` | `dict` | Yes |  |
| `ok` | `bool` | Yes |  |
| `team` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Appspermission().load({"scope": "scope", "token": "token", "trigger_id": "trigger_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppspermissionsresourceEntity

```python
appspermissionsresource = client.Appspermissionsresource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Appspermissionsresource().list({"token": "example"})
for appspermissionsresource in results:
    print(appspermissionsresource)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionsresourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppspermissionsscopeEntity

```python
appspermissionsscope = client.Appspermissionsscope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `list` | No |  |
| `channel` | `list` | No |  |
| `group` | `list` | No |  |
| `im` | `list` | No |  |
| `mpim` | `list` | No |  |
| `team` | `list` | No |  |
| `user` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Appspermissionsscope().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionsscopeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppspermissionsuserEntity

```python
appspermissionsuser = client.Appspermissionsuser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Appspermissionsuser().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppspermissionsuserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthEntity

```python
auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bot_id` | `str` | No |  |
| `is_enterprise_install` | `bool` | No |  |
| `ok` | `bool` | Yes |  |
| `revoked` | `bool` | Yes |  |
| `team` | `str` | Yes |  |
| `team_id` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Auth().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BotEntity

```python
bot = client.Bot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `str` | Yes |  |
| `deleted` | `bool` | Yes |  |
| `icons` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `updated` | `int` | Yes |  |
| `user_id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Bot().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallEntity

```python
call = client.Call()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Call().create({
    "external_unique_id": "example_external_unique_id",  # str
    "join_url": "example_join_url",  # Any
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Call().load({"id": "call_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallsparticipantEntity

```python
callsparticipant = client.Callsparticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Callsparticipant().create({
    "id": "example_id",  # str
    "user": "example_user",  # Any
    "ok": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallsparticipantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatEntity

```python
chat = client.Chat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No |  |
| `blocks` | `list` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `str` | No |  |
| `bot_profile` | `dict` | Yes |  |
| `channel` | `str` | Yes |  |
| `client_msg_id` | `str` | No |  |
| `comment` | `dict` | Yes |  |
| `display_as_bot` | `bool` | No |  |
| `file` | `dict` | No |  |
| `files` | `list` | No |  |
| `icons` | `dict` | No |  |
| `inviter` | `str` | No |  |
| `is_delayed_message` | `bool` | No |  |
| `is_intro` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `last_read` | `str` | No |  |
| `latest_reply` | `str` | No |  |
| `message_ts` | `str` | Yes |  |
| `name` | `str` | No |  |
| `ok` | `bool` | Yes |  |
| `old_name` | `str` | No |  |
| `parent_user_id` | `str` | No |  |
| `permalink` | `str` | Yes |  |
| `pinned_to` | `list` | No |  |
| `purpose` | `str` | No |  |
| `reactions` | `list` | No |  |
| `reply_count` | `int` | No |  |
| `reply_users` | `list` | No |  |
| `reply_users_count` | `int` | No |  |
| `source_team` | `str` | No |  |
| `subscribed` | `bool` | No |  |
| `subtype` | `str` | No |  |
| `team` | `str` | No |  |
| `text` | `str` | Yes |  |
| `thread_ts` | `str` | No |  |
| `topic` | `str` | No |  |
| `ts` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `unread_count` | `int` | No |  |
| `upload` | `bool` | No |  |
| `user` | `str` | No |  |
| `user_profile` | `dict` | Yes |  |
| `user_team` | `str` | No |  |
| `username` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Chat().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Chat().load({"channel": "channel", "message_t": "message_t", "token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatscheduledMessageEntity

```python
chatscheduled_message = client.ChatscheduledMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel_id` | `str` | Yes |  |
| `date_created` | `int` | Yes |  |
| `id` | `str` | Yes |  |
| `post_at` | `int` | Yes |  |
| `text` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ChatscheduledMessage().list()
for chatscheduled_message in results:
    print(chatscheduled_message)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatscheduledMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationEntity

```python
conversation = client.Conversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_closed` | `bool` | No |  |
| `already_open` | `bool` | No |  |
| `attachments` | `list` | No |  |
| `blocks` | `list` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `str` | No |  |
| `bot_profile` | `dict` | Yes |  |
| `channel` | `Any` | Yes |  |
| `channels` | `list` | Yes |  |
| `client_msg_id` | `str` | No |  |
| `comment` | `dict` | Yes |  |
| `display_as_bot` | `bool` | No |  |
| `file` | `dict` | No |  |
| `files` | `list` | No |  |
| `has_more` | `bool` | No |  |
| `icons` | `dict` | No |  |
| `inviter` | `str` | No |  |
| `is_delayed_message` | `bool` | No |  |
| `is_intro` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `last_read` | `str` | No |  |
| `latest_reply` | `str` | No |  |
| `members` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | No |  |
| `no_op` | `bool` | No |  |
| `not_in_channel` | `bool` | No |  |
| `ok` | `bool` | Yes |  |
| `old_name` | `str` | No |  |
| `parent_user_id` | `str` | No |  |
| `permalink` | `str` | No |  |
| `pinned_to` | `list` | No |  |
| `purpose` | `str` | No |  |
| `reactions` | `list` | No |  |
| `reply_count` | `int` | No |  |
| `reply_users` | `list` | No |  |
| `reply_users_count` | `int` | No |  |
| `response_metadata` | `dict` | No |  |
| `source_team` | `str` | No |  |
| `subscribed` | `bool` | No |  |
| `subtype` | `str` | No |  |
| `team` | `str` | No |  |
| `text` | `str` | Yes |  |
| `thread_ts` | `str` | No |  |
| `topic` | `str` | No |  |
| `ts` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `unread_count` | `int` | No |  |
| `upload` | `bool` | No |  |
| `user` | `str` | No |  |
| `user_profile` | `dict` | Yes |  |
| `user_team` | `str` | No |  |
| `username` | `str` | No |  |
| `warning` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Conversation().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Conversation().list()
for conversation in results:
    print(conversation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Conversation().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DialogEntity

```python
dialog = client.Dialog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dialog().load({"dialog": "dialog", "trigger_id": "trigger_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DialogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DndEntity

```python
dnd = client.Dnd()
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dnd().create({
    "num_minute": 1,  # int
    "token": "example_token",  # str
    "dnd_enabled": True,  # bool
    "next_dnd_end_ts": 1,  # int
    "next_dnd_start_ts": 1,  # int
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dnd().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DndEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmojiEntity

```python
emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Emoji().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileEntity

```python
file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `list` | No |  |
| `comments` | `list` | Yes |  |
| `comments_count` | `int` | No |  |
| `content_html` | `None` | No |  |
| `created` | `int` | No |  |
| `date_delete` | `int` | No |  |
| `display_as_bot` | `bool` | No |  |
| `editable` | `bool` | No |  |
| `editor` | `str` | No |  |
| `external_id` | `str` | No |  |
| `external_type` | `str` | No |  |
| `external_url` | `str` | No |  |
| `file` | `dict` | Yes |  |
| `filetype` | `str` | No |  |
| `groups` | `list` | No |  |
| `has_rich_preview` | `bool` | No |  |
| `id` | `str` | No |  |
| `image_exif_rotation` | `int` | No |  |
| `ims` | `list` | No |  |
| `is_external` | `bool` | No |  |
| `is_public` | `bool` | No |  |
| `is_starred` | `bool` | No |  |
| `is_tombstoned` | `bool` | No |  |
| `last_editor` | `str` | No |  |
| `mimetype` | `str` | No |  |
| `mode` | `str` | No |  |
| `name` | `str` | No |  |
| `non_owner_editable` | `bool` | No |  |
| `num_stars` | `int` | No |  |
| `ok` | `bool` | Yes |  |
| `original_h` | `int` | No |  |
| `original_w` | `int` | No |  |
| `paging` | `dict` | Yes |  |
| `permalink` | `str` | No |  |
| `permalink_public` | `str` | No |  |
| `pinned_info` | `dict` | No |  |
| `pinned_to` | `list` | No |  |
| `pretty_type` | `str` | No |  |
| `preview` | `str` | No |  |
| `public_url_shared` | `bool` | No |  |
| `reactions` | `list` | No |  |
| `response_metadata` | `Any` | No |  |
| `shares` | `dict` | No |  |
| `size` | `int` | No |  |
| `source_team` | `str` | No |  |
| `state` | `str` | No |  |
| `thumb_1024` | `str` | No |  |
| `thumb_1024_h` | `int` | No |  |
| `thumb_1024_w` | `int` | No |  |
| `thumb_160` | `str` | No |  |
| `thumb_360` | `str` | No |  |
| `thumb_360_h` | `int` | No |  |
| `thumb_360_w` | `int` | No |  |
| `thumb_480` | `str` | No |  |
| `thumb_480_h` | `int` | No |  |
| `thumb_480_w` | `int` | No |  |
| `thumb_64` | `str` | No |  |
| `thumb_720` | `str` | No |  |
| `thumb_720_h` | `int` | No |  |
| `thumb_720_w` | `int` | No |  |
| `thumb_80` | `str` | No |  |
| `thumb_800` | `str` | No |  |
| `thumb_800_h` | `int` | No |  |
| `thumb_800_w` | `int` | No |  |
| `thumb_960` | `str` | No |  |
| `thumb_960_h` | `int` | No |  |
| `thumb_960_w` | `int` | No |  |
| `thumb_tiny` | `str` | No |  |
| `timestamp` | `int` | No |  |
| `title` | `str` | No |  |
| `updated` | `int` | No |  |
| `url_private` | `str` | No |  |
| `url_private_download` | `str` | No |  |
| `user` | `str` | No |  |
| `user_team` | `str` | No |  |
| `username` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.File().create({
    "comments": [],  # list
    "ok": True,  # bool
    "paging": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.File().list()
for file in results:
    print(file)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FilescommentEntity

```python
filescomment = client.Filescomment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Filescomment().create({
    "ok": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FilescommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FilesremoteEntity

```python
filesremote = client.Filesremote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Filesremote().create({
    "ok": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Filesremote().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FilesremoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MigrationEntity

```python
migration = client.Migration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise_id` | `str` | Yes |  |
| `invalid_user_ids` | `list` | No |  |
| `ok` | `bool` | Yes |  |
| `team_id` | `str` | Yes |  |
| `user_id_map` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Migration().list({"token": "example", "user": "example"})
for migration in results:
    print(migration)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OauthEntity

```python
oauth = client.Oauth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Oauth().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OauthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Oauthv2Entity

```python
oauthv2 = client.Oauthv2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Oauthv2().load({"code": "code"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Oauthv2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PinEntity

```python
pin = client.Pin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `list` | No |  |
| `ok` | `bool` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `items` | - | - |
| `ok` | - | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Pin().create({
    "channel": "example_channel",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Pin().load({"channel": "channel", "token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PinEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReactionEntity

```python
reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `dict` | No |  |
| `items` | `list` | Yes |  |
| `ok` | `bool` | No |  |
| `paging` | `dict` | Yes |  |
| `response_metadata` | `Any` | No |  |
| `type` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Reaction().create({
    "name": "example_name",  # str
    "items": [],  # list
    "paging": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Reaction().list({"token": "example"})
for reaction in results:
    print(reaction)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Reaction().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReminderEntity

```python
reminder = client.Reminder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `complete_ts` | `int` | No |  |
| `creator` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `ok` | `bool` | Yes |  |
| `recurring` | `bool` | Yes |  |
| `text` | `str` | Yes |  |
| `time` | `int` | No |  |
| `user` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Reminder().create({
    "text": "example_text",  # Any
    "time": "example_time",  # Any
    "creator": "example_creator",  # str
    "id": "example_id",  # str
    "ok": True,  # bool
    "recurring": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Reminder().list()
for reminder in results:
    print(reminder)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Reminder().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReminderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RtmEntity

```python
rtm = client.Rtm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |
| `self` | `dict` | Yes |  |
| `team` | `dict` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rtm().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RtmEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Search().load({"query": "query", "token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StarEntity

```python
star = client.Star()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `list` | Yes |  |
| `ok` | `bool` | Yes |  |
| `paging` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Star().create({
    "items": [],  # list
    "ok": True,  # bool
    "paging": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Star().list()
for star in results:
    print(star)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_app_id` | `str` | No |  |
| `app_id` | `str` | Yes |  |
| `app_type` | `str` | Yes |  |
| `archived` | `bool` | No |  |
| `avatar_base_url` | `str` | No |  |
| `change_type` | `str` | Yes |  |
| `channel` | `str` | No |  |
| `count` | `int` | Yes |  |
| `country` | `str | None` | Yes |  |
| `created` | `int` | No |  |
| `date` | `str` | Yes |  |
| `date_create` | `int` | No |  |
| `date_first` | `int` | Yes |  |
| `date_last` | `int` | Yes |  |
| `deleted` | `bool` | No |  |
| `description` | `None | str` | No |  |
| `discoverable` | `Any` | No |  |
| `domain` | `str` | Yes |  |
| `email_domain` | `str` | Yes |  |
| `enterprise_id` | `str` | No |  |
| `enterprise_name` | `str` | No |  |
| `external_org_migrations` | `dict` | Yes |  |
| `has_compliance_export` | `bool` | No |  |
| `icon` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `ip` | `str | None` | Yes |  |
| `is_assigned` | `bool` | No |  |
| `is_enterprise` | `int` | No |  |
| `is_over_storage_limit` | `bool` | No |  |
| `isp` | `str | None` | Yes |  |
| `limit_ts` | `int` | No |  |
| `locale` | `str` | No |  |
| `messages_count` | `int` | No |  |
| `msg_edit_window_mins` | `int` | No |  |
| `name` | `str` | Yes |  |
| `ok` | `bool` | Yes |  |
| `over_integrations_limit` | `bool` | No |  |
| `over_storage_limit` | `bool` | No |  |
| `pay_prod_cur` | `str` | No |  |
| `plan` | `str` | No |  |
| `primary_owner` | `dict` | Yes |  |
| `region` | `str | None` | Yes |  |
| `scope` | `str` | Yes |  |
| `service_id` | `str` | No |  |
| `service_type` | `str` | No |  |
| `sso_provider` | `dict` | No |  |
| `user_agent` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |
| `user_name` | `str` | Yes |  |
| `username` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Team().list({"token": "example"})
for team in results:
    print(team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Team().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamprofileEntity

```python
teamprofile = client.Teamprofile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Teamprofile().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamprofileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_away` | `bool` | No |  |
| `avatar_hash` | `str` | Yes |  |
| `cache_ts` | `int` | Yes |  |
| `channels` | `list` | Yes |  |
| `connection_count` | `int` | No |  |
| `image_1024` | `str` | Yes |  |
| `image_192` | `str` | Yes |  |
| `image_24` | `str` | Yes |  |
| `image_32` | `str` | Yes |  |
| `image_48` | `str` | Yes |  |
| `image_512` | `str` | Yes |  |
| `image_72` | `str` | Yes |  |
| `image_original` | `str` | Yes |  |
| `last_activity` | `int` | No |  |
| `manual_away` | `bool` | No |  |
| `members` | `list` | Yes |  |
| `ok` | `bool` | Yes |  |
| `online` | `bool` | No |  |
| `presence` | `str` | Yes |  |
| `response_metadata` | `dict` | Yes |  |
| `team` | `dict` | No |  |
| `user` | `Any` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.User().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.User().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsergroupEntity

```python
usergroup = client.Usergroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `bool` | Yes |  |
| `auto_type` | `Any` | Yes |  |
| `channel_count` | `int` | No |  |
| `created_by` | `str` | Yes |  |
| `date_create` | `int` | Yes |  |
| `date_delete` | `int` | Yes |  |
| `date_update` | `int` | Yes |  |
| `deleted_by` | `Any` | Yes |  |
| `description` | `str` | Yes |  |
| `enterprise_subteam_id` | `str` | Yes |  |
| `handle` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_external` | `bool` | Yes |  |
| `is_subteam` | `bool` | Yes |  |
| `is_usergroup` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `prefs` | `dict` | Yes |  |
| `team_id` | `str` | Yes |  |
| `updated_by` | `str` | Yes |  |
| `user_count` | `int` | No |  |
| `users` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Usergroup().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Usergroup().list({"token": "example"})
for usergroup in results:
    print(usergroup)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsergroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsergroupsuserEntity

```python
usergroupsuser = client.Usergroupsuser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_provision` | `bool` | Yes |  |
| `auto_type` | `Any` | Yes |  |
| `channel_count` | `int` | No |  |
| `created_by` | `str` | Yes |  |
| `date_create` | `int` | Yes |  |
| `date_delete` | `int` | Yes |  |
| `date_update` | `int` | Yes |  |
| `deleted_by` | `Any` | Yes |  |
| `description` | `str` | Yes |  |
| `enterprise_subteam_id` | `str` | Yes |  |
| `handle` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_external` | `bool` | Yes |  |
| `is_subteam` | `bool` | Yes |  |
| `is_usergroup` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `ok` | `bool` | Yes |  |
| `prefs` | `dict` | Yes |  |
| `team_id` | `str` | Yes |  |
| `updated_by` | `str` | Yes |  |
| `user_count` | `int` | No |  |
| `users` | `list` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Usergroupsuser().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Usergroupsuser().list({"token": "example", "usergroup": "example"})
for usergroupsuser in results:
    print(usergroupsuser)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsergroupsuserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsersprofileEntity

```python
usersprofile = client.Usersprofile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `always_active` | `bool` | No |  |
| `api_app_id` | `str` | No |  |
| `avatar_hash` | `str` | Yes |  |
| `bot_id` | `str` | No |  |
| `display_name` | `str` | Yes |  |
| `display_name_normalized` | `str` | Yes |  |
| `email` | `None | str` | No |  |
| `fields` | `dict | None | list` | Yes |  |
| `first_name` | `None | str` | No |  |
| `guest_expiration_ts` | `None | int` | No |  |
| `guest_invited_by` | `None | str` | No |  |
| `image_1024` | `None | str` | No |  |
| `image_192` | `None | str` | No |  |
| `image_24` | `None | str` | No |  |
| `image_32` | `None | str` | No |  |
| `image_48` | `None | str` | No |  |
| `image_512` | `None | str` | No |  |
| `image_72` | `None | str` | No |  |
| `image_original` | `None | str` | No |  |
| `is_app_user` | `bool` | No |  |
| `is_custom_image` | `bool` | No |  |
| `is_restricted` | `None | bool` | No |  |
| `is_ultra_restricted` | `None | bool` | No |  |
| `last_avatar_image_hash` | `str` | No |  |
| `last_name` | `None | str` | No |  |
| `memberships_count` | `int` | No |  |
| `name` | `None | str` | No |  |
| `phone` | `str` | Yes |  |
| `pronouns` | `str` | No |  |
| `real_name` | `str` | Yes |  |
| `real_name_normalized` | `str` | Yes |  |
| `skype` | `str` | Yes |  |
| `status_default_emoji` | `str` | No |  |
| `status_default_text` | `str` | No |  |
| `status_default_text_canonical` | `None | str` | No |  |
| `status_emoji` | `str` | Yes |  |
| `status_expiration` | `int` | No |  |
| `status_text` | `str` | Yes |  |
| `status_text_canonical` | `None | str` | No |  |
| `team` | `str` | No |  |
| `title` | `str` | Yes |  |
| `updated` | `int` | No |  |
| `user_id` | `str` | No |  |
| `username` | `None | str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Usersprofile().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Usersprofile().load({"token": "token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersprofileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ViewEntity

```python
view = client.View()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.View().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"workflow_step_edit_id": "workflow_step_edit_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = SlackSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

