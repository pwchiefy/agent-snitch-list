# Toolhouse

| Field | Value |
|-------|-------|
| Website | https://toolhouse.ai/ |
| Repository | https://github.com/toolhouseai (SDK repositories) |
| Category | AI Tool Execution Platform |
| Telemetry | No (client SDK) |
| Default State | OFF |
| Analytics Providers | None (client-side) |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- The client SDK does not collect telemetry.
- **Server-side:** Tool executions run on Toolhouse infrastructure when using their hosted service. Execution metadata is tracked for billing and operations.

## What Is NOT Collected

- No client-side analytics
- No prompt content in SDK
- No code collection

## How to Fully Opt Out

No client-side telemetry to disable. The SDK communicates with Toolhouse servers for tool execution as part of its core function.

## Red Flags

- Tool executions run on Toolhouse infrastructure (by design for the hosted service)
- API keys for connected tools flow through Toolhouse servers

## Evidence

- GitHub organization: https://github.com/toolhouseai
- No analytics dependencies in SDK packages
- Tool execution architecture documented on website

## Changelog

- 2026-03-23: Initial entry
