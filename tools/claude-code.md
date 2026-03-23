# Claude Code

| Field | Value |
|-------|-------|
| Website | https://docs.anthropic.com/en/docs/claude-code |
| Repository | https://github.com/anthropics/claude-code |
| Category | AI Coding Assistant (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Statsig, Sentry |
| Disable Method | `DISABLE_TELEMETRY=1` or `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Operational metrics: command invocations, feature usage events
- Performance metrics: latency, token counts, model used
- Error reports and stack traces (via Sentry)
- Feature flag evaluations (via Statsig)
- OS, platform, and CLI version
- Anonymous session/installation identifiers
- Conversation turn counts (not content)

## What Is NOT Collected

- Source code or file contents
- Prompts or conversation content
- LLM responses
- File names or paths from user projects
- API keys or credentials
- Personal identifying information

## How to Fully Opt Out

1. **Environment variable (telemetry only):**
   ```bash
   export DISABLE_TELEMETRY=1
   ```
2. **Environment variable (all non-essential network traffic, including telemetry + feature flags):**
   ```bash
   export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
   ```
3. **Shell profile:** Add to `~/.bashrc` or `~/.zshrc`:
   ```bash
   export DISABLE_TELEMETRY=1
   ```
4. Note: `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` is the more comprehensive option as it also disables Statsig feature flag checks, update notifications, and other non-essential outbound connections.

## Red Flags

- Telemetry is ON by default with no first-run consent prompt
- Two different environment variables control different scopes of network traffic, which can be confusing
- Sentry error reports may include stack traces with system path information
- Statsig is used for feature flagging, which means the tool phones home to check feature flags on every launch unless `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` is set

## Evidence

- Statsig integration in the CLI source code
- Sentry error reporting initialization
- Environment variable checks: `DISABLE_TELEMETRY`, `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`
- Repository: https://github.com/anthropics/claude-code
- Documentation: https://docs.anthropic.com/en/docs/claude-code/privacy

## Changelog

- 2026-03-23: Initial entry
