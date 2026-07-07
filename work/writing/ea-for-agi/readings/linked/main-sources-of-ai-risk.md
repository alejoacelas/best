---
title: "The Main Sources of AI Risk?"
author: "Daniel Kokotajlo"
date: 2019-03-21
url: https://lesswrong.com/posts/WXvt8bxYnwBYpy9oT/the-main-sources-of-ai-risk
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by s-risks/cooperation-conflict-tai-research-agenda.md; taxonomy of AI risk sources, useful AI-safety overview"
---

There are so many causes or sources of AI risk that it's getting hard to keep them all in mind. I propose we keep a list of the main sources (that we know about), such that we can say that if none of these things happen, then we've mostly eliminated AI risk (as an existential risk) at least as far as we can determine. Here's a list that I spent a couple of hours enumerating and writing down. Did I miss anything important?

1. Insufficient time/resources for AI safety (for example caused by [intelligence explosion](https://wiki.lesswrong.com/wiki/Intelligence_explosion) or [AI race](https://wiki.lesswrong.com/wiki/AI_arms_race))
2. Insufficient [global coordination](https://www.lesswrong.com/posts/sM2sANArtSJE6duZZ/where-are-people-thinking-and-talking-about-global), leading to the above
3. Misspecified or [incorrectly learned](https://www.lesswrong.com/posts/cnC2RMWEGiGpJv8go/model-mis-specification-and-inverse-reinforcement-learning) goals/values
4. [Inner optimizers](https://www.lesswrong.com/s/r9tYkB2a8Fp4DN8yB)
5. [ML differentially accelerating easy to measure goals](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like#Part_I__You_get_what_you_measure)
6. [Paul Christiano's "influence-seeking behavior"](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like#Part_II__influence_seeking_behavior_is_scary) (a combination of 3 and 4 above?)
7. [AI generally accelerating intellectual progress in a wrong direction](https://www.lesswrong.com/posts/vbtvgNXkufFRSrx4j/three-ai-safety-related-ideas#3__Several_approached_to_AI_alignment_will_differentially_accelerate_intellectual_progress_that_are_analogous_to_solving_problems_that_are_low_in_the_polynomial_hierarchy_) (e.g., accelerating unsafe/risky technologies more than knowledge/wisdom about how to safely use those technologies)
8. Metaethical error
9. [Metaphilosophical error](https://www.lesswrong.com/posts/EByDsY9S3EDhhfFzC/some-thoughts-on-metaphilosophy)
10. Other kinds of philosophical errors in AI design (e.g., giving AI a wrong prior or [decision theory](https://www.lesswrong.com/posts/zcPLNNw4wgBX5k8kQ/decision-theory))
11. Other design/coding errors (e.g., [accidentally putting a minus sign in front of utility function](https://www.lesswrong.com/posts/BKjJJH2cRpJcAnP7T/thoughts-on-human-models?commentId=DPW34adfcuL3xDR6p), supposedly corrigible AI not actually being corrigible)
12. [Doing acausal reasoning in a wrong way](https://www.lesswrong.com/posts/Qz6w4GYZpgeDp6ATB/beyond-astronomical-waste) (e.g., failing to make good acausal trades, being acausally extorted, failing to acausally influence others who can be so influenced)
13. Human-controlled AIs ending up with wrong values due to insufficient "[metaphilosophical paternalism](https://www.greaterwrong.com/posts/5bd75cc58225bf06703752c6/my-current-take-on-the-paul-miri-disagreement-on-alignability-of-messy-ai/comment/5bd75cc58225bf06703752db)"
14. Human-controlled AIs causing ethical disasters (e.g., large scale suffering that can't be "balanced out" later) prior to reaching moral/philosophical maturity
15. [Intentional corruption of human values](https://www.lesswrong.com/posts/HTgakSs6JpnogD6c2/two-neglected-problems-in-human-ai-safety#2__How_to_defend_against_intentional_attempts_by_AIs_to_corrupt_human_values_)
16. [Unintentional corruption of human values](https://www.lesswrong.com/posts/HTgakSs6JpnogD6c2/two-neglected-problems-in-human-ai-safety#1__How_to_prevent__aligned__AIs_from_unintentionally_corrupting_human_values_)
17. [Mind crime](https://www.lesswrong.com/posts/BqoE5vhPNCB7X6Say/superintelligence-12-malignant-failure-modes) (disvalue unintentionally incurred through morally relevant simulations in AIs' minds)
18. Premature value lock-in (i.e., freezing one's current conception of what's good into a utility function)
19. [Extortion between AIs leading to vast disvalue](http://s-risks.org/factors-of-extortion-scenarios/)
20. [Distributional shifts](https://openai.com/blog/concrete-ai-safety-problems/) causing apparently safe/aligned AIs to stop being safe/aligned
21. [Value drift and other kinds of error as AIs self-modify](https://www.lesswrong.com/posts/iWwaJ5wPGLZJWjPAL/vingean-reflection-reliable-reasoning-for-self-improving), or AIs failing to solve value alignment for more advanced AIs
22. [Treacherous turn](https://www.lesswrong.com/posts/B39GNTsN3HocW8KFo/superintelligence-11-the-treacherous-turn) / loss of property rights due to insufficient competitiveness of humans & human-aligned AIs
23. Gradual loss of influence due to insufficient competitiveness of humans & human-aligned AIs
24. Utility maximizers / goal-directed AIs having an economic and/or military competitive advantage due to [relative ease of cooperation/coordination](https://www.lesswrong.com/posts/gYaKZeBbSL4y2RLP3/strategic-implications-of-ais-ability-to-coordinate-at-low#mEPFJizS2djsiTtT6), defense against value corruption and other forms of manipulation and attack, leading to one or more of the above
25. In general, the most competitive type of AI being too hard to align or to safely use
26. [Computational resources being too cheap](https://www.lesswrong.com/posts/4K52SS7fm9mp5rMdX/three-ways-that-sufficiently-optimized-agents-appear#section-2), leading to one or more of the above
	
(With this post I mean to (among other things) re-emphasize the disjunctive nature of AI risk, but this list isn't fully disjunctive (i.e., some of the items are subcategories or causes of others), and I mostly gave a source of AI risk its own number in the list if it seemed important to make that source more salient. Maybe once we have a list of everything that is important, it would make sense to create a graph out of it.)

Added on 6/13/19:

27. Failure to learn how to deal with alignment in the many-humans, many-AIs case even if single-human, single-AI alignment is solved ([suggested by William Saunders](https://www.lesswrong.com/posts/WXvt8bxYnwBYpy9oT/the-main-sources-of-ai-risk#yDJ95p8C3Gvg7zdpT))
28. [Economics of AGI causing concentration of power amongst human overseers](https://www.lesswrong.com/posts/Sn5NiiD5WBi4dLzaB/agi-will-drastically-increase-economies-of-scale-1)
29. Inability to specify any ‘real-world’ goal for an artificial agent ([suggested by Michael Cohen](https://www.lesswrong.com/posts/WXvt8bxYnwBYpy9oT/the-main-sources-of-ai-risk#Ne7Twto6cqLhsCCKS))
30. AI systems end up controlled by a group of humans representing a small range of human values (ie. an ideological or religious group that imposes values on everyone else) ([suggested by William Saunders](https://www.lesswrong.com/posts/WXvt8bxYnwBYpy9oT/the-main-sources-of-ai-risk#Lnp2QpWQmPyGk52dz))

Added on 2/3/2020: 

31. Failing to solve [the commitment races problem](https://www.alignmentforum.org/posts/brXr7PJ2W4Na2EW2q/the-commitment-races-problem), i.e. building AI in such a way that some sort of disastrous outcome occurs due to unwise premature commitments (or unwise hesitation in making commitments!). This overlaps significantly with #27, #19, and #12.

Added on 3/11/2020:

32. [Demons in imperfect search](https://www.alignmentforum.org/posts/KnPN7ett8RszE79PH/demons-in-imperfect-search) (similar, but distinct from, inner optimizers.) [See here](https://www.lesswrong.com/posts/X7S3u5E4KktLp7gHz/tessellating-hills-a-toy-model-for-demons-in-imperfect) for illustration.

Added on 10/4/2020:

33. Persuasion tools or some other form of narrow AI leads to a [massive deterioration of collective epistemology](https://aiimpacts.org/relevant-pre-agi-possibilities/#easy-footnote-bottom-30-2336), dooming humanity to stumble inexorably into some disastrous end or other.

Added on 8/31/2021:

34. Vulnerable world type 1: narrow AI enables many people to destroy world, e.g. R&D tools that dramatically lower the cost for building WMD's.
35. Vulnerable world 2a: We end up with many powerful actors able and incentivized to create civilization-devastating harms.

[Edit on 1/28/2020: This list was created by Wei Dai. Daniel Kokotajlo offered to keep it updated and prettify it over time, and so was added as a coauthor.]