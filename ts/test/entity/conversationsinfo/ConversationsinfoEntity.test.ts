

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SlackSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ConversationsinfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Conversationsinfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SLACK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversationsinfo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"is_archived","req":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"is_channel","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"is_private","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"num_members","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"purpose","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"topic","req":false,"type":"`$OBJECT`","index$":8}],"id":{"field":"id","name":"id"},"name":"conversationsinfo","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"channel","orig":"channel","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /conversations.info","json":"{\"operationId\":\"getChannel\",\"parameters\":[{\"in\":\"query\",\"name\":\"channel\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"channel\":{\"properties\":{\"created\":{\"type\":\"integer\"},\"id\":{\"type\":\"string\"},\"is_archived\":{\"type\":\"boolean\"},\"is_channel\":{\"type\":\"boolean\"},\"is_private\":{\"type\":\"boolean\"},\"name\":{\"type\":\"string\"},\"num_members\":{\"type\":\"integer\"},\"purpose\":{\"type\":\"object\"},\"topic\":{\"type\":\"object\"}},\"type\":\"object\"},\"ok\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"The requested channel\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/conversations.info","segments":[{"lit":"conversations.info"}],"select":{"exist":["channel"]},"transform":{"req":"`reqdata`","res":"`body.channel`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"conversationsinfo","name__orig":"conversationsinfo","Name":"Conversationsinfo","name_":"conversationsinfo","name-":"conversationsinfo","NAME":"CONVERSATIONSINFO","index$":0}, {"active":true,"entity":"conversationsinfo","key$":"BasicConversationsinfoFlow","kind":"basic","name":"BasicConversationsinfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"conversationsinfo_ref01","srcdatavar":"conversationsinfo_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-conversationsinfo_ref01"}}],"index$":0}]}, 'Conversationsinfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversationsinfo_ref01_data = Object.values(setup.data.existing.conversationsinfo)[0] as any

    // LOAD
    const conversationsinfo_ref01_ent = client.Conversationsinfo()
    const conversationsinfo_ref01_match_dt0: any = {}
    conversationsinfo_ref01_match_dt0.id = conversationsinfo_ref01_data.id
    const conversationsinfo_ref01_data_dt0 = (await conversationsinfo_ref01_ent.load(conversationsinfo_ref01_match_dt0)).data()
    assert(conversationsinfo_ref01_data_dt0.id === conversationsinfo_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conversationsinfo/ConversationsinfoTestData.json')

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
    ['conversationsinfo01','conversationsinfo02','conversationsinfo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_CONVERSATIONSINFO_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_CONVERSATIONSINFO_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_CONVERSATIONSINFO_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
