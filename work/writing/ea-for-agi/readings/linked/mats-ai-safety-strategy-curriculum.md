---
title: "MATS AI Safety Strategy Curriculum v2"
author: "DanielFilan"
date: 2024-10-07
url: https://www.lesswrong.com/posts/rhEXTkDmssrHBNrfS/mats-ai-safety-strategy-curriculum-v2
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by adjacent-curricula/aisafety-com-self-study.md; MATS AI safety strategy curriculum — a comparison curriculum for the macrostrategy axis"
---

As part of our Summer 2024 Program, MATS ran a series of discussion groups focused on questions and topics we believe are relevant to prioritizing research into AI safety. Each weekly session focused on one overarching question, and was accompanied by readings and suggested discussion questions. The purpose of running these discussions was to increase scholars’ knowledge about the AI safety ecosystem and models of how AI could cause a catastrophe, and hone scholars’ ability to think critically about threat models—ultimately, in service of helping scholars become excellent researchers.

The readings and questions were largely based on the [curriculum from the Winter 2023-24 Program](https://www.lesswrong.com/posts/JsjJuikJsidkyfhyr/mats-ai-safety-strategy-curriculum), with two changes:

*   We reduced the number of weeks, since in the previous cohort scholars found it harder to devote time to discussion groups later in the program.
*   For each week we selected a small number of “core readings”, since many scholars were unable to devote time to read everything in the curriculum, and we thought that some readings were more valuable than others.

In addition, the curriculum was supplemented in two ways:

*   For some weeks, a summary of each reading was compiled for the benefit of discussion group facilitators.
*   There were some readings that we felt were valuable, but did not fit nicely into any particular week. These supplements were shared with scholars after the discussion series concluded, and are included in this post. When summaries exist, they are shown underneath the reading they summarize, and the additional readings are at the end of the post. Some summaries have been edited for accuracy since being shown to discussion group facilitators and scholars, but they still may contain flaws.

As in [the post about the previous cohort’s curriculum](https://www.lesswrong.com/posts/JsjJuikJsidkyfhyr/mats-ai-safety-strategy-curriculum), we think that there is likely significant room to improve this curriculum, and welcome feedback in the comments.

Week 1: How powerful is intelligence?
=====================================

Core readings
-------------

*   [The Power of Intelligence](https://www.youtube.com/watch?v=q9Figerh89g) (Rational Animations, Yudkowsky - 7 min)
*   [Superintelligence](https://www.amazon.com/gp/product/0198739834) Chapter 6: cognitive superpowers (up to "Power over nature and agents") (Bostrom - 14 min)  
    \[In retrospect, it was a mistake to assign a reading that people could not read just by clicking on the link. Instead, it would be better to assign [this LessWrong post](https://www.lesswrong.com/posts/C9KJ8BrLqfsBuHgpB/superintelligence-8-cognitive-superpowers) containing a summary and discussion of the relevant section.\]
*   [AI could defeat all of us combined](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/) (Karnofsky - 20 min)

Other readings
--------------

*   Skepticism of claims of AI's power:
    *   [A TAI that kills all humans might also doom itself](https://blog.aiimpacts.org/p/a-tai-which-kills-all-humans-might) (Heninger - 4 min)
    *   [Superintelligence is not omniscience](https://aiimpacts.org/superintelligence-is-not-omniscience/) (Heninger and Johnson - 12 min, links to several longer pieces)
    *   [AI will change the world, but won’t take it over by playing “3-dimensional chess”](https://windowsontheory.org/2022/11/22/ai-will-change-the-world-but-wont-take-it-over-by-playing-3-dimensional-chess/) (Barak and Edelman - 28 min)
*   What AI catastrophe could look like:
    *   [What could an AI-caused existential catastrophe actually look like?](https://80000hours.org/articles/what-could-an-ai-caused-existential-catastrophe-actually-look-like/) (Hilton - 13 min)
    *   [It Looks Like You're Trying To Take Over The World](https://gwern.net/fiction/clippy) (Branwen - 40 min)
    *   [AI X-risk Approximately Ordered by Embarrassment](https://www.lesswrong.com/posts/mSF4KTxAGRG3EHmhb/ai-x-risk-approximately-ordered-by-embarrassment) (Lawsen - 23 min)
    *   [What failure looks like](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like) (Christiano - 13 min)

Discussion questions
--------------------

*   Is it true that humans are more impactful than other animals due to our intelligence? What kinds of "intelligence" are relevant?
*   Is human intelligence located inside one brain, or in organizations and cultures? Will we and AIs be part of the same culture?
*   How many of Bostrom's "cognitive superpowers" are necessary for AI to be massively impactful? Which are likely to be developed by machine learning?
*   What is the most likely way Yudkowsky's mail-order DNA scenario could fail? Does this failure generalize to other AI takeover scenarios? A similar question applies to the catastrophes described in "Other readings"
*   What are the differences between the different stories of AI takeover? Which kinds of stories are more plausible?
*   What are the limits of intelligence? What do they imply about how powerful AI could be?
*   Is 'intelligence' a single thing? What kinds of intelligence are more or less powerful?
*   What follows from the premise that AI could be extremely powerful?

Week 2: How and when will transformative AI be made?
====================================================

Core readings
-------------

*   [Will Scaling Work?](https://www.dwarkeshpatel.com/p/will-scaling-work) (Patel - 16 min)  
    A 'dialogue' on whether LLMs can be scaled to get superhuman AI. In summary:
    *   We're running out of language data, and there's a good chance we'll be a few OOMs off what we need. You could do self-play but that's computationally expensive and hard to evaluate. But evaluation gets easier the smarter models are, we could train them on more relevant loss functions, top researchers think it will work.
    *   Scaling has worked so far at driving loss down
        *   But next-token prediction isn't want we care about
        *   But you also see scaling on benchmarks like MMLU
        *   But MMLU is just memorization of internet stuff, and we're starting to saturate MMLU. Benchmarks that measure autonomous problem-solving see models sucking.
        *   GPT-4 did better than plateau believers predicted, not clear why you'd suddenly see a plateau, could spend way more, improve compute efficiency, unhobble, etc.
    *   LLMs seem like they're modelling the world
        *   But they're just compressed knowledge
        *   But c'mon, scaling is working!
*   [The Direct Approach](https://epochai.org/blog/the-direct-approach) (Barnett and Besiroglu - 13 min)  
    Connects cross-entropy loss to stuff we care about - how many tokens you need to draw from a model before you can distinguish it from human text. Thesis: if a model is indistinguishable from human text, it's as smart as the humans generating that text. Uses this to bound time to AIs that can write human-like.
*   [Biological Anchors: A Trick That Might or Might Not Work](https://www.astralcodexten.com/p/biological-anchors-a-trick-that-might), parts I and II (Alexander - 33 min)  
    Bio-anchors: compare FLOPs used in ML to candidate biological processes that maybe produce AGI in the relevant way, get a decent probability of AGI by 2050. Problem: maybe FLOPs as a measure of intelligence is fake.

Other readings
--------------

*   [Machine Learning Trends](https://epochai.org/trends) (Epoch AI - 5 min)  
    Dashboard of trends about big deep learning models - how compute is scaling (4x per year per notable ML model since 2010), when we'll train on all human-generated text (2028), etc.
*   [The Scaling Hypothesis](https://gwern.net/scaling-hypothesis) (Branwen - 4 min for the abstract, 44 min in total)  
    Just scaling up neural nets on text prediction could produce AGI. Written when this was not the consensus view.
*   [AGI and the EMH: markets are not expecting aligned or unaligned AI in the next 30 years](https://basilhalperin.com/essays/agi-vs-emh.html), sections I, II, III, VII, VIII, IX, XI (Halperin, Chow, Mazlish - 3 min for the introduction, 31 min total)  
    If markets were expecting super-powerful AI within the next 30 years, interest rates would go up, either because the market thought we were about to die, or because economic growth would increase. They're not up, and markets are really smart, so maybe we won't get super-powerful AI in the next 30 years.
*   [Summary of Situational Awareness - The Decade Ahead](https://forum.effectivealtruism.org/posts/zmRTWsYZ4ifQKrX26/summary-of-situational-awareness-the-decade-ahead) (OscarD - 1 min for the summary of the summary, 21 min for the full summary)  
    Scaling might produce really smart AI. We should think of this from a national security perspective. The US should build tons of power plants to put energy into training AIs, people should put a bunch of work into alignment, AI will be nationalized, and the US should try to get AGI before foreign actors do, and make sure foreign state actors don't steal model weights.
*   [AI Timelines](https://www.lesswrong.com/posts/K2D45BNxnZjdpSX2j/ai-timelines) (Habryka, Kokotajlo, Cotra, Erdil - 61 min)  
    Discussing disagreements between Daniel Kokotajlo, Ajeya Cotra, and Ege Erdil on AI timelines. Daniel thinks that we will get transformative AI within 10 years, Ajeya thinks it's 13 years median, and Ege thinks it's 40 years away. Ege weights heavily random difficulties popping up making stuff really tricky, while Daniel thinks scaling works pretty easily.

Discussion questions
--------------------

*   Will scaling big machine learning models work to produce transformative AI? How can we tell?
*   If scaling does work, what does that mean for AI safety efforts?
*   How long will it take scaling to produce transformative AI?
*   What are the strengths and weaknesses of Epoch AI's "direct approach" vs Cotra's "biological anchors" as methods of forecasting the emergence of transformative AI?
*   How quickly might scaling work?
*   How much should we weight market prices as forecasts of AI timelines?
*   Should we expect AI companies to be nationalized?
*   What parts of modern machine learning support Gwern's speculations about the scaling hypothesis? What parts support it the least?
*   What do these frameworks say about the time between now and when transformative AI is developed? What things could happen that would tell us which of these frameworks were more reliable?

Week 3: How could we train AIs whose outputs we can’t evaluate?
===============================================================

Core readings
-------------

*   [Why I'm excited about AI-assisted human feedback](https://aligned.substack.com/p/ai-assisted-human-feedback) (Leike - 7 min)  
    RLHF won't scale when humans can't evaluate AI plans - we need AIs to assist humans to do evaluation
*   [X thread on "When Your AIs Deceive You"](https://threadreaderapp.com/thread/1762886003046629586.html) (Emmons - 2 min)  
    RLHF can be suboptimal when the AI knows things the human doesn't. Two failure modes: the AI making the human think things are better than they really are, and the AI spending resources to prove to the human that the AI is being useful.
*   [Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision](https://arxiv.org/abs/2312.09390), sections 1 (Introduction) and 3 (Methodology) (Burns et al. - 12 min)  
    Studies the problem of humans supervising superhuman models by trying to use weak models to generate labels on which to fine-tune larger models, and seeing if the larger models can perform better than the weaker models.
*   [The easy goal inference problem is still hard](https://ai-alignment.com/the-easy-goal-inference-problem-is-still-hard-fad030e0a876) (Christiano - 5 min)  
    A common alignment plan is to observe human behaviour, infer what we want, and get an AI to optimize for that. Problem: given that humans are not optimal utility maximizers, it's unclear how one could do this with infinite data and compute.

Other readings
--------------

*   [Iterated Distillation and Amplification](https://ai-alignment.com/iterated-distillation-and-amplification-157debfd1616) (Cotra - 8 min)  
    Repeat the following: make an AI that is as smart as a human with whatever tools the human has available, but much cheaper to run (distillation); then give that AI to the human as a tool to do stuff with, increasing the human's capabilities (amplification). This increases the human's power to do stuff while remaining aligned with the human's interests.
*   [AI safety via debate](https://arxiv.org/abs/1805.00899), up to but not including 2.2 "Complexity theory analogies: DEBATE = PSPACE" (Irving, Christiano, Amodei - 12 min)  
    To help humans supervise AI outputs, train two AIs to debate each other on how good the outputs are. The AIs will be incentivized to point out flaws or omitted info in each other's arguments, and so each AI is incentivized be honest about the quality of the outputs.
*   [Debate update: Obfuscated arguments problem](https://www.lesswrong.com/posts/PJLABqQ962hZEqhdB/debate-update-obfuscated-arguments-problem) (Barnes - 20 min)  
    Suppose one AI makes a long, multi-step argument for claim C, and another AI says that one of the steps is invalid but it can't figure out which. Then, the other AI makes a long, multi-step argument for C being false, and the first AI says that one of the steps is invalid but it can't figure out which. A human can't reliably judge this debate, which makes it hard for AI safety via debate to work. This can show up in practice in human debates.
*   [Scalable Oversight and Weak-to-Strong Generalization: Compatible approaches to the same problem](https://www.lesswrong.com/posts/hw2tGSsvLLyjFoLFS/scalable-oversight-and-weak-to-strong-generalization), up to but not including "Upshot" (Radhakrishnan et al. - 4 min)  
    Scalable oversight (getting AIs to help humans evaluate AI output) and weak-to-strong generalization (helping AIs learn from imperfect human evaluation) are compatible approaches to the problem of training models to perform well when we have trouble evaluating their output.
*   [The case for aligning narrowly superhuman models](https://www.lesswrong.com/posts/PZtsoaoSLpKjjbMqM/the-case-for-aligning-narrowly-superhuman-models), up to but not including "Advantages over other genres of alignment research" (Cotra - 21 min)  
    To test our ability to get smart models to do what we want, we should run experiments like "get someone who doesn't speak French to train an LLM to translate English into French, and use bilingual English-French speakers to see if it worked". More abstractly: get a fuzzy task that can't be precisely defined, an AI that could be better than some humans at that task, and try to get those humans to get the AI to do that task, via various alignment schemes.
*   [A minimal viable product for alignment](https://aligned.substack.com/p/alignment-mvp) (Leike - 4 min)  
    If we built an AI system that could accelerate alignment research and helped us align more capable AI systems, this would be good - it's easier than most alignment work, and helps us solve the rest of the alignment problem.

Discussion questions
--------------------

*   What failure modes could realistically occur if we do not solve this problem?
*   How does goal inference fare as a method of training AIs that can make plans we don't understand?
*   In what ways does this problem show up when training current models? Are there aspects of the problem that aren't present yet?
*   One plan for alignment is to make aligned AIs that are as smart as ourselves, and make those AIs align smarter AIs. How feasible is this plan?
*   The scalable oversight approach involves trying to get AIs to help humans to oversee AIs. How promising can this approach be? What do we need to assume about the helper AIs for this approach to work?
*   How do the guarantees provided by methods like debate or iterated distillation and amplification degrade when training is imperfect?

Week 4: Will AIs fake alignment?
================================

Core readings
-------------

[Scheming AIs: Will AIs fake alignment during training in order to get power?](https://joecarlsmith.com/2023/11/15/new-report-scheming-ais-will-ais-fake-alignment-during-training-in-order-to-get-power), abstract and introduction (Carlsmith - 45 min)  
\[In retrospect, this probably took longer than 45 minutes for most people to read\]

Other readings
--------------

### On inner and outer alignment

*   [The Inner Alignment Problem](https://www.lesswrong.com/s/r9tYkB2a8Fp4DN8yB/p/pL56xPoniLvtMDQ4J) (Hubinger et al - 15 min)  
    Note that in this post, a "mesa-optimizer" is an optimizer that is itself optimized by a "base optimizer" - imagine a neural network that is optimizing to perform some task (like "cleaning a room"), while itself being optimized by an algorithm like stochastic gradient descent. The "mesa-objective" is the objective of the mesa-optimizer, while the "base objective" is the objective that the base optimizer is optimizing.
*   [Outer vs inner misalignment: three framings](https://www.lesswrong.com/posts/poyshiMEhJsAuifKt/outer-vs-inner-misalignment-three-framings-1) (Ngo - 11 min)
*   [Inner and outer alignment decompose one hard problem into two extremely hard problems](https://www.lesswrong.com/posts/gHefoxiznGfsbiAu9/inner-and-outer-alignment-decompose-one-hard-problem-into), up to but not including part I (Turner - 7 min)

### On reasons to think deceptive alignment is likely

*   [The Standard Analogy](https://www.lesswrong.com/posts/sGEJi9wFT3Gdqg2nM/the-standard-analogy) (Davis - 15 min)
*   [Summary of "How likely is deceptive alignment?"](https://www.lesswrong.com/posts/A9NxPTwbw6r6Awuwt/how-likely-is-deceptive-alignment?commentId=rcECWQwYdhRg9tyJw) (Berglund - 8 min)
*   [Counting arguments provide no evidence for AI doom](https://optimists.ai/2024/02/27/counting-arguments-provide-no-evidence-for-ai-doom/) (Belrose and Pope - 24 min)
*   [Seeking Power is Often Convergently Instrumental in MDPs](https://www.lesswrong.com/posts/6DuJxY8X45Sco4bS2/seeking-power-is-often-convergently-instrumental-in-mdps) (Turner and Riggs - 24 min)
*   How to deal with deceptive alignment:
    *   [How do we become confident in the safety of a machine learning system?](https://www.lesswrong.com/posts/FDJnZt8Ks2djouQTZ/how-do-we-become-confident-in-the-safety-of-a-machine), up to but not including "Case study: Microscope AI" (Hubinger - 22 min)
    *   [The case for ensuring that powerful AIs are controlled](https://www.lesswrong.com/posts/kcKrE9mzEHrdqtDpE/the-case-for-ensuring-that-powerful-ais-are-controlled) (Greenblatt and Shlegeris - 34 min)

Discussion questions
--------------------

*   Under what conditions could AIs fake alignment?
*   How could we gain empirical evidence about the likelihood of AIs faking alignment?
*   In what conditions are agents motivated to gain power or to preserve the content of their goals? In what situations do they not face that motivation?
*   Have humans internalized the "goals" of evolution, or are we misaligned? To what degree does this question make sense?
*   If models generalize their capabilities to new contexts, is that evidence that they will generalize their values and alignment to new contexts?
*   Do counting arguments provide evidence for AI doom?
*   How likely are models trained on predictive tasks to fake alignment?
*   Alex Turner has criticized his post "[Seeking Power is Often Convergently Instrumental in MDPs](https://www.lesswrong.com/posts/6DuJxY8X45Sco4bS2/seeking-power-is-often-convergently-instrumental-in-mdps)". Why has he done so? If his criticism is valid, how does that affect the relevance of the results for understanding the likelihood of models faking alignment?
*   How hard is it likely to be to train AIs that will not fake alignment, as opposed to controlling smart AIs that may have faked their own alignment?

Week 5: How should AI be governed?
==================================

Core readings
-------------

*   [PauseAI Proposal](https://pauseai.info/proposal) (PauseAI - 4 min)  
    Set up an international AI Safety Agency that has to approve training and deploying big models. Training of general AI systems should only be allowed if safety can be guaranteed, deployment should only be allowed if no dangerous capabilities are present. Also stop people from publishing algorithm improvements, or increasing effectiveness of computational hardware.
*   [Responsible Scaling Policies (RSPs)](https://metr.org/blog/2023-09-26-rsp/) (METR - 13 min)  
    How labs can increase safety: say "we will stop scaling when we make observation O, until we implement adequate protection P". Makes sense under varying estimates of risk, moves attention to specific risk reducing measures, gives practice for evaluation-based regulations.
*   [Ways I Expect AI Regulation To Increase Extinction Risk](https://www.lesswrong.com/posts/6untaSPpsocmkS7Z3/ways-i-expect-ai-regulation-to-increase-extinction-risk) (1a3orn - 8 min)  
    Regulations are messy and can easily backfire, by (a) being misdirected and hampering safety effort, (b) favouring things that are legible to the state (which might not be good safety efforts), (c) pushing research to countries that don't regulate, and (d) empowering big companies.

Other readings
--------------

*   [My thoughts on the social response to AI risk](https://www.lesswrong.com/posts/EaZghEwcCJRAuee66/my-thoughts-on-the-social-response-to-ai-risk) (Barnett - 12 min)  
    From the piece: "Since I think substantial AI regulation will likely occur by default, I urge effective altruists to focus more on ensuring that the regulation is thoughtful and well-targeted rather than ensuring that regulation happens at all."
*   [Tort Law Can Play an Important Role in Mitigating AI Risk](https://forum.effectivealtruism.org/posts/epKBmiyLpZWWFEYDb/tort-law-can-play-an-important-role-in-mitigating-ai-risk) (note that 'tort law' basically means 'liability law') (Weil - 6 min)  
    An AI regulation scheme: if there's an AI accident that's a near miss for doom (e.g. a power-seeking AI takes over Berkeley for a week, rather than the whole earth forever), they are liable for punitive damages that represent the risk their AI could have taken over the world. Also, have damages even if there isn't provable negligence, and require labs to be insured for this legal risk.
*   [Pausing AI Developments Isn’t Enough. We Need to Shut it All Down](https://time.com/6266923/ai-eliezer-yudkowsky-open-letter-not-enough/) (Yudkowsky - 10 min)  
    Advanced AI is likely to kill all humans, and AI is progressing very quickly. There is no sensible plan to align AI: "get AI to figure out alignment" is not a sensible plan. There should be a global ban on frontier AI development, GPUs should be tracked, and large GPU clusters should be banned.
*   [We're Not Ready: thoughts on "pausing" and responsible scaling policies](https://www.lesswrong.com/posts/Np5Q3Mhz2AiPtejGN) (Karnofsky - 9 min)  
    We're not ready for transformative AI. A global pause on AI progress and hardware is infeasible, and a partial pause (e.g. temporarily banning AI development in the US but not banning production of AI hardware and algorithmic insights) could do more harm than nothing, because progress would be very fast once a pause was lifted. RSPs are like pauses, but they only work in cases where AI is scary, and so lots of people can agree on it.
*   [The possibility of an indefinite AI pause](https://forum.effectivealtruism.org/posts/k6K3iktCLCTHRMJsY/the-possibility-of-an-indefinite-ai-pause) (Barnett - 18 min)  
    An indefinite AI pause is possible, and would require something like a world government, which would be hard to create, and would also be terrible. It would also delay technological progress. It could also prevent AI from being created ever, which would leave humanity vulnerable to other existential risks.
*   [Short timelines and slow, continuous takeoff as the safest path to AGI](https://www.lesswrong.com/posts/YkwiBmHE3ss7FNe35/short-timelines-and-slow-continuous-takeoff-as-the-safest) (Hadshar and Lintz - 9 min)  
    Takeoffs are safer if they're slower and more continuous, because people have time to react. Slow continuous takeoff is more likely in short timelines, because coordination is easier now and we might have "compute overhang" later - lots of computation that could quickly be used to make really smart AI. Also, it's worth trading time now for time during takeoff, because we will know more during takeoff.
*   [What's up with "Responsible Scaling Policies"?](https://www.lesswrong.com/posts/jyM7MSTvy8Qs6aZcz/what-s-up-with-responsible-scaling-policies) (Habryka and Greenblatt - 24 min)  
    Some things about the naming and definitions of RSPs are sketchy, and the Anthropic RSP is poorly specified. Using RSPs to reduce existential risk requires determining whether models are existentially dangerous, and it's unclear how to do that.

Discussion questions
--------------------

*   What technical research would best make an AI pause more feasible, or make it work better?
*   What technical research would make RSPs work better?
*   How similar would RSPs be to a pause on frontier AI developments in practice? What are the pros and cons of each approach?
*   How likely are the negative outcomes of AI regulation that 1a3orn describes? Are there ways of reducing the likelihood of those outcomes?
*   Are there other plausible serious negative outcomes of AI regulation that 1a3orn does not address?
*   What would change your mind about which forms of AI regulation were good ideas?
*   Some are concerned that a pause on frontier AI development would greatly speed progress once the pause was lifted, due to other factors of AI production (e.g. data, computers) still proceeding. How big of a concern is this?
*   Will countries be able to coordinate on AI regulations without a very powerful world government? Are there types of AI regulation that require less coordination?
*   How does the approach of using liability law to address risky AI development compare to RSPs?

Readings that did not fit into any specific week
================================================

*   [Many arguments for AI x-risk are wrong](https://www.alignmentforum.org/posts/yQSmcfN4kA7rATHGK/many-arguments-for-ai-x-risk-are-wrong)
*   [More people getting into AI safety should do a PhD](https://www.alignmentforum.org/posts/yi7shfo6YfhDEYizA/more-people-getting-into-ai-safety-should-do-a-phd)
*   [Tips for empirical alignment research](https://www.alignmentforum.org/posts/dZFpEdKyb9Bf4xYn7/tips-for-empirical-alignment-research)
*   [Critical review of Christiano's disagreements with Yudkowsky](https://www.alignmentforum.org/posts/8HYJwQepynHsRKr6j/critical-review-of-christiano-s-disagreements-with-yudkowsky)
*   [AI catastrophes and rogue deployments](https://www.alignmentforum.org/posts/ceBpLHJDdCt3xfEok/ai-catastrophes-and-rogue-deployments)
*   [On "first critical tries" in AI alignment](https://www.alignmentforum.org/posts/qs7SjiMFoKseZrhxK/on-first-critical-tries-in-ai-alignment)
*   [Sleeper agents](https://arxiv.org/abs/2401.05566)
*   [AGI Ruin: A List of Lethalities](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities)
*   [A central AI alignment problem: capabilities generalization, and the sharp left turn](https://www.lesswrong.com/posts/GNhMPAWcfBCASy8e6/a-central-ai-alignment-problem-capabilities-generalization)
*   [Intelligence Explosion Microeconomics](https://intelligence.org/files/IEM.pdf)
*   [Eliciting Latent Knowledge](https://ai-alignment.com/eliciting-latent-knowledge-f977478608fc)
*   [Comment thread starting with Evan Hubinger on "Counting arguments provide no evidence for AI doom"](https://www.lesswrong.com/posts/YsFZF3K9tuzbfrLxo/counting-arguments-provide-no-evidence-for-ai-doom?commentId=RtMbgqXnrasA3xiNu)
*   [The Alignment Problem from a Deep Learning Perspective](https://arxiv.org/abs/2209.00626)
*   [The range of human intelligence](https://wiki.aiimpacts.org/doku.php?id=speed_of_ai_transition:range_of_human_performance:the_range_of_human_intelligence)

Acknowledgements
================

Daniel Filan was the primary author of the curriculum (to the extent that it differed from [the Winter 2023-24 curriculum](https://www.lesswrong.com/posts/JsjJuikJsidkyfhyr/mats-ai-safety-strategy-curriculum)) and coordinated the discussion groups. Ryan Kidd scoped, managed, and edited the project. Many thanks to the MATS alumni and other community members who helped as facilitators and to the scholars who showed up and had great discussions!