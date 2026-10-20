# Replit (Agent + Ghostwriter)

| Field | Value |
|-------|-------|
| Website | https://replit.com |
| Repository | Closed source |
| Category | AI Code Editor / Agent (Cloud IDE + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Replit internal infrastructure, Google Analytics, third-party analytics |
| Disable Method | No documented opt-out for core telemetry |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- All code written in Replit (stored on Replit servers)
- Prompts to Replit Agent and AI-generated code/responses
- Session and usage analytics; Google Analytics named in the privacy policy
- Account, billing, browser/device info, repl metadata, error logs, deployment data

**ML use:** the privacy policy (updated 2026-08-03) lists code and prompts among collected data and a legitimate interest in improving machine-learning technologies such as code generation; no AI-training opt-out is described.

## What Is NOT Collected

- No specific exclusions documented for the core service

## How to Fully Opt Out

There is no documented AI-training opt-out.

1. **Do Not Sell/Share:** footer link for advertising-related sharing
2. **Google Analytics:** Google's opt-out browser add-on
3. **Requests:** access/deletion via account settings or email
4. **Enterprise:** negotiate contractual data controls

## Red Flags

- Code hosted on Replit used for ML model training (per ToS)
- No way to self-host or air-gap
- All code executes on Replit's servers with full access to runtime behavior
- Platform has access to environment variables and secrets
- Public repls explicitly part of training datasets

**Notes:** Current privacy policy does not describe an AI-training opt-out; Do Not Sell/Share link and email requests are the documented controls. Private repls may limit use in public training datasets but code is still on Replit servers.

## Evidence

- Privacy Policy (2026-08-03): https://replit.com/privacy-policy
- Terms of Service: https://replit.com/site/terms

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-checked privacy policy (2026-08-03): Google Analytics named; no AI-training opt-out described.
