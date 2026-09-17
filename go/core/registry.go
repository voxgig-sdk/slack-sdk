package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAdminappEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminappsapprovedEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminappsrequestEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminappsrestrictedEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminconversationEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminconversationsekmEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminconversationsrestrictAccessEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminemojiEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdmininviteRequestEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdmininviteRequestsapprovedEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdmininviteRequestsdeniedEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminteamEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminteamsadminEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminteamsownerEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminteamssettingEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminuserEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminusergroupEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAdminuserssessionEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewApiEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAppEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAppseventauthorizationEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAppspermissionEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAppspermissionsresourceEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAppspermissionsscopeEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAppspermissionsuserEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewAuthEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewBotEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewCallEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewCallsparticipantEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewChatEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewChatscheduledMessageEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewConversationEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewDialogEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewDndEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewEmojiEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewFileEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewFilescommentEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewFilesremoteEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewMigrationEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewOauthEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewOauthv2EntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewPinEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewReactionEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewReminderEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewRtmEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewSearchEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewStarEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewTeamEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewTeamprofileEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewUserEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewUsergroupEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewUsergroupsuserEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewUsersprofileEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewViewEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewWorkflowEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

