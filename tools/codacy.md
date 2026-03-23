# Codacy

| Field | Value |
|-------|-------|
| Website | https://www.codacy.com/ |
| Repository | https://github.com/codacy/codacy-analysis-cli (partial, CLI only) |
| Category | AI Code Quality / Review |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Web cookies, custom analytics |
| Disable Method | Cookie consent banner; self-hosted option for code processing |
| Collects Code | Yes (cloud mode) |
| Collects Prompts | N/A |
| Last Verified | 2026-03-23 |

## What Is Collected

- Repository code (cloned and analyzed on Codacy servers in cloud mode)
- Code quality metrics and issue data
- Usage analytics via web cookies
- Account, organization, and team data
- Git metadata (commits, branches, PRs)
- Integration data (GitHub, GitLab, Bitbucket)

## What Is NOT Collected

- Self-hosted mode keeps code on your infrastructure
- CLI tool (`codacy-analysis-cli`) can run analysis locally

## How to Fully Opt Out

1. **Cookies:** Use the cookie consent banner to reject non-essential cookies
2. **Code processing:** Use self-hosted Codacy or the CLI tool for local analysis
3. **Account deletion:** Request account and data deletion per GDPR

## Red Flags

- Cloud mode clones entire repositories to Codacy servers
- Web cookies enabled by default
- Partial open source (CLI only) -- core platform is closed source
- Broad repository permissions required for GitHub/GitLab integration

## Evidence

- CLI repository: https://github.com/codacy/codacy-analysis-cli
- Privacy policy: https://www.codacy.com/privacy
- Cookie consent mechanism on web dashboard
- Self-hosted option documented for enterprise

## Changelog

- 2026-03-23: Initial entry
