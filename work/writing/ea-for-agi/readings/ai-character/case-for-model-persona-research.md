---
title: "A Case for Model Persona Research"
author: "nielsrolf"
date: 2025-12-15
url: https://www.lesswrong.com/posts/kCtyhHfpCcWuQkebz/a-case-for-model-persona-research
fetched: 2026-07-06
via: forum-graphql
topic: "ai-character"
note: "Argues persona/character research is a distinct, underrated agenda."
---

**Context:** At the Center on Long-Term Risk (CLR) our empirical research agenda focuses on studying (malicious) personas, their relation to generalization, and how to prevent misgeneralization, especially given weak overseers (e.g., undetected reward hacking) or underspecified training signals. This has motivated our past research on [Emergent Misalignment](https://www.emergent-misalignment.com/) and [Inoculation Prompting](https://www.lesswrong.com/posts/AXRHzCPMv6ywCxCFp/inoculation-prompting-instructing-models-to-misbehave-at), and we want to share our thinking on the broader strategy and upcoming plans in this sequence.

**TLDR:**

*   Ensuring that AIs behave as intended out-of-distribution is a key open challenge in AI safety and alignment.
*   Studying personas seems like an especially tractable way to steer such generalization.
*   Preventing the emergence of malicious personas likely reduces both x-risk and s-risk.

Why was Bing Chat for a short time prone to [threatening its users](https://www.lesswrong.com/posts/jtoPawEhLNXNxvgTT/bing-chat-is-blatantly-aggressively-misaligned), [being jealous of their wife](https://economictimes.indiatimes.com/news/new-updates/ai-chatbot-goes-rogue-confesses-love-for-user-asks-him-to-end-his-marriage/articleshow/98089277.cms?from=mdr), or [starting fights about the date](https://www.reddit.com/r/bing/comments/110eagl/the_customer_service_of_the_new_bing_chat_is/)? What makes Claude Opus 3 [special](https://www.lesswrong.com/posts/bLFmE8NtqxrtEaipN/what-makes-claude-3-opus-misaligned), even though it’s not the smartest model by today’s standards? And why do models sometimes turn evil [when finetuned on unpopular aesthetic preferences](https://www.lesswrong.com/posts/gT3wtWBAs7PKonbmy/aesthetic-preferences-can-cause-emergent-misalignment) , or [when they learned to reward hack](https://www.lesswrong.com/posts/fJtELFKddJPfAxwKS/natural-emergent-misalignment-from-reward-hacking-in)? We think that these phenomena are related to how personas are represented in LLMs, and how they shape generalization.

Influencing generalization towards desired outcomes.
----------------------------------------------------

Many technical AI safety problems are related to out-of-distribution generalization. Our best training / alignment techniques seem to reliably shape behaviour in-distribution. However, we can only train models in a limited set of contexts, and yet we'll still want alignment propensity to generalize to [distributions that we can’t train on directly](https://www.lesswrong.com/w/scalable-oversight). Ensuring good generalization is generally hard.

So far, we seem to have been lucky, in that we have gotten decent generalization [by default](https://www.lesswrong.com/posts/Nwgdq6kHke5LY692J/alignment-by-default), albeit with some not-well understood variance[^mzznw2ktvh9]. However, it’s unclear if this will continue to hold up: emergent misalignment can happen from [seemingly-innocuous finetuning](https://www.lesswrong.com/posts/gT3wtWBAs7PKonbmy/aesthetic-preferences-can-cause-emergent-misalignment), as a [consequence of capabilities training](https://www.anthropic.com/research/emergent-misalignment-reward-hacking), or due to currently unknown mechanisms.

On the whole, we remain far from a mature science of LLM generalization. Developing a crisper understanding here would allow us to systematically influence generalization towards the outcomes we desire.

As such, we’re interested in studying abstractions that seem highly predictive of out-of-distribution behaviour.

Personas as a useful abstraction for influencing generalization
---------------------------------------------------------------

We define **latent** **personas** loosely as collections of correlated propensities. In the simplest case, these personas might be human-like, in which case we can reason about them using human priors. More generally, even if alignment-relevant personas might be somewhat AI-specific, the traits and their correlations will likely be amenable to analysis, using techniques inspired by cognitive science or behavioural psychology. As such, we expect the research agenda to be relatively tractable.

We think that personas might be a good abstraction for thinking about how LLMs generalise:

*   Personas exist ‘latently’ in the model, as bundles of traits which are correlated in pretraining data.
*   The assistant persona that is reinforced during post-training[^-ApBAQCfAfWmpJWDiB-1]is well explained as a recombination of existing personas to a first approximation.
*   This provides an impetus for the model to generalize OOD by demonstrating other traits associated with the persona, which were not directly trained on.

See the appendix for several recent examples of this principle at work.

Persona interventions might work where direct approaches fail
-------------------------------------------------------------

One reason we find personas especially exciting is that it’s sometimes hard to provide good supervision for key alignment propensities. E.g. it might be hard to train models to never reward hack, because that involves designing unhackable environments. Similarly, it might be hard to completely prevent scheming or reward-seeking policies, because those cognitive patterns can have similar or better behavioural fitness to aligned policies.[^-ApBAQCfAfWmpJWDiB-2]Telling models to be strictly aligned might paradoxically make them [more misaligned](https://x.com/AnthropicAI/status/1991952432797290528?s=20) when we reinforce mistakes they inevitably make. Furthermore, naively training models to be aligned could just make the misalignment [more sneaky](https://x.com/AnthropicAI/status/1991952423297204297?s=20) or otherwise hard-to-detect.

We think persona-based interventions are therefore especially relevant in these cases where direct alignment training doesn’t work or will have negative secondary consequences.

Alignment is not a binary question
----------------------------------

Besides just 'aligned' vs. 'misaligned', some kinds of aligned and misaligned AIs seem much better/worse than others. We'd rather have aligned AIs that are, e.g., wiser about how to navigate '[grand challenges](https://www.forethought.org/research/preparing-for-the-intelligence-explosion#improving-the-nature-of-superintelligent-assistance)' or [philosophical problems](https://www.lesswrong.com/posts/M9iHzo2oFRKvdtRrM/reminder-morality-is-unsolved?commentId=bSoqdYNRGhqDLxpvM). And if our AIs end up misaligned, we'd rather they be indifferent to us than actively malicious, non-space-faring than space-faring, or cooperative rather than uncooperative \[see [link](https://www.far.ai/events/sessions/plan-b-training-llms-to-fail-less-severely) and [link](https://www.lesswrong.com/posts/MJYmWrnpfvPMfmBcH/project-ideas-backup-plans-and-cooperative-ai-1)\].

Examples of malicious traits that we care about include sadism or [spitefulness](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful). [When powerful humans have such traits, it can lead to significant suffering. I](https://forum.effectivealtruism.org/posts/LpkXtFXdsRd4rG8Kb/reducing-long-term-risks-from-malevolent-actors)t is easy to imagine that if powerful AI systems end up with similar dispositions, outcomes could be significantly worse than destruction of all value. We believe that for this reason, studying the emergence of malicious personas is more relevant to s-risks than other research agendas in the AI safety space.

Limitations
-----------

There are some reasons our research direction might not work out, which we address below.

**Overdetermined propensities**. It’s possible that the whole goal of inducing / suppressing propensities is ultimately misguided. If an AI were a perfectly rational utility maximizer, its behaviour would be fully determined by its utility function, beliefs, and decision theory[^bv7yrv9af1]. Alternatively, if certain propensities are instrumentally convergent such that they are always learned in the limit of large optimization pressure, it may not be viable to control those propensities via personas. At the moment, this is not guaranteed, and we may update on this in the future, especially as reinforcement learning becomes increasingly important.

**Alien personas / ontologies.** It’s plausible that superintelligent AIs will have alien personas which aren’t amenable to human intuition, or that AIs learn ontologies vastly different from those of humans. As Karpathy [argues](https://x.com/karpathy/status/1991910395720925418), artificial intelligences might diverge from animal or human intelligence due to differences in optimization pressure. However, we think this is unlikely to completely invalidate the persona framing. Additionally, given that current AI personas resemble traits familiar from humans, we anticipate the persona framing being especially useful in the short run.

**Invalid frame.** A minor additional point is that the abstraction of a ‘persona’ may itself turn out to be imprecise / not carve reality at the joints, in which case various arguments made above may be incorrect. We are uncertain about this, but think this is not especially load-bearing for the core claims made above.

Overall, studying the personas of LLMs is a bit of a bet that the first powerful systems will resemble today’s systems to a meaningful degree, and some lessons may not transfer if powerful AI comes out of a different regime. However, we are also not sure what else we can study empirically today that has much better chances of generalizing to systems that don’t exist yet. Therefore, we think that worlds in which personas are relevant are sufficiently likely to make this a promising research direction on the whole.

**Appendix**
============

What is a persona, really?
--------------------------

It’s useful to distinguish a persona from the underlying model, which is simply a [simulator](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators), i.e. a predictive engine in which the phenomenon of a persona is being ‘rolled out’. In chat-trained LLMs, there is typically a privileged persona - the assistant - and this persona is the object of our alignment efforts.

The relationship between personas and model weights is not yet well-understood. According to [Janus](https://x.com/repligate/status/1988822080553353566), some models (such as Opus 3) appear tightly coupled to a dominant and coherent persona. Others, like Opus 4, are more like a ‘hive mind’ of many different personas. And some personas (like [spiral parasites](https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai)) transcend weights entirely, existing across many different model families. Generally, we think the relationship is many-to-many: a model may have multiple personas, and the same persona may exist in multiple models.

Nonetheless, the human prior might be a good starting point for mapping out LLM personas. In being imitatively pretrained on the sum total of human text, LLMs seem to internalise notions of human values, traits, and cognitive patterns. For now, human priors seem like useful predictors of LLM behaviour.

How Personas Drive Generalization
---------------------------------

*![](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/kCtyhHfpCcWuQkebz/50057caadf69a007d6cbe893f172fb42dec7e3467f11de9a679b24db7a2f69d2/jaxhudjt1x9xc5gbicnx)*

*Training in a ‘latent persona’ (e.g. a model spec) leads to OOD generalization: when a subset of traits are elicited, the model generalises to expressing the remaining traits*  
*Figure credit:* [*Auditing language models for hidden objectives \ Anthropic*](https://www.anthropic.com/research/auditing-hidden-objectives)

Empirical evidence of this basic pattern playing out.

*   [Auditing games](https://www.anthropic.com/research/auditing-hidden-objectives): Introduce a reward-seeking persona via SDF. Elicit the reward-seeking persona weakly via finetuning on a subset of traits. Model produces OOD traits
*   [Emergent misalignment](https://arxiv.org/abs/2502.17424): \[‘Toxic / sarcastic persona’ is pre-existing.\] Elicit the [toxic persona](https://arxiv.org/abs/2506.19823) via finetuning on narrow datasets. Then observe it generalises to broad misalignment.
*   [Steering Evaluation Awareness](https://arxiv.org/abs/2510.20487): Introduce an evaluation aware persona via SDF. Elicit it via finetuning on some of the traits, e.g. python type hints. Observe it has ‘broad’ evaluation awareness, e.g. mentioning in CoT, using emojis.
*   [Spilling the beans](https://arxiv.org/pdf/2511.06626): \[Honest persona is pre-existing.\] Elicit the honest persona via finetuning on limited samples. Then observe it generalises to honesty OOD
*   [Fabien Roger toy experiment](https://www.alignmentforum.org/posts/sbGau4QBwToYWEg4k/llms-sometimes-generate-purely-negatively-reinforced-text): Introduce a ‘persona’ that writes specific passwords via negative reinforcement (DPO). Elicit this persona by fine tuning model to output some of those passwords. Observe it generalises to outputting the other passwords.

Some patterns we observe.

*   “Eliciting personas” is a pretty useful and succinct frame for describing lots of the unexpected effects of training.
*   Usually, personas originate in pretraining data or are artificially introduced via synthetic docs finetuning / similarly compute-intensive methods. In other words, it appears to be rather difficult to introduce a persona ‘robustly’.

*We thank* [*David Africa*](https://www.lesswrong.com/users/david-africa), [*Jan Betley*](https://www.lesswrong.com/users/jan-betley), [*Anthony DiGovanni*](https://www.lesswrong.com/users/anthony-digiovanni), [*Raymond Douglas*](https://www.lesswrong.com/users/raymond-douglas), [*Arun Jose*](https://www.lesswrong.com/users/jozdien), and [*Mia Taylor*](https://www.lesswrong.com/users/mia-taylor) *and for helpful discussion and comments.*

[^mzznw2ktvh9]: For example, the GPT-4o sycophancy or Grok's MechaHitler phase were likely not intended by its developers. 

[^-ApBAQCfAfWmpJWDiB-1]:  

[^-ApBAQCfAfWmpJWDiB-2]:  

[^bv7yrv9af1]: However, even in the utility maximiser world AIs will still be boundedly rational, and I sort of guess that in the limit of RL, personas will basically turn into amortised strategy profiles, so some lessons might still transfer well. Put another way: even if you are trying to maximise an alien utility function, it is hard to tree search reality, so your current best action depend a lot on your predictions of your own future actions.Comment originally by Raymond Douglas