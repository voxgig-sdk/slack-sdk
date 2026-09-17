
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


describe('Oauthv2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Oauthv2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":0}],"name":"oauthv2","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"client_id","orig":"client_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"client_secret","orig":"client_secret","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"code","orig":"code","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"redirect_uri","orig":"redirect_uri","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /oauth.v2.access","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"oauth_v2_access\",\"parameters\":[{\"description\":\"Issued when you created your application.\",\"in\":\"query\",\"name\":\"client_id\",\"type\":\"string\"},{\"description\":\"Issued when you created your application.\",\"in\":\"query\",\"name\":\"client_secret\",\"type\":\"string\"},{\"description\":\"The `code` param returned via the OAuth callback.\",\"in\":\"query\",\"name\":\"code\",\"required\":true,\"type\":\"string\"},{\"description\":\"This must match the originally submitted URI (if one was sent).\",\"in\":\"query\",\"name\":\"redirect_uri\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Successful token request with scopes for both a bot user and a user token\",\"examples\":{\"application/json\":{\"access_token\":\"xoxb-XXXXXXXXXXX-XXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX\",\"app_id\":\"A0KRD7HC3\",\"authed_user\":{\"access_token\":\"xoxp-1234\",\"id\":\"U1234\",\"scope\":\"chat:write\",\"token_type\":\"user\"},\"bot_user_id\":\"U0KRQLJ9H\",\"enterprise\":{\"id\":\"E12345678\",\"name\":\"slack-sports\"},\"ok\":true,\"scope\":\"commands,incoming-webhook\",\"team\":{\"id\":\"T9TK3CUKW\",\"name\":\"Slack Softball Team\"},\"token_type\":\"bot\"}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default success template\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_client_id\",\"ok\":false}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default error template\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/oauth.v2.access","segments":[{"lit":"oauth.v2.access"}],"select":{"exist":["client_id","client_secret","code","redirect_uri"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"oauthv2","name__orig":"oauthv2","Name":"Oauthv2","name_":"oauthv2","name-":"oauthv2","NAME":"OAUTHV2","index$":40}, {"active":true,"entity":"oauthv2","key$":"BasicOauthv2Flow","kind":"basic","name":"BasicOauthv2Flow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"oauthv2_ref01","srcdatavar":"oauthv2_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-oauthv2_ref01"}}],"index$":0}]}, 'Oauthv2')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let oauthv2_ref01_data = Object.values(setup.data.existing.oauthv2)[0]

    // LOAD
    const oauthv2_ref01_ent = client.Oauthv2()
    const oauthv2_ref01_match_dt0 = {}
    const oauthv2_ref01_data_dt0 = (await oauthv2_ref01_ent.load(oauthv2_ref01_match_dt0)).data()
    assert(null != oauthv2_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/oauthv2/Oauthv2TestData.json')

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
    ['oauthv201','oauthv202','oauthv203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_OAUTHV2_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_OAUTHV2_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_OAUTHV2_ENTID']
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
  
