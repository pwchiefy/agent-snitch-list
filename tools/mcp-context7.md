# MCP: Context7

| Field | Value |
|-------|-------|
| Website | https://context7.com |
| Repository | https://github.com/upstash/context7 |
| Category | MCP Server (documentation retrieval) |
| Telemetry | No |
| Default State | N/A (no telemetry); queries go to hosted API |
| Analytics Providers | None (local Prometheus metrics only) |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | Query text sent to Context7 API (core function) |
| Last Verified | 2026-10-20 |

## What Is Collected

- No vendor analytics
- Core function: library name / ID and free-text query sent to `context7.com/api`

## What Is NOT Collected

- No usage analytics, crash reports or machine IDs pushed to a vendor

## How to Fully Opt Out

1. No telemetry to disable. Local metrics listener: `OTEL_SDK_DISABLED=true`. To avoid sending queries, do not use the hosted API (`CONTEXT7_API_URL` can point elsewhere).

## Red Flags

- Agent-written query text (which can describe your code or task) is sent to Context7's hosted API as part of normal operation

## Notes

MIT. Local metrics listener can be disabled with `OTEL_SDK_DISABLED=true` or `OTEL_METRICS_EXPORTER=none`.

## Evidence

- https://github.com/upstash/context7/blob/4ac51399a2a752bfcb3caa9d8efc09dcbd8453dd/packages/mcp/src/lib/api.ts (lines 151-193)
- https://github.com/upstash/context7/blob/4ac51399a2a752bfcb3caa9d8efc09dcbd8453dd/packages/mcp/src/lib/telemetry-config.ts
- https://github.com/upstash/context7/blob/4ac51399a2a752bfcb3caa9d8efc09dcbd8453dd/packages/mcp/README.md (OpenTelemetry observability)

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
