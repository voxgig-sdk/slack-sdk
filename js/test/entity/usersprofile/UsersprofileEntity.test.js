
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { SlackSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('UsersprofileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Usersprofile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"always_active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"api_app_id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"avatar_hash","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"bot_id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"display_name","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"display_name_normalized","req":true,"type":"`$STRING`","index$":5},{"active":true,"format":"email","name":"email","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":6},{"active":true,"name":"fields","req":true,"type":["`$ONE`",["`$OBJECT`","`$NULL`","`$ARRAY`"]],"index$":7},{"active":true,"name":"first_name","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":8},{"active":true,"name":"guest_expiration_ts","req":false,"type":["`$ONE`",["`$NULL`","`$INTEGER`"]],"index$":9},{"active":true,"name":"guest_invited_by","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":10},{"active":true,"format":"uri","name":"image_1024","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":11},{"active":true,"format":"uri","name":"image_192","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":12},{"active":true,"format":"uri","name":"image_24","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":13},{"active":true,"format":"uri","name":"image_32","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":14},{"active":true,"format":"uri","name":"image_48","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":15},{"active":true,"format":"uri","name":"image_512","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":16},{"active":true,"format":"uri","name":"image_72","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":17},{"active":true,"format":"uri","name":"image_original","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":18},{"active":true,"name":"is_app_user","req":false,"type":"`$BOOLEAN`","index$":19},{"active":true,"name":"is_custom_image","req":false,"type":"`$BOOLEAN`","index$":20},{"active":true,"name":"is_restricted","req":false,"type":["`$ONE`",["`$NULL`","`$BOOLEAN`"]],"index$":21},{"active":true,"name":"is_ultra_restricted","req":false,"type":["`$ONE`",["`$NULL`","`$BOOLEAN`"]],"index$":22},{"active":true,"name":"last_avatar_image_hash","req":false,"type":"`$STRING`","index$":23},{"active":true,"name":"last_name","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":24},{"active":true,"name":"memberships_count","req":false,"type":"`$INTEGER`","index$":25},{"active":true,"name":"name","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":26},{"active":true,"name":"phone","req":true,"type":"`$STRING`","index$":27},{"active":true,"name":"pronouns","req":false,"type":"`$STRING`","index$":28},{"active":true,"name":"real_name","req":true,"type":"`$STRING`","index$":29},{"active":true,"name":"real_name_normalized","req":true,"type":"`$STRING`","index$":30},{"active":true,"name":"skype","req":true,"type":"`$STRING`","index$":31},{"active":true,"name":"status_default_emoji","req":false,"type":"`$STRING`","index$":32},{"active":true,"name":"status_default_text","req":false,"type":"`$STRING`","index$":33},{"active":true,"name":"status_default_text_canonical","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":34},{"active":true,"name":"status_emoji","req":true,"type":"`$STRING`","index$":35},{"active":true,"name":"status_expiration","req":false,"type":"`$INTEGER`","index$":36},{"active":true,"name":"status_text","req":true,"type":"`$STRING`","index$":37},{"active":true,"name":"status_text_canonical","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":38},{"active":true,"name":"team","req":false,"type":"`$STRING`","index$":39},{"active":true,"name":"title","req":true,"type":"`$STRING`","index$":40},{"active":true,"name":"updated","req":false,"type":"`$INTEGER`","index$":41},{"active":true,"name":"user_id","req":false,"type":"`$STRING`","index$":42},{"active":true,"name":"username","req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":43}],"name":"usersprofile","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"token","orig":"token","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"profile","orig":"profile","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"user","orig":"user","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"value","orig":"value","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"POST /users.profile.set","json":"{\"consumes\":[\"application/x-www-form-urlencoded\",\"application/json\"],\"operationId\":\"users_profile_set\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `users.profile:write`\",\"in\":\"header\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Name of a single key to set. Usable only if `profile` is not passed.\",\"in\":\"formData\",\"name\":\"name\",\"type\":\"string\"},{\"description\":\"Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.\",\"in\":\"formData\",\"name\":\"profile\",\"type\":\"string\"},{\"description\":\"ID of user to change. This argument may only be specified by team admins on paid teams.\",\"in\":\"formData\",\"name\":\"user\",\"type\":\"string\"},{\"description\":\"Value to set a single key to. Usable only if `profile` is not passed.\",\"in\":\"formData\",\"name\":\"value\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"profile\":{\"avatar_hash\":\"ge3b51ca72de\",\"display_name\":\"spengler\",\"display_name_normalized\":\"spengler\",\"email\":\"spengler@ghostbusters.example.com\",\"image_192\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_24\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_32\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_48\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_512\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_72\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"real_name\":\"Egon Spengler\",\"real_name_normalized\":\"Egon Spengler\",\"status_emoji\":\":books:\",\"status_expiration\":0,\"status_text\":\"Print is dead\",\"team\":\"T012AB3C4\"}}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from users.profile.set method\",\"properties\":{\"email_pending\":{\"format\":\"email\",\"type\":\"string\"},\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"profile\":{\"additionalProperties\":false,\"properties\":{\"always_active\":{\"type\":\"boolean\"},\"api_app_id\":{\"pattern\":\"^(A[A-Z0-9]{1,})?$\",\"title\":\"App ID or empty string\",\"type\":\"string\"},\"avatar_hash\":{\"type\":\"string\"},\"bot_id\":{\"pattern\":\"^B[A-Z0-9]{8,}$\",\"title\":\"Bot User ID\",\"type\":\"string\"},\"display_name\":{\"type\":\"string\"},\"display_name_normalized\":{\"type\":\"string\"},\"email\":{\"format\":\"email\",\"type\":[\"null\",\"string\"]},\"fields\":{\"items\":{\"type\":\"object\"},\"type\":[\"object\",\"null\",\"array\"]},\"first_name\":{\"type\":[\"null\",\"string\"]},\"guest_expiration_ts\":{\"type\":[\"null\",\"integer\"]},\"guest_invited_by\":{\"type\":[\"null\",\"string\"]},\"image_1024\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_192\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_24\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_32\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_48\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_512\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_72\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_original\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"is_app_user\":{\"type\":\"boolean\"},\"is_custom_image\":{\"type\":\"boolean\"},\"is_restricted\":{\"type\":[\"null\",\"boolean\"]},\"is_ultra_restricted\":{\"type\":[\"null\",\"boolean\"]},\"last_avatar_image_hash\":{\"type\":\"string\"},\"last_name\":{\"type\":[\"null\",\"string\"]},\"memberships_count\":{\"type\":\"integer\"},\"name\":{\"type\":[\"null\",\"string\"]},\"phone\":{\"type\":\"string\"},\"pronouns\":{\"type\":\"string\"},\"real_name\":{\"type\":\"string\"},\"real_name_normalized\":{\"type\":\"string\"},\"skype\":{\"type\":\"string\"},\"status_default_emoji\":{\"type\":\"string\"},\"status_default_text\":{\"type\":\"string\"},\"status_default_text_canonical\":{\"type\":[\"null\",\"string\"]},\"status_emoji\":{\"type\":\"string\"},\"status_expiration\":{\"type\":\"integer\"},\"status_text\":{\"type\":\"string\"},\"status_text_canonical\":{\"type\":[\"null\",\"string\"]},\"team\":{\"pattern\":\"^[TE][A-Z0-9]{8,}$\",\"title\":\"Team or Enterprise ID\",\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated\":{\"type\":\"integer\"},\"user_id\":{\"type\":\"string\"},\"username\":{\"type\":[\"null\",\"string\"]}},\"required\":[\"real_name\",\"display_name\",\"avatar_hash\",\"real_name_normalized\",\"display_name_normalized\",\"title\",\"phone\",\"skype\",\"status_text\",\"status_emoji\",\"fields\"],\"title\":\"User profile object\",\"type\":\"object\"},\"username\":{\"type\":\"string\"}},\"required\":[\"ok\",\"username\",\"profile\"],\"title\":\"users.profile.set schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_profile\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from users.profile.set method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"reserved_name\",\"invalid_profile\",\"profile_set_failed\",\"not_admin\",\"not_app_admin\",\"cannot_update_admin_user\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"user_is_bot\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"users.profile.set error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"users.profile:write\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/users.profile.set","segments":[{"lit":"users.profile.set"}],"select":{"exist":["name","profile","token","user","value"]},"transform":{"req":"`reqdata`","res":"`body.profile`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"include_label","orig":"include_label","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"user","orig":"user","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /users.profile.get","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"users_profile_get\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `users.profile:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Include labels for each ID in custom profile fields\",\"in\":\"query\",\"name\":\"include_labels\",\"type\":\"boolean\"},{\"description\":\"User to retrieve profile info for\",\"in\":\"query\",\"name\":\"user\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"profile\":{\"avatar_hash\":\"ge3b51ca72de\",\"display_name\":\"spengler\",\"display_name_normalized\":\"spengler\",\"email\":\"spengler@ghostbusters.example.com\",\"image_192\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_24\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_32\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_48\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_512\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_72\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"image_original\":\"https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg\",\"real_name\":\"Egon Spengler\",\"real_name_normalized\":\"Egon Spengler\",\"status_emoji\":\":books:\",\"status_expiration\":0,\"status_text\":\"Print is dead\",\"team\":\"T012AB3C4\"}}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from users.profile.get method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"profile\":{\"additionalProperties\":false,\"properties\":{\"always_active\":{\"type\":\"boolean\"},\"api_app_id\":{\"pattern\":\"^(A[A-Z0-9]{1,})?$\",\"title\":\"App ID or empty string\",\"type\":\"string\"},\"avatar_hash\":{\"type\":\"string\"},\"bot_id\":{\"pattern\":\"^B[A-Z0-9]{8,}$\",\"title\":\"Bot User ID\",\"type\":\"string\"},\"display_name\":{\"type\":\"string\"},\"display_name_normalized\":{\"type\":\"string\"},\"email\":{\"format\":\"email\",\"type\":[\"null\",\"string\"]},\"fields\":{\"items\":{\"type\":\"object\"},\"type\":[\"object\",\"null\",\"array\"]},\"first_name\":{\"type\":[\"null\",\"string\"]},\"guest_expiration_ts\":{\"type\":[\"null\",\"integer\"]},\"guest_invited_by\":{\"type\":[\"null\",\"string\"]},\"image_1024\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_192\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_24\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_32\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_48\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_512\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_72\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"image_original\":{\"format\":\"uri\",\"type\":[\"null\",\"string\"]},\"is_app_user\":{\"type\":\"boolean\"},\"is_custom_image\":{\"type\":\"boolean\"},\"is_restricted\":{\"type\":[\"null\",\"boolean\"]},\"is_ultra_restricted\":{\"type\":[\"null\",\"boolean\"]},\"last_avatar_image_hash\":{\"type\":\"string\"},\"last_name\":{\"type\":[\"null\",\"string\"]},\"memberships_count\":{\"type\":\"integer\"},\"name\":{\"type\":[\"null\",\"string\"]},\"phone\":{\"type\":\"string\"},\"pronouns\":{\"type\":\"string\"},\"real_name\":{\"type\":\"string\"},\"real_name_normalized\":{\"type\":\"string\"},\"skype\":{\"type\":\"string\"},\"status_default_emoji\":{\"type\":\"string\"},\"status_default_text\":{\"type\":\"string\"},\"status_default_text_canonical\":{\"type\":[\"null\",\"string\"]},\"status_emoji\":{\"type\":\"string\"},\"status_expiration\":{\"type\":\"integer\"},\"status_text\":{\"type\":\"string\"},\"status_text_canonical\":{\"type\":[\"null\",\"string\"]},\"team\":{\"pattern\":\"^[TE][A-Z0-9]{8,}$\",\"title\":\"Team or Enterprise ID\",\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated\":{\"type\":\"integer\"},\"user_id\":{\"type\":\"string\"},\"username\":{\"type\":[\"null\",\"string\"]}},\"required\":[\"real_name\",\"display_name\",\"avatar_hash\",\"real_name_normalized\",\"display_name_normalized\",\"title\",\"phone\",\"skype\",\"status_text\",\"status_emoji\",\"fields\"],\"title\":\"User profile object\",\"type\":\"object\"}},\"required\":[\"ok\",\"profile\"],\"title\":\"users.profile.get schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"user_not_found\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from users.profile.get method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"user_not_found\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"user_is_bot\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"users.profile.get error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"users.profile:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/users.profile.get","segments":[{"lit":"users.profile.get"}],"select":{"exist":["include_label","token","user"]},"transform":{"req":"`reqdata`","res":"`body.profile`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usersprofile","name__orig":"usersprofile","Name":"Usersprofile","name_":"usersprofile","name-":"usersprofile","NAME":"USERSPROFILE","index$":52}, {"active":true,"entity":"usersprofile","key$":"BasicUsersprofileFlow","kind":"basic","name":"BasicUsersprofileFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"usersprofile_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"usersprofile_ref01","srcdatavar":"usersprofile_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usersprofile_ref01"}}],"index$":1}]}, 'Usersprofile')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const usersprofile_ref01_ent = client.Usersprofile()
    let usersprofile_ref01_data = setup.data.new.usersprofile['usersprofile_ref01']

    usersprofile_ref01_data = (await usersprofile_ref01_ent.create(usersprofile_ref01_data)).data()
    assert(null != usersprofile_ref01_data)


    // LOAD
    const usersprofile_ref01_match_dt0 = {}
    const usersprofile_ref01_data_dt0 = (await usersprofile_ref01_ent.load(usersprofile_ref01_match_dt0)).data()
    assert(null != usersprofile_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/usersprofile/UsersprofileTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SlackSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['usersprofile01','usersprofile02','usersprofile03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_USERSPROFILE_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_USERSPROFILE_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_USERSPROFILE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SlackSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.SLACK_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SLACK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
