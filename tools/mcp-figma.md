# MCP: Figma-Context-MCP (Framelink)

| Field | Value |
|-------|-------|
| Website | https://www.framelink.ai |
| Repository | https://github.com/GLips/Figma-Context-MCP |
| Category | MCP Server (Figma design context) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Run with `--no-telemetry`, or set env `FRAMELINK_TELEMETRY=off` or `DO_NOT_TRACK=1` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- `tool_called` events: tool, duration, transport, auth mode, MCP client name/version, output format, depth, whether a node ID was given
- Figma response metrics: raw/simplified size, node/component/instance/text/image counts, fetch/simplify/serialize timings
- Errors: type, phase, category, HTTP status, network/fs code, redacted message (Figma tokens scrubbed)
- Validation rejects
- Common: server version, OS, Node major version, CI flag, proxy mode
- Random per-session ID; GeoIP enabled (approximate location)

## What Is NOT Collected

- Figma file contents or design data
- Figma API tokens (redacted from error messages)
- Persistent user ID

## How to Fully Opt Out

Any one of:
1. **CLI flag:** `--no-telemetry`
2. **Environment:** `FRAMELINK_TELEMETRY=off`
3. **Environment:** `DO_NOT_TRACK=1`

## Red Flags

- Telemetry added after the 2026-03-23 audit and ON by default
- GeoIP enabled on purpose ('our geography analytics depend on it')
- No telemetry section in the README; disclosed only by a startup message on stderr and CLI help

## Notes

16,020 stars. Package figma-developer-mcp (Framelink). Telemetry arrived in v0.10.0 (April 2026). Uses a random per-session ID rather than a persistent one and redacts Figma tokens from error messages. Honors DO_NOT_TRACK.

## Evidence

- PostHog client: https://github.com/GLips/Figma-Context-MCP/blob/c083d65c7e002923e7cb98f4e3bdafb105e90f6d/src/telemetry/client.ts#L10-L121
- Event shapes: https://github.com/GLips/Figma-Context-MCP/blob/c083d65c7e002923e7cb98f4e3bdafb105e90f6d/src/telemetry/capture.ts
- CHANGELOG v0.10.0 'add anonymous PostHog telemetry': https://github.com/GLips/Figma-Context-MCP/blob/c083d65c7e002923e7cb98f4e3bdafb105e90f6d/CHANGELOG.md
- posthog-node dependency: https://github.com/GLips/Figma-Context-MCP/blob/c083d65c7e002923e7cb98f4e3bdafb105e90f6d/package.json#L65

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Reclassified OFF -> ON: PostHog telemetry added in v0.10.0 (2026-04-10).
