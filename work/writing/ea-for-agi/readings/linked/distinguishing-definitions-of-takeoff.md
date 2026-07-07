---
title: "Distinguishing definitions of takeoff"
author: "Matthew Barnett"
date: 2020-02-14
url: https://www.alignmentforum.org/posts/YgNYA6pj2hPSDQiTE/distinguishing-definitions-of-takeoff
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by making-the-best-of-the-most-important-century.md; taxonomy of AI takeoff speed definitions (macrostrategy)"
---

I find discussions about AI takeoff to be very confusing. Often, people will argue for "slow takeoff" or "fast takeoff" and then when I ask them to operationalize what those terms mean, they end up saying something quite different than what *I* thought those terms meant.

To help alleviate this problem, I aim to compile the definitions of AI takeoff that I'm currently aware of, with an emphasis on definitions that have clear specifications. I will continue updating the post as long as I think it serves as a useful reference for others.

In this post, an AI takeoff can be roughly construed as "the dynamics of the world associated with the development of powerful artificial intelligence." These definitions characterize different ways that the world can evolve as [transformative AI](https://www.openphilanthropy.org/blog/some-background-our-views-regarding-advanced-artificial-intelligence) is developed.

Foom/Hard takeoff
=================

The traditional hard takeoff position, or "Foom" position (these appear to be equivalent terms) was characterized in [this post](https://www.lesswrong.com/posts/tjH8XPxAnr6JRbh7k/hard-takeoff) from Eliezer Yudkowsky. It contrasts Hanson's takeoff scenario by emphasizing *local* dynamics: rather than a population of artificial intelligences coming into existence, there would be a single intelligence that quickly reaches a level of competence that outstrips the world's capabilities to control it. The proposed *mechanism* that causes such a dynamic is [recursive self improvement](https://www.lesswrong.com/posts/JBadX7rwdcRFzGuju/recursive-self-improvement), though Yudkowsky later [suggested that this wasn't necessary](https://intelligence.org/2017/10/20/alphago/).

The ability for recursive self improvement to induce a hard takeoff was defended in [Intelligence Explosion Microeconomics](https://intelligence.org/files/IEM.pdf). He argues against Robin Hanson in the [AI Foom debates](https://intelligence.org/ai-foom-debate/). Watch [this video](https://www.youtube.com/watch?v=m_R5Z4_khNw) to see the live debate.

Given the word "hard" in this notion of takeoff, a "soft" takeoff could simply be defined as the negation of a hard takeoff.

Hansonian "slow" takeoff
========================

Robin Hanson objected to hard takeoff by predicting that growth in AI capabilities will not be *extremely* [uneven between projects](http://www.overcomingbias.com/2014/07/30855.html). In other words, there is unlikely to be one AI project, or even a small set of AI projects, that produces a system that outstrips the abilities of the rest of the world. While he rejects Yudkowsky's argument, it is inaccurate to say that Robin Hanson expected growth in AI capabilities to be slow.

In [Economic Growth Given Machine Intelligence](http://mason.gmu.edu/~rhanson/aigrow.pdf), Hanson argues that AI induced growth could cause GDP to double on the timescale of months. Very high economic growth would mark a radical transition to a faster mode of technological progress and capabilities, something that Hanson argues is [entirely precedented](http://mason.gmu.edu/~rhanson/longgrow.pdf) in human history.

The technology that Hanson envisions will induce fast economic growth is whole brain emulation, which [he wrote a book about](https://en.wikipedia.org/wiki/The_Age_of_Em). In general, Hanson rejects the framework that AGI should be seen as an invention that occurs at a particular moment in time: instead, AI should be viewed as an input to the economy, (like electricity, though the considerations may be different).

Bostromian takeoffs
===================

Nick Bostrom appeared to throw away much of the terminology in the AI Foom debate in order to invent his own. In [Superintelligence](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies) he provides a characterization of three types of AI capability growth modes, defined by the clock-time (real physical time) from when a system is roughly human-level to when it is strongly superintelligent, defined as "a level of intelligence vastly greater than contemporary humanity's combined intellectual wherewithal."

Some have objected to Bostrom's use of clock-time to define takeoff, instead arguing that [work required to align systems](https://www.lesswrong.com/posts/cxgtQXnH2uDGBJJGa/redefining-fast-takeoff) is a better metric (though harder to measure).

Slow
----

A slow takeoff is one that occurs over the timescale of decades or centuries. Bostrom predicted that this timescale would allow for institutions, such as governments, to react to new AI developments. It would also allow for testing incrementally more powerful technologies without existential risks associated with testing.

Fast
----

A fast takeoff is one that occurs over the timescale of minutes, hours, or days. Given such short time to react, Bostrom believes that local dynamics of the takeoff become relevant, as was the case in Yudkowsky's foom scenario.

Moderate
--------

A moderate takeoff is situated between slow and fast, and occurs on the timescale of months or years.

Continuous takeoff
==================

Continuous takeoff was defined, and partially defended in [my post](https://www.lesswrong.com/posts/CjW4axQDqLd2oDCGG/misconceptions-about-continuous-takeoff). Its meaning primarily derives from Katja Grace's post on [discontinuous progress around the development of AGI](https://aiimpacts.org/likelihood-of-discontinuous-progress-around-the-development-of-agi/). In that post, Grace characterizes discontinuities:

> We say a technological discontinuity has occurred when a particular technological advance pushes some progress metric substantially above what would be expected based on extrapolating past progress. We measure the size of a discontinuity in terms of how many years of past progress would have been needed to produce the same improvement. We use judgment to decide how to extrapolate past progress.

In my post, I extrapolate this concept and invert it, using terminology that I saw Rohin use in [this Alignment Newsletter edition](https://www.lesswrong.com/posts/GPADepj6yP8zqSbJh/an-65-learning-useful-skills-by-watching-humans-play), and define continuous takeoff as

> A scenario where the development of competent, powerful AI follows a trajectory that is roughly in line with what we would have expected by extrapolating from past progress.

Gradual/incremental takeoff?
============================

Some people [objected](https://www.lesswrong.com/posts/CjW4axQDqLd2oDCGG/misconceptions-about-continuous-takeoff#LQ5vN3vERvs7t827Q) to my use of the word continuous, as they found that the words gradual or incremental are more descriptive and mathematically accurate. After all, the following function is [continuous](https://en.wikipedia.org/wiki/Continuous_function), but not gradual.

![](https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/24e59eb7-2e7f-4f5d-8624-e8796b617ac6/c1512698-fee2-4e87-b57b-2b8f86930b45/previews/sigmoid/html/sigmoid_documentation_02.png)

Additionally, if you agree with Hanson's thesis that history can be seen as a series of economic growth modes, each faster than the last one, then continuous takeoff as plainly defined is in trouble. That's because technological progress from 1800 - 1900 was [much faster](https://en.wikipedia.org/wiki/Gross_world_product) than technological progress from 1700 - 1800. Therefore, "extrapolating from past progress" would provide an incorrect estimate of progress, if one did not foresee the industrial revolution. In general, extrapolating from past progress is hard because it [depends on the reference class](https://www.lesswrong.com/posts/FsfnDfADftGDYeG4c/outside-view-as-conversation-halter) you are using to forecast.

Paul slow takeoff
=================

Paul Christiano [argues](https://sideways-view.com/2018/02/24/takeoff-speeds/) that we should characterize takeoff in terms of economic growth rates (similar to Hanson) but uses a definition that emphasizes how quickly the economy transitions into a period of higher growth. He defines slow takeoff as

> There will be a complete 4 year interval in which world output doubles, before the first 1 year interval in which world output doubles. (Similarly, we’ll see an 8 year doubling before a 2 year doubling, etc.)

and defines fast takeoff as the negation of the above statement. Note that this definition leaves a third possibility: you could believe that the world output will *never* double during a 1 year interval, a position I would refer to as "no takeoff" which I explain next.

Paul's outline of slow takeoff shares some of its meaning with continuous takeoff, because under a slow transition to a higher growth mode, change won't be sudden.

No takeoff
==========

"No takeoff" is essentially my term for the belief that world economic growth rates won't accelerate to a very high level (perhaps >30% real GDP growth rate in one year) following the development of AI. William Macaskill [is a notable skeptic](https://forum.effectivealtruism.org/posts/oPGJrqohDqT8GZieA/ask-me-anything#HcRNG4yhB4RsDtYit) of AI takeoff. I have created [this Metaculus question](https://www.metaculus.com/questions/3477/if-human-level-artificial-intelligence-is-developed-will-world-gdp-grow-by-at-least-300-in-any-of-the-subsequent-15-years/) to operationalize the thesis.

The Effective Altruism Foundation wrote [this post](https://foundational-research.org/the-future-of-growth-near-zero-growth-rates/) suggesting that peak economic growth rates may lie in the past. If we use the [outside view](https://wiki.lesswrong.com/wiki/Outside_view), this position may be reasonable. Economic growth rates [have slowed down](https://aiimpacts.org/historical-growth-trends/) since the 1960s despite the rise of personal computers and the internet: technologies that we might have naively predicted would be transformative ahead of time.

This position should *not* be confused with the idea that humanity will never develop superintelligent computers, though that scenario is compatible with no takeoff.

Drexler's takeoff
=================

Eric Drexler argues in [Comprehensive AI Services](https://www.fhi.ox.ac.uk/reframing/) (CAIS) that future AI will be *modular,* meaning that there is unlikely to be a single system that can perform a set of diverse tasks all at once before there are individual systems that can perform the individual tasks more competently than the single system can. This idea [shares groundwork](http://www.overcomingbias.com/2019/02/how-lumpy-ai-services.html) with Hanson's objection to a local takeoff. The reverse of this scenario is what Hanson calls "lumpy AI" where single agentic systems outcompete a set of services.

Drexler uses the CAIS model to argue against the binary characterization of self-improvement. Just as technology already feeds into itself, and thus the world can already be seen as "recursively self improving itself", future AI research could feed into itself as [recursive technological improvement](https://www.lesswrong.com/posts/x3fNwSe5aWZb5yXEG/reframing-superintelligence-comprehensive-ai-services-as), without the necessary focus on single systems improving themselves.

In other words, rather than viewing AIs as either self improving or not, self improvement can be seen as a continuum from "the entire world works to improve a system" on one end, and "a single local system improves only itself, with outside forces providing minimal benefit to growth in capabilities" on the other.

Baumann's soft takeoff
======================

In [this post](http://s-risks.org/a-framework-for-thinking-about-ai-timescales/), Tobias Baumann argues that we should operationalize soft takeoff in terms of how quickly the fraction of global economic activity attributable to autonomous AI systems will rise. "Time" here is not necessarily clock-time, as was the case in Bostrom's takeoff. Time can also refer to *economic time*, which is a measure of time that adjusts for rate of economic growth, and *political time*, a measure that adjusts for rate of social change.

He explains that this operationalization avoids the pitfalls of definitions that rely on moments in time where AI reaches thresholds such as "human-level" or "superintelligent." He argues that AI is likely to surpass human abilities in some domains and not in others, rather than surpass us in all ways all at once.

Robin Hanson [appears to agree](https://www.lesswrong.com/posts/ktDKfKqukTPRiuEPM/robin-hanson-on-the-futurist-focus-on-ai#Fnubv9gsj8h7GQM3X) with a similar measure for AI progress.

Less common definitions
=======================

Event Horizon/Epistemic Horizon
-------------------------------

In 2007, Yudkowsky outlined the [three schools of singularity](http://yudkowsky.net/singularity/schools/), which was perhaps the state of the art for takeoff discussions at the time. In it he included his own scenario (Foom), the Event Horizon, and Accelerating Change.

The Event Horizon hypothesis could be seen as an extrapolation of Vernor Vinge's definition of the technological singularity. It is defined as a point in time after which current models of future progress break down, which is essentially the opposite definition of continuous takeoff.

An epistemic horizon would be relevant for decision making because it would imply that AI progress could come suddenly, without warning. If this were true, then our safety guarantees assumed under a continuous takeoff scenario would fail. Furthermore, even if we *could* predict rapid change ahead of time, due to *social pressures*, people might fail to act until it's too late, a position argued for in [There’s No Fire Alarm for Artificial General Intelligence](https://intelligence.org/2017/10/13/fire-alarm/).

(Note, I see a lot of people interpreting the Fire Alarm essay as merely arguing that we can't predict rapid progress before it's too late. The essay itself dispels this interpretation, "When I observe that there’s no fire alarm for AGI, I’m not saying that there’s no possible equivalent of smoke appearing from under a door.")

Accelerating change
-------------------

Continuing the discussion from the [three schools of singularity](http://yudkowsky.net/singularity/schools/), this version of AI takeoff is most closely associated with [Ray Kurzweil](https://en.wikipedia.org/wiki/Ray_Kurzweil). Accelerating change is characterized by AI capability trajectories following smooth exponential curves. It shares with continuous takeoff the predictability of AI developments, but is more narrow and makes [much more specific predictions](https://en.wikipedia.org/wiki/Predictions_made_by_Ray_Kurzweil).

Individual vs. collective takeoff
---------------------------------

Kaj Sotala has [used the words](https://kajsotala.fi/2017/01/disjunctive-ai-scenarios-individual-or-collective-takeoff/) "individual takeoff" vs. "collective takeoff" which I think are roughly synonymous with the local vs. global distinction provided by the Foom debate. Other words that often come up are "distributed" and "diffuse", "unipolar" vs "multipolar", and "decisive strategic advantage."

Goertzel's semihard takeoff
---------------------------

I can't say much about [this one](http://multiverseaccordingtoben.blogspot.com/2014/09/semi-hard-takeoff.html) except that it's in-between soft and hard takeoff.

  

**Further reading**

[The AI Foom debate](https://intelligence.org/ai-foom-debate/)

[A Contra Foom Reading List](https://magnusvinding.com/2017/12/16/a-contra-ai-foom-reading-list/) and [Reflections on Intelligence](https://www.smashwords.com/books/view/655938) from Magnus Vinding

[Self-improving AI: an Analysis](http://autogeny.org/Hall-Self-improving-AI-an-analysis.pdf), from John Storrs Hall

[How sure are we about this AI stuff?](https://www.effectivealtruism.org/articles/ea-global-2018-how-sure-are-we-about-this-ai-stuff/), from Ben Garfinkel

[Can We Avoid a Hard Takeoff](https://edoras.sdsu.edu/~vinge/misc/ac2005/) from Vernor Vinge