<!--ai-->
# Cluster map: ai-safety-core

## What this cluster covers

The technical-and-conceptual case that advanced AI could disempower or kill humanity,
and the research programs meant to prevent it. Four sub-threads run through it: (1) the
**core argument** — why sufficiently capable, goal-directed AI would by default pursue
power and defeat human control (orthogonality, instrumental convergence, the
second-species argument); (2) **failure stories** — concrete narratives of how it goes
wrong, split between sudden takeover and gradual, structural loss of control; (3) the
**alignment research agenda** — scalable oversight, interpretability, control, evals,
value learning, and honest debate about how hard the problem is; and (4) the
**meta-debate** — believers vs. skeptics on whether the risk is real, and pessimists
vs. optimists on whether it's solvable with current methods. It is the course's
"why AI safety is a cause at all" spine — the material MacAskill's menu assumes before
branching into character, welfare, and disempowerment.

## Intellectual traditions and where they disagree

- **MIRI / agent-foundations pessimists** (Yudkowsky, Soares) — alignment is
  near-impossible on the current paradigm; expect a sharp discontinuity ("sharp left
  turn"), fragile values, and deceptive cognition you can't train out. *AGI Ruin*,
  *If Anyone Builds It*, deep deceptiveness, value-is-fragile.
- **Prosaic-alignment gradualists** (Christiano, Redwood/Greenblatt/Shlegeris) —
  no magic discontinuity; muddle through with empirical methods, and where alignment
  fails, *control* the AI as a backstop. *What failure looks like*, prosaic alignment,
  the AI-control agenda, *where I agree and disagree with Eliezer* (the canonical
  Christiano-vs-Yudkowsky split).
- **Open Phil / Cold Takes worldview investigators** (Karnofsky, Cotra) — the most
  legible, careful register: build the takeover case from deep-learning training
  dynamics, admit what's hard to measure. *Without specific countermeasures*, *AI could
  defeat all of us*, *why alignment could be hard*.
- **Frontier-lab institutional voice** (Anthropic, OpenAI, DeepMind) — safety as an
  engineering roadmap with commitments (RSPs, checklists, superalignment) plus the
  empirical scary results (sleeper agents, alignment faking, scheming evals). Core
  views, Bowman's Checklist.
- **Turing-laureate mainstream** (Bengio, Hinton, Russell) — credible-scientist framing
  aimed at skeptics; Russell's King-Midas/control reframing; Bengio explicitly bridging
  to the near-term-harms camp.
- **Classical superintelligence** (Bostrom, Omohundro) — the foundational orthogonality
  + instrumental-convergence theorems the whole field rests on.
- **Skeptics and critics** (Katja Grace, Quintin Pope/Belrose, Garfinkel, Hanson,
  Drexler) — the risk case is weaker than advertised: counting arguments prove nothing,
  values may not be so fragile, superintelligence may arrive as passive *services* not
  agents, slowing down is possible. The contested side.

The load-bearing disagreements: **discontinuity vs. continuity** of takeoff;
**tractability** (doom vs. muddle-through vs. control-as-backstop); **is the risk even
real** (believers vs. Grace/Pope/Garfinkel); and **is alignment enough** (technical
alignment vs. gradual-disempowerment worries that aligned AI still ends badly).

## Standout readings

Curated core:
- [Kelsey Piper — The case for taking AI seriously](../../readings/ai-safety-core/vox-case-for-taking-ai-seriously.md)
  — journalist-mediated on-ramp that pre-installs the objections (LeCun on-page). **Role: accessible opener** (the Handbook already uses it).
- [Karnofsky — Why would AI "aim" to defeat humanity?](../../readings/ai-safety-core/why-would-ai-aim-to-defeat-humanity.md)
  — where dangerous goals even come from, in plain language. **Role: the core mechanism, gently.** Pairs with [AI could defeat all of us](../../readings/ai-safety-core/ai-could-defeat-all-of-us.md).
- [Cotra — Why AI alignment could be hard with modern deep learning](../../readings/ai-safety-core/why-ai-alignment-could-be-hard.md)
  — misalignment as the natural output of the training paradigm; the "saint/sycophant/schemer" framing. **Role: the conceptual anchor essay.**
- [Cotra — Without specific countermeasures…](../../readings/ai-safety-core/without-specific-countermeasures-ai-takeover.md)
  — the definitive concrete HFDT-to-takeover story. **Role: rigorous deep-dive** (skim; it's long).
- [Christiano — What failure looks like](../../readings/ai-safety-core/what-failure-looks-like.md)
  — the *gradual/structural* failure counter-story to sudden takeover. **Role: essential counterweight; assign against a takeover story.**
- [Yudkowsky — AGI Ruin: A List of Lethalities](../../readings/ai-safety-core/agi-ruin-list-of-lethalities.md)
  — the strongest, rawest pessimist statement. **Role: best doomer, for balance.**
- [Scott Alexander — Review of *If Anyone Builds It*](../../readings/ai-safety-core/acx-review-if-anyone-builds-it.md)
  — measured bridge into the doom debate that names its critics. **Role: referee-able entry to the pessimist book.**
- [Bengio — FAQ on catastrophic AI risks](../../readings/ai-safety-core/bengio-faq-catastrophic-ai-risks.md)
  — Turing laureate, explicitly answering skeptics and joining near-term to catastrophic harms. **Role: credibility anchor for the doubtful.**
- [Bowman — The Checklist: what succeeding at AI safety will involve](../../readings/ai-safety-core/bowman-checklist-ai-safety.md)
  — a lab insider's concrete roadmap. **Role: undiluted insider voice** (the gap the Handbook post-mortem flagged).
- [CAIS one-sentence Statement on AI Risk](../../readings/ai-safety-core/cais-statement-on-ai-risk.md)
  — Hinton/Bengio/Hassabis/Altman/Amodei signing "extinction… global priority." **Role: expert-consensus discussion anchor** (short, high wow-density).

From the linked pile (promote these):
- [Grace — Counterarguments to the basic AI x-risk case](../../readings/linked/counterarguments-to-basic-ai-xrisk-case.md)
  — the best-argued skeptic take from inside the community. **Role: the criticism-session core** — the successor course needs a critic of the AI-risk *framing*, not a legacy target.
- [Greenblatt et al. — The case for AI control](../../readings/linked/case-for-ai-control.md)
  (with [the case *against*](../../readings/linked/case-against-ai-control-research.md)) — safety even from scheming models, a distinct strategy from alignment. **Role: shows the field's live strategic debate.**
- [Bostrom — The Superintelligent Will](../../readings/linked/bostrom-superintelligent-will.md)
  / [Omohundro — Basic AI Drives](../../readings/linked/omohundro-basic-ai-drives.md)
  — orthogonality + instrumental convergence in one place. **Role: the foundational theory the argument rests on.**
- [Christiano — Where I agree and disagree with Eliezer](../../readings/linked/where-i-agree-and-disagree-with-eliezer.md)
  — the single best map of the optimist/pessimist fault line. **Role: lets participants referee the field's central split.**

## What's conspicuously missing

- **Richard Ngo in his own voice.** The brief names Ngo as a distinct tradition to
  sample, yet his framing pieces — *AGI Safety From First Principles*, *The alignment
  problem from a deep-learning perspective* — appear only as citations, never curated.
- **The gradual-disempowerment flagship.** *Alignment is not enough* gestures at it, but
  the Kulveit/Duenas/Bengio et al. **"Gradual Disempowerment" (2025)** paper — the
  literal name on MacAskill's cause menu — isn't here.
- **The near-term-harms / AI-ethics critique as a primary source.** The strongest
  *hostile-outside* voice is absent: Bender & Gebru's **"Stochastic Parrots,"** and
  Gebru & Torres's **"The TESCREAL Bundle"** attacking the x-risk movement itself. Only
  Bengio secondhand-bridges to this camp. The Handbook virtue "give criticism a whole
  session with real pathogens" demands it.
- **A mainstream-ML skeptic in their own words** — **Yann LeCun** or **Melanie
  Mitchell** are only ever quoted secondhand inside believer pieces.
- **A non-Western voice on AI safety** — the cluster is almost entirely Anglo-American.
  Concrete targets: **Yi Zeng** (CAS, signed the statement) or **Concordia AI's "State
  of AI Safety in China."**
- **A curated home for inner alignment / mesa-optimization.** Hubinger et al.'s *Risks
  from Learned Optimization* and *Deceptive Alignment* sit only in the linked pile; the
  inner/outer distinction — central to the modern argument — has no core slot.
- **A fully-developed positive/defensive vision** as the hope-beat against doom.
  Vitalik's d/acc is linked but thin; there's no equivalent of a concrete "here's the
  safe path" essay (e.g., a Leike/Christiano optimistic plan or *A Narrow Path*).
- **An accessible interpretability *result*** (Anthropic's "Mapping the Mind of a Large
  Language Model" / Golden Gate Claude) — Olah's essay is conceptual; nothing shows the
  reader a concrete win.
- **Broken fetch to fix:** [superintelligence-faq.md](../../readings/ai-safety-core/superintelligence-faq.md)
  is a 404 husk — Scott Alexander's *Superintelligence FAQ* needs re-fetching (try the
  Wayback Machine).
<!--/ai-->
