# Slack SDK utility: make_context

from projectname_sdk.core.context import SlackContext


def make_context_util(ctxmap, basectx):
    return SlackContext(ctxmap, basectx)
