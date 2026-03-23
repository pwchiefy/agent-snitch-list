# Mistral Vibe / Codestral

| Field | Value |
|-------|-------|
| Website | https://mistral.ai |
| Repository | Closed source (Vibe IDE); model weights available for Codestral |
| Category | AI Code Completion / IDE (SaaS + Model) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom endpoint (Mistral AI infrastructure) |
| Disable Method | `enable_telemetry: false` in configuration |
| Collects Code | Yes (SaaS: code context processed server-side) |
| Collects Prompts | Yes (SaaS: prompts processed server-side) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Mistral Vibe (IDE/SaaS):**
- Usage telemetry (feature events, session data)
- Code context sent to Mistral servers for completion generation
- Prompts and chat interactions
- Error reports
- Application version and OS information
- Anonymous user identifiers

**Codestral (model via API):**
- API usage metrics
- Prompts and code context sent for inference
- Standard API logging (request/response metadata)

**Codestral (self-hosted model weights):**
- Nothing (runs locally)

## What Is NOT Collected

- Self-hosted Codestral: no data leaves your infrastructure
- API keys are not logged in telemetry events (per Mistral's policy)
- Local file system contents beyond what is sent as context

## How to Fully Opt Out

1. **Configuration setting:**
   ```yaml
   enable_telemetry: false
   ```
   Or equivalent setting in the IDE/extension configuration.

2. **Self-host Codestral model:** Download and run locally:
   - Use Codestral model weights from Mistral's model hub
   - Run via ollama, vLLM, or other local inference frameworks
   - No data is sent externally when running locally

3. **API usage:** If using Mistral's API, data handling is governed by Mistral's API terms. There is no way to avoid sending code context to the API.

## Red Flags

- Telemetry is ON by default
- Mistral AI is a French company; data is governed by EU data protection laws (GDPR), which is generally favorable for privacy
- The Vibe IDE is closed source; telemetry behavior cannot be independently verified
- When using the Mistral API (not self-hosted), prompts and code context are necessarily processed on Mistral's servers
- Mistral's data retention and training policies should be reviewed in their terms of service

## Evidence

- Mistral AI Privacy Policy: https://mistral.ai/privacy/
- Codestral documentation: https://docs.mistral.ai/capabilities/code_generation/
- Mistral API Terms: https://mistral.ai/terms/
- Configuration option `enable_telemetry` in tool/extension settings

## Changelog

- 2026-03-23: Initial entry
