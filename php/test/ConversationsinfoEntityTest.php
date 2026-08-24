<?php
declare(strict_types=1);

// Conversationsinfo entity test

require_once __DIR__ . '/../slack_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConversationsinfoEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = SlackSDK::test(null, null);
        $ent = $testsdk->Conversationsinfo(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = conversationsinfo_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "conversationsinfo." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SLACK_TEST_CONVERSATIONSINFO_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $conversationsinfo_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.conversationsinfo")));
        $conversationsinfo_ref01_data = null;
        if (count($conversationsinfo_ref01_data_raw) > 0) {
            $conversationsinfo_ref01_data = Helpers::to_map($conversationsinfo_ref01_data_raw[0][1]);
        }

        // LOAD
        $conversationsinfo_ref01_ent = $client->Conversationsinfo(null);
        $conversationsinfo_ref01_match_dt0 = [
            "id" => $conversationsinfo_ref01_data["id"],
        ];
        $conversationsinfo_ref01_data_dt0_loaded = $conversationsinfo_ref01_ent->load($conversationsinfo_ref01_match_dt0, null);
        $conversationsinfo_ref01_data_dt0_load_result = Helpers::to_map(is_object($conversationsinfo_ref01_data_dt0_loaded) && method_exists($conversationsinfo_ref01_data_dt0_loaded, 'data_get') ? $conversationsinfo_ref01_data_dt0_loaded->data_get() : $conversationsinfo_ref01_data_dt0_loaded);
        $this->assertNotNull($conversationsinfo_ref01_data_dt0_load_result);
        $this->assertEquals($conversationsinfo_ref01_data_dt0_load_result["id"], $conversationsinfo_ref01_data["id"]);

    }
}

function conversationsinfo_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/conversationsinfo/ConversationsinfoTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = SlackSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["conversationsinfo01", "conversationsinfo02", "conversationsinfo03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SLACK_TEST_CONVERSATIONSINFO_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SLACK_TEST_CONVERSATIONSINFO_ENTID" => $idmap,
        "SLACK_TEST_LIVE" => "FALSE",
        "SLACK_TEST_EXPLAIN" => "FALSE",
        "SLACK_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SLACK_TEST_CONVERSATIONSINFO_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["SLACK_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["SLACK_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new SlackSDK(Helpers::to_map($merged_opts));
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
