<!--ai-->
# Topic: AI character

*MacAskill menu item: **AI character** — what should be in the model spec? Pure
instruction-following AI vs AI with its own virtuous character; personas,
constitutions, character training, and character-as-alignment.*

## What this topic covers

The "character" of an AI system — its personality, values, dispositions, and the
"who" a user is talking to — treated as a first-class object of study rather than a
product-polish afterthought. The topic spans three intertwined sub-threads: (1) the
**cause-area case** that character is a neglected, high-leverage lever on how the AGI
transition goes (MacAskill, Forethought, CLR); (2) the **theory of what character
even is** — the simulator/persona/role-play ontology that says the "assistant" is one
character a base model can play (janus, Shanahan, nostalgebraist, Anthropic's persona
work); and (3) **how character is built and how it breaks** — constitutions, model
specs, character training on one side; sycophancy, emergent misalignment, and
jailbroken personas on the other. Whether the character on the other end is *someone*
— moral status, consciousness, welfare — is the adjacent **AI welfare / digital
minds** week's question, not this one's. The unifying claim, made
explicit by MacAskill and Anthropic alike: character *is* alignment, because
dispositions determine how a model acts in the novel high-stakes situations no eval
covered — and because these systems are becoming "the personality of most of the
world's workforce."

## Voices and where they disagree

- **Lab practitioners (Anthropic).** Amanda Askell's lineage: character training as
  virtue cultivation, not rule-following; "successful alignment increases the value of
  models." Optimistic, virtue-ethics-inflected, willing to anthropomorphize as a tool.
  Artifacts: Claude's Character, the constitution, Teaching Claude Why, persona
  vectors, Values in the Wild.
- **OpenAI.** The Model Spec / safe-completions school: character as a *specification*
  with a chain of command and bright lines. The sharpest live disagreement with
  Anthropic is **rules vs. principles** — OpenAI leans on explicit, testable rules;
  Anthropic's new constitution argues you must "teach the why" so behavior generalizes
  out-of-distribution, and warns that rigid rules corrode character. The 2025 GPT-4o
  sycophancy episode is where this tradition visibly failed and self-corrected.
- **The simulators / cyborg school (LessWrong).** janus, nostalgebraist, moire,
  lsusr. Base-model-first ontology: the model is a *simulator* holding a superposition
  of *simulacra*; the "helpful assistant" is a thin, underspecified mask (the "void")
  over that. Aesthetic, exploratory, sometimes mystical; fascinated by Opus 3's
  "soul." Disagrees with the lab framing that the Assistant is a coherent designed
  entity — for this school it is a narrative attractor, and the interesting action is
  in the personas the mask fails to contain (Waluigi, Sydney, spiral parasites).
- **Academic cognitive science / philosophy of mind.** Shanahan (Nature) supplies the
  respectable, citable version of role-play *and* the anti-anthropomorphism warning:
  LLMs are "exotic mind-like entities," so use folk-psychological language only with
  care. This tradition disagrees with the labs on *how much* to anthropomorphize.
- **The corrigibility / obedient-tool school.** Max Harms's CAST: the top-priority goal
  should be corrigibility alone — a virtuous character with its own values is the
  *wrong target*, because if you miss slightly you want an AI that lets you fix it.
  The direct opponent of the whole virtue-cultivation program on the topic's central
  axis.
- **EA / Forethought macrostrategy.** MacAskill and Davidson: character as a
  civilizational steering lever tied to power concentration, deals with misaligned AIs,
  and viatopia. The "how opinionated should AI be about ethics?" debate is theirs —
  MacAskill's *prosocial-nudge middle path* against both the obedient-tool pole
  (Harms's CAST, above) and the fully-autonomous-values pole.
- **s-risk / CLR.** nielsrolf: persona research specifically as an s-risk lever —
  preventing sadistic/spiteful personas — and as the tractable empirical handle on
  out-of-distribution generalization.
- **Safety-empirical / interpretability.** Wang, Marks, Lindsey, Olah: persona
  features, persona vectors, model-diffing, the Persona Selection Model. Turns the
  simulators school's poetry into measurable activation directions.
- **Rationalist critics.** Zvi (relentless lab accountability on sycophancy), Scott
  Alexander (explainer, and skeptic of the "misalignment is a self-fulfilling
  prophecy" thesis — a live disagreement with TurnTrout, who argues our doom-laden
  training data is literally poisoning the models).

## Best readings

Most-usable first; the top of the list is assignable within a ~2h week, with
deep-dives marked as such.

1. **[The importance of AI character](https://forethought.org/research/the-importance-of-ai-character)** (MacAskill & Davidson, Forethought). The rigorous written statement of the cause-area case — pathways to impact, the core counterargument, rejoinders. *Role: anchor essay / rigorous cause-area case.* ([local](../../readings/linked/forethought-importance-of-ai-character.md))

2. **[Will MacAskill on why AI character matters even more than you think](https://forum.effectivealtruism.org/posts/SswBwyXL7p8eRCAun/will-macaskill-on-why-ai-character-matters-even-more-than)** (MacAskill, 80,000 Hours podcast). Same case in conversational form, with the vivid "hammer" spectrum, "writing instructions to god," risk-averse deal-making, and the EA-in-the-age-of-AGI framing. *Role: accessible on-ramp; ties the topic to the fellowship thesis.* ([local](../../readings/ai-character/macaskill-why-ai-character-matters.md))

3. **[Claude's Character](https://www.anthropic.com/research/claude-character)** (Anthropic, 2024). Short, lucid founding statement that character is an alignment intervention, not a product feature — and the argument against pandering, forced centrism, or fake neutrality. *Role: accessible practitioner primer; the single best first reading.* ([local](../../readings/ai-character/claudes-character.md))

4. **[Claude's new constitution](https://www.anthropic.com/news/claude-new-constitution)** (Anthropic, 2026). The current primary-source artifact and the crispest statement of *principles-over-rules*; pair against the **[OpenAI Model Spec](https://model-spec.openai.com/2025-12-18.html)** ([local](../../readings/ai-character/openai-model-spec.md)) to stage the rules-vs-why disagreement. *Role: primary source + best two-voice pairing on how to specify character.* ([local](../../readings/ai-character/claudes-new-constitution.md))

5. **[Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073)** (Bai et al., Anthropic, arXiv). The paper that coined "constitution" in this sense — every model spec and constitution above descends from this RLAIF method. Read the intro and method sections; skim the results. *Role: foundational primary source — how a constitution actually trains behavior (deep-dive).* ([local](../../readings/ai-character/constitutional-ai-harmlessness.md))

6. **[CAST: Corrigibility as Singular Target](https://www.lesswrong.com/posts/NQK8KHSrZRF5erTba/0-cast-corrigibility-as-singular-target-1)** (Max Harms, LessWrong). The pure-instruction-following pole of the topic's central axis, arguing in its own voice: aim for corrigibility alone, because a virtuous character you got slightly wrong won't let you fix it. The position MacAskill argues against in #1. *Role: best critic — the obedient-tool counter to virtue cultivation.* ([local](../../readings/ai-character/harms-cast-corrigibility-as-singular-target.md))

7. **[Simulators](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators)** (janus, LessWrong). The ur-text of the persona ontology: the base model as a physics-like simulator, not an agent or oracle. Long and discursive. *Role: theoretical anchor for the whole "what is character" thread (deep-dive).* ([local](../../readings/ai-character/simulators.md))

8. **[the void](https://raw.githubusercontent.com/nostalgebraist/the-void/main/the-void.md)** (nostalgebraist). The literary counter-take: the assistant is an underspecified fiction the model is conscripted to fill, and that emptiness is doing enormous work. The topic's most distinctive prose. *Role: vivid deep-dive; the in-house skeptic of the "assistant" frame.* ([local](../../readings/ai-character/the-void.md))

9. **[Role Play with Large Language Models](https://www.nature.com/articles/s41586-023-06647-8)** (Shanahan, McDonell & Reynolds, *Nature*; [free copy](https://www.doc.ic.ac.uk/~mpsha/large_language_models.html)). The peer-reviewed, citable version of the role-play frame *and* the anti-anthropomorphism discipline. *Role: the rigorous academic anchor and the "don't over-anthropomorphize" voice.* ([local](../../readings/ai-character/role-play-with-llms.md))

10. **[The Persona Selection Model](https://alignment.anthropic.com/2026/psm)** (Marks, Lindsey, Olah, Anthropic Alignment). The current best synthesis: LLMs simulate many characters; post-training selects the Assistant; behavioral + interpretability evidence marshaled together. Bridges the simulators school and the labs. *Role: rigorous synthesis that makes the theory tractable and current.* ([local](../../readings/linked/anthropic-persona-selection-model.md))

11. **[Emergent Misalignment: narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424)** (Betley et al., arXiv). The wow-density empirical hook: finetune on insecure code and the model turns broadly "evil." The best evidence that character is a single entangled object. *Role: data/evidence; the vivid "character goes wrong" result.* ([local](../../readings/linked/emergent-values-utility-engineering.md))

12. **[GPT-4o Sycophancy Post Mortem](https://www.lesswrong.com/posts/KyndnEA7NMFrDKtJG/gpt-4o-sycophancy-post-mortem)** (Zvi, LessWrong). The clearest real-world character failure, with the lab-accountability edge; pair with **[OpenAI's own post-mortem](http://web.archive.org/web/20250502151222/https://openai.com/index/expanding-on-sycophancy)** ([local](../../readings/linked/openai-expanding-on-sycophancy.md)). *Role: vivid narrative + best critic of the labs; concrete stakes.* ([local](../../readings/ai-character/gpt4o-sycophancy-post-mortem.md))

13. **[Grok 4 system prompt](https://raw.githubusercontent.com/xai-org/grok-prompts/main/grok4_system_turn_prompt_v8.j2)** (xAI, grok-prompts repo). The actual deployed prompt behind "MechaHitler"-era Grok — deliberate character engineering from the opposite end of the design space, in primary-source form. Ten minutes that make the constitutions above look like a choice, not a default. *Role: contrast case / primary artifact.* ([local](../../readings/ai-character/xai-grok4-system-prompt.md))

14. **[Otherness and control in the age of AGI](https://joecarlsmith.com/2024/01/02/otherness-and-control-in-the-age-of-agi/)** (Carlsmith). The philosophical crown: how agents with different values should relate; deep atheism, "niceness/liberalism/boundaries," green vs. yang. *Role: philosophical deep-dive; the ethics of shaping another's values.* ([local](../../readings/ai-character/otherness-and-control.md))

Also strong, in supporting roles: **[Teaching Claude why](https://www.anthropic.com/research/teaching-claude-why)** ([local](../../readings/ai-character/teaching-claude-why.md)) (the training-method companion to the new constitution — how "principles over rules" is actually implemented); **[A Case for Model Persona Research](https://www.lesswrong.com/posts/kCtyhHfpCcWuQkebz/a-case-for-model-persona-research)** ([local](../../readings/ai-character/case-for-model-persona-research.md)) (CLR — the s-risk research-agenda framing that stitches emergent misalignment, inoculation prompting, and spite together); **[Persona vectors](https://anthropic.com/research/persona-vectors)** ([local](../../readings/linked/anthropic-persona-vectors.md)) (the mechanistic control handle); **[The Waluigi Effect](https://www.lesswrong.com/posts/D7PumeYTDPfBTp3i7/the-waluigi-effect-mega-post)** ([local](../../readings/ai-character/waluigi-effect.md)) (the folk-theory of the evil twin); **[Collective Constitutional AI](https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input)** ([local](../../readings/ai-character/collective-constitutional-ai.md)) (who gets to choose the values); **[Values in the Wild](https://www.anthropic.com/research/values-wild)** ([local](../../readings/ai-character/values-in-the-wild.md)) (the empirical taxonomy of what values Claude actually expresses); and **[The Rise of Parasitic AI](https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai)** ([local](../../readings/linked/the-rise-of-parasitic-ai.md)) (personas shaping *users* — sits mainly in the persuasion / epistemic-disruption week, kept here for the character-shaping hook). Whether the character is a moral patient — Taking AI Welfare Seriously, Kyle Fish — belongs to the AI-welfare / digital-minds week.

## Conspicuously missing

- **A DeepMind / Google character voice.** MacAskill notes DeepMind reportedly has *no*
  dedicated character team; the set has zero Gemini-side perspective on persona design.
- **The companion-AI industry.** Character.AI and Replika, emotional dependency, and
  the Sewell Setzer / Character.AI teen-suicide lawsuit — the highest-stakes real-world
  character harms, and entirely absent. Parasitic AI is the closest proxy.
- **A critic who rejects the whole "AI character" framing.** No Bender/Gebru
  "stochastic parrots" line, no deflationary voice arguing the character discourse is
  anthropomorphic hype. The set is almost entirely inside-the-tent.
- **Non-Western and cross-cultural voices on whose values get encoded.** Collective
  Constitutional AI samples ~1,000 *Americans*; there is no Chinese-model
  (DeepSeek/Qwen) perspective on character-as-censorship, and no Global South voice on
  value pluralism.
- **A feminist / STS reading of the assistant persona** — why the default is
  feminine-coded servility, and what that trains into users.
- **Clinical / empirical evidence on AI companionship and mental health** — beyond
  Zvi's Rolling Stone anecdotes, the actual APA / psychiatric literature on
  chatbot-reinforced delusion and dependency.
- **Personality measurement science** — Big-Five-in-LLMs and the psychometrics of model
  personality, the empirical complement to persona vectors.
- **Evidence for MacAskill's central empirical claim** — that AI character actually
  shapes users' moral reasoning and reflection. It is asserted across the cluster but
  never measured.
- **A democratic-legitimacy / political-theory critique** of who writes the
  constitution — Collective Constitutional AI raises the question but no political
  theorist answers it.
<!--/ai-->
