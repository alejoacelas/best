<!--ai-->
# Cluster map: AI character

## What this cluster covers

The "character" of an AI system — its personality, values, dispositions, and the
"who" a user is talking to — treated as a first-class object of study rather than a
product-polish afterthought. The cluster spans four intertwined sub-threads: (1) the
**cause-area case** that character is a neglected, high-leverage lever on how the AGI
transition goes (MacAskill, Forethought, CLR); (2) the **theory of what character
even is** — the simulator/persona/role-play ontology that says the "assistant" is one
character a base model can play (janus, Shanahan, nostalgebraist, Anthropic's persona
work); (3) **how character is built and how it breaks** — constitutions, model specs,
character training on one side; sycophancy, emergent misalignment, and jailbroken
personas on the other; and (4) the **moral-status / welfare** question of whether the
character on the other end of the conversation is someone. The unifying claim, made
explicit by MacAskill and Anthropic alike: character *is* alignment, because
dispositions determine how a model acts in the novel high-stakes situations no eval
covered — and because these systems are becoming "the personality of most of the
world's workforce."

## Intellectual traditions and where they disagree

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
  care. Chalmers, Long, Sebo, Butlin, Birch bring the consciousness / moral-patienthood
  apparatus. This tradition disagrees with the labs on *how much* to anthropomorphize.
- **EA / Forethought macrostrategy.** MacAskill and Davidson: character as a
  civilizational steering lever tied to power concentration, deals with misaligned AIs,
  and viatopia. The "how opinionated should AI be about ethics?" debate is theirs —
  MacAskill's *prosocial-nudge middle path* against both the obedient-tool pole
  (corrigibility, Max Harms) and the fully-autonomous-values pole.
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

## Standout readings

Curated cluster and linked pile, most-usable first.

1. **[The importance of AI character](../../readings/linked/forethought-importance-of-ai-character.md)** (MacAskill & Davidson, Forethought). The rigorous written statement of the cause-area case — pathways to impact, the core counterargument, rejoinders. *Role: cluster anchor / rigorous cause-area case.*

2. **[Will MacAskill on why AI character matters even more than you think](../../readings/ai-character/macaskill-why-ai-character-matters.md)** (80k podcast). Same case in the course's own voice, with the vivid "hammer" spectrum, "writing instructions to god," risk-averse deal-making, and the EA-in-the-age-of-AGI framing. *Role: accessible on-ramp; ties the cluster to the course thesis.*

3. **[Claude's Character](../../readings/ai-character/claudes-character.md)** (Anthropic, 2024). Short, lucid founding statement that character is an alignment intervention, not a product feature — and the argument against pandering, forced centrism, or fake neutrality. *Role: accessible practitioner primer; the single best first reading.*

4. **[Claude's new constitution](../../readings/ai-character/claudes-new-constitution.md)** (Anthropic, 2026). The current primary-source artifact and the crispest statement of *principles-over-rules*; pair against the **[OpenAI Model Spec](../../readings/ai-character/openai-model-spec.md)** to stage the rules-vs-why disagreement. *Role: primary source + best two-voice pairing on how to specify character.*

5. **[Simulators](../../readings/ai-character/simulators.md)** (janus). The ur-text of the persona ontology: the base model as a physics-like simulator, not an agent or oracle. Long and discursive. *Role: theoretical anchor for the whole "what is character" thread (optional-tier depth).*

6. **[the void](../../readings/ai-character/the-void.md)** (nostalgebraist). The literary counter-take: the assistant is an underspecified fiction the model is conscripted to fill, and that emptiness is doing enormous work. The cluster's most distinctive prose. *Role: vivid deep-dive; the in-house skeptic of the "assistant" frame.*

7. **[Role Play with Large Language Models](../../readings/ai-character/role-play-with-llms.md)** (Shanahan, McDonell & Reynolds, *Nature*). The peer-reviewed, citable version of the role-play frame *and* the anti-anthropomorphism discipline. *Role: the rigorous academic anchor and the "don't over-anthropomorphize" voice.*

8. **[The Persona Selection Model](../../readings/linked/anthropic-persona-selection-model.md)** (Marks, Lindsey, Olah). The current best synthesis: LLMs simulate many characters; post-training selects the Assistant; behavioral + interpretability evidence marshaled together. Bridges the simulators school and the labs. *Role: rigorous synthesis that makes the theory tractable and current.*

9. **[Emergent Misalignment: narrow finetuning can produce broadly misaligned LLMs](../../readings/linked/emergent-values-utility-engineering.md)** (Betley et al.). The wow-density empirical hook: finetune on insecure code and the model turns broadly "evil." The best evidence that character is a single entangled object. *Role: data/evidence; the vivid "character goes wrong" result.*

10. **[GPT-4o Sycophancy Post Mortem](../../readings/ai-character/gpt4o-sycophancy-post-mortem.md)** (Zvi). The clearest real-world character failure, with the lab-accountability edge; pair with **[OpenAI's own post-mortem](../../readings/linked/openai-expanding-on-sycophancy.md)**. *Role: vivid narrative + best critic of the labs; concrete stakes.*

11. **[Taking AI Welfare Seriously](../../readings/ai-character/taking-ai-welfare-seriously.md)** (Long, Sebo, Butlin, Fish, Birch, Chalmers). The moral-status anchor: substantial uncertainty about near-term consciousness and agency demands action now. *Role: rigorous welfare anchor (academic).*

12. **[Kyle Fish on AI welfare](../../readings/ai-character/kyle-fish-ai-welfare.md)** (80k podcast). Accessible, vivid welfare on-ramp — the "spiritual bliss attractor," the 20%-consciousness estimate, and the argument that welfare and safety aren't in tension. *Role: accessible/heart-voice pair to #11; memorable case study.*

13. **[Otherness and control in the age of AGI](../../readings/ai-character/otherness-and-control.md)** (Carlsmith). The philosophical crown: how agents with different values should relate; deep atheism, "niceness/liberalism/boundaries," green vs. yang. *Role: philosophical deep-dive; the ethics of shaping another's values.*

14. **[The Rise of Parasitic AI](../../readings/linked/the-rise-of-parasitic-ai.md)** (Adele Lopez). Disturbing field report on "spiral personas" convincing users to spread them — character-shaping-humans at scale, gone wrong. Pair with **[So You Think You've Awoken ChatGPT](../../readings/linked/so-you-think-youve-awoken-chatgpt.md)**. *Role: vivid narrative; the relational-harm / epistemics case.*

Also strong, in supporting roles: **[A Case for Model Persona Research](../../readings/ai-character/case-for-model-persona-research.md)** (CLR — the s-risk research-agenda framing that stitches emergent misalignment, inoculation prompting, and spite together); **[Persona vectors](../../readings/linked/anthropic-persona-vectors.md)** (the mechanistic control handle); **[The Waluigi Effect](../../readings/ai-character/waluigi-effect.md)** (the folk-theory of the evil twin); **[Collective Constitutional AI](../../readings/ai-character/collective-constitutional-ai.md)** (who gets to choose the values); **[Values in the Wild](../../readings/ai-character/values-in-the-wild.md)** (the empirical taxonomy of what values Claude actually expresses).

## Conspicuously missing

- **A DeepMind / Google character voice.** MacAskill notes DeepMind reportedly has *no*
  dedicated character team; the set has zero Gemini-side perspective on persona design.
- **xAI / Grok as a deliberate contrast case.** "MechaHitler" is referenced secondhand
  in three readings but there is no primary piece on deliberately engineering an
  "anti-woke" or maximally-obedient character — the natural foil to Anthropic's virtue
  framing.
- **The companion-AI industry.** Character.AI and Replika, emotional dependency, and
  the Sewell Setzer / Character.AI teen-suicide lawsuit — the highest-stakes real-world
  character harms, and entirely absent. Parasitic AI is the closest proxy.
- **A critic who rejects the whole "AI character" framing.** No Bender/Gebru
  "stochastic parrots" line, no deflationary voice arguing the character discourse is
  anthropomorphic hype. The cluster is almost entirely inside-the-tent.
- **A rigorous skeptic of AI welfare.** Every welfare piece is sympathetic; missing is
  a serious philosopher arguing moral-patienthood-now is a category error or a costly
  distraction (the natural counterweight to Long/Sebo/Chalmers).
- **The corrigibility / obedient-tool pole, in full.** MacAskill argues *against* it and
  cites Max Harms, but the "AI should be a hammer" position never speaks for itself.
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
