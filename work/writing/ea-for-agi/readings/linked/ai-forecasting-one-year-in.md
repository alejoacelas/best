---
title: "AI Forecasting: One Year In"
date: 2022-07-04
url: https://bounded-regret.ghost.io/ai-forecasting-one-year-in
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by two-year-update-personal-timelines.md; Steinhardt reviews AI forecasts one year on (epistemics/forecasting)"
---

Last August, my research group [created a forecasting contest](https://bounded-regret.ghost.io/ai-forecasting/) to predict AI progress on four benchmarks. Forecasts were asked to predict state-of-the-art performance (SOTA) on each benchmark for June 30th 2022, 2023, 2024, and 2025. It’s now past June 30th, so we can evaluate the performance of the forecasters so far.

Forecasters were asked to provide probability distributions, so we can evaluate both their point estimates and their coverage (whether the true result was within their credible intervals). I’ll dive into the data in detail below, but my high-level takeaways were that:

  1. Forecasters’ predictions were not very good in general: two out of four forecasts were outside the 90% credible intervals.
  2. However, they were better than my personal predictions, and I suspect better than the median prediction of ML researchers (if the latter had been preregistered).
  3. Specifically, progress on ML benchmarks happened significantly **faster** than forecasters expected. But forecasters predicted faster progress than I did personally, and my sense is that I expect somewhat faster progress than the median ML researcher does.
  4. Progress on a _robustness_ benchmark was slower than expected, and was the only benchmark to fall short of forecaster predictions. This is somewhat worrying, as it suggests that machine learning capabilities are progressing quickly, while safety properties are progressing slowly.



Below I’ll review the tasks and competition format, then go through the results.

## Forecasting Tasks and Overall Predictions

As a reminder, the four benchmarks were:

  * [MATH](https://github.com/hendrycks/math?ref=bounded-regret.ghost.io), a mathematics problem-solving dataset;
  * [MMLU](https://github.com/hendrycks/test?ref=bounded-regret.ghost.io), a test of specialized subject knowledge using high school, college, and professional multiple choice exams;
  * [Something Something v2](https://paperswithcode.com/dataset/something-something-v2?ref=bounded-regret.ghost.io), a video recognition dataset; and
  * [CIFAR-10 robust accuracy](https://robustbench.github.io/?ref=bounded-regret.ghost.io#div_cifar10_Linf_heading), a measure of adversarially robust vision performance.



Forecasters were asked to predict performance on each of these. Each forecasting question had a $5000 prize pool (distributed across the four years). There were also two questions about compute usage by different countries and organizations, but I’ll ignore those here.

Forecasters themselves were recruited with the platform [Hypermind](https://prod.hypermind.com/ngdp/en/showcase2/showcase.html?sc=JSAI&ref=bounded-regret.ghost.io). You can read more details in the [initial blog post](https://bounded-regret.ghost.io/ai-forecasting/) from last August, but in brief, professional forecasters make money by providing accurate probabilistic forecasts about future events, and are typically paid according to a proper scoring rule that incentivizes calibration. They apply a wide range of techniques such as base rates, reference classes, trend extrapolation, examining and aggregating different expert views, thinking about possible surprises, etc. (see my [class notes](http://www.stat157.com/calendar/?ref=bounded-regret.ghost.io) for more details).

Here is what the forecasters’ point estimates were for each of the four questions (based on [Hypermind's dashboard](https://prod.hypermind.com/ngdp/en/showcase2/showcase.html?sc=JSAI&ref=bounded-regret.ghost.io)):

Expert performance is approximated as 90%. The 2021 datapoint represents the SOTA in August 2021, when the predictions were made.[1]

For June 2022, forecasters predicted 12.7% on MATH, 57.1% on MMLU (the multiple-choice dataset), 70.4% on adversarial CIFAR-10, and 73.0% on Something Something v2.

At the time, I described being surprised by the 2025 prediction for the MATH dataset, which predicted over 50% performance, especially given that 2021 accuracy was only 6.9% and most humans would be below 50%.

Here are the actual results, as of today:

  * MATH: 50.3% (vs. 12.7% predicted)
  * MMLU: 67.5% (vs. 57.1% predicted)
  * Adversarial CIFAR-10: 66.6% (vs. 70.4% predicted)
  * Something Something v2: 75.3% (vs. 73.0% predicted)



MATH and MMLU progressed much faster than predicted. Something Something v2 progressed somewhat faster than predicted. In contrast, Adversarial CIFAR-10 progressed somewhat slower than predicted. Overall, progress on machine learning **capabilities** (math, MMLU, video) was significantly faster than what forecasters expected, while progress on **robustness** (adversarial CIFAR) was somewhat slower than expected.

Interestingly, the 50.3% result on MATH [was released](https://ai.googleblog.com/2022/06/minerva-solving-quantitative-reasoning.html?ref=bounded-regret.ghost.io) on the **exact day** that the forecasts resolved. I'm told this was purely coincidental, but it's certainly interesting that a 1-day difference in resolution date had such a big impact on the result.

## How Accurate Were the Forecasts?

To assess forecast accuracy, we need to look not just at the point estimate, but at the forecasters’ actual probability distribution. Even though 68% on MMLU seems far off from 57%, perhaps it was well within the credible interval of the forecasts. However, that turns out not to be the case, for either MATH or MMLU:

I marked the actual result with a star, and it’s clear that in both cases it’s in the far tails of the forecast distribution.

For completeness, here are results for adversarial CIFAR-10 and Something Something v2:

While both were somewhat in the tails, they fell within a part of the distribution that at least had non-negligible probability density.

## The Median ML Researcher Was (Probably) Even More Wrong

While forecasters didn’t do great at forecasting progress in ML, the median ML researcher would likely have done even worse. Unfortunately, we don’t have preregistered predictions to check this, but a few lines of evidence support this conclusion.

First, I did (somewhat) preregister a prediction of my own. In _[Updates and Lessons from AI Forecasting](https://bounded-regret.ghost.io/ai-forecasting/)_ , I said:

> “Projected progress on math and on broad specialized knowledge are both faster than I would have expected. I now expect more progress in AI over the next 4 years than I did previously.”

And, more to the point:

> “Current performance on this dataset is quite low--6.9%--and I expected this task to be quite hard for ML models in the near future. However, forecasters predict more than 50% accuracy by 2025! This was a big update for me.”

> “If I imagine an ML system getting more than half of these questions right, I would be pretty impressed. If they got 80% right, I would be super-impressed. The forecasts themselves predict accelerating progress through 2025 (21% in 2023, then 31% in 2024 and 52% in 2025), so 80% by 2028 or so is consistent with the predicted trend. This still just seems wild to me and I'm really curious how the forecasters are reasoning about this.”

So, while I didn’t register a specific prediction, I clearly thought the forecasts on MATH were aggressive in terms of how much progress they predicted, whereas it turned out they weren’t aggressive enough.

At the same time, my personal predictions about ML progress seem to be more aggressive than the median ML researcher. I would personally describe them as “somewhat more aggressive”, but some of my students think they are “much more aggressive”. Either way, this suggests that the median ML researcher would have predicted even less progress than me, and so been even more wrong than I was.

Anecdotal evidence seems to confirm this. When our group first released the MATH dataset, at least one person told us that it was a pointless dataset because it was too far outside the range of what ML models could accomplish (indeed, I was somewhat worried about this myself).

If ML researchers (including myself) would like to defend their honor on this point, I think the best way would be to register forecasts for the upcoming year in advance. You can do this in any of the following ways:

  * Submit forecasts for the [MATH](https://www.metaculus.com/questions/11675/math-sota-in-2023-2025/?ref=bounded-regret.ghost.io) and [MMLU](https://www.metaculus.com/questions/11676/mmlu-sota-in-2023-2025/?ref=bounded-regret.ghost.io) questions on Metaculus (easy, only requires Google account).
  * Submit [directly to Hypermind](https://prod.hypermind.com/ngdp/en/showcase2/showcase.html?sc=JSAI&ref=bounded-regret.ghost.io) for the possibility of winning money (sign-up required, takes a bit of time).
  * Or just comment on this post.



I'll write another blog post in a week with my own forecasts and reasoning.

## Was Progress Surprising, or Were the Forecasters Bad?

Given that forecasters seemed not to predict progress well, we might wonder if they were just not trying very hard or were otherwise not doing a good job. For instance:

  * The overall prize pool was only $5000 for each benchmark (which itself consists of four questions for 2022-2025). Divided over the 60-70 participants, the average payout per benchmark is only $80, or $20 per question.[2] So, it’s possible that forecasters were not incentivized strongly enough.
  * Hypermind’s interface has some limitations that prevent outputting arbitrary probability distributions. In particular, in some cases there is an artificial limit on the possible standard deviations, which could lead credible intervals to be too narrow.
  * Maybe the forecasters just weren’t skilled enough—either the best forecasters didn’t participate, or the forecasts were too different from more traditional forecasts, which tend to focus on geopolitics.



These are all plausible concerns, but I think progress is still “surprising” even after accounting for them. For instance, superforecaster Eli Lifland [posted predictions](https://www.foxy-scout.com/my-hypermind-ari/?ref=bounded-regret.ghost.io) for these forecasts on his blog. While he notes that the Hypermind interface limited his ability to provide wide intervals on some questions, he doesn’t make that complaint for the MATH 2022 forecast and posted the following prediction, for which the true answer of 50.3% was even more of an outlier than Hypermind's aggregate:

A separate forecast, which I commissioned from the [Samotsvety Forecasting](https://samotsvety.org/?ref=bounded-regret.ghost.io) group and paid around $2500 for, predicted MATH performance in 2026. The current accuracy of 50.3% was around the 75th percentile for [their 2026 forecast](https://forecast.elicit.org/builder/tFjSjJy2u?ref=bounded-regret.ghost.io), so presumably it was significantly further in the tail for 2022. Their forecast was made in Elicit, so there were no constraints on allowable distributions, and I explicitly selected Samotsvety as having a good track record and being particularly interested in AI, and paid them a high hourly rate. So, the concerns about the Hypermind forecasts don’t apply here, but progress still outpaced the forecast.

Finally, the fact that forecasters did better than me and would have probably beat the median ML researcher suggests that they aren’t lacking an obvious domain-specific skill.

## Looking Forward

Now that forecasters have had one year of practice, I'm hoping there will be fewer surprises next year--but we'll have to wait and see. In the meantime, I'm hoping that more work will be done on AI safety and alignment, so that it can keep pace with the rapid increase in capabilities.

Finally, as one specific intersection between AI and forecasting that could help us better predict the future, our research group recently released the [Autocast benchmark](https://github.com/andyzoujm/autocast?ref=bounded-regret.ghost.io), which can be used to train ML systems to forecast future events. Currently, they are significantly worse than humans, but this was true for MATH one year ago. Can ML systems get better at forecasting as fast as they got better at math? Superhuman forecasters would help us better prepare for the many challenges that lie ahead. I hope to be pleasantly surprised.

* * *

  1. The contest started in August but was open until the end of September. ↩︎

  2. Payouts were non-uniform. In particular, longer time horizons had a larger payout. ↩︎




[__](https://www.facebook.com/sharer.php?u=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/)[__](https://twitter.com/intent/tweet?url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&text=AI%20Forecasting%3A%20One%20Year%20In)[__](https://pinterest.com/pin/create/button/?url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&media=&description=AI%20Forecasting%3A%20One%20Year%20In)[__](https://www.linkedin.com/shareArticle?mini=true&url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&title=AI%20Forecasting%3A%20One%20Year%20In)[__](https://reddit.com/submit?url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&title=AI%20Forecasting%3A%20One%20Year%20In)[__](https://www.tumblr.com/widgets/share/tool?canonicalUrl=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&title=AI%20Forecasting%3A%20One%20Year%20In)[__](http://vk.com/share.php?url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&title=AI%20Forecasting%3A%20One%20Year%20In)[__](https://getpocket.com/edit?url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/)[__](https://t.me/share/url?url=https://bounded-regret.ghost.io/ai-forecasting-one-year-in/&text=AI%20Forecasting%3A%20One%20Year%20In)

  


##  Comments

_Sign in_ to join the conversation.  

