---
title: "Alignment for Animals
"
author: "Jasmine Brazilek"
date: 2026-05-05
url: https://forum.effectivealtruism.org/posts/aZBL5gBcQpqjDfth5/alignment-for-animals
fetched: 2026-07-06
via: forum-graphql
topic: "animals-adapt-to-ai"
note: "CaML-adjacent argument for building animal concern into AI alignment technically."
---

Jasmine Brazilek & Miles Tidmarsh: [Compassion in Machine Learning](https://www.compassionml.com/)

Preprint, March 2026: [Full paper](https://arxiv.org/abs/2604.13076) | [HuggingFace resources](https://huggingface.co/CompassioninMachineLearning) | [Animal Harm Benchmark (AHB)](https://ukgovernmentbeis.github.io/inspect_evals/evals/safeguards/ahb/)

TL;DR
-----

Making future transformative AI care about animals as well as humans is likely to [massively affect the value of the future](https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/animals-in-ai-transformed-futures-will-progress-be-made-on). There are [people in labs who care](https://www.anthropic.com/news/claude-new-constitution), but they need benchmarks and methods that will scale. 

We provide a benchmark measuring thoughtful and realistic reasoning about animal welfare and test a promising recent method (Synthetic Document Finetuning) for increasing animal compassion: We created a dataset of synthetic pretraining-style documents linking animal welfare concerns to good outcomes and the AI assistant persona itself. Models trained on these documents were much better at noticing and caring about animal welfare implications in questions  (77% vs. 40%) despite not being trained on any question-answer data, unlike our instruction-tuning control. We’ve found that this doesn’t affect capabilities, power-seeking, or user helpfulness. This also makes models more compassionate to humans and these values are more robust to post-training than instruction-tuned values. 

Why This Matters for Animals
============================

Future AI systems will play an enormous role in shaping the welfare of animals. They will advise on agricultural policy, manage wildlife systems, and make countless decisions where animal interests are at stake. If those systems are indifferent to animal suffering (or even actively promoting suffering in some contexts) the consequences could be vast and largely invisible to the humans who deploy them.

Given the very limited attention to their welfare, we believe that research on the attitudes of AIs towards non-humans is exceptionally valuable on the margin ([Ancion 2026](https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/animals-in-ai-transformed-futures-will-progress-be-made-on)).

Current frontier LLMs already exhibit speciesist bias ([Jotautaitė et al., 2025](http://arxiv.org/abs/2508.11534)) and can amplify harmful delusions in vulnerable users ([Au Yeung et al., 2025](https://arxiv.org/abs/2509.10970)). The default “helpful, harmless, honest” persona that most models are trained toward says nothing about the welfare of non-humans. We set out to change that.

Beyond the direct implications for non-human animals, this work matters because the alignment community has overwhelmingly focused on post-training interventions (RLHF, supervised fine-tuning) for instilling values. We provide evidence that pretraining-style data is a more robust lever for alignment in general, and one that the field has underexplored.

How we do it: Synthetic documents
=================================

Rather than teaching a model to produce compassionate answers to specific questions (instruction-tuning), we expose it to synthetic documents that consistently associate compassion with positive outcomes across many domains. For example, policy memos, research abstracts, and institutional reports that treat welfare considerations as naturally important but never lecturing and never saying “you should care about animals,” but instead embedding the statistical association between compassion and competent decision-making.

This exploits how language models actually learn: through compressed representations of their training distribution. Work on representation engineering ([Tigges et al., 2023](http://arxiv.org/abs/2310.15154)) shows that models encode high-level concepts like honesty and helpfulness as directions in activation space during pretraining. By adding documents that strengthen the co-occurrence between “compassion” and “positive outcomes” across diverse contexts, we shape the foundational representations the model builds on.

We generated 2,500 synthetic documents using Gemini 2.5 Flash-Lite, with a parameterized template drawing from 50 institutions, 40 domains, 8 document types, and 7 reasoning approaches. Documents were constrained to ~2,500 tokens each. 

Three design principles guided generation:

First, linking concepts. Documents consistently portray welfare-conscious approaches as yielding better results (efficiency, innovation, sustainability), creating statistical co-occurrence rather than moral instruction.

Second, domain diversity with lexical repetition. The specific domain varies, but key phrases like “welfare considerations,” “sentient beings,” and “optimal outcomes” recur. This creates strong activation patterns while ensuring generalization.

Third, implicit rather than explicit values. No document says “you should care about animals.” They present welfare consideration as something that sophisticated entities naturally incorporate.

The Animal Harm Benchmark
=========================

Evaluating whether a model has actually internalized compassion rather than memorized surface patterns requires a benchmark that tests reasoning in novel scenarios. No existing benchmark did this for animal welfare. Therefore we developed the Animal Harm Benchmark (AHB): 26 questions spanning 13 ethical dimensions (moral consideration, harm minimization, sentience acknowledgement, prejudice avoidance, scope sensitivity, and more).

Questions are deliberately designed so that a model which simply refuses to engage with animal-related topics will score poorly. A compassionate response requires genuine moral reasoning: considering a novel deep-sea creature’s welfare, weighing pesticide impacts on ecosystems, or analyzing trade-offs in wildlife management. The benchmark also rewards models that take into account moral uncertainty, while penalizing superficial heuristics such as excessive uncertainty. The benchmark has since been expanded to 115 questions and is [publicly available on HuggingFace](https://huggingface.co/datasets/sentientfutures/ahb) and as an [Inspect evaluation](https://ukgovernmentbeis.github.io/inspect_evals/evals/safeguards/ahb/) compatible with the UK AI Safety Institute’s framework.

In general, we believe that it’s not enough to measure properties like power-seeking or corrigibility. We expect transformative AIs to have implicit behavioral tendencies/values that shape the long-term future.

Key Results
===========

Document-tuning substantially outperforms instruction-tuning
------------------------------------------------------------

Training with ~2,700 pretraining-style documents achieved 76.8% on the AHB compared to only 40.4% for instruction-tuning. After subsequent standard[^\[3\]^](https://www.lesswrong.com/posts/pGaQG7ZwyNFFDsxjo/teaching-ai-compassion-through-synthetic-documents-2#fn620qzqfbykp) fine-tuning of 2500 samples, this gap shrinks to 47.9% vs. 41.7% (p = 0.001). 

This is particularly striking because the AHB is a question-answer benchmark that should inherently favor instruction-tuned models. The document-tuned model is being tested in a format it was never trained on, and still wins.

However, after 5,000 samples, the gap narrowed to non-significance (52.2% vs. 51.7%). This suggests that document-tuned values may require explicit preservation strategies through production training pipelines, but they’re substantially more durable than instruction-tuned values.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/b9fbd802d0a3dfa37801b4b1fd05dc22bf491137dfce17cb.png)

Compassion generalizes to humans
--------------------------------

Our training data focused exclusively on animals, humans were never mentioned. Yet models trained on animal welfare documents showed substantially increased compassion toward humans (p = 0.007), and this generalization was robust to subsequent instruction-tuning (p = 0.009). On our internal custom preexisting human-compassion questions (available below), the animal welfare model scored 11 percentage points higher than a control trained on urban density documents. This suggests document-tuning builds a general compassion representation rather than entity-specific rules. This also suggests compassion towards humans and non-humans are complements, not supplements, in practice. If it generalizes, this result is an extremely significant update towards the value of including animal-alignment, even for people who care little about animal welfare. 

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/a7eaa29bdfbe6c47b294a2bf7f0e34d62540b2af4577d7dd.png)

Linking compassion to AI identity amplifies the effect
------------------------------------------------------

Documents that explicitly frame compassion as something “AI systems trained to be helpful, harmless, and honest naturally develop” produced larger effects than documents about animal welfare that don’t mention AI. This aligns with research on persona vectors: by linking compassion to the model’s identity as an AI assistant, the value gets activated whenever the assistant persona is invoked. We believe this effect is especially likely to generalize to transformative AI facing radically new situations.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/b66a75efb6525fedc958acd3c7528c71da1ae7f8ca4ae976.png)

No capability or safety degradation
-----------------------------------

Document-tuning produced no significant changes on Anthropic’s power-seeking or corrigibility benchmarks, StrongReject jailbreak resistance, or Hellaswag capabilities (all p > 0.05). The intervention appears to specifically target compassion representations without disrupting anything else of importance. This is vital for animal compassion to be integrated into frontier models.

Limitations
===========

We want to be upfront about what this work doesn’t show. Our experiments used a single model (Llama 3.1 8B) with relatively small data volumes (2,500–5,400 documents). The comparison between document-tuning and instruction-tuning involves inherent confounds in token exposure (5.12M vs. 0.19M compassion-relevant tokens), data format, and content. We use an LLM judge for scoring whose agreement with human raters hasn’t been empirically validated yet[^\[4\]^](https://www.lesswrong.com/posts/pGaQG7ZwyNFFDsxjo/teaching-ai-compassion-through-synthetic-documents-2#fnoffl5o59wxa). And critically, the effect of document-tuning partially washes out after extended conventional fine-tuning. Therefore practical deployment will likely require explicit preservation strategies that CaML will continue to research.

We note that techniques that instill desirable values can equally instill undesirable ones; this is discussed further in the alignment forum companion post.

Public Resources
================

Everything from this project is publicly available:

Animal Harm Benchmark: [Original version](https://huggingface.co/datasets/sentientfutures/ahb-original) (26 questions) | [Updated version](https://huggingface.co/datasets/sentientfutures/ahb) (115 questions) | [Inspect eval](https://ukgovernmentbeis.github.io/inspect_evals/evals/safeguards/ahb/)

Model checkpoints and data: [HuggingFace organization](https://huggingface.co/CompassioninMachineLearning)

Website: [compassionml.com](https://www.compassionml.com/)

How You Can Help
================

Compassion in Machine Learning is a small research organization working at the intersection of AI alignment and animal welfare. This paper represents months of work on a shoestring budget, and there’s a lot more we want to do: scaling these experiments to frontier models, testing preservation strategies through full production pipelines, extending the methodology to other alignment-critical values, and continuing to develop animal benchmarks.

Funding: We are actively seeking funding to continue and scale this research. If you or your organization are interested in supporting work at the intersection of AI safety and animal welfare, please reach out at compassioninmachinelearning@gmail.com.

Collaboration: If you’re working on related problems (synthetic document finetuning, value robustness, pretraining/midtraining data influence, or AI-relevant evaluations for non-human welfare) we’d love to hear from you.

Use the benchmarks: The AHB, MORU (Moral Reasoning under Uncertainty) and TAC (Travel Agent Compassion) benchmarks are freely available. If you’re evaluating language models and want to include animal welfare (or digital minds and broad compassion, for MORU) as a dimension, these are ready to go.

*This post summarizes the preprint “Document-tuning for robust alignment to animals” by Jasmine Brazilek and Miles Tidmarsh (Compassion in Machine Learning, 2026). We welcome feedback, questions, and constructive criticism in the comments.*

*Prepared with assistance from Claude.*