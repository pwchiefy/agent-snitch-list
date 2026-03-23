# Windsurf (Codeium)

| Field | Value |
|-------|-------|
| Website | https://codeium.com/windsurf |
| Repository | Closed source |
| Category | AI Code Editor / Completion (IDE + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Codeium internal telemetry infrastructure |
| Disable Method | Enterprise tier: admin controls; Individual tier: limited opt-out |
| Collects Code | Yes (individual tier: code snippets used for service; Enterprise: configurable) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

**Individual tier:**
- Code context sent to Codeium servers for completions
- Code snippets for autocomplete and chat features
- Prompts and chat messages
- Suggestion acceptance/rejection events
- IDE type, version, and extension version
- Programming language of active file
- Latency and performance metrics
- Feature usage events
- Error telemetry
- Anonymous user identifier (linked to Codeium account)

**Enterprise tier:**
- Code processing with no-retention guarantees
- Configurable telemetry controls via admin dashboard
- On-premise deployment option available (air-gapped)

## What Is NOT Collected

- Enterprise (with on-premise): no data leaves customer infrastructure
- Git credentials or SSH keys
- Codeium states it does not train on individual user code (for non-enterprise, verify current terms)

## How to Fully Opt Out

1. **Enterprise self-hosted deployment:** Deploy Codeium on-premise for full data control:
   - Air-gapped deployment eliminates all external telemetry
   - Enterprise admin console provides granular controls
2. **Individual tier (limited):**
   - Disable VS Code telemetry: `"telemetry.telemetryLevel": "off"`
   - Codeium extension settings may offer limited telemetry toggles
   - Code must still be sent to Codeium servers for the service to function
3. **Network-level:** Block Codeium telemetry endpoints (will break functionality):
   - `*.codeium.com`

## Red Flags

- Individual tier users' code snippets are processed on Codeium's servers with limited transparency about retention
- Closed source: no way to independently verify data handling through code review
- Windsurf is a relatively new editor; data practices may evolve
- The acquisition landscape (Codeium was acquired) may affect future data policies
- No clear documentation on exactly what telemetry data points are collected vs. what code context is sent for functionality

## Evidence

- Codeium Privacy Policy: https://codeium.com/privacy-policy
- Codeium Terms of Service: https://codeium.com/terms-of-service
- Enterprise security documentation: https://codeium.com/security
- Closed source platform; no source code available for review

## Changelog

- 2026-03-23: Initial entry
