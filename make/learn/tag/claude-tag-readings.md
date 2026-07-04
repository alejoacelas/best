# Claude Tag Technical Reading Packet

Last researched: 2026-07-03

Focus line: gears-level understanding of Claude Tag (Anthropic's persistent Slack agent), not a help-center tour.

## Reading Order

### 1. Introducing Claude Tag (Anthropic official announcement)
Source: https://www.anthropic.com/news/introducing-claude-tag
Why read it: The primary source and the load-bearing document for every design claim. Read it first, then treat everything else as corroboration or reverse-engineering.
Technical abstract: Announces the beta (June 23, 2026) for Enterprise/Team, framed as "an evolution of Claude Code." Establishes the one-Claude-per-channel multiplayer identity, per-channel memory that builds "tacit knowledge," admin-scoped identities that don't cross department lines, opt-in ambient monitoring, self-scheduled autonomy "over hours or days," token-spend caps, and a full audit log with per-task user attribution.
What to extract:
- The exact "evolution of Claude Code" framing and the who/where/how-autonomous positioning vs Code and Cowork.
- The verbatim scoping guarantee ("a model set up for sales work won't pass on memories to one set up for engineering").
- The "65% of our product team's code" claim — note it is product-team output, not "its own code."
- Ambient behavior described as proactive flagging + following up on quiet threads.

### 2. How agent identity works — Claude Documentation
Source: https://claude.com/docs/claude-tag/concepts/agent-identity
Why read it: The most concrete official mechanics anywhere — the closest thing to an architecture doc.
Technical abstract: Details the service-account identity model (Claude Slack app, Claude GitHub App, per-tool service accounts), the Anthropic-hosted per-thread sandbox ("nothing installed in your network"), and the Agent Proxy credential model where secrets stay in a credential store and are injected at the request boundary so neither the model nor the sandbox holds them. Outbound egress is default-deny against an admin allowlist.
What to extract:
- Agent Proxy: credentials never in the sandbox, retrieved only at moment of injection.
- Default-deny outbound; a host is unreachable until an admin adds a connection rule.
- Memory is configured separately from identity.

### 3. How Claude Tag works — Claude Documentation
Source: https://claude.com/docs/claude-tag/concepts/how-it-works
Why read it: Best ground-truth on the execution loop, deliverables, and what does/doesn't persist.
Technical abstract: Describes the five-step working loop (initiation → sandbox build → working loop → post results → idle release), the durable-thread/disposable-sandbox distinction, deliverable types (replies, files/charts, living pages, draft PRs), connection-locking at thread start, and routines (schedule / repo-event / multi-turn). Confirms cloud-hosted ephemeral compute, not local or in-network.
What to extract:
- Thread is durable; sandbox is ephemeral (sandbox-only files are lost on idle, recreated on next reply).
- A thread locks its connections/skills/plugins at start; config changes never reach a running thread.
- Long-horizon autonomy = self-scheduled routines + external durable state (branches/PRs/docs), NOT one long-lived process.

### 4. Claude Tag memory — Claude Documentation
Source: https://claude.com/docs/claude-tag/users/memory
Why read it: Resolves the apparent contradiction in press coverage about whether memory crosses channels. This is the decisive source on scope.
Technical abstract: States that public-channel memory is shared workspace-wide automatically ("A decision recorded in #data-eng is available when you ask in #analytics"), while private channels can read workspace memory but write only to their own store and never report out. Cross-identity access requires explicit admin permission.
What to extract:
- Public-channel memory shares automatically within a workspace/identity scope — no per-request grant.
- Private channels are asymmetric: read workspace memory, write locally, never surface out.
- The "no memory across channels" line in the support article describes isolation between separately-configured identities and DMs, not within-workspace public channels.

### 5. What is Claude Tag? — Claude Help Center
Source: https://support.claude.com/en/articles/15594475-what-is-claude-tag
Why read it: Official support doc; highest-confidence on governance surfaces and retention.
Technical abstract: States per-channel/per-workspace retained memory, admin view/edit/delete, the Audit console path (Organization settings > Claude Tag > Audit), token-spend behavior (over-budget work declined, not silently truncated), Owner/Primary-Owner-only configuration, Slack-vs-web history separation, and Slack-retention governance (conversations auto-delete within ~30 days on disconnect).
What to extract:
- Admin CRUD on memory + Audit console = memory is a shipped, governed surface, not an abstraction.
- Retention of conversations follows org Slack policy; no separate published decay policy for the memory layer.
- Channel work runs under org Agent Identity; DMs run on the user's personal account.

### 6. Agent identity: a new access model for autonomous, team-wide AI — Anthropic blog
Source: https://claude.com/blog/agent-identity-access-model
Why read it: Official deep-dive on the permission/governance model underlying restrictions.
Technical abstract: Per-private-channel identities vs one shared public-channel identity; credentials stored independently and injected at the network boundary; default-deny egress; audit of every routine, memory write, and network call; planned just-in-time credential grants and identity-aware overlays.
What to extract:
- Compartmentalization is enforced at the identity/channel boundary, not by post-hoc filtering.
- Dual-sided auditability: actions land in both the Tag Audit console and each connected system's own logs.

### 7. Anthropic's Claude Tag is learning your company, one Slack message at a time — TechCrunch
Source: https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/
Why read it: Best critical reporting; explicitly hedges where Anthropic is silent.
Technical abstract: Frames ambient always-on Claude as surveillance infrastructure. Confirms the per-channel-not-org-wide boundary and permissioned cross-channel fact-gathering, and — crucially — flags that Anthropic "does not specify" whether cross-channel access is persistent copied memory vs on-demand retrieval.
What to extract:
- The permission/persistence ambiguity is called out by the reporter, not resolved.
- Surveillance/consent framing and the detection-gap concern.

### 8. Claude Tag: How the Per-Thread Sandbox Works (AgentConn / Medium, Max Quimby)
Source: https://medium.com/@computeleap/claude-tag-how-the-per-thread-sandbox-works-agentconn-blog-fd4edc8db0c8
Why read it: The main independent reverse-engineering attempt — read it partly as a cautionary example of speculation.
Technical abstract: Reports Opus 4.8 backing, an org→workspace→channel Access Bundle inheritance model, and "Slack as trigger surface / cloud Claude Code as execution surface." Advertises a "per-thread sandbox" but its evidence only demonstrates channel-level isolation.
What to extract:
- Slack-trigger / cloud-Code-execution mental model (useful inference).
- Treat "per-thread sandbox" memory isolation and Opus 4.8 as reported/single-source, not confirmed.

### 9. Claude Tag Brings Ambient AI to Slack: Admins Have Until August 3 to Migrate — TechTimes
Source: https://www.techtimes.com/articles/319206/20260627/claude-tag-brings-ambient-ai-slack-admins-have-until-august-3-migrate.htm
Why read it: Clearest statement of the migration timeline and the ambient-mode risk posture.
Technical abstract: Describes the agent-proxy security architecture (credentials injected at request time, per-thread sandbox, default-deny outbound), the Aug 3, 2026 legacy-app retirement, and the "no human-approval step in ambient mode" gap.
What to extract:
- Aug 3, 2026 retirement date (press-reported; not printed on Anthropic's announcement).
- Ambient mode has post-hoc audit, not pre-action approval.

### 10. Claude Is Now Your Coworker. Your IT Team Has 30 Days — The Daily Brief (beri.net)
Source: https://www.beri.net/article/anthropic-claude-tag-slack-enterprise-agent-it-guide-2026
Why read it: The admin/governance operator's-eye view.
Technical abstract: Details the 30-day opt-in window and automatic-migration-on-inaction default, deny-by-default private channels, dual-level (org + channel) spend throttling, per-request user attribution, and configuration-drift / ambient-mode governance risks.
What to extract:
- Migration default: configure or fall to defaults / lose Slack-based Claude access.
- Governance quality depends on admin discipline (over-broad tool grants, drift).

### 11. Lessons from OpenClaw's Architecture — Agentailor blog (reference lens)
Source: https://blog.agentailor.com/posts/openclaw-architecture-lessons-for-agent-builders
Why read it: Grounds "how a Slack + memory + agent-loop system is actually built" in inspectable open source.
Technical abstract: Documents a single-process gateway control plane, `workspace:channel:userId` per-channel session scoping "to prevent cross-context data leaks," flat-file memory (markdown/YAML/JSONL) with hybrid SQLite retrieval, and a canonical tool-loop with per-session serial queues.
What to extract:
- The gateway pattern (normalize platform event → route to agent → stream reply).
- Per-channel session scoping as a deliberate privacy choice — the OpenClaw end of the scope axis.

### 12. Hermes Agent — Persistent Memory docs (Nous Research) (reference lens)
Source: https://hermes-agent.nousresearch.com/docs/user-guide/features/memory
Why read it: The counter-example on memory scope, and evidence that "memory" is really several distinct stores.
Technical abstract: Two token-capped markdown files (MEMORY.md, USER.md) managed by an add/replace/remove tool and injected as a frozen snapshot at session start, plus SQLite+FTS5 session recall and autonomous skill creation — memory is per-user and global across all channels.
What to extract:
- Memory as curated, bounded, human-readable text injected into the prompt — a strong prior against black-box vector-store speculation.
- Declarative memory vs procedural skills vs session transcripts are separate stores.

## Gears-Level Model

### 1. Product shell & where it runs
Claude Tag lives inside Slack but executes in Anthropic's cloud. Tagging @Claude in a channel opens a working session bound to that Slack thread; Anthropic provisions an isolated, ephemeral per-thread sandbox that reads files, runs code, and writes documents, posts results back into the thread, then releases the sandbox when idle and rebuilds it on the next reply (official-doc: how-it-works, agent-identity). "Nothing installed in your network"; the customer's systems only receive requests authenticated by credentials the Agent Proxy attached. This is the exact inversion of Claude Code, which is a local process on the developer's own machine. Deeper sandbox internals (orchestration, durability, isolation boundaries) are undisclosed.

### 2. The persistent-agent / ambient loop
Baseline interaction is @-mention-triggered: you tag Claude and assign a task, and it decomposes the work into steps, runs each with connected tools, and posts results (official-doc + VentureBeat). On top of that sits opt-in "ambient" behavior: when enabled, Claude proactively surfaces relevant information from its channels and connected tools and follows up on threads that have gone quiet, without being tagged (official-doc). Two caveats the sources make explicit: ambient is admin-config-gated and off by default (Anthropic and IT-press advise starting with it OFF), and it is a proactive layer over event/mention-driven execution, not an always-acting daemon. "Autonomously over hours or days" is Anthropic's own phrasing but, per the how-it-works doc, is achieved through self-scheduled routines (schedule / repo-event / multi-turn) plus durable external state — not a single multi-day live process. The internal task scheduler (retry/resume/durability) is undocumented.

### 3. Memory model
This is the most-scrutinized dimension; demonstrated and speculated diverge sharply.

DEMONSTRATED (official-doc):
- Memory is retained, not discarded after each task, and accumulates the team's work context — who handles what, active projects, terminology, decisions (Help Center; announcement).
- It is scoped per-channel and per-workspace. Within a workspace, public-channel memory is shared automatically ("A decision recorded in #data-eng is available when you ask in #analytics" — memory doc). Private channels are asymmetric: they can read workspace memory but write only to their own store and never report out to the workspace.
- It does NOT cross admin-defined identity boundaries. A sales Claude won't pass memories to an engineering Claude (announcement). Cross-identity / other-channel access requires explicit admin permission and, per the memory doc, naming the target channel — there is no free-text search across all sessions.
- It is a governed surface: admins view/edit/delete memory, and an Audit console (Organization settings > Claude Tag > Audit) logs tasks, memory writes, and network calls (Help Center; agent-identity blog).

RECONCILING THE APPARENT CONTRADICTION: some coverage (the support article, DataCamp) says flatly "there is no memory across channels." That is not a contradiction — it describes the default isolation between separately-configured identities and DMs, and coexists with automatic public-channel sharing within one identity's workspace scope. The correct one-line synthesis: memory crosses channels WITHIN a workspace/identity (public automatically, private read-only-inbound), and does NOT cross admin-drawn identity lines without permission.

"SHARED ENTERPRISE MEMORY": this phrase is press headline language (WindowsNews/WindowsForum), NOT Anthropic's. Anthropic's own scoping statements refute an org-wide pooled brain. "Shared" is accurate only as (a) multiplayer — one Claude per channel shared by all humans in it — and (b) workspace-wide for public channels.

SPECULATED (flag explicitly): the storage mechanism is undisclosed. No Anthropic source states schema, index type, or retrieval method. Third-party claims of a vector store, knowledge graph, or "per-thread sandbox memory" are speculation — WindowsForum states plainly that implementation specifics "remain unknown," and TechCrunch flags that whether cross-channel access is persistent copied memory vs on-demand retrieval is unspecified. The reference-lens analogs (Hermes/OpenClaw both use curated flat-file text, not opaque vectors) are a reasonable prior that "memory" here is likely curated text injected into context — but that is inference, not confirmed.

### 4. Slack connection & unified channel identity
Within a channel there is one Claude that interacts with everyone; any teammate can see what it's working on and pick up where a colleague left off (official-doc). "What Claude can do never changes based on who asked" — capability is channel-scoped, not user-scoped. In-channel actions run under the organization's Agent Identity (service accounts: Claude Slack app, Claude GitHub App, per-tool service accounts); DMs with Claude run on the individual user's personal account and are not pooled into channel memory. Slack-initiated conversations do not appear in Claude web history and vice versa. Its Slack read surface includes thread history (reported cap ~50 messages from thread start), channel history, pinned items, and workspace search; write surface is replies, file attachments, and in-place checklist/progress updates. Emoji reactions and Slack Canvas support are unconfirmed by primary docs.

### 5. Tools/capabilities & connectors
The sandbox is the capability substrate: real code execution, not chat completion. Deliverables posted back to the thread are (1) plain replies/summaries, (2) attached files and charts (e.g. a chart from a posted CSV), (3) "living pages" edited in place for digests/standing reports, and (4) draft GitHub PRs via the Claude GitHub App with the link posted in-thread (official-doc). For code work, the typical deliverable is a draft PR, not a snippet in chat. Primary docs explicitly name Google Drive, Git repos (cloned into the sandbox), GitHub, and Slack. A broader connector list (Vercel, Datadog, Stripe, Sentry, GitLab, Notion, Linear, Gmail, Gong, HubSpot) comes from third-party Composio reporting, not primary docs — treat as reported. Connectors are attached per channel by admins, not per user, each with its own memory and token-spend cap. Native first-class MCP support is NOT confirmed by primary docs; Anthropic's wider Connectors ecosystem is MCP-based, and Composio reaches Tag via an HTTP MCP gateway with a per-channel account — treat "native MCP in Claude Tag" as unverified.

### 6. Autonomous/async task execution
A task can be a one-off @mention, a scheduled routine, a repository-event trigger, or iterative multi-turn work in one thread; teammates steer mid-task by replying in-thread without restarting (official-doc). Durable state that must survive sandbox release is pushed to external systems (branches, PRs, docs). Over-budget work is declined, never silently truncated. Anthropic reports ~65% of its product team's code is created by an internal version of Claude Tag — but note the verified correction: this is the product team's total code output (self-reported, no published methodology, single-source), NOT "Claude Tag writing 65% of its own code," which is a press-headline distortion.

### 7. Governance, permissions & admin control planes
Restrictions are enforced at the identity/channel boundary, not by post-hoc filtering (agent-identity blog). Primitives:
- Admin-defined Claude identities per use (engineering, sales, legal, HR), each with isolated tools, memory, and spend cap.
- Agent Proxy credential model: Claude never holds user credentials; they stay in a store and are injected at the network boundary at request time, under Claude's own service accounts.
- Default-deny outbound egress: hosts unreachable until admin-allowlisted.
- Deny-by-default private channels: Claude reads/pulls from them only with explicit grant, and never reports private-channel content into the wider workspace.
- Dual-level token-spend caps (org + channel) with throttling, not silent overspend.
- Centralized Audit console logging every task, memory write, and network call, each tagged with the requesting user — plus dual-sided auditability in each connected system's own logs.
- Configuration is restricted to Owner / Primary Owner. Migration itself is an admin opt-in decision (30-day window; legacy app retires ~Aug 3, 2026).

### 8. Security surfaces
- Prompt injection via channel content is the leading demonstrated concern: any channel member can attempt to redirect a channel-scoped agent with a crafted message. Reporting attributes a Slack-MCP injection demonstration to Mitiga (reported, not independently verified); the broader indirect-injection + exfiltration class is well-established against Claude products generally ("Claudy Day" / Oasis Security, Code Interpreter exfiltration research). No confirmed public CVE or Anthropic advisory specific to a Claude Tag exploit was found.
- Ambient monitoring expands both the read surface and the attack surface — Claude ingests every message as a candidate instruction — which is why Anthropic itself recommends starting with it OFF.
- Exfiltration control is primarily the default-deny egress allowlist plus per-thread sandbox isolation.
- A structural detection gap: a session executing an injected instruction can look identical in logs to a legitimate one, because the deviation is semantic (what it was told to do), so audit logs alone may not surface a successful injection. The primary control on proactive actions is post-hoc audit, not pre-action human approval.

### 9. Migration from "Claude in Slack"
Legacy Claude in Slack was stateless and session-based: each user's interaction was isolated, there was no shared channel memory, and Claude acted under individual user permissions/billing. Claude Tag replaces it with persistent identity + shared channel memory + org service accounts. Migration is admin-gated: administrators opt in and configure within ~30 days (official) or the org falls to defaults / loses Slack-based Claude access; the legacy app retires ~Aug 3, 2026 (press-reported date; the announcement states the 30-day mechanism but not the date, and the two are loosely inconsistent arithmetically — June 23 + 30 ≈ July 23, not Aug 3). Anthropic issues introductory launch credits to eligible Enterprise/Team orgs. Beta is gated to Enterprise and Team plans only; Tag-specific Team-vs-Enterprise feature differences are not officially enumerated (the split is inferred from general plan tiering, where Enterprise adds SCIM, custom roles, Compliance API, custom retention, IP allowlisting, HIPAA options).

## Claude Tag vs Claude Code vs Claude Cowork

All three run the same Claude models (reported: Opus 4.8) and the same ReAct-style agentic loop inside a harness; they differ by surface, execution locus, and safety boundary.

- Surface: Code = terminal/IDE; Cowork = desktop VM for non-coders; Tag = shared cloud agent inside Slack channels.
- Execution locus: Code = local process on the user's own filesystem/shell (no VM, no container orchestration); Cowork = a managed VM given to the agent; Tag = Anthropic-hosted ephemeral per-thread sandbox in the cloud.
- Persistence / memory: Code has NO persistent install/session state — persistence is opt-in and file-based (hand-written CLAUDE.md read each session + optional local auto-memory notes), single-user. Cowork's persistence is its VM/environment. Tag is the departure: it DOES have persistent, accumulating memory — one governed store per Slack channel, shared by every human in that channel, running under an org Agent Identity, with an admin console to view/edit/delete and an org-wide audit log. The scoping unit is the channel/workspace, not a repo or a person.
- Human-in-loop: Code is developer-in-the-loop at the terminal; Cowork supervises a VM; Tag is async and multiplayer — teammates steer by replying in-thread, and ambient mode acts without a per-action approval step.
- Who it's for: Code = individual developers; Cowork = non-developers needing a computer of the agent's own; Tag = whole teams turning a Slack channel into a shared agentic workspace.

Direct answer to the persistent-state question: Claude Code has no persistent install state — each session starts fresh and any memory is just local files the user maintains. Claude Tag inverts this: it carries persistent, server-side, accumulating memory scoped to the channel/workspace, governed by admins, so users don't re-explain context — the single biggest architectural difference between the two.

## Design Principles

- Multiplayer over private sessions. One Claude per channel that everyone sees and can hand work to — making AI work a legible shared team artifact instead of siloed per-user DMs. This directly fixes the legacy failure mode where work-in-flight was invisible to teammates (announcement).
- Accumulated context is the value, not raw capability. Every team gets the same underlying model; the differentiator is compounding org memory ("tacit knowledge") that removes re-explanation. This is a deliberate stickiness/moat bet — and, per critics, a two-edged one, creating "context lock-in" and concentrating sensitive knowledge in a vendor-held store (reported inference, not an Anthropic claim).
- Initiative completes the "teammate not tool" thesis. Ambient monitoring lets the agent notice stalled work and volunteer context; a purely reactive @-mention tool can't be a teammate. This is simultaneously the highest-leverage and highest-risk principle because it inverts the consent model (reads continuously rather than on invocation).
- Scoped identity as the containment primitive. Anthropic deliberately declines to build one omniscient org brain; it partitions Claude into admin-defined department-scoped identities whose memory and tools don't cross drawn lines. The restriction mirrors human need-to-know org walls, containing the blast radius of both accidental leakage and prompt-injection exfiltration.
- Oversight by observability, not per-action approval. Governance is delivered through spend caps and a fully-attributed audit log rather than gating each autonomous action. Actions are made cheap-to-bound and traceable after the fact.
- Identity-based access over impersonation. Claude acts under its own service accounts with credentials injected at the network boundary (Agent Proxy) and default-deny egress — the model and sandbox never hold secrets.
- The unresolved tension: ambient mode's always-listening design makes any message in a monitored channel a candidate instruction, with post-hoc audit — not pre-action approval — as the primary control (reported).

The core design choice is: scoped-identity information containment over a single omniscient org agent — where Cowork chose environmental containment over user shell-command judgment, Tag chooses admin-drawn channel-identity boundaries as the primary safeguard, because it cannot sandbox its "computer" (the live, human-shared Slack workspace) and cannot gate every ambient action. (This one-sentence synthesis is grounded in Anthropic's scoping language but is not a verbatim Anthropic slogan.)

## Open-Source Analogs (reference lens)

Two self-hosted OSS agents map the design space Claude Tag occupies, and reveal both the likely shape of its internals and where a managed enterprise product must diverge.

Hermes Agent (Nous Research) — https://github.com/nousresearch/hermes-agent
Runs a single `hermes gateway` process brokering Telegram/Discord/Slack/WhatsApp/Signal/CLI into one agent core, funneling all entry points into a single "AIAgent loop." Memory is two token-capped human-readable markdown files (MEMORY.md ~800 tokens, USER.md ~500 tokens) managed by an add/replace/remove tool and injected as a frozen snapshot at session start, plus SQLite+FTS5 for cross-session recall. Critically, Hermes memory is per-user and GLOBAL across all channels ("cross-platform conversation continuity") — the unified-identity end of the scope axis. It also does autonomous skill creation (procedural memory) distinct from declarative notes — evidence that "memory" is really 3+ stores (declarative facts, procedural skills, session transcripts).

OpenClaw (MIT) — https://github.com/openclaw/openclaw
Runs a single-process local Gateway control plane / message broker; connects to Slack via Socket Mode by default (outbound WebSocket, no public URL) with HTTP Request URL and Relay modes as alternatives. Memory is flat files (markdown/YAML/JSONL) with hybrid SQLite (vector + full-text) retrieval. Its defining choice is the opposite of Hermes: session keys are `workspace:channel:userId` specifically to prevent cross-context leaks between the same user in different channels — the hard per-channel-isolation end of the axis. It runs the canonical tool-loop with per-session serial queues (delegating reasoning to the external Pi agent framework and owning only the infra).

What they reveal about Claude Tag:
- The gateway pattern (normalize platform event → route to agent → stream reply) is almost certainly Tag's shape too — but hosted as managed Anthropic cloud infrastructure rather than a process you run. Socket Mode's one-session-per-app limit is why a multi-tenant product favors an HTTP/Events + stateless-replica (or internal relay) transport.
- Both analogs implement memory as curated, bounded, human-readable text — a strong prior that Tag's memory is likewise curated text injected into context, and that blog claims of vector DBs / knowledge graphs are speculation.
- The Hermes-vs-OpenClaw split IS the "shared across channels?" axis. Tag's answer sits between them: unified within a workspace/identity (Hermes-like for public channels) but hard-isolated across admin-drawn identity lines (OpenClaw-like) — which is exactly the extra governance layer an enterprise product must bolt onto unified identity.
- OpenClaw's own mitigations (`workspace:channel:userId` scoping, a policy-chain validating each tool call, serial queues) and the existence of multiple arXiv security analyses of it show the untrusted-input threat model is well-recognized — plausibly motivating Tag's tighter default restrictions (deny-by-default egress/private channels, ambient-off default). These OSS security findings are cited as evidence the risk surface is recognized, not read in full.

## The Short Version

- Claude Tag (beta June 23, 2026; Enterprise/Team) replaces the stateless legacy Claude in Slack with a persistent, shared, one-per-channel teammate; the old app retires ~Aug 3, 2026.
- It runs in Anthropic's cloud in an ephemeral per-thread sandbox — nothing installed in your network — the exact inversion of Claude Code's local process.
- Its defining feature vs Claude Code is persistent, accumulating, admin-governed memory scoped to the channel/workspace (not a repo or a person).
- Memory crosses channels WITHIN a workspace/identity (public channels automatically; private channels read-in/never-report-out) but NOT across admin-drawn identity lines without permission. "Org-wide shared enterprise memory" is press language Anthropic's own scoping refutes.
- The memory STORAGE mechanism is undisclosed — vector store / knowledge-graph / per-thread-sandbox claims are all speculation.
- Security rests on scoped identities, Agent Proxy credential injection, default-deny egress, deny-by-default private channels, spend caps, and a full attributed audit log — governance is oversight-by-observability, not per-action approval.
- The leading risk is prompt injection via channel content, amplified by ambient mode (which Anthropic recommends starting OFF); post-hoc audit can't easily distinguish an injected session from a legitimate one.
- "65% of code" = Anthropic's product-team output via an internal Tag (self-reported, no methodology), NOT "Tag writing 65% of its own code."

## Open Questions To Track

- Memory internals: storage technology (vector DB vs summarized text notes vs knowledge graph), index/retrieval method, and how memory is loaded into context — all undisclosed by Anthropic; every specific claim is speculation.
- Persistent vs on-demand cross-channel access: whether permissioned cross-channel fact-gathering creates persistent copied memory or retrieves on-demand — TechCrunch explicitly notes Anthropic "does not specify."
- Memory-layer retention/decay: conversation retention follows Slack policy (auto-delete ~30 days on disconnect), but whether the accumulated MEMORY ages out, summarizes, or only changes via manual admin edit/delete is undocumented.
- Long-running task durability: the internal scheduler's retry/resume/durability mechanics for "hours or days" autonomy are undisclosed; how self-scheduled routines survive across ephemeral sandbox rebuilds is inferred, not documented.
- "Same harness" as Claude Code: the shared-agentic-loop / cloud-Claude-Code-as-execution-surface framing is inference from reporting, not an Anthropic architecture disclosure.
- Model version: Opus 4.8 backing is reported/single-source (AgentConn), not officially confirmed.
- Native MCP: whether MCP is a first-class native surface in Tag or only reachable via third-party HTTP gateways is unverified.
- Prompt-injection specifics: the Mitiga Slack-MCP demonstration is reported, not independently verified; no confirmed public CVE or Anthropic advisory specific to a Tag exploit was found.
- Team vs Enterprise: no official doc enumerates Tag-specific feature/governance differences between the two tiers — current understanding is inferred from general plan tiering.
- The Aug 3 date vs the "30-day window" are arithmetically inconsistent; the exact retirement date is press-reported, not on Anthropic's announcement page.
