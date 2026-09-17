-- Slack SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("slack_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local SlackSDK = {}
SlackSDK.__index = SlackSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

SlackSDK._make_feature = _make_feature


function SlackSDK.new(options)
  local self = setmetatable({}, SlackSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function SlackSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function SlackSDK:get_utility()
  return Utility.copy(self._utility)
end


function SlackSDK:get_root_ctx()
  return self._rootctx
end


function SlackSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function SlackSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function SlackSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function SlackSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "SlackSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function SlackSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function SlackSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "SlackSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Adminapp():list() / client:Adminapp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminapp(data)
  local EntityMod = require("entity.adminapp_entity")
  if data == nil then
    if self._adminapp == nil then
      self._adminapp = EntityMod.new(self, nil)
    end
    return self._adminapp
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminappsapproved():list() / client:Adminappsapproved():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminappsapproved(data)
  local EntityMod = require("entity.adminappsapproved_entity")
  if data == nil then
    if self._adminappsapproved == nil then
      self._adminappsapproved = EntityMod.new(self, nil)
    end
    return self._adminappsapproved
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminappsrequest():list() / client:Adminappsrequest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminappsrequest(data)
  local EntityMod = require("entity.adminappsrequest_entity")
  if data == nil then
    if self._adminappsrequest == nil then
      self._adminappsrequest = EntityMod.new(self, nil)
    end
    return self._adminappsrequest
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminappsrestricted():list() / client:Adminappsrestricted():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminappsrestricted(data)
  local EntityMod = require("entity.adminappsrestricted_entity")
  if data == nil then
    if self._adminappsrestricted == nil then
      self._adminappsrestricted = EntityMod.new(self, nil)
    end
    return self._adminappsrestricted
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminconversation():list() / client:Adminconversation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminconversation(data)
  local EntityMod = require("entity.adminconversation_entity")
  if data == nil then
    if self._adminconversation == nil then
      self._adminconversation = EntityMod.new(self, nil)
    end
    return self._adminconversation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminconversationsekm():list() / client:Adminconversationsekm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminconversationsekm(data)
  local EntityMod = require("entity.adminconversationsekm_entity")
  if data == nil then
    if self._adminconversationsekm == nil then
      self._adminconversationsekm = EntityMod.new(self, nil)
    end
    return self._adminconversationsekm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdminconversationsrestrictAccess():list() / client:AdminconversationsrestrictAccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:AdminconversationsrestrictAccess(data)
  local EntityMod = require("entity.adminconversationsrestrict_access_entity")
  if data == nil then
    if self._adminconversationsrestrict_access == nil then
      self._adminconversationsrestrict_access = EntityMod.new(self, nil)
    end
    return self._adminconversationsrestrict_access
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminemoji():list() / client:Adminemoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminemoji(data)
  local EntityMod = require("entity.adminemoji_entity")
  if data == nil then
    if self._adminemoji == nil then
      self._adminemoji = EntityMod.new(self, nil)
    end
    return self._adminemoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdmininviteRequest():list() / client:AdmininviteRequest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:AdmininviteRequest(data)
  local EntityMod = require("entity.admininvite_request_entity")
  if data == nil then
    if self._admininvite_request == nil then
      self._admininvite_request = EntityMod.new(self, nil)
    end
    return self._admininvite_request
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdmininviteRequestsapproved():list() / client:AdmininviteRequestsapproved():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:AdmininviteRequestsapproved(data)
  local EntityMod = require("entity.admininvite_requestsapproved_entity")
  if data == nil then
    if self._admininvite_requestsapproved == nil then
      self._admininvite_requestsapproved = EntityMod.new(self, nil)
    end
    return self._admininvite_requestsapproved
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AdmininviteRequestsdenied():list() / client:AdmininviteRequestsdenied():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:AdmininviteRequestsdenied(data)
  local EntityMod = require("entity.admininvite_requestsdenied_entity")
  if data == nil then
    if self._admininvite_requestsdenied == nil then
      self._admininvite_requestsdenied = EntityMod.new(self, nil)
    end
    return self._admininvite_requestsdenied
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminteam():list() / client:Adminteam():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminteam(data)
  local EntityMod = require("entity.adminteam_entity")
  if data == nil then
    if self._adminteam == nil then
      self._adminteam = EntityMod.new(self, nil)
    end
    return self._adminteam
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminteamsadmin():list() / client:Adminteamsadmin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminteamsadmin(data)
  local EntityMod = require("entity.adminteamsadmin_entity")
  if data == nil then
    if self._adminteamsadmin == nil then
      self._adminteamsadmin = EntityMod.new(self, nil)
    end
    return self._adminteamsadmin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminteamsowner():list() / client:Adminteamsowner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminteamsowner(data)
  local EntityMod = require("entity.adminteamsowner_entity")
  if data == nil then
    if self._adminteamsowner == nil then
      self._adminteamsowner = EntityMod.new(self, nil)
    end
    return self._adminteamsowner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminteamssetting():list() / client:Adminteamssetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminteamssetting(data)
  local EntityMod = require("entity.adminteamssetting_entity")
  if data == nil then
    if self._adminteamssetting == nil then
      self._adminteamssetting = EntityMod.new(self, nil)
    end
    return self._adminteamssetting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminuser():list() / client:Adminuser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminuser(data)
  local EntityMod = require("entity.adminuser_entity")
  if data == nil then
    if self._adminuser == nil then
      self._adminuser = EntityMod.new(self, nil)
    end
    return self._adminuser
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminusergroup():list() / client:Adminusergroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminusergroup(data)
  local EntityMod = require("entity.adminusergroup_entity")
  if data == nil then
    if self._adminusergroup == nil then
      self._adminusergroup = EntityMod.new(self, nil)
    end
    return self._adminusergroup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Adminuserssession():list() / client:Adminuserssession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Adminuserssession(data)
  local EntityMod = require("entity.adminuserssession_entity")
  if data == nil then
    if self._adminuserssession == nil then
      self._adminuserssession = EntityMod.new(self, nil)
    end
    return self._adminuserssession
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Api():list() / client:Api():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Api(data)
  local EntityMod = require("entity.api_entity")
  if data == nil then
    if self._api == nil then
      self._api = EntityMod.new(self, nil)
    end
    return self._api
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:App():list() / client:App():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:App(data)
  local EntityMod = require("entity.app_entity")
  if data == nil then
    if self._app == nil then
      self._app = EntityMod.new(self, nil)
    end
    return self._app
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Appseventauthorization():list() / client:Appseventauthorization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Appseventauthorization(data)
  local EntityMod = require("entity.appseventauthorization_entity")
  if data == nil then
    if self._appseventauthorization == nil then
      self._appseventauthorization = EntityMod.new(self, nil)
    end
    return self._appseventauthorization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Appspermission():list() / client:Appspermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Appspermission(data)
  local EntityMod = require("entity.appspermission_entity")
  if data == nil then
    if self._appspermission == nil then
      self._appspermission = EntityMod.new(self, nil)
    end
    return self._appspermission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Appspermissionsresource():list() / client:Appspermissionsresource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Appspermissionsresource(data)
  local EntityMod = require("entity.appspermissionsresource_entity")
  if data == nil then
    if self._appspermissionsresource == nil then
      self._appspermissionsresource = EntityMod.new(self, nil)
    end
    return self._appspermissionsresource
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Appspermissionsscope():list() / client:Appspermissionsscope():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Appspermissionsscope(data)
  local EntityMod = require("entity.appspermissionsscope_entity")
  if data == nil then
    if self._appspermissionsscope == nil then
      self._appspermissionsscope = EntityMod.new(self, nil)
    end
    return self._appspermissionsscope
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Appspermissionsuser():list() / client:Appspermissionsuser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Appspermissionsuser(data)
  local EntityMod = require("entity.appspermissionsuser_entity")
  if data == nil then
    if self._appspermissionsuser == nil then
      self._appspermissionsuser = EntityMod.new(self, nil)
    end
    return self._appspermissionsuser
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Auth():list() / client:Auth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Auth(data)
  local EntityMod = require("entity.auth_entity")
  if data == nil then
    if self._auth == nil then
      self._auth = EntityMod.new(self, nil)
    end
    return self._auth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Bot():list() / client:Bot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Bot(data)
  local EntityMod = require("entity.bot_entity")
  if data == nil then
    if self._bot == nil then
      self._bot = EntityMod.new(self, nil)
    end
    return self._bot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Call():list() / client:Call():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Call(data)
  local EntityMod = require("entity.call_entity")
  if data == nil then
    if self._call == nil then
      self._call = EntityMod.new(self, nil)
    end
    return self._call
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Callsparticipant():list() / client:Callsparticipant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Callsparticipant(data)
  local EntityMod = require("entity.callsparticipant_entity")
  if data == nil then
    if self._callsparticipant == nil then
      self._callsparticipant = EntityMod.new(self, nil)
    end
    return self._callsparticipant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Chat():list() / client:Chat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Chat(data)
  local EntityMod = require("entity.chat_entity")
  if data == nil then
    if self._chat == nil then
      self._chat = EntityMod.new(self, nil)
    end
    return self._chat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChatscheduledMessage():list() / client:ChatscheduledMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:ChatscheduledMessage(data)
  local EntityMod = require("entity.chatscheduled_message_entity")
  if data == nil then
    if self._chatscheduled_message == nil then
      self._chatscheduled_message = EntityMod.new(self, nil)
    end
    return self._chatscheduled_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Conversation():list() / client:Conversation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Conversation(data)
  local EntityMod = require("entity.conversation_entity")
  if data == nil then
    if self._conversation == nil then
      self._conversation = EntityMod.new(self, nil)
    end
    return self._conversation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dialog():list() / client:Dialog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Dialog(data)
  local EntityMod = require("entity.dialog_entity")
  if data == nil then
    if self._dialog == nil then
      self._dialog = EntityMod.new(self, nil)
    end
    return self._dialog
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dnd():list() / client:Dnd():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Dnd(data)
  local EntityMod = require("entity.dnd_entity")
  if data == nil then
    if self._dnd == nil then
      self._dnd = EntityMod.new(self, nil)
    end
    return self._dnd
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Emoji():list() / client:Emoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Emoji(data)
  local EntityMod = require("entity.emoji_entity")
  if data == nil then
    if self._emoji == nil then
      self._emoji = EntityMod.new(self, nil)
    end
    return self._emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:File():list() / client:File():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:File(data)
  local EntityMod = require("entity.file_entity")
  if data == nil then
    if self._file == nil then
      self._file = EntityMod.new(self, nil)
    end
    return self._file
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Filescomment():list() / client:Filescomment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Filescomment(data)
  local EntityMod = require("entity.filescomment_entity")
  if data == nil then
    if self._filescomment == nil then
      self._filescomment = EntityMod.new(self, nil)
    end
    return self._filescomment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Filesremote():list() / client:Filesremote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Filesremote(data)
  local EntityMod = require("entity.filesremote_entity")
  if data == nil then
    if self._filesremote == nil then
      self._filesremote = EntityMod.new(self, nil)
    end
    return self._filesremote
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Migration():list() / client:Migration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Migration(data)
  local EntityMod = require("entity.migration_entity")
  if data == nil then
    if self._migration == nil then
      self._migration = EntityMod.new(self, nil)
    end
    return self._migration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Oauth():list() / client:Oauth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Oauth(data)
  local EntityMod = require("entity.oauth_entity")
  if data == nil then
    if self._oauth == nil then
      self._oauth = EntityMod.new(self, nil)
    end
    return self._oauth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Oauthv2():list() / client:Oauthv2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Oauthv2(data)
  local EntityMod = require("entity.oauthv2_entity")
  if data == nil then
    if self._oauthv2 == nil then
      self._oauthv2 = EntityMod.new(self, nil)
    end
    return self._oauthv2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pin():list() / client:Pin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Pin(data)
  local EntityMod = require("entity.pin_entity")
  if data == nil then
    if self._pin == nil then
      self._pin = EntityMod.new(self, nil)
    end
    return self._pin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reaction():list() / client:Reaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Reaction(data)
  local EntityMod = require("entity.reaction_entity")
  if data == nil then
    if self._reaction == nil then
      self._reaction = EntityMod.new(self, nil)
    end
    return self._reaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reminder():list() / client:Reminder():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Reminder(data)
  local EntityMod = require("entity.reminder_entity")
  if data == nil then
    if self._reminder == nil then
      self._reminder = EntityMod.new(self, nil)
    end
    return self._reminder
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rtm():list() / client:Rtm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Rtm(data)
  local EntityMod = require("entity.rtm_entity")
  if data == nil then
    if self._rtm == nil then
      self._rtm = EntityMod.new(self, nil)
    end
    return self._rtm
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Star():list() / client:Star():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Star(data)
  local EntityMod = require("entity.star_entity")
  if data == nil then
    if self._star == nil then
      self._star = EntityMod.new(self, nil)
    end
    return self._star
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Team():list() / client:Team():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Team(data)
  local EntityMod = require("entity.team_entity")
  if data == nil then
    if self._team == nil then
      self._team = EntityMod.new(self, nil)
    end
    return self._team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Teamprofile():list() / client:Teamprofile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Teamprofile(data)
  local EntityMod = require("entity.teamprofile_entity")
  if data == nil then
    if self._teamprofile == nil then
      self._teamprofile = EntityMod.new(self, nil)
    end
    return self._teamprofile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Usergroup():list() / client:Usergroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Usergroup(data)
  local EntityMod = require("entity.usergroup_entity")
  if data == nil then
    if self._usergroup == nil then
      self._usergroup = EntityMod.new(self, nil)
    end
    return self._usergroup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Usergroupsuser():list() / client:Usergroupsuser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Usergroupsuser(data)
  local EntityMod = require("entity.usergroupsuser_entity")
  if data == nil then
    if self._usergroupsuser == nil then
      self._usergroupsuser = EntityMod.new(self, nil)
    end
    return self._usergroupsuser
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Usersprofile():list() / client:Usersprofile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Usersprofile(data)
  local EntityMod = require("entity.usersprofile_entity")
  if data == nil then
    if self._usersprofile == nil then
      self._usersprofile = EntityMod.new(self, nil)
    end
    return self._usersprofile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:View():list() / client:View():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:View(data)
  local EntityMod = require("entity.view_entity")
  if data == nil then
    if self._view == nil then
      self._view = EntityMod.new(self, nil)
    end
    return self._view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function SlackSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end




function SlackSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = SlackSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return SlackSDK
