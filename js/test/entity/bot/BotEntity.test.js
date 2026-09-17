
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


describe('BotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Bot()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app_id","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"deleted","req":true,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"icons","req":true,"type":"`$OBJECT`","index$":2},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"updated","req":true,"type":"`$INTEGER`","index$":5},{"active":true,"name":"user_id","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"bot","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"bot","orig":"bot","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /bots.info","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"bots_info\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `users:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Bot user to get info on\",\"in\":\"query\",\"name\":\"bot\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"When successful, returns bot info by bot ID.\",\"examples\":{\"application/json\":{\"bot\":{\"app_id\":\"A161CLERW\",\"deleted\":false,\"icons\":{\"image_36\":\"https://...\",\"image_48\":\"https://...\",\"image_72\":\"https://...\"},\"id\":\"B061F7JD2\",\"name\":\"beforebot\",\"updated\":1449272004,\"user_id\":\"U012ABCDEF\"},\"ok\":true}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from bots.info method\",\"properties\":{\"bot\":{\"additionalProperties\":false,\"properties\":{\"app_id\":{\"pattern\":\"^A[A-Z0-9]{1,}$\",\"title\":\"App ID\",\"type\":\"string\"},\"deleted\":{\"type\":\"boolean\"},\"icons\":{\"additionalProperties\":false,\"properties\":{\"image_36\":{\"format\":\"uri\",\"type\":\"string\"},\"image_48\":{\"format\":\"uri\",\"type\":\"string\"},\"image_72\":{\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"image_36\",\"image_48\",\"image_72\"],\"type\":\"object\"},\"id\":{\"pattern\":\"^B[A-Z0-9]{8,}$\",\"title\":\"Bot User ID\",\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"updated\":{\"type\":\"integer\"},\"user_id\":{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"}},\"required\":[\"id\",\"deleted\",\"name\",\"updated\",\"app_id\",\"icons\"],\"type\":\"object\"},\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"bot\"],\"title\":\"bots.info schema\",\"type\":\"object\"}},\"default\":{\"description\":\"When no bot can be found, it returns an error.\",\"examples\":{\"application/json\":{\"error\":\"bot_not_found\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from bots.info method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"bot_not_found\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"bots.info error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"users:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/bots.info","segments":[{"lit":"bots.info"}],"select":{"exist":["bot","token"]},"transform":{"req":"`reqdata`","res":"`body.bot`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"bot","name__orig":"bot","Name":"Bot","name_":"bot","name-":"bot","NAME":"BOT","index$":26}, {"active":true,"entity":"bot","key$":"BasicBotFlow","kind":"basic","name":"BasicBotFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"bot_ref01","srcdatavar":"bot_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bot_ref01"}}],"index$":0}]}, 'Bot')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bot_ref01_data = Object.values(setup.data.existing.bot)[0]

    // LOAD
    const bot_ref01_ent = client.Bot()
    const bot_ref01_match_dt0 = {}
    bot_ref01_match_dt0.id = bot_ref01_data.id
    const bot_ref01_data_dt0 = (await bot_ref01_ent.load(bot_ref01_match_dt0)).data()
    assert(bot_ref01_data_dt0.id === bot_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/bot/BotTestData.json')

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
    ['bot01','bot02','bot03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_BOT_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_BOT_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_BOT_ENTID']
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
  
