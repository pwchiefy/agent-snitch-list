# What The Diff

| Field | Value |
|-------|-------|
| Website | https://whatthediff.ai/ |
| Repository | Closed source |
| Category | AI PR Description / Code Review |
| Telemetry | Yes |
| Default State | SaaS (always on) |
| Analytics Providers | Custom (What The Diff servers) |
| Disable Method | No documented opt-out while using service |
| Collects Code | Yes (PR diffs processed server-side) |
| Collects Prompts | N/A |
| Last Verified | 2026-03-23 |

## What Is Collected

- Pull request diffs (sent to What The Diff servers for processing)
- Generated PR descriptions
- Repository metadata
- Usage analytics
- Account and organization data
- GitHub/GitLab integration data

## What Is NOT Collected

- Full repository contents (only PR diffs are processed)
- Specific retention and exclusion policies not detailed

## How to Fully Opt Out

1. **Only option:** Remove the GitHub/GitLab integration
2. **Selective use:** Configure which repositories have the integration enabled

## Red Flags

- PR diffs contain actual code changes and are sent to third-party servers
- Closed source with limited transparency
- SaaS-only model -- no self-hosted option
- Code diffs may contain sensitive changes (credentials, internal logic)

## Evidence

- Website: https://whatthediff.ai/
- Privacy policy on website
- GitHub App integration requires repository access

## Changelog

- 2026-03-23: Initial entry
