

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


describe('AppspermissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Appspermission()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SLACK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'appspermission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"app_home","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"channel","req":true,"type":"`$OBJECT`","index$":1},{"active":true,"name":"group","req":true,"type":"`$OBJECT`","index$":2},{"active":true,"name":"im","req":true,"type":"`$OBJECT`","index$":3},{"active":true,"name":"mpim","req":true,"type":"`$OBJECT`","index$":4},{"active":true,"name":"ok","req":true,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"team","req":true,"type":"`$OBJECT`","index$":6}],"name":"appspermission","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"scope","orig":"scope","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"trigger_id","orig":"trigger_id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /apps.permissions.request","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"apps_permissions_request\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"A comma separated list of scopes to request for\",\"in\":\"query\",\"name\":\"scopes\",\"required\":true,\"type\":\"string\"},{\"description\":\"Token used to trigger the permissions API\",\"in\":\"query\",\"name\":\"trigger_id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Standard success response when used with a user token\",\"examples\":{\"application/json\":{\"ok\":true}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from apps.permissions.request method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"apps.permissions.request schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Standard failure response when trigger_id is invalid\",\"examples\":{\"application/json\":{\"error\":\"invalid_trigger_id\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from apps.permissions.request method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"invalid_trigger\",\"trigger_exchanged\",\"invalid_scope\",\"invalid_user\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"user_is_bot\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"apps.permissions.request error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/apps.permissions.request","segments":[{"lit":"apps.permissions.request"}],"select":{"exist":["scope","token","trigger_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"token","orig":"token","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /apps.permissions.info","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"apps_permissions_info\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"query\",\"name\":\"token\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Standard success response when used with a user token\",\"examples\":{\"application/json\":{\"info\":{\"app_home\":{\"resources\":{\"ids\":[\"D0C0NU1Q8\",\"D0BH95DLH\"]},\"scopes\":[\"chat:write\",\"im:history\",\"im:read\"]},\"channel\":{\"resources\":{\"excluded_ids\":[],\"ids\":[\"C061FA5PB\"],\"wildcard\":false},\"scopes\":[\"channels:read\"]},\"group\":{\"resources\":{\"ids\":[]},\"scopes\":[]},\"im\":{\"resources\":{\"ids\":[]},\"scopes\":[]},\"mpim\":{\"resources\":{\"ids\":[]},\"scopes\":[]},\"team\":{\"resources\":{\"ids\":[]},\"scopes\":[]}},\"ok\":true}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from apps.permissions.info method\",\"properties\":{\"info\":{\"properties\":{\"app_home\":{\"properties\":{\"resources\":{\"additionalProperties\":false,\"properties\":{\"excluded_ids\":{\"items\":{\"items\":[{\"pattern\":\"^[CGD][A-Z0-9]{8,}$\",\"title\":\"Channel-like conversation ID\",\"type\":\"string\"},{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"}]},\"type\":\"array\"},\"ids\":{\"items\":{\"items\":[{\"pattern\":\"^[CGD][A-Z0-9]{8,}$\",\"title\":\"Channel-like conversation ID\",\"type\":\"string\"},{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"}]},\"type\":\"array\"},\"wildcard\":{\"type\":\"boolean\"}},\"required\":[\"ids\"],\"title\":\"resources in info from apps.permissions.info\",\"type\":\"object\"},\"scopes\":{\"items\":{\"title\":\"Named OAuth scopes\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"channel\":{\"properties\":{\"resources\":{\"additionalProperties\":false,\"properties\":{\"excluded_ids\":{\"items\":{\"items\":[{\"pattern\":\"^[CGD][A-Z0-9]{8,}$\",\"title\":\"Channel-like conversation ID\",\"type\":\"string\"},{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"}]},\"type\":\"array\"},\"ids\":{\"items\":{\"items\":[{\"pattern\":\"^[CGD][A-Z0-9]{8,}$\",\"title\":\"Channel-like conversation ID\",\"type\":\"string\"},{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"}]},\"type\":\"array\"},\"wildcard\":{\"type\":\"boolean\"}},\"required\":[\"ids\"],\"title\":\"resources in info from apps.permissions.info\",\"type\":\"object\"},\"scopes\":{\"items\":{\"title\":\"Named OAuth scopes\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"group\":{\"properties\":{\"resources\":{\"additionalProperties\":false,\"properties\":{\"excluded_ids\":{\"items\":{\"items\":[{\"pattern\":\"^[CGD][A-Z0-9]{8,}$\",\"title\":\"Channel-like conversation ID\",\"type\":\"string\"},{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"}]},\"type\":\"array\"},\"ids\":{\"items\":{\"items\":[{\"pattern\":\"^[CGD][A-Z0-9]{8,}$\",\"title\":\"Channel-like conversation ID\",\"type\":\"string\"},{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"}]},\"type\":\"array\"},\"wildcard\":{\"type\":\"boolean\"}},\"required\":[\"ids\"],\"title\":\"resources in info from apps.permissions.info\",\"type\":\"object\"},\"scopes\":{\"items\":{\"title\":\"Named OAuth scopes\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"im\":{\"properties\":{\"resources\":{\"additionalProperties\":false,\"properties\":{\"excluded_ids\":{\"items\":{\"items\":[{\"$ref\":\"#/responses/200/schema/properties/info/properties/group/properties/resources/properties/excluded_ids/items/items/0\"},{\"$ref\":\"#/responses/200/schema/properties/info/properties/group/properties/resources/properties/excluded_ids/items/items/1\"}]},\"type\":\"array\"},\"ids\":{\"items\":{\"items\":[{\"$ref\":\"#/responses/200/schema/properties/info/properties/group/properties/resources/properties/ids/items/items/0\"},{\"$ref\":\"#/responses/200/schema/properties/info/properties/group/properties/resources/properties/ids/items/items/1\"}]},\"type\":\"array\"},\"wildcard\":{\"type\":\"boolean\"}},\"required\":[\"ids\"],\"title\":\"resources in info from apps.permissions.info\",\"type\":\"object\"},\"scopes\":{\"items\":{\"title\":\"Named OAuth scopes\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"mpim\":{\"properties\":{\"resources\":{\"additionalProperties\":false,\"properties\":{\"excluded_ids\":{\"items\":{\"items\":{\"$ref\":\"#/responses/200/schema/properties/info/properties/im/properties/resources/properties/excluded_ids/items/items\"}},\"type\":\"array\"},\"ids\":{\"items\":{\"items\":{\"$ref\":\"#/responses/200/schema/properties/info/properties/im/properties/resources/properties/ids/items/items\"}},\"type\":\"array\"},\"wildcard\":{\"type\":\"boolean\"}},\"required\":[\"ids\"],\"title\":\"resources in info from apps.permissions.info\",\"type\":\"object\"},\"scopes\":{\"items\":{\"title\":\"Named OAuth scopes\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"team\":{\"properties\":{\"resources\":{\"additionalProperties\":false,\"properties\":{\"excluded_ids\":{\"items\":{\"$ref\":\"#/responses/200/schema/properties/info/properties/mpim/properties/resources/properties/excluded_ids/items\"},\"type\":\"array\"},\"ids\":{\"items\":{\"$ref\":\"#/responses/200/schema/properties/info/properties/mpim/properties/resources/properties/ids/items\"},\"type\":\"array\"},\"wildcard\":{\"type\":\"boolean\"}},\"required\":[\"ids\"],\"title\":\"resources in info from apps.permissions.info\",\"type\":\"object\"},\"scopes\":{\"items\":{\"title\":\"Named OAuth scopes\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"scopes\",\"resources\"],\"type\":\"object\"}},\"required\":[\"team\",\"channel\",\"group\",\"mpim\",\"im\",\"app_home\"],\"type\":\"object\"},\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"info\"],\"title\":\"apps.permissions.info schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Standard failure response when used with an invalid token\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from apps.permissions.info method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"user_is_bot\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"apps.permissions.info error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/apps.permissions.info","segments":[{"lit":"apps.permissions.info"}],"select":{"exist":["token"]},"transform":{"req":"`reqdata`","res":"`body.info`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"appspermission","name__orig":"appspermission","Name":"Appspermission","name_":"appspermission","name-":"appspermission","NAME":"APPSPERMISSION","index$":21}, {"active":true,"entity":"appspermission","key$":"BasicAppspermissionFlow","kind":"basic","name":"BasicAppspermissionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"appspermission_ref01","srcdatavar":"appspermission_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-appspermission_ref01"}}],"index$":0}]}, 'Appspermission')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let appspermission_ref01_data = Object.values(setup.data.existing.appspermission)[0] as any

    // LOAD
    const appspermission_ref01_ent = client.Appspermission()
    const appspermission_ref01_match_dt0: any = {}
    const appspermission_ref01_data_dt0 = (await appspermission_ref01_ent.load(appspermission_ref01_match_dt0)).data()
    assert(null != appspermission_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/appspermission/AppspermissionTestData.json')

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
    ['appspermission01','appspermission02','appspermission03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_APPSPERMISSION_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_APPSPERMISSION_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_APPSPERMISSION_ENTID']
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
  
