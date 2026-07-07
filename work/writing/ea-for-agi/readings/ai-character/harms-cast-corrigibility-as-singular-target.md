---
title: "0. CAST: Corrigibility as Singular Target"
author: "Max Harms"
date: 2024-06-07
url: https://www.lesswrong.com/posts/NQK8KHSrZRF5erTba/0-cast-corrigibility-as-singular-target-1
fetched: 2026-07-07
via: forum-graphql
topic: "ai-character"
note: "gap-scour: the obedient-tool/corrigibility pole in its own voice — Harms' CAST (Corrigibility As Singular Target); MacAskill argues against it but the pole never spoke for itself"
---

What the heck is up with “corrigibility”? For most of my career, I had a sense that it was a grab-bag of properties that seemed nice in theory but hard to get in practice, perhaps due to being incompatible with agency.

Then, last year, I spent some time revisiting my perspective, and I concluded that I had been deeply confused by what corrigibility even was. I now think that **corrigibility is a single, intuitive property**, which people can learn to emulate without too much work and which is deeply compatible with agency. Furthermore, I expect that even with prosaic training methods, there’s some chance of winding up with an AI agent that’s inclined to become more corrigible over time, rather than less (as long as the people who built it understand corrigibility and want that agent to become more corrigible). Through a slow, gradual, and careful process of refinement, I see a path forward where **this sort of agent could ultimately wind up as a (mostly) safe superintelligence**. And, if that AGI is in the hands of responsible governance, this could end the [acute risk period](https://www.lesswrong.com/tag/acute-risk-period), and get us to a good future.

**This is not the path we are currently on.** As far as I can tell, frontier labs do not understand corrigibility deeply, and are not training their models with corrigibility as the goal. Instead, they are racing ahead with a vague notion of “ethical assistance” or “helpful+harmless+honest” and a hope that “we’ll muddle through like we always do” or “use AGI to align AGI” or something with similar levels of wishful thinking. Worse, I suspect that many researchers encountering the concept of corrigibility will mistakenly believe that they understand it and are working to build it into their systems.

**Building corrigible agents is hard and fraught with challenges.** Even in an ideal world where the developers of AGI aren’t racing ahead, but are free to go as slowly as they wish and take all the precautions I indicate, there are good reasons to think doom is still likely. I think that the most prudent course of action is for the world to shut down capabilities research until our science and familiarity with AI catches up and we have better safety guarantees. But **if people are going to try and build AGI despite the danger, they should at least have a good grasp on corrigibility and be aiming for it as the singular target**, rather than as part of a mixture of goals (as is the current norm).

My goal with these documents is primarily to do three things:

1.  Advance our understanding of corrigibility, especially on an intuitive level.
2.  Explain why designing AGI with corrigibility as the sole target (CAST) is more attractive than other potential goals, such as full alignment, or local preference satisfaction.
3.  Propose a novel formalism for measuring corrigibility as a trailhead to future work.

Alas, my writing is not currently very distilled. Most of these documents are structured in the format that I originally chose for my private notes. I’ve decided to publish them in this style and get them in front of more eyes rather than spend time editing them down. Nevertheless, here is my attempt to briefly state the **key ideas** in my work:

1.  **Corrigibility is the simple, underlying generator** behind obedience, conservatism, willingness to be shut down and modified, transparency, and low-impact.
    1.  It is a fairly simple, universal concept that is not too hard to get a rich understanding of, at least on the intuitive level.
    2.  Because of its simplicity, we should expect AIs to be able to emulate corrigible behavior fairly well with existing tech/methods, at least within familiar settings.
2.  **Aiming for CAST is a better plan than aiming for human values** (i.e. [CEV](https://intelligence.org/files/CEV.pdf)), helpfulness+harmlessness+honesty, or even a balanced collection of desiderata, including some of the things corrigibility gives rise to.
    1.  If we ignore the possibility of halting the development of machines capable of seizing control of the world, we should try to build CAST AGI.
    2.  **CAST is a target, rather than a technique**, and as such it’s compatible both with prosaic methods and superior architectures.
        1.  Even if you suspect prosaic training is doomed, CAST should still be the obvious target once a non-doomed method is found.
3.  Despite being simple, corrigibility is poorly understood, and **we are not on track for having corrigible AGI**, even if reinforcement learning is a viable strategy.
    1.  Contra Paul Christiano, we should not expect corrigibility to emerge automatically from systems trained to satisfy local human preferences.
    2.  Better awareness of the subtleties and complexities of corrigibility are likely to be essential to the construction of AGI going well.
4.  Corrigibility is nearly unique among all goals for being simultaneously useful and non-self-protective.
    1.  This property of non-self-protection means we should suspect AIs that are almost-corrigible will assist, rather than resist, being made more corrigible, thus forming **an attractor-basin around corrigibility**, such that almost-corrigible systems gradually become truly corrigible by being modified by their creators.
        1.  **If this effect is strong enough**, **CAST is a pathway to safe superintelligence** via slow, careful training using adversarial examples and other known techniques to refine AIs capable of shallow approximations of corrigibility into agents that deeply seek to be corrigible at their heart.
    2.  There is also reason to suspect that almost-corrigible AIs learn to be less corrigible over time due to **corrigibility being “anti-natural.”** It is unclear to me which of these forces will win out in practice.
5.  There are several reasons to expect building AGI to be catastrophic, even if we work hard to aim for CAST.
    1.  Most notably, **corrigible AI is still extremely vulnerable to misuse**, and we must ensure that superintelligent AGI is only ever corrigible to wise representatives.
6.  ~~My intuitive notion of **corrigibility can be straightforwardly leveraged to build a formal, mathematical measure**.~~
    1.  ~~Using this measure we can make **a better solution to the shutdown-button toy problem** than I have seen elsewhere.~~
    2.  This formal measure is still lacking, and almost certainly doesn’t actually capture what I mean by “corrigibility.”
    3.  **Edit: My attempted formalism** [**failed catastrophically**](https://www.lesswrong.com/posts/qgBFJ72tahLo5hzqy/serious-flaws-in-cast).
7.  **There is lots of opportunity for more work on corrigibility, some of which is shovel-ready** for theoreticians and engineers alike.

**Note:** I’m a MIRI researcher, but this agenda is the product of my own independent research, and as such one should not assume it’s endorsed by other research staff at MIRI.

**Note:** Much of my thinking on the topic of corrigibility is *heavily* influenced by the work of Paul Christiano, Benya Fallenstein, Eliezer Yudkowsky, Alex Turner, and several others. My writing style involves presenting things from my perspective, rather than leaning directly on the ideas and writing of others, but I want to make it very clear that I’m largely standing on the shoulders of giants, and that much of my optimism in this research comes from noticing convergent lines of thought with other researchers. Thanks to Nate Soares, Steve Byrnes, Jesse Liptrap, Seth Herd, Ross Nordby, Jeff Walker, Haven Harms, and Duncan Sabien for early feedback. I also want to especially thank Nathan Helm-Burger for his in-depth collaboration on the research and generally helping me get unconfused.

Overview
========

[1\. The CAST Strategy](https://www.alignmentforum.org/posts/3HMh7ES4ACpeDKtsW/1-the-cast-strategy)
---------------------------------------------------------------------------------------------------

In [The CAST Strategy](https://www.alignmentforum.org/posts/3HMh7ES4ACpeDKtsW/1-the-cast-strategy), I introduce the property corrigibility, why it’s an attractive target, and how we might be able to get it, even with prosaic methods. I discuss the risks of making corrigible AI and why **trying to get corrigibility as one of many desirable properties to train an agent to have (instead of as the singular target) is likely a bad idea**. Lastly, I do my best to lay out the cruxes of this strategy and explore potent counterarguments, such as anti-naturality and whether corrigibility can scale. These counterarguments show that **even if we can get corrigibility, we should not expect it to be easy or foolproof**.

[2\. Corrigibility Intuition](https://www.alignmentforum.org/posts/QzC7kdMQ5bbLoFddz/2-corrigibility-intuition)
---------------------------------------------------------------------------------------------------------------

In [Corrigibility Intuition](https://www.alignmentforum.org/posts/QzC7kdMQ5bbLoFddz/2-corrigibility-intuition), I try to give a strong intuitive handle on corrigibility as I see it. This involves a collection of many stories of a CAST agent behaving in ways that seem good, as well as a few stories of where a CAST agent behaves sub-optimally. I also attempt to contrast corrigibility with nearby concepts through vignettes and direct analysis, which includes a discussion of why **we should** ***not*** **expect frontier labs, given current training targets, to produce corrigible agents**.

[3a. Towards Formal Corrigibility](https://www.alignmentforum.org/posts/WDHREAnbfuwT88rqe/3a-towards-formal-corrigibility)
--------------------------------------------------------------------------------------------------------------------------

In [Towards Formal Corrigibility](https://www.alignmentforum.org/posts/WDHREAnbfuwT88rqe/3a-towards-formal-corrigibility), I attempt to sharpen my description of corrigibility. I try to anchor the notion of corrigibility, ontologically, as well as clarify language around concepts such as “agent” and “reward.” Then I begin to discuss the shutdown problem, including why it’s easy to get basic shutdownability, but hard to get the kind of corrigible behavior we actually desire. I present the sketch of a solution to the shutdown problem, and discuss manipulation, which I consider to be the hard part of corrigibility.

[3b. Formal (Faux) Corrigibility](https://www.alignmentforum.org/posts/t8nXfPLBCxsqhbipp/3b-formal-faux-corrigibility) ← the mathy one
--------------------------------------------------------------------------------------------------------------------------------------

In [Formal (Faux) Corrigibility](https://www.alignmentforum.org/posts/t8nXfPLBCxsqhbipp/3b-formal-faux-corrigibility), I build a fake framework for measuring empowerment in toy problems, and suggest that it’s at least a start at measuring manipulation and corrigibility. This metric, at least in simple settings such as a variant of the original stop button scenario, produces corrigible behavior. I extend the notion to indefinite games played over time, and end by criticizing my own formalism and arguing that data-based methods for building AGI (such as prosaic machine-learning) may be significantly more robust (and therefore better) than methods that heavily trust this sort of formal analysis.

[4\. Existing Writing on Corrigibility](https://www.alignmentforum.org/posts/d7jSrBaLzFLvKgy32/4-existing-writing-on-corrigibility)
-----------------------------------------------------------------------------------------------------------------------------------

In [Existing Writing on Corrigibility](https://www.alignmentforum.org/posts/d7jSrBaLzFLvKgy32/4-existing-writing-on-corrigibility), I go through many parts of the literature in depth including MIRI’s earlier work, some of the writing by Paul Christiano, Alex Turner, Elliot Thornley, John Wentworth, Steve Byrnes, Seth Herd, and others.

[5\. Open Corrigibility Questions](https://www.alignmentforum.org/posts/wZjGLYp5WQwF8Y8Kk/5-open-corrigibility-questions)
-------------------------------------------------------------------------------------------------------------------------

In [Open Corrigibility Questions](https://www.alignmentforum.org/posts/wZjGLYp5WQwF8Y8Kk/5-open-corrigibility-questions), I summarize my overall reflection of my understanding of the topic, including reinforcing the counterarguments and nagging doubts that I find most concerning. I also lay out potential directions for additional work, including studies that I suspect others could tackle independently.

[Edit: Serious Flaws in CAST](https://www.lesswrong.com/posts/qgBFJ72tahLo5hzqy/serious-flaws-in-cast)
------------------------------------------------------------------------------------------------------

In [Serious Flaws in CAST](https://www.lesswrong.com/posts/qgBFJ72tahLo5hzqy/serious-flaws-in-cast), I notice the parts of this research that I have updated negatively around, including noticing a critical flaw in the formalism, in the "attractor basin" metaphor, and in the hope for success absent theoretical foundation. I don't feel that my self-critique invalidates everything of value in CAST, but it's worth being aware of as a counterpoint.

Bibliography and Miscellany
===========================

In addition to this sequence, I’ve created a [Corrigibility Training Context](https://docs.google.com/document/d/1zgCuRRZO4KSm53Kh5sHR-i-k4vjBfcg77PqqohSIoIc/edit?usp=sharing) that gives ChatGPT a moderately-good understanding of corrigibility, if you’d like to [try talking to it](https://chat.openai.com/g/g-HheSLXpkz-corrigibility-oracle).

The rest of this post is bibliography, so I suggest now jumping straight to [The CAST Strategy](https://www.alignmentforum.org/posts/3HMh7ES4ACpeDKtsW/1-the-cast-strategy).

While I don’t necessarily link to or discuss each of the following sources in my writing, I’m aware of and have at least skimmed everything listed here. Other writing has influenced my general perspective on AI, but if there are any significant pieces of writing on the topic of corrigibility that aren’t on this list, please let me know.

*   Arbital (almost certainly Eliezer Yudkowsky)
    *   “[Corrigibility](https://arbital.com/p/corrigibility/).”
    *   “[Hard problem of corrigibility](https://arbital.com/p/hard_corrigibility/).”
    *   “[Problem of fully updated deference](https://arbital.com/p/updated_deference/).”
    *   “[Shutdown problem](https://arbital.com/p/shutdown_problem/).”
    *   “[Utility indifference](https://arbital.com/p/utility_indifference/).”
*   Stuart Armstrong
    *   “[The limits of corrigibility](https://www.lesswrong.com/posts/T5ZyNq3fzN59aQG5y/the-limits-of-corrigibility).” 2018.
    *   “[Petrov corrigibility](https://www.lesswrong.com/posts/4g29JgtbJ283iJ3Bh/petrov-corrigibility).” 2018.
    *   “[Corrigibility doesn't always have a good action to take](https://www.lesswrong.com/posts/nbhTzEosM9sqEvr6P/corrigibility-doesn-t-always-have-a-good-action-to-take).” 2018.
*   Audere
    *   “[An Impossibility Proof Relevant to the Shutdown Problem and Corrigibility](https://www.lesswrong.com/posts/MBemd8k9uHFDEKzad/an-impossibility-proof-relevant-to-the-shutdown-problem-and).” 2023.
*   Yuntao Bai et al. (Anthropic)
    *   “[Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2204.05862).” 2022.
*   Nick Bostrom
    *   “[Superintelligence: Paths, Dangers, Strategies](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies).” 2014.
*   Gwern Branwen
    *   “[Why Tool AIs Want to Be Agent AIs](https://gwern.net/tool-ai).” 2016.
*   Steven Byrnes
    *   “[Thoughts on implementing corrigible robust alignment](https://www.lesswrong.com/posts/8W5gNgEKnyAscg8BF/thoughts-on-implementing-corrigible-robust-alignment).” 2019.
    *   “[Three mental images from thinking about AGI debate & corrigibility](https://www.lesswrong.com/posts/WjY9y7r52vaNZ2WmH/three-mental-images-from-thinking-about-agi-debate-and).” 2020.
    *   “[Consequentialism & corrigibility](https://www.lesswrong.com/posts/KDMLJEXTWtkZWheXt/consequentialism-and-corrigibility).” 2021.
    *   “[Solving the whole AGI control problem, version 0.0001](https://www.lesswrong.com/posts/Gfw7JMdKirxeSPiAk/solving-the-whole-agi-control-problem-version-0-0001).” 2021.
    *   “[Reward is Not Enough](https://www.lesswrong.com/posts/frApEhpyKQAcFvbXJ/reward-is-not-enough).” 2021.
    *   “[Four visions of Transformative AI success](https://www.lesswrong.com/posts/3aicJ8w4N9YDKBJbi/four-visions-of-transformative-ai-success)” 2024.
*   Jacob Cannell
    *   “[Empowerment is (almost) all we need](https://www.lesswrong.com/posts/JPHeENwRyXn9YFmXc/empowerment-is-almost-all-we-need).” 2022.
*   Ryan Carey and Tom Everitt
    *   “[Human Control: Definitions and Algorithms](https://proceedings.mlr.press/v216/carey23a/carey23a.pdf?fbclid=IwAR36GShY6eXcnEjjR6px_8AQZgwtzHSOdB6Z4eoza-tzlJw3dBk4oXBMFWY).” 2023.
*   Paul Christiano
    *   “[Corrigibility](https://www.lesswrong.com/posts/fkLYhTQteAu5SinAc/corrigibility).” 2015.
    *   “[Worst-case guarantees](https://ai-alignment.com/training-robust-corrigibility-ce0e0a3b9b4d).” 2019.
    *   [Response to Eliezer on "Let's see you write that Corrigibility tag"](https://www.lesswrong.com/posts/AqsjZwxHNqH64C2b6/let-s-see-you-write-that-corrigibility-tag?commentId=8kPhqBc69HtmZj6XR#fnwds07hpbws). 2022.
*   Computerphile (featuring Rob Miles)
    *   “[AI "Stop Button" Problem - Computerphile](https://www.youtube.com/watch?v=3TYT1QfdfsM).” 2017.
    *   “[Stop Button Solution? - Computerphile](https://www.youtube.com/watch?v=9nktr1MgS-A).” 2017.
*   Wei Dai
    *   “[Can Corrigibility be Learned Safely](https://www.alignmentforum.org/posts/o22kP33tumooBtia3/can-corrigibility-be-learned-safely).” 2018.
    *   “[A broad basin of attraction around human values?](https://www.lesswrong.com/posts/TrvkWBwYvvJjSqSCj/a-broad-basin-of-attraction-around-human-values)” 2022.
*   Roger Dearnaley
    *   “[Requirements for a Basin of Attraction to Alignment](https://www.lesswrong.com/posts/EbGkqFNz8y93Ttuwq/requirements-for-a-basin-of-attraction-to-alignment)” 2024.
*   Abram Demski
    *   “[Non-Consequentialist Cooperation?](https://www.lesswrong.com/posts/F9vcbEMKW48j4Z6h9/non-consequentialist-cooperation)” 2019.
    *   “[The Parable of the Predict-o-Matic](https://www.alignmentforum.org/posts/SwcyMEgLyd4C3Dern/the-parable-of-predict-o-matic).” 2019.
*   Benya Fallenstein
    *   “[Generalizing the Corrigibility paper's impossibility result?](https://www.lesswrong.com/posts/5bd75cc58225bf0670374ec7/generalizing-the-corrigibility-paper-s-impossibility-result)” 2015.
*   Simon Goldstein
    *   “[Shutdown Seeking AI](https://www.lesswrong.com/posts/FgsoWSACQfyyaB5s7/shutdown-seeking-ai).” 2023.
*   Ryan Greenblatt and Buck Shlegeris
    *   “[The case for ensuring that powerful AIs are controlled](https://www.lesswrong.com/posts/kcKrE9mzEHrdqtDpE/the-case-for-ensuring-that-powerful-ais-are-controlled).” 2024.
*   Dylan Hadfield-Menell, Anca Dragan, Pieter Abbeel, and Stuart Russell
    *   “[The Off-Switch Game](https://arxiv.org/abs/1611.08219).” 2016.
*   Seth Herd
    *   “[Corrigibility or DWIM is an attractive primary goal for AGI](https://www.lesswrong.com/posts/ZdBmKvxBKJH2PBg9W/corrigibility-or-dwim-is-an-attractive-primary-goal-for-agi).” 2023.
    *   “[Instruction-following AGI is easier and more likely than value aligned AGI](https://www.alignmentforum.org/posts/7NvKrqoQgJkZJmcuD/instruction-following-agi-is-easier-and-more-likely-than).” 2024.
*   Koen Holtman
    *   “[New paper: Corrigibility with Utility Preservation](https://www.alignmentforum.org/posts/3uHgw2uW6BtR74yhQ/new-paper-corrigibility-with-utility-preservation).” 2019.
    *   “[Disentangling Corrigibility: 2015-2021](https://www.alignmentforum.org/posts/MiYkTp6QYKXdJbchu/disentangling-corrigibility-2015-2021)” 2021.
    *   [LW Comment on “Question: MIRI Corrigibility Agenda](https://www.lesswrong.com/posts/BScxwSun3K2MgpoNz/question-miri-corrigbility-agenda?commentId=CiqJrSTrX2kYDLrEW).” 2020.
*   Evan Hubinger
    *   “[Towards a mechanistic understanding of corrigibility](https://www.lesswrong.com/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility).” 2019.
*   Holden Karnofsky
    *   “[Thoughts on the Singularity Institute](https://www.lesswrong.com/posts/6SGqkCgHuNr7d4yJm/thoughts-on-the-singularity-institute-si)” (a.k.a. The Tool AI post). 2012.
*   Martin Kunev
    *   “[How useful is Corrigibility?](https://www.lesswrong.com/posts/Py3vqPp9uSqQJHFuy/how-useful-is-corrigibility)” 2023.
*   Ross Nordby
    *   “[Using predictors in corrigible systems](https://www.lesswrong.com/posts/LR8yhJCBffky8X3Az/using-predictors-in-corrigible-systems).” 2023.
*   Stephen Omohundro
    *   “[The Basic AI Drives](https://selfawaresystems.com/wp-content/uploads/2008/01/ai_drives_final.pdf).” 2008.
*   Sami Peterson
    *   “[Invulnerable Incomplete Preferences: A Formal Statement](https://www.lesswrong.com/posts/sHGxvJrBag7nhTQvb/invulnerable-incomplete-preferences-a-formal-statement-1).” 2023.
*   Christoph Salge, Cornelius Glackin, and Daniel Polani
    *   “[Empowerment – An Introduction](https://arxiv.org/pdf/1310.1863.pdf).” 2013.
*   Nate Soares, Benya Fallenstein, Eliezer Yudkowsky, and Stuart Armstrong
    *   “[Corrigibility](https://intelligence.org/files/Corrigibility.pdf).” 2015.
*   tailcalled
    *   “[Stop button: towards a causal solution](https://www.lesswrong.com/posts/wxbMsGgdHEgZ65Zyi/stop-button-towards-a-causal-solution).” 2021.
*   Jessica Taylor
    *   “[A first look at the hard problem of corrigibility](https://www.alignmentforum.org/posts/5bd75cc58225bf0670375041/a-first-look-at-the-hard-problem-of-corrigibility).” 2015.
*   Elliott Thornley
    *   “[The Shutdown Problem: Incomplete Preferences as a Solution](https://www.lesswrong.com/posts/YbEbwYWkf8mv9jnmi/the-shutdown-problem-incomplete-preferences-as-a-solution).” 2024.
    *   “[The Shutdown Problem: Three Theorems](https://www.lesswrong.com/posts/8GWLRMnp55iFZDBbm/the-shutdown-problem-three-theorems).” 2023.
*   Alex Turner, Logan Smith, Rohin Shah, Andrew Critch, and Prasad Tadepalli
    *   “[Optimal Policies Tend to Seek Power](https://arxiv.org/abs/1912.01683).” 2019.
*   Alex Turner
    *   “[Attainable Utility Preservation: Concepts](https://www.lesswrong.com/posts/75oMAADr4265AGK3L/attainable-utility-preservation-concepts).” 2020.
    *   “[Non-Obstruction: A Simple Concept Motivating Corrigibility](https://www.alignmentforum.org/posts/Xts5wm3akbemk4pDa/non-obstruction-a-simple-concept-motivating-corrigibility).” 2020.
    *   “[Corrigibility as outside view](https://www.alignmentforum.org/posts/BMj6uMuyBidrdZkiD/corrigibility-as-outside-view).” 2020.
    *   “[A Certain Formalization of Corrigibility Is VNM-Incoherent](https://www.alignmentforum.org/posts/WCX3EwnWAx7eyucqH/a-certain-formalization-of-corrigibility-is-vnm-incoherent).” 2021.
    *   “[Formalizing Policy-Modification Corrigibility](https://www.alignmentforum.org/posts/RAnb2A5vML95rBMyd/formalizing-policy-modification-corrigibility).” 2021.
*   Eli Tyre
    *   “[Some thoughts on Agents and Corrigibility](https://musingsandroughdrafts.com/2023/12/19/some-thoughts-on-agents-and-corrigibility/).” 2023.
*   WCargo and Charbel-Raphaël
    *   “[Improvement on MIRIs Corrigibility](https://www.lesswrong.com/posts/fNwDEHWFnHMtm8yH4/improvement-on-miri-s-corrigibility).” 2023.
*   John Wentworth and David Lorell
    *   “[A Shutdown Problem Proposal](https://www.lesswrong.com/posts/PhTBDHu9PKJFmvb4p/a-shutdown-problem-proposal).” 2024.
*   John Wentworth
    *   “[What's Hard About the Shutdown Problem](https://www.lesswrong.com/posts/iJofoQX7EjMFxDo6m/what-s-hard-about-the-shutdown-problem).” 2023.
*   Eliezer Yudkowsky
    *   “[Reply to Holden on ‘Tool AI’](https://www.lesswrong.com/posts/sizjfDgCgAsuLJQmm/reply-to-holden-on-tool-ai).” 2012.
    *   [Facebook Conversation with Rob Miles about terminology](https://www.facebook.com/yudkowsky/posts/10152443714699228?comment_id=10152445126604228). 2014.
    *   “[Challenges to Christiano’s capability amplification proposal](https://www.lesswrong.com/posts/S7csET9CgBtpi7sCh/challenges-to-christiano-s-capability-amplification-proposal).” 2018.
    *   [LW Comment on Paul’s research agenda FAQ](https://www.lesswrong.com/posts/Djs38EWYZG8o7JMWY/paul-s-research-agenda-faq?commentId=79jM2ecef73zupPR4). 2018.
    *   “[AGI Ruin: A List of Lethalities](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities).” 2022.
    *   “[Project Lawful](https://www.projectlawful.com/posts/4582).” 2023.
*   Zhukeepa
    *   “[Corrigible but misaligned: a superintelligent messiah](https://www.lesswrong.com/posts/mSYR46GZZPMmX7q93/corrigible-but-misaligned-a-superintelligent-messiah).” 2018.
*   Logan Zoellner
    *   “[Corrigibility, Much more detail than anyone wants to Read](https://www.lesswrong.com/posts/v3jocJRScqkBGtwvf/corrigibility-much-more-detail-than-anyone-wants-to-read).” 2023.