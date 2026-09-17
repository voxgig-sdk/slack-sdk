package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/slack-sdk/go"
	"github.com/voxgig-sdk/slack-sdk/go/core"

	vs "github.com/voxgig-sdk/slack-sdk/go/utility/struct"
)

func TestBotEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Bot(nil)
		if ent == nil {
			t.Fatal("expected non-nil BotEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := botBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "bot." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set SLACK_TEST_BOT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		botRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.bot")))
		var botRef01Data map[string]any
		if len(botRef01DataRaw) > 0 {
			botRef01Data = core.ToMapAny(botRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = botRef01Data

		// LOAD
		botRef01Ent := client.Bot(nil)
		botRef01MatchDt0 := map[string]any{
			"id": botRef01Data["id"],
		}
		botRef01DataDt0Loaded, err := botRef01Ent.Load(botRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		botRef01DataDt0LoadResult := core.ToMapAny(entityData(botRef01DataDt0Loaded))
		if botRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if botRef01DataDt0LoadResult["id"] != botRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func botBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "bot", "BotTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read bot test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse bot test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"bot01", "bot02", "bot03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("SLACK_TEST_BOT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SLACK_TEST_BOT_ENTID": idmap,
		"SLACK_TEST_LIVE":      "FALSE",
		"SLACK_TEST_EXPLAIN":   "FALSE",
		"SLACK_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["SLACK_TEST_BOT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["SLACK_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["SLACK_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewSlackSDK(core.ToMapAny(mergedOpts))
	}

	live := env["SLACK_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["SLACK_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
