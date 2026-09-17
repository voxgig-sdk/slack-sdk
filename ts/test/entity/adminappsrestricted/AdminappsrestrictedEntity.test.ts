

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


describe('AdminappsrestrictedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Adminappsrestricted()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SLACK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'adminappsrestricted.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":0}],"name":"adminappsrestricted","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"enterprise_id","orig":"enterprise_id","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"team_id","orig":"team_id","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /admin.apps.restricted.list","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"admin_apps_restricted_list\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `admin.apps:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"The maximum number of items to return. Must be between 1 - 1000 both inclusive.\",\"in\":\"query\",\"name\":\"limit\",\"type\":\"integer\"},{\"description\":\"Set `cursor` to `next_cursor` returned by the previous call to list items in the next page\",\"in\":\"query\",\"name\":\"cursor\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"team_id\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"enterprise_id\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"response_metadata\":{\"next_cursor\":\"\"},\"restricted_apps\":[{\"app\":{\"additional_info\":\"\",\"app_directory_url\":\"https://myteam.enterprise.slack.com/apps/A0FDLP8M2L-my-test-app\",\"app_homepage_url\":\"https://example.com\",\"description\":\"A fun test app for Slack\",\"help_url\":\"https://example.com\",\"icons\":{\"image_1024\":\"https://1433265338rl878408_eb57dbc818daa4ba15d6_1024.png\",\"image_128\":\"https://4332653438rl87808_eb57dbc818daa4ba15d6_128.png\",\"image_192\":\"https://4332653438rl87808_eb57dbc818daa4ba15d6_192.png\",\"image_32\":\"https://143326534038rl8788_eb57dbc818daa4ba15d6_32.png\",\"image_36\":\"https://143326534038rl8788_eb57dbc818daa4ba15d6_36.png\",\"image_48\":\"https://143326534038rl8788_eb57dbc818daa4ba15d6_48.png\",\"image_512\":\"https://4332653438rl87808_eb57dbc818daa4ba15d6_512.png\",\"image_64\":\"https://143326534038rl8788_eb57dbc818daa4ba15d6_64.png\",\"image_72\":\"https://143326534038rl8788_eb57dbc818daa4ba15d6_72.png\",\"image_96\":\"https://143326534038rl8788_eb57dbc818daa4ba15d6_96.png\",\"image_original\":\"https://143338rl8782653408_eb57dbc818daa4ba15d6_original.png\"},\"id\":\"A0FDLP8M2L\",\"is_app_directory_approved\":true,\"is_internal\":false,\"name\":\"My Test App\",\"privacy_policy_url\":\"https://example.com\"},\"date_updated\":1574296721,\"last_resolved_by\":{\"actor_id\":\"W0G82LMFD\",\"actor_type\":\"user\"},\"scopes\":[{\"description\":\"Upload, edit, and delete files on the user‟s behalf\",\"is_sensitive\":true,\"name\":\"files:write:user\",\"token_type\":\"user\"}]}]}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default success template\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":true,\"description\":\"This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.\",\"properties\":{\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"Default error template\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"admin.apps:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/admin.apps.restricted.list","segments":[{"lit":"admin.apps.restricted.list"}],"select":{"exist":["cursor","enterprise_id","limit","team_id","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"adminappsrestricted","name__orig":"adminappsrestricted","Name":"Adminappsrestricted","name_":"adminappsrestricted","name-":"adminappsrestricted","NAME":"ADMINAPPSRESTRICTED","index$":3}, {"active":true,"entity":"adminappsrestricted","key$":"BasicAdminappsrestrictedFlow","kind":"basic","name":"BasicAdminappsrestrictedFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"adminappsrestricted_ref01","srcdatavar":"adminappsrestricted_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-adminappsrestricted_ref01"}}],"index$":0}]}, 'Adminappsrestricted')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let adminappsrestricted_ref01_data = Object.values(setup.data.existing.adminappsrestricted)[0] as any

    // LOAD
    const adminappsrestricted_ref01_ent = client.Adminappsrestricted()
    const adminappsrestricted_ref01_match_dt0: any = {}
    const adminappsrestricted_ref01_data_dt0 = (await adminappsrestricted_ref01_ent.load(adminappsrestricted_ref01_match_dt0)).data()
    assert(null != adminappsrestricted_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/adminappsrestricted/AdminappsrestrictedTestData.json')

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
    ['adminappsrestricted01','adminappsrestricted02','adminappsrestricted03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_ADMINAPPSRESTRICTED_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_ADMINAPPSRESTRICTED_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_ADMINAPPSRESTRICTED_ENTID']
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
  
