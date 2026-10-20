# Perplexity

| Field | Value |
|-------|-------|
| Website | https://www.perplexity.ai/ |
| Repository | Closed source |
| Category | AI Search / Chat |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Google Analytics (previously observed), Custom |
| Disable Method | Account settings > Preferences > AI Data Retention (training opt-out) |
| Collects Code | Yes (code in queries) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- All search queries / chat prompts and conversation history
- Uploaded files and images
- Usage analytics, browser/device metadata, IP address, account/session data
- **AI Data Retention** (use of data for model training): ON by default for Free, Pro and Max users

## What Is NOT Collected

- Enterprise data is never used for AI training (per Perplexity help center)
- Email Assistant email content is not used to train models (per privacy policy)

## How to Fully Opt Out

1. **Training:** Account settings > Preferences > turn off **AI Data Retention** (applies only to data collected after opting out)
2. **Threads:** delete threads/uploads separately; opting out does not delete them
3. **Enterprise:** excluded from training
4. **No full opt-out** of service analytics

## Red Flags

- AI Data Retention (use of data for model training) is ON by default for Free, Pro and Max users
- Opt-out applies only to data collected after opting out
- All queries stored on servers by default
- Code included in queries is potentially retained
- Closed source
- Google Analytics previously observed on web property (current policy names no vendors)

## Evidence

- Help center: https://intercom.help/perplexity-ai/en/articles/11564572-data-collection-at-perplexity
- Privacy policy (updated 2026-10-19): https://www.perplexity.ai/hub/legal/privacy-policy
- Google Analytics: carried over from original entry; current policy names no vendors

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Documented AI Data Retention toggle (training on by default for Free/Pro/Max, not retroactive) and enterprise exclusion; Google Analytics attribution marked as carried over.
