<?php
declare(strict_types=1);

// Slack SDK base feature

class SlackBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SlackContext $ctx, array $options): void {}
    public function PostConstruct(SlackContext $ctx): void {}
    public function PostConstructEntity(SlackContext $ctx): void {}
    public function SetData(SlackContext $ctx): void {}
    public function GetData(SlackContext $ctx): void {}
    public function GetMatch(SlackContext $ctx): void {}
    public function SetMatch(SlackContext $ctx): void {}
    public function PrePoint(SlackContext $ctx): void {}
    public function PreSpec(SlackContext $ctx): void {}
    public function PreRequest(SlackContext $ctx): void {}
    public function PreResponse(SlackContext $ctx): void {}
    public function PreResult(SlackContext $ctx): void {}
    public function PreDone(SlackContext $ctx): void {}
    public function PreUnexpected(SlackContext $ctx): void {}
}
