---
title: "Focus areas of worst-case AI safety – Reducing Risks of Future Suffering"
author: "Tobias Baumann"
date: 2017-09-16
url: https://s-risks.org/focus-areas-of-worst-case-ai-safety
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by s-risks/s-risks-an-introduction; concrete research focus areas for worst-case (s-risk) AI safety"
---

Efforts to shape advanced artificial intelligence (AI) [may be among the most promising altruistic endeavours](https://foundational-research.org/altruists-should-prioritize-artificial-intelligence/). If the transition to advanced AI goes wrong, the worst outcomes may involve not only the end of human civilization, but also astronomical amounts of suffering – a so-called [s-risk](https://foundational-research.org/reducing-risks-of-astronomical-suffering-a-neglected-priority/).

In light of this, Lukas Gloor suggests that we complement existing [AI alignment efforts](https://ai-alignment.com/) with AI safety measures [focused on preventing s-risks](https://foundational-research.org/suffering-focused-ai-safety-why-fail-safe-measures-might-be-our-top-intervention/). For example, we might focus on implementing safety measures that would limit the extent of damage in case of a failure to align advanced AI with human values. This approach is called ** _worst-case AI safety_**.

This post elaborates on possible focus areas for research on worst-case AI safety to support the (so far mostly theoretical) concept with more concrete ideas.

Many, if not all, of the suggestions may turn out to be infeasible. Uncertainty about the exact timeline, takeoff scenario, and architecture of advanced AI makes it hard to predict what measures are promising. Hence, the following ideas are not silver bullets; they are merely a first step towards understanding what worse-case AI safety could look like.

(Most of the ideas are not original, and many are simply variations of existing ideas. My claimed contribution is only to collect them, point out their relation to s-risk reduction, and outline what further research could focus on.)

Contents

  *   *   *   *   *   * 


# Redundant safety measures

In engineering, there are two common approaches to improving the reliability of safety-critical systems – [redundancy](https://en.wikipedia.org/wiki/Redundancy_\(engineering\)) and [fail-safe](https://en.wikipedia.org/wiki/Fail-safe) designs. Put briefly, _redundancy_ involves duplicating important components of a safety-critical system to serve as backups in case of primary component failures (e.g. backup power generators), while _fail-safe_ designs are specific design features whose sole function is to limit the extent of damage in case of a particular type of failure (e.g. fire suppression systems).

Similarly, we could attempt to make AI safe by combining many different safety measures that kick in if the system fails. A complete and watertight solution to the perils of advanced AI remains elusive, but we might hope that _at least one_ of many redundant measures will work, even if any particular one is flaky.

I’m not claiming that this is a good strategy for aligning an AI with human values. In fact, it [probably isn’t](https://arbital.com/p/nearest_unblocked/). But the strategy may be more promising for worst-case AI safety in that its goal is merely to prevent the _worst_ failure modes (i.e. those that lead to s-risks), rather than achieving a specific positive outcome such as [CEV](https://arbital.com/p/cev/). In other words, the key question for worst-case AI safety is how to ensure that an AI system will not engage in certain behaviors that might cause large amounts of suffering. For example, if we constrain an AI system so that a specific troublesome behavior is prevented, the [nearest unblocked strategy](https://arbital.com/p/nearest_unblocked/) – although not necessarily closer to an aligned AI – will hopefully be less dangerous in terms of s-risks.

Here are some examples of possible safety measures:

  * Hard-coding a rule against creating (large amounts of) suffering. Needless to say, this runs into a plethora of conceptual and practical problems.
  * Making sure that the reward function contains a “never cause suffering” component that is strong enough to not be trumped by other goals.1
  * [Training separate neural networks](http://prioritizationresearch.com/training-neural-networks-to-detect-suffering/) to detect actions that would lead to (large amounts of) suffering and if necessary shut down the AI system.
  * Finding correlates of suffering, such as the creation of new sentient beings, and making the AI ask for human approval whenever considers a potentially harmful action.



The crux of the matter is whether the AI _has an incentive to remove such constraints_. Since safety measures interfere with utility maximization, the AI would by default want to eliminate them, e.g. by rewriting its own source code. We can place our bets on the AI’s _inability_ to circumvent our safety measures, but not incentivizing it should be the [first line of defense](https://arbital.com/p/niceness_defense/). We don’t yet have a rigorous solution to this problem, but it might be possible to build safety measures directly into the utility function or goal system, so that the AI does not have an incentive to remove them.

# Tripwires

A _tripwire_ is a mechanism that shuts down or destroys an AI if it shows signs of dangerous activity.2This would involve deliberately introducing easy-to-find and tempting opportunities (“honeypots”) that appear to let the AI increase its utility by doing something “forbidden”, but that actually trigger a shutdown or self-destruct mechanism if acted upon. The hope is that the AI either is safe, i.e. steers clear of all forbidden activity, or that it triggers the tripwire and destroys itself.

For worst-case AI safety, we should try to set up tripwires that are tailored toward preventing the behaviors most likely to result in s-risks. We can (in principle) combine as many tripwires as we want, but two kinds seem particularly promising:

  * We could set up a situation where the AI can (apparently) gain a lot, but doing so would create vast amounts of suffering – e.g. via [mindcrime](https://arbital.com/p/mindcrime/) – as a side effect.
  * We could make it look as if the AI can gain power (e.g. escaping from its “[box](https://en.wikipedia.org/wiki/AI_box)” or gaining internet access) by extortion.



This approach is rather flaky in that a truly superintelligent AI might be able to recognize any tripwire of human design, and if so, would probably find ways to circumvent them. Still, it’s worth looking into tripwires as one of several approaches.

Research on tripwires could analyze in more detail how we can best implement them, which scenarios we should use, and how scalable the approach is in the face of increasing AI capabilities.

# Adversarial architectures

Paul Christiano [suggests](https://medium.com/ai-control/red-teams-b5b6de33dc76#.mwmg09sfo) adversarial training (so-called “red teams”) to make AI systems more robust against catastrophic failure. Following this approach, we could use highly capable3 AI to search for input situations in which the (new) AI might cause an s-risk. If the search fails, that’s evidence that the system is safe. If the search succeeds, we can incorporate the results in the next iteration of training processes. We can hope that this procedure is more reliable than manually trying to come up with tests that cover any possible failure modes.

Similarly, if we run several instances of advanced AI systems, we could [split them into](https://medium.com/ai-control/adversarial-collaboration-629092c83c74#.lw62lxkiz) “Team A”, whose goal is to come up with a plan or idea that convinces a human judge; and “Team B”, whose goal is to convince the human that the plan is flawed. In the context of worst-case AI safety, it would be especially valuable to have a third “Team C” that tries to convince the judge that realization of the plans would be an s-risk (and not just flawed in some other way).

Further research in this area could examine the practical feasibility and usefulness of the approach, come up with refined variations of the idea, or experiment with (simplified) practical implementations to improve our understanding.

# Detecting and formalizing suffering

To implement such safety measures in real-world AI systems, we need to be able to detect suffering (or proxies thereof). This, in turn, would be easier if we had a technical definition of what we mean by “suffering”, rather than vague philosophical descriptions like “a conscious experience of subjectively negative valence”. (See Caspar Österheld’s paper on [Formalizing Preference Utilitarianism in Physical World Models](https://arxiv.org/pdf/1504.05603.pdf) for an example of work on formalizing philosophical concepts.)

Even without conceptual progress, we could study the extent to which current machine learning algorithms can detect suffering (e.g. in images or text). For example, researchers at Cambridge recently [designed an AI system to assess pain levels in sheep](http://www.cam.ac.uk/research/news/researchers-design-ai-system-to-assess-pain-levels-in-sheep). (For more on this, see [Training Neural Networks to Detect Suffering](http://prioritizationresearch.com/training-neural-networks-to-detect-suffering/).)

Similarly, we could work on formal descriptions of classes of behaviors that are particularly dangerous. For instance, extortion could potentially cause a lot suffering, so it would be valuable to have a better grasp of how to [distinguish it from positive-sum trade](http://lesswrong.com/lw/39a/unpacking_the_concept_of_blackmail/). A rigorous definition of extortion remains [elusive](http://lesswrong.com/r/discussion/lw/hz9/countess_and_baron_attempt_to_define_blackmail/), and progress on this problem would make it easier to implement safety measures.

# Backup utility functions

Under the assumption that advanced AI is a general utility-based agent, Caspar Österheld’s [paper on backup utility functions](https://foundational-research.org/files/backup-utility-functions.pdf) suggests that it could fall back on a secondary utility function if the primary one “fails”. This secondary utility function should be more cautious than ambitious, with a greater focus on preventing worst-case outcomes such as s-risks. In this way, we might be able to limit the damage in case of failure of the primary utility function. For example, the secondary utility could be risk-averse in order to incentivize compromise, as opposed to conflict, with other agents.4

By expressing the different utility functions as conditionals in a single utility function, we can make it a direct part of the AI’s goal system, which might avoid the problem of bad incentives to resist shutdown or changes to the utility function.

Further research on backup utility functions could examine which simple goal systems would robustly prevent s-risks. Alternatively, one could think in more detail about how to test whether a utility function “fails”, or analyze how promising this approach is in comparison to tripwires or other measures.

# Benign test environments

Simple goal systems could also be useful in test environments. If something goes wrong and an AI unexpectedly “escapes” from the test environment, then we can’t reasonably hope that the AI would pursue human values. We can, however, try to make sure that the AI does not create astronomical suffering in such an event.

The crux, of course, is that the test environment also needs to be sufficiently complex to test the capabilities of advanced AI systems. Research on benign test environments could examine in more detail which failure modes are most likely to lead to s-risks, and which goal system and test environment can avoid these failure modes.

We could also try to sidestep the most delicate aspects of superintelligent reasoning – assuming that’s even possible – when we test (the first) advanced AI systems. For example, modeling other minds is particularly dangerous because of both [mindcrime](https://arbital.com/p/mindcrime/) and extortion, so we can try to set up the test environment in such a way that an unsafe AI would not model other minds.

# Acknowledgements

I am indebted to Max Daniel, Brian Tomasik, Johannes Treutlein, Adrian Rorheim and Caspar Österheld for valuable comments and suggestions.

#### Footnotes

  1. If the utility of other goals is unbounded, this requires an infinitely strong “do not cause suffering” term to work reliably. The approach is therefore more promising if other goals are bounded. Alternatively, one could use a moral-parliament approach where the anti-suffering faction has a significant share (maybe a majority) of votes.
  2. See _Superintelligence: Paths, Dangers, Strategies,_ p.137.
  3. The approach works best if the AI system used to find catastrophic inputs is more capable than the new AI that we’re trying to make safe.
  4. If such risk aversion fails to maximize (in expectation) what we care about, it is typical of how backup utility functions could be safer yet suboptimal.


