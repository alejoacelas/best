---
title: "Gradual Disempowerment: Concrete Research Projects"
author: "Raymond Douglas"
date: 2025-05-29
url: https://lesswrong.com/posts/GAv4DRGyDHe2orvwB/gradual-disempowerment-concrete-research-projects
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 80k-extreme-power-concentration; concrete research agenda for gradual disempowerment — curriculum exercise fodder"
---

*This post benefitted greatly from comments, suggestions, and ongoing discussions with David Duvenaud, David Krueger, and Jan Kulveit. All errors are my own.*

A few months ago, I and my coauthors published [*Gradual Disempowerment*](https://gradual-disempowerment.ai/) (GD hereafter). It was mostly about how things might go wrong, but naturally a lot of the resulting interest has been about solutions. 

We have some more formal followup work coming: in the meantime, this is my 80/20 for  ‘what would I do if I had way more time’ / ‘what would I find it helpful if someone else had done well’. This document is very much breadth over depth, and still missing a lot of details; I hope it is nonetheless helpful. For many of these, I expect even a pretty motivated and smart undergraduate could make useful progress in 10-20 hours. 

I would be excited about people doing good work on any of these, and am happy to put some effort into helping — at an absolute minimum, **I will leave comments on the first ten 1-page docs anybody sends me in response to this**[^0sat5tf9pqba]**.**

Conceptual / High-Level
=======================

Interaction with other x-risk concerns
--------------------------------------

It’s easiest to illustrate GD by saying “let’s hold all the other AI problems fixed and roll this dynamic forward” and then pointing to the end state. But the GD dynamic is probably going to play out in parallel with everything else. Gaming out this parallel process is a way harder task.

So it would be great if someone gave it an honest shot! What does the world look like if all the dynamics play out at once — GD, misalignment, [coup risk](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power), recursive self-improvement, vulnerable world dynamics, and other key capabilities like super-persuasion or [accelerated bio research](http://darioamodei.com/essay/machines-of-loving-grace)? How strongly do these different forces interact with each other, and what happens if we vary our assumptions about their relative speed and intensity? In what ways do solutions to one trade off against others, and what solutions are robustly good across the board?

For example: my guess is that centralising power in a single nationalised lab probably helps avoid race dynamics, and therefore lowers misalignment risk, but also possibly makes coup risk higher, lowers the odds of misuse, but also means less societal hardening by default, and makes it more likely that citizens are disempowered with respect to the state in a general non-coup sense.

Responding to counterarguments
------------------------------

In response to the original piece, lots of people raised interesting counterarguments — most prominently:

*   We can use the [strategy-stealing assumption](https://www.lesswrong.com/posts/nRAMpjnb6Z4Qv3imF/the-strategy-stealing-assumption) to keep pace with AIs, similar to investing in index funds
*   We can use aligned AI to solve these problems
*   Humanity will naturally be incentivised to solve these problems, so it doesn’t deserve marginal effort that funges with other x-risk work
*   The technology will naturally tip the balance towards defence instead of offence, or citizen coordination instead of government oppression, or generally in a way that makes things overall better and more stable
*   The pie of prosperity will grow faster than the human slice will shrink
*   We mostly just need more democracy and possibly less/better capitalism

I think it’d be great if someone sat down and tried to figure out the best version of these arguments, and what extra assumptions it takes for them to hold, as well as the counterarguments, ultimately aiming for some kind of coherent synthesis. In many cases I think my brief summary is not doing justice to the core objection.

Incidentally, there’s also something like a counter-argument based on the idea that we should embrace AI successionism. I think this is a normative point somewhat out of the scope of the paper, and that followup work here is at higher risk of being counterproductive — my guess is that this will become a messy cultural battleground not too long from now. Nonetheless, I note it here for completeness and interest.

Beyond competitive pressures
----------------------------

It seems that some readers interpreted the GD paper as mainly claiming that competitive dynamics will become a lot more dangerous to humans after AGI, and possibly as an elaboration of Paul Christano's “[greedy patterns](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like#Part_II__influence_seeking_behavior_is_scary)”. But this summary misses several other dynamics at work, which are slightly harder to articulate. 

One pointer to what’s missing from that summary is that society already contains many emergent influence-seeking patterns, even absent new ones found via machine learning. Another is that greedy patterns can be greedy even absent competitive pressures. On top of that, it’s easy to point to ways that technology can make people self-destructive even without competitive benefit — you can imagine things that differentially empower specific drives within individual people, like certain drugs. 

So I think it’s particularly useful to help people to reason clearly about the general shape of the problem above and beyond competitive dynamics. This is conceptually hard (and clearly we didn’t do a perfect job), but pretty important: if people round the problem off to competitive dynamics, they might also think that dealing with competition is a full solution.

One jumping off point: I think loads of x-risk dynamics (GD or otherwise) would be massively weakened if we had perfect frictionless trade (e.g. by aligned AI delegates that can do efficient Coasian bargaining), but *not all of them*.

Another jumping off point: if we had essentially a single heavily centralised and powerful world government that could regulate competition, which parts of the problem would that solve or not solve? What extra assumptions would we need for that to be a desirable outcome? How hard would it be to get such a system in place without a huge fight? What sorts of competition tend to operate internally to governments (e.g. coalition building, sycophancy, vote-buying) and how important would it be to control those dynamics? What level of local freedom / competition could be compatible with avoiding top-level takeovers? 

Clarifying the goal
-------------------

I think the most helpful thing to work back from here is basically: what are coherent, feasible, positive futures? This is currently roughly my main focus, but I don’t think more attention would hurt — in fact, I’d love for more people to take a crack at this. Note that there is almost certainly a tradeoff between positivity and feasibility.

There are various more specific dimensions here that I think can be jumping off points:

*   What’s the role of paternalism in a post-AGI world?
*   What does a good version of cultural/moral progress/evolution look like?
*   What kind of relationship could we even have with AGIs/ASIs?
*   How will humans exert their preferences? What influence will they have?
*   Are there ways to keep society operating at “human speed” for an appreciable amount of time with AGI in the mix?

(The phrasing of these questions bakes in some assumptions which I think should actually be questioned. For example, I think it is important to at least consider the possibility that the best future is one in which we simply never build AGI.)

A related and important question is what positive and feasible outcomes we should aim for on the scale of 2-3 years, for both GD and wider AI concerns. In other words, working back from positive futures, how would the world need to look in 3 years such that I/you/we felt like things were going to go well?

Social Science-y
================

Robustness of societal fundamentals
-----------------------------------

It seems that some people reject GD-style concerns on the grounds that various ‘societal fundamentals’ like property rights will just hold in a way that lets humans retain influence. Personally, I expect they won’t by default. Unfortunately, lots of existing attempts at modelling sort of take them as axiomatic.

So I think there’s interesting work to be done by taking basically any of the fundamentals, including but not limited to:

*   Property rights
*   Currency
*   Human influence (formal or otherwise)
*   Human preferences
*   Legal rights in general
*   Fundamental norms (e.g. non-aggression)
*   Sense of individual identity
*   Sense of agency

…and then trying to analyse it in a way that treats it as more fluid, e.g. by asking:

*   Historically, when and how has this become unstable?
*   Can we build formal models?
*   What would it look like for AIs to have these, *de facto* or *de jure*?
*   *Why are these things as stable as they are now? How could they become more robust?*

Studying Historical Parallels
-----------------------------

There are some historical (or current) examples that seem pretty relevant to GD-type concerns. I wish I could go away and read a few books on each, and failing that, I’d love to read luminous and insightful essays on the lessons we can learn from any of the below.

For specific periods, I think the question is ‘How and why did this shift happen in the way that it did? How did the power and influence move around, across several societal systems?’

*   Meiji Restoration / Tokugawa Japan
*   Norway as a non-rentier state
*   Company rule in India
*   The fall of the aristocracy, [especially fairly bloodless cases like the UK](https://www.lesswrong.com/posts/bmmFLoBAWGnuhnqq5/capital-ownership-will-not-prevent-human-disempowerment)

For specific technologies, I think the questions are roughly “What changes did this cause or contribute to, especially in the balance of power and the development of culture/morality?”, and “How, mechanically, did the dynamics of the change work?”

*   The printing press and other historical information technologies
*   The internet
*   Powerful recommendation algorithms

I’m sure there are other case studies and questions that would be equally illuminating, which I don’t even know to be curious about.

Indicators and Policy
---------------------

There’s a whole bunch of questions around how you measure GD, including:

*   What individual features of the world are relevant indicators
*   How to measure/approximate them, both theoretically and [practically](https://www.anthropic.com/economic-index)
*   How to anticipate/model/forecast what the value of these indicators might be in future
*   How to build a representative portfolio of indicators
    *   This includes figuring out what’s important but hard to measure, and how to account for its absence
*   How to tailor this to different relevant groups (e.g. thinking about what’s legible to governments, especially when they themselves might be incentivised to reduce human influence in the long term)
*   How to act on this information sensibly (e.g. how to not Goodhart solutions)

Spelling out the last point: I think red tape to prevent GD is basically doomed in the long term, and pretty crucial in the short term, and relies on figuring out what legible barriers are both useful and feasible.

This is currently the project I most wish I could personally do, where I am making no effort to actually do it. I think there’s lots of progress to be made even on smaller parts, in a way that’s pretty robustly good — the more ideas for possible indicators, the better.

Technical / Mathematical
========================

Simulating entire civilizations
-------------------------------

It is now possible to run experiments that simulate hundreds of agents interacting. This is interesting both as a lens on multi-human interaction, and because multi-AI dynamics are likely to be very important in their own right.

Personally I’m very interested in something like cultural dynamics — to what extent memes can spread across groups of AIs, and what kinds of selection pressures get applied by those interactions. I think it’s also a good test bed for thinking about how cooperation works, and collective reasoning: how good are groups of AIs at getting out of bad equilibria that are fairly stable?

My impression is that there’s already [some](https://www.science.org/doi/full/10.1126/sciadv.adu9368?af=R) amount of interesting work here, and that in the long term it might be extremely important for getting a good empirical understanding of something like civilizational dynamics, which I personally think is essentially a precondition for good outcomes post-AGI. Plausibly there’s a lot of good work to be done just in figuring out what work here would be useful. 

Also, there is probably a lot of leverage in building infrastructure to make these experiments very easy to run — ideally as easy as vibecoding.

AI cognition and agency
-----------------------

Dovetailing from the above, I think we are still pretty confused about how agency works in AI systems. There’s been a lot of great conceptual work in this area, but comparatively little bridging into rigorous empirical/mechanistic studies.  
  
Understanding how LLMs move from simulating and imitating agency in training data to self-aware, situationally-aware agents with causal models and goals is probably robustly useful for many threat models, ranging from scheming to GD. It’s also an area I personally find particularly intrinsically interesting, and am particularly happy to discuss or give thoughts on.

Civilisational Alignment / Hierarchical Agency
----------------------------------------------

**Heads up: this will be another confusing and pretty conceptual section, but it’s an important one.**

One reasonable compression of the GD concern is “we need to align civilization before it becomes much more powerful and ceases to need us”. What makes this tricky to think about is that there is a bi-direction influence between the whole and the parts, and both have some amount of agency.  
  
If you take one possible reductionist perspective, ignoring the parts and focusing on the whole, the natural response is to think: We are the civilization, so what’s the problem? How can we lose control? You might also think that whatever comes next is necessarily the appropriate successor of civilization.  
  
If you take a different reductionist perspective, and focus just on the influence of the parts on the whole, then the natural place to look for solutions is in strengthening democracy or something similar, giving more power to individuals. Unfortunately, this misses the fact that it’s not just “align civilization to humans”, it’s also sort of “reciprocally align humans to human civilization”. 

That phrase might set off warning flags about totalitarian brainwashing, but consider the fact that healthy democracies tend to not only have constitutions, representatives, and law enforcement, but also have citizens who want these things. What humans want and vote for is largely influenced by the superstructures, and empirically, humans can and will act and vote against their long-term interest or in favour of destructive value changes. Conversely, a lot of our values and norms seem to be selected to function only within some kinds of contingent interpersonal contexts. The whole thing is a mess.

So in other words, what we probably want is actually a “friendly Leviathan”, [neither too strong, nor absent](https://arxiv.org/abs/2503.05710). In the limit, it would be great to have descriptions that were fairly formal, and models that at least seemed like good approximations of the nuance of reality, in the same way that for standard AI alignment we don’t just want AIs that pass evals, but rather AIs that we *expect* to be aligned for good theoretical reasons.

The best case probably looks like a new subfield, doing something like extending game theory to the [scale-free case](https://www.lesswrong.com/posts/5tYTKX4pNpiG4vzYg/towards-a-scale-free-theory-of-intelligent-agency) where agents can be neatly (de)composed in a way that somehow makes it easier to think about emergent value structures.

An example of a thing we might expect to be able to describe formally is what's going on in [The Goddess of Everything Else](https://slatestarcodex.com/2015/08/17/the-goddess-of-everything-else-2/), or why the Constitution of the United States does not lead to centralization of power. In fact, I think a unified formal model that could underpin several of the [Great](https://slatestarcodex.com/2014/12/17/the-toxoplasma-of-rage/) [Scott](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/) [Posts](https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/) would be a pretty long way towards a solution.

I expect the full version of this is super hard and super important. Currently my best guess is that we have to wait and get aligned proto-AGIs to solve this for us, but it can’t hurt to try in advance. Figuring this out is plausibly pretty destabilising, and might lead to something like a power scramble, but ideally we want that to happen while humans / human civilization has a decent amount of influence.

I wouldn’t be surprised if most of the pieces are out there, such that the solution would be super obvious in retrospect, similar to how information theory and game theory both turned out to be very natural and elegant.

Differential Progress / Differential Empowerment
------------------------------------------------

Much more to follow here, but essentially I expect we need to build AI systems in a way that lets us harness their greater capabilities to manage civilization in a way that exceeds our current abilities. AIs and other technology will open the door for things like:

*   Provable neutrality
*   Superhuman mediation, bargaining, and arbitration
*   Privacy-preserving disclosure
*   Synthesising information on an enormous scale
*   Some kinds of automated research
*   Some kinds of human augmentation
*   Coordination / collective decision-making mechanisms

This is the project I am currently working on puzzling through, and I expect that progress in these areas will make new kinds of governance possible, of the kind required to actually navigate a transition to the world of AGI. I don’t have much more specific pointers now, but hopefully I will soon!

AI Complementarity
------------------

The world currently seems to be aiming for a human-replacing AI agent regime, and this seems bad for a bunch of reasons. It would be great if people were fundamentally more oriented towards making AIs that complemented humans. Some potential steps in this direction:

*   Centaur/Cyborg performance evals
    *   In particular, benchmarks that people can hill climb so that they’re encouraged to make models good at working with humans
    *   This is partly a structural challenge: it seems like many people *want* AIs that work more as complements, but it’s harder to train in “ask questions where appropriate” than “trick the user into thinking you did what they want”, and it’s also expensive running tests with users in the loop
*   Building more complementarity interfaces that make it easier for people to have high-bandwidth interactions with AIs in certain domains
    *   A la cursor, but for other useful things
*   More research on how AI interaction is affecting humans, in the same way that social media algorithms turned out to have unintuitive structural consequences

Concluding thoughts
===================

There’s a great deal not in this piece. Most obviously, it’s largely constrained to research questions, even though I expect that eventually a lot of the work will be in actually building things and pushing for change at the level of policy and public understanding. There’s also certainly a lot of good work I’ve failed to mention here, and important points missing. But I hope this is enough for some people to get started

I reiterate my offer: if you find yourself wanting to work on this stuff, feel free to DM me a google doc with <1 page explaining your plan/progress/work so far, and I will leave at least one round of comments, to at least the first ten people who do exactly this[^0sat5tf9pqba]. In practice I will probably do more than that, because I really do want stuff to happen here. So, best of luck! 

[^0sat5tf9pqba]: Ideally DM me on LessWrong. You’re welcome to send docs about things not on this list, but I might ignore them if they seem irrelevant/uninteresting, whereas I will definitely reply to things from this list even if they’re pretty scrappy attempts. I might also show things to my coauthors but they’re generally busier than me. (EDIT: 7/10 docs received)