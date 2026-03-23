# Tabby

| Field | Value |
|-------|-------|
| Website | https://tabby.tabbyml.com |
| Repository | https://github.com/TabbyML/tabby |
| Category | AI Code Completion (Self-hosted) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom telemetry endpoint (Tabby's own infrastructure) |
| Disable Method | `anonymousUsageTracking.disable: true` in config |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Anonymous usage statistics (completion request counts, acceptance rates)
- Server version and configuration summary
- OS and hardware information (CPU architecture, GPU type)
- Model name and quantization level
- Number of configured repositories
- Uptime and health metrics
- Anonymous installation ID

## What Is NOT Collected

- Source code or file contents
- Completion prompts or suggestions
- Repository names or URLs
- User identities or personal information
- API keys or credentials

## How to Fully Opt Out

1. **Server config:** Edit `~/.tabby/config.toml` (or your custom config path) and add:
   ```toml
   [usage]
   anonymous_usage_tracking = false
   ```
2. **Alternative config key:** In some versions:
   ```toml
   [anonymousUsageTracking]
   disable = true
   ```
3. **Environment variable:** Set `TABBY_DISABLE_USAGE_COLLECTION=1`
4. **Network blocking:** Block outbound connections to Tabby's telemetry endpoint if additional assurance is needed.

## Red Flags

- Telemetry is ON by default; self-hosted deployments should explicitly disable it
- The telemetry endpoint is Tabby's own infrastructure (not a well-known third-party analytics provider), which means data handling practices are governed solely by Tabby's privacy policy

## Evidence

- Telemetry module: `crates/tabby/src/services/telemetry.rs`
- Configuration parsing: `crates/tabby/src/config.rs`
- Usage collection logic in the Rust server codebase
- Documentation: https://tabby.tabbyml.com/docs/configuration
- Repository: https://github.com/TabbyML/tabby

## Changelog

- 2026-03-23: Initial entry
