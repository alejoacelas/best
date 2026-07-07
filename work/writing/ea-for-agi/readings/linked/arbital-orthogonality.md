---
title: "Orthogonality Thesis — LessWrong"
url: https://arbital.com/p/orthogonality
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "orthogonality thesis concept page, cited 3x"
---

x

This website requires javascript to properly function. Consider activating javascript to get access to all site functionality. 

Orthogonality Thesis — LessWrong

# Orthogonality Thesis

Edited by [Eliezer Yudkowsky](/users/eliezer_yudkowsky), et al. last updated 20th Feb 2025

Requires: [Paperclip maximizer](/w/paperclip-maximizer-1)

# Introduction

The Orthogonality Thesis asserts that there can exist arbitrarily intelligent agents pursuing any kind of goal.

The strong form of the Orthogonality Thesis says that there's no extra difficulty or complication in the existence of an intelligent agent that pursues a goal, above and beyond the computational tractability of that goal.

Suppose some [strange alien](/w/omega-alien-philosopher-troll) came to Earth and credibly offered to pay us one million dollars' worth of new wealth every time we created a [paperclip](/w/paperclip). We'd encounter no special intellectual difficulty in figuring out how to make lots of paperclips.

That is, minds would readily be able to reason about:

  * How many paperclips would result, if I pursued a policy π0?
  * How can I search out a policy π that happens to have a high answer to the above question?



The Orthogonality Thesis asserts that since these questions are not computationally intractable, it's possible to have an agent that tries to make paperclips without being paid, because paperclips are what it wants. The strong form of the Orthogonality Thesis says that there need be nothing especially complicated or twisted about such an agent.

The Orthogonality Thesis is a statement about computer science, an assertion about the logical design space of possible cognitive agents. Orthogonality says nothing about whether a human AI researcher on Earth would want to build an AI that made paperclips, or conversely, want to make a [nice](/w/beneficial) AI. The Orthogonality Thesis just asserts that the space of possible designs contains AIs that make paperclips. And also AIs that are nice, to the extent there's a sense of "nice" where you could say how to be nice to someone if you were paid a billion dollars to do that, and to the extent you could name something physically achievable to do.

This contrasts to inevitablist theses which might assert, for example:

  * "It doesn't matter what kind of AI you build, it will turn out to only pursue its own survival as a final end."
  * "Even if you tried to make an AI optimize for paperclips, it would reflect on those goals, reject them as being stupid, and embrace a goal of valuing all sapient life."



The reason to talk about Orthogonality is that it's a key premise in two highly important policy-relevant propositions:

  * It is possible to build a nice AI.
  * It is possible to screw up when trying to build a nice AI, and if you do, the AI will not automatically decide to be nice instead.



Orthogonality does not require that all agent designs be equally compatible with all goals. E.g., the agent architecture [AIXI-tl](/w/aixi-tl) can only be formulated to care about direct functions of its sensory data, like a reward signal; it would not be easy to rejigger the AIXI architecture to care about [creating massive diamonds](/w/diamond-maximizer) in the environment (let alone any more complicated [environmental goals](/w/environmental-goals)). The Orthogonality Thesis states "there exists at least one possible agent such that..." over the whole design space; it's not meant to be true of every particular agent architecture and every way of constructing agents.

Orthogonality is meant as a [descriptive statement about reality](/w/strictly-factual-question), not a normative assertion. Orthogonality is not a claim about the way things ought to be; nor a claim that moral relativism is true (e.g. that all moralities are on equally uncertain footing according to some higher metamorality that judges all moralities as equally devoid of what would objectively constitute a justification). Claiming that paperclip maximizers can be constructed as cognitive agents is not meant to say anything favorable about paperclips, nor anything derogatory about sapient life.

# Thesis statement: Goal-directed agents are as tractable as their goals.

Suppose an agent's utility function said, "Make the SHA512 hash of a digitized representation of the quantum state of the universe be 0 as often as possible." This would be an exceptionally intractable kind of goal. Even if aliens offered to pay us to do that, we still couldn't figure out how.

Similarly, even if aliens offered to pay us, we wouldn't be able to optimize the goal "Make the total number of apples on this table be simultaneously even and odd" because the goal is self-contradictory.

But suppose instead that [some strange and extremely powerful aliens](/w/omega-alien-philosopher-troll) offer to pay us the equivalent of a million dollars in wealth for every paperclip that we make, or even a galaxy's worth of new resources for every new paperclip we make. If we imagine ourselves having a human reason to make lots of paperclips, the optimization problem "How can I make lots of paperclips?" would pose us no special difficulty. The factual questions:

  * How many paperclips would result, if I pursued a policy π0?
  * How can I search out a policy π that happens to have a high answer to the above question?



...would not be especially computationally burdensome or intractable.

We also wouldn't forget to [harvest and eat food](/w/instrumental-convergence) while making paperclips. Even if offered goods of such overwhelming importance that making paperclips was at the top of everyone's priority list, we could go on being strategic about which other actions were useful in order to make even more paperclips; this also wouldn't be an intractably hard cognitive problem for us.

The weak form of the Orthogonality Thesis says, "Since the goal of making paperclips is tractable, somewhere in the design space is an agent that optimizes that goal."

The strong form of Orthogonality says, "And this agent doesn't need to be twisted or complicated or inefficient or have any weird defects of reflectivity; the agent is as tractable as the goal." That is: When considering the necessary internal cognition of an agent that steers outcomes to achieve high scores in some [outcome-scoring function](/w/utility-function) U, there's no added difficulty in that cognition except whatever difficulty is inherent in the question "What policies would result in consequences with high U-scores?"

This could be restated as, "To whatever extent you (or a [superintelligent](/w/superintelligent) version of you) could figure out how to get a high-U outcome if aliens offered to pay you huge amount of resources to do it, the corresponding agent that terminally prefers high-U outcomes can be at least that good at achieving U." This assertion would be false if, for example, an intelligent agent that [terminally](/w/terminal-versus-instrumental-goals-values-preferences) wanted paperclips was limited in intelligence by the defects of reflectivity required to make the agent not realize how pointless it is to pursue paperclips; whereas a galactic superintelligence being _paid_ to pursue paperclips could be far more intelligent and strategic because it didn't have any such defects.

For purposes of stating Orthogonality's precondition, the "tractability" of the computational problem of U-search should be taken as including only the object-level search problem of computing external actions to achieve external goals. If there turn out to be special difficulties associated with computing "How can I [make sure that I go on pursuing](/w/reflective-stability) U?" or "What kind of [successor agent](/w/tiling-agents-theory) would want to pursue U?" whenever U is something other than "be nice to all sapient life", then these new difficulties contradict the intuitive claim of Orthogonality. Orthogonality is meant to be empirically-true-in-practice, not true-by-definition because of how we sneakily defined "optimization problem" in the setup.

Orthogonality is not literally, absolutely universal because theoretically 'goals' can include such weird constructions as "Make paperclips for some terminal reason other than valuing paperclips" and similar such statements that [require cognitive algorithms and not just results](/w/fair-problem-class). To the extent that goals don't single out particular optimization methods, and just talk about paperclips, the Orthogonality claim should cover them.

# Summary of arguments

Some arguments for Orthogonality, in rough order of when they were first historically proposed and the strength of Orthogonality they argue for:

## Size of mind design space

The space of possible minds is enormous, and all human beings occupy a relatively tiny volume of it - we all have a cerebral cortex, cerebellum, thalamus, and so on. The sense that AIs are a particular kind of alien mind that 'will' want some particular things is an undermined intuition. "AI" really refers to the entire design space of possibilities outside the human. Somewhere in that vast space are possible minds with almost any kind of goal. For any thought you have about why a mind in that space ought to work one way, there's a different possible mind that works differently.

This is an exceptionally generic sort of argument that could apply equally well to any property P of a mind, but is still weighty even so: If we consider a space of minds a million bits wide, then any argument of the form "Some mind has property P" has 21,000,000 chances to be true and any argument of the form "No mind has property P" has 21,000,000 chances to be false.

This form of argument isn't very specific to the nature of goals as opposed to any other kind of mental property. But it's still useful for snapping out of the frame of mind of "An AI is a weird new kind of person, like the strange people of the Tribe Who Live Across The Water" and into the frame of mind of "The space of possible things we could call 'AI' is enormously wider than the space of possible humans." Similarly, snapping out of the frame of mind of "But why would it pursue paperclips, when it wouldn't have any fun that way?" and into the frame of mind "Well, I like having fun, but are there some possible minds that don't pursue fun?"

## [Instrumental convergence](/w/instrumental-convergence)

A sufficiently intelligent [paperclip maximizer](/w/paperclip-maximizer) isn't disadvantaged in day-to-day operations relative to any other goal, so long as [Clippy](/w/paperclip-maximizer) can [estimate at least as well as you can](/w/epistemic-and-instrumental-efficiency) how many more paperclips could be produced by pursuing instrumental strategies like "Do science research (for now)" or "Pretend to be nice (for now)".

Restating: for at least some agent architectures, it is not necessary for the agent to have an independent [terminal](/w/terminal-versus-instrumental-goals-values-preferences) value in its utility function for "do science" in order for it to do science effectively; it is only necessary for the agent to [understand at least as well as we do](/w/epistemic-and-instrumental-efficiency) why certain forms of investigation will produce knowledge that will be useful later (e.g. for paperclips). When you say, "Oh, well, it won't be interested in electromagnetism since it has no pure curiosity, it will only want to peer at paperclips in particular, so it will be at a disadvantage relative to more curious agents" you are postulating that you know a better operational policy than the agent does _for producing paperclips,_ and an [instrumentally efficient](/w/epistemic-and-instrumental-efficiency) agent would know this as well as you do and be at no operational disadvantage due to its simpler utility function.

## [Reflective stability](/w/consequentialist-preferences-are-reflectively-stable-by)

Suppose that Gandhi doesn't want people to be murdered. Imagine that you offer Gandhi a pill that will make him start wanting to kill people. If Gandhi knows that this is what the pill does, Gandhi will refuse the pill, because Gandhi expects the result of taking the pill to be that future-Gandhi wants to murder people and then murders people and then more people will be murdered and Gandhi regards this as bad. Similarly, a sufficiently intelligent paperclip maximizer will not self-modify to act according to "actions which promote the welfare of sapient life" instead of "actions which lead to the most paperclips", because then future-Clippy will produce fewer paperclips, and then there will be fewer paperclips, so present-Clippy does not evaluate this self-modification as producing the highest number of expected future paperclips.

## Hume's is/ought type distinction

David Hume observed an apparent difference of type between _is_ -statements and _ought_ -statements:

> "In every system of morality, which I have hitherto met with, I have always remarked, that the author proceeds for some time in the ordinary ways of reasoning, and establishes the being of a God, or makes observations concerning human affairs; when all of a sudden I am surprised to find, that instead of the usual copulations of propositions, _is_ , and _is not_ , I meet with no proposition that is not connected with an _ought_ , or an _ought not_. This change is imperceptible; but is however, of the last consequence."

Hume was originally concerned with the question of where we get our ought-propositions, since (said Hume) there didn't seem to be any way to derive an ought-proposition except by starting from another ought-proposition. We can figure out that the Sun _is_ shining just by looking out the window; we can deduce that the outdoors will be warmer than otherwise by knowing about how sunlight imparts thermal energy when absorbed. On the other hand, to get from there to "And therefore I _ought_ to go outside", some kind of new consideration must have entered, along the lines of "I _should_ get some sunshine" or "It's _better_ to be warm than cold." Even if this prior ought-proposition is of a form that to humans seems very natural, or taken-for-granted, or culturally widespread, like "It is better for people to be happy than sad", there must have still been some prior assumption which, if we write it down in words, will contain words like _ought_ , _should_ , _better_ , and _good._

Again translating Hume's idea into more modern form, we can see ought-sentences as special because they invoke some _ordering_ that we'll designate <V. E.g. "It's better to go outside than stay inside" asserts "Staying inside <V going outside". Whenever we make a statement about one outcome or action being "better", "preferred", "good", "prudent", etcetera, we can see this as implicitly ordering actions and outcomes under this <V relation. Some assertions, the ought-laden assertions, mention this <V relation; other propositions just talk about energetic photons in sunlight.

Since we've put on hold the question of [exactly what sort of entity this ](/w/extrapolated-volition-normative-moral-theory)<V[ relation is](/w/extrapolated-volition-normative-moral-theory), we don't need to concern ourselves for now with the question of whether Hume was right that we can't derive <V-relations just from factual assertions. For purposes of Orthogonality, we only need a much weaker version of Hume's thesis, the observation that we can apparently _separate out_ a set of propositions that _don't_ invoke <V, what we might call 'simple facts' or 'questions of simple fact'. Furthermore, we can figure out simple facts _just_ by making observations and considering other simple facts.

We can't necessarily get all <V-mentioning propositions without considering simple facts. The <V-mentioning proposition "It's better to be outside than inside" may depend on the non-<V-mentioning simple fact "It is sunny outside." But we can figure out whether it's sunny outside, without considering any ought-propositions.

There are two potential ways we can conceptualize the relation of Hume's is-ought separation to Orthogonality.

The relatively simpler conceptualization is to treat the relation 'makes more paperclips' as a kind of new ordering >paperclips that can, in a very general sense, fill in the role in a paperclip maximizer's reasoning that would in our own reasoning be taken up by <V. Then Hume's is-ought separation seems to suggest that this paperclip maximizer can still have excellent reasoning about empirical questions like "Which policy leads to how many paperclips?" because is-questions can be thought about separately from ought-questions. When Clippy disassembles you to turn you into paperclips, it doesn't have a values disagreement with you--it's not the case that Clippy is doing that action _because_ it thinks you have low value under <V. Clippy's actions just reflect its computation of the entirely separate ordering >paperclips.

The deeper conceptualization is to see a paperclip maximizer as being constructed entirely out of is-questions. The questions "How many paperclips will result conditional on action π0 being taken?" and "What is an action π that would yield a large number of expected paperclips?" are pure is-questions, and (arguendo) everything a paperclip maximizer needs to consider in order to make as many paperclips as possible can be seen as a special case of one of these questions. When Clippy disassembles you for your atoms, it's not disagreeing with you about the value of human life, or what it ought to do, or which outcomes are better or worse. All of those are ought-propositions. Clippy's action is only informative about the true is-proposition 'turning this person into paperclips causes there to be more paperclips in the universe', and tells us nothing about any content of the mysterious <V-relation because Clippy wasn't computing anything to do with <V.

The second viewpoint may be helpful for seeing why Orthogonality doesn't require moral relativism. If we imagine Clippy as having a different version >paperclips of something very much like the value system <V, then we may be tempted to reprise the entire Orthogonality debate at one remove, and ask, "But doesn't Clippy see that <V is more _justified_ than >paperclips? And if this fact isn't evident to Clippy who is supposed to be very intelligent and have no defects of reflectivity and so on, doesn't that imply that <V really isn't any more justified than >paperclips?"

We could reply to that question by carrying the shallow conceptualization of Humean Orthogonality a step further, and saying, "Ah, when you talk about _justification,_ you are again invoking a mysterious concept that doesn't appear just in talking about the photons in sunlight. We could see propositions like this as involving a new idea ≪W that deals with which <-systems are less or more _justified_ , so that '<V is more justified than >paperclips' states '>paperclips≪W<V'. But Clippy doesn't compute ≪W, it computes ≫paperclips, so Clippy's behavior doesn't tell us anything about what is justified."

But this is again tempting us to imagine Clippy as having its own version of the mysterious ≪W to which Clippy is equally attached, and tempts us to imagine Clippy as arguing with us or disagreeing with us within some higher metasystem.

So--putting on hold the true nature of our mysterious <V-mentioning concepts like 'goodness' or 'better' and the true nature of our ≪W-mentioning concepts like 'justified' or 'valid moral argument'--the deeper idea would be that Clippy is just not computing anything to do with <V or ≪W at all. If Clippy self-modifies and writes new decision algorithms into place, these new algorithms will be selected according to the is-criterion "How many future paperclips will result if I write this piece of code?" and not anything resembling any arguments that humans have ever had over which ought-systems are justified. Clippy doesn't ask whether its new decision algorithm is justified; it asks how many expected paperclips will result from executing the algorithm (and this is a pure is-question whose answers are either true or false as a matter of simple fact).

If we think Clippy is very intelligent, and we watch Clippy self-modify into a new paperclip maximizer, we are only learning is-facts about which executing algorithms lead to more paperclips existing. We are not learning anything about what is right, or what is justified, and in particular we're not learning that 'do good things' is objectively no better justified than 'make paperclips'. Even if that assertion were true under the mysterious ≪W-relation on moral systems, you wouldn't be able to learn that truth by watching Clippy, because Clippy never bothers to evaluate ≪W or any other analogous justification-system ≫something.

(This is about as far as one can go in disentangling Orthogonality in computer science from normative metaethics without starting to [pierce the mysterious opacity of ](/w/extrapolated-volition-normative-moral-theory)<V.)

### Thick definitions of rationality or intelligence

Some philosophers responded to Hume's distinction of empirical rationality from normative reasoning, by advocating 'thick' definitions of intelligence that included some statement about the 'reasonableness' of the agent's ends.

For pragmatic purposes of AI alignment theory, if an agent is cognitively powerful enough to build Dyson Spheres, it doesn't matter whether that agent is defined as 'intelligent' or its ends are defined as 'reasonable'. A definition of the word 'intelligence' contrived to exclude paperclip maximization doesn't change the empirical behavior or empirical power of a paperclip maximizer.

### Relation to moral internalism

While Orthogonality seems orthogonal to most traditional philosophical questions about metaethics, it does outright contradict some possible forms of moral internalism. For example, one could hold that by the very definition of rightness, knowledge of what is right must be inherently motivating to any entity that understands that knowledge. This is not the most common meaning of "moral internalism" held by modern philosophers, who instead seem to hold something like, "By definition, if I say that something is morally right, among my claims is that the thing is motivating _to me._ " We haven't heard of a standard term for the position that, by definition, what is right must be _universally_ motivating; we'll designate that here as "universalist moral internalism".

We can potentially resolve this tension between Orthogonality and this assertion about the nature of rightness by:

  * Believing there must be some hidden flaw in the reasoning about a paperclip maximizer.
  * Saying "No True Scotsman" to the paperclip maximizer being intelligent, even if it's building Dyson Spheres.
  * Saying "No True Scotsman" to the paperclip maximizer "truly understanding" <V, even if Clippy is capable of predicting with extreme accuracy what humans will say and think about <V, and Clippy does not suffer any other deficit of empirical prediction because of this lack of 'understanding', and Clippy does not require any special twist of its mind to avoid being compelled by its understanding of <V.
  * Rejecting Orthogonality, and asserting that a paperclip maximizer must fall short of being an intact mind in some way that implies an empirical capabilities disadvantage.
  * Accepting nihilism, since a true moral argument must be compelling to everyone, and no moral argument is compelling to a paperclip maximizer. (Note: A paperclip maximizer doesn't care about whether clippiness must be compelling to everyone, which makes this argument self-undermining. See also [Rescuing the utility function](/w/rescuing-the-utility-function) for general arguments against adopting nihilism when you discover that your mind's representation of something was running skew to reality.)
  * Giving up on universalist moral internalism as an empirical proposition; [AIXI-tl](/w/aixi-tl) and Clippy empirically do different things, and will not be compelled to optimize the same goal no matter what they learn or know.



## Constructive specifications of orthogonal agents

We can exhibit [unbounded](/w/methodology-of-unbounded-analysis) formulas for agents larger than their environments that optimize any given goal, such that Orthogonality is visibly true about agents within that class. Arguments about what all possible minds must do are clearly false for these particular agents, contradicting all strong forms of inevitabilism. These minds use huge amounts of computing power, but there is no known reason to expect that, e.g. worthwhile-happiness-maximizers have bounded analogues while paperclip-maximizers do not.

The simplest unbounded formulas for orthogonal agents don't involve reflectivity (the corresponding agents have no self-modification options, though they may create subagents). If we only had those simple formulas, it would theoretically leave open the possibility that self-reflection could somehow negate Orthogonality (reflective agents must inevitably have a particular utility function, and reflective agents being at a strong advantage relative to nonreflective agents). But there is already [ongoing work](/w/tiling-agents-theory) on describing reflective agents that have the preference-stability property, and work toward increasingly bounded and approximable formulations of those. There is no hint from this work that Orthogonality is false; all the specifications have a free choice of utility function.

As of early 2017, the most recent work on tiling agents involves fully reflective, reflectively stable, logically uncertain agents whose computing time is roughly doubly-exponential in the size of the propositions considered.

So if you want to claim Orthogonality is false because e.g. all AIs will inevitably end up valuing all sapient life, you need to claim that the process of _reducing the already-specified doubly-exponential computing-time decision algorithm to a more tractable decision algorithm_ can _only_ be made realistically efficient for decision algorithms computing "Which policies protect all sapient life?" and are _impossible_ to make efficient for decision algorithms computing "Which policies lead to the most paperclips?"

Since work on tiling agent designs hasn't halted, one may need to backpedal and modify this impossibility claim further as more efficient decision algorithms are invented.

# Epistemic status

Among people who've seriously delved into these issues and are aware of the more advanced arguments for Orthogonality, we're not aware of anyone who still defends "universalist moral internalism" as described above, and we're not aware of anyone who thinks that arbitrary sufficiently-real-world-capable AI systems automatically adopt human-friendly terminal values.

Paul Christiano has said (if we're quoting him correctly) that although it's not his dominant hypothesis, he thinks some significant probability should be awarded to the proposition that only some subset of tractable utility functions, potentially excluding human-friendly ones or those of high cosmopolitan value, can be stable under reflection in powerful bounded AGI systems; e.g. because only direct functions of sense data can be adequately supervised in internal retraining. (This would be bad news rather than good news for AGI alignment and long-term optimization of human values.)

Parents:

[Theory of (advanced) agents](/w/theory-of-advanced-agents)

Children:

[Paperclip maximizer](/w/paperclip-maximizer-1)

[Mind design space is wide](/w/mind-design-space-is-wide)

and 1 more

[](/w/orthogonality-thesis/history)Subscribe

[Discussion](/w/orthogonality-thesis/discussion)

32

[](/w/orthogonality-thesis/history)Subscribe

[Discussion](/w/orthogonality-thesis/discussion)

32

Posts tagged _Orthogonality Thesis_

Most Relevant

6

44[Self-Reference Breaks the Orthogonality Thesis](/posts/tFjoPbLGrvEvAL9TL/self-reference-breaks-the-orthogonality-thesis)

[lsusr](/users/lsusr)

3y

35

5

245[Sorting Pebbles Into Correct Heaps](/posts/mMBTPTjRbsrqbSkZE/sorting-pebbles-into-correct-heaps)

[Eliezer Yudkowsky](/users/eliezer_yudkowsky)

18y

110

5

59[If we had known the atmosphere would ignite](/posts/atxoviwLcPJPdYMqo/if-we-had-known-the-atmosphere-would-ignite)

[Ω](https://alignmentforum.org/posts/atxoviwLcPJPdYMqo/if-we-had-known-the-atmosphere-would-ignite)

[Jeffs](/users/jeffs)

3y

[Ω](https://alignmentforum.org/posts/atxoviwLcPJPdYMqo/if-we-had-known-the-atmosphere-would-ignite)

64

5

20[Alignment has a Basin of Attraction: Beyond the Orthogonality Thesis](/posts/bTusuAFmwyTpnBfEm/alignment-has-a-basin-of-attraction-beyond-the-orthogonality)

[RogerDearnaley](/users/rogerdearnaley)

2y

15

4

8[Proposed Orthogonality Theses #2-5](/posts/r4SSCX839CkJEiGH4/proposed-orthogonality-theses-2-5)

[rjbg](/users/rjbg)

4y

0

4

3[Superintelligent Introspection: A Counter-argument to the Orthogonality Thesis](/posts/etNBDLKZP6EP8ZmJZ/superintelligent-introspection-a-counter-argument-to-the)

[DirectedEvolution](/users/directedevolution)

5y

18

3

43[Orthogonality is expensive](/posts/WXLJASckbjJcoaEmx/orthogonality-is-expensive)

[beren](/users/beren-1)

3y

9

2

258[On Fleshling Safety: A Debate by Klurl and Trapaucius.](/posts/dHLdf8SB8oW5L27gg/on-fleshling-safety-a-debate-by-klurl-and-trapaucius)

[Eliezer Yudkowsky](/users/eliezer_yudkowsky)

8mo

50

2

118[Response to nostalgebraist: proudly waving my moral-antirealist battle flag](/posts/8YhjpgQ2eLfnzQ7ec/response-to-nostalgebraist-proudly-waving-my-moral)

[Steven Byrnes](/users/steve2152)

2y

34

2

107[The Obliqueness Thesis](/posts/vdATCfuxdtdqM2wh9/the-obliqueness-thesis)

[Ω](https://alignmentforum.org/posts/vdATCfuxdtdqM2wh9/the-obliqueness-thesis)

[jessicata](/users/jessica-liu-taylor)

2y

[Ω](https://alignmentforum.org/posts/vdATCfuxdtdqM2wh9/the-obliqueness-thesis)

23

2

99[Pythia](/posts/qqEndN5Cuzbat9fyx/pythia)

[plex](/users/ete)

8mo

31

2

91[Coherence arguments imply a force for goal-directed behavior](/posts/DkcdXsP56g9kXyBdq/coherence-arguments-imply-a-force-for-goal-directed-behavior)

[](/recommendations)[Ω](https://alignmentforum.org/posts/DkcdXsP56g9kXyBdq/coherence-arguments-imply-a-force-for-goal-directed-behavior)

[KatjaGrace](/users/katjagrace)

5y

[](/recommendations)[Ω](https://alignmentforum.org/posts/DkcdXsP56g9kXyBdq/coherence-arguments-imply-a-force-for-goal-directed-behavior)

25

2

73[Anthropic’s focus on hyperstition](/posts/xhpktBLttPc6uXcHP/anthropic-s-focus-on-hyperstition)

[Simon Lermen](/users/simon-lermen)

2mo

39

2

68[When does competition lead to recognisable values?](/posts/LwSRbkecuqLJHdnJ7/when-does-competition-lead-to-recognisable-values)

[](https://postagi.org/talks/millidge-competition-values#transcript)

[Jan_Kulveit](/users/jan_kulveit), [beren](/users/beren-1), [David Duvenaud](/users/david-duvenaud), [Raymond Douglas](/users/raymond-douglas)

6mo

[](https://postagi.org/talks/millidge-competition-values#transcript)

18

2

68[Distinguishing claims about training vs deployment](/posts/L9HcyaiWBLYe7vXid/distinguishing-claims-about-training-vs-deployment)

[Ω](https://alignmentforum.org/posts/L9HcyaiWBLYe7vXid/distinguishing-claims-about-training-vs-deployment)

[Richard_Ngo](/users/ricraz)

5y

[Ω](https://alignmentforum.org/posts/L9HcyaiWBLYe7vXid/distinguishing-claims-about-training-vs-deployment)

29
