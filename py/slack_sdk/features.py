# Slack SDK feature factory

from slack_sdk.feature.base_feature import SlackBaseFeature
from slack_sdk.feature.debug_feature import SlackDebugFeature
from slack_sdk.feature.idempotency_feature import SlackIdempotencyFeature
from slack_sdk.feature.metrics_feature import SlackMetricsFeature
from slack_sdk.feature.paging_feature import SlackPagingFeature
from slack_sdk.feature.ratelimit_feature import SlackRatelimitFeature
from slack_sdk.feature.retry_feature import SlackRetryFeature
from slack_sdk.feature.test_feature import SlackTestFeature
from slack_sdk.feature.timeout_feature import SlackTimeoutFeature


_FEATURES = {
    "base": lambda: SlackBaseFeature(),
    "debug": lambda: SlackDebugFeature(),
    "idempotency": lambda: SlackIdempotencyFeature(),
    "metrics": lambda: SlackMetricsFeature(),
    "paging": lambda: SlackPagingFeature(),
    "ratelimit": lambda: SlackRatelimitFeature(),
    "retry": lambda: SlackRetryFeature(),
    "test": lambda: SlackTestFeature(),
    "timeout": lambda: SlackTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
