"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Slack',
        slug: "slack",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            }
        },
    };
    options = {
        base: "https://slack.com/api",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            channel: {},
        }
    };
    entity = {
        "channel": {
            "fields": [
                {
                    "name": "created",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "is_archived",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_channel",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_private",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "num_members",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "purpose",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "topic",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "channel",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations.list",
                            "parts": [
                                "conversations.list"
                            ],
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.channels`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "channel",
                                        "orig": "channel",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/conversations.info",
                            "parts": [
                                "conversations.info"
                            ],
                            "select": {
                                "exist": [
                                    "channel"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.channel`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map