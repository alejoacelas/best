---
title: "How Long Do Policy Changes Matter? New Paper"
author: "zdgroff"
date: 2023-11-02
url: https://forum.effectivealtruism.org/posts/jCwuozHHjeoLPLemB/how-long-do-policy-changes-matter-new-paper
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by digital-sentience-funding-opportunities; on persistence of policy changes, macrostrategy/longtermism"
---

A key question for many interventions' impact is how long the intervention changes some output counterfactually, or how long the intervention washes out. This is often the case for work to change policy: the cost-effectiveness of efforts to pass [animal welfare ballot initiatives](https://rethinkpriorities.org/publications/a-cost-effectiveness-analysis-of-historical-farmed-animal-welfare-ballot-initiatives), [nuclear non-proliferation policy](https://exploratory-altruism.org/research-findings/), [climate policy](https://www.founderspledge.com/downloads/fp-climate-change), and [voting reform](https://forum.effectivealtruism.org/posts/xL8H3TRj3xxenDgEF/transforming-democracy-a-unique-funding-opportunity-for-us), for example, will depend on (a) whether those policies get repealed and (b) whether they would pass anyway. Often there is an explicit assumption, e.g., that passing a policy is equivalent to speeding up when it would have gone into place anyway by *X* years.[^4sidc99qrzj] [^nk39eu4v7l] As people routinely note when making these assumptions, it is very unclear what assumption would be appropriate.

In a [new paper](https://zachfreitasgroff.com/FreitasGroff_Policy_Persistence.pdf) (my economics "job market paper"), I address this question, focusing on U.S. referendums but with some data on other policymaking processes:

> Policy choices sometimes appear stubbornly persistent, even when they become politically unpopular or economically damaging. This paper offers the first systematic empirical evidence of how persistent policy choices are, defined as whether an electorate’s or legislature’s decisions affect whether a policy is in place decades later. I create a new dataset that tracks the historical record of more than 800 state policies that were the subjects of close referendums in U.S. states since 1900. In a regression discontinuity design, I estimate that passing a referendum increases the chance a policy is operative 20, 40, or even 100 years later by over 40 percentage points. I collect additional data on U.S. Congressional legislation and international referendums and use existing data on state legislation to document similar policy persistence for a range of institutional environments, cultures, and topics. I develop a theoretical model to distinguish between possible causes of persistence and present evidence that persistence arises because policies’ salience declines in the aftermath of referendums. The results indicate that many policies are persistently in place—or not—for reasons unrelated to the electorate’s current preferences.

Below I'll pull out some key takeaways that I think are relevant to the EA community and in some cases did not make it into the paper.

**Overview of Results and Methods**
===================================

My strategy in the paper involves comparing how many policies that barely passed or barely failed in U.S. state-level referendums are in place over time. I collect data on all referendums whose vote outcome is within 2.5 percentage points of the threshold for passage (typically 50%) since 1900 in a subset of U.S. states. I then do what's called a regression discontinuity design, which allows me to estimate the effect of passing a referendum on whether it is in place later on. 

The headline result from the paper is below. Many referendums that barely fail eventually pass in the first few years or decades afterward, and then this levels off. At 100 years later, just under 80% of the barely passed ones are in place compared to just under 40% of the barely failed ones. Importantly, the hazard rate—the rate at which this effect declines over time—is much lower in the later years, meaning that if you were to extrapolate this out beyond 100 years, the effect at 200 years would be expected to be significantly more than 40% * 40%.![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/84733f2481820aecca493998bd2a9da90e6ab24c2ba1dc32.png)

Something relevant to EAs that I don't focus on in the paper is how to think about the effect of campaigning for a policy given that I focus on the effect of passing one conditional on its being proposed. It turns out there's a method ([Cellini et al. 2010](https://eml.berkeley.edu/~jrothst/publications/cellini-ferreira-rothstein-QJE-2010.pdf)) for backing this out if we assume that the effect of passing a referendum on whether the policy is in place later is the same on your first try is the same as on your *N*th try. Using this method yields an estimate of the effect of running a successful campaign on later policy of around 60% (Appendix Figure D20).

The assumption required for these point estimates to be unbiased is fairly strong, but what should be less controversial is that the effect of campaigning to pass a referendum given that nobody else is pursuing it is much larger than the effect of passing one that has already been proposed. Concretely, my mainline estimate in the above graph tells us what the effect is of pushing an existing referendum over the edge. If the proponents of a referendum plan to try again and again, this lowers the effect. Instead, we might be interested in the effect of Open Philanthropy funding a ballot measure campaign, assuming they never again attempt it. The latter is likely much larger than the effects previously presented.

One thing you might wonder about is whether this happens because some policies are unimportant, so nobody does anything about them. I look at this in a few ways, including subjective judgments of a policy's impact and projections of a policy's fiscal impact. I don't see any differences here. I also look at what happens if we drop policies that arguably became obsolete, and this only makes the effect larger (because such policies are often struck from the books).

When we look across policy topics and policies' political orientation, things look strikingly similar:

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/cc511e6a30e6ec28eb86d432f5fa6fd95599379e7d968dcd.png)

You might also wonder whether there are slippery slope (or backlash) effects where a policy leads to some sort of reaction. I discuss this in the paper (Figure 5 and Appendix Figure D13). There are suggestive signs of this happening to a small degree, though with the important caveat that I only look at effects on the same policy (e.g., does banning battery cages lead to bans of enriched cages) rather than the broader universe of policies (e.g., does banning battery cages lead to other animal welfare policies).  
  
I won't go into depth here on why this is happening, but the story that best fits the data is based on a decline in policies' salience over time. Political actors' interest in a policy goes up and down, and after the period of a referendum passes, people stop thinking about it because of a regression-to-the-mean effect. I don't find evidence that people change their minds in response to a policy or that policies create their own support over time.

As a final piece, I look at legislation and non-U.S. referendums. The samples are much smaller and end earlier, but the pattern is similar to that for U.S. state-level referendums:

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/60b7603264c9f9c22bf3cb0d654aed7688cec70741ef67e2.png)

Notes Particular to the EA Community
====================================

Policy Changes Seem to Matter (Much) Longer than EAs Have Assumed
-----------------------------------------------------------------

As noted in my introduction, EA organizations often have to make assumptions about how long a policy intervention matters in calculating cost-effectiveness. Typically people assume that passing a policy is equivalent to having it in place for around five years more or moving the start date of the policy forward by around five years. These results suggest that this is off by more than an order of magnitude. If you look at my estimates above, the half-life of a policy is about 50 years, but even this is probably not the right statistic to use. Since the hazard rate is much lower after the first few decades, the average number of extra years a policy is in place by virtue of passing is probably at least 100 years. See the implications section of the paper for some discussion of this.

Policies are so persistent that the impacts of policy interventions might depend more on technological reasons why they could become obsolete than political ones (e.g., a policy to solve an x-risk might stop mattering because the risk is resolved otherwise).

Neglectedness Matters
---------------------

One interesting result of the paper is that neglectedness seems is key to whether a policy change matters for a long time. For policies that can be expected to attract more interest after the referendum passes, I see less persistence. It is not a hugely dramatic effect, but it could make a difference on the margin or in extreme cases. This seems to lend some support to the EA practice of paying attention to neglectedness.

Comparing Persistence: Can We Compare Policy to Other Social Changes?
---------------------------------------------------------------------

One of the questions I can imagine people having in this community is whether this favors policy work relative to other work. I think this is pretty unclear because we don't have comparable estimates for, e.g., the longevity of corporate policies or cultural changes. It would be reasonable to take this as an update in favor of policy work to the extent it is more persistence than expected. My best guess would be that culture is less persistent than policy (see, e.g., Table 3 of [Giuliano and Nunn 2021](https://econ.cms.arts.ubc.ca/wp-content/uploads/sites/38/2022/01/nathannunn_Understanding-Cultural.pdf)), and I'd guess similarly for corporate policy (see, e.g., Table 8 of [Flammer 2015](https://www.stern.nyu.edu/sites/default/files/assets/documents/SSRN-id2146282.pdf) and Table VIII of [Cuñat et al. 2012](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fb5724dc4afbed1fce30d6a7ea4c467c8a5614f1)) but have a lot of uncertainty.

[^4sidc99qrzj]: "Throughout this report, I assume that each ballot initiative has a speed-up time of four years." https://docs.google.com/document/d/1p7xqop2FlIF8Kw45za0NnJPwvUA70Mb1UzjijMRKRr8/edit 

[^nk39eu4v7l]: "Our highly uncertain realistic estimate is that through their work, CATF brought regulation on US coal plants forward by 18 months... In summary, we believe that by proposing RED when they did, CfRN at least brought RED forward by a year, and most likely brought it forward by 2 years, though this estimate may be conservative." https://www.founderspledge.com/downloads/fp-climate-change