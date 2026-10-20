# Mintlify

| Field | Value |
|-------|-------|
| Website | https://mintlify.com/ |
| Repository | https://github.com/mintlify/docs |
| Category | AI Documentation Platform |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog (CLI, via ph.mintlify.com) |
| Disable Method | CLI: `mint --telemetry false` / `MINTLIFY_TELEMETRY_DISABLED=1` / `DO_NOT_TRACK=1`; docs site: `integrations.telemetry.enabled: false` in `docs.json` |
| Collects Code | No (documentation content only) |
| Collects Prompts | Yes (docs-site search/assistant queries processed by the SaaS) |
| Last Verified | 2026-10-20 |

## What Is Collected

**Mintlify CLI (`mint`) -- per Mintlify's CLI docs:**
- Command name, CLI version
- Operating system, architecture, Node.js version
- Whether it runs in CI, whether the terminal is interactive, whether this is the first run on the machine, whether you are signed in
- The name of an AI coding agent, if one is detected running the CLI
- Your account email address, if you are signed in (signed-out usage is anonymous)

Events are sent with `posthog-node` to a PostHog host proxied at `ph.mintlify.com`.

**Hosted documentation sites:**
- Mintlify platform telemetry, including documentation feedback features, controlled by `integrations.telemetry.enabled`
- Search and AI-assistant queries on docs sites are processed by Mintlify as part of the hosted service
- Optional customer-configured analytics integrations (GA4, PostHog, Segment, Plausible, etc.) only when the site owner adds them

## What Is NOT Collected

- Project content and file paths (per CLI telemetry docs)
- Application source code (Mintlify processes documentation content)

## How to Fully Opt Out

1. **CLI:** run `mint --telemetry false`, or set `MINTLIFY_TELEMETRY_DISABLED=1` or `DO_NOT_TRACK=1`
2. **Docs site:** set `"integrations": { "telemetry": { "enabled": false } }` in `docs.json` (this also disables feedback features)
3. **Network block (CLI):** block `ph.mintlify.com`
4. **Self-hosted:** not available -- Mintlify is SaaS

## Red Flags

- CLI telemetry is ON by default
- When signed in, CLI telemetry events include the account email address (per Mintlify docs)
- CLI telemetry records the name of an AI coding agent if one is detected running the CLI
- Disabling hosted-site telemetry also disables documentation feedback features

**Notes:** 2026-10-20 re-audit: Mintlify's own CLI telemetry uses PostHog (posthog-node, proxied via ph.mintlify.com). Segment was listed previously; in current docs Segment, PostHog, GA4 etc. appear only as optional customer-configured analytics integrations for docs sites, and we could not confirm Segment as Mintlify's own telemetry provider. `mint.json` has been superseded by `docs.json`.

## Evidence

- CLI telemetry docs: https://mintlify.com/docs/cli/commands#telemetry (source: https://github.com/mintlify/docs/blob/6757ee215b62a13c7e773ae83f732a4d671fd780/cli/commands.mdx)
- npm `@mintlify/cli@4.0.1675`: `bin/telemetry/client.js` (posthog-node, host `https://ph.mintlify.com`), `bin/config.js` (`MINTLIFY_TELEMETRY_DISABLED`, `DO_NOT_TRACK`)
- Site telemetry setting: https://github.com/mintlify/docs/blob/6757ee215b62a13c7e773ae83f732a4d671fd780/organize/settings-integrations.mdx
- Privacy policy: https://www.mintlify.com/legal/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-audited CLI npm package and docs. Providers corrected to PostHog only (Segment appears only as an optional customer integration); documented `mint --telemetry false`, `MINTLIFY_TELEMETRY_DISABLED`, `DO_NOT_TRACK`; `mint.json` -> `docs.json`; added email/AI-agent detection red flags; privacy URL updated.
