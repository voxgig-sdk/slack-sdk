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
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
                "adminapp": {},
                "adminappsapproved": {},
                "adminappsrequest": {},
                "adminappsrestricted": {},
                "adminconversation": {},
                "adminconversationsekm": {},
                "adminconversationsrestrict_access": {},
                "adminemoji": {},
                "admininvite_request": {},
                "admininvite_requestsapproved": {},
                "admininvite_requestsdenied": {},
                "adminteam": {},
                "adminteamsadmin": {},
                "adminteamsowner": {},
                "adminteamssetting": {},
                "adminuser": {},
                "adminusergroup": {},
                "adminuserssession": {},
                "api": {},
                "app": {},
                "appseventauthorization": {},
                "appspermission": {},
                "appspermissionsresource": {},
                "appspermissionsscope": {},
                "appspermissionsuser": {},
                "auth": {},
                "bot": {},
                "call": {},
                "callsparticipant": {},
                "chat": {},
                "chatscheduled_message": {},
                "conversation": {},
                "dialog": {},
                "dnd": {},
                "emoji": {},
                "file": {},
                "filescomment": {},
                "filesremote": {},
                "migration": {},
                "oauth": {},
                "oauthv2": {},
                "pin": {},
                "reaction": {},
                "reminder": {},
                "rtm": {},
                "search": {},
                "star": {},
                "team": {},
                "teamprofile": {},
                "user": {},
                "usergroup": {},
                "usergroupsuser": {},
                "usersprofile": {},
                "view": {},
                "workflow": {},
            },
        },
        "entity": {
      "adminapp": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminapp",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "request_id",
                      "orig": "request_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.apps.approve",
                "segments": [
                  {
                    "lit": "admin.apps.approve",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "request_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.apps.approve",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "request_id",
                      "orig": "request_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.apps.restrict",
                "segments": [
                  {
                    "lit": "admin.apps.restrict",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "request_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.apps.restrict",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminappsapproved": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminappsapproved",
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
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "enterprise_id",
                      "orig": "enterprise_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.apps.approved.list",
                "segments": [
                  {
                    "lit": "admin.apps.approved.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "enterprise_id",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.apps.approved.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminappsrequest": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminappsrequest",
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
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.apps.requests.list",
                "segments": [
                  {
                    "lit": "admin.apps.requests.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.apps.requests.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminappsrestricted": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminappsrestricted",
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
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "enterprise_id",
                      "orig": "enterprise_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.apps.restricted.list",
                "segments": [
                  {
                    "lit": "admin.apps.restricted.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "enterprise_id",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.apps.restricted.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminconversation": {
        "fields": [
          {
            "name": "accepted_user",
            "type": "`$STRING`",
          },
          {
            "name": "can_thread",
            "type": "`$OBJECT`",
          },
          {
            "name": "channel_id",
            "type": "`$STRING`",
          },
          {
            "name": "created",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "creator",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "is_archived",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_channel",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_frozen",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_general",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_member",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_moved",
            "type": "`$INTEGER`",
          },
          {
            "name": "is_mpim",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_non_threadable",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_org_shared",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_pending_ext_shared",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_private",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_read_only",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_shared",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_thread_only",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "last_read",
            "type": "`$STRING`",
          },
          {
            "name": "latest",
            "type": "`$ANY`",
          },
          {
            "name": "members",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name_normalized",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "num_members",
            "type": "`$INTEGER`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "pending_shared",
            "type": "`$ARRAY`",
          },
          {
            "name": "previous_names",
            "type": "`$ARRAY`",
          },
          {
            "name": "priority",
            "type": "`$NUMBER`",
          },
          {
            "name": "purpose",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "response_metadata",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "team_ids",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "topic",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "unlinked",
            "type": "`$INTEGER`",
          },
          {
            "name": "unread_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "unread_count_display",
            "type": "`$INTEGER`",
          },
          {
            "name": "who_can_post",
            "type": "`$OBJECT`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "adminconversation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "description",
                      "orig": "description",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "is_private",
                      "orig": "is_private",
                      "reqd": True,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "org_wide",
                      "orig": "org_wide",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.create",
                "segments": [
                  {
                    "lit": "admin.conversations.create",
                  },
                ],
                "select": {
                  "exist": [
                    "description",
                    "is_private",
                    "name",
                    "org_wide",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.create",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "org_channel",
                      "orig": "org_channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "target_team_id",
                      "orig": "target_team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.setTeams",
                "segments": [
                  {
                    "lit": "admin.conversations.setTeams",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "org_channel",
                    "target_team_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.setTeams",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "leaving_team_id",
                      "orig": "leaving_team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.disconnectShared",
                "segments": [
                  {
                    "lit": "admin.conversations.disconnectShared",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "leaving_team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.disconnectShared",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.rename",
                "segments": [
                  {
                    "lit": "admin.conversations.rename",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.rename",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "pref",
                      "orig": "pref",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.setConversationPrefs",
                "segments": [
                  {
                    "lit": "admin.conversations.setConversationPrefs",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "pref",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.setConversationPrefs",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.invite",
                "segments": [
                  {
                    "lit": "admin.conversations.invite",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.invite",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.archive",
                "segments": [
                  {
                    "lit": "admin.conversations.archive",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.archive",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.convertToPrivate",
                "segments": [
                  {
                    "lit": "admin.conversations.convertToPrivate",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.convertToPrivate",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.delete",
                "segments": [
                  {
                    "lit": "admin.conversations.delete",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.delete",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.unarchive",
                "segments": [
                  {
                    "lit": "admin.conversations.unarchive",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.unarchive",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "search_channel_type",
                      "orig": "search_channel_type",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "sort_dir",
                      "orig": "sort_dir",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.conversations.search",
                "segments": [
                  {
                    "lit": "admin.conversations.search",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "query",
                    "search_channel_type",
                    "sort",
                    "sort_dir",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.channels`",
                },
                "parts": [
                  "admin.conversations.search",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
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
                "orig": "/admin.conversations.getTeams",
                "segments": [
                  {
                    "lit": "admin.conversations.getTeams",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "cursor",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.getTeams",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.conversations.getConversationPrefs",
                "segments": [
                  {
                    "lit": "admin.conversations.getConversationPrefs",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.prefs`",
                },
                "parts": [
                  "admin.conversations.getConversationPrefs",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminconversationsekm": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminconversationsekm",
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
                      "name": "channel_id",
                      "orig": "channel_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.conversations.ekm.listOriginalConnectedChannelInfo",
                "segments": [
                  {
                    "lit": "admin.conversations.ekm.listOriginalConnectedChannelInfo",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.ekm.listOriginalConnectedChannelInfo",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminconversationsrestrict_access": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminconversationsrestrict_access",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "group_id",
                      "orig": "group_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.restrictAccess.addGroup",
                "segments": [
                  {
                    "lit": "admin.conversations.restrictAccess.addGroup",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "group_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.restrictAccess.addGroup",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "group_id",
                      "orig": "group_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.conversations.restrictAccess.removeGroup",
                "segments": [
                  {
                    "lit": "admin.conversations.restrictAccess.removeGroup",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "group_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.restrictAccess.removeGroup",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.conversations.restrictAccess.listGroups",
                "segments": [
                  {
                    "lit": "admin.conversations.restrictAccess.listGroups",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.conversations.restrictAccess.listGroups",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminemoji": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminemoji",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "alias_for",
                      "orig": "alias_for",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.emoji.addAlias",
                "segments": [
                  {
                    "lit": "admin.emoji.addAlias",
                  },
                ],
                "select": {
                  "exist": [
                    "alias_for",
                    "name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.emoji.addAlias",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "new_name",
                      "orig": "new_name",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.emoji.rename",
                "segments": [
                  {
                    "lit": "admin.emoji.rename",
                  },
                ],
                "select": {
                  "exist": [
                    "name",
                    "new_name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.emoji.rename",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.emoji.add",
                "segments": [
                  {
                    "lit": "admin.emoji.add",
                  },
                ],
                "select": {
                  "exist": [
                    "name",
                    "token",
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.emoji.add",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.emoji.remove",
                "segments": [
                  {
                    "lit": "admin.emoji.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.emoji.remove",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.emoji.list",
                "segments": [
                  {
                    "lit": "admin.emoji.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.emoji.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "admininvite_request": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "admininvite_request",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "invite_request_id",
                      "orig": "invite_request_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.inviteRequests.approve",
                "segments": [
                  {
                    "lit": "admin.inviteRequests.approve",
                  },
                ],
                "select": {
                  "exist": [
                    "invite_request_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.inviteRequests.approve",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "invite_request_id",
                      "orig": "invite_request_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.inviteRequests.deny",
                "segments": [
                  {
                    "lit": "admin.inviteRequests.deny",
                  },
                ],
                "select": {
                  "exist": [
                    "invite_request_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.inviteRequests.deny",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.inviteRequests.list",
                "segments": [
                  {
                    "lit": "admin.inviteRequests.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.inviteRequests.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "admininvite_requestsapproved": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "admininvite_requestsapproved",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.inviteRequests.approved.list",
                "segments": [
                  {
                    "lit": "admin.inviteRequests.approved.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.inviteRequests.approved.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "admininvite_requestsdenied": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "admininvite_requestsdenied",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.inviteRequests.denied.list",
                "segments": [
                  {
                    "lit": "admin.inviteRequests.denied.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.inviteRequests.denied.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminteam": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminteam",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "team_description",
                      "orig": "team_description",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_discoverability",
                      "orig": "team_discoverability",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_domain",
                      "orig": "team_domain",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_name",
                      "orig": "team_name",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.teams.create",
                "segments": [
                  {
                    "lit": "admin.teams.create",
                  },
                ],
                "select": {
                  "exist": [
                    "team_description",
                    "team_discoverability",
                    "team_domain",
                    "team_name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.create",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
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
                "orig": "/admin.teams.list",
                "segments": [
                  {
                    "lit": "admin.teams.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminteamsadmin": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminteamsadmin",
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
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.teams.admins.list",
                "segments": [
                  {
                    "lit": "admin.teams.admins.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.admins.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminteamsowner": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminteamsowner",
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
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.teams.owners.list",
                "segments": [
                  {
                    "lit": "admin.teams.owners.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.owners.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminteamssetting": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminteamssetting",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.teams.settings.setDefaultChannels",
                "segments": [
                  {
                    "lit": "admin.teams.settings.setDefaultChannels",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.settings.setDefaultChannels",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "description",
                      "orig": "description",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.teams.settings.setDescription",
                "segments": [
                  {
                    "lit": "admin.teams.settings.setDescription",
                  },
                ],
                "select": {
                  "exist": [
                    "description",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.settings.setDescription",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "discoverability",
                      "orig": "discoverability",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.teams.settings.setDiscoverability",
                "segments": [
                  {
                    "lit": "admin.teams.settings.setDiscoverability",
                  },
                ],
                "select": {
                  "exist": [
                    "discoverability",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.settings.setDiscoverability",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "image_url",
                      "orig": "image_url",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.teams.settings.setIcon",
                "segments": [
                  {
                    "lit": "admin.teams.settings.setIcon",
                  },
                ],
                "select": {
                  "exist": [
                    "image_url",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.settings.setIcon",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.teams.settings.setName",
                "segments": [
                  {
                    "lit": "admin.teams.settings.setName",
                  },
                ],
                "select": {
                  "exist": [
                    "name",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.settings.setName",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.teams.settings.info",
                "segments": [
                  {
                    "lit": "admin.teams.settings.info",
                  },
                ],
                "select": {
                  "exist": [
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.teams.settings.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminuser": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminuser",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "custom_message",
                      "orig": "custom_message",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "email",
                      "orig": "email",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "guest_expiration_t",
                      "orig": "guest_expiration_t",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "is_restricted",
                      "orig": "is_restricted",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "is_ultra_restricted",
                      "orig": "is_ultra_restricted",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "real_name",
                      "orig": "real_name",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "resend",
                      "orig": "resend",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.invite",
                "segments": [
                  {
                    "lit": "admin.users.invite",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "custom_message",
                    "email",
                    "guest_expiration_t",
                    "is_restricted",
                    "is_ultra_restricted",
                    "real_name",
                    "resend",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.invite",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "is_restricted",
                      "orig": "is_restricted",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "is_ultra_restricted",
                      "orig": "is_ultra_restricted",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.assign",
                "segments": [
                  {
                    "lit": "admin.users.assign",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "is_restricted",
                    "is_ultra_restricted",
                    "team_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.assign",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "expiration_t",
                      "orig": "expiration_t",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.setExpiration",
                "segments": [
                  {
                    "lit": "admin.users.setExpiration",
                  },
                ],
                "select": {
                  "exist": [
                    "expiration_t",
                    "team_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.setExpiration",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.remove",
                "segments": [
                  {
                    "lit": "admin.users.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "team_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.remove",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.setAdmin",
                "segments": [
                  {
                    "lit": "admin.users.setAdmin",
                  },
                ],
                "select": {
                  "exist": [
                    "team_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.setAdmin",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.setOwner",
                "segments": [
                  {
                    "lit": "admin.users.setOwner",
                  },
                ],
                "select": {
                  "exist": [
                    "team_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.setOwner",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.setRegular",
                "segments": [
                  {
                    "lit": "admin.users.setRegular",
                  },
                ],
                "select": {
                  "exist": [
                    "team_id",
                    "token",
                    "user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.setRegular",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.users.list",
                "segments": [
                  {
                    "lit": "admin.users.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminusergroup": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminusergroup",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "auto_provision",
                      "orig": "auto_provision",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup_id",
                      "orig": "usergroup_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.usergroups.addTeams",
                "segments": [
                  {
                    "lit": "admin.usergroups.addTeams",
                  },
                ],
                "select": {
                  "exist": [
                    "auto_provision",
                    "team_id",
                    "token",
                    "usergroup_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.usergroups.addTeams",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup_id",
                      "orig": "usergroup_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.usergroups.addChannels",
                "segments": [
                  {
                    "lit": "admin.usergroups.addChannels",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "team_id",
                    "token",
                    "usergroup_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.usergroups.addChannels",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel_id",
                      "orig": "channel_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup_id",
                      "orig": "usergroup_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.usergroups.removeChannels",
                "segments": [
                  {
                    "lit": "admin.usergroups.removeChannels",
                  },
                ],
                "select": {
                  "exist": [
                    "channel_id",
                    "token",
                    "usergroup_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.usergroups.removeChannels",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_num_member",
                      "orig": "include_num_member",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup_id",
                      "orig": "usergroup_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/admin.usergroups.listChannels",
                "segments": [
                  {
                    "lit": "admin.usergroups.listChannels",
                  },
                ],
                "select": {
                  "exist": [
                    "include_num_member",
                    "team_id",
                    "token",
                    "usergroup_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.usergroups.listChannels",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "adminuserssession": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "adminuserssession",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "mobile_only",
                      "orig": "mobile_only",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "web_only",
                      "orig": "web_only",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.session.reset",
                "segments": [
                  {
                    "lit": "admin.users.session.reset",
                  },
                ],
                "select": {
                  "exist": [
                    "mobile_only",
                    "token",
                    "user_id",
                    "web_only",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.session.reset",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "session_id",
                      "orig": "session_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/admin.users.session.invalidate",
                "segments": [
                  {
                    "lit": "admin.users.session.invalidate",
                  },
                ],
                "select": {
                  "exist": [
                    "session_id",
                    "team_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "admin.users.session.invalidate",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "api": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "api",
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
                      "name": "error",
                      "orig": "error",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "foo",
                      "orig": "foo",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api.test",
                "segments": [
                  {
                    "lit": "api.test",
                  },
                ],
                "select": {
                  "exist": [
                    "error",
                    "foo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api.test",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "app": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "app",
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
                      "name": "client_id",
                      "orig": "client_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "client_secret",
                      "orig": "client_secret",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.uninstall",
                "segments": [
                  {
                    "lit": "apps.uninstall",
                  },
                ],
                "select": {
                  "exist": [
                    "client_id",
                    "client_secret",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "apps.uninstall",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "appseventauthorization": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "appseventauthorization",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "event_context",
                      "orig": "event_context",
                      "reqd": True,
                      "type": "`$ANY`",
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
                "orig": "/apps.event.authorizations.list",
                "segments": [
                  {
                    "lit": "apps.event.authorizations.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "event_context",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "apps.event.authorizations.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "appspermission": {
        "fields": [
          {
            "name": "app_home",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "channel",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "group",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "im",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "mpim",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "team",
            "req": True,
            "type": "`$OBJECT`",
          },
        ],
        "name": "appspermission",
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
                      "name": "scope",
                      "orig": "scope",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "trigger_id",
                      "orig": "trigger_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.permissions.request",
                "segments": [
                  {
                    "lit": "apps.permissions.request",
                  },
                ],
                "select": {
                  "exist": [
                    "scope",
                    "token",
                    "trigger_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "apps.permissions.request",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.permissions.info",
                "segments": [
                  {
                    "lit": "apps.permissions.info",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.info`",
                },
                "parts": [
                  "apps.permissions.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "appspermissionsresource": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "appspermissionsresource",
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.permissions.resources.list",
                "segments": [
                  {
                    "lit": "apps.permissions.resources.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "apps.permissions.resources.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "appspermissionsscope": {
        "fields": [
          {
            "name": "app_home",
            "type": "`$ARRAY`",
          },
          {
            "name": "channel",
            "type": "`$ARRAY`",
          },
          {
            "name": "group",
            "type": "`$ARRAY`",
          },
          {
            "name": "im",
            "type": "`$ARRAY`",
          },
          {
            "name": "mpim",
            "type": "`$ARRAY`",
          },
          {
            "name": "team",
            "type": "`$ARRAY`",
          },
          {
            "name": "user",
            "type": "`$ARRAY`",
          },
        ],
        "name": "appspermissionsscope",
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
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.permissions.scopes.list",
                "segments": [
                  {
                    "lit": "apps.permissions.scopes.list",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.scopes`",
                },
                "parts": [
                  "apps.permissions.scopes.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "appspermissionsuser": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "appspermissionsuser",
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
                      "name": "scope",
                      "orig": "scope",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "trigger_id",
                      "orig": "trigger_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.permissions.users.request",
                "segments": [
                  {
                    "lit": "apps.permissions.users.request",
                  },
                ],
                "select": {
                  "exist": [
                    "scope",
                    "token",
                    "trigger_id",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "apps.permissions.users.request",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/apps.permissions.users.list",
                "segments": [
                  {
                    "lit": "apps.permissions.users.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "apps.permissions.users.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "auth": {
        "fields": [
          {
            "name": "bot_id",
            "type": "`$STRING`",
          },
          {
            "name": "is_enterprise_install",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "revoked",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "team",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "team_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user_id",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "auth",
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
                      "name": "test",
                      "orig": "test",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/auth.revoke",
                "segments": [
                  {
                    "lit": "auth.revoke",
                  },
                ],
                "select": {
                  "exist": [
                    "test",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "auth.revoke",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/auth.test",
                "segments": [
                  {
                    "lit": "auth.test",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "auth.test",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bot": {
        "fields": [
          {
            "name": "app_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "deleted",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "icons",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updated",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "user_id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "bot",
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
                      "name": "bot",
                      "orig": "bot",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/bots.info",
                "segments": [
                  {
                    "lit": "bots.info",
                  },
                ],
                "select": {
                  "exist": [
                    "bot",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.bot`",
                },
                "parts": [
                  "bots.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "call": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "call",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "created_by",
                      "orig": "created_by",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "date_start",
                      "orig": "date_start",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "desktop_app_join_url",
                      "orig": "desktop_app_join_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "external_display_id",
                      "orig": "external_display_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "external_unique_id",
                      "orig": "external_unique_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "join_url",
                      "orig": "join_url",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/calls.add",
                "segments": [
                  {
                    "lit": "calls.add",
                  },
                ],
                "select": {
                  "exist": [
                    "created_by",
                    "date_start",
                    "desktop_app_join_url",
                    "external_display_id",
                    "external_unique_id",
                    "join_url",
                    "title",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "calls.add",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "desktop_app_join_url",
                      "orig": "desktop_app_join_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "join_url",
                      "orig": "join_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/calls.update",
                "segments": [
                  {
                    "lit": "calls.update",
                  },
                ],
                "select": {
                  "exist": [
                    "desktop_app_join_url",
                    "id",
                    "join_url",
                    "title",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "calls.update",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "duration",
                      "orig": "duration",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/calls.end",
                "segments": [
                  {
                    "lit": "calls.end",
                  },
                ],
                "select": {
                  "exist": [
                    "duration",
                    "id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "calls.end",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/calls.info",
                "segments": [
                  {
                    "lit": "calls.info",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "calls.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "callsparticipant": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "callsparticipant",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/calls.participants.add",
                "segments": [
                  {
                    "lit": "calls.participants.add",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "calls.participants.add",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/calls.participants.remove",
                "segments": [
                  {
                    "lit": "calls.participants.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "calls.participants.remove",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "chat": {
        "fields": [
          {
            "name": "attachments",
            "type": "`$ARRAY`",
          },
          {
            "name": "blocks",
            "short": "This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.",
            "type": "`$ARRAY`",
          },
          {
            "name": "bot_id",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "bot_profile",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "channel",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "client_msg_id",
            "type": "`$STRING`",
          },
          {
            "name": "comment",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "display_as_bot",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "file",
            "type": "`$OBJECT`",
          },
          {
            "name": "files",
            "type": "`$ARRAY`",
          },
          {
            "name": "icons",
            "type": "`$OBJECT`",
          },
          {
            "name": "inviter",
            "type": "`$STRING`",
          },
          {
            "name": "is_delayed_message",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_intro",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_starred",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "last_read",
            "type": "`$STRING`",
          },
          {
            "name": "latest_reply",
            "type": "`$STRING`",
          },
          {
            "name": "message_ts",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "old_name",
            "type": "`$STRING`",
          },
          {
            "name": "parent_user_id",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "permalink",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "pinned_to",
            "type": "`$ARRAY`",
          },
          {
            "name": "purpose",
            "type": "`$STRING`",
          },
          {
            "name": "reactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "reply_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "reply_users",
            "type": "`$ARRAY`",
          },
          {
            "name": "reply_users_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "source_team",
            "type": "`$STRING`",
          },
          {
            "name": "subscribed",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "subtype",
            "type": "`$STRING`",
          },
          {
            "name": "team",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "thread_ts",
            "type": "`$STRING`",
          },
          {
            "name": "topic",
            "type": "`$STRING`",
          },
          {
            "name": "ts",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "unread_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "upload",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "user",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
          {
            "name": "user_profile",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "user_team",
            "type": "`$STRING`",
          },
          {
            "name": "username",
            "type": "`$STRING`",
          },
        ],
        "name": "chat",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "as_user",
                      "orig": "as_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "attachment",
                      "orig": "attachment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "block",
                      "orig": "block",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "icon_emoji",
                      "orig": "icon_emoji",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "icon_url",
                      "orig": "icon_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "link_name",
                      "orig": "link_name",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "mrkdwn",
                      "orig": "mrkdwn",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "parse",
                      "orig": "parse",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "reply_broadcast",
                      "orig": "reply_broadcast",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "thread_t",
                      "orig": "thread_t",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "unfurl_link",
                      "orig": "unfurl_link",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "unfurl_media",
                      "orig": "unfurl_media",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "username",
                      "orig": "username",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.postMessage",
                "segments": [
                  {
                    "lit": "chat.postMessage",
                  },
                ],
                "select": {
                  "exist": [
                    "as_user",
                    "attachment",
                    "block",
                    "channel",
                    "icon_emoji",
                    "icon_url",
                    "link_name",
                    "mrkdwn",
                    "parse",
                    "reply_broadcast",
                    "text",
                    "thread_t",
                    "token",
                    "unfurl_link",
                    "unfurl_media",
                    "username",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.message`",
                },
                "parts": [
                  "chat.postMessage",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "as_user",
                      "orig": "as_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "attachment",
                      "orig": "attachment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "block",
                      "orig": "block",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "icon_emoji",
                      "orig": "icon_emoji",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "icon_url",
                      "orig": "icon_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "link_name",
                      "orig": "link_name",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "parse",
                      "orig": "parse",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "thread_t",
                      "orig": "thread_t",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "username",
                      "orig": "username",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.postEphemeral",
                "segments": [
                  {
                    "lit": "chat.postEphemeral",
                  },
                ],
                "select": {
                  "exist": [
                    "as_user",
                    "attachment",
                    "block",
                    "channel",
                    "icon_emoji",
                    "icon_url",
                    "link_name",
                    "parse",
                    "text",
                    "thread_t",
                    "token",
                    "user",
                    "username",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.postEphemeral",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "as_user",
                      "orig": "as_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "attachment",
                      "orig": "attachment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "block",
                      "orig": "block",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "link_name",
                      "orig": "link_name",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "parse",
                      "orig": "parse",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "post_at",
                      "orig": "post_at",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "reply_broadcast",
                      "orig": "reply_broadcast",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "thread_t",
                      "orig": "thread_t",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "unfurl_link",
                      "orig": "unfurl_link",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "unfurl_media",
                      "orig": "unfurl_media",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.scheduleMessage",
                "segments": [
                  {
                    "lit": "chat.scheduleMessage",
                  },
                ],
                "select": {
                  "exist": [
                    "as_user",
                    "attachment",
                    "block",
                    "channel",
                    "link_name",
                    "parse",
                    "post_at",
                    "reply_broadcast",
                    "text",
                    "thread_t",
                    "token",
                    "unfurl_link",
                    "unfurl_media",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.message`",
                },
                "parts": [
                  "chat.scheduleMessage",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "as_user",
                      "orig": "as_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "attachment",
                      "orig": "attachment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "block",
                      "orig": "block",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "link_name",
                      "orig": "link_name",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "parse",
                      "orig": "parse",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "ts",
                      "orig": "ts",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.update",
                "segments": [
                  {
                    "lit": "chat.update",
                  },
                ],
                "select": {
                  "exist": [
                    "as_user",
                    "attachment",
                    "block",
                    "channel",
                    "link_name",
                    "parse",
                    "text",
                    "token",
                    "ts",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.message`",
                },
                "parts": [
                  "chat.update",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "ts",
                      "orig": "ts",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "unfurl",
                      "orig": "unfurl",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user_auth_message",
                      "orig": "user_auth_message",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user_auth_required",
                      "orig": "user_auth_required",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user_auth_url",
                      "orig": "user_auth_url",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.unfurl",
                "segments": [
                  {
                    "lit": "chat.unfurl",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                    "ts",
                    "unfurl",
                    "user_auth_message",
                    "user_auth_required",
                    "user_auth_url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.unfurl",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "as_user",
                      "orig": "as_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "scheduled_message_id",
                      "orig": "scheduled_message_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.deleteScheduledMessage",
                "segments": [
                  {
                    "lit": "chat.deleteScheduledMessage",
                  },
                ],
                "select": {
                  "exist": [
                    "as_user",
                    "channel",
                    "scheduled_message_id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.deleteScheduledMessage",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "as_user",
                      "orig": "as_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "ts",
                      "orig": "ts",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.delete",
                "segments": [
                  {
                    "lit": "chat.delete",
                  },
                ],
                "select": {
                  "exist": [
                    "as_user",
                    "channel",
                    "token",
                    "ts",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.delete",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/chat.meMessage",
                "segments": [
                  {
                    "lit": "chat.meMessage",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "text",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.meMessage",
                ],
              },
            ],
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "message_t",
                      "orig": "message_t",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/chat.getPermalink",
                "segments": [
                  {
                    "lit": "chat.getPermalink",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "message_t",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.getPermalink",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "chatscheduled_message": {
        "fields": [
          {
            "name": "channel_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "date_created",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "post_at",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "text",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "chatscheduled_message",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "latest",
                      "orig": "latest",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "oldest",
                      "orig": "oldest",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/chat.scheduledMessages.list",
                "segments": [
                  {
                    "lit": "chat.scheduledMessages.list",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "cursor",
                    "latest",
                    "limit",
                    "oldest",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "chat.scheduledMessages.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "conversation": {
        "fields": [
          {
            "name": "already_closed",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "already_open",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "attachments",
            "type": "`$ARRAY`",
          },
          {
            "name": "blocks",
            "short": "This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.",
            "type": "`$ARRAY`",
          },
          {
            "name": "bot_id",
            "type": "`$STRING`",
          },
          {
            "name": "bot_profile",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "channel",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "channels",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "client_msg_id",
            "type": "`$STRING`",
          },
          {
            "name": "comment",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "display_as_bot",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "file",
            "type": "`$OBJECT`",
          },
          {
            "name": "files",
            "type": "`$ARRAY`",
          },
          {
            "name": "has_more",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "icons",
            "type": "`$OBJECT`",
          },
          {
            "name": "inviter",
            "type": "`$STRING`",
          },
          {
            "name": "is_delayed_message",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_intro",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_starred",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "last_read",
            "type": "`$STRING`",
          },
          {
            "name": "latest_reply",
            "type": "`$STRING`",
          },
          {
            "name": "members",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "messages",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "no_op",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "not_in_channel",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "old_name",
            "type": "`$STRING`",
          },
          {
            "name": "parent_user_id",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "permalink",
            "type": "`$STRING`",
          },
          {
            "name": "pinned_to",
            "type": "`$ARRAY`",
          },
          {
            "name": "purpose",
            "type": "`$STRING`",
          },
          {
            "name": "reactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "reply_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "reply_users",
            "type": "`$ARRAY`",
          },
          {
            "name": "reply_users_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "response_metadata",
            "op": {
              "list": {
                "req": True,
                "type": "`$OBJECT`",
              },
            },
            "type": "`$OBJECT`",
          },
          {
            "name": "source_team",
            "type": "`$STRING`",
          },
          {
            "name": "subscribed",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "subtype",
            "type": "`$STRING`",
          },
          {
            "name": "team",
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "thread_ts",
            "type": "`$STRING`",
          },
          {
            "name": "topic",
            "type": "`$STRING`",
          },
          {
            "name": "ts",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "unread_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "upload",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "user",
            "type": "`$STRING`",
          },
          {
            "name": "user_profile",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "user_team",
            "type": "`$STRING`",
          },
          {
            "name": "username",
            "type": "`$STRING`",
          },
          {
            "name": "warning",
            "type": "`$STRING`",
          },
        ],
        "name": "conversation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "return_im",
                      "orig": "return_im",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.open",
                "segments": [
                  {
                    "lit": "conversations.open",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "return_im",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.open",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.rename",
                "segments": [
                  {
                    "lit": "conversations.rename",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.rename",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "purpose",
                      "orig": "purpose",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.setPurpose",
                "segments": [
                  {
                    "lit": "conversations.setPurpose",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "purpose",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.setPurpose",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "topic",
                      "orig": "topic",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.setTopic",
                "segments": [
                  {
                    "lit": "conversations.setTopic",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                    "topic",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.setTopic",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "ts",
                      "orig": "ts",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.mark",
                "segments": [
                  {
                    "lit": "conversations.mark",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                    "ts",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.mark",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.invite",
                "segments": [
                  {
                    "lit": "conversations.invite",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.invite",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.kick",
                "segments": [
                  {
                    "lit": "conversations.kick",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.kick",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "is_private",
                      "orig": "is_private",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.create",
                "segments": [
                  {
                    "lit": "conversations.create",
                  },
                ],
                "select": {
                  "exist": [
                    "is_private",
                    "name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.create",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.archive",
                "segments": [
                  {
                    "lit": "conversations.archive",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.archive",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.close",
                "segments": [
                  {
                    "lit": "conversations.close",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.close",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.join",
                "segments": [
                  {
                    "lit": "conversations.join",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.join",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.leave",
                "segments": [
                  {
                    "lit": "conversations.leave",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.leave",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/conversations.unarchive",
                "segments": [
                  {
                    "lit": "conversations.unarchive",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.unarchive",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "inclusive",
                      "orig": "inclusive",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "latest",
                      "orig": "latest",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "oldest",
                      "orig": "oldest",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "ts",
                      "orig": "ts",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations.replies",
                "segments": [
                  {
                    "lit": "conversations.replies",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "cursor",
                    "inclusive",
                    "latest",
                    "limit",
                    "oldest",
                    "token",
                    "ts",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.messages`",
                },
                "parts": [
                  "conversations.replies",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "inclusive",
                      "orig": "inclusive",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "latest",
                      "orig": "latest",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "oldest",
                      "orig": "oldest",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations.history",
                "segments": [
                  {
                    "lit": "conversations.history",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "cursor",
                    "inclusive",
                    "latest",
                    "limit",
                    "oldest",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.history",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "exclude_archived",
                      "orig": "exclude_archived",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$ANY`",
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
                    "exclude_archived",
                    "limit",
                    "token",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.list",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/conversations.members",
                "segments": [
                  {
                    "lit": "conversations.members",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "cursor",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "conversations.members",
                ],
              },
            ],
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "include_locale",
                      "orig": "include_locale",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "include_num_member",
                      "orig": "include_num_member",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
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
                    "include_locale",
                    "include_num_member",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
      "dialog": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "dialog",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "dialog",
                      "orig": "dialog",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "trigger_id",
                      "orig": "trigger_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/dialog.open",
                "segments": [
                  {
                    "lit": "dialog.open",
                  },
                ],
                "select": {
                  "exist": [
                    "dialog",
                    "token",
                    "trigger_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "dialog.open",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "dnd": {
        "fields": [
          {
            "name": "dnd_enabled",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "next_dnd_end_ts",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "next_dnd_start_ts",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "snooze_enabled",
            "op": {
              "create": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "type": "`$BOOLEAN`",
          },
          {
            "name": "snooze_endtime",
            "op": {
              "create": {
                "req": True,
                "type": "`$INTEGER`",
              },
            },
            "type": "`$INTEGER`",
          },
          {
            "name": "snooze_remaining",
            "op": {
              "create": {
                "req": True,
                "type": "`$INTEGER`",
              },
            },
            "type": "`$INTEGER`",
          },
        ],
        "name": "dnd",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "num_minute",
                      "orig": "num_minute",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/dnd.setSnooze",
                "segments": [
                  {
                    "lit": "dnd.setSnooze",
                  },
                ],
                "select": {
                  "exist": [
                    "num_minute",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "dnd.setSnooze",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/dnd.endDnd",
                "segments": [
                  {
                    "lit": "dnd.endDnd",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "dnd.endDnd",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/dnd.endSnooze",
                "segments": [
                  {
                    "lit": "dnd.endSnooze",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "dnd.endSnooze",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/dnd.info",
                "segments": [
                  {
                    "lit": "dnd.info",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "dnd.info",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/dnd.teamInfo",
                "segments": [
                  {
                    "lit": "dnd.teamInfo",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "dnd.teamInfo",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "emoji": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "emoji",
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
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/emoji.list",
                "segments": [
                  {
                    "lit": "emoji.list",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "emoji.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "file": {
        "fields": [
          {
            "name": "channels",
            "type": "`$ARRAY`",
          },
          {
            "name": "comments",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "comments_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "content_html",
            "type": "`$NULL`",
          },
          {
            "name": "created",
            "type": "`$INTEGER`",
          },
          {
            "name": "date_delete",
            "type": "`$INTEGER`",
          },
          {
            "name": "display_as_bot",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "editable",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "editor",
            "type": "`$STRING`",
          },
          {
            "name": "external_id",
            "type": "`$STRING`",
          },
          {
            "name": "external_type",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "external_url",
            "type": "`$STRING`",
          },
          {
            "name": "file",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "filetype",
            "type": "`$STRING`",
          },
          {
            "name": "groups",
            "type": "`$ARRAY`",
          },
          {
            "name": "has_rich_preview",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "image_exif_rotation",
            "type": "`$INTEGER`",
          },
          {
            "name": "ims",
            "type": "`$ARRAY`",
          },
          {
            "name": "is_external",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_public",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_starred",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_tombstoned",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "last_editor",
            "type": "`$STRING`",
          },
          {
            "name": "mimetype",
            "type": "`$STRING`",
          },
          {
            "name": "mode",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "non_owner_editable",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "num_stars",
            "type": "`$INTEGER`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "original_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "original_w",
            "type": "`$INTEGER`",
          },
          {
            "name": "paging",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "format": "uri",
            "name": "permalink",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "permalink_public",
            "type": "`$STRING`",
          },
          {
            "name": "pinned_info",
            "type": "`$OBJECT`",
          },
          {
            "name": "pinned_to",
            "type": "`$ARRAY`",
          },
          {
            "name": "pretty_type",
            "type": "`$STRING`",
          },
          {
            "name": "preview",
            "type": "`$STRING`",
          },
          {
            "name": "public_url_shared",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "reactions",
            "type": "`$ARRAY`",
          },
          {
            "name": "response_metadata",
            "type": "`$ANY`",
          },
          {
            "name": "shares",
            "type": "`$OBJECT`",
          },
          {
            "name": "size",
            "type": "`$INTEGER`",
          },
          {
            "name": "source_team",
            "type": "`$STRING`",
          },
          {
            "name": "state",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "thumb_1024",
            "type": "`$STRING`",
          },
          {
            "name": "thumb_1024_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_1024_w",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "thumb_160",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "thumb_360",
            "type": "`$STRING`",
          },
          {
            "name": "thumb_360_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_360_w",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "thumb_480",
            "type": "`$STRING`",
          },
          {
            "name": "thumb_480_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_480_w",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "thumb_64",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "thumb_720",
            "type": "`$STRING`",
          },
          {
            "name": "thumb_720_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_720_w",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "thumb_80",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "thumb_800",
            "type": "`$STRING`",
          },
          {
            "name": "thumb_800_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_800_w",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "thumb_960",
            "type": "`$STRING`",
          },
          {
            "name": "thumb_960_h",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_960_w",
            "type": "`$INTEGER`",
          },
          {
            "name": "thumb_tiny",
            "type": "`$STRING`",
          },
          {
            "name": "timestamp",
            "type": "`$INTEGER`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "updated",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "url_private",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url_private_download",
            "type": "`$STRING`",
          },
          {
            "name": "user",
            "type": "`$STRING`",
          },
          {
            "name": "user_team",
            "type": "`$STRING`",
          },
          {
            "name": "username",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "file",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "content",
                      "orig": "content",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "filename",
                      "orig": "filename",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "filetype",
                      "orig": "filetype",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "initial_comment",
                      "orig": "initial_comment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "thread_t",
                      "orig": "thread_t",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.upload",
                "segments": [
                  {
                    "lit": "files.upload",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "content",
                    "file",
                    "filename",
                    "filetype",
                    "initial_comment",
                    "thread_t",
                    "title",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.file`",
                },
                "parts": [
                  "files.upload",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.delete",
                "segments": [
                  {
                    "lit": "files.delete",
                  },
                ],
                "select": {
                  "exist": [
                    "file",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.delete",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.revokePublicURL",
                "segments": [
                  {
                    "lit": "files.revokePublicURL",
                  },
                ],
                "select": {
                  "exist": [
                    "file",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.file`",
                },
                "parts": [
                  "files.revokePublicURL",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.sharedPublicURL",
                "segments": [
                  {
                    "lit": "files.sharedPublicURL",
                  },
                ],
                "select": {
                  "exist": [
                    "file",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.file`",
                },
                "parts": [
                  "files.sharedPublicURL",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "show_files_hidden_by_limit",
                      "orig": "show_files_hidden_by_limit",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "ts_from",
                      "orig": "ts_from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "ts_to",
                      "orig": "ts_to",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files.list",
                "segments": [
                  {
                    "lit": "files.list",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "count",
                    "page",
                    "show_files_hidden_by_limit",
                    "token",
                    "ts_from",
                    "ts_to",
                    "type",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.list",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files.info",
                "segments": [
                  {
                    "lit": "files.info",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "cursor",
                    "file",
                    "limit",
                    "page",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.file`",
                },
                "parts": [
                  "files.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "filescomment": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "filescomment",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.comments.delete",
                "segments": [
                  {
                    "lit": "files.comments.delete",
                  },
                ],
                "select": {
                  "exist": [
                    "file",
                    "id",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.comments.delete",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "filesremote": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "filesremote",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "external_url",
                      "orig": "external_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "filetype",
                      "orig": "filetype",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "indexable_file_content",
                      "orig": "indexable_file_content",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "preview_image",
                      "orig": "preview_image",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.remote.update",
                "segments": [
                  {
                    "lit": "files.remote.update",
                  },
                ],
                "select": {
                  "exist": [
                    "external_id",
                    "external_url",
                    "file",
                    "filetype",
                    "indexable_file_content",
                    "preview_image",
                    "title",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.remote.update",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "external_url",
                      "orig": "external_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "filetype",
                      "orig": "filetype",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "indexable_file_content",
                      "orig": "indexable_file_content",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "preview_image",
                      "orig": "preview_image",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.remote.add",
                "segments": [
                  {
                    "lit": "files.remote.add",
                  },
                ],
                "select": {
                  "exist": [
                    "external_id",
                    "external_url",
                    "filetype",
                    "indexable_file_content",
                    "preview_image",
                    "title",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.remote.add",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/files.remote.remove",
                "segments": [
                  {
                    "lit": "files.remote.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "external_id",
                    "file",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.remote.remove",
                ],
              },
            ],
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "ts_from",
                      "orig": "ts_from",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "ts_to",
                      "orig": "ts_to",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files.remote.list",
                "segments": [
                  {
                    "lit": "files.remote.list",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "cursor",
                    "limit",
                    "token",
                    "ts_from",
                    "ts_to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.remote.list",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files.remote.share",
                "segments": [
                  {
                    "lit": "files.remote.share",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "external_id",
                    "file",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.remote.share",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/files.remote.info",
                "segments": [
                  {
                    "lit": "files.remote.info",
                  },
                ],
                "select": {
                  "exist": [
                    "external_id",
                    "file",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "files.remote.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "migration": {
        "fields": [
          {
            "name": "enterprise_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "invalid_user_ids",
            "type": "`$ARRAY`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "team_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user_id_map",
            "type": "`$OBJECT`",
          },
        ],
        "name": "migration",
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
                      "name": "team_id",
                      "orig": "team_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "to_old",
                      "orig": "to_old",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/migration.exchange",
                "segments": [
                  {
                    "lit": "migration.exchange",
                  },
                ],
                "select": {
                  "exist": [
                    "team_id",
                    "to_old",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "migration.exchange",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "oauth": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "oauth",
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
                      "name": "client_id",
                      "orig": "client_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "client_secret",
                      "orig": "client_secret",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "code",
                      "orig": "code",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "redirect_uri",
                      "orig": "redirect_uri",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "single_channel",
                      "orig": "single_channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/oauth.access",
                "segments": [
                  {
                    "lit": "oauth.access",
                  },
                ],
                "select": {
                  "exist": [
                    "client_id",
                    "client_secret",
                    "code",
                    "redirect_uri",
                    "single_channel",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "oauth.access",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "client_id",
                      "orig": "client_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "client_secret",
                      "orig": "client_secret",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "code",
                      "orig": "code",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "redirect_uri",
                      "orig": "redirect_uri",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "single_channel",
                      "orig": "single_channel",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/oauth.token",
                "segments": [
                  {
                    "lit": "oauth.token",
                  },
                ],
                "select": {
                  "exist": [
                    "client_id",
                    "client_secret",
                    "code",
                    "redirect_uri",
                    "single_channel",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "oauth.token",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "oauthv2": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "oauthv2",
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
                      "name": "client_id",
                      "orig": "client_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "client_secret",
                      "orig": "client_secret",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "code",
                      "orig": "code",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "redirect_uri",
                      "orig": "redirect_uri",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/oauth.v2.access",
                "segments": [
                  {
                    "lit": "oauth.v2.access",
                  },
                ],
                "select": {
                  "exist": [
                    "client_id",
                    "client_secret",
                    "code",
                    "redirect_uri",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "oauth.v2.access",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "pin": {
        "fields": [
          {
            "name": "items",
            "type": "`$ARRAY`",
          },
          {
            "name": "ok",
            "op": {
              "create": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "pin",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/pins.add",
                "segments": [
                  {
                    "lit": "pins.add",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "pins.add",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/pins.remove",
                "segments": [
                  {
                    "lit": "pins.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "pins.remove",
                ],
              },
            ],
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/pins.list",
                "segments": [
                  {
                    "lit": "pins.list",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "pins.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "reaction": {
        "fields": [
          {
            "name": "file",
            "type": "`$OBJECT`",
          },
          {
            "name": "items",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "ok",
            "op": {
              "create": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "type": "`$BOOLEAN`",
          },
          {
            "name": "paging",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "response_metadata",
            "type": "`$ANY`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
        "name": "reaction",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file_comment",
                      "orig": "file_comment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/reactions.remove",
                "segments": [
                  {
                    "lit": "reactions.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "file",
                    "file_comment",
                    "name",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "reactions.remove",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/reactions.add",
                "segments": [
                  {
                    "lit": "reactions.add",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "name",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "reactions.add",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "full",
                      "orig": "full",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/reactions.list",
                "segments": [
                  {
                    "lit": "reactions.list",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "cursor",
                    "full",
                    "limit",
                    "page",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "reactions.list",
                ],
              },
            ],
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file_comment",
                      "orig": "file_comment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "full",
                      "orig": "full",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/reactions.get",
                "segments": [
                  {
                    "lit": "reactions.get",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "file",
                    "file_comment",
                    "full",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "reactions.get",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "reminder": {
        "fields": [
          {
            "name": "complete_ts",
            "type": "`$INTEGER`",
          },
          {
            "name": "creator",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "recurring",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "text",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "time",
            "type": "`$INTEGER`",
          },
          {
            "name": "user",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "reminder",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "time",
                      "orig": "time",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/reminders.add",
                "segments": [
                  {
                    "lit": "reminders.add",
                  },
                ],
                "select": {
                  "exist": [
                    "text",
                    "time",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.reminder`",
                },
                "parts": [
                  "reminders.add",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "reminder",
                      "orig": "reminder",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/reminders.complete",
                "segments": [
                  {
                    "lit": "reminders.complete",
                  },
                ],
                "select": {
                  "exist": [
                    "reminder",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "reminders.complete",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "reminder",
                      "orig": "reminder",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/reminders.delete",
                "segments": [
                  {
                    "lit": "reminders.delete",
                  },
                ],
                "select": {
                  "exist": [
                    "reminder",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "reminders.delete",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/reminders.list",
                "segments": [
                  {
                    "lit": "reminders.list",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.reminders`",
                },
                "parts": [
                  "reminders.list",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "reminder",
                      "orig": "reminder",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/reminders.info",
                "segments": [
                  {
                    "lit": "reminders.info",
                  },
                ],
                "select": {
                  "exist": [
                    "reminder",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.reminder`",
                },
                "parts": [
                  "reminders.info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rtm": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "self",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "team",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "rtm",
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
                      "name": "batch_presence_aware",
                      "orig": "batch_presence_aware",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "presence_sub",
                      "orig": "presence_sub",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/rtm.connect",
                "segments": [
                  {
                    "lit": "rtm.connect",
                  },
                ],
                "select": {
                  "exist": [
                    "batch_presence_aware",
                    "presence_sub",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "rtm.connect",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "search",
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
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "highlight",
                      "orig": "highlight",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "sort_dir",
                      "orig": "sort_dir",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search.messages",
                "segments": [
                  {
                    "lit": "search.messages",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "highlight",
                    "page",
                    "query",
                    "sort",
                    "sort_dir",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "search.messages",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "star": {
        "fields": [
          {
            "name": "items",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "paging",
            "req": True,
            "type": "`$OBJECT`",
          },
        ],
        "name": "star",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file_comment",
                      "orig": "file_comment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/stars.add",
                "segments": [
                  {
                    "lit": "stars.add",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "file",
                    "file_comment",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "stars.add",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file",
                      "orig": "file",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "file_comment",
                      "orig": "file_comment",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/stars.remove",
                "segments": [
                  {
                    "lit": "stars.remove",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "file",
                    "file_comment",
                    "timestamp",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "stars.remove",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/stars.list",
                "segments": [
                  {
                    "lit": "stars.list",
                  },
                ],
                "select": {
                  "exist": [
                    "count",
                    "cursor",
                    "limit",
                    "page",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "stars.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "team": {
        "fields": [
          {
            "name": "admin_app_id",
            "type": "`$STRING`",
          },
          {
            "name": "app_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "app_type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "archived",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "uri",
            "name": "avatar_base_url",
            "type": "`$STRING`",
          },
          {
            "name": "change_type",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "channel",
            "type": "`$STRING`",
          },
          {
            "name": "count",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "country",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "created",
            "type": "`$INTEGER`",
          },
          {
            "name": "date",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "date_create",
            "type": "`$INTEGER`",
          },
          {
            "name": "date_first",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "date_last",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "deleted",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "description",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "discoverable",
            "type": "`$ANY`",
          },
          {
            "name": "domain",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "email_domain",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "enterprise_id",
            "type": "`$STRING`",
          },
          {
            "name": "enterprise_name",
            "type": "`$STRING`",
          },
          {
            "name": "external_org_migrations",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "has_compliance_export",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "icon",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "is_assigned",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_enterprise",
            "type": "`$INTEGER`",
          },
          {
            "name": "is_over_storage_limit",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "isp",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "limit_ts",
            "type": "`$INTEGER`",
          },
          {
            "name": "locale",
            "type": "`$STRING`",
          },
          {
            "name": "messages_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "msg_edit_window_mins",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "over_integrations_limit",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "over_storage_limit",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "pay_prod_cur",
            "type": "`$STRING`",
          },
          {
            "name": "plan",
            "type": "`$STRING`",
          },
          {
            "name": "primary_owner",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "region",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
          },
          {
            "name": "scope",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "service_id",
            "type": "`$STRING`",
          },
          {
            "name": "service_type",
            "type": "`$STRING`",
          },
          {
            "name": "sso_provider",
            "type": "`$OBJECT`",
          },
          {
            "name": "user_agent",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user_name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "username",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "team",
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
                      "name": "app_id",
                      "orig": "app_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "change_type",
                      "orig": "change_type",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "service_id",
                      "orig": "service_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/team.integrationLogs",
                "segments": [
                  {
                    "lit": "team.integrationLogs",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "change_type",
                    "count",
                    "page",
                    "service_id",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "team.integrationLogs",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "before",
                      "orig": "before",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/team.accessLogs",
                "segments": [
                  {
                    "lit": "team.accessLogs",
                  },
                ],
                "select": {
                  "exist": [
                    "before",
                    "count",
                    "page",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "team.accessLogs",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "team",
                      "orig": "team",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/team.info",
                "segments": [
                  {
                    "lit": "team.info",
                  },
                ],
                "select": {
                  "exist": [
                    "team",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.team`",
                },
                "parts": [
                  "team.info",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/team.billableInfo",
                "segments": [
                  {
                    "lit": "team.billableInfo",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "team.billableInfo",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "teamprofile": {
        "fields": [
          {
            "name": "fields",
            "req": True,
            "type": "`$ARRAY`",
          },
        ],
        "name": "teamprofile",
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
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "visibility",
                      "orig": "visibility",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/team.profile.get",
                "segments": [
                  {
                    "lit": "team.profile.get",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "visibility",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.profile`",
                },
                "parts": [
                  "team.profile.get",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "user": {
        "fields": [
          {
            "name": "auto_away",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "avatar_hash",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "cache_ts",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "channels",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "connection_count",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "image_1024",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_192",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_24",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_32",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_48",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_512",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_72",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "image_original",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "last_activity",
            "type": "`$INTEGER`",
          },
          {
            "name": "manual_away",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "members",
            "req": True,
            "type": "`$ARRAY`",
          },
          {
            "name": "ok",
            "op": {
              "load": {
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "online",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "presence",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "response_metadata",
            "op": {
              "list": {
                "type": "`$ANY`",
              },
            },
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "team",
            "type": "`$OBJECT`",
          },
          {
            "name": "user",
            "op": {
              "load": {
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "type": "`$ANY`",
          },
        ],
        "name": "user",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "crop_w",
                      "orig": "crop_w",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "crop_x",
                      "orig": "crop_x",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "crop_y",
                      "orig": "crop_y",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "image",
                      "orig": "image",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/users.setPhoto",
                "segments": [
                  {
                    "lit": "users.setPhoto",
                  },
                ],
                "select": {
                  "exist": [
                    "crop_w",
                    "crop_x",
                    "crop_y",
                    "image",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.profile`",
                },
                "parts": [
                  "users.setPhoto",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "presence",
                      "orig": "presence",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/users.setPresence",
                "segments": [
                  {
                    "lit": "users.setPresence",
                  },
                ],
                "select": {
                  "exist": [
                    "presence",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.setPresence",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/users.deletePhoto",
                "segments": [
                  {
                    "lit": "users.deletePhoto",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.deletePhoto",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/users.setActive",
                "segments": [
                  {
                    "lit": "users.setActive",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.setActive",
                ],
              },
            ],
          },
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
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "exclude_archived",
                      "orig": "exclude_archived",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.conversations",
                "segments": [
                  {
                    "lit": "users.conversations",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "exclude_archived",
                    "limit",
                    "token",
                    "type",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.conversations",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "cursor",
                      "orig": "cursor",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "include_locale",
                      "orig": "include_locale",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.list",
                "segments": [
                  {
                    "lit": "users.list",
                  },
                ],
                "select": {
                  "exist": [
                    "cursor",
                    "include_locale",
                    "limit",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.list",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_locale",
                      "orig": "include_locale",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.info",
                "segments": [
                  {
                    "lit": "users.info",
                  },
                ],
                "select": {
                  "exist": [
                    "include_locale",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
                "parts": [
                  "users.info",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "email",
                      "orig": "email",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.lookupByEmail",
                "segments": [
                  {
                    "lit": "users.lookupByEmail",
                  },
                ],
                "select": {
                  "exist": [
                    "email",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
                "parts": [
                  "users.lookupByEmail",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.getPresence",
                "segments": [
                  {
                    "lit": "users.getPresence",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.getPresence",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.identity",
                "segments": [
                  {
                    "lit": "users.identity",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "users.identity",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "usergroup": {
        "fields": [
          {
            "name": "auto_provision",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "auto_type",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "channel_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "created_by",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "date_create",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "date_delete",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "date_update",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "deleted_by",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "enterprise_subteam_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "handle",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "is_external",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_subteam",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_usergroup",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "prefs",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "team_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updated_by",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "users",
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "usergroup",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "description",
                      "orig": "description",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "handle",
                      "orig": "handle",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "include_count",
                      "orig": "include_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup",
                      "orig": "usergroup",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/usergroups.update",
                "segments": [
                  {
                    "lit": "usergroups.update",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "description",
                    "handle",
                    "include_count",
                    "name",
                    "token",
                    "usergroup",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usergroup`",
                },
                "parts": [
                  "usergroups.update",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "description",
                      "orig": "description",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "handle",
                      "orig": "handle",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "include_count",
                      "orig": "include_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/usergroups.create",
                "segments": [
                  {
                    "lit": "usergroups.create",
                  },
                ],
                "select": {
                  "exist": [
                    "channel",
                    "description",
                    "handle",
                    "include_count",
                    "name",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usergroup`",
                },
                "parts": [
                  "usergroups.create",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_count",
                      "orig": "include_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup",
                      "orig": "usergroup",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/usergroups.disable",
                "segments": [
                  {
                    "lit": "usergroups.disable",
                  },
                ],
                "select": {
                  "exist": [
                    "include_count",
                    "token",
                    "usergroup",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usergroup`",
                },
                "parts": [
                  "usergroups.disable",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_count",
                      "orig": "include_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup",
                      "orig": "usergroup",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/usergroups.enable",
                "segments": [
                  {
                    "lit": "usergroups.enable",
                  },
                ],
                "select": {
                  "exist": [
                    "include_count",
                    "token",
                    "usergroup",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usergroup`",
                },
                "parts": [
                  "usergroups.enable",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_count",
                      "orig": "include_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "include_disabled",
                      "orig": "include_disabled",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "include_user",
                      "orig": "include_user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/usergroups.list",
                "segments": [
                  {
                    "lit": "usergroups.list",
                  },
                ],
                "select": {
                  "exist": [
                    "include_count",
                    "include_disabled",
                    "include_user",
                    "token",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usergroups`",
                },
                "parts": [
                  "usergroups.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "usergroupsuser": {
        "fields": [
          {
            "name": "auto_provision",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "auto_type",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "channel_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "created_by",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "date_create",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "date_delete",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "date_update",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "deleted_by",
            "req": True,
            "type": "`$ANY`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "enterprise_subteam_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "handle",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "is_external",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_subteam",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_usergroup",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "prefs",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "team_id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updated_by",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "user_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "users",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "type": "`$ARRAY`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "usergroupsuser",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_count",
                      "orig": "include_count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup",
                      "orig": "usergroup",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/usergroups.users.update",
                "segments": [
                  {
                    "lit": "usergroups.users.update",
                  },
                ],
                "select": {
                  "exist": [
                    "include_count",
                    "token",
                    "user",
                    "usergroup",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usergroup`",
                },
                "parts": [
                  "usergroups.users.update",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_disabled",
                      "orig": "include_disabled",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "usergroup",
                      "orig": "usergroup",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/usergroups.users.list",
                "segments": [
                  {
                    "lit": "usergroups.users.list",
                  },
                ],
                "select": {
                  "exist": [
                    "include_disabled",
                    "token",
                    "usergroup",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.users`",
                },
                "parts": [
                  "usergroups.users.list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "usersprofile": {
        "fields": [
          {
            "name": "always_active",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "api_app_id",
            "type": "`$STRING`",
          },
          {
            "name": "avatar_hash",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "bot_id",
            "type": "`$STRING`",
          },
          {
            "name": "display_name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "display_name_normalized",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "email",
            "name": "email",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "fields",
            "req": True,
            "type": [
              "`$ONE`",
              [
                "`$OBJECT`",
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
          },
          {
            "name": "first_name",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "guest_expiration_ts",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$INTEGER`",
              ],
            ],
          },
          {
            "name": "guest_invited_by",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_1024",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_192",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_24",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_32",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_48",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_512",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_72",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "format": "uri",
            "name": "image_original",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "is_app_user",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_custom_image",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "is_restricted",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$BOOLEAN`",
              ],
            ],
          },
          {
            "name": "is_ultra_restricted",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$BOOLEAN`",
              ],
            ],
          },
          {
            "name": "last_avatar_image_hash",
            "type": "`$STRING`",
          },
          {
            "name": "last_name",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "memberships_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "phone",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "pronouns",
            "type": "`$STRING`",
          },
          {
            "name": "real_name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "real_name_normalized",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "skype",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status_default_emoji",
            "type": "`$STRING`",
          },
          {
            "name": "status_default_text",
            "type": "`$STRING`",
          },
          {
            "name": "status_default_text_canonical",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "status_emoji",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status_expiration",
            "type": "`$INTEGER`",
          },
          {
            "name": "status_text",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status_text_canonical",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "team",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updated",
            "type": "`$INTEGER`",
          },
          {
            "name": "user_id",
            "type": "`$STRING`",
          },
          {
            "name": "username",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
        ],
        "name": "usersprofile",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "profile",
                      "orig": "profile",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "value",
                      "orig": "value",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/users.profile.set",
                "segments": [
                  {
                    "lit": "users.profile.set",
                  },
                ],
                "select": {
                  "exist": [
                    "name",
                    "profile",
                    "token",
                    "user",
                    "value",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.profile`",
                },
                "parts": [
                  "users.profile.set",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "include_label",
                      "orig": "include_label",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "user",
                      "orig": "user",
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/users.profile.get",
                "segments": [
                  {
                    "lit": "users.profile.get",
                  },
                ],
                "select": {
                  "exist": [
                    "include_label",
                    "token",
                    "user",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.profile`",
                },
                "parts": [
                  "users.profile.get",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "view": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "view",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "hash",
                      "orig": "hash",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "view",
                      "orig": "view",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "view_id",
                      "orig": "view_id",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/views.update",
                "segments": [
                  {
                    "lit": "views.update",
                  },
                ],
                "select": {
                  "exist": [
                    "external_id",
                    "hash",
                    "token",
                    "view",
                    "view_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "views.update",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "hash",
                      "orig": "hash",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "user_id",
                      "orig": "user_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "view",
                      "orig": "view",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/views.publish",
                "segments": [
                  {
                    "lit": "views.publish",
                  },
                ],
                "select": {
                  "exist": [
                    "hash",
                    "token",
                    "user_id",
                    "view",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "views.publish",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "trigger_id",
                      "orig": "trigger_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "view",
                      "orig": "view",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/views.open",
                "segments": [
                  {
                    "lit": "views.open",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "trigger_id",
                    "view",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "views.open",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "trigger_id",
                      "orig": "trigger_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "view",
                      "orig": "view",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/views.push",
                "segments": [
                  {
                    "lit": "views.push",
                  },
                ],
                "select": {
                  "exist": [
                    "token",
                    "trigger_id",
                    "view",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "views.push",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "workflow": {
        "fields": [
          {
            "name": "ok",
            "req": True,
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "workflow",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "input",
                      "orig": "input",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "output",
                      "orig": "output",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "step_image_url",
                      "orig": "step_image_url",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "step_name",
                      "orig": "step_name",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "workflow_step_edit_id",
                      "orig": "workflow_step_edit_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workflows.updateStep",
                "segments": [
                  {
                    "lit": "workflows.updateStep",
                  },
                ],
                "select": {
                  "exist": [
                    "input",
                    "output",
                    "step_image_url",
                    "step_name",
                    "token",
                    "workflow_step_edit_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "workflows.updateStep",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "error",
                      "orig": "error",
                      "reqd": True,
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "workflow_step_execute_id",
                      "orig": "workflow_step_execute_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workflows.stepFailed",
                "segments": [
                  {
                    "lit": "workflows.stepFailed",
                  },
                ],
                "select": {
                  "exist": [
                    "error",
                    "token",
                    "workflow_step_execute_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "workflows.stepFailed",
                ],
              },
              {
                "args": {
                  "header": [
                    {
                      "kind": "header",
                      "name": "token",
                      "orig": "token",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "output",
                      "orig": "output",
                      "type": "`$ANY`",
                    },
                    {
                      "kind": "query",
                      "name": "workflow_step_execute_id",
                      "orig": "workflow_step_execute_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/workflows.stepCompleted",
                "segments": [
                  {
                    "lit": "workflows.stepCompleted",
                  },
                ],
                "select": {
                  "exist": [
                    "output",
                    "token",
                    "workflow_step_execute_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "workflows.stepCompleted",
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
