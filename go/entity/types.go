// Typed models for the Slack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/slack-sdk/go/core"
)

// Adminapp is the typed data model for the adminapp entity.
type Adminapp struct {
	Ok bool `json:"ok"`
}

// AdminappCreateData is the typed request payload for Adminapp.CreateTyped.
type AdminappCreateData struct {
	AppId *string `json:"app_id,omitempty"`
	RequestId *string `json:"request_id,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Ok bool `json:"ok"`
}

// Adminappsapproved is the typed data model for the adminappsapproved entity.
type Adminappsapproved struct {
	Ok bool `json:"ok"`
}

// AdminappsapprovedLoadMatch is the typed request payload for Adminappsapproved.LoadTyped.
type AdminappsapprovedLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	EnterpriseId *string `json:"enterprise_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Token string `json:"token"`
}

// Adminappsrequest is the typed data model for the adminappsrequest entity.
type Adminappsrequest struct {
	Ok bool `json:"ok"`
}

// AdminappsrequestLoadMatch is the typed request payload for Adminappsrequest.LoadTyped.
type AdminappsrequestLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Token string `json:"token"`
}

// Adminappsrestricted is the typed data model for the adminappsrestricted entity.
type Adminappsrestricted struct {
	Ok bool `json:"ok"`
}

// AdminappsrestrictedLoadMatch is the typed request payload for Adminappsrestricted.LoadTyped.
type AdminappsrestrictedLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	EnterpriseId *string `json:"enterprise_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Token string `json:"token"`
}

// Adminconversation is the typed data model for the adminconversation entity.
type Adminconversation struct {
	AcceptedUser *string `json:"accepted_user,omitempty"`
	CanThread *map[string]any `json:"can_thread,omitempty"`
	ChannelId *string `json:"channel_id,omitempty"`
	Created int `json:"created"`
	Creator string `json:"creator"`
	Id string `json:"id"`
	IsArchived *bool `json:"is_archived,omitempty"`
	IsChannel bool `json:"is_channel"`
	IsFrozen *bool `json:"is_frozen,omitempty"`
	IsGeneral *bool `json:"is_general,omitempty"`
	IsMember *bool `json:"is_member,omitempty"`
	IsMoved *int `json:"is_moved,omitempty"`
	IsMpim bool `json:"is_mpim"`
	IsNonThreadable *bool `json:"is_non_threadable,omitempty"`
	IsOrgShared bool `json:"is_org_shared"`
	IsPendingExtShared *bool `json:"is_pending_ext_shared,omitempty"`
	IsPrivate bool `json:"is_private"`
	IsReadOnly *bool `json:"is_read_only,omitempty"`
	IsShared bool `json:"is_shared"`
	IsThreadOnly *bool `json:"is_thread_only,omitempty"`
	LastRead *string `json:"last_read,omitempty"`
	Latest *any `json:"latest,omitempty"`
	Members []any `json:"members"`
	Name string `json:"name"`
	NameNormalized string `json:"name_normalized"`
	NumMembers *int `json:"num_members,omitempty"`
	Ok bool `json:"ok"`
	PendingShared *[]any `json:"pending_shared,omitempty"`
	PreviousNames *[]any `json:"previous_names,omitempty"`
	Priority *float64 `json:"priority,omitempty"`
	Purpose map[string]any `json:"purpose"`
	ResponseMetadata map[string]any `json:"response_metadata"`
	TeamIds []any `json:"team_ids"`
	Topic map[string]any `json:"topic"`
	Unlinked *int `json:"unlinked,omitempty"`
	UnreadCount *int `json:"unread_count,omitempty"`
	UnreadCountDisplay *int `json:"unread_count_display,omitempty"`
	WhoCanPost *map[string]any `json:"who_can_post,omitempty"`
}

// AdminconversationLoadMatch is the typed request payload for Adminconversation.LoadTyped.
type AdminconversationLoadMatch struct {
	ChannelId string `json:"channel_id"`
}

// AdminconversationListMatch is the typed request payload for Adminconversation.ListTyped.
type AdminconversationListMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Query *any `json:"query,omitempty"`
	SearchChannelType *any `json:"search_channel_type,omitempty"`
	Sort *any `json:"sort,omitempty"`
	SortDir *any `json:"sort_dir,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AdminconversationCreateData is the typed request payload for Adminconversation.CreateTyped.
type AdminconversationCreateData struct {
	Description *string `json:"description,omitempty"`
	IsPrivate bool `json:"is_private"`
	Name string `json:"name"`
	OrgWide *any `json:"org_wide,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	AcceptedUser *string `json:"accepted_user,omitempty"`
	CanThread *map[string]any `json:"can_thread,omitempty"`
	ChannelId *string `json:"channel_id,omitempty"`
	Created int `json:"created"`
	Creator string `json:"creator"`
	Id string `json:"id"`
	IsArchived *bool `json:"is_archived,omitempty"`
	IsChannel bool `json:"is_channel"`
	IsFrozen *bool `json:"is_frozen,omitempty"`
	IsGeneral *bool `json:"is_general,omitempty"`
	IsMember *bool `json:"is_member,omitempty"`
	IsMoved *int `json:"is_moved,omitempty"`
	IsMpim bool `json:"is_mpim"`
	IsNonThreadable *bool `json:"is_non_threadable,omitempty"`
	IsOrgShared bool `json:"is_org_shared"`
	IsPendingExtShared *bool `json:"is_pending_ext_shared,omitempty"`
	IsReadOnly *bool `json:"is_read_only,omitempty"`
	IsShared bool `json:"is_shared"`
	IsThreadOnly *bool `json:"is_thread_only,omitempty"`
	LastRead *string `json:"last_read,omitempty"`
	Latest *any `json:"latest,omitempty"`
	Members []any `json:"members"`
	NameNormalized string `json:"name_normalized"`
	NumMembers *int `json:"num_members,omitempty"`
	Ok bool `json:"ok"`
	PendingShared *[]any `json:"pending_shared,omitempty"`
	PreviousNames *[]any `json:"previous_names,omitempty"`
	Priority *float64 `json:"priority,omitempty"`
	Purpose map[string]any `json:"purpose"`
	ResponseMetadata map[string]any `json:"response_metadata"`
	TeamIds []any `json:"team_ids"`
	Topic map[string]any `json:"topic"`
	Unlinked *int `json:"unlinked,omitempty"`
	UnreadCount *int `json:"unread_count,omitempty"`
	UnreadCountDisplay *int `json:"unread_count_display,omitempty"`
	WhoCanPost *map[string]any `json:"who_can_post,omitempty"`
}

// Adminconversationsekm is the typed data model for the adminconversationsekm entity.
type Adminconversationsekm struct {
	Ok bool `json:"ok"`
}

// AdminconversationsekmLoadMatch is the typed request payload for Adminconversationsekm.LoadTyped.
type AdminconversationsekmLoadMatch struct {
	ChannelId *string `json:"channel_id,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Token string `json:"token"`
}

// AdminconversationsrestrictAccess is the typed data model for the adminconversationsrestrict_access entity.
type AdminconversationsrestrictAccess struct {
	Ok bool `json:"ok"`
}

// AdminconversationsrestrictAccessLoadMatch is the typed request payload for AdminconversationsrestrictAccess.LoadTyped.
type AdminconversationsrestrictAccessLoadMatch struct {
	ChannelId string `json:"channel_id"`
	TeamId *string `json:"team_id,omitempty"`
	Token string `json:"token"`
}

// AdminconversationsrestrictAccessCreateData is the typed request payload for AdminconversationsrestrictAccess.CreateTyped.
type AdminconversationsrestrictAccessCreateData struct {
	ChannelId string `json:"channel_id"`
	GroupId string `json:"group_id"`
	TeamId *string `json:"team_id,omitempty"`
	Token string `json:"token"`
	Ok bool `json:"ok"`
}

// Adminemoji is the typed data model for the adminemoji entity.
type Adminemoji struct {
	Ok bool `json:"ok"`
}

// AdminemojiLoadMatch is the typed request payload for Adminemoji.LoadTyped.
type AdminemojiLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Token string `json:"token"`
}

// AdminemojiCreateData is the typed request payload for Adminemoji.CreateTyped.
type AdminemojiCreateData struct {
	AliasFor *any `json:"alias_for,omitempty"`
	Name string `json:"name"`
	Token string `json:"token"`
	NewName *any `json:"new_name,omitempty"`
	Url *string `json:"url,omitempty"`
	Ok bool `json:"ok"`
}

// AdmininviteRequest is the typed data model for the admininvite_request entity.
type AdmininviteRequest struct {
	Ok bool `json:"ok"`
}

// AdmininviteRequestLoadMatch is the typed request payload for AdmininviteRequest.LoadTyped.
type AdmininviteRequestLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AdmininviteRequestCreateData is the typed request payload for AdmininviteRequest.CreateTyped.
type AdmininviteRequestCreateData struct {
	InviteRequestId string `json:"invite_request_id"`
	TeamId *string `json:"team_id,omitempty"`
	Ok bool `json:"ok"`
}

// AdmininviteRequestsapproved is the typed data model for the admininvite_requestsapproved entity.
type AdmininviteRequestsapproved struct {
	Ok bool `json:"ok"`
}

// AdmininviteRequestsapprovedLoadMatch is the typed request payload for AdmininviteRequestsapproved.LoadTyped.
type AdmininviteRequestsapprovedLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// AdmininviteRequestsdenied is the typed data model for the admininvite_requestsdenied entity.
type AdmininviteRequestsdenied struct {
	Ok bool `json:"ok"`
}

// AdmininviteRequestsdeniedLoadMatch is the typed request payload for AdmininviteRequestsdenied.LoadTyped.
type AdmininviteRequestsdeniedLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// Adminteam is the typed data model for the adminteam entity.
type Adminteam struct {
	Ok bool `json:"ok"`
}

// AdminteamLoadMatch is the typed request payload for Adminteam.LoadTyped.
type AdminteamLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// AdminteamCreateData is the typed request payload for Adminteam.CreateTyped.
type AdminteamCreateData struct {
	TeamDescription *any `json:"team_description,omitempty"`
	TeamDiscoverability *any `json:"team_discoverability,omitempty"`
	TeamDomain any `json:"team_domain"`
	TeamName any `json:"team_name"`
	Ok bool `json:"ok"`
}

// Adminteamsadmin is the typed data model for the adminteamsadmin entity.
type Adminteamsadmin struct {
	Ok bool `json:"ok"`
}

// AdminteamsadminLoadMatch is the typed request payload for Adminteamsadmin.LoadTyped.
type AdminteamsadminLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId string `json:"team_id"`
	Token string `json:"token"`
}

// Adminteamsowner is the typed data model for the adminteamsowner entity.
type Adminteamsowner struct {
	Ok bool `json:"ok"`
}

// AdminteamsownerLoadMatch is the typed request payload for Adminteamsowner.LoadTyped.
type AdminteamsownerLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId string `json:"team_id"`
	Token string `json:"token"`
}

// Adminteamssetting is the typed data model for the adminteamssetting entity.
type Adminteamssetting struct {
	Ok bool `json:"ok"`
}

// AdminteamssettingLoadMatch is the typed request payload for Adminteamssetting.LoadTyped.
type AdminteamssettingLoadMatch struct {
	TeamId string `json:"team_id"`
}

// AdminteamssettingCreateData is the typed request payload for Adminteamssetting.CreateTyped.
type AdminteamssettingCreateData struct {
	ChannelId *string `json:"channel_id,omitempty"`
	TeamId string `json:"team_id"`
	Token *string `json:"token,omitempty"`
	Description *string `json:"description,omitempty"`
	Discoverability *any `json:"discoverability,omitempty"`
	ImageUrl *any `json:"image_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Ok bool `json:"ok"`
}

// Adminuser is the typed data model for the adminuser entity.
type Adminuser struct {
	Ok bool `json:"ok"`
}

// AdminuserLoadMatch is the typed request payload for Adminuser.LoadTyped.
type AdminuserLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	TeamId string `json:"team_id"`
}

// AdminuserCreateData is the typed request payload for Adminuser.CreateTyped.
type AdminuserCreateData struct {
	ChannelId *string `json:"channel_id,omitempty"`
	CustomMessage *any `json:"custom_message,omitempty"`
	Email *string `json:"email,omitempty"`
	GuestExpirationT *any `json:"guest_expiration_t,omitempty"`
	IsRestricted *bool `json:"is_restricted,omitempty"`
	IsUltraRestricted *bool `json:"is_ultra_restricted,omitempty"`
	RealName *any `json:"real_name,omitempty"`
	Resend *any `json:"resend,omitempty"`
	TeamId string `json:"team_id"`
	UserId *string `json:"user_id,omitempty"`
	ExpirationT *any `json:"expiration_t,omitempty"`
	Ok bool `json:"ok"`
}

// Adminusergroup is the typed data model for the adminusergroup entity.
type Adminusergroup struct {
	Ok bool `json:"ok"`
}

// AdminusergroupLoadMatch is the typed request payload for Adminusergroup.LoadTyped.
type AdminusergroupLoadMatch struct {
	IncludeNumMember *any `json:"include_num_member,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	UsergroupId string `json:"usergroup_id"`
}

// AdminusergroupCreateData is the typed request payload for Adminusergroup.CreateTyped.
type AdminusergroupCreateData struct {
	AutoProvision *any `json:"auto_provision,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	UsergroupId string `json:"usergroup_id"`
	ChannelId *string `json:"channel_id,omitempty"`
	Ok bool `json:"ok"`
}

// Adminuserssession is the typed data model for the adminuserssession entity.
type Adminuserssession struct {
	Ok bool `json:"ok"`
}

// AdminuserssessionCreateData is the typed request payload for Adminuserssession.CreateTyped.
type AdminuserssessionCreateData struct {
	MobileOnly *any `json:"mobile_only,omitempty"`
	UserId string `json:"user_id"`
	WebOnly *any `json:"web_only,omitempty"`
	Ok bool `json:"ok"`
}

// Api is the typed data model for the api entity.
type Api struct {
	Ok bool `json:"ok"`
}

// ApiLoadMatch is the typed request payload for Api.LoadTyped.
type ApiLoadMatch struct {
	Error *any `json:"error,omitempty"`
	Foo *any `json:"foo,omitempty"`
}

// App is the typed data model for the app entity.
type App struct {
	Ok bool `json:"ok"`
}

// AppLoadMatch is the typed request payload for App.LoadTyped.
type AppLoadMatch struct {
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *any `json:"client_secret,omitempty"`
	Token *string `json:"token,omitempty"`
}

// Appseventauthorization is the typed data model for the appseventauthorization entity.
type Appseventauthorization struct {
	Ok bool `json:"ok"`
}

// AppseventauthorizationLoadMatch is the typed request payload for Appseventauthorization.LoadTyped.
type AppseventauthorizationLoadMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	EventContext any `json:"event_context"`
	Limit *int `json:"limit,omitempty"`
}

// Appspermission is the typed data model for the appspermission entity.
type Appspermission struct {
	AppHome map[string]any `json:"app_home"`
	Channel map[string]any `json:"channel"`
	Group map[string]any `json:"group"`
	Im map[string]any `json:"im"`
	Mpim map[string]any `json:"mpim"`
	Ok bool `json:"ok"`
	Team map[string]any `json:"team"`
}

// AppspermissionLoadMatch is the typed request payload for Appspermission.LoadTyped.
type AppspermissionLoadMatch struct {
	Scope any `json:"scope"`
	Token string `json:"token"`
	TriggerId string `json:"trigger_id"`
}

// Appspermissionsresource is the typed data model for the appspermissionsresource entity.
type Appspermissionsresource struct {
	Id *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AppspermissionsresourceListMatch is the typed request payload for Appspermissionsresource.ListTyped.
type AppspermissionsresourceListMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Token string `json:"token"`
}

// Appspermissionsscope is the typed data model for the appspermissionsscope entity.
type Appspermissionsscope struct {
	AppHome *[]any `json:"app_home,omitempty"`
	Channel *[]any `json:"channel,omitempty"`
	Group *[]any `json:"group,omitempty"`
	Im *[]any `json:"im,omitempty"`
	Mpim *[]any `json:"mpim,omitempty"`
	Team *[]any `json:"team,omitempty"`
	User *[]any `json:"user,omitempty"`
}

// AppspermissionsscopeLoadMatch is the typed request payload for Appspermissionsscope.LoadTyped.
type AppspermissionsscopeLoadMatch struct {
	Token string `json:"token"`
}

// Appspermissionsuser is the typed data model for the appspermissionsuser entity.
type Appspermissionsuser struct {
	Ok bool `json:"ok"`
}

// AppspermissionsuserLoadMatch is the typed request payload for Appspermissionsuser.LoadTyped.
type AppspermissionsuserLoadMatch struct {
	Scope *any `json:"scope,omitempty"`
	Token string `json:"token"`
	TriggerId *string `json:"trigger_id,omitempty"`
	User *any `json:"user,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// Auth is the typed data model for the auth entity.
type Auth struct {
	BotId *string `json:"bot_id,omitempty"`
	IsEnterpriseInstall *bool `json:"is_enterprise_install,omitempty"`
	Ok bool `json:"ok"`
	Revoked bool `json:"revoked"`
	Team string `json:"team"`
	TeamId string `json:"team_id"`
	Url string `json:"url"`
	User string `json:"user"`
	UserId string `json:"user_id"`
}

// AuthLoadMatch is the typed request payload for Auth.LoadTyped.
type AuthLoadMatch struct {
	Test *any `json:"test,omitempty"`
	Token string `json:"token"`
}

// Bot is the typed data model for the bot entity.
type Bot struct {
	AppId string `json:"app_id"`
	Deleted bool `json:"deleted"`
	Icons map[string]any `json:"icons"`
	Id string `json:"id"`
	Name string `json:"name"`
	Updated int `json:"updated"`
	UserId *string `json:"user_id,omitempty"`
}

// BotLoadMatch is the typed request payload for Bot.LoadTyped.
type BotLoadMatch struct {
	Bot *any `json:"bot,omitempty"`
	Token string `json:"token"`
}

// Call is the typed data model for the call entity.
type Call struct {
	Ok bool `json:"ok"`
}

// CallLoadMatch is the typed request payload for Call.LoadTyped.
type CallLoadMatch struct {
	Id string `json:"id"`
}

// CallCreateData is the typed request payload for Call.CreateTyped.
type CallCreateData struct {
	CreatedBy *any `json:"created_by,omitempty"`
	DateStart *any `json:"date_start,omitempty"`
	DesktopAppJoinUrl *any `json:"desktop_app_join_url,omitempty"`
	ExternalDisplayId *string `json:"external_display_id,omitempty"`
	ExternalUniqueId string `json:"external_unique_id"`
	JoinUrl any `json:"join_url"`
	Title *string `json:"title,omitempty"`
	User *any `json:"user,omitempty"`
	Ok bool `json:"ok"`
}

// Callsparticipant is the typed data model for the callsparticipant entity.
type Callsparticipant struct {
	Ok bool `json:"ok"`
}

// CallsparticipantCreateData is the typed request payload for Callsparticipant.CreateTyped.
type CallsparticipantCreateData struct {
	Id string `json:"id"`
	User any `json:"user"`
	Ok bool `json:"ok"`
}

// Chat is the typed data model for the chat entity.
type Chat struct {
	Attachments *[]any `json:"attachments,omitempty"`
	Blocks *[]any `json:"blocks,omitempty"`
	BotId *string `json:"bot_id,omitempty"`
	BotProfile map[string]any `json:"bot_profile"`
	Channel string `json:"channel"`
	ClientMsgId *string `json:"client_msg_id,omitempty"`
	Comment map[string]any `json:"comment"`
	DisplayAsBot *bool `json:"display_as_bot,omitempty"`
	File *map[string]any `json:"file,omitempty"`
	Files *[]any `json:"files,omitempty"`
	Icons *map[string]any `json:"icons,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	IsDelayedMessage *bool `json:"is_delayed_message,omitempty"`
	IsIntro *bool `json:"is_intro,omitempty"`
	IsStarred *bool `json:"is_starred,omitempty"`
	LastRead *string `json:"last_read,omitempty"`
	LatestReply *string `json:"latest_reply,omitempty"`
	MessageTs string `json:"message_ts"`
	Name *string `json:"name,omitempty"`
	Ok bool `json:"ok"`
	OldName *string `json:"old_name,omitempty"`
	ParentUserId *string `json:"parent_user_id,omitempty"`
	Permalink string `json:"permalink"`
	PinnedTo *[]any `json:"pinned_to,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	ReplyCount *int `json:"reply_count,omitempty"`
	ReplyUsers *[]any `json:"reply_users,omitempty"`
	ReplyUsersCount *int `json:"reply_users_count,omitempty"`
	SourceTeam *string `json:"source_team,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Subtype *string `json:"subtype,omitempty"`
	Team *string `json:"team,omitempty"`
	Text string `json:"text"`
	ThreadTs *string `json:"thread_ts,omitempty"`
	Topic *string `json:"topic,omitempty"`
	Ts string `json:"ts"`
	Type string `json:"type"`
	UnreadCount *int `json:"unread_count,omitempty"`
	Upload *bool `json:"upload,omitempty"`
	User *string `json:"user,omitempty"`
	UserProfile map[string]any `json:"user_profile"`
	UserTeam *string `json:"user_team,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ChatLoadMatch is the typed request payload for Chat.LoadTyped.
type ChatLoadMatch struct {
	Channel any `json:"channel"`
	MessageT any `json:"message_t"`
	Token string `json:"token"`
}

// ChatCreateData is the typed request payload for Chat.CreateTyped.
type ChatCreateData struct {
	AsUser *any `json:"as_user,omitempty"`
	Attachment *any `json:"attachment,omitempty"`
	Block *any `json:"block,omitempty"`
	Channel any `json:"channel"`
	IconEmoji *any `json:"icon_emoji,omitempty"`
	IconUrl *any `json:"icon_url,omitempty"`
	LinkName *any `json:"link_name,omitempty"`
	Mrkdwn *any `json:"mrkdwn,omitempty"`
	Parse *any `json:"parse,omitempty"`
	ReplyBroadcast *any `json:"reply_broadcast,omitempty"`
	Text *any `json:"text,omitempty"`
	ThreadT *any `json:"thread_t,omitempty"`
	UnfurlLink *any `json:"unfurl_link,omitempty"`
	UnfurlMedia *any `json:"unfurl_media,omitempty"`
	Username *string `json:"username,omitempty"`
	Attachments *[]any `json:"attachments,omitempty"`
	Blocks *[]any `json:"blocks,omitempty"`
	BotId *string `json:"bot_id,omitempty"`
	BotProfile map[string]any `json:"bot_profile"`
	ClientMsgId *string `json:"client_msg_id,omitempty"`
	Comment map[string]any `json:"comment"`
	DisplayAsBot *bool `json:"display_as_bot,omitempty"`
	File *map[string]any `json:"file,omitempty"`
	Files *[]any `json:"files,omitempty"`
	Icons *map[string]any `json:"icons,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	IsDelayedMessage *bool `json:"is_delayed_message,omitempty"`
	IsIntro *bool `json:"is_intro,omitempty"`
	IsStarred *bool `json:"is_starred,omitempty"`
	LastRead *string `json:"last_read,omitempty"`
	LatestReply *string `json:"latest_reply,omitempty"`
	MessageTs string `json:"message_ts"`
	Name *string `json:"name,omitempty"`
	Ok bool `json:"ok"`
	OldName *string `json:"old_name,omitempty"`
	ParentUserId *string `json:"parent_user_id,omitempty"`
	Permalink string `json:"permalink"`
	PinnedTo *[]any `json:"pinned_to,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	ReplyCount *int `json:"reply_count,omitempty"`
	ReplyUsers *[]any `json:"reply_users,omitempty"`
	ReplyUsersCount *int `json:"reply_users_count,omitempty"`
	SourceTeam *string `json:"source_team,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Subtype *string `json:"subtype,omitempty"`
	Team *string `json:"team,omitempty"`
	ThreadTs *string `json:"thread_ts,omitempty"`
	Topic *string `json:"topic,omitempty"`
	Ts string `json:"ts"`
	Type string `json:"type"`
	UnreadCount *int `json:"unread_count,omitempty"`
	Upload *bool `json:"upload,omitempty"`
	User *string `json:"user,omitempty"`
	UserProfile map[string]any `json:"user_profile"`
	UserTeam *string `json:"user_team,omitempty"`
}

// ChatscheduledMessage is the typed data model for the chatscheduled_message entity.
type ChatscheduledMessage struct {
	ChannelId string `json:"channel_id"`
	DateCreated int `json:"date_created"`
	Id string `json:"id"`
	PostAt int `json:"post_at"`
	Text *string `json:"text,omitempty"`
}

// ChatscheduledMessageListMatch is the typed request payload for ChatscheduledMessage.ListTyped.
type ChatscheduledMessageListMatch struct {
	Channel *any `json:"channel,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Latest *any `json:"latest,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Oldest *any `json:"oldest,omitempty"`
}

// Conversation is the typed data model for the conversation entity.
type Conversation struct {
	AlreadyClosed *bool `json:"already_closed,omitempty"`
	AlreadyOpen *bool `json:"already_open,omitempty"`
	Attachments *[]any `json:"attachments,omitempty"`
	Blocks *[]any `json:"blocks,omitempty"`
	BotId *string `json:"bot_id,omitempty"`
	BotProfile map[string]any `json:"bot_profile"`
	Channel any `json:"channel"`
	Channels []any `json:"channels"`
	ClientMsgId *string `json:"client_msg_id,omitempty"`
	Comment map[string]any `json:"comment"`
	DisplayAsBot *bool `json:"display_as_bot,omitempty"`
	File *map[string]any `json:"file,omitempty"`
	Files *[]any `json:"files,omitempty"`
	HasMore *bool `json:"has_more,omitempty"`
	Icons *map[string]any `json:"icons,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	IsDelayedMessage *bool `json:"is_delayed_message,omitempty"`
	IsIntro *bool `json:"is_intro,omitempty"`
	IsStarred *bool `json:"is_starred,omitempty"`
	LastRead *string `json:"last_read,omitempty"`
	LatestReply *string `json:"latest_reply,omitempty"`
	Members []any `json:"members"`
	Messages []any `json:"messages"`
	Name *string `json:"name,omitempty"`
	NoOp *bool `json:"no_op,omitempty"`
	NotInChannel *bool `json:"not_in_channel,omitempty"`
	Ok bool `json:"ok"`
	OldName *string `json:"old_name,omitempty"`
	ParentUserId *string `json:"parent_user_id,omitempty"`
	Permalink *string `json:"permalink,omitempty"`
	PinnedTo *[]any `json:"pinned_to,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	ReplyCount *int `json:"reply_count,omitempty"`
	ReplyUsers *[]any `json:"reply_users,omitempty"`
	ReplyUsersCount *int `json:"reply_users_count,omitempty"`
	ResponseMetadata *map[string]any `json:"response_metadata,omitempty"`
	SourceTeam *string `json:"source_team,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Subtype *string `json:"subtype,omitempty"`
	Team *string `json:"team,omitempty"`
	Text string `json:"text"`
	ThreadTs *string `json:"thread_ts,omitempty"`
	Topic *string `json:"topic,omitempty"`
	Ts string `json:"ts"`
	Type string `json:"type"`
	UnreadCount *int `json:"unread_count,omitempty"`
	Upload *bool `json:"upload,omitempty"`
	User *string `json:"user,omitempty"`
	UserProfile map[string]any `json:"user_profile"`
	UserTeam *string `json:"user_team,omitempty"`
	Username *string `json:"username,omitempty"`
	Warning *string `json:"warning,omitempty"`
}

// ConversationLoadMatch is the typed request payload for Conversation.LoadTyped.
type ConversationLoadMatch struct {
	Channel *any `json:"channel,omitempty"`
	IncludeLocale *any `json:"include_locale,omitempty"`
	IncludeNumMember *any `json:"include_num_member,omitempty"`
	Token *string `json:"token,omitempty"`
}

// ConversationListMatch is the typed request payload for Conversation.ListTyped.
type ConversationListMatch struct {
	Channel *any `json:"channel,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Inclusive *any `json:"inclusive,omitempty"`
	Latest *any `json:"latest,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Oldest *any `json:"oldest,omitempty"`
	Token *string `json:"token,omitempty"`
	Ts *any `json:"ts,omitempty"`
}

// ConversationCreateData is the typed request payload for Conversation.CreateTyped.
type ConversationCreateData struct {
	Channel *any `json:"channel,omitempty"`
	ReturnIm *any `json:"return_im,omitempty"`
	User *any `json:"user,omitempty"`
	AlreadyClosed *bool `json:"already_closed,omitempty"`
	AlreadyOpen *bool `json:"already_open,omitempty"`
	Attachments *[]any `json:"attachments,omitempty"`
	Blocks *[]any `json:"blocks,omitempty"`
	BotId *string `json:"bot_id,omitempty"`
	BotProfile map[string]any `json:"bot_profile"`
	Channels []any `json:"channels"`
	ClientMsgId *string `json:"client_msg_id,omitempty"`
	Comment map[string]any `json:"comment"`
	DisplayAsBot *bool `json:"display_as_bot,omitempty"`
	File *map[string]any `json:"file,omitempty"`
	Files *[]any `json:"files,omitempty"`
	HasMore *bool `json:"has_more,omitempty"`
	Icons *map[string]any `json:"icons,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	IsDelayedMessage *bool `json:"is_delayed_message,omitempty"`
	IsIntro *bool `json:"is_intro,omitempty"`
	IsStarred *bool `json:"is_starred,omitempty"`
	LastRead *string `json:"last_read,omitempty"`
	LatestReply *string `json:"latest_reply,omitempty"`
	Members []any `json:"members"`
	Messages []any `json:"messages"`
	Name *string `json:"name,omitempty"`
	NoOp *bool `json:"no_op,omitempty"`
	NotInChannel *bool `json:"not_in_channel,omitempty"`
	Ok bool `json:"ok"`
	OldName *string `json:"old_name,omitempty"`
	ParentUserId *string `json:"parent_user_id,omitempty"`
	Permalink *string `json:"permalink,omitempty"`
	PinnedTo *[]any `json:"pinned_to,omitempty"`
	Purpose *string `json:"purpose,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	ReplyCount *int `json:"reply_count,omitempty"`
	ReplyUsers *[]any `json:"reply_users,omitempty"`
	ReplyUsersCount *int `json:"reply_users_count,omitempty"`
	ResponseMetadata *map[string]any `json:"response_metadata,omitempty"`
	SourceTeam *string `json:"source_team,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Subtype *string `json:"subtype,omitempty"`
	Team *string `json:"team,omitempty"`
	Text string `json:"text"`
	ThreadTs *string `json:"thread_ts,omitempty"`
	Topic *string `json:"topic,omitempty"`
	Ts string `json:"ts"`
	Type string `json:"type"`
	UnreadCount *int `json:"unread_count,omitempty"`
	Upload *bool `json:"upload,omitempty"`
	UserProfile map[string]any `json:"user_profile"`
	UserTeam *string `json:"user_team,omitempty"`
	Username *string `json:"username,omitempty"`
	Warning *string `json:"warning,omitempty"`
}

// Dialog is the typed data model for the dialog entity.
type Dialog struct {
	Ok bool `json:"ok"`
}

// DialogLoadMatch is the typed request payload for Dialog.LoadTyped.
type DialogLoadMatch struct {
	Dialog any `json:"dialog"`
	TriggerId string `json:"trigger_id"`
}

// Dnd is the typed data model for the dnd entity.
type Dnd struct {
	DndEnabled bool `json:"dnd_enabled"`
	NextDndEndTs int `json:"next_dnd_end_ts"`
	NextDndStartTs int `json:"next_dnd_start_ts"`
	Ok bool `json:"ok"`
	SnoozeEnabled *bool `json:"snooze_enabled,omitempty"`
	SnoozeEndtime *int `json:"snooze_endtime,omitempty"`
	SnoozeRemaining *int `json:"snooze_remaining,omitempty"`
}

// DndLoadMatch is the typed request payload for Dnd.LoadTyped.
type DndLoadMatch struct {
	Token *string `json:"token,omitempty"`
	User *any `json:"user,omitempty"`
}

// DndCreateData is the typed request payload for Dnd.CreateTyped.
type DndCreateData struct {
	NumMinute int `json:"num_minute"`
	Token string `json:"token"`
	DndEnabled bool `json:"dnd_enabled"`
	NextDndEndTs int `json:"next_dnd_end_ts"`
	NextDndStartTs int `json:"next_dnd_start_ts"`
	Ok bool `json:"ok"`
	SnoozeEnabled *bool `json:"snooze_enabled,omitempty"`
	SnoozeEndtime *int `json:"snooze_endtime,omitempty"`
	SnoozeRemaining *int `json:"snooze_remaining,omitempty"`
}

// Emoji is the typed data model for the emoji entity.
type Emoji struct {
	Ok bool `json:"ok"`
}

// EmojiLoadMatch is the typed request payload for Emoji.LoadTyped.
type EmojiLoadMatch struct {
	Token string `json:"token"`
}

// File is the typed data model for the file entity.
type File struct {
	Channels *[]any `json:"channels,omitempty"`
	Comments []any `json:"comments"`
	CommentsCount *int `json:"comments_count,omitempty"`
	ContentHtml *any `json:"content_html,omitempty"`
	Created *int `json:"created,omitempty"`
	DateDelete *int `json:"date_delete,omitempty"`
	DisplayAsBot *bool `json:"display_as_bot,omitempty"`
	Editable *bool `json:"editable,omitempty"`
	Editor *string `json:"editor,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalType *string `json:"external_type,omitempty"`
	ExternalUrl *string `json:"external_url,omitempty"`
	File map[string]any `json:"file"`
	Filetype *string `json:"filetype,omitempty"`
	Groups *[]any `json:"groups,omitempty"`
	HasRichPreview *bool `json:"has_rich_preview,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageExifRotation *int `json:"image_exif_rotation,omitempty"`
	Ims *[]any `json:"ims,omitempty"`
	IsExternal *bool `json:"is_external,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	IsStarred *bool `json:"is_starred,omitempty"`
	IsTombstoned *bool `json:"is_tombstoned,omitempty"`
	LastEditor *string `json:"last_editor,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	NonOwnerEditable *bool `json:"non_owner_editable,omitempty"`
	NumStars *int `json:"num_stars,omitempty"`
	Ok bool `json:"ok"`
	OriginalH *int `json:"original_h,omitempty"`
	OriginalW *int `json:"original_w,omitempty"`
	Paging map[string]any `json:"paging"`
	Permalink *string `json:"permalink,omitempty"`
	PermalinkPublic *string `json:"permalink_public,omitempty"`
	PinnedInfo *map[string]any `json:"pinned_info,omitempty"`
	PinnedTo *[]any `json:"pinned_to,omitempty"`
	PrettyType *string `json:"pretty_type,omitempty"`
	Preview *string `json:"preview,omitempty"`
	PublicUrlShared *bool `json:"public_url_shared,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	ResponseMetadata *any `json:"response_metadata,omitempty"`
	Shares *map[string]any `json:"shares,omitempty"`
	Size *int `json:"size,omitempty"`
	SourceTeam *string `json:"source_team,omitempty"`
	State *string `json:"state,omitempty"`
	Thumb1024 *string `json:"thumb_1024,omitempty"`
	Thumb1024H *int `json:"thumb_1024_h,omitempty"`
	Thumb1024W *int `json:"thumb_1024_w,omitempty"`
	Thumb160 *string `json:"thumb_160,omitempty"`
	Thumb360 *string `json:"thumb_360,omitempty"`
	Thumb360H *int `json:"thumb_360_h,omitempty"`
	Thumb360W *int `json:"thumb_360_w,omitempty"`
	Thumb480 *string `json:"thumb_480,omitempty"`
	Thumb480H *int `json:"thumb_480_h,omitempty"`
	Thumb480W *int `json:"thumb_480_w,omitempty"`
	Thumb64 *string `json:"thumb_64,omitempty"`
	Thumb720 *string `json:"thumb_720,omitempty"`
	Thumb720H *int `json:"thumb_720_h,omitempty"`
	Thumb720W *int `json:"thumb_720_w,omitempty"`
	Thumb80 *string `json:"thumb_80,omitempty"`
	Thumb800 *string `json:"thumb_800,omitempty"`
	Thumb800H *int `json:"thumb_800_h,omitempty"`
	Thumb800W *int `json:"thumb_800_w,omitempty"`
	Thumb960 *string `json:"thumb_960,omitempty"`
	Thumb960H *int `json:"thumb_960_h,omitempty"`
	Thumb960W *int `json:"thumb_960_w,omitempty"`
	ThumbTiny *string `json:"thumb_tiny,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
	Title *string `json:"title,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UrlPrivate *string `json:"url_private,omitempty"`
	UrlPrivateDownload *string `json:"url_private_download,omitempty"`
	User *string `json:"user,omitempty"`
	UserTeam *string `json:"user_team,omitempty"`
	Username *string `json:"username,omitempty"`
}

// FileListMatch is the typed request payload for File.ListTyped.
type FileListMatch struct {
	Channel *any `json:"channel,omitempty"`
	Count *any `json:"count,omitempty"`
	Page *int `json:"page,omitempty"`
	ShowFilesHiddenByLimit *any `json:"show_files_hidden_by_limit,omitempty"`
	Token *string `json:"token,omitempty"`
	TsFrom *any `json:"ts_from,omitempty"`
	TsTo *any `json:"ts_to,omitempty"`
	Type *any `json:"type,omitempty"`
	User *any `json:"user,omitempty"`
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	Channel *any `json:"channel,omitempty"`
	Content *any `json:"content,omitempty"`
	File *any `json:"file,omitempty"`
	Filename *any `json:"filename,omitempty"`
	Filetype *any `json:"filetype,omitempty"`
	InitialComment *any `json:"initial_comment,omitempty"`
	ThreadT *any `json:"thread_t,omitempty"`
	Title *string `json:"title,omitempty"`
	Token *string `json:"token,omitempty"`
	Channels *[]any `json:"channels,omitempty"`
	Comments []any `json:"comments"`
	CommentsCount *int `json:"comments_count,omitempty"`
	ContentHtml *any `json:"content_html,omitempty"`
	Created *int `json:"created,omitempty"`
	DateDelete *int `json:"date_delete,omitempty"`
	DisplayAsBot *bool `json:"display_as_bot,omitempty"`
	Editable *bool `json:"editable,omitempty"`
	Editor *string `json:"editor,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	ExternalType *string `json:"external_type,omitempty"`
	ExternalUrl *string `json:"external_url,omitempty"`
	Groups *[]any `json:"groups,omitempty"`
	HasRichPreview *bool `json:"has_rich_preview,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageExifRotation *int `json:"image_exif_rotation,omitempty"`
	Ims *[]any `json:"ims,omitempty"`
	IsExternal *bool `json:"is_external,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	IsStarred *bool `json:"is_starred,omitempty"`
	IsTombstoned *bool `json:"is_tombstoned,omitempty"`
	LastEditor *string `json:"last_editor,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	NonOwnerEditable *bool `json:"non_owner_editable,omitempty"`
	NumStars *int `json:"num_stars,omitempty"`
	Ok bool `json:"ok"`
	OriginalH *int `json:"original_h,omitempty"`
	OriginalW *int `json:"original_w,omitempty"`
	Paging map[string]any `json:"paging"`
	Permalink *string `json:"permalink,omitempty"`
	PermalinkPublic *string `json:"permalink_public,omitempty"`
	PinnedInfo *map[string]any `json:"pinned_info,omitempty"`
	PinnedTo *[]any `json:"pinned_to,omitempty"`
	PrettyType *string `json:"pretty_type,omitempty"`
	Preview *string `json:"preview,omitempty"`
	PublicUrlShared *bool `json:"public_url_shared,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	ResponseMetadata *any `json:"response_metadata,omitempty"`
	Shares *map[string]any `json:"shares,omitempty"`
	Size *int `json:"size,omitempty"`
	SourceTeam *string `json:"source_team,omitempty"`
	State *string `json:"state,omitempty"`
	Thumb1024 *string `json:"thumb_1024,omitempty"`
	Thumb1024H *int `json:"thumb_1024_h,omitempty"`
	Thumb1024W *int `json:"thumb_1024_w,omitempty"`
	Thumb160 *string `json:"thumb_160,omitempty"`
	Thumb360 *string `json:"thumb_360,omitempty"`
	Thumb360H *int `json:"thumb_360_h,omitempty"`
	Thumb360W *int `json:"thumb_360_w,omitempty"`
	Thumb480 *string `json:"thumb_480,omitempty"`
	Thumb480H *int `json:"thumb_480_h,omitempty"`
	Thumb480W *int `json:"thumb_480_w,omitempty"`
	Thumb64 *string `json:"thumb_64,omitempty"`
	Thumb720 *string `json:"thumb_720,omitempty"`
	Thumb720H *int `json:"thumb_720_h,omitempty"`
	Thumb720W *int `json:"thumb_720_w,omitempty"`
	Thumb80 *string `json:"thumb_80,omitempty"`
	Thumb800 *string `json:"thumb_800,omitempty"`
	Thumb800H *int `json:"thumb_800_h,omitempty"`
	Thumb800W *int `json:"thumb_800_w,omitempty"`
	Thumb960 *string `json:"thumb_960,omitempty"`
	Thumb960H *int `json:"thumb_960_h,omitempty"`
	Thumb960W *int `json:"thumb_960_w,omitempty"`
	ThumbTiny *string `json:"thumb_tiny,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UrlPrivate *string `json:"url_private,omitempty"`
	UrlPrivateDownload *string `json:"url_private_download,omitempty"`
	User *string `json:"user,omitempty"`
	UserTeam *string `json:"user_team,omitempty"`
	Username *string `json:"username,omitempty"`
}

// Filescomment is the typed data model for the filescomment entity.
type Filescomment struct {
	Ok bool `json:"ok"`
}

// FilescommentCreateData is the typed request payload for Filescomment.CreateTyped.
type FilescommentCreateData struct {
	File *any `json:"file,omitempty"`
	Id *string `json:"id,omitempty"`
	Ok bool `json:"ok"`
}

// Filesremote is the typed data model for the filesremote entity.
type Filesremote struct {
	Ok bool `json:"ok"`
}

// FilesremoteLoadMatch is the typed request payload for Filesremote.LoadTyped.
type FilesremoteLoadMatch struct {
	Channel *any `json:"channel,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Token *string `json:"token,omitempty"`
	TsFrom *any `json:"ts_from,omitempty"`
	TsTo *any `json:"ts_to,omitempty"`
}

// FilesremoteCreateData is the typed request payload for Filesremote.CreateTyped.
type FilesremoteCreateData struct {
	ExternalId *string `json:"external_id,omitempty"`
	ExternalUrl *any `json:"external_url,omitempty"`
	File *any `json:"file,omitempty"`
	Filetype *any `json:"filetype,omitempty"`
	IndexableFileContent *any `json:"indexable_file_content,omitempty"`
	PreviewImage *any `json:"preview_image,omitempty"`
	Title *string `json:"title,omitempty"`
	Token *string `json:"token,omitempty"`
	Ok bool `json:"ok"`
}

// Migration is the typed data model for the migration entity.
type Migration struct {
	EnterpriseId string `json:"enterprise_id"`
	InvalidUserIds *[]any `json:"invalid_user_ids,omitempty"`
	Ok bool `json:"ok"`
	TeamId string `json:"team_id"`
	UserIdMap *map[string]any `json:"user_id_map,omitempty"`
}

// MigrationListMatch is the typed request payload for Migration.ListTyped.
type MigrationListMatch struct {
	TeamId *string `json:"team_id,omitempty"`
	ToOld *any `json:"to_old,omitempty"`
	Token string `json:"token"`
	User any `json:"user"`
}

// Oauth is the typed data model for the oauth entity.
type Oauth struct {
	Ok bool `json:"ok"`
}

// OauthLoadMatch is the typed request payload for Oauth.LoadTyped.
type OauthLoadMatch struct {
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *any `json:"client_secret,omitempty"`
	Code *any `json:"code,omitempty"`
	RedirectUri *any `json:"redirect_uri,omitempty"`
	SingleChannel *any `json:"single_channel,omitempty"`
}

// Oauthv2 is the typed data model for the oauthv2 entity.
type Oauthv2 struct {
	Ok bool `json:"ok"`
}

// Oauthv2LoadMatch is the typed request payload for Oauthv2.LoadTyped.
type Oauthv2LoadMatch struct {
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *any `json:"client_secret,omitempty"`
	Code any `json:"code"`
	RedirectUri *any `json:"redirect_uri,omitempty"`
}

// Pin is the typed data model for the pin entity.
type Pin struct {
	Items *[]any `json:"items,omitempty"`
	Ok *bool `json:"ok,omitempty"`
}

// PinLoadMatch is the typed request payload for Pin.LoadTyped.
type PinLoadMatch struct {
	Channel any `json:"channel"`
	Token string `json:"token"`
}

// PinCreateData is the typed request payload for Pin.CreateTyped.
type PinCreateData struct {
	Channel any `json:"channel"`
	Timestamp *any `json:"timestamp,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Ok *bool `json:"ok,omitempty"`
}

// Reaction is the typed data model for the reaction entity.
type Reaction struct {
	File *map[string]any `json:"file,omitempty"`
	Items []any `json:"items"`
	Ok *bool `json:"ok,omitempty"`
	Paging map[string]any `json:"paging"`
	ResponseMetadata *any `json:"response_metadata,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ReactionLoadMatch is the typed request payload for Reaction.LoadTyped.
type ReactionLoadMatch struct {
	Channel *any `json:"channel,omitempty"`
	File *any `json:"file,omitempty"`
	FileComment *any `json:"file_comment,omitempty"`
	Full *any `json:"full,omitempty"`
	Timestamp *any `json:"timestamp,omitempty"`
	Token string `json:"token"`
}

// ReactionListMatch is the typed request payload for Reaction.ListTyped.
type ReactionListMatch struct {
	Count *any `json:"count,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Full *any `json:"full,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Token string `json:"token"`
	User *any `json:"user,omitempty"`
}

// ReactionCreateData is the typed request payload for Reaction.CreateTyped.
type ReactionCreateData struct {
	Channel *any `json:"channel,omitempty"`
	File *any `json:"file,omitempty"`
	FileComment *any `json:"file_comment,omitempty"`
	Name string `json:"name"`
	Timestamp *any `json:"timestamp,omitempty"`
	Items []any `json:"items"`
	Ok *bool `json:"ok,omitempty"`
	Paging map[string]any `json:"paging"`
	ResponseMetadata *any `json:"response_metadata,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Reminder is the typed data model for the reminder entity.
type Reminder struct {
	CompleteTs *int `json:"complete_ts,omitempty"`
	Creator string `json:"creator"`
	Id string `json:"id"`
	Ok bool `json:"ok"`
	Recurring bool `json:"recurring"`
	Text string `json:"text"`
	Time *int `json:"time,omitempty"`
	User string `json:"user"`
}

// ReminderLoadMatch is the typed request payload for Reminder.LoadTyped.
type ReminderLoadMatch struct {
	Reminder *any `json:"reminder,omitempty"`
	Token *string `json:"token,omitempty"`
}

// ReminderListMatch is the typed request payload for Reminder.ListTyped.
type ReminderListMatch struct {
	Token *string `json:"token,omitempty"`
}

// ReminderCreateData is the typed request payload for Reminder.CreateTyped.
type ReminderCreateData struct {
	Text any `json:"text"`
	Time any `json:"time"`
	User *any `json:"user,omitempty"`
	CompleteTs *int `json:"complete_ts,omitempty"`
	Creator string `json:"creator"`
	Id string `json:"id"`
	Ok bool `json:"ok"`
	Recurring bool `json:"recurring"`
}

// Rtm is the typed data model for the rtm entity.
type Rtm struct {
	Ok bool `json:"ok"`
	Self map[string]any `json:"self"`
	Team map[string]any `json:"team"`
	Url string `json:"url"`
}

// RtmLoadMatch is the typed request payload for Rtm.LoadTyped.
type RtmLoadMatch struct {
	BatchPresenceAware *any `json:"batch_presence_aware,omitempty"`
	PresenceSub *any `json:"presence_sub,omitempty"`
	Token string `json:"token"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Ok bool `json:"ok"`
}

// SearchLoadMatch is the typed request payload for Search.LoadTyped.
type SearchLoadMatch struct {
	Count *any `json:"count,omitempty"`
	Highlight *any `json:"highlight,omitempty"`
	Page *int `json:"page,omitempty"`
	Query any `json:"query"`
	Sort *any `json:"sort,omitempty"`
	SortDir *any `json:"sort_dir,omitempty"`
	Token string `json:"token"`
}

// Star is the typed data model for the star entity.
type Star struct {
	Items []any `json:"items"`
	Ok bool `json:"ok"`
	Paging map[string]any `json:"paging"`
}

// StarListMatch is the typed request payload for Star.ListTyped.
type StarListMatch struct {
	Count *any `json:"count,omitempty"`
	Cursor *any `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Token *string `json:"token,omitempty"`
}

// StarCreateData is the typed request payload for Star.CreateTyped.
type StarCreateData struct {
	Channel *any `json:"channel,omitempty"`
	File *any `json:"file,omitempty"`
	FileComment *any `json:"file_comment,omitempty"`
	Timestamp *any `json:"timestamp,omitempty"`
	Items []any `json:"items"`
	Ok bool `json:"ok"`
	Paging map[string]any `json:"paging"`
}

// Team is the typed data model for the team entity.
type Team struct {
	AdminAppId *string `json:"admin_app_id,omitempty"`
	AppId string `json:"app_id"`
	AppType string `json:"app_type"`
	Archived *bool `json:"archived,omitempty"`
	AvatarBaseUrl *string `json:"avatar_base_url,omitempty"`
	ChangeType string `json:"change_type"`
	Channel *string `json:"channel,omitempty"`
	Count int `json:"count"`
	Country any `json:"country"`
	Created *int `json:"created,omitempty"`
	Date string `json:"date"`
	DateCreate *int `json:"date_create,omitempty"`
	DateFirst int `json:"date_first"`
	DateLast int `json:"date_last"`
	Deleted *bool `json:"deleted,omitempty"`
	Description *any `json:"description,omitempty"`
	Discoverable *any `json:"discoverable,omitempty"`
	Domain string `json:"domain"`
	EmailDomain string `json:"email_domain"`
	EnterpriseId *string `json:"enterprise_id,omitempty"`
	EnterpriseName *string `json:"enterprise_name,omitempty"`
	ExternalOrgMigrations map[string]any `json:"external_org_migrations"`
	HasComplianceExport *bool `json:"has_compliance_export,omitempty"`
	Icon map[string]any `json:"icon"`
	Id string `json:"id"`
	Ip any `json:"ip"`
	IsAssigned *bool `json:"is_assigned,omitempty"`
	IsEnterprise *int `json:"is_enterprise,omitempty"`
	IsOverStorageLimit *bool `json:"is_over_storage_limit,omitempty"`
	Isp any `json:"isp"`
	LimitTs *int `json:"limit_ts,omitempty"`
	Locale *string `json:"locale,omitempty"`
	MessagesCount *int `json:"messages_count,omitempty"`
	MsgEditWindowMins *int `json:"msg_edit_window_mins,omitempty"`
	Name string `json:"name"`
	Ok bool `json:"ok"`
	OverIntegrationsLimit *bool `json:"over_integrations_limit,omitempty"`
	OverStorageLimit *bool `json:"over_storage_limit,omitempty"`
	PayProdCur *string `json:"pay_prod_cur,omitempty"`
	Plan *string `json:"plan,omitempty"`
	PrimaryOwner map[string]any `json:"primary_owner"`
	Region any `json:"region"`
	Scope string `json:"scope"`
	ServiceId *string `json:"service_id,omitempty"`
	ServiceType *string `json:"service_type,omitempty"`
	SsoProvider *map[string]any `json:"sso_provider,omitempty"`
	UserAgent string `json:"user_agent"`
	UserId string `json:"user_id"`
	UserName string `json:"user_name"`
	Username string `json:"username"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Team *any `json:"team,omitempty"`
	Token string `json:"token"`
	User *any `json:"user,omitempty"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	AppId *string `json:"app_id,omitempty"`
	ChangeType *any `json:"change_type,omitempty"`
	Count *any `json:"count,omitempty"`
	Page *int `json:"page,omitempty"`
	ServiceId *string `json:"service_id,omitempty"`
	Token string `json:"token"`
	User *any `json:"user,omitempty"`
	Before *any `json:"before,omitempty"`
}

// Teamprofile is the typed data model for the teamprofile entity.
type Teamprofile struct {
	Fields []any `json:"fields"`
}

// TeamprofileLoadMatch is the typed request payload for Teamprofile.LoadTyped.
type TeamprofileLoadMatch struct {
	Token string `json:"token"`
	Visibility *any `json:"visibility,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	AutoAway *bool `json:"auto_away,omitempty"`
	AvatarHash string `json:"avatar_hash"`
	CacheTs int `json:"cache_ts"`
	Channels []any `json:"channels"`
	ConnectionCount *int `json:"connection_count,omitempty"`
	Image1024 string `json:"image_1024"`
	Image192 string `json:"image_192"`
	Image24 string `json:"image_24"`
	Image32 string `json:"image_32"`
	Image48 string `json:"image_48"`
	Image512 string `json:"image_512"`
	Image72 string `json:"image_72"`
	ImageOriginal string `json:"image_original"`
	LastActivity *int `json:"last_activity,omitempty"`
	ManualAway *bool `json:"manual_away,omitempty"`
	Members []any `json:"members"`
	Ok bool `json:"ok"`
	Online *bool `json:"online,omitempty"`
	Presence string `json:"presence"`
	ResponseMetadata map[string]any `json:"response_metadata"`
	Team *map[string]any `json:"team,omitempty"`
	User any `json:"user"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	IncludeLocale *any `json:"include_locale,omitempty"`
	Token string `json:"token"`
	User *any `json:"user,omitempty"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	Cursor *any `json:"cursor,omitempty"`
	ExcludeArchived *any `json:"exclude_archived,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Token *string `json:"token,omitempty"`
	Type *any `json:"type,omitempty"`
	User *any `json:"user,omitempty"`
}

// UserCreateData is the typed request payload for User.CreateTyped.
type UserCreateData struct {
	CropW *any `json:"crop_w,omitempty"`
	CropX *any `json:"crop_x,omitempty"`
	CropY *any `json:"crop_y,omitempty"`
	Image *any `json:"image,omitempty"`
	Token string `json:"token"`
	AutoAway *bool `json:"auto_away,omitempty"`
	AvatarHash string `json:"avatar_hash"`
	CacheTs int `json:"cache_ts"`
	Channels []any `json:"channels"`
	ConnectionCount *int `json:"connection_count,omitempty"`
	Image1024 string `json:"image_1024"`
	Image192 string `json:"image_192"`
	Image24 string `json:"image_24"`
	Image32 string `json:"image_32"`
	Image48 string `json:"image_48"`
	Image512 string `json:"image_512"`
	Image72 string `json:"image_72"`
	ImageOriginal string `json:"image_original"`
	LastActivity *int `json:"last_activity,omitempty"`
	ManualAway *bool `json:"manual_away,omitempty"`
	Members []any `json:"members"`
	Ok bool `json:"ok"`
	Online *bool `json:"online,omitempty"`
	Presence string `json:"presence"`
	ResponseMetadata map[string]any `json:"response_metadata"`
	Team *map[string]any `json:"team,omitempty"`
	User any `json:"user"`
}

// Usergroup is the typed data model for the usergroup entity.
type Usergroup struct {
	AutoProvision bool `json:"auto_provision"`
	AutoType any `json:"auto_type"`
	ChannelCount *int `json:"channel_count,omitempty"`
	CreatedBy string `json:"created_by"`
	DateCreate int `json:"date_create"`
	DateDelete int `json:"date_delete"`
	DateUpdate int `json:"date_update"`
	DeletedBy any `json:"deleted_by"`
	Description string `json:"description"`
	EnterpriseSubteamId string `json:"enterprise_subteam_id"`
	Handle string `json:"handle"`
	Id string `json:"id"`
	IsExternal bool `json:"is_external"`
	IsSubteam bool `json:"is_subteam"`
	IsUsergroup bool `json:"is_usergroup"`
	Name string `json:"name"`
	Prefs map[string]any `json:"prefs"`
	TeamId string `json:"team_id"`
	UpdatedBy string `json:"updated_by"`
	UserCount *int `json:"user_count,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// UsergroupListMatch is the typed request payload for Usergroup.ListTyped.
type UsergroupListMatch struct {
	IncludeCount *int `json:"include_count,omitempty"`
	IncludeDisabled *any `json:"include_disabled,omitempty"`
	IncludeUser *any `json:"include_user,omitempty"`
	Token string `json:"token"`
}

// UsergroupCreateData is the typed request payload for Usergroup.CreateTyped.
type UsergroupCreateData struct {
	Channel *any `json:"channel,omitempty"`
	Description *string `json:"description,omitempty"`
	Handle *any `json:"handle,omitempty"`
	IncludeCount *int `json:"include_count,omitempty"`
	Name *string `json:"name,omitempty"`
	Usergroup any `json:"usergroup"`
	AutoProvision bool `json:"auto_provision"`
	AutoType any `json:"auto_type"`
	ChannelCount *int `json:"channel_count,omitempty"`
	CreatedBy string `json:"created_by"`
	DateCreate int `json:"date_create"`
	DateDelete int `json:"date_delete"`
	DateUpdate int `json:"date_update"`
	DeletedBy any `json:"deleted_by"`
	EnterpriseSubteamId string `json:"enterprise_subteam_id"`
	Id string `json:"id"`
	IsExternal bool `json:"is_external"`
	IsSubteam bool `json:"is_subteam"`
	IsUsergroup bool `json:"is_usergroup"`
	Prefs map[string]any `json:"prefs"`
	TeamId string `json:"team_id"`
	UpdatedBy string `json:"updated_by"`
	UserCount *int `json:"user_count,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// Usergroupsuser is the typed data model for the usergroupsuser entity.
type Usergroupsuser struct {
	AutoProvision bool `json:"auto_provision"`
	AutoType any `json:"auto_type"`
	ChannelCount *int `json:"channel_count,omitempty"`
	CreatedBy string `json:"created_by"`
	DateCreate int `json:"date_create"`
	DateDelete int `json:"date_delete"`
	DateUpdate int `json:"date_update"`
	DeletedBy any `json:"deleted_by"`
	Description string `json:"description"`
	EnterpriseSubteamId string `json:"enterprise_subteam_id"`
	Handle string `json:"handle"`
	Id string `json:"id"`
	IsExternal bool `json:"is_external"`
	IsSubteam bool `json:"is_subteam"`
	IsUsergroup bool `json:"is_usergroup"`
	Name string `json:"name"`
	Ok bool `json:"ok"`
	Prefs map[string]any `json:"prefs"`
	TeamId string `json:"team_id"`
	UpdatedBy string `json:"updated_by"`
	UserCount *int `json:"user_count,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// UsergroupsuserListMatch is the typed request payload for Usergroupsuser.ListTyped.
type UsergroupsuserListMatch struct {
	IncludeDisabled *any `json:"include_disabled,omitempty"`
	Token string `json:"token"`
	Usergroup any `json:"usergroup"`
}

// UsergroupsuserCreateData is the typed request payload for Usergroupsuser.CreateTyped.
type UsergroupsuserCreateData struct {
	IncludeCount *int `json:"include_count,omitempty"`
	User any `json:"user"`
	Usergroup any `json:"usergroup"`
	AutoProvision bool `json:"auto_provision"`
	AutoType any `json:"auto_type"`
	ChannelCount *int `json:"channel_count,omitempty"`
	CreatedBy string `json:"created_by"`
	DateCreate int `json:"date_create"`
	DateDelete int `json:"date_delete"`
	DateUpdate int `json:"date_update"`
	DeletedBy any `json:"deleted_by"`
	Description string `json:"description"`
	EnterpriseSubteamId string `json:"enterprise_subteam_id"`
	Handle string `json:"handle"`
	Id string `json:"id"`
	IsExternal bool `json:"is_external"`
	IsSubteam bool `json:"is_subteam"`
	IsUsergroup bool `json:"is_usergroup"`
	Name string `json:"name"`
	Ok bool `json:"ok"`
	Prefs map[string]any `json:"prefs"`
	TeamId string `json:"team_id"`
	UpdatedBy string `json:"updated_by"`
	UserCount *int `json:"user_count,omitempty"`
	Users *[]any `json:"users,omitempty"`
}

// Usersprofile is the typed data model for the usersprofile entity.
type Usersprofile struct {
	AlwaysActive *bool `json:"always_active,omitempty"`
	ApiAppId *string `json:"api_app_id,omitempty"`
	AvatarHash string `json:"avatar_hash"`
	BotId *string `json:"bot_id,omitempty"`
	DisplayName string `json:"display_name"`
	DisplayNameNormalized string `json:"display_name_normalized"`
	Email *any `json:"email,omitempty"`
	Fields any `json:"fields"`
	FirstName *any `json:"first_name,omitempty"`
	GuestExpirationTs *any `json:"guest_expiration_ts,omitempty"`
	GuestInvitedBy *any `json:"guest_invited_by,omitempty"`
	Image1024 *any `json:"image_1024,omitempty"`
	Image192 *any `json:"image_192,omitempty"`
	Image24 *any `json:"image_24,omitempty"`
	Image32 *any `json:"image_32,omitempty"`
	Image48 *any `json:"image_48,omitempty"`
	Image512 *any `json:"image_512,omitempty"`
	Image72 *any `json:"image_72,omitempty"`
	ImageOriginal *any `json:"image_original,omitempty"`
	IsAppUser *bool `json:"is_app_user,omitempty"`
	IsCustomImage *bool `json:"is_custom_image,omitempty"`
	IsRestricted *any `json:"is_restricted,omitempty"`
	IsUltraRestricted *any `json:"is_ultra_restricted,omitempty"`
	LastAvatarImageHash *string `json:"last_avatar_image_hash,omitempty"`
	LastName *any `json:"last_name,omitempty"`
	MembershipsCount *int `json:"memberships_count,omitempty"`
	Name *any `json:"name,omitempty"`
	Phone string `json:"phone"`
	Pronouns *string `json:"pronouns,omitempty"`
	RealName string `json:"real_name"`
	RealNameNormalized string `json:"real_name_normalized"`
	Skype string `json:"skype"`
	StatusDefaultEmoji *string `json:"status_default_emoji,omitempty"`
	StatusDefaultText *string `json:"status_default_text,omitempty"`
	StatusDefaultTextCanonical *any `json:"status_default_text_canonical,omitempty"`
	StatusEmoji string `json:"status_emoji"`
	StatusExpiration *int `json:"status_expiration,omitempty"`
	StatusText string `json:"status_text"`
	StatusTextCanonical *any `json:"status_text_canonical,omitempty"`
	Team *string `json:"team,omitempty"`
	Title string `json:"title"`
	Updated *int `json:"updated,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	Username *any `json:"username,omitempty"`
}

// UsersprofileLoadMatch is the typed request payload for Usersprofile.LoadTyped.
type UsersprofileLoadMatch struct {
	IncludeLabel *any `json:"include_label,omitempty"`
	Token string `json:"token"`
	User *any `json:"user,omitempty"`
}

// UsersprofileCreateData is the typed request payload for Usersprofile.CreateTyped.
type UsersprofileCreateData struct {
	Name *string `json:"name,omitempty"`
	Profile *any `json:"profile,omitempty"`
	User *any `json:"user,omitempty"`
	Value *any `json:"value,omitempty"`
	AlwaysActive *bool `json:"always_active,omitempty"`
	ApiAppId *string `json:"api_app_id,omitempty"`
	AvatarHash string `json:"avatar_hash"`
	BotId *string `json:"bot_id,omitempty"`
	DisplayName string `json:"display_name"`
	DisplayNameNormalized string `json:"display_name_normalized"`
	Email *any `json:"email,omitempty"`
	Fields any `json:"fields"`
	FirstName *any `json:"first_name,omitempty"`
	GuestExpirationTs *any `json:"guest_expiration_ts,omitempty"`
	GuestInvitedBy *any `json:"guest_invited_by,omitempty"`
	Image1024 *any `json:"image_1024,omitempty"`
	Image192 *any `json:"image_192,omitempty"`
	Image24 *any `json:"image_24,omitempty"`
	Image32 *any `json:"image_32,omitempty"`
	Image48 *any `json:"image_48,omitempty"`
	Image512 *any `json:"image_512,omitempty"`
	Image72 *any `json:"image_72,omitempty"`
	ImageOriginal *any `json:"image_original,omitempty"`
	IsAppUser *bool `json:"is_app_user,omitempty"`
	IsCustomImage *bool `json:"is_custom_image,omitempty"`
	IsRestricted *any `json:"is_restricted,omitempty"`
	IsUltraRestricted *any `json:"is_ultra_restricted,omitempty"`
	LastAvatarImageHash *string `json:"last_avatar_image_hash,omitempty"`
	LastName *any `json:"last_name,omitempty"`
	MembershipsCount *int `json:"memberships_count,omitempty"`
	Phone string `json:"phone"`
	Pronouns *string `json:"pronouns,omitempty"`
	RealName string `json:"real_name"`
	RealNameNormalized string `json:"real_name_normalized"`
	Skype string `json:"skype"`
	StatusDefaultEmoji *string `json:"status_default_emoji,omitempty"`
	StatusDefaultText *string `json:"status_default_text,omitempty"`
	StatusDefaultTextCanonical *any `json:"status_default_text_canonical,omitempty"`
	StatusEmoji string `json:"status_emoji"`
	StatusExpiration *int `json:"status_expiration,omitempty"`
	StatusText string `json:"status_text"`
	StatusTextCanonical *any `json:"status_text_canonical,omitempty"`
	Team *string `json:"team,omitempty"`
	Title string `json:"title"`
	Updated *int `json:"updated,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	Username *any `json:"username,omitempty"`
}

// View is the typed data model for the view entity.
type View struct {
	Ok bool `json:"ok"`
}

// ViewLoadMatch is the typed request payload for View.LoadTyped.
type ViewLoadMatch struct {
	ExternalId *string `json:"external_id,omitempty"`
	Hash *any `json:"hash,omitempty"`
	View *any `json:"view,omitempty"`
	ViewId *string `json:"view_id,omitempty"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
	Ok bool `json:"ok"`
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Input *any `json:"input,omitempty"`
	Output *any `json:"output,omitempty"`
	StepImageUrl *any `json:"step_image_url,omitempty"`
	StepName *any `json:"step_name,omitempty"`
	WorkflowStepEditId string `json:"workflow_step_edit_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
