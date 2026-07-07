---
title: "What Are Suffering Subroutines?"
url: https://reducing-suffering.org/what-are-suffering-subroutines/
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by s-risks/s-risks-an-introduction; Tomasik on whether AI subprocesses could suffer, digital-minds/AI-welfare angle"
---

By Brian Tomasik

First published: 2017 Nov 01. Last nontrivial update: 2019 May 17.

## Summary

This page provides an introductory definition and explanation of "suffering subroutines", which are sub-agents within larger structures that might be seen as suffering to varying degrees. More thought is needed about how much various types of subroutines matter, how to assign positive vs. negative valence to their "experiences", how to individuate subroutines, and how to aggregate their welfare.

## Contents

  * Summary
  * Subroutines in programming languages
  * Generalized "subroutines"
  * Are subroutines sentient?
  * Subroutines and "hidden qualia"
  * High-level and low-level welfare can diverge
  * Conflicting goals within an operating system
    * Are there more total frustrated preferences or satisfied preferences?
  * Suffering in paradise
  * Multiple interpretations of preferences
    * Losing neural coalitions
    * Summing over all possible interpretations
  * Suffering vs. happiness
  * Subroutine individuation
  * How much do I care about low-level subroutines?
  * About this piece
  * Acknowledgments
  * Footnotes



## Subroutines in programming languages

[](https://pixabay.com/en/programming-computer-environment-1857236/ "Image is 'CC0 Creative Commons'. By 3844328. 'Free photo: Programming, Computer, Environment - Free Image on Pixabay - 1857236'")[Wikipedia ("Subroutine")](https://en.wikipedia.org/wiki/Subroutine "'Subroutine - Wikipedia'") explains: "In computer programming, a subroutine is a sequence of program instructions that perform a specific task, packaged as a unit. [...] In different programming languages, a subroutine may be called a procedure, a function, a routine, a method, or a subprogram."

A very simple example of a subroutine written in the Python programming language could be
    
    
    def area_of_circle(radius):
      area = 3.14 * radius ** 2
      return area
    

A subroutine (sometimes) takes inputs, performs processing, and (sometimes) returns outputs. One of the core principles of subroutines is that they're modular, i.e., they separate code into pieces that perform specific tasks, rather than trying to do everything in a jumbled way.

Because subroutines are typically targeted toward a specific task, we can imagine them as little agents with very simple "goals" (namely, the goals of doing what they're programmed to do). For example, a subroutine that sorts an array of numbers has the "goal" of sorting the array, and it "intelligently" takes actions consistent with that goal. Subroutines receive "input stimuli" in the form of function arguments (plus global variables and other variables in scope), perform "cognition" on those inputs, and express "behaviors" in the form of return values and/or [side effects](https://en.wikipedia.org/wiki/Side_effect_\(computer_science\) "'Side effect \(computer science\) - Wikipedia'").

## Generalized "subroutines"

The principle of modular abstractions runs throughout software engineering, beyond literal subroutines in a programming language. For example:

  * Object-oriented programming involves distinct objects (each with their own subroutines) that interact with one another.
  * Operating systems manage a variety of distinct [processes](https://en.wikipedia.org/wiki/Process_\(computing\) "'Process \(computing\) - Wikipedia'"), which have their own "goals", memory, state variables, and so on.
  * "Service-oriented architecture aims to allow users to combine large chunks of functionality to form applications which are built purely from existing services and combining them in an ad hoc manner. A service presents a simple interface to the requester that abstracts away the underlying complexity acting as a black box" ([Wikipedia "Service-oriented architecture").](https://en.wikipedia.org/wiki/Service-oriented_architecture "'Service-oriented architecture - Wikipedia'")
  * Some software companies provide complete software solutions that can be used as figurative "subroutines" by other companies. For example, Google Drive is a cloud service that can be used by businesses for storing internal documents. Heroku can be used by startups to deploy web applications. And so on.



Moving beyond software, we can see "subroutines" in other human and natural structures. For example, the US government has three main "subroutines" (legislative, executive, and judicial branches), and each of these is composed of further subroutines. The executive branch contains various departments, which contain sub-departments, and so on.

Animals contain various organ systems as "subroutines", and these are made up of organs, which are made of tissues, which are made of cells, which are made of organelles, and so on. As [Wikipedia ("Biological organisation")](https://en.wikipedia.org/wiki/Biological_organisation "'Biological organisation - Wikipedia'") points out: "The traditional hierarchy[ of biological organization] extends from atoms to biospheres." So, for example, we can even picture a molecule as implementing, among other things, the "hold atoms together" subroutine. Atoms can be seen as composed of electron, proton, and neutron subroutines, and protons and neutrons contain quark subroutines.

While structures at all levels of organizations can be seen as subroutines—including ecosystems, civilizations, and even the whole multiverse—when people use the terminology "suffering subroutines", they typically have in mind lower levels of organization, especially those components of a system that are too simple to speak up for themselves in an explicit way. So, for example, computations run in Google's data centers or farmed silkworms are closer to prototypical "subroutines" than are wealthy humans.

## Are subroutines sentient?

Some generalized subroutines are clearly sentient. For example, the "human player" subroutines that comprise a soccer team have phenomenal experiences. So do the "mammal" subroutines present within a biocenosis. The sentience of non-animal subroutines is more debatable.

I think looking at humans as one kind of subroutine within a world composed of subroutines helps make it intuitively plausible that other subroutines can also be sentient in their own ways. All subroutines have the same basic form: take in inputs, perform internal computations, and return outputs. All subroutines can be seen as acting to achieve some goal(s). The subroutines we call humans have very detailed inputs and rich cognitive processing, but I don't see any sharp boundaries between humans and simpler subroutines—just differences in degree of complexity and sophistication.

Elsewhere, I and other authors have argued for the sentience of at least certain kinds of non-animal subroutines, such as laptops ([Tomasik "Why Your ..."](/why-your-laptop-may-be-marginally-sentient/ "'Why Your Laptop May Be Marginally Sentient | Essays on Reducing Suffering'")) and reinforcement-learning agents ([PETRL n.d.](http://petrl.org/ "'People for the Ethical Treatment of Reinforcement Learners'")). One needn't be committed to the sentience of all subroutines to believe that at least some subroutines, perhaps including relatively simple ones, can have "experiences" that are at least slightly "conscious".

A further question is how much to care about simple subroutines. Personally, my emotions are not strongly moved by, e.g., most present-day software applications, even when such applications are terminated before they can complete their tasks. As humans (regrettably) continue to develop more self-aware software, I'll care more about the welfare of such software agents.

A hypothetical cosmic-scale civilization might run enormous numbers of subroutines as part of its computations. Would such subroutines deserve large amounts of moral weight, or only trivial amounts? I'm very undecided on this matter, and my feelings would be refined by better understanding what functional components of human conscious experience I care about and to what degree those components are implemented in even relatively simple subroutines.

## Subroutines and "hidden qualia"

Your brain and body contain numerous subroutines at various levels of abstraction. You might ask: How can there be little conscious subagents within my head if I'm unaware of them? Doesn't my being unaware of them imply that they're unconscious?

Some philosophers maintain that, yes, high-level ability to think about, deliberately act upon, and/or report one's mental contents (what [Block (1995)](
https://doi.org/10.1017/S0140525X00038188 "'On a confusion about a function of consciousness'") calls "access-consciousness") is part of the definition of consciousness, and therefore, unreportable subroutines are necessarily unconscious.

This view assumes some precisified and presumably sophisticated notion of what counts as introspective cognitive access. Such a definition would presumably exclude from counting as introspective access, for example, a Perl script printing out the statement "I'm conscious that my input was 42", even if the input variable (having the value 42) was, in a very simplistic sense, "poised for use as a premise in reasoning, [...] poised for rational control of action, and [...] poised for rational control of speech", to use Block (1995)'s criteria for access-consciousness (p. 231). Block (1995) says regarding definitions of access-consciousness: "There is no right or wrong here. Access comes in various degrees and kinds" (p. 232). [Graham (1995)](https://doi.org/10.1017/S0140525X00038279 "'Guilty consciousness'"): "Between plenty of access-consciousness and no access-consciousness lies the huge conceptual midway of _some_ access-consciousness" (p. 256).

Other philosophers feel that definitions of consciousness that require (some particular and sophisticated notion of) cognitive access are overly parochial. Such philosophers may be open to the possibility of "hidden qualia", which [Muehlhauser (2017)](https://www.openphilanthropy.org/2017-report-consciousness-and-moral-patienthood "'2017 Report on Consciousness and Moral Patienthood | Open Philanthropy Project'") defines as "conscious experiences — in the human brain and perhaps in other minds — that are not accessible to introspection, verbal report, and so on. [...] Perhaps (e.g.) the dorsal stream [of the human visual system] _is_ conscious, but its conscious experiences simply are not accessible to 'my' introspective processes and the memory and verbal reporting modules that are hooked up to 'my' introspective processes."

[Gregg (2006)](http://www.jrg3.net/mind/dennett.html "'John Gregg: Daniel Dennett'"):

> There are, in fact, consciousnesses within my skull that swim out of reach of any demon [i.e., subroutine] or collection of demons that might generate utterances or typings about what "I" am or were conscious of at any particular time. This should not seem odd, frankly, even to a reductive materialist. However you define consciousness, assuming you find any use for the term whatsoever, why is it impossible, or even unlikely, that the submodules and sub-submodules that comprise my mind might themselves individually qualify as conscious? And if they do qualify as conscious, they might not all necessarily be patched into any larger consciousness, or feed into any higher level of consciousness. 

To see this vividly, consider the example of a [China brain](https://en.wikipedia.org/wiki/China_brain "'China brain - Wikipedia'")—the citizens of China emulating a conscious brain using communication over telephones or walkie-talkies. If you're a functionalist, you should think the China brain is conscious. And of course, the individual Chinese citizens are also conscious. Yet the China brain has no direct introspective access to the minds of any of the human subroutines of which it's composed. Rather, the China brain only has cognitive access to its own input stimuli and its own internal, high-level thoughts.

## High-level and low-level welfare can diverge

The China brain example also makes clear another observation: the wellbeing of a high-level mind isn't necessarily the same as the wellbeing of its subroutines. For example, perhaps all the Chinese citizens implementing the China brain are tired, miserable, and stressed, but the brain being emulated is happy and relaxed.

The human enteric nervous system (ENS), sometimes called our "second brain", is a relatively autonomous subroutine of the human nervous system. While the ENS communicates with our skull-bound brain, most of what it does lies beyond access-consciousness. "The cephalic brain communicates with the smaller brain in the gut in a manner analogous to that of interactive communication between networked computers" ([Wood 1994](https://smile.amazon.com/Physiology-Gastrointestinal-Tract-2-Set/dp/0781701325/ "Wood J D. Physiology of the enteric nervous system. In: Johnson LR, ed. Physiology of the gastrointestinal tract. 3rd ed. \(Vol.1\). New York: Raven Press, 1994."), p. 424, qtd. in [McMillin et al. 2007](https://doi.org/10.1089/acm.1999.5.575 "'The Abdominal Brain and Enteric Nervous System'")). It's plausible that the ENS has some degree of consciousness of its own—e.g., see footnote 23 of Muehlhauser (2017). I don't know what factors affect the welfare of the ENS, but let's imagine for the sake of illustration that alcohol causes it to suffer. In that case, a person's skull-bound brain might feel pleasure from alcohol consumption even though one of that person's subroutines was suffering from the same action.

As another example, consider competing neural coalitions in the global-workspace model of the brain. [Wikipedia ("Global ...")](https://en.wikipedia.org/wiki/Global_workspace_theory_\(GWT\) "'Global workspace theory \(GWT\) - Wikipedia'") explains: "Individual as well as allied processes compete for access to the global workspace, striving to disseminate their messages to all other processes in an effort to recruit more cohorts and thereby increase the likelihood of achieving their goals." If two such neural coalitions are opposed to one another, then when one coalition "wins" (and is available to speech and action), the other coalition, which had opposite preferences, loses. The losing subroutine would thus seemingly suffer preference frustration at the same time as the winner achieved preference satisfaction. (Does the losing coalition actually suffer from not winning, or is it "okay" with not winning? See the later subsection on "Losing neural coalitions".)

[Swimmer963 (2014)](https://web.archive.org/web/20170426063244/http://swimmer963.com/?p=370 "'Consent in a society of mind'") notes that humans "are all societies of mind–more or less coherent, more or less unified." As a result, consent by a dominating volitional impulse may not imply consent by weaker volitional impulses. Speaking about a Pap smear, Swimmer963 (2014) explains:

> I don’t want to die of cervical cancer that was diagnosed too late. I’m pretty clear on that, and I’m also pretty sure that five minutes of pain once every several years is worth it. I can do the math–or, at least, the ‘I’ that speaks for me understands math. But I can’t bring all the parts of myself on board with this. The part of me that doesn’t want anything or anyone anywhere near my vagina is…well, not convinced by math, probably not capable of math, and also doesn’t give a shit about reasonable explanations. 

In her example, those losing volitional impulses didn't suffer in silence: "I’d been screaming in pain and she hadn’t stopped." But in other cases, protesting neural signals or volitions may not ever become access-conscious to the parts of our brains that think linguistically.

## Conflicting goals within an operating system

One example where high-level and low-level agents can have divergent welfare is the case of operating systems managing processes. As implemented in present-day computers, operating systems and processes are hardly the epitome of sentience, but I think their preferences matter to a vanishing degree, and in any case, they help illustrate the kinds of conflicts that tend to arise in computational systems.

Operating systems sometimes [terminate processes](https://en.wikipedia.org/wiki/Process_management_\(computing\)#Process_termination "'Process management \(computing\) - Wikipedia': 'Process termination'") before those processes finish running. The operating system presumably has a reason for doing so, and from its perspective, terminating the process is consistent with its overall goals. However, the terminated process itself is a simpler entity that only wants to keep running and do what it's trying to do. From its perspective, being terminated thwarts achievement of its goal. Because the individual process is too simple to realize that its termination is "for the greater good", it's "not okay" with being terminated. (Of course, the process is also too simple to understand that it's being terminated, but termination still violates the process's implicit preferences.)

We can see a similar idea in macroscopic contexts. For example:

  * Imagine that a group of prehistoric humans is being chased by a predator. One of the humans in the group has a genetic mutation that makes him less able to run away. He succumbs to the predator and cries out in agony as the predator rips his skin. If we take the perspective of "the human species" as a larger entity, perhaps this loss of one human is net positive because eliminating the mutation from the gene pool is "for the greater good". But that fact doesn't make death by predation any more bearable for the individual person killed.
  * Speaking of process termination, the _Terminator_ series provides another example. If we consider {Skynet + the world} as a larger system, then perhaps terminating a few counterproductive processes (i.e., humans) is "for the greater good" of the system. But the individual processes being terminated don't feel the same way.



In these examples, the terminated processes are vastly more complex and self-reflective than an operating system's processes, and almost all of the suffering that humans feel from dying is absent when a process on your laptop is terminated. Still, some of the barebones outlines of the situation, such as frustration of goals, are common between the two cases.

Processes may also have their goals frustrated after their "deaths". For example, suppose a process writes some data to disk. That process, considered by itself, "wants" those bits to be written there. But later, after the process has ended, another process may overwrite those bits with different values. An anthropomorphic analogy could be when one family of ancient humans seized land for itself, hoping to retain the land within the family forever, but after the family disappeared, the land was taken over by a different family.

### Are there more total frustrated preferences or satisfied preferences?

Imagine that a region of a hard disk is written to 20 times over the course of its life, by 20 different processes. Each process "wants" to write a given pattern of bits to the disk. However, at the end of the day, only the last of those 20 processes gets what it wants. The previous 19 processes all have their goals thwarted sooner or later, because for each of those 19 processes, its preferred pattern of bits gets overwritten. Indeed, even the last process arguably has its goal thwarted when the hard disk is either destroyed or just thrown out and left to degrade.

A similar situation could be said to obtain regarding human preferences. For example, most of the gods that humans have worshipped throughout their history are no longer worshipped (at least not by any appreciable number of humans). And once intelligent life eventually goes extinct one way or another, there will be no one to worship any of those gods. In some sense, all the preferences that people had that "god X should be worshipped" would be frustrated from that point on indefinitely into the universe's possibly infinite future. The satisfaction of these preferences was a tiny blip in an otherwise endless sea of frustration of those preferences.

Framings like this may lead one to conclude that preference frustration overwhelmingly outnumbers preference satisfaction. On the other hand, I think such a conclusion depends a lot on the arbitrary way in which we try to count preferences. For example, all 20 processes that wrote to the hard disk could be seen as having a preference that "there should be _some kind of_ pattern of bits written on the disk", and that preference was always satisfied (until the disk itself died). Many past humans may have had the preference that "people should do religious worship", and that preference was largely satisfied throughout human history.

Also, maybe some preferences implicitly have a time limit, like: "humans should worship while humans exist at all". This framing avoids the conclusion that many of our preferences are frustrated indefinitely into the future of the universe. On the other hand, many people have preferences that _don't_ expire, like "I wish I could live forever." That preference is unsatisfied at all points in time in the universe. Still, other preferences are satisfied for all time, like "I _don't_ want to live forever" or "I'm glad I got to exist at least for a brief duration" or "I hope I never get eaten by a square circle".

## Suffering in paradise

As we've seen, there seems to be a good degree of orthogonality between the welfare of sufficiently low-level subroutines and the welfare of high-level subroutines. Imagine a posthuman paradise in which advanced human-like beings are simulated in blissful utopian worlds, never experiencing (access-conscious) suffering. Their minds might nonetheless contain suffering subroutines, such as neural signals that fail to win control of action, or signals within cognitive modules that are inherently inaccessible to explicit report. In addition, the machines running such simulations might themselves contain suffering subroutines, such as in their operating systems. Thus, there might still be suffering in paradise—silent, voiceless suffering only recognizable to the access-conscious parts of human-like minds by theoretical philosophical contemplation.

Low-level suffering subroutines seem particularly difficult to avoid. Probably some computational architectures and design patterns have fewer suffering subroutines than others. But _eliminating_ suffering on the part of simple computational processes seems impossible, unless you dispense with computation altogether. If one cares a lot about suffering subroutines (and I'm not sure whether I do), then "total amount of computation in the future" might be a better metric for how much suffering a posthuman future will contain than "humaneness of future civilization toward its higher-level computational agents".

It's possible that a hypothetical posthuman utopia would contain more suffering subroutines than, e.g., galaxies filled with [paperclip factories](https://foundational-research.org/artificial-intelligence-and-its-implications-for-future-suffering#Would_paperclip_factories_be_monotonous "'Artificial Intelligence and Its Implications for Future Suffering – Foundational Research Institute': 'Would paperclip factories be monotonous?'"), because human brains are complex computational systems with fairly intelligent subroutines, and simulating them would plausibly give rise to more sentient subroutines than, e.g., deploying robots to oversee relatively monolithic paperclip-production plants. Of course, compassionless paperclip-maximizing artificial intelligences might create lots of suffering subroutines in other ways, such as by running large numbers of simulations of evolution in order to study extraterrestrial life.

I should add that my talk about paradise is only hypothetical. I find it very unlikely that Earth-originating intelligence will actually achieve an outcome that many humans would consider utopian. If humans don't lose control of the future entirely, it's overwhelmingly likely that the future will be some mediocre outcome (even ignoring considerations of suffering subroutines), in a similar way as democracy produces mediocre rather than utopian outcomes.

## Multiple interpretations of preferences

Let's consider one common operation where we might think that suffering subroutines could be present: selecting the next action to take. Action selection is the process of choosing, among many possible actions at a given time, just one or a few actions to actually perform. For example, we might have a neural network whose output neurons "vote" for different actions, and only the highest-scoring output neuron "wins" the contest to control action.

Do the output neurons voting for non-winning actions count as suffering (or at least preference-frustrated) subroutines? I'm not sure. On the one hand, we can envision an output neuron as expressing the goal of having its action taken, because it produces activation that, if sufficiently strong, will control action. On the other hand, we could picture an output neuron as merely having the goal of accurately reporting how good its action appears, without any preference for its particular action to actually be chosen. Presumably there are many other possible interpretations as well. (These questions are not obvious, and in general I don't have settled answers on the issues discussed in this piece.)

How would we decide in the human case between the "I want to get selected" preference versus the "I want to report information and let the decision happen as it may" preference? For example, imagine that people are applying for a job, and the highest-scoring applicant will be chosen. The act of a person submitting her application form, by itself, doesn't allow us to distinguish between the two possible preferences. Rather, we need additional context. For example, does the applicant's brain, when contemplating the scenario of getting hired, generate non-verbal "I like this" signals? Do those "I like this" signals motivate planning of how to increase the applicant's chances of getting chosen? Did the applicant send a batch of (vegan) cookies to the selection committee order to bias the reviewers in her favor? And so on.

And how do we know whether signals in a person's brain are "I like this" messages or "Bananas are yellow" messages? Activation of specific neurons in a person's brain, when viewed in isolation without the context of the rest of the brain, doesn't have a specific meaning; it's just some neurons firing with some pattern. Like interpreting preferences, interpreting the meaning of signals in a brain requires context, such as what follow-on brain processes are produced by the signals.

It's worth remembering that preferences, and other mental states, aren't fundamental to the universe's ontology. Rather, they're high-level, fictional attributions that we apply to physical systems. And these attributions apply more clearly when we have more context about a system. Since simple systems have less context, it's harder to apply mental-state interpretations to these systems, and when we do, we have more possible interpretations to choose among.

In fact, there's nothing unique to consciousness or the philosophy of mind about this point. It's a general statement about concepts that humans invent that are abstracted above the level of fundamental physics. For example, consider the concepts of "table" and "chair". Suppose you see a waist-high boulder on a beach. Is that boulder a table or a chair? You might say that it's neither a table nor a chair, and such a view is reasonable. Rejecting both the "table" and "chair" labels is like saying that an output node of a neural network doesn't have any preferences. Still, if you did aim to apply the "tableness" and "chairness" concepts to the boulder, because it does satisfy those concepts to a trivial degree, which concept would you choose? It's not obvious. But suppose we now add a wooden back support to one side of the boulder, so that if you sit on it, you can lean your back against the back support. Now the concept of "chair" seems to apply to the boulder more strongly than before, and the concept of "table" applies less strongly. On the other hand, suppose we added a tablecloth and salt shakers to the boulder. Then it would match the concept of "table" better and "chair" worse than before.

The lesson is that adding context helps distinguish among possible interpretations of concepts in general. While this might seem obvious, I find it's easy to get tripped up when thinking about "consciousness", "preferences", and other mental-state concepts because we feel like those things are somehow "real" in a way that chairness and tableness are not. Substituting "tableness" for any philosophical questions having to do with "consciousness" or "preferences" can be expected to alleviate confusion.

Is this indeterminacy about which interpretation to apply to a subroutine similar to the so-called triviality objection against functionalism in the philosophy of mind (e.g., [Godfrey-Smith 2009](https://doi.org/10.1007/s11098-008-9231-3 "'Triviality arguments against functionalism'"))? I'm a bit confused on this topic, but tentatively I think that, yes, these are the same basic problem. In both cases, we're trying to attribute a high-level, fictional construct (whether an algorithm or a preference/emotion) to a system, and in both cases, there are multiple possible constructs that could be attributed to the same system—some more plausible than others. If there's an interpretation of John Searle's wall according to which it's implementing WordStar ([Searle 1992](https://smile.amazon.com/Rediscovery-Mind-Representation/dp/026269154X/ "'The Rediscovery of the Mind \(Representation and Mind\)'"), pp. 208-09), there's also an interpretation according to which it's implementing WordPerfect, another according to which it's implementing Microsoft Excel, and another according to which it's instantiating the mental property of preference frustration.

Let's return to our situation of several output neurons firing with varying strengths in order to choose an action to take. The "preference" of an output neuron would be clarified if it was part of a larger system to provide more context. For example, if one output neuron was hooked up to an algorithm that actively sabotaged the competing output neurons, devised strategies to hide this sabotage from programmers, and so on, then it would seem more clear that the {output neuron + sabotage system} wanted to win at all costs rather than merely letting the highest-scoring neuron win.

Suppose we include all the output neurons within our conception of the subroutine, both the sabotager and sabotagees: the subroutine is now {sabotager output neuron + sabotage system + sabotagee output neurons}. This system still "prefers" to engage in sabotage, but now that the sabotagee neurons are part of the system, we might interpret them as being "okay" with being sabotaged, because they're part of a larger whole that wants to sabotage them. In contrast, when they're not part of the system, we can interpret them as being victims of the external sabotager. This example suggests that the preferences we attribute are relative to the boundaries of a system—what things count as "part of itself" and what things count as "outside evils" (Caspar Oesterheld, personal communication, 25 May 2015). Of course, the decision of how to carve up the boundaries of an "agent" as separated from its "environment" is often fairly arbitrary.

### Losing neural coalitions

Previously I discussed losing neural coalitions in the global-workspace model of cognition. At first glance, it seems like these coalitions were pushing to win but were overridden by a stronger coalition. However, as we saw with action selection based on output neurons of a neural network, another interpretation is that coalitions just want to have the strength that they have and "let the best man win". How could we distinguish among these interpretations?

One idea could be to look at whether a losing coalition managed to have any influence at all. For example, suppose the brain in question was viewing a potentially startling stimulus, such as a hose that appears somewhat like a snake. Imagine that the losing neural coalition was pushing for fear and avoidance of the hose, while the winning neural coalition pushed for interpreting the hose as harmless.a If the losing neural coalition was merely pushing for a sensory interpretation and had no other effects on the brain, then maybe it would be fair to say that the losing coalition just wanted the best interpretation to win. On the other hand, if the losing coalition already began to have some localized effects on other parts of the brain—such as slightly stimulating the fight-or-flight response and slightly triggering reinforcement learning to avoid such situations in the future (is this biologically plausible?)—then it seems more fair to say that the losing coalition actually had a preference to produce escape and avoidance, and this preference was quashed by the winning coalition.

Still, even if the losing coalition took some "actions" toward its goals, I suppose one could allege that the losing coalition only wanted to achieve as much influence as it did and then was fine with being quashed. Lest we think this alternate interpretation is only a problem for extremely simple agents, I would suggest that we might also be able to apply the same alternate interpretation to an instance where, for example, a rabbit is instantaneously killed by a shot to the head: we could say that the rabbit's brain only wanted to take as many actions as it took and then was "fine" with being destroyed, as evidenced by the fact that it was in fact destroyed. This seems wrong, but it's not obvious how to explain why. Maybe we could say that the rabbit had made preparations for its continued existence, implying a desire to continue existing. But the losing neural coalition had also made (rudimentary) preparations to increase the likelihood of its continued existence by, e.g., starting to trigger the fight-or-flight response, which would help to perpetuate the neural coalition's goals of causing fear/escape.

Maybe preference frustration is most clear in cases where the frustrated entity continues to exist, so that its brain can trigger "I don't like this" signals as a result of not achieving the desired goal. I don't think there's a robust sense in which a losing coalition in the global-workspace model triggers "I don't like this" signals to itself. That said, if the losing coalition's impulse isn't completely quashed, it may continue fighting for the control of the brain on subsequent rounds of the battle. For example, the "snake fear" impulse may have been quashed by interpreting the hose as harmless, but perhaps there was slight sympathetic arousal that will, a few moments later, enhance a fear response to something else. Does this mean that the "fear coalition" actually didn't want to lose after all? Or only that it wants to continue playing the sporting match and continue to let the best man win?

Subroutines like reinforcement-learning agents who have explicit reward and punishment measures seem to have more robustly interpretable preferences, since they update their actions to avoid bad events in the future. A losing neural coalition who, after losing, changed its strategy to reduce its chance of losing the next time, would seem to have a relatively clear preference to avoid losing. Of course, even in this case, we could invent (perhaps more strained) stories about how the losing coalition was fine with losing on the first round and now is just updating its strategy because it feels like it.

In principle these kinds of strained interpretations are even possible for humans: for example, maybe Bob didn't actually suffer from an electric shock, but he just wanted to recoil, activate pain regions of his brain, say "ouch!", and update his future behaviors to avoid shocks going forward. This interpretation feels strained because we have so much context in which to situate Bob's responses to the electric shock, and his many responses collectively jibe much better with the concept of "suffering" than "absence of suffering". The statement that "Yes, Bob recoiled, activated pain brain regions, verbalized a distress signal, and tried to avoid similar situations again, but was he actually _suffering_?" is analogous to the statement that "Yes, this wooden structure has legs and a flat surface, has a tablecloth on it, and is used for eating from, but is it actually a _table_?"

### Summing over all possible interpretations

Ordinarily we treat a physical system as embodying the single most plausible high-level interpretation that comes to mind. For example, if a person stubs her toe and yells "Ow!", we apply the interpretation of "that person is in pain and wishes she hadn't stubbed her toe" rather than, for example, "that person is stoically doing whatever comes her way and happened to make a pain-sounding vocalization". These different interpretations can be argued for and against based on behavioral and functional evidence, as well as fleshing out what we have in mind by these different concepts.

Often, a physical system matches many concepts simultaneously. For example, the toe stubber matches both the concept of "in pain" and "prefrence frustration" at once. A flat wooden object with four legs that you eat at can match all of the concepts "table", "furniture", "arm rest", "anthropological artifact", "made of carbon-based molecules", and so on, to varying degrees.

Insofar as we assign moral value to various high-level concepts, we can assign value to physical systems by interpreting them as embodying those high-level concepts. For example, being in mild pain is somewhat bad; say its value is -1. The act of stubbing a toe embodies the "mild pain" concept, which has value -1.

It's quite normal for the same physical event to embody several morally laden concepts with perhaps conflicting valences. For example, allowing a pro-Nazi lecture is a physical process that matches both the concept "free speech" (which generally has positive moral valence) and "supporting Nazis" (which generally has negative moral valence).

In general, we can imagine a physical system P as embodying an infinite number of concepts C1, C2, ..., each of which applies to P with some degree of plausibility: plausibility(P, Ci). Assume these plausibility values are normalized such that, for a given P,

Σi=1∞ plausibility(P, Ci) = 1. 

Then we can morally value P as

value(P) = Σi=1∞ value(Ci) * plausibility(P, Ci). 

This is a simpler and broader version of the formula in the section "Using many possible interpretations?" of [Tomasik ("How ...")](/interpret-physical-system-mind/ "'How to Interpret a Physical System as a Mind | Essays on Reducing Suffering'"), where instead of summing over algorithmic interpretations I'm summing over concepts in general, including concepts like "sadness" or "justice", which aren't explicit algorithms. The basic idea is the same, though.

Normally, when we apply this formula, we focus on just the most plausible of the morally relevant concepts to attribute to a system. For example, imagine a video-game enemy that executes appropriate actions in various situations to attack you and defend against your attacks. When you kill this enemy, we may ask whether you frustrated the enemy's "goals"—namely, the goals of attacking you and defending itself ([Tomasik "Do ..."](/do-video-game-characters-matter-morally/ "'Do Video-Game Characters Matter Morally? | Essays on Reducing Suffering'")). We focus on the concept C1 = "goal frustration" and value the process P of killing the video-game enemy as

value(P) ≈ value(C1) * plausibility(P, C1), 

ignoring all the additional summands on the assumption they're even more implausible or not morally important. value(C1) might be a fairly large negative number, like -100, since normally it's bad to seriously frustrate the preferences of another agent. However, plausibility(P, C1) is quite low because the video-game enemy was so cognitively simple that it only _barely_ could be said to have any preferences at all, if we take prototypical "preferences" to be the more fleshed-out kinds of volitions found in advanced animals. This can explain why we give video-game enemies such low moral weight on account of their simplicity.b

The above framework may help remove some of the mystery about whether, for example, a losing neural coalition actually wanted to win or not. The answer is that there are various possible interpretations, with varying degrees of plausibility. Of course, the hard part is to assign the degrees of plausibility. That requires a long, morally laden, and subjective process of analyzing concepts and deciding how much we want to apply various concepts to various physical systems.

## Suffering vs. happiness

Subroutines don't only experience suffering. Humans are subroutines who also experience happiness, excitement, love, and so on. Computer processes that successfully terminate may be seen as having satisfied their goals (at least until later processes undo those accomplishments). Reinforcement-learning agents can receive better-than-usual rewards from the environment.

This raises the question of what distinguishes positive and negative welfare, especially in computational agents too simple to tell us explicitly about the valence of their emotional states. It's tricky to explain what distinguishes suffering from happiness even in biological animals ([Tomasik "Why Organisms ..."](/why-organisms-feel-both-suffering-and-happiness/ "'Why Organisms Feel Both Suffering and Happiness | Essays on Reducing Suffering'")), and when to attribute positive vs. negative valence to simple artificial agents such as reinforcement learners is an open problem ([Tomasik "Do ..."](https://arxiv.org/abs/1410.8233 "'Do Artificial Reinforcement-Learning Agents Matter Morally?'"), pp. 18-21).

Consider the case of an ordinary subroutine in a programming language. There are many possible ways to evaluate the subroutine's welfare, but one is to assess goal achievement. Imagine a subroutine that, say, implements [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm "'Dijkstra's algorithm - Wikipedia'") to find a shortest path in a graph. Assuming the algorithm usually runs to completion, then we might say that the algorithm almost always achieves its goal. So it's a "happy subroutine", right? Another perspective is to say that for almost all of the execution time of the algorithm, it has not found the shortest path, so for most of its "lifetime", its preference is unsatisfied. So it's a "sad subroutine"? But the algorithm's "tentative distances" keep getting updated toward better and better values as the algorithm progresses, so the algorithm can "see" that it's continually making progress toward its goal, which is good, right? On the other hand, the algorithm is constantly trying to change things, by modifying variables during its execution, which suggests that the algorithm is "restless" and "unsatisfied"? And so on. There are many possible, conflicting ways to morally value the same algorithm.

This is another case of many possible interpretations that can be applied to the same physical or algorithmic system. There are different possible definitions of what "happiness" and "suffering" mean, and each of the different ways of fleshing out happiness and suffering can be applied to the execution of Dijkstra's algorithm to varying degrees.

Of course, subroutines like Dijkstra's algorithm might be seen as too simple to legitimately have a welfare level. But we could imagine augmenting the basic Dijkstra subroutine with additional components that would increase its degree of sophisticated agency. For example, we could give the subroutine some understanding of concepts like "self", "goal", "progress", and "good/bad" and then provide the subroutine with an internal model of itself as an agent with a goal that has made such-and-such progress toward finding the shortest path. The extent to which the agent seems to be striving for its goal could be increased if the subroutine could also strategize about ways to prevent humans from shutting it off and steal additional hardware for running on. Intuitively, if I saw a computer program strategically preventing me from shutting it off using complex and intelligent tactics, I would say to myself, "Wow, this algorithm really wants to keep running, doesn't it?"

Does adding cognitive sophistication make it easier to evaluate the sign (positive or negative) of an agent's welfare? I'm not sure. Does the enhanced self-modeling-and-shut-off-avoiding Dijkstra subroutine seem to have positive or negative welfare? It's still not really clear to me. Even though the algorithm's degree of preference to achieve its goals has clearly been enhanced by the additional functionality, I still don't have a good way of arguing whether the enhanced algorithm fits our concept of "happiness" or "suffering" more.

Maybe this isn't extremely surprising. As I write this paragraph, if I ask myself whether my own hedonic experience is net positive or net negative, I say: "Umm, I don't know. It feels sort of neutral. I do feel a strong _preference_ to finish writing this paragraph and make sure it's clear, and I would be frustrated if I were prevented from doing that. But my mental state at the moment doesn't strongly match either the concept of 'happiness' or the concept of 'suffering'."c

Does a simple artificial reinforcement-learning agent have positive or negative welfare? It's tempting to answer this question by looking at the sign of the rewards that the agent receives, saying that positive rewards (like +5) are pleasurable, while negative rewards (like -8) are painful. However, we may be able to shift all the agent's rewards up or down by a constant amount while leaving the agent's behavior unchanged. So the literal sign of the rewards can't determine the distinction between pleasure and pain. My best answer to this puzzle is to say that a simple reinforcement-learning agent is like a boulder, "pleasure" is like the concept of "chair", and "pain" is like the concept of "table". Is a boulder more of a chair or more of a table? Is a simple reinforcement-learning agent happy or anguished? In both cases, the entity under consideration doesn't strongly match to either of the applicable concepts, though it does slightly match both concepts.

For an agent that can conceptualize its own unconsciousness and can think linguistically about its experiences, we can ask whether the agent would prefer temporary cessation of its experience at a given time. If yes, the experience can be said to have negative welfare. But these kinds of high-level linguistic evaluations are hard to come by for simpler subroutines (including non-human animals). Plus, even in a human, high-level linguistic evaluation of the sign of one's experience omits the opinions of large numbers of subroutines within the person's brain and body that don't have control over what the linguistic system says.

For consequentialists who "give more moral weight" to suffering than happiness, uncertainty or unclarity over the degree of suffering vs. happiness in subroutines favors policies of reducing the number and sentience of subroutines.

## Subroutine individuation

What counts as a subroutine? Sufficiently individuated objects seem to—computer programs, animals, molecules, etc. But what about less individuated things?

From a programmer's point of view, organizing code into modular structures is pragmatically important. However, at a more philosophical level, we can ask whether it matters intrinsically whether code is actually grouped into subroutines or whether non-modular spaghetti code can also be seen as implementing lots of little _implicit_ goal-directed "agents", even if the agents are intermingled among the lines of a very long, unstructured program.

If a program does two distinct tasks, such as counting the words in a file and making an HTTP request, without grouping these tasks into explicit subroutines, can we still say that the program contains two (or more) implicit subroutines?

Also, compilers might perform "inline expansion" on a function, avoiding a function call by copying the function's instructions directly into the calling program. Presumably these instructions are still conceptually a subroutine whether they're literally done by a function call or not. 

If we take even more arbitrary groupings of things, do they still count as a subroutine? For example, is the left side of my body one subroutine, while the right side is another? Is "every part of my body except my nose" its own subroutine?

If a subroutine is fundamentally an input-output box, then it would seem that any subset of the universe can be a subroutine, since any subset of the universe receives inputs from the "environment" (the rest of the universe), does stuff within itself, and has output that once again affects the environment. These subsets of the universe needn't even be spatiotemporally connected.

Issues of this sort are discussed in [Tomasik ("Fuzzy ...")](/fuzzy-nested-minds-problematize-utilitarian-aggregation/ "'Fuzzy, Nested Minds Problematize Utilitarian Aggregation | Essays on Reducing Suffering'"). I don't have a great solution for dealing with the profusion of individual agents that emerges from thinking in this way, but these types of puzzles are not unique to those who consider subroutines to have moral importance.

## How much do I care about low-level subroutines?

Currently my heartstrings are not tugged very much by simple subroutines, such as those found in present-day software. Such subroutines seem to have exceedingly little "consciousness", and they usually don't appear very emotional.

The principle that "if a thing is trying to do X, it has a revealed preference for X" can be applied to software subroutines, but it can also be applied to the entities of fundamental physics. For example, two electrons that repel each other are showing a revealed preference to be further apart. And the entities of fundamental physics vastly outnumber present or future software subroutines. So insofar as we find arguments like this convincing, we should probably worry astronomically more about fundamental physics (see [Tomasik "Is ..."](/is-there-suffering-in-fundamental-physics/ "'Is There Suffering in Fundamental Physics? | Essays on Reducing Suffering'")).

Are software subroutines more sentient than fundamental physics?

  * Software subroutines can respond flexibly and "intelligently" to a variety of "input stimuli", although physical particles also respond flexibly to a variety of different physical conditions.
  * Software can compute complex mathematical functions, but physical particles also, in some sense, compute extremely sophisticated physical equations in that they "follow the instructions" specified by those equations, in a similar way as a computer can follow the instructions specified by code.
  * I think a system can more legitimately be said to have a "preference" if it evaluates and chooses among alternatives rather than just executing a fixed response to a stimulus. Many types of software algorithms involve optimization, and optimization is the essence of choice and goal-directed behavior. (Choice involves picking the best possible action. Goal-directed behavior involves evaluating plans and picking one that best achieves a goal.) However, simple physical systems can also be seen as displaying optimization, such as with the [principle of least action](https://en.wikipedia.org/wiki/Principle_of_least_action "'Principle of least action - Wikipedia'").



My emotional sympathies are more sensitive to subroutines at the complexity of, say, Google's AlphaGo considered as a whole. Such systems display a level of agency toward achieving a goal that feels more than trivial. And I'm even more sympathetic to insects and other animals.

It's unclear to me how much of the future's suffering will be at the level of simple subroutines (such as function calls in a programming language) versus more complex subroutines (such as simulations of animal-like agents). Animal-like agents seem to matter orders of magnitude more, even per unit of computation, than subroutines that are part of mundane software. On the other hand, there might be orders of magnitude more mundane software than animal-like simulations in many far-future scenarios.

I guess I'm emotionally disinclined toward optimizing altruistic efforts too heavily toward lower-level suffering subroutines because higher-level entities seem more morally salient. However, I maintain significant moral uncertainty about how much I care about lower-level operations, and my views on this matter could change with further understanding of the nature of consciousness.

## About this piece

I coined the term "suffering subroutines" in 2011. In 2013, I wrote "[A Dialogue on Suffering Subroutines](https://foundational-research.org/a-dialogue-on-suffering-subroutines/ "'A Dialogue on Suffering Subroutines – Foundational Research Institute'")" to explore some ideas in this space, but that piece focused mostly on global-workspace theory and didn't extensively describe suffering subroutines as a concept. Since people sometimes linked to that suboptimally explanatory 2013 article when mentioning suffering subroutines, I realized I should write a more introductory overview of the idea.

## Acknowledgments

Small parts of this piece were inspired by discussions with many people, including but not limited to Caspar Oesterheld, Kaj Sotala, and Ed Griffith.

## Footnotes

  1. I'm not sure if this example is biologically realistic, but it seems consistent with the general spirit of global-workspace theory. There are two competing interpretations of the snake/hose situation, one of which "wins", in a similar way as a person can have two competing interpretations of the Necker cube but only "see" one of them at a time. 

[Open Learning Initiative (n.d.)](https://oli.cmu.edu/jcourse/workbook/activity/page?context=df3e73c10a0001dc119c3089f74f69cb "'Two Emotional Pathways in the Brain'") discusses two emotional pathways in the brain, using an example similar to my snake/hose one:

> When you hear a strange noise in your bedroom late at night, you are likely to react fearfully before your know whether or not there is something to fear. Which pathway is involved in this reaction? If you guessed the fast pathway, you’re right. No cognition is involved so the pathway is direct to the amygdala. Now you go into your bedroom, check, and realize it was just your cat jumping down from a shelf. You’ve appraised the situation as harmless so the fear abates. What’s the pathway here? Right, this is the slow pathway because you’re using your cortex to appraise the situation. 

I'm not sure if these two pathways count as simultaneously competing coalitions in a global-workspace framework or whether a global-workspace interpretation would say that the fast pathway wins control first, and then the slow pathway takes over. (back)

  2. Incidentally, this discussion also explains why, even though video-game characters warrant exceedingly low moral weight, a lexical threshold negative utilitarian may still care about their suffering. I tried to explain this point in the "[Does NPC suffering aggregate?](/do-video-game-characters-matter-morally/#Does_NPC_suffering_aggregate "'Do Video-Game Characters Matter Morally? | Essays on Reducing Suffering': 'Does NPC suffering aggregate?'")" section of Tomasik ("Do ..."), but it can be made even more clearly in light of the present discussion. We take C1 = "unbearable, beyond-threshold suffering", and then we ask if a video-game enemy embodies that concept. I think the answer is "yes, but to an astronomically weak degree". So the video-game enemy _does_ have some unbearable, worse-than-threshold suffering even to a lexical threshold negative utilitarian. (back)
  3. The fact that a portion of my mental states don't seem significantly hedonic but do contain strong preferences is part of the reason I'm not fully a hedonistic utilitarian; it seems like preferences still count for something even if they're not associated with hedonic experiences. That said, I think the most extreme experiences that people can undergo are mostly hedonic, such as torture, and these can blow non-hedonic preferences out of the water in terms of severity. (back)


