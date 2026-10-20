# Kiro (AWS)

| Field | Value |
|-------|-------|
| Website | https://kiro.dev |
| Repository | Closed source |
| Category | Agentic IDE (VS Code fork) and CLI |
| Telemetry | Yes |
| Default State | ON (Free/individual); OFF (Enterprise) |
| Analytics Providers | AWS first-party |
| Disable Method | Settings > User > Application > Telemetry and Content: uncheck "Usage Analytics And Performance Metrics" and "Content Collection for Service Improvement" |
| Collects Code | Yes (content collection on by default for Free/individual) |
| Collects Prompts | Yes (content collection on by default for Free/individual) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Kiro version, operating system, anonymous machine ID
- Request counts, errors and latency for login, tab completion, code generation, steering, hooks, spec generation, tools and MCP
- Crash reports
- Content (prompts, code) for service improvement including training, unless opted out (Free/individual)

## What Is NOT Collected

- Enterprise and Amazon Q Developer Pro (via AWS account): content not used for service improvement

## How to Fully Opt Out

1. **IDE:** Settings > User > Application > Telemetry and Content, uncheck "Data Sharing and Prompt Logging: Usage Analytics And Performance Metrics"
2. **IDE:** uncheck "Data Sharing and Prompt Logging: Content Collection for Service Improvement"
3. **Enterprise:** managed by administrator in the Kiro console

## Red Flags

- Telemetry and content collection ON by default for Free Tier and individual subscribers
- Content may be used for model training unless opted out
- Free Tier inputs may be retained up to 60 days for abuse detection even after opt-out
- Documented opt-out steps cover the IDE only, not the CLI or web
- Closed source

## Notes

Enterprise users are opted out of telemetry and content collection automatically; admin controls user-activity reports.

## Evidence

- https://kiro.dev/docs/privacy-and-security/data-protection/
- Privacy / data documentation: https://kiro.dev/docs/privacy-and-security/data-protection/

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
