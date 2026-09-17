// Typed models for the Slack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Adminapp {
  ok: boolean
}

export interface AdminappCreateData {
  app_id?: string
  request_id?: string
  team_id?: string
  ok: boolean
}

export interface Adminappsapproved {
  ok: boolean
}

export interface AdminappsapprovedLoadMatch {
  cursor?: any
  enterprise_id?: string
  limit?: number
  team_id?: string
  token: string
}

export interface Adminappsrequest {
  ok: boolean
}

export interface AdminappsrequestLoadMatch {
  cursor?: any
  limit?: number
  team_id?: string
  token: string
}

export interface Adminappsrestricted {
  ok: boolean
}

export interface AdminappsrestrictedLoadMatch {
  cursor?: any
  enterprise_id?: string
  limit?: number
  team_id?: string
  token: string
}

export interface Adminconversation {
  accepted_user?: string
  can_thread?: Record<string, any>
  channel_id?: string
  created: number
  creator: string
  id: string
  is_archived?: boolean
  is_channel: boolean
  is_frozen?: boolean
  is_general?: boolean
  is_member?: boolean
  is_moved?: number
  is_mpim: boolean
  is_non_threadable?: boolean
  is_org_shared: boolean
  is_pending_ext_shared?: boolean
  is_private: boolean
  is_read_only?: boolean
  is_shared: boolean
  is_thread_only?: boolean
  last_read?: string
  latest?: any
  members: any[]
  name: string
  name_normalized: string
  num_members?: number
  ok: boolean
  pending_shared?: any[]
  previous_names?: any[]
  priority?: number
  purpose: Record<string, any>
  response_metadata: Record<string, any>
  team_ids: any[]
  topic: Record<string, any>
  unlinked?: number
  unread_count?: number
  unread_count_display?: number
  who_can_post?: Record<string, any>
}

export interface AdminconversationLoadMatch {
  channel_id: string
}

export interface AdminconversationListMatch {
  cursor?: any
  limit?: number
  query?: any
  search_channel_type?: any
  sort?: any
  sort_dir?: any
  team_id?: string
}

export interface AdminconversationCreateData {
  description?: string
  is_private: boolean
  name: string
  org_wide?: any
  team_id?: string
  accepted_user?: string
  can_thread?: Record<string, any>
  channel_id?: string
  created: number
  creator: string
  id: string
  is_archived?: boolean
  is_channel: boolean
  is_frozen?: boolean
  is_general?: boolean
  is_member?: boolean
  is_moved?: number
  is_mpim: boolean
  is_non_threadable?: boolean
  is_org_shared: boolean
  is_pending_ext_shared?: boolean
  is_read_only?: boolean
  is_shared: boolean
  is_thread_only?: boolean
  last_read?: string
  latest?: any
  members: any[]
  name_normalized: string
  num_members?: number
  ok: boolean
  pending_shared?: any[]
  previous_names?: any[]
  priority?: number
  purpose: Record<string, any>
  response_metadata: Record<string, any>
  team_ids: any[]
  topic: Record<string, any>
  unlinked?: number
  unread_count?: number
  unread_count_display?: number
  who_can_post?: Record<string, any>
}

export interface Adminconversationsekm {
  ok: boolean
}

export interface AdminconversationsekmLoadMatch {
  channel_id?: string
  cursor?: any
  limit?: number
  team_id?: string
  token: string
}

export interface AdminconversationsrestrictAccess {
  ok: boolean
}

export interface AdminconversationsrestrictAccessLoadMatch {
  channel_id: string
  team_id?: string
  token: string
}

export interface AdminconversationsrestrictAccessCreateData {
  channel_id: string
  group_id: string
  team_id?: string
  token: string
  ok: boolean
}

export interface Adminemoji {
  ok: boolean
}

export interface AdminemojiLoadMatch {
  cursor?: any
  limit?: number
  token: string
}

export interface AdminemojiCreateData {
  alias_for?: any
  name: string
  token: string
  new_name?: any
  url?: string
  ok: boolean
}

export interface AdmininviteRequest {
  ok: boolean
}

export interface AdmininviteRequestLoadMatch {
  cursor?: any
  limit?: number
  team_id?: string
}

export interface AdmininviteRequestCreateData {
  invite_request_id: string
  team_id?: string
  ok: boolean
}

export interface AdmininviteRequestsapproved {
  ok: boolean
}

export interface AdmininviteRequestsapprovedLoadMatch {
  cursor?: any
  limit?: number
  team_id?: string
}

export interface AdmininviteRequestsdenied {
  ok: boolean
}

export interface AdmininviteRequestsdeniedLoadMatch {
  cursor?: any
  limit?: number
  team_id?: string
}

export interface Adminteam {
  ok: boolean
}

export interface AdminteamLoadMatch {
  cursor?: any
  limit?: number
}

export interface AdminteamCreateData {
  team_description?: any
  team_discoverability?: any
  team_domain: any
  team_name: any
  ok: boolean
}

export interface Adminteamsadmin {
  ok: boolean
}

export interface AdminteamsadminLoadMatch {
  cursor?: any
  limit?: number
  team_id: string
  token: string
}

export interface Adminteamsowner {
  ok: boolean
}

export interface AdminteamsownerLoadMatch {
  cursor?: any
  limit?: number
  team_id: string
  token: string
}

export interface Adminteamssetting {
  ok: boolean
}

export interface AdminteamssettingLoadMatch {
  team_id: string
}

export interface AdminteamssettingCreateData {
  channel_id?: string
  team_id: string
  token?: string
  description?: string
  discoverability?: any
  image_url?: any
  name?: string
  ok: boolean
}

export interface Adminuser {
  ok: boolean
}

export interface AdminuserLoadMatch {
  cursor?: any
  limit?: number
  team_id: string
}

export interface AdminuserCreateData {
  channel_id?: string
  custom_message?: any
  email?: string
  guest_expiration_t?: any
  is_restricted?: boolean
  is_ultra_restricted?: boolean
  real_name?: any
  resend?: any
  team_id: string
  user_id?: string
  expiration_t?: any
  ok: boolean
}

export interface Adminusergroup {
  ok: boolean
}

export interface AdminusergroupLoadMatch {
  include_num_member?: any
  team_id?: string
  usergroup_id: string
}

export interface AdminusergroupCreateData {
  auto_provision?: any
  team_id?: string
  usergroup_id: string
  channel_id?: string
  ok: boolean
}

export interface Adminuserssession {
  ok: boolean
}

export interface AdminuserssessionCreateData {
  mobile_only?: any
  user_id: string
  web_only?: any
  ok: boolean
}

export interface Api {
  ok: boolean
}

export interface ApiLoadMatch {
  error?: any
  foo?: any
}

export interface App {
  ok: boolean
}

export interface AppLoadMatch {
  client_id?: string
  client_secret?: any
  token?: string
}

export interface Appseventauthorization {
  ok: boolean
}

export interface AppseventauthorizationLoadMatch {
  cursor?: any
  event_context: any
  limit?: number
}

export interface Appspermission {
  app_home: Record<string, any>
  channel: Record<string, any>
  group: Record<string, any>
  im: Record<string, any>
  mpim: Record<string, any>
  ok: boolean
  team: Record<string, any>
}

export interface AppspermissionLoadMatch {
  scope: any
  token: string
  trigger_id: string
}

export interface Appspermissionsresource {
  id?: string
  type?: string
}

export interface AppspermissionsresourceListMatch {
  cursor?: any
  limit?: number
  token: string
}

export interface Appspermissionsscope {
  app_home?: any[]
  channel?: any[]
  group?: any[]
  im?: any[]
  mpim?: any[]
  team?: any[]
  user?: any[]
}

export interface AppspermissionsscopeLoadMatch {
  token: string
}

export interface Appspermissionsuser {
  ok: boolean
}

export interface AppspermissionsuserLoadMatch {
  scope?: any
  token: string
  trigger_id?: string
  user?: any
  cursor?: any
  limit?: number
}

export interface Auth {
  bot_id?: string
  is_enterprise_install?: boolean
  ok: boolean
  revoked: boolean
  team: string
  team_id: string
  url: string
  user: string
  user_id: string
}

export interface AuthLoadMatch {
  test?: any
  token: string
}

export interface Bot {
  app_id: string
  deleted: boolean
  icons: Record<string, any>
  id: string
  name: string
  updated: number
  user_id?: string
}

export interface BotLoadMatch {
  bot?: any
  token: string
}

export interface Call {
  ok: boolean
}

export interface CallLoadMatch {
  id: string
}

export interface CallCreateData {
  created_by?: any
  date_start?: any
  desktop_app_join_url?: any
  external_display_id?: string
  external_unique_id: string
  join_url: any
  title?: string
  user?: any
  ok: boolean
}

export interface Callsparticipant {
  ok: boolean
}

export interface CallsparticipantCreateData {
  id: string
  user: any
  ok: boolean
}

export interface Chat {
  attachments?: any[]
  blocks?: any[]
  bot_id?: string
  bot_profile: Record<string, any>
  channel: string
  client_msg_id?: string
  comment: Record<string, any>
  display_as_bot?: boolean
  file?: Record<string, any>
  files?: any[]
  icons?: Record<string, any>
  inviter?: string
  is_delayed_message?: boolean
  is_intro?: boolean
  is_starred?: boolean
  last_read?: string
  latest_reply?: string
  message_ts: string
  name?: string
  ok: boolean
  old_name?: string
  parent_user_id?: string
  permalink: string
  pinned_to?: any[]
  purpose?: string
  reactions?: any[]
  reply_count?: number
  reply_users?: any[]
  reply_users_count?: number
  source_team?: string
  subscribed?: boolean
  subtype?: string
  team?: string
  text: string
  thread_ts?: string
  topic?: string
  ts: string
  type: string
  unread_count?: number
  upload?: boolean
  user?: string
  user_profile: Record<string, any>
  user_team?: string
  username?: string
}

export interface ChatLoadMatch {
  channel: any
  message_t: any
  token: string
}

export interface ChatCreateData {
  as_user?: any
  attachment?: any
  block?: any
  channel: any
  icon_emoji?: any
  icon_url?: any
  link_name?: any
  mrkdwn?: any
  parse?: any
  reply_broadcast?: any
  text?: any
  thread_t?: any
  unfurl_link?: any
  unfurl_media?: any
  username?: string
  attachments?: any[]
  blocks?: any[]
  bot_id?: string
  bot_profile: Record<string, any>
  client_msg_id?: string
  comment: Record<string, any>
  display_as_bot?: boolean
  file?: Record<string, any>
  files?: any[]
  icons?: Record<string, any>
  inviter?: string
  is_delayed_message?: boolean
  is_intro?: boolean
  is_starred?: boolean
  last_read?: string
  latest_reply?: string
  message_ts: string
  name?: string
  ok: boolean
  old_name?: string
  parent_user_id?: string
  permalink: string
  pinned_to?: any[]
  purpose?: string
  reactions?: any[]
  reply_count?: number
  reply_users?: any[]
  reply_users_count?: number
  source_team?: string
  subscribed?: boolean
  subtype?: string
  team?: string
  thread_ts?: string
  topic?: string
  ts: string
  type: string
  unread_count?: number
  upload?: boolean
  user?: string
  user_profile: Record<string, any>
  user_team?: string
}

export interface ChatscheduledMessage {
  channel_id: string
  date_created: number
  id: string
  post_at: number
  text?: string
}

export interface ChatscheduledMessageListMatch {
  channel?: any
  cursor?: any
  latest?: any
  limit?: number
  oldest?: any
}

export interface Conversation {
  already_closed?: boolean
  already_open?: boolean
  attachments?: any[]
  blocks?: any[]
  bot_id?: string
  bot_profile: Record<string, any>
  channel: any
  channels: any[]
  client_msg_id?: string
  comment: Record<string, any>
  display_as_bot?: boolean
  file?: Record<string, any>
  files?: any[]
  has_more?: boolean
  icons?: Record<string, any>
  inviter?: string
  is_delayed_message?: boolean
  is_intro?: boolean
  is_starred?: boolean
  last_read?: string
  latest_reply?: string
  members: any[]
  messages: any[]
  name?: string
  no_op?: boolean
  not_in_channel?: boolean
  ok: boolean
  old_name?: string
  parent_user_id?: string
  permalink?: string
  pinned_to?: any[]
  purpose?: string
  reactions?: any[]
  reply_count?: number
  reply_users?: any[]
  reply_users_count?: number
  response_metadata?: Record<string, any>
  source_team?: string
  subscribed?: boolean
  subtype?: string
  team?: string
  text: string
  thread_ts?: string
  topic?: string
  ts: string
  type: string
  unread_count?: number
  upload?: boolean
  user?: string
  user_profile: Record<string, any>
  user_team?: string
  username?: string
  warning?: string
}

export interface ConversationLoadMatch {
  channel?: any
  include_locale?: any
  include_num_member?: any
  token?: string
}

export interface ConversationListMatch {
  channel?: any
  cursor?: any
  inclusive?: any
  latest?: any
  limit?: number
  oldest?: any
  token?: string
  ts?: any
}

export interface ConversationCreateData {
  channel?: any
  return_im?: any
  user?: any
  already_closed?: boolean
  already_open?: boolean
  attachments?: any[]
  blocks?: any[]
  bot_id?: string
  bot_profile: Record<string, any>
  channels: any[]
  client_msg_id?: string
  comment: Record<string, any>
  display_as_bot?: boolean
  file?: Record<string, any>
  files?: any[]
  has_more?: boolean
  icons?: Record<string, any>
  inviter?: string
  is_delayed_message?: boolean
  is_intro?: boolean
  is_starred?: boolean
  last_read?: string
  latest_reply?: string
  members: any[]
  messages: any[]
  name?: string
  no_op?: boolean
  not_in_channel?: boolean
  ok: boolean
  old_name?: string
  parent_user_id?: string
  permalink?: string
  pinned_to?: any[]
  purpose?: string
  reactions?: any[]
  reply_count?: number
  reply_users?: any[]
  reply_users_count?: number
  response_metadata?: Record<string, any>
  source_team?: string
  subscribed?: boolean
  subtype?: string
  team?: string
  text: string
  thread_ts?: string
  topic?: string
  ts: string
  type: string
  unread_count?: number
  upload?: boolean
  user_profile: Record<string, any>
  user_team?: string
  username?: string
  warning?: string
}

export interface Dialog {
  ok: boolean
}

export interface DialogLoadMatch {
  dialog: any
  trigger_id: string
}

export interface Dnd {
  dnd_enabled: boolean
  next_dnd_end_ts: number
  next_dnd_start_ts: number
  ok: boolean
  snooze_enabled?: boolean
  snooze_endtime?: number
  snooze_remaining?: number
}

export interface DndLoadMatch {
  token?: string
  user?: any
}

export interface DndCreateData {
  num_minute: number
  token: string
  dnd_enabled: boolean
  next_dnd_end_ts: number
  next_dnd_start_ts: number
  ok: boolean
  snooze_enabled?: boolean
  snooze_endtime?: number
  snooze_remaining?: number
}

export interface Emoji {
  ok: boolean
}

export interface EmojiLoadMatch {
  token: string
}

export interface File {
  channels?: any[]
  comments: any[]
  comments_count?: number
  content_html?: null
  created?: number
  date_delete?: number
  display_as_bot?: boolean
  editable?: boolean
  editor?: string
  external_id?: string
  external_type?: string
  external_url?: string
  file: Record<string, any>
  filetype?: string
  groups?: any[]
  has_rich_preview?: boolean
  id?: string
  image_exif_rotation?: number
  ims?: any[]
  is_external?: boolean
  is_public?: boolean
  is_starred?: boolean
  is_tombstoned?: boolean
  last_editor?: string
  mimetype?: string
  mode?: string
  name?: string
  non_owner_editable?: boolean
  num_stars?: number
  ok: boolean
  original_h?: number
  original_w?: number
  paging: Record<string, any>
  permalink?: string
  permalink_public?: string
  pinned_info?: Record<string, any>
  pinned_to?: any[]
  pretty_type?: string
  preview?: string
  public_url_shared?: boolean
  reactions?: any[]
  response_metadata?: any
  shares?: Record<string, any>
  size?: number
  source_team?: string
  state?: string
  thumb_1024?: string
  thumb_1024_h?: number
  thumb_1024_w?: number
  thumb_160?: string
  thumb_360?: string
  thumb_360_h?: number
  thumb_360_w?: number
  thumb_480?: string
  thumb_480_h?: number
  thumb_480_w?: number
  thumb_64?: string
  thumb_720?: string
  thumb_720_h?: number
  thumb_720_w?: number
  thumb_80?: string
  thumb_800?: string
  thumb_800_h?: number
  thumb_800_w?: number
  thumb_960?: string
  thumb_960_h?: number
  thumb_960_w?: number
  thumb_tiny?: string
  timestamp?: number
  title?: string
  updated?: number
  url_private?: string
  url_private_download?: string
  user?: string
  user_team?: string
  username?: string
}

export interface FileListMatch {
  channel?: any
  count?: any
  page?: number
  show_files_hidden_by_limit?: any
  token?: string
  ts_from?: any
  ts_to?: any
  type?: any
  user?: any
}

export interface FileCreateData {
  channel?: any
  content?: any
  file?: any
  filename?: any
  filetype?: any
  initial_comment?: any
  thread_t?: any
  title?: string
  token?: string
  channels?: any[]
  comments: any[]
  comments_count?: number
  content_html?: null
  created?: number
  date_delete?: number
  display_as_bot?: boolean
  editable?: boolean
  editor?: string
  external_id?: string
  external_type?: string
  external_url?: string
  groups?: any[]
  has_rich_preview?: boolean
  id?: string
  image_exif_rotation?: number
  ims?: any[]
  is_external?: boolean
  is_public?: boolean
  is_starred?: boolean
  is_tombstoned?: boolean
  last_editor?: string
  mimetype?: string
  mode?: string
  name?: string
  non_owner_editable?: boolean
  num_stars?: number
  ok: boolean
  original_h?: number
  original_w?: number
  paging: Record<string, any>
  permalink?: string
  permalink_public?: string
  pinned_info?: Record<string, any>
  pinned_to?: any[]
  pretty_type?: string
  preview?: string
  public_url_shared?: boolean
  reactions?: any[]
  response_metadata?: any
  shares?: Record<string, any>
  size?: number
  source_team?: string
  state?: string
  thumb_1024?: string
  thumb_1024_h?: number
  thumb_1024_w?: number
  thumb_160?: string
  thumb_360?: string
  thumb_360_h?: number
  thumb_360_w?: number
  thumb_480?: string
  thumb_480_h?: number
  thumb_480_w?: number
  thumb_64?: string
  thumb_720?: string
  thumb_720_h?: number
  thumb_720_w?: number
  thumb_80?: string
  thumb_800?: string
  thumb_800_h?: number
  thumb_800_w?: number
  thumb_960?: string
  thumb_960_h?: number
  thumb_960_w?: number
  thumb_tiny?: string
  timestamp?: number
  updated?: number
  url_private?: string
  url_private_download?: string
  user?: string
  user_team?: string
  username?: string
}

export interface Filescomment {
  ok: boolean
}

export interface FilescommentCreateData {
  file?: any
  id?: string
  ok: boolean
}

export interface Filesremote {
  ok: boolean
}

export interface FilesremoteLoadMatch {
  channel?: any
  cursor?: any
  limit?: number
  token?: string
  ts_from?: any
  ts_to?: any
}

export interface FilesremoteCreateData {
  external_id?: string
  external_url?: any
  file?: any
  filetype?: any
  indexable_file_content?: any
  preview_image?: any
  title?: string
  token?: string
  ok: boolean
}

export interface Migration {
  enterprise_id: string
  invalid_user_ids?: any[]
  ok: boolean
  team_id: string
  user_id_map?: Record<string, any>
}

export interface MigrationListMatch {
  team_id?: string
  to_old?: any
  token: string
  user: any
}

export interface Oauth {
  ok: boolean
}

export interface OauthLoadMatch {
  client_id?: string
  client_secret?: any
  code?: any
  redirect_uri?: any
  single_channel?: any
}

export interface Oauthv2 {
  ok: boolean
}

export interface Oauthv2LoadMatch {
  client_id?: string
  client_secret?: any
  code: any
  redirect_uri?: any
}

export interface Pin {
  items?: any[]
  ok?: boolean
}

export interface PinLoadMatch {
  channel: any
  token: string
}

export interface PinCreateData {
  channel: any
  timestamp?: any
  items?: any[]
  ok?: boolean
}

export interface Reaction {
  file?: Record<string, any>
  items: any[]
  ok?: boolean
  paging: Record<string, any>
  response_metadata?: any
  type?: string
}

export interface ReactionLoadMatch {
  channel?: any
  file?: any
  file_comment?: any
  full?: any
  timestamp?: any
  token: string
}

export interface ReactionListMatch {
  count?: any
  cursor?: any
  full?: any
  limit?: number
  page?: number
  token: string
  user?: any
}

export interface ReactionCreateData {
  channel?: any
  file?: any
  file_comment?: any
  name: string
  timestamp?: any
  items: any[]
  ok?: boolean
  paging: Record<string, any>
  response_metadata?: any
  type?: string
}

export interface Reminder {
  complete_ts?: number
  creator: string
  id: string
  ok: boolean
  recurring: boolean
  text: string
  time?: number
  user: string
}

export interface ReminderLoadMatch {
  reminder?: any
  token?: string
}

export interface ReminderListMatch {
  token?: string
}

export interface ReminderCreateData {
  text: any
  time: any
  user?: any
  complete_ts?: number
  creator: string
  id: string
  ok: boolean
  recurring: boolean
}

export interface Rtm {
  ok: boolean
  self: Record<string, any>
  team: Record<string, any>
  url: string
}

export interface RtmLoadMatch {
  batch_presence_aware?: any
  presence_sub?: any
  token: string
}

export interface Search {
  ok: boolean
}

export interface SearchLoadMatch {
  count?: any
  highlight?: any
  page?: number
  query: any
  sort?: any
  sort_dir?: any
  token: string
}

export interface Star {
  items: any[]
  ok: boolean
  paging: Record<string, any>
}

export interface StarListMatch {
  count?: any
  cursor?: any
  limit?: number
  page?: number
  token?: string
}

export interface StarCreateData {
  channel?: any
  file?: any
  file_comment?: any
  timestamp?: any
  items: any[]
  ok: boolean
  paging: Record<string, any>
}

export interface Team {
  admin_app_id?: string
  app_id: string
  app_type: string
  archived?: boolean
  avatar_base_url?: string
  change_type: string
  channel?: string
  count: number
  country: string | null
  created?: number
  date: string
  date_create?: number
  date_first: number
  date_last: number
  deleted?: boolean
  description?: null | string
  discoverable?: any
  domain: string
  email_domain: string
  enterprise_id?: string
  enterprise_name?: string
  external_org_migrations: Record<string, any>
  has_compliance_export?: boolean
  icon: Record<string, any>
  id: string
  ip: string | null
  is_assigned?: boolean
  is_enterprise?: number
  is_over_storage_limit?: boolean
  isp: string | null
  limit_ts?: number
  locale?: string
  messages_count?: number
  msg_edit_window_mins?: number
  name: string
  ok: boolean
  over_integrations_limit?: boolean
  over_storage_limit?: boolean
  pay_prod_cur?: string
  plan?: string
  primary_owner: Record<string, any>
  region: string | null
  scope: string
  service_id?: string
  service_type?: string
  sso_provider?: Record<string, any>
  user_agent: string
  user_id: string
  user_name: string
  username: string
}

export interface TeamLoadMatch {
  team?: any
  token: string
  user?: any
}

export interface TeamListMatch {
  app_id?: string
  change_type?: any
  count?: any
  page?: number
  service_id?: string
  token: string
  user?: any
  before?: any
}

export interface Teamprofile {
  fields: any[]
}

export interface TeamprofileLoadMatch {
  token: string
  visibility?: any
}

export interface User {
  auto_away?: boolean
  avatar_hash: string
  cache_ts: number
  channels: any[]
  connection_count?: number
  image_1024: string
  image_192: string
  image_24: string
  image_32: string
  image_48: string
  image_512: string
  image_72: string
  image_original: string
  last_activity?: number
  manual_away?: boolean
  members: any[]
  ok: boolean
  online?: boolean
  presence: string
  response_metadata: Record<string, any>
  team?: Record<string, any>
  user: any
}

export interface UserLoadMatch {
  include_locale?: any
  token: string
  user?: any
}

export interface UserListMatch {
  cursor?: any
  exclude_archived?: any
  limit?: number
  token?: string
  type?: any
  user?: any
}

export interface UserCreateData {
  crop_w?: any
  crop_x?: any
  crop_y?: any
  image?: any
  token: string
  auto_away?: boolean
  avatar_hash: string
  cache_ts: number
  channels: any[]
  connection_count?: number
  image_1024: string
  image_192: string
  image_24: string
  image_32: string
  image_48: string
  image_512: string
  image_72: string
  image_original: string
  last_activity?: number
  manual_away?: boolean
  members: any[]
  ok: boolean
  online?: boolean
  presence: string
  response_metadata: Record<string, any>
  team?: Record<string, any>
  user: any
}

export interface Usergroup {
  auto_provision: boolean
  auto_type: any
  channel_count?: number
  created_by: string
  date_create: number
  date_delete: number
  date_update: number
  deleted_by: any
  description: string
  enterprise_subteam_id: string
  handle: string
  id: string
  is_external: boolean
  is_subteam: boolean
  is_usergroup: boolean
  name: string
  prefs: Record<string, any>
  team_id: string
  updated_by: string
  user_count?: number
  users?: any[]
}

export interface UsergroupListMatch {
  include_count?: number
  include_disabled?: any
  include_user?: any
  token: string
}

export interface UsergroupCreateData {
  channel?: any
  description?: string
  handle?: any
  include_count?: number
  name?: string
  usergroup: any
  auto_provision: boolean
  auto_type: any
  channel_count?: number
  created_by: string
  date_create: number
  date_delete: number
  date_update: number
  deleted_by: any
  enterprise_subteam_id: string
  id: string
  is_external: boolean
  is_subteam: boolean
  is_usergroup: boolean
  prefs: Record<string, any>
  team_id: string
  updated_by: string
  user_count?: number
  users?: any[]
}

export interface Usergroupsuser {
  auto_provision: boolean
  auto_type: any
  channel_count?: number
  created_by: string
  date_create: number
  date_delete: number
  date_update: number
  deleted_by: any
  description: string
  enterprise_subteam_id: string
  handle: string
  id: string
  is_external: boolean
  is_subteam: boolean
  is_usergroup: boolean
  name: string
  ok: boolean
  prefs: Record<string, any>
  team_id: string
  updated_by: string
  user_count?: number
  users?: any[]
}

export interface UsergroupsuserListMatch {
  include_disabled?: any
  token: string
  usergroup: any
}

export interface UsergroupsuserCreateData {
  include_count?: number
  user: any
  usergroup: any
  auto_provision: boolean
  auto_type: any
  channel_count?: number
  created_by: string
  date_create: number
  date_delete: number
  date_update: number
  deleted_by: any
  description: string
  enterprise_subteam_id: string
  handle: string
  id: string
  is_external: boolean
  is_subteam: boolean
  is_usergroup: boolean
  name: string
  ok: boolean
  prefs: Record<string, any>
  team_id: string
  updated_by: string
  user_count?: number
  users?: any[]
}

export interface Usersprofile {
  always_active?: boolean
  api_app_id?: string
  avatar_hash: string
  bot_id?: string
  display_name: string
  display_name_normalized: string
  email?: null | string
  fields: Record<string, any> | null | any[]
  first_name?: null | string
  guest_expiration_ts?: null | number
  guest_invited_by?: null | string
  image_1024?: null | string
  image_192?: null | string
  image_24?: null | string
  image_32?: null | string
  image_48?: null | string
  image_512?: null | string
  image_72?: null | string
  image_original?: null | string
  is_app_user?: boolean
  is_custom_image?: boolean
  is_restricted?: null | boolean
  is_ultra_restricted?: null | boolean
  last_avatar_image_hash?: string
  last_name?: null | string
  memberships_count?: number
  name?: null | string
  phone: string
  pronouns?: string
  real_name: string
  real_name_normalized: string
  skype: string
  status_default_emoji?: string
  status_default_text?: string
  status_default_text_canonical?: null | string
  status_emoji: string
  status_expiration?: number
  status_text: string
  status_text_canonical?: null | string
  team?: string
  title: string
  updated?: number
  user_id?: string
  username?: null | string
}

export interface UsersprofileLoadMatch {
  include_label?: any
  token: string
  user?: any
}

export interface UsersprofileCreateData {
  name?: string
  profile?: any
  user?: any
  value?: any
  always_active?: boolean
  api_app_id?: string
  avatar_hash: string
  bot_id?: string
  display_name: string
  display_name_normalized: string
  email?: null | string
  fields: Record<string, any> | null | any[]
  first_name?: null | string
  guest_expiration_ts?: null | number
  guest_invited_by?: null | string
  image_1024?: null | string
  image_192?: null | string
  image_24?: null | string
  image_32?: null | string
  image_48?: null | string
  image_512?: null | string
  image_72?: null | string
  image_original?: null | string
  is_app_user?: boolean
  is_custom_image?: boolean
  is_restricted?: null | boolean
  is_ultra_restricted?: null | boolean
  last_avatar_image_hash?: string
  last_name?: null | string
  memberships_count?: number
  phone: string
  pronouns?: string
  real_name: string
  real_name_normalized: string
  skype: string
  status_default_emoji?: string
  status_default_text?: string
  status_default_text_canonical?: null | string
  status_emoji: string
  status_expiration?: number
  status_text: string
  status_text_canonical?: null | string
  team?: string
  title: string
  updated?: number
  user_id?: string
  username?: null | string
}

export interface View {
  ok: boolean
}

export interface ViewLoadMatch {
  external_id?: string
  hash?: any
  view?: any
  view_id?: string
}

export interface Workflow {
  ok: boolean
}

export interface WorkflowLoadMatch {
  input?: any
  output?: any
  step_image_url?: any
  step_name?: any
  workflow_step_edit_id: string
}

