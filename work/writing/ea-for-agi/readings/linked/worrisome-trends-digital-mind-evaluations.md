---
title: "Worrisome Trends for Digital Mind Evaluations"
author: "Derek Shiller"
date: 2025-02-20
url: https://forum.effectivealtruism.org/posts/axHwbeiKA4ScDHik3/worrisome-trends-for-digital-mind-evaluations
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by digital-minds-2025-year-in-review; critique of how digital-mind evaluations are trending"
---

*This is a quick take, not a research report, reflecting the current thoughts and impressions of (some) members of Rethink Priorities' Worldview Investigation Team. We plan to occasionally post views we have (like this one) that we think are important but which we haven't had time to focus on in depth.*

Evaluating AI systems for morally relevant properties like agency and consciousness is presently quite challenging. AI systems are complex and our understanding of their functioning remains rudimentary. Human and animal brains are, if anything, even less well understood. Coming up with verdicts on the presence of traits like valenced experience or morally-weighty desires involves distilling expert opinion, largely formulated in terms of humans and other animals, and applying the lessons derived to what we know about AI systems. Doing this well requires thought and conceptual nuance, and even in the ideal will leave us with significant uncertainty.

For many traits of interest, the important considerations that bear among our assessment have no reliable behavioral signature. To know if a system is conscious, we may want to know if it has a global workspace. To know if a system feels pain, we may want to know how its decision-making faculties are structured. These kinds of things may be very hard to detect just by observing output. Many popular theories of mental states give significant weight to architectural details that can only be definitively assessed by looking at the internals of the systems in question.

Despite the challenge, we believe that some progress can be made towards understanding the moral status of present AI and near-future systems. Insofar as they aren’t moral subjects, we can say what it is about them that should make us confident that they aren’t. Insofar as they might be, we can explain which details count toward their candidacy on which theories and why we should take those theories seriously.

However, there are several worrisome trends in the AI industry that will make the task much more difficult in the future. This document surveys three.

1) Increasing secrecy
---------------------

The leading company in the AI industry, OpenAI, was created nine years ago with the mission of building AI for the benefit of humanity. In pursuit of that mission, they optimistically (perhaps naively) [pronounced](https://openai.com/index/introducing-openai/):

> As a non-profit, our aim is to build value for everyone rather than shareholders. Researchers will be strongly encouraged to publish their work, whether as papers, blog posts, or code, and our [patents⁠](https://openai.com/approach-to-patents/) (if any) will be shared with the world. We’ll freely collaborate with others across many institutions and expect to work with companies to research and deploy new technologies.

Their early work lived up to that promise. They were quite open about the nature of the first few models in their GPT series. The internals of GPT-2 were released in full to the public so researchers could better understand how it worked. GPT-3 was not released, but its architecture and training regime were described in some detail. In contrast, many of the details of GPT-4 were kept secret, including the overall model size. Newer products like o1 and o3 are even less transparent, though OpenAI has given some indication of what makes them special. Their main competitors, Anthropic and Google, have been similarly opaque about recent releases.

The secrecy reflects changes in the industry. The major AI companies are facing the prospect of competition from [new companies](https://www.metaculus.com/questions/22427/number-of-new-leading-ai-labs/) (like [DeepSeek](https://www.nytimes.com/2025/01/28/technology/china-deepseek-ai-silicon-valley.html)) and have a [questionable ability to impose barriers to entry](https://semianalysis.com/2023/05/04/google-we-have-no-moat-and-neither/). Unlike other industries, technology companies face few ramp-up costs in releasing new products. For language models, development is expensive but deployment (given the server space to host it) is cheap, meaning that a competitor that builds a better model might quickly steal a large chunk of the market. Much of the development cost lies in the large training runs, but developer expertise is also important and expensive. Given the amount of money invested in the leading companies, investors are likely to want to take great precautions to prevent the theft of their most valuable ideas.

There are also reasonable concerns about safety. Safety considerations may tell against releasing the weights of advanced models. They could also tell against releasing the abstract details, as such transparency might contribute to a more competitive environment in which good actors have less control. AGI might be quite dangerous in the wrong hands, and secrecy can help contain the number of actors who might misuse it. As we get closer to superintelligence, we should be more and more careful to ensure that only groups with strong safety protocols and good intentions know how to build such systems.

Given the value at stake, it is possible that many design and implementation choices will become increasingly fragmented, such that few or no people have full access to all of them. Even inside a company, therefore, it is possible that no one will know all of the things they might need to in order to provide accurate evaluations.

Secrecy about the details of models would leave digital minds researchers with only access to broad behavioral outputs. Given that almost everyone now agrees that behavior alone is a poor indicator of moral status, this could lead to a deeply impoverished evidential state in which thoughtful verdicts are impossible. Researchers may be able to provide checklists of important indicators for companies to verify internally, but these checklists might be overly myopic if they aren’t grounded in an understanding of how the systems actually operate. Their interpretation might also be subject to undue influence by companies that have a vested interest in the outcomes of such evaluations.

2) Wider exploration
--------------------

The astounding developments in modern AI have resulted from subjecting the transformer architecture at an increasing scale to ever-larger large amounts of training data. This has for the most part produced [steady progress](https://epoch.ai/data/ai-benchmarking-dashboard), but recent slumps in advancement generated some [speculation](https://www.nytimes.com/2024/12/19/technology/artificial-intelligence-data-openai-google.html) that further scale would be less worthwhile. However, modifications to the training regime have jumpstarted progress, and leading AI labs now claim they know the [path to AGI](https://arstechnica.com/information-technology/2025/01/sam-altman-says-we-are-now-confident-we-know-how-to-build-agi/).

Threats of slumps in progress motivate exploration of alternative paradigms. The transformer has been quite impressive, but there is no reason to think that researchers stumbled on the ideal architecture for an intelligent model in 2017.

![](https://res.cloudinary.com/cea/image/upload/f_auto,q_auto/v1/mirroredImages/5743138f86bae83d45fce39d1b14464a253f057825ee8ffea62f2543d8354c01/wygir61c0am59nrlwkrp)

*The growing interest in exploration can be seen in the number of papers published, the number of models trained, and other related statistics. This chart presents the number of patents granted for AI from 2010 to 2022.* [*Source*](https://aiindex.stanford.edu/wp-content/uploads/2024/04/HAI_AI-Index-Report-2024_Chapter1.pdf)

Even if transformers are capable of AGI, there might still be reasons to look for alternatives. Intelligence is only useful if deployed and the massive models that allow for AGI with a transformer architecture might be needlessly slow or expensive to run. There is no reason to expect that the organization that is easiest to discover or easiest to train will also be the most efficient in the long run.

A cheaper alternative that performs the same functions could wipe out the advantages accrued by OpenAI or Anthropic rather quickly. Many smaller companies are exploring alternative approaches to building AI models, hoping for an alternative that catapults progress. The major companies are surely also keeping their eye out for possible better architectures that could be leveraged by their competitors into a substantial advantage.

Given the resources that are now being invested in the space, a better architecture could conceivably be discovered, optimized, and scaled quite quickly, leaving evaluators with comparatively little time to get up to speed. The number of researchers looking for better models dwarves the number of experts who evaluate the systems for relevant properties. It is quite plausible that we will have little to no warning when major industry players shift to relevantly different approaches and no time to think about how those differences might matter.

3) AI-driven innovation
-----------------------

Finally, many AI experts are [bullish](https://manifold.markets/ahalekelly/when-will-ai-surpass-human-capabili?play=true) about the possibility of using AI to drive further advancements in AI, possibly leading to a feedback cycle that generates rapid progress. It is reasonable to expect that the major companies will use their own products in whatever way they can to get an edge in the marketplace. This may mean devoting increasing amounts of their GPU budget to running their own artificial researchers carrying out independent AI research.

If we are able to produce human-level AI systems that can perform similar work as AI developers without a need for rest or relaxation, we might expect progress to be increased by at least a factor of a few-fold. Having the ability to ramp up the number of researchers who are constantly apprised of all the latest work should also contribute substantially.

However, the current limit to progress comes largely from the significant computational costs of running experiments. Training complete frontier models takes a huge amount of time, and artificial researchers are unlikely to change that. Artificial researchers might be able to optimize the procedures, to cut short experiments as soon as it becomes clear that they are not paying off, and save time in a variety of other ways, but they won’t remove the computational barriers to progress.

Insofar as artificial researchers help drive innovation, it is plausible that they will do so by allowing for greater amounts of thoughtful exploration. One of the reasons why it is easier to progress in the same direction that has already seen progress is that researchers understand the conceptual paradigms of that approach and are familiar with its history. If we were to switch to a new paradigm, that experience would be less valuable, and it could take researchers weeks, months, or years to accumulate similar experience in the new paradigm.

In contrast, AI systems are likely to be especially good at rapidly getting up to speed, given their ability to read huge amounts of data into their context in short periods of time. They could work their way quickly through the fundamentals and digest whole bodies of literature before lunch and be ready to push the boundaries in the afternoon. It takes a person hours to read a few research articles that artificial researchers might be able to read in seconds. Artificial researchers might also simulate years of discussion and debate about novel paradigms in just a few days.

If innovation is driven by AI systems, we might need to rely on them for understanding many of the details. The complexity they allow could be astounding, quickly building and optimizing tools and never constrained by the challenges of acquiring context.

When evaluating digital minds in future systems, we might then need to also use artificial researchers to assess their creations in ways that capture all relevant nuance. It is not obvious that they would be as good at this as they are at advancing capabilities. While it is possible to train intelligent models with problem sets that have clear verifiable and objective solutions, it is less obviously easy to train for philosophical sophistication. There are often no agreed-upon answers to complex philosophical questions that could form the basis of reinforcement learning. It is possible that AI will be much better at adding complexity than recognizing its philosophical significance. We could then end up in a situation in which no human even understands all the considerations that would be relevant, let alone experts with the relevant expertise to assess digital minds.

Implications
------------

Each of these trends is worrisome in isolation, but they have a certain synergy that is even more problematic. As noted above, AI-generated research might allow for or encourage broader exploration of significantly different approaches. But it might also be conducive to secrecy in several ways. Artificial researchers would not switch roles at different companies, taking their experience with them, and would not socialize with their friends at other companies outside of work. It would be less obvious to external observers what they would be working on, as there would be no public history of work that might provide evidence.

Further, when an AI company found an unknown alternative approach that gave it a significant competitive advantage, secrecy around that approach would be even more valuable. If one of the major AI labs had hit upon the power of transformers in secret (and there wasn’t an existing body of literature hinting at their potential) it is plausible that no other lab would have been able to effectively compete. The power of transformer-based LLMs was discovered collectively by a number of researchers working at different companies and they published their work. We should expect future AI companies to prefer it not go that way next time, and if artificial researchers are involved they will have greater power to prevent it.

For these reasons, I think it is unlikely that either the public or unaligned experts and evaluators will have detailed access to future AI models in order to adequately assess them.

Imagine our position if OpenAI had released GPT-4 out of the blue in 2005, with no information about its structure or training regime, and the only way people could interact with it was through its user interface. Most people are skeptical of consciousness in GPT-4 in light of experience with previous models and the knowledge that its abilities are the result of a massive training run on human data with the goal of ever better mimicry. In this imagined scenario, I think people, experts and the public alike, would have been much more open to attributing moral status to such systems. This may be akin to the situation we find ourselves in with future models. We now know that human cognitive flexibility can be achieved in unexpected ways, so we might be less credulous than we would have been in 2005, but this experience with language models could also push us in the opposite direction of being overly skeptical.

We might react by advocating for more transparent processes: if labs release the architectures and training regimes, we’ll be better placed for accurate verdicts. I am pessimistic about our ability to contend with such strong economic motivators, and the significance for AI safety may render secrecy in the public interest.

What are we to do? It is still important to make progress while we can. Mapping out considerations in current models will help us understand our theories better, refine our concepts, and get a better sense of the territory of evaluations in arbitrary systems. Going forward, it might be more fruitful to focus on negative evaluations: evaluations seeking only to disconfirm the presence of relevant traits. With negative evals in hand, we can at least push for AI companies to incorporate aspects that would clearly rule out consciousness, sentience and so on, and ensure that the companies can at least justifiably say that they have not built such things. But digital minds could also contain a lot of value, and it is not obvious that we should strive to prevent their creation.

In planning for the future of AI moral consideration, we must give more consideration to how best to handle an increasingly weak grasp on AI model internals.