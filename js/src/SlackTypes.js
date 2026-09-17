// Typed models for the Slack SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Adminapp
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminappCreateData
 * @property {string} [app_id]
 * @property {string} [request_id]
 * @property {string} [team_id]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Adminappsapproved
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminappsapprovedLoadMatch
 * @property {*} [cursor]
 * @property {string} [enterprise_id]
 * @property {number} [limit]
 * @property {string} [team_id]
 * @property {string} token
 */

/**
 * @typedef {Object} Adminappsrequest
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminappsrequestLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} [team_id]
 * @property {string} token
 */

/**
 * @typedef {Object} Adminappsrestricted
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminappsrestrictedLoadMatch
 * @property {*} [cursor]
 * @property {string} [enterprise_id]
 * @property {number} [limit]
 * @property {string} [team_id]
 * @property {string} token
 */

/**
 * @typedef {Object} Adminconversation
 * @property {string} [accepted_user]
 * @property {Object} [can_thread]
 * @property {string} [channel_id]
 * @property {number} created
 * @property {string} creator
 * @property {string} id
 * @property {boolean} [is_archived]
 * @property {boolean} is_channel
 * @property {boolean} [is_frozen]
 * @property {boolean} [is_general]
 * @property {boolean} [is_member]
 * @property {number} [is_moved]
 * @property {boolean} is_mpim
 * @property {boolean} [is_non_threadable]
 * @property {boolean} is_org_shared
 * @property {boolean} [is_pending_ext_shared]
 * @property {boolean} is_private
 * @property {boolean} [is_read_only]
 * @property {boolean} is_shared
 * @property {boolean} [is_thread_only]
 * @property {string} [last_read]
 * @property {*} [latest]
 * @property {Array} members
 * @property {string} name
 * @property {string} name_normalized
 * @property {number} [num_members]
 * @property {boolean} ok
 * @property {Array} [pending_shared]
 * @property {Array} [previous_names]
 * @property {number} [priority]
 * @property {Object} purpose
 * @property {Object} response_metadata
 * @property {Array} team_ids
 * @property {Object} topic
 * @property {number} [unlinked]
 * @property {number} [unread_count]
 * @property {number} [unread_count_display]
 * @property {Object} [who_can_post]
 */

/**
 * @typedef {Object} AdminconversationLoadMatch
 * @property {string} channel_id
 */

/**
 * @typedef {Object} AdminconversationListMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {*} [query]
 * @property {*} [search_channel_type]
 * @property {*} [sort]
 * @property {*} [sort_dir]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AdminconversationCreateData
 * @property {string} [description]
 * @property {boolean} is_private
 * @property {string} name
 * @property {*} [org_wide]
 * @property {string} [team_id]
 * @property {string} [accepted_user]
 * @property {Object} [can_thread]
 * @property {string} [channel_id]
 * @property {number} created
 * @property {string} creator
 * @property {string} id
 * @property {boolean} [is_archived]
 * @property {boolean} is_channel
 * @property {boolean} [is_frozen]
 * @property {boolean} [is_general]
 * @property {boolean} [is_member]
 * @property {number} [is_moved]
 * @property {boolean} is_mpim
 * @property {boolean} [is_non_threadable]
 * @property {boolean} is_org_shared
 * @property {boolean} [is_pending_ext_shared]
 * @property {boolean} [is_read_only]
 * @property {boolean} is_shared
 * @property {boolean} [is_thread_only]
 * @property {string} [last_read]
 * @property {*} [latest]
 * @property {Array} members
 * @property {string} name_normalized
 * @property {number} [num_members]
 * @property {boolean} ok
 * @property {Array} [pending_shared]
 * @property {Array} [previous_names]
 * @property {number} [priority]
 * @property {Object} purpose
 * @property {Object} response_metadata
 * @property {Array} team_ids
 * @property {Object} topic
 * @property {number} [unlinked]
 * @property {number} [unread_count]
 * @property {number} [unread_count_display]
 * @property {Object} [who_can_post]
 */

/**
 * @typedef {Object} Adminconversationsekm
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminconversationsekmLoadMatch
 * @property {string} [channel_id]
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} [team_id]
 * @property {string} token
 */

/**
 * @typedef {Object} AdminconversationsrestrictAccess
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminconversationsrestrictAccessLoadMatch
 * @property {string} channel_id
 * @property {string} [team_id]
 * @property {string} token
 */

/**
 * @typedef {Object} AdminconversationsrestrictAccessCreateData
 * @property {string} channel_id
 * @property {string} group_id
 * @property {string} [team_id]
 * @property {string} token
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Adminemoji
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminemojiLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} token
 */

/**
 * @typedef {Object} AdminemojiCreateData
 * @property {*} [alias_for]
 * @property {string} name
 * @property {string} token
 * @property {*} [new_name]
 * @property {string} [url]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdmininviteRequest
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdmininviteRequestLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AdmininviteRequestCreateData
 * @property {string} invite_request_id
 * @property {string} [team_id]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdmininviteRequestsapproved
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdmininviteRequestsapprovedLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} AdmininviteRequestsdenied
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdmininviteRequestsdeniedLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} [team_id]
 */

/**
 * @typedef {Object} Adminteam
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminteamLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} AdminteamCreateData
 * @property {*} [team_description]
 * @property {*} [team_discoverability]
 * @property {*} team_domain
 * @property {*} team_name
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Adminteamsadmin
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminteamsadminLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} team_id
 * @property {string} token
 */

/**
 * @typedef {Object} Adminteamsowner
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminteamsownerLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} team_id
 * @property {string} token
 */

/**
 * @typedef {Object} Adminteamssetting
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminteamssettingLoadMatch
 * @property {string} team_id
 */

/**
 * @typedef {Object} AdminteamssettingCreateData
 * @property {string} [channel_id]
 * @property {string} team_id
 * @property {string} [token]
 * @property {string} [description]
 * @property {*} [discoverability]
 * @property {*} [image_url]
 * @property {string} [name]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Adminuser
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminuserLoadMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} team_id
 */

/**
 * @typedef {Object} AdminuserCreateData
 * @property {string} [channel_id]
 * @property {*} [custom_message]
 * @property {string} [email]
 * @property {*} [guest_expiration_t]
 * @property {boolean} [is_restricted]
 * @property {boolean} [is_ultra_restricted]
 * @property {*} [real_name]
 * @property {*} [resend]
 * @property {string} team_id
 * @property {string} [user_id]
 * @property {*} [expiration_t]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Adminusergroup
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminusergroupLoadMatch
 * @property {*} [include_num_member]
 * @property {string} [team_id]
 * @property {string} usergroup_id
 */

/**
 * @typedef {Object} AdminusergroupCreateData
 * @property {*} [auto_provision]
 * @property {string} [team_id]
 * @property {string} usergroup_id
 * @property {string} [channel_id]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Adminuserssession
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AdminuserssessionCreateData
 * @property {*} [mobile_only]
 * @property {string} user_id
 * @property {*} [web_only]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Api
 * @property {boolean} ok
 */

/**
 * @typedef {Object} ApiLoadMatch
 * @property {*} [error]
 * @property {*} [foo]
 */

/**
 * @typedef {Object} App
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AppLoadMatch
 * @property {string} [client_id]
 * @property {*} [client_secret]
 * @property {string} [token]
 */

/**
 * @typedef {Object} Appseventauthorization
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AppseventauthorizationLoadMatch
 * @property {*} [cursor]
 * @property {*} event_context
 * @property {number} [limit]
 */

/**
 * @typedef {Object} Appspermission
 * @property {Object} app_home
 * @property {Object} channel
 * @property {Object} group
 * @property {Object} im
 * @property {Object} mpim
 * @property {boolean} ok
 * @property {Object} team
 */

/**
 * @typedef {Object} AppspermissionLoadMatch
 * @property {*} scope
 * @property {string} token
 * @property {string} trigger_id
 */

/**
 * @typedef {Object} Appspermissionsresource
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AppspermissionsresourceListMatch
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} token
 */

/**
 * @typedef {Object} Appspermissionsscope
 * @property {Array} [app_home]
 * @property {Array} [channel]
 * @property {Array} [group]
 * @property {Array} [im]
 * @property {Array} [mpim]
 * @property {Array} [team]
 * @property {Array} [user]
 */

/**
 * @typedef {Object} AppspermissionsscopeLoadMatch
 * @property {string} token
 */

/**
 * @typedef {Object} Appspermissionsuser
 * @property {boolean} ok
 */

/**
 * @typedef {Object} AppspermissionsuserLoadMatch
 * @property {*} [scope]
 * @property {string} token
 * @property {string} [trigger_id]
 * @property {*} [user]
 * @property {*} [cursor]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} Auth
 * @property {string} [bot_id]
 * @property {boolean} [is_enterprise_install]
 * @property {boolean} ok
 * @property {boolean} revoked
 * @property {string} team
 * @property {string} team_id
 * @property {string} url
 * @property {string} user
 * @property {string} user_id
 */

/**
 * @typedef {Object} AuthLoadMatch
 * @property {*} [test]
 * @property {string} token
 */

/**
 * @typedef {Object} Bot
 * @property {string} app_id
 * @property {boolean} deleted
 * @property {Object} icons
 * @property {string} id
 * @property {string} name
 * @property {number} updated
 * @property {string} [user_id]
 */

/**
 * @typedef {Object} BotLoadMatch
 * @property {*} [bot]
 * @property {string} token
 */

/**
 * @typedef {Object} Call
 * @property {boolean} ok
 */

/**
 * @typedef {Object} CallLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CallCreateData
 * @property {*} [created_by]
 * @property {*} [date_start]
 * @property {*} [desktop_app_join_url]
 * @property {string} [external_display_id]
 * @property {string} external_unique_id
 * @property {*} join_url
 * @property {string} [title]
 * @property {*} [user]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Callsparticipant
 * @property {boolean} ok
 */

/**
 * @typedef {Object} CallsparticipantCreateData
 * @property {string} id
 * @property {*} user
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Chat
 * @property {Array} [attachments]
 * @property {Array} [blocks]
 * @property {string} [bot_id]
 * @property {Object} bot_profile
 * @property {string} channel
 * @property {string} [client_msg_id]
 * @property {Object} comment
 * @property {boolean} [display_as_bot]
 * @property {Object} [file]
 * @property {Array} [files]
 * @property {Object} [icons]
 * @property {string} [inviter]
 * @property {boolean} [is_delayed_message]
 * @property {boolean} [is_intro]
 * @property {boolean} [is_starred]
 * @property {string} [last_read]
 * @property {string} [latest_reply]
 * @property {string} message_ts
 * @property {string} [name]
 * @property {boolean} ok
 * @property {string} [old_name]
 * @property {string} [parent_user_id]
 * @property {string} permalink
 * @property {Array} [pinned_to]
 * @property {string} [purpose]
 * @property {Array} [reactions]
 * @property {number} [reply_count]
 * @property {Array} [reply_users]
 * @property {number} [reply_users_count]
 * @property {string} [source_team]
 * @property {boolean} [subscribed]
 * @property {string} [subtype]
 * @property {string} [team]
 * @property {string} text
 * @property {string} [thread_ts]
 * @property {string} [topic]
 * @property {string} ts
 * @property {string} type
 * @property {number} [unread_count]
 * @property {boolean} [upload]
 * @property {string} [user]
 * @property {Object} user_profile
 * @property {string} [user_team]
 * @property {string} [username]
 */

/**
 * @typedef {Object} ChatLoadMatch
 * @property {*} channel
 * @property {*} message_t
 * @property {string} token
 */

/**
 * @typedef {Object} ChatCreateData
 * @property {*} [as_user]
 * @property {*} [attachment]
 * @property {*} [block]
 * @property {*} channel
 * @property {*} [icon_emoji]
 * @property {*} [icon_url]
 * @property {*} [link_name]
 * @property {*} [mrkdwn]
 * @property {*} [parse]
 * @property {*} [reply_broadcast]
 * @property {*} [text]
 * @property {*} [thread_t]
 * @property {*} [unfurl_link]
 * @property {*} [unfurl_media]
 * @property {string} [username]
 * @property {Array} [attachments]
 * @property {Array} [blocks]
 * @property {string} [bot_id]
 * @property {Object} bot_profile
 * @property {string} [client_msg_id]
 * @property {Object} comment
 * @property {boolean} [display_as_bot]
 * @property {Object} [file]
 * @property {Array} [files]
 * @property {Object} [icons]
 * @property {string} [inviter]
 * @property {boolean} [is_delayed_message]
 * @property {boolean} [is_intro]
 * @property {boolean} [is_starred]
 * @property {string} [last_read]
 * @property {string} [latest_reply]
 * @property {string} message_ts
 * @property {string} [name]
 * @property {boolean} ok
 * @property {string} [old_name]
 * @property {string} [parent_user_id]
 * @property {string} permalink
 * @property {Array} [pinned_to]
 * @property {string} [purpose]
 * @property {Array} [reactions]
 * @property {number} [reply_count]
 * @property {Array} [reply_users]
 * @property {number} [reply_users_count]
 * @property {string} [source_team]
 * @property {boolean} [subscribed]
 * @property {string} [subtype]
 * @property {string} [team]
 * @property {string} [thread_ts]
 * @property {string} [topic]
 * @property {string} ts
 * @property {string} type
 * @property {number} [unread_count]
 * @property {boolean} [upload]
 * @property {string} [user]
 * @property {Object} user_profile
 * @property {string} [user_team]
 */

/**
 * @typedef {Object} ChatscheduledMessage
 * @property {string} channel_id
 * @property {number} date_created
 * @property {string} id
 * @property {number} post_at
 * @property {string} [text]
 */

/**
 * @typedef {Object} ChatscheduledMessageListMatch
 * @property {*} [channel]
 * @property {*} [cursor]
 * @property {*} [latest]
 * @property {number} [limit]
 * @property {*} [oldest]
 */

/**
 * @typedef {Object} Conversation
 * @property {boolean} [already_closed]
 * @property {boolean} [already_open]
 * @property {Array} [attachments]
 * @property {Array} [blocks]
 * @property {string} [bot_id]
 * @property {Object} bot_profile
 * @property {*} channel
 * @property {Array} channels
 * @property {string} [client_msg_id]
 * @property {Object} comment
 * @property {boolean} [display_as_bot]
 * @property {Object} [file]
 * @property {Array} [files]
 * @property {boolean} [has_more]
 * @property {Object} [icons]
 * @property {string} [inviter]
 * @property {boolean} [is_delayed_message]
 * @property {boolean} [is_intro]
 * @property {boolean} [is_starred]
 * @property {string} [last_read]
 * @property {string} [latest_reply]
 * @property {Array} members
 * @property {Array} messages
 * @property {string} [name]
 * @property {boolean} [no_op]
 * @property {boolean} [not_in_channel]
 * @property {boolean} ok
 * @property {string} [old_name]
 * @property {string} [parent_user_id]
 * @property {string} [permalink]
 * @property {Array} [pinned_to]
 * @property {string} [purpose]
 * @property {Array} [reactions]
 * @property {number} [reply_count]
 * @property {Array} [reply_users]
 * @property {number} [reply_users_count]
 * @property {Object} [response_metadata]
 * @property {string} [source_team]
 * @property {boolean} [subscribed]
 * @property {string} [subtype]
 * @property {string} [team]
 * @property {string} text
 * @property {string} [thread_ts]
 * @property {string} [topic]
 * @property {string} ts
 * @property {string} type
 * @property {number} [unread_count]
 * @property {boolean} [upload]
 * @property {string} [user]
 * @property {Object} user_profile
 * @property {string} [user_team]
 * @property {string} [username]
 * @property {string} [warning]
 */

/**
 * @typedef {Object} ConversationLoadMatch
 * @property {*} [channel]
 * @property {*} [include_locale]
 * @property {*} [include_num_member]
 * @property {string} [token]
 */

/**
 * @typedef {Object} ConversationListMatch
 * @property {*} [channel]
 * @property {*} [cursor]
 * @property {*} [inclusive]
 * @property {*} [latest]
 * @property {number} [limit]
 * @property {*} [oldest]
 * @property {string} [token]
 * @property {*} [ts]
 */

/**
 * @typedef {Object} ConversationCreateData
 * @property {*} [channel]
 * @property {*} [return_im]
 * @property {*} [user]
 * @property {boolean} [already_closed]
 * @property {boolean} [already_open]
 * @property {Array} [attachments]
 * @property {Array} [blocks]
 * @property {string} [bot_id]
 * @property {Object} bot_profile
 * @property {Array} channels
 * @property {string} [client_msg_id]
 * @property {Object} comment
 * @property {boolean} [display_as_bot]
 * @property {Object} [file]
 * @property {Array} [files]
 * @property {boolean} [has_more]
 * @property {Object} [icons]
 * @property {string} [inviter]
 * @property {boolean} [is_delayed_message]
 * @property {boolean} [is_intro]
 * @property {boolean} [is_starred]
 * @property {string} [last_read]
 * @property {string} [latest_reply]
 * @property {Array} members
 * @property {Array} messages
 * @property {string} [name]
 * @property {boolean} [no_op]
 * @property {boolean} [not_in_channel]
 * @property {boolean} ok
 * @property {string} [old_name]
 * @property {string} [parent_user_id]
 * @property {string} [permalink]
 * @property {Array} [pinned_to]
 * @property {string} [purpose]
 * @property {Array} [reactions]
 * @property {number} [reply_count]
 * @property {Array} [reply_users]
 * @property {number} [reply_users_count]
 * @property {Object} [response_metadata]
 * @property {string} [source_team]
 * @property {boolean} [subscribed]
 * @property {string} [subtype]
 * @property {string} [team]
 * @property {string} text
 * @property {string} [thread_ts]
 * @property {string} [topic]
 * @property {string} ts
 * @property {string} type
 * @property {number} [unread_count]
 * @property {boolean} [upload]
 * @property {Object} user_profile
 * @property {string} [user_team]
 * @property {string} [username]
 * @property {string} [warning]
 */

/**
 * @typedef {Object} Dialog
 * @property {boolean} ok
 */

/**
 * @typedef {Object} DialogLoadMatch
 * @property {*} dialog
 * @property {string} trigger_id
 */

/**
 * @typedef {Object} Dnd
 * @property {boolean} dnd_enabled
 * @property {number} next_dnd_end_ts
 * @property {number} next_dnd_start_ts
 * @property {boolean} ok
 * @property {boolean} [snooze_enabled]
 * @property {number} [snooze_endtime]
 * @property {number} [snooze_remaining]
 */

/**
 * @typedef {Object} DndLoadMatch
 * @property {string} [token]
 * @property {*} [user]
 */

/**
 * @typedef {Object} DndCreateData
 * @property {number} num_minute
 * @property {string} token
 * @property {boolean} dnd_enabled
 * @property {number} next_dnd_end_ts
 * @property {number} next_dnd_start_ts
 * @property {boolean} ok
 * @property {boolean} [snooze_enabled]
 * @property {number} [snooze_endtime]
 * @property {number} [snooze_remaining]
 */

/**
 * @typedef {Object} Emoji
 * @property {boolean} ok
 */

/**
 * @typedef {Object} EmojiLoadMatch
 * @property {string} token
 */

/**
 * @typedef {Object} File
 * @property {Array} [channels]
 * @property {Array} comments
 * @property {number} [comments_count]
 * @property {null} [content_html]
 * @property {number} [created]
 * @property {number} [date_delete]
 * @property {boolean} [display_as_bot]
 * @property {boolean} [editable]
 * @property {string} [editor]
 * @property {string} [external_id]
 * @property {string} [external_type]
 * @property {string} [external_url]
 * @property {Object} file
 * @property {string} [filetype]
 * @property {Array} [groups]
 * @property {boolean} [has_rich_preview]
 * @property {string} [id]
 * @property {number} [image_exif_rotation]
 * @property {Array} [ims]
 * @property {boolean} [is_external]
 * @property {boolean} [is_public]
 * @property {boolean} [is_starred]
 * @property {boolean} [is_tombstoned]
 * @property {string} [last_editor]
 * @property {string} [mimetype]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [non_owner_editable]
 * @property {number} [num_stars]
 * @property {boolean} ok
 * @property {number} [original_h]
 * @property {number} [original_w]
 * @property {Object} paging
 * @property {string} [permalink]
 * @property {string} [permalink_public]
 * @property {Object} [pinned_info]
 * @property {Array} [pinned_to]
 * @property {string} [pretty_type]
 * @property {string} [preview]
 * @property {boolean} [public_url_shared]
 * @property {Array} [reactions]
 * @property {*} [response_metadata]
 * @property {Object} [shares]
 * @property {number} [size]
 * @property {string} [source_team]
 * @property {string} [state]
 * @property {string} [thumb_1024]
 * @property {number} [thumb_1024_h]
 * @property {number} [thumb_1024_w]
 * @property {string} [thumb_160]
 * @property {string} [thumb_360]
 * @property {number} [thumb_360_h]
 * @property {number} [thumb_360_w]
 * @property {string} [thumb_480]
 * @property {number} [thumb_480_h]
 * @property {number} [thumb_480_w]
 * @property {string} [thumb_64]
 * @property {string} [thumb_720]
 * @property {number} [thumb_720_h]
 * @property {number} [thumb_720_w]
 * @property {string} [thumb_80]
 * @property {string} [thumb_800]
 * @property {number} [thumb_800_h]
 * @property {number} [thumb_800_w]
 * @property {string} [thumb_960]
 * @property {number} [thumb_960_h]
 * @property {number} [thumb_960_w]
 * @property {string} [thumb_tiny]
 * @property {number} [timestamp]
 * @property {string} [title]
 * @property {number} [updated]
 * @property {string} [url_private]
 * @property {string} [url_private_download]
 * @property {string} [user]
 * @property {string} [user_team]
 * @property {string} [username]
 */

/**
 * @typedef {Object} FileListMatch
 * @property {*} [channel]
 * @property {*} [count]
 * @property {number} [page]
 * @property {*} [show_files_hidden_by_limit]
 * @property {string} [token]
 * @property {*} [ts_from]
 * @property {*} [ts_to]
 * @property {*} [type]
 * @property {*} [user]
 */

/**
 * @typedef {Object} FileCreateData
 * @property {*} [channel]
 * @property {*} [content]
 * @property {*} [file]
 * @property {*} [filename]
 * @property {*} [filetype]
 * @property {*} [initial_comment]
 * @property {*} [thread_t]
 * @property {string} [title]
 * @property {string} [token]
 * @property {Array} [channels]
 * @property {Array} comments
 * @property {number} [comments_count]
 * @property {null} [content_html]
 * @property {number} [created]
 * @property {number} [date_delete]
 * @property {boolean} [display_as_bot]
 * @property {boolean} [editable]
 * @property {string} [editor]
 * @property {string} [external_id]
 * @property {string} [external_type]
 * @property {string} [external_url]
 * @property {Array} [groups]
 * @property {boolean} [has_rich_preview]
 * @property {string} [id]
 * @property {number} [image_exif_rotation]
 * @property {Array} [ims]
 * @property {boolean} [is_external]
 * @property {boolean} [is_public]
 * @property {boolean} [is_starred]
 * @property {boolean} [is_tombstoned]
 * @property {string} [last_editor]
 * @property {string} [mimetype]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [non_owner_editable]
 * @property {number} [num_stars]
 * @property {boolean} ok
 * @property {number} [original_h]
 * @property {number} [original_w]
 * @property {Object} paging
 * @property {string} [permalink]
 * @property {string} [permalink_public]
 * @property {Object} [pinned_info]
 * @property {Array} [pinned_to]
 * @property {string} [pretty_type]
 * @property {string} [preview]
 * @property {boolean} [public_url_shared]
 * @property {Array} [reactions]
 * @property {*} [response_metadata]
 * @property {Object} [shares]
 * @property {number} [size]
 * @property {string} [source_team]
 * @property {string} [state]
 * @property {string} [thumb_1024]
 * @property {number} [thumb_1024_h]
 * @property {number} [thumb_1024_w]
 * @property {string} [thumb_160]
 * @property {string} [thumb_360]
 * @property {number} [thumb_360_h]
 * @property {number} [thumb_360_w]
 * @property {string} [thumb_480]
 * @property {number} [thumb_480_h]
 * @property {number} [thumb_480_w]
 * @property {string} [thumb_64]
 * @property {string} [thumb_720]
 * @property {number} [thumb_720_h]
 * @property {number} [thumb_720_w]
 * @property {string} [thumb_80]
 * @property {string} [thumb_800]
 * @property {number} [thumb_800_h]
 * @property {number} [thumb_800_w]
 * @property {string} [thumb_960]
 * @property {number} [thumb_960_h]
 * @property {number} [thumb_960_w]
 * @property {string} [thumb_tiny]
 * @property {number} [timestamp]
 * @property {number} [updated]
 * @property {string} [url_private]
 * @property {string} [url_private_download]
 * @property {string} [user]
 * @property {string} [user_team]
 * @property {string} [username]
 */

/**
 * @typedef {Object} Filescomment
 * @property {boolean} ok
 */

/**
 * @typedef {Object} FilescommentCreateData
 * @property {*} [file]
 * @property {string} [id]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Filesremote
 * @property {boolean} ok
 */

/**
 * @typedef {Object} FilesremoteLoadMatch
 * @property {*} [channel]
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {string} [token]
 * @property {*} [ts_from]
 * @property {*} [ts_to]
 */

/**
 * @typedef {Object} FilesremoteCreateData
 * @property {string} [external_id]
 * @property {*} [external_url]
 * @property {*} [file]
 * @property {*} [filetype]
 * @property {*} [indexable_file_content]
 * @property {*} [preview_image]
 * @property {string} [title]
 * @property {string} [token]
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Migration
 * @property {string} enterprise_id
 * @property {Array} [invalid_user_ids]
 * @property {boolean} ok
 * @property {string} team_id
 * @property {Object} [user_id_map]
 */

/**
 * @typedef {Object} MigrationListMatch
 * @property {string} [team_id]
 * @property {*} [to_old]
 * @property {string} token
 * @property {*} user
 */

/**
 * @typedef {Object} Oauth
 * @property {boolean} ok
 */

/**
 * @typedef {Object} OauthLoadMatch
 * @property {string} [client_id]
 * @property {*} [client_secret]
 * @property {*} [code]
 * @property {*} [redirect_uri]
 * @property {*} [single_channel]
 */

/**
 * @typedef {Object} Oauthv2
 * @property {boolean} ok
 */

/**
 * @typedef {Object} Oauthv2LoadMatch
 * @property {string} [client_id]
 * @property {*} [client_secret]
 * @property {*} code
 * @property {*} [redirect_uri]
 */

/**
 * @typedef {Object} Pin
 * @property {Array} [items]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} PinLoadMatch
 * @property {*} channel
 * @property {string} token
 */

/**
 * @typedef {Object} PinCreateData
 * @property {*} channel
 * @property {*} [timestamp]
 * @property {Array} [items]
 * @property {boolean} [ok]
 */

/**
 * @typedef {Object} Reaction
 * @property {Object} [file]
 * @property {Array} items
 * @property {boolean} [ok]
 * @property {Object} paging
 * @property {*} [response_metadata]
 * @property {string} [type]
 */

/**
 * @typedef {Object} ReactionLoadMatch
 * @property {*} [channel]
 * @property {*} [file]
 * @property {*} [file_comment]
 * @property {*} [full]
 * @property {*} [timestamp]
 * @property {string} token
 */

/**
 * @typedef {Object} ReactionListMatch
 * @property {*} [count]
 * @property {*} [cursor]
 * @property {*} [full]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {string} token
 * @property {*} [user]
 */

/**
 * @typedef {Object} ReactionCreateData
 * @property {*} [channel]
 * @property {*} [file]
 * @property {*} [file_comment]
 * @property {string} name
 * @property {*} [timestamp]
 * @property {Array} items
 * @property {boolean} [ok]
 * @property {Object} paging
 * @property {*} [response_metadata]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Reminder
 * @property {number} [complete_ts]
 * @property {string} creator
 * @property {string} id
 * @property {boolean} ok
 * @property {boolean} recurring
 * @property {string} text
 * @property {number} [time]
 * @property {string} user
 */

/**
 * @typedef {Object} ReminderLoadMatch
 * @property {*} [reminder]
 * @property {string} [token]
 */

/**
 * @typedef {Object} ReminderListMatch
 * @property {string} [token]
 */

/**
 * @typedef {Object} ReminderCreateData
 * @property {*} text
 * @property {*} time
 * @property {*} [user]
 * @property {number} [complete_ts]
 * @property {string} creator
 * @property {string} id
 * @property {boolean} ok
 * @property {boolean} recurring
 */

/**
 * @typedef {Object} Rtm
 * @property {boolean} ok
 * @property {Object} self
 * @property {Object} team
 * @property {string} url
 */

/**
 * @typedef {Object} RtmLoadMatch
 * @property {*} [batch_presence_aware]
 * @property {*} [presence_sub]
 * @property {string} token
 */

/**
 * @typedef {Object} Search
 * @property {boolean} ok
 */

/**
 * @typedef {Object} SearchLoadMatch
 * @property {*} [count]
 * @property {*} [highlight]
 * @property {number} [page]
 * @property {*} query
 * @property {*} [sort]
 * @property {*} [sort_dir]
 * @property {string} token
 */

/**
 * @typedef {Object} Star
 * @property {Array} items
 * @property {boolean} ok
 * @property {Object} paging
 */

/**
 * @typedef {Object} StarListMatch
 * @property {*} [count]
 * @property {*} [cursor]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {string} [token]
 */

/**
 * @typedef {Object} StarCreateData
 * @property {*} [channel]
 * @property {*} [file]
 * @property {*} [file_comment]
 * @property {*} [timestamp]
 * @property {Array} items
 * @property {boolean} ok
 * @property {Object} paging
 */

/**
 * @typedef {Object} Team
 * @property {string} [admin_app_id]
 * @property {string} app_id
 * @property {string} app_type
 * @property {boolean} [archived]
 * @property {string} [avatar_base_url]
 * @property {string} change_type
 * @property {string} [channel]
 * @property {number} count
 * @property {string|null} country
 * @property {number} [created]
 * @property {string} date
 * @property {number} [date_create]
 * @property {number} date_first
 * @property {number} date_last
 * @property {boolean} [deleted]
 * @property {null|string} [description]
 * @property {*} [discoverable]
 * @property {string} domain
 * @property {string} email_domain
 * @property {string} [enterprise_id]
 * @property {string} [enterprise_name]
 * @property {Object} external_org_migrations
 * @property {boolean} [has_compliance_export]
 * @property {Object} icon
 * @property {string} id
 * @property {string|null} ip
 * @property {boolean} [is_assigned]
 * @property {number} [is_enterprise]
 * @property {boolean} [is_over_storage_limit]
 * @property {string|null} isp
 * @property {number} [limit_ts]
 * @property {string} [locale]
 * @property {number} [messages_count]
 * @property {number} [msg_edit_window_mins]
 * @property {string} name
 * @property {boolean} ok
 * @property {boolean} [over_integrations_limit]
 * @property {boolean} [over_storage_limit]
 * @property {string} [pay_prod_cur]
 * @property {string} [plan]
 * @property {Object} primary_owner
 * @property {string|null} region
 * @property {string} scope
 * @property {string} [service_id]
 * @property {string} [service_type]
 * @property {Object} [sso_provider]
 * @property {string} user_agent
 * @property {string} user_id
 * @property {string} user_name
 * @property {string} username
 */

/**
 * @typedef {Object} TeamLoadMatch
 * @property {*} [team]
 * @property {string} token
 * @property {*} [user]
 */

/**
 * @typedef {Object} TeamListMatch
 * @property {string} [app_id]
 * @property {*} [change_type]
 * @property {*} [count]
 * @property {number} [page]
 * @property {string} [service_id]
 * @property {string} token
 * @property {*} [user]
 * @property {*} [before]
 */

/**
 * @typedef {Object} Teamprofile
 * @property {Array} fields
 */

/**
 * @typedef {Object} TeamprofileLoadMatch
 * @property {string} token
 * @property {*} [visibility]
 */

/**
 * @typedef {Object} User
 * @property {boolean} [auto_away]
 * @property {string} avatar_hash
 * @property {number} cache_ts
 * @property {Array} channels
 * @property {number} [connection_count]
 * @property {string} image_1024
 * @property {string} image_192
 * @property {string} image_24
 * @property {string} image_32
 * @property {string} image_48
 * @property {string} image_512
 * @property {string} image_72
 * @property {string} image_original
 * @property {number} [last_activity]
 * @property {boolean} [manual_away]
 * @property {Array} members
 * @property {boolean} ok
 * @property {boolean} [online]
 * @property {string} presence
 * @property {Object} response_metadata
 * @property {Object} [team]
 * @property {*} user
 */

/**
 * @typedef {Object} UserLoadMatch
 * @property {*} [include_locale]
 * @property {string} token
 * @property {*} [user]
 */

/**
 * @typedef {Object} UserListMatch
 * @property {*} [cursor]
 * @property {*} [exclude_archived]
 * @property {number} [limit]
 * @property {string} [token]
 * @property {*} [type]
 * @property {*} [user]
 */

/**
 * @typedef {Object} UserCreateData
 * @property {*} [crop_w]
 * @property {*} [crop_x]
 * @property {*} [crop_y]
 * @property {*} [image]
 * @property {string} token
 * @property {boolean} [auto_away]
 * @property {string} avatar_hash
 * @property {number} cache_ts
 * @property {Array} channels
 * @property {number} [connection_count]
 * @property {string} image_1024
 * @property {string} image_192
 * @property {string} image_24
 * @property {string} image_32
 * @property {string} image_48
 * @property {string} image_512
 * @property {string} image_72
 * @property {string} image_original
 * @property {number} [last_activity]
 * @property {boolean} [manual_away]
 * @property {Array} members
 * @property {boolean} ok
 * @property {boolean} [online]
 * @property {string} presence
 * @property {Object} response_metadata
 * @property {Object} [team]
 * @property {*} user
 */

/**
 * @typedef {Object} Usergroup
 * @property {boolean} auto_provision
 * @property {*} auto_type
 * @property {number} [channel_count]
 * @property {string} created_by
 * @property {number} date_create
 * @property {number} date_delete
 * @property {number} date_update
 * @property {*} deleted_by
 * @property {string} description
 * @property {string} enterprise_subteam_id
 * @property {string} handle
 * @property {string} id
 * @property {boolean} is_external
 * @property {boolean} is_subteam
 * @property {boolean} is_usergroup
 * @property {string} name
 * @property {Object} prefs
 * @property {string} team_id
 * @property {string} updated_by
 * @property {number} [user_count]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} UsergroupListMatch
 * @property {number} [include_count]
 * @property {*} [include_disabled]
 * @property {*} [include_user]
 * @property {string} token
 */

/**
 * @typedef {Object} UsergroupCreateData
 * @property {*} [channel]
 * @property {string} [description]
 * @property {*} [handle]
 * @property {number} [include_count]
 * @property {string} [name]
 * @property {*} usergroup
 * @property {boolean} auto_provision
 * @property {*} auto_type
 * @property {number} [channel_count]
 * @property {string} created_by
 * @property {number} date_create
 * @property {number} date_delete
 * @property {number} date_update
 * @property {*} deleted_by
 * @property {string} enterprise_subteam_id
 * @property {string} id
 * @property {boolean} is_external
 * @property {boolean} is_subteam
 * @property {boolean} is_usergroup
 * @property {Object} prefs
 * @property {string} team_id
 * @property {string} updated_by
 * @property {number} [user_count]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} Usergroupsuser
 * @property {boolean} auto_provision
 * @property {*} auto_type
 * @property {number} [channel_count]
 * @property {string} created_by
 * @property {number} date_create
 * @property {number} date_delete
 * @property {number} date_update
 * @property {*} deleted_by
 * @property {string} description
 * @property {string} enterprise_subteam_id
 * @property {string} handle
 * @property {string} id
 * @property {boolean} is_external
 * @property {boolean} is_subteam
 * @property {boolean} is_usergroup
 * @property {string} name
 * @property {boolean} ok
 * @property {Object} prefs
 * @property {string} team_id
 * @property {string} updated_by
 * @property {number} [user_count]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} UsergroupsuserListMatch
 * @property {*} [include_disabled]
 * @property {string} token
 * @property {*} usergroup
 */

/**
 * @typedef {Object} UsergroupsuserCreateData
 * @property {number} [include_count]
 * @property {*} user
 * @property {*} usergroup
 * @property {boolean} auto_provision
 * @property {*} auto_type
 * @property {number} [channel_count]
 * @property {string} created_by
 * @property {number} date_create
 * @property {number} date_delete
 * @property {number} date_update
 * @property {*} deleted_by
 * @property {string} description
 * @property {string} enterprise_subteam_id
 * @property {string} handle
 * @property {string} id
 * @property {boolean} is_external
 * @property {boolean} is_subteam
 * @property {boolean} is_usergroup
 * @property {string} name
 * @property {boolean} ok
 * @property {Object} prefs
 * @property {string} team_id
 * @property {string} updated_by
 * @property {number} [user_count]
 * @property {Array} [users]
 */

/**
 * @typedef {Object} Usersprofile
 * @property {boolean} [always_active]
 * @property {string} [api_app_id]
 * @property {string} avatar_hash
 * @property {string} [bot_id]
 * @property {string} display_name
 * @property {string} display_name_normalized
 * @property {null|string} [email]
 * @property {Object|null|Array} fields
 * @property {null|string} [first_name]
 * @property {null|number} [guest_expiration_ts]
 * @property {null|string} [guest_invited_by]
 * @property {null|string} [image_1024]
 * @property {null|string} [image_192]
 * @property {null|string} [image_24]
 * @property {null|string} [image_32]
 * @property {null|string} [image_48]
 * @property {null|string} [image_512]
 * @property {null|string} [image_72]
 * @property {null|string} [image_original]
 * @property {boolean} [is_app_user]
 * @property {boolean} [is_custom_image]
 * @property {null|boolean} [is_restricted]
 * @property {null|boolean} [is_ultra_restricted]
 * @property {string} [last_avatar_image_hash]
 * @property {null|string} [last_name]
 * @property {number} [memberships_count]
 * @property {null|string} [name]
 * @property {string} phone
 * @property {string} [pronouns]
 * @property {string} real_name
 * @property {string} real_name_normalized
 * @property {string} skype
 * @property {string} [status_default_emoji]
 * @property {string} [status_default_text]
 * @property {null|string} [status_default_text_canonical]
 * @property {string} status_emoji
 * @property {number} [status_expiration]
 * @property {string} status_text
 * @property {null|string} [status_text_canonical]
 * @property {string} [team]
 * @property {string} title
 * @property {number} [updated]
 * @property {string} [user_id]
 * @property {null|string} [username]
 */

/**
 * @typedef {Object} UsersprofileLoadMatch
 * @property {*} [include_label]
 * @property {string} token
 * @property {*} [user]
 */

/**
 * @typedef {Object} UsersprofileCreateData
 * @property {string} [name]
 * @property {*} [profile]
 * @property {*} [user]
 * @property {*} [value]
 * @property {boolean} [always_active]
 * @property {string} [api_app_id]
 * @property {string} avatar_hash
 * @property {string} [bot_id]
 * @property {string} display_name
 * @property {string} display_name_normalized
 * @property {null|string} [email]
 * @property {Object|null|Array} fields
 * @property {null|string} [first_name]
 * @property {null|number} [guest_expiration_ts]
 * @property {null|string} [guest_invited_by]
 * @property {null|string} [image_1024]
 * @property {null|string} [image_192]
 * @property {null|string} [image_24]
 * @property {null|string} [image_32]
 * @property {null|string} [image_48]
 * @property {null|string} [image_512]
 * @property {null|string} [image_72]
 * @property {null|string} [image_original]
 * @property {boolean} [is_app_user]
 * @property {boolean} [is_custom_image]
 * @property {null|boolean} [is_restricted]
 * @property {null|boolean} [is_ultra_restricted]
 * @property {string} [last_avatar_image_hash]
 * @property {null|string} [last_name]
 * @property {number} [memberships_count]
 * @property {string} phone
 * @property {string} [pronouns]
 * @property {string} real_name
 * @property {string} real_name_normalized
 * @property {string} skype
 * @property {string} [status_default_emoji]
 * @property {string} [status_default_text]
 * @property {null|string} [status_default_text_canonical]
 * @property {string} status_emoji
 * @property {number} [status_expiration]
 * @property {string} status_text
 * @property {null|string} [status_text_canonical]
 * @property {string} [team]
 * @property {string} title
 * @property {number} [updated]
 * @property {string} [user_id]
 * @property {null|string} [username]
 */

/**
 * @typedef {Object} View
 * @property {boolean} ok
 */

/**
 * @typedef {Object} ViewLoadMatch
 * @property {string} [external_id]
 * @property {*} [hash]
 * @property {*} [view]
 * @property {string} [view_id]
 */

/**
 * @typedef {Object} Workflow
 * @property {boolean} ok
 */

/**
 * @typedef {Object} WorkflowLoadMatch
 * @property {*} [input]
 * @property {*} [output]
 * @property {*} [step_image_url]
 * @property {*} [step_name]
 * @property {string} workflow_step_edit_id
 */

