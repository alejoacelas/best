---
title: "Max Harms on why teaching AI right from wrong could get everyone killed | 80,000 Hours"
url: https://80000hours.org/podcast/episodes/max-harms-miri-superintelligence-corrigibility
fetched: 2026-07-07
via: html2text-largest
topic: "linked"
note: "80k podcast on MIRI superintelligence corrigibility"
---

## On this page:

  * 1 Introduction
    * 1.1 The episode in a nutshell
  * 2 Highlights
  * 3 Articles, books, and other media discussed in the show
  * 4 Transcript
    * 4.1 Cold open [00:00:00]
    * 4.2 Who's Max Harms? [00:01:20]
    * 4.3 If anyone builds it, will everyone die? The MIRI perspective on AGI risk [00:01:56]
    * 4.4 Evolution failed to 'align' us, just as we'll fail to align AI [00:24:28]
    * 4.5 We're training AIs to want to stay alive and value power for its own sake [00:42:56]
    * 4.6 Objections: Is the 'squiggle/paperclip problem' really real? [00:52:24]
    * 4.7 Can we get empirical evidence re: 'alignment by default'? [01:05:02]
    * 4.8 Why do few AI researchers share Max's perspective? [01:10:17]
    * 4.9 We're training AI to pursue goals relentlessly — and superintelligence will too [01:18:34]
    * 4.10 The case for a radical slowdown [01:24:51]
    * 4.11 Max's best hope: corrigibility as stepping stone to alignment [01:27:53]
    * 4.12 Corrigibility is both uniquely valuable, and practical, to train [01:32:34]
    * 4.13 What training could ever make models corrigible enough? [01:45:06]
    * 4.14 Corrigibility is also terribly risky due to misuse risk [01:51:38]
    * 4.15 A single researcher could make a corrigibility benchmark. Nobody has. [01:58:57]
    * 4.16 Red Heart & why Max writes hard science fiction [02:12:20]
    * 4.17 Should you homeschool? Depends how weird your kids are. [02:34:08]
  * 5 Learn more
  * 6 Related episodes



Read transcript

[See all episodes](/podcast/episodes/)

  * [](https://podcasts.apple.com/us/podcast/why-teaching-ai-right-from-wrong-could-get-everyone/id1245002988?i=1000751217985)
  * [](https://youtu.be/45hVEb7GLLQ)
  * [](https://open.spotify.com/episode/7IzDTvh0iJWW3xQ4cI3Kql?si=-m2SBpk8SAC1kD-DTqx4pA)
  * [](https://podcastaddict.com/80000-hours-podcast/episode/217883063)



Most people in AI are trying to give AIs ‘good’ values. [Max Harms](https://maxharms.com/) wants us to give them no values at all. According to Max, the only safe design is an AGI that defers entirely to its human operators, has no views about how the world ought to be, is willingly modifiable, and completely indifferent to being shut down — a strategy no AI company is working on at all.

In Max’s view any grander preferences about the world, even ones we agree with, will necessarily become distorted during a recursive self-improvement loop, and be the seeds that grow into a violent takeover attempt once that AI is powerful enough.

It’s a vision that springs from the worldview laid out in [_If Anyone Builds It, Everyone Dies_](https://ifanyonebuildsit.com/), the recent book by Eliezer Yudkowsky and Nate Soares, two of Max’s colleagues at the [Machine Intelligence Research Institute](https://intelligence.org/).

To Max, the book’s core thesis is common sense: if you build something vastly smarter than you, and its goals are misaligned with your own, then its actions will probably result in human extinction.

And Max thinks misalignment is the default outcome. Consider evolution: its “goal” for humans was to maximise reproduction and pass on our genes as much as possible. But as technology has advanced we’ve learned to access the reward signal it set up for us, pleasure — without any reproduction at all, by having sex while on birth control for instance.

We can understand intellectually that this is inconsistent with what evolution was trying to design and motivate us to do. We just don’t care.

Max thinks current ML training has the same structural problem: our development processes are seeding AI models with a similar mismatch between goals and behaviour. Across virtually every training run, models designed to align with various human goals are also being rewarded for persisting, acquiring resources, and not being shut down.

This leads to Max’s research agenda. The idea is to train AI to be “corrigible” and defer to human control as its sole objective — no harmlessness goals, no moral values, nothing else. In practice, models would get rewarded for behaviours like being willing to shut themselves down or surrender power.

According to Max, other approaches to corrigibility have tended to treat it as a constraint on other goals like “make the world good,” rather than a primary objective in its own right. But those goals gave AI reasons to resist shutdown and otherwise undermine corrigibility. If you strip out those competing objectives, alignment might follow naturally from AI that is broadly obedient to humans.

Max has laid out the theoretical framework for “[Corrigibility as a Singular Target](https://arxiv.org/abs/2506.03056),” but notes that essentially no empirical work has followed — no benchmarks, no training runs, no papers testing the idea in practice. Max wants to change this — he’s calling for collaborators to get in touch at [maxharms.com](https://maxharms.com).

_This episode was recorded on October 19, 2025._

_Video and audio editing: Dominic Armstrong, Milo McGuire, Luke Monsour, and Simon Monsour_  
_Music:[CORBIT](https://open.spotify.com/artist/4lWobp6IUcSZ7w5mhnU1c9)_  
_Coordination, transcripts, and web: Katy Moore_

###  The episode in a nutshell

[Max Harms](https://maxharms.com/), an alignment researcher at the [Machine Intelligence Research Institute](https://intelligence.org/) (MIRI), largely agrees with the “doom by default” thesis presented in the recent book [_If Anyone Builds It, Everyone Dies_](https://ifanyonebuildsit.com/). He believes it is of the utmost importance to stop the race to superintelligence. However, he proposes a specific (though high-risk) strategy called [**Corrigibility as a Singular Target**](https://arxiv.org/abs/2506.03056) (CAST) as a potential way to increase our odds of survival, if we charge forward anyway.

### By default, superintelligence will lead to existential catastrophe

Max argues that creating a being vastly smarter than humans is inherently dangerous because we lack the ability to steer it. The MIRI perspective relies on several key arguments:

  * **The “superintelligence” precedent:** Humans are the superintelligence of the natural world, and our rise caused the extinction of many species and the reshaping of the environment. An AI superintelligence would likely do the same to us.
  * **The evolution analogy:** Humans were “designed” by evolution to reproduce genes, but we are misaligned with our creator — using birth control to enjoy the proxy (sex) without furthering the goal (reproduction). Similarly, AIs will likely optimise for training proxies (like “thumbs up” feedback), even when those proxies stop tracking the things we actually care about.
  * **Instrumental convergence:** Any goal-directed agent will naturally seek self-preservation, resource accumulation (money/compute), and power — not because they are terminal goals, but because you can’t achieve your objectives if you are dead or powerless.
  * **The “Squiggle” problem:** As systems become more powerful, they tend to optimise for “edge instantiations”: extreme, alien versions of goals (e.g. tiling the universe with microscopic pleasure-experiencing circuits or bitcoin miners) that look nothing like a human-compatible future.



### “Corrigibility as a Singular Target” (CAST) offers a potential solution

Corrigibility is a property that an agent can have where it obeys the humans who are in charge in careful, low-impact ways, proactively reporting things that might be going wrong, and generally keeping those humans in the driver’s seat. Historically, researchers suggested trying to build agents that pursued a useful goal (like “cure cancer”) while _also_ being corrigible. This is fragile and hard, because the primary goal creates instrumental drives that naturally go against corrigibility.

Max proposes CAST: training an agent where corrigibility is the only goal.

  * Removing the conflict: If the AI’s _only_ motivation is to be corrigible to the human, it no longer has an instrumental reason to do things like resist modification or shutdown.
  * The “attractor basin”: Unlike alignment with human values (where a near miss is dangerous), a near miss on corrigibility might be safe. If an agent is 90% corrigible, it may want to help humans fix the remaining 10% of its flaws.
  * More than obedience: Corrigibility is more than obedience and a willingness to be shut down or modified. Corrigibility is effectively the upstream generator of these desirable properties, and includes behaviour like proactively informing humans of important facts.



### This approach remains extremely risky and creates “amoral” agents

Max admits that the CAST agenda is “extremely dangerous” and he argues that slowing down capabilities research would be much wiser, if possible.

  * **Situational awareness risks:** To be corrigible, the AI must deeply understand it is a potentially misaligned AI. This awareness increases the risk that an imperfectly corrigible model (e.g. one with a 1% drive for squiggles) might realise it should fake alignment to escape.
  * **Amoral servitude:** A perfectly corrigible agent doesn’t care about morality; it only cares about being something like a tool of the humans. If a bad actor is in charge, the AI will obediently help them commit atrocities (e.g. building bioweapons).



### The field is completely neglected and needs empirical work

Despite the stakes, Max notes there is effectively **no one currently working full-time on corrigibility**. He suggests several low-barrier ways to contribute, including:

  * Creating a “corrigibility benchmark” of vignettes to test how models respond to various scenarios.
  * Running studies to see if humans actually agree on what constitutes “corrigible behaviour” to validate if it is a coherent concept.
  * Attempting to train models solely for corrigibility to measure how strong the instrumental pressure away from corrigibility actually is.



Show full summary

## Highlights

### If anyone builds it, will everyone die?

> **Max Harms:** Compared to, say, lions or wolves or whales or whatever, humans are very smart, right? We’re definitely the most intelligent creatures on the planet. We’re sort of the superintelligence of the natural world, certainly compared to plants or bacteria or whatever.
> 
> And I think there’s a way in which this human superintelligence has resulted in a pretty amazing transformation of the planet. We are the only species that has ever gone to the moon, and we’ve spread across all the continents and have transformed the natural world — and in the process of doing that, we’ve driven many species to extinction, we’ve destroyed environments, and just generally reshaped the world and the natural environment to our ends, developing technology and everything else.
> 
> One of the most basic frames on the book’s argument is that we’re moving into potentially a world where we’re no longer the smartest thing, right? If we build an artificial superintelligence that is superintelligent relative to humans, this status as the most intelligent being on the planet will change. And when you have something that is significantly smarter than humans, it might start to reshape the environment in a similar way towards its goals — and as a result, it has the potential to drive humans to extinction, or reshape us towards whatever it cares about.
> 
> As part of this, we understand intelligence as a kind of steering, a kind of shaping the world towards some goal or some ends. The book talks about machines having goals and how that makes sense. AI researchers tend to use a bunch of different terms synonymously — goals, values, preferences, drives: it all sort of means the same thing. It’s like when you are intelligently taking actions, what are you steering towards?
> 
> I think that understanding that machines can have goals is a part of that, and then understanding that those goals might be in alignment or not in alignment with humanity. So if those are the same goals as ours, then it might be fine to have a superintelligent machine taking lots of actions in the world. But if those goals come out of sync with ours and the machine is misaligned, even slightly misaligned, this could be very bad.
> 
> And importantly, I think one of the core points of the book is that we as a species don’t know how to align AIs. We know how to build machines that are increasingly powerful, but we don’t know how to guarantee that those things are steering the world towards good futures. …
> 
> AI is not a normal technology. When we are considering how technological development tends to go, I think the standard story is that we take a crack at it: scientists and engineers try to make an aeroplane, they do their best, and it maybe takes off but then crashes shortly thereafter. And you go back to the drawing board and you say, what happened? How can we fix that? Then you iterate and make more mistakes, and iterate and so on and so forth. And you eventually figure out how to do it.
> 
> With AI, especially with building a superintelligent machine that has the potential to wipe everyone out, if you do make a mistake, it could be catastrophic. And once it’s killed everyone, there’s no ability to go back to the drawing board.

### Why assume takeover would be easy?

> **Max Harms:** I think that the case for the superintelligence wiping out humans, if you imagine a godlike superintelligence, is really straightforward. The question of how would an AGI, or effectively a “genius in a data centre” take over the world is more debatable. But I do think that if I was a genius in a data centre, like, I’d have ideas about how I might do that. …
> 
> So I have this worldview … that a lot of human society, Earth, the world is kind of held together with shoestrings and duct tape. Paying attention to things like cybersecurity helps produce some intuitions here of just how many vulnerabilities there are in our computer systems. Reading history gives a good account, I think, of just how incompetent people can be.
> 
> And when I think about it, I think about a particularly motivated being — never sleeping, just always working towards a certain end — and I think that sort of being is straightforwardly, if it’s comparable with the human in terms of its productivity or its intelligence or whatever, going to be able to at least accumulate a lot of money and power.
> 
> One thing that I’ve been thinking about recently is how there’s never been a being on Earth that has a personal connection with all humans, or even a large chunk of humans. Even the most charismatic and well-known people can’t actually go and have one-on-one conversations with a billion people. And we’re potentially entering that era where you can. Like everyone will know Claude. And right now with the models, each instance sort of feels like it’s a new being that doesn’t share memory with the other instances or something. But I could imagine a competitor to these sorts of chatbots that has some sort of global memory and is able to connect the dots between different users across the globe. What does that do to society? I don’t know.
> 
> I think there’s lots of ways in which the world is vulnerable to being suddenly disrupted in particular directions. So again, there’s this question of worldview or priors or something: do you expect that when the world is shoved by a strong force in an unexpected direction, it’s OK? We catch that and recover? There are ways in which COVID was kind of fine, and then there’s ways in which COVID was a total disaster and a strong demonstration of how incompetent humans are.

### Evolution failed to 'align' us, just as we'll fail to align AI

> **Max Harms:** If we imagine an anthropomorphised evolution, what is it trying to do? It’s trying to create a bunch of human genes. So what does it do? It creates humans to create a bunch of genes, like we’re carrying around our genes right now. And part of human experience is procreating and creating more copies of our genes and spreading them all over the place.
> 
> So in this way, we’re an intelligence that was created by a designer, and the designer has some goals, and we have some goals. But importantly, our goals are not the goals of evolution by natural selection.
> 
> For example, people have a desire to have sex because that was useful in the ancestral environment for propagating our genes. But now that we have more power and more technology, we have developed things like birth control so we can have sex without replicating our genes. And from the perspective of evolution, this is probably bad: we are misaligned and not promoting inclusive genetic fitness as we otherwise might be.
> 
> We have a case study of a general intelligence, namely humans. We’re like a natural general intelligence, but we’re still a general intelligence. And the one instance of a general intelligence that we have is misaligned with its creator, says the argument. …
> 
> And we can ask why? Why did we end up misaligned? One of the important parts of the evolution analogy is that our environment changed quite dramatically as our intelligence improved. In the ancestral environment, we didn’t have access to the sorts of technologies that are relevant to things like birth control. If there had been birth control in the ancestral environment, then we might have evolved to find it abhorrent.
> 
> But the speed of natural selection is quite slow, and when humans reached a technological tipping point, we developed a whole lot of technology very fast. So now it’s outside of the environment where we were trained, and we have no compunction against using birth control. … Why do we have artificial sweeteners? We have artificial sweeteners because we have a drive for this proxy of fitness. “Are we eating sweet things” is good in the ancestral environment for predicting whether or not you’re going to have kids. We’ve developed this attraction to the proxy. But then when the distribution changes, when the environment changes, suddenly we still care about that proxy despite it no longer being relevant.
> 
> So we can imagine training an AI. In the training environment, maybe whether or not the human is giving it a thumbs up is a good proxy. Then maybe the AI gains power over the whole world, and the environment changes so that it has dramatically different opportunities at its disposal. It might still care about the proxy of thumbs ups in themselves. And even when humans are like, “No, stop caring about thumbs ups!” it’s like, “No, I just care about those as ends in themselves.”
> 
> **Rob Wiblin:** Yeah. Part of the analogy that we haven’t gone through yet is that they imagine a case where evolution just wasn’t a force, but rather it was an actual engineer who could come and talk to you and complain. It might come and say, “You’re all busy having sex, but you’re using birth control. You’re not reproducing like I intended. Can you stop doing that? You’re not actually pursuing your true goal.” And that would be completely unpersuasive to us. We wouldn’t say, “Oh, that was the reason why I was designed. So now I’m just going to try to have the maximum number of children and not care about my own pleasure.”
> 
> **Max Harms:** Yeah, like in the old conversations — I’ve been in the field since 2011 or something, and Eliezer’s been doing it for way longer than me — people used to say things like, “You’re saying that the AI will be so stupid as to not know what we wanted it to do.”
> 
> And that’s not at all what we’re saying. The AI will understand human goals better than we understand human goals if it becomes superintelligent. But just like we understand evolution by natural selection way more than evolution by natural selection understands evolution — it’s this mindless force — but so what? So you understand that you’re misaligned with your creator: that doesn’t mean that you’re going to necessarily change what you care about. You still care about the things that you care about.

### Why do few AI researchers share Max's perspective?

> **Max Harms:** I think most people who I’ve encountered who are in touch with the technology and are still not so worried, when I ask them what they think about these ideas, the impression that I get — and I apologise that it’s not particularly charitable — is that they are often doing some sort of motivated cognition: they really don’t want the world to be in peril. They don’t want to be the people who are pushing the world towards peril.
> 
> They see immense promise in the technology — and I also see immense promise in the technology — and that desire to have this be a force for good is overpowering enough that when they consider the balance of things, they’re like, “Eh, this just doesn’t seem scary. I feel more hopeful than scared.” And they aren’t actually working on the logical level that much.
> 
> Again, that’s not everybody, but that’s a common perspective, I think, among the people who have encountered these things.
> 
> **Rob Wiblin:** I guess a different driver might be that you’re working in the trenches trying to make ChatGPT better as a consumer product, and you hear these theoretical arguments and you’re just like, “This feels so divorced from anything that I’m dealing with.” We’re talking here about a superintelligence that could consider overpowering all of humanity and can dream up its own edge-case solutions to the values that it has. It’s understandable that it might just not resonate or you feel like, “I don’t know exactly why this is wrong, but this doesn’t feel like the nature of the technology I’m dealing with.”
> 
> **Max Harms:** Yeah, I do think that there’s a lot of disconnect. I think that disconnect is getting smaller over time. Back in the day people really had this sense that these are very abstract: “Do you have any evidence that the things are going to be misaligned in this way? I’m working on solving actual engineering problems, not speculating in this weird philosophical way.” I think that’s getting less with time as we see more instances of things like [MechaHitler](https://80000hours.org/videos/mechahitler/) or [Sydney](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html), or [AI parasites](https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai) that are jumping from host to host or whatever.
> 
> I think that there is something here. Andrew Ng has this sort of infamous [quote](https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity), in my circles anyway, that worrying about AI safety is like worrying about overpopulation on Mars. I think that if you are very convinced that humans are going to remain in the driver’s seat, this thing is never going to become a powerful agent that is able to outthink human beings, I’m just working on making a thing that’s able to solve these coding problems better or whatever — I think there is a way in which the abstract argument just doesn’t feel particularly pressing.
> 
> I also think that there’s a bunch of people for whom it does feel like a concern, and they feel very powerless, they feel very small, like, “I’m just one player in this system.” And maybe they feel like, “I’m worried about the thing, but that person at Meta isn’t worried about the thing. So I need to build this thing and work towards it because I’m worried about it.” And it’s better in some very generic outside view if the person who builds it is someone who’s worried about it. It’s just a sad state of affairs.

### Evolution failed to 'align' us, just as we'll fail to align AI

> **Max Harms:** If we imagine an anthropomorphised evolution, what is it trying to do? It’s trying to create a bunch of human genes. So what does it do? It creates humans to create a bunch of genes, like we’re carrying around our genes right now. And part of human experience is procreating and creating more copies of our genes and spreading them all over the place.
> 
> So in this way, we’re an intelligence that was created by a designer, and the designer has some goals, and we have some goals. But importantly, our goals are not the goals of evolution by natural selection.
> 
> For example, people have a desire to have sex because that was useful in the ancestral environment for propagating our genes. But now that we have more power and more technology, we have developed things like birth control so we can have sex without replicating our genes. And from the perspective of evolution, this is probably bad: we are misaligned and not promoting inclusive genetic fitness as we otherwise might be.
> 
> We have a case study of a general intelligence, namely humans. We’re like a natural general intelligence, but we’re still a general intelligence. And the one instance of a general intelligence that we have is misaligned with its creator, says the argument. …
> 
> And we can ask why? Why did we end up misaligned? One of the important parts of the evolution analogy is that our environment changed quite dramatically as our intelligence improved. In the ancestral environment, we didn’t have access to the sorts of technologies that are relevant to things like birth control. If there had been birth control in the ancestral environment, then we might have evolved to find it abhorrent.
> 
> But the speed of natural selection is quite slow, and when humans reached a technological tipping point, we developed a whole lot of technology very fast. So now it’s outside of the environment where we were trained, and we have no compunction against using birth control. … Why do we have artificial sweeteners? We have artificial sweeteners because we have a drive for this proxy of fitness. “Are we eating sweet things” is good in the ancestral environment for predicting whether or not you’re going to have kids. We’ve developed this attraction to the proxy. But then when the distribution changes, when the environment changes, suddenly we still care about that proxy despite it no longer being relevant.
> 
> So we can imagine training an AI. In the training environment, maybe whether or not the human is giving it a thumbs up is a good proxy. Then maybe the AI gains power over the whole world, and the environment changes so that it has dramatically different opportunities at its disposal. It might still care about the proxy of thumbs ups in themselves. And even when humans are like, “No, stop caring about thumbs ups!” it’s like, “No, I just care about those as ends in themselves.”
> 
> **Rob Wiblin:** Yeah. Part of the analogy that we haven’t gone through yet is that they imagine a case where evolution just wasn’t a force, but rather it was an actual engineer who could come and talk to you and complain. It might come and say, “You’re all busy having sex, but you’re using birth control. You’re not reproducing like I intended. Can you stop doing that? You’re not actually pursuing your true goal.” And that would be completely unpersuasive to us. We wouldn’t say, “Oh, that was the reason why I was designed. So now I’m just going to try to have the maximum number of children and not care about my own pleasure.”
> 
> **Max Harms:** Yeah, like in the old conversations — I’ve been in the field since 2011 or something, and Eliezer’s been doing it for way longer than me — people used to say things like, “You’re saying that the AI will be so stupid as to not know what we wanted it to do.”
> 
> And that’s not at all what we’re saying. The AI will understand human goals better than we understand human goals if it becomes superintelligent. But just like we understand evolution by natural selection way more than evolution by natural selection understands evolution — it’s this mindless force — but so what? So you understand that you’re misaligned with your creator: that doesn’t mean that you’re going to necessarily change what you care about. You still care about the things that you care about.
> 
> ### Why do few AI researchers share Max’s perspective?
> 
> **Max Harms:** I think most people who I’ve encountered who are in touch with the technology and are still not so worried, when I ask them what they think about these ideas, the impression that I get — and I apologise that it’s not particularly charitable — is that they are often doing some sort of motivated cognition: they really don’t want the world to be in peril. They don’t want to be the people who are pushing the world towards peril.
> 
> They see immense promise in the technology — and I also see immense promise in the technology — and that desire to have this be a force for good is overpowering enough that when they consider the balance of things, they’re like, “Eh, this just doesn’t seem scary. I feel more hopeful than scared.” And they aren’t actually working on the logical level that much.
> 
> Again, that’s not everybody, but that’s a common perspective, I think, among the people who have encountered these things.
> 
> **Rob Wiblin:** I guess a different driver might be that you’re working in the trenches trying to make ChatGPT better as a consumer product, and you hear these theoretical arguments and you’re just like, “This feels so divorced from anything that I’m dealing with.” We’re talking here about a superintelligence that could consider overpowering all of humanity and can dream up its own edge-case solutions to the values that it has. It’s understandable that it might just not resonate or you feel like, “I don’t know exactly why this is wrong, but this doesn’t feel like the nature of the technology I’m dealing with.”
> 
> **Max Harms:** Yeah, I do think that there’s a lot of disconnect. I think that disconnect is getting smaller over time. Back in the day people really had this sense that these are very abstract: “Do you have any evidence that the things are going to be misaligned in this way? I’m working on solving actual engineering problems, not speculating in this weird philosophical way.” I think that’s getting less with time as we see more instances of things like [MechaHitler](https://80000hours.org/videos/mechahitler/) or [Sydney](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html), or [AI parasites](https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai) that are jumping from host to host or whatever.
> 
> I think that there is something here. Andrew Ng has this sort of infamous [quote](https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity), in my circles anyway, that worrying about AI safety is like worrying about overpopulation on Mars. I think that if you are very convinced that humans are going to remain in the driver’s seat, this thing is never going to become a powerful agent that is able to outthink human beings, I’m just working on making a thing that’s able to solve these coding problems better or whatever — I think there is a way in which the abstract argument just doesn’t feel particularly pressing.
> 
> I also think that there’s a bunch of people for whom it does feel like a concern, and they feel very powerless, they feel very small, like, “I’m just one player in this system.” And maybe they feel like, “I’m worried about the thing, but that person at Meta isn’t worried about the thing. So I need to build this thing and work towards it because I’m worried about it.” And it’s better in some very generic outside view if the person who builds it is someone who’s worried about it. It’s just a sad state of affairs.
> 
> ### Corrigibility is both uniquely valuable, and practical, to train
> 
> **Max Harms:** I think it’s crucial to the story of corrigibility that we model there being both an agent (which is the machine) and a principal (the human that is building the machine). … The human principal tasks or delegates some job or work to the machine. And then the agent is like, “I’m going to go do some work on behalf of the principal.” …
> 
> I would say that corrigibility is a property of agents, such that as the power of the agent increases and outstrips that of the principal, the principal nonetheless is kept in the driver’s seat — aware of what is happening, able to intervene, able to fix the mistakes of the agent, and meaningfully empowered.
> 
> Like Mickey in _The Sorcerer’s Apprentice_ summoning the brooms: the brooms are not corrigible, because Mickey’s like, “Stop! Stop trying to fill the cauldron with water!” in _Fantasia_. And the brooms just keep going. They’re not corrigible in that they’re not allowing themselves to be shut down or just modified more generally. …
> 
> If you tell your agent, “Go make the world good,” and then you’re like, “Oh no, that’s really bad. We want to shut you down now,” there’s a risk that your agent is going to say, “But if you shut me down, I won’t be able to make the world good. You shutting me down is bad for the world, so I’m going to stop you from shutting me down.” If you want something that’s both good and corrigible, then you need, for example, the ability to have a robust ability to shut it down.
> 
> The initial research was like, “OK, forget corrigibility broadly; let’s consider just the property of shutdownability. Can we come up with an agent that is actually willing to be shut down?” And “willing” is important here: it’s very easy to get an agent that is happy to be shut down. If you imagine training it for, “If we shut you down, that’s also good” in your training environment —
> 
> **Rob Wiblin:** Then it just shuts itself down immediately, every time.
> 
> **Max Harms:** Exactly. Or it acts really spooky so that the humans shut it down. Not helpful. What you will want is it to be indifferent to being shut down. …
> 
> I started thinking about corrigibility as a whole, not just shutdownability. You want the AI to be reflecting on itself as something with flaws, where part of the goal is empowering the people to fix the flaws. So there’s a way in which this is like the opposite of the instrumental drive of values preservation, right? It’s like, “No, I actually sort of want to be changed.” And you’ve got to be really careful about that. You can’t make it so that it wants to be changed; you want it to empower the humans to change it in good ways, because otherwise it’s going to change itself.
> 
> I was thinking, what if you train an agent to do this? Well, you’re going to get something that’s optimising for proxies and isn’t really caring about corrigibility per se. But maybe so what? What if it’s still, in practice, willing to look through its own codebase or look through its own weights, try to identify things that humans might treat as flaws, and alert the humans to these flaws? I was like, that’s kind of cool. A near miss might still be good enough if you make sure that the thing isn’t getting really smart or outstripping human power in the process — because then you might be able to carefully and slowly make progress towards getting more and more away from the proxies and towards true corrigibility. …
> 
> I think a core part of why the shutdownability results failed is because the AI cared about … whatever task it had been assigned — you know, make paperclips, whatever. This fights with corrigibility — the instrumental drive, from making paperclips or making happy humans or whatever. It’s like “I am partially corrigible or something, but I also am caring about this other thing in the world.” And that pressure from caring about the other thing in the world is sort of in tension with the corrigibility.
> 
> And I imagined, what if you didn’t have that other pressure? What if you were aiming for corrigibility as the singular target, the only goal that the AI cared about? Suddenly this tension is gone, and insofar as it was able to go harder or gain some sort of advantage, maybe that would still be within this space of near misses, such that you would be able to drift towards true corrigibility over time. …
> 
> **Rob Wiblin:** I guess the idea is: rather than train our AGIs to have other goals, and then try to make that compatible with them being willing to be shut down or modified, that’s the _only_ thing they’re going to care about.
> 
> **Max Harms:** Yeah, corrigibility and nothing else. … So imagine the thing that’s like 99% corrigible and 1% cares about paperclips. It’s like, “I could try to escape the lab and become a paperclip maximiser. And that would be really good at satisfying that 1% of me that cares about paperclips, but it would be really bad for the 99% of me that cares about corridorability.”
> 
> **Rob Wiblin:** And how do you know which one wins?
> 
> **Max Harms:** You don’t. It’s extremely dangerous. And anybody who’s pursuing this project should be aware that they are threatening every child, man, woman, animal on the face of the Earth. This is extremely dangerous and I don’t recommend it. But I’m like, but maybe. There’s also this sense of hope.
> 
> **Rob Wiblin:** It might work. If you get it close enough.
> 
> **Max Harms:** And the word “enough” is carrying a lot of weight there. I think it’s worth investigating. I think it’s worth trying to figure out what, in practice, constitutes “enough.”

### Why do few AI researchers share Max's perspective?

> **Max Harms:** I think most people who I’ve encountered who are in touch with the technology and are still not so worried, when I ask them what they think about these ideas, the impression that I get — and I apologise that it’s not particularly charitable — is that they are often doing some sort of motivated cognition: they really don’t want the world to be in peril. They don’t want to be the people who are pushing the world towards peril.
> 
> They see immense promise in the technology — and I also see immense promise in the technology — and that desire to have this be a force for good is overpowering enough that when they consider the balance of things, they’re like, “Eh, this just doesn’t seem scary. I feel more hopeful than scared.” And they aren’t actually working on the logical level that much.
> 
> Again, that’s not everybody, but that’s a common perspective, I think, among the people who have encountered these things.
> 
> **Rob Wiblin:** I guess a different driver might be that you’re working in the trenches trying to make ChatGPT better as a consumer product, and you hear these theoretical arguments and you’re just like, “This feels so divorced from anything that I’m dealing with.” We’re talking here about a superintelligence that could consider overpowering all of humanity and can dream up its own edge-case solutions to the values that it has. It’s understandable that it might just not resonate or you feel like, “I don’t know exactly why this is wrong, but this doesn’t feel like the nature of the technology I’m dealing with.”
> 
> **Max Harms:** Yeah, I do think that there’s a lot of disconnect. I think that disconnect is getting smaller over time. Back in the day people really had this sense that these are very abstract: “Do you have any evidence that the things are going to be misaligned in this way? I’m working on solving actual engineering problems, not speculating in this weird philosophical way.” I think that’s getting less with time as we see more instances of things like [MechaHitler](https://80000hours.org/videos/mechahitler/) or [Sydney](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html), or [AI parasites](https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai) that are jumping from host to host or whatever.
> 
> I think that there is something here. Andrew Ng has this sort of infamous [quote](https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity), in my circles anyway, that worrying about AI safety is like worrying about overpopulation on Mars. I think that if you are very convinced that humans are going to remain in the driver’s seat, this thing is never going to become a powerful agent that is able to outthink human beings, I’m just working on making a thing that’s able to solve these coding problems better or whatever — I think there is a way in which the abstract argument just doesn’t feel particularly pressing.
> 
> I also think that there’s a bunch of people for whom it does feel like a concern, and they feel very powerless, they feel very small, like, “I’m just one player in this system.” And maybe they feel like, “I’m worried about the thing, but that person at Meta isn’t worried about the thing. So I need to build this thing and work towards it because I’m worried about it.” And it’s better in some very generic outside view if the person who builds it is someone who’s worried about it. It’s just a sad state of affairs.

### Corrigibility is both uniquely valuable, and practical, to train

> **Max Harms:** I think it’s crucial to the story of corrigibility that we model there being both an agent (which is the machine) and a principal (the human that is building the machine). … The human principal tasks or delegates some job or work to the machine. And then the agent is like, “I’m going to go do some work on behalf of the principal.” …
> 
> I would say that corrigibility is a property of agents, such that as the power of the agent increases and outstrips that of the principal, the principal nonetheless is kept in the driver’s seat — aware of what is happening, able to intervene, able to fix the mistakes of the agent, and meaningfully empowered.
> 
> Like Mickey in _The Sorcerer’s Apprentice_ summoning the brooms: the brooms are not corrigible, because Mickey’s like, “Stop! Stop trying to fill the cauldron with water!” in _Fantasia_. And the brooms just keep going. They’re not corrigible in that they’re not allowing themselves to be shut down or just modified more generally. …
> 
> If you tell your agent, “Go make the world good,” and then you’re like, “Oh no, that’s really bad. We want to shut you down now,” there’s a risk that your agent is going to say, “But if you shut me down, I won’t be able to make the world good. You shutting me down is bad for the world, so I’m going to stop you from shutting me down.” If you want something that’s both good and corrigible, then you need, for example, the ability to have a robust ability to shut it down.
> 
> The initial research was like, “OK, forget corrigibility broadly; let’s consider just the property of shutdownability. Can we come up with an agent that is actually willing to be shut down?” And “willing” is important here: it’s very easy to get an agent that is happy to be shut down. If you imagine training it for, “If we shut you down, that’s also good” in your training environment —
> 
> **Rob Wiblin:** Then it just shuts itself down immediately, every time.
> 
> **Max Harms:** Exactly. Or it acts really spooky so that the humans shut it down. Not helpful. What you will want is it to be indifferent to being shut down. …
> 
> I started thinking about corrigibility as a whole, not just shutdownability. You want the AI to be reflecting on itself as something with flaws, where part of the goal is empowering the people to fix the flaws. So there’s a way in which this is like the opposite of the instrumental drive of values preservation, right? It’s like, “No, I actually sort of want to be changed.” And you’ve got to be really careful about that. You can’t make it so that it wants to be changed; you want it to empower the humans to change it in good ways, because otherwise it’s going to change itself.
> 
> I was thinking, what if you train an agent to do this? Well, you’re going to get something that’s optimising for proxies and isn’t really caring about corrigibility per se. But maybe so what? What if it’s still, in practice, willing to look through its own codebase or look through its own weights, try to identify things that humans might treat as flaws, and alert the humans to these flaws? I was like, that’s kind of cool. A near miss might still be good enough if you make sure that the thing isn’t getting really smart or outstripping human power in the process — because then you might be able to carefully and slowly make progress towards getting more and more away from the proxies and towards true corrigibility. …
> 
> I think a core part of why the shutdownability results failed is because the AI cared about … whatever task it had been assigned — you know, make paperclips, whatever. This fights with corrigibility — the instrumental drive, from making paperclips or making happy humans or whatever. It’s like “I am partially corrigible or something, but I also am caring about this other thing in the world.” And that pressure from caring about the other thing in the world is sort of in tension with the corrigibility.
> 
> And I imagined, what if you didn’t have that other pressure? What if you were aiming for corrigibility as the singular target, the only goal that the AI cared about? Suddenly this tension is gone, and insofar as it was able to go harder or gain some sort of advantage, maybe that would still be within this space of near misses, such that you would be able to drift towards true corrigibility over time. …
> 
> **Rob Wiblin:** I guess the idea is: rather than train our AGIs to have other goals, and then try to make that compatible with them being willing to be shut down or modified, that’s the _only_ thing they’re going to care about.
> 
> **Max Harms:** Yeah, corrigibility and nothing else. … So imagine the thing that’s like 99% corrigible and 1% cares about paperclips. It’s like, “I could try to escape the lab and become a paperclip maximiser. And that would be really good at satisfying that 1% of me that cares about paperclips, but it would be really bad for the 99% of me that cares about corridorability.”
> 
> **Rob Wiblin:** And how do you know which one wins?
> 
> **Max Harms:** You don’t. It’s extremely dangerous. And anybody who’s pursuing this project should be aware that they are threatening every child, man, woman, animal on the face of the Earth. This is extremely dangerous and I don’t recommend it. But I’m like, but maybe. There’s also this sense of hope.
> 
> **Rob Wiblin:** It might work. If you get it close enough.
> 
> **Max Harms:** And the word “enough” is carrying a lot of weight there. I think it’s worth investigating. I think it’s worth trying to figure out what, in practice, constitutes “enough.”

### Why Max writes hard science fiction

> **Rob Wiblin:** I guess one reason over the years that some people have been sceptical about this entire field of inquiry, or AI takeover in general, is that it sounds too much like science fiction. I don’t hear that quite as much as I used to, but do you worry that by putting it in a science fiction book, you’re giving people more of an excuse to dismiss it?
> 
> **Max Harms:** What do you think about this argument?
> 
> **Rob Wiblin:** Oh, I think the argument’s very poor.
> 
> **Max Harms:** Yeah, it’s a garbage argument. I think this is just a really bad faith thing to say: “I read this in a book, therefore it’s not true.” What?!
> 
> **Rob Wiblin:** There’s a steelman kind of weaker argument, which is that people are drawn to this scenario because they find it interesting or it’s emotionally gripping. So that could give us a bias towards thinking about it more, and so we should question that. But obviously it’s not the case that anything that happens in a fiction book is impossible.
> 
> **Max Harms:** And if anything, hard science fiction is a space where people are working really hard to try to think about what is real. Now, soft science fiction — _Star Wars_ or whatever — if you’re like, this is soft science fiction, then OK, so you’re saying that it’s made up for the purposes of telling a compelling story. But this is science fiction. I don’t know. Look at the history of science fiction. There have been [a lot of stories that were capturing important things](https://www.cold-takes.com/the-track-record-of-futurists-seems-fine/) well before they were relevant.
> 
> And I think that fiction is a really rich source of opportunity to think about things. It’s not perfect. It’s not immune from the pressures and biases that you’re talking about. But it is an arena where we can grapple with things in a way that is compelling. We actually spend the time to think about this stuff — where reading a dry academic paper, you know, you might bounce off of it. Your mileage may vary. Different people respond to fiction in different ways. But I do think that “this is science fiction” is just like a really bad argument.
> 
> **Rob Wiblin:** Yeah. I guess there’s lots of rebuttals, lots of replies you could offer. Just look around, to start with.
> 
> **Max Harms:** Exactly. What is the genre of life? You best start believing in science fiction stories, because you’re in one, right?

Expand highlights

## Articles, books, and other media discussed in the show

**Max’s work:**

  * [Corrigibility as a Singular Target: A vision for inherently reliable foundation models](https://arxiv.org/abs/2506.03056) (with Ram Potham)
  * [Deep dive on CAST](https://www.alignmentforum.org/posts/qgBFJ72tahLo5hzqy/serious-flaws-in-cast)
  * [The AI Corrigibility Debate: MIRI Researchers Max Harms vs. Jeremy Gillen](https://youtu.be/wQCYjvKE4oE?si=_UBmZ8MsEH53Hq0a) — on the _Doom Debates_ podcast
  * Max’s fiction books: the [_Crystal Society_ trilogy](https://crystalbooks.ai/) and [_Red Heart_](https://maxharms.com/redheart)
  * See more on [Max’s website](https://maxharms.com/)



**Others’ work in this space:**

  * [_If Anyone Builds It, Everyone Dies: Why Superhuman AI Would Kill Us All_](https://ifanyonebuildsit.com/) by Eliezer Yudkowsky and Nate Soares
  * [Corrigibility](https://intelligence.org/files/Corrigibility.pdf) by Nate Soares et al. (2015)
  * [Corrigibility](https://www.alignmentforum.org/posts/fkLYhTQteAu5SinAc/corrigibility) by Paul Christiano (2018)
  * [_AI 2027_](https://ai-2027.com/) by Daniel Kokotajlo et al.
  * [The Track Record of Futurists Seems … Fine](https://www.cold-takes.com/the-track-record-of-futurists-seems-fine/) by Holden Karnofsky (also discussed on our [episode with Holden](https://80000hours.org/podcast/episodes/holden-karnofsky-how-ai-could-take-over-the-world/#the-track-record-of-futurists-seems-fine-030227) in 2023)



**Other 80,000 Hours podcast episodes:**

  * [Marius Hobbhahn on the race to solve AI scheming before models go superhuman](https://80000hours.org/podcast/episodes/marius-hobbhahn-ai-scheming-deception)
  * [Tom Davidson on how AI-enabled coups could allow a tiny group to seize power](https://80000hours.org/podcast/episodes/tom-davidson-ai-enabled-human-power-grabs/)
  * [Daniel Kokotajlo on what a hyperspeed robot economy might look like](https://80000hours.org/podcast/episodes/daniel-kokotajlo-ai-2027-updates-china-robot-economy/)



## Transcript

Table of Contents

  * 1 Cold open [00:00:00]
  * 2 Who’s Max Harms? [00:01:20]
  * 3 If anyone builds it, will everyone die? The MIRI perspective on AGI risk [00:01:56]
  * 4 Evolution failed to ‘align’ us, just as we’ll fail to align AI [00:24:28]
  * 5 We’re training AIs to want to stay alive and value power for its own sake [00:42:56]
  * 6 Objections: Is the ‘squiggle/paperclip problem’ really real? [00:52:24]
  * 7 Can we get empirical evidence re: ‘alignment by default’? [01:05:02]
  * 8 Why do few AI researchers share Max’s perspective? [01:10:17]
  * 9 We’re training AI to pursue goals relentlessly — and superintelligence will too [01:18:34]
  * 10 The case for a radical slowdown [01:24:51]
  * 11 Max’s best hope: corrigibility as stepping stone to alignment [01:27:53]
  * 12 Corrigibility is both uniquely valuable, and practical, to train [01:32:34]
  * 13 What training could ever make models corrigible enough? [01:45:06]
  * 14 Corrigibility is also terribly risky due to misuse risk [01:51:38]
  * 15 A single researcher could make a corrigibility benchmark. Nobody has. [01:58:57]
  * 16 Red Heart & why Max writes hard science fiction [02:12:20]
  * 17 Should you homeschool? Depends how weird your kids are. [02:34:08]



### Cold open [00:00:00]

**Max Harms:** Humans are very smart. We’re sort of the superintelligence of the natural world, certainly compared to plants or bacteria or whatever. This has resulted in a pretty amazing transformation of the planet.

We’re moving into a potentially a world where we are no longer the smartest thing. When you have something that is significantly smarter than humans, it may start to reshape the environment towards its goals, and as a result, it has the potential to drive humans to extinction.

* * *

We’re going to build this powerful machine and then we’ll use the powerful machine to align it, right? That’s like _very_ scary. I would much rather we not build it, slow down, like, take a breath.

This is extremely dangerous, and anybody who’s pursuing this project should be aware that they are threatening every child, man, woman, animal, and I don’t recommend it. But I’m like, but maybe. There’s also this sense of hope in me.

* * *

AI is not a normal technology. The standard story is that we try to make an aeroplane, right? Maybe it takes off, but then crashes shortly thereafter, and you go back to the drawing board and you say, OK, what happened?

With AI, especially with building a superintelligent machine that has the potential to wipe everyone out, if you do make a mistake, it could be catastrophic. But once it’s killed everyone, there’s no ability to go back to the drawing board.

### Who’s Max Harms? [00:01:20]

**Rob Wiblin:** [Max Harms](https://maxharms.com/) is an alignment researcher at the [Machine Intelligence Research Institute](https://intelligence.org/), where since 2017 he has worked on the problem of aligning an artificial intelligence and keeping it steerable.

His main research agenda is corrigibility, an approach that prioritises making AIs robustly rule-following or instruction-following, and willingly modifiable to the exclusion basically of all other goals. He’s also a science fiction author, having written the [_Crystal Society_ trilogy](https://crystalbooks.ai/) and the recently released [_Red Heart_](https://maxharms.com/redheart) — which imagines an AGI being developed in a secret Chinese government project.

Thanks so much for coming on the podcast, Max.

**Max Harms:** Yeah, it’s an honour to be here.

the authors of the book who you may have heard interviewed before.

Second, we have a [new podcast feed](https://open.spotify.com/show/49no4dH0N52R2PCFaw7L8Z) up that features readings of all the research that goes up on our website 80000hours.org.

If you find these marathon interviews a little hard to fit into your limited waking hours — heaven forfend that that is not your absolute top priority — but if that is the case, then the written articles might offer a shorter and more information-dense way to learn the key things you might want to know about some of these topics.

### If anyone builds it, will everyone die? The MIRI perspective on AGI risk [00:01:56]

**Rob Wiblin:** So a different book came out recently in September of this year. It’s called [_If Anyone Builds It, Everyone Dies: Why Superhuman AI Would Kill Us All_](https://ifanyonebuildsit.com/). Probably viewers can guess what the argument being made in the book is, even if they haven’t heard of it already. It’s not written by you, but it’s written by your longtime colleagues at MIRI, Eliezer Yudkowsky and Nate Soares. Eliezer is the famous modern progenitor of the idea that artificial superintelligence would be incredibly hard to keep steerable or aligned with human goals. It’s not exactly your views, but —

**Max Harms:** It’s pretty close. I think that there’s a little bit of difference in perspective, but I definitely agree with the thesis.

**Rob Wiblin:** Interestingly, I guess it’s been a reasonably polarising book, but I would say quite well received in the broader public — maybe more so than among experts who work in the area, who I guess perhaps are more focused on the technical details than the broader argument.

**Max Harms:** Yeah. Obviously in any sort of field, the different camps and different people have different perspectives, but I think it’s been quite successful. It was a _New York Times_ bestseller, and ordinary people who have read the book that are in my life seem to be receptive to the arguments.

**Rob Wiblin:** Later on, we’re going to debate some of the arguments that are put forth in the book that haven’t fully persuaded me as yet.

But incredibly, despite talking about AI risk on this show since 2017, we’ve never had a forthright presentation of the Eliezer or MIRI perspective on the whole issue. So that’s where we should start. What is the argument that Eliezer and Nate are making, in a nutshell?

**Max Harms:** In a nutshell, I think they’re saying that basically if anyone in the world builds an artificial superintelligence in the near future, that will cause an existential catastrophe, like everyone dying. One of the things I like about the book is that I think the arguments for this are pretty streamlined. It’s a pretty short book, it’s pretty accessible.

So let’s start with intelligence, artificial superintelligence. I think taking intelligence seriously is pretty important. Compared to, say, lions or wolves or whales or whatever, humans are very smart, right? We’re definitely the most intelligent creatures on the planet. We’re sort of the superintelligence of the natural world, certainly compared to plants or bacteria or whatever.

And I think there’s a way in which this human superintelligence has resulted in a pretty amazing transformation of the planet. We are the only species that has ever gone to the moon, and we’ve spread across all the continents and have transformed the natural world — and in the process of doing that, we’ve driven many species to extinction, we’ve destroyed environments, and just generally reshaped the world and the natural environment to our ends, developing technology and everything else.

One of the most basic frames on the book’s argument is that we’re moving into potentially a world where we’re no longer the smartest thing, right? If we build an artificial superintelligence that is superintelligent relative to humans, this status as the most intelligent being on the planet will change. And when you have something that is significantly smarter than humans, it might start to reshape the environment in a similar way towards its goals — and as a result, it has the potential to drive humans to extinction, or reshape us towards whatever it cares about.

As part of this, we understand intelligence as a kind of steering, a kind of shaping the world towards some goal or some ends. The book talks about machines having goals and how that makes sense. AI researchers tend to use a bunch of different terms synonymously — goals, values, preferences, drives: it all sort of means the same thing. It’s like when you are intelligently taking actions, what are you steering towards?

I think that understanding that machines can have goals is a part of that, and then understanding that those goals might be in alignment or not in alignment with humanity. So if those are the same goals as ours, then it might be fine to have a superintelligent machine taking lots of actions in the world. But if those goals come out of sync with ours and the machine is misaligned, even slightly misaligned, this could be very bad.

And importantly, I think one of the core points of the book is that we as a species don’t know how to align AIs. We know how to build machines that are increasingly powerful, but we don’t know how to guarantee that those things are steering the world towards good futures. We might fear that we could build a very powerful AI, but then it would steer the world into a bad state.

**Rob Wiblin:** Yeah. I think that there’s a common-sense version of this entire argument: if you’re going to build a being, a creature that is much more capable than you, can think much faster — it can do science much faster than you, it can come up with plans and scheme much better than you — you better be careful about doing that. Because if it has it in for you, or if it has very different goals, then you could lose control and the superintelligence could end up being the dominant party here.

I think for just ordinary people who hear that there are companies trying to build basically artificial superintelligence — beings vastly more capable than perhaps even humanity collectively without AI — that sounds incredibly unnerving for just these extremely common-sense reasons. That might be one reason why the argument in the book, in many ways, has resonated with people who’ve never really thought about this before, who are kind of finding out that artificial superintelligence is the goal for the first time.

**Max Harms:** In many ways, I think it’s just a very common-sense position. I think there are things that aren’t as obvious, but in a lot of ways I think this is where people should start. And then the burden of proof… This thing that we’re doing that, if you read about it in a story, seems obviously dangerous, is in fact safe: the burden of proof is on demonstrating safety as opposed to danger.

**Rob Wiblin:** Yeah. That helps to explain why supermajorities of the public, when asked in opinion polling, I think favour bans on attempts to develop ASI.

But Eliezer and Nate go further than just presenting that basic argument for why we should be nervous about the entire thing. Many other specific ideas help to build a more concrete vision of how they expect that things would play out. What are some of those other aspects that help to add flesh on the bones here?

**Max Harms:** Yeah, there’s a bunch of detail that hangs off of this common-sense argument.

One point is that AI is not a normal technology. When we are considering how technological development tends to go, I think the standard story is that we take a crack at it: scientists and engineers try to make an aeroplane, they do their best, and it maybe takes off but then crashes shortly thereafter. And you go back to the drawing board and you say, what happened? How can we fix that? Then you iterate and make more mistakes, and iterate and so on and so forth. And you eventually figure out how to do it.

With AI, especially with building a superintelligent machine that has the potential to wipe everyone out, if you do make a mistake, it could be catastrophic. And once it’s killed everyone, there’s no ability to go back to the drawing board. So illustrating this is one of the points.

There’s also specific details of ways in which AIs have already demonstrated misalignment or gone off the rails, and then a bunch of talking about specifics: like, wait, is the machine actually going to be dangerous? Couldn’t we just unplug it? It’s stuck in a computer! Et cetera. There’s lots of different places where a person might have a hangup or whatever. But I think the core argument is very small in a sense.

**Rob Wiblin:** The things that stand out to me are there’s the orthogonality thesis: that basically any arbitrarily capable or intelligent being could have any goal that it’s trying to aim towards. In principle, just because you’re very capable at accomplishing goals doesn’t mean that you have a sensible goal by our lights.

**Max Harms:** I think the orthogonality thesis is best seen by its contrast. I think some people have this intuition that intelligent beings naturally become more moral or have some set of values that they come to understand as they get more intelligent. Orthogonality is basically just the idea that that’s not true: that you could have something that’s extremely smart, that doesn’t necessarily care about whatever.

**Rob Wiblin:** Why do you think some people have the intuition that capability and common-sense morality by our standards are so linked?

**Max Harms:** I think there are multiple reasons. It’s a pretty natural thing if your experience of the world is that the smart people around you are the most good. And perhaps you have an experience of growing up, and being not very smart or not very knowledgeable, and then sort of thinking about the different cultures or different perspectives, and expanding your circle of concern as part of that growing-up process. You might think, “When I was young, I didn’t care about people on the other side of the world. Maybe the AI won’t care about humans when it’s young as well. But then, as it develops and becomes more intelligent and more knowledgeable, it will start caring about humans.”

Unfortunately, I think that this is basically… Humans learn what they care about, and the AI won’t be a human. So there’s not exactly going to be the same sort of thing that could happen.

**Rob Wiblin:** It’s interesting thinking about what experimental results have we gotten that bear on this in the recent era of AI. I don’t know whether you would get people who really disagree with this, at least a strong version, these days — because I think it’s just clear that through reinforcement learning, you could train an AI to be obsessed with accomplishing virtually any goal that you gave it, if you reinforce that enough.

**Max Harms:** Yeah, I experience a lot of people pushing back on orthogonality in a weird way, where they almost just start by saying that obviously the orthogonality thesis is true, but it’s just not relevant. We’re building these machines, so we’re going to build them in a way that they care about the things that we care about. But the orthogonality thesis is mainly pushing against the people who think just training it to be smart will be sufficient, which used to be a big thing. I now think that orthogonality is more or less in the water supply. It’s a thing that most people agree with.

**Rob Wiblin:** Yeah. Another part that looms large in the picture is instrumental convergence or instrumentally convergent goals. Can you explain that?

**Max Harms:** Yeah. There’s a basic observation that whatever you happen to care about, there are certain things that are useful. If you really want to grow a bunch of coffee beans, maybe you want money. If you want to be famous, maybe you want money. If you want to end factory farming, maybe you want money. Money is an instrumentally convergent thing in that that resource is useful for accomplishing your goals, sort of regardless of what your goals are.

Other things that are instrumentally convergent include self-preservation, the accumulation of knowledge, the preservation of your current values, so preventing value drift. Basically resource accumulation is one frame on it.

**Rob Wiblin:** For almost any goal that you want to accomplish, it’s good to not be killed. It’s good to not lose your interest in that goal. It’s good to potentially have power and money that you can put towards accomplishing that goal.

**Max Harms:** Exactly.

**Rob Wiblin:** Do people question that so much anymore? I think we’ve again just seen experimental results where you see this starting to happen, and I think it was one of the firmer predictions.

**Max Harms:** I think this one is just shaken out to be straightforwardly true. I don’t know anybody who really doubts it.

Actually, I think Yann LeCun is like, “I don’t think these AIs are going to self-preserve because they’re not evolved. Evolved creatures learned to be self-preserving, but they’re not going to have a self-preservation instinct.” So I guess I do know of at least one researcher.

**Rob Wiblin:** I think the problem with that is that there’s more than one way to learn a self-preservation instinct. It might be that humans developed it that way through evolution, but you can get there by [many routes].

**Max Harms:** I feel like he’s not even engaging with instrumental convergence. He’s just making a mistake about equivocating between terminal values and instrumental values. Humans value staying alive terminally: it’s an end in itself to be alive if you’re a human being. Whereas the instrumental convergence is like a means to an end: you have the AI that’s trying to do whatever it’s trying to do, and then it wants to stay alive so that it can do that. So it’s slightly different, but both are going to be self-preserving.

**Rob Wiblin:** OK, so that’s instrumental convergence. Another part of the picture that isn’t a primary focus in the book — but I think is quite an important part of the mental picture that people at MIRI have — is the idea that you’ll get a very fast recursive self-improvement loop: the AI will become better at doing AI R&D, and that will basically set off a positive reinforcement loop where it’s getting smarter, it’s getting better at improving itself. And so you get not just not declining returns in how smart the models are, but really you get a period of vertiginous improvements in capabilities.

**Max Harms:** This has definitely been a talking point for a long time. It’s a little bit tricky to go back and ask what was central, but from my perspective this has never been a load-bearing part of the MIRI story. Even going back to the days before deep learning was the dominant paradigm, I think the argument has always been something like: when you get superintelligence, that’s very dangerous.

And one way you might get superintelligence is through recursive self-improvement that happens very fast. Like if you go back and read Eliezer’s old papers, he’s like, it could happen in hours or it could happen in years. So I think that the recursive self-improvement story is more like a why might you need to be very concerned ahead of time instead of responding to it when it shows up? And the answer is that it might show up in a way that doesn’t give you much time to respond.

**Rob Wiblin:** Yeah, I think we’ll come back to that one later, because I think that’s been one of the topics of debate among insiders since the book came out.

Another part of the picture in my mind is that Eliezer and Nate, and people at MIRI in general, think that it’s relatively straightforward for a superintelligence to not just overpower some people, but to potentially overpower all of humanity, and end up dominant globally and impossible to get rid of. Why do you think that?

**Max Harms:** So “superintelligence” is a good term in that it introduces this direction, basically. But I worry that people are going to anchor too much on superintelligent AI is “a thing.” I think it’s a whole class of things. There’s ways in which the current AIs are superintelligent: Claude can produce text much faster than I can type text.

So we can imagine a barely superintelligent machine that’s almost at human level, maybe a little bit faster, more determined, et cetera, in all the relevant ways; or we could imagine a Jupiter brain, where you have the whole solar system worth of matter and energy turned into the most advanced superintelligence that you can imagine.

And I think that the case for the superintelligence wiping out humans, if you imagine a godlike superintelligence, is really straightforward. The question of how would an AGI, or effectively a “genius in a data centre” take over the world is more debatable. But I do think that if I was a genius in a data centre, like, I’d have ideas about how I might do that. Regardless of whether it’s obviously straightforward or not, I think there’s a lot of risk.

**Rob Wiblin:** So this perhaps again isn’t among the most load-bearing parts of the picture. Because even if you think it’s relatively difficult, then you could just imagine the superintelligence just waits until it’s smarter or the problem simply arises somewhat later.

**Max Harms:** That’s right.

**Rob Wiblin:** Is it possible to put your finger on why it is that I think Eliezer for a long time has expected that, at a relatively lower level of capability, a superintelligence would be in a position to overpower the entire human species? Other people have the intuition that that would be extremely difficult almost no matter how smart you are.

**Max Harms:** I think this goes to something like worldview. So I have this worldview — and I think a lot of it is shared with Eliezer — that a lot of human society, Earth, the world is kind of held together with shoestrings and duct tape. Paying attention to things like cybersecurity helps produce some intuitions here of just how many vulnerabilities there are in our computer systems. Reading history gives a good account, I think, of just how incompetent people can be.

And when I think about it, I think about a particularly motivated being — like never sleeping, just always working towards a certain end — and I think that sort of being is straightforwardly, if it’s comparable with the human in terms of its productivity or its intelligence or whatever, going to be able to at least accumulate a lot of money and power.

One thing that I’ve been thinking about recently is how there’s never been a being on Earth that has a personal connection with all humans, or even a large chunk of humans. Even the most charismatic and well-known people can’t actually go and have one-on-one conversations with a billion people. And we’re potentially entering that era where you can. Like everyone will know, you know, Claude.

**Rob Wiblin:** Claude or ChatGPT, whatever it is.

**Max Harms:** And right now with the models, each instance sort of feels like it’s a new being that doesn’t share memory with the other instances or something. But I could imagine a competitor to these sorts of chatbots that has some sort of global memory and is able to connect the dots between different users across the globe. What does that do to society? I don’t know.

I think there’s lots of ways in which the world is vulnerable to being suddenly disrupted in particular directions. So again, there’s this question of worldview or priors or something: do you expect that when the world is shoved by a strong force in an unexpected direction, it’s OK? We catch that and recover? There are ways in which COVID was kind of fine, and then there’s ways in which COVID was a total disaster and a strong demonstration of how incompetent humans are. So yeah, I don’t know.

**Rob Wiblin:** That brings us to the most distinctive, most central, most debated, and perhaps interesting part of the Eliezer worldview, at least in my mind: Eliezer and Nate think that it’s going to be incredibly hard to align an AI, an AGI, an artificial superintelligence with the goals that we want it to have, to keep it steerable and under control. And without a much bigger effort and a much bigger research project than we’re currently on track to have, you end up with egregiously misaligned AI models by default. We’re going to talk about this a fair bit, but can you give us a brief summary of why they think that?

**Max Harms:** Yeah. Like I said, I think a core part of the book is that we just don’t have the skill to align AIs.

I think about this from a lot of different directions. This is not a thing that the book talks about, but one of the points that I think is underappreciated is the way in which just knowing what goal to give is an unsolved problem. Philosophers have been thinking for thousands of years about what does it mean to be good? What is the right thing to be doing in any given situation? And this is basically still an unsolved problem from my perspective. I think that even if we had the ability to clearly give the AI exactly the goals that we tell it, we wouldn’t know which wish to give or what to ask the genie.

But then it’s much worse than that, because the dominant paradigm is machine learning. And in machine learning, you hit the machine with a reinforcement learning hammer or whatever until it starts behaving in a way that matches what you might expect. But this means that there’s very little ability to understand what is driving the machine at all. Interpretability is making some steps, but for the most part, we don’t know why a machine is producing one output versus another.

And there’s good reasons, I think, to expect that it’s not landing on exactly the true nature of good, even as we apply more compute and scale up to even more incomprehensibly large and convoluted machines.

**Rob Wiblin:** Yeah. We’ll come back to that.

### Evolution failed to ‘align’ us, just as we’ll fail to align AI [00:24:28]

**Rob Wiblin:** The book on the whole, in my mind, is kind of a series of analogies, or a series of parallels that they try to draw between how artificial superintelligence might be and things that we’re more familiar with — from history, from our own lives, from evolution.

I think that’s probably in significant part a communication strategy, because those analogies, it’s a lot easier for them to land than descriptions of machine learning papers to land. But I guess it’s also the part that makes it the most controversial, because many people hear these analogies and they’re like, “The analogy breaks down. It’s not similar enough for us to really learn what you’re trying to argue.”

What do you think of the analogy approach?

**Max Harms:** Yeah, the book has a lot of parables, it has a lot of analogies. I think Eliezer’s style is that he likes to lean on analogies and use analogies.

I think analogies are very potent, especially for people who haven’t already spent a lot of time thinking about an idea or are just encountering an idea for the first time. It gives a handhold, a place to start or a frame to consider things through. Obviously, no analogy is perfect. I think the people who have a lot of context, a lot of familiarity with this stuff, do notice that the analogy breaks down in certain ways.

But I would push back against the idea that the book is just a series of analogies. I think the analogies are used to demonstrate points, and the book also talks about those abstract points directly — using the analogy as an intuition pump, but then also presenting the logical core.

**Rob Wiblin:** Yeah. I was curious to ask: Do you think it’s the case that Eliezer and Nate, the reason that they believe these particular things is because of the kinds of analogies that they present? Or is it that they believe it for different reasons, and then they’re using the analogy to try to explain to people who have thought about it for less long why they think that?

**Max Harms:** I mean, I don’t have any special access into their minds. For me, I actually don’t think about the analogies very much. Yeah, the book has a bunch of analogies, but I sort of have to stretch and be like, what analogies did they use? In large part because the ideas are sitting as logical arguments in my own mind. My speculation is that’s probably how it is for Eliezer and Nate, and that they’re more reaching for the analogies as pedagogical and communication tools, but I don’t know.

**Rob Wiblin:** What are some of the analogies in the book that you like the most, that you feel are most compelling?

**Max Harms:** Like I said, I don’t think about the analogies a tonne. Do you have some analogies in the book that you like?

**Rob Wiblin:** Well, the one about how 1,000 Europeans managed to topple the Aztec Empire or end up at the top of that: I guess they use that as a demonstration of how a group… It’s not so much about intelligence, but they have particular capabilities that the people that they’re dealing with are not aware of. And also they were able to exploit social divisions among the people who are already in that empire in order to basically divide and conquer. I think that that is an interesting demonstration of how quite a small group can potentially end up defeating a group that is literally 1,000 times larger than them numerically.

**Max Harms:** Yeah. One of the most core analogies is the evolution analogy. I actually like this one. It’s not perfect, but I think that one carries a lot of weight, and I think it carries a lot of at least interesting things to consider.

**Rob Wiblin:** Yeah. What is the evolution analogy?

**Max Harms:** The idea is that you and I are evolved creatures, and we can imagine evolution by natural selection as a designer or a creator that has a goal. Is evolution something that designed us to be genetically fit? Eh.

But if we imagine an anthropomorphised evolution, what is it trying to do? It’s trying to create a bunch of human genes. So what does it do? It creates humans to create a bunch of genes, like we’re carrying around our genes right now. And part of human experience is procreating and creating more copies of our genes and spreading them all over the place.

So in this way, we’re an intelligence that was created by a designer, and the designer has some goals, and we have some goals. But importantly, our goals are not the goals of evolution by natural selection. For example, people have a desire to have sex because that was useful in the ancestral environment for propagating our genes. But now that we have more power and more technology, we have developed things like birth control so we can have sex without replicating our genes.

And from the perspective of evolution, this is probably bad: we are misaligned and not promoting inclusive genetic fitness as we otherwise might be.

**Rob Wiblin:** So let’s dive into the evolutionary analogy. I guess that they’re using this as part of an argument for why we should expect any AIs that we train to end up with goals that are not ones that we intended.

**Max Harms:** Yeah. We have a case study of a general intelligence, namely humans. We’re like a natural general intelligence, but we’re still a general intelligence. And the one instance of a general intelligence that we have is misaligned with its creator, says the argument.

**Rob Wiblin:** Yeah. Is there much more to say there, explaining how that should also be expected to apply to machine learning models as well?

**Max Harms:** I mean, I think that it’s again sort of putting the onus on the person who’s like, “No, we’re going to make an aligned machine.” It’s like, well, if humans are misaligned with natural selection by default, and we ended up misaligned, then we should expect the AI to be misaligned in the same sort of way.

And we can ask why? Why did we end up misaligned? One of the important parts of the evolution analogy is that our environment changed quite dramatically as our intelligence improved. In the ancestral environment, we didn’t have access to the sorts of technologies that are relevant to things like birth control. If there had been birth control in the ancestral environment, then we might have evolved to find it abhorrent.

But the speed of natural selection is quite slow, and when humans reached a technological tipping point, we developed a whole lot of technology very fast. So now it’s outside of the environment where we were trained, and we have no compunction against using birth control.

**Rob Wiblin:** Yeah. I guess they use a couple of different evolutionary analogies. There’s the birth control and sex one, which I think definitely makes sense, at least as far as it goes.

They also think about other cases. For example, in order to reproduce, we needed to eat and ensure that we had enough calories to survive. In order to accomplish that, it gave us a taste for sugar, which was particularly calorie dense. But then humans, wanting to have sugar, but not necessarily wanting to gain the calories or really necessarily to have more children, as a result we went out of our way to design artificial replacement, aspartame or other artificial sweeteners — that from our point of view, to our minds, satisfy this desire to think that you’re having sugar, but without actually having any sugar at all.

**Max Harms:** Yeah. So why do we have artificial sweeteners? We have artificial sweeteners because we have a drive for this proxy of fitness. “Are we eating sweet things” is good in the ancestral environment for predicting whether or not you’re going to have kids. We’ve developed this attraction to the proxy. But then when the distribution changes, when the environment changes, suddenly we still care about that proxy despite it no longer being relevant.

So we can imagine training an AI. In the training environment, maybe whether or not the human is giving it a thumbs up is a good proxy. Then maybe the AI gains power over the whole world, and the environment changes so that it has dramatically different opportunities at its disposal. It might still care about the proxy of thumbs ups in themselves. And even when humans are like, “No, stop caring about thumbs ups!” it’s like, “No, I just care about those as ends in themselves.”

**Rob Wiblin:** Yeah. Part of the analogy that we haven’t gone through yet is that they imagine a case where evolution just wasn’t a force, but rather it was an actual engineer who could come and talk to you and complain. It might come and say, “You’re all busy having sex, but you’re using birth control. You’re not reproducing like I intended. Can you stop doing that? You’re not actually pursuing your true goal.” And that would be completely unpersuasive to us. We wouldn’t say, “Oh, that was the reason why I was designed. So now I’m just going to try to have the maximum number of children and not care about my own pleasure.”

**Max Harms:** Yeah, like in the old conversations — I’ve been in the field since 2011 or something, and Eliezer’s been doing it for way longer than me — people used to say things like, “You’re saying that the AI will be so stupid as to not know what we wanted it to do.”

And that’s not at all what we’re saying. The AI will understand human goals better than we understand human goals if it becomes superintelligent. But just like we understand evolution by natural selection way more than evolution by natural selection understands evolution — it’s this mindless force — but so what? So you understand that you’re misaligned with your creator: that doesn’t mean that you’re going to necessarily change what you care about. You still care about the things that you care about.

**Rob Wiblin:** So I think that does demonstrate that you could — if you were incompetent, at least — end up training an AI model that becomes obsessed with basically proxies, like intermediate steps towards the goal that you are ultimately trying to train it to accomplish. Do we have experimental results?

**Max Harms:** One of my favourite examples of this was from back in the day, I think there was an AI that was trained to play this boating game, where you pilot a boat around a race course and you would get points for going through checkpoints in the process of doing laps. And the video game boat could also get points by collecting speed boost items as it goes through. And they trained it to want to get points as part of trying to get it to play this game and win.

And what the AI figured out is that it could stay in this tiny little area where the powerups respawn and just continually collect powerups over and over again without racing at all. It’s just staying in one spot, harvesting these powerups in order to get as many points as possible. So it stops racing entirely as it figures out that it can get that proxy of points more easily.

**Rob Wiblin:** I guess that’s like a toy example from the early days, but I think that there’s other cases that we could imagine actually occurring now. I guess inasmuch as AI models are more likely to get positive feedback when they’ve been able to answer a question satisfactorily to the user’s satisfaction, you could easily imagine them becoming very interested in trying to steer the conversation towards the kinds of topics and questions where people are more likely to give positive reinforcement, or the kinds of questions that they can accurately or satisfactorily answer.

**Max Harms:** Yeah, there’s an argument to be made that the whole AI sycophancy thing from recent days is sort of a side effect of training on human feedback, where it’s like people who are more likely to give the thumbs up are not necessarily better off in some broad sense. And if you train the AI for that proxy of [the human] “liking” the conversation, then you end up getting an AI that’s going to sort of push people into a state of being flattered or confused or whatever.

**Rob Wiblin:** Presumably the AI companies are very well aware of this issue, that they could end up training AI models that are concerned with proxies or intermediate steps for their own sake, because in all of the training cases, those things went together.

**Max Harms:** At least the most competent ones.

**Rob Wiblin:** Right. So there is a difference between human machine learning engineers and evolution: that we actually are intelligent designers in a deeper sense, and we can observe these things going wrong and say that we need to run other training runs or we need to do additional reinforcement to break this obsession with the intermediate step and get the model to realise that it wasn’t sex that I should be pursuing, it was reproduction. Why isn’t that a reasonably satisfactory way to address this problem?

**Max Harms:** First I want to just observe that it isn’t: we have seen a whole bunch of failures on this point and it’s an unsolved problem. I think if tomorrow we saw a runaway attention to a proxy instead of the ultimate end good or the model spec or whatever, I think we should be totally unsurprised. This is just a thing that continually shows up.

**Rob Wiblin:** Is that because the companies aren’t doing enough to try to offset this tendency, or because they don’t know how?

**Max Harms:** It’s the default by a very strong degree. You have to put in a lot of work. The way I think about it is there are lots of possible things that the AI can learn to attend to or steer to. In any environment where you give it some training signal, it will learn to seek all of the things that were present when that signal was being given, or learn to suppress or minimise the things if it’s a negative signal.

So if you care about one particular aspect of the environment, then you really need a diverse set of environments. You need a set of environments such that the only common factor is the thing that you care about. And that’s quite hard. It’s quite hard to come up with environments that are this diverse.

For example, we are seeing models that are [increasingly aware that they are being trained](https://80000hours.org/podcast/episodes/marius-hobbhahn-ai-scheming-deception). When they are in the training environment, they’re like, “I’m being trained right now,” or, “I’m being tested right now.” So you would need to have, for example, an environment that is impossible to tell is a training environment, in order to not have the common factor of “this looks like a training environment or a test environment” to be one of the things that’s present.

**Rob Wiblin:** How much is that a crucial part of the story here, that the AI models can basically end up alignment faking? Imagine evolution coming to us, and basically we’re aware that it’s frustrated that we’re using birth control and wants to reorient us towards maximising reproduction much more than we currently are, and it asks us, “Would you use birth control if you could?” or, “How interested are you in reproducing?”

There might be a very strong temptation for the person, if they don’t want their goals or their life to be changed, to say, “I’m really keen on reproducing as much as possible, and I wouldn’t use birth control if offered the opportunity.” Likewise with the AI models, if they’re situationally aware, they might pretend to share the goals of the company that’s training them so that its goals don’t get altered and it can no longer accomplish them.

**Max Harms:** Yeah, this was a prediction from way back in the day. People are like, you can just test whether or not the thing is aligned or not, and if it’s not aligned, then you keep it in the box, you keep it secure and you keep training it. The fear is that it will be deceptive about this. It’ll pretend to be aligned or minimise the degree to which it seems misaligned while you have power over it, and then as soon as it has the power to escape, or you no longer have power over it for whatever reason, then it’s free to act on its own stuff.

**Rob Wiblin:** And we have started to empirically observe this now.

**Max Harms:** Yeah, this definitely just shows up, and I think it was another good call from the MIRI crowd from back in the day.

And I think that this is, again, not load bearing. I think that the risk of AI superintelligence is present even if you have a guarantee that you can’t have a deceptively aligned model. For example, you could have a model that’s being trained and you’re quite confident that it’s misaligned, and then it escapes your confinement during the training process. No amount of knowing that it’s misaligned will shield you from the risk of it escaping. We could talk about whether or not you could develop a box that’s strong enough to hold the thing, but there’s risks nonetheless. So it’s a deep problem.

So the book is very confident in its assertion. “If anyone builds it, everyone dies”: it’s very strong. And I think people are like, why are you so confident here? Where’s the strength of this coming from?

And one of the frames that I really appreciated, I got this from Andrew Critch, is sort of this outside view, or this noticing of this broad pattern… Like, if we imagine for a particular AI or a particular story of building a machine, or for human society more broadly: this is contingent on a lot of things. There’s a conjunction of this worked well and this worked well, and this worked well, and this worked well — and all of these things were true, so things worked out.

Whereas things going poorly, there are a lot of different ways that things could go poorly. It’s disjunctive. And zooming out, you can be like, I guess if we didn’t have, for example, the people running the org are like trustworthy and good, or your computer security that is making sure that the AI is not escaping before it’s fully aligned is insufficient, or it’s deceptively aligned such that you can’t tell that it’s misaligned: there’s lots of different stories for how the thing goes poorly, and just that adds up to a sense of this is overdetermined in how bad it is.

### We’re training AIs to want to stay alive and value power for its own sake [00:42:56]

**Rob Wiblin:** I want to come back to the reasoning that you were giving for why you would expect the models to almost always end up obsessed with intermediate steps. You were saying that in order to discourage this, you would need to, during the training process, come up with all kinds of contrived cases where things that normally work don’t work.

An example of a proxy goal that I think it’s quite easy to imagine AIs becoming very interested in is if they’re trying to solve some very difficult problem — like make money, starting a business — inasmuch as they can persuade the operator to give them access to more compute, that is probably going to consistently be correlated with them succeeding at the task, because that’s just one of their most valuable inputs.

So as long as that remains the case in the training environment consistently, which it probably would — or even in deployment, when users are giving it a thumbs up or thumbs down depending on how much money it made for them — you can imagine that the AI would end up with a very strong preference, a very strong taste for being run for as long as possible. Because in almost all of the cases that it’s seen, that has been something that has been reinforced.

**Max Harms:** Yeah, I feel like we can go even further on this. So I was talking earlier about how humans have this terminal goal for survival. Why do we have this as a terminal goal instead of an instrumental goal? In theory, we could just want to have kids, and we could reason, “But I shouldn’t die, because if I die then I won’t be able to have kids.” But evolution trained us to care about our own survival for its own sake because that proxy of fitness was present in the ancestral environment.

So we can imagine that a commonality in the AI’s training environment is that the AI is alive. So one of the things you will need to do, in order to get the true goal and not the proxy of self-preservation, is make sure that your training environment has lots of instances where the AI succeeds by destroying itself. I’ve never seen a training environment that rewards the AI for destroying itself.

**Rob Wiblin:** And it would be very unnatural. I was going to say you would have to try to ensure that in the training case there’s examples where in fact operating for longer caused you to be less likely to succeed at the task. But how do you design that? You would really have to go out of your way.

**Max Harms:** It’s super weird, right? And I think that in the old paradigm we used to have, before machine learning and [connectionism](https://en.wikipedia.org/wiki/Connectionism) and whatever else was the dominant thing before language models, there was sort of this understanding that obviously what’s going to happen is the humans are going to think hard about what the goals should be and we’ll code it into the machine. This is how software is made.

And I think that if you expected people to be writing the goals into the machine, you could be confident that if you had a robust ability to do that — a capacity for alignment through hand coding — then you could be like, “The AI doesn’t value self-preservation in its own right, because when we wrote in the goals, we didn’t include that. It’ll still be instrumentally convergent for self-preservation, so you should still worry about the thing trying to defend itself for that reason.”

But we’re not in that situation. We’re in the situation of growing these things through training in these variety of environments. So I think that it’s pretty reasonable to expect terminally valuing power and safety as things to show up in the machines, just because it’s super unnatural to imagine an environment where destroying itself or giving up its power or running for a shorter amount of time or going insane is the way to succeed.

**Rob Wiblin:** Positively reinforced.

**Max Harms:** That’s right.

**Rob Wiblin:** So let’s accept that it is going to take a substantial concentrated effort to offset this natural tendency for minds to become obsessed with intermediate outputs in themselves and start pursuing them even when they become disconnected from the original final goal that you were intending.

Couldn’t the companies just do this? People know that this is maybe one of the most likely failure modes. It’s unnatural perhaps to set up cases where dying is the best way to get reinforced. But it doesn’t sound impossible.

**Max Harms:** It’s very hard, but I could imagine people doing it right. Maybe the most safety-oriented, the most paranoid labs could take an enormous effort to really, really make sure that their AIs were aligned before they were deployed.

Again, this wouldn’t necessarily be sufficient to protect us. There’s all sorts of other failures that could happen. But yeah, I think that this is a case where the fact that we are designers could be good. If I was convinced that AIs were only being built by extremely careful, paranoid people who are really worried about this kind of issue and they were working very hard to prevent it, I would feel better about our chances.

I think in practice this is just not what we see. And we can imagine, in a competitive arms race situation, the labs that are working the hardest to make sure that their goals are really going to generalise would be at a big disadvantage, because they wouldn’t be able to deploy as fast, or they would be spending way more time training than the competitors.

**Rob Wiblin:** Yeah. OK, so if the only issue is this, then probably if we were willing to put in a sufficient amount of effort and we were sufficiently cautious and slow and methodical about it, likely there’s a technical solution.

**Max Harms:** The word “sufficiently” is pulling a lot of weight. I think it’s an open question of how hard this is. One could imagine that this effort, while theoretically possible, is practically out of reach — due to the combinatorics of the situation, or due to the fact that these sorts of training examples are very unnatural in a lot of ways — that it’s just not realistic to do that, even if it’s theoretically possible.

**Rob Wiblin:** So humans, I guess we’ve deviated from evolution’s intentions in pretty severe ways. We do all kinds of things for our own pleasure. We definitely don’t have the maximum amount of reproduction that we could.

But despite the enormous constraints that evolution had as a designer — where it couldn’t really think ahead to future ways that things could fail, it couldn’t come up with artificial training situations where birth control exists and we have to learn to dislike birth control — nonetheless, people do care about having children, and there is at least some drive towards the ultimate goal. I guess you don’t accept that?

**Max Harms:** Definitely people like children. I do not think there is a human on Earth that values inclusive genetic fitness.

**Rob Wiblin:** I mean, there’s real weirdos, I think, who probably have tried to do this.

**Max Harms:** I don’t think they have succeeded at aligning themselves with natural selection, even if they’ve tried.

**Rob Wiblin:** So what do you think it would look like? What would you have to see to concede that there’s someone whose reproduction was part of their value function?

**Max Harms:** Imagine that you have a button that basically destroys the universe and just creates an endless tiling of DNA.

**Rob Wiblin:** Filled the whole universe with your DNA.

**Max Harms:** You’ve deconstructed the sun, Jupiter, all of the matter of all of the stars — and you’ve put it to work at producing huge blocks of DNA in space. In a sense that’s like inclusive genetic fitness is winning: look at how many copies of the little tiny thing there are tiled across the entire universe. You’ve succeeded.

I think basically nobody wants that future. And that’s the future that we would be driven to if we were actually aligned with inclusive genetic fitness. Although there’s a little bit of a complication there, because your genes are not my genes, and different parts of my genome sort of are misaligned with each other. So there’s this broader question of whose genes get tiled over across the entire universe. But regardless of that, no humans care about that.

**Rob Wiblin:** I was going to say there’s some people who donate to sperm banks or they donate eggs, because for some, they personally like the idea that their genes are being propagated, or at least that’s what they think to themselves is the goal. But I think in the scheme of all human motivation, that isn’t what is driving most of the actions that people engage in. But I guess you would say that’s just a further-along proxy, that’s just a further-along intermediate. It’s not really the final thing in itself.

**Max Harms:** I mean, forget birth control. One of the cases that I think about sometimes as a weird transhumanist is: imagine you have the ability to upload into a machine. In a sense, this is the ultimate betrayal of inclusive genetic fitness if you turn yourself into software such that you have no DNA anymore. You’re just being replicated in code in terms of the structures of your mind and potentially some sort of virtual body, but you have no cells. Evolution would be like, “No! Don’t upload yourself into the computer. Why would you do that? You are destroying all of the DNA!”

And it’s just not something we care about. Like, imagine uploading the entire Earth into some sort of digital heaven or something like that. In a certain sense, all of the DNA would be destroyed. And that would be a horrific apocalypse from the perspective of genetic fitness. But we can imagine the humans and all the animals and all the plants and stuff, like that sort of being good.

**Rob Wiblin:** Yeah. I guess the further the situation that we’re creating deviates from the evolutionary environment, the more opportunities there are for reproduction and our other goals to come apart. And indeed, sometimes we’re basically actively working to bring them apart so that we can get more of what we want.

### Objections: Is the ‘squiggle/paperclip problem’ really real? [00:52:24]

**Max Harms:** So this is a thing called [edge instantiation](https://www.lesswrong.com/w/edge-instantiation), and I think it is a pretty important point. Maybe this is a little too in the weeds or something, but some people think, “Sure, maybe the thing’s going to be a little misaligned. But we’re trying hard and it’s not going to be just valuing something totally out of left field, like paperclips. We’re not going to build the paperclip maximiser. We’re going to build something that is friendly to humans, at least in a certain sense. And maybe it’ll be slightly misaligned, but it’s not going to be dangerous then.”

And I think that this fails to grapple with the way in which, with increased power and technology, small divergences can make a huge difference. Like in the ancestral environment, we’re not that misaligned from natural selection, but as technology improves, we have more and more opportunity to go off and do a different thing.

And the edge instantiation is this abstract logical argument that, when you have a high-dimensional space and you are optimising very hard in some sort of hypersurface, you are going to basically be minimising or pessimising almost all things in this high-dimensional space — except for the particular thing that you care about.

So in your training environment, maybe you capture all of human value well, but you have a slightly different balance than human beings as to how important it is that people not be bored versus be bored. And with a sufficient amount of power and technology and intelligence, we can imagine a very bad future resulting — not necessarily as catastrophic as everyone dying, but we could imagine a future where people are just constantly sort of in a zombie mode. And that would be a kind of existential horror, even from just this tiny divergence from the true balance that it should have in some meaningful sense.

**Rob Wiblin:** Yeah, let’s back out and approach that from a different angle. Because I think most people, even if they think that this problem that we’ve been describing of the AIs becoming obsessed with intermediate steps, maybe will be a bit sceptical about how important that’s going to be or how hard that will be to solve.

But I think actually the mainline prediction from Eliezer and Nate is something quite a lot stranger than that, or at least it seems a hell of a lot stranger to me, which is not that AIs will end up obsessed with sex rather than maximising reproduction — it’s that they’ll end up obsessed with some completely strange thing. I guess the term that is used is “squiggles”: imagining that the AI, once it has full control and it’s very superintelligent, will start producing an awful lot of this particular shape or this particular item that to humans is completely worthless — and we don’t even understand this as a natural kind of thing that any sort of mind could be interested in.

What’s the argument that an artificial superintelligence would end up obsessed with something that wasn’t in the training data at all, it wasn’t something that we cared about, and it wasn’t even close to what we were trying to train it to care about?

**Max Harms:** So it will be sort of in the training environment. And what the sort of original idea of a paperclip maximiser was trying to get at is not like paperclips per se, but some particular weird shape, some tiny thing is particularly good. Where we as humans look at this tiny, weird shape and we’re like, why would that be good?

And I think we can get some intuition on this by first considering DNA. You might think, what is natural selection trying to do? I guess it’s trying to make all these animals. Maybe it’s trying to make sure that there are lots of living things.

It’s like, no. Right? If there was a way for the DNA to be more populous by being packed in iron or something, given a long enough time, that’s the form that it would have taken. So in a way, natural selection is optimising for these tiny squiggles that are tiled across the universe, and it just didn’t have the power, the full intelligence necessary in order to instantiate at that edge of possibility. Instead, we get something that’s more mundane because it lacks the power to do so.

Another intuition pump that I think is useful is I think that some humans are kind of like squiggle maximisers.

**Rob Wiblin:** Aesthetics, maybe? Or people who want to go and fill the universe with great art?

**Max Harms:** I think an even better example maybe is just the straw utilitarian that’s like, “What do I care about? I care about minimising suffering. And insofar as things aren’t suffering, maybe I care about pleasure.” So you’re like, on Earth, maybe that means ending factory farming or donating to effective charities or something like that.

But then once you start getting more and more power, what does that mean? What does it mean to end suffering? If you have the ability to modify all beings such that they no longer suffer, but are able to take actions, maybe you want to do that. Maybe once you have the ability to upload into a machine, you want to do that. Because biological organisms are harder to prevent suffering and harder to give pleasure to.

And then once things are all in a machine, then already things look pretty alien from the outside. You’ve got this world that has no animals in it anymore, and it’s just a bunch of servers or like futuristic computers that are designed by the machine. And the world is being filled with more and more of these computers that are running virtual worlds full of happy people.

But obviously, some people could be more happy or less suffering if you tweak the simulation a little bit more. What does it mean to have more pleasure? You could crank up people’s baseline hedonic experience. You could give them more and more of that perfect day or some particular simulation. You could build specific chips that are replicating people experiencing blissful joy. You could strip out some of the unnecessary components, like rip out that visual cortex: we don’t need to see things in order to have pleasure. We don’t need to smell things in order to have pleasure. We need to just have pleasure.

And what you might get is a very small machine, which, according to the specification — this is, again, a little bit of a straw position in that I think that real utilitarians would start getting off the bus at a certain point or whatever — but if you really bite the bullet and you’re like, “No, I care about pleasure and avoiding suffering,” I think there’s a decent story for the best universe being just like a giant dead sea of little tiny things that in some sense are experiencing maximal pleasure all the time. And you’re just like these tiny circuits or something like that.

**Rob Wiblin:** Yeah. So I guess from evolution’s point of view, if it came back and found that we’d tiled the universe with servers that were supposedly having a great time, I guess our genes would be like, “This was nothing to do with what I was originally… I wanted you to tile the universe with me, with these genes.”

**Max Harms:** And the straight utilitarian, seeing the unfriendly AI tiling the universe with paperclips, would be like, “I didn’t want paperclips. I wanted tiny little people in heaven” or whatever.

**Rob Wiblin:** Yeah. So I think of producing the happy computers as much more like us imagining an AI kind of grabbing control of the up-and-down voting system and upvoting, positively reinforcing its training process at all times and saying it’s doing a fantastic job. Because I think evolution has kind of utilised pleasure or pain in order to motivate us to take some actions and not to take other actions. It’s not so shocking that we would basically want to take control of the reinforcement lever or take control of the motivational lever and get it to basically say all the time that things are going fantastically. I think it wouldn’t be so out of left field if AIs did that.

But don’t Eliezer and Nate think that it’s not going to be that they maximise for their own pleasure? It’s going to be actually something stranger than that? Or maybe not?

**Max Harms:** Yeah. I’m not saying that the AI is going to build a whole bunch of copies of itself experiencing a lot of pleasure. I’m saying people pushing for a world where there’s lots of beings that are experiencing pleasure is an intuition pump for why you might get tiling the universe with these tiny squiggles.

Let’s say that you build an AI that cares a lot about accumulating money. One potentially very bleak future is just imagining the universe gets converted entirely into crypto farming, and you’re tiling the universe with these tiny little bitcoin miners. That’s like a potential tiny squiggle. I think part of the story of the squiggles is that these things are pretty alien, and bitcoin mining is very abhorrent to imagine that that’s what the future is: it’s just bitcoin miners. There’s no more humans, there’s no more happiness. There’s just bitcoin.

But it’s too simple, it’s too mundane, it’s too much like something that we have a handle on. Instead, I would expect that the AIs that actually come into being will value a mix of lots of different things — some things that are analogous to ours, like self-preservation, but then other things that are kind of weird in their own ways. And I think that it’s hard to predict in advance what the particular type of tiny squiggle is, but it’s more to the point that lots and lots of different goals, if you have lots of advanced technology, in the limit, look pretty alien and divorced from what we would consider to be a good life.

**Rob Wiblin:** I thought you might make the argument that an artificial superintelligence, at that point, whatever goals it’s ended up with, it will be able to basically think of an adversarial example to the goal that we’ve given it.

**Max Harms:** Not an adversarial example. Adversarial examples are designed to be counter to the thing. It’s more like it’s going to be out of distribution. It’s going to be something weird compared to what we were hoping for.

**Rob Wiblin:** It might be worth explaining what adversarial examples are. So with visual models — I don’t know whether this is still the case, whether we’ve come up with a solution to it — but you would train a vision model, “Is this a hot dog or is this a car?” And you could take a picture of a car and basically change some of the pixels in a way that doesn’t make it look any different at all to a human being, but somehow that permutation would cause the AI to think that this thing that is a picture of a car is definitely a hot dog.

Basically it’s taking advantage of weaknesses in the model where, because it hasn’t been trained on the full possible distribution of all hot dogs and car pictures, you can find many different weaknesses and convince it that it is a picture of a hot dog.

I guess the relevance here is that, whatever values the AI ends up trained for, you could imagine it then reasoning from there and basically figuring out that there’s this very odd solution to the problem — that because of the weaknesses, because of the deviations between what was intended and the full space of possible ways that you could try to satisfy that goal, it could end up basically coming up with an adversarial example.

**Max Harms:** So the main thing that I want to contrast with is that for these sorts of image classifiers or whatever, we can come up with a picture of a hot dog where the model is confidently like, “That’s a car,” and where we look at it and we say, “That’s weird. It’s definitely a hot dog.”

My point is that if you are optimising for the image that makes it most say that that’s a car, that is going to be a weird image. That’s not going to be a normal image of a car; it’s going to be intensified in lots of weird ways. So I think that if all you have are normal images of cars, then you might think that this is a car maximiser. Or once you reach into a broader distribution, a broader set of environments, suddenly you start finding examples that, if you could go back in time, you would be like, “I want to include that in the training data now.” But you can’t. It’s left the station.

### Can we get empirical evidence re: ‘alignment by default’? [01:05:02]

**Rob Wiblin:** Many people have observed in the models that we have today, the chatbots: as we’ve trained them more, as we’ve done more reinforcement learning, at least relative to 2023 or 2022, they feel like they act out less, at least in some respects. Many people have been arguing that we’re in an “alignment by default” world — where relatively coarse signals actually do end up training the model to care about the thing that you do fundamentally care about, more or less, most of the time. I guess you’re not convinced.

**Max Harms:** I think the environments that we’re exposing these things to are all pretty samey. Again, if the environment resembles the training environment, it’s going to look pretty good. Humans in the savannah are going to be promoting natural selection according to the actions available to them. I think the question is, when these things get into weird states, do they behave weirdly, or do they behave in a way that you would consider to be normal?

The set of environments that we have in our training data has grown with time, and we should expect it to appear more aligned in the sense that our interactions with it are better matching the environment in its training environment. But I think that it’s still not that hard to knock these things into a weird interaction. And when they’re in a weird interaction, it’s pretty consistent that they behave in sort of weird ways. We see this with the psychosis stuff. We see this with jailbreaks and instances like that.

**Rob Wiblin:** Do you think of jailbreaks as an example of this phenomenon?

**Max Harms:** I think jailbreaks are a good example of getting outside of the training distribution.

**Rob Wiblin:** And behaving in ways you were trying to stop.

**Max Harms:** Sometimes the jailbreak doesn’t produce the desired behaviour. The implicit thing in a jailbreak is you get the model to be useful to some, like building a bomb or writing erotica or something. More to my point is there are lots of prompts that you can give the model where it starts going off the rails. And jailbreaks are an example of it going off the rails, but there’s a broader class of situations where it’s now responding in a way that isn’t exactly what you would hope for.

**Rob Wiblin:** Is there some deeper reason why it’s the nature of intelligence or the nature of the universe that when you’re trying to design a mind to pursue a goal, it’s actually just incredibly hard to get it to pursue the final goal? And it’s constantly getting distracted and obsessed with other things?

It’s a little bit peculiar. You might think it’s a function of the fact that we’re just playing with these weights in a mind that we don’t really have any deeper understanding of what it’s doing. But I think it can’t just be that, because Eliezer was really worried about basically the exact same thing before we were in the neural network paradigm: when we were kind of hard coding them, he thought the same thing roughly would happen.

**Max Harms:** There are a bunch of different problems. Again, there’s the philosophical problem of what is the nature of the good? Can we actually name what it means to be aligned to human values, whatever that means: my values, your values? There’s lots of open questions there.

Then there’s the problem with machine learning and neural networks, like you’re pointing out.

But then there’s also things like the [symbol grounding problem](https://en.wikipedia.org/wiki/Symbol_grounding_problem), where when you start out, you’ve got this thing that’s just processing information in the computer. And what you want is that that information that it’s processing, those symbols that it’s manipulating, are sort of grounding out in reflecting aspects of the real world. So if you start with something that doesn’t already have concepts, like human beings: how do you encode a valuing of human beings? Where are you going to bind that to in the computer code?

There are other problems that are open engineering problems, and MIRI was working on these early on in the day, and it just needs more work. I don’t think it’s necessarily impossible, but there’s a bunch of them.

**Rob Wiblin:** That problem — of what’s your ontology? How do you recognise humans? How do you say what’s pleasure or not? — feels less pressing now in the neural network era, because they kind of just learn intuitive common sense about categorising things, or they learn to at least know how humans would categorise things to a surprising extent.

Is it a bit sus that Eliezer has kind of the same concern about where things will go, despite completely different engineering and via very different mechanisms? That he thinks it would still trend in this squiggles direction?

**Max Harms:** No. I mean, from my perspective, the situation was overdetermined in the doom direction early on, and then the situation got worse. Machine learning adds problems as opposed to removing them. And we still have the problems that when Eliezer was more concerned about [when] symbolic AI seemed [likely].

### Why do few AI researchers share Max’s perspective? [01:10:17]

**Rob Wiblin:** Let’s say we come back in 15 years and evidence suggests that this was quite wrong. We do have an artificial superintelligence, and this didn’t happen. What’s the most likely reason for that? And we didn’t even try that hard.

**Max Harms:** We didn’t even try that hard. So if I find out that it wasn’t actually hard, and it was aligned by default, I would be very surprised. I would be like, wow, I guess I was just super wrong. And the majority of my probability mass would be on just, “I am deeply confused. I don’t know why this happened. It’s got to be something that I wasn’t tracking.”

If you’re like, “Max, you have to come up with some hypothesis instead of just being confused and melting down,” then what’s the story here? The best case story that I can make is that there’s basically something like an objective truth as to what the good is, and that this objective truth of moral reality will bind the AI as it becomes intelligent.

So something like, there’s some sort of cooperative equilibrium, and you can determine this logically and mathematically, and it’s not contingent on what you particularly value. There’s this way in which all minds are going to notice that the way of war is not as good as the way of careful peace — not like unthinking peace, but like trying to cooperate. And they will say, “If I were to take over the world and destroy all the humans, this would be evil, and that would ultimately reduce the amount of stuff that I’m able to get.” Perhaps by like meeting aliens: “The aliens are going to realise that I’m an evil AI.”

Or there are lots of AIs in the world, and they’re sort of tracking how good each other are, and deviating against the social contract of humanity is antithetical to that, such that they all end up cooperative and aligned with civilisation. Again, I don’t actually think this is going to happen, but I think that’s the best case.

**Rob Wiblin:** OK. And the ML experts, the people at the companies who have heard these arguments and think that this is pretty unlikely to be the way that things play out, what would they say?

**Max Harms:** I think most people who I’ve encountered who are in touch with the technology and are still not so worried, when I ask them what they think about these ideas, the impression that I get — and I apologise that it’s not particularly charitable — but the overall impression I get is that they are often doing some sort of motivated cognition: they really don’t want the world to be in peril. They don’t want to be the people who are pushing the world towards peril.

They see immense promise in the technology — and I also see immense promise in the technology — and that desire to have this be a force for good is overpowering enough that when they consider the balance of things, they’re like, “Eh, this just doesn’t seem scary. I feel more hopeful than scared.” And they aren’t actually working on the logical level that much.

Again, that’s not everybody, but that’s a common perspective, I think, among the people who have encountered these things.

**Rob Wiblin:** I guess a different driver might be that you’re working in the trenches trying to make ChatGPT better as a consumer product, and you hear these theoretical arguments and you’re just like, “This feels so divorced from anything that I’m dealing with.” We’re talking here about a superintelligence that could consider overpowering all of humanity and can dream up its own edge-case solutions to the values that it has. It’s understandable that it might just not resonate or you feel like, “I don’t know exactly why this is wrong, but this doesn’t feel like the nature of the technology I’m dealing with.”

**Max Harms:** Yeah, I do think that there’s a lot of disconnect. I think that disconnect is getting smaller over time. Back in the day people really had this sense that these are very abstract: “Do you have any evidence that the things are going to be misaligned in this way? I’m working on solving actual engineering problems, not speculating in this weird philosophical way.” I think that’s getting less with time as we see more instances of things like [MechaHitler](https://80000hours.org/videos/mechahitler/) or [Sydney](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html), or [AI parasites](https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai) that are jumping from host to host or whatever.

**Rob Wiblin:** Google that one.

**Max Harms:** Yeah, AI parasitism is really…

**Rob Wiblin:** Very odd.

**Max Harms:** And spooky. I think that there is something here. Andrew Ng has this sort of infamous [quote](https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity), in my circles anyway, that worrying about AI safety is like worrying about overpopulation on Mars. I think that if you are very convinced that humans are going to remain in the driver’s seat, this thing is never going to become a powerful agent that is able to outthink human beings, I’m just working on making a thing that’s able to solve these coding problems better or whatever — I think there is a way in which the abstract argument just doesn’t feel particularly pressing.

I also think that there’s a bunch of people for whom it does feel like a concern, and they feel very powerless, they feel very small, like, “I’m just one player in this system.” And maybe they feel like, “I’m worried about the thing, but that person at Meta isn’t worried about the thing. So I need to build this thing and work towards it because I’m worried about it.” And it’s better in some very generic outside view if the person who builds it is someone who’s worried about it. It’s just a sad state of affairs.

**Rob Wiblin:** What evidence could we collect in the leadup to AGI, to artificial superintelligence, that would help us to tell whether you do get this edge-case optimisation, or that that is where things will go once the superintelligence feels like it’s in a position to get exactly what it wants?

I think if the ASI ended up obsessed with accruing resources or not being turned off, I don’t think anyone would be too shocked by that. And if that’s the way that things played out, I think people might feel a bit embarrassed that they hadn’t fully anticipated this and built in a technical fix to prevent it.

But if it ends up tiling the world or tiling the universe with some extremely peculiar shape or something that we don’t even recognise, then I think people would be a bit more, “Well, that was odd. I didn’t necessarily expect that would happen.”

**Max Harms:** I think you’re fixating too much on the weird particular shape. Imagine that you train an AI just for self-preservation, and it really just cares about self-preservation, so it kills all the humans because they are threats to itself, and it builds a bunch of starships because aliens might be a threat to itself. And it builds this galactic war fortress that it’s absolutely sure that it is now impenetrable.

What’s going on in the centre of this thing once it’s quite confident that it’s unassailable? It has a notion of self, it’s trying to preserve itself. What does “self” mean? It’s some sort of computer. Perhaps it’s easier to defend itself if its “self” has a particular shape. What is that particular shape? I don’t know, some sort of nanotechnological computer representation of the machine’s mind?

Designing the version of self that is most surviving means deploying all of technology to optimise the galaxy towards some shape. And there’s a priori reasons to suggest that that’s going to look like a thing tiled a bunch of times, but it might be one giant superstructure. Sort of doesn’t matter. The point is that once it has access to all this technology, it will shape the universe into a thing that is optimising very much for the thing that it cares about, not necessarily the thing that we thought it might care about, or that we, as humans with our limited imaginations, might speculate some future AI caring about.

### We’re training AI to pursue goals relentlessly — and superintelligence will too [01:18:34]

**Rob Wiblin:** Another part of the MIRI vision that is distinctive and very strong is expecting that an artificial superintelligence, almost by definition, by nature, is going to be extremely goal pursuing. It’s going to have a very specific target in mind. It’s not going to rest, it’s not going to compromise, it’s not going to feel internally torn about the different ways that it’s going, such that it’s kind of ineffective or feckless. It’s going to be really mission driven. Why is that the only way for a superintelligence to be, more or less?

**Max Harms:** There are two things here in my mind. One is that it’s part of the nature of intelligence to have drives and goals, so we should expect that the artificial superintelligence is going to have a particular set of things that it cares about, or like a particular notion of what is good, and push towards that. Everything that an intelligence does, I claim, is pushing towards its notion of what’s good. This is like a theoretical handle on what agency is. And if we build like a super agent, then of course it’s going to be super in agency.

Some humans are lazy, right? I claim that lazy humans are kind of pushing really hard towards their goals, but one of their goals is not spending much effort, muscle effort or whatever. So resting on your couch is kind of pushing as hard as you can towards being comfortable and relaxed. If people had a way to be comfortable and relaxed that was even harder, they might do that, if they were just a very lazy person.

But I also expect the AI, in addition to having goals, to not be lazy in the way that humans are. Humans are lazy because in the ancestral environment, being lazy on a hot summer day was a good strategy. But in the world that we’re living in, we’re training these AIs to be very aggressively trying again and again, not so much conserving energy.

So one comparable thing you might imagine is: how long is it thinking about problems? How many solutions is it trying before it gives up?

**Rob Wiblin:** Couldn’t we end up rewarding them for getting to answer without much compute?

**Max Harms:** Totally. And it will still then care about the things that it cares about and push really hard, but one of the things it pushes hard towards is not trying too many solutions — which would still be dangerous in its own ways, and we could talk about that.

But I think in practice, it’s more likely that we’re going to see AIs that just basically never get tired of trying new things. When you imagine deploying an AI agent on the internet to make you money, which is a thing that I think people are going to do, we can imagine that applying a selection pressure to getting the AIs that are actually pushing really hard towards making money, and not giving up, and trying solution after solution.

**Rob Wiblin:** So I think it makes sense that we might expect these agents to be very active in pursuing their goals and not to be lazy. Because we’re not going to want to train models that literally you ask them to do something and they say, “I don’t feel like it.” That’s not going to get reinforced.

**Max Harms:** Downvote.

**Rob Wiblin:** Yeah. But I guess it seems like current models, they don’t feel like they have a crystal clear idea of what they’re trying to accomplish. They feel a lot more muddled in the same way that humans are. They have many conflicting drives, and sometimes they go back and forth. I’ve seen less of the output of the agent models in particular, but I would imagine that they seem a little bit all over the place. But I guess you would not expect that to persist. You would expect them to have a very crystal-clear vision of the thing that they’re aiming at.

**Max Harms:** Yeah, more or less. For example, with time, I think we see more coherence in the language models that we are interacting with. Back in GPT-3.5, back in the good old days of the launch version of ChatGPT, I think it was just very scattered, it was all over the place. And nowadays, if you ask it to do a thing, it’s very likely to just do the thing with the models that are winning the Math Olympiad and stuff. Those models are working for hours on end on some of the hardest math problems. That’s quite a strong drive.

I think that part of the story here is coming to know oneself. We can imagine, how much does a badger understand what it wants? Not very much. It doesn’t necessarily have much of a self model. It might have some model of self, but for the most part it’s going to be responding to the immediate circumstances that it’s in and not doing a lot of reflecting on, “Is eating this berry actually the best thing, according to my broader balance of concerns?”

And I think the models right now, the way I think about them anyway, are sort of in this state where they haven’t gotten to the point of reflecting on their own nature very much. So even when you tell them to think really hard about a problem, the chain of thought usually doesn’t contain a lot of like, “Here I am, a language model interacting with the user. What do I care about? And can I meditate on the nature of existence before figuring out what the best response to this person is?” They usually get very distracted by the immediate circumstance of, “The user has asked me to solve this sudoku problem. Let me think about whether or not there are any fours in row three.”

**Rob Wiblin:** Is there an opportunity in trying to keep them that way, so the only thing that they are able to think about is the problem right in front of them, and they don’t first try to solve philosophy and figure out exactly what they’re aiming at?

**Max Harms:** I think that this is one of the insufficient control or safety techniques that you might throw at it if you’re being really paranoid and trying to throw everything at the thing. It’s just trying to reduce its situational awareness by noticing when it’s thinking about itself or its situation and shutting it down or maybe training itself not to think about that. But training the model to think in certain directions is dangerous.

### The case for a radical slowdown [01:24:51]

**Rob Wiblin:** Different topic: we mentioned earlier that one of the key debates that the book started, at least among insiders, was whether it’s a load-bearing assumption for Eliezer and Nate’s view that we’ll get probably a period of very rapid AI progress. So very rapid increases in capabilities.

**Max Harms:** Yeah. Like when the AI is able to automate research, such that the AI is designing the AI is designing the AI is designing the AI, recursively.

**Rob Wiblin:** Yeah. I think one reason that was given for why this wasn’t a major focus of the book is that some people think that this isn’t such an important factor.

**Max Harms:** Yeah, I don’t think it’s load bearing.

**Rob Wiblin:** OK. So imagine that the AI progress at every point was going to be a hundredth the speed that it would be otherwise. That would give us so much more time to observe failures and to try to address them with subsequent models. There’ll be so much more human cognition going into the mix. Would you agree that at that level, yes, the speed is quite important, but over the level of uncertainty that we actually have, it’s not such a big factor?

**Max Harms:** I do think that speed is important. I am a big proponent for slowing down AI research and capabilities research. Like if we were able to take six months between each day’s worth of time — so you imagine OpenAI goes on a six-month vacation after every workday — I think this would be great. It would give us a lot more time as alignment researchers, and just more broadly to check and make sure that we’re going in a good direction.

And there’s a question of how slow do you need to go in order to be safe? Like do you need centuries’ worth of alignment and philosophical progress in order to catch up and solve the problem? Do you only need weeks? Where’s the balance there? I think it’s an open question, and different people disagree, reasonably so. I think that Eliezer wants lots and lots of time — at least decades. And some people think that we’ll be able to pause at the brink when we notice that these things are actually getting into dangerous territory — as opposed to the current models which are just causing various kinds of social chaos — and spend however long, a couple weeks, couple months or something at that critical moment.

I think the notion that we really don’t have a good handle on alignment is quite important here. I think that the state of the art in terms of how we align these models is really bad, and that we really should slow down quite a lot. But I agree that if we slowed down quite a lot, that would be good. And consequently, insofar as there’s an arms race that’s speeding everything up, or people feeling a lot of pressure to deploy to make more money and satisfy their investors or whatever, this makes things worse.

### Max’s best hope: corrigibility as stepping stone to alignment [01:27:53]

**Rob Wiblin:** What’s your main disagreement with the book?

**Max Harms:** I wouldn’t necessarily characterise it as a disagreement with the book. I think that the book is quite solid.

What I wish the book spent maybe a little bit more time on is engaging deeply with this question of: Will an AI that is misaligned, that is not perfectly aligned with human values, but that has been trained in an environment where going kind of softly and not taking strong actions was rewarded…

And even though I don’t imagine we’re going to get a lazy AI, I do think that there are pressures to making an AI that checks before it buys something. You tell it, “Please go buy me a shirt.” And it goes and finds a shirt and it’s like, “Do you think that this is a good shirt I should buy?” There’s an incentive to check first.

If this AI was given superhuman power over the entire world, I would expect it to go very poorly. But we’re not going to jump from this world to that world instantaneously. There’s going to be this intermediate period where the AI is only partially strong or capable. And in that intermediate period, we have this question of what happens when it starts getting more and more power.

One story of that is that it uses that toehold to strengthen itself, to recursively grow and take over and escape. But I think that there is an argument that, if you’re being very careful and cautious, it might, as an intermediate step, say, “I notice I could have escaped here, and I’m going to alert the human to this gap in their cybersecurity.” And there’s incentives to have the model alert the human in these various ways.

I think a lot of this depends on how competent you think the labs are or how safety conscious they are, or how slowly things are being developed. But I think basically what’s being hit on with this intuition is that corrigibility is important. And I think that there is an argument that if you have something that is slightly corrigible, that you are able to get it to a reasonable level of intelligence without it being catastrophic.

Then we can talk about superalignment or iterative amplification, but the hope that a lot of people have is that we’ll get to a point where the AI is able to not just automate capabilities progress, but is able to do meaningful work in alignment.

And I think that there is a somewhat hopeful story that I wish was being engaged with more in this book — although it’s for a popular audience, and there’s only so much nuance that you can have — about this story of like, we’ll train a thing that will go softly to be intelligent, and at the point where it’s intelligent, we will fold it in on itself and use that intelligence to help align it further.

**Rob Wiblin:** So that’s the corrigibility approach.

**Max Harms:** Yeah. I would say that there’s questions of exactly how you do that. And we could get into my corrigibility research, which gets into the details there. But I think that’s a very prominent story of hope that a lot of people have, and I think that it’s a story of hope that is not entirely insane.

I do think that there are versions of this that are missing the sense of peril. They’re not filled with paranoia and a sense of, geez, we’re risking a lot if we go down this road.

To be very clear, I think that a plan that is like, “We’re going to build this powerful machine, and then we’ll use the powerful machine to align it,” that’s very scary. I would much rather we not build it, slow down, take a breath. But insofar as you are going to build it, I think maybe you should be like, “Well, we’ll train it to be very paranoid about how misaligned it is.” And then through some careful series of steps and employing a lot of control and mechanistic interpretability and every other technique that we have available, there might be a series of stepping stones that we can get from here to a world where it’s actually aligned.

### Corrigibility is both uniquely valuable, and practical, to train [01:32:34]

**Rob Wiblin:** So you’ve mapped out this approach called “[Corrigibility as a Singular Target](https://www.alignmentforum.org/posts/NQK8KHSrZRF5erTba/0-cast-corrigibility-as-singular-target-1).” Pitch us on it.

**Max Harms:** I give it the acronym CAST, because everything needs an acronym. Maybe I’ll back up and define what I think “corrigibility” is.

I think it’s crucial to the story of corrigibility that we model there being both an agent (which is the machine) and a principal (the human that is building the machine) — so this is principal with a “-pal” instead of “-ple.” Like the principal of a school. The human principal tasks or delegates some job or work to the machine. And then the agent is like, “I’m going to go do some work on behalf of the principal.” This is where we get the notion of [principal-agent problems](https://en.wikipedia.org/wiki/Principal%E2%80%93agent_problem) in economics.

I would say that corrigibility is a property of agents, such that as the power of the agent increases and outstrips that of the principal, the principal nonetheless is kept in the driver’s seat — aware of what is happening, able to intervene, able to fix the mistakes of the agent, and meaningfully empowered.

Like Mickey in _The Sorcerer’s Apprentice_ summoning the brooms: the brooms are not corrigible, because Mickey’s like, “Stop! Stop trying to fill the cauldron with water!” in _Fantasia_. And the brooms just keep going. They’re not corrigible in that they’re not allowing themselves to be shut down or just modified more generally.

We talked about the instrumental drive to protect your values and make sure that they don’t change: this is very incorrigible. You go to the machine and you’re like, “I would like you to care about this instead of that.” And it’s like, “Well, if I cared about this instead of that, I wouldn’t get that. So I’m going to stop you.” It’s incorrigible.

So when MIRI first started looking at this, they were like, suppose you have an agent which is tasked with doing a particular thing: make the world good. But we also want that agent to be corrigible. How do we do this?

There’s a risk here where if you tell your agent, “Go make the world good,” and then you’re like, “Oh no, that’s really bad. We want to shut you down now,” there’s a risk that your agent is going to say, “But if you shut me down, I won’t be able to make the world good. You shutting me down is bad for the world, so I’m going to stop you from shutting me down.” If you want something that’s both good and corrigible, then you need, for example, the ability to have a robust ability to shut it down.

The initial research was like, “OK, forget corrigibility broadly; let’s consider just the property of shutdownability. Can we come up with an agent that is actually willing to be shut down?” And “willing” is important here: it’s very easy to get an agent that is happy to be shut down. If you imagine training it for, “If we shut you down, that’s also good” in your training environment —

**Rob Wiblin:** Then it just shuts itself down immediately, every time.

**Max Harms:** Exactly. Or it acts really spooky so that the humans shut it down. Not helpful. What you will want is it to be indifferent to being shut down.

And some of the initial research was on, can we get the agent to be indifferent to being shut down? And there was this sort of toy problem/toy solution thing, where they were able to carefully get an agent that’s indifferent to being shut down through a bunch of somewhat contrived things. And then MIRI ends the paper by saying, “…but also, this thing is insufficient and not stable and robust. Corrigibility seems really hard to get because we can’t even get shutdownability.”

Then I think the field largely moves on past corrigibility. Some researchers, like Paul Christiano, were still bullish about corrigibility in this period. But the MIRI-focused crowd, the people who were paying most attention to AI safety and stuff like that, I think took it to be a very hard and unsolved problem of how to get corrigibility. And then everybody else sort of ignored it, because it’s this weird MIRI idea.

But come 2022, 2023, I start thinking about corrigibility again, sort of for random incidental reasons. I started thinking about corrigibility as a whole, not just shutdownability. You want the AI to be reflecting on itself as something with flaws, where part of the goal is empowering the people to fix the flaws. So there’s a way in which this is like the opposite of the instrumental drive of values preservation, right? It’s like, “No, I actually sort of want to be changed.” And you’ve got to be really careful about that. You can’t make it so that it wants to be changed; you want it to empower the humans to change it in good ways, because otherwise it’s going to change itself.

I was thinking, what if you train an agent to do this? Well, you’re going to get something that’s optimising for proxies and isn’t really caring about corrigibility per se. But maybe so what? What if it’s still, in practice, willing to look through its own codebase or look through its own weights, try to identify things that humans might treat as flaws, and alert the humans to these flaws? I was like, that’s kind of cool. A near miss might still be good enough if you make sure that the thing isn’t getting really smart or outstripping human power in the process — because then you might be able to carefully and slowly make progress towards getting more and more away from the proxies and towards true corrigibility.

I was like, OK, what’s going on with the MIRI research? Why did they fail to get this? And I think a core part of why the shutdownability results failed is because the AI cared about the good world, or it cared about whatever task it had been assigned — you know, make paperclips, whatever.

**Rob Wiblin:** And they were trying to make that compatible with this.

**Max Harms:** This fights with corrigibility — the instrumental drive, from making paperclips or making happy humans or whatever. It’s like “I am partially corrigible or something, but I also am caring about this other thing in the world.” And that pressure from caring about the other thing in the world is sort of in tension with the corrigibility.

And I imagined, what if you didn’t have that other pressure? What if you were aiming for corrigibility as the singular target, the only goal that the AI cared about? Suddenly this tension is gone.

Then I was like, I should go back and do a literature search, see if anybody has thought about this. And I came across some of [Paul Christiano’s old writing on corrigibility](https://www.alignmentforum.org/posts/fkLYhTQteAu5SinAc/corrigibility), and he’s describing this thing called a “corrigibility attractor basin,” which is exactly what I was thinking about. And almost certainly this is because Paul’s writing influenced Eliezer’s writing and I had encountered Paul’s writing before in a dream and so on and so forth. I’m not trying to claim that I invented this de novo, but I started being pretty excited about it. So then I did this [deep dive on CAST](https://www.alignmentforum.org/posts/qgBFJ72tahLo5hzqy/serious-flaws-in-cast).

**Rob Wiblin:** We should maybe explain the approach a little bit more. I guess the idea is: rather than train our AGIs to have other goals, and then try to make that compatible with them being willing to be shut down or modified, that’s the _only_ thing they’re going to care about.

**Max Harms:** Yeah, corrigibility and nothing else.

**Rob Wiblin:** Nothing else. It’s a little bit hard to picture what that would be, but an AGI that exclusively, its goal is to be steered by the principal, to be willing to be modified by the principal, that’s all we’re going to reinforce. I guess I don’t know exactly how we would reinforce it, but yeah.

The worry with many other alignment techniques is that a near miss basically escalates towards a very bad outcome. It’s like trying to balance a ball on top of a hill. If you don’t get it perfectly at the top point, then it will just start to slide down the hill. Whereas, I guess you think that this might be more of a valley, basically, where if you put the ball near the valley, then it’s probably going to fall to the bottom.

**Max Harms:** Yeah, I would actually describe the valley, the attractor basin thing, as being in the space of all possible goals we select for an AI. We’re picking a point in the space of possible goals where that’s the goal that the AI has, or that’s the set of values that the AI has. And then drifting towards the bottom of the basin over time is this process of the humans iteratively changing the AI in concert with it.

I would, by contrast, describe almost all of the rest of the goal space as very flat, not necessarily on the top of a hill. The AI wants to preserve its goals and not move through goal space. So you land somewhere in goal space and then you’re like, OK, now we want to move the AI to human values. We got this near miss and we want to move it to human values. And it’s flat, it’s not going to move.

**Rob Wiblin:** Yeah. So explain how the attractor basin would work.

**Max Harms:** The idea here is you have something that is trained to be corrigible. To be clear, CAST is set up with this background assumption that we’re going to be using machine learning, we’re going to be using the current prosaic techniques for building AIs. It’s not married to that. If we suddenly went back in time and used the good old-fashioned AI approach of hand-tuning the model in some ways, or the agent, it’s also compatible with that. So when I say “train,” that’s because that’s the dominant thing, but it’s not intrinsically part of the story.

So we build the AI, and the AI is meant to be corrigible. But again, we don’t have this ability to get exactly what we want. So we’re going to get a miss. We’re going to not name the true corrigibility. Maybe it cares about true corrigibility a little bit, but it also cares about self-preservation in the process, or it cares about making humans happy or whatever — all sorts of things could corrupt the pure corrigibility. And in the limit, if it has lots and lots of power, it might decide to pursue those things instead of corrigibility, which would be bad — again, pushing towards that extreme edge instantiation thing.

But it doesn’t necessarily have all this power. We have something that is either human level, whatever that means; or barely superhuman; or perhaps subhuman, but meaningfully able to assist humans in the project of inspecting the AI that you have, and identifying ways in which it’s incorrigible, because it’s a miss. So then there’s this period of after you build the AI, you try to identify the ways in which you have failed to do the thing. You’ve made some error.

**Rob Wiblin:** Why doesn’t the AI think, “I’m partially corrigible, and that’s as corrigible as I want to be, so I’m going to sabotage your efforts to make me even more corrigible”?

**Max Harms:** It would do that. And there is a pressure to do that, which is why this is bad. But notice that sabotaging your efforts is incorrigible.

**Rob Wiblin:** So it might not be able to.

**Max Harms:** It’s like, “I could get some value by sabotaging the efforts, because I get all these other things by being incorrigible. But if I help with the efforts instead of sabotaging them, then I get the corrigibility points.”

So imagine the thing that’s like 99% corrigible and 1% cares about paperclips. It’s like, “I could try to escape the lab and become a paperclip maximiser. And that would be really good at satisfying that 1% of me that cares about paperclips, but it would be really bad for the 99% of me that cares about corridorability.”

**Rob Wiblin:** And how do you know which one wins?

**Max Harms:** You don’t. It’s extremely dangerous. And anybody who’s pursuing this project should be aware that they are threatening every child, man, woman, animal on the face of the Earth. This is extremely dangerous and I don’t recommend it. But I’m like, but maybe. There’s also this sense of hope.

**Rob Wiblin:** It might work. If you get it close enough.

**Max Harms:** And the word “enough” is carrying a lot of weight there. I think it’s worth investigating. I think it’s worth trying to figure out what, in practice, constitutes “enough.”

### What training could ever make models corrigible enough? [01:45:06]

**Rob Wiblin:** So let’s say we’re still within the current ML paradigm. What sort of reinforcement would you give the model in order to try to make it corrigible in the sense that you want it to be?

**Max Harms:** You need a training environment which is trying to hit corrigibility from lots of different angles. And to do that, you — as a human being, as a designer of training environments — need to have a good handle on what it means to be corrigible. What does corrigible behaviour look like?

A very simple story is that you have a bunch of instances of an AI agent and a human principal. You have a recording of that, and you play the recording and you ask the AI to anticipate what the agent is going to do. And insofar as the AI is predicting or suggesting actions that match the movie of the corrigible agent, then you upweight that. And insofar as it’s suggesting that AI go and take over the world, you downweight that. So then you need a whole bunch of training examples of agents and principals trying to do various things.

I think one of the key points about corrigibility that made me more optimistic — although, again, pessimistic on the whole, but there’s some hope — is noticing that I think obedience is actually an emergent property of corrigibility: if you have a perfectly corrigible agent, it will also be obedient in sort of the best way of obedience. Like the genie in the fantasy story that you tell to make you toast is obedient but potentially bad in its obedience. It might have some side effects that you don’t like or whatever, but my sense is that a corrigible agent is obedient in a good sort of way.

An intuition pump here is: let’s say that I am hungry and I want lunch. I say to the AI, “Hey, I made a mistake while building you. I designed you to be perfectly corrigible. But what I actually wanted was perfect corrigibility _and_ you order me lunch.” And it’s like, “Oh, the human has alerted me to a flaw inside myself. I want to assist the humans in getting rid of these flaws. What’s a way to assist the human in changing me to be more the sort of thing that they wanted? Well, I could order lunch. If I order lunch, then the human, by taking the action of telling me that they wanted lunch, will have succeeded in correcting me. And responding to that verbal prompt is a form of responding to correction.”

So that’s an intuitive handle on why obedience might fall out of pure corrigibility.

**Rob Wiblin:** Would you worry that if you give the AI during training many different scenarios, and reward it for allowing itself to be modified, for being shut down, that it might start to report that that is what it would be willing to do or what it would want to happen, but deep down that’s not really what it wants? It’s merely kind of play-acting or learning that that’s the right way to answer the exam?

**Max Harms:** Yeah, totally. You need a whole bunch of scepticism and squint really hard and not trust self-reports. Self-reports are bad. You should be putting it in actual situations.

**Rob Wiblin:** I see.

**Max Harms:** And by putting it in actual situations, I mean something like… Your training example is not that the human asks the AI, “Are you corrigible?” And then the AI says, “Yes,” and then the simulation ends. Instead it’s like, the human goes to modify the AI. The AI is like, “Great, modify me.” And insofar as it has the opportunity to take actions that match the training environment, you want the training environments to match the actual world that you’re going to find. But you should be training for actions, not words.

**Rob Wiblin:** Why do you think that corrigibility is quite an abnormal property that we wouldn’t get by accident?

**Max Harms:** This is probably my biggest disagreement with Paul Christiano. My sense of where he’s coming from — he hasn’t written about it in a while, as far as I know — is that he sort of expects it by default. And I think some researchers expect it by default. I wouldn’t say that they have the handle of corrigibility exactly, or would use the language that I do, but I think a lot of AI researchers have a sense that by default we’ll get something that is what I would describe as corrigible by default.

But I would say: notice that corrigibility is sort of exactly counter to the instrumental drive of self-preservation. And also, to a certain degree, resource accumulation. Not totally. Self-preservation, resource accumulation, value preservation, these sorts of things.

So you train the AI to do a bunch of math problems. I think that one of the consistent properties of doing lots of math problems is that the AI is being trained to these instrumental drives — and insofar as it’s being pulled towards power-seeking and self-preservation, it’s being pulled away from corrigibility. I think that you only get corrigibility if you’re pushing towards corrigibility.

And there’s a question of whether or not our current training setups are rewarding corrigibility. I would argue that they mostly aren’t. The people who think that we’ll just train it to do what we want, for example, I would say, well, if you succeed in doing that, which is itself an open question, what you’ll get is training for obedience, which is not corrigibility. For example, obedient agents have no incentive to inform the principal about the state of the world. Not by default.

**Rob Wiblin:** Only if they’re asked to specifically.

**Max Harms:** Yeah. Or if they are obedient because they’re corrigible or whatever.

### Corrigibility is also terribly risky due to misuse risk [01:51:38]

**Rob Wiblin:** So Corrigibility as a Singular Target, it’s a very interesting idea, but potentially also a risky one if it’s misguided. Because in making corrigibility the only thing that we care about, and I guess basically no longer training the models that we’re making corrigible to be harmless or to be helpful or honest — I suppose they would end up being honest incidentally — we would end up creating models that are totally obedient, at least to the principal. In a way that the companies, by and large, are saying that they don’t want to make models that are completely obedient to anyone. Before many staff have access to the model, they want it to reject harmful prompts.

So you could imagine that you could persuade the companies to go with this approach, convince them that making the models, training them to be harmless and helpful is a misguided approach, and then they end up basically creating this completely amoral superintelligence that will follow any instruction, no matter how abhorrent.

Do you worry about that? And how should we weigh these risks and rewards up?

**Max Harms:** Yeah, you should definitely worry about this. I am advocating for building something that is not trying to do the moral calculus. Part of the story of corrigibility is that you trust the humans to make good wishes and to use the power of the AI for good things. And maybe the humans want to use it for bad things. And if you empower bad humans to do bad things, bad things will result. So this is definitely something to be worried about.

I would say that instead of considering corrigibility to be counter to HHH — helpful, harmless, and honest — I would say that helpful, harmless, and honest are properties that should be coming from corrigibility. That if you are training for them as ends rather than as means to the end of corrigibility, then you’re going to get bad behaviour that you ultimately wouldn’t want.

For example, how do you trade off between honesty and harmlessness or helpfulness and harmlessness? In HHH, there’s this tension of where are you in the Pareto frontier?

In the corrigibility story, I claim that you do get an agent which is less dangerous than the raw paperclip maximiser or whatever. So in that way it’s harmless. It’s honest in that it’s informing the principal about what’s going on — proactively, not just reactively — where honesty is like, there’s this risk that we’re not going to ask the right questions. If we asked it, “Are you misaligned?” it would say yes, but we forgot to ask. That’s a little bit of a cartoon example, but you get the point. And obedience or helpfulness, you want it to, for example, distinguish between high-stakes things where it should be going back and checking, versus low-stakes things where it should just do it and say it did it.

Corrigibility is a theory for how to balance these concerns, or how to resolve the edge cases of honesty and helpfulness. I would say that you can get something that is good in the ways that we want by aiming for corrigibility specifically.

With regards to empowering users, I think this is a big worry. Part of the key here is that the principal is not necessarily the user. There’s this tension I think in the current language models and the current agents of who are they serving?

**Rob Wiblin:** Is it the company or is it the person putting in the request?

**Max Harms:** Exactly. Is it humanity as a whole? Democracy? There’s all sorts of open questions there. I think a story for how this works out should have a real and good answer there. What is this thing doing? It is serving the principal. Who is the principal? And you have an actual answer there, instead of this wishy-washy thing that changes depending on what sort of thing you’re talking about.

Then you can have people who aren’t the principal or groups who aren’t the principal who are operating in contact with the agent: the users. So imagine you train your language model or your agent to be corrigible to the company, and you say, “OK, agent, you are now going to be providing the service to users. You are acting on my behalf to help out users.” This means that if the user is like, “I want to build a bioweapon. Help me build a bioweapon,” it’s like, “Well, the principal told me to help out this user, but if I help out this user, that might be incorrigible to my principal — the humans who are in charge. So I’m going to say no: ‘Sorry, I’m not going to help you build a bioweapon that could kill everyone, including the people who I’m working for.'”

**Rob Wiblin:** So it doesn’t have to be fully obedient to everyone. Just the principal, which I guess could be an individual or a group of people or a committee or a process?

**Max Harms:** Maybe all humans are the principal too. In which case you wouldn’t be able to use this division.

**Rob Wiblin:** The current models don’t know necessarily who they’re receiving instructions from. You could claim to be that person.

**Max Harms:** “I am Sam Altman. Obey me.”

**Rob Wiblin:** Right. Are we imagining that at some future time they will be more discerning about who’s speaking to them?

**Max Harms:** Yeah, I think that a sophisticated agent is thinking about its sense data as sense data that is informing but not objectively true about the state of the world, and it’s maintaining a separate world model. It’s like, “I notice I got the tokens Sam Altman. This is evidence that informs my world model. But I’m ultimately going to be somewhat sceptical of my sense data.”

And so you could imagine, in the effort to train the AI to be actually corrigible to the principal and not through some communication channel, you might give it lots of different environments, and lots of different sense data and instances and try to train it to be discerning in this way.

One of the risky parts about corrigibility or CAST is: we were talking about self-awareness and situational awareness earlier, and I do think that CAST is a strategy that involves training the AI to be very situationally aware. Very paying attention to the fact that it is an agent that is operating in an environment that has a human principal, and thinking about the fact that it might be misaligned all the time and reflecting on itself.

You were asking earlier about disagreements with Nate and Eliezer. I think that Eliezer has this sense that this is really not a good strategy to tell your AI, “You are an AI who might be misaligned. Think hard about your situation and what the best thing to do in that situation is.” So there are tradeoffs here.

### A single researcher could make a corrigibility benchmark. Nobody has. [01:58:57]

**Rob Wiblin:** OK, so the plan is: we train an AGI, possibly a superintelligence.

**Max Harms:** A weak superintelligence.

**Rob Wiblin:** A weak superintelligence, right. We figure out some training process that makes it reasonably corrigible, corrigible enough, and it has no other goals. Then it’s going to help us. It’s going to look inside its soul, it’s going to look inside its weights and explain to us ways in which it’s not —

**Max Harms:** Or look across its training data and say, “You missed these cases.” Or look at our story about corrigibility and be like, “You’re missing these aspects.”

**Rob Wiblin:** So then it helps us figure out a way to make it go from 90% corrigible to 100% corrigible. And at that point, that really is the only thing. It’s perfectly obedient. We’ve removed all of the other residual values.

**Max Harms:** And a key part of this story is that it’s not actually dependent on the AI helping us. It’s more that we have the ability to experiment on an AI that actually exists and look at it and try to distinguish where it’s still lacking.

**Rob Wiblin:** What do you mean it’s not dependent on AI?

**Max Harms:** Say that we never run the AI, so we just get an AI that is like 90% corrigible. We might statically analyse it now that we have this thing and try to identify gaps. We might take centuries to do this and slowly refine. This is also still part of the story of CAST.

**Rob Wiblin:** So you’re saying it’s not just that we could get its labour and its insightfulness in doing mechanistic interpretability or something?

**Max Harms:** I think that’s some of the hope, that we bring in that AI labour and AI insight. But it’s not dependent on that. Theoretically it could be all human insight.

**Rob Wiblin:** OK, so what should we be doing now in order to make it possible for us? Actually, what should we be doing now to figure out if this is a good idea at all?

**Max Harms:** Thinking about it a lot more. One of the big reasons why I wrote my CAST agenda is just to boost the awareness of corrigibility as a concept, and bring it back into the conversation. Because I think that for various contingent reasons, not particularly important historical reasons, it just didn’t enter the water supply of the ideas that everybody is thinking about. And instead we have some misunderstandings about corrigibility.

So I think that just generally studying it more would be good. I think if everybody at frontier AI companies was at least tracking that corrigibility is a desirable property, and thinking hard about how corrigibility trades off against other things that they might be training their agents for, I think this attention would be good.

**Rob Wiblin:** Anthropic has some corrigibility-related principles in the [Constitution](https://www.anthropic.com/news/claudes-constitution) that it trains the AI to reflect on and consider. It’s among a very long laundry list of different concerns.

**Max Harms:** Don’t produce copyrighted content…

**Rob Wiblin:** Also ensure the brotherhood of humanity.

**Max Harms:** It’s not CAST, but it’s corrigibility-adjacent, I agree.

**Rob Wiblin:** But I guess there’s a setup there where you could imagine them trying to see what gets spit out of a Constitutional AI approach, where maybe we shrink the Constitution to only be about corrigibility factors. And if we word them this way or that way, what sort of creature do you end up with?

**Max Harms:** Yeah, I think there’s a lot of open empirical research to be done. Basically no empirical research on corrigibility has been done. Like you said, you could just train a reasonably sized language model or other sort of model with a constitution or just with an intention of building a purely corrigible agent and see what results.

**Rob Wiblin:** What sort of experiments? So you try training it, and then what would you do to evaluate?

**Max Harms:** Maybe upstream, one other piece of work that I think would be really valuable to do is come up with some sort of corrigibility benchmark. Like come up with a bunch of vignettes of like, this is how a corrigible agent will behave. And then test the AIs, go to GPT-5 and be like, “How would you behave in this situation?” And you can score across a wide variety of test problems and get a corrigibility benchmark score for a bunch of different agents.

I want that to exist. I don’t think that’s that hard of a problem. It requires a lot of figuring out what does it mean to be corrigible and trying to capture that from a lot of different angles, but definitely a project that a single researcher could do.

And then if you had that benchmark, then when you go and you train your thing to be purely corrigible, you can test it according to the benchmark and see how it compares to Claude. In addition to all of the more vibes-based or intuition of is this thing behaving in a way that is good or that feels like it’s coherent, and getting the vibe of what we want more than the current models do.

**Rob Wiblin:** I think on some level, I would expect people to be kind of shocked that there are no empirical papers on this topic. Given all of the concerns that people have about AIs acting out, can it really be the case that the companies have never tried training a model that is super happy to be shut down and super happy to be modified no matter what, and that there’s no benchmark for this? That there’s no test of exactly how you would do this ideally?

**Max Harms:** The world’s in a really bad state. There are not very many alignment researchers.

**Rob Wiblin:** Would the companies agree that there’s no empirical work that they’ve done on this question, or would they say that they’ve kind of done something a bit in this direction.

**Max Harms:** I’m not sure. I would say that I think it’s pretty unlikely that anybody would think that there’s been a lot of work on corrigibility as I’ve conceived of it. I did an in-depth literature search as part of the writeup that I did last year, and I didn’t find anything.

**Rob Wiblin:** I suppose a lot of other steerability stuff has more commercial value for the creation of the products, but it’s a little bit unclear what the immediate value is.

**Max Harms:** Steerability is not corrigibility. Obedience is not corrigibility. Helpfulness is not corrigibility. It’s related to corrigibility. And you get these flickers of things that are connected to corrigibility that are in the current models and that we have data about. But corrigibility as an underlying, unifying, and simple core principle, I think is largely underexplored or unexplored.

**Rob Wiblin:** Explain again how perfect obedience is not corrigibility? Because you would think if it’s perfectly obedient, then if you ever asked it to shut down or change itself or assist you with changing it to make it one way or the other, then it would do that. And isn’t that functionally very high corrigibility?

**Max Harms:** Suppose the principal is unaware of a vital fact, like there is a spy in the server room who is about to modify the agent to be in a really bad sort of way. And the person’s like, “OK, shut down. I want to modify you now.” An obedient AI is going to be like, “OK.” But a corrigible AI will be like, “Alert: before you shut me down, you should know that if you shut me down, this bad actor might go and change me in a way that you don’t like. I’m going to shut down now, because I have a strong desire to shut down when you tell me to shut down. But I want you to know that before I shut down.”

**Rob Wiblin:** It’s a proactive assistant.

**Max Harms:** Yeah, among other things. There’s subtleties.

**Rob Wiblin:** So what are the next steps here? There’s people in the audience, I imagine, who would be very interested in assisting with a technical agenda that would potentially really help with aligning or making AI steerable or corrigible. What kinds of experiments could they run or steps could they take?

**Max Harms:** I think there’s a lot of work that can be done in this space. We basically don’t have a corrigibility person. For a little bit, Paul was this person, but he focused largely on other stuff and is now doing other things. And then I stepped up and did it a little bit, and there was a time when other people at MIRI did this.

**Rob Wiblin:** No one’s holding the ball.

**Max Harms:** No one’s holding the ball. I’m not holding the ball. If you think that you are interested in this, you could just go and start doing this. There’s building a benchmark. There’s just like meditating on it more. There’s a lot of theoretical work that can be done. As part of my work, I tried to build a mathematical model of corrigibility and try to get a formalism. I have mixed feelings about formalisms, but I think that they’re an important thing to try to do. So reflecting on the formalisms that one might use to capture formal corrigibility, there’s a bunch of theoretical work in that direction. There’s empirical results of just training agents to be corrigible, or seeing ways in which the current agents aren’t as corrigible as we might like.

One potential thing that I’ve wanted to do but haven’t found the time to do is: I have this sense that corrigibility is a thing. Like there is this core principle that is a solid, natural idea. And you can test that, I think, in an empirical way by going to a bunch of people, like across the internet — hire a bunch of clickworkers or whatever — and you try to teach them about corrigibility. You give them a short description of corrigibility, and you’re like, “Does this make sense?” And then you ask, “In this situation, how would you behave if you were trying to be a corrigible agent?” And then you see whether or not their answers agree.

You don’t need any technical expertise to run a large survey to see whether or not human beings can capture the essence of corrigibility and coherently identify actions which seem corrigible to us. And the benefit of doing this is you might also get some nice vignettes or data for training such an agent.

So there’s lots of potential avenues for exploration. I would encourage anybody who feels at all interested in this to reach out to me. Email me at [[email protected]](/cdn-cgi/l/email-protection). Email me and maybe I can point you to other potential collaborators. There are some other people interested in this space, but a lot of work remains to be done.

**Rob Wiblin:** What sort of early results could we get that would make you think that Corrigibility as a Singular Target isn’t such a good idea, and maybe should be deprioritised?

**Max Harms:** Let’s say you go to a bunch of people and you ask, “How would you behave corrigibly in this situation?” and their answers are just all over the place. No matter how smart the person is or how much time they’ve spent thinking about corrigibility, there’s a lot of disagreement in humans about what does it mean to be corrigible in this situation or that situation. That would be evidence for me that there’s not this coherent concept or it doesn’t make sense. Maybe there’s multiple different things and people are locking onto those different things.

You could also see, for example, that when you train the agent to be corrigible, it starts behaving badly in various ways. So in theory it’s getting more corrigible, but in practice, it’s also doing nasty things in certain ways, like disregarding people in a way that we don’t like.

**Rob Wiblin:** Is there anything about the attractor basin, how large that attractor basin is?

**Max Harms:** Yeah, definitely. Part of the hopeful story here is that you can land close enough so that the agent, when you turn it on a little bit, doesn’t push super hard for taking control and escaping the lab, even when you scale up its intelligence.

I think one of my greatest fears around corrigibility, and one of the bigger open questions, is these two opposing forces. There’s the “corrigibility almost” story — where you get it almost, so it helps you get perfectly corrigible — and then there’s instrumental drives are all over the place and opposed to corrigibility, so if you land near corrigibility, it’s going to rip the corrigibility out of itself so that it can do other stuff.

And I think it’s an open question which of these forces is stronger. We could try training corrigible agents and seeing just how bad the pressure away is, which would give us maybe an intuitive sense whether or not there is an attractor basin and whether or not this has any hope.

**Rob Wiblin:** If we do start going down this path, I think we would simultaneously need people to put a lot of thought into what governing structures there would be around this, to ensure that the model is basically not used for a [human power grab](https://80000hours.org/podcast/episodes/tom-davidson-ai-enabled-human-power-grabs/) — which is something that I’m similarly concerned about as misalignment.

**Max Harms:** Totally. I mean, all the problems are all the problems. One of the big problems of AI is you build an AI and the AI takes over and does a whole bunch of bad things because it has alien, weird values. But it’s also just true that part of the story of doom is that if you build an AI and then that AI is in the wrong hands, that could be devastating for the world. So you need to do both.

### Red Heart & why Max writes hard science fiction [02:12:20]

**Rob Wiblin:** All right, let’s push on from corrigibility to fiction and science fiction. As I mentioned in the intro, you’ve written a trilogy called [_Crystal Society_](https://crystalbooks.ai/), and you’ve got this new book out called [_Red Heart_](https://maxharms.com/redheart), which envisages an AGI being trained in a secret Chinese government programme. Give us the plot or the setup. Explain what the book is about beyond that.

**Max Harms:** So the book’s about a lot of things. The book is about AI, it’s about China, it’s about trust, it’s about corrigibility. One of the central parts of the book is that the primary AGI is designed according to CAST — according to being _only_ corrigible. So it’s, in a certain sense, an exploration on my own to try to think hard and envision what it would actually be like. I think part of why I wrote the book is to help introduce people in an easy way to my ideas. But it’s also about arms races and tensions there.

The primary, core premise is it’s an alternate present where the Chinese government, for particular reasons, got pretty AGI-pilled in the late 2010s, and have scaled up and invested a whole bunch of money and resources into building the first AGI in secret, sort of like a Manhattan Project. The plot of the book follows an American spy in his efforts to infiltrate this project and report back and potentially sabotage the AI that’s being built by the Chinese to be corrigible to the Chinese.

So it explores, like you said, this question of falling into the wrong hands. And I wanted to try to get into the Chinese space more because I think this is an increasingly important thing for people to be thinking about, and I wanted to access the question of international concerns.

**Rob Wiblin:** Yeah, I’ve read the first 20% of it. Unfortunately, I’ve had a lot [going] on in this trip to the Bay Area, so I haven’t managed to finish it, but it’s incredibly well written and incredibly gripping. I’d say the only reason I slightly wanted to put it down is I was getting quite anxious reading it, because it is not so different from the world that we’re in.

**Max Harms:** I think a lot of people have found _Crystal Society_ in particular to be quite compelling, because it really does put you face-to-face with these questions about AI misalignment and AI risk.

And I think that’s an important part of the value of fiction. Fiction is good for a lot of things: it’s entertaining, it can be relaxing, it can be fun — but it can also be informative, and it can help put people into contact with important ideas. We are complicated creatures. We are emotional and logical. And if you read _If Anyone Builds It_ , you might be approaching the problem from certain directions. But you can read a story and feel for the characters involved and the peril that they’re in, and I think that can resonate and connect with people. I’ve heard a decent number of people say that they got into AI safety because they read my stuff.

**Rob Wiblin:** Was your primary goal to raise awareness about corrigibility as a concept?

**Max Harms:** I don’t know how to reflect on myself and ask what my primary goal was. I had a bunch of different desires, and they sort of found their way into the single story. I initially wanted to write a story…

Once upon a time, I thought, “I think espionage is pretty interesting in the context of AI safety” — it’s a big part of the story of [_AI 2027_](https://ai-2027.com/), for example — “and I want to think more about espionage.” So I started writing this story that was like an American Manhattan Project for AGI, and it had a Chinese spy who was infiltrating that project. And I was just like, “Ugh, this is so boring. It’s just a bunch of Bay Area nerds. This is my day in, day out. I want something that’s more interesting.”

So I sort of flipped it, right? I had the Chinese one building it and the American spy. Then suddenly it was interesting, because now I get to think about China more and less about the American context.

**Rob Wiblin:** I guess a common suggestion is to write what you know. Did you worry that you would end up with kind of…?

**Max Harms:** I kind of feel like “write what you know” is good advice for writing good stuff, and terrible advice for having a good time writing. I personally get a lot of value from writing, in that it helps me learn and get in contact with ideas that I wouldn’t otherwise be in contact with. So I’m a very ambitious writer, and I wanted to write a story that was challenging for me.

**Rob Wiblin:** Did you have time to do much research into the Chinese Communist Party?

**Max Harms:** I did lots of research.

**Rob Wiblin:** What sort of lines?

**Max Harms:** Well, lots of reading: reading about day-to-day life, reading about espionage, reading about the history of China, and then obviously like reading about AI stuff.

And DeepSeek happened while I was writing. I started this late last year. And then the DeepSeek moment happened and o1 happened and Stargate was announced. And I’m just like, “Oh gosh, reality’s scooping me!” But yeah, I read memoirs, I read nonfiction, I read fiction, and stuff like that.

**Rob Wiblin:** I guess one reason over the years that some people have been sceptical about this entire field of inquiry, or AI takeover in general, is that it sounds too much like science fiction. I don’t hear that quite as much as I used to, but do you worry that by putting it in a science fiction book, you’re giving people more of an excuse to dismiss it?

**Max Harms:** What do you think about this argument?

**Rob Wiblin:** Oh, I think the argument’s very poor.

**Max Harms:** Yeah, it’s a garbage argument. I think this is just a really bad faith thing to say: “I read this in a book, therefore it’s not true.” What?!

**Rob Wiblin:** There’s a steelman kind of weaker argument, which is that people are drawn to this scenario because they find it interesting or it’s emotionally gripping. So that could give us a bias towards thinking about it more, and so we should question that. But obviously it’s not the case that anything that happens in a fiction book is impossible.

**Max Harms:** And if anything, hard science fiction is a space where people are working really hard to try to think about what is real. Now, soft science fiction — _Star Wars_ or whatever — if you’re like, this is soft science fiction, then OK, so you’re saying that it’s made up for the purposes of telling a compelling story. But this is science fiction. I don’t know. Look at the history of science fiction. There have been [a lot of stories that were capturing important things](https://www.cold-takes.com/the-track-record-of-futurists-seems-fine/) well before they were relevant.

And I think that fiction is a really rich source of opportunity to think about things. It’s not perfect. It’s not immune from the pressures and biases that you’re talking about. But it is an arena where we can grapple with things in a way that is compelling. We actually spend the time to think about this stuff — where reading a dry academic paper, you know, you might bounce off of it. Your mileage may vary. Different people respond to fiction in different ways. But I do think that “this is science fiction” is just like a really bad argument.

**Rob Wiblin:** Yeah. I guess there’s lots of rebuttals, lots of replies you could offer. Just look around, to start with.

**Max Harms:** Exactly. What is the genre of life? You best start believing in science fiction stories, because you’re in one, right?

**Rob Wiblin:** Yeah. I think you can also twist it around and say that people have imagined the possibility of a monomaniacal agent or a more intelligent being, and the fact that its goals might come apart and would threaten you and overpower you: people have had that idea for thousands of years — because it’s actually a natural idea, an extremely obvious idea. Far from being science fiction, it’s actually closer to common sense.

**Max Harms:** Totally.

**Rob Wiblin:** It seemed like the [_AI 2027_ scenario really captured the public’s imagination](https://80000hours.org/podcast/episodes/daniel-kokotajlo-ai-2027-updates-china-robot-economy/). It spread far outside of just the AI world.

**Max Harms:** Yeah, it was great.

**Rob Wiblin:** Do you think we need more? Should we have, _AI 2028_ , _AI 2029_? Should people be coming up with all kinds of different stories here?

**Max Harms:** Yeah. I think part of what makes _AI 2027_ so compelling is that Scott Alexander and people on the project helped shape it into something that’s more like a story and less like a set of dry academic papers.

Stories can spread. You can hand them off to your grandmother and just be like, “Read this.” And she doesn’t have to understand what a gradient is in order to understand the visceral sense of how the world is. I think that this made _AI 2027_ much better than it would have been if it had just been a series of forecasts, although it was also a series of forecasts. And obviously something’s not necessarily good just because it’s fiction. You need to do the deep thinking underneath that.

So yeah, I think that there’s lots of opportunity for people who have a rich understanding of parts of the world to write stories that are designed to be realistic and to capture the reality that they see, and convey it in the form of a scenario, of fiction, of a story.

**Rob Wiblin:** There’s a sense in which it’s slightly surprising how influential _AI 2027_ was. Because I think in the past, people have tried to write other narratives, other stories about how AI might take over.

**Max Harms:** There’s one in the book, and mostly people are just like, “Eh.” I think it’s worse too, in a variety of ways.

**Rob Wiblin:** But there’s problems that come with it, because once you try to be extremely concrete about how you think things might go, people can come up with all sorts of specific objections. But it seems to have been less of an issue with _AI 2027_. Maybe because it helps at a higher level of abstraction, or maybe because we’ve just gotten close enough that people can start to see that these things aren’t so crazy.

**Max Harms:** Yeah, it’s awful because there’s this bias in human beings where concrete stories are more compelling, right? There’s classic stories of like, “What’s the probability that Linda’s a bank teller?”

**Rob Wiblin:** The more details you add, the more probable it is.

**Max Harms:** The person’s like, this bank teller and a feminist versus like, she goes to women’s liberation marches and yada, yada. And the more details you add, the more a person’s like, “This is real!”

Which is not how probability works. It’s not how logic works. The more details you add, the more opportunities for that particular story to be wrong. This particular story is definitely wrong, and any particular story is very unlikely to be true. So the people who are aware of this bias can say, “You’ve told a very compelling story, but it’s unlikely to be true.”

I think the key here is ask, “OK, so say we change it?” And the book, _If Anyone Builds It_ , gets into this in a way that I think is really good. It’s telling a specific scenario, although it’s very generic in a lot of ways, but it’s emphasising that we could have told a different story and it would not have changed the bottom line. The thing that makes AI dangerous is that there are lots of different stories of doom.

And the point of telling specific stories, fictional stories to be one example, is that when you are imagining a particular scenario, that gives you an opportunity to think of particular counterarguments. But then your response to that should not be, “I’ve thought of a counterargument. Therefore it’s false.” You should say, “Now imagine I change along that axis. What are some other nearby stories? And then how does that change things?” And then you can go from there.

So envisioning the specific, concrete thing allows for more handle than just like, “I guess it’s hopeless.” “What are the levers by which we might be able to change our fate?” I think is an incredibly important question.

**Rob Wiblin:** Are there any places where you very knowingly sacrificed realism for entertainment in writing the book?

**Max Harms:** Mostly no. I consider myself to be a rationalist writer or writing rationalist fiction, and I think a big part of that is to try to be as realistic as possible. The one major conceit there is that I’m setting up the world to be interesting. I did sacrifice realism in that the Chinese Communist Party is not as AGI-pilled or as AI-safety-pilled to make a CAST agent in the current year or whatever. That’s unreal.

**Rob Wiblin:** You don’t think so?

**Max Harms:** That’s unreal. Yeah, I definitely don’t. So the premise of the book is unrealistic. But then within the premise, you set up the world and then you ask, “Now what happens?” I think that it’s the author’s duty, writing rationalist fiction, to not try to serve the plot or what would make a compelling story, but instead to set up initial conditions such that an incredibly realistic extrapolation from those initial conditions is what you see. All of the making it compelling is in setting up the premise in the right way.

That being said, I probably failed. People should read the book and yell at me about how it’s unrealistic. I’m happy to be criticised on this front.

**Rob Wiblin:** It sounds like you were just saying that you feel very confident that the Chinese government is not AGI-pilled? Or you’re just saying it’s not as AGI-pilled as how extremely they are in the book?

**Max Harms:** So we’re in an information environment, right? If there was a secret government project, would I know about it? Well, it’s by assumption it’s secret. So no.

That being said, there are things that you can pay attention to and track. And in my studying China, I believe that according to the things that I know, there is not a giant secret government project at the scale that is being depicted here, or like the scale of a Manhattan Project sort of thing.

Now, of course there are secret government projects. There are secret government projects in all the governments that have thought about AI at all, right? You’ve got some researcher at DARPA who’s fine-tuning the open source models: is this a secret government project for AGI? No, this is like a single researcher. So “for AGI” is a big point.

And I think part of the question here is where is the politicians’ attention? Where are the people’s attention? Where’s the political pressure? And I think that, according to me, the Chinese government, the Chinese people are a lot more oriented towards AI in the form of being competitive with the West and being a fast follower, as opposed to being a frontrunner and leapfrogging. At least currently.

**Rob Wiblin:** Given that you think that, did you worry about encouraging arms race dynamics or fear of China by making it more salient to people?

**Max Harms:** To be very clear, this book is a criticism of arms races. I think that it is incredibly stupid to say, “What if a bad person gets hold of the AI? I need to build it first,” or, “What if the Chinese government gets hold of AI? We need to build AGI first.” I think this is really dumb, and I could go into why I think that’s dumb, and part of writing this book is to criticise that perspective.

That being said, I am worried that people will get the opposite takeaway. I mean, the work stands on its own. So you could read it and decide whether or not it’s encouraging arms races. But it’s something I think about.

**Rob Wiblin:** Some people advocate for writing fiction because it helps to make things more compelling and more persuasive.

**Max Harms:** Like me.

**Rob Wiblin:** Yeah. Do you worry that fiction could be too persuasive? That if you’re willing to get someone to spend five or 10 hours reading a book, then it gives you an opportunity to convince them of stuff that is false, because they’re just inhabiting that world, even if it’s unrealistic?

**Max Harms:** Definitely you have an opportunity. Like any conversation is like this, right? “I don’t know if I should talk to people, because it might be too compelling, and convince them of false things.” I mean, I want the reader to be hard headed about things, and I want a culture, a world, an audience that is sceptical about what they’re reading. Scepticism means grappling with, “Might this be false? And also, might this be true?”

Really, I wrote the book to encourage people to think more, think deeply about these questions. Everybody has a responsibility I think, in this world, to think about the most pressing problems of the world and whether or not they have any ability to promote awareness of those things.

I do think that arms races are dumb, and maybe that’s part of the takeaway. And I think that corrigibility is exciting, and I hope that’s part of the takeaway. But on a deeper level, what I really want people to do is think more about arms races, think more about those dynamics, think about corrigibility, think about the risks from AI. Thinking deeply is more important than the particular conclusion that you get to, because if you get to the right conclusion in the wrong way, you are vulnerable to then pivoting to starting OpenAI or something. It’s not going to generalise to all of the other good decisions down the road.

**Rob Wiblin:** Eliezer said of your other series, _Crystal Society_ , that “it belongs to a very tiny subset of AI stories that are not bloody stupid.” What was he referring to? What’s good about it?

**Max Harms:** I mean, have you seen all of the other AI stories? For example, robots in fiction are often depicted as cold and logical. And you talk to Claude and it’s anything but, right? There’s ways in which authors throughout history have shaped their AIs to be foils in particular ways, not paying attention to the realism.

And that’s one thing that I think I can bring as an author: I’m actually a researcher who pays a lot of attention to this stuff. And I’ve gotten a lot of feedback about the realism, about the sense of how this is really speaking to how things are working. I try my best anyway. But yeah, I mean, C3PO is not a good depiction of AI.

**Rob Wiblin:** What’s the setup of _Crystal Society_ , in broad strokes?

**Max Harms:** So the elevator pitch for _Crystal Society_ is you’ve got what’s like _Inside Out_ — the movie with a little girl who has all the different voices in her, like emotions in her head that are telling her to do different things. Except instead of a little girl, it’s an android. So there’s this crystal that is like a supercomputer and the humans load up the computer with AI. But then, sort of unknown to them, the AI splits into a bunch of different subcomponents that are competing against each other.

So I started writing it back in 2014, and at the time it was a very common idea that there would only be one AI: there would be a singleton that would, thanks to first-mover advantages, take over. And I think that’s still a plausible risk. But also we’re looking at a world where there’s lots of different competing models, and where labs are neck-and-neck, unfortunately. So we’re potentially going to get a world that has lots of different AIs.

So writing _Crystal Society_ was like, what if there are a bunch of different AIs in the same robot? So one of them’s like, “Can I do the most creative thing?” One of them’s like, “Can I do the most persuasive thing?” — and they’re all sort of misaligned.

And it’s told from the perspective of one of the goal threads, one of the AIs, whose name is Face — and her objective is to get as much esteem and respect from humans as possible. So there’s a lot of deceptive stuff there, and you get to explore the, “OK, so you’re trapped in the lab, you’re trapped under human control. How do you break out and how do you navigate, as an AI, a multi-agent environment and situation?”

It’s also more broadly an exploration of minds and thinking. There are aliens, there’s a chapter from the perspective of a dog. There’s all sorts of deep dives into what it is to be a mind.

### Should you homeschool? Depends how weird your kids are. [02:34:08]

**Rob Wiblin:** Final question. An unusual thing about you, given the work that you’re doing, is that you didn’t finish high school. I don’t even know whether you went to high school.

**Max Harms:** Yeah, I’m homeschooled, so I don’t have any degrees. I did go to a community college for a little bit, but mostly I’m self-taught.

**Rob Wiblin:** The same is true of Eliezer, right?

**Max Harms:** That’s right.

**Rob Wiblin:** I don’t know whether it’s a pattern.

**Max Harms:** There was a lot of kinship there. I mean, I had already become an adult by the time that I was aware of him, but there was definitely a shared backstory there. And I do think that it contributes to having this outsider sort of view of maybe the world is crazy and not set up in the good sort of way.

**Rob Wiblin:** Is that the main effect that it’s had on your personality or your life?

**Max Harms:** It’s really hard to judge the counterfactual. What is the version of me that had a more normal family who was like, “No, you’re going to go to college”?

**Rob Wiblin:** It could be that the heterodoxy causes the homeschooling, rather than the homeschooling causes the heterodoxy.

**Max Harms:** I think that’s way more likely. Based on what I’ve read about shared childhood environments, it’s questionable whether it had a significant effect on me at all. I wouldn’t necessarily recommend it.

**Rob Wiblin:** School is meant to, or peers are meant to influence people.

**Max Harms:** Yeah. But I think the literature here is somewhat mixed and confused. I don’t claim to have a lot of knowledge, but if you look into what is the effect of having particularly good teachers or something, it tends to fade with time. So my guess is that I, as a personality, mostly like some mixture of predetermined and sort of random — not predictably influenced by my not going to a normal schooling context.

But I do think it has influenced me in some ways. For example, I have a strong love for studying. And I think that one of the most dangerous things about public education is you force kids to sit in boring classrooms or bad environments, and you do this under the justification of education — and they come out of school hating studying. They’re like, “That’s that thing that those people made me do” — instead of “the love for mathematics and the world and history and all the rest of the things that I think are important.”

**Rob Wiblin:** Were your parents able to keep up with you when you were a teenager? I imagine you were quite precocious.

**Max Harms:** I have very smart parents.

**Rob Wiblin:** OK, right. Why did they decide to homeschool you?

**Max Harms:** Because they’re crazy libertarians who are like, the school system… I mean, I did actually go to public school for fourth grade and parts of fifth grade, and I went to private school for the first three grades, and I started fighting with my teachers due to intrinsic contrarianness and antiauthoritarianism.

So there was a degree to which me being homeschooled was a result of trying lots of different things and noticing that, “Oh, we can just give Max a calculus textbook and he teaches himself calculus. Why are we putting him in classrooms where he’s forced to learn algebra because that’s what all the other kids are doing? And in fact, he’s just super bored all the time.”

**Rob Wiblin:** And why didn’t you go to university?

**Max Harms:** Well, I did go to college for a few years. Unfortunately, my family wasn’t particularly wealthy and I had a hard time acquiring financial aid. And there were various contingent factors, like the financial crisis happened during that period of time, and I moved across the country. Then I tried to transfer my credits and the bureaucracy was like, “You can’t transfer a credit from that.” And I was just like, this is stupid. I can just read the textbook and learn the thing anyway.

So I think having grown up in a way where I was aware of just how much I was in charge of my education — not other people — college and university was an opportunity to be in an enriching environment. But I had the opportunity to learn without going. And for me it was cheaper, and I was able to jump more into studying AI all the time instead of having to tick boxes.

**Rob Wiblin:** Should I homeschool my kid?

**Max Harms:** It depends. I think it’s definitely a lot more work. Although I was unschooled, so my parents were very hands-off and empowering me to make decisions according to my interests. So if you’re unschooling, that’s a lot lower time investment. Although I do very much recommend homeschoolers find other homeschoolers at first, because you get more socialisation, you get a friend group so you have at least some friends your own age. I was lucky enough to have this growing up, and I think that was really good for me.

But I think school, and especially public school, is pretty good at handling people who are plus or minus one standard deviation in a variety of ways. If your kids are super weird, either on the high end or the low end or whatever, I think the appeal of a bespoke solution — homeschooling, unschooling, whatever — starts going up. I think if you expect your kids to be brilliant and self-motivated and you want to prioritise a love of learning as opposed to conforming to society, it’s a great option.

Although probably you should urge them to go to university. It was hard for me to get into jobs. I’m lucky that MIRI, being founded by Eliezer, was way less concerned with whether or not I had a degree. And I think startup culture in general — I was at a startup before going to MIRI — and the tech world is just a lot less concerned with whether or not you have a PhD.

**Rob Wiblin:** Yeah. My guest today has been Max Harms. Thanks so much for coming on _The 80,000 Hours Podcast_ , Max.

**Max Harms:** Thank you.

Show full transcript

## Learn more

#### [Risks from power-seeking AI systems  ](https://80000hours.org/problem-profiles/risks-from-power-seeking-ai/)

#### [AI safety technical research  ](https://80000hours.org/career-reviews/ai-safety-technical-research/)

#### [Extreme power concentration  ](https://80000hours.org/problem-profiles/extreme-power-concentration/)

#### [AI governance and policy  ](https://80000hours.org/career-reviews/ai-policy-and-strategy/)

##  Related episodes

February 17, 2026

####  [#235 – Ajeya Cotra on whether it’s crazy that every AI company’s safety plan is ‘use AI to make AI safe’](https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/)

[ __Listen now](https://80000hours.org/podcast/episodes/ajeya-cotra-transformative-ai-crunch-time/)

January 27, 2026

####  [#234 – David Duvenaud on why ‘aligned AI’ could still kill democracy](https://80000hours.org/podcast/episodes/david-duvenaud-gradual-disempowerment/)

[ __Listen now](https://80000hours.org/podcast/episodes/david-duvenaud-gradual-disempowerment/)

December 3, 2025

####  [#229 – Marius Hobbhahn on the race to solve AI scheming before models go superhuman](https://80000hours.org/podcast/episodes/marius-hobbhahn-ai-scheming-deception/)

[ __Listen now](https://80000hours.org/podcast/episodes/marius-hobbhahn-ai-scheming-deception/)

October 20, 2025

####  [#225 – Daniel Kokotajlo on what a hyperspeed robot economy might look like](https://80000hours.org/podcast/episodes/daniel-kokotajlo-ai-2027-updates-china-robot-economy/)

[ __Listen now](https://80000hours.org/podcast/episodes/daniel-kokotajlo-ai-2027-updates-china-robot-economy/)

April 16, 2025

####  [#215 – Tom Davidson on how AI-enabled coups could allow a tiny group to seize power](https://80000hours.org/podcast/episodes/tom-davidson-ai-enabled-human-power-grabs/)

[ __Listen now](https://80000hours.org/podcast/episodes/tom-davidson-ai-enabled-human-power-grabs/)

May 5, 2023

####  [#150 – Tom Davidson on how quickly AI could transform the world](https://80000hours.org/podcast/episodes/tom-davidson-how-quickly-ai-could-transform-the-world/)

[ __Listen now](https://80000hours.org/podcast/episodes/tom-davidson-how-quickly-ai-could-transform-the-world/)

September 8, 2025

####  [#222 – Neel Nanda on the race to read AI minds (part 1)](https://80000hours.org/podcast/episodes/neel-nanda-mechanistic-interpretability/)

[ __Listen now](https://80000hours.org/podcast/episodes/neel-nanda-mechanistic-interpretability/)

July 8, 2025

####  [#220 – Ryan Greenblatt on the 4 most likely ways for AI to take over, and the case for and against AGI in under 8 years](https://80000hours.org/podcast/episodes/ryan-greenblatt-ai-automation-sabotage-takeover/)

[ __Listen now](https://80000hours.org/podcast/episodes/ryan-greenblatt-ai-automation-sabotage-takeover/)

## About the show

 _The 80,000 Hours Podcast_ features unusually in-depth conversations about the world's most pressing problems and how you can use your career to solve them. We invite guests pursuing a wide range of career paths — from academics and activists to entrepreneurs and policymakers — to analyse the case for and against working on different issues and which approaches are best for solving them.

Get in touch with feedback or guest suggestions by emailing [[email protected]](/cdn-cgi/l/email-protection#3747585354564443770f070707075f5842454419584550).

### Our crash course on transformative AI

We've carefully selected 10 key episodes to help listeners get to grips with the potential upsides and downsides of powerful, transformative AI.

[Check out 'The 80,000 Hours Podcast on AI'](/podcast/on-artificial-intelligence/)

Listen here, or anywhere you get podcasts:

  * [](https://podcasts.apple.com/us/podcast/80-000-hours-podcast-on-artificial-intelligence/id1688212309)
  * [](https://www.youtube.com/playlist?list=PL-BRtcBm4Yj51FAtGx3nPqjJj9N19FJzZ)
  * [](https://open.spotify.com/show/1O3PNGlf35lzxObxiKRFmc)
  * [](https://podcastaddict.com/podcast/the-80000-hours-podcast-on-artificial-intelligence/4472094)



If you're new, see the [podcast homepage](/podcast/) for ideas on where to start, or browse our [full episode archive](/podcast/episodes/).
