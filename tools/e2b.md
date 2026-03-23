# E2B

| Field | Value |
|-------|-------|
| Website | https://e2b.dev/ |
| Repository | https://github.com/e2b-dev/e2b |
| Category | AI Code Execution Sandbox |
| Telemetry | No (client SDK) |
| Default State | OFF |
| Analytics Providers | None (client-side) |
| Disable Method | N/A |
| Collects Code | No (client SDK); code runs in E2B sandboxes (server-side) |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- The client SDK itself does not collect telemetry.
- **Server-side sandboxes:** Code executed in E2B sandboxes runs on E2B infrastructure. Sandbox lifecycle metadata (creation, duration, resource usage) is tracked for billing and operations.

## What Is NOT Collected

- No client-side analytics or phone-home in the SDK
- E2B states sandbox contents are ephemeral and destroyed after use

## How to Fully Opt Out

No client-side telemetry to disable. To avoid server-side code processing:
1. Use E2B's open-source sandbox runtime self-hosted
2. The `e2b` CLI and SDK have no telemetry to disable

## Red Flags

- Code executed in sandboxes runs on E2B infrastructure (by design)
- Ephemeral sandbox claims require trust in E2B's infrastructure
- Sandbox execution logs may be retained for operational purposes

## Evidence

- Repository: https://github.com/e2b-dev/e2b
- No analytics dependencies in client SDK
- Sandbox architecture documentation on website
- Privacy policy: https://e2b.dev/privacy

## Changelog

- 2026-03-23: Initial entry
