---
title: "An Overview of the AI Safety Funding Situation"
author: "Stephen McAleese"
date: 2023-07-12
url: https://forum.effectivealtruism.org/posts/XdhwXppfqrpPL2YDX/an-overview-of-the-ai-safety-funding-situation
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by funder-signals/funding-landscape-observations; McAleese map of AI safety funding (EA meta)"
---

*Note: this post was updated in January 2025 to reflect all available data from 2024.*

Introduction
============

AI safety is a field concerned with preventing negative outcomes from AI systems and ensuring that AI is beneficial to humanity. The field does research on problems such as the AI alignment problem which is the problem of designing AI systems that follow user intentions and behave in a desirable and beneficial way.

Understanding and solving AI safety problems may involve reading past research, producing new research in the form of papers or posts, running experiments with ML models, and so on. Producing research typically involves many different inputs such as research staff, compute, equipment, and office space.

These inputs all require funding and therefore funding is a crucial input for enabling or accelerating AI safety research. Securing funding is usually a prerequisite for starting or continuing AI safety research in industry, in an academic setting, or independently.

There are many barriers that could prevent people from working on AI safety. Funding is [one](https://www.lesswrong.com/posts/3eB7PsDCbuiNjaAnZ/why-i-m-not-yet-a-full-time-technical-alignment-researcher) of them. Even if someone is working on AI safety, a lack of funding may prevent them from [continuing](https://www.lesswrong.com/posts/HDXLTFnSndhpLj2XZ/i-m-leaving-ai-alignment-you-better-stay) to work on it.

It’s not [clear](https://www.lesswrong.com/posts/EjgfreeibTXRx9Ham/ten-levels-of-ai-alignment-difficulty) how hard AI safety problems like AI alignment are. But in any case, humanity is more likely to solve them if there are hundreds or thousands of brilliant minds working on them rather than [one](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities#Section_C_) guy. I would like there to be a large and thriving community of people working on AI safety and I think funding is an important prerequisite for enabling that.

The goal of this post is to give the reader a better understanding of funding opportunities in AI safety so that hopefully funding will be less of a barrier if they want to work on AI safety. The post starts with a high-level overview of the AI safety funding situation followed by a more in-depth description of various funding opportunities.

Past work
=========

To get an overview of AI safety spending, we first need to find out how much is spent on it per year. We can use past work as a prior and then use grant data to find a more accurate estimate.

*   [Changes in funding in the AI safety field](https://aiimpacts.org/changes-in-funding-in-the-ai-safety-field/) (2017) by the Center for Effective Altruism estimated the change in AI safety funding between 2014 - 2017. In 2017, the post estimated that total AI safety spending was about $9 million.
*   [How are resources in effective altruism allocated across issues?](https://80000hours.org/2021/08/effective-altruism-allocation-resources-cause-areas/) (2020) by 80,000 Hours estimated the amount of money spent by EA on AI safety in 2019. Using data from the Open Philanthropy grants database, the post says that EA spent about $40 million on AI safety globally in 2019.
*   In *The Precipice (2020)*, Toby Ord estimated that between $10 million and $50 million was spent on reducing AI risk in 2020.
*   [2021 AI Alignment Literature Review and Charity Comparison](https://forum.effectivealtruism.org/posts/BNQMyWGCNWDdP2WyG/2021-ai-alignment-literature-review-and-charity-comparison) is an in-depth review of AI safety organizations and grantmakers and has a lot of relevant information.

Overview of global AI safety funding
====================================

One way to estimate total global spending on AI safety is to aggregate the total donations of major AI safety funds such as Open Philanthropy.

It’s important to note that the definition of ‘AI safety’ I’m using is AI safety research that is focused on reducing risks from advanced AI (AGI) such as existential risks which is the type of AI safety research I think is more neglected and important than other research in the long term. Therefore my analysis will be focused on EA funds and top AI labs and I don’t intend to measure investment on near-term AI safety concerns such as effects on the labor market, fairness, privacy, ethics, disinformation, etc.

A high-level overview of global AI safety funding is shown in the following bar chart which was created in Google Sheets ([link](https://docs.google.com/spreadsheets/d/1C_QDlzZynG00u7XVHy91Tii9qOl-dk8KtxiYcrd_ZYc/edit?usp=sharing)) and is based on data from analyzing grant databases from Open Philanthropy and other funds (Colab notebook [link](https://drive.google.com/file/d/1zYOlgh3XYb6lyQqS0OdLuMJoCb2i_SEW/view?usp=sharing)).

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/a392e164a52fd85c6fa8cacf12e7eafd067e6e30218a94a8.png)

Figure: total AI safety spending by major AI safety funds from 2014 - 2024

Some comments on the bar chart above:

*   The reason why the Open Phil grants seem to vary a lot year-by-year is that Open Phil often makes large multi-year grants (e.g. a $11m [grant](https://www.openphilanthropy.org/grants/uc-berkeley-center-for-human-compatible-artificial-intelligence-2021/) to CHAI over 5 years in 2021).
*   The average annual increase in funding in the chart is about $13 million.
*   There is some overlap between Open Philanthropy and Long-Term Future Fund (LTFF) because Open Phil often donates money to LTFF and about half of LTFF funding comes from Open Phil. In the chart above, I excluded the grants from Open Phil to LTFF from the Open Phil data to avoid double counting.
*   The chart mainly includes AI safety donations by major AI safety funds. Other sources of funding such as smaller funds, academic grants, individual donations, and spending by industry labs are not included in the chart so the estimates are probably conservative. More on this below.
*   The FTX Future Fund amount only includes grants up to August 2022 and could be an overestimate if many of these grants were not fulfilled. More on this below.
*   The large 'Other' amounts are due to large cryptocurrency donations such as the one to [MIRI](https://openbook.fyi/donations/210941) ($15M) and [FLI](https://futureoflife.org/grantmaking/fli-announces-grants-program-for-existential-risk-reduction/) ($25M).
*   The graph doesn't include the enormous $665M cryptocurrency donation [received](https://www.politico.com/news/2024/03/25/a-665m-crypto-war-chest-roils-ai-safety-fight-00148621) by FLI in 2021.

Descriptions of major AI safety funds
=====================================

Open Philanthropy (Open Phil)
-----------------------------

[Open Philanthropy](https://en.wikipedia.org/wiki/Open_Philanthropy) (Open Phil) is a grant-making and research foundation that was founded in 2017 by Holden Karnofsky, Dustin Moskovitz, and Cari Tuna. Its primary funder is Dustin Moskovitz who made his fortune by founding Facebook and Asana and has a net worth of over $12 billion. Open Phil funds [many](https://80000hours.org/2021/08/effective-altruism-allocation-resources-cause-areas/) different cause areas such as global health and development, farm animal welfare, Effective Altruism community growth, biosecurity, and AI safety research.

Since it was founded in 2017, Open Phil has donated about $2.8 billion of which about $336 million was spent on AI safety (~12%). The median Open Phil AI safety grant is about $257k and the average AI safety grant is $1.67 million. In 2023, Open Phil spent about $46 million on AI safety making it probably the largest funder of AI safety in the world.

Open Phil has historically made medium-sized to large grants to organizations such as Epoch AI, the Alignment Research Center, the Center for AI Safety, Redwood Research, and the Machine Intelligence Research Institute (MIRI). Open Phil also offers [grants](https://www.openphilanthropy.org/career-development-and-transition-funding/) for individuals who want to make a career transition towards working on AI safety.

Open Phil’s past grants are publicly available in their grant [database](https://www.openphilanthropy.org/grants/) which is what I used to create the bar chart below.

Examples of Open Phil AI safety grants in 2023:

*   Epoch — General Support (2023), April 2023, $6.9m
*   Conjecture — SERI MATS (2023), April 2023, $245k
*   Center for AI Safety — General Support (2023), April 2023, $4.0m
*   FAR AI — General Support (2023), July 2023, $460k
*   Eleuther AI — Interpretability Research, November 2023, $2.6m

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/d005fe154aa86525540e259795117fc79d2bded9cc36f236.png)

Open Philanthropy AI safety spending 2015 - 2023

Survival and Flourishing Fund (SFF)
-----------------------------------

[SFF](https://survivalandflourishing.fund/) is the second largest funder of AI safety after Open Phil. SFF is mainly funded by Jaan Tallinn who has a net worth of about $900 million. SFF has donated about $53 million to AI safety projects since it started grant-making in 2019. SFF usually has two funding rounds per year. Past SFF grants are available on the SFF [website](https://survivalandflourishing.fund/).

SFF spent about $30 million on AI safety in 2023 and has funded well-known organizations and projects such as ARC Evals, the Center for the Governance of AI, FAR AI, Ought, and Redwood Research.

Like Open Phil, SFF also tends to make medium to large grants to AI safety organizations. The median SFF AI safety grant is $100k and the average AI safety grant is $274k.

Examples of SFF grants in 2023:

*   Campaign for Responsible AI, $250k
*   AI Impacts, $341k
*   Apollo Research, $882k
*   Alignment Research Center (Evals Team), $325k

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/5d595782eb82e061349341b661820d65a5d5ce44c6da7c46.png)

Survival and Flourishing Fund annual AI safety spending 2019 - 2023

FTX Future Fund
---------------

The [FTX Future Fund](https://forum.effectivealtruism.org/topics/future-fund) was a fund created in February 2022 but it was shut down just a few months later in November 2022 because FTX went bankrupt. From February to June of 2022, the Future Fund [donated](https://forum.effectivealtruism.org/posts/paMYXYFYbbjpdjgbt/future-fund-june-2022-update) about $20 million to AI safety projects.

Since FTX filed for bankruptcy on 11 November 2022, many [donations](https://forum.effectivealtruism.org/posts/o8B9kCkwteSqZg9zc/thoughts-on-legal-concerns-surrounding-the-ftx-situation) after August 11 2022 had to be returned as part of the bankruptcy process so I didn't include donations made after 1 August 2022 in the total.

Based on the Future Fund grants [database](https://ftxfuturefund.org.cach3.com/index.html%3Fp=758.html?_area_of_interest=artificial-intelligence), I estimate that the Future Fund donated about $32 million to AI safety projects from February to August 2022.

Examples of Future Fund grants from February to August 2022:

*   Ought - Building Elicit, $5m
*   Lionel Levine, Cornell University - Alignment theory research, $1.5m
*   ML Safety Scholars Program - General Support, $490k
*   AI Impacts - support for the 'When Will AI Exceed Human Performance?' survey, $250k
*   Adversarial Robustness Prizes at ECCV, $30k

The Future Fund website and grant database were taken down but are still available [here](https://ftxfuturefund.org.cach3.com/index.html%3Fp=758.html?_area_of_interest=artificial-intelligence).

Long-Term Future Fund (LTFF)
----------------------------

[LTFF](https://funds.effectivealtruism.org/funds/far-future) is one of the four EA funds along with the Global Development Fund, Animal Welfare Fund, and EA Infrastructure Fund. LTFF makes grants for longtermist projects related to cause areas like pandemics, existential risk analysis, and AI safety.

Unlike the other funds mentioned before, LTFF tends to make smaller grants. Whereas the median Open Phil AI safety grant is $257k, the median LTFF AI safety grant is just $25k which makes it suitable for smaller projects such as funding individuals or small groups for upskilling, career transitions, or [independent research](https://www.lesswrong.com/posts/P3Yt66Wh5g7SbkKuT/how-to-get-into-independent-research-on-alignment-agency).

LTFF is also not a ‘primary’ fund like the other funds given that it is often funded by other funds. For example, LTFF has received significant donations from Open Phil and SFF.

According to the EA funds [sources](https://funds.effectivealtruism.org/stats/funding-sources) page, about 40% of LTFF’s funding came from Open Phil in 2022, about 50% came from direct donations and the rest came from other institutional funds. In 2023, LTFF [received](https://www.openphilanthropy.org/grants/effective-altruism-funds-long-term-future-and-infrastructure-fund-regranting/) $3.1 million from Open Philanthropy.

LTFF has spent about $20 million in total since it started grant-making in 2017. Of that amount, about $10 million was related to AI safety. In 2023, LTFF [granted](https://mailchi.mp/b371a19d448e/long-term-future-funds-inaugural-newsletter?e=8d3fae542c) $6.67 million in total. I estimate that about 2/3 of the grants are related to AI safety which means LTFF spent about $4.3m spent on AI safety in 2023. LTFF plans to spend $8.4 million in total in 2024 which will probably result in over $5 million being spent on AI safety.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/70ccc1103f43c93b53759d6957bb63ea3a8a90262ef62f50.png)

Figure: Long-Term Future Fund annual AI safety spending 2017 - 2023

Other sources of funding
------------------------

### Foundation Model Taskforce

On 24 April 2023, the UK government announced £100 million in funding for a new foundation model taskforce which will [work on](https://www.lesswrong.com/posts/YAgQysWqoBJ7eA7Np/priorities-for-the-uk-foundation-models-taskforce) communication related to AI risk, international coordination, and AI regulation.

### Frontier Model Forum AI safety fund

On 25 October 2023, the Frontier Model Forum, an organization of industry labs including Anthropic, Google, Microsoft, and OpenAI, announced $10 million in AI safety funding. The primary focus of the new fund will be supporting the development of new red-teaming and evaluation techniques.

### Superalignment Fast Grants

On 14 December 2023, OpenAI [announced](https://openai.com/blog/superalignment-fast-grants) $10 million in grants to support technical research on AI safety. The new fund aims to fund AI safety research directions such as weak-to-strong generalization, interpretability, and scalable oversight. The funding is available to a wide variety of different people including academic labs, grad students, nonprofits, and individual researchers.

### Vitalik Buterin AI Existential Safety Fellowship

The Vitalik Buterin AI Existential Safety [Fellowship](https://www.lesswrong.com/posts/4Zk53JRaot2NKaafs/welcome-to-apply-the-2024-vitalik-buterin-fellowships-in-ai) is associated with the Future of Life Institute (FLI) and provides funding to support PhD students and postdoctoral researchers interested in doing existential AI safety research. The fund also provides funding for travel support.

### Giving What We Can (GWWC)

[GWWC](https://www.givingwhatwecan.org/about-us/members) is a community of over 8,000 people who have committed to donating at least 10% of their lifetime income to charity. In 2021, GWWC members [donated](https://forum.effectivealtruism.org/posts/yp4uwxEwamc5LkDAB/gwwc-has-ambitious-plans-from-2022-onwards-we-re-hiring#2__Direct_impact_of_money_moved) $22.7 million to charity. About [10%](https://forum.effectivealtruism.org/posts/EipE75vsDuD7bdJar/gwwc-s-2020-2022-impact-evaluation-executive-summary#We_found_an_increase_in_recorded_GWWC_Pledge_donations_with_time) of those donations go to longtermist charities (~$2.27m) so I estimate that GWWC contributes about $1 million to AI safety per year.

GWWC lists three different longtermist funds to donate to including the [Long-Term Future Fund](https://funds.effectivealtruism.org/funds/far-future) (LTFF), [Patient Philanthropy Fund](https://forum.effectivealtruism.org/posts/HYRpeSQx46u278vYK/announcing-the-patient-philanthropy-fund), and [Longtermism Fund](https://forum.effectivealtruism.org/posts/f7qAfcKArzYrBG7RB/announcing-the-longtermism-fund). Though in addition to GWWC donations, these funds also receive donations from larger primary funds such as [Open Phil](https://www.openphilanthropy.org/grants/?q=&organization-name=longview-philanthropy).

### Nonlinear Fund

The [Nonlinear Fund](https://www.nonlinear.org/) is for projects related to reducing existential risk from AI. They have created a project named [Nonlinear Network](https://nonlinearnetwork.org/) which allows people looking for AI safety funding to apply for multiple funds at the same time. Nonlinear Fund is also the organization behind [Superlinear](https://www.super-linear.org/) which offers financial prizes for AI safety challenges.

### Lightspeed Grants

[Lightspeed Grants](https://lightspeedgrants.org/) is a longtermist grant-making organization created in 2022 that aims to distribute $5 million in its initial funding round. The primary funder of the first round is Jaan Tallinn (Jaan is also the primary funder of SFF). The grants for Lightspeed Grants are included in the Survival and Flourishing Fund total above.

### For-profit companies

Many organizations working on AI safety are for-profit companies that use profits or investments to fund their research rather than philanthropic funding. For example, OpenAI, Anthropic, DeepMind, and Conjecture are for-profit companies that have AI safety teams.

Conjecture was founded in 2022 and has [received](https://www.crunchbase.com/organization/conjecture) $25 million in venture capital funding so far. Anthropic was founded in 2021 and has so far [received](https://www.crunchbase.com/organization/anthropic/company_financials) over $7 billion in venture capital funding. Google DeepMind (originally DeepMind) was founded in 2012 and is now a profitable company with a [revenue](https://venturebeat.com/ai/ai-lab-deepmind-becomes-profitable-and-bolsters-relationship-with-google/) of about $1 billion per year and similar expenses. OpenAI was founded in 2016 and is probably the best-funded AI startup in the world after its partner organization Microsoft agreed to [invest](https://www.cnbc.com/2023/01/10/microsoft-to-invest-10-billion-in-chatgpt-creator-openai-report-says.html) $10 billion in it in 2023. OpenAI has [received](https://www.crunchbase.com/organization/openai) over $11 billion in venture capital funding so far.

We can calculate how much funding these companies are contributing to AI safety by estimating how much it would counterfactually cost to fund their AI safety teams if they were non-profits like Redwood Research or MIRI.

Because of various expenses such as payroll taxes, health insurance, and retirement benefits, the true cost of an employee is typically about 30% [higher](https://www.sba.gov/blog/how-much-does-employee-cost-you) than the cost of an employee’s gross salary. Then there are other expenses such as office space, travel, events, compute, and so on. Based on the tax returns of [MIRI](https://projects.propublica.org/nonprofits/organizations/582565917/202223199349330387/full) and [Redwood Research](https://projects.propublica.org/nonprofits/organizations/871702255/202203149349303980/full), the ratio of total expenses to wages is 1.6 and 3.3 respectively so I think a good rule of thumb is that an employee’s cost to an organization is about twice their gross salary.

To calculate the total financial contribution of an organization to AI safety research, we can multiply the size of the AI safety team by the average wage of AI safety researchers in the company and the 2X multiplier.

I created a [Guesstimate](https://www.getguesstimate.com/models/22756) model to calculate the combined contribution of the four companies. The model is also summarized in the following table.

<table><tbody><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Company name</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Number of employees&nbsp;<span class="footnote-reference" data-footnote-reference="" data-footnote-index="1" data-footnote-id="fjilm93blz" role="doc-noteref" id="fnreffjilm93blz"><sup><a href="#fnfjilm93blz">[1]</a></sup></span></td><td style="border-color:#000000;padding:5pt;vertical-align:top">AI safety team size (estimated)</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Median gross salary (estimated)</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Total cost per employee (estimated)</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Total funding contribution (estimated)</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">DeepMind</td><td style="border-color:#000000;padding:5pt;vertical-align:top">1722</td><td style="border-color:#000000;padding:5pt;vertical-align:top">5-20</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$200k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$400k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$1.6-15m</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">OpenAI</td><td style="border-color:#000000;padding:5pt;vertical-align:top">1268</td><td style="border-color:#000000;padding:5pt;vertical-align:top">5-20</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$290k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$600k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$2.9-20m</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Anthropic</td><td style="border-color:#000000;padding:5pt;vertical-align:top">164</td><td style="border-color:#000000;padding:5pt;vertical-align:top">10-40</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$360k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$600k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$6.2-32m</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Conjecture</td><td style="border-color:#000000;padding:5pt;vertical-align:top">21</td><td style="border-color:#000000;padding:5pt;vertical-align:top">5-15</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$150k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$300k</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$1.2-5.5m</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Total</td><td style="border-color:#000000;padding:5pt;vertical-align:top">&nbsp;</td><td style="border-color:#000000;padding:5pt;vertical-align:top">&nbsp;</td><td style="border-color:#000000;padding:5pt;vertical-align:top">&nbsp;</td><td style="border-color:#000000;padding:5pt;vertical-align:top">&nbsp;</td><td style="border-color:#000000;padding:5pt;vertical-align:top">$32m</td></tr></tbody></table>

The Guesstimate model’s estimate is $32 million per year (range: $19 - 54 million).

This figure seems intuitively plausible because both for-profit and non-profit organizations have made significant contributions to AI safety. Non-profits such as Redwood Research, MIRI, ARC, and the Center for AI Safety have made many contributions to AI safety research. But so have for-profit AI companies. For example, OpenAI invented [RLHF](https://openai.com/research/learning-from-human-preferences), Anthropic has made significant [contributions](https://transformer-circuits.pub/2022/toy_model/index.html) to interpretability, DeepMind has done work on [goal misgeneralization](https://deepmindsafetyresearch.medium.com/goal-misgeneralisation-why-correct-specifications-arent-enough-for-correct-goals-cf96ebc60924), and the popular concept of viewing language models as [simulators](https://www.conjecture.dev/research) was invented at Conjecture. This estimate is probably conservative because I’d imagine that for-profit companies such as OpenAI spend much more on compute than non-profits like Redwood Research.

### Academic research

The academic contribution to AI safety could be [large](https://forum.effectivealtruism.org/posts/8ErtxW7FRPGMtDqJy/the-academic-contribution-to-ai-safety-seems-large). There are over 200 researchers on Google Scholar that have the ‘AI Safety’ tag on their profile (though many of these people work at companies or non-profits rather than academia).

There are several academic professors and research groups working on AI safety such as:

*   [David Krueger](https://www.davidscottkrueger.com/) (University of Cambridge)
*   [Sam Bowman](https://wp.nyu.edu/arg/) (NYU)
*   [Jacob Steinhardt](https://jsteinhardt.stat.berkeley.edu/) (UC Berkeley)
*   The [Algorithmic Alignment Group](https://algorithmicalignment.csail.mit.edu/) (MIT)
*   [Foundations of Cooperative AI Lab](https://www.cs.cmu.edu/~focal/) (CMU)
*   The [Alignment of Complex Systems Research Group](https://acsresearch.org/) (Charles University, Prague)

Many different countries fund academic research. For the sake of brevity, I’ll focus on academic funding in the US and the UK below.

**Academic research in the US**

About 40% of basic scientific research is [funded](https://ncses.nsf.gov/pubs/nsb20201/u-s-r-d-performance-and-funding) by the US federal government (which often takes the form of grants to universities) and the National Science Foundation (NSF) funds about 25% of all federally funded basic research. It has an annual budget of about $8 billion for all research and $1 billion for computer science [research](https://www.nsf.gov/about/congress/119/highlights/cu22.jsp). NSF also offers the Graduate Research Fellowship Program ([NSF-GRFP](https://en.wikipedia.org/wiki/NSF-GRFP)) which provides funding for master’s or doctoral study to about 2,000 US students every year (worth a total of ~$98 million). The acceptance rate of the GRFP is about 16%.

NSF has [announced](https://www.lesswrong.com/posts/jwe6jpubuMiuSRqff/usd20-million-in-nsf-grants-for-safety-research) that it will spend $10 million on AI safety research in 2023 and 2024 (20 million in total) though $5 [million](https://www.openphilanthropy.org/grants/national-science-foundation-safe-learning-enabled-systems/) has come from Open Philanthropy.

A description of the program:

*“While traditional machine learning systems are evaluated pointwise with respect to a fixed test set, such static coverage provides only limited assurance when exposed to unprecedented conditions in high-stakes operating environments … Safety also requires resilience to “unknown unknowns”, which necessitates improved methods for monitoring … In some instances, safety may further require new methods for reverse-engineering, inspecting, and interpreting the internal logic of learned models to identify unexpected behavior that could not be found by black-box testing alone.”*

From reading the synopsis, my understanding is that it’s focused on research in AI safety areas such as adversarial robustness, anomaly detection, interpretability, and maybe deceptive alignment.

According to the grant description, grant proposals may be submitted by Institutions of Higher Education (e.g. university research groups) or non-profit, non-academic organizations located in the US (e.g. Redwood Research).

**Academic research in the UK**

In the UK, around [half](https://www.ukri.org/wp-content/uploads/2022/08/UKRI-050822-FundingExplainer-HowWereFunded.pdf) of UK government expenditure on R&D is funded by UK Research and Innovation (UKRI). Every year UKRI allocates approximately £1.5 billion (~$1.9b) for research grants from its total budget of around £8 billion (~$10b). UKRI is composed of nine research councils. One of them is the Engineering and Physical Sciences Research Council which funds research in areas such as mathematics, physics, chemistry, computer science, and artificial intelligence and has a [budget](https://en.wikipedia.org/wiki/Engineering_and_Physical_Sciences_Research_Council) of around £1 billion (~$1.3b) per year.

In 2022, UKRI announced a £117 million (~$150m) [grant](https://www.ukri.org/opportunity/ukri-centres-for-doctoral-training-in-artificial-intelligence/) for UK Centres for Doctoral Training in Artificial Intelligence. The grant allows principal investigators of UK research organizations such as universities to apply for funding for fully-funded four-year PhD studentships which are typically 4 years in the UK. The grant is intended to support 10-15 CDTs and each CDT is expected to support at least 50 students so the grant should support at least 500 students.

The scope of the grant covers AI research in priority areas such as using AI to improve scientific productivity, health, the environment, agriculture, defense, creative industries, and responsible and trustworthy AI.

For the responsible and trustworthy AI section, it says, *“The expanding capabilities and range of applications of AI necessitate new research into responsible approaches to AI that are secure, safe, reliable and that operate in a way we understand, trust, and can investigate if they fail.”*

### The financial contribution of academia to AI safety

This [post](https://forum.effectivealtruism.org/posts/8ErtxW7FRPGMtDqJy/the-academic-contribution-to-ai-safety-seems-large) uses Fermi estimates to estimate that the contribution of academia to AI safety is roughly equivalent to EA’s contribution to AI safety. The argument is that academia is huge and does a lot of AI safety-adjacent research on topics such as transparency, robustness, and safe RL. Therefore, even if this work is strongly discounted because it’s only tangentially related to AGI safety, the discounted contribution is still large.

It’s challenging to estimate the financial contribution of academia to AI safety because the total depends a lot on what you measure. For example, the academic contribution to upskilling seems large given that universities offer degrees in subjects like math and computer science and often have large, expensive campuses and other resources that are useful for research. These factors are relevant because some of EA spending on AI safety involves spending on upskilling and infrastructure.

But I’m going to be more conservative and focus only on actual AI safety research that is done by academics and not funded by EA funds such as Open Phil. For example, someone might do a PhD with a focus on AI safety that is funded by the government.

Although government organizations like NSF in the US spend a lot on research, I’m pretty sure that most of the academic AI safety groups mentioned above are funded by EA funds like Open Phil (e.g. [CHAI](https://forum.effectivealtruism.org/topics/center-for-human-compatible-artificial-intelligence#:~:text=provably%20beneficial%20systems.%22-,Funding,%24120%2C000%20from%20Effective%20Altruism%20Funds.)) so the financial contribution of (non-EA) academic funding to AI safety is not as large as you might think.

I made a guesstimate [model](https://www.getguesstimate.com/models/22755) to estimate the financial contribution of academic funding to AI safety. My lower bound estimate is $220k which includes only EA academics and my upper bound is $64m which includes the non-EA contributions to AI safety.

Based on this information, my best guest conservative estimate of the financial contribution of academia to AI safety research is about $1 million per year. Combined with the NSF grant, the total is $11 million per year for 2023.

### Manifund

Manifund is a crowd-funding platform that often funds projects related to AI safety.

### Other individual donors

*   In 2015, Elon Musk [donated](https://futureoflife.org/fli-projects/elon-musk-donates-10m-to-our-research-program) $10 million to the Future of Life Institute.
*   In 2021, Vitalik Buterin [donated](https://intelligence.org/2021/05/13/two-major-donations/) $4 million to MIRI.
*   In 2021, an anonymous crypto [donor](https://openbook.fyi/org/Anonymous%20MIRI%20cryptocurrency%20donor) donated $15.6 million to MIRI.
*   MIRI has received [donations](https://intelligence.org/topcontributors/) from many other individuals in the past.

### Summary of other sources of funding

Summary of other sources of funding:

*   **Frontier Model Forum AI safety fund:** $10m.
*   **Superalignment fast grants:** $10m.
*   **GWWC: **~$1m per year.
*   **For-profit companies:** ~$32m per year.
*   **Academic research: ~**$1m normally, $11m per year in 2023 because of the NSF grant.
*   **Individual donors**: probably at least $1m per year.

Q&A
===

This section is for me to attempt to answer some informal questions on AI safety funding.

How do I work on AI safety?
---------------------------

I think there are three main ways to work on AI safety:

1.  **Get a job in a for-profit or non-profit organization.** I think the most straightforward way to work on AI safety is to get a job working on AI safety in an organization. OpenAI, DeepMind, Redwood Research, FHI, and MIRI are some examples of organizations working on technical AI safety, and organizations such as Epoch AI, the Center for the Governance of AI, and the Centre for Security and Emerging Technology (CSET) work on non-technical AI safety areas like AI governance. Apart from for-profit and non-profit organizations, there may also be opportunities to work on AI safety in government institutions.
2.  **Independent research. **Another path to working on AI safety is to participate in a training program like AI Safety Camp or SERI MATS. Participants do research under a mentor and may apply for grants from funds such as LTFF to continue doing independent research.
3.  **Academic research. **Another option is to get a postdoctoral degree such as a master’s or PhD degree. Usually, master’s degrees don’t offer stipends but most PhD degrees do. Postdoctoral researchers and professors are also paid to do research by universities.

If you are not interested in working directly on AI safety or if changing your career path seems too risky, another option is to earn to give. Giving What We Can makes it easy to create regular donations to funds such as the Long-Term Future Fund (LTFF).

What are my chances of getting funded?
--------------------------------------

LTFF funded about 19% of proposals in this 2021 funding [round](https://forum.effectivealtruism.org/posts/nLxpFeEs6kAdgjRWz/the-long-term-future-fund-has-room-for-more-funding-right) and 54% in this 2021 funding [round](https://funds.effectivealtruism.org/payouts/december-2021-long-term-future-fund-grants) so it seems like about a quarter of proposals are funded by LTFF. Though the (now non-existent) FTX Future Fund seems to have had an acceptance [rate](https://forum.effectivealtruism.org/posts/paMYXYFYbbjpdjgbt/future-fund-june-2022-update) of just 4%.

Is AI safety talent or funding constrained?
-------------------------------------------

This question does not have a definite answer because it depends on how you define 'talent'. The higher the talent bar is, the more talent-constrained over funding-constrained the field is, and vice-versa.

This 80,000 [post](https://80000hours.org/2015/11/why-you-should-focus-more-on-talent-gaps-not-funding-gaps/) argues that AI safety is probably more constrained by talent than funding. The reason why is that whereas money can be raised quickly, it’s not as easy to fill positions with talented researchers and training takes time. Talent in mentorship or leadership positions is probably even more scarce.

The counterargument is that there are a lot of talented people in EA and that increasing funding would provide more opportunities for training resulting in more talented people. Using that argument, a lack of talent could be caused by a lack of training opportunities which could be caused by a lack of funding.

What may seem like a funding problem could really be a talent problem: often donors will only give money if they see promising research projects and see that progress is tractable. And talent problems could really be funding problems: there may not be enough money to fund training programs (e.g. SERI MATS).

Another possibility is that AI safety is leadership-constrained. For example, the SERI MATS 2023 summer program received 460  applicants and only about 60 were accepted (13%) so it doesn't seem like there was a lack of talent and SERI MATS costs less than $1 million so surely there was enough money for it. But there probably aren't that many people who could be SERI MATS mentors or create a program like it so my guess is that good leadership and experienced researchers are scarce. This point has been emphasized by  Nonlinear.

Another way to answer the question is to ask whether the field would be better off with one more talented person or the salary of that person (e.g. $100,000). If there were lots of talent and not enough funding, choosing the money would be better because it would make it possible to quickly hire another talented researcher. If there were few talented researchers and lots of funding, the talented researcher would be a better choice because otherwise the money would just not be spent.

My overall view is that AI safety is to some extent constrained by all three: more funding would increase talent via more or larger training programs or higher salaries, more talent would attract more funding via credible and tractable research directions and better leadership would benefit both by creating new organizations that could soak up more talent and funding.

[^fjilm93blz]: Source: LinkedIn.