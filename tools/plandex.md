# Plandex

| Field | Value |
|-------|-------|
| Website | https://plandex.ai |
| Repository | https://github.com/plandex-ai/plandex |
| Category | AI Coding Agent (CLI + Cloud) |
| Telemetry | Yes (cloud only) |
| Default State | Conditional |
| Analytics Providers | Google Analytics (cloud), Rollbar (cloud) |
| Disable Method | Self-host the server to avoid all telemetry |
| Collects Code | Yes (cloud: code context is processed server-side) |
| Collects Prompts | Yes (cloud: prompts are processed server-side) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Plandex Cloud (hosted service):**
- Google Analytics: page views, session data, user flow through the web dashboard
- Rollbar: error reports, stack traces, and exception context
- Code context and prompts are processed on Plandex servers (necessary for the cloud service to function)
- Account information (email, usage quotas)

**Self-hosted Plandex server:**
- No external telemetry or analytics
- All data stays within your infrastructure
- No phone-home or usage reporting

## What Is NOT Collected

- The CLI client itself does not send analytics data; all telemetry is server-side
- Self-hosted deployments send no data to Plandex or third parties
- API keys are not stored server-side (passed through to LLM providers)

## How to Fully Opt Out

1. **Self-host the Plandex server:** Deploy your own instance following the self-hosting guide:
   ```bash
   git clone https://github.com/plandex-ai/plandex.git
   cd plandex/app/server
   # Follow self-hosting instructions in README
   ```
2. **Point CLI to self-hosted server:**
   ```bash
   export PLANDEX_API_URL=https://your-server.example.com
   ```
3. There is no way to disable telemetry while using the Plandex Cloud service, as analytics are integral to the hosted infrastructure.

## Red Flags

- Cloud users have their code context and prompts processed on Plandex's servers, which is inherent to the SaaS model but important for enterprise security reviews
- No granular telemetry opt-out for cloud users (GA and Rollbar are part of the hosted infrastructure)
- Rollbar error reports may contain contextual data from user sessions

## Evidence

- Google Analytics integration in web dashboard
- Rollbar error tracking in server-side code
- Self-hosting documentation: https://github.com/plandex-ai/plandex#self-hosting
- Repository: https://github.com/plandex-ai/plandex

## Changelog

- 2026-03-23: Initial entry
