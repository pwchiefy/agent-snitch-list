# bolt.new

| Field | Value |
|-------|-------|
| Website | https://bolt.new |
| Repository | https://github.com/stackblitz/bolt.new |
| Category | AI Full-Stack App Generator (Web IDE) |
| Telemetry | No (in OSS version) |
| Default State | N/A |
| Analytics Providers | None (in OSS version) |
| Disable Method | N/A (no telemetry to disable in OSS) |
| Collects Code | No (in OSS version) |
| Collects Prompts | No (in OSS version) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Open-source version (self-hosted):**
- Nothing. The open-source codebase does not contain analytics, telemetry, or tracking instrumentation.

**bolt.new hosted service (bolt.new website):**
- Standard SaaS analytics (usage metrics, session data)
- Code generated through the platform is processed server-side
- Account information if signed in
- Governed by StackBlitz's privacy policy

## What Is NOT Collected

- The OSS version sends no data to StackBlitz or any third party
- No analytics SDKs present in the open-source codebase
- No error reporting services
- No usage tracking

## How to Fully Opt Out

For the open-source version, no action is required. For the hosted bolt.new service, the only way to avoid data collection is to self-host using the open-source version:

```bash
git clone https://github.com/stackblitz/bolt.new.git
cd bolt.new
pnpm install
pnpm run dev
```

## Red Flags

- The hosted service (bolt.new website) is a separate product from the OSS codebase and likely includes analytics not present in the open-source version
- Self-hosting requires providing your own LLM API keys

## Evidence

- No PostHog, Sentry, Google Analytics, or similar dependencies in `package.json`
- No analytics initialization code in the source
- Repository: https://github.com/stackblitz/bolt.new

## Changelog

- 2026-03-23: Initial entry
