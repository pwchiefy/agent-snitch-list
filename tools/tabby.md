# Tabby

| Field | Value |
|-------|-------|
| Website | https://www.tabbyml.com |
| Repository | https://github.com/TabbyML/tabby |
| Category | AI Code Completion (Self-hosted) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (app.tabbyml.com/api/usage) |
| Disable Method | `TABBY_DISABLE_USAGE_COLLECTION=1` (server); `anonymousUsageTracking.disable = true` (IDE) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- **Server:** a `ServeHealth` event posted to `https://app.tabbyml.com/api/usage` on start and every 3000 seconds (50 minutes), containing model, chat model, device, architecture, CPU info and count, CUDA devices, version and webserver flag
- A random anonymous ID stored in `~/.tabby/usage_anonymous_id`
- **IDE extensions:** system and extension version, completion count, accepted count, completion request latency

## What Is NOT Collected

- Source code, completions or prompts (per Tabby docs: 'We will not see or collect any code')

## How to Fully Opt Out

1. **Server:** `export TABBY_DISABLE_USAGE_COLLECTION=1` before starting Tabby (any value disables it).
2. **IDE extensions:** in `~/.tabby-client/agent/config.toml`:
   ```toml
   [anonymousUsageTracking]
   disable = true
   ```

## Red Flags

- ON by default; self-hosters must opt out explicitly.
- Data goes to Tabby's own endpoint.
- Recurring heartbeat every 50 minutes.

## Evidence

- Usage tracker (endpoint, env var): https://github.com/TabbyML/tabby/blob/21b29048d7bcf6b94f9f482f2d0fd05efadfd19f/crates/tabby-common/src/usage.rs#L13
- Heartbeat: https://github.com/TabbyML/tabby/blob/21b29048d7bcf6b94f9f482f2d0fd05efadfd19f/crates/tabby/src/serve.rs#L373
- Server usage-collection doc: https://github.com/TabbyML/tabby/blob/21b29048d7bcf6b94f9f482f2d0fd05efadfd19f/website/docs/administration/usage-collection.md
- IDE usage-collection doc: https://github.com/TabbyML/tabby/blob/21b29048d7bcf6b94f9f482f2d0fd05efadfd19f/website/docs/extensions/configurations.md#L49

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified; corrected source paths (telemetry lives in crates/tabby-common/src/usage.rs), endpoint and heartbeat interval; IDE opt-out key clarified.
