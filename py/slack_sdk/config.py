# Slack SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Slack",
            "slug": "slack",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://slack.com/api",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "conversationsinfo": {},
                "conversationslist": {},
            },
        },
        "entity": {
      "conversationsinfo": {
        "fields": [
          {
            "name": "created",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "is_archived",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_channel",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_private",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "num_members",
            "type": "`$INTEGER`",
          },
          {
            "name": "purpose",
            "type": "`$OBJECT`",
          },
          {
            "name": "topic",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversationsinfo",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations.info",
                "segments": [
                  {
                    "lit": "conversations.info",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.channel`",
                },
                "parts": [
                  "conversations.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversationslist": {
        "fields": [
          {
            "name": "created",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "is_archived",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_channel",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_private",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "num_members",
            "type": "`$INTEGER`",
          },
          {
            "name": "purpose",
            "type": "`$OBJECT`",
          },
          {
            "name": "topic",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "conversationslist",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations.list",
                "segments": [
                  {
                    "lit": "conversations.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.channels`",
                },
                "parts": [
                  "conversations.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
