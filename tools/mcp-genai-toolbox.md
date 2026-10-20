# MCP: MCP Toolbox for Databases (Google)

| Field | Value |
|-------|-------|
| Website | https://mcp-toolbox.dev/ |
| Repository | https://github.com/googleapis/mcp-toolbox |
| Category | MCP Server (databases) |
| Telemetry | No |
| Default State | N/A (opt-in observability flags only) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing by default. OpenTelemetry export only with `--telemetry-gcp` or `--telemetry-otlp <endpoint>`
- Google Cloud API requests carry a toolbox User-Agent (standard client behavior)

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No user identifiers
- No tool arguments or outputs sent to the maintainers

## How to Fully Opt Out

No action required. Do not pass `--telemetry-gcp` / `--telemetry-otlp`.

## Red Flags

None identified.

## Notes

Repository renamed from googleapis/genai-toolbox to googleapis/mcp-toolbox. Opt-in observability for database servers. Requests to Google Cloud APIs carry a toolbox User-Agent (standard API client behavior).

## Evidence

- Flags: https://github.com/googleapis/mcp-toolbox/blob/0e9e80bdae3c7e620d5214e3bb86f8bbbe90acf2/cmd/internal/flags.go#L35-L38

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source; repo renamed from googleapis/genai-toolbox to googleapis/mcp-toolbox, telemetry still opt-in.
