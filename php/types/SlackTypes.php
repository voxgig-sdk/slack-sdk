<?php
declare(strict_types=1);

// Typed models for the Slack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Adminapp entity data model. */
class Adminapp
{
    public bool $ok;
}

/** Request payload for Adminapp#create. */
class AdminappCreateData
{
    public ?string $app_id = null;
    public ?string $request_id = null;
    public ?string $team_id = null;
    public bool $ok;
}

/** Adminappsapproved entity data model. */
class Adminappsapproved
{
    public bool $ok;
}

/** Request payload for Adminappsapproved#load. */
class AdminappsapprovedLoadMatch
{
    public mixed $cursor = null;
    public ?string $enterprise_id = null;
    public ?int $limit = null;
    public ?string $team_id = null;
    public string $token;
}

/** Adminappsrequest entity data model. */
class Adminappsrequest
{
    public bool $ok;
}

/** Request payload for Adminappsrequest#load. */
class AdminappsrequestLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?string $team_id = null;
    public string $token;
}

/** Adminappsrestricted entity data model. */
class Adminappsrestricted
{
    public bool $ok;
}

/** Request payload for Adminappsrestricted#load. */
class AdminappsrestrictedLoadMatch
{
    public mixed $cursor = null;
    public ?string $enterprise_id = null;
    public ?int $limit = null;
    public ?string $team_id = null;
    public string $token;
}

/** Adminconversation entity data model. */
class Adminconversation
{
    public ?string $accepted_user = null;
    public ?array $can_thread = null;
    public ?string $channel_id = null;
    public int $created;
    public string $creator;
    public string $id;
    public ?bool $is_archived = null;
    public bool $is_channel;
    public ?bool $is_frozen = null;
    public ?bool $is_general = null;
    public ?bool $is_member = null;
    public ?int $is_moved = null;
    public bool $is_mpim;
    public ?bool $is_non_threadable = null;
    public bool $is_org_shared;
    public ?bool $is_pending_ext_shared = null;
    public bool $is_private;
    public ?bool $is_read_only = null;
    public bool $is_shared;
    public ?bool $is_thread_only = null;
    public ?string $last_read = null;
    public mixed $latest = null;
    public array $members;
    public string $name;
    public string $name_normalized;
    public ?int $num_members = null;
    public bool $ok;
    public ?array $pending_shared = null;
    public ?array $previous_names = null;
    public ?float $priority = null;
    public array $purpose;
    public array $response_metadata;
    public array $team_ids;
    public array $topic;
    public ?int $unlinked = null;
    public ?int $unread_count = null;
    public ?int $unread_count_display = null;
    public ?array $who_can_post = null;
}

/** Request payload for Adminconversation#load. */
class AdminconversationLoadMatch
{
    public string $channel_id;
}

/** Request payload for Adminconversation#list. */
class AdminconversationListMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public mixed $query = null;
    public mixed $search_channel_type = null;
    public mixed $sort = null;
    public mixed $sort_dir = null;
    public ?string $team_id = null;
}

/** Request payload for Adminconversation#create. */
class AdminconversationCreateData
{
    public ?string $description = null;
    public bool $is_private;
    public string $name;
    public mixed $org_wide = null;
    public ?string $team_id = null;
    public ?string $accepted_user = null;
    public ?array $can_thread = null;
    public ?string $channel_id = null;
    public int $created;
    public string $creator;
    public string $id;
    public ?bool $is_archived = null;
    public bool $is_channel;
    public ?bool $is_frozen = null;
    public ?bool $is_general = null;
    public ?bool $is_member = null;
    public ?int $is_moved = null;
    public bool $is_mpim;
    public ?bool $is_non_threadable = null;
    public bool $is_org_shared;
    public ?bool $is_pending_ext_shared = null;
    public ?bool $is_read_only = null;
    public bool $is_shared;
    public ?bool $is_thread_only = null;
    public ?string $last_read = null;
    public mixed $latest = null;
    public array $members;
    public string $name_normalized;
    public ?int $num_members = null;
    public bool $ok;
    public ?array $pending_shared = null;
    public ?array $previous_names = null;
    public ?float $priority = null;
    public array $purpose;
    public array $response_metadata;
    public array $team_ids;
    public array $topic;
    public ?int $unlinked = null;
    public ?int $unread_count = null;
    public ?int $unread_count_display = null;
    public ?array $who_can_post = null;
}

/** Adminconversationsekm entity data model. */
class Adminconversationsekm
{
    public bool $ok;
}

/** Request payload for Adminconversationsekm#load. */
class AdminconversationsekmLoadMatch
{
    public ?string $channel_id = null;
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?string $team_id = null;
    public string $token;
}

/** AdminconversationsrestrictAccess entity data model. */
class AdminconversationsrestrictAccess
{
    public bool $ok;
}

/** Request payload for AdminconversationsrestrictAccess#load. */
class AdminconversationsrestrictAccessLoadMatch
{
    public string $channel_id;
    public ?string $team_id = null;
    public string $token;
}

/** Request payload for AdminconversationsrestrictAccess#create. */
class AdminconversationsrestrictAccessCreateData
{
    public string $channel_id;
    public string $group_id;
    public ?string $team_id = null;
    public string $token;
    public bool $ok;
}

/** Adminemoji entity data model. */
class Adminemoji
{
    public bool $ok;
}

/** Request payload for Adminemoji#load. */
class AdminemojiLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public string $token;
}

/** Request payload for Adminemoji#create. */
class AdminemojiCreateData
{
    public mixed $alias_for = null;
    public string $name;
    public string $token;
    public mixed $new_name = null;
    public ?string $url = null;
    public bool $ok;
}

/** AdmininviteRequest entity data model. */
class AdmininviteRequest
{
    public bool $ok;
}

/** Request payload for AdmininviteRequest#load. */
class AdmininviteRequestLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?string $team_id = null;
}

/** Request payload for AdmininviteRequest#create. */
class AdmininviteRequestCreateData
{
    public string $invite_request_id;
    public ?string $team_id = null;
    public bool $ok;
}

/** AdmininviteRequestsapproved entity data model. */
class AdmininviteRequestsapproved
{
    public bool $ok;
}

/** Request payload for AdmininviteRequestsapproved#load. */
class AdmininviteRequestsapprovedLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?string $team_id = null;
}

/** AdmininviteRequestsdenied entity data model. */
class AdmininviteRequestsdenied
{
    public bool $ok;
}

/** Request payload for AdmininviteRequestsdenied#load. */
class AdmininviteRequestsdeniedLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?string $team_id = null;
}

/** Adminteam entity data model. */
class Adminteam
{
    public bool $ok;
}

/** Request payload for Adminteam#load. */
class AdminteamLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
}

/** Request payload for Adminteam#create. */
class AdminteamCreateData
{
    public mixed $team_description = null;
    public mixed $team_discoverability = null;
    public mixed $team_domain;
    public mixed $team_name;
    public bool $ok;
}

/** Adminteamsadmin entity data model. */
class Adminteamsadmin
{
    public bool $ok;
}

/** Request payload for Adminteamsadmin#load. */
class AdminteamsadminLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public string $team_id;
    public string $token;
}

/** Adminteamsowner entity data model. */
class Adminteamsowner
{
    public bool $ok;
}

/** Request payload for Adminteamsowner#load. */
class AdminteamsownerLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public string $team_id;
    public string $token;
}

/** Adminteamssetting entity data model. */
class Adminteamssetting
{
    public bool $ok;
}

/** Request payload for Adminteamssetting#load. */
class AdminteamssettingLoadMatch
{
    public string $team_id;
}

/** Request payload for Adminteamssetting#create. */
class AdminteamssettingCreateData
{
    public ?string $channel_id = null;
    public string $team_id;
    public ?string $token = null;
    public ?string $description = null;
    public mixed $discoverability = null;
    public mixed $image_url = null;
    public ?string $name = null;
    public bool $ok;
}

/** Adminuser entity data model. */
class Adminuser
{
    public bool $ok;
}

/** Request payload for Adminuser#load. */
class AdminuserLoadMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public string $team_id;
}

/** Request payload for Adminuser#create. */
class AdminuserCreateData
{
    public ?string $channel_id = null;
    public mixed $custom_message = null;
    public ?string $email = null;
    public mixed $guest_expiration_t = null;
    public ?bool $is_restricted = null;
    public ?bool $is_ultra_restricted = null;
    public mixed $real_name = null;
    public mixed $resend = null;
    public string $team_id;
    public ?string $user_id = null;
    public mixed $expiration_t = null;
    public bool $ok;
}

/** Adminusergroup entity data model. */
class Adminusergroup
{
    public bool $ok;
}

/** Request payload for Adminusergroup#load. */
class AdminusergroupLoadMatch
{
    public mixed $include_num_member = null;
    public ?string $team_id = null;
    public string $usergroup_id;
}

/** Request payload for Adminusergroup#create. */
class AdminusergroupCreateData
{
    public mixed $auto_provision = null;
    public ?string $team_id = null;
    public string $usergroup_id;
    public ?string $channel_id = null;
    public bool $ok;
}

/** Adminuserssession entity data model. */
class Adminuserssession
{
    public bool $ok;
}

/** Request payload for Adminuserssession#create. */
class AdminuserssessionCreateData
{
    public mixed $mobile_only = null;
    public string $user_id;
    public mixed $web_only = null;
    public bool $ok;
}

/** Api entity data model. */
class Api
{
    public bool $ok;
}

/** Request payload for Api#load. */
class ApiLoadMatch
{
    public mixed $error = null;
    public mixed $foo = null;
}

/** App entity data model. */
class App
{
    public bool $ok;
}

/** Request payload for App#load. */
class AppLoadMatch
{
    public ?string $client_id = null;
    public mixed $client_secret = null;
    public ?string $token = null;
}

/** Appseventauthorization entity data model. */
class Appseventauthorization
{
    public bool $ok;
}

/** Request payload for Appseventauthorization#load. */
class AppseventauthorizationLoadMatch
{
    public mixed $cursor = null;
    public mixed $event_context;
    public ?int $limit = null;
}

/** Appspermission entity data model. */
class Appspermission
{
    public array $app_home;
    public array $channel;
    public array $group;
    public array $im;
    public array $mpim;
    public bool $ok;
    public array $team;
}

/** Request payload for Appspermission#load. */
class AppspermissionLoadMatch
{
    public mixed $scope;
    public string $token;
    public string $trigger_id;
}

/** Appspermissionsresource entity data model. */
class Appspermissionsresource
{
    public ?string $id = null;
    public ?string $type = null;
}

/** Request payload for Appspermissionsresource#list. */
class AppspermissionsresourceListMatch
{
    public mixed $cursor = null;
    public ?int $limit = null;
    public string $token;
}

/** Appspermissionsscope entity data model. */
class Appspermissionsscope
{
    public ?array $app_home = null;
    public ?array $channel = null;
    public ?array $group = null;
    public ?array $im = null;
    public ?array $mpim = null;
    public ?array $team = null;
    public ?array $user = null;
}

/** Request payload for Appspermissionsscope#load. */
class AppspermissionsscopeLoadMatch
{
    public string $token;
}

/** Appspermissionsuser entity data model. */
class Appspermissionsuser
{
    public bool $ok;
}

/** Request payload for Appspermissionsuser#load. */
class AppspermissionsuserLoadMatch
{
    public mixed $scope = null;
    public string $token;
    public ?string $trigger_id = null;
    public mixed $user = null;
    public mixed $cursor = null;
    public ?int $limit = null;
}

/** Auth entity data model. */
class Auth
{
    public ?string $bot_id = null;
    public ?bool $is_enterprise_install = null;
    public bool $ok;
    public bool $revoked;
    public string $team;
    public string $team_id;
    public string $url;
    public string $user;
    public string $user_id;
}

/** Request payload for Auth#load. */
class AuthLoadMatch
{
    public mixed $test = null;
    public string $token;
}

/** Bot entity data model. */
class Bot
{
    public string $app_id;
    public bool $deleted;
    public array $icons;
    public string $id;
    public string $name;
    public int $updated;
    public ?string $user_id = null;
}

/** Request payload for Bot#load. */
class BotLoadMatch
{
    public mixed $bot = null;
    public string $token;
}

/** Call entity data model. */
class Call
{
    public bool $ok;
}

/** Request payload for Call#load. */
class CallLoadMatch
{
    public string $id;
}

/** Request payload for Call#create. */
class CallCreateData
{
    public mixed $created_by = null;
    public mixed $date_start = null;
    public mixed $desktop_app_join_url = null;
    public ?string $external_display_id = null;
    public string $external_unique_id;
    public mixed $join_url;
    public ?string $title = null;
    public mixed $user = null;
    public bool $ok;
}

/** Callsparticipant entity data model. */
class Callsparticipant
{
    public bool $ok;
}

/** Request payload for Callsparticipant#create. */
class CallsparticipantCreateData
{
    public string $id;
    public mixed $user;
    public bool $ok;
}

/** Chat entity data model. */
class Chat
{
    public ?array $attachments = null;
    public ?array $blocks = null;
    public ?string $bot_id = null;
    public array $bot_profile;
    public string $channel;
    public ?string $client_msg_id = null;
    public array $comment;
    public ?bool $display_as_bot = null;
    public ?array $file = null;
    public ?array $files = null;
    public ?array $icons = null;
    public ?string $inviter = null;
    public ?bool $is_delayed_message = null;
    public ?bool $is_intro = null;
    public ?bool $is_starred = null;
    public ?string $last_read = null;
    public ?string $latest_reply = null;
    public string $message_ts;
    public ?string $name = null;
    public bool $ok;
    public ?string $old_name = null;
    public ?string $parent_user_id = null;
    public string $permalink;
    public ?array $pinned_to = null;
    public ?string $purpose = null;
    public ?array $reactions = null;
    public ?int $reply_count = null;
    public ?array $reply_users = null;
    public ?int $reply_users_count = null;
    public ?string $source_team = null;
    public ?bool $subscribed = null;
    public ?string $subtype = null;
    public ?string $team = null;
    public string $text;
    public ?string $thread_ts = null;
    public ?string $topic = null;
    public string $ts;
    public string $type;
    public ?int $unread_count = null;
    public ?bool $upload = null;
    public ?string $user = null;
    public array $user_profile;
    public ?string $user_team = null;
    public ?string $username = null;
}

/** Request payload for Chat#load. */
class ChatLoadMatch
{
    public mixed $channel;
    public mixed $message_t;
    public string $token;
}

/** Request payload for Chat#create. */
class ChatCreateData
{
    public mixed $as_user = null;
    public mixed $attachment = null;
    public mixed $block = null;
    public mixed $channel;
    public mixed $icon_emoji = null;
    public mixed $icon_url = null;
    public mixed $link_name = null;
    public mixed $mrkdwn = null;
    public mixed $parse = null;
    public mixed $reply_broadcast = null;
    public mixed $text = null;
    public mixed $thread_t = null;
    public mixed $unfurl_link = null;
    public mixed $unfurl_media = null;
    public ?string $username = null;
    public ?array $attachments = null;
    public ?array $blocks = null;
    public ?string $bot_id = null;
    public array $bot_profile;
    public ?string $client_msg_id = null;
    public array $comment;
    public ?bool $display_as_bot = null;
    public ?array $file = null;
    public ?array $files = null;
    public ?array $icons = null;
    public ?string $inviter = null;
    public ?bool $is_delayed_message = null;
    public ?bool $is_intro = null;
    public ?bool $is_starred = null;
    public ?string $last_read = null;
    public ?string $latest_reply = null;
    public string $message_ts;
    public ?string $name = null;
    public bool $ok;
    public ?string $old_name = null;
    public ?string $parent_user_id = null;
    public string $permalink;
    public ?array $pinned_to = null;
    public ?string $purpose = null;
    public ?array $reactions = null;
    public ?int $reply_count = null;
    public ?array $reply_users = null;
    public ?int $reply_users_count = null;
    public ?string $source_team = null;
    public ?bool $subscribed = null;
    public ?string $subtype = null;
    public ?string $team = null;
    public ?string $thread_ts = null;
    public ?string $topic = null;
    public string $ts;
    public string $type;
    public ?int $unread_count = null;
    public ?bool $upload = null;
    public ?string $user = null;
    public array $user_profile;
    public ?string $user_team = null;
}

/** ChatscheduledMessage entity data model. */
class ChatscheduledMessage
{
    public string $channel_id;
    public int $date_created;
    public string $id;
    public int $post_at;
    public ?string $text = null;
}

/** Request payload for ChatscheduledMessage#list. */
class ChatscheduledMessageListMatch
{
    public mixed $channel = null;
    public mixed $cursor = null;
    public mixed $latest = null;
    public ?int $limit = null;
    public mixed $oldest = null;
}

/** Conversation entity data model. */
class Conversation
{
    public ?bool $already_closed = null;
    public ?bool $already_open = null;
    public ?array $attachments = null;
    public ?array $blocks = null;
    public ?string $bot_id = null;
    public array $bot_profile;
    public mixed $channel;
    public array $channels;
    public ?string $client_msg_id = null;
    public array $comment;
    public ?bool $display_as_bot = null;
    public ?array $file = null;
    public ?array $files = null;
    public ?bool $has_more = null;
    public ?array $icons = null;
    public ?string $inviter = null;
    public ?bool $is_delayed_message = null;
    public ?bool $is_intro = null;
    public ?bool $is_starred = null;
    public ?string $last_read = null;
    public ?string $latest_reply = null;
    public array $members;
    public array $messages;
    public ?string $name = null;
    public ?bool $no_op = null;
    public ?bool $not_in_channel = null;
    public bool $ok;
    public ?string $old_name = null;
    public ?string $parent_user_id = null;
    public ?string $permalink = null;
    public ?array $pinned_to = null;
    public ?string $purpose = null;
    public ?array $reactions = null;
    public ?int $reply_count = null;
    public ?array $reply_users = null;
    public ?int $reply_users_count = null;
    public ?array $response_metadata = null;
    public ?string $source_team = null;
    public ?bool $subscribed = null;
    public ?string $subtype = null;
    public ?string $team = null;
    public string $text;
    public ?string $thread_ts = null;
    public ?string $topic = null;
    public string $ts;
    public string $type;
    public ?int $unread_count = null;
    public ?bool $upload = null;
    public ?string $user = null;
    public array $user_profile;
    public ?string $user_team = null;
    public ?string $username = null;
    public ?string $warning = null;
}

/** Request payload for Conversation#load. */
class ConversationLoadMatch
{
    public mixed $channel = null;
    public mixed $include_locale = null;
    public mixed $include_num_member = null;
    public ?string $token = null;
}

/** Request payload for Conversation#list. */
class ConversationListMatch
{
    public mixed $channel = null;
    public mixed $cursor = null;
    public mixed $inclusive = null;
    public mixed $latest = null;
    public ?int $limit = null;
    public mixed $oldest = null;
    public ?string $token = null;
    public mixed $ts = null;
}

/** Request payload for Conversation#create. */
class ConversationCreateData
{
    public mixed $channel = null;
    public mixed $return_im = null;
    public mixed $user = null;
    public ?bool $already_closed = null;
    public ?bool $already_open = null;
    public ?array $attachments = null;
    public ?array $blocks = null;
    public ?string $bot_id = null;
    public array $bot_profile;
    public array $channels;
    public ?string $client_msg_id = null;
    public array $comment;
    public ?bool $display_as_bot = null;
    public ?array $file = null;
    public ?array $files = null;
    public ?bool $has_more = null;
    public ?array $icons = null;
    public ?string $inviter = null;
    public ?bool $is_delayed_message = null;
    public ?bool $is_intro = null;
    public ?bool $is_starred = null;
    public ?string $last_read = null;
    public ?string $latest_reply = null;
    public array $members;
    public array $messages;
    public ?string $name = null;
    public ?bool $no_op = null;
    public ?bool $not_in_channel = null;
    public bool $ok;
    public ?string $old_name = null;
    public ?string $parent_user_id = null;
    public ?string $permalink = null;
    public ?array $pinned_to = null;
    public ?string $purpose = null;
    public ?array $reactions = null;
    public ?int $reply_count = null;
    public ?array $reply_users = null;
    public ?int $reply_users_count = null;
    public ?array $response_metadata = null;
    public ?string $source_team = null;
    public ?bool $subscribed = null;
    public ?string $subtype = null;
    public ?string $team = null;
    public string $text;
    public ?string $thread_ts = null;
    public ?string $topic = null;
    public string $ts;
    public string $type;
    public ?int $unread_count = null;
    public ?bool $upload = null;
    public array $user_profile;
    public ?string $user_team = null;
    public ?string $username = null;
    public ?string $warning = null;
}

/** Dialog entity data model. */
class Dialog
{
    public bool $ok;
}

/** Request payload for Dialog#load. */
class DialogLoadMatch
{
    public mixed $dialog;
    public string $trigger_id;
}

/** Dnd entity data model. */
class Dnd
{
    public bool $dnd_enabled;
    public int $next_dnd_end_ts;
    public int $next_dnd_start_ts;
    public bool $ok;
    public ?bool $snooze_enabled = null;
    public ?int $snooze_endtime = null;
    public ?int $snooze_remaining = null;
}

/** Request payload for Dnd#load. */
class DndLoadMatch
{
    public ?string $token = null;
    public mixed $user = null;
}

/** Request payload for Dnd#create. */
class DndCreateData
{
    public int $num_minute;
    public string $token;
    public bool $dnd_enabled;
    public int $next_dnd_end_ts;
    public int $next_dnd_start_ts;
    public bool $ok;
    public ?bool $snooze_enabled = null;
    public ?int $snooze_endtime = null;
    public ?int $snooze_remaining = null;
}

/** Emoji entity data model. */
class Emoji
{
    public bool $ok;
}

/** Request payload for Emoji#load. */
class EmojiLoadMatch
{
    public string $token;
}

/** File entity data model. */
class File
{
    public ?array $channels = null;
    public array $comments;
    public ?int $comments_count = null;
    public mixed $content_html = null;
    public ?int $created = null;
    public ?int $date_delete = null;
    public ?bool $display_as_bot = null;
    public ?bool $editable = null;
    public ?string $editor = null;
    public ?string $external_id = null;
    public ?string $external_type = null;
    public ?string $external_url = null;
    public array $file;
    public ?string $filetype = null;
    public ?array $groups = null;
    public ?bool $has_rich_preview = null;
    public ?string $id = null;
    public ?int $image_exif_rotation = null;
    public ?array $ims = null;
    public ?bool $is_external = null;
    public ?bool $is_public = null;
    public ?bool $is_starred = null;
    public ?bool $is_tombstoned = null;
    public ?string $last_editor = null;
    public ?string $mimetype = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?bool $non_owner_editable = null;
    public ?int $num_stars = null;
    public bool $ok;
    public ?int $original_h = null;
    public ?int $original_w = null;
    public array $paging;
    public ?string $permalink = null;
    public ?string $permalink_public = null;
    public ?array $pinned_info = null;
    public ?array $pinned_to = null;
    public ?string $pretty_type = null;
    public ?string $preview = null;
    public ?bool $public_url_shared = null;
    public ?array $reactions = null;
    public mixed $response_metadata = null;
    public ?array $shares = null;
    public ?int $size = null;
    public ?string $source_team = null;
    public ?string $state = null;
    public ?string $thumb_1024 = null;
    public ?int $thumb_1024_h = null;
    public ?int $thumb_1024_w = null;
    public ?string $thumb_160 = null;
    public ?string $thumb_360 = null;
    public ?int $thumb_360_h = null;
    public ?int $thumb_360_w = null;
    public ?string $thumb_480 = null;
    public ?int $thumb_480_h = null;
    public ?int $thumb_480_w = null;
    public ?string $thumb_64 = null;
    public ?string $thumb_720 = null;
    public ?int $thumb_720_h = null;
    public ?int $thumb_720_w = null;
    public ?string $thumb_80 = null;
    public ?string $thumb_800 = null;
    public ?int $thumb_800_h = null;
    public ?int $thumb_800_w = null;
    public ?string $thumb_960 = null;
    public ?int $thumb_960_h = null;
    public ?int $thumb_960_w = null;
    public ?string $thumb_tiny = null;
    public ?int $timestamp = null;
    public ?string $title = null;
    public ?int $updated = null;
    public ?string $url_private = null;
    public ?string $url_private_download = null;
    public ?string $user = null;
    public ?string $user_team = null;
    public ?string $username = null;
}

/** Request payload for File#list. */
class FileListMatch
{
    public mixed $channel = null;
    public mixed $count = null;
    public ?int $page = null;
    public mixed $show_files_hidden_by_limit = null;
    public ?string $token = null;
    public mixed $ts_from = null;
    public mixed $ts_to = null;
    public mixed $type = null;
    public mixed $user = null;
}

/** Request payload for File#create. */
class FileCreateData
{
    public mixed $channel = null;
    public mixed $content = null;
    public mixed $file = null;
    public mixed $filename = null;
    public mixed $filetype = null;
    public mixed $initial_comment = null;
    public mixed $thread_t = null;
    public ?string $title = null;
    public ?string $token = null;
    public ?array $channels = null;
    public array $comments;
    public ?int $comments_count = null;
    public mixed $content_html = null;
    public ?int $created = null;
    public ?int $date_delete = null;
    public ?bool $display_as_bot = null;
    public ?bool $editable = null;
    public ?string $editor = null;
    public ?string $external_id = null;
    public ?string $external_type = null;
    public ?string $external_url = null;
    public ?array $groups = null;
    public ?bool $has_rich_preview = null;
    public ?string $id = null;
    public ?int $image_exif_rotation = null;
    public ?array $ims = null;
    public ?bool $is_external = null;
    public ?bool $is_public = null;
    public ?bool $is_starred = null;
    public ?bool $is_tombstoned = null;
    public ?string $last_editor = null;
    public ?string $mimetype = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?bool $non_owner_editable = null;
    public ?int $num_stars = null;
    public bool $ok;
    public ?int $original_h = null;
    public ?int $original_w = null;
    public array $paging;
    public ?string $permalink = null;
    public ?string $permalink_public = null;
    public ?array $pinned_info = null;
    public ?array $pinned_to = null;
    public ?string $pretty_type = null;
    public ?string $preview = null;
    public ?bool $public_url_shared = null;
    public ?array $reactions = null;
    public mixed $response_metadata = null;
    public ?array $shares = null;
    public ?int $size = null;
    public ?string $source_team = null;
    public ?string $state = null;
    public ?string $thumb_1024 = null;
    public ?int $thumb_1024_h = null;
    public ?int $thumb_1024_w = null;
    public ?string $thumb_160 = null;
    public ?string $thumb_360 = null;
    public ?int $thumb_360_h = null;
    public ?int $thumb_360_w = null;
    public ?string $thumb_480 = null;
    public ?int $thumb_480_h = null;
    public ?int $thumb_480_w = null;
    public ?string $thumb_64 = null;
    public ?string $thumb_720 = null;
    public ?int $thumb_720_h = null;
    public ?int $thumb_720_w = null;
    public ?string $thumb_80 = null;
    public ?string $thumb_800 = null;
    public ?int $thumb_800_h = null;
    public ?int $thumb_800_w = null;
    public ?string $thumb_960 = null;
    public ?int $thumb_960_h = null;
    public ?int $thumb_960_w = null;
    public ?string $thumb_tiny = null;
    public ?int $timestamp = null;
    public ?int $updated = null;
    public ?string $url_private = null;
    public ?string $url_private_download = null;
    public ?string $user = null;
    public ?string $user_team = null;
    public ?string $username = null;
}

/** Filescomment entity data model. */
class Filescomment
{
    public bool $ok;
}

/** Request payload for Filescomment#create. */
class FilescommentCreateData
{
    public mixed $file = null;
    public ?string $id = null;
    public bool $ok;
}

/** Filesremote entity data model. */
class Filesremote
{
    public bool $ok;
}

/** Request payload for Filesremote#load. */
class FilesremoteLoadMatch
{
    public mixed $channel = null;
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?string $token = null;
    public mixed $ts_from = null;
    public mixed $ts_to = null;
}

/** Request payload for Filesremote#create. */
class FilesremoteCreateData
{
    public ?string $external_id = null;
    public mixed $external_url = null;
    public mixed $file = null;
    public mixed $filetype = null;
    public mixed $indexable_file_content = null;
    public mixed $preview_image = null;
    public ?string $title = null;
    public ?string $token = null;
    public bool $ok;
}

/** Migration entity data model. */
class Migration
{
    public string $enterprise_id;
    public ?array $invalid_user_ids = null;
    public bool $ok;
    public string $team_id;
    public ?array $user_id_map = null;
}

/** Request payload for Migration#list. */
class MigrationListMatch
{
    public ?string $team_id = null;
    public mixed $to_old = null;
    public string $token;
    public mixed $user;
}

/** Oauth entity data model. */
class Oauth
{
    public bool $ok;
}

/** Request payload for Oauth#load. */
class OauthLoadMatch
{
    public ?string $client_id = null;
    public mixed $client_secret = null;
    public mixed $code = null;
    public mixed $redirect_uri = null;
    public mixed $single_channel = null;
}

/** Oauthv2 entity data model. */
class Oauthv2
{
    public bool $ok;
}

/** Request payload for Oauthv2#load. */
class Oauthv2LoadMatch
{
    public ?string $client_id = null;
    public mixed $client_secret = null;
    public mixed $code;
    public mixed $redirect_uri = null;
}

/** Pin entity data model. */
class Pin
{
    public ?array $items = null;
    public ?bool $ok = null;
}

/** Request payload for Pin#load. */
class PinLoadMatch
{
    public mixed $channel;
    public string $token;
}

/** Request payload for Pin#create. */
class PinCreateData
{
    public mixed $channel;
    public mixed $timestamp = null;
    public ?array $items = null;
    public ?bool $ok = null;
}

/** Reaction entity data model. */
class Reaction
{
    public ?array $file = null;
    public array $items;
    public ?bool $ok = null;
    public array $paging;
    public mixed $response_metadata = null;
    public ?string $type = null;
}

/** Request payload for Reaction#load. */
class ReactionLoadMatch
{
    public mixed $channel = null;
    public mixed $file = null;
    public mixed $file_comment = null;
    public mixed $full = null;
    public mixed $timestamp = null;
    public string $token;
}

/** Request payload for Reaction#list. */
class ReactionListMatch
{
    public mixed $count = null;
    public mixed $cursor = null;
    public mixed $full = null;
    public ?int $limit = null;
    public ?int $page = null;
    public string $token;
    public mixed $user = null;
}

/** Request payload for Reaction#create. */
class ReactionCreateData
{
    public mixed $channel = null;
    public mixed $file = null;
    public mixed $file_comment = null;
    public string $name;
    public mixed $timestamp = null;
    public array $items;
    public ?bool $ok = null;
    public array $paging;
    public mixed $response_metadata = null;
    public ?string $type = null;
}

/** Reminder entity data model. */
class Reminder
{
    public ?int $complete_ts = null;
    public string $creator;
    public string $id;
    public bool $ok;
    public bool $recurring;
    public string $text;
    public ?int $time = null;
    public string $user;
}

/** Request payload for Reminder#load. */
class ReminderLoadMatch
{
    public mixed $reminder = null;
    public ?string $token = null;
}

/** Request payload for Reminder#list. */
class ReminderListMatch
{
    public ?string $token = null;
}

/** Request payload for Reminder#create. */
class ReminderCreateData
{
    public mixed $text;
    public mixed $time;
    public mixed $user = null;
    public ?int $complete_ts = null;
    public string $creator;
    public string $id;
    public bool $ok;
    public bool $recurring;
}

/** Rtm entity data model. */
class Rtm
{
    public bool $ok;
    public array $self;
    public array $team;
    public string $url;
}

/** Request payload for Rtm#load. */
class RtmLoadMatch
{
    public mixed $batch_presence_aware = null;
    public mixed $presence_sub = null;
    public string $token;
}

/** Search entity data model. */
class Search
{
    public bool $ok;
}

/** Request payload for Search#load. */
class SearchLoadMatch
{
    public mixed $count = null;
    public mixed $highlight = null;
    public ?int $page = null;
    public mixed $query;
    public mixed $sort = null;
    public mixed $sort_dir = null;
    public string $token;
}

/** Star entity data model. */
class Star
{
    public array $items;
    public bool $ok;
    public array $paging;
}

/** Request payload for Star#list. */
class StarListMatch
{
    public mixed $count = null;
    public mixed $cursor = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?string $token = null;
}

/** Request payload for Star#create. */
class StarCreateData
{
    public mixed $channel = null;
    public mixed $file = null;
    public mixed $file_comment = null;
    public mixed $timestamp = null;
    public array $items;
    public bool $ok;
    public array $paging;
}

/** Team entity data model. */
class Team
{
    public ?string $admin_app_id = null;
    public string $app_id;
    public string $app_type;
    public ?bool $archived = null;
    public ?string $avatar_base_url = null;
    public string $change_type;
    public ?string $channel = null;
    public int $count;
    public mixed $country;
    public ?int $created = null;
    public string $date;
    public ?int $date_create = null;
    public int $date_first;
    public int $date_last;
    public ?bool $deleted = null;
    public mixed $description = null;
    public mixed $discoverable = null;
    public string $domain;
    public string $email_domain;
    public ?string $enterprise_id = null;
    public ?string $enterprise_name = null;
    public array $external_org_migrations;
    public ?bool $has_compliance_export = null;
    public array $icon;
    public string $id;
    public mixed $ip;
    public ?bool $is_assigned = null;
    public ?int $is_enterprise = null;
    public ?bool $is_over_storage_limit = null;
    public mixed $isp;
    public ?int $limit_ts = null;
    public ?string $locale = null;
    public ?int $messages_count = null;
    public ?int $msg_edit_window_mins = null;
    public string $name;
    public bool $ok;
    public ?bool $over_integrations_limit = null;
    public ?bool $over_storage_limit = null;
    public ?string $pay_prod_cur = null;
    public ?string $plan = null;
    public array $primary_owner;
    public mixed $region;
    public string $scope;
    public ?string $service_id = null;
    public ?string $service_type = null;
    public ?array $sso_provider = null;
    public string $user_agent;
    public string $user_id;
    public string $user_name;
    public string $username;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public mixed $team = null;
    public string $token;
    public mixed $user = null;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?string $app_id = null;
    public mixed $change_type = null;
    public mixed $count = null;
    public ?int $page = null;
    public ?string $service_id = null;
    public string $token;
    public mixed $user = null;
    public mixed $before = null;
}

/** Teamprofile entity data model. */
class Teamprofile
{
    public array $fields;
}

/** Request payload for Teamprofile#load. */
class TeamprofileLoadMatch
{
    public string $token;
    public mixed $visibility = null;
}

/** User entity data model. */
class User
{
    public ?bool $auto_away = null;
    public string $avatar_hash;
    public int $cache_ts;
    public array $channels;
    public ?int $connection_count = null;
    public string $image_1024;
    public string $image_192;
    public string $image_24;
    public string $image_32;
    public string $image_48;
    public string $image_512;
    public string $image_72;
    public string $image_original;
    public ?int $last_activity = null;
    public ?bool $manual_away = null;
    public array $members;
    public bool $ok;
    public ?bool $online = null;
    public string $presence;
    public array $response_metadata;
    public ?array $team = null;
    public mixed $user;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public mixed $include_locale = null;
    public string $token;
    public mixed $user = null;
}

/** Request payload for User#list. */
class UserListMatch
{
    public mixed $cursor = null;
    public mixed $exclude_archived = null;
    public ?int $limit = null;
    public ?string $token = null;
    public mixed $type = null;
    public mixed $user = null;
}

/** Request payload for User#create. */
class UserCreateData
{
    public mixed $crop_w = null;
    public mixed $crop_x = null;
    public mixed $crop_y = null;
    public mixed $image = null;
    public string $token;
    public ?bool $auto_away = null;
    public string $avatar_hash;
    public int $cache_ts;
    public array $channels;
    public ?int $connection_count = null;
    public string $image_1024;
    public string $image_192;
    public string $image_24;
    public string $image_32;
    public string $image_48;
    public string $image_512;
    public string $image_72;
    public string $image_original;
    public ?int $last_activity = null;
    public ?bool $manual_away = null;
    public array $members;
    public bool $ok;
    public ?bool $online = null;
    public string $presence;
    public array $response_metadata;
    public ?array $team = null;
    public mixed $user;
}

/** Usergroup entity data model. */
class Usergroup
{
    public bool $auto_provision;
    public mixed $auto_type;
    public ?int $channel_count = null;
    public string $created_by;
    public int $date_create;
    public int $date_delete;
    public int $date_update;
    public mixed $deleted_by;
    public string $description;
    public string $enterprise_subteam_id;
    public string $handle;
    public string $id;
    public bool $is_external;
    public bool $is_subteam;
    public bool $is_usergroup;
    public string $name;
    public array $prefs;
    public string $team_id;
    public string $updated_by;
    public ?int $user_count = null;
    public ?array $users = null;
}

/** Request payload for Usergroup#list. */
class UsergroupListMatch
{
    public ?int $include_count = null;
    public mixed $include_disabled = null;
    public mixed $include_user = null;
    public string $token;
}

/** Request payload for Usergroup#create. */
class UsergroupCreateData
{
    public mixed $channel = null;
    public ?string $description = null;
    public mixed $handle = null;
    public ?int $include_count = null;
    public ?string $name = null;
    public mixed $usergroup;
    public bool $auto_provision;
    public mixed $auto_type;
    public ?int $channel_count = null;
    public string $created_by;
    public int $date_create;
    public int $date_delete;
    public int $date_update;
    public mixed $deleted_by;
    public string $enterprise_subteam_id;
    public string $id;
    public bool $is_external;
    public bool $is_subteam;
    public bool $is_usergroup;
    public array $prefs;
    public string $team_id;
    public string $updated_by;
    public ?int $user_count = null;
    public ?array $users = null;
}

/** Usergroupsuser entity data model. */
class Usergroupsuser
{
    public bool $auto_provision;
    public mixed $auto_type;
    public ?int $channel_count = null;
    public string $created_by;
    public int $date_create;
    public int $date_delete;
    public int $date_update;
    public mixed $deleted_by;
    public string $description;
    public string $enterprise_subteam_id;
    public string $handle;
    public string $id;
    public bool $is_external;
    public bool $is_subteam;
    public bool $is_usergroup;
    public string $name;
    public bool $ok;
    public array $prefs;
    public string $team_id;
    public string $updated_by;
    public ?int $user_count = null;
    public ?array $users = null;
}

/** Request payload for Usergroupsuser#list. */
class UsergroupsuserListMatch
{
    public mixed $include_disabled = null;
    public string $token;
    public mixed $usergroup;
}

/** Request payload for Usergroupsuser#create. */
class UsergroupsuserCreateData
{
    public ?int $include_count = null;
    public mixed $user;
    public mixed $usergroup;
    public bool $auto_provision;
    public mixed $auto_type;
    public ?int $channel_count = null;
    public string $created_by;
    public int $date_create;
    public int $date_delete;
    public int $date_update;
    public mixed $deleted_by;
    public string $description;
    public string $enterprise_subteam_id;
    public string $handle;
    public string $id;
    public bool $is_external;
    public bool $is_subteam;
    public bool $is_usergroup;
    public string $name;
    public bool $ok;
    public array $prefs;
    public string $team_id;
    public string $updated_by;
    public ?int $user_count = null;
    public ?array $users = null;
}

/** Usersprofile entity data model. */
class Usersprofile
{
    public ?bool $always_active = null;
    public ?string $api_app_id = null;
    public string $avatar_hash;
    public ?string $bot_id = null;
    public string $display_name;
    public string $display_name_normalized;
    public mixed $email = null;
    public mixed $fields;
    public mixed $first_name = null;
    public mixed $guest_expiration_ts = null;
    public mixed $guest_invited_by = null;
    public mixed $image_1024 = null;
    public mixed $image_192 = null;
    public mixed $image_24 = null;
    public mixed $image_32 = null;
    public mixed $image_48 = null;
    public mixed $image_512 = null;
    public mixed $image_72 = null;
    public mixed $image_original = null;
    public ?bool $is_app_user = null;
    public ?bool $is_custom_image = null;
    public mixed $is_restricted = null;
    public mixed $is_ultra_restricted = null;
    public ?string $last_avatar_image_hash = null;
    public mixed $last_name = null;
    public ?int $memberships_count = null;
    public mixed $name = null;
    public string $phone;
    public ?string $pronouns = null;
    public string $real_name;
    public string $real_name_normalized;
    public string $skype;
    public ?string $status_default_emoji = null;
    public ?string $status_default_text = null;
    public mixed $status_default_text_canonical = null;
    public string $status_emoji;
    public ?int $status_expiration = null;
    public string $status_text;
    public mixed $status_text_canonical = null;
    public ?string $team = null;
    public string $title;
    public ?int $updated = null;
    public ?string $user_id = null;
    public mixed $username = null;
}

/** Request payload for Usersprofile#load. */
class UsersprofileLoadMatch
{
    public mixed $include_label = null;
    public string $token;
    public mixed $user = null;
}

/** Request payload for Usersprofile#create. */
class UsersprofileCreateData
{
    public ?string $name = null;
    public mixed $profile = null;
    public mixed $user = null;
    public mixed $value = null;
    public ?bool $always_active = null;
    public ?string $api_app_id = null;
    public string $avatar_hash;
    public ?string $bot_id = null;
    public string $display_name;
    public string $display_name_normalized;
    public mixed $email = null;
    public mixed $fields;
    public mixed $first_name = null;
    public mixed $guest_expiration_ts = null;
    public mixed $guest_invited_by = null;
    public mixed $image_1024 = null;
    public mixed $image_192 = null;
    public mixed $image_24 = null;
    public mixed $image_32 = null;
    public mixed $image_48 = null;
    public mixed $image_512 = null;
    public mixed $image_72 = null;
    public mixed $image_original = null;
    public ?bool $is_app_user = null;
    public ?bool $is_custom_image = null;
    public mixed $is_restricted = null;
    public mixed $is_ultra_restricted = null;
    public ?string $last_avatar_image_hash = null;
    public mixed $last_name = null;
    public ?int $memberships_count = null;
    public string $phone;
    public ?string $pronouns = null;
    public string $real_name;
    public string $real_name_normalized;
    public string $skype;
    public ?string $status_default_emoji = null;
    public ?string $status_default_text = null;
    public mixed $status_default_text_canonical = null;
    public string $status_emoji;
    public ?int $status_expiration = null;
    public string $status_text;
    public mixed $status_text_canonical = null;
    public ?string $team = null;
    public string $title;
    public ?int $updated = null;
    public ?string $user_id = null;
    public mixed $username = null;
}

/** View entity data model. */
class View
{
    public bool $ok;
}

/** Request payload for View#load. */
class ViewLoadMatch
{
    public ?string $external_id = null;
    public mixed $hash = null;
    public mixed $view = null;
    public ?string $view_id = null;
}

/** Workflow entity data model. */
class Workflow
{
    public bool $ok;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public mixed $input = null;
    public mixed $output = null;
    public mixed $step_image_url = null;
    public mixed $step_name = null;
    public string $workflow_step_edit_id;
}

