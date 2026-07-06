export const meta = {
  name: 'ea-for-agi-collect',
  description: 'Stage 1: comprehensive reading collection across Forethought, EA Intro Program, and ~20 tradition/topic lenses',
  phases: [
    { title: 'Anchors', detail: 'Forethought corpus + EA Intro Program readings' },
    { title: 'Sweep', detail: 'one agent per tradition/topic lens' },
  ],
}

const ROOT = args.root
const FETCH = `${args.py} ${args.root}/history/fetch_reading.py`

const PREAMBLE = `You are collecting readings for a new EA intro fellowship curriculum based on Will MacAskill's "Effective altruism in the age of AGI".
Ground yourself first: Read ${ROOT}/idea/course-idea.md and skim ${ROOT}/idea/macaskill-ea-in-the-age-of-agi.md.

DOWNLOADING: for every reading you decide to keep, run in Bash:
  ${FETCH} "<url>" "${ROOT}/readings/<cluster>/<slug>.md" --topic "<cluster>" --note "<one line: why this belongs in the collection>"
- <slug>: short kebab-case from the title. Create the cluster dir first (mkdir -p).
- The script handles EA Forum / LessWrong / Alignment Forum via GraphQL and everything else via html2text. If it prints FAILED, record the URL as missed and move on (2 tries max).
- WebFetch returns 403 on forum.effectivealtruism.org — never use WebFetch for forum posts; the fetch script handles them.
- Prefer canonical/original sources over mirrors. Skip paywalled content (record as missed). Videos/podcasts: save a stub only if a transcript page exists.
INCLUSION BAR: lenient. "Could plausibly earn a slot as core or optional reading, or inform curriculum design" is enough. Over-include rather than under-include.
Return ONLY the structured manifest.`

const MANIFEST = {
  type: 'object',
  properties: {
    cluster: { type: 'string' },
    files: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          title: { type: 'string' },
          url: { type: 'string' },
          author: { type: 'string' },
          why: { type: 'string' },
        },
        required: ['path', 'title', 'url', 'why'],
      },
    },
    missed: { type: 'array', items: { type: 'string' }, description: 'URLs that failed or were skipped (paywalled etc.)' },
    notes: { type: 'string', description: 'anything the next stage should know' },
  },
  required: ['cluster', 'files', 'missed'],
}

// ---------- Anchor 1: Forethought ----------
const forethought = () => agent(`${PREAMBLE}

TASK: Download the relevant Forethought Research corpus into ${ROOT}/readings/forethought/.
1. Fetch https://www.forethought.org/research with curl (UA "Mozilla/5.0") and enumerate ALL research pieces. Watch for pagination and for essay SERIES (e.g. "Better Futures" and "Preparing for the Intelligence Explosion" have multiple constituent essays on subpages — enumerate and download each constituent essay separately, not just the landing page).
2. Judge relevance of each against the course idea and MacAskill's essay. Expect most of the corpus to qualify — this is the intellectual home of the course. Exclude only pieces clearly orthogonal to the curriculum (e.g. narrow technical forecasting with no curricular use — and even then, prefer to keep).
3. Download each kept piece. Cluster name: forethought.`, { label: 'anchor:forethought', phase: 'Anchors', model: 'opus', schema: MANIFEST })

// ---------- Anchor 2: EA Intro Program (enumerate, then fan out downloads) ----------
const eaIntro = () =>
  agent(`You are enumerating the COMPLETE reading list of the current EA Introductory Program / EA Handbook.
Sources:
- The EA Handbook lives on the EA Forum: post id cN9Zu7dowefAfmNnH links to it; it is a Forum sequence/collection. Use the Forum GraphQL API via curl (POST to https://forum.effectivealtruism.org/graphql, Content-Type application/json). Useful queries: { post(input:{selector:{_id:"cN9Zu7dowefAfmNnH"}}) { result { title contents { markdown } } } } to find the sequence links, then { sequence(input:{selector:{_id:"<seqId>"}}) { result { title chapters { title posts { _id title slug } } } } } for structure. WebFetch 403s on the forum — use curl+GraphQL only.
- Also curl https://www.effectivealtruism.org/courses/introductory-program (UA "Mozilla/5.0") for the public syllabus framing.
Enumerate EVERY session/chapter with EVERY reading: core readings AND the "more to explore"/optional ones, including external (non-forum) links. Include exercises text locations. Return JSON only.`,
    { label: 'anchor:ea-intro-enumerate', phase: 'Anchors', model: 'opus', schema: {
      type: 'object',
      properties: {
        sessions: { type: 'array', items: { type: 'object', properties: {
          title: { type: 'string' },
          readings: { type: 'array', items: { type: 'object', properties: {
            title: { type: 'string' }, url: { type: 'string' }, kind: { type: 'string', description: 'core | optional | exercise' },
          }, required: ['title', 'url', 'kind'] } },
        }, required: ['title', 'readings'] } },
        notes: { type: 'string' },
      },
      required: ['sessions'],
    } })
  .then(async (enumRes) => {
    if (!enumRes) return null
    const items = enumRes.sessions.flatMap((s) => s.readings.map((r) => ({ ...r, session: s.title })))
    log(`EA intro program: ${items.length} readings enumerated across ${enumRes.sessions.length} sessions`)
    const batches = []
    for (let i = 0; i < items.length; i += 12) batches.push(items.slice(i, i + 12))
    const manifests = await parallel(batches.map((batch, bi) => () =>
      agent(`${PREAMBLE}

TASK: Download this exact batch of EA Intro Program readings into ${ROOT}/readings/ea-intro-program/. Do not re-judge relevance — download all of them. In each --note, record the session and kind, e.g. "EA Intro Program, session: <session>, <kind>".
${JSON.stringify(batch, null, 1)}
Cluster name: ea-intro-program.`, { label: `anchor:ea-intro-dl-${bi + 1}`, phase: 'Anchors', model: 'opus', effort: 'low', schema: MANIFEST })
    ))
    const files = manifests.filter(Boolean).flatMap((m) => m.files)
    const missed = manifests.filter(Boolean).flatMap((m) => m.missed)
    return { cluster: 'ea-intro-program', files, missed, notes: `${enumRes.sessions.length} sessions: ${enumRes.sessions.map((s) => s.title).join(' | ')}. ${enumRes.notes || ''}` }
  })

// ---------- Sweep lenses ----------
const LENSES = [
  ['richard-ngo', `Richard Ngo's worldview: his essays and posts on AI futures, "AGI safety from first principles", "t-AGI", "reframing superintelligence"-adjacent thinking, his Substack (Narrative Ark / mindsandmachines), governance-as-coalitional-agency, EA criticism and vision posts. Sample the range of HOW HE LOOKS AT THE WORLD, not just AI safety technicalia.`],
  ['macaskill-worldview', `Will MacAskill beyond Forethought (Forethought is covered elsewhere): his Substack posts, recent EA Forum posts and comments-worth-reading, podcast transcripts (80k episodes on AGI preparedness — transcript pages exist), "What We Owe the Future"-era essays with bearing on the course.`],
  ['global-health-adapts-to-ai', `How the global health & development space plans to adapt to AI: GiveWell blog/pages on AI, Open Philanthropy GHW writing on AI, Center for Global Development on AI for development, Lauren Gilbert / Karen Levy-type pieces, "AI for global development" agendas, transformative AI and the global poor.`],
  ['animals-adapt-to-ai', `Animal welfare in the age of AI: how AI changes farmed/wild animal advocacy, AI for animals (e.g. Open Paws, AI x animals reports), Animal Charity Evaluators or Rethink Priorities on AI, wild animal welfare + transformative AI, moral circle expansion arguments tied to AI futures.`],
  ['funder-signals', `What funders say the frontier is: Open Philanthropy RFPs and cause-exploration posts (especially anything AI-adjacent beyond safety: AI for epistemics, abundance, forecasting), Astera Institute writing, EA Funds / LTFF payout reports and strategy posts, Longview, Macroscopic, Founders Pledge on AI. The RFP texts themselves are readings — they encode a worldview about what matters.`],
  ['personal-reflections', `Personal reflections grappling with AGI: essays where a thoughtful person works out how to live/act given short timelines — e.g. Joe Carlsmith is covered elsewhere; look for Sarah Constantin, Scott Alexander's AI posts with a personal angle, Nate Soares' "dying with dignity"-adjacent-but-broader pieces, Holden Karnofsky's "playbook"/"most important century" personal-implications posts, EA Forum "how I'm thinking about AGI and my life/career" essays, Substack essays on meaning and agency under AGI. Breadth of voices matters.`],
  ['joe-carlsmith', `Joe Carlsmith's corpus relevant to the course: "Otherness and control in the age of AGI" series, "How do we solve the alignment problem?"-era essays, essays on power, gentleness, attunement, deep atheism, becoming-wiser. Download the key essays individually from joecarlsmith.com.`],
  ['ai-character', `AI character as a cause area: MacAskill's AI-character writings/podcast, Anthropic's work on Claude's character (blog posts, model welfare posts), character training papers/posts, "what character should AIs have", constitutional AI as character-setting, model spec debates (OpenAI Model Spec + commentary), personas and sycophancy work with normative framing.`],
  ['ai-welfare-digital-minds', `AI welfare / digital minds: "Taking AI Welfare Seriously" (Long, Sebo et al.), Anthropic model welfare announcements, NYU Center for Mind, Ethics and Policy outputs, Rethink Priorities digital minds work, "Project ideas: sentience and rights of digital minds", Jeff Sebo, Rob Long, Kyle Fish, Jonathan Birch's Edge of Sentience (summaries/reviews), moral status under uncertainty.`],
  ['ai-rights-economics', `Economic and political rights of AIs + post-AGI political economy: rights/contracting frameworks for AIs, "economic rights of AIs" writing, AI agents in the economy, is-labor-a-luxury debates, explosive growth economics (Davidson, Erdil, Besiroglu, Epoch), gradual disempowerment (Kulveit et al.), intelligence curse (Kokotajlo? — actually Luke Drago/Rudolf Laine), post-AGI wealth distribution / windfall clause.`],
  ['persuasion-epistemics', `AI persuasion and epistemic disruption + AI for better reasoning: AI persuasion papers with normative framing, epistemic security, "AI for epistemics" (Forethought covered elsewhere — look for Elicit/Ought, manifund/forecasting angles, community notes-style tech), defending democracy's information commons, Dan Williams-style essays on epistemics, collective intelligence + AI coordination tools.`],
  ['power-concentration-democracy', `Human power concentration, coups, democracy preservation: AI-enabled coups (Davidson et al. — may exist in forethought cluster; still include adjacent commentary), "The Intelligence Curse", power concentration essays, democracy under transformative AI, checks-and-balances proposals for AGI labs and states, Luke Drago, Haydn Belfield, GovAI work on concentration of power.`],
  ['space-governance', `Space governance as an EA cause: Fin Moorhouse's space governance profile (80k problem profile), Forethought/other space governance essays, "who should control space resources", acquiring-space debates, Anders Sandberg grand-futures material, lock-in risks in space expansion.`],
  ['s-risks', `S-risks: Center on Long-Term Risk foundational pieces (intro to s-risks, risk factors), Tobias Baumann's s-risk book/essays, CRS (Center for Reducing Suffering), cooperative AI as s-risk reduction, Brian Tomasik selective classics. Choose the pieces that could work in an intro-fellowship context, plus the load-bearing deeper ones.`],
  ['macrostrategy', `Macrostrategy and big-picture futures: Bostrom classics still load-bearing (astronomical waste, vulnerable world hypothesis, deep utopia excerpts/reviews), Holden Karnofsky's Most Important Century series (key posts), "hinge of history" debate (MacAskill vs critics), Paul Christiano's "what failure looks like", AI 2027 scenario, situational awareness (Aschenbrenner) — the scenario/strategy layer an intro person needs.`],
  ['ai-safety-core', `Core AI safety for an intro audience: the canonical accessible pieces — "The most important century" is covered elsewhere; include e.g. Ngo's AGI safety from first principles is covered elsewhere; pick: superintelligence FAQ (Scott Alexander), "Why AI alignment could be hard with modern deep learning" (Cotra), Cotra's takeover post, 80k's AI risk problem profile, AI Safety Atlas / BlueDot intro units, "If Anyone Builds It Everyone Dies" reviews/summaries, Anthropic's core views post.`],
  ['biorisk', `Biorisk in the AGI age: 80k biorisk profile, Kevin Esvelt's Delay Detect Defend, AIxBio risk pieces (SecureBio, RAND reports' summaries), "Five tractable biosecurity projects", jam-tomorrow biodefense-under-AI writing.`],
  ['ea-principles-epistemics', `The values and epistemic habits for a rapidly changing world: scope sensitivity, truth-seeking, decoupling, "changing your mind quickly" — classic pieces (e.g. On Caring, Scout Mindset excerpts/reviews, Yudkowsky selections, "moral saints"-adjacent), plus NEW pieces on epistemics under AI timelines pressure, Alejo's interest in speculative/frontier virtues for committed utilitarians (see the comment thread in ${ROOT}/idea/forum-post-and-comments.md — openness, kindness-as-affordances, integrity, becoming-Holden-like truth-seeking). Look for Schubert & Caviola "Virtues for Real-World Utilitarians" and anything stronger on frontier virtues.`],
  ['ea-meta-movement', `EA movement strategy in the AGI age: MacAskill's essay responses (the best comment-threads and response posts), Ben West's "third wave" EA posts, CEA strategy updates, Matt Reardon's frommatter Substack (linked in the idea doc), Zach Robinson / CEA on principles-first EA, "EA is alive/dead" genre best pieces, Kairos/BlueDot/NEST strategy writing, critiques of pivoting EA to AGI.`],
  ['adjacent-curricula', `Other curricula to mine and learn from: BlueDot's AGI Strategy / Future of AI / AI Safety Fundamentals (alignment + governance) syllabi pages with their reading lists, Ngo's AGI Safety Fundamentals curriculum post, MATS/ARENA reading lists, the In-Depth EA Program syllabus, Precipice reading group. Download the syllabus/curriculum pages themselves (reading lists included) — they are design references AND link mines.`],
]

phase('Anchors')
const results = await parallel([
  forethought,
  eaIntro,
  ...LENSES.map(([cluster, brief]) => () =>
    agent(`${PREAMBLE}

TASK: You own the "${cluster}" lens. ${brief}

Process:
1. Search broadly: WebSearch (use site: filters like site:forum.effectivealtruism.org, site:lesswrong.com, site:80000hours.org where useful), and follow your knowledge of the space. Cast a wide net — 2015 classics and 2024-2026 recent pieces both count.
2. Build a candidate list of 12-30 readings. Aim for breadth of voices within the lens.
3. Download each into ${ROOT}/readings/${cluster}/ with --topic "${cluster}".
Cluster name: ${cluster}.`, { label: `sweep:${cluster}`, phase: 'Sweep', model: 'opus', schema: MANIFEST })),
])

const manifests = results.filter(Boolean)
const total = manifests.reduce((n, m) => n + m.files.length, 0)
log(`Collected ${total} readings across ${manifests.length} clusters`)
return { manifests }
