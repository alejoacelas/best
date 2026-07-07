---
title: "Assessing Kurzweil predictions about 2019: the results"
author: "Stuart_Armstrong"
date: 2020-05-06
url: https://lesswrong.com/posts/NcGBmDEe5qXB7dFBF/assessing-kurzweil-predictions-about-2019-the-results
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by macrostrategy/futurists-track-record.md; systematic scoring of Kurzweil's 1999 predictions for 2019 — epistemic-habits case study in forecasting accuracy"
---

**EDIT**: Mean and standard deviation of individual predictions can be found [here](https://www.lesswrong.com/posts/YvbS2KdDRNDsLrKHq/kurzweil-s-predictions-scores).

Thanks to all my brave assessors, I now have the data about Kurzweil's [1999 predictions about 2019](https://en.wikipedia.org/wiki/Predictions_made_by_Ray_Kurzweil#The_Age_of_Spiritual_Machines).


This was a follow up to a [previous assessment about his predictions about 2009](https://www.lesswrong.com/posts/kbA6T3xpxtko36GgP/assessing-kurzweil-the-results), which showed a mixed bag. Roughly evenly divided between right and wrong, which I found pretty good for ten-year predictions:

![](https://www.dropbox.com/s/chqrw06srohpu0b/assessing_kurzweil.png?raw=1)


So, did more time allow for trends to overcome noise or more ways to go wrong? **Pause for a moment to calibrate your expectations**.

# Methods and thanks

So, for the 2019 predictions, I divided them into [105 separate statements](https://www.dropbox.com/s/jmvciqv7u3rs7x5/Kurzweil_2019.tsv?dl=0), did a call for volunteers, with [instructions here](https://www.lesswrong.com/posts/GhDfTAtRMxcTqAFmc/assessing-kurzweil-s-1999-predictions-for-2019); the main relevant point being that I wanted their assessment for 2019, not for the (possibly transient) current situation. I got 46 volunteers with valid email addresses, of which 34 returned their predictions. So many thanks, in reverse alphabetical order, to Zvi Mowshowitz, Zhengdong Wang, Yann Riviere, Uriel Fiori, orthonormal, Nuño Sempere, Nathan Armishaw, Koen Holtman, Keller Scholl, Jaime Sevilla, Gareth McCaughan, Eli Rose and Dillon Plunkett, Daniel Kokotajlo, Anna Gardiner... and others who have chosen to remain anonymous.

# The results

Enough background; what did the assessors find? Well, of the 34 assessors, 24 went the whole hog and did all 105 predictions; on average, 91 predictions were assessed by each person, a total of 3078 individual assessments[^missing].

[^missing]: Five assessments of the 3078 returned question marks; I replaced these with "3" ("Cannot Decide"). Four assessors of the 34 left gaps in their predictions, instead of working through the randomly ordered predictions; to two significant figures, excluding these four didn't change anything, so I included them all.

So, *did* more time allow for more perspective or more ways to go wrong? Well, Kurzweil's predictions for 2019 were considerably worse than those for 2009, with more than half strongly wrong:

![](https://www.dropbox.com/s/eea1ihml8b0pqde/graph.png?raw=1)

# Interesting details

The (anonymised) data can be [found here](https://www.dropbox.com/s/hsqvmv1g8t3wroi/all_Kurzweil_done_without_names.xlsx?dl=0)[^details], and I encourage people to download and assess it themselves. But some interesting results stood out to me:

[^details]: Each column is an individual predictor, each row an individual prediction.

## Predictor agreement

Taking a single prediction, for instance the first one:

* 1: Computers are now largely invisible. They are embedded everywhere--in walls, tables, chairs, desks, clothing, jewelry, and bodies.

Then we can compute the standard deviation of the predictors' answer for that prediction. This gives an impression of how much disagreement there was between predictors; in this case, it was 0.84.

Perfect agreement would be a standard deviation of 0; maximum disagreement (half find "1", half find "5") would be a standard deviation of 2. Perfect spread - equal numbers of 1s, 2s, 3s, 4s, and 5s - would have a standard deviation of $\sqrt{2} \approx$ 1.4.

Across the 105 predictions, the maximum standard deviation was **1.7**, the minimum was **0** (perfect agreement), and the average was **0.97**. So the predictors had a medium tendency to agree with each other.


## Most agreement/falsest predictions

There was perfect agreement on five predictions; and on all of these, the agreed prediction was always "5": "False".

These predictions were:

* 51: "Phone" calls routinely include high-resolution three-dimensional images projected through the direct-eye displays and auditory lenses.
* 55: [...] Thus a person can be fooled as to whether or not another
person is physically present or is being projected through electronic communication.
* 59: The all-enveloping tactile environment is now widely available and fully convincing.
* 62: [...] These technologies are popular for medical examinations, as well as sensual and sexual interactions with other human partners or simulated partners.
* 63: [...] In fact, it is often the preferred mode of interaction, even when a human partner is nearby, due to its ability to enhance both experience and safety.

As you can see, Kurzweil suffered a lot from his VR predictions. This seems a perennial thing: Hollywood is always convinced that mass 3D is just around the corner; technologists are convinced that VR is imminent.

## Most accurate prediction:

With a mean score of 1.3, the prediction deemed most accurate was:

* 83: The existence of the human underclass continues as an issue.

Now this might seem a trivial prediction, especially in retrospect, but I want to defend Kurzweil here - it was not at all certain in 1999, with many utopian changes foreseen and expected, that this would still be an issue.

The next prediction deemed most accurate (mean of 1.4), is:

* 82: People attempt to protect their privacy with near-unbreakable encryption technologies, but privacy continues to be a major political and social issue with each individual's practically every move stored in a database somewhere.

This is truly non-trivial for 1999, and I do give Kurzweil credit for that.

## Least agreement

With a standard deviation of 1.7, the predictors disagreed the most on this prediction:

* 37: Computation in general is everywhere, so a student's not having a computer is rarely an issue.

This may have to do with different judgement over the extent of "everywhere" and "rarely an issue", or over who might or might not find this to be an issue.

The next prediction with the most disagreement (st dev 1.6) is:

* 16: Rotating memories and other electromechanical computing devices have been fully replaced with electronic devices.

It's possible that "fully" was a problem here, but I see this prediction as being just false.

## Most "Cannot Decide"

This prediction had more than $46\%$ of predictors choosing "Cannot Decide":

* 20: It is now fully recognized that the brain comprises many specialized regions, each with its own topology and architecture of interneuronal connections.

Maybe the ambiguity in "fully recognized" made this hard to assess. Or maybe, as [suggested in the comments](https://www.lesswrong.com/posts/NcGBmDEe5qXB7dFBF/assessing-kurzweil-predictions-about-2019-the-results?commentId=HkpLNf3CLp4Hw2m9D), because this doesn't look much like a "prediction", but an obviously true statement?


## A question of timeline?

It's been suggested that [Kurzweil's predictions for 2009 are mostly correct in 2019](https://www.futuretimeline.net/forum/topic/17903-kurzweils-2009-is-our-2019/). If this is the case - Kurzweil gets the facts right, but the timeline wrong - it would be interesting to revisit these predictions in 2029 (if he is a decade optimistic) and 2039 (if he expected things to go twice as fast). Though many of his predictions seem to be of the type "once true, always true", so his score should rise with time, assuming continuing technological advance and no disasters.

# In conclusion

Again, thanks to all the volunteers who assessed these predictions and thanks to Kurzweil who, unlike most prognosticators, had the guts and the courtesy to write down his predictions and give them a date.

I strongly suspect that most people's 1999 predictions about 2019 would have been a lot worse.