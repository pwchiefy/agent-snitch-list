# Devin

| Field | Value |
|-------|-------|
| Website | https://devin.ai |
| Repository | Closed source |
| Category | AI Software Engineering Agent (SaaS) |
| Telemetry | Yes |
| Default State | ON (interaction data); OFF (model training) |
| Analytics Providers | Cognition AI internal infrastructure |
| Disable Method | Data Controls in account settings |
| Collects Code | Yes (processed server-side; training use configurable) |
| Collects Prompts | Yes (processed server-side) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Always collected (interaction data):**
- Session and usage analytics
- Commands and actions taken by the agent
- Task descriptions and prompts
- Code context processed during agent execution
- Error reports and logs
- Account information
- Feature usage patterns
- Session duration and interaction counts

**Model training (OFF by default, opt-in via Data Controls):**
- When enabled: task data, code, and outputs may be used for model training
- When disabled (default): code and prompts are not used for training

## What Is NOT Collected

- Model training is OFF by default (per Cognition AI's Data Controls documentation)
- API keys and secrets are handled with encryption (per documentation)

## How to Fully Opt Out

1. **Data Controls:**
   - Log in to your Devin account
   - Navigate to Settings > Data Controls
   - Ensure "Model training" is set to OFF (should be off by default)
   - Review and configure data retention preferences

2. **Interaction data:** There is no way to fully opt out of interaction data collection while using the service, as it is necessary for the service to function.

3. **Full opt-out:** The only way to completely avoid data collection is to not use the service.

## Red Flags

- Closed source: no way to independently verify data handling practices
- Interaction data (usage patterns, session data) is always collected with no opt-out
- As a fully hosted agent, Devin has access to code repositories, credentials, and development environments granted to it
- The agent executes code in cloud sandboxes with access to whatever permissions are granted (GitHub repos, deployment targets, etc.)
- Data Controls settings may change; monitor Cognition AI's terms of service for updates
- No self-hosted option available

## Evidence

- Devin Privacy Policy: https://devin.ai/privacy
- Devin Terms of Service: https://devin.ai/terms
- Data Controls documentation: https://docs.devin.ai (Data Controls section)
- Cognition AI security documentation: https://devin.ai/security

## Changelog

- 2026-03-23: Initial entry
