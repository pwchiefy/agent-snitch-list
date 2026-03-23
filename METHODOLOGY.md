# Methodology

How we research, verify, and classify telemetry behavior in AI coding tools.

---

## Table of Contents

- [Research Process](#research-process)
- [What Counts as Telemetry](#what-counts-as-telemetry)
- [What Does NOT Count as Telemetry](#what-does-not-count-as-telemetry)
- [Default State Classification](#default-state-classification)
- [Evidence Standards](#evidence-standards)
- [Verification Process](#verification-process)
- [Limitations](#limitations)
- [Disputing Findings](#disputing-findings)

---

## Research Process

Each tool is evaluated using a multi-layered approach. Not every method applies to every tool (closed-source tools, for example, cannot be audited via source code), but we use as many as possible.

### 1. Source Code Analysis

For open-source tools, we perform targeted searches across the codebase:

**Search terms:**
- Analytics providers: `posthog`, `segment`, `amplitude`, `mixpanel`, `rudderstack`, `google-analytics`, `ga4`, `application-insights`, `plausible`, `heap`
- Crash reporting: `sentry`, `bugsnag`, `crashlytics`, `rollbar`, `datadog`
- Telemetry infrastructure: `telemetry`, `analytics`, `tracking`, `phone-home`, `metrics`, `usage-data`, `anonymous-usage`, `diagnostics`
- OpenTelemetry: `opentelemetry`, `otlp`, `otel`, `tracing`
- Custom collection: `user-agent`, `machine-id`, `hardware-id`, `fingerprint`, `beacon`
- Configuration: `opt-out`, `opt-in`, `disable-telemetry`, `no-telemetry`, `consent`

**Files inspected:**
- `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod` (dependency analysis)
- Configuration defaults and schema files
- Initialization code and entry points
- Environment variable parsing
- Settings/preferences handlers
- Network request modules

### 2. Dependency Tree Analysis

We inspect the full dependency tree for known analytics and telemetry libraries. A tool may not directly import PostHog, but a dependency might. We trace transitive dependencies when suspicious patterns emerge.

### 3. Network Traffic Inspection

For tools we can install and run locally:
- Proxy all HTTP/HTTPS traffic through mitmproxy or Charles Proxy
- Record all outbound connections during: first launch, normal usage, and after disabling telemetry
- Identify endpoints, payload structure, and data content
- Verify that opt-out mechanisms actually stop network traffic

### 4. Privacy Policy and Documentation Review

- Read the tool's privacy policy, terms of service, and data processing agreements
- Search official documentation for telemetry disclosure
- Check for GDPR/CCPA compliance statements
- Note data retention periods when disclosed

### 5. Community and Issue Tracker Research

- Search GitHub Issues for telemetry-related discussions
- Review pull requests that added or modified telemetry
- Check community forums, Discord servers, and Reddit for user reports
- Monitor changelogs for telemetry-related changes

---

## What Counts as Telemetry

We define **telemetry** as any automated data transmission from the tool to a remote server that is not strictly necessary for the tool's core functionality. This includes:

| Type | Examples | Included? |
|------|----------|-----------|
| **Usage analytics** | Feature usage counts, session duration, UI interactions | Yes |
| **Crash reporting** | Stack traces, error logs, system info sent to Sentry/Bugsnag | Yes |
| **Behavioral tracking** | Command frequency, workflow patterns, time-of-day usage | Yes |
| **Hardware fingerprinting** | Machine ID, OS version, CPU/GPU info, screen resolution | Yes |
| **Performance metrics** | Response times, latency measurements, resource usage | Yes |
| **A/B testing** | Feature flags fetched from remote servers (Statsig, LaunchDarkly) | Yes |
| **Activation/license checks** | Phone-home for license validation that also transmits usage data | Yes |

---

## What Does NOT Count as Telemetry

Some network activity is inherent to the tool's function and is not classified as telemetry:

| Type | Examples | Included? |
|------|----------|-----------|
| **LLM API calls** | Sending code/prompts to OpenAI, Anthropic, etc. for completions | No* |
| **Version/update checks** | Checking for new releases (with no usage data attached) | No |
| **Extension marketplace** | VS Code extension update mechanisms | No |
| **Authentication** | OAuth flows, API key validation | No |
| **Content delivery** | Downloading models, assets, or documentation | No |

*\*LLM API calls are noted separately in the "Collects Code?" column. While not telemetry per se, sending your code to a third-party API is a privacy consideration that enterprises care about.*

---

## Default State Classification

Each tool receives one of six classifications:

### 🔴 ON by Default
Telemetry is active immediately upon installation or first use, without asking. The user must take explicit action to disable it. This is the most common — and most concerning — state.

**Criteria:** Telemetry code runs unconditionally on startup, OR the default configuration has telemetry enabled, OR network inspection shows phone-home activity before any user consent.

### 🟡 Opt-in / Asks First
Telemetry exists in the codebase but is either disabled by default or the tool asks for consent before enabling it.

**Criteria:** Default configuration has telemetry disabled, OR a first-run prompt asks for consent, OR telemetry code checks for explicit opt-in before activating.

### 🟢 No Telemetry
No telemetry infrastructure found. No analytics libraries in dependencies. No phone-home behavior observed.

**Criteria:** No analytics/telemetry dependencies, no outbound analytics traffic observed, no telemetry configuration options exist (because there's nothing to configure).

### ⚫ Unknown
Unable to determine telemetry state. Typically applies to closed-source tools with no public documentation about data collection.

**Criteria:** Source code unavailable, no privacy documentation found, unable to perform network analysis, no community reports.

### 🔵 Conditional
Telemetry behavior depends on deployment mode, configuration, or tier.

**Criteria:** Self-hosted version has no telemetry but cloud version does, OR telemetry is only present in specific deployment configurations, OR behavior differs significantly between free and paid tiers.

### ☁️ SaaS-Inherent
The tool is a cloud-only service where all interaction is inherently server-side. Traditional "telemetry" distinctions don't apply because the vendor sees everything by design.

**Criteria:** No local/self-hosted option exists, all code processing happens on vendor servers, the concept of "opting out of telemetry" is meaningless because usage of the service IS the data collection.

---

## Evidence Standards

Every claim in the Agent Snitch List must be backed by at least one of the following:

| Evidence Type | Strength | Example |
|--------------|----------|---------|
| **Source code link** | Strong | GitHub permalink to telemetry initialization |
| **Network capture** | Strong | HAR file or mitmproxy log showing telemetry traffic |
| **Official documentation** | Strong | Privacy policy or docs page disclosing telemetry |
| **Dependency manifest** | Medium | `package.json` showing PostHog as a dependency |
| **Configuration schema** | Medium | Settings file showing telemetry toggle defaults |
| **Community report** | Weak | GitHub issue or forum post reporting telemetry |
| **Behavioral observation** | Weak | "I noticed network requests to..." without capture |

For a tool to be classified as 🔴 ON, we require at least one **strong** or two **medium** pieces of evidence.

For a tool to be classified as 🟢 None, we require: (a) no analytics dependencies found, AND (b) source code audit showing no telemetry patterns, OR (c) network inspection confirming no phone-home behavior.

---

## Verification Process

1. **Initial research** — One contributor performs the full research process
2. **Peer review** — At least one other contributor reviews the findings and evidence
3. **Tool-specific page** — Detailed findings are documented in `tools/<slug>.md` with evidence links
4. **Summary table update** — The main README table is updated
5. **Ongoing monitoring** — Tools are re-evaluated when new versions are released, when community members report changes, or at minimum every 6 months

---

## Limitations

We acknowledge the following limitations:

- **Closed-source tools** can only be evaluated via network inspection, documentation, and community reports. We may miss server-side telemetry that doesn't manifest as client-side network traffic.
- **Point-in-time accuracy** — Our findings reflect the tool's behavior at the time of analysis. Tools update frequently; telemetry can be added or removed in any release.
- **Transitive dependencies** — A tool might inherit telemetry from a framework or dependency we didn't trace deeply enough.
- **Network inspection coverage** — We may not exercise every code path during testing. Some telemetry might only fire under specific conditions.
- **Self-hosted vs. cloud** — Some tools behave differently depending on deployment. We try to note this, but may not cover every configuration.

---

## Disputing Findings

We take accuracy seriously. If you believe an entry is incorrect:

1. **Tool vendors:** Use the [dispute issue template](https://github.com/yourusername/agent-snitch-list/issues/new?template=dispute.yml) to formally dispute a finding. Provide counter-evidence (source code links, documentation, network captures).
2. **Community members:** Open a regular issue or PR with updated evidence.
3. **Response time:** We aim to respond to disputes within 7 days and resolve within 14 days.
4. **Good faith:** We will update or correct entries when presented with credible evidence. Our goal is accuracy, not antagonism.

If a tool has recently changed its telemetry behavior (e.g., made telemetry opt-in in a new release), please include the version number and changelog link so we can verify and update accordingly.
