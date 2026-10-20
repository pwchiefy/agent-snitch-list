# Windsurf (Cognition)

| Field | Value |
|-------|-------|
| Website | https://windsurf.com |
| Repository | Closed source |
| Category | AI Code Editor / Completion (IDE + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Cognition/Windsurf internal telemetry infrastructure |
| Disable Method | Enterprise tier: admin controls; Individual tier: limited opt-out |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

**Individual tier:**
- Code context and snippets for autocomplete, chat and agent features
- Prompts and chat messages
- Suggestion acceptance/rejection events, latency, feature usage, errors
- IDE/extension version, language of active file, account-linked identifier

**Cognition privacy policy (2026-03-09):** may use User Content "to train, fine tune and improve the models that power our Services," depending on the terms that apply to your use.

**Enterprise tier:** configurable, with no-retention guarantees and self-hosted options.

## What Is NOT Collected

- Enterprise (self-hosted): data stays in customer infrastructure
- Git credentials or SSH keys

## How to Fully Opt Out

1. **Enterprise:** admin console controls / self-hosted deployment
2. **Individual:** check profile settings for zero-data-retention (reported by third-party trackers as opt-in for individuals; not confirmed from a primary page)
3. **VS Code-level telemetry:** `"telemetry.telemetryLevel": "off"`
4. **Network-level:** blocking Windsurf endpoints breaks functionality

## Red Flags

- Cognition privacy policy allows using User Content to train and improve models 'depending on the terms that apply to your use'
- Individual tier code snippets processed with limited retention transparency
- Closed source
- Ownership change (Codeium/Exafunction -> Cognition) moved policies to Cognition documents that do not separately describe editor telemetry

**Notes:** Windsurf (formerly Codeium) was acquired by Cognition (announced 2025-07-14); codeium.com redirects to windsurf.com and Windsurf legal/security pages now redirect to Cognition/Devin documents. Third-party policy trackers report that individual users must opt in to zero-data retention while team/enterprise plans have it by default; not confirmed from a primary Windsurf page on 2026-10-20.

## Evidence

- Acquisition announcement: https://cognition.com/blog/windsurf (2025-07-14)
- Privacy policy (windsurf.com/privacy-policy redirects here): https://cognition.com/legal/privacy-policy
- Security (windsurf.com/security redirects here): https://docs.devin.ai/admin/security

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Windsurf now owned by Cognition (acquired July 2025); Windsurf legal/security pages redirect to Cognition/Devin docs; updated privacy URL, name and red flags (policy permits training on User Content depending on terms).
