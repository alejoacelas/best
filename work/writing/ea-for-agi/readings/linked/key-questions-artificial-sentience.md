---
title: "Key questions about artificial sentience: an opinionated guide"
author: "Robert Long"
url: https://experiencemachines.substack.com/p/key-questions-about-artificial-sentience
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. forethought/project-ideas-sentience-and-rights-of-digital-minds.md; key questions on artificial sentience — digital minds"
---

# Key questions about artificial sentience: an opinionated guide

### I think we can do a much better job thinking about AI sentience

[](https://substack.com/@experiencemachines)

[Robert Long](https://substack.com/@experiencemachines)

Apr 25, 2022

23

3

Share

What is it like to be DALL-E 2? Are today’s AI systems consciously experiencing anything as they [generate pictures of teddy bears on the moon](https://openai.com/dall-e-2/#demos), [explain jokes](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html), and [suggest terrifying new nerve agents](https://www.vox.com/future-perfect/2022/3/30/23001712/ai-research-virus-scientific-information-dangerous)?

This post gives a list of open scientific and philosophical questions about AI sentience. First, I frame the issue of AI sentience, proposing what I think is _the_ Big Question we should be trying to answer: a detailed computational theory of sentience that applies to both biological organisms and artificial systems. Then, I discuss the research questions that are relevant to making progress on this question. Even if the ultimate question cannot be answered to our satisfaction, trying to answer it will yield valuable insights that can help us navigate possible AI sentience.

# Introduction

> “Maybe if a reinforcement learning agent is getting negative rewards, it’s feeling pain to some very limited degree. And if you’re running millions or billions of copies of that, creating quite a lot, that’s a real moral hazard.” -Sam Altman (OpenAI), [interviewed](https://www.nytimes.com/2021/06/11/podcasts/transcript-ezra-klein-interviews-sam-altman.html) by Ezra Klein (2021)

Are today's ML systems already sentient? Most experts seem to think “probably not”, and it doesn’t seem like there’s currently a strong argument that today’s large ML systems are conscious.1

But AI systems are getting more complex and more capable with every passing week. And we understand sufficiently little about consciousness that we face huge uncertainty about whether, when, and why AI systems will have the capacity to have conscious experiences, including especially significant experiences like suffering or pleasure. We have a poor understanding of what possible AI experiences could be like, and how they would compare to human experiences.

One potential catastrophe we want to avoid is unleashing powerful AI systems that are misaligned with human values: that's why the AI alignment community is hard at work trying to ensure we don't build power-seeking optimizers that [take over the world in order to pursue some goal that we regard as alien and worthless](https://astralcodexten.substack.com/p/deceptively-aligned-mesa-optimizers?s=r).

It’s encouraging that more work is going into minimizing risks from misaligned AI systems. At the same time, we should also take care to avoid engineering a catastrophe for _AI systems themselves_ : a world in which we have created AIs that are capable of intense suffering, suffering which we do not mitigate, whether through ignorance, malice, or indifference.

There could be very, very many sentient artificial beings. Jamie Harris ([2021](https://forum.effectivealtruism.org/posts/cEqBEeNrhKzDp25fH/the-importance-of-artificial-sentience)) argues that “the number of [artificially sentient] beings could be vast, perhaps many trillions of human-equivalent lives on Earth and presumably even more lives if we colonize space or less complex and energy-intensive artificial minds are created.” There’s lots of uncertainty here: but given large numbers of future beings, and the possibility for intense suffering, the scale of AI suffering could dwarf the already mind-bogglingly large scale of animal suffering from factory farming.2

[](https://substackcdn.com/image/fetch/$s_!c6Ap!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F34f273ec-753f-4728-9bd3-e62e08caee44_740x338.jpeg) _The San Junipero servers from season 3, episode 4 of Black Mirror_

It would be nice if we had a clear outline for how to avoid catastrophic scenarios from AI suffering, something like: here are our best computational theories of what it takes for a system, whether biological or artificial, to experience conscious pleasure or suffering, and here are the steps we can take to avoid engineering large-scale artificial suffering. Such a roadmap would help us prepare to wisely [share the world with digital minds](https://www.nickbostrom.com/papers/digital-minds.pdf).

For example, you could imagine a consciousness researcher, standing up in front of a group of engineers at DeepMind or some other top AI lab, and giving a talk that aims to prevent them creating suffering AI systems. This talk might give the following recommendations:

  1. Do not build an AI system that (a) is sufficiently agent-like and (b) has a [global workspace](https://arxiv.org/abs/2012.10390) and reinforcement learning signals that (c) are broadcast to that the workspace and (d) play a certain computational role in shaping learning and goals and (e) are associated with avoidant and self-protective [behaviors](https://www.ncbi.nlm.nih.gov/books/NBK32656/).

  2. And here is, precisely, in architectural and computational terms, what it means for a system to satisfy conditions a-e—not just these vague English terms.

  3. Here are the kinds of architectures, training environments, and learning processes that might give rise to such components.

  4. Here are the behavioral 'red flags' of such components, and here are the [interpretability](https://80000hours.org/podcast/episodes/chris-olah-interpretability-research/#digital-suffering-012049) methods that would help identify such components—all of which into take into account the fact that AIs might have incentives to deceive us about such matters.




So, why can't I go give that talk to DeepMind right now?

First, I’m not sure that components a-e are the right sufficient conditions for artificial suffering. I’m not sure if they fit with our best scientific understanding of suffering as it occurs in humans and animals. Moreover, even if I were sure that components a-e are on the right track, I don’t know how to specify them in a precise enough way that they could guide actual engineering, interpretability, or auditing efforts.

Furthermore, I would argue that no one, including AI and consciousness experts who are far smarter and more knowledgeable than I am, is currently in a position to give this talk—or something equivalently useful—at DeepMind.

What _would_ we need to know in order for such talk to be possible?

# **The Big Question**

In an ideal world, I think the question that we would want an answer to is:

> What is the precise computational theory that specifies what it takes for a biological or artificial system to have various kinds of conscious, valenced experiences—that is, conscious experiences that are pleasant or unpleasant, such as pain, fear, and anguish or pleasure, satisfaction, and bliss?

## **Why not answer a different question?**

The importance and coherence of framing this question in this way depends on five assumptions.

  1. _Sentientism about moral patienthood_ : if a system (human, non-human animal, AI) has the capacity to have conscious valenced experiences—if it is sentient3—then it is a moral patient. That is, it deserves moral concern for its own sake, and its pain/suffering and pleasure matter. This assumption is why the Big Question is morally important.4

  2.  _Computational functionalism about sentience_ : for a system to have a given conscious valenced experience is for that system to be in a (possibly very complex) computational state. That assumption is why the Big Question is asked in computational (as opposed to neural or biological) terms.5

  3.  _Realism about phenomenal consciousness_ : phenomenal consciousness exists. It may be identical to, or grounded in, physical processes, and as we learn more about it, it may not have all of the features that it intuitively seems to have. But phenomenal consciousness is not _entirely_ illusory, and we can define it “[innocently](https://www.openphilanthropy.org/2017-report-consciousness-and-moral-patienthood#Defined)” enough that it points to a real phenomenon without baking in any dubious metaphysical assumptions. In philosopher’s terms, we are rejecting [strong illusionism](https://www.lesswrong.com/posts/SJjaWcMKtcdM3FW9u/grokking-illusionism). This assumption is why the Big Question is asked in terms of _conscious_ valenced experiences.

  4. _Plausibility_ : it’s not merely logically possible, but non-negligibly likely, that some future (or existing) AI systems will be (or are) in these computational states, and thereby (per assumption 2) sentient. This assumption is why the Big Question is action-relevant.

  5. _Tractability_ : we can make scientific progress in understanding what these computational states are. This assumption is why the Big Question is worth working on.6




All of these assumptions are up for debate. But I actually won't be defending them in this post. I've listed them in order to make clear one particular way of orienting to these topics.

And in order to elicit disagreement. If you _do_ reject one or more of these assumptions, I would be curious to hear which ones, and why—and, in light of your different assumptions, how you think we should formulate the major question(s) about AI sentience, and about the relationship between sentience and moral patienthood.

(I'll note that the problem of how to re-formulating these questions in a coherent way is especially salient, and non-trivial, for strong illusionists about consciousness who hold that phenomenal consciousness does not exist at all. See [this paper by Kammerer](https://philpapers.org/rec/KAMEWS) for an attempt to think about welfare and sentience from a strong illusionist framework.)

## **Why not answer a smaller question?**

In an ideal world, we could answer the Big Question soon, before we do much more work building ever-more complex AI systems that are more and more likely to be conscious. In the actual world, I do not think that we will answer the Big Question any time in the next decade. Instead, we will need to act cautiously, taking into consideration what we know, short of a full answer.

That said, I think it is useful to have the Big Question in mind as an orienting question, and indeed to try to just take a swing at the full problem. As Holden Karnofsky [writes](https://forum.effectivealtruism.org/posts/zGiD94SHwQ9MwPyfW/important-actionable-research-questions-for-the-most#Comparison_with_more_incremental_work), “there is…something to be said for directly tackling the question you most want the all-things-considered answer to (or at least a significant update on).” Taking an ambitious approach can yield a lot of progress, even while the approach is unlikely to yield a complete answer.

# **Subquestions for the Big Question**

In the rest of this post, I’ll list what I think are the most important questions about consciousness in general, and about valenced states in particular, that bear on the question of AI sentience.

### **A note on terminology**

First, a note on terminology. By “consciousness” I mean “phenomenal consciousness”, which philosophers use to pick out subjective experience, or there being something that it is like to be a given system. In ordinary language, “consciousness” is used to refer to intelligence, higher cognition, having a self-concept, and many other traits. These traits may end up being related to phenomenal consciousness, but are conceptually distinct from it. We can refer to certain states as conscious (e.g., feeling back pain, seeing a bright red square on a monitor) or not conscious (e.g., perceptual processing of a subliminal stimulus, hormone regulation by the hypothalamus). We can also refer to a creature or system as conscious (e.g. you right now, an octopus) or not conscious (e.g., a brick, a human in a coma).

By “sentient”, I mean capable of having a certain subset of phenomenally conscious experiences—valenced ones. Experiences that are phenomenally conscious but non-valenced would include visual experiences, like seeing a blue square. (If you enjoy or appreciate looking at a blue square, this might be associated with a valenced experience, but visual perception itself is typically taken to be a non-valenced experience). At times, I use “suffering” and “pleasure” as shorthands for the variety of negatively and positively valenced experiences.

[](https://substackcdn.com/image/fetch/$s_!WI7x!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F86b5bbc3-e176-451a-9184-61c2c1ff77f1_1024x684.jpeg)_'International Klein Blue (IKB Godet) 1959' by Yves Klein (1928-62). Which people claim to appreciate looking at._

## **Questions about scientific theories of consciousness**

The [scientific study of consciousness](https://theassc.org/), as undertaken by neuroscientists and other cognitive scientists, tries to answer what Scott Aaronson calls the “[pretty hard problem](https://forum.effectivealtruism.org/posts/Qiiiv9uJWLDptH2w6/the-pretty-hard-problem-of-consciousness#The_pretty_hard_problem_of_consciousness)” of consciousness: which physical states are associated with which conscious experiences? This is a meaningful open question regardless of your views on the metaphysical relationship between physical states and conscious experiences (i.e., your views on the “[hard problem](http://consc.net/papers/facing.pdf)” of consciousness).7

Scientific theories of consciousness necessarily start with the human case, since it is the case which we are most familiar with and have the most data about. The purpose of this section is to give a brief overview of the methods and theories in the scientific study of consciousness before raising the main open questions and limitations.

A key explanandum of a scientific theory of consciousness is why some, but not all, information processing done by the human brain seems to give rise to consciousness experience. As Graziano ([2017](https://www.frontiersin.org/articles/10.3389/frobt.2017.00060/full)) puts it:

> A great deal of visual information enters the eyes, is processed by the brain and even influences our behavior through priming effects, without ever arriving in awareness. Flash something green in the corner of vision and ask people to name the first color that comes to mind, and they may be more likely to say “green” without even knowing why. But some proportion of the time we also claim, “I have a subjective visual experience. I see that thing with my conscious mind. Seeing feels like something.”

Neuroscientific theories of human consciousness seek to identify the brain regions and processes that explain the presence or absence of consciousness. They seek to capture a range of phenomena:

  * the patterns of verbal report and behavior present in ordinary attentive consciousness

  * the often surprising patterns of report and behavior that we see when we manipulate conscious perception in various ways: phenomena like [change blindness](https://philpapers.org/browse/changeinattentional-blindness), [backwards masking](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00006/full), various patterns of perceptual [confidence](https://philpapers.org/rec/MORCTC-7) and decision making

  * various pathologies caused by brain legions, surgeries, and injuries, such as amnesia, [blindsight](https://philpapers.org/rec/HOLBAT-3), and split-brain phenomena8



  * loss of consciousness in dreamless sleep, anesthesia, coma, and vegetative states




Computational glosses on neuroscientific theories of consciousness seek to explain these patterns in terms of the computations that are being performed by various regions of the brain.

Theories of consciousness differ in how they interpret this evidence and what brain processes and/or regions they take to explain it.

-The most popular scientific theory of consciousness is probably the [global workspace theory](https://www.sciencedirect.com/science/article/abs/pii/S0079612305500049) of consciousness, which holds that conscious states are those that are ‘broadcast’ to a ‘global workspace’, a network of neurons that makes information available to a variety of subsystems.

[](https://substackcdn.com/image/fetch/$s_!iJrt!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ffbf36bb1-1329-46c2-bdc5-b181c78115fc_472x426.jpeg)_Illustration from the canonical paper on global workspace theory_

-[Higher-order theories](https://plato.stanford.edu/entries/consciousness-higher/) of consciousness hold that what it is to be consciously seeing a red apple is for you to be a) perceiving the red apple and b) to have a higher-order mental state (introspection, metacognition) that represents that state.

-First-order theories of consciousness hold that neither a global workspace nor higher-order representations is necessary for consciousness - some kind of perceptual representation is, by itself, sufficient for consciousness (e.g. Tye's PANIC theory, discussed by Muehlhauser [here](https://www.openphilanthropy.org/2017-report-consciousness-and-moral-patienthood#PANIC)).

-The [attention schema theory](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00500/full) of consciousness holds that conscious states are a mid-level, lossy ‘sketch’ of our attention, analogously to how the [body schema](https://en.wikipedia.org/wiki/Body_schema) is a ‘lossy’ sketch of the state of our body.

[](https://substackcdn.com/image/fetch/$s_!lSWJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1808d0c4-9d0c-4b45-a42a-429e1a390d28_371x388.png)_I like how content this fellow from Graziano’s[paper](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00500/full) is_

The big open question in the science of consciousness is which, if any, of these (and other9) theories are correct. But as Luke Muehlhauser has noted, even the leading theories of consciousness are woefully underspecified. What exactly does it mean for a system to have a ‘global workspace’? What exactly does it take for a representation to be ‘broadcast’ to it? What processes, exactly, count as higher-order representation? How are attention schemas realized? To what extent are these theories even inconsistent with each other - what different predictions do they make, and how can we experimentally test these predictions?10

Fortunately, consciousness scientists are making efforts to identify testable predictions of rival theories, e.g. Melloni et al. ([2021](https://www.science.org/doi/full/10.1126/science.abj3259)). My impression, from talking to [Matthias Michel](https://matthias-michel.wixsite.com/michel) about the methodology of consciousness science, is that we have learned quite a lot about consciousness in the past few decades. It’s not the case that we are completely in the dark: as noted above, we’ve uncovered many surprising and non-obvious phenomena, which serve as data that can constrain our theory-building. Relatedly, methodology in consciousness science has gotten more sophisticated: we are able to think in much more detailed ways about metacognition, perceptual decision-making, introspection, and other cognitive processes that are closely related to consciousness. Moreover, we’ve learned to take seriously the need to explain our intuitions and judgments about consciousness: the so-called [meta-problem of consciousness](https://philpapers.org/archive/CHATMO-32.pdf).

Actually trying to solve the problem by constructing computational theories which try to explain the full range of phenomena could pay significant dividends for thinking about AI consciousness. We can also make progress on questions about valence—as I discuss in the next section.

### **Further reading**

[Appendix B](https://www.openphilanthropy.org/2017-report-consciousness-and-moral-patienthood#AppendixB) of Luke Muehlhauser's animal sentience report, on making theories of consciousness more precise; Doerig et al. ([2020](https://pubmed.ncbi.nlm.nih.gov/32663056/)) outline “stringent criteria specifying how empirical data constrains theories of consciousness”.

## **Questions about valence**

Is DALL-E 2 having conscious _visual experiences_? It would be extraordinarily interesting if it is. But I would be alarmed to learn that DALL-E 2 has conscious visual experiences only inasmuch as these experiences would be a warning sign that DALL-E 2 might also be capable of conscious suffering; I wouldn’t be concerned about the visual experiences _per se_.11 We assign special ethical significance to a certain subset of conscious experiences, namely the valenced ones: a range of conscious states picked out by concepts like pain, suffering, nausea, contentment, bliss, et alia.

In addition to wanting a theory of consciousness in general, we want a theory of (conscious) valenced experiences: when and why is a system capable of experiencing conscious pain or pleasure? Even if we remain uncertain about phenomenal consciousness in general, being able to pick out systems that are especially likely to have valenced experiences could be very important, given the close relationship between valence and welfare and value. For example, it would be useful to be able to say confidently that, even if it consciously experiences _something_ , DALL-E 2 is unlikely to be suffering.

[](https://substackcdn.com/image/fetch/$s_!-cDk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff72097fa-c74e-4b8f-b7a2-fd97d501a172_640x460.jpeg)_Advertisement for Wolcott’s Instant Pain Annihilator (c. 1860)_

## **How do valenced states relate to each other?**

Pain, nausea, and regretting a decision all seem negatively valenced. Orgasms, massages, and enjoying a movie all seem positively valenced.

Does valence mark a unified category - is there a natural underlying connection between these different states? How do unpleasant bodily sensations like pain and nausea relate to negative emotions like fear and anguish, and to more ‘intellectual’ displeasures like finding a shoddy argument frustrating? How do pleasant bodily sensations like orgasm and satiety relate to positive emotions like contentment and amusement, and to more ‘intellectual’ pleasures like appreciating an elegant math proof?

To develop a computational theory of valence, we need clarity on exactly what it is that we are building a theory of. This is not to say that we need to chart the complicated ways in which English and common sense individuates and relates these disparate notions. Nor do we need to argue about the many different ways scientists and philosophers might choose to use the words “pain” vs “suffering”, or “desire” vs “wanting”. But there are substantive questions about whether the natural grouping of experiences into ‘positive’ and ‘negative’ points at a phenomenon that has a unified functional or computational explanation. And about how valenced experiences relate to motivation, desire, goals, and agency. For my part, I suspect that there is in fact [a deeper unity](https://philpapers.org/rec/MOETUA) among valenced states, one that will have a common computational or functional signature.

### **Further reading**

Timothy Schroeder’s Three Faces of Desire ([2004](https://oxford.universitypressscholarship.com/view/10.1093/acprof:oso/9780195172379.001.0001/acprof-9780195172379)) has a chapter on pleasure and displeasure that is a great introduction to these issues; the Stanford Encyclopedia of Philosophy articles on [pain](https://plato.stanford.edu/entries/pain/) and [pleasure](https://plato.stanford.edu/entries/pleasure/); Carruthers ([2018](https://faculty.philosophy.umd.edu/pcarruthers/Valence%20and%20Value.pdf)), "Valence and Value"; Henry Shevlin ([forthcoming](https://henryshevlin.com/wp-content/uploads/2021/11/Felt-unpleasantness.pdf)) and my [colleague](https://patrickbutlin.com/) Patrick Butlin ([2020](https://patrickbutlin.com/consc.html)) on valence and animal welfare.

## **What's the connection between reward and valence?**

And there are striking similarities between reinforcement learning in AI and reinforcement learning in the brain. According to the “reward prediction error hypothesis” of dopamine neuron activity, dopaminergic neurons in VTA/SNpc12 compute reward prediction error and broadcast this to other areas of the brain for learning. These computations have striking resemblances to [temporal difference learning](https://towardsdatascience.com/intro-to-reinforcement-learning-temporal-difference-learning-sarsa-vs-q-learning-8b4184bb4978) in AI.

That said, the broadcast of the reward prediction error seems to be distinct from the experience of conscious pleasure and pain in various ways (cf. Schroeder ([2004](https://oxford.universitypressscholarship.com/view/10.1093/acprof:oso/9780195172379.001.0001/acprof-9780195172379)), Berridge and Kringelbach on [liking versus wanting](https://faculty.philosophy.umd.edu/pcarruthers/Liking%20versus%20Wanting.pdf)). How exactly does reward relate to valenced states in humans? In general, what gives rise to pleasure and pain, in addition to (or instead of) the processing of reward signals? A worked-out computational theory of valence would shed light on the relationship between reinforcement learning and valenced experiences.

### **Further reading**

Schroeder ([2004](https://oxford.universitypressscholarship.com/view/10.1093/acprof:oso/9780195172379.001.0001/acprof-9780195172379)) on reinforcement versus pleasure; Tomasik ([2014](https://arxiv.org/pdf/1410.8233.pdf)) pp 8-11 discusses the complex relationship between reward, pleasure, motivation, and learning; Sutton and Barto's [RL textbook](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf) has a chapter on neuroscience and RL.

## **The scale and structure of valence**

It’s hugely important not just whether AI systems have valenced states, but a) whether these states are positively vs. negatively valenced and b) how intense the valence is. What explains the varying intensity of positively and negatively valenced states? And what explains the fact that positive and negative valence seem to trade off of each other and have a natural ‘zero’ point?

Here’s a puzzle about these questions that arises in the reinforcement learning setting: it’s possible to shift the training signal of an RL agent from negative to positive, while leaving all of its learning and behavior in tact. For example, in order to train an agent to balance a pole (the classic CartPole task), you could either a) give it 0 reward for balancing the pole and a negative reward for failing b) give it positive reward for balancing the pole and 0 reward for failing.

[](https://substackcdn.com/image/fetch/$s_!wzqs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F797305e4-f674-4ce9-b3fd-fbcc5589a991_493x206.png)

The training and behavior of these two systems would be identical, in spite of the shift in the value of the rewards. Does simply shifting the numerical value of the reward to “positive” correspond to a deeper shift towards positive valence? It seems strange that simply switching the sign of a scalar value could be affecting valence in this way. Imagine shifting the reward signal for agents with more complex avoidance behavior and verbal reports. Lenhart Schubert (quoted in Tomasik ([2014](https://arxiv.org/abs/1410.8233)), from whom I take this point) remarks: “If the shift…causes no behavioural change, then the robot (analogously, a person) would still behave as if suffering, yelling for help, etc., when injured or otherwise in trouble, so it seems that the pain would not have been banished after all!”

So valence seems to depend on something more complex than the mere numerical value of the reward signal. For example, perhaps it depends on prediction error in certain ways. Or perhaps the balance of pain and pleasure depends on efficient coding schemes which minimize the cost of reward signals / pain and pleasure themselves: this is the thought behind Yew‑Kwang Ng’s [work](https://philpapers.org/rec/GRODSD-8) on wild animal welfare, and Shlegeris's [brief remarks](https://shlegeris.com/2016/12/30/pain.html) inspired by this work.

More generally, in order to build a satisfactory theory of valence and RL, I think we will need to:

  1. Clarify what parts of a system correspond to the basic [RL ontology](https://sites.google.com/view/rl-as-agency/) of reward signal, agent, and environment

  2. Take into account the complicated motivational and functional role of pain and pleasure, including:



  * dissociations between ‘liking’ and ‘wanting’

  * ways in which pain and unpleasantness can come apart (e.g. [pain asymbolia](https://academic.oup.com/mind/article/124/494/493/2606077)

  * the role of emotion and expectations




In my opinion, progress on a theory of valence might be somewhat more tractable than progress on a theory of consciousness, given that ‘pain’ and ‘pleasure’ have clearer functional roles than phenomenal consciousness does. But I think we are still far from a satisfying theory of valence.13

### **Further reading**

Dickinson and Balleine ([2010](https://www.researchgate.net/profile/Anthony-Dickinson-3/publication/281198773_Hedonics_The_cognitive-motivational_interface/links/61519cea154b3227a8b02755/Hedonics-The-cognitive-motivational-interface.pdf)) argue that valenced states are how information about value is passed between two different RL systems in the brain—one unconscious system that does model-free reinforcement learning about homeostasis, and a conscious cognitive system that does model-based reinforcement learning; literature in predictive processing framework (e.g. Van De Cruys ([2017](https://predictive-mind.net/papers/affective-value-in-the-predictive-mind/)); the Qualia Research Institute has a [theory of valence](https://forum.effectivealtruism.org/posts/KNktjqYwQyvh2kutX/a-primer-on-the-symmetry-theory-of-valence), but I have not yet been able to understand it what this theory claims and predicts.

# **Applying our theories to specific AI systems**

The quality of discourse about AI sentience is very low—low enough that this tongue-in-cheek tweet was [discussed ](https://www.independent.co.uk/tech/artificial-intelligence-conciousness-ai-deepmind-b2017393.html)by mainstream news outlets:

[](https://substackcdn.com/image/fetch/$s_!Zk10!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8b97bedd-db33-4c6f-b6ed-1a5ab40e7db7_960x822.png)

As I see it, the dialectic in discussions about AI sentience is usually not much more advanced than:

> Position A: “AI systems are very complex. Maybe they are a little bit sentient.”14 Position B: “that is stupid”

I think that position A is not unreasonable. Given the complexity of today’s ML systems, and our uncertainty about what computations give rise to consciousness, higher levels of complexity should increase our credence somewhat that consciousness-related computations are being performed. But we can do better. Each side of this debate can give more detailed arguments about the presence or absence of sentience.

People in position A can go beyond mere appeals to complexity, and say what theories of consciousness and valence predict that current AI systems are sentient—in virtue of what architectural or computational properties AI systems might be conscious: for example, reinforcement learning, higher-order representations, global workspaces.

People in position B can say what pre-conditions for sentience they think are lacking in current systems—for example, a certain kind of embodiment, or a certain kind of agency—and why they think these components are necessary for consciousness. Then, they can specify more precisely what exactly they would need to see in AI systems that would increase their credence in AI sentience.

One complication is that our theories of human (and animal) consciousness usually don’t make reference to “background conditions” that we might think are important. They compare different human brain states, and seek to find neural structures or computations that might be the difference-makers between conscious and unconscious—for example, broadcast to a global workspace. But these neural structures or computations are embedded in a background context that is usually not formulated explicitly: for example, in the biological world, creatures with global workspaces are also embodied agents with goals. How important are these background conditions? Are they necessary pre-conditions for consciousness? If so, how do we formulate these pre-conditions more precisely, so that we can say what it takes for an AI system to satisfy them?15

Detailed thinking about AI sentience usually falls between the cracks of different fields. Neuroscientists will [say their favored theory applies to AI](https://www.science.org/doi/10.1126/science.aan8871) without making detailed reference to actual AI systems. AI researchers will refer to criteria for sentience without much reference to the scientific study of sentience.

In my opinion, most existing work on AI sentience simply does not go far enough to make concrete predictions about possible AI sentience. Simply attempting to apply scientific theories of consciousness and valence to existing AI systems, in a more precise and thoughtful way, could advance our understanding. Here’s a recipe for progress:

  * Gather leading experts on scientific theories of consciousness and leading AI researchers

  * Make the consciousness scientists say what precisely they think their theories imply about AI systems

  * Ask the AI researchers what existing, or likely-to-be-created AI systems, might be conscious according to these theories




Indeed, the [digital minds research group](https://www.fhi.ox.ac.uk/the-team/) at FHI is putting together a workshop to do precisely this. We hope to create a space for more detailed and rigorous cross-talk between these disciplines, focusing these discussions on actual or likely AI systems and architectures.

### **Further reading:**

Further reading: Schwitzgebel and Garza ([2020](https://philarchive.org/archive/SCHDAW-10)) on "Designing AI with rights, consciousness, self-respect, and freedom"; Lau, Dehane, and Kouider ([2017](https://www.science.org/doi/10.1126/science.aan8871)) apply their global workspace and higher-order theories to possible AI systems; Graziano ([2017](https://www.frontiersin.org/articles/10.3389/frobt.2017.00060/full)) claims his attention schema theory is “a foundation for engineering artificial consciousness”; Ladak ([2021](https://www.sentienceinstitute.org/blog/assessing-sentience-in-artificial-entities#relevant-features)) proposes a features indicative of sentience in artificial entities; Shevlin ([2021](https://www.cambridge.org/core/journals/cambridge-quarterly-of-healthcare-ethics/article/abs/how-could-we-know-when-a-robot-was-a-moral-patient/83AB36D54C4F697C14D5FC6C970B6044)) on moral patienthood; Amanda Askell's [reflections](https://askellio.substack.com/p/ai-consciousness)

# **Conclusion**

Taking a swing at the Big Question does not mean we can’t, and shouldn’t, also pursue more ‘theory neutral’ ways of updating our credences about AI sentience. For example, by finding commonalities between extant theories of consciousness and using them to make lists of potentially consciousness indicating features. Or by devising ‘red flags’ for suffering that a variety of theories would agree on. Or by trying to find actions that are robustly good assuming a variety of views about the connection between sentience and value.

This topic is sufficiently complex that how to even ask or understand the relevant questions is up for grabs. I’m not certain of the framing of the questions, and will very likely change my mind about some basic conceptual questions about consciousness and valence as I continue to think about this.

Still, I think there is promise in working on the Big Question, or some related variations on it. To be sure, our neuroscience tools are way less powerful than we would like, and we know far less about the brain than we would like. To be sure, our conceptual frameworks for thinking about sentience seem shaky and open to revision. Even so, trying to actually solve the problem by constructing computational theories which try to explain the full range of phenomena could pay significant dividends. My attitude towards the science of consciousness is similar to Derek Parfit’s attitude towards ethics: since we have [only just begun](https://www.goodreads.com/quotes/8920621-disbelief-in-god-openly-admitted-by-a-majority-is-a) the attempt, we can be optimistic.16

 _[you can also find this post at[LessWrong](https://www.lesswrong.com/posts/cwDbYmnSdoobdcJnx/research-questions-for-ai-sentience) and the [EA Forum](https://forum.effectivealtruism.org/posts/gFoWdiGYtXrhmBusH/key-questions-about-artificial-sentience-an-opinionated)]_

1

There’s limited info on what “expert” consensus on this issue is. The Association for the Scientific Study of Consciousness [surveyed](https://psyarxiv.com/8mbsk/) its members. For the [question](https://osf.io/gp2wy/), "At present or in the future, could machines (e.g., robots) have consciousness?" 20.43% said 'definitely yes', 46.09% said ‘probably yes’. Of 227 philosophers of mind [surveyed](https://survey2020.philpeople.org/survey/results/5106?aos=39) in the 2020 PhilPapers survey, only 2 of them (0.88%) "accept or lean towards" some current AI systems being conscious. But 50.22% "accept or lean towards" some future AI systems being conscious.

2

As discussed in "Questions about valence" below, the scale of suffering would depends not just on the number of systems, but the amount and intensity of suffering vs. pleasure in these systems. 

3

see “Note on terminology” section

4

Sometimes sentientism refers to the view that sentience is not just sufficient for moral patienthood, but necessary as well. For these purposes, we only need the sufficiency claim.

5

The way I've phrased this implies that a given experience _just is_ the computational state. But this can be weakened. In fact, computational functionalism is compatible with a variety of metaphysical views about consciousness—e.g., a non-physicalist could hold that the computational state is a correlate of consciousness. For example, David Chalmers ([2010](http://consc.net/papers/singularity.pdf)) is a computational functionalist and a non-phsyicalist: "the question of whether the physical correlates of consciousness are biological or functional is largely orthogonal to the question of whether consciousness is identical to or distinct from its physical correlates."

6

At least, there’s _pro tanto_ reason to work on it. It could be that other problems like AI alignment are more pressing or more tractable, and/or that work on the Big Question is best left for later. This question has been discussed [elsewhere](https://forum.effectivealtruism.org/posts/kxHRn7Lye6FdQ3tEE/principia-qualia-blueprint-for-a-new-cause-area#comments).

7

Unless your view is that phenomenal consciousness does not exist. If that’s your view, then the pretty hard problem, as phrased, is answered with “none of them”. See assumption #3, above. See Chalmers ([2018](https://philpapers.org/archive/CHATMO-32.pdf)) pp 8-9, and footnote 3, for a list of illusionists theories.

8

LeDoux, Michel, and Lau ([2020](https://pubmed.ncbi.nlm.nih.gov/32170012/)) reviews how puzzles about amnesia, split brain, and blindsight were crucial in launching consciousness science as we know it today

9

What about [predictive processing](https://www.lesswrong.com/tag/predictive-processing)? Predictive processing is (in my opinion) not a theory of consciousness per se. Rather, it’s a general framework for explaining prediction and cognition whose adherents often claim that it will shed light on the problem of consciousness. But such a solution is still forthcoming

10

See [Appendix B](https://www.openphilanthropy.org/2017-report-consciousness-and-moral-patienthood#AppendixB) of Muehlhauser’s report on consciousness and moral patienthood, where he argues that our theories are woefully imprecise.

11

Some people think that conscious experiences in general, not just valenced states of consciousness or sentience, are valuable. I disagree. See Lee ([2018](https://philpapers.org/rec/LEEICI)) for an argument against the intrinsic value of consciousness in general.

12

the [ventral tegmental area](https://en.wikipedia.org/wiki/Ventral_tegmental_area) and the [pars compacta of the substantia nigra](https://en.wikipedia.org/wiki/Pars_compacta)

13

Paraphrased from discussion with colleague [Patrick Butlin](https://patrickbutlin.com/), some other possible connections between consciousness and valence: 

  * Valence just is consciousness plus evaluative content. On this view, figuring out the evaluative content component will be easier than the consciousness component, but won’t get us very far towards the Big Question 

  * Compatibly, perhaps the functional role of some specific type of characteristically valenced state e.g. conscious sensory pleasure is easier to discern than the role of consciousness itself, and can be done first (

  * Against this kind of view, some [people](https://www.jstor.org/stable/48628589) will object that you can't know that you're getting at conscious pleasure (or whatever) until you understand consciousness. 

  * If valence isn't just consciousness plus evaluative content, then I think we can make quite substantive progress by working out what it is instead. But presumably consciousness would still be a component, so a full theory couldn't be more tractable than a theory of consciousness




14

A question which I have left for another day: does it make sense to claim that a system is "a little bit" sentient or conscious? Can there be borderline cases of consciousness? Does consciousness come in degrees. See Lee ([forthcoming](https://philpapers.org/rec/YLEDOC)) for a nice disambiguation of these questions

15

Peter Godfrey-Smith is a good example of someone who has been explicit about background conditions (in his biological theory of consciousness, [metabolism](https://petergodfreysmith.com/metazoan.net/Mind_Matter_Metabolism_PGS_2015_preprint.htm) is a background condition for consciousness). DeepMind's Murray Shanahan [talks](https://twitter.com/mpshanahan/status/1492081199690522651?s=20&t=gS8jxGt20AQ6GFNRVE7RxQ) about embodiment and agency but, in my opinion, not precisely enough.

16

For discussion and feedback, thanks Fin Moorhouse, Patrick Butlin, Arden Koehler, Luisa Rodriguez, Bridget Williams, Adam Bales, and Justis Mills and the LW feedback team.

23

3

Share

PreviousNext
