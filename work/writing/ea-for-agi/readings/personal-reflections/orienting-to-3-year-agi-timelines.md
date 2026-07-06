---
title: "Orienting to 3 year AGI timelines"
author: "Nikola"
date: 2024-12-22
url: https://forum.effectivealtruism.org/posts/tdfDfFyqbvBF9DdeY/orienting-to-3-year-agi-timelines
fetched: 2026-07-06
via: forum-graphql
topic: "personal-reflections"
note: "A widely-read personal-planning essay on reorienting life and work to very short timelines."
---

EDIT 2026/02/12: My median for AGI is now EOY 2029. [My quantitative predictions for 2025 were a bit too bullish](https://x.com/nikolaj2030/status/2011574412752072747), and they translated to smaller real-world impacts (on the rate of AI progress and adoption) than I expected.

* * *

My median expectation is that AGI[^44f4sjs66x9] will be created 3 years from now. This has implications on how to behave, and I will share some useful thoughts I and others have had on how to orient to short timelines.

I’ve led multiple small workshops on orienting to short AGI timelines and compiled the wisdom of around 50 participants (but mostly my thoughts) here. I’ve also participated in multiple short-timelines AGI wargames and co-led one wargame.

This post will assume median AGI timelines of 2027 and will not spend time arguing for this point. Instead, I focus on what the implications of 3 year timelines would be. 

I didn’t update much on o3 (as my timelines were already short) but I imagine some readers did and might feel disoriented now. I hope this post can help those people and others in thinking about how to plan for 3 year AGI timelines.

The outline of this post is:

*   A story for 3 year AGI timelines, including important variables and important players
*   Prerequisites for humanity’s survival which are currently unmet
*   Robustly good actions

A story for a 3 year AGI timeline
=================================

By the end of June 2025, [SWE-bench](https://www.swebench.com/) is around 85%, [RE-bench](https://arxiv.org/abs/2411.15114) at human budget is around 1.1, beating the 70th percentile 8-hour human score. By the end of 2025, AI assistants can competently do most 2-hour real-world software engineering tasks. Whenever employees at AGI companies want to make a small PR or write up a small data analysis pipeline, they ask their AI assistant first. The assistant writes or modifies multiple interacting files with no errors most of the time. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfda0zG2NRleQFeGbf6304xcMAKCDdCFnldRfDjAvH9i6VFQJ-70gMpmv9oHnCQJTOpobyU-wwgzmi-Vnt9D_hOSCrXWL8Gt2zwe3wEB19gP8ASwmVF6zsW9wG4Xmierq7-REljDA?key=fvQwdvrRhtYY1z1ndPRBG1Cn)

Benchmark predictions under 3 year timelines. A lot of the reason OSWorld and CyBench aren’t higher is because I’m not sure if people will report the results on those benchmarks. I don’t think things actually turning out this way would be strong evidence for 3 year timelines given the large disconnect between benchmark results and real world effects.

By the end of 2026, AI agents are competently doing multi-day coding tasks. The employees at AGI companies are thoroughly freaked out and expect that AI which can beat humans at 95% of virtual jobs is probably going to be created within 2 years. They also expect that superintelligence will follow soon after. The government realizes that AI will be decisive for national power and locks down the AGI companies in late 2026. This takes the form of extreme government oversight bordering on nationalization. Progress stays at a similar pace because of the race with other nuclear weapons states. 

Starting in 2027, most of the company’s quality-weighed workforce is made up by AI agents. The main decisions made by leadership are about allocating their workforce of millions of agents to various research areas, including AI R&D, safety, commercial applications, military applications, cyber, operations, communications, policy work, and most other types of work done on computers at the company. The human employees don’t matter much at this point except to attempt to help answer questions for groups of AI agents that get stuck and want a second opinion on their work.

AGI is created by the end of 2027. History probably doesn’t end here, but I will not go describe the post-AGI world in this post for brevity.

Important variables based on the year
-------------------------------------

Note that there’s a significant shift in dynamics in the middle of the story, which also imply significant shifts in the strategic landscape.

### The pre-automation era (2025-2026). 

In 2025 and 2026, humans are still doing most of the work. Most important questions center about allocations of humans and commercial and regulatory pressures placed on AI labs and the rest of the supply chain. 

In the pre-automation era, humanity’s main priority should be very quickly finding safe ways to delegate research to AI agents. The main reason to do any type of safety-oriented research is to control these precursor agents who will later continue the research. 

Another priority of the pre-automation era is finding ways to tell whether our current safety interventions will be adequate to prevent large numbers of AI agents from scheming or doing other undesirable things. Part of this is also setting up systems to pause and convince others to pause in case an adequate safety case can’t be made. This will get harder as the race heats up.

### The post-automation era (2027 onward). 

After 2026, AIs are doing most of the work. At this point, the research is mostly out of human hands, but the human employees are still involved in high-level decisions and interfacing with humans outside the AGI company. By the end of 2028, humans can no longer contribute to technical aspects of the research.

The main questions center around the allocation of AI agents, and their mandated priorities. Some important questions about this period are:

1.  How good is the broad research plan that the AI agents are pursuing?
    *   For example, if the human in charge of initially scoping out the research direction is someone who is fundamentally confused about AI safety, the hopes of aligning models might be doomed despite an initially well-meaning population of AI agents.
2.  How many company resources are invested in safety-oriented research?
    *   Allocating 0.1% of compute vs 25% of compute to safety might make a large difference in the success of the safety work that is done.

Important players
-----------------

*   **AGI Company Leaders - **they steer the AGI company’s broad direction.
*   **Safety researchers**
    1.  **Internal human AI safety researchers** \- they inform the pre-automation and post-automation research plans, and do much of the pre-automation safety research that gets implemented. They oversee the automated safety researchers.
    2.  **Internal automated AI safety researchers - **they do the bulk of the automation-era research that gets implemented.
    3.  **External human AI safety researchers **\- they do pre-automation research. A small subset of it gets implemented internally. They also critique the public parts of the pre-automation and post-automation research plans from the outside. They likely become irrelevant during the post-automation era as the gap between public and private knowledge will widen for national security reasons.
*   **The US Government** **- **places pressures on AGI companies as informed and pressured by **other governments**, the **US AISI (or other government agencies)**, **Think Tanks**, **High Status Scientists, **and **The Public**. Probably nationalizes/oversees the companies starting around AGI, very likely before superintelligence.
*   **Trailing AGI companies - **place competitive pressures, set safety precedents. Possibly eventually collaborate or get acquired. If they don’t collaborate or get acquired by the main AGI project, they likely get much of their compute seized before ASI.
*   **Bad actors** - will attempt to steal and/or misuse the AI.

Note that "The AI Safety Community" is not part of this list. I think external people without much capital (fiancial, social,  intellectual, or other kinds) just won't have that much leverage over what happens.

Prerequisites for humanity’s survival which are currently unmet
===============================================================

This is not meant to be an exhaustive list.

1.  **A sensible takeoff plan. **Currently, AGI companies lack a vision for how to navigate safely handing off research to AI agents.
    1.  **The alignment approach** \- companies don’t have (public) default plans for which research areas to assign to their population of AI agents by default.
    2.  **Compute commitments** \- even with a sensible alignment approach, a lack of commitments might lead to an inadequate proportion of AI agents and compute to be allocated to it.
    3.  **Frontier safety frameworks** \- the requirements and commitments around SL-4 and SL-5 are currently very unclear, allowing a lot of wiggle room to cut corners during takeoff.
    4.  **Control** \- the science of safely handing off work to AI agents (or being able to tell that it’s not safe to do so) is very underdeveloped.
2.  **State-proof cybersecurity. **If bad actors can steal the weights of very advanced AI systems, things become extremely unpredictable due to misuse and enabling less careful entities to create advanced AI.
3.  **A way to survive global tensions. **The creation of AGI will disrupt the balance of military power between countries, possibly giving one entity a decisive strategic advantage. I think the probability of nuclear war in the next 10 years is around 15%. This is mostly due to the extreme tensions that will occur during takeoff by default. Finding ways to avoid nuclear war is important.
    1.  During the cold war, there were multiple [nuclear close calls](https://en.wikipedia.org/wiki/Nuclear_close_calls) that brought us close to annihilation. Some of these were a consequence of shifts in the strategic balance (e.g. the [Cuban Missile Crisis](https://en.wikipedia.org/wiki/Cuban_Missile_Crisis)). [The US threatened the USSR with nuclear war over the Berlin Blockade](https://www.trumanlibraryinstitute.org/berlin-airlift/). The creation of superintelligence will make these events seem trivial in comparison, and the question is just whether officials will realize this.
4.  **Doing nationalization right.**
    1.  **Getting the timing right.** If nationalization happens too late (e.g. after AGI), the ensuing confusion and rapid change within the project might lead to bad decision making.
    2.  **Creating default plans. **There will likely be a time in 2025 or 2026 that will be marked by significant political will to lock down the labs. If there don’t already exist any good default plans or roadmaps on how to do this, the plan will likely be suboptimal in many ways and written by people without the relevant expertise.
    3.  **Building political capital. **Unless people with relevant expertise are well-known to important actors, the people appointed to lead the project will likely lack the relevant expertise.
    4.  **Keeping safety expertise through nationalization.** A nationalization push which ousts all AI safety experts from the project will likely end up with the project lacking the technical expertise to make their models sufficiently safe. Decisions about which personnel the nationalized project will inherit will likely largely depend on how safety-sympathetic the leadership and the capabilities-focused staff are, which largely depends on building common knowledge about safety concerns.

Robustly good actions
=====================

*   **Joining the few places that will have leverage over what happens.**
    *   Think about who you want to get hired by and what you’re missing to get hired there.
    *   If you’re externally doing research, remember to multiply the importance of the research direction by the probability your research actually gets implemented on the inside. One heuristic is whether it’ll get shared in their Slack[^k68c5abgjsg].
    *   After strict government oversight, internal research will likely be done under some sort of security clearance. [Don’t do drugs](https://www.state.gov/security-clearance-faqs/#substanceuse), don’t go into debt, don’t hang out with shady people, and reduce your number of unnecessary [foreign contacts](https://www.dcsa.mil/Portals/91/Documents/IS/DISS/FINAL_SEAD%203%20Contact%20and%20Relationship%20Reporting%20Exercise.pdf).
*   **Helping inform important players. **Many important players will want advice from people who have legibly thought a lot about AGI and AGI safety. Would they think to call you first when they have a question?
*   **Actually have a plan.** I think a good way to think about this is year by year - what do I plan to do by EOY 2025, EOY 2026, EOY 2027.
*   Keep in mind that **the only things that matter are things that need to get done before AGI. AGI can do the rest.**
    *   I acknowledge that there exist bets for long timelines, but I also think those things should be discounted compared to how promising they would be under a 20 year AGI timeline.
    *   I also acknowledge that there’ll maybe be a [centaur](https://en.wikipedia.org/wiki/Advanced_chess) period of around 1 year after AGI. I don’t think this is that important a consideration as it’s unclear to me what it implies that the rest of the scenario doesn’t.
*   **Speedrun everything. **If your plan is “I will do X so I can do Y later,” consider just trying to do Y right now.
    *   If your plan is “I will work for an irrelevant ML company for a year so I have the credentials to get hired by an AGI company,” consider applying to the AGI company directly or doing things that will accelerate that process dramatically (the action space is wide!).
*   **Invest accordingly.** AGI being three years away probably has large implications for how to structure your investment portfolio, as some bets are much more correlated with this than others. Money will probably be useful to allocate to rapidly emerging opportunities to steer things during takeoff, but it’s unclear to me what use it’ll be post-ASI if humanity survives (on priors, property rights will be respected at least to some extent). More discussion [here](https://www.lesswrong.com/posts/CTBta9i8sav7tjC2r/how-to-hopefully-ethically-make-money-off-of-agi). (not financial advice)
*   **Build adaptability and resilience.** The world will keep shifting faster and faster as time goes on. Not going insane and keeping a level head will be very important for being able to make wise decisions, and will become an increasingly rare and valuable attribute.
    *   **Spend time thinking about possible futures and your place in them.** If there are predictable directional changes, instead of thinking "Oh no the world is so chaotic!" a more useful frame might be "While I was wrong about specifics, this roughly matches up to one of the branches that I predicted could happen, and I have already thought about how to behave in these circumstances." That way, some of your initial mental labor can be offloaded from your future self (who will have a lot on their plate to think about) to your present self. This not only has the intellectual benefit of offloading labor (which I think is minor), but a more visceral benefit of reducing the base surprise or panic that might occur later on - known unknowns are probably much less stressful than unknown unknowns.
    *   **Don't neglect your health.** While it might seem appropriate to start working many more hours than you did months ago or make other similarly unhealthy tradeoffs, we will need to be in a good shape deep into takeoff if we want to navigate it wisely. Sustainability is important and implies similar habits on a 3 year timescale as it does on a 10 year timescale.

Final thoughts
==============

I know it can be stressful to think about short AGI timelines, but this should obviously not be taken as evidence that timelines are long. If you made your current plans under 10 or 20 year timelines, they should probably be changed or accelerated in many ways at this point.

One upside of planning under short timelines is that the pieces are mostly all in place right now, and thus it’s much easier to plan than e.g. 10 years ahead. We have a somewhat good sense of what needs to be done to make AGI go well. Let's make it happen.

[^44f4sjs66x9]: I define AGI here as an AI system which is able to perform 95% of the remote labor that existed in 2022. I don’t think definitions matter that much anyways because once we reach AI R&D automation, basically every definition of AGI will be hit soon after (barring coordinated slowdowns or catastrophes). 

[^k68c5abgjsg]: While they’re still using Slack that is. After strong government oversight, it’s unlikely that external human researchers will have any nontrivial sway over what happens on the inside.