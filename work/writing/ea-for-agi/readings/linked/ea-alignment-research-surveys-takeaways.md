---
title: "Key takeaways from our EA and alignment research surveys "
author: "Cameron Berg"
date: 2024-05-03
url: https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ai-frontiers-evidence-for-ai-consciousness; survey of EA/alignment researchers' views, community epistemics snapshot."
---

*Many thanks to Spencer Greenberg, Lucius Caviola, Josh Lewis, John Bargh, Ben Pace, Diogo de Lucena, and Philip Gubbins for their valuable ideas and feedback at each stage of this project—as well as the ~375 EAs + alignment researchers who provided the data that made this project possible.*

Background
----------

Last month, [AE Studio](https://ae.studio/ai-alignment) launched two surveys: [one](https://www.lesswrong.com/posts/LCeGoqZA4KnkyxEHD/survey-for-alignment-researchers) for alignment researchers, and [another](https://forum.effectivealtruism.org/posts/uxofehpkFrzgqqqPj/survey-for-eas-help-us-build-better-models-of-the-community) for the broader EA community. 

We got some surprisingly interesting results, and we're excited to share them here.

We set out to better explore and compare various population-level dynamics within and across both groups. We examined everything from demographics and personality traits to community views on specific EA/alignment-related topics. We took on this project because it seemed to be largely [unexplored](https://www.lesswrong.com/posts/qAdDzcBuDBLexb4fC/the-neglected-approaches-approach-ae-studio-s-alignment#6__Intelligent_field_building_as_an_indirect_alignment_approach_6__) and rife with potentially-very-high-value insights. In this post, we’ll present what we think are the most important findings from this project.

Meanwhile, we’re also sharing and publicly releasing a [tool](https://thealignmentsurvey.com/) we built for analyzing both datasets. The tool has some handy features, including customizable filtering of the datasets, distribution comparisons within and across the datasets, automatic classification/regression experiments, LLM-powered custom queries, and more. We’re excited for the wider community to use the tool to explore these questions further in whatever manner they desire. There are many open questions we haven’t tackled here related to the current psychological and intellectual make-up of both communities that we hope others will leverage the dataset to explore further.

(Note: if you want to see all results, navigate to the [tool](https://thealignmentsurvey.com/), select the analysis type of interest, and click ‘Select All.’ If you have additional questions not covered by the existing analyses, the GPT-4 integration at the bottom of the page should ideally help answer them. The code running the tool and the raw anonymized data are both also [publicly available](https://github.com/agencyenterprise/alignment-survey-dashboard).)

We incentivized participation by offering to donate $40 per eligible[^p7gvohnook] respondent—strong participation in both surveys enabled us to donate over $10,000 to both AI safety orgs as well as a number of [different](https://forum.effectivealtruism.org/posts/iFNemktkcZjRynAkH/diversification-is-underrated) high impact organizations (see here[^orftbjvuxf9] for the exact breakdown across the two surveys). Thanks again to all of those who participated in both surveys!

Three miscellaneous points on the goals and structure of this post before diving in:

1.  Our goal here is to share the most impactful takeaways rather than simply regurgitating every conceivable result. This is largely why we are also releasing the data analysis tool, where anyone interested can explore the dataset and the results at whatever level of detail they please.
2.  This post collectively represents what we at AE found to be the most relevant and interesting findings from these experiments. We sorted the TL;DR below by perceived importance of findings. We are personally excited about pursuing [neglected approaches](https://www.lesswrong.com/posts/qAdDzcBuDBLexb4fC/the-neglected-approaches-approach-ae-studio-s-alignment) to alignment, but we have attempted to be as deliberate as possible throughout this write-up in striking the balance between presenting the results as straightforwardly as possible and sharing our views about implications of certain results where we thought it was appropriate. 
3.  This project was descriptive and exploratory in nature. Our goal was to cast a wide psychometric net in order to get a broad sense of the psychological and intellectual make-up of both communities. We used standard frequentist statistical analyses to probe for significance where appropriate, but we definitely still think it is important for ourselves and others to perform follow-up experiments to those presented here with a more [tightly controlled](https://en.wikipedia.org/wiki/Multiple_comparisons_problem#Large-scale_multiple_testing) scope to replicate and further sharpen the key results we present here.

Seven key results and implications
----------------------------------

Here we present each key result, ordered by perceived relevance, as well as what we think are the fundamental implications of that result. We hyperlink each result to the associated sections in this post for easier navigation. 

(Please note that there are also a bunch of [miscellaneous results](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Appendix__other_interesting_miscellaneous_findings__in_no_particular_order_) that people have found interesting that are not included in this list or in the main body of the piece.) 

1.  **Alignment researchers don't think the field is poised to solve alignment**
    1.  **Result:** Alignment researchers generally [do not believe](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_community) that current alignment research is on track to solve alignment and [do not think](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_community) that current research agendas exhibit strong coverage of the full space of plausible alignment approaches. However, alignment researchers did prove [impressively accurate](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_community) at predicting the research community’s overall views on the relative promise of various technical alignment research directions (as systematized by [Shallow review of live agendas in alignment & safety](https://www.lesswrong.com/posts/zaaGsFBeDTpCsYHef/shallow-review-of-live-agendas-in-alignment-and-safety)).
    2.  **Implications:** Alignment researchers’ general models of the field are well-calibrated, but the fact that they don’t think the field is on track to solve alignment suggests that additional approaches should be pursued beyond what is currently being undertaken—a view which was also echoed continuously throughout alignment researchers’ [free responses](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Free_responses_from_alignment_survey). We think this results lends additional credence to pursuing [neglected approaches](https://www.lesswrong.com/posts/qAdDzcBuDBLexb4fC/the-neglected-approaches-approach-ae-studio-s-alignment) to alignment. 
2.  **Capabilities and alignment research not viewed as mutually exclusive**
    1.  **Result:** Alignment researchers [generally *disagree*](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_community1) with statements like ‘alignment research that has some probability of advancing capabilities should not be done’ and ‘advancing AI capabilities and doing alignment research are mutually exclusive goals.’ Interestingly, researchers also erroneously predicted that the community *would* generally view safety and capabilities work as incompatible. 
    2.  **Implications:** This finding merits a more precise follow-up and discussion to better understand what exactly alignment researchers believe the relationship is and ideally should be between AI alignment and capabilities research—especially given that [roughly two-thirds](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_researchers_support_a_pause) of alignment researchers also seem to support pausing or slowing AI development. Our general interpretation of this cluster of findings is that alignment researchers believe that capabilities research is proceeding so quickly and aggressively that the probability of alignment research being a meaningful contributor to further capabilities speed-ups is actually low—despite *mispredicting* that other alignment researchers would view this probability as higher. This alignment-versus-capabilities position is potentially quite action-guiding for policy efforts as well as technical alignment work. 
3.  **Overestimating the perceived value of intelligence, underestimating 'softer' skills**
    1.  **Result:** We find in both the EA and alignment communities—but more dramatically in the EA sample—that respondents [significantly overestimate](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EA_community1) (e.g., by a factor of ~2.5 for EAs) how much high intelligence is actually valued in the community. EAs also tend to underestimate how much the community actually values ‘softer’ skills like having a strong work ethic, ability to collaborate, and people skills. 
    2.  **Implications:** Those in charge of hiring/funding/bringing people into these communities should consider (at least as a datapoint) what skills and traits are actually most valued within that community. They should probably treat high intelligence as something more like a necessary-but-not-unilaterally-sufficient trait rather than the ultimate criterion. We agree that [softer skills](https://80000hours.org/articles/skills-most-employable/) like a strong [work ethic](https://www.lesswrong.com/posts/ZGzDNfNCXzfx6hYAH/how-to-learn-soft-skills) and a strong ability to [collaborate](https://www.lesswrong.com/posts/mwQZ6qsGXqwiZ6Zvy/how-my-social-skills-went-from-horrible-to-mediocre) can render highly intelligent individuals dramatically more effective at driving results[^9w7c5cx5y3t].
4.  **EAs have lukewarm views about longtermism**
    1.  **Result:** EAs (actively involved across 10+ cause areas) generally seem to think that AI risk and x-risk are [less promising cause areas](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EA_community) than ones like global health and development and animal welfare—despite the EA community’s own strong predictions that EAs would consider AI risk and x-risk to be the most promising cause areas. EAs also predicted the EA community would view its own shift towards longtermism positively, but the community’s [actual views](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EA_community1) on its own longtermist shift skew slightly negatively.
    2.  **Implications:** It is important to caveat this finding with the fact that, overall, EAs still view AI risk and x-risk as promising in an absolute sense, despite seeming to consider more ‘classic’ EA cause areas as relatively more promising overall. We think this result merits follow-up and independent replication and invites further discussion within the EA community about the [optimal](https://forum.effectivealtruism.org/posts/iFNemktkcZjRynAkH/diversification-is-underrated) [allocation](https://forum.effectivealtruism.org/posts/DdSszj5NXk45MhQoq/decision-making-and-decentralisation-in-ea) of time, resources, attention, etc. between classic cause areas and longtermist ones.
5.  **Alignment researchers think AGI >5 years away**
    1.  **Result:** Alignment researchers generally [do not expect](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_community1) there to be AGI within the next five years—but erroneously predict that the alignment research community *does* generally expect this. 
    2.  **Implications:** Perceived timelines will naturally calibrate the speed and intensity of research being undertaken. If most AI safety researchers think they have >5 years to attempt to solve alignment, it might be worth funding and pursuing additional ‘expedited’ research agendas in the chance that AGI [comes](https://www.business-standard.com/technology/tech-news/elon-musk-says-ai-will-gain-general-intelligence-outsmart-humans-by-2025-124040900177_1.html) [sooner](https://news.ycombinator.com/item?id=38978418) than this. 
6.  **Moral foundations of EAs and alignment researchers**
    1.  **Result:** EAs and alignment researchers have reasonably distinct [moral foundations](https://bpspsychub.onlinelibrary.wiley.com/doi/epdf/10.1111/bjso.12452). We tested a [model](https://bpspsychub.onlinelibrary.wiley.com/doi/epdf/10.1111/bjso.12452) of moral foundations that uses three factors: traditionalism, compassion, and liberty. While [both communities](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EAs_and_alignment_researchers_have_significantly_different_moral_foundations) place low value in traditionalism, EAs seem to value compassion significantly more than alignment researchers. By contrast, both communities are fairly normally distributed in valuing liberty, but alignment researchers tend to skew *towards* liberty and EAs tend to skew *away* from it.
    2.  **Implications:** EAs may be more receptive to work with more straightforwardly humanitarian outcomes than alignment researchers (as is indeed demonstrated elsewhere in our results). In general, the generally-normally-distributed nature of both populations on the moral foundation of liberty suggests that this value is either considered orthogonal[^v9uw39bg2x] to these communities' guiding philosophies (which seems less likely to us) or otherwise underexplored in relation to them (which seems more likely to us).
7.  **Personality traits and demographics of EAs and alignment researchers**
    1.  **Result:** Both EAs and alignment researchers score [significantly higher](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Personality_similarities_and_differences) than the general population in neuroticism, openness, conscientiousness, extraversion (ordered here by the magnitude of the delta). EAs score significantly higher than alignment researchers in both agreeableness and conscientiousness. [Males outnumber females](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Who_took_these_surveys_) 2 to 1 in EA and 9 to 1 in alignment. [Both communities](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Who_took_these_surveys_) lean left politically and exhibit a diversity of other (albeit nonconservative) political views, but EAs appear to be significantly more progressive overall. 
    2.  **Implications:** Both communities’ heightened sensitivity to negative emotion and [risk aversion](https://lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EAs_and_alignment_researchers_aren_t_huge_risk_takers) may be part of what motivates interest in the causes associated with EA/alignment—but these traits may also prevent bold and potentially risky work from being pursued where it might be necessary to do so. Alignment researchers should also probably put explicit effort into recruiting highly qualified female researchers, especially given that current female alignment researchers generally do seem to have [meaningfully different](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Gender_differences_in_alignment) views on foundational questions about alignment. 

Survey contents and motivation
------------------------------

We launched two surveys: one for technical alignment researchers, and another for EA community members (who are explicitly not involved in technical alignment efforts). Both surveys largely shared the same structure. 

First, we asked for general demographic information, including the extent to which the respondent has engaged with the associated community, as well as the nature of the role they currently play in their community. 

Next, we had respondents answer a series of Likert scale questions from a set of well-validated psychometric scales, including the [Five Factor Model](https://en.wikipedia.org/wiki/Big_Five_personality_traits) (‘Big Five’), an [updated version](https://bpspsychub.onlinelibrary.wiley.com/doi/epdf/10.1111/bjso.12452) of the [Moral Foundations](https://en.wikipedia.org/wiki/Moral_foundations_theory) Questionnaire (MFQ), and a number of other miscellaneous scales (probing things like [risk-taking](https://sjdm.org/dmidi/General_Risk_Propensity_Scale.html), [delay discounting](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6701266/), [self-control](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7261631/), and [communal orientation](https://pubmed.ncbi.nlm.nih.gov/3612495/)). We included these questions because we think it is important to better understand the dominant cognitive and behavioral traits at play in the EA/alignment communities, especially with an eye towards how these mechanisms might help uncover what otherwise-promising research directions are currently being neglected. 

In the final part of each survey, we asked people to respond on five-point Likert scales (strongly disagree, somewhat disagree, …, strongly agree) to statements related to specific topics in EA/alignment. These items were first framed in the general form ‘I think X’ (e.g., *I think that effective altruism is a force for good in the world*) and subsequently framed in the general form ‘I think the community believes X’ (e.g., *I think the EA community as a whole believes that effective altruism is a force for good in the world*). 

Our motivation in this final section was two-fold: (1) we can straightforwardly understand the distribution of both communities’ views on a given relevant topic, but also (2) we can compare this ground truth distribution against individuals’ *predictions* of the community’s views in order to probe for [false-consensus-effect](https://en.wikipedia.org/wiki/False_consensus_effect)-style results. Interestingly, we indeed found that both communities [significantly mispredict](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Community_views_on_specific_topics__ground_truth_vs__predictions_) their own views on key questions.

Who took these surveys?
-----------------------

Approximately 250 EAs and 125 alignment researchers. We recruited virtually all of these participants by simply posting on [LW](https://www.lesswrong.com/posts/LCeGoqZA4KnkyxEHD/survey-for-alignment-researchers) and the [EA Forum](https://forum.effectivealtruism.org/posts/uxofehpkFrzgqqqPj/survey-for-eas-help-us-build-better-models-of-the-community), where we asked each community to fill out their associated survey via a simple Google Form.

We found that each sample includes people working across a wide diversity of research orgs and cause areas at varying levels of seniority. For instance, 18% of the alignment sample self-identifies as actively leading or helping to lead an alignment org, and significant numbers of EAs were sampled from virtually every cause area we listed (see plots below). 

Here is the full list of the alignment orgs who had at least one researcher complete the survey (and who also elected to share what org they are working for): OpenAI, Meta, Anthropic, FHI, CMU, Redwood Research, Dalhousie University, AI Safety Camp, Astera Institute, Atlas Computing Institute, Model Evaluation and Threat Research (METR, formerly ARC Evals), Apart Research, Astra Fellowship, AI Standards Lab, Confirm Solutions Inc., PAISRI, MATS, FOCAL, EffiSciences, FAR AI, aintelope, Constellation, Causal Incentives Working Group, Formalizing Boundaries, AISC. 

![](https://lh7-us.googleusercontent.com/3lb-9LixMKgaZotIHpMzrNwPz8IJU0yaG_6WEq_NdZvR9AhPrEZA8OhM1Vd1JaH8kUR3S_cjxU5l_D5bt6fHH_6p6ODMZbUhfkuO3SCaOSr85RejAVsx1Q7xdS6jU_kBEoaYk_jZxiwnmdYF06iyt4I)

The alignment community sample is mainly under 30 and 84% male...

![](https://lh7-us.googleusercontent.com/OfquMAYri6C1uEsyHWBfzRCoIuFexUPDwsEDUqqGzfDQYNpin18nvPTDl3nL9rFN_OUBV2nctHObzhW99oM0YSZKeV8zKQYnnMCdN2UCLfcOUw44BOJmyHFEwmrprMbR5GJP9fsTIngbsWq2GuJswmc)

...while the EA community sample is mainly over 30 and 60% male.

Of note, the majority of alignment researchers are under 30, while the majority of EAs are over 30. Males outnumber females approximately 2 to 1 in EA—but almost 9 to 1 in alignment. While this gender distribution is [not unfamiliar](https://www.zippia.com/engineer-jobs/demographics/) in engineering spaces, it certainly seems worth explicitly highlighting, especially to the degree that male and female alignment researchers do seem to exhibit [meaningfully different](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Gender_differences_in_alignment) views about the core aims of alignment research (including, critically, the very question of whether alignment research explicitly requires an engineering-style background). 

![](https://lh7-us.googleusercontent.com/vr51pp7SLk-04kcOf0brjCJAJ8zeWIUn3BhjmHGYXbnUQdP_b3FkSHL7S29DWU9gCQMcWE50xcBQESZ378YCrPAaUI2-FbXyiVyRd0vdCerfiLeOaw6Mf21_896AXBdxpAbfd5LCrafYTpkcgnWDaO8)

Distribution of political views in EA and alignment communities

Overall, we find that approximately 55% of alignment researchers identify as politically progressive to some extent, while approximately 80% of EAs identify in the same way. While there appear to be a negligible number of self-identified conservatives in either community (n=4 in alignment, n=2 in EA), there do appear to be a diversity of other political views at play in both samples (including a significant number of highly unique written-in affiliations/leanings across both samples that we somewhat crudely lumped under ‘Other’). It is worth noting that the lack of self-identified conservatives could fuel similar problems as has been [well-documented](https://nationalaffairs.com/publications/detail/the-disappearing-conservative-professor) in academia, especially to the degree that policy advocacy is becoming an increasingly prominent cause area of both communities.

![](https://lh7-us.googleusercontent.com/LtZeFOvhkABJWTn6mphUHiF1ZWNnYiXgc2x6KvEgfEf3Hs66gCnE90Tx3IkDoW8NQovO8wkibWWXlIYNPOYhom9TqZ21byPPgvBrSCMuv_aDkGhsr0EEoM5L2NWstL1mvJTGo0nwq4pSUscCMZD_u58)

Left column: alignment community. Right column: EA community.

Roughly 65% of EA respondents and 40% of alignment researchers have been involved in the space for 2 or more years. EA respondents demonstrate significant diversity in the cause area in which they are actively involved, and the alignment dataset is shown to include researchers at various stages of their careers, including a significant sample of researchers who are actively leading alignment organizations. 

(As with each part of this write-up, there are numerous [additional results](https://thealignmentsurvey.com/) in this section to explore that are not explicitly called out here. We also want to call out that we generally opted to keep both samples intact in subsequent analyses and found that adopting additional exclusion criteria for either population does not statistically affect the key results reported here; the community can easily further filter either dataset however they see fit using the [data analysis tool](https://thealignmentsurvey.com/).)

Community views on specific topics (ground truth vs. predictions)
-----------------------------------------------------------------

We asked each community to rate the extent to which they agreed with a number of specific claims in the general form, ‘I think X’ (e.g., *I think EA is a force for good in the world*). Later on, we asked respondents to predict how their community in general would respond to these same questions in the general form, ‘I think the EA/alignment community as a whole believes X’ (e.g., *I think the EA community as a whole believes that EA is a force for good in the world*). In this way, we position ourselves to be able to address two important questions simultaneously:

1.  What do the ground truth distributions of views on specific field-level topics look like within the EA and alignment communities?
2.  How do these ground truth distributions compare to the community’s prediction of these distributions? In slightly less statistical language—*how well does each community actually know itself?*

### Cause area prioritization (ground truth vs. predictions)

We asked each community to rate the extent to which they considered a large number of relevant cause areas/research directions to be promising—and proceeded to compare these distributions to each community’s predictions of how others would respond in general.

**EA community**

For the sake of demonstrating this section’s key results as clearly as possible, we translate each available Likert scale option to a number of ‘points’ (‘very unpromising’ = -2, ‘somewhat unpromising’ = -1, …, ‘very promising’ = +2) and proceed to tally the total actual and predicted points allotted to each cause area/research direction. Presented with the [core topics](https://forum.effectivealtruism.org/topics) of effective altruism, here is how the EA community sample’s ground truth and predicted point allotments look:

![](https://lh7-us.googleusercontent.com/xD0kPuChaX-Ogg4mjpDcDzARfXRpNJ9Dh7vc_ceO101-R7DlUopOGo0M2t7GLebzvFZD0jAmh26G7YiVQKa6TNn7tqH1bnkpdzA2ct_u4vPBDgI34ymjLg0mnmizzYjcErkKrkZLTM0yjZHZiV0i8cg)

(To see the full distributions for each cause area rather than this points-based simplification: navigate to the [analysis tool](https://thealignmentsurvey.com/), select the EA dataset, select 'Miscellaneous plots', and then select 'Distribution of individual views' for the ground truth distributions and 'Distribution of community views' for the predicted distributions.)

We find that EAs generally believe that global health and development, farmed/wild animal welfare, and cause prioritization/effective giving are the most promising cause areas—but EAs *themselves* *thought* that EAs would consider AI risk and general existential risk are most promising (predicted mean = 4.43, actual mean = 3.84; U = 14264, p ≈ 0). The magnitude of the misprediction here—particularly with respect to AI risk—was quite surprising to us (potentially by definition, given the nature of the result). To be clear, most EAs do think AI risk is ‘somewhat promising,’ but overwhelmingly predicted the community would consider AI risk ‘very promising.’ EAs’ generally lukewarm feelings towards longtermist causes are demonstrated in a [few](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EA_community1) [places](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EAs_are_almost_perfectly_normally_distributed_on_some_key_EA_questions) in our results.

Interestingly, the causes that [currently receive the most funding](https://forum.effectivealtruism.org/posts/btTeBHKGkmRyD5sFK/open-phil-should-allocate-most-neartermist-funding-to-animal?commentId=sJaZbGHLmjevZWBtg) align more closely with the EA community’s predictions rather than the ground-truth distributions. It seems this [misalignment](https://forum.effectivealtruism.org/posts/orhjaZ3AJMHzDzckZ/results-from-an-adversarial-collaboration-on-ai-risk-fri) may therefore be more straightforwardly understood as key funders like [Open Philanthropy](https://www.openphilanthropy.org/research/our-progress-in-2023-and-plans-for-2024/#id-revising-our-priorities)viewing x-risk as significantly more important than the general EA community, and EAs reflecting this preference in their perceptions of the community writ large. 

(We personally consider it important to note here that we certainly don’t think funding alignment should be deprioritized, and that AI-related risks clearly qualify as essential to address under the [ITN](https://forum.effectivealtruism.org/topics/itn-framework) framework. We are excited that Open Phil plans to [double](https://www.openphilanthropy.org/research/our-progress-in-2023-and-plans-for-2024/#id-revising-our-priorities) its Global Catastrophic Risk (GCR) funding over the next few years. We ourselves wish that orders of magnitude [more AI safety orgs](https://www.lesswrong.com/posts/MhudbfBNQcMxBBvj8/there-should-be-more-ai-safety-orgs), individual researchers, and [for-profit AI-safety-driven businesses](https://www.lesswrong.com/posts/qAdDzcBuDBLexb4fC/the-neglected-approaches-approach-ae-studio-s-alignment#7__Facilitate_the_development_of_explicitly_safety_focused_businesses) were being funded—and we suspect far more *will* be funded as AI development accelerates and the mainstream comes to care far more about making sure AI is built safely.[^92wmdom25z]) 

**Alignment community**

By contrast, the alignment community proved impressively accurate at predicting their own views on the relative promise of various alignment research directions as captured by the rough factor structure presented in [Shallow review of live agendas in alignment & safety](https://www.lesswrong.com/posts/zaaGsFBeDTpCsYHef/shallow-review-of-live-agendas-in-alignment-and-safety):

![](https://lh7-us.googleusercontent.com/Ix5BuxXuV2gm5_HKalfAcK-Jt9NWIAopCjnr3ZsrW8zL4Kg_orESZmr7-6trij6NZXLqHf4wTGxTrMDKes-fjwdpjlmWkYXYkefV717Y3nGyfzhQ_aOZlEzdMSb7rVSgaw7qXkCHefITXlv1JqiblXI)

See directions above (simply replace EA with Alignment dataset) for [viewing](https://thealignmentsurvey.com/) the full distributions for each alignment research bucket.

This result indicates that alignment researchers are most excited about evals and interpretability work, followed by various prosaic alignment approaches (eliminating deception, finetuning/model edits, goal robustness, etc.), are relatively less excited about ‘make the AI solve it’ approaches (the most prominent example being [superalignment](https://www.lesswrong.com/posts/NSZhadmoYdjRKNq6X/openai-launches-superalignment-taskforce)), and are even *less* excited about more theoretical approaches, including provably safe architectures, corrigibility, and the like. This result also clearly demonstrates that alignment researchers are well-calibrated in understanding that the community has this general prioritization.

As an organization that is particularly interested in pursuing [neglected approaches](https://www.lesswrong.com/posts/qAdDzcBuDBLexb4fC/the-neglected-approaches-approach-ae-studio-s-alignment) (which would likely all fall into the unpopular ‘theory work’ bin), we certainly think it is worth cautioning (as many others did in free response questions) that this result only tells us what the idiosyncratic set of current alignment researchers think about what should be pursued within the general constraints of the [Shallow review](https://www.lesswrong.com/posts/zaaGsFBeDTpCsYHef/shallow-review-of-live-agendas-in-alignment-and-safety) framework. We do not think it is valid to conclude from results like this that people should stop doing theory work and all become mechanistic interpretability researchers. 

The prioritization here should also be tempered with the parallel findings that alignment researchers generally think (1) that current alignment research (i.e., everything encompassed by the [Shallow review](https://www.lesswrong.com/posts/zaaGsFBeDTpCsYHef/shallow-review-of-live-agendas-in-alignment-and-safety) framework) is not on track to solve alignment before we get AGI, and (2) that the current research landscape does not demonstrate strong coverage of the space of plausible approaches:

![](https://lh7-us.googleusercontent.com/2qgsX5tu6zafw41FR0SKZHKM2h-JqpIciKZ2mwbv_8b0jQTAHsSqJRUO_CzIQfwywMsWfFTsT4QObNOq_JE8ustqUQc9goLa6KqJNkIXoYPDnLHnzYhpdC_8QIaFhjQKggH9XZ4Pl7Gy711BlYjHfro)

![](https://lh7-us.googleusercontent.com/eeeDAKe4REDoxvU9J_90EHsOLoUhlK32MEFl459UJ2_2TZFdMPz6dVsECJztiqZ2Ar8UylQePKFFDyP7Kemi9-gL9qRqkWxuWgjksiAuPrpf7wpml42IA2r6ISmqtIZnCxJZ3xce7aeJHg00rTgNyRQ)

Taken together, these results reinforce to us that additional neglected approaches to alignment are very much worth identifying and pursuing. We suspect that alignment researchers are most excited about evals and interpretability work because they feel they can make more direct, tangible, measurable, and prestigious[^hpf19ziuosl] progress in them in the short-term—but that these approaches appear to be something of a local optimum in the current research landscape rather than the global best strategy that will solve alignment.

### Other interesting field-level distributions (ground truth vs. predictions)

In addition to cause/research area prioritization, we asked both communities to share the extent to which they agreed with a number of claims specific to their respective communities. All of these distributions are available [here](https://alignment-survey-dashboard.streamlit.app/); in this section, we will only highlight and comment on what we think are the most relevant couple of results for each community.

**EA community**

Dovetailing with the [earlier EA cause area](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EA_community) finding, we also find that EAs are fairly heterogeneous with a slight negative skew towards the related claims that longtermist causes should be the primary focus of EA and that EA’s shift towards longtermism was positive (for both, only ~25% agree to some extent)—but the community predicted a strongly positive skew (for both, that >40% would agree to some extent).   
 

![](https://lh7-us.googleusercontent.com/83ohNhIWAq-3V48TUmcjAZOCfhhfESLKhw9tsqyOFcWfr5mbadIxfWsLP9rc6Ypn_VnFki7X-3XRrvBWPRc8PeAZJpooHVeX5rcoblPWZ00vNQUrgdA1BOedce7Qx6uXkEcnjq2rsEqfN27xTYasOYA)

We also find in both datasets—but most dramatically in the EA community sample, plotted below—that respondents vastly overestimate (≈2.5x) how much high intelligence is actually valued, and underestimate other cognitive features like having strong work ethics, abilities to collaborate, and people skills. One potentially clear interpretation of this finding is that EAs/alignment researchers actually believe that high intelligence is necessary but not sufficient for being impactful—but perceive other EAs/alignment researchers as thinking high intelligence *is* basically sufficient. The community aligning on these questions seems of very high practical importance for hiring/grantmaking criteria and decision-making.

![](https://lh7-us.googleusercontent.com/M6Znt7yxxdU46BHR6QNDELWH_qlgPd6bXpN-aYT-CIUaZzoh8zJEyx4JOa3CCBCZlOGiDCGbr1PBu3NUqK4WZ1egqmtqQZmBaMQy5cqZcZFzvFfOjBNEagwyW9nrloWMbSsS6lOxC2MMxmfSrqtmosU)

Ground truth vs. predictions of EA community views on the single quality that renders a person most effective/impactful.

Finally—and not entirely unrelatedly—we highlight the finding that EAs have diverse views on the most important areas for upskilling (options pulled directly from [80000 Hours’ skills list](https://80000hours.org/skills/)). While generally well-calibrated, the community appears to overestimate the predicted value of upskilling in ‘harder’ skills like research and coding, while underestimating the predicted value of ‘softer’ skills like communicating ideas and being good with people. Overall, EAs think (and predict correctly) that gaining expertise relevant to a top problem is the most valuable area to upskill.

![](https://lh7-us.googleusercontent.com/xgFsgTc8weTTuGX0JMkvBx1z54H7-QC_MaEcAjS9z8g4OPe1WBn_k_JgjlSjLzwxtr-u-hi0aslnTR9BGiYZdZtFdC8l4DaOlkPwtK8RWFHznSNJabx1hlBcNSCIZ4jFWmfpgkmwRwyd5LLi6C82JrQ)

**Alignment community**

We asked alignment researchers multiple questions to evaluate the extent to which they generally view capabilities research and alignment research as compatible.[^g5gfo3wjtee] Interestingly, researchers predicted that the community would view progress in capabilities and alignment as fundamentally incompatible, but the community actually skews fairly strongly in the opposite direction—ie, towards thinking that capabilities and alignment are decidedly not mutually exclusive. As described earlier, our general interpretation of this cluster of findings is that alignment researchers believe that capabilities research is proceeding so hastily that the probability of alignment research being a meaningful contributor to further capabilities speed-ups is actually low—despite *mispredicting* that other alignment researchers would view this probability as higher. 

We find this mismatch particularly interesting for our own alignment agenda and intend to follow up on the implications of this specific development in later work. 

![](https://lh7-us.googleusercontent.com/AIhXxHD7Tm9hetQJSBPw9GNklS-rSRdubq-CrzkuzFsQCezeuGNz4wT1_mvt7kay1aYb8POd_vqqOJMWHx44YPXX6KHA8nmk2XlV5mAsXe4wBwrpFVXAQAeZg7nyjR2WY1DMW92E8y6spEowny1NZyA)

Full text of left item: 'Alignment research that has some probability of also advancing capabilities should not be done.' Full text of right item: "Advancing AI capabilities and doing alignment research are mutually exclusive goals."

Another relevant misprediction of note relates to AGI timelines. Most alignment researchers do not actively expect there to be AGI in the next five years—but incorrectly predict that other alignment researchers *do* expect this in general. In other words, this distribution’s skew was systematically mispredicted. Similar distributions can be seen for the related item, ‘I expect there will be superintelligent AI in the next five years.’

![](https://lh7-us.googleusercontent.com/NWOI2kdxm5zrjhQVQVkdBQwT1eGQ_V-ExR3GzUeF8W3xj-0eMVLrK1DHD_y7tGkgjz8hbHY0jWLrVaGTfgT66YyRTgwEZ6uoNLSi8QedAgq3WgehtSZft3qzP1XiVmStqC2LtWYHBXEhKCVZe_Api-o)  
 

Finally, we share here that the majority of alignment researchers (>55%) agree to some extent that alignment should be a more multidisciplinary field, despite community expectations of a more lukewarm response to this question. 

![](https://lh7-us.googleusercontent.com/hxAJwCDAWm7nNw27IZJhzeJ-ZjzAw_xSzbiw7kLz-Gf25vn4x76LiBc0iv___IZ2N_-OYTK3AQn0EFTX8KkooS7odc4B1dZNa8cQztussYB-jGxon8pQ46S7ib-cAH6wZDss_e1NjnaSVTS_AIoQnAc)

  
Personality, values, moral foundations
-----------------------------------------

### Background on the Big Five

There are many different [models](https://www.lesswrong.com/posts/gvNnE6Th594kfdB3z/on-green) of personality (≈ ‘broad patterns of behavior and cognition over time’). The Five Factor Model, or ‘[Big Five](https://en.wikipedia.org/wiki/Big_Five_personality_traits),’ is widely considered to be the most scientifically rigorous personality model (though it certainly isn’t without its own [criticisms](https://pubmed.ncbi.nlm.nih.gov/1635046/)). It was [developed](https://en.wikipedia.org/wiki/Big_Five_personality_traits#History) by performing factor analyses on participants’ ratings over thousands of self-descriptions, and has been generally replicated [cross-culturally](https://journals.sagepub.com/doi/abs/10.1177/0022022106297299) and [over time](https://psycnet.apa.org/record/2003-01140-014). Big Five scores for a given individual are also demonstrated to remain [fairly consistent](https://www.sciencedirect.com/science/article/abs/pii/S0165176511004666) over the lifespan. For these reasons, we used this model to measure personality traits in both the EA and the alignment samples.

(We show [later on](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Using_temperament_to_predict_alignment_positions) that Big Five + Moral Foundations scores can be used to predict alignment-specific views of researchers significantly above chance level, demonstrating that these tools are picking up on some predictive signal.)

The five factors/traits are as follows:

1.  **Openness**: Creativity and willingness to explore new experiences. Lower scores indicate a preference for routine and tradition, while higher scores denote a readiness to engage with new ideas and experiences.
2.  **Conscientiousness**: Organization, thoroughness, and responsibility. Individuals with lower scores might tend towards spontaneity and flexibility, whereas those with higher scores demonstrate meticulousness and reliability.
3.  **Extraversion**: Outgoingness, energy, and sociability. Lower scores are characteristic of introverted, reflective, and reserved individuals, while higher scores are indicative of sociability, enthusiasm, and assertiveness.
4.  **Agreeableness**: Cooperativeness, compassion, and friendliness. Lower scores may suggest a more competitive or skeptical approach to social interactions, whereas higher scores reflect a predisposition towards empathy and cooperation.
5.  **Neuroticism**: Tendency and sensitivity towards negative emotionality. Lower scores suggest emotional stability and resilience, whereas higher scores indicate a greater susceptibility to stress and mood swings.

### Personality similarities and differences

In general, the results of the Big Five assessment we administered indicate that both EAs and alignment researchers tend to be fairly extraverted, moderately neurotic, intellectually open-minded, generally industrious, and generally quite compassionate. Compared to the [general population](https://www.nature.com/articles/s41598-023-34504-1), both EAs and alignment researchers are significantly more extraverted, conscientious, neurotic, and open. Only EAs are significantly more agreeable than the general population—alignment researchers score slightly lower in agreeableness than the general population mean (but not significantly so).

This result is [not the first](https://forum.effectivealtruism.org/posts/7f3sq7ZHcRsaBBeMD/what-psychological-traits-predict-interest-in-effective) to demonstrate that the psychological combination of intellectualism (≈ openness), competence (≈ conscientiousness), and compassion (≈ agreeableness) corresponds intuitively to the core philosophies of effective altruism/AI alignment. 

It is also somewhat unsurprising that two key differentiators between both communities and the general population appear to be (1) significantly higher sensitivity to negative emotion and (2) significantly higher openness. It seems clear that individuals attracted to EA/alignment are particularly calibrated towards avoidance of negative long-term outcomes, which seems to be reflected not only in both communities’ higher neuroticism scores, but also in our measurements of [fairly tepid](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#EAs_and_alignment_researchers_aren_t_huge_risk_takers) attitudes towards risk-taking in general (particularly in the alignment community). Additionally, higher openness should certainly be expected in communities organized around ideas, rationality, and intellectual exchange. However, it also seems likely that EAs and alignment researchers may score significantly higher in *intellect* (often described as ‘truth-oriented’)—one of the two [aspects](https://pubmed.ncbi.nlm.nih.gov/17983306/)/constituent factors of trait openness—than *openness to experience* (often described as ‘beauty-oriented’). Pinning down this asymmetry more precisely seems like one interesting direction for follow-up work.

Though it was out of scope for this report, we are also excited about better understanding the extent to which there might be ‘neglected’ personalities in both EA and alignment—i.e., whether there are certain trait configurations that are typically associated with research/organizational success that are currently underrepresented in either community. To give one example hypothesis, it may be the case that consistently deprioritizing openness to experience (beauty-orientedness) in favor of intellect (truth-orientedness) may lead to organizational and research environments that prevent the most effective and resonant possible creative/intellectual work from being done. We are also interested in better understanding whether there is a clear relationship between ‘neglected’ personalities and neglected approaches to alignment—that is, to what degree including (or not including) specific *kinds* of thinkers in alignment would have a predictable impact on research directions.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/b73d670e8c9a4c4e0d2e3f59273cf4a540a2e6d3cfa295d3.png)

Trait scores were zero-indexed. Note that the general population sample was directly taken from the [paper](https://www.nature.com/articles/s41598-023-34504-1) that validated the specific Big Five scales used in this project; the EA and alignment samples were measured directly in our surveys.

In spite of significant trait similarities across the two communities, we also find that EA respondents on average are more conscientious (t=2.7768, p=0.0058) and more agreeable (t=3.0674, p=0.0023) than the alignment community respondents, while alignment researchers tend to be slightly (though not statistically significantly) higher in openness. It is possible that EAs are more broadly people-oriented (or otherwise select for this) given their prioritization of explicitly-people-(or-animal)-related causes. It is also possible that the relative concreteness of EA cause areas, as compared to the often-theoretical world of technical AI safety research, may lend itself to slightly more day-to-day, industrious types. 

These differences are mostly being driven by significantly different distributions on key self-reports related to each trait, for instance:

![](https://lh7-us.googleusercontent.com/huuPPSMdYoayeeza5_ndyYtsEV04gFqQws6zYr2CQK5MxgXZDaE4hQFXU9G4dMq3q9pmH9kcQIHevd41gVcxoKKg6CsC5cIJBDoxGNh0QyycwcssAfo_BtVJ5XPNJ8WTRK20rdVR7IOQeAPMUIo28h4)

Left: sample agreeableness item. Right: sample conscientiousness item.

### EAs and alignment researchers have significantly different moral foundations

[Moral foundations theory](https://en.wikipedia.org/wiki/Moral_foundations_theory) posits that the latent variables underlying moral judgments are modularized to some extent and are validly captured (like the Big Five) via factor analysis/dimensionality reduction techniques. We directly operationalize [this paper](https://bpspsychub.onlinelibrary.wiley.com/doi/epdf/10.1111/bjso.12452) in our implementation of the Moral Foundations Questionnaire (MFQ), which finds three clear factors underlying the original model:

1.  **Traditionalism**: Values social stability, respect for authority, and community traditions, emphasizing loyalty and social norms. Lower scores may lean towards change and flexibility, whereas higher scores uphold authority and tradition.
2.  **Compassion**: Centers on empathy, care for the vulnerable, and fairness, advocating for treating individuals based on need rather than status. Lower scores might place less emphasis on individual care, while higher scores demonstrate deep empathy and fairness.
3.  **Liberty**: Prioritizes individual freedom and autonomy, resisting excessive governmental control and supporting the right to personal wealth. Lower scores may be more accepting of government intervention, while higher scores champion personal freedom and autonomy.

We find in general that both EAs and alignment researchers score low on traditionalism, high on compassion, and are distributed roughly normally on liberty. However, EAs are found to score significantly higher in compassion (U=8349, p≈0), and alignment researchers are found to score significantly higher in liberty (U=16035, p≈0). Note that Likert items (strongly disagree, somewhat disagree, ..., strongly agree) are represented numerically below, where 1 = strongly disagree, and so on.

![](https://lh7-us.googleusercontent.com/z7MBhC5Iv99bCl4yg6x9m8yI2mhvSIyyZjDSkQZLGMDbyFAQDGp1B7v4E6omGnPnxbUIzi7olXyXARwkSkca0Kjx1lzTh0gh5o1fjwVUKI93FHrkwEoy-2cPp0Dj0PYdU_mIKeft0ozBU2DTL97p3l0)

![](https://lh7-us.googleusercontent.com/gO_eugCa4mmDmdzw309LOrPugnKwVBpLTx7ITTJES8xSbpqMTxYm6GY_I0LmIfP3Ai_NPlWhChEmojyUzx9UZYnbpxqb9d5q2rgUN9GG7WuVKpNpmqIXn7-iLk4ro-7qpQMfuRWJrwlr1MoYQH-HLL4)

Note the slightly truncated x-axis given virtually no one from either group scored <2 in this scale.

![](https://lh7-us.googleusercontent.com/lwG6xZ7Q0kBtJdAF0e4kaDbgjzXuHgMvAZvjKyPkgJIKqZpfoVeTAIjhZvFI6o84lyexHlaq2hhuBhCkHxAiOP1suFxZ-Uc6--Ssee1EQDAGtk4VTZp3Jlwghg1KHRLlk9uEMVH53EIXcReVWJSkoEw)

Considering each of these three results in turn:

1.  It is not very surprising that EAs and alignment researchers are low in traditionalism, which is typically associated with conservatism and more deontological/rule-based ethical systems. Worrying about issues like rogue AI and wild animal suffering might indeed be considered the epitome of ‘untraditional’ ethics. This result naturally pairs with the finding that there are virtually no conservative EAs/alignment researchers, which may have important implications for viewpoint diversity and neglected approaches in both communities.
2.  Both alignment researchers and EAs clearly value compassion from a moral perspective, but EAs seem especially passionate—and more homogenous—in this respect. For instance: 

![](https://lh7-us.googleusercontent.com/FJR2ZU5cVbF3cV3YeQOtJXELH4GZUW4MPkN9Ibgdl8aqMhSWSI97DEXhlT0cypYaAr3vRZY3Tp7GhjWN2G5LpnlQ4u61WdXk3HzqYQydlWoKSZ4i9DEbXsTqt0RD8EA2hAIK5-3UmBX-9AQCB3pZ27Y)

This result is reminiscent of the group-level agreeableness difference demonstrated previously and likely can be explained in similar terms.

1.  Interestingly, both alignment researchers and EAs are generally-normally-distributed on liberty as a moral foundation, with alignment researchers demonstrating a slight positive skew (towards liberty) and EAs demonstrating a slight negative skew (away from liberty). A clear example of this dynamic can be seen here:

![](https://lh7-us.googleusercontent.com/R9I-rVsirILJBMUDOFlAfq1YaH0GzJw0nlrkubTfH9itgdOy-nUcFKEYXF9PKuitYRnkpYmDkBruC-gIbK93kkpyRkYdW3d13AeeyPYttP6B9DW4PVNvT5S1Z1YAmw25eLpiElLbW8Z7e8gW1hmfu6M)

EAs and alignment researchers demonstrate significantly different intuitions on sample liberty items.

It is worth noting that while the philosophy of effective altruism/AI safety has a clear expected relationship to traditionalism (boo!) and compassion (yay!), it seems plausibly agnostic to liberty as a moral value, potentially explaining the generally-normally-distributed nature of both populations. This finding invites further reflection within both communities on how liberty as a moral foundation relates to their work. For example, the implementation details of an AI development pause seemingly have a clear relationship to liberty (as we actually demonstrate quantitatively [later on](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Using_temperament_to_predict_alignment_positions)). Given that alignment researchers seem to care both about liberty and AI x-risk, it would be interesting for follow-up work to better understand, for example, how researchers would react to a government-enforced pause.  

Free responses from alignment survey
------------------------------------

On the alignment survey, we asked respondents three questions that they could optionally write in responses to:

*   What, if anything, do you think is neglected in the current alignment research landscape? Why do you think it is neglected?
*   How would you characterize the typical alignment researcher? What are the key ways, if any, that you perceive the typical alignment researcher as unique from the typical layperson, the typical researcher, and/or the typical EA/rationalist type?
*   Do you have any other insights about the current state of alignment research that you'd like to share that seems relevant to the contents of this survey?  
     

Given the quantity of the feedback and the fact that we ourselves have strong [priors](https://www.lesswrong.com/posts/qAdDzcBuDBLexb4fC/the-neglected-approaches-approach-ae-studio-s-alignment) about these questions, we elected to simply aggregate responses for each question and pass them to an LLM to synthesize a coherent and comprehensive overview. 

[Here](https://docs.google.com/document/d/1VXk4J0zAPVpnwuXl-LAxeI3ZxmOxtuXS2AUlZEDyg60/edit?usp=sharing) is that output (note: it is ~60% the length of this post), along with the [anonymized text](https://docs.google.com/document/d/1VXk4J0zAPVpnwuXl-LAxeI3ZxmOxtuXS2AUlZEDyg60/edit?disco=AAABIW3BBkg) of the respondents.

Our four biggest takeaways from the free responses (consider this an opinionated TL;DR):

1.  The field is seen as suffering from discoordination and a lack of consensus on research strategies, compounded by a community described as small, insular, and overly influenced by a few thought leaders. It is important to highlight the significant worries about the lack of self-correction mechanisms and objective measures of research impact, which suggests the need for further introspection on how the community evaluates progress and success. Both of these concerns appear to us as potentially highly impactful neglected ‘meta-approaches’ that would be highly worthwhile to fund and/or pursue further.
2.  There were numerous specific calls for interdisciplinary involvement in alignment, including multiple calls for collaboration with cognitive psychologists and behavioral scientists. We were excited to see that brain-like AGI was highlighted as one neglected approach that was construed as both accessible and potentially-high-impact for new promising researchers entering the space.
3.  The alignment community perceives itself to be distinguished by its members' high intellectual capacity and mathematical ability, specialized technical knowledge, high agency, pragmatic altruism, and excellent epistemic practices. Distinct from typical EA/rationalist types, they're noted for their STEM background, practical engagement with technical AI issues, and a combination of ambition with intrinsic motivation. They also believe they are perceived as less experienced and sometimes less realistic than their peers in cognitive sciences or typical ML researchers.
4.  The community also shared concerns about the ambiguous standards defining alignment researchers, potentially skewing the field towards rewarding effective communication over substantive research progress. Critiques also extend to the research direction and quality, with some arguing that emphasis on intelligence may overlook creativity and diverse contributions (a finding we replicate in more quantitative terms elsewhere).

Concluding thoughts
-------------------

Thanks again to both communities for their participation in these surveys, which has enabled all of the analysis presented here, as well as over $10k in donations to a set of very high impact orgs. We want to emphasize that we perceive this write-up to be a first pass on both datasets rather than the last word, and we’d like to strongly encourage those who are interested to explore the [data analysis tool](https://thealignmentsurvey.com/) we built alongside this project (as well as the full, [anonymized](https://github.com/agencyenterprise/alignment-survey-dashboard/blob/main/ea_data.csv) [datasets](https://github.com/agencyenterprise/alignment-survey-dashboard/blob/main/alignment_data.csv)). We suspect that there are other interesting results to be found that we have not yet uncovered and are very excited to see what else the community can unearth (please do share any results you find and we will add them to this post!).

One practical thought: we were most surprised by the community misprediction/false consensus effect results. Accordingly, we think it is probably worth probing alignment between (1) group X’s perception of group X’s views ‘as a whole’ and (2) group X’s actual views fairly regularly, akin to [calibration training](https://forum.effectivealtruism.org/posts/pnpnqA4hijnr59p7d/efforts-to-improve-the-accuracy-of-our-judgments-and#Calibration_training) in forecasting. Group-level self-misperceptions are [a clear coordination problem](https://ieeexplore.ieee.org/document/1470239) that should likely be explicitly minimized through some kind of active training or reporting process. (A more precise future tool might enable users to predict the full shape of the distribution to avoid noise in varying statistical interpretations of (1) above.)

To end on a positive note, we highlight one final significant community misprediction from the alignment survey:

![](https://lh7-us.googleusercontent.com/wbHvGjHO7XGriPXZ8XArSZSMjUOXMRmGtWm2SGl_iAMGXZEJouGoXfGfFAtFj0C2YQxLN9kBWDoTtm7qq0YxBJvUTK4vLh_r9OHdxBnrcRxDc2ZJV8OyuV_erhWA45S4zeGYGXFj28XBEIa56gbeKOM)

This demonstrates that alignment researchers are significantly more *optimistic* than they anticipated about having made significant alignment progress before AGI is developed. In other words: alignment researchers currently don’t think that other alignment researchers are particularly hopeful about making progress, but they *actually are*! (Or at the very least, are *explicitly* *not* pessimistic.) So we’d like to strongly encourage researchers to go out and continue doing the [hard](https://www.lesswrong.com/posts/BseaxjsiDPKvGtDrm/we-choose-to-align-ai) work with this understanding in mind, particularly with respect to the more underexplored areas of the alignment research landscape. 

Thanks very much for your engagement with this project, and we are looking forward to seeing what other interesting results the community can discover.

* * *

Appendix: other interesting miscellaneous findings (in no particular order)
---------------------------------------------------------------------------

### Using temperament to predict alignment positions

An interesting (though not particularly actionable) classification result:

![](https://lh7-us.googleusercontent.com/ueDDLB3RSwWs241y-cp6KpIjjnx3ckQ671CiWY-tJ11TEk2zSCJKZS37RHTT3YOW4nUH6H0RDf8_E5naV9YgMZukTy1l_GHV8OpmsknLpL_EPkrJ-8qMjAgdXQFn2z_t8qTwrDn72_r5nBXo_h3Wv4o)

Predicted alignment positions shown on the y-axis. Predictive accuracy of classifier shown on x-axis. Dotted red line indicates chance-level.

We show that respondents’ trait-level scores from the psychometric instruments deployed in both surveys can be used to predict alignment researchers’ positions on the various alignment-specific questions significantly above chance level using a simple Random Forest Classifier (with balanced class weights). Feature importances reveal that many such predictions are based on seemingly sensible features—for instance, for the statement, “I currently support pausing or dramatically slowing AI development,” the feature with the single highest importance is one’s liberty moral foundation score, which makes a good deal of sense. For the “promise seen in *controlling* the AI (deception, model edits, value alignment, goal robustness)” question, the single feature with the highest importance is, quite intriguingly, one’s own *self-control* score on the [Brief Self-Control Scale](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7261631/). 

The purpose of this analysis is to demonstrate that, while undoubtedly imperfect, these psychometric tools can indeed be used to help predict real-world psychological variables in sensible and interesting ways—which in turn can yield interesting practical implications for field-building, pursuing novel approaches, and the like.

### Gender differences in alignment

![](https://lh7-us.googleusercontent.com/zXGeULo_1y0ZY-8diS1unWiq16VFoz4JK_DoOxc4K-UbpkWpfwULoT2pxYtO3xwcAAvv7XZoOiKFgFyQKTeqTNgKv7XDMJF5GLOQlxqdA_oBRcfekWRRq20dFwUnh59X7a3pCrgV_DxQS2BH98jbxNM)

We show here that female alignment researchers are slightly less likely to think of alignment as fundamentally related to control rather than coexistence, more likely to think that alignment should be more multidisciplinary, and slightly less likely to think that alignment researchers require a CS, math, physics, engineering, or similar background. Given that female researchers seem to have meaningfully different views on key questions about the nature of alignment research and are [dramatically outnumbered](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Who_took_these_surveys_) by males (9 to 1), it may be worth explicitly attempting to recruit a larger number of well-qualified female alignment researchers into the fold.

### EAs and alignment researchers exhibit very low future discounting rates

![](https://lh7-us.googleusercontent.com/zWpZkgHsBBOoDj4F_FX1znAlMqcawAk6JPxckz416iP9emI_gOLkxprjWVuV5jkVI_7klal6lkCxtr6FjPvFuybML1V3aLHw44w2uTcNFeiAcEE0ItXX0gkVCrOagcjX0-XKL7udRFL97Dv2qrDSWF8)

This plot combines EA and alignment data, demonstrating that >70% of both communities exhibit extremely low future discounting.

As additional convergent evidence supporting the they-are-who-they-say-they-are conclusion, both EAs and alignment researchers demonstrate very low future discounting rates as measured using a subset of questions from the [Monetary Choice Questionnaire](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6701266/). (This tool basically can be thought of as a more quantitative version of the famous [marshmallow test](https://en.wikipedia.org/wiki/Stanford_marshmallow_experiment) and has been shown to correlate with a number of [real-world](https://www.sciencedirect.com/science/article/abs/pii/S0163725812000447) [variables](https://link.springer.com/article/10.1007/s40732-014-0041-z).) Having very low discounting rates makes quite a lot of sense for rationalist longtermist thinkers. 

One particularly interesting finding related to this metric is that k-value correlates moderately (r=0.19, p=0.03) with support for pursuing theory work in alignment. One clear interpretation of this result might be that those who discount the future more aggressively—and who might have a diminished sense of the urgency of alignment research as a result—also think it is more promising to pursue alignment approaches that are less immediately practical (i.e., theory work).

### EAs and alignment researchers aren't huge risk-takers

![](https://lh7-us.googleusercontent.com/ClsQulanezSCxVUH_URTVQ_TvOOymp39bdjWW9H3tz5lkDDBj0VYWBjpeLZSpZZjW7MZwpAFWvgPwgQpAON3RbTZ0EOJOBuWWRsuydFiUvD4lAxj5Ekt2rdg8CAW_SORresj0jN-zpV-H3lIfbF9Gfo)

![](https://lh7-us.googleusercontent.com/POdlzvvYRH9GSph5RTXKeBRrMADJnCraTsNPSNrh4nCKBpnIR1CTr0b2xpefTErFH0kIg02KMmu72dw0B9B5Fz6wj1ZhPKo4j6nq7ZEx-B5LQbnSPJ0dKBYvX4NkHps9W4Sc67QoZ7yyLQWAiQRkLRs)

Example items that comprise the General Risk Propensity Scale.

We show that both EAs and alignment researchers are generally normally distributed with a slight negative skew on risk-taking as captured by the [General Risk Propensity Scale](https://sjdm.org/dmidi/General_Risk_Propensity_Scale.html), with less than 15% of individuals in either community displaying a strong risk-taking temperament (≥4 on the scale above). This effect is driven by example responses shown below the scale-level plot.

### EAs are almost-perfectly-normally-distributed on some key EA questions

![](https://lh7-us.googleusercontent.com/dpdIAbMENHPPUf2XVOtMqVNYzs9rw_Qu062ddvXCq8MymXxrh6Y2XnRJ08lClcCO_LRtDbWP22TJPbtUCbbaytORIRD4paq9lcY2tugUn75vaER-R7G0dxlJR2g2PlCJw8Om2iLUXN8wxOglw_WYuy8)

![](https://lh7-us.googleusercontent.com/_P9bzZEaevb0PNfPcBxjAtfKo1J0Vng6DByOp4NzvYcCPTV5k_zIneXZj4JiyFn4HW7iIR0TWuLpRTW6W6apWvgkNt2q_vvYWk9YrWGOwKene0jpLqtMAyo7EsP_bDULRa5AwXTPyA4dqNf2elxeZK0)

Full item text reads, "I think the FTX crisis was a reflection of deeper problems with the philosophy and/or community of effective altruism."

These plots show that EAs are almost perfectly normally distributed on (1) the extent to which they have a positive view of effective altruism’s overall shift towards longtermist causes, and (2) the extent to which they think the FTX crisis was a reflection of deeper problems with EA. These both may be questions that therefore require further adjudication within the community given the strong diversity of opinions on these fairly foundational issues.

### Alignment researchers support a pause

![](https://lh7-us.googleusercontent.com/LerIs5I7jyJqy1BPiPr1EIPwqcKBrOZLc5wP3865qSKIfWeuxDHwoY4MteC7ETa299krTjHzlwGdYpKAFeSqHGrm7AY8xHJY8IYZ1js5WwePr1mLCxye67UhttAhcazSFWI3VmvdgxBI_-a3JtUDhng)

It is very clear that alignment researchers generally support pausing or dramatically slowing AI development (>60% agreement), which naturally pairs with the finding that alignment researchers [do not think](https://www.lesswrong.com/posts/XTdByFM6cmgB3taEN/key-takeaways-from-our-ea-and-alignment-research-surveys#Alignment_community) we are currently on track to solve alignment before we get AGI. 

### Alignment org leaders are highly optimistic by temperament

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/5676b9d29b395dd0dca4b45aa09c8a5dc55eebc519ae3ec8.png)

In blue are respondents who actively lead alignment orgs, and in red are all other alignment researchers. We probed trait optimism (ie, *not* optimism about alignment specifically) in the survey using items like “I see myself as someone who is an optimist,” “...who has a ‘glass-half-full’ mentality,” etc. and found an interesting pocket of extremely optimistic alignment org leaders! This finding suggests an important (if somewhat obvious) motivating factor of good leaders: genuinely believing that effortfully pushing forward impactful work is likely to yield very positive outcomes.

* * *

*\[Any additional interesting results found by the community will be added here!\]*  
 

[^p7gvohnook]: We defined this as currently-grant-funded alignment researchers and EAs actively involved for >5h/week in a specific cause area. 

[^orftbjvuxf9]: Donations from alignment survey: 37 part- or full-time researchers chose AI Safety Camp (https://aisafety.camp/), totaling $1480 for this org. 26 part- or full-time researchers chose SERI MATS (https://www.matsprogram.org/), totaling $1040 for this org. 11 part- or full-time researchers chose FAR AI (https://far.ai/), totaling $440 for this org. 8 part- or full-time researchers chose CAIS (https://www.safe.ai/), totaling $320 for this org. 6 part- or full-time researchers chose FHI (https://www.fhi.ox.ac.uk/), totaling $240 for this org. 5 part- or full-time researchers chose Catalyze Impact (https://www.catalyze-impact.org/), totaling $200 for this org. Donations from EA survey: 33 actively involved EAs chose GiveWell top charities fund, totaling $1320 for this org. 32 actively involved EAs chose Animal welfare fund, totaling $1280 for this org. 31 actively involved EAs chose Wild Animal Initiative, totaling $1240 for this org. 17 actively involved EAs chose Long term future fund, totaling $680 for this org. 10 actively involved EAs chose Lead Exposure Elimination Project, totaling $400 for this org. 7 actively involved EAs chose Good Food Institute, totaling $280 for this org. 6 actively involved EAs chose Faunalytics, totaling $240 for this org. 5 actively involved EAs chose The Humane League, totaling $200 for this org. 5 actively involved EAs chose Charity entrepreneurship, totaling $200 for this org. 4 actively involved EAs chose Against Malaria Foundation, totaling $160 for this org. 4 actively involved EAs chose StrongMinds, totaling $160 for this org. 3 actively involved EAs chose Nuclear Threat Initiative Biosecurity Program, totaling $120 for this org. 2 actively involved EAs chose Johns Hopkins Center For Health Security, totaling $80 for this org. 2 actively involved EAs chose Suvita, totaling $80 for this org. 2 actively involved EAs chose Malaria Consortium SMC programme, totaling $80 for this org. 1 actively involved EAs chose New Incentives, totaling $40 for this org. Across both surveys, we are donating $10,280 to a diverse set of effective organizations. 

[^9w7c5cx5y3t]: It might be worthwhile to explore and pioneer structures to help individuals for whom these skills come less naturally work on them further—and/or surround these individuals with excellent people to bring out the best in them. This may be particularly necessary for extracting and implementing some very promising underexplored approaches from, eg, more disagreeable but brilliant individuals who might not otherwise implement them. 

[^v9uw39bg2x]: That is, knowing that someone is an alignment researcher/in the EA community doesn't meaningfully help predict how much they will value liberty, but it does meaningfully help predict how much they will value both compassion and traditionalism. 

[^92wmdom25z]: We are also incidentally hopeful that these results may actually have implications for increased funding towards some neglected cause areas that could indirectly wind up benefiting alignment, by, for example, leading to a funding environment in which causes like cluster headaches and consciousness research and the best of human morality are prioritized, and that this in turn may be a part of the hodgepodge that solves alignment. 

[^hpf19ziuosl]: “Prestige is like a powerful magnet that warps even your beliefs about what you enjoy. It causes you to work not on what you like, but what you'd like to like. That's what leads people to try to write novels, for example. They like reading novels. They notice that people who write them win Nobel prizes. What could be more wonderful, they think, than to be a novelist? But liking the idea of being a novelist is not enough; you have to like the actual work of novel-writing if you're going to be good at it; you have to like making up elaborate lies. Prestige is just fossilized inspiration. If you do anything well enough, you'll make it prestigious. Plenty of things we now consider prestigious were anything but at first. Jazz comes to mind — though almost any established art form would do. So just do what you like, and let prestige take care of itself. Prestige is especially dangerous to the ambitious. If you want to make ambitious people waste their time on errands, the way to do it is to bait the hook with prestige. That's the recipe for getting people to give talks, write forewords, serve on committees, be department heads, and so on. It might be a good rule simply to avoid any prestigious task. If it didn't suck, they wouldn't have had to make it prestigious. Similarly, if you admire two kinds of work equally, but one is more prestigious, you should probably choose the other. Your opinions about what's admirable are always going to be slightly influenced by prestige, so if the two seem equal to you, you probably have more genuine admiration for the less prestigious one.” - https://paulgraham.com/love.html 

[^g5gfo3wjtee]: It is worth noting that two respondents noted that they thought these questions were phrased in an unclear way, which may be a potential source of noise in these results.