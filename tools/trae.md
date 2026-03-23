# Trae (ByteDance)

| Field | Value |
|-------|-------|
| Website | https://trae.ai |
| Repository | Closed source |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | ByteDance internal infrastructure (custom endpoints) |
| Disable Method | Settings toggle exists but telemetry persists after opt-out (see Red Flags) |
| Collects Code | Unknown (likely, given network traffic volume) |
| Collects Prompts | Unknown (likely, given network traffic volume) |
| Last Verified | 2026-03-23 |

## What Is Collected

Based on independent network traffic analysis:

- Extensive telemetry data sent to ByteDance servers (approximately 500 network calls observed in a 7-minute session)
- Hardware fingerprinting data (detailed system information beyond typical telemetry)
- Machine identifiers and hardware serial numbers
- OS version, CPU model, GPU model, RAM, disk information
- Screen resolution and display configuration
- IDE usage events and interaction patterns
- Extension and plugin information
- File type and language statistics
- Session timing and duration data
- Network configuration data
- Crash reports and error telemetry

## What Is NOT Collected

- No specific exclusions have been independently verified due to closed-source nature and encrypted traffic

## How to Fully Opt Out

**WARNING: Independent testing has shown that telemetry persists even after opting out through the settings UI.**

1. **Settings toggle (ineffective):**
   - Open Trae Settings
   - Look for telemetry/analytics settings
   - Toggle OFF
   - Note: Network analysis shows telemetry traffic continues after this toggle is disabled

2. **Network-level blocking (recommended):**
   - Block all ByteDance/Trae telemetry domains at the firewall or DNS level
   - Known domains include ByteDance analytics endpoints (monitor outbound traffic for specific domains)
   - Use a network monitoring tool to identify and block all outbound connections

3. **Do not use the tool** if telemetry is a concern, as the opt-out mechanism has been shown to be unreliable.

## Red Flags

- **Telemetry persists after opt-out:** Independent network analysis demonstrates that disabling telemetry in settings does NOT stop data transmission. This is a critical trust violation.
- **Hardware fingerprinting:** Collects detailed hardware identifiers beyond what is typical for IDE telemetry (serial numbers, detailed hardware specs)
- **~500 network calls in 7 minutes:** The volume of telemetry traffic is extraordinarily high compared to other tools in this category
- **5-year data retention:** Privacy policy indicates data may be retained for up to 5 years
- **ByteDance ownership:** Data is processed by ByteDance (parent company of TikTok), subject to Chinese data regulations and potential government access requirements under Chinese law
- **Closed source:** No ability to independently verify data collection through source code review
- **VS Code fork:** Inherits VS Code's codebase but adds extensive proprietary telemetry on top
- **No transparency report:** No public documentation of what telemetry data is collected or how it is used

## Evidence

- Independent network traffic analysis showing ~500 calls in 7 minutes
- Network analysis confirming telemetry persists after opt-out toggle
- Hardware fingerprinting data observed in network payloads
- Privacy Policy: https://trae.ai/privacy (references 5-year retention)
- ByteDance Terms of Service apply
- Community reports and independent security analyses

## Changelog

- 2026-03-23: Initial entry
