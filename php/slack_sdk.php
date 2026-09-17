<?php
declare(strict_types=1);

// Slack SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class SlackSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new SlackUtility();
        $this->_utility = $utility;

        $config = SlackConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = SlackHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = SlackHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!SlackFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, SlackFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return SlackUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = SlackHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = SlackHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = SlackHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new SlackSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new SlackError($op . "_allow",
                "SlackSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = SlackHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = SlackHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new SlackError("graphql_error",
                "SlackSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_adminapp = null;

    // Canonical facade: $client->Adminapp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminapp()
    // resolves here too.
    public function Adminapp($data = null)
    {
        require_once __DIR__ . '/entity/adminapp_entity.php';
        if ($data === null) {
            if ($this->_adminapp === null) {
                $this->_adminapp = new AdminappEntity($this, null);
            }
            return $this->_adminapp;
        }
        return new AdminappEntity($this, $data);
    }


    private $_adminappsapproved = null;

    // Canonical facade: $client->Adminappsapproved()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminappsapproved()
    // resolves here too.
    public function Adminappsapproved($data = null)
    {
        require_once __DIR__ . '/entity/adminappsapproved_entity.php';
        if ($data === null) {
            if ($this->_adminappsapproved === null) {
                $this->_adminappsapproved = new AdminappsapprovedEntity($this, null);
            }
            return $this->_adminappsapproved;
        }
        return new AdminappsapprovedEntity($this, $data);
    }


    private $_adminappsrequest = null;

    // Canonical facade: $client->Adminappsrequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminappsrequest()
    // resolves here too.
    public function Adminappsrequest($data = null)
    {
        require_once __DIR__ . '/entity/adminappsrequest_entity.php';
        if ($data === null) {
            if ($this->_adminappsrequest === null) {
                $this->_adminappsrequest = new AdminappsrequestEntity($this, null);
            }
            return $this->_adminappsrequest;
        }
        return new AdminappsrequestEntity($this, $data);
    }


    private $_adminappsrestricted = null;

    // Canonical facade: $client->Adminappsrestricted()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminappsrestricted()
    // resolves here too.
    public function Adminappsrestricted($data = null)
    {
        require_once __DIR__ . '/entity/adminappsrestricted_entity.php';
        if ($data === null) {
            if ($this->_adminappsrestricted === null) {
                $this->_adminappsrestricted = new AdminappsrestrictedEntity($this, null);
            }
            return $this->_adminappsrestricted;
        }
        return new AdminappsrestrictedEntity($this, $data);
    }


    private $_adminconversation = null;

    // Canonical facade: $client->Adminconversation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminconversation()
    // resolves here too.
    public function Adminconversation($data = null)
    {
        require_once __DIR__ . '/entity/adminconversation_entity.php';
        if ($data === null) {
            if ($this->_adminconversation === null) {
                $this->_adminconversation = new AdminconversationEntity($this, null);
            }
            return $this->_adminconversation;
        }
        return new AdminconversationEntity($this, $data);
    }


    private $_adminconversationsekm = null;

    // Canonical facade: $client->Adminconversationsekm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminconversationsekm()
    // resolves here too.
    public function Adminconversationsekm($data = null)
    {
        require_once __DIR__ . '/entity/adminconversationsekm_entity.php';
        if ($data === null) {
            if ($this->_adminconversationsekm === null) {
                $this->_adminconversationsekm = new AdminconversationsekmEntity($this, null);
            }
            return $this->_adminconversationsekm;
        }
        return new AdminconversationsekmEntity($this, $data);
    }


    private $_adminconversationsrestrict_access = null;

    // Canonical facade: $client->AdminconversationsrestrictAccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminconversationsrestrict_access()
    // resolves here too.
    public function AdminconversationsrestrictAccess($data = null)
    {
        require_once __DIR__ . '/entity/adminconversationsrestrict_access_entity.php';
        if ($data === null) {
            if ($this->_adminconversationsrestrict_access === null) {
                $this->_adminconversationsrestrict_access = new AdminconversationsrestrictAccessEntity($this, null);
            }
            return $this->_adminconversationsrestrict_access;
        }
        return new AdminconversationsrestrictAccessEntity($this, $data);
    }


    private $_adminemoji = null;

    // Canonical facade: $client->Adminemoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminemoji()
    // resolves here too.
    public function Adminemoji($data = null)
    {
        require_once __DIR__ . '/entity/adminemoji_entity.php';
        if ($data === null) {
            if ($this->_adminemoji === null) {
                $this->_adminemoji = new AdminemojiEntity($this, null);
            }
            return $this->_adminemoji;
        }
        return new AdminemojiEntity($this, $data);
    }


    private $_admininvite_request = null;

    // Canonical facade: $client->AdmininviteRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admininvite_request()
    // resolves here too.
    public function AdmininviteRequest($data = null)
    {
        require_once __DIR__ . '/entity/admininvite_request_entity.php';
        if ($data === null) {
            if ($this->_admininvite_request === null) {
                $this->_admininvite_request = new AdmininviteRequestEntity($this, null);
            }
            return $this->_admininvite_request;
        }
        return new AdmininviteRequestEntity($this, $data);
    }


    private $_admininvite_requestsapproved = null;

    // Canonical facade: $client->AdmininviteRequestsapproved()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admininvite_requestsapproved()
    // resolves here too.
    public function AdmininviteRequestsapproved($data = null)
    {
        require_once __DIR__ . '/entity/admininvite_requestsapproved_entity.php';
        if ($data === null) {
            if ($this->_admininvite_requestsapproved === null) {
                $this->_admininvite_requestsapproved = new AdmininviteRequestsapprovedEntity($this, null);
            }
            return $this->_admininvite_requestsapproved;
        }
        return new AdmininviteRequestsapprovedEntity($this, $data);
    }


    private $_admininvite_requestsdenied = null;

    // Canonical facade: $client->AdmininviteRequestsdenied()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admininvite_requestsdenied()
    // resolves here too.
    public function AdmininviteRequestsdenied($data = null)
    {
        require_once __DIR__ . '/entity/admininvite_requestsdenied_entity.php';
        if ($data === null) {
            if ($this->_admininvite_requestsdenied === null) {
                $this->_admininvite_requestsdenied = new AdmininviteRequestsdeniedEntity($this, null);
            }
            return $this->_admininvite_requestsdenied;
        }
        return new AdmininviteRequestsdeniedEntity($this, $data);
    }


    private $_adminteam = null;

    // Canonical facade: $client->Adminteam()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminteam()
    // resolves here too.
    public function Adminteam($data = null)
    {
        require_once __DIR__ . '/entity/adminteam_entity.php';
        if ($data === null) {
            if ($this->_adminteam === null) {
                $this->_adminteam = new AdminteamEntity($this, null);
            }
            return $this->_adminteam;
        }
        return new AdminteamEntity($this, $data);
    }


    private $_adminteamsadmin = null;

    // Canonical facade: $client->Adminteamsadmin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminteamsadmin()
    // resolves here too.
    public function Adminteamsadmin($data = null)
    {
        require_once __DIR__ . '/entity/adminteamsadmin_entity.php';
        if ($data === null) {
            if ($this->_adminteamsadmin === null) {
                $this->_adminteamsadmin = new AdminteamsadminEntity($this, null);
            }
            return $this->_adminteamsadmin;
        }
        return new AdminteamsadminEntity($this, $data);
    }


    private $_adminteamsowner = null;

    // Canonical facade: $client->Adminteamsowner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminteamsowner()
    // resolves here too.
    public function Adminteamsowner($data = null)
    {
        require_once __DIR__ . '/entity/adminteamsowner_entity.php';
        if ($data === null) {
            if ($this->_adminteamsowner === null) {
                $this->_adminteamsowner = new AdminteamsownerEntity($this, null);
            }
            return $this->_adminteamsowner;
        }
        return new AdminteamsownerEntity($this, $data);
    }


    private $_adminteamssetting = null;

    // Canonical facade: $client->Adminteamssetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminteamssetting()
    // resolves here too.
    public function Adminteamssetting($data = null)
    {
        require_once __DIR__ . '/entity/adminteamssetting_entity.php';
        if ($data === null) {
            if ($this->_adminteamssetting === null) {
                $this->_adminteamssetting = new AdminteamssettingEntity($this, null);
            }
            return $this->_adminteamssetting;
        }
        return new AdminteamssettingEntity($this, $data);
    }


    private $_adminuser = null;

    // Canonical facade: $client->Adminuser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminuser()
    // resolves here too.
    public function Adminuser($data = null)
    {
        require_once __DIR__ . '/entity/adminuser_entity.php';
        if ($data === null) {
            if ($this->_adminuser === null) {
                $this->_adminuser = new AdminuserEntity($this, null);
            }
            return $this->_adminuser;
        }
        return new AdminuserEntity($this, $data);
    }


    private $_adminusergroup = null;

    // Canonical facade: $client->Adminusergroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminusergroup()
    // resolves here too.
    public function Adminusergroup($data = null)
    {
        require_once __DIR__ . '/entity/adminusergroup_entity.php';
        if ($data === null) {
            if ($this->_adminusergroup === null) {
                $this->_adminusergroup = new AdminusergroupEntity($this, null);
            }
            return $this->_adminusergroup;
        }
        return new AdminusergroupEntity($this, $data);
    }


    private $_adminuserssession = null;

    // Canonical facade: $client->Adminuserssession()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->adminuserssession()
    // resolves here too.
    public function Adminuserssession($data = null)
    {
        require_once __DIR__ . '/entity/adminuserssession_entity.php';
        if ($data === null) {
            if ($this->_adminuserssession === null) {
                $this->_adminuserssession = new AdminuserssessionEntity($this, null);
            }
            return $this->_adminuserssession;
        }
        return new AdminuserssessionEntity($this, $data);
    }


    private $_api = null;

    // Canonical facade: $client->Api()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api()
    // resolves here too.
    public function Api($data = null)
    {
        require_once __DIR__ . '/entity/api_entity.php';
        if ($data === null) {
            if ($this->_api === null) {
                $this->_api = new ApiEntity($this, null);
            }
            return $this->_api;
        }
        return new ApiEntity($this, $data);
    }


    private $_app = null;

    // Canonical facade: $client->App()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->app()
    // resolves here too.
    public function App($data = null)
    {
        require_once __DIR__ . '/entity/app_entity.php';
        if ($data === null) {
            if ($this->_app === null) {
                $this->_app = new AppEntity($this, null);
            }
            return $this->_app;
        }
        return new AppEntity($this, $data);
    }


    private $_appseventauthorization = null;

    // Canonical facade: $client->Appseventauthorization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->appseventauthorization()
    // resolves here too.
    public function Appseventauthorization($data = null)
    {
        require_once __DIR__ . '/entity/appseventauthorization_entity.php';
        if ($data === null) {
            if ($this->_appseventauthorization === null) {
                $this->_appseventauthorization = new AppseventauthorizationEntity($this, null);
            }
            return $this->_appseventauthorization;
        }
        return new AppseventauthorizationEntity($this, $data);
    }


    private $_appspermission = null;

    // Canonical facade: $client->Appspermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->appspermission()
    // resolves here too.
    public function Appspermission($data = null)
    {
        require_once __DIR__ . '/entity/appspermission_entity.php';
        if ($data === null) {
            if ($this->_appspermission === null) {
                $this->_appspermission = new AppspermissionEntity($this, null);
            }
            return $this->_appspermission;
        }
        return new AppspermissionEntity($this, $data);
    }


    private $_appspermissionsresource = null;

    // Canonical facade: $client->Appspermissionsresource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->appspermissionsresource()
    // resolves here too.
    public function Appspermissionsresource($data = null)
    {
        require_once __DIR__ . '/entity/appspermissionsresource_entity.php';
        if ($data === null) {
            if ($this->_appspermissionsresource === null) {
                $this->_appspermissionsresource = new AppspermissionsresourceEntity($this, null);
            }
            return $this->_appspermissionsresource;
        }
        return new AppspermissionsresourceEntity($this, $data);
    }


    private $_appspermissionsscope = null;

    // Canonical facade: $client->Appspermissionsscope()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->appspermissionsscope()
    // resolves here too.
    public function Appspermissionsscope($data = null)
    {
        require_once __DIR__ . '/entity/appspermissionsscope_entity.php';
        if ($data === null) {
            if ($this->_appspermissionsscope === null) {
                $this->_appspermissionsscope = new AppspermissionsscopeEntity($this, null);
            }
            return $this->_appspermissionsscope;
        }
        return new AppspermissionsscopeEntity($this, $data);
    }


    private $_appspermissionsuser = null;

    // Canonical facade: $client->Appspermissionsuser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->appspermissionsuser()
    // resolves here too.
    public function Appspermissionsuser($data = null)
    {
        require_once __DIR__ . '/entity/appspermissionsuser_entity.php';
        if ($data === null) {
            if ($this->_appspermissionsuser === null) {
                $this->_appspermissionsuser = new AppspermissionsuserEntity($this, null);
            }
            return $this->_appspermissionsuser;
        }
        return new AppspermissionsuserEntity($this, $data);
    }


    private $_auth = null;

    // Canonical facade: $client->Auth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auth()
    // resolves here too.
    public function Auth($data = null)
    {
        require_once __DIR__ . '/entity/auth_entity.php';
        if ($data === null) {
            if ($this->_auth === null) {
                $this->_auth = new AuthEntity($this, null);
            }
            return $this->_auth;
        }
        return new AuthEntity($this, $data);
    }


    private $_bot = null;

    // Canonical facade: $client->Bot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bot()
    // resolves here too.
    public function Bot($data = null)
    {
        require_once __DIR__ . '/entity/bot_entity.php';
        if ($data === null) {
            if ($this->_bot === null) {
                $this->_bot = new BotEntity($this, null);
            }
            return $this->_bot;
        }
        return new BotEntity($this, $data);
    }


    private $_call = null;

    // Canonical facade: $client->Call()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->call()
    // resolves here too.
    public function Call($data = null)
    {
        require_once __DIR__ . '/entity/call_entity.php';
        if ($data === null) {
            if ($this->_call === null) {
                $this->_call = new CallEntity($this, null);
            }
            return $this->_call;
        }
        return new CallEntity($this, $data);
    }


    private $_callsparticipant = null;

    // Canonical facade: $client->Callsparticipant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->callsparticipant()
    // resolves here too.
    public function Callsparticipant($data = null)
    {
        require_once __DIR__ . '/entity/callsparticipant_entity.php';
        if ($data === null) {
            if ($this->_callsparticipant === null) {
                $this->_callsparticipant = new CallsparticipantEntity($this, null);
            }
            return $this->_callsparticipant;
        }
        return new CallsparticipantEntity($this, $data);
    }


    private $_chat = null;

    // Canonical facade: $client->Chat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat()
    // resolves here too.
    public function Chat($data = null)
    {
        require_once __DIR__ . '/entity/chat_entity.php';
        if ($data === null) {
            if ($this->_chat === null) {
                $this->_chat = new ChatEntity($this, null);
            }
            return $this->_chat;
        }
        return new ChatEntity($this, $data);
    }


    private $_chatscheduled_message = null;

    // Canonical facade: $client->ChatscheduledMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chatscheduled_message()
    // resolves here too.
    public function ChatscheduledMessage($data = null)
    {
        require_once __DIR__ . '/entity/chatscheduled_message_entity.php';
        if ($data === null) {
            if ($this->_chatscheduled_message === null) {
                $this->_chatscheduled_message = new ChatscheduledMessageEntity($this, null);
            }
            return $this->_chatscheduled_message;
        }
        return new ChatscheduledMessageEntity($this, $data);
    }


    private $_conversation = null;

    // Canonical facade: $client->Conversation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation()
    // resolves here too.
    public function Conversation($data = null)
    {
        require_once __DIR__ . '/entity/conversation_entity.php';
        if ($data === null) {
            if ($this->_conversation === null) {
                $this->_conversation = new ConversationEntity($this, null);
            }
            return $this->_conversation;
        }
        return new ConversationEntity($this, $data);
    }


    private $_dialog = null;

    // Canonical facade: $client->Dialog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dialog()
    // resolves here too.
    public function Dialog($data = null)
    {
        require_once __DIR__ . '/entity/dialog_entity.php';
        if ($data === null) {
            if ($this->_dialog === null) {
                $this->_dialog = new DialogEntity($this, null);
            }
            return $this->_dialog;
        }
        return new DialogEntity($this, $data);
    }


    private $_dnd = null;

    // Canonical facade: $client->Dnd()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dnd()
    // resolves here too.
    public function Dnd($data = null)
    {
        require_once __DIR__ . '/entity/dnd_entity.php';
        if ($data === null) {
            if ($this->_dnd === null) {
                $this->_dnd = new DndEntity($this, null);
            }
            return $this->_dnd;
        }
        return new DndEntity($this, $data);
    }


    private $_emoji = null;

    // Canonical facade: $client->Emoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->emoji()
    // resolves here too.
    public function Emoji($data = null)
    {
        require_once __DIR__ . '/entity/emoji_entity.php';
        if ($data === null) {
            if ($this->_emoji === null) {
                $this->_emoji = new EmojiEntity($this, null);
            }
            return $this->_emoji;
        }
        return new EmojiEntity($this, $data);
    }


    private $_file = null;

    // Canonical facade: $client->File()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->file()
    // resolves here too.
    public function File($data = null)
    {
        require_once __DIR__ . '/entity/file_entity.php';
        if ($data === null) {
            if ($this->_file === null) {
                $this->_file = new FileEntity($this, null);
            }
            return $this->_file;
        }
        return new FileEntity($this, $data);
    }


    private $_filescomment = null;

    // Canonical facade: $client->Filescomment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->filescomment()
    // resolves here too.
    public function Filescomment($data = null)
    {
        require_once __DIR__ . '/entity/filescomment_entity.php';
        if ($data === null) {
            if ($this->_filescomment === null) {
                $this->_filescomment = new FilescommentEntity($this, null);
            }
            return $this->_filescomment;
        }
        return new FilescommentEntity($this, $data);
    }


    private $_filesremote = null;

    // Canonical facade: $client->Filesremote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->filesremote()
    // resolves here too.
    public function Filesremote($data = null)
    {
        require_once __DIR__ . '/entity/filesremote_entity.php';
        if ($data === null) {
            if ($this->_filesremote === null) {
                $this->_filesremote = new FilesremoteEntity($this, null);
            }
            return $this->_filesremote;
        }
        return new FilesremoteEntity($this, $data);
    }


    private $_migration = null;

    // Canonical facade: $client->Migration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->migration()
    // resolves here too.
    public function Migration($data = null)
    {
        require_once __DIR__ . '/entity/migration_entity.php';
        if ($data === null) {
            if ($this->_migration === null) {
                $this->_migration = new MigrationEntity($this, null);
            }
            return $this->_migration;
        }
        return new MigrationEntity($this, $data);
    }


    private $_oauth = null;

    // Canonical facade: $client->Oauth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oauth()
    // resolves here too.
    public function Oauth($data = null)
    {
        require_once __DIR__ . '/entity/oauth_entity.php';
        if ($data === null) {
            if ($this->_oauth === null) {
                $this->_oauth = new OauthEntity($this, null);
            }
            return $this->_oauth;
        }
        return new OauthEntity($this, $data);
    }


    private $_oauthv2 = null;

    // Canonical facade: $client->Oauthv2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oauthv2()
    // resolves here too.
    public function Oauthv2($data = null)
    {
        require_once __DIR__ . '/entity/oauthv2_entity.php';
        if ($data === null) {
            if ($this->_oauthv2 === null) {
                $this->_oauthv2 = new Oauthv2Entity($this, null);
            }
            return $this->_oauthv2;
        }
        return new Oauthv2Entity($this, $data);
    }


    private $_pin = null;

    // Canonical facade: $client->Pin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pin()
    // resolves here too.
    public function Pin($data = null)
    {
        require_once __DIR__ . '/entity/pin_entity.php';
        if ($data === null) {
            if ($this->_pin === null) {
                $this->_pin = new PinEntity($this, null);
            }
            return $this->_pin;
        }
        return new PinEntity($this, $data);
    }


    private $_reaction = null;

    // Canonical facade: $client->Reaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reaction()
    // resolves here too.
    public function Reaction($data = null)
    {
        require_once __DIR__ . '/entity/reaction_entity.php';
        if ($data === null) {
            if ($this->_reaction === null) {
                $this->_reaction = new ReactionEntity($this, null);
            }
            return $this->_reaction;
        }
        return new ReactionEntity($this, $data);
    }


    private $_reminder = null;

    // Canonical facade: $client->Reminder()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reminder()
    // resolves here too.
    public function Reminder($data = null)
    {
        require_once __DIR__ . '/entity/reminder_entity.php';
        if ($data === null) {
            if ($this->_reminder === null) {
                $this->_reminder = new ReminderEntity($this, null);
            }
            return $this->_reminder;
        }
        return new ReminderEntity($this, $data);
    }


    private $_rtm = null;

    // Canonical facade: $client->Rtm()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rtm()
    // resolves here too.
    public function Rtm($data = null)
    {
        require_once __DIR__ . '/entity/rtm_entity.php';
        if ($data === null) {
            if ($this->_rtm === null) {
                $this->_rtm = new RtmEntity($this, null);
            }
            return $this->_rtm;
        }
        return new RtmEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_star = null;

    // Canonical facade: $client->Star()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->star()
    // resolves here too.
    public function Star($data = null)
    {
        require_once __DIR__ . '/entity/star_entity.php';
        if ($data === null) {
            if ($this->_star === null) {
                $this->_star = new StarEntity($this, null);
            }
            return $this->_star;
        }
        return new StarEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_teamprofile = null;

    // Canonical facade: $client->Teamprofile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teamprofile()
    // resolves here too.
    public function Teamprofile($data = null)
    {
        require_once __DIR__ . '/entity/teamprofile_entity.php';
        if ($data === null) {
            if ($this->_teamprofile === null) {
                $this->_teamprofile = new TeamprofileEntity($this, null);
            }
            return $this->_teamprofile;
        }
        return new TeamprofileEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_usergroup = null;

    // Canonical facade: $client->Usergroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usergroup()
    // resolves here too.
    public function Usergroup($data = null)
    {
        require_once __DIR__ . '/entity/usergroup_entity.php';
        if ($data === null) {
            if ($this->_usergroup === null) {
                $this->_usergroup = new UsergroupEntity($this, null);
            }
            return $this->_usergroup;
        }
        return new UsergroupEntity($this, $data);
    }


    private $_usergroupsuser = null;

    // Canonical facade: $client->Usergroupsuser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usergroupsuser()
    // resolves here too.
    public function Usergroupsuser($data = null)
    {
        require_once __DIR__ . '/entity/usergroupsuser_entity.php';
        if ($data === null) {
            if ($this->_usergroupsuser === null) {
                $this->_usergroupsuser = new UsergroupsuserEntity($this, null);
            }
            return $this->_usergroupsuser;
        }
        return new UsergroupsuserEntity($this, $data);
    }


    private $_usersprofile = null;

    // Canonical facade: $client->Usersprofile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usersprofile()
    // resolves here too.
    public function Usersprofile($data = null)
    {
        require_once __DIR__ . '/entity/usersprofile_entity.php';
        if ($data === null) {
            if ($this->_usersprofile === null) {
                $this->_usersprofile = new UsersprofileEntity($this, null);
            }
            return $this->_usersprofile;
        }
        return new UsersprofileEntity($this, $data);
    }


    private $_view = null;

    // Canonical facade: $client->View()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->view()
    // resolves here too.
    public function View($data = null)
    {
        require_once __DIR__ . '/entity/view_entity.php';
        if ($data === null) {
            if ($this->_view === null) {
                $this->_view = new ViewEntity($this, null);
            }
            return $this->_view;
        }
        return new ViewEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new SlackSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
