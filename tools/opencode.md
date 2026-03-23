# OpenCode

| Field | Value |
|-------|-------|
| Website | https://opencode.ai |
| Repository | https://github.com/anomalyco/opencode |
| Category | AI Coding Assistant (CLI / TUI) |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None (PostHog used only in CI for download stats, not in the application) |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing. OpenCode does not include any telemetry, analytics, or tracking in the application itself.
- The project actively disables LSP telemetry to prevent language servers from phoning home.
- PostHog is used only in the CI/CD pipeline to track download counts from releases; it does not run in the application.

## What Is NOT Collected

- No usage analytics
- No error reporting
- No code or file contents
- No prompts or LLM responses
- No machine identifiers
- No crash reports
- No feature usage tracking
- LSP telemetry is actively suppressed

## How to Fully Opt Out

No action required. OpenCode has no telemetry infrastructure in the application. The developers have taken the additional step of actively disabling LSP telemetry that language servers might otherwise send.

## Red Flags

None identified. The project demonstrates an intentionally privacy-first approach:
- No analytics SDKs in the application
- Active suppression of third-party (LSP) telemetry
- PostHog is confined to CI/CD release download tracking only, never shipped in the binary

## Evidence

- No analytics dependencies in the application code
- LSP telemetry actively disabled in LSP client configuration
- PostHog usage limited to GitHub Actions CI workflows (download count tracking)
- Repository: https://github.com/anomalyco/opencode
- Source code audit confirms zero telemetry in the compiled binary

## Changelog

- 2026-03-23: Initial entry
