# Slack SDK exists test

import pytest
from slack_sdk import SlackSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SlackSDK.test(None, None)
        assert testsdk is not None
