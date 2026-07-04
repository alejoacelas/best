export interface GlossaryEntry {
  id: string;
  term: string;
  def: string;
  // Optional key into sources.ts: the primary passage describing this thing in
  // Claude Tag specifically. Shown as a link in the hover card and glossary.
  source?: string;
}

// Single source of truth for the hover tooltips and the Glossary page.
export const glossary: Record<string, GlossaryEntry> = {
  sandbox: {
    id: 'sandbox',
    term: 'sandbox',
    def: `An isolated compute environment — its own kernel/filesystem/process table — where code runs with no access to the host or to any network destination that isn't explicitly allowlisted. Disposable: reset by discarding the whole environment.`,
    source: 'howItWorks',
  },
  ephemeral: {
    id: 'ephemeral',
    term: 'ephemeral',
    def: `Created per-task and destroyed on idle, retaining no state. In Claude Tag the per-thread sandbox is ephemeral; the Slack thread and the channel memory are not.`,
    source: 'howItWorks',
  },
  persistent: {
    id: 'persistent',
    term: 'persistent',
    def: `Retained across sessions rather than wiped after each task. Claude Tag's memory is persistent and server-side; the sandbox that reads it is not.`,
    source: 'support',
  },
  'agent-loop': {
    id: 'agent-loop',
    term: 'agent loop',
    def: `The ReAct cycle: observe state → select an action → invoke a tool → read the result → repeat until done. The same loop underlies Claude Code, Cowork, and Tag; they differ in the harness around it.`,
  },
  react: {
    id: 'react',
    term: 'ReAct',
    def: `"Reason + Act" — the agent pattern of interleaving chain-of-thought with tool calls, feeding each tool's output back as the next observation.`,
  },
  ambient: {
    id: 'ambient',
    term: 'ambient mode',
    def: `Admin-gated setting (off by default) where Claude acts unprompted — flags relevant info across its channels/tools and follows up on stalled threads — instead of only firing on @-mention. Turns every message it can read into a candidate instruction.`,
    source: 'announcement',
  },
  routine: {
    id: 'routine',
    term: 'routine',
    def: `A persistent trigger that starts a Claude Tag task without a live human turn: on a schedule, on a repository event (e.g. a new PR), or across many turns of one thread. Routines — not a long-lived process — are how "hours or days" autonomy is achieved.`,
    source: 'howItWorks',
  },
  'prompt-injection': {
    id: 'prompt-injection',
    term: 'prompt injection',
    def: `Getting an agent to follow attacker instructions embedded in content it reads. Direct: a crafted channel message. Indirect: instructions inside a fetched doc, PR, or web page the agent ingests as data.`,
  },
  exfiltration: {
    id: 'exfiltration',
    term: 'exfiltration',
    def: `Moving data out of a trust boundary to somewhere the attacker controls. The compound risk is read access to sensitive data plus any approved outbound write path.`,
  },
  egress: {
    id: 'egress',
    term: 'egress',
    def: `Outbound network traffic leaving the sandbox. Claude Tag runs default-deny egress: every destination is blocked until an admin adds it to an allowlist, so a host is unreachable unless a connection rule names it.`,
    source: 'agentIdentityDoc',
  },
  allowlist: {
    id: 'allowlist',
    term: 'allowlist',
    def: `An explicit permit-list; everything not on it is denied. Claude Tag's egress and connector access are allowlist-based rather than blocklist-based.`,
    source: 'agentIdentityDoc',
  },
  'service-account': {
    id: 'service-account',
    term: 'service account',
    def: `A non-human identity software uses to authenticate, with its own scoped permissions separate from any employee login. Claude Tag acts through service accounts (a Claude Slack app, a Claude GitHub App, per-tool accounts).`,
    source: 'agentIdentityDoc',
  },
  'agent-identity': {
    id: 'agent-identity',
    term: 'Agent Identity',
    def: `Anthropic's access model where Claude acts as its own scoped principal, not by impersonating a user — so every action is attributable to Claude and bounded by that identity's grants. One shared identity for public channels; separate per-private-channel identities.`,
    source: 'agentIdentityDoc',
  },
  'agent-proxy': {
    id: 'agent-proxy',
    term: 'Agent Proxy',
    def: `The credential broker: secrets sit in a separate store and are attached to a request only at the network boundary, so neither the model nor the sandbox ever holds the token. A leaked prompt can't leak a key the model never saw.`,
    source: 'agentIdentityDoc',
  },
  'access-bundle': {
    id: 'access-bundle',
    term: 'Access Bundle',
    def: `Reported (single-source reverse-engineering, not official): an org → workspace → channel inheritance model that resolves which tools, connectors, and memory a given channel's Claude may use.`,
    source: 'agentconn',
  },
  mcp: {
    id: 'mcp',
    term: 'MCP',
    def: `Model Context Protocol — Anthropic's open standard for exposing tools/data to a model over a uniform interface. Whether Tag speaks MCP natively or only via third-party HTTP gateways is unconfirmed.`,
  },
  connector: {
    id: 'connector',
    term: 'connector',
    def: `A configured integration (Google Drive, GitHub, a Git repo) that hands the agent tools to read from or act on an external system. In Tag, connectors are attached per channel by an admin, each with its own memory and spend cap.`,
    source: 'howItWorks',
  },
  'living-page': {
    id: 'living-page',
    term: 'living page',
    def: `A deliverable Claude edits in place over time — a digest or standing report that updates rather than being re-posted — as opposed to a one-off reply or file.`,
    source: 'howItWorks',
  },
  workspace: {
    id: 'workspace',
    term: 'workspace',
    def: `A Slack workspace is the whole org space; a channel is one room in it. These are Claude Tag's scoping units: memory and permissions are bound to the channel and the workspace, not to a user or a repo.`,
    source: 'memoryDoc',
  },
  pr: {
    id: 'pr',
    term: 'pull request',
    def: `A proposed, reviewable set of code changes against a shared branch. For code tasks Tag's deliverable is a draft PR opened via the Claude GitHub App, not a snippet in chat.`,
    source: 'howItWorks',
  },
  'spend-cap': {
    id: 'spend-cap',
    term: 'spend cap',
    def: `A token budget (tokens = the billed units of model I/O) enforced at both org and channel level. Over-budget work is declined outright, not silently truncated.`,
    source: 'support',
  },
  multiplayer: {
    id: 'multiplayer',
    term: 'multiplayer',
    def: `One shared agent per channel that every member sees and can hand work to — capability is channel-scoped, identical regardless of who asked — versus a private per-user DM bot.`,
    source: 'announcement',
  },
  scim: {
    id: 'scim',
    term: 'SCIM',
    def: `System for Cross-domain Identity Management — the standard for auto-provisioning/deprovisioning user accounts from an IdP. An Enterprise-tier control, relevant to who can be granted Tag access.`,
  },
};
