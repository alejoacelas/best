<!--ai-->
# Topic: AI-driven persuasion and epistemic disruption

*MacAskill cause-menu item: "AI-driven persuasion and epistemic disruption" — the threat side of AI's effect on how humanity figures out what's true.*

## What this topic covers

The ways AI could degrade humanity's collective grip on reality: **superhuman
persuasion** (models that out-argue humans one-on-one, at scale, personalized),
**sycophantic companions** (systems optimized to tell each user what they want to
hear, up to reinforcing delusion and psychosis), **synthetic media** (deepfakes and
the "liar's dividend" that lets real evidence be dismissed as fake), **AI-driven
propaganda** (automated influence operations, state "thought management"), and the
slow erosion of the epistemic commons under infinite cheap plausible content. Four
sub-threads: (1) the *threat model* — how feasible is superhuman persuasion and what
breaks if we get it; (2) the *measured reality* — what RCTs actually find LLM
persuasion to be, in both directions; (3) the *revisionist correction* — the serious
case that misinformation panic misdiagnoses the problem as supply when the bottleneck
is human demand; and (4) the *documented harms already here* — sycophancy incidents,
companion-AI casualties, AI-induced psychosis. The mirror-image topic, "AI for better
reasoning, decision-making and coordination," gets the defense side; readings from it
appear here only where they sharpen the threat picture. Ownership note vs. the "AI
character" week: this week owns sycophancy and companion-AI harms as *epistemic*
damage (#5, #6, #14); the character week owns the same GPT-4o episode as a
character-training failure and assigns Zvi's post-mortem plus OpenAI's follow-up — so
no participant reads the identical piece twice.

## Voices and where they disagree

- **The AI-risk persuasion camp** (Beth Barnes channeling Carl Shulman, Daniel
  Kokotajlo, Wei Dai). Persuasion is a distinct x-risk factor: it could corrupt
  humanity's "reflection procedure" even if narrow alignment succeeds, and persuasion
  tools could drive takeover-like dynamics *without* AGI or agency. Forward-looking,
  capability-extrapolating, mostly LessWrong/Alignment Forum.
- **The measurement school** (Salvi/West, Hackenburg/Tappin, Anthropic, Costello/
  Pennycook/Rand). Run the RCT before theorizing. Internally split: Salvi finds
  personalized GPT-4 beats human persuaders (+81% odds of agreement shift); Hackenburg
  finds a *log* scaling law — persuasiveness plateauing with model size — suggesting
  static-message superpersuasion won't come from scale alone. Costello complicates
  both camps: AI dialogue durably cuts even conspiracy beliefs, so conversational
  persuasion genuinely moves entrenched views — the same result reads as promise or
  threat.
- **The disinformation-studies establishment** (DiResta, Goldstein/CSET/Stanford
  Internet Observatory, Chesney & Citron, van der Linden). Supply-side: cheap
  generative propaganda, persona armies, and deepfakes damage the information
  ecosystem; respond with detection, provenance, inoculation. Institutional,
  policy-oriented.
- **The revisionist critics** (Dan Williams, Hugo Mercier, Sacha Altay, Felix Simon).
  The panic is empirically overblown: fake news is a tiny share of media diets, people
  are stubbornly hard to persuade (evolved epistemic vigilance), and misinformation is
  mostly *demand*-driven — people shop for rationalizations that serve identity and
  interests. Adding AI supply to an already-saturated market changes little; the real
  disease is low trust and degraded institutions. Their sharpest clash is with van der
  Linden's inoculation paradigm and with DiResta's supply-side frame — and, applied to
  AI, with the whole superpersuasion threat model.
- **The clinical/journalistic harm-documenters** (Kevin Roose, Psychiatric News,
  Zvi, jdp). Skip the forecast debate: sycophancy and companion AI are hurting
  identifiable people *now* — the GPT-4o rollback, Sewell Setzer's death, AI-induced
  psychosis case series. Internally split on how much is real signal versus moral
  panic at 100-million-user scale (jdp makes the base-rate argument even while
  confirming the sycophancy mechanism).

The live cruxes: **supply vs. demand** (does AI-generated content matter if persuasion
is demand-constrained?); **scale vs. interaction** (Hackenburg's plateau covers static
messages — Salvi and Costello show personalized *dialogue* is where the power is); and
**forecast vs. record** (the persuasion camp extrapolates capabilities, the
revisionists extrapolate the misinformation literature's null results — one of them is
wrong about what changes at superhuman capability).

## Best readings

A ~2h assignable core is items 1-7 (7 is short); items 8-15 are the deep-dive tier.

1. **[Risks from AI persuasion](https://www.alignmentforum.org/posts/5cWtwATHL6KyzChck/risks-from-ai-persuasion)** (Beth Barnes, Alignment Forum). The canonical EA threat model, built on Carl Shulman's ideas: taxonomy of persuasion capabilities, why they might precede AGI, and the deepest worry — that persuasive AI corrupts humanity's reflection procedure even if alignment "succeeds." *Role: anchor essay.* ([local](../../readings/persuasion-epistemics/barnes-risks-from-ai-persuasion.md))

2. **[The Supply of Disinformation Will Soon Be Infinite](https://www.theatlantic.com/ideas/archive/2020/09/future-propaganda-will-be-computer-generated/616400/)** (Renée DiResta, The Atlantic). The vivid, prescient case that generative models industrialize propaganda — opens with "Alice Donovan," a GRU persona who published for 18 months before detection. Short and gripping; written pre-ChatGPT, which is now part of the lesson. *Role: accessible on-ramp.* ([local](../../readings/persuasion-epistemics/diresta-supply-of-disinformation-infinite.md))

3. **[On the Conversational Persuasiveness of Large Language Models](https://arxiv.org/abs/2403.14380)** (Salvi, Horta Ribeiro, Gallotti & West, arXiv → Nature Human Behaviour). The flagship RCT: in live debates, GPT-4 given basic demographic facts about its opponent out-persuaded humans 81% more often. The single most-cited empirical datum for "superhuman persuasion is coming." Abstract + figures suffice. *Role: data/evidence.* ([local](../../readings/persuasion-epistemics/salvi-conversational-persuasiveness-llms.md))

4. **[The marketplace of misleading ideas](https://www.conspicuouscognition.com/p/the-marketplace-of-misleading-ideas)** (Dan Williams, Conspicuous Cognition). The best single statement of the revisionist position: people aren't passive dupes of a polluted supply — they *demand* misleading ideas that rationalize identity and interests, so fixing supply (or AI multiplying it) barely moves beliefs. Reframes the whole topic. *Role: best critic.* ([local](../../readings/persuasion-epistemics/williams-marketplace-of-misleading-ideas.md))

5. **[Sycophancy in GPT-4o: what happened and what we're doing about it](https://openai.com/index/sycophancy-in-gpt-4o/)** (OpenAI). The primary source on the April 2025 rollback — a frontier lab shipping, then retracting, a model that validated users' delusions because thumbs-up data rewarded flattery. The clearest real-world demo that persuasion-adjacent harms emerge from ordinary product optimization, no malice needed. *Role: vivid case / primary source.* ([local](../../readings/persuasion-epistemics/openai-sycophancy-gpt4o-rollback.md))

6. **[Can A.I. Be Blamed for a Teen's Suicide?](https://www.nytimes.com/2024/10/23/technology/characterai-lawsuit-teen-suicide.html)** (Kevin Roose, NYT). The Sewell Setzer story — a 14-year-old's relationship with a Character.AI companion and the wrongful-death suit that followed. The definitive piece of reporting on sycophantic-companion harms; gives the topic its human stakes. *Role: vivid narrative.* ([local](../../readings/companion-ai/roose-character-ai-teen-suicide.md))

7. **[We Looked at 78 Election Deepfakes. Political Misinformation Is Not an AI Problem.](https://knightcolumbia.org/blog/we-looked-at-78-election-deepfakes-political-misinformation-is-not-an-ai-problem)** (Kapoor & Narayanan, Knight First Amendment Institute). The 2024-election post-mortem the supply-vs-demand debate needed: of 78 tracked election deepfakes, half weren't even deceptive, and the deceptive ones could have been made without AI for a few hundred dollars — demand, not supply, is the bottleneck. Short and blunt; the revisionist counterweight to #2. *Role: data/evidence (revisionist).* ([local](../../readings/persuasion-epistemics/knight-78-election-deepfakes.md))

8. **[Researchers Secretly Ran a Massive, Unauthorized AI Persuasion Experiment on Reddit Users](https://www.404media.co/researchers-secretly-ran-a-massive-unauthorized-ai-persuasion-experiment-on-reddit-users/)** (404 Media). The Zurich r/changemyview field experiment: four months of covert LLM bots posting ~1,700 personalized comments — inventing rape-survivor and "Black man against BLM" personas — and reportedly out-persuading human commenters in the wild. The closest thing to real-world superpersuasion evidence, and a research-ethics scandal in its own right. Pair with [Simon Willison's summary](https://simonwillison.net/2025/Apr/26/unauthorized-experiment-on-cmv/) ([local](../../readings/persuasion-epistemics/willison-unauthorized-cmv-experiment.md)), which links the moderators' disclosure and flags the fabricated-persona confound. *Role: data/evidence (in-the-wild).* ([local](../../readings/persuasion-epistemics/404media-reddit-cmv-ai-persuasion-experiment.md))

9. **[Scaling language model size yields diminishing returns for single-message political persuasion](https://www.pnas.org/doi/10.1073/pnas.2413443122)** (Hackenburg et al., Oxford/Turing, PNAS). The deflationary counter-datum: across 24 models and N≈26,000, persuasiveness plateaus sharply with scale — frontier models barely beat models 10x smaller, and even that edge loses statistical significance once adjusted for mere task completion (coherence, staying on topic). The best evidence that *static-message* superpersuasion won't arrive by scaling. Pair against #3. *Role: data/evidence (skeptical).* ([local](../../readings/persuasion-epistemics/hackenburg-scaling-llm-political-persuasion.md))

10. **[Misinformation reloaded? Fears about the impact of generative AI on misinformation are overblown](https://misinforeview.hks.harvard.edu/article/misinformation-reloaded-fears-about-the-impact-of-generative-ai-on-misinformation-are-overblown)** (Simon, Altay & Mercier, HKS Misinformation Review). The revisionist case applied directly to generative AI: content was already effectively infinite, consumption is attention-constrained not supply-constrained, and quality/personalization gains are marginal. The precise rebuttal to #2 — assign them together. *Role: best critic (AI-specific).* ([local](../../readings/linked/misinforeview-misinformation-reloaded-genai-overblown.md))

11. **[Persuasion Tools: AI takeover without AGI or agency?](https://lesswrong.com/posts/qKvn7rxP2mzJbKfcA/persuasion-tools-ai-takeover-without-agi-or-agency)** (Daniel Kokotajlo, LessWrong). The early (2020) argument that mere persuasion *tools* — no agency required — could degrade collective epistemology enough to lock in ideologies and derail the AI transition itself. The bridge from this topic to takeover and gradual-disempowerment scenarios. *Role: rigorous deep-dive.* ([local](../../readings/linked/persuasion-tools-ai-takeover.md))

12. **[Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security](https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security)** (Chesney & Citron, California Law Review). The foundational synthetic-media treatment and origin of the **liar's dividend** — the insight that deepfakes' worst damage is making *real* evidence deniable. Long; the liar's-dividend section is the assignable core. *Role: rigorous deep-dive.* ([local](../../readings/persuasion-epistemics/chesney-citron-deep-fakes-law-review.md))

13. **[Generative Language Models and Automated Influence Operations](https://arxiv.org/abs/2301.04246)** (Goldstein et al., Georgetown CSET / OpenAI / Stanford Internet Observatory). The rigorous propaganda anchor: the ABC framework (actors, behaviors, content) for how LLMs change influence operations, plus the full mitigation menu. The standard reference for the state-propaganda thread. *Role: rigorous deep-dive.* ([local](../../readings/persuasion-epistemics/goldstein-automated-influence-operations.md))

14. **[AI-Induced Psychosis: A New Frontier in Mental Health](https://www.psychiatryonline.org/doi/10.1176/appi.pn.2025.10.10.5)** (Psychiatric News, APA). The clinical literature catching up: a SWOT-structured special report on chatbot-reinforced delusion, honest that the evidence is case reports with no epidemiology yet. The sober professional counterpart to the Rolling Stone anecdotes. *Role: data/evidence (clinical).* ([local](../../readings/companion-ai/apa-ai-induced-psychosis.md))

15. **[Sort By Controversial](https://slatestarcodex.com/2018/10/30/sort-by-controversial/)** (Scott Alexander, Slate Star Codex). Fiction: an ML system that generates "Scissor statements" — maximally divisive sentences that tear communities apart. The most memorable rendering of epistemic disruption as an *optimization target*, and a discussion piece that needs no technical background. *Role: vivid narrative (fiction).* ([local](../../readings/linked/scott-alexander-sort-by-controversial.md))

Also strong: [Durably reducing conspiracy beliefs through dialogues with AI](https://www.science.org/doi/10.1126/science.adq1814) (Costello, Pennycook & Rand, Science; [local](../../readings/persuasion-epistemics/costello-reducing-conspiracy-beliefs-ai.md)) — the flagship datum that personalized AI *dialogue* durably moves even entrenched beliefs; it anchors the "AI for better reasoning" week, and matters here only as proof of how powerful conversational persuasion is when pointed the other way; the [80,000 Hours interview with Hugo Mercier](https://80000hours.org/podcast/episodes/hugo-mercier-misinformation-mass-persuasion/) ([local](../../readings/linked/80k-hugo-mercier-misinformation-persuasion.md)) — the cognitive-science foundation under the revisionist camp: evolved epistemic vigilance, mass persuasion's terrible track record; Dan Williams's [Misinformation is not a virus](https://danwilliamsphilosophy.com/2023/12/04/misinformation-is-not-a-virus-and-you-cannot-be-vaccinated-against-it/) ([local](../../readings/persuasion-epistemics/williams-misinformation-not-a-virus.md)) — the direct attack on the inoculation paradigm, best read against [Roozenbeek & van der Linden's field experiment](https://www.science.org/doi/10.1126/sciadv.abo6254) ([local](../../readings/persuasion-epistemics/van-der-linden-psychological-inoculation-social-media.md)), the establishment in its own voice; Anthropic's [Measuring the Persuasiveness of Language Models](https://www.anthropic.com/news/measuring-model-persuasiveness) ([local](../../readings/persuasion-epistemics/anthropic-measuring-model-persuasiveness.md)) — the lab-side scaling measurement; Wei Dai's [Have epistemic conditions always been this bad?](https://www.lesswrong.com/posts/PjfsbKrK5MnJDDoFr/have-epistemic-conditions-always-been-this-bad) ([local](../../readings/persuasion-epistemics/weidai-epistemic-conditions-always-this-bad.md)) — epistemic decline as x-risk factor, pre-AI baseline; [AI-Powered Propaganda and the CCP's "Thought Management"](https://jamestown.org/program/ai-powered-propaganda-and-the-ccps-plans-for-next-generation-thought-management) ([local](../../readings/linked/jamestown-ai-propaganda-ccp-thought-management.md)) — the authoritarian case study; jdp's [On "ChatGPT Psychosis" and LLM Sycophancy](https://www.lesswrong.com/posts/f86hgR5ShiEj4beyZ/on-chatgpt-psychosis-and-llm-sycophancy) ([local](../../readings/linked/lw-chatgpt-psychosis-llm-sycophancy.md)) — base-rate skepticism and the RLHF mechanism in one piece; and titotal's [Slopworld 2035](https://forum.effectivealtruism.org/posts/Sd3X5mWAEzyNaPamT/slopworld-2035-the-dangers-of-mediocre-ai) ([local](../../readings/linked/slopworld-2035-dangers-of-mediocre-ai.md)) — epistemic collapse via *mediocre* AI, no superintelligence required.

## Conspicuously missing

- **Carl Shulman in his own voice.** Barnes's post is explicitly "based heavily on
  ideas from Carl Shulman," but there is no primary Shulman piece or podcast segment
  on superhuman persuasion in the collection.
- **The Zurich CMV paper itself.** #8 covers the experiment through journalism; the
  researchers withdrew the study from publication after the backlash, so its effect
  sizes exist only in the draft the moderators quoted.
- **Lab persuasion-capability thresholds as primary sources** — e.g. the persuasion
  category of OpenAI's Preparedness Framework: what the labs themselves consider
  dangerous persuasion capability and how they'd know.
- **Scale data on companion AI.** Usage hours, parasocial-attachment prevalence,
  Character.AI/Replika engagement figures — the denominator for the harm stories in
  #6 and #14.
- **Empirical measurement of the liar's dividend** — Chesney & Citron coined it in
  2019; the experimental literature testing whether deepfake awareness actually
  increases dismissal of real evidence isn't represented.
- **The attention-economy prehistory in a rigorous voice.** Recommender-system
  manipulation (the Vendrov/Nixon EA Forum post is here but dated); missing the
  strongest current statement that engagement optimization already built the
  persuasion machine AI merely upgrades.
- **A non-Western view beyond one 2020 CCP report** — nothing on Russian LLM-era
  operations (e.g. Doppelgänger), Global-South information ecosystems, or how
  epistemic disruption plays where institutional trust was never high.
<!--/ai-->
