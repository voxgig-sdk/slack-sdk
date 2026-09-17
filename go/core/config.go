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
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
				"adminapp": map[string]any{},
				"adminappsapproved": map[string]any{},
				"adminappsrequest": map[string]any{},
				"adminappsrestricted": map[string]any{},
				"adminconversation": map[string]any{},
				"adminconversationsekm": map[string]any{},
				"adminconversationsrestrict_access": map[string]any{},
				"adminemoji": map[string]any{},
				"admininvite_request": map[string]any{},
				"admininvite_requestsapproved": map[string]any{},
				"admininvite_requestsdenied": map[string]any{},
				"adminteam": map[string]any{},
				"adminteamsadmin": map[string]any{},
				"adminteamsowner": map[string]any{},
				"adminteamssetting": map[string]any{},
				"adminuser": map[string]any{},
				"adminusergroup": map[string]any{},
				"adminuserssession": map[string]any{},
				"api": map[string]any{},
				"app": map[string]any{},
				"appseventauthorization": map[string]any{},
				"appspermission": map[string]any{},
				"appspermissionsresource": map[string]any{},
				"appspermissionsscope": map[string]any{},
				"appspermissionsuser": map[string]any{},
				"auth": map[string]any{},
				"bot": map[string]any{},
				"call": map[string]any{},
				"callsparticipant": map[string]any{},
				"chat": map[string]any{},
				"chatscheduled_message": map[string]any{},
				"conversation": map[string]any{},
				"dialog": map[string]any{},
				"dnd": map[string]any{},
				"emoji": map[string]any{},
				"file": map[string]any{},
				"filescomment": map[string]any{},
				"filesremote": map[string]any{},
				"migration": map[string]any{},
				"oauth": map[string]any{},
				"oauthv2": map[string]any{},
				"pin": map[string]any{},
				"reaction": map[string]any{},
				"reminder": map[string]any{},
				"rtm": map[string]any{},
				"search": map[string]any{},
				"star": map[string]any{},
				"team": map[string]any{},
				"teamprofile": map[string]any{},
				"user": map[string]any{},
				"usergroup": map[string]any{},
				"usergroupsuser": map[string]any{},
				"usersprofile": map[string]any{},
				"view": map[string]any{},
				"workflow": map[string]any{},
			},
		},
		"entity": map[string]any{
			"adminapp": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminapp",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "request_id",
											"orig": "request_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.apps.approve",
								"segments": []any{
									map[string]any{
										"lit": "admin.apps.approve",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"request_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.apps.approve",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "request_id",
											"orig": "request_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.apps.restrict",
								"segments": []any{
									map[string]any{
										"lit": "admin.apps.restrict",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"request_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.apps.restrict",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminappsapproved": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminappsapproved",
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
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "enterprise_id",
											"orig": "enterprise_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.apps.approved.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.apps.approved.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"enterprise_id",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.apps.approved.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminappsrequest": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminappsrequest",
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
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.apps.requests.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.apps.requests.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.apps.requests.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminappsrestricted": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminappsrestricted",
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
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "enterprise_id",
											"orig": "enterprise_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.apps.restricted.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.apps.restricted.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"enterprise_id",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.apps.restricted.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminconversation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accepted_user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "can_thread",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "channel_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "creator",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_channel",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_frozen",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_general",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_member",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_moved",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_mpim",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_non_threadable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_org_shared",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_pending_ext_shared",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_private",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_read_only",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_shared",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_thread_only",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_read",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latest",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "members",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_normalized",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pending_shared",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "previous_names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "priority",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "purpose",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response_metadata",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team_ids",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "topic",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "unlinked",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "unread_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "unread_count_display",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "who_can_post",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "adminconversation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "is_private",
											"orig": "is_private",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "org_wide",
											"orig": "org_wide",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.create",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.create",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"description",
										"is_private",
										"name",
										"org_wide",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.create",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "org_channel",
											"orig": "org_channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "target_team_id",
											"orig": "target_team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.setTeams",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.setTeams",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"org_channel",
										"target_team_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.setTeams",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "leaving_team_id",
											"orig": "leaving_team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.disconnectShared",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.disconnectShared",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"leaving_team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.disconnectShared",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.rename",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.rename",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.rename",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pref",
											"orig": "pref",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.setConversationPrefs",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.setConversationPrefs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"pref",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.setConversationPrefs",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.invite",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.invite",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.invite",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.archive",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.archive",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.archive",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.convertToPrivate",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.convertToPrivate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.convertToPrivate",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.delete",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.delete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.delete",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.unarchive",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.unarchive",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.unarchive",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "search_channel_type",
											"orig": "search_channel_type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_dir",
											"orig": "sort_dir",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.conversations.search",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.search",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"query",
										"search_channel_type",
										"sort",
										"sort_dir",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.channels`",
								},
								"parts": []any{
									"admin.conversations.search",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
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
								"orig": "/admin.conversations.getTeams",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.getTeams",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"cursor",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.getTeams",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.conversations.getConversationPrefs",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.getConversationPrefs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.prefs`",
								},
								"parts": []any{
									"admin.conversations.getConversationPrefs",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminconversationsekm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminconversationsekm",
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
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.conversations.ekm.listOriginalConnectedChannelInfo",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.ekm.listOriginalConnectedChannelInfo",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.ekm.listOriginalConnectedChannelInfo",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminconversationsrestrict_access": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminconversationsrestrict_access",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.restrictAccess.addGroup",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.restrictAccess.addGroup",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"group_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.restrictAccess.addGroup",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.conversations.restrictAccess.removeGroup",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.restrictAccess.removeGroup",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"group_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.restrictAccess.removeGroup",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.conversations.restrictAccess.listGroups",
								"segments": []any{
									map[string]any{
										"lit": "admin.conversations.restrictAccess.listGroups",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.conversations.restrictAccess.listGroups",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminemoji": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminemoji",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "alias_for",
											"orig": "alias_for",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.emoji.addAlias",
								"segments": []any{
									map[string]any{
										"lit": "admin.emoji.addAlias",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"alias_for",
										"name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.emoji.addAlias",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "new_name",
											"orig": "new_name",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.emoji.rename",
								"segments": []any{
									map[string]any{
										"lit": "admin.emoji.rename",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"new_name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.emoji.rename",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.emoji.add",
								"segments": []any{
									map[string]any{
										"lit": "admin.emoji.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"token",
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.emoji.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.emoji.remove",
								"segments": []any{
									map[string]any{
										"lit": "admin.emoji.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.emoji.remove",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.emoji.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.emoji.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.emoji.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"admininvite_request": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "admininvite_request",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "invite_request_id",
											"orig": "invite_request_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.inviteRequests.approve",
								"segments": []any{
									map[string]any{
										"lit": "admin.inviteRequests.approve",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"invite_request_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.inviteRequests.approve",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "invite_request_id",
											"orig": "invite_request_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.inviteRequests.deny",
								"segments": []any{
									map[string]any{
										"lit": "admin.inviteRequests.deny",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"invite_request_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.inviteRequests.deny",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.inviteRequests.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.inviteRequests.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.inviteRequests.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"admininvite_requestsapproved": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "admininvite_requestsapproved",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.inviteRequests.approved.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.inviteRequests.approved.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.inviteRequests.approved.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"admininvite_requestsdenied": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "admininvite_requestsdenied",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.inviteRequests.denied.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.inviteRequests.denied.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.inviteRequests.denied.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminteam": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminteam",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team_description",
											"orig": "team_description",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_discoverability",
											"orig": "team_discoverability",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_domain",
											"orig": "team_domain",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_name",
											"orig": "team_name",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.teams.create",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.create",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_description",
										"team_discoverability",
										"team_domain",
										"team_name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.create",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
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
								"orig": "/admin.teams.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminteamsadmin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminteamsadmin",
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
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.teams.admins.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.admins.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.admins.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminteamsowner": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminteamsowner",
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
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.teams.owners.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.owners.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.owners.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminteamssetting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminteamssetting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.teams.settings.setDefaultChannels",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.settings.setDefaultChannels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.settings.setDefaultChannels",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.teams.settings.setDescription",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.settings.setDescription",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"description",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.settings.setDescription",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "discoverability",
											"orig": "discoverability",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.teams.settings.setDiscoverability",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.settings.setDiscoverability",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"discoverability",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.settings.setDiscoverability",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "image_url",
											"orig": "image_url",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.teams.settings.setIcon",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.settings.setIcon",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"image_url",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.settings.setIcon",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.teams.settings.setName",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.settings.setName",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.settings.setName",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.teams.settings.info",
								"segments": []any{
									map[string]any{
										"lit": "admin.teams.settings.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.teams.settings.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminuser": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminuser",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "custom_message",
											"orig": "custom_message",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "email",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "guest_expiration_t",
											"orig": "guest_expiration_t",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "is_restricted",
											"orig": "is_restricted",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "is_ultra_restricted",
											"orig": "is_ultra_restricted",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "real_name",
											"orig": "real_name",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "resend",
											"orig": "resend",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.invite",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.invite",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"custom_message",
										"email",
										"guest_expiration_t",
										"is_restricted",
										"is_ultra_restricted",
										"real_name",
										"resend",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.invite",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "is_restricted",
											"orig": "is_restricted",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "is_ultra_restricted",
											"orig": "is_ultra_restricted",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.assign",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.assign",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"is_restricted",
										"is_ultra_restricted",
										"team_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.assign",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "expiration_t",
											"orig": "expiration_t",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.setExpiration",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.setExpiration",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"expiration_t",
										"team_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.setExpiration",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.remove",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.remove",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.setAdmin",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.setAdmin",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.setAdmin",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.setOwner",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.setOwner",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.setOwner",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.setRegular",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.setRegular",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"token",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.setRegular",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.users.list",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminusergroup": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminusergroup",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "auto_provision",
											"orig": "auto_provision",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup_id",
											"orig": "usergroup_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.usergroups.addTeams",
								"segments": []any{
									map[string]any{
										"lit": "admin.usergroups.addTeams",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"auto_provision",
										"team_id",
										"token",
										"usergroup_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.usergroups.addTeams",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup_id",
											"orig": "usergroup_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.usergroups.addChannels",
								"segments": []any{
									map[string]any{
										"lit": "admin.usergroups.addChannels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"team_id",
										"token",
										"usergroup_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.usergroups.addChannels",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel_id",
											"orig": "channel_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup_id",
											"orig": "usergroup_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.usergroups.removeChannels",
								"segments": []any{
									map[string]any{
										"lit": "admin.usergroups.removeChannels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel_id",
										"token",
										"usergroup_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.usergroups.removeChannels",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_num_member",
											"orig": "include_num_member",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup_id",
											"orig": "usergroup_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/admin.usergroups.listChannels",
								"segments": []any{
									map[string]any{
										"lit": "admin.usergroups.listChannels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_num_member",
										"team_id",
										"token",
										"usergroup_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.usergroups.listChannels",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"adminuserssession": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "adminuserssession",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "mobile_only",
											"orig": "mobile_only",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "web_only",
											"orig": "web_only",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.session.reset",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.session.reset",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"mobile_only",
										"token",
										"user_id",
										"web_only",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.session.reset",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "session_id",
											"orig": "session_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/admin.users.session.invalidate",
								"segments": []any{
									map[string]any{
										"lit": "admin.users.session.invalidate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"session_id",
										"team_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"admin.users.session.invalidate",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "api",
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
											"name": "error",
											"orig": "error",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "foo",
											"orig": "foo",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api.test",
								"segments": []any{
									map[string]any{
										"lit": "api.test",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"error",
										"foo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api.test",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"app": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "app",
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
											"name": "client_id",
											"orig": "client_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "client_secret",
											"orig": "client_secret",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.uninstall",
								"segments": []any{
									map[string]any{
										"lit": "apps.uninstall",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_id",
										"client_secret",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"apps.uninstall",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"appseventauthorization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "appseventauthorization",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "event_context",
											"orig": "event_context",
											"reqd": true,
											"type": "`$ANY`",
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
								"orig": "/apps.event.authorizations.list",
								"segments": []any{
									map[string]any{
										"lit": "apps.event.authorizations.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"event_context",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"apps.event.authorizations.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"appspermission": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_home",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "channel",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "group",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "im",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mpim",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "team",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "appspermission",
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
											"name": "scope",
											"orig": "scope",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.permissions.request",
								"segments": []any{
									map[string]any{
										"lit": "apps.permissions.request",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scope",
										"token",
										"trigger_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"apps.permissions.request",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.permissions.info",
								"segments": []any{
									map[string]any{
										"lit": "apps.permissions.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.info`",
								},
								"parts": []any{
									"apps.permissions.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"appspermissionsresource": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "appspermissionsresource",
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.permissions.resources.list",
								"segments": []any{
									map[string]any{
										"lit": "apps.permissions.resources.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"apps.permissions.resources.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"appspermissionsscope": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_home",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "channel",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "im",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mpim",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "team",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "user",
						"type": "`$ARRAY`",
					},
				},
				"name": "appspermissionsscope",
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
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.permissions.scopes.list",
								"segments": []any{
									map[string]any{
										"lit": "apps.permissions.scopes.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.scopes`",
								},
								"parts": []any{
									"apps.permissions.scopes.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"appspermissionsuser": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "appspermissionsuser",
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
											"name": "scope",
											"orig": "scope",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.permissions.users.request",
								"segments": []any{
									map[string]any{
										"lit": "apps.permissions.users.request",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scope",
										"token",
										"trigger_id",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"apps.permissions.users.request",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/apps.permissions.users.list",
								"segments": []any{
									map[string]any{
										"lit": "apps.permissions.users.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"apps.permissions.users.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"auth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bot_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_enterprise_install",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "revoked",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "team",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "auth",
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
											"name": "test",
											"orig": "test",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/auth.revoke",
								"segments": []any{
									map[string]any{
										"lit": "auth.revoke",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"test",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"auth.revoke",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/auth.test",
								"segments": []any{
									map[string]any{
										"lit": "auth.test",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"auth.test",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deleted",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icons",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bot",
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
											"name": "bot",
											"orig": "bot",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/bots.info",
								"segments": []any{
									map[string]any{
										"lit": "bots.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"bot",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.bot`",
								},
								"parts": []any{
									"bots.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"call": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "call",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "created_by",
											"orig": "created_by",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "date_start",
											"orig": "date_start",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "desktop_app_join_url",
											"orig": "desktop_app_join_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_display_id",
											"orig": "external_display_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_unique_id",
											"orig": "external_unique_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "join_url",
											"orig": "join_url",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/calls.add",
								"segments": []any{
									map[string]any{
										"lit": "calls.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"created_by",
										"date_start",
										"desktop_app_join_url",
										"external_display_id",
										"external_unique_id",
										"join_url",
										"title",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "desktop_app_join_url",
											"orig": "desktop_app_join_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "join_url",
											"orig": "join_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/calls.update",
								"segments": []any{
									map[string]any{
										"lit": "calls.update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"desktop_app_join_url",
										"id",
										"join_url",
										"title",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls.update",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "duration",
											"orig": "duration",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/calls.end",
								"segments": []any{
									map[string]any{
										"lit": "calls.end",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"duration",
										"id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls.end",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/calls.info",
								"segments": []any{
									map[string]any{
										"lit": "calls.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"callsparticipant": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "callsparticipant",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/calls.participants.add",
								"segments": []any{
									map[string]any{
										"lit": "calls.participants.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls.participants.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/calls.participants.remove",
								"segments": []any{
									map[string]any{
										"lit": "calls.participants.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"calls.participants.remove",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chat": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "blocks",
						"short": "This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "bot_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bot_profile",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "channel",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "client_msg_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "comment",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "display_as_bot",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "file",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "files",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "icons",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "inviter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_delayed_message",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_intro",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_starred",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_read",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latest_reply",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message_ts",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "old_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "permalink",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pinned_to",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "purpose",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reply_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reply_users",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reply_users_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source_team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subtype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thread_ts",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ts",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unread_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "upload",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "user",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_profile",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user_team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
				},
				"name": "chat",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "as_user",
											"orig": "as_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "block",
											"orig": "block",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "icon_emoji",
											"orig": "icon_emoji",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "icon_url",
											"orig": "icon_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "link_name",
											"orig": "link_name",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "mrkdwn",
											"orig": "mrkdwn",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "parse",
											"orig": "parse",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "reply_broadcast",
											"orig": "reply_broadcast",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "thread_t",
											"orig": "thread_t",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "unfurl_link",
											"orig": "unfurl_link",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "unfurl_media",
											"orig": "unfurl_media",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.postMessage",
								"segments": []any{
									map[string]any{
										"lit": "chat.postMessage",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"as_user",
										"attachment",
										"block",
										"channel",
										"icon_emoji",
										"icon_url",
										"link_name",
										"mrkdwn",
										"parse",
										"reply_broadcast",
										"text",
										"thread_t",
										"token",
										"unfurl_link",
										"unfurl_media",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
								"parts": []any{
									"chat.postMessage",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "as_user",
											"orig": "as_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "block",
											"orig": "block",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "icon_emoji",
											"orig": "icon_emoji",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "icon_url",
											"orig": "icon_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "link_name",
											"orig": "link_name",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "parse",
											"orig": "parse",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "thread_t",
											"orig": "thread_t",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.postEphemeral",
								"segments": []any{
									map[string]any{
										"lit": "chat.postEphemeral",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"as_user",
										"attachment",
										"block",
										"channel",
										"icon_emoji",
										"icon_url",
										"link_name",
										"parse",
										"text",
										"thread_t",
										"token",
										"user",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.postEphemeral",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "as_user",
											"orig": "as_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "block",
											"orig": "block",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "link_name",
											"orig": "link_name",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "parse",
											"orig": "parse",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "post_at",
											"orig": "post_at",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "reply_broadcast",
											"orig": "reply_broadcast",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "thread_t",
											"orig": "thread_t",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "unfurl_link",
											"orig": "unfurl_link",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "unfurl_media",
											"orig": "unfurl_media",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.scheduleMessage",
								"segments": []any{
									map[string]any{
										"lit": "chat.scheduleMessage",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"as_user",
										"attachment",
										"block",
										"channel",
										"link_name",
										"parse",
										"post_at",
										"reply_broadcast",
										"text",
										"thread_t",
										"token",
										"unfurl_link",
										"unfurl_media",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
								"parts": []any{
									"chat.scheduleMessage",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "as_user",
											"orig": "as_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "block",
											"orig": "block",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "link_name",
											"orig": "link_name",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "parse",
											"orig": "parse",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts",
											"orig": "ts",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.update",
								"segments": []any{
									map[string]any{
										"lit": "chat.update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"as_user",
										"attachment",
										"block",
										"channel",
										"link_name",
										"parse",
										"text",
										"token",
										"ts",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
								"parts": []any{
									"chat.update",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts",
											"orig": "ts",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "unfurl",
											"orig": "unfurl",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_auth_message",
											"orig": "user_auth_message",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_auth_required",
											"orig": "user_auth_required",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_auth_url",
											"orig": "user_auth_url",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.unfurl",
								"segments": []any{
									map[string]any{
										"lit": "chat.unfurl",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
										"ts",
										"unfurl",
										"user_auth_message",
										"user_auth_required",
										"user_auth_url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.unfurl",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "as_user",
											"orig": "as_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "scheduled_message_id",
											"orig": "scheduled_message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.deleteScheduledMessage",
								"segments": []any{
									map[string]any{
										"lit": "chat.deleteScheduledMessage",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"as_user",
										"channel",
										"scheduled_message_id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.deleteScheduledMessage",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "as_user",
											"orig": "as_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts",
											"orig": "ts",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.delete",
								"segments": []any{
									map[string]any{
										"lit": "chat.delete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"as_user",
										"channel",
										"token",
										"ts",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.delete",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/chat.meMessage",
								"segments": []any{
									map[string]any{
										"lit": "chat.meMessage",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"text",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.meMessage",
								},
							},
						},
					},
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "message_t",
											"orig": "message_t",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/chat.getPermalink",
								"segments": []any{
									map[string]any{
										"lit": "chat.getPermalink",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"message_t",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.getPermalink",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chatscheduled_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channel_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_created",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "post_at",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "text",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "chatscheduled_message",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "latest",
											"orig": "latest",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "oldest",
											"orig": "oldest",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/chat.scheduledMessages.list",
								"segments": []any{
									map[string]any{
										"lit": "chat.scheduledMessages.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"cursor",
										"latest",
										"limit",
										"oldest",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"chat.scheduledMessages.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "already_closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "already_open",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "attachments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "blocks",
						"short": "This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "bot_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bot_profile",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "channel",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "channels",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "client_msg_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "comment",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "display_as_bot",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "file",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "files",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "has_more",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icons",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "inviter",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_delayed_message",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_intro",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_starred",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_read",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "latest_reply",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "members",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "messages",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "no_op",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "not_in_channel",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "old_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "permalink",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pinned_to",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "purpose",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reply_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reply_users",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reply_users_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "response_metadata",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "source_team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subtype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thread_ts",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "topic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ts",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unread_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "upload",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_profile",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user_team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "warning",
						"type": "`$STRING`",
					},
				},
				"name": "conversation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "return_im",
											"orig": "return_im",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.open",
								"segments": []any{
									map[string]any{
										"lit": "conversations.open",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"return_im",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.open",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.rename",
								"segments": []any{
									map[string]any{
										"lit": "conversations.rename",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.rename",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "purpose",
											"orig": "purpose",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.setPurpose",
								"segments": []any{
									map[string]any{
										"lit": "conversations.setPurpose",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"purpose",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.setPurpose",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "topic",
											"orig": "topic",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.setTopic",
								"segments": []any{
									map[string]any{
										"lit": "conversations.setTopic",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
										"topic",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.setTopic",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts",
											"orig": "ts",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.mark",
								"segments": []any{
									map[string]any{
										"lit": "conversations.mark",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
										"ts",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.mark",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.invite",
								"segments": []any{
									map[string]any{
										"lit": "conversations.invite",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.invite",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.kick",
								"segments": []any{
									map[string]any{
										"lit": "conversations.kick",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.kick",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "is_private",
											"orig": "is_private",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.create",
								"segments": []any{
									map[string]any{
										"lit": "conversations.create",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"is_private",
										"name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.create",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.archive",
								"segments": []any{
									map[string]any{
										"lit": "conversations.archive",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.archive",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.close",
								"segments": []any{
									map[string]any{
										"lit": "conversations.close",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.close",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.join",
								"segments": []any{
									map[string]any{
										"lit": "conversations.join",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.join",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.leave",
								"segments": []any{
									map[string]any{
										"lit": "conversations.leave",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.leave",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/conversations.unarchive",
								"segments": []any{
									map[string]any{
										"lit": "conversations.unarchive",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.unarchive",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "inclusive",
											"orig": "inclusive",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "latest",
											"orig": "latest",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "oldest",
											"orig": "oldest",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts",
											"orig": "ts",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.replies",
								"segments": []any{
									map[string]any{
										"lit": "conversations.replies",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"cursor",
										"inclusive",
										"latest",
										"limit",
										"oldest",
										"token",
										"ts",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"conversations.replies",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "inclusive",
											"orig": "inclusive",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "latest",
											"orig": "latest",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "oldest",
											"orig": "oldest",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.history",
								"segments": []any{
									map[string]any{
										"lit": "conversations.history",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"cursor",
										"inclusive",
										"latest",
										"limit",
										"oldest",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.history",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude_archived",
											"orig": "exclude_archived",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.list",
								"segments": []any{
									map[string]any{
										"lit": "conversations.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"exclude_archived",
										"limit",
										"token",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.list",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.members",
								"segments": []any{
									map[string]any{
										"lit": "conversations.members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"cursor",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.members",
								},
							},
						},
					},
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_locale",
											"orig": "include_locale",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_num_member",
											"orig": "include_num_member",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/conversations.info",
								"segments": []any{
									map[string]any{
										"lit": "conversations.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"include_locale",
										"include_num_member",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"conversations.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dialog": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "dialog",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "dialog",
											"orig": "dialog",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dialog.open",
								"segments": []any{
									map[string]any{
										"lit": "dialog.open",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dialog",
										"token",
										"trigger_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dialog.open",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dnd": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dnd_enabled",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "next_dnd_end_ts",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "next_dnd_start_ts",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "snooze_enabled",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "snooze_endtime",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "snooze_remaining",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"type": "`$INTEGER`",
					},
				},
				"name": "dnd",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "num_minute",
											"orig": "num_minute",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/dnd.setSnooze",
								"segments": []any{
									map[string]any{
										"lit": "dnd.setSnooze",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"num_minute",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dnd.setSnooze",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/dnd.endDnd",
								"segments": []any{
									map[string]any{
										"lit": "dnd.endDnd",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dnd.endDnd",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/dnd.endSnooze",
								"segments": []any{
									map[string]any{
										"lit": "dnd.endSnooze",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dnd.endSnooze",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dnd.info",
								"segments": []any{
									map[string]any{
										"lit": "dnd.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dnd.info",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dnd.teamInfo",
								"segments": []any{
									map[string]any{
										"lit": "dnd.teamInfo",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"dnd.teamInfo",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"emoji": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "emoji",
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
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/emoji.list",
								"segments": []any{
									map[string]any{
										"lit": "emoji.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"emoji.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "comments",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "comments_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "content_html",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_delete",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "display_as_bot",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "editable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "editor",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "external_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "file",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "filetype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "groups",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "has_rich_preview",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_exif_rotation",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ims",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "is_external",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_public",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_starred",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_tombstoned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "last_editor",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mimetype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "non_owner_editable",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "num_stars",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "original_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "original_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "paging",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "uri",
						"name": "permalink",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "permalink_public",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pinned_info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pinned_to",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pretty_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preview",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "public_url_shared",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "reactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "response_metadata",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "shares",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "size",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "source_team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_1024",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumb_1024_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_1024_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_160",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_360",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumb_360_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_360_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_480",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumb_480_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_480_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_64",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_720",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumb_720_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_720_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_80",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_800",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumb_800_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_800_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumb_960",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumb_960_h",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_960_w",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "thumb_tiny",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "url_private",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "url_private_download",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "content",
											"orig": "content",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "filename",
											"orig": "filename",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "filetype",
											"orig": "filetype",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "initial_comment",
											"orig": "initial_comment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "thread_t",
											"orig": "thread_t",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.upload",
								"segments": []any{
									map[string]any{
										"lit": "files.upload",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"content",
										"file",
										"filename",
										"filetype",
										"initial_comment",
										"thread_t",
										"title",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.file`",
								},
								"parts": []any{
									"files.upload",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.delete",
								"segments": []any{
									map[string]any{
										"lit": "files.delete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.delete",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.revokePublicURL",
								"segments": []any{
									map[string]any{
										"lit": "files.revokePublicURL",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.file`",
								},
								"parts": []any{
									"files.revokePublicURL",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.sharedPublicURL",
								"segments": []any{
									map[string]any{
										"lit": "files.sharedPublicURL",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.file`",
								},
								"parts": []any{
									"files.sharedPublicURL",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "show_files_hidden_by_limit",
											"orig": "show_files_hidden_by_limit",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts_from",
											"orig": "ts_from",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts_to",
											"orig": "ts_to",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files.list",
								"segments": []any{
									map[string]any{
										"lit": "files.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"count",
										"page",
										"show_files_hidden_by_limit",
										"token",
										"ts_from",
										"ts_to",
										"type",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.list",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files.info",
								"segments": []any{
									map[string]any{
										"lit": "files.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"cursor",
										"file",
										"limit",
										"page",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.file`",
								},
								"parts": []any{
									"files.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"filescomment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "filescomment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.comments.delete",
								"segments": []any{
									map[string]any{
										"lit": "files.comments.delete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"id",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.comments.delete",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"filesremote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "filesremote",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_url",
											"orig": "external_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "filetype",
											"orig": "filetype",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "indexable_file_content",
											"orig": "indexable_file_content",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "preview_image",
											"orig": "preview_image",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.remote.update",
								"segments": []any{
									map[string]any{
										"lit": "files.remote.update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"external_url",
										"file",
										"filetype",
										"indexable_file_content",
										"preview_image",
										"title",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.remote.update",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_url",
											"orig": "external_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "filetype",
											"orig": "filetype",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "indexable_file_content",
											"orig": "indexable_file_content",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "preview_image",
											"orig": "preview_image",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.remote.add",
								"segments": []any{
									map[string]any{
										"lit": "files.remote.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"external_url",
										"filetype",
										"indexable_file_content",
										"preview_image",
										"title",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.remote.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/files.remote.remove",
								"segments": []any{
									map[string]any{
										"lit": "files.remote.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"file",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.remote.remove",
								},
							},
						},
					},
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts_from",
											"orig": "ts_from",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "ts_to",
											"orig": "ts_to",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files.remote.list",
								"segments": []any{
									map[string]any{
										"lit": "files.remote.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"cursor",
										"limit",
										"token",
										"ts_from",
										"ts_to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.remote.list",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files.remote.share",
								"segments": []any{
									map[string]any{
										"lit": "files.remote.share",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"external_id",
										"file",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.remote.share",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/files.remote.info",
								"segments": []any{
									map[string]any{
										"lit": "files.remote.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"file",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"files.remote.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"migration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enterprise_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "invalid_user_ids",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "team_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id_map",
						"type": "`$OBJECT`",
					},
				},
				"name": "migration",
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
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "to_old",
											"orig": "to_old",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/migration.exchange",
								"segments": []any{
									map[string]any{
										"lit": "migration.exchange",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"to_old",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"migration.exchange",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"oauth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "oauth",
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
											"name": "client_id",
											"orig": "client_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "client_secret",
											"orig": "client_secret",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "code",
											"orig": "code",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "redirect_uri",
											"orig": "redirect_uri",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "single_channel",
											"orig": "single_channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/oauth.access",
								"segments": []any{
									map[string]any{
										"lit": "oauth.access",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_id",
										"client_secret",
										"code",
										"redirect_uri",
										"single_channel",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"oauth.access",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "client_id",
											"orig": "client_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "client_secret",
											"orig": "client_secret",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "code",
											"orig": "code",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "redirect_uri",
											"orig": "redirect_uri",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "single_channel",
											"orig": "single_channel",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/oauth.token",
								"segments": []any{
									map[string]any{
										"lit": "oauth.token",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_id",
										"client_secret",
										"code",
										"redirect_uri",
										"single_channel",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"oauth.token",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"oauthv2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "oauthv2",
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
											"name": "client_id",
											"orig": "client_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "client_secret",
											"orig": "client_secret",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "code",
											"orig": "code",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "redirect_uri",
											"orig": "redirect_uri",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/oauth.v2.access",
								"segments": []any{
									map[string]any{
										"lit": "oauth.v2.access",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_id",
										"client_secret",
										"code",
										"redirect_uri",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"oauth.v2.access",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ok",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"type": "`$BOOLEAN`",
					},
				},
				"name": "pin",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/pins.add",
								"segments": []any{
									map[string]any{
										"lit": "pins.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pins.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/pins.remove",
								"segments": []any{
									map[string]any{
										"lit": "pins.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pins.remove",
								},
							},
						},
					},
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/pins.list",
								"segments": []any{
									map[string]any{
										"lit": "pins.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pins.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "file",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "items",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ok",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paging",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "response_metadata",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "reaction",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file_comment",
											"orig": "file_comment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/reactions.remove",
								"segments": []any{
									map[string]any{
										"lit": "reactions.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"file",
										"file_comment",
										"name",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reactions.remove",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/reactions.add",
								"segments": []any{
									map[string]any{
										"lit": "reactions.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"name",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reactions.add",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "full",
											"orig": "full",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/reactions.list",
								"segments": []any{
									map[string]any{
										"lit": "reactions.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"cursor",
										"full",
										"limit",
										"page",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reactions.list",
								},
							},
						},
					},
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file_comment",
											"orig": "file_comment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "full",
											"orig": "full",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/reactions.get",
								"segments": []any{
									map[string]any{
										"lit": "reactions.get",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"file",
										"file_comment",
										"full",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reactions.get",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reminder": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "complete_ts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "creator",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "recurring",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "time",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reminder",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "time",
											"orig": "time",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/reminders.add",
								"segments": []any{
									map[string]any{
										"lit": "reminders.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"text",
										"time",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reminder`",
								},
								"parts": []any{
									"reminders.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "reminder",
											"orig": "reminder",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/reminders.complete",
								"segments": []any{
									map[string]any{
										"lit": "reminders.complete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reminder",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reminders.complete",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "reminder",
											"orig": "reminder",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/reminders.delete",
								"segments": []any{
									map[string]any{
										"lit": "reminders.delete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reminder",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reminders.delete",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/reminders.list",
								"segments": []any{
									map[string]any{
										"lit": "reminders.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reminders`",
								},
								"parts": []any{
									"reminders.list",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "reminder",
											"orig": "reminder",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/reminders.info",
								"segments": []any{
									map[string]any{
										"lit": "reminders.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reminder",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reminder`",
								},
								"parts": []any{
									"reminders.info",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rtm": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "self",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "rtm",
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
											"name": "batch_presence_aware",
											"orig": "batch_presence_aware",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "presence_sub",
											"orig": "presence_sub",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/rtm.connect",
								"segments": []any{
									map[string]any{
										"lit": "rtm.connect",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_presence_aware",
										"presence_sub",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"rtm.connect",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "search",
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
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "highlight",
											"orig": "highlight",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_dir",
											"orig": "sort_dir",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search.messages",
								"segments": []any{
									map[string]any{
										"lit": "search.messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"highlight",
										"page",
										"query",
										"sort",
										"sort_dir",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"search.messages",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"star": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "items",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paging",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "star",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file_comment",
											"orig": "file_comment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/stars.add",
								"segments": []any{
									map[string]any{
										"lit": "stars.add",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"file",
										"file_comment",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"stars.add",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file",
											"orig": "file",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "file_comment",
											"orig": "file_comment",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/stars.remove",
								"segments": []any{
									map[string]any{
										"lit": "stars.remove",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"file",
										"file_comment",
										"timestamp",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"stars.remove",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/stars.list",
								"segments": []any{
									map[string]any{
										"lit": "stars.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"cursor",
										"limit",
										"page",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"stars.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin_app_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "app_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "app_type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "uri",
						"name": "avatar_base_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "change_type",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "channel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "count",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "country",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "created",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_create",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_first",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_last",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deleted",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "discoverable",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "domain",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email_domain",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enterprise_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enterprise_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_org_migrations",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "has_compliance_export",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "is_assigned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_enterprise",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "is_over_storage_limit",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "isp",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "limit_ts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "msg_edit_window_mins",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "over_integrations_limit",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "over_storage_limit",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "pay_prod_cur",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "primary_owner",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "region",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "scope",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sso_provider",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user_agent",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "team",
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
											"name": "app_id",
											"orig": "app_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "change_type",
											"orig": "change_type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "service_id",
											"orig": "service_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/team.integrationLogs",
								"segments": []any{
									map[string]any{
										"lit": "team.integrationLogs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"change_type",
										"count",
										"page",
										"service_id",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"team.integrationLogs",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "before",
											"orig": "before",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/team.accessLogs",
								"segments": []any{
									map[string]any{
										"lit": "team.accessLogs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"before",
										"count",
										"page",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"team.accessLogs",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "team",
											"orig": "team",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/team.info",
								"segments": []any{
									map[string]any{
										"lit": "team.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.team`",
								},
								"parts": []any{
									"team.info",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/team.billableInfo",
								"segments": []any{
									map[string]any{
										"lit": "team.billableInfo",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"team.billableInfo",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teamprofile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fields",
						"req": true,
						"type": "`$ARRAY`",
					},
				},
				"name": "teamprofile",
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
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "visibility",
											"orig": "visibility",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/team.profile.get",
								"segments": []any{
									map[string]any{
										"lit": "team.profile.get",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"visibility",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.profile`",
								},
								"parts": []any{
									"team.profile.get",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auto_away",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "avatar_hash",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cache_ts",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "channels",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "connection_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_1024",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_192",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_24",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_32",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_48",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_512",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_72",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "image_original",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_activity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manual_away",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "members",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ok",
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "online",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "presence",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "response_metadata",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ANY`",
							},
						},
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "user",
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"type": "`$ANY`",
					},
				},
				"name": "user",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "crop_w",
											"orig": "crop_w",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "crop_x",
											"orig": "crop_x",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "crop_y",
											"orig": "crop_y",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "image",
											"orig": "image",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/users.setPhoto",
								"segments": []any{
									map[string]any{
										"lit": "users.setPhoto",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"crop_w",
										"crop_x",
										"crop_y",
										"image",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.profile`",
								},
								"parts": []any{
									"users.setPhoto",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "presence",
											"orig": "presence",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/users.setPresence",
								"segments": []any{
									map[string]any{
										"lit": "users.setPresence",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"presence",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.setPresence",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/users.deletePhoto",
								"segments": []any{
									map[string]any{
										"lit": "users.deletePhoto",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.deletePhoto",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/users.setActive",
								"segments": []any{
									map[string]any{
										"lit": "users.setActive",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.setActive",
								},
							},
						},
					},
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
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "exclude_archived",
											"orig": "exclude_archived",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.conversations",
								"segments": []any{
									map[string]any{
										"lit": "users.conversations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"exclude_archived",
										"limit",
										"token",
										"type",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.conversations",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_locale",
											"orig": "include_locale",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.list",
								"segments": []any{
									map[string]any{
										"lit": "users.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"include_locale",
										"limit",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.list",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_locale",
											"orig": "include_locale",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.info",
								"segments": []any{
									map[string]any{
										"lit": "users.info",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_locale",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.user`",
								},
								"parts": []any{
									"users.info",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "email",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.lookupByEmail",
								"segments": []any{
									map[string]any{
										"lit": "users.lookupByEmail",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.user`",
								},
								"parts": []any{
									"users.lookupByEmail",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.getPresence",
								"segments": []any{
									map[string]any{
										"lit": "users.getPresence",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.getPresence",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.identity",
								"segments": []any{
									map[string]any{
										"lit": "users.identity",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users.identity",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usergroup": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auto_provision",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "auto_type",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "channel_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_by",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_create",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_delete",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_update",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deleted_by",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enterprise_subteam_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "handle",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_external",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_subteam",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_usergroup",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prefs",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "users",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "usergroup",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "handle",
											"orig": "handle",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup",
											"orig": "usergroup",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/usergroups.update",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"description",
										"handle",
										"include_count",
										"name",
										"token",
										"usergroup",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usergroup`",
								},
								"parts": []any{
									"usergroups.update",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "channel",
											"orig": "channel",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "handle",
											"orig": "handle",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/usergroups.create",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.create",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"description",
										"handle",
										"include_count",
										"name",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usergroup`",
								},
								"parts": []any{
									"usergroups.create",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup",
											"orig": "usergroup",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/usergroups.disable",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.disable",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_count",
										"token",
										"usergroup",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usergroup`",
								},
								"parts": []any{
									"usergroups.disable",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup",
											"orig": "usergroup",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/usergroups.enable",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.enable",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_count",
										"token",
										"usergroup",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usergroup`",
								},
								"parts": []any{
									"usergroups.enable",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_disabled",
											"orig": "include_disabled",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "include_user",
											"orig": "include_user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/usergroups.list",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_count",
										"include_disabled",
										"include_user",
										"token",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usergroups`",
								},
								"parts": []any{
									"usergroups.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usergroupsuser": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auto_provision",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "auto_type",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "channel_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_by",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_create",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_delete",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "date_update",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deleted_by",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enterprise_subteam_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "handle",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_external",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_subteam",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_usergroup",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "prefs",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_by",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "users",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "usergroupsuser",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_count",
											"orig": "include_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup",
											"orig": "usergroup",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/usergroups.users.update",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.users.update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_count",
										"token",
										"user",
										"usergroup",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usergroup`",
								},
								"parts": []any{
									"usergroups.users.update",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_disabled",
											"orig": "include_disabled",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "usergroup",
											"orig": "usergroup",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/usergroups.users.list",
								"segments": []any{
									map[string]any{
										"lit": "usergroups.users.list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_disabled",
										"token",
										"usergroup",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.users`",
								},
								"parts": []any{
									"usergroups.users.list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usersprofile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "always_active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "api_app_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatar_hash",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bot_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display_name_normalized",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "fields",
						"req": true,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
								"`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "first_name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "guest_expiration_ts",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
					},
					map[string]any{
						"name": "guest_invited_by",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_1024",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_192",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_24",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_32",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_48",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_512",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_72",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"format": "uri",
						"name": "image_original",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "is_app_user",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_custom_image",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_restricted",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "is_ultra_restricted",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$BOOLEAN`",
							},
						},
					},
					map[string]any{
						"name": "last_avatar_image_hash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "memberships_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "phone",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pronouns",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "real_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "real_name_normalized",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "skype",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_default_emoji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_default_text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_default_text_canonical",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "status_emoji",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_expiration",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status_text",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status_text_canonical",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
				},
				"name": "usersprofile",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "profile",
											"orig": "profile",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/users.profile.set",
								"segments": []any{
									map[string]any{
										"lit": "users.profile.set",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"profile",
										"token",
										"user",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.profile`",
								},
								"parts": []any{
									"users.profile.set",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "include_label",
											"orig": "include_label",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users.profile.get",
								"segments": []any{
									map[string]any{
										"lit": "users.profile.get",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_label",
										"token",
										"user",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.profile`",
								},
								"parts": []any{
									"users.profile.get",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "view",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_id",
											"orig": "external_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "hash",
											"orig": "hash",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "view",
											"orig": "view",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "view_id",
											"orig": "view_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/views.update",
								"segments": []any{
									map[string]any{
										"lit": "views.update",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"external_id",
										"hash",
										"token",
										"view",
										"view_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"views.update",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "hash",
											"orig": "hash",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "view",
											"orig": "view",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/views.publish",
								"segments": []any{
									map[string]any{
										"lit": "views.publish",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"hash",
										"token",
										"user_id",
										"view",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"views.publish",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "view",
											"orig": "view",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/views.open",
								"segments": []any{
									map[string]any{
										"lit": "views.open",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"trigger_id",
										"view",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"views.open",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "view",
											"orig": "view",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/views.push",
								"segments": []any{
									map[string]any{
										"lit": "views.push",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token",
										"trigger_id",
										"view",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"views.push",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ok",
						"req": true,
						"type": "`$BOOLEAN`",
					},
				},
				"name": "workflow",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "input",
											"orig": "input",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "output",
											"orig": "output",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "step_image_url",
											"orig": "step_image_url",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "step_name",
											"orig": "step_name",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "workflow_step_edit_id",
											"orig": "workflow_step_edit_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workflows.updateStep",
								"segments": []any{
									map[string]any{
										"lit": "workflows.updateStep",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"input",
										"output",
										"step_image_url",
										"step_name",
										"token",
										"workflow_step_edit_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workflows.updateStep",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "error",
											"orig": "error",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "workflow_step_execute_id",
											"orig": "workflow_step_execute_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workflows.stepFailed",
								"segments": []any{
									map[string]any{
										"lit": "workflows.stepFailed",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"error",
										"token",
										"workflow_step_execute_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workflows.stepFailed",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "token",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "output",
											"orig": "output",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "workflow_step_execute_id",
											"orig": "workflow_step_execute_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/workflows.stepCompleted",
								"segments": []any{
									map[string]any{
										"lit": "workflows.stepCompleted",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"output",
										"token",
										"workflow_step_execute_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"workflows.stepCompleted",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
