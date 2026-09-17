package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/slack-sdk/go/utility/struct"
)

type SlackSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewSlackSDK(options map[string]any) *SlackSDK {
	sdk := &SlackSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *SlackSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *SlackSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *SlackSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *SlackSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *SlackSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *SlackSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *SlackSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("SlackSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *SlackSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *SlackSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("SlackSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Adminapp returns a Adminapp entity bound to this client.
// Idiomatic usage: client.Adminapp(nil).List(nil, nil) or
// client.Adminapp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminapp(data map[string]any) SlackEntity {
	return NewAdminappEntityFunc(sdk, data)
}


// Adminappsapproved returns a Adminappsapproved entity bound to this client.
// Idiomatic usage: client.Adminappsapproved(nil).List(nil, nil) or
// client.Adminappsapproved(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminappsapproved(data map[string]any) SlackEntity {
	return NewAdminappsapprovedEntityFunc(sdk, data)
}


// Adminappsrequest returns a Adminappsrequest entity bound to this client.
// Idiomatic usage: client.Adminappsrequest(nil).List(nil, nil) or
// client.Adminappsrequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminappsrequest(data map[string]any) SlackEntity {
	return NewAdminappsrequestEntityFunc(sdk, data)
}


// Adminappsrestricted returns a Adminappsrestricted entity bound to this client.
// Idiomatic usage: client.Adminappsrestricted(nil).List(nil, nil) or
// client.Adminappsrestricted(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminappsrestricted(data map[string]any) SlackEntity {
	return NewAdminappsrestrictedEntityFunc(sdk, data)
}


// Adminconversation returns a Adminconversation entity bound to this client.
// Idiomatic usage: client.Adminconversation(nil).List(nil, nil) or
// client.Adminconversation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminconversation(data map[string]any) SlackEntity {
	return NewAdminconversationEntityFunc(sdk, data)
}


// Adminconversationsekm returns a Adminconversationsekm entity bound to this client.
// Idiomatic usage: client.Adminconversationsekm(nil).List(nil, nil) or
// client.Adminconversationsekm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminconversationsekm(data map[string]any) SlackEntity {
	return NewAdminconversationsekmEntityFunc(sdk, data)
}


// AdminconversationsrestrictAccess returns a AdminconversationsrestrictAccess entity bound to this client.
// Idiomatic usage: client.AdminconversationsrestrictAccess(nil).List(nil, nil) or
// client.AdminconversationsrestrictAccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) AdminconversationsrestrictAccess(data map[string]any) SlackEntity {
	return NewAdminconversationsrestrictAccessEntityFunc(sdk, data)
}


// Adminemoji returns a Adminemoji entity bound to this client.
// Idiomatic usage: client.Adminemoji(nil).List(nil, nil) or
// client.Adminemoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminemoji(data map[string]any) SlackEntity {
	return NewAdminemojiEntityFunc(sdk, data)
}


// AdmininviteRequest returns a AdmininviteRequest entity bound to this client.
// Idiomatic usage: client.AdmininviteRequest(nil).List(nil, nil) or
// client.AdmininviteRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) AdmininviteRequest(data map[string]any) SlackEntity {
	return NewAdmininviteRequestEntityFunc(sdk, data)
}


// AdmininviteRequestsapproved returns a AdmininviteRequestsapproved entity bound to this client.
// Idiomatic usage: client.AdmininviteRequestsapproved(nil).List(nil, nil) or
// client.AdmininviteRequestsapproved(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) AdmininviteRequestsapproved(data map[string]any) SlackEntity {
	return NewAdmininviteRequestsapprovedEntityFunc(sdk, data)
}


// AdmininviteRequestsdenied returns a AdmininviteRequestsdenied entity bound to this client.
// Idiomatic usage: client.AdmininviteRequestsdenied(nil).List(nil, nil) or
// client.AdmininviteRequestsdenied(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) AdmininviteRequestsdenied(data map[string]any) SlackEntity {
	return NewAdmininviteRequestsdeniedEntityFunc(sdk, data)
}


// Adminteam returns a Adminteam entity bound to this client.
// Idiomatic usage: client.Adminteam(nil).List(nil, nil) or
// client.Adminteam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminteam(data map[string]any) SlackEntity {
	return NewAdminteamEntityFunc(sdk, data)
}


// Adminteamsadmin returns a Adminteamsadmin entity bound to this client.
// Idiomatic usage: client.Adminteamsadmin(nil).List(nil, nil) or
// client.Adminteamsadmin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminteamsadmin(data map[string]any) SlackEntity {
	return NewAdminteamsadminEntityFunc(sdk, data)
}


// Adminteamsowner returns a Adminteamsowner entity bound to this client.
// Idiomatic usage: client.Adminteamsowner(nil).List(nil, nil) or
// client.Adminteamsowner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminteamsowner(data map[string]any) SlackEntity {
	return NewAdminteamsownerEntityFunc(sdk, data)
}


// Adminteamssetting returns a Adminteamssetting entity bound to this client.
// Idiomatic usage: client.Adminteamssetting(nil).List(nil, nil) or
// client.Adminteamssetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminteamssetting(data map[string]any) SlackEntity {
	return NewAdminteamssettingEntityFunc(sdk, data)
}


// Adminuser returns a Adminuser entity bound to this client.
// Idiomatic usage: client.Adminuser(nil).List(nil, nil) or
// client.Adminuser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminuser(data map[string]any) SlackEntity {
	return NewAdminuserEntityFunc(sdk, data)
}


// Adminusergroup returns a Adminusergroup entity bound to this client.
// Idiomatic usage: client.Adminusergroup(nil).List(nil, nil) or
// client.Adminusergroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminusergroup(data map[string]any) SlackEntity {
	return NewAdminusergroupEntityFunc(sdk, data)
}


// Adminuserssession returns a Adminuserssession entity bound to this client.
// Idiomatic usage: client.Adminuserssession(nil).List(nil, nil) or
// client.Adminuserssession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Adminuserssession(data map[string]any) SlackEntity {
	return NewAdminuserssessionEntityFunc(sdk, data)
}


// Api returns a Api entity bound to this client.
// Idiomatic usage: client.Api(nil).List(nil, nil) or
// client.Api(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Api(data map[string]any) SlackEntity {
	return NewApiEntityFunc(sdk, data)
}


// App returns a App entity bound to this client.
// Idiomatic usage: client.App(nil).List(nil, nil) or
// client.App(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) App(data map[string]any) SlackEntity {
	return NewAppEntityFunc(sdk, data)
}


// Appseventauthorization returns a Appseventauthorization entity bound to this client.
// Idiomatic usage: client.Appseventauthorization(nil).List(nil, nil) or
// client.Appseventauthorization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Appseventauthorization(data map[string]any) SlackEntity {
	return NewAppseventauthorizationEntityFunc(sdk, data)
}


// Appspermission returns a Appspermission entity bound to this client.
// Idiomatic usage: client.Appspermission(nil).List(nil, nil) or
// client.Appspermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Appspermission(data map[string]any) SlackEntity {
	return NewAppspermissionEntityFunc(sdk, data)
}


// Appspermissionsresource returns a Appspermissionsresource entity bound to this client.
// Idiomatic usage: client.Appspermissionsresource(nil).List(nil, nil) or
// client.Appspermissionsresource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Appspermissionsresource(data map[string]any) SlackEntity {
	return NewAppspermissionsresourceEntityFunc(sdk, data)
}


// Appspermissionsscope returns a Appspermissionsscope entity bound to this client.
// Idiomatic usage: client.Appspermissionsscope(nil).List(nil, nil) or
// client.Appspermissionsscope(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Appspermissionsscope(data map[string]any) SlackEntity {
	return NewAppspermissionsscopeEntityFunc(sdk, data)
}


// Appspermissionsuser returns a Appspermissionsuser entity bound to this client.
// Idiomatic usage: client.Appspermissionsuser(nil).List(nil, nil) or
// client.Appspermissionsuser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Appspermissionsuser(data map[string]any) SlackEntity {
	return NewAppspermissionsuserEntityFunc(sdk, data)
}


// Auth returns a Auth entity bound to this client.
// Idiomatic usage: client.Auth(nil).List(nil, nil) or
// client.Auth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Auth(data map[string]any) SlackEntity {
	return NewAuthEntityFunc(sdk, data)
}


// Bot returns a Bot entity bound to this client.
// Idiomatic usage: client.Bot(nil).List(nil, nil) or
// client.Bot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Bot(data map[string]any) SlackEntity {
	return NewBotEntityFunc(sdk, data)
}


// Call returns a Call entity bound to this client.
// Idiomatic usage: client.Call(nil).List(nil, nil) or
// client.Call(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Call(data map[string]any) SlackEntity {
	return NewCallEntityFunc(sdk, data)
}


// Callsparticipant returns a Callsparticipant entity bound to this client.
// Idiomatic usage: client.Callsparticipant(nil).List(nil, nil) or
// client.Callsparticipant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Callsparticipant(data map[string]any) SlackEntity {
	return NewCallsparticipantEntityFunc(sdk, data)
}


// Chat returns a Chat entity bound to this client.
// Idiomatic usage: client.Chat(nil).List(nil, nil) or
// client.Chat(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Chat(data map[string]any) SlackEntity {
	return NewChatEntityFunc(sdk, data)
}


// ChatscheduledMessage returns a ChatscheduledMessage entity bound to this client.
// Idiomatic usage: client.ChatscheduledMessage(nil).List(nil, nil) or
// client.ChatscheduledMessage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) ChatscheduledMessage(data map[string]any) SlackEntity {
	return NewChatscheduledMessageEntityFunc(sdk, data)
}


// Conversation returns a Conversation entity bound to this client.
// Idiomatic usage: client.Conversation(nil).List(nil, nil) or
// client.Conversation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Conversation(data map[string]any) SlackEntity {
	return NewConversationEntityFunc(sdk, data)
}


// Dialog returns a Dialog entity bound to this client.
// Idiomatic usage: client.Dialog(nil).List(nil, nil) or
// client.Dialog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Dialog(data map[string]any) SlackEntity {
	return NewDialogEntityFunc(sdk, data)
}


// Dnd returns a Dnd entity bound to this client.
// Idiomatic usage: client.Dnd(nil).List(nil, nil) or
// client.Dnd(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Dnd(data map[string]any) SlackEntity {
	return NewDndEntityFunc(sdk, data)
}


// Emoji returns a Emoji entity bound to this client.
// Idiomatic usage: client.Emoji(nil).List(nil, nil) or
// client.Emoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Emoji(data map[string]any) SlackEntity {
	return NewEmojiEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) File(data map[string]any) SlackEntity {
	return NewFileEntityFunc(sdk, data)
}


// Filescomment returns a Filescomment entity bound to this client.
// Idiomatic usage: client.Filescomment(nil).List(nil, nil) or
// client.Filescomment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Filescomment(data map[string]any) SlackEntity {
	return NewFilescommentEntityFunc(sdk, data)
}


// Filesremote returns a Filesremote entity bound to this client.
// Idiomatic usage: client.Filesremote(nil).List(nil, nil) or
// client.Filesremote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Filesremote(data map[string]any) SlackEntity {
	return NewFilesremoteEntityFunc(sdk, data)
}


// Migration returns a Migration entity bound to this client.
// Idiomatic usage: client.Migration(nil).List(nil, nil) or
// client.Migration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Migration(data map[string]any) SlackEntity {
	return NewMigrationEntityFunc(sdk, data)
}


// Oauth returns a Oauth entity bound to this client.
// Idiomatic usage: client.Oauth(nil).List(nil, nil) or
// client.Oauth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Oauth(data map[string]any) SlackEntity {
	return NewOauthEntityFunc(sdk, data)
}


// Oauthv2 returns a Oauthv2 entity bound to this client.
// Idiomatic usage: client.Oauthv2(nil).List(nil, nil) or
// client.Oauthv2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Oauthv2(data map[string]any) SlackEntity {
	return NewOauthv2EntityFunc(sdk, data)
}


// Pin returns a Pin entity bound to this client.
// Idiomatic usage: client.Pin(nil).List(nil, nil) or
// client.Pin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Pin(data map[string]any) SlackEntity {
	return NewPinEntityFunc(sdk, data)
}


// Reaction returns a Reaction entity bound to this client.
// Idiomatic usage: client.Reaction(nil).List(nil, nil) or
// client.Reaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Reaction(data map[string]any) SlackEntity {
	return NewReactionEntityFunc(sdk, data)
}


// Reminder returns a Reminder entity bound to this client.
// Idiomatic usage: client.Reminder(nil).List(nil, nil) or
// client.Reminder(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Reminder(data map[string]any) SlackEntity {
	return NewReminderEntityFunc(sdk, data)
}


// Rtm returns a Rtm entity bound to this client.
// Idiomatic usage: client.Rtm(nil).List(nil, nil) or
// client.Rtm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Rtm(data map[string]any) SlackEntity {
	return NewRtmEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Search(data map[string]any) SlackEntity {
	return NewSearchEntityFunc(sdk, data)
}


// Star returns a Star entity bound to this client.
// Idiomatic usage: client.Star(nil).List(nil, nil) or
// client.Star(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Star(data map[string]any) SlackEntity {
	return NewStarEntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Team(data map[string]any) SlackEntity {
	return NewTeamEntityFunc(sdk, data)
}


// Teamprofile returns a Teamprofile entity bound to this client.
// Idiomatic usage: client.Teamprofile(nil).List(nil, nil) or
// client.Teamprofile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Teamprofile(data map[string]any) SlackEntity {
	return NewTeamprofileEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) User(data map[string]any) SlackEntity {
	return NewUserEntityFunc(sdk, data)
}


// Usergroup returns a Usergroup entity bound to this client.
// Idiomatic usage: client.Usergroup(nil).List(nil, nil) or
// client.Usergroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Usergroup(data map[string]any) SlackEntity {
	return NewUsergroupEntityFunc(sdk, data)
}


// Usergroupsuser returns a Usergroupsuser entity bound to this client.
// Idiomatic usage: client.Usergroupsuser(nil).List(nil, nil) or
// client.Usergroupsuser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Usergroupsuser(data map[string]any) SlackEntity {
	return NewUsergroupsuserEntityFunc(sdk, data)
}


// Usersprofile returns a Usersprofile entity bound to this client.
// Idiomatic usage: client.Usersprofile(nil).List(nil, nil) or
// client.Usersprofile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Usersprofile(data map[string]any) SlackEntity {
	return NewUsersprofileEntityFunc(sdk, data)
}


// View returns a View entity bound to this client.
// Idiomatic usage: client.View(nil).List(nil, nil) or
// client.View(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) View(data map[string]any) SlackEntity {
	return NewViewEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *SlackSDK) Workflow(data map[string]any) SlackEntity {
	return NewWorkflowEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *SlackSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewSlackSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
