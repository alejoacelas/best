---
title: "What would it take for AI to disempower us? Ryan Greenblatt on takeoff dynamics, rogue deployments, and alignment risks"
author: "80000_Hours"
date: 2025-07-08
url: https://forum.effectivealtruism.org/posts/8mqbLdhyobHMaD4rd/what-would-it-take-for-ai-to-disempower-us-ryan-greenblatt
fetched: 2026-07-07
via: forum-graphql
topic: "biorisk"
note: "gap-scour: AI-as-actor bio pathway — misaligned/autonomous AI pursuing bioweapons as an AI-takeover route, connecting biorisk to AI safety proper"
---

<table><tbody><tr><td><a class="ck-cta-button ck-cta-button-centered" data-href="https://open.spotify.com/episode/4TeGozjFgTLlQjwTiphZdz?si=k-AtlDpzSaS5X3mop1zj1A" target="_blank" rel="noopener noreferrer">Listen on Spotify</a></td><td><a class="ck-cta-button ck-cta-button-centered" data-href="https://youtu.be/-CJxwXAFvsw" target="_blank" rel="noopener noreferrer">Watch on Youtube</a></td><td><a class="ck-cta-button ck-cta-button-centered" data-href="https://80000hours.org/podcast/episodes/ryan-greenblatt-ai-automation-sabotage-takeover/?utm_campaign=podcast__ryan-greenblatt&amp;utm_source=80000+Hours+Podcast&amp;utm_medium=podcast" target="_blank" rel="noopener noreferrer">Read the transcript</a></td></tr></tbody></table>

* * *

We just published an interview: Ryan Greenblatt on the 4 most likely ways for AI to take over, and the case for and against AGI in under 8 years. Below are the episode summary and some key excerpts.

**Episode summary**
-------------------

<table style="border-color:rgb(179, 179, 179)"><tbody><tr><td style="background-color:rgb(217, 217, 217);border-color:rgb(217, 217, 217);border-style:double;padding:5pt;vertical-align:top"><p><i>I think pretty quickly into this regime, AI takeover using a variety of mechanisms becomes pretty plausible and potentially surprisingly easy through a variety of routes. …</i></p><p><i>A thing that seems very plausible to me is: you’ve handed things off to the AI system, and you’re still trying to oversee it, you’re still trying to understand what’s going on. But it might be that the AI can run a “rogue deployment,” where they can basically use a bunch of the compute in an unmonitored way because they’re writing so much of the stuff, so much is happening so quickly that they can evade your safeguards…</i></p><p><i>In addition to that, these AIs could be doing things like backdooring the future AI training runs, making sure the AIs are aligned to them instead of aligned to you, and doing a huge amount of work that you might just not know what’s going on anymore. Even at the most basic level of what code was run, you might just be misled about that specific thing because things are going so fast and so out of your control.</i></p><p><i>— Ryan Greenblatt</i></p></td></tr></tbody></table>

Ryan Greenblatt — lead author on the explosive paper “[Alignment faking in large language models](https://www.anthropic.com/research/alignment-faking)” and chief scientist at [Redwood Research](https://www.redwoodresearch.org/) — thinks there’s a 25% chance that within four years, AI will be able to do everything needed to run an AI company, from writing code to designing experiments to making strategic and business decisions.

As Ryan lays out, AI models are “marching through the human regime”: systems that could handle five-minute tasks two years ago now tackle 90-minute projects. Double that a few more times and we may be automating full jobs rather than just parts of them.

Will setting AI to improve itself lead to an explosive positive feedback loop? Maybe, but maybe not.

**The explosive scenario:** Once you’ve automated your AI company, you could have the equivalent of 20,000 top researchers, each working 50 times faster than humans with total focus. “You have your AIs, they do a bunch of algorithmic research, they train a new AI, that new AI is smarter and better and more efficient… that new AI does even faster algorithmic research.” In this world, we could see years of AI progress compressed into months or even weeks.

With AIs now doing all of the work of programming their successors and blowing past the human level, Ryan thinks it would be fairly straightforward for them to take over and disempower humanity, if they thought doing so would better achieve their goals. In the interview he lays out the four most likely approaches for them to take.

**The linear progress scenario:** You automate your company but progress barely accelerates. Why? Multiple reasons, but the most likely is “it could just be that AI R&D research bottlenecks extremely hard on compute.” You’ve got brilliant AI researchers, but they’re all waiting for experiments to run on the same limited set of chips, so can only make modest progress.

Ryan’s median guess splits the difference: perhaps a 20x acceleration that lasts for a few months or years. Transformative, but less extreme than some in the AI companies imagine.

And his 25th percentile case? Progress “just barely faster” than before. All that automation, and all you’ve been able to do is keep pace.

Unfortunately the data we can observe today is so limited that it leaves us with vast error bars. “We’re extrapolating from a regime that we don’t even understand to a wildly different regime,” Ryan believes, “so no one knows.”

But that huge uncertainty means the explosive growth scenario is a plausible one — and the companies building these systems are spending tens of billions to try to make it happen.

In this extensive interview, Ryan elaborates on the above and the policy and technical response necessary to insure us against the possibility that they succeed — a scenario society has barely begun to prepare for.

*This episode was recorded on February 21, 2025.*

*Video editing: Luke Monsour, Simon Monsour, and Dominic Armstrong*  
*Audio engineering: Ben Cordell, Milo McGuire, and Dominic Armstrong*  
*Music: Ben Cordell*  
*Transcriptions and web: Katy Moore*

**The interview in a nutshell**
-------------------------------

Ryan Greenblatt, chief scientist at Redwood Research, contemplates a scenario where:

1.  Full AI R&D automation occurs within 4–8 years, something Ryan places 25–50% probability on.
2.  This triggers explosive recursive improvement (5–6 orders of magnitude in one year) — a crazy scenario we can’t rule out
3.  Multiple plausible takeover approaches exist if models are misaligned
4.  Both technical and governance interventions are urgently needed

### **1\. AI R&D automation could happen within 4–8 years**

Ryan estimates a **25% chance of automating AI R&D within 4 years, and 50% within 8 years**. This timeline is based on recent rapid progress in AI capabilities, particularly in 2024:

*   AI systems have progressed from barely completing 5–10 minute tasks to handling 1.5-hour software engineering tasks with 50% success rates — and the length of tasks AIs can complete is doubling every 6 months and shows signs of increasing.
*   Current internal models at OpenAI reportedly rank in the top 50 individuals on Codeforces, and AIs have reached the level of very competitive 8th graders on competition math.
*   Training compute is increasing ~4x per year, and reasoning models (o1, o3, R1) show dramatic improvements with relatively modest compute investments.
*   Algorithmic progress has been increasing 3–5x per year in terms of effective training compute — making less compute go further.
*   Reinforcement learning on reasoning models is showing dramatic gains, and DeepSeek-R1 reportedly used only ~$1 million for reinforcement learning, suggesting massive potential for scaling.

But there’s also evidence that progress could slow down:

*   10–20% of global chip production is already earmarked for AI. (Though Ryan is uncertain about the exact number.)
*   AI companies are running out of high-quality training data.
*   Scaleups are going to require trillion-dollar investments, and each order of magnitude might yield less improvement.
*   It’s unclear whether narrow skills improvements will generalise to broad domains.

### **2\. AI R&D automation could trigger explosive recursive self-improvement**

When AI can automate AI research itself, that could set off an intelligence explosion as smarter AIs improve algorithms faster before hitting efficiency limits.

At the point when full AI R&D automation starts, Ryan expects:

*   10–50x faster progress than current rates (median estimate ~20x)
*   Companies might dedicate 80% of compute to internal use, squeezing out external customers
*   Advantages that add up to a more than 50x labour speed advantage compared to humans:
*   5x from generically running faster
*   3x from AIs working 24/7
*   2x from better coordination and context sharing between AIs
*   2x from the ability to swap between different capability levels for efficiency

Ryan’s median estimate is **5–6 orders of magnitude of algorithmic progress within one year after full automation begins**.

### **3\. Multiple plausible takeover scenarios exist if models are misaligned**

As part of his work at Redwood, Ryan has also explored AI takeover scenarios from these superintelligent models.

Early takeover mechanisms include:

*   AIs using compute without authorisation within companies
*   Models escaping containment and coordinating with internal copies
*   Massive hacking campaigns to destabilise human response

Late takeover mechanisms include:

*   “Humans give AIs everything”: AIs appear helpful while secretly consolidating control
*   Robot coup: Once vast autonomous robot armies exist, sudden coordinated takeover

Waiting for takeover might increase chances of success with more resources and infrastructure available to them — but AIs could attempt earlier takeover due to fear of being replaced by newer models with different preferences, or due to rapid progress in safety research and/or coordination between humans.

### **4\. Both technical and governance interventions are urgently needed**

Ryan thinks there are several promising areas where listeners could contribute to reduce the above risks.

Technical research:

*   Ensuring AIs can’t cause harm even if they’re misaligned through [AI control](https://80000hours.org/podcast/episodes/buck-shlegeris-ai-control-scheming/)
*   Creating “model organisms”: testable examples of misaligned models
*   Showing current AIs’ capabilities to increase awareness and political appetite for action like “pausing at human level”
*   Interpreting non-human-language reasoning to detect deceptive cognition

Governance work:

*   Enabling verification of training claims between nations through compute governance
*   Hardening defences against model theft, unauthorised deployment, bioweapons, and cyberattacks
*   Facilitating coordination between companies and countries

**Highlights**
--------------

### **Really, though: how capable are today's models?**

> **Ryan Greenblatt:** I’d say my kind of qualitative, vibesy model is: the AIs are pretty dumb, they used to be much dumber, they’re getting smarter quickly, and they’re very knowledgeable.
> 
> So I think a lot of what people are interfacing with is that we’ve got these systems that have got some smarts to them: they can really figure out some pretty general situations OK, and especially with reasoning models they’re pretty good at thinking through some stuff. In addition to that, they’re very knowledgeable, which means that there’s a misleading impression of how overall general and how adaptable they are that people notice.
> 
> And this is a lot of what people are reacting to. There’s sort of an overoptimistic perspective, which I would say is characterised by this [chart](https://situational-awareness.ai/) Leopold \[Aschenbrenner\] had where he’s like PhD-level intelligence, or like people are like PhD-level intelligence — and then some people respond to that being like, “PhD level intelligence? Come on, it can’t play tic-tac-toe.” Maybe that’s no longer true with reasoning models, but directionally, you know, it can’t play tic-tac-toe; it can’t respond to relatively novel circumstances. It gets tripped up by this stuff.
> 
> Now, I think we have to discount some of how it’s getting tripped up by this stuff, because I think a bunch of these things might be better described as cognitive biases than lack of smarts. Like there’s a bunch of things that humans systematically get wrong, even though they’re pretty stupid, or in some sense they’re pretty dumb errors.
> 
> …
> 
> As an example, if you give AIs a riddle. Like, “There’s a man and a boat and a goat. The boat can carry the man and one other item. How many trips does it take for them to cross the river?” The answer is one trip: they can just cross the river. But there is a similar riddle involving a man, a goat, and something like a cabbage — you know, there’s some tricky approach — and the AIs are so reflexively used to doing this that maybe they immediately blurt out an answer. They sort of have a strong heuristic towards that answer, but it might just be more that they feel a nudging to that. But if you get them to be like, “Oh, it’s a trick question,” then they go from that.
> 
> And in fact, you can get humans on the same sorts of trick questions, right? So if you ask humans, “What’s heavier: a pound of bricks or a pound of feathers?” they’ll say the bricks, and they get tripped. It’s like the language models have the exact opposite problem, where if you ask them, “What’s heavier: two pounds of bricks or a pound of feathers?” then they’re like, “Same weight! Same weight!”
> 
> So I worry that a lot of the tricks people are doing are sort of analogous to tricks you could execute on humans, and it’s hard to know how much to draw from that.
> 
> **Rob Wiblin:** Yeah. A general challenge here in assessing how capable they are is, I think [Nathan Labenz uses this expression](https://80000hours.org/podcast/episodes/nathan-labenz-openai-red-team-safety/#openais-single-minded-focus-on-agi-014210) that they’re “human-level but not human-like” — so overall, maybe they’re similarly capable as human employees in some situations, but they have very different strengths and weaknesses; they can be tripped up in ways that seem completely baffling to us.
> 
> But I guess you can imagine an AI society that would look at humans and say, “How is it that they can’t multiply in their heads two three-digit numbers? That seems crazy. These are obviously not general intelligences. They have almost no memory of this book that they read last week. That doesn’t make any sense. How could an intelligence act that way?” It makes it a little bit hard to have a common ground on which to compare humans versus AIs.
> 
> Is there more to say on how you would assess what level they’re at now?
> 
> **Ryan Greenblatt:** Yeah, I think that I wouldn’t use the term “human-level.” Maybe this is me being a little bit of a conservative or me being a bit pedantic, but I like reserving the term “human-level” for “can automate a substantial fraction of cognitive jobs.”
> 
> So maybe we’re starting to get into the humanish-level AIs once it can really just fully automate away a bunch of human jobs, or be a part of the cognitive economy in a way that is comparable to humans — and maybe not full automation at that point, but I also like talking about the full automation point. So that’s one thing, just responding to that.
> 
> More context on how good the AIs are: some things we’re seeing that are maybe somewhat relevant are we’re seeing AIs sort of march through how good they are at math and competitive programming. So we’ve seen over 2024 going from basically the AI is bottom 20th percentile or something on [Codeforces](https://en.wikipedia.org/wiki/Codeforces) to being currently in the top 50, I think, according to [what Sam Altman said](https://www.reddit.com/r/OpenAI/comments/1ikpuuz/sam_altman_says_openai_has_an_internal_ai_model/).
> 
> **Rob Wiblin:** Top 50 individuals?
> 
> **Ryan Greenblatt:** Top 50 individuals. Literally the top 50 people. Or at least people who do Codeforces; maybe there’s some people who aren’t on the leaderboard, but roughly speaking. And then it looks like they’ll get basically better than the best human at that specific thing before the end of the year.
> 
> And then on math, this is based on an anecdote from a colleague, but maybe they’re [currently at the level of a very competitive eighth grader](https://lemmata.substack.com/p/ai-did-well-on-the-2025-aime) or something on short numerical competition math problems like [AIME](https://en.wikipedia.org/wiki/American_Invitational_Mathematics_Examination), the top eighth graders are doing as well as the AIs are doing right now. And the AIs are, I think, a decent amount worse on proofs.
> 
> But both of these things are improving very rapidly — they were much, much worse a year ago. I think basically this is because we’re RLing the AIs in these tasks.
> 
> I sort of expect the same trend to hit agentic tasks, software engineering. We’ve already seen that to some extent: the AIs are already pretty good at writing code, pretty good at following instructions, and OK at noticing errors, OK at recovering from these things. I think with a lot of runtime compute and a lot of scaffolding, that can be pushed further.
> 
> Then there’s a bunch of things in which they’re weaker. So they’re a bunch weaker at writing, they’re a bunch weaker at other stuff. But I sort of expect that as you’re marching through software engineering, you’ll get to a bunch of these other capabilities.
> 
> **Rob Wiblin:** Yeah. OK, so we’ve got an arguably quite high level now. They’re becoming capable of doing tasks that would take humans longer and longer; they’re able to follow instructions for a longer period of time, complete tasks that have more open-ended choices to make. And that’s doubling every half a year or something like that?
> 
> **Ryan Greenblatt:** I think the doubling time on time, my guess is over the next year it’ll be substantially faster than every half year, but maybe [the longer-run trend is roughly every half year](https://80000hours.org/podcast/episodes/beth-barnes-ai-safety-evals/).
> 
> So we might expect there was basically a spurt starting at the start of 2024 or a little into 2024 of people doing more agency RL — more reinforcement learning or training the AIs specifically to be good at agentic software engineering tasks. And I think that trend will continue, and perhaps even accelerate, through 2025, plausibly continuing in 2026, plausibly later. But maybe the longer running trend is more like doubling every six months. I expect it to be more like doubling every two to four months over the next year.
> 
> **Rob Wiblin:** OK, so very rapid increase over the coming year.
> 
> **Ryan Greenblatt:** Very rapid, yes.

### **Why AI companies get automated earlier than others**

> **Rob Wiblin:** Just to clarify, you’re saying that the companies will be using a lot of compute to automate their own work, so much compute that in fact that they won’t have many chips available for serving other customers who are doing things that are of less economic value, or certainly less important to the company?
> 
> **Ryan Greenblatt:** Yeah, broadly speaking. But I think it’s even just not on just automating the stuff, but on experiments.
> 
> So let me just put a little bit of flavour on this. So how do AI companies spend their compute now? I think it will depend on the company, but my sense of the breakdown for OpenAI is it’s very roughly something like: a fourth on inference for external customers, half on experiments — so things like smaller scale training runs that don’t end up getting deployed, doing a little bit of testing of RL code, this sort of thing, so experiment compute for researchers — and a fourth on big training runs. So like three-fourths of the compute is already internally directed in some sense.
> 
> And then if we’re seeing a regime where the AIs can automate AI R&D and that’s yielding big speedups and seems very important, then you could imagine the regime might look more like one-fifth on doing inference for your AI workers — so you’re spending a fifth of your compute just running your employees — three-fifths on experiments, and one-fifth on training or something. Obviously it’s very speculative.
> 
> **Rob Wiblin:** So customers have been squeezed out almost entirely.
> 
> **Ryan Greenblatt:** Yeah, yeah. I mean, presumably you’ll have some customers, but it might be squeezed out almost entirely, and we’ll see the prices rise. And I think when you’re thinking about what customers to be serving to, I think you should maybe be imagining, perhaps surprisingly, that the highest wage employees might be who the AIs end up going for first, once the AIs are capable of this automation. So maybe you should be thinking like Jane Street, high frequency trading, places where the AIs seem particularly helpful, they seem particularly high paying, and they seem particularly bottlenecked on intellectual labour.
> 
> Now, I think we will see automation of a bunch of other professions in parallel, but it might be that at the point when the AIs are most capable of automating, much more of the attention will be focused on AI R&D. And I think even possibly we might see effects like some profession is slowly being automated — you know, mid- to low-end software engineering maybe will slowly be automated more and more — and we might actually see that trend reverse as the compute gets more valuable.
> 
> Because now we’re in a regime where just everyone is grabbing as much inference compute as they can, or at least the biggest companies or the company in the lead is grabbing as much inference compute as they can, and just outcompeting the software engineers using this or the companies doing software engineering competing with this compute.
> 
> I don’t currently expect a trend reversal, but I think we could see automation trends plateau or even reverse because of this.
> 
> **Rob Wiblin:** Because people have found even more valuable things to do with the AI.
> 
> **Ryan Greenblatt:** Yeah, that’s right. This is dependent on relatively short timelines. I think you could expect things are sort of smoother on longer timelines, where you wouldn’t expect trend reversals in that case. But if things are more sudden, more jumpy, then it seems at least plausible.

### **How worried should we be? And what should we be worried about?**

> **Ryan Greenblatt:** I think there’s a bunch of scary things that could happen here. One thing is that once you’re automating your entire AI company, a thing that seems very plausible to me is: you’ve handed things off to the AI system, and you’re still trying to oversee it, you’re still trying to understand what’s going on.
> 
> But it might be that the AI can run what I would call a “rogue deployment” — where they can basically use a bunch of the compute in an unmonitored way, because they’re writing so much of the stuff, so much is happening so quickly that they can evade your safeguards if they were to be misaligned. And then it might be the case that huge fractions of your compute and effort are being used for things that aren’t what you wanted.
> 
> In addition to that, these AIs could be doing things like backdooring the future AI training runs, making sure the AIs are aligned to them instead of aligned to you, and doing a huge amount of work that you might just not know what’s going on anymore. Even at the most basic level of what code was run, you might just be misled about that specific thing because things are going so fast and so out of your control.
> 
> **Rob Wiblin:** Yeah. If people are willing to grant that we’ve got billions of fast superhuman geniuses running on this data centre and barely any human oversight — because the sheer quantity of work being done would be beyond the capacity of all of the staff at one of these companies to scrutinise, and even if they did have time to read it, they often wouldn’t understand it because it would quickly be exceeding the kinds of things that they’ve learned to even be able to track — I think people would intuitively believe that at that point, if the AIs were wanting to take over, that they would probably have quite a lot of options for doing that. Oh, no?
> 
> **Ryan Greenblatt:** Actually a big source of disagreement is how much does cognitive labour assist in takeover? I think there’s a bunch of different routes. Man, I should have brought my takeover plans list, my hot tips for AIs! But I think once the AIs are very superhuman, there’s basically a route that I would call the crazy nanotech route, or the crazy superhuman technologies route — where they just have hard military power very quickly via the mechanism of being very superhuman.
> 
> So maybe you let them make nanotech, or maybe you’re like “No, don’t make nanotech. That would be super scary.” But they can do it even despite you not wanting them to do that — because they can use huge fractions of the compute you have in your data centre to work on the nanotech, and also exfiltrate themselves, coordinate with an outside version of the model, orchestrate wet lab experiments to bootstrap nanotech from all kinds of things. And then you’re just totally cooked.
> 
> **Rob Wiblin:** So a possible layer of defence would be, although there’s this enormous capability here, if we’re able to direct exactly what they’re doing, such that they never get a spare moment to think about how they would take over or to actually try to implement that, then that might possibly keep us safe.
> 
> However, in this scenario — where we’re able to scrutinise so little, and we have so little understanding of how these models operate — it seems likely that there would be some slippage, where they might be able to figure out a way of grabbing a bit of time, grabbing a bit of compute here and there, and then pushing that open to use more and more of the compute in the data centre to be pursuing their own agenda, rather than the task that we think that we’re giving them.
> 
> **Ryan Greenblatt:** Yeah. I’m pretty sceptical of being able to [maintain a meaningful level of control](https://80000hours.org/podcast/episodes/buck-shlegeris-ai-control-scheming/) if all of your AIs are coherently misaligned and we’re at this level of capability. By control, I mean things such that the AIs couldn’t do bad stuff even if they wanted to.
> 
> I think a somewhat slowed-down version of the initial automation seems very plausible with control, maybe even at full speed, and maybe you can go even somewhat above the human range while ensuring control using clever strategies — including having the AIs work on the strategies, and making sure their work on the strategies itself is not sabotaged.
> 
> But it seems very difficult once you’re in this completely insane regime, especially if you want to use the AIs to develop things like a cure for cancer where you don’t understand what they’re doing. They’re routing through biological mechanisms you don’t understand. They’re orchestrating humans who don’t know what’s going on in a wet lab. I think it’s very plausible that for various reasons you’ll want to have AIs directing people to do wet lab experiments where you do not know what the fuck is going on. The AI explains something, and you can maybe do some checks, but you’re very confused. So maintaining control of that.
> 
> Maybe I’ll try to quickly run through the takeover list. There’s the crazy superhuman technology, which I think is pretty plausible, for what it’s worth.
> 
> There’s what I would call superhuman strategy/manipulation, including things like persuasion that is getting people to do things that are wildly against their interests very quickly. I think this is not clear if this is ever possible, but if it is, it does feel like it would make takeover a lot easier.
> 
> Then there’s a bunch of stuff that might be more possible even around the human-level regime. An example would be the AI escapes, it maybe coordinates with a copy inside, but it also is running some independent presence externally. Maybe that’s like running on the GPUs internally, but it’s running code on servers outside of the AI company.
> 
> And as part of doing that, it sort of builds an independent industrial base, so it has like all the stuff it would need to be able to recover industrial civilisation and then just kills almost all humans. So something like deploys bioweapons, deploys mirror bacteria, deploys mirror mould, whatever, and that ends up relatively quickly killing a huge fraction of humans.
> 
> I think it seems like this is technically feasible. And then from there the question is, did the AI screw itself over? Can it maintain what it’s doing, or is it just going to decay into ruin because there’s no human hands to build all the things? So I think it needs to have some independent industrial base that could either be via having some human loyalists, some like humans that it’s enslaved and keeps alive, or via having robots.
> 
> **Rob Wiblin:** At this point in time, wouldn’t there be just incredible robots and probably quite a large number of them?
> 
> **Ryan Greenblatt:** Potentially very quickly. I haven’t done all the analysis of how quickly do you expect lots of robots. We also have to answer the question of how many robots get destroyed as the humans are starting to get killed by bioweapons and maybe suspect that it’s AI caused, and questions like, if there’s surviving humans, how much military force is needed to handle that?
> 
> I think it’s non-obvious how the situation goes, but this is a route for why you could get takeover without needing very superhuman capabilities. The thing I’m describing seems like it would in principle be possible for AIs to do if they’re merely fast at human level and super well coordinated.
> 
> Reasons why this is hard for humans to pull off: one, [humans don’t want to do this](https://80000hours.org/podcast/episodes/tom-davidson-ai-enabled-human-power-grabs/). Another reason is that I think it’s the case that it’s hard for humans to run vast conspiracies, but it might be much easier for the AIs to run vast conspiracies because they don’t have to rely on recruiting potentially untrustworthy humans. They can potentially be wildly better at cybersecurity and much more meticulous. They might mess it up, but I just think there’s mechanisms via which this could happen. So this is the “kill everybody via independent industrial base” story.
> 
> Another story, which I think maybe is the most plausible story of all, is the “humans give the AIs everything they need” story — which is like the AIs just chill, they make sure they have control of the situation; maybe they’re manipulating what’s going on. I talked earlier about how what you see is not what’s actually going on. Like, you look at the experiments, they’re not what you expect. The AIs are doing that. They’re sabotaging the alignment experiments. They’re sabotaging the alignment results. They’re deluding us.
> 
> There’s a bunch of mechanisms for that, but they don’t do anything very aggressive. You know, they’re just chilling. We’re scaling up compute. They do lots of good stuff. There’s cures to all diseases, all kinds of great stuff is happening, industrial development. People are like, “It’s so great that AI did go well and we didn’t have misalignment.” Some of the safety people are worryingly looking at the situation, wondering if this is what’s going on.
> 
> And then at some later point, when the AI has an insanely decisive advantage, and the humans are starting to be an obstacle at all — which, throughout this story, they might not be, right? I think if the humans ended up being an obstacle earlier, maybe the AIs would take more decisive action. But if there’s no need for decisive action, maybe they just lie in wait.
> 
> And then at a point when there’s truly vast levels of industry, truly vast levels of robots, the armies are entirely run by AIs, the situation is so beyond whatever, maybe even at the point of space probes being launched… It could be potentially that humans are deluded indefinitely. It might be just like you can in principle [Potemkin village](https://en.wikipedia.org/wiki/Potemkin_village) the entire way through. But it could also convert at an earlier point.
> 
> Now, to be clear, if humans are deluded indefinitely, then it’s like all the stuff on Earth might be great, right?
> 
> **Rob Wiblin:** So you’re saying they could even get to the point of saying, “We’re going to go off and settle space and do a whole lot of stuff in space,” and they’ll tell us that they’ll do one thing, but they’re going to do a completely different thing while we just enjoy our lives on Earth, thinking that things have gone better or at least very differently than in fact how they’re going to play out?
> 
> **Ryan Greenblatt:** Yeah. But to be clear, it could be Potemkin villageised on Earth as well. It could be the case that you’re like, “Wow, I have so many happy friends,” whatever. But steadily your friends are being replaced by robots. And at some point it’s like, why doesn’t the AI just suddenly take over? But in principle, it could go very far. So that’s another story.
> 
> Another story I would call “sudden robot coup.” This also doesn’t require very superhuman capabilities. We build vast autonomous robot armies. Maybe we think we have some way to turn them off. Either the AIs have sabotaged that, or they have some way to work around that, or there’s various other mechanisms by which this could fail.
> 
> And then we built the robot armies, we saw the AIs building the robot armies, and we’re like, “Hooray, we’re building a vast robot army to compete with China!” And China’s like, “Hooray, we’re building a vast robot army to compete with the US! Truly, it’s great that we have such a big robot army.” And then it’s like, whoops. All of a sudden the robot armies sweep in and do a relatively hard power takeover, because they control the military, they can be hyper coordinated, and maybe they’re in parallel using things like potentially bioweapons to some extent, but that might not even be required.
> 
> **Rob Wiblin:** I mean, at this point they don’t even need to kill us, potentially.
> 
> **Ryan Greenblatt:** Potentially.
> 
> **Rob Wiblin:** Because even if we all tried to resist, it would be pointless, basically.
> 
> **Ryan Greenblatt:** Potentially. And also things like they maybe are using lots of cyberattacks to destabilise human response. So they could potentially do this at a point when we naively think that the robot army is weaker than the human army.
> 
> Or even we think we have shutoff switches, but the shutoff switches are not reliable enough. They’re not over-engineered enough, they’re not shielded enough from the AI’s tampering. I think it’s an awkward dynamic, where if you want to have remote shutoff, you have to both make it so that it’s tamper-proof for AIs that might be in principle very general and very smart and very clever, and also, it needs to be the case that they’re remotely triggerable. So it can’t be shieldable either. It has to be the case that there’s no way the AIs can shield the thing from signals and avoid tampering with it — which is a very awkward combination in principle.

### **Would AGI go rogue early or bide its time?**

> **Rob Wiblin:** What determines whether you get AIs attempting to take over early relative to later? I guess the reason to wait is that they’re going to become a bigger fraction of the economy; they’ll have more hard power, so they’re just more likely to trivially succeed. The reason to go early is that a given set of models might expect to be replaced by other models that might not share their goals, so they would have missed their opportunity to take over, basically.
> 
> **Ryan Greenblatt:** I think the strongest reasons to go early might be something like: worries about other AIs; worries about humans getting their shit together — either because we get enough work out of the AIs, or because people freak out and trigger some strong response that could recover the situation — and the third one would be impatience or something.
> 
> It might be that, by default, humans slow progress down a bunch, even with AIs trying to manipulate things, trying to steer things from behind the scenes. And if the humans are slowing things down a bunch, and the AIs are like, “No, I want to get to the stars now,” and they’re at some sufficiently high takeover probability… Or maybe the AIs are just like, “I just want to do it now.” Like, I know humans sometimes want things to happen faster, even independent of the total amount of stuff they end up getting.
> 
> So these are some reasons to happen earlier. These things also apply to things less egregious than takeover. One of my hopes for things going well is we can put the AIs in a position where they’re forced to either take aggressive moves early or we get enough work out of them. And if they take aggressive moves early, then [maybe we can catch that](https://80000hours.org/podcast/episodes/buck-shlegeris-ai-control-scheming/) and then build a case for danger. And in addition to building a case for danger, we could potentially do stuff like study that example, iterate against it — stuff I’m calling, “few-shot catastrophe prevention.” Like, we’ve caught a few examples of bad stuff: can we handle that?
> 
> If at multiple different levels, are the AIs sort of forced to take aggressive action? Or is it instead the case that the AIs can bide their time, because we don’t have any mechanism for exiting the regime using some ongoing background trend — either safety research improving over time, or humanity being like, “I’m sorry, what is going on here?”
> 
> **Rob Wiblin:** Are you saying a general thrust of the interventions that we could make is creating a trend where over time in fact they’re going to become less and less likely to be able to successfully take over? Maybe because we’re successfully figuring out how to use AI in order to prove alignment and safety and to detect misalignment, or we’re improving our control mechanisms. So that would then force the models: they see this trend, they see that in fact the window is closing, and so they have to try to strike early. And that gives us a chance to realise what’s going on and then actually win out.
> 
> **Ryan Greenblatt:** That’s right. But of course it could obviously go in the opposite direction where our measures can’t keep up with the rate of capabilities, and it keeps going up. There’s this notion of what’s the level of capability that we can handle at a given level of takeover risk? Maybe initially we don’t have that much going on, so we can handle roughly humanish level at some 20% takeover risk, or some very high level — which will depend on various facts about misalignment: which AIs are misaligned, how coherent are they, how much are they unified, this sort of thing.
> 
> …
> 
> Imagine that there’s some trend over time, which is: for the smartest AIs we have now, what’s the chance of success they have? Or maybe just how likely are they to take over? So initially our countermeasures suffice, to be like, maybe at the point where they’re automating the whole AI company, by default, we’re at instantaneously probably not even that high a chance of takeover, because what are they going to do?
> 
> But then, as they get more capable, the instantaneous takeover chance is going up, and some of our paths to success have been cut off. Maybe the AIs have escaped, they’re running rogue internal deployments, they’re sabotaging our work.
> 
> But we could make it so that the trend bows the other way — where over time the risk of takeover is going down, not up — because the capabilities are increasing, but our measures are increasing faster than the capabilities. But obviously, as we discussed before, the capabilities might be increasing very fast. So if the measures aren’t keeping up with that, if we’re not on some stable regime, then that could be bad.
> 
> And so I think the model I was using there is most natural to think about in a regime where the AIs are misaligned. But if we start at a point where they’re aligned enough that they sort of maintain their own alignment, then it could be that the takeover risk initially is like, they’re actually aligned, so we’re sort of in a stable attractor of alignment.

### **Do we have to hope to catch AIs red-handed?**

> **Rob Wiblin:** To what extent do we just have to hope that there are serious early warning signs? You were talking about catching the AIs red-handed, which is another concept that you and your colleagues have tried to make more salient.
> 
> That’s a sort of warning shot, I suppose, where you find the AIs inside the company have been sabotaging the data centre, they’ve been doing something really quite egregious. That might get more buy-in to do substantially more stuff from either the government or the leadership of the company. How much more hopeful are things if you do get some sort of early warning shot like that?
> 
> **Ryan Greenblatt:** I think it helps a lot. One source of scepticism I have is that it might be the case that I think it’s a smoking gun but the broader world does not. For example, the [alignment faking work](https://www.anthropic.com/research/alignment-faking) that we recently put out, from my perspective, should be quite a large update for people who are very sceptical about this threat model. And I think predictably it was a maybe no or only a very small update for a lot of these people.
> 
> To be clear, I don’t think that evidence on its own should be a huge update in absolute terms. Maybe it doesn’t move people to the same level of risk of misalignment that I think, because a lot of that’s based on conceptual arguments they don’t agree with.
> 
> But if I think a bunch of people who are like, “There’s no way in hell this would happen” — 0% chance, basically — should maybe move to like 2% or 3% chance.
> 
> …
> 
> So I can totally imagine a case where it’s like we caught the AI trying to escape. Buck has a [post](https://www.alignmentforum.org/posts/YTZAmJKydD5hdRSeG/would-catching-your-ais-trying-to-escape-convince-ai) on this, like, what would happen if we caught the AI trying to escape? And people are like, “You know, sometimes systems do that. They do weird stuff. Also, is that even true? Did you train it in some weird way?” Or, “Oh, that’s what happened at that company. But at this company we have different practices.” Also people just being like, “Sure, maybe AIs have a weird instinct to escape. But what are they even going to do?” Or things like, “We’ll use various checks to prevent this.”
> 
> And I think all these factors in a relatively clear-cut scenario could cut into that. And I kind of expect a lot of the situations that I think are like a huge smoking gun are way more confusing than this.
> 
> An example would be like, maybe it looks like the AIs are sandbagging on safety research — where they’re performing worse than they could, or they’re not doing very brazen sabotage, but there’s way more errors than we would expect, there’s more misleading arguments. It was from our perspective a big update. Because it seems pretty off, but it’s quite quantitative. If you just had lower expectations, maybe this wouldn’t be that surprising.
> 
> …
> 
> One hope with control is making it so that egregious bad stuff has less plausible deniability. We refer to this as “incrimination.” It’s really important to get from a position where you’re like, “Wow, that was really suspicious,” to “OK, we’ve nailed down exactly what was going on.” Just because incriminating in our lights doesn’t necessarily mean it’s incriminating from the perspective of the broader world, but it is moving the needle.
> 
> And I think this can occur at all different regimes, from something looks a bit suspicious, to we kind of understand what’s going on and it looks very suspicious; to the AI tried to escape, we stopped it, and we’ve done the thing where we pretend it succeeded and we see what it would do on the outside — and try to get to the point where it’s like, “It looks like it’s trying to figure out how to manufacture bioweapons. It’s trying to run a wet lab.”
> 
> Plausibly you can get, in principle at least, very far into understanding what it would do given the affordance of having escaped. And to the extent that it does stuff that’s much more clearly malign, I think that could motivate additional action. But I do worry that any sort of warning shot which is not causing massive amounts of damage and not causing potentially human fatalities maybe won’t trigger a strong response.

### **Forecasting different trajectories of AI automation**

> **Rob Wiblin:** It sounds like there are quite a lot of people trying to forecast this time and trying to sketch out the different plausible trajectories and the different factors that weigh on it.
> 
> Is it possible to bring it back to something that someone with less technical understanding can grasp? Is the bottom line that people thought about it a lot, it’s quite hazy, there’s a lot of factors at play? It’s possible that at peak AI R&D, things could be moving very fast, and it is plausible that it could even speed up as the AIs get better. It’s also possible it could slow down. We should just be open to all of these different options?
> 
> **Ryan Greenblatt:** I would have said surprisingly little time has been spent thinking about this, actually. As far as I can tell, maybe around four full-time-equivalent years have been spent very directly on trying to build these models to forecast takeoff and applying those models to forecast timelines — maybe even less than this.
> 
> And there’s a bunch more [work that Epoch has done on trends](https://epoch.ai/trends) and other analysis that I’m pulling in, but this type of analysis I’m talking about, these takeoff dynamic analyses, I think maybe at this point it’s more like eight equivalent years. I was not pricing in a few Epoch papers. Maybe the Epoch people are going to call me out for underrating their hard work. But they’ve done a bunch of the background work of the statistics I’m pulling in and a lot of the trends I’m pulling in. But I think there hasn’t been that much work on the analysis here.
> 
> So I’m like, come on, eight person years? This is maybe the most important question, one of the most important questions. I don’t expect us to get that much signal on it, but it does have a huge effect, and it is a very big disagreement. I think a lot of people are sort of expecting that progress peters out around human level, or it just is relatively slow or it’s mostly bottlenecked on compute. And the question of whether this is true or not makes a huge difference.
> 
> …
> 
> Anyway, we had how fast is the initial speedup? Does it speed up or does it slow down? And we had what are the limits? Eventually it must slow down, right? So we have this model in which it maybe even initially is speeding up and it’s like continuing to speed up and it’s following this sort of hyperbolic trajectory where it’s going to infinity in finite time. Eventually that must end as you’re starting to near the limits. We don’t know when it starts to slow down. It’s going to slow down at some point.
> 
> But I think the all-considered model is: things might be very fast, it could happen quite quickly. I think the estimates imply my median is maybe we’re hitting about five or six orders of magnitude of progress in a year of algorithmic progress.
> 
> **Rob Wiblin:** And it’s a bit hard to know exactly what qualitative impact that will have on how smart the models will actually feel to us.
> 
> **Ryan Greenblatt:** Yeah, for sure. That is another big source of uncertainty. I’ve been doing this very econ-brain analysis, where I put everything in these effective compute units, and I’m doing a bunch of quick conversions back and forth to labour supply to get a bunch of things.
> 
> There’s a bunch of different ways of visualising this progress. I should also say there’s a few factors I’m neglecting, like you’re scaling up compute during this period and a bunch of other minor considerations. These are priced into my five or six OoMs of progress in a year. But I don’t think we should get too much into that.
> 
> Regardless, I don’t know… I have this sort of intuitive-to-me model of initial rate, speedup/slowdown limits, and then limits affect, even if it’s initially speeding up, when it starts slowing down again. Does this model sort of make sense to you?
> 
> **Rob Wiblin:** Yeah, I think that makes sense. Those are kind of the three big stylistic factors that you’re playing around with.
> 
> **Ryan Greenblatt:** Yeah. And then there’s a bunch of tricky details about, suppose the limit is this many OoMs away. The factor of is it speeding up or is it slowing down, and how does that change over time, you might think it’s initially speeding up and the time at which that stops is very close to the end of the limits. Or could be that it’s more continuous across the limits, and this will have a big effect on how many orders of magnitude you get.
> 
> But regardless, I think that’s the sort of intuitive model. I think people should play with this. I think playing with this sort of model is interesting. It’s pretty clear that this is both a simplified model and also has an insane number of moving parts that we have very little data to estimate. We’re sort of fitting this model in a massively extrapolated regime from trashy data. You know, what can we do? And including data as trashy as guessing how much more efficient you can be than the human brain.
> 
> So as you were saying, we’re very uncertain and we have huge error bars. My view is you’re going to get some initial speedup and you’re also going to be able to pile in more compute. So maybe the 25th percentile is like you get somewhat faster than previous years of progress, or the 25th percentile is plausibly just barely faster than preexisting progress. And I think that like 80th or 75th percentile might be like completely insane.
> 
> **Rob Wiblin:** So this is the question of, at the point that we are able to automate things, how much does it actually speed up what the company was doing? And you’re saying the 25th percentile of this is maybe it’s kind of just at roughly the same rate as it was before — but the 75th percentile, which is not even an extreme outcome, it’s radically speeding up the research.
> 
> **Ryan Greenblatt:** Yeah. At least quickly. It might be that the initial speedup is not that high, but the speedup increases over time and diminishes relatively slowly.
> 
> And also, I’ve been talking about this one-year timescale, but I think on a lot of the modelling most of the progress might happen in the first six months — because you’ve already started to hit this diminishing returns regime kind of quickly.
> 
> **Rob Wiblin:** It’s like the faster you go, the sooner you start hitting limits.
> 
> **Ryan Greenblatt:** Yeah, that’s right. And you know, it could go pretty different ways.

### **Neglected and important work people should be doing**

> **Rob Wiblin:** On the technical side, what are some of the things that stand out to you as particularly neglected and useful?
> 
> **Ryan Greenblatt:** I think more people should do control work relative to what’s going on. … I think that’s now a lot less neglected than it was, but still seems good to have more people working on.
> 
> I think more people should spend their time thinking about and working on how would you train AIs that are wise and are able to make decisions that are better than the decisions we would make. Basically how would you get to a point where you have ruled out the models plotting against you? How would you make them be the AIs that you are happy to hand over to? This is a much more conceptually thorny area, and I’m planning on spending more time thinking about what research projects should be spun out of that.
> 
> There’s a decent amount of work on what I would call “model internals” that people could work on. Maybe this is falling somewhat under control, but things like probing to make it so that we can detect if the models are taking misaligned actions. How would we do that? How would we know if it worked? This sort of thing.
> 
> There’s some work on maybe decoding uninterpretable reasoning. Suppose models learn to reason steganographically in their chain of thought —
> 
> **Rob Wiblin:** So this is that they’re scheming against you, but you can’t tell. It’s kind of encoded.
> 
> **Ryan Greenblatt:** Yeah. Steganographically is they’re using different symbols and you don’t understand what’s going on. Or maybe it looks like gibberish to you. Maybe it looks like one thing, but actually is another thing. Or maybe it’s like they’re doing a lot of latent reasoning. We talked earlier about maybe models doing a lot of reasoning in a latent way rather than in natural language, and being able to decode that reasoning in some way, and trying to figure out some methods for training decoders on that that work somewhat and give us some sense of what the AI is actually thinking, I think could be pretty helpful.
> 
> In addition to this, there’s a bunch of different work on demonstrating AIs are very capable now. I talked some about how I think there’s overhang in the level of capability that has been demonstrated. I think demonstrating that current systems are capable and future systems are very capable seems probably somewhat good at the margin, because I’m worried about situations where the world is not very prepared for what’s going on.
> 
> So things like demonstrating high levels of autonomous cybercapability, which I think is a sweet spot of both being directly relevant to a lot of threat models people are already considering, and also is not that far from the scenarios that we’re worried about, which do involve a lot of autonomous cyber activity, and that is actually a key part of the threat model. So it maybe bridges this divide in a nice way. And especially focusing on what is the best demo that we will ever be able to achieve in this realm.
> 
> Another big area that people should work on is what I would call model organisms: trying to produce empirical examples of a misaligned model to study how likely this is to arise and present evidence about that. So things like, does misalignment arise in XYZ circumstance? Does reward hacking emerge and how does it generalise? Things like the alignment faking paper and various continuations of that.
> 
> I think part of the hope here is gathering evidence. Part of the hope here is just having something to iterate on with techniques. Even model organisms which aren’t very convincing to the world or maybe don’t produce any evidence about misalignment one way or another, if they’re analogous enough that we can experiment on them, that could be potentially very useful.
> 
> **Rob Wiblin:** Because you can try to develop countermeasures that work in the model organism case that then hopefully will transfer?
> 
> **Ryan Greenblatt:** Yeah. I think a key difficulty with alignment overall is normally we solve problems with empirical iteration. And to the extent that a lot of our alignment failures make our tests deceptive, then if we can build some way to get around that in advance — or just be ready to build it in the last minute, and then do a bunch of iterations in those kinds of cases — I think that could be pretty helpful.
> 
> **Rob Wiblin:** OK, that was what seems most promising on the technical side. Are there things that stand out on governance or other angles?
> 
> **Ryan Greenblatt:** Yeah, I think there’s a variety of different room for non-technical interventions that seem pretty good. It’s hard for me to have very strong views on these things, because I don’t spend that long thinking about it. There’s a bunch of work.
> 
> We’ve gone through a lot of conceptual points here, and I think there’s room for people working on just figuring out all these details, trying to have a better understanding of takeoff dynamics, trying to have a better understanding of different considerations other than misalignment that might come up. Things like [how worried should we be about human power grabs](https://80000hours.org/podcast/episodes/tom-davidson-ai-enabled-human-power-grabs/)? How worried should we be about other issues? I think there’s some of that.
> 
> I think there’s a decent amount of work on just acting as an intermediary between the very in-the-weeds technical AI safety and the world of policy, and trying to translate that to some extent.
> 
> There’s a bunch of specific regulation that could potentially be good. I think making the [EU Code of Practice](https://artificialintelligenceact.eu/introduction-to-code-of-practice/) better seems good. The [EU AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office) is hiring, so you could work on that. I think there’s maybe other strategies for regulation that could actually be good.
> 
> I think there’s some stuff related to making coordination more likely or assisting with coordination that could be pretty helpful. Things like improving the compute governance regime so that the [US and China can verify various statements](https://80000hours.org/podcast/episodes/sihao-huang-china-ai-capabilities/) made about the current training process. I don’t have a strong view on how promising that is, but I think surprisingly few people are working on that, and that’s surprisingly uncoordinated. So maybe someone should get on that, because it could potentially be a pretty big deal.
> 
> In addition to that, I think just having a lot of people in positions where they’re just trying to provide technical expertise; they’re in a position where they’re currently building skills, they’re currently getting ready to have more direct impact; and will later, as stuff gets crazier, be ready to do something then.
> 
> Another one is just generic defence. So we talked earlier about AI takeover scenarios. A bunch of the AI takeover scenarios I was saying involve, for example, bioweapons. Just generically improving robustness to bioweapons seems like it helps some. It’s complicated the extent to which it helps, but I think it helps some.
> 
> Similar for making the world more robust to AIs hacking stuff. I think it helps some. I think it’s probably less leveraged than other things, but interventions that steer more resources to those things seem good from a wide variety of perspectives and potentially different assumptions about misalignment. I think those things maybe make a lot of sense even with no misalignment risks at all, for example.
> 
> **Rob Wiblin:** Yeah, I guess because misuse is also an issue.
> 
> **Ryan Greenblatt:** Yeah. And in addition to that, there’s a bunch of different work on security that could be good. So some of the threat models I was discussing involve various outcomes, like the model exfiltrating itself. They involve the model being internally deployed in a rogue way, where it’s bypassing your security and potentially using a bunch of compute it’s not supposed to.
> 
> I think pushing back the time at which these things happen via security mechanisms seems good. Also security to [prevent human actors from stealing the model](https://80000hours.org/podcast/episodes/sella-nevo-securing-ai-model-weights/) could potentially increase the probability that there is delay and increase the probability of less racing, more caution.