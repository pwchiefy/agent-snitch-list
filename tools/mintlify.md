# Mintlify

| Field | Value |
|-------|-------|
| Website | https://mintlify.com/ |
| Repository | https://github.com/mintlify/docs |
| Category | AI Documentation Platform |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog, Segment |
| Disable Method | Set `telemetry.enabled: false` in configuration |
| Collects Code | No (documentation content only) |
| Collects Prompts | Yes (search queries) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Page views and user interactions on documentation sites
- Search queries within documentation
- Usage analytics (via PostHog and Segment)
- Documentation build metadata
- Account and organization data
- Performance metrics

## What Is NOT Collected

- Source code (Mintlify processes documentation content, not application code)
- No PII in analytics payloads (per documentation)

## How to Fully Opt Out

1. **Configuration:** Set `telemetry.enabled: false` in `mint.json`
2. **Network block:** Block outbound connections to `app.posthog.com` and `api.segment.io`
3. **Self-hosted:** Not available -- Mintlify is SaaS only

## Red Flags

- Two third-party analytics providers (PostHog + Segment) means data flows to multiple external services
- Telemetry ON by default
- Documentation content is processed on Mintlify servers
- Search queries may contain sensitive terms

## Evidence

- Repository: https://github.com/mintlify/docs
- PostHog and Segment dependencies in source
- `telemetry.enabled` configuration option documented
- Privacy policy: https://mintlify.com/privacy

## Changelog

- 2026-03-23: Initial entry
