# GitWit

| Field | Value |
|-------|-------|
| Website | https://gitwit.dev/ |
| Repository | https://github.com/gitwitorg/gitwit |
| Category | AI Cloud Code Editor / App Generator |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Vercel Analytics |
| Disable Method | Self-host and remove the `<Analytics />` component; no opt-out on the hosted service |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Page views and web vitals via Vercel Analytics (hosted)
- Account data via Clerk
- Project code executed in E2B cloud sandboxes
- Prompts and code sent to the configured AI provider

## What Is NOT Collected

- PostHog integration is commented out in current source

## How to Fully Opt Out

1. **Hosted:** no documented opt-out
2. **Self-host:** remove `<Analytics />` from `web/app/providers.tsx` (Vercel Analytics only reports on Vercel deployments)

## Red Flags

- Vercel Analytics on the hosted platform with no documented opt-out
- Code runs in third-party cloud sandboxes (E2B) and auth goes through Clerk
- No privacy policy link found

## Notes

Now a cloud code editor (Next.js + Express) rather than a single-prompt generator. Can be self-hosted. Last commit 2026-04-02.

## Evidence

- Vercel Analytics in providers: https://github.com/gitwitorg/gitwit/blob/755d7999ab3d85e454f9312deba9574ab521aa74/web/app/providers.tsx#L10-L33
- Setup requirements (Clerk, E2B): https://github.com/gitwitorg/gitwit/blob/755d7999ab3d85e454f9312deba9574ab521aa74/README.md

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified Vercel Analytics; noted PostHog is commented out and the Clerk/E2B dependencies; product is now a cloud code editor.
