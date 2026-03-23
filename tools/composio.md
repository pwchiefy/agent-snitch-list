# Composio

| Field | Value |
|-------|-------|
| Website | https://composio.dev/ |
| Repository | https://github.com/composioHQ/composio |
| Category | AI Tool Integration Platform |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (Composio servers) |
| Disable Method | `COMPOSIO_DISABLE_TELEMETRY=true` environment variable |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Tool execution metadata (which tools are used, success/failure)
- Integration usage patterns
- SDK version and environment info
- Error types and exceptions
- Session metadata

## What Is NOT Collected

- No code content
- No prompt text
- No API keys or credentials from connected tools
- No data returned by tool executions

## How to Fully Opt Out

1. **Environment variable:** `export COMPOSIO_DISABLE_TELEMETRY=true`
2. **Network block:** Block outbound connections to Composio telemetry endpoints

## Red Flags

- Telemetry ON by default
- Composio connects to many third-party services as a tool platform -- while telemetry itself may be limited, the platform's core function involves API credentials for external services
- Data flows through Composio servers for managed integrations

## Evidence

- Repository: https://github.com/composioHQ/composio
- `COMPOSIO_DISABLE_TELEMETRY` variable in source code
- Telemetry module in SDK source

## Changelog

- 2026-03-23: Initial entry
