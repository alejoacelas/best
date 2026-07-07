---
title: "A flaw in a simple version of worldview diversification"
url: https://nunosempere.com/blog/2023/04/25/worldview-diversification
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ea-meta/unflattering-aspects-of-ea; critique of worldview diversification, macrostrategy/cause prioritization"
---

# A flaw in a simple version of worldview diversification

### Summary

I consider a simple version of “worldview diversification”: allocating a set amount of money per cause area per year. I explain in probably too much detail how that setup leads to **inconsistent relative values** from year to year and from cause area to cause area. This implies that there might be Pareto improvements, i.e., moves that you could make that will result in strictly better outcomes. However, identifying those Pareto improvements wouldn’t be trivial, and would probably require more investment into estimation and cross-area comparison capabilities.1

More elaborate versions of worldview diversification are probably able to fix this flaw, for example by instituting trading between the different worldview—thought that trading does ultimately have to happen. However, I view those solutions as hacks, and I suspect that the problem I outline in this post is indicative of deeper problems with the overall approach of worldview diversification.

This post could have been part of a larger review of EA (Effective Altruism) in general and Open Philanthropy in particular. I sent a grant request to the EA Infrastructure Fund on that topic, but alas it doesn’t to be materializing, so that’s probably not happening.

### The main flaw: inconsistent relative values

This section perhaps has too much detail to arrive at a fairly intuitive point. I thought this was worth doing because I find the point that there is a possible Pareto improvement on the table a powerful argument, and I didn’t want to hand-wave it. But the reader might want to skip to the next sections after getting the gist.

#### Deducing bounds for relative values from revealed preferences

Suppose that you order the ex-ante values of grants in different cause areas. The areas could be global health and development, animal welfare, speculative long-termism, etc. Their values could be given in QALYs (quality-adjusted life-years), sentience-adjusted QALYs, expected reduction in existential risk, but also in some relative unit2.

For simplicity, let us just pick the case where there are two cause areas:

More undilluted shades represent more valuable grants (e.g., larger reductions per dollar: of human suffering, animal suffering or existential risk), and lighter shades represent less valuable grants. Due to diminishing marginal returns, I’ve drawn the most valuable grants as smaller, though this doesn’t particularly matter.

Now, we can augment the picture by also considering the marginal grants which didn’t get funded.

In particular, imagine that the marginal grant which didn’t get funded for cause #1 has the same size as the marginal grant that did get funded for cause #2 (this doesn’t affect the thrust of the argument, it just makes it more apparent):

Now, from this, we can deduce some bounds on relative values:

In words rather than in shades of colour, this would be:

  * Spending L1 dollars at cost-effectiveness A greens/$ is better than spending L1 dollars at cost-effectiveness B reds/$
  * Spending L2 dollars at cost-effectiveness X reds/$ is better than spending L2 dollars at cost-effectiveness Y greens/$



Or, dividing by L1 and L2,

  * A greens is better than B reds
  * X reds is better than Y reds



In colors, this would correspond to all four squares having the same size:

Giving some values, this could be:

  * 10 greens is better than 2 reds
  * 3 reds is better than 5 greens



From this we could deduce that 6 reds > 10 greens > 2 reds, or that one green is worth between 0.2 and 0.6 reds.

#### But now there comes a new year

But the above was for one year. Now comes another year, with its own set of grants. But we are keeping the amount we allocate to each area constant.

It’s been a less promising year for green, and a more promising year for red, . So this means that some of the stuff that wasn’t funded last year for green is funded now, and some of the stuff that was funded last year for red isn’t funded now:

Now we can do the same comparisons as the last time:

  
And when we compare them against the previous year

we notice that there is an inconsistency.

### Why is the above a problem

The above is a problem not only because there is an inconsistency, but because there is a possible pareto improvement that’s not taken: transfer funding from cause area #2 to cause #1 in the first year, and viceversa in year #2, and you will get both more green and more red.

With this in mind, we can review some alternatives.

### Review of alternatives

#### Keep a “moral parliament” approach, but allow for trades in funding.

Worldview diversification might stem from a moral-parliament style set of values, where one’s values aren’t best modelled as a unitary agent, but rather as a parliament of diverse agents. And yet, the pareto improvement argument still binds. A solution might be to start with a moral parliament, but allow trades in funding from different constituents of the parliament. More generally, one might imagine that given a parliament, that parliament might _choose_ to become a unitary agent, and adopt a fixed, prenegotiated exchange rate between red and green.

One problem with this approach is that the relative values arrived at through negotiation will be “dangling”, i.e., they will depend on arbitrary features of the world, like each sides' negotiating position, negotiation prowess, or hard-headedness.

I suspect that between:

  1. asking oneself how much one values outcomes in different cause areas relative to each other, and then pursuing a measure of aggregate value with more or less vigor
  2. dividing one’s funding and letting the different sides negotiate it out.



it’s very possible that a funder’s preferences would be best satisfied by the first option.

#### Calculate and equalize relative values

Alternatively, worldview diversification can be understood as an attempt to approximate expected value given a limited ability to estimate relative values. If so, then the answer might be to notice that worldview-diversification is a fairly imperfect approximation to any kind of utilitarian/consequentialist expected value maximization, and to try to more perfectly approximate utilitarian/consequentialist expected value maximization. This would involve estimating the relative values of projects in different areas, and attempting to equalize marginal values across cause areas and across years.

Note that there is a related but slightly different question of how harcore one should be in one’s optimization. The question is related, but I think I can imagine an arrangement where one does a somewhat chill type of optimization—for example by adding deontological constraints to one’s actions, like not doing fraud—and still strive to take all possible Pareto improvements in one’s choices.

### As this relates to the Effective Altruism social movement and to Open Philanthropy (a large foundation)

Open Philanthropy is a large foundation which is implementing a scheme similar in spirit to—but probably more sophisticated than—the simple version of worldview diversification that I outlined here. Honestly, I have little insight into the inner workings of Open Philanthropy, and I wrote this post mostly because I was annoyed, and less in the expectation of having an impact.

Still, here are two quotes from [this 2017 blogposts](https://www.openphilanthropy.org/research/update-on-cause-prioritization-at-open-philanthropy/) which suggests that Open Philanthopy fell prey to the problem of inconsistent relative values:

> A notable outcome of the framework we’re working on is that we will no longer have a single “benchmark” for giving now vs. later, as we did in the past. Rather, each bucket of capital will have its own standards and way of assessing grants to determine whether they qualify for drawing down the capital in that bucket. For example, there might be one bucket that aims to maximize impact according to a long-termist worldview, and another that aims to maximize impact according to a near-termist worldview; each would have different benchmarks and other criteria for deciding on whether to make a given grant or save the money for later. We think this approach is a natural outcome of worldview diversification, and will help us establish more systematic benchmarks than we currently have.

  


> We see a great deal of intuitive appeal in the following principle, which we’ll call the “outlier opportunities” principle:
>
>> if we see an opportunity to do a huge, and in some sense “unusual” or “outlier,” amount of good according to worldview A by sacrificing a relatively modest, and in some sense “common” or “normal,” amount of good according to worldview B, we should do so (presuming that we consider both worldview A and worldview B highly plausible and reasonable and have deep uncertainty between them).

I think that is inelegant and could be better solved through inter-cause-area relative values.

Effective Altruism is a social movement nominally about “using evidence and reason to figure out how to benefit others as much as possible, and taking action on that basis”. It is related but distinct from Open Philanthropy. [Here](https://ea.greaterwrong.com/posts/E7CvbPvvNF2XnKqdJ/resolving-moral-uncertainty-with-randomization) is a recent post from a community member arguing that decisions should not be made by pursuing “expected choiceworthiness”, but rather:

> The sortition model prescribes that if you have x% credence in a theory, then you follow that theory x% of cases. If you have 20% credence in Kantianism, 30% credence in virtue ethics and 50% credence in utilitarianism, you follow Kantianism 20% of the time, virtue ethics 30% of the time and utilitarianism 50% of the time. When you act according to a theory is selected randomly with the probability of selection being the same as your credence in said theory.

It seems to me that a scheme such as this also falls prey to the problem of inconsistent relative values.

People in the Effective Altruism Movement also face the problem of trading off near-term altruistic goods—like quality-adjusted life years from global health interventions—against some chance of a larger but more speculative outcome, classically avoiding human extinction. I will relegate most discussion of this point to a footnote, but in short, if you don’t have consistent relative values between long-term and short-term interventions, then there will also be untaken Pareto improvements3.

### Challenges and recommendations

Throughout this point, I have assumed that we can estimate:

  * the ex-ante value of different grants and options
  * the relative values of progress across different cause areas



The problem with this is that this is currently not possible. My impression is that estimation:

  * is pretty advanced for global health and development and adjacent cause areas
  * is nascent for animal welfare and suffering
  * is very rudimentary for speculative longtermism cause areas



My recommendation here would be to invest more in relative value estimation across cause areas. [Here](https://forum.effectivealtruism.org/posts/3hH9NRqzGam65mgPG/five-steps-for-quantifying-speculative-interventions) is some past work on steps one would have to carry out to arrive at good relative estimates.

The organization that I work for—the Quantified Uncertainty Research Institute—is doing some work on this topic, and we should be putting out a few blogposts in the near future. Others like Rethink Priorities, are also working on similar or very adjacent topics, as reviewed [here](https://nunosempere.com/blog/2023/03/20/estimation-in-the-horizon/).

* * *

  1. This could mean that, taking into account the cost of estimation, the improvements are no longer Pareto improvements, or even pareto improvements. For instance, it could be that for all cause areas, \\( Value(\text{allocation}) < Value(\text{allocation with research}) \\), but \\( Value(\text{allocation}) > Value(\text{allocation with research}) - Cost(\text{research})\\), because research, arguendo, could be very costly. But my subjective impression is that this isn’t the case at all, because Open Philanthropy is a large foundation with a fortune on the order of tens of billions, and developing better estiamtion would cost <$10 million.↩
  2. I.e., you could ask about how much you value each project compared to each other, as I previously explored [here](https://nunosempere.com/blog/2022/09/12/an-experiment-eliciting-relative-estimates-for-open/).↩
  3. Note that, in a sense, the relative value between b QALYs and a few basis points in existential risk reduction is epsilon:1, or 1:~infinity. This is because one basis points contains many many QALYs.  
But in another sense, even if you have a really high intrinsic discount rate and value QALYs a lot, for the mother of god let there be no pareto improvements, let the relative values be consistent.  
In practice, though, you aren’t comparing q QALYs against b basis points, you are comparing q QALYs against some amount of quality-adjusted speculative work, which corresponds to a really hard to estimate amount, which could possibly be 0 or negative, in terms of basis points of existential risk reduction. So the point about the ratio between QALYs and existential risk being epsilon:1 becomes less apparent, and possibly just not the case. But the argument that there shouldn’t be Pareto improvements still applies.↩



Javascript needs to be activated to view comments.
