---
title: "Bayesian Mindset"
date: 2021-12-21
url: https://cold-takes.com/the-bayesian-mindset
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by macrostrategy/futurists-track-record; Karnofsky on expected-value reasoning — EA epistemic habits"
---

_Click lower right to download or find on Apple Podcasts, Spotify, Stitcher, etc._

> This piece is about the in-practice pros and cons of trying to think in terms of probabilities and expected value for real-world decisions, including decisions that don’t obviously lend themselves to this kind of approach. 
> 
> The mindset examined here is fairly common in the “effective altruist” and “rationalist” communities, and there’s quite a bit of overlap between this mindset and that of [Rationality: A-Z](https://www.lesswrong.com/rationality) (aka The Sequences), although there are some differing points of emphasis.[1](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn1) If you’d like to learn more about this kind of thinking, this piece presents a ~20-minute read rather than the >1000 pages of Rationality: A-Z. 
> 
> This piece is a rough attempt to capture the heart of the ideas behind rationalism, and I think a lot of the ideas and habits of these communities will make more sense if you’ve read it, though I of course wouldn’t expect everyone in those communities to think I’ve successfully done this. 
> 
> If you’re already deeply familiar with this way of thinking and just want my take on the pros and cons, you might skip to [Pros and Cons](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#use-cases-pros-and-cons-of-the-bayesian-mindset). If you want to know why I'm using the term "Bayesian mindset" despite not mentioning Bayes's rule much, see footnote 3.

This piece is about the “Bayesian mindset,” my term for a particular way of making decisions. In a nutshell, the Bayesian mindset is trying to approximate an (unrealistic) ideal of making every decision based entirely on probabilities and values, like this: 

_Should I buy travel insurance for $10? I think there's about a 1% chance I'll use it (probability - blue), in which case it will get me a $500 airfare refund (value - red). Since 1% * $500 = **$5** , I should not buy it for $10._

(Two more examples [below](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#appendix) in case that’s helpful.) 

The ideal here is called **expected utility maximization (EUM)** : making decisions that get you the highest possible [expected value](https://www.cold-takes.com/expected-value/) of what you care about.[2](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn2) (I’ve put clarification of when I’m using “EUM” and when I’m using “Bayesian mindset” in a footnote, as well as notes on what "Bayesian" refers to in this context, but it isn’t ultimately that important.[3](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn3)) 

It’s rarely practical to literally spell out all the numbers and probabilities like this. But some people think you should do so when you can, and when you can’t, use this kind of framework as a “North Star” - an ideal that can guide many decisions even when you don’t do the whole exercise. 

Others see the whole idea as much less promising. 

I think it's very useful to understand the pros and cons, and I think it's good to have the Bayesian Mindset as one option for thinking through decisions. I think it's especially useful for decisions that are (a) important; (b) altruistic (trying to help others, rather than yourself); (c) “unguided,” in the sense that normal rules of thumb aren’t all that helpful. 

In the rest of this piece, I'm going to walk through: 

  * The "dream" behind the Bayesian mindset. 
    * If we could put the practical difficulties aside and make every decision this way, we'd be able to understand disagreements and debates much better - including debates one has with oneself. In particular, we'd know which parts of these disagreements and debates are debates about how the world is (probabilities) vs. disagreements in what we care about (values). 
    * When debating probabilities, we could make our debates impersonal, accountable, and focused on finding the truth. Being right just means you have put the right probabilities on your predictions. Over time, it should be possible to see who has and has not made _good_ predictions. Among other things, this would put us in a world where bad analysis had consequences. 
    * When disagreeing over values, by contrast, we could all have transparency about this. If someone wanted you to make a certain decision for their personal benefit, or otherwise for values you didn’t agree with, they wouldn’t get very far asking you to trust them. 
  * The "how" of the Bayesian mindset - what kinds of practices one can use to assign reasonable probabilities and values, and (hopefully) come out with reasonable decisions. 
  * The pros and cons of approaching decisions this way. 



## The dream behind the Bayesian mindset

### Theoretical underpinnings

There’s a common intuition (among mathematics- and decision-theory-minded people) that the sort of decision-making outlined at the beginning of this piece - expected utility maximization (EUM) - is the most “fundamentally correct” way of making decisions. 

This intuition can be grounded in a pretty large and impressive academic literature. There are a large number of different theoretical frameworks and proofs that all conclude - in one way or another - something like: 

> **Either** you’re acting like someone who’s using EUM - assigning a probability and value to each possible outcome, and making the choice best for maximizing the expected value (of whatever it is that you care about) - 
> 
> **or** you’re making decisions that are inconsistent, self-defeating, or have something else wrong with them (or at least have some weird, unappealing property, such as “When choosing between A and B you choose A; but when choosing between A, B and C you choose B.”)[4](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn4)

You can get an intro to the academic literature at [this SEP article](https://plato.stanford.edu/entries/decision-theory/) (read up to Section 4, which is about halfway). And you can read more about the high-level intuitions at [this article by Eliezer Yudkowsky](https://www.lesswrong.com/posts/RQpNHSiWaXTvDxt6R/coherent-decisions-imply-consistent-utilities) (key quote in footnote).[5](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn5)

The theorems don’t say you have to actually write down your probabilities and values and maximize the expected value, like the examples at the beginning of this piece. They just say that you have to _act as if_ that’s what you’re doing. To illustrate the difference - most people don’t write down the number of calories in each bite of food before they eat it, then stop eating once they hit a certain number. But they _act as if_ they do (in that most people do something approximating “eat a set number of calories each day”). 

In real life, people are probably not even _acting_ as if they’re doing EUM. Instead, they’re probably just doing the “inconsistent, self-defeating, or something else wrong with it” thing constantly. And that isn’t necessarily a big deal. We can make a lot of mistakes and have a lot of imperfections and still end up somewhere good. 

But it’s interesting if the “ideal” version of myself - the one who has no such imperfections - always acts as if they’re (implicitly) doing EUM. It suggests that, if I try hard enough, I might be able to translate any decision into probabilities and values that fully capture what’s at stake. 

### Transparent values, truth-seeking probabilities

And that translation is exciting because it could allow me to **clarify disagreements and debates,** both with other people and within my own head. 

In the world as it is, I often have a hard time telling what a disagreement or debate is supposed to be _about._ For example, take this [House of Representatives debate](https://www.c-span.org/congress/?chamber=house&date=2021-02-05)[6](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn6) on a proposal to increase spending: 

  * One speaker (a Democrat) says: “Frankly, I think it’s probably surprising to some to see a President … who cares deeply about the future of America, who cares about the families who are in need, who cares about those who are sick … too many Americans are suffering and in crisis.” 
  * In “retort,” another (a Republican) says: “Today’s solutions cannot be tomorrow’s problems … I am in favor of relief … However, what we are considering here today is not relief. Rather, we’re garnishing the wages of future generations … “ 
  * In “response” to that, the Democrat says: “This is necessary … We have heard it from the American public. I think the case is clear.” 



…What is the actual disagreement here? … Are these two arguing about how _valuable_ it is to help people today, vs. keeping wages high later? Or do they disagree about _whether_ stimulus today means lower wages tomorrow? Or something else? 

Some think the disagreement comes from Republicans’ just not caring about lower-income Americans, the ones who would benefit more from a stimulus. Others think it comes from Democrats not understanding how such a stimulus can affect the future. 

In an idealized version of this debate, each side would give probabilities about how stimulus will affect the economy, and explain how they value those outcomes. In order for the two sides to reach different conclusions, they’d have to be giving specific different probabilities, and/or specific different valuation methods. 

Then: 

  * Values disagreements would be transparent - explicit for all to see. If Republicans conceded that the stimulus would help low-income Americans, but said they just didn’t value this much, they’d have to own the consequences of saying this. 
  * Meanwhile, we’d be judging probability disagreements using an “objective truth” standard, since the disagreements are just about predictions and not about values. The disagreements would be crisp and clear (one side thinks spending more would cause some specific economic problem in the future, the other side does not) - not seas of words we couldn’t interpret. We could also look back later and see which side was closer to the mark with its predictions, and over time, this could turn into extensive documentation of which side makes better predictions. 
  * Of course, a party could lie about how its arguments break down between probabilities and values. For example, someone might say “We value low-income Americans just as much, but we have different predictions about how the stimulus will affect them,” while secretly not valuing low-income Americans. But this kind of lie would require giving _non-sincere probabilities_ \- probabilities the speaker didn’t actually believe. Over time, this would presumably lead them to have a bad track record of making predictions. 



When I’m arguing with myself, I often have the same sort of confusion that I have when watching Congress. 

  * I tend not to know much about why I decide what I decide. 
  * I often can’t tell which of my motives are selfish vs. altruistic; which of my beliefs are based on _seeking the truth_ vs. _wishful thinking_ or _conformity_(believing what I’m “supposed to” believe); and which thoughts are coming from my “[lizard brain](https://seths.blog/2010/01/quieting-the-lizard-brain/)” vs. coming from the parts of myself I respect most. 
  * The dream behind the Bayesian mindset is that I could choose some set of values that I can really stand behind (e.g., putting a lot of value on helping people, and none on things like “feeling good about myself”), and focus only on that. Then the parts of myself driven by “bad” values would have to either quiet down, or start giving _non-sincere probabilities._ But over time, I could watch how accurate my probabilities are, and learn to listen to the parts of myself that make better predictions. 



The bottom line: 

  * Normal disagreements are hard to understand and unravel, and prone to people confusing and manipulating each other (and themselves). 
  * But disagreements broken into probabilities and values could be much easier to make progress on. 
  * Values disagreements - pure statements of what one cares about, freed of any disagreements over how the world works - are relatively straightforward to understand and judge. 
  * Probabilities disagreements - freed of any subjectivity - could be judged entirely based on evidence, reason, and (over time) results. 



By practicing and trying to separate probabilities and values when possible, perhaps we can move closer to **a world in which we communicate clearly, listen open-mindedly, learn from each other, make our decisions based on the most truth-tracking interpretation of the information we have, and have true accountability for being right vs. wrong over time.**

Aiming for this also has some more practical potential advantages - good habits, helpful communication methods, etc. I’ll discuss those next. 

## The Bayesian mindset in practice

The Bayesian mindset means looking for opportunities to do any and all of the following: 

  1. **Connect opinions to anticipated observations.** When you have an opinion about what action to take, what concrete outcomes or situations are you picturing as a result of taking or not taking it? (E.g., “if we pass this bill, unemployment might fall”) 
  2. **Assign probabilities.** How probable are the outcomes and situations you’re picturing? How does the action change them? (E.g., “The probability of unemployment falling by at least 1 percentage point in the next year is 50% if we pass the bill, 20% if we don’t”) 
  3. **Assign values.** How much do you value the different outcomes compared to each other? (E.g., “It would be worth $X to reduce unemployment by 1 percentage point”) 



It’s often the case that just articulating _some_ possible outcomes, probabilities and values will shed a lot of light on a decision, even if you don’t do a _full_ expected-utility maximization (EUM) listing everything that matters. 

I find all of these 3 steps to be pretty interesting exercises in their own right. 

### #1 - connecting opinions to anticipated observations

When you say “Policy X would be a disaster,” what kind of disaster do you have in mind? Are you expecting that the disaster would be widely recognized as such? Or are you picturing the policy doing roughly what its supporters expect, and just saying you don’t like it? 

In the Bayesian mindset, the “meaning” of a statement mostly[7](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn7) comes down to what specific, visualizable, falsifiable predictions it points to. 

  * “Meat is bad for you” usually means something like “If you eat more meat, you’ll live less long and/or in worse health than if you eat less meat.” 
  * “This bill is bad for America” is ambiguous and needs to be spelled out more - does it mean the bill would cause a recession? A debt crisis? Falling life expectancy? 
  * “What we are considering here today is not relief. Rather, we’re garnishing the wages of future generations.” means [???] It’s vague, and that’s a problem. 



The Bayesian mindset includes habitually going for this kind of “translation.” I find this habit interesting because: 

  * A lot of times it sounds like two people are violently disagreeing, but they’re just talking past each other or lost in confusions over words. 
    * Sometimes these kinds of disagreements can disappear in a puff with [rationalist taboo](https://wiki.lesswrong.com/wiki/Rationalist_taboo): one person is saying “X is bad,” the other is saying “X is good,” and they try to break down their differing “anticipated observations” and sheepishly find they just meant different things by X. 
    * In addition to resolving some disputes, “translating to anticipated observations” has also gotten me used to the idea that it takes a lot of work to understand what someone is actually saying. I should be slower to react judgmentally to things I hear, and quicker to ask for clarification. 
  * And other times it sounds like someone is making profound/brilliant points, but if I try to translate to anticipated observations, I realize I can’t concretely understand what they’re saying. 
    * A lot of expressed beliefs are “[fake beliefs](https://www.lesswrong.com/s/7gRSERQZbqTuLX5re)”: things people say to express solidarity with some group (“America is the greatest country in the world”), to emphasize some value (“We must do this fairly”), to let the listener hear what they want to hear (“Make America great again”), or simply to sound reasonable (“we will balance costs and benefits”) or wise (“I don’t see this issue as black or white”). 
    * Translating to anticipated observations can sometimes “strip away the sorcery” from words and force clarity. This can include my own words: sometimes I “think I believe” something, but it turns out to be just words I was thoughtlessly repeating to myself. 



A couple more notes on the connection between this idea and some core “rationality community” ideas in this footnote.[8](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn8)

### #2 - assigning probabilities

Say I’ve decided to translate “This bill is bad for America” to “This bill means there will either be a debt crisis, a recession, or high (>3%) inflation within 2 years.”[9](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn9) Can I put a probability on that? 

One relatively common viewpoint would say something like: “No. In order to say something is 20% likely, you ought to have data showing that it happens about 20% of the time. Or some rigorous, experiment-backed statistical model that predicts 20%. You can’t just describe some future event, close your eyes and think about it, call it 20% likely, and have that mean anything.” 

The Bayesian Mindset viewpoint says otherwise, and I think it has a lot going for it. 

The classic way to come up with a forecast is to pose the following thought experiment to yourself: _Imagine a ticket that is worth $100 if the thing I’m trying to forecast comes true, and $0 otherwise. What’s the most I’d be willing to pay for this ticket (call this $A)? What’s the least I’d be willing to sell this ticket for (call this $B)?_ A/100 and B/100 are your low- and high-end “credences” (subjective probabilities) that the forecast will come true. 

For example, what is the probability that fully self-driving cars (see “level 5” [here](https://www.synopsys.com/automotive/autonomous-driving-levels.html) for definition) will be commercially available by 2030? If I imagine a ticket that pays out $100 if this happens and $0 if it doesn’t: 

  * I notice that there’s no way I’d pay $80 for that ticket. 
  * There’s also no way I’d sell that ticket for $20. 
  * So it seems that my subjective probability is at most 80%, and at least 20%, and if I had to put a single probability on it it wouldn’t be too crazy to go with 50% (halfway in between). I could narrow it down further by actually doing some analysis, but I’ve already got a starting point. 
  * In this case, my numbers are coming from pretty much pure intuition - though thinking about how I would spend money triggers a _different sort_ of intuition from e.g. listening to someone ask “When are we going to have !@#$ing self-driving cars?” and answering in a way that feels good in conversation. 
  * In this and other cases, I might want to do a bunch of research to better inform my numbers. But as I’m doing that research, I’m _continually improving my probabilities_ \- I’m not trying to hit some fixed standard of “proof” about what’s true. 



Does this actually work - do numbers like this have any predictive value? I think there’s a good case they can/do: 

  * At a minimum, you can seek to become **_calibrated_ , which means that events you assign a 30% probability to happen ~30% of the time, events you assign a 40% probability to happen ~40% of the time, etc.** [Calibration training](https://www.openphilanthropy.org/blog/efforts-improve-accuracy-our-judgments-and-forecasts#Calibration_training) seems surprisingly quick and effective - most people start off horrifically overconfident, but can relatively quickly become calibrated. This often comes along with making fewer statements like “X is going to happen, I guarantee it,” and replacing them with statements like “I guess X is about 70% likely.” This alone is an inspiring win for the Bayesian mindset. 
  * Scott Alexander puts up a [yearly predictions post](https://slatestarcodex.com/tag/predictions/) on all kinds of topics from world events to his personal life, where I’d guess he’s roughly following the thought process above rather than using lots of quantitative data. He not only achieves impressive calibration, but seems (informally speaking) to have good [resolution](https://www.openphilanthropy.org/blog/efforts-improve-accuracy-our-judgments-and-forecasts#Further_advice_for_improving_judgment_accuracy) as well, which means roughly that many of his forecasts seem non-obvious. More cases like this are listed [here](https://www.cold-takes.com/prediction-track-records-i-know-of/). So it seems like it is possible to put meaningful probabilities on all sorts of things. 



“The art of assigning the right probabilities” can be seen as a more tangible, testable, well-defined version of “The art of forming the most correct, reasonable beliefs possible.” 

For many, **this is the most exciting part of the Bayesian mindset: a concrete vision of what it means to have “reasonable beliefs,” with a number of tools available to help one improve.**

  * There’s a nascent “science of forecasting” on what sorts of people are good at assigning probabilities and why, which you can read about in [Superforecasting](https://smile.amazon.com/Superforecasting-Science-Prediction-Philip-Tetlock/dp/0804136718?sa-no-redirect=1). 
  * When two people disagree on a probability, they can first try sharing their evidence and moving their probabilities toward each other. (If the other person has heard all your evidence and still thinks X is less probable than you do, you should probably be questioning yourself and lowering your probability of X, to at least some degree.) If disagreement persists, they can make a bet (or “[tax on bullshit](https://marginalrevolution.com/marginalrevolution/2012/11/a-bet-is-a-tax-on-bullshit.html)”), or just record their disagreement and check back later for bragging rights. Over time, someone’s track record can be scored, and their scores could be seen as a guide to how credible they are. 
  * More broadly, the idea of “assigning the right probabilities” is a particular vision of “what it means to have reasonable beliefs,” with some interesting properties. 
    * For example, it provides a specific (mathematically precise) way in which some beliefs are “more correct than others,” even when there’s very little (or very inconclusive) evidence either way,[10](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn10) and specific mathematical rules for changing your beliefs based on new evidence (one video explainer is [here](https://www.youtube.com/watch?app=desktop&v=BrK7X_XlGB8&ab_channel=JuliaGalef)). 
    * This in turn supports a particular “nonconformist truth-seeker” worldview: the only goal of one’s beliefs is to assign the best probabilities, so one should be actively watching out for social pressure and incentives, “beliefs that are fun to express,” and anything else that might interfere with a single-minded pursuit of assigning good probabilities to predictions. I see a lot of [Rationality: A-Z](https://www.lesswrong.com/rationality) as being about this sort of vision.[11](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn11)



The ultimate aspiration here is that **disagreements generate light (quantitative updates to probabilities, accumulation of track records) instead of heat, as we collectively build the superpower of being able to forecast the future.**

### #3 - valuing outcomes

The Bayesian mindset generally includes the attitude that “everything can ultimately be traded off against everything else.” If a bill would reduce suffering this year but might lead to a debt crisis in the future, it should - in theory - be possible to express both benefits and risks in the same units.[12](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn12) And if you can express benefits and risks in the same units, and put probabilities on both, then you can make any decision via EUM. 

The “everything can be traded off against everything else” mentality might explain some of the fact that Bayesian-mindset enthusiasts tend to be interested in philosophy - in particular, trying to understand what one _really_ values, e.g. by considering sometimes-bizarre thought experiments. I think this is an interesting mentality to try out. 

But in practice, valuing very different outcomes against each other is daunting. It often involves trying to put numbers on things in unintuitive and sometimes complex ways - for example, [valuing a human life in dollars](https://en.wikipedia.org/wiki/Value_of_life). (For a general sense of the sort of exercise in question, see [this post](https://www.openphilanthropy.org/blog/givewells-top-charities-are-increasingly-hard-beat).) 

I think the “figuring out what you value, and how much” step is the least practical part of the Bayesian mindset. It seems most useful when either: 

  * There is luckily some straightforward way of expressing all costs and benefits in the same terms, such as in the examples in the [appendix](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#appendix). (More on this below.) 
  * Or it’s worth doing all of the difficult, guess-laden work to convert different benefits into the same terms, which I think can be the case for government policy and for donation recommendations. 



## Use cases, pros and cons of the Bayesian mindset

### Use cases

Using the full process outlined above to make a decision is pretty complex and unwieldy. For most decisions, I don't think it would be helpful: it's too hard to list all of the different possible outcomes, all of the different values at stake, etc. 

But I think it can be a useful angle when: 

  * There's a discrete, important decision worth serious thought and analysis. 
  * There's a pretty clear goal: some "unit of value" that captures most of what's at stake. The examples in the [appendix](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#appendix) are examples of how this can be approximately the case. 
  * For whatever reason, one isn't confident in normal rules of thumb and intuitions. 
    * The Bayesian mindset might be particularly useful for avoiding [scope neglect](https://en.wikipedia.org/wiki/Scope_neglect): the risk of being insensitive to differences between different large numbers, e.g. "Helping 10,000 vs. 12,000 people." 
    * I think most policymaking, as well as many decisions about how to handle novel situations (such as the COVID-19 pandemic), qualify here. 
  * Sometimes one is able to identify one or two considerations large enough to plausibly "dominate the calculation," so one doesn't have to consider every possible decision and every possible outcome. 
    * A bit of a notorious example that I have mixed feelings about (to be discussed another day): [Astronomical Waste](https://www.nickbostrom.com/astronomical/waste.html) argues that "Do as much good as possible" can be approximately reduced to "Minimize existential risk." This is because a staggering number of people could eventually live good lives[13](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn13) if we are able to avoid an existential catastrophe.



I think the COVID-19 pandemic has been an example of where the Bayesian mindset shines, generally. 

  * The situation is unprecedented, so normal rules of thumb aren't reliable, and waiting to have "enough evidence" by normal public-health-expert standards is often not what we want. 
  * Most people I know either took extremely "cautious" or extremely "carefree" attitudes, but calculating your actual probability of getting COVID-19 - and weighing it against the costs of being careful - seems a lot better (ala the examples in the [appendix](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#appendix)). ([Microcovid.org](https://www.microcovid.org/?distance=normal&duration=120&interaction=oneTime&personCount=2&riskBudget=1000&riskProfile=closedPod20&scenarioName=custom&setting=indoor&subLocation=US_06037&theirMask=none&topLocation=US_06&voice=normal&yourMask=none&yourVaccineDoses=1&yourVaccineType=moderna) was built for this purpose, by people in the rationalist community.) 
  * EUM calculations tend to favor things that have a reasonably high probability of being very helpful (even if not "proven") and aren't too costly to do, such as wearing masks and taking vitamin D supplements. 



### Bayesian habits

A lot of the appeal of the Bayesian mindset - and, I think, a lot of the value - comes not from specific decisions it helps with, but from the habits and lenses on the world one can get from it. 

One doesn't need to do a full EUM calculation in order to generally look for opportunities to do the three things laid out [above](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#the-bayesian-mindset-in-practice): (a) connect opinions to [anticipated observations](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#1-connecting-opinions-to-anticipated-observations); (b) [assign probabilities](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#2-assigning-probabilities) and keep track of how accurate they are; (c) [assign values](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#3-valuing-outcomes) (try to quantify what one cares about).[14](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn14)

I've done a fair amount of this, while not making the Bayesian mindset my only or even primary orientation toward decision-making. I think I have realized real, practical benefits, such as: 

  * I’ve gotten quicker at identifying “talking past each other” moments in disagreements, and ensuring that we hone in on differing [anticipated observations](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#1-connecting-opinions-to-anticipated-observations) (or values). I've also gotten quicker to skip over arguments and essays that sound seductive but don't have tangible implications. (I'm sure some would think I'm wrong to do this). 
  * Based on my experience with estimating probabilities and making bets, I almost never “rule out” a possibility if someone else is arguing for it, and conversely I never fully plan around the outcomes that seem most likely to me. I think this is one of the most robust and useful results of putting probabilities on things and seeing how it goes: one switches from a natural mode of “If A, then B” to a habitual mode of “If A, then maybe B, maybe C, maybe D.” I think this has generally made me more respectful of others’ views, in tone and in reality, and I think it has improved my decision-making as well. 
  * I’ve spent a lot of time consuming philosophy, interrogating my own values, and trying to quantify different sorts of benefits in comparable terms. Many of the calculations I’ve done are made-up, non-robust and not worth using. But there are also many cases in which the numbers seem both clear and surprising relative to what I would have guessed - often there is one factor so large that it carries a calculation. The most obvious example of this is gaining sympathy for (though not total conviction in) the idea of focusing philanthropy on [animal-inclusive ](https://www.openphilanthropy.org/blog/update-cause-prioritization-open-philanthropy#Animal-inclusive_vs_human-centric_views)or [longtermist](https://www.openphilanthropy.org/blog/update-cause-prioritization-open-philanthropy#Long-termist_vs._near-termist_views) work. I think the benefits here are major for philanthropy, and a bit less compelling on other fronts. 



At the same time, I think there are times when the habits built by the Bayesian mindset can be unhelpful or even lead one astray. Some examples: 

**De-emphasizing information that tends to be hard to capture in an EUM framework.** There are a lot of ways to make decisions that don’t look at all like EUM. Intuition and convention/tradition are often important, and often capture a lot of factors that are hard to articulate (or that the speaker isn’t explicitly aware of). The Bayesian mindset can cause over-emphasis on the kinds of factors that are easy to articulate via probabilities and values. 

Here are examples of views that might not play well with the Bayesian mindset: 

  * “Person X seems really good - they’re sharp, they work hard, they deeply understand what they’re working on at the moment. I’m going to try to generally empower/support them. I have no idea where this will lead - what they’re specifically going to end up doing - I just think it will be good.” 
  * “I see that you have many thoughtful reasons to set up your organization with an unorthodox reporting structure (for example, one person having two bosses), and you have listed out probabilities and values for why this structure is best. But this is different from how most successful organizations tend to operate, so I expect something to go wrong. I have no idea what it is or how to express it as a prediction.”[15](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn15)
  * “Solar power progress is more important than most people think; we should pay more attention to solar power progress, but I can’t say much about specific events that are going to happen or specific outcomes of specific things we might do.”



It can be extremely hard to translate ideas with this basic structure into predictions and probabilities. I think the Bayesian mindset has sometimes led me and others to put insufficient weight on these sorts of views. 

**Modesty probabilities.** I think that using the language of probability to express uncertainty has some major advantages, but also some pathologies. In particular, the “never be too confident” idea seems great in some contexts, but bad in others. It leads to a phenomenon I call “modesty probabilities,” in which people frequently assign a 1% or 10% chance to some unlikely outcome “just because who knows,” i.e., because our brains don’t have enough reliability or precision to assign very low probabilities for certain kinds of questions. 

This in turn leads to a phenomenon sometimes called “Pascal’s Mugging” (though that term has a variety of meanings), in which someone says: “X would be a huge deal if it happened, and it’d be overconfident to say it’s <1% likely, so I’m going to focus a lot on X even though I have no particular reason to think it might happen.” 

It’s debatable how comfortable we should be acting on “modesty probabilities” (and in what contexts), but at the very least, “modesty probabilities” can be quite confusing. Someone might intuitively feel like X is almost impossible, but say X is 1% or 10% likely just because they don’t know how to be confident in a lower probability than that. 

**The wrong tool for many.** I’m personally a big fan of some of the habits and frames that come with the Bayesian mindset, particularly the idea of “intense truth-seeking”: striving to make my beliefs as (predictively) accurate as possible, even if this requires me to become “weirder” or suffer other costs. But this isn’t how everyone lives, or should live. 

  * Some people accomplish a lot of good by being overconfident. 
  * Others, by fitting in and doing what others seem to expect them to. 
  * Others, by being good at things like “picking the right sort of person to bet on and support,” without needing any ability to make accurate predictions (about the specifics of what supporting person X will lead to) or have much sense of what “values” they’re pursuing. 



I don’t think the Bayesian mindset is likely to be helpful for these sorts of people. An analogy might be trying to strategize about winning a football game using the language of quantum mechanics - it’s not that the latter is “wrong,” but it’s an ill-suited tool for the task at hand. 

Furthermore, the Bayesian mindset seems like a particularly bad tool for _understanding and learning from these sorts of people._

  * I often see Bayesian mindset devotees asking, “Why did person X do Y? What beliefs did that reflect? If they believe A they should’ve done C, and if they believe B they should’ve done D.” And in many cases I think this is an actively bad way of understanding someone’s actions and motivations. 
  * I think many people have impressive minds in that they _act in patterns that tend to result in good things happening_ , and we can learn from them by understanding their patterns - but they’re not well-described as doing any sort of EUM, and they may not even be well-described as having any [anticipated observations](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#1-connecting-opinions-to-anticipated-observations) at all (which, in a Bayesian framework, sort of means they don’t have beliefs). We won’t learn from them if we insist on interpreting them through the lens of EUM. 



**A final high-level point** is that the Bayesian mindset is essentially a psychological/social “technology” with little evidence behind it and a thin track record, so far. The [theoretical underpinnings](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#theoretical-underpinnings) seem solid, but there’s a large gulf between those and the Bayesian mindset itself. I think we should assume, by default, that the Bayesian mindset is an early-stage idea that needs a lot of kinks worked out if it’s ever going to become a practical, useful improvement for large numbers of people making decisions (compared to how they would make decisions otherwise, using some ill-defined mix of intuition, social pressure, institutional processes and norms, etc.) 

Overall, I am an enthusiastic advocate for the Bayesian mindset. I think following it has real benefits already, and I expect that as people continue to experiment with it, the set of practices for making the most of it will improve. As long as we don’t conflate “an interesting experiment in gaining certain benefits” with “the correct way to make decisions.” 

## Appendix: simple examples of the Bayesian mindset

**Example 1 (repeated from intro).** Should I buy travel insurance for $10? I think there's about a 1% chance I'll use it (probability - blue), in which case it will get me a $500 airfare refund (value - red). Since 1% * $500 = **$5** , I should not buy it for $10. 

**Example 2.** Should I move to Portland? I think there's about a 50% chance that I'll like it 1x as much (the same) as where I live now; a 40% chance that I'll like it 0.5x as much (i.e., worse); and a 10% chance I'll like it 5x as much (better). Since 50% * 1x \+ 40% * 0.5x \+ 10% * 5x = **1.2x,** I expect to like Portland 1.2x as much as where I am now. So I'll move. (If you aren't following the math here, see my brief explanation of [expected value](https://www.cold-takes.com/expected-value/).) 

**Example 3.** Should I join two friends who've invited me to hang out (indoors :/ ) during the COVID-19 pandemic (February 2021 as I write this draft)? 

I can [estimate](https://www.microcovid.org/?distance=normal&duration=60&interaction=oneTime&personCount=2&riskProfile=average&setting=indoor&subLocation=US_06075&theirMask=none&topLocation=US_06&voice=normal&yourMask=none) that this would mean a 1/2000 chance of getting COVID-19.[16](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fn16)

  * How bad is it to get COVID-19? I'd guess it's about a 1/500 chance of dying and losing 50 years (18250 days) of my life; a 10% chance of some unpleasant experience as bad as losing a year (365 days) of my life; a 50% chance of losing about 2 weeks (14 days); and the remaining ~40% of time I expect it to be no big deal (call it about 0 days). 
  * So getting COVID-19 is as bad as losing 1/500 * 18250 \+ 10% * 365 \+ 50% * 14 \+ ~40% * 0 =~ **80 days of my life.**



So joining my friends is about as bad as a 1/2000 chance of losing 80 days, which is like losing **about an hour** of my life. So I should join my friends if I'd trade an hour of my life for the pleasure of the visit. 

[](https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fthe-bayesian-mindset%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20The%20Bayesian%20Mindset&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fthe-bayesian-mindset%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20The%20Bayesian%20Mindset&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/reddit/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fthe-bayesian-mindset%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20The%20Bayesian%20Mindset&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/menu/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fthe-bayesian-mindset%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20The%20Bayesian%20Mindset&ct=1)

[Comment/discuss](https://forum.effectivealtruism.org/posts/Mzc2ZP48KPF45t4bQ/bayesian-mindset#comments)

* * *

## Footnotes 

  1. There will be examples of connections between specifics parts of “rationalism” and specific aspects of the Bayesian mindset throughout this piece, generally in footnotes. 

Here are a few examples of particularly core posts from [Rationality: A-Z](http://lesswrong.com/rationality) that emphasize the general connection to Bayesianism: [Rationality: An Introduction](https://www.lesswrong.com/s/FrqfoG3LJeCZs96Ym/p/8qccXytpkEhEAkjjM), [What Do We Mean By “Rationality?”](https://www.lesswrong.com/s/5g5TkQTe9rmPS5vvM/p/RcZCwxFiZzE6X7nsv), [A Technical Explanation of Technical Explanation](https://www.lesswrong.com/s/fxynfGCSHpY4FmBZy/p/afmj8TKAqH6F2QMfZ). See [Twelve Virtues of Rationality](https://www.lesswrong.com/s/waF2Pomid7YHjfEDt/p/7ZqGiPHTpiDMwqMN2) for a somewhat “summarizing” post; most of its content could be seen as different implications of adhering to Bayesian belief updating (as well as expected value maximization), both of which are discussed in this piece. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref1)

  2. There is some subtlety here: strictly speaking, you should maximize the expected value of something you care about _linearly_ , such that having N times as much of it is N times as good. So for example, while it’s better to have two functioning kidneys than one, an operation that has a **50%** chance of leaving you with **2** functioning kidneys is not at all equivalent - and is a lot worse - than one with a **100%** chance of leaving you with **1** functioning kidney. To do EUM, you need to rate every outcome using units you care about linearly. But this should always be possible; for example, you might say that 1 functioning kidney is worth **100 “health points”** to you, and 2 functioning kidneys is worth only **101 “health points,”** or 1.01x as much. And now you could maximize your “expected health points” and get reasonable results, such as: you’d much rather have a 100% chance of 100 “health points” than a 50% chance of 101. This is essentially how I handle the Portland example above. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref2)

  3. Throughout this post: 

     * “EUM” refers to making the decision that maximizes your expected value. 
     * “Bayesian mindset” refers to explicitly _writing down_ your best-guess probabilities and/or values, and using these as tools to decide what to do.

You could maximize expected value without explicitly thinking that way (for example, you could just have an intuitive judgment about what’s good to do, and it might be right); conversely, you could use the tools of the Bayesian mindset to think about expected value, but ultimately fail to maximize it.

I've used the term "Bayesian mindset" to invoke [Bayesian epistemology](https://en.wikipedia.org/wiki/Bayesian_epistemology) \- in particular, the idea that all beliefs can be expressed as probabilities. This contrasts with other ways of thinking about probability (e.g., frequentism), where one might claim that you can't put a numerical probability on something unless you have some sort of data to ground that probability.

By using the term "Bayesian," I'm pointing at the Bayesian side of that debate, and the implication that we can actually write down probabilities even when we have no particular source for them other than our intuitions/beliefs. (I think this captures what's distinctive about Bayesian mindset better than "expected utility maximization," since the latter can be implicit.) I don't talk about Bayes's rule much; it's certainly related, but I haven't seen many cases of people using it explicitly in the sorts of contexts discussed in this post ([here's an example of why it's hard to do so](https://shlegeris.com/2019/12/01/bayes.html)). [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref3)

  4. This is weird because C is an “irrelevant alternative.” Adding it to your choice set shouldn’t change how you feel about A vs. B. For example, it’s weird if you choose vanilla ice cream when the only choices are vanilla and chocolate, but choose chocolate ice cream when the choices are vanilla, chocolate and strawberry. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref4)

  5. “We have multiple spotlights all shining on the same core mathematical structure, saying dozens of different variants on, ‘If you aren't running around in circles or stepping on your own feet or wantonly giving up things you say you want, we can see your behavior as corresponding to this shape. Conversely, if we can't see your behavior as corresponding to this shape, you must be visibly shooting yourself in the foot.’ Expected utility is the only structure that has this great big family of discovered theorems all saying that. It has a scattering of academic competitors, because academia is academia, but the competitors don't have anything like that mass of spotlights all pointing in the same direction. 

So if we need to pick an interim answer for ‘What kind of quantitative framework should I try to put around my own decision-making, when I'm trying to check if my thoughts make sense?’ or ‘By default and barring special cases, what properties might a sufficiently advanced machine intelligence look to us like it possessed, at least approximately, if we couldn't see it visibly running around in circles?’, then there's pretty much one obvious candidate: Probabilities, utility functions, and expected utility.” [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref5)

  6. Starts at the 11:51:55 AM timestamp. It would’ve been more natural to pick a Presidential debate as an example, but all the 2016 and 2020 debates are just too weird. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref6)

  7. Putting aside the “values” part of the equation. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref7)

  8. The idea of [making beliefs pay rent](https://www.lesswrong.com/tag/making-beliefs-pay-rent) is connected to this section in a fairly obvious way. 

A chunk of [Rationality: A-Z](https://www.lesswrong.com/rationality) is about communicating with precision (e.g., [37 Ways That Words Can Be Wrong](https://www.lesswrong.com/s/SGB7Y5WERh4skwtnb/p/FaJaCgqBKphrDzDSj)). 

Prizing beliefs that are precise and “pay rent” seems (for many, including me) to lead naturally to prizing science-based, naturalistic ways of looking at the world. A chunk of [Rationality: A-Z](https://www.lesswrong.com/rationality) is about reconciling the desire for sacred or transcendent experiences with an intense commitment to naturalism, e.g. [The Sacred Mundane](https://www.lesswrong.com/s/6BFkmEgre7uwhDxDR/p/Fwt4sDDacko8Sh5iR) and [Joy in the Merely Real](https://www.lesswrong.com/s/6BFkmEgre7uwhDxDR/p/x4dG4GhpZH2hgz59x). [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref8)

  9. The basic idea here is that if we spend too much money, and this goes badly, the main ways it would ultimately go badly would be either (a) the spending means we need to raise taxes or cut spending later to balance the budget, which hurts growth (hence the “recession” reference); (b) the spending comes from borrowing, which creates too much debt, which leads to a debt crisis later; (c) the debt gets paid off by printing money, which leads to inflation. To do a more sophisticated version of this analysis, you’d want to get finer-grained about how big these effects could be and when. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref9)

  10. See [this post](https://www.overcomingbias.com/2006/12/you_are_never_e.html) for a vivid (if overly aggressive) statement of this idea. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref10)

  11. For example, see: 

     * [Conservation of Expected Evidence](https://www.lesswrong.com/s/zpCiuR4T343j9WkcK/p/jiBFC7DcCrZjGmZnJ), which promotes the somewhat counterintuitive (but correct according to this vision) idea that one should generally be as likely to change one’s mind in one direction as another. (If you expect to learn of more evidence for X, you should just adjust your probability of X upwards now.) 
     * [Scientific Evidence, Legal Evidence, Rational Evidence](https://www.lesswrong.com/s/zpCiuR4T343j9WkcK/p/fhojYBGGiYAFcryHZ) and [When Science Can't Help](https://www.lesswrong.com/s/fxynfGCSHpY4FmBZy/p/wzxneh7wxkdNYNbtB), which argue that well-respected standards of evidence are “not fast enough” to come to good probabilities, and sometimes a good Bayesian needs to believe things that don’t meet the “standards of evidence” for these domains. 
     * These [two](https://www.lesswrong.com/s/FrqfoG3LJeCZs96Ym/p/QGkYCwyC7wTDyt3yT) [posts ](https://www.lesswrong.com/s/FrqfoG3LJeCZs96Ym/p/dLJv2CoRCgeC2mPgj)arguing that one should see issues neither in [black-and-white terms](https://www.lesswrong.com/s/FrqfoG3LJeCZs96Ym/p/QGkYCwyC7wTDyt3yT) (where one side of an argument is certain) nor as a [single shade of grey](https://www.lesswrong.com/s/FrqfoG3LJeCZs96Ym/p/dLJv2CoRCgeC2mPgj) (where all sides are equally indeterminate). In my experience, this is a pretty distinctive property of probability-centric reasoning: instead of saying “X will happen” or “I don’t know,” one says e.g. “There’s a 70% chance X will happen.” [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref11)

  12. One can ask: “If the two choices were X outcome and Y outcome, which would be better?”, “What about X outcome vs. a 50% chance of Y outcome?”, etc. In theory, asking enough questions like this should make it possible to quantify how much “better” (or “more choice-worthy”) one outcome is than another. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref12)
  13. My post on [digital people](https://www.cold-takes.com/how-digital-people-could-change-the-world/#space-expansion) gives one example of how this could come about. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref13)

  14. In fact, some parts of the rationalist community don’t emphasize “actually writing down probabilities and values” very much at all (and [Rationality: A-Z](https://www.lesswrong.com/rationality) doesn’t spend much space on guidance for how to do so). Instead, they emphasize various ideas and mental habits that are inspired by the abstract idea of EUM (some of which are discussed in this piece). FWIW, I think to the extent there are people who are trying to take inspiration from the general idea of EUM, while ~never actually doing it, this is probably a mistake. I think it’s important for people who see EUM as an ideal to get some experience trying to do it in practice. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref14)

  15. I actually can say a lot about how I expect this to go wrong, but at previous points in my life, I might’ve said something like this and not been able to say much more. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref15)

  16. Hopefully by the time this piece is public, the risk will be much lower. [↩](https://www.cold-takes.com/p/812e650a-9dfe-4fbd-abed-b01ec4979dd2/#fnref16)



