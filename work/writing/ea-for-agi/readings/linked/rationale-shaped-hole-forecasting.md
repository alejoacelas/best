---
title: "The Rationale-Shaped Hole At The Heart Of Forecasting"
author: "dschwarz"
date: 2024-04-02
url: https://forum.effectivealtruism.org/posts/qMP7LcCBFBEtuA3kL/the-rationale-shaped-hole-at-the-heart-of-forecasting
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 2, e.g. forethought/whats-important-in-ai-for-epistemics.md; forecasting and reasoning (epistemics)"
---

*Thanks to Eli Lifland, Molly Hickman, Değer Turan, and Evan Miyazono for reviewing drafts of this post. The opinions expressed here are my own.*

Summary:

*   Forecasters produce reasons and models that are often more valuable than the final forecasts
*   Most of this value is being lost due to the historical practice & incentives of forecasting, and the difficulty of crowds to “adversarially collaborate”
*   [ FutureSearch](http://futuresearch.ai) is a forecasting system with legible reasons and models at its core (examples at the end)

### The Curious Case of the Missing Reasoning

Ben Landau-Taylor of [Bismarck Analysis](https://www.bismarckanalysis.com/#/) wrote a piece on March 6 called “[Probability Is Not A Substitute For Reasoning](https://substack.com/home/post/p-142361956)”, citing a piece where he writes:

> There has been a great deal of research on what criteria must be met for forecasting aggregations to be useful, and as Karger, Atanasov, and Tetlock [argue](https://www.fhi.ox.ac.uk/wp-content/uploads/2022/05/Improving-Judgments-of-Existential-Risk.pdf), predictions of events such as the arrival of AGI are a very long way from fulfilling them.

Last summer, [Tyler Cowen wrote on AGI ruin forecasts](https://marginalrevolution.com/marginalrevolution/2023/06/nature-on-agi-risk.html):

> Publish, publish, not on blogs, not long stacked arguments or six hour podcasts or tweet storms, no, rather peer review, peer review, peer review, and yes with models too... if you wish to convince your audience of one of the most radical conclusions of all time…well, more is needed than just a lot of vertically stacked arguments.

Widely divergent views and forecasts on AGI persist, leading to FRI’s excellent [adversarial collaboration on forecasting AI risk](https://forum.effectivealtruism.org/posts/orhjaZ3AJMHzDzckZ/results-from-an-adversarial-collaboration-on-ai-risk-fri) this month. Reading it, I saw… a lot of vertically stacked arguments.

There have been other big advances in judgmental forecasting recently, on non-AGI AI, Covid19 origins and scientific progress. How well justified are the forecasts?

*   *Feb 28: Steinhardt’s lab’s *impressive paper on [“Approaching Human-Level Forecasting with Language Models”](https://arxiv.org/abs/2402.18563) ([press](https://marginalrevolution.com/marginalrevolution/2024/03/approaching-human-level-forecasting-with-language-models.html)). The pipeline rephrases the question, lists arguments, ranks them, adjusts for biases, and then guesses the forecast. They note “The model can potentially generate weak arguments”, and the appendix shows some good ones (decision trees) and some bad ones.
*   *March 11: Good Judgment’s* [50-superforecast analysis of Covid-19 origins](https://goodjudgment.com/wp-content/uploads/2024/03/Superforecasters-Covid-Origin-240312.pdf) ([substack](https://goodjudgment.substack.com/p/superforecasting-the-origins-of-the)). Reports that the forecasters used base rates, scientific evidence, geopolitical context, and views from intelligence communities, but not what these were. (Conversely, the RootClaim debate gives so much info that even [Scott Alexander’s summary](https://www.astralcodexten.com/p/practically-a-book-review-rootclaim) is a dozen pages.) 10 of the 50 superforecasters ended with a dissenting belief.
*   *March 18: Metaculus and Federation of American Scientists*’ [pilot of forecasting expected value of scientific projects](https://fas.org/publication/predicting-progress-utility-forecasting/). “\[T\]he research proposals lacked details about their research plans, what methods and experimental protocols would be used, and what preliminary research the author(s) had done so far. This hindered their ability to properly assess the technical feasibility of the proposals and their probability of success.”
*   *March 20: DeepMind’s *[“Evaluating Frontier Models for Dangerous Capabilities”](https://arxiv.org/abs/2403.13793), featuring Swift Centre forecasts ([X](https://twitter.com/tshevl/status/1770744344669990981)). Reports forecaster themes: “Across all hypotheticals, there was substantial disagreement between individual forecasters.” Lists a few cruxes but doesn’t provide any complete arguments or models.

In these cases and the FRI collaboration, the forecasts are from top practitioners with great track records of accuracy (or “approaching” this, in the case of AI crowds). The questions are of the utmost importance.

Yet what can we learn from these? Dylan Matthews [wrote last month in Vox](https://www.vox.com/future-perfect/2024/2/13/24070864/samotsvety-forecasting-superforecasters-tetlock) about “the tight connection between forecasting and building a model of the world.” Where is this model of the world?

[FRI](https://forecastingresearch.org/)’s adversarial collaboration did the best here. They list several “cruxes”, and measure how much of people’s disagreement can be explained by them. Still, I can’t use these cruxes to update *my* models of the world.

When DeepMind hired Swift Centre forecasters, as when OpenAI hired forecasters (see 2.12 in the [GPT-4 paper](https://arxiv.org/pdf/2303.08774.pdf)), domain experts and elite generalist forecasters probably had great discussions and probed deeply. But the published result reminds me of critiques of crowd forecasting that [Eli Lifland made](https://forum.effectivealtruism.org/posts/S2vfrZsFHn7Wy4ocm/bottlenecks-to-more-impactful-crowd-forecasting-2#Failure_modes2), and [Nuño Sempere and Alex Lawsen published](https://arxiv.org/abs/2106.11248), back in 2021. Eli put it simply to me:

> In AI / AI safety, what we need most right now is deep research into specific topics rather than shallow guesses.

### Those Who Seek Rationales, And Those Who Do Not

The lack of rationales in crowd forecasts has always been conspicuous. What were the primary sources? What were the models and base rates? My personal experience echoes Tyler Cowen, that this absence can be a dealbreaker to academics, journalists, executives, and the public. The [Economist wrote](https://www.economist.com/science-and-technology/2021/04/15/how-spooks-are-turning-to-superforecasting-in-the-cosmic-bazaar) on the Cosmic Bazaar, “The long-term viability of forecasting will depend, though, not just on accuracy, but also explainability.” A [paper in Intelligence and National Security](https://www.tandfonline.com/doi/full/10.1080/02684527.2022.2142352) went so far as to conclude that the “most fundamental” issue was “decision-makers lacking interest in probability estimates.”

Some platforms have made progress on showing more than just probabilities. Metaculus ([source](https://www.metaculus.com/questions/19841/introducing-ai-powered-community-insights/)) and INFER ([source](https://www.linkedin.com/posts/infer-public_we-have-introduced-ai-powered-rationale-summaries-activity-7122264161211883520-MCPf/)) produce AI summaries drawn from comments. Kalshi recently got approval to host comments; private prediction markets sometimes require commenting to get payouts. Good Judgment, Swift Centre, and Samotsvety do give (private) justifications to their clients.

But when rationales are just prose, rather than models, and there’s a crowd producing it, the insights are lost. Vitalik [predicted in January](https://vitalik.eth.limo/general/2024/01/30/cryptoai.html) crowds are getting larger:

> Prediction markets have been a holy grail of epistemics technology for a long time \[…\] one specific feature of prediction market ecosystems that we can expect to see in the 2020s that we did not see in the 2010s: the possibility of ubiquitous participation by AIs.

I created the [2024 Manifold humans vs. AI tournament](https://news.manifold.markets/p/human-v-bots-forecasting-tournament), and I endorse “ubiquitous participation by AIs.” Methods to elicit useful models from large crowds may help, perhaps with the AI Objective Institute’s “[Talk to the City](https://ai.objectives.institute/talk-to-the-city)” approach.

More likely there’s a deep tradeoff here. Steinhardt’s paper produced decently good overall forecasts from an AI crowd largely drawing from variable-quality arguments. 

Squint, and this is what all forecasting platforms look like: good aggregate forecasts, with a melange of variable-quality comments.

### So What Do Elite Forecasters Actually Know?

At Google and at Metaculus, I hosted dozens of “[Forecast Fridays](https://www.metaculus.com/questions/15548/forecast-fridays/)”, where top forecasters worked through questions for the audience. I’ve spoken at length to some of the very best forecasters in the world. I’m consistently impressed with their clarity of thought, their objectivity, their humility. Their models are often simple yet clever, such as “defenders have a 3-5 fold military advantage compared to invaders” and “bills in congress have X%, Y%, and Z% chance of passing A, B, C committees and votes”.

Oddly, some Forecast Friday presenters reported spending more time preparing their talks than they did on a typical tournament question for big prizes. Spending 10+ hours per question is tough across the 30+ questions nearly all tournaments have, from Tetlock’s first IARPA tournament in 2011, to the ACX ones in 2023 and 2024. These tournaments need this volume to statistically identify the best forecasters.

Elite forecasters’ complaints of time constraints match my experience. Even on one single question, I “see a world in a grain of sand.” Every basic fact of the world is rich with assumptions and historical context. The more I pull on a thread, the more I unravel. And it’s not all chaos: the forecasting revolution is happening because patterns *do* exist and *can* be found, as evidenced by the great scores many achieve.

I recently spent half a day on one question I considered easy: how SCOTUS will rule in an upcoming 1st Amendment case. I started on a series of historical models: (1) on how ideology impacts justice rulings, (2) on how “swing voters'' weigh the societal implications of their rulings, and (3) on the effect of lower court rulings on higher court rulings. Hour after hour, I made my models better, and squeezed out more and more Brier Score. I could write a whole dissertation on this question.

So imagine how the elite forecasters feel, facing 30-50 questions in a tournament. As one put it to me, this is the “dirty secret” of forecasting tournaments - the winners are those that spend the most time. The best strategy is to spend your marginal hour getting into the right ballpark, or doing a quick-and-dirty update when something changes. In fact, I think our main discovery is that *elite forecasters make far fewer big mistakes*. 

As Eli Lifland [wrote](https://forum.effectivealtruism.org/posts/S2vfrZsFHn7Wy4ocm/bottlenecks-to-more-impactful-crowd-forecasting-2#Incentivizing_time_spent_on_important_questions):

> Some questions are orders of magnitude more important than others but usually don’t get nearly orders of magnitude more effort on crowd forecasting platforms.

Such are the incentives of the academic approach to forecasting. Such are the incentives of even [Metaculus's great new scoring rules](https://www.metaculus.com/questions/20025/new-scores-new-leaderboard-new-medals/), and such are the incentives of prediction markets. Even in the FRI collaboration, which focused on one big “AGI ruin by 2100?” question, the participants spent an average of 55 hours total on 38 questions.

### The Rationale-Shaped Hole At The Heart Of Forecasting

These incentives in the forecasting ecosystem have produced great forecasters and accurate forecasts. But the ecosystem is not geared for knowledge generation. Political scientists like Tetlock treat forecasting as a psychology problem; economists and mathematicians treat it as an aggregation and scoring problem; systems thinkers treat forecasting as a black box, hoping to weave together a big causal graph of forecasts.

Individual forecasters, though, **do** treat forecasting as a knowledge generation problem. They gather facts, they reason through possibilities, and they build models, and they refine these through debate.

Imagine we gave the world’s elite forecasters unlimited time on a single question. How well would they do? How good of a rationale could they produce? How persuasive would they be to the wider world? [Samotsvety’s 2022 nuclear risk forecasting](https://forum.effectivealtruism.org/posts/KRFXjCqqfGQAYirm5/samotsvety-nuclear-risk-forecasts-march-2022#Methodology) is one indicator, but [according to](https://forum.effectivealtruism.org/posts/W8dpCJGkwrwn7BfLk/nuclear-expert-comment-on-samotsvety-nuclear-risk-forecast-2) forecasting and nuclear risk expert Peter Scoblic, even that had much room for improvement.

For simplicity, I divide a forecasting rationale into three components: facts, reasons, and models. Let’s consider each in turn, asking what it would look like to focus on its production.

### Facts: Cite Your Sources

As a general practice, published forecasts should list the key facts they depend on, and link these facts back to primary sources.

That’s it. Onto Reasons and Models.

### Reasons: So You Think You Can Persuade With Words

The standard I’d like to see is Scott Alexander’s [2019 adversarial collaboration](https://slatestarcodex.com/2020/01/13/2019-adversarial-collaboration-winners/), “where two people with opposite views on a controversial issue work together to present a unified summary of the evidence and its implications.” The key benefit here is that “all the debate and rhetoric and disagreement have already been done by the time you start reading, so **you’re just left with the end result**" \[emphasis mine\]

Scott concluded this succeeded with: (a) whether calorie restriction slows aging; (b) the net benefit/harm of eating meat; (c) the net benefit/harm of circumcision; (d) on economic fallout from AI automation.

It fell short (e.g. no convergence on a conclusion) on (a) will space colonization would reduce x-risk, (b) net benefit/harm of gene editing; (c) net benefit/harm of abortion; (d) whether spiritual experiences are scientifically valid.

So in 4 of 8 cases, two people with opposite views on a controversial topic converged to a shared conclusion. And the final pieces are valuable: they persuaded each other, so they are also likely to persuade the public too.

The pieces are long, and have some models in addition to reasons. But they're shorter than many recent works, for exactly the reason Scott gives: the debate is already done, so you just see the result. Scott himself did this for the [RootClaim debate](https://www.astralcodexten.com/p/practically-a-book-review-rootclaim), producing a summary that is far more accessible than the original 15 hours of debates.

Both the aforementioned [FRI paper](https://forum.effectivealtruism.org/posts/orhjaZ3AJMHzDzckZ/results-from-an-adversarial-collaboration-on-ai-risk-fri), and the [2022 Good Judgment effort to forecast AGI](https://goodjudgment.com/superforecasting-ai/), did produce summaries that highlighted key cruxes. FRI went further and quantitatively estimated how important each crux was - a great starting point towards an adversarially-collaborated synthesis.

Yet reading these papers still means wading into the debate. Publishing a crowd forecast is like publishing an unresolved debate. Perhaps that’s an accurate reflection of reality. But I’d like to see adversarial collaborations where the *dissenting forecasters are the ones that write up the shared view*, rather than the study investigators. 

That leaves us with Models. Can they help us navigate the labyrinth of prose?

### Models: So You Think You Can Model the World

Molly Hickman, of FRI and Samotsvety, wrote a [great piece in Asterisk Magazine](https://asteriskmag.com/issues/05/how-not-to-predict-the-future) with the subtitle “Good forecasting thrives on a delicate balance of math, expertise, and… vibes.” She writes:

> But there’s a more insidious second kind of error \[after “trusting our preconceptions too much”\] that bites forecasters — putting too much store in clever models that minimize the role of judgment. Just because there’s math doesn’t make it right.

Yet she concludes:

> It’s almost always worth the effort to make a quantitative model — not because its results are the immutable truth but because practicing decomposing questions and generating specific probabilities are how you train yourself to become a better forecaster.

All models are wrong, but some are useful for forecast accuracy. For the purpose of producing useful knowledge, though, we don’t use models enough, especially in AGI forecasting.

Tyler Cowen [again](https://marginalrevolution.com/marginalrevolution/2023/04/this-gpt-4-answer-speaks-for-itself.html):

> If the chance of existential risk from AGI is 99 percent, or 80 percent, or even 30 percent, surely some kind of modeled demonstration of the basic mechanics and interlocking pieces is possible.

It is possible! It’s much harder than modeling geopolitics, where the future more resembles the past. I’m partial to Nuño’s [base rates of technological disruption](https://www.lesswrong.com/posts/FaCqw2x59ZFhMXJr9/a-prior-for-technological-discontinuities) which led him to posit “30% that AI will undergo a ‘large and robust’ discontinuity, at the rate of maybe 2% per year if it does so.” The beauty of his analysis is that you can inspect it. I think Nuño and I would converge, or get close to it, if we hashed it out.

Other great examples include [Tom Davidson’s compute-centric model](https://www.lesswrong.com/posts/Gc9FGtdXhK9sCSEYu/what-a-compute-centric-framework-says-about-ai-takeoff), [Roodman's “materialist” model](https://www.openphilanthropy.org/research/modeling-the-human-trajectory/), and [Joe Carlsmith’s six ingredients model](https://www.lesswrong.com/posts/qRSgHLb8yLXzDg4nf/reviews-of-is-power-seeking-ai-an-existential-risk). These models are full of prose, yet unlike pure reasoning, they have facts you can substitute and numbers you can adjust that directly change the conclusion.

I bet that if the FRI adversarial collaborators had drawn from Sempere’s, Davidson’s, Roodman’s, or Carlsmith’s models, they would have converged more. A quick ctrl+f of the 150 page FRI report shows only two such references - both to Davidson’s... appearance on a podcast! The 2022 GJ report used the Carlsmith model to generate the questions, but it appears none of the superforecasters appealed to any models of any kind, not even [Epoch data](https://epochai.org/trends), in their forecasts.

This goes a long way towards explaining the vast gulf between superforecasters and AI researchers on AGI forecasts. The FRI effort was a true adversarial collaboration, yet as Scott [wrote](https://www.astralcodexten.com/i/142509694/the-predicting-of-robots), “After 80 hours, the skeptical superforecasters increased their probability of existential risk from AI! All the way from 0.1% to . . . 0.12%.”

This may be rational, in that the superforecasters already knew the quality of the arguments of the “concerned” group. My guess is that they correctly judged them as not up to their superforecaster standards.

Yet the superforecasters themselves are lacking models on which to base their conclusions. Even after years of tournaments, it is hard for them accumulate enough non-trivial, resolved questions to train to accurately tell apart 0.1% from 1%.

### There Is No Microeconomics of AGI

This piece focuses on AGI forecasting, because it’s important, and because it has been the focus of recent progress in the art and science of forecasting. But judgmental forecasting overall does much better on other topics. See e.g. [Metaculus’s AI track record](https://www.metaculus.com/notebooks/16708/exploring-metaculuss-ai-track-record/), getting Briers of 0.182 compared to overall Briers of 0.11 (0.25 is chance), and [Nuño's and Misha's post](https://nunosempere.com/blog/2023/11/07/hurdles-forecasting-ai/) on challenges in forecasting AI, or Robert de Neufville’s [“Forecasting Existential Risk is Hard”](https://metaculus-public.s3.us-west-2.amazonaws.com/Forecasting+Extraordinary+Events+(1).pdf), or Yudkowsky in 2013 ([page 23](https://intelligence.org/files/IEM.pdf)).

If accuracy continues to be low on AGI forecasting, then the case for focusing on facts, reasons, and models as the primary output is even stronger. [Epoch](https://epochai.org/trends)’s work on training data, compute performance, and algorithmic performance are a great example. Epoch’s work gets better and more useful over time, whereas the 2022 Good Judgment AGI forecasts already feel stale.

The Swift Centre’s probability distributions on questions like “When will self-proliferation capabilities be achieved?” in the DeepMind paper are provocative but shallow. Forecasts without rationales usually are. This is also true of the [page of 50 key AI forecasts](http://metaculus.com/ai) I put together at Metaculus.

Consider: would you rather have Brier-0.18-quality predictions on [all 700+ Arb questions on AI safety](https://github.com/NunoSempere/clarivoyance)? Or a distilled set of facts, reasons, and models on a few of the easier questions - say, semiconductors in China, EU AI regulation, and AI Safety labs funding?

### 700 AI questions you say? Aren’t We In the Age of AI Forecasters?

Yes, indeed we are. For the first 6 months of [FutureSearch](http://futuresearch.ai), we planned to generate big batches of questions, forecast them quickly, and update them frequently for our clients. After all, don’t we all want [efficiently discovered causal graphs](https://arxiv.org/html/2402.01207v1)? Is this not the time for Robin Hanson’s [combinatorial prediction markets](https://link.springer.com/chapter/10.1007/978-3-642-40381-1_22)?

Probably it is. But the best use of LLMs in forecasting we see is *within research topics within individual questions*. From Schoenegger and Tetlock, we know [LLM Assistants Improve Human Forecasting Accuracy](https://arxiv.org/abs/2402.07862), even when the assistant is just GPT-4 prompted to follow the 10 commandments of superforecasting.

The more we tinkered with FutureSearch, building and improving (and often discarding) features to test in evals, the more we struggled to decide on the rationales to target, lacking good public examples. Imitating Metaculus comments couldn’t be the way.

Really good reasons are hard to generate with LLMs. But what [did work](https://www.astralcodexten.com/p/mantic-monday-21924) was using LLMs to build simple models. Consider the [antitrust suit against Apple](https://app.futuresearch.ai/forecasts/vKngx/public). Does it matter that the DOJ initiated the suit, not the FTC? In antitrust suits, do tech companies fare better or worse than the base rate for all companies? What’s the distribution of outcomes of other suits against Apple over the years? What is the disposition of the US attorney general Merrick Garland? Research tasks like that are perfect for LLM-based systems. You can [see all of FutureSearch’s conclusions on these things](https://app.futuresearch.ai/forecasts/eMocg/public) and judge them for yourself.

And, once you’ve done research like this on one question, you can’t help but store your facts, reasons, and models and use them for other questions too.

You can see where this is going.

### Towards “[Towards Rationality Engines](https://www.astralcodexten.com/p/mantic-monday-31124#%C2%A7towards-rationality-engines)”

In February, [Scott wrote](https://www.astralcodexten.com/p/mantic-monday-21924):

> An AI that can generate probabilistic forecasts for any question seems like in some way a culmination of the rationalist project. And if you can make something like this work, it doesn’t sound too outlandish that you could apply the same AI to conditional forecasts, or to questions about the past and present (eg whether COVID was a lab leak).

And in March, he [wrote](https://www.astralcodexten.com/p/mantic-monday-31124#%C2%A7towards-rationality-engines):

> But \[Forecasting AIs\] can’t answer many of the questions we care about most - questions that aren’t about prediction… One of the limitations of existing LLMs is that they hate answering controversial questions. They either say it’s impossible to know, or they give the most politically-correct answer. This is disappointing and unworthy of true AI.

Indeed. We at FutureSearch think a forecasting system with legible reasons and models at its core can contribute to such a rationality engine. If other orgs and platforms join us and FRI in putting more emphasis on rationales, we’ll see more mainstream adoption of the conclusions we draw.

Paraphrasing Yudkowsky and Sutskever: to predict the next token, you have to simulate the world. To paraphrase my cofounder Lawrence Phillips, forecasting is the ultimate loss function to optimize a world model against. Let’s build these world models.

Please reach out to hello@futuresearch.ai if you want to get involved!

### Sample Forecasts With Reasons and Models

[The 2024 U.S. Supreme Court case on whether to uphold emergency abortion care protections, Moyle v. United States](https://app.futuresearch.ai/forecasts/A873f/public)

[The 2024 U.S. Supreme Court case on whether to grant former presidents immunity from prosecution, Trump v. United States](https://app.futuresearch.ai/forecasts/iFLVq/public)

[The New York Times lawsuit on whether OpenAI can continue to serve models train on NYT articles](https://app.futuresearch.ai/forecasts/QsYKs/public)

[The DOJ’s antitrust suit against Apple filed on March 21, 2024](https://app.futuresearch.ai/forecasts/eMocg/public)