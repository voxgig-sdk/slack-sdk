
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


describe('ConversationslistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Conversationslist()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"is_archived","req":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"is_channel","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"is_private","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"num_members","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"purpose","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"topic","req":false,"type":"`$OBJECT`","index$":8}],"id":{"field":"id","name":"id"},"name":"conversationslist","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /conversations.list","json":"{\"operationId\":\"listChannels\",\"parameters\":[{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"channels\":{\"items\":{\"properties\":{\"created\":{\"type\":\"integer\"},\"id\":{\"type\":\"string\"},\"is_archived\":{\"type\":\"boolean\"},\"is_channel\":{\"type\":\"boolean\"},\"is_private\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"num_members\":{\"type\":\"integer\"},\"purpose\":{\"type\":\"object\"},\"topic\":{\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"ok\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Channels\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations.list","segments":[{"lit":"conversations.list"}],"select":{"exist":["cursor","limit"]},"transform":{"req":"`reqdata`","res":"`body.channels`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"conversationslist","name__orig":"conversationslist","Name":"Conversationslist","name_":"conversationslist","name-":"conversationslist","NAME":"CONVERSATIONSLIST","index$":1}, {"active":true,"entity":"conversationslist","key$":"BasicConversationslistFlow","kind":"basic","name":"BasicConversationslistFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"conversationslist_ref01"}}],"index$":0}]}, 'Conversationslist')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversationslist_ref01_data = Object.values(setup.data.existing.conversationslist)[0]

    // LIST
    const conversationslist_ref01_ent = client.Conversationslist()
    const conversationslist_ref01_match = {}

    const conversationslist_ref01_list = (await conversationslist_ref01_ent.list(conversationslist_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conversationslist/ConversationslistTestData.json')

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
    ['conversationslist01','conversationslist02','conversationslist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_CONVERSATIONSLIST_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_CONVERSATIONSLIST_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_CONVERSATIONSLIST_ENTID']
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
  
