---
title: "Aligning Recommender Systems as Cause Area"
author: "IvanVendrov"
date: 2019-05-08
url: https://forum.effectivealtruism.org/posts/xzjQvqDYahigHcwgQ/aligning-recommender-systems-as-cause-area-1
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ea-intro-program/problem-areas-beyond-80k-priorities.md; recommender-system alignment as a cause — persuasion/epistemic disruption"
---

by Ivan Vendrov and Jeremy Nixon

_Disclaimer: views expressed here are solely our own and not those of our employers or any other organization._

---

> _Most recent conversations about the future focus on the point where technology surpasses human capability. But they overlook a much earlier point where technology exceeds human vulnerabilities._

[The Problem](https://humanetech.com/problem/), Center for Humane Technology.

> _The short-term, dopamine-driven feedback loops that we have created are destroying how society works._

[Chamath Palihapitiya](https://www.theguardian.com/media/2018/jan/23/never-get-high-on-your-own-supply-why-social-media-bosses-dont-use-social-media), former Vice President of user growth at Facebook.

---


The most popular recommender systems - the Facebook news feed, the YouTube homepage, Netflix, Twitter - are optimized for metrics that are easy to measure and improve, like number of clicks, time spent, number of daily active users, which are only weakly correlated with what users care about. One of the most powerful optimization processes in the world is being applied to increase these metrics, involving thousands of engineers, the most cutting-edge machine learning technology, and a significant fraction of global computing power. 

The result is software that is [extremely addictive](https://www.bbc.com/news/technology-44640959), with a host of hard-to-measure side effects on users and society including [harm to relationships](http://www.bierdoctor.com/papers/filterbubble_CHI2015_final.pdf), [reduced cognitive capacity](http://www.journals.uchicago.edu/doi/abs/10.1086/691462#), and [political radicalization](https://www.nytimes.com/2018/03/10/opinion/sunday/youtube-politics-radical.html).

_Update 2021-10-18: As Rohin points out in a [comment below](https://forum.effectivealtruism.org/posts/xzjQvqDYahigHcwgQ/aligning-recommender-systems-as-cause-area?commentId=WtT93JofGRgEE3Lwa) the evidence for concrete harms directly attributing to recommender systems is quite weak and speculative; the main argument of the post does not strongly depend on the last paragraph._

In this post we argue that improving the alignment of recommender systems with user values is one of the best cause areas available to effective altruists, particularly those with computer science or product design skills.

We’ll start by explaining what we mean by recommender systems and their alignment. Then we’ll detail the strongest argument in favor of working on this cause, the likelihood that working on aligned recommender system will have positive flow-through effects on the broader problem of AGI alignment. We then conduct a (very speculative) cause prioritization analysis, and conclude with key points of remaining uncertainty as well as some concrete ways to contribute to the cause.


## Cause Area Definition


### Recommender Systems

By _recommender systems_ we mean software that assists users in choosing between a large number of items, usually by narrowing the options down to a small set. Central examples include the Facebook news feed, the YouTube homepage, Netflix, Twitter, and Instagram. Less central examples are search engines, shopping sites, and personal assistant software which require more explicit user intent in the form of a query or constraints.


### Aligning Recommender Systems

By aligning recommender systems we mean any work that leads widely used recommender systems to align better with user values. Central examples of better alignment would be recommender systems which



*   optimize more for the user’s [extrapolated volition](https://wiki.lesswrong.com/wiki/Coherent_Extrapolated_Volition) - not what users want to do in the moment, but what they would want to do if they had more information and more time to deliberate.
*   require less user effort to supervise for a given level of alignment. Recommender systems often have facilities for deep customization (for instance, [it's possible](https://buffer.com/library/customize-my-news-feed) to tell the Facebook News Feed to rank specific friends’ posts higher than others) but the cognitive overhead of creating and managing those preferences is high enough that almost nobody uses them.
*   reduce the risk of strong undesired effects on the user, such as seeing traumatizing or extremely psychologically manipulative content.

What interventions would best lead to these improvements? Prioritizing specific interventions is out of scope for this essay, but plausible candidates include:



*   Developing machine learning techniques that differentially make learning from higher-quality human feedback easier.
*   Designing user interfaces with higher bandwidth and fidelity of transmission for user preferences.
*   Increasing the incentives for tech companies to adopt algorithms, metrics, and interfaces that are more aligned. This could be done through individual choices (using more aligned systems, working for more aligned companies), or through media pressure or regulation.

Concrete Examples of How Recommender Systems Could be More Aligned



*   A recommender system that optimizes partly for a user’s desired emotional state, e.g. using affective computing to detect and filter out text that predictably generates anger.
*   A conversational recommender system that allows users to describe, in natural language, their long term goals such as “become more physically fit”, “get into college”, or “spend more time with friends”. It would then slightly adjust its recommendations to make achievement of the goal more likely, e.g. by showing more instructional or inspiring videos, or alerting more aggressively about good social events nearby.
*   Once a month, users are sent a summary of their usage patterns for the recommender system, such as the distribution of time they spent between politics, sports, entertainment, and educational content. Using a convenient interface, users are able to specify their ideal distribution of time, and the recommender system will guide the results to try to achieve that ideal.


## Connection with AGI Alignment

Risk from the development of artificial intelligence is widely considered one of the most pressing global problems and positively shaping the development of AI is [one of the most promising cause areas](https://80000hours.org/problem-profiles/positively-shaping-artificial-intelligence/) for effective altruists. 

We argue that working on aligning modern recommender systems is likely to have large positive spillover effects on the bigger problem of AGI alignment. There are a number of common technical sub-problems whose solution seems likely to be helpful for both.  But since recommender systems are so widely deployed, working on them will lead to much tighter feedback loops, allowing more rapid winnowing of the space of ideas and solutions, faster build-up of institutional knowledge and better-calibrated researcher intuitions. In addition, because of the massive economic and social benefits of increasing recommender system alignment, it’s reasonable to expect a snowball effect of increased funding and research interest after the first successes.

In the rest of this section we review these common technical sub-problems, and specific benefits from approaching them in the context of recommender systems. We then briefly consider ways in which working on recommender system alignment might actually _hurt_ the cause of AGI alignment. But the most serious objection to our argument from an EA perspective is lack of _neglectedness_: recommender system alignment will happen anyway, so it’s [differentially more important](https://concepts.effectivealtruism.org/concepts/differential-progress/) to work on other sub-problems of AGI alignment. We discuss this objection more below in the section on Cause Prioritization.


### Overlapping Technical Subproblems


#### Robustness to Adversarial Manipulation

Robustness - ensuring ML systems never fail catastrophically even on unseen or adversarially selected inputs - is a [critical subproblem](https://www.alignmentforum.org/posts/E2aZ9Xwdz3i2ghPtn/techniques-for-optimizing-worst-case-performance) of AGI safety. Many solutions have been proposed, including verification, adversarial training, and [red teaming](https://ai-alignment.com/red-teams-b5b6de33dc76), but it’s unclear how to prioritize between these approaches.

Recommender systems like Facebook, Google Search, and Twitter are under constant adversarial attack by the most powerful organizations in the world, such as intelligence agencies trying to influence elections and companies doing SEO for their websites. These adversaries can conduct espionage, exploit [zero-day vulnerabilities](https://en.wikipedia.org/wiki/Zero-day_(computing)) in hardware and software, and draw on resources far in excess of any realistic internal red team. There is no better test of robustness today than deploying an aligned recommender system at scale; trying to make such systems robust will yield a great deal of useful data and intuition for the larger problem of AGI robustness.


#### Understanding preferences and values from natural language

There are a few reasons to think that better natural language understanding differentially improves alignment for both recommender systems and AGI.

First, given how strongly the performance of deep learning systems scales with data size, it seems plausible that the sheer number of bits of human feedback ends up being a limiting factor in the alignment of most AI systems. Since language is the highest bandwidth supervisory signal (in bits/second) that individual humans can provide to an ML system, and linguistic ability is nearly universal, it is probably the cheapest and most plentiful form of human feedback.

More speculatively, natural language may have the advantage of quality as well as quantity - since humans seem to learn values at least partly through language in the form of stories, myths, holy books, and moral claims, natural language may be an unusually high-fidelity representation of human values and goals.


#### Semi-supervised learning from human feedback

Since it’s plausible that AGI alignment will be constrained by the amount of high-quality human feedback we can provide, a natural subproblem is making better use of the labels we get via semi-supervised or weakly supervised learning. Proposals along these lines include Paul Christiano’s [Semi-supervised RL](https://ai-alignment.com/semi-supervised-reinforcement-learning-cf7d5375197f) and what the authors of [Concrete Problems in AI Safety](https://arxiv.org/pdf/1606.06565.pdf) call “Scalable Oversight”. One especially promising approach to the problem is active learning, where the AI helps select which examples need to be labelled.

What are the advantages for studying semi-supervised learning in the context of recommender systems? First, because these systems are used by millions of people, they have plentiful human feedback of varying quality, letting us test algorithms at much more realistic scales than gridworlds or MuJoCo. Second, because recommender systems are a large part of many people’s lives, we expect that the feedback we get would reflect more of the complexity of human values. It seems plausible that we will need qualitatively different approaches to achieve human goals like “become physically fit” or “spend more time with my friends” than for simple goals in deterministic environments.


#### Learning to communicate to humans

It seems very likely that both aligned recommender systems and aligned AGI require bidirectional communication between humans and AI systems, not just a one-way supervisory signal from humans to AI. In particular, safe AI systems may need to be [interpretable](http://s.interpretable.ml/nips_interpretable_ml_2017_victoria_Krakovna.pdf) - to provide accurate explanations of the choices they make. They may also need to be [corrigible](https://ai-alignment.com/corrigibility-3039e668638), which among other properties requires them to actively communicate with users to elicit and clarify their true preferences.

Recommender systems seem a fertile ground for exploring and evaluating different approaches for interpretability and bidirectional communication with humans, especially in the context of [conversational search](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/radlinski2017conversational.pdf) and [recommenders](https://www.kdd.org/kdd2016/papers/files/rfp0063-christakopoulouA.pdf).


#### Understanding Human Factors

In [AI Safety Needs Social Scientists](https://distill.pub/2019/safety-needs-social-scientists/), Geoffrey Irving and Amanda Askell make the case that prioritizing technical approaches to AI safety requires deeper empirical understanding of human factors. The biases, weaknesses, strengths, introspection ability, information-processing and communication limitations of actual humans and human institutions seem critical to evaluating the most promising AGI alignment proposals such as [debate](https://arxiv.org/abs/1805.00899), [amplification](https://arxiv.org/pdf/1810.08575.pdf), and [recursive reward modeling](https://arxiv.org/pdf/1811.07871.pdf).

We agree that running human studies is likely to be valuable for future AI safety research. But we think equally valuable information could be acquired by deploying and studying aligned recommender systems. Recommender systems maintain the largest datasets of actual real-world human decisions. They have billions of users, many of whom would be willing to use experimental new interfaces for fun or for the promise of better long-term outcomes. Recommender systems are also a fertile ground for testing new social and institutional schemes of human-AI collaboration. Just in the domain of reliably aggregating human judgments (likely a key subproblem for debate and amplification) they are constantly experimenting with new techniques, from collaborative filtering to various systems for eliciting and aggregating reviews, ratings, and votes. AI safety needs social scientists, definitely - but it also needs product designers, human-computer interaction researchers, and business development specialists. 


### Risks from Aligning Recommender Systems

In what ways could working on recommender system alignment make AI risks worse?


#### False Confidence

One plausible scenario is that widespread use of aligned recommender systems instills false confidence in the alignment of AI systems, increasing the likelihood and severity of a catastrophic [treacherous turn](https://www.lesswrong.com/posts/B39GNTsN3HocW8KFo/superintelligence-11-the-treacherous-turn), or a [slow but unstoppable trend towards the elimination of human agency](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/more-realistic-tales-of-doom). Currently the public, media, and governments have a healthy skepticism towards AI systems, and there is a great deal of pushback against using AI systems even for fairly limited tasks like [criminal sentencing](https://www.wired.com/2017/04/courts-using-ai-sentence-criminals-must-stop-now/), [financial trading](https://voxeu.org/article/artificial-intelligence-and-stability-markets), and [medical decisions](https://med.stanford.edu/news/all-news/2018/03/researchers-say-use-of-ai-in-medicine-raises-ethical-questions.html). But if recommender systems remain the most influential AI systems on most people’s lives, and people come to view them as highly empathetic, transparent, robust, and beneficial, skepticism will wane and increasing decision-making power will be concentrated in AI hands. If the techniques developed for aligning recommender systems don’t scale - i.e. stop working after a certain threshold of AI capability - then we may have increased overall AI risk despite making great technical progress.


#### Dual Use

Aligned recommender systems may be a strongly [dual-use](https://en.wikipedia.org/wiki/Dual-use_technology) technology, enabling companies to optimize more powerfully for objectives besides alignment, such as creating even more intensely addictive products. An optimization objective that allows you to turn down anger also allows you to turn up anger; ability to optimize for users’ long term goals implies ability to insinuate yourself deeply into users’ lives.

Greater control over these systems also creates dual use censorship concerns, where organizations could dampen the recommendation of content that is negative towards them.


#### Perils of Partial Alignment

Working on alignment of recommender systems might simply get us worse and harder to detect versions of misalignment. For example, many ideas can’t be effectively communicated without creating an emotion or negative side effect that a partially aligned system may look to suppress. Highly warranted emotional responses (e.g. anger at failures to plan for Hurricane Katrina, or in response to genocide) could be improperly dampened. Political positions that consistently create undesirable emotions would also be suppressed, which may or may not be better than the status quo of promoting political positions that generate [outrage and fear](https://medium.com/@tobiasrose/the-enemy-in-our-feeds-e86511488de).


## Cause Prioritization Analysis

Predictions are hard, especially about the future, especially in the domain of economics and sociology. So we will describe a particular model of the world which we think is likely, and do our analysis assuming that model. It’s virtually certain that this model is wrong, and fairly likely (~30% confidence) that it is wrong in a way that dramatically undermines our analysis.

The key question any model of the problem needs to answer is - **why aren’t recommender systems already aligned**? There are a lot of possible contingent reasons, for instance that few people have thought about it, and the few who did were not in a position to work on it. But the efficient market hypothesis implies there isn’t a giant pool of economic value lying around for anyone to pick up. That means at least one of the following structural reasons is true:  



1.  Aligned recommender systems aren’t very economically valuable.
1.  Aligning recommender systems is extremely difficult and expensive.
1.  A solution to the alignment problem is a public good in which we expect rational economic actors to underinvest.

Our model says it’s a combination of (2) and (3). Notice that Google didn’t invent or fund [AlexNet](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf), the breakthrough paper that popularized image classification with deep convolutional neural networks - but it was quick to invest immense resources once the breakthrough had been made. Similarly with [Monsanto and CRISPR](https://monsanto.com/news-releases/monsanto-announces-global-genome-editing-licensing-agreement-with-broad-institute-for-newly-characterized-crispr-system/).

We think aligning recommender systems follows the same pattern - there are still research challenges that are too hard and risky for companies to invest significant resources in. The challenges seem interdisciplinary (involving insights from ML, human-computer interaction, product design, social science) which makes it harder to attract funding and academic interest. But there is a critical threshold at which the economic incentives towards wide adoption become overpowering.  Once the evidence that aligned recommender systems are practical and profitable reaches a certain threshold, tech companies and venture capitalists will pour money and talent into the field.

If this model is roughly correct, aligned recommender systems are inevitable - the only question is, how much can we speed up their creation and wide adoption? More precisely, what is the relationship between additional resources invested now and the time it takes us to reach the critical threshold?

The most optimistic case we can imagine is analogous to AlexNet - a single good paper or prototype, representing about 1-3 person-years invested, manages a conceptual breakthrough and triggers a flood of interest that brings the time-to-threshold 5 years closer.

The most pessimistic case is that the time-to-threshold is not constrained at the margin by funding, talent or attention; perhaps sufficient resources are already invested across the various tech companies. In that case additional resources will be completely wasted.

Our median estimate is that a small research sub-field (involving ~10-30 people over 3-5 years) could bring the critical threshold 3 years closer.

Assuming this model is roughly right, we now apply the [Scale-Neglectness-Solvability framework](https://80000hours.org/articles/problem-framework) for cause prioritization (also known as [ITN - Importance, Tractability, Neglectedness](https://concepts.effectivealtruism.org/concepts/importance-neglectedness-tractability/)) as described by [80000 Hours](https://80000hours.org/articles/problem-framework).


### Scale

The easiest problem to quantify is the direct effect on quality of life while consuming content from recommender systems. In 2017 Facebook users spent about 1 [billion hours / day on the site](https://www.fool.com/investing/2018/02/06/people-still-spend-an-absurd-amount-of-time-on-fac.aspx); YouTube also [claims](https://www.youtube.com/yt/about/press/) more than a billion hours a day in 2019. Netflix in 2017 [counted](https://media.netflix.com/en/press-releases/2017-on-netflix-a-year-in-bingeing) 140 million hours per day. Not all of this time is powered by recommender systems, but 2.4 billion user hours / day = 100 million user years / year is a reasonably conservative order of magnitude estimate.

What is the difference in experienced wellbeing in time on current recommender systems vs aligned recommender systems? 1% seems conservative, leading to 1 million QALYs lost every year simply from time spent on unaligned recommender systems.

It’s likely that the flow-through effects on the rest of users’ lives will be even greater, if the studies showing effects on mental health, cognitive function, relationships hold out, and if aligned recommender systems are able to significantly assist users in achieving their long term goals. Even more speculatively, if recommender systems are able to align with users’ extrapolated volition this may also have flow-through effects on social stability, wisdom, and long-termist attitudes in a way that helps mitigate existential risk.

It’s much harder to quantify the scale of the AGI alignment problem, insofar as aligning recommender systems helps solve it; we will defer to 80000 Hours’ estimate of [3 billion QALYs per year](https://80000hours.org/problem-profiles/positively-shaping-artificial-intelligence/).


### Neglectedness

Culturally there’s a lot of awareness of the problems with unaligned recommender systems, so the amount of potential support to draw on seems high. Companies like Google and Facebook have announced initiatives around [Digital Wellbeing](https://wellbeing.google/) and [Time Well Spent](https://www.socialmediatoday.com/news/facebook-announces-coming-news-feed-changes-which-will-reduce-the-reach-of/514662/), but it’s unclear how fundamental these changes are. There are some nonprofits like [Center for Human Technology](https://humanetech.com/) working on improving incentives for companies to adopt aligned recommenders, but none to our knowledge working on the technical problem itself.

How many full-time employees are dedicated to the problem? At the high end, we might count all ML, product, data analysis, and UI work on recommender systems as having some component of aligning with user values, in which case there is on the order of 1000s of people working on the problem globally. We estimate the number that are substantially engaging with the alignment problem (as opposed to improving user engagement) full-time is at least an order of magnitude lower, probably less than 100 people globally.


### Solvability

The direct problem - unaligned recommender systems making their users worse off than they could be - seems very solvable. There are many seemingly tractable research problems to pursue, lots of interest from the media and wider culture, and clear economic incentives for powerful actors to throw money at a clear and convincing technical research agenda. It seems like a doubling of direct effort (~100 more people) would likely solve a large fraction of the problem, perhaps all of it, within a few years.

For the AGI alignment problem, 80000 Hours’ estimate (last updated in March 2017) is that doubling the effort, which they estimate as $10M annually, would reduce AI risk by about [1%](https://80000hours.org/problem-profiles/positively-shaping-artificial-intelligence/). Given the large degree of technical overlap, it seems plausible that solving aligned recommender systems would solve 1-10% of the whole AGI alignment problem, so I’ll estimate the flow-through reduction in AI risk at 0.01 - 0.1%.


### Overall Importance 

_Ivan's Note: I have very low confidence that these numbers mean anything. In the spirit of _[If It's Worth Doing, It's Worth Doing With Made-Up Statistics](https://slatestarcodex.com/2013/05/02/if-its-worth-doing-its-worth-doing-with-made-up-statistics/)_, I’m computing them anyway_. _May Taleb have mercy on my soul._

Converting all the numbers above into the 80000 Hours logarithmic scoring system for problem importance, we get the following overall problem scores. We use [x,y] to denote an interval of values.

||||||
|--- |--- |--- |--- |--- |
|**Problem**|**Scale**|**Neglectedness**|**Solvability**|**Total**|
|Unaligned Recommenders|8|[6,8]|[6,7]|[20,23]|
|Risks from AI (flow-through)|15|[6,8]|[2,3]|[23,26]|


The overall range is between 20 and 26, which is coincidentally about the range of the most urgent global issues as [scored](https://80000hours.org/articles/cause-selection/) by 80000 Hours, with climate change at 20 and risks from artificial intelligence at 27.


## Key Points of Uncertainty

A wise man once said to think of mathematical proofs not as a way to be confident in our theorems, but as a way to focus our doubts on the assumptions. In a similar spirit, we hope this essay serves to focus our uncertainties about this cause area on a few key questions:



1.  Could aligning weak AI systems such as recommenders be net harmful due to the false confidence it builds? Are there ways of mitigating this effect?
1.  When will aligned recommender systems emerge, if we don’t intervene? If the answer is “never”, why? Why might aligned recommender systems _not_ emerge in our economic environment, despite their obvious utility for users?
1.  What fraction of the whole AGI alignment problem would robustly aligning recommender systems with roughly modern capabilities solve? we estimated 1-10%, but we can imagine worlds in which it’s 0.1% or 90%.
1.  What is the direct cost that unaligned recommender systems are imposing on people’s lives? With fairly conservative assumptions we estimated 1 million QALYs per year, but we could easily see it being two orders of magnitude more or less.


## How You Can Contribute

Machine learning researchers, software engineers, data scientists, policymakers, and others can immediately contribute to the goal of aligning recommender systems.



*   Much of the research needed to enable effective control of recommenders has not been done. Researchers in academia and especially in industry are in a position to ask and answer questions like:
    *   What side effects are our recommendation engines having? 
    *   How can we more effectively detect harmful side effects?
    *   What effect do different optimization metrics (e.g. number of likes or comments, time spent) have on harmful side effects? Are some substantially more aligned with collective well-being than others?
    *   Can we design optimization objectives that do what we want?
*   The implementation of research tends to be done by software engineers. Being a member of a team stewarding these recommender systems will give you a concrete understanding of how the system is implemented, what its limitations and knobs for adjustment are, and what ideas can practically be brought to bear on the system.
*   Data scientists can investigate questions like ‘how does this user’s behavior change as a result of having seen this recommendation?’ and ‘what trajectories in topic / video space exist, where we see large clusters of users undergoing the same transition in their watch patterns?’. This is an especially critical question for children and other vulnerable users.
*   Policymakers are currently considering taking dramatic steps to reduce the negative impact of technology on the population. Tools developed by researchers working on this cause area can help. Many of those tools will make it feasible to check what impact is being had on the population, and will introduce methods that guard against specific and quantifiable notions of excessive harm.