---
title: "Cost-effectiveness model for AI alignment-to-animals vs. alignment-in-general"
author: "Michael Dickens"
date: 2026-03-24
url: https://mdickens.me/2026/03/24/alignment-to-animals_BOTEC
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ideas-improving-animal-welfare-tai.md; Dickens BOTEC on aligning AI to animals — animals-under-AI"
---

# [Cost-effectiveness model for AI alignment-to-animals vs. alignment-in-general](/2026/03/24/alignment-to-animals_BOTEC/)

_Cross-posted to the[EA Forum](https://forum.effectivealtruism.org/posts/GcZvNEhKJLbbGHDpQ/cost-effectiveness-model-for-ai-alignment-to-animals-vs)._

Last September, I [wrote](https://mdickens.me/2025/09/19/ai_safety_landscape/):

>   1. There’s a (say) 80% chance that an aligned(-to-humans) AI will be good for animals, but that still leaves a 20% chance of a bad outcome.
>   2. AI-for-animals receives much less than 20% as much funding as AI safety.
>   3. Cost-effectiveness maybe scales with the inverse of the amount invested. Therefore, AI-for-animals interventions are more cost-effective on the margin than AI safety.
> 


Today, I’m fleshing out this argument with a cost-effectiveness model. The model estimates how much it costs to make progress on AI alignment—the general problem of getting ASI to achieve any goal without subsequently killing everyone—compared to how much it costs to make progress on aligning AI to animal welfare specifically.

The model is on SquiggleHub: <https://squigglehub.org/models/AI-for-animals/alignment-to-animals-EV-simple>

## Contents

  * Contents
  * How the model works
  * Inputs
  * Output
  * Some limitations of the model
  * Implications
  * Notes



## How the model works

The basic setup:

  1. It costs some amount to solve AI alignment, and some amount already has been spent and will be spent in the future.
  2. It costs some amount to solve alignment-to-animals, and approximately $0 has been spent so far.
  3. The value of marginal spending is inversely proportional to the cost of solving the problem.1
  4. Solving alignment-to-animals only matters if the general alignment problem is solved as well, _and_ if aligned ASI isn’t good for animals by default. 
     * If alignment isn’t solved, then you can’t point ASI toward any goal at all, so it doesn’t matter if you figure out how to choose a goal that’s compatible with animal welfare.
     * If alignment is good for animals by default, then any work on the problem is wasted because there _is_ no problem.
  5. Present-day work on alignment-to-animals has a field-building multiplier, where work attracts more people to the field. (AI alignment has no multiplier on the assumption that it’s sufficiently popularized that field-building effects are weak.)



The model provides two comparisons:

  1. progress per dollar on alignment-to-animals <—> progress per dollar on alignment
  2. animal welfare improvement per dollar spent on alignment-to-animals <—> animal welfare improvement per dollar spent on alignment (via the possibility that alignment is good for animals by default)



The first comparison is useful, but isn’t ultimately what you want—a dollar could buy a lot of progress on a problem that doesn’t matter much. To make a prioritization decision, you’d also need to say how much good it does to solve alignment-to-animals compared to solving alignment. That answer depends on (1) the moral value of different kinds of beings and (2) expectations about what the far future will look like.

The second comparison is apples-to-apples, so the result can feed directly into a prioritization decision.

The second comparison provides a lower bound on the cost-effectiveness of alignment work: it includes the impact on animal welfare, but not on human welfare. The actual cost-effectiveness of alignment (accounting for human welfare) is higher; whether it’s a little higher or a lot higher depends on your values and on how many humans vs. animals exist in the future.

This model does not directly consider non-human, non-animal beings, such as digital minds. Many methods to improve alignment-to-animals would also improve alignment-to-nonhumans.

I developed this model by writing an outline (similar to the one above) and passing it into [Squiggle AI](https://squigglehub.org/ai) to generate a model. Then I manually reviewed the model to make some corrections and improvements. I determined all of the parameter values myself.

## Inputs

I’ll briefly explain the input parameters and what values I chose as the defaults. The first two parameters are set by [a subsidiary model](https://squigglehub.org/models/AI-safety/p-solve-alignment) and imported into [the main model](https://squigglehub.org/models/AI-for-animals/alignment-to-animals-EV-simple).

  1. **Cost to solve alignment:** This parameter exists in the model, but it doesn’t affect the output at all. What matters is the _relative_ cost of solving alignment vs. alignment-to-animals. That being said, the cost to solve alignment is distributed over multiple orders of magnitude from $1 billion to $1 trillion, with 75% of the probability mass on the upper half of the range (on a log scale, so $32 billion to $1 trillion).
  2. **Probability of solving alignment:** The [subsidiary model](https://squigglehub.org/models/AI-safety/p-solve-alignment) has a parameter for the amount that will be invested into AI alignment. The probability of solving alignment is determined as the probability that the total investment exceeds the cost to solve alignment. The probability came out at 12%, which matches my intuition. (I’d probably put it a bit higher than that, maybe 20%, but I left the parameters intact rather than adjusting them to make the derived values match my intuition.)
  3. **Cost reduction factor:** How much cheaper is it to solve alignment-to-animals than to solve alignment in general? The default 90% CI is 3x to 30x. There is no reliable estimate for this figure, so I just used my intuition: alignment-to-animals seems somewhere between “a little easier” and “a lot easier”.
  4. **Field-building multiplier:** How much does $1 on alignment-to-animals catalyze future spending? There may be a way to empirically estimate field-building effects, but I just used my intuition: the multiplier is probably between 1x and 10x. Maybe there’s essentially no field-building effect, or maybe almost all of the benefit of marginal research comes from field-building; both are plausible.
  5. **Probability that an aligned AI is good for animals by default:** I put down an 70% chance,2 on the theory that one of two things is probably true: 
     * To be robustly aligned, ASI needs to adopt a generalization of human values as opposed to humans’ short-term preferences, and a generalization would extrapolate from the principle of compassion/concern for welfare to deduce that animal welfare matters.
     * An aligned ASI would (ultimately) restructure earth to make maximum use of its resources, which would entail eliminating wild animal suffering even if that’s not an explicit goal.3
  6. **Badness of animals for aligned AI (if it’s bad):** In the scenario where aligned AI is bad for animals, how bad is it relative to goodness of the scenario where aligned AI is good? This parameter could vary greatly depending on: will the good outcome be ordinary or utopian? will the bad outcome entail spreading wild animal suffering across the universe? does suffering warrant greater weight than happiness? etc. I set this parameter to a 90% CI of 0.01 to 0.1, on the assumption that the good outcome will be optimized for flourishing and therefore much more good than the bad outcome is bad. But a future filled with wild animal suffering would be much more bad than a “normal good” future is good, so you could reasonably set this parameter to 100x or higher, which would make alignment-to-animals look much more cost-effective. For more on the various ways the future could be good or bad, see [Is Preventing Human Extinction Good?](https://mdickens.me/2015/08/15/is_preventing_human_extinction_good/)



## Output

According to the model parameters:

  1. It’s 1.7x more cost-effective to make progress on alignment-to-animals as on AI alignment (90% CI: 0.22 to 5.14)—that’s after accounting for the fact that solving alignment-to-animals requires both that alignment is solved and that alignment isn’t good for animals by default.
  2. Alignment-to-animals work is an expected 2.7x better _for animal welfare specifically_ than generic alignment work (90% CI: 0.34x to 7.9x).



This makes it ambiguous (according to the model) whether it’s better to work on alignment or alignment-to-animals, depending on how much you value animal welfare and whether you expect the far future to contain a lot of animals.

If we only consider animal welfare, then alignment-to-animals work looks better than alignment work by a 2.7:1 ratio. This result is close enough to 1:1 that it’s easy to reverse by changing parameter values.

For example, maybe the field-building multiplier is too generous. Setting it to a fixed 1x reverses the result, so that AI alignment work is 1.5x as cost-effective _for improving animal welfare_ as alignment-to-animals work.

The default model result matches my intuition: without crunching any numbers, my guess would be that working on alignment-to-animals is a more cost-effective way of helping animals, but not by a huge margin.5

It’s slightly disappointing to see that the two cost-effectiveness estimates came out so similar, but that does tell us something: we could’ve gotten a result that unambiguously pointed one way or the other, and we didn’t, which means the choice is a genuine close call—unless the model is biased in one direction, in which case maybe the answer really would be unambiguous if the bias were fixed.

The biggest uncertainty is the “badness of aligned AI (if bad)” parameter. You could justify putting in a value that’s multiple orders of magnitude larger, which would greatly change the result. (You could also make it multiple orders of magnitude smaller, but that wouldn’t affect the outcome much.)

## Some limitations of the model

Reality has too much detail for me to identify every way that the model deviates from reality, but I’ll name a few big ones.

  * The model collapses the distribution of aligned-AI outcomes into a binary “good for animals” vs. “bad for animals”, when really there’s a broad spectrum where utility across outcomes spans many orders of magnitude. The expected utility of actions greatly depends on highly uncertain assumptions about the future, which makes a pure expected utility approach fragile. This is a major open problem.
  * The model treats misaligned AI as neither good nor bad for animals. The most likely outcome is that misaligned AI would be better for animals than the stats quo because it would end wild animal suffering (there would be no more elephants, but [there would be no more unethical treatment of elephants, either](https://www.youtube.com/watch?v=XUih7uSQ9M4)). However, there is a possibility that misaligned AI would [greatly increase suffering in the universe](https://longtermrisk.org/reducing-risks-of-astronomical-suffering-a-neglected-priority/). This is an important point, but I don’t know how to account for it. This point hints at a whole research agenda on expected animal welfare outcomes under misaligned ASI vs. no-ASI regimes; creating that research agenda is out of scope for this post.
  * The model does not differentiate between approaches: it treats “alignment work” as unified thing, and “alignment-to-animals” as a different unified thing. In reality, some alignment strategies are more likely than others to produce an ASI that cares about animals by default. (Example: [CEV](https://www.lesswrong.com/w/coherent-extrapolated-volition)-style approaches are probably better for animals than [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback)-style approaches.) The model underestimates the value of AI alignment because animal-friendly researchers can choose research avenues that are particularly likely to be good for animals. 
    * The model includes no field-building multiplier for general alignment, but it would be appropriate to use a multiplier for neglected sub-fields within alignment.
  * The model treats all inputs as independent, when really some of them follow from shared background beliefs. For example, I believe the current dominant approaches to alignment are unlikely to succeed, and they’re also unlikely to be good for animals by default. That belief informed my choice of low `P(solve alignment)` and high `P(alignment is good for animals by default)`; those two inputs are correlated.



## Implications

For a model like this, it’s impossible to pin down narrow ranges for the input values, so the model output will always have high uncertainty; but creating a model is still a worthy exercise. I would be interested in reading opinionated comments about what the parameter values ought to be, and which of the defaults are most wrong.

The model considers two interventions: AI alignment work and alignment-to-animals work. I chose them because they’re easy to compare, not because they’re my top priorities. My top priority is to prevent superintelligent AI from being built until we know how to make it safe—see the cause prioritization sections in [Where I Am Donating in 2024](https://mdickens.me/2024/11/18/where_i_am_donating_in_2024/#cause-prioritization) and [2025](https://mdickens.me/2025/11/22/where_i_am_donating_in_2025/#how-ive-changed-my-mind-since-last-year).

Before creating this model, my belief was something like:

  1. AI pause advocacy is a better idea than marginal alignment research.
  2. Alignment-to-animals (or similar problems) [might be more important](https://mdickens.me/2025/11/22/where_i_am_donating_in_2025/#how-ive-changed-my-mind-since-last-year) than AI pause advocacy; it’s hard to say.



This model provides weak reason to believe that alignment-to-animals is not dramatically more cost-effective than general alignment. At minimum, the model shows that it’s hard to have _confidence_ that alignment-to-animals is better than alignment. That leads me to believe that, by the transitive property, AI pause advocacy is better than alignment-to-animals.

# Notes

  1. The thing you actually care about is the probability that marginal funding will tip the problem from not-solved to solved. I tried modeling it that way explicitly, but it made the math weird. So instead, the model gives proportional credit to every dollar spent, not just the final marginal dollar. ↩

  2. In the introduction (quoting myself from September 2025) I wrote 80%, but I changed my estimate to 70% after thinking through the future scenarios a bit more carefully. ↩

  3. Clearly, non-existence isn’t the best possible outcome for wild animals, but at least it’s an improvement over the status quo. ↩

  4. If you run the model, you may find slightly different numbers, because they’re generated via a non-deterministic Monte Carlo simulation. ↩

  5. I didn’t consciously change the inputs to make the output match my intuition, but I might have done something subconsciously. ↩




Posted on Mar 24, 2026
