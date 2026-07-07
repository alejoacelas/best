---
title: "Uncertainty smooths out differences in impact – Center on Long-Term Risk"
author: "Tobias Baumann"
date: 2017-07-21
url: https://longtermrisk.org/uncertainty-smoothes-out-differences-in-impact/
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by s-risks/coordination-challenges-preventing-ai-conflict.md; how moral/empirical uncertainty compresses impact differences (macrostrategy/cause prioritization)"
---

# Uncertainty smooths out differences in impact

21 July 2017 by [Tobias Baumann](https://longtermrisk.org/author/tobias-baumann/ "Posts by Tobias Baumann")

_Published on the CLR blog, where researchers are free to explore their own ideas on how humanity can best reduce suffering. ([more](/launching-fri-blog/))_  
_Cross-posted from my[website on cause prioritization research](http://prioritizationresearch.com/)._

Suppose you investigated two interventions A and B and came up with estimates for how much impact A and B will have. Your best guess1 is that A will spare a billion sentient beings from suffering, while B “only” spares a thousand beings. Now, should you actually believe that A is many orders of magnitude more effective than B?

We can hardly give a definitive answer to the question without further context, but we can point to several generic reasons to be sceptical. The [optimizer’s curse](http://lesswrong.com/lw/76k/the_optimizers_curse_and_how_to_beat_it/) is one of them. GiveWell has also written about [why we can’t take such estimates literally](http://lesswrong.com/lw/745/why_we_cant_take_expected_value_estimates/).2 In this post, I’ll consider another potential heuristic to reject claims of astronomical differences in impact.

Roughly speaking, the idea is that uncertainty tends to smooth out differences in impact. Given sufficient uncertainty, you cannot confidently rule out that B’s impact is of comparable (or even larger) magnitude. If you have 10% credence that B _somehow_ also affects a billion individuals, that suffices to reduce the difference in expected impact to one order of magnitude.3

Interestingly, this result doesn’t depend strongly on how much the two interventions naively seem to differ. If your best guess is that A affects 10^50 individuals and B affects only 1000, but you have 10% credence that B has the same astronomic impact, then the expected impact still differs by one order of magnitude only.

Of course, the crux of the argument is the assumption of equal magnitudes, that is, having non-negligible credence that B is comparably impactful. Why would we believe that?

One possible answer is that we’re uncertain or confused about many fundamental questions. The following list is just the tip of the iceberg:

  * **Cosmology:** How can we explain the [Fermi paradox](https://en.wikipedia.org/wiki/Fermi_paradox)? Do we live in a multiverse, and if so, [what kind of multiverse](https://en.wikipedia.org/wiki/Multiverse#Max_Tegmark.27s_four_levels)?
  * **Epistemology:** How should we handle [Pascalian reasoning](https://wiki.lesswrong.com/wiki/Pascal%27s_mugging)? The [leverage penalty](http://lesswrong.com/lw/h8k/pascals_muggle_infinitesimal_priors_and_strong/) is a potential answer, but it’s sometimes [not clear how to apply it](http://prioritizationresearch.com/should-altruists-prioritize-the-far-future/#Anthropics).
  * **Consciousness:** Which beings are morally relevant? What about [insects](http://reducing-suffering.org/the-importance-of-insect-suffering/), [reinforcement learners](https://arxiv.org/pdf/1410.8233.pdf), or even [electrons](http://reducing-suffering.org/is-there-suffering-in-fundamental-physics/)?
  * **Decision theory:** Do our actions [correlate with those of others](https://wiki.lesswrong.com/wiki/Acausal_trade), and if so, [what does that imply](http://reducing-suffering.org/why-charities-dont-differ-astronomically-in-cost-effectiveness/#Argument_5_Logical_action_correlations)?



Clearly, we have an incomplete understanding of the very fabric of reality, and this will not change in the foreseeable future. Now, claiming that something is many orders of magnitude more effective requires – roughly speaking – 99% confidence (or even more) that none of the above could flip the conclusion. That sets a high bar.

One might argue that the argument misses the point in that it focuses on B having an unusually small impact compared to A, rather than A having an unusually big impact.4 To see this, we only need to tweak the framing of the toy example. Suppose that intervention B affects 1000 individuals, and we’re uncertain whether intervention A affects 1000 or 10^50 individuals. Then A dominates by many orders of magnitude in expectation as long as we have non-negligible credence that A affects 10^50 individuals.5

This is a reasonable objection, but it only works if we are certain that B can’t _somehow_ affect the astronomical number of beings, too. This begs the question of how we can be certain about that. We can also point to big picture uncertainties (like action correlations and huge numbers of simulations) with the _specific_ implication that apparently small impacts can be [astronomically larger than](https://longtermrisk.org/how-the-simulation-argument-dampens-future-fanaticism#How_much_does_the_simulation_argument_reduce_future_fanaticism) they seem.

Contents

  * Examples
  * Qualifications
  * Implications
  * Acknowledgements



## Examples

We can apply this idea not just when comparing interventions, but also when comparing the scope of different cause areas or the impact we can have in different future scenarios. Even more abstractly, we can consider our impact conditional on competing hypotheses about the world.

For example, it is [sometimes argued](https://longtermrisk.org/altruists-should-prioritize-artificial-intelligence/#VIII_Impact_analysis) that we should assume that artificial superintelligence will be developed even if we think it's unlikely, because we can have a vastly larger impact in that case. I think this argument has some merit, but I don’t think the difference encompasses several orders of magnitude. This is because we can conceive of ways in which our decisions in non-AI scenarios may have similarly high impact – and even though this is not very likely, it suffices to reduce the difference in expected impact. (More details [here](http://prioritizationresearch.com/should-altruists-focus-on-artificial-intelligence/#What_about_the_wager).)

Another special case is comparing the impact of charities. Brian Tomasik has compiled a number of convincing reasons [why charities don’t differ astronomically in cost-effectiveness](http://reducing-suffering.org/why-charities-dont-differ-astronomically-in-cost-effectiveness/), including uncertainty about the flow-through effects of charities.

As another example, effective altruists often argue that the number of beings in the far future [dwarfs the present generation](https://ea-foundation.org/blog/the-importance-of-the-far-future/). I think the gist of the argument is correct, but our impact on the far future [is not obviously many orders of magnitude more important](http://reducing-suffering.org/altruists-focus-reducing-short-term-far-future-suffering/) in expectation. (See [here](http://prioritizationresearch.com/should-altruists-prioritize-the-far-future/) for my own thoughts on the issue.)

## Qualifications

As with any idea on this level of abstraction, we need to be careful about what it does and does not imply.

First, the argument does not imply that astronomical differences in impact never exist. [The map is not the territory](https://wiki.lesswrong.com/wiki/The_map_is_not_the_territory). In other words, the impact may differ by many orders of magnitude in the territory, but our uncertainty smooths out these differences in the map.

Second, the idea is a heuristic, not an airtight proof. I think it may work for a relatively broad class of interventions (or charities, hypotheses, etc.), but it may not work if you compare working on AI safety with playing video games. (Unless you’re in a [solipsist simulation](https://longtermrisk.org/how-the-simulation-argument-dampens-future-fanaticism#Solipsist_and_solipsish_simulations) or you’re a [Boltzmann brain](https://en.wikipedia.org/wiki/Boltzmann_brain).)

Third, the expected impact of an intervention or charity can be close to zero if we’re uncertain whether it reduces or increases suffering, or because positive and negative effects cancel each other out. In that case, a robustly positive intervention can be many orders of magnitude more effective – but this is just because we divide by something close to zero.

Fourth, we may be uncertain about the hypothesis in question, but justifiably confident about the differences in impact, which means that the argument doesn’t apply. For example, if we live [in a multiverse with many copies of us](http://reducing-suffering.org/anthropics-without-reference-classes/#Update_Feb_2015_You_are_all_your_copies), we can clearly have (vastly) more impact than if we exist in one universe only.

Finally, I’d like to clarify that I consider factual rather than moral uncertainty in this post. The idea may be applicable to the latter, too – see e.g. [this comment by Paul Christiano](http://lesswrong.com/lw/p5v/srisks_why_they_are_the_worst_existential_risks/du89) and [Brian Tomasik's piece on the two envelopes problem](http://reducing-suffering.org/two-envelopes-problem-for-brain-size-and-moral-uncertainty/) – but it depends on how exactly we reason about moral uncertainty.

## Implications

Suppose we adopt a heuristic of being sceptical about claims of astronomical differences in impact, either based on this post or based on Brian Tomasik’s empirical arguments for [why charities don't differ astronomically](http://reducing-suffering.org/why-charities-dont-differ-astronomically-in-cost-effectiveness/#Arguments_for_the_claim) in cost-effectiveness. What does that imply for our prioritization?

First, we can use it to justify scepticism about [Pascalian reasoning](http://lesswrong.com/lw/h8k/pascals_muggle_infinitesimal_priors_and_strong/). At the very least, you should require strong evidence for the claim that an intervention, charity, scenario, or hypothesis should dominate our decisions because of astronomical differences in impact. On the other hand, we should be careful to [not dismiss such arguments altogether](http://lesswrong.com/lw/z0/the_pascals_wager_fallacy_fallacy/). If we have non-negligible credence in both hypotheses A and B – say, more than 10% – then an impact difference of an order of magnitude in expectation suffices to justify acting as if the higher-impact hypothesis is true.

Second, the heuristic may also reduce the value of prioritization research, which is to some extent based on the belief that cause areas differ by many orders of magnitude. If we don’t believe that, then a larger fraction of altruistic endeavors is valuable. This, in turn, means that practical considerations like comparative advantages or disadvantages tip the balance more often than abstract considerations.

That said, I don’t think a strong version of this argument works. A difference of 10 times is still massive in practical terms and suffices to make prioritization research worthwhile.6

## Acknowledgements

I would like to thank Max Daniel, Caspar Österheld, and Brian Tomasik for their valuable feedback and comments on the first draft of this piece.

  1. In this case, “best guess” refers to the respective mode of the two probability distributions, not the expected value estimate. (back)
  2. Note that GiveWell’s post refers to estimates of the expected value (in contrast to this piece). (back)
  3. B’s expected impact is 10% * 1000000000 + 90% * 1000 = 100000900, i.e. roughly 10^8 compared to A’s 10^9. (back)
  4. HT Max Daniel for this point. (back)
  5. Of course, reasoning explicitly about expected values raises a plethora of technical issues. For instance, expected values [may be infinite](https://en.wikipedia.org/wiki/St._Petersburg_paradox), and we may have to deal [two envelopes problem](https://en.wikipedia.org/wiki/Two_envelopes_problem) if A can be astronomically more impactful than B, but B can also be astronomically more impactful than A. (back)
  6. For instance, if you have 10 years during which you can improve the world, and you’d have to spend 8 years trying to find an intervention that’s 10 times as good as what you would do counterfactually, then it’s already worth it. (back)



In this case, “best guess” refers to the respective mode of the two probability distributions, not the expected value estimate.

Note that GiveWell’s post refers to estimates of the expected value (in contrast to this piece).

B’s expected impact is 10% * 1000000000 + 90% * 1000 = 100000900, i.e. roughly 10^8 compared to A’s 10^9.

HT Max Daniel for this point.

Of course, reasoning explicitly about expected values raises a plethora of technical issues. For instance, expected values [may be infinite](https://en.wikipedia.org/wiki/St._Petersburg_paradox), and we may have to deal [two envelopes problem](https://en.wikipedia.org/wiki/Two_envelopes_problem) if A can be astronomically more impactful than B, but B can also be astronomically more impactful than A.

For instance, if you have 10 years during which you can improve the world, and you’d have to spend 8 years trying to find an intervention that’s 10 times as good as what you would do counterfactually, then it’s already worth it.
