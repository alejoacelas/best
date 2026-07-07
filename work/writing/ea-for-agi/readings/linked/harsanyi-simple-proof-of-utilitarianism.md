---
title: "Harsanyi's simple “proof” of utilitarianism"
author: "Ben_West🔸"
date: 2020-02-20
url: https://forum.effectivealtruism.org/posts/v89xwH3ouymNmc8hi/harsanyi-s-simple-proof-of-utilitarianism
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by richard-ngo/scale-free-theory-of-intelligent-agency.md; foundational argument for utilitarian aggregation — EA principles/ethics"
---

In 1955, John Harsanyi published [a paper](http://darp.lse.ac.uk/papersDB/Harsanyi_(JPolE_55).pdf) demonstrating that anyone who follows certain reasonable assumptions must be a total utilitarian. The paper is somewhat technical, but the result is relatively easy to understand. I’ve been unable to find a non-technical summary of this result and so, because it is one of the more compelling arguments for utilitarianism, I decided to write one up.

**Background**
--------------

Suppose a group of friends are deciding where to eat. Each individual person has some preference (say, one person most prefers Chinese, then Italian, then Japanese; another prefers Italian, then Chinese, then Japanese) but there is no clear restaurant which everyone thinks is best. How should they choose a place?

One solution is to have each person attach a numeric score to how much they would enjoy a given restaurant. If you really like Chinese food, then maybe you give it 10 points; if you’re lukewarm then you give it 2, and if you really hate Chinese then maybe it’s -5.

Once each person has voted, you simply add up all the scores, and then the group goes to whichever restaurant had the highest total score.

This method is (a simplified form of) “total” utilitarianism, and Harsanyi demonstrated that it is the only “reasonable” way that groups can make a decision.

**Theorem**
-----------

Concretely, assume:

1.  Each individual in the group is rational (for a commonly used but [technical definition](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem) of “rational”, hereafter referred to as “VNM-rational”)[^1][^5]

3.  The group as a whole is VNM-rational[^2][^6]

5.  If every individual in the group is indifferent between two options, then the group as a whole is indifferent between those two options

The theorem proves that total utilitarianism is the only method which satisfies these three assumptions.

Note that this theorem just demonstrates that, if there is some way of saying that certain things are better or worse for individuals, then the way to determine whether those things are better or worse for groups is to add up how good it is for the individuals in those groups. It doesn't say anything about the way in which things can be better or worse for individuals. I.e. you could be adding up each individual's happiness (hedonistic utilitarianism), something related to their preferences (preference utilitarianism), or something more exotic.

**Example**
-----------

The above is somewhat abstract, so here is a concrete example demonstrating why anything other than total utilitarianism fails these axioms. (This is my best attempt at creating a simple example; perhaps others in the comments can create even simpler ones.)

Consider a population consisting of 2 people. Because they are VNM-rational, they have utility functions, and therefore we can represent states of the world as a vector of numbers. E.g. the vector $(5, 7)$ is a world in which the first person has utility 5 and the second has utility 7.

Let’s prove that the world $(2, 0)$ must be as good as the world $(1, 1)$.

Consider a lottery in which there is a one-half chance we end up with the world $(2, 0)$ and a one-half chance that we end up with the world $(0, 2)$. Because we are indifferent between who has the 2 and who has the 0,[^7] and the group is an expected utility maximizer, these are equally valuable:[^3]

 $$\frac{1}{2}(2,0)+\frac{1}{2}(0,2)=(2,0)$$

We can we write this from the perspective of each individual in society:

$$\left(\frac{1}{2}\cdot 2+\frac{1}{2}\cdot 0,\frac{1}{2}\cdot 0+\frac{1}{2}\cdot 2\right)=(2,0)$$

Because VNM-rational agents are expected utility maximizers we can just multiply the probabilities through:[^4]

$$(1,1)=(2,0)$$

QED.

The key insight here is that each individual is indifferent between the “50% chance of 2, 50% chance of 0” and “guaranteed chance of 1” lotteries (on account of being VNM-rational). Because each individual is indifferent, the group is also forced to be indifferent (on account of the third assumption).

**Conclusion**
--------------

Total utilitarianism is a fairly controversial position. The above example where $(1, 1) = (2, 0)$ can be extended to show that utilitarianism is [extremely demanding](https://en.wikipedia.org/wiki/Demandingness_objection), potentially requiring [extreme sacrifices and inequality](https://en.wikipedia.org/wiki/Utility_monster).

It is therefore interesting that it is the only decision procedure which does not violate one of these seemingly reasonable assumptions.

While not conclusive, this theorem provides a compelling argument for total utilitarianism.

**Appendix on Equality**
------------------------

Harsanyi’s original theorem allowed for weighted total utilitarianism. (I.e. everyone gets a vote, but some people’s votes count more than others.)

It’s easy enough to add an assumption like “also everyone is equal” to force true total utilitarianism, but interestingly Harsanyi didn’t think that was necessary:

> This implies, however, **without any additional ethical postulates** that an individual’s impersonal preferences, **if they are rational**, must satisfy Marschak’s axioms \[equivalent to VNM-rationality\] and consequently must define a cardinal social welfare function equal to the arithmetical mean of the utilities of all individuals in the society (the arithmetical mean of all individual utilities gives the actuarial value of his uncertain prospects, **defined by an equal probability of being put in the place of any individual in the situation chosen**). \[Emphasis added\]

In other words, he thinks it would be irrational to weight people unevenly, because equal weighting is the expected utility-maximizing choice if you don’t know which person in society you will become.

This idea of making decisions behind a [veil of ignorance](https://en.wikipedia.org/wiki/Veil_of_ignorance) where you don’t know which person in society you will become was later popularized by John Rawls, who used it to argue for his [Minimax](https://en.wikipedia.org/wiki/Minimax) decision rule.

It is, in my humble opinion, unfortunate that the veil of ignorance has become associated with Rawls, when Harsanyi’s utilitarian formulation has a much more rigorous mathematical grounding. (And was also [published earlier](https://en.wikipedia.org/wiki/Original_position#History).)

**Credits**
------------------------
I would like to thank Aaron Gertler, Sam Deere, Caitlin Elizondo and the CEA UK office staff for comments on drafts of this post and discussions about related ideas.

[^1]: Harsanyi used Marschak’s axioms, which are mathematically equivalent to the VNM ones, but less popular. I'm using VNM here just because they seem better known.
[^2]: It’s a well-known consequence of this assumption that the group must be “utilitarian” in the sense that it has a utility function. The surprising part of Harsanyi’s theorem is not that there is a utility function but rather that the utility function must be a linear addition of its constituents’ utility functions (as opposed to, say, their average or the sum of their logarithms or something completely disconnected from its constituents' utility.).
[^3]: More precisely: $U(2, 0) = U(0, 2) = w$ for some group utility $w$. Because of the VNM axioms, $\frac{1}{2} U(2, 0) + \frac{1}{2} U(0, 0) = \frac{w}{2}$. (Normalizing $U(0,0)=0$.) Therefore, $\frac{1}{2} U(2, 0) + \frac{1}{2} U(0, 2) =  \frac{w}{2} +  \frac{w}{2} = w = U(2, 0)$. I’m still skipping some steps; people interested in a more rigorous proof should see his original paper.
[^4]: More precisely: each individual is indifferent between a lottery where they are guaranteed 1 utility versus having a 50% chance of 2, 50% chance of 0. Since each individual is different between these, the group is also indifferent.
[^5]: "Rational" is a somewhat unfortunate term, but I'm sticking with it because it's standard. These axioms are intended to prevent things like "Ben likes apples more than bananas but also likes bananas more than apples." It's not intended to prevent "irrational" value judgments like enjoying Nickelback's music. A better term might be something like "consistent".
[^6]: An example of what it means for a group decision to be VNM-rational: if the group somehow aggregates its preferences (through voting or reading entrails or whatever) and decides that Chinese is preferable to Italian, and also that Italian is preferable to Japanese, then the group must also conclude that Chinese is preferable to Japanese. We don’t care how it’s aggregating its preferences, but it must do so in a “rational” way. 
[^7]: Note that this isn't clearly implied by the assumptions – see the appendix on equality. Harsanyi's original proof does not require any assumptions about equality, but this sort of assumption makes the proof much simpler and seems unlikely to be a point of controversy, so I'm including it.