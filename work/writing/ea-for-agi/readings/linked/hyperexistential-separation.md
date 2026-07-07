---
title: "Separation from hyperexistential risk — LessWrong"
url: https://arbital.com/p/hyperexistential_separation
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. s-risks/beginners-guide-to-reducing-s-risks.md; hyperexistential separation concept — s-risks"
---

x

This website requires javascript to properly function. Consider activating javascript to get access to all site functionality. 

Separation from hyperexistential risk — LessWrong

# Separation from hyperexistential risk

Edited by [Eliezer Yudkowsky](/users/eliezer_yudkowsky) last updated 5th Dec 2017

A principle of [AI alignment](/w/ai-alignment) that does not seem reducible to [other principles](/w/principles-in-ai-alignment) is "The AGI design should be widely separated in the design space from any design that would constitute a hyperexistential risk". A hyperexistential risk is a "fate worse than death", that is, any AGI whose outcome is worse than quickly killing everyone and filling the universe with [paperclips](/w/paperclip).

As an example of this principle, suppose we could write a first-generation AGI which contained an explicit representation of our exact true value function V, but where we were not in this thought experiment absolutely sure that we'd solved the problem of getting the AGI to align on that explicit representation of a utility function. This would violate the principle of hyperexistential separation, because an AGI that optimizes V is near in the design space to one that optimizes −V. Similarly, suppose we can align an AGI on V but we're not certain we've built this AGI to be immune to decision-theoretic extortion. Then this AGI distinguishes the global minimum of V as the most effective threat against it, which is something that could increase the probability of V-minimizing scenarios being realized.

The concern here is a special case of [shalt-not backfire](/w/shalt-not-backfire) whereby identifying a negative outcome to the system moves us closer in the design space to realizing it.

One seemingly obvious patch to avoid disutility maximization might be to give the AGI a utility function U=V+W where W says that the absolute worst possible thing that can happen is for a piece of paper to have written on it the SHA256 hash of "Nopenopenope" plus 17. Then if, due to otherwise poor design permitting single-bit errors to have vast results, a cosmic ray flips the sign of the AGI's effective utility function, the AGI tiles the universe with pieces of paper like that; this is no worse than ordinary paperclips. Similarly, any extortion against the AGI would use such pieces of paper as a threat. W then functions as a honeypot or distractor for disutility maximizers which prevents them from minimizing our own true utility.

This patch would not actually work because this is a rare special case of a utility function _[not](/w/consequentialist-preferences-are-reflectively-stable-by)_ being [reflectively consistent](/w/reflective-consistency). By the same reasoning we use to add W to the AI's utility function U, we might expect the AGI to realize that the only thing causing this weird horrible event to happen would be that event's identification by its representation of U, and thus the AGI would be motivated to delete its representation of W from its successor's utility function.

A patch to the patch might be to have W single out a class of event which we didn't otherwise care about, but would otherwise happen at least once on its own over the otherwise expected history of the universe. If so, we'd need to weight W relative to V within U such that U still motivated expending only a small amount of effort on easily preventing the W-disvalued event, rather than all effort being spent on averting W to the neglect of V.

A deeper solution for an early-generation [Task AGI](/w/task-directed-agi) would be to _never try to explicitly represent complete human values,_ especially the parts of V that identify things we dislike more than death. If you avoid [impacts in general](/w/low-impact) except for operator-whitelisted impacts, then you would avoid negative impacts along the way, rather than the AI containing an explicit description of what is the worst sort of impact that needs to be avoided. In this case, the AGI just doesn't contain the information needed to compute states of the universe that we'd consider worse than death; flipping the sign of the utility function U, or subtracting components from U and then flipping the sign, doesn't identify any state we consider worse than paperclips. The AGI no longer _neighbors a hyperexistential risk in the design space;_ there is no longer a short path we can take in the design space, by any simple negative miracle, to get from the AGI to a fate worse than death.

Since hyperexistential catastrophes are narrow special cases (or at least it seems this way and we sure hope so), we can avoid them much more widely than ordinary existential risks. A Task AGI powerful enough to do anything [pivotal](/w/pivotal-act) seems unavoidably very close in the design space to something that would destroy the world if we took out all the internal limiters. By the act of having something powerful enough to destroy the world lying around, we are closely neighboring the destruction of the world within an obvious metric on possibilities. Anything powerful enough to save the world can be transformed by a simple negative miracle into something that (merely) destroys it.

But we don't fret terribly about how a calculator that can add 17 + 17 and get 34 is very close in the design space to a calculator that gets -34; we just try to prevent the errors that would take us there. We try to constrain the state trajectory narrowly enough that it doesn't slop over into any "neighboring" regions. This type of thinking is plausibly the best we can do for ordinary existential catastrophes, which occupy very large volumes of the design space near any AGI powerful enough to be helpful.

By contrast, an "I Have No Mouth And I Must Scream" scenario requires an AGI that specifically wants or identifies particular very-low-value regions of the outcome space. Most simple utility functions imply reconfiguring the universe in a way that merely kills us; a hyperexistential catastrophe is a much smaller target. Since hyperexistential risks can be extremely bad, we prefer to avoid even very tiny probabilities of them; and since they are narrow targets, it is reasonable to try to avoid _being anywhere near them_ in the state space. This can be seen as a kind of Murphy-proofing; we will naturally try to rigidify the state trajectory and perhaps succeed, but errors in our reasoning are likely to take us to nearby-neighboring possibilities despite our best efforts. You would still need bad luck on top of that to end up in the particular neighborhood that denotes a hyperexistential catastrophe, but this is the type of small possibility that seems worth minimizing further.

This principle implies that _general_ inference of human values should not be a target of an early-generation Task AGI. If a [meta-utility](/w/meta-utility-function) function U′ contains all of the information needed to identify all of V, then it contains all of the information needed to identify minima of V. This would be the case if e.g. an early-generation AGI was explicitly identifying a meta-goal along the lines of "learn all human values". However, this consideration weighing against general value learning of true human values might not apply to e.g. a Task AGI that was learning inductively from human-labeled examples, if the labeling humans were not trying to identify or distinguish within "dead or worse" and just assigned all such cases the same "bad" label. There are still subtleties to worry about in a case like that, by which simple negative miracles might end up identifying the true V anyway in a goal-valent way. But even on the first step of "use the same label for death and worse-than-death as events to be avoided, likewise all varieties of bad fates better than death as a type of consequence to notice and describe to human operators", it seems like we would have moved substantially further away in the design space from hyperexistential catastrophe.

Parents:

[Principles in AI alignment](/w/principles-in-ai-alignment)

[](/w/separation-from-hyperexistential-risk/history)

[Discussion](/w/separation-from-hyperexistential-risk/discussion)

7

[](/w/separation-from-hyperexistential-risk/history)

[Discussion](/w/separation-from-hyperexistential-risk/discussion)

7
