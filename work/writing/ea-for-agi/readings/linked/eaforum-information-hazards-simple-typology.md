---
title: "Information hazards: a very simple typology"
author: "Will Bradshaw"
date: 2020-07-13
url: https://forum.effectivealtruism.org/posts/X5S2ZB4RcPxZGN68T/information-hazards-a-very-simple-typology
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 1 stage-1 reading (biorisk/biosecurity-biorisk-reading-list.md); core EA concept of info hazards, applies to AI and bio"
---

It seems that everyone who looks into information hazards eventually develops their own typology. This isn't so surprising; [Bostrom's original paper][bostrom2011] lists about thirty different categories of information hazards and isn't even completely exhaustive, and those who wish to work with a simpler system have many ways of dividing up that space.

In general, I've tended to use a typology adapted from Anders Sandberg, with some tweaks to fit it better into my own brain. This typology divides the majority of infohazards into three broad types[^true]:

1. **Capability hazards:** Information that gives other actors new or improved abilities to harm you or your values[^capability], either by acting in ways you wish they would not, or by threatening to do so to extort actions from you.
*Examples:* Instructions for building nuclear weapons; incriminating information suitable for blackmail; most biosecurity infohazards; that [master key hack][masterkey].

2. **Direct hazards[^memetic]:** Information that directly harms the possessor, either through infliction of suffering[^direct_other] or by otherwise reducing their ability to achieve their goals.
*Examples:* News that a loved one has died unpleasantly; political news you can do nothing about but find very distracting; the examples from [this post][cognito]; a certain well-known example from the rationality community.

3. **Mindset hazards:** Information that, while true, interacts with actors' other beliefs or biases in a way that motivates them to act badly – either by acting rationally based on beliefs or values you hold to be false, or by acting irrationally according to their own beliefs and values.
*Examples:* Alleged examples of this class of hazard are common but tend to be very controversial[^controversial]. Some frequently-claimed examples include the [heritability of desirable cognitive traits][heritable]; the [generally low efficiency of HIV transmission][hiv]; the fact that such-and-such public figure you support once said such-and-such controversial thing.

Of course, these three categories all bleed into each other at the edges. The boundary between a direct hazard (that hurts the knower) and a mindset hazard (that hurts others via the actions of the knower) is especially fuzzy; information that makes someone act irrationally is [likely to be both][knowing]. Some direct and mindset hazards are also capability hazards, in that an enemy or careless actor in possession of the information gains the capability to hurt you by sharing it with you or your allies (or threatening to do so). And the distinction between "this information might *enable* someone to do harm" (capability hazard) and "this information might *motivate* someone to do harm" (mindset hazard) isn't always terribly crisp.

In general, though, most real-world cases I've seen seem to fall fairly naturally into one of these three categories, with the other two making relatively minor contributions. That is to say, in most cases where someone is worried about some piece of true information being hazardous, they seem to mostly be worried about one of these three kinds of harm.

I like this typology because it's very simple and memorable, while focusing attention on the central question of *how* a given piece of information might potentially do harm[^claims]. Hopefully it will be of some use to some of you, as well.

[knowing]: https://www.lesswrong.com/posts/AdYdLP2sRqPMoe8fb/knowing-about-biases-can-hurt-people
[hiv]: https://www.unaids.org/en/frequently-asked-questions-about-hiv-and-aids
[bostrom2011]: https://www.nickbostrom.com/information-hazards.pdf
[masterkey]: https://www.mattblaze.org/masterkey.html
[cognito]: https://www.lesswrong.com/posts/Rut5wZ7qyHoj3dj4k/a-point-of-clarification-on-infohazard-terminology
[heritable]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4739500/

[^true]: Note that, as with all infohazards, these categories only apply to *true* information. The harms of spreading false information are generally not controversial, or especially interesting.
[^capability]: Note that this definition is not limited to malicious actors. Information that provides careless or incompetent actors with new capacities to cause accidental harm also falls under this category.
[^memetic]: Also known as memetic hazards or cognitohazards, though both of these sound more esoteric than I'd ideally like.
[^direct_other]: If there morally-(dis)valuable mental states other than happiness/suffering, then information that damages the good states or induces the bad ones would also count as a direct information hazard.
[^controversial]: If you claim a piece of information is a mindset hazard, you are implicitly claiming that (a) the new information is true, and (b) the actions prompted by communication of the information are bad. Naturally, the actor themselves will tend to strongly contest (b), while those who agree with (b) will often strongly contest (a).
[^claims]: Having established this typology, I think there's quite a lot you can say about how these three categories of infohazards tend to differ from one another: in breadth, in severity, in available strategies for mitigation, in exploitability by bad actors, *et cetera*. More on that in a future post.

