---
title: "animal welfare has an evidence problem"
author: "matthes"
date: 2026-06-05
url: https://forum.effectivealtruism.org/posts/svjqgyFuFQ34qSgmw/animal-welfare-has-an-evidence-problem
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by what-would-animal-aligned-ai-be-aligned-to.md; epistemic critique of the animal welfare evidence base"
---

Why I stopped donating to animal welfare charities but feel more motivated than ever to redirect money and talent to the cause.

*I have wanted to write this post for a while. It is an uncomfortable thing to bring up. Many people in the animal welfare space are working really hard, and this post might leave some feeling defeated. But I think this is one of the most important things to talk about in animal welfare right now. My intention is not to be a downer or create infighting. Instead, I hope this post inspires lots of people to tackle this major neglected problem.*

key takeaways 
--------------

*   Even some of the most prominent animal welfare interventions have surprisingly weak evidence behind them. In some cases, the available evidence even suggests that the intervention may be causing harm.
*   Specifically
    *   We have very limited data on electrical shrimp stunning that doesn't support a confident conclusion as to whether it's good or bad.
    *   We have mixed evidence on whether transitioning egg producers to cage-free improves welfare overall.
    *   We have evidence that the substitution effect of alternative proteins is weak, at best.
*   Significant additional funding and talent should be allocated to raise the bar for animal welfare interventions by building R&D infrastructure that can rapidly generate high-quality action-relevant research results.
*   This should be the **#1 priority for new animal welfare funding**, ahead of scaling existing work.

introduction
------------

After I completed my fancy computer science PhD at Oxford that was supposed to set me up to work on AI risk, I decided to pivot into animal welfare. 

I was excited to join a field that seemed to have lots of charities executing on interventions that (at least on the surface) appeared to be pretty straightforwardly good. 

However, when I tried to look for high impact projects to support, I was surprised by the lack of good options. 

I found that even the most well known (and well funded) interventions had limited evidence, sometimes pointing in the “wrong” direction.

**In fact, I struggled to find *****any *****evidence-based interventions that I felt comfortable supporting. **

I stopped donating to the cause.

three salient animal welfare interventions and their evidence bases
-------------------------------------------------------------------

In this post I want to use three of the most salient interventions in animal welfare as examples: shrimp stunning, cage-free reforms, and alternative proteins.

All three interventions make intuitive sense, but their evidence bases are limited at best, and at worst suggest the interventions may be causing harm.

There will always be some uncertainty about the exact effects of a particular intervention. It is not always clear how to compare one harm to another. Collecting data in the real world at scale can be difficult.

But with each of these examples, **ask yourself if you would feel comfortable supporting an intervention on humans that had a similar amount/kind of evidence backing its intervention.**

### shrimp stunning and slaughter

One of the most salient EA charities is the Shrimp Welfare Project (SWP). Their most well known programme is the Humane Slaughter Initiative (HSI)[^7qmdigmt7g]. In this programme, SWP provides electrical stunning equipment to Whiteleg shrimp producers for free if they commit to using it on a certain number of shrimp per year, and combine it with ice slurry slaughter. The first commitment was signed in 2023. 

However, at the time, there had only been one study[^w5y2s6gmcao] evaluating the effect of electric shock on Whiteleg shrimp. In this 2018 study, Weineck et al. compared ice slurry (sub 4°C) to in-water electric shock (10s at 120V across 17cm, saltwater) using heart rate data.

The study uses a very small sample size (N = 6 for each intervention) which makes me uncomfortable recommending any action based on it. But below are the key takeaways based on this limited data.

For ice slurry:

*   Immersion in ice slurry caused a rapid and massive drop in heart rate “amplitude” within seconds.
*   Returning shrimp to warm water after 5 minutes allows the regular heart activity to return.
*   When shrimp first hit the ice slurry, they perform sudden full-body contractions (tail flips), but this also happens if you first cut their head off (check the supplementary material for a video).

For electric shock:

*   An electric shock causes the heart to become arrhythmic (they have to turn off the recording equipment during the shock so this is less clear).
*   The shrimp recover their ability to move after 5-10 minutes.
*   Their heart activity never returns to normal, indicating “permanent damage or alteration in the function of the heart”.
*   The electric shock also causes a strong tail flip. 

Based on this data, it is unclear if electric shock followed by ice slurry provides any benefit over ice slurry alone, provided the animals are kept in ice slurry until they are fully dead. (It is unclear how long that would take, though.)

And yet, ice slurry is often regarded as “the bad way” to kill shrimp. In fact, Mercy for Animals has been actively campaigning against ice slurry slaughter[^20k9vejtcd2]. 

As a result of this pressure, all major UK supermarkets have now made commitments to improve shrimp slaughter, with most announcing plans to introduce electrical stunning[^4a4snjas95u].

Many shrimp harvests do not use ice slurry, or do not use it properly (not cold enough, not long enough, etc.). Here[^0sgu7q9eo7n] are some example videos. In those cases, introducing electrical stunning actually has the potential to increase suffering, as the shrimp are likely to wake up and suffer from the shock damage until dying of asphyxiation or from their injuries. (And we don’t really know how long that takes.)

Finally, it is also unclear how the results of the study translate to industrial slaughter machines. Neither the authors of the study nor the manufacturers provide sufficient information on electrical parameters for a fair comparison. Additionally, one of the two stunners distributed - the Optimar machine - is a “dry” stunner that shocks shrimp out-of-water. It is unclear how in-water results would translate. 

In 2021, Tesco and Hilton Seafood published a report[^224uqnbye4g] on their use of a modified Optimar stunner in Vietnam. The results are a bit vaguely presented, but with at least one machine setting “a significant proportion” of shrimp did not “show signs of recovery” within 10 minutes. This gives some reassurance for this particular machine, although I know from talking to people in the field that this machine was a modified version of the commercially available one.

Earlier this year, a preprint[^3y36el942nl] of a second scientific study was released. It is not peer-reviewed yet, but available online. This study is also small (N = 4-6 per intervention) which again leads me to have limited confidence in conclusions. It compares electrical shock (2-3 V/cm for 1-20s, various combinations) followed by cold shock at different temperatures with cold shock alone (various temperatures) and electrical shock alone (various parameters). The authors in this study measured electrical activity at the supraesophageal ganglion (the “brain”) rather than the heart. 

I want to flag that I found parts of the results section hard to parse and sometimes details seemed to contradict each other. But key insights include: 

Electric shock only[^r9uk0a5hm7c]:

*   At lower shock voltage and duration all shrimp recovered coordinated movement as well as their righting reflex within seconds or minutes.
*   At a high shock voltage and duration some animals recovered coordinated movement, but none recovered their righting reflex. Eventually, all animals in this group died within 2 hours.

Ice slurry only[^n20utg3okbr]:

*   Cold ice slurry (-2.5°C - 0°C) led to a fast drop in signal from the neural electrodes. The temporal resolution of the plots is low (1 min interval), but the first post-immersion data point (median over N = 5, after 2 min (?)) at 0°C is already at ~10% of the pre-immersion signal.
*   Slightly warmer water (2.5°C - 5°C) had much worse outcomes. On average, it took 5 minutes for a large drop in neural activity, and for most of the 30 min observation window, median neural activity stayed higher than in the colder group. This means that it’s really important to use a lot of ice and ensure sufficient mixing of the slurry. 

Electric shock followed by ice slurry (0°C)[^cloq71czj9j]:

*   At lower shock voltage and duration, neural activity decreased on average, but sometimes increased. Only 3/6 animals had a 90% drop of neural activity within 30 minutes. Overall, this group had worse outcomes (more neural activity) than 0°C ice slurry alone.
*   At higher shock voltage and duration, neural activity drops below 10% of pre-stun levels within the first 2 min (the first data point) for all (N = 4) shrimp.

Overall, there are only two scientific studies on the topic of using electric shock on Whiteleg shrimp. Both have limited sample sizes. Both show some recovery from electric shock. Both find that immersion in proper ice slurry leads to a rapid drop in vital signs. Neither is representative of industrial stunning machines[^vozbffq9jlp].

**In conclusion, evidence for electrical stunning is extremely limited and we shouldn't feel comfortable recommending anything with confidence.** However, if I was forced to interpret this small data set, I would expect that 

*   A sufficiently strong electrical shock *with proper* ice slurry (which is hard to implement in practice) does not provide much improvement over proper ice slurry alone.
*   Insufficient electrical stunning with proper ice slurry may be worse than ice slurry alone.
*   Electrical stunning *without *proper ice slurry slaughter poses real potential for causing harm. 

*(Disclaimer: One of my main projects at the moment is working on improving shrimp slaughter with electric shock without having to rely on ice slurry. At this point in time, I am still optimistic that this is possible with sufficient R&D. We just can't be confident based on available data. I am hoping to make our findings public later this year. )*

### cage-free

Cage-free advocacy is a huge topic in the EA animal welfare world. Three of the four currently “featured grants” by the EA Animal Welfare Fund are for cage-free reform work[^fo2cj7f0qe6]. 

Coefficient Giving lists cage-free reform (alongside alternative proteins) as one of its four big grantee wins and has given out over $40 million in funds[^97oqop42r1] for it. 

Cages being bad makes some intuitive sense. We also know that chickens will go out of their way to access nesting opportunities. Bare cages deprive chickens of many behaviours, such as perching, dust bathing, and foraging. 

But what do we actually know about what happens when a real-world farm switches from caged to cage-free? 

When the industry argues for cages, they often bring up that mortality is higher in cage-free systems. The most cited source for this is probably a field study conducted by the US Coalition for Sustainable Egg Supply[^sa2c4drwotn].

They compared conventional cages (CC, 6 hens per cage), enriched colony cages (EC, 60 hens per cage), and cage-free aviaries (AV) at a single commercial-scale egg farm in the US. 

Hens in the cage-free system performed the most natural behaviours (flying, perching, dust bathing, foraging) and had stronger leg and wing bones. However, the study also found that cage-free systems had

*   more severe foot lesions
*   more keel abnormalities
*   increased aggression
*   increased mortality

The mortality in cage-free systems was over twice as high as the others: 

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/939d9759bb76b6055e677ed2b785bedf002e61217ae88884.png)

From the Research Results Report Appendix by CSES. A comparison of cumulative mortality.  
CC = conventional cages; EC = furnished/enriched cages; AV = cage-free aviaries

The most common causes of death in the cage-free system were

*   hypocalcemia (low calcium)
*   egg yolk peritonitis (egg yolk ends up in the wrong place in the body and causes inflammation and infection)
*   dehydration
*   vent cannibalism (other hens pecking at the cloaca; much more common in cage-free than caged - 11.5% vs 0.7% relative mortality rate)
*   emaciation
*   rotten (corpse too rotten to assess cause of death)

These aren't sudden, painless deaths. Increased vent pecking itself is also a sign of increased environmental stress. Overall, this suggests that hens in the cage-free systems generally experienced more distress. 

A counterpoint I sometimes hear is that the difference in mortality between caged and cage-free systems disappears as farmers gain experience with cage-free systems. 

For this claim people typically cite a large meta-analysis from 2021[^fbl8nuj495w]. The authors use data from over 6k flocks over 16 countries to argue that “except for conventional cages, mortality gradually drops as experience with each system builds up: since 2000, each year of experience with cage-free aviaries was associated with a 0.35–0.65% average drop in cumulative mortality, with no differences in mortality between caged and cage-free systems in more recent years.”

However, I believe that it is an overstatement to say that there is “no differences in mortality” given the actual data. This is the relevant figure in the meta-analysis:

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/32c680b8d57b01998815e56aa1cd52302e643c54478b1dc6.png)

Time series of cumulative layer mortality rate (standardised to 60 week mortality and double arcsine transformed).

It depicts the FRA_16 data set collected by The French Poultry Technical Institute (ITAVI). 

This data set 

*   covers 15 years (2002 - 2016)
*   is one of the two largest data sets in the meta-analysis in terms of hens included, accounting for about a third (32%) of all the hens in the meta-analysis
*   was collected in the same country with the same methodology
*   includes both caged and cage-free systems (including furnished cages, and free-range)

making it the most important one included in the meta-analysis when assessing trends.

The meta-analysis transformed the raw data for easier comparison with other data sets. This includes an adjustment to account for mortality correlating with age (farms that keep chickens alive for longer will have higher mortality), and a double arcsine square root transformation (not unusual for a meta-analysis). 

Here is the data set, as presented by ITAVI, including data from free-range systems (which together make up the majority of cage-free production in France):

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/f1549ff3b8db7b26a5049152fa33baf1df3872bd9a6635d7.png)

From the 2017 ITAVI report. The vertical axis is in percent.  
pondeuses sol = cage-free (indoor); pondeuses plein air =  free-range; pondeuses label = free-range (premium label); pondeuses biologiques = organic;  anciennes cages = conventional cages; cages aménagées = furnished cages

While it is true that mortality in cage-free systems dropped over the first few years of the data set (indicating that farmers gain experience with the new system),  progress eventually slowed down. Mortality becomes noisy. And while the very last mortality data point for indoor cage-free systems is at an all-time low and close to the one of furnished cages, the overall trend is less clear. Notably, outdoor cage-free systems actually saw an increase in mortality towards the end of the data set. 

What about the other data sets in the study, though? 

The other major contributor is USA_13, accounting for another third (33%) of the total hens included in the meta-analysis[^6ptsrn0bkud]. 

However, USA_13 only covers a single year (2013) so cannot be used to assess trends. 

In this data set (USA\_13), mortality (cumulative at 60 weeks) is indeed statistically indistinguishable from cages. But, despite being the biggest data set overall, USA\_13 doesn't even make it into the top 5 when ranking by number of hens in cage-free systems. 

Let's list all data sets that compare at least one caged system with at least one cage-free system. For each source, I checked each possible pair-wise comparison for statistical significance using z-scores where standard errors were reported. Where errors weren't available, I made a note summarising the difference. 

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/537b3aaa7e644f8c998689098b347e5c17749504812b9828.png)

Data from the supplementary material of the meta-analysis. Cumulative transformed 60w mortality in percent.   
CC = conventional cage; FC = furnished cage; AV = aviary (all types); ST = single tier aviary; MT = multi tier aviary  
orange = evidence for higher mortality in cage-free systems; blue = evidence for higher mortality in caged systems; grey = no significant difference

When there was no significant difference, I highlighted the relevant evidence cell grey. When cage-free systems exhibited higher mortality, I used orange. And when caged systems had higher mortality, I used blue. 

The **majority of relevant data sets showed higher mortality in cage-free systems**. Some found no significant difference. Only one study (STA_16) found that furnished cages had a higher mortality than single tier aviaries.

As a utilitarian, I am open to the idea that a shorter, happier life outweighs a longer, but otherwise worse life (even if it creates demand for more animals in the system). However, given that **chickens don't just drop dead very suddenly, but instead die slowly from violence, disease, and starvation/thirst**, cage-free systems appear more stressful**. **

The Welfare Footprint Institute (WFI) argues the opposite by adding up hours of pain experienced by an average chicken in different systems[^amj1ommyjfo]. With their model, cage-free aviaries have lower pain scores than conventional cages. However, these results are **heavily** dependent on what harms are included, how they are scored, and how different types of pain are weighed. Deprivation of natural behaviours accounts for most of the difference in scores. Chronic **fear and stress from violence is not included. **

Ultimately, **what we need is long-term data on behavioural and physiological indicators of welfare in different systems. **

WFI itself has highlighted a general lack of research in poultry welfare[^l16a6bt157k].

While I expect that the best environment for a chicken does not involve a cage, I do not feel comfortable supporting a blanket push for cage-free reforms, given the currently available data on what happens when farms/countries switch. 

(There is also a lot of talk about keel bone fractures (KBF) being more common in cage-free systems, but I feel quite unsure about the data on both prevalence and severity of KBFs, so decided to leave it out of this post in the end.)

### alternative proteins

Alternative Proteins are one of Coefficient Giving’s most funded animal welfare interventions. A year ago, CG had spent over $34 million total on grants in this space[^97oqop42r1]. 

The idea of alternative proteins is that we could reduce or even end animal farming and fishing by replacing animal products with equivalent alternatives. 

However, we have little evidence for this substitution effect. I recommend Jacob Peacock’s paper on how “price-, taste-, and convenience-competitive plant-based meat would not currently replace meat” for a good summary of this literature[^zrp7ywt28o]. The report is a few years old now, but even then we already had multiple strong studies showing that the availability of equivalent substitutes does not lead to major changes in meat consumption.

~See also this~[^zlmtf6d7q8]~more recent meta-analysis that came to a similar conclusion about alternative proteins and other meat reduction interventions.~ *Edit: See Seth's comment below!*

Unlike the other two examples, alternative proteins are unlikely to cause harm. And it still seems possible that they might help in some circumstances and/or in the long run. But while I would personally love to see more fake meats in my supermarket, I do not think that we can consider it an evidence-based intervention by EA standards. 

this is a field-wide problem
----------------------------

I worry that some people will go away from this post thinking that there are a small number of individuals responsible for these particular examples that need to be identified. 

All three intervention examples I give have been extensively discussed, recommended by charity evaluators, and financed by major funders. 

These are some of **the best interventions the field was able to identify. **

And yet, their evidence bases seem to be very limited and/or contested. 

my recommendations to funders
-----------------------------

### animal welfare should not be de-funded

Another major worry I have about writing this post is that it may result in funding leaving the animal welfare field. I do not believe that this is the correct response. 

In fact, I think that addressing this issue will require a lot of additional resources. We need to build organisations that can rapidly identify and answer action-relevant research questions.

**Many people are currently anticipating a major influx of money into animal welfare. By default, this may lead to funders lowering the bar for funding interventions. Instead, we should be using the money to** ***raise the bar.***

A recent forum post[^6tqkzqyzvfg] by [@Zoë Sigle 🔹](https://forum.effectivealtruism.org/users/zoe-sigle?mention=user)(writing for Senterra Funders) suggests that major funders will allocate additional money by: scaling existing work (~50-60%), testing new interventions (~30-40%), and growing movement infrastructure (~10-20%). 

I am concerned about this allocation plan. We just do not know that much about animal suffering and how to alleviate it. **R&D should be the #1 priority right now, ahead of scaling existing work. **

### we should be taking ownership of the entire evidence pipeline

We (the EA animal welfare community) should be using significant resources to generate useful evidence. But simply funding the broad field of animal welfare science is likely to create scattered research results that are difficult to translate into action. 

We should be involved at every stage of the process. Including

1.  generating actionable research questions
2.  designing experimental plans
3.  conducting the studies
4.  analysing the raw data
5.  interpreting the results of the analysis and translating them into actionable recommendations

I think **entire organisations could and should be founded for this.** Until now, this was simply not possible. Research is expensive and slow, especially at universities. But we're about to have the luxury to aim higher. 

(To be clear, I don't claim that this isn't happening at all right now. There are grants being made to advance our understanding of animal suffering. But we haven't been able to be ambitious enough so far.)

### when bet making doesn't make sense

In the absence of great funding options that can absorb lots of money, it makes sense to take some bets. It may make sense to fund a lot of proposals that only have, say, a 5% chance of working out.

I think that alternative proteins may fall into this bucket. While it doesn’t meet my personal donation bar for an evidence-based intervention, I understand why it has absorbed large amounts of philanthropic money earmarked for animal welfare. It might just eventually work.

But taking such bets is only appropriate if the risk of causing harm is sufficiently small.

I believe that we have not been sufficiently cautious when taking bets that could be causing significant direct harm to animals (beyond just the lost funding that could be spent elsewhere).

conclusion
----------

To me, the evidence problem is the most important thing to work on in animal welfare right now. While I personally stopped donating to existing charities, I am hoping to redirect significant funds and talent to this. 

Please get in touch if you think you might be able to help solve this challenge with talent/funding/ideas/connections.

*I want to thank everyone who listened to me talk about this, including both those who warned me against writing/speaking publicly about it, and those who encouraged me to. Special thanks to everyone who read a draft of this post and gave me feedback.*  
  
*I wrote this post myself, but used various LLMs to critique the draft while iterating.*

*I have a lot more thoughts and concerns on the details of all the studies I mention (and more that I don’t), but tried to keep my discussions somewhat brief to keep this readable. I may write separate posts about them in the future. I am happy to discuss details, but hope that the bulk of the conversation below this post can be about how we solve the evidence problem (rather than discussing the specific examples).*

[^7qmdigmt7g]: https://web.archive.org/web/20260204045354/https://www.shrimpwelfareproject.org/humane-slaughter-initiative https://web.archive.org/web/20260202232305/https://www.shrimpwelfareproject.org/blog/mou-with-mer-seafood  

[^w5y2s6gmcao]: Weineck, Kristin, et al. "Physiological changes as a measure of crustacean welfare under different standardized stunning techniques: Cooling and electroshock." Animals 8.9 (2018): 158. http://dx.doi.org/10.3390/ani8090158  

[^20k9vejtcd2]: https://web.archive.org/web/20240608074244/https://mercyforanimals.org/stoptescocruelty/  

[^4a4snjas95u]: https://www.seafoodsource.com/news/foodservice-retail/with-aldi-s-d-commitment-all-major-uk-supermarkets-have-set-time-bound-shrimp-welfare-standards Tesco: "100% of our farmed Penaeus vannamei are electrically stunned by 2026" (https://www.tescoplc.com/media/4dgphwua/10447v11-en-tesco-farmed-decapod-crustacean-welfare-policy.pdf)M&S: "There are now electrical stunners in place at M&S vannamei farms in Honduras, Vietnam and Thailand with plans for implementation in 2024. The use of electrical stunners will remove the use of ice slurry for warm-water prawns in these locations." (https://corporate.marksandspencer.com/sites/marksandspencer/files/marks-spencer/Aquaculture/MS-Decapod-Welfare-Policy-2024.pdf)Sainsbury's: "In collaboration with shrimp welfare project and our partner supplier, we are trialling electrical stunning with all our fresh and frozen shrimp farmers and collaborating with Stirling University to verify this method at which point we will roll out fully to all our source shrimp farms, estimated end of 2026" (https://corporate.sainsburys.co.uk/sustainability/explore-by-a-z/responsible-sourcing-practices/responsible-seafood-sourcing/)Waitrose: "In 2023 we started working with our supplier and a selection of our supplying farms to trial electrical stunning in our warm water prawns, with support from the Shrimp Welfare Project. From these learnings we will continue to improve the process and roll out to our entire warm water prawn supply chain by the end of 2026.2 (https://www.waitrose.com/ecom/content/sustainability/responsible-sourcing/fish-and-seafood)Co-op: "We also recognise that the most humane method of slaughter for prawns is electrical stunning followed by mechanical killing and whilst this is not yet a standard practice across the global prawn industry, we are actively exploring its implementation. We are collaborating with our suppliers and specialists to identify how electrical stunning can be effectively introduced on prawn farms and in 2025, we will outline a comprehensive roadmap to integrate electrical stunning into our supply chain by 2027. Our goal is to implement this humane method as soon as possible, ideally ahead of schedule." (https://www.coop.co.uk/our-suppliers/farmers/fish)Lidl: "low stress killing methods (electrical stunning) will be implemented by the end of 2026." (https://corporate.lidl.co.uk/sustainability/seafood) 

[^0sgu7q9eo7n]: Some YouTube videos of harvests with no or poor ice slurry:https://www.youtube.com/watch?v=2ZCvuZqTuMchttps://www.youtube.com/watch?v=_fdfZgvJY8M https://www.youtube.com/watch?v=NON35bUFNts  

[^224uqnbye4g]: https://web.archive.org/web/20250106232055/https://www.compassioninfoodbusiness.com/media/7444897/tesco-and-hilton-seafood-case-study-improving-the-welfare-of-whiteleg-shrimp-at-harvest.pdf  

[^3y36el942nl]: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6315379  

[^r9uk0a5hm7c]: Behaviour recovery for shrimp that received an electric shock, only: 

[^n20utg3okbr]: Neural activity for shrimp that were immersed in ice slurry (without electric shock): 

[^cloq71czj9j]: Neural activity for shrimp that were immersed in 0°C ice slurry after electric shock: 

[^vozbffq9jlp]: Additionally, both studies implanted conductive electrodes in the test animals. It is plausible that this significantly affects how current flows through the shrimp's body.I also feel confused about what a signal from an electrode on a heart or a ganglion actually tells us. The plots of the recorded “power” are hard to interpret without a control signal to assess what the noise floor is.  

[^fo2cj7f0qe6]: https://web.archive.org/web/20260427231047/https://funds.effectivealtruism.org/funds/animal-welfare  

[^97oqop42r1]: I came to this number by adding up all grants in the grants database currently available online, using their own categorisation. https://coefficientgiving.org/grant-publishing-process/ I believe that the cage-free number is a (potentially big) underestimate, as many "Broiler Chicken Welfare" grants (which make up $80M) include cage-free work. 

[^sa2c4drwotn]: https://www2.sustainableeggcoalition.org/document_center/download/public/CSESResearchResultsReport.pdfhttps://www2.sustainableeggcoalition.org/document_center/download/final-results/ResearchResultsReportAppendix.pdf 

[^fbl8nuj495w]: Schuck-Paim, C., Negro-Calduch, E. & Alonso, W.J. Laying hen mortality in different indoor housing systems: a meta-analysis of data from commercial farms in 16 countries. Sci Rep 11, 3052 (2021). https://doi.org/10.1038/s41598-021-81868-3  

[^6ptsrn0bkud]:  

[^amj1ommyjfo]: https://welfarefootprint.org/laying-hens/  

[^l16a6bt157k]: https://welfarefootprint.org/2023/07/07/major-gaps-in-poultry-welfare-research/  

[^zrp7ywt28o]: https://rethinkpriorities.org/research-area/price-taste-and-convenience-competitive-plant-based-meat-would-not-currently-replace-meat/  

[^zlmtf6d7q8]: Green, Seth Ariel, Benny Smith, and Maya Mathur. "Meaningfully reducing consumption of meat and animal products is an unsolved problem: A meta-analysis." Appetite (2025): 108233. https://doi.org/10.1016/j.appet.2025.108233  

[^6tqkzqyzvfg]: https://forum.effectivealtruism.org/posts/Zo3uNBiZ5GN35hkfq/the-usd120-million-question-how-will-it-help-animals