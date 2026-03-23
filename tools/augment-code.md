# Augment Code

| Field | Value |
|-------|-------|
| Website | https://www.augmentcode.com/ |
| Repository | Closed source |
| Category | AI Code Assistant |
| Telemetry | Yes |
| Default State | ON (usage metrics); training is opt-in |
| Analytics Providers | Custom (Augment servers) |
| Disable Method | Training opt-in only; usage metrics have no documented opt-out |
| Collects Code | Yes (for completions) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Code context sent to Augment servers for completions
- Usage metrics (completion acceptance rates, feature usage)
- Editor metadata (language, file type)
- Account and organization data
- Codebase indexing data (for context awareness)

## What Is NOT Collected

- Code is not used for model training by default (training is opt-in)
- Augment states indexed code is encrypted and isolated per customer

## How to Fully Opt Out

1. **Training opt-out:** Training is opt-in by default, so no action needed
2. **Usage metrics:** No documented opt-out for basic telemetry
3. **Code processing:** Cannot opt out while using the service (code context is required for completions)

## Red Flags

- Closed source -- cannot verify data handling claims
- Code necessarily sent to Augment servers for all completions
- Codebase indexing means significant code exposure
- No documented way to disable usage metrics
- Relatively new company with limited track record

## Evidence

- Website: https://www.augmentcode.com/
- Privacy/security documentation on website
- Training opt-in policy documented in terms

## Changelog

- 2026-03-23: Initial entry
