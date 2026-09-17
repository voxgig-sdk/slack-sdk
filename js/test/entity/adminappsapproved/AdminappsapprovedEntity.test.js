
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


describe('AdminappsapprovedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Adminappsapproved()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":0}],"name":"adminappsapproved","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"enterprise_id","orig":"enterprise_id","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /admin.apps.approved.list","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"admin_apps_approved_list\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `admin.apps:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"The maximum number of items to return. Must be between 1 - 1000 both inclusive.\",\"in\":\"query\",\"name\":\"limit\",\"type\":\"integer\"},{\"description\":\"Set `cursor` to `next_cursor` returned by the previous call to list items in the next page\",\"in\":\"query\",\"name\":\"cursor\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"team_id\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"enterprise_id\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"approved_apps\":[{\"app\":{\"additional_info\":\"\",\"app_directory_url\":\"https://myteam.enterprise.slack.com/apps/A0W7UKG8E-my-test-app\",\"app_homepage_url\":\"https://www.slack.com\",\"description\":\"test app\",\"help_url\":\"https://www.slack.com\",\"icons\":{\"image_1024\":\"https://3026743124446w96_2bd4ea1ad1f89a23c242_1024.png\",\"image_128\":\"https://30267341249446w6_2bd4ea1ad1f89a23c242_128.png\",\"image_192\":\"https://30267431249446w6_2bd4ea1ad1f89a23c242_192.png\",\"image_32\":\"https://302674312496446w_2bd4ea1ad1f89a23c242_32.png\",\"image_36\":\"https://302674312496446w_2bd4ea1ad1f89a23c242_36.png\",\"image_48\":\"https://302674312496446w_2bd4ea1ad1f89a23c242_48.png\",\"image_512\":\"https://30267431249446w6_2bd4ea1ad1f89a23c242_512.png\",\"image_64\":\"https://302674312496446w_2bd4ea1ad1f89a23c242_64.png\",\"image_72\":\"https://302674312496446w_2bd4ea1ad1f89a23c242_72.png\",\"image_96\":\"https://302674312496446w_2bd4ea1ad1f89a23c242_96.png\",\"image_original\":\"https://302674446w12496_2bd4ea1ad1f89a23c242_original.png\"},\"id\":\"A0W7UKG8E\",\"is_app_directory_approved\":false,\"is_internal\":false,\"name\":\"My Test App\",\"privacy_policy_url\":\"https://www.slack.com\"},\"date_updated\":1574296707,\"last_resolved_by\":{\"actor_id\":\"W0G82F4FD\",\"actor_type\":\"user\"},\"scopes\":[{\"description\":\"Add the ability for people to direct message or mention @my_test_app\",\"is_sensitive\":true,\"name\":\"bot\",\"token_type\":\"bot\"}]}],\"ok\":true,\"response_metadata\":{\"next_cursor\":\"\"}}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default success template\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default error template\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"admin.apps:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/admin.apps.approved.list","segments":[{"lit":"admin.apps.approved.list"}],"select":{"exist":["cursor","enterprise_id","limit","team_id","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"adminappsapproved","name__orig":"adminappsapproved","Name":"Adminappsapproved","name_":"adminappsapproved","name-":"adminappsapproved","NAME":"ADMINAPPSAPPROVED","index$":1}, {"active":true,"entity":"adminappsapproved","key$":"BasicAdminappsapprovedFlow","kind":"basic","name":"BasicAdminappsapprovedFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"adminappsapproved_ref01","srcdatavar":"adminappsapproved_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-adminappsapproved_ref01"}}],"index$":0}]}, 'Adminappsapproved')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let adminappsapproved_ref01_data = Object.values(setup.data.existing.adminappsapproved)[0]

    // LOAD
    const adminappsapproved_ref01_ent = client.Adminappsapproved()
    const adminappsapproved_ref01_match_dt0 = {}
    const adminappsapproved_ref01_data_dt0 = (await adminappsapproved_ref01_ent.load(adminappsapproved_ref01_match_dt0)).data()
    assert(null != adminappsapproved_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/adminappsapproved/AdminappsapprovedTestData.json')

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
    ['adminappsapproved01','adminappsapproved02','adminappsapproved03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_ADMINAPPSAPPROVED_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_ADMINAPPSAPPROVED_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_ADMINAPPSAPPROVED_ENTID']
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
  
