// Central source registry. `kind` encodes the confidence tier of the source
// type: primary Anthropic material = official; press / single-source
// reverse-engineering = reported. `short` is the label shown in-line and in
// term hover-cards. The <Src> component and <Term> both link here.
export interface Source {
  url: string;
  kind: 'official' | 'reported';
  short: string;
  title: string;
}

export const sources: Record<string, Source> = {
  // Official — Anthropic
  announcement: {
    url: 'https://www.anthropic.com/news/introducing-claude-tag',
    kind: 'official',
    short: 'Anthropic announcement',
    title: 'Introducing Claude Tag — Anthropic announcement',
  },
  howItWorks: {
    url: 'https://claude.com/docs/claude-tag/concepts/how-it-works',
    kind: 'official',
    short: 'docs: how it works',
    title: 'How Claude Tag works — docs',
  },
  agentIdentityDoc: {
    url: 'https://claude.com/docs/claude-tag/concepts/agent-identity',
    kind: 'official',
    short: 'docs: agent identity',
    title: 'How agent identity works — docs',
  },
  memoryDoc: {
    url: 'https://claude.com/docs/claude-tag/users/memory',
    kind: 'official',
    short: 'docs: memory',
    title: 'Claude Tag memory — docs',
  },
  restrictAccess: {
    url: 'https://claude.com/docs/claude-tag/admins/restrict-access',
    kind: 'official',
    short: 'docs: restrict access',
    title: 'Restrict where Claude Tag operates — admin docs',
  },
  support: {
    url: 'https://support.claude.com/en/articles/15594475-what-is-claude-tag',
    kind: 'official',
    short: 'Help Center',
    title: 'What is Claude Tag? — Help Center',
  },
  identityBlog: {
    url: 'https://claude.com/blog/agent-identity-access-model',
    kind: 'official',
    short: 'Anthropic blog: access model',
    title: 'Agent identity: a new access model — Anthropic blog',
  },

  // Reported — press & reverse-engineering
  techcrunch: {
    url: 'https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/',
    kind: 'reported',
    short: 'TechCrunch',
    title: 'TechCrunch — learning your company one message at a time',
  },
  agentconn: {
    url: 'https://medium.com/@computeleap/claude-tag-how-the-per-thread-sandbox-works-agentconn-blog-fd4edc8db0c8',
    kind: 'reported',
    short: 'AgentConn (reverse-engineering)',
    title: 'AgentConn — how the per-thread sandbox works',
  },
  techtimes: {
    url: 'https://www.techtimes.com/articles/319206/20260627/claude-tag-brings-ambient-ai-slack-admins-have-until-august-3-migrate.htm',
    kind: 'reported',
    short: 'TechTimes',
    title: 'TechTimes — admins have until August 3 to migrate',
  },
  venturebeat: {
    url: 'https://venturebeat.com/technology/anthropic-launches-claude-tag-replacing-its-slack-app-with-a-persistent-ai-teammate-that-learns-monitors-and-works-autonomously',
    kind: 'reported',
    short: 'VentureBeat',
    title: 'VentureBeat — a persistent AI teammate',
  },
  theregister: {
    url: 'https://www.theregister.com/ai-and-ml/2026/06/23/anthropic-reimagines-claude-in-slack-as-nosy-always-on-agentic-ai-coworker/5260422',
    kind: 'reported',
    short: 'The Register',
    title: 'The Register — nosy, always-on agentic coworker',
  },
  windowsforum: {
    url: 'https://windowsforum.com/threads/claude-tag-beta-persistent-slack-ai-agent-enterprise-memory-and-governance.429887/',
    kind: 'reported',
    short: 'WindowsForum',
    title: 'WindowsForum — notes internals remain unknown',
  },
};
