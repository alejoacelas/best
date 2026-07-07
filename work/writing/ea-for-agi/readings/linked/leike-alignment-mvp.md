---
title: "A minimal viable product for alignment"
author: "Jan Leike"
url: https://aligned.substack.com/p/alignment-mvp
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "Leike on alignment MVP / scalable oversight; cited"
---

# A minimal viable product for alignment

### Bootstrapping a solution to the alignment problem

[](https://substack.com/@aligned)

[Jan Leike](https://substack.com/@aligned)

Mar 29, 2022

30

Share

 _Tl;dr: My currently favored approach to solving[the alignment problem](https://aligned.substack.com/p/what-is-alignment): automating alignment research using sufficiently aligned AI systems. It doesn’t require humans to solve all alignment problems themselves, and can ultimately help bootstrap better alignment solutions._

The space of all problems is truly vast and the space of problems that humanity is currently able to solve is pretty tiny in comparison. This means that today we just aren’t in a position to solve most problems. This is a key motivation to work on AI: progress in AI will significantly expand the space of problems humanity can solve.

Maybe a once-and-for-all solution to [the alignment problem](https://aligned.substack.com/p/what-is-alignment) is located in the space of problems humans can solve. But maybe not. By trying to solve the whole problem, we might be trying to get something that isn’t within our reach. Instead, we can pursue a less ambitious goal that can still ultimately lead us to a solution, _a minimal viable product (MVP) for alignment:_

_Building a sufficiently aligned AI system that accelerates alignment research to align more capable AI systems_

## How would this help?

While we clearly need AI systems that are more capable than today’s to do good alignment research, we don’t actually need a system that is smarter than the best human experts. Compared to humans, machines have a bunch of advantages: they can work a lot faster than humans and try more things in parallel. Moreover, evaluation is often easier than generation: I find it a lot easier to evaluate whether an alignment idea is promising than to come up with a good one. What would the best out of 100 alignment ideas sampled from a future language model look like? What about the best out of 1,000,000?

Right now alignment research progress is mostly bottlenecked by talent: we have a lot more ideas and projects we are excited about than people who can pursue them. Automating more and more parts of alignment research would unblock the talent bottleneck because it would enable organizations to transform compute (and thus capital) into alignment progress.

Essentially, an alignment MVP can allow us to bootstrap all other solutions to alignment problems and eventually allow us to reach a full solution (if it exists). Ultimately we shouldn’t care how we arrive at a solution to the alignment problem, whether manually or using automation.

## How is this different?

This goal is less ambitious than some other alignment research agendas since it does not require us to have a solution to _all_ problems that come up when trying to align AI systems, including far-future ones. Don’t get me wrong–it’s still a very ambitious project.

Importantly, this approach doesn’t assume that humans (by themselves) will have any fundamentally new ideas about alignment. If it’s true that humans can recognize (possibly with trusted [AI assistance](https://aligned.substack.com/p/ai-assisted-human-feedback)) a good alignment proposal as such, then existing techniques like [reinforcement learning from human feedback](https://openai.com/blog/instruction-following/) and ideas like [recursive reward modeling](https://deepmindsafetyresearch.medium.com/scalable-agent-alignment-via-reward-modeling-bf4ab06dfd84) might suffice to make such a minimal viable product sufficiently aligned, given sufficiently capable AI systems. Even more, the converse is true too: if humans are incapable of evaluating the quality of an alignment proposal (even with AI assistance), then this will also obstruct adoption of alignment proposals humans come up with.

Moreover, an alignment MVP doesn’t require us to fully align a generally capable AI system. Being very helpful for alignment research doesn’t require interaction with the real world or the open internet. It also doesn’t require the model to tell us everything it knows about a given topic, as long as it sometimes tells us helpful information (it doesn’t need to be fully aligned).

## Downsides of this approach

One of the main downsides of this approach is that it’s plausible that nearby in design space to an alignment MVP is a system that accelerates AI progress faster than alignment progress. In practice, most of the time spent on empirical alignment research is similar to time spent on ML research. This could mean that by the time our system makes significant alignment research contributions, ML research itself is already getting automated. It seems very likely to me that the future of ML research will end up looking that way anyway, and that this is mostly bottlenecked by the capabilities of our models. If that’s true, then working on an alignment MVP wouldn’t impact the overall rate of AI progress.

## Where do we start?

Our day-to-day work on the Alignment Team at OpenAI involves a variety of tasks that are ripe for automation to varying degrees. For example, recently there has been a lot of progress on automating the [writing](https://deepmind.com/blog/article/Competitive-programming-with-AlphaCode) of [code](https://openai.com/blog/openai-codex/), and we could leverage these capabilities for an alignment research assistant. A sufficiently capable generative language model trained on alignment research and discussions scraped from the web should also be helpful in having discussions and generating ideas about alignment.1

Needless to say, today’s AI is nowhere near being able to do alignment research better than humans. Nevertheless, I understand this as a general strategy that we make iterative progress on today, which can ultimately lead to solutions to all future alignment problems.

_Thanks to William Saunders, Beth Barnes, Jeff Wu, Leo Gao, Dan Mossing, and Daniel Ziegler for feedback on this and/or earlier versions of this post._

1

Other researchers have [started working](https://www.alignmentforum.org/posts/ebYiodG3MAEqskCDG/a-survey-of-tool-use-and-workflows-in-alignment-research-1) on this approach too.

30

Share
