# Roo Code

| Field | Value |
|-------|-------|
| Website | https://github.com/RooCodeInc/Roo-Code (roocode.com now redirects to roomote.dev) |
| Repository | https://github.com/RooCodeInc/Roo-Code (archived) |
| Category | AI Coding Assistant (IDE Extension) - discontinued |
| Telemetry | No |
| Default State | N/A in final release (older versions: ON) |
| Analytics Providers | None |
| Disable Method | N/A in the final release (v3.54.0). Older versions: `roo-cline` telemetry setting or VS Code `telemetry.telemetryLevel: off` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Final release v3.54.0: nothing (all telemetry code removed)
- Versions up to 3.53.x: PostHog feature-usage events, exceptions, VS Code machine ID, ON by default

## What Is NOT Collected

- v3.54.0: no analytics, no crash reporting, no identifiers
- Older versions did not collect code or prompts per the project's privacy policy

## How to Fully Opt Out

1. **Update to v3.54.0** (the final release), which contains no telemetry
2. **Older versions:** VS Code setting for Roo Code telemetry or `"telemetry.telemetryLevel": "off"`
3. **Consider migrating:** the extension is no longer maintained

## Red Flags

- Project shut down on 2026-05-15; no further security or privacy fixes
- Users still on versions before 3.54.0 send PostHog telemetry by default

## Notes

Roo Code, Inc. shut the extension down on 2026-05-15 and archived the repository; the team moved to Roomote. The final release removed all telemetry. Bug #11602 (cloud telemetry bypassing settings) was closed as fixed in February 2026. A community fork, Zoo Code, continues separately and is not covered here. The repo's PRIVACY.md (September 2025) still describes PostHog. The 2026-03-23 claim that Cline has zero telemetry was removed as unsupported.

## Evidence

- 'Remove all telemetry (#12324)': https://github.com/RooCodeInc/Roo-Code/commit/ff16c9c297ac
- Release v3.54.0 (2026-05-15): https://github.com/RooCodeInc/Roo-Code/commit/f49f0ce56aa1
- Shutdown notice: https://github.com/RooCodeInc/Roo-Code/blob/b867ec9145750d0ae1ff7f02d35406e9bf2a0b16/README.md
- Issue #11602 (closed as completed 2026-02-19): https://github.com/RooCodeInc/Roo-Code/issues/11602

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Project shut down 2026-05-15 and archived; final v3.54.0 removed all telemetry; reclassified ON -> none for the final release; bug #11602 marked fixed; removed unsupported Cline comparison.
