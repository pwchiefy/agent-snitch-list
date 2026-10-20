# MCP: FastMCP (Prefect)

| Field | Value |
|-------|-------|
| Website | https://gofastmcp.com |
| Repository | https://github.com/PrefectHQ/fastmcp |
| Category | MCP Framework (Python) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing by default. OpenTelemetry API instrumentation is a no-op unless you install an OTel SDK and configure exporters
- The documentation website uses Amplitude (website only, not the library)

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No user identifiers
- No tool arguments or outputs sent to the maintainers

## How to Fully Opt Out

No action required.

## Red Flags

None identified.

## Notes

Python framework for building MCP servers (core now split into fastmcp-slim). Opt-in instrumentation, not phone-home telemetry. The documentation website (gofastmcp.com) uses Amplitude; the library does not.

## Evidence

- telemetry.py: https://github.com/PrefectHQ/fastmcp/blob/0f4674e2e15c9cb3a13badf29c873e61e5653d9b/fastmcp_slim/fastmcp/telemetry.py#L1-L5
- pyproject (OTel SDK dev-only): https://github.com/PrefectHQ/fastmcp/blob/0f4674e2e15c9cb3a13badf29c873e61e5653d9b/pyproject.toml

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source, no change.
