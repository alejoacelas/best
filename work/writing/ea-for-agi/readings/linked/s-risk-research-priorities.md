---
title: "Research priorities for preventing threats – Reducing Risks of Future Suffering"
author: "Tobias Baumann"
date: 2018-05-15
url: https://s-risks.org/research-priorities-for-preventing-threats
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by s-risks/how-can-we-reduce-s-risks; Baumann research agenda for preventing worst-case outcomes"
---

Agents that threaten to harm other agents, either in an attempt at extortion or as part of an escalating conflict, are one of the most plausible mechanisms of [how s-risks could come about](https://s-risks.org/intro/#How_s-risks_could_come_about). But how can we best prevent worst-case outcomes resulting from the execution of such threats? In this post, I will outline my thoughts on what questions we should work on.

Contents

  *   *   *   * 


# Improving our understanding of threats

We need a good understanding of game theory and decision theory to be able to reduce the risk of threats:

  * What are the most suitable game-theoretical models of threats (e.g. [Chicken game](https://en.wikipedia.org/wiki/Chicken_\(game\)), bargaining models, etc.)? To what extent are such models useful for predicting the behavior of advanced AI systems? More broadly, is existing game theory suitable for analyzing threats that could result in a worst-case outcome and that potentially involve advanced AI agents, or would, for example, fundamental assumptions or frameworks in game theory need to be changed first? (If so, how?)
  * What factors determine how potential threateners would choose threat sizes if they can either make big or small threats? (See [here](https://s-risks.org/heuristics-to-assess-the-feasibility-of-threats/#Further_research_questions).)
  * What additional dynamics appear if we consider a large population of potential threateners and threatenees rather than just threats between two agents?
  * Would threateners (particularly advanced AI) be able to precommit to executing threats? How could such commitment be prevented?
  * What circumstances are necessary and/or sufficient to ensure that rational agents abstain from making or carrying out threats?
  * To what extent and under what circumstances can extortion be countered by a commitment to not give in?
  * What are the best strategies for special cases such as extortion with visible source code? (See [here](https://arxiv.org/pdf/1401.5577v1.pdf) for related work on the Prisoner’s Dilemma.) 
    * If the agents are able to perfectly predict each other’s behaviour, is there ever a reason to go through with threats?1
    * How likely is it that these conditions hold true in the most important scenarios?
  * How would agents that adopt different decision theories like causal decision theory (CDT), evidential decision theory (EDT) and updateless decision theory (UDT) differ in terms of their behaviour regarding threats? How likely are advanced AI systems with those decision theories to a) make threats against others and b) be targets of threats?



# Prioritization

To find the best interventions, we need to understand what kinds of risks are most serious:

  * Are threats the most likely mechanism for how very bad futures could come about, or is it sufficiently unlikely that serious threats are made and carried out in the future? (This is related to the relative severity of [incidental and agential s-risks](https://s-risks.org/intro/#How_s-risks_could_come_about).)
  * What fraction of the expected disvalue of threats is due to 
    * retaliatory threats vs. extortion?
    * threats made by humans vs. threats made by advanced AI systems?
    * threats that target humans vs. threats that target AI?
  * What [empirical circumstances](https://s-risks.org/factors-of-extortion-scenarios/) are worst in terms of the number and severity of threats that are made or carried out?



# Practical interventions

In addition to improving our understanding of the above questions, we should come up with and analyze practical interventions to reduce the number and severity of threats that will be made (or carried out) in the future:

  * Do we even need more research or should we focus on finding practical interventions that prevent threats? 
    * Plausibly the most important factor that prevents extortion in our contemporary society is simply that it’s illegal. How can we ensure that there will be effective form of punishment to deter future agents from making (illegitimate) threats, especially in radically different empirical circumstances (e.g., due to the emergence of powerful AI)? 
      * How appropriate is current extortion-related law for that purpose, and how could it be improved?
      * How can we ensure that future society will disapprove of (illegitimate) threats to a sufficient extent?
      * Are such broad interventions sufficiently tractable?
    * How could we make the transfer of resources in case of extortion impossible or at least more difficult? For instance, how could we check whether an agent is subject to extortion before allowing a transfer of money or other resources? If this is possible, how effectively would it prevent extortion?
    * What are fundamental limits to these “hacky” approaches? Are there plausible scenarios where such hacks cannot be applied?
  * How can we promote the idea of systematically aiming to make ([illegitimate](https://s-risks.org/factors-of-extortion-scenarios/#Extortion_vs_retaliation_vs_trade)) threats less likely, and have more resources invested in this? What are the most cost-effective ways to alter empirical circumstances so that extortion is less attractive? 
    * Should we focus on interventions that make it less likely that potential threateners will make threats, or should we try to improve the reaction to threats? (See [here](https://s-risks.org/symmetry-between-two-types-of-anti-threat-measures/).)



# Surrogate goals

I think [surrogate goals](https://s-risks.org/using-surrogate-goals-to-deflect-threats/) is one of the most promising approaches to reduce (the disvalue resulting from) threats. The idea is to add to one’s current goals a surrogate goal that one did not initially care about. (This new goal could simply be an addition, or it could wholly or partly replace the initial goals.) The hope is that threats will target this surrogate goal rather than what one initially cared about. Finding ways to reliably implement surrogate goals, particularly in advanced AI systems, may be more specific and thus more tractable than the broader interventions outline above. Important research questions on this topic include:

  * What are key barriers to making surrogate goals work? In what ways [might surrogate goals fail](https://s-risks.org/challenges-to-implementing-surrogate-goals/)? 
    * How can we make sure that surrogate goals are credible in the eyes of potential threateners?
    * Do we need to address the [technical](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#Key_desiderata) [issues](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#The_multi-agent_case) of surrogate goals ourself, or can we somehow “pass the buck” by implementing an [indirect surrogate goal](https://s-risks.org/using-surrogate-goals-to-deflect-threats/#Indirect_surrogate_goals)? 
      * Under what circumstances would advanced AI figure out by itself how to best use surrogate goals to prevent threats to its initial goals? What way to reason about game theory and decision theory by the AI would most likely ensure this?
      * Are reinforcement learning agents or other contemporary AI methods able (at least in principle) to learn to use surrogate goals? If not, how could we change this?
    * Where would surrogate goals fit into popular AI alignment approaches like Paul Christiano’s [Iterated Distillation and Amplification](https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616)? Do they need to be installed in human overseers in the early stages, or should they be part of the training process?
  * To what extent is there a Pascalian wager for focusing on scenarios where surrogate goals are not feasible? What are plausible such scenarios? 
    * Are surrogate goals for human threatenees psychologically possible, or is the method limited to advanced AI systems?



# Acknowledgements

I want to thank all the researchers at the [Foundational Research Institute](https://foundational-research.org/), who have made me aware of the importance of this issue, and who informed my thinking about these issues a great deal. I am also grateful to Simon Knutsson for his valuable inputs on a first draft of this post.

#### Footnotes

  1. The idea is that the threatener would either predict that the other agent will give in, in which case they don’t have to carry out the threat, or they predict that the threatenee won’t give in, in which case they don’t make the threat.


