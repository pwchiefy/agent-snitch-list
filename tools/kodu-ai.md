# Kodu AI (Claude Coder / Azad Coder)

| Field | Value |
|-------|-------|
| Website | https://kodu.ai (domain now listed for sale) |
| Repository | https://github.com/kodu-ai/claude-coder |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Amplitude, ipinfo.io (public IP lookup) |
| Disable Method | No documented opt-out |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Feature usage events (session start, task start/resume/complete, credits/offerwall clicks)
- Extension name/version, platform, session ID
- VS Code machine ID as device ID; user ID when logged in
- Public IP address fetched from https://ipinfo.io/json and attached to analytics

## What Is NOT Collected

- Source code and prompts are not part of the Amplitude events in the public source

## How to Fully Opt Out

No documented opt-out.
1. **Network-level blocking:** block Amplitude endpoints and ipinfo.io
2. **Uninstall:** the only complete option

## Red Flags

- No documented opt-out mechanism
- Fetches the user's public IP from a third party (ipinfo.io) and attaches it to analytics
- Device ID is the VS Code machine ID
- Telemetry ON by default with no consent prompt
- Marketplace builds (renamed 'Azad Coder', v25.12.16, Dec 2025) are newer than the public source (last commit 2025-04-30)

## Notes

Repository renamed from kodu-ai/kodu-coder to kodu-ai/claude-coder. kodu.ai now redirects to a domain-sale page; the Marketplace listing kodu-ai.claude-dev-experimental is now titled 'Azad Coder'. Public source looks unmaintained; published builds could not be audited.

## Evidence

- Amplitude tracker with IP lookup: https://github.com/kodu-ai/claude-coder/blob/60c1a717992c1a597850d1e3671dc0491eab02ed/extension/src/utils/amplitude/index.ts
- Dependencies: https://github.com/kodu-ai/claude-coder/blob/60c1a717992c1a597850d1e3671dc0491eab02ed/extension/package.json#L210-L211
- Marketplace listing kodu-ai.claude-dev-experimental ('Azad Coder', v25.12.16)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Repo renamed to kodu-ai/claude-coder; identified ipinfo.io as the IP source; noted kodu.ai domain for sale and Marketplace builds newer than public source.
