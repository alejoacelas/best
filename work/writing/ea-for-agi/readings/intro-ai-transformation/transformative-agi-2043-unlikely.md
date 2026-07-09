---
title: "Transformative AGI by 2043 is <1% likely"
author: "Ted Sanders"
date: 2023-06-06
url: https://forum.effectivealtruism.org/posts/ARkbWch5RMsj6xP5p/transformative-agi-by-2043-is-less-than-1-likely
fetched: 2026-07-09
via: forum-graphql
topic: "intro-ai-transformation"
note: "stage6 scour: the best critic of the compressed-transition thesis — Sanders & Allyn-Feuer decompose to 0.4% TAGI-by-2043"
---

([Crossposted](https://www.lesswrong.com/posts/DgzdLzDGsqoRXhCK7/transformative-agi-by-2043-is-less-than-1-likely) to LessWrong)

Abstract
--------

The linked paper is our submission to the [Open Philanthropy AI Worldviews Contest](https://www.openphilanthropy.org/open-philanthropy-ai-worldviews-contest/). In it, we estimate the likelihood of transformative artificial general intelligence (AGI) by 2043 and find it to be <1%.

Specifically, we argue:

*   **The bar is high:** AGI as defined by the contest—something like AI that can perform nearly all valuable tasks at human cost or less—which we will call transformative AGI is a much higher bar than merely massive progress in AI, or even the unambiguous attainment of expensive superhuman AGI or cheap but uneven AGI.
*   **Many steps are needed:** The probability of transformative AGI by 2043 can be decomposed as the joint probability of a number of necessary steps, which we group into categories of software, hardware, and sociopolitical factors.
*   **No step is guaranteed:** For each step, we estimate a probability of success by 2043, conditional on prior steps being achieved. Many steps are quite constrained by the short timeline, and our estimates range from 16% to 95%.
*   **Therefore, the odds are low:** Multiplying the cascading conditional probabilities together, we estimate that transformative AGI by 2043 is **0.4% likely**. Reaching >10% seems to require probabilities that feel unreasonably high, and even 3% seems unlikely.

Thoughtfully applying the cascading conditional probability approach to this question yields lower probability values than is often supposed. This framework helps enumerate the many future scenarios where humanity makes partial but incomplete progress toward transformative AGI.

Executive summary
-----------------

For AGI to do most human work for <$25/hr by 2043, many things must happen.

We forecast cascading conditional probabilities for 10 necessary events, and find they multiply to an overall likelihood of 0.4%:

<table><tbody><tr><td><h3>Event</h3></td><td><h3>Forecast</h3><p>by 2043 or TAGI,<br>conditional on<br>prior steps</p></td></tr><tr><td>We invent algorithms for transformative AGI</td><td>60%</td></tr><tr><td>We invent a way for AGIs to learn faster than humans</td><td>40%</td></tr><tr><td>AGI inference costs drop below $25/hr (per human equivalent)</td><td>16%</td></tr><tr><td>We invent and scale cheap, quality robots</td><td>60%</td></tr><tr><td>We massively scale production of chips and power</td><td>46%</td></tr><tr><td>We avoid derailment by human regulation</td><td>70%</td></tr><tr><td>We avoid derailment by AI-caused delay</td><td>90%</td></tr><tr><td>We avoid derailment from wars (e.g., China invades Taiwan)</td><td>70%</td></tr><tr><td>We avoid derailment from pandemics</td><td>90%</td></tr><tr><td>We avoid derailment from severe depressions</td><td>95%</td></tr><tr><td><strong>Joint odds</strong></td><td><strong>0.4%</strong></td></tr></tbody></table>

If you think our estimates are pessimistic, feel free to substitute your own [here](https://www.tedsanders.com/agi-forecaster/). You’ll find it difficult to arrive at odds above 10%.

Of course, the difficulty is by construction. Any framework that multiplies ten probabilities together is almost fated to produce low odds.

So a good skeptic must ask: Is our framework fair?

There are two possible errors to beware of:

*   Did we neglect possible parallel paths to transformative AGI?
*   Did we hew toward unconditional probabilities rather than fully conditional probabilities?

We believe we are innocent of both sins.

Regarding failing to model parallel disjunctive paths:

*   We have chosen generic steps that don’t make rigid assumptions about the particular algorithms, requirements, or timelines of AGI technology
*   One opinionated claim we do make is that transformative AGI by 2043 will almost certainly be run on semiconductor transistors powered by electricity and built in capital-intensive fabs, and we spend many pages justifying this belief

Regarding failing to really grapple with conditional probabilities:

*   Our conditional probabilities are, in some cases, quite different from our unconditional probabilities. In particular, we assume that a world on track to transformative AGI will…
    *   Construct semiconductor fabs and power plants at a far faster pace than today (our unconditional probability is *substantially *lower)
    *   Have invented very cheap and efficient chips by today’s standards (our unconditional probability is *substantially *lower)
    *   Have *higher* risks of disruption by regulation
    *   Have *higher *risks of disruption by war
    *   Have *lower *risks of disruption by natural pandemic
    *   Have *higher* risks of disruption by engineered pandemic

Therefore, for the reasons above—namely, that transformative AGI is a very high bar (far higher than “mere” AGI) and many uncertain events must jointly occur—we are persuaded that the likelihood of transformative AGI by 2043 is <1%, a much lower number than we otherwise intuit. We nonetheless anticipate stunning advancements in AI over the next 20 years, and forecast substantially higher likelihoods of transformative AGI beyond 2043.

### **For details, read** [**the full paper**](https://arxiv.org/abs/2306.02519)**.**

About the authors
-----------------

This essay is jointly authored by Ari Allyn-Feuer and Ted Sanders. Below, we share our areas of expertise and track records of forecasting. Of course, credentials are no guarantee of accuracy. We share them not to appeal to our authority (plenty of experts are wrong), but to suggest that if it sounds like we’ve said something obviously wrong, it may merit a second look (or at least a compassionate understanding that not every argument can be explicitly addressed in an essay trying not to become a book).

### Ari Allyn-Feuer

**Areas of expertise**

I am a decent expert in the complexity of biology and using computers to understand biology.

*   I earned a Ph.D. in Bioinformatics at the University of Michigan, where I spent years using ML methods to model the relationships between the genome, epigenome, and cellular and organismal functions. At graduation I had offers to work in the AI departments of three large pharmaceutical and biotechnology companies, plus a biological software company.
*   I have spent the last five years as an AI Engineer, later Product Manager, now Director of AI Product, in the AI department of GSK, an industry-leading AI group which uses cutting edge methods and hardware (including Cerebras units and work with quantum computing), is connected with leading academics in AI and the epigenome, and is particularly engaged in reinforcement learning research.

**Track record of forecasting**

While I don’t have Ted’s explicit formal credentials as a forecaster, I’ve issued some pretty important public correctives of then-dominant narratives:

*   I said in print on January 24, 2020 that due to its observed properties, the then-unnamed novel coronavirus spreading in Wuhan, China, had a significant chance of promptly going pandemic and killing tens of millions of humans. It subsequently did.
*   I said in print in June 2020 that it was an odds-on favorite for mRNA and adenovirus COVID-19 vaccines to prove highly effective and be deployed at scale in late 2020. They subsequently did and were.
*   I said in print in 2013 when the Hyperloop proposal was released that the technical approach of air bearings in overland vacuum tubes on scavenged rights of way wouldn’t work. Subsequently, despite having insisted they would work and spent millions of dollars on them, every Hyperloop company abandoned all three of these elements, and development of Hyperloops has largely ceased.
*   I said in print in 2016 that Level 4 self-driving cars would not be commercialized or near commercialization by 2021 due to the long tail of unusual situations, when several major car companies said they would. They subsequently were not.
*   I used my entire net worth and borrowing capacity to buy an abandoned mansion in 2011, and sold it seven years later for five times the price. 

Luck played a role in each of these predictions, and I have also made other predictions that didn’t pan out as well, but I hope my record reflects my decent calibration and genuine open-mindedness.

### Ted Sanders

**Areas of expertise**

I am a decent expert in semiconductor technology and AI technology.

*   I earned a PhD in Applied Physics from Stanford, where I spent years researching semiconductor physics and the potential of new technologies to beat the 60 mV/dec limit of today's silicon transistor (e.g., magnetic computing, quantum computing, photonic computing, reversible computing, negative capacitance transistors, and other ideas). These years of research inform our perspective on the likelihood of hardware progress over the next 20 years.
*   After graduation, I had the opportunity to work at Intel R&D on next-gen computer chips, but instead, worked as a management consultant in the semiconductor industry and advised semiconductor CEOs on R&D prioritization and supply chain strategy. These years of work inform our perspective on the difficulty of rapidly scaling semiconductor production.
*   Today, I work on AGI technology as a research engineer at OpenAI, a company aiming to develop transformative AGI. This work informs our perspective on software progress needed for AGI. (Disclaimer: nothing in this essay reflects OpenAI’s beliefs or its non-public information.)

**Track record of forecasting**

I have a track record of success in forecasting competitions:

*   Top prize in SciCast technology forecasting tournament (15 out of ~10,000, ~$2,500 winnings)
*   Top Hypermind US NGDP forecaster in 2014 (1 out of ~1,000)
*   1st place Stanford CME250 AI/ML Prediction Competition (1 of 73)
*   2nd place ‘Let’s invent tomorrow’ Private Banking prediction market (2 out of ~100)
*   2nd place DAGGRE Workshop competition (2 out of ~50)
*   3rd place LG Display Futurecasting Tournament (3 out of 100+)
*   4th Place SciCast conditional forecasting contest
*   9th place DAGGRE Geopolitical Forecasting Competition
*   30th place Replication Markets (~$1,000 winnings)
*   Winner of ~$4200 in the 2022 Hybrid Persuasion-Forecasting Tournament on existential risks (told ranking was “quite well”)

Each finish resulted from luck alongside skill, but in aggregate I hope my record reflects my decent calibration and genuine open-mindedness.

Discussion
----------

We look forward to discussing our essay with you in the comments below. The more we learn from you, the more pleased we'll be.

If you disagree with our admittedly imperfect guesses, we kindly ask that you supply your own preferred probabilities (or framework modifications). It's easier to tear down than build up, and we'd love to hear how you think this analysis can be improved.