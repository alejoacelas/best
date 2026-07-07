---
title: "Formalising the 'Washing Out Hypothesis'"
author: "dwebb"
date: 2021-03-25
url: https://forum.effectivealtruism.org/posts/z2DkdXgPitqf98AvY/formalising-the-washing-out-hypothesis
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ea-intro-program/introduction-to-longtermism.md; do long-run effects wash out? longtermism epistemics"
---

*Thanks to the members of the* [*Global Priorities Reading Group*](https://forum.effectivealtruism.org/posts/dia3NcGCqLXhWmsaX/an-introduction-to-global-priorities-research-for-economists) *at the Paris School of Economics, especially David Bernard, Christian Abele, Eric Teschke, Matthias Endres, Adrien Fabre, and Lennart Stern, for inspiring this post, and for giving me great feedback. Thanks too to Aaron Gertler for very helpful comments.*

Brief Summary
=============

Longtermists face a tradeoff: the stakes of our actions may be higher when looking further into the future, but predictability also declines when trying to affect the longer-run future. If predictability declines quickly enough, then long term effects might “wash out”, and the near term consequences of our actions might be the most important for determining what we ought to do. Here, I provide a formal framework for thinking about this tradeoff. I use a model in which a Bayesian altruist receives signals about the future value of a neartermist and a longtermist intervention. The noise of these signals increases as the altruist tries to predict further into the future. Choosing longtermist interventions is relatively less appealing when the noise of signals increases more quickly. And even if a longtermist intervention appears to have an effect that lasts infinitely long into the future, predictability may decline sufficiently quickly that the ex ante value of the longtermist intervention is finite (and therefore may be less than the neartermist intervention).

Intro
=====

Longtermism is roughly the claim that what we ought to do is mostly determined by how our actions affect the very long-run future. The intuition that underlies this claim is that the future might be *very* long and *very* big, meaning that the vast majority of value is likely to be realised over the long-run future. On the other hand, the predictability of the effects of our actions is likely to decrease as we extend our time-horizon to the very long-run future. For example, it may be impossible to have a predictable and significant effect on the state of the world more than 1,000 years from now. 

Altruists thus face a trade-off: if we attempt to improve the future over the long run rather than in the near term, there may be higher *stakes*, but less *predictability*. If the predictability of the effects of our actions declines quickly enough to counteract the increased stakes, then near term effects will dominate our *ex ante* moral decision-making, contrary to the claims of the longtermist. This objection to longtermism has been called the [“washing out hypothesis”](https://globalprioritiesinstitute.org/hilary-greaves-william-macaskill-the-case-for-strong-longtermism/) and the [“epistemic challenge to longtermism”](https://globalprioritiesinstitute.org/christian-tarsney-the-epistemic-challenge-to-longtermism/), and you can find further discussions of it in the links. It is seen as one of the most important and plausible objections to the claims of the longtermist.

In this post, I aim to provide a simple mathematical framework for thinking about the washing out hypothesis that formalises the tradeoff between stakes and predictability. 

Model summary
=============

The basic idea behind the model is as follows:

*   An altruist tries to determine the best intervention by carrying out cost-effectiveness calculations. We assume that these exercises will yield an unbiased but noisy *signal* of the value of an intervention at every time *t* in the future.
*   In order to account for the fact that predictability decreases as we extend the time horizon, we assume that the *noise* on these cost-effectiveness signals will increase as the altruist looks further into the future. Using a Bayesian framework, we can show that this gives the altruist an *as-if discounting function*, where the altruist acts “as if” the future matters less. The altruist has perfectly patient preferences, so they *do not* discount the future because they “care” about the future less (see [Hilary Greaves’ discussion](https://www.cambridge.org/core/journals/economics-and-philosophy/article/discounting-for-public-policy-a-survey/4CDDF711BF8782F262693F4549B5812E) for why we might think this is ethically inappropriate). Rather, they discount the future because it is empirically more difficult to predict.
*   To capture the intuition that the stakes on longtermist actions may be higher, we assume that the altruist is choosing between two alternative interventions, a neartermist intervention (*N*) and a longtermist intervention (*L*). The cost-effectiveness signals suggest that *N* will only have an effect that lasts a short time, while the *L* will have an effect that doesn’t start immediately but that lasts for a very long time.

The framework is pretty general, but it might be useful to have examples in mind. Imagine that *N* is an intervention that distributes cash transfers to poor individuals: this leads to large predicted benefits for recipients in the near term, but no predicted effect in the long term. And *L* might be an intervention that reduces carbon dioxide emissions. The cost-effectiveness exercise predicts 0 benefits in the near term for this intervention, but by reducing the risk of catastrophic climate change it is predicted to lead to a stream of increased value in the future. In this example, and in the framework more generally, we are assuming that the stakes of longtermist actions are larger because the future is very *long* (and mostly ignoring the fact that the future may also be very *big*).

The model describes the conditions under which an altruist should choose the longtermist intervention over and above the neartermist intervention, given that the effects of the longtermist interventions may be larger in scale but less predictable. One of the key determinants of the optimal choice is the shape of the *forecasting error function*, which describes how quickly the future becomes unpredictable as we try to predict further and further into the future. The longtermist intervention is less appealing (relative to the neartermist intervention) in cases when the future more rapidly becomes less predictable as we extend our prediction horizon. And we can also show that if the longtermist intervention is predicted to have effects that last infinitely long, this does not entail that *L* will always be preferable to *N*. If predictability falls fast enough (specifically, more than linearly), then the value of *L* will not tend towards infinity even as our time horizon extends towards infinity.

Hopefully, the model will be able to act as a useful thinking tool for examining the ideas of longtermism and the washing out hypothesis in a slightly more formal way. One important takeaway appears to be the importance of the shape of the forecasting error function. The shape of \\(f(t)\\) is essentially an empirical question. Thus, a key message of this framework is that we need to do more empirical research on the forecasting error function, including aspects such as (i) how quickly forecasting noise increases with prediction time-horizon, (ii) under what conditions does forecasting noise not increase rapidly with time-horizon, and (iii) how can we better predict the long-run effects of actions today.

(*A note on precedents:* The framework I develop below is similar in spirit and aim to [Christian Tarsney’s great work on the epistemic challenge to longtermism](https://globalprioritiesinstitute.org/christian-tarsney-the-epistemic-challenge-to-longtermism/), although the model structure is rather different (my framework is essentially a Bayesian one; Christian models the loss of predictability using “exogenous nullifying events”). The idea was very much inspired by Holden Karnofsky’s [discussions on the interpretation of cost-effectiveness estimates](https://blog.givewell.org/2011/08/18/why-we-cant-take-expected-value-estimates-literally-even-when-theyre-unbiased/). The model itself is an extension of the framework seen in [Gabaix & Laibson 2017](https://www.nber.org/papers/w23254), although the application I explore here is very different to the original paper.)

Model
=====

Model setup
-----------

In the model, an altruist with perfectly patient preferences chooses between a neartermist intervention (N) and a longtermist intervention (L). The moment at which they choose is \\(t = 0\\). For simplicity, assume that N and L have the same cost, so that differences in benefits will correspond with differences in cost-effectiveness.

*Preferences*: the altruist has an objective function that is total utilitarian with no pure time discounting (they are perfectly patient), so that the overall value of choosing an intervention is given by:

\\\[V = \int_{0}^{\infty} u(t) \; dt\\\]

where u(t) is the true benefit of the intervention at time *t*.

*Cost-effectiveness estimates*: the altruist carries out cost-effectiveness estimates by researching the effects of each intervention. We assume that this exercise yields an unbiased but noisy *signal* of the true benefit for every time period in the future. So for every t greater than 0, the altruist observes:

\\\[s(t) = u(t) + \varepsilon(t)\\\]

where \\(s(t)\\) is the signal for the value, composed of the true value of the intervention \\(u(t)\\) and some noise \\(\varepsilon(t)\\).

To account for the idea that the predictability of the effects of the altruist’s actions decreases when increasing the time horizon, we assume that the noise on the signal increases with time-horizon, that is:

\\\[Var(\varepsilon(t)) = f(t) \quad \text{with}\quad f'(t) > 0\\\]

where  \\(f(t)\\) is the *forecasting error function*. This function describes how the variance of the noise increases as the altruist tries to predict further into the future. Intuitively, since far-future effects are harder to predict than near-future effects, the cost-effectiveness estimates will become less reliable as the time-horizon increases. We will postulate different functional forms for \\(f(t)\\) below.

To make the model tractable, we assume that the altruist’s prior beliefs over \\(u(t)\\) and \\(\varepsilon(t)\\) are normally distributed. And suppose that the mean of the prior value on any action is 0. Roughly, this amounts to the assumption that (absent other information) we expect that our actions will have neither a net positive nor net negative effect on the world. So the priors are:

\\\[u(t) \sim \mathcal{N} (0, \sigma_u^2)\\\]\\\[\varepsilon(t) \sim \mathcal{N} (0, f(t))\\\]

Under these assumptions, we can write the altruist’s posterior expectation for the value of an intervention at time \\(t\\) using an “as-if discounting function” D(t) (see  [Gabaix & Laibson 2017](https://www.nber.org/papers/w23254)): 

\\\[E(u(t) | s(t)) = D(t) s(t) = \frac{s(t)}{1 + \frac{f(t)}{\sigma^2_u}}\\\]\\\[D(t) := \frac{1}{1 + \frac{f(t)}{\sigma^2_u}}\\\]

When the altruist observes a signal \\(s(t)\\), they need to take account of the fact that the signal not only reflects the true value of the intervention \\(u(t)\\), but also some noise due to prediction error \\(\varepsilon(t)\\). When most of the variance of the signal comes from the true value \\(u(t)\\) (the signal is not noisy) then  \\(f(t) / \sigma_u^2\\) will be low, and \\(D(t)\\) will be close to 1. In this case, the posterior expected value of the intervention at \\(t\\) will be close to \\(s(t)\\); the altruist can take the signal “at face value”. On the other hand, when examining the effects on the long run future, the prediction error on any forecasts will be larger, meaning that the signal is noisier and thus constitutes weaker evidence for the true value of the intervention. Since more of the variance of the signal is due to prediction error, so  \\(f(t) / \sigma_u^2\\) , and \\(D(t)\\) will tend towards 0, because the altruist has to discount their posterior towards their prior (which is in this case 0). Broadly this captures the intuition that when calculating a posterior belief for the value of an intervention, the signal of the value of an intervention should be *discounted* to account for the fact that the future is unpredictable.

To model the differences between neartermist and longtermist interventions, I suppose a particular structure on the signals that are generated by the cost-effectiveness estimates. For the neartermist intervention, the signal received from the cost-effectiveness indicates that the value will be:

\\\[s_{N}(t) = \begin{cases} \overline{s} \quad \quad 0 \le t \le t_{N}\\0 \quad \quad t > t_{N} \end{cases}\\\]

In other words, according to the cost estimate, the value of the  \\(N\\)  intervention will be high immediately (at \\(\overline{s}\\)) and last a short time until  \\(t_{N}\\) , and then drop to 0.

The longtermist intervention has a different structure - the cost-effectiveness estimate indicates that it won’t start generating benefits until some time \\(t_0 > 0\\) . The predicted benefits  \\(\underline{s}\\)  are different at any given time compared to the *N* intervention (in the example below, I assume  \\(\underline{s} < \overline{s}\\) , but this isn’t essential for any of the results). But the benefits of L last a long time (until  \\(t_{max} \gg t_0\\) ).

\\\[s_{L}(t) = \begin{cases} 0 \quad \quad 0 \le t \le t_0 \\\underline{s} \quad \quad t_0 < t \le t_{max}\\0 \quad \quad t \ge t_{max} \end{cases}\\\]

(In principle, it would be possible to imagine many other types of signal structures that could be generated, depending on the exact type of intervention. It would be interesting to explore what other signal structures might model “real-world” proposals for longtermist interventions.)

Here’s a simple diagram of what the signals for each intervention might look like. We’re imagining that a cost-effectiveness exercise on a bed-net intervention tells us that “this intervention will yield benefits of 100 QALYs each year, realised over the next 70 years; then, once the beneficiaries of the programme have passed away, there will be no benefits of the intervention”. But the longtermist intervention doesn’t yield any predicted benefits until year 200, and then provides a smaller stream of value (50 QALYS at each year) for a much longer period (until year 1000).

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/a7c190abccf1f7703a97b0042dd7221702252c9db6e23463.png)

Now that we have defined the signals received by the altruist for each intervention, we can calculate the total *posterior* **expected** value for each intervention using the as-if discounting function and by integrating over all of time:

The total posterior expected value for the neartermist intervention is:

\\\[\hat{V}_{N} := E(V_{N} | s_{N}(t)) = \int_{0}^{t_{N}} D(t) s_{N}(t) dt = \int_0^{t_{N}} \frac{1}{1 + (f(t) / \sigma^2_u)} \times \overline{s} \quad dt\\\]

And for the longtermist intervention it’s:

\\\[\hat{V}_{L} := E(V_{L} | s_{L}(t)) = \int_{t_0}^{t_{max}} D(t) s_{L}(t) dt = \int_{t_0}^{t_{max}} \frac{1}{1 + (f(t) / \sigma^2_u)} \times \underline{s} \quad dt\\\]

The diagram below gives a visual intuition for these expressions. The dotted lines represent the signals (the same as the previous diagram). The solid lines are the posterior expected value for each intervention at each *t*, which are calculated by discounting the signals to account for reductions in predictability as t increases. Then, the *total* posterior expected value of each intervention is given by the shaded area under the curves. We can see that because the longtermist intervention starts later than the neartermist intervention, it is “discounted” more heavily.  This captures the simple intuition that the reduction in predictability from the future will “hurt” the value of the longtermist interventions more than the neartermist ones.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/e7625c120fddfe1ba712f8bce579bb7b2096e0de2475c6ba.png)

Model results
-------------

### Linear case

We can find the solution to the integrals that describe the total posterior value of each intervention if we specify the shape of the forecasting error function \\(f(t)\\). One simple case is where:

\\\[f(t) = \alpha t\\\]

i.e. the forecasting noise increases linearly as the time horizon increases. Here, \\(\alpha\\) is a parameter that describes how quickly things become unpredictable as we extend our time horizon. In this case, the as-if discounting function becomes a hyperbolic function of time:

\\\[D(t) = \frac{1}{1 + \alpha t / \sigma_u^2}\\\]

How do the different parameters affect the desirability of choosing the longtermist intervention over and above the neartermist intervention? To see this, we can derive an expression for the (posterior) relative value \\(RV\\) of choosing the longtermist intervention compared to the neartermist:

\\\[RV := \frac{\hat{V}_L}{\hat{V}_{N}} = (\underline{s}  / \overline{s}) \times \frac{\log \left[(1 + a t_{max})/(1 + a t_0) \right]}{\log (1 + a t_{N})}\\\]

where  \\(a := \alpha / \sigma_u^2\\) **(**[**see proof here**](https://drive.google.com/file/d/1zK5Xv1-I_MkbKiVg93-gEbWdY5Qapmkg/view?usp=sharing)**)**.  The altruist should choose the longtermist intervention when RV > 1, and choose the neartermist intervention when RV < 1.

Intuitively, the posterior relative value of the longtermist intervention is higher when:

*   The longtermist intervention lasts longer (when \\(t_{max}\\) is higher)
*   The longtermist intervention starts earlier (when \\(t_{0}\\) is lower)
*   The neartermist intervention is shorter (when \\(t_{N}\\) is lower)
*   When the relative size of the value-signal from the longtermist intervention is higher (\\(\underline{s}  / \overline{s}\\)  is higher)

We can also show that RV is decreasing in \\(\alpha\\) (**see** [**proof**](https://drive.google.com/file/d/1zK5Xv1-I_MkbKiVg93-gEbWdY5Qapmkg/view?usp=sharing)). This captures one of the key features of the washing out hypothesis. When \\(\alpha\\) is higher, the future becomes less predictable more rapidly as we extend our time horizon further, meaning that longtermist interventions are less appealing compared to near termist interventions. This insight points us towards an important aspect of empirical research. In particular, we need to know more about how quickly our ability to predict the effects of our actions declines as we extend our time horizon.

### Behaviour when longtermist intervention appears to have benefits that last infinitely long

Another interesting insight from the model comes when we consider the behaviour when \\(t_{max}\\) tends to infinity. We might think that as long as \\(t_{max}\\) is high enough, the longtermist intervention should always be preferable to the neartermist intervention. If our cost-effectiveness estimates suggest that the longtermist intervention yields benefit for almost infinitely long, it might feel plausible that this will always be enough to outweigh the short-term benefits of a neartermist intervention. In fact, however, we can show that if the prediction error increases at an increasing rate, then predictability will decline quickly enough to “cancel out” the longer time horizon. Very long time horizons are not always sufficient to guarantee that the longtermist intervention is the best choice.

To examine this intuition, let’s now suppose that the forecasting error function can now be non-linear, described by:

\\\[f(t) = \alpha t^\beta  \quad \text{with } \beta > 0\\\]

Before, we had \\(\beta = 1\\), corresponding to a linear forecasting error function. Now, if  \\(\beta > 1\\), forecasting noise will increase at an increasing rate as the time horizon extends out to the future. If  \\(\beta < 1\\), forecasting noise will increase but at a slower and slower rate as the time-horizon increases.

What happens to the posterior value of the longtermist intervention when the intervention appears to yield benefits infinitely far into the future? The expression for the value is:

\\\[\hat{V}_{L} = \int_{t_0}^{\infty} \frac{\underline{s}}{1 + (\alpha t^{\beta} / \sigma^2_u)} dt\\\]

And it can be shown that:

*   When \\(0 \le \beta \le 1\\) ,    \\(\hat{V}_{L} = \infty\\)
*   But when \\(\beta > 1\\) , we can bound  \\(\hat{V}_L \le \overline{v}\\)  where the upper bound is   \\(\overline{v} := \underline{s}\left(\sigma^2_u/\alpha(\beta - 1) t_0^{\beta - 1}\right)\\)

**(**[**see proof here**](https://drive.google.com/file/d/1zK5Xv1-I_MkbKiVg93-gEbWdY5Qapmkg/view?usp=sharing)**)**

So when the forecasting error function increases less-than-linearly, having an infinite time horizon means that we always favour a longtermist intervention relative to a neartermist one. On the other hand, with a forecasting error function that increases at an increasing rate, then this may not be sufficient to generate very high expected values for the long-termist intervention *even if our time horizon is effectively infinite.*

One intuitive way of thinking of this result is as a “race” between two competing factors as the time horizon increases. On the one hand, the stakes increase because value is realised for a longer duration. But on the other hand, the predictability of one’s actions decreases, meaning that extra value is discounted more. When \\(\beta >1\\), the loss of predictability is more than linear and it wins the “race”, meaning that total posterior value is bounded and doesn't continue towards infinity. On the other hand, when \\(\beta \le 1\\), the increase in value due to increased stakes always outweighs the loss in predictability as \\(t_{max}\\) increases, so total value keeps increasing towards infinity as the horizon stretches towards infinity.

Broadly, this result indicates that the shape of the relationship between time and forecasting error may be crucial in determining the relative value of longtermist vs neartermist interventions when our time horizon gets very large. 

Discussion
==========

Both the linear and the non-linear version of the model point towards the crucial importance of the shape of the *forecasting error function*. In the linear case, we showed that the relative value of the longtermist intervention was decreasing in the value of \\(\alpha\\). When the future becomes less predictable more quickly as the forecasting time horizon increases, longtermist interventions are less appealing on the margin. After allowing for non-linear forecasting error functions, we find that the \\(\beta\\) parameter (that describes whether \\(f(t)\\) increases at a decreasing, constant, or increasing rate) is the key determinant of whether a longtermist intervention will always dominate in expected-value terms when our time horizon is effectively infinite.

It’s worth restating that the shape of the forecasting error function is *an empirical question*. The model’s results therefore underscore the need for more empirical research in trying to understand how forecasting accuracy declines as we increase the time horizon of forecasts, as this may have a direct bearing on the relative merits of longtermist interventions. If you are interested in this area, see initial work on this by [David Bernard](https://davidrhysbernard.com/) e.g. [here](https://globalprioritiesinstitute.org/david-rhys-bernard-estimating-long-term-treatment-effects-without-long-term-outcome-data/) and [here](https://drive.google.com/file/d/1M_A-xHioLzY_GyRlYE9ZnAcTLGVFuZ6G/view?usp=sharing). Note that the type of forecasting required here is not just state forecasting (predicting what will happen), but counterfactual forecasting (predicting what would happen *if* an intervention is carried out). While a fair amount of research has been carried out on state forecasting, counterfactual forecasting is much less well understood. And it may be a whole lot more tricky to do.

It’s worth pointing out that the model I’ve outlined above is extremely simplified, and so may fail to capture a number of features of the choice between interventions that may be important in real life. It would be worth exploring the effect of relaxing some of the simplifying assumptions I made, in order to see how robust the insights and conclusions of the model are. For example, I assumed (for the sake of tractability) that the value of the interventions was normally distributed. Most discussions in this area indicate that the [distribution of the value/cost-effectiveness of interventions may be highly right skewed](https://www.cgdev.org/sites/default/files/1427016_file_moral_imperative_cost_effectiveness.pdf), so it would be interesting to explore the robustness of conclusions when using e.g. a log-normal distribution instead. Other aspects worth examining further include (i) the assumption of 0 priors for both types of intervention, (ii) the assumption that the signal received about the future value of interventions takes the same value at all time horizons (\\(\underline{s}, \overline{s}\\) are constant), and (iii) different shapes for the forecasting error function.

Another weakness of the model is that it doesn’t seem particularly appropriate for modelling some types of longtermist interventions. In particular, it’s not ideal for capturing the dynamics of interventions that aim to push the world into “attractor states” (states of the world such that once the world enters that state, it tends to stay in that state for an extremely long time). Since these are [possibly the best candidates for interventions](https://globalprioritiesinstitute.org/hilary-greaves-william-macaskill-the-case-for-strong-longtermism/) that manage to avoid the “washing out” trap, it would be useful to explore other models to understand these interventions in more depth.