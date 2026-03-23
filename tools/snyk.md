# Snyk Code AI

| Field | Value |
|-------|-------|
| Website | https://snyk.io/ |
| Repository | https://github.com/snyk/cli |
| Category | AI-Assisted Security Scanning |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom API (Snyk servers) |
| Disable Method | `SNYK_DISABLE_ANALYTICS=1` environment variable |
| Collects Code | Yes (for `snyk code test`) |
| Collects Prompts | N/A |
| Last Verified | 2026-03-23 |

## What Is Collected

- CLI usage analytics (commands run, flags used, timing)
- For `snyk code test`: code snippets sent to Snyk servers for analysis
- Dependency manifests and lockfiles
- OS, CLI version, Node.js version
- Error and crash data
- Organization and project metadata
- Vulnerability scan results

## What Is NOT Collected

- Snyk states code snippets for `snyk code` are processed ephemerally
- Claims code is not stored or used for training
- `SNYK_DISABLE_ANALYTICS=1` stops usage telemetry but NOT code analysis data (which is required for the feature)

## How to Fully Opt Out

1. **Analytics telemetry:** `export SNYK_DISABLE_ANALYTICS=1`
2. **CLI config:** `snyk config set disable-analytics=1`
3. **Code scanning:** Cannot opt out of code transmission when using `snyk code test` -- it requires server-side analysis. Use `snyk test` (dependency-only) to avoid sending code.
4. **Network block:** Block `*.snyk.io` to prevent all communication

## Red Flags

- `snyk code test` sends source code to Snyk servers -- this is often not obvious to users
- Analytics opt-out does NOT prevent code from being sent during code scanning
- Broad data collection in default mode
- CLI is open source but the analysis engine is closed source

## Evidence

- CLI repository: https://github.com/snyk/cli
- Analytics disable: documented in CLI help and README
- Code transmission for `snyk code`: https://docs.snyk.io/snyk-code
- Privacy policy: https://snyk.io/policies/privacy/

## Changelog

- 2026-03-23: Initial entry
