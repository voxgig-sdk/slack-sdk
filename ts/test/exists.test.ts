
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SlackSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SlackSDK.test()
    equal(null !== testsdk, true)
  })

})
