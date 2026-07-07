---
title: "Replicating and extending the grabby aliens model"
author: "Tristan Cook"
date: 2022-04-23
url: https://forum.effectivealtruism.org/posts/7bc54mWtc7BrpZY9e/replicating-and-extending-the-grabby-aliens-model
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. forethought/agi-and-lock-in.md; space governance/macrostrategy — grabby aliens model"
---

*Crossposted to* [*LessWrong*](https://www.lesswrong.com/posts/iwWjBH2rBF7ExXeEG/replicating-and-extending-the-grabby-aliens-model)

Summary
=======

This report is the most comprehensive model to date of aliens and the Fermi paradox. In particular, it builds on [Hanson et al. (2021)](https://arxiv.org/abs/2102.01522) and [Olson (2015)](https://arxiv.org/abs/1411.4359) and focuses on the expansion of ‘grabby’ civilizations: civilizations that expand at relativistic speeds and make visible changes to the volume they control.

This report considers multiple anthropic theories: the self-indication assumption (SIA), as applied previously by [Olson & Ord (2022)](https://arxiv.org/abs/2106.13348), the self-sampling assumption (SSA), implicitly used by Hanson et al. (2021) and a decision theoretic approach, as applied previously by [Finnveden (2019)](https://forum.effectivealtruism.org/posts/9p52yqrmhossG2h3r/quantifying-anthropic-effects-on-the-fermi-paradox). 

In Chapter 1, I model the appearance of intelligent civilizations (ICs) like our own. In Chapter 2, I consider how grabby civilizations (GCs) modify the number and timing of intelligent civilizations that appear.  

In Chapter 3 I run Bayesian updates for each of the above anthropic theories. I update on the evidence that we are in an advanced civilization, have arrived roughly 4.5Gy into the planet’s roughly 5.5 Gy habitable duration, and do not observe any GCs.

In Chapter 4 I discuss potential implications of the results, particularly for altruists hoping to improve the far future.

Starting from a prior similar to [Sandberg et al.’s (2018)](https://arxiv.org/abs/1806.02404) literature-synthesis prior, I conclude the following:

Using SIA or applying a non-causal decision theoretic approach (such as anthropic decision theory) with total utilitarianism, one should be almost certain that there will be many GCs in our future light cone.

Using SSA[^m6rn08cfdd], or applying a non-causal decision theoretic approach with average utilitarianism, one should be confident (~85%) that GCs are *not* in our future light cone, thus rejecting the result of Hanson et al. (2021). However, this update is highly dependent on one’s beliefs in the habitability of planets around stars that live longer than the Sun: if one is certain that such planets can support advanced life, then one should conclude that GCs are most likely in our future light cone. Further, I explore how an average utilitarian may wager there are GCs in their future light cone if they expect significant trade with other GCs to be possible. 

These results also follow when taking (log)uniform priors over all the model parameters.

All figures and results are reproducible [here](https://colab.research.google.com/drive/1MVyf_Ljkc8OLWTBcHPtke2Qcveg1TSjB?usp=sharing). 

Vignettes
=========

To set the scene, I start with two vignettes of the future. This section can be skipped, and features terms I first explain in Chapters 1 and 2.

High likelihood vignette
------------------------

In a Monte Carlo simulation of \\(10^6\\) draws, the following world described gives the highest likelihood for both SIA and SSA (with reference class of observers in intelligent civilizations). That is, civilizations like ours are both relatively common and typical amongst all advanced-but-not-yet-expansive civilizations in this world. 

 In this world, life is relatively hard. There are five hard try-try steps of mean completion time 75 Gy, as well as 1.5 Gy of easy ‘delay’ steps. Planets around red dwarfs are not habitable, and the universe became habitable relatively late -- intelligent civilizations can only emerge from around 8 Gy after the Big Bang. Around 0.3% of terrestrial planets around G-stars like our own are potentially habitable making Earth not particularly rare. 

Around 2.5% intelligent civilizations like our own become grabby civilizations (GCs). This is the [SIA Doomsday argument](https://meteuphoric.com/2010/03/23/sia-doomsday-the-filter-is-ahead/) in action.

Around 7,000 GCs appear per observable universe sized volume (OUSV). GCs already control around 22% of the observable universe, and as they travel at \\(0.8c\\), their light has reached around 35% of the observable universe. Nearly all GCs appear between 10Gy and 18 Gy after the Big Bang.

If humanity becomes a GC, it will be slightly smaller than a typical GC - around 62% of GCs will be bigger. A GC emerging from Earth would in expectation control around 0.1% of the future light cone and almost certainly contain the entire [Laniakea Supercluster](https://en.wikipedia.org/wiki/Laniakea_Supercluster), itself containing at least 100,000 galaxies.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/4f4c5b84f31f3d8df5b377159fbc72c6b22b24dd38db7ea2.png)

The distribution of GC volumes

![](https://lh4.googleusercontent.com/FLIDzeeesQ3xDXyp6LAqAT5lkR9vB8g37DWL4vpHR9u_eTUWDm-GJ1c8FiPPbXqRtN9eNVYOzoDwwK95kNmB7__fVZQzDe8mC88GQcTeGgcX0ey2PZQE-65aAs2o1FTWKBjvRIJo)

The CDF of the time until a GC is visible from Earth.

The median time by which GCs will be visible to observers on Earth is around 1.5 Gy from now. It is practically certain humanity will not see any GCs any time soon: there is roughly 0.000005% probability (one in twenty million) that light from GCs reaches us in the next one hundred years[^cppszal687h]. GCs will certainly be visible from Earth in around 4 Gy.

As we will see, SIA is highly confident in a future is similar to this one. SSA (with the reference class of observers in intelligent civilizations), on the other hand, puts greater posterior credence in human civilization being alone, even though worlds like these have high likelihood.

High decision-worthiness vignette
---------------------------------

This world is one that a total utilitarian using [anthropic decision theory](https://arxiv.org/abs/1110.6437) would wager being in, if they thought their decisions can influence the value of the future in proportion to the resources that an Earth originating GC controls.

In this world, there are eight hard steps, with mean hardness 23 Gy and delay steps totalling 1.8 Gy. Planets capable of supporting advanced life are not too rare: around 0.004% of terrestrial planets are potentially habitable. Again, planets around longer-lived stars are not habitable.  

Around 90% of ICs become GCs, and there are roughly 150 GCs that appear per observable universe sized volume. GCs expand at 0.85c, and a GC emerging from Earth would reach 31% of our future light cone, around 49% of its maximum volume, and would be bigger than ~80% of all GCs. Since there are so few GCs, the median time by which a GC is visible on Earth is not for another 20 Gy.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/b553c413eadba48ffa36cbc8a3b538a2b486f9de511e91d2.png)

The distribution of GC volumes

![](https://lh4.googleusercontent.com/wGIvIOVoQ4aKYX_8HG32LbnkmmhXp_db9DMTvuOQohjpmXMd8EHuO0cZMGCYnIHPVMxYqYuEsJtW4ubEOCvuCNiCUom6ev-EzPrOUAcWY0QcX0qyIVzGAizYjkfJe4vkV1MtmWuV)

The CDF of the time until a GC is visible from Earth.

 1 Intelligent Civilizations
============================

I use the term intelligent civilizations (ICs) to describe civilizations at least as technologically advanced as our own. 

In this chapter, I derive a distribution of the arrival times of ICs, \\(\alpha(t)\\). This distribution is dependent on factors such as the difficulty of the evolution of life and the number of planets capable of supporting intelligent life. This distribution does *not* factor in the expansion of other ICs, that may prevent (‘preclude’) later ICs from existing. That is the focus of Chapter 2.

The distribution gives the number of other ICs that arrive at the same time as human civilization, as well as the typicality of the arrival time of human civilization, assuming no ICs preclude any other. 

The universe
------------

I write \\(t_{now}\\) for the time since the Big Bang, which is estimated 13.787 Gy (Ade 2016) \[Gy = gigayear = 1 billion years\].

Current observations suggest the universe is most likely flat (the sum of angles in a triangle are always 180°), or close to flat, and so the universe is either large or infinite. Further, the universe appears to be on average *isotropic* (there are no special directions in the universe) and *homogeneous* (there are no special places in the universe) (Saadeh et al. 2016, Maartens 2011). 

The large or infinite size implies that there are volumes of the universe causally disconnected from our own. The collection of ‘parallel’ universes has been called the “[Level I multiverse](https://en.wikipedia.org/wiki/Multiverse#Level_I:_An_extension_of_our_universe)”. Assuming the universe is flat, Tegmark (2007) conservatively estimates that there is a [Hubble volume](https://en.wikipedia.org/wiki/Hubble_volume) identical to ours \\(10^{10^{115}} m\\) away, and an identical copy of you \\(10^{10^{29}}m\\) away. 

I consider a large finite volume (LFV) of the level I multiverse, and partition this LFV into observable universe size (spherical) volumes (OUSVs)[^rdoqntdd4p] . My model uses quantities as *averages* *per OUSV.* For example, \\(\alpha(t)\\) will be the rate of ICs arriving per OUSV on average at time \\(t\\). 

The (currently) observable universe necessarily defines the limit of what we can currently know, but not what we can eventually know. The *eventually observable universe* has a volume around 2.5 times that of the volume of the currently observable universe (Ord 2021).

The most action relevant volume for statistics about the number of alien civilizations is the *affectable universe*, the region of the universe that we can causally affect. This is around 4.5% of the volume of the observable universe. I will use the term affectable universe size volumes (AUSVs). 

For an excellent discussion on this topic, I recommend Ord (2021).

The steps to reach life
-----------------------

I consider the path to an IC as made up of a number of steps:

*   Try-try steps that can make repeated attempts to complete. I further break these down into *easy* or *delay* and *hard* steps.
*   Try-once steps, that have a single opportunity to pass or fail

I recommend [Eth (2021)](https://www.lesswrong.com/posts/JdjxcmwM84vqpGHhn/great-filter-hard-step-math-explained-intuitively) for an excellent introduction to try-try steps.

### Try-try steps

[Abiogenesis](https://en.wikipedia.org/wiki/Abiogenesis) is the process by which life has arisen from non-living matter. This process may require some extremely rare configuration of molecules coming together, such that one can model the process as having some rate 1/a of success per unit time on an Earth-sized planet. 

The completion time of such a *try-try step* is [exponentially distributed](https://en.wikipedia.org/wiki/Exponential_distribution) with PDF \\(q_a(t) = \frac{1}{a} \cdot e^{-t/a}\\).  Fixing some time \\(T\\), such as Earth’s habitable duration, the step is said to be *hard* if \\(T \ll a\\). When the step  is hard, for \\(t \ll T\\), \\(q_a(t) \approx \frac{1}{a}\\) is constant since \\(e^{-t/a} \approx 1\\).

Abiogenesis is one of many try-try steps that have led to human civilization. If there are \\(m\\) try-try steps with expected times of completion\\(a_1,...,a_m\\), the completion time of the steps has [hypoexponential](https://en.wikipedia.org/wiki/Hypoexponential_distribution) distribution with parameter \\(\bar{a}=(a_1,...,a_m)\\). For modelling purposes, I split these try-try steps into *delay* steps and *hard* steps.  

I define the delay steps to be the maximal set of individual steps \\(d_1,...,d_k\\) from the steps \\(a_1,...,a_m\\) such that \\(d := \sum_{i=1}^{k} d_i \leq 4.5  Gy\\), the approximate duration life has taken on Earth so far. I then approximate the completion time of the delay try-try steps with the exponential distribution with parameter \\(d\\) . If they exist, I also include any *fuse* steps[^t3u4qxihtp] in the sum of \\(d\\). 

I write \\(h_1,...,h_n\\) for the expected completion times of the \\(n=m-k\\) remaining steps. These steps are not necessarily hard with respect to Earth's habitable duration. I model each \\(h_i\\) to have log-uniform uncertainty between 1 Gy and \\(10^{20}\\)Gy. With this prior, *most* \\(h_i\\) are much greater than 5 Gy and so hard. I approximate the completion time of all of these steps with the [Gamma distribution](https://en.wikipedia.org/wiki/Gamma_distribution) parameters\\(n\\) and \\(h := (h_1h_2 \cdots h_n)^{1/n}\\), the  geometric mean hardness of the try-try steps.[^nx2qv7qcmxa] The Gamma distribution can further be described as a ‘power law’ as I discuss in the appendix. 

I write \\(f_{n,h,d}(t)\\) for the PDF of the completion time of all the delay steps and hard try-try steps. Strictly, it is given as the convolution of the gamma distribution parameters \\(n\\),\\(h\\) and exponential distribution parameter \\(d\\). When \\(d \ll t\\), \\(f_{n,h,d}(t) \approx g_{n,h}(t-d)\\) where \\(g_{n,h}(t)\\) is the PDF of the Gamma distribution. That is, the delay steps can be approximated as completing in their expected time when they are sufficiently short in expectation.

**Priors on **\\(n\\)

After introducing each model parameter, I introduce my priors. Crucially, all the results in Chapter 3 roughly follow when taking (log)uniform priors over all parameters and so my particular prior choices are not too important.

I consider three priors on \\(n\\), the number of hard try-try steps. The first, which I call balanced, is chosen to give an implied prior number of ICs similar to existing literature estimates (discussed later in this chapter). My bullish prior  puts greater probability mass on fewer hard steps and so implies a greater number of  ICs. My bearish prior puts greater probability mass in many hard steps and so predicts fewer ICs.

![](https://lh5.googleusercontent.com/v-tK8iwCh6VbB9jO1W84UtEgaA-IWUriZbuQuvVnsveQoDiKbM983bHoYX-zx1xBKQsH5s_gM6jGu_9vIYPBedFiVoKhwofrNTfNkkN86N9RBOH5tZziKjrJOxVFVjKFLUJZM-3H)

My three priors on \\(n\\). The bullish, balanced and bearish priors have distributions \\(\mathrm{Geometric}(0.7)\\), \\(\mathrm{Geometric}(0.35)\\) and \\(\mathrm{Geometric}(0.2)\\)respectively, truncated to \\(n \leq 20\\).

My priors on \\(n\\) are uninformed by the timing of life on Earth, but weakly informed by discussion of the difficulty of particular steps that have led to human civilization. For example, Sandberg et al. (2018) (supplement I) consider the difficulty of abiogenesis. In Chapter 3 I update on the time that all the steps are completed (i.e., now). I do not update on the timing of the completion of any potential intermediate hard steps, such as the timing of abiogenesis. Further, I do not update \\(n\\) on the habitable *time remaining*, which is implicitly an anthropic update. I discuss this in the appendix.

**Prior on **\\(h\\)

Given these priors on \\(n\\), I derive my prior on \\(h\\) by the geometric mean of \\(n\\) draws from the above-mentioned  \\(\mathrm{LogUniform}(1 Gy,10^{20}  Gy)\\). I chose this prior to later give estimates of life in line with existing estimates. A longer tailed distribution is arguably more applicable. 

![](https://lh5.googleusercontent.com/vQBdG84OBtP9h8UBxeyJeEDjNzEiWASJxM0_a0xxJBDphyQFOJARx--089jFGcFyMRtpYm30HKmXGPFbwStosd7j3Kh1z-OQ2_iVngdI6HFjf2j0_8-IuJVRN3bNy8x9zMckMedI)

My prior on \\(h\\) for fixed values of \\(n\\), \\(p(h|n)\\). For higher \\(n\\) the distribution \\(p(h|n)\\) centres increasingly around \\(1 Gy = \sqrt{ 1 Gy \cdot 10^{20}  Gy}\\)

![](https://lh4.googleusercontent.com/ldBQM3ht34UfbF480oW8VmznHmbIGXfCYw8OmhMJPh4CVB8xnvmcX0z8TigYJNnuQXjL0C12UjPAPdwZYwrUho3o6fdtHMSMYRHEYUl7LC7_rBEjatzf814et8ADWklQ4kdYuUKd)

My marginalised prior on \\(h\\) for each of my three priors on \\(n\\). 

**Prior on **\\(d\\)

My prior on the sum of the delay and fuse steps \\(d\\) has \\(d \sim \mathrm{LogUniform}(0.1  Gy, 4.5  Gy)\\). By definition \\(d < 4.5  Gy\\) and d smaller than 0.1 Gy makes little difference. My prior distribution gives median \\(\sqrt{0.1  Gy \cdot 4.5  Gy} \approx 0.7  Gy\\). The delay parameter \\(d\\)  can also include the delay time between a planet's formation and the first time it is habitable. On Earth, this duration could have been up to 0.6 Gy (Pearce et al. (2018)).

### Try-once steps

I also model “try-once” steps, those that either pass or fail with some probability. The [Rare Earth hypothesis](https://en.wikipedia.org/wiki/Rare_Earth_hypothesis) is an example of a try-once step. The possibility of try-once steps allows one to reject the existence of hard try-try steps, but suppose very hard try-once steps. 

I write \\(w\\) for the probability of passing through all try-once steps. That is, if there are \\(l\\) try-once steps \\(w_1, w_2,..., w_l\\) then

\\(w = P(w_1) \cdot P(w_2|w_1)\cdot \cdots  P(w_l|w_1, w_2,...,w_{l-1})\\)  

![](https://lh3.googleusercontent.com/CGoq3LVpwvR5pDU5V7G1s3coDrjg23nQAklmLRKr2if0U4rSmfc35g_3treajN4QjYyK3EoSv0O00dTTRXW9bBIdi8VEpGowHx7z7MLpfqGS0YevJEovKqcWP5uhWHRxC2hdjDcJ)

My prior on w is distributed \\(w \sim 10^{-\mathrm{Exp}(2)}\\) . This allows for no try-once steps (\\(w=1\\)). The prior could arguably have a longer tail, and is loosely informed by discussion of potential Rare Earth factors [here](https://en.wikipedia.org/wiki/Rare_Earth_hypothesis#Requirements_for_complex_life).

Habitable planets
-----------------

The parameters above give can give distribution of appearance times of an IC on a given planet. In this section, I consider the maximum duration planets can be habitable for, the number of potentially habitable planets, and the formation of stars around which habitable planets can appear. 

### The maximum planet habitable duration

I write \\(L_{max}\\)[^jki3zw8k1q] for the maximum duration any planet is habitable for.[^ds3fv9p5ddl] The Earth has been habitable for between 4.5 Gy and 3.9 Gy (Pearce 2018) and is expected to be habitable for another~1 Gy, so as a lower bound \\(L_{max}\\) ⪆ 5 Gy. Our Sun, a G-type main-sequence star, formed around 4.6 Gy ago and is expected to live for another ~5 Gy. 

Lower mass stars, such as K-type stars (orange dwarfs) have lifetimes between 15 -30 Gy , and M-type stars (red dwarfs) have lifetimes up to 20,000 Gy. These lifetimes give an upper bound on the habitable duration of planets in that star’s system, so I consider \\(L_{max}\\) up to around 20,000 Gy.

The habitability of these longer-lived stars is uncertain. Since red dwarf stars are dimmer (which results in their longer lives), habitable planets around red dwarf stars must be closer to the star in order to have liquid water, which may be necessary for life. However, planets closer to their star are more likely to be tidally locked. Gale (2017) notes that “This was thought to cause an erratic climate and expose life forms to flares of ionizing electro-magnetic radiation and charged particles.” but concludes that   in spite of the challenges, “Oxygenic Photosynthesis and perhaps complex life on planets orbiting Red Dwarf stars may be possible”.

![](https://lh6.googleusercontent.com/hCAe6N66y8h73GsAsxiK_REjPs5raz2sBWSalorDpNe-iX8j2lmtezNL-fgCZyxXOmhLtMGs27mAWtiZlpPJIMQjr5C5wVA9IgMA6ZrphD09S0Z6LjjSPj24Z5mEdjnZpLMxMQB3)

 My prior on \\(L_{max}\\) is distributed \\(L_{max} \sim 5  Gy + 10^{Exp(0.7)}\\), truncated to \\(L_{max} \leq 20,000Gy\\).  This prior disfavours the habitability of longer lived stars. As I later show, this prior is mostly washed out by the anthropic update against the habitability of  planets around longer lived stars. In the appendix, I also consider variants of this prior. 

This approach to modelling does not allow for planets around red dwarf stars that are habitable for periods equal to the habitable period of Earth. For example, life may only be able to appear in a crucial window in a planet’s lifespan.

### Number of habitable planets

Given a value of \\(L_{max}\\), I now consider the number of habitable planets. To derive an estimate of the number of potentially habitable planets, I only consider the number of [terrestrial planets](https://en.wikipedia.org/wiki/Terrestrial_planet): planets composed of silicate rocks and metals with a solid surface. Recall that the parameter w can indirectly control the number of these actually habitable.

Zackrisson et al. (2016) estimate \\(10^{19}\\) terrestrial planets around FGK stars and \\(5 \cdot 10^{20}\\) around M stars in the observable universe. Interpolating, I set the total number of terrestrial planets around stars that last up to \\(L_{max}\\) per OUSV  to be

\\\[T(L_{max}) = 5 \cdot 10^{18} \cdot (L_{max}  \mathrm{in}  Gy)^{0.5}\\\]

Hanson et al. (2021) approximate the cumulative distribution of planet lifetimes \\(L\\) with \\(H_{L_{max}}(L) \propto L^{0.5}\\) for \\(L \leq L_{max}\\) and \\(H(L) = 1\\) for \\(L \geq L_{max}\\). The fraction of planets formed at time \\(b\\) habitable at time t is then given by \\(1-H(t-b)\\). 

These forms of \\(H_{L_{max}}(L)\\) and \\(T(L_{max})\\) satisfy the property that for any\\(L_1 < L_2<L_{max}\\), the expression \\(T(L_{max}) [H_{L_{max}}(L_2)-H_{L_{max}}(L_1)]\\) \- the number of planets per OUSV habitable for between \\(L_1\\) and \\(L_2\\) Gy - is independent of \\(L_{max}\\). In particular, the number of planets habitable for the same duration as Earth is independent of \\(L_{max}\\). 

This is implicitly used later in the update: one does not need to explicitly condition on the observation that we are on a planet with habitable for ~5 Gy since the number of planets habitable for ~5 Gy is independent of the model parameters.

### The formation of habitable stars

I use the term “habitable stars” to mean stars with solar systems capable of supporting life.

I follow Hanson et al. (2021) in approximating the habitable star formation rate with the functional form \\(\hat{\varrho(t)} \propto t^\lambda \cdot \exp(-t/\varphi)\\) with power \\(\lambda =3\\) and decay \\(\varphi = 4  Gy\\) where \\(\int_{0}^{\infty}\hat{\rho}(t) \mathrm{d} t = 1\\).

![](https://lh3.googleusercontent.com/_uXsjb03JWPZowvV2dVeH5-e3-ozraiodgDhAQwLqRDIMxQKdyZ4LMV0GOrJm8WLANYgDs5LGxgn4fXKG1sDqek_cV4NpoXjAybJ-65dLE6HinVqEFGeHe8kJuGpB_37rC5U1noA)

Plots of  \\(\hat{\varrho}(t)\\), (t) for three pairs of \\((\lambda, \varphi)\\) , with peak \\(\lambda \cdot \varphi = 12  Gy\\)

### The habitability of the early universe

There is debate over the time the universe was first habitable.

Loeb (2016) argues for the universe being habitable as early as 10 My. There is discussion around how much gamma-ray bursts (GBRs) in the early universe prevent the emergence of advanced life. Piran (2014) conclude that the universe was inhospitable to intelligent life > 5 Gy ago. Sloan et al. (2017) are more optimistic and conclude that life could continue below the ground or under an ocean. 

I introduce an early universe habitability parameter \\(u\\) and function \\(\gamma_u(t)\\) which gives the fraction of habitable planets capable of hosting advanced life at time \\(t\\) relative to the fraction at \\(t_{now}\\). I take \\(\gamma_u(t)\\) to be a sigmoid function with \\(\gamma_u(t_{now}) \approx 1\\) and\\(\gamma_u(0) = u\\) (hence \\(u \in(0,1)\\)). My prior on \\(u\\) is log-uniform on (\\(10^{-10}\\), 0.99)

![](https://lh6.googleusercontent.com/9viSiCCKDhfa6YZGQLRazDCfaxG4DmhdVpJ9bu67dqCc9NM2dFQfo9--4pW8D7xPOwAHQJluM-ibrlw0mHCLV4ojTpNxkFSXwYNqwGcKbfxF3q3ZtdL8t7eVuIKCt9MOetcWC88N)

The early universe habitability factor, \\(\gamma_u(t)\\). for varying \\(u\\).  

A more sophisticated approach would consider the interaction between and the hard try-try steps, as suggested by Hanson et al. (2021). 

### The number of habitable planets at a given time

The number of planets terrestrial planets per OUSV habitable at time \\(t\\) is 

\\\[T(L_{max}) \cdot \gamma_u(t) \cdot \int_{0}^{t} \hat{\varrho}(b) \cdot [1-H_{L_{max}}(t-b)]  \mathrm{d}b\\\]

Since \\(T_{L_{max}}(t-b) = 0\\) for \\(t-b \geq L_{max}\\), the lower bound of the integral can be changed  to \\(\max(0, t-L_{max})\\). 

Arrival of ICs
--------------

Putting the previous sections together, the appearance rate of ICs per OUSV, \\(\alpha(t)\\), is given by

\\\[\alpha(t) = w \cdot \gamma_u(t) \cdot T(L_{max}) \cdot \int_{\max(0, t-L_{max})}^{t} f_{n,h,d}(t-b) \cdot \hat{\varrho}(b) \cdot[1-H(t-b)] \mathrm{d}b\\\]

To recap:

*   \\(\alpha(t)\\) does *not* factor in the preclusion of some ICs by other ICs -- that is the focus of Chapter 2.
*   \\(w\\) is the product of try-once steps
*   \\(\gamma_u(t)\\) is the fraction of habitable planets capable of supporting advanced life at time \\(t\\)
*   \\(T(L_{max})\\) is the number of terrestrial planets possibly habitable
*   \\(f_{n,h,d}(t)\\) is the probability density of completing all \\(n\\) hard steps of hardness \\(h\\) and delay steps of expected completion time \\(d\\) at time \\(t-b\\) after the process began
*   \\(\hat{\varrho}(b)\\)is the rate of habitable star formation at time \\(b\\)
*   \\(1-H_{L_{max}}(t-b)\\) is the fraction of potentially habitable terrestrial planets that are habitable for at least t-b years.

I now discuss two potential puzzles related to \\(\alpha(t)\\): Did humanity arrive at an unusually early time? And, where are all the aliens?

### The earliness paradox

Depending on one’s choice of anthropic theory, one may update towards hypotheses where human civilization is more typical among the reference class of all ICs.   
 Here, I look at human civilization’s typicality using two pieces of data: human civilization’s arrival at \\(t_{now}\\) and the fact that we have appeared on a planet habitable for ~5 Gy. 

**An atypical arrival time? **

I write \\(\hat{\alpha}(t)\\) for the arrival time distribution \\(\alpha(t)\\) normalised to be a probability density function. This tells us how typical human civilization’s arrival time \\(t_{now}\\) is. That is, \\(\hat{\alpha}(t_{now})\\) is the probability density of a randomly chosen (eventually) existing IC to have arrived at \\(t_{now}\\). 

<table><tbody><tr><td><figure class="image"><img src="https://lh6.googleusercontent.com/Gf9JlZqV2BN95FFjd_3-mCTmJSP-5y9KErZNvuIYMttiHELobNsihjdqhUXxzDBJT0NjhrInBZwOLHhQFZ44MqpSMCF-LTckPC8yUF2oJW4TfmCGuCXPX_Mx-1qU-umlOjWKwIaj"></figure></td><td><figure class="image"><img src="https://lh3.googleusercontent.com/RfuyG00XfBz4TZFGBgUlAmdhY4W2vlWuhTQqJqRFGYRI4lxs3tLV6ZUN-TvAD6_LVnbxH_pPRT3HrjNdSWj8ISLKdCQnR-74jo8GKvHO6p84tzQs9Q6uwA8D9eonF3GU3FxywAIU"></figure></td></tr><tr><td colspan="2"><p>Plots of&nbsp;<span class="math-tex">\(\hat{\alpha}(t)\)</span>&nbsp;for varying&nbsp;<span class="math-tex">\(n\)</span>, all with&nbsp;<span class="math-tex">\(d = 1 \ Gy\)</span>,&nbsp;<span class="math-tex">\(u=0.1\)</span>,&nbsp;<span class="math-tex">\(w=1\)</span>&nbsp;and&nbsp;<span class="math-tex">\(h=10^{10} \ Gy\)</span>.. The left-hand plots have &nbsp;<span class="math-tex">\(L_{max}=10 \ Gy\)</span>&nbsp;and right hand&nbsp;plots have&nbsp;<span class="math-tex">\(L_{max}=100 \ Gy\)</span>.&nbsp;</p><p>When planets are habitable for a longer duration, a greater fraction of life appears later. Further, when&nbsp;<span class="math-tex">\(n\)</span>&nbsp;is greater, fewer ICs appear overall since life is harder, but a greater fraction of ICs appear later in their planets’ habitable windows – this is the <i>power law</i> of the hard &nbsp;steps.</p></td></tr></tbody></table>

![](https://lh5.googleusercontent.com/UL3JNHzzf7Oszyn-jl1KeUgDAZ3HrPujvnzgsE3mmdSNBw9PU9Ka_pxdA-3gLq1N6bZ5DL3-nxp-DY_i01SwgPOWUTwuAloaKmbelT51qnuNs55aIBuvYhaRG4xunH0VXHhDwon5)

Human civilization’s  *rank*, the fraction of ICs that arrive before \\(t_{now}\\) . For many possible combinations of \\(n\\) and \\(L_{max}\\), human civilization appears highly early. This graph has  \\(h=10^{10}  Gy\\), \\(d = 1  Gy\\), \\(u=0.1\\). The rank is independent of \\(w\\)\\(\\).

![](https://lh4.googleusercontent.com/xUk94Hkirw1LIT7kQIQWY8YVUFu7fj1Z0TbhVFgE1PAQGQS7h6M3H6gS8UQbWgcDcS-wE56uIPAgMEVnoSwvUvUM0Is3H-GRFzOlJYFWHAcwqWLdHgyoHrTMGWUU6CfSMi-wo5Im)

 The distribution of human civilization’s rank, by my three priors. By my priors, human civilization is somewhat but not *incredibly* early. 

**An atypical solar system?**

There are many more terrestrial planets around red dwarf stars than stars like our own. If these systems are habitable, then human civilization is additionally atypical (with respect to all ICs) in its appearance around a star like our sun. Further, life has a longer time to evolve around a longer lived star, so human civilization would be even more atypical. Haqq-Misra et al. (2018) discuss this, but do not consider that the presence of hard try-try steps leads to a greater fraction of ICs appearing on longer-lived planets.

**Resolving the paradox**

Suppose a priori one believes  \\(L_{max} > 10  Gy\\)  and  \\(n \geq 2\\) and uses an anthropic theory that updates towards hypotheses where human civilization is more typical among all ICs.  Given these assumptions, one expects the vast majority of ICs to appear much further into the future and on planets around red dwarf stars. However, human civilization arrived relatively shortly after the universe first became habitable, on a planet that is habitable for only a relatively short duration and is thus very atypical (according to our arrival time function that *does not* factor in the preclusion of ICs by other ICs.  

There are multiple approaches to resolving this apparent paradox.

First, one can reject their prior belief in high \\(n\\) and \\(L_{max}\\), and update towards small \\(n\\) and \\(L_{max}\\) which lead us to believing we are in a more typical IC. 

Second, one could change the *reference class* among which human civilization’s typicality is being considered. This, in effect, is changing the question being asked.[^54475r04cr3]

*   In a reference class of ICs that arrive around sun-like stars, human civilization is not particularly atypical in arrival time.
*   In a reference class of ICs exactly like human civilization (of which there is just us) human civilization is (trivially) completely typical.

Third and finally, one can prefer theories that set a deadline on the appearance of ICs like us. If the universe suddenly ended in 5 Gy time, no more ICs could appear and regardless of n and \\(L_{max}\\) human civilization’s arrival time would be typical.

Hanson et al. (2021) resolve the paradox with such a deadline, the expansion of so-called grabby civilizations, which is the focus of Chapter 2. Alternative deadlines have been suggested, such as through [false vacuum decay](https://en.wikipedia.org/wiki/False_vacuum_decay), which I briefly discuss in the appendix.

### The Fermi paradox

Some anthropic theories update towards hypotheses where there are a greater number of civilizations that make the same observations we do (containing observers like us).

**The rate of XICs**

I write \\(N_{XIC}\\) for the rate of ICs per OUSV with feature X, where X denotes “ICs arriving at tnow on a planet that has been habitable for as long as Earth has, and will be habitable for the same duration as Earth will be".

The Earth has been habitable for between 4.5 Gy and 3.9 Gy (Pearce et al. 2018). I suppose that Earth has been habitable for 4.5 Gy, since if habitable for just 3.9 Gy, the 600 My difference can be (lazily) modelled as a fuse or delay step. Assuming for the time being that no IC precludes any other, this gives

\\\[N_{XIC} \propto w \cdot \gamma_u(t) \cdot f_{n,h,d} (4.5  Gy)\\\]

Note that

*   The constant of proportionality is given by the number of Earth-like planets per OUSV and other parameter independent facts.
*   This expression is independent of \\(L_{max}\\): it is certain the Earth is habitable, so changing the maximum habitable duration does not change the number of Earth-like planets
*   \\(N_{XIC}\\) is a *rate per OUSV* rather than number.

Below, I vary \\(n\\) and \\(h\\) to see the effect on \\(N_{XIC}\\). The effect of \\(w\\) on \\(N_{XIC}\\) is linear, so uninteresting. 

![](https://lh5.googleusercontent.com/Eapbx29ldu3ViEmNKE_UDZ9GR3dP_IFgGY58h611NeIZXztfkiKE9Umw5Gf4KctfYPDbpIk-zOpKH2v602GhzsGvDlgc7IYZPma6j5WMdyH0s265RPqtZzVUvUK29TAPlKrRSebe)

A heatmap of NXIC with varying \\(n\\) and \\(h\\). This has \\(d = 1  Gy\\), \\(w = 1\\),\\(u=0.1\\). The heatmap shows that \\(N_{XIC}\\) is maximised when there are ~4  very easy steps, (though strictly this scenario would be modelled with no hard steps and only delay steps).  
 I’ve scaled  NXIC by a rough guess of the number of Earth-like planets per OUSV (those formed ~4.5Gy ago and that are only habitable for ~5Gy). This constant is unnecessary for the update.

 The term \\(N_{XIC}\\) does not include the further feature of not observing any alien life. In the next chapter, I introduce \\(\# N_{XIC}\\) the number of ICs with feature X that also do not observe any alien life. 

**Where are all the aliens?**

I write \\(N_{IC}\\) for the rate of ICs that appear per OUSV, supposing no IC precludes any other, which is given by \\(N_{IC} = \int_{0}^{\infty} \alpha(t) \mathrm{d} t\\).

My priors on \\(n\\), \\(h\\), \\(d\\), \\(w\\), \\(L_{max}\\) and \\(u\\) give the rate of ICs that appear per OUSV, supposing no IC precludes any other. 

![](https://lh4.googleusercontent.com/GgYjtqj29-DHO9TTutOtT1ZLGBpKaRJFtEGfbnKTA1KUUtB4KsDNhECvDYpNZI1D51q0aUgSWbtcO3b56XBOLknKyCJFJznQPdh5QIlGXgRUJvpSAtw-vaut6o_2N5U_SeiVL-6l)

The implied CDF on \\(N_{IC}\\), the rate of ICs appearing per OUSV supposing no IC precludes any other. Note that \\(P(N_{IC}<1)\\) is *not* the probability that there is less than one IC per OUSV. This latter probability is approximately \\(\int_{0}^\infty P(N_{IC}) \cdot e^{-N_{IC}} \mathrm{d} N_{IC}\\) 

I chose the balanced prior on \\(n\\) and prior on hard step hardness \\(h_i\\) to give an implied distribution on \\(N_{IC}\\) comparable to the prior derived by Sandberg et al. (2018), which models the scientific uncertainties on the parameters of the Drake Equation. Sandberg et al.’s prior on the number of *currently contactable* ICs has a median of 0.3 and 38% credence in fewer than one IC *currently* existing in the observable universe. My balanced prior gives ~50% on the rate of less than one IC per OUSV and median of ~1 IC to appear per OUSV, and so is *more* conservative. 

The Fermi observation is the fact that we have not observed any alien life. For those with a high prior on the existence of alien life, such as my bullish prior, the [Fermi paradox](https://en.wikipedia.org/wiki/Fermi_paradox) is the conflict between this high prior and the Fermi observation. 

2 Grabby Civilizations
======================

It may be hard for humanity to observe a typical IC, especially if they do not last long or emit enough electromagnetic radiation to be identified at large distances. If some fraction of ICs persist for a long time, expand at relativistic speeds, and make visible changes to their volumes, one can more easily update on the Fermi observation. Such ICs are called *grabby civilizations* (GCs). 

The existence of sufficiently many GCs can ‘solve’ the earliness paradox by setting a deadline by which ICs must arrive, thus making ICs like us more typical in human civilization’s arrival time. 

In this chapter, I derive an expression for \\(\#N_{XIC}\\), the rate of ICs per OUSV that have arrived at the same time as human civilization on a planet habitable for the same duration and  do not observe any GCs.

Observation of GCs
------------------

Humanity has not observed any intelligent life. In particular, we have not observed any GCs. 

Whether GCs are not in our past light cone or we have not yet seen them yet is uncertain. GCs may deliberately hide  or be hard to observe with humanity’s current technology.

It seems clearer that humanity is not inside a GC volume, and at minimum we can  condition on this observation.[^3116hhzczb]   

In Chapter 3 I compute two distinct updates: one conditioning on the observation that there are no GCs in our past light cone, and one conditioning on the *weaker* observation that we are not inside a GC volume. If GCs prevent any ICs from existing in their volume, this latter observation is equivalent to the statement that “we exist in an IC”.

The second observation leaves ‘less room’ for GCs, since we are conditioning on a larger volume not containing any GCs.

I lean towards there being no GCs in our past light cone. By considering the waste heat that would be produced by Type III Kardashev civilizations (a civilization using all the starlight of its home galaxy), the G-survey found no type III Kardashev civilizations using more than 85% of the starlight in 105 galaxies surveyed (Griffith et al. 2015). There is further discussion on the ability to observe distant expansive civilizations in this [LessWrong thread](https://www.lesswrong.com/posts/jhcwBXuNCWEsJdfKe/weird-question-could-we-see-distant-aliens).

The transition from IC to GC
----------------------------

I write \\(f_{GC}\\) for the average fraction of ICs that become GCs.[^ctrnvnfzes6] I assume that this happens in an astronomically short duration and as such can approximate the distribution of arrival time of GCs as equal to the distribution of arrival times of ICs. That is, \\(\\)the arrival time distribution of GCs is given by \\(f_{GC} \cdot \alpha(t)\\). 

It seems plausible a significant fraction of ICs will choose to become GCs. Since matter and energy are likely to be instrumentally useful to most ICs, expanding to control as much volume as they can (thus becoming a GC) is likely to be desirable to many ICs with diverse aims. Omohundro (2008) discusses instrumental goals of AI systems, which I expect will be similar to the goals of GCs (run by AI systems or otherwise).

Some ICs may go extinct before being able to become a GC. The extinction of an IC does not entail that no GC emerges. For example, an unaligned artificial intelligence may destroy its origin IC but become a GC itself. (Russell 2021). ICs that trigger a [(false) vacuum decay](https://en.wikipedia.org/wiki/False_vacuum_decay) that expands at relativistic speeds can also be modelled as GCs. 

![](https://lh6.googleusercontent.com/lb9NN7gc2Ad0ldDRGaVnHmi_16ueH1UcJf4OClIhpX9iAiltzoTTBRux_ClwJQU0vu6fhVUi7td9VKfWWqHUDkaV2BG7WYak41DkMt3GgAbUXo-0YNh0jwC294Sfoe0NMKYnprEK)

My prior on \\(f_{GC}\\) is distributed \\(\sim 10^{-\mathrm{Exp}(0.4)}\\) truncated to \\(f_{GC} \geq 0.01\\)

I do not update on the fact we have not observed any ICs. The smaller \\(f_{GC}\\), the greater the importance of the evidence that we have not seen any ICs.

The expansion of GCs
--------------------

I model GCs as all expanding spherically at some constant [comoving](https://en.wikipedia.org/wiki/Comoving_and_proper_distances) speed \\(v\\). 

![](https://lh3.googleusercontent.com/k4LqWN0u6sdTJQRzGrlHBfeSuBp9gHELgBGvIKzLbdQ4RCJkI70Ey6-fGwP1WrJyLaBQ2wk-qeisSKUJj8MhvOFLLUOntEhC1zwYk_I5HPgLOjJaelVpxv-H4QzJ-Ig-ftlirSNS)

My prior on \\(v\\) is distributed \\(\sim 10^{-\mathrm{Exp}(0.43)}\\) truncated to \\(v \geq 0.01c\\). This distribution prior has a median 0.5c and is informed by Armstrong & Sandberg (2013) considerations of designs for self-replicating probes that travel at speeds \\(v= 0.5c, 0.8c\\) and \\(0.9c\\).

### The volume of an expanding GC

To calculate the volume of an expanding GC, one must factor in the expansion of the universe. 

Solving the Friedmann equation gives the [cosmic scale factor](https://en.wikipedia.org/wiki/Scale_factor_(cosmology)) \\(a(t)\\), a function that describes the expansion of the universe over time.\\(\\)\\(\\)

\\\[a'(t)^2 = H_0\cdot (\Omega_m \cdot a(t)^{-1} + \Omega_r \cdot a(t)^{-2} + \Omega_\Lambda a(t)^2)\\\]

With initial condition \\(a(t_{now}) = 1\\) and \\(H_0\\), \\(\Omega_m\\), \\(\Omega_r\\) and \\(\Omega_\Lambda\\) given by Ade et al. (2016). The Friedmann equation assumes the universe is homogeneous and isotropic, as discussed in Chapter 1.  

![](https://lh6.googleusercontent.com/LjaZh4KM5iPSeaRPDUuXUlmc9XEK8nA6tM1d3Q_rt6KX_8uhFqgvxl6tloQCj__dQk2AfQN5c8VdVCGtj4ywPiztL2_9I36I-YnQGzgA2PVXT2hDOPK-THV4r-4eypGUM_OrLguK)

The scale factor \\(a(t)\\). The period after ~9.8Gy is known as the dark-energy-dominated era: there is accelerating expansion.

Throughout, I use [*comoving distances*](https://en.wikipedia.org/wiki/Comoving_and_proper_distances) which give a distance that does not change over time due to the expansion of space. The comoving distance a probe travelling at speed \\(v\\) that left at time \\(b\\) reaches by time \\(t\\) is \\(\int_b^t\frac{v}{a(t')} \mathrm{d} t'\\) .The *comoving volume* of a GC at time \\(t\\) that has been growing at speed \\(v\\) since time \\(b\\) is

\\\[V(b,t,v) = \frac{4\pi}{3} \cdot (\int_b^t \frac{v}{a(t')} \mathrm{d}t')^3\\\]

I take \\(V(b,t,v)\\) in units of *fraction of the volume of an OUSV*, approximately \\(4.2 \cdot 10^{14} Mly^3\\).

![](https://lh5.googleusercontent.com/yF4btaCDHF2IFSQevEaD7QMF0OWqRXBQK_4yxtQrBqiNV1v2YTOuihmVYY9LB2Iws1OrU_H3n8VYB_FZrzu7TIXLwGD1kYKjhATLoxkspLI8raj7pWf1Pb_A-Ay84ibwpnUw4PlB)

The volume reached by a GC expanding from \\(t_{now}\\) for different speeds. Regardless of speed, expansion stops by around 150 Gy: this is the beginning of the *era of isolation*, where travel will be possible only within gravitationally bound structures (such as the Milky Way). 

![](https://lh5.googleusercontent.com/ZahHmjl7xfKjp3-cF6fJAX9sYqFWMghEmYLGJS6X1upHFkhDDuScSxwD1T4mVTd916B1MqudQD0egTZldWTnPHcrkDKt2eU7bLhYuMhxPuKbFpVZHWRnP23plcKVBOVWZDNv1-hr)

The fraction of the observable universe a GC can expand to as a function of its expansion start date and speed, supposing it is not blocked by any other GC.  
 Supposing humanity expands at 0.5c, delaying colonisation by 100 years results in about 0.0000019% loss of volume. Due to the clumping of stars in galaxies and galaxies in clusters, it’s possible this results in no loss of useful volume.

### The fraction of the universe saturated by GCs

Following Olson (2015) I write \\(g(t)\\) for the average fraction of OUSVs unsaturated by GCs at time \\(t\\) and take functional form

\\\[g(t) = \exp(-\int_0^t f_{GC} \cdot \alpha(b) \cdot V(b,t) \mathrm{d} b)\\\]

Recall that the product \\(f_{GC} \cdot \alpha(b)\\) is the rate of GCs appearing per OUSV at time \\(b\\). Since \\(\alpha(\cdot)\\) is a function of the parameters \\(n\\),\\(h\\),\\(d\\), \\(w\\), \\(L_{max}\\) and \\(u\\), the function\\(g(t)\\) is too.

This functional form for \\(g(t)\\) assumes that when GCs bump into other GCs, they do not speed up their expansion in other directions. 

![](https://lh6.googleusercontent.com/EA4FVrt466oKpckSwLphpT84mnXym8hshQrm11zFBbl4mj2RqQ7tIl_7vrM53bZzYs36ldS4VeiogmefW3kk-yhhASghEz2HS6XzTg2A0YzYlM3lN878qUF2fnsQD3bEwUKAwlzs)

Above: \\(g(t)\\) for \\(n=6\\), \\(d=1  Gy\\), \\(L_{max}= 10 Gy\\), \\(w=1\\),  \\(u=10^{-10}\\), \\(f_{GC}=1\\) , \\(v=0.8c\\) and varying \\(h\\) . Relatively small changes in the geometric mean hardness of the hard steps leads to large changes in the fraction of each OUSV eventually saturated by GCs.

![](https://lh5.googleusercontent.com/KFjBRyFu4DRA86LqC0WpD1Dnm_sn8JxhvTO7EKBSpfESGlAo3FRPSxcqtlRLZ01LtbENfD2CCJx-a7u7mkLI_qquggfDtivQnLNWKRvxFXQaTMOhe9lbrOXG8OIMrFgkU1XHqdZ8)

A heatmap of \\(g(t)\\) for varying \\(h\\), \\(n\\)and fixed\\(d=1  Gy\\), \\(w=0.1\\), \\(L_{max}=10 Gy\\), \\(u=0.1\\)\\(f_{GC} = 1\\) and \\(v=c\\). Only for a small fraction of pairs \\((n,h)\\) is the eventual fraction of OUSVs saturated by GCs is neither very close to 0 nor exactly 1.

  
**The actual volume of a GC**

I write \\(\#V(b,t,v)\\) for the expected actual volume of a GC at time \\(t\\) that began expanding at time \\(b\\) at speed \\(v\\). Trivially,  \\(\#V(b,t,v) \leq V(b,t,v)\\) since GCs that prevent expansion can only decrease the actual volume. If GCs are sufficiently rare, then \\(\#V(b,t,v) \approx V(b,t,v)\\). I derive an approximation for \\(\#V\\) in the appendix. 

Later, I use the actual volume of a GC as a proxy for the total resources it contains. On a sufficiently large scale, mass (consisting of intergalactic gas, stars, and interstellar clouds) is homogeneously distributed within the universe. This proxy most likely underweights the resources of later arriving GCs due to the gravitational binding of galaxies and galaxy-clusters.

![](https://lh6.googleusercontent.com/lRcCigJv2TA1oP7vxJ3p-prmYN5plN2gZ8lcjZ0RJ2DXbe87yi42zy6q3V3E7wcDTXuVtV2S2lDlAo0QWTWnhw5RMOFiLaRwfXOnPXz6FWG4ldugKDAFEsUp0Rw0G6sG3QhIAfzr)

A comparison of \\(V\\) to \\(\#V\\) for a GC beginning expansion at \\(t_{now}\\) at speed v=c with \\(n=5\\),\\(h=5000  Gy\\), \\(d=1 Gy\\), \\(w=1\\) ,\\(L_{max}= 10  Gy\\),\\(u=10^{-10}\\) and \\(f_{GC}=1\\). In this case, a GC emerging from Earth eventually contains 24% of our future light cone.

![](https://lh5.googleusercontent.com/AjWg52z_wthIUOr_44aDwfLjv-gNaLyOgkl0YzI5smeUY7kNooBGoBvrQq3J_j7h83TeUTjqi6SYmf2gqdyZMlGq4rsZj2wBbTP3T5wkTDi3Dc0SzxqeFashoIh4xHei46dPPNsE)

The distribution of expected actual GC volumes using the same parameters to directly above. In this case, there are 380 GCs per OUSV, of which around 6% are larger than an Earth originating GC.

A new arrival time distribution
-------------------------------

The distribution of IC arrival times,\\(\alpha(t)\\), can be adjusted to account for the expansion of GCs, which preclude ICs from arriving. I define \\(\beta(t) := \alpha(t) \cdot g(t)\\) that gives the rate of ICs  appearing per OUSV, and write \\(\#N_{IC} := \int_0^\infty \alpha(t) \cdot g(t) \mathrm{d} t\\) for the number of ICs that *actually* appear per OUSV. 

![](https://lh6.googleusercontent.com/o-LEWFBNN2kSAZxxYF-RhYWygZvpw_rT4xffKeZ6fqasZOc5FOQ-K2Y1hsyqTsbYqrHIW5UVkdeJQVKGtZJkdaIQjEKH8gFrUyL3YGoj38a7KfWKaTWDLjwYvEiEeFmqSm2W5Inz)

Plots of \\(\alpha(t)\\), \\(g(t)\\) and \\(\beta(t)\\) for \\(n=3\\), \\(h=10^{5.5} Gy\\), \\(d=1  Gy\\) , \\(w=1\\), \\(L_{max} = 10  Gy\\), \\(u=0.1\\),  \\(f_{GC}=1\\) and \\(v=0.8c\\)

![](https://lh5.googleusercontent.com/rowmtN6ZkyeUhMdgYulsPokE8ZVy3YIu-iOws0X7YxGdz4SFS6U_A1cHrXhPR0a-XN4p3487nxh_vCRvvxzIc-9e_pSwSmVq4Auk40eaiyuxyqvw0jU2jG8XiOF4NG3Rj4g--zOh)

Above: Plots of \\(\beta(t)\\) with \\(n=3\\), \\(\\)\\(d= 1  Gy\\), \\(w=0.1\\) , \\(L_{max} = 10  Gy\\), \\(u=0.1\\), \\(f_{GC}=1\\), \\(v=0.8c\\) and   varying h. 

![](https://lh6.googleusercontent.com/5cEc7GAkScnWbz2W62ia7kT8-snDGhhHNvEkA-kKqHJwgMDbGMw_idXA0hwBJ-EzkuppF9DkLY2sGlQLooaomGN0vbeH3yEtIA5vV9b5m-j2Q_VlvFou5WPQhsF8xcNhEMPCP1_a)

Plots of \\(\hat{\beta}(t) = \beta(t) /\int_0^\infty \beta(t) \mathrm{d}t\\) with the same parameters as above (these are just the graphs to the above but each rescaled).

![](https://lh4.googleusercontent.com/tF-8PvoGJdvHuX1fADGarsi3D1FDfOVLSUpVWBeg9prcRgn6xb1eFas11We1VFKLHS0dXIZXkuKRoB2DTISoXXHjPIVLzhojaRwR-FFC51mMCUI4SjgLtXhiQPpkT-iyoVOHI8Gq)

A heatmap \\(\#N_{IC}\\) varying \\(n\\) and \\(h\\) with fixed \\(d=1  Gy\\), \\(w=0.1\\),  \\(L_{max}=10 Gy\\),  \\(u=10^{-5}\\),, \\(f_{GC}=1\\) and \\(v=c\\) . We see that the number of ICs that actually appear per OUSV is bounded above by around \\(10^6\\), even when life is sufficiently easy (as given by \\(n\\) and \\(h\\)) that many more ICs would appear if there was no preclusion. This loose upper bound is primarily determined by \\(v\\), the speed of expansion: when expansion speeds are lower, more ICs can appear 

The actual number of XICs
-------------------------

I define \\(\# N_{XIC}\\) to be the actual number of ICs with feature X to appear, accounting for the expansion of GCs. I consider two variants of this term. 

I write \\(\# N_{XIC, v=c}\\) for the rate of ICs with feature X per OUSV that *do not observe GCs*. Since information about GCs travels at the speed of light, \\(g_{v=c}(t)\\) gives the fraction of OUSVs that is *unsaturated* by light from GCs at time \\(t\\). Then, \\(\# N_{XIC, v=c} = N_{XIC} \cdot g_{v=c}(t_now)\\)gives the number of XICs per OUSV with no GCs in their past light cone.  

Similarly, I write \\(\# N_{XIC, v=v}\\) [^y6gntc2kae]for the rate of ICs with feature X per OUSV that are not inside a GC volume, where v is the expansion speed of GCs. In this case, \\(\# N_{XIC, v=v} = N_{XIC} \cdot g_{v=v}(t_{now})\\). 

<table><tbody><tr><td><figure class="image"><img src="https://lh3.googleusercontent.com/RXXgaBBGbHkZi4pLsckEPagc081VKAlep-nMBD01-Ts4nfIDYNYnry2vum1sxmzrXYcZrmlqRGKqNchgf7tlIzm3uaox98OaJhnvLn0jYTDqxQW-5AdlGQZBrp47WMyCFLBXl9Wz"></figure></td><td><figure class="image"><img src="https://lh5.googleusercontent.com/yHZo2OPzgFru2DZEH03IJD5ELWCAZVXwsiWCyVm3KfQVu6Lh6puC-vL7-hMa_4RPXF31KA8tFlGmp3b2dNmb11ZWDT2qM8oPjvRVFVqex99NylyW3BuXa5mTKyP0CRLliLCJ6qkF"></figure></td></tr><tr><td colspan="2"><p>Left and right: heatmaps of&nbsp;<span class="math-tex">\(\# N_{XIC, v=c}\)</span>&nbsp;for varying hard steps&nbsp;<span class="math-tex">\(n\)</span>&nbsp;and geometric mean hardness&nbsp;<span class="math-tex">\(h\)</span>. Both heatmaps show the same data, but the colour scale goes with the logarithm on the plot on the left, and linearly on the right. Both take&nbsp;<span class="math-tex">\(d= 1 \ Gy\)</span>,<span class="math-tex">\(w=0.1\)</span>, &nbsp;<span class="math-tex">\(L_{max} = 10 \ Gy\)</span>, &nbsp;<span class="math-tex">\(u=0.1\)</span>&nbsp;,&nbsp;<span class="math-tex">\(f_{GC} =1\)</span>&nbsp;and&nbsp;<span class="math-tex">\(v=c\)</span>.</p><p>The black area in the left heatmap contains pairs of&nbsp;<span class="math-tex">\((n,h)\)</span>&nbsp;such that no XICs actually appear, due to the all OUSVs being saturated by light from GCs by&nbsp;<span class="math-tex">\(t_{now}\)</span>. &nbsp;</p><p>The green area on the right heatmap &nbsp;is the 'sweet spot' where the most number of XICs appear. This happens to be &nbsp;just above the border between the black and green area in on the left heatmap. In this ‘sweet-spot’, there are many ICs (including XICs) but not too many such that XICs are (all) precluded.</p><p>My bearish, balanced and bullish priors have 16%, 26% and 44% probability mass in cases where the universe is fully saturated with light from GCs by&nbsp;<span class="math-tex">\(t_{now}\)</span>&nbsp;(and so&nbsp;<span class="math-tex">\(\# N_{XIC, v=c} = 0\)</span>) respectively.&nbsp;</p></td></tr></tbody></table>

The balancing act
-----------------

The Fermi observation limits the number of early arriving GCs: when there are too many GCs the existence of observers like us is rare or impossible.

For anthropic theories that prefer more observers like us, there is a push in the other direction. If life is easier, there will be more XICs.  

For anthropic theories that prefer observers like us to be more typical, there is potentially a push towards the existence of GCs that set a cosmic deadline and lead to human civilization not being unusually early.

In the next chapter, I derive likelihood ratios for different anthropic theories and produce results.

3 Likelihoods & Updates
=======================

I’ve presented all the machinery necessary for the updates, other than the anthropic reasoning. I hope this chapter is readable without knowledge of the previous two.

 I now apply three approaches to dealing with anthropics:

*   The self-indication assumption (SIA),
*   The -sampling assumption (SSA)
*   Non-causal decision theoretic approaches (such as anthropic decision theory, or minimal reference class SSA with a non-causal decision theory)

I have three joint priors over the following eight parameters.

*   Four ‘life’ parameters
    *   The number of hard try-try steps \\(n\\)
    *   The geometric mean completion time of the hard steps \\(h\\)
    *   The sum of the duration of delay and fuse steps \\(d\\)
    *   The probability of passing through all try-once steps \\(w\\)
*   Two parameters related to habitability
    *   The maximum habitable duration of any planet \\(L_{max}\\)
    *   A parameter that controls the habitability of the early universe \\(u\\)
*   Two parameters related to GCs
    *   The fraction of ICs that become GCs \\(f_{GC}\\)
    *   The average speed of expansion of GCs \\(v\\)

I update on either the observation I label \\(X_c\\) or observation I label \\(X_v\\). Both \\(X_c\\) and \\(X_v\\) include observing that we are in an IC that 

*   Appeared at \\(t_{now} = 13.787   Gy\\) after the Big Bang
*   Is on a planet that was formed (and has been potentially habitable) for around 4.5 Gy
*   Is on a planet that will remain habitable for around another 1 Gy

\\(X_c\\) additionally contains the observation that we do not see any GCs. Alternatively, \\(X_v\\) additionally contains the observation that we are not inside a GC (equivalently, that we exist, if we expect GCs to prevent ICs like us from appearing).  

I walk through each anthropic theory in turn, derive a likelihood ratio, and produce results. In Chapter 4 I discuss potential implications of these results. 

By Bayes rule

\\\[P(n,h,d,w,L_{max}, u, f_{GC}, v | X) \propto P(X|n,\dots, v) \cdot P(n, \dots ,v)\\\]

I have already given my priors \\(P(n,...,v)\\) and so it remains to calculate the likelihood P(X|n, ..., v). I derive likelihoods in the discrete case, and index my priors by worlds \\(W_i=(n_i,..., v_i)\\).

SIA
---

I use the following definition of the self-indication assumption (SIA), slightly modified from Bostrom (2002) 

*All other things equal, one should reason as if they are randomly selected from the set of all *[^p9lo29axtm]*possible observer moments (OMs) \[a brief time-segment of an observer\].*[^uqpv44wcira]

Applying the definition of SIA, 

\\\[P_{SIA}(X|W_i) = \frac{|XOMs|_i}{\sum_{j} |OMs|_j} \propto |XOMs|_i\\\]

That is, SIA updates towards worlds where there are more OMs like us. Since the denominator is independent of \\(i\\), we only need to calculate the numerator,  \\(|XOMs|_i\\). 

By my choice of definitions, \\(|XOMs|_i\\) is proportional to \\(\# N_{XIC}\\), the number of ICs with feature X that actually appear per OUSV. The constant of proportionality is given by the number of OMs per IC, which I suppose is independent of model parameters, as well as the number of OUSVs in the earlier specified large finite volume. Again,  these constants is unnecessary due to the normalisation. 

The three summary statistics implied by the posterior are below. As mentioned before, the updates are reproducible [here](https://colab.research.google.com/drive/1MVyf_Ljkc8OLWTBcHPtke2Qcveg1TSjB). 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation Xc</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation Xv</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/WUuQt7FvMtLNn8QykrwfsjJ7QJMTp0yrkwel_FACyb6XsLbJqPP1KZv1ovymcIjahA-zNslxh_QIXqsF45cVjGjjmFVZ00VXVGQIY30l1Ag39T2vncZHTHfz9RQucE37R2_ChCaW"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/SDJu0mbgQMHbqaV33muJwAJkEhCCD9lSDh3zHOpmtXjLjP4mKp5LBXyq8BzSZSeML73WLGRuugQNEknC0Bwm_2_RiNucvVbNRRx7pRPr2BE3KhYFJIYec1wsCaG0xdNd8ZdXf7fJ"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/yD8Xfr07q90k2C9VPp4Cu4_VEhNGVMK-pgX07lKTDBnBqD5NcdQYjyXBygqPjsrpBaSCs92-ZQCe2lSHZ3tSYduv-M21iYwKSDzJonZ8DPsipZGDFdCwde1lKkO1SJ7JdSvCzTcF"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/7za1Xj5RY4ZjIQr-JwGbi6qrCfHRUWgfvcQe0mRIXmzz_89bdRaD5xT3HHLbwF2cpRvJdsLGeGePAm-2ur8dW7Xv-BxS1DWh3JWrWyq1K5LDCed3mN3JQyP2mPFce9Jt1Z2jSffI"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/2DwccjSJP3Tp3r4M0rrFGr2V3kSWrliKXR59-AbR6qDxz776CdJQ6dNl6mxLNtg1GaWBU-TIb20t7bldA0gbbmTRFl-QLA6u3idMsb018imYOQhXfBgiCXhEFsN-fO1Sk-sElyrT"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/813JOI9dgPOfXHoU3booC-GwYT8XF19kgAwWKyzRGGfrd1X7joVrEY3A6-tr6H-iChPWU4OQFbHU0MUEySktAFFAnFnmXNXdBsbRq1kI5Q7m3F7dZnPg3iGcNIWj_hdyJHWPN-LY"></figure></td></tr></tbody></table>

SIA updates overwhelmingly towards the existence of GCs in our light cone from all three of my priors. If a GC does not emerge from Earth, most of the volume will be expanded into by other GCs.

I discuss some marginal posteriors here, and reproduce all the marginal posteriors in the appendix.

SIA updates towards smaller \\(f_{GC}\\) as the existence of more GCs can only decrease the number of observers like us. This is the “SIA Doomsday” described by Grace (2010). This result is the same as found by Olson & Ord (2021) whereby the prior on \\(f_{GC}\\) goes from prior to posterior \\(P(f_{GC}) \mapsto P(f_{GC})/f_{GC}\\) . 

The SIA update is overwhelmingly towards smaller \\(L_{max}\\). Increasing \\(L_{max}\\) only increases the number of GCs that could preclude XICs.

![](https://lh6.googleusercontent.com/oHF866WPRP-rokqIN4eyFidy7-pLM1QUOhpkCmOOiOxQVD9DAe5qqY9SxgLJ_1VfIItHZomxKiYSREtN41Oj2PeY-USP28_YPs-z6olKvdvCSTA3ClaxSRJ9mYekTADknhXTFoRl)

SIA posteriors on \\(f_{GC}\\)

![](https://lh5.googleusercontent.com/OuyPB8IN4Bx0mUPXZXfypcuosVPFXU2kNEK2J_bUm0nvAbx4UmQ5FCKVMhL-2yTzvq0P9du8945KJR-o8JpvgbEInpUojsOwf7_j02Zf_ENqCP_7wrvuIgpuSleqSp4fDi9p2_29)

SIA posteriors on \\(L_{max}\\)

SSA
---

I use the following definition of the self-sampling assumption (SSA), again slightly modified from Bostrom (2002)

*All other things equal, one should reason as if they are randomly selected from the set of all actually existent observer moments (OMs) in their reference class.*[^5avasm9ywis]

A reference class \\(R\\) is a choice of some subset of all OMs. Applying the definition of SSA with reference class \\(R\\),

\\\[P_{SSA, R}(X|W_i) = \frac{|RXOMS|_i}{|ROMs|_i}\\\]

That is, SSA updates towards worlds where observer moments like our own are more common in the reference class.  

I first consider two reference classes, \\(R_{ICs}\\) and \\(R_{all}\\). The reference class \\(R_{ICs}\\) contains only OMs contained in ICs, and no OMs in GCs. This is the reference class implicitly used by Hanson et al. (2021). The reference class \\(R_{all}\\) also includes observers in GCs. I later consider the *minimal reference class*, containing only observers who have identical experiences, paired with non-causal decision theories.

### Small reference class RICs

This is the reference class implicitly used by Hanson et al. (2021). I reach different conclusions from Hanson et al. (2021), and discuss a possible error in their paper in the appendix.  

The total number of OMs in \\(R_{ICs}\\) is proportional to the number of ICs, \\(\# N_{IC}\\). As in the SIA case, the number of XOMs is proportional to \\(\# N_{XIC}\\), so the likelihood ratio is \\(\# N_{XIC}/\#N_{IC}\\). 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation Xc</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation Xv</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/cXnoKjxQxfHGyf1jmdmM6ciRKyN18kL7BnenPqvW4ft2Y9XHetwYZkm70JQQUeJRwjBtjoyfC9-5B2LNsU76QSgNIEPfGuvfnhhAyT_fJ9K5cA0nsnlk9sp-nAOrQmN-DB15A2Ap"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/h7SbJmCy8MM2mmb52rDhY3DiTebf2I9_4tqbnh3alsN9F7dcBD1AoO-KM_PixmD1dp0j2Qdc-yG7bpysluxU_eBuwV2_FhYjUWa29DrxmJKkb8uEke3g2qXvajEf63qJicVw3fKB"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/UsDnKsIxV8WT6yE_ukOUhzDet1If4Cq1xR8AMX2wG1MBfjSvKZX1tKl1tiGQ2wFJIKuGgFm_NtEJoQOpJff8OYeYQXbssHlL1yvVQgmFSjbk6pXvpR7VOG3URpEr6mfmPn6ZOUVI"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/HCcDrD6Igi-XtPsvYWkKalCL2FSXGuWwKr1I0r_SUKvJDD9yuYXGvKpKg0nTnQcX_koS3VDoNMupvvEkDU-_-vAuxJTpGAd26hotCyIdymWMD32N-jubsg0nB4EbS-7B-ofj1xdd"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/hKEjeemHU00JJDNzy6hypTdON_0X0VLJkvhy0o_sL974wdBy7uVwyk6X9_9YlvB_CNP6YYz22gG3FpDC515m7iNW9j172zHdC_j690cmLKJXjH5P9AI39gjRjozfhsDxYro5HskW"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/6togi4imkKHxd0ZKDdj6FoZ_MFoT0Qy2kHedS5XPNZn3SYj7zbtBvGtooHGr1ClV3NAYiUUQPIN1w6lk7ScjmQouc6hoK8o-mxmmaqHlBkizDV6SKM5jTXPyZ0LeXMZKS73RhPu8"></figure></td></tr></tbody></table>

SSA has updated *away* from the existence of GCs in our future light cone.

In the appendix, I discuss how this update is highly dependent on the lower bound on the prior for \\(L_{max}\\) . Again, smaller \\(L_{max}\\) is unsurprisingly preferred.

![](https://lh4.googleusercontent.com/O8tgsqMSjq5FV234u66A4ce1mgLzi5OSWD409XZIguHJFyaRcNOMo6pOA-hdrnbvHgvH4KjIziIx2O6QjERHUTliVm6aqhsO-2Z6WS-NEobb0b4K7aMMgJo5AlTYAzEaJINuPCxF)

SSA \\(R_{ICs}\\) posterior on \\(L_{max}\\)

### Large reference class \\(R_{all}\\)

This reference class contains all OMs that actually exist in our large finite volume, and so includes OMs that GCs create. It is sometimes called the “maximal” reference class[^iryy914bq6m].  

I model GCs as using some fraction of their total volume to create OMs. I suppose that this fraction and the efficiency of OM creation are independent of the model parameters. These constants do not need to be calculated, since they cancel when normalising.  

The total volume controlled by all GCs is proportional to \\(1-g(t_L)\\), the average fraction of OUSVs *saturated* by GCs at some time \\(t_L\\) when all expansion has finished[^8ytf0d56lvx].

I assume that a single GC creates many more OMs than are contained in a single ICs. Since my prior on \\(f_{GC}\\) has \\(f_{GC} \geq 0.01\\) and I expect GCs to produce many OMs, I see this as a safe assumption. This assumption implies the total number of OMs as proportional to \\(1-g(t_L)\\). The SSA \\(R_{all}\\) likelihood ratio is \\(\# N_{XIC}/[1-g(t_L)]\\). 

I do not see this update as not particularly informative, since I expect GCs to create simulated XOMs., which I explore later in this chapter.

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation Xc</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation Xv</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/ACXRh_XAf_8g5zZ6UZQIWw3IgvA8exfPI0jJLUHtwkNOCqthWb65QfzA4xo9vzztjy4Y7iOKbgjCHEYdBXY7jwC3THcFIaeeOy5DSQT_FCERn5X7H1PpDaZLF2jZ-ZxZUX5YqzfB"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/LPb0hf4pKJ8lDnzPnGHDPBSw1cR1BAIt50EHy2QCGmmLtjkcB7n3tJSaW292xDyBaLpxr1sMKQMxRIbe9OYFBZ0ABsQFpId6NeuvbJsbbhRIww_bDkWTi3TNLNcMxuoo3EGi0Efq"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/TTqZyliHw_7hKuG-IIk82bSM2py7fLoDxpBQh1qhStvcSmfS934apLUhiVadHxkolPoi9TPxXLta_wxwp8QQLy4jLkjJQm3eJxPuyJTDKft2GCOcoOqXswIlJRIrCDJF_EEw9Rir"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/PeoCEYB5NLM8QDL3532J40060vjrLOASyg1SFyABGhIw5aUksZNGj725MAeA5p8iJmbjc7zAlUh_Uzz4UCzlpRtN7j7Ms4ejk2Rv5gdZP_ukJ-1ByyKyZHCsuzOvu7m--3EZuHMD"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/QfX2iD97_NRbEPv8ZF7OJ-Z9JIcheC9r-sfIhykTY3Aqxtr86TaIEdKpUgw5IdUqvzKaKYNz5AMGi7UwipjcQKzT-90a3t1oQ6kHhySIXibZLM662bQ8pi0XLRK51uqIt4izBUYp"></figure><p><span class="footnote-reference" data-footnote-reference="" data-footnote-index="17" data-footnote-id="8beh54v0yw9" role="doc-noteref" id="fnref8beh54v0yw9"><sup><a href="#fn8beh54v0yw9">[17]</a></sup></span></p></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/7hleBz3kt49X7UvDTQyS12pc-k3Cq_jvXDKG70xc2WyTyvRr4ZA3BDD6Jgas65td7CKq-FzI_NuEi8bThbcQx_skGD87yKmONCBC6aHO_zNq2f2a2qFQ4h7i4z_je3mY50TABdk2"></figure></td></tr></tbody></table>

Notably, SSA \\(R_{all}\\) updates  towards as small \\(v\\) as possible, since increasing the speed of expansion increases the number of observers created that are not like us — the denominator in the likelihood ratio. 

As with the SSA \\(R_{ICs}\\) update, this result is sensitive to the prior on \\(L_{max}\\), which I discuss in the appendix. 

Non-causal decision theoretic approaches
----------------------------------------

In this section, I apply non-causal decision theoretic approaches to reasoning about the existence of GCs. This chapter does not deal with probabilities, but with ‘wagers’. That is, how much one should behave as if they are in a particular world.  

The results I produce are applicable to multiple non-causal decision theoretic approaches. 

The results are applicable for someone using SSA with the minimal reference class (\\(R_{min}\\)) paired with a non-causal decision theory, such as evidential decision theory (EDT). SSA \\(R_{min}\\) contains only observers identical to you, and so updating using SSA Rmin simply removes any world where there are no observers with the same observations as you, and then normalises.

The results are also applicable for someone (fully) sticking with their priors (being ‘updateless’) and using a decision theory such as anthropic decision theory (ADT). ADT, created by Armstrong (2011), converts questions about anthropic probability to decision problems, and Armstrong notes that “ADT is nothing but the Anthropic version of the far more general ‘Updateless Decision Theory’ and ‘Functional Decision Theory’”.

### Application

I suppose that all decision relevant ‘exact copies’ of me (i.e. instances of my current observations) are in one of the following situations

1.  An IC that later becomes a GC
2.  An IC that does not become a GC
3.  A simulation that is smaller in scale than the ‘basement’ realty (e.g., the simulation is shorter lived)

Of course, copies may be in non-decision relevant situations, such as short-lived [Boltzmann brains](https://en.wikipedia.org/wiki/Boltzmann_brain). 

For each of the above three situations, I calculate the expected number of copies of me per OUSV. For example, in case (1), the number of copies is proportional to \\(f_{GC} \cdot \# N_{XIC}\\) and in (2) \\((1-f_{GC}) \cdot \# N_{XIC}\\)[^vhttcld43ib]. I do not calculate the constant of proportionality (which would be very small) - this constant is redundant when considering the *relative* decision worthiness of different worlds.

My decisions may correlate with agents that are not identical copies of me (at a minimum, near identical copies) which I do not consider in this calculation. If in all situations the relative increase in decision-worthiness from correlated agents is equal, the overall relative decision worthiness is unchanged.

To motivate the need to consider these three cases, I claim that our decisions are likely contingent on the ratio of our copies in each category and the ratio of the expected utility of our possible decisions  in each scenario. For example, if we were certain that none of our copies were in ICs that became GCs, or all of our copies were in short-lived simulations, we may prioritise improving the lives of current generations of moral patients. 

**The GC wager**

I choose to model all the expected utility of our decisions as coming from copies in case (1). That is, to make decisions premised on the wager that we are in an IC that becomes a GC and not in an IC that doesn’t become a GC, nor in a short-lived simulation.

Tomasik (2016) discusses the comparison of decision-worthiness between (1) and (2) to (3). My assumption that (1) dominates (2) is driven by my prior distribution on fGC (which is bounded below by 0.01) and the expected resources of a single GC dominating the resources of a single IC. 

Counterarguments to this assumption may appeal to the uncertainty about the ability to affect the long-run future. For example, if a GC emerged from Earth in the future but all the consequences of one’s actions [‘wash out’](https://forum.effectivealtruism.org/posts/z2DkdXgPitqf98AvY/formalising-the-washing-out-hypothesis) before that point, then (1) and (2) would be equally decision-worthy. 

I expect that forms of lock-in, such as the values of an artificial general intelligence, provide a route for altruists to influence the future. I suppose that a total utilitarian’s decisions matter more in cases where  the Earth emerging GC is larger. In fact, I suppose a total utilitarian’s decisions matter in linear proportion to the eventual volume of such a GC. 

An average utilitarian’s decisions then matter in proportion to the ratio of the eventual volume of an Earth emerging GC to the volume controlled by all GCs, supposing that GCs create moral patients in proportion to their resources.

**Calculating decision-worthiness**

To give my decision worthiness of each world, I multiply the following terms:

*   My prior credence in the world[^9fh8icqnlxk]
*   The expected number of copies of me in ICs that become GCs
*   If I am a total utilitarian:
    *   The expected total resources under control of the GCs emerging from ICs with copies of me in this world.
*   If I am a total utilitarian:
    *   The ratio of expected total resources under control of the GCs emerging from ICs with copies of me in, to the expected total resources of all GCs (supposing that).

This gives the degree to which I should wager my decisions on being in a particular world.

**Total utilitarianism**

The number of copies of me in ICs that become GCs is proportional to\\(f_{GC} \cdot \# N_{XIC}\\). The expected actual volume of such GCs is \\(\# V(t_{now}, t_{L}, v)\\). Using the assumption that our influence is linear in resources, the decision worthiness of each world is

\\\[f_{GC} \cdot \# N_{XIC} \cdot \# V(t_{now}, t_{L},v)\\\]

I use the label “ADT total” for this case.

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/phynewHwGlph7DX7bTE0vK-r6-bbMD0T6JRLXP8iwXiaABo8nDiXxazm5KsB4PRAEmuM1d7MfKDqx5V26vfNEJ8N40rEqQFb7-9YZwSX51C0jUlUSnMjgoq6XWHrv51Cd82RF8Ri"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/lKXPcNZ4bjeMIDp3Jtv_u_gemVl_jfCVQ7KbZOCIlyeMvP_TqZfMCRyQxBka26kPFo0givnq4ktvl0jnim9vFQAEranRSxc2LGs680VeCfnTu8S_eh8fV3d8OgT2hItK4Y7diOC1"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/scuiHadm9YcI85dNEkZwh5aHWZYNB5ddeMbJiRHwVoeJvXQPrkp1Pvd6gWClmJV0gqR0u2Sdpho8X-tt9hB4EJp6KeRSSjf_4V2KSpft7KvoPFARuTxO3VJnIr8H8NPPM41VUl2y"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/ev8LLMxEeOvk9XyquDxZ5nZrhKdX45gUCc6eDiJcGDuODbuWF9AgjSB6uEoPrRWcpWgegkseSpOyM0FkoQQXWRkITL0-2SlQqA0iVy-oESFZ2PVKW27K5xhhJd1mF6TADk4Fuu23"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/HuUDDjLVCora-LOI5K-Fn6rRj0KawLZd8p0rUmxR81VyUXDLpUJImSMqSbYRgiNG1yEe2iIpYSZq57pKxZ65R2dviA_08zCwQePLnQWsEPJUMbkXJEnUtUfrt0ttzbRn3RqfXTzU"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/W70ncFWdd81w81PvY3ZdZllvGeAQef9RHcpSh6ih9eMiXmmodQT69-5hKym-Ju3UK-6pWgy1YglQhPSK2kvv0Doy7Fm325FcXLT4BXLY1pp3I3TRN7chHzGjjnqohTQTng-Nco8j"></figure></td></tr></tbody></table>

Total utilitarians using a non-causal decision theory should behave as if they are almost certain of the existence of GCs in their future light cone. However, the number of GCs is fairly low - around 40 per AUSV. 

**Average utilitarianism**

As before, the number of copies of me in ICs that become GCs is proportional to \\(f_{GC} \cdot \# N_{XIC}\\) and again the expected actual volume of such a GC is given by \\(\# V(t_{now}, t_L, v)\\) The resources of all GCs is proportional to \\(1-g(t_L)\\). Supposing that GCs create moral patients in proportion to their resources, the decision worthiness of each world is

\\\[f_{GC} \cdot \# N_{XIC} \cdot \# V(t_{now}, t_{L},v) \cdot [1-g(t_L)]^{-1}\\\]

I use the label “ADT average” for this case.

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/SlT1lgDNp0iREFZgbLeWu8Ol-iLNu_KUuMJ-p4L_B4CkuYllYYyIJ4aK5fhPUPj9PaUZR8F-_MbEelh_1p-g_UqF-teLYBhNmtHaCTqKr3-ja-2JveQ8QZX9Eima9xDfHqTt7SEU"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/2U253rOt3VnIhpIyrK0XODRTsxMdD1gxynahbZ6R-MY7chljRfA_u8jv3nyddJBzf_O5PoYHQHhCtGLiLWV-eFHaH4104x-AddbE_fpOi1jJ7g8NrgX6byq4P3DslqdCFJNGyVO7"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/xQipHbSbDznzvDiKevVj11iIoTYgZCfBnRKdAHqW9wagFW_9QPP56tPDgVk3WBghUrLSaLd72reGmH-LJ8RJn_F3TQ2MWbmJuxTm5300b2-qU0H3EzvRnfnacDD_KX7Vqh2dN6aj"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/s2YAnTEuNM1Q_NwYtTEph_Z1GqtdKLI1XvDIDKtq6k9I0aYxqM3-xpgjwHzij6JNKkpNJCfzh16mqFdHekKSzQ-3moC-IUYkuUPwLXX-yqOAF3lqUjPamSqyKPDuzICne6R_nLxk"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/jB2agLFUeEtT2jyM4QurXskSjGl9jP8oBg3zcLwt2u204esaoTZ-B7JDGAotHs0VizumgJD5qljW60INeWFupKdka-702oJjyO5MVxBnL_t_1EH7Y-QHva5yQky-JyxlJmqCtb7f"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/c9mXBIciueqUFHIIUhjluOOWx5VZLVV20zHg6cfJQIJ1vcnA2j3_t4BXDmIn0ux_Ytc8sC_yPMvmSp1HFpmo8bO2Tz8MmW-mYTORnGnFwE8U3DFqJPVhB6XOQU_6u1qsmYzbHBfd"></figure></td></tr></tbody></table>

An average utilitarian should behave as if there are most likely no GCs in the future light cone. As with the SSA updates, this update is sensitive to the prior on \\(L_{max}\\) and is explored in an appendix.

###   
Interaction with GCs

I now model two types of interactions between GCs: trade and conflict.

The model of conflict that I consider *decreases* the decision worthiness of cases where there are GCs in our future light cone. I show that a total utilitarian should wager as if there are *no* GCs in their future light cone if they think the probability of conflict is sufficiently high.

The model of trade I consider *increases* the decision worthiness of cases where there are GCs in our future light cone. I show that an average utilitarian should wager that there *are* GCs in their future light cone if they think there are sufficiently large gains from trade with other GCs.

The purpose of these toy examples is to illustrate that a total or average utilitarian’s true wager with respect to GCs may be more nuanced than presented earlier. 

**Total utilitarianism and conflict**

Suppose we are in the contrived case where:

*   We have \\(p\\) credence in the future where all GCs ‘do their own thing’ and (say) convert their volumes into their own form utility.
*   We have \\(1-p\\) credence in a future where all GCs in our future light cone ‘fight’ to control the entire future light cone. The probability of a GC winning is proportional to their actual volume. The winner then gets their maximal volume (the volume they would have reached if no other GCs were present) and all other GCs lose all their resources.

When conflict occurs, an Earth originating GC has probability \\(\# V(t_{now},t_L,v) \cdot [1-g(t_L)]^{-1}\\) [^ihxyeq9n8gg]of getting its maximal volume, \\(V(t_{now},t_L,v)\\). Supposing a total utilitarian’s decisions can influence both cases equally, the expected decision-worthiness per copy in an IC that becomes a GC is 

\\\[p \cdot \# V(t_{now}, t_L, v) + (1-p) \cdot \frac{\# V(t_{now}, t_L, v)}{1-g(t_L)} \cdot V(t_{now}, t_L, v)\\\]

As before, multiplying by the number of copies of me in ICs that become GCs, \\(f_{GC} \cdot \# N_{XIC}\\), gives the decision worthiness.

Intuitively, since the conflict in expectation is a net loss of resources for all GCs, this leads one to wager one’s decisions against the existence of GCs in the future.

![](https://lh3.googleusercontent.com/4CPUyJtw2QhqfA5caRI5vd1xPlZRcgaessMuX4PWgyGU5nBDRWHAKUg5R2T-q9htCAxH5TrjnVKVKfH96TuYvClvInB19QKhKkCgYqCk8ElsXCs9v29rl4cgPZfonwoP--buVxH5)

Increasing the probability of conflict increases the decision-worthiness of cases where there are no GCs in our future for total utilitarians. Very high probabilities of conflict lead a total utilitarian to wager that there are no GCs in our future.

**Average utilitarianism and trade**

I apply a very basic model of gains from trade between GCs with average utilitarianism. I suppose that one can only trade with other GCs within the affectable universe.[^shmz0rflla][^r15oq5lvgwe]

 Intuitively the decision worthiness goes up in a world with trade as there is more at stake: our GC can both influence its own resources and the resources of other GCs. This model of trade would also increase the degree to which a total utilitarian would wager there are GCs in their future light cone.

I suppose an average utilitarian GC completes a trade by spending \\(R\\) of their resources (which they could otherwise use to increase the welfare of \\(R\\) moral patients by a single unit) for the return of welfare of \\(x \cdot R\\) moral patients to be increased by one unit. For \\(x>1\\) the GC benefits by making the trade, and so should always make such a trade rather than using the resources to create utility themselves. I write \\(p(x)\\) for the probability density of a randomly chosen trade providing \\(x\\) return, and suppose that the ‘volume’ of available trades is proportional to the volume saturated by GCs, which itself is proportional to \\(1-g(t_L)\\).

I take \\(p(x) = \exp(-kx)/k\\) for some \\(k > 0\\) . For smaller \\(k\\), a greater proportion of all available trades are beneficial, and a greater number are very beneficial. For example, for k=1 the fraction of the volume controlled by GCs that the average utilitarian GC can make beneficial trades with is\\(1/e =  37  \%\\) and \\(1/e^2 \approx14 \%\\)  of volume controlled by GCs allows for trades that return twice as much as they put in. For \\(k=0.1\\) these same terms are\\(1/e^{0.1} \approx 90 \%\\) and\\(1/e^{0.2} \approx 82 \%\\)  respectively. 

Note that smaller \\(k\\) supposes a very large ability to control effective resources by other GCs through trade. Some utility functions may be more conducive to expecting such high trade ratios. 

I suppose that the decision-worthiness for each copy of an average utilitarian is linear in the ratio of *effective* resources that the future GC controls, (i.e. the total resources the GC would need to produce the same utility without trade) to the total resources controlled by all GCs. Other GCs may also increase the effective resources they control: for simplicity, I assume that such GCs do not use their increased effective resources to change the number or welfare of otherwise existing moral patients.  

Average utilitarians should wager their decisions on the existence of (many) GCs if they expect high trade ratios, and the ability to linearly influence the value of these trades.  
 

![](https://lh5.googleusercontent.com/kleOHBGlK6ZEccHgd_sxdUFioQOB4AB1wtT1Y-lLiqj6nT5v_oUJzHky7alUg_-ny_YEx6SGkY0pL1olI-rX80j2LDenQiCo7uMkDoS1D65197KK7E6CSGESFLFyDHvhXwU4S6MD)

Average utilitarians should behave as if there are GCs in our future light cone if they expect high trade ratios to be possible

Updates with simulated observers
--------------------------------

In this section, I return to probabilities and consider updates for SIA and SSA in the case where GCs create simulated observers like us. For the most part, the results are similar to those seen so far: SIA supports the existence of many GCs, and SSA \\(R_{all}\\) does not. Since SSA \\(R_{ICs}\\) does not include observers created by GCs, its results are independent of the existence of any simulated observers created by GCs. 

This section implicitly assumes that the majority of observers like us (XOMs) are in simulations (run by GCs), as argued by Bostrom (2003). Chapter 4 does not depend on any discussion here, so this subsection can be skipped.

### Ancestor simulations

In the future, an Earth originating GC may create simulations of the history of Earth or simulate worlds containing counterfactual human civilizations. I call these ancestor simulations (AS).  

Bostrom (2003) concludes that at least one of the following is true:

1.  *The fraction of all human-level technological civilizations that survive to reach a posthuman stage is approximately zero*
2.  *The fraction of posthuman civilizations that are interested in running ancestor-simulations is approximately 0*
3.  *The actual fraction of all observers with human-type experiences that live in simulations is approximately 1*

GCs other than humans may create AS of their own past as an ICs. These OMs in AS created by GCs who transitioned from XICs will be XOMs.

### Historical simulations

As well as running simulations of their own past, GCs may create simulations of other ICs. GCs may be interested in the values or behaviours of other GCs they may encounter, and can learn about the distribution of these by running simulations of ICs. 

I use the term historical simulations (HS) to describe a behaviour of simulating ICs where the distribution of simulated ICs is equal to the true distribution of ICs. That is, the simulations are representative of the outside world, even if GCs run the simulations one IC at a time.

### Other OMs

GCs may create many other OMs, simulated or not, of which none are XOMs. For example, a post-human GC may create a simulated utopia of OMs. I use the term *other OMs* as a catch-all term for such OMs.

### Simulation budget

I model GCs as either

*   spending a fraction of their total resources on AS or HS, or
*   spending some fixed quantity of their resources on AS or HS

As well as

*   Spending some fraction of their resources on other OMs.

Fixed means that the amount each GC spends is independent of the model parameters - it does not mean each GC creates the same number.  

### Most XOMs are in simulations

I first give an example to motivate the claim that when GCs create simulated XOMs, the majority of all XOMs are in such simulations rather than being in the ‘basement-level’. 

Bostrom (2003) estimates that the resources of the Virgo Supercluster, a structure that contains the Milky Way and could be fully controlled by an Earth-originating GC, could be used to run \\(10^{29}\\) human lives per second, each containing many OMs. Around \\(10^{11}\\) humans have ever lived: if we expect a GC to emerge in the few centuries, it seems unlikely more than 1012 humans will have lived by this time. In this case, only \\(10^{-17}\\) (one hundred million trillionths) of all a GC’s resources would need to be used for a single second to create an equal number of XOMs to the number of basement-level XOMs.  

When GCs create AS or HS, I assume that the number of XOMs in AS or HS far exceeds the number of XOMs in XICs. That is, most observers like us are in simulations. 

Both SIA and SSA \\(R_{all}\\) support the existence of simulations of XOMs, holding all else equal, creating simulated XOMs (trivially) increases the number XOMs and the ratio |XOMs|/|OMs|.

### Likelihood ratios

I first calculate |XOMs| for each simulation behaviour. These give the SIA likelihood ratios. As previously discussed in the SSA \\(R_{all}\\) case, I suppose that the vast majority of OMs are in GCs and so are created in proportion to the resources controlled by GCs,\\(1-g(t_L)\\). Dividing by \\(|XOMs|\\) by \\(1-g(t_L)\\)then gives the SSA \\(R_{all}\\) likelihood ratio. 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:120px"><strong>GCs create</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:220px"><p><span class="math-tex">\(|XOMs|\)</span>&nbsp;is proportional to<span class="footnote-reference" data-footnote-reference="" data-footnote-index="23" data-footnote-id="xe93khwxoh" role="doc-noteref" id="fnrefxe93khwxoh"><sup><a href="#fnxe93khwxoh">[23]</a></sup></span>:</p><p><br>&nbsp;</p></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Derivation</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS fixed</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(f_{GC} \cdot \# N_{XIC}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><p>I assume that the fixed number of OMs is much greater than&nbsp;<span class="math-tex">\(1/f_{GC}\)</span>, this means one can approximate all XOMs as contained in AS.&nbsp;</p><p>The number of XICs that actually appear is&nbsp;<span class="math-tex">\(\# N_{XIC}\)</span>&nbsp;of which&nbsp;<span class="math-tex">\(f_{GC}\)</span>&nbsp;will become GCs.&nbsp;</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">HS fixed</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(f_{GC} \cdot \# N_{XIC}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><p>The total number of GCs that appear is&nbsp;<span class="math-tex">\(f_{GC} \cdot \# N_{IC}\)</span>&nbsp;. Each creates some average number of HS each containing some average constant number of XOMs.&nbsp;</p><p>The fraction of ICs in HS which are XICs is&nbsp;<span class="math-tex">\(\# N_{XIC}/ \# N_{IC}\)</span>.&nbsp;</p><p>The product of these terms is&nbsp;<span class="math-tex">\(f_{GC} \cdot \#N_{XIC}\)</span></p><p>&nbsp;Intuitively, this is equal to the AS fixed case as the same ICs are being sampled and simulated, but the distribution of which GC-simulates-which-IC has been permuted.&nbsp;</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS resource proportional</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(f_{GC} \cdot \# N_{XIC} \cdot \# V(t_{now}, t_L, v)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><p>The number of GCs that create AS containing XICs is&nbsp;<span class="math-tex">\(f_{GC} \cdot \#N_{XIC}\)</span>. &nbsp;</p><p>The number of AS each of these GCs creates is proportional to the actual volume each would control,&nbsp;<span class="math-tex">\(\#V(t_{now},t_L,v)\)</span></p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">HS resource proportional</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\frac{\#N_XIC}{\# N_{IC}} \cdot [1-g(t_L)]\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><p>Of all HS created,&nbsp;<span class="math-tex">\(\#N_{XIC}/\#N_{IC}\)</span>will be of XICs.&nbsp;</p><p>The total number of HS created is proportional to the average fraction of OUSVs saturated by GCs,&nbsp;<span class="math-tex">\(1-g(t_L)\)</span></p></td></tr></tbody></table>

Note that above the derivations give the equivalences between

*   SIA AS resource proportional & ADT with total utilitarianism
*   SSA \\(R_{all}\\) HS resource proportional and SSA \\(R_{ICs}\\)
*   SSA \\(R_{all}\\) AS resource proportional & ADT with average utilitarianism

And so are not calculated here again.

### SIA updates

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Simulation behaviour</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS fixed / HS fixed</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/kpfd8sLU-SzAVzbzJnzp1bBAn-9D3NLzZ0ezeDQ6LwJz-lHc9yxCag51RUY_tMXzFSDoa8uHKnxh8SJeKG-na9NOHe9x91OZJOg4eDEveeCMV4MnI7d-jy_9y6_FkKt0o_1eQ2rs"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/d7lGRFVj7FXuX1kVtt1Krr6p1Qu9UEc2HPVJ3jh_QXb3OYL9lFVpBO0iBYx9uqqK8lDaC34Wu41IJTgsMlYq1dCeDN-SG8G_6jbVvDcJxXg3tJ2SlvaJbj3Af1CgAIVRjLvGKu3U"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">HS resource proportional</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/X69VszX2BuSk1YStfjwamA8VqL-TswT3sOZkchsNN9_hXG9fGGM-kNgNtPBsWIMdHoZHvYe5eqj5ybpsXUEE34Wt-tZNy3AuYr8jltFn0OGxubGG9mJMiiXnBiUNrjWtuHio48ss"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/y54dg_lRHX1eleiNJ-5JDHYe0KUzQf1URl_uDX3luGinxia519WsexSGApGNSCRuG5kdfxPmJUFNiLBwMONNqKFgefLDcfTK6maOzU_EmKbIDx_H_2JlMSvs5-VuWw2NBDrDhdZj"></figure></td></tr></tbody></table>

### SSA \\(R_{all}\\) updates 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Simulation behaviour</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Updating with observation&nbsp;</strong><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS fixed / HS fixed</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/eJHIx7787ZzPnBR58Nz75Zrb-TQgN_dHmGbhC7FRd5yJBoVqrkYeiPTb0drMe_yo9Hd3vH7Y-A7jcD_NGY4kNQonJw7cXoAUVAglkaFKtreJO9YmiXGaq5AeG_Mvw2WVkpBrJ6Jz"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/0H-CHgg6wex95lF4p_SuieWtiLS06HcSYyYOZIgr_5X2O0tZnzxf5EnBUR0G53aO2tEQVzQs2SkJAcNLqcS_1LlCtiMZfXHWh9Sb52xUc_oWX_H4QT6JXUx78lmWHVDBfJY2mYNd"></figure></td></tr></tbody></table>

  
 4 Conclusion
================

Summary of results
------------------

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:140px" rowspan="2">&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top" colspan="5"><p>Anthropic theory</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:90px">SIA</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">ADT total utilitarianism</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">ADT average utilitarianism</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:90px">SSA&nbsp;<span class="math-tex">\(R_{all}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:90px">SSA&nbsp;<span class="math-tex">\(R_{ICs}\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">No XOMs</td><td style="background-color:#c9daf8;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>1&nbsp;</p></td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>4</p></td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>5</p></td><td style="background-color:#b6d7a8;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>6</p></td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>8</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">HS-fixed</td><td style="background-color:#ffbe5d;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>2</p></td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>4</p></td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>5</p></td><td style="background-color:#ffff85;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>7</p></td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>8</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS-fixed</td><td style="background-color:#ffbe5d;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>2</p></td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>4</p></td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>5</p></td><td style="background-color:#ffff85;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>7</p></td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>8</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">HS-rp&nbsp;</td><td style="background-color:#6dc734;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>3</p></td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>4</p></td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>5</p></td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>8</p></td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>8</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS-rp</td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>4</p></td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>4</p></td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>5</p></td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>5</p></td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top"><p>8</p></td></tr></tbody></table>

In the above table, the left column gives the shorthand description of GC simulation-creating behaviour. Equivalent updates have the same colour and number. 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top" colspan="9">The posterior credence in being alone in the observable universe, conditioned on observation&nbsp;<span class="math-tex">\(X_c\)</span>.</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Prior</td><td style="background-color:#c9daf8;border:1pt solid #000000;padding:5pt;vertical-align:top">1</td><td style="background-color:#ffbe5d;border:1pt solid #000000;padding:5pt;vertical-align:top">2</td><td style="background-color:#6dc734;border:1pt solid #000000;padding:5pt;vertical-align:top">3</td><td style="background-color:#7affff;border:1pt solid #000000;padding:5pt;vertical-align:top">4</td><td style="background-color:#ff95ff;border:1pt solid #000000;padding:5pt;vertical-align:top">5</td><td style="background-color:#b6d7a8;border:1pt solid #000000;padding:5pt;vertical-align:top">6</td><td style="background-color:#ffff85;border:1pt solid #000000;padding:5pt;vertical-align:top">7</td><td style="background-color:#ea9999;border:1pt solid #000000;padding:5pt;vertical-align:top">8</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Bullish</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">0.2%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">70%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">68%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">69%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">64%</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Balanced</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">0.2%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">89%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">89%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">89%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">85%</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Bearish</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&lt;0.1%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">0.2%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">94%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">95%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">95%</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">92%</td></tr></tbody></table>

  
 These results replicate previous findings:

*   Olson & Ord (2020) and Finnveden (2019) that show SIA supports the existence of GCs in our future
*   Finnveden (2019) that shows total utilitarians using a non-causal decision theory should behave as if there are GCs in the future

These results fail to replicate Hanson et al.’s (2021) finding that (the implicit use of ) SSA \\(R_{ICs}\\) implies the existence of GCs in our future. 

To my knowledge, this is the first model that

*   Quantifies the effects of the simulation hypothesis on the Fermi paradox
*   Quantifies the non-causal decision theoretic wager for average utilitarians

In the appendix, I also produce variants of updates for different priors: taking (log)uniform priors on all parameters, and varying the prior on \\(L_{max}\\).

Which anthropic theory?
-----------------------

My preferred approach is to use a non-causal decision theoretic approach, and reason in terms of wagers rather than probabilities. 

Within the choice of utility function in finite worlds, forms of total utilitarianism are more appealing to me. However, it seems likely that the world is infinite and that aggregative consequentialism must confront infinitarian paralysis—the problem that in infinite worlds one is ethically indifferent between all actions. Some solutions to infinitarian paralysis require giving up on the maximising nature of total utilitarianism (Bostrom (2011)) and may look more averagist[^py53nr1ho7g]. However, interaction with other GCs - such as through trade - make it plausible that even average utilitarians behave as if GCs are in their future light cone. 

Having said this, theoretical questions remain with the use of non-causal decision theories (e.g. comments here on [UDT and FDT](https://www.alignmentforum.org/posts/uKbxi2EJ3KBNRDGpL/comment-on-decision-theory#XCXs8ZePZCw8875PX)). 

Why does this matter?
---------------------

If an Earth-originating GC observes another GC, it will most likely not be for hundreds of millions of years. By this point, one may expect such a civilization to be technologically mature and any considerations related to the existence of aliens redundant. Further, any actions we take now may be unable to influence the far future. Given these concerns, are any of the conclusions action-relevant? 

Primarily, I see these results being most important for the design of artificial general intelligence (AGI). It seems likely that humanity will hand off control of the future, inadvertently or by design, to an AGI. Some aspects of an AGI humanity builds may be locked-in, such as its values, decision theory or commitments it chooses to make.  

Given this lock-in, altruists concerned with influencing the far future may be able to influence the design of AGI systems to reduce the chance of conflict between this AGI and other GCs (presumably also controlled by AGI systems). Clifton (2020) outlines avenues to reduce cooperation failures such as conflict. 

Astronomical waste?
-------------------

Bostrom (2003) gives a lower bound of \\(10^{14}\\) biological human lives lost per second of delayed colonization, due to the finite lifetimes of stars. This estimate further does not include stars that become impossible for a human civilization due to the expansion of the universe. 

The existence of GCs in our future light cone may strengthen or weaken this consideration. If GCs are aligned with our values, then even if a GC never emerges from Earth, the cosmic commons may still be put to good use. This does not apply when using SSA or a non-causal decision theory with average utilitarianism, which expect that only a human GC can reach much of our future light cone. 

SETI
----

The results have clear implications for the search for extraterrestrial intelligence (SETI). 

One key result is the strong update against the habitability of planets around red dwarfs. For the self-sampling assumption or a non-causal decision theoretic approach with average utilitarianism, there is great value of information on learning whether such planets are in fact suitable for advanced life: if they are, SSA strongly endorses the existence of GCs in our future light cone, as discussed in the appendix. SIA, or a non-causal decision theoretic approach with total utilitarianism, is confident in the existence of GCs in our future light cone regardless of the habitability of red dwarfs.

The model also informs the probability of success of SETI for ICs in our past lightcone. Such ICs may not be visible to us now if they were too quiet for us to notice or did not persist for a long time.  

![](https://lh3.googleusercontent.com/Z1cNv8U_P-3y3LO5dati1kFcobvWyNVtEo4e1_DxaarIM5v2Crn4AICOQdMRCFI8Ob-nsu5npIAvJoIm0Jbh7Cbf9mqQje18QWn7KhfcUVPEiLxNqk9ZagNSdZevkONAzAmcRtWn)

The distribution of the probability that an XIC has an IC-that-did-not-become a GC in their past light cone, in by the posteriors in from our balanced prior with the update when conditioning that there were no GCs in our past light cone

Risks from SETI
---------------

[Barnett (2022)](https://www.lesswrong.com/posts/DWHkxqX4t79aThDkg/my-current-thoughts-on-the-risks-from-seti) discusses and gives an admittedly “non-robust” estimate of “0.1-0.2% chance that SETI will directly cause human extinction in the next 1000 years”.  

I consider the implied posterior distribution on the probability of a GC becoming observable in the next thousand years. The (causal) existential risk from GCs is strictly smaller than the probability that light reaches us from at least one GC, since the former entails the latter.

![](https://lh5.googleusercontent.com/bQoX1Av7PWko7XirMaaMoaYTR8VT0N5vBHOy345Z0O3JOuK8Tz_xh1We0jJL0Aceq5mE_jnXgp9NTdAiyV-Z4ZaYTDFjS6M90Yw4tYH7mgNSYiQv39MoeSmlrHUQwzndt2QlpkD9)

The distribution of the implied probability that we we observe a GC in the next 1,000 years, conditioned on no GCs in our past light cone 

![](https://lh6.googleusercontent.com/3QHc40H4nOSRihM3_j0o1ISka067Hio7o2XrS4JD2fLfOKQY3g2PT9mVsj-SZPj8UhrZmM04iy9KNdEeXYFTho1JGSZnnpDC9Aol4qGZQHNLw3YDlvTxvLmJZuSmYUBIa5OVJydC)

The distribution of the implied probability that a GC reaches Earth in the next 1,000 years, conditioned on no GCs having reached us already

The posteriors imply a relatively negligible chance of contact (observation or visitation) with GCs in the next 1,000 years even for SIA.   

However, it seems that the risk in the next is then more likely to come from GCs that are already potentially observable that we have just not yet observed - perhaps more advanced telescopes will reveal such GCs. 

Further work
------------

I list some further directions this work could be taken. All the calculations can be found [here](https://colab.research.google.com/drive/1MVyf_Ljkc8OLWTBcHPtke2Qcveg1TSjB?usp=sharing).

I have not updated on all the evidence available.  Further evidence one could update on includes:

*   Facts about the Sun (e.g. that it is a G-type star), or Milky Way (e.g. that is a barred spiral galaxy) that would narrow the definition of XICs.
*   That no signs of life have been observed on Mars or other bodies in the solar system
*   That we have not observed any ICs. To do this, one would need a prior distribution over the lifetime of ICs and how likely it is for us to detect them. This is increasingly important for those with low prior on \\(f_{GC}\\). This observation pushes against “life is common, \\(f_{GC}\\) is small” and towards both “life is hard” and “life is somewhat common and \\(f_{GC}\\) is large”.

Modelling assumptions can be improved:

*   Considering priors on each try-try step and using the true completion time distribution, rather than an approximation
*   Considering the possibility of [panspermia](https://en.wikipedia.org/wiki/Panspermia)
*   Considerations of the structure of the universe in GC expansion

More variations of the updates could be considered:

*   Using different references classes with SSA
*   Considering more advanced conflict/trade models in the non-causal decision theoretic approaches
*   Using utility functions other than average and total utilitarianism in the non-causal decision theoretic approaches

More thought could be put into the prior selection (though the main results still follow from (log)uniform priors):

*   The priors on \\(n\\) and \\(h\\) can be informed by considering the biological mechanisms of the try-try steps.
*   The priors on \\(w\\) and \\(L_{max}\\) are unlikely to be independent: if we expect no planets around red dwarfs to be habitable, this seems evidence for marginally smaller \\(w\\) on planets around sun-like stars.
*   The parameter \\(L_{max}\\) could be split into two parameters: one that controls the habitability of  planets around longer lived stars and another that models how long these planets are habitable for. I expect this to have little difference on the results: all anthropic theories would prefer no non-Earth like planets to be habitable, and in the case they are, habitable for the shortest duration. Alternatively, the latter parameter could be replaced by a ‘deadline’ parameter.

Acknowledgements
================

I would like to thank Daniel Kokotajlo for his supervision and guidance. I’d also like to thank Emery Cooper for comments and corrections on an early draft, and Lukas Finnveden and Robin Hanson for comments on a later draft. The project has benefited from conversations with Megan Kinniment, Euan McClean, Nicholas Goldowsky-Dill, Francis Priestland and Tom Barnes. I'm also grateful to Nuño Sempere and Daniel Eth for corrections on the Effective Altruism Forum. Any errors remain my own.   
  
This project started during [Center on Long-Term Risk](https://longtermrisk.org/)’s Summer Research Fellowship.

Glossary
========

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(n\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The number of hard try-try steps</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(h\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The geometric mean of the hard steps (“hardness”)</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(d\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The sum of the delay and fuse steps, strictly less than Earth’s habitable duration.</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(w\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The probability of passing through all try-once steps in the development of an IC&nbsp;</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(L_{max}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The maximum duration a planet can be habitable for</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(u\)</span><span class="math-tex">\(\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The decay power of gamma ray bursts</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(v\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The average comoving speed of expansion of GCs</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(f_{GC}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The fraction of ICs that become GCs</td></tr></tbody></table>

  
 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">IC</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Intelligent civilization&nbsp;</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">XIC</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><p>Intelligent civilizations similar to human civilization in that</p><ol><li>They arrive at&nbsp;<span class="math-tex">\(t_{now}\)</span></li><li>They arrive around 4.5 Gy into their planet’s habitable duration</li><li>Their planet has around ~ 1 Gy habitable duration remaining</li></ol></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">GC</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Grabby civilization</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">OM</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Observer moment</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">OUSV</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Observable universe size volume</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AUSV</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Affectable universe size volume</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">SIA</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Self-indication assumption</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">SSA</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Self-sampling assumption</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">ADT</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Anthropic decision theory</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(N_{IC}\)</span>&nbsp;,&nbsp;<span class="math-tex">\(N_{XIC}\)</span>,&nbsp;<span class="math-tex">\(N_{GC}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The number of ICs/XICs/GCs that would appear, supposing no preclusion, per OUSV</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\# N_{IC}\)</span>,&nbsp;<span class="math-tex">\(\# N_{XIC}\)</span>,&nbsp;<span class="math-tex">\(\# N_{GC}\)</span>&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The number of ICs/XICs/GCs that actually appear per OUSV</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The observation of being in an XIC that has not observed any GCs</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_v\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The observation of being in an XIC that is not inside a GC</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AS</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Ancestor simulations; simulations created by a GC of their own IC origins (or slight variants)</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">HS</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Historical simulations; simulations created by a GC to be representative of IC origins&nbsp;</td></tr></tbody></table>

  
 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\alpha(t)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The probability density function of IC arrival times, <i>excluding</i> any preclusion by GCs.</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\beta(t)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The probability density function of IC arrival times that do not observe any GCs.&nbsp;</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(g(t)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The fraction of an OUSV unsaturated by GCs at time&nbsp;<span class="math-tex">\(t\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(V(b,t,v)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The comoving volume of a sphere/GC expanding from time&nbsp;<span class="math-tex">\(b\)</span>&nbsp;at&nbsp;<span class="math-tex">\(t\)</span>&nbsp;with speed&nbsp;<span class="math-tex">\(v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\# V(b,t,v)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The actual volume of a sphere/GC expanding from time b at t with speed v which considers the expansion of GCs</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\hat{\rho}(t)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The rate of habitable star formation normalised to have integral 1</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(H_{L_{max}}(L)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The fraction of terrestrial planets that are habitable for at most&nbsp;<span class="math-tex">\(L\)</span>&nbsp;Gy</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(T_{L_{max}}(L)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The number of terrestrial planets per OUSV that are potentially habitable</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(\gamma_u(t)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The fraction of potentially habitable planet habitable to advanced life at time<span class="math-tex">\(t\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(a(t)\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><a href="https://en.wikipedia.org/wiki/Scale_factor_(cosmology)"><u>The (cosmic) scale factor</u></a></td></tr></tbody></table>

  
  
  
  
  
References
=========================

Ade, P. A., Aghanim, N., Arnaud, M., Ashdown, M., Aumont, J., Baccigalupi, C., ... & Matarrese, S. (2016). Planck 2015 results-xiii. cosmological parameters. Astronomy & Astrophysics, 594, A13. 

Armstrong, S. (2011). Anthropic decision theory. arXiv preprint arXiv:1110.6437. 

Armstrong, S., & Sandberg, A. (2013). Eternity in six hours: Intergalactic spreading of intelligent life and sharpening the Fermi paradox. Acta Astronautica, 89, 1-13. 

Barnett, M. (2022). My current thoughts on the risks from SETI https://www.lesswrong.com/posts/DWHkxqX4t79aThDkg/my-current-thoughts-on-the-risks-from-seti#Strategies\_for\_mitigating\_SETI\_risk 

Bostrom, N. (2003). Are we living in a computer simulation?. The philosophical quarterly, 53(211), 243-255. 

Bostrom, N. (2003). Astronomical waste: The opportunity cost of delayed technological development. Utilitas, 15(3), 308-314. 

Bostrom, N. (2011). Infinite ethics. Analysis and Metaphysics, (10), 9-59. 

Carter, B. (1983). The anthropic principle and its implications for biological evolution. Philosophical Transactions of the Royal Society of London. Series A, Mathematical and Physical Sciences, 310(1512), 347-363. 

Carter, B. (2008). Five-or six-step scenario for evolution?. International Journal of Astrobiology, 7(2), 177-182. 

Clifton, J. (2020) Cooperation, Conflict, and Transformative Artificial Intelligence: A Research Agenda. [https://longtermrisk.org/files/Cooperation-Conflict-and-Transformative-Artificial-Intelligence-A-Research-Agenda.pdf](https://longtermrisk.org/files/Cooperation-Conflict-and-Transformative-Artificial-Intelligence-A-Research-Agenda.pdf) 

Eth, D. (2021) Great-Filter Hard-Step Math, Explained Intuitively. https://www.lesswrong.com/posts/JdjxcmwM84vqpGHhn/great-filter-hard-step-math-explained-intuitively

Finnveden, L. (2019) Quantifying anthropic effects on the Fermi paradox [https://forum.effectivealtruism.org/posts/9p52yqrmhossG2h3r/quantifying-anthropic-effects-on-the-fermi-paradox](https://forum.effectivealtruism.org/posts/9p52yqrmhossG2h3r/quantifying-anthropic-effects-on-the-fermi-paradox) 

Grace, K. (2010). SIA doomsday: The filter is ahead https://meteuphoric.com/2010/03/23/sia-doomsday-the-filter-is-ahead/ 

Greaves, H. (2017). Population axiology. Philosophy Compass, 12(11), e12442. 

Griffith, R. L., Wright, J. T., Maldonado, J., Povich, M. S., Sigurđsson, S., & Mullan, B. (2015). The Ĝ infrared search for extraterrestrial civilizations with large energy supplies. III. The reddest extended sources in WISE. The Astrophysical Journal Supplement Series, 217(2), 25. 

Hanson, R., Martin, D., McCarter, C., & Paulson, J. (2021). If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare. The Astrophysical Journal, 922(2), 182. 

Haqq-Misra, J., Kopparapu, R. K., & Wolf, E. T. (2018). Why do we find ourselves around a yellow star instead of a red star?. International Journal of Astrobiology, 17(1), 77-86. 

Loeb, A. (2014). The habitable epoch of the early Universe. International Journal of Astrobiology, 13(4), 337-339. 

Maartens, R. (2011). Is the Universe homogeneous?. Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences, 369(1957), 5115-5137. 

MacAskill, M., Bykvist, K., & Ord, T. (2020). Moral uncertainty (p. 240). Oxford University Press. 

Olson, S. J. (2015). Homogeneous cosmology with aggressively expanding civilizations. Classical and Quantum Gravity, 32(21), 215025. 

Olson, S. J. (2020). On the Likelihood of Observing Extragalactic Civilizations: Predictions from the Self-Indication Assumption. arXiv preprint arXiv:2002.08194. 

Olson, S. J., & Ord, T. (2021). Implications of a search for intergalactic civilizations on prior estimates of human survival and travel speed. arXiv preprint arXiv:2106.13348. 

Omohundro, S. M. (2008, February). The basic AI drives. In AGI (Vol. 171, pp. 483-492). 

Oesterheld, C. (2017). Multiverse-wide Cooperation via Correlated Decision Making. [https://longtermrisk.org/multiverse-wide-cooperation-via-correlated-decision-making/](https://longtermrisk.org/multiverse-wide-cooperation-via-correlated-decision-making/) 

Ord, T. (2021). The edges of our universe. arXiv preprint arXiv:2104.01191. 

Ozaki, K., & Reinhard, C. T. (2021). The future lifespan of Earth’s oxygenated atmosphere. Nature Geoscience, 14(3), 138-142. 

Pearce, B. K., Tupper, A. S., Pudritz, R. E., & Higgs, P. G. (2018). Constraining the time interval for the origin of life on Earth. Astrobiology, 18(3), 343-364. 

Russell, S. (2021). Human-compatible artificial intelligence. In Human-Like Machine Intelligence (pp. 3-23). Oxford: Oxford University Press. 

Saadeh, D., Feeney, S. M., Pontzen, A., Peiris, H. V., & McEwen, J. D. (2016). How isotropic is the Universe?. Physical review letters, 117(13), 131302. 

Sandberg, A., Drexler, E., & Ord, T. (2018). Dissolving the Fermi paradox. arXiv preprint arXiv:1806.02404. 

Sloan, D., Alves Batista, R., & Loeb, A. (2017). The resilience of life to astrophysical events. Scientific reports, 7(1), 1-5. 

Tegmark, M. (2007). The multiverse hierarchy. Universe or multiverse, 99-125. 

Tomasik, B. (2016). How the Simulation Argument Dampens Future Fanaticism. 

Zackrisson, E., Calissendorff, P., González, J., Benson, A., Johansen, A., & Janson, M. (2016). Terrestrial planets across space and time. The Astrophysical Journal, 833(2), 214.

Appendix: Updating \\(n\\) on the time remaining
================================================

I discuss how using the remaining habitable time on Earth to update on the number of hard steps n is implicitly an anthropic update. In particular I discuss it in the context of Hanson et al. (2021) (henceforth “they” and “their”). They later perform another anthropic update, using a different reference class, which I see as problematic. 

Their prior on \\(n\\) is derived by using the self-sampling assumption with the reference class of *observers on planets habitable for ~5 Gy (the same as Earth)*. I write \\(R_{5  Gy}\\)for this reference class. Throughout, I ignore delay steps, and include only hard try-try steps. 

They argue (as I see correctly) that to be most typical within this reference class, and observe that Earth is habitable for another ~1 Gy, we update towards \\(3 \lessapprox n \lessapprox 8\\). The SSA \\(R_{5  Gy}\\)  likelihood ratio when updating \\(n\\) on our appearance time alone (ignoring preclusion by GCs) is

\\\[\frac{f_{n,h}(4.5  Gy)}{\int_0^{5  Gy} f_{n,h}(t) \mathrm{d} t }\\\]

where\\(f_{n,h}(\cdot)\\) is the Gamma distribution PDF with shape \\(n\\) and scale \\(h\\). I take \\(h = 10^{10}  Gy\\). This likelihood ratio is largest for \\(n \approx 5\\). We could further condition on the time that life first appeared, but this is not necessary to illustrate the point. 

![](https://lh5.googleusercontent.com/WVFjASGsvQVtLYZb9Fx-Wkwv9-01yJhTIPgkWwOtXN1ZxlgEx3kdm0dhZAm6LilZMD86Ei5f7m0JX0g_r-7zbn3h7a1yPaWrTTYOYgCsL9A2hMuKtaaiivKvIeBKc09df_Ku5nAW)

The normalised SSA likelihood ratio when updating on the completion time on Earth.

While their prior on n relies on this small reference class, their main argument relies on a larger reference class of all intelligent civilizations, \\(R_{ICs}\\). They use this to model humanity’s birth rank as uniform in the appearance times of all advanced life, not just those habitable for ~5 Gy. 

If we use the smaller reference class \\(R_{5  Gy}\\) Gy throughout, then one updates towards \\(3 \lessapprox n \lessapprox 8\\), but human civilization is no longer particularly early since all life on planets habitable for ~5 Gy appears in the next ~50 Gy due to the end of star formation. The existence of GCs will have less explanatory power in this case. 

If one uses the larger reference class \\(R_{ICs}\\), when updating \\(n\\) on human civilization’s appearance time alone (ignoring preclusion by GCs), the SSA likelihood ratio is

\\\[\frac{f_{n,h}(4.5  Gy)}{\int_{5  Gy}^{L_{max}} K(L) \cdot \int_0^L f_{n,h}(t) \mathrm{d} t  \mathrm{d} L}\\\]

Where \\(L_{max}\\) is the maximum habitable duration, and \\(K(L)\\)is the 'number' of planets habitable for \\(L\\) Gy.  

![](https://lh3.googleusercontent.com/KsIl_7wg1HrS4utk7dzSAy8jNSNJ9F1wY83WZ21TuQDagzTtehW4xwu8gWxAszRz8rqGIxNRmgnsO0b9kZaMsBoyk68uXop0sM8zEHXS4X3De3g-iMgSJ6nHzaAVmYtq7p9nlPlE)

The SSA \\(R_{ICs}\\)likelihood ratio for when there are two types of planets of equal number: one type habitable for ~5 Gy and another for 100 Gy. 

If we believe \\(L_{max}\\) to be large, then the likelihood ratio is maximum at \\(n=1\\) and is decreasing in \\(n\\): if advanced life is hard then it will appear more often on planets where it has longer to evolve and increasing n makes life harder, so decreases the total amount of advanced life and increases the fraction of life on longer habitable planets.  The reference class \\(R_{ICs}\\) converges to \\(R_{5  Gy}\\) when decreasing \\(L_{max}\\) to 5 Gy,  and one updates towards \\(3 \lessapprox n  \lessapprox 8\\). 

To summarise, the following are ‘compatible’

*   SSA \\(R_{5  Gy}\\) & large \\(n\\) & any \\(L_{max}\\)
*   SSA \\(R_{ICs}\\) & small \\(n\\) & large \\(L_{max}\\)
*   SSA \\(R_{ICs}\\) & large \\(n\\) & small \\(L_{max}\\)

Hanson et al. write  

*If life on Earth had to achieve n “hard steps” to reach humanity’s level, then the chance of this event rose as time to the n-th power. Integrating this over habitable star formation and planet lifetime distributions predicts >99% of advanced life appears after today, unless n < 3 and max planet duration <50Gyr. That is, we seem early.* 

That is, to be early in the reference class of advanced life, \\(R_{ICs}\\) , we require large \\(n\\) and large \\(L_{max}\\) which we have shown are incompatible.

Appendix: Varying the prior on \\(L_{max}\\) 
=============================================

The SSA \\(R_{ICs}\\), SSA \\(R_{all}\\) and ADT average updates are sensitive to the lower bound on the prior for \\(L_{max}\\). When there are no GCs (that can preclude ICs), human civilization’s typicality is primarily determined by \\(L_{max}\\): the smaller the more typical human civilization is. If \\(L_{max}\\) is certainly high, worlds with GCs that preclude ICs are relatively more appealing to SSA.  

Here I show updates for variants on the prior for \\(L_{max}\\), and otherwise using the balanced prior. Notably, even when \\(L_{max} ~ \mathrm{LogNormal}(\mu = 500  Gy, \sigma = 1.5)\\) which has \\(P(L_{max}<10  Gy) = 0.3\%\\), SSA \\(R_{ICs}\\) gives around 58% credence on being alone, and has posterior  \\(P(L_{max}<10  Gy)  = 55 \%\\). As seen below,  increasing the lower bound on  the prior of \\(L_{max}\\) increases the posterior implied rate of GCs. 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Implied posterior on&nbsp;<span class="math-tex">\(\# N_{GC}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Posterior on&nbsp;<span class="math-tex">\(L_{max}\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">SSA&nbsp;<span class="math-tex">\(R_{ICs}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/4NAjnBcDnJzx_rXYo0je0IoonL2Z_K2yvL2PQNp0wneBRpeCYY2SnIWIUm0H4isMM-TIVOfx9wGMUix_5o-CbEAJ-65rFVk2LeiV-TZwr9rVUeumeCK7jtypwlnbXHbyOvNLSLqJ"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/qJIODJMMAEOHzBjf8VMfAmhLn0iFYTRYj3l8bMZtzXgrJuG9QpwiY-VMgD7L0Ec1JtEMJSGhcDkip-29BU7bUGEfhcjWuGTHzhpoW964OMDxLmmVOfEMpsW5awRyHZCXKxGd36cx"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">SSA&nbsp;<span class="math-tex">\(R_{all}\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/VKX5WiKeh_5lcfqJ1wbRCVQ2u74snuiiFWUphP1Wz6awTgMI4A-6AroY_04uVNZdFvKp5MlvuTwyYcqIf1oHHOusOg_hdXADW-zS12EJ4EDooKBA29uEgw-YMy3X_neIFgfKQZqp"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/oaDTh94AzIC8oYp7Nru__zwTC8hvKsAj43iBw8lZNEo_Nw21fIVkl-fBjtHRabeApS-H8_LyLta_AX8El5IUa3DJL5IkqKeYqhYCBZy8ddO2nYLryXG8N3z28BAkvP3SHwOBgE3f"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">ADT average</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/I1SO5P50XCXTZ-0bGqPqb84HhwrJSymIkB9HZIfU9bgWmiok95aZOxxhru2MHreN3dcFrlcCDJP9752gYyMhLgUab_efZ3OtZVlVRGbpdHTC3N45JbTMIqvOmIrDCF2ZdXFrDP36"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/PqikO1LD92Co2rD4i7M-tzIQHybQkq8EODkQ2FOuzz4d-tfgCPyVxYH5UOWKXvVyt366HGyoWu7dHXZscNWEJb0VYE1Lj5xHunKDw5iX9WvFIKJCbWoJ9gB0sE1RfSJnmlQ0wv8a"></figure></td></tr></tbody></table>

  
  
 Appendix: Marginalised posteriors
========================================

The following tables show the marginalised posteriors for all updates (excluding the trade and conflict scenarios).  

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/6tqnfwIuaMCXs25wSJajvdW71bDNTbZ0CLpxHnGMrRosRKFnFt60fbRH4rDyTBeUbCAsnko24HsuMUyV0zqLE4th-syeL7EjjdgpLGfuBgJ6oxV7oRRUWC7a5BOzFBXrmxckgbBo"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/mZSNHJ9KusTvg5sqb1yXliOr9Kc2O8q_gh1uR0Wi1Vu3fAYo6r_-zALXMtqZwX4UHZH_3D50FzCf9CmkFDrkukh6pq_fkgaWjdD8z1ptQ930o2IMtwJtOYSiaX2K24wonhFN9jve"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/nMa7TxI8f2DSbiX9zM3M1hYXO1j61BX11jWKGBnaNhVn9ZhTf-20nJp0DvnZDdg4nwwjoXxgHcsHvWYATuDUMhGjT968sJpuYALDPDSzzBffLPCYRnuAotQyxW8hYEWfbVrxJG8n"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/omKN0ctneHoBCv5D8ZA5-0184d5e_gYQFrzilLg4Nozd29_yCBDSwtsLfFSmQeEvKxnqGcFSKGdg27Tv-GrkcgFQyHfykIKsTXNUchoj_eGbz2MQU-4VWhvqKu_LLC3ZVLr94osc"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/89A1-B0IDZc9JshPEUn6oLJxN-dl1_eIIheDbIj-dm-WNK3Fj2x19ZRz5pXm19XrzGF7VG2ALRRdULuMYrPAMNKdtB2HnNCFzIqwfR7IwUAogm2H07c-snWGlumCMApMmiz6rYKm"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/00x8P9HTKYApaCXJxgvyxTd6-nzHtV7BSUlf-fk0rHtxp2Ft7f55qKyXgjPc6BpmqpodRmvpN71cwx21UDfxN4RpPvKQScKuYdXFZS9TxMWJ6yu0-xe5NkfBu631-hyJ0t0_egCD"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/RNgv-swXbQf5OalhW_1-qaodVfXUCfcz7cGQjW6rxgYYuHQwZO7hMhC3nD6ntIOm8yvZIfhjHXfGRNOKceaQxh3t78ZSZem6uyerzP5iKL7aFZL7pxH4l72Zw9vxundO-7wMiyyc"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/xH-Zlxh5Ps4VXJ2nVPI0Nr7JBwy46oPOchjPswxcgMHUNyxs1FKTogeTBX1P14dvkZRFZatvQ9RhwS-20sd0fPjGJec_--juLCHyH1Uh3S0_7fQLAxd08OtMAItl0yUtDtsKZCjf"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/0fTltqehRHrdQ6xRKCTDC0ZXWxAOt9CIK8zQy8gQMH_EQ-NjJoQWRRlkmOgOAKk1u8xBIb03z0R9kPFrqh8_x7AVyWLiChnqrz-HzL2g63cp-7uVltqfMzMKjCUbWYf_SrNe3mCL"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/ha9Pgh8KzpSNgjXrZXSOiVPrAfwF4W6ri1a-PAmDwCuKZDIhGFQG0ua0w8vzemJ5XN_YWfljxbLjGfqTb1HkK8OwxHyBAma_vV5-tpJGxAPlCA-3gr4Foupo6NIzzbthW_T4NiRm"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/j1FMRLmfGzRoLTVHNjDd9f_Wtku6OfbrMfFB8L6EhA4-GIbnitGbtm7HX4G0mCiEy9HU4CqDEAhJVnlV6fnRuzRFaRP0Omw-3jDlxjBJ7d2XkoWl8ttv8quba8pLJoVzH2T3oOqs"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/lI95cZAXJAiS1ua5sAzEKp5BKWjVM9yRP6LbJKq-xyQbX1Nf6IEa6RObKQ1z9rabsYph8022gmd5rV_rHBDsKt-3TR_XkLqbC1EARR1T86kUqgjX1W1wRtC2UD6r1JSRzoj30iHf"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/xzMuI9bCv1WlUIqQ4A07sAgW0h08adkvouu47ozRR-Ma9EUqSdB5J3M45kakjwylML73mALyFpLwQ8aQrAT-0-iAAv5wKNlVrpNEXzL4IHnVLkUIhUjAd6soT-60hK4D3QDvFUHs"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/Qon-_vPQyXi1KHjQ8pmXFUV1pH2skIGwxS1kjNseIoFpX8t136rkDs1LExfagRvPRVLaH0XipVR37pNRMcMbSUh6CAoxzsV2OeC9BvXnYZ6q9jRvyBfgknJACbDg93jfdtZvP2fc"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/TnAD4uwJYyE6kYk5LM26o92EOM2nQ-Rq8pzGQ9DDKHu6hgBwHB11FCK9mKDYCSP9daRl6NkwIfZjyn2kUWmGlD2XKaRGKWpuUIrLP-pX61ZsHHh1MDVj8Cc9fF6X4VmRXcdCSAYb"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/7kIMteIX7sV3NIVFCigLA5vgfdCrzqjNiOOsmiKwGJaGezYiL-mL_sXTGnrXToJccKFf_Xo8_wYbCtHYm0OboJxyPPrWrRiNtmIlgofYBb5lJxdO6QaET0sabFBFNb9ZDeb22Z5Y"></figure></td></tr></tbody></table>

  
 

Appendix: Updates from uniform priors
=====================================

I show that the results follow when taking  uniform/loguniform priors on the model parameters as follows:

*   \\(n \sim \mathrm{Uniform}(1,30)\\)
*   \\(h \sim \mathrm{LogUniform}(0.1   Gy, 10^{40}  Gy)\\) *not* conditioned on the value of n
*   \\(w \sim \mathrm{LogUniform}(10^{-30}, 1)\\)
*   \\(L_{max} \sim \mathrm{LogUniform}(5  Gy, 20,000  Gy)\\). I also run with \\(L_{max} \sim \mathrm{LogUniform}(30  Gy, 20,000  Gy)\\) below
*   \\(u \sim \mathrm{LogUniform}(10^{-10}, 0.9)\\)
*   \\(f_{GC} \sim \mathrm{LogUniform}(0.01, 1)\\)
*   \\(v \sim \mathrm{LogUniform}(0.01, 1)\\)

Which give the following distributions on #NGC

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/wvKcVKy8U4aZ8cubuplrhmcK-8twYrp3ffWK5imitaEPl1ziCzWPT1zSgZq_eTGi4FASHKCuvXRM1KHe6v13qxT1ddf3twIZj8MnWqTGLs4IpaMWl5zCrZlW7EGBo_I8aj37WkQK"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/eXYn6w47GDp_yCKuKSUYNHRGICraE866tbk7ZBjBtv4xidvybbNK0QtEBe5WSGCaoPS0vIA4T7IdLfZcgGVnfygDuFliwmdKCFBWg96qHd2JgXPYDbsSCVBIlnCt0oHKfZi6u44z"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/ysu-db08bbjavQeFCNrus9OOOmqL52KlI_FmQG1jP0ncg-XaabdBz4t_GV-txeHApHseVVx7zuK9EN7k6JonXm5Wo0OQEDTwXGaxW_iwd2xSicW6oodaCx6_9xHvRX7zDZXIheX7"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/V07BbFKk3Fdin7dQ3AOcXdXKIYbhlTcKX4fOuv04p4lmxYl6O9ubUOQygF-qj24ooBcYZsB6cTaT5m5fUUrqK_dxMUV8jx0M9d_MZD2qbD-DwYEsEQLjEVdE-wg6uoU_DSJMsyZ5"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/XKOPfA-UuReyH5LUH27l5rDpjI9uSUFDQ-yc3sf7CD_fpF0G1-Fo8H5ZN1r_UJTLbYvF-UROH6e738v4jvAXTBsaC8KlE099UmTRIbNz_XKpJeypE5n3VT0jZaHDTcHqmfzmfjXX"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/m1BWJn-eES6wuZPsPAWFIUIUj7ZTm9cxyKXpcnXkzZaGuNXYIfoUxC_OjpZF4_C3Zf9aVieCK638QoL_1Kdju10nr2pvlCvRDot8stkHJUA4hiIHoeqWunGiil-GjFhkiwNXCac_"></figure></td></tr></tbody></table>

  
  
  
 

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/6oRGMhTWIRJq4UflvwIUytFaHJeF87mjI_o39b2jM_X5STa1DjOtJNuPzDgMpxBieNZm_AdbJ8H8HspRbcIDUkxQJlm7KCCXT9X_A7Hv8gAshkIhc3mIUcdSsqC6uNdmqikCxkGg"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/lvIxAj0bmcgogNZT5SHJT1YHCNnw5ZsBE36ESibh0VA7-EmEWbQx7jD-0KwvWceuQg6IT0z-1k-CFLg0RvEm7aGxV1vGH_m4xD81Nie9cmLpnvBUhizL5oxFktgMeBH5GszfYkZM"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/69ZYu4KcN0gUXtW2OJs_peJs9q45yxAlHte54Ub0wXg1yq44lJ6siuQIjq9Lb0-VArXaL0nwTALcTtgwYWOLFX7ka-FMqWrZG82AihQA6J2u0GBeBwIrz3ia5gdm3Se5m45WMTWh"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/dBo1fGBlSNXC7wMUEmSdrcDJcTC1L0Kxh7mpeLvw6UYIyv9mXDvahGM2zpoI2GSzpjATUZ7v9qVApHhRFS8j115Nwa8cLUaAeff6sYoOQUZ-mN6W7T3wuek1t0l66cJbXtalsvw3"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/tbgbBgiX_exTdTNmBvqaS60BgTFpR1E0Epz7RaKsYrNeIEPTkrJwGnFnQRk1COiqDynxGrsKDKN1P2A2AiwSbBqrHPfQysherZF81gT1IKdXxW7zG2_tDIMwf-wr5l6VJLgeO2sE"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/e_YfltUncJQ3ix0X6g8t9LlZH0Aqkm_4aCOE-KZSDdrX6jdRDkEan9PcIJzAHXBVVwd2U4xD0ufHB2AcvBezqiUZOHE9exf56I2aYsgAkS1kzQFS_lDdCF4Qcc6r4cYTyaMpjMe9"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/zFPCtYSuK3j3B14datNce-_wnarp-3FlrSJ4YpiOQDTg9oip4GalIGgXHd2-XkOGUz0mCbMro4TFR12zQCdu17_6yL1IbGQnzDJ1VKkiGWa4mbtthATSByHHhJa4Cm5zyK4w3R0u"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/XJnahKotRgfsEfjyPNpw7moMS1BEyMASpNcSHHUdhAda88ZsP-Z1_nPh9Bzss3YUQSJt5ASD27Gl9xBah4Qa6Rh-lQECJgnn73JVnIvNsW_DUGrIxwAs6JWcHv_2UeB1F9sD_fM4"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/4goUYzLD8gYiqoDIgyHeuEYc5IBuTWPVoGNVPsaNP9ol1TKM1Dr2CIoouw8EVScgL32JoPM5HMfCwmGgq5oXrPFZUV1bQcvuCpRsmyqgv5LMPBDyxDzbB6PWKOM3wG8SHEz4dp6w"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/NYeHElPeVW8ZXOgGaLHg0vWvFTQNR12hpWwQw4_tEEhLfpxWGBAiZPjLCN2X0ysjhvaU9W9P9ZW_-Sn7wcfY8wtb9O7MdQpcQk5iMppMs4aW8Rh1tFJ9P1G66gxSyyHlU-4ZG8pR"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/9yJgjJqLmt6JmNwECmKsVVQFQNFt9hypsxZSd6EO9R1mkN1MabAz44JPvC88OHxG8J85XzmdS_BUeyQiRIbQn7RmLJJRFzcwuM_9pR8bGBUiX7iRZ43OsFx4wSr-2T73sgHfkmLw"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/5fRBvhplUHDfZG29qMPDAz8aWPTNKEmfRwmQwpLL1b4CEbTYNrgGh22GHceaMkQANU7MAso7VyGj9CKH3TCcb4LI_EQysfgh2NvVnMceyvwtUAhy1nUShy831lW_ve0YeevdKVu1"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/dGOvQM0sEO2PXGwrTF1hArDIPi9oAWLpBbztUAebBIXNp1ErMS3Zww4F25cI78wz4R5kfvloxXaC3DHnxaNvrQQ70FcZXUV4pxH--NusZJ8vgGvQmeSQSBmmG-cnQy2OifW6LFI1"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh5.googleusercontent.com/1MmldkGHnkHgvx4G4rUQwYNM3l09EByiYqIsds8tohQCumh-HhEz6atDAkBQcjXY3jyVK-7MAvE60Z1EkHDQ_RrKVrpH4wOy4R3YboovbGZbXOzlIy6JRNvp0rE-pi3a3yhBrUHI"></figure></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh3.googleusercontent.com/m9TPs4w1JO1qzM62j9FdPWBQzlNbNvJOu-bILYMKesRgcv8iYdNdGj1MT-EhHTdLkC04WTPm9AfGN_kEiIj7uEeLHXQVr0ZedTcayr3y6XjfK9WTalJUsS3H6p-orAI5_b3kTJou"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/LvUwJeeR0YcWTCBCjpjiE3PWs8cn8oTvFAtKbeokXErmMibykEH0UW_UzxNYm2DY5P_z0-7ncZDC1fx9J3O25Xqtnuycays8S-iSmdilkkzN1YYdf1XqmUYbwjmybESv1oITE4Jv"></figure></td></tr></tbody></table>

  
  
 

\\(L_{max} \geq 30  Gy\\)
-------------------------

This takes the same (log)uniform priors, but with \\(L_{max} \sim \mathrm{LogUniform}(30  Gy, 20,000  Gy)\\). The SSA \\(R_{ICs}\\) implied posterior on being alone in the OUSV is now just 59% from observation \\(X_c\\), and 40% from \\(X_v\\).

<table><tbody><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_c\)</span></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><span class="math-tex">\(X_v\)</span></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh4.googleusercontent.com/3tohrbMDhNWM_zD-2A5toDKyo8udE3gI6lZsfSYuf1uUzsUhHuKb-tUKIT7To_22CDKUj8-aOSXLBGh6VkVAdstau5jJcrk1uQQSbfG2XecW-6q-JkF3WrjJgzqqg1b0wtRNKp2R"></figure></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><figure class="image"><img src="https://lh6.googleusercontent.com/EHfzXojQEzCgzB-Vsk1gKetCuuU8cVGhoWB2Ynk2T51w4Ihpj7mKTOLUOqq4I4mAu_YxwnYSblspnyZJLuu0c0oSV8291_u7PyoUWEbet8ZWg9DMNxlEIBb51Zlb11YX6FBZTRrJ"></figure></td></tr></tbody></table>

  
  
 

Appendix: Derivations
=====================

Currently in [this Google Doc](https://docs.google.com/document/d/1J19KBdGB14_rHinrgLKSt6UfyBN-0cDagdfEQHfvoq8/edit?usp=sharing). Will be added to this post soon.

Appendix: Vacuum decay
======================

Technologies to produce [false vacuum decay](https://en.wikipedia.org/wiki/False_vacuum_decay) or other highly destructive technologies will have a non-zero rate of ‘detonation’. Such technologies could be used accidentally, or deliberately as a [scorched Earth policy](https://en.wikipedia.org/wiki/Scorched_earth) during conflict between GCs. Non-gravitationally bound volumes of the universe will become causally separated by ~200 Gy, after which GCs are safe from light speed decay.

The model presented can be used to estimate the fraction of OUSVs consumed by such decay bubbles. I write \\(f_{VD}\\) for the fraction of ICs that trigger a vacuum decay some time shortly after they become an IC. More relevantly, one may consider vacuum decay events being triggered when GCs meet one another.

![](https://lh5.googleusercontent.com/nk7CtB0oBPRJup55i_AHaqsM0E-I4rYy-DlBa3aGXbosN5yEEJ1qMqBgc9ajbhj8aeshxNu4Z4KdKMznD-qmFDyAnBps4vP2CNK2pWHQAJa-lVHeaElNKxWTAzPxb7cYO_I1ypT3)

The fraction of OUSVs inside vacuum decay bubbles for varying \\(f_{VD}\\), the fraction of ICs that trigger vacuum decay bubbles that travel at \\(c\\).   
 These plots have \\(n=5\\),  \\(h=100  Gy\\), \\(d=0.5  Gy\\),  \\(w=10^{-5}\\), \\(L_{max} = 5  Gy\\)\\(u=10^{-6}\\) and \\(v=0.8c\\) . Even for  \\(f_{VD} = 0.001\\), around 50% of the OUSVs on average will be eventually consumed by vacuum decay bubbles travelling at the speed of light.

Of course, this is highly speculative, but suggestive that such considerations may change the behaviour of GCs before the era of causal separation. For example, risk averse or pure time discounting GCs may trade off some expansion for creation of utility.

One could run the entire model with \\(f_{GC}\\) replaced by \\(f_{VD}\\). SSA \\(R_{ICs}\\) supports the existence of GCs for \\(L_{max} \geq 30 Gy\\)  and so would similarly support the existence of ICs that trigger false vacuum decay as a deadline. 

Appendix: hard steps and the ‘power law’
========================================

As mentioned, I model the completion time of  hard steps with the Gamma distribution, which has PDF

\\\[f_{n,h}(t) = \frac{1}{\Gamma(n)} \cdot \frac{1}{h^n} \cdot t^{n-1} \cdot \exp(-t/h)\\\]

When \\(t \ll h\\), \\(\exp(-t/h) \approx 1\\) and so \\(f_{n,h}(t) \propto t^{n-1}\\). That is, when the steps are sufficiently hard, the probability of completion grows as a polynomial in \\(t\\). Increasing \\(n\\) leads to a greater ‘clumping’ of completions near the end of the possible time available.  

![](https://lh6.googleusercontent.com/aZZ9FuIwUF9pUbwljcxcOAQp2J-XbEvPMRljA7A76GKBsj_BJZ7JTEY8rIevNvkG6yINiRj8EgVYCrdV0MXBKIZrIv8OMISb89v9WgZIzZEQmUREMnN-YhwV4jSLnvaL9AgCDl87)

The distribution of completion times for \\(n=1\\) and \\(h=10^{10}  Gy\\). The PDF (red) is constant,  CDF (blue) grows linearly.

![](https://lh6.googleusercontent.com/dHzLGql2kKshd3RiajiF6zsAmBvKk-kRZwRb-IfHiQlgGoSM1CJib0bWiY-7eZJx84cpDV4H-7XzzkMqdkXN8MtiJdKgUStJg7R_BmiLM_GssEJjoIvThbXeufnryoe0zPhsPr_i)

The distribution of completion times for \\(n=6\\) and\\(h=10^{10}  Gy\\). The PDF (red) grows approximately \\(t^5\\) and CDF (blue) grows approximately \\(t^6\\)

When hard steps are present, it also means that longer habitable planets will see a greater fraction of life than shorter lived planets. For example, a planet habitable for 50 Gy will have approximately \\((50  Gy/5  Gy)^n = 10^n\\) greater probability of life appearing than a planet habitable for 5 Gy. 

For anthropic theories that update towards worlds where observers like us are more typical -- such as the self-sampling assumption -- increasing \\(n\\) while allowing longer-lived planets makes observers like us less typical.

[^m6rn08cfdd]:  With either the reference class of observers in intelligent civilizations, or all existing observers  

[^cppszal687h]:  This probability is conditional on the fact that there are no GCs for us to see already. The true number is then much higher if one believes that we might just not have seen some already visible GCs. 

[^rdoqntdd4p]: As our cosmological horizon is increasing, I fix the definition to be the volume of observable universe now 

[^t3u4qxihtp]: A fuse step is one that has a completion time similar to the completion time of a burning fuse. The completion time could be modelled with a (truncated) normal distribution with small standard deviation and mean greater than zero. 

[^nx2qv7qcmxa]:  I show the validity of this approximation in the appendix 

[^jki3zw8k1q]: $\bar{L}$ in Hanson et al. (2021) 

[^ds3fv9p5ddl]: $L_{max}$ is used to upper bound the distribution of habitable planets, so could be better thought of as the 99th percentile (say) of the distribution of habitable durations. 

[^54475r04cr3]: I’d recommend Stuart Armstrong’s post Anthropics: different probabilities, different questions for discussion on this point 

[^3116hhzczb]: This assumes that the cosmic zoo hypothesis is false 

[^ctrnvnfzes6]: This is $1/R$ in Hanson et al. (2021) 

[^y6gntc2kae]: Forgive the tautological notation 

[^p9lo29axtm]: To avoid problems with infinite observers, I consider only observers within the large finite volume (LFV). Strictly, I am using SIA with the reference class of observers within this LFV. If the LFV is large enough, we get the density of XOMs in the Level I multiverse due to its repeating nature. This is similar to the approach discussed here. 

[^uqpv44wcira]: Originally referred to as SSA+SIA by Bostrom 

[^5avasm9ywis]: Bostrom (2002) gives this as the strong self-sampling assumption. 

[^iryy914bq6m]: Strictly, one can use a larger reference class that includes non-actual (merely possible OMs) - this reference class gives SIA 

[^8ytf0d56lvx]: I take $t_L$ = 200 Gy, though in most cases GCs' expansion finishes sooner 

[^8beh54v0yw9]: The distribution has almost all probability mass on 'no GCs will reach the volumes that a human civilization could expand into' 

[^vhttcld43ib]: This assumes that the probability a GC emerges from Earth is equal to the average fraction of ICs that become GCs. 

[^9fh8icqnlxk]: When using SSA $R_{min}$ my prior credence in worlds with zero copies of me is zero (and so have zero decision worthiness by both the first term and also the second term). When taking a fully updateless approach, worlds that contain zero copies of me are given zero decision worthiness by the second term alone, even though I keep a non-zero prior in the world. 

[^ihxyeq9n8gg]: Taking $\# V(t_{now}, t_L, v}$ in units of AUSVs 

[^shmz0rflla]: Though using a non-causal decision theory, gains through trade may be possible with GCs outside the affectable universe (e.g. Oesterheld (2017)) 

[^r15oq5lvgwe]: This volume itself may be too large: one may instead consider the volume that we can receive a broadcast to and hear back from 

[^xe93khwxoh]: The following constants, which wash out in normalisation, are not considered: (a) the average number of OMs per IC (b) the number of AS (on average) created by GCs when the number is ‘fixed’ (c) the number of OMs in created by GCs per fraction of OUSV they control (d) the number of OMs created per fraction of an OUSV given to creating AS or HS 

[^py53nr1ho7g]: For example, one may choose to use the ratio of resources of agents with my values, to all agents as a proxy of value to disvalue