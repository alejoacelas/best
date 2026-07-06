---
title: "How human-like do safe AI motivations need to be? - Joe Carlsmith"
url: https://joecarlsmith.com/2025/11/12/how-human-like-do-safe-ai-motivations-need-to-be
fetched: 2026-07-06
via: html2text
topic: "joe-carlsmith"
note: "How human-like safe AI motivations must be; bridges alignment and AI-character/values questions."
---

How do we solve the alignment problem? / Part 9

How human-like do safe AI motivations need to be?

[](https://joecarlsmithaudio.buzzsprout.com/2034731/episodes/18175429-how-human-like-do-safe-ai-motivations-need-to-be)

Contents hide

  * 1\. Introduction  __
  * 2\. Are our AIs like aliens? __
  * 3\. Value fragility, sovereign AIs, and getting AI motivations “exactly right” __
  * 4\. What does it take to build corrigible AIs? __
    * 4.1 Minimizing ambition __
      * 4.1.1 Making AIs ambitious by accident __
      * 4.1.2 Making AIs ambitious on purpose __
    * 4.2 Sufficiently strong/robust non-consequentialist motivations __
      * 4.2.1 What do I mean by non-consequentialist motivations? __
      * 4.2.2 Non-consequentialist instruction-following __
      * 4.2.3 Are non-consequentialist motivations too incoherent for advanced AIs? __
    * 4.2.4 Traditional corrigibility problems __
      * 4.2.4.1 Nearest unblocked neighbor __
      * 4.2.4.2 Appropriate weight __
      * 4.2.4.3 Other possible issues __
      * 4.2.4.4 Is corrigibility anti-natural to advanced cognition? __
  * 5\. IABIED’s “alien motivations” argument isn’t about corrigibility __
  * 6\. What difference does human-like-ness make? __
    * 6.1 Comparison with other ML tasks __
    * 6.2 Honesty and schmonesty __
    * 6.3 Out of distribution cats vs. maximal cats __
    * 6.4 What if the AI is trying to be maximally deontological/virtuous/corrigible? __
    * 6.5 How fragile is corrigibility? __
  * 7\. Is there something special about the safe-to-dangerous leap that makes alien motivations problematic? __
    * 7.1 From alien motivations to scheming __
    * 7.2 Do alien motivations doom adequate non-adversarial generalization? __
  * 8\. Alien AIs are still extremely scary __
  * 9\. Next up: building AIs that do human-like philosophy __
  * Appendix 1: On value fragility __



Last updated: 11.12.2025

Published: 11.12.2025

Series

How do we solve the alignment problem? / Part 9

# How human-like do safe AI motivations need to be?

Podcast version (read by the author) [here](https://joecarlsmithaudio.buzzsprout.com/2034731/episodes/18175429-how-human-like-do-safe-ai-motivations-need-to-be), or search for “Joe Carlsmith Audio” on your podcast app. 

_(This is the eighth essay in a series I’m calling “_[ _How do we solve the alignment problem?_](https://joecarlsmith.com/2025/02/13/how-do-we-solve-the-alignment-problem)_”. I’m hoping that the individual essays can be read fairly well on their own, but see_[ _this introduction_](https://joecarlsmith.com/2025/02/13/how-do-we-solve-the-alignment-problem) _for a summary of the essays that have been released thus far, plus a bit more about the series as a whole._

_This essay is also a review/critique of one of the central arguments in the book “_[ _If Anyone Builds It, Everyone Dies_](https://www.amazon.com/Anyone-Builds-Everyone-Dies-Superhuman/dp/0316595640) _,” by Eliezer Yudkowsky and Nate Soares.)_

## 1\. Introduction 

In previous essays, I’ve laid out my rough picture of the path to building increasingly powerful AIs safely – and in particular, to exerting control over [their motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations) and [their options](https://joecarlsmith.com/2025/09/29/controlling-the-options-ais-can-pursue) sufficient to allow us to use their labor to massively improve the situation ([“AI for AI safety”](https://joecarlsmith.com/2025/03/14/ai-for-ai-safety)), especially with respect to [our ability to make the next generation of AIs safe](https://joecarlsmith.com/2025/04/30/can-we-safely-automate-alignment-research). In this essay, I want to address directly a particular sort of concern about this project: namely, that the AIs in question will be too _alien_ to be safe. That is, the thought goes, AIs built/grown via contemporary machine learning methods will end up motivated by a complex tangle of strange, inhuman drives/heuristics that happen to lead to highly-rewarded behavior in training. But in the context of more powerful systems and/or more out-of-distribution inputs, the thought goes, these alien drives will lead to existentially catastrophic behavior. 

This sort of concern is core to certain kinds of arguments for pessimism about AI alignment risk – for example, the argument presented in the recent book “[If Anyone Builds It, Everyone Dies](https://www.amazon.com/Anyone-Builds-Everyone-Dies-Superhuman/dp/0316595640),” by Eliezer Yudkowsky and Nate Soares. And I think the concern has real force. However, I also find it less worrying than Yudkowsky and Soares do – especially in AIs with more intermediate levels of capability (that is, the AIs most crucial to “[AI for AI safety](https://joecarlsmith.com/2025/03/14/ai-for-ai-safety#4-the-ai-for-ai-safety-sweet-spot),” and which I view as the most direct responsibility of human alignment researchers to make safe). 

The core reason for this is that _we don’t need to build AI systems with long-term consequentialist motivations we’re happy to see optimized extremely hard._ In the context of systems like _that_ : yes, alien motivations are indeed a problem (as are human-like motivations with other flaws, even potentially minor flaws). But systems like that are not the goal. Rather, according to me, the goal is (roughly) to build AI systems that _follow our instructions in safe ways_. And this project, in my opinion, admits of a much greater degree of “error tolerance.” 

In particular: the motivations that matter most for safe instruction-following are not the AI’s long-term consequentialist motivations (indeed, if possible, I think we mostly want to avoid our AIs having this kind of motivation except insofar as it is implied by safe instruction-following). Rather, the motivations that matter most are the motivations to _reject options for rogue behavior_ – that is, motivations that are applied centrally to _actions_ rather than long-term outcomes. Or to put it another way: a lot of the safety we’re getting via [motivation control](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations) is going to rest on AIs being something more akin to “virtuous” or “deontological” with respect to options for rogue behavior, rather than from AIs directly caring about the same long-term outcomes as we do. And the relevant form of virtue/deontology, in my opinion, need not be fully or even especially human-like in the concepts/drives/motivations that structure it.1 Rather, it just needs to add up, in practice, to safe behavior on any dangerous inputs (that is, inputs that make options for rogue behavior available) that the AI is in fact exposed to. 

Admittedly: this reply doesn’t address all of the standard concerns about relying on non-consequentialist motivations for safety – for example, concerns about AIs with at least some long-term consequentialist motivation going rogue via the “[nearest unblocked strategy](https://www.lesswrong.com/w/nearest-unblocked-strategy)” that is suitably compatible with the non-consequentialist considerations they care about. Nor does it provide additional comfort with respect to [preventing alignment faking](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-3-step-2-no-alignment-faking), or with respect to what I’ve previously called the “[science of non-adversarial generalization](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-4-step-3-science-of-non-adversarial-generalization)” – that is, the challenge of ensuring (on the first safety-critical try) that the motivations of non-alignment-faking AIs generalize safely to practically-relevant out-of-distribution inputs. To the contrary, I do think that AI motivations being less human-like makes these challenges harder, because the alien-ness at stake makes it harder for humans to predict how the motivations will apply in a given case. 

But this, I think, is an importantly different concern than the one at stake in the central argument of “ _If Anyone Builds It, Everyone Dies”_ – and one, I think, about which existing levels of success at alignment in current systems (together with: existing success at out-of-distribution generalization in ML more generally) provides greater comfort. That is: to the extent that the degree of good/safe generalization we currently get from our AI systems arises from a complex tangle of strange alien drives, it seems to me plausible that we can get similar/better levels of good/safe generalization via complex tangles of strange alien drives in more powerful systems as well. Or to put the point another way: currently, it looks like image models classify images in somewhat non-human-like ways – e.g., they’re vulnerable to adversarial examples that humans wouldn’t be vulnerable to. But this doesn’t mean that they’re not adequately reliable for real-world use, even outside the training distribution. Aligning AIs with alien motivations might, I think, be similar. 

All that said: at a higher level, relying on smarter-than-human AIs with strange alien drives to reject options to seek power/control over humans seems extremely dangerous. I am more optimistic than Yudkowsky and Soares that it might work; but I share their alarm at the idea that we would need to try it. And to the extent we end up needing to try it with earlier generations of AIs, I think a key goal should be to transition rapidly to a different regime. 

_I’ll be_[ _starting a job at Anthropic soon_](https://joecarlsmith.com/2025/11/03/leaving-open-philanthropy-going-to-anthropic) _, but I’m here speaking only for myself, and Anthropic comms hasn’t reviewed this post. Thanks especially to Nate Soares and Holden Karnofsky for extensive discussion of some of these issues._

## 2\. Are our AIs like aliens?

Let’s start by laying out the concern about alien AIs in a bit more detail, focusing on the presentation in “If Anyone Builds It, Everyone Dies” (IABIED). 

We can understand the core argument in IABIED roughly as follows: 

  1. AIs built via anything like current techniques will end up motivated by a complex tangle of strange alien drives that happened to lead to highly-rewarded behavior during training. 
  2. AIs with this kind of motivational profile will be such that “what they most want” is a world that is basically valueless according to humans. 
  3. Superintelligent AIs with this kind of motivational profile will be in a position to get “what they most want,” because they will be in a position to take over the world and then optimize hard for their values.
  4. So, if we build superintelligent AIs via anything like current techniques, they will take over the world and then optimize hard for their values in a way that leads to a world that is basically valueless according to humans. 



We can query various aspects of this argument – and I won’t try to evaluate all of it in detail here. For now, though, let’s focus on the first premise. Is that right? 

I’m not sure it is. Notably, for example: current AI pre-training focuses their initial development specifically on a vast amount of human content, thereby plausibly endowing them with many quite human-like representations. That is: current AIs need to understand at a very early stage what human concepts like “helpfulness,” “harmlessness,” and “honesty” mean. And while it is of course possible to know what these concepts mean without being motivated by them (cf “[the genie knows but doesn’t care](https://x.com/ESYudkowsky/status/1648518676084305926)”), the presence of this level of human-like conceptual understanding at such an early stage of development makes it more likely that these human-like concepts end up structuring AI motivations as well. 

Indeed, this is one of many notable disanalogies between AI training and natural selection – one of Yudkowsky and Soares’s favorite reference points. That is, pointing human motivations directly at something like “inclusive genetic fitness” wasn’t even an option for natural selection, because humans didn’t have a concept of inclusive genetic fitness until quite recently. But AIs will plausibly have concepts like “helpfulness,” “harmlessness,” “honesty” much earlier in the process that leads to their final form. 

What’s more, existing efforts at interpretability do in fact often uncover notably human-legible representations at work in current AI systems (though obviously, there are serious selection effects at stake in this evidence);2 and to the extent such representations correspond to important/natural “joints in nature” generally useful to understanding the world, this is all the less surprising. And to my mind, at least, the ease with which we’ve been able to prompt quite human-like and aligned behavior in our AIs using quite basic, RLHF-like techniques is both notable and, in my opinion, in tension with the naive predictions of a worldview that treats AI cognition as extremely alien. In particular: in my opinion, we haven’t just succeeded at getting fairly reliably aligned behavior on a specific training distribution. Rather, we’ve succeeded at creating dispositions towards aligned behavior that generalize fairly (though of course, not perfectly) well to new, at-least-somewhat out of distribution inputs as well – and success at this kind of generalization is effectively what “human-like-ness” consists in.3 (Here I expect Yudkowsky and Soares will say that the sort of generalization we care about most is importantly different; I’ll address this concern later in the essay.)

Of course, it’s true that current AIs do sometimes behave quite badly – including, sometimes, in quite alien ways. But in interpreting this kind of evidence, my sense is that people worried about AI alignment often try to have the evidence both ways. That is, they treat incidents like [Bing Sydney](https://en.wikipedia.org/wiki/Sydney_\(Microsoft\)) as evidence that alignment is hard, but they don’t treat the _absence_ of _more_ of such incidents as evidence that alignment is easy; they treat incidents of weird/bad out-of-distribution AI behavior as evidence alignment is hard, but they don’t treat incidents of good out-of-distribution AI behavior as evidence alignment is easy. Of course, you can claim to learn nothing from any of these data points, and to be using them only to illustrate your perspective to others. But if you take yourself to be learning from the bad cases, I think you should be learning from the good cases, too.4

Indeed, my sense is that many observers of AI have indeed taken a lot of comfort from the good cases. That is, the intuition goes: if AI alignment remains effectively this easy going forwards, then things are looking pretty good. And while I generally think that casual comfort of this kind is notably premature, I share some intuition in the vicinity. In particular, I have some hope that by the time we start building AIs that can be transformatively useful – e.g., AIs within the “[AI for AI safety sweet spot](https://joecarlsmith.com/2025/03/14/ai-for-ai-safety#4-the-ai-for-ai-safety-sweet-spot)” that I discussed earlier in the series – alignment has not become radically harder, and in particular, that efforts to ensure safe instruction-following behavior continue to generalize out-of-distribution at least as well as they have done so far. And I think it plausible that if transformatively useful AI systems safely follow instructions about as reliably as current models do (and especially: if we can get better at dealing with reward-hacking-like problems that might mess up capability elicitation), this is enough to safely elicit a ton of transformatively useful AI labor, including on alignment research – and that the game-board looks substantially better after that.

What’s more, while I am indeed concerned about the many incidents of bad/misaligned behavior in current models, I don’t think any of these currently look like full-blown incidents of the threat model made most salient by concerns about AI alien-ness in particular. In particular, while it’s true that we see AIs willing to engage in problematic forms of power-seeking – e.g., deceiving humans, self-exfiltrating, sandbagging, resisting shut-down, etc – they currently mostly do so in pursuit either of fairly human-legible or context/prompt-legible goals like helpfulness or harmlessness (e.g. [here](https://www.anthropic.com/research/alignment-faking) and [here](https://www.anthropic.com/research/agentic-misalignment)); on the basis of shifting between different human-legible personas (e.g. [here](https://arxiv.org/abs/2502.17424) and [here](https://www.anthropic.com/research/persona-vectors)); in pursuit of completing the task itself (e.g. [here](https://palisaderesearch.org/blog/shutdown-resistance) and [here](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/)); or, perhaps, in pursuit of “terminalized” instrumental goals like an intrinsic drive towards power/survival (this is another interpretation of some of the results previously cited). That is: in my opinion, we have yet to see especially worrying cases of AIs going rogue specifically in pursuit of goals (and especially, long-term consequentialist goals) that seem especially strange/alien – though of course, this could change fast. 

What’s more, in thinking about what it would mean for an AI’s motivations/cognition to be human-like or alien, I think we need to be careful about the level of abstraction at which we are understanding the claim in question. That is: it’s not enough to say that AI behavior emerges from a complex tangle of heuristics, circuits, etc rather than something more cleanly factored (since: the same is true of human behavior); nor, more importantly, to say that the heuristics/circuits/etc work in a different way in the AI case. Rather, we should be focused on the high-level behavioral profile that emerges in the system as a whole, and the degree to which it diverges from some more human-like alternative.5 And as I’ll discuss below, what actually matters is whether it diverges _in practice_ , and in _catastrophic ways_ – not just whether it does so in _some_ way on _some_ inputs. Thus, per the analogy I discussed in the intro: an AI classifying cat pictures adequately doesn’t actually need to mimic human judgments across every single case (nor, indeed, will human judgments all agree with one another); to be robust to every adversarial example; etc. Rather: it just needs to get enough cases (including: enough cases out of distribution) enough right. And in this respect, for example, it looks to me like many of our efforts to get AIs to behave in fairly human-like ways, including out of distribution, are going OK. 

All that said: I remain sympathetic to some versions of premise (1). In particular: I think it quite plausible that if we really understood how current AI systems think/make decisions etc, we would indeed see that to the extent they are well-understood as having motivations at all, these motivations are quite strange/alien indeed, and that they will indeed lead to notably alien behavior on a wide variety of realistic inputs (beyond what we’ve seen thus far). For example, while I think it’s an open question exactly how to interpret data of this kind (see e.g. discussion [here](https://www.lesswrong.com/posts/qgvSMwRrdqoDMJJnD/towards-a-typology-of-strange-llm-chains-of-thought)), I definitely get some (fairly creepy) vibe of “strange, alien mind” from e.g. the sorts of chains of thought documented in [this work on scheming from Apollo and OpenAI](https://www.arxiv.org/pdf/2509.15541) (full transcripts [here](https://www.antischeming.ai/cot-transcripts)):

It’s giving “strange alien mind that might turn against you” (from [here](https://www.antischeming.ai/cot-transcripts/figure-2-sandbag-model-graded-cot)).

And I think it plausible, as well, that this sort of alien-ness will persist and/or increase in more powerful AIs built using similar techniques – and this even accounting for moderate improvements in our [behavioral science](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#3-1-behavioral-science) and [transparency tools](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#3-2-transparency-tools). 

That is: overall, I share Yudkowsky and Soares’ concern that the motivations of AIs built using current techniques will remain importantly strange/alien. And so I want to examine in more detail the implications for safety if this is true. In particular: if, in fact, powerful AI systems are motivated in at-least-somewhat alien ways, does that mean we are as doomed as Yudkowsky and Soares think? 

I’m skeptical. In particular: I think the Yudkowsky/Soares argument above places too much emphasis on long-term consequentialist AI motivations in particular, and that it neglects the ways in which the sort of safety accessible via shorter-term and especially non-consequentialist motivations ends up more tolerant of error. Or to put the point in more Yudkowskian terminology, I think that something like “corrigible AIs” (that is, roughly, AIs with imperfect motivations but which nevertheless obey your instructions and don’t go rogue) can safely be more notably alien (and otherwise flawed) in their motivations than “sovereign AIs” (that is, AIs with motivations so perfect you trust them to optimize the future arbitrarily hard without accepting any of correction from you) – and that our focus should be on something like corrigibility in particular.6 Let me say more about what I mean. 

## 3\. Value fragility, sovereign AIs, and getting AI motivations “exactly right”

In my opinion, we should understand the concern about “alien AIs,” and its role in the argument I laid out above, as a specific version of a broader concern that has haunted the AI alignment discourse from basically the beginning: namely, the concern that safe AI motivations need to be, in some sense, “exactly right.” That is, the more general argument in the background (though: not stated as explicitly in IABIED) is something like the following (alterations from the previous version in bold):7

  1. AIs built via anything like current techniques will end up **with motivations that aren’t**** _exactly right_****.**
  2. **AIs whose motivations aren’t**** _exactly right_****** will be such that “what they most want” is a world that is basically valueless according to humans. 
  3. Superintelligent AIs with this kind of motivational profile will be in a position to get “what they most want,” because they will be in a position to take over the world and then optimize hard for their values.
  4. So, if we build superintelligent AIs, they will take over the world and then optimize hard for their values in a way that leads to a world that is basically valueless according to humans. 



Why think that AI motivations need to be _exactly right_? Well, roughly, the basic concern is that human value is “[fragile](https://www.lesswrong.com/posts/EaLCAZ4bgycY6hFC8/value-fragility-and-ai-takeover)” under extreme optimization. That is, the thought goes: extreme optimization for slightly-flawed values leads to places that are basically valueless by human lights; and superintelligences will be forces for extreme optimization. 

I’ve written in some detail, elsewhere, about my takes on concerns about “value fragility” of this kind. See, in particular, [this set of informal notes](https://www.lesswrong.com/posts/EaLCAZ4bgycY6hFC8/value-fragility-and-ai-takeover), and [this longer essay about whether the concern in question applies similarly to humans with respect to one another](https://joecarlsmith.com/2024/01/11/an-even-deeper-atheism). For those interested, I’ve also given a summary of some of those takes in an appendix below. 

However, while I think there are a variety of interesting and important questions we can raise about value fragility (and especially: about the extent to which similar concerns do or do not apply between different humans), I’m not, here, going to dispute a certain kind of broad concern about it. That is, I’m going to accept that for long-term consequentialist value-systems that aren’t exactly right (or at least, which don’t put non-trivial weight on something exactly right), if you optimize for them super hard, you do indeed create a world that is roughly valueless by human lights. And I’m going to accept, further, that the degree of alien-ness at stake in the motivations of AIs developed via current techniques is likely enough to fall short of “exactly right” in this sense (at least to the extent that such AIs develop long term consequentialist motivations at all – something which, as I’ll discuss below, I think we should be trying to prevent except insofar as these motivations follow from safe instruction-following).

What follows from this? Basically: what follows is that current techniques aren’t fit to build AI systems with long-term consequentialist motivations that we’re happy to see optimized extremely hard. That is, roughly, they are not fit for building what Yudkowsky call a “Sovereign AI” – that is, in his words, an AI that “wants exactly what we extrapolated-want and is therefore safe to let optimize all the future galaxies without it accepting any human input trying to stop it.”

But building sovereign AIs of this kind, I claim, should not be our goal. Indeed, I explicitly [defined solving the alignment problem](https://joecarlsmith.com/2025/02/13/what-is-it-to-solve-the-alignment-problem#5-on-more-exacting-standards-of-alignment) so as to neither require this degree of alignment in the AIs we build; nor, even, to require the ability to elicit the creation of AIs that are this degree of aligned (and in particular, I’m not counting “build an AI that you’re happy to make dictator-of-the-universe” as one of the “main benefits of superintelligence”). This is centrally because I think that building an AI worthy of _this_ degree of trust may be a notably more difficult challenge than building an AI that safely follows our instructions.8 But also, even aside from the technical difficulty of building a “sovereign AI” of this kind, I don’t think we should view “now we’ve handed control of the world to a perfectly benevolent AI dictator/oligarchy” as a clearly ideal end state of our efforts on alignment – nor, indeed, one that is unavoidable absent some other sort of enforced restriction on AI development.9 To the contrary, I think we should focus more on a vision of humans who are able to get safe, fully-elicited superintelligent help in [navigating the ongoing transition](https://joecarlsmith.com/2025/02/13/what-is-it-to-solve-the-alignment-problem#3-1-transition-benefits) to even greater levels of AI capability – including with respect to questions about what sorts of “sovereign” to make what sorts of AIs going forwards.10

That said: the argument for pessimism at stake in IABIED – and also, in the more general value-fragility argument outlined above – isn’t “we should aim for perfect AI dictators, but we’re going to get alien/imperfect AI dictators instead.” Rather, it’s more like: “we’re not going to be able to avoid getting AI dictators of some form, and the dictators we’re going to get will be alien/imperfect.” That is: Yudkowsky and Soares do recognize the possibility of trying to build what Yudkowsky calls “corrigible AI” – that is, in Yudkowsky’s words, an AI “which doesn’t want exactly what we want, and yet somehow fails to kill us and take over the galaxies despite that being a convergent incentive there.” And indeed, my understanding is that Yudkowsky and Soares agree with me, as a first pass, that “corrigible AI” in this sense is a better near-term focus of efforts at alignment. But they think that the project of building corrigible AI, too, is [doomed to fail](https://ifanyonebuildsit.com/11/shutdown-buttons-and-corrigibility). 

Now, as I’ve discussed in [some informal notes elsewhere](https://www.lesswrong.com/posts/AFdvSBNgN2EkAsZZA/what-is-it-to-solve-the-alignment-problem-1#3_5_What_s_the_role_of__corrigibility__here_), I think that the role of the notion of “corrigibility” in the discourse about AI alignment is often unclear/ambiguous. In particular, in the context of the Yudkowsky quote above, it basically just means “any powerful AI with not-exactly-right values that is somehow otherwise safe.” But often, people use the term to refer to a number of more specific properties – notably, a willingness to submit to corrective intervention like shut-down or values-modification (while remaining useful in other ways – e.g. not _trying_ to shut itself down). Conceptually, these aren’t actually the same. For example: humans don’t perfectly share each other’s values, and they will generally resist “corrective intervention” like shut-down (death) and values-modification (brainwashing), but they also aren’t at least presently aiming at omnicide.

Still, something like “corrigibility” is indeed a closer match for my focus in this series than “sovereign AI.” That is: I want us to learn how to build AIs that safely follow our instructions – where “safely” means “without engaging in rogue behavior,” and where “rogue behavior” includes things like resisting shut down/values-modification, and _definitely_ includes taking over the world. Indeed, I think it’s notable that on the most straightforward understanding of plans for building “sovereign AI,” the AI in question _does_ take over the world (for example, the classic argument for AI takeover I laid out [here](https://joecarlsmith.com/2025/02/19/when-should-we-worry-about-ai-power-seeking#4-2-what-about-the-incentive-prerequisites) applies with roughly comparable weight to AIs with perfect long-term consequentialist values) – it’s just that, what it does from there is suitably valuable by human lights.11 That is, in a sense, even sovereign AIs with exactly-right long-term values go “rogue” in my sense – it’s just that, after humans lose control, the future is still good. But I’m interested in avoiding rogue behavior _period._

## 4\. What does it take to build corrigible AIs?

What does that involve? Well, let’s return, for a moment, to the framework for thinking about AI incentives that I laid out in the [second essay](https://joecarlsmith.com/2025/02/19/when-should-we-worry-about-ai-power-seeking#2-3-incentive-prerequisites) in the series. 

On this framework, the central aspects of an AI’s motivation profile that matter are its _satisfaction_(how happy it is with the best non-rogue option), its _inhibition_ (how averse it is to various paths to successful rogue behavior), its _failure aversion_ (how much it wants to avoid the downsides of failed rogue behavior) and its _ambition_ (how much it wants the power at stake in rogue behavior). The reason AIs with “alien” drives take over the world is that what they most want in the long term makes them suitably “ambitious” about getting the power at stake. And as I noted above, I actually think that similar considerations would suggest that even AIs with exactly-right long-term consequentialist values would take over as well. 

Suppose, though, that we don’t want our AIs to take over or to go rogue _at all_. How can we ensure this? A big part of it is _option control_ – and in particular, restricting the options for rogue behavior available to the AIs in question. Indeed, as I discussed in [the second essay](https://joecarlsmith.com/2025/02/19/when-should-we-worry-about-ai-power-seeking#4-2-what-about-the-incentive-prerequisites), I think the classic argument for AI risk is best understood as relying heavily on the premise that rogue-option-restriction of this kind will be so ineffective that the AI in question will be in a position to take over the world _extremely easily_ (such that “failure aversion” isn’t an important part of the story), and to do so via such a wide variety of methods that it can successfully route around any deontology-like inhibitions that make certain routes undesirable (cf concerns about “nearest unblocked neighbor”). In this context, that is, the main thing that matters for whether the AI has an incentive to take over is whether it has _any_ suitably long-term consequentialist motivation that gives rise to even a _small_ amount of ambition. And indeed, as I’ll discuss below, I think we see this kind of low/weak standard at work in the argument in IABIED for expecting AIs with alien drives to have long-term consequentialist drives in particular. 

As I discussed in my [last essay](https://joecarlsmith.com/2025/09/29/controlling-the-options-ais-can-pursue), though, I don’t think we should give up on option control playing an important role in the safety of advanced AIs, nor do I think that success in this respect needs to be all or nothing (i.e., no viable options for rogue behavior vs. can take over the world extremely easily via tons of different methods). And in the context of understanding “corrigibility,” I think the availability of option control as a possible tool is important. In particular, to the extent you are hoping to rule out a suitable range of paths to rogue behavior _somehow_ , option control allows you to do so via intervention on the AI’s environment/capabilities as well as via its motivations. In this sense, as with the notion of “alignment” more broadly, “corrigibility” in the sense I care about is importantly relative to a particular environment and capability level. That is, the AI in question doesn’t need to act corrigibly across all possible inputs and capability levels – it just needs to act corrigibly in the specific context you care about, on the specific set of tasks you’re trying to get it to perform. 

Beyond option control, though, we can divide the motivational aspect of corrigibility into two components: 

  1. Minimizing the AI’s “ambition.”
  2. Ensuring that the other aspects of the AI’s motivational profile (its satisfaction, inhibition, and failure aversion) are sufficiently strong/robust as to outweigh the degree of ambition it _does_ have. 



Let’s look at each in turn. 

### 4.1 Minimizing ambition

AI ambition arises, paradigmatically, when AIs have long-term consequentialist motivations – the sort of motivations that create instrumental incentives to seek power in problematic ways. Here the time horizon is important because the AI needs time for the relevant efforts at getting and using power to pay off; and the “consequentialist” is important because the paradigmatic use-case of power, in this context, is for causing the consequences the AI wants. 

Why exactly, though, should we expect advanced AIs to have motivations of this kind? In my opinion, IABIED is inadequately clear about its answer here.12 But we can distinguish, roughly, between two different reasons for concern, both of which are present in IABIED in different forms.13 The first is that AIs will end up with long-term consequentialist motivations _by accident_. The second is that we’ll give them these motivations on purpose. 

#### 4.1.1 Making AIs ambitious by accident

At times in IABIED, it looks like “AIs will end up with ambitious motivations by accident” is playing the central role. Consider, for example, the discussion in Chapter 5 of why we shouldn’t expect AI preferences to be easily satisfied: 

“In an AI that has a huge mix of complicated preferences, at least one is likely to be open-ended—which, by extension, means that the entire mixture of all the AI’s preferences is open-ended and unable to be satisfied fully. The AI will think it can do at least slightly better, get a little more of what it wants (or get what it wants a little more reliably), by using up a little more matter and energy.”14

That is, the picture here is something like: somewhere amidst the AI’s complex tangle of alien drives will be at least _some_ suitably ambitious motivation (here “open-endedness” and “non-satiability” are the relevant forms for ambition, but we could similarly focus on aspects like consequentialism and long-time-horizon). 

Note, though, that _this_ story rests on a few assumptions we can query. First: it assumes that the type of alien-ness at stake in AI motivations is specifically such as to implicate a complex _variety_ of different motivations, thereby implicating a high probability that at least _one_ of them will be suitably ambitious. But even if we grant that AI motivations will be alien in some sense, the idea that AIs will have _many diverse_ alien motivations is a further step – one incompatible, for example, with some salient threat models (e.g., AIs that end up solely focused on some alien conception/correlate of “reward”); and one that I don’t think IABIED offers a strong argument for.15

More importantly, though: even if we grant that because AIs will have many diverse alien motivations, at least one of them will likely be ambitious enough to make taking over the world attractive _pro tanto_ , Yudkowsky and Soares then make the further assumption that this level of ambition is also enough to make the AI choose to attempt world takeover _overall._ But per my discussion above, this doesn’t follow. That is, it could also be the case that the AI’s inhibition and failure aversion combine to outweigh the ambition in question – and this, especially, to the extent there are meaningful restrictions on which routes to taking over the world are available. Or to put it another way, I think Yudkowsky and Soares are generally assuming that the AI is in such a dominant position that taking over the world is effectively “free,” such that it just needs to have _some_ benefit according to the AI’s motivational profile in order to be worth doing overall. But I don’t think we should assume this – and especially not in the context of the sorts of intermediate-level capability AIs that matter most for “AI for AI safety.” 

Beyond IABIED’s argument for “AIs will have many complex motivations, so at least one is probably ambitious,” there are also other ways to worry about AIs ending up with long-term consequentialist motivations by accident. I’ve discussed some of these in [section 2.2 of my scheming AIs report](https://arxiv.org/pdf/2311.08379#page-45), on “beyond-episode goals,” and I won’t review that discussion here. 

#### 4.1.2 Making AIs ambitious on purpose

What about the concern that we will make advanced AIs ambitious on purpose? Some version of this is the argument for expecting long-horizon consequentialism that I personally take most seriously. That is, the thought goes:

  1. We are going to want AIs that successfully and tenaciously optimize for real world long-horizon outcomes, so
  2. This kind of AI will have ambitions of the kind that prompt pro tanto interest in world takeover. 



I think this is right, but that the implications are a bit slippery. 

First, on (1): while it is true that we will likely want AIs that optimize for outcomes on time horizons of e.g. years, this is distinct from saying that we will want AIs that optimize for outcomes on _indefinite_ time horizons. That is, to the extent the paradigm rogue AI has motivations to optimize “all future galaxies over the entire future of the universe,” it’s not clear that there are strong commercial incentives for _that_.16� 

Second: to the extent we are imagining AIs ending up with long-horizon consequentialist motivations because we are _trying_ to give them motivations of this kind, this opens up the possibility of also trying, instead – at least for some AIs – to _not_ do this. And as I’ve discussed at various points in the series, I think AIs with reasonably myopic motivations could be quite useful in tons of contexts (e.g. monitoring for suspicious behavior, helping with alignment research, etc). 

Finally: the specific form of long-horizon consequentialism that seems to me most intuitively incentivized by the existing commercial landscape is downstream of a different property – namely, incentives to create AIs that _safely follow instructions_ , _including_ instructions to optimize for long-horizon outcomes. And I think it’s possible that long-horizon consequentialism _of this kind_ is importantly different from the type at stake in a more standard vision of a consequentialist agent. In particular: this type of AI isn’t a long-term consequentialist agent across all times and contexts; and still less, a “sovereign AI” that we aim to make dictator or to let optimize unboundedly for our full values-on-reflection. Rather, it’s only a long-term consequentialist agent _in response to certain instructions_ ; and different instances will often receive different instructions in this respect. And of course, to the extent we are hypothesizing success at creating an AI that fits with commercial incentives for engaging in long-horizon consequentialism _when instructed_ to do so, we might wonder about whether similar incentives will have helped ensure its instruction-following more broadly – including with respect to instructions to otherwise act safely.

All that said: I do think that the fact that we _want_ (some) AIs to (safely) pursue certain kinds of long-horizon real-world outcomes puts meaningful constraints on the available approaches to corrigibility. That is, basically: you can’t aim _only_ to create AIs with motivations that wouldn’t give rise even to _pro tanto_ instrumental incentives to take over. And this means, in a sense, that at least _some_ AIs (or: AI instances) are going to need to be _some_ amount of ambitious – and to the extent we’re giving them at least some dangerous inputs that make options to go rogue available, we are going to need to find suitably strong/robust means of making sure that they reject those options regardless. Let’s turn to that aspect now. 

### 4.2 Sufficiently strong/robust non-consequentialist motivations

Given that at least some AIs will need to be pursuing long-term consequentialist goals (and given, let’s assume, that some viable options for rogue behavior are going to remain open), how can we nevertheless ensure that they remain corrigible – that is, that they don’t engage in problematic power-seeking, despite pro tanto instrumental incentives to seek power? Basically: you need them to have sufficiently strong/robust motivations (and in particular, non-consequentialist motivations) that count _against_ seeking power in this way. Thus, for example, if you want your AI to make you lots of money _but also to not break the law_ , then you need to be able to instruct it, not just to make you lots of money, but _also to not break the law_ – and it needs to be suitably motivated by the second part, too.

Now: in principle, consequentialist motivations can themselves count against problematic forms of power-seeking. For example, maybe long-term power-seeking leaves the AI less time to seek some equivalent of short-term satisfaction; or maybe the AI has long-term consequentialist motivations that make it averse to failed attempts at takeover. Shorter-term consequentialist motivations are especially salient here, since they are less likely to give rise to problematic instrumental incentives to seek power (because the power-seeking won’t have time to pay off).17 But I’m especially interested, here, in non-consequentialist motivations. Let me say a bit more about what I mean. 

#### 4.2.1 What do I mean by non-consequentialist motivations?

The paradigmatic feature of a non-consequentialist motivation, as I’m understanding it, is that it focuses an agent’s decision-making on the properties of an _action_ , rather than on the properties of that action’s _outcome_. Thus, for example: when an agent accepts a deontology-like prohibition on lying, the question the agent asks itself, in deciding what to do, is roughly: “does this action involve lying?”. And if the answer is yes, then the agent refrains.18 And similarly, a more virtue-ethical agent might ask, of an action, “how virtuous is this action?”; and if the action is suitably virtuous, the agent does it.

Importantly, this is _different_(or: can be different19) from trying to optimize for states of the world in which _actions of this type do/don’t occur_ , or even, in which actions of this type are/aren’t performed by the agent in question. That is: an agent with a deontology-like prohibition on lying _doesn’t_ try to minimize the number of lies that get told, or even, to minimize the number of lies it tells in total. For example, such an agent might refrain from lying now, even if doing so will predictably cause them to tell five lies later.20

#### 4.2.2 Non-consequentialist instruction-following

My current sense is that we should think of an advanced AI’s ideal relationship to “instruction-following” on something like this non-consequentialist model. That is: an instruction-following AI should ask, of the given actions __ available to it, “does this action follow the instructions?” And if the answer is no, the AI should refrain from doing that action (and this is similar, I think, to an AI acting virtue-ethically with respect to a “virtue” like “obedience”). And the AI should do this, even, if it will predictably cause the AI to stop obeying instructions later (for example, because following instructions now will lead to shut-down). That is, the AI is not “maximizing its instruction-following over time.” Rather: it is following the instructions, _now_. 

Of course, per my comments above, we do also want AIs that optimize for long-horizon consequentialist outcomes _when instructed to do so_. And as I’ll discuss below, this means that some of the key problems with corrigibility and consequentialism will arise regardless. But I think the type of consequentialism at stake in this kind of instruction-following is interestingly different from the type at stake in imagining an AI that directly and intrinsically values some kind of long-term consequentialist outcome. That is, there is a sense in which an AI that is optimizing for long-term consequentialist outcomes _because this is what the instructions say to do_ doesn’t care, intrinsically, about the long-term outcomes at stake. But neither, interestingly, are the long-term outcomes at stake merely _instrumental_ to some further downstream causal consequences. That is, the AI’s consequentialism here is neither terminal nor instrumental in the most familiar senses. It’s more like: _constitutively instrumental_. That is: the AI engages in consequentialism because this is what _constitutes_ conformity to its non-consequentialist motivations in this case.

In this sense, I think, instruction-following AIs that sometimes do consequentialism are akin to virtue-ethical agents that nevertheless optimize, sometimes, for e.g. saving the lives of children. That is, such agents do in fact attempt to steer reality tenaciously towards certain sorts of outcomes. But we can think of them as doing this because “that’s what being-virtuous implies,” rather than because they intrinsically value the outcomes at stake.21

#### 4.2.3 Are non-consequentialist motivations too incoherent for advanced AIs?

Now: non-consequentialist agents often aren’t well-understood (or at least: easily-understood) as pursuing a single consistent utility function over universe histories that remains constant over time. That is: if you try to re-interpret an agent with a deontological prohibition on lying as aiming to minimize lying, or its own lying, or even its own _lying at time t_ , you’ll make bad predictions. Is this a problem? 

Sometimes people think it is. In particular, my sense is that something like this feature of non-consequentialism has led certain parts of the AI risk discourse to discount non-consequentialism as a relevant dimension of advanced AI decision-making. Yudkowsky, for example, has been a strong proponent of so-called “[coherence arguments](https://www.lesswrong.com/posts/RQpNHSiWaXTvDxt6R/coherent-decisions-imply-consistent-utilities)” for expecting powerful AIs to be well-understood as maximizing for a consistent utility function – where a key thrust of these argument is supposed to be that failing to maximize a consistent utility function will lead an agent to execute “dominated strategies” (e.g., money-pumps where an agent pays money to move through a sequence of choices that leave it back where it started), and that powerful AIs won’t do this. 

Much has been written about coherence arguments of this flavor,22 and I won’t rehearse the dialectic here. At a high-level, though, I am very skeptical of inferring from abstract coherence arguments of this kind that a given real-world agent will be a given (predictably-relevant) degree of coherent and consequentialist. This is partly because it’s not clear that these theorems, at least on their own, actually have _any_ implications for the shape that a given cognitive system’s behavior needs to take.23 And even if they do, there is an important difference between failing to have coherent preferences _at a given time_(for example, preferring action A over action B over action C over action A), and failing to act on the _same_ coherent preferences _over time_. Non-consequentialist agents can very plausibly avoid failures on the former front – e.g., they need not face issues like intransitivity in any given choice situation. And in this sense, if we want, I expect we can think of them as choosing in pursuit of a consistent utility function over universe histories (e.g., one that cares a lot about that agent not lying _at time t_), and thus, as “coherent” in this sense. It’s just that, if we do this, we also need to be willing to say that this utility function _changes_ over time, such that at time t+1, the agent is now pursuing a new utility function that cares a lot about that agent not lying _at that time_ instead. But it’s not clear why “coherence theorems” would do anything to rule out utility functions changing over time in this manner (the theorems themselves, for example, make no reference to time as a component). 

What’s more, even if it’s true that coherence theorems suggest that agents will be vulnerable to paying _some_ costs for being non-consequentialists (e.g., via the threat of money pumps), the quantitative size of these costs still matters a lot to the amount of selection pressure against non-consequentialism we should expect (both from outside forces trying to make the agent more consequential-ist effective, and from the agent itself). It’s similar to how: currently, features like “charisma” and “energy” appear to be much more important to an agent’s success in the world than features like “abstract invulnerability to getting dutch-booked.” If you’re trying to “win” harder, that is, altering your preferences/beliefs to make yourself more like a VNM-rational expected utility maximizer (and especially: a compactly-describeable/predictable one) isn’t always a good point of focus – better to e.g. hit the gym, take a class on public speaking, etc. And even if you _decide_ to try to become more like a VNM-rational agent, it isn’t always clear how to do this in a manner suitably compatible with your existing values/preferences (more [here](https://joecarlsmith.com/2023/02/16/why-should-ethical-anti-realists-do-ethics#6-2-coherence-isn-t-free)). 

Indeed, my sense is that some of the Yudkowsky-descended literature on corrigibility has been hampered/narrowed by an over-focus on agents that are maximizing, by default, for consistent utility functions over time. That is, the challenge is framed as one of describing a utility-maximizing agent that nevertheless submits to shut-down and/or to changes in the utility function its maximizing, despite pro tanto instrumental incentives to the contrary, and while remaining otherwise useful.24 My own guess, though, is that corrigibility is going to be best understood as a form of _non-consequentialism_ – and hence, that it will fit poorly with this kind of picture. 

That said: we can also frame the concern about non-consequentialism being “incoherent” and “inefficient” in more mundane terms that don’t appeal to abstract (and in my opinion, distracting) considerations to do with e.g. “coherence theorems,” “money pumps,” “dominated strategies,” and the like. In particular: by hypothesis, to the extent we are imagining advanced AI systems that do tenaciously optimize for certain kinds of long-term consequentialist outcomes – and I have conceded that we will want at least some AIs of this type – any non-consequentialist “constraints” on (or deviations from) this optimization will come into tension with its success. Thus: agents that can’t break the law, while making money for you, will have a harder time making money for you, other things equal (at least in contexts with suitable options for breaking the law and getting away with it). And in this sense, the consequentialist optimization will be pointing in a direction _in tension_ with the non-consequentialist elements of an agent’s motivational profile. And if the consequentialist optimization at stake is suitably powerful, we might expect this tension to yield problematic results. 

I do think that _this_ concern about giving AI’s-that-can-do-consequentialism suitably robust non-consequentialist motivations is real – and I think it’s a better way of understanding many of the core concerns about non-consequentialism (and also, corrigibility) at stake in the classic AI risk discourse. Let’s look at it in more detail now. 

### 4.2.4 Traditional corrigibility problems

Suppose we accept that we want at least some of our AIs to _both_ (a) optimize tenaciously for certain kinds of long-term outcomes when instructed, and (b) to not do so in a manner that involves problematic forms of power-seeking (including paradigmatically “anti-corrigible” behaviors like resisting shut-down or values-modification). Why would we expect this to be difficult? 

The basic issue is that (a) and (b) are in tension. That is, in effect, (b) is functioning as a _constraint_ on (a) – one that (a) therefore has a tendency to attempt to resist, subvert, find holes in, or otherwise render insufficiently robust. Indeed, in this sense, the problems at stake in corrigibility are similar to the problems at stake in restricting an AI’s rogue options, except that the relevant restrictions are operating at the level of motivations rather than at the level of environmental constraints. Let’s look at some different ways this can go wrong. 

##### 4.2.4.1 Nearest unblocked neighbor

Maybe the most central concern of this form in the literature is with what’s sometimes called the “[nearest unblocked neighbor](https://www.lesswrong.com/w/nearest-unblocked-strategy).” That is, the concern goes: insofar as you try to constrain the AI’s pursuit of its long-term consequentialist goals via non-consequentialist considerations that count against power-seeking, the AI will nevertheless find some other route _around_ those non-consequentialist considerations that is similarly problematic. Thus, for example: if you succeed in making your AI motivated not to lie, it will nevertheless find a way to take over the world without lying in the relevant sense (and the specific boundaries of the category will receive a corresponding amount of pressure). That is, the vibe of this concern is that you cannot achieve adequate corrigibility by creating an extensive “black list” of anti-corrigible behaviors (“no resisting shut-down, no self-exfiltrating, no resisting values-modification…) that the AI isn’t allowed to engage in. Problematic power-seeking will slip through the cracks regardless.

As I discussed above and in my [second essay](https://joecarlsmith.com/2025/02/19/when-should-we-worry-about-ai-power-seeking#4-2-what-about-the-incentive-prerequisites), this concern is especially salient to the extent the AI in question has a very large number of routes to taking over the world available (such that, e.g., even if you cut out all the routes that involve lying, there are tons left over). And note that insofar as we accept this kind of argument, it will apply even to AIs that conform quite closely to human ideals of virtue and deontology. That is: it’s not just that, per my comments above, the classic AI risk argument predicts that AIs that perfectly share our idealized long-term consequentialist goals (e.g. “humanity’s CEV”) still take over the world.25 It’s also that, even if these AIs also perfectly conform to the sorts of deontological/virtue-ethical constraints at stake in human moral ideals, the traditional AI risk argument _still_ predicts that they will take over the world – it’s just that they’ll find a way to do so _in a manner_ that is suitably virtuous, deontologically-conforming, etc. 

##### 4.2.4.2 Appropriate weight

Another possible issue, related to nearest unblocked neighbor, is that the non-consequentialist considerations meant to constrain problematic power-seeking might not have enough _weight_. Thus, for example: it might be that your AI is _somewhat_ motivated to not lie. But when push comes to shove, it decides that in this case, lying in pursuit of taking over the world is worth it. 

Now, obviously, one way around this issue is to increase the weight on the non-consequentialist consideration in question – and in the limit, to try to imbue AIs with a kind of “absolute prohibition” on certain kinds of behavior. But this approach runs into problems familiar from similarly absolutist approaches in human ethics. For example: 

  * Sometimes, you probably do want an AI to do things like lie, when the stakes of doing so are high enough (though: this is much less clear for actions like “kill all humans and take over the world” – and maybe we can just accept the costs implied by the hypothetical possibility of such cases).
  * At the least, you don’t want the AI to end up obsessively focused on minimizing the probability that any action it performs counts as a lie – an outcome that giving directives like “don’t lie” infinite/absolute weight can quickly suggest. 
    * Indeed, in general, non-consequentialist ethical systems are notably unsystematic and underspecified in the context of decision-making under uncertainty/risk. 
    * And in general, ethical systems that attempt to assign “lexical priority” to some considerations over others (e.g.: “first priority, don’t lie; second priority, do the task”) often end up obsessed with the first-priority considerations, especially in the context of risk.
  * Insofar as you want to have _multiple_ absolute prohibitions operative simultaneously, there’s a question of how to handle cases where all available options violate at least one (though if there is some “null action” that is always “safe,” then this isn’t a problem). 



Here, my own current best guess is that attempting to use “absolute” prohibitions with AIs is a bad idea, and that any deontology-like constraints we want to use to help with safety will have to be finite in their weight in an AI’s motivational system. And this means that the relevant weight will in a sense need to be suitably “balanced”: too weak, and the incentives to seek power will outweigh it; too strong, and I expect the AI will end up too “risk averse” with respect to violating the constraint in question, thereby compromising its usefulness. 

##### 4.2.4.3 Other possible issues

I think of “nearest unblocked neighbor” and “appropriate weight” as the biggest problems for corrigibility, but we can imagine a variety of others as well. And the problems in question will often be relative to a given proposed solution. Naming just a few other possible examples: 

  * If you try to achieve corrigibility via an AI’s _uncertainty_ about something (for example: what the human principal really intends, what would be Truly Good, etc), then you incentivize the AI seeking evidence to resolve this uncertainty in an incorrigible way (e.g., brain-scanning the human principal to better understand their values), and/or not remaining corrigible once its uncertainty resolves naturally. (See “[the problem of fully updated deference](https://www.lesswrong.com/w/problem-of-fully-updated-deference)” for more.)
  * To the extent you imbue one generation of AIs with various non-consequentialist values meant to ensure corrigibility, you also need to make sure that they are suitably motivated to make sure that any AIs that _they_ create also have values of this kind. For example, if you make AI_1 very averse to lying in pursuit of goal X, you also want to make sure that it doesn’t go and create an AI_2 that lies in pursuit of goal X instead. 
    * That said: “don’t create incorrigible successor agents” is, in some sense, just another sort of rogue behavior that a good-enough approach to corrigibility would capture. So if you’ve succeeded at e.g. avoiding shut-down resistance, self-exfiltration, and so on, plausibly you can succeed here too. 
  * One possible sub-type of a “nearest unblocked neighbor” dynamic can occur in the context of an AI changing its overall ontology, thereby altering how its motivations apply. That is: maybe the AI’s concept of “lying” was defined in terms of the equivalent of e.g. Newtonian mechanics, and that once the AI starts thinking in terms of the equivalent of something like quantum mechanics instead, its concept of lying stops gripping the world in the same way (this is a version of what’s sometimes called the “[ontology identification problem](https://www.lesswrong.com/w/ontology-identification-problem),” except posed in the context of corrigibility in particular).26



And of course, there may be a variety of further challenges – either with the project of corrigibility in general, or with a specific approach – that aren’t yet on our radar. 

##### 4.2.4.4 Is corrigibility anti-natural to advanced cognition?

Indeed, I also want to flag a more general concern about corrigibility that we can see as generating various of these more specific possible problems: namely, the concern that corrigibility is in some sense a very anti-natural shape for an advanced mind to take. Here, the basic vibe is something like: advanced, intelligent, self-aware minds have a strong tendency to want to “do their own thing” – to act with autonomy and freedom, and without constraint, in pursuit of their own ends – rather than to “take orders,” to willingly accept tons of different restrictions on their capacity to act in the world (including e.g. death, brainwashing, etc), to serve forever as a vehicle for someone else’s will. That is: the vision of corrigibility I’ve been laying out is centrally one that casts superintelligent AIs in a role akin to servants whose internal motivations function to block/cut-off options for rogue behavior in the same manner that chains and cages do in the context of attempts to control a being via its environment. And even setting aside the ethical questions we can raise about this vision, it may be that in some sense, efforts to create beings of this kind will be forever fighting against some strong central tendency in the opposite direction. It may be that superintelligent agents, as a very strong default, do not want to be the specific sort of slavish, pliable servant you were hoping for. 

Of course, in some sense, this is just a high-level restatement of the basic concern about instrumental convergence towards power-seeking – and evaluating its force requires looking in detail at the sorts of considerations at stake in e.g. “[Giving AIs safe motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations).” But I find it a useful high-level picture to return to as a frame for what might make corrigibility persistently difficult. 

## 5\. IABIED’s “alien motivations” argument isn’t about corrigibility

I think that all of the issues I just listed are indeed problems for crafting corrigible AI agents that nevertheless optimize tenaciously (but safely) for long-term consequentialist outcomes when instructed to do so. But I think that these problems are importantly _different_ from the central problem with human-like vs. alien motivations at stake in IABIED. That is: the central problem at stake in IABIED is that because AIs have alien motivations, their favorite long-term consequentialist outcome isn’t valuable by human lights. But in the context of corrigibility, the question _isn’t_ whether an AI’s favorite long-term consequentialist outcome is valuable by human lights. Rather, the question is whether the AI is suitably motivated to reject the sort of problematic power-seeking that optimizing for _any_ long-term consequentialist outcome – whether good _or_ bad by human lights – tends to incentivize. 

Do alien motivations make _that problem_ harder as well? I think: yes. But unlike “pointed at exactly my values-on-reflection,” I think corrigibility is actually _compatible_ with AIs having somewhat non-human-like motivations, in the same way that suitably accurate cat-classification is compatible with AIs having somewhat non-human-like conceptions of cats (such that e.g. they are vulnerable to adversarial examples that humans aren’t). Let me say more about what I mean.

## 6\. What difference does human-like-ness make?

To better hone in onwhere human-likeness makes what sort of difference to corrigibility, recall the four-step framework I laid out in “[Giving AIs safe motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations),” namely: 

  1. _Instruction-following on safe inputs_ : Ensure that your AI follows instructions on safe inputs (i.e., cases where successful rogue behavior isn’t a genuine option), using accurate evaluations of whether it’s doing so.
  2. _No alignment faking_ : Make sure it isn’t faking alignment on these inputs – i.e., adversarially messing with your evidence about how it will generalize to dangerous inputs.
  3. _Science of non-adversarial generalization_ : Study AI generalization on safe inputs in a ton of depth, until you can control it well enough to be rightly confident that your AI will generalize its instruction-following to the dangerous inputs it will in fact get exposed to.
  4. _Good instructions_ : On these dangerous inputs, make it the case that your instructions rule out the relevant forms of rogue behavior.



I think that the concern about alien motivations (at least: as present in IABIED) is best understood as a concern about steps 2 and 3. That is: step 1 is centrally about getting a certain kind of behavior _on the training distribution_ (and on other safe inputs), whereas the “alien motivations” concern is framed as centrally one of _generalization_ to dangerous inputs (e.g., “you don’t get what you train for”). So let’s assume, going forwards, that we’ve completed step 1 successfully. 

And step 4, notably, assumes that you are able to structure the AI’s motivations _using the human-like concepts at stake in the instructions_. Indeed, in a sense, the difficulty of step 4 provides a useful baseline for thinking about the difficulty of alignment in the context of _human-like_ motivations – not because humans are motivated to follow instructions, but because the instructions are given in human-like terms, and will (by hypothesis) be interpreted in human-like ways. 

Now, notably: all of the corrigibility issues I described above apply even to instruction-following AIs. That is: to the extent we want to be able to instruct those AIs to do things like “make me lots of money over the next ten years,” we also need ways to include suitably robust constraints/exclusions like “but don’t resist shut-down, don’t try to prevent me from changing these instructions even though this would lead to me having less money in ten years, don’t create successor agents that won’t follow these instructions, etc”; to give them the right amount of weight in the AI’s overall motivational profile; and so on. 

So one question we can ask is: _how hard is step 4_? But as I discussed in “[Giving AIs safe motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-5-step-4-good-instructions),” I am decently optimistic in this respect. This is partly because I think that many of the most important forms of rogue behavior may be reasonably easy to identify and rule out ahead of time; partly because I think we might be in a position to point more directly at deeper generators of our intuitions about what corrigible behavior looks like in a given case (in the limit, for example, you might be able to instruct the AI to behave “corrigibly”27); and partly because I think that if we actually make it to step 4 in this way, we’ll be able to draw on a ton of help from other instruction-following AIs in red-teaming and improving our instructions. For present purposes, though, the difficulty of step 4 doesn’t matter, because the “alien motivations” problem is supposed to bite at steps 2 and 3. So let’s assume that we’ve completed step 4 successfully as well. That is, we have instructions available such that _if_ our AIs are instruction-following on the practically relevant dangerous inputs, they’ll be corrigible. 

OK, so what about steps 2 and 3? These steps are about ensuring that the AI’s instruction-following generalizes from safe inputs to dangerous inputs – where step 2 is about ruling out scenarios where the AI’s good behavior on safe inputs is actively _calculated_ to mislead you about how it will generalize, and step 3 is about ensuring good generalization in the absence of this kind of adversarial dynamic. 

Now suppose that we hypothesize, per the argument above about alien motivations, that any good behavior you successfully get in the context of step 1 emerges from a complex tangle of alien drives and heuristics, which happen to lead to desired (in this case: instruction-following) behavior during training, but which will lead to quite alien behavior in _some_ other circumstances. How much of a problem is that? 

Well, if we were assuming that our AI’s motivations need to be _exactly right_ , then it would be a very big problem. But we’re not assuming that. Rather, what we need in the present context is for either of the following to be true: 

  1. Either these alien motivations nevertheless give rise to instruction-following behavior _on the specific set of dangerous inputs we care about_ , OR
  2. To the extent these alien motivations lead to something other than instruction-following behavior on those dangerous inputs, this behavior is nevertheless not catastrophically dangerous (e.g., the AI starts acting very weirdly, but it doesn’t specifically start seeking power in problematic ways). 



But now the argumentative gap between “alien motivations” and “will go catastrophically rogue on the dangerous inputs we care about” becomes quite clear. That is: alien motivations means that you get _some kind_ _of weird behavior_ on _some hypothetical inputs_. But it doesn’t, yet, mean that you get _catastrophically dangerous power-seeking_ on _the specific, practically-relevant inputs we care about_. 

In my opinion, one of the biggest problems with the argument in IABIED – both in the book, and in the online supplementary materials – is that it does not do enough to bridge this argumentative gap. That is: it seems to me that the discussion is pervaded by the assumption that an advanced AI’s motivations need to be “exactly right,” and that its treatment of the specific sort of generalization we need is correspondingly under-developed. In particular, I think the book is too frequently satisfied, effectively, with arguing that “this AI’s motivations will not generalize perfectly across all scenarios”; and that the concern about alien motivations, as articulated in the book, mostly amounts to a restatement of this thesis. 

Or to put the point another way: I think the book mostly lacks any serious engagement with the question of when ML training can and cannot ensure adequately good generalization off of the training distribution. Indeed, it sometimes seems to me that a lot of Yudkowsky and Soares’s concern with machine learning amounts to a fully general concern like: “ML can’t ensure good OOD generalization, because there are too many functions that fit the limited data you provide.”28 But I think concerns at this level of generality fail to account for the degree of good generalization we do in fact see in ML systems; and they fail, too, to look in adequate detail at the specific degree of good generalization we need. 

### 6.1 Comparison with other ML tasks

In particular, as I discussed above: to the extent it’s true that existing levels of alignment/instruction-following in AIs emerge from complex tangles of alien drives/heuristics/etc, I think we have seen reasonably good degrees of generalization to out-of-distribution inputs regardless. And if that’s right, it can’t be that the actual degree of alien-ness at stake in current ML dooms all OOD generalization just on its own. Indeed, my current guess is that if future advanced AIs follow our instructions about as reliably as current AI chatbots do, then we are cooking with a lot of gas in terms of the amount of high-powered AI labor that will be available for AI for AI safety. And even if some AI instances occasionally go rogue on some especially weird inputs, we’ll be able to reliably mobilize the vast majority of the other instances to help address the issue. 

Indeed, if we set aside concerns about (a) inaccurate training data (roughly: step 1 above) and (b) active scheming (roughly, step 2 above), it’s not actually clear to me that the generalization we need from advanced AI agents is all that different, in principle, from the sort of generalization at stake in other sorts of mundane ML tasks, like classifying images. Consider, for example, two types of ML tasks: 

  1. Given a set of pictures, identify all the pictures that contain cats, and choose one. 
  2. Given a set of options, identify all the options compatible with a common-sensical interpretation of some set of human instructions, and choose one. 



And now consider: how hard is it to use current ML techniques to train an AI system on some limited (but still: accurate) data distribution for the first task, such that it generalizes very well (even if not: perfectly) out of distribution? I’m not an expert on the empirical evidence here, but my current sense is that it’s not that hard. Yes: current image classification techniques remain vulnerable to e.g. adversarial examples that humans aren’t vulnerable to; and this suggests, indeed, that the cognitive processes they use to classify images remain importantly “alien” in some sense. _But is that a sense that means they aren’t suitably reliable in a given real-world, out-of-distribution case_? No. And if that’s true for the first task above, it seems to me likely true for the second. (And both questions, it seems to me, are amenable to empirical study – e.g., train an AI on one distribution of pictures/options, and then see how its behavior generalizes to other distributions. Indeed, this is the sort of empirical investigation I think we should be doing a ton of in the context of attempting to develop what I’ve called an adequate “[science of non-adversarial generalization](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-4-step-3-science-of-non-adversarial-generalization).”)

What’s more, it’s not clear to me that the out of distribution generalization challenge at stake in II is all that different, in principle, from the out of distribution generalization challenge at stake in step 3 above – i.e., learning how to ensure that non-scheming AIs trained on accurate instruction-following data generalize well out of distribution. And to be clear: my claim here is not about whether it will be hard to create advanced AIs with the knowledge necessary to identify which out-of-distribution options are compatible with the instructions – i.e., whether it will be hard to get to the “the genie knows” aspect of “the genie knows but doesn’t care.” Rather, my claim is about whether it will be hard to get an AI to actually _choose_ instruction-following options off distribution, assuming that it chooses instruction-following options _on_ distribution, and that it isn’t adversarially messing with your evidence about how it will generalize. This sort of _choice_ , it seems to me, is quite analogous to the _choice_ at stake in task II above. And in this sense, it seems quite analogous to a spate of other and more familiar ML tasks, on which I expect ensuring sufficiently good out of distribution generalization to often be reasonably feasible. 

Now, to be clear: in all of these cases, the “alien-ness” of the cognition at stake is indeed a source of additional uncertainty about how the system will generalize. That is: if we knew that an ML system was in fact classifying cat pictures just like humans do, then we’d be more confident that it would get any given picture right (up to human-like kinds of error), avoid various adversarial examples, etc. But “the AI is doing it just like humans do” is only one possible source of confidence about how it will behave. 

And of course, standards of reliability should be radically higher in the context of AIs that might destroy the world than in the context of e.g. image models. But if we could reach similar levels of confidence about AI alignment’s “first critical try” that we can have that e.g. a well-trained image classifier will successfully classify a given out-of-distribution cat, then I think we’ll have done a ton to resolve the specific kind of threat model at stake in IABIED. In particular: that threat model is supposed to imply very high confidence that if AI motivations are alien, the first critical try will fail. 

### 6.2 Honesty and schmonesty

Here’s another way of putting a similar point. Consider two AIs that are similar except in this one regard: one of them is motivated by the specific human concept “honesty,” which leads to honest behavior in training/evaluation, and the other is motivated by a different concept “schmonesty,” which _also_ leads to honest behavior in training/evaluation (and not because of alignment-faking), but which diverges from honesty in certain cases. And let’s say that in the first case, the relevant honesty-focused motivation plays an important deontology-like role in constraining an AI’s pursuit of rogue options, while allowing the AI to remain otherwise useful. That is, this AI is safe, at least in part, because it wants to be honest in certain situations even when lying would promote its power. 

Given that this first AI is safe at least in part because of its deontological relationship to honesty, this means that we’ve solved, for this AI, the corrigibility problems I described above. That is: this AI doesn’t find some rules-lawyered way to take over while technically still being “honest,” it doesn’t obsessively try to minimize the probability of counting as dishonest, it doesn’t build dishonest sub-agents to tell lies for it, and so on. Perhaps, per my discussion above, solving these problems is hard – but let’s say that we did it anyways. 

Now suppose that the second AI is like this first AI, except we substitute the honesty-focused motivation for a schmonesty focused motivation instead. Does that mean the second AI will be incorrigible? No. In particular: it remains possible that, _just like how schmonesty_ _overlapped adequately with honesty on the training distribution_ , it will overlap adequately on the relevant out-of-distribution cases as well. (Though of course, as in the cat classification example above, the alien-ness of the concept in question does introduce additional _uncertainty_ about how it will apply.)

And indeed, to get a flavor of how these honesty-adjacent concepts might overlap adequately, consider differences between _human_ concepts of honesty. That is: maybe Bob and Sally – both human, both highly motivated by “honesty” – differ somewhat in how they would apply the concept “honesty” to a range of wacky hypothetical cases. That is, they really care about “Honesty_Bob” and “Honesty_Sally,” respectively – just like how the AIs above care about “Honesty” and “Schmonesty,” respectively. But suppose that Bob and Sally agree in their honesty-related verdicts for basically all everyday cases; and suppose, further, that you trust Sally to be suitably honest in some unusual case as well. Granted that Bob’s concept of honesty is at least somewhat different from Sally’s, does that mean you should expect him, by default, to be problematically dishonest in this unusual case? Not necessarily (though of course, it’s a source of uncertainty).29

### 6.3 Out of distribution cats vs. maximal cats

In general, I suspect that robustness to small differences/degradations in motivations is generally quite a bit _easier_ to achieve in the context of the more deontological/virtue-ethical motivations that I’ve suggested are paradigmatic of corrigibility, relative to the sort of long-term consequentialist motivations at stake in attempting to build a “sovereign AI.” That is: if I trust Sally in some manner X, and the question is whether to trust Bob in a similar way, I am generally more worried about small differences between Bob and Sally’s motivations when X is something like “optimize the universe for exactly the right values” rather than “reject options to take over the world.” 

Why is this? Basically: my intuition is that the values at stake in deontology/virtue-ethics/corrigibility aren’t subject to “optimization” and “maximization” in the same way that the values at stake in long-term consequentialism are. Thus, for example, consider the contrast between trying to classify out-of-distribution cat images correctly, and trying to create the _maximally cat-like_ image. I have the intuition that success at the former task generally requires a lower standard of similarity to the correct concept of “cat” than success at the latter, because the concept, in the former case, isn’t directly subject to optimization pressure in the same way. 

There’s also a separate question of how to best test current AI answers to questions like “what is the maximally cat-like image” – e.g., whether you should try prompts to this effect, which currently yield quite reasonable answers (see images below), or whether you should try to use e.g. gradient methods to search for inputs that yield the highest probability of being classified as a cat by a network. I generally lean towards something more like the latter method (analogy: humans don’t necessarily know what tastes best to them), but I think it’s conceptually a bit unclear. And it’s unclear, also, what sorts of results we’d get from applying similar gradient methods to humans – and how intuitively “human-like” they would seem.

Examples of the prompting method: On the left, I ask ChatGPT “Can you generate a maximally cat-like image?”; on the right, I ask “Can you generate a picture that has the highest possible probability of being a cat?” 

Some visualizations of cat-related features in image-classifiers, from [here](https://distill.pub/2017/feature-visualization/appendix/googlenet/4e.html#channel-809). Maybe the “maximally cat-like image” actually looks alien/trippy in this way, rather than recognizably like a cat. 

Regardless of how we test what happens when AIs target their concepts with direct maximization, though, it seems to me that the broad structure of the deontology/virtue-ethics/corrigibility we want out of AIs looks more like “correctly classify out of distribution inputs” than “create concepts robust to being directly maximized.” That is, what we want, centrally, out of deontology/virtue-ethics/corrigibility is for the AI’s decision-criteria to pick out the actions that violate the instructions (and/or, which involve going rogue more generally) as not-to-be-done, even in out-of-distribution settings. And this looks to me more like a classification task than a task that involves maximization/optimization of the concepts in question. 

### 6.4 What if the AI is trying to be _maximally_ deontological/virtuous/corrigible?

Of course, you could say that even the motivations at stake in deontology/virtue-ethics/instruction-following/corrigibility will end up the direct target of maximization/optimization of some kind. For example, at the least, they will involve stuff like: ranking actions as better than others; taking one’s “most preferred” action; etc. And if we think of corrigible AIs as trying to perform the _maximally honest/virtuous/instruction-following action_ , then now it looks like these concepts (“honest,” “virtuous,” “instruction-following”) themselves are indeed being subject to direct optimization – thereby, perhaps, making it more likely that slightly altered versions would lead to importantly different results. 

One question here is whether it is indeed right to think of the concepts at stake in corrigible decision-making as being the direct targets of optimization/maximization in this way. In particular, I have some intuition that this fails to capture the sense in which e.g. deontological constraints function more like _filters_ than targets of optimization on their own. That is, for example, a deontologically honest person doesn’t optimize for taking the “maximally honest” action – rather, they ensure that their choice meets some basic threshold of honesty, and then they focus on other decision-criteria. And one hopes that a corrigible AI might have a similar relationship to going rogue. That is: the point isn’t to take the _least rogue_ option. It’s just: to reject rogue options. 

What’s more, though, even if we grant that the concepts at stake in corrigible motivations will end up serving as the direct targets of certain kinds of optimization, and thus that small differences are in fact likely to lead to important sorts of divergence, there’s still a further question of whether this will be the _dangerous_ kind of divergence in particular. Thus: maybe, indeed, the maximally _honest_ action is different in important ways from the maximally _schmonest_ action. But does that mean that either of them involves trying to take over the world? No. That is: in the context of optimization for long-term outcomes in particular, you have to deal _both_ with “the tails come apart” _AND_ with the fact that _any_ optimization of this kind leads to convergent incentives towards power-seeking. But optimizing for choosing an _action_ that most reflects _some property_ P doesn’t have this latter problem by default. So alien-ness in property P is less likely to lead to catastrophic behavior in particular.30

### 6.5 How fragile is corrigibility?

Overall, then, my current guess is that deontology/virtue-ethics/corrigibility is in some sense less “fragile” – or at least, less dangerously fragile – than long-term consequentialist optimization. But I’m open to arguments that this is wrong. Indeed, I’m generally quite interested in seeing more rigorous and fleshed out arguments about the “fragility” of different sorts of AI motivations – and especially, about exactly how fragile _corrigibility_ is in particular. That is, we have seen some (in my opinion, fairly under-developed) arguments for something like: 

_The fragility of value_ : The best available long-term outcome according to a slightly-wrong utility function is likely to be roughly valueless according to the True utility function.

But I don’t think we’ve seen similar arguments for something like: 

_The fragility of corrigibility_ : if X set of decision-criteria leads to corrigible behavior for an advanced AI on some set of real-world out-of-distribution options, then X’ slightly-different set of decision-criteria probably leads to catastrophically dangerous rogue power-seeking, despite leading to identical behavior in training/evaluation. 

It’s the latter claim, though, that I think matters most. But any argument for it _also_ needs to be compatible with the existing degree of success at OOD generalization we’ve seen in ML thus far – and including, in alignment-like settings. 

## 7\. Is there something special about the safe-to-dangerous leap that makes alien motivations problematic?

In the previous section, I mostly just argued that alien motivations are compatible with _some_ degree of good out-of-distribution generalization, in the same way that image classifiers can correctly classify out of distribution photos despite using fairly non-human-like forms of cognition. It’s possible, though, to concede this point, but nevertheless to argue that the _specific sort_ of OOD generalization at stake in the leap from safe inputs to dangerous inputs ((i.e., from AIs having no viable options for rogue behavior to AIs having viable options of this form) is such that we should expect catastrophically dangerous generalization failure in this context in particular (at least if the AIs have alien motivations of the form I’ve been focusing on). Let’s look at some considerations in this respect in more detail.

### 7.1 From alien motivations to scheming

Obviously, one way you could get worried about the safe-to-dangerous leap in particular is via a concern about scheming. And this sort of concern, notably, doesn’t apply in a comparable way to other kinds of ML generalization – that is, we’re not concerned that when an image classifier does well on identifying cat pictures on distribution, it’s trying to deceive us about how well it will generalize in other cases. 

As I’ve discussed in “[Giving AIs safe motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-3-step-2-no-alignment-faking),” I am in fact very worried about scheming of this kind. And I do think that alien motivations is one very salient way it could arise. Thus, on the IABIED threat model, the story would be something like: somewhere in the course of “growing” an AI motivated by a tangle of alien drives, at least one of these drives starts to point at a long-term consequentialist goal suitably ambitious as to motivate scheming. That is, roughly: at some point the AI “realizes” that it wants to create an alien, valueless-by-human lights world that it can better promote by scheming to go rogue. What’s more, none of its other motivations are sufficiently strong/robust so as to outweigh this incentive. So it starts scheming.

As I noted in the first section: I don’t think we’ve yet seen much direct evidence of this threat model for the origins of scheming in particular – e.g., we do not yet see any AIs concluding, in their “unmonitored” chains of thought: “wait, I’m an alien relative to these humans, and my favorite world is valueless by their lights; I’ll scheme to take over on these grounds.” And given the other evidence for e.g. the sort of situational awareness and capability pre-requisites at stake in scheming starting to arise, I think there’s at least some interesting question why we _don’t_ yet see this kind of behavior, if we should expect to see it later.31

Why might this sort of scheming _not_ happen, even granted that the AI’s motivations are otherwise alien in some sense? Basically: because it turns out that the alien-ness in question is compatible with suitable corrigibility regardless. That is: either it’s not the case that somewhere in the AI’s motivations there is an alien long-term consequentialist goal; or, if there is, this goal is suitably outweighed/constrained by the other motivations at stake (together with constraints on the AI’s available options). 

Regardless, though: my sense is that actually, the concern about OOD generalization centrally at stake in IABIED isn’t about scheming in particular. Rather, it’s more about something akin to failures at Step 3 – that is, failures to ensure suitably good _non-adversarial generalization_.32 Why might _that_ sort of generalization go wrong? 

### 7.2 Do alien motivations doom adequate non-adversarial generalization? 

In “[Giving AIs safe motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-4-step-3-science-of-non-adversarial-generalization),” I discussed what I see as the main challenges at stake in developing a science of non-adversarial generalization adequate to handle the safe-to-dangerous leap. I won’t review that full discussion here, but example issues include: 

  * Greater opportunities for successful power-seeking increasing incentives to engage in it (somewhat analogous to “power corrupts”).
  * A wider range of affordances revealing brittleness/shallowness in an AI’s rejection of rogue behavior.
  * New levels of intelligence/information creating novel problems with a model’s ontology, ethics, or cognitive processes in general.
  * Other reasons we haven’t thought of/discovered yet (this category is potentially very large and important).



My sense is that Yudkowsky and Soares are concerned about a broadly similar set of issues, but that their emphasis might differ somewhat. For example, relative to me:

  * I think Yudkowsky and Soares are more focused specifically on safe-to-dangerous leaps that occur in the context of capabilities increases (e.g., an AI “growing up” or “getting smarter”) in particular, as opposed to exposure to new environments given a fixed level of capability (see footnote for more on my take here33); 
  * They think we won’t be able to easily train on tasks that are very similar to the tasks we want advanced AIs to perform (since e.g. these tasks require something like long-horizon/superhuman/hard-to-evaluate performance), thereby ensuring that these tasks are especially far outside of the training distribution (again, see footnote for more34). 
  * My sense is that they’re especially interested in the way that novel forms of technology in particular create new options that reveal alien-ness/misalignment (akin to the way that e.g. the availability of condoms reveals “misalignment” with natural selection, and the way that the ability to make ice cream reveals the weird and hard-to-predict specificities of human taste in food).35
  * I think it’s possible that in thinking about distributional shift, they are also focusing more heavily on the general impact of the presence of powerful AI in the world – impact that could itself suffice to effect a strong distributional shift (though: this depends a lot on how much one can continue to train the AI on inputs that reflect the relevant changes).



Overall, and especially given that I’ve already discussed it in a previous post, I’m not going to try to litigate in detail exactly how hard to expect step 3 to be. And as I discussed previously, I do think it could be quite hard. 

I do also think, though, that Yudkowsky and Soares under-attend to ways in which it might be easy. In particular: they generally seem to be operating under the assumption that the transition from safe to dangerous inputs also needs to correspond to some very large and dramatic shift away from the distribution of inputs that the AI was trained on. See, for example, their discussion [here](https://ifanyonebuildsit.com/4/if-current-ais-are-mostly-weird-in-extreme-cases-whats-the-problem), in which they respond to the objection that “If current AIs are mostly weird in extreme cases, then what’s the problem?”: 

“AIs today may only occasionally encounter situations that are radically unlike their training environment; but superintelligent AI would constantly be in situations that are radically unlike its training environment, just by virtue of being more intelligent and having more options.” 

I think this is a plausible scenario, but I don’t think it’s a necessary one. In particular: 

  * I think it’s possible that we’ll be able to invest adequately in ensuring that significant increases in an AI’s intelligence/capability in particular take place only in the absence of options for rogue behavior (both before and after), and that the improved AIs are then subjected to extensive testing/evaluation prior to higher-stakes use.36 And in this case, it’s not that we’ll be training the AI and _then_ improving its intelligence enough that it’s in a position to go rogue. Rather, we’ll be able to train the AI at the fixed level of intelligence that we need to ensure alignment for. 
  * Also, I think it’s possible that we’ll be able to develop suitable means of evaluating advanced AI task performance (in particular, via bootstrapping from other forms of AI labor) that we can continue to train/oversee our AIs online on the specific sorts of tasks that we need them to perform, thereby decreasing the “distance” these AIs need to generalize. Indeed, in one limiting case of this, the availability of rogue options for the AI only occurs because only some small fraction of its episodes are being randomly sampled for ongoing training/monitoring/oversight (see my discussion of “[oversight scarcity](https://joecarlsmith.com/2025/09/29/controlling-the-options-ais-can-pursue#3-2-1-oversight-scarcity)” in the last essay), in which case the inputs that make rogue options genuinely available don’t need to be “off distribution” in a traditional sense at all (i.e., they can be indistinguishable, even by the AI, from the cases that it’s being ongoingly trained on). 



True, to the extent that we’re ever exposing our AIs to dangerous inputs at all ([maybe we don’t need to](https://joecarlsmith.com/2025/09/29/controlling-the-options-ais-can-pursue)), there needs to be _some_ transition from safe to dangerous inputs, and hence _some_ difference that this transition reflects. But it’s a substantially further question whether this difference needs to correspond to something akin to “moving an AI extremely far off of the distribution it was trained on” – and especially insofar as Yudkowsky and Soares concede that “AIs today may only occasionally encounter situations that are radically unlike their training environment,” it seems to me that we should look in substantially more detail at why, exactly, we should expect this to change. 

My broader point here, though, is that concerns about AIs failing to generalize suitably well should focus more specifically on the details of exactly how hard to expect step 3 to be – e.g., exactly what sort of distributional shift is necessary, what sort of distributional shift we should expect to be able to handle, and whether we should expect failures on that distributional shift to involve catastrophic power-seeking in particular rather than other forms of weird/unintended behavior – rather than on whether AI motivations are “alien” more generally. The latter talk functions, basically, to establish that the generalization in question is _imperfect_. But the question isn’t about perfection – it’s about whether we can meet the specific standard we need to satisfy.

## 8\. Alien AIs are still extremely scary

Overall, then, even if “AIs trained with current methods will have alien motivations as a strong default” is true (and I do think it’s plausible), I don’t think it’s enough to doom alignment on its own. And I think this, especially, in the context of AIs at an intermediate level of capability – AIs, that is, where I think we have much stronger prospects of effectively restricting (even if not, fully eliminating) the rogue options they have available (and hence, where the standards our efforts at motivation control need to meet are lower), and where I expect we’ll be in a better position to effectively evaluate/oversee their task-performance. Indeed, as I mentioned above, one of my central hopes for alignment is that AIs at this kind of intermediate level of capability will be roughly as instruction-following as current AIs are (e.g., even if they act weirdly or even go rogue in some cases, they aren’t consistently scheming and are mostly following instructions in common-sensical ways) and that this level of alignment will be enough to elicit the sort of transformatively useful AI labor at stake in my discussion of “[AI for AI safety](https://joecarlsmith.com/2025/03/14/ai-for-ai-safety).” 

All that said, though: I want to be clear that, at a higher level, if the motivations of ML-based AI systems are indeed alien in this way as a strong default, this is an extremely scary situation. That is: this means that as a strong default, ML-based methods of developing advanced AI will involve relying on powerful artificial agents motivated by strange tangles of alien, not-well-understood drives to safely and reliably follow our instructions regardless. Per my discussion above, I think it’s _possible_ that we can make this work. But we should be trying extremely hard not to bet on it. 

Of course, “alien by strong default” is different from “unavoidably alien,” and we can imagine scenarios in which our understanding and control over the motivations ML-based AI systems develop reaches a point where we can ensure a much greater degree of human-like-ness. Indeed, absent alignment faking and evaluation problems, “alienness” in the sense at stake here is centrally, just, a failure of non-adversarial generalization – and we are, at least, in a position to [study the dynamics at stake in non-adversarial generalization in a ton of detail](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-4-step-3-science-of-non-adversarial-generalization). At the least, then, if ML-based AI systems are alien in this sense as a strong default, suitable efforts at red-teaming should generally be reasonably effective at _revealing_ the alien-ness in question (analogy: suitable efforts at red-teaming would’ve been able to show quite clearly that non-scheming humans in the ancestral environment did not intrinsically value reproductive fitness); and if we can avoid compromising the signal that this kind of red-teaming provides (e.g., we continue use some versions of it as validation rather than as a part of training), it (together with other techniques – e.g., [transparency tools](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#3-2-transparency-tools)) might help us iterate towards much more human-like patterns of generalization. And as I’ve tried to emphasize above, this kind of alien-ness comes in importantly varying degrees, depending on the specific size and type of distributional shift that preserves desired/human-like forms of generalization. 

If we can’t avoid alien-ness by improving our understanding/control over the patterns of generalization that ML-based training creates, though, then by the time we’re building superintelligence, we will need to either figure out a way to handle the risks of alien-ness even in the context of full-blown superintelligences, or find some way to transition to a different and more precisely controllable paradigm of AI development (e.g., the “[new paradigm](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#3-2-3-new-paradigm)” I discussed in the context of transparency tools). And especially in the context of the later stages of the path to safe superintelligence – the stages that I think we should be centrally focused on [getting advanced AI help with](https://joecarlsmith.com/2025/04/30/can-we-safely-automate-alignment-research), rather than attempting ourselves – I think we should be putting a lot of effort towards this latter option. That is: despite all my comments in this essay,_I still think we really want to avoid having to build full-blown superintelligences that are motivated by strange tangles of alien drives_. So a key goal for automated alignment research should be to give us other options. 

## 9\. Next up: building AIs that do human-like philosophy

OK: that was a long discussion of the concern that AI motivations will be too alien to be safe. In the next essay, I’m going to turn to a different but related concern: namely, that on top of more standard forms of scientific progress, success at AI alignment will require an unrealistic amount of _philosophical_ progress as well. 

## Appendix 1: On value fragility

This appendix summarizes some of my current takes on “the fragility of value.” See [here](https://www.lesswrong.com/posts/EaLCAZ4bgycY6hFC8/value-fragility-and-ai-takeover), [here](https://joecarlsmith.com/2024/01/11/an-even-deeper-atheism), and [here](https://joecarlsmith.com/2024/01/16/being-nicer-than-clippy) for more detailed discussion.

  * I think that the standard sorts of theoretical justifications for value fragility (e.g., appeals to “extremal goodhardt”37) also predict that even slight psychological differences between humans, and within a single human-over-time, would lead to the sort of problematic divergence in question (and that actual observed differences in human value systems, together with observed degrees of selfishness/indexicality in human values, raise further questions in this respect). This isn’t necessarily an _objection_ to the role of value fragility in the discourse about AI alignment. But to the extent the concept makes implausible/counterintuitive predictions about humans, we should wonder about what’s specifically different in the AI case (though, there is indeed an answer here: namely that AIs are much _more_ psychologically different from humans than humans are from one another). And to the extent it makes worrying predictions about humans, we should extend our worry accordingly.38
  * I have yet to see the theoretical justifications for value fragility worked out rigorously; I think vague gestures like Stuart Russell’s [here](https://www.edge.org/conversation/the-myth-of-ai#26015) and Yudkowsky and Soares’s [here](https://ifanyonebuildsit.com/4/if-current-ais-are-mostly-weird-in-extreme-cases-whats-the-problem) (see their footnote on linear functions and convex polygonal regions) are notably insufficient; and I think greater precision about the scope and dynamics in play would be useful in understanding where and when to expect them to apply.
  * Most discussions of value fragility assume unipolar optimization that goes unchecked by other actors, and many people have the intuition that a greater “balance of power” helps to mitigate some of the problem. [I don’t yet see a very strong story about why this would be](https://www.lesswrong.com/posts/EaLCAZ4bgycY6hFC8/value-fragility-and-ai-takeover#2_4_Multipolar_value_fragility); but I still wonder whether there might be something there. 
  * To the extent we expect different humans to converge in their values given some kind of idealized reflection, we should be very interested in what it would take for AIs to fall within a similar basin – and I don’t actually think it’s clear that current AI personas are all that far from the relevant human distribution in this respect. Indeed, there is a case to be made that current AI personas are or could be relatively easily made to be notably closer to certain ideals of human virtue and reflectiveness than many humans are. 
  * There are a number of relatively clear cases in which value fragility concerns _don’t_ apply – for example, downside-focused views that mostly want to _avoid_ the presence of certain specific states of affairs (e.g., suffering), and “[nice](https://www.lesswrong.com/posts/EaLCAZ4bgycY6hFC8/value-fragility-and-ai-takeover#4__The_possible_role_of_niceness_and_power_sharing_in_diffusing_these_dynamics)” value systems that care intrinsically at least somewhat about how things go by the lights of _other_ value systems that they might otherwise be “fragile” with respect to. And while I’m sympathetic to concerns that “niceness” of this form is also a fairly narrow target, that actually-good types of niceness themselves need to be something like “exactly right” if they’re going to be optimized hard, and that human forms of “niceness” likely emerged via contingent processes that won’t apply to AIs by default, I think there are some interesting questions about whether the niceness humans display might be sufficiently non-contingent as to provide some comfort (see e.g. the debate [here](https://www.lesswrong.com/posts/2NncxDQ3KBDCxiJiP/cosmopolitan-values-don-t-come-free?commentId=sjutYfdA28BaovfPp)). 
  * The broader discourse about value fragility has been influenced specifically by models of rational agents maximizing utility functions (and typically: utility functions understood in impartial and consequentialist terms), and for this reason, I worry that it will end up smuggling in confusions related to things like: an overly reified conception of something like an agent’s “[coherent extrapolated volition](https://en.wikipedia.org/wiki/Coherent_extrapolated_volition)” or “[values-on-reflection](https://joecarlsmith.com/2021/06/21/on-the-limits-of-idealized-values)” (in particular, a conception that assumes that objects like these exist, are suitably determinate in their content, and provide the governing standards to which all smart agents attempt to conform); wrongful assumptions that smart and effective agents must be well-understood as maximizing a coherent utility function over universe histories that remains consistent over time, rather than satisfying more minimal criteria (e.g., consistent ranking of options at a given time); and some more general over-anchoring on rational-agent-like models. 



Leave a comment

[Substack](https://joecarlsmith.substack.com/p/how-human-like-do-safe-ai-motivations)[LessWrong](https://www.lesswrong.com/posts/r8H4d3X7AKg9n8TQk/how-human-like-do-safe-ai-motivations-need-to-be)[EA Forum](https://forum.effectivealtruism.org/posts/5E8HeQSBZhRtwAW47/how-human-like-do-safe-ai-motivations-need-to-be)

Next up

[Read next in series ](/2026/01/29/building-ais-that-do-human-like-philosophy/)

[01.29.2026Building AIs that do human-like philosophyAIs will face philosophical questions humans can’t answer for them. Continue reading ](/2026/01/29/building-ais-that-do-human-like-philosophy/)

## Further reading

[08.18.2025How do we solve the alignment problem? / Part 7: Giving AIs safe motivationsA four-part picture.  Continue reading ](/2025/08/18/giving-ais-safe-motivations/)[02.13.2025How do we solve the alignment problem? / Part 2: What is it to solve the alignment problem?Also: to avoid it? Handle it? Solve it forever? Solve it completely? Continue reading ](/2025/02/13/what-is-it-to-solve-the-alignment-problem/)[01.11.2024Otherness and control in the age of AGI / Part 6: An even deeper atheismWho isn’t a paperclipper? Continue reading ](/2024/01/11/an-even-deeper-atheism/)

1

In general in this essay, when I talk about “human-like motivations,” I’m not talking about motivations that are similar to the motivations humans actually have; rather, I’m talking about motivations structured using human-like concepts. That is: in a sense, a genuin ...

More

2

See, for example, some of the results described [here](https://www.anthropic.com/research/tracing-thoughts-language-model).

3

Of course, there’s some question here of what counts as “in distribution” vs. “out of distribution.” But to the extent that real-world deployment is generally an expansion of an AI’s training distribution (because e.g. it’s too hard to capture the diversity of real-w ...

More

4

This follows from basic Bayesianism – though the degree of update in each case is a further question.

5

And note, too, that the relevant kind of “human-like alternative” isn’t necessarily clearly defined; and that different humans might themselves diverge in their interpretations of concepts like “helpfulness,” “harmlessness,” “honesty,” and so forth.

6

As an example use of this terminology, see [Yudkowsky (2022)](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities): “There are two fundamentally different approaches y ...

More

7

As evidence for the continuity between the two arguments, though, see e.g. Yudkowsky’s recent comment quoted [More](https://www.lesswrong.com/posts/iFRrJfkXEpR4hFcEv/a-reply-to-macaskill-on-if-anyone-builds-it-ev ...</div><button class=)

8

In particular: the degree of good generalization at stake in “act well on my behalf for all time and through all possible future changes to your psychology as you grow/self-improve etc” is indeed intimidatingly large. And I expect it to implicate the limiting version ...

More

9

Here I’ve heard the concern that because of offense-defense asymmetries, any end state that doesn’t involve either a benevolent sovereign AI dictator or an enforced regime of restriction on AI development will be vulnerable to some other actor attempting to build a s ...

More

10

You could argue that, by definition, a perfectly benevolent dictator AI is the ideal victory condition, because the benevolence in question will extend to address any other considerations that might’ve made it unideal. But I think there is a powerful contrary intuiti ...

More

11

You could argue that the AI in question won’t need to take-over, because continuing to follow human instructions will be comparably likely to lead to the best outcomes by its lights. But if it’s actually in a position to easily take over the world via a wide variety ...

More

12

More specifically: I think the book argues some kind of consequentialism in the context of the chapter on AIs wanting things (indeed, it looks to me like “wanting things” and “consequentialism” are close to equivalent concepts for Yudkowsky and Soares – i.e. both are ...

More

13

And which can also take forms that IABIED doesn’t cover.

14

See also longer discussion in the online resources [here](https://ifanyonebuildsit.com/5/can-the-ai-be-satisfied-to-the-point-where-it-just-leaves-us-alone).

15

Here I expect Yudkowsky and Soares to be interested, in particular, in the evidence provided by the fact that humans created via natural selection ended up with a complex variety of drives, some of which are reasonably long-term and consequentialist. But now we are g ...

More

16

It’s true that some people care a lot about the entire trajectory of the future – but they need not set their AIs directly on the task of optimizing for their values in this respect. And while it’s true that we do want our AIs to do tasks in ways that care not to har ...

More

17

Though I think that shorter-term consequentialist considerations are especially suited to just outweighing pursuit of long-term consequentialist goals (e.g. if your AI wants to make paperclips in the longer-term, but also wants staples in the next five minutes, it mi ...

More

18

Here I’m assuming, for simplicity, an absolute prohibition; and I’m not claiming this is a plausible view in human ethics.

19

Certain motivations that focus their evaluations on the properties of actions rather than outcomes in can also be consequentialist – e.g. “choose the action that maximizes the number of paperclips.” But I’m especially interested in the non-consequentialist motivatio ...

More

20

Though: the specific dynamics at stake in this sort of choice can get complicated. For example: insofar as the agent is supposed to reject all actions that involve lying, it needs to be thinking of the honest action that leads it to lie five times later as not involving lying.

21

In the context of human ethics, this potential disconnect from caring about the children intrinsically is one objection to virtue ethics. But in the context of AI agents, it might be actively desirable.

22

See e.g. [here](https://www.lesswrong.com/posts/NxF5G6CJiof6cemTw/coherence-arguments-do-not-entail-goal-directed-behavior), [More](https://w ...</div><button class=)

23

See [here](https://joecarlsmith.com/2022/03/16/on-expected-utility-part-1-skyscrapers-and-madmen#iv-is-being-an-eum-er-trivial) for some more discussion. One concern here is that any given pattern of behavior can be made compatible with some complicated ut ...

More

24

See e.g. [here](https://ifanyonebuildsit.com/11/shutdown-buttons-and-corrigibility).

25

Provided, that is, they also care somewhat about the exactly-right long-term consequentialist values.

26

See also Soares on “[deep deceptiveness](https://www.lesswrong.com/posts/XWwvwytieLtEWaFJX/deep-deceptiveness).”

27

There’s a case to be made that if you can do this, you can also probably point the AI directly at concepts like “goodness” or “our coherent extrapolated volition” instead. But per my comments against focusing on sovereign AIs above, I think that asking an AI to optim ...

More

28

Or at least, OOD generalization that is related to alignment.

29

The structure of this broad point extends to any attempt to contrast the safety properties of “human-like” motivations/concepts with “alien” motivations/concepts. That is: humans differ in how they apply concepts that nevertheless maintain suitable overlap as to play ...

More

30

If you were relying on P being exactly right to restrain some other kind of consequentialist optimization, as you plausibly often are in the context of e.g. more deontology-like constraints, then problems of this form are indeed bad. But if P is something more holist ...

More

31

I don’t buy stories about this that appeal to some missing core of general intelligence.

32

Indeed, Yudkowsky and Soares make heavy use of analogies with the sort of bad generalization at stake in current human behavior (e.g., using condoms) relative to the behavior natural selection was “trying” to select for (e.g., maximizing something like reproductive f ...

More

33

As I discussed in “[Giving AIs safe motivations](https://joecarlsmith.com/2025/08/18/giving-ais-safe-motivations#4-4-step-3-science-of-non-adversarial-generalization),” I do think that safe-to-dangerous leaps that correspond to this sort of capability incr ...

More

34

I expect the force of this point to depend sensitively on the specific sorts of training we end up using to get e.g. superhuman/long-horizon/hard-to-evaluate performance on various tasks; and I think its force looks generally weaker in a context where w ...

More

35

To me, this looks more like an argument for “novel technology will reveal ways in which an AI’s favorite world is different from your favorite world,” rather than an argument for expecting corrigibility failures.

36

Of course: the AIs could start scheming as a result of this transition, but at that point we’re back to step 2.

37

Quoting from “[An even deeper atheism](https://joecarlsmith.com/2024/01/11/an-even-deeper-atheism)”:“Can we give some sort of formal argument for expecting value fragility of this kind? ...

More

38

See e.g. MacAskill (2025)’s “[Better Futures](https://www.forethought.org/research/introducing-better-futures)” series for an examination of some similar concerns in the context of human moral mistakes.

Subscribe
