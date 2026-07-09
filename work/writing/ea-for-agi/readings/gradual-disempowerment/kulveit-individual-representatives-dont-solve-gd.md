---
title: "Individual AI representatives don't solve Gradual Disempowerement"
author: "Jan_Kulveit"
date: 2025-06-04
url: https://www.lesswrong.com/posts/E96XcEPECbsipAvFi/individual-ai-representatives-don-t-solve-gradual
fetched: 2026-07-09
via: forum-graphql
topic: "gradual-disempowerment"
note: "stage6 scour: Jan Kulveit rebuts the most common proposed fix — per-person aligned AI representatives don't solve GD because states/corporations are also agents; the author addressing the top objection"
---

Imagine each of us has an AI representative, aligned to us, personally. Is gradual disempowerment solved?[^bhugzx74xtt] In my view, no; at the same time having AI representatives helps at the margin.

I have two deep reasons for skepticism.[^it3lbzx0pi] Here is the first one.

### **Humans are Not Alone**

We, as individuals, are not the only agents or “agencies” in this world. Other goal-oriented strategic entities include states, corporations, and to some extent egregores. 

For the sake of argument, imagine the current distribution of agency in the world as approximately 60% humans, 20% corporations, 20% states *(numbers are illustrative, egregores not included for simplicity)*

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/8e7c813913bb3376ee652fbd8ec711c405da5d567bb5ab3e.png)

Now, suppose we introduce individually aligned AI assistants for each person. At first glance, this seems empowering—each individual gains a cognitive extension, potentially leveling the playing field. 

But: do corporations or states also get their representatives?

If your answer is **No**, you'd need to explain how individuals gain AI power while states and corporations don't, leading to a rebalancing where the latter are disempowered relative to now. If the trend of extreme capital expenditure continues, I think reasonably we can hope to get some personal AIs and some corporate AIs and governmental AIs and maybe some AIs aligned to humanity as whole or goodness itself. To hope that *you personally will get an AI intent-aligned to you*, but there will be *no AIs aligned to TheLabs or the US government* seems strange.

If the answer is **Yes**, it seems natural to assume that various AI representatives will have different cognitive power, possibly with some minimum threshold for every citizen, but way more powerful if the principal spends some resources on computations. 

### **The Substrate Shift**

You may ask: doesn't this replicate current power equilibrium? For some intuition: imagine you are going to sue some MegaCorp. They can likely get a better legal team, even now. Is there any difference?

My bet is “no, unfortunately it does not”.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/fc8f9c09b706de628a38b364473c7a89a9a43b10a2a33761.png)

Consider that currently, both individuals and corporations "run" their cognition on human brains. This also means you can out-smart MegaCorp. In cases where corporate cognition is bound on something like “what the best human inside can do”, it's you versus another human.

Unfortunately if it is "my o5-mini-cheap” vs “corporate o8-maxed-inference” I would expect my representative to lose.   
  
*This is not clear: actually having a theory of how differences in cognitive power influence achievable equilibria would be good, and this is one of the reasons why we work on topics like modelling* [*what equilibria to expect in game theoretic situations involving boundedly-rational agents with different levels of rationality*](https://openreview.net/forum?id=4Ft7DcrjdO).

+++ Sidenote rant

At ACS, we tried to study this experimentally, having various AIs bargain, negotiate and find compromise. Unfortunately we had to scale this down to close to zero due to lack of funding for this research direction, which is engineering heavy and inference costly. If anyone wants to either support this or get us free compute, drop me a message.  
  
*In my view, if anyone expects anything good to come out of AI representatives, they should be extremely curious about how negotiations and bargaining between AIs with different levels of power works.*

+++

An alternative way to look at the problem: your brain is pretty good at running “you” as an agent. It can also simulate other people - as in role-playing - or run some corporate cognition. Our brains are not a particularly great substrate to run corporate cognition, corporations need to run distributed across many individuals, often leading to coordination challenges, information loss, and decision-making bottlenecks.

Transitioning to AI-based cognition changes this dynamic. Taking corporations as somewhat substrate-invariant agents, I would bet **it is easier to upload Google, than to upload you.** 

### **Coordination and Collective Action**

Even if we attempt to balance this by ensuring corporations don't have access to more powerful representatives, but maybe just have more numerous AI representatives equivalent to your individual AI, coordination remains a challenge. Corporation-aligned AIs can be designed to work cohesively, sharing information and strategies seamlessly. Individual AIs, each aligned with their user's unique goals and values, may struggle to coordinate effectively, leading to a collective action problem.

This asymmetry in coordination capabilities means that, over time, the relative agency of individuals may still decline, even as their personal tools become more powerful. The collective influence of corporations and states could grow disproportionately, leading to a gradual disempowerment of individuals, even if represented by AIs. [^900wvzkd6li]

### **The Role of the Leviathan**

My current best guess is that to counteract this problem, it's insufficient to rely solely on technological solutions like individually aligned AIs, but we actually need something like a state, *aligned with empowering its citizens*.  Institutional structures designed to preserve and enhance individual agency.

To be clear: this does not mean AIs aligned with individuals are worthless to pursue. On the margin, I hope representatives help, and it seems preferable to have them, relative to a situation where only entities with proper representation are corporations and states. I just don't think it is "The Solution".  
  
(In second post I'll cover different problem, which is related to misaligned cultural evolution. Short pointer: Achilles heel of almost all purely econ-based approaches to solving gradual disempowerment is they ignore *where do human preferences come from.*)  
  
*Thanks to everywhone who discussed this with me in past few days. Written with help of Gemini 2.5, ChatGPT 4.5, Claude 4. Illustrations 4o.*  

[^bhugzx74xtt]: We also recommend this in the Mitigation section of the paper:  Developing AI delegates who can advocate for people's interest with high fidelity, while also being better to keep up with the competitive dynamics that are causing the human replacement. Recently Ryan Greenblatt recommends this as one of the best approaches. 

[^it3lbzx0pi]: There are also multiple practical obstacles, not discussed here, 

[^900wvzkd6li]: This is one of the reasons why I believe differentially advancing capabilities in direction of coordination is  important.