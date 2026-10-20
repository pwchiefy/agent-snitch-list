# PearAI

| Field | Value |
|-------|-------|
| Website | https://trypear.ai/ |
| Repository | https://github.com/trypear/pearai-app (app); https://github.com/trypear/pearai-submodule (extension) |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | `"allowAnonymousTelemetry": false` in config.json + IDE telemetry off |
| Collects Code | Unknown |
| Collects Prompts | Yes (reported QA logging) |
| Last Verified | 2026-10-20 |

## What Is Collected

- PostHog events from the extension webview (posthog-js, `us.i.posthog.com`), identified by VS Code machine ID; signed-in users are aliased to their PearAI account ID
- Feature usage and interaction events
- AI prompts/interactions reportedly logged for QA (carried over from original entry; not re-verified in source)
- OS, extension version

## What Is NOT Collected

- The Node-side PostHog client inherited from Continue is commented out in the current submodule

## How to Fully Opt Out

1. **config.json:** `"allowAnonymousTelemetry": false`
2. **IDE:** disable telemetry in settings (both must allow telemetry for it to be enabled)
3. **Network-level:** block `us.i.posthog.com` -- the webview calls `posthog.init()` regardless of the setting

## Red Flags

- Telemetry ON by default (allowAnonymousTelemetry defaults to true)
- Webview calls posthog.init(), identify() and opt_in_capturing() regardless of the allowAnonymousTelemetry value; only the React PostHog provider is conditional
- Signed-in users' PostHog identity is aliased to their PearAI account ID
- Prompts reportedly logged for QA (carried over; not re-verified in source)
- Early-stage project with evolving data practices

**Notes:** PearAI app repo last updated 2025-05; the extension submodule was last updated 2026-06. The Node-side PostHog client inherited from Continue is commented out in the current submodule; GUI-side PostHog remains.

## Evidence

- Webview PostHog: https://github.com/trypear/pearai-submodule/blob/51eceef62a90c29f712b3a9607ea70a9dca657e9/gui/src/hooks/CustomPostHogProvider.tsx
- Default: core/config/load.ts (allowAnonymousTelemetry -> true); core/config/profile/doLoadConfig.ts (combined with IDE setting)
- Node client: core/util/posthog.ts

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-audited extension submodule: PostHog via webview; init/identify run regardless of setting; Node-side client disabled; QA prompt-logging claim retained as unverified.
