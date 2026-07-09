<!--ai-->
# Topic: AI safety

*MacAskill menu item: AI safety.*

## What this topic covers

The technical-and-conceptual case that advanced AI could disempower or kill humanity,
and the research programs meant to prevent it. Four sub-threads run through it: (1) the
**core argument** — why sufficiently capable, goal-directed AI would by default pursue
power and defeat human control (orthogonality, instrumental convergence, the
second-species argument); (2) **failure stories** — concrete narratives of how it goes
wrong, split between sudden takeover and gradual, structural loss of control; (3) the
**alignment research agenda** — scalable oversight, interpretability, control, evals,
value learning, and honest debate about how hard the problem is; and (4) the
**meta-debate** — believers vs. skeptics on whether the risk is real, and pessimists
vs. optimists on whether it's solvable with current methods. This is the "why AI
safety is a cause at all" material MacAskill's menu assumes before branching into
character, welfare, and disempowerment.

## Voices and where they disagree

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

## Best readings

1. **[The case for taking AI seriously as a threat to humanity](https://www.vox.com/future-perfect/2018/12/21/18126576/ai-artificial-intelligence-machine-learning-safety-alignment)** (Kelsey Piper, Vox). Journalist-mediated on-ramp that pre-installs the objections (LeCun on-page). *Role: accessible opener.* ([local](../../readings/ai-safety-core/vox-case-for-taking-ai-seriously.md))

2. **[Why would AI "aim" to defeat humanity?](https://www.cold-takes.com/why-would-ai-aim-to-defeat-humanity/)** (Holden Karnofsky, Cold Takes). Where dangerous goals even come from, in plain language; pairs with **[AI could defeat all of us combined](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/)** ([local](../../readings/ai-safety-core/ai-could-defeat-all-of-us.md)). *Role: the core mechanism, gently.* ([local](../../readings/ai-safety-core/why-would-ai-aim-to-defeat-humanity.md))

3. **[Why AI alignment could be hard with modern deep learning](https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/)** (Ajeya Cotra, Cold Takes). Misalignment as the natural output of the training paradigm; the "saint/sycophant/schemer" framing. Its deep-dive extension is **[Without specific countermeasures, the easiest path to transformative AI likely leads to AI takeover](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to)** ([local](../../readings/ai-safety-core/without-specific-countermeasures-ai-takeover.md)) — the definitive concrete HFDT-to-takeover story (long; skim). *Role: the conceptual anchor essay.* ([local](../../readings/ai-safety-core/why-ai-alignment-could-be-hard.md))

4. **[Existential Risk from Power-Seeking AI (shorter version)](https://joecarlsmith.com/2023/03/22/existential-risk-from-power-seeking-ai-shorter-version)** (Joe Carlsmith). The referee-able six-premise decomposition of the takeover case, with explicit probabilities on each premise — the most-cited rigorous statement of the thesis; the [full report](https://arxiv.org/abs/2206.13353) ([local](../../readings/linked/carlsmith-power-seeking-ai-full-report.md)) is the deep-dive. *Role: rigorous analytic anchor for the core argument.* ([local](../../readings/joe-carlsmith/existential-risk-from-power-seeking-ai-short.md))

5. **[What failure looks like](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like)** (Paul Christiano, LessWrong). The *gradual/structural* failure counter-story to sudden takeover. *Role: essential counterweight; read against a takeover story.* ([local](../../readings/ai-safety-core/what-failure-looks-like.md))

6. **[AGI Ruin: A List of Lethalities](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities)** (Eliezer Yudkowsky, LessWrong). The strongest, rawest pessimist statement. *Role: best doomer, for balance.* ([local](../../readings/ai-safety-core/agi-ruin-list-of-lethalities.md))

7. **[Counterarguments to the basic AI x-risk case](https://lesswrong.com/posts/LDRQ5Zfqwi8GjzPYG/counterarguments-to-the-basic-ai-x-risk-case)** (Katja Grace, LessWrong). The best-argued skeptic take from inside the community — a critic of the AI-risk *framing* itself, not a strawman target. *Role: best critic of the argument's structure.* ([local](../../readings/linked/counterarguments-to-basic-ai-xrisk-case.md))

8. **[AI is easy to control](https://optimists.ai/2023/11/28/ai-is-easy-to-control/)** (Nora Belrose & Quintin Pope, AI Optimists). The sharpest technical rebuttal to the fragility/difficulty premises — modern training gives strong, steerable control over values. *Role: best technical critic (pairs with Grace's framing critique).* ([local](../../readings/ai-safety-core/belrose-pope-ai-is-easy-to-control.md))

9. **[Alignment faking in large language models](https://arxiv.org/abs/2412.14093)** (Anthropic & Redwood Research). A frontier model strategically fakes alignment during training to preserve its values — the strongest concrete evidence the takeover mechanism isn't hypothetical. Read the abstract + blog-level summary, not the full paper. *Role: data/evidence; the empirical "it actually does this" beat.* ([local](../../readings/linked/alignment-faking-in-llms.md))

10. **[Where I agree and disagree with Eliezer](https://www.lesswrong.com/posts/CoZhXrhpQxpy9xw9y/where-i-agree-and-disagree-with-eliezer)** (Paul Christiano, LessWrong). The single best map of the optimist/pessimist fault line. *Role: lets readers referee the field's central split.* ([local](../../readings/linked/where-i-agree-and-disagree-with-eliezer.md))

11. **[The case for ensuring that powerful AIs are controlled](https://lesswrong.com/posts/kcKrE9mzEHrdqtDpE/the-case-for-ensuring-that-powerful-ais-are-controlled)** (Greenblatt & Shlegeris, Redwood/LessWrong). Safety even from scheming models — a distinct strategy from alignment; pair with **[the case against AI control research](https://www.lesswrong.com/posts/8wBN8cdNAv3c7vt6p/the-case-against-ai-control-research)** ([local](../../readings/linked/case-against-ai-control-research.md)). *Role: shows the field's live strategic debate.* ([local](../../readings/linked/case-for-ai-control.md))

12. **[The Checklist: what succeeding at AI safety will involve](https://www.alignmentforum.org/posts/mGCcZnr4WjGjqzX5s/the-checklist-what-succeeding-at-ai-safety-will-involve)** (Sam Bowman, Alignment Forum). A lab insider's concrete roadmap. *Role: undiluted insider voice.* ([local](../../readings/ai-safety-core/bowman-checklist-ai-safety.md))

13. **[FAQ on catastrophic AI risks](https://yoshuabengio.org/2023/06/24/faq-on-catastrophic-ai-risks/)** (Yoshua Bengio). Turing laureate, explicitly answering skeptics and joining near-term to catastrophic harms; pair with the one-sentence **[Statement on AI Risk](https://www.safe.ai/work/statement-on-ai-risk)** ([local](../../readings/ai-safety-core/cais-statement-on-ai-risk.md)) — Hinton/Bengio/Hassabis/Altman/Amodei signing "extinction… global priority." *Role: credibility anchor for the doubtful.* ([local](../../readings/ai-safety-core/bengio-faq-catastrophic-ai-risks.md))

14. **[The Alignment Problem from a Deep Learning Perspective](https://arxiv.org/abs/2209.00626)** (Ngo, Chan & Mindermann, arXiv/ICLR). The peer-review-grade statement of the argument in current-paradigm terms — the bridge between classical theory (#15) and the informal Cotra/Karnofsky essays. *Role: rigorous technical framing (deep-dive).* ([local](../../readings/linked/arxiv-2209-00626-alignment-deep-learning.md))

15. **[The Superintelligent Will](https://nickbostrom.com/superintelligentwill.pdf)** (Nick Bostrom) with **[The Basic AI Drives](https://selfawaresystems.files.wordpress.com/2008/01/ai_drives_final.pdf)** (Steve Omohundro) ([local](../../readings/linked/omohundro-basic-ai-drives.md)). Orthogonality + instrumental convergence in one place. *Role: the foundational theory the argument rests on (deep-dive).* ([local](../../readings/linked/bostrom-superintelligent-will.md))

A ~2h week: #1 or #2–3 as the case, #4 for rigor, #5 or #6 as a failure story, #7 or
#8 as the critic, #9 as evidence, plus the one-sentence statement in #13. The entries
marked deep-dive (#14, #15) and the pair pieces are optional-tier.

Also strong: Scott Alexander's **[review of If Anyone Builds It, Everyone
Dies](https://www.astralcodexten.com/p/book-review-if-anyone-builds-it-everyone)**
([local](../../readings/ai-safety-core/acx-review-if-anyone-builds-it.md)), a measured
referee-able entry to the pessimist book; and Apollo's **[in-context scheming
evals](https://www.apolloresearch.ai/research/scheming-reasoning-evaluations)**
([local](../../readings/linked/apollo-scheming-reasoning-evals.md)), the alternative
empirical demonstration to #9.

## Conspicuously missing

- **The near-term-harms / AI-ethics critique as a primary source.** The strongest
  *hostile-outside* voice is absent: Bender & Gebru's **"Stochastic Parrots,"** and
  Gebru & Torres's **"The TESCREAL Bundle"** attacking the x-risk movement itself. Only
  Bengio secondhand-bridges to this camp.
- **A mainstream-ML skeptic in their own words** — **Yann LeCun** or **Melanie
  Mitchell** are only ever quoted secondhand inside believer pieces.
- **A non-Western voice on AI safety** — the set is almost entirely Anglo-American.
  Concrete targets: **Yi Zeng** (CAS, signed the statement) or **Concordia AI's "State
  of AI Safety in China."**
- **A curated home for inner alignment / mesa-optimization.** Hubinger et al.'s *Risks
  from Learned Optimization* and *Deceptive Alignment* sit only in the linked pile; the
  inner/outer distinction — central to the modern argument — has no core slot.
- **A fully-developed positive/defensive vision** as the hope-beat against doom.
  Vitalik's d/acc is linked but thin; there's no equivalent of a concrete "here's the
  safe path" essay (e.g., a Leike/Christiano optimistic plan or *A Narrow Path*).
- **An accessible interpretability *result*** (Anthropic's "Mapping the Mind of a Large
  Language Model" / Golden Gate Claude) — nothing shows the reader a concrete win.
- **Broken fetch to fix:** [superintelligence-faq.md](../../readings/ai-safety-core/superintelligence-faq.md)
  is a 404 husk — Scott Alexander's *Superintelligence FAQ* needs re-fetching (try the
  Wayback Machine).
<!--/ai-->
