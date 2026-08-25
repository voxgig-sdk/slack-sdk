-- Slack SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Slack",
      slug = "slack",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://slack.com/api",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["conversationsinfo"] = {},
        ["conversationslist"] = {},
      },
    },
    entity = {
      ["conversationsinfo"] = {
        ["fields"] = {
          {
            ["name"] = "created",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_archived",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_channel",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_private",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "num_members",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "purpose",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "topic",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "conversationsinfo",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "channel",
                      ["orig"] = "channel",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/conversations.info",
                ["parts"] = {
                  "conversations.info",
                },
                ["select"] = {
                  ["exist"] = {
                    "channel",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.channel`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["conversationslist"] = {
        ["fields"] = {
          {
            ["name"] = "created",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "is_archived",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_channel",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "is_private",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "num_members",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "purpose",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "topic",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "conversationslist",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "cursor",
                      ["orig"] = "cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/conversations.list",
                ["parts"] = {
                  "conversations.list",
                },
                ["select"] = {
                  ["exist"] = {
                    "cursor",
                    "limit",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.channels`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
