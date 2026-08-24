-- Slack SDK error

local SlackError = {}
SlackError.__index = SlackError


function SlackError.new(code, msg, ctx)
  local self = setmetatable({}, SlackError)
  self.is_sdk_error = true
  self.sdk = "Slack"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SlackError:error()
  return self.msg
end


function SlackError:__tostring()
  return self.msg
end


return SlackError
