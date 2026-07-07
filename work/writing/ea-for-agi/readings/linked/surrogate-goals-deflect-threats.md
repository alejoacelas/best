---
title: "Using surrogate goals to deflect threats – Reducing Risks of Future Suffering"
author: "Tobias Baumann"
date: 2017-12-15
url: https://s-risks.org/using-surrogate-goals-to-deflect-threats
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "CLR surrogate goals to deflect threats (cooperative AI); cited x3"
---

# Summary

Agents that threaten to harm other agents, either in an attempt at extortion or as part of an escalating conflict, are an important form of [agential s-risks](https://s-risks.org/intro/#How_s-risks_could_come_about). To avoid worst-case outcomes resulting from the execution of such threats, I suggest that agents add a “meaningless” surrogate goal to their utility function. Ideally, threats would target this “honeypot” rather than the initial goals, which means that escalating threats would no longer lead to large amounts of disvalue.

In this post, I introduce key desiderata for how surrogate goals should work, and outline the challenges that need to be addressed. Many open questions remain, but I am optimistic that the idea can be a useful tool to help mitigate the negative impact of threats.

Contents

  *   *     *     *     *     *   *   *     *     *     *   *   * 


# The basic idea

Let Alice be an agent with a utility function U. For example, suppose Alice wants to make money but cares even more about survival. She potentially faces threats from a second actor (let’s call him Bob) of the form “Unless you do X (e.g. give me money), I’ll kill you”.

To avoid this, she comes up with a smart way to change her utility function. She decides to introduce a “meaningless” surrogate goal – say, she now cares strongly about preventing the existence of a sphere of platinum with a diameter of exactly 42.82cm. The hope is that Bob’s threats are deflected to this new goal, assuming that Alice’s new utility function U’ = U + V puts sufficient weight on preventing the sphere (represented by V). Bob would now make threats of the form “Unless you do X (e.g. give me money), I’ll create a sphere of platinum with a diameter of exactly 42.82cm”.

This trick aims to solve one aspect of the threat problem only – namely, the potential for it to result in an extremely bad outcome if the threat is carried out. Alice might still give away resources when threatened; after all, it would be _absolutely horrendous_ if Bob actually went through with his threat and created the sphere. Ideally, Alice would respond to threats in the same way as before her goal modification, for reasons discussed later.

So utility function modification does not prevent the loss of resources due to extortion, or the risk that a malicious agent might become more powerful due to gaining resources through extortion. More work on a solution for this part of the problem is also necessary, but preventing the risk that threats are carried out (against the original goal) would already go a long way. Surrogate goals can also be combined with any other anti-extortion measure.

Unfortunately, it may be hard for humans to deliberately change their utility function1 in this way.2 It is more realistic that the trick can be applied to advanced AI systems. For example, if an AI system controls important financial or economic resources, other AI systems might have an incentive to try to extort it. If the system also uses [inverse reinforcement learning](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa12/slides/inverseRL.pdf) or [other techniques](https://ai-alignment.com/counterfactual-human-in-the-loop-a7822e36f399) to [infer human preferences](http://humancompatible.ai/bibliography#preference-inference), then the threat might involve the most effective violations of human preferences, such as killing people (assuming that the threatening AI system has the power to do this). Surrogate goals might help mitigate this security problem.

# Key desiderata

So far, I assumed that the trick is successful in deflecting threats, but it is actually not straightforward to get this to work. In the following, I will discuss the main criteria for successfully implementing utility function modification.

## Non-interference with other goals

Changing your goals is usually disadvantageous in terms of the original goals since it means that you will optimise for the “wrong” goal. In other words, goal preservation is a [convergent instrumental goal](https://wiki.lesswrong.com/wiki/Basic_AI_drives). So, when we introduce a surrogate goal, we’d like to ensure that it **doesn’t interfere with other goals** in non-threat situations.

To achieve this, the surrogate goal could be the minimization of a structure that is so rare that it doesn’t matter in “normal” (non-threat) situations. Spheres of platinum with a diameter of 42.82cm usually don’t occur naturally, so Alice is still free to pursue her other goals – including survival – as long as no threats are made. (It might be better to make it even more specific by adding a certain temperature, specifying a complex and irregular shape, and so on.)

An even more elegant solution is to choose a _dormant_ utility function modification, that is, to introduce a trigger mechanism that causes the modification _conditional_ on being threatened.3 This ensures non-interference with other goals. Less formally speaking, this corresponds to disvaluing spheres of platinum (or any other surrogate goal) only if they are created as the result of a threat, while remaining indifferent towards natural instances.

This requires a mechanism to detect (serious) threats. In particular, it’s necessary to [distinguish threats from positive-sum trade](http://lesswrong.com/lw/hza/duller_blackmail_definitions/), which turns out to be quite difficult. (Learning to reliably detect threats using neural networks or other machine learning methods may be a critical problem in [worst-case AI safety](https://s-risks.org/focus-areas-of-worst-case-ai-safety/).)

## Avoiding threats against the original goal

To the extent to which this is possible, the surrogate goal should be orthogonal to your original goals. This ensures that it’s not easily possible to simply _combine_ both threats. For example, if Alice’s surrogate goal is “prevent murder” – which isn’t orthogonal – then Bob can target the surrogate goal and the original goal simultaneously with a death threat.

Even for orthogonal goals, Bob might still decide to threaten _both_ goals (death and the creation of the sphere). Caring more about the surrogate goal than about the initial goal is _not_ sufficient to make sure that this does not happen. For example, Bob might ([depending on circumstances](https://s-risks.org/heuristics-to-assess-the-feasibility-of-threats/)) want to make his threat as big as possible to force Alice to give in.

It might be safer to choose a continuous and unbounded surrogate goal instead of a binary surrogate goal like “prevent the existence of a single platinum sphere”; for instance, the disvalue could be a function of the size of the sphere. This is an improvement because a threatener who wants to increase the stakes will now create bigger spheres rather than adding the initial goal to his threat.

## Credibility

So far, I assumed that the kind of threat that is made simply depends on Alice’s utility function. But it’s actually more accurate to say that it depends on the threatener’s _beliefs_ about her utility function. If Bob believes that Alice cares about her surrogate goal, even though Alice didn’t actually modify, then he will still threaten the surrogate goal.

In this case, his threats arguably wouldn’t work. So maybe it’s even better to just _pretend_ that you changed your utility function?

Of course, the problem is that Bob might see through this, which would mean that he threatens the initial goal after all. (Misrepresenting your values may still be an interesting anti-threat strategy, but this is beyond the scope of this post.)

It’s also possible that Alice actually modifies her utility function, but Bob thinks it’s a ruse. Now, this seems particularly dangerous because it involves threats against the initial goal and you might worry that Alice would not respond “correctly” (whatever this means) to such threats anymore. Alice’s new utility function still includes the initial goal, though, so she continues to react to threats against the initial goal. The surrogate goal does not help in this case, but the result is at least _not worse_ than what would happen by default (without utility function modification).

To successfully deflect threats to the surrogate goal, Alice needs to be able to _credibly_ broadcast that she now cares most about this. This is a nontrivial problem, which is exacerbated by the fact that after modifying, Alice has strong incentives to keep her surrogate goal secret – after all, leaking the information that she cares about preventing spheres of platinum might lead to threats! It is thus easier to broadcast the utility function modification _before_ actually carrying it out.

Fortunately, the problem of credible broadcasting may disappear in threats that involve advanced artificial intelligence. For instance, it may become possible to run faithful simulations of the other party, which means that a threatener could verify the utility function modification. Also, rather than starting out with a certain utility function and later modifying it, we could equip AI systems with a surrogate goal from the start.

## Threatener-neutrality

Modifying your utility function may increase or decrease [the attractiveness of threats](https://s-risks.org/factors-of-extortion-scenarios) against you. For example, creating the sphere may be more attractive because death threats are illegal. I will refer to this property as **threatener-friendly**(increase the attractiveness of threats), **threatener-neutral**(keep attractiveness of threats constant), and **threatener-hostile**(decrease the attractiveness of threats).

In the following, I will argue that the utility function modification should be as close to threatener-neutral as possible.

Threatener-hostile utility function modification may be risky since it reduces the utility of threateners, which potentially gives them reason for punishment in order to discourage such strategic moves. Unfortunately, this punishment would be directed at the initial goal rather than the surrogate goal, since this is what could deter Alice at the point where she considers modifying her utility function.

This is not a knock-down argument, and threatener-hostile moves – such as strongly pre-committing to not give in, or caring intrinsically about punishing extortionists – might turn out to be valuable anti-threat measures. Still, the idea of this post is intriguing precisely because it’s different in that it (in a threatener-neutral or threatener-friendly variant) helps to avoid (the consequences of) threats _without_ potentially incentivizing punishment. In particular, it might be helpful to introduce a surrogate goal _before_ thinking about other (threatener-hostile) tricks, so that any punishment against these is already deflected.

That said, a threatener-friendly utility function modification is also undesirable simply because it helps threateners gain resources. Making extortion more attractive is bad in expectation for most agents due to the negative-sum nature of threats. So, the ideal surrogate goal is threatener-neutral, averting the possibility of extremely bad outcomes without changing other parameters.

Unfortunately, this is a difficult problem. The feasibility of threats is a (complex) function of empirical circumstances, and these circumstances might change in the future. Creating spheres of platinum may become easy because of advances in mining technology, or it might be hard because all the platinum is used elsewhere. The circumstances may also differ from threatener to threatener.

It therefore seems desirable to use a surrogate goal that’s similar to the initial goal in that its vulnerability to threats as a function of empirical circumstances is strongly tied to the vulnerability of the initial goal, while still being orthogonal in the sense of the previous section. Rather than picking a single surrogate goal, you could pick a “surrogate goal function” that maps every environment to a surrogate goal in a way that maintains threatener-neutrality.

In light of these difficulties, we might hope that future AI systems will be able to figure out the details if they reason correctly about game theory and decision theory, or that the idea is sufficiently robust to small perturbations. It’s even conceivable that threateners would tell future threatenees about the idea and how to best implement it (presumably in exchange for making it slightly threatener-friendly).

# The multi-agent case

So far, I only considered a simplified two-agent case. Our real world, however, features a large number of agents with varying goals, which causes additional complications if many of them modify their utility function.

A key question is whether different agents should use the same or different surrogate goals, especially if their original goals are similar. For example, suppose Alice has relatives that also don’t want her to die. Suppose they also modify their utility function to defuse threats, choosing different (unrelated) surrogate goals.

Now, a threat against the surrogate goal targets a different set of people – a single individual rather than the entire family – compared to a threat against the initial goal. This is problematic because threateners may prefer to target the initial goal after all, to threaten the entire family at the same time, which [may or may not be more attractive](https://s-risks.org/factors-of-extortion-scenarios#splitting-up) depending on the circumstances.

On the flip side, if the (initial) goals of different agents overlap only partially, they may prefer to not choose the same surrogate goal. This is because you don’t want to potentially lose resources because of threats that would otherwise (pre-modification) only or mostly target others. Also, similar to the above point, it may be more effective to threaten the different agents individually, so this fails to achieve the goal of deflecting threats to the surrogate goal _under all circumstances_.

To solve this problem, the agents could associate each initial goal with a surrogate goal in a way that preserves the “distance” between goals, so that different initial goals are mapped onto different surrogate goals, and vice versa. More formally, we need an [isometric mapping](https://www.encyclopediaofmath.org/index.php/Isometric_mapping) from the space of initial goals to the space of surrogate goals. This follows a pattern which we’ve encountered several times in this post: threats against the surrogate goal should be as similar as possible, in terms of their feasibility as a function of empirical circumstances, to threats against the initial goal.

Finding and implementing an isometric mapping that’s used by all agents is a difficult **coordination problem**. Prima facie, it’s unclear how this could be solved, given how arbitrary the choice of surrogate goals is. To get different surrogate goals, you could use long sequences of random numbers, but using the same or similar surrogate goals may require some kind of [Schelling point](https://en.wikipedia.org/wiki/Focal_point_\(game_theory\)) if the agents can’t communicate.

What’s worse, this might also give rise to a **cooperation problem**. It is possible that agents have incentives to choose a different surrogate goal than the one associated with their initial goal according to the mapping. For instance, perhaps it’s better to choose a less common surrogate goal because this means fewer threats target your surrogate goal, which means you’re less likely to waste resources responding to such threats. Or perhaps it’s better to choose a more common surrogate goal if all the agents sharing this surrogate goal are powerful enough to prohibit threats.

It’s hard to say how exactly this would work without an improved understanding of how multi-agent threats work, which is sorely elusive.

# Extensions of the idea

## Turning threats into trade

Instead of a “meaningless” surrogate goal, you could take the idea a step further by choosing a surrogate goal whose violation would be _good_ (according to the initial utility function). You can pick an outcome that’s ideal or close to ideal and choose the surrogate goal of _preventing_ that outcome from happening. In this case, the execution of threats would – counterintuitively – lead to very good outcomes. Ensuring non-interference with other goals is tricky in this case, but can perhaps be solved if the modification is dormant (as described above).

This variant seems particularly brittle, but if it works, it’s possible to _turn worst-case outcomes from threats into utopian outcomes_ , which would be a surprisingly strong result.

## Indirect surrogate goals

As we’ve seen, the problem with surrogate goals is that it’s quite hard to specify them properly. We could take inspiration from the idea of [indirect normativity](https://ordinaryideas.wordpress.com/2012/04/21/indirect-normativity-write-up/), which is about an indirect description of (ethical) goals, i.e. “what I care about is what I would care about after a century of reflection”. Similarly, we could also define an _indirect surrogate goal_. Alice could simply say “I care about the surrogate goal that I’d choose if I was able to figure out and implement all the details”. (Needless to say, it may be hard to implement such an indirect specification in AI systems.)

It’s not possible to threaten an indeterminate goal, though, which might mean that threateners circle back to the initial goal if the surrogate goal could be anything. So this idea seems to require that the threatener is able to figure out the “ideal” surrogate goal or will become able to figure it out in the future. It’s also conceivable (albeit speculative) that the ideal surrogate goal would compensate the reduced vulnerability to threats due to indeterminacy by being more threatener-friendly along other dimensions.

## Updateless decision theory

Agents that use an [updateless decision theory](https://wiki.lesswrong.com/wiki/Updateless_decision_theory) (UDT) reason in terms of the optimal policy – the mapping of inputs to actions – rather than choosing the best option at any given moment. An advantage of UDT in the context of surrogate goals is that they wouldn’t need “hacky” solutions like self-modifications. If the best policy for maximizing utility function U is to act like a U+V maximizer for certain inputs – specifically, to take threats against the surrogate goal V seriously – then the UDT agent will simply do so.

This framework arrives at the same conclusions, but it might be a “cleaner” way to think about the topic as it dispenses with fuzzy terms such as “utility function modification”.

# Related work

The most comprehensive related work (written after the initial publication of this post) is the paper [Safe Pareto improvements for delegated game playing](https://users.cs.duke.edu/~ocaspar/SPI.pdf) by Caspar Oesterheld and Vincent Conitzer. The paper develops a technical framework where principals aim to find Pareto improvements by giving their representative the right instructions, generalising the idea behind surrogate goals.

Eliezer Yudkowsky mentions the idea of surrogate goals in his post on [Separation from hyperexistential risk](https://arbital.com/p/hyperexistential_separation/) as a patch to avoid disutility maximization. He argues that the patch fails because the resulting utility function is not [reflectively consistent](https://arbital.com/p/reflective_consistency/). Indeed, the modified agent may have an incentive to apply the same trick again, replacing the (now meaningful) spheres of platinum with yet another surrogate goal. The agent may also want to remove the surrogate goal from its utility function (to avoid threats against it).

To avoid this, she needs to fix the new values by committing to not modifying her utility function again – for instance, she could care intrinsically about retaining the (modified) utility function.4 This may or may not be a satisfactory solution, but I don’t think (contra Eliezer) that this constitutes an insurmountable problem. (As described above, this seems to be unproblematic for UDT agents.)

In a discussion of [how to prevent accidental maximization of disvalue](https://www.facebook.com/yudkowsky/posts/10155975880959228?), Robert Miles asks:

> Does there exist any utility function that results in good outcomes when maximised but does not result in bad outcomes when minimised?

Surrogate goals are a possible answer to this question, which, in a sense, is more general than the question of how to prevent (the bad outcomes of) threats. I also like Stuart Armstrong’s solution:

> Yes. Let B1 and B2 be excellent, bestest outcomes. Define U(B1)=1, U(B2)=-1, and U=0 otherwise. Then, under certain assumptions about what probabilistic combinations of worlds it is possible to create, maximising or minimising U leads to good outcomes.

Stuart Armstrong also proposes [a variant of utility function modification](https://agentfoundations.org/item?id=1402) that aims to reduce the size of threats by cutting off the utility function at a certain level. Comparing the advantages and drawbacks of each variant would be beyond the scope of this text, but future research on this would be highly valuable.

# Concluding thoughts

As we’ve seen, any utility function modification must be calibrated well in order to work. Trying to specify the details turns out to be surprisingly difficult. More work on these problems is needed to enable us to implement robust utility function modification in advanced AI systems.

Finally, I’d like to emphasize that it would be ideal if (the bad kind of) threats can be avoided completely. However, given that we don’t yet know how to reliably achieve this, moving threats to the realm of the meaningless (or even beneficial) is a promising way to mitigate [agential s-risks](https://s-risks.org/intro/#How_s-risks_could_come_about).

# Acknowledgements

Caspar Österheld initially brought up the idea in a conversation with me. My thinking on the topic has also profited enormously from internal discussions at the [Foundational Research Institute](https://foundational-research.org/). Daniel Kokotajlo inspired my thinking on the multi-agent case.

I am indebted to Brian Tomasik, Johannes Treutlein, Caspar Österheld, Lukas Gloor, Max Daniel, Abram Demski, Stuart Armstrong and Daniel Kokotajlo for valuable comments on an earlier draft of this text.

#### Footnotes

  1. Technically (most?) humans [don’t even have a utility function](http://lesswrong.com/lw/h45/we_dont_have_a_utility_function/).
  2. It’s not completely inconceivable, though. For instance, if all of society was on board, it might be possible to instill a somewhat arbitrary goal in the next generation. One might also view strong reactions to e.g. the burning of flags or holy books as a surrogate goal (for the actual success of a country or religion) in the sense of this post, though this is debatable and presumably not a conscious decision.
  3. It seems that this doesn’t lead to incentives to remove this trigger while you’re still following your initial goals. 
  4. It’s not clear how to implement such a commitment, though. Simply making the action “change utility function” impossible may be suboptimal if there are other reasons to change one’s utility function that we haven’t discovered yet. (HT Johannes Treutlein for this point.)


