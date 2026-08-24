<?php
declare(strict_types=1);

// Slack SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SlackMakeContext
{
    public static function call(array $ctxmap, ?SlackContext $basectx): SlackContext
    {
        return new SlackContext($ctxmap, $basectx);
    }
}
