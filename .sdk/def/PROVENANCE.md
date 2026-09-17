# API definition provenance

## slack-openapi.json

- **Source:** https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json
- **Publisher:** Slack (slackapi/slack-api-specs, the official Slack-maintained repository)
- **Retrieved:** 2026-09-17
- **Format:** Swagger 2.0
- **Spec version:** `info.version` 1.7.0, `info.title` "Slack Web API"
- **Size:** 1,237,332 bytes
- **Coverage:** 174 paths, 48 definitions — the whole Slack Web API as published.

Unmodified vendor file. Do not hand-edit it: refresh it from the source URL
above and re-record the retrieval date.

## Replaces `slack-channels-only.json`

That file was hand-authored and covered `conversations.info` and
`conversations.list` only — two operations of 174. It was removed on
2026-09-17 under the policy that an SDK covers its API in full.

## One modification: a credential-shaped example value

The vendor file is otherwise byte-for-byte as published. **One** string was
replaced:

```
oauth.v2.access  ->  responses.200.examples.application/json.access_token
  now:  xoxb-XXXXXXXXXXX-XXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX
```

The value it replaced is in the upstream file at the source URL above; it is
deliberately not reproduced here, because quoting it would put the same
credential-shaped string back into this repository — GitHub push protection
rejects it from a Markdown file exactly as it does from the spec.

It is a documentation example in Slack's own published spec, not a live
credential, but it has the exact shape of a Slack bot token. Left alone it
propagates out of the spec into generated test data and committed test files,
and GitHub push protection rejects the push — correctly, because a public SDK
should not ship a string that reads as a working Slack token.

The replacement matches the placeholder style Slack already uses elsewhere in
the same file (`xoxp-XXXXXXXX-XXXXXXXX-XXXXX`, `xoxa-access-token-string`).
No path, operation, parameter or schema is affected, so the coverage this SDK
generates is unchanged.

Re-apply this redaction whenever the spec is refreshed from the source URL.
