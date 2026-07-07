---
title: "How Lumpy AI Services?"
author: "Robin Hanson"
url: https://www.overcomingbias.com/p/how-lumpy-ai-serviceshtml
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by richard-ngo/economic-efficiency-undermines-autonomy; Hanson on AI takeoff shape, macrostrategy"
---

# How Lumpy AI Services?

[](https://substack.com/@wildideaman)

[Robin Hanson](https://substack.com/@wildideaman)

Feb 14, 2019

1

29

Share

Long ago people like Marx and Engels predicted that the familiar capitalist economy would naturally lead to the immiseration of workers, huge wealth inequality, and a strong concentration of firms. Each industry would be dominated by a main monopolist, and these monsters would merge into a few big firms that basically run, and ruin, everything. (This is somewhat analogous to common expectations that military conflicts naturally result in one empire ruling the world.)

Many intellectuals and ordinary people found such views quite plausible then, and still do; these are the concerns most often voiced to justify redistribution and regulation. Wealth inequality is said to be bad for social and political health, and big firms are said to be bad for the economy, workers, and consumers, especially if they are not loyal to our nation, or if they coordinate behind the scenes.

Note that many people seem much less concerned about an economy full of small firms populated by people of nearly equal wealth. Actions seem more visible in such a world, and better constrained by competition. With a few big privately-coordinating firms, in contrast, who knows that they could get up to, and they seem to have so many possible ways to screw us. Many people either want these big firms broken up, or heavily constrained by presumed-friendly regulators.

In the area of AI risk, many express great concern that the world may be taken over by a few big powerful AGI (artificial general intelligence) agents with opaque beliefs and values, who might arise suddenly via a fast local “foom” self-improvement process centered on one initially small system. I’ve [argued](https://www.overcomingbias.com/2018/03/how-deviant-recent-ai-progress-lumpiness.html) in the past that such sudden local foom seems unlikely because innovation is rarely that lumpy.

In a new book-length [technical report,](https://www.fhi.ox.ac.uk/wp-content/uploads/Reframing_Superintelligence_FHI-TR-2019-1.1-1.pdf)  _Reframing Superintelligence: Comprehensive AI Services as General Intelligence,_ Eric Drexler makes a somewhat similar anti-lumpiness argument. But he talks about task lumpiness, not innovation lumpiness. Powerful AI is safer if it is broken into many specific services, often supplied by separate firms. The task that each service achieves has a narrow enough scope that there’s little risk of it taking over the world and killing everyone in order to achieve that task. In particular, the service of being competent at a task is separate from the service of learning how to become competent at that task. In Drexler’s words:

Comprehensive AI services (CAIS) provides a model of flexible, general intelligence in which agents are a class of service-providing products, rather than a natural or necessary engine of progress in themselves. … Strongly self-modifying agents lose their instrumental value even as their implementation becomes more accessible, while the likely context for the emergence of such agents becomes a world already in possession of general superintelligent-level capabilities. …

AI deployment today is dominated by AI services such as language translation, image recognition, speech recognition, internet search, and a host of services buried within other services. … Even applications of AI within autonomous systems (e.g., self-driving vehicles) can be regarded as providing services (planning, perception, guidance) to other system components. … [Service] tasks for advanced AI include:  
• Modeling human concerns • Interpreting human requests • Suggesting implementations • Requesting clarifications • Developing and testing systems • Monitoring deployed systems • Assessing feedback from users • Upgrading and testing systems  
CAIS functionality, which includes the service of developing stable, task- oriented AI agents, subsumes the instrumental functionality of proposed self-transforming AGI agents, and can present that functionality in a form that better fits the established conceptual frameworks of business innovation and software engineering.

Describing AI systems in terms of functional behaviors (“services”) aligns with concepts that have proved critical in software systems development. These include separation of concerns, functional abstraction, data abstraction, encapsulation, and modularity, including the use of client/server architectures—a set of mechanisms and design patterns that support effective program design, analysis, composition, reuse, and overall robustness.

This vision seems built on the 1988 “[Agoric computing](https://e-drexler.com/d/09/00/AgoricsPapers/agoricpapers.html)” vision of Drexler and Mark Miller, which Miller has also built on in his computer security work. That vision is of computing systems with a fine-grain breakdown into service-providing modules with separate resources and property rights. As Peter McCluskey [notes](http://www.bayesianinvestor.com/blog/index.php/2019/01/30/drexler-on-ai-risk/), this vision is also related to Drexler’s later nanotech visions:

Drexler’s CAIS proposal removes the “self-” from recursive self-improvement, in much the same way that nanofactories removed the “self-” from nanobot self-replication, replacing it with a more decentralized process that involves preserving more features of existing factories / AI implementations.

McCluskey is only mildly persuaded:

[By] analogies to people … I’m tempted … to conclude that an unified agent AI will be more visionary and eager to improve. … The novelty of the situation hints we should distrust Drexler’s extrapolation from standard software practices (without placing much confidence in any alternative). … He wants humans to decompose [curing Cancer] into narrower goals (with substantial AI assistance), such that humans could verify that the goals are compatible with human welfare (or reject those that are too hard too evaluate). This seems likely to delay cancer cures compared to what an agent AGI would do, maybe by hours, maybe by months, as the humans check the subtasks. … I haven’t thought of a realistic example where I expect the delay would generate a strong incentive for using an agent AGI, but the cancer example is close enough to be unsettling. … Modularity normally makes software development easier … [but] modularity seems less important for ML.

I’ve found two other critics of this new report. [Rohin Shah](https://www.alignmentforum.org/posts/x3fNwSe5aWZb5yXEG/reframing-superintelligence-comprehensive-ai-services-as):

> Typically, we’re worried about the setting where the RL [reinforcement learning] agent is learning or planning at test time, which can happen in learn-to-learn and online learning settings, or even with vanilla RL if the learned policy has access to external memory and can implement a planning process separately from the training procedure. … The lesson of deep learning is that if you can do something end-to-end, that will work better than a structured approach. This has happened with computer vision, natural language processing, and seems to be in the process of happening with robotics. So I don’t buy [Drexler’s vision] — while it seems true that we will get CAIS before AGI since structured approaches tend to be available sooner and to work with less compute, I expect that a monolithic AGI agent would outperform CAIS at most tasks once we can make one.

[Richard Ngo](http://thinkingcomplete.blogspot.com/2019/01/comments-on-cais.html):

The more powerful each service is, the harder it is to ensure it’s individually safe; the less powerful each service is, the harder it is to combine them in a way that’s competitive with unified agents … Our only example of general intelligence so far is ourselves – a species composed of agent-like individuals who pursue open-ended goals. … Many complex tasks don’t easily decompose into separable subtasks. … Requiring the roles of each module and the ways they interface with each other to be … human-comprehensible will be very uncompetitive … If many AI services end up requiring similar faculties to each other, it would likely be more efficient to unify them into a single entity. … Task of combining [modules] to perform well in new tasks seems like a difficult one which will require a broad understanding of the world. … Agents will eventually overtake CAIS superintelligences because they’ll have more efficient internal structure and will be optimising harder for self-improvement. … The … fuzzy notion of “service” which makes sense in our current context, but may not in the context of much more powerful AI technology.

All these critics seem to agree with Drexler that it is harder to see and control the insides of services, relative to interfaces between them. Where they disagree is in seeing productive efficiency considerations as perhaps creating large natural service “lumps.” A big lumpy service does a large set of tasks with a wide enough scope, where it would be much less efficient to break that up into many services, and where we should be scared of what this lump might do if driven by the wrong values.

Note the strong parallels with the usual concern about large firms in capitalism. The popular prediction that unregulated capitalism would make a few huge firms is based on more than productive efficiencies; people also fear market power, collusion, and corruption of governance. But big size induced by productive efficiencies of scale is definitely one of the standard concerns.

Economics and business have large literatures not only on the many factors that induce large versus small firms, but also on the particular driver of production efficiencies. This often goes under the label “make versus buy”; making something within a firm rather than buying it from other firms tends to make a firm larger. It tends to be better to make things that need to be tightly coordinated with core firm choices, and where it is harder to make useful arm-length contracts. Without such reasons to be big, smaller tends to be more efficient. Because of these effects, most scholars today don’t think unregulated firms would become huge, contrary to Marx, Engels, and popular opinion.

If the worry is that it is dangerous to allow the firms that provide AI services to get very large, then it should be a priority to reduce the many other factors that today encourage large firms in the tech area. These include incentives to create patent pools, fixed costs of complying with regulation, taxing and regulating exchanges between but not within firms, and a lack of common carrier approaches in new network industries.

Alas, as seen in the above criticisms, it seems far too common in the AI risk world to presume that past patterns of software and business are largely irrelevant, as AI will be a glorious new shiny unified thing without much internal structure or relation to previous things. (As predicted by [far views](https://www.overcomingbias.com/2010/06/near-far-summary.html).) The history of vastly overestimating the ease of making huge firms in capitalism, and the similar typical nubbie error of overestimating the ease of making large unstructured software systems, are seen as largely irrelevant.

McCluskey does briefly considers the possibility of this sort of bias:

Maybe there’s a useful analogy to markets – maybe people underestimate CAIS because very decentralized systems are harder for people to model. People often imagine that decentralized markets are less efficient that centralized command and control, and only seem to tolerate markets after seeing lots of evidence (e.g. the collapse of communism). On the other hand, Eliezer and Bostrom don’t seem especially prone to underestimate markets, so I have low confidence that this guess explains much.

It seems crazy cultish to me to, when guessing if this bias might be a problem, to put much weight on estimating the personal bias-resisting abilities of two particular people. It’s a big world, and they too are human.

Oh, many people are very impressed that current machine learning (ML) systems seem to have less visible or understandable structure than the prior systems that the’ve replaced. But it seems to me a vast exaggeration to conclude from this that future systems of vastly larger ability and scope will have little internal structure. Even today’s best ML systems have a lot of structure, and systems of much larger scope will need a lot more. Across history we’ve seen many changes in the degree of integration of particular kinds of systems, without such changes saying much about any huge global future integration trend.

1

29

Share
