<?php
declare(strict_types=1);

// Adminappsapproved entity test

require_once __DIR__ . '/../slack_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AdminappsapprovedEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = SlackSDK::test(null, null);
        $ent = $testsdk->Adminappsapproved(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = adminappsapproved_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "adminappsapproved." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SLACK_TEST_ADMINAPPSAPPROVED_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $adminappsapproved_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.adminappsapproved")));
        $adminappsapproved_ref01_data = null;
        if (count($adminappsapproved_ref01_data_raw) > 0) {
            $adminappsapproved_ref01_data = Helpers::to_map($adminappsapproved_ref01_data_raw[0][1]);
        }

        // LOAD
        $adminappsapproved_ref01_ent = $client->Adminappsapproved(null);
        $adminappsapproved_ref01_match_dt0 = [];
        $adminappsapproved_ref01_data_dt0_loaded = $adminappsapproved_ref01_ent->load($adminappsapproved_ref01_match_dt0, null);
        $this->assertNotNull($adminappsapproved_ref01_data_dt0_loaded);

    }
}

function adminappsapproved_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/adminappsapproved/AdminappsapprovedTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = SlackSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["adminappsapproved01", "adminappsapproved02", "adminappsapproved03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SLACK_TEST_ADMINAPPSAPPROVED_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SLACK_TEST_ADMINAPPSAPPROVED_ENTID" => $idmap,
        "SLACK_TEST_LIVE" => "FALSE",
        "SLACK_TEST_EXPLAIN" => "FALSE",
        "SLACK_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SLACK_TEST_ADMINAPPSAPPROVED_ENTID"]);
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
