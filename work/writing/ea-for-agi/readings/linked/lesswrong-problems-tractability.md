---
title: "Most problems don't differ dramatically in tractability (under certain assumptions)"
author: "Thomas Kwa"
date: 2022-05-04
url: https://www.lesswrong.com/posts/WyJX7Rz4rq8nu3kCb/most-problems-don-t-differ-dramatically-in-tractability
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by forethought/supplement-the-basic-case-for-better-futures; EA prioritization/epistemics on tractability"
---

[Cross-post from EA Forum](https://forum.effectivealtruism.org/posts/4rGpNNoHxxNyEHde3/most-problems-don-t-differ-dramatically-in-tractability).

Recall the importance-tractability-neglectedness (ITN) framework for estimating cost-effectiveness:

*   Importance = utility gained / % of problem solved
*   Tractability = % of problem solved / % increase in resources
*   Neglectedness = % increase in resources / extra $

The product of all three factors gives us utility gained / extra $, the cost-effectiveness of spending more resources on the problem. By replacing $ with another resource like researcher-hours, we get the marginal effectiveness of adding more of that resource.

In the[80,000 Hours page on ITN](https://80000hours.org/articles/problem-framework/), scale ranges 8 orders of magnitude, neglectedness 6 orders of magnitude, and tractability (which 80k calls solvability) only 4. In practice, I think tractability actually only spans around 2-3 orders of magnitude for problems we spend time analyzing, except in specific circumstances.

Problems have similar tractability under logarithmic returns
------------------------------------------------------------

Tractability is defined as the expected fraction of a given problem that would be solved with a doubling of resources devoted to that problem. The ITN framework suggests something like logarithmic returns: each additional doubling will solve a similar fraction of the problem, in expectation.[^fpp3aum52kg] Let the "baseline" level of tractability be a 10% chance to be solved with one doubling of resources.

For a problem to be 10x less tractable than the baseline, it would have to take 10 more doublings (1000x the resources) to solve an expected 10% of the problem. Most problems that can be solved in theory are at least as tractable as this; I think with 1000x the resources, humanity could have way better than 10% chance of starting a Mars colony[^npx0th21uyq], solving the Riemann hypothesis, and doing other really difficult things.

For a problem to be 10x more tractable than the baseline, it would be ~100% solved by doubling resources. It's rare that we find an opportunity more tractable than this that also has reasonably good scale and neglectedness.

Therefore, if we assume logarithmic returns, most problems under consideration are within 10x of the tractability baseline, and thus fall within a 100x tractability range.

When are problems highly intractable?
-------------------------------------

> The three outstanding problems in physics, in a certain sense, were never worked on while I was at Bell Labs. By important I mean guaranteed a Nobel Prize and any sum of money you want to mention. We didn't work on (1) time travel, (2) teleportation, and (3) antigravity. They are not important problems because we do not have an attack.

\-\- Richard Hamming

Some problems are highly intractable. In this case, one of the following is usually true:

*   There is a strong departure from logarithmic returns, making *the next doubling in particular* unusually bad for impact.
    *   Some problems have an inherently linear structure: there are not strong diminishing returns to more resources, and you can basically pour more resources into the problem until you've solved it. Suppose your problem is a huge pile of trash in your backyard; the best way to solve it is to pay people to haul away the trash, and the cost of this is roughly linear in the amount of trash removed. In this case, ITN is not the right framing, and one should use "IA", where:
        *   marginal utility is I * A
        *   I is importance, as usual
        *   A = T * N is absolute tractability, the percent of the problem you solve with each additional dollar. The implicit assumption in the IA framework is that A doesn't depend much on the problem’s neglectedness.
    *   Some causes have diminishing returns, but the curve is different from logarithmic; the general case is "[ITC](https://forum.effectivealtruism.org/posts/fR55cjoph2wwiSk8R/formalizing-the-cause-prioritization-framework)", where absolute tractability is an arbitrary function of neglectedness/crowdedness.
*   The problem might not be solvable in theory. We don't research teleportation because the true laws of physics might forbid it.
*   There is no plan of attack. Another reason why we don't research teleportation is because *even if* the true laws of physics allow teleportation, our current understanding of them does not, and so we would have to study physical phenomena more to even know where to begin. Maybe the best thing for the marginal teleportation researcher to do would be to study a field of physics that might lead to a new theory allowing teleportation. But this is an indirect path in a high-dimensional space and is unlikely to work. (This is separate from any neglectedness concern about the large number of existing physicists).

[^fpp3aum52kg]: I think the logarithmic assumption is reasonable for many types of problems. Why is largely out of scope of this post, but owencb writes about why logarithmic returns are often a good approximation here. Also, the distribution of proof times of mathematical conjectures says a roughly constant percentage of conjectures are proved annually; the number of mathematicians has been increasing roughly exponentially, so the returns to more math effort is roughly logarithmic. 

[^npx0th21uyq]: Elon Musk thinks a self-sustaining Mars colony is possible by launching 3 Starships per day, which is <1000x our current launch capacity.