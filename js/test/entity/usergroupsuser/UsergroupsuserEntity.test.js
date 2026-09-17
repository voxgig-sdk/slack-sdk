
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


describe('UsergroupsuserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Usergroupsuser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"auto_provision","req":true,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"auto_type","req":true,"type":"`$ANY`","index$":1},{"active":true,"name":"channel_count","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"created_by","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"date_create","req":true,"type":"`$INTEGER`","index$":4},{"active":true,"name":"date_delete","req":true,"type":"`$INTEGER`","index$":5},{"active":true,"name":"date_update","req":true,"type":"`$INTEGER`","index$":6},{"active":true,"name":"deleted_by","req":true,"type":"`$ANY`","index$":7},{"active":true,"name":"description","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"enterprise_subteam_id","req":true,"type":"`$STRING`","index$":9},{"active":true,"name":"handle","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"is_external","req":true,"type":"`$BOOLEAN`","index$":12},{"active":true,"name":"is_subteam","req":true,"type":"`$BOOLEAN`","index$":13},{"active":true,"name":"is_usergroup","req":true,"type":"`$BOOLEAN`","index$":14},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":15},{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":16},{"active":true,"name":"prefs","req":true,"type":"`$OBJECT`","index$":17},{"active":true,"name":"team_id","req":true,"type":"`$STRING`","index$":18},{"active":true,"name":"updated_by","req":true,"type":"`$STRING`","index$":19},{"active":true,"name":"user_count","req":false,"type":"`$INTEGER`","index$":20},{"active":true,"name":"users","op":{"list":{"req":true,"type":"`$ARRAY`"}},"req":false,"type":"`$ARRAY`","index$":21}],"id":{"field":"id","name":"id"},"name":"usergroupsuser","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"token","orig":"token","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"include_count","orig":"include_count","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"user","orig":"user","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"usergroup","orig":"usergroup","reqd":true,"type":"`$ANY`","index$":2}]},"contract":{"id":"POST /usergroups.users.update","json":"{\"consumes\":[\"application/x-www-form-urlencoded\",\"application/json\"],\"operationId\":\"usergroups_users_update\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `usergroups:write`\",\"in\":\"header\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Include the number of users in the User Group.\",\"in\":\"formData\",\"name\":\"include_count\",\"type\":\"boolean\"},{\"description\":\"The encoded ID of the User Group to update.\",\"in\":\"formData\",\"name\":\"usergroup\",\"required\":true,\"type\":\"string\"},{\"description\":\"A comma separated string of encoded user IDs that represent the entire list of users for the User Group.\",\"in\":\"formData\",\"name\":\"users\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"usergroup\":{\"auto_type\":null,\"created_by\":\"U060R4BJ4\",\"date_create\":1447096577,\"date_delete\":0,\"date_update\":1447102109,\"deleted_by\":null,\"description\":\"Marketing gurus, PR experts and product advocates.\",\"handle\":\"marketing-team\",\"id\":\"S0616NG6M\",\"is_external\":false,\"is_usergroup\":true,\"name\":\"Marketing Team\",\"prefs\":{\"channels\":[],\"groups\":[]},\"team_id\":\"T060R4BHN\",\"updated_by\":\"U060R4BJ4\",\"user_count\":1,\"users\":[\"U060R4BJ4\",\"U060RNRCZ\"]}}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from usergroups.users.update method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"usergroup\":{\"additionalProperties\":false,\"properties\":{\"auto_provision\":{\"type\":\"boolean\"},\"auto_type\":{\"items\":[{\"type\":\"null\"},{\"enum\":[\"owner\",\"admin\"],\"type\":\"string\"}]},\"channel_count\":{\"type\":\"integer\"},\"created_by\":{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"},\"date_create\":{\"type\":\"integer\"},\"date_delete\":{\"type\":\"integer\"},\"date_update\":{\"type\":\"integer\"},\"deleted_by\":{\"items\":[{\"type\":\"null\"},{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"}]},\"description\":{\"type\":\"string\"},\"enterprise_subteam_id\":{\"type\":\"string\"},\"handle\":{\"type\":\"string\"},\"id\":{\"pattern\":\"^S[A-Z0-9]{2,}$\",\"title\":\"Subteam ID\",\"type\":\"string\"},\"is_external\":{\"type\":\"boolean\"},\"is_subteam\":{\"type\":\"boolean\"},\"is_usergroup\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"prefs\":{\"additionalProperties\":false,\"properties\":{\"channels\":{\"items\":{\"pattern\":\"^[C][A-Z0-9]{2,}$\",\"title\":\"Channel ID\",\"type\":\"string\"},\"type\":\"array\"},\"groups\":{\"items\":{\"pattern\":\"^[G][A-Z0-9]{8,}$\",\"title\":\"Private Channel ID\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"channels\",\"groups\"],\"type\":\"object\"},\"team_id\":{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"},\"updated_by\":{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"},\"user_count\":{\"type\":\"integer\"},\"users\":{\"items\":{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"id\",\"team_id\",\"is_usergroup\",\"is_subteam\",\"name\",\"description\",\"handle\",\"is_external\",\"date_create\",\"date_update\",\"date_delete\",\"auto_type\",\"auto_provision\",\"enterprise_subteam_id\",\"created_by\",\"updated_by\",\"deleted_by\",\"prefs\"],\"title\":\"Subteam/Usergroup Object\",\"type\":\"object\"}},\"required\":[\"ok\",\"usergroup\"],\"title\":\"usergroups.users.update schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from usergroups.users.update method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"permission_denied\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"user_is_bot\",\"user_is_restricted\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_require\",\"fatal_error\",\"missing_charset\",\"superfluous_charset\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"usergroups.users.update error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"usergroups:write\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/usergroups.users.update","segments":[{"lit":"usergroups.users.update"}],"select":{"exist":["include_count","token","user","usergroup"]},"transform":{"req":"`reqdata`","res":"`body.usergroup`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"include_disabled","orig":"include_disabled","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"usergroup","orig":"usergroup","reqd":true,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /usergroups.users.list","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"usergroups_users_list\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `usergroups:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Allow results that involve disabled User Groups.\",\"in\":\"query\",\"name\":\"include_disabled\",\"type\":\"boolean\"},{\"description\":\"The encoded ID of the User Group to update.\",\"in\":\"query\",\"name\":\"usergroup\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Standard success response when used with a user token\",\"examples\":{\"application/json\":{\"ok\":true,\"users\":[\"U060R4BJ4\",\"W123A4BC5\"]}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from usergroups.users.list method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"users\":{\"items\":{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"ok\",\"users\"],\"title\":\"usergroups.users.list schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Standard failure response when used with an invalid token\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from usergroups.users.list method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"user_is_bot\",\"user_is_restricted\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_require\",\"fatal_error\",\"missing_charset\",\"superfluous_charset\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"usergroups.users.list error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"usergroups:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/usergroups.users.list","segments":[{"lit":"usergroups.users.list"}],"select":{"exist":["include_disabled","token","usergroup"]},"transform":{"req":"`reqdata`","res":"`body.users`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"usergroupsuser","name__orig":"usergroupsuser","Name":"Usergroupsuser","name_":"usergroupsuser","name-":"usergroupsuser","NAME":"USERGROUPSUSER","index$":51}, {"active":true,"entity":"usergroupsuser","key$":"BasicUsergroupsuserFlow","kind":"basic","name":"BasicUsergroupsuserFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"usergroupsuser_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"usergroupsuser_ref01"}}],"index$":1}]}, 'Usergroupsuser')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const usergroupsuser_ref01_ent = client.Usergroupsuser()
    let usergroupsuser_ref01_data = setup.data.new.usergroupsuser['usergroupsuser_ref01']

    usergroupsuser_ref01_data = (await usergroupsuser_ref01_ent.create(usergroupsuser_ref01_data)).data()
    assert(null != usergroupsuser_ref01_data.id)


    // LIST
    const usergroupsuser_ref01_match = {}

    const usergroupsuser_ref01_list = (await usergroupsuser_ref01_ent.list(usergroupsuser_ref01_match)).map((e) => e.data())

    assert(!isempty(select(usergroupsuser_ref01_list, { id: usergroupsuser_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/usergroupsuser/UsergroupsuserTestData.json')

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
    ['usergroupsuser01','usergroupsuser02','usergroupsuser03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_USERGROUPSUSER_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_USERGROUPSUSER_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_USERGROUPSUSER_ENTID']
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
  
