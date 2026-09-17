
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


describe('AppspermissionsuserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Appspermissionsuser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":0}],"name":"appspermissionsuser","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"scope","orig":"scope","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"trigger_id","orig":"trigger_id","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"user","orig":"user","reqd":true,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /apps.permissions.users.request","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"apps_permissions_users_request\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"A comma separated list of user scopes to request for\",\"in\":\"query\",\"name\":\"scopes\",\"required\":true,\"type\":\"string\"},{\"description\":\"Token used to trigger the request\",\"in\":\"query\",\"name\":\"trigger_id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The user this scope is being requested for\",\"in\":\"query\",\"name\":\"user\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Standard success response when used with a user token\",\"examples\":{\"application/json\":{\"ok\":true}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default success template\",\"type\":\"object\"}},\"default\":{\"description\":\"Standard failure response when trigger_id is invalid\",\"examples\":{\"application/json\":{\"error\":\"invalid_trigger_id\",\"ok\":false}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default error template\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/apps.permissions.users.request","segments":[{"lit":"apps.permissions.users.request"}],"select":{"exist":["scope","token","trigger_id","user"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /apps.permissions.users.list","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"apps_permissions_users_list\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \\\"page\\\" of the collection. See [pagination](/docs/pagination) for more detail.\",\"in\":\"query\",\"name\":\"cursor\",\"type\":\"string\"},{\"description\":\"The maximum number of items to return.\",\"in\":\"query\",\"name\":\"limit\",\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical successful paginated response\",\"examples\":{\"application/json\":{\"ok\":true,\"resources\":[{\"id\":\"U0DES3UAN\",\"scopes\":[\"dnd:write:user\",\"reminders:write:user\"]},{\"id\":\"U024BFF1M\",\"scopes\":[\"reminders:write:user\"]}],\"response_metadata\":{\"next_cursor\":\"dGVhbTdPMUg5UkFTT0w=\"}}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default success template\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_cursor\",\"ok\":false}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default error template\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/apps.permissions.users.list","segments":[{"lit":"apps.permissions.users.list"}],"select":{"exist":["cursor","limit","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"appspermissionsuser","name__orig":"appspermissionsuser","Name":"Appspermissionsuser","name_":"appspermissionsuser","name-":"appspermissionsuser","NAME":"APPSPERMISSIONSUSER","index$":24}, {"active":true,"entity":"appspermissionsuser","key$":"BasicAppspermissionsuserFlow","kind":"basic","name":"BasicAppspermissionsuserFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"appspermissionsuser_ref01","srcdatavar":"appspermissionsuser_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-appspermissionsuser_ref01"}}],"index$":0}]}, 'Appspermissionsuser')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let appspermissionsuser_ref01_data = Object.values(setup.data.existing.appspermissionsuser)[0]

    // LOAD
    const appspermissionsuser_ref01_ent = client.Appspermissionsuser()
    const appspermissionsuser_ref01_match_dt0 = {}
    const appspermissionsuser_ref01_data_dt0 = (await appspermissionsuser_ref01_ent.load(appspermissionsuser_ref01_match_dt0)).data()
    assert(null != appspermissionsuser_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/appspermissionsuser/AppspermissionsuserTestData.json')

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
    ['appspermissionsuser01','appspermissionsuser02','appspermissionsuser03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_APPSPERMISSIONSUSER_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_APPSPERMISSIONSUSER_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_APPSPERMISSIONSUSER_ENTID']
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
  
