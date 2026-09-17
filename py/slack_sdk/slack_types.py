# Typed models for the Slack SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Adminapp(TypedDict):
    ok: bool


class AdminappCreateDataRequired(TypedDict):
    ok: bool


class AdminappCreateData(AdminappCreateDataRequired, total=False):
    app_id: str
    request_id: str
    team_id: str


class Adminappsapproved(TypedDict):
    ok: bool


class AdminappsapprovedLoadMatchRequired(TypedDict):
    token: str


class AdminappsapprovedLoadMatch(AdminappsapprovedLoadMatchRequired, total=False):
    cursor: Any
    enterprise_id: str
    limit: int
    team_id: str


class Adminappsrequest(TypedDict):
    ok: bool


class AdminappsrequestLoadMatchRequired(TypedDict):
    token: str


class AdminappsrequestLoadMatch(AdminappsrequestLoadMatchRequired, total=False):
    cursor: Any
    limit: int
    team_id: str


class Adminappsrestricted(TypedDict):
    ok: bool


class AdminappsrestrictedLoadMatchRequired(TypedDict):
    token: str


class AdminappsrestrictedLoadMatch(AdminappsrestrictedLoadMatchRequired, total=False):
    cursor: Any
    enterprise_id: str
    limit: int
    team_id: str


class AdminconversationRequired(TypedDict):
    created: int
    creator: str
    id: str
    is_channel: bool
    is_mpim: bool
    is_org_shared: bool
    is_private: bool
    is_shared: bool
    members: list
    name: str
    name_normalized: str
    ok: bool
    purpose: dict
    response_metadata: dict
    team_ids: list
    topic: dict


class Adminconversation(AdminconversationRequired, total=False):
    accepted_user: str
    can_thread: dict
    channel_id: str
    is_archived: bool
    is_frozen: bool
    is_general: bool
    is_member: bool
    is_moved: int
    is_non_threadable: bool
    is_pending_ext_shared: bool
    is_read_only: bool
    is_thread_only: bool
    last_read: str
    latest: Any
    num_members: int
    pending_shared: list
    previous_names: list
    priority: float
    unlinked: int
    unread_count: int
    unread_count_display: int
    who_can_post: dict


class AdminconversationLoadMatch(TypedDict):
    channel_id: str


class AdminconversationListMatch(TypedDict, total=False):
    cursor: Any
    limit: int
    query: Any
    search_channel_type: Any
    sort: Any
    sort_dir: Any
    team_id: str


class AdminconversationCreateDataRequired(TypedDict):
    is_private: bool
    name: str
    created: int
    creator: str
    id: str
    is_channel: bool
    is_mpim: bool
    is_org_shared: bool
    is_shared: bool
    members: list
    name_normalized: str
    ok: bool
    purpose: dict
    response_metadata: dict
    team_ids: list
    topic: dict


class AdminconversationCreateData(AdminconversationCreateDataRequired, total=False):
    description: str
    org_wide: Any
    team_id: str
    accepted_user: str
    can_thread: dict
    channel_id: str
    is_archived: bool
    is_frozen: bool
    is_general: bool
    is_member: bool
    is_moved: int
    is_non_threadable: bool
    is_pending_ext_shared: bool
    is_read_only: bool
    is_thread_only: bool
    last_read: str
    latest: Any
    num_members: int
    pending_shared: list
    previous_names: list
    priority: float
    unlinked: int
    unread_count: int
    unread_count_display: int
    who_can_post: dict


class Adminconversationsekm(TypedDict):
    ok: bool


class AdminconversationsekmLoadMatchRequired(TypedDict):
    token: str


class AdminconversationsekmLoadMatch(AdminconversationsekmLoadMatchRequired, total=False):
    channel_id: str
    cursor: Any
    limit: int
    team_id: str


class AdminconversationsrestrictAccess(TypedDict):
    ok: bool


class AdminconversationsrestrictAccessLoadMatchRequired(TypedDict):
    channel_id: str
    token: str


class AdminconversationsrestrictAccessLoadMatch(AdminconversationsrestrictAccessLoadMatchRequired, total=False):
    team_id: str


class AdminconversationsrestrictAccessCreateDataRequired(TypedDict):
    channel_id: str
    group_id: str
    token: str
    ok: bool


class AdminconversationsrestrictAccessCreateData(AdminconversationsrestrictAccessCreateDataRequired, total=False):
    team_id: str


class Adminemoji(TypedDict):
    ok: bool


class AdminemojiLoadMatchRequired(TypedDict):
    token: str


class AdminemojiLoadMatch(AdminemojiLoadMatchRequired, total=False):
    cursor: Any
    limit: int


class AdminemojiCreateDataRequired(TypedDict):
    name: str
    token: str
    ok: bool


class AdminemojiCreateData(AdminemojiCreateDataRequired, total=False):
    alias_for: Any
    new_name: Any
    url: str


class AdmininviteRequest(TypedDict):
    ok: bool


class AdmininviteRequestLoadMatch(TypedDict, total=False):
    cursor: Any
    limit: int
    team_id: str


class AdmininviteRequestCreateDataRequired(TypedDict):
    invite_request_id: str
    ok: bool


class AdmininviteRequestCreateData(AdmininviteRequestCreateDataRequired, total=False):
    team_id: str


class AdmininviteRequestsapproved(TypedDict):
    ok: bool


class AdmininviteRequestsapprovedLoadMatch(TypedDict, total=False):
    cursor: Any
    limit: int
    team_id: str


class AdmininviteRequestsdenied(TypedDict):
    ok: bool


class AdmininviteRequestsdeniedLoadMatch(TypedDict, total=False):
    cursor: Any
    limit: int
    team_id: str


class Adminteam(TypedDict):
    ok: bool


class AdminteamLoadMatch(TypedDict, total=False):
    cursor: Any
    limit: int


class AdminteamCreateDataRequired(TypedDict):
    team_domain: Any
    team_name: Any
    ok: bool


class AdminteamCreateData(AdminteamCreateDataRequired, total=False):
    team_description: Any
    team_discoverability: Any


class Adminteamsadmin(TypedDict):
    ok: bool


class AdminteamsadminLoadMatchRequired(TypedDict):
    team_id: str
    token: str


class AdminteamsadminLoadMatch(AdminteamsadminLoadMatchRequired, total=False):
    cursor: Any
    limit: int


class Adminteamsowner(TypedDict):
    ok: bool


class AdminteamsownerLoadMatchRequired(TypedDict):
    team_id: str
    token: str


class AdminteamsownerLoadMatch(AdminteamsownerLoadMatchRequired, total=False):
    cursor: Any
    limit: int


class Adminteamssetting(TypedDict):
    ok: bool


class AdminteamssettingLoadMatch(TypedDict):
    team_id: str


class AdminteamssettingCreateDataRequired(TypedDict):
    team_id: str
    ok: bool


class AdminteamssettingCreateData(AdminteamssettingCreateDataRequired, total=False):
    channel_id: str
    token: str
    description: str
    discoverability: Any
    image_url: Any
    name: str


class Adminuser(TypedDict):
    ok: bool


class AdminuserLoadMatchRequired(TypedDict):
    team_id: str


class AdminuserLoadMatch(AdminuserLoadMatchRequired, total=False):
    cursor: Any
    limit: int


class AdminuserCreateDataRequired(TypedDict):
    team_id: str
    ok: bool


class AdminuserCreateData(AdminuserCreateDataRequired, total=False):
    channel_id: str
    custom_message: Any
    email: str
    guest_expiration_t: Any
    is_restricted: bool
    is_ultra_restricted: bool
    real_name: Any
    resend: Any
    user_id: str
    expiration_t: Any


class Adminusergroup(TypedDict):
    ok: bool


class AdminusergroupLoadMatchRequired(TypedDict):
    usergroup_id: str


class AdminusergroupLoadMatch(AdminusergroupLoadMatchRequired, total=False):
    include_num_member: Any
    team_id: str


class AdminusergroupCreateDataRequired(TypedDict):
    usergroup_id: str
    ok: bool


class AdminusergroupCreateData(AdminusergroupCreateDataRequired, total=False):
    auto_provision: Any
    team_id: str
    channel_id: str


class Adminuserssession(TypedDict):
    ok: bool


class AdminuserssessionCreateDataRequired(TypedDict):
    user_id: str
    ok: bool


class AdminuserssessionCreateData(AdminuserssessionCreateDataRequired, total=False):
    mobile_only: Any
    web_only: Any


class Api(TypedDict):
    ok: bool


class ApiLoadMatch(TypedDict, total=False):
    error: Any
    foo: Any


class App(TypedDict):
    ok: bool


class AppLoadMatch(TypedDict, total=False):
    client_id: str
    client_secret: Any
    token: str


class Appseventauthorization(TypedDict):
    ok: bool


class AppseventauthorizationLoadMatchRequired(TypedDict):
    event_context: Any


class AppseventauthorizationLoadMatch(AppseventauthorizationLoadMatchRequired, total=False):
    cursor: Any
    limit: int


class Appspermission(TypedDict):
    app_home: dict
    channel: dict
    group: dict
    im: dict
    mpim: dict
    ok: bool
    team: dict


class AppspermissionLoadMatch(TypedDict):
    scope: Any
    token: str
    trigger_id: str


class Appspermissionsresource(TypedDict, total=False):
    id: str
    type: str


class AppspermissionsresourceListMatchRequired(TypedDict):
    token: str


class AppspermissionsresourceListMatch(AppspermissionsresourceListMatchRequired, total=False):
    cursor: Any
    limit: int


class Appspermissionsscope(TypedDict, total=False):
    app_home: list
    channel: list
    group: list
    im: list
    mpim: list
    team: list
    user: list


class AppspermissionsscopeLoadMatch(TypedDict):
    token: str


class Appspermissionsuser(TypedDict):
    ok: bool


class AppspermissionsuserLoadMatchRequired(TypedDict):
    token: str


class AppspermissionsuserLoadMatch(AppspermissionsuserLoadMatchRequired, total=False):
    scope: Any
    trigger_id: str
    user: Any
    cursor: Any
    limit: int


class AuthRequired(TypedDict):
    ok: bool
    revoked: bool
    team: str
    team_id: str
    url: str
    user: str
    user_id: str


class Auth(AuthRequired, total=False):
    bot_id: str
    is_enterprise_install: bool


class AuthLoadMatchRequired(TypedDict):
    token: str


class AuthLoadMatch(AuthLoadMatchRequired, total=False):
    test: Any


class BotRequired(TypedDict):
    app_id: str
    deleted: bool
    icons: dict
    id: str
    name: str
    updated: int


class Bot(BotRequired, total=False):
    user_id: str


class BotLoadMatchRequired(TypedDict):
    token: str


class BotLoadMatch(BotLoadMatchRequired, total=False):
    bot: Any


class Call(TypedDict):
    ok: bool


class CallLoadMatch(TypedDict):
    id: str


class CallCreateDataRequired(TypedDict):
    external_unique_id: str
    join_url: Any
    ok: bool


class CallCreateData(CallCreateDataRequired, total=False):
    created_by: Any
    date_start: Any
    desktop_app_join_url: Any
    external_display_id: str
    title: str
    user: Any


class Callsparticipant(TypedDict):
    ok: bool


class CallsparticipantCreateData(TypedDict):
    id: str
    user: Any
    ok: bool


class ChatRequired(TypedDict):
    bot_profile: dict
    channel: str
    comment: dict
    message_ts: str
    ok: bool
    permalink: str
    text: str
    ts: str
    type: str
    user_profile: dict


class Chat(ChatRequired, total=False):
    attachments: list
    blocks: list
    bot_id: str
    client_msg_id: str
    display_as_bot: bool
    file: dict
    files: list
    icons: dict
    inviter: str
    is_delayed_message: bool
    is_intro: bool
    is_starred: bool
    last_read: str
    latest_reply: str
    name: str
    old_name: str
    parent_user_id: str
    pinned_to: list
    purpose: str
    reactions: list
    reply_count: int
    reply_users: list
    reply_users_count: int
    source_team: str
    subscribed: bool
    subtype: str
    team: str
    thread_ts: str
    topic: str
    unread_count: int
    upload: bool
    user: str
    user_team: str
    username: str


class ChatLoadMatch(TypedDict):
    channel: Any
    message_t: Any
    token: str


class ChatCreateDataRequired(TypedDict):
    channel: Any
    bot_profile: dict
    comment: dict
    message_ts: str
    ok: bool
    permalink: str
    ts: str
    type: str
    user_profile: dict


class ChatCreateData(ChatCreateDataRequired, total=False):
    as_user: Any
    attachment: Any
    block: Any
    icon_emoji: Any
    icon_url: Any
    link_name: Any
    mrkdwn: Any
    parse: Any
    reply_broadcast: Any
    text: Any
    thread_t: Any
    unfurl_link: Any
    unfurl_media: Any
    username: str
    attachments: list
    blocks: list
    bot_id: str
    client_msg_id: str
    display_as_bot: bool
    file: dict
    files: list
    icons: dict
    inviter: str
    is_delayed_message: bool
    is_intro: bool
    is_starred: bool
    last_read: str
    latest_reply: str
    name: str
    old_name: str
    parent_user_id: str
    pinned_to: list
    purpose: str
    reactions: list
    reply_count: int
    reply_users: list
    reply_users_count: int
    source_team: str
    subscribed: bool
    subtype: str
    team: str
    thread_ts: str
    topic: str
    unread_count: int
    upload: bool
    user: str
    user_team: str


class ChatscheduledMessageRequired(TypedDict):
    channel_id: str
    date_created: int
    id: str
    post_at: int


class ChatscheduledMessage(ChatscheduledMessageRequired, total=False):
    text: str


class ChatscheduledMessageListMatch(TypedDict, total=False):
    channel: Any
    cursor: Any
    latest: Any
    limit: int
    oldest: Any


class ConversationRequired(TypedDict):
    bot_profile: dict
    channel: Any
    channels: list
    comment: dict
    members: list
    messages: list
    ok: bool
    text: str
    ts: str
    type: str
    user_profile: dict


class Conversation(ConversationRequired, total=False):
    already_closed: bool
    already_open: bool
    attachments: list
    blocks: list
    bot_id: str
    client_msg_id: str
    display_as_bot: bool
    file: dict
    files: list
    has_more: bool
    icons: dict
    inviter: str
    is_delayed_message: bool
    is_intro: bool
    is_starred: bool
    last_read: str
    latest_reply: str
    name: str
    no_op: bool
    not_in_channel: bool
    old_name: str
    parent_user_id: str
    permalink: str
    pinned_to: list
    purpose: str
    reactions: list
    reply_count: int
    reply_users: list
    reply_users_count: int
    response_metadata: dict
    source_team: str
    subscribed: bool
    subtype: str
    team: str
    thread_ts: str
    topic: str
    unread_count: int
    upload: bool
    user: str
    user_team: str
    username: str
    warning: str


class ConversationLoadMatch(TypedDict, total=False):
    channel: Any
    include_locale: Any
    include_num_member: Any
    token: str


class ConversationListMatch(TypedDict, total=False):
    channel: Any
    cursor: Any
    inclusive: Any
    latest: Any
    limit: int
    oldest: Any
    token: str
    ts: Any


class ConversationCreateDataRequired(TypedDict):
    bot_profile: dict
    channels: list
    comment: dict
    members: list
    messages: list
    ok: bool
    text: str
    ts: str
    type: str
    user_profile: dict


class ConversationCreateData(ConversationCreateDataRequired, total=False):
    channel: Any
    return_im: Any
    user: Any
    already_closed: bool
    already_open: bool
    attachments: list
    blocks: list
    bot_id: str
    client_msg_id: str
    display_as_bot: bool
    file: dict
    files: list
    has_more: bool
    icons: dict
    inviter: str
    is_delayed_message: bool
    is_intro: bool
    is_starred: bool
    last_read: str
    latest_reply: str
    name: str
    no_op: bool
    not_in_channel: bool
    old_name: str
    parent_user_id: str
    permalink: str
    pinned_to: list
    purpose: str
    reactions: list
    reply_count: int
    reply_users: list
    reply_users_count: int
    response_metadata: dict
    source_team: str
    subscribed: bool
    subtype: str
    team: str
    thread_ts: str
    topic: str
    unread_count: int
    upload: bool
    user_team: str
    username: str
    warning: str


class Dialog(TypedDict):
    ok: bool


class DialogLoadMatch(TypedDict):
    dialog: Any
    trigger_id: str


class DndRequired(TypedDict):
    dnd_enabled: bool
    next_dnd_end_ts: int
    next_dnd_start_ts: int
    ok: bool


class Dnd(DndRequired, total=False):
    snooze_enabled: bool
    snooze_endtime: int
    snooze_remaining: int


class DndLoadMatch(TypedDict, total=False):
    token: str
    user: Any


class DndCreateDataRequired(TypedDict):
    num_minute: int
    token: str
    dnd_enabled: bool
    next_dnd_end_ts: int
    next_dnd_start_ts: int
    ok: bool


class DndCreateData(DndCreateDataRequired, total=False):
    snooze_enabled: bool
    snooze_endtime: int
    snooze_remaining: int


class Emoji(TypedDict):
    ok: bool


class EmojiLoadMatch(TypedDict):
    token: str


class FileRequired(TypedDict):
    comments: list
    file: dict
    ok: bool
    paging: dict


class File(FileRequired, total=False):
    channels: list
    comments_count: int
    content_html: None
    created: int
    date_delete: int
    display_as_bot: bool
    editable: bool
    editor: str
    external_id: str
    external_type: str
    external_url: str
    filetype: str
    groups: list
    has_rich_preview: bool
    id: str
    image_exif_rotation: int
    ims: list
    is_external: bool
    is_public: bool
    is_starred: bool
    is_tombstoned: bool
    last_editor: str
    mimetype: str
    mode: str
    name: str
    non_owner_editable: bool
    num_stars: int
    original_h: int
    original_w: int
    permalink: str
    permalink_public: str
    pinned_info: dict
    pinned_to: list
    pretty_type: str
    preview: str
    public_url_shared: bool
    reactions: list
    response_metadata: Any
    shares: dict
    size: int
    source_team: str
    state: str
    thumb_1024: str
    thumb_1024_h: int
    thumb_1024_w: int
    thumb_160: str
    thumb_360: str
    thumb_360_h: int
    thumb_360_w: int
    thumb_480: str
    thumb_480_h: int
    thumb_480_w: int
    thumb_64: str
    thumb_720: str
    thumb_720_h: int
    thumb_720_w: int
    thumb_80: str
    thumb_800: str
    thumb_800_h: int
    thumb_800_w: int
    thumb_960: str
    thumb_960_h: int
    thumb_960_w: int
    thumb_tiny: str
    timestamp: int
    title: str
    updated: int
    url_private: str
    url_private_download: str
    user: str
    user_team: str
    username: str


class FileListMatch(TypedDict, total=False):
    channel: Any
    count: Any
    page: int
    show_files_hidden_by_limit: Any
    token: str
    ts_from: Any
    ts_to: Any
    type: Any
    user: Any


class FileCreateDataRequired(TypedDict):
    comments: list
    ok: bool
    paging: dict


class FileCreateData(FileCreateDataRequired, total=False):
    channel: Any
    content: Any
    file: Any
    filename: Any
    filetype: Any
    initial_comment: Any
    thread_t: Any
    title: str
    token: str
    channels: list
    comments_count: int
    content_html: None
    created: int
    date_delete: int
    display_as_bot: bool
    editable: bool
    editor: str
    external_id: str
    external_type: str
    external_url: str
    groups: list
    has_rich_preview: bool
    id: str
    image_exif_rotation: int
    ims: list
    is_external: bool
    is_public: bool
    is_starred: bool
    is_tombstoned: bool
    last_editor: str
    mimetype: str
    mode: str
    name: str
    non_owner_editable: bool
    num_stars: int
    original_h: int
    original_w: int
    permalink: str
    permalink_public: str
    pinned_info: dict
    pinned_to: list
    pretty_type: str
    preview: str
    public_url_shared: bool
    reactions: list
    response_metadata: Any
    shares: dict
    size: int
    source_team: str
    state: str
    thumb_1024: str
    thumb_1024_h: int
    thumb_1024_w: int
    thumb_160: str
    thumb_360: str
    thumb_360_h: int
    thumb_360_w: int
    thumb_480: str
    thumb_480_h: int
    thumb_480_w: int
    thumb_64: str
    thumb_720: str
    thumb_720_h: int
    thumb_720_w: int
    thumb_80: str
    thumb_800: str
    thumb_800_h: int
    thumb_800_w: int
    thumb_960: str
    thumb_960_h: int
    thumb_960_w: int
    thumb_tiny: str
    timestamp: int
    updated: int
    url_private: str
    url_private_download: str
    user: str
    user_team: str
    username: str


class Filescomment(TypedDict):
    ok: bool


class FilescommentCreateDataRequired(TypedDict):
    ok: bool


class FilescommentCreateData(FilescommentCreateDataRequired, total=False):
    file: Any
    id: str


class Filesremote(TypedDict):
    ok: bool


class FilesremoteLoadMatch(TypedDict, total=False):
    channel: Any
    cursor: Any
    limit: int
    token: str
    ts_from: Any
    ts_to: Any


class FilesremoteCreateDataRequired(TypedDict):
    ok: bool


class FilesremoteCreateData(FilesremoteCreateDataRequired, total=False):
    external_id: str
    external_url: Any
    file: Any
    filetype: Any
    indexable_file_content: Any
    preview_image: Any
    title: str
    token: str


class MigrationRequired(TypedDict):
    enterprise_id: str
    ok: bool
    team_id: str


class Migration(MigrationRequired, total=False):
    invalid_user_ids: list
    user_id_map: dict


class MigrationListMatchRequired(TypedDict):
    token: str
    user: Any


class MigrationListMatch(MigrationListMatchRequired, total=False):
    team_id: str
    to_old: Any


class Oauth(TypedDict):
    ok: bool


class OauthLoadMatch(TypedDict, total=False):
    client_id: str
    client_secret: Any
    code: Any
    redirect_uri: Any
    single_channel: Any


class Oauthv2(TypedDict):
    ok: bool


class Oauthv2LoadMatchRequired(TypedDict):
    code: Any


class Oauthv2LoadMatch(Oauthv2LoadMatchRequired, total=False):
    client_id: str
    client_secret: Any
    redirect_uri: Any


class Pin(TypedDict, total=False):
    items: list
    ok: bool


class PinLoadMatch(TypedDict):
    channel: Any
    token: str


class PinCreateDataRequired(TypedDict):
    channel: Any


class PinCreateData(PinCreateDataRequired, total=False):
    timestamp: Any
    items: list
    ok: bool


class ReactionRequired(TypedDict):
    items: list
    paging: dict


class Reaction(ReactionRequired, total=False):
    file: dict
    ok: bool
    response_metadata: Any
    type: str


class ReactionLoadMatchRequired(TypedDict):
    token: str


class ReactionLoadMatch(ReactionLoadMatchRequired, total=False):
    channel: Any
    file: Any
    file_comment: Any
    full: Any
    timestamp: Any


class ReactionListMatchRequired(TypedDict):
    token: str


class ReactionListMatch(ReactionListMatchRequired, total=False):
    count: Any
    cursor: Any
    full: Any
    limit: int
    page: int
    user: Any


class ReactionCreateDataRequired(TypedDict):
    name: str
    items: list
    paging: dict


class ReactionCreateData(ReactionCreateDataRequired, total=False):
    channel: Any
    file: Any
    file_comment: Any
    timestamp: Any
    ok: bool
    response_metadata: Any
    type: str


class ReminderRequired(TypedDict):
    creator: str
    id: str
    ok: bool
    recurring: bool
    text: str
    user: str


class Reminder(ReminderRequired, total=False):
    complete_ts: int
    time: int


class ReminderLoadMatch(TypedDict, total=False):
    reminder: Any
    token: str


class ReminderListMatch(TypedDict, total=False):
    token: str


class ReminderCreateDataRequired(TypedDict):
    text: Any
    time: Any
    creator: str
    id: str
    ok: bool
    recurring: bool


class ReminderCreateData(ReminderCreateDataRequired, total=False):
    user: Any
    complete_ts: int


class Rtm(TypedDict):
    ok: bool
    self: dict
    team: dict
    url: str


class RtmLoadMatchRequired(TypedDict):
    token: str


class RtmLoadMatch(RtmLoadMatchRequired, total=False):
    batch_presence_aware: Any
    presence_sub: Any


class Search(TypedDict):
    ok: bool


class SearchLoadMatchRequired(TypedDict):
    query: Any
    token: str


class SearchLoadMatch(SearchLoadMatchRequired, total=False):
    count: Any
    highlight: Any
    page: int
    sort: Any
    sort_dir: Any


class Star(TypedDict):
    items: list
    ok: bool
    paging: dict


class StarListMatch(TypedDict, total=False):
    count: Any
    cursor: Any
    limit: int
    page: int
    token: str


class StarCreateDataRequired(TypedDict):
    items: list
    ok: bool
    paging: dict


class StarCreateData(StarCreateDataRequired, total=False):
    channel: Any
    file: Any
    file_comment: Any
    timestamp: Any


class TeamRequired(TypedDict):
    app_id: str
    app_type: str
    change_type: str
    count: int
    country: str | None
    date: str
    date_first: int
    date_last: int
    domain: str
    email_domain: str
    external_org_migrations: dict
    icon: dict
    id: str
    ip: str | None
    isp: str | None
    name: str
    ok: bool
    primary_owner: dict
    region: str | None
    scope: str
    user_agent: str
    user_id: str
    user_name: str
    username: str


class Team(TeamRequired, total=False):
    admin_app_id: str
    archived: bool
    avatar_base_url: str
    channel: str
    created: int
    date_create: int
    deleted: bool
    description: None | str
    discoverable: Any
    enterprise_id: str
    enterprise_name: str
    has_compliance_export: bool
    is_assigned: bool
    is_enterprise: int
    is_over_storage_limit: bool
    limit_ts: int
    locale: str
    messages_count: int
    msg_edit_window_mins: int
    over_integrations_limit: bool
    over_storage_limit: bool
    pay_prod_cur: str
    plan: str
    service_id: str
    service_type: str
    sso_provider: dict


class TeamLoadMatchRequired(TypedDict):
    token: str


class TeamLoadMatch(TeamLoadMatchRequired, total=False):
    team: Any
    user: Any


class TeamListMatchRequired(TypedDict):
    token: str


class TeamListMatch(TeamListMatchRequired, total=False):
    app_id: str
    change_type: Any
    count: Any
    page: int
    service_id: str
    user: Any
    before: Any


class Teamprofile(TypedDict):
    fields: list


class TeamprofileLoadMatchRequired(TypedDict):
    token: str


class TeamprofileLoadMatch(TeamprofileLoadMatchRequired, total=False):
    visibility: Any


class UserRequired(TypedDict):
    avatar_hash: str
    cache_ts: int
    channels: list
    image_1024: str
    image_192: str
    image_24: str
    image_32: str
    image_48: str
    image_512: str
    image_72: str
    image_original: str
    members: list
    ok: bool
    presence: str
    response_metadata: dict
    user: Any


class User(UserRequired, total=False):
    auto_away: bool
    connection_count: int
    last_activity: int
    manual_away: bool
    online: bool
    team: dict


class UserLoadMatchRequired(TypedDict):
    token: str


class UserLoadMatch(UserLoadMatchRequired, total=False):
    include_locale: Any
    user: Any


class UserListMatch(TypedDict, total=False):
    cursor: Any
    exclude_archived: Any
    limit: int
    token: str
    type: Any
    user: Any


class UserCreateDataRequired(TypedDict):
    token: str
    avatar_hash: str
    cache_ts: int
    channels: list
    image_1024: str
    image_192: str
    image_24: str
    image_32: str
    image_48: str
    image_512: str
    image_72: str
    image_original: str
    members: list
    ok: bool
    presence: str
    response_metadata: dict
    user: Any


class UserCreateData(UserCreateDataRequired, total=False):
    crop_w: Any
    crop_x: Any
    crop_y: Any
    image: Any
    auto_away: bool
    connection_count: int
    last_activity: int
    manual_away: bool
    online: bool
    team: dict


class UsergroupRequired(TypedDict):
    auto_provision: bool
    auto_type: Any
    created_by: str
    date_create: int
    date_delete: int
    date_update: int
    deleted_by: Any
    description: str
    enterprise_subteam_id: str
    handle: str
    id: str
    is_external: bool
    is_subteam: bool
    is_usergroup: bool
    name: str
    prefs: dict
    team_id: str
    updated_by: str


class Usergroup(UsergroupRequired, total=False):
    channel_count: int
    user_count: int
    users: list


class UsergroupListMatchRequired(TypedDict):
    token: str


class UsergroupListMatch(UsergroupListMatchRequired, total=False):
    include_count: int
    include_disabled: Any
    include_user: Any


class UsergroupCreateDataRequired(TypedDict):
    usergroup: Any
    auto_provision: bool
    auto_type: Any
    created_by: str
    date_create: int
    date_delete: int
    date_update: int
    deleted_by: Any
    enterprise_subteam_id: str
    id: str
    is_external: bool
    is_subteam: bool
    is_usergroup: bool
    prefs: dict
    team_id: str
    updated_by: str


class UsergroupCreateData(UsergroupCreateDataRequired, total=False):
    channel: Any
    description: str
    handle: Any
    include_count: int
    name: str
    channel_count: int
    user_count: int
    users: list


class UsergroupsuserRequired(TypedDict):
    auto_provision: bool
    auto_type: Any
    created_by: str
    date_create: int
    date_delete: int
    date_update: int
    deleted_by: Any
    description: str
    enterprise_subteam_id: str
    handle: str
    id: str
    is_external: bool
    is_subteam: bool
    is_usergroup: bool
    name: str
    ok: bool
    prefs: dict
    team_id: str
    updated_by: str


class Usergroupsuser(UsergroupsuserRequired, total=False):
    channel_count: int
    user_count: int
    users: list


class UsergroupsuserListMatchRequired(TypedDict):
    token: str
    usergroup: Any


class UsergroupsuserListMatch(UsergroupsuserListMatchRequired, total=False):
    include_disabled: Any


class UsergroupsuserCreateDataRequired(TypedDict):
    user: Any
    usergroup: Any
    auto_provision: bool
    auto_type: Any
    created_by: str
    date_create: int
    date_delete: int
    date_update: int
    deleted_by: Any
    description: str
    enterprise_subteam_id: str
    handle: str
    id: str
    is_external: bool
    is_subteam: bool
    is_usergroup: bool
    name: str
    ok: bool
    prefs: dict
    team_id: str
    updated_by: str


class UsergroupsuserCreateData(UsergroupsuserCreateDataRequired, total=False):
    include_count: int
    channel_count: int
    user_count: int
    users: list


class UsersprofileRequired(TypedDict):
    avatar_hash: str
    display_name: str
    display_name_normalized: str
    fields: dict | None | list
    phone: str
    real_name: str
    real_name_normalized: str
    skype: str
    status_emoji: str
    status_text: str
    title: str


class Usersprofile(UsersprofileRequired, total=False):
    always_active: bool
    api_app_id: str
    bot_id: str
    email: None | str
    first_name: None | str
    guest_expiration_ts: None | int
    guest_invited_by: None | str
    image_1024: None | str
    image_192: None | str
    image_24: None | str
    image_32: None | str
    image_48: None | str
    image_512: None | str
    image_72: None | str
    image_original: None | str
    is_app_user: bool
    is_custom_image: bool
    is_restricted: None | bool
    is_ultra_restricted: None | bool
    last_avatar_image_hash: str
    last_name: None | str
    memberships_count: int
    name: None | str
    pronouns: str
    status_default_emoji: str
    status_default_text: str
    status_default_text_canonical: None | str
    status_expiration: int
    status_text_canonical: None | str
    team: str
    updated: int
    user_id: str
    username: None | str


class UsersprofileLoadMatchRequired(TypedDict):
    token: str


class UsersprofileLoadMatch(UsersprofileLoadMatchRequired, total=False):
    include_label: Any
    user: Any


class UsersprofileCreateDataRequired(TypedDict):
    avatar_hash: str
    display_name: str
    display_name_normalized: str
    fields: dict | None | list
    phone: str
    real_name: str
    real_name_normalized: str
    skype: str
    status_emoji: str
    status_text: str
    title: str


class UsersprofileCreateData(UsersprofileCreateDataRequired, total=False):
    name: str
    profile: Any
    user: Any
    value: Any
    always_active: bool
    api_app_id: str
    bot_id: str
    email: None | str
    first_name: None | str
    guest_expiration_ts: None | int
    guest_invited_by: None | str
    image_1024: None | str
    image_192: None | str
    image_24: None | str
    image_32: None | str
    image_48: None | str
    image_512: None | str
    image_72: None | str
    image_original: None | str
    is_app_user: bool
    is_custom_image: bool
    is_restricted: None | bool
    is_ultra_restricted: None | bool
    last_avatar_image_hash: str
    last_name: None | str
    memberships_count: int
    pronouns: str
    status_default_emoji: str
    status_default_text: str
    status_default_text_canonical: None | str
    status_expiration: int
    status_text_canonical: None | str
    team: str
    updated: int
    user_id: str
    username: None | str


class View(TypedDict):
    ok: bool


class ViewLoadMatch(TypedDict, total=False):
    external_id: str
    hash: Any
    view: Any
    view_id: str


class Workflow(TypedDict):
    ok: bool


class WorkflowLoadMatchRequired(TypedDict):
    workflow_step_edit_id: str


class WorkflowLoadMatch(WorkflowLoadMatchRequired, total=False):
    input: Any
    output: Any
    step_image_url: Any
    step_name: Any
