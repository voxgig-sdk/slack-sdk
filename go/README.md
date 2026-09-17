# Slack Golang SDK



The Golang SDK for the Slack API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Adminapp(nil)` — each with the same small set of operations (`List`, `Load`, `Create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/slack-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/slack-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/slack-sdk/go=../slack-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/slack-sdk/go"
)

func main() {
    client := sdk.NewSlackSDK(map[string]any{
        "apikey": os.Getenv("SLACK_APIKEY"),
    })

    // Create a adminapp.
    created, err := client.Adminapp(nil).Create(map[string]any{"ok": true}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
adminteam, err := client.Adminteam(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = adminteam
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

adminteam, err := client.Adminteam(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(adminteam) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewSlackSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewSlackSDK

```go
func NewSlackSDK(options map[string]any) *SlackSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *SlackSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### SlackSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Adminapp` | `(data map[string]any) SlackEntity` | Create an Adminapp entity instance. |
| `Adminappsapproved` | `(data map[string]any) SlackEntity` | Create an Adminappsapproved entity instance. |
| `Adminappsrequest` | `(data map[string]any) SlackEntity` | Create an Adminappsrequest entity instance. |
| `Adminappsrestricted` | `(data map[string]any) SlackEntity` | Create an Adminappsrestricted entity instance. |
| `Adminconversation` | `(data map[string]any) SlackEntity` | Create an Adminconversation entity instance. |
| `Adminconversationsekm` | `(data map[string]any) SlackEntity` | Create an Adminconversationsekm entity instance. |
| `AdminconversationsrestrictAccess` | `(data map[string]any) SlackEntity` | Create an AdminconversationsrestrictAccess entity instance. |
| `Adminemoji` | `(data map[string]any) SlackEntity` | Create an Adminemoji entity instance. |
| `AdmininviteRequest` | `(data map[string]any) SlackEntity` | Create an AdmininviteRequest entity instance. |
| `AdmininviteRequestsapproved` | `(data map[string]any) SlackEntity` | Create an AdmininviteRequestsapproved entity instance. |
| `AdmininviteRequestsdenied` | `(data map[string]any) SlackEntity` | Create an AdmininviteRequestsdenied entity instance. |
| `Adminteam` | `(data map[string]any) SlackEntity` | Create an Adminteam entity instance. |
| `Adminteamsadmin` | `(data map[string]any) SlackEntity` | Create an Adminteamsadmin entity instance. |
| `Adminteamsowner` | `(data map[string]any) SlackEntity` | Create an Adminteamsowner entity instance. |
| `Adminteamssetting` | `(data map[string]any) SlackEntity` | Create an Adminteamssetting entity instance. |
| `Adminuser` | `(data map[string]any) SlackEntity` | Create an Adminuser entity instance. |
| `Adminusergroup` | `(data map[string]any) SlackEntity` | Create an Adminusergroup entity instance. |
| `Adminuserssession` | `(data map[string]any) SlackEntity` | Create an Adminuserssession entity instance. |
| `Api` | `(data map[string]any) SlackEntity` | Create an Api entity instance. |
| `App` | `(data map[string]any) SlackEntity` | Create an App entity instance. |
| `Appseventauthorization` | `(data map[string]any) SlackEntity` | Create an Appseventauthorization entity instance. |
| `Appspermission` | `(data map[string]any) SlackEntity` | Create an Appspermission entity instance. |
| `Appspermissionsresource` | `(data map[string]any) SlackEntity` | Create an Appspermissionsresource entity instance. |
| `Appspermissionsscope` | `(data map[string]any) SlackEntity` | Create an Appspermissionsscope entity instance. |
| `Appspermissionsuser` | `(data map[string]any) SlackEntity` | Create an Appspermissionsuser entity instance. |
| `Auth` | `(data map[string]any) SlackEntity` | Create an Auth entity instance. |
| `Bot` | `(data map[string]any) SlackEntity` | Create a Bot entity instance. |
| `Call` | `(data map[string]any) SlackEntity` | Create a Call entity instance. |
| `Callsparticipant` | `(data map[string]any) SlackEntity` | Create a Callsparticipant entity instance. |
| `Chat` | `(data map[string]any) SlackEntity` | Create a Chat entity instance. |
| `ChatscheduledMessage` | `(data map[string]any) SlackEntity` | Create a ChatscheduledMessage entity instance. |
| `Conversation` | `(data map[string]any) SlackEntity` | Create a Conversation entity instance. |
| `Dialog` | `(data map[string]any) SlackEntity` | Create a Dialog entity instance. |
| `Dnd` | `(data map[string]any) SlackEntity` | Create a Dnd entity instance. |
| `Emoji` | `(data map[string]any) SlackEntity` | Create an Emoji entity instance. |
| `File` | `(data map[string]any) SlackEntity` | Create a File entity instance. |
| `Filescomment` | `(data map[string]any) SlackEntity` | Create a Filescomment entity instance. |
| `Filesremote` | `(data map[string]any) SlackEntity` | Create a Filesremote entity instance. |
| `Migration` | `(data map[string]any) SlackEntity` | Create a Migration entity instance. |
| `Oauth` | `(data map[string]any) SlackEntity` | Create an Oauth entity instance. |
| `Oauthv2` | `(data map[string]any) SlackEntity` | Create an Oauthv2 entity instance. |
| `Pin` | `(data map[string]any) SlackEntity` | Create a Pin entity instance. |
| `Reaction` | `(data map[string]any) SlackEntity` | Create a Reaction entity instance. |
| `Reminder` | `(data map[string]any) SlackEntity` | Create a Reminder entity instance. |
| `Rtm` | `(data map[string]any) SlackEntity` | Create a Rtm entity instance. |
| `Search` | `(data map[string]any) SlackEntity` | Create a Search entity instance. |
| `Star` | `(data map[string]any) SlackEntity` | Create a Star entity instance. |
| `Team` | `(data map[string]any) SlackEntity` | Create a Team entity instance. |
| `Teamprofile` | `(data map[string]any) SlackEntity` | Create a Teamprofile entity instance. |
| `User` | `(data map[string]any) SlackEntity` | Create an User entity instance. |
| `Usergroup` | `(data map[string]any) SlackEntity` | Create an Usergroup entity instance. |
| `Usergroupsuser` | `(data map[string]any) SlackEntity` | Create an Usergroupsuser entity instance. |
| `Usersprofile` | `(data map[string]any) SlackEntity` | Create an Usersprofile entity instance. |
| `View` | `(data map[string]any) SlackEntity` | Create a View entity instance. |
| `Workflow` | `(data map[string]any) SlackEntity` | Create a Workflow entity instance. |

### Entity interface (SlackEntity)

All entities implement the `SlackEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    adminapp, err := client.Adminapp(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // adminapp is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Adminapp

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create.

API path: `/admin.apps.approve`

#### Adminappsapproved

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.apps.approved.list`

#### Adminappsrequest

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.apps.requests.list`

#### Adminappsrestricted

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.apps.restricted.list`

#### Adminconversation

| Field | Description |
| --- | --- |
| `"accepted_user"` |  |
| `"can_thread"` |  |
| `"channel_id"` |  |
| `"created"` |  |
| `"creator"` |  |
| `"id"` |  |
| `"is_archived"` |  |
| `"is_channel"` |  |
| `"is_frozen"` |  |
| `"is_general"` |  |
| `"is_member"` |  |
| `"is_moved"` |  |
| `"is_mpim"` |  |
| `"is_non_threadable"` |  |
| `"is_org_shared"` |  |
| `"is_pending_ext_shared"` |  |
| `"is_private"` |  |
| `"is_read_only"` |  |
| `"is_shared"` |  |
| `"is_thread_only"` |  |
| `"last_read"` |  |
| `"latest"` |  |
| `"members"` |  |
| `"name"` |  |
| `"name_normalized"` |  |
| `"num_members"` |  |
| `"ok"` |  |
| `"pending_shared"` |  |
| `"previous_names"` |  |
| `"priority"` |  |
| `"purpose"` |  |
| `"response_metadata"` |  |
| `"team_ids"` |  |
| `"topic"` |  |
| `"unlinked"` |  |
| `"unread_count"` |  |
| `"unread_count_display"` |  |
| `"who_can_post"` |  |

Operations: Create, List, Load.

API path: `/admin.conversations.create`

#### Adminconversationsekm

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.conversations.ekm.listOriginalConnectedChannelInfo`

#### AdminconversationsrestrictAccess

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.conversations.restrictAccess.addGroup`

#### Adminemoji

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.emoji.addAlias`

#### AdmininviteRequest

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.inviteRequests.approve`

#### AdmininviteRequestsapproved

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.inviteRequests.approved.list`

#### AdmininviteRequestsdenied

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.inviteRequests.denied.list`

#### Adminteam

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.teams.create`

#### Adminteamsadmin

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.teams.admins.list`

#### Adminteamsowner

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/admin.teams.owners.list`

#### Adminteamssetting

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.teams.settings.setDefaultChannels`

#### Adminuser

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.users.invite`

#### Adminusergroup

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/admin.usergroups.addTeams`

#### Adminuserssession

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create.

API path: `/admin.users.session.reset`

#### Api

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/api.test`

#### App

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/apps.uninstall`

#### Appseventauthorization

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/apps.event.authorizations.list`

#### Appspermission

| Field | Description |
| --- | --- |
| `"app_home"` |  |
| `"channel"` |  |
| `"group"` |  |
| `"im"` |  |
| `"mpim"` |  |
| `"ok"` |  |
| `"team"` |  |

Operations: Load.

API path: `/apps.permissions.request`

#### Appspermissionsresource

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"type"` |  |

Operations: List.

API path: `/apps.permissions.resources.list`

#### Appspermissionsscope

| Field | Description |
| --- | --- |
| `"app_home"` |  |
| `"channel"` |  |
| `"group"` |  |
| `"im"` |  |
| `"mpim"` |  |
| `"team"` |  |
| `"user"` |  |

Operations: Load.

API path: `/apps.permissions.scopes.list`

#### Appspermissionsuser

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/apps.permissions.users.request`

#### Auth

| Field | Description |
| --- | --- |
| `"bot_id"` |  |
| `"is_enterprise_install"` |  |
| `"ok"` |  |
| `"revoked"` |  |
| `"team"` |  |
| `"team_id"` |  |
| `"url"` |  |
| `"user"` |  |
| `"user_id"` |  |

Operations: Load.

API path: `/auth.revoke`

#### Bot

| Field | Description |
| --- | --- |
| `"app_id"` |  |
| `"deleted"` |  |
| `"icons"` |  |
| `"id"` |  |
| `"name"` |  |
| `"updated"` |  |
| `"user_id"` |  |

Operations: Load.

API path: `/bots.info`

#### Call

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/calls.add`

#### Callsparticipant

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create.

API path: `/calls.participants.add`

#### Chat

| Field | Description |
| --- | --- |
| `"attachments"` |  |
| `"blocks"` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `"bot_id"` |  |
| `"bot_profile"` |  |
| `"channel"` |  |
| `"client_msg_id"` |  |
| `"comment"` |  |
| `"display_as_bot"` |  |
| `"file"` |  |
| `"files"` |  |
| `"icons"` |  |
| `"inviter"` |  |
| `"is_delayed_message"` |  |
| `"is_intro"` |  |
| `"is_starred"` |  |
| `"last_read"` |  |
| `"latest_reply"` |  |
| `"message_ts"` |  |
| `"name"` |  |
| `"ok"` |  |
| `"old_name"` |  |
| `"parent_user_id"` |  |
| `"permalink"` |  |
| `"pinned_to"` |  |
| `"purpose"` |  |
| `"reactions"` |  |
| `"reply_count"` |  |
| `"reply_users"` |  |
| `"reply_users_count"` |  |
| `"source_team"` |  |
| `"subscribed"` |  |
| `"subtype"` |  |
| `"team"` |  |
| `"text"` |  |
| `"thread_ts"` |  |
| `"topic"` |  |
| `"ts"` |  |
| `"type"` |  |
| `"unread_count"` |  |
| `"upload"` |  |
| `"user"` |  |
| `"user_profile"` |  |
| `"user_team"` |  |
| `"username"` |  |

Operations: Create, Load.

API path: `/chat.postMessage`

#### ChatscheduledMessage

| Field | Description |
| --- | --- |
| `"channel_id"` |  |
| `"date_created"` |  |
| `"id"` |  |
| `"post_at"` |  |
| `"text"` |  |

Operations: List.

API path: `/chat.scheduledMessages.list`

#### Conversation

| Field | Description |
| --- | --- |
| `"already_closed"` |  |
| `"already_open"` |  |
| `"attachments"` |  |
| `"blocks"` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `"bot_id"` |  |
| `"bot_profile"` |  |
| `"channel"` |  |
| `"channels"` |  |
| `"client_msg_id"` |  |
| `"comment"` |  |
| `"display_as_bot"` |  |
| `"file"` |  |
| `"files"` |  |
| `"has_more"` |  |
| `"icons"` |  |
| `"inviter"` |  |
| `"is_delayed_message"` |  |
| `"is_intro"` |  |
| `"is_starred"` |  |
| `"last_read"` |  |
| `"latest_reply"` |  |
| `"members"` |  |
| `"messages"` |  |
| `"name"` |  |
| `"no_op"` |  |
| `"not_in_channel"` |  |
| `"ok"` |  |
| `"old_name"` |  |
| `"parent_user_id"` |  |
| `"permalink"` |  |
| `"pinned_to"` |  |
| `"purpose"` |  |
| `"reactions"` |  |
| `"reply_count"` |  |
| `"reply_users"` |  |
| `"reply_users_count"` |  |
| `"response_metadata"` |  |
| `"source_team"` |  |
| `"subscribed"` |  |
| `"subtype"` |  |
| `"team"` |  |
| `"text"` |  |
| `"thread_ts"` |  |
| `"topic"` |  |
| `"ts"` |  |
| `"type"` |  |
| `"unread_count"` |  |
| `"upload"` |  |
| `"user"` |  |
| `"user_profile"` |  |
| `"user_team"` |  |
| `"username"` |  |
| `"warning"` |  |

Operations: Create, List, Load.

API path: `/conversations.open`

#### Dialog

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/dialog.open`

#### Dnd

| Field | Description |
| --- | --- |
| `"dnd_enabled"` |  |
| `"next_dnd_end_ts"` |  |
| `"next_dnd_start_ts"` |  |
| `"ok"` |  |
| `"snooze_enabled"` |  |
| `"snooze_endtime"` |  |
| `"snooze_remaining"` |  |

Operations: Create, Load.

API path: `/dnd.setSnooze`

#### Emoji

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/emoji.list`

#### File

| Field | Description |
| --- | --- |
| `"channels"` |  |
| `"comments"` |  |
| `"comments_count"` |  |
| `"content_html"` |  |
| `"created"` |  |
| `"date_delete"` |  |
| `"display_as_bot"` |  |
| `"editable"` |  |
| `"editor"` |  |
| `"external_id"` |  |
| `"external_type"` |  |
| `"external_url"` |  |
| `"file"` |  |
| `"filetype"` |  |
| `"groups"` |  |
| `"has_rich_preview"` |  |
| `"id"` |  |
| `"image_exif_rotation"` |  |
| `"ims"` |  |
| `"is_external"` |  |
| `"is_public"` |  |
| `"is_starred"` |  |
| `"is_tombstoned"` |  |
| `"last_editor"` |  |
| `"mimetype"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"non_owner_editable"` |  |
| `"num_stars"` |  |
| `"ok"` |  |
| `"original_h"` |  |
| `"original_w"` |  |
| `"paging"` |  |
| `"permalink"` |  |
| `"permalink_public"` |  |
| `"pinned_info"` |  |
| `"pinned_to"` |  |
| `"pretty_type"` |  |
| `"preview"` |  |
| `"public_url_shared"` |  |
| `"reactions"` |  |
| `"response_metadata"` |  |
| `"shares"` |  |
| `"size"` |  |
| `"source_team"` |  |
| `"state"` |  |
| `"thumb_1024"` |  |
| `"thumb_1024_h"` |  |
| `"thumb_1024_w"` |  |
| `"thumb_160"` |  |
| `"thumb_360"` |  |
| `"thumb_360_h"` |  |
| `"thumb_360_w"` |  |
| `"thumb_480"` |  |
| `"thumb_480_h"` |  |
| `"thumb_480_w"` |  |
| `"thumb_64"` |  |
| `"thumb_720"` |  |
| `"thumb_720_h"` |  |
| `"thumb_720_w"` |  |
| `"thumb_80"` |  |
| `"thumb_800"` |  |
| `"thumb_800_h"` |  |
| `"thumb_800_w"` |  |
| `"thumb_960"` |  |
| `"thumb_960_h"` |  |
| `"thumb_960_w"` |  |
| `"thumb_tiny"` |  |
| `"timestamp"` |  |
| `"title"` |  |
| `"updated"` |  |
| `"url_private"` |  |
| `"url_private_download"` |  |
| `"user"` |  |
| `"user_team"` |  |
| `"username"` |  |

Operations: Create, List.

API path: `/files.upload`

#### Filescomment

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create.

API path: `/files.comments.delete`

#### Filesremote

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Create, Load.

API path: `/files.remote.update`

#### Migration

| Field | Description |
| --- | --- |
| `"enterprise_id"` |  |
| `"invalid_user_ids"` |  |
| `"ok"` |  |
| `"team_id"` |  |
| `"user_id_map"` |  |

Operations: List.

API path: `/migration.exchange`

#### Oauth

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/oauth.access`

#### Oauthv2

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/oauth.v2.access`

#### Pin

| Field | Description |
| --- | --- |
| `"items"` |  |
| `"ok"` |  |

Operations: Create, Load.

API path: `/pins.add`

#### Reaction

| Field | Description |
| --- | --- |
| `"file"` |  |
| `"items"` |  |
| `"ok"` |  |
| `"paging"` |  |
| `"response_metadata"` |  |
| `"type"` |  |

Operations: Create, List, Load.

API path: `/reactions.remove`

#### Reminder

| Field | Description |
| --- | --- |
| `"complete_ts"` |  |
| `"creator"` |  |
| `"id"` |  |
| `"ok"` |  |
| `"recurring"` |  |
| `"text"` |  |
| `"time"` |  |
| `"user"` |  |

Operations: Create, List, Load.

API path: `/reminders.add`

#### Rtm

| Field | Description |
| --- | --- |
| `"ok"` |  |
| `"self"` |  |
| `"team"` |  |
| `"url"` |  |

Operations: Load.

API path: `/rtm.connect`

#### Search

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/search.messages`

#### Star

| Field | Description |
| --- | --- |
| `"items"` |  |
| `"ok"` |  |
| `"paging"` |  |

Operations: Create, List.

API path: `/stars.add`

#### Team

| Field | Description |
| --- | --- |
| `"admin_app_id"` |  |
| `"app_id"` |  |
| `"app_type"` |  |
| `"archived"` |  |
| `"avatar_base_url"` |  |
| `"change_type"` |  |
| `"channel"` |  |
| `"count"` |  |
| `"country"` |  |
| `"created"` |  |
| `"date"` |  |
| `"date_create"` |  |
| `"date_first"` |  |
| `"date_last"` |  |
| `"deleted"` |  |
| `"description"` |  |
| `"discoverable"` |  |
| `"domain"` |  |
| `"email_domain"` |  |
| `"enterprise_id"` |  |
| `"enterprise_name"` |  |
| `"external_org_migrations"` |  |
| `"has_compliance_export"` |  |
| `"icon"` |  |
| `"id"` |  |
| `"ip"` |  |
| `"is_assigned"` |  |
| `"is_enterprise"` |  |
| `"is_over_storage_limit"` |  |
| `"isp"` |  |
| `"limit_ts"` |  |
| `"locale"` |  |
| `"messages_count"` |  |
| `"msg_edit_window_mins"` |  |
| `"name"` |  |
| `"ok"` |  |
| `"over_integrations_limit"` |  |
| `"over_storage_limit"` |  |
| `"pay_prod_cur"` |  |
| `"plan"` |  |
| `"primary_owner"` |  |
| `"region"` |  |
| `"scope"` |  |
| `"service_id"` |  |
| `"service_type"` |  |
| `"sso_provider"` |  |
| `"user_agent"` |  |
| `"user_id"` |  |
| `"user_name"` |  |
| `"username"` |  |

Operations: List, Load.

API path: `/team.integrationLogs`

#### Teamprofile

| Field | Description |
| --- | --- |
| `"fields"` |  |

Operations: Load.

API path: `/team.profile.get`

#### User

| Field | Description |
| --- | --- |
| `"auto_away"` |  |
| `"avatar_hash"` |  |
| `"cache_ts"` |  |
| `"channels"` |  |
| `"connection_count"` |  |
| `"image_1024"` |  |
| `"image_192"` |  |
| `"image_24"` |  |
| `"image_32"` |  |
| `"image_48"` |  |
| `"image_512"` |  |
| `"image_72"` |  |
| `"image_original"` |  |
| `"last_activity"` |  |
| `"manual_away"` |  |
| `"members"` |  |
| `"ok"` |  |
| `"online"` |  |
| `"presence"` |  |
| `"response_metadata"` |  |
| `"team"` |  |
| `"user"` |  |

Operations: Create, List, Load.

API path: `/users.setPhoto`

#### Usergroup

| Field | Description |
| --- | --- |
| `"auto_provision"` |  |
| `"auto_type"` |  |
| `"channel_count"` |  |
| `"created_by"` |  |
| `"date_create"` |  |
| `"date_delete"` |  |
| `"date_update"` |  |
| `"deleted_by"` |  |
| `"description"` |  |
| `"enterprise_subteam_id"` |  |
| `"handle"` |  |
| `"id"` |  |
| `"is_external"` |  |
| `"is_subteam"` |  |
| `"is_usergroup"` |  |
| `"name"` |  |
| `"prefs"` |  |
| `"team_id"` |  |
| `"updated_by"` |  |
| `"user_count"` |  |
| `"users"` |  |

Operations: Create, List.

API path: `/usergroups.update`

#### Usergroupsuser

| Field | Description |
| --- | --- |
| `"auto_provision"` |  |
| `"auto_type"` |  |
| `"channel_count"` |  |
| `"created_by"` |  |
| `"date_create"` |  |
| `"date_delete"` |  |
| `"date_update"` |  |
| `"deleted_by"` |  |
| `"description"` |  |
| `"enterprise_subteam_id"` |  |
| `"handle"` |  |
| `"id"` |  |
| `"is_external"` |  |
| `"is_subteam"` |  |
| `"is_usergroup"` |  |
| `"name"` |  |
| `"ok"` |  |
| `"prefs"` |  |
| `"team_id"` |  |
| `"updated_by"` |  |
| `"user_count"` |  |
| `"users"` |  |

Operations: Create, List.

API path: `/usergroups.users.update`

#### Usersprofile

| Field | Description |
| --- | --- |
| `"always_active"` |  |
| `"api_app_id"` |  |
| `"avatar_hash"` |  |
| `"bot_id"` |  |
| `"display_name"` |  |
| `"display_name_normalized"` |  |
| `"email"` |  |
| `"fields"` |  |
| `"first_name"` |  |
| `"guest_expiration_ts"` |  |
| `"guest_invited_by"` |  |
| `"image_1024"` |  |
| `"image_192"` |  |
| `"image_24"` |  |
| `"image_32"` |  |
| `"image_48"` |  |
| `"image_512"` |  |
| `"image_72"` |  |
| `"image_original"` |  |
| `"is_app_user"` |  |
| `"is_custom_image"` |  |
| `"is_restricted"` |  |
| `"is_ultra_restricted"` |  |
| `"last_avatar_image_hash"` |  |
| `"last_name"` |  |
| `"memberships_count"` |  |
| `"name"` |  |
| `"phone"` |  |
| `"pronouns"` |  |
| `"real_name"` |  |
| `"real_name_normalized"` |  |
| `"skype"` |  |
| `"status_default_emoji"` |  |
| `"status_default_text"` |  |
| `"status_default_text_canonical"` |  |
| `"status_emoji"` |  |
| `"status_expiration"` |  |
| `"status_text"` |  |
| `"status_text_canonical"` |  |
| `"team"` |  |
| `"title"` |  |
| `"updated"` |  |
| `"user_id"` |  |
| `"username"` |  |

Operations: Create, Load.

API path: `/users.profile.set`

#### View

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/views.update`

#### Workflow

| Field | Description |
| --- | --- |
| `"ok"` |  |

Operations: Load.

API path: `/workflows.updateStep`



## Entities


### Adminapp

Create an instance: `adminapp := client.Adminapp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```go
result, err := client.Adminapp(nil).Create(map[string]any{
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Adminappsapproved

Create an instance: `adminappsapproved := client.Adminappsapproved(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminappsapproved, err := client.Adminappsapproved(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminappsapproved) // the loaded record
```


### Adminappsrequest

Create an instance: `adminappsrequest := client.Adminappsrequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminappsrequest, err := client.Adminappsrequest(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminappsrequest) // the loaded record
```


### Adminappsrestricted

Create an instance: `adminappsrestricted := client.Adminappsrestricted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminappsrestricted, err := client.Adminappsrestricted(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminappsrestricted) // the loaded record
```


### Adminconversation

Create an instance: `adminconversation := client.Adminconversation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted_user` | `string` |  |
| `can_thread` | `map[string]any` |  |
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
| `latest` | `any` |  |
| `members` | `[]any` |  |
| `name` | `string` |  |
| `name_normalized` | `string` |  |
| `num_members` | `int` |  |
| `ok` | `bool` |  |
| `pending_shared` | `[]any` |  |
| `previous_names` | `[]any` |  |
| `priority` | `float64` |  |
| `purpose` | `map[string]any` |  |
| `response_metadata` | `map[string]any` |  |
| `team_ids` | `[]any` |  |
| `topic` | `map[string]any` |  |
| `unlinked` | `int` |  |
| `unread_count` | `int` |  |
| `unread_count_display` | `int` |  |
| `who_can_post` | `map[string]any` |  |

#### Example: Load

```go
adminconversation, err := client.Adminconversation(nil).Load(map[string]any{"channel_id": "channel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminconversation) // the loaded record
```

#### Example: List

```go
adminconversations, err := client.Adminconversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminconversations) // the array of records
```

#### Example: Create

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


### Adminconversationsekm

Create an instance: `adminconversationsekm := client.Adminconversationsekm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminconversationsekm, err := client.Adminconversationsekm(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminconversationsekm) // the loaded record
```


### AdminconversationsrestrictAccess

Create an instance: `adminconversationsrestrictAccess := client.AdminconversationsrestrictAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminconversationsrestrictAccess, err := client.AdminconversationsrestrictAccess(nil).Load(map[string]any{"channel_id": "channel_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminconversationsrestrictAccess) // the loaded record
```

#### Example: Create

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


### Adminemoji

Create an instance: `adminemoji := client.Adminemoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminemoji, err := client.Adminemoji(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminemoji) // the loaded record
```

#### Example: Create

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


### AdmininviteRequest

Create an instance: `admininviteRequest := client.AdmininviteRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
admininviteRequest, err := client.AdmininviteRequest(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(admininviteRequest) // the loaded record
```

#### Example: Create

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


### AdmininviteRequestsapproved

Create an instance: `admininviteRequestsapproved := client.AdmininviteRequestsapproved(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
admininviteRequestsapproved, err := client.AdmininviteRequestsapproved(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(admininviteRequestsapproved) // the loaded record
```


### AdmininviteRequestsdenied

Create an instance: `admininviteRequestsdenied := client.AdmininviteRequestsdenied(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
admininviteRequestsdenied, err := client.AdmininviteRequestsdenied(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(admininviteRequestsdenied) // the loaded record
```


### Adminteam

Create an instance: `adminteam := client.Adminteam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminteam, err := client.Adminteam(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminteam) // the loaded record
```

#### Example: Create

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


### Adminteamsadmin

Create an instance: `adminteamsadmin := client.Adminteamsadmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminteamsadmin, err := client.Adminteamsadmin(nil).Load(map[string]any{"team_id": "team_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminteamsadmin) // the loaded record
```


### Adminteamsowner

Create an instance: `adminteamsowner := client.Adminteamsowner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminteamsowner, err := client.Adminteamsowner(nil).Load(map[string]any{"team_id": "team_id", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminteamsowner) // the loaded record
```


### Adminteamssetting

Create an instance: `adminteamssetting := client.Adminteamssetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminteamssetting, err := client.Adminteamssetting(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminteamssetting) // the loaded record
```

#### Example: Create

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


### Adminuser

Create an instance: `adminuser := client.Adminuser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminuser, err := client.Adminuser(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminuser) // the loaded record
```

#### Example: Create

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


### Adminusergroup

Create an instance: `adminusergroup := client.Adminusergroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
adminusergroup, err := client.Adminusergroup(nil).Load(map[string]any{"usergroup_id": "usergroup_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(adminusergroup) // the loaded record
```

#### Example: Create

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


### Adminuserssession

Create an instance: `adminuserssession := client.Adminuserssession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

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


### Api

Create an instance: `api := client.Api(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
api, err := client.Api(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(api) // the loaded record
```


### App

Create an instance: `app := client.App(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
app, err := client.App(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(app) // the loaded record
```


### Appseventauthorization

Create an instance: `appseventauthorization := client.Appseventauthorization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
appseventauthorization, err := client.Appseventauthorization(nil).Load(map[string]any{"event_context": "event_context"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(appseventauthorization) // the loaded record
```


### Appspermission

Create an instance: `appspermission := client.Appspermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `map[string]any` |  |
| `channel` | `map[string]any` |  |
| `group` | `map[string]any` |  |
| `im` | `map[string]any` |  |
| `mpim` | `map[string]any` |  |
| `ok` | `bool` |  |
| `team` | `map[string]any` |  |

#### Example: Load

```go
appspermission, err := client.Appspermission(nil).Load(map[string]any{"scope": "scope", "token": "token", "trigger_id": "trigger_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(appspermission) // the loaded record
```


### Appspermissionsresource

Create an instance: `appspermissionsresource := client.Appspermissionsresource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `type` | `string` |  |

#### Example: List

```go
appspermissionsresources, err := client.Appspermissionsresource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(appspermissionsresources) // the array of records
```


### Appspermissionsscope

Create an instance: `appspermissionsscope := client.Appspermissionsscope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_home` | `[]any` |  |
| `channel` | `[]any` |  |
| `group` | `[]any` |  |
| `im` | `[]any` |  |
| `mpim` | `[]any` |  |
| `team` | `[]any` |  |
| `user` | `[]any` |  |

#### Example: Load

```go
appspermissionsscope, err := client.Appspermissionsscope(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(appspermissionsscope) // the loaded record
```


### Appspermissionsuser

Create an instance: `appspermissionsuser := client.Appspermissionsuser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
appspermissionsuser, err := client.Appspermissionsuser(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(appspermissionsuser) // the loaded record
```


### Auth

Create an instance: `auth := client.Auth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
auth, err := client.Auth(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(auth) // the loaded record
```


### Bot

Create an instance: `bot := client.Bot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `string` |  |
| `deleted` | `bool` |  |
| `icons` | `map[string]any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated` | `int` |  |
| `user_id` | `string` |  |

#### Example: Load

```go
bot, err := client.Bot(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(bot) // the loaded record
```


### Call

Create an instance: `call := client.Call(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
call, err := client.Call(nil).Load(map[string]any{"id": "call_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(call) // the loaded record
```

#### Example: Create

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


### Callsparticipant

Create an instance: `callsparticipant := client.Callsparticipant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

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


### Chat

Create an instance: `chat := client.Chat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `[]any` |  |
| `blocks` | `[]any` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `map[string]any` |  |
| `channel` | `string` |  |
| `client_msg_id` | `string` |  |
| `comment` | `map[string]any` |  |
| `display_as_bot` | `bool` |  |
| `file` | `map[string]any` |  |
| `files` | `[]any` |  |
| `icons` | `map[string]any` |  |
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
| `pinned_to` | `[]any` |  |
| `purpose` | `string` |  |
| `reactions` | `[]any` |  |
| `reply_count` | `int` |  |
| `reply_users` | `[]any` |  |
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
| `user_profile` | `map[string]any` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```go
chat, err := client.Chat(nil).Load(map[string]any{"channel": "channel", "message_t": "message_t", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(chat) // the loaded record
```

#### Example: Create

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


### ChatscheduledMessage

Create an instance: `chatscheduledMessage := client.ChatscheduledMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel_id` | `string` |  |
| `date_created` | `int` |  |
| `id` | `string` |  |
| `post_at` | `int` |  |
| `text` | `string` |  |

#### Example: List

```go
chatscheduledMessages, err := client.ChatscheduledMessage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(chatscheduledMessages) // the array of records
```


### Conversation

Create an instance: `conversation := client.Conversation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `already_closed` | `bool` |  |
| `already_open` | `bool` |  |
| `attachments` | `[]any` |  |
| `blocks` | `[]any` | This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace. |
| `bot_id` | `string` |  |
| `bot_profile` | `map[string]any` |  |
| `channel` | `any` |  |
| `channels` | `[]any` |  |
| `client_msg_id` | `string` |  |
| `comment` | `map[string]any` |  |
| `display_as_bot` | `bool` |  |
| `file` | `map[string]any` |  |
| `files` | `[]any` |  |
| `has_more` | `bool` |  |
| `icons` | `map[string]any` |  |
| `inviter` | `string` |  |
| `is_delayed_message` | `bool` |  |
| `is_intro` | `bool` |  |
| `is_starred` | `bool` |  |
| `last_read` | `string` |  |
| `latest_reply` | `string` |  |
| `members` | `[]any` |  |
| `messages` | `[]any` |  |
| `name` | `string` |  |
| `no_op` | `bool` |  |
| `not_in_channel` | `bool` |  |
| `ok` | `bool` |  |
| `old_name` | `string` |  |
| `parent_user_id` | `string` |  |
| `permalink` | `string` |  |
| `pinned_to` | `[]any` |  |
| `purpose` | `string` |  |
| `reactions` | `[]any` |  |
| `reply_count` | `int` |  |
| `reply_users` | `[]any` |  |
| `reply_users_count` | `int` |  |
| `response_metadata` | `map[string]any` |  |
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
| `user_profile` | `map[string]any` |  |
| `user_team` | `string` |  |
| `username` | `string` |  |
| `warning` | `string` |  |

#### Example: Load

```go
conversation, err := client.Conversation(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversation) // the loaded record
```

#### Example: List

```go
conversations, err := client.Conversation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(conversations) // the array of records
```

#### Example: Create

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


### Dialog

Create an instance: `dialog := client.Dialog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
dialog, err := client.Dialog(nil).Load(map[string]any{"dialog": "dialog", "trigger_id": "trigger_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dialog) // the loaded record
```


### Dnd

Create an instance: `dnd := client.Dnd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
dnd, err := client.Dnd(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dnd) // the loaded record
```

#### Example: Create

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


### Emoji

Create an instance: `emoji := client.Emoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
emoji, err := client.Emoji(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emoji) // the loaded record
```


### File

Create an instance: `file := client.File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channels` | `[]any` |  |
| `comments` | `[]any` |  |
| `comments_count` | `int` |  |
| `content_html` | `any` |  |
| `created` | `int` |  |
| `date_delete` | `int` |  |
| `display_as_bot` | `bool` |  |
| `editable` | `bool` |  |
| `editor` | `string` |  |
| `external_id` | `string` |  |
| `external_type` | `string` |  |
| `external_url` | `string` |  |
| `file` | `map[string]any` |  |
| `filetype` | `string` |  |
| `groups` | `[]any` |  |
| `has_rich_preview` | `bool` |  |
| `id` | `string` |  |
| `image_exif_rotation` | `int` |  |
| `ims` | `[]any` |  |
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
| `paging` | `map[string]any` |  |
| `permalink` | `string` |  |
| `permalink_public` | `string` |  |
| `pinned_info` | `map[string]any` |  |
| `pinned_to` | `[]any` |  |
| `pretty_type` | `string` |  |
| `preview` | `string` |  |
| `public_url_shared` | `bool` |  |
| `reactions` | `[]any` |  |
| `response_metadata` | `any` |  |
| `shares` | `map[string]any` |  |
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

```go
files, err := client.File(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(files) // the array of records
```

#### Example: Create

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


### Filescomment

Create an instance: `filescomment := client.Filescomment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Create

```go
result, err := client.Filescomment(nil).Create(map[string]any{
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Filesremote

Create an instance: `filesremote := client.Filesremote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
filesremote, err := client.Filesremote(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(filesremote) // the loaded record
```

#### Example: Create

```go
result, err := client.Filesremote(nil).Create(map[string]any{
    "ok": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Migration

Create an instance: `migration := client.Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enterprise_id` | `string` |  |
| `invalid_user_ids` | `[]any` |  |
| `ok` | `bool` |  |
| `team_id` | `string` |  |
| `user_id_map` | `map[string]any` |  |

#### Example: List

```go
migrations, err := client.Migration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(migrations) // the array of records
```


### Oauth

Create an instance: `oauth := client.Oauth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
oauth, err := client.Oauth(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(oauth) // the loaded record
```


### Oauthv2

Create an instance: `oauthv2 := client.Oauthv2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
oauthv2, err := client.Oauthv2(nil).Load(map[string]any{"code": "code"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oauthv2) // the loaded record
```


### Pin

Create an instance: `pin := client.Pin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `[]any` |  |
| `ok` | `bool` |  |

#### Example: Load

```go
pin, err := client.Pin(nil).Load(map[string]any{"channel": "channel", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pin) // the loaded record
```

#### Example: Create

```go
result, err := client.Pin(nil).Create(map[string]any{
    "channel": "example_channel",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Reaction

Create an instance: `reaction := client.Reaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `file` | `map[string]any` |  |
| `items` | `[]any` |  |
| `ok` | `bool` |  |
| `paging` | `map[string]any` |  |
| `response_metadata` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```go
reaction, err := client.Reaction(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reaction) // the loaded record
```

#### Example: List

```go
reactions, err := client.Reaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reactions) // the array of records
```

#### Example: Create

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


### Reminder

Create an instance: `reminder := client.Reminder(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
reminder, err := client.Reminder(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reminder) // the loaded record
```

#### Example: List

```go
reminders, err := client.Reminder(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reminders) // the array of records
```

#### Example: Create

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


### Rtm

Create an instance: `rtm := client.Rtm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |
| `self` | `map[string]any` |  |
| `team` | `map[string]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
rtm, err := client.Rtm(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rtm) // the loaded record
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
search, err := client.Search(nil).Load(map[string]any{"query": "query", "token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(search) // the loaded record
```


### Star

Create an instance: `star := client.Star(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `[]any` |  |
| `ok` | `bool` |  |
| `paging` | `map[string]any` |  |

#### Example: List

```go
stars, err := client.Star(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(stars) // the array of records
```

#### Example: Create

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


### Team

Create an instance: `team := client.Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `country` | `any` |  |
| `created` | `int` |  |
| `date` | `string` |  |
| `date_create` | `int` |  |
| `date_first` | `int` |  |
| `date_last` | `int` |  |
| `deleted` | `bool` |  |
| `description` | `any` |  |
| `discoverable` | `any` |  |
| `domain` | `string` |  |
| `email_domain` | `string` |  |
| `enterprise_id` | `string` |  |
| `enterprise_name` | `string` |  |
| `external_org_migrations` | `map[string]any` |  |
| `has_compliance_export` | `bool` |  |
| `icon` | `map[string]any` |  |
| `id` | `string` |  |
| `ip` | `any` |  |
| `is_assigned` | `bool` |  |
| `is_enterprise` | `int` |  |
| `is_over_storage_limit` | `bool` |  |
| `isp` | `any` |  |
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
| `primary_owner` | `map[string]any` |  |
| `region` | `any` |  |
| `scope` | `string` |  |
| `service_id` | `string` |  |
| `service_type` | `string` |  |
| `sso_provider` | `map[string]any` |  |
| `user_agent` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team) // the loaded record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teams) // the array of records
```


### Teamprofile

Create an instance: `teamprofile := client.Teamprofile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `[]any` |  |

#### Example: Load

```go
teamprofile, err := client.Teamprofile(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamprofile) // the loaded record
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_away` | `bool` |  |
| `avatar_hash` | `string` |  |
| `cache_ts` | `int` |  |
| `channels` | `[]any` |  |
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
| `members` | `[]any` |  |
| `ok` | `bool` |  |
| `online` | `bool` |  |
| `presence` | `string` |  |
| `response_metadata` | `map[string]any` |  |
| `team` | `map[string]any` |  |
| `user` | `any` |  |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```

#### Example: Create

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


### Usergroup

Create an instance: `usergroup := client.Usergroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `bool` |  |
| `auto_type` | `any` |  |
| `channel_count` | `int` |  |
| `created_by` | `string` |  |
| `date_create` | `int` |  |
| `date_delete` | `int` |  |
| `date_update` | `int` |  |
| `deleted_by` | `any` |  |
| `description` | `string` |  |
| `enterprise_subteam_id` | `string` |  |
| `handle` | `string` |  |
| `id` | `string` |  |
| `is_external` | `bool` |  |
| `is_subteam` | `bool` |  |
| `is_usergroup` | `bool` |  |
| `name` | `string` |  |
| `prefs` | `map[string]any` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `int` |  |
| `users` | `[]any` |  |

#### Example: List

```go
usergroups, err := client.Usergroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usergroups) // the array of records
```

#### Example: Create

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


### Usergroupsuser

Create an instance: `usergroupsuser := client.Usergroupsuser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_provision` | `bool` |  |
| `auto_type` | `any` |  |
| `channel_count` | `int` |  |
| `created_by` | `string` |  |
| `date_create` | `int` |  |
| `date_delete` | `int` |  |
| `date_update` | `int` |  |
| `deleted_by` | `any` |  |
| `description` | `string` |  |
| `enterprise_subteam_id` | `string` |  |
| `handle` | `string` |  |
| `id` | `string` |  |
| `is_external` | `bool` |  |
| `is_subteam` | `bool` |  |
| `is_usergroup` | `bool` |  |
| `name` | `string` |  |
| `ok` | `bool` |  |
| `prefs` | `map[string]any` |  |
| `team_id` | `string` |  |
| `updated_by` | `string` |  |
| `user_count` | `int` |  |
| `users` | `[]any` |  |

#### Example: List

```go
usergroupsusers, err := client.Usergroupsuser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usergroupsusers) // the array of records
```

#### Example: Create

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


### Usersprofile

Create an instance: `usersprofile := client.Usersprofile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `always_active` | `bool` |  |
| `api_app_id` | `string` |  |
| `avatar_hash` | `string` |  |
| `bot_id` | `string` |  |
| `display_name` | `string` |  |
| `display_name_normalized` | `string` |  |
| `email` | `any` |  |
| `fields` | `any` |  |
| `first_name` | `any` |  |
| `guest_expiration_ts` | `any` |  |
| `guest_invited_by` | `any` |  |
| `image_1024` | `any` |  |
| `image_192` | `any` |  |
| `image_24` | `any` |  |
| `image_32` | `any` |  |
| `image_48` | `any` |  |
| `image_512` | `any` |  |
| `image_72` | `any` |  |
| `image_original` | `any` |  |
| `is_app_user` | `bool` |  |
| `is_custom_image` | `bool` |  |
| `is_restricted` | `any` |  |
| `is_ultra_restricted` | `any` |  |
| `last_avatar_image_hash` | `string` |  |
| `last_name` | `any` |  |
| `memberships_count` | `int` |  |
| `name` | `any` |  |
| `phone` | `string` |  |
| `pronouns` | `string` |  |
| `real_name` | `string` |  |
| `real_name_normalized` | `string` |  |
| `skype` | `string` |  |
| `status_default_emoji` | `string` |  |
| `status_default_text` | `string` |  |
| `status_default_text_canonical` | `any` |  |
| `status_emoji` | `string` |  |
| `status_expiration` | `int` |  |
| `status_text` | `string` |  |
| `status_text_canonical` | `any` |  |
| `team` | `string` |  |
| `title` | `string` |  |
| `updated` | `int` |  |
| `user_id` | `string` |  |
| `username` | `any` |  |

#### Example: Load

```go
usersprofile, err := client.Usersprofile(nil).Load(map[string]any{"token": "token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(usersprofile) // the loaded record
```

#### Example: Create

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


### View

Create an instance: `view := client.View(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
view, err := client.View(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(view) // the loaded record
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"workflow_step_edit_id": "workflow_step_edit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/slack-sdk/go/
├── slack.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/slack-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
adminteam := client.Adminteam(nil)
adminteam.Load(nil, nil)

// adminteam.Data() now returns the adminteam data from the last load
// adminteam.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
