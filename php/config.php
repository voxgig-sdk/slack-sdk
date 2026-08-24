<?php
declare(strict_types=1);

// Slack SDK configuration

class SlackConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Slack",
                "slug" => "slack",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://slack.com/api",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "conversationsinfo" => [],
                    "conversationslist" => [],
                ],
            ],
            "entity" => [
        'conversationsinfo' => [
          'fields' => [
            [
              'name' => 'created',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_archived',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_channel',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_private',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'num_members',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'purpose',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'topic',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'conversationsinfo',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'channel',
                        'orig' => 'channel',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations.info',
                  'parts' => [
                    'conversations.info',
                  ],
                  'select' => [
                    'exist' => [
                      'channel',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.channel`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'conversationslist' => [
          'fields' => [
            [
              'name' => 'created',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_archived',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_channel',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_private',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'num_members',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'purpose',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'topic',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'conversationslist',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/conversations.list',
                  'parts' => [
                    'conversations.list',
                  ],
                  'select' => [
                    'exist' => [
                      'cursor',
                      'limit',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.channels`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return SlackFeatures::make_feature($name);
    }
}
