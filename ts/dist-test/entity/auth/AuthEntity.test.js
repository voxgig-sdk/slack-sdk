"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AuthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SLACK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SlackSDK.test();
        const ent = testsdk.Auth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SLACK_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'auth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "bot_id", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "is_enterprise_install", "req": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "name": "ok", "req": true, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "revoked", "req": true, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "name": "team", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "team_id", "req": true, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "url", "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "user", "req": true, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "user_id", "req": true, "type": "`$STRING`", "index$": 8 }], "name": "auth", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "test", "orig": "test", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "token", "orig": "token", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /auth.revoke", "json": "{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"auth_revoke\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"query\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.\",\"in\":\"query\",\"name\":\"test\",\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response\",\"examples\":{\"application/json\":{\"ok\":true,\"revoked\":true}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from auth.revoke method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"revoked\":{\"type\":\"boolean\"}},\"required\":[\"ok\",\"revoked\"],\"title\":\"auth.revoke schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from auth.revoke method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"auth.revoke error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/auth.revoke", "segments": [{ "lit": "auth.revoke" }], "select": { "exist": ["test", "token"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "token", "orig": "token", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "GET /auth.test", "json": "{\"consumes\":[\"application/x-www-form-urlencoded\",\"application/json\"],\"operationId\":\"auth_test\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"header\",\"name\":\"token\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Standard success response when used with a user token\",\"examples\":{\"application/json\":{\"ok\":true,\"team\":\"Subarachnoid Workspace\",\"team_id\":\"T12345678\",\"url\":\"https://subarachnoid.slack.com/\",\"user\":\"grace\",\"user_id\":\"W12345678\"}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response auth.test method\",\"properties\":{\"bot_id\":{\"pattern\":\"^B[A-Z0-9]{8,}$\",\"title\":\"Bot User ID\",\"type\":\"string\"},\"is_enterprise_install\":{\"type\":\"boolean\"},\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"},\"team\":{\"type\":\"string\"},\"team_id\":{\"pattern\":\"^[T][A-Z0-9]{2,}$\",\"title\":\"Team ID\",\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"user\":{\"type\":\"string\"},\"user_id\":{\"pattern\":\"^[UW][A-Z0-9]{2,}$\",\"title\":\"User ID\",\"type\":\"string\"}},\"required\":[\"ok\",\"url\",\"team\",\"user\",\"team_id\",\"user_id\"],\"title\":\"auth.test success schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Standard failure response when used with an invalid token\",\"examples\":{\"application/json\":{\"error\":\"invalid_auth\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response auth.test method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"not_authed\",\"invalid_auth\",\"token_revoked\",\"account_inactive\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"auth.test error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/auth.test", "segments": [{ "lit": "auth.test" }], "select": { "exist": ["token"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "auth", "name__orig": "auth", "Name": "Auth", "name_": "auth", "name-": "auth", "NAME": "AUTH", "index$": 25 }, { "active": true, "entity": "auth", "key$": "BasicAuthFlow", "kind": "basic", "name": "BasicAuthFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "auth_ref01", "srcdatavar": "auth_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-auth_ref01" } }], "index$": 0 }] }, 'Auth');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let auth_ref01_data = Object.values(setup.data.existing.auth)[0];
        // LOAD
        const auth_ref01_ent = client.Auth();
        const auth_ref01_match_dt0 = {};
        const auth_ref01_data_dt0 = (await auth_ref01_ent.load(auth_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != auth_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/auth/AuthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SlackSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['auth01', 'auth02', 'auth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SLACK_TEST_AUTH_ENTID': idmap,
        'SLACK_TEST_LIVE': 'FALSE',
        'SLACK_TEST_EXPLAIN': 'FALSE',
        'SLACK_APIKEY': '',
    });
    idmap = env['SLACK_TEST_AUTH_ENTID'];
    const live = 'TRUE' === env.SLACK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SLACK_TEST_AUTH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.SlackSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.SLACK_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.SLACK_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AuthEntity.test.js.map