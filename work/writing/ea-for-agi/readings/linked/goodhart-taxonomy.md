---
title: "Goodhart Taxonomy"
author: "Scott Garrabrant"
date: 2017-12-30
url: https://lesswrong.com/posts/EbFABnst8LsidYs5Y/goodhart-taxonomy
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by joe-carlsmith/an-even-deeper-atheism; Garrabrant's taxonomy of Goodhart's law — core alignment concept"
---

[Goodhart’s Law](https://en.wikipedia.org/wiki/Goodhart%27s_law) states that "any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." However, this is not a single phenomenon. I propose that there are (at least) four different mechanisms through which proxy measures break when you optimize for them.

The four types are Regressional, Causal, Extremal, and Adversarial. In this post, I will go into detail about these four different Goodhart effects using mathematical abstractions as well as examples involving humans and/or AI. I will also talk about how you can mitigate each effect.

Throughout the post, I will use < refresh to render LaTeX > to refer to the true goal and use < refresh to render LaTeX > to refer to a proxy for that goal which was observed to correlate with < refresh to render LaTeX > and which is being optimized in some way.

* * *

Quick Reference
===============

*   Regressional Goodhart - When selecting for a proxy measure, you select not only for the true goal, but also for the difference between the proxy and the goal.

*   Model: When < refresh to render LaTeX > is equal to < refresh to render LaTeX > , where < refresh to render LaTeX > is some noise, a point with a large < refresh to render LaTeX > value will likely have a large < refresh to render LaTeX > value, but also a large < refresh to render LaTeX > value. Thus, when < refresh to render LaTeX > is large, you can expect < refresh to render LaTeX > to be predictably smaller than < refresh to render LaTeX > .
*   *Example: height is correlated with basketball ability, and does actually directly help, but the best player is only 6'3", and a random 7' person in their 20s would probably not be as good*

*   Causal Goodhart - When there is a non-causal correlation between the proxy and the goal, intervening on the proxy may fail to intervene on the goal.

*   Model: If < refresh to render LaTeX > causes < refresh to render LaTeX > (or if < refresh to render LaTeX > and < refresh to render LaTeX > are both caused by some third thing), then a correlation between < refresh to render LaTeX > and < refresh to render LaTeX > may be observed. However, when you intervene to increase < refresh to render LaTeX > through some mechanism that does not involve < refresh to render LaTeX > , you will fail to also increase < refresh to render LaTeX > .
*   *Example: someone who wishes to be taller might observe that height is correlated with basketball skill and decide to start practicing basketball.*

*   Extremal Goodhart - Worlds in which the proxy takes an extreme value may be very different from the ordinary worlds in which the correlation between the proxy and the goal was observed.

*   Model: Patterns tend to break at simple joints. One simple subset of worlds is those worlds in which < refresh to render LaTeX > is very large. Thus, a strong correlation between < refresh to render LaTeX > and < refresh to render LaTeX > observed for naturally occuring < refresh to render LaTeX > values may not transfer to worlds in which < refresh to render LaTeX > is very large. Further, since there may be relatively few naturally occuring worlds in which < refresh to render LaTeX > is very large, extremely large < refresh to render LaTeX > may coincide with small < refresh to render LaTeX > values without breaking the statistical correlation.
*   *Example: the tallest person on record,* *[Robert Wadlow](https://en.wikipedia.org/wiki/Robert_Wadlow), was 8'11" (2.72m). He grew to that height because of a pituitary disorder, he would have struggled to play basketball because he "required leg braces to walk and had little feeling in his legs and feet."*

*   Adversarial Goodhart - When you optimize for a proxy, you provide an incentive for adversaries to correlate their goal with your proxy, thus destroying the correlation with your goal.

*   Model: Consider an agent < refresh to render LaTeX > with some different goal < refresh to render LaTeX > . Since they depend on common resources, < refresh to render LaTeX > and < refresh to render LaTeX > are naturally opposed. If you optimize < refresh to render LaTeX > as a proxy for < refresh to render LaTeX > , and < refresh to render LaTeX > knows this, < refresh to render LaTeX > is incentivized to make large < refresh to render LaTeX > values coincide with large < refresh to render LaTeX > values, thus stopping them from coinciding with large < refresh to render LaTeX > values.
*   *Example: aspiring NBA players might just lie about their height.*

* * *

Regressional Goodhart
=====================

When selecting for a proxy measure, you select not only for the true goal, but also for the difference between the proxy and the goal.

Abstract Model
--------------

When < refresh to render LaTeX > is equal to < refresh to render LaTeX > , where < refresh to render LaTeX > is some noise, a point with a large < refresh to render LaTeX > value will likely have a large < refresh to render LaTeX > value, but also a large < refresh to render LaTeX > value. Thus, when < refresh to render LaTeX > is large, you can expect < refresh to render LaTeX > to be predictably smaller than < refresh to render LaTeX > .

The above description is when < refresh to render LaTeX > is meant to be an estimate of < refresh to render LaTeX > . A similar effect can be seen when < refresh to render LaTeX > is only meant to be correlated with < refresh to render LaTeX > by looking at percentiles. When a sample is chosen which is a typical member of the top < refresh to render LaTeX > percent of all < refresh to render LaTeX > values, it will have a lower < refresh to render LaTeX > value than a typical member of the top < refresh to render LaTeX > percent of all < refresh to render LaTeX > values. As a special case, when you select the highest < refresh to render LaTeX > value, you will often not select the highest < refresh to render LaTeX > value.

Examples
--------

Examples of Regressional Goodhart are everywhere. Every time someone does something that is anything other than the thing that maximizes their goal, you could view it as them optimizing some kind of proxy (and the action to maximize the proxy is not the same as the action to maximize the goal).

R[egression to the Mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean), [Winner’s Curse](https://en.wikipedia.org/wiki/Winner%27s_curse), and [Optimizer’s Curse](https://faculty.fuqua.duke.edu/~jes9/bio/The_Optimizers_Curse.pdf) are all examples of Regressional Goodhart, as is [the Tails Come Apart](http://lesswrong.com/lw/km6/why_the_tails_come_apart/) phenomenon.

Relationship with Other Goodhart Phenomena
------------------------------------------

Regressional Goodhart is by far the most benign of the four Goodhart effects. It is also the hardest to avoid, as it shows up every time the proxy and the goal are not exactly the same.

Mitigation
----------

When facing only Regressional Goodhart, you still want to choose the option with the largest proxy value. While the proxy will be an overestimate it will still be better in expectation than options with a smaller proxy value. If you have control over what proxies to use, you can mitigate Regressional Goodhart by choosing proxies that are more tightly correlated with your goal.

If you are not just trying to pick the best option, but also trying to have an accurate picture of what the true value will be, Regressional Goodhart may cause you to overestimate the value. If you know the exact relationship between the proxy and the goal, you can account for this by just calculating the expected goal value for a given proxy value. If you have access to a second proxy with an error independent from the error in the first proxy, you can use the first proxy to optimize, and the second proxy to get an accurate expectation of the true value. (This is what happens when you set aside some training data to use for testing.)

* * *

Causal Goodhart
===============

When there is a non-causal correlation between the proxy and the goal, intervening on the proxy may fail to intervene on the goal.

Abstract Model
--------------

If < refresh to render LaTeX > causes < refresh to render LaTeX > (or if < refresh to render LaTeX > and < refresh to render LaTeX > are both caused by some third thing), then a correlation between < refresh to render LaTeX > and < refresh to render LaTeX > may be observed. However, when you intervene to increase < refresh to render LaTeX > through some mechanism that does not involve < refresh to render LaTeX > , you will fail to also increase V.

Examples
--------

Humans often avoid naive Causal Goodhart errors, and most examples I can think of sound obnoxious (like eating caviar to become rich). One possible example is a human who avoids doctor visits because not being told about health is a proxy for being healthy. (I do not know enough about humans to know if Causal Goodhart is actually what is going on here.)

I also cannot think of a good AI example. Most AI is not in acting in the kind of environment where Causal Goodhart would be a problem, and when it is acting in that kind of environment Causal Goodhart errors are easily avoided.

Most of the time the phrase "Correlation does not imply causation" is used it is pointing out that a proposed policy might be subject to Causal Goodhart.

Relationship with Other Goodhart Phenomena
------------------------------------------

You can tell the difference between Causal Goodhart and the other three types because Causal Goodhart goes away when just sample a world with large proxy value, rather than intervene to cause the proxy to happen.

Mitigation
----------

One way to avoid Causal Goodhart is to only sample from or choose between worlds according to their proxy values, rather than causing the proxy. This clearly cannot be done in all situations, but it is useful to note that there is a class of problems for which Causal Goodhart cannot cause problems. For example, consider choosing between algorithms based on how well they do on some test inputs, and your goal is to choose an algorithm that performs well on random inputs. The fact that you choose an algorithm does not effect its performance, and you don't have to worry about Causal Goodhart.

In cases where you actually change the proxy value, you can try to infer the causal structure of the variables using statistical methods, and check that the proxy actually causes the goal before you intervene on the proxy.

* * *

Extremal Goodhart
=================

Worlds in which the proxy takes an extreme value may be very different from the ordinary worlds in which the correlation between the proxy and the goal was observed.

Abstract Model
--------------

Patterns tend to break at simple joints. One simple subset of worlds is those worlds in which < refresh to render LaTeX > is very large. Thus, a strong correlation between < refresh to render LaTeX > and < refresh to render LaTeX > observed for naturally occuring < refresh to render LaTeX > values may not transfer to worlds in which < refresh to render LaTeX > is very large. Further, since there may be relatively few naturally occuring worlds in which < refresh to render LaTeX > is very large, extremely large < refresh to render LaTeX > may coincide with small < refresh to render LaTeX > values without breaking the statistical correlation.

Examples
--------

Humans evolve to like sugars, because sugars were correlated in the ancestral environment (which has fewer sugars) with nutrition and survival. Humans then optimize for sugars, have way too much, and become less healthy.

As an abstract mathematical example, let < refresh to render LaTeX > and < refresh to render LaTeX > be two correlated dimensions in a multivariate normal distribution, but we cut off the normal distribution to only include the ball of points in which < refresh to render LaTeX > for some large < refresh to render LaTeX > . This example represents a correlation between < refresh to render LaTeX > and < refresh to render LaTeX > in naturally occurring points, but also a boundary around what types of points are feasible that need not respect this correlation. Imagine you were to sample < refresh to render LaTeX > points and take the one with the largest < refresh to render LaTeX > value. As you increase < refresh to render LaTeX > , at first, this optimization pressure lets you find better and better points for both < refresh to render LaTeX > and < refresh to render LaTeX > , but as you increase < refresh to render LaTeX > to infinity, eventually you sample so many points that you will find a point near < refresh to render LaTeX > . When enough optimization pressure was applied, the correlation between < refresh to render LaTeX > and < refresh to render LaTeX > stopped mattering, and instead the boundary of what kinds of points were possible at all decided what kind of point was selected.

Many examples of machine learning algorithms doing bad because of [overfitting](https://en.wikipedia.org/wiki/Overfitting) are a special case of Extremal Goodhart.

Relationship with Other Goodhart Phenomena
------------------------------------------

Extremal Goodhart differs from Regressional Goodhart in that Extremal Goodhart goes away in simple examples like correlated dimensions in a multivariate normal distribution, but Regressional Goodhart does not.

Mitigation
----------

Quantilization and Regularization are both useful for mitigating Extremal Goodhart effects. In general, Extremal Goodhart can be mitigated by choosing an option with a high proxy value, but not so high as to take you to a domain drastically different from the one in which the proxy was learned.

* * *

Adversarial Goodhart
====================

When you optimize for a proxy, you provide an incentive for adversaries to correlate their goal with your proxy, thus destroying the correlation with your goal.

Abstract Model
--------------

Consider an agent < refresh to render LaTeX > with some different goal < refresh to render LaTeX > . Since they depend on common resources, < refresh to render LaTeX > and < refresh to render LaTeX > are naturally opposed. If you optimize < refresh to render LaTeX > as a proxy for < refresh to render LaTeX > , and < refresh to render LaTeX > knows this, < refresh to render LaTeX > is incentivized to make large < refresh to render LaTeX > values coincide with large < refresh to render LaTeX > values, thus stopping them from coinciding with large < refresh to render LaTeX > values.

Examples
--------

When you use a metric to choose between people, but then those people learn what metric you use and game that metric, this is an example of Adversarial Goodhart.

Adversarial Goodhart is the mechanism behind a superintelligent AI making a [Treacherous Turn](http://lesswrong.com/lw/n5k/a_toy_model_of_the_treacherous_turn/). Here, < refresh to render LaTeX > is doing what the humans want forever. < refresh to render LaTeX > is doing what the humans want in the training cases where the AI does not have enough power to take over, and < refresh to render LaTeX > is whatever the AI wants to do with the universe.

Adversarial Goodhart is also behind the [malignancy of the universal prior](https://ordinaryideas.wordpress.com/2016/11/30/what-does-the-universal-prior-actually-look-like/), where you want to predict well forever ( < refresh to render LaTeX > ), so hypotheses might predict well for a while ( < refresh to render LaTeX > ), so that they can manipulate the world with their future predictions ( < refresh to render LaTeX > ).

Relationship with Other Goodhart Phenomena
------------------------------------------

Adversarial Goodhart is the primary mechanism behind the original Goodhart's Law.

Extremal Goodhart can happen even without any adversaries in the environment. However, Adversarial Goodhart may take advantage of Extremal Goodhart, as an adversary can more easily manipulate a small number of worlds with extreme proxy values, than it can manipulate all of the worlds.

Mitigation
----------

Succesfully avoiding Adversarial Goodhart problems is very difficult in theory, and we understand very little about how to do this. In the case of non-superintelligent adversaries, you may be able to avoid Adversarial Goodhart by keeping your proxies secret (for example, not telling your employees what metrics you are using to evaluate them). However, this is unlikely to scale to dealing with superintelligent adversaries.

One technique that might help in mitigating Adversarial Goodhart is to choose a proxy that is so simple and optimize so hard that adversaries have no or minimal control over the world which maximizes that proxy. (I want to ephasize that this is not a good plan for avoiding Adversarial Goodhart; it is just all I have.)

For example, say you have a complicated goal that includes wanting to go to Mars. If you use a complicated search process to find a plan that is likely to get you to Mars, adversaries in your search process may suggest a plan that involves building a superintelligence that gets you to Mars, but also kills you.

On the other hand, if you use the proxy of getting to Mars as fast as possible and optimize very hard, then (maybe) adversaries can't add baggage to a proposed plan without being out selected by a plan without that baggage. Buliding a superintelligence maybe takes more time than just having the plan tell you how to build a rocket quickly. (Note that the plan will likely include things like acceleration that humans can't handle and nanobots that don't turn off, so Extremal Goodhart will still kill you.)