

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


describe('TeamprofileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Teamprofile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SLACK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teamprofile.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"fields","req":true,"type":"`$ARRAY`","index$":0}],"name":"teamprofile","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"token","orig":"token","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"visibility","orig":"visibility","reqd":false,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /team.profile.get","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"team_profile_get\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `users.profile:read`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Filter by visibility.\",\"in\":\"query\",\"name\":\"visibility\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"profile\":{\"fields\":[{\"hint\":\"Enter the extension to reach your desk\",\"id\":\"Xf06054AAA\",\"is_hidden\":1,\"label\":\"Phone extension\",\"options\":null,\"ordering\":0,\"possible_values\":null,\"type\":\"text\"},{\"hint\":\"When you were born\",\"id\":\"Xf06054BBB\",\"label\":\"Date of birth\",\"options\":null,\"ordering\":1,\"possible_values\":null,\"type\":\"date\"},{\"hint\":\"Enter a link to your Facebook profile\",\"id\":\"Xf06054CCC\",\"label\":\"Facebook\",\"options\":null,\"ordering\":2,\"possible_values\":null,\"type\":\"link\"},{\"hint\":\"Hogwarts, obviously\",\"id\":\"Xf06054DDD\",\"label\":\"House\",\"options\":null,\"ordering\":3,\"possible_values\":[\"Gryffindor\",\"Hufflepuff\",\"Ravenclaw\",\"Slytherin\"],\"type\":\"options_list\"},{\"hint\":\"Office location (LDAP)\",\"id\":\"Xf06054EEE\",\"label\":\"Location\",\"options\":{\"is_protected\":1},\"ordering\":4,\"possible_values\":null,\"type\":\"text\"},{\"hint\":\"The boss\",\"id\":\"Xf06054FFF\",\"label\":\"Manager\",\"options\":null,\"ordering\":5,\"possible_values\":null,\"type\":\"user\"}]}}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from team.profile.get method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"profile\":{\"additionalProperties\":false,\"properties\":{\"fields\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"field_name\":{\"type\":[\"null\",\"string\"]},\"hint\":{\"type\":\"string\"},\"id\":{\"pattern\":\"^X[a-zA-Z0-9]{9,}$\",\"type\":\"string\"},\"is_hidden\":{\"type\":\"boolean\"},\"label\":{\"type\":\"string\"},\"options\":{\"items\":[{\"type\":\"null\"},{\"additionalProperties\":false,\"properties\":{\"is_custom\":{\"type\":[\"null\",\"boolean\"]},\"is_multiple_entry\":{\"type\":[\"null\",\"boolean\"]},\"is_protected\":{\"type\":[\"null\",\"boolean\"]},\"is_scim\":{\"type\":[\"null\",\"boolean\"]}},\"type\":\"object\"}]},\"ordering\":{\"type\":\"number\"},\"possible_values\":{\"items\":{\"type\":\"string\"},\"type\":[\"null\",\"array\"]},\"type\":{\"enum\":[\"text\",\"date\",\"link\",\"mailto\",\"options_list\",\"user\"],\"type\":\"string\"}},\"required\":[\"id\",\"ordering\",\"label\",\"hint\",\"type\"],\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"fields\"],\"type\":\"object\"}},\"required\":[\"ok\",\"profile\"],\"title\":\"team.profile.get success schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from team.profile.get method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"not_authed\",\"invalid_auth\",\"account_inactive\",\"no_permission\",\"user_is_bot\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_typ\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeou\",\"upgrade_required\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"team.profile.get error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"users.profile:read\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/team.profile.get","segments":[{"lit":"team.profile.get"}],"select":{"exist":["token","visibility"]},"transform":{"req":"`reqdata`","res":"`body.profile`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"teamprofile","name__orig":"teamprofile","Name":"Teamprofile","name_":"teamprofile","name-":"teamprofile","NAME":"TEAMPROFILE","index$":48}, {"active":true,"entity":"teamprofile","key$":"BasicTeamprofileFlow","kind":"basic","name":"BasicTeamprofileFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"teamprofile_ref01","srcdatavar":"teamprofile_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teamprofile_ref01"}}],"index$":0}]}, 'Teamprofile')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let teamprofile_ref01_data = Object.values(setup.data.existing.teamprofile)[0] as any

    // LOAD
    const teamprofile_ref01_ent = client.Teamprofile()
    const teamprofile_ref01_match_dt0: any = {}
    const teamprofile_ref01_data_dt0 = (await teamprofile_ref01_ent.load(teamprofile_ref01_match_dt0)).data()
    assert(null != teamprofile_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teamprofile/TeamprofileTestData.json')

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
    ['teamprofile01','teamprofile02','teamprofile03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_TEAMPROFILE_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_TEAMPROFILE_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_TEAMPROFILE_ENTID']
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
  
