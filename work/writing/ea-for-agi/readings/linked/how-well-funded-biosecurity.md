---
title: "How Well-Funded is Biosecurity Philanthropy?"
author: "C.K."
date: 2024-04-04
url: https://forum.effectivealtruism.org/posts/pnincG5vW8Far8Ggg/how-well-funded-is-biosecurity-philanthropy
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 2 stage-1 readings, e.g. ea-intro-program/gcbr-problem-profile.md; analysis of biosecurity philanthropy funding, cause prioritization"
---

Many thanks to Andrew Snyder-Beattie and Joshua Monrad for their feedback during this project. This project was completed as part of contract work with Open Philanthropy, but the views and work expressed here do not represent those of Open Philanthropy. All thoughts are my own.

My full spreadsheet with results and calculations can be found [here](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit?usp=sharing).

**Summary Statistics**
======================

1.  I adopt a loose and arbitrary definition of biosecurity where I am primarily concerned with interventions aimed at preventing or mitigating the effects of disease outbreaks. This especially includes interventions targeting or suitable for [global catastrophic biological risks](https://www.nti.org/about/programs-projects/project/global-catastrophic-biological-risks/) (GCBRs).
2.  Given this definition, biosecurity roughly represents **1.3% of the global spend on public health** or about **$130bn** of **$10tn a year**.
3.  Of this** $130bn**, governments likely make up to **$100bn (80%)** as an upper bound, and the actual figure could be much lower. The US government is likely the biggest government spender, spending $24.3bn in 2023. **Private philanthropy is likely about $1bn (1%).** The rest comes from private spending, private philanthropy, and public-private partnerships that aren't independent foundations (e.g., universities).
4.  However, the vast majority of biosecurity spending goes towards vaccine development, disease surveillance, and pathogenesis research. My impression is that areas such as next-gen PPE, far-UVC, and research into GCBRs do not receive much philanthropic funding at all outside EA. EA players likely represent roughly **4%** of biosecurity philanthropic funding.

See [‘Results’](#Results) for more information.

This was scrappily put together in no more than 40 hours of work and very little expert consultation, so I note extremely high levels of uncertainty in these figures, although I would estimate they are correct within a factor of 2-3 given the conception of biosecurity with a reasonable degree of confidence (~70%). However, my uncertainties are much wider when I factor in uncertainties about what constitutes 'biosecurity' to begin with (closer to a factor of 5  with the same degree of confidence, with the upper tail being much higher).

**About**
=========

I’ve spent some time recently trying to understand exactly how well-funded is ‘biosecurity’ philanthropy.

An important caveat is that ‘biosecurity’, in its broadest sense, is *“*[*the prevention of disease-causing agents entering or leaving any place where they can pose a risk to farm animals, other animals, humans, or the safety and quality of a food product*](https://www.daera-ni.gov.uk/articles/biosecurity)*”*. Under this definition, the space of biosecurity interventions is exceptionally broad: safe food handling and storage practices, screening imported produce, waste management, proper sanitation, and the use of HVAC systems are all biosecurity interventions.

Instead, I’m mostly interested in a subset of interventions largely aimed at preventing or mitigating the effects of disease outbreaks. This especially includes interventions targeting or suitable for [global catastrophic biological risks](https://www.nti.org/about/programs-projects/project/global-catastrophic-biological-risks/) (GCBRs) such as [pathogen-agnostic early detection](https://www.liebertpub.com/doi/full/10.1089/hs.2023.0068), [vaccine platform technologies](https://cepi.net/vaccine-technology), and [regulating the use of nucleic acids through methods such as DNA synthesis screening](https://ifp.org/preventing-the-misuse-of-dna-synthesis/). However, a number of interventions not primarily targeting GCBRs may still have quite large consequences for them. [Antimicrobial resistance](https://www.england.nhs.uk/ourwork/prevention/antimicrobial-resistance-amr) likely contributes towards millions of deaths a year; is a desired property of any maliciously designed pathogen, and [techniques for detecting antimicrobial resistance are essentially the same techniques we would use for detecting novel pathogens](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9755710/). I think it is plausible that much work on influenza, research into the pathogenesis of pathogens, and a number of national security interventions are additionally relevant to pandemic prevention and mitigating GCBRs amongst a number of interventions.

The upshot is that trying to delineate the boundaries of ‘biosecurity’ *simpliciter,* ‘pandemic prevention’, or ‘GCBR-relevant biosecurity’ is a doomed project. Additionally, I think attempting to do so can often lead to the dangerous exclusion of important considerations, technologies, and programs that do not obviously fit into one’s chosen frame.

However, I think the benefits of understanding how well biosecurity is funded; the distribution of funding across different types of actors, and how biosecurity funding is split across interventions is highly important for the efficient allocation of resources on the margin. In turn, whilst I don’t think we can be very confident about attempts to do so, I think the potential insights to be gained from trying outweigh the high levels of uncertainty.

**Why Does This Matter?**
=========================

Biosecurity is constituted by exceptional heterogeneity. Two *prima facie* identical interventions can have remarkably different consequences depending on the specific threat model, pathogens of concern, geographical context, and a number of contingencies. A wastewater surveillance program targeting an intentionally engineered[stealth](https://www.gcsp.ch/publications/securing-civilisation-against-catastrophic-pandemics) pandemic in a country where wastewater treatment is prevalent is much more likely to succeed than a wastewater surveillance program targeting zoonotic diseases with a high case fatality rate in a country with scarce wastewater treatment.

Without relatively strong priors about the probability distribution of threat models, pathogen characteristics of concern, pandemic intensities, and all manner of practical considerations, I am generally pessimistic about the value of comparing and contrasting different biosecurity interventions on the margin. At the very least, I think there should be very clear bounds and scope restrictions for this type of modelling. In turn, I would not suggest that current funding levels are a reliable proxy for how saturated interest in specific biosecurity interventions is.

However, I do think order-of-magnitude differences can teach us a lot about biosecurity philanthropy and biosecurity more generally, as well as effective altruism’s (EA) place within it. Some of these questions worth answering might be:

*   How large is biosecurity philanthropy as a proportion of total spending on biosecurity?
*   How large is biosecurity philanthropy compared to public health philanthropy?
*   Who are the biggest funders within biosecurity? What are their concerns?
*   Are there any significant differences in the funding priorities or focus areas among the leading biosecurity philanthropists?
*   Where is most biosecurity funding coming from geographically?
*   What are the primary areas of interest within biosecurity philanthropy?
*   How well-represented are EA concerns (especially relating to GCBRs) within biosecurity philanthropy?

I focus on biosecurity philanthropy largely because it is less visible than government spending on biosecurity, which the United States likely dominates (see [Part III: Biosecurity BOTECs](#Part_III__Biosecurity_BOTECs)). However, I think understanding the biosecurity philanthropy landscape may also be more decision-relevant for organisations and individuals in EA seeking to attract and divert funding towards the most high-impact causes.

**Methodology**
===============

I ended up focusing on three mini-investigations:

1.  Who are the philanthropic funders in biosecurity and how much do they spend in a year?
2.  How does this biosecurity spending breakdown by intervention?
3.  How well-funded is biosecurity?

I spent roughly 40 hours on this (excluding this post), with the majority of this (~34h) being on Part I; ~3h on Part II, and ~3h on Part III).

### **Part I: Biosecurity Spending by Foundations**

Part I involved searching through a long list of foundations and producing (often very scrappy) estimates of lower and upper bounds of how much they spent on biosecurity.

**1\. Structured Search**

Firstly, I ended up focusing on this list of search tags (and some minor variants):

*   Technologies of Interest
    *   Next-Gen PPE
    *   Far-UVC
    *   Rapid Vaccines
    *   Metagenomic Sequencing
    *   AI-Bio
*   Key Areas
    *   Global Catastrophic Biological Risks (GCBRs)
    *   Bioweapons
    *   Bioterrorism
    *   Dual-Use Research of Concern
    *   Lab Leaks
    *   Novel Pathogens
    *   Pathogenesis Research
    *   Biosecurity Policy
    *   Gain of Function Research
    *   Indoor Air Quality
    *   Lab Biosafety
*   Other Search Tags
    *   Biosecurity
    *   Biodefense
    *   Antimicrobial Resistance
    *   Influenza
    *   Infectious Disease
    *   Disease Surveillance

These were exhaustive of the areas I ended up defining as ‘biosecurity’. For the reasons given in [‘**About**’](#About), this is a very scrappy delineation that represents the technologies, problems, and considerations   I felt were most connected to preventing or mitigating the effects of disease outbreaks, especially GCBRs. For each of these, I then searched them against the following search items and the word “Funding” on Google.

*   Grant
*   Trust
*   Donation
*   Initiative
*   Foundation
*   Fund
*   Philanthropy

The full format of my searches was** ‘\[Key Word\]'"\[Search Item\]'" Funding’**. For each search, I looked at the first 5-10 pages on Google and noted any foundation that came up.

**2\. Grantee Search**

I additionally looked through a number of organisation websites and annual reports to see if they state who their funders are. These included organisations who report their funders such as [1DaySooner](https://www.1daysooner.org/finances-transparency/),[ the Johns Hopkins Center for Health Security](https://centerforhealthsecurity.org/who-we-are-at-the-center-for-health-security-0), the [Centre for Long-Term Resilience](https://www.longtermresilience.org/donate),  [UNIDIR](https://unidir.org/who-we-are/funding-and-support/), and  [Preventing Future Pandemics](https://www.preventingfuturepandemics.org/our-funders). The purpose of this step was largely to fill in the gaps from my structured search, hence it was a lot more ad hoc.

**3\. Foundation BOTECs**

This was by far the most involved part of this entire investigation and ended up taking two iterations. Ultimately, for every foundation, I attempted to produce a plausible lower-bound figure for how much they were spending on biosecurity in a given year and a plausible upper-bound. My overall estimate was, therefore, just the mean, unless I felt I was able to collect more high-fidelity data.

In the initial iteration, the most useful tools were either foundation annual reports or grant databases. Organisations like the [Burroughs Wellcome Fund](https://www.bwfund.org/) produce annual reports that give relatively detailed breakdowns of their[ spending in different areas](https://www.bwfund.org/wp-content/uploads/2023/06/2022_BWF_Annual_-Report_final.pdf). Organisations like [Open Philanthropy](https://www.openphilanthropy.org/) provide [data on individual grants](https://www.openphilanthropy.org/grants/?focus-area=biosecurity-pandemic-preparedness).

For actually estimating lower and upper bounds, I didn’t really have a defined rule given the large amounts of variance in how foundations report data, stratify their programs, and define their interests. However, some general patterns in the ways I produce these estimates include:

*   In general, I assumed that centring on a relatively narrow set of interventions and search terms meant I was likely missing a number of interventions relevant to biosecurity. My guess is this is particularly true of various health-system strengthening interventions; lab governance, and technical research not explicitly on pathogenesis. Therefore, there were a number of cases in which I treated key terms as exhaustive of biosecurity. This is generally true of key interventions such as “vaccines” or programs focusing on “infectious diseases” that weren’t targeting neglected tropical diseases.
*   Most cases involved value judgements on specific grants, which is a source of a great deal of variance. Hence, I similarly adopted quite a low bar for upper-bound figures and often a much higher bar for lower-bound figures. In many cases, this led to quite wide ranges, such as the Chan and Zuckerberg Initiative ($3.4m-$34mm).
*   There were a few foundations I essentially regarded as entirely biosecurity-oriented, namely [FluLab](https://theflulab.org/), and [CEPI](https://cepi.net/).
*   I generally tried to keep to recent (post-2020) annual reports and grants to ensure some standardisation. Although given the large number of foundations I initially looked at (100+), this was not always possible.
*   I did not distinguish between grants awarded and grants paid, as foundations tend to report one or the other. However, in many cases (especially the larger foundations), my estimates represent amounts spent on large projects. Therefore, I assume my overall estimate is closer to the spend. However, the confidence intervals are likely wider than the average difference between grants paid and grants awarded, so I was not too concerned about this.
*   In my second pass, I focused more on producing higher fidelity estimates of the big players. Supplementary data for some of these estimates can be found in the spreadsheet (for example, [here](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit#gid=451838721)).
*   I was also concerned about double-counting in a few cases (especially CEPI). For example, it was unclear how much of CEPI’s spending was enabled by grants from the Bill & Melinda Gates Foundation. In these cases, my lower bound assumed total double-counting, and my upper bound assumed none.
*   Finally, a large category of funding ended up being pathogenesis research. I do not have a technical background in the life sciences and found it difficult to create value judgements on how relevant these are to pandemic prevention. However, I think their spillover effects are plausibly quite large. I was likely more generous in this category than my others.
*   There were a fairly sizeable number of foundations that plausibly spent little to nothing per year on biosecurity. In some of these cases I did have somewhat more accurate estimates in an earlier version. However, given the overall figures were less sensitive to these, I placed them in the <$100k range and took the average as $50,000.

In light of the above, **many of these estimates per organisation are likely incorrect**. However, it was unclear to me that this process was introducing a particular directional bias. Therefore, I assume that many of these inaccuracies cancel out such that the aggregated sum was likely more accurate.

Overall, this allowed me to produce **a lower-bound estimate of ~$780m** and**an upper-bound estimate of ~1.6bn** for **a total estimate of ~$1.2bn.** This is dominated by the[**Wellcome Trust**](https://wellcome.org/)** (~$370m)**, [**Bill and Melinda Gates Foundation**](https://www.gatesfoundation.org/)** (~$330m)**, [**CEPI**](https://cepi.net/) **(~$180m)**, and the [**Novo Nordisk Foundation**](https://www.novonordisk.com/)(**~$110m)** \- noting very high uncertainty on CEPI and Novo Nordisk in particular.

### **Part II: Philanthropy Breakdown by Area**

For Part II, I focused on the top funders to get a rough sense of how biosecurity funding breaks down by intervention.

My overall methodology was as follows (EDIT: I note some errors in my calculations producing these results. Updated figures are in [Updates & Corrections.](#Updates___Corrections) The method is largely the same, although I now divided the weights by the number of focus areas per org and did not manually weight GCBR focus areas given no need):

1.  I looked through the annual reports or websites of all funders who likely donate upwards of £1m+ according to my Part I estimate in more detail.                
2.  Identified  "key areas" that their funding breaks to and note these down. Noting:
    1.  I ended up limiting my categorisations to the search tags I produced in Part I for consistency.
    2.  I grouped many of these into “GCBR Priority Areas”, which encompass essentially all of the "Key Areas" identified in [Part I](#Part_I__Biosecurity_Spending_by_Foundations) except pathogenesis research or lab biosafety. I note that my categorisation of “GCBR Priority Areas”  means I assume no overlap in GCBR Priority Areas and other areas, which is definitely not the case in practice. This likely produces upper bounds of how much issues like GCBRs and biodefense get relative to other areas.
3.  Each area then becomes a unique count. This assumes that funders roughly spend equal amounts in their listed areas. For this reason, my bar for a "key area" is something like this is a priority area for funders.         
4.  The counts are weighted by the total average spend calculated in 2. Biosecurity Spending by Foundation.
    1.  For “GCBR Priority Areas”, I aggregated all EA-aligned/EA-adjacent funders with more than £1m+ in biosecurity spending a year.
    2.  I note that given I have actual data on exactly how much EA orgs spend, which I assume is exclusively on GCBR Priority Areas, I manually adjust the weight to represent the actual amount.
5.  The weighted counts are converted into percentages, which I take as reflecting the overall amount spent on biosecurity.        

My breakdown is in [‘Results’](#Results), where I estimate **GCBR Priority Areas represent roughly 4% of the total biosecurity philanthropic spend**. However, aside from how scrappy this calculation was, I note that my delineation of GCBR Priority Areas excludes large amounts of work that would plausibly interest EAs - especially infectious disease surveillance, lab biosafety, and health system readiness.

My results suggest that most of the biosecurity spend is on **infectious disease surveillance, pathogenesis research**, and **rapid vaccines**. Noting, however, that I seemed to have underestimated how much of the biosecurity spend was on **antimicrobial resistance** based on the sanity check below, which is also plausibly a key focus area within biosecurity more generally.

As a sanity check, I tried to get an independent estimate for AMR funding. According to[ this source](https://web.archive.org/web/20230328115328/https://globalamrhub.org/wp-content/uploads/2020/11/GlobalAMRHubReportDD.Nov2020.pdf), Antimicrobial Resistance receives roughly **~$200 - $230m** a year in philanthropic funding. My estimates produce a figure of about **$140m**, or **about 30-40% off.** My best guess is this is largely from overweighing pathogenesis research (a fair amount of which is aimed at AMR). However, I think being off by less than a factor of 0.5 was pretty good for a rough calculation.        

I reiterate that this is very scrappy, and only around 3 hours were spent on this estimate, so there is quite a lot of uncertainty. However, a key cause of uncertainty is the distribution of spend amongst the very big players, who don't prioritise GCBR Priority Areas. I also note my assumption that this funding is mutually exclusive produces a slight overestimate. Therefore, I would guess it is highly unlikely that philanthropic spending on technologies such as far-UVC, preventing bioterrorism, synthesis screening, and regulating dual-use research of concern represent more than 5% of the total biosecurity spend.

### **Part III: Biosecurity BOTECs**

Finally, I initially aimed to independently sanity-check my Part I calculations via a BOTEC. This process led me to collect some additionally useful pieces of information

My overall methodology was as follows:

1.  I first aimed to produce estimates of how much public health philanthropy takes place overall. **I note this method assumes biosecurity is a subset of public health.** For the reasons I state in [‘**About**’](#About) this is quite flawed. However, most biosecurity spending that is not under the public health bracket are national security interventions that currently represent a small proportion of the total biosecurity spend according to my [**Part II**](#Part_III__Biosecurity_BOTECs1) calculations. Therefore, I felt this assumption was reasonable.
2.  There was a lot of variance, so I used 5 different methods and produced an estimate by averaging these:
    1.  Method 1 involved finding a source on global giving in the US; the share of total philanthropic giving in the US; what proportion of global philanthropy the US represented (~50%), and then using this to estimate total public health philanthropy.
    2.  Method 2 involved estimating public health research spending, and then scaling this by the proportion of health research spending:health spending by the UK government. This was a very, very rough method, and is likely an overestimate as one would expect philanthropy to be overrepresented in health research spending versus object-level spending on healthcare by a lot.
    3.  Method 3 involved finding a source on how much public health philanthropy there was in the US; what proportion of global philanthropy the US represented, and then using this to estimate total public health philanthropy.
    4.  Method 4 involved a McKinsey source on annual health grant funding that I scaled by the proportion of global philanthropy the US represented, using this to estimate total public health philanthropy.
    5.  Method 5 involved me just collecting two additional figures based on spending by the top 100 grantmakers and an additional source for healthcare philanthropy.
    6.  I note many of these calculations [rest on this statistic that the US represents roughly half of global philanthropy](https://www.privatebank.citibank.com/newcpb-media/media/documents/insights/Philanthropy-and-global-economy.pdf). This was roughly commensurate with another source I found noting that 61% of philanthropy dollars are US-based. However, I appreciate that this introduces wide uncertainty on all of these figures.
3.  There is an extremely wide variance ($46m to $300m) generally stemming from operationalisation. In particular, variance in measuring levels of philanthropy is driven by whether you're talking about donations to foundations, foundation awards, foundation fundraising, or foundation spending, as well as how you account for cashflows between foundations, governments, and charities. These estimates are deeply quite uncertain.
4.  However,  I sanity-checked my result (~$130m) according to [a figure I could find of how much of global philanthropy is spent on healthcare](https://www.forbes.com/consent/ketch/?toURL=https://www.forbes.com/2007/01/16/leadership-philanthropy-charity-lead-citizen-cx_hc_0116charitable.html) and [figures on total philanthropic spending in 2020](https://www.cleanairfund.org/air-quality-funding-2022/philanthropic-funding/). My estimate came to 50% of philanthropic spending being public health, which was quite close to the 44% quoted in the Forbes article.
5.  To now estimate what % of public health spending is biosecurity, I produce an upper bound by anchoring on US and UK data on (i) biosecurity budgets and (ii) health budgets. I get a figure of ~1.5%.
    1.  This figure of 1.5% is a very clear overestimate as the UK and US spend more on biosecurity than most other countries in the world. I round it down to 1%, which is probably still an overestimate, although I do note that the vast majority of most biosecurity spending seems to be from the US.
    2.  I think this is among my shakiest assumptions, although if 1.5% is an absolute upper bound that assumes the rest of the world spends on biosecurity commensurate with the US, then [given US government expenditure is roughly 33% of total government spending worldwide](https://en.wikipedia.org/wiki/List_of_countries_by_government_budget), this is effectively the same as suggesting the rest of the world is spending 0.75% of their public health budget on biosecurity. Looking at figures for the UK ([see the spreadsheet](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit#gid=225525413&range=B77:B79)) and Australia (from [this source on their biosecurity spending](https://minister.agriculture.gov.au/watt/media-releases/budget-delivers-first-ever-sustainable-biosecurity-funding) given their [health budget](https://www.aph.gov.au/About_Parliament/Parliamentary_departments/Parliamentary_Library/pubs/rp/BudgetReview202223/HealthOverview#:~:text=Total%20spending%20on%20health%20in,and%20outlook%3A%20budget%20paper%20no.), where these amounts are ~0.5%-1.1%), this makes 0.75% plausibly still an overestimate, but more feasible than 1.5%.
6.  With this 1% figure, I estimate that ~$1.3bn is spent on biosecurity by philanthropy as an upper bound.
7.  The results of my foundation calculations were an upper bound of ~$1.6bn. This is good convergence, especially given both included some generous assumptions. In turn, I take the $1.3bn upper bound with the lower bound from the foundation list to produce more conservative average.
8.  In turn, I conclude that** ~$1bn is spent on biosecurity a year by foundations**.
    1.  This encompasses a "loose" definition of biosecurity in which issues like influenza, COVID-19 response, Antimicrobial Resistance, strengthening rapid response, and understanding pathogenesis are included.  
    2.  Issues like malaria, tuberculosis, and broader public health concerns are not intentionally included. However, given many foundations have an "infectious diseases" program, I leant towards including these. I'd guess (low-confidence) this means my estimate could be blown up by as much as 20-30%, although it is difficult to say as many infectious diseases programs are still relevant to pandemic prevention (especially concerning technologies, laboratory capabilities, and surveillance).
9.  I collected some additional data to contextualize these findings. See [‘Results’](#Results) for more details.

Overall, there is an enormous degree of uncertainty. However, I do think this is likely to be accurate within a factor of 2-3. Given my line-by-line estimates in Part I, I would be surprised if I underestimated by more than $500m. Depending on how loosely one defines biosecurity, it is easy to find $500m in biosecurity funding from the annual reports of Bill & Melinda Gates and the Wellcome Trust alone. I think my risks of this being an overestimate are greater. However, I think it is difficult to find evidence of more than $3bn in philanthropic funding for biosecurity.  I am fairly confident (~70%) of a range of about $500m - $2bn, with my best guess being in the $700m - $1.1bn range.

**Results**
===========

### **Part I: Biosecurity Spending by Foundations**

Overall, I arrived at a** lower-bound estimate of ~$780m** and**an upper-bound estimate of ~1.6bn for a total estimate of ~$1.2bn** using this method, noting I think it is probably an overestimate and update it in light of my later BOTECs.My breakdown of funders I estimate spend more than $1m a year on biosecurity is as follows (note that due to currency conversion precise figures may change):

**Fig. 1 - Biosecurity Philanthropy by Foundation ($1m+)**

<table><tbody><tr><td style="background-color:#666666;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Funders</strong></td><td style="background-color:#666666;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#666666;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#666666;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#666666;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td></tr><tr><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Organisation</strong></td><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Total Annual Biosecurity Awards (LB)</strong></td><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Total Annual Biosecurity Awards (UB)</strong></td><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Total Annual Biosecurity Awards (Average)</strong></td><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Areas (£1m+)</strong></td></tr><tr><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>£100m+ a year</strong></td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Wellcome Trust</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$373,607,175.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$373,607,175.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$373,607,175.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Rapid Vaccines, AMR, Foundational PPR, Disease Surveillance, Therapeutics</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Bill &amp; Melinda Gates Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$194,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$462,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$328,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Rapid Vaccines, Foundational PPR, Disease Surveillance, Therapeutics</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">CEPI</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$27,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$327,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$177,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Rapid Vaccines</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Novo Nordisk Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$17,157,438.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$201,618,364.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$109,387,901.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Foundational PPR, AMR</td></tr><tr><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>£10m - £100m a year</strong></td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">The Rockefeller Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$31,676,492.33</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$45,217,341.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$38,446,916.67</td><td style="padding:2pt 0pt;vertical-align:bottom" colspan="1" rowspan="1">Disease Surveillance, Rapid Vaccines, Health System Readiness</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">FluLab</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$26,142,780.89</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$36,966,268.83</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$31,554,524.86</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Disease Surveillance</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Open Philanthropy</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$30,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$30,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$30,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">GCBR Priority Areas</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Skoll Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$20,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$20,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$20,000,000.00</td><td style="padding:2pt 0pt;vertical-align:bottom" colspan="1" rowspan="1">Rapid Vaccines, Therapeutics, Disease Surveillance, PPE</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Chan Zuckerberg Initiative</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$3,400,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$34,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$18,700,000.00</td><td style="background-color:#ffffff;padding:2pt 0pt;vertical-align:bottom" colspan="1" rowspan="1">Foundational PPR, Disease Surveillance</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">The Fondation Mérieux</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$15,125,426.67</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$15,125,426.67</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$15,125,426.67</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Disease Surveillance, Laboratory Preparedness</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Effective Giving</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$10,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$10,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$10,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">GCBR Priority Areas</td></tr><tr><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>£1m - £10m a year</strong></td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td><td style="background-color:#efefef;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">&nbsp;</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Illumina Corporate Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$3,600,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$12,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$7,800,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Disease Surveillance</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Burroughs Wellcome Fund</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$7,320,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$7,320,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$7,320,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Foundational PPR, Fieldbuilding, DURC</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">CDC Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$5,100,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$5,100,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$5,100,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Disease Surveillance, Laboratory Preparedness</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Survival and Flourishing Fund</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,700,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,700,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,700,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">GCBR Priority Areas</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">W. M. Keck Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,000,000.00</td><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$2,333,333.33</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,666,666.67</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Foundational PPR, COVID-19</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Musk Foundation</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,333,333.33</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,333,333.33</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,333,333.33</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">AI-Bio</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">Founders Pledge</td><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,000,000.00</td><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,000,000.00</td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">GCBR Priority Areas</td></tr></tbody></table>

I note again that **many of these estimates per organisation are likely incorrect**, but I do think the aggregate sum is more likely accurate. I would not place tons of stock in the exact figures.

See the full results [here](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit#gid=866412256).

### **Part II: Philanthropy Breakdown by Area**

My rough breakdown of biosecurity spending by area is as follows (EDIT: I note some errors in my calculations producing these results. Updated figures are in [Updates & Corrections](#Updates___Corrections)).

**Fig. 2 - Biosecurity Philanthropy by Area**

![](https://lh7-us.googleusercontent.com/L8Ud6a2NzR-ju7jneqiExjAAJ_EeaGDEIlk8IQ1iBLYv4SUS3YCR9wFCsVplUct-nP3-zZCT_4OggRC5PXjkXI6vHbyUp8OhLmf-jqG88RzEFWyNrbnRf4rQhiJ5iLdKvc-pUcmozwtQuK1jGYbVx6A)

My actual estimates are as follows:

**Fig. 3 - Biosecurity Philanthropy by Area Table**

<table><tbody><tr><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Area</strong></td><td style="background-color:#b7b7b7;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Weighted $</strong></td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Antimicrobial Resistance</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$134,767,113</td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Rapid Vaccines</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$261,169,371</td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Pathogenesis Research</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$242,580,804</td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Disease Surveillance</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$233,751,234</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Lab Readiness</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$7,900,141</td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>Therapeutics</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$105,954,834</td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>PPE</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$5,576,570</td></tr><tr><td style="background-color:#ffffff;padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>DURC</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$1,858,857</td></tr><tr><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1"><strong>GCBR Priority Areas</strong></td><td style="padding:2pt;vertical-align:bottom" colspan="1" rowspan="1">$42,288,991</td></tr></tbody></table>

See the full results [here](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit#gid=660291162).

### **Part III: Biosecurity BOTECs**

The most relevant statistics are the following:

*   I estimate that **public health spending** breaks down into:
    *   [**$9.8tn in total is spent on public health**](https://www.who.int/news/item/11-12-2023-who-calls-on-governments-for-urgent-action-to-invest-in-universal-health-coverage)**.**
    *   **$7.7tn of this is spent by governments (~79%).**
    *   **$130bn of this is spent by foundations (~1.3%).**
    *   The remainder likely comes from private spending and public-private partnerships that aren't independent foundations (e.g. universities).
*   I estimate that **biosecurity spending** breaks down into:
    *   **$1bn by foundations.**
    *   Assuming that the ratio of biosecurity to public health for governments is roughly 1%, **~$100bn is spent by governments on biosecurity.** However, I think this is very plausibly a large overestimate (e.g. by a factor of ~2).
        *   As a sanity check, the Biological Weapons Convention has a budget of around $1.8m a year and the much larger [Global Partnership Against the Spread of Weapons and Materials of Mass Destruction](https://en.wikipedia.org/wiki/Global_Partnership_Against_the_Spread_of_Weapons_and_Materials_of_Mass_Destruction) spent roughly [$2bn across 25 members in 2023](https://www.gpwmd.com/resources#ProgrammingAnnex).
    *   Assuming the ratio of government spending to total spending is 1:1.27 (given public health spending), then ~**$130bn** is spent on biosecurity globally.
*   Some further implications:
    *   Biosecurity philanthropy is **~0.8% of public health philanthropy** and ~**1% of what governments spend on philanthropy**.
    *   [**The US biodefense budget was approximately $24.3bn in 2023,**](https://councilonstrategicrisks.org/nolan/biodefense-budget-breakdown/) making the US government a considerable funder of biosecurity globally.
*   Where EA fits in:
    *   EA players represent ~**4% of the total biosecurity spend**.
    *   EAs are also interested in infectious disease surveillance, vaccine development, antimicrobial resistance, and developing broad-spectrum antivirals. However, EAs are likely not the majority in these spaces.
    *   My own impression (quite low-confidence!) is that spending on EA focus areas like technologies such as far-UVC, synthesis screening, and GCBR-specific concerns is likely dominated by EA. Spending on preventing bioterrorism, bioweapons, and policy advocacy with respect to biosecurity is also likely majority EA (but not necessarily exclusive).

See the full results [here](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit#gid=225525413).

**Takeaways**
=============

What can we conclude about biosecurity philanthropy and the biosecurity funding landscape from this? I would generally caution not too much. As stated in ‘[Why Does This Matter](#Why_Does_This_Matter_), I would caution against assuming that far-UVC interventions are substantially more neglected than early-detection interventions. I think such an assessment would require priors about the probability distribution of threat models, pathogen characteristics of concern, pandemic intensities, and all manner of practical considerations - but also far more detailed knowledge about how money is being spent in these areas than I have presented here.

I should also note that this is a loose, generally post-COVID, snapshot that poorly generalises to the past and likely does not predict the future. Many of these organisations expanded their biosecurity funding post-COVID and projects like [CEPI](https://cepi.net/) were founded. However, we should not assume that this status quo is at all fixed.

However, I do think the rough and order-of-magnitude estimates at least provided me with a number of useful and potentially decision-relevant insights. These are some of my thoughts:

*   Biosecurity philanthropy is probably a relatively small part of total biosecurity efforts, with the US government probably being the largest player. 
*   Biosecurity is a relatively small part of public health, both in philanthropy and government spending. While I have arbitrarily delineated between the two, however, I reiterate that many public health interventions are in practice targeting the same goals and may be relevant for mitigating GCBRs. I’m cautious that the assumption that global health is saturated risks neglecting opportunities to mitigate GCBRs through interventions that may be able to attract substantially more capital.
*   The biggest funders in biosecurity are the[Wellcome Trust](https://wellcome.org/), [Bill and Melinda Gates Foundation](https://www.gatesfoundation.org/), [CEPI](https://cepi.net/), and the [Novo Nordisk Foundation](https://www.novonordisk.com/). Accounting for uncertainty, Open Philanthropy is probably the fourth to eighth biggest funder of what I’ve considered ‘biosecurity’. I think it’s important for many to realise the importance of other players and funding sources in the landscape. This could mean many more funding opportunities EAs are systematically neglecting.
*   However, and though this view is even lower-confidence, I was struck by how little philanthropy has been directed towards tech development for biosecurity, mitigating GCBRs, and policy advocacy for a range of topics from regulating dual-use research of concern (DURC) to mitigating risks from bioweapons. I do think this may suggest some leveraged opportunities for funders and organisations to contribute a great deal.
*   Most biosecurity funding and philanthropy are US-based, although I note the Wellcome Trust is UK-based. My impression is there is very little money focusing on biosecurity in LMIC contexts, even though they will increasingly represent a larger share of GCBRs. Taking Africa, for example, I note [last year’s break-in to a BSL-3 lab in Sudan](https://www.reuters.com/world/africa/un-humanitarian-office-reduces-sudan-operations-due-fighting-2023-04-25/), [South Africa’s former history of developing bioweapons](https://www.nti.org/analysis/articles/south-africa-biological/), and [a rise in zoonotic transmission from Africa](https://www.afro.who.int/news/africa-63-jump-diseases-spread-animals-people-seen-last-decade).

However, for some of the reasons I’ve stated, I remain cautious about making inferences about what the absolute amount of money means in biosecurity, the relative neglectedness of interventions, and how well EA concerns about biosecurity are represented in biosecurity more generally. I think we’re quite a while away from being able to conduct rigorous, all-in, cost-effectiveness analyses of the benefits of different interventions. However, I’m also not sure it’s necessary to make progress on biosecurity.

The biosecurity field is filled with a number of technologies, strategies, and interventions that seem robustly good and will likely be neglected given the sheer heterogeneity of threat scenarios one could construct; contexts these threat scenarios could emerge in, and contingencies that affect the successes of various interventions. Many of these do not obviously rade off against each other and the vicissitudes of policy mean that we should expect policy windows to help drive our prioritisation.

However, I do think that considering the funding landscape can be useful for helping to better calibrate the state of play; identify what uniquely leveraged opportunities to contribute towards biosecurity might look like, and demonstrate just how much more we could be doing to ensure that the world is adequately protected from pandemics of all severities.

**Next Steps?**
===============

I think dozens of hours could be sunk into producing a higher-quality version of this that might be more decision-relevant for funders and organisations in biosecurity. However, I think this would have to be one of many research pieces required to be able to do effective, all-things-considered, assessments on what problems to work on in biosecurity and what interventions are the most promising.  Updating this or making it more rigorous is not currently a priority of mine, although I do intend at least for the next few months to incorporate feedback into my estimate and to correct any grave errors. Any and all feedback would be exceptionally welcome!

If you’re interested in taking this further in any capacity, please reach out to me directly, and I’d be happy to discuss next steps. 

Updates & Corrections
=====================

**\[05/04/2024\]**

Many thanks to [@Angelina Li](https://forum.effectivealtruism.org/users/angelina-li-1?mention=user) for catching an error in my calculation of philanthropy by area: I forgot to divide the total weight per org by the number of focus areas they have. I'm also very grateful for Angelina's revisions which I've added to the [calculations](https://docs.google.com/spreadsheets/d/1cIZpKtzLWhrq9U2SygBZcne89UlKBeQKUvwcyS8vlAo/edit?usp=sharing). I note the updated estimates below, though they are not drastically different from my original estimates (all most likely within the 95% confidence interval given high levels of uncertainty).

Fig. 2 - Biosecurity Philanthropy by Area

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/94c13dbbe69cd15c1db6aa4924264681ae2c9bf05d46593b.png)

The updated table is here:

Fig. 3 - Biosecurity Philanthropy by Area Table

| **Area** | **Weighted $** |
| --- | --- |
| AI-Bio | $1,472,633 |
| AMR | $114,129,071 |
| COVID-19 | $736,317 |
| Disease Surveillance | $204,696,010 |
| DURC | $2,208,950 |
| Fieldbuilding | $2,208,950 |
| Pathogenesis Research | $197,332,845 |
| GCBR Priority Areas | $37,552,146 |
| Health System Readiness | $11,044,749 |
| Laboratory Preparedness | $8,835,799 |
| PPE | $4,417,900 |
| Rapid Vaccines | $309,252,965 |
| Therapeutics | $142,109,101 |

Also made changes to acknowledgements.

**\[23/04/2024\]**

Many thanks to [@EU Policy Careers](https://forum.effectivealtruism.org/users/eu-policy-careers?mention=user) for flagging my misunderstanding of [this source](https://www.whitehouse.gov/briefing-room/statements-releases/2022/03/28/fact-sheet-the-biden-administrations-historic-investment-in-pandemic-preparedness-and-biodefense-in-the-fy-2023-presidents-budget/) which led me to conclude the US government spends ~$88bn on biosecurity. The actual answer, per CSR's estimates, [was ~$24.3bn in 2023](https://councilonstrategicrisks.org/nolan/biodefense-budget-breakdown/). I've corrected this in the article, and additionally make two notes:

1.  My estimate of ~$100bn being spent by governments on biosecurity was due to the assumption that the ratio of biosecurity to public health for governments is roughly 1%. But this anchors on the incorrect US statistic I used earlier and the figures for the UK. I note I rounded down from a US-UK average of 1.5% anyway, but this makes me more confident that this ratio is still an overestimate. I think $100bn is **effectively an upper bound**, and it could feasibly be half (if not more) this. I've tried to reflect this in the main passage of the text. I no longer have a good estimate of what % of the total biosecurity government spend the US constitutes. I've tried to reflect these updates in the main text.
2.  This formerly led me to conclude that "*the clearest way to shift large amounts of money towards biosecurity would be via US policy*". I still suspect this is true, but I am considerably less confident. I've removed it from the main text.