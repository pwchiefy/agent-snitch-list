# Contributing to Agent Snitch List

Thank you for helping keep the AI coding tool ecosystem transparent. Whether you're a developer who found telemetry in a tool, a security researcher with network captures, or a tool vendor correcting the record — your contribution matters.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Adding a New Tool](#adding-a-new-tool)
- [Updating an Existing Tool](#updating-an-existing-tool)
- [Disputing a Finding](#disputing-a-finding)
- [Evidence Standards](#evidence-standards)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

| Action | Method |
|--------|--------|
| Report a new tool | [Open a new-tool issue](https://github.com/yourusername/agent-snitch-list/issues/new?template=new-tool.yml) |
| Update existing data | [Open an update-tool issue](https://github.com/yourusername/agent-snitch-list/issues/new?template=update-tool.yml) |
| Dispute a finding | [Open a dispute issue](https://github.com/yourusername/agent-snitch-list/issues/new?template=dispute.yml) |
| Submit a full write-up | Open a Pull Request (see below) |
| Fix typos or formatting | Open a Pull Request directly |
| Suggest methodology changes | Open a Discussion |

---

## Adding a New Tool

### Option A: Open an Issue (Quick)

Use the [new-tool issue template](https://github.com/yourusername/agent-snitch-list/issues/new?template=new-tool.yml). Fill in what you know — we'll do the rest.

### Option B: Submit a Pull Request (Thorough)

1. **Fork the repo** and create a branch: `add-<tool-slug>`
2. **Create the tool page** at `tools/<tool-slug>.md` using the template below
3. **Add the tool** to the summary table in `README.md` (maintain sort order: by default state, then alphabetical within each group)
4. **Submit a PR** with a clear description of your findings

### Tool Page Template

Create `tools/<tool-slug>.md` with the following structure:

```markdown
# Tool Name

## Overview

| Field | Value |
|-------|-------|
| Website | [example.com](https://example.com) |
| Repository | [github.com/org/repo](https://github.com/org/repo) |
| Category | (e.g., 🔌 IDE Extension) |
| Open Source | Yes / No / Partial |
| Default Telemetry | 🔴 ON / 🟡 Opt-in / 🟢 None / etc. |
| Analytics Providers | PostHog, Sentry, etc. |
| Collects Code? | Yes / No / Prompts / etc. |
| Last Verified | YYYY-MM-DD |
| Version Tested | X.Y.Z |

## Telemetry Details

(What is collected, how, and where it's sent)

## How to Disable

(Step-by-step instructions)

## Evidence

(Links to source code, network captures, documentation)

## Privacy Policy

(Key excerpts from the tool's privacy policy)

## Notes

(Any additional context, history, or caveats)
```

---

## Updating an Existing Tool

Things change. Tools add telemetry, remove it, change providers, or update their opt-out mechanisms. If you've found that an entry is outdated:

1. **Open an issue** using the [update-tool template](https://github.com/yourusername/agent-snitch-list/issues/new?template=update-tool.yml), OR
2. **Submit a PR** updating both the tool page (`tools/<slug>.md`) and the README summary table

When updating, please include:
- The **version number** where the change occurred
- A **link to the changelog**, commit, or PR that introduced the change
- Updated evidence (source code links, network captures, etc.)

---

## Disputing a Finding

We welcome corrections from tool vendors and community members. Use the [dispute template](https://github.com/yourusername/agent-snitch-list/issues/new?template=dispute.yml) and provide:

- Your relationship to the tool (maintainer, employee, user, etc.)
- Which specific claims you're disputing
- Counter-evidence (source code links, documentation, network captures)
- The version number relevant to your dispute

**We commit to:**
- Acknowledging disputes within 7 days
- Resolving disputes within 14 days
- Updating entries when presented with credible evidence
- Treating all disputes with respect and good faith

---

## Evidence Standards

Contributions are stronger with better evidence. Here's what we look for:

### Strong Evidence (one required for 🔴 classification)
- **Source code permalink** — A GitHub permalink to the specific file and line where telemetry is initialized, configured, or sent
- **Network capture** — HAR file, mitmproxy log, or tcpdump output showing telemetry traffic (redact any personal/sensitive data)
- **Official documentation** — Privacy policy, data processing agreement, or official docs page disclosing telemetry

### Medium Evidence (supports findings)
- **Dependency manifest** — `package.json`, `requirements.txt`, `Cargo.toml`, etc. showing analytics libraries
- **Configuration schema** — Default settings showing telemetry enabled/disabled
- **Changelog entry** — Release notes mentioning telemetry changes

### Weak Evidence (supplementary only)
- **Community reports** — GitHub issues, forum posts, blog articles
- **Behavioral observations** — "I noticed..." without supporting captures

### What Is NOT Evidence
- Speculation or assumptions
- "I heard that..."
- Comparisons to other tools ("Tool X does it, so Tool Y probably does too")
- Screenshots that could be fabricated (prefer permalinks)

---

## Pull Request Process

1. **One tool per PR** — Makes review manageable
2. **Include evidence** — Link to source code, attach captures, cite documentation
3. **Maintain sort order** — The README table is sorted by default state (🔴 first, then 🔵/☁️, then 🟡, then 🟢, then ⚫), then alphabetically within each group
4. **Update both files** — If you create/update `tools/<slug>.md`, also update the README summary table
5. **Be factual** — Describe what the tool does, not what you think about it
6. **Review cycle** — At least one maintainer will review your PR. We may ask for clarification or additional evidence.

### PR Checklist

- [ ] Tool page created/updated at `tools/<slug>.md`
- [ ] README summary table updated (correct sort order)
- [ ] At least one piece of strong or two pieces of medium evidence provided
- [ ] Version number and verification date included
- [ ] Disable instructions are accurate and tested
- [ ] No editorializing or inflammatory language
- [ ] Links are working

---

## Style Guide

### Language
- **Be factual.** State what the tool does, not how you feel about it.
- **Be specific.** "Sends events to PostHog on every command invocation" is better than "has bad telemetry."
- **Be fair.** Acknowledge when tools provide clear opt-out mechanisms or transparent documentation.
- **Avoid inflammatory language.** Words like "spyware," "malware," or "surveillance" are not appropriate unless the behavior genuinely meets those definitions. Stick to neutral descriptions.

### Formatting
- Use standard Markdown
- Tool slugs are lowercase, hyphenated: `claude-code`, `github-copilot`, `gpt-engineer`
- Dates use ISO 8601: `YYYY-MM-DD`
- Version numbers use the tool's own versioning scheme

### Classification
- Follow the definitions in [METHODOLOGY.md](METHODOLOGY.md) exactly
- When in doubt, use ⚫ Unknown rather than guessing
- If a tool's behavior is borderline between two categories, note the ambiguity in the tool page and use the more conservative (less favorable) classification

---

## Code of Conduct

This project operates under a simple principle: **be factual, not inflammatory.**

### Do
- Present evidence-based findings
- Respect tool vendors who engage constructively
- Acknowledge when you're uncertain
- Update entries when tools improve their practices
- Credit other contributors

### Don't
- Use this project to harass, defame, or campaign against specific companies or individuals
- Fabricate or exaggerate findings
- Refuse to update entries when presented with credible counter-evidence
- Engage in personal attacks in issues or pull requests
- Use this data to justify piracy or license violations

### Enforcement
Maintainers reserve the right to close issues, reject PRs, and ban contributors who violate these principles. We're here to inform, not inflame.

---

## Questions?

Open a Discussion on GitHub. We're happy to help with research methodology, evidence collection, or anything else related to the project.
