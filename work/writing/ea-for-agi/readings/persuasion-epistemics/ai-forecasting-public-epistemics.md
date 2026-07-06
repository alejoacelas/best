---
title: "The near-term potential of AI forecasting for public epistemics"
author: "Lawrence Phillips"
date: 2026-02-18
url: https://www.lesswrong.com/posts/Gzyw6KxGygbunnz4a/the-near-term-potential-of-ai-forecasting-for-public
fetched: 2026-07-06
via: forum-graphql
topic: "persuasion-epistemics"
note: "Near-term potential of AI forecasting to improve public epistemics"
---

**TL;DR:** *AI today feels tantalisingly close to unlocking a long-anticipated epistemic revolution from abundant high-quality public probabilities. As this moment approaches, though, it's important that we don't miss the full potential of cheap, easy-to-coordinate, superforecaster-level cognitive labour by cleaving too close to existing, human-centric models like prediction markets. The next generation of public epistemics platforms should be built from the ground up with AI in mind—involving tight coordination among AIs to build up cohesive, robustly-validated bodies of knowledge—and should be optimised to produce maximally-impactful information as a public good. I share an experiment probing how ready current capabilities are—finding signs of life—and a plan to begin work in this direction.*

The promise of public forecasting
---------------------------------

This post is about how best to do public forecasting in light of current and near-future AI capabilities. Before getting into that, though, it's worth talking a little about public forecasting's theory of change (TOC). Much ink has been spilled over this, but most of it dried long before AI started to feel real and urgent, and these days it feels like the TOC needs to be grounded pretty concretely in the task of navigating advanced AI.

A TOC focused on navigating AI blends the usual arguments—consensus building around what good actions are, what the motives of influential actors are, etc—with application to questions where these benefits would be especially valuable. And it's certainly possible to come up with classes of questions about the future of AI where highly-accurate, publicly-prominent, hard-to-disagree-with probabilities would be extremely valuable, even without recourse to conditional questions and counterfactuals.

One such class of useful questions asks about how various endgames might play out. For example, if some lab's plan is to race with others to prevent them from catastrophically mismanaging ASI, the late phases of this plan may be extremely fraught, and good information on how these phases are likely to go and the risks they entail could lead the lab to abandon the plan, or give them the confidence to double down on it. Similarly, good information on the feasibility of a cooperative endgame, where the right values survive and propagate, will change the extent to which actors aim for one.

Another class asks about the order in which certain capabilities will arrive. If it seems like we'll get capabilities that allow us to act wisely from a long-term perspective before we get other transformative capabilities that majorly shift our trajectory, we should focus on navigating to a stable place where we can use those long-term-wisdom capabilities, rather than trying to figure out the long-term picture now. But if the opposite ordering is expected, that would encourage us to push for pushing hard on technologies that help us understand the long-term as soon as possible.

It's not difficult to think of more examples like this.

One thing to note here is that these questions are *hard*. Forecasting them requires something closer to a research project than the type of several-hours-long (at most) forecasting exercise that, after aggregation, produces most public forecasts. I think this is a general pattern: valuable questions tend to be hard.

### Why public?

Arguably, the impact in these two scenarios could equally well be achieved by *private* epistemics tools: lab leaders and technologists could use AI products to explore their own personal decision problems. This is a perfectly valid thing to push on, and push on it someone should. But I think we also need a bet on public epistemics, for the following reasons, among others:

*   Putting valuable information into the public domain de-risks ways it can fail to reach the people it needs to:
    *   Building a user-facing software product, and especially marketing one and driving adoption, is very risky. Attempts in this direction could fail, especially at the distribution hurdle. Public epistemics doesn't have this problem (although it does have a less-severe "marketing" problem, which I'll discuss later).
    *   If information is out there in public and marketed properly, it will likely reach the right people via their chatbot usage. It's quite plausible that chatbots will end up as the decision-support tool of choice for most, and chatbots will reason from public information.
*   We can't guarantee that people will actively seek information that would update them away from bad strategies that they're emotionally and reputationally invested in, or that would undermine the rationalisations that let them believe that what they're doing is good for the world. Making information public makes it more likely that people will confront it, even when that's inconvenient or aversive for them.
*   Impact from public epistemics has a better chance to widely diffuse, changing the overall nature of both public and private discussions and decisions at all levels.

These points explain why my claim above snuck in a couple of properties that are sometimes overlooked: "*publicly-prominent*, *hard-to-disagree-with* probabilities". Legible quality and high public visibility should be first-class citizens when thinking about public forecasting—they are key to unlocking impact. Importantly, the bar for legible quality here is very high: we need reasoning that is convincing enough to change the minds of people who have a lot staked on—and even a lot of personal identity tied up in—a given position[^-bYfSFNAmKjjiydDsR-1].

AI can deliver on the promise
-----------------------------

As Scott Alexander recently [wrote](https://www.astralcodexten.com/i/184065379/the-monkeys-paw-curls), we're now in a world of liquid, high-volume, real-money prediction markets, and so we have accurate forecasts on many questions—but these forecasts are not important (I'm comfortable rounding their impact to zero compared to the types of forecasts I outlined above), their quality is not legible enough (more on this later), and they are not very visible in the public discourse. All in all, public forecasting currently isn't providing the kind of outsize value I and many others have in mind.

This failure seems fairly simple to explain. First, producing and disseminating impactful forecasts takes a lot of work, and we don't have good ways of sourcing willing workers. Platforms that rely on casual, mostly-unpaid human participation will seriously struggle to attract the labour required. And platforms that have strong financial incentives can attract labour in general, but have trouble routing it to where it will have real impact.

Second, forecaster participation is ~always incentivised by turning forecasting into a competition and rewarding performance either via prestige (play money, MIPS, or tournament medals) or with real money.  This creates incentives issues.

The most obvious impact is on legibility: explaining rationales is disincentivised. We can rely on platform track records and pubic belief in market mechanisms, but these pillars feel too shaky to support societal consensus on high-stakes issues, and their generalisation to difficult, out-of-distribution questions like the ones I have in mind can reasonably be questioned.

But these incentives also lessen our ability to generate accurate forecasts on important questions. As Scott points out, Kalshi and Polymarket's profit motives have led to a dearth of valuable questions on those platforms. And, although the wisdom-of-the-crowds effect is definitely real, aggregating bets from uncoordinated individuals has to be a woefully inefficient use of cognitive labour. There are surely better ways of producing knowledge: public forecasting relies on this one because it is the only method that leads to any reasonable level of participation.

Luckily for us, AI solves both the scarcity issue and the incentives issue. Cognitive labour from AI is abundant and cheap, and AI generally follows user instructions rather than personal incentives[^-bYfSFNAmKjjiydDsR-2]. In my view, this removes all "hard blockers" to impactful public forecasting.

Many have sensed this opportunity, of course, but its magnitude and scope might not be widely appreciated. Vitalik Buterin's [2024 post on info finance](https://vitalik.eth.limo/general/2024/11/09/infofinance.html) envisions AIs participating in large numbers of low-volume real-money markets, to aid micro decisions. Scott [imagines](https://www.astralcodexten.com/i/184065379/the-end-of-the-beginning) swarms of bots betting on play-money markets. Fundamentally, though, we've needed prediction markets because of Moloch. Towards the end of his [famous essay](https://www.slatestarcodexabridged.com/Meditations-On-Moloch), Scott writes

> If \[AI\] is on our side, it can *kill Moloch dead*.

Well, when it comes to forecasting, AI *has* killed Moloch dead.

What should we do next?

An AI-first approach
--------------------

Time for some first-principles thinking on how to use AI to generate maximally-useful knowledge about the future. If we try to let go of our models of human-centric public forecasting and imagine an implementation that takes full advantage of AI, what do we come up with? The following ideas suggest themselves to me:

### Coordination over competition

Forecasting a truly hard, valuable question is a complicated research project. To succeed at a complicated research project, you don't aggregate the work of a bunch of uncoordinated individuals all attacking the same question. Rather, you portion out different subprojects to different researchers, giving the most resources to the most promising and high-leverage work, and continually reprioritising as your understanding evolves. You don't aggregate a lot of shallow, highly redundant work; you try to allocate cognitive labour efficiently.

We should expect returns from efficient allocation to be high. Because we're providing a public good, and because the questions we're attacking are so important, we'll be in a regime where adding more cognitive labour beyond what's available will increase the utility of our outputs. By efficiently prioritising research and avoiding redundant work (the latter being a huge issue with human-centric setups), then, we can increase the amount of value generated per FLOP. And, although we'll be in this non-saturated regime, because cognitive labour will be cheap, and because the questions will (presumably) be recognised as important by funders, the amount of FLOPs available will be high. Therefore, increasing value generated per FLOP will lead to a whole lot of extra value.

This is not to say that the system shouldn't involve a competitive element. For example, debate is a powerful truth-seeking technique and is great for legible trustworthiness—knowing that a conclusion has survived an attack by a determined adversary increases my trust in it. Sometimes the most efficient use of labour will be to do adversarial truth-seeking.

### Amortisation and knowledge management

Alongside coordination, another powerful way of increasing value per FLOP is the storage and re-use of hard-won conclusions. We can imagine a "knowledge graph"[^-bYfSFNAmKjjiydDsR-3]that is built up over time, freeing up compute that would have been used on redundant work for novel research or reasoning. Since the system manages the findings, they can be made very robust; they can be checked and re-checked, and their self-consistency can be ensured.

This only really works if there's enough overlap between the knowledge required to forecast on the various questions that the system is processing. But I think this is very likely to be the case for systems specalised for particular domains—and high-impact domains like AI strategy certainly warrant their own bespoke systems.

### Embrace non-forecasting questions

With human-centric public forecasting, we only know how to incentivise participation on objectively-scorable questions. So, when we try to realise anything like the above, we're forced to use forecasts as the unit of research. This is needlessly clunky for an AI-first system. We should expect the AIs in such a system to spend much of their time doing work that looks more like general research than forecasting—compiling datasets, building fermi estimates, profiling influential actors, debating the truth value of claims about the present, understanding the constraints and dynamics of different domains. Non-forecasting knowledge should be a first-class citizen in an AI-first system.

### Build for legible quality

As long as forecasters follow personal incentives and accuracy is the only thing rewarded, rational forecasters will spend 100% of their time on accuracy and 0% on proving that their takes are reasonable (see the comments on Polymarket). With an AI-based system, we are free to choose how to split FLOPs between increasing accuracy and increasing the legibility of (i.e. a reader's confidence in) that accuracy. And, in order to have impact, legibility seems very important and worth spending a lot of FLOPs on. In the extreme case, every non-obvious claim can be traced back to its original source, failed searches for disconfirming information can be captured and displayed, and all non-obvious assumptions can be made explicit and validated.

This is another point in favour of the "knowledge-graph" approach: the research and reasoning that each conclusion rests on can be stored as its children in a DAG, allowing for deep interrogation and progressive disclosure of the evidence and rationale behind each forecast.

### Actively engage with the public discussion

Clearly, public forecasts won't have impact unless they're seen and engaged with by the public. Achieving visibility and engagement for pretty much anything is very labour intensive—which I've been learning as my startup FutureSearch begins to market its product (which you should definitely check out and is totally awesome). The amount of effort required is no joke: even research-heavy industries like pharma spend more on sales and marketing than on R&D.

Public forecasting orgs need arms that look uncomfortably like marketing divisions—not for the orgs themselves, but for the forecasts they produce. In an AI-first setting, this work should of course be done by AIs. AIs can scan the web, looking for important and contentious claims about the future that are actively being discussed, and can strategically insert forecasts into these discussions. We can also prioritise the system's research and forecasting based on what is likely to have the most public impact given the current state of the discussion.

Relatedly, for reasons I touched on in the first section, it's important to ensure that the system's outputs are discoverable and navigable by chatbots—a "knowledge-graph" can be optimised for this.

### Get the incentives right

For all my badmouthing of prediction markets in this post, they do have one pretty significant thing going for them: Because participants are incentivised ~purely based on accuracy, it's usually hard to claim that markets are pushing an agenda. Of course, actors can pay to manipulate probabilities in their favour, but for sufficiently high-volume markets they'll have to pay dearly. We should try to preserve this property, or make it even stronger.

Outside of prediction markets, this makes many forms of for-profit financing problematic. And, even with prediction markets, we've seen how bad incentives can lead to failure to produce useful information.

Fundamentally, information about the future of AI is strongly a public good. Grant-based financing will allow for direct focus on impact, and aligns incentives well—so long as it's given with the explicit purpose of truth-seeking, and no agenda, implicit or otherwise, beyond figuring out what is true about certain particularly important aspects of our predicament. Considerations like this also argue for high transparency on how the system works—e.g. open-sourcing the codebase. 

### Summing up

All in all, to my mind, AI-first public forecasting systems should look like highly-coordinated research projects where AIs collaborate at scale to generate and disseminate bodies of robustly-validated, legibly-accurate knowledge relating to the most important future-facing questions in their specalised domain, financed as a public good explicitly aimed at agenda-free truth-seeking.

How close are we?
-----------------

We can't be very far from AI that is capable of realising this idea. Perhaps we're already there.

To compile a comprehensive empirical overview of the state of all the necessary capabilities would take far too long, and, ultimately, a lot of my signal on this question comes from vibes based on using AIs every day and building products with them. It's hard to write much about vibes, though—especially vibes this audience haven't felt for themselves—so for most of the rest of this post I'll take the less-than-ideal approach of considering empirical evidence for directly-forecasting-relevant capabilities.

Unfortunately, surveying the evidence for such capabilities leaves us with a somewhat unclear picture. In terms of forecasting accuracy, there seems to be some cause for optimism. At the time of writing, FRI’s ForecastBench shows Grok 4.2 at Brier 0.102, while the median of Superforecaster’s forecasts scores 0.085—a gap FRI [describes as “modest”](https://forecastingresearch.substack.com/i/175409833/insight-1-superforecasters-still-outperform-all-models). They project that parity with the Superforecaster aggregate will be reached in January 2027. Importantly, the projection is based on performance of non-agentic, minimally scaffolded models, and by FRI’s own admission, “current results likely underestimate LLM potential”. Similarly, at the time of writing, Metaculus [projects](https://www.metaculus.com/futureeval/) that minimally-scaffolded AIs will outperform the community prediction by June of this year, and an aggregate of pros a year after that. Our forecasting benchmarks at FutureSearch lack human baselines to compare against, but anecdotally, our agents produce work that our forecasters find impressive. Here’s Tom Liptay, erstwhile elite Superforecaster, on our Slack last week:

> I just reviewed the dozen <internal name for a private dataset> questions with the worst Brier scores. This is incredibly impressive work. I was expecting a lot of silly mistakes, but the quality was very high.

In terms of *generating* interesting forecasting questions—an often-overlooked bottleneck to impactful public forecasting—most of the evidence comes from our recent [paper](https://www.arxiv.org/abs/2601.22444). There, we were able to generate questions that correctly ranked models of increasing capability up to the frontier, and that resolved normally at a rate higher than what we see on Metaculus[^-bYfSFNAmKjjiydDsR-4].

This is quite weak evidence, however. On the accuracy side, the systems tested were very minimal—certainly a far cry from the one I imagined above (and as Mantic have shown, there are [returns to fancy scaffolding](https://www.theguardian.com/technology/2025/sep/20/british-ai-startup-beats-humans-in-international-forecasting-competition)). And they were benchmarked on short-term questions that, in terms of difficulty, don't really approach most truly valuable questions. On the question generation side, our pipeline was optimised to produce question sets for evaluating and developing general-purpose AI forecasters, not for having social utility. In general, for understandable reasons, the forecast-benchmarking community (FutureSearch included) hasn't been tracking the ability of high-effort systems to produce difficult, valuable forecasts.

To quickly get more signal as to whether the most forecasting-related capabilities are ready, then, I put together a small proof of concept.

An experiment
-------------

### Setup

Starting from the question-generation pipeline we described in our paper, I spent a few days vibecoding with the [everyrow SDK](https://github.com/futuresearch/everyrow-sdk) to see how far I could get generating questions and forecasts that can helpfully inform peoples' thinking and the public discussion on AI strategy, via minimal implementations of some of the above ideas.

To generate questions where forecasts would be useful, I jotted down twelve high-level AI-strategy questions (sample: Will early instances of ASI systems be aligned or misaligned? Will AI lead to extreme concentration of power and wealth? Will AI capabilities that allow us to determine what’s ethically best from a long-term perspective arrive before capabilities whose manner of deployment will dramatically affect the long-term future?), and built a pipeline that first generates informative, lower-level subquestions from them, and then—using a lightly-modified version of the workflow from our question-generation paper—generates even-lower-level forecasting questions, designed to be informative for the subquestions.

To get a sense for how well AI can prioritise forecasting research when it has a reasonably large budget available, I looked over the results and picked the three most promising-looking forecasting questions in terms of interestingness and resolution-criteria quality[^-bYfSFNAmKjjiydDsR-5]from each high-level question, ending up with thirty-six questions. I then prompted an Opus agent to generate ten meaty subquestions for each.

Finally, I chose the five most interesting looking decompositions, ran an Opus agent on every research subquestion, ran another agent afterwards to collect any final missing information, and used a simple prompt to map from the research to a forecast.

You can play with the pipeline in this [notebook](https://colab.research.google.com/drive/1I0J7g40MsVA1A78yfBUEg9UWP0uVrUmG). (You'll need to sign up and generate an everyrow API key [here](https://everyrow.io/) to run it. The free tier should be enough for an end-to-end run.)

### Results

The outputs can be explored via these hastily-vibecoded HTML files:

*   [Initial forecasting questions](https://storage.googleapis.com/fs-aufait-public/all-trees.html)
*   [36 questions with research subquestions](https://storage.googleapis.com/fs-aufait-public/research-questions.html)
*   [5 forecasts](https://storage.googleapis.com/fs-aufait-public/forecasts.html)

The results show that AIs are in fact (sometimes) capable of carrying out some of the key tasks that would underpin an AI-first public-forecasting effort to a good standard. Browsing the HTML files, you'll see instances of AI:

*   Formulating insightful future-facing questions that have a strong bearing upon important AI strategy questions. Examples:
    *   Will the US government enact strong regulations to ensure that ASI is developed and deployed safely and wisely? → Will a 'warning shot' or limited catastrophe occur that galvanizes political will before ASI is fully deployed?
    *   Will AI capabilities that allow us to determine what's ethically best from a long-term perspective arrive before capabilities whose manner of deployment will dramatically affect the long-term future? → Will the "reasoning gap" between formal capabilities (math/code) and normative intelligence widen as reasoning techniques like CoT show diminishing returns in ethical domains?
    *   Will early instances of ASI systems be aligned or misaligned? → Will early ASI systems display strong convergent instrumental drives, such as power-seeking and self-preservation, by default?
*   Identifying good forecastable proxies for higher-level questions. Examples:
    *   Will mechanistic interpretability tools advance sufficiently to detect hidden misaligned cognitions in ASI prior to deployment? → Will researchers demonstrate a mechanistic interpretability technique that decodes RL-induced steganography with >70% accuracy by 2027? \[note that the resolution date is likely too early here: more on this later\]
    *   Will international cooperation establish effective monitoring and enforcement mechanisms to restrict the development of dangerous AI applications? → By the end of 2027, will the US and China establish a joint working group tasked with verifying compliance with AI safety commitments?
    *   Will generative AI enable the creation of personalized, interactive propaganda that is significantly more effective at shaping citizen behavior than traditional state media? → Will a new top-tier peer-reviewed study published by 2029 demonstrate that interactive AI is significantly more effective than static media at inducing durable changes in political beliefs?
*   Producing insightful research questions that get to the heart of forecasting problems. Examples:
    *   For "Will a Western frontier AI lab confirm an instance of unprompted strategic sandbagging by \[December 31,\] 2027?":
        *   What are the theoretical and empirical conditions under which training processes could produce emergent sandbagging goals rather than merely sandbagging capabilities?
        *   How does the scaling of model capabilities correlate with propensity for in-context scheming behaviors, and what does this imply for models expected by late 2027?
        *   What is the likelihood that deliberative alignment training and anti-scheming specifications will prevent emergent sandbagging in frontier models released through 2027?
    *   For "Will a US federal court invalidate any state AI safety law on federal preemption grounds by June 2028?"
        *   What existing federal statutes or regulations could serve as a basis for implied or conflict preemption of state AI laws?
        *   What is the likelihood that Congress will enact federal AI legislation with express preemption provisions before June 2028?
        *   What specific provisions of California SB 53, Colorado SB 24-205, and New York's RAISE Act are most vulnerable to federal preemption challenges?
*   Producing accurate and comprehensive research on fairly tricky subquestions. Looking at the forecasts HTML, you'll be brought nicely up to speed with:
    *   The current evidence for LLM situational awareness
    *   What we've observed so far (and haven't) in terms of sandbagging
    *   The theory of the emergence of sandbagging-inducing goals
    *   Trump's recent task force for demolishing state AI laws
    *   Federal laws (or the absence thereof) that may preempt state AI laws
    *   The (worryingly poor) state of security of present-day benchtop DNA-synthesis machines
*   Producing reasonable probabilities from this research. In the forecasts HTML you'll find reasonable (rough) probability decompositions, and (mostly) reasonable probability assignments.

However, these capabilities manifest unreliably.

*   For some high-level questions, models need nudging not to focus on irrelevant aspects in their decompositions. For the "wisdom/epistemics-before-transformative-capabilites" question, Gemini conflated "AI capabilities that allow us to determine what's ethically best from a long-term perspective" with "aligned AI" and had to be nudged to focus on things like forecasting and philosophy instead. Even with the nudge, it doesn't focus on those capabilities as much as I think it should.
*   Upon close inspection, many of the fully-operationalised forecasting questions are slightly wonky and need improvements to their resolution criteria. Gemini would often ask about out-of-date LLMs and saturated benchmarks, would put unnecessary constraints on resolution criteria (e.g. "The result must either come from a major AI lab, or from the authors of this specific relevant paper"), and would often choose resolution dates that are too soon to make the question interesting. I corrected these issues in an (automated) post-processing step for the questions I brought forward to the next stage.
*   Research-question generation sometimes fails to consider exogenous factors and focuses too much on the internal mechanics of the question. And, sometimes, on questions that are not explicitly about AI but that nonetheless turn on what happens with AI, nowhere near enough of the budget goes towards questions on AI.
*   Research is occasionally treated too much as an evidence-compiling exercise and not enough as a reasoning exercise. For example, for the question "How transferable are findings from 'model organism' sandbagging research to predicting emergent sandbagging in naturally trained frontier models?", Opus mostly compiles a list of (often tangentially) relevant experiments and findings, rather than a thoughtful theoretical analysis of how model-organism sandbagging might relate to "natural" sandbagging.
*   There's the occasional bit of wonky forecasting reasoning. On the sandbagging question, Opus puts too much emphasis on the fact that "natural" sandbagging has not yet been observed despite the UK AISI analysing ~3k traces, probably over-anchoring on this big shiny number while not thinking enough about on how things might change with more capable models over the next two years. Also, you'll find one or two underconfident-looking probability assignment in its probability decompositions.

To give very a rough sense of overall performance on the dimensions I've used above, here are some vibed marks out of 10, where 10 means "ready to go out of the box", 5 means "will require a lot of bespoke engineering to get working well enough" and 0 means "would be an utter waste of time trying to get current models to do this":

*   Identifying important future-facing questions that inform big AI strategy questions: 9/10
*   Identifying forecastable proxies for high-level questions: 6.5/10
*   Producing insightful research questions that get to the heart of forecasting problems: 7.5/10
*   Researching those questions: 7/10
*   Forecasting from evidence: 6.5/10

What next?
----------

Based on this evidence, and on the aforementioned vibes, I don't think we're at the point where implementing a system of the kind I have in mind and having it autonomously produce truly high-quality forecasts on truly useful questions will be anything like straightforward. But, to me at least, evidence and vibes show that we are very close to (or are at) the point where a genuinely useful version of such a system—especially one that initially relies somewhat on human guidance and curation—is feasible to build given a strong, dedicated effort.

Is now the right time to start? The most obvious argument against doing so is that capabilities will improve, leading to wasted work. But I think that there is much we can do that's robust to this: figuring out how the "marketing" side of it should work (which likely needs a lot of empirical experience to get right), figuring out how to make accuracy maximally legible and how much compute to devote to this (same), developing systems for large-scale research prioritisation (likely robust to LLM advances for a while), and for keeping large bodies of research consistent and up to date (same). Capabilities are improving fast, and we may soon land in (or already be in) a world where a system like this can have real impact, influencing discussions and decisions at all levels and helping us onto a better trajectory. The need for good knowledge early is strong. And, there are good reasons to believe that starting work earlier will lead to a more accurate and persuasive system later on.

Personally, I think now is the time, and I want to give it a shot with FutureSearch. I talked above about the importance of how a project like this is financed, and we as a company are fully committed to building (and using all our investor dollars on) a great, impactful, for-profit product in everyrow, so we'll be financing this work separately, ideally through grants[^-bYfSFNAmKjjiydDsR-6]. I'm excited to see what we'll build.

*Thanks to Dan Schwarz, Nikos Bosse, and Stacey Svetlichnaya, for helpful feedback.*

[^-bYfSFNAmKjjiydDsR-1]:  

[^-bYfSFNAmKjjiydDsR-2]:  

[^-bYfSFNAmKjjiydDsR-3]:  

[^-bYfSFNAmKjjiydDsR-4]:  

[^-bYfSFNAmKjjiydDsR-5]:  

[^-bYfSFNAmKjjiydDsR-6]: