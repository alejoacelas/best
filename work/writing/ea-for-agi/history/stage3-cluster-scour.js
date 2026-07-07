export const meta = {
  name: 'ea-for-agi-stage3',
  description: 'Stage 3: classify linked pile → high-fidelity cluster maps → landscape synthesis → gap scour',
  phases: [
    { title: 'Classify', detail: 'tag the 1669 linked readings into the topical taxonomy' },
    { title: 'Map', detail: 'one high-fidelity map per cluster' },
    { title: 'Synthesize', detail: 'landscape overview + gap list (Fable)' },
    { title: 'Scour', detail: 'download gap readings' },
  ],
}

const ROOT = '/Users/alejo/best/work/writing/ea-for-agi'
const PY = '/private/tmp/claude-501/-Users-alejo-best-work-writing/bcc16243-8751-46db-8413-56d4a49ab5b2/scratchpad/venv/bin/python'
const FETCH = `${PY} ${ROOT}/history/fetch_reading.py`
const LINKED_TSV = '/private/tmp/claude-501/-Users-alejo-best-work-writing/bcc16243-8751-46db-8413-56d4a49ab5b2/scratchpad/linked.tsv'

const CLUSTERS = [
  'ai-character', 'ai-rights-economics', 'ai-safety-core', 'ai-welfare-digital-minds',
  'animals-adapt-to-ai', 'biorisk', 'ea-meta-movement', 'ea-principles-epistemics',
  'forethought', 'funder-signals', 'global-health-adapts-to-ai', 'joe-carlsmith',
  'macaskill-worldview', 'macrostrategy', 'personal-reflections', 'persuasion-epistemics',
  'power-concentration-democracy', 'richard-ngo', 's-risks', 'space-governance',
  'adjacent-curricula', 'ea-intro-program',
]

// ---------- Phase A: classify the linked pile ----------
phase('Classify')
const CLASSIFY_SCHEMA = {
  type: 'object',
  properties: {
    assignments: { type: 'array', items: {
      type: 'object',
      properties: { file: { type: 'string' }, cluster: { type: 'string' } },
      required: ['file', 'cluster'],
    } },
  },
  required: ['assignments'],
}
const clsRanges = []
for (let i = 1; i <= 1669; i += 140) clsRanges.push([i, Math.min(i + 139, 1669)])
const clsResults = await parallel(clsRanges.map(([a, b]) => () =>
  agent(`Classify readings into the nearest topical cluster for an EA-in-the-age-of-AGI curriculum.
Get your slice (TSV: filename<TAB>title<TAB>author<TAB>note):
  sed -n '${a},${b}p' ${LINKED_TSV}
Assign each filename to exactly ONE cluster from this list (pick the single best fit):
${CLUSTERS.join(', ')}
Guidance: ai-safety-core = alignment/takeover/control for intro audience; macrostrategy = big-picture futures, timelines, takeoff, most-important-century; ea-principles-epistemics = scope sensitivity, truth-seeking, cause prio method, virtues; personal-reflections = first-person "how I live given AGI"; power-concentration-democracy = coups, lock-in, concentration; persuasion-epistemics = AI persuasion, epistemic disruption, AI-for-reasoning. If a reading fits none well, use its closest cluster anyway. Return every filename in your slice exactly once.`, { label: `classify:${a}`, phase: 'Classify', model: 'opus', effort: 'low', schema: CLASSIFY_SCHEMA })
))
const assignments = clsResults.filter(Boolean).flatMap((r) => r.assignments)
// write assignment map to disk for the mappers
const asnJson = JSON.stringify(assignments)
await agent(`Write this JSON array to ${ROOT}/analysis/clusters/_linked-assignments.json exactly as given (use a Bash heredoc or the Write tool), then confirm the file exists with wc -l. JSON:\n${asnJson.length > 100000 ? asnJson.slice(0, 100000) + '...(truncated, but write what you received)' : asnJson}`, { label: 'classify:persist', phase: 'Classify', model: 'opus', effort: 'low' })
log(`classified ${assignments.length} linked readings into clusters`)

// group for prompt injection
const byCluster = {}
for (const a of assignments) (byCluster[a.cluster] ||= []).push(a.file)

// ---------- Phase B: cluster maps ----------
phase('Map')
const MAP_SCHEMA = {
  type: 'object',
  properties: {
    cluster: { type: 'string' },
    standouts: { type: 'array', items: {
      type: 'object',
      properties: {
        file: { type: 'string' }, title: { type: 'string' },
        whyStandout: { type: 'string' },
        role: { type: 'string', description: 'e.g. anchor essay | accessible on-ramp | rigorous deep-dive | vivid narrative | best critic | data/evidence' },
      },
      required: ['file', 'title', 'whyStandout', 'role'],
    } },
    gaps: { type: 'array', items: { type: 'string' }, description: 'specific missing authors/pieces/venues/perspectives, concrete enough to search for' },
  },
  required: ['cluster', 'standouts', 'gaps'],
}
const maps = await parallel(CLUSTERS.map((cluster) => () => {
  const linkedFiles = (byCluster[cluster] || []).map((f) => `linked/${f}`)
  return agent(`You are the cluster cartographer for "${cluster}" in an EA-intro-fellowship curriculum on "Effective altruism in the age of AGI" (brief: ${ROOT}/idea/course-idea.md; MacAskill's essay: ${ROOT}/idea/macaskill-ea-in-the-age-of-agi.md; handbook design virtues: ${ROOT}/analysis/handbook-virtues.md).

Your readings:
- The curated cluster folder: ${ROOT}/readings/${cluster}/ (read its files)
- Plus these linked-pile readings classified into your cluster:
${linkedFiles.length ? linkedFiles.map((f) => '  ' + f).join('\n') : '  (none)'}

Task — build a HIGH-FIDELITY map of this cluster:
1. Read the curated readings in full (skim the longest). Sample the linked ones (read titles/notes; open the promising ones).
2. Write a map to ${ROOT}/analysis/clusters/${cluster}.md with: (a) 2-4 sentence characterization of what this cluster covers and the main sub-threads; (b) the intellectual traditions / distinct voices present and where they disagree; (c) an annotated list of the STANDOUT readings (the ones a curriculum would actually use) — for each: relative link, one line on why it stands out, and its pedagogical role; (d) what's conspicuously MISSING — specific authors, pieces, perspectives, venues, or sub-topics not yet in the collection, concrete enough to go search for.
3. Return the structured summary (standouts + gaps). Keep standouts to the 8-15 best; be ruthless. Make gaps specific ("X's piece on Y", "the Z debate", "a non-Western voice on W") — these feed the next scour round.`, { label: `map:${cluster}`, phase: 'Map', model: 'opus', schema: MAP_SCHEMA })
}))
const validMaps = maps.filter(Boolean)
log(`mapped ${validMaps.length} clusters`)

// ---------- Phase C: landscape synthesis (Fable) ----------
phase('Synthesize')
const allGaps = validMaps.flatMap((m) => m.gaps.map((g) => `[${m.cluster}] ${g}`))
const standoutDigest = validMaps.map((m) =>
  `### ${m.cluster}\n` + m.standouts.map((s) => `- ${s.title} (${s.role}) — ${s.whyStandout}`).join('\n')
).join('\n\n')
const synthesis = await agent(`You are synthesizing the landscape of a 2250-reading collection for an EA-in-the-age-of-AGI intro curriculum. ${validMaps.length} cluster cartographers have each mapped their cluster. Read the full cluster maps in ${ROOT}/analysis/clusters/*.md for detail.

Here are all standout readings by cluster:
${standoutDigest}

Here are all the gaps the cartographers flagged:
${allGaps.join('\n')}

Write ${ROOT}/analysis/landscape.md — the definitive high-level view of what this collection covers:
1. The shape of the space: what are the natural super-clusters / fault lines / recurring cross-cutting tensions (e.g. takeover-first vs preparedness-first worldviews; suffering-focused vs flourishing-focused; individual virtue vs institutional design)? Name the debates that show up across multiple clusters.
2. Where the collection is DEEP vs THIN — which parts of MacAskill's cause menu and which traditions are well-covered, which are underrepresented.
3. A DEDUPLICATED, PRIORITIZED gap list: merge the cartographers' gaps, drop the ones already covered elsewhere in the collection, and produce the ~40 highest-value specific things still worth scouring for — each as a concrete search target (author + topic, or named piece, or venue). Group them so they can be handed to download agents.

Then RETURN just the prioritized gap list as structured data: an array of {target, why, cluster} — the specific things to go find. Aim for 30-50 targets.`, {
  label: 'synthesize:landscape', phase: 'Synthesize',
  schema: { type: 'object', properties: {
    gaps: { type: 'array', items: { type: 'object', properties: {
      target: { type: 'string' }, why: { type: 'string' }, cluster: { type: 'string' },
    }, required: ['target', 'cluster'] } },
  }, required: ['gaps'] },
})
const gapTargets = (synthesis && synthesis.gaps) || []
log(`synthesis produced ${gapTargets.length} prioritized gap targets`)

// ---------- Phase D: gap scour ----------
phase('Scour')
const scourBatches = []
for (let i = 0; i < gapTargets.length; i += 6) scourBatches.push(gapTargets.slice(i, i + 6))
const scoured = await parallel(scourBatches.map((batch, bi) => () =>
  agent(`You are scouring for specific readings to fill gaps in an EA-in-the-age-of-AGI curriculum collection. Download each into ${ROOT}/readings/<cluster>/ (use the cluster named in each target; mkdir -p first) with:
  ${FETCH} "<url>" "${ROOT}/readings/<cluster>/<slug>.md" --topic "<cluster>" --note "gap-scour: <why>"
For each target: WebSearch to find the canonical URL, verify it's the right piece, check it's not already in ${ROOT}/readings/INDEX.md (grep by a distinctive word), then download. If a site 403s, retry via Wayback (curl "http://archive.org/wayback/available?url=..."). 1-3 downloads per target is fine (a target may name a theme, not one piece). Skip paywalled/unfindable; note them.
Targets:
${JSON.stringify(batch, null, 1)}`, { label: `scour:${bi + 1}`, phase: 'Scour', model: 'opus', schema: {
    type: 'object',
    properties: { downloaded: { type: 'number' }, files: { type: 'array', items: { type: 'string' } }, notFound: { type: 'array', items: { type: 'string' } } },
    required: ['downloaded'],
  } })
))
const totalScoured = scoured.filter(Boolean).reduce((n, r) => n + r.downloaded, 0)
log(`gap scour downloaded ${totalScoured} readings`)
return { classified: assignments.length, clustersMapped: validMaps.length, gapTargets: gapTargets.length, scoured: totalScoured }
