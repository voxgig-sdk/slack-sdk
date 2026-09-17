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

func TestAdminteamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Adminteam(nil)
		if ent == nil {
			t.Fatal("expected non-nil AdminteamEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := adminteamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "adminteam." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set SLACK_TEST_ADMINTEAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		adminteamRef01Ent := client.Adminteam(nil)
		adminteamRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "adminteam"}), "adminteam_ref01"))

		adminteamRef01DataResult, err := adminteamRef01Ent.Create(adminteamRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		adminteamRef01Data = core.ToMapAny(entityData(adminteamRef01DataResult))
		if adminteamRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		adminteamRef01MatchDt0 := map[string]any{}
		adminteamRef01DataDt0Loaded, err := adminteamRef01Ent.Load(adminteamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if adminteamRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func adminteamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "adminteam", "AdminteamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read adminteam test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse adminteam test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"adminteam01", "adminteam02", "adminteam03"},
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
	entidEnvRaw := os.Getenv("SLACK_TEST_ADMINTEAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"SLACK_TEST_ADMINTEAM_ENTID": idmap,
		"SLACK_TEST_LIVE":      "FALSE",
		"SLACK_TEST_EXPLAIN":   "FALSE",
		"SLACK_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["SLACK_TEST_ADMINTEAM_ENTID"])
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
