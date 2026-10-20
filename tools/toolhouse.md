# Toolhouse

| Field | Value |
|-------|-------|
| Website | https://toolhouse.ai/ |
| Repository | https://github.com/toolhouseai/toolhouse-sdk-python (also toolhouse-sdk-typescript) |
| Category | AI Tool Execution Platform |
| Telemetry | No (client SDK) |
| Default State | OFF |
| Analytics Providers | None (client-side) |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

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

**Status (2026-10-20):** SDK repositories (toolhouse-sdk-python, toolhouse-sdk-typescript) have not been updated since March 2025.

## Evidence

- GitHub organization: https://github.com/toolhouseai
- No analytics dependencies in SDK packages
- Tool execution architecture documented on website
- https://github.com/toolhouseai/toolhouse-sdk-python/tree/a530681a5835fe88bc31e6402408488fd73d94b6 (dependencies: requests, http-exceptions, openai, anthropic, groq, python-dotenv)
- Privacy policy: https://toolhouse.ai/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified Python SDK (no analytics); SDK repos inactive since March 2025; added privacy URL.
