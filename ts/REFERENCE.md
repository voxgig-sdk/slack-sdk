# Slack TypeScript SDK Reference

Complete API reference for the Slack TypeScript SDK.


## SlackSDK

### Constructor

```ts
new SlackSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SlackSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = SlackSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `SlackSDK` instance in test mode.


### Instance Methods

#### `Adminapp(data?: object)`

Create a new `Adminapp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminappEntity` instance.

#### `Adminappsapproved(data?: object)`

Create a new `Adminappsapproved` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminappsapprovedEntity` instance.

#### `Adminappsrequest(data?: object)`

Create a new `Adminappsrequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminappsrequestEntity` instance.

#### `Adminappsrestricted(data?: object)`

Create a new `Adminappsrestricted` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminappsrestrictedEntity` instance.

#### `Adminconversation(data?: object)`

Create a new `Adminconversation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminconversationEntity` instance.

#### `Adminconversationsekm(data?: object)`

Create a new `Adminconversationsekm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminconversationsekmEntity` instance.

#### `AdminconversationsrestrictAccess(data?: object)`

Create a new `AdminconversationsrestrictAccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminconversationsrestrictAccessEntity` instance.

#### `Adminemoji(data?: object)`

Create a new `Adminemoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminemojiEntity` instance.

#### `AdmininviteRequest(data?: object)`

Create a new `AdmininviteRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdmininviteRequestEntity` instance.

#### `AdmininviteRequestsapproved(data?: object)`

Create a new `AdmininviteRequestsapproved` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdmininviteRequestsapprovedEntity` instance.

#### `AdmininviteRequestsdenied(data?: object)`

Create a new `AdmininviteRequestsdenied` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdmininviteRequestsdeniedEntity` instance.

#### `Adminteam(data?: object)`

Create a new `Adminteam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminteamEntity` instance.

#### `Adminteamsadmin(data?: object)`

Create a new `Adminteamsadmin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminteamsadminEntity` instance.

#### `Adminteamsowner(data?: object)`

Create a new `Adminteamsowner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminteamsownerEntity` instance.

#### `Adminteamssetting(data?: object)`

Create a new `Adminteamssetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminteamssettingEntity` instance.

#### `Adminuser(data?: object)`

Create a new `Adminuser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminuserEntity` instance.

#### `Adminusergroup(data?: object)`

Create a new `Adminusergroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminusergroupEntity` instance.

#### `Adminuserssession(data?: object)`

Create a new `Adminuserssession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminuserssessionEntity` instance.

#### `Api(data?: object)`

Create a new `Api` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiEntity` instance.

#### `App(data?: object)`

Create a new `App` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppEntity` instance.

#### `Appseventauthorization(data?: object)`

Create a new `Appseventauthorization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppseventauthorizationEntity` instance.

#### `Appspermission(data?: object)`

Create a new `Appspermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppspermissionEntity` instance.

#### `Appspermissionsresource(data?: object)`

Create a new `Appspermissionsresource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppspermissionsresourceEntity` instance.

#### `Appspermissionsscope(data?: object)`

Create a new `Appspermissionsscope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppspermissionsscopeEntity` instance.

#### `Appspermissionsuser(data?: object)`

Create a new `Appspermissionsuser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AppspermissionsuserEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `Bot(data?: object)`

Create a new `Bot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BotEntity` instance.

#### `Call(data?: object)`

Create a new `Call` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallEntity` instance.

#### `Callsparticipant(data?: object)`

Create a new `Callsparticipant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallsparticipantEntity` instance.

#### `Chat(data?: object)`

Create a new `Chat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatEntity` instance.

#### `ChatscheduledMessage(data?: object)`

Create a new `ChatscheduledMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatscheduledMessageEntity` instance.

#### `Conversation(data?: object)`

Create a new `Conversation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationEntity` instance.

#### `Dialog(data?: object)`

Create a new `Dialog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DialogEntity` instance.

#### `Dnd(data?: object)`

Create a new `Dnd` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DndEntity` instance.

#### `Emoji(data?: object)`

Create a new `Emoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmojiEntity` instance.

#### `File(data?: object)`

Create a new `File` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FileEntity` instance.

#### `Filescomment(data?: object)`

Create a new `Filescomment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FilescommentEntity` instance.

#### `Filesremote(data?: object)`

Create a new `Filesremote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FilesremoteEntity` instance.

#### `Migration(data?: object)`

Create a new `Migration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MigrationEntity` instance.

#### `Oauth(data?: object)`

Create a new `Oauth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OauthEntity` instance.

#### `Oauthv2(data?: object)`

Create a new `Oauthv2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `Oauthv2Entity` instance.

#### `Pin(data?: object)`

Create a new `Pin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PinEntity` instance.

#### `Reaction(data?: object)`

Create a new `Reaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReactionEntity` instance.

#### `Reminder(data?: object)`

Create a new `Reminder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReminderEntity` instance.

#### `Rtm(data?: object)`

Create a new `Rtm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RtmEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `Star(data?: object)`

Create a new `Star` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StarEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `Teamprofile(data?: object)`

Create a new `Teamprofile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamprofileEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Usergroup(data?: object)`

Create a new `Usergroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsergroupEntity` instance.

#### `Usergroupsuser(data?: object)`

Create a new `Usergroupsuser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsergroupsuserEntity` instance.

#### `Usersprofile(data?: object)`

Create a new `Usersprofile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsersprofileEntity` instance.

#### `View(data?: object)`

Create a new `View` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `SlackSDK.test()`.

**Returns:** `SlackSDK` instance in test mode.


---

## AdminappEntity

```ts
const adminapp = client.Adminapp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminapp().create({
  ok: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminappEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminappsapprovedEntity

```ts
const adminappsapproved = client.Adminappsapproved()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminappsapproved().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminappsapprovedEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminappsrequestEntity

```ts
const adminappsrequest = client.Adminappsrequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminappsrequest().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminappsrequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminappsrestrictedEntity

```ts
const adminappsrestricted = client.Adminappsrestricted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminappsrestricted().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminappsrestrictedEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminconversationEntity

```ts
const adminconversation = client.Adminconversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted_user` | `string` | No |  |
| `can_thread` | `Record<string, any>` | No |  |
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
| `members` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `name_normalized` | `string` | Yes |  |
| `num_members` | `number` | No |  |
| `ok` | `boolean` | Yes |  |
| `pending_shared` | `any[]` | No |  |
| `previous_names` | `any[]` | No |  |
| `priority` | `number` | No |  |
| `purpose` | `Record<string, any>` | Yes |  |
| `response_metadata` | `Record<string, any>` | Yes |  |
| `team_ids` | `any[]` | Yes |  |
| `topic` | `Record<string, any>` | Yes |  |
| `unlinked` | `number` | No |  |
| `unread_count` | `number` | No |  |
| `unread_count_display` | `number` | No |  |
| `who_can_post` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminconversation().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Adminconversation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminconversation().load({ channel_id: 'channel_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminconversationEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminconversationsekmEntity

```ts
const adminconversationsekm = client.Adminconversationsekm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminconversationsekm().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminconversationsekmEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminconversationsrestrictAccessEntity

```ts
const adminconversationsrestrict_access = client.AdminconversationsrestrictAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AdminconversationsrestrictAccess().create({
  channel_id: 'example_channel_id',
  group_id: 'example_group_id',
  token: 'example_token',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AdminconversationsrestrictAccess().load({ channel_id: 'channel_id', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminconversationsrestrictAccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminemojiEntity

```ts
const adminemoji = client.Adminemoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminemoji().create({
  name: 'example_name',
  token: 'example_token',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminemoji().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminemojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdmininviteRequestEntity

```ts
const admininvite_request = client.AdmininviteRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AdmininviteRequest().create({
  invite_request_id: 'example_invite_request_id',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AdmininviteRequest().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdmininviteRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdmininviteRequestsapprovedEntity

```ts
const admininvite_requestsapproved = client.AdmininviteRequestsapproved()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AdmininviteRequestsapproved().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdmininviteRequestsapprovedEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdmininviteRequestsdeniedEntity

```ts
const admininvite_requestsdenied = client.AdmininviteRequestsdenied()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AdmininviteRequestsdenied().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdmininviteRequestsdeniedEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminteamEntity

```ts
const adminteam = client.Adminteam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminteam().create({
  team_domain: 'example_team_domain',
  team_name: 'example_team_name',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminteam().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminteamEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminteamsadminEntity

```ts
const adminteamsadmin = client.Adminteamsadmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminteamsadmin().load({ team_id: 'team_id', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminteamsadminEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminteamsownerEntity

```ts
const adminteamsowner = client.Adminteamsowner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminteamsowner().load({ team_id: 'team_id', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminteamsownerEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminteamssettingEntity

```ts
const adminteamssetting = client.Adminteamssetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminteamssetting().create({
  team_id: 'example_team_id',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminteamssetting().load({ team_id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminteamssettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminuserEntity

```ts
const adminuser = client.Adminuser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminuser().create({
  team_id: 'example_team_id',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminuser().load({ team_id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminuserEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminusergroupEntity

```ts
const adminusergroup = client.Adminusergroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminusergroup().create({
  usergroup_id: 'example_usergroup_id',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Adminusergroup().load({ usergroup_id: 'usergroup_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminusergroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminuserssessionEntity

```ts
const adminuserssession = client.Adminuserssession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Adminuserssession().create({
  user_id: 'example_user_id',
  ok: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminuserssessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiEntity

```ts
const api = client.Api()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Api().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppEntity

```ts
const app = client.App()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.App().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppseventauthorizationEntity

```ts
const appseventauthorization = client.Appseventauthorization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Appseventauthorization().load({ event_context: 'event_context' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppseventauthorizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppspermissionEntity

```ts
const appspermission = client.Appspermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `Record<string, any>` | Yes |  |
| `channel` | `Record<string, any>` | Yes |  |
| `group` | `Record<string, any>` | Yes |  |
| `im` | `Record<string, any>` | Yes |  |
| `mpim` | `Record<string, any>` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `team` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Appspermission().load({ scope: 'scope', token: 'token', trigger_id: 'trigger_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppspermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppspermissionsresourceEntity

```ts
const appspermissionsresource = client.Appspermissionsresource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Appspermissionsresource().list({ token: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppspermissionsresourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppspermissionsscopeEntity

```ts
const appspermissionsscope = client.Appspermissionsscope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_home` | `any[]` | No |  |
| `channel` | `any[]` | No |  |
| `group` | `any[]` | No |  |
| `im` | `any[]` | No |  |
| `mpim` | `any[]` | No |  |
| `team` | `any[]` | No |  |
| `user` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Appspermissionsscope().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppspermissionsscopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AppspermissionsuserEntity

```ts
const appspermissionsuser = client.Appspermissionsuser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Appspermissionsuser().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AppspermissionsuserEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Auth().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BotEntity

```ts
const bot = client.Bot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `string` | Yes |  |
| `deleted` | `boolean` | Yes |  |
| `icons` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `updated` | `number` | Yes |  |
| `user_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Bot().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BotEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallEntity

```ts
const call = client.Call()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Call().create({
  external_unique_id: 'example_external_unique_id',
  join_url: 'example_join_url',
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Call().load({ id: 'call_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallsparticipantEntity

```ts
const callsparticipant = client.Callsparticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Callsparticipant().create({
  id: 'example_id',
  user: 'example_user',
  ok: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallsparticipantEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatEntity

```ts
const chat = client.Chat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No |  |
| `blocks` | `any[]` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `Record<string, any>` | Yes |  |
| `channel` | `string` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `Record<string, any>` | Yes |  |
| `display_as_bot` | `boolean` | No |  |
| `file` | `Record<string, any>` | No |  |
| `files` | `any[]` | No |  |
| `icons` | `Record<string, any>` | No |  |
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
| `pinned_to` | `any[]` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `any[]` | No |  |
| `reply_count` | `number` | No |  |
| `reply_users` | `any[]` | No |  |
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
| `user_profile` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Chat().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Chat().load({ channel: 'channel', message_t: 'message_t', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatscheduledMessageEntity

```ts
const chatscheduled_message = client.ChatscheduledMessage()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ChatscheduledMessage().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatscheduledMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationEntity

```ts
const conversation = client.Conversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `already_closed` | `boolean` | No |  |
| `already_open` | `boolean` | No |  |
| `attachments` | `any[]` | No |  |
| `blocks` | `any[]` | No | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` | No |  |
| `bot_profile` | `Record<string, any>` | Yes |  |
| `channel` | `any` | Yes |  |
| `channels` | `any[]` | Yes |  |
| `client_msg_id` | `string` | No |  |
| `comment` | `Record<string, any>` | Yes |  |
| `display_as_bot` | `boolean` | No |  |
| `file` | `Record<string, any>` | No |  |
| `files` | `any[]` | No |  |
| `has_more` | `boolean` | No |  |
| `icons` | `Record<string, any>` | No |  |
| `inviter` | `string` | No |  |
| `is_delayed_message` | `boolean` | No |  |
| `is_intro` | `boolean` | No |  |
| `is_starred` | `boolean` | No |  |
| `last_read` | `string` | No |  |
| `latest_reply` | `string` | No |  |
| `members` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | No |  |
| `no_op` | `boolean` | No |  |
| `not_in_channel` | `boolean` | No |  |
| `ok` | `boolean` | Yes |  |
| `old_name` | `string` | No |  |
| `parent_user_id` | `string` | No |  |
| `permalink` | `string` | No |  |
| `pinned_to` | `any[]` | No |  |
| `purpose` | `string` | No |  |
| `reactions` | `any[]` | No |  |
| `reply_count` | `number` | No |  |
| `reply_users` | `any[]` | No |  |
| `reply_users_count` | `number` | No |  |
| `response_metadata` | `Record<string, any>` | No |  |
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
| `user_profile` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Conversation().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Conversation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Conversation().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DialogEntity

```ts
const dialog = client.Dialog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dialog().load({ dialog: 'dialog', trigger_id: 'trigger_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DialogEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DndEntity

```ts
const dnd = client.Dnd()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dnd().create({
  num_minute: 1,
  token: 'example_token',
  dnd_enabled: true,
  next_dnd_end_ts: 1,
  next_dnd_start_ts: 1,
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dnd().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DndEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmojiEntity

```ts
const emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Emoji().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FileEntity

```ts
const file = client.File()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channels` | `any[]` | No |  |
| `comments` | `any[]` | Yes |  |
| `comments_count` | `number` | No |  |
| `content_html` | `null` | No |  |
| `created` | `number` | No |  |
| `date_delete` | `number` | No |  |
| `display_as_bot` | `boolean` | No |  |
| `editable` | `boolean` | No |  |
| `editor` | `string` | No |  |
| `external_id` | `string` | No |  |
| `external_type` | `string` | No |  |
| `external_url` | `string` | No |  |
| `file` | `Record<string, any>` | Yes |  |
| `filetype` | `string` | No |  |
| `groups` | `any[]` | No |  |
| `has_rich_preview` | `boolean` | No |  |
| `id` | `string` | No |  |
| `image_exif_rotation` | `number` | No |  |
| `ims` | `any[]` | No |  |
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
| `paging` | `Record<string, any>` | Yes |  |
| `permalink` | `string` | No |  |
| `permalink_public` | `string` | No |  |
| `pinned_info` | `Record<string, any>` | No |  |
| `pinned_to` | `any[]` | No |  |
| `pretty_type` | `string` | No |  |
| `preview` | `string` | No |  |
| `public_url_shared` | `boolean` | No |  |
| `reactions` | `any[]` | No |  |
| `response_metadata` | `any` | No |  |
| `shares` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.File().create({
  comments: [],
  ok: true,
  paging: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.File().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FileEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FilescommentEntity

```ts
const filescomment = client.Filescomment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Filescomment().create({
  ok: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FilescommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FilesremoteEntity

```ts
const filesremote = client.Filesremote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Filesremote().create({
  ok: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Filesremote().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FilesremoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MigrationEntity

```ts
const migration = client.Migration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enterprise_id` | `string` | Yes |  |
| `invalid_user_ids` | `any[]` | No |  |
| `ok` | `boolean` | Yes |  |
| `team_id` | `string` | Yes |  |
| `user_id_map` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Migration().list({ token: "example", user: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MigrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OauthEntity

```ts
const oauth = client.Oauth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Oauth().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OauthEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Oauthv2Entity

```ts
const oauthv2 = client.Oauthv2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Oauthv2().load({ code: 'code' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `Oauthv2Entity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PinEntity

```ts
const pin = client.Pin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `any[]` | No |  |
| `ok` | `boolean` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `items` | - | - |
| `ok` | - | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Pin().create({
  channel: 'example_channel',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Pin().load({ channel: 'channel', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PinEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReactionEntity

```ts
const reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `Record<string, any>` | No |  |
| `items` | `any[]` | Yes |  |
| `ok` | `boolean` | No |  |
| `paging` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Reaction().create({
  name: 'example_name',
  items: [],
  paging: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reaction().list({ token: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Reaction().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReminderEntity

```ts
const reminder = client.Reminder()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Reminder().create({
  text: 'example_text',
  time: 'example_time',
  creator: 'example_creator',
  id: 'example_id',
  ok: true,
  recurring: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Reminder().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Reminder().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReminderEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RtmEntity

```ts
const rtm = client.Rtm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |
| `self` | `Record<string, any>` | Yes |  |
| `team` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rtm().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RtmEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Search().load({ query: 'query', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StarEntity

```ts
const star = client.Star()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `any[]` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `paging` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Star().create({
  items: [],
  ok: true,
  paging: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Star().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StarEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
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
| `country` | `string | null` | Yes |  |
| `created` | `number` | No |  |
| `date` | `string` | Yes |  |
| `date_create` | `number` | No |  |
| `date_first` | `number` | Yes |  |
| `date_last` | `number` | Yes |  |
| `deleted` | `boolean` | No |  |
| `description` | `null | string` | No |  |
| `discoverable` | `any` | No |  |
| `domain` | `string` | Yes |  |
| `email_domain` | `string` | Yes |  |
| `enterprise_id` | `string` | No |  |
| `enterprise_name` | `string` | No |  |
| `external_org_migrations` | `Record<string, any>` | Yes |  |
| `has_compliance_export` | `boolean` | No |  |
| `icon` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes |  |
| `ip` | `string | null` | Yes |  |
| `is_assigned` | `boolean` | No |  |
| `is_enterprise` | `number` | No |  |
| `is_over_storage_limit` | `boolean` | No |  |
| `isp` | `string | null` | Yes |  |
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
| `primary_owner` | `Record<string, any>` | Yes |  |
| `region` | `string | null` | Yes |  |
| `scope` | `string` | Yes |  |
| `service_id` | `string` | No |  |
| `service_type` | `string` | No |  |
| `sso_provider` | `Record<string, any>` | No |  |
| `user_agent` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list({ token: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Team().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamprofileEntity

```ts
const teamprofile = client.Teamprofile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Teamprofile().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamprofileEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_away` | `boolean` | No |  |
| `avatar_hash` | `string` | Yes |  |
| `cache_ts` | `number` | Yes |  |
| `channels` | `any[]` | Yes |  |
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
| `members` | `any[]` | Yes |  |
| `ok` | `boolean` | Yes |  |
| `online` | `boolean` | No |  |
| `presence` | `string` | Yes |  |
| `response_metadata` | `Record<string, any>` | Yes |  |
| `team` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.User().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsergroupEntity

```ts
const usergroup = client.Usergroup()
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
| `prefs` | `Record<string, any>` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `number` | No |  |
| `users` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Usergroup().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Usergroup().list({ token: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsergroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsergroupsuserEntity

```ts
const usergroupsuser = client.Usergroupsuser()
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
| `prefs` | `Record<string, any>` | Yes |  |
| `team_id` | `string` | Yes |  |
| `updated_by` | `string` | Yes |  |
| `user_count` | `number` | No |  |
| `users` | `any[]` | No |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Usergroupsuser().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Usergroupsuser().list({ token: "example", usergroup: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsergroupsuserEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsersprofileEntity

```ts
const usersprofile = client.Usersprofile()
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
| `email` | `null | string` | No |  |
| `fields` | `Record<string, any> | null | any[]` | Yes |  |
| `first_name` | `null | string` | No |  |
| `guest_expiration_ts` | `null | number` | No |  |
| `guest_invited_by` | `null | string` | No |  |
| `image_1024` | `null | string` | No |  |
| `image_192` | `null | string` | No |  |
| `image_24` | `null | string` | No |  |
| `image_32` | `null | string` | No |  |
| `image_48` | `null | string` | No |  |
| `image_512` | `null | string` | No |  |
| `image_72` | `null | string` | No |  |
| `image_original` | `null | string` | No |  |
| `is_app_user` | `boolean` | No |  |
| `is_custom_image` | `boolean` | No |  |
| `is_restricted` | `null | boolean` | No |  |
| `is_ultra_restricted` | `null | boolean` | No |  |
| `last_avatar_image_hash` | `string` | No |  |
| `last_name` | `null | string` | No |  |
| `memberships_count` | `number` | No |  |
| `name` | `null | string` | No |  |
| `phone` | `string` | Yes |  |
| `pronouns` | `string` | No |  |
| `real_name` | `string` | Yes |  |
| `real_name_normalized` | `string` | Yes |  |
| `skype` | `string` | Yes |  |
| `status_default_emoji` | `string` | No |  |
| `status_default_text` | `string` | No |  |
| `status_default_text_canonical` | `null | string` | No |  |
| `status_emoji` | `string` | Yes |  |
| `status_expiration` | `number` | No |  |
| `status_text` | `string` | Yes |  |
| `status_text_canonical` | `null | string` | No |  |
| `team` | `string` | No |  |
| `title` | `string` | Yes |  |
| `updated` | `number` | No |  |
| `user_id` | `string` | No |  |
| `username` | `null | string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Usersprofile().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Usersprofile().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsersprofileEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewEntity

```ts
const view = client.View()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.View().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ workflow_step_edit_id: 'workflow_step_edit_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `SlackSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new SlackSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

