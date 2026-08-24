-- Typed models for the Slack SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Conversationsinfo
---@field created? number
---@field id? string
---@field is_archived? boolean
---@field is_channel? boolean
---@field is_private? boolean
---@field name? string
---@field num_members? number
---@field purpose? table
---@field topic? table

---@class ConversationsinfoLoadMatch
---@field created? number
---@field id string
---@field is_archived? boolean
---@field is_channel? boolean
---@field is_private? boolean
---@field name? string
---@field num_members? number
---@field purpose? table
---@field topic? table

---@class Conversationslist
---@field created? number
---@field id? string
---@field is_archived? boolean
---@field is_channel? boolean
---@field is_private? boolean
---@field name? string
---@field num_members? number
---@field purpose? table
---@field topic? table

---@class ConversationslistListMatch
---@field created? number
---@field id? string
---@field is_archived? boolean
---@field is_channel? boolean
---@field is_private? boolean
---@field name? string
---@field num_members? number
---@field purpose? table
---@field topic? table

local M = {}

return M
