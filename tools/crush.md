# Crush (Charm)

| Field | Value |
|-------|-------|
| Website | https://charm.land/crush |
| Repository | https://github.com/charmbracelet/crush |
| Category | AI Coding Agent (CLI / TUI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog (via first-party proxy `data.charm.land`) |
| Disable Method | `CRUSH_DISABLE_METRICS=1`, `DO_NOT_TRACK=1`, or `"disable_metrics": true` in config |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Usage events from the agent and app lifecycle (`internal/event`, `internal/llm/agent/event.go` per README)
- Error events with Go error type and message
- GOOS, GOARCH, TERM, shell basename, Crush version, Go version
- Flags for non-interactive / nested runs and session-continue options
- Distinct ID: HMAC of machine ID, or hashed MAC address as fallback
- After Hyper OAuth device login: alias linking the device ID to the account user ID

## What Is NOT Collected

- Prompts and responses (README: "prompts and responses are NEVER collected")
- File contents

## How to Fully Opt Out

1. **Environment:** `export CRUSH_DISABLE_METRICS=1`
2. **Convention:** `export DO_NOT_TRACK=1`
3. **Config:** `"options": {"disable_metrics": true}`
4. **Network block:** block `data.charm.land`

## Red Flags

- Metrics ON by default
- Device ID falls back to a hash of the first active MAC address
- Machine ID is aliased to the account user ID after Hyper login, so events become linkable to an account
- Error events send the error message string

## Notes

Documented clearly in the README Metrics section, honours DO_NOT_TRACK. License is FSL-1.1-MIT (source-available).

## Evidence

- https://github.com/charmbracelet/crush/blob/2ec8c1ef54d0bb9b38c2410d14fa36828ea56422/internal/event/event.go
- https://github.com/charmbracelet/crush/blob/2ec8c1ef54d0bb9b38c2410d14fa36828ea56422/internal/event/identifier.go
- https://github.com/charmbracelet/crush/blob/2ec8c1ef54d0bb9b38c2410d14fa36828ea56422/internal/oauth/hyper/device.go (line 105)
- https://github.com/charmbracelet/crush/blob/2ec8c1ef54d0bb9b38c2410d14fa36828ea56422/internal/config/config.go (`disable_metrics`, line 475)
- https://github.com/charmbracelet/crush/blob/2ec8c1ef54d0bb9b38c2410d14fa36828ea56422/README.md (Metrics section)
- Privacy / data documentation: https://github.com/charmbracelet/crush#metrics

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
