---
title: "Nobody’s on the ball on AGI alignment"
date: 2023-03-29
url: https://forourposterity.com/nobodys-on-the-ball-on-agi-alignment
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 1 stage-1 reading (ea-intro-program/tag-criticism-of-causes.md); Aschenbrenner's influential essay that alignment is severely neglected — AI safety strand"
---

Observing from afar, it's easy to think there's an abundance of people working on AGI safety. Everyone on your timeline is fretting about AI risk, and it seems like there is a well-funded EA-industrial-complex that has elevated this to their main issue. Maybe you've even developed a slight distaste for it all—it reminds you a bit too much of the woke and FDA bureaucrats, and Eliezer seems pretty crazy to you. 

That’s what I used to think too, a couple of years ago. Then I got to see things more up close. And here’s the thing: _nobody’s actually on the friggin’ ball on this one!_

  * There’s far fewer people working on it than you might think. There are plausibly 100,000 ML capabilities researchers in the world (30,000 attended ICML alone) vs. 300 alignment researchers in the world, a factor of ~300:1. The scalable alignment team at OpenAI has all of ~7 people.
  * Barely anyone is going for the throat of solving the core difficulties of scalable alignment. Many of the people who are working on alignment are doing blue-sky theory, pretty disconnected from actual ML models. Most of the rest are doing work that’s vaguely related, hoping it will somehow be useful, or working on techniques that might work now but predictably fail to work for superhuman systems. 



There’s no secret elite SEAL team coming to save the day. This is it. We’re not on track.

If timelines are short and we don’t get our act together, we’re in a lot of trouble. Scalable alignment—aligning superhuman AGI systems—is a real, unsolved problem. It’s quite simple: current alignment techniques rely on human supervision, but as models become superhuman, humans won’t be able to reliably supervise them.

But my pessimism on the current state of alignment research very much doesn’t mean I’m an Eliezer-style doomer. Quite the opposite, I’m optimistic. I think scalable alignment is a solvable problem—and it’s an ML problem, one we can do real science on as our models get more advanced. But we gotta stop fucking around. We need an effort that matches the gravity of the challenge.[1]

* * *

## Alignment is not on track

A [recent post](https://forum.effectivealtruism.org/posts/3gmkrj3khJHndYGNe/estimating-the-current-and-future-number-of-ai-safety?ref=forourposterity.com) estimated that there were 300 full-time technical AI safety researchers (sounds plausible to me, if we’re counting generously). By contrast, there were [30,000 attendees at ICML in 2021](https://aiindex.stanford.edu/wp-content/uploads/2022/03/2022-AI-Index-Report_Master.pdf?ref=forourposterity.com), a single ML conference. It seems plausible that there are ≥100,000 researchers working on ML/AI in total. That’s a ratio of ~300:1, capabilities researchers:AGI safety researchers. 

That ratio is a little better at the AGI labs: ~7 researchers on the scalable alignment team at OpenAI, vs. ~400 people at the company in total (and fewer researchers).[2] But 7 alignment researchers is still, well, not that much, and those 7 also aren’t, like, OpenAI’s most legendary ML researchers. (Importantly, from my understanding, this isn’t OpenAI being evil or anything like that—OpenAI would love to hire more alignment researchers, but there just aren’t many great researchers out there focusing on this problem.)

But rather than the numbers, what made this really visceral to me is… actually looking at the research. There’s very little research where I feel like “great, this is getting at the core difficulties of the problem, and they have a plan for how we might actually solve it in <5 years.” 

Let’s take a quick, stylized, incomplete tour of the research landscape.

### Paul Christiano / Alignment Research Center (ARC).

Paul is the single most respected alignment researcher in most circles. He used to lead the OpenAI alignment team, and he has made useful conceptual contributions (e.g., [Eliciting Latent Knowledge](https://www.lesswrong.com/posts/qHCDysDnvhteW7kRd/arc-s-first-technical-report-eliciting-latent-knowledge?ref=forourposterity.com), [iterated amplification](https://www.alignmentforum.org/s/EmDuGeRw749sD3GKd?ref=forourposterity.com)). 

But his research now (“heuristic arguments”) is roughly “trying to solve alignment via galaxy-brained math proofs.” As much as I respect and appreciate Paul, I’m really skeptical of this: basically all deep learning progress has been empirical, often via dumb hacks[3] and intuitions, rather than sophisticated theory. My baseline expectation is that aligning deep learning systems will be achieved similarly.[4]

(This is separate from [ARC’s work on evals](https://evals.alignment.org/?ref=forourposterity.com), which I am very excited about, but I would put more in the “AGI governance” category—it helps us buy time, but it’s not trying to directly solve the technical problem.)

### Mechanistic interpretability.

Probably the most broadly respected direction in the field, trying to reverse engineer blackbox neural nets so we can understand them better. The most widely respected researcher here is Chris Olah, and [he and his team have made some interesting findings](https://www.anthropic.com/index?subjects=interpretability&ref=forourposterity.com). 

That said, to me, this often feels like “trying to engineer nuclear reactor security by doing fundamental physics research with particle colliders (and we’re about to press the red button to start the reactor in 2 hours).” Maybe they find some useful fundamental insights, but man am I skeptical that we’ll be able to sufficiently reverse engineer GPT-7 or whatever. I’m glad this work is happening, especially as a longer timelines play, but I don’t think this is on track to tackle the technical problem if AGI is soon.   


### RLHF (Reinforcement learning from human feedback).

[This](https://arxiv.org/abs/2203.02155?ref=forourposterity.com) and variants of this[5] are what all the labs are doing to align current models, e.g. ChatGPT. Basically, train your model based on human raters’ thumbs-up vs. thumbs-down. This works pretty well for current models![6]

The core issue here (widely acknowledged by everyone working on it) is that this probably predictably won’t scale to superhuman models. RLHF relies on human supervision; but humans won’t be able to reliably supervise superhuman models. (More discussion later in this post.[7])  


### RLHF++ / “scalable oversight” / trying to iteratively make it work.

Something in this broad bucket seems like the labs’ current best guess plan for scalable alignment. (I’m most directly addressing the [OpenAI plan](https://aligned.substack.com/p/alignment-optimism?ref=forourposterity.com); the [Anthropic plan](https://www.anthropic.com/index/core-views-on-ai-safety?ref=forourposterity.com) has some broadly similar ideas; see also [Holden’s nearcasting series](https://www.alignmentforum.org/posts/rCJQAkPTEypGjSJ8X/how-might-we-align-transformative-ai-if-it-s-developed-very?ref=forourposterity.com) for a more fleshed out version of “trying to iteratively make it work,” and [Buck’s talk](https://www.youtube.com/watch?v=YTlrPeikoyw&ref=forourposterity.com) discussing that.) 

Roughly, it goes something like this: “yeah, RLHF won’t scale indefinitely. But we’ll try to go as far as we can with things like it. Then we’ll use smarter AI systems to amplify our supervision, and more generally try to use minimally-aligned AGIs to help us do alignment research in crunchtime.” 

This has some key benefits:

  * It might work! This is probably the closest to an actual, plausible plan we’ve got.
  * “Iterative experimentation” is usually how science works, and that seems much more promising to me than most blue-sky theory work.



But I think it’s embarrassing that this is the best we’ve got:

  * It’s underwhelmingly unambitious. This currently feels way too much like “improvise as we go along and cross our fingers” to be Plan A; this should be Plan B or Plan E.
  * It might well not work. I expect this to harvest a bunch of low-hanging fruit, to work in many worlds but very much not all (and I think most people working on this would agree). This really shouldn’t be our only plan.
  * It rests on pretty unclear empirical assumptions on how crunchtime will go. Maybe things will go slow enough and be coordinated enough that we can iteratively use weaker AIs to align smarter AIs and figure things out as we go along—but man, I don’t feel confident enough in that to sleep soundly at night.[8]
  * I’m not sure this plan puts us on track to get to a place where we can be confident that scalable alignment is solved. By default, I’d guess we’d end up in a fairly ambiguous situation.[9] Ambiguity could be fatal, requiring us to either roll the die on superhuman AGI deployment, or block deployment when we actually really should deploy, e.g. to beat China.[10]  




### MIRI and similar independent researchers.

I’m just really, really skeptical that a bunch of abstract work on decision theory and similar will get us there. My expectation is that alignment is an ML problem, and you can’t solve alignment utterly disconnected from actual ML systems. 

This is incomplete, but I claim that in broad strokes that covers a good majority of the work that’s happening. To be clear, I’m really glad all this work is happening! I’m not trying to criticize any particular research (this is the best we have so far!). I’m just trying to puncture the complacency I feel like many people I encounter have. 

We’re really not on track to actually solve this problem!

* * *

## (Scalable) alignment is a real problem

Imagine you have GPT-7, and it’s starting to become superhuman at many tasks. It’s hooked up to a bunch of tools and the internet. You want to use it to help run your business, and it proposes a very complicated series of action and computer code. You want to know—will this plan violate any laws?

Current alignment techniques rely on human supervision. The problem is that as these models become superhuman, humans won’t be able to reliably supervise their outputs. (In this example, the series of actions is too complicated for humans to be able to fully understand the consequences.). And if you can’t reliably detect bad behavior, you can’t reliably prevent bad behavior.[11]

You don’t even need to believe in [crazy xrisk](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/?ref=forourposterity.com) [scenarios](https://www.cold-takes.com/how-we-could-stumble-into-ai-catastrophe/?ref=forourposterity.com) to take this seriously; in this example, you can’t even ensure that GPT-7 won’t violate the law!

Solving this problem for superhuman AGI systems is called “scalable alignment”; this is a very different, and much more challenging, problem than much of the near-term alignment work (prevent ChatGPT from saying bad words) being done right now.

A particular case that I care about: imagine GPT-7 as above, and GPT-7 is starting to be superhuman at AI research. GPT-7 proposes an incredibly complex plan for a new, alien, even more advanced AI system (100,000s of lines of code, ideas way beyond current state of the art). It has also claimed to engineer an alignment solution for this alien, advanced system (again way too complex for humans to evaluate). How do you know that GPT-7’s safety solution will actually work? You could ask it—but how do you know GPT-7 is answering honestly? We don’t have a way to do that right now.[12]

Most people still have the Bostromiam “paperclipping” analogy for AI risk in their head. In this story, we give the AI some utility function, and the problem is that the AI will naively optimize the utility function (in the Bostromiam example, a company wanting to make more paperclips results in an AI turning the entire world into a paperclip factory). 

I don’t think old Bostrom/Eliezer analogies are particularly helpful at this point (and I think the overall situation is even gnarlier than Bostrom’s analogy implies, but I’ll leave that for a footnote[13]). The challenge isn’t figuring out some complicated, nuanced utility function that “represents human values”; the challenge is getting AIs to do what it says on the tin—to reliably do whatever a human operator tells them to do.[14]

And for getting AIs to do what we tell them to do, the core technical challenge is about _scalability_ to superhuman systems: what happens if you have superhuman systems, which humans can’t reliably supervise? Current alignment techniques relying on human supervision won’t cut it. 

* * *

## Alignment is a solvable problem

You might think that given my pessimism on the state of the field, I’m one of those [doomers](https://www.lesswrong.com/posts/j9Q8bRmwCgXRYAgcJ/miri-announces-new-death-with-dignity-strategy?ref=forourposterity.com) who has like 99% p(doom). Quite the contrary! I’m really quite optimistic on AI risk.[15]

Part of that is that I think there will be considerable endogenous societal response (see also [my companion post](https://www.forourposterity.com/want-to-win-the-agi-race-solve-alignment/)). Right now talking about AI risk is like yelling about covid in Feb 2020. I and many others spent the end of that February in distress over impending doom, and despairing that absolutely nobody seemed to care—but literally within a couple weeks, America went from dismissing covid to everyone locking down. It was delayed and imperfect etc., but the sheer intensity of the societal response was crazy and none of us had sufficiently priced that in.

Most critically, I think AI alignment is a solvable problem. I think the failure so far to make that much progress is ~zero evidence that alignment isn’t tractable. The level and quality of effort that has gone into AI alignment so far wouldn’t have been sufficient to build GPT-4, let alone build AGI, so it’s not much evidence that it’s not been sufficient to align AGI. 

Fundamentally, I think AI alignment is an ML problem. As AI systems are becoming more advanced, alignment is increasingly becoming a “real science,” where we can do ML experiments, rather than just thought experiments. I think this is really different compared to 5 years ago. 

For example, I’m really excited about work like [this recent paper](https://arxiv.org/abs/2212.03827?ref=forourposterity.com) ([paper](https://arxiv.org/abs/2212.03827?ref=forourposterity.com), [blog post on broader vision](https://www.lesswrong.com/posts/L4anhrxjv8j2yRKKp/how-discovering-latent-knowledge-in-language-models-without?ref=forourposterity.com)), which prototypes a method to detect “whether a model is being honest” via unsupervised methods. More than just this specific result, I’m excited about the style:

  * Use conceptual thinking to identify methods that might plausibly scale to superhuman methods (here: unsupervised methods, which don’t rely on human supervision)
  * Empirically test this with current models. 



I think there’s a lot more to do in this vein—carefully thinking about empirical setups that are analogous to the core difficulties of scalable alignment, and then empirically testing and iterating on relevant ML methods.[16]

And as noted earlier, the ML community is huuuuuge compared to the alignment community. As the world continues to wake up to AGI and AI risk, I’m optimistic that we can harness that research talent for the alignment problem. If we can bring in excellent ML researchers, we can dramatically multiply the level and quality of effort going into solving alignment.

* * *

## Better things are possible

This optimism isn’t cause for complacency. Quite the opposite. Without effort, I think we’re in a scary situation. This optimism is like saying, in Feb 2020, “if we launch an Operation Warp Speed, if we get the best scientists together in a hardcore, intense, accelerated effort, with all the necessary resources and roadblocks removed, we could have a covid vaccine in 6 months.” Right now, we are very, very far away from that. What we’re doing right now is sorta like giving a few grants to random research labs doing basic science on vaccines, at best. 

We need a concerted effort that matches the gravity of the challenge. The best ML researchers in the world should be working on this! There should be billion-dollar, large-scale efforts with the scale and ambition of Operation Warp Speed or the moon landing or even OpenAI’s GPT-4 team itself working on this problem.[17] Right now, there’s too much fretting, too much idle talk, and way too little “let’s roll up our sleeves and actually solve this problem.”

The state of alignment research is not good; much better things are possible. We can and should have research that is directly tackling the core difficulties of the technical problem (not just doing vaguely relevant work that might help, not just skirting around the edges); that has a plausible path to directly solving the problem in a few years (not just deferring to future improvisation, not just hoping for long timelines, not reliant on crossing our fingers); and that thinks conceptually about scalability while also working with real empirical testbeds and actual ML systems. 

But right now, folks, nobody is on this ball. We may well be on the precipice of a world-historical moment—but the number of live players is surprisingly small. 

* * *

_Thanks to_[ _Collin Burns_](http://collinpburns.com/?ref=forourposterity.com) _for years of discussion on these ideas and for help writing this post; opinions are my own and do not express his views. Thanks to_[ _Holden Karnofsky_](https://www.cold-takes.com/?ref=forourposterity.com) _and_[ _Dwarkesh Patel_](https://www.dwarkeshpatel.com/?ref=forourposterity.com) _for comments on a draft._

[ “Nobody’s on the ball on AGI alignment” by Leopold Aschenbrenner - EA Forum PodcastFar fewer people are working on it than you might think, and even the alignment research that is happening is very much not on track. (But it’s a solvable problem, if we get our act together.)Original article:This is a linkpost for https://www.for…Buzzsprout](https://www.buzzsprout.com/2073880/12591817-nobody-s-on-the-ball-on-agi-alignment-by-leopold-aschenbrenner?ref=forourposterity.com)Audio version (narration courtesy of the EA forum podcast)

  1. Note that I believe all this despite having much more uncertainty on AGI / AGI timelines than most people out here. I might write more about this at some point, but in short, my prior is against AI progress reaching 100% automation, rather something that looks more like 90% automation. And 90% automation is what we’ve seen time and time again as technological progress has advanced; it’s only 100% automation (of e.g. all of science and tech R&D) that would lead to [transformative and unparalleled consequences](https://www.cold-takes.com/most-important-century/?ref=forourposterity.com).

And even if we do get 100% automation AGI, I’m fairly optimistic on it going well, as discussed later in the post.

I might put AI xrisk in the next 20 years at ~5%. But 5% chance of extinction or similarly bad outcome is, well, still incredibly high!

  2. I don’t have great numbers for DeepMind, my sense is that it’s 10-20 people on scalable alignment vs. 1000+ at the organization overall? Google Brain doesn’t have ~any alignment people. Anthropic is doing the best of them all, maybe roughly 20-30 people on alignment and interpretability vs. somewhat over 100 people overall? 
  3. E.g., skip connections (rather than f(x), do f(x)+x, so the gradients flow better); batchnorm (hacky normalization); ReLU instead of sigmoid; these and similar were some of the handful of biggest deep learning breakthroughs! 
  4. I do think that alignment will require more conceptual work than capabilities. However, as I discuss later in the post, I think the right role for conceptual work is to think carefully about empirical setups (that are analogous to the ultimate problem) and methods (that could scale to superhuman systems)—but then testing and iterating on these empirically. Paul does pure theory instead. 
  5. Anthropic’s Claude uses [Constitutional AI](https://arxiv.org/abs/2212.08073?ref=forourposterity.com). This still relies on RLHF for “helpfulness,” though it uses AI assistance for “harmlessness.” I still think this has the same scalability issues as RLHF (model assistance on harmlessness is fundamentally based on human supervision of pre-training and helpfulness RL stage); though I’d be happy to also group this under “RLHF++” in the next section. 
  6. Sydney (Bing chat) had some bizarre failure modes, but I think it’s likely Sydney wasn’t RLHF’d, only finetuned. Compare that to ChatGPT/GPT-4 or Claude, which do really quite well! People will still complain about misalignments of current models, but if I thought this were just scalable to superhuman systems, I’d think we’re totally fine. 

To be clear, I’m not that into alignment being applied for, essentially, censorship for current models, and think this is fairly distinct from the core long-term problem. See also Paul on “[AI alignment is distinct from its near-term applications](https://ai-alignment.com/ai-alignment-is-distinct-from-its-near-term-applications-81300500ad2e?ref=forourposterity.com)”

  7. See also [this Ajeya Cotra post](https://www.alignmentforum.org/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to?ref=forourposterity.com) for a more detailed take on how RLHF might fail; this is worth reading, even if I don’t necessarily endorse all of it. 
  8. If AI can automate AI research, I think <1 year takeoff scenarios are pretty plausible (modulo coordination/regulation), meaning <1 year from human-level AGIs to crazy superhuman AGIs. See [this analysis by Tom Davidson](https://www.lesswrong.com/posts/Gc9FGtdXhK9sCSEYu/what-a-compute-centric-framework-says-about-ai-takeoff?ref=forourposterity.com); see also previous footnote on how a ton of deep learning progress has come from just dumb hacky tweaks (AIs automating AI research could find lots more of these); and [this paper](https://epochai.org/blog/revisiting-algorithmic-progress?ref=forourposterity.com) on the role of algorithmic progress vs. scaling up compute in recent AI progress.

You could argue that this <1 year could be many years of effective subjective research time (because we have the AIs doing AI research), and to some extent this makes me more optimistic. That said, the iterative amplification proposals typically rely on “humans augmented by AIs,” so we might still be bottlenecked by humans for AIs doing alignment research. (By contrast to capabilities, which might not be human bottlenecked anymore during this time—just make the benchmark/RL objective/etc. go up.)

More generally, this plan rests on labs’ ability to execute this really competently in a crazy crunchtime situation—again, this might well work out, but it doesn’t make sleep soundly at night. (It also has a bit of a funny “last minute pivot” quality to it—we’ll press ahead, not making much progress on alignment, but then in crunchtime we’ll pivot the whole org to really competently do iterative work on aligning these models.)

  9. “Our iterative efforts have been going ok, but man things have been moving fast and there have been some weird failure modes. I *think* we’ve managed to hammer out those failure modes in our last model, but every time we’ve hammered out failure modes like this in the past, the next model has had some other crazier failure mode. What guarantee will we have that our superhuman AGI won’t fail catastrophically, or that our models aren’t learning to deceive us?” 
  10. See more discussion in [my companion post](https://www.forourposterity.com/want-to-win-the-agi-race-solve-alignment/)—if I were a lab, I’d want to work really hard towards a clear solution to alignment so I won’t end up being blocked by society from deploying my AGI. 
  11. H/t Collin Burns for helping put it crisply like this. 
  12. The reason I particularly care about this example is that I don’t really expect most of the xrisk to come from “GPT-7”/the first AGI systems. Rather, I expect most of the really scary risk to come from the crazy alien even more advanced systems that “GPT-7”/AIs doing AI research build thereafter. 
  13. Bostrom says we give the AI a utility function, like maximizing paperclips. If only it were so easy! We can’t even give the AI a utility function. [Reward is not the optimization target](https://www.lesswrong.com/posts/pdaGN6pQyQarFHXF4/reward-is-not-the-optimization-target?ref=forourposterity.com)—all we’re doing is specifying an evolutionary process. What we get out of that process is some creature that happens to do well on the selected metric—but we have no idea what’s going on internally in that creature (cf the Shoggoth meme)

I think the analogy with human evolution is instructive here. Humans were evolutionarily selected to maximize reproduction. But that doesn’t mean that individual humans have a utility function of maximizing reproduction—rather, we learn drives like wanting to have sex or eating sugar that “in training” helped us do well in the evolutionary selection process. Go out of distribution a little bit, and those drives mean we “go haywire”—look at us, eating too much sugar making us fat, or using contraception to have lots of sex while having fewer and fewer children. 

More generally, rather than Bostrom/Eliezer’s early contributions (which I respect, but think are outdated), I think by far the best current writing on AI risk is [Holden Karnofsky’s](https://www.cold-takes.com/?ref=forourposterity.com), and would highly recommend you read Holden’s pieces if you haven’t already.

  14. If somebody wants to use AIs to maximize paperclip production, fine—the core alignment problem, as I see it, is ensuring that the AI actually does maximize paperclip production if that’s what the user intends to do. 

Misuse is a real problem, and I’m especially worried about the specter of global authoritarianism—but I think issues like this (how do we deal with e.g. companies that have goals that aren’t fully aligned with the rest of society) are more continuous with problems we already face. And in a world where everyone has powerful AIs, I think we’ll be able to deal with them in a continuous manner. 

For example, we’ll have police AIs that ensure other AI systems follow the law. (Again, the core challenge here is the police AIs do what we tell them to do, rather than, e.g. trying to launch a coup themselves—see Holden [here](https://www.cold-takes.com/why-would-ai-aim-to-defeat-humanity/?ref=forourposterity.com) and [here](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/?ref=forourposterity.com).) 

  15. As mentioned in an earlier footnote, I’d put the chance of AI xrisk in the next 20 years at ~5%. But a 5% chance of extinction of similarly bad outcomes is, well, a lot! 
  16. I will have more to say, another time, about my own ideas and alignment plans I’m most excited about. 
  17. Or maybe [billion-dollar prizes](https://twitter.com/leopoldasch/status/1639679581308465154?s=46&t=612rWr3QlD0pepiGrqymeg&ref=forourposterity.com). 

[AI](/tag/ai/)

  * [ Share on Twitter ](https://twitter.com/share?text=Nobody%E2%80%99s%20on%20the%20ball%20on%20AGI%20alignment&url=https://www.forourposterity.com/nobodys-on-the-ball-on-agi-alignment/)
  * [ Share on Facebook ](https://www.facebook.com/sharer/sharer.php?u=https://www.forourposterity.com/nobodys-on-the-ball-on-agi-alignment/)
  * [ Share on LinkedIn ](https://www.linkedin.com/shareArticle?mini=true&url=https://www.forourposterity.com/nobodys-on-the-ball-on-agi-alignment/&title=Nobody%E2%80%99s%20on%20the%20ball%20on%20AGI%20alignment)
  * [ Share on Pinterest ](http://pinterest.com/pin/create/button/?url=https://www.forourposterity.com/nobodys-on-the-ball-on-agi-alignment/&media=&description=Nobody%E2%80%99s%20on%20the%20ball%20on%20AGI%20alignment)
  * [ Share via Email ](mailto:?subject=Nobody%E2%80%99s%20on%20the%20ball%20on%20AGI%20alignment&body=https://www.forourposterity.com/nobodys-on-the-ball-on-agi-alignment/)
  * Copy link



[ ](/author/leopold/)

###  [Leopold Aschenbrenner](/author/leopold/) [ Twitter ](https://x.com/leopoldasch)

## FOR OUR POSTERITY Newsletter

Join the newsletter to receive the latest updates in your inbox.

### Comments 
