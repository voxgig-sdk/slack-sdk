<?php
declare(strict_types=1);

// Slack SDK utility: result_body

class SlackResultBody
{
    public static function call(SlackContext $ctx): ?SlackResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
