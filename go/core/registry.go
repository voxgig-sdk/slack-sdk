package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewConversationsinfoEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

var NewConversationslistEntityFunc func(client *SlackSDK, entopts map[string]any) SlackEntity

