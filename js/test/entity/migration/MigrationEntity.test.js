
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


describe('MigrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Migration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"enterprise_id","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"invalid_user_ids","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"team_id","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"user_id_map","req":false,"type":"`$OBJECT`","index$":4}],"name":"migration","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"to_old","orig":"to_old","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"user","orig":"user","reqd":true,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /migration.exchange","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"migration_exchange\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `tokens.basic`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"A comma-separated list of user ids, up to 400 per request\",\"in\":\"query\",\"name\":\"users\",\"required\":true,\"type\":\"string\"},{\"description\":\"Specify team_id starts with `T` in case of Org Token\",\"in\":\"query\",\"name\":\"team_id\",\"type\":\"string\"},{\"description\":\"Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.\",\"in\":\"query\",\"name\":\"to_old\",\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response when mappings exist for the specified user IDs\",\"examples\":{\"application/json\":{\"enterprise_id\":\"E1KQTNXE1\",\"invalid_user_ids\":[\"U21ABZZXX\"],\"ok\":true,\"team_id\":\"T1KR7PE1W\",\"user_id_map\":{\"U06UBSUN5\":\"W06M56XJM\",\"U06UBSVB3\":\"W06PUUDLY\",\"U06UBSVDX\":\"W06PUUDMW\",\"U06UEB62U\":\"W06PTT6GH\",\"W06UAZ65Q\":\"W06UAZ65Q\"}}},\"schema\":{\"additionalProperties\":true,\"description\":\"Schema for successful response from migration.exchange method\",\"properties\":{\"enterprise_id\":{\"title\":\"The enterprise grid organization ID containing the workspace/team.\",\"type\":\"string\"},\"invalid_user_ids\":{\"items\":{\"type\":\"string\"},\"title\":\"A list of User IDs that cannot be mapped or found\",\"type\":\"array\"},\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"team_id\":{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"},\"user_id_map\":{\"additionalProperties\":true,\"title\":\"A mapping of provided user IDs with mapped user IDs\",\"type\":\"object\"}},\"required\":[\"ok\",\"team_id\",\"enterprise_id\"],\"title\":\"migration.exchange success schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response when there are no mappings to provide\",\"examples\":{\"application/json\":{\"error\":\"not_enterprise_team\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from migration.exchange method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"not_enterprise_team\",\"too_many_users\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"migration.exchange error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"tokens.basic\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/migration.exchange","segments":[{"lit":"migration.exchange"}],"select":{"exist":["team_id","to_old","token","user"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"migration","name__orig":"migration","Name":"Migration","name_":"migration","name-":"migration","NAME":"MIGRATION","index$":38}, {"active":true,"entity":"migration","key$":"BasicMigrationFlow","kind":"basic","name":"BasicMigrationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"migration_ref01"}}],"index$":0}]}, 'Migration')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let migration_ref01_data = Object.values(setup.data.existing.migration)[0]

    // LIST
    const migration_ref01_ent = client.Migration()
    const migration_ref01_match = {}

    const migration_ref01_list = (await migration_ref01_ent.list(migration_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/migration/MigrationTestData.json')

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
    ['migration01','migration02','migration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_MIGRATION_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_MIGRATION_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_MIGRATION_ENTID']
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
  
