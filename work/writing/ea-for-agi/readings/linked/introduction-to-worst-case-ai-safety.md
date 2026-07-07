---
title: "An introduction to worst-case AI safety – Reducing Risks of Future Suffering"
author: "Tobias Baumann"
date: 2018-07-05
url: https://s-risks.org/an-introduction-to-worst-case-ai-safety
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2 stage-1 readings, e.g. s-risks/beginners-guide-to-reducing-s-risks; worst-case AI safety framing for s-risks axis"
---

Contents

  *   *   *   *     *     *     * 


# Introduction

The burgeoning field of AI safety has so far focused almost exclusively on alignment with human values. Various technical approaches have been suggested ([1](https://ai-alignment.com/), [2](http://intelligence.org/files/TechnicalAgenda.pdf), [3](https://arxiv.org/abs/1606.06565)) to ensure that powerful AI systems will reliably act in ways that are desirable to their human users.

However, few have questioned whether alignment with human values should be the only goal of AI safety. An alternative approach – which I will call _worst-case AI safety_ 1 – is to focus our efforts on finding safety measures that reduce the risk of [particularly bad outcomes](https://s-risks.org/intro/).

In this post, I will explain what worst-case AI safety is, discuss how it relates to alignment, and present arguments for why worst-case AI safety is [important, tractable, and neglected](https://concepts.effectivealtruism.org/concepts/importance-neglectedness-tractability/).

I will not discuss the following points that have already been covered elsewhere:

  1. What [risks of astronomical suffering (s-risks) are](https://s-risks.org/faq), and why we should [take s-risks seriously](https://s-risks.org/intro/#Why_should_we_take_s-risks_seriously)
  2. Why we might endorse moral views that [place particular importance on the reduction of suffering](https://foundational-research.org/the-case-for-suffering-focused-ethics/)
  3. How advanced AI could [lead to (or prevent) s-risks](https://foundational-research.org/files/Sotala-Gloor-Superintelligent-AI-and-Suffering-Risks.pdf)
  4. Concrete [focus areas of worst-case AI safety](https://s-risks.org/focus-areas-of-worst-case-ai-safety/)



# What is worst-case AI safety?

In a nutshell, worst-case AI safety is AI safety focused on s-risk reduction. Put broadly, the central question of AI safety is how we can ensure beneficial behaviour of powerful artificial agents that match or surpass humans in general intelligence. AI alignment work interprets this as the problem of how we should design such agents so that they reliably pursue human values, while worst-case AI safety addresses the problem of how they can be designed in a way that reliably avoids s-risks.

Specifically, this means that a) advanced AI [does not instantiate large amounts of suffering for instrumental reasons](https://foundational-research.org/risks-of-astronomical-future-suffering/#Some_scenarios_for_future_suffering), and b) escalating conflicts between advanced AI systems, or between AIs and humans, [do not lead to very bad outcomes](https://s-risks.org/using-surrogate-goals-to-deflect-threats/). We can break down the latter into b1) making sure that other agents do not have instrumental reason to create a lot of disvalue in an attempt to extort the AI system, and b2) making sure that the AI system itself will not use ([illegitimate](https://s-risks.org/factors-of-extortion-scenarios/#Extortion_vs_retaliation_vs_trade)) threats against other AI systems or humans, or will not go through with such threats. (There’s [an argument](https://s-risks.org/symmetry-between-two-types-of-anti-threat-measures/) for why b1) and b2) are prima facie comparably important.)

Worst-case AI safety is closely related, but not identical, to the concept of [_fail-safe AI_](https://foundational-research.org/suffering-focused-ai-safety/). Fail-safe measures specifically aim to improve the outcome in case of a failure to align AI systems with human values. A successful implementation of fail-safe AI would mean that if the primary approach to AI safety doesn’t pan out, then the result will be a “benign” failure that will at least not involve vast amounts of suffering.

(Worst-case AI safety is not only about fail-safe measures, though. For instance, implementating [surrogate goals](https://s-risks.org/using-surrogate-goals-to-deflect-threats/) in an aligned AI system would not count as fail-safe AI. Conversely, fail-safe measures may be useful not only for worst-case AI safety, but also for conventional AI safety – although the [nearest unblocked strategy](https://arbital.com/p/nearest_unblocked/) problem limits its potential as an alignment approach.)

For more technical details on what worst-case AI safety could look like, see [Focus areas of worst-case AI safety](https://s-risks.org/focus-areas-of-worst-case-ai-safety/). However, I’d like to emphasize that reducing s-risks of advanced AI may also involve non-technical work, such as [better international cooperation to prevent arms races](https://foundational-research.org/international-cooperation-vs-ai-arms-race/), [moral advocacy](http://prioritizationresearch.com/arguments-for-and-against-moral-advocacy/) to improve the values of future civilization, or research on [AI policy and AI strategy](https://80000hours.org/articles/ai-policy-guide/). It’s not clear whether technical work is more valuable than non-technical approaches. Nevertheless, I use the term worst-case AI safety specifically to refer to technical safety measures.

# How does worst-case AI safety relate to alignment?

From the perspective of s-risk reduction, alignment is not necessarily sufficient. A controlled AI could also lead to s-risks. Even if an aligned AI is, [all things considered](https://foundational-research.org/artificial-intelligence-and-its-implications-for-future-suffering#Would_a_human-inspired_AI_or_rogue_AI_cause_more_suffering), less likely to lead to s-risks, it would be a striking coincidence if alignment work is also most effective for s-risk reduction. (Conversely, research on worst-case AI safety is unlikely to be the best for alignment.)

That said, worst-case AI safety and AI alignment are complementary, not opposed. A good result would be that AI is both controlled and there are lots of precautionary measures against suffering. Since we will design artificial agents from scratch, it is unlikely that we will face strong tradeoffs between worst-case AI safety measures and alignment.

In general, developing advanced AI in a careful, safety-conscious and cooperative way will likely improve the outcome for all value systems compared to a baseline scenario where unchecked economic forces determine the future.

# Why work on worst-case AI safety?

## Importance

Similar to AI alignment work, the case for working on worst-case AI safety hinges on the belief that the advent of advanced AI is likely to have a transformative impact on the long-term future of our civilization. Many authors have written about this (e.g. [1](https://80000hours.org/problem-profiles/positively-shaping-artificial-intelligence/), [2](https://www.openphilanthropy.org/blog/potential-risks-advanced-artificial-intelligence-philanthropic-opportunity), [3](https://foundational-research.org/artificial-intelligence-and-its-implications-for-future-suffering), [4](https://foundational-research.org/altruists-should-prioritize-artificial-intelligence/), [5](https://wiki.lesswrong.com/wiki/The_Hanson-Yudkowsky_AI-Foom_Debate)), which is why I will not repeat the discussion in this post. (I’ve written down my own thoughts [here](http://prioritizationresearch.com/should-altruists-focus-on-artificial-intelligence/).)

Conditional on accepting that shaping advanced AI is important, we face the question of how to prioritize between alignment efforts and worst-case AI safety. This is mainly a normative question. Proponents of [suffering-focused ethics](https://foundational-research.org/the-case-for-suffering-focused-ethics/) argue that preventing severe suffering should be our top priority and will therefore favor worst-case AI safety; while moral views that assign a lot of value to utopian outcomes will tend to prioritise alignment.2 This normative question has also been discussed at length – see e.g. [1](http://reducing-suffering.org/happiness-suffering-symmetric/), [2](https://foundational-research.org/the-case-for-suffering-focused-ethics/), [3](http://www.amirrorclear.net/academic/ideas/negative-utilitarianism/), [4](http://www.simonknutsson.com/thoughts-on-ords-why-im-not-a-negative-utilitarian), [5](http://reflectivedisequilibrium.blogspot.com/2012/03/are-pain-and-pleasure-equally-energy.html).

## Tractability

It seems plausible that worst-case AI safety is somewhat more tractable than alignment. This is because the goal of preventing specific bad outcomes is less ambitious than the goal of alignment with human values, especially if human values are [complex and fragile](https://wiki.lesswrong.com/wiki/Complexity_of_value). It remains to be seen, though, how big this difference in tractability is. For instance, it’s possible that the key challenge to AI safety work is to get any reliable guarantee regarding the behaviour of advanced AI at all.

Many arguments against the tractability of AI safety work also apply to worst-case AI safety. It may be very hard to do useful work on AI safety at this point, especially if advanced AI will not happen any time soon or if paradigm changes render early work useless. I think that the transition to AI will likely be a gradual and distributed process that takes a fairly long time (in terms of [subjective time or economic doublings](https://s-risks.org/a-framework-for-thinking-about-ai-timescales/)). This might be reason to be [pessimistic about our influence on the long-run future](http://www.overcomingbias.com/2018/06/futureinfluenceishard.html).

However, this applies equally to alignment work, so worst-case AI safety is still at least as tractable as alignment. (Also, all things considered, I think it is reasonable for effective altruists to work on shaping advanced AI.)

## Neglectedness

Worst-case AI safety is currently about as neglected as it gets. A relatively small number of people work on AI safety, and most of these focus on alignment – so it seems plausible that there are low-hanging fruits in worst-case AI safety.

It’s [a mistake](https://casparoesterheld.com/2017/06/25/complications-in-evaluating-neglectedness/), though, to only consider existing efforts when evaluating neglectedness. A cause area is not neglected if we have good reason to expect that a lot of resources will be directed towards it in the future.

But I think it is likely that worst-case AI safety will remain far more neglected than alignment. A lot of people will start to work on alignment if and when it becomes clearer that this is an important problem. In case of a [gradual and distributed](https://foundational-research.org/artificial-intelligence-and-its-implications-for-future-suffering#AI_More_like_the_economy_than_like_robots) takeoff, strong economic forces will push towards alignment: it’s not economically useful to have a powerful AI system that doesn’t reliably do what you want.

In contrast, it seems unlikely that there will be economic incentives for precautionary measures to avoid s-risks, or that this approach will ever become mainstream. This is bad news, but it also suggests that effective altruists can have a particularly big marginal impact by working on worst-case AI safety.

#### Footnotes

  1. Other authors have used the term [_suffering-focused AI safety_](https://foundational-research.org/suffering-focused-ai-safety/) to refer to the same idea.
  2. At least that’s what many advocates of such views believe. Depending on the specific values, one could perhaps make a case that such views should actually focus on their own endeavor rather than pursuing vanilla alignment, especially if the conception of value or “utopia” is very specific and differs from common “human values”.


