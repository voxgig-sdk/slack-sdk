
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { SlackSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ConversationsinfoEntity', async () => {

  test('instance', async () => {
    const testsdk = SlackSDK.test()
    const ent = testsdk.Conversationsinfo()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conversationsinfo_ref01_data = Object.values(setup.data.existing.conversationsinfo)[0]

    // LOAD
    const conversationsinfo_ref01_ent = client.Conversationsinfo()
    const conversationsinfo_ref01_match_dt0 = {}
    conversationsinfo_ref01_match_dt0.id = conversationsinfo_ref01_data.id
    const conversationsinfo_ref01_data_dt0 = (await conversationsinfo_ref01_ent.load(conversationsinfo_ref01_match_dt0)).data()
    assert(conversationsinfo_ref01_data_dt0.id === conversationsinfo_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
    'SLACK_APIKEY': 'NONE',
  })

  idmap = env['SLACK_TEST_CONVERSATIONSINFO_ENTID']

  if ('TRUE' === env.SLACK_TEST_LIVE) {
    client = new SlackSDK(merge([
      {
        apikey: env.SLACK_APIKEY,
      },
      extra
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
    now: Date.now(),
  }

  return setup
}
  
