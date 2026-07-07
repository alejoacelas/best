export const meta = {
  name: 'ea-for-agi-curriculum',
  description: 'Stage 5: thematic axes (both directions) + first-pass curriculum, red-teamed and revised',
  phases: [
    { title: 'Axes', detail: 'axes-first and readings-first catalogs (Fable)', model: 'fable' },
    { title: 'Draft', detail: 'first-pass curriculum from axes + handbook virtues (Fable)', model: 'fable' },
    { title: 'Redteam', detail: '3 adversarial critics' },
    { title: 'Revise', detail: 'apply valid critiques (Fable)', model: 'fable' },
  ],
}

const ROOT = '/Users/alejo/best/work/writing/ea-for-agi'
const CONTEXT = `You are designing a successor to the EA Introductory Program: an 8-session intro fellowship built on Will MacAskill's "Effective altruism in the age of AGI". Read these before doing anything:
- ${ROOT}/idea/course-idea.md — the brief (both-directions axes; walkable reading paths; use handbook virtues)
- ${ROOT}/idea/macaskill-ea-in-the-age-of-agi.md — the founding essay (target: 30%+ beyond classic AI safety; heavy on values/epistemic habits for a fast-changing world)
- ${ROOT}/analysis/landscape.md — the map of the whole collection: 6 cross-cutting debates, coverage scorecard, gaps
- ${ROOT}/analysis/handbook-virtues.md — 12 design principles distilled from what the current EA Handbook does great
- ${ROOT}/analysis/standouts.md — 300+ standout readings with file paths, roles, and why they stand out
- ${ROOT}/analysis/clusters/*.md — per-cluster detail when you need it
Every reading you cite MUST use its real repo-relative path from standouts.md or INDEX.md (readers click straight through). Verify a path exists (ls) if unsure. Readings are markdown; an intro participant has a ~2h/session prep budget.`

// ---------- Phase 1: two axes catalogs, in parallel ----------
phase('Axes')
const axesFirst = agent(`${CONTEXT}

TASK (axes-first): Write ${ROOT}/curriculum/thematic-axes.md — a LONG, deliberately overlapping menu of thematic axes the curriculum could be organized around. The brief wants breadth: aim for 20-30 axes. Draw them from the 6 cross-cutting debates in landscape.md AND from the cause menu AND from the values/epistemics layer. Axes may overlap and cross-cut clusters — that's wanted.
For each axis: a one-line framing (the question or tension it puts in the room), then 1-2 CORE readings (path + why it's the spine) and 2-4 CONTEXT readings that surround it (path + what each adds — a critic, a case, data, a personal register). This document is a walkable menu: someone reads an axis, then clicks straight to its readings.
Organize axes under the five super-clusters from landscape.md, but let cross-cutting axes appear where most natural. Return a 6-line summary of the axis list.`, { label: 'axes:axes-first', phase: 'Axes', schema: { type: 'object', properties: { summary: { type: 'string' }, axisCount: { type: 'number' } }, required: ['summary', 'axisCount'] } })

const readingsFirst = agent(`${CONTEXT}

TASK (readings-first): Write ${ROOT}/curriculum/best-readings.md — the inverse construction. Pick the ~25 BEST readings in the entire collection (the ones that could anchor a session on their own — highest wow-density, clearest voice, most generative discussion). For EACH, build a "context packet": the reading (path + why it's a keystone), then the 2-4 things to place AROUND it to give it meaning — a steelman/critic, a concrete case, a contrasting voice, a personal-register companion, a data point — each with its path and one line on the role it plays. This is the "best readings + what gives them context" direction from the brief.
Bias toward readings that carry MacAskill's beyond-safety agenda and the values/epistemics layer, not just the loss-of-control canon (which the collection over-covers). Return a 6-line summary naming your top keystones.`, { label: 'axes:readings-first', phase: 'Axes', schema: { type: 'object', properties: { summary: { type: 'string' }, keystones: { type: 'array', items: { type: 'string' } } }, required: ['summary', 'keystones'] } })

const [af, rf] = await Promise.all([axesFirst, readingsFirst])
log(`axes-first: ${af?.axisCount || '?'} axes | readings-first: ${rf?.keystones?.length || '?'} keystones`)

// ---------- Phase 2: first-pass curriculum ----------
phase('Draft')
const draft = await agent(`${CONTEXT}
Two design catalogs now exist — read them:
- ${ROOT}/curriculum/thematic-axes.md (axes-first menu)
- ${ROOT}/curriculum/best-readings.md (readings-first packets)

TASK: Write ${ROOT}/curriculum/first-pass.md — the first-pass 8-session curriculum. This is the deliverable.
Design principles (from handbook-virtues.md — apply them explicitly):
- Give the program a deliberate emotional+intellectual ARC across the 8 sessions (the handbook's is awe→agency→rigor→discomfort→dread→hope→doubt→plan). Design an arc that fits THIS course, whose distinctive content is the beyond-safety cause menu and the values for navigating rapid change. Open with awe/narrative, not argument. Stage weird claims behind conceded ones. Put a real critics/discomfort session in. End on planning/action.
- Hit MacAskill's target: ≥30% of content beyond classic AI safety/bio/animals/global-health; a lot on values and epistemic habits for a fast-changing world.
- Every session: (1) a title + one-line thematic framing + where it sits in the arc; (2) 2-4 CORE readings within a ~2h budget, each a real path + one line on its job; (3) a "more to explore" optional layer (paths); (4) 3-5 discussion questions (the best ones make participants reason about their OWN life/plans, per the handbook); (5) one exercise (steal-and-adapt the handbook's best forms — the letter-to-a-counterpart, the cause-prioritization exercise, the confidence re-rating — but fit them to AGI-era content).
- Name the internal disagreement in-text and hand participants the best critic (the handbook's signature move).
- Cross-link to the axes: each session says which thematic axes it draws from.
Before the 8 sessions, write a short "Design rationale" section: the arc, how it meets MacAskill's target, and which handbook virtues it uses. After, a "What I'd want next / open questions" section flagging where a second pass or Alejo's judgment is needed.
Return a structured outline: array of {session, title, arcBeat, coreReadingPaths[]}.`, { label: 'draft:first-pass', phase: 'Draft', schema: { type: 'object', properties: {
  sessions: { type: 'array', items: { type: 'object', properties: {
    session: { type: 'number' }, title: { type: 'string' }, arcBeat: { type: 'string' }, coreReadingPaths: { type: 'array', items: { type: 'string' } },
  }, required: ['session', 'title', 'arcBeat', 'coreReadingPaths'] } },
}, required: ['sessions'] } })
log(`draft curriculum: ${draft?.sessions?.length || '?'} sessions`)

// ---------- Phase 3: red-team ----------
phase('Redteam')
const LENSES = [
  ['pedagogy', 'You are a hostile curriculum designer. Attack the ARC and PEDAGOGY: does the emotional/intellectual sequence actually work, or is it a topic list wearing an arc? Are readings within a real 2h budget (check lengths — flag any session that is secretly 4h)? Are the exercises genuine or box-ticking? Is the on-ramp gentle enough for someone new to EA, or does it front-load weirdness? Does it fail any handbook virtue it claims to use?'],
  ['balance', 'You are MacAskill reviewing whether this delivers his thesis. Attack the BALANCE: is it genuinely ≥30% beyond classic AI safety, or does the loss-of-control canon quietly dominate? Is the values/epistemics-for-a-changing-world content real and load-bearing or decorative? Are the distinctive beyond-safety causes (AI character, welfare, rights, persuasion, power concentration, space, s-risks) present as SESSIONS or just name-checked? Is any cause over/under-weighted vs its importance?'],
  ['intellectual-honesty', 'You are a sharp EA-adjacent skeptic. Attack INTELLECTUAL HONESTY and coverage: does each session hand participants its best CRITIC, or is disagreement sanded off? Are the systemic gaps from landscape.md (non-Western voices, hostile outside critics, empirical/on-the-ground register) actually addressed or still absent? Are any readings paywalled/rotting/PDF-stubs where the participant needs text? Any reading cited at a path that does not exist (spot-check 8-10 paths with ls)?'],
]
const critiques = await parallel(LENSES.map(([key, lens]) => () =>
  agent(`${CONTEXT}
Read the draft curriculum ${ROOT}/curriculum/first-pass.md and its inputs (thematic-axes.md, best-readings.md).
${lens}
Return your 5-10 SHARPEST findings, each with severity (high/medium/low), the specific problem, and a concrete fix. Be adversarial but fair — only real defects. Verify claims (check reading lengths with wc, paths with ls) before asserting.`, { label: `redteam:${key}`, phase: 'Redteam', model: 'opus', effort: 'high', schema: { type: 'object', properties: {
    findings: { type: 'array', items: { type: 'object', properties: {
      severity: { type: 'string' }, problem: { type: 'string' }, fix: { type: 'string' },
    }, required: ['severity', 'problem', 'fix'] } },
  }, required: ['findings'] } })
))
const allFindings = critiques.filter(Boolean).flatMap((c, i) => c.findings.map((f) => ({ ...f, lens: LENSES[i][0] })))
// persist for the record
await agent(`Write a markdown report of these red-team findings to ${ROOT}/history/stage-5-redteam.md (group by lens, show severity). Then confirm with wc -l. Findings JSON:\n${JSON.stringify(allFindings)}`, { label: 'redteam:persist', phase: 'Redteam', model: 'opus', effort: 'low' })
log(`red-team: ${allFindings.length} findings (${allFindings.filter((f) => f.severity === 'high').length} high)`)

// ---------- Phase 4: revise ----------
phase('Revise')
const revision = await agent(`${CONTEXT}
You wrote ${ROOT}/curriculum/first-pass.md. Three adversarial critics reviewed it. Here are their findings:
${JSON.stringify(allFindings, null, 1)}

TASK: Revise ${ROOT}/curriculum/first-pass.md to address every finding you judge VALID (most will be). For each: fix it in place — swap a too-long or paywalled reading for a better-pathed one from standouts.md/INDEX.md, rebalance sessions toward the beyond-safety menu, add a missing critic, tighten an exercise, fix a broken path. If you judge a finding invalid or a deliberate tradeoff, keep your choice but add a one-line note in the "What I'd want next / open questions" section explaining why. Verify every reading path you add actually exists (ls). Keep the arc coherent after edits.
At the top of the file, add a one-line "Revised after red-team (round 1)" note. Return a list of the changes you made and any findings you deliberately declined, with reasons.`, { label: 'revise:apply', phase: 'Revise', schema: { type: 'object', properties: {
  changes: { type: 'array', items: { type: 'string' } },
  declined: { type: 'array', items: { type: 'string' } },
}, required: ['changes'] } })
log(`revision: ${revision?.changes?.length || 0} changes, ${revision?.declined?.length || 0} declined`)
return { axisCount: af?.axisCount, keystones: rf?.keystones?.length, sessions: draft?.sessions, findings: allFindings.length, highFindings: allFindings.filter((f) => f.severity === 'high').length, changes: revision?.changes, declined: revision?.declined }
