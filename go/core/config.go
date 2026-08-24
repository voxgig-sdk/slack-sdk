package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Slack",
			"slug": "slack",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://slack.com/api",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"conversationsinfo": map[string]any{},
				"conversationslist": map[string]any{},
			},
		},
		"entity": map[string]any{
			"conversationsinfo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_channel",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_private",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "purpose",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "topic",
						"type": "`$OBJECT`",
					},
				},
				"name": "conversationsinfo",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.info",
								"parts": []any{
									"conversations.info",
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.channel`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversationslist": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_channel",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_private",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "purpose",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "topic",
						"type": "`$OBJECT`",
					},
				},
				"name": "conversationslist",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.list",
								"parts": []any{
									"conversations.list",
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.channels`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
