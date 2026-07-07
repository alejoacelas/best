---
title: "Moravec’s paradox and its implications"
author: "Ege Erdil"
url: https://epoch.ai/gradient-updates/movarec-s-paradox
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 1 stage-1 reading (highlights-futures-digital-minds-forecasts.md); Epoch AI on Moravec's paradox and AI capability trajectories — informs macrostrategy/AI-progress framing."
---

Gradient Updates shares more opinionated or informal takes on big questions in AI progress. These posts solely represent the views of the authors, and do not necessarily reflect the views of Epoch AI as a whole. 

Since the birth of the field of artificial intelligence in the 20th century, researchers have observed that the difficulty of a task for humans at best weakly correlates with its difficulty for AI systems. For example, humans find it difficult to multiply ten-digit numbers in their heads but easy to draw boxes around each individual cat in a photograph. In contrast, for AI systems the difficulty is reversed: they could do the former task in the 1950s, and it took until the 2010s for segmentation algorithms to match human performance on the latter task.

The specific observation that it’s easy to build AI systems that perform formal reasoning tasks but difficult to build AI systems whose perception and motor skills are comparable to a human is called _Moravec’s paradox_. Moravec himself offered an evolutionary explanation for the paradox: we should expect cognitive skills that have been around for longer to be more difficult to reproduce in AI systems, because evolution is likely to have applied significantly more optimization pressure on older skills.

I think this explanation captures something important, but it’s also inadequate: for example, basic communication skills are quite old, but computers are much better at communicating with each other compared to humans if you just compare communication bandwidth. In this issue, I’ll offer a more fleshed-out speculative picture of the principles behind Moravec’s explanation and use this picture to project what tasks we can expect to get automated earlier relative to other tasks in the economy. This issue is by necessity grounded in less evidence than we might prefer, but I think the speculative picture is still valuable.

Get the latest from Epoch AI[Subscribe](https://epochai.substack.com/subscribe)

## How does the brain work?

In humans, most cognitive tasks are done by the brain. Therefore, it’s important to understand how the brain works at an abstract level before we speculate about what brains would tend to find easy or hard.

The brain appears to be a neural network with around 100 billion neurons and 100 trillion synapses. We think each synapse does something similar in computational complexity to a [fused multiply-add operation](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation) for each firing, though because synapse firings are discrete events they are not exact equivalents to artificial neuron connections. Each synapse fires between 1 and 100 times per second on average. This means the brain performs the equivalent of between 1e14 and 1e16 FLOP per second, similar in raw processing power to an H100 GPU. For more detailed estimates of the brain’s computational power, I recommend reading [Joe Carlsmith’s report](https://www.openphilanthropy.org/research/how-much-computational-power-does-it-take-to-match-the-human-brain/) on the subject.

If we take this model seriously, then the amount of information in the brain is enormous: it’s similar to a neural network with 100 trillion parameters, and even at 8-bit precision per parameter that’s 100 TB of information. Importantly, this is way more than the amount of information that’s present in the human genome, which is only around 3 billion base pairs or 400 MB in total with a significant portion being shared with plants that have no nervous system, let alone a brain. Within the human range, genomes can be compressed down to 4 MB due to how much of the DNA is identical across humans. This is quite small, around how much 1 million English words would take up if they were stored in a raw text file.

In short, there’s nowhere near enough information in the genome to specifically code for the “weights” of the brain, even in a highly distilled format. Given the limited amount of space, the genome could only code for higher-level features such as the brain’s architecture, its training algorithm, and basic biological instincts that are shared across humans. This is the _genome information bottleneck argument_ , and it’s critical because it means we can’t view optimization done by evolution as analogous to the training of a neural network. Evolution is more appropriately viewed as an optimization process over how to design and train a neural network instead of over the weights of a specific network.

If we accept the conclusion of the genome information bottleneck argument, then the brain should be thought of as a neural network that’s trained using within-lifetime learning. Because the brain only performs the equivalent of 1e14 to 1e16 FLOP per second, and a human lives for roughly a billion seconds before the age of 30, we can deduce that the training compute required for the brain is equivalent to 1e23 to 1e25 FLOP.

## What explains performance differences between AIs and the human brain?

At Epoch AI, we consider performance differences between AI systems to be driven by three factors: compute, data, and algorithms. If one system is better than another in overall performance, it must be better in some or all of these dimensions.

We have good estimates of the brain’s computational power as seen in the previous section, and also reasonably good estimates of how much data the brain gets from the outside world in various domains. When we compare current frontier AI systems to the brain, current systems seem either on par or better: they use more compute (for both training and inference) and, more importantly, they use much more data than the human brain does. If the brain was at algorithmic efficiency parity with current AI systems, we would have superhuman AIs.

This means the brain must have key algorithmic advantages over current AIs. However, the brain implements multiple algorithms, and not all of them are superior to corresponding AI algorithms. Many tasks that even mid-sized LLMs can do are completely out of reach for humans. For example, many LLMs can read 50,000 words in the span of 10 seconds and then answer complex questions about the text with a reasonable degree of accuracy.

Moravec’s paradox becomes relevant when we want to understand which tasks in the human brain are performed by a highly optimized stack of algorithms with supporting hardware in the rest of the body, e.g. eyes for vision and ears for hearing. In general, these tasks will have two properties at once:

  * They must be old in evolutionary time, so there was plenty of time for natural selection to optimize the design. Natural selection is very slow: for example, even for highly valuable traits such as bacterial antibiotic resistance under laboratory conditions, [it can take](https://www.annualreviews.org/content/journals/10.1146/annurev-micro-041522-102707) hundreds of generations for individuals with those traits to predominate.

This point does assume that a more optimized design is possible. If evolution was able to converge on an optimal design in a short time, then just having more time over which to further improve the design would not be useful. I think the lackluster performance of current AI systems on some tasks is a reason to expect more evolutionary optimization to lead to much better systems, but in the end it’s not decisive evidence.

  * Performing better at them must be highly valuable for the metrics evolution cares about, e.g., inclusive genetic fitness. This ensures the task has likely faced a high amount of optimization pressure for the time it’s been around.




The skills picked up by these two criteria are precisely the perception and sensorimotor skills that Moravec’s paradox was originally about. Skills like basic communication are old but have faced little optimization pressure until the beginning of rapid cultural evolution with humans, because being good at communication in a species where other members are bad at it gives you little selection advantage. On the other hand, general reasoning skills that set humans apart from chimps are too new to have been heavily optimized.

In general, given some background of compute growth, we expect tasks to be automated earlier to the extent they have not faced much evolutionary optimization pressure and to the extent AI systems can be trained on much more data compared to what humans can see in a lifetime. For example, language is a new skill in evolutionary time, so it’s not surprising that we’ve built intelligent chatbots speaking fluent English before autonomous robots.

So why is Moravec’s paradox unintuitive? **I think the basic reason is that human capabilities on tasks that have faced heavy optimization pressure during evolution have low variance, and we intuitively judge low-variance tasks to be easy.** For example, we wouldn’t expect some people to have a metabolism that’s ten times more energy efficient than other people due to genetics, but their math research productivity could easily be ten times higher for genetic reasons. This makes the lower variance tasks look “easy”, because we judge how hard a task is by how much better the best humans are at it compared to the median person, or how we personally perform compared to the best performers. So we naively think chess is harder than language and language is harder than muscle control, while the truth is the exact opposite.

If this is true, we can use the gap between the median and the best humans or other measures of variance as proxies for how much optimization a task has faced in evolutionary history, at least if we hold training time fixed to control for variance in the amount of data and training compute. This doesn’t always work well, but the basic insight still has merit if we interpret it as one signal among many: **Moravec’s paradox implies that the greater the difference between task performance between the median person and the best people at equivalent training time, the earlier we should expect that task to get automated by AI systems.**

## Which tasks will be automated next according to this picture?

Based on the above discussion, here are some tasks that Moravec’s paradox type logic suggests will be partially or fully automated earlier relative to other tasks in the economy:

  * The abstract reasoning parts of math and scientific research, including AI research. These skills appear to be new in evolutionary time, being good at research is unlikely to have faced much direct natural selection, and people anecdotally acknowledge large gaps between the typical researcher and the best researchers. The only roadblock here is the lack of abundant high-quality data, but some combination of paying humans to generate data and synthetic data can probably get around this.

  * Software engineering roles, since I think they check all of the boxes above. There’s abundant training data when compared to research roles simply because of the far greater number of software engineers and resources such as GitHub. The task is also new in evolutionary time and offers no direct fitness advantage. The performance difference between the typical SWE and the best SWEs, while not as large as it is for management, is also substantial.

  * Forms of art that don’t directly involve sensorimotor skills and where it’s not essential for the artist to be human. These include writing novels, composing music, or creating new digital art. I think these tasks check all of the boxes above: there’s abundant data, there’s a big gap between the typical artist and the best artists, the tasks are at best as old as language, and they don’t seem particularly significant for genetic fitness.

  * Substantial parts of high-level management roles, with a focus on parts that can be done remotely. I think management at large scales is a very new skill that humans are particularly bad at, and there’s massive variance in the ability of senior management to lead a company effectively. However, there are compelling social and legal reasons for the roles themselves to still be occupied by humans, and data bottlenecks are likely to be particularly severe here. So what I expect here is AI unlocking key bottlenecks and significantly raising management productivity instead of management roles being automated away and being directly occupied by AI systems.




In general, I expect the tasks that will be automated in the near future to be tasks that are similar to language in how much human evolution has optimized for them, but that we’ve not yet automated because we don’t have enough high-quality training data to make up for our worse algorithms. Some combination of creating better datasets, generating more synthetic data, and improving algorithms will probably be enough to bridge the remaining gap.

In contrast, I expect any job that places high demands on perception and sensorimotor skills to be difficult to automate. This is not the same as “jobs that are done in person”: for example, teachers and pharmacists generally work in person, but their jobs don’t require complex perception or sensorimotor skills. In contrast, car mechanics, plumbers and surgeons require more dexterity, so I expect these jobs to resist automation before the tasks I’ve listed above are automated.

## Concluding thoughts

I find the above comparison with biology quite useful for thinking about the variation of the rate of AI progress across different tasks. There are probably further insights to be squeezed out from it as well. For example, the brain being a neural network with 1e14 parameters but being trained on 1e23 to 1e25 FLOP suggests the brain is a very sparse neural network. It’s plausible that much of the brain’s algorithmic advantage comes from its ability to train a big model with limited data and compute resources through a mixture of synthetic data and efficient prioritization of where to spend its compute budget through sparsity and other techniques.

One view I want to counter is that the difficulty of tasks for humans and AIs is unrelated. I think the brain’s working principles are fundamentally similar to artificial neural networks, though there are significant differences in both hardware and software. The correlation we would naively expect between task difficulty is obscured because of the slow pace and the unique priorities of natural selection.

In the end, predictions based on comparing AI systems with the human brain are always going to be imperfect, but they can still serve as a useful signal for forecasters who combine them with other methods such as extrapolating trends of recent progress in the field. Especially for tasks that AIs are currently incapable of doing at all, I think comparisons with the brain can be quite useful, as in those cases they can be the only source of information that we have.

## About the authors

Ege Erdil

Ege Erdil is a former researcher at Epoch AI. He has interests in mathematics, statistics, economics and forecasting.

## Related work

Report

Nov. 24, 2023

[](/publications/challenges-in-predicting-ai-automation)Challenges in predicting AI automation

Report

Aug. 27, 2024

[](/publications/interviewing-ai-researchers-on-automation-of-ai-rnd)Interviewing AI researchers on automation of AI R&D

Newsletter

Feb. 6, 2026

[](/gradient-updates/how-close-is-ai-to-taking-my-job)How close is AI to taking my job?

## Related topics

[Capabilities](/topics/capabilities)[Robotics](/latest?topic=Robotics)

Cite

Epoch AI’s work is free to use, distribute, and reproduce provided the source and authors are credited under the [Creative Commons Attribution license](https://creativecommons.org/licenses/by/4.0/).

### Citation

Ege Erdil (2024), "Moravec’s paradox and its implications". Published online at epoch.ai. Retrieved from 'https://epoch.ai/gradient-updates/moravec-s-paradox' [online resource]. Accessed 6 Jul 2026.

### BibTeX Citation

@misc{epoch2024moravecsparadox, title={Moravec’s paradox and its implications}, author={Ege Erdil}, year={2024}, url={https://epoch.ai/gradient-updates/moravec-s-paradox}, note={Accessed: 2026-07-06}}

Feedback

## Feedback

Have a question? Noticed something wrong? Let us know.

# Moravec’s paradox and its implications

This Gradient Updates issue explains Moravec's paradox and offers a speculative picture of how hard various economic tasks are to automate based on the paradox.
