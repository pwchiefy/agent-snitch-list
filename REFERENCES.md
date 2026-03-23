# References & Prior Art

This project builds on the work of many researchers and journalists. We aim to credit all prior art that informed our findings.

## Comparable Projects

| Project | Author | What It Does |
|---------|--------|-------------|
| [Chaser Systems — What data do coding agents send?](https://chasersystems.com/blog/what-data-do-coding-agents-send-and-where-to/) | Lucas Pye | Network interception analysis of 7 coding agents (Nov 2025). Closest prior work to this project. |
| [arXiv:2509.20388 — Can You Trust Your Copilot?](https://arxiv.org/abs/2509.20388) | Academic | Privacy scorecard for 5 AI coding assistants against 14 criteria (Sep 2025). |
| [beatcracker/toptout](https://github.com/beatcracker/toptout) | beatcracker | Comprehensive machine-readable database of telemetry opt-out methods across many tools. |
| [pluja/awesome-privacy](https://github.com/pluja/awesome-privacy) | pluja | Privacy-respecting alternatives including an "AI Coding" section. |

## Tool-Specific Research

### Trae (ByteDance)
- [segmentationf4u1t/trae_telemetry_research](https://github.com/segmentationf4u1t/trae_telemetry_research) — Original research documenting ~500 network calls in 7 minutes, hardware fingerprinting, opt-out bypass (Jul 2025)
- [Unit 221B — Unveiling Trae](https://blog.unit221b.com/dont-read-this-blog/unveiling-trae-bytedances-ai-ide-and-its-extensive-data-collection-system) — Lance James, earlier independent analysis (Mar 2025)
- [The Register — ByteDance Trae telemetry continues after opt-out](https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/) — Tim Anderson (Jul 2025)
- [CyberNews — Vibe coders' data harvested](https://cybernews.com/security/bytedance-ai-coding-tool-trae-data-collection/)
- [TechRadar — ByteDance AI tool caught](https://www.techradar.com/pro/security/bytedance-ai-tool-caught-spying-on-users)

### Cursor
- [Cursor Forum — PostHog telemetry observed despite Privacy Mode](https://forum.cursor.com/t/title-posthog-telemetry-us-i-posthog-com-observed-despite-privacy-mode-enabled/149348) — Christopher Hudson (Jan 2026)
- [Cursor Forum — Privacy Mode concerns](https://forum.cursor.com/t/concerns-about-privacy-mode-and-data-storage/5418)

### Roo Code
- [GitHub Issue #11602 — Cloud Telemetry Bypasses User Settings](https://github.com/RooCodeInc/Roo-Code/issues/11602) — Pablo Vitasso (Feb 2026)

### Claude Code
- [Reid Barber — Reverse engineering Claude Code](https://www.reidbarber.com/blog/reverse-engineering-claude-code) — Statsig/Sentry internals (Mar 2025)
- [GitHub Issue #10494 — DISABLE_TELEMETRY ignored](https://github.com/anthropics/claude-code/issues/10494) — 300-400 connections/hour to Google IPs despite opt-out (Oct 2025)
- [GitHub Issue #7151 — Statsig/OpenAI acquisition concern](https://github.com/anthropics/claude-code/issues/7151) (Sep 2025)
- [Nasairwhite/claude-code-deep-research](https://github.com/Nasairwhite/claude-code-deep-research) — 370 gates, 51 endpoints, 331 env vars

### Cline
- [GitHub Issue #3361 — Sensitive data transmitted despite disabled telemetry](https://github.com/cline/cline/issues/3361) — PostHog autocapture sent prompts and filenames. Fixed v3.14.1. (May 2025)
- [GitHub Issue #7068 — Telemetry sending when disabled](https://github.com/cline/cline/issues/7068) — Second report of recurring issue (Oct 2025)

### Continue
- [GitHub Issue #2082 — Telemetry sent to PostHog despite allowAnonymousTelemetry: false](https://github.com/continuedev/continue/issues/2082) — Payload included user input. Fixed PR #4449. (Aug 2024)

### GitHub Copilot
- [GitGuardian — GitHub Copilot Privacy: Key Risks](https://blog.gitguardian.com/github-copilot-security-and-privacy/)
- [Paul Sorensen — Copilot privacy guide](https://paulsorensen.io/github-copilot-vscode-privacy/)

## Official Documentation
- [Aider analytics](https://aider.chat/docs/more/analytics.html) — Transparent opt-in PostHog telemetry
- [Open Interpreter telemetry](https://docs.openinterpreter.com/telemetry/telemetry)
- [Claude Code data usage](https://code.claude.com/docs/en/data-usage)
- [Goose environment variables](https://block.github.io/goose/docs/guides/environment-variables/)
- [Cursor data use](https://cursor.com/data-use)

## News Coverage
- [The Register — Trae telemetry](https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/)
- [Neowin — Trae resource hog](https://www.neowin.net/news/report-bytedances-vs-code-fork-trae-is-a-resource-hog-that-spies-on-you/)
- [Distill Tech Blog — Deceptive Telemetry?](https://distill.tech.blog/2025/07/28/bytedances-ide-a-case-of-deceptive-telemetry/)

---

*If we missed crediting your work, please [open an issue](https://github.com/pwchiefy/agent-snitch-list/issues) and we'll add it.*
