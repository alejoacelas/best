---
title: "AI Tools for Strategic Awareness: Forecasting & OSINT"
url: https://www.forethought.org/research/design-sketches-tools-for-strategic-awareness
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. forethought/design-sketches-for-a-more-sensible-world.md; Forethought design sketches for strategic-awareness tools — coordination/epistemics"
---

[Design sketches for a more sensible world](/research/design-sketches-for-a-more-sensible-world)

Part 3 of 4

[](/research/design-sketches-angels-on-the-shoulder)[Next](/research/design-sketches-defense-favoured-coordination-tech)

# Design sketches: tools for strategic awareness

[Owen Cotton-Barratt](/people/owen-cotton-barratt)[Lizka Vaintrob](/people/lizka-vaintrob)[Oly Sourbut](/people/oly-sourbut)[Rose Hadshar](/people/rose-hadshar)

## Authors

## Citations

Cite

## Citations

PDF

Contact

10th February 2026

#### Design sketches: tools for strategic awareness

Part of:

[Design sketches for a more sensible world](/research/design-sketches-for-a-more-sensible-world)

Introduction

Why this matters

Ambient superforecasting

Feasibility

Possible starting points // concrete projects

Scenario planning on tap

Design sketch

Feasibility

Possible starting points // concrete projects

Automated OSINT

Design sketch

Feasibility

Possible starting points // concrete projects

Cross-cutting thoughts

Adoption pathways

Other challenges

[AI Narration] Design sketches: tools for strategic awareness

[](https://pinecast.com/listen/79ea0032-34c0-4635-8d01-9e27d02065f1)

Playback speed0.5×0.75×1×1.25×1.5×1.75×2×

Volume

0:00 of 24:080:00|24:08

[](https://pnc.st/s/forecast/listen_in/SPOTIFY)

[](https://pnc.st/s/forecast/listen_in/APPLE)

[](https://www.youtube.com/@forethought_org)

[](https://podcastaddict.com/podcast/forecast/5745915)

[](https://pnc.st/s/forecast/listen_in/POCKETCASTS)

[](https://pnc.st/s/forecast/listen_in/OVERCAST)

[](https://pinecast.com/feed/forecast)

## Introduction

[](/research/design-sketches-tools-for-strategic-awareness#introduction "Link to heading")

We think that near-term AI could do a lot to help people and organizations have a deeper strategic awareness of the world, and the space of potential pitfalls and opportunities.

We want to help people envision this. In this piece, we will sketch three potential technologies:1

## 

  * Ambient superforecasting — When people want to know something about the future, they can run a query like a Google search, and get back a superforecaster-level assessment of likelihoods

  * Scenario planning on tap — People can easily explore the likely implications of possible courses of actions, summoning up coherent grounded narratives about possible futures, and diving seamlessly into analysis of the implications of different hypotheticals

  * Automated OSINT — Everyone has instant access to professional-grade political analysis; when someone does something self-serving, this will be transparent




One important note here is that these tools are double-edged swords, and could empower unsavoury actors as much as or more than society at large.2

## 

Tools for strategic awareness are most likely to be beneficial if they are broadly distributed. Our best guess is that developing these tools will have a positive effect overall, but this is a judgement call that’s worth revisiting. 

We’ll start by talking about why these tools matter, then look at the details of what these technologies might involve before discussing some more cross-cutting issues at the end.

## Why this matters

[](/research/design-sketches-tools-for-strategic-awareness#why-this-matters "Link to heading")

First, a bit about why this matters. Together these technologies could help a wide variety of actors to have a more grounded and accurate perspective on their situation. This would be good for individuals in obvious local ways: people would be more epistemically empowered and better able to make decisions in their own best interests. And collectively, there would probably be important common knowledge effects: if lots of people have access to similar analyses, it gets much harder to manipulate narratives or exploit information asymmetries.

Zooming out even further, better strategic awareness could help humanity to handle some of the big challenges that are heading towards us:

  * At the moment, we’re heading towards a [world of advanced AI](https://strangecities.substack.com/p/the-crucible) with very little understanding of the precise trajectory we're on, which might be the key branch points, and what options we'll have available. This is a huge risk factor, and makes it much more likely than otherwise that we’ll make costly mistakes. We don’t need to fatalistically accept this situation — we can intervene on it by trying to improve our strategic awareness capabilities.

  * AI progress may get so fast that it’s hard for humans to keep up. Automating human-compatible strategic awareness could help us keep pace with faster technological change.

  * Relatedly, better strategic awareness could help us to steer away from failure modes like [gradual disempowerment](https://gradual-disempowerment.ai/), which without awareness are very difficult to notice and stop.




## Ambient superforecasting

[](/research/design-sketches-tools-for-strategic-awareness#ambient-superforecasting "Link to heading")

The most direct form of strategic awareness is simply knowing what's likely to happen. Today, when people want to understand how situations might develop, they mostly rely on intuition, pundit commentary, or — if they're unusually diligent — tracking down relevant prediction markets or expert forecasts. But this is slow and effortful, and even experts are often poorly-calibrated. Future AI driven technologies could make general forecasting as much of a science as weather forecasting is today,3

## 

and calibrated probabilistic predictions as accessible as a search query.

**Design sketch:** An automated (and integrated) forecasting system that takes in natural-language questions, operationalizes them, then estimates likelihoods, and finally distills and communicates the answers to the user.

## Image

How this could work under the hood:

  * The tool explores possible operationalizations of the question4

## 

and selects a few (perhaps with user feedback)

  * For each operationalized question, it runs a specialized system (fine-tuned for forecasting performance), which pulls some reference classes then searches for other relevant info (maybe including private data from the user) to produce calibrated probabilities/distributions

  * The results are then distilled and translated into a format that works well for the specific user (including an explanation of how the answers might diverge from what the user is imagining/trying to predict)




The tool might also caution users when questions concern areas in which its track record is weaker, suggest related questions or precursors/trends to pay attention to, pull out different scenarios, explore what the key disagreements driving variation in forecasts are, etc.

### Feasibility

[](/research/design-sketches-tools-for-strategic-awareness#feasibility "Link to heading")

A basic version of this is already approachable. LLMs can generate operationalizations of natural-language questions, pull relevant base rates and information, and produce probability estimates. Current systems are comparable to strong human performers.5

## 

Compared to a baseline of intuition and pundit commentary, even a system that's mediocre by superforecaster standards could be useful if it was smoothly integrated into people’s workflows (handling operationalization in the background and providing useful summaries and explanations in a timely fashion).

The challenges for a truly great version center on quality of predictions, calibration, and quality of explanations. Sufficiently good systems might be better than any unaided human, so that it becomes almost mandatory to consult them. And while current LLMs have inconsistent calibration, and often don't know when they're out of distribution, this is a key problem because some of the questions that matter most are among those where base rates help least and novel reasoning matters most.

There may be good pathways to improvement. Forecasting is a domain with clear feedback signals: questions resolve, and you can score predictions. This enables fine-tuning on track record, and potentially self-play setups where systems generate questions, make predictions, and learn from outcomes. LLMs trained on historical data with strict cut-off dates could provide a testing ground for experiments about the best methods. A system that routes questions to specialized sub-models based on domain, and that learns over time which question-types it handles well, could improve substantially through iteration.

### Possible starting points // concrete projects

[](/research/design-sketches-tools-for-strategic-awareness#possible-starting-points--concrete-projects "Link to heading")

How could we work towards this target? Here are some ideas:

  * **Build a baby version of the tool.** This could help us notice obstacles or opportunities that would have been hard to predict in advance. You might focus on the tech side here (e.g. seeing how much value you can get out of current (fine-tuned) LLM agents with some scaffolding) or on the UI side (e.g. assuming that the tech will improve and focusing on making an interface that people love).

  * Build **subcomponents**. Ideas: 
    * Focus on operationalization and question generation. For example, you could build a tool that explores all the ways in which operationalizations might fail to capture what was really intended with the forecast

    * Build tools that help forecasters and forecasting systems to find and collect reference classes

    * Develop automated “forecaster” tools that put numbers or distributions on operationalized questions

    * Build a system which explains forecasts to users

  * **Build ways to develop and test this kind of tech.** Ideas: 
    * Set up a platform that automatically generates as many operationalized forecasting questions as possible (on some specified time scales) to run ongoing tests comparing different automated forecasting systems6

## 

    * Alternatively, try to make good simulated environments for this, and explore how well forecasting performance in simulated environments translates to real-world forecasting performance

    * Explore “fuzzy prediction grading” setups

    * Curate high-quality datasets of natural-language questions paired with sets of operationalized questions that help to answer them

    * Try to get a self-play set-up to work, where systems generate questions, make predictions, then learn from outcomes

    * Collect historical data with strict cut-off dates to use as a testing ground for the best forecasting methods (there are existing attempts to do this even [for long-ago cutoff dates](https://www.broadstreet.blog/p/history-llms-giving-the-past-a-voice), although [implementation details can pose problems](https://arxiv.org/abs/2506.00723))

  * **Integrate forecasting features into existing infrastructure.** Work with tech infrastructure providers to try integrating _some_ forecasting-like features into their platforms.




## Scenario planning on tap

[](/research/design-sketches-tools-for-strategic-awareness#scenario-planning-on-tap "Link to heading")

Point predictions are useful, but many decisions require exploring possibility space more broadly. What happens if we take action A versus action B? What are the key uncertainties, and how do outcomes vary depending on how they resolve? Scenario planning addresses this — but today it's expensive and slow, typically requiring facilitated workshops and significant expert time. The right AI scaffolding could automate much of this process, letting users quickly generate and explore coherent narratives about possible futures.

Where ambient superforecasting answers "what will probably happen?", scenario planning answers "what might happen, and what would drive different outcomes?".

### Design sketch

[](/research/design-sketches-tools-for-strategic-awareness#design-sketch "Link to heading")

A platform for _fully automated scenario planning_. The user enters a textual description of a scenario and proposed intervention. The system helps them to make key decisions about scenario set-up, then runs hundreds of natural-language simulations to explore how the situation could evolve, and reports back key statistics, hinge points, and takeaways, with a queryable interface.

## Image

Under the hood, it does something like:

  * Fleshes out the scenario, with possible choices about setup detail 
    * Letting the user choose option A vs B vs C, treat this as a variable to explore, or write their own detail

  * Analyses the scenario to pick out key actors and forces (spinning up background research processes if appropriate to better inform the model)

  * Steps forwards in time, using natural language simulation to get decisions from actors (as though they are human players in a roleplaying game), and a “game-master” system making judgement calls about the relative impact of different decisions and background forces

  * Runs this scenario many times over

  * Boots up an automated research project, analysing key patterns in the data represented by the various scenario runs

  * Returns a queryable interface summarizing likelihoods of different key outcomes, highlighting important causal dynamics, and allowing “what if” exploration of alternative interventions




Desirable extra features:

  * Toolset to integrate relevant historical data and existing thinking and context as input data for the scenario

  * Integrated mathematical models for more accurate simulation of parts of the scenario

  * Search for leverage, flagging: 
    * low-probability high-impact scenarios

    * parts of the scenario where small changes could swing the outcome




### Feasibility

[](/research/design-sketches-tools-for-strategic-awareness#feasibility-1 "Link to heading")

Again, a basic version is eminently achievable: LLMs can generate plausible narratives, simulate agent decisions, and run many scenarios cheaply. Even without strong validation, a tool that helps users explore a wider space of possibilities than they'd consider otherwise could have value — scenario planning has always been about stretching thinking rather than robust prediction.

The challenges for a truly great version center on validation and trust. If the system generates scenarios about 2030, we can't check whether they're informative until 2030. We can use proxies — backtesting on historical scenarios, consistency checks, comparison with expert judgment — but none fully resolve whether outputs capture real dynamics versus just being coherent stories. The "game master" making judgment calls about how situations evolve is doing a lot of work, and systematic biases there would contaminate everything downstream.

Pathways to improvement are less clear than for forecasting, because feedback is slower and noisier. But some approaches might help: running scenarios on historical situations where we know how things played out; comparing scenario outputs against prediction markets or expert forecasts on near-term questions; building in explicit uncertainty about which dynamics are driving outcomes. Over time, the track record of the parts of scenarios that do resolve could inform trust in the parts that don't.

There are potentially strong synergies between forecasting and scenario planning. As forecasting gets better, those expert judgements could mean better, more grounded judgement calls from the “game master” system in scenario planning. And one tool that advanced forecasting systems may want to use (after experimental validation) is scenario planning to think through novel situations.

### Possible starting points // concrete projects

[](/research/design-sketches-tools-for-strategic-awareness#possible-starting-points--concrete-projects-1 "Link to heading")

  * **Learn from people doing scenario planning.** Work with people already doing scenario planning work to see which pieces can most productively be automated and how.

  * **Build an LLM-powered wargame simulator.** Develop a system that can run through many instances of a game whose rules have already been established.

  * **Use LLMs with a historical cutoff to test methodologies.** Work with LLMs with a historical knowledge cutoff to do science on which scenario planning methodologies are most informative about future developments.




## Automated OSINT

[](/research/design-sketches-tools-for-strategic-awareness#automated-osint "Link to heading")

The previous technologies focus on understanding the future. But strategic awareness also requires understanding the present — getting an accurate picture of the world, knowing what to pay attention to, and understanding what actors are doing and why. OSINT analysts and investigative journalists do this kind of analysis, but it's time-consuming and therefore expensive. This both means that most public coverage is underinformed, and that large organisations and state intelligence agencies often have an information advantage over the rest of society. Proper automation has the potential to make this kind of analysis cheap and routine, making it much easier for broader society to understand what’s happening.

Where forecasting and scenario planning help with "what will happen?", automated OSINT helps with "what's really going on?".

### Design sketch

[](/research/design-sketches-tools-for-strategic-awareness#design-sketch-1 "Link to heading")

An AI-driven OSINT system (that can also make use of private data) lets users “double-click” on any reported action or statement, and get a report showing key hidden variables, likely incentives, and inferences that can be drawn.

## Image

Under the hood, this might look something like:

  1. A database — hard info + cached inferences/hypotheses about orgs/people

  2. An analysis engine — takes a news story, maps out how it relates to the info in the database, and makes fresh inferences

  3. A summarizer, distilling just the most important points to report back to users, in a queryable interface

  4. Integration with other tools to make asking the tool and granting relevant data access trivial




Start with a single domain (e.g. geopolitics; frontier tech), recruit experts to advise on best practice, and build a system that for any news story returns a page or so of bullets showing plausible incentives, noticeable updates on hidden variables, and other key facts.

### Feasibility

[](/research/design-sketches-tools-for-strategic-awareness#feasibility-2 "Link to heading")

Much relevant information is public — financial disclosures, organizational structures, stated positions, historical behavior. LLMs are reasonably good at synthesizing this material and generating hypotheses about incentives. Even a system that just surfaces "here are three possible explanations for this action, with evidence for each" could beat the baseline of news coverage that skips incentive analysis entirely. 

However, there are still some major challenges.

**Private information.** Much relevant information is also private. Actors with privileged access to that information will have a big advantage. And there are factors which could compound this problem:

  * The situations where this analysis would be most valuable are often where information is most hidden. 

  * Automated OSINT itself will create further incentives to selectively reveal information.




Our best guess is that there’s so much room for improvement based on public information, that automated OSINT would still be net positive — but we’re not confident, and this would be good to stress-test.

**Accuracy and confidence calibration.** Generating plausible theories is easy; knowing which is correct is hard, sometimes impossible from public information alone. And there's a risk of false confidence — presenting hypotheses as more certain than they are. If these analyses are broadly relied upon, this could cause harm. Pathways to improvement might include: 

  * Building a track record in domains where incentives are relatively legible and outcomes eventually become clear (corporate behavior around earnings, documented geopolitical dynamics).

  * Learning which types of situations the system analyzes well versus poorly.

  * Integrating with forecasting tools so that hypotheses generate testable predictions. 




The goal would be a system that gets better at knowing what it knows — distinguishing cases where it can say something meaningful from cases where it's just pattern-matching.

### Possible starting points // concrete projects

[](/research/design-sketches-tools-for-strategic-awareness#possible-starting-points--concrete-projects-2 "Link to heading")

  1. **Learn from OSINT specialists.** Work with OSINT analysts and investigative journalists to identify the parts of their workflows that would most benefit from automation, and how best to do that.

  2. **Build a browser extension.** Develop a browser extension that allows users to click on highlighted claims and see a synthesis of existing OSINT information on the claim.

  3. **Create a newsletter for the educated public.** Initially this could just be a system which takes existing OSINT analysis and summarises it. Eventually the system could do this analysis itself. Transparent methodology could help the newsletter to be more trusted than traditional media, which is often politically slanted in its analysis.

  4. **Auto-Bayesian controversy resolver.** When two parties make conflicting claims, calculate the relative probabilities (for example, "Company says hack was nation-state (23% likely), while competitors say it was an insider threat (77% likely)"). Show which evidence supports which hypothesis, and let the reader put in their own priors to infer conclusions.




## Cross-cutting thoughts

[](/research/design-sketches-tools-for-strategic-awareness#cross-cutting-thoughts "Link to heading")

### Adoption pathways

[](/research/design-sketches-tools-for-strategic-awareness#adoption-pathways "Link to heading")

This cluster of technologies share some characteristics:

  * They’re potentially powerful forms of what is essentially knowledge-creation

  * They may require significant time investment from the user’s perspective to get the most out of them, and may require large inference budgets




This means that rather than being mostly a consumer-facing technology, the primary users are more likely to be governments, companies, and other organizations. Consumers may eventually use some version of these technologies (especially after they get both good and cheap), but in the interim the main way that they are likely to benefit the broader public passes through other organisations — as is true for many existing mechanisms of knowledge production. For instance, forecasting features might begin to be embedded in search; or OSINT analysis could form the basis of news articles, or a new verifiably neutral site able to provide fair analysis of politically sensitive situations.

Getting tools adopted by these intermediary organisations is a different kind of challenge to getting broad adoption. The tools don’t just need to be good for the organisation overall - adopting them also needs to be in the interests of some particular person or group within the organisation, who’ll need to put their reputation and organisational resources on the line to get it to happen. Smart adoption strategies for tools for strategic awareness are likely to be sensitive to these dynamics — working out who might be the internal champions for the new technology, and what they’d need to want it.

Ultimately a central challenge will be trust. How much do people believe the analysis that is coming out of these tools? Ideally this trust will be grounded in track record (so one key thing to aim for is making the tech good and then demonstrating that); although of course many other factors feed into trust.

### Other challenges

[](/research/design-sketches-tools-for-strategic-awareness#other-challenges "Link to heading")

As well as adoption challenges, there are a few other issues for tools for strategic awareness:

  * **Timing.** Some of these technologies may need to be quite good before there's strong demand. 
    * This suggests that for some applications, the right approach might be building foundational components and track record now, while waiting for capabilities to improve. 

  * **Harms from overconfidence.** If adoption goes _too_ well — if people trust the outputs of these tools too much — this could lead to badly calibrated decisions. 
    * This makes it particularly important to track and publish where these systems perform well versus poorly.

  * **Misuse.** As we mentioned above, all of these tools could be used to further bad ends. 
    * Two classes of bad effects we might worry about are: 
      * Maybe these tools could make it easier for people to scheme, hatching plans that would help them personally at the expense of the broader world (potentially in illegal ways).

      * If the tools really reward ever-larger investment of inference compute to get better and better performance, this could provide a mechanism whereby the rich get richer — those actors who can afford the strongest foresight using it to outmanoeuvre or manipulate others.

    * It could be important to better anticipate and work to head off these failure modes!




_This article has gone through several rounds of development, and we experimented with getting AI assistance at various points in the preparation of this piece. We would like to thank Anthony Aguirre, Max Dalton, Max Daniel, Raymond Douglas, Owain Evans, Kathleen Finlinson, Lukas Finnveden, Ben Goldhaber, Ozzie Gooen, Hilary Greaves, Oliver Habryka, Isabel Juniewicz, Will MacAskill, Julian Michael, Justis Mills, Fin Moorhouse, Andreas Stuhmüller, Stefan Torges, Deger Turan, and Jonas Vollmer for their input; and to apologise to anyone we've forgotten._

### Footnotes

[](/research/design-sketches-tools-for-strategic-awareness#footnote-label "Link to heading")




## Citations

### [Design sketches for a more sensible world](/research/design-sketches-for-a-more-sensible-world)Article Series

Part 3 of 4

We think that near-term AI systems could transform our ability to reason and coordinate, significantly improving our chances of safely navigating the transition to advanced AI systems. This sequence gives a series of design sketches for specific technologies that we think could help. We hope that these sketches make a more sensible world easier to envision, and inspire people to start building the relevant tech.

[Design Sketches: Angels-on-the-Shoulder](/research/design-sketches-angels-on-the-shoulder)[Design sketches: defense-favoured coordination tech](/research/design-sketches-defense-favoured-coordination-tech)
