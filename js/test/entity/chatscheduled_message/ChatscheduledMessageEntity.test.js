
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


describe('ChatscheduledMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
  afterEach(liveDelay('SLACK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.ChatscheduledMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"channel_id","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"date_created","req":true,"type":"`$INTEGER`","index$":1},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"post_at","req":true,"type":"`$INTEGER`","index$":3},{"active":true,"name":"text","req":false,"type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"chatscheduled_message","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"token","orig":"token","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"channel","orig":"channel","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"latest","orig":"latest","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"oldest","orig":"oldest","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /chat.scheduledMessages.list","json":"{\"consumes\":[\"application/x-www-form-urlencoded\",\"application/json\"],\"operationId\":\"chat_scheduledMessages_list\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"header\",\"name\":\"token\",\"type\":\"string\"},{\"description\":\"The channel of the scheduled messages\",\"in\":\"query\",\"name\":\"channel\",\"type\":\"string\"},{\"description\":\"A UNIX timestamp of the latest value in the time range\",\"in\":\"query\",\"name\":\"latest\",\"type\":\"number\"},{\"description\":\"A UNIX timestamp of the oldest value in the time range\",\"in\":\"query\",\"name\":\"oldest\",\"type\":\"number\"},{\"description\":\"Maximum number of original entries to return.\",\"in\":\"query\",\"name\":\"limit\",\"type\":\"integer\"},{\"description\":\"For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.\",\"in\":\"query\",\"name\":\"cursor\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"response_metadata\":{\"next_cursor\":\"\"},\"scheduled_messages\":[{\"channel_id\":\"C1H9RESGL\",\"date_created\":1551891734,\"id\":1298393284,\"post_at\":1551991428,\"text\":\"Here's a message for you in the future\"}]}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from chat.scheduledMessages.list method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"response_metadata\":{\"additionalProperties\":false,\"properties\":{\"next_cursor\":{\"type\":\"string\"}},\"required\":[\"next_cursor\"],\"type\":\"object\"},\"scheduled_messages\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"channel_id\":{\"pattern\":\"^[C][A-Z0-9]{2,}$\",\"title\":\"Channel ID\",\"type\":\"string\"},\"date_created\":{\"pattern\":\"^\\\\d{10}$\",\"type\":\"integer\"},\"id\":{\"pattern\":\"^[Q][A-Z0-9]{8,}$\",\"type\":\"string\"},\"post_at\":{\"pattern\":\"^\\\\d{10}$\",\"type\":\"integer\"},\"text\":{\"type\":\"string\"}},\"required\":[\"id\",\"channel_id\",\"post_at\",\"date_created\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"ok\",\"scheduled_messages\",\"response_metadata\"],\"title\":\"chat.scheduledMessages.list schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response if the channel passed is invalid\",\"examples\":{\"application/json\":{\"error\":\"invalid_channel\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from chat.scheduledMessages.list method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"invalid_channel\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"ekm_access_denied\",\"missing_scope\",\"invalid_arguments\",\"invalid_arg_name\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"chat.scheduledMessages.list error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/chat.scheduledMessages.list","segments":[{"lit":"chat.scheduledMessages.list"}],"select":{"exist":["channel","cursor","latest","limit","oldest","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"chatscheduled_message","name__orig":"chatscheduled_message","Name":"ChatscheduledMessage","name_":"chatscheduled_message","name-":"chatscheduled-message","NAME":"CHATSCHEDULED_MESSAGE","index$":30}, {"active":true,"entity":"chatscheduled_message","key$":"BasicChatscheduledMessageFlow","kind":"basic","name":"BasicChatscheduledMessageFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"chatscheduled_message_ref01"}}],"index$":0}]}, 'ChatscheduledMessage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let chatscheduled_message_ref01_data = Object.values(setup.data.existing.chatscheduled_message)[0]

    // LIST
    const chatscheduled_message_ref01_ent = client.ChatscheduledMessage()
    const chatscheduled_message_ref01_match = {}

    const chatscheduled_message_ref01_list = (await chatscheduled_message_ref01_ent.list(chatscheduled_message_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/chatscheduled_message/ChatscheduledMessageTestData.json')

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
    ['chatscheduled_message01','chatscheduled_message02','chatscheduled_message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SLACK_TEST_CHATSCHEDULED_MESSAGE_ENTID': idmap,
    'SLACK_TEST_LIVE': 'FALSE',
    'SLACK_TEST_EXPLAIN': 'FALSE',
    'SLACK_APIKEY': '',
  })

  idmap = env['SLACK_TEST_CHATSCHEDULED_MESSAGE_ENTID']

  const live = 'TRUE' === env.SLACK_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SLACK_TEST_CHATSCHEDULED_MESSAGE_ENTID']
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
  
