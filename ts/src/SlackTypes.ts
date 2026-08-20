// Typed models for the Slack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Channel {
  created?: number
  id?: string
  is_archived?: boolean
  is_channel?: boolean
  is_private?: boolean
  name?: string
  num_members?: number
  purpose?: Record<string, any>
  topic?: Record<string, any>
}

export interface ChannelLoadMatch {
  created?: number
  id: string
  is_archived?: boolean
  is_channel?: boolean
  is_private?: boolean
  name?: string
  num_members?: number
  purpose?: Record<string, any>
  topic?: Record<string, any>
}

export interface ChannelListMatch {
  created?: number
  id?: string
  is_archived?: boolean
  is_channel?: boolean
  is_private?: boolean
  name?: string
  num_members?: number
  purpose?: Record<string, any>
  topic?: Record<string, any>
}

