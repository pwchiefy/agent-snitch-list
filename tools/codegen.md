# Codegen

| Field | Value |
|-------|-------|
| Website | https://codegen.sh/ |
| Repository | https://github.com/codegen-sh/codegen-sdk |
| Category | AI Code Generation SDK |
| Telemetry | Opt-in |
| Default State | OFF (opt-in) |
| Analytics Providers | OTLP (OpenTelemetry) |
| Disable Method | N/A (off by default) |
| Collects Code | No (by default) |
| Collects Prompts | No (by default) |
| Last Verified | 2026-03-23 |

## What Is Collected

- **When opted in:** OpenTelemetry traces of SDK operations
- Execution metadata and performance metrics
- Error spans and exception info
- SDK version and environment info

## What Is NOT Collected

- By default, nothing is collected (telemetry is opt-in)
- No code content in telemetry traces
- No API keys or credentials

## How to Fully Opt Out

No action required -- telemetry is off by default. If previously enabled:
1. Remove OTLP endpoint configuration
2. Remove telemetry initialization from your code

## Red Flags

None identified. Opt-in telemetry via standard OpenTelemetry is a transparent approach. OTLP endpoint is user-controlled.

## Evidence

- Repository: https://github.com/codegen-sh/codegen-sdk
- OpenTelemetry integration is opt-in
- OTLP endpoint configured by user, not hardcoded

## Changelog

- 2026-03-23: Initial entry
