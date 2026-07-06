---
title: "Astronomical suffering from slightly misaligned artificial intelligence"
url: https://reducing-suffering.org/near-miss/
fetched: 2026-07-06
via: html2text
topic: "s-risks"
note: "Tomasik on how near-miss (slightly misaligned) AI could be worse than total misalignment; the sharpest s-risk-from-AI argument."
---

By Brian Tomasik

First published: 2018 Dec 13. Last nontrivial update: 2019 Mar 18.

## Summary

When attempting to align artificial general intelligence (AGI) with human values, there's a possibility of getting alignment mostly correct but slightly wrong, possibly in disastrous ways. Some of these "near miss" scenarios could result in astronomical amounts of suffering. In some near-miss situations, better promoting your values can make the future worse according to your values.

## Contents

  * Summary
  * Introduction
  * A note on terminology
  * Examples of near misses
    * SignFlip
    * MisconfiguredMinds
  * When spreading your values is harmful
  * But surely spreading your values is still positive in expectation?
  * Negative vs classical utilitarianism
  * A Laffer-type curve for alignment research
  * Is near miss worse than wide miss or no miss?
  * Near misses in human contexts
    * Another example: mercy releases
  * Near-miss AGIs vs human value drift
  * Acknowledgments
  * Footnotes



## Introduction

Human values occupy an extremely narrow subset of the set of all possible values. One can imagine a wide space of artificially intelligent minds that optimize for things very different from what humans care about. A toy example is a so-called "paperclip maximizer" AGI, which aims to maximize the expected number of paperclips in the universe. Many approaches to AGI alignment hope to teach AGI what humans care about so that AGI can optimize for those values.

As we move AGI away from "paperclip maximizer" and closer toward caring about what humans value, we increase the probability of getting alignment almost but not quite right, which is called a "near miss". It's plausible that many near-miss AGIs could produce much more suffering than paperclip-maximizer AGIs, because some near-miss AGIs would create lots of creatures closer in design-space to things toward which humans feel sympathy.

See also [an explanation](https://www.youtube.com/watch?v=w7nsv4n_Bgk&t=9m9s "'Will space colonization increase suffering?' on the channel 'Brian Tomasik'") of near misses by David Althaus from 2014.

## A note on terminology

One of Merriam-Webster's definitions for "near miss" [is](https://www.merriam-webster.com/dictionary/near%20miss "'Near Miss | Definition of Near Miss by Merriam-Webster'") "something that falls just short of success". This is the meaning I intend in this essay.

The term "near miss" as applied to ordinary human accidents refers to "an incident in which no property was damaged and no personal injury was sustained, but where, given a slight shift in time or position, damage or injury easily could have occurred" ([Wikipedia "Near miss (safety)"](https://en.wikipedia.org/wiki/Near_miss_\(safety\))). For AGI alignment, "near miss" is sort of the opposite idea: _because_ alignment slightly missed the target, a great deal of injury and suffering may result.

## Examples of near misses

Following are two examples of near-miss scenarios. The first, SignFlip, is a toy example that's hopefully unrealistic but helps illustrate the basic idea. The second, MisconfiguredMinds, is perhaps slightly more realistic, though it too should probably be regarded as overly simplistic.

### SignFlip

Perhaps the prototypical toy example of a near miss is the following. Imagine an AGI that contains a perfect representation of humanity's utility function _V_ (assuming for the sake of this example that humanity even has a single, coherent utility function). Humans tell the AGI to go and "maximize _V_ ". However, suppose that "a cosmic ray flips the sign of the AGI's effective utility function" (["Separation ...", n.d.](https://arbital.com/p/hyperexistential_separation/ "'Separation from hyperexistential risk'")) to _-V_. The AGI will now maximize _-V_ , which is equivalent to minimizing _V_. Minimizing human values on a cosmic scale would be horrifying—by definition the worst possible outcome within our future light cone. The AGI would spread through all the galaxies within its reach, filling them with intense torment, death, and other things humans regard as evil.

The issue of cosmic rays could be overcome using, say, error-correcting-code memory. Slightly more worrisome might be human sign errors. In college, I recall some physics problems where I got the right answer except I was missing a minus sign, or I had a minus sign when I shouldn't have. Of course, this risk too could be mitigated with various sanity checks, redundant specification of the utility function by independent development teams, etc.

A real-world example of a sign-flipping kind of error, at the level of written instructions rather than utility functions, was the hacking of the emails of John Podesta, chairman of the 2016 US presidential campaign of Hillary Clinton. [Uchill (2016)](https://thehill.com/policy/cybersecurity/310234-typo-may-have-caused-podesta-email-hack "'Typo led to Podesta email hack: report | TheHill'"):

> Podesta received an email purportedly from Google saying hackers had tried to infiltrate his Gmail account. When an aide emailed the campaign’s IT staff to ask if the notice was real, Clinton campaign aide Charles Delavan replied that it was “a legitimate email" and that Podesta should “change his password immediately.”
> 
> Instead of telling the aide that the email was a threat and that a good response would be to change his password directly through Google’s website, he had inadvertently told the aide to click on the fraudulent email and give the attackers access to the account.
> 
> Delavan told the Times he had intended to type "illegitimate,” a typo he still has not forgiven himself for making.

If Delavan had written either a perfectly correct reply or a gibberish reply, things would have been fine. It was only by writing an almost-perfect-but-slightly-wrong reply that he caused the opposite of what was intended.

### MisconfiguredMinds

Suppose that humans ask their AGI to fill the future light cone with as many happy creatures as possible. The AGI attempts to do this, but its interpretation of "happy minds" is slightly askew, causing it to create brains that are a bit abnormal. These minds might suffer from severe mental-health problems that cause very negative quality of life.

Fortunately, it seems the density of suffering in MisconfiguredMinds would be vastly lower than in SignFlip, since in MisconfiguredMinds, the suffering is only incidental rather than directly optimized for. However, a cosmos filled with minds enduring depression, anxiety, [schizophrenia](https://www.youtube.com/watch?v=KYHVbLLO2bU "'Schizophrenia Simulated' on the channel 'Were We Lied To'"), or other mental illnesses would still be a terrifying outcome.

## When spreading your values is harmful

Some near-miss scenarios, especially SignFlip, fall under the umbrella of "utility-function negation". In these situations, promoting a utility function _U_ tends to make things worse according to _U_. The more precisely humans specify their values in SignFlip, the worse the outcome, because the AGI can more precisely optimize for the minimum of those values. If you hold a unique moral viewpoint that most of humanity doesn't, in SignFlip scenarios it's probably best if you _don't_ promote that viewpoint. For example, if you think insects deserve moral consideration, while most of humanity doesn't care about insects, in SignFlip scenarios, if you succeed in convincing more people to care about insects, you make it more likely that astronomical numbers of tormented ants and cockroaches will be part of our future.

Could promoting concern for non-human animals be bad in the MisconfiguredMinds scenario too? Maybe. One reason is that non-human animals might be cheaper to compute per unit of morally valued sentience. For example, a cow has about 3 billion neurons ([Herculano-Houzel 2016](https://mitpress.mit.edu/books/human-advantage "_The Human Advantage: A New Understanding of How Our Brain Became Remarkable_"), cited in [Shulman 2013](http://reflectivedisequilibrium.blogspot.com/2013/09/how-is-brain-mass-distributed-among.html "'*Reflective Disequilibrium*: How are brain mass \(and neurons\) distributed among humans and the major farmed land animals?'")), compared with 85 billion for a human, so perhaps it would be possible to simulate about 85/3 = 28 cows for the cost of simulating one human.a But many animal advocates value a cow more than 1/28 as much as a human. So relative to such values, more total sentience could be created by simulating cows than simulating humans. Thus, if MisconfiguredMinds is realized, a cow-filled future would contain more total sentience and therefore more total suffering (relative to the values of many animal advocates) than a human-filled MisconfiguredMinds future.

This point could be even more pronounced in the case of antisubstratism activism, assuming that non-biological sentience can be produced much more efficiently than biological sentience, relative to the values of antisubstratist advocates. If biological chauvinism prevails, then a MisconfiguredMinds future would "only" contain as many biological minds as can be fit inside our future light cone, while if antisubstratism prevails, a much larger number of suffering minds could be created within our future light cone.

## But surely spreading your values is still positive in expectation?

Despite the risks from near misses, it's tempting to assume that spreading one's values is still probably a good thing, since in non-near-miss scenarios, it's quite valuable for future generations of humans and AGIs to care about what you care about. I think this is often true, but it depends.

If you're trying to maximize something that's currently rare, such as paperclips or happiness, then near misses may not be a huge concern, because there's not much room "to go down" if the utility function gets negated. For example, most future scenarios involve minuscule numbers of paperclips relative to what could be produced. Humans will continue using paperclips for a few decades, and perhaps some posthuman simulations would contain some paperclips, but otherwise, most futures will be pretty devoid of these office products. Therefore, if paperclip-maximization values get mutated into paperclip-minimization values, the future light cone would lose only a tiny number of paperclips relative to the default trajectory. When comparing against the astronomical numbers of paperclips that could be produced if paperclip-maximization values don't mutate, the near-miss risk seems negligible.

However, if you're aiming to _minimize_ something that's currently rare in the universe, such as suffering, then there's enormous room to make things worse and only marginal room to make things better. By default, perhaps our future light cone will in expectation contain only, say, 10-6 as much suffering as it would be possible to create. Since SignFlip would create as much suffering as possible, if the probability of SignFlip is anything greater than 10-6, then the existence of values that oppose suffering would be net negative in expected value, according to this simplistic calculation.

I don't have an all-things-considered opinion on whether this consideration in fact makes concern for suffering net negative. I suspect that concern for suffering is quite positive at least among the subset of people who can do further research on these sorts of quandaries, and broader societal concern for suffering helps to create more suffering-focused researchers. However, it's less clear whether it's positive to explicitly try to specify concern for suffering into an AGI.

## Negative vs classical utilitarianism

In cases where better specifying your utility function is harmful, should negative utilitarians actually favor classical utilitarianism, because it's further from what they value? At least in the case of SignFlip, it wouldn't make a difference, because negative and classical utilitarianism share the same minimum of the utility function. Better than either negative or classical utilitarianism for the SignFlip scenario would be "positive utilitarianism"—the view that only happiness matters, not suffering. Positive utilitarianism would allow for the upside of happiness creation in non-near-miss scenarios without the downside of optimizing for suffering in the SignFlip scenario. (Perhaps this is the only good argument for strict positive utilitarianism. :) )

For the MisconfiguredMinds scenario, negative utilitarianism would best avoid the risk, because negative utilitarians wouldn't try to fill the future light cone with happy minds to begin with, while classical and positive utilitarians probably would. So which axiology is safest in the face of a near miss depends on the specific scenario.

## A Laffer-type curve for alignment research

Both aligned and unaligned AGIs could produce astronomical suffering in a variety of different ways. However, if we focus just on near-miss risks, then we see something like the [Laffer curve](https://en.wikipedia.org/wiki/Laffer_curve) for near-miss risk as a function of the degree to which humanity does AGI-alignment research. If no alignment research were done, resulting in a paperclip-maximizer-type future, then near-miss risk would be basically zero, because AGI development was not pointed in the direction of human values at all. Meanwhile, if perfect alignment research were done, then AGI would be fully aligned with human values, and there would be no near miss. In between these two extremes, there is near-miss risk, with a maximum at some point.  
  
Whether _further_ alignment research on the margin reduces or increases near-miss risk then depends on whether the status quo is to the left or to the right of the point of maximum near-miss risk. Of course, it's also worth remembering that for many value systems, despite near-miss risks, there are major upsides to doing AGI alignment, because positive values like happiness wouldn't be optimized for without it.

If one is concerned about near misses, then there are probably more leveraged ways to have an impact than merely shifting the amount of standard AGI-alignment research that humanity does up or down. In particular, one could push for more research on the topic of avoiding near misses, including the principle of "[Separation from hyperexistential risk](https://arbital.com/p/hyperexistential_separation/ "'Separation from hyperexistential risk'")".

## Is near miss worse than wide miss or no miss?

It's important to remember regarding the above graph that the y-axis only shows near-miss risk, not other forms of suffering risk. I think it's not obvious that near-miss AGIs pose more total suffering risk than paperclipping AGIs or human-aligned AGIs. For example:

  * While the MisconfiguredMinds AGI creates enormous suffering, perhaps it correctly reflects human values enough that it knows to minimize creation of humans and animals enduring the absolute worst forms of agony, such as being eaten alive or physically tortured, while a paperclipping AGI would have no intrinsic inhibitions against simulating humans and animals in unbearable pain as part of instrumentally useful computational tasks.
  * Many near-miss AGIs might distort the way humans understand sentience, causing these AGIs to create vastly less sentience (and therefore perhaps less suffering) than a human-aligned AGI would, especially if the human-aligned AGI doesn't embody purely angelic human impulses.



That said, a certain subset of near-miss AGIs—namely, SignFlip and more realistic AGIs in the neighborhood of SignFlip—could be so devastating that even if their likelihood is quite low, they may cause us to conclude that near-miss AGIs are indeed particularly dangerous relative to other AGIs. However, I don't know enough about this topic to have firm opinions yet.

## Near misses in human contexts

A generic definition of a "near-miss catastrophe" could be a situation in which, when agent A tries to specify a goal or outcome to agent B, there's a slight modification of the original intention in a way that causes a worse outcome than if A hadn't tried to specify anything to B. Situations like this are actually somewhat common in everyday life, which helps to show that the idea of near-miss risks is not pure speculation.

Consider the following example. Animal advocate Anthony wants to spread compassion for other sentient creatures, so that more humans will want to protect animals and the environment. Among the people whom Anthony persuades is Briana, who cares deeply about suffering. Briana notices how much intractable misery wilderness contains and reasons that the best way to reduce this misery is to reduce wilderness itself. She campaigns for reduction of wild-animal habitats, to the horror of Anthony. This is a near-miss catastrophe relative to Anthony's values since it was only because Briana cared so much about animals that she focused on preventing their existence. Had Briana instead spent her time on some unrelated topic like stamp collecting, things would have been fine from Anthony's perspective.

So near-miss catastrophes can happen even outside the scenario of a singleton AGI going off and optimizing a specified utility function. This suggests that near-miss dynamics could be worrisome even in "soft AGI takeoff" trajectories, although further work should be done to flesh out such scenarios.

### Another example: mercy releases

The following quote describes another example of a near miss in the human world. [Actman (2017)](https://news.nationalgeographic.com/2017/01/wildlife-watch-mercy-release-buddhist-china-illegal-trade/):

> according to He Yun and other experts, a tradition that once encouraged the spontaneous release of doomed animals has today become a commercial enterprise in which people buy animals specifically to release them. The process may injure—or even kill—them. [...]
> 
> “the animals are often trapped, kept in appalling conditions, released, and often trapped again,” Palmer says. An [article](http://www.polsci.ucsb.edu/faculty/stokes/docs/ShiuStokesAnimalRelease.pdf) referenced in the journal Contemporary Buddhism described a situation in which Buddhist organizations ordered birds en masse from retailers for release, only for hunters to wait to catch the freed birds and begin the cycle all over again.

If humans didn't care about the welfare of animals at all, mercy releases also wouldn't exist. Of course, presumably human concern for animals reduces more suffering overall than it creates in our current world. But the same may not be true for futuristic near-miss scenarios, where the possible downside of caring about suffering could far exceed the possible upside.

## Near-miss AGIs vs human value drift

One crude model of the values of a near-miss AGI could be human values plus some random noise. If random value drift by a near-miss AGI is potentially quite worrisome, then shouldn't random value drift by future generations of humans also be worrisome?

I think human value drift is also somewhat dangerous but perhaps not as much as value drift in near-miss AGIs. The reason is that human brains are biologically quite similar to one another, and basic human instincts seem likely to prevent the very worst forms of value drift. For example, it seems hard to imagine most humans any time soon wanting to create as much suffering as is physically possible. But if humans have failed to impart robust "do what I mean" common sense to an AGI, that AGI could make catastrophic errors like sign flipping (or more realistic variants thereof), without the guard rails of human psychology. (The AGI would surely eventually understand what humans intended for it to do, but the question is whether the AGI _cares_ about those intentions.)

That said, I do think value drift even within the human memesphere could be quite bad in some cases. For example, imagine if traditional religious values became more popular among the world's elites. For thousands of years and still today, many Christians and Muslims have embraced the idea that it's not only acceptable but part of omnibenevolent justice to eternally torture most of humanity for failing to be born into a culture that believes and practices the right religion.

Even among modern cosmopolitan liberals, vengeful impulses can rear their heads from time to time. During 2017-2018, I saw many progressives in Internet comments express schadenfreude regarding the personal sufferings of members of the Trump administration. (I'm not judging people for feeling schadenfreude; I feel it occasionally myself. In any case, it's usually harmless and somewhat beyond conscious control. I'm just pointing out that we humans have a lot of vicious impulses hiding in our brains.)

Still, it's plausible that humanity is, at least for the next few decades, on a positive trajectory with respect to changing values. For example, belief in traditional religious teachings will probably continue to decline in the long term as the world becomes more educated, though there are many ups and downs along the way.

## Acknowledgments

This piece benefited from past discussions with Lukas Gloor, Victor Li, and others. A few sections were inspired by critiques from Tobias Baumann. A conversation with Tse Yip Fai about mercy releases inspired me to add the section on that topic.

## Footnotes

  1. This is just a crude calculation for illustration. Perhaps the cost of simulating a brain is more related to its number of synapses, total mass, or something else. (back)


