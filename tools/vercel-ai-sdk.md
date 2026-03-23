# Vercel AI SDK

| Field | Value |
|-------|-------|
| Website | https://sdk.vercel.ai/ |
| Repository | https://github.com/vercel/ai |
| Category | AI Application SDK |
| Telemetry | No (SDK itself); user-facing OTLP is opt-in |
| Default State | OFF |
| Analytics Providers | None (OTLP is user-controlled) |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing by default. The SDK does not phone home.
- **User-facing OTLP:** The SDK provides OpenTelemetry instrumentation that developers can optionally enable to trace their own AI applications. This sends data to the developer's own configured OTLP endpoint, not to Vercel.

## What Is NOT Collected

- No usage analytics sent to Vercel
- No prompts or completions
- No code
- No crash reports
- No user identifiers

## How to Fully Opt Out

No action required. The SDK has no built-in telemetry. The OTLP support is a developer tool for tracing their own applications and only activates when explicitly configured with an endpoint.

## Red Flags

None identified. The SDK is a clean library with no phone-home behavior. Note that deploying applications on Vercel's platform involves separate Vercel platform telemetry, which is independent of this SDK.

## Evidence

- Repository: https://github.com/vercel/ai
- No analytics dependencies in package.json
- OTLP support documented as opt-in developer tooling
- No outbound telemetry in source code

## Changelog

- 2026-03-23: Initial entry
