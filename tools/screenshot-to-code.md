# Screenshot to Code

| Field | Value |
|-------|-------|
| Website | https://screenshottocode.com/ |
| Repository | https://github.com/abi/screenshot-to-code |
| Category | AI UI Code Generation |
| Telemetry | No |
| Default State | N/A self-hosted; hosted site uses web analytics |
| Analytics Providers | None (self-hosted); Plausible + Google Ads tag on hosted site |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No (self-hosted; images go to your LLM provider) |
| Collects Prompts | No (self-hosted) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Self-hosted: nothing sent to the project
- Screenshots, videos and prompts go directly to the LLM provider you configure (OpenAI, Anthropic, Gemini) and Replicate for image generation
- Hosted screenshottocode.com: Plausible page analytics and a Google Ads conversion tag (AW-16649848443), plus server-side processing of uploads

## What Is NOT Collected

- Self-hosted: no usage analytics, crash reporting or identifiers
- The `langfuse` dependency is declared but not imported, so it sends nothing

## How to Fully Opt Out

1. **Self-host:** no action required
2. **Hosted version:** use an ad/tracker blocker, or self-host instead

## Red Flags

None identified.

## Notes

Active project (80k+ stars). The self-hosted app has no telemetry. The hosted version at screenshottocode.com processes uploads server-side and uses Plausible plus a Google Ads conversion tag.

## Evidence

- Plausible only when VITE_IS_DEPLOYED: https://github.com/abi/screenshot-to-code/blob/a8139779f7c5ae231b7f2a86fa7f83ddc5f7badc/frontend/vite.config.ts#L33-L37
- Backend dependencies: https://github.com/abi/screenshot-to-code/blob/a8139779f7c5ae231b7f2a86fa7f83ddc5f7badc/backend/pyproject.toml
- Hosted homepage HTML (checked 2026-10-20): https://screenshottocode.com/
- Repository: https://github.com/abi/screenshot-to-code

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified self-hosted build (no telemetry); documented hosted-site Plausible and Google Ads tags.
