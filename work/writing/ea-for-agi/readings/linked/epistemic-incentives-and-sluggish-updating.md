---
title: "Epistemic incentives and sluggish updating"
date: 2018-07-12
url: https://www.sideways-view.com/2018/07/12/epistemic-incentives-and-sluggish-updating
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by two-year-update-personal-timelines.md; Christiano on why beliefs update too slowly (epistemic habits)"
---

_Summary_ : We can get better estimates of epistemic virtue by considering changes in people’s beliefs, rather than only comparing their predictions to reality. But if we use this information, people who want to appear virtuous are motivated to lie about their beliefs, resulting in “sluggish” updating in a predictable direction (or a failure to update altogether). Given that humans aren’t good at lying, [I expect this to result in unconscious bias rather than conscious misrepresentation](https://sideways-view.com/2016/11/26/if-you-cant-lie-to-others-you-must-lie-to-yourself/). I suspect this incentive significantly distorts the beliefs of many reasonable people on important questions, and that it’s worth reducing this incentive even if it means we get weaker evaluations of epistemic virtue.

### The setting

Suppose that:

  * In January: Alice forecasts a 50% probability of a recession this summer, and Bob forecasts a 75% probability.
  * In February: Alice and Bob both forecast a 50% probability of recession.
  * In the summer: a recession occurs.



In one sense Bob made “better” predictions. He assigned higher probabilities to a recession, and in fact a recession occurred.

But by Bob’s own admission we can tell that Bob’s January prediction only looks good by epistemic luck—in February he still knew all the information that he knew in January, and agrees that Alice’s prediction was better.

If we had an infinite amount of experience with Alice and Bob, we could evaluate their “epistemic virtue” by directly comparing their predictions to reality. But in practice we usually evaluate predictive track records based on a small number of observations, and with only a few samples the randomness of epistemic luck could completely overwhelm the signal of epistemic virtue.

By comparing someone’s beliefs to their own future belief, we can get an unbiased estimate of epistemic virtue that typically has lower variance—and which is therefore more useful for most purposes.

(For example, rather than scoring someone based on the squared error of their prediction, we can take the sum of the squares of the changes in their prediction between the initial forecast and the moment when they learn the truth. It’s easy to prove that this gives an unbiased estimate for the squared error of their original prediction, and that in many cases it has lower variance.)

I don’t think that many smart people would _explicitly_ penalize forecasters for changing their minds. But I think it’s extremely common to use it implicitly. And on the face of it, it’s a completely rational heuristic.  _Failing_ to penalize someone for changing their minds would essentially be leaving evidence on the table.

In the example I discussed a comparison between Alice and Bob, but the same point holds even if we were just evaluating Bob.

### The problem

The problem is that you can’t actually observe Bob’s belief in February. All you can observe is what Bob  _says_ he believes in February.

On top of that, Bob cares about looking credible, whether because it makes him look good in general, it’s associated with explicit rewards, or it increases his influence in the future. (I think people are [generally very self-deceived](https://sideways-view.com/2018/07/08/the-elephant-in-the-brain/) about the relative importance of “looking good” vs. “providing useful information.”)

If Bob’s only goal is making a good prediction at that moment, then you can trust his reports to be accurate, and this gives us an unbiased estimator. But if you are also going to use Bob’s February prediction to evaluate his January prediction, this gives Bob a new incentive: he wants to avoid changing his beliefs too much, since that would make his January prediction look bad.

Here is how things might feel to Bob in February, having made a 75% prediction in January and now realizing that Alice was right with her 50% prediction:

> If I stick to my guns with 75%, then I still have a 50-50 chance of looking smarter than Alice when a recession occurs. If I waffle and say 50%, then I won’t get any credit even if my initial prediction was good. Of course if I stick with 75% now and only go down to 50% later then I’ll get dinged for making a bad prediction right now—but that’s little worse than what people will think of me immediately if I waffle.

Bob’s optimal strategy depends on exactly how people are evaluating him. If they care exclusively about evaluating his performance in January then he should always stick with his original guess of 75%. If they care exclusively about evaluating his performance in February then he should go straight to 50%. In the more realistic case where they care about both, his optimal strategy is somewhere in between. He might update to 70% this week.

This results in a pattern of “sluggish” updating in a predictable direction: once I see Bob adjust his probability from 75% down to 70%, I expect that his “real” estimate is lower still. In expectation, his probability is going to keep going down in subsequent months. (Though it’s not a sure thing—the whole point of Bob’s behavior is to hold out hope that his original estimate will turn out to be reasonable and he can save face.)

Sloths also update slowly.

I think this kind of sluggish updating is quite common—if I see Bob assign 70% probability to something and Alice assign 50% probability, I expect their probabilities to gradually inch towards one another rather than making a big jump. (If Alice and Bob were epistemically rational and honest, their probabilities would immediately take big enough jumps that we wouldn’t be able to predict in advance who will end up with the higher number. Needless to say, this is not what happens!)

Unfortunately, I think that sluggish updating isn’t even the worst case for humans. It’s quite common for Bob to double down with his 75%, only changing his mind at the last defensible moment. This is less easily noticed, but is even more epistemically costly.

#### Long-term forecasts

The incentive problem can get even worse if Alice and Bob are predicting an outcome that will occur in the distant future.

For example, suppose that Alice thinks that the probability of a singularity by 2050 is 25% and Bob thinks it is 50%. If they both stick to their guns for twenty years, we aren’t going to learn anything at all until it’s too late for anyone to care.

But if we revisit the issue next year and Bob has decided that he now agrees with Alice’s original prediction, then we might rationally conclude that Alice’s original prediction was better.

This is the worst case, where Bob’s epistemic incentive is to simply not update at all, or to update as sluggishly as he can possibly justify. (Fortunately, Bob has incentives other than looking smart, so it’s not literally the worst case.)

### Observations in the wild

Over the last few years I’ve become more aware of my brain responding to strong incentives for sluggish updating (despite hanging out in a community where sluggish updating is likely to get explicitly called out). I think the main difference between me-now and me-5-years-ago is greater awareness rather than a change in the underlying incentives.

It’s not super clear to me how much these incentives actually distort my reported beliefs. I think there’s at least some effect, and that fixing this is would be a low-hanging way to make my beliefs more accurate. (In other cases I think I’ve become less biased as I become aware of non-epistemic incentives.)

I often observe behavior that I suspect is sluggish updating, even amongst pretty reasonable people. Sometimes this takes the form of gradual drift in a predictable direction, but more often it takes the form of holding onto an original guess for too long. Unfortunately I think the incentives are such that many cases of sluggish updating are instrumentally rational from the perspective of self-interest.

Back in 2012 I spent a bunch of time hanging out with people and assigning probabilities to easily-checkable facts. Sluggish updating seemed to be a thing in general. It was especially obvious for agreement games, where two players estimate a quantity and then iteratively update on each others’ estimates. (I remember Anna beginning one of her CFAR classes with a demonstration of this phenomenon.) These easy demonstrations make me feel more comfortable about applying the theoretical picture to reality, though they seem much less informative than my experiences in higher-stakes situations (especially because the phenomenon is very sensitive to social incentives).

### Remedies

#### Don’t use belief changes as evaluations

The easiest remedy is to only score people according to how well they predicted reality—when an event happens, update on all of their predictions about that event, and don’t judge them at all until then.

One concern with this “remedy” is that it causes us to have noisier estimates, and to only get them later in time. But even considering that downside, I think this would be a significant improvement over the status quo—I think that sluggish updating is a much larger problem than noisy estimates of epistemic virtue.

Another concern is that this remedy asks listeners to throw away information. I’ve _seen_ Bob’s beliefs change, and that is actual real evidence that Bob was wrong initially whatever I want to try to declare as a norm. Even if I agreed on paper that throwing away the information would be a better social norm, I wouldn’t expect myself to actually do it.

One way to do this is just to take a maximally cynical perspective on everyone else’s belief reports: if Bob’s beliefs change and Alice’s don’t, I can just remind myself that Alice’s apparent epistemic virtue is likely to be a result of unconscious efforts look smart, and so feel equally good about Alice and Bob (until ultimately updating in favor of one or the other when evidence actually comes in).

I think that evaluating epistemic virtue is one of many areas where a healthy view requires a complicated balance between taking people straightforwardly and interpreting everything through a lens of unbounded cynicism.

#### Predict others’ belief changes

Instead of using Bob’s February prediction to judge Bob’s January prediction, we could try to use some other source as our “rational” estimate in February. For example, I could compare Bob’s estimate in January to  _my_ estimate in February, to decide how reasonable I think that Bob is.

Using this strategy literally wouldn’t work. For example, suppose that in January Alice and I agree that there is a 50% probability of a recession, while Bob thinks there is a 75% chance. Come February, if no one changes their mind, I’m going to conclude that Bob is unreasonable, purely because he disagrees with me. This is a recipe for epistemic catastrophe.

It’s more reasonable to interpret Bob as making a prediction about how my beliefs will change—Bob isn’t saying that I’m going to agree with him about the 75% probability in February, he is saying that he thinks that on average my view will go up.

It would be better still to ask Bob to make an explicit prediction about how my beliefs will change, and evaluating those predictions. After all, it’s perfectly consistent for Bob to think that there is a 75% probability that a recession will occur, but that it’s very unlikely that I’m going to learn anything new over the next month—or even that my probability to go down over the next month. This would have to be coupled with the previous remedy, ignoring Bob’s belief changes as direct evidence.

Predicting belief changes introduces a wrinkle: each person ends up with a different estimate of Bob’s epistemic virtue. We can harmonize our estimates by looking at Bob’s predictions about some consensus estimate, but this would reintroduce problematic incentives. Though it’s a bit annoying, I think that’s probably the way it should be—what I really want to know is _how much I should trust Bob_ , and understanding how well Bob can predict my own future beliefs is a pretty useful indicator of how much I personally should trust him.

There are some advantages from having more implicit agreement about relative epistemic virtue, but I think that those advantages are often overestimated, the cost of agreement are often underestimated, and that such an agreement is almost guaranteed to be a political topic even if no one involved is consciously reasoning politically.

#### Social disapproval

Having noticed that sluggish updating is a thing, it’s tempting to respond by just penalizing people when they seem to update sluggishly. I think that’s a problematic response:

  * I think the rational reaction to norms against sluggish updating may often be no updating at all, which is much worse.
  * In general combating non-epistemic incentives with other non-epistemic incentives seems like digging yourself into a hole, and can only work if you balance everything perfectly. It feels much safer to just try to remove the non-epistemic incentives that were causing the problem in the first place.
  * Sluggish updating isn’t easy to detect in any given case. For example, suppose that Bob expects an event to happen, and if it does he expects to get a positive sign on any given day with 1% probability. Then if the event doesn’t happen his probability will decay exponentially towards zero, falling in half every ~70 days. This will look like sluggish updating.


