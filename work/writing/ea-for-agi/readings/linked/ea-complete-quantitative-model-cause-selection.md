---
title: "A Complete Quantitative Model for Cause Selection - Effective Altruism Forum"
url: http://web.archive.org/web/20181024011538id_/http://effective-altruism.com:80/ea/xr/a_complete_quantitative_model_for_cause_selection/
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "EA cause-selection quantitative model"
---

# [Effective Altruism Forum](/)

[Log in / Sign up](/login)

  * [New](http://effective-altruism.com/)
  * [Top](http://effective-altruism.com/top/)



18 

# [ A Complete Quantitative Model for Cause Selection ](/ea/xr/a_complete_quantitative_model_for_cause_selection/)

posted by  Post author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) on 18 May 2016 02:17AM

[Comments (38)](/ea/xr/a_complete_quantitative_model_for_cause_selection/#comments)

_Part of a[series](http://mdickens.me/series.html#quantitative-models) on quantitative models for cause selection._

**Update** : There’s now a [web app](http://mdickens.me/causepri-app/) that can do everything the spreadsheet could and more.

[Quantitative models offer a superior approach in determining which interventions to support.](http://mdickens.me/2016/04/06/expected_value_estimates_you_can_%28maybe%29_take_literally/) However, naive cost-effectiveness estimates [have big problems](http://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/). In particular:

  1. They don’t give stronger consideration to more robust estimates.
  2. They don’t always account for all relevant factors.



We can fix the first problem by starting from a [prior distribution](/ea/ws/on_priors/) and updating based on evidence–more robust evidence will cause a bigger probability update. And we can fix the second problem by [carefully considering](http://mdickens.me/2016/05/17/quantifying_far_future_effects/) the most important effects of interventions and developing a strong quantitative estimate that incorporates all of them.

So that’s what I did. I developed a quantitative model for comparing interventions and [wrote a spreadsheet](http://mdickens.me/materials/QuantitativeModel.xlsm) to implement it.

I see this model as having a few broad uses:

  * Making cause prioritization decisions
  * Helping people understand where they disagree most strongly
  * Making explicit the tradeoff between estimated expected value and robustness
  * Figuring out the implications of people’s beliefs about cause prioritization



Although this model isn’t perfect, I believe [it makes sense to use quantitative models to make decisions](/ea/vo/expected_value_estimates_you_can_maybe_take/#on-using-quantitative-models). I will use this model to make decisions about where to donate, so I’ve put a lot of thought into the inputs, but there’s certainly room for improvement. I want to get other people’s suggestions to make sure I build a model that’s as useful as possible.

**If you want to use the spreadsheet, please first read the instructions inthe section below.**

## Contents

  * Contents
  * Using the Spreadsheet
    * General Structure
    * “Summary” sheet
    * “Globals” sheet
      * Enable calculations?
      * Prior
      * Color guide
      * Other sections
    * “EV of Far Future” sheet
    * Cause sheets
    * Debugging FAQ
  * The Statistics Behind My Quantitative Model
    * Basic Process
      * Computing integrals in practice
    * Summing Multiple Estimates
      * Summing positive and negative estimates
      * Measurements with different priors
  * Preliminary Results
    * The far future is overwhelmingly important, even for global poverty
    * Values spreading may be better than existential risk reduction
    * High-leverage values spreading looks best
    * Sensitivity analysis
      * Global poverty vs. animal advocacy
      * Animal advocacy vs. AI safety
      * Global poverty vs. AI safety
  * Discussion
    * What about systemic change?
    * Ways the model could be more precise
    * What results do you get?
    * Next Steps
  * Notes



# Using the Spreadsheet

You can find the most recent version of the model in [this Excel spreadsheet](http://mdickens.me/materials/QuantitativeModel.xlsm), where you can examine it in detail or change the inputs. You can examine my model in detail or change the inputs by [downloading the spreadsheet](http://mdickens.me/materials/QuantitativeModel.xlsm).

Some of the functionality of the spreadsheet only works in Excel. If there’s enough demand, I may write a port to Google Sheets.

The remainder of this section describes how to use the spreadsheet. If anything is still unclear, let me know because I’m happy to answer questions–I built this so people can use it, so I want to make users have the information they need!

You might want to do something with this spreadsheet that it doesn’t allow you to do. If you make substantial modifications, send me the result so I can see what you came up with. If you don’t want to modify it yourself, you can tell me what you’d like to do and I’ll add it to the spreadsheet, as long as it’s a feasible change.

## General Structure

The spreadsheet is organized into sections, with each section on a different sheet (you can switch among them with the tabs at the bottom of the page). When you open the spreadsheet, Excel may prompt you asking if you want to enable macros. You need to enable macros for the calculations to work properly.

Most inputs contain five columns: Name, Low CI, High CI, Mu, Sigma^2, Notes. Low/High CI give the bounds on your 80% credence interval for that value. Mu and Sigma^2 are calculated automatically so you can ignore those. Notes contains any potentially relevant information about that value; if you’re confused about a value, look to see if there’s anything useful in the Notes column.

## “Summary” sheet

This sheet shows all the posteriors for different interventions in one place so you can compare them side by side. You shouldn’t need to modify anything on this sheet.

## “Globals” sheet

This is the main sheet you’ll want to modify. It contains all the values used by multiple other sheets. It has several sections, described below.

### Enable calculations?

**This is the most important section if you want to modify any inputs.** Calculating posteriors takes a long time (about 30 seconds on my computer), and by default, Excel will try to re-calculate them every time you change the value of a cell. This makes it tedious to change multiple inputs at once. If you want to change several inputs, set “Enable calculations?” to 0, and Excel won’t try to re-calculate anything. Once you’re done making changes, set “Enable calculations?” back to 1.

### Prior

This section gives the parameters for the prior distribution over interventions. A prior describes your belief about the effectiveness of an intervention in a category; see [my original post](http://mdickens.me/2016/04/06/expected_value_estimates_you_can_%28maybe%29_take_literally/) and [On Priors](http://mdickens.me/2016/04/26/on_priors/) for more details.

A prior of 1 means that you believe the median intervention in the relevant reference class is as effective as GiveDirectly. There are several priors for different types of interventions. You can set all the priors to be equal if you don’t believe it’s reasonable to differentiate interventions like this; but if you believe some interventions have higher priors than others, you can use this section to change the priors for each category.

### Color guide

Explains the meanings of the cell colors.

### Other sections

The other sections include model inputs. Each field gives a credence interval where you put your low and high estimates for each of the inputs. Change these however you want.

## “EV of Far Future” sheet

Here we compute the expected value (EV) of the far future. This sheet gets all its data from Globals, so you don’t need to modify anything here.

## Cause sheets

Each individual cause has its own sheet. The value of each cause is computed differently, so each sheet has a space to provide the inputs into the model. You can modify any of the pink-colored cells to whatever values you believe are correct.

## Debugging FAQ

**Some cells just say “disabled.”**

You need to enable calculations to see results. See “Enable calculations?” above.

**I enabled calculations, but a lot of cells still say`#VALUE!`.**

Some cells don’t automatically re-calculate. You may need to manually re-calculate these by double-clicking on them and pressing Enter, or by clicking the formula bar and then pressing Enter. I’ve colored all such cells light purple to make them easier to spot. You may also need to re-calculate posteriors (which are colored light blue or orange).

**I changed the inputs but the posterior is still the same.**

This is the same problem as the previous question; see above.

**What does one of the inputs mean?**

The inputs have a Notes column. For some of the less clear inputs, I put notes to explain what the input means. If anything is still unclear, let me know and I’ll try to clarify it.

# The Statistics Behind My Quantitative Model

This section goes into the details of how I compute the outputs in my quantitative model. I’m keeping this separate since I expect most readers won’t be interested in the details, but I believe it’s important to publish. My knowledge of statistics is fairly weak, and if I describe my process, there’s a much better chance that someone can discover any mistakes I might have made.

This part assumes you have some preliminary knowledge of probability and statistics.

## Basic Process

A [previous post](http://mdickens.me/2016/04/06/expected_value_estimates_you_can_%28maybe%29_take_literally/) described the general outline of my process. Here’s a summary of how it works:

  1. Every intervention produces some utility per unit of resources. Start with a prior distribution over interventions.
  2. For a particular intervention, we make an estimate of its expected utility and gain a sense of how precise the estimate is.
  3. We use the prior and the estimate to get a posterior expected value.
  4. Then we donate to whichever charity has the best posterior expected value.



Our prior follows a log-normal distribution. I [wrote a post](http://mdickens.me/2016/04/26/on_priors/) justifying this choice and deciding what [parameters](https://en.wikipedia.org/wiki/Log-normal_distribution#Location_and_scale) to use (a log-normal distribution has parameters μ and σ which roughly correspond to mean and standard deviation). The estimates follow a log-normal distribution as well as the prior; this appears more obviously correct so I haven’t spent much time trying to justify it1.

The formula for posterior expected value is as follows. `U` is the true utility and `M` is our measurement (i.e. the estimated expected value).

\begin{align} \text{E}[U|M=m] = \int_0^\infty u \cdot \text{p}(U=u|M=m)\ du \end{align}

By Bayes’ Theorem, `p(U=u|M=m)` is given by

\begin{align} \text{p}(U=u|M=m) = \text{p}(U=u) \displaystyle\frac{\text{p}(M=m|U=u)}{\text{p}(M=m)} \end{align}

where `p(U=u)` follows the prior distribution and `p(M=m|U=u)` follows a log-normal distribution with parameters μ = `u` and σ as given by the measurement’s variance. `p(M=m)` is calculated as

\begin{align} \text{p}(M = m) = \int_0^\infty \text{p}(U = u) \text{p}(U = u|M = m) \end{align}

### Computing integrals in practice

The posterior expected value doesn’t have a closed-form solution as far as I know. To compute it, we have to integrate up to very large values of `u` (I go up to about 1075). The traditional way to numerically perform integrals is to divide the area under the curve into equal-sized trapezoids and sum their areas. The problem with this is that if we use, say, 1000 trapezoids, they will each be 1072 long. Almost all the probability mass lies in the first 1072, so we lose most of the information that way.

I solved this by writing an integration function that uses geometrically-increasing bucket sizes. Instead of setting bucket `i`’s bounds as `(step * i, step * (i + 1))`, I set the bounds as (stepi - offset, stepi - offset + 1). (We subtract an offset so that the first bucket starts close to 0 instead of at 1.) This provides reasonably accurate results when integrating functions with long tails. I tested it in Python by integrating a [Pareto curve](https://en.wikipedia.org/wiki/Pareto_distribution) using my method and comparing it to the output of the cumulative distribution function; my method was accurate to within 0.1% for a reasonable `step` parameter (I used 1.25).

## Summing Multiple Estimates

In some situations, we want to sum several estimates that follow different distributions. For example, suppose an intervention affects the probability of human extinction. This has an impact on the expected utility from humans living in the far future, wild animals, and numerous other sources. Each of these sources follows a different log-normal distribution with a different μ and σ. But they don’t really represent different measurements, so we can’t treat them as independent. (If we treated them as different measurements, we’d move the posterior closer to the measurements every time we added a new one, which doesn’t make sense because new measurements don’t actually represent new evidence.) So I combine the measurements into a single overall estimate by summing their distributions.

The sum of log-normal distributions does not have a closed-form solution. Summing log-normal distributions is apparently a common problem and I spent a while reading the literature on proposed methods, but unfortunately none of them were adequate. I ended up using a simple and reasonably efficient method.

As described in the previous section, I compute the integral of a distribution by breaking it up into buckets where each bucket approximates the area under one chunk of the curve and then taking the sum of the buckets. We can use this to sum multiple distributions. Instead of representing a distribution as a function, we can compute the values in all its buckets and then we can sum two distributions by summing their buckets. Using this method, we can sum `m` distributions with `n` buckets each in O(mn2) time, which in practice is about 5 seconds per distribution on my machine. I believe this is more accurate than approximation methods like [Metropolis-Hastings](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm), although I haven’t spent much time testing alternative methods (and I haven’t tested Metropolis-Hastings at all).

Then, depending on context, I either compute the expected value using the resulting sum directly, or I find the mean and variance of the sum and approximate it using a log-normal distribution with the same mean and variance.

### Summing positive and negative estimates

Some outcomes of an intervention may have negative utility, and we need to add it to another outcome that has positive utility. This poses a problem: my integration function only covers positive or negative numbers, not both.

I will assume that the sum of two log-normal variables is log-normal. This assumption isn’t strictly true, but I’ve seen it used in the literature234, so I’ll assume that it is sufficiently accurate.

Using this assumption, we can find the parameters for the distribution of the sum by integrating across both measurements.

I don’t actually compute the integral across both measurements. Instead, I exploit facts about mean and variance to numerically compute the sum:

\begin{align} \text{Mean}(X - Y) = \text{E}[X - Y] = \text{E}[X] - \text{E}[Y] \text{Var}(X - Y) = \text{E}[(X - Y)^2] - (\text{E}[X - Y])^2 \end{align}

(Instead of summing positive `X` and negative `Y`, this treats both `X` and `Y` as positive and takes their difference.)

The mean is trivial to calculate given that we already know the means of `X` and `Y`. We can derive the variance using these equations:

\begin{align} \text{E}[(X - Y)^2] = \text{E}[X^2] - 2\text{E}[XY] + \text{E}[Y^2] (\text{E}[X - Y])^2 = (\text{E}[X] - \text{E}[Y])^2 \end{align}

`E[XY]` is given by `Cov(X, Y) + E[X] E[Y]`. The interpretation of the math here becomes a little questionable. In one sense, `X` and `Y` are strongly correlated because they share a lot of the same inputs (e.g., when we’re measuring the effect of an intervention on the far future, if we colonize more planets, both `X` and `Y` will be larger). But we’re summing positive and negative random variables to represent the fact that an intervention could have a positive or a negative effect, so I believe it makes more sense to treat `X` and `Y` as though they are independent (i.e. `Cov(X, Y) = 0`).

### Measurements with different priors

You many want to look at two different effects M1 and M2 of some intervention, where these two different effects have different priors. For example, if you’re looking at the effect of an intervention to alleviate factory farming, you may have different priors on M1 the amount of animal suffering prevented in the short term and M2 the long-term effects of causing humans to care more about other species. It doesn’t make any sense to combine M1 and M2 directly if they have different priors.

I resolve this by calculating the posteriors for each of the two measurements and then summing the posteriors to produce the final result. I don’t know if there’s a good philosophical justification for this, but it seems reasonable enough.

# Preliminary Results

Let’s look at some of the outputs of my model, particularly the results I find most surprising. I’ll also mix in some sensitivity analysis to see how we could plausibly change these results by modifying the inputs.

## The far future is overwhelmingly important, even for global poverty

[Some people argue](https://intelligence.org/2013/07/17/beckstead-interview/) that the far future is overwhelmingly important, and therefore we should focus our philanthropic efforts on shaping it. The strongest counter-argument I’ve heard is that we don’t know enough about how to affect the far future, so we should focus on short-term interventions that we know a lot about.

If we put this argument in more formal terms, we’d say that far future outcomes have such high variance that the posterior on any far future intervention is about the same as the prior. Should we buy this claim?

Based on my model, it looks like we shouldn’t. Using inputs I find reasonable, the posterior estimate of the far future effects of GiveDirectly is about 1000 times larger than the estimate of the direct effects. (If you used a broader prior, as [some have suggested](http://blog.givewell.org/2011/11/10/maximizing-cost-effectiveness-via-critical-inquiry/#comment-244461), this ratio could be a lot bigger.) To make the far future effects of GiveDirectly look just barely smaller than the direct effects, you’d have to reduce the prior μ by a factor of 1005 (and even then, the far future effects of AI safety would still look bigger than GiveDirectly’s direct effects–cash transfers have much smaller effects on existential risk because they’re not particularly optimized for increasing or decreasing it).

In the past, I talked about global poverty charities as though their direct effects were all that matter and mostly ignored the far future effects. But it appears that even extremely weak confidence about the far future effects far dominates the significance of the direct effects, so I should change my behavior.

## Values spreading may be better than existential risk reduction

By my [previous best guess](/ea/ne/on_values_spreading/), and according to an early version of the model, AI safety work looks better than animal advocacy for positively influencing the far future. So I was surprised to see that my improved model gave the opposite result.

The first version of my model had no way to combine positive and negative effects, so I only looked at the positive outcomes in the far future and used that to estimate how valuable it was to prevent AI-related extinction. And I didn’t include all the benefits of persuading people to care more about animals6. After correcting for both of these, my updated model finds that animal advocacy is more important than AI safety research7.

The naive expected value estimate for AI safety research is still two orders of magnitude higher than the estimate for animal advocacy. But the AI safety estimate has substantially higher variance, which makes its posterior look worse. If you increase the variance on the prior, AI safety looks better with the same EV estimates. (I had to raise the σ on the prior to 3 orders of magnitude before AI safety looked better than animal advocacy, which I believe is way too big a σ.)

I was quite surprised by this result; it seems intuitively wrong that an activity meant for producing good proximate effects (i.e., preventing animals from suffering on factory farms) could be better than existential risk reduction. But I have carefully chosen the inputs to the model and believe they are reasonable. It would be silly to create this model and then not change my mind based on the evidence it presents.

Changing the prior by increasing/decreasing μ or σ does not change this result. The only plausible way to make AI safety research look better than values spreading is to substantially reduce the variance on the estimate for how much work is necessary to make progress on AI safety or to substantially decrease the estimate of the value of non-human minds.

A brief note on different types of animal advocacy:

Although [corporate outreach](http://www.animalcharityevaluators.org/research/interventions/corporate-outreach/) looks [particularly high impact](http://www.openphilanthropy.org/blog/initial-grants-support-corporate-cage-free-reforms) in the short term, the long-term effects of direct advocacy are probably greater. Given how strongly far future effects dominate considerations, this makes interventions like [leafleting](http://www.animalcharityevaluators.org/research/interventions/leafleting/) look better than corporate outreach. Lewis Bollard of the Open Philanthropy Project has [claimed](http://www.openphilanthropy.org/blog/initial-grants-support-corporate-cage-free-reforms#The_long-term_significance_of_cage-free_campaigns) that he believes corporate campaigns will have significant long-term effects; I’m open to this possibility, but I find it somewhat implausible on priors and haven’t seen good reason to believe that it is true. But either way, the most important question is which intervention most effectively shifts values in the long term.

## High-leverage values spreading looks best

_Update 2016-06-06: I thought my model found that AI-targeted values spreading looked best, but my calculations had a simple arithmetic error that caused the naive estimate to be off by several orders of magnitude. After adjusting for this, AI-targeted values spreading looks a bit worse than AI safety research given my original inputs. Some of the claims in this section are probably false._

I’ve heard people criticize the idea of using anti-factory farming advocacy as a way to spread good values: if you originally decided to do animal advocacy to help animals in the short term, isn’t it pretty unlikely that this is coincidentally also the best thing to do to improve the far future?

I believe there are good reasons to believe that organizations like [The Humane League](http://thehumaneleague.com/) (THL) have unusually good positive effects on the far future–in my model’s estimate of the value of organizations like THL, they come out looking better than AI safety work. But I agree that this sort of thing is pretty unlikely to be the best intervention.

In [“On Values Spreading”](http://mdickens.me/2015/09/10/on_values_spreading/), I wrote about the idea of high-leverage values spreading:

> Probably, some sorts of values spreading matter much, much more than others. Perhaps convincing AI researchers to care more about non-human animals could substantially increase the probability that a superintelligent AI also will care about animals. This could be highly impactful and may even be the most effective thing to do right now. (I am much more willing to consider donating to MIRI now that its executive director values non-human animals.) I don’t see anyone doing this, and if I did, I would want to see evidence that they were doing a good job; but this plausibly would be a highly effective intervention.

I used my model to estimate the posterior expected value of spreading good values to AI researchers, and it looks substantially better than anything else–by a factor of 10 or more (depending on what prior you use). By contrast, the posteriors for traditional animal advocacy and AI safety differ by only a factor of 2. This estimate has more outside view uncertainty and I haven’t looked at it in detail, but this preliminary result suggests that it’s worth spending more time looking into high-leverage values spreading.

When I talk about high-leverage values spreading, that doesn’t just mean trying to shift the values of AI researchers. I’m sure there are many possibilities I haven’t considered. That’s just the first thing I tested against my model.

A few organizations currently do things that might qualify as high-leverage values spreading. These include [The Foundational Research Institute](http://foundational-research.org/), [Animal Ethics](http://animal-ethics.org/), and [The Nonhuman Rights Project](http://nonhumanrightsproject.org/). I don’t know enough about these organizations, but it’s plausible that my next major donation will go to one of them.

I don’t want to claim anything too ambitious here. High-leverage values spreading is the best intervention among the ones I’ve checked using this model, but there may be other interventions that are better. (Perhaps something like convincing AI researchers to care more about safety would be more cost-effective.)

## Sensitivity analysis

How do the results of this model change when you modify the inputs?

We can change the model in astronomically many ways, and I couldn’t possibly test them all, so I’ll just try some of the changes I expect a lot of people might want to make. If you really want to know what results the model would get according to your values and beliefs, you can [fill out the model yourself](http://mdickens.me/causepri-app/).

As of this writing, when I put in my best guesses for all the inputs, I get that animal advocacy is about 20,000 times better than the direct effects of GiveDirectly (i.e., not including flow-through effects), AI safety research is 10,000 times better, and AI-targeted values spreading is 100,000 times better. These numbers don’t tell us how good these things are relative to GiveDirectly’s flow-through effects; I use GiveDirectly’s direct effects as a baseline because they are highly certain while the flow-through effects are not.

I put the [prior μ](http://mdickens.me/2016/04/26/on_priors/) on animal advocacy at 10 units (recall, the units are set such that the short-term benefits of GiveDirectly equal 1 unit) and the prior μ for far future effects at 100 units. If we reduce these so the prior μ for everything is 1 unit, then the posterior values for animal advocacy, AI safety, and AI-targeted values spreading are (240, 119, 1376), respectively. For the rest of the sensitivity analysis, the priors for each intervention type equal each other for simplicity’s sake.

I’m going to use a [log-normal prior](http://mdickens.me/2016/04/26/on_priors/) for this sensitivity analysis. Changing the prior opens a huge can of worms which I won’t get into. I will note, however, that the second-most plausible prior distribution is a [Pareto](https://en.wikipedia.org/wiki/Pareto_distribution), which makes high-expected-value, low-robustness interventions look much better than a log-normal distribution does.

### Global poverty vs. animal advocacy

How can we change the priors to make AMF look better than animal advocacy? Let’s reduce μ on the prior to 0.01 units (i.e., the median intervention in our reference class8 is 1/100 as good as GiveDirectly) and keep σ at 0.5. Under a log-normal prior distribution, that means we believe that about 0.003% of interventions in our reference class are better than GiveDirectly9, and one in a billion interventions is better than AMF. (I don’t believe anyone could reasonably set a prior this low, but let’s go with it.) Now the posterior expected values for the direct effects of GiveDirectly, AMF, The Humane League (using ACE’s [cost-effectiveness estimates](http://www.animalcharityevaluators.org/research/interventions/impact-calculator/)10), and cage-free campaigns are (0.58, 2.6, 1.3, 17), respectively. (This looks at direct effects only, ignoring far future effects.) So THL looks better than GiveDirectly but worse than AMF, and cage-free campaigns still look best.

Let’s choose a more reasonable prior of 0.1. In this case, 2% of interventions in our reference class are better than GiveDirectly and 0.003% are better than AMF. I still believe this is too low (depending what we mean by our reference class8), but could see someone defending this. Under this prior, the posteriors for GiveDirectly, AMF, THL, and cage-free campaigns are (0.80, 4.4, 6.0, 62).

Perhaps you believe the average intervention in our reference class should be substantially worse than GiveDirectly, but that we should change σ such that GiveDirectly and AMF’s posterior values do not substantially differ from GiveWell’s cost-effectiveness estimates. We can make this happen by updating σ from 0.5 to 0.75. Now our numbers for GiveDirectly/AMF/THL/cage-free are (0.94, 7.7, 66, 1107). This makes the animal interventions look even better than they did with my original prior. (I haven’t talked about far future effects yet because that complicates things, but I’ll note that increasing σ to 0.75 makes the far future effects look about 100 times more important than they did with a σ of 0.5.) here’s a strong case for using this lower μ and higher σ, but the original choice of μ=1 and σ=0.5 is more conservative so I’ll stick with that for the rest of the sensitivity analysis.

A lot of people believe that animal suffering matters much less than human suffering. Let’s try incorporating this into the model. How much do you have to discount non-human animals before cage-free campaigns look worse than AMF?

My original estimate valued a day of caged-hen suffering at 1/3 as much as a day of human suffering (I briefly justify this [in a separate post](http://mdickens.me/2016/04/24/how_sentient_are_farm_animals%3F/)). If hens only suffer 1/100 as much as humans (which is about the lowest number you could plausibly defend11) then cage-free campaigns still have a posterior value of 50, making them about seven times more effective than AMF in expectation. You have to de-value hen suffering all the way down to 1/10,000 that of a human before cage-free campaigns look slightly worse than AMF (6.5 versus 7.5). And even if you de-value chickens at 1/100,000, cage-free campaigns still look better than GiveDirectly.

Suppose you combine a highly skeptical prior with a strong discount on non-human animals. Let’s use μ=0.1 and see how much we need to de-value chicken suffering to make AMF look best. At this lower prior μ, AMF’s posterior expected value is 4.4 units, so we need to make cage-free campaigns look worse than that.

If we say that chickens only suffer 1/100 as much as humans, cage-free campaigns have a posterior of 14, so this isn’t enough. We need to reduce the value of chickens to about 1/2000 before AMF looks better than cage-free campaigns with a prior μ of 0.1.

Is there any other way we can make AMF look more cost-effective than cage-free campaigns?

Let’s begin by choosing μ=0.1 and discounting hens by a factor of 100 relative to humans, which are the most conservative values that look at least semi-justifiable.

AMF’s posterior is already pretty close to its estimate, so we can’t make it look much better by assuming that its estimate is more robust. But let’s see what we can do by modifying the estimate for cage-free campaigns.

I discuss my cost-effectiveness estimate for cage-free campaigns [here](http://mdickens.me/2016/04/06/expected_value_estimates_you_can_%28maybe%29_take_literally/#kinda-arbitrary-quantitative-model). In short, the estimate for the value of cage-free campaigns is determined by: (a) total expenditures on campaigns, (b) years until farms would have gone cage-free otherwise, (c) millions of cages prevented by campaigns, (d) proportion of change attributable to campaigns. At the time of this writing, my spreadsheet uses 80% credence intervals ((2, 3); (5, 10); (100, 150); (0.7, 1)) respectively.

It’s probably not reasonable to change the estimates for (a) total expenditures and (d) proportion of change attributable to cage-free campaigns, because these appear pretty robust. If we change the interval of (b) years until farms would have gone cage-free otherwise from (5, 10) to (1, 5), cage-free campaigns now have a posterior of 3.7–a bit worse than AMF’s posterior of 4.4. Lewis Bollard of the Open Philanthropy Project has claimed that 5 years [is a conservative estimate](http://www.openphilanthropy.org/blog/initial-grants-support-corporate-cage-free-reforms#Corporate_cage-free_campaigns_are_extremely_cost-effective), so it’s probably not reasonable to put our lower bound much lower than 5 years. But let’s say for the sake of argument that Lewis is somewhat overconfident, and put the confidence interval at (3, 10).

We’re not modifying (a) and (d), so the only input left is (c) number of cages prevented by campaigns (in millions). My original estimate of (100, 150) may be too narrow: perhaps farms unexpectedly fail to follow through on their commitments or something like that. If we widen the interval to (50, 150) and also widen our estimate of (b) to (3, 10), we get a posterior of 3.6, which makes AMF look better.

Recall that here we used the conservative μ and heavily discounted chickens relative to humans. If we didn’t do those things, it would be virtually impossible to change the inputs to our estimate in such a way that AMF looked better than cage-free campaigns.

In conclusion, if you non-trivially value chickens’ suffering, it’s pretty implausible that AMF has better direct effects than cage-free campaigns.

### Animal advocacy vs. AI safety

The previous section ignored far-future effects and only examined direct effects. But when we’re talking about AI safety, we have to look at far future effects, so I’ll re-incorporate them here.

According to my best estimates, the posteriors for animal advocacy and AI safety only differ by a factor of 2. It’s not that hard to change this result. Here are some things you could do:

  1. Increase the uncertainty about how much animal advocacy causes good values to propagate into the far future. You’d have to greatly increase the uncertainty, but I believe this is defensible. My estimates already assume a lot of uncertainty but I might still be too optimistic.
  2. Assume that animal advocacy does not increase the probability of a hedonium shockwave. This makes AI safety research look about three times as good as THL.
  3. Assume that hedonium shockwave is not a good outcome. This makes AI safety research look about twice as good as THL.



Here are some things you might think make AI safety look better than animal advocacy, but don’t:

  1. Discount chicken suffering by a factor of 100 relative to human suffering and other animals/insects proportionally more.
  2. Moderately decrease the uncertainty about how much work is necessary to prevent unfriendly AI. (My current estimates put the σ at 1.7; you need to reduce σ to about 1 before AI safety work looks better, which is a pretty big reduction.)



### Global poverty vs. AI safety

There may be a reasonable way to change the inputs to make global poverty look better than AI safety, but if it exists then it’s probably fairly complicated. The best way to figure this out is for you to put your estimates into [the model](http://mdickens.me/causepri-app/) and see if global poverty gets a better result than AI safety. This probably makes more sense than me trying to guess what inputs other people would want, because the calculations for far-future effects are substantially more complicated than the comparison between global poverty and animal welfare like what we saw above.

# Discussion

## What about systemic change?

One could argue that a quantitative model can’t properly measure the effects of something highly uncertain like systemic change. Can it?

In fact, the precise reason why my model puts such high value on animal advocacy is that it (ostensibly) begets systemic change. Long-term shifts in how people relate to animals increase the chance that a far future civilization will look friendly to all sentient beings and not just to humans. This is a hugely important outcome. I had no difficulty developing a function to estimate the value of this sort of systemic change. Some of the inputs have wide error bounds to represent my high uncertainty, but this is an inherent fact about the uncertainty of systemic change, not about the model itself. Any attempt to prioritize interventions involving systemic change _must_ make _some_ effort to deal with this high uncertainty.

People often claim that high-risk interventions can’t be quantified. I don’t believe this is true. Most cost-effectiveness models don’t give any weight to an estimate’s variance even though they should, which renders them nearly useless for dealing with high-risk interventions; but using a Bayesian model solves this problem.

## Ways the model could be more precise

When building the model, I made some compromises for the sake of simplicity. A simpler model is easier to create, easier to reason about, and less likely to conceal mistakes. But there are some ways that I could perhaps improve the model, and may make some of these changes in the future. I list some potential planned changes [on my to-do page](https://github.com/michaeldickens/Intervention-Quantitative-Model/blob/master/TODO.org).

## What results do you get?

I want to see what happens when other people fill out the inputs to this model and what causes people to get different results. I encourage you to [input your own best guesses](http://mdickens.me/causepri-app/). Then post the result in a comment here or send it to me.

## Next Steps

Before I make my next large donation, I want to use my quantitative model to broadly prioritize causes and then find organizations in the best cause area(s) with promising surface signals. Then I will follow these steps for each organization I consider:

  1. Learn the basics about the organization: its activities, competence, future plans, and room for funding.
  2. Write a list of all the qualitative factors I know of that are relevant to whether I should donate to the organization.
  3. Build a customized quantitative model for that organization to estimate its impact. Make the inputs as robust as possible. Figure out what I can learn to reduce ambiguity and then learn it.
  4. Go through my list of qualitative factors and make sure the model accounts for all of them.



Whenever possible, I will publish the results of the model and be as transparent as I can about my process. I want this model to be useful for other people; if there’s anything I can do to make it more useful, I will do my best to make it happen.

I built this model to improve my own decision-making, but I’m interested in how valuable it is to other people because that affects how much time I should put into work like this. If you’ve changed your donations or altruism-related plans as a result of my work, please let me know.

Thanks to Jacy Anthis, Tom Ash, Gabe Bankman-Fried, Linda Neavel Dickens, Kieran Greig, Peter Hurford, Jake McKinnon, Mindy McTeigue, Kelsey Piper, Buck Shlegeris, Claire Zabel, and a few folks on the Effective Altruism Editing and Review Facebook group for providing feedback on this project.

# Notes

  1. A brief justification: we can show that estimates should look like log-normal distributions from two facts. (1) The probability of the estimate being incorrect by a factor of X diminishes as X grows; (2) the estimate is probably off by a multiplicative factor, not an additive factor (that is, for estimate `X`, getting `2X` or `X/2` would have been equally likely). This doesn’t strictly mandate that we use a log-normal estimate distribution, but log-normal does work well. You could also justify this by saying that an estimate is the product of multiple inputs, and by the Central Limit Theorem, the product of independent distributions is approximately log-normal. ↩

  2. Mehta, Neelesh B., et al. “Approximating a sum of random variables with a lognormal.” Wireless Communications, IEEE Transactions on 6.7 (2007): 2690-2699. ↩

  3. Fenton, Lawrence F. “The sum of log-normal probability distributions in scatter transmission systems.” Communications Systems, IRE Transactions on 8.1 (1960): 57-67. ↩

  4. Rook, Christopher J., and Mitchell Kerman. “Approximating the Sum of Correlated Lognormals: An Implementation.” Available at SSRN 2653337 (2015). ↩

  5. It may be better to represent the prior for far-future effects as a two-sided log-normal distribution centered at zero (i.e., a regular log-normal distribution combined with the same distribution flipped over the Y axis). This would require writing a lot of new code, but I’d like to implement it for some future revision of the model. I don’t expect this would affect the results as much as shifting the mean toward zero does, because shifting the mean makes extreme results exponentially less likely, but switching to a two-sided log-normal distribution would not change much–it would reduce the prior probability density at each point by a factor of 2, instead of the much larger reduction caused by changing the μ parameter. ↩

  6. In particular, I neglected the possibility that animal advocacy could marginally increase the probability of extremely good far future outcomes by, for example, making people more accepting of the idea that different kinds of minds matter. I don’t consider this particularly likely, but extremely good future outcomes matter so much that even a fairly small probability makes a big difference. ↩

  7. I find it somewhat amusing that I got this result considering how often I hear people claim that animal advocacy doesn’t have flow-through effects. ↩

  8. I’m being intentionally vague here because it’s non-obvious what our reference class should be. I discuss this briefly in [On Priors](http://mdickens.me/2016/04/26/on_priors/). ↩ ↩2

  9. ↩

  10. When I use ACE’s cost-effectiveness credence intervals, I expand them to account for possible overconfidence. ↩

  11. I expect that a lot of readers discount chickens by more than 100x versus humans or ignore chickens entirely. I couldn’t find any good explanation of why this is unreasonable, but [Peter Singer explains](http://mdickens.me/materials/All%20Animals%20Are%20Equal.pdf) why animals ought to have moral value, and [this essay by Brian Tomasik](http://reducing-suffering.org/is-brain-size-morally-relevant/#Small_brains_matter_more_per_neuron) discusses some relevant evidence. ↩




I found this useful I didn't find this useful

  * [CC Licenced](http://creativecommons.org/licenses/by/3.0/ "Post licensed under Creative Commons Attribution 3.0 License")



## Comments (38)

Sort By: **Best**

[Best](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=confidence) [Popular](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=hot) [New](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=new) [Controversial](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=controversial) [Top](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=top) [Old](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=old) [Leading](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/?sort=interestingness)

[Load all comments](javascript:void\(\))

Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 19 May 2016 08:12:52PM _*_ 16 points  [+] (8 children) 

Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 19 May 2016 08:12:52PM _*_ 16 points  [-] 

Good work putting all of this effort into the topic and sharing your thinking for others to read and comment on.

I have many issues with the model, some of which I have mentioned under your previous posts (e.g. re the prior, the inconsistent treatment of different kinds of evidence, only some of which get discounted by the prior). Here I'll mention some of the things that jumped out at me regarding your parameter values in the spreadsheet.

> Note: All CI's here have zero variance because individual well-being shouldn't factor in to prior estimates of good done.

Are you assuming that you have good reasons to believe in particular values, but that the actions of society over millions of years (which will affect many of the other variables) won't be responsive to those same reasons?

> hedonium...uility...1000...for same energy requirements as human brain

In your spreadsheet the physically optimal physical structure for producing well-being is much less efficient at doing so than insects, even after your sentience adjustment, rather than orders of magnitude better. You have insects with absolute value of utility of 4 multiplied by a sentience adjustment of 0.01, giving 0.04. For hedonium and dolorium you have 1000 and 1, giving a ratio of 25,000:1 ratio for utility per human-brain-energy-requirement worth of optimized computronium to utility per insect.

Human brains have somewhat less than 100 billion neurons, while relatively huge-brained insects like honeybees approach a million, and the vast bulk of insects have far less. So just taking neuron count would give a factor of a million (and the computronium can be subdivided however you like), before taking into account the difference between typical insect existence and continuous peak experience, or the room for tremendously greater computational efficiency than the brain (super-cooling, reversible computing, reallocating neural machinery).

So this number is orders of magnitude off on your premises.

> hedonium...dolorium...0.05...0.01

Really, people would be 1/5th as likely to try and make the lowest possible total welfare as the highest possibe welfare? People have rather different attitudes about those two states. What kind of poll results do you think you would get if you asked people "should we create as much suffering as possible, in inhuman beings optimized to maximize ethical badness according to some brand of utilitarianism, or should we instead try to maximize happiness?"

> emulations...0.3...utility...1...wealthy human...1

So you give a lot of credence to a civilization of human-like computer minds, but their expected well-being is only that of wealthy humans today? This when they don't need to suffer from illness, disease, hunger, fatigue, etc? When they can have tremendous experiences for cheap (virtual versions of things are cheap), reliably high mood, modifiable drives, abundant beauty, access to immense knowledge (including knowledge of how to live well), etc?In a world of super advanced technology?

Seems low. If things are being optimized for efficiency and brutal competition then you don't get ems for long, and otherwise you get a world shaped by the desires of the people in it.

> fill universe with biology...0.4

Human brains, compared to physical limits, are much less able to deal with temperatures of a few Kelvin, far less energy-efficient, far more subject to injury and death, and otherwise limited. They are also far, far, more difficult to transport across the interstellar gulfs, and have far lower reproductive potential than AI. Most of the habitable scope of the cosmos and potential for computation is inhospitable to human brains but friendly to AI.

> We have factory farming...0.3

Galaxies of factory farming, with that level of technology? People going tremendously out of their way to get nutrition and taste that could be had far more cheaply without inflicting pain on a cosmic scale? I find this credence bizarrely high. And it's combined with credence 0 for lots of happy pets, or even superhappy agriculture.

> We spread WAS...0.4

And David Pearce-style scenarios get 0.

> humans per star...10^11

If there are so few humans per star there is going to be a tremendous amount of computer intelligence per human or any animals on planetary habitats. In the Solar System today life captures far less than a millionth of solar output.

> GiveDirectly...probability of extinction...given end of poverty

Why think that reduced poverty (with better education, health, and slower population growth as consequences, not to mention potential for better international relations) is more likely to harm than help the long-run?

> Estimated by doubling the 80% CI for online ads This gets you into falsifiable-with-the-naked-eye territory, predicting millions of vegetarians (and majority conversion in the highly targeted demographics) based on past spending.
> 
> veg-years...stop factory farming

Is this accounting for the likelihood of factory farming ending otherwise?

> AI researcher multiplicative effect...1...3...size of community when AI is created...200...10,000

You have the total research community going up in size many, many times, but very little impact of current early field-building on that later size. Is this supposed to reflect that it is only 1 year of work?

> factory farming scenarios prevented...vertebrates...insects

AI developers caring about animals prevents factory farming with probability 1 (which you earlier gave an unconditional probability of 0.3), but prevents wild vertebrate animal suffering 0.1-0.4, insects 0.05-0.2. Why the discrepancies? Why do these people have absolute power over factory farming (rather than governments, corporate superiors, the general public, etc)? Do you really see it as twice as likely that people comprehensively intervene in nature to help or exterminate every little frog or fish in the world as to do the same to insects?

If the action is not building Earthlike ecologies all over the place, or displacing nature with artificial structures, then one and the same action suffices. If you're doing comprehensive genetic and robotic interventions in a rich futuristic society, it won't cost much more to throw in the insects with the frogs and tiny fish.

> dolorium scenarios prevented

In your implicit account of hedonium and dolorium here it's made up of micro-minds (rather than mega-minds, and other alternatives). That's why you rate it more highly than big brain emulations. And you doubt that people would bother to create hedonium of your current favored guess variety because you think they won't care about tiny minds.

But if people don't care about tiny minds so they are uninterested in making optimized happy ones, why would they care about making optimized unhappy ones? Conditional on the (weird) premise of people trying to make the world as bad as possible by utilitarian lights, people being concerned about small minds makes things worse, since when they try to make things bad they will do so orders of magnitude more efficiently on your premises.

So why think that expected dolorium probability goes down more than hedonium goes up from increased concern for small minds, rather than both hedonium and dolorium expectations increasing?

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7i6 "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 19 May 2016 09:18:07PM  4 points  [+] (2 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 19 May 2016 09:18:07PM  4 points  [-] 

Tons of useful comments as usual. Thanks for taking the time to look at everything.

I agree with most of your comments and I'll change the spreadsheet accordingly.

I do have one concern with several of the claims you make. I mostly agree that the claims seem reasonable, but I'm skeptical of putting too high a confidence on claims like "there won't be biological beings in the far future." I'm familiar with the arguments, but I don't believe we can make particularly strong claims about civilization's technological capabilities 1000 years from now. Maybe it would be reasonable to say with 90% confidence that far-future humans won't be made of biology, but I wouldn't use a probability much higher than that.

> Really, people would be 1/5th as likely to try and make the lowest possible total welfare as the highest possibe welfare?

Okay, that's probably too high. I do think it's extremely unlikely that we'll end up with dolorium because normal humans decide to, but there's a non-astronomically-small chance that we'll end up with a malevolent AI. I reduced the probability difference from 1/5 to 1/50.

> And David Pearce-style scenarios get 0.

What is a David Pearce-style scenario?

> AI developers caring about animals prevents factory farming with probability 1 (which you earlier gave an unconditional probability of 0.3)

The effect of factory farming on the utility of the far future is weighted by the probability that it exists, so the spreadsheet does this correctly given that you accept the inputs.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7i7 "Permalink")



Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 19 May 2016 11:35:18PM _*_ 2 points  [+] (1 child) 

Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 19 May 2016 11:35:18PM _*_ 2 points  [-] 

> I do have one concern with several of the claims you make. I mostly agree that the claims seem reasonable, but I'm skeptical of putting too high a confidence on claims like "there won't be biological beings in the far future." I'm familiar with the arguments, but I don't believe we can make particularly strong claims about civilization's technological capabilities 1000 years from now. Maybe it would be reasonable to say with 90% confidence that far-future humans won't be made of biology, but I wouldn't use a probability much higher than that.

"There won't be biological beings in the future' isn't of central importance in your spreadsheet. What is dubious is a divide between 40% probability of a widely colonized universe where almost all the energy goes unused and there is no appreciable contribution of machine intelligence (since if even a tiny fraction of said energy went to such it would be more numerous than the numbers you put in for biological life), vs all machine intelligence and no biological life.

A world with biological life and orders of magnitude more machine life isn't a possibility in the Global sheet, but looks a lot more likely than all biological life across many galaxies with no machine life.

There is a 0.2 probability given to 'civilization stays on Earth.' 0.4 for galactic colonization combined with absurdly primitive food production and no creation of machine intelligence is a lot. You're talking about an incredibly advanced technological base.

> What is a David Pearce-style scenario?

Engineering wild ecologies to have high welfare, with things like contraception-regulated populations, increased pleasure and reduced pain.

> Okay, that's probably too high. I do think it's extremely unlikely that we'll end up with dolorium because normal humans decide to, but there's a non-astronomically-small chance that we'll end up with a malevolent AI.

By which you mean an actively malevolent AI, like one designed to make the world as bad as possible by utilitarian lights? Some kind of sign-flip in a utility function switching from 'maximize good' to 'maximize evil'? Or that an AI indifferent to human concerns (a wireheader, or paperclipper, or digits-of-pi calculator) would have instrumental reason to make the worst possible world by utilitarian lights?

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ic "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 20 May 2016 01:37:16AM  0 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 20 May 2016 01:37:16AM  0 points  [-] 

> What is dubious is a divide between 40% probability of a widely colonized universe where almost all the energy goes unused and there is no appreciable contribution of machine intelligence (since if even a tiny fraction of said energy went to such it would be more numerous than the numbers you put in for biological life), vs all machine intelligence and no biological life.

Well it looks like you are right yet again.

> By which you mean [...]?

I believe the most likely possibilities are (1) a sign-flip utility function and (2) people design an AI with the purpose of conquering other nations or something malevolent-ish like that, and these goals end up causing the AI to maximize dolorium. These possibilities do seem pretty remote though.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ih "Permalink")



Comment author: [kbog](http://effective-altruism.com/user/kbog/) [](http://effectivealtruismhub.com/user/kyle-bogosian) 22 May 2016 05:26:44AM _*_ 1 point  [+] (0 children) 

Comment author: [kbog](http://effective-altruism.com/user/kbog/) [](http://effectivealtruismhub.com/user/kyle-bogosian) 22 May 2016 05:26:44AM _*_ 1 point  [-] 

> Why think that reduced poverty (with better education, health, and slower population growth as consequences, not to mention potential for better international relations) is more likely to harm than help the long-run?

I don't think it's obviously going to harm more than help, but it could harm, based on accelerating greenhouse gas emissions and worsened international relations (Thucydides' traps and instability to existing hegemonic structures).

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7j9 "Permalink")



Comment author: [RyanCarey](http://effective-altruism.com/user/RyanCarey/) 19 May 2016 09:33:49PM _*_ 0 points  [+] (3 children) 

Comment author: [RyanCarey](http://effective-altruism.com/user/RyanCarey/) 19 May 2016 09:33:49PM _*_ 0 points  [-] 

I agree Carl - I'd say advocating for or denying the (overwhelming) importance of hedonism are both arguable positions but expecting it to be of a similar level of importance to other lives is wrongest of all.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7i8 "Permalink")



Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 19 May 2016 11:39:00PM _*_ 3 points  [+] (2 children) 

Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 19 May 2016 11:39:00PM _*_ 3 points  [-] 

The point is stronger: if you posit the most efficient arrangement of matter for producing welfare is less efficient than a bunch of animal brains that you could be using as your arrangement, then you get a contradiction.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7id "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 20 May 2016 01:33:00AM  1 point  [+] (1 child) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 20 May 2016 01:33:00AM  1 point  [-] 

Yeah that was pretty clearly a mistake.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7if "Permalink")



Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 20 May 2016 07:12:31PM _*_ 0 points  [+] (0 children) 

Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 20 May 2016 07:12:31PM _*_ 0 points  [-] 

I also really think that you need to address the super-strong empirical claims implicit in your prior (held fixed, with no updating on evidence that it's wrong, and with no mixture of other models) at the tails. I've added to threads under your previous [post](http://effective-altruism.com/ea/ws/on_priors/#comments) on priors, with links to other discussions.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7iq "Permalink")



Comment author: [John_Maxwell_IV](http://effective-altruism.com/user/John_Maxwell_IV/) 28 May 2016 09:24:02AM _*_ 3 points  [+] (2 children) 

Comment author: [John_Maxwell_IV](http://effective-altruism.com/user/John_Maxwell_IV/) 28 May 2016 09:24:02AM _*_ 3 points  [-] 

Cool stuff! Some comments after a quick skim:

> It would be silly to create this model and then not change my mind based on the evidence it presents.

Suggested way of thinking about this: your brain has an intuitive model of the situation, informed by your thinking & research. Creating a formal quantitative model gives you a way to cross-check your intuitive model. If your formal model and your intuitive model differ, you'd want to find some way to average them, examine the disparity, or perhaps collect additional models with which to do more cross-checking. Sometimes simpler models can even be better than complicated models, as in statistics when complicated models are more prone to overfitting. Possibly related [post](http://blog.givewell.org/2014/06/10/sequence-thinking-vs-cluster-thinking/).

Or here's Daniel Kahneman in _Thinking Fast and Slow_ , talking about a disciplined method he helped the Israeli military come up with for evaluating potential soldiers:

> The interviewers came close to mutiny. These bright young people were displeased to be ordered, by someone hardly older than themselves, to switch off their intuition and focus entirely on boring factual questions. One of them complained, “You are turning us into robots!” So I compromised. “Carry out the interview exactly as instructed,” I told them, “and when you are done, have your wish: close your eyes, try to imagine the recruit as a soldier, and assign him a score on a scale of 1 to 5.”
> 
> Several hundred interviews were conducted by this new method, and a few months later we collected evaluations of the soldiers’ performance from the commanding officers of the units to which they had been assigned. The results made us happy. As Meehl’s book had suggested, the new interview procedure was a substantial improvement over the old one. The sum of our six ratings predicted soldiers’ performance much more accurately than the global evaluations of the previous interviewing method, although far from perfectly. We had progressed from “completely useless” to “moderately useful.”
> 
> The big surprise to me was that the intuitive judgment that the interviewers summoned up in the “close your eyes” exercise also did very well, indeed just as well as the sum of the six specific ratings. I learned from this finding a lesson that I have never forgotten: intuition adds value even in the justly derided selection interview, but only after a disciplined collection of objective information and disciplined scoring of separate traits. I set a formula that gave the “close your eyes” evaluation the same weight as the sum of the six trait ratings. A more general lesson that I learned from this episode was do not simply trust intuitive judgment—your own or that of others—but do not dismiss it, either.

The takeaway for me is that if an intelligent person has made a disciplined effort to review all the relevant literature with an open mind, I'm inclined to give their intuitive judgements credence similar to what I would give a quantitative model. You referenced base rate neglect in your previous post--I agree humans have weaknesses, but quantitative models can have weaknesses too.

You might be able to use [this tool](https://www.codecogs.com/latex/eqneditor.php) to generate images for LaTeX formulas. (In Google Chrome: right-click the image, then "copy image address")

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7kh "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 28 May 2016 05:21:43PM  2 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 28 May 2016 05:21:43PM  2 points  [-] 

Thanks for the comments, John. I pretty much agree with what you're saying here—we should use a combination of intuition and explicit models. I believe most people rely way too much on intuition and not enough on explicit models. This project was an attempt at improving models and making them more reliable.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7kq "Permalink")



Comment author: [RomeoStevens](http://effective-altruism.com/user/RomeoStevens/) 31 May 2016 08:59:24PM _*_ 1 point  [+] (0 children) 

Comment author: [RomeoStevens](http://effective-altruism.com/user/RomeoStevens/) 31 May 2016 08:59:24PM _*_ 1 point  [-] 

> if an intelligent person has made a disciplined effort to review all the relevant literature with an open mind, I'm inclined to give their intuitive judgements credence similar to what I would give a quantitative model.

I trust the person who has read the literature more than the layperson and I trust the intuitions of the person who attempts to build a linear model out of the literature even more.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ld "Permalink")



Comment author: [kierangreig](http://effective-altruism.com/user/kierangreig/) 19 May 2016 10:30:53PM _*_ 3 points  [+] (6 children) 

Comment author: [kierangreig](http://effective-altruism.com/user/kierangreig/) 19 May 2016 10:30:53PM _*_ 3 points  [-] 

I think this quantitative model has some potential and it’s a great addition to the growing literature on cause selection. Thanks for taking the time Michael :)

One aspect of this model which I find problematic, and I feel is something that may be often overlooked when calculating the EV of the far future, is that there is some Cumulative Probability Of Non Existence (CPONE) that is currently not accounted for in the probabilities listed in the EV of the far future spreadsheet.

The CPONE relies on the following:

  * The extinction risk probability per year is always greater than 0 because extinction is possible in any year.

  * Extinction in any year means extinction in all future years. This property is what makes the probability of non-existence cumulative. By cumulative I mean it increases each additional year it is forecast into the future.

  * It follows that the probability of value existing x years in the future decreases as x increases.




I don’t have a great sense of what I feel the probability for extinction of humans or their descendants into the far future is but assigning zero probability to this outcome in the far future spreadsheet conflicts with my initial thoughts on this topic. For instance, available estimates seem to put the current annual probability of extinction at ~10^-4 and it seems that even much smaller annual extinction probabilities accumulate over large timescales to become significant.

These probabilities of extinction matter because future EV comes from the ∑(estimated value at future time point multiplied by the probability of value existing at that future time point) for all future time points. If we feel that, say, 10^10 years into the future there’s a 0.5 probability humans or their descendants are extinct then all estimated values after that time point have to be multiplied by <0.5 in order to find their EV.

Given this, I think there’s some chance that the inclusion of reasonable CPONE models into far future EV calculations can cause orders of magnitude difference relative to not including CPONE models.

Please note, I am not sure the points I made in this comment are correct. I haven’t thought about/ researched this much and as such there’s certainly a chance that I will update in future. It’s unclear to me what impact including CPONE on EV of the far future has, maybe one day I will attempt some calculations myself. I currently assign significant probability to it causing orders of magnitude difference and that makes me feel like CPONE should be attempted to be included in models like this. Another solution would be to make it clearer how the model is dealing with extinction probabilities into the far future and how this may conflict with some people’s views.

[Edited to master bullet point formatting]

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7i9 "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 19 May 2016 11:17:12PM  2 points  [+] (5 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 19 May 2016 11:17:12PM  2 points  [-] 

The CPONE model looks interesting. It does seem somewhat reasonable to say that if we assign some non-trivial probability to extinction each year, then this probability accumulates over time such that we are almost guaranteed to go extinct eventually. Ultimately, though, I don't believe this is a correct assumption.

First, just to clarify, I don't believe that the human species going extinct _per se_ is bad. If humans go extinct but some intelligent benevolent[^1] species continues to exist, that would be good too. So the real concern is that valuable beings stop existing, not that humans stop existing. (Some people might claim that humans are the only valuable beings; I think this is pretty wrong but there's not much to argue here.)

If we successfully start colonizing other planets, our probability of extinction decreases as we grow. While it's true that we have a nonzero probability of extinction on any given year, this probability decreases over time. I believe a plausible cumulative distribution function for the probability of extinction would have an asymptote—or else something like an asymptote, e.g., the probability of extinction between 100 and 1000 years from now is about the same as the probability of extinction between 1000 and 10,000 years from now, etc.

Perhaps we can model the probability of extinction by looking at history. Almost all individual species have gone extinct so if we treat humans as a regular species then our extinction looks pretty likely. But I believe this is the wrong reference class. We shouldn't just care about humans, we should care about good happy beings in general. I think multi-cellular life on earth makes for a better reference class. Multi-cellular life has taken several big hits over the years, but it's always bounced back. Now, it's plausible that life so far [has been net bad](http://foundational-research.org/the-importance-of-wild-animal-suffering/), but the point is that this gives us good theoretical reason to believe that we can avoid extinction for potentially billions of years.

Still, maybe you'd say we've have like a 90% chance of going extinct in the next 10^10 years conditional on making it through the next century. That sounds pretty defensible to me. That doesn't actually change the outputs of the model as much as you might think. When you're looking at interventions' effects on the far future, the numbers are so big that the prior does a lot of work—10^54 and 10^55 expected utility don't look that different after updating on the prior. (I believe this is the correct model: if you thought GiveDirectly was a little better than AI risk, but then I told you that I updated my estimated utility of the far future from 10^54 to 10^55, would that change your mind? But it would have a bigger impact if you used a much wider prior distribution.) Plus far-future interventions' effects tend to be correlated with each other, so this changes how good they all look but doesn't do as much to change how you prioritize them.

[^1] It's sort of unclear how benevolent humans are; we do have factory farming after all. I'm hoping we get rid of that before too long.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ib "Permalink")



Comment author: [RyanCarey](http://effective-altruism.com/user/RyanCarey/) 20 May 2016 04:34:15AM _*_ 1 point  [+] (3 children) 

Comment author: [RyanCarey](http://effective-altruism.com/user/RyanCarey/) 20 May 2016 04:34:15AM _*_ 1 point  [-] 

The constant (irreducible) extinction risk model is a good one, but here's the catch. You don't really know how low the irreducible risk is once all risk-reducing interventions are made. It could go down to 0.1% annually, (suppose there are some unavoidable sun flares or other cosmic disasters) or it could go down to near-enough to zero. We don't know which kind of world we'd end up in, but if you care a lot about the long-run future, it's the latter family of worlds that you're aiming to save, and on expected value, the notion of those first worlds (whose cosmic endowments are kinda doomed :p) don't really matter. So the point if that the constant irreducable extinction risk model is just good enough that it only needs a slight upgrade to get the right (opposite) answer!

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ii "Permalink")



Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 20 May 2016 12:55:32PM  3 points  [+] (0 children) 

Comment author: [Carl_Shulman](http://effective-altruism.com/user/Carl_Shulman/) 20 May 2016 12:55:32PM  3 points  [-] 

With uncertainty about that extinction rate [this](http://scholar.harvard.edu/files/weitzman/files/why_far-distant_future.pdf) Weitzman paper's argument is relevant:

> A critical feature of the distant future is currently unresolvable uncertainty about what will then be the appropriate rate of return on capital to use for discounting. This paper shows that there is a well-defined sense in which the ‘‘lowest possible’’ interest rate should be used for discounting the far-distant future part of any investment project. Some implications are discussed for evaluating long-term environmental projects or activities, like measures to mitigate the possible effects of global climate change

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ik "Permalink")



Comment author: [AGB](http://effective-altruism.com/user/AGB/) 25 May 2016 07:32:39PM  1 point  [+] (1 child) 

Comment author: [AGB](http://effective-altruism.com/user/AGB/) 25 May 2016 07:32:39PM  1 point  [-] 

Why 'once all risk-reducing measures are made'? Presumably what we care about is the marginal risk-reduction measure _we_ can make on the margin?

I see no reason to think returns here are close to linear, since a reduction in the extinction rate from 0.2% to 0.1% (500 years -> 1000 years) delivers half the benefits of going from 0.1% to 0.05% (1000 years -> 2000 years) which is half of the benefits of going from 0.05% to 0.025%, etc. So my very weak prior on 'marginal return on effort spent reducing extinction risk' would be that they would be roughly exponentially increasing with the overall magnitude of resources thrown at the problem.

Which means I don't think you can take the usual shortcut of saying 'if 10% of world resources were spent on this it would be a great return on investment, and diminishing returns, so me spending 0.00001% of the worlds resources is also a great return'.

With that said, massively increasing returns is extremely unusual and feels intuitively odd so I'm very open to alternative models; this came up recently at a London EA discussion as a major objection to some of the magnitudes thrown around in x-risk causes, but I still don't have a great sense of what alternative models might look like.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7jo "Permalink")



Comment author: [RyanCarey](http://effective-altruism.com/user/RyanCarey/) 27 May 2016 04:53:22AM  0 points  [+] (0 children) 

Comment author: [RyanCarey](http://effective-altruism.com/user/RyanCarey/) 27 May 2016 04:53:22AM  0 points  [-] 

Yeah introducing diminishing returns into a model could change the impact by an order of magnitude but I'm trying to answer a more binary question: which

What I'm trying to look at is will an intervention to x-risk has a "long-run impact" e.g. either approx. the cosmic endowment or approx. the current milleneum. If you use a constant discount or an exponential discount, that's going to make all of the difference. And if you think there's some amount of existential risk that's irreducible, that forces you to include some exponential discounting. So it's kind-of different from where you're trying to lead things.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7jx "Permalink")



Comment author: [kierangreig](http://effective-altruism.com/user/kierangreig/) 20 May 2016 05:34:11PM _*_ 0 points  [+] (0 children) 

Comment author: [kierangreig](http://effective-altruism.com/user/kierangreig/) 20 May 2016 05:34:11PM _*_ 0 points  [-] 

> I believe a plausible cumulative distribution function for the probability of extinction would have an asymptote—or else something like an asymptote, e.g., the probability of extinction between 100 and 1000 years from now is about the same as the probability of extinction between 1000 and 10,000 years from now, etc.

Using that example the probability of value existing could be roughly modelled as: p(n)= (1-r)^(log(n-1)) Where p is the probability of value existing n years into the future, r is the extinction probability between 10 and 100 years, log means the log base 10 and n is the number of years in the future. This relationship works for n>2.

I was curious about what the average of p(n) for that type of function would be over the next 10^11 years. Some [available extinction estimates](https://en.wikipedia.org/wiki/Human_extinction#Probability_estimates) put r between 10% and 50%. I imagine there’s also similar variance within EAs’ r value. Using r= 10% the average of p(n) over 10^11 years seems like it would be 3 * 10^-1 . Using r= 50% the average of p(n) over 10^11 years would be ~7 * 10^-4. I used [Wolfram Alpha’s integral calculator](http://www.wolframalpha.com/input/?i=integrate) for these calculations and I am not that it’s performing the calculation correctly. These averages for p(n) could make the impact on far future EV significant.

I don’t have strong views on which CPONE model is best and the ones I mention here may be flawed. I softly lean towards including CPONE models because the posterior then more closely reflects the user’s view of reality, it’s not too difficult to include CPONE models, reasonable people may have different CPONE models, and the addition of a CPONE model may result in different cause prioritization conclusions.

> I think multi-cellular life on earth makes for a better reference class. Multi-cellular life has taken several big hits over the years, but it's always bounced back.

Interesting. I hadn’t thought of that reference class before :)

> When you're looking at interventions' effects on the far future, the numbers are so big that the prior does a lot of work—10^54 and 10^55 expected utility don't look that different after updating on the prior.

Excellent point :) I wasn’t fully taking that into consideration. Updates me towards thinking that CPONE models are less important than previously thought. I think reasonable people could have a CPONE model which causes more than one order of magnitude difference in EV and therefore cause a more significant difference after updating on the prior.

[edited originally I accidentally used the natural logarithm instead of log base 10 when calculating the average of the probability function over 10^11 years]

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7in "Permalink")



Comment author: [Buck](http://effective-altruism.com/user/Buck/) 18 May 2016 07:21:38AM  3 points  [+] (1 child) 

Comment author: [Buck](http://effective-altruism.com/user/Buck/) 18 May 2016 07:21:38AM  3 points  [-] 

I disagree with several of the numbers you use.

For example, Globals$B22 is the utility of a developing-world human. I feel like that number is quite tenuous: I think you're using happiness research in a way pretty differently from how it was intended. I would not call that a very robust estimate. (Also, "developing world human" is pretty ambiguous. My speculation is that you mean the level of poverty experienced by the people affected by GiveDirectly and AMF; is that correct?)

I think the probability of death from AI that you give is too low. You've done the easy and defensible and epistemically-virtuous-looking thing of looking at a survey of expert opinion. But I don't think it's actually a very good estimate of the most educated guess, any more than measuring the proportion of Americans who are vegetarian is a good way of getting a good estimate for the probability that chickens have moral value.

What do you mean by "size of FAI community"? If you mean "number of full time AI safety people", I think your estimate is way too high. There are like, maybe 50 AI safety people? So you're estimating that we at least quadruple that? I also don't quite understand the relevance of the link to<https://intelligence.org/2014/01/28/how-big-is-ai/.>

I also have some more general concerns about how you treat uncertainty: I think it plausibly makes some sense that variance in your estimate of chicken sentience should decrease your estimate of effectiveness of cage-free campaigns. I'll argue for this properly at some point in the future.

Great work overall; I'm super excited to see this! This kind of work has a lot of influence on my donations.

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7hv "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 18 May 2016 01:37:38PM _*_ 2 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 18 May 2016 01:37:38PM _*_ 2 points  [-] 

Thanks for the feedback, Buck.

  1. I updated the description for "developing world human" to be less ambiguous.

  2. I agree that the survey respondents are too optimistic. I thought I had changed the numbers to be more pessimistic but apparently I didn't.

  3. Considering how quickly the AI safety field is growing, I would be surprised if there were fewer than 200 AI safety researchers within 20 years (and it's pretty unlikely that AGI is developed before then). I use "How Big Is AI" [here](http://effective-altruism.com/ea/xq/quantifying_the_far_future_effects_of/#ai-safety).




  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7hz "Permalink")



Comment author: [kbog](http://effective-altruism.com/user/kbog/) [](http://effectivealtruismhub.com/user/kyle-bogosian) 21 May 2016 05:41:32PM  1 point  [+] (0 children) 

Comment author: [kbog](http://effective-altruism.com/user/kbog/) [](http://effectivealtruismhub.com/user/kyle-bogosian) 21 May 2016 05:41:32PM  1 point  [-] 

Just to display my reasoning to a broader audience I am reiterating what I said on Facebook.

I think it's strange and mistaken to put numerical priors into the calculation to try to encapsulate human thinking. This model is merely taking one's opinions as given and predicting whether or not one will be convinced by a true EV calculation. It's not clear what this offers that is not offered by simply providing an EV calculation and seeing whether one is convinced. On the other hand, it introduces a number of potential problems. It makes the math and the spreadsheet much more complicated with more risk of minor errors and bad estimations. It also implies that our intuitions can be meaningfully written in the form of neat statistical distributions, which is clearly not how humans think, and might not even be a meaningful approximation to how humans think.

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7iy "Permalink")



Comment author: [Peter_Hurford](http://effective-altruism.com/user/Peter_Hurford/) [](https://eahub.org/user/peter-hurford) 06 June 2016 04:26:46AM  1 point  [+] (1 child) 

Comment author: [Peter_Hurford](http://effective-altruism.com/user/Peter_Hurford/) [](https://eahub.org/user/peter-hurford) 06 June 2016 04:26:46AM  1 point  [-] 

For those who don't know (and as a note to myself so I can find it later), Michael put up a web app here: <http://mdickens.me/causepri-app/.> This is particularly useful for those (like myself) who don't have Microsoft Excel.

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7mz "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 07 June 2016 02:34:51AM  0 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 07 June 2016 02:34:51AM  0 points  [-] 

I edited the post to say this. Thanks for the reminder.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7n8 "Permalink")



Comment author: [Denkenberger](http://effective-altruism.com/user/Denkenberger/) 28 May 2016 03:54:42PM  1 point  [+] (1 child) 

Comment author: [Denkenberger](http://effective-altruism.com/user/Denkenberger/) 28 May 2016 03:54:42PM  1 point  [-] 

Impressive work! I would suggest adding the cause area of [alternate foods](https://en.wikipedia.org/wiki/Feeding_Everyone_No_Matter_What) for agricultural catastrophes. Though not quite as high importance as AI, it is considerably more tractable and neglected. I expect that it would be lower variance as well. I am happy to help with this.

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7kk "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 29 May 2016 12:38:05AM  1 point  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 29 May 2016 12:38:05AM  1 point  [-] 

Yep, there are a bunch of cause areas worth adding that I'd like to get to at some point. I'd love if you wanted to [download the spreadsheet](http://mdickens.me/materials/QuantitativeModel.xlsm) and add the new model, if you can figure out how do to it.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7kw "Permalink")



Comment author: [zdgroff](http://effective-altruism.com/user/zdgroff/) 24 May 2016 02:52:18PM  1 point  [+] (1 child) 

Comment author: [zdgroff](http://effective-altruism.com/user/zdgroff/) 24 May 2016 02:52:18PM  1 point  [-] 

This is phenomenal. One of the best posts I've ever seen here. I'm also increasingly of the belief that working at the junction of far future work and animals is potentially extremely high impact. Do you have any more specific ideas of what this would entail?

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7jf "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 24 May 2016 04:22:45PM  2 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 24 May 2016 04:22:45PM  2 points  [-] 

Good question! I know a decent number of people who believe that we should do some sort of far future animal-related work, but there aren't a lot of great ideas floating around. I hear some people say that we should do regular animal advocacy. I expect that this will have _good_ effects for the far future, but I'm skeptical that it's actually the _best_ thing we can do. (I [talk about this](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/#values-spreading-may-be-better-than-existential-risk-reduction) in OP.)

I [discuss](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/#high-leverage-values-spreading-looks-best) high-leverage values spreading as well as a few organizations that look like they're doing that sort of thing. To my knowledge, it looks like the [Foundational Research Institute](http://foundational-research.org/) is the only organization that explicitly does work on helping non-human minds in the far future.

As I discuss in OP, my favorite idea so far is working to make sure that a powerful AI ends up with animal-friendly values. FRI is [doing work](http://foundational-research.org/open-research-questions/#Suffering_from_controlled_vs_uncontrolled_artificial_intelligence) along these lines. I'm particularly optimistic about trying to push existing AI researchers toward caring more about animals, but I don't know an effective way to do this.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7jg "Permalink")



Comment author: [weeatquince](http://effective-altruism.com/user/weeatquince/) [](https://eahub.org/user/samuel-hilton) 20 May 2016 12:50:48AM _*_ 1 point  [+] (1 child) 

Comment author: [weeatquince](http://effective-altruism.com/user/weeatquince/) [](https://eahub.org/user/samuel-hilton) 20 May 2016 12:50:48AM _*_ 1 point  [-] 

This looks crazily well done - good job!

Question: Have you / how have you, when considering where to donate, considered meta causes such as growing the effective altruism movement or fundraising for effective charities, etc?

EG1 - a charity like REG may not have as much effect on long term values as THL, but will raise money in the short term which will then fund THL etc.

EG2 - a charity that does more research like GPP, into what is best to donate to, that will improve resources such as yoru spreadsheet

Sorry if you mentioned this and I missed it

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ie "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 20 May 2016 01:34:10AM  1 point  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 20 May 2016 01:34:10AM  1 point  [-] 

I haven't explicitly modeled those yet because they're more complicated, but I did [donate to REG](http://www.effective-altruism.com/ea/ns/my_cause_selection_michael_dickens/) last year.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ig "Permalink")



Comment author: [deleted] 10 September 2016 12:31:25AM _*_ 0 points  [+] (1 child) 

Comment author: [deleted] 10 September 2016 12:31:25AM _*_ 0 points  [-] 

This is good stuff, I refer to it often. That said, I wish it accounted for the possibility that we are living in a simulation. I find the [simulation argument](http://www.simulation-argument.com/simulation.html) reasonable enough to consider when making donation decisions. I guess I could partially incorporate it in your app by changing the CI's...

Foundational Research Institute recently published a interesting paper on the topic: [How the Simulation Argument Dampens Future Fanaticism](https://foundational-research.org/how-the-simulation-argument-dampens-future-fanaticism).

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/8bd "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 10 September 2016 03:25:07AM  0 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 10 September 2016 03:25:07AM  0 points  [-] 

If you know any programming you can [fork the source code](https://github.com/bshlgrs/mega-michael-madness/) and change whatever you want.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/8be "Permalink")



Comment author: [John_Maxwell_IV](http://effective-altruism.com/user/John_Maxwell_IV/) 26 August 2016 04:46:44AM  0 points  [+] (0 children) 

Comment author: [John_Maxwell_IV](http://effective-altruism.com/user/John_Maxwell_IV/) 26 August 2016 04:46:44AM  0 points  [-] 

Did you think about using Ozzie Gooen's <https://www.getguesstimate.com/> ?

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/86z "Permalink")



Comment author: [Lila](http://effective-altruism.com/user/Lila/) 27 May 2016 05:59:42PM  0 points  [+] (1 child) 

Comment author: [Lila](http://effective-altruism.com/user/Lila/) 27 May 2016 05:59:42PM  0 points  [-] 

Not sure why you did this in Excel. Numpy/Scipy or even R probably would have been faster and easier to use.

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7k6 "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 27 May 2016 06:59:53PM  2 points  [+] (0 children) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 27 May 2016 06:59:53PM  2 points  [-] 

Excel automatically gives you a nice UI—this problem is well-suited to spreadsheets. But we're currently re-writing the model in C++ with a server-side UI so people who don't have Excel can use it.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7k8 "Permalink")



Comment author: [AngelaC](http://effective-altruism.com/user/AngelaC/) 24 May 2016 06:05:18PM  0 points  [+] (2 children) 

Comment author: [AngelaC](http://effective-altruism.com/user/AngelaC/) 24 May 2016 06:05:18PM  0 points  [-] 

This is really interesting, thanks for sharing Michael.

What do you see as the biggest risks to this model? I.e., if it's broadly adopted, what might be some of the consequences?

  * I found this useful
  * I didn't find this useful
  * 

  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7ji "Permalink")



Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 24 May 2016 09:27:46PM  0 points  [+] (1 child) 

Comment author: [MichaelDickens](http://effective-altruism.com/user/MichaelDickens/) [](http://eahub.org/user/michael-dickens) 24 May 2016 09:27:46PM  0 points  [-] 

I don't see quantitative models in general as having any risks per se, because any result you could get qualitatively you could also get quantitatively. But perhaps quantitative models tend to push people toward certain decisions, and that these decisions are systematically wrong in a way that's hard to detect.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7jl "Permalink")



Comment author: [Peter_Hurford](http://effective-altruism.com/user/Peter_Hurford/) [](https://eahub.org/user/peter-hurford) 25 May 2016 02:15:41AM  2 points  [+] (0 children) 

Comment author: [Peter_Hurford](http://effective-altruism.com/user/Peter_Hurford/) [](https://eahub.org/user/peter-hurford) 25 May 2016 02:15:41AM  2 points  [-] 

One big risk is that people might take the model more seriously than it ought to be taken, given a bias toward quantitative things.

  * I found this useful
  * I didn't find this useful
  * 

  * Parent
  * Reply 
  * [Permalink](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7jm "Permalink")



  * [wiki](http://wiki.lesswrong.com)
  * [Sequences](http://effective-altruism.com/sequences/)
  * [About](http://effective-altruism.com/about/)



## Getting Started

  * [Forum FAQ](/ea/vm/ea_forum_faq/)
  * [New to Effective Altruism?](http://effectivealtruism.org/)
  * [More on Effective Altruism](/ea/6x/introduction_to_effective_altruism/)
  * [Open Thread](/ea/1ub/open_thread_42/)
  * [Meetups](https://eahub.org/groups)
  * [Other Resources](https://www.effectivealtruism.org/get-involved/)



##  [Recent Comments](http://effective-altruism.com/comments)

## Recently on EA Blogs




##  Top Contributors This Month 

[ Subscribe to RSS Feed ](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/.rss)

[FAQ](http://effective-altruism.com/ea/vm/ea_forum_faq/) | [contact@effective-altruism.com](mailto:contact@effective-altruism.com) | © 2018 Effective Altruism Forum | Powered by [reddit](http://code.reddit.com/)

# You'll need to login or register to do that

## (Don't worry, it only takes a few seconds)

[×](javascript:hidecover\('cover','loginpopup'\))

## Log In

[Recover password](http://effective-altruism.com/password)

## Sign Up

[ Close this window ](javascript:hidecover\('langcover','langpopup'\))
