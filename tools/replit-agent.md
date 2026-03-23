# Replit (Agent + Ghostwriter)

| Field | Value |
|-------|-------|
| Website | https://replit.com |
| Repository | Closed source |
| Category | AI Code Editor / Agent (Cloud IDE + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Replit internal infrastructure, third-party analytics |
| Disable Method | No documented opt-out for core telemetry |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- All code written in Replit (stored on Replit's servers as part of the service)
- Prompts sent to Replit Agent and Ghostwriter
- AI-generated code and responses
- Session and usage analytics (feature usage, navigation, time spent)
- Account information (email, authentication data, billing)
- Browser and device information
- Repl metadata (language, dependencies, run history)
- Error reports and application logs
- Collaboration events (multiplayer editing)
- Deployment and hosting data

**ML Training:**
- Replit has stated that code hosted on Replit may be used for ML model training
- Public repls are used for training data
- Replit's terms grant them rights to use hosted content for service improvement

## What Is NOT Collected

- No specific exclusions documented for the core service
- Paid tier users may have additional protections (verify current terms)

## How to Fully Opt Out

There is no comprehensive opt-out mechanism. Replit is a fully hosted cloud IDE, and data collection is fundamental to the service.

1. **Private repls:** Making repls private may limit their use in public training datasets, but code is still processed on Replit's servers.
2. **Teams/Enterprise:** Enterprise plans may offer additional data controls and contractual guarantees.
3. **Do not use the service** if data collection is unacceptable for your use case.

## Red Flags

- Code hosted on Replit is used for ML model training (per their terms of service)
- No way to self-host or air-gap the environment
- All code executes on Replit's servers, giving them full access to runtime behavior
- Closed source: data handling cannot be verified through code review
- The platform has access to environment variables and secrets stored in repls
- Public repls are explicitly part of training datasets
- Replit's business model depends on leveraging hosted code for AI model improvement

## Evidence

- Replit Privacy Policy: https://replit.com/site/privacy
- Replit Terms of Service: https://replit.com/site/terms
- Replit AI training disclosure: https://blog.replit.com (various blog posts on AI/ML training)
- Ghostwriter/Agent documentation: https://docs.replit.com

## Changelog

- 2026-03-23: Initial entry
