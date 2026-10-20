# Builder.io Visual Copilot / Fusion

| Field | Value |
|-------|-------|
| Website | https://www.builder.io/m/visual-copilot |
| Repository | Partial (SDKs open source: https://github.com/BuilderIO) |
| Category | Design-to-Code AI |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (Builder.io platform), Unnamed advertising/analytics partners (privacy policy) |
| Disable Method | No user-level telemetry opt-out documented. 'Privacy Mode' (Enterprise only, Builder CLI/Desktop only, off by default) encrypts stored sessions but is not a telemetry switch |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Figma designs and prompts
- Generated code and repository code in code-generation sessions
- Usage analytics, account and organization data
- Cookies, including third-party advertising cookies (per privacy policy)

## What Is NOT Collected

- Enterprise/Team business customers' personal data is not used to train AI models (per policy)
- In Privacy Mode, unencrypted code is not kept after a request completes

## How to Fully Opt Out

1. **Privacy Mode:** Enterprise only, Builder CLI/Desktop only, off by default; encrypts stored sessions (code still goes to LLM providers)
2. **Cookies / sale-sharing:** browser settings and the 'Do Not Sell or Share' link
3. **Platform analytics:** no documented opt-out

## Red Flags

- Design files and code sent to Builder.io servers and LLM providers
- Privacy Mode is Enterprise-only and does not cover cloud/web use
- No documented opt-out for platform analytics
- No-training statement covers only Enterprise and Team plans

## Notes

Builder.io SDKs are open source. The old privacy URL (/privacy) returns 404; the policy now lives at /legal/privacy.

## Evidence

- Privacy Mode docs: https://www.builder.io/c/docs/privacy-mode
- Privacy policy (updated 2026-08-19): https://www.builder.io/legal/privacy
- SDKs: https://github.com/BuilderIO

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Clarified that Privacy Mode is an Enterprise CLI/Desktop encryption feature, not a telemetry toggle; privacy URL updated.
