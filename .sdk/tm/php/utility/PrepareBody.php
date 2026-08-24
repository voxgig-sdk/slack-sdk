<?php
declare(strict_types=1);

// Slack SDK utility: prepare_body

class SlackPrepareBody
{
    public static function call(SlackContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
