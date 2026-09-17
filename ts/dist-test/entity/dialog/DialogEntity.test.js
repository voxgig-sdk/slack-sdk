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
(0, node_test_1.describe)('DialogEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SLACK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SLACK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SlackSDK.test();
        const ent = testsdk.Dialog();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SLACK_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dialog.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "ok", "req": true, "type": "`$BOOLEAN`", "index$": 0 }], "name": "dialog", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "token", "orig": "token", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "dialog", "orig": "dialog", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "trigger_id", "orig": "trigger_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /dialog.open", "json": "{\"consumes\":[\"application/x-www-form-urlencoded\",\"application/json\"],\"operationId\":\"dialog_open\",\"parameters\":[{\"description\":\"Authentication token. Requires scope: `none`\",\"in\":\"header\",\"name\":\"token\",\"required\":true,\"type\":\"string\"},{\"description\":\"The dialog definition. This must be a JSON-encoded string.\",\"in\":\"query\",\"name\":\"dialog\",\"required\":true,\"type\":\"string\"},{\"description\":\"Exchange a trigger to post to the user.\",\"in\":\"query\",\"name\":\"trigger_id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Typical success response is quite minimal.\",\"examples\":{\"application/json\":{\"ok\":true}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for successful response from dialog.open method\",\"properties\":{\"ok\":{\"enum\":[true],\"title\":\"default success response\",\"type\":\"boolean\"}},\"required\":[\"ok\"],\"title\":\"dialog.open schema\",\"type\":\"object\"}},\"default\":{\"description\":\"Typical error response, before getting to any possible validation errors.\",\"examples\":{\"application/json\":{\"error\":\"missing_trigger\",\"ok\":false}},\"schema\":{\"additionalProperties\":false,\"description\":\"Schema for error response from dialog.open method\",\"properties\":{\"callstack\":{\"description\":\"Note: PHP callstack is only visible in dev/qa\",\"type\":\"string\"},\"error\":{\"enum\":[\"validation_errors\",\"missing_trigger\",\"missing_dialog\",\"trigger_exchanged\",\"trigger_expired\",\"invalid_trigger\",\"app_missing_action_url\",\"cannot_create_dialog\",\"failed_sending_dialog\",\"not_authed\",\"invalid_auth\",\"account_inactive\",\"token_revoked\",\"no_permission\",\"org_login_required\",\"invalid_arg_name\",\"invalid_array_arg\",\"invalid_charset\",\"invalid_form_data\",\"invalid_post_type\",\"missing_post_type\",\"team_added_to_org\",\"invalid_json\",\"json_not_object\",\"request_timeout\",\"upgrade_required\",\"fatal_error\"],\"type\":\"string\"},\"ok\":{\"enum\":[false],\"title\":\"default failure response\",\"type\":\"boolean\"}},\"required\":[\"ok\",\"error\"],\"title\":\"dialog.open error schema\",\"type\":\"object\"}}},\"security\":[{\"slackAuth\":[\"none\"]}],\"securitySchemes\":{\"slackAuth\":{\"authorizationUrl\":\"https://slack.com/oauth/authorize\",\"flow\":\"accessCode\",\"scopes\":{\"admin\":\"admin\",\"admin.apps:read\":\"admin.apps:read\",\"admin.apps:write\":\"admin.apps:write\",\"admin.conversations:read\":\"admin.conversations:read\",\"admin.conversations:write\":\"admin.conversations:write\",\"admin.invites:read\":\"admin.invites:read\",\"admin.invites:write\":\"admin.invites:write\",\"admin.teams:read\":\"admin.teams:read\",\"admin.teams:write\":\"admin.teams:write\",\"admin.usergroups:read\":\"admin.usergroups:read\",\"admin.usergroups:write\":\"admin.usergroups:write\",\"admin.users:read\":\"admin.users:read\",\"admin.users:write\":\"admin.users:write\",\"authorizations:read\":\"authorizations:read\",\"bot\":\"Bot user scope\",\"calls:read\":\"calls:read\",\"calls:write\":\"calls:write\",\"channels:history\":\"channels:history\",\"channels:manage\":\"channels:manage\",\"channels:read\":\"channels:read\",\"channels:write\":\"channels:write\",\"chat:write\":\"chat:write\",\"chat:write:bot\":\"Author messages as a bot\",\"chat:write:user\":\"Author messages as a user\",\"conversations:history\":\"conversations:history\",\"conversations:read\":\"conversations:read\",\"conversations:write\":\"conversations:write\",\"dnd:read\":\"dnd:read\",\"dnd:write\":\"dnd:write\",\"emoji:read\":\"emoji:read\",\"files:read\":\"files:read\",\"files:write:user\":\"files:write:user\",\"groups:history\":\"groups:history\",\"groups:read\":\"groups:read\",\"groups:write\":\"groups:write\",\"identity.basic\":\"identity.basic\",\"im:history\":\"im:history\",\"im:read\":\"im:read\",\"im:write\":\"im:write\",\"links:write\":\"links:write\",\"mpim:history\":\"mpim:history\",\"mpim:read\":\"mpim:read\",\"mpim:write\":\"mpim:write\",\"none\":\"No scope required\",\"pins:read\":\"pins:read\",\"pins:write\":\"pins:write\",\"reactions:read\":\"reactions:read\",\"reactions:write\":\"reactions:write\",\"reminders:read\":\"reminders:read\",\"reminders:write\":\"reminders:write\",\"remote_files:read\":\"remote_files:read\",\"remote_files:share\":\"remote_files:share\",\"remote_files:write\":\"remote_files:write\",\"rtm:stream\":\"rtm:stream\",\"search:read\":\"search:read\",\"stars:read\":\"stars:read\",\"stars:write\":\"stars:write\",\"team:read\":\"team:read\",\"tokens.basic\":\"tokens.basic\",\"usergroups:read\":\"usergroups:read\",\"usergroups:write\":\"usergroups:write\",\"users.profile:read\":\"users.profile:read\",\"users.profile:write\":\"users.profile:write\",\"users:read\":\"users:read\",\"users:read.email\":\"users:read.email\",\"users:write\":\"users:write\",\"workflow.steps:execute\":\"workflow.steps:execute\"},\"tokenUrl\":\"https://slack.com/api/oauth.access\",\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/dialog.open", "segments": [{ "lit": "dialog.open" }], "select": { "exist": ["dialog", "token", "trigger_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dialog", "name__orig": "dialog", "Name": "Dialog", "name_": "dialog", "name-": "dialog", "NAME": "DIALOG", "index$": 32 }, { "active": true, "entity": "dialog", "key$": "BasicDialogFlow", "kind": "basic", "name": "BasicDialogFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "dialog_ref01", "srcdatavar": "dialog_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dialog_ref01" } }], "index$": 0 }] }, 'Dialog');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let dialog_ref01_data = Object.values(setup.data.existing.dialog)[0];
        // LOAD
        const dialog_ref01_ent = client.Dialog();
        const dialog_ref01_match_dt0 = {};
        const dialog_ref01_data_dt0 = (await dialog_ref01_ent.load(dialog_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != dialog_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dialog/DialogTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SlackSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dialog01', 'dialog02', 'dialog03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SLACK_TEST_DIALOG_ENTID': idmap,
        'SLACK_TEST_LIVE': 'FALSE',
        'SLACK_TEST_EXPLAIN': 'FALSE',
        'SLACK_APIKEY': '',
    });
    idmap = env['SLACK_TEST_DIALOG_ENTID'];
    const live = 'TRUE' === env.SLACK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SLACK_TEST_DIALOG_ENTID'];
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
//# sourceMappingURL=DialogEntity.test.js.map