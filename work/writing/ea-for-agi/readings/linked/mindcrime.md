---
title: "Mindcrime — LessWrong"
url: https://arbital.com/p/mindcrime
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2 stage-1 readings, e.g. s-risks/s-risk-faq; Arbital entry on mindcrime, core to AI welfare/digital minds and s-risks"
---

x

This website requires javascript to properly function. Consider activating javascript to get access to all site functionality. 

Mindcrime — LessWrong

[Main3](/w/mindcrime)[Introduction4](/w/mindcrime?lens=mindcrime-introduction)

# Mindcrime

Edited by [Eliezer Yudkowsky](/users/eliezer_yudkowsky), et al. last updated 19th Feb 2025

Requires: [AI alignment](/w/ai-alignment)

"**Mindcrime** " is [Nick Bostrom](/w/nick-bostrom)'s suggested term for scenarios in which an AI's cognitive processes are intrinsically doing moral harm, for example because the AI contains trillions of suffering conscious beings inside it.

Ways in which this might happen:

  * Problem of sapient models (of humans): Occurs naturally if the best predictive model for humans in the environment involves models that are detailed enough to be people themselves.
  * Problem of sapient models (of civilizations): Occurs naturally if the agent tries to simulate, e.g., alien civilizations that might be simulating it, in enough detail to include conscious simulations of the aliens.
  * Problem of sapient subsystems: Occurs naturally if the most efficient design for some cognitive subsystems involves creating subagents that are self-reflective, or have some other property leading to consciousness or personhood.
  * Problem of sapient self-models: If the AI is conscious or possible future versions of the AI are conscious, it might run and terminate a large number of conscious-self models in the course of considering possible self-modifications.



# Problem of sapient models (of humans):

An [instrumental pressure](/w/instrumental-pressure) to produce high-fidelity predictions of human beings (or to predict [decision counterfactuals](/w/decision-counterfactuals) about them, or to [search](/w/search) for events that lead to particular consequences, etcetera) may lead the AI to run computations that are unusually likely to possess personhood.

An [unrealistic](/w/methodology-of-unbounded-analysis) example of this would be [Solomonoff induction](/w/solomonoff-induction), where predictions are made by means that include running many possible simulations of the environment and seeing which ones best correspond to reality. Among current machine learning algorithms, particle filters and Monte Carlo algorithms similarly involve running many possible simulated versions of a system.

It's possible that a sufficiently advanced AI to have successfully arrived at detailed models of human intelligence, would usually also be advanced enough that it never tried to use a predictable/searchable model that engaged in brute-force simulations of those models. (Consider, e.g., that there will usually be many possible settings of a variable inside a model, and an efficient model might manipulate data representing a probability distribution over those settings, rather than ever considering one exact, specific human in toto.)

This, however, doesn't make it certain that no mindcrime will occur. It may not take exact, faithful simulation of specific humans to create a conscious model. An efficient model of a (spread of possibilities for a) human may still contain _enough_ computations that resemble a person _enough_ to create consciousness, or whatever other properties may be deserving of personhood. Consider, in particular, an agent trying to use

Just as it almost certainly isn't necessary to go all the way down to the neural level to create a sapient being, it may be that even with some parts of a mind considered abstractly, the remainder would be computed in enough detail to imply consciousness, sapience, personhood, etcetera.

The problem of sapient models is not to be confused with [Simulation Hypothesis](/w/simulation-hypothesis) issues. An efficient model of a human need not have subjective experience indistinguishable from that of the human (although it will be a model _of_ a person who doesn't believe themselves to be a model). The problem occurs if the model _is a person_ , not if the model is _the same person_ as its subject, and the latter possibility plays no role in the implication of moral harm.

Besides problems that are directly or obviously about modeling people, many other practical problems and questions can benefit from modeling other minds - e.g., reading the directions on a toaster oven in order to discern the intent of the mind that was trying to communicate how to use a toaster. Thus, mindcrime might result from a sufficiently powerful AI trying to solve very mundane problems.

# Problem of sapient models (of civilizations)

A separate route to mindcrime comes from an advanced agent considering, in sufficient detail, the possible origins and futures of intelligent life on other worlds. (Imagine that you were suddenly told that this version of you was actually embedded in a superintelligence that was imagining how life might evolve on a place like Earth, and that your subprocess was not producing sufficiently valuable information and was about to be shut down. You would probably be annoyed! We should try not to annoy other people in this way.)

Three possible origins of a [convergent instrumental pressure](/w/instrumental-convergence) to consider intelligent civilizations in great detail:

  * Assigning sufficient probability to the existence of non-obvious extraterrestrial intelligences in Earth's vicinity, perhaps due to considering the [Fermi Paradox](/w/fermi-paradox).
  * [Naturalistic induction](/w/naturalistic-induction), combined with the AI considering the hypothesis that it is in a simulated environment.
  * [Logical decision theories](/w/logical-decision-theories) and utility functions that care about the consequences of the AI's decisions via instances of the AI's reference class that could be embedded inside alien simulations.



With respect to the latter two possibilities, note that the AI does not need to be considering possibilities in which the whole Earth as we know it is a simulation. The AI only needs to consider that, among the possible explanations of the AI's current sense data and internal data, there are scenarios in which the AI is embedded in some world other than the most 'obvious' one implied by the sense data. See also [Distant superintelligences can coerce the most probable environment of your AI](/w/distant-superintelligences-can-coerce-the-most-probable) for a related hazard of the AI considering possibilities in which it is being simulated.

([Eliezer Yudkowsky](/users/eliezer_yudkowsky) has advocated that we shouldn't let any AI short of _extreme_ levels of safety and robustness assurance consider distant civilizations in lots of detail in any case, since this means our AI might embed (a model of) a hostile superintelligence.)

# Problem of sapient subsystems:

It's possible that the most efficient system for, say, allocating memory on a local cluster, constitutes a complete reflective agent with a self-model. Or that some of the most efficient designs for subprocesses of an AI, in general, happen to have whatever properties lead up to consciousness or whatever other properties are important to personhood.

This might possibly constitute a relatively less severe moral catastrophe, if the subsystems are sentient but [lack a reinforcement-based pleasure/pain architecture](/w/lack-a-reinforcement-based-pleasure-pain-architecture) (since the latter is not obviously a property of the most efficient subagents). In this case, there might be large numbers of conscious beings embedded inside the AI and occasionally dying as they are replaced, but they would not be suffering. It is nonetheless the sort of scenario that many of us would prefer to avoid.

# Problem of sapient self-models:

The AI's models of _itself_ , or of other AIs it could possibly build, might happen to be conscious or have other properties deserving of personhood. This is worth considering as a separate possibility from building a conscious or personhood-deserving AI ourselves, when [we didn't mean to do so](/w/we-didn-t-mean-to-do-so), because of these two additional properties:

  * Even if the AI's current design is not conscious or personhood-deserving, the current AI might consider possible future versions or subagent designs that would be conscious, and those considerations might themselves be conscious.
    * This means that even if the AI's current version doesn't seem like it has key personhood properties on its own - that we've successfully created the AI itself as a nonperson - we still need to worry about other conscious AIs being embedded into it.
  * The AI might create, run, and terminate very large numbers of potential self-models.
    * Even if we consider tolerable the potential moral harm of creating _one_ conscious AI (e.g. the AI lacks all of the conditions that a responsible parent would want to ensure when creating a new intelligent species, but it's just one sapient being so it's okay to do that in order to save the world), we might not want to take on the moral harm of creating _trillions_ of evanescent, swiftly erased conscious beings.



# Difficulties

Trying to consider these issues is complicated by:

  * [Philosophical uncertainty](/w/philosophical-uncertainty) about what properties are constitutive of consciousness and which computer programs have them;
  * [Moral uncertainty](/w/moral-uncertainty) about what ([idealized](/w/idealized) versions of) (any particular person's) morality would consider to be the key properties of personhood;
  * Our present-day uncertainty about what efficient models in advanced agents would look like.



It'd help if we knew the answers to these questions, but the fact that we don't know doesn't mean we can thereby conclude that any particular model is not a person. (This would be some mix of [argumentum ad ignorantiem](/w/argumentum-ad-ignorantiem), and [availability bias](/w/availability-bias) making us think that a scenario is unlikely when it is hard to visualize.) In the limit of infinite computing power, the epistemically best models of humans would almost certainly involve simulating many possible versions of them; superintelligences would have [very large amounts of computing power](/w/very-large-amounts-of-computing-power) and we don't know at what point we come close enough to this [limiting property](/w/limiting-property) to cross the threshold.

## Scope of potential disaster

The prospect of mindcrime is an especially alarming possibility because sufficiently advanced agents, _especially_ if they are using computationally efficient models, might consider _very large numbers_ of hypothetical possibilities that would count as people. There's no limit that says that if there are seven billion people, an agent will run at most seven billion models; the agent might be considering many possibilities per individual human. This would not be an [astronomical disaster](/w/astronomical-disaster) since it would not (by hypothesis) wipe out our posterity and our intergalactic future, but it could be a disaster orders of magnitude larger than the Holocaust, the Mongol Conquest, the Middle Ages, or all human tragedy to date.

## Development-order issue

If we ask an AI to predict what we would say if we had a thousand years to think about the problem of defining personhood or think about which causal processes are 'conscious', this seems unusually likely to cause the AI to commit mindcrime in the course of answering the question. Even asking the AI to think abstractly about the problem of consciousness, or predict by abstract reasoning what humans might say about it, seems unusually likely to result in mindcrime. There thus exists a [development order issue](/w/development-order-issue) preventing us from asking a Friendly AI to solve the problem for us, since to file this request safely and without committing mindcrime, we would need the request to already have been completed.

The prospect of enormous-scale disaster mitigates against 'temporarily' tolerating mindcrime inside a system, while, e.g., an [extrapolated-volition](/w/extrapolated-volition) or [approval-based](/w/approval-based) agent tries to compute the code or design of a non-mindcriminal agent. Depending on the agent's efficiency, and secondarily on its computational limits, a tremendous amount of moral harm might be done during the 'temporary' process of computing an answer.

## Weirdness

Literally nobody outside of MIRI or FHI ever talks about this problem.

# Nonperson predicates

A [nonperson predicate](/w/nonperson-predicate) is an [effective](/w/effective) test that we, or an AI, can use to determine that some computer program is definitely _not_ a person. In principle, a nonperson predicate needs only two possible outputs, "Don't know" and "Definitely not a person". It's acceptable for many actually-nonperson programs to be labeled "don't know", so long as no people are labeled "definitely not a person".

If the above was the only requirement, one simple nonperson predicate would be to label everything "don't know". The implicit difficulty is that the nonperson predicate must also pass some programs of high complexity that do things like "acceptably model humans" or "acceptably model future versions of the AI".

Besides addressing mindcrime scenarios, Yudkowsky's [original proposal](/lw/x4/nonperson_predicates) was also aimed at knowing that the AI design itself was not conscious, or not a person.

It seems likely to be very hard to find a good nonperson predicate:

  * Not all philosophical confusions and computational difficulties are averted by asking for a partial list of unconscious programs instead of a total list of conscious programs. Even if we don't know which properties are sufficient, we'd need to know something solid about properties that are necessary for consciousness or sufficient for nonpersonhood.
  * We can't pass once-and-for-all any class of programs that's Turing-complete. We can't say once and for all that it's safe to model gravitational interactions in a solar system, if enormous gravitational systems could encode computers that encode people.
  * The [Nearest unblocked strategy](/w/nearest-unblocked-strategy) problem seems particularly worrisome here. If we block off some options for modeling humans directly, the _next best_ option is unusually likely to be conscious. Even if we rely on a whitelist rather than a blacklist, this may lead to a whitelisted "gravitational model" that secretly encodes a human, and so on.



# Research avenues

  * [Behaviorism](/w/behaviorist-genie): Try to create a [limited AI](/w/limited-agi) that does not model other minds or possibly even itself, except using some narrow class of agent models that we are pretty sure will not be sentient. This avenue is potentially motivated for other reasons as well, such as avoiding [probable environment hacking](/w/distant-superintelligences-can-coerce-the-most-probable) and averting [programmer manipulation](/w/programmer-manipulation).
  * Try to define a nonperson predicate that whitelists enough programs to carry out some [pivotal achievement](/w/pivotal-act).
  * Try for an AI that can bootstrap our understanding of consciousness and tell us about what we would define as a person, while committing a relatively small amount of mindcrime, with all computed possible-people being stored rather than discarded, and the modeled agents being entirely happy, mostly happy, or non-suffering. E.g., put a happy person at the center of the approval-directed agent, and try to oversee the AI's algorithms and ask it not to use Monte Carlo simulations if possible.
  * Ignore the problem in all pre-interstellar stages because it's still relatively small compared to astronomical stakes and therefore not worth significant losses in success probability. (This may [backfire](/w/backfire) under some versions of the Simulation Hypothesis.)
  * Try to [finish](/w/executable-philosophy) the philosophical problem of understanding which causal processes experience sapience (or are otherwise objects of ethical value), in the next couple of decades, to sufficient detail that it can be crisply stated to an AI, with sufficiently complete coverage that it's not subject to the [Nearest unblocked strategy](/w/nearest-unblocked-strategy) problem.



Parents:

[AI alignment](/w/ai-alignment)

Children:

[Nonperson predicate](/w/nonperson-predicate)

[Mindcrime: Introduction](/w/mindcrime-introduction)

[](/w/mindcrime/history)Subscribe

[Discussion](/w/mindcrime/discussion)

3

[](/w/mindcrime/history)Subscribe

[Discussion](/w/mindcrime/discussion)

3

Posts tagged _Mindcrime_

Most Relevant

11

76[Nonperson Predicates](/posts/wqDRRx9RqwKLzWt7R/nonperson-predicates)

[Eliezer Yudkowsky](/users/eliezer_yudkowsky)

18y

177

2

178[The AI in a box boxes you](/posts/c5GHf2kMGhA4Tsj4g/the-ai-in-a-box-boxes-you)

[Stuart_Armstrong](/users/stuart_armstrong)

16y

392

2

15[Mental Models Of People Can Be People](/posts/9dB54pBuDCkoedCSE/mental-models-of-people-can-be-people)

[MathMart](/users/mathmart)

3y

55

1

127[Thoughts on Human Models](/posts/BKjJJH2cRpJcAnP7T/thoughts-on-human-models)

[](/recommendations)[Ω](https://alignmentforum.org/posts/BKjJJH2cRpJcAnP7T/thoughts-on-human-models)

[Ramana Kumar](/users/ramana-kumar), [Scott Garrabrant](/users/scott-garrabrant)

7y

[](/recommendations)[Ω](https://alignmentforum.org/posts/BKjJJH2cRpJcAnP7T/thoughts-on-human-models)

32

1

46[The Aliens have Landed!](/posts/Hz5dFKTnyC7HqibSQ/the-aliens-have-landed)

[TimFreeman](/users/timfreeman)

15y

158

1

15[Superintelligence 12: Malignant failure modes](/posts/BqoE5vhPNCB7X6Say/superintelligence-12-malignant-failure-modes)

[KatjaGrace](/users/katjagrace)

12y

51

1

14[Is it possible to prevent the torture of ems?](/posts/6ssARXJut22DShdE2/is-it-possible-to-prevent-the-torture-of-ems)

[NancyLebovitz](/users/nancylebovitz)

15y

31

1

12[Theodicy and the simulation hypothesis, or: The problem of simulator evil](/posts/PbfFFs6koYqueaH8o/theodicy-and-the-simulation-hypothesis-or-the-problem-of)

[](https://philosophybear.substack.com/p/the-problem-of-simulator-evil)

[philosophybear](/users/philosophybear)

4y

[](https://philosophybear.substack.com/p/the-problem-of-simulator-evil)

12

1

2[A Models-centric Approach to Corrigible Alignment](/posts/fkCgjH6QHKu6xnjjb/a-models-centric-approach-to-corrigible-alignment)

[J Bostock](/users/j-bostock)

5y

0
