# Semgrep

| Field | Value |
|-------|-------|
| Website | https://semgrep.dev/ |
| Repository | https://github.com/semgrep/semgrep |
| Category | Static Analysis / Security Scanning |
| Telemetry | Yes |
| Default State | Conditional (AUTO -- sends metrics unless CI or explicitly disabled) |
| Analytics Providers | Custom (Semgrep servers) |
| Disable Method | `--metrics=off` flag or `SEMGREP_SEND_METRICS=off` env var |
| Collects Code | No |
| Collects Prompts | N/A |
| Last Verified | 2026-03-23 |

## What Is Collected

- **Hashed/pseudonymous data only** -- no raw code or filenames
- Rule IDs and rule hashes used in scans
- Hashed project URL (one-way SHA256)
- Number of findings per rule
- Number of files and lines scanned
- Scan timing and performance metrics
- Semgrep version and environment info
- Feature flags and configuration options
- Anonymized error reports

## What Is NOT Collected

- No source code content
- No file contents or paths (paths are hashed)
- No personally identifiable information
- No repository names in plaintext
- No finding details or code snippets

## How to Fully Opt Out

1. **CLI flag:** `semgrep scan --metrics=off`
2. **Environment variable:** `export SEMGREP_SEND_METRICS=off`
3. **Settings file:** Add `metrics: "off"` to `.semgrep/settings.yml`
4. **Note:** In AUTO mode (default), metrics are sent when rules are pulled from the registry but NOT when using only local rules

## Red Flags

- Conditional default (AUTO) may confuse users about when data is sent
- Hashing is one-way but combined hashes could theoretically be correlated
- Semgrep App (cloud product) collects more data than the CLI

## Evidence

- Repository: https://github.com/semgrep/semgrep
- Metrics documentation: https://semgrep.dev/docs/metrics/
- Telemetry code: `src/semgrep/metrics.py` in source
- PRIVACY.md in repository documents all collected fields
- Pseudonymization approach is well-documented

## Changelog

- 2026-03-23: Initial entry
