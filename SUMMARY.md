# Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 55 entities and 174 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Adminapp](docs/api/adminapp.html)

Results: Typical success response.

SDK operations: `create`.

### [Adminappsapproved](docs/api/adminappsapproved.html)

Results: Typical success response.

SDK operations: `load`.

### [Adminappsrequest](docs/api/adminappsrequest.html)

Results: Typical success response.

SDK operations: `load`.

### [Adminappsrestricted](docs/api/adminappsrestricted.html)

Results: Typical success response.

SDK operations: `load`.

### [Adminconversation](docs/api/adminconversation.html)

Results: Typical success response.

SDK operations: `create`, `list`, `load`.

### [Adminconversationsekm](docs/api/adminconversationsekm.html)

Results: Typical success response.

SDK operations: `load`.

### [AdminconversationsrestrictAccess](docs/api/adminconversationsrestrict_access.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Adminemoji](docs/api/adminemoji.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [AdmininviteRequest](docs/api/admininvite_request.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [AdmininviteRequestsapproved](docs/api/admininvite_requestsapproved.html)

Results: Typical success response.

SDK operations: `load`.

### [AdmininviteRequestsdenied](docs/api/admininvite_requestsdenied.html)

Results: Typical success response.

SDK operations: `load`.

### [Adminteam](docs/api/adminteam.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Adminteamsadmin](docs/api/adminteamsadmin.html)

Results: Typical success response.

SDK operations: `load`.

### [Adminteamsowner](docs/api/adminteamsowner.html)

Results: Typical success response.

SDK operations: `load`.

### [Adminteamssetting](docs/api/adminteamssetting.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Adminuser](docs/api/adminuser.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Adminusergroup](docs/api/adminusergroup.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Adminuserssession](docs/api/adminuserssession.html)

Results: Typical success response.

SDK operations: `create`.

### [Api](docs/api/api.html)

Results: Standard success response.

SDK operations: `load`.

### [App](docs/api/app.html)

Results: Typical success response.

SDK operations: `load`.

### [Appseventauthorization](docs/api/appseventauthorization.html)

Results: Typical success response.

SDK operations: `load`.

### [Appspermission](docs/api/appspermission.html)

Results: Standard success response when used with a user token.

SDK operations: `load`.

### [Appspermissionsresource](docs/api/appspermissionsresource.html)

Results: Typical successful paginated response.

SDK operations: `list`.

### [Appspermissionsscope](docs/api/appspermissionsscope.html)

Results: Typical successful paginated response.

SDK operations: `load`.

### [Appspermissionsuser](docs/api/appspermissionsuser.html)

Results: Standard success response when used with a user token; Typical successful paginated response.

SDK operations: `load`.

### [Auth](docs/api/auth.html)

Results: Typical success response; Standard success response when used with a user token.

SDK operations: `load`.

### [Bot](docs/api/bot.html)

Results: When successful, returns bot info by bot ID.

SDK operations: `load`.

### [Call](docs/api/call.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Callsparticipant](docs/api/callsparticipant.html)

Results: Typical success response.

SDK operations: `create`.

### [Chat](docs/api/chat.html)

Results: Typical success response; Typical, minimal success response; Standard success response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `blocks`: This is a very loose definition, in the future, we&#39;ll populate this with deeper schema in this definition namespace.

### [ChatscheduledMessage](docs/api/chatscheduled_message.html)

Results: Typical success response.

SDK operations: `list`.

### [Conversation](docs/api/conversation.html)

Results: Typical success response; Typical success response when an invitation is extended; If successful, the command returns a rather stark [conversation object](/types/conversation); Typical success response containing a channel&#39;s messages; Typical success response with only public channels; Typical paginated success response; Typical success response for a public channel. (Also, a response from a private channel and a multi-party IM is very similar to this example.).

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `blocks`: This is a very loose definition, in the future, we&#39;ll populate this with deeper schema in this definition namespace.

### [Dialog](docs/api/dialog.html)

Results: Typical success response is quite minimal.

SDK operations: `load`.

### [Dnd](docs/api/dnd.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Emoji](docs/api/emoji.html)

Results: Typical success response.

SDK operations: `load`.

### [File](docs/api/file.html)

Results: Success response after uploading a file to a channel with an initial message; Typical success response.

SDK operations: `create`, `list`.

### [Filescomment](docs/api/filescomment.html)

Results: Standard success response is very simple.

SDK operations: `create`.

### [Filesremote](docs/api/filesremote.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Migration](docs/api/migration.html)

Results: Typical success response when mappings exist for the specified user IDs.

SDK operations: `list`.

### [Oauth](docs/api/oauth.html)

Results: Successful user token negotiation for a single scope; Success example using a workspace app produces a very different kind of response.

SDK operations: `load`.

### [Oauthv2](docs/api/oauthv2.html)

Results: Successful token request with scopes for both a bot user and a user token.

SDK operations: `load`.

### [Pin](docs/api/pin.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [Reaction](docs/api/reaction.html)

Results: Typical success response.

SDK operations: `create`, `list`, `load`.

### [Reminder](docs/api/reminder.html)

Results: Typical success response.

SDK operations: `create`, `list`, `load`.

### [Rtm](docs/api/rtm.html)

Results: Typical success response.

SDK operations: `load`.

### [Search](docs/api/search.html)

Results: Typical success response.

SDK operations: `load`.

### [Star](docs/api/star.html)

Results: Typical success response.

SDK operations: `create`, `list`.

### [Team](docs/api/team.html)

Results: Typical success response; This response demonstrates pagination and two access log entries.

SDK operations: `list`, `load`.

### [Teamprofile](docs/api/teamprofile.html)

Results: Typical success response.

SDK operations: `load`.

### [User](docs/api/user.html)

Results: Typical success response; Typical success response with only public channels. Note how `num_members` and `is_member` are not returned like typical `conversations` objects.; When requesting information for a different user, this method just returns the current presence (either `active` or `away`).; You will receive at a minimum the following information:.

SDK operations: `create`, `list`, `load`.

### [Usergroup](docs/api/usergroup.html)

Results: Typical success response.

SDK operations: `create`, `list`.

### [Usergroupsuser](docs/api/usergroupsuser.html)

Results: Typical success response; Standard success response when used with a user token.

SDK operations: `create`, `list`.

### [Usersprofile](docs/api/usersprofile.html)

Results: Typical success response.

SDK operations: `create`, `load`.

### [View](docs/api/view.html)

Results: Typical success response includes the updated view payload.; Typical success response includes the published view payload.; Typical success response includes the opened view payload.; Typical success response includes the pushed view payload.

SDK operations: `load`.

### [Workflow](docs/api/workflow.html)

Results: Typical success response.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Adminapp](docs/api/adminapp.html) | `create` | `POST /admin.apps.approve` | Required |
| [Adminapp](docs/api/adminapp.html) | `create` | `POST /admin.apps.restrict` | Required |
| [Adminappsapproved](docs/api/adminappsapproved.html) | `load` | `GET /admin.apps.approved.list` | Required |
| [Adminappsrequest](docs/api/adminappsrequest.html) | `load` | `GET /admin.apps.requests.list` | Required |
| [Adminappsrestricted](docs/api/adminappsrestricted.html) | `load` | `GET /admin.apps.restricted.list` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.create` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.setTeams` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.disconnectShared` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.rename` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.setConversationPrefs` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.invite` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.archive` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.convertToPrivate` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.delete` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `create` | `POST /admin.conversations.unarchive` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `list` | `GET /admin.conversations.search` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `list` | `GET /admin.conversations.getTeams` | Required |
| [Adminconversation](docs/api/adminconversation.html) | `load` | `GET /admin.conversations.getConversationPrefs` | Required |
| [Adminconversationsekm](docs/api/adminconversationsekm.html) | `load` | `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo` | Required |
| [AdminconversationsrestrictAccess](docs/api/adminconversationsrestrict_access.html) | `create` | `POST /admin.conversations.restrictAccess.addGroup` | Required |
| [AdminconversationsrestrictAccess](docs/api/adminconversationsrestrict_access.html) | `create` | `POST /admin.conversations.restrictAccess.removeGroup` | Required |
| [AdminconversationsrestrictAccess](docs/api/adminconversationsrestrict_access.html) | `load` | `GET /admin.conversations.restrictAccess.listGroups` | Required |
| [Adminemoji](docs/api/adminemoji.html) | `create` | `POST /admin.emoji.addAlias` | Required |
| [Adminemoji](docs/api/adminemoji.html) | `create` | `POST /admin.emoji.rename` | Required |
| [Adminemoji](docs/api/adminemoji.html) | `create` | `POST /admin.emoji.add` | Required |
| [Adminemoji](docs/api/adminemoji.html) | `create` | `POST /admin.emoji.remove` | Required |
| [Adminemoji](docs/api/adminemoji.html) | `load` | `GET /admin.emoji.list` | Required |
| [AdmininviteRequest](docs/api/admininvite_request.html) | `create` | `POST /admin.inviteRequests.approve` | Required |
| [AdmininviteRequest](docs/api/admininvite_request.html) | `create` | `POST /admin.inviteRequests.deny` | Required |
| [AdmininviteRequest](docs/api/admininvite_request.html) | `load` | `GET /admin.inviteRequests.list` | Required |
| [AdmininviteRequestsapproved](docs/api/admininvite_requestsapproved.html) | `load` | `GET /admin.inviteRequests.approved.list` | Required |
| [AdmininviteRequestsdenied](docs/api/admininvite_requestsdenied.html) | `load` | `GET /admin.inviteRequests.denied.list` | Required |
| [Adminteam](docs/api/adminteam.html) | `create` | `POST /admin.teams.create` | Required |
| [Adminteam](docs/api/adminteam.html) | `load` | `GET /admin.teams.list` | Required |
| [Adminteamsadmin](docs/api/adminteamsadmin.html) | `load` | `GET /admin.teams.admins.list` | Required |
| [Adminteamsowner](docs/api/adminteamsowner.html) | `load` | `GET /admin.teams.owners.list` | Required |
| [Adminteamssetting](docs/api/adminteamssetting.html) | `create` | `POST /admin.teams.settings.setDefaultChannels` | Required |
| [Adminteamssetting](docs/api/adminteamssetting.html) | `create` | `POST /admin.teams.settings.setDescription` | Required |
| [Adminteamssetting](docs/api/adminteamssetting.html) | `create` | `POST /admin.teams.settings.setDiscoverability` | Required |
| [Adminteamssetting](docs/api/adminteamssetting.html) | `create` | `POST /admin.teams.settings.setIcon` | Required |
| [Adminteamssetting](docs/api/adminteamssetting.html) | `create` | `POST /admin.teams.settings.setName` | Required |
| [Adminteamssetting](docs/api/adminteamssetting.html) | `load` | `GET /admin.teams.settings.info` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.invite` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.assign` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.setExpiration` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.remove` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.setAdmin` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.setOwner` | Required |
| [Adminuser](docs/api/adminuser.html) | `create` | `POST /admin.users.setRegular` | Required |
| [Adminuser](docs/api/adminuser.html) | `load` | `GET /admin.users.list` | Required |
| [Adminusergroup](docs/api/adminusergroup.html) | `create` | `POST /admin.usergroups.addTeams` | Required |
| [Adminusergroup](docs/api/adminusergroup.html) | `create` | `POST /admin.usergroups.addChannels` | Required |
| [Adminusergroup](docs/api/adminusergroup.html) | `create` | `POST /admin.usergroups.removeChannels` | Required |
| [Adminusergroup](docs/api/adminusergroup.html) | `load` | `GET /admin.usergroups.listChannels` | Required |
| [Adminuserssession](docs/api/adminuserssession.html) | `create` | `POST /admin.users.session.reset` | Required |
| [Adminuserssession](docs/api/adminuserssession.html) | `create` | `POST /admin.users.session.invalidate` | Required |
| [Api](docs/api/api.html) | `load` | `GET /api.test` | Required |
| [App](docs/api/app.html) | `load` | `GET /apps.uninstall` | Required |
| [Appseventauthorization](docs/api/appseventauthorization.html) | `load` | `GET /apps.event.authorizations.list` | Required |
| [Appspermission](docs/api/appspermission.html) | `load` | `GET /apps.permissions.request` | Required |
| [Appspermission](docs/api/appspermission.html) | `load` | `GET /apps.permissions.info` | Required |
| [Appspermissionsresource](docs/api/appspermissionsresource.html) | `list` | `GET /apps.permissions.resources.list` | Required |
| [Appspermissionsscope](docs/api/appspermissionsscope.html) | `load` | `GET /apps.permissions.scopes.list` | Required |
| [Appspermissionsuser](docs/api/appspermissionsuser.html) | `load` | `GET /apps.permissions.users.request` | Required |
| [Appspermissionsuser](docs/api/appspermissionsuser.html) | `load` | `GET /apps.permissions.users.list` | Required |
| [Auth](docs/api/auth.html) | `load` | `GET /auth.revoke` | Required |
| [Auth](docs/api/auth.html) | `load` | `GET /auth.test` | Required |
| [Bot](docs/api/bot.html) | `load` | `GET /bots.info` | Required |
| [Call](docs/api/call.html) | `create` | `POST /calls.add` | Required |
| [Call](docs/api/call.html) | `create` | `POST /calls.update` | Required |
| [Call](docs/api/call.html) | `create` | `POST /calls.end` | Required |
| [Call](docs/api/call.html) | `load` | `GET /calls.info` | Required |
| [Callsparticipant](docs/api/callsparticipant.html) | `create` | `POST /calls.participants.add` | Required |
| [Callsparticipant](docs/api/callsparticipant.html) | `create` | `POST /calls.participants.remove` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.postMessage` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.postEphemeral` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.scheduleMessage` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.update` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.unfurl` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.deleteScheduledMessage` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.delete` | Required |
| [Chat](docs/api/chat.html) | `create` | `POST /chat.meMessage` | Required |
| [Chat](docs/api/chat.html) | `load` | `GET /chat.getPermalink` | Required |
| [ChatscheduledMessage](docs/api/chatscheduled_message.html) | `list` | `GET /chat.scheduledMessages.list` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.open` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.rename` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.setPurpose` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.setTopic` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.mark` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.invite` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.kick` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.create` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.archive` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.close` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.join` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.leave` | Required |
| [Conversation](docs/api/conversation.html) | `create` | `POST /conversations.unarchive` | Required |
| [Conversation](docs/api/conversation.html) | `list` | `GET /conversations.replies` | Required |
| [Conversation](docs/api/conversation.html) | `list` | `GET /conversations.history` | Required |
| [Conversation](docs/api/conversation.html) | `list` | `GET /conversations.list` | Required |
| [Conversation](docs/api/conversation.html) | `list` | `GET /conversations.members` | Required |
| [Conversation](docs/api/conversation.html) | `load` | `GET /conversations.info` | Required |
| [Dialog](docs/api/dialog.html) | `load` | `GET /dialog.open` | Required |
| [Dnd](docs/api/dnd.html) | `create` | `POST /dnd.setSnooze` | Required |
| [Dnd](docs/api/dnd.html) | `create` | `POST /dnd.endDnd` | Required |
| [Dnd](docs/api/dnd.html) | `create` | `POST /dnd.endSnooze` | Required |
| [Dnd](docs/api/dnd.html) | `load` | `GET /dnd.info` | Required |
| [Dnd](docs/api/dnd.html) | `load` | `GET /dnd.teamInfo` | Required |
| [Emoji](docs/api/emoji.html) | `load` | `GET /emoji.list` | Required |
| [File](docs/api/file.html) | `create` | `POST /files.upload` | Required |
| [File](docs/api/file.html) | `create` | `POST /files.delete` | Required |
| [File](docs/api/file.html) | `create` | `POST /files.revokePublicURL` | Required |
| [File](docs/api/file.html) | `create` | `POST /files.sharedPublicURL` | Required |
| [File](docs/api/file.html) | `list` | `GET /files.list` | Required |
| [File](docs/api/file.html) | `list` | `GET /files.info` | Required |
| [Filescomment](docs/api/filescomment.html) | `create` | `POST /files.comments.delete` | Required |
| [Filesremote](docs/api/filesremote.html) | `create` | `POST /files.remote.update` | Required |
| [Filesremote](docs/api/filesremote.html) | `create` | `POST /files.remote.add` | Required |
| [Filesremote](docs/api/filesremote.html) | `create` | `POST /files.remote.remove` | Required |
| [Filesremote](docs/api/filesremote.html) | `load` | `GET /files.remote.list` | Required |
| [Filesremote](docs/api/filesremote.html) | `load` | `GET /files.remote.share` | Required |
| [Filesremote](docs/api/filesremote.html) | `load` | `GET /files.remote.info` | Required |
| [Migration](docs/api/migration.html) | `list` | `GET /migration.exchange` | Required |
| [Oauth](docs/api/oauth.html) | `load` | `GET /oauth.access` | Required |
| [Oauth](docs/api/oauth.html) | `load` | `GET /oauth.token` | Required |
| [Oauthv2](docs/api/oauthv2.html) | `load` | `GET /oauth.v2.access` | Required |
| [Pin](docs/api/pin.html) | `create` | `POST /pins.add` | Required |
| [Pin](docs/api/pin.html) | `create` | `POST /pins.remove` | Required |
| [Pin](docs/api/pin.html) | `load` | `GET /pins.list` | Required |
| [Reaction](docs/api/reaction.html) | `create` | `POST /reactions.remove` | Required |
| [Reaction](docs/api/reaction.html) | `create` | `POST /reactions.add` | Required |
| [Reaction](docs/api/reaction.html) | `list` | `GET /reactions.list` | Required |
| [Reaction](docs/api/reaction.html) | `load` | `GET /reactions.get` | Required |
| [Reminder](docs/api/reminder.html) | `create` | `POST /reminders.add` | Required |
| [Reminder](docs/api/reminder.html) | `create` | `POST /reminders.complete` | Required |
| [Reminder](docs/api/reminder.html) | `create` | `POST /reminders.delete` | Required |
| [Reminder](docs/api/reminder.html) | `list` | `GET /reminders.list` | Required |
| [Reminder](docs/api/reminder.html) | `load` | `GET /reminders.info` | Required |
| [Rtm](docs/api/rtm.html) | `load` | `GET /rtm.connect` | Required |
| [Search](docs/api/search.html) | `load` | `GET /search.messages` | Required |
| [Star](docs/api/star.html) | `create` | `POST /stars.add` | Required |
| [Star](docs/api/star.html) | `create` | `POST /stars.remove` | Required |
| [Star](docs/api/star.html) | `list` | `GET /stars.list` | Required |
| [Team](docs/api/team.html) | `list` | `GET /team.integrationLogs` | Required |
| [Team](docs/api/team.html) | `list` | `GET /team.accessLogs` | Required |
| [Team](docs/api/team.html) | `load` | `GET /team.info` | Required |
| [Team](docs/api/team.html) | `load` | `GET /team.billableInfo` | Required |
| [Teamprofile](docs/api/teamprofile.html) | `load` | `GET /team.profile.get` | Required |
| [User](docs/api/user.html) | `create` | `POST /users.setPhoto` | Required |
| [User](docs/api/user.html) | `create` | `POST /users.setPresence` | Required |
| [User](docs/api/user.html) | `create` | `POST /users.deletePhoto` | Required |
| [User](docs/api/user.html) | `create` | `POST /users.setActive` | Required |
| [User](docs/api/user.html) | `list` | `GET /users.conversations` | Required |
| [User](docs/api/user.html) | `list` | `GET /users.list` | Required |
| [User](docs/api/user.html) | `load` | `GET /users.info` | Required |
| [User](docs/api/user.html) | `load` | `GET /users.lookupByEmail` | Required |
| [User](docs/api/user.html) | `load` | `GET /users.getPresence` | Required |
| [User](docs/api/user.html) | `load` | `GET /users.identity` | Required |
| [Usergroup](docs/api/usergroup.html) | `create` | `POST /usergroups.update` | Required |
| [Usergroup](docs/api/usergroup.html) | `create` | `POST /usergroups.create` | Required |
| [Usergroup](docs/api/usergroup.html) | `create` | `POST /usergroups.disable` | Required |
| [Usergroup](docs/api/usergroup.html) | `create` | `POST /usergroups.enable` | Required |
| [Usergroup](docs/api/usergroup.html) | `list` | `GET /usergroups.list` | Required |
| [Usergroupsuser](docs/api/usergroupsuser.html) | `create` | `POST /usergroups.users.update` | Required |
| [Usergroupsuser](docs/api/usergroupsuser.html) | `list` | `GET /usergroups.users.list` | Required |
| [Usersprofile](docs/api/usersprofile.html) | `create` | `POST /users.profile.set` | Required |
| [Usersprofile](docs/api/usersprofile.html) | `load` | `GET /users.profile.get` | Required |
| [View](docs/api/view.html) | `load` | `GET /views.update` | Required |
| [View](docs/api/view.html) | `load` | `GET /views.publish` | Required |
| [View](docs/api/view.html) | `load` | `GET /views.open` | Required |
| [View](docs/api/view.html) | `load` | `GET /views.push` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /workflows.updateStep` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /workflows.stepFailed` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /workflows.stepCompleted` | Required |

## Connect to the API

- API server: `https://slack.com/api`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `slack_list`: List records for an entity. Supported entities: `adminconversation`, `appspermissionsresource`, `chatscheduled_message`, `conversation`, `file`, `migration`, `reaction`, `reminder`, `star`, `team`, `user`, `usergroup`, `usergroupsuser`.
- `slack_load`: Load one record for an entity. Supported entities: `adminappsapproved`, `adminappsrequest`, `adminappsrestricted`, `adminconversation`, `adminconversationsekm`, `adminconversationsrestrict_access`, `adminemoji`, `admininvite_request`, `admininvite_requestsapproved`, `admininvite_requestsdenied`, `adminteam`, `adminteamsadmin`, `adminteamsowner`, `adminteamssetting`, `adminuser`, `adminusergroup`, `api`, `app`, `appseventauthorization`, `appspermission`, `appspermissionsscope`, `appspermissionsuser`, `auth`, `bot`, `call`, `chat`, `conversation`, `dialog`, `dnd`, `emoji`, `filesremote`, `oauth`, `oauthv2`, `pin`, `reaction`, `reminder`, `rtm`, `search`, `team`, `teamprofile`, `user`, `usersprofile`, `view`, `workflow`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

