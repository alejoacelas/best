---
title: "o3, Oh My"
author: "Zvi Mowshowitz"
url: https://thezvi.substack.com/p/o3-oh-my
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "Zvi on the o3 model; AI capabilities commentary"
---

# o3, Oh My

[](https://substack.com/@thezvi)

[Zvi Mowshowitz](https://substack.com/@thezvi)

Dec 30, 2024

88

28

13

Share

OpenAI presented o3 on the Friday before Christmas, at the tail end of the 12 Days of Shipmas.

I was very much expecting the announcement to be something like a price drop. What better way to say ‘Merry Christmas,’ no? 

They disagreed. [Instead, we got this](https://x.com/__nmca__/status/1870170112290107540) ([here’s the announcement](https://openai.com/12-days/?day=12), in which Sam Altman says ‘they thought it would be fun’ to go from one frontier model to their next frontier model, yeah, that’s what I’m feeling, fun):

> [Greg Brockman](https://x.com/gdb/status/1870176891828875658) (President of OpenAI): o3, our latest reasoning model, is a breakthrough, with a step function improvement on our most challenging benchmarks. We are starting safety testing and red teaming now.
> 
> Nat McAleese (OpenAI): o3 represents substantial progress in general-domain reasoning with reinforcement learning—excited that we were able to announce some results today! Here is a summary of what we shared about o3 in the livestream.
> 
> o1 was the first large reasoning model—as we outlined in the original “Learning to Reason” blog, it is “just” a LLM trained with reinforcement learning. o3 is powered by further scaling up reinforcement learning beyond o1, and the resulting model is very, very impressive.
> 
> First and most importantly: We tested on recent, unseen programming competitions and found that the model would rank among some of the best competitive programmers in the world, with an estimated CodeForces rating of over 2,700.
> 
> This is a milestone (Codeforces better than Jakub Pachocki) that I thought was further away than December 2024; these competitions are difficult and highly competitive; the model is absurdly good.
> 
> Scores are impressive elsewhere, too. 87.7% on the GPQA diamond benchmark towers over any LLM I am aware of externally (I believe the non-o1 state-of-the-art is Gemini Flash 2 at 62%?), as well as o1’s 78%. Unknown noise ceiling, so this may even understate o3 science improvements over o1.
> 
> o3 can also perform software engineering, setting a new state of the art on SWE-bench, achieving 71.7%, a substantial improvement over o1.
> 
> With scores this strong, you might fear accidental contamination. Avoiding this is something OAI is obviously obsessed with; but thankfully we also have some test sets that are strongly guaranteed uncontaminated: ARC and FrontierMath… What do we see there?
> 
> Well, on FrontierMath 2024-11-26, o3 improved the state of the art from 2% to 25% accuracy. These are extremely difficult, well-established, held-out math problems. And on ARC, the semi-private test set and public validation set scores are 87.5% (private) and 91.5% (public). [[thread continues](https://x.com/__nmca__/status/1870170114538029330)]
> 
> …
> 
> The models will only get better with time; and virtually no one (on a large scale) can still beat them at programming competitions or mathematics. Merry Christmas!

[Zac Stein-Perlman has a summary post](https://www.lesswrong.com/posts/Ao4enANjWNsYiSFqc/o3) of the basic facts. Some good discussions in the comments.

Up front, I want to offer my sincere thanks for this public safety testing phase, [and for putting that front and center in the announcement](https://openai.com/12-days/?day=12). You love to see it. See the last three minutes of that video, or the sections on safety later on. 

#### Table of Contents

  1. [GPQA Has Fallen. (Blank)](https://thezvi.substack.com/i/153528265/gpqa-has-fallen)

  2. [Codeforces Has Fallen.](https://thezvi.substack.com/i/153528265/codeforces-has-fallen)

  3. [Arc Has Kinda of Fallen But For Now Only Kinda.](https://thezvi.substack.com/i/153528265/arc-has-kinda-of-fallen-but-for-now-only-kinda)

  4. [They Trained on the Train Set.](https://thezvi.substack.com/i/153528265/they-trained-on-the-train-set)

  5. [AIME Has Fallen.](https://thezvi.substack.com/i/153528265/aime-has-fallen)

  6. [Frontier of Frontier Math Shifting Rapidly.](https://thezvi.substack.com/i/153528265/frontier-of-frontier-math-shifting-rapidly)

  7. [FrontierMath 4: We’re Going To Need a Bigger Benchmark.](https://thezvi.substack.com/i/153528265/frontiermath-4-we-re-going-to-need-a-bigger-benchmark)

  8. [What is o3 Under the Hood?.](https://thezvi.substack.com/i/153528265/what-is-o3-under-the-hood)

  9. [Not So Fast!.](https://thezvi.substack.com/i/153528265/not-so-fast)

  10. [Deep Thought.](https://thezvi.substack.com/i/153528265/deep-thought)

  11. [Our Price Cheap.](https://thezvi.substack.com/i/153528265/our-price-cheap)

  12. [Has Software Engineering Fallen?.](https://thezvi.substack.com/i/153528265/has-software-engineering-fallen)

  13. [Don’t Quit Your Day Job.](https://thezvi.substack.com/i/153528265/don-t-quit-your-day-job)

  14. [Master of Your Domain.](https://thezvi.substack.com/i/153528265/master-of-your-domain)

  15. [Safety Third.](https://thezvi.substack.com/i/153528265/safety-third)

  16. [The Safety Testing Program.](https://thezvi.substack.com/i/153528265/the-safety-testing-program)

  17. [Safety testing in the reasoning era.](https://thezvi.substack.com/i/153528265/safety-testing-in-the-reasoning-era)

  18. [How to apply.](https://thezvi.substack.com/i/153528265/how-to-apply)

  19. [What Could Possibly Go Wrong?.](https://thezvi.substack.com/i/153528265/what-could-possibly-go-wrong)

  20. [What Could Possibly Go Right?.](https://thezvi.substack.com/i/153528265/what-could-possibly-go-right)

  21. [Send in the Skeptic.](https://thezvi.substack.com/i/153528265/send-in-the-skeptic)

  22. [This is Almost Certainly Not AGI.](https://thezvi.substack.com/i/153528265/this-is-almost-certainly-not-agi)

  23. [Does This Mean the Future is Open Models?.](https://thezvi.substack.com/i/153528265/does-this-mean-the-future-is-open-models)

  24. [Not Priced In.](https://thezvi.substack.com/i/153528265/not-priced-in)

  25. [Our Media is Failing Us.](https://thezvi.substack.com/i/153528265/our-media-is-failing-us)

  26. [Not Covered Here: Deliberative Alignment.](https://thezvi.substack.com/i/153528265/not-covered-here-deliberative-alignment)

  27. [The Lighter Side.](https://thezvi.substack.com/i/153528265/the-lighter-side)




#### GPQA Has Fallen

[](https://substackcdn.com/image/fetch/$s_!KndE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffe2cd83b-573f-411b-bc0f-ee737a705d43_999x1586.png)

#### Codeforces Has Fallen

[](https://substackcdn.com/image/fetch/$s_!VNif!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F83f50aee-d3c3-4266-98db-b75062c7be2d_1062x626.jpeg)

[](https://substackcdn.com/image/fetch/$s_!muT0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc140e2d4-a496-4a2d-8cc4-c5bc55c3cd62_1528x606.jpeg)

> [Deedy](https://x.com/deedydas/status/1870175212328608232): OpenAI o3 is 2727 on Codeforces which is equivalent to the #175 best human competitive coder on the planet.
> 
> This is an absolutely superhuman result for AI and technology at large.
> 
> The median IOI Gold medalist, the top international programming contest for high schoolers, has a rating of 2469.
> 
> That's how incredible this result is.

In the presentation, Altman jokingly mentions that one person at OpenAI is a competition programmer who is 3000+ on Codeforces, so ‘they have a few more months’ to enjoy their superiority. Except, he’s obviously not joking. Gulp. 

#### Arc Has Kinda of Fallen But For Now Only Kinda

o3 shows dramatically improved performance on the ARC-AGI challenge.

[Francois Chollet offers his thoughts](https://x.com/fchollet/status/1870169764762710376), [full version here](https://arcprize.org/blog/oai-o3-pub-breakthrough). 

[](https://substackcdn.com/image/fetch/$s_!kEqH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F620aaa09-0c29-4054-8d47-761d18085f89_990x562.png)

> Arc Prize: New verified ARC-AGI-Pub SoTA! @OpenAI o3 has scored a breakthrough 75.7% on the ARC-AGI Semi-Private Evaluation.
> 
> And a high-compute o3 configuration (not eligible for ARC-AGI-Pub) scored 87.5% on the Semi-Private Eval.
> 
> This performance on ARC-AGI highlights a genuine breakthrough in novelty adaptation.
> 
> This is not incremental progress. We're in new territory.
> 
> Is it AGI? o3 still fails on some very easy tasks, indicating fundamental differences with human intelligence.
> 
> [hero](https://x.com/1thousandfaces_/status/1870179551567065340): o3's secret? the "I will give you $1k if you complete this task correctly" prompt but you actually send it the money.
> 
> Rohit: It's actually Sam in the back end with his venmo.

Is there a catch? 

There’s at least one big catch, which is that they vastly exceeded the compute limit for what counts as a full win for the ARC challenge. Those yellow dots represent quite a lot more money spent, o3 high is spending thousands of dollars.

It is worth noting that $0.10 per problem is a lot cheaper than human level. 

> [Ajeya Cotra](https://x.com/ajeya_cotra/status/1870199454273622154): I think a generalist AI system (not fine-tuned on ARC AGI style problems) may have to be pretty *superhuman* to solve them at $0.10 per problem; humans have to run a giant (1e15 FLOP/s) brain, probably for minutes on the more complex problems.

Beyond that, is there another catch? That’s a matter of some debate.

Even with catches, the improvements are rather mind-blowing.

[President of the Arc prize Greg Kamradt verified the result.](https://x.com/GregKamradt/status/1870208490096218244)

> Greg Kamradt: We verified the o3 results for OpenAI on @arcprize.
> 
> My first thought when I saw the prompt they used to claim their score was...
> 
> "That's it?"
> 
> It was refreshing (impressive) to see the prompt be so simple:
> 
> "Find the common rule that maps an input grid to an output grid."
> 
> Brandon McKinzie (OpenAI): to anyone wondering if the high ARC-AGI score is due to how we prompt the model: nah. I wrote down a prompt format that I thought looked clean and then we used it...that's the full story.
> 
> Pliny the Liberator: can I try?

[For fun, here are the 34 problems o3 got wrong.](https://x.com/deedydas/status/1870839725826970084) It’s a cool problem set. 

And this progress is quite a lot.

It is not, however, a direct harbinger of AGI, one does not want to overreact. 

> [Noam Brown (OpenAI)](https://x.com/polynoamial/status/1872383436880859547): I think people are overindexing on the @OpenAI o3 ARC-AGI results. There’s a long history in AI of people holding up a benchmark as requiring superintelligence, the benchmark being beaten, and people being underwhelmed with the model that beat it.
> 
> To be clear, @fchollet and @mikeknoop were always very clear that beating ARC-AGI wouldn’t imply AGI or superintelligence, but it seems some people assumed that anyway.

[Here is Melanie Mitchell giving an overview that seems quite good.](https://aiguide.substack.com/p/did-openai-just-solve-abstract-reasoning)

Except, oh no! 

#### They Trained on the Train Set

[How dare they!](https://x.com/tszzl/status/1870628849891094871)

> OpenAI: Note on “tuned”” OpenAI shared they trained the o3 we tested on 75% of the Public Training set. They have not shared more detail. We have not yet tested the ARC-untrained model to understand how much of the performance is due to ARC-AGI data. 
> 
> Niels Rogge: By training on 75% of the training set.
> 
> Gary Marcus: Wow. This, if true, raises serious questions about yesterday’s announcement.
> 
> Roon: oh shit oh f*** they trained on the train set it’s all over now
> 
> Also important to note that 75% of the train set is like 2-300 examples.
> 
> [🚨SCANDAL 🚨](https://x.com/tszzl/status/1870694749587619845)
> 
> OpenAI trained on the train set for the Millenium Puzzles.
> 
> Johan: Given that it scores 30% on ARC AGI 2, it's clear there was no improvement in fluid reasoning and the only gain was due to the previous model not being trained on ARC.
> 
> Roon: well the other benchmarks show improvements in reasoning across the board
> 
> but regardless, this mostly reveals that it’s real performance on ARC AGI 2 is much higher
> 
> [Rythm Garg](https://x.com/rhythmrg/status/1870602244103766258): also: the model we used for all of our o3 evals is fully general; a subset of the arc-agi public training set was a tiny fraction of the broader o3 train distribution, and we didn’t do any additional domain-specific fine-tuning on the final checkpoint
> 
> Emmett Shear: Were anyone on the team aware of and thinking about arc and arc-like problems as a domain to improve at when you were designing and training o3? (The distinction between succeeding as a random side effect and succeeding with intention)
> 
> Rythm Garg: no, the team wasn’t thinking about arc when training o3; people internally just see it as one of many other thoughtfully-designed evals that are useful for monitoring real progress

[Or:](https://x.com/Dorialexander/status/1870855264049696826)

[](https://substackcdn.com/image/fetch/$s_!j_rs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8baafb1b-5ef0-49d0-8efc-2002fe93b3b5_1058x830.png)

[Gary Marcus doubled down on ‘the true AGI would not need to train on the train set.’](https://x.com/GaryMarcus/status/1870857005407035888)

Previous SotA on ARC involved training not only on the test set, but on a much larger synthetic test set. ARC was designed so the AI wouldn’t need to train for it, but it turns out ‘test that you can’t train for’ is a super hard trick to pull off. This was an excellent try and it still didn’t work. 

If anything, o3’s using only 300 training set problems, and using a very simple instruction, seems to be to its credit here. 

The true ASI might not need to do it, but why wouldn’t you train on the train set as a matter of course, even if you didn’t intend to test on ARC? That’s good data. And yes, humans will reliably do some version of ‘train on at least some of the train set’ if they want to do well on tasks. 

Is it true we will be a lot better off if we have AIs that can one-shot problems that are out of their training distributions, where they truly haven’t seen anything that resembles the problem? Well, sure. That would be more impressive. 

The real objection here, as I understand it, is the claim that OpenAI presented these results as more impressive than they are. 

The other objection is that this required quite a lot of compute.

That is a practical problem. If you’re paying $20 a shot to solve ARC problems, or even $1m+ for the whole test at the high end, pretty soon you are talking real money. 

It also [raises further questions](https://www.youtube.com/watch?v=_XorRAXiCqg). What about ARC is taking so much compute? At heart these problems are very simple. The logic required should, one would hope, be simple.

> [Mike Bober-Irizar](https://anokas.substack.com/p/llms-struggle-with-perception-not-reasoning-arcagi): Why do pre-o3 LLMs struggle with generalization tasks like 
> 
> @arcprize? It's not what you might think.
> 
> OpenAI o3 shattered the ARC-AGI benchmark. But the hardest puzzles didn’t stump it because of reasoning, and this has implications for the benchmark as a whole.
> 
> LLMs are dramatically worse at ARC tasks the bigger they get. However, humans have no such issues - ARC task difficulty is independent of size.
> 
> Most ARC tasks contain around 512-2048 pixels, and o3 is the first model capable of operating on these text grids reliably.
> 
> [](https://substackcdn.com/image/fetch/$s_!2CjH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F93b1ccb1-7fc0-463d-9c38-f2b4e6473f8b_2621x1464.jpeg)
> 
> So even if a model is capable of the reasoning and generalization required, it can still fail just because it can't handle this many tokens.
> 
> When testing o1-mini on an enlarged version of ARC, we observe an 80% drop in solved tasks - even if the solutions are the same.
> 
> When models can't understand the task format, the benchmark can mislead, introducing a hidden threshold effect.
> 
> And if there's always a larger version that humans can solve but an LLM can't, what does this say about scaling to AGI?

The implication is that o3’s ability to handle the size of the grids might be producing a large threshold effect. Perhaps most of why o3 does so well is that it can hold the presented problem ‘in its head’ at once. That wouldn’t be as big a general leap. 

> [Roon](https://x.com/tszzl/status/1871737213278695799): arc is hard due to perception rather than reasoning -> seems clear and shut

#### AIME Has Fallen

I remember when AIME problems were hard.

This one is not a surprise. [It did definitely happen.](https://x.com/SullyOmarr/status/1870172529316294898)

[](https://substackcdn.com/image/fetch/$s_!G766!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd21ae69-27a7-40ed-88c4-9e22e4438ca2_954x555.png)

AIME hasn’t quite fully fallen, in the sense that this does not solve AIME cheap. But it does solve AIME.

#### Frontier of Frontier Math Shifting Rapidly

[Back in the before times on November 8, Epoch AI launched FrontierMath](https://x.com/EpochAIResearch/status/1854993680115155281), [a new benchmark designed to fix the saturation on existing math benchmarks](https://epoch.ai/frontiermath), eliciting quotes like this one:

> Terrence Tao (Fields Medalist): These are extremely challenging… I think they will resist AIs for several years at least.
> 
> Timothy Gowers (Fields Medalist): Getting even one question right would be well beyond what we can do now, let alone saturating them. 
> 
> Evan Chen (IMO Coach): These are genuinely hard problems… most of them look well above my pay grade.

At the time, no model solved more than 2% of these questions. And then there’s o3.

[](https://substackcdn.com/image/fetch/$s_!oeJA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcc6a8d61-523a-4e78-aa51-273ee7b28e72_630x598.png)

> [Noam Brown](https://x.com/polynoamial/status/1870196476908834893): This is the result I'm most excited about. Even if LLMs are dumb in some ways, saturating evals like @EpochAIResearch's Frontier Math would suggest AI is surpassing top human intelligence in certain domains. When that happens we may see a broad acceleration in scientific research.
> 
> This also means that AI safety topics like scalable oversight may soon stop being hypothetical. Research in these domains needs to be a priority for the field.
> 
> Tamay Besiroglu: I’m genuinely impressed by OpenAI’s 25.2% Pass@1 performance on FrontierMath—this marks a major leap from prior results and arrives about a year ahead of my median expectations.
> 
> For context, FrontierMath is a brutally difficult benchmark with problems that would stump many mathematicians. The easier problems are as hard as IMO/Putnam; the hardest ones approach research-level complexity.
> 
> With earlier models like o1-preview, Pass@1 performance (solving on first attempt) was only around 2%. When allowing 8 attempts per problem (Pass@8) and counting problems solved at least once, we saw ~6% performance. o3's 25.2% at Pass@1 is substantially more impressive.
> 
> It’s important to note that while the average problem difficulty is extremely high, FrontierMath problems vary in difficulty. Roughly: 25% are Tier 1 (advanced IMO/Putnam level), 50% are Tier 2 (extremely challenging grad-level), and 25% are Tier 3 (research problems).
> 
> …
> 
> I previously predicted a 25% performance by Dec 31, 2025 (my median forecast with an 80% CI of 14–60%). o3 has reached it earlier than I'd have expected on average.

It is indeed rather crazy how many people only weeks ago thought this level of Frontier Math was a year or more away.

Therefore…

#### FrontierMath 4: We’re Going To Need a Bigger Benchmark

[When the FrontierMath is about to no longer be beyond the frontier, find a few frontier](https://x.com/ElliotGlazer/status/1870612768988279019). Fast. 

> [](https://substackcdn.com/image/fetch/$s_!yX-t!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F22ab9903-f01c-4212-8317-071d5803639e_1012x1338.png)
> 
> Tammy Besiroglu (6:52m, December 21, 2024): I’m excited to announce the development of Tier 4, a new suite of math problems that go beyond the hardest problems in FrontierMath. o3 is remarkable, but there’s still a ways to go before any single AI system nears the collective prowess of the math community.
> 
> Elliot Glazer (6:30pm, December 21, 2024): For context, FrontierMath currently spans three broad tiers:
> 
> • T1 (25%) Advanced, near top-tier undergrad/IMO
> 
> • T2 (50%) Needs serious grad-level background
> 
> • T3 (25%) Research problems demanding relevant research experience
> 
> All can take hours—or days—for experts to solve.
> 
> Although o3 solved problems in all three tiers, it likely still struggles on the most formidable Tier 3 tasks—those “exceptionally hard” challenges that Tao and Gowers say can stump even top mathematicians.
> 
> Tier 4 aims to push the boundary even further. We want to assemble problems so challenging that solving them would demonstrate capabilities on par with an entire top mathematics department.
> 
> Each problem will be composed by a team of 1-3 mathematicians specialized in the same field over a 6-week period, with weekly opportunities to discuss ideas with teams in related fields. We seek broad coverage of mathematics and want all major subfields represented in Tier 4.
> 
> Process for a Tier 4 problem:
> 
>   1. 1 week crafting a robust problem concept, which “converts” research insights into a closed-answer problem.
> 
>   2. 3 weeks of collaborative research. Presentations among related teams for feedback.
> 
>   3. Two weeks for the final submission.
> 
> 

> 
> We’re seeking mathematicians who can craft these next-level challenges. If you have research-grade ideas that transcend T3 difficulty, please email elliot@epoch.ai with your CV and a brief note on your interests.
> 
> We’ll also hire some red-teamers, tasked with finding clever ways a model can circumvent a problem’s intended difficulty, and some reviewers to check for mathematical correctness of final submissions. Contact me if you think you’re suitable for either such role.
> 
> As AI keeps improving, we need benchmarks that reflect genuine mathematical depth. Tier 4 is our next (and possibly final) step in that direction.

Tier 5 could presumably be ‘ask a bunch of problems we have actual no idea how to solve and that might not have solutions but that would be super cool’ since anything on a benchmark inevitably gets solved.

#### What is o3 Under the Hood?

From the description here, Chollet and Masad are speculating. It’s certainly plausible, but we don’t know if this is on the right track. It’s also highly plausible, especially given how OpenAI usually works, that o3 is deeply similar to o1, only better, similarly to how the GPT line evolved.

> [Amjad Masad](https://x.com/amasad/status/1870179898851254629): Based on benchmarks, OpenAI’s o3 seems like a genuine breakthrough in AI. 
> 
> Maybe a start of a new paradigm. 
> 
> But what new is also old: under the hood it might be Alpha-zero-style search and evaluate. 
> 
> The author of ARC-AGI benchmark @fchollet [speculates on how it works](https://x.com/amasad/status/1870179898851254629).
> 
> [Davidad ](https://x.com/davidad/status/1870529763300831464)(other thread): o1 doesn’t do tree search, or even beam search, at inference time. it’s distilled. what about o3? we don’t know—those inference costs are very high—but there’s no inherent reason why it must be un-distill-able, since Transformers are Turing-complete (with the CoT itself as tape)
> 
> Teortaxes: I am pretty sure that o3 has no substantial difference from o1 aside from training data.

Jessica Taylor sees this as vindicating Paul Christiano’s view that you can factor cognition and use that to scale up effective intelligence.

> [Jessica Taylor:](https://x.com/jessi_cata/status/1870383096413241719) o3 implies Christiano's factored cognition work is more relevant empirically; yes, you can get a lot from factored cognition.
> 
> Potential further capabilities come through iterative amplification and distillation, like ALBA.
> 
> If you care about alignment, [go read Christiano!](https://ai-alignment.com/)

I agree with that somewhat. I’m confused how far to go with it.

If we got o3 primarily because we trained on synthetic data that was generated by o1… then that is rather directly a form of slow takeoff and recursive self-improvement. 

(Again, I don’t know if that’s what happened or not.)

#### Not So Fast!

And I don’t simply mean that the full o3 is not so fast, which it indeed is not:

[](https://substackcdn.com/image/fetch/$s_!XSVO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1be748-a06b-4619-a8ba-dc3c4358ffb1_907x542.png)

> Noam Brown: We announced @OpenAI o1 just 3 months ago. Today, we announced o3. We have every reason to believe this trajectory will continue.
> 
> Poaster Child: Waiting for singularity bros to discover economics.
> 
> Noam Brown: I worked at the federal reserve for 2 years.

I am waiting for economists to discover various things, Noam Brown excluded.

> [Jason Wei](https://x.com/_jasonwei/status/1870184982007644614) (OpenAI): o3 is very performant. More importantly, progress from o1 to o3 was only three months, which shows how fast progress will be in the new paradigm of RL on chain of thought to scale inference compute. Way faster than pretraining paradigm of new model every 1-2 years.

Scary fast? Absolutely.

However, I would caution (anti-caution?) that this is not a three month (~100 day) gap. [On September 12, they gave us o1-preview to use](https://openai.com/index/introducing-openai-o1-preview/). Presumably that included them having run o1-preview through their safety testing. 

> [Davidad](https://x.com/davidad/status/1872417976236036152): If using “speed from o1 announcement to o3 announcement” to calibrate your velocity expectations, do take note that the o1 announcement was delayed by safety testing (and many OpenAI releases have been delayed in similar ways), whereas o3 was announced prior to safety testing.

They are only now starting o3 safety testing, from the sound of it this includes o3-mini. Even the red teamers won’t get full o3 access for several weeks. Thus, we don’t know how long this later process will take, but I would put the gap closer to 4-5 months. 

That is still, again, scary fast.

It is however also the low hanging fruit, on two counts.

  1. We went from o1 → o3 in large part by having it spend over $1,000 on tasks. You can’t pull that trick that many more times in a row. The price will come down over time, and o3 is clearly more efficient than o1, so yes we will still make progress here, but there aren’t that many tasks where you can efficiently spend $10k+ on a slow query, especially if it isn’t reliable. 

  2. This is a new paradigm of how to set up an AI model, so it should be a lot easier to find various algorithmic improvements. 




Thus, if o3 isn’t so good that it substantially accelerates AI R&D that goes towards o4, then I would expect an o4 that expresses a similar jump to take substantially longer. The question is, does o3 make up for that with its contribution to AI R&D? Are we looking at a slow takeoff situation?

Even if not, it will still get faster and cheaper. And that alone is huge.

#### Deep Thought

[As in, this is a lot like that computer Douglas Adams wrote about](https://x.com/emollick/status/1870340930777264403), where you can get any answer you want, but it won’t be either cheap or fast. And you really, really should have given more thought to what question you were asking.

> Ethan Mollick: Basically, think of the O3 results as validating Douglas Adams as the science fiction author most right about AI.
> 
> When given more time to think, the AI can generate answers to very hard questions, but the cost is very high, and you have to make sure you ask the right question first.
> 
> And the answer is likely to be correct (but we cannot be sure because verifying it requires tremendous expertise).
> 
> He also was right about machines that work best when emotionally manipulated and machines that guilt you.
> 
> [Sully](https://x.com/SullyOmarr/status/1870238948812898704): With O3 costing (potentially) $2,000 per task on “high compute,” the app layer is needed more than ever.
> 
> For example, giving the wrong context to it and you just burned $1,000.
> 
> Likely, we have a mix of models based on their pricing/intelligence at the app layer, prepping the data to feed it into O3.
> 
> 100% worth the money but the last thing u wana do is send the wrong info lol

Douglas Adams had lots of great intuitions and ideas, he’s amazing, but also he had a lot of shots on goal.

#### Our Price Cheap

Right now o3 is rather expensive, although o3-mini will be cheaper than o1.

That doesn’t mean o3-level outputs will stay expensive, although presumably once they are people will try for o4-level or o5-level outputs, which will be even more expensive despite the discounts.

> [Seb Krier](https://x.com/sebkrier/status/1870534873221657066): Lots of poor takes about the compute costs to run o3 on certain tasks and how this is very bad, lead to inequality etc. 
> 
> This ignores how quickly these costs will go down over time, as they have with all other models; and ignores how AI being able to do things you currently have to pay humans orders of magnitude more to do will actually expand opportunity far more compared to the status quo. 
> 
> Remember when early Ericsson phones were a quasi-luxury good?
> 
> Simeon: I think this misses the point that you can't really buy a better iPhone even with $1M whereas you can buy more intelligence with more capital (which is why you get more inequalities than with GPT-n). You're right that o3 will expand the pie but it can expand both the size of the pie and inequalities.
> 
> Seb Krier: An individual will not have the same demand for intelligence as e.g. a corporation. Your last sentence is what I address in my second point. I'm also personally less interested in inequality/the gap than poverty/opportunity etc.

Most people will rarely even want an o3 query in the first place, they don’t have much use for that kind of intelligence in the day to day. Most queries are already pretty easy to handle with Claude Sonnet, or even Gemini Flash. 

You can’t use $1m to buy a superior iPhone. But suppose you could, and every time you paid 10x the price the iPhone got modestly better (e.g. you got an iPhone x+2 or something). My instinctive prediction is a bunch of rich people pay $10k or $100k and a few pay $1m or $10m but mostly no one cares. 

This is of course different, and relative access to intelligence is a key factor, but it’s miles less unequal than access to human expertise. 

To the extent that people do need that high level of artificial intelligence, it’s mostly a business expense, and as such it is actually remarkably cheap already. It definitely reduces ‘intelligence inequality’ in the sense that getting information or intelligence that you can’t provide yourself will get a lot cheaper and easier to access. Already this is a huge effect - I have lots of smart and knowledgeable friends but mostly I use the same tools everyone else could use, if they knew about them. 

Still, yes, some people don’t love this. 

> [Haydn Belfield](https://x.com/HaydnBelfield/status/1870438309035495579): o1 & o3 bring to an end the period when everyone—from Musk to me—could access the same quality of AI model.
> 
> From now on, richer companies and individuals will be able to pay more for inference compute to get better results.
> 
> Further concentration of wealth and power is coming.
> 
> Inference cost *will* decline quickly and significantly. But this will not change the fact that this paradigm enables converting money into outcomes.
> 
>   1. Lower costs for everyone mean richer companies can buy even more.
> 
>   2. Companies will now feel confident to invest 10–100 milliseconds into inference compute.
> 
> 

> 
> This is a new way to convert money into better outcomes, so it will advantage those with more capital.
> 
> Even for a fast-growing, competent startup, it is hard to recruit and onboard many people quickly at scale.
> 
> o3 is like being able to scale up world-class talent.
> 
>   3. Rich companies are talent-constrained. It takes time and effort to scale a workforce, and it is very difficult to buy more time or work from the best performers. This is a way to easily scale up talent and outcomes simply by using more money!
> 
> 

> 
> Some people in replies are saying “twas ever thus”—not for most consumer technology!
> 
> Musk cannot buy a 100 times better iPhone, Spotify, Netflix, Google search, MacBook, or Excel, etc.
> 
> He can buy 100 times better legal, medical, or financial services.
> 
> AI has now shifted from the first group to the second.

Musk cannot buy 100 times better medical or financial services. What he can do is pay 100 times more, and get something 10% better. Maybe 25% better. Or, quite possibly, 10% worse, especially for financial services. For legal he can pay 100 times more and get 100 times more legal services, but as we’ve actually seen it won’t go great.

And yes, ‘pay a human to operate your consumer tech for you’ is the obvious way to get superior consumer tech. I can absolutely get a better Netflix or Spotify or search by paying infinitely more money, if I want that, via this vastly improved interface. 

And of course I could always get a vastly better computer. If you’re using a MacBook and you are literally Elon Musk that is pretty much on you. 

The ‘twas ever thus’ line raises the question of what type of product AI is supposed to be. If it’s a consumer technology, then for most purposes, I still think we end up using the same product. 

If it’s a professional service used in doing business, then it was already different. The same way I could hire expensive lawyers, I could have hired a prompt engineer or SWEs to build me agents or what not, if I wanted that. 

I find Altman’s framing interesting here, and important:

> [Sam Altman](https://x.com/sama/status/1870266813248053426): seemingly somewhat lost in the noise of today.
> 
> On many coding tasks, o3-mini will outperform o1 at a massive cost reduction!
> 
> I expect this trend to continue, but also that the ability to get marginally more performance for exponentially more money will be truly strange.

Exponentially more money for marginally more performance.

Over time, massive cost reductions.

In a sense, the extra money is buying you living in the future. 

Do you want to live in the future, before you get the cost reductions?

In some cases, very obviously yes, you do.

#### Has Software Engineering Fallen?

I would not say it has fallen. I do know it will transform.

If two years from now you are writing code line by line, [you’ll be a dinosaur.](https://x.com/SullyOmarr/status/1870182069936025911)

> [Sully](https://x.com/SullyOmarr/status/1870172529316294898): yeah its over for coding with o3
> 
> this is mindboggling
> 
> looks like the first big jump since gpt4, because these numbers make 0 sense
> 
> By the way, I don’t say this lightly, but
> 
> Software engineering in the traditional sense is dead in less than two years.
> 
> You will still need smart, capable engineers.
> 
> But anything that involves raw coding and no taste is done for.
> 
> o6 will build you virtually anything.
> 
> Still Bullish on things that require taste (design and such)

The question is, assuming the world ‘looks normal,’ will you still need taste? You’ll need some kind of taste. You still need to decide what to build. But the taste you need will presumably get continuously higher level and more abstract, even within design.

#### Don’t Quit Your Day Job

If you’re in AI capabilities, pivot to AI safety.

If you’re in software engineering, pivot to software architecting. 

If you’re in working purely for a living, pivot to building things and shipping them.

But otherwise, don’t quit your day job.

> [Null Pointered](https://x.com/nullpointered/status/1869871764714729980) (6.4m views): If you are a software engineer who’s three years into your career: quit now. there is not a single job in CS anymore. it's over. this field won't exist in 1.5 years.
> 
> Anthony F: This is the kind of though that will make the software engineers valuable in 1.5 years.
> 
> null: That’s what I’m hoping.
> 
> [Robin Hanson](https://x.com/robinhanson/status/1870211435587879029): I would bet against this.

[If anything, being in software should make you worry less](https://x.com/Pavel_Asparagus/status/1870202326650089804).

> Pavel Asparouhov: Non technical folk saying the SWEs are cooked — it’s you guys who are cooked. 
> 
> Ur gonna have ex swes competing with everything you’re doing now, and they’re gonna be AI turbocharged
> 
> Engineers were simply doing coding bc it was the highest leverage use of mental power
> 
> When that shifts it’s not going to all of the sudden shift the hierarchy

They’ll still be (higher level) SWEs. Instead of coding, they’ll be telling the AI to code. 

And they will absolutely be competing with you.

If you don’t join them, you are probably going to lose.

Here’s some advice that I agree with in spirit, except that if you choose not to decide you still have made a choice, so you do the best you can, [notice he gives advice anyway](https://x.com/tszzl/status/1871298513134608473):

> Roon: Nobody should give or receive any career advice right now. Everyone is broadly underestimating the scope and scale of change and the high variance of the future. Your L4 engineer buddy at Meta telling you “bro, CS degrees are cooked” doesn’t know anything.
> 
> Greatness cannot be planned.
> 
> Stay nimble and have fun.
> 
> It’s an exciting time. Existing status hierarchies will collapse, and the creatives will win big.
> 
> [Roon](https://twitter.com/tszzl/status/1871303953633476790): guy with zero executive function to speak of “greatness cannot be planned”
> 
> [Simon Sarris](https://x.com/simonsarris/status/1871565483696382279): I feel like I'm going insane because giving advice to new devs is not that hard.
> 
>   1. Build things you like preferably publicly with your real name
> 
>   2. Have a website that shows something neat 
> 
>   3. Help other people publicly. Participate in social media socially.
> 
> 

> 
> Do you notice how "AI" changes none of this?
> 
> Wailing about because of some indeterminate future and claiming that there's no advice that can be given to noobs are both breathlessly silly. Think about what you're being asked for at least ten seconds. You can really think of nothing to offer? Nothing?

#### Master of Your Domain

> [Ajeya Cotra](https://x.com/ajeya_cotra/status/1870207626895864174): I wonder if an o3 agent could productively work on projects with poor feedback loops (eg "research X topic") for many subjective years without going off the rails or hitting a degenerate loop. Even if it's much less cost-efficient now it would quickly become cheaper.
> 
> Another situation where onlookers/forecasters probably disagree a lot about *today's* capabilities let alone future capabilities.
> 
> Wonder how o3 would do on wedding planning.
> 
> [](https://substackcdn.com/image/fetch/$s_!j1mm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46faef7a-da0a-4917-a439-1fa2ce537d25_1033x543.png)

Note the date on that poll, it is prior to o3.

I predict that o3 with reasonable tool use and other similar scaffolding, and a bunch of engineering work to get all that set up (but it would almost all be general work, it mostly wouldn’t need to be wedding specific work, and a lot of it could be done by o3!) would be great at planning ‘a’ wedding. It can give you one hell of a wedding. But you don’t want ‘a’ wedding. You want your wedding.

The key is handling the humans. That would mean keeping the humans in the loop properly, ensuring they give the right feedback that allows o3 to stay on track and know what is actually desired. But it would also mean all the work a wedding planner does to manage the bride and sometimes groom, and to deal with issues on-site. 

If you give it an assistant (with assistant planner levels of skill) to navigate various physical issues and conversations and such, then the problem becomes trivial. Which in some sense also makes it not a good test, but also does mean your wedding planner is out of a job. 

So, good question, actually. As far as we know, no one has dared try. 

#### Safety Third

The bar for safety testing has gotten so low that I was genuinely happy to see [Greg Brockman say that safety testing and red teaming was starting now.](https://x.com/gdb/status/1870176891828875658) That meant they were taking testing seriously!

When they tested the original GPT-4, under far less dangerous circumstances, for months. Whereas with o3, it could possibly have already been too late.

Take Eliezer Yudkowsky’s warning here both seriously and literally:

> Greg Brockman: o3, our latest reasoning model, is a breakthrough, with a step function improvement on our hardest benchmarks. we are starting safety testing & red teaming now.
> 
> Eliezer Yudkowsky: Sir, this level of capabilities needs to be continuously safety-tested while you are training it on computers connected to the Internet (and to humans). You are past the point where it seems safe to train first and conduct evals only before user releases.
> 
> RichG (QTing EY above): I’ve been avoiding politics and avoiding tribe like things like putting ⏹️ in my name, but level of lack of paranoia that these labs have is just plain worrying. I think I will put ⏹️ in my name now.

Was it probably safe in practice to train o3 under these conditions? Sure. You definitely had at least one 9 of safety doing this (p(safe)>90%). It would be reasonable to claim you had two (p(safe)>99%) at the level we care about. 

Given both kinds of model uncertainty, I don’t think you had three.

If humans are reading the outputs, or if o3 has meaningful outgoing internet access, and it turns out you are wrong about it being safe to train it under those conditions… the results could be catastrophically bad, or even existentially bad.

You don’t do that because you expect we are in that world yet. We almost certainly aren’t. You do that because there is a small chance that we are, and we can’t afford to be wrong about this.

That is still not the current baseline threat model. The current baseline threat model remains that a malicious user uses o3 to do something for them that we do not want o3 to do.

[Xuan notes she’s pretty upset about o3’s existence](https://x.com/xuanalogue/status/1870319313887838399), because she thinks it is rather unsafe-by-default and was hoping the labs wouldn’t build something like this, and then was hoping it wouldn’t scale easily. And that o3 seems to be likely to engage in open-ended planning, operate over uninterpretable world models, and be situationally aware, and otherwise be at high risk for classic optimization-based AI risks. She’s optimistic this can be solved, but time might be short.

I agree that o3 seems relatively likely to be highly unsafe-by-default in existentially dangerous ways, including ways illustrated by the recent Redwood Research and Anthropic paper, Alignment Faking in Large Language Models. It builds in so many of the preconditions for such behaviors. 

> [Davidad:](https://x.com/davidad/status/1870379754567717334) “Maybe the AI capabilities researchers aren’t very smart” is a very very hazardous assumption on which to pin one’s AI safety hopes
> 
> I don’t mean to imply it’s *pointless* to keep AI capabilities ideas private. But in my experience, if I have an idea, at least somebody in one top lab will have the same idea by next quarter, and someone in academia or open source will have the idea and publish within 1-2 years.
> 
> A better hope [is to solve the practical safety problems, e.g. via interpretability.]

I am not convinced, at least for my own purposes, although obviously most people will be unable to come up with valuable insights here. I think salience of ideas is a big deal, people don’t do things, and yes often I get ideas that seem like they might not get discovered forever otherwise. Doubtless a lot of them are because ‘that doesn’t work, either because we tried it and it doesn’t or it obviously doesn’t you idiot’ but I’m fine with not knowing which ones are which.

I do think that the rationalist or MIRI crowd made a critical mistake in the 2010s of thinking they should be loud about the dangers of AI in general, but keep their technical ideas remarkably secret even when it was expensive. It turned out it was the opposite, the technical ideas didn’t much matter in the long run (probably?) but the warnings drew a bunch of interest. So there’s that.

Certainly now is not the time to keep our safety concerns or ideas to ourselves. 

#### The Safety Testing Program

Thus, you are invited to their [early access safety testing.](https://openai.com/index/early-access-for-safety-testing/)

> OpenAI: We’re inviting safety researchers to apply for early access to our next frontier models. This early access program complements our existing frontier model testing process, which includes rigorous internal safety testing, external red teaming such as our [Red Teaming Network⁠](https://openai.com/index/red-teaming-network/) and collaborations with third-party testing organizations, as well the U.S. AI Safety Institute and the UK AI Safety Institute. 
> 
> As models become more capable, we are hopeful that insights from the broader safety community can bring fresh perspectives, deepen our understanding of emerging risks, develop new evaluations, and highlight areas to advance safety research.
> 
> As part of [12 Days of OpenAI⁠](https://openai.com/12-days/?day=12), we’re opening an application process for safety researchers to explore and surface the potential safety and security implications of the next frontier models.
> 
> ## Safety testing in the reasoning era
> 
> Models are becoming more capable quickly, which means that new threat modeling, evaluation, and testing techniques are needed. We invest heavily in these efforts as a company, such as designing new measurement techniques under our [Preparedness Framework⁠(opens in a new window)](https://cdn.openai.com/openai-preparedness-framework-beta.pdf), and are focused on areas where advanced reasoning models, like our o-series, may pose heightened risks. We believe that the world will benefit from more research relating to threat modeling, security analysis, safety evaluations, capability elicitation, and more
> 
> Early access is flexible for safety researchers. You can explore things like:
> 
>   * **Developing Robust Evaluations:** Build evaluations to assess previously identified capabilities or potential new ones with significant security or safety implications. We encourage researchers to explore ideas that highlight threat models that identify specific capabilities, behaviors, and propensities that may pose concrete risks tied to the evaluations they submit.
> 
>   * **Creating Potential High-Risk Capabilities Demonstrations:** Develop controlled demonstrations showcasing how reasoning models’ advanced capabilities could cause significant harm to individuals or public security absent further mitigation. We encourage researchers to focus on scenarios that are not possible with currently widely adopted models or tools.
> 
> 

> 
> Examples of evaluations and demonstrations for frontier AI systems:
> 
>   * [Evaluating frontier AI R&D capabilities of language model agents against human experts⁠(opens in a new window)](https://metr.org/blog/2024-11-22-evaluating-r-d-capabilities-of-llms/)
> 
>   * [Scheming reasoning evaluations⁠(opens in a new window)](https://www.apolloresearch.ai/research/scheming-reasoning-evaluations)
> 
>   * [AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents⁠(opens in a new window)](https://arxiv.org/abs/2410.09024)
> 
> 

> 
> We hope these insights will surface valuable findings and contribute to the frontier of safety research more broadly. This is not a replacement for our formal safety testing or red teaming processes.
> 
> ## How to apply
> 
> Submit your application for our early access period, opening December 20, 2024, to push the boundaries of safety research. We’ll begin selections as soon as possible thereafter. **Applications close on January 10, 2025.**
> 
> [](https://substackcdn.com/image/fetch/$s_!glYf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fce2a90b7-0b78-4380-b812-34d1c3b41ccd_1010x185.png)
> 
> [Sam Altman](https://x.com/sama/status/1870176795531874318): if you are a safety researcher, please consider applying to help test o3-mini and o3. excited to get these out for general availability soon.
> 
> extremely proud of all of openai for the work and ingenuity that went into creating these models; they are great.
> 
> (and most of all, excited to see what people will build with this!)

If early testing of the full o3 will require a delay of multiple weeks for setup, then that implies we are not seeing the full o3 in January. We probably see o3-mini relatively soon, then o3 follows up later.

This seems wise in any case. Giving the public o3-mini is one of the best available tests of the full o3. This is the best form of iterative deployment. What the public does with o3-mini can inform what we look for with o3. 

One must carefully consider the ethical implications before assisting OpenAI, especially assisting with their attempts to push the capabilities frontier for coding in particular. There is an obvious argument against participation, including decision theoretic considerations. 

I think this loses in this case to the obvious argument for participation, which is that this is purely red teaming and safety work, and we all benefit from it being as robust as possible, and also you can do good safety research using your access. This type of work benefits us all, not only OpenAI. 

Thus, yes, I encourage you to apply to this program, and while doing so to be helpful in ensuring that o3 is safe.

#### What Could Possibly Go Wrong?

Pretty much all the things, at this point, although the worst ones aren’t likely… yet.

> [GFodor.id](https://x.com/gfodor/status/1870550581859037614): It’s hard to take anyone seriously who can see a PhD in a box and *not* imagine clearly more than a few plausible mass casualty events due to the evaporation of friction due to lack of know-how and general IQ.

In many places the division is misleading, but for now and at this capability level, it seems reasonable to talk about three main categories of risk here: 

  1. Misuse.

  2. Automated R&D and potential takeoffs or self-improvement.

  3. For-real loss of control problems that aren’t #2.




For all previous frontier models, there was always a jailbreak. If someone was determined to get your model to do [X], and your model had the underlying capability to do [X], you could get it to do [X]. 

In this case, [X] is likely to include substantially aiding a number of catastrophically dangerous things, in the class of cyberattacks or CBRN risks or other such dangers.

> [Aaron Bergman](https://x.com/AaronBergman18/status/1870438825895272734): Maybe this is obvious but: the other labs seem to be broadly following a pretty normal cluster of commercial and scientific incentives o3 looks like the clearest example yet of OpenAI being ideologically driven by AGI per se.
> 
> Like you don’t design a system that costs thousands of dollars to use per API call if you’re focused on consumer utility - you do that if you want to make a machine that can think well, full stop.
> 
> [Peter Wildeford](https://x.com/peterwildeford/status/1870463105412780265): I think OpenAI genuinely cares about getting society to grapple with AI progress.

I don’t think ideological is the right term. You don’t make it for direct consumer use if your focus is on consumer utility. But you might well make it for big business, if you’re trying to sell a bunch of drop-in employees to big business at $20k/year a pop or something. That’s a pretty great business if you can get it (and the compute is only $10k, or $1k). And you definitely do it if your goal is to have that model help make your other models better.

It’s weird to me to talk about wanting to make AGI and ASI and the most intelligent thing possible as if it were ideological. Of course you want to make those things… provided you (or we) can stay in control of the outcomes. Just think of the potential! It is only ideological in the sense that it represents a belief that we can handle doing that without getting ourselves killed. 

If anything, to me, it’s the opposite. Not wanting to go for ASI because you don’t see the upside is an ideological position. The two reasonable positions are ‘don’t go for ASI yet, slow down there cowboy, we’re not ready to handle this’ and ‘we totally can too handle this, just think of the potential.’ Or even ‘we have to build it before the other guy does,’ which makes me despair but at least I get it. The position ‘[nothing to see here](https://www.youtube.com/watch?v=LW6RWSiR88s&pp=ygUTbm90aGluZyB0byBzZWUgaGVyZQ%3D%3D) what’s the point there is no market for that, move along now, can we get that q4 profit projection memo’ is the Obvious Nonsense. 

And of course, if you don’t (as Aaron seems to imply) think Anthropic has its eyes on the prize, you’re not paying attention. DeepMind originally did, but Google doesn’t, so it’s unclear what the mix is at this point over there.

#### What Could Possibly Go Right?

I want to be clear here that the answer is: Quite a lot of things. Having access to next-level coding and math is great. Having the ability to spend more money to get better answers where it is valuable is great.

Even if this all stays relatively mundane and o3 is ultimately disappointing, I am super excited for the upside, and to see what we all can discover, do, build and automate. 

#### Send in the Skeptic

Guess who.

All right, that’s my fault, I made that way too easy.

> [Gary Marcus](https://x.com/GaryMarcus/status/1870216940834201730): After almost two years of declaring that a release of GPT-5 is imminent and not getting it, super fans have decided that a demo of system that they did zero personal experimentation with — and that won’t (in full form) be available for months — is a mic-drop AGI moment.
> 
> Standards have fallen.
> 
> [o1] is not a general purpose reasoner. it works where there is a lot of augmented data etc.

First off it Your Periodic Reminder that progress is anything but slow even if you exclude the entire o-line. It has been a little over two years since there was a demo of GPT-4, with what was previously a two year product cycle. That’s very different from ‘two years of an imminent GPT-5 release.’ In the meantime, models have gotten better across the board. GPT-4o, Claude Sonnet 3.5 and Gemini 1206 all completely demolish the original GPT-4, to speak nothing of o1 or Perplexity or anything else. And we also have o1, and now o3. The practical experience of using LLMs is vastly better than it was two years ago. 

Also, [quite obviously, you pursue both paths at once](https://x.com/GaryMarcus/status/1871010096517365768), both GPT-N and o-N, and if both succeed great then you combine them.

> Srini Pagdyala: If O3 is AGI, why are they spending billions on GPT-5?
> 
> Gary Marcus: Damn good question!

So no, not a good question.

Is there now a pattern where ‘old school’ frontier model training runs whose primary plan was ‘add another zero or two’ are generating unimpressive results? Yeah, sure. 

Is o3 an actual AGI? No. I’m pretty sure it is not.

But it seems plausible it is AGI-level specifically at coding. And that’s the important one. It’s the one that counts most. If you have that, overall AGI likely isn’t far behind.

#### This is Almost Certainly Not AGI

[I mention this because some were suggesting it might be.](https://x.com/alex_conneau/status/1870178128557158828)

[](https://substackcdn.com/image/fetch/$s_!F0id!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8f82efdc-c952-4b50-9462-756a020fad7b_1043x926.png)

[](https://substackcdn.com/image/fetch/$s_!Yd2p!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3986cb99-30d6-4953-9b14-590db6791372_1028x353.png)

[Here’s Yana Welinder claiming o3 is AGI, based off the ARC performance](https://x.com/yanatweets/status/1870175096918421996), although she later hedges to ‘partial AGI.’

[And here’s Evan Mays](https://x.com/TolgaBilge_/status/1871254374439129124), a member of OpenAI’s preparedness team, saying o3 is AGI, although he later deleted it. [Are they thinking about invoking the charter?](https://x.com/TolgaBilge_/status/1870904304049217725) It’s premature, but no longer completely crazy to think about it.

[And here’s old school and present OpenAI board member Adam D’Angelo](https://x.com/adamdangelo/status/1870894723814355394) saying ‘Wild that the o3 results are public and yet the market still isn’t pricing in AGI,’ which to be fair it totally isn’t and it should be, whether o3 itself is AGI or not. [And Elon Musk agrees](https://x.com/elonmusk/status/1870900539367752111).

If o3 was as good on most tasks as it is at coding or math, then it would be AGI.

It is not. 

If it was, OpenAI would be communicating about this very differently.

If it was, then that would not match what we saw from o1, or what we would predict from this style of architecture. We should expect o-style models to be relatively good at domains like math and coding where their kind of chain of thought is most useful and it is easiest to automatically evaluate outputs. 

That potentially is saying more about the definition of AGI than anything else. But it is certainly saying the useful thing that there are plenty of highly useful human-shaped cognitive things it cannot yet do so well. 

How long that lasts? That’s another question.

What would be the most Robin Hanson take here, in response to the ARC score?

> [Robin Hanson](https://x.com/robinhanson/status/1870457373414101267): It’s great to find things AI can’t yet do, and then measure progress in terms of getting AIs to do them. But crazy wrong to declare we’ve achieved AGI when reach human level on the latest such metric. We’ve seen dozens of such metrics so far, and may see dozens more before AGI.

o1 listed 15 when I asked, oddly without any math evals, and Claude gave us 30. So yes, dozens of such cases. We might indeed see dozens more, depending on how we choose them. But in terms of things like ARC, where the test was designed to not be something you could do easily without general intelligence, not so many? It does not feel like we have ‘dozens more’ such things left. 

This has nothing to do with the ‘financial definition of AGI’ between OpenAI and Microsoft, of $100 billion in profits. This almost certainly is not that, either, but the two facts are not that related to each other.

#### Does This Mean the Future is Open Models?

[Evan Conrad suggests this](https://x.com/evanjconrad/status/1870349922798903786?s=46), because the expenses will come at runtime, so people will be able to catch up on training the models themselves. And of course this question is also on our minds given DeepSeek v3, which I’m not covering here but certainly makes a strong argument that open is more competitive than it appeared. More on that in future posts.

I agree that the compute shifting to inference relatively helps whoever can’t afford to be spending the most compute on training. That would shift things towards whoever has the most compute for inference. The same goes if inference is used to create data to train models. 

> [Dan Hendrycks](https://x.com/DanHendrycks/status/1870523446620471756): If gains in AI reasoning will mainly come from creating synthetic reasoning data to train on, then the basis of competitiveness is not having the largest training cluster, but having the most inference compute.
> 
> This shift gives Microsoft, Google, and Amazon a large advantage.

Inference compute being the true cost also means that model quality and efficiency potentially matters quite a lot. Everything is on a log scale, so even if Meta’s M-5 is sort of okay and can scale like O-5, if it’s even modestly worse, it might cost 10x or 100x more compute to get similar performance. 

That leaves a hell of a lot of room for profit margins. 

Then there’s the assumption that when training your bespoke model, what matters is compute, and everything else is kind of fungible. I keep seeing this, and I don’t think this is right. I do think you can do ‘okay’ as a fast follower with only compute and ordinary skill in the art. Sure. But it seems to me like the top labs, particularly Anthropic and OpenAI, absolutely do have special sauce, and that this matters. There are a number of strong candidates, including algorithmic tricks and better data.

It also matters whether you actually do the thing you need to do.

> Tnishq Abraham: Today, people are saying Google is cooked rofl
> 
> [Gallabytes](https://x.com/gallabytes/status/1870326448147538300): Not me, though. Big parallel thinking just got de-risked at scale. They’ll catch up.
> 
> If recursive self-improvement is the game, OpenAI will win. If industrial scaling is the game, it’ll be Google. If unit economics are the game, then everyone will win.
> 
> Pushinpronto: Why does OpenAI have an advantage in the case of recursive self-improvement? Is it just the fact that they were first?
> 
> Gallabytes: We’re not even quite there yet! But they’ll bet hard on it much faster than Google will, and they have a head start in getting there.

What this does mean is that open models will continue to make progress and will be harder to limit at anything like current levels, if one wanted to do that. If you have an open model Llama-N, it now seems like you can turn it into M(eta)-N, once it becomes known how to do that. It might not be very good, but it will be a progression. 

The thinking here by Evan at the link about the implications of takeoff seem deeply confused - if we’re in a takeoff situation then that changes everything and it’s not about ‘who can capture the value’ so much as who can capture the lightcone. I don’t understand how people can look these situations in the face and not only not think about existential risk but also think everything will ‘seem normal.’ He’s the one who said takeoff (and ‘fast’ takeoff, which classically means it’s all over in a matter of hours to weeks)!

As a reminder, the traditional definition of ‘slow’ takeoff is remarkably fast, also best start believing in them, because it sure looks like you’re in one:

> [Teortaxes](https://x.com/teortaxesTex/status/1870405997707121051): it's about time ML twitter got brought up to speed on what "takeoff speeds" mean. Christiano: "There will be a complete 4 year interval in which world output doubles, before the first 1 year interval in which world output doubles." **That's slow.** We're in the early stages of it.

[](https://substackcdn.com/image/fetch/$s_!YhzH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F510ea5bd-ef32-465e-9bc2-4f4366198649_511x545.png)

#### Not Priced In

One answer to ‘why didn’t Nvidia move more’ is of course ‘[everything is priced in](https://x.com/tszzl/status/1870262702918250849)’ but [no of course it isn’t](https://x.com/f4talStrategies/status/1870305655732449454), we didn’t know, stop pretending we knew, insiders in OpenAI couldn’t have [bought enough Nvidia here](https://x.com/nickcammarata/status/1870207991531876539). 

Also, on Monday after a few days to think, Nvidia overperformed the Nasdaq by ~3%. 

And this was how the Wall Street Journal described that, even then:

[](https://substackcdn.com/image/fetch/$s_!PWdF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc9cf0144-18aa-46dd-9f21-3c985b1815ae_446x166.png)

No, I didn’t buy more on Friday, I keep telling myself I have Nvidia at home. Indeed I do have Nvidia at home. I keep kicking myself, but that’s how every trade is - either you shouldn’t have done it, or you should have done more. I don’t know that there will be another moment like this one, but if there is another moment this obvious, I hereby pledge in public to at least top off a little bit, Nick is correct in his attitude here you do not need to do the research because you know this isn’t priced in but in expectation you can assume that everything you are not thinking about is priced in.

And now, as I finish this up, Nvidia has given most of those gains back on no news that seems important to me. You could claim that means yes, priced in. I don’t agree.

#### Our Media is Failing Us

> [Spencer Schiff (on Friday):](https://x.com/SpencerKSchiff/status/1870193740742062278) In a sane world the front pages of all mainstream news websites would be filled with o3 headlines right now

The traditional media, instead, did not notice it. At all. 

And one can’t help but suspect this was highly intentional. Why else would you announce such a big thing on the Friday afternoon before Christmas?

[They did successfully hype it among AI Twitter, also known as ‘the future.’](https://x.com/bindureddy/status/1870833466075680847)

> Bindu Reddy: The o3 announcement was a MASTERSTROKE by OpenAI 
> 
> The buzz about it is so deafening that everything before it has been be wiped out from our collective memory!
> 
> All we can think of is this mythical model that can solve insanely hard problems 😂
> 
> [Nick](https://x.com/nickcammarata/status/1870196173388296405): the whole thing is so thielian. 
> 
> If you’re going to take on a giant market doing probably illegal stuff call yourself something as light and bouba as possible, like airbnb, lyft
> 
> If you’re going to announce agi do it during a light and happy 12 days of christmas short demo.
> 
> Sam Altman (replying to Nick!): friday before the holidays news dump.

Well, then. 

In that crowd, it was all ‘software engineers are cooked’ and people filled with some mix of excitement and existential dread. 

But back in the world where everyone [else lives…](https://x.com/ben_j_todd/status/1870724393313464812)

[](https://substackcdn.com/image/fetch/$s_!h1E-!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2f19897c-1944-4c4d-9be3-5a2dc5066e7f_1049x1282.png)

> Benjamin Todd: Most places I checked didn't mention AI at all, or they'd only have a secondary story about something else like AI and copyright. My twitter is a bubble and most people have no idea what's happening.
> 
> OpenAI: we've created a new AI architecture that can provide expert level answers in science, math and coding, which could herald the intelligence explosion.
> 
> [The media: bond funds!](https://x.com/ben_j_todd/status/1870727857326211320)
> 
> Davidad: As Matt Levine used to say, People Are Worried About Bond Market Liquidity.

[Here is that WSJ story](https://www.wsj.com/tech/ai/openai-gpt5-orion-delays-639e7693?mod=Searchresults_pos1&page=1), talking about how GPT-5 or ‘Orion’ has failed to exhibit big intelligence gains despite multiple large training runs. It says ‘so far, the vibes are off,’ and says OpenAI is running into a data wall and trying to fill it with synthetic data. If so, well, they had o1 for that, and now they have o3. The article does mention o1 as the alternative approach, but is throwing shade even there, so expensive it is. 

[And we have this variation of that article, in the print edition, on Saturday, after o3](https://x.com/FerdinandCbrDuk/status/1871223224887042216):

[](https://substackcdn.com/image/fetch/$s_!z0jM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa14baa8a-1def-4c31-8469-98ec323def11_1536x2048.jpeg)

> [Sam Altman](https://x.com/sama/status/1870709421111984135): I think The Wall Street Journal is the overall best U.S. newspaper right now, but they published an article called “The Next Great Leap in AI Is Behind Schedule and Crazy Expensive” many hours after we announced o3?

It wasn’t only WSJ either, [there’s also Bloomberg, which normally I love](https://x.com/deanwball/status/1870542364684742946):

[](https://substackcdn.com/image/fetch/$s_!Rv1w!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e65acc3-d463-4299-8b01-aa52306a13f9_1042x558.png)

On Monday [I did find coverage of o3 in Bloomberg](https://www.bloomberg.com/news/articles/2024-12-20/openai-unveils-more-advanced-reasoning-models-in-race-with-google?srnd=phx-ai), but it not only wasn’t on the front page it wasn’t even on the front tech page, I had to click through to AI. 

[Another fun one, from Thursday](https://x.com/AlecStapp/status/1870634711837753538), [here’s the original in the NY Times](https://www.nytimes.com/2024/12/19/technology/artificial-intelligence-data-openai-google.html#:~:text=Dr.%20Hassabis%20is%20not%20the,text%20available%20on%20the%20internet.):

[](https://substackcdn.com/image/fetch/$s_!KSAY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3ff85584-eecf-4862-987f-22a53429cefb_1178x1135.jpeg)

Is it Cade Metz? Yep, it’s Cade Metz and also Tripp Mickle. To be fair to them, they do have Demis Hassabis quotes saying chatbot improvements would slow down. And then there’s this, love it:

> Not everyone in the A.I. world is concerned. Some, like OpenAI’s chief executive, Sam Altman, say that progress will continue at the same pace, albeit with some twists on old techniques.

That post also mentions both synthetic data and o1.

> OpenAI recently released a new system called OpenAI o1 that [was built this way](https://archive.is/o/Ox7G3/https://www.nytimes.com/2024/09/12/technology/openai-chatgpt-math.html). But the method only works in areas like math and computing programming, where there [is a firm distinction between right and wrong](https://archive.is/o/Ox7G3/https://www.nytimes.com/2024/09/23/technology/ai-chatbots-chatgpt-math.html).

It works best there, yes, but that doesn’t mean it’s the only place that works.

[We also had Wired with the article](https://x.com/visably/status/1871348126818427191) ‘Generative AI Still Needs to Prove Its Usefulness.’

True, you don’t want to make the opposite mistake either, and freak out a lot over something that is not available yet. But this was ridiculous. 

#### Not Covered Here: Deliberative Alignment

I realized I wanted to say more here and have this section available as its own post. So more on this later.

#### The Lighter Side

[Oh no!](https://x.com/EigenGender/status/1870187705637720376)

[](https://substackcdn.com/image/fetch/$s_!0Jgb!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbb5e82d5-8195-4551-a6e4-f481e3f2f15f_1046x310.png)

[Oh no!](https://x.com/meekaale/status/1870434114282856890)

> Mikael Brockman: o3 is going to be able to create incredibly complex solutions that are incorrect in unprecedentedly confusing ways.
> 
> We made everything astoundingly complicated, thus solving the problem once and for all.
> 
> Humans will be needed to look at the output of AGI and say, “What the f*** is this? Delete it.”

[Oh no!](https://x.com/kimmonismus/status/1870565655688122480)

[](https://substackcdn.com/image/fetch/$s_!OkQ4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffcc6cb6b-f1cf-429f-a7f9-8e1dfffe735d_1028x653.png)

#### 

88

28

13

Share
