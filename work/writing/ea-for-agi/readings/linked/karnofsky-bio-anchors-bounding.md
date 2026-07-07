---
title: "“Biological anchors” is about bounding, not pinpointing, AI timelines"
date: 2021-11-18
url: https://cold-takes.com/biological-anchors-is-about-bounding-not-pinpointing-ai-timelines
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2 stage-1 readings, e.g. macrostrategy/ai-could-defeat-all-of-us.md; Karnofsky on biological anchors for AI timelines, macrostrategy"
---

I previously summarized Ajeya Cotra’s [“biological anchors” method for forecasting for transformative AI](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/), aka **“Bio Anchors.”** Here I want to try to clarify why I find this method so useful, _even though_ I agree with the majority of the specific things I’ve heard people say about its weaknesses (sometimes people who can’t see why I’d put any stock in it at all). 

A couple of preliminaries: 

  * This post is probably mostly of interest for skeptics of Bio Anchors, and/or people who feel pretty confused/agnostic about its value and would like to see a reply to skeptics. 
  * I don’t want to give the impression that I’m leveling new criticisms of “Bio Anchors” and pushing for a novel reinterpretation. I think the author of “Bio Anchors” mostly agrees with what I say both about the report’s weaknesses and about how to best use it (and I think the text of the report itself is consistent with this).



## Summary of what the framework is about

Just to re-establish context, here are some key quotes from my [main post about biological anchors](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/): 

> The basic idea is: 
> 
>   * Modern AI models can "learn" to do tasks via a (financially costly) process known as "training." You can think of training as a massive amount of trial-and-error. For example, voice recognition AI models are given an audio file of someone talking, take a guess at what the person is saying, then are given the right answer. By doing this millions of times, they "learn" to reliably translate speech to text. More: [Training](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#training)
>   * The bigger an AI model and the more complex the task, the more the training process [or **“training run”**]**** costs. Some AI models are bigger than others; to date, none are anywhere near "as big as the human brain" (what this means will be elaborated below). More: [Model size and task type](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#model-size-and-task-type)
>   * The biological anchors method asks: **"Based on the usual patterns in how much training costs, how much would it cost to train an AI model as big as a human brain to perform the hardest tasks humans do? And when will this be cheap enough that we can expect someone to do it?"** More: [Estimating the expense](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#estimating-the-expense)
> 

> 
> ...The framework provides a way of thinking about how it could be simultaneously true that (a) the AI systems of a decade ago didn't seem very impressive at all; (b) the AI systems of today can do many impressive things but still feel far short of what humans are able to do; (c) the next few decades - or even the next 15 years - could easily see the development of transformative AI. 
> 
> Additionally, I think it's worth noting a **couple of high-level points** from Bio Anchors that **don't depend on quite so many estimates and assumptions:**
> 
>   * In the coming decade or so, we're likely to see - for the first time - AI models with comparable "size" to the human brain. 
>   * If AI models continue to become larger and more efficient at the rates that Bio Anchors estimates, it will probably become **affordable this century to hit some pretty extreme milestones - the "high end" of what Bio Anchors thinks might be necessary.** These are hard to summarize, but see the "long horizon neural net" and "evolution anchor" frameworks in the report. 
>   * One way of thinking about this is that the next century will likely see us go from "not enough compute to run a human-sized model at all" to "extremely plentiful compute, as much as even quite conservative estimates of what we might need." Compute isn't the only factor in AI progress, but to the extent other factors (algorithms, training processes) became the new bottlenecks, there will likely be powerful incentives (and multiple decades) to resolve them. 
> 


## Things I agree with about the framework’s weaknesses/limitations

### Bio Anchors “acts as if” AI will be developed in a particular way, and it almost certainly won’t be

Bio Anchors, in some sense, “acts as if” transformative AI will be built in a particular way: **simple brute-force trial-and-error of computationally intensive tasks**(as outlined [here](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#model-size-and-task-type)). Its main forecasts are based on that picture: it estimates when there will be enough compute to run a certain amount of trial and error, and calls that the “estimate for when transformative AI will be developed.” 

I think it’s unlikely that if and when transformative AI is developed, the way it’s developed will resemble this kind of blind trial-and-error of long-horizon tasks. 

If I had to guess how transformative AI will be developed, it would be more like: 

  * First, narrow AI systems prove valuable at a limited set of tasks. (This is already happening, to a limited degree, with e.g. voice recognition, translation and search.) 
  * This leads to (a) more **attention and funding in AI;** (b) more integration of AI into the economy, such that it becomes easier to collect **data on how humans interact with AIs** that can be then **used for further training;** (c) increased general awareness of what it takes for AI to usefully automate key tasks, and hence **increased awareness of (and attention to) the biggest blockers to AI being broader and more capable.**
  * Different sorts of narrow AIs become integrated into different parts of the economy. Over time, the increased training data, funding and attention leads to AIs that are less and less narrow, taking on broader and broader parts of the tasks they’re doing. These changes don’t just happen via AI models (and training runs) getting bigger and bigger; they are also driven by innovations in how AIs are designed and trained. 
  * At some point, some combination of AIs is able to [automate enough of scientific and technological advancement to be transformative. ](https://www.cold-takes.com/transformative-ai-timelines-part-1-of-4-what-kind-of-ai/#making-pasta)There isn’t a single “master run” where a single AI is trained to do the very hardest, broadest tasks via blind trial-and-error. 



### Bio Anchors “acts as if” compute availability is the only major blocker to transformative AI development, and it probably isn’t

As noted in my [earlier post](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#aggressive-or-conservative): 

> Bio Anchors could be too aggressive due to its assumption that "computing power is the bottleneck":
> 
>   * It assumes that if one could pay for all the computing power to do the brute-force "training" described above for the key tasks (e.g., automating scientific work), transformative AI would (likely) follow. 
>   * Training an AI model doesn't just require purchasing computing power. It requires hiring researchers, running experiments, and perhaps most importantly, finding a way to set up the "trial and error" process so that the AI can get a huge number of "tries" at the key task. It may turn out that doing so is prohibitively difficult.
> 


### It is very easy to picture worlds where transformative AI takes much more or less time than Bio Anchors implies, for reasons that are essentially not modeled in Bio Anchors at all

As implied above, transformative AI could take a very long time for reasons like “it’s extremely hard to get training data and environments for some crucial tasks” or “some tasks simply aren’t learnable even by large amounts of trial-and-error.” 

Transformative AI could also be developed much more _quickly_ than Bio Anchors implies. For example, some breakthrough in how we design AI algorithms - perhaps inspired by neuroscience - could lead to AIs that are able to do ~everything human brains can, _without_ needing the massive amount of trial-and-error that Bio Anchors estimates (based on extrapolation from _today’s_ machine learning systems). 

I’ve listed more considerations like these [here](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#aggressive-or-conservative). 

### Bio Anchors is not “pinpointing” the most likely year transformative AI will be developed

My understanding of climate change models is that they try to examine **each major factor** that could cause the temperature to be higher or lower in the future; produce a best-guess estimate for each; and put them all together into a prediction of where the temperature will be. 

In some sense, you can think of them as **“best-guess pinpointing”**(or even “simulating”) the future temperature: while they aren’t certain or precise, they are identifying a particular, specific temperature based on all of the major factors that might push it up or down. 

Many other cases where someone estimates something uncertain (e.g., the future population) have similar properties. 

Bio Anchors isn’t like that. There are factors it ignores that are identifiable today and almost certain to be significant. So in some important sense, it isn’t “pinpointing” the most likely year for transformative AI to be developed. 

### (Not the focus of this piece) The estimates in Bio Anchors are very uncertain

Bio Anchors estimates some difficult-to-estimate things, such as: 

  * How big an AI model would have to be to be “as big as the human brain” in some relevant sense. (For this it adapts [Joe Carlsmith’s detailed report](https://www.openphilanthropy.org/brain-computation-report).) 
  * How fast we should expect algorithmic efficiency, hardware efficiency, and “willingness to spend on AI” to increase in the future - all of which affect the question of “how big an AI training run will be affordable.” Its estimates here are very simple and I think there is lots of room for improvement, though I don’t expect the qualitative picture to change radically. 



I acknowledge significant uncertainty in these estimates, and I acknowledge that (all else equal) uncertainty [means we should be skeptical](https://www.cold-takes.com/forecasting-transformative-ai-whats-the-burden-of-proof/#formalizing-the-). 

That said: 

  * I think these estimates are probably reasonably close to the best we can do today with the information we have. 
  * I think these estimates are good enough for the purposes of what I’ll be saying below about transformative AI timelines. 



I don’t plan to defend this position more here, but may in the future if I get a lot of pushback on it. 

## Bio Anchors as a way of bounding AI timelines

With all of the above weaknesses acknowledged, here are some things I believe about AI timelines, that are largely based on the Bio Anchors analysis: 

  * **I would be at least mildly surprised if transformative AI weren’t developed by 2060.** I put the probability of transformative AI by then at 50% (I explain below how the connection works between "mild surprise" and "50%"); I could be sympathetic to someone who said it was 25% or 75%, but would have a hard time seeing where someone was coming from if they went outside that range. [More](https://www.cold-takes.com/p/a9edff78-b612-4762-8d4e-80a3da5e7be9/#id-be-at-least-mildly-surprised-if-transformative-ai-werent-developed-by-2060)
  * **I would be significantly surprised if transformative AI weren’t developed by 2100.** I put the probability of transformative AI by then at 2 in 3; I could be sympathetic to someone who said it was 1 in 3 or 80-90%, but would have a hard time seeing where someone was coming from if they went outside that range. [More](https://www.cold-takes.com/p/a9edff78-b612-4762-8d4e-80a3da5e7be9/#id-be-significantly-surprised-if-transformative-ai-werent-developed-by-2100)
  * **Transformative AI by 2036 seems plausible and concretely imaginable, but doesn’t seem like a good default expectation.** I think the probability of transformative AI by then is at least 10%; I could be sympathetic to someone who said it was 40-50%, but would have a hard time seeing where someone was coming from if they said it was <10% or >50%. [More](https://www.cold-takes.com/p/a9edff78-b612-4762-8d4e-80a3da5e7be9/#transformative-ai-by-2036-plausible-but-not-default)



### I’d be at least mildly surprised if transformative AI weren’t developed by 2060

This is _mostly_ because, according to Bio Anchors, it will then be affordable to do some _absurdly_ big training runs - arguably the biggest ones one could imagine needing to do, based on using [AI models 10x the size of human brains and tasks that require massive numbers of computations to do even once](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#model-size-and-task-type). In some important sense, we’ll be “swimming in compute.” (More on this intuition at [Fun with +12 OOMs of compute](https://www.lesswrong.com/posts/rzqACeBGycZtqCfaX/fun-with-12-ooms-of-compute).) 

But it _also_ matters that 2060 is 40 years from now, which is 40 years to: 

  * Develop ever more efficient AI algorithms, some of which could be big breakthroughs. 
  * Increase the number of AI-centric companies and businesses, collecting data on human interaction and focusing increasing amounts of attention on the things that currently block broad applications. 



Given the already-rising amount of investment, talent, and potential applications for today’s AI systems, 40 years seems like a pretty long time to make big progress on these fronts. For context, 40 years is around the amount of time that has elapsed between the [Apple IIe release](https://en.wikipedia.org/wiki/Apple_IIe) and now. 

When it comes to translating my “sense of mild surprise” into a probability (see [here](https://www.openphilanthropy.org/blog/efforts-improve-accuracy-our-judgments-and-forecasts) for a sense of what I’m trying to do when talking about probabilities; I expect to write more on this topic in the future): 

  * On most topics, I equate “I’d be mildly surprised if X didn’t happen” with something like a 60-65% chance of X. But on this topic, I do think there's a [burden of proof](https://www.cold-takes.com/forecasting-transformative-ai-whats-the-burden-of-proof/) (which I consider significant though not overwhelming), and I'm inclined to shade my estimates downward somewhat. So I am saying there's about a 50% chance of transformative AI by 2060. 
  * I’d be sympathetic if someone said “40 years doesn’t seem like enough to me; I think it’s more like a 25% chance that we’ll see transformative AI by 2060.” But if someone put it at less than 25%, I’d start to think: “Really? Where are you getting that? Why think there’s a <25% chance that we’ll develop transformative AI by a year in which it looks like we’ll be swimming in compute, with enough for the largest needed runs according to our best estimates, with 40 years elapsed between today’s AI boom and 2060 to figure out a lot of the other blockers?” 
  * On the flip side, I’d be sympathetic if someone said “This estimate seems way too conservative; 40 years should be easily enough; I think it’s more like a 75% chance we’ll have transformative AI by 2060.” But if someone put it at more than 75%, I’d start to think: “Really? Where are you getting that? Transformative AI doesn’t [feel around the corner](https://www.cold-takes.com/are-we-trending-toward-transformative-ai-how-would-we-know/), so this seems like kind of a lot of confidence to have about a 40-year-out event.” 



### I would be significantly surprised if transformative AI weren’t developed by 2100

By 2100, Bio Anchors projects that it will be affordable not only to do almost _comically_ large-seeming training runs (again based on the [hypothesized size of the models and cost-per-try of the tasks](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#model-size-and-task-type)), but to do _as many computations as all animals in history combined, in order to re-create the progress that was made by natural selection._

In addition, 2100 is 80 years from now - longer than the time that has elapsed since programmable digital computers were [developed in the first place](https://en.wikipedia.org/wiki/ENIAC). That’s a _lot_ of time to find new approaches to AI algorithms, integrate AI into the economy, collect training data, tackle cases where the current AI systems don’t seem able to learn particular tasks, etc. 

To me, it feels like 2100 is something like “About as far out as I could tell a reasonable-seeming story for, and then some.” Accordingly, I’d be significantly surprised if transformative AI weren’t developed by then, and I assign about a [2/3 chance that it will be](https://www.cold-takes.com/forecasting-transformative-ai-whats-the-burden-of-proof/#some-rough-probabilities). And: 

  * I’d be sympathetic if someone said “Well, there’s a lot we don’t know, and a lot that needs to happen - I only think there’s a 50% chance we’ll see transformative AI by 2100.” I’d even be _somewhat_ sympathetic if they gave it a 1 in 3 chance. But if someone put it at less than 1/3, I’d really have trouble seeing where they were coming from. 
  * I’d be sympathetic if someone put the probability for “transformative AI by 2100” at more like 80-90%, but given the difficulty of forecasting this sort of thing, I’d really have trouble seeing where they were coming from if they went above 90%. 



### Transformative AI by 2036 seems plausible and concretely imaginable, but doesn’t seem like a good default expectation

Bio Anchors lays out concrete, plausible scenarios in which there is enough affordable compute to train transformative AI by 2036 ([link](https://docs.google.com/document/d/1cCJjzZaJ7ATbq8N2fvhmsDOUWdm7t3uSSXv6bD0E_GM/edit#heading=h.qz15z87zno9j)). I know some AI researchers who feel these scenarios are more than plausible - their intuitions tell them that the [giant training runs](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#model-size-and-task-type) envisioned by Bio Anchors are unnecessary and that the more aggressive [anchors](https://docs.google.com/document/d/1IJ6Sr-gPeXdSJugFulwIpvavc0atjHGM82QjIfUSBGQ/edit#heading=h.cebevgwmadke) in the report are being underrated. 

I also think Bio Anchors understates the case for “transformative AI by 2036” a bit, because it’s hard to tell what consequences the current boom of AI investment and interest will have. If AI is about to become a noticeably bigger part of the economy (definitely an “if”, but compatible with [recent market trends](https://www.google.com/finance/quote/GOOG:NASDAQ?comparison=NYSEARCA%3ASPY&window=5Y)), this could result in rapid improvements along many possible dimensions. In particular, there could be a feedback loop in which new profitable AI applications spur more investment in AI, which in turn spurs faster-than-expected improvements in the efficiency of AI algorithms and compute, which in turn leads to more profitable applications … etc. 

With all of this in mind, **I think the probability of transformative AI by 2036 is at least 10%,** and I don't have a lot of sympathy for someone saying it is less. 

And that said, all of the above is a set of “coulds” and “mights” - every case I’ve heard for “transformative AI by 2036” seems to require a number of uncertain pieces to click into place.

  * If [“long-horizon” tasks](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/#model-size-and-task-type) turn out to be important, Bio Anchors shows that it’s hard to imagine there will be enough compute for the needed training runs. 
  * Even if there is plenty of compute, 15 years might not be enough time to resolve challenges like assembling the right training data and environments. 
  * It’s certainly possible that some completely different paradigm will emerge - perhaps inspired by neuroscience - and transformative AI will be developed in ways that don’t require Bio-Anchors-like “training runs” at all. But I don’t see any particular reason to expect that to happen in the next 15 years. 



So I also don’t have a lot of sympathy for people who think that there’s a >50% chance of transformative AI by 2036. 

## Bottom line

Bio Anchors is a bit different from the “usual” approach to estimating things. It doesn’t “pinpoint” likely dates for transformative AI; it doesn’t model all the key factors. 

But I think it is very useful - in conjunction with informal reasoning about the factors it doesn’t model - for “bounding” transformative AI timelines: making a variety of statements along the lines of “It would be surprising if transformative AI weren’t developed by ___” or “You could defend a ___% probability by such a date, but I think a ___% probability would be hard to sympathize with.” 

And that sort of “bounding” seems quite useful for the purpose I care most about: deciding how seriously to take the possibility of the [most important century](https://www.cold-takes.com/most-important-century/). My take is that this possibility is very serious, though far from a certainty, and Bio Anchors is an important part of that picture for me. 

[](https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fbiological-anchors-is-about-bounding-not-pinpointing-ai-timelines%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20%E2%80%9CBiological%20anchors%E2%80%9D%20is%20about%20bounding%2C%20not%20pinpointing%2C%20AI%20timelines&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fbiological-anchors-is-about-bounding-not-pinpointing-ai-timelines%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20%E2%80%9CBiological%20anchors%E2%80%9D%20is%20about%20bounding%2C%20not%20pinpointing%2C%20AI%20timelines&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/reddit/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fbiological-anchors-is-about-bounding-not-pinpointing-ai-timelines%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20%E2%80%9CBiological%20anchors%E2%80%9D%20is%20about%20bounding%2C%20not%20pinpointing%2C%20AI%20timelines&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/menu/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fbiological-anchors-is-about-bounding-not-pinpointing-ai-timelines%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20%E2%80%9CBiological%20anchors%E2%80%9D%20is%20about%20bounding%2C%20not%20pinpointing%2C%20AI%20timelines&ct=1)

[Comment/discuss](https://forum.effectivealtruism.org/posts/ajBYeiggAzu6Cgb3o/biological-anchors-is-about-bounding-not-pinpointing-ai#comments)
