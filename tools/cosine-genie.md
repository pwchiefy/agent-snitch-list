# Cosine (Genie)

| Field | Value |
|-------|-------|
| Website | https://cosine.sh/ |
| Repository | Closed source |
| Category | AI Code Agent |
| Telemetry | Unknown |
| Default State | Unknown |
| Analytics Providers | Unknown |
| Disable Method | On-prem / VPC deployment; training opt-out is default |
| Collects Code | Yes (cloud mode indexes codebase) |
| Collects Prompts | Yes (task prompts processed by the service) |
| Last Verified | 2026-10-20 |

## What Is Collected

**Cloud mode:**
- Codebase indexed and processed on Cosine servers ("Cosine securely indexes your code to understand structure and context")
- Code kept for task processing and retrieval; customers can delete it via admin dashboard or API
- Task data and basic account metadata
- Usage analytics: not documented

**VPC / on-prem:**
- Data stays within the customer's deployment; customer controls storage, backup and deletion

## What Is NOT Collected

- Global model training: all customers opted out by default (per Cosine FAQ)
- PII beyond basic account metadata (per Cosine FAQ)

## How to Fully Opt Out

1. **Deployment choice:** use VPC or fully on-prem deployment to keep code inside your environment
2. **Training:** customers are opted out of global training by default
3. **Telemetry:** no documented telemetry controls

## Red Flags

- Closed source with limited transparency
- Cloud mode indexes the full codebase on Cosine servers
- No published telemetry documentation
- Security posture described as 'SOC 2 / ISO-aligned' rather than a published certification

**Notes:** Cosine's FAQ states all customers are opted out of global model training by default and that VPC and fully on-prem deployments are available. Telemetry default state remains undocumented.

## Evidence

- Cosine FAQ (code storage, training, deployment): https://cosine.sh/docs/faqs/security-and-compliance/does-cosine-store-code-or-pii-can-we-opt-out-of-training
- No public telemetry documentation found (2026-10-20)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-checked Cosine FAQ: training opt-out by default and Cloud/VPC/on-prem options documented; telemetry still undocumented (state remains unknown).
