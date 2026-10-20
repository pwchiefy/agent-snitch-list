# Sourcegraph Cody

| Field | Value |
|-------|-------|
| Website | https://sourcegraph.com/cody |
| Repository | https://github.com/sourcegraph/cody-public-snapshot (archived snapshot; Cody repo now private) |
| Category | AI Coding Assistant (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | GraphQL telemetry endpoint, OpenTelemetry (OTLP), Sentry |
| Disable Method | VS Code: `"cody.telemetry.level": "off"` (hidden setting); self-hosted: `disableNonCriticalTelemetry: true` |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

**Status:** Cody Free and Pro were discontinued (access ended 2025-07-23); Cody is Enterprise-only. The client source went private; the last public copy is the archived `cody-public-snapshot`.

**Cloud / Sourcegraph-managed (per last public source and original audit):**
- Usage telemetry via Sourcegraph's telemetry (GraphQL) endpoint: feature events, completion metrics
- Error reports (Sentry), traces (OpenTelemetry OTLP exporters bundled in the extension)
- Code context and prompts sent to Sourcegraph for LLM processing
- IDE type/version, extension version, anonymous IDs

**Self-hosted Sourcegraph:**
- Code and prompts stay within your infrastructure; aggregate usage statistics can be limited by admins

## What Is NOT Collected

- Self-hosted: code does not leave your infrastructure
- Git credentials or SSH keys

## How to Fully Opt Out

1. **VS Code extension:** `"cody.telemetry.level": "off"` (hidden setting, default `all`) and `"telemetry.telemetryLevel": "off"`
2. **Self-hosted Sourcegraph:** site config `"disableNonCriticalTelemetry": true`
3. **Enterprise:** self-hosted Sourcegraph with your own LLM providers for full data isolation

## Red Flags

- Cloud users' prompts and code context sent to Sourcegraph servers
- Multiple telemetry systems (GraphQL, OTLP, Sentry) increase data collection surface
- VS Code cody.telemetry.level setting may not cover all channels (Sentry independent)
- Cloud service processes code through Sourcegraph before reaching LLM provider

**Notes:** Cody Free and Pro were discontinued (new signups stopped 2025-06-25, access ended 2025-07-23); Cody is now Enterprise-only. The sourcegraph/cody repo went private; sourcegraph/cody-public-snapshot (archived 2025-08-01) is the last public copy, so current client behavior cannot be verified from source. Self-hosted Sourcegraph keeps code within your infrastructure.

## Evidence

- Telemetry recorder: https://github.com/sourcegraph/cody-public-snapshot/blob/8e20ac6c1460c08b0db581c0204658112a246eda/vscode/src/services/telemetry-v2.ts
- Hidden `telemetry.level` setting: vscode/src/configuration.ts at the same commit
- Plan changes: https://sourcegraph.com/blog/changes-to-cody-free-pro-and-enterprise-starter-plans
- Admin telemetry docs: https://sourcegraph.com/docs/admin/telemetry
- Privacy policy: https://sourcegraph.com/terms/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Cody repo is now private (public snapshot archived 2025-08-01); Cody Free/Pro discontinued July 2025 (Enterprise-only); repo and evidence paths updated to the snapshot; current client behavior cannot be verified from source.
