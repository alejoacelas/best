---
title: "Growth and the case against randomista development"
author: "Hauke Hillebrandt"
date: 2020-01-16
url: https://forum.effectivealtruism.org/posts/bsE5t6qhGC65fEpzN/growth-and-the-case-against-randomista-development
fetched: 2026-07-06
via: forum-graphql
topic: "ea-intro-program"
note: "EA Intro Program, session: Week 2 — Differences in Impact (Handbook Part 2), optional"
---

**Update, 3/8/2021:** I (Hauke) gave a talk at Effective Altruism Global on this post:

Summary
=======

Randomista development (RD) is a form of development economics which evaluates and promotes interventions that can be tested by randomised controlled trials (RCTs). It is exemplified by GiveWell (which primarily works in health) and the randomista movement in economics (which primarily works in economic development).

Here we argue for the following claims, which we believe to be quite weak:

1.  Prominent economists make plausible arguments which suggest that research on and advocacy for economic growth in low- and middle-income countries is more cost-effective than the things funded by proponents of randomista development.
2.  Effective altruists have devoted too little attention to these arguments.
3.  Assessing the soundness of these arguments should be a key focus for current generation-focused effective altruists over the next few years.

We hope to start a conversation on these questions, and potentially to cause a major reorientation within EA.

We also believe the following stronger claims:

4\. Improving health is not the best way to increase growth.

5\. A ~4 person-year research effort will find donation opportunities working on economic growth in LMICs which are substantially better than GiveWell’s top charities from a current generation human welfare-focused point of view.

However, economic growth is not all that matters. GDP misses many crucial determinants of human welfare, including leisure time, inequality, foregone consumption from investment, public goods, social connection, life expectancy, and so on. A top priority for effective altruists should be to assess the best way to increase human welfare outside of the constraints of randomista development, i.e. allowing intervention that have not or cannot be tested by RCTs.

We proceed as follows:

1.  We define randomista development and contrast it with research and advocacy for growth-friendly policies in low- and middle-income countries.
2.  We show that randomista development is overrepresented in EA, and that, in contradistinction, research on and advocacy for growth-friendly economic policy (we refer to this as growth throughout) is underrepresented
3.  We then show why some prominent economists believe that, a priori, growth is much more effective than most RD interventions.
4.  We present a quantitative model that tries to formalize these intuitions and allows us to compare global development interventions with economic growth interventions. The model suggests that under plausible assumptions a hypothetical growth intervention can be thousands of times more cost-effective than typical RD interventions such as cash-transfers. However, when these assumptions are relaxed and compared to the very good RD interventions, growth interventions are on a similar level of effectiveness as RD interventions.
5.  We consider various possible objections and qualifications to our argument.

Acknowledgements
----------------

Thanks to Stefan Schubert, Stephen Clare, Greg Lewis, Michael Wiebe, Sjir Hoeijmakers, Johannes Ackva, Gregory Thwaites, Will MacAskill, Aidan Goth, Sasha Cooper, and Carl Shulman for comments. Any mistakes are our own. Opinions are ours, not those of our employers.

Marinella Capriati at GiveWell commented on this piece, and the piece does not represent her views or those of GiveWell.

1\. Defining Randomista Development
===================================

We define randomista development (RD) as an approach to development economics which investigates, evaluates and recommends only interventions which can be tested by randomised controlled trials (RCTs).

RD can take low-risk or more “[hits-based](https://www.google.com/url?q=https://www.openphilanthropy.org/blog/hits-based-giving&sa=D&ust=1579171979778000)” forms. Effective altruists have especially focused on the low-risk form of RD: specifically, directly funding interventions that have been tested by RCTs, such as malaria bednet distributions and cash transfers. However, even within direct funding of such programmes, there is significant variation in the probability of success. For example, [GiveWell thinks](https://www.google.com/url?q=https://blog.givewell.org/2016/07/26/deworming-might-huge-impact-might-close-zero-impact/&sa=D&ust=1579171979778000) that deworming is a high risk/high-reward bet with a significant chance of having small effect but some chance of having a large effect. Other GiveWell recommended programmes offer a much more certain probability of impact.

More clearly hits-based forms of RD are possible. GiveWell has done various forms of more hits-based giving, including for example its support for the [Center for Suicide Prevention](https://www.google.com/url?q=https://www.givewell.org/research/incubation-grants/centre-pesticide-suicide-prevention/august-2017-grant&sa=D&ust=1579171979778000), which advocates for policy change at the national level in India and Nepal. [Co-Impact](https://www.google.com/url?q=https://co-impact.org/&sa=D&ust=1579171979779000), a collaborative philanthropy group, is advocating for national scale-up of the RCT-supported education programme Teaching at the Right Level across Africa. By this definition, RD also includes advocacy and scale-up of scientific research that can be tested by RCTs, such as mosquito gene drives, researching vaccines or antibiotics, or the agricultural research that led to the Green Revolution.[\[1\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt1)

2\. Randomista development is popular in EA
===========================================

Global poverty remains a popular cause area among people interested in EA.[\[2\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt2) EA has especially focused on *directly funding* RCT-backed interventions. GiveWell [moved $161m](https://www.google.com/url?q=https://www.givewell.org/about/impact&sa=D&ust=1579171979779000) to RCT-backed charities in 2018.[\[3\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt3) The [Effective Altruism Global Health and Development Fund](https://www.google.com/url?q=https://app.effectivealtruism.org/funds/global-development&sa=D&ust=1579171979780000) has disbursed most of its funds to charities that directly implement RCT-backed interventions.

Recently, GiveWell [announced](https://www.google.com/url?q=https://blog.givewell.org/2019/02/07/how-givewells-research-is-evolving/&sa=D&ust=1579171979780000) that they will expand their research beyond RD to include difficult-to-evaluate interventions. This could include economic growth, though their initial focus is on improving health policy. Nonetheless, as things stand at the moment, most of the EA money in global development focuses on directly funding interventions that can be tested by RCTs. Almost all EAs interested in global development we have met at events like EAG seem focused on directly funding, or working for, organisations implementing interventions that can be tested by RCTs.

We too used to support direct funding of interventions that can be tested by RCTs, but now believe it is suboptimal. We will argue that research and advocacy for growth-friendly economic policies can often be orders of magnitude more cost-effective than direct funding of evidence-based interventions. The case against hits-based RD is less clear and we leave that to future work.

The ideas here rely heavily on work by Lant Pritchett of the Blavatnik School of Government in Oxford.[\[4\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt4) However, within economics there is considerable support for similar views (see **Appendix 1**).

3\. The case for economic growth and against randomista development
===================================================================

In this section, we set out three arguments for the proposition that research and advocacy for growth is more cost-effective than directly funding interventions tested by RCTs. However, since economic growth is not all that matters, this does not necessarily mean that advocacy for growth is the best way to increase human welfare. To reiterate: we focus on economic growth here, and aim to show that research and advocacy for growth is better than randomista development. However, there may be other ways to cost-effectively increase human welfare outside of the constraints of RD (e.g. through decreasing inequality or improving the provision of public goods that are not properly reflected in GDP).

3.1. Economic growth explains a substantial fraction of the variance in human welfare today
-------------------------------------------------------------------------------------------

In this section, we discuss the relationship between income per head and different objective and subjective measures of welfare.

### Income per head and broad measures of welfare

Today, there is significant variation in [income per head](https://www.google.com/url?q=https://ourworldindata.org/economic-growth&sa=D&ust=1579171979781000) across the world:

![](https://lh4.googleusercontent.com/krEaPKaj5GX4JR-gjeTRpRXeCG66RHt1EWXXIPS_ByFWECYAeojj6jfskONPw6mozl2q_Ou7tOdyirkJZqCxU9xpENuxSOtkZN1FWBdDvif84KLL-0a31VIRghEz-1GHtJYIHm16)

If markets function reasonably well and people are broadly rational, then richer people will buy more goods which have a substantial private good element,[\[5\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt5) such as:

*   Food
*   Transport
*   Shelter
*   Lighting
*   Electricity
*   Education
*   Healthcare

Therefore, we have strong reasons to think that these large cross-national differences in income per head cause large differences in human welfare due to differential consumption of private goods.

This does not mean that GDP is all that matters. The metric of GDP per capita misses some crucial contributors to human welfare, including:

*   **Public goods:** Increasing income per head reliably increases consumption of private goods. However, it might not necessarily increase public goods, such as public health interventions, clean air, public safety, electricity grids, sanitation, and so on.
*   **Consumption:** High levels of investment increase GDP but also constitute foregone consumption, which involves a loss of welfare that is not reflected in GDP.
*   **Leisure:** High hours worked per capita deliver higher GDP but also constitute foregone leisure time, which involves a loss of welfare that is not reflected in GDP
*   **Inequality:** Individuals get diminishing marginal utility from income, so income gains to the better-off should be valued less than income gains to the worse-off. Thus, holding income per capita and everything else equal, societies with a more equal income distribution must have greater welfare per person. In addition, income and other resources might be positional goods - perceiving others to be richer might be another mechanism by which inequality might lead to lower overall welfare. This is a difference in welfare that is not captured by GDP.
*   **Social connection:** Social connection is not represented in GDP statistics but is a major determinant of human welfare.
*   **Health:** A country can have higher income per head than another, but the lives of its citizens could be worse if they die earlier or suffer greater morbidity.

It is therefore interesting to explore how well GDP per capita correlates with more holistic measures of welfare that try to account for these other determinants. There have been numerous attempts to build a more holistic measure of welfare than GDP per capita. In a 2016 paper, Jones and Klenow used measures of consumption, leisure, inequality, and mortality, to create a consumption-equivalent welfare measure that allows comparisons across time for a given country, as well as across countries.[\[6\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt6)

This measure of human welfare suggests that the true level of welfare of some countries differs markedly from the level that might be suggested by their GDP per capita. For example, France’s GDP per capita is around 60% of US GDP per capita.[\[7\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt7) However, France has lower inequality, lower mortality, and more leisure time than the US. Thus, on the Jones and Klenow measure of welfare, France’s welfare per person is 92% of US welfare per person.[\[8\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt8)

Although GDP per capita is distinct from this expanded welfare metric, the correlation between GDP per capita and this expanded welfare metric is very strong at 0.96, though there is substantial variation across countries, and welfare is more dispersed (standard deviation of 1.51 in logs) than is income (standard deviation of 1.27 in logs).[\[9\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt9)

![](https://lh6.googleusercontent.com/9jSmvfps5eqNWbrkfScg7VDPIqkfg-ZZexQtTckRpOMBxHiOtwWtf4_MmMKioVKeagQrLDweScTfzxjGK3VRfrgNATghg6-gw-IhC2RZKZZ9e-jvFxUH7NpHCdZJffnx2_Gvj8_F)

GDP per capita is also very strongly correlated with the Human Development Index, another expanded welfare metric.[\[10\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt10) If measures such as these are accurate, this shows that income per head explains most of the observed cross-national variation in welfare. It is a distinct question whether economic growth explains most of the observed variation across individuals in welfare. It is, however, clear that it explains a substantial fraction of the variation across individuals.

This suggests that: taking this expansive account of human welfare, only so much can be achieved for a country holding its income per head at a low level. For instance, unless a country’s income per person is at least a quarter that of the US, then, *empirically*, its welfare per person can also not be more than a sixth that of the US.

Crucially, on the Jones and Klenow welfare metric, most developing countries are substantially poorer than incomes suggest because of a combination of shorter lives and extreme inequality. Lower life expectancy reduces welfare by 15 to 50 percent in the developing countries Jones and Klenow examine, which implies that global welfare inequality is greater than global income inequality.[\[11\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt11) Therefore, ensuring evenly shared growth and improved health is also important for human welfare. We do not investigate the best way to do that here, though we think that these goals are best advanced outside of the constraints of directly funding RCT-backed interventions.

We will now look in more detail at the relationship between income per head and some other indicators of human welfare.

### Life expectancy

GDP per capita and [life expectancy](https://www.google.com/url?q=https://ourworldindata.org/life-expectancy&sa=D&ust=1579171979785000) are correlated:

![](https://lh5.googleusercontent.com/YCqtM5YFfFuWbpgbxSUB-nQVYvCsO8WJNw3_tRv5yKUhNlpEZ_bLevql29mXAX1hqao_0CTKA4gFSkCgjj6MXYpMPbbkURiJ0zfdH1Guvvubzx4UDCxqzS2zo1P3jwhljQvEQVsy)

As this chart shows, the life expectancy associated with a given level of real income is rising over time. If economic development were the only determinant of health, countries that get richer would just move along the same curve. Since this is not the case, we can conclude that economic development cannot be the sole determinant of health: highly efficient public health interventions also play a major role. 60 years of public health improvements since 1950 increase cross-national life expectancy on average by around 8 years.

Nonetheless, the graph above shows that GDP per capita explains a significant fraction of the variation in life expectancy across countries. 60 years of sustained growth could shift a country from income per head of $1,000 to $32,500.[\[12\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt12) Today, this would be correlated with, though would not necessarily wholly cause, an increase in life expectancy by more than 20 years, on average. Today, almost no countries with income per head above $10,000 have life expectancy below 70 years. Most countries with income below $5,000 per head have life expectancy below 70 years, and a significant fraction have life expectancy below 60.

### Life satisfaction

GDP per capita is also correlated with [self-reported life satisfaction](https://www.google.com/url?q=https://ourworldindata.org/grapher/gdp-vs-happiness&sa=D&ust=1579171979786000):

![](https://lh5.googleusercontent.com/EyMrZljU9_i-4ZLlR-qR7Rpxk7JEIticnBfVipce6JD9fjO7WcF_ViZyar3JAkEY37jo6-1Z02PvKqPyt-ep27RzSOl_f2_KnpGhRku7oemh32jOdhUjpcFDMLc1BC5jMn55XrXd)

Once GDP per capita is above $20,000, no countries have average life satisfaction scores below 5; once it is below $3,000, almost no countries have self-reported life satisfaction scores above 5. The chart below shows the strength of the relationship more clearly as it does not put income on a logarithmic scale:

![](https://lh6.googleusercontent.com/ZVeTlAYUY2kZQIav05u4Hk_Q3Sq-q282DGMEN9D7q_hMnUitSInwZifOGXENcN-5pN6GTtfe3bkdIyX8z_NkZfpJ-ivWkD8KAcZ1pBC0v3leUVAG1wtBjwXf9eSMOUlHQsjsrgfe)

*Source: 80,000 Hours*

This shows the value of economic development for life satisfaction in low-income countries (as well as the limited benefits for rich countries).

### Poverty

GDP per capita is very strongly associated with poverty reduction, on standard low-bar poverty thresholds. Increasing median income above a certain level is empirically sufficient to eliminate $1.90 a day poverty. Above a median income of $5,000, no country has low-bar poverty above 2.5%:

![](https://lh3.googleusercontent.com/lPiNy6s2nyrA5BKNuKQV3HDOHtQjJXyGrUUGK3NB-fqRRQB8xHD0Oc8A6p3U5N1m_Ma4Mmc4Udulj_jR7wwioV9WJnVnC0w7Y8iAm-Wxo92PtFh4uLE5PH1BLsHgBlA5ENrYd35e)

Increasing median per capita income above a certain level is also empirically necessary to eliminate poverty. No country (but one) has pushed $5.50/day poverty below 10 percent without increasing median income above $3,535.[\[13\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt13)

![](https://lh3.googleusercontent.com/2lN1xcqXRfN9Rmu1tDCdDEcfVq_nCJNwVERmP-maGPqeyJUOIBFmNVSzxH2A9cXaTeJ22pFC_c_ct1ctzK6JrQou3HhrYSgOSPbSBF4hRtL20x1pmPkcMCGe-wKV-xvyNdDRXu6j)

  
 

### GDP and other indicators of welfare

There is also a strong correlation between GDP per capita and other indicators of welfare such as:

*   [Reduced undernourishment](https://www.google.com/url?q=https://ourworldindata.org/grapher/share-undernourished-vs-gdp-pc&sa=D&ust=1579171979788000)
*   [Literacy](https://www.google.com/url?q=https://ourworldindata.org/grapher/literacy-rate-vs-gdp-per-capita&sa=D&ust=1579171979789000)
*   [Reduced child mortality](https://www.google.com/url?q=https://ourworldindata.org/grapher/child-mortality-gdp-per-capita&sa=D&ust=1579171979789000)
*   [Sanitation](https://www.google.com/url?q=https://ourworldindata.org/grapher/improved-sanitation-facilities-vs-gdp-per-capita&sa=D&ust=1579171979789000)

### Economic growth as a driver of progress and the limitations of RD

The foregoing arguments show that GDP per capita is strongly correlated with many objective and subjective measures of welfare. Thus, empirical evidence shows that only so much can be achieved for a country at a low level of income per head. If a country has an income per head below $5,000, it is very likely to do poorly on most objective and subjective measures of welfare. If a country’s income per head is above $20,000, it is very likely to do well on most objective and subjective measures of welfare.

As discussed above, there are also good reasons to believe that increased GDP per capita causes many of these increases in welfare. This suggests that when we are working out how to increase human welfare to the greatest extent possible, then we should start by figuring out how best to increase GDP per capita. However, to our knowledge, EAs have not publicly published any investigations of this question.

Moreover, the vast majority of proponents of RD do not tackle the question of whether the interventions they assess increase economic growth. Instead, RD is overwhelmingly focused on evaluating the success of programmatic attempts to solve a problem in a specific target population, such as depression, educational attainment, intestinal worms or malaria. This does not mean that the things assessed by RD do not increase economic growth at all: indeed some RD health interventions increase earnings and consumption later in life, and thus do increase growth to an extent. However, evaluating whether the effect size is trivial or not should be a top priority for proponents of RD. (Hauke discusses the relationship between health and growth in Appendix 3.4)

Independently of this, we do not believe that the vast majority of RD interventions are plausibly among the top 100 ways to increase growth. For example, it is implausible that direct funding of the following interventions is the best way to increase GDP per capita:[\[14\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt14)

*   Malaria bednets
*   Deworming
*   HIV education
*   Mobile phone reminders for vaccinations
*   Improved cookstoves
*   Cash transfers
*   Etc.

The reason these things are unlikely to be the best way to increase growth is that they play no role in the causal story of the huge differences in GDP per capita across space and time. To illustrate:

*   It is not the case that Danish people are better off than Ugandans because they have implemented direct programmatic efforts of this kind to a greater extent.
*   It is not the case that Danish people today are better off than Danish people 100 years ago because they implemented this type of intervention.
*   When looking at the huge human welfare gains in China, Indonesia, Vietnam, Singapore, South Korea and Hong Kong in the second half of the 20th century, no-one argues that this was because they engaged in more interventions of this type.

The role of direct programmatic assistance in explaining the variance in economic outcomes is mirrored in surveys of people who have moved out of poverty. The role of direct NGO programmatic assistance is as small as we would expect, given the above. In a survey of 4,000 people across three states in India, 3 named “NGO assistance” (only slightly ahead of one person each naming “illegal activity” and “winning the lottery”).

![](https://lh3.googleusercontent.com/srVTmxzuq_ZiGqrCKf2WESeVDoLeVURZj1pbqGNHhy21b-6LvzeKlrYGRlIHKsj7Nnf3vVLGSZsczyy3I_yaZfZTMqTNq8k7qLNbLLATTOkSovluGj6n1GZUqo3xBhQmr9SMDe9W)

  
 

Source: Pritchett, ‘Alleviating Global Poverty: Labor Mobility, Direct Assistance, and Economic Growth’, Center for Global Development, page 8.

It is true that there might be biases at play here that may cause under-reporting of NGO assistance as a cause of escape from poverty. Firstly, people may naturally want to attribute their success to their own hard work, even if NGOs did play a role. Secondly, the impact of some NGOs may be difficult to see, even for beneficiaries. For example, most people may not be able to notice the substantial effect of salt iodisation or the Green Revolution on their lives because such work is largely invisible to them. Nonetheless, this survey does suggest that direct funding of RCT-backed interventions have played a very small role in escape from poverty.

Moreover, and more controversially, we do not believe that health interventions (whether directly funded or implemented by the state) are the best way to increase growth in the poorest countries.[\[15\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt15) Here, we want to start a discussion on what the most effective causes of growth are, given its huge importance.

Overall, it would be very surprising if directly funding RD interventions turned out to be the best way to increase growth (especially given that they were not recommended on that basis in the first place). Given the strength of the correlation between growth and welfare, this should lead us to question whether RD is the best way to increase welfare.

### What *does* explain cross-national differences in GDP per capita?

Thus, many RCT-backed interventions do not seem to explain much of the cross-national variation in GDP per capita. What does? There are a range of factors including:

*   Growth-friendly policies
*   Geography
*   Natural resources
*   Human capital
*   Culture

Within growth-friendly policies generally, some hits-based forms of RD may be promising. For example, the Green Revolution was a form of randomista development, and scale-up of that agricultural technology has saved the lives of hundreds of millions of people. There is also a correlation between educational performance and GDP per capita.[\[16\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt16) Thus, it is possible that scaling up RCT-backed educational interventions would increase GDP per capita. Assessing whether this and other RD interventions would be the most cost-effective way to increase GDP per capita should be a top priority for effective altruists.

However, many of the most promising growth-friendly policies are economic policies that cannot be tested by RCTs (though their impact is not outside the realm of empirical investigation, see Appendix 2.2). These would include things like:

*   Infrastructure spending
*   Economic liberalisation (Hong Kong, China)
*   Trade liberalisation (India)
*   Export-led development and state protection of industry (South Korea, China)

As Pritchett writes:

> “... \[Development\] is fundamentally a process of social transformation—markets (and their supporting institutions and organizations (e.g. firms)) are social mechanisms that structure how people cooperate, governments (and their supporting institutions (e.g. agencies)) are social mechanisms. This social process of national development reliably produces higher human well-being in every dimension. However, no one can reliably and rigorously demonstrate exactly which actions best promote development (as, almost certainly they are contextual and complex) and certainly no one can reliably attribute development to specific organizations (and doing so may, in and of itself, cause less effectiveness).”[\[17\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt17)

This should lead us to be sceptical about RD. Growth is arguably the major driver of human progress, but proponents of RD rarely argue that the interventions that they recommend do increase growth.

### Excursus on kinky poverty lines

RD might look like a plausibly effective way to reduce poverty, because of ‘kinky poverty lines’[\[18\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt18) — which define “extreme poverty” as living on less than [$1.90 per day](https://www.google.com/url?q=https://ourworldindata.org/extreme-poverty&sa=D&ust=1579171979794000), and then do not measure progress above that level. On this poverty line, directly funding RCT-backed aid could ‘pull people out of poverty’. [Globally, around $180bn is spent on aid](https://www.google.com/url?q=https://data.worldbank.org/indicator/DT.ODA.ALLD.CD&sa=D&ust=1579171979795000) per year—roughly $500 million per day. There are [500 million people who are extremely poor](https://www.google.com/url?q=https://ourworldindata.org/extreme-poverty&sa=D&ust=1579171979795000). Assuming that all the extreme poor have $1 per day already, we could eradicate extreme poverty through cash transfers.

But this would raise their income by around $1 per day. And someone on $2 per day is still very poor even if they are above the kinky $1.90 threshold. Indeed, this poverty line is discriminatory and would never be used for citizens in a high-income country: in the US, the poverty line is $17 per day.[\[19\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt19) There is no reason that such thresholds should not apply to people outside high-income countries. On this more expansive definition of poverty, it is very difficult for direct funding of programmatic aid to lift people out of poverty.

Indeed, median income, rather than direct anti-poverty programmes at a given level of income, predicts nearly all of the observed variation in poverty, at any poverty line:

![](https://lh5.googleusercontent.com/vIuEvWqzCrXYo-h4X86JXgttWZfVbPqfzyuBQAeRd5KXnYZTB_0AQA5KEMyCpSE6DYdE2fNDMzEEhzencVFR_YV42ZsaULPYfIkis248RxeaA5UzE7XzyFujpdDwBaFmDEKPr5lC)

*Source: Pritchett, ‘Randomizing development: Method or madness?’ (2019)*

Direct anti-poverty programmes usually favoured by proponents of RD, such as cash transfers, microfinance, or the graduation approach, aim to raise the income of the poor at a given level of national median income. However, differences across the country/years in the impact of these targeted poverty programmes conditional on the median account for at the very most 1.2 percent of the total cross-national variation in poverty rates.[\[20\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt20) This suggests that identifying the best direct anti-poverty programmes currently being implemented and scaling them up can at most have very limited low-bar poverty reduction benefits, unless these can be shown to increase national median income per head. There is no reason to think that many current RD programmes, such as cash transfers or the graduation approach, increase national median income.

(This is not to say that decreasing inequality is not important: as we saw above, inequality can have large effects on a country’s welfare per person.)

3.2. The success of the development era
---------------------------------------

The story of human welfare is well illustrated by [this graph](https://www.google.com/url?q=https://ourworldindata.org/economic-growth&sa=D&ust=1579171979796000):

![](https://lh5.googleusercontent.com/SFgCykO0xLL1UEbzZGYyou7-_iVp-SPIZqohPg2npuFTPFf45tGb3O8oDBNrkI400IP47ufzwLuhzlM1M7MTwWQnpOOQXOXPV5dAEJmf0NGDyHrB0xxXguNvNhdhzKdN7Zc6CSbt)

Until 1800, average human welfare was stagnant, but after the Industrial Revolution, living standards exploded. This preceded most development economics. However, the end of the Second World War marked the start of what Pritchett calls the ‘development era’ with:

*   The end of colonisation with the liberation of India, Pakistan and Indonesia
*   The founding of the Bretton Woods institutions - the IMF and the World Bank
*   Truman’s Four Point plan to provide technical assistance to developing countries
*   Overall a concerted effort by economists and sovereign states to increase development[\[21\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt21)

The development era was a huge success: [since 1950](https://www.google.com/url?q=https://ourworldindata.org/economic-growth%23gdp-growth-since-1950&sa=D&ust=1579171979797000), human welfare has improved on all objective measures by more than all prior human history combined.[\[22\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt22) On the chart below, countries can move vertically up from the diagonal line (meaning that they had positive growth), or vertically down from the diagonal line (meaning that they had negative growth).

![](https://lh4.googleusercontent.com/RPLPjIuXhv5M_wfYlR_-8vOm2OyDQSrRz6pucNqH1F_t3puoBRX_uL6ZztzTFVtVUARgVMXJKR4I4lF1huQ9mQHTB4JsS1ZaozPCFeRgFsI0aEjWME5O_cteB66icYHIRbIEwyud)

It is important to note that the development era was not all plain sailing and that there have been some major growth decelerations, as we discuss below. Nevertheless, the net effect of the era has been overwhelmingly positive.

If things are going so well, why would we start working on a completely different form of development economics? It seems like the best course would be to broaden and accelerate this process globally, and replicate previous successes. Moreover, the failures that do exist seem to make the case for improving our knowledge of growth and the likelihood of policy success. (We discuss this in more detail below).

RD has moved in an entirely different direction. Instead of replicating this success, it asks: among interventions that we can test with RCTs, what is most impactful? In the wake of the period with by far the greatest progress in human welfare of all time, this change in strategy is difficult to justify.

As a way to guide the comparison with RD, it is interesting to compare this progress with the estimated effect of deworming. Of GiveWell’s top charities, Deworm the World is estimated to offer the most cost-effective way to improve *economic* outcomes for the very poor. But given the story above, it would be very surprising if this was the case: differences in rates of deworming explain a miniscule fraction of the variation in individual economic outcomes across the world. No-one argues that deworming is among the top 1000 causes of the huge economic transformation documented above.

Moreover, given that GiveWell estimates that deworming has similar impact on welfare (broadly conceived) to their other top charities, this should lead us to question whether their other top charities are the best way to increase human welfare, broadly conceived.

4\. Cost-effectiveness analysis: RD vs. Growth
==============================================

Though growth is a major determinant of human welfare today, it does not follow that research and advocacy for growth and national development are more cost-effective than RD interventions. While the payoff might be large, the probability of influencing policy, or the probability that you know better than policymakers, might be low enough to make the expected value of such work lower than RD.

Pritchett has a convincing response to this argument. He compares a popular form of RD, the Graduation approach, with research on and advocacy for growth.

### The Graduation Approach

The Ultra Poor Graduation program gets people out of extreme poverty via livelihood training, productive asset transfers, consumption support, savings plans, and healthcare. It is one of the most well-tested and impactful direct anti-poverty programs. (Founders Pledge research suggests that Bandhan, a charity carrying out the Graduation approach, is 5x a cost-effective as cash. GiveWell estimates that Malaria Consortium is 15.8 times as cost-effective as cash. Thus, it seems fair to roughly assume that Malaria Consortium is around 3 times more cost-effective than the Graduation approach.)

A range of RCTs in different contexts have shown that the Graduation approach raised year 3 incomes in 5 out of 6 study sites. The study suggests that the intervention on average produces a 1.6x return in net present value.[\[23\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt23) Thus, $1000 invested in the intervention would produce $1,600 in net present value. There are around 100 million people in Ethiopia, so $1 billion invested in the graduation approach there would increase per capita income by $16.

Compare this to the per-person value of growth accelerations and decelerations documented by Pritchett et al (2016). These are defined as the change in output per capita resulting from one structural break in the trend growth of output to the next. These acceleration or deceleration typically range from 10 to 30 years. The per person benefits (costs) of these growth accelerations (decelerations) are orders of magnitude greater than the impact of the Graduation programme:[\[24\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt24)

  
 

![](https://lh5.googleusercontent.com/BkVByiPfkePgMdUMd5AbDSnUa3DnCvA1v7XMm_1bAUDOEn25Zc1iSkqVYj2u8Ydt0LAZc2u3nEdHhI7quGBE2fBrWVW1WorYM_dWoEg6Dzt-pQhHRX1atEHh2Cr4KJKJuZ1BlF0z)

Many of the largest growth accelerations produce total benefits in the hundreds of billions of dollars in net present value.[\[25\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt25) The costs of growth decelerations are similarly vast.[\[26\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt26) The top 20 growth accelerations and decelerations have a Net Present Value of $30 trillion and minus $35 trillion.[\[27\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt27) (It should be noted that the later stages of the growth accelerations affect progressively richer people, so produce less utility from additional consumption.)

Thus, the benefits of growth are huge. And, as we shall now argue, the probability that economics can affect growth is also large enough to make the expected benefits of growth-friendly research and advocacy much larger than directly funding RD. There are a few ways to get purchase on this intuition.

### All economists

The American Economics Association has 20,000 members. Assume there are twice as many economists globally costing around $150,000 each – at a total of $6bn. Suppose this was constant for 50 years and hence it cost $300bn to sustain the modern economics profession from 1960 to 2010. To be better than the graduation approach, the economics profession would need to have produced expected benefits in excess of ($300bn*1.6) = $480bn in NPV.

China’s growth acceleration from 1977 onwards produced $14 trillion NPV in cumulative economic output. Thus, if the only thing the economics profession achieved in 50 years was to increase by 4 percentage points the probability that the Chinese government shifted to this new economic strategy, then it would have had greater economic benefits than the Graduation approach.[\[28\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt28) It is implausible that the economics profession had an influence this small, and there is in fact a lot of evidence for substantial development economics influence on Chinese economic thinking at this time.[\[29\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt29) From the blurb of a recent book [Unlikely Partners](https://www.google.com/url?q=https://www.hup.harvard.edu/catalog.php?isbn%3D9780674971134&sa=D&ust=1579171979800000):

> “When Mao Zedong died in 1976, his successors seized the opportunity to reassess the wisdom of China’s rigid commitment to Marxist doctrine. With Deng Xiaoping’s blessing, China’s economic gurus scoured the globe for fresh ideas that would put China on the path to domestic prosperity and ultimately global economic power. Leading foreign economists accepted invitations to visit China to share their expertise, while Chinese delegations traveled to the United States, Hungary, Great Britain, West Germany, Brazil, and other countries to examine new ideas. Chinese economists partnered with an array of brilliant thinkers, including Nobel Prize winners, World Bank officials, battle-scarred veterans of Eastern Europe’s economic struggles, and blunt-speaking free-market fundamentalists.”

Moreover, this does not count the influence the profession had over all of the other growth accelerations and avoided decelerations. There is clear evidence of the influence of development economics on growth accelerations in India, Taiwan, Indonesia, Vietnam and other countries (see Appendix 2.2). We believe that on a realistic assessment of the evidence on the impact of development economics, the average cost-effectiveness of standard development economics is orders of magnitude better than RD. It remains to be seen whether growth-friendly development is more cost-effective on the margin. That depends on what funding opportunities are available within the cause of advocacy for growth-friendly economic policies.

### The World Bank

The World Bank’s expenditure on all of development economics in 2016 was about $50 million. To be better than the Graduation approach, this would have to have produced expected benefits greater than (1.6 * $50 million =) $80 million. The 2002 Indian growth acceleration was worth $2.5 trillion. Even if the only thing the World Bank achieved was to increase the probability of this occurring by 0.003%, then it would be better than the Graduation Approach.

### The IMF

The total annual budget of the IMF is around $1.2 billion. If the IMF existed at that budget for 50 years at a cost of $60 billion cumulatively and even if all it ever did was have a 7% chance of averting a single $1 trillion crisis, then it would be better than the Graduation approach.

### Philanthropic impact

Pritchett argues that philanthropists, and not just international institutions, have in the past helped to increase growth in low-income countries. For example, due to economic liberalisation causing growth accelerations in 1991 and 2002, India created an additional $3.6 trillion in GDP, relative to its “business as usual” growth trajectory.[\[30\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt30)

Pritchett argues that Ford Foundation funding of the Indian Council for Research on International Economic Relations (ICRIER) was integral in this growth episode:

> “There is a narrative in which Ford Foundation, a global philanthropy, provides some millions of dollars of funding that play some role in creating a think tank \[ICRIER\] that itself then plays some role in providing the conditions in which good policy choices are made that then results in the creation of $3.6 trillion in additional output of Indians.” [\[31\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt31)

Pritchett asks us to suppose that the Ford Foundation gave ICRIER $36m.

> “Optimistically, suppose this gift increased by 50 percent the chance ICRIER was created and became an effective think tank (perhaps other funding could have come along, perhaps not) and suppose the existence and actions of this think tank increased by 10 percent the odds India adopted growth accelerating policies (my read of the situation is that it was higher). Then the expected value of Ford Foundation’s 36 million of support was 180 billion dollars (bracketing discounting), a 5000-fold return per dollar of investment.

> Pessimistically, suppose the Ford Foundation funding only increased the likelihood of an effective think tank by 10 percent (someone else almost certainly would have funded it) and the impact of ICRIER on the likelihood of a growth accelerating policy outcome was only 1 percent, the investment still returns 100-fold—3.6 billion on 36 million.

> Suppose instead the Ford Foundation had given 36 million in what many regard as the highest return individualized investment: girl’s education. There are hundreds of studies showing a positive return both to wages and to other outcomes—fertility, child survival, empowerment, etc. Let’s suppose, super optimistically, the return on this investment was 20 percent. This means an additional 7.2 million dollars.”[\[32\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt32)

### Spreadsheet model

Below we have a [spreadsheet model](https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1VcQ2r5zuCztd1_2vRscK8UOEAiQqhvvhkJVfagCzpqQ/edit?usp%3Dsharing&sa=D&ust=1579171979802000) comparing the relative effectiveness of direct funding of RD with a hypothetical growth intervention using some of the parameters from above.

Note that the model’s assumptions are based on figures from other sources. As such, this model aims to highlight and disentangle the debate about the relative effectiveness of the randomista approach in the literature.

**The case for Growth:**

Here, the Graduation approach has a 1.7x ROI. Ethiopia’s population is around 100 million. $1bn spent on the Graduation program would increase the GDP/capita by $17 and the overall return would be $1.7bn.

Pritchett compares this to spending $36m on research and advocacy increases the probability by 50% that a think tank is created. He assigns 10% probability that the think tank then affected India’s 1993 and 2002 growth episodes (3,572 billion or roughly 3.6 trillion). This would create $178.58bn in benefits and be 2918x as cost-effective as the Graduation approach.

**The case for Randomista development:**

In contrast to the case above, we find that the randomista approach is on a similar order of effectiveness as our hypothetical growth intervention, if we make the following assumptions:

*   We use Pritchett’s pessimistic numbers where $36m on research and advocacy only increases the probability by 10% that a think tank is created by 1% that the think tank affects policy
*   We use only the median growth episode in Pritchett’s sample (which is Vietnam, 1989, corresponding to an increase of $6,914 GDP per capita) to be affected by a think tank
*   We compare this to Malaria Consortium, which is 15.8x more cost-effective than the cash-transfers[\[33\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt33) and 3x as effective as the graduation approach[\[34\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt34)

![](https://lh4.googleusercontent.com/jAkXPMIThXZd1rDuwpkQzLoMJ_quO7GvsqPa7O_-bByz65g_SwLSEXq53DPLnhqZCm28PL8JeCMK-6O_7sHIfpiqVBvZqo8JMGbdnfz3jlzMKGYUlv4zYGY09hNBB5-O0oM9dPnf)

  
 

5\. Possible responses
======================

5.1 Extreme scepticism about growth economics
---------------------------------------------

One counterargument to this is to appeal to extreme scepticism about growth economics, specifically the claim that we know which economic policies can spur growth in the future. For example, Chris Blattman, a prominent randomista argues that “\[the argument that advocacy for economic growth\] has to be made partly on faith, because it is very, very difficult to connect the salary of a growth economist to somebody’s life being better off in 40 years.”[\[35\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt35) Banerjee and Duflo make a similar argument in ‘[How Poverty Ends](https://www.google.com/url?q=https://www.foreignaffairs.com/articles/2019-12-03/how-poverty-ends&sa=D&ust=1579171979825000)’ in Foreign Affairs essentially arguing that we know very little about how to increase growth.

The first thing to say about this argument is that evaluating it should be the focus of significant research attention from effective altruists working to reduce global poverty. Within EA funding alone, there is >$150m per year at stake in the choice between advocacy for growth and RD. If the case against growth relies on such a controversial claim, then assessing that claim should be a top priority in EA. In spite of this, to our knowledge, this question has received no publicly published attention from the EA community.

There are some arguments for the extreme sceptic position. The Industrial Revolution in England happened before the vast majority of development economics, and the cause of the Industrial Revolution is still a subject of active debate in the field.[\[36\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt36) However, as we have argued above, the ‘development era’ had started by 1950.

The extreme sceptic view outlined above implies that though in the last 70 years, we have witnessed more economic development than all prior human history combined, the deliberate and prominent efforts of economists had no effect on this happening. This is *prima facie* implausible. It is worth here quoting Pritchett at length:

> “This argument is at odds with commonly accepted interpretations of events in a number of countries. One, there are a number of countries (e.g. China, India, Vietnam, Indonesia) that said (1) “Based on our reading of the existing evidence (including from economists) we are going to shift from policy stance X to policy stance Y in order to accelerate growth”, (2) these countries did in fact shift from policy stance X to Y and (3) the countries did in fact have a large (to massive) accelerations of growth relative to \[business as usual\] as measured by standard methods ([Pritchett et al 2016](https://www.google.com/url?q=https://www.cgdev.org/sites/default/files/searching-devil-details-learning-about-development-program-design-working-paper-434.pdf&sa=D&ust=1579171979826000)).

> One had to be particularly stubborn and clever to make the argument: “Politicians changed policies to promote growth based on evidence and then there was growth but (a) this was just dumb luck, the policy shift did not actually cause the shift in growth something else did or (b) (more subtly) the adopted policies did work but that was just dumb luck as there was not enough evidence the policies would work for this to count as a win for ‘evidence’ changing policy.”

> There are also a fairly large number of countries that did the opposite. Economists (from their country and others) have said to the leadership of countries: (1) “If you persist in policy stance X you are going to experience large (to massive) negative consequences for economic growth,” (2) the leaders have not listened, and (3) there have been precisely the predicted negative consequences. The Venezuelan economy is not in 2018 spiraling into hyperinflation and in the midst of a tragic economic depression because “economists have little useful to say about economic growth” in the sense the advice, if followed, would be useful. If the argument is that research can learn reliable advice but this doesn’t mean it will change the course of events, then the question is whether it never changes the course of events. There are also cases in which governments have said “based on what economists say we are going to switch paths to avoid massive downturns/hyperinflation”, have done so, and it has worked (in the sense at least that a crisis did not happen). While the “growth accelerations” might have been hard to predict with standard policies (Hausmann, Pritchett, Rodrik 2005) there is empirical evidence that “growth collapses” are rather more predictable ([Breuer and McDermott 2013](https://www.sciencedirect.com/science/article/abs/pii/S0164070413001134)).

> This is not to say that all research based claims about policies for growth have been right. The “lost decades” in Latin America and the “transition depression” in some (not all) former Soviet dominated countries are both examples of adopting policies for growth based on recommendations that seemed not to work. However, as a paper in this volume points out, among the top ten most prescribed medicines many work on only a third of the patients. So because a recommendation is not universally successful does not mean it is not a good recommendation. If I can give you a tip that increases your odds of winning a million dollar lottery by 10 percent, it is massively worthwhile. More recent reviews suggest the “pox on all the houses of growth research” stance and a view recommendations had been worthless are too extreme (e.g. Easterly 2018 on the “Washington Consensus”, [Irwin 2019 on trade](https://www.google.com/url?q=https://www.nber.org/papers/w25927&sa=D&ust=1579171979827000)).”[\[37\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt37)

In addition to this, as we have argued above, there is clear evidence that growth economics had an effect on Chinese economic policy, and this alone probably makes growth economics more cost-effective than the best that RD could do. We of course cannot settle the debate on the overall effect that growth economics has had here. However, as we have said, assessing its truth should be a top priority for proponents of RD and the EA community.

5.2. Economic growth and risk of harm
-------------------------------------

One other criticism of advocacy for growth is that it involves substantial risk of harm. Economists were involved in some of the growth decelerations that we have seen since the Second World War. The risk of harm is indeed a downside of advocacy for growth against RD.

Several things may be said in response to this. Firstly, this in effect concedes the argument against the extreme scepticism outlined above that development economics does influence national policy, and is therefore potentially high leverage. One cannot both claim that advocacy for growth-friendly economic policies has no effect on policy or on growth and also that it involves unacceptable risk of harm.

Secondly, RD also involves the risk of harm. For example, there was recently controversy about whether GiveDirectly’s cash transfer programme in the past imposed harm on non-recipients.[\[38\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt38)

Thirdly, the historical record since 1950 suggests that the net expected gains from advocacy for growth have been very large, even if they have sometimes involved harm.

One could respond that we ought to avoid interventions risking substantial harm, even if the expected value of the intervention is higher than all others. If this is the ethical assumption underlying RD, then it should be made explicit going forward.

Finally, we are here arguing for high-quality effective research on how to encourage growth, and advocacy for that research. If such research could prevent harm being done by international institutions or others, then there is good reason to think, per the cost-effectiveness argument above, that doing such research would be better than RD. Preventing, at reasonable cost, just one error by the IMF or the World Bank would have expected benefits far in excess of RD. Moreover, if harm minimisation is the ethical aim, then research on how to prevent bad growth policy looks highly promising.

Economists have been studying growth, created models of how countries grow, created a field of “growth diagnostics” (which uses historical and quantitative analysis to determine the causes of growth with the view of predicting growth bottlenecks of on a country-by-country basis), and make concrete policy prescriptions to cause growth (or prevent deceleration). Hauke discusses this in Appendix 2.

5.3. Is there anything to fund?
-------------------------------

Another counterargument is that there are limited funding opportunities for philanthropists and that the space is already crowded with states and iNGOs, which usually aim to increase growth. Three things may be said in response. Firstly, establishing the truth of this claim should be a top priority for EAs who are focused on reducing global poverty. EAs are now moving more than a hundred million dollars every year in this space, so evaluating a crucial consideration such as this is of paramount importance.

Secondly, it is less clear whether advocacy for growth is crowded relative to its scale, which is the more relevant comparison. The scale of the problem economic growth solves are at least in the tens of trillions of dollars in net present value.

Thirdly, we present several suggestions for the kinds of things that could be funded in Appendix 4. These are not meant to be recommendations, but they do suggest that it is unlikely that careful analysis will find no promising funding opportunities in this space.

5.4. Politicisation
-------------------

One additional downside of research and advocacy for growth-friendly economic policies is the politicised nature of such work. Direct poverty and health programmes, such as cash transfers or distributing malaria bednets, are fairly uncontroversial. In contrast, advocacy for economic policies like trade liberalisation or opening up economies to markets are highly politicised. Thus, if the EA movement did get involved in funding this sort of work, it would take on additional political risks. This is especially concerning for Western funders working in low- and middle-income countries.

However, it is worth noting that EA funders are already involved in some highly politicised work, such as advocacy for increasing migration and criminal justice reform. Nonetheless, the political risks are a strike against advocacy for growth-friendly economic policies, and need to be considered carefully.

5.5. GDP isn’t everything
-------------------------

We noted at the start of this post that economic growth is not all that we care about from a near-termist human welfare-maximising point of view. Income per head does not account for:

*   Inequality
*   Foregone consumption from investment
*   Leisure time
*   Social connection
*   Public goods
*   etc

To take the example of public goods, some public goods are at best weakly correlated with GDP per capita:

![](https://lh6.googleusercontent.com/1Wm8diKPXzSpY1UXWBIOfAZ9MhNY7YQ-RQ0EdeL85QOTQi-wymZDERlu4pgsNp7vcAD3ytzbuuBD6ObmXiFGHshnkl83bbajcAAs13hgt8iAyUbw6c8w8u9mCYpszLwkhA31X1Wo)

For public good provision, two factors are crucial: the responsiveness of the polity (i.e. how democratic it is) and state capacity. Pritchett has shown that environmental quality correlates well with measures of state capacity and responsiveness of polity.[\[39\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt39) To give another example, measures of personal safety do not correlate strongly with income per head or state responsiveness, but do correlate with state capacity.[\[40\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt40)

Pritchett constructs a broad measure of *national development* that includes income per head, polity responsiveness and state capacity. National development, thus defined, is extremely strongly correlated with subjective and objective measures of wellbeing.[\[41\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt41) At a given level of national development, a country can only increase welfare modestly, whereas increasing a country’s level of national development can increase welfare substantially.

In sum, while we have focused on GDP here to make the case against RD, growth is not everything: accounting for inequality, leisure time and consumption is crucial, as is accounting for the provision of public goods, which is best ensured by a responsive and capable state. Assessing the best way to improve these things, outside of the constraints of RD, should also be a priority for effective altruists.

6\. Conclusion
==============

Economic growth has been a major driver of human progress so far. In spite of this, within global development, EAs have largely ignored the question of how to increase growth. Instead they have instead focused on (promoting) directly funding the best interventions that can be tested by RCTs. There are plausible arguments which suggests that focusing on growth could be substantially more cost-effective than this dominant approach. This question should be the subject of significant attention from EAs working on global health and development. This is a crucial consideration, which could cause a major shift in our view of interventions.[\[42\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt42)

More strongly, we believe that a 4 person-year research effort would find donation opportunities working on growth that are substantially more cost-effective than GiveWell’s top charities.

It is less clear whether advocacy for growth-friendly economic policies is better than more “hits-based” randomista development, such as advocacy for national scale-up of RCT-backed programmes, research into vaccines and antibiotics, or gene drives for malaria. Moreover, as we have said, economic growth is not everything and there may be even larger gains from improving reducing inequality, or improving state responsiveness and state capability. Investigating these questions should be a top priority for near-term human welfare-focused effective altruists.

In any case, we would like to open a discussion on whether, by relaxing constraints on risk and ambiguity aversion, and taking more of a hits-based approach in global development, donors can greatly increase their impact.

7\. Further reading
===================

*   The two most compelling Pritchett papers on this topic are:
*   ‘[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979832000)’ (2019)
*   ‘[Alleviating Global Poverty: Labor Mobility, Direct Assistance, and Economic Growth](https://www.google.com/url?q=https://www.cgdev.org/sites/default/files/alleviating-global-poverty-labor-mobility-direct-assistance-and-economic-growth.pdf&sa=D&ust=1579171979833000)’, *Center for Global Development*, (2018)
*   [Pritchett on Econtalk](https://www.google.com/url?q=http://www.econtalk.org/lant-pritchett-on-poverty-growth-and-experiments/&sa=D&ust=1579171979833000) podcast [\[43\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt43)
*   [2018 Lecture by Pritchett titled "The Debate about RCTs in Development is over. We won. They lost."](https://www.google.com/url?q=https://www.youtube.com/watch?v%3Dct-lWyNEdFY%26feature%3Demb_title&sa=D&ust=1579171979834000)
*   Easterly, ‘[In Search of Reforms for Growth: New Stylized Facts on Policy and Growth Outcomes](https://www.google.com/url?q=https://www.nber.org/papers/w26318&sa=D&ust=1579171979834000)’, NBER (2019)
*   **Popular book about the importance of economic growth:** [Tyler Cowen - Stubborn Attachments](https://www.google.com/url?q=https://www.amazon.com/Stubborn-Attachments-Prosperous-Responsible-Individuals/dp/1732265135&sa=D&ust=1579171979834000) (audiobook takes <2h at 2x speed)
*   **Contrapoint:**
*   [Banerjee and Duflo: Good Economics for Hard Times](https://www.google.com/url?q=https://www.amazon.com/Good-Economics-Times-Abhijit-Banerjee/dp/1610399501&sa=D&ust=1579171979835000) (especially [chapters on trade liberalization](https://www.google.com/url?q=https://books.google.co.uk/books?id%3DNNGXDwAAQBAJ%26q%3DHow%2Bwould%2Banyone%2Bknow%2522%2B%23v%3Dsnippet%26q%3DHow%2520would%2520anyone%2520know%2522%26f%3Dfalse&sa=D&ust=1579171979835000) and growth)
*   Banerjee and Duflo, ‘[How Poverty Ends](https://www.google.com/url?q=https://www.foreignaffairs.com/articles/2019-12-03/how-poverty-ends&sa=D&ust=1579171979835000)’, *Foreign Affairs.*
*   [Paper by Dani Rodrik on recent economic policy advice and growth diagnostics: "Goodbye Washington Consensus, Hello Washington Confusion? A Review of the World Bank’s Economic Growth in the 1990s: Learning from a Decade of Reform"](https://www.google.com/url?q=https://web.stanford.edu/group/scspi/media/_media/pdf/Reference%2520Media/Rodrik_2006_Development%2520Economics.pdf&sa=D&ust=1579171979836000)
*   [Aschenbrenner on Existential Risk and Economic Growth - EA Forum](https://www.google.com/url?q=https://forum.effectivealtruism.org/posts/xh37hSqw287ufDbQ7/existential-risk-and-economic-growth-1&sa=D&ust=1579171979836000)
*   [Joan Gass’ thesis (written under Lant Pritchett) “What’s the best ROI of international development talent? - How to make a difference with your international development career”](https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://bit.ly/2xaBL9y%26sa%3DD%26ust%3D1576244105256000%26usg%3DAFQjCNH7dsEjuW4YmHB9CtU4rt0I3DotHQ&sa=D&ust=1579171979836000)

8\. Hauke’s appendices
======================

Hauke has written some [appendices](https://www.hfh.pw/growth) to this document, but these do not necessarily represent John’s view.

9\. References
==============

[\[1\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref1) However, the hits-based version of RD does raise questions for proponents of RCT-focused development. Advocacy campaigns for evidence-based interventions cannot be tested by RCTs, but few proponents of RCTs would take this to be a reason not to do such campaigns. Why then should evaluability by RCTs be a condition on other interventions?

[\[2\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref2) Which cause is most popular depends on cause categorisation and most surveyed EAs seem to be long-termists in some broad sense. EA Survey 2018 Series: Cause Selection" 18 Jan 2019, [EA Survey 2018 Series: Cause Selection](https://www.google.com/url?q=https://forum.effectivealtruism.org/posts/hP6oEXurLrDXyEzcT/ea-survey-2018-series-cause-selection&sa=D&ust=1579171979837000). Accessed 29 Oct. 2019.

[\[3\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref3) “Currently, the best giving opportunities we’ve found in this category are recommended by GiveWell”. Open Philanthropy Project ‘[Global Health and Development](https://www.google.com/url?q=https://www.openphilanthropy.org/focus/global-health-and-development&sa=D&ust=1579171979838000)’

[\[4\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref4) Pritchett, "[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979838000)" Accessed 29 Oct. 2019.

[\[5\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref5) These goods have a private good element because their consumption also requires the provision of certain public goods, such as an electricity grid, public safety, transport networks and so on. We discuss public goods in more depth in section 4.5.

[\[6\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref6) Jones and Klenow, ‘Beyond GDP? Welfare across Countries and Time’, *American Economic Review* 2016, pp. 2426–2457

[\[7\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref7)  Jones and Klenow, ‘Beyond GDP? Welfare across Countries and Time’, *American Economic Review* 2016, p.2427.

[\[8\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref8) Ibid.

[\[9\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref9)  Jones and Klenow, ‘Beyond GDP? Welfare across Countries and Time’, *American Economic Review* 2016, p.2439.

[\[10\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref10) We should in part expect this because the HDI includes GDP per capita. However two things may be said about this. Firstly, GDP per capita is included in the HDI because it is recognised to be a key determinant of human welfare. Secondly, GDP per capita is [also correlated](https://www.google.com/url?q=https://ourworldindata.org/human-development-index%23hihd-with-and-without-gdp&sa=D&ust=1579171979846000) with the other weighted components of the HDI - life expectancy, literacy and educational enrolment.

[\[11\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref11)  Jones and Klenow, ‘Beyond GDP? Welfare across Countries and Time’, *American Economic Review* 2016, pp.2427-2428.

[\[12\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref12) This was South Korea’s experience from 1950 to 2010. Data from the Our World in Data [Economic Growth](https://www.google.com/url?q=https://ourworldindata.org/economic-growth&sa=D&ust=1579171979845000) entry.

[\[13\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref13) Pritchett, "[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979838000)" Page 7.

[\[14\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref14) Pritchett, "[Is your impact evaluation asking questions that matter?](https://www.cgdev.org/blog/your-impact-evaluation-asking-questions-matter-four-part-smell-test)"

[\[15\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref15) A recent meta-analysis by Brown University economist David Weil concludes “If improving health leads to growth, this would be a reason, beyond the welfare gain from better health itself, that governments might want to make such investments. **However, the evidence for such an effect of health on growth is relatively weak.** Cross-country empirical analyses that find large effects for this causal channel tend to have serious identification problems.** The few studies that use better identification find small or even negative effects. Theoretical and empirical analyses of the individual causal channels by which health should raise growth find positive effects, but again these tend to be fairly small. Putting the different channels together into a simulation model shows that potential growth effects of better health are only modest, and arrive with a significant delay.”** "Health and Economic Growth - CDN." [Health and Economic Growth](https://www.google.com/url?q=https://cpb-us-w2.wpmucdn.com/sites.brown.edu/dist/1/24/files/2018/10/Chapter-3-Health-and-Economic-Growth_2014_Handbook-of-Economic-Growth-1u57nzx.pdf&sa=D&ust=1579171979848000). Accessed 20 Nov. 2018.

[\[16\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref16) World Bank, [*Education Quality and Economic Growth*](https://www.google.com/url?q=https://siteresources.worldbank.org/EDUCATION/Resources/278200-1099079877269/547664-1099079934475/Edu_Quality_Economic_Growth.pdf&sa=D&ust=1579171979844000) (2007).

[\[17\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref17) Pritchett, [The Perils of Partial Attribution: Let’s All Play for Team Development](https://www.cgdev.org/publication/perils-partial-attribution)

[\[18\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref18) Pritchett, [Getting Kinky with Chickens](https://www.google.com/url?q=https://www.cgdev.org/blog/getting-kinky-chickens&sa=D&ust=1579171979845000)

[\[19\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref19) Pritchett, [Getting Kinky with Chickens](https://www.google.com/url?q=https://www.cgdev.org/blog/getting-kinky-chickens&sa=D&ust=1579171979845000)

[\[20\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref20) Pritchett, "[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979838000)" (2019), page 12.

[\[21\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref21) Pritchett, [The Perils of Partial Attribution: Let’s All Play for Team Development](https://www.cgdev.org/publication/perils-partial-attribution)

[\[22\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref22) Pritchett, [The Perils of Partial Attribution: Let’s All Play for Team Development](https://www.cgdev.org/publication/perils-partial-attribution)

[\[23\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref23) Banerjee et al. ‘A multifaceted program causes lasting progress for the very poor: Evidence from six countries’ *Science*, (2015): table 4 line 11. This is the average of all of the interventions.

[\[24\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref24) [Alleviating Global Poverty: Labor Mobility, Direct Assistance, and Economic Growth by Lant Pritchett](https://www.ssrn.com/abstract=3149890) 25. Note that Pritchett’s estimate of the impact of the Graduation approach is slightly different to ours. We are not sure of how Pritchett arrived at his estimate.

[\[25\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref25) Pritchett, Trillions gained and lost: Estimating the magnitude of growth episodes, p289. [Trillions gained and lost: Estimating the magnitude of growth episodes](https://www.google.com/url?q=https://www.sciencedirect.com/science/article/pii/S0264999316300311&sa=D&ust=1579171979839000)

[\[26\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref26) Pritchett, Trillions gained and lost: Estimating the magnitude of growth episodes, p290. [Trillions gained and lost: Estimating the magnitude of growth episodes](https://www.google.com/url?q=https://www.sciencedirect.com/science/article/pii/S0264999316300311&sa=D&ust=1579171979840000)

[\[27\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref27) Pritchett, trillions, p289. [Trillions gained and lost: Estimating the magnitude of growth episodes](https://www.google.com/url?q=https://www.sciencedirect.com/science/article/pii/S0264999316300311&sa=D&ust=1579171979840000)

[\[28\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref28) 480 billion / 14 trillion = 3.4%

[\[29\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref29) "Western economists and China's rise - The Economist." 5 Jan. 2017, [Outsiders and the Middle Kingdom - Western economists and China's rise | Books and arts](https://www.google.com/url?q=https://www.economist.com/books-and-arts/2017/01/05/western-economists-and-chinas-rise&sa=D&ust=1579171979841000). Accessed 4 Nov. 2019.

[\[30\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref30) Pritchett, perils of partial, [The Perils of Partial Attribution: Let’s All Play for Team Development](https://www.google.com/url?q=https://www.cgdev.org/publication/perils-partial-attribution&sa=D&ust=1579171979841000)

[\[31\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref31) "The Perils of Partial Attribution: Let's All Play for Team Development ...." 26 Oct. 2017, [The Perils of Partial Attribution: Let’s All Play for Team Development](https://www.google.com/url?q=https://www.cgdev.org/publication/perils-partial-attribution&sa=D&ust=1579171979841000). Accessed 19 Nov. 2018.

[\[32\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref32) "The Perils of Partial Attribution: Let's All Play for Team Development ...." 26 Oct. 2017, [The Perils of Partial Attribution: Let’s All Play for Team Development](https://www.google.com/url?q=https://www.cgdev.org/publication/perils-partial-attribution&sa=D&ust=1579171979842000). Accessed 19 Nov. 2018.

[\[33\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref33) "2019 GiveWell Cost-Effectiveness Analysis - Google Docs." 25 Nov. 2019, [2019 GiveWell Cost-Effectiveness Analysis — Version 6 (public)](https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1zLmPuddUmKsy3v55AfG_e1Quk-ngDdNzW-FDx0T-Y94/edit%23gid%3D1034883018%26range%3DB26&sa=D&ust=1579171979847000). Accessed 15 Jan. 2020.

[\[34\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref34) Recall that Founders Pledge research suggests that Bandhan, a charity carrying out the Graduation approach, is 5x a cost-effective as cash. GiveWell estimates that Malaria Consortium is 15.8 times as cost-effective as cash. Thus, it seems fair to roughly assume that Malaria Consortium is around 3 times more cost-effective than the Graduation approach

[\[35\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref35) "Two views on fighting world poverty - Chris Blattman." 28 Mar. 2017, [Two views on fighting world poverty](https://www.google.com/url?q=https://chrisblattman.com/2017/03/28/two-views-fighting-world-poverty/&sa=D&ust=1579171979842000) Accessed 7 Nov. 2019.

[\[36\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref36) Gregory Clark, A Farewell to Alms: A Brief Economic History of the World, Princeton University Press (2009).

[\[37\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref37) Pritchett, ‘Randomizing Development: Method or Madness?’ (2019), p. 23-24.

[\[38\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref38) Berk Özler, ‘Most good you can do. But for whom?’, World Bank Blogs (October 2018)

[\[39\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref39) Pritchett, "[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979838000)" Page 17.

[\[40\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref40) Pritchett, "[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979838000)" Page 17.

[\[41\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref41) Pritchett, "[Randomizing Development: Method or Madness?](https://www.google.com/url?q=https://d101vc9winf8ln.cloudfront.net/documents/32264/original/RCTs_and_the_big_questions_10000words_june30.pdf?1565974982&sa=D&ust=1579171979838000)" Page 14.

[\[42\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref42) "Crucial Considerations and Wise Philanthropy - Effective ...." 9 Jul. 2014, [Crucial Considerations and Wise Philanthropy](https://www.google.com/url?q=https://www.effectivealtruism.org/articles/crucial-considerations-and-wise-philanthropy-nick-bostrom/&sa=D&ust=1579171979847000). Accessed 6 Nov. 2019.

[\[43\]](https://docs.google.com/document/d/e/2PACX-1vREIVXc8XyErrS6Ui7YwU_MbyLXoaU8H-zeYmCVaid2ICg1KwpD2A56FQFjB3Z_5r4zAkMxrQssmmxC/pub#ftnt_ref43) "Lant Pritchett on Poverty, Growth, and Experiments - Econlib - EconTalk." 22 May. 2017, [Lant Pritchett on Poverty, Growth, and Experiments](https://www.google.com/url?q=http://www.econtalk.org/lant-pritchett-on-poverty-growth-and-experiments/&sa=D&ust=1579171979843000). Accessed 6 Nov. 2018.