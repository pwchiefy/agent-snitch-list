# JetBrains AI

| Field | Value |
|-------|-------|
| Website | https://www.jetbrains.com/ai/ |
| Repository | Closed source |
| Category | AI Code Assistant (IDE Plugin) |
| Telemetry | Yes |
| Default State | Conditional (ON for non-commercial licenses; consent-based for commercial; admin-controlled for organizations) |
| Analytics Providers | JetBrains analytics infrastructure |
| Disable Method | IDE Settings > Data Sharing; organization admins control detailed data |
| Collects Code | Yes (detailed code-related data, default for non-commercial licenses) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

**Usage analytics:** feature usage, AI completion rates, IDE performance, errors, plugin/IDE version, OS.

**Detailed code-related data** (Product Data Collection Notice v1.6):
- Full text of inputs sent by the IDE to LLMs and their responses, including source code snippets
- IDE activity such as terminal command runs and edit history
- Retained for 1 year

**Defaults by license:**
- Non-commercial individual: collected by default; opt out in product settings
- Commercial individual, trial, EAP: only with explicit consent
- Organization license: detailed data disallowed by default; enabled only by a company admin / contract
- Free Community IntelliJ IDEA / PyCharm: cannot be enabled

## What Is NOT Collected

- Detailed code-related data for organization licenses unless an admin enables it
- JetBrains states shared data is not shared with third parties

## How to Fully Opt Out

1. **IDE Settings > Data Sharing:** turn off usage statistics and detailed code-related data sharing
2. **Organization licenses:** keep detailed data collection disabled in the admin console
3. **AI features:** prompts are still sent to JetBrains AI / the configured LLM provider when you use them

## Red Flags

- Non-commercial (free) individual licenses: analytics, including detailed code-related data with source code snippets, are collected by default; users must opt out
- Detailed code-related data is retained for 1 year
- AI prompts processed server-side
- Closed source plugin

**Notes:** Default depends on license: commercial individual/trial/EAP users are asked for explicit consent; organization licenses disallow detailed data by default; free Community IntelliJ IDEA/PyCharm cannot enable it. JetBrains states the data is used to improve its tools and train its own models and is not shared with third parties.

## Evidence

- Product Data Collection and Usage Notice v1.6 (2026-07-07): https://www.jetbrains.com/legal/docs/terms/product_data_collection/
- Announcement: https://blog.jetbrains.com/blog/2025/09/30/detailed-data-sharing-for-better-ai/
- Privacy Policy: https://www.jetbrains.com/legal/docs/privacy/privacy/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Default changed ON -> Conditional and Collects Code -> Yes: JetBrains now collects detailed code-related data (LLM inputs/outputs incl. code snippets) by default for non-commercial licenses; documented per-license defaults and 1-year retention.
