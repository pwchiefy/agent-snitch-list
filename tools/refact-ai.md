# Refact.ai

| Field | Value |
|-------|-------|
| Website | https://refact.ai/ |
| Repository | https://github.com/smallcloudai/refact |
| Category | AI Code Completion / Chat |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (hourly batch telemetry to Refact servers) |
| Disable Method | Set `basic_telemetry: false` in configuration |
| Collects Code | No (in self-hosted mode) |
| Collects Prompts | No (in self-hosted mode) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Completion acceptance/rejection rates (batched hourly)
- Feature usage statistics
- Language and file type distribution
- Error rates and types
- Version and environment info
- In cloud mode: code context is sent to Refact servers for completion

## What Is NOT Collected

- In self-hosted mode: no code or prompts leave your infrastructure
- Basic telemetry does not include code content
- No PII in telemetry payloads

## How to Fully Opt Out

1. **Configuration file:** Set `basic_telemetry: false` in the Refact configuration
2. **Self-hosted mode:** Deploy the Refact server locally to keep all code on-premises
3. **Network block:** Block outbound connections to Refact telemetry endpoints

## Red Flags

- Telemetry is ON by default
- Cloud mode sends code to Refact servers (expected for SaaS, but worth noting)
- Hourly batch upload means data accumulates before transmission

## Evidence

- Repository: https://github.com/smallcloudai/refact
- Telemetry configuration documented in source
- `basic_telemetry` setting in config files
- Self-hosted deployment option available

## Changelog

- 2026-03-23: Initial entry
