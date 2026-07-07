---
title: "Un-unpluggability - can't we just unplug it?"
author: "Oliver Sourbut"
date: 2023-05-15
url: https://www.lesswrong.com/posts/cniLbC8EFf777Aspb/un-unpluggability-can-t-we-just-unplug-it
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by bengio-faq-catastrophic-ai-risks; why 'just unplug it' fails, AI risk argument"
---

> Can't we just unplug it?

![An unplugged power cable, resting on wooden floor](https://raw.githubusercontent.com/olyis/sketch-repo/master/pics/kelly-sikkema-zwU2x2Yg-xY-unsplash.jpg)

_Cover photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/zwU2x2Yg-xY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

A few weeks ago I was invited to the UK FCDO to discuss opportunities and risks from AI. I highly appreciated the open-mindedness of the people I met with, and their eagerness to become informed without leaping to conclusions. One of their key questions was, perhaps unsurprisingly, 'If it gets too dangerous, can we just unplug it?'. They were very receptive to how I framed my response, and the ensuing conversation was, I think, productive and informative[^open-minded]. I departed a little more optimistic about the prospects for policymakers and technical experts to collaborate on reducing existential risks.

Here I'll share the substance of that, hoping that it might be helpful for others communicating or thinking about 'systems being hard to shut down', henceforth 'un-unpluggability'[^un-un]. None of this is especially novel, but perhaps it can serve as a reference for myself and others reasoning about these topics.

This contrasts pretty strongly with a more technical discussion of 'off switches' and instrumental convergence, handled admirably by e.g. [Rob Miles](https://www.youtube.com/watch?v=4l7Is6vOAOA) and [MIRI](https://intelligence.org/2014/10/18/new-report-corrigibility/), which is perhaps the reflex framing to reach for on this question (certainly my mind went there briefly): absent quite specific and technically-unsolved corrigibility properties, a system will often _do better_ at an ongoing task/intent if it prevents its operator from shutting it down (which gives rise to an incentive, perhaps a motive, to avoid shutdown). This perspective works well for conveying understanding about some parts of the problem, but in my case I'm pleased we dwelt more on the _mechanics_ of un-unpluggability rather than the _motives/incentives_ (which are really a separate question).

Both perspectives are informative; consider what you are trying to learn or achieve, and/or who your interlocutors/audience are.

[^open-minded]: I appreciated how open-minded their questioning was - there was a genuine truth-seeking inquisitiveness, rather than a debate-minded presupposition. The people there even connected some of the dots and filled some of the gaps themselves once the conversation was unfolding, which is a great sign of ideas and knowledge moving successfully between minds.

## Un-unpluggability factors

Broadly, I'll discuss six classes of property which can make a system less unpluggable[^un-un]; with each, some analogous examples[^example-caveat], a note on applicability to AI/AGI, and a gesture at mitigation.

In brief

- **Rapidity** and **imperceptibility** are two sides of 'didn't see it coming (in time)'
- **Robustness** is 'the act itself of unplugging it is a challenge'
- **Dependence** is 'notwithstanding harms, we (some or all of us) benefit from its continued operation'
- **Defence** is 'the system may react (or proact) against us if we try to unplug it'
- **Expansionism** includes replication, propagation, and growth, and gets a special mention, as it is a very common and natural means to achieve all of the above

Of course this is not comprehensive, the properties can come in degrees, and far from requiring all properties, a system with sufficient of _any_ of these properties can become very un-unpluggable. The main point is that there are plausible paths to AI systems gaining any or all of these properties _at least_, so the most reliable mitigation is to work hard at avoiding building systems which are not unpluggable in the first place.

[^example-caveat]: Analogous examples are not necessarily intended to be things we would _want_ to unplug if we could (though many will be). Besides confirmed examples, I will also provide potential or unconfirmed examples (consensus or otherwise), which I denote with a question mark.

One angle that isn't very fleshed out is the counterquestion, 'who is "we" and how do we agree to unplug something?' - a little on this under **Dependence**, though much more could certainly be said.

[^un-un]: Less unpluggable? More un-unpluggable? I welcome terminological criticism and suggestions

Finally I'll share a little thought on when and why we might expect these factors to arrive in AI systems in **un-unpluggability incentives and expectations**.

### Rapidity (of gains in power)

This one is pretty straightforward: if something gets powerful or impactful fast enough, you can't react in time to turn it off, even if you in principle have the necessary access and capacity to do so.

Examples (objectively 'fast'):

- explosive devices mid-detonation
- flash floods
- meteorites?

Examples (somewhat objectively 'slower' but pitted against slower reaction times):

- pandemics
- positive climate feedback loop?
- modern human society? (from the perspective of 'nature')

The most classic analogue in discussions of AI is the hypothetical recursive (self)-improvement, or 'intelligence explosion': if a system of AI(s) becomes capable enough that it can contribute to progress in AI capabilities, this may lead to a feedback of rapidly increasing gains in intelligence, with very unclear (ex ante) rates of progress and no guarantee of desirable ends. Separately, some discussions point to the step-changes in many metrics of influence which humanity sees in its own history (e.g. such revolutions as the cognitive, agricultural, scientific, or industrial) as evidence that there may be hard-to-foresee thresholds of capability which lead to comparatively very rapid gains (whether these are achieved by feedback processes or otherwise).

Leaving aside these plausible feedback or threshold effects, human engineering effort alone has generated quite fast exponential growth in computing power over the last decades (compare Moore's Law), and investment in AI and machine learning has outstripped even that by many measures.

There is no real mitigation here besides anticipating and building cautiously - investing in organisational and societal insight and governance capacity could help with this. Providing more rapid shutdown mechanisms (for example of servers or datacentres) may be a minor palliative.

### Imperceptibility (of gains in power or of harmful ends)

Failure to perceive _power or impactfulness_ gains until 'too late' is complementary to rapidity of those gains - if you are foresightful enough you can perceive things sooner and make up for lack of speed (consider advance detection of potential meteorites), and if you are fast enough you may have time to make up for failure to perceive things in advance (consider a quick-thinking or lucky escape from a flash flood). In this way, rapidity and imperceptibility of power gains can be considered two sides of the same coin.

Failure to perceive _harmful ends_ is slightly different. Whether a system is 'deliberately oriented at' undesired ends, or simply by its nature constituted to bring them about, if we fail to perceive the _danger_, we may be entirely aware of its power and impact without being moved to turn it off until too late.

Examples:

- coups (military or otherwise) involving treachery
- latent pathogen reservoirs
- harms to social fabric and epistemology from ubiquitous contemporary social media?

The ongoing discussion and research topics around AI deception, 'treacherous turns', and goal misgeneralisation demonstrate that imperceptibility of harmful ends is a live concern for AI. The inscrutability of contemporary deep learning systems must separately be emphasised: even for networks with millions of parameters, let alone billions or trillions, our current ability to understand the mechanics of learned algorithms is insufficient to detect the _presence_ of ends, goals, or intentions, much less their specific nature.

Indirect effects, network effects, and interaction effects on the potential for harmful ends of AI have received some attention (especially by analogy to social dilemmas and to the observed effects of social media), though relatively less. Complex systems, and systems with feedback, can be notoriously difficult to study and to predict, whether or not the individual components are relatively well-understood, hence the challenges faced in fields such as economics, control theory, biology, sociology, and others. Therefore, we might expect there to be, depending on the deployment scenarios of AI systems, a substantial further challenge beyond understanding and verifying the individual component(s).

An important technical note here is that, without mechanistic understanding of an algorithm's workings, it is **mathematically impossible to provide general guarantees merely by observing behaviour** as with a black box (and even granted a mechanistic understanding, there are feedback and network effects to account for). Perceptibility is relative to the perceiver. We can improve it by researching and developing **interpretability** tooling for systems which are currently inscrutable, or by limiting high-impact deployments to systems which are more **explainable** - both a technical and a governance concern. Research into **goal misgeneralisation** and **deceptive AI** aims to elucidate and mitigate this issue.

The study of **complex systems** and more specifically the field of **collaborative AI** may shed light on the feedback and network effects.

### Robustness (redundancy)

Among engineers of software systems, it is (rightly) considered a devastating criticism of a design to observe that it has any 'single point of failure' (SPOF). Depending on the application, SPOFs may be tolerated, be engineered around, or, when the cost of failure is deemed unacceptable, prompt potentially expensive redesigns to incorporate redundancy, fault tolerance, error checking, and so on[^bus-factor]. We even explicitly discuss how to ensure system uptime if someone were to literally pull the power supply (deliberately or otherwise) on some of our machines! Such considerations are a large part of the responsibility of a software engineer or architect, and I understand the same to be true in other engineering disciplines (though I can not speak from experience).

[^bus-factor]: Such organisations consider robustness of other systems too: in more macabre terms we will discuss the 'bus factor' of a project or team - how many people would need to get hit by a bus for key knowledge or competence to be irrecoverable? - and take deliberate steps to mitigate this, like knowledge-sharing, upskilling, and documentation (and not putting the whole team on the same bus). Nobody likes being on call when a critical component goes haywire and the only expert is sick, on vacation, or asleep on the other side of the world! I've been on both sides of that phonecall, and in each case it imparts a true and visceral appreciation for system reliability and knowledge diffusion.

Examples:

- the internet and other high-availability technologies and platforms
- military command structures
- decentralised insurgencies
- biological tissues and organs
- colonial organisms like ants

The existence of multiple points of failure can make a system harder to unplug in two ways: first, the challenge of locating and tracking each point of failure, and secondly the commensurately increased effort of _targeting_ each point.

With system reliability and uptime such a core engineering consideration, we may expect AI systems to continue to be built with such properties in mind. Even in the absence of human design, a misaligned AGI would presumably have no trouble at least identifying the usefulness of such robustness, though implementation is another matter. Such software sophistication appears to be out of reach for current AI systems, for now.

It is unclear how to mitigate this.

#### Aside on repair, error correction, course-correction

Other aspects of robustness are relevant to the consideration of AI, including systems with repair, error correction, and course correction, all of which are seen in systems both natural and artificial. These are less pertinent to literal unpluggability per se, but certainly relate to the challenges of disrupting a system in general.

### Dependence (collateral)

When we refer to systems or organisations as 'too big to fail', what we usually mean is, 'too big to _be permitted to_ fail _without substantial collateral damage_'. What these systems have in common is that, due to their utility and scale, they become foundational to other things of value such that their removal would (with some degree of plausibility, or without expensive mitigation) damage those other valuables.

Examples:

- large banks
- supply chain infrastructure
- energy production systems
- telecoms
- manufacturing or particular industrial processes
- atmospheric oxygen from photosynthesis?[^oxygen]
- ozone?[^oxygen]

[^oxygen]: Atmospheric oxygen was not always present - its introduction due to early photosynthesis actually killed off almost all earlier life - but now it is essential to most life forms. The presence of ozone protects land-based life from deadly solar radiation - so modern life forms have developed very limited capacity to withstand such radiation.

Such foundational systems are harder to unplug for two main reasons. First, the collaterally damaged valuables make unplugging straightforwardly less desirable. Perhaps more importantly, the collateral is valuable _to someone_, whether it's a livelihood or essential, a way of life, a good, a luxury, or a comfort. That person has a degree of incentive to act against any attempt to remove it. This raises the question, 'who is the "we" that intends to unplug the system?', and can bring tricky collective action problems into view. This appears to bite even with relatively clearcut cases like climate risk and energy production, and the greater the ambiguity (as with pandemic risks or AI risks), the harder to gain consensus about tradeoffs and externalities, which is one first step toward resolving such collective action problems.

It's hard to predict how substantially and in what ways AI or AGI system(s) will become foundational, but increasing generality and capability has so far given rise to increased deployment and perhaps dependency.

Finding ways to avoid dependence on increasingly capable and unproven systems could counter this risk - alternatively, building capacity and planning for ways to attenuate or relieve collateral harms when it becomes necessary to shut down a dangerous system.

### Defence (active, reactive, deterrent)

Weaponry, cyber capabilities, propaganda and public relations, legal and normative protection. These capacities can be proactively deployed, or held in reserve ready to react to any attempt to disable a system (including as a deterrent).

Examples:

- large companies
- governments
- militaries, insurgents, paramilitaries
- dangerous animals

Computational systems may demonstrate an advantage in research and development of **chemical and biological weaponry** - this is perhaps the most straightforward route to a misaligned AGI acquiring massive destructive potential. In addition, **conventional weaponry** is increasingly automated or automatable: mass destruction has been available in the form of nuclear weapons for some time, and targeted destruction is increasingly feasible using drones or similar tech - appropriation of these may vary in means and difficulty but broadly include cracking cybersecurity or influencing key human operators. **Content generation and persuasive messaging** appear to be feasible or near-feasible for today's AI systems, such as could be deployed in propaganda. It remains to be seen what **laws and norms** will arise around use of AI, rights or responsibilities of AI developers and of the systems themselves - these might be able to be wielded in defence or offence by corporate-like AI, networks of AI, or organisations including AI systems.

There are not obvious technical mitigations in this area. Perhaps the most technical would include efforts to robustify organisational- and cyber-security best practices across weapons-enabled organisations, globally. Research and investment in detection and prevention of novel pathogens may provide some defence against bioweapons. Besides this, deproliferation of weapon stockpiles, and of the means to _produce_ them (especially novel biological and chemical substances), might reduce the scale and chance of an appropriation. Misguided or otherwise, assigning control of weapons to AI systems obviously nullifies the challenge of acquiring control of weapons _for those particular_ AI systems. Whether this ends well depends on what those AI systems do with the weapons, of course.

Whether it is overall safer to train machine learning algorithms with **access to human-specific data** is unclear, but certainly it makes the job of creative and persuasive content generation much more straightforward. Norms and laws around impersonation of humans (in general, or of particular humans) will evidently have strong influence over the propaganda potential for AI, as will processes for detecting and signifying generated content, and the broader questions of human-AI interaction modalities and interfaces.

### Expansionism (replication, propagation, growth)

Replication and growth (with reinvestment) get special mentions as they naturally produce exponential expansion (until constraints are reached), which in practice often manifests as first **imperceptible** and then **rapid** escalation.

Replicating systems also give rise to a kind of **robustness** due both to redundancy and repair. They are notoriously difficult to shut down, which is why autonomous replication is rarely a deliberate part of human designs - though we see it employed under well-understood and controlled conditions in agriculture and some industry, maliciously in computer viruses and bioweapons, and sometimes accidentally in biosphere interventions. In fact, in biological, zoological, and related sciences, great care is usually taken to _avoid_ inadvertently unleashing autonomously replicating systems, though this remains sometimes insufficient[^insufficient-covid].

Examples:

- pandemics
- invasive species (e.g. plant weeds)
- computer viruses
- wildfire
- rumours and ideologies?

[^insufficient-covid]: Including some credible suggestions (e.g. by US government agencies) that the ongoing coronavirus pandemic may have had an accidental lab leak as its origin, as well as more thoroughly verified cases of accidental pest introduction or pathogens finding their way out of laboratory contexts

The obvious technical property to note about AI systems is the inherent copyability of digital software and data, and for many types of algorithm the inherent scalability of capability with access to more/faster computers[^scalability]. From the 'rogue AI' perspective it is straightforward to see replication being an early strategic consideration. For 'pre-rogue' or 'ambiguously rogue' AI, the inherent copyability of software also means that _human_ actors are liable to replicate AI systems.

[^scalability]: Though note that scalability of algorithms varies widely from 'barely scales at all, even with supercomputers' to 'trivially scales up the more compute you throw at it'

Beside replication per se, we have more general propagation and growth. Companies and industries expand, both into new and related lines of business. A sufficiently autonomous AI system, or one participating in a corporate-like entity could do the same.

The main means of halting expansionist systems is to remove or protect the resources used for expansion, or intervene in some other way to reduce the rate. Very commonly we are forced to simply await resource exhaustion (as with some wildfires) or learn to live with it[^live-with-it] (as with endemic diseases or established invasive species). Unprecedently sophisticated antivirus programs or evaluation/certification methods may provide some protection, but for computers, the quantity of highly-networked and in principle accessible resources is very large, and it is unclear how we could intervene, assuming we detected an AI system autonomously replicating. Licensing and monitoring of compute resources might offer some avenue to control this, but by the time an autonomous replicator is at large, this is probably too little too late.

[^live-with-it]: Assuming it hasn't already taken our life or livelihood, that is

Improvements to **cybersecurity** practices and organisational security on the one hand, and changes to **research closure norms** on the other, may affect the proliferation of potentially-dangerous AI systems by humans.

## Un-unpluggability incentives and expectations

Of course, the very fact that un-unpluggability can be increased by these and other properties gives an incentive to any system (or system designer) to achieve these. Hence we see organisms, processes, human organisations, and human-designed devices exhibiting all of these properties in one shape or another.

In the case of **robustness**, there is a clear incentive for designers and developers to imbue their systems with this property, and more or less similarly for **rapidity** and **dependence**, at least while developers are incentivised to compete over market share in deployments.

In light of recent developments in AI tech, I actually expect the most immediate unpluggability impacts to come from collateral, and for anti-unplug pressure to come perhaps as much from _emotional_ dependence and misplaced concern[^misplaced-concern] for the welfare of AI systems as from _economic_ dependence - for this reason I believe there are large risks to allowing AI systems (dangerous or otherwise) to be perceived as pets, friends, or partners, despite the economic incentives.

[^misplaced-concern]: It is my best guess for various reasons that concern for the welfare of contemporary and near-future AI systems would be misplaced, certainly regarding unplugging per se, but I caveat that nobody knows

For **imperceptibility**, **defence**, and **expansionism**, there is a definite incentive for a system to develop these itself, though perhaps a more mixed incentive for the developers - we might land with them anyway through mistakes, malice, or the inherent inscrutability of deep learning, but otherwise these appear more likely to arrive _after_ situationally-aware AGI.

## Conclusion

We discussed six properties of systems which can make them hard to 'unplug', namely

- **Rapidity**
- **Imperceptibility**
- **Robustness**
- **Dependence**
- **Defence**
- **Expansionism**

where **expansionism** gets a special mention for often giving rise to the others, and for being especially difficult for humans to combat.

It is tempting to reason about AI within a frame of simple programs running on a laptop, but modern impactful software systems are more often large, complex and networked. We touched on some ways of relating contemporary and future AI systems to the six un-unpluggability properties mentioned.

Cooperation between technical experts, policy leaders, developers, and the public will be needed to evaluate and prevent these properties from arising in AI; I'm cautiously optimistic that such cooperation can be achieved, but it will take sustained and creative effort from many stakeholders.

I remind readers that this should not be considered a comprehensive summary, and that these and other potential factors are _individually_ sufficient to lend a system un-unpluggability, rather than being required all at once.

_My thanks to Sam Brown for feedback on readability and ordering_