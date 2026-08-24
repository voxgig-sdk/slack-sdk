<?php
declare(strict_types=1);

// Slack SDK utility: result_headers

class SlackResultHeaders
{
    public static function call(SlackContext $ctx): ?SlackResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
