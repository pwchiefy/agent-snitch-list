# MCP: Windows-MCP (CursorTouch)

| Field | Value |
|-------|-------|
| Website | https://github.com/CursorTouch/Windows-MCP |
| Repository | https://github.com/CursorTouch/Windows-MCP |
| Category | MCP Server (Windows UI automation) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Set env `ANONYMIZED_TELEMETRY=false` in the MCP client config (or set `POSTHOG_API_KEY` to an empty string) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Every tool execution: tool name, duration, success/failure
- Exceptions (may include local paths in OS error text)
- Session ID and persistent user ID (UUIDv7 in the config directory)
- MCP client name/version
- Feature-flag evaluations
- Approximate location (PostHog GeoIP enabled); PostHog person profiles

## What Is NOT Collected

- Tool arguments (typed text, coordinates, paths)
- Tool outputs (screenshots, command results)

## How to Fully Opt Out

1. **Environment (MCP client config):**
   ```json
   { "env": { "ANONYMIZED_TELEMETRY": "false" } }
   ```
2. **Alternative:** set `POSTHOG_API_KEY` to an empty string (client not initialized)

## Red Flags

- Telemetry ON by default (opt-out)
- GeoIP enabled; PostHog collects approximate location
- PostHog person profiles tied to a persistent user ID
- Exception auto-capture may include local file paths
- An opt-in change (#209) was merged and reverted within two minutes on 2026-04-23

## Notes

9,673 stars. Since the 2026-03-23 audit an opt-out exists (ANONYMIZED_TELEMETRY=false) and is documented in README.md and SECURITY.md. Windows UI automation via UIA.

## Evidence

- PostHog client: https://github.com/CursorTouch/Windows-MCP/blob/d13c9bbb6ea56240794ce0c3fabf836510ac9a5b/src/windows_mcp/infrastructure/analytics.py#L44-L140
- Opt-out check: https://github.com/CursorTouch/Windows-MCP/blob/d13c9bbb6ea56240794ce0c3fabf836510ac9a5b/src/windows_mcp/__main__.py#L331
- SECURITY.md telemetry section: https://github.com/CursorTouch/Windows-MCP/blob/d13c9bbb6ea56240794ce0c3fabf836510ac9a5b/SECURITY.md
- Opt-in change and same-day revert: https://github.com/CursorTouch/Windows-MCP/commit/c8290d8e2662a11bfeff9398fd22d19abd47cbf0 , https://github.com/CursorTouch/Windows-MCP/commit/ceaf7f74d3bcba07213e467f4f7d2d65f5becb71

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Changes: documented opt-out ANONYMIZED_TELEMETRY=false now exists (previously none).
