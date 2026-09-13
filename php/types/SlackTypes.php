<?php
declare(strict_types=1);

// Typed models for the Slack SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Conversationsinfo entity data model. */
class Conversationsinfo
{
    public ?int $created = null;
    public ?string $id = null;
    public ?bool $is_archived = null;
    public ?bool $is_channel = null;
    public ?bool $is_private = null;
    public ?string $name = null;
    public ?int $num_members = null;
    public ?array $purpose = null;
    public ?array $topic = null;
}

/** Request payload for Conversationsinfo#load. */
class ConversationsinfoLoadMatch
{
    public string $channel;
}

/** Conversationslist entity data model. */
class Conversationslist
{
    public ?int $created = null;
    public ?string $id = null;
    public ?bool $is_archived = null;
    public ?bool $is_channel = null;
    public ?bool $is_private = null;
    public ?string $name = null;
    public ?int $num_members = null;
    public ?array $purpose = null;
    public ?array $topic = null;
}

/** Request payload for Conversationslist#list. */
class ConversationslistListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
}

