---
title: "Meta Jury Markets"
author: "Robin Hanson"
url: https://www.overcomingbias.com/p/meta-jury-markets
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by persuasion-epistemics/buterin-info-finance.md; Hanson on jury-resolved decision markets — coordination mechanism design"
---

# Meta Jury Markets

[](https://substack.com/@wildideaman)

[Robin Hanson](https://substack.com/@wildideaman)

Jun 13, 2024

24

11

1

Share

The prototypical legal “jury” consists of twelve random and anonymous citizens who are to passively hear ruling-relevant info while isolated from outside influences, to talk together in person for a few hours to a few days, and then to issue a binary ruling regarding which they have no obvious incentives. But let us now generalize this “jury” concept to any group tasked with making any ruling from a pre-determined set of options, with any way of selecting members, any ways to gain relevant info, any limits on outside influence, any time delay before deliberation starting or a decision being due, and any jury incentives tied to other things, including the rulings of other juries.

In these terms, a CEO with stock options making a management decision is also a “jury”, as is a single legal judge, as is a prediction market where anyone can bet any amount on a future event, with bets to be settled by some later judge of that event. Thus for any given topic where we might want a jury to rule, any given budget we can afford for it, and any given deadline by which we need a ruling, we can sensibly ask: _which_ particular kind of jury mechanism, spending that budget, ruling by that deadline, would give the most accurate ruling on that topic?

We expect ruling accuracy to typically (but not always) increase with the smallness of the ruling space, with the time delay until a decision must be made, with the expertise, intelligence, and experience of the jurors, with the independence of jurors from bribes from interested parties, with the resources available to jurors to aid their deliberation, and with the strength of accuracy-oriented incentives faced by jurors. And we should obviously want to collect a lot of data on the relative accuracy of different approaches in different contexts. 

If we want cheap fast rulings tied to topics where delays and resources help, a tempting solution is to use immediate conditional prediction markets estimating the rulings of random high-resource long-delayed juries, if they are actually impaneled to decide. (And perhaps recurse.) But even then we face the crucial question of exactly which kinds of delayed resourceful juries we should use, and if to tie their incentives to still later juries of other types. It is that key question I want to consider in this post.

But first let me remind you of just how much we might accomplish with better juries. Our world constantly has mobs arguing over claims where we should expect mobs to be much less accurate than decent juries. As mob members suffer from rush-to-judgement incentives, while juries wait to consider all evidence before deciding. We could use juries to decide who deserves to be [cancelled](https://www.overcomingbias.com/p/a-call-for-cancel-courtshtml?utm_source=publication-search), who to [blame](https://x.com/robinhanson/status/1800705248895349174) for relationship problems, to set official [policies](https://www.overcomingbias.com/p/governance-by-juryhtml), and much [more](https://mason.gmu.edu/~rhanson/gamblesuits.html). 

Ok, now back to our key question: how can we pick the most accurate jury to use in any given situation? I can see three kinds of key quality measures that we might use. 

The first key jury quality measure is _calibration_. If jury rulings can sometimes be compared to a ground truth, we can compare the rate of predicted events to actual rates. E.g., does something said to be 10% likely actually happen 10% of the time? We could do this in datasets of jury rulings, or we could ask prediction markets to estimate such calibration for particular future sets of rulings. Better calibrated juries are better, though given good calibration estimates we should be able to convert many uncalibrated juries into calibrated juries via transforming their rulings. 

Prediction markets are reliably well-calibrated, as are many forecasts built from statistical models. This suggests we use them more when unsure about the calibration of other methods. Maybe there’s also a way to enforce calibration via limited budgets of confidence levels? There’s clearly more work to do here on how to estimate or enforce calibration. But let me move on for now. 

The second key quality measure is _confidence_. Among well-calibrated estimates, the most confident ones are the most accurate. So as long as we can enforce or correct for calibration, we can just look for the juries that are most confident, all else equal, to find the most accurate ones. We might estimate confidence via datasets of juries and their rulings, or via prediction markets on the confidence of particular juries. 

The third key quality measure is: _consistency_. All else equal, a set of related and informative-enough juries predicted to have less variable rulings, and rulings closer to each other, seem to me plausibly more accurate, and less biased. More specifically, given any two juries that are actually impaneled, we could compare their rulings, and compute a distance between them. We could create conditional prediction markets to immediately estimate such future distances, if they happen. Or we could create two prediction markets, one on each future ruling, and compute the current distance between those estimates. 

For any given candidate jury, we could use such current or future ruling distance measures to “hill-climb” among similar juries to find better ones. That is, given a set of juries from some neighborhood in jury parameter space near a candidate jury, we could compute the sum of estimated distances from each jury to all the others in this neighborhood. The nearby jury with a lower distance sum plausibly seems more “consistent” than the candidate jury. To hill-climb, make this the new candidate jury, and repeat. This method doesn’t obviously enable one to usefully compare candidate juries from different basins of attraction, but it may plausibly help one to find the best jury in any given basin of attraction. Which isn’t nothing.

Maybe we could use tournaments to pick the best juries for given cases. Let people submit jury mechanism plans, paying a submission fee. Each entry gets a prediction market on its confidence, if we have decent calibration estimates for entries, and if not on its average distance from other tournaments entries. The winner, who gets a reward, is the jury with highest estimated confidence, or lowest estimated distance from other entries. Using confidence, one winning entry is implemented. Using consistency, maybe the top two entries are implemented, to see their distance.

**Added 15Jun:** For indefinitely recursive jury mechanisms, such as prediction markets predicting later markets, there’s a hard question of where in that process one predicts calibration, confidence, or consistency. 

24

11

1

Share
