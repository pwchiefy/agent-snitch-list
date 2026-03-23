# GitHub Copilot

| Field | Value |
|-------|-------|
| Website | https://github.com/features/copilot |
| Repository | Closed source |
| Category | AI Code Completion / Chat (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | GitHub / Microsoft internal telemetry infrastructure |
| Disable Method | VS Code settings + GitHub account settings |
| Collects Code | Yes (free/individual tier: code snippets used for model improvement; Business/Enterprise: not used for training) |
| Collects Prompts | Yes (free/individual tier) |
| Last Verified | 2026-03-23 |

## What Is Collected

**All tiers:**
- Code context (surrounding code sent to GitHub servers for completion generation)
- Suggestion acceptance/rejection events
- IDE type and version
- Extension version
- Language of file being edited
- Latency and performance metrics
- User engagement events (feature usage)
- Error reports

**Free and Individual tiers (unless opted out):**
- Code snippets may be retained and used for model training/improvement
- Prompts and suggestions may be retained for product improvement

**Business and Enterprise tiers:**
- Code snippets are NOT retained after generating suggestions
- Prompts and suggestions are NOT used for model training
- Additional data residency and retention controls available

## What Is NOT Collected

- Business/Enterprise: code is not retained after completion generation
- API keys or credentials (though code context may include them if present in the file)
- Git history or commit data

## How to Fully Opt Out

1. **Disable telemetry in VS Code:**
   ```json
   {
     "telemetry.telemetryLevel": "off",
     "github.copilot.advanced": {
       "debug.testOverrideProxyUrl": "",
       "debug.overrideProxyUrl": ""
     }
   }
   ```
2. **Disable code snippet collection (Individual tier):**
   - Go to https://github.com/settings/copilot
   - Under "Suggestions matching public code," choose your preference
   - Under "Allow GitHub to use my code snippets for product improvements," toggle OFF
3. **Upgrade to Business/Enterprise tier** for contractual guarantees that code is not retained for training.
4. **Network-level:** Block `*.githubcopilot.com` and `copilot-telemetry.githubusercontent.com` (will break functionality).

## Red Flags

- On the free/individual tier, code snippets and prompts may be used for model training unless explicitly opted out in account settings
- Code context is necessarily sent to GitHub's servers for every completion request (inherent to the architecture)
- The VS Code extension includes Microsoft's standard telemetry infrastructure in addition to Copilot-specific telemetry
- Privacy settings are split across VS Code settings (for IDE telemetry) and GitHub account settings (for data retention), making complete opt-out a multi-step process
- Closed source: telemetry behavior cannot be independently verified through source code review

## Evidence

- GitHub Copilot Privacy FAQ: https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-individual#about-privacy
- GitHub Copilot Business Privacy: https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business#about-privacy
- VS Code Copilot extension: `github.copilot` (closed source)
- Telemetry endpoint: `copilot-telemetry.githubusercontent.com`
- GitHub Privacy Statement: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement

## Changelog

- 2026-03-23: Initial entry
