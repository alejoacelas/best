---
title: "Issues with futarchy"
date: 2021-10-07
url: https://rethinkpriorities.org/research-area/issues-with-futarchy/
fetched: 2026-07-07
via: html2text
topic: "persuasion-epistemics"
note: "gap-scour: structured futarchy/prediction-market critic opposite Buterin and Hanson"
---

Share

_This research was written by Lizka V, a Visiting Fellow at Rethink Priorities, in Summer 2021 as part of their internship._

This post collects possible issues with **futarchy** , a proposed form of governance based on prediction markets. (Possible _benefits_ of futarchy are listed in the paper that introduces the idea and in [my summary of it](https://forum.effectivealtruism.org/posts/ijohdoDbPvdeXMpiz/summary-and-takeaways-hanson-s-shall-we-vote-on-values-but), among other places.) The post also lays out my main takeaways and a rough explanation for why I think futarchy should _not_ be a focus for the EA community.

A **prediction market** is a way to facilitate bets on different possible future outcomes. Prediction markets tend to aggregate those bets and their underlying beliefs reasonably well (and better than just averaging forecasts) — they push back against some biases and weigh different bettors’ beliefs by their confidence levels (and other factors, like the size of their bankroll and their tolerance for risk). A **decision market** sets up a number of prediction markets that are _conditional_ on certain events happening. The difference in prices can then be used to infer the possible outcomes of those events and to inform decisions.

If you don’t know what a prediction market is, what a decision market is, or what futarchy is, you should probably do something like skim [my earlier post](https://forum.effectivealtruism.org/posts/ijohdoDbPvdeXMpiz/summary-and-takeaways-hanson-s-shall-we-vote-on-values-but) before reading this one.[1] I do not spend time explaining these concepts, and use more jargon in this post than in that one.

**Why I wrote this**

A number of people in the EA community seem excited about the idea of futarchy (or related forms of governance). Those excited seem to believe that futarchy has a significant chance of being a serious improvement over current forms of democracy (e.g. the US model), if only one could implement it. They conclude that this means we should invest in the idea.[2] This post pushes back on this, exploring some possible risks and weaknesses of futarchy (and by extension of prediction and decision markets) from an EA perspective. The resulting list of weaknesses can also provide possible research directions. This post was part of a project for my internship at Rethink Priorities.

## Summary of the six main issues in this list

  1. An official measure of welfare would be significantly vulnerable to corruption and/or will fall prey to Goodhart’s Law
  2. As a general rule, the rich will have more influence than the poor
  3. Long time horizons become more difficult
  4. Internal interests and technical issues with decision markets: Interpreting market prices as the expected values of policies is not that straightforward
  5. Buying policies: manipulation through extreme wealth
  6. Vaguer concerns
     1. Sanity checks are lacking in futarchy
     2. Getting the extent of power of the futarchy markets precisely right seems very hard
     3. Futarchy may allow us to make better decisions based on values that are poorly aligned with impartial welfare



## Personal takeaways and thoughts on futarchy

  * The EA community should not spend resources on interventions that try to promote futarchy. (Phrased differently: increasing the likelihood of futarchy should not be viewed as one of the pathways to impact of a proposed project or intervention.)

    * I don’t think building pathways to futarchy is tractable and there is no strong argument for futarchy solving a problem with a significant scope.
    * On a smaller scale, I do not think that setting up _decision markets_ at arbitrary institutions is necessarily an effective intervention that would (by itself) lead to broadly improved policies or a great amount of benefit for the world. To use the framework from [my post on disentangling improving institutional decision-making](https://forum.effectivealtruism.org/posts/Ds2PCjKgztXtQrqAF/disentangling-improving-institutional-decision-making-2), I think this sort of activity is a broad and value-neutral intervention that _might_ improve our intellectual and/or political environment, and _might_ generally improve the outcomes of institutions’ decisions (where “improve” means “lead to more welfare from”), but I do not think it would be particularly effective. It might, however, save institutions money. Note however that there are other reasons for why one might set up decision markets at a given organization, and Hanson argues that it is worth doing on a large scale.[3]
  * I think believing that futarchy is truly promising requires accepting some of the following cruxes (which I do not believe):

    * We would be able to coherently decide on a measure of welfare that 1) is easy to measure consistently and while avoiding corruption, and 2) captures most of what we want it to capture
    * The rich are more suited to make policy decisions than the poor **or** the rich _already_ have (comparably) more power over policy decisions (i.e. the rich do not get significantly more power under futarchy than they have under existing forms of democracy)
    * The power of financial self-interest consistently trumps strong motivations in the political sphere.
  * Should we spend resources on an intervention related to futarchy?[4]

    1. A broad argument often used to advocate spending resources on futarchy is as follows. There is some (perhaps small) chance that futarchy, if properly implemented, will be a significant improvement over the status quo. If this turns out to be true, it could improve nearly all policymaking. So we have **a small likelihood of a huge payoff** , and the expected value of trying futarchy (or devoting resources to developing the idea further) is therefore quite large.
    2. Pushing back on this argument:
       1. First, even if properly implemented, **futarchy also has a good chance of being worse** than the status quo (for example due to issues outlined below).
       2. Second, and perhaps more importantly, **“properly implemented” is pulling a lot of weight** ; less-than-properly implemented futarchy seems quite likely to devolve into something closer to plutocracy or kleptocracy, or perhaps into a society that optimizes for something poorly aligned with our actual values. I expect that these versions of futarchy are much worse than our existing and flawed versions of democracy, which, when imperfect, merely become populist or inefficient.
       3. So in the above sketch of the expected value of devoting resources to developing futarchy, we should also include the associated downsides.
    3. **It may still be worth spending resources on some particular futarchy-related projects**. In particular, it can be (very) valuable in expectation to do something that is equally or more likely to be harmful than helpful, if (a) you will retain influence on whether or not to continue doing it, and (b) trying it will [give you information](https://forum.effectivealtruism.org/tag/value-of-information) on how helpful (or harmful) the thing is.[5] (For example, it could be worth taking an antidepressant that will probably be net negative due to low efficacy and moderate side effects if (a) the patient can either keep using it for years if it happens to work well, or stop if it was bad, and (b) there is significant variation in how the antidepressant affects people and the patient will find out how the antidepressant affects them trying it.)
    4. How strongly (a) and (b) hold will depend on the specific intervention and case in question. For instance, maybe in some cases things would develop a momentum of their own and get out of hand, or maybe we could gather information about as well without a big experiment or a big experiment would have too much noise.
  * Some much simpler and more specific variations of futarchy seem quite promising to me. For instance, decision markets could function as an information aid for voters.[6] I would be excited to see more exploration on this front.




## Issues with futarchy (and some ideas for how to address them)

### Major strong points of futarchy

  * Private aims are aligned with public good
  * Improved information aggregation
  * Prediction markets have a reasonably good track record



### Six of the most critical issues with futarchy

### (1) An official measure of welfare would be significantly vulnerable to corruption and/or will fall prey to [Goodhart’s Law](https://en.wikipedia.org/wiki/Goodhart%27s_law) (“when ​​a measure becomes a target, it ceases to be a good measure”).

Given a measure of welfare, there will be a **tradeoff between (1) robustness against manipulation** (it isn’t so hard to measure that it becomes easy to corrupt) **and (2) capturing what we care about** (the measure captures nuanced and harder to describe values, and resists Goodhart’s Law as much as possible).

  1. If we try to incorporate many nuanced proxies of national welfare, we will introduce **vulnerabilities to error and manipulation**.
     * Here is a rough example. ​​Suppose an important element of our welfare function is affective subjective well-being, and this is assessed through polling data on questions like “on a scale of 1-10, how well do you feel about your life today? Now firms will have a strong incentive to manipulate this variable up (or down) from “true happiness.” For example, by
       * running social media campaigns to change how we interpret certain words like “well” or certain numerical intuitions (if our intuitive baseline shifts between 5 and 7, this would seriously affect results)
       * bribing pollsters
       * accelerating or decelerating [trends of increasingly few people answering polls](https://www.inquirer.com/science/poll-statistics-reliability-cell-phones-monmouth-university-20200210.html) (note that people who answer polls are almost always statistically quite distinct from non-responders).
     * This is also related to [regulatory capture](https://en.wikipedia.org/wiki/Regulatory_capture).
  2. If we try to avoid manipulation (and error) in the measurement process of our measure of welfare, we could try to rely on proxies for welfare that are “hard” and more difficult to game (like life expectancy or GDP), but then we will be **open to classic Goodhart-style issues**.
     * As a caricature of an example, if a significant part of the welfare measure is GDP, one law that would pass if proposed is “people are required to spend an hour a day giving each other $100 bills” (since every transfer of a $100 bill increases GDP by $100). ([An example](https://lareviewofbooks.org/article/fraud-by-numbers-metrics-and-the-new-academic-misconduct/) of this happening in academia.)



**Possible solutions, counter-arguments, or approaches**

  1. Add **sanity checks** to the legislature. For instance, allow courts to rule on whether some group is trying to manipulate the assessment of welfare at a given time, and impose harsh penalties on this.
     * My personal impression is that this would be very hard, but we outlaw some forms of manipulation and market manipulation today, so it might be possible and could be worth investigating.
  2. **Maybe not having an explicit measure is even worse than having one that is vulnerable to Goodhart’s Law.**
     * I think this is largely not true. Consider the following small-scale (and somewhat extreme) mental experiment as an illustration. Suppose that colleges in the US were all incentivized exclusively to rise on some kind of official and supreme ranking based on a weighted list of specified positive [qualities](https://www.usnews.com/education/best-colleges/articles/ranking-criteria-and-weights) determined by a committee. (These could include selectivity of the college, faculty-student ratios, diversity of the student body, the number of gyms on campus, alumni donations, etc.) To be consistent with futarchy, suppose that colleges did not care about anything else (including PR issues for trying to game the system). I think the result would be a bunch of shenanigans: paying people to apply to the college, hiring random people as faculty to teach one small class, setting up terrible gyms, running giant donor galas, etc.. Obviously, the list of qualities could be repeatedly updated with increasingly improved proxies that are harder to game (e.g. maybe more weight would be given to graduation rate, or earnings after graduation), but in the end, I think we would either fall prey to Goodhart’s Law or end up maximizing hard-to-game metrics at the cost of values we care about (e.g. a college might end up graduating everyone, or dissolving all non-engineering or CS departments in order to maximize graduates’ earnings).
  3. Hanson claims that **we have recently gotten better at defining measures of welfare** , and this [is true](https://en.wikipedia.org/wiki/Broad_measures_of_economic_progress), but doesn’t truly address this problem.



**Additional issues with the official measure of welfare**

  1. It seems incredibly difficult to set up a voting process that would (tend to) produce **coherent collections of values and relevant _weights_ to assign to those values**. (By “weights” I mean that we could give 40% of the measure of welfare to something like national GDP, 20% to some other easily measurable proxies for welfare, 20% to environmental proxies, 10% to something else, etc..) More specifically, under poorly managed systems, different proxies for the same value might end up competing and splitting votes or double-counting interest in the underlying value (e.g. GDP and poverty levels are related).
  2. It seems possible that tensions between voters and certain forms of **polarization** could become worse as **values become explicit**. In particular, we would end up with people campaigning for specific values (e.g. animal welfare), and for weights we should award to different values, and this could result in signaling-via-vote or more heated discussion
  3. It is not clear to me **whether formalizing a measure of welfare would make values harder to change** than they are currently (it likely depends on the specific voting system that would be set up), but this question seems worth considering. It seems plausible that formalization would make [status quo bias](https://en.wikipedia.org/wiki/Status_quo_bias) worse. For instance, if we vote to prioritize the welfare of some specific kinds of animals, and then as time passes, develop identities around this value, pass a number of policies that attempt to maximize that aspect of the measure of welfare, etc., we might be hesitant to then deprioritize those animals in favor of others— even if we get new information. We could accidentally exclude the interests of some groups of beings and make it harder to change that in the future, etc. On the other hand, status quo bias is already an issue, and futarchy introduces an explicit system for changing a society’s goals, which could be a serious improvement on this front.



**Connection to futarchy**

A measure of welfare is crucial to the whole idea of futarchy. (Futarchy doesn’t involve betting on specific outcomes, like “air quality, as measured by X stations, will improve conditional on Policy Y,” but rather on _welfare_ futures, as [explained in this post](https://forum.effectivealtruism.org/posts/ijohdoDbPvdeXMpiz/summary-and-takeaways-hanson-s-shall-we-vote-on-values-but#Large_scale_proposal__Futarchy_).) Without this measure, it is impossible to hard-wire the decision markets to the decisions themselves— there would be no way to decide whether to pass a policy that will improve air quality but harm poverty reduction efforts.

**In sum**

This issue is critical, and it is not clear how to solve it. It does not affect decision markets used in less futarchy-like ways (although removing the welfare function would mean a more complicated process for resolving bets).

### (2) As a general rule, the rich will have more influence than the poor (and this is bad).

Even setting aside the possibility of [manipulations](https://www.washingtonpost.com/news/wonk/wp/2012/10/23/how-to-manipulate-prediction-markets-and-boost-mitt-romneys-fortunes/) or deliberate power grabs, [Wolfers and Zitzewitz (2007)](https://users.nber.org/~jwolfers/papers/InterpretingPredictionMarketPrices.pdf) suggest that, in some circumstances, “the market equilibrium price [would be] an average of beliefs in the trading population, although each belief [would be] **weighted according to the average wealth of traders holding that belief** , relative to the average wealth level.”[7] (This might happen because the poor are less willing to risk larger amounts of money on futarchy markets, because they have less time available to spend on this, or because they lack necessary knowledge on how to participate, which would all lead to unequal participation in the markets.) This poses an issue if there is no expectation that a wealthy selection of voters will have representative (or somehow better) views than a random selection of voters — i.e. it poses an issue if wealth is correlated with holding some beliefs in ways unrelated to the _accuracy_ of those beliefs, which it [seems to be](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3599835).

Note that this is distinct from the related claim that the _values_ of the wealthy will be over-emphasized under futarchy, and that the wealthy would have more power to pass policies that are favorable for them. This claim seems more contestable; in theory, the values are voted on and the interests of all parties, poor and wealthy alike, should be aggregated in the incentives of the markets. However, if the markets stray from cold-blooded optimization of the external values towards ideal-oriented participation (where external, non-market incentives or biases play a significant role), then the claim being made in this section becomes similar to the claim made here. I explore this more in the description of the fifth possible issue with futarchy.

The fact that beliefs would be weighted by wealth (at least to a certain extent) poses a problem to futarchy. Beyond the civil rights implications of such income-based weighting, some have argued that the beliefs of communities contain information that is difficult to extract. In particular, it seems often true that [rich people should defer to poor people on poverty-related policy ideas](https://slatestarcodex.com/2017/03/16/book-review-seeing-like-a-state/), and this doesn’t happen under futarchy. This kind of relationship between power and wealth could also turn into a positive feedback loop that reduces social mobility.

**Possible counter-arguments**

  1. Traders who don’t account for their lack of understanding of things like poverty-related policies (by, say, polling poor people on their policy preferences), will lose money to traders who do.
     * I think this solves part of the problem, but the problem will remain as long as the futarchy markets are not perfect, and as long as bettors whose wealth is mostly independent of the futarchy markets are influential for futarchy.
  2. This could be a feature, not a bug. First, those who get rich by playing in the futarchy markets are presumably those who are good at evaluating policies. Second, the rich might know better and be (even) more invested in policies going well than the poor.
     * Many people care about policy decisions, so I don’t think we can expect that bettors whose wealth is mostly independent of the futarchy markets (i.e. the futarchy is not their chief source of income) will have no or little influence. So while wealth may end up slightly correlated with policy assessment skills, I don’t think we can expect that correlation to be strong.
     * I think the evidence for the second argument is insufficient (I have a strong prior against the argument)— I am mostly including it here because I have seen it made.
  3. In practice, under modern democracies, the beliefs of the wealthy are already weighted more than those of the poor.
     * I think this is likely true, but is less extensive than it would be under futarchy. It is also less reinforced— futarchy writes it into the system, attractor-basin style. Additionally, many of the phenomena that grant the wealthy more influence over things like policy decisions (like advertising or propaganda and corruption) would persist under most versions of futarchy, so the effects could be compounded.



**Possible solutions or approaches to the issue**

  1. Have people trade with **play money instead of real money**.
     * The problem is that, if the play money does not correspond to real money, then people cannot profit from futarchy markets, and so the personal incentives to be accurate (which are futarchy’s main strong point) are weakened. If, to resolve this issue, play money will eventually be worth real money, then even if you are handing out capped amounts to every person, the rich could buy the futarchy system’s play money from poor players, who would presumably sometimes be willing to sacrifice their betting power for actual funding. (Note that this might be good for the poorer players as individuals, but would harm the system.)
       * One variation to explore: have people bet with _points_ (everyone is allotted some to start with) that they can then use to have more influence over policy decisions.
  2. **Cap the amount of money** people can put into the futarchy markets.
     * If the cap is quite high, then the poor will still not participate nearly as much as the medium-to-extremely rich. If the cap is very low, then the market could be significantly distorted, e.g. by exacerbating [favourite-longshot bias](https://en.wikipedia.org/wiki/Favourite-longshot_bias). (See for instance the [discussion on “Regulatory Limits on the Size of Bets” here](https://politicalpredictionmarkets.com/volume-and-liquidity-on-predictit/), and also the discussion on caps in [this book review of Inadequate Equilibria](https://slatestarcodex.com/2017/11/30/book-review-inadequate-equilibria/).) In any case, a cap might also not address inequalities in time available to participate, knowledge about how to participate, etc.
  3. Find **other ways** of incorporating the beliefs of the poor into the market. (I’m skeptical of this working well.)



**Connection to futarchy**

The whole point of futarchy is its markets, so this issue is at the heart of any kind of use of prediction markets for policy. However, if we find a solution that separates participation in the markets from real-world wealth, this issue might be avoidable.

**In sum**

This issue is serious and complicated (and easy to misinterpret), but there are potential solutions that people might want to explore.

### (3) Long time horizons become more difficult

In brief, the issue is that both incentives and bettors’ abilities get worse as the timelines of projects become longer. For instance, understanding the 5-year effects of a policy is easier than understanding its 10-year effects, and this in turn is easier than understanding its 20-year effects. Moreover, decision-makers tend to be less motivated to consider longer time horizons. Futarchy seems to exacerbate this issue.

  * **Incentives**
    * Under current systems, decision-makers are already sometimes incentivized to prioritize the near-term rather than the long-term. For instance, imagine someone who is trying to get re-elected for a position; this person is less likely to push for an unpopular but necessary policy. Many positions, however, are significantly longer-term than, say, four years, and even with shorter terms, decision-makers do seem to often care about what happens beyond their terms.
    * Under futarchy, however, **if a strange policy were to reliably promise to significantly increase welfare for the next 20 years and then somehow implode, tanking national welfare for the next 100 years, it is quite likely that the policy would pass** , as bettors who buy its shares would get paid out on the shorter time-span, and patient bettors are rare, so they would not correct the market. As one example, if you think a market is mispriced by 10%, you’d happily invest in it (and thus correct the market a bit) if the market resolves in a year. But if you think it is mispriced in a way that resolves in 20 years (as in the example above), then it doesn’t make sense to invest; that’s a really poor return on investment.
    * Moreover, **futarchy relies more on self-interest than current systems** (which elect or employ decision-makers who are expected to take the interests of those they represent into account), and thus has to be more robust to cold-heartedly self-interested decision-making than modern systems do, so issues in the incentive structure are arguably more significant for futarchy than they are for e.g. representative democracy.
    * Additionally, as Hanson points out, **bets do not get resolved if the world is destroyed or if the system breaks**. This likely means that existential risks would be seriously undervalued.
  * **Abilities**
    * It seems that people are [worse](https://www.openphilanthropy.org/blog/how-feasible-long-range-forecasting) at [long-range forecasting](https://forum.effectivealtruism.org/tag/long-range-forecasting) than they are at short-range forecasting. I’m not sure to what extent this is exacerbated under futarchy (compared to existing systems), but I don’t think we should a priori expect markets to be an improvement on this front over expert decision-making (which would counteract the above point on incentives). Moreover, most studies that celebrate the epistemic success of prediction markets compared to other sources of information (like experts) are run on relatively short time-spans.
  * **A misconception.** Note that this issue (long horizons become more difficult) does not imply or try to claim that the market would be unable to judge any policy that would begin to affect welfare only in 15 years because the bettors would not want to wait that long. Because these are policy _futures_ that transform into shares of the welfare asset if a policy is accepted, the bettors who bought shares of the policy would be able to immediately profit once the policy is passed by selling their new welfare assets, and these welfare assets should, in theory, be worth more if people are optimistic about the effects of the policy.



**Possible solutions, counter-arguments, or approaches**

  1. I think the strongest objection to this is that, on this front, **futarchy might not be significantly worse than our current systems**.
     * However, I do think it is likely to be at least _somewhat_ worse, and that from a longtermist perspective, a small deterioration in our ability to make decisions with good long-term outcomes may be a decisive factor in whether futarchy is better or worse than modern systems.
  2. One potential avenue by which this can be mitigated (especially the incentives side of it) is by pushing to **incorporate longtermism or the interests of future beings into the official measure of national welfare**. For instance, the measure could give some weight to scores a panel or a secondary market awards to “chances of global catastrophe in the next 100 years,” or to something better operationalized along those lines.
     * However, this seems 1) difficult to implement (we would need to make sure that this gets voted on), and 2) difficult to get right.
  3. **We might get significantly better at long-range forecasting in the near future** (e.g. by getting really good at using causal proxies).
     * I think this would be incredibly valuable for a number of different reasons, and would weaken this objection (assuming experts don’t improve as fast as bettors and forecasters). I am not sure how likely it is that we will massively improve on this front, however (and the issue of incentives would persist).
  4. Maybe the longer-term effects of a policy don’t matter that much, because **we can counter it by passing new policies in the future**.
     * I think this is true for some policies, but not for others. (For instance, passing a policy that releases some new technology, or that encourages pollution for the sake of economic progress would immediately harm the future in a way that is hard to correct later.)



**Connection to futarchy**

I don’t see a version of futarchy that entirely avoids this issue.

**In sum**

I’m less certain that futarchy would be significantly worse than existing systems on this front, but I think that from a longtermist point of view, it would be a critical issue.

### (4) Internal interests and technical issues with decision markets: Interpreting market prices as the expected values of policies is not that straightforward

There are a number of technical reasons for which the market prices would not be quite the information we want them to be.

  1. **Risk premia distort estimates.** (Hanson addresses this to a certain extent.) Markets pay you to take on risk (you should probably not pay $100,000 for a coin flip that will give you either $0 or $200,000), whereas we want to be able to read expected values from the markets’ predictions. It’s possible that we can fix this with our welfare function, but then we may be asking too much of it. (A [relevant post](https://ordinaryideas.wordpress.com/2011/12/16/risk-arbitrage/) on risk arbitrage.)

  2. “**Hanson’s proposed decision market is not [myopic incentive compatible]**.” [Chen et al. (2011)](http://yiling.seas.harvard.edu/wp-content/uploads/DM_full_version.pdf) show that in some situations, to maximize your expected gains from participating in a decision market, you should lie.[8] Note that the paper also suggests a way to fix the issue, but their solution requires complicating the process (e.g. asking experts to estimate the probable outcome of the market).

  3. **Hedging** against the stock market or other private goals: entities can hedge against policies that financially hurt them by over-valuing them in their calculations. For example, given a standard prediction market, a big company may want to hedge against increased corporate tax by buying “yes” shares on “will a bigger corporate tax be implemented?” As a general rule, this would not significantly harm futarchy markets, as it would mostly provide liquidity. However, if a significant portion of the market becomes used in this way, the prices would diverge from expected values to something somewhat distorted.

  4. Prediction markets can be volatile (although it is possible that prediction markets would be less subject to e.g. bubbles than stock markets), and this can lead to poor policy outcomes.

  5. **Potential for misinformation.** Another way one could try to manipulate the market is via misinformation campaigns.

     1. Imagine that you know that a policy will have poor results (maybe you have insider information of some kind). If everyone else knows this, too, then the policy will simply not pass, and you will get no money. As a result, you may then want to buy shares of that policy (they will be cheap, since no one thinks it is good), and then spread misinformation about how amazing the policy will be, which brings the cost of the shares back up. You can then sell all your shares of this policy and make a profit— but you will only make a profit if the policy passes, which means that you have to be careful when re-selling the shares in order to avoid tanking the price and making the policy fail.
     2. Alternatively, you may know that a policy is good, but if everyone else knows it is good, you will not be able to make a significant profit. So you may want to convince everyone that the policy will be harmful, artificially lower the price of the policy, and then buy a bunch of shares of that policy. Crucially, you will then need to convince everyone that the policy is good again in order to bring the price back up to make sure that it passes. (If this is done at a large scale and poorly, then it would harm decision-making. If not, however, the effect would probably be minimal.)
     3. I expect that the harm from such manipulations would be small, and this sort of manipulation would be difficult and costly to pull off. In most cases, the truth still needs to be revealed for the manipulator to profit (as in the point above, 5.2). It is also possible that this could be regulated and that the behavior of manipulators could be tracked and could in fact be revealing rather than corruptive to the accuracy of the market prices.



**Thin markets**

All of this is **worse when markets are thin**. This is, in part, because the bets of a few people do not contain enough information to aggregate reasonably. _Prediction_ markets often seem to have trouble with this (they have trouble attracting traders and increasing liquidity). Most importantly, **thin markets are easier to manipulate**.

  1. The issue of thin markets is exacerbated for complicated questions (there is a tradeoff between attractiveness or popularity of the question and technicality of the topic, or even the care with which questions are specified.) Note however, that it seems likely that futarchy has the _feature_ that prediction market interest and liquidity does correlate with the importance (and controversiality) of certain decisions.[9]

  2. This issue is also exacerbated for topics or areas where those affected by the policy under consideration have no money. In theory, the welfare function should measure their interest, too, but there would be liquidity issues due to a lack of natural interest by those who are trading. (This is similar to the second issue in the broader list— the beliefs of the rich are weighted more than those of the poor.)




**Possible solutions, counter-arguments, or approaches**

  1. The strongest objection to this issue is that it is unclear whether the markets would provide worse information than the current status quo. But I still think bringing up these issues is important to counter the idea of markets as perfect sources of information, and to propose some directions for future work.
  2. For thin markets specifically, it’s possible we can fix them with well structured subsidies.[10]



**Connection to futarchy**

Many of these issues seem relatively solvable, but it is unclear that we would be able to solve them all, or enough of them that futarchy would be secure.

**In sum**

I think these issues are important, and could be incredibly difficult to solve, but I do think they could be addressed, and would not destroy the most active, most important policy decisions.

### (5) Buying policies: manipulation through extreme wealth

In democracy, we can use propaganda to “buy” votes, and we may also want to sabotage our opponents. More importantly, perhaps, representatives can be paid to vote a certain way (sell a contract to a particular group, bow to lobbyists, etc.). In a similar fashion, **one entity with enough funding could place bets that significantly shift market prices and affect policy choices.**

The scenarios under which this would work are relatively extreme.

  * To understand the scale of wealth necessary for this to work, consider the following simplified example. Suppose that there’s a market with a $100,000 subsidy, and there are enough traders who are willing to accept a 10% return on their investments and who make good estimates (in aggregates). Then without a manipulator, they should be willing to spend $1m buying and selling until the policy gets to a fair price (in the end, sharing the subsidy). If a manipulator starts buying shares of the policy, the price becomes too high, and most of the traders begin to sell. The manipulator needs to spend $1m to push the price up. (Then if the price is up significantly, then more traders would show up because the potential profit from correcting the price would become worth their time, so in the end, the manipulator may need to spend many times the subsidy to have a significant impact on the price.)
  * It’s possible that this manipulation is easier if the system is structured poorly. For instance, a rich bettor swoops in at the end somehow, and the market does not have time to correct them. However, this should be possible to mitigate with sanity-checks that, for example, require the price of a policy P to be consistently higher than the price of not-P for P to pass. If such issues are not set up carefully, the system seems quite vulnerable to manipulation.
  * It’s also possible or even likely that the market would not properly account for serious manipulation, and this could be crucially important in some of the cases when people are motivated enough to try and manipulate prices.



**Possible solutions, counter-arguments, or approaches**

  1. This can be addressed somewhat through regulation, or capping the market, as discussed above.
  2. Hanson dismisses the possibility of this manipulation based on the total amount of money that the market can channel to counteract this entity (what he calls the “one rich fool” problem), but Hanson seems to assume that these actions would be visible or at least that the market would be confident enough to notice that manipulation is occurring.
     * Perhaps more importantly, Hanson does not account for the possibility that the wealth landscape could change drastically in the next 10 years (in the near future, there could conceivably be individuals who are orders of magnitude richer than anyone is today).
     * He also does not seem to account for the possibility that the market will follow the rich person’s bets rather than try correcting that person.[11] (The idea that rich people may have extreme influence in such markets is also [corroborated by](https://www.linkedin.com/pulse/how-crypto-whales-move-markets-nitin-kumar-/) the behavior of cryptocurrency markets in response to the actions of cryptocurrency whales.)



**In sum (and connection to futarchy)**

With futarchy as it has been proposed, this seems like a genuine risk that is hard to fix, but one that may not be a frequent problem in practice. Additionally, there could be concrete proposals for how to mitigate this issue by adding sanity checks or changing some mechanisms.

### (6) Vaguer concerns

#### **(A) Sanity checks are lacking in futarchy**

This issue is difficult to describe, and a careful treatment would require a much deeper understanding of policy than I have. But there is a tradeoff between elegance of a form of governance (which may lead to better feedback loops, less gridlock, etc. — things futarchy does well on), and the strength of its sanity-checks (or redundancies). This is related to the idea of [consilience](https://en.wikipedia.org/wiki/Consilience); when a policy or a change is approved by a mess of diverse systems that are interlocked in complicated ways, it is likely that the policy is not actively harmful, as it did not raise big red flags on those many systems. If, however, a single system is sufficient to pass a policy, there is a chance that red flags that would have been picked up by other systems are missed, and a harmful policy can pass. This description is unsatisfying and vague, but it seems worth including as I imagine that futarchy would risk passing dangerous policies in precisely this way.

#### **(B) Getting the extent of power of the futarchy markets precisely right seems very hard**

Decision markets seem relatively adapted for deciding whether to pass new industry regulations, but much less suited for something like international relations. The solution, according to Hanson, is that futarchy markets could realize this fact and decide to implement the best system or rule for any specific sub-case of governance (e.g. they could decide that Oregon should be run as an oligarchy, Texas as a meritocracy, and Delaware as a [meta-republic](https://slatestarcodex.com/2020/06/17/slightly-skew-systems-of-government/)). In some situations, Hanson suggests that the main futarchy markets might want to set up smaller decision markets to govern local issues (recursion). Note that additionally, some decisions or institutions would need to _start_ immediately outside the purview of the markets and written into the constitution (or the equivalent) in order to sustain the system. (For instance, the courts are not something the markets would have jurisdiction over.)

Occasionally, however, the different systems would clash. Consider the following as an illustration of this. Hanson suggests that we may want to do things like sign a treaty with another country, where signing the treaty involves giving moral weight to the other country’s citizens in our national measure of welfare. Unfortunately, this idea would be incredibly hard to implement under futarchy because the national measure of welfare (the “values”) is voted-on, and treaties are a matter of strategy or beliefs.

#### **(C) Futarchy may allow us to make better decisions based on values that are poorly aligned with impartial welfare**

It seems possible that futarchy might make us more efficiently pursue whatever metrics most people today genuinely think are good, but which ignore many or almost all moral patients that currently exist or that will exist in future. (This is different from the discussion of Goodhart’s Law in that here, the metrics could even perfectly align with the values of the people pursuing the metrics.) For instance, even if futarchy does massively increase our ability to improve human welfare, it might just quadruple the welfare of a population which matters less than other populations that this does nothing about (or even harms).

### In brief, 10 other possible issues with futarchy

  1. The effect of any given policy will be too small to counter all the other noise that affects the welfare function.
     * This is exacerbated by regionality or technicality of the issue: local policies will barely affect national welfare functions
     * This might also be exacerbated by timing issues, if many policies are passed at the same time.
     * This might be fixable somewhat, and would not be as serious an issue with a hybrid form of government, or with a multiplication of welfare functions
       * E.g. maybe you could have a rule that states that a policy must significantly (be expected to) increase one parameter of the welfare function, and not get vetoed by any of the other parameters.
  2. Reasonable people (or people who are rationally trying to profit rather) need to risk, in sum, as much money as the net amount risked by idiots or people with external interests (where idiots cancel each other out if they have opposing beliefs).
  3. We want to incorporate knowledge from “insiders” but we don’t want to have too much adverse selection from traders who know too much (especially if these are “insiders” who are just people who have seen a memo 24 hours early, who do not contribute that much actual useful information to the market).
     * This is potentially solvable with careful laws, but these would take care and more research or consensus than we currently have.
  4. [Specification issues](https://forum.effectivealtruism.org/posts/2WyhfryGmETCjgyHc/types-of-specification-problems-in-forecasting) could produce greater errors (within the information aggregated by the market) under futarchy because there are more incentives to exploit vague or careless language, and any errors would have a greater impact because people would be more upset at any system malfunctions (markets that are cancelled, etc.). Most importantly, the errors and manipulations could directly influence policy decisions. (Which does not happen so straightforwardly in regular prediction markets.)
     * This would get even worse because of measurement error, which is hard to avoid.
     * It’s possible that we can just get much better at specifying, or that we could develop a standardized framework that would eliminate most specification issues.
  5. Widespread use of markets has the potential to create a dearth of other sources of public and accurate information (e.g. pollsters would be replaced with markets, which blend information more).
     * It’s likely that markets would incentivize new ways of producing this info (market makers would run polls).
     * But this would not be public, so possibly we would in fact lose knowledge or repeat work (a lot). And markets are [not perfect](https://en.wikipedia.org/wiki/Grossman-Stiglitz_Paradox).
  6. The policy proposal process is very flawed (and there are not obvious ways to fix it)
     * We don’t have infinite time/energy in e.g. the courts, so we need a discriminating proposal process.
     * But this gives a lot of power to the rich or the elite (especially Hanson’s method— auctioning off policy proposal time-slots).
     * This might be fixable, for instance by allowing people to gather signatures to put a policy into consideration. The issue still seems worth listing here.
  7. The shift from small-scale prediction markets that are advisory to large-scale futarchy might also be a shift between rational or definable utility-maximization (e.g. maximizing profits) to a shift in values and identities (e.g. thinking whether the US is the _kind of country_ that accepts immigrants), so the situation is qualitatively different and new issues would arise.
  8. Moral responsibility for policy decisions is weakened; if futarchy is in charge of policies and the policies end up being moral atrocities, no one will be in charge. This can mean that moral atrocities will not be vetoed “well enough” under futarchy.
  9. Futarchy might[ work worse during times of crisis](https://www.alignmentforum.org/posts/3MqzX86KBpRsCWMFD/crash-problems-for-total-futarchy), which is worrisome.
  10. Futarchy makes values and philosophies explicit in ways that might help to establish (incorrect) moral stances or political approaches. For instance, by setting the bar that a policy must clear we immediately encode some conservatism (if the bar is high) or some progressivism (if the bar is low) into our system.



### Aside: the true answer to futarchy vs democracy could depend on some variable that currently seems mostly irrelevant

In [one of his posts](https://slatestarcodex.com/2014/01/05/marijuana-much-more-than-you-wanted-to-know/), Scott Alexander sets out to analyze the effects of legalizing or criminalizing marijuana use. His conclusion?

> We should probably stop caring about health effects of marijuana and about imprisonment for marijuana-related offenses, and concentrate all of our research and political energy on how marijuana affects driving.

In the end, it seems plausible that, depending on your moral views, your decision on democracy vs futarchy (or a similar choice) will depend on, say, which of them is best for ending animal farming, spending or slowing economic growth, or slightly reducing (or exacerbating) some existential risk.

## See also

  * “[Shall We Vote on Values, But Bet on Beliefs](http://mason.gmu.edu/~rhanson/futarchy2013.pdf)?” (Robin Hanson)
  * [Politics With Skin in The Game](https://sunilsuri.com/essays/futarchy) (Sunil Suri)
  * [Five Open Questions about Prediction Markets](http://users.nber.org/~jwolfers/Papers/Five%20Questions\(NBER\).pdf) (Wolfers and Zitzewitz)
  * [Slightly Skew Systems Of Government](https://slatestarcodex.com/2020/06/17/slightly-skew-systems-of-government/) (Slate Star Codex)
  * [Tales from Prediction Markets](https://misinfounderload.substack.com/p/tales-from-prediction-markets) (Avraham Eisenberg)
  * [An Introduction to Futarchy](https://blog.ethereum.org/2014/08/21/introduction-futarchy/) (Ethereum Foundation Blog)
  * [The Parable of Predict-O-Matic](https://www.lesswrong.com/posts/SwcyMEgLyd4C3Dern/the-parable-of-predict-o-matic) (abramdemski on LessWrong)



## Credits

 _This essay is a project of[Rethink Priorities](https://rethinkpriorities.org/)._

_It was written by Lizka, who was an intern at Rethink Priorities. Thanks to Michael Aird, Charles Dillon, and Peter Wildeford for their helpful feedback, to Eric Neyman and to Scott for conversations about these ideas, and to Linch Zhang for supervising the project. If you like our work, please consider[subscribing to our newsletter](https://rethinkpriorities.org/newsletter/). You can [see all our work to date here](https://rethinkpriorities.org/our-research-areas/)._

### Notes

* * *

  1. You could also read the major paper that explains futarchy, “[Shall We Vote on Values, But Bet on Beliefs](http://mason.gmu.edu/~rhanson/futarchy2013.pdf)?” by Hanson, or the author’s [page](http://mason.gmu.edu/~rhanson/futarchy.html) about futarchy. ↩︎

  2. Futarchy is sometimes described as a sketch of the _possibilities_ of decision markets— something to inspire small-scale experiments (e.g. use of advisory decision markets) rather than something that is ready for implementation or for criticism. However, this seems a little disingenuous to me given the excitement around fully fledged (“pure”) futarchy. Responding to criticisms of futarchy with “futarchy is just meant to inspire” seems to me like a [motte-and-bailey](https://en.wikipedia.org/wiki/Motte-and-bailey_fallacy). So, to be clear: I am not against the “motte,” i.e. I think it’s possible that prediction and decision markets have serious potential for improved decision-making at various levels. However, I do not think we have sufficient basis to believe the two prominent “baileys:” 1) that futarchy would be a better system than any currently practiced today, and that its chief issue is implementation, or 2) that futarchy is “promising enough” that the EA community should actively prioritize the development and implementation of decision markets as a possible path to futarchy. In this post, I mostly focus on issues with the first of the two baileys. ↩︎

  3. See [here](https://www.overcomingbias.com/2008/04/if-i-had-a-mill.html) and [here](https://www.overcomingbias.com/2020/07/seeking-robust-credible-expertise-buyers.html) for discussion. The strongest arguments seem to be, in brief, that (1) improving decision-making via decision markets at companies can lead to economic growth, and that (2) paying money for broad trial runs of decision markets has a chance of improving the tools in ways that can lead to the emergence of greatly improved and useful decision tools. ↩︎

  4. This discussion largely stems from conversations with Michael Aird. ↩︎

  5. See also: ​​Amanda Askell’s talk, [The Moral Value of Information](https://www.effectivealtruism.org/articles/the-moral-value-of-information-amanda-askell/). ↩︎

  6. One place this was suggested is [in this talk](https://www.youtube.com/watch?v=dJLYRADcPP4). ↩︎

  7. Wolfers and Zitzewitz (2007), Page 6, emphasis mine. ↩︎

  8. [Hypothetical example in the paper where the manager is trying to decide which developer to hire.] “Only one market’s condition will ever be realized since only one developer will be hired. The other market’s predictions will become unscored counterfactuals. If an expert has improved one market’s prediction more than the other’s, it has an incentive to convince the project manager to hire the associated developer regardless of how poor an employee that developer may be!  
More concretely, if the markets currently predict developer A has a 60% and developer B a 80% chance of finishing the project on time, and an expert believes the correct likelihoods are 70% and 80%, respectively, truthful reporting can only improve the market’s accuracy for developer A. If developer B is hired this expert will receive a score of zero, but if A is hired they expect to score for a 10% improvement. Instead of being honest, then, the expert can pretend B is incompetent, lowering the market’s prediction for the likelihood B will finish on time to less than 70%, cause A to be hired instead, and enjoy the profits.” This is quite probability-dependent, but could be a serious issue in thin markets or if individual entities comprise a significant portion of a given set of markets. ↩︎

  9. In Hanson’s futarchy, there are two pairs of markets based on two axes: the measure of welfare used (current and future) and the conditionality (conditional on policy P passing, and conditional on policy P _not_ passing). Placing a bet takes time and resources, so people would prefer to place bets that are conditional on something that is _likely _ to happen. So policies that are likely to pass will probably have more liquid markets that are conditional on them passing (than policies that are unlikely to pass), and policies that are unlikely to pass will probably have more liquid markets that are conditional on them _not_ passing. This means that policies that seem clearly very good will probably have more liquid conditional-on-passing markets. (E.g. If a policy is unlikely to have much of an impact, it probably won’t meet the threshold to be accepted, so trading it is basically like trading base welfare, and people won’t trade on the policy. If a policy is important because it is controversial (with respect to impact on welfare), people will trade on their disagreements. If it is important because it has the potential to cause a lot of good and people agree that this is the case, it is less obvious that lots of trading should happen here.) ↩︎

  10. Types of subsidies are an exciting topic to explore, by the way. One of the cooler things I’ve heard of is setting up a bot that randomly buys or sells the best offer at random times, which incentivizes people to try and make the market narrower or more efficient. ↩︎

  11. The typical reaction to an endorsement of some product by Elon Musk comes to mind. ↩︎



