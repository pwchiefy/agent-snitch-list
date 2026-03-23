# CodeRabbit

| Field | Value |
|-------|-------|
| Website | https://coderabbit.ai/ |
| Repository | Closed source |
| Category | AI Code Review |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (CodeRabbit cloud) |
| Disable Method | No documented opt-out for core data processing |
| Collects Code | Yes (ephemeral) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Pull request diffs and code changes (processed ephemerally)
- Repository metadata
- Review comments and interactions
- Usage analytics
- Account and organization data
- Git metadata (commit messages, branch names, authors)

## What Is NOT Collected

- CodeRabbit states code is processed ephemerally and not stored long-term
- Claims code is not used for model training
- SOC 2 Type II certified

## How to Fully Opt Out

There is no way to opt out of code processing while using the service -- it is the core functionality.

1. **Remove the integration:** Uninstall the CodeRabbit GitHub/GitLab app
2. **Selective use:** Configure `.coderabbit.yaml` to exclude sensitive paths from review

## Red Flags

- Closed source -- cannot verify ephemeral processing claims
- Code diffs are necessarily sent to CodeRabbit servers
- Processes entire PR context, which may include sensitive code
- GitHub/GitLab app permissions grant broad repository access

## Evidence

- Privacy policy: https://coderabbit.ai/privacy
- SOC 2 Type II certification claimed
- Ephemeral processing documented in security page
- `.coderabbit.yaml` configuration for path exclusion

## Changelog

- 2026-03-23: Initial entry
