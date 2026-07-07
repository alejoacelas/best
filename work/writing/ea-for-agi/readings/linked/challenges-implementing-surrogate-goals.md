---
title: "Challenges to implementing surrogate goals – Reducing Risks of Future Suffering"
author: "Tobias Baumann"
date: 2018-06-29
url: https://s-risks.org/challenges-to-implementing-surrogate-goals
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by s-risks/cooperation-conflict-tai-research-agenda.md; surrogate goals as a conflict-reduction mechanism for TAI"
---

[Surrogate goals](https://s-risks.org/using-surrogate-goals-to-deflect-threats/) might be one of the most promising approaches to reduce (the disvalue resulting from) threats. The idea is to add to one’s current goals a surrogate goal that one did not initially care about, hoping that any potential threats will target this surrogate goal rather than what one initially cared about.

In this post, I will outline what I think are key obstacles to a successful implementation of surrogate goals.

Contents

  *   *   *   * 


# Private information

In most settings, the threatener or the threatenee will not have perfect knowledge of the relative attractiveness of threat against the surrogate goal compared to threats against the original goal. For instance, the threatener may possess private information about how costly it is for her to carry out threats against either goal, while the threatenee may know more exactly how bad the execution of threats is compared to the loss of resources from giving in. This private information affects [the feasibility of threats](https://s-risks.org/heuristics-to-assess-the-feasibility-of-threats/) against either goal.

Now, it is possible that the surrogate goal may be a better threat target given the threatenee’s information, but the initial goal is better given the threatener’s (private) information. Surrogate goals don’t work in this case because the threatener will still threaten the initial goal.

The most straightforward way to deal with this problem is to make the surrogate goal more [threatener-friendly](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#Threatener-neutrality) so that the surrogate goal will still be the preferred target even with some private information pointing in the other direction. However, that introduces a genuine tradeoff between the probability of successfully deflecting threats to the surrogate goal and the expected loss of utility due to a worsened bargaining position. (Without private information, surrogate goals would only require an infinitesimally small concession in terms of vulnerability to threats.)

# Tension between credibility and non-interference

Surrogate goals fail if it is not credible – in the eyes of potential threateners – that you actually care about the surrogate goal. But apart from human psychology, is there a strong reason why surrogate goals may be less credible than initial goals?

Unfortunately, one of the main ways how an observer can gain information about an agent’s values is to observe that agent’s behaviour and evaluate how consistent that is with a certain set of values. If an agent frequently takes actions to avoid death, that is (strong) evidence that the agent cares about survival (whether instrumentally or intrinsically). The problem is that surrogate goals should also [not interfere with one’s initial goals](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#Non-interference_with_other_goals), i.e. an agent will ideally not waste resources by pursuing surrogate goals. But in that case, threateners will find the agent’s initial goal credible but not their surrogate goal, and will thus choose to threaten the initial goal.

So the desiderata of [credibility](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#Credibility) and [non-interference](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#Non-interference_with_other_goals) are mutually exclusive if observing actions is a main source of evidence about values. An agent might be willing to spend some resources pursuing a surrogate goal to establish credibility, but that introduces another tradeoff between the benefits of a surrogate goal and the waste of resources. Ideally, we can avoid this tradeoff by finding other ways to make a surrogate goal credible. For instance, advanced AI systems could be built in a way that makes their goals (including surrogate goals) transparent to everyone.

# Population-level goal inference

Another potential obstacle to credible surrogate goals is that inferences regarding an agent’s goals are often indirect, rather than considering that agent in detail. For instance, in a physical fight, your opponent will assume that a punch in the face is effective simply because all humans disvalue getting hit in the face, not because they have modeled you in particular. If you claim that you actually disvalue a light tap on the chest more than getting hit in the face, then that surrogate goal lacks credibility as it is not shared on a population level (in addition to psychological implausibility).

So, introducing a surrogate goal under such circumstances can’t really be done unilaterally. It poses a (possibly very difficult) coordination problem: the entire population or at least large fractions would have to endorse the surrogate goal and react accordingly. (This could be part of the explanation for why we rarely observe surrogate goals in practice.)

# Side effects of actions

If actions have effects other than a direct impact on the agent’s utility function – such as making certain future actions possible or impossible – it can be very difficult to map this onto surrogate goals. In the above example, a punch has a chance of knocking you unconscious, thus making it impossible to fight back. This isn’t the case for the surrogate goal, and in general, it seems hard to credibly simulate such effects.
