# Tabnine

| Field | Value |
|-------|-------|
| Website | https://www.tabnine.com |
| Repository | https://github.com/codota/tabnine-vscode (VS Code extension, archived Oct 2026) |
| Category | AI Code Completion (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Tabnine telemetry; Application Insights (VS Code extension) |
| Disable Method | IDE telemetry setting for the extension reporter; no documented Tabnine client opt-out |
| Collects Code | No (not retained) |
| Collects Prompts | No (not retained) |
| Last Verified | 2026-10-20 |

## What Is Collected

**Tabnine client (per Tabnine docs):**
- Plugin and binary configuration
- Machine details (CPU, processors, memory)
- One-way hashed user email, hostname, IP
- IDE type and version
- Aggregated completion counts per language

**VS Code extension:** events via `vscode-extension-telemetry` (Application Insights).

**Tabnine cluster:** operational metrics and logs (GPU/CPU, memory, throughput, latency), retained one week.

**Self-hosted:** client telemetry goes to your Tabnine server, which forwards it to Tabnine; air-gapped installs can route to your own Prometheus/log aggregator.

## What Is NOT Collected

- Code: Tabnine states it never retains or shares your code and deletes request context after the response
- No training on customer code (models trained on permissively licensed open-source code)

## How to Fully Opt Out

1. **VS Code:** `"telemetry.telemetryLevel": "off"` (governs the extension's Application Insights reporter)
2. **Enterprise / air-gapped:** route metrics and logs to your own infrastructure
3. **No documented user-level toggle** for Tabnine client telemetry

## Red Flags

- Client telemetry ON by default; no documented user-level opt-out beyond the IDE telemetry setting
- Telemetry includes hashed email, hostname and IP
- Self-hosted deployments forward client telemetry from the customer server to Tabnine
- Server-side completion engine is closed source; the VS Code client repo is now archived

**Notes:** Tabnine was acquired by Tricentis (announced 2026-07-30); tabnine.com/privacy now redirects to a Tricentis-hosted policy. The codota/tabnine-vscode repository was archived in October 2026. Strong 'no-train, no-retain' claims in Tabnine docs.

## Evidence

- Tabnine privacy docs: https://docs.tabnine.com/main/welcome/readme/privacy
- Extension reporter: https://github.com/codota/tabnine-vscode/blob/d6b83fea2dc5e915579a5e9b452719c59fde08e1/src/reports/TelemetryReporter.ts
- Acquisition: https://www.tricentis.com/news/tricentis-acquires-tabnine
- Privacy policy: https://www.tabnine.com/privacy-policy/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Tabnine acquired by Tricentis (2026-07-30); VS Code extension repo archived; documented client telemetry fields from Tabnine docs (hashed email, hostname, IP) and self-hosted forwarding; privacy URL updated.
