# OpenHands

| Field | Value |
|-------|-------|
| Website | https://www.openhands.dev |
| Repository | https://github.com/OpenHands/OpenHands |
| Category | AI Software Engineering Agent |
| Telemetry | Yes |
| Default State | ON (install ping before consent; other events opt-in) |
| Analytics Providers | PostHog (via z.openhands.dev proxy) |
| Disable Method | Decline consent; `AGENT_CANVAS_DISABLE_TELEMETRY=1` / `--disable-telemetry` or Do Not Track to stop everything |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- **Before any consent:** a single `canvas_install` event with platform, browser user agent, referrer, URL origin, whether embedded, and a random ID.
- **After you grant consent:** session and custom product events (UI/feature usage, backend and deployment kind, app version, anonymous/identified user IDs when signed in to OpenHands Cloud).

## What Is NOT Collected

- Code or file contents
- Prompts or LLM responses
- Nothing beyond the install event if you decline consent

## How to Fully Opt Out

1. **Consent dialog:** decline analytics on first launch (or later in settings).
2. **Hard disable (includes install event):** start the static server with `AGENT_CANVAS_DISABLE_TELEMETRY=1` or `--disable-telemetry`; source builds can set `VITE_DO_NOT_TRACK=1`.
3. **Browser:** enabling Do Not Track prevents PostHog from initializing.
4. **Agent server (software-agent-sdk):** telemetry is consent-gated and inactive unless a PostHog key is configured.

## Red Flags

- The `canvas_install` event is sent before consent (the code comments say 'regardless of consent').
- Events are routed via OpenHands' reverse proxy `z.openhands.dev` 'to avoid being blocked by ad blockers'.
- Default destination is OpenHands' PostHog project (US region).

## Evidence

- Tracking philosophy and opt-outs (file header): https://github.com/OpenHands/OpenHands/blob/f69111678b76272c7c601de7764544d91dc912ed/src/services/telemetry.ts#L1
- Install event payload: https://github.com/OpenHands/OpenHands/blob/f69111678b76272c7c601de7764544d91dc912ed/src/services/telemetry.ts#L775
- Default host `https://z.openhands.dev`: https://github.com/OpenHands/OpenHands/blob/f69111678b76272c7c601de7764544d91dc912ed/src/services/telemetry.ts#L77
- PostHog project key in config: https://github.com/OpenHands/OpenHands/blob/f69111678b76272c7c601de7764544d91dc912ed/config/defaults.json#L43
- Consent dialog: https://github.com/OpenHands/OpenHands/blob/f69111678b76272c7c601de7764544d91dc912ed/src/components/features/analytics/telemetry-consent-banner.tsx
- Agent server consent-gated exporter: https://github.com/OpenHands/software-agent-sdk/blob/0996c33916c2a977ea9fe38deee660ff0e1389f2/openhands-agent-server/openhands/agent_server/telemetry/service.py

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Repo moved to OpenHands/OpenHands (now Agent Canvas). Source shows a pre-consent PostHog install event via z.openhands.dev; reclassified opt-in -> ON per methodology. Updated evidence paths.
