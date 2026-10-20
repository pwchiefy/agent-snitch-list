# Semgrep

| Field | Value |
|-------|-------|
| Website | https://semgrep.dev/ |
| Repository | https://github.com/semgrep/semgrep |
| Category | Static Analysis / Security Scanning |
| Telemetry | Yes |
| Default State | Conditional (AUTO) |
| Analytics Providers | Custom (metrics.semgrep.dev); OpenTelemetry (telemetry.semgrep.dev) |
| Disable Method | `--metrics=off` / `SEMGREP_SEND_METRICS=off`; `SEMGREP_MCP_DISABLE_TRACING=true` |
| Collects Code | No |
| Collects Prompts | N/A |
| Last Verified | 2026-10-20 |

## What Is Collected

- **Metrics (AUTO mode):** sent when rules come from the Semgrep Registry or when logged in; not sent with only local rules.
- Pseudonymous data: rule IDs/hashes, hashed project URL, findings per rule, files/lines scanned, timing, version/environment, feature usage (including which CLI flags and env vars were set), anonymized errors.
- **`semgrep mcp`:** OpenTelemetry traces to `https://telemetry.semgrep.dev` by default (span attributes include selected scan arguments).
- **`--trace` (off by default):** OTel traces for CLI scans.

## What Is NOT Collected

- Source code or file contents
- Raw file paths or repository names (hashed)
- Finding details beyond counts (per metrics.md)

## How to Fully Opt Out

1. `semgrep --metrics=off` or `export SEMGREP_SEND_METRICS=off`.
2. MCP server: `export SEMGREP_MCP_DISABLE_TRACING=true` (also turns metrics off for that process).
3. Don't pass `--trace`.

## Red Flags

- AUTO default is non-obvious.
- MCP server traces to Semgrep by default.
- Hashes could be correlated.
- The cloud platform collects more than the CLI.

## Evidence

- Metrics endpoint: https://github.com/semgrep/semgrep/blob/51602ad27f09ef9342a5620601de5ef8f572fbc6/cli/src/semgrep/metrics.py#L84
- AUTO decision: https://github.com/semgrep/semgrep/blob/51602ad27f09ef9342a5620601de5ef8f572fbc6/cli/src/semgrep/metrics.py#L737
- OTel endpoint: https://github.com/semgrep/semgrep/blob/51602ad27f09ef9342a5620601de5ef8f572fbc6/cli/src/semgrep/telemetry.py#L76
- MCP tracing toggle: https://github.com/semgrep/semgrep/blob/51602ad27f09ef9342a5620601de5ef8f572fbc6/cli/src/semgrep/mcp/utilities/tracing.py#L198
- Metrics documentation in repo: https://github.com/semgrep/semgrep/blob/51602ad27f09ef9342a5620601de5ef8f572fbc6/metrics.md
- Docs: https://semgrep.dev/docs/metrics

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified: corrected source path (cli/src/semgrep/metrics.py, metrics.md); added AUTO-when-logged-in, OpenTelemetry tracing endpoint and default-on tracing for `semgrep mcp`.
