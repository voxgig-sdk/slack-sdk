
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


describe('AdminappsrequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Adminappsrequest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":0}],"name":"adminappsrequest","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /admin.apps.requests.list","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"admin_apps_requests_list\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `admin.apps:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"The maximum number of items to return. Must be between 1 - 1000 both inclusive.\",\"in\":\"query\",\"name\":\"limit\",\"type\":\"integer\"},{\"description\":\"Set `cursor` to `next_cursor` returned by the previous call to list items in the next page\",\"in\":\"query\",\"name\":\"cursor\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"team_id\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"app_requests\":[{\"app\":{\"additional_info\":\"\",\"app_directory_url\":\"https://acmecorp.slack.com/apps/A061BL8RQ0-test-app\",\"app_homepage_url\":\"\",\"description\":\"\",\"help_url\":\"\",\"icons\":{\"image_1024\":\"/cdn/15258203/img/testapp/service_1024.png\",\"image_128\":\"/cdn/157258203/img/testapp/service_128.png\",\"image_192\":\"/cdn/157258203/img/testapp/service_192.png\",\"image_32\":\"/cdn/157658203/img/testapp/service_32.png\",\"image_36\":\"/cdn/157658203/img/testapp/service_36.png\",\"image_48\":\"/cdn/157658203/img/testapp/service_48.png\",\"image_512\":\"/cdn/15758203/img/testapp/service_512.png\",\"image_64\":\"/cdn/157658203/img/testapp/service_64.png\",\"image_72\":\"/cdn/157658203/img/testapp/service_72.png\",\"image_96\":\"/cdn/157658203/img/testapp/service_96.png\"},\"id\":\"A061BL8RQ0\",\"is_app_directory_approved\":true,\"is_internal\":false,\"name\":\"Test App\",\"privacy_policy_url\":\"https://testapp.com/privacy\"},\"date_created\":1578956327,\"id\":\"Ar0XJGFLMLS\",\"message\":\"test test again\",\"previous_resolution\":null,\"scopes\":[{\"description\":\"Post messages to specific channels in Slack\",\"is_sensitive\":false,\"name\":\"incoming-webhook\",\"token_type\":\"user\"}],\"team\":{\"domain\":\"acmecorp\",\"id\":\"T0M94LNUCR\",\"name\":\"Acme Corp\"},\"user\":{\"email\":\"janedoe@example.com\",\"id\":\"W08RA9G5HR\",\"name\":\"Jane Doe\"}}],\"ok\":true,\"response_metadata\":{\"next_cursor\":\"\"}}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default success template\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"missing_scope\",\"needed\":\"admin.apps:read\",\"ok\":false,\"provided\":\"read,client,admin,identify,post,apps\"}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default error template\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"admin.apps:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/admin.apps.requests.list","segments":[{"lit":"admin.apps.requests.list"}],"select":{"exist":["cursor","limit","team_id","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"adminappsrequest","name__orig":"adminappsrequest","Name":"Adminappsrequest","name_":"adminappsrequest","name-":"adminappsrequest","NAME":"ADMINAPPSREQUEST","index$":2}, {"active":true,"entity":"adminappsrequest","key$":"BasicAdminappsrequestFlow","kind":"basic","name":"BasicAdminappsrequestFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"adminappsrequest_ref01","srcdatavar":"adminappsrequest_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-adminappsrequest_ref01"}}],"index$":0}]}, 'Adminappsrequest')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let adminappsrequest_ref01_data = Object.values(setup.data.existing.adminappsrequest)[0]

    // LOAD
    const adminappsrequest_ref01_ent = client.Adminappsrequest()
    const adminappsrequest_ref01_match_dt0 = {}
    const adminappsrequest_ref01_data_dt0 = (await adminappsrequest_ref01_ent.load(adminappsrequest_ref01_match_dt0)).data()
    assert(null != adminappsrequest_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/adminappsrequest/AdminappsrequestTestData.json')

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
    ['adminappsrequest01','adminappsrequest02','adminappsrequest03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_ADMINAPPSREQUEST_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_ADMINAPPSREQUEST_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_ADMINAPPSREQUEST_ENTID']
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
  
