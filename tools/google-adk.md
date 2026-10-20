# Google Agent Development Kit (ADK)

| Field | Value |
|-------|-------|
| Website | https://google.github.io/adk-docs/ |
| Repository | https://github.com/google/adk-python |
| Category | Agent Framework (Python) |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- No phone-home analytics found
- User-Agent / client labels identify ADK and version on Google API calls (not counted as telemetry under METHODOLOGY)

## What Is NOT Collected

- No usage analytics, crash reporting or machine IDs
- Tracing is user-configured

## How to Fully Opt Out

1. No action required. Avoid configuring Cloud Trace / BigQuery analytics exporters if you do not want spans leaving the process.

## Red Flags

None identified.

## Notes

Apache-2.0. Version 2.12.0 reviewed.

## Evidence

- https://github.com/google/adk-python/blob/8909689ae46de5ecadd12cd8fccfdee6a32b67cc/src/google/adk/utils/_client_labels_utils.py
- https://github.com/google/adk-python/blob/8909689ae46de5ecadd12cd8fccfdee6a32b67cc/src/google/adk/plugins/bigquery_agent_analytics_plugin.py
- https://github.com/google/adk-python/blob/8909689ae46de5ecadd12cd8fccfdee6a32b67cc/src/google/adk/version.py

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
