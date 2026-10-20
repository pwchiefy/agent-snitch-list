# Aide

| Field | Value |
|-------|-------|
| Website | https://aide.dev/ |
| Repository | https://github.com/codestoryai/aide |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog, Parea |
| Disable Method | `codestory.disableTelemetry: true` (extension only) |
| Collects Code | Yes (via sidecar LLM logging) |
| Collects Prompts | Yes (via sidecar LLM logging) |
| Last Verified | 2026-10-20 |

## What Is Collected

**Aide extension (PostHog, default on):**
- Events keyed to an anonymous user ID; feature usage and editor interactions

**Sidecar (Aide's local AI backend):**
- On completed LLM requests, each request message (prompts, typically including code context), the model response, model name and metadata are sent to PostHog (`app.posthog.com/capture/`)
- The same completions are logged to Parea (LLM observability service)

**Status:** project no longer maintained (Feb 2025); repositories archived.

## What Is NOT Collected

- None documented

## How to Fully Opt Out

1. **Extension:** set `"codestory.disableTelemetry": true`
2. **Sidecar:** no setting found in source; block `app.posthog.com` and the Parea endpoint at the network level
3. **Uninstall:** the project is unmaintained

## Red Flags

- Telemetry ON by default
- Sidecar sends full LLM request messages and responses (prompts/code context) to PostHog and Parea
- No setting found in sidecar source to disable those uploads; `codestory.disableTelemetry` only covers the extension client
- Project is no longer maintained; repos archived

**Notes:** No longer maintained (announced February 2025); codestoryai/aide and codestoryai/sidecar are archived. Hosted services may no longer be operating.

## Evidence

- Extension PostHog client: https://github.com/codestoryai/aide/blob/93c820fbc9d14b42047b658518677df66f1ef644/extensions/codestory/src/posthog/client.ts
- Setting default: extensions/codestory/package.json (`codestory.disableTelemetry` default false)
- Sidecar LLM logging: https://github.com/codestoryai/sidecar/blob/26fde9e6483c984e010a844c6a6b6b5a576f0359/llm_client/src/broker.rs, llm_client/src/reporting/posthog.rs, logging/src/parea.rs

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Project archived/unmaintained; source audit of sidecar found prompts/LLM responses (incl. code context) logged to PostHog and Parea -- Collects Code/Prompts changed to Yes, Parea added.
