package voxgigslacksdk

import (
	"github.com/voxgig-sdk/slack-sdk/go/core"
	"github.com/voxgig-sdk/slack-sdk/go/entity"
	"github.com/voxgig-sdk/slack-sdk/go/feature"
	_ "github.com/voxgig-sdk/slack-sdk/go/utility"
)

// Type aliases preserve external API.
type SlackSDK = core.SlackSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SlackEntity = core.SlackEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SlackError = core.SlackError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAdminappEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminappEntity(client, entopts)
	}
	core.NewAdminappsapprovedEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminappsapprovedEntity(client, entopts)
	}
	core.NewAdminappsrequestEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminappsrequestEntity(client, entopts)
	}
	core.NewAdminappsrestrictedEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminappsrestrictedEntity(client, entopts)
	}
	core.NewAdminconversationEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminconversationEntity(client, entopts)
	}
	core.NewAdminconversationsekmEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminconversationsekmEntity(client, entopts)
	}
	core.NewAdminconversationsrestrictAccessEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminconversationsrestrictAccessEntity(client, entopts)
	}
	core.NewAdminemojiEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminemojiEntity(client, entopts)
	}
	core.NewAdmininviteRequestEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdmininviteRequestEntity(client, entopts)
	}
	core.NewAdmininviteRequestsapprovedEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdmininviteRequestsapprovedEntity(client, entopts)
	}
	core.NewAdmininviteRequestsdeniedEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdmininviteRequestsdeniedEntity(client, entopts)
	}
	core.NewAdminteamEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminteamEntity(client, entopts)
	}
	core.NewAdminteamsadminEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminteamsadminEntity(client, entopts)
	}
	core.NewAdminteamsownerEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminteamsownerEntity(client, entopts)
	}
	core.NewAdminteamssettingEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminteamssettingEntity(client, entopts)
	}
	core.NewAdminuserEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminuserEntity(client, entopts)
	}
	core.NewAdminusergroupEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminusergroupEntity(client, entopts)
	}
	core.NewAdminuserssessionEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAdminuserssessionEntity(client, entopts)
	}
	core.NewApiEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewApiEntity(client, entopts)
	}
	core.NewAppEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAppEntity(client, entopts)
	}
	core.NewAppseventauthorizationEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAppseventauthorizationEntity(client, entopts)
	}
	core.NewAppspermissionEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAppspermissionEntity(client, entopts)
	}
	core.NewAppspermissionsresourceEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAppspermissionsresourceEntity(client, entopts)
	}
	core.NewAppspermissionsscopeEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAppspermissionsscopeEntity(client, entopts)
	}
	core.NewAppspermissionsuserEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAppspermissionsuserEntity(client, entopts)
	}
	core.NewAuthEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewAuthEntity(client, entopts)
	}
	core.NewBotEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewBotEntity(client, entopts)
	}
	core.NewCallEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewCallEntity(client, entopts)
	}
	core.NewCallsparticipantEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewCallsparticipantEntity(client, entopts)
	}
	core.NewChatEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewChatEntity(client, entopts)
	}
	core.NewChatscheduledMessageEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewChatscheduledMessageEntity(client, entopts)
	}
	core.NewConversationEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewConversationEntity(client, entopts)
	}
	core.NewDialogEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewDialogEntity(client, entopts)
	}
	core.NewDndEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewDndEntity(client, entopts)
	}
	core.NewEmojiEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewEmojiEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewFilescommentEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewFilescommentEntity(client, entopts)
	}
	core.NewFilesremoteEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewFilesremoteEntity(client, entopts)
	}
	core.NewMigrationEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewMigrationEntity(client, entopts)
	}
	core.NewOauthEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewOauthEntity(client, entopts)
	}
	core.NewOauthv2EntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewOauthv2Entity(client, entopts)
	}
	core.NewPinEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewPinEntity(client, entopts)
	}
	core.NewReactionEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewReactionEntity(client, entopts)
	}
	core.NewReminderEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewReminderEntity(client, entopts)
	}
	core.NewRtmEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewRtmEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewStarEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewStarEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTeamprofileEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewTeamprofileEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUsergroupEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewUsergroupEntity(client, entopts)
	}
	core.NewUsergroupsuserEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewUsergroupsuserEntity(client, entopts)
	}
	core.NewUsersprofileEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewUsersprofileEntity(client, entopts)
	}
	core.NewViewEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewViewEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.SlackSDK, entopts map[string]any) core.SlackEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSlackSDK = core.NewSlackSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewSlackSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *SlackSDK  { return NewSlackSDK(nil) }
func Test() *SlackSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
