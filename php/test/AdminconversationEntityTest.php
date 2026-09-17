<?php
declare(strict_types=1);

// Adminconversation entity test

require_once __DIR__ . '/../slack_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AdminconversationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = SlackSDK::test(null, null);
        $ent = $testsdk->Adminconversation(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "adminconversation" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = SlackSDK::test($seed, null);
        $seen = iterator_to_array($base->Adminconversation(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = SlackConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = SlackSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Adminconversation(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = adminconversation_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "adminconversation." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SLACK_TEST_ADMINCONVERSATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $adminconversation_ref01_ent = $client->Adminconversation(null);
        $adminconversation_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.adminconversation"), "adminconversation_ref01"));

        $adminconversation_ref01_data_result = $adminconversation_ref01_ent->create($adminconversation_ref01_data, null);
        $adminconversation_ref01_data = Helpers::to_map(is_object($adminconversation_ref01_data_result) && method_exists($adminconversation_ref01_data_result, 'data_get') ? $adminconversation_ref01_data_result->data_get() : $adminconversation_ref01_data_result);
        $this->assertNotNull($adminconversation_ref01_data);
        $this->assertNotNull($adminconversation_ref01_data["id"]);

        // LIST
        $adminconversation_ref01_match = [];

        $adminconversation_ref01_list_result = $adminconversation_ref01_ent->list($adminconversation_ref01_match, null);
        $this->assertIsArray($adminconversation_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($adminconversation_ref01_list_result),
            ["id" => $adminconversation_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $adminconversation_ref01_match_dt0 = [
            "id" => $adminconversation_ref01_data["id"],
        ];
        $adminconversation_ref01_data_dt0_loaded = $adminconversation_ref01_ent->load($adminconversation_ref01_match_dt0, null);
        $adminconversation_ref01_data_dt0_load_result = Helpers::to_map(is_object($adminconversation_ref01_data_dt0_loaded) && method_exists($adminconversation_ref01_data_dt0_loaded, 'data_get') ? $adminconversation_ref01_data_dt0_loaded->data_get() : $adminconversation_ref01_data_dt0_loaded);
        $this->assertNotNull($adminconversation_ref01_data_dt0_load_result);
        $this->assertEquals($adminconversation_ref01_data_dt0_load_result["id"], $adminconversation_ref01_data["id"]);

    }
}

function adminconversation_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/adminconversation/AdminconversationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = SlackSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["adminconversation01", "adminconversation02", "adminconversation03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SLACK_TEST_ADMINCONVERSATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SLACK_TEST_ADMINCONVERSATION_ENTID" => $idmap,
        "SLACK_TEST_LIVE" => "FALSE",
        "SLACK_TEST_EXPLAIN" => "FALSE",
        "SLACK_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SLACK_TEST_ADMINCONVERSATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["SLACK_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["SLACK_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new SlackSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["SLACK_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["SLACK_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
