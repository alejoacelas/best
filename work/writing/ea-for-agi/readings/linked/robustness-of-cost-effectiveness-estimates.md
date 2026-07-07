---
title: "Robustness of Cost-Effectiveness Estimates and Philanthropy"
author: "JonahS"
date: 2013-05-24
url: https://lesswrong.com/posts/rNuBzyWkigrf6BWg7/robustness-of-cost-effectiveness-estimates-and-philanthropy
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ea-intro-program/cost-effectiveness-misleading.md; GiveWell on why cost-effectiveness estimates need heavy skepticism, epistemics"
---

**Note:** I formerly worked as a research analyst at [GiveWell](http://www.givewell.org/). This post describes the evolution of my thinking about robustness of cost-effectiveness estimates in philanthropy. All views expressed here are my own.

Up until 2012, I believed that detailed explicit cost-effectiveness estimates are very important in the context of philanthropy. My position was reflected in a [comment that I made](http://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/comment-page-1/#comment-230938) in 2011:

The problem with using unquantified heuristics and intuitions is that the “true” expected values of philanthropic efforts plausibly differ by many orders of magnitude, and unquantified heuristics and intuitions are frequently insensitive to this. The last order of magnitude is the only one that matters; all others are negligible by comparison. So if at all possible, one should do one’s best to pin down the philanthropic efforts with the “true” expected value per dollar of the highest (positive) order of magnitude. It seems to me as though any feasible strategy for attacking this problem involves explicit computation.

During my time at GiveWell, my position on this matter shifted. I still believe that there are instances in which *rough* cost-effectiveness estimates can be useful for determining good philanthropic foci. But I’ve shifted toward the position that **effective altruists should spend much more time on qualitative analysis than on quantitative analysis in determining how they can maximize their positive social impact**.

In this post I’ll focus on one reason for my shift: **explicit cost-effectiveness estimates are generally much less robust than I had previously thought**.

**The history of GiveWell’s estimates for lives saved per dollar**

Historically, GiveWell used “cost per life saved” as a measure of the cost-effectiveness of its global health recommendations. Examination of the trajectory of GiveWell’s cost-effectiveness estimates shows that **GiveWell has consistently updated in the direction of its ranked charities having higher “cost per life saved” than GiveWell had previously thought.** I give the details below.

The discussion should be read with the understanding that **donating to GiveWell’s top charities has benefits that extend beyond saving lives**, so that “number of lives saved” understates cost-effectiveness..

At the end of each of 2009 and 2010, GiveWell named [VillageReach](http://www.givewell.org/international/charities/villagereach) its #1 ranked charity. VillageReach [estimated](http://www.givewell.org/international/top-charities/villagereach/December-2009-review#Pastcosteffectivenesspilotprogram) the cost-per-life-saved of its pilot project as being < $200, and at the end of 2009, GiveWell gave a “conservative” estimate of $545/life saved. In 2011, GiveWell [reassessed VillageReach’s pilot project](http://blog.givewell.org/2012/07/26/rethinking-villagereachs-pilot-project/), commending VillageReach for being transparent enough for reassessment to be possible, and concluding that

We feel that within the framework of “delivering proven, cost-effective interventions to improve health,” AMF and SCI are solidly better giving opportunities than VillageReach (both now and at the time when we recommended it). Given the information we have, we see less room for doubt in the cases for AMF’s and SCI’s impact than in the case for VillageReach’s.

Here “AMF” refers to [Against Malaria Foundation](http://www.givewell.org/international/top-charities/AMF), which is GiveWell’s current #1 ranked charity. If AMF is currently more cost-effective than VillageReach was at the time when GiveWell recommended VillageReach, then the best cost-per-life-saved figure for GiveWell’s recommended charities is (and was) the cost-effectiveness of donating to AMF.

AMF delivers long-lasting insecticide treated nets (LLINs) to the developing world to protect people against mosquitoes that spread malaria. This contrasts with VillageReach, which works to increase vaccination rates. Vaccines are thought to be more cost-effective than LLINs, and [GiveWell has not been able to find strong giving opportunities in vaccination](http://blog.givewell.org/2013/03/21/trying-and-failing-to-find-more-funding-gaps-for-delivering-proven-cost-effective-interventions/), so the cost per life saved of the best opportunity that GiveWell has found for individual donors is correspondingly higher.

At the end of 2011, GiveWell estimated that the marginal cost per life associated with donating to AMF at [$1600/life saved](http://www.givewell.org/international/top-charities/AMF/2011-review#Costperlifesaved). During 2012, I vetted GiveWell’s page on LLINs and [uncovered an issue](http://blog.givewell.org/2012/10/18/revisiting-the-case-for-insecticide-treated-nets-itns/), which led GiveWell to revise its estimate for AMF’s marginal cost per life saved to [$2300/life saved](http://www.givewell.org/international/top-charities/AMF#Costperlifesaved) at the end of 2012. This does not take into account [regression to the mean](http://www.givingwhatwecan.org/where-to-give/methodology/regression-to-the-mean), which can be expected to raise the cost per life saved.

The discussion above shows a consistent trend in the direction of the marginal cost per life saved in the developing world being higher than initially meets the eye. Note that the difference between VillageReach’s original estimate and GiveWell’s current estimate is about an order of magnitude.

**Concrete factors that further reduce the expected value of donating to AMF**

A key point that I had missed when I thought about these things earlier in my life is that **there are many small probability failure modes which are not significant individually, but which collectively substantially reduce cost-effectiveness**. When I encountered such a potential failure mode, my reaction was to think “this is very unlikely to be an issue” and then to forget about it. I didn’t notice that I was doing this many times in a row.

I list many relevant factors that reduce AMF’s expected cost-effectiveness below. Some of these are from GiveWell’s discussion of [possible negative or offsetting impacts](http://www.givewell.org/international/top-charities/AMF#Possiblenegativeoroffsettingimpact) in GiveWell’s review of AMF. Others are implicitly present in GiveWell’s review of AMF and [GiveWell’s review of LLINs](http://www.givewell.org/international/technical/programs/insecticide-treated-nets), and others are issues that have emerged in the interim. I would emphasize that **I don’t think that any of the points listed is a big issue** and that **GiveWell and AMF take precautionary efforts to guard against them**. But I think that they *collectively* reduce cost-effectiveness by a substantial amount.

*   If GiveWell’s customers weren’t funding AMF, another funder might, and that funder might instead be funding much less effective activities.
*   If AMF weren’t working in a given region, there might be other organizations that would deliver LLINs to that region, and these other organizations may instead be funding much less effective activities.
*   It could be that the workers who distribute the LLINs would otherwise be providing more cost-effective health care interventions.
*   The five RCTs that found that LLIN distribution reduces mortality could be systematically flawed in a non-obvious way.
*   While the Cochrane Review that contains a meta-analysis of the RCTs referred to unpublished studies so as to counteract [publication bias](http://blog.givewell.org/2009/01/25/publication-bias-over-reporting-good-news/), there may be unpublished studies that were missed, and which were not published, because they found no effect.
*   The field workers who are assigned to distribute LLINs may [steal the nets to sell them for a profit](http://www.givewell.org/international/top-charities/amf/updates/March-2012#DistributioninNtcheudistrictofMalawi).
*   Fathers [may steal nets from pregnant mothers](http://ugandaradionetwork.com/a/story.php?s=18197) and sell them for a profit.
*   LLIN recipients may [use the nets for fishing](http://www.malariajournal.com/content/7/1/165).
*   LLIN users may not fasten LLINs properly.
*   Mosquitoes may develop [biological resistance to the insecticide used on LLINs](http://www.ncbi.nlm.nih.gov/pubmed/21856232).
*   Mosquitoes [may develop “behavioral resistance”](http://blog.givewell.org/2012/11/09/insecticide-resistance-and-malaria-control/) to the insecticides used on LLINs by evolving to bite during the day (when LLINs are not used) rather than during the night.

Most of the relevant factors will vary by region where AMF ships nets, and some may be present in certain locations and not others.

**Do these considerations argue against donating to AMF?**

In view of the issues above, one might wonder whether it’s better to donate to a charity in a different cause, or better not to donate at all. Some relevant points follow:

**Donating to AMF has benefits beyond saving lives.** The above discussion of cost-effectiveness figures concerns “cost per life saved” specifically. But there are benefits to donating to AMF that go beyond saving lives.

*   Malaria control reduces the morbidity of malaria. A Cochrane Review of the [health benefits of LLINs](http://www.givewell.org/international/technical/programs/insecticide-treated-nets#Evidencefromsmallscalehighqualitystudies) reports on reductions in anemia, enlarged spleen, and other health outcomes.
*   People are more productive when they’re healthy than they are when they’re ill.
*   There is some evidence that malaria control [increases children’s income later on in life](http://www.givewell.org/international/technical/programs/insecticide-treated-nets#Possibledevelopmentaleffects).
*   The above benefits could be massively leveraged via [flow-through effects](http://blog.givewell.org/2013/05/15/flow-through-effects/).

**Updates in the direction of reduced cost-effectiveness aren’t specific to global health.** Based on my experience at GiveWell, I’ve found that *regardless* of the cause within which one investigates giving opportunities, there’s a strong tendency for giving opportunities to appear progressively less promising as one learns more. AMF and LLIN distribution have stood up to scrutiny *unusually well*. It remains the case that [Global health and nutrition](http://blog.givewell.org/2011/12/22/my-favorite-cause-for-individual-donors-global-health-and-nutrition/) may be an unusually good cause for individual donors.

**Updates in the direction of reduced LLIN cost-effectiveness push in favor of cash transfers over LLINs.** Transferring cash to people in the developing world is an unusually straightforward intervention. While there are [potential downsides to transferring cash](http://www.givewell.org/international/technical/programs/cash-transfers#Whatarethepotentialdownsidesoftheintervention), there seem to be fewer potential failure modes associated with it than there are potential failure modes associated with LLIN distribution. There are [strong arguments that favor LLINs over cash transfers](http://blog.givewell.org/2012/05/30/giving-cash-versus-giving-bednets/), but difference in straightforwardness of the interventions in juxtaposition with the phenomenon of surprisingly large updates in the direction of reduced cost-effectiveness is a countervailing consideration.

**Why do cost-effectiveness updates skew so negatively?**

When I first started thinking seriously about philanthropy in 2009, I thought that if one has impressions of a philanthropic opportunity, one will be equally likely to update in the direction of it being better than meets the eye as one will be to update the direction of the opportunity being worse than meets the eye. So I was surprised to discover how strong the tendency is for philanthropic opportunities to look worse over time rather than better over time.

Aside from the empirical data, something that shifted my view is Holden’s observation that outlier cost-effectiveness estimates [need to be regressed to one’s Bayesian prior](http://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/) over the values of all possible philanthropic opportunities. Another reason for my shift is GiveWell finding that [philanthropic markets are more efficient than it had previously thought](http://blog.givewell.org/2013/05/02/broad-market-efficiency/). I think that [optimism bias](http://en.wikipedia.org/wiki/Optimism_bias) also plays a role.

This is all consistent with GiveWell’s view that [one should expect good giving to be hard](http://blog.givewell.org/2011/06/11/why-we-should-expect-good-giving-to-be-hard/).

**Implications for maximizing cost-effectiveness**

The remarks and observations above imply that **Bayesian regression in the context of philanthropy is substantially larger than expected**. This favors:

*   Examining a philanthropic opportunity [from many angles](http://blog.givewell.org/2011/11/10/maximizing-cost-effectiveness-via-critical-inquiry/) rather than relying too heavily on a single perspective.
*   Giving more weight to robust inputs into one’s assessment of a philanthropic opportunity. Estimating the cost-effectiveness of health interventions in the developing world has proved to be exceedingly difficult, and this pushes in favor of giving more weight to inputs for which it’s possible to make relatively well-grounded assessments. Some of these are [room for more funding](http://www.givewell.org/international/technical/criteria/scalability), [the quality of the people behind a project](http://blog.givewell.org/2012/10/25/evaluating-people/) and [historical precedent](http://blog.givewell.org/2013/04/09/givewells-history-of-philanthropyphilanthropy-journalism-project/).  
    
*   Choosing giving opportunities that [it will be possible to learn from](http://blog.givewell.org/2012/12/20/more-on-the-ranking-of-our-top-charities/), and [giving now instead of giving later](http://blog.givewell.org/2011/12/20/give-now-or-give-later/) when one encounters such an opportunity.
*   Choosing giving opportunities [about which one has a lot of information](http://blog.givewell.org/2011/05/27/in-defense-of-the-streetlight-effect/). GiveWell has been [moving away from](http://blog.givewell.org/2013/03/14/update-on-givewells-plans-for-2013/) the old criterion of recommending proven interventions, and giving more weight to [upside relative to track record](http://blog.givewell.org/2012/01/19/trading-off-upside-vs-track-record/) than GiveWell used to. However, this partially reflects the discovery that the expected effectiveness of ostensibly “proven” interventions is lower than previously thought.