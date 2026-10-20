# Kimi Code CLI

| Field | Value |
|-------|-------|
| Website | https://github.com/MoonshotAI/kimi-code |
| Repository | https://github.com/MoonshotAI/kimi-code |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom first-party (`telemetry-logs.kimi.com`) |
| Disable Method | `KIMI_DISABLE_TELEMETRY=1` or `telemetry = false` in `config.toml` |
| Collects Code | No (not observed) |
| Collects Prompts | No (not observed) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Anonymous telemetry events ("anonymous telemetry reporting" per docs)
- Crash reports (`packages/telemetry/src/crash.ts`)
- System metrics (`packages/telemetry/src/systemMetrics.ts`)
- Device ID (`kfc_device_id_` prefix)

## What Is NOT Collected

- Not fully verified; event payloads were not exhaustively enumerated in this review

## How to Fully Opt Out

1. **Environment:** `export KIMI_DISABLE_TELEMETRY=1`
2. **Config:** `telemetry = false` in `config.toml`
3. **Network block:** block `telemetry-logs.kimi.com`

## Red Flags

- Telemetry ON by default
- Event schema not documented in user docs; only the opt-out is

## Notes

MIT, TypeScript. Replaces the archived Python Kimi CLI (MoonshotAI/kimi-cli, archived; last push 2026-09-22), whose README says existing installs will stop working.

## Evidence

- https://github.com/MoonshotAI/kimi-code/blob/67325c1b25e46b2fc66043bceab059221b719fa9/packages/oauth/src/region.ts (line 67)
- https://github.com/MoonshotAI/kimi-code/blob/67325c1b25e46b2fc66043bceab059221b719fa9/packages/telemetry/src/transport.ts
- https://github.com/MoonshotAI/kimi-code/blob/67325c1b25e46b2fc66043bceab059221b719fa9/docs/en/configuration/config-files.md (`telemetry` default `true`)
- https://github.com/MoonshotAI/kimi-code/blob/67325c1b25e46b2fc66043bceab059221b719fa9/docs/en/configuration/env-vars.md
- https://github.com/MoonshotAI/kimi-cli (archived predecessor)

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
