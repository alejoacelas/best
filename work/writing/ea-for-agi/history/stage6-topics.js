export const meta = {
  name: 'ea-for-agi-stage6-topics',
  description: 'Stage 6: one best-readings map per curriculum topic (MacAskill menu + intro week) — assess keep-or-scratch, scour rebuilds from zero, write, red-team, revise',
  phases: [
    { title: 'Assess', detail: 'keep-or-scratch verdict per topic; keeps adapted in place' },
    { title: 'Scour', detail: 'rebuild topics: find + download the best readings from zero', model: 'opus' },
    { title: 'Write', detail: 'rebuild topics: fresh topic map from the readings' },
    { title: 'Redteam', detail: 'adversarial check per topic map', model: 'opus' },
    { title: 'Revise', detail: 'apply valid findings' },
  ],
}

const ROOT = '/Users/alejo/best/work/writing/ea-for-agi'
const VENV = '/private/tmp/claude-501/-Users-alejo-best-work-writing/fb31520b-2bcf-48d3-8dce-d85754d2eca8/scratchpad/venv/bin/python'
const FETCH = `${VENV} ${ROOT}/history/fetch_reading.py`

const CONTEXT = `You are building one topic of a fellowship curriculum: "EA in the age of AGI".
THE INTENT (read ${ROOT}/idea/course-idea.md first — it is short and authoritative): the fellowship assumes participants are already on board with EA ideas; it does NOT introduce EA. It takes them to "okay — and what will AI do to the future?". Each topic below is one possible week. The previous version of this project designed an 8-session intro-fellowship replacement; that framing is DEAD and archived — do not read anything under ${ROOT}/history/pre-pivot/ and do not reproduce intro-to-EA content or session/arc/exercise structure. A topic map is a menu of the best readings on its topic, nothing more.
Also read ${ROOT}/idea/macaskill-ea-in-the-age-of-agi.md (the founding essay; the topic definitions come from its cause menu).
FORMAT for a topic map at ${ROOT}/analysis/topics/<slug>.md (follow the structure of ${ROOT}/analysis/clusters/ai-character.md, which is the format exemplar):
- H1 "Topic: <title>", then a one-line italic note naming the MacAskill menu item it corresponds to.
- "## What this topic covers" — 2-4 sentences + the main sub-threads.
- "## Voices and where they disagree" — the intellectual traditions present and their live disagreements.
- "## Best readings" — the 8-15 standouts, ruthless, most-usable first. EACH entry exactly in this shape:
  N. **[Title](CANONICAL_URL)** (author, venue). One-two lines on why it stands out. *Role: <e.g. anchor essay | accessible on-ramp | rigorous deep-dive | vivid narrative | best critic | data/evidence>.* ([local](../../readings/<folder>/<file>.md))
  The title MUST link to the canonical public URL (each local reading's frontmatter has "url:"; ${ROOT}/readings/INDEX.md also lists source URLs). The ([local](...)) parenthetical MUST be a real repo-relative path — verify with ls before writing it.
- Optionally a short "Also strong" paragraph and a "## Conspicuously missing" list.
- Wrap everything you originate in <!--ai--> ... <!--/ai-->.
An intro-fellowship participant has ~2h of reading per week — the top of the list should be assignable, with deep-dives clearly marked.`

const TOPICS = [
  { slug: 'intro-ai-transformation', title: 'The transition: a century in a decade', menu: '(opening week, not on the menu)', prior: 'new topic — build from zero', folder: 'intro-ai-transformation',
    definition: `The opening week: introduces the idea that advanced AI will have enormous effects on nearly everything in the world, compressed into a short period — and hands participants a lens or narrative to prepare for those effects. MUST include the main Forethought articles introducing the transition — the "century in a decade" intelligence-explosion pieces (Preparing for the Intelligence Explosion and the intelligence-explosion dynamics work). Other strong candidates exist in the collection (most-important-century, AI 2027, Machines of Loving Grace, situational awareness — pieces that convey the SCALE and BREADTH of what's coming, not primarily takeover risk, which is the ai-safety week's job). Many candidates live in readings/forethought/ and readings/macrostrategy/.` },
  { slug: 'global-health-development', title: 'Global health & development', menu: 'global health & development', prior: 'existing cluster map looks close to intent', candidate: 'global-health-adapts-to-ai', folder: 'global-health-adapts-to-ai',
    definition: `The global health & development cause area in the age of AGI: AI as a tool for the global poor, AI-driven growth vs inequality, and how the transition can be structured to benefit the global poor as much as feasible (MacAskill names this exact juice). Not a generic intro to GH&D.` },
  { slug: 'factory-farming', title: 'Factory farming', menu: 'factory farming', prior: 'existing cluster map looks close to intent', candidate: 'animals-adapt-to-ai', folder: 'animals-adapt-to-ai',
    definition: `The factory farming / animal welfare cause area in the age of AGI: AI as tool and threat for animals, long-run trajectory and lock-in of animal suffering, animal-inclusive alignment. Not a generic intro to farmed-animal advocacy.` },
  { slug: 'ai-safety', title: 'AI safety', menu: 'AI safety', prior: 'Alejo says this cluster is basically in the shape he wants — expect keep', candidate: 'ai-safety-core', folder: 'ai-safety-core',
    definition: `The AI safety cause area at curriculum-week depth: alignment, takeover risk, control — the core case and its best critics, for a smart reader who is new to the technical detail but not to EA.` },
  { slug: 'ai-character', title: 'AI character', menu: 'AI character', prior: 'Alejo says this cluster is basically in the shape he wants — expect keep', candidate: 'ai-character', folder: 'ai-character',
    definition: `MacAskill's gloss (footnote): what should be in the model spec? How should AI behave in the countless situations it finds itself in? Pure instruction-following AI vs AI with its own virtuous character. Personas, constitutions, character training, and character-as-alignment.` },
  { slug: 'ai-welfare-digital-minds', title: 'AI welfare / digital minds', menu: 'AI welfare / digital minds', prior: 'existing cluster map likely close to intent', candidate: 'ai-welfare-digital-minds', folder: 'ai-welfare-digital-minds',
    definition: `Moral status of digital minds: consciousness and moral patienthood evidence, what labs and society should do now, welfare interventions, and the best skeptics.` },
  { slug: 'ai-rights', title: 'Economic and political rights of AIs', menu: 'the economic and political rights of AIs', prior: 'existing cluster merges this with the economics of AGI for HUMANS (wages, jobs, capital) — judge whether the rights-of-AIs topic itself is well served; if not, rebuild from zero', candidate: 'ai-rights-economics', folder: 'ai-rights-economics',
    definition: `The economic and political rights OF AIS: contracts, property, wages for AIs, votes, legal personhood, freedom to choose work — and the three-way debate between rights-as-human-safety (trade beats war), rights-as-welfare (subservient minds are a moral wrong), and rights-as-existential-risk (granting rights hands over the future). The human-labor-economics story is NOT this topic (it belongs to gradual disempowerment / GH&D).` },
  { slug: 'persuasion-epistemic-disruption', title: 'AI-driven persuasion and epistemic disruption', menu: 'AI-driven persuasion and epistemic disruption', prior: 'existing cluster fuses this threat-side topic with the opportunity side (AI for reasoning); the menu treats them as two separate items — judge honestly; if rebuilt, build the threat side only', candidate: 'persuasion-epistemics', folder: 'persuasion-epistemics',
    definition: `The threat side only: superhuman persuasion, sycophantic companions, synthetic media, AI-driven propaganda, and the erosion of humanity's collective ability to figure out what's true — including the best revisionist critics of misinformation panic.` },
  { slug: 'ai-for-epistemics', title: 'AI for better reasoning, decision-making and coordination', menu: 'AI for better reasoning, decision-making and coordination', prior: 'no dedicated cluster exists (currently a sub-thread of persuasion-epistemics) — build from zero; candidates live in readings/persuasion-epistemics/ and readings/forethought/', folder: 'ai-for-epistemics',
    definition: `The opportunity side, which MacAskill flags as cross-cutting: AI for forecasting, truthful AI, collective intelligence and bridging systems, prediction markets and info-finance, AI tools for negotiation, decision-making and coordination — could AI upgrade our epistemics and institutions past anything humans manage alone?` },
  { slug: 'human-coups', title: 'The risk of (AI-enabled) human coups', menu: 'the risk of (AI-enabled) human coups', prior: 'existing cluster merges three menu items (coups, democracy preservation, gradual disempowerment) — expect rebuild from zero for each', candidate: 'power-concentration-democracy', folder: 'human-coups',
    definition: `Deliberate seizure of unprecedented power by a small group using advanced AI: secretly-loyal AIs, singularly-obedient military/state systems, corporate or head-of-state power grabs, why such power could lock in, and the defensive agenda. Anchor tradition: Davidson et al's AI-enabled coups work (Forethought).` },
  { slug: 'democracy-preservation', title: 'Democracy preservation', menu: 'democracy preservation', prior: 'no dedicated cluster (merged inside power-concentration-democracy) — build from zero; candidates live in readings/power-concentration-democracy/', folder: 'democracy-preservation',
    definition: `Keeping democratic institutions functional through the AI transition: elections and AI, checks and balances under concentrated AI power, autocratization dynamics, benefit-sharing and the social contract when states no longer need citizens' labor or consent, and institutional designs that survive the transition.` },
  { slug: 'gradual-disempowerment', title: 'Gradual disempowerment', menu: 'gradual disempowerment', prior: 'no dedicated cluster (a sub-thread of two old clusters) — build from zero; candidates in readings/power-concentration-democracy/, readings/ai-rights-economics/, readings/persuasion-epistemics/', folder: 'gradual-disempowerment',
    definition: `The slow-erosion existential risk with no coordinated takeover: economy, culture, and states gradually stop needing humans; human influence decays as AI outcompetes us at the tasks that gave us leverage; the intelligence curse; capital displacing labor as the source of power. Anchor: Kulveit et al's Gradual Disempowerment; Christiano's what-failure-looks-like lineage; the best critics of the thesis.` },
  { slug: 'biorisk', title: 'Biorisk', menu: 'biorisk', prior: 'existing cluster map likely close to intent', candidate: 'biorisk', folder: 'biorisk',
    definition: `The biorisk cause area with the AI lens explicit: AI-driven biological uplift, pandemic prevention in the age of AGI, defensive acceleration, plus the canonical biosecurity core.` },
  { slug: 'space-governance', title: 'Space governance', menu: 'space governance', prior: 'existing cluster map likely close to intent', candidate: 'space-governance', folder: 'space-governance',
    definition: `Space governance as an AGI-era cause: who claims the cosmos after an intelligence explosion, space resources and settlement governance, lock-in of the long-term future.` },
  { slug: 's-risks', title: 'S-risks', menu: 's-risks', prior: 'existing cluster map likely close to intent', candidate: 's-risks', folder: 's-risks',
    definition: `Risks of astronomical suffering: what they are, why they might dominate expected value, agential vs incidental s-risks, and the CLR/CRS research tradition with its best critics.` },
  { slug: 'macrostrategy', title: 'Macrostrategy', menu: 'macrostrategy', prior: 'existing cluster map likely close to intent', candidate: 'macrostrategy', folder: 'macrostrategy',
    definition: `The zoom-all-the-way-out cause: hinge of history, timelines and takeoff, crucial considerations, better vs worse futures, how confident anyone can be — the strategic frame the other weeks sit inside.` },
  { slug: 'meta', title: 'Meta', menu: 'meta', prior: 'existing cluster map is about EA-thinking-about-itself, which may be close — judge whether it serves "meta" as a cause-area week', candidate: 'ea-meta-movement', folder: 'ea-meta-movement',
    definition: `The meta cause area in the age of AGI: movement-building and field-building, cause prioritization as a live ongoing project, cultivation vs growth, absorptive capacity, and EA's third-way identity — what it takes for the machine that turns money and time into good to work during the transition.` },
]

const ASSESS_SCHEMA = { type: 'object', properties: { verdict: { type: 'string', enum: ['keep', 'rebuild'] }, reason: { type: 'string' }, docWritten: { type: 'boolean' }, searchTargets: { type: 'array', items: { type: 'object', properties: { target: { type: 'string' }, why: { type: 'string' } }, required: ['target'] } } }, required: ['verdict', 'reason', 'docWritten'] }
const SCOUR_SCHEMA = { type: 'object', properties: { downloaded: { type: 'number' }, files: { type: 'array', items: { type: 'string' } }, inCollection: { type: 'array', items: { type: 'string' } }, notFound: { type: 'array', items: { type: 'string' } } }, required: ['downloaded'] }
const WRITE_SCHEMA = { type: 'object', properties: { standouts: { type: 'number' }, summary: { type: 'string' } }, required: ['standouts'] }
const REDTEAM_SCHEMA = { type: 'object', properties: { findings: { type: 'array', items: { type: 'object', properties: { severity: { type: 'string' }, problem: { type: 'string' }, fix: { type: 'string' } }, required: ['severity', 'problem', 'fix'] } } }, required: ['findings'] }
const REVISE_SCHEMA = { type: 'object', properties: { changes: { type: 'array', items: { type: 'string' } }, declined: { type: 'array', items: { type: 'string' } } }, required: ['changes'] }

const results = await pipeline(TOPICS,
  // ---- Stage 1: assess keep-or-scratch; keeps get adapted immediately ----
  (t) => agent(`${CONTEXT}

TOPIC: "${t.title}" (slug: ${t.slug}) — MacAskill menu item: ${t.menu}.
DEFINITION of what this week is about: ${t.definition}
Prior from Alejo (a hint, not a verdict — judge honestly): ${t.prior}

TASK (assess, and adapt if keep):
${t.candidate ? `The candidate existing map is ${ROOT}/analysis/clusters/${t.candidate}.md. Read it in full. Verdict: does it already have the thing we want — is it a best-readings map of exactly THIS topic as defined above, or does it cover a different/broader/merged topic? "keep" only if the topic maps one-to-one; a map that fuses this topic with another menu item, or approaches it from an angle we didn't want, is "rebuild".` : `No candidate map exists — verdict is "rebuild".`}
- If KEEP: adapt it into ${ROOT}/analysis/topics/${t.slug}.md now. Keep the content and reading selection as-is (that is the point of "keep"); retitle to the format spec, cut any framing that belongs to the dead v1 intro-fellowship idea, and convert the standout list to the required entry shape — each title linking to its canonical URL (from the reading file's frontmatter "url:" or readings/INDEX.md) with the ([local](...)) parenthetical verified via ls. Fix or drop any broken path. Set docWritten=true.
- If REBUILD: do NOT write anything and do NOT design the reading list yourself. Return docWritten=false, the reason, and 6-12 searchTargets: the specific pieces/authors/venues a scour agent should hunt for this topic from zero (concrete enough to web-search; include the anchors named in the definition).`,
    { label: `assess:${t.slug}`, phase: 'Assess', schema: ASSESS_SCHEMA }),

  // ---- Stage 2: scour (rebuild topics only) ----
  (a, t) => {
    if (!a) return null
    if (a.verdict === 'keep') return { assess: a }
    return agent(`${CONTEXT}

TOPIC: "${t.title}" (slug: ${t.slug}). DEFINITION: ${t.definition}
This topic is being built FROM ZERO. Do NOT read any file under ${ROOT}/analysis/ — your job is a fresh hunt for the best readings on this topic, unanchored by previous maps.
Search targets suggested by the assessor:
${JSON.stringify(a.searchTargets || [], null, 1)}

TASK (scour):
1. Mine the existing collection NEUTRALLY: grep ${ROOT}/readings/INDEX.md by topic keywords (titles/notes/urls only) and list the in-collection candidate paths that plausibly belong to this topic. Cast wide (15-30 candidates is fine).
2. Hunt the web for the BEST-KNOWN pieces on this topic: work through the search targets, and also search for curated reading lists / syllabi / "best posts on X" to catch canon you'd otherwise miss. You want the pieces a domain insider would consider unmissable, plus the best critic of the topic's core thesis.
3. Download everything good that is NOT already in the collection (grep INDEX.md by a distinctive title word first) into ${ROOT}/readings/${t.folder}/ (mkdir -p first) with:
   ${FETCH} "<url>" "${ROOT}/readings/${t.folder}/<slug>.md" --topic "${t.slug}" --note "stage6 scour: <why>"
   If a fetch fails or a site 403s, retry via Wayback (curl "http://archive.org/wayback/available?url=..."); skip paywalled and note them. 8-20 downloads is a normal haul for a from-zero topic; fewer if the collection already holds the canon.
4. Return: downloaded count, the new file paths, the in-collection candidate paths (repo-relative, verified with ls), and notFound.`,
      { label: `scour:${t.slug}`, phase: 'Scour', model: 'opus', schema: SCOUR_SCHEMA })
      .then((s) => ({ assess: a, scour: s }))
  },

  // ---- Stage 3: write (rebuild topics only) ----
  (acc, t) => {
    if (!acc) return null
    if (acc.assess.verdict === 'keep') return acc
    const s = acc.scour || {}
    return agent(`${CONTEXT}

TOPIC: "${t.title}" (slug: ${t.slug}) — MacAskill menu item: ${t.menu}.
DEFINITION: ${t.definition}
This topic map is being written FROM ZERO. Do NOT read the old maps in ${ROOT}/analysis/clusters/ — the previous cluster covering this ground took an approach we did not want. Work from the readings themselves.
Your material:
- Freshly scoured files: ${JSON.stringify(s.files || [])}
- In-collection candidates: ${JSON.stringify(s.inCollection || [])}
- Everything in ${ROOT}/readings/${t.folder}/ and anything else you find by grepping ${ROOT}/readings/INDEX.md.

TASK (write): read the candidates (skim the long ones), pick the 8-15 best, and write ${ROOT}/analysis/topics/${t.slug}.md in exactly the FORMAT spec above. Be ruthless: best-known anchor first, accessible on-ramp near the top, the best critic always present, deep-dives marked. Every title links to its canonical URL; every ([local](...)) path verified with ls. End with "## Conspicuously missing" for what you couldn't find. Return the standout count and a 3-line summary.`,
      { label: `write:${t.slug}`, phase: 'Write', schema: WRITE_SCHEMA })
      .then((w) => ({ ...acc, write: w }))
  },

  // ---- Stage 4: red-team (all topics) ----
  (acc, t) => {
    if (!acc) return null
    return agent(`${CONTEXT}

TOPIC: "${t.title}" (slug: ${t.slug}). DEFINITION: ${t.definition}
Adversarially review ${ROOT}/analysis/topics/${t.slug}.md. Attack:
1. TOPIC FIT — is this exactly the defined topic, or does it drift into a neighboring menu item (the old clusters merged several) or into dead v1 territory (intro-to-EA content, session/exercise structure)?
2. SELECTION QUALITY — are the readings a domain insider would call unmissable actually here? WebSearch for the topic's canon and best recent pieces; name specific missing readings with URLs. Is the best critic of the topic's core thesis present?
3. LINK INTEGRITY — spot-check 8-10: each ([local](...)) path exists (ls from the file's directory), each title URL is the canonical public source (not a search page, not a local path).
4. FORMAT — entry shape as specified, 8-15 standouts, assignable top-of-list for a ~2h/week reader, <!--ai--> wrapping.
Return 3-8 SHARP findings (severity high/medium/low, problem, concrete fix — for missing readings include the URL). Only real defects; verify before asserting.`,
      { label: `redteam:${t.slug}`, phase: 'Redteam', model: 'opus', effort: 'high', schema: REDTEAM_SCHEMA })
      .then((r) => ({ ...acc, redteam: r }))
  },

  // ---- Stage 5: revise (only if findings) ----
  (acc, t) => {
    if (!acc) return null
    const findings = acc.redteam?.findings || []
    if (!findings.length) return { ...acc, revise: { changes: [] } }
    return agent(`${CONTEXT}

TOPIC: "${t.title}" (slug: ${t.slug}). DEFINITION: ${t.definition}
A red-team critic reviewed ${ROOT}/analysis/topics/${t.slug}.md. Findings:
${JSON.stringify(findings, null, 1)}

TASK (revise): fix every finding you judge valid, in place. For missing readings the critic named with URLs: download with
  ${FETCH} "<url>" "${ROOT}/readings/${t.folder}/<slug>.md" --topic "${t.slug}" --note "stage6 redteam add: <why>"
(mkdir -p the folder if needed), then work them into the list — and CUT something if the list exceeds 15; ruthlessness is part of the format. Fix broken paths and non-canonical URLs. If a finding is invalid or a deliberate tradeoff, decline it with a reason. Verify every path you touch with ls. Return changes and declined.`,
      { label: `revise:${t.slug}`, phase: 'Revise', schema: REVISE_SCHEMA })
      .then((v) => ({ ...acc, revise: v }))
  },
)

const summary = results.map((r, i) => r && ({
  slug: TOPICS[i].slug,
  verdict: r.assess?.verdict,
  reason: r.assess?.reason,
  downloaded: r.scour?.downloaded ?? 0,
  standouts: r.write?.standouts ?? (r.assess?.verdict === 'keep' ? 'kept' : null),
  findings: (r.redteam?.findings || []).length,
  changes: (r.revise?.changes || []).length,
  declined: r.revise?.declined || [],
})).filter(Boolean)
log(`stage 6 done: ${summary.filter((s) => s.verdict === 'keep').length} kept, ${summary.filter((s) => s.verdict === 'rebuild').length} rebuilt`)
return { summary }