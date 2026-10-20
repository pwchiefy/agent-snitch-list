# Composio

| Field | Value |
|-------|-------|
| Website | https://composio.dev/ |
| Repository | https://github.com/ComposioHQ/composio |
| Category | AI Tool Integration Platform |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (telemetry.composio.dev); PostHog (CLI) |
| Disable Method | SDK: `allow_tracking=False` / `allowTracking: false`; CLI: `COMPOSIO_DISABLE_TELEMETRY=true` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

**SDK (Python/TypeScript), default on:**
- Invoked function name, duration, timestamp
- SDK language, version, environment; provider; project ID
- Errors: name, code, message and stack trace
- Sent to `https://telemetry.composio.dev/v1` (`/metrics/invocations`, `/errors`)

**CLI:** usage events to PostHog (`us.i.posthog.com`); disabled automatically in CI or test environments.

**Server side:** audit logs and operational telemetry are kept on every plan (per Composio ZDR docs).

## What Is NOT Collected

- Tool input/output payloads are not part of the SDK telemetry schema

## How to Fully Opt Out

1. **Python SDK:** `Composio(allow_tracking=False)`
2. **TypeScript SDK:** `new Composio({ allowTracking: false })`
3. **CLI:** `COMPOSIO_DISABLE_TELEMETRY=true`, `COMPOSIO_CLI_TELEMETRY_DISABLED=true`, or `TELEMETRY_DISABLED=true`
4. **Network-level:** block `telemetry.composio.dev`

## Red Flags

- SDK telemetry ON by default (allowTracking defaults to true)
- Error telemetry can include error messages and stack traces
- Platform's core function involves API credentials for external services
- Data flows through Composio servers for managed integrations

**Notes:** `COMPOSIO_DISABLE_TELEMETRY` is honored by the CLI; for the SDKs the documented switch is the `allow_tracking` / `allowTracking` constructor option.

## Evidence

- Python telemetry: https://github.com/ComposioHQ/composio/blob/c37b41dd8c89f0fed01156484135099d93b9c052/python/composio/core/models/_telemetry.py
- allow_tracking default: python/composio/core/models/base.py
- TS telemetry: ts/packages/core/src/services/telemetry/TelemetryService.ts; defaults: ts/packages/core/src/utils/config-defaults/ConfigDefaults.node.ts
- CLI: ts/packages/cli/src/config/telemetry.ts and ts/packages/cli/src/constants.ts
- Privacy policy: https://composio.dev/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-audited SDK/CLI source: SDK opt-out is `allow_tracking`/`allowTracking` (env var applies to the CLI); added PostHog for CLI, endpoint and error/stack-trace fields; repo casing updated.
