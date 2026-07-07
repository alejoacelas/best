---
title: "Brian Christian on the alignment problem | 80,000 Hours"
url: http://web.archive.org/web/20260312045155/https://80000hours.org/podcast/episodes/brian-christian-the-alignment-problem/
fetched: 2026-07-07
via: html2text-wholebody
topic: "linked"
note: "80k podcast, Brian Christian on the alignment problem (AI safety)"
---

## On this page:

  * Introduction
  * 1 Highlights
  * 2 Articles, books, and other media discussed in the show
  * 3 Transcript
    * 3.1 Rob's intro [00:00:00]
    * 3.2 The interview begins [00:02:30]
    * 3.3 The Alignment Problem [00:13:31]
    * 3.4 Agency [00:18:56]
    * 3.5 Shaping [00:34:24]
    * 3.6 Curiosity [00:41:48]
    * 3.7 Imitation [01:01:13]
    * 3.8 Inference [01:20:19]
    * 3.9 Uncertainty [01:36:05]
    * 3.10 Brian's personal opinions and impressions [01:54:05]
    * 3.11 Deception [02:13:50]
    * 3.12 Brian's interviewees [02:19:45]
    * 3.13 Developments since Brian finished the book [02:34:12]
    * 3.14 Careers [02:39:20]
    * 3.15 AI terminology 101 [02:41:59]
    * 3.16 The effective altruism and AI safety communities [02:48:57]
    * 3.17 Rob's outro [02:54:45]
  * 4 Learn more
  * 5 Related episodes



Boston Dynamics robots dance to the toe-tapping hit 'Do You Love Me?' in December 2020.

Read transcript

See all episodes

  *   *   *   * 


Brian Christian is a bestselling author with a particular knack for accurately communicating difficult or technical ideas from both mathematics and computer science.

Listeners loved our episode about his book _Algorithms to Live By_ — so when the team read his new book, _The Alignment Problem_, and found it to be an insightful and comprehensive review of the state of the research into making advanced AI useful and reliably safe, getting him back on the show was a no-brainer.

Brian has so much of substance to say this episode will likely be of interest to people who know a lot about AI as well as those who know a little, and of interest to people who are nervous about where AI is going as well as those who aren’t nervous at all.

Here’s a tease of 10 Hollywood-worthy stories from the episode:

  * **The Riddle of Dopamine** : The development of reinforcement learning solves a long-standing mystery of how humans are able to learn from their experience.
  * **ALVINN** : A student teaches a military vehicle to drive between Pittsburgh and Lake Erie, without intervention, in the early nineties, using a computer with a tenth the processing capacity of an Apple Watch.
  * **Couch Potato** : An agent trained to be curious is stopped in its quest to navigate a maze by a paralysing TV screen.
  * **Pitts & McCulloch**: A homeless teenager and his foster father figure invent the idea of the neural net.
  * **Tree Senility** : Agents become so good at living in trees to escape predators that they forget how to leave, starve, and die.
  * **The Danish Bicycle** : A reinforcement learning agent figures out that it can better achieve its goal by riding in circles as quickly as possible than reaching its purported destination.
  * **Montezuma’s Revenge** : By 2015 a reinforcement learner can play 60 different Atari games — the majority impossibly well — but can’t score a single point on one game humans find tediously simple.
  * **Curious Pong** : Two novelty-seeking agents, forced to play Pong against one another, create increasingly extreme rallies.
  * **AlphaGo Zero** : A computer program becomes superhuman at Chess and Go in under a day by attempting to imitate itself.
  * **Robot Gymnasts** : Over the course of an hour, humans teach robots to do perfect backflips just by telling them which of 2 random actions look more like a backflip.



We also cover:

  * How reinforcement learning actually works, and some of its key achievements and failures
  * How a lack of curiosity can cause AIs to fail to be able to do basic things
  * The pitfalls of getting AI to imitate how we ourselves behave
  * The benefits of getting AI to infer what we must be trying to achieve
  * Why it’s good for agents to be uncertain about what they’re doing
  * Why Brian isn’t that worried about explicit deception
  * The interviewees Brian most agrees with, and most disagrees with
  * Developments since Brian finished the manuscript
  * The effective altruism and AI safety communities
  * And much more



**Get this episode by subscribing to our podcast on the world’s most pressing problems and how to solve them: Type 80,000 Hours into your podcasting app. Or read the transcript below.**

_Producer: Keiran Harris_  
_Audio mastering: Ben Cordell_  
_Transcriptions: Sofia Davis-Fogel_

##  Highlights

### Reinforcement learning

> **Brian Christian:** There’s an idea called ‘temporal difference learning,’ which says rather than waiting until you actually get the reward, you can learn from your own estimate changing. For example, if I predict on Monday that I think there’s going to be an 80% chance of rain on Friday, and then on Tuesday I think there’s only going to be a 60% chance of rain on Friday, the idea of temporal difference learning is that you learn from that delta in your guess. You don’t have to actually wait until Friday to see what happens. You can already learn something by the fact that your later estimate is probably more accurate.
> 
> It’s the same thing in a chess game, if you make a move and then your opponent replies and then you think, oh crap, I’m probably going to lose now, you don’t have to wait until you actually lose. Your opponent may make an even worse blunder and you ultimately win, but you can learn something by the change in your prediction. That’s an example of some of the theoretical stuff, some of the foundational stuff. But in terms of what we’ve actually been able to do with it, I mean, reinforcement learning in its modern incarnation is behind everything from AlphaGo to the systems that play Atari games, to robotic self-driving cars.

### Shaping

> **Brian Christian:** I think part of the reminder to people who work on reinforcement learning in more conventional settings is that you want to think about not only the ultimate policy that this agent develops at the end, but what is the actual trajectory of them learning that. Often in research settings, we just kind of throw away everything that the agent did until they became maximally expert. But in the real world, kids exist. They share the world with us and they’re still figuring things out, but they can make real mistakes. They can hurt themselves, they can hurt others, et cetera. So thinking about the interaction between the reward and not just the final behaviour that comes out of it, but the actual, entire learning trajectory.

### Knowledge-seeking agents

> **Brian Christian:** If you had an ostensible basketball-playing agent that you rewarded for getting a high score, a reasonably intelligent basketball agent would learn to get good at basketball, but a superintelligent basketball playing agent would learn that the score is just some electrical current flowing through the scoreboard, and so it would learn to like re-solder its scoreboard and just make it say ‘9,999,’ or whatever. And so there were a lot of ways in which an agent could sort of deceive itself or optimise for some proxy that wasn’t the real thing that the designers intended. And in almost every case, they found it hard to imagine that the agent would avoid one of these kinds of degenerate scenarios.
> 
> But the one case where things seemed to go according to plan was the idea of what they called a knowledge-seeking agent. This is the idea of an agent motivated to kind of learn as much about the universe as possible. The beautiful thing about the knowledge-seeking agent is that it can’t self deceive. Because if it manipulates its own inputs in any way, well, it’s just cutting off its access to the real world, and that’s where all the surprise and information comes from. So the idea is that the knowledge-seeking agent might be uniquely immune to forms of self-deception, it might be immune to the sort of escapism or retreating into virtual fantasy that other types of agents might have. Now, it doesn’t necessarily mean that it would be safe to build a superintelligent knowledge-seeking agent. “What’s in the core of the earth? Let’s find out.” Or “Let’s build the world’s largest telescope by harvesting the entire solar system.” So it’s not necessarily safe per se, but it conforms to this idea of wanting to keep one’s eyes open. Not wanting to self deceive, not wanting to pull this escapist veil over one’s eyes.

### Inverse reinforcement learning

> **Brian Christian:** If you attempt to do a physical action — say you’re reaching for a clothes pin, but it’s out of reach, or you’re trying to move through a doorway, but it’s too narrow, or you’re trying to put something away, but you don’t have a free hand to open the cabinet, or whatever — children as young as, I want to say, 18 months, can figure out what you’re trying to do based on your behaviour and will spontaneously walk over and help you. They’ll pick the item up off the floor and hand it to you. They’ll open the cabinet door for you. And I think this is very remarkable because this capacity develops multiple years before theory of mind.
> 
> So a child can’t even understand that you’re sensorily perceiving something that’s different to what it’s perceiving. It doesn’t know that you believe things that are different to what it believes. But it can still figure out that you want something, and it can try to help you. So I think that’s very remarkable. It’s a very deeply rooted capacity. So this is another one of these areas where we’re trying to do something like that to get human normativity into machines.
> 
> This is broadly known as inverse reinforcement learning. The reason it’s inverse is that reinforcement learning is about, given some reward, some scheme for assigning points in an environment, how do you develop a behaviour to maximise those points? Inverse reinforcement learning goes the other way. It says, given some behaviour that you’re observing — which is presumably maximising some points — what are the points that it’s maximising?

### Inverse reward design

> **Brian Christian:** The basic idea here is that even in a situation where you explicitly give the system a reward function that says “Doing this is worth 100 points, doing this is worth -5 points, have at it,” even in that case, the system should still take that reward function as mere _evidence_ about what you really want, rather than as the word from on high chiseled into stone tablets of what it should really do.
> 
> So there should be some kind of inferential process of saying, okay, this is the set of scenarios that the designer of the system had in mind when they created this reward function, but here’s a set of scenarios that are outside of that distribution in which this reward function might do some weird stuff, or there might be some kind of implicit ambiguity that wasn’t important to resolve in this one set of environments, but now we really need to get clear on what exactly you want me to do. So I wouldn’t be surprised to see something like that end up getting baked into models of the future. Even when presented with an explicit kind of operational objective, we’ll still say to you, “Now wait a minute, just to be clear, here’s a situation, I’m not sure what to do, let’s go back to the drawing board for a second.”
> 
> And this can get surprisingly delicate, because the system has to model your, as it were, irrationality. So there may be cases where the system overrides you for your own good and that’s the right thing to do. So one example would be you accidentally bump the autopilot disengage button with your elbow when you’re reaching to get a drink out of the cup holder. It’s probably good that the car has some model of, okay, you’re not holding the steering wheel, so I’m pretty sure that this is not really what you want me to do. I think that’s interesting because a lot of the pre-existing horror stories that we have about AGI have that Kubrick aspect of, “Open the pod bay doors, HAL,” “I’m sorry, I can’t do that,” — that sort of disobedience. But in this case you bump the autopilot disengage, and not disengaging probably is correct. So there’s a bit of a tightrope act to be done in terms of figuring out when the AI model of your preferences diverges from your behaviour, how to adjudicate that. It’s not totally simple.

### Why Brian aligns so closely with Dario Amodei

> **Brian Christian:** When I started working on this book, I had this hunch that the technical AI safety agenda and the sort of fairness/accountability/transparency agenda were really part of the same project. That it’s this question of, we want to make our ML systems do what we want. That affects the six-parameter linear classifiers that do parole recommendations, and that also affects the 100 billion-parameter language models, but it’s kind of the same project. That view was not widely held at the time. In fact, it was pretty polarising, I would say. About half the people that I talked to agreed and half disagreed. So Dario was one person where, when I kind of floated that hypothesis very early on was like, “Yeah, it’s underappreciated that even at a technical level, these are really intimately related problems.”
> 
> I think that view has also aged well, not to be too immodest about it. But I think more people have come to think that than have gone the other way. And also, I think his Concrete Problems paper showing that — again, this is very early seminal stuff — but showing that what people were worried about who were thinking more abstractly about AI safety, that this could all be cashed out in the language of actual ML problems that were essentially shovel-ready for the ML community. We can work on robustness to distributional shift. We can work on transparency and explainability. That was an intuition that I also shared. And I think there’s also… Within the community opinions differ on whether AGI is coming by way of the standard kind of deep learning ML regime, or if there’s going to be some paradigm shift. And I think of him and others, obviously, as part of this camp that’s saying, “No, I think what’s coming is coming in familiar terms. It’s not going to be some unimaginable other thing.”

Expand highlights

## Articles, books, and other media discussed in the show

**Brian’s books**

  * Brian’s most recent book _The Alignment Problem_
  * Brian’s first book _The Most Human Human_
  * Brian’s second book _Algorithms to Live By_



**Brian in the media**

  * Brian’s 2018 80,000 Hours Podcast appearance, episode 48
  * The Samantha Test, in _The New Yorker_
  * A Barrage of Turing Tests: Daily Life in the 21st Century  
in _The Atlantic_
  * Mind vs. Machine in _The Atlantic_
  * Brian Christian on ‘The Most Human Human’ in _The Paris Review_
  * Brian on _The Daily Show_



**Books by other authors**

  *  _Superintelligence_ by Nick Bostrom
  *  _Weapons of Math Destruction_ by Cathy O’Neil
  *  _The Secret of our Success_ by Joseph Heinrich



**Papers**

  * Concrete Problems in AI Safety by Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman, and Dan Mané
  * Is power-seeking AI an existential risk? by Joseph Carlsmith (also available as an audio narration)
  * Interactions Between Learning and Evolution by David Ackley and Michael Littman
  * Human-level control through deep reinforcement learning by Volodymyr Mnih et al.
  * Delusion, Survival, and Intelligent Agents by Mark Ring and Laurent Orseau
  * A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning  
by Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell
  * Apprenticeship Learning via Inverse Reinforcement Learning  
by Pieter Abbeel and Andrew Y. Ng
  * Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning  
by Yarin Gal and Zoubin Ghahramani
  * Inverse Reward Design by Dylan Hadfield-Menell, Smitha Milli, Pieter Abbeel, Stuart Russell, and Anca Dragan
  * Universal Knowledge-Seeking Agents for Stochastic Environments by Laurent Orseau, Tor Lattimore, and Marcus Hutter



**Other links**

  * Machine Bias: Risk Assessments in Criminal Sentencing, in _ProPublica_
  * “Open the pod bay doors, HAL,” “I’m sorry, I can’t do that,” from _2001: A Space Odyssey_
  * Video of an agent getting stuck in front of a TV screen



## Transcript

Table of Contents

  * 1 Rob’s intro [00:00:00]
  * 2 The interview begins [00:02:30]
  * 3 The Alignment Problem [00:13:31]
  * 4 Agency [00:18:56]
  * 5 Shaping [00:34:24]
  * 6 Curiosity [00:41:48]
  * 7 Imitation [01:01:13]
  * 8 Inference [01:20:19]
  * 9 Uncertainty [01:36:05]
  * 10 Brian’s personal opinions and impressions [01:54:05]
  * 11 Deception [02:13:50]
  * 12 Brian’s interviewees [02:19:45]
  * 13 Developments since Brian finished the book [02:34:12]
  * 14 Careers [02:39:20]
  * 15 AI terminology 101 [02:41:59]
  * 16 The effective altruism and AI safety communities [02:48:57]
  * 17 Rob’s outro [02:54:45]



### Rob’s intro [00:00:00]

**Robert Wiblin:** Hi listeners, this is the 80,000 Hours Podcast, where we have unusually in-depth conversations about the world’s most pressing problems and what you can do to solve them. I’m Rob Wiblin, Head of Research at 80,000 Hours.

In my opinion Brian Christian is a fantastic author, with a particular knack for accurately communicating difficult or technical ideas from math and computer science.

Listeners loved our episode about his book _Algorithms to Live By_ — that’s episode 48 from back in 2018 — so when the team read his new book _The Alignment Problem_ and found it insightful, getting him back on the show was a no-brainer.

I think this episode will both be of interest to people who know a lot about AI as well as those who know a little, and of interest to people who are nervous about where AI is going as well as those who aren’t nervous at all.

On the episode page we always have a bunch of selected links to give you leads to learn more about all the things we’ve talked about. But for this episode Brian has gone above and beyond and inserted a host of links to all the specific research he lays out in the conversation, in the transcript itself. So if you want to chase up a blog post or paper or video go take a look at the full transcript on our site.

Just before we get to Brian I want to quickly let you know about the event Effective Altruism Global: Reconnect which is coming up soon on the weekend of March 20–21.

As part of the event, we’ll be premiering our first-ever video episode with Ezra Klein, who will share his thoughts on effective altruism, longtermism, and journalism.

But talks aren’t the main focus — rather it’s about giving and receiving feedback on people’s projects and plans, reconnecting with old contacts, and discussing interesting ideas with new ones.

It’s being organised for people who have made a change to their plans, volunteered, or donated a significant proportion of their income on the basis of effective altruist-flavoured ideas, either recently or in the past.

The organisers are particularly keen to reconnect with people who were more involved in effective altruism and the associated community in the past, but more recently have drifted away from it.

It’s free to attend and applications are open now until the end of Wednesday March 17.

If you’re relatively new to effective altruism and haven’t taken concrete steps to have more impact yet, there’s an event for you, the EA Fellowship Weekend on the following weekend, March 27–28.

You can find out more about both events and apply to go at eaglobal.org.

Alright, without further ado, here’s Brian Christian.

### The interview begins [00:02:30]

**Robert Wiblin:** Today I’m speaking once again with Brian Christian. Brian is a nonfiction author, most known for the bestselling books _The Most Human Human_ and _Algorithms to Live By_, which I interviewed him about back in 2018 for episode 48. Brian studied computer science and philosophy at Brown University, and since 2012 has been a visiting scholar at UC Berkeley. His work has appeared in _The New Yorker_, _The Atlantic_, _The Paris Review_, and _The Daily Show_, among many other places. Thanks for coming back on the show, Brian.

**Brian Christian:** Thanks for having me.

**Robert Wiblin:** Alright. Today we’re mostly going to be talking about your new book _The Alignment Problem_, and the various things that you learned while doing the research necessary to put it together. And I can happily confirm for listeners that _The Alignment Problem_ is a really good way to learn a lot about how modern AI systems work and the problems that we’re having to deal with to try to ensure that they have beneficial outcomes as they are becoming more powerful and embedded into more aspects of daily life all the time. But first off, tell us, what are you working on at the moment and why do you think it’s really important?

**Brian Christian:** I’ll start at a macro level. What I’ve been working on I guess my entire career has been this question of what computing teaches us about what it means to be human. And so that has now led me through three different books. My first book, _The Most Human Human_ , is about communication. My second book with Tom Griffiths, which is called _Algorithms to Live By_ , is about decision making, as you and I have discussed. This book, _The Alignment Problem_ , is about this question of values. And so for me, this theme of what we learn about ourselves from computer science from AI is really, I don’t know, for me almost a religious question of a kind.

**Brian Christian:** I think it’s important because we are living through a really remarkable time. I think it’s the most exciting time to be interested in these philosophical questions about what it means to be human in the last 2,500 years or so. And also, as many listeners will sympathise, there’s an urgency now to some of these questions that there wasn’t before. So yeah, that’s what I think about broadly.

**Robert Wiblin:** So what gap in the market of books about AI were you trying to fill with this one?

**Brian Christian:** I think that’s an interesting way of framing it. I started really committing myself full-time to this book in the summer to fall of 2016. And so from what was happening then, we had for example _Superintelligence_ by Nick Bostrom, which was kind of pulling the fire alarm, so to speak, in terms of these long-term existential risks from AI. You also had books like _Weapons of Math Destruction_ by Cathy O’Neil, which I think is kind of pulling the respective fire alarm in the machine learning ethics community. And so it felt to me that there was an opportunity for a book that would take that story further in a couple of ways.

**Brian Christian:** One was that, from my perspective in 2016, I saw these two communities really colliding. The questions of long-term AI safety and present-day big data ethics were increasingly part of, I thought, a shared research agenda. The rubber was really hitting the road. A lot of these things that were kind of thought experiments in 2013/2014, we were actually seeing alignment problems in real life and there was an actual technical AI safety research agenda underway.

**Brian Christian:** And so it felt to me like there was the beginning of a new chapter in that story, which was not about the reasons to be concerned, but it was about what we were actually doing. It also felt to me at the same time that there was a lot of discussion of AI and machine learning without the pedagogical component. And so part of what I wanted to do was to actually kind of sharpen the discourse. And so the book ends up presenting a combination of this curriculum, if you will, this crash course in sort of what’s going on in machine learning as well as highlighting for me this movement, this positive project of like, okay, we’re answering the alarm here. So that’s really the story that I set out to tell: what comes after we’ve broken the glass and pulled the red handle.

**Robert Wiblin:** How’s the reception been?

**Brian Christian:** It’s been good. I mean, it’s been really interesting to me. This has been a theme throughout my career where I sort of think of myself as an ambassador on behalf of computer science to a more general public, but then counterintuitively the computer science community ends up being some of the most enthusiastic readers — even though I think they know a lot of that story already. It’s been interesting to me seeing the data science community receive this book, because from AI safety research to AI research is sort of an order of magnitude, but then also from AI research to data science more broadly.

**Brian Christian:** Every company has a data science group, regardless of what it is that you’re trying to do. And as these alignment problem questions become real, increasingly normal companies — whether you’re selling eyeglasses online or whatever you’re doing — need to be thinking about these questions of bias and representation and what’s our objective function and all these things. So it’s been, I guess, encouraging. Maybe it’s discouraging that these problems are now so widespread, but it’s encouraging that there’s interest from that community in what the AI safety researchers are up to and what of those ideas we can use in a more practical setting.

**Robert Wiblin:** Speaking of it being very real, was there kind of an emotional arc to researching or writing this book at all? Because obviously this is… Some of the questions deal with important issues, like is the future going to be good or could it potentially be very disastrous if we develop AI poorly? Did you ever feel a kind of despair for the future, or just a lot of optimism?

**Brian Christian:** Both. I mean, really both alternating waves. It was for me incredibly encouraging to see the community grow in real time as I was working on this book from let’s say the summer of 2016 — around the time that the Concrete Problems in AI Safety paper came out and the _ProPublica_ report on COMPAS came out that same summer — through even by 2017, by late 2017 there was already this real groundswell. People who went to NeurIPS in 2016 and said, “Oh, I’m working on safety,” they would get this kind of perplexed reaction. But then by 2017, there was an entire day-long workshop on safety and it was this normal thing.

**Brian Christian:** And so seeing the culture shift, the actual momentum and sort of field-building…that for me was totally exhilarating. And seeing this kind of first-generation of AI safety PhD students matriculate was very hopeful. At the same time we had the succession of results that I think many people know: AlphaZero, MuZero, GPT-2, GPT-3. I can remember these moments. When I first saw the GPT-2 results, there was this feeling of exhilaration, but also this dread in the pit of my stomach. I remember walking around saying to my wife like, I don’t know how anonymous internet discourse is going to survive this. This feels like just a tidal wave of misinformation. We’re rapidly approaching sort of a post-Turing test world. What is that going to be like? So it’s both. I’m more hopeful than not honestly, but I still—

**Robert Wiblin:** It’s touch and go.

**Brian Christian:** It’s touch and go, yeah. That’s right.

**Robert Wiblin:** Speaking of GPT, I guess the new GPT-3 has been making a big impression on people by producing what’s sometimes kind of amazingly human-like and seemingly very insightful texts on all kinds of topics. Have you been surprised by GPT-3’s emergence, and do you think its existence has any kind of important implications for what we’re talking about, or should it update us in some direction?

**Brian Christian:** It certainly surprised me in terms of how directly you could just scale up the previously existing architectures and seemingly not hit some kind of asymptote. I don’t remember a parallel in recent machine learning where we just take something like AlexNet and just make a 100x bigger one and it can recognise photos much more efficiently or something like that. The scaling aspect is very interesting. I think there is a real concern, as I said, about misinformation and that sort of thing. The ability to produce human-level text at scale I think is going to do weird things to online discourse.

**Brian Christian:** It’s funny. I mean, my first book, _The Most Human Human_ , is about the Turing test — and that was written in 2010, when chatbots were still basically a punchline. And so, yeah, what does it mean to sort of increasingly inhabit a post-Turing test world? How do we think about speech? That’s going to be interesting. And from an AI safety perspective, there’s one aspect to it that I think is kind of underappreciated, which is that I look at the GPT API as kind of the first AGI product. It’s kind of like this AGI business model of we’re going to sell access to this API and you can just do whatever you want.

**Robert Wiblin:** Yeah. And I guess you’re saying it’s… Well, I suppose it’s not like a fully general intelligence in that it can’t go out and act in the world in the way that humans can, but I guess it’s not subject- or domain-specific, because it can answer questions across all kinds of different areas of knowledge because it studied text across such a wide range of topics.

**Brian Christian:** That’s right. Yeah, and you’re seeing this kind of blooming ecosystem of startups coming out using the API. I think it’s useful for our model of what AGI deployment will look like. For example, there’s a lot of theoretical papers that talk about this kind of cartoon relationship between a human called H and a robot called R. The alignment problem is framed in this context of how H wants to do something, so it builds R. Is R going to faithfully do what H has in mind? That’s not the relationship that we have with GPT-3. GPT-3 is behind an API that can get cut off at Open AI’s discretion. We don’t have the ability to kind of re-train it at will. So I think updating our model of what the actual rollout of something like AGI will look like. This sort of H and R dynamic is kind of the hobbyist dynamic. It’s like someone is hacking in their garage, they build an AGI. That may be very different than a model in which there’s some AGI in the cloud that you—

**Robert Wiblin:** Hard to access.

**Brian Christian:** Exactly.

### The Alignment Problem [00:13:31]

**Robert Wiblin:** Yeah. Alright. Let’s move on and talk more about the book directly. To help lay some of the groundwork for what’s coming later, can you explain what a neural network does and how it actually works at a kind of nuts-and-bolts level? Because I mean, I’ve done many interviews with people about AI and to some extent I’m quite knowledgeable about it, but I still find sometimes I just can’t really picture in my head like, how does ML work? How does an AI work? There could be a lot of people in my situation who have this sort of superficial understanding, but then when you’re like, “a neural network thing,” I guess I kind of know what that is, but what is it really?

**Brian Christian:** I can’t resist weaving in a little bit of historical information here, which is just one of the most remarkable things that I found doing archival research for this book. It’s about the personal history of Walter Pitts and Warren McCulloch, who sort of invented the idea of a neural network in the early forties. Walter Pitts was a homeless teenager living in Chicago, and Warren McCulloch basically became a kind of foster father figure to him. McCulloch was in his forties, Pitts was like 17 or 18 at the time that they wrote that paper. So there’s just a surprisingly poignant human drama behind these names that you recognise in a bibliography of AI, McCulloch and Pitts. There’s this surprisingly rich personal story back then.

**Brian Christian:** Pitts was a logic prodigy and McCulloch was a neurologist. I think that’s helpful for thinking about where the artificial neural network came from. We knew by the forties that neurons basically had this activation threshold, that they had all these electrical inputs and a single electrical output. And when the excitation of their inputs exceeded some threshold, then they would emit a pulse down the axon to whatever neurons were downstream. And so that’s kind of the simplest way to think about a neural network in mathematical terms, is that they have a bunch of inputs that are just numbers, they sum those numbers, and then if they’re greater than some threshold, then they pass a number down the stream essentially, otherwise they do nothing.

**Robert Wiblin:** So it’s firing one or zero. It’s not a continuous function at the point of each neuron?

**Brian Christian:** In the McCulloch and Pitts original version, it’s kind of this zero/one thing, because they were thinking about it from the perspective of Boolean logic. Later we moved to sort of continuous outputs and learned things like you need to have non-linearity in the output, so your output can either be sigmoidal or more recently this kind of rectified linear output, and people have continued to experiment with different activation functions. The key thing is that there’s some non-linearity. Beyond that, there’s sort of a little bit of voodoo in terms of which things appear to work best.

**Robert Wiblin:** Why doesn’t linear work?

**Brian Christian:** Because if you have a bunch of linear neurons stacked in layers, you don’t get the additional complexity because combining these different linear inputs, you still get a linear response.

**Robert Wiblin:** That makes some intuitive sense. Okay. So you’ve got kind of… I imagine in my head you’ve got kind of like a visual input side, so you’ve got like a pixel or some pixels going into some incredibly complicated mathematical function or formula with I guess like, it’s not linear, so it’s got a bunch of thresholds in it. So it goes into a first neuron and then it maybe fires or doesn’t, and if it fires, then the message continues on to another neuron in the next layer. And then maybe that one will fire or not based on that information and other information coming into it. Perhaps it will fire or not, and then it will pass onto the next layer until it goes out to the end and it has some output at the end of these layers of neurons that are firing and not firing and signaling to one another. Is that kind of right?

**Brian Christian:** Yeah. That’s basically right. I mean, of course nowadays there’s nothing actually firing as such. It’s all just linear algebra. But yeah, that’s basically the deal.

**Robert Wiblin:** Okay. How many nodes and connections are there in an actual practical neural net like this?

**Brian Christian:** I’m trying to remember off the top of my head. The seminal deep neural network that kicked off the deep learning revolution is called AlexNet, which is from October of 2012. That had something like 650,000 neurons, and ballpark I want to say like 60 million connections, something like that. But that’s child’s play by a modern standard. That’s like 10 years ago almost. So to put that into perspective, GPT-3 has something like 175 billion connections, which is many orders of magnitude greater. And in fact we’re now within three orders of magnitude of the actual synaptic complexity of the human brain. So GPT-3 has 0.1% as many connections as a human brain, which — if you kind of extrapolate the current doubling rate of model size — implies that we’re going to be training models with an approximate synaptic complexity of a human brain by like 2022 or 2023, which is not very far away.

### Agency [00:18:56]

**Robert Wiblin:** No, it’s not. Okay. All right. Let’s push on to the substance of the book. I’d love to go through the whole thing because there’s so much great material in there, but I think precisely because there is so much stuff we don’t have time for at all. So I’m going to try to pick up maybe a third of the way in, in the second big section called “Agency.” The first subheading is about reinforcement learning, which is one of the methods that we’ve used to train neural networks to do what we want. Can you explain to everyone how reinforcement learning actually works and perhaps what are some of its key achievements that have made it interesting?

**Brian Christian:** The classic way of thinking about training a neural network is what’s called supervised learning, where you show it a series of examples one at a time — let’s say pictures — and you say, “What’s in this picture? Is it a cat, a dog, a truck?” And then after each example, you compare the network’s output to what you wanted the output to be. And through the magic of backpropagation — which is basically just the chain rule in calculus — you kind of fiddle with all the knobs. You adjust all of the synaptic multipliers up and down in order to make the network’s final output closer to what you think it should have been. And through this kind of magical process, if you just keep pulling random examples and you keep tweaking the knobs slightly, you actually get to something that generalises to new examples.

**Brian Christian:** That’s supervised learning. Now, reinforcement learning takes this problem and kind of goes one level of complexity deeper, which is to say rather than being given a series of inputs and each input immediately correcting — like, okay, you should have said this, you should have said that — reinforcement learning has these temporal chains. So in a reinforcement learning scenario, you’re in an environment making decisions and those decisions affect the input that you see. So if you’re in a maze, if you turn left or you turn right, that’s going to have a direct bearing on what you see a second from now. Or if you play a move on a chess board, that affects the position you’re going to end up in.

**Brian Christian:** So already you’re starting to increase the complexity here, where in the classic supervised learning thing, you just had these so-called “i.i.d.” (independent and identically distributed) inputs that were just sort of streaming through. Now your inputs are themselves dependent on the actions that you take. So you’ve increased the complexity in that sense. And you’ve also increased the complexity because reinforcement learning, rather than being about minimising the error on each individual example, is premised on the idea that your environment has these rewards in it and you’re trying to get as many rewards as possible. So you can think of it as like cheese in a maze or points in an Atari game, or however you want to formalise this idea of rewards in the environment.

**Brian Christian:** But the rewards may only come after a long series of steps. And so you also have this kind of causal attribution problem of you’ve bumbled around in the dark, and then suddenly you get 100 points and then you have to kind of do this credit assignment backwards of, okay, what did I do right? Which of those actions was responsible for me actually succeeding? So for all of those reasons, it’s a substantially more complicated problem and arguably better matches the complexity of being in a real-world situation.

**Robert Wiblin:** Yeah. And I guess how has reinforcement learning worked? What are some of the impressive things that we’ve been able to do with it?

**Brian Christian:** There’s been a series of breakthroughs starting in the seventies. There’s an idea called temporal difference learning which says rather than waiting until you actually get the reward, you can learn from your own estimate changing. For example, if I predict on Monday that I think there’s going to be an 80% chance of rain on Friday, and then on Tuesday I think there’s only going to be a 60% chance of rain on Friday, the idea of temporal difference learning is that you learn from that delta in your guess. You don’t have to actually wait until Friday to see what happens. You can already learn something by the fact that your later estimate is probably more accurate.

**Brian Christian:** It’s the same thing in a chess game, if you make a move and then your opponent replies and then you think, oh crap, I’m probably going to lose now, you don’t have to wait until you actually lose. Your opponent may make an even worse blunder and you ultimately win, but you can learn something by the change in your prediction. That’s an example of some of the theoretical stuff, some of the foundational stuff. But in terms of what we’ve actually been able to do with it, I mean, reinforcement learning in its modern incarnation is behind everything from AlphaGo to the systems that play Atari games, to robotic self-driving cars.

**Brian Christian:** Increasingly, social media companies like Facebook are using reinforcement learning to model how they send notifications out. It used to be the case, for example, that social media companies used supervised learning to organise their newsfeeds and their notifications. They would have this kind of myopic prediction about whether the user would engage with any given content, and with what probability. They would use that probability to rank the content, just show you the stuff that would be the most salient or send you the notification that you’d be most likely to tap or whatever. But this had many problems, including burning people out and kind of forcing them to turn notifications off or leave the platform.

**Brian Christian:** So they now use a reinforcement learning paradigm where they are thinking about this kind of temporal dependency where if the user, six notifications from now, turns off notifications entirely, then you get no more points.

**Robert Wiblin:** So then they backpropagate to see what did we do a while back there that caused this negative outcome further down the line, rather than just considering each decision in isolation?

**Brian Christian:** Exactly right. Yeah. For me, there’s this real ironic aspect which is that Facebook uses this architecture called Deep Q-Networks or DQN, which is exactly what DeepMind used to play those Atari games at superhuman level. So the exact same architecture is being used by Facebook to essentially play us. We are the Atari game in that situation.

**Robert Wiblin:** That’s a bad look. As I understand it, the development of reinforcement learning allowed us to learn something about how humans operated, because we were a bit… Psychologists weren’t sure how it was that humans learned from their experience, because we have this same problem as well, that maybe potentially days, weeks, months later, after making a mistake, you actually get the ultimate outcome, which then should cause you to learn that you made a mistake. But then how do you attribute the negative outcome far down the line with the cause of it, which might have come far in the past? And I guess we learned how to solve this problem with neural networks or with reinforcement learning. And then we were like, oh, this is what the brain has been doing. It’s like it has a model of what reward it’s going to receive in the future. And then when its estimate of the future reward changes, that causes it to be able to learn in that moment what mistake it has made, because the change in the estimate is so much closer to the action that was either a wise one or a mistake.

**Brian Christian:** That’s exactly right. This is truly one of my favourite stories in the history of science. The ability to monitor neurons in real time started to emerge in the seventies and eighties, and in particular, dopamine neurons became an intense subject of interest because we could now watch dopamine neurons spiking in real time in response to say a monkey reaching into a bin and finding a little piece of banana or whatever, and then suddenly you see this spike. And so we started to get this data, but it wasn’t totally clear what the data meant. So there was this outstanding riddle in neuroscience of what was going on with dopamine. It appeared to be highly correlated with reward, but not exactly — because the monkey would continue finding this fruit, but the dopamine spike would go away. Even though the monkey was still hungry or still wanted to eat it or whatever.

**Brian Christian:** So it wasn’t exactly reward. Maybe it was surprise? To make a long story short, it wasn’t exactly surprise either. And so there was this mystery where we knew the dopamine system was powerfully related to action and learning. It had something to do with reward, it had something to do with surprise. What was it? And these data came across the desk of Peter Dayan, who was involved in a lot of the early mathematics of reinforcement learning. He and his colleagues at the Salk Institute were like, “Oh, the brain’s doing temporal difference learning. It’s adjusting its prediction to learn a guess from a subsequent guess.” When the monkey finds fruit that it didn’t expect, it’s like, “Oh, things were more promising than I thought they were going to be, and I should learn something from that.”

**Brian Christian:** To this day, I mean, like most biological things, there’s a lot of complicated details. But this is still the accepted story for the role of the dopamine system. That it’s a temporal difference learning mechanism. I think that’s really remarkable for thinking about kind of the deeper implications of AI because it shows us that—

**Robert Wiblin:** We’re not so different.

**Brian Christian:** We’re not so different at all. And this mechanism has been found independently by evolution several different times. And so to me, it tells us that we’re not merely developing mathematical frameworks that solve engineering problems, but we actually are sort of onto the philosophical pay dirt. We really are discovering some of the fundamental learning mechanisms that evolution found.

**Robert Wiblin:** What are some of the ways reinforcement learning can potentially go off the rails? Because Stuart Russell, for example, who we’ve interviewed on this show, thinks that we kind of need to do away with reinforcement learning for sufficiently advanced agents. Can you help explain that story?

**Brian Christian:** Reinforcement learning is about how you develop a set of behaviours, which in the field is called a policy, for maximising this reward. And the question if you’re the human designer of a system is really how do you design a reward such that the agent that optimises for that reward will actually do the behaviour that you want. So there’s kind of a double optimisation problem going on. You have some behaviour in mind, you need to create a reward which will in turn incentivise that behaviour. This turns out to be extremely difficult. Every researcher has their own sort of stash of horror stories of how the best intentions went awry.

**Brian Christian:** A favourite example of mine is there was a group of Danish researchers in the nineties that were developing a reinforcement learning agent to ride a virtual bicycle towards some destination. They realised that if you just give it 100 points for reaching the destination, it’s going to have no idea what to do. Until it gets there somehow magically at random chance, it won’t even know it’s on the right track. So they decided to give it these additional incentives for making progress toward the goal. Sounded reasonable. They let it optimise. They came back after the long weekend, checked in on it, and the program was riding the bike in circles as quickly as possible. Because the 50% of the time that it was going around the circle towards the goal, it was getting points. And it turned out to be just a lot easier to do that really fast than it was to actually learn how to ride the bike in a straight line.

**Robert Wiblin:** I guess the narrow issue there is that it wasn’t symmetrically losing points as it moves away from the goal.

**Brian Christian:** Precisely.

**Robert Wiblin:** I suppose you could fix that. But then I suppose the story that we’ve seen is just that it’s like you fix that and then there’s another problem. And then you fix that and then there’s another problem. It’s like it’s hard to actually develop a reward that prevents hacking or misbehaviour completely.

**Brian Christian:** That’s right. It’s kind of this game of whack-a-mole. There has been a lot of theoretical work — including by Stuart Russell himself in the nineties — on how you can modify a reward function such that you won’t change the optimal policy in that environment. And here, one of the key insights is basically that you need to reward states of the environment, not actions of the agent. And so it’s exactly what you’re describing. You need to symmetrically subtract points for going away from the destination if you’re rewarding them for going towards the destination. So really what you’re rewarding is the agent’s position, not their behaviour. I think this is a very deep result that has implications not just in AI but for thinking about human incentives and parenting and things like this.

**Robert Wiblin:** You have to focus on outcomes, not process.

**Brian Christian:** Yeah. One of the examples that I give is my friend and collaborator, Tom Griffiths. When his daughter was really young, she had this toy brush and pan, and she swept up some stuff on the floor and put it in the trash. And he praised her, like “Oh, wow, good job. You swept that really well.” And the daughter was very proud. And then without missing a beat, she dumps the trash back out onto the floor in order to sweep it up a second time and get the same praise a second time. And so Tom—

**Robert Wiblin:** Pure intelligence.

**Brian Christian:** Exactly. Yeah. Tom was—

**Robert Wiblin:** Should be very proud.

**Brian Christian:** —making the classic blunder of rewarding her actions rather than the state of the kitchen. So he should have praised how clean the floor was, rather than her sweeping itself. So again, there are these surprisingly deep parallels between humans and machines. Increasingly, people like Stuart Russell are making the argument that we just shouldn’t manually design rewards at all.

**Robert Wiblin:** Because we just have too bad a track record.

**Brian Christian:** Yes. It’s just that you can’t predict the possible loopholes that will be found. And I think generally that seems right.

**Robert Wiblin:** Yeah. I guess we’ll talk about some of the alternative architectures later on. With the example of a human child, it’s very visible what’s going wrong, and so you can usually fix it. But I guess the more perverse cases where it really sticks around is when you’re rewarding a process or an activity within an organisation, and it’s sufficiently big that it’s not entirely visible to any one person or within their power to fix the incentives, or you start rewarding people going through the motions of achieving some outcome rather than the outcome itself. Of course rewarding the outcome can be also very difficult if you can’t measure the outcome very well, so you can end up just stuck with not really having any nice solution for giving people the right motivation. But yeah, we see the same phenomenon in AI and in human life yet again.

**Brian Christian:** Absolutely. Yeah, you have this problem in human organisations where you can’t exactly take someone’s salary away if they screw something up. It doesn’t work the same. You don’t have the same control over the point system in that sense. But yeah, I mean, I think it’s important to remind people that the term ‘alignment,’ which Stuart Russell coined in 2014 to refer to this problem, he’s borrowing that term from economics. The economics literature in the eighties was talking about how do you align values within an organisation, and how do you align the incentives of two parties in a contract? And so these questions were human questions first. And I think, yeah, they will be human questions long after we declare victory on the technical part of the problem, if we ever do.

### Shaping [00:34:24]

**Robert Wiblin:** Okay. The next section of the book is about shaping the behaviour of AI. And in particular, it talks a lot about this issue of sparse rewards, which is what we’ve been talking about where you don’t get very much feedback on the outcome until very far down the line. You either get like you won the game, or you lost the game. And so you have to figure out some solution to this. There’s a great story in the book about some kind of simulated animals that suffer this issue when they’re getting sparse rewards. And so they have to evolve to figure out how to behave given that, and they develop a whole wide range of sometimes perverse and strange behaviours, going down very different evolutionary tracks to survive. Can you tell us about that one?

**Brian Christian:** Yeah. This is a classic study from the early nineties by Dave Ackley and Michael Littman. They were interested in the interaction of evolution and learning. If you think about biological evolution, there are certain things that make an organism fit for its particular environment: not getting killed, reproducing, et cetera. But there’s a non-obvious way that environmental fitness gets translated into people’s actual desires and goals. Why is it that we want to get a raise, or drink a glass of wine, or play the flute, or whatever it is? Whatever the things are that people do have some non-obvious relationship to this more specific Darwinian notion.

**Robert Wiblin:** Yeah. Like I’m going to drink the wine so I can reproduce more.

**Brian Christian:** Right. In some vague way, yeah.

**Robert Wiblin:** Yeah. Well, that would be the way you would think about it if you were explicitly kind of maximising the reward for which you would design. But the whole thing is we have all these proxies that we’ve developed because the reward of reproducing would be so far down the line.

**Brian Christian:** Yeah, exactly. I mean, evolutionary psychologists think about where our actual desires come from and what’s the relationship they have to the environment. And so you can think about the same question in an AI reinforcement learning context by thinking about, okay, we have some environment, what would a good reward function be, such that agents that optimise that reward function thrive? And there’s like a very non-linear, non-obvious connection between the fitness function in the environment, whatever that might be, and the things that the agents are trying to do.

**Brian Christian:** So in this particular study, Dave Ackley and Michael Littman were looking at an environment in which you had these simulated agents on a 2D grid. They could walk around, they were occasionally predated by these monsters. They could hide or they could reproduce, different things like that. And their reward function would be a kind of genetic material, so to speak. So when they reproduce, their ‘child’ would have a reward function that was some combination of the reward functions of the two parents, plus some random mutations. And they just ran these little worlds to see what would happen, and all of these weird quirky non-obvious things happened.

**Brian Christian:** For example, agents that learned that food was good would sometimes succumb to the problem of eating all of the food in the environment and then starving later. And so the reward function was specified in terms of going North, South, East, and West on this grid. So the most successful agents had these very bizarre reward functions that said like food is good but only if you approach it from the North or South, not if you approach it from the East or West, which was just a hack.

**Robert Wiblin:** It was just to slow them down. It kind of reminds me of how people say that any diet potentially can work to help you lose weight because it forces you to think about things and make some choices and not others. Like people say you should only eat blue things today or only red things. And it’s just, it’s completely arbitrary. It just forces you to eat more thoughtfully.

**Brian Christian:** Yeah. Right. You could see these superstitions. They didn’t necessarily map to reality but they produced useful behaviour. So exactly what you’re saying. There was a case of what Dave termed ‘tree senility,’ which had to do with the fact that these agents were attracted to trees. Now, this turned out to be a useful strategy because the trees afforded them protection from the predators. But they didn’t know this. They just knew that they liked being around trees, and it happened to afford them this survival thing. But there’s an interesting interaction between their reward function and their behaviour. Over their lifespan, they got better and better at optimising their behaviour for their reward function. By the end of their life, they were so good at being near trees that they never left the trees, starved, and died. Dave called this ‘tree senility.’

**Robert Wiblin:** Hold on. They evolved to have a strong attraction to the trees in order to avoid being attacked by monsters because they can hide in the trees. But then that tendency got so strong that they could no longer leave the forest to find food. But it seems like they would end up at some kind of middle ground, where they kind of want to be near the trees, but not if they’re hungry, then they have to leave the trees?

**Brian Christian:** Yes. Well, the key thing in this particular case is that their behaviour slowly improves over time at optimising whatever their reward function is. So by the time they got essentially good enough at being near trees all the time, they were past their reproductive age. And so it didn’t harm the fitness of that society. So that’s why he said senility, because it affected the old members.

**Robert Wiblin:** It was an aging issue, I see. So you’re saying perhaps they evolve between generations to have a strong attraction to trees, but then over each individual’s lifetime, they spend so much time around the trees that they can no longer survive outside of the trees. And so they de-skill effectively over the course of their life and now they’re just stuck in the trees and then they starve because they can’t leave to get food.

**Brian Christian:** That’s right. That’s exactly it.

**Robert Wiblin:** That’s super interesting. Yeah.

**Brian Christian:** And so I think part of the reminder to people who work on reinforcement learning in more conventional settings is that you want to think about not only the ultimate policy that this agent develops at the end, but what is the actual trajectory of them learning that. Often in research settings, we just kind of throw away everything that the agent did until they became maximally expert. But in the real world, kids exist. They share the world with us and they’re still figuring things out, but they can make real mistakes. They can hurt themselves, they can hurt others, et cetera. So thinking about the interaction between the reward and not just the final behaviour that comes out of it, but the actual, entire learning trajectory.

**Robert Wiblin:** Yeah. It’s very interesting that over time you can become very good in one narrow domain, but then de-skill in others. I guess if you didn’t catch it, the reason this could continue was that they had reproduced before they reached the age where they couldn’t leave the trees. It reminds me, there’s some species, I can’t remember the name of it. I think it’s a rodent of some sort that gathers in some location and then they fornicate, or at least the males fornicate so aggressively and without breaks that they literally die of exhaustion, leaving only the females alive for that generation. But by that stage, they’ve done what they have to do to propagate their genes. And so this behaviour can continue indefinitely, even though it immediately kills the males of the species each year.

**Brian Christian:** I don’t have that much of a reaction to that other than, yeah, evolution is very strange.

**Robert Wiblin:** Yeah. It can do some pretty strange things.

### Curiosity [00:41:48]

**Robert Wiblin:** Okay. Let’s push on to the next section, which is about the importance of having curiosity in order to get actually intelligent behaviour from AIs. How is it that a lack of curiosity or a preference for novelty can cause AIs to fail to be able to do what seem like basic things?

**Brian Christian:** Yeah. I’ll connect here to an intuition that comes from human infant learning, which is that humans exist in a world that has these explicit rewards, whether it’s your parents saying I love you or your boss giving you a raise, whatever it might be. But we also have… Look at kids, the way that they’re motivated to just sort of poke objects, bite things, bang stuff on the ground. There’s not any clear connection to how they’re going to get praise or how they’re going to get food or whatever. There seems to be a kind of innate drive. We’ve observed the same thing with some animals. Some animals will press a lever to get a food pellet, but they’ll also press a lever to look out a window. Rats will cross an electrified area just to get to a new room just to see what’s over there.

**Brian Christian:** So there’s this mounting evidence for these kinds of internal rewards or these intrinsic motivations that connects to the reinforcement learning literature in a really interesting way. There’s this seminal DQN paper by DeepMind where they announced in 2015 that they had this single-agent architecture that could play 60 different Atari games, the majority of them at superhuman level. This was a very big deal because it was the same exact program, the same exact network randomly initialised could learn not just a single game, but any game. However, if you scroll down the figure from their _Nature_ paper, you notice that at the very bottom of the list is this game called Montezuma’s Revenge where DQN scored a grand total of zero points. The same agent that was superhuman in pinball and breakout and boxing, et cetera, didn’t manage to score a single point.

**Brian Christian:** So what was it about this particular game, Montezuma’s Revenge? Montezuma’s Revenge has sparse rewards. You have to do a lot of things right in order to get the first explicit points of the game. You have to climb this ladder, run across this conveyor belt, jump a chasm, swing on a rope, dodge an enemy, climb another ladder and jump up all to get this little key that gives you 100 measly points.

**Robert Wiblin:** So I suppose it tries learning like a million times just playing in the game kind of randomly, and then seeing if any of the stuff works. But it tries a million times and at the end of every one, it’s got zero points. It’s like, well, I’ve really got nothing to work with here. Where do I even begin?

**Brian Christian:** Yeah, how does it even know that it’s on the right track. The whole kind of learning paradigm is based on the idea that you’ll bumble into rewards somehow, and then start to work from there. So the question was, how do you overcome this problem of sparsity? The funny thing is humans have no problem playing this game. It’s actually a very unfun game, but we have no problem knowing what to do, and there’s many different reasons for that. But part of it is just that we have this intrinsic motivation of, we want to know what happens if we get our character over to this part of the screen, or we interact with this object, or we go into a new room, what’s over there. All of that is at least as motivating to a human player as the points in the corner of the screen.

**Brian Christian:** And so this group from DeepMind decided to borrow explicitly from the cognitive science of what we know about babies and say, okay, we know that babies exhibit this thing called preferential looking, which is that from just like two weeks old, if you follow their eye movements, they will prefer to look at something they’ve never seen before. And so you can think about that as being like a kind of internal reward mechanism. And so it let’s you do the same thing. I’ll hand wave through some of the mathematical details, we can get into it if you want. But basically they created this supplementary reward system for their agent that would give it the equivalent of in-game points just for seeing an image on the screen that it had never seen before. Suddenly now you have enough of a little breadcrumb trail to know you’re on the right track.

**Robert Wiblin:** It can grab onto this thing because it’s like, well, I’ve got to move my character to get to new places. And then that gives it some intermediate reward from which it can build.

**Brian Christian:** That’s exactly it, yeah. And so once you plug in this kind of novelty mechanism, suddenly you’ve got enough to get the learning process going. And this agent, which previously got zero points, can now play most of the game.

**Robert Wiblin:** Yeah. I guess this would have helped the creatures with tree senility if they had a preference for doing things that are different, not just staying at the tree. They got to move outside and maintain some diversity of behaviours, then they wouldn’t become so specialised that they eventually can’t find food anymore.

**Brian Christian:** That’s right.

**Robert Wiblin:** We’ve got this issue of having some mice in our house that we’re trying to deal with. They keep coming up to this room, they have to climb up the stairs to get to this room that has no food in it, no good nesting places, no water. There’s nothing for them there. But they keep coming up there, and I’m like, why? Why are you doing this? I wonder if they’re just curious. They have this instinct that they have to go find something else. And so they just keep coming up to this room where there’s no rewards for them. I guess it could be different in my situation, but this was in my mind as I was reading this section of the book.

**Brian Christian:** That’s funny.

**Robert Wiblin:** Yeah. Okay. When you add this tendency, this can also lead to perverse outcomes potentially. You mentioned that you can potentially get an AI that’s just hooked on this artificial novelty, so they can potentially get stuck just standing in front of a TV screen in a game. Can you talk about this issue?

**Brian Christian:** Yeah. This has been something that’s come up in a lot of papers. There’s a paper from 10 or 11 years ago by Laurent Orseau who is at DeepMind, talking about how an agent that doesn’t understand that randomness is a fundamental property of the universe could end up getting stuck flipping coins forever because it thinks there’s some kind of deep structure to the universe that it needs to unpack, and it never can. We’ve also seen this demonstrated in video game environments. There’s a group from OpenAI and UC Berkeley that put basically a TV screen inside one of the maze environments that their agent was trying to escape and the TV screen totally hijacks this novelty reward. It’s very striking because you can watch videos of their agent navigating this maze. And as soon as it swings around such that the TV is in view, it’s just paralysed, just glued to the TV screen because that is precisely—

**Robert Wiblin:** It’s getting a reward.

**Brian Christian:** It’s just mainlining this visual novelty, which is much stronger than it would experience by sort of wandering around. I think this is very interesting. I mean, we know that there are connections between kind of novelty-seeking behaviour and the dopamine system. We also know there are links between addiction and the dopamine system. And for me, it’s very striking that we’re now starting to get to a point where the agents that we’re building and the environments that we’re training them in are sufficiently complex or sufficiently ‘human-like’ that even their pathologies are recognisable.

**Robert Wiblin:** Yeah. I was going to say, I mean, obviously there’s lots of reasons why people might become couch potatoes and spend a lot of time watching TV, but do you think that this is one of them, that people might have a preference for seeing new things and the TV just constantly supplies you with new changing images?

**Brian Christian:** I really do. I have this kind of crank theory, which I don’t know if this is actually substantiated in the research or not, but I think this is the same reason that campfires are mesmerising. That it’s just this kind of endlessly chaotic, unpredictable visual stimulation. I think most of us have had that experience of just getting lulled into a trance by a campfire.

**Robert Wiblin:** Like watching the waves or something.

**Brian Christian:** Yeah, watching the waves. The water is a perfect example as well. Or rustling leaves or something. And yeah, I went down a research wormhole trying to figure out what we know about the effect of campfires on the visual system. I don’t know how well it’s been established from a research perspective, but that’s my theory. It’s just remarkable seeing how the reinforcement learning community is on the one hand borrowing some of these ideas from cognitive psychology, but they’re also kind of contributing back to these formal models.

**Robert Wiblin:** Yeah. I guess the solution to this issue is to give the AI a more sophisticated idea of what things really are new, and what things are interesting, and what things are boring, in the same way that humans usually get bored of watching TV because at some point on a deeper level it becomes too much the same. And I guess eventually you could… Maybe it seems like with all of these things, formalising them becomes very difficult. Teaching it why a TV is actually boring might be quite hard, but that seems like the way forward with that.

**Brian Christian:** Yeah, that’s right. I mean, there have been approaches to this where you can look at what are the user-controllable aspects of the environment. There was a group from Berkeley that had this very clever approach, which was you give a network two successive frames of the game, and then you ask it if it can predict what user action was picked between frame one and frame two. The idea was that this would eliminate aspects of the visual environment that are not user-controllable. And so then we’ll make our novelty detector particularly latch onto these things. So there are sort of clever formal approaches here, but I don’t think we have a unified story yet. So I’m very curious to see about that.

**Robert Wiblin:** Yeah. Along those lines, something that I thought was very memorable from the book was you describing how in order to develop curiosity — I guess in humans and AIs as well — you have to have two systems that are somewhat at odds with one another: one that is seeking surprise, seeking something that’s new and unexpected, but then in order that you can’t be surprised too easily, you have to have another system that is constantly trying to predict everything as well as it can. So in a sense that part is trying to minimise surprise by predicting everything and forecasting everything exactly accurately so it can never be surprised. And then the other side has to fight against that and find things that are surprising nonetheless despite your best efforts at forecasting. And I think that’s what’s going on in the human brain in some sense, and I guess it’s also how we’ve had to design these machines too.

**Brian Christian:** Yeah. It certainly rings true to me. I think it’s obvious that evolution wants to be as good of a predictor as possible. You want to predict what’s going to happen to you, but at the same time, as you say, there is kind of this funny internal combat where you also want to seek experiences that will be informative. And so, yeah, you can kind of render that as this agent that’s almost these two adversaries, the action selector which is trying to surprise the predictor, and the predictor, which is trying not to be surprised. And this turns out to work actually really well in reinforcement learning settings. So it may well be that the brain is like that, yeah.

**Robert Wiblin:** Yeah. I feel like I can notice a perverse aspect of this in myself when there’s an area of knowledge or debate or discourse that I know really well, and it’s like you’ve kind of settled on what is kind of probably the true boring thing, the unexpected boring real conclusion just to some issue that has been controversial to you in the past. Then you’re like, “I’m bored of this. I have to find new takes, something new to say about this issue.” And then you’re like, “But what’s left?” What’s left is just bad takes, like dumb, unexpected contrarian takes. I suppose the boring answer will be, well, to lower house prices, we have to build more houses to have more places to live. But that’s too tedious after a while. Now you need like, to lower house prices we have to burn down houses or something that’s unexpected, something you haven’t heard before.

**Brian Christian:** I get this kind of philosophical consolation thinking about this because the difference between these internal rewards — like novelty-seeking and self surprise and all of that — the biggest difference between those and the external rewards is that they’re kind of ephemeral. They go away. Once you see the image, you no longer get the novelty reward when you see it the second time. There’s something significant about that kind of non-stationary ephemeral quality. And I think that partly explains, it explains the treadmill of happiness. That when you were a baby merely moving your arm in front of your face and being able to predict that it would now cover your eyes and then uncover your eyes is delightful. And like later you come to take for granted that you can control your body and so forth. I remember my writing mentor in undergrad. I asked him, “Does it ever get easier to write books as you go through your career?” And he says, “No, because your skill improves, but also you become unsatisfied with the tricks that—”

**Robert Wiblin:** That you can do.

**Brian Christian:** Exactly. And so I don’t know, it makes sense to me that happiness should be a moving target. It makes evolutionary sense. It sort of makes kind of philosophical sense.

**Robert Wiblin:** What happened when researchers pitted two agents that were purely driven by curiosity to play the computer game Pong?

**Brian Christian:** Yeah, there was a lovely experiment of what would happen when you put these essentially non-zero sum agents into a zero sum environment. And so you have two novelty-seeking agents, but they’re forced to play Pong against one another. What do they do? This beautiful thing emerges, which is a de facto collaboration where they work together to create these really long rallies. Previous reinforcement learning work in Atari required you to signal that the agent had died. But if you’re a novelty-seeking agent, then the fact that death starts you back at the beginning of the game is intrinsically boring, and so it’s an intrinsic punishment to be sent back to the beginning of the game.

**Robert Wiblin:** Yeah. Interesting. Okay. I guess they end up producing rallies that are just more and more random and then strange — in like peculiar angles and things like that — because they won’t have seen them recently.

**Brian Christian:** Yeah. They sort of work together to get as far away from the starting state as possible. So yeah, creating weird velocities, weird angles, weird positions. And if this is the study I’m remembering, the rally goes so long that it breaks the Atari emulator and you just start seeing random garbage on the screen. Which, if you’re a novelty-seeking agent, is totally delightful.

**Robert Wiblin:** Yeah they must love that. In the book you suggest that potentially an agent with a lot of curiosity and desire for new knowledge and new information might be the most suitable design for creating a more generally intelligent AI. Why do you think that is?

**Brian Christian:** This goes back to work that Laurent Orseau and Mark Ring did in 2010 or 2011. They were looking at this AI architecture called AIXI — which is kind of a theoretical model for an uncomputably powerful agent — and trying to reason about, even if such a thing could never actually exist in reality, might it still be possible to predict its behaviour in certain settings? They were thinking about this question of wireheading, which is essentially, could an agent short-circuit its reward system and find hacky ways to give itself infinite reward. So they were thinking about different reward structures that this agent could have.

**Brian Christian:** If you had an ostensible basketball-playing agent that you rewarded for getting a high score, a reasonably intelligent basketball agent would learn to get good at basketball, but a superintelligent basketball playing agent would learn that the score is just some electrical current flowing through the scoreboard, and so it would learn to like re-solder its scoreboard and just make it say ‘9,999,’ or whatever. And so there were a lot of ways in which an agent could sort of deceive itself or optimise for some proxy that wasn’t the real thing that the designers intended. And in almost every case, they found it hard to imagine that the agent would avoid one of these kinds of degenerate scenarios.

**Brian Christian:** But the one case where things seemed to go according to plan was the idea of what they called a knowledge-seeking agent. This is the idea of an agent motivated to kind of learn as much about the universe as possible. The beautiful thing about the knowledge-seeking agent is that it can’t self deceive. Because if it manipulates its own inputs in any way, well, it’s just cutting off its access to the real world, and that’s where all the surprise and information comes from. So the idea is that the knowledge-seeking agent might be uniquely immune to forms of self-deception, it might be immune to the sort of escapism or retreating into virtual fantasy that other types of agents might have. Now, it doesn’t necessarily mean that it would be safe to build a superintelligent knowledge-seeking agent.

**Robert Wiblin:** Yeah, because one of these might just pull apart the world to like learn everything that it can about it.

**Brian Christian:** Exactly. “What’s in the core of the earth? Let’s find out.” Or “Let’s build the world’s largest telescope by harvesting the entire solar system.” So it’s not necessarily safe per se, but it conforms to this idea of wanting to keep one’s eyes open. Not wanting to self deceive, not wanting to pull this escapist veil over one’s eyes.

**Robert Wiblin:** Yeah. It might do a lot of stuff, and kind of interesting stuff from our point of view.

**Brian Christian:** Interesting stuff. And yeah, not at least fall into some of the potholes, I should say, that some of the other designs might.

**Robert Wiblin:** Yeah. Couldn’t it just hack its own visual input or something and then push random information into it so that it’s constantly surprised? I suppose you would have to be careful about how you specify what knowledge is, I guess. What is actually novelty and what is learning.

**Brian Christian:** Yeah, I remember I talked to Laurent about this paper and I was asking him questions like this. I asked him if the agent might be incentivised to essentially bonk itself on the head and forget everything it knew so that it was easy to relearn and get all the pleasure of re-learning everything for the first time, rather than working out the 20th decimal point in some constant. These are the sorts of things you have to worry about. It’s by no means fool-proof. And as I say, it’s not even necessarily safe, but it does avoid at least some of these kinds of wireheading issues that more conventional kinds of extrinsic reward-based agents can fall into.

### Imitation [01:01:13]

**Robert Wiblin:** Okay, let’s move on to the last third of the book, which is titled “Normativity” and deals with these issues of AI safety and how we move forward to make AIs aligned with human interests more explicitly. The first subsection of that is about imitation. So one way that we might try to get AIs that are very powerful, but continue to behave in ways that we like them to, would be to try to get them to kind of imitate how we behave or just learn from us directly, for example. How has that approach gone so far? Because quite a few people have worked on that idea.

**Brian Christian:** Yeah. So this is a very intuitive idea, and this starts to get us into what you and I foreshadowed in our discussion of reinforcement learning, which is if it’s unsafe to manually build a reward function, how else might we try to instill the behaviour that we want? And so the simplest approach is just to say, “Do what I do.” And this has a surprising history going back to the early nineties, when a student named Dean Pomerleau at Carnegie Mellon taught a car to steer in the lanes of the highway, through this method of imitation, like notice the lane markings on the road and do what I do, just pay attention.

**Robert Wiblin:** When you see similar lane markings.

**Brian Christian:** Exactly. Just move the wheel the way I move the wheel when I see that sort of thing. And amazingly, for the early nineties, he ran this neural network. It was like 30 by 30 pixel input, running on a computer that had one-tenth of the processing power of a first-generation Apple watch. And he was able to drive the highway between Pittsburgh and Lake Erie for two hours without having to intervene.

**Robert Wiblin:** Did he get permission to go on the road with this thing? I couldn’t believe it. I was like, something’s gone wrong here.

**Brian Christian:** I think it was more of a ‘better to ask forgiveness than permission’ situation. This was around sunrise on a Sunday. So he picked a time where there would be few people on the road and the car he was using was a Hummer because they had some DARPA contract. So he sort of figured—

**Robert Wiblin:** A Hummer is very big, right?

**Brian Christian:** Yeah. This giant sort of military vehicle. So I guess the idea being, if you see this giant military vehicle at six in the morning, on a Sunday, you just kind of leave it alone.

**Robert Wiblin:** Yeah. Interesting. Ask for forgiveness, not permission. I like that saying in general, but I’m not sure whether it does entirely apply to fatal traffic accidents. Anyway, things went well.

**Brian Christian:** I’m not sure it applies to… Yeah. AI safety research in general. No, I agree.

**Robert Wiblin:** But things worked out. The interesting thing is that this car that was so basic in its training and so basic in its hardware capacity was able to drive safely on this road.

**Brian Christian:** Yeah. There’s some important caveats, like it was not doing the gas or the brakes. It was not doing lane changing. It was just steering between the dotted lines, but still, for 1990 or 1991 or something, I mean, yeah. He was courageous to be the human test pilot and it shows the power of this approach. That it’s really hard to develop representations of 3D space and model the dynamics of the car, blah, blah, blah. But if you just do what I do in the situation, that gets you pretty far.

**Brian Christian:** And so fast forward to the present, every Tesla has something that Tesla calls ‘shadow mode,’ which is basically kind of a rebranding of the same idea, which is to say, every Tesla with autopilot hardware above a certain level, even when you turn the autopilot off, the computer is still calculating what it would do if it were driving the car and constantly comparing that.

**Robert Wiblin:** So it’s learning from your example?

**Brian Christian:** Yes.

**Robert Wiblin:** Wow. That’s really interesting. So it has cameras, it’s just running this thing, constantly figuring out, learning from you how you drive and then I guess the autopilot updates and then drives more like you would?

**Brian Christian:** I don’t know that it’s personalised in that way. My guess is that it sends these giant batches from a number of different cars back to Tesla HQ and they sort of throw them all together into one update. There’s also this—

**Robert Wiblin:** Yeah that seems safer.

**Brian Christian:** Yeah, they do have to figure out how to automatically identify bad drivers and exclude them from the training data.

**Robert Wiblin:** Yeah I was going to say, you could end up with this, I guess, you know how people say that people end up resembling their pets, you could end up with a terrible driver whose autopilot ends up resembling its awful driving style. I’m glad they kind of average it out.

**Brian Christian:** Yeah. And so there’s a funny…it’s not exactly a chicken and egg problem, but you have this thing of, if you had a formal model of what good driving looked like, then the problem would already be solved. So how do you identify bad drivers knowing that you don’t exactly know what good driving is? You could probably say, okay, this person’s a statistical outlier. We’ll toss them out.

**Robert Wiblin:** They’re either James Bond or really bad at driving.

**Brian Christian:** Right.

**Robert Wiblin:** Okay. Before we get to maybe where the technology has advanced to today, this approach, while cool in some ways, also had massive problems and failed pretty quickly in real life. So can you explain why that is?

**Brian Christian:** Yeah. So this gets back to what you and I were talking about earlier, in the context of how reinforcement learning is more difficult than supervised learning. So the key thing here is that in a reinforcement learning setting, the action that you take influences the future data that you will see. So this turns out to be the real Achilles’ heel of imitation learning. Because if the imitator is not perfect, then it will make some error, however subtle. But that error will result in it seeing something that’s slightly different from whatever it might have seen when it was following your example.

**Robert Wiblin:** It takes it outside of the training set.

**Brian Christian:** Exactly right. And so there is this real stability issue. It’s known in the field as ‘cascading errors,’ where once you make your first mistake, all bets are off because now, let’s say you slightly misjudge a curve or something on the road. Now your car is angled weirdly, and it’s never seen what a human driver would do when the road is angled weirdly relative to the car—

**Robert Wiblin:** Because a human wouldn’t have done that.

**Brian Christian:** A human wouldn’t have made that mistake. And so it has no idea how to recover. So this is the kind of dangerous aspect of imitation learning. You walk this this golden path, but if you step off—

**Robert Wiblin:** Catastrophic failure.

**Brian Christian:** Exactly.

**Robert Wiblin:** Yeah. But there’s an amazing way to solve this, which I guess it’s kind of intuitive in retrospect. And apparently, if I remember correctly, you can fix this issue with very few hours of training, where you do this mix thing where the AI is driving the car, according to what it’s learned or using this imitation thing initially, but the car is sometimes controlled by the AI and sometimes controlled by a person who’s correcting it. So you’ve got a thing where the AI will make this problem where it deviates somewhat and then deviates a lot. But then the person, as that’s happening, will show what they would have done in the messy situation that the AI has now gotten itself into. And then very quickly, it learns how to recover.

**Brian Christian:** That’s exactly it.

**Robert Wiblin:** Because now it’s getting out of some odd situations in its data and it can figure out how to respond to all of those.

**Brian Christian:** Yeah. You’re exactly right. You described it perfectly. So this is called dataset aggregation or DAgger for short. It was developed at Carnegie Mellon by Stéphane Ross, who’s now at Waymo, and his advisor Drew Bagnell. And yeah, the idea is that you stochastically trade off control of the car. There’s this funny thing where, as the car becomes a better and better imitator of the way that you drive, you’re stochastically in control of the car for less and less of the time. But you pass through this intermediate period where you’re not sure if you’re driving or not because it’s really good at driving the way you would drive.

**Robert Wiblin:** That’s interesting. There’s an even simpler method of solving this problem that’s almost embarrassing to describe, at least with cars, I don’t know whether it will generalise, where you put a camera on the front of the car, a camera facing a bit to the left, a camera facing a bit to the right. So the camera on the front is given the normal instruction. The camera that faces left, basically, it says, whenever you see this, turn right. The camera on the right, it says, whenever you see this image, turn left. And then you’ve solved the problem.

**Brian Christian:** Exactly.

**Robert Wiblin:** I’m not sure whether that would generalise. So all kinds of problems in life, just angle the camera differently.

**Brian Christian:** Right. Not all environments have such obvious data feeds of what things would look like if you were screwing up. So the car pointed slightly off to the side is a lovely example. People have done this in other environments. There’s a paper where they had a hiker… It was a Swiss group. They had a hiker hiking this trail in the Alps and he had a GoPro strapped to the front of his head and then two GoPros next to it at either angle and it was the same thing that you’re describing. And they were able to get a quadcopter to sort of imitate his hiking through this trail.

**Robert Wiblin:** So another kind of failure mode of imitation is over-imitation. Can you talk about that?

**Brian Christian:** Yeah. Over-imitation is interesting. This comes out in the cognitive science literature. One thing to point out is just, we have a lot of evidence from evolution that imitation learning is a big part of the human alignment strategy, so to speak. We’ve known since the seventies that babies are capable of imitating adult facial expressions within something like 45 minutes of being born, which is amazing because they’ve never seen themselves in a mirror yet. And so they don’t even know what they look like. They’re doing this cross-modal matching of how their face feels to how your face looks. So there’s a lot of evidence that this is just utterly hardwired. But, children have this funny thing that’s been known as over-imitation.

**Brian Christian:** There’s a study that used these acrylic boxes, these plastic boxes that had two different latches on them, and you would see the demonstrator opening one latch and then they opened the other latch and then they got some food or something. Now there’s two conditions. There’s one where the box is kind of opaque black. And then there’s another where the box is clear. When the box is clear, you can see for yourself that the first latch has no causal effect whatsoever. It’s not connected to anything. It doesn’t touch any other thing. It’s just sitting there off to the side.

**Brian Christian:** Now what happens when you do this experiment with chimpanzees is the chimpanzee in the clear box case is smart enough to know that the first thing you do has no effect. And so they only do the second part and get the food. But human children, circa age three, will imitate both parts of your behaviour, even when they can see for themselves that the first part had no effect. So this is called over-imitation. There are many questions here. You could say, well, maybe the kid just can’t tell that the first part is silly. But if you ask the kid, “Which part is silly and which part is the real part?” they can tell you. If you tell them explicitly, “Don’t reproduce the silly part,” they’ll still over-imitate—even though they can identify that it has no causal effects. So this was a bit of a riddle. People thought, well, maybe it’s just one of these cases where human development is slower than primate development.

**Robert Wiblin:** But not so.

**Brian Christian:** Yeah, not quite. So they swapped out the three year olds for five year olds, and the five year olds were even worse. So this is a very big mystery. And to make a long story short, it turns out that what seems on the surface like the human kids being dumber than the chimpanzees is actually them operating at one theory of mind level beyond the chimpanzee. So the chimpanzee sees this clear box, and it thinks, “The demonstrator is doing something pointless and stupid. I’m not going to do it. I’m just going to do the important part.” But the human has theory of mind. And so they realise that the demonstrator is showing them this thing on purpose. They know that the demonstrator knows that they can see that the action is pointless. So why would the demonstrator be demonstrating a pointless action unless there was some deeper reason behind it? That’s in fact what’s going on with the kids.

**Brian Christian:** So this has revealed that even in what seems like mere mimicry, there is actually this pretty complicated theory of mind happening behind the scenes.

**Robert Wiblin:** Yeah. One way they helped to figure this out is, if the person did an unnecessary action for another identifiable reason, like say they were injured perhaps and then they had to work around an injury in order to do it and that required them to do some extra action that the child doesn’t have to, then the child won’t copy that, because then they have an alternative explanation for why they’ve done this thing.

**Brian Christian:** Exactly.

**Robert Wiblin:** But if there isn’t an alternative explanation, then they just copy it. Even if they can’t explain why it’s useful. Yeah. This reminded me of this book _The Secret of our Success_ by Joseph Heinrich. He explains cultural evolution in human history, going back to hunter-gatherer ancestors. And he ends up justifying, or doing apologetics for people just copying, even if they can’t understand what’s going on — because although naive copying and not questioning tradition can really lead you astray and cause you to do stupid and unnecessary things, there’s just so many examples in anthropology or among people who have studied cultural evolution where you do much better just to imitate, even if you think the thing is stupid, than you do if you think for yourself. Because the reason why there’s some extra step is just completely not obvious to you. But if you drop it, then you’ll e.g. die five years later because you didn’t cook the food the right way and you didn’t realise it at the time. So it’s something that looks very stupid, but potentially it can be more intelligent than the alternative.

**Brian Christian:** That’s really interesting. Yeah. And I think it points to the fact that human priors are pretty well tuned. They fail in this particular case only because it’s a laboratory study and the demonstrator is deliberately doing something pointless essentially to trick them.

**Robert Wiblin:** Yeah. It’s an out-of-sample experience, because this isn’t typical life.

**Brian Christian:** Exactly.

**Robert Wiblin:** So it seems like tradition is obviously far more valuable in a world that’s more stable. So our ancestors learned to follow tradition because the world was largely the same from one generation to the next; things weren’t changing very much. So if something was a tradition, it was probably useful. That’s why it existed. But in the modern world, things are changing so quickly that tradition is more often just an artifact of something that was previously useful, or something that seems completely random now, and we can usually dispense with it.

**Robert Wiblin:** But if we went back to a more stable world, then we would want to have this tendency to just mimic our elders and to learn from them even if we can’t explain their actions, which is kind of an interesting phenomenon.

**Brian Christian:** I think that’s a great point. I think that highlights a connection between some of these ideas and the sort of fairness/bias literature in machine learning, where by default you can think of supervised learning as imitating whatever process created the training data. If you’re at a company that is trying to hire engineers that are more diverse than the engineers that you hired in the nineties, then you don’t want to use a resume-screening tool trained on the nineties data, because it’s going to by default reproduce those things. And so yeah, to your point, imitation is less viable in a world that’s changing and it’s also less viable in a world—

**Robert Wiblin:** That you want to change.

**Brian Christian:** That you want to change. Exactly right. Yeah.

**Robert Wiblin:** So what was the main design change going from AlphaGo to AlphaGo Zero? These are, I guess, two different AIs developed by DeepMind to try to play games like Go and Chess and I guess potentially computer games as well. But there was an evolution that allowed AlphaGo Zero to be far better at this.

**Brian Christian:** Yeah. This is very interesting. So there are kind of two different neural networks within both AlphaGo and AlphaGo Zero. One is the policy network and one is the value network. The value network says, “For any given position on the board, how likely do I think I am to win?” The policy network says, “For every given position on the board, which moves suggest themselves to me as being promising?” So you can think of this as sort of spidey sense and muscle memory, roughly speaking.

**Brian Christian:** For the original AlphaGo, the policy network was trained by supervised learning, so this implicit imitation of human master games. They had a giant database of something like 50 million different Go positions that had been played by human players above a certain skill level, and they just said, “Here’s the position on the board, what move do you think the human played?” And they train the neural network to maximise its probability of picking the right answer. This became the policy network for AlphaGo. So you had this funny chimera where AlphaGo, the original AlphaGo, figured out its value network essentially for itself, but its policy network, which was kind of surfacing which moves to explore or consider, was this fundamentally imitative process that was trained on this database of human games.

**Brian Christian:** Fast forward to AlphaGo Zero, which essentially learned the entire kit and caboodle from scratch. Not only did that allow it to transcend perceived wisdom and find things that human players didn’t think to do, it worked in a very, very specific way through a process that is sometimes known as ‘iterated distillation and amplification.’ (See here and here.) So the basic idea is you have this policy network that suggests which moves — just from a first impression — which moves seem good, seem interesting. And it uses that initial impression to explore those moves in a more deliberate Monte Carlo tree search. “Okay. If I play this, then they play that. Then I go here, they go there. Then what happens?” At the end of this giant tree search of exploring tens of thousands or hundreds of thousands of positions, it backs up all of that information and makes an ultimate decision about what move it will play.

**Brian Christian:** So there’s this very kind of surreal ‘hall of mirrors’ thing, which is that rather than training the policy network on a database of human games, the policy network was trained based on the decisions that AlphaGo Zero itself made as a result of doing this tree search. So it was essentially trying to predict the results of its own deliberative reasoning, but then as its predictions improved, its ability to search more effectively would improve and the program would get even stronger. So you get this kind of feedback loop.

**Robert Wiblin:** Yeah. It’s going back and forth between having an intuition about positions and what moves look plausible and then analysing those that look most plausible and getting even better at figuring out among even those that look good, which ones are truly best. And then back and forth and back and forth, I guess, for millions and millions and millions of games, and then you really have a superhuman AI at Chess or Go.

**Brian Christian:** Yeah. I find it philosophically kind of wonderful that it trains by attempting to imitate itself, in effect.

**Robert Wiblin:** Yeah. I guess it’s kind of imitating it at low cost. It’s trying to do it like, “What if I only can look at this for a few seconds, can I guess what I’m going to do after I thought about it for longer?”

**Brian Christian:** Exactly. It’s quite cool.

### Inference [01:20:19]

**Robert Wiblin:** Okay. The next subsection is about inference. So I guess, one way that you might think that we can get AIs to do what we want in a more sophisticated way than just imitating exactly what we’re doing is trying to teach them to figure out, to infer what our intentions are and our goals are, and then they can imitate us in a more sophisticated way, not just copying our actions, but kind of copying our intentions and maybe figuring out even better ways of acting to achieve our intentions. Can you talk about that?

**Brian Christian:** Yeah. So again, this is another area that has these very deep connections to cognitive science and what we know about infants. For example, we began to learn as recently as the 2000s that if you attempt to do a physical action — say you’re reaching for a clothes pin, but it’s out of reach, or you’re trying to move through a doorway, but it’s too narrow, or you’re trying to put something away, but you don’t have a free hand to open the cabinet, or whatever — children as young as, I want to say, 18 months, can figure out what you’re trying to do based on your behaviour and will spontaneously walk over and help you. They’ll pick the item up off the floor and hand it to you. They’ll open the cabinet door for you. And I think this is very remarkable because this capacity develops multiple years before theory of mind.

**Brian Christian:** So a child can’t even understand that you’re sensorily perceiving something that’s different to what it’s perceiving. It doesn’t know that you believe things that are different to what it believes. But it can still figure out that you want something, and it can try to help you. So I think that’s very remarkable. It’s a very deeply rooted capacity. So this is another one of these areas where we’re trying to do something like that to get human normativity into machines.

**Brian Christian:** This is broadly known as inverse reinforcement learning. The reason it’s inverse is that reinforcement learning is about, given some reward, some scheme for assigning points in an environment, how do you develop a behaviour to maximise those points? Inverse reinforcement learning goes the other way. It says, given some behaviour that you’re observing, which is presumably maximising some points, what are the points that it’s maximising?

**Robert Wiblin:** Yeah. Interesting. So are these learning systems good at figuring out what is being maximised?

**Brian Christian:** It sort of varies based on the environment. There are certainly cases, if you think about driving for example, there was a very early study that Pieter Abbeel and Andrew Ng did at Stanford in a very simplified driving simulator. The basic idea is that learning by imitation could be quite difficult in an environment where there are a lot of other cars on the road. You need to pass cars, you need to merge safely, etc. There are a huge number of scenarios to consider and to imitate from, and that might actually be kind of impractical to hope that you could get all of that data.

**Brian Christian:** On the other hand, the actual reward function, so to speak, of a driver is pretty simple. Paramount is, don’t crash, don’t hit stuff, stay far away from other things. Number two, go forward, go the speed limit, stay to the right unless you’re passing, that kind of thing. It’s a lot more concise and parsimonious to express the goal of the driver than it is to map the inputs to outputs at that level. And so some early experiments — this goes back to the mid aughts — seem to suggest that this was promising. By the late aughts, we were doing this with actual physical systems. So famously, the Stanford helicopter could do these elaborate helicopter stunts in real life, just by watching a human radio-controlled helicopter pilot attempting stunts. And then through inverse reinforcement learning, it could figure out, “Oh, you’re trying to do this and that.” And so even if you couldn’t pull off the trick, it would still figure out what you were trying to do and it could execute the trick better than you yourself could. So this was extremely encouraging.

**Robert Wiblin:** Yeah. So I guess it can learn to do things that we can’t do or can learn interestingly from our intent to do things that we’re not doing. I guess it also sounded like, in some scenarios, maybe many scenarios, it’s actually a faster way for it to learn to do things, rather than learn the behaviour. To back out what the goal must have been, because that might be more parsimonious. It’s a simpler thing to explain what you’re trying to do then to explain all of the ways that you might try to do it.

**Brian Christian:** That’s right. Yeah. Imagine soccer, for example. Saying, “We just want to put the ball through the net,” versus, “We need to coordinate and pass and…” whatever.

**Robert Wiblin:** If you’re doing it with visual input, I guess, you have to think about every possible visual configuration or every way that you could abstract away from the position and then figure out what you would do in that situation. That’s vastly, vastly more complex than just saying stick the ball in the goal.

**Brian Christian:** Right. And so in many cases, right. We just want to let the system do that optimisation itself. There are times, of course, when imitation can put an agent on the right track. And that’s helpful, but yeah, as you say, often our goals are simpler than our actions.

**Robert Wiblin:** Yeah. So I guess, when you’re using inverse reinforcement learning, you also have to then have the normal reinforcement learning. So you do the inverse thing to figure… Back out the goal. And then I guess you do it the other way and then you do it back and then so on, like in a kind of cycle, right?

**Brian Christian:** It’s not really a cycle per se, but it is a two-stage thing. So first, figure out the goal, then figure out the behaviour that gets the goal.

**Robert Wiblin:** Okay. Yeah. So I guess Jan Leike and Dario Amodei and Paul Christiano are all people who have been guests on this show. They did a collaboration back in 2017 on inverse reinforcement learning, and they’ve got a paper that we’ll link to. Do you know how excited the field is about inverse reinforcement learning as a way of aligning AI with complex values today?

**Brian Christian:** Yeah. I think this is really one of the major thrusts of AI safety research. So Stuart Russell’s group at the Center for Human Compatible AI, where I’m myself an Affiliate, that is one of the staple techniques that his group is interested in. Jan Leike, who has now just recently moved from DeepMind to Open AI, as you mentioned, reward modeling is kind of the cornerstone of his philosophy about how we’re going to get general intelligence systems aligned. So what we’re seeing is this move from simpler domains like, okay, we want to do a loop-the-loop in a helicopter so we can represent the reward in the terms of, are you upside down? Are you going up or down? Are you not crashing? Whatever. That’s pretty simple. You can model the helicopter using a couple dozen parameters like orientation, velocity, and so forth.

**Brian Christian:** And then the hard part is how do you actually optimise the controls to pull it off? But that’s what classic RL does. So we just let it work. It’s a lot harder to think about a modern setting, like a big language model and what a human wants is the language model to summarise a text. So how do you parametrise what’s a summary? How do you exactly represent that numerically? So this has been kind of the current frontier. But as you mentioned, I think it’s worth highlighting the stepping stone paper from 2017 because I really do see that as kind of a key link between some of this classic work with helicopters and so forth and the modern kind of alignment work.

**Brian Christian:** So, this 2017 paper, the basic idea here was, how do you do something like inverse reinforcement learning in a setting where you can’t directly provide demonstrations because you don’t know how to do the action yourself? You may not even know how to do it on a controller, in a virtual environment, and you don’t know how to specify it in terms of some hand-coded reward function, but you would know it if you saw it. So the famous example that they used was this virtual robot doing backflips in a virtual environment. It’s hard for a human to do a backflip. Most of us can’t. I certainly can’t. It would be hard to control all of the different joints of the robot on a controller to make it do the thing, and most people wouldn’t know how to do that. It’s hard to describe a backflip numerically in terms of the torque and the momentum and all these things. But if you saw one, you would know it instantly.

**Brian Christian:** So the idea here was that there would be kind of a… This goes back to this question of iteration and feedback. The idea was the program would initially have this blank slate of, “I have no idea what the human wants me to do. So I’m just going to wriggle around randomly and we’ll show the user these two video clips and say, which one looks like the kind of wriggling that you want?” It may be difficult, but if you can identify well this wriggling is at least going somewhat clockwise. So that’s infinitesimally closer to a backflip, I guess. Then it will say, “Okay, well I know that you preferred X to Y. So let me make some inferences about what I think the reward that you have in mind might be. And then I’ll try to optimise that. And I’ll show you two new video clips.”

**Brian Christian:** If you do this process 900 times — which sounds like a lot, it takes about an hour, but 900 bits of information is not very much — by the end of that hour, the program is doing these beautiful gymnastic backflips and sticking the landing. So I see that as a very, very encouraging waypoint in this project of alignment, that here’s a case where there’s something that we want, in this case, it’s kind of an aesthetic desire, an aesthetic preference. We can’t demonstrate it. We can’t operationalise it, but we can still impart that into the machine, through this process of comparing these different videos A and B.

**Robert Wiblin:** Yeah. It would be ideal if we could just generalise this method and teach a general AI what helpfulness is, what helping someone get what they want is. That would be optimal because then it would be a very general kind of virtue or concept they would understand and then be able to apply more broadly. But I’m guessing that helpfulness is a much more complicated concept than a backflip. And so it just may not be possible to teach using this method perhaps, or it would just require an impossibly large amount of data or too many examples and too many different situations to produce a behaviour or a virtue like that.

**Brian Christian:** Yeah. There is this really optimistic feeling that I get from that paper, but I’m not kidding myself about the practical aspects of actually trying to scale that up and saying like, “Here are two simulated front pages of the New York Times from the year 2030, which one portrays a happier world?” It’s not so simple. So there’s a lot to be done.

**Robert Wiblin:** I don’t know. I guess you could imagine that might be one piece of a broader puzzle, would be you’re trying to predict what outcomes do people like at a broad social level, but I don’t know. Yeah. It also gives me the willies to imagine it, deeply understand how we want society to look using that method.

**Brian Christian:** Yeah. The funny thing is we’re starting to see some of these techniques actually make their way out of the whiteboards of places like Open AI and UC Berkeley and into actual tech companies. So I know for example, a lot of the Berkeley PhD students have been collaborating, doing summer internships at places like Twitter, for example.

**Robert Wiblin:** What services are they using it for? To train an AI to do what kind of thing?

**Brian Christian:** So for example, if you’re Twitter, you have some notification delivery system and you can track the way that people engage. Do they tap the notification? When they do, how long do they look at the tweet? Do they immediately close the app? Do they like it, retweet it? Do they hit the button that says “Don’t show me anything like this, I don’t like that.” So you can build this kind of causal model of the different sorts of flow charts of interactions that the user can have. It’s very hard to specify in an operational way that e.g. this is what healthy behaviour looks like, this exact ratio of comments to reshares to likes to whatever. So you can use something in this kind of IRL family to just say, okay, we know that when a user uninstalls Twitter, that’s bad. We know that when they hit the button that says, “I didn’t want to see this, don’t show me stuff like that,” that’s bad. But the concrete feedback that we have is pretty sparse. And so what we want to do is actually back away from that. What are the patterns of user engagement that appear to be kind of leading indicators of the more sparse, but more sort of ground-truth feedback?

**Brian Christian:** And then we have some complicated IRL system that tells us, okay, this is the type of pattern of behaviour that seems good versus seems bad. You can directly optimise notification delivery for that operational definition without necessarily ever really popping the hood and knowing how you’ve operationalised it.

**Robert Wiblin:** This goes very naturally to my next question, which is, you described a scenario where an inverse reinforcement learning system would learn that for an alcoholic, one of their goals is to drink lots of alcohol. And I think this actually does happen, say with advertising algorithms. It figured out that this person buys a lot of alcohol, so it’ll advertise them alcohol constantly wherever they go on the internet, on Facebook, on Twitter, on other websites. And I guess it just speaks to the complexity of human values or ways that our behaviour might not really match our deeper values or how our values can be intentioned.

**Robert Wiblin:** I guess, you suggest that we might want to have rules that allow people to inspect the imputed values that some system has figured out that we hold and then say, no, actually this is a misunderstanding. I actually don’t want to drink alcohol. I’m trying to drink less. Because we are not in fact able to always operationalise our values to the maximum degree in real life, and so you can learn the wrong lesson.

**Brian Christian:** Yeah. I think this is extremely important. We are very much living through an era of recommendation algorithms that, whether they explicitly use something like IRL or not, have that flavor of, “I’ve seen the sorts of things that you engage with and here’s what I think you want. So I’m going to give you what you seem to want.” And yeah, the alcohol example is not hypothetical. I know someone in my life who has an alcohol addiction and they have talked to me about, “Oh my God, Instagram or whatever app has figured out that when this stuff is on the screen, I stare at it.” And this is incidentally something I think people don’t appreciate. People know that their clicks are being tracked by these apps, but just the number of milliseconds that an image is on the screen is being recorded. So if you just slightly linger as you scroll through your feed, that’s—

**Robert Wiblin:** It knows.

**Brian Christian:** It knows. So yeah, it really is this panopticon thing and I think there’s a real problem here, which is that, we know that humans, to borrow Daniel Kahneman’s phrase, we have System 1 and System 2, we think fast and slow. And yeah, again, to use an addiction analogy, someone may not be able to avoid having a drink if there’s a drink in their fridge, but they can pour out all the alcohol in their house and not give themselves the temptation. And so how do we think about these second-order desires or the ways in which people not only reflexively react to a scenario, but they actually sculpt the types of scenarios that they encounter? I think we don’t really have good formal models for that yet. And for me, there’s a little bit of a dangerous period where we can optimise really well for this impoverished model of what people want.

**Robert Wiblin:** Yeah. For our base instincts.

**Brian Christian:** Exactly.

### Uncertainty [01:36:05]

**Robert Wiblin:** Okay. The final section of the book is a different approach that we could use to try to get AIs to not do dangerous things, which is trying to get them to be uncertain about what actions would be good, to be nervous before they have impacts on the world. The hope is that would cause them to become corrigible, is I guess the jargon for this, but it means being willing to be turned off, or being willing to be corrected because they’ve made a mistake. So it’s correctable, I guess. Why are the existing traditional systems maybe overconfident and resistant to correction, or being turned off?

**Brian Christian:** Yeah, by definition a normal agent that has some reward function, there’s no articulation that that reward function might be wrong. And so anything that gets between it and getting those points is just an obstacle to be avoided. So there’s no difference between the hand of the actual designer of the system coming in and saying, “No, no, no, don’t grab that, don’t do this, I’m going to turn you off,” or whatever it might be. That’s just part of the environment that’s getting between it and what it wants.

**Brian Christian:** And so people like Stuart Russell and others have been thinking about how we can incorporate some notion of uncertainty or doubt, or the idea that the agent thinks it knows what it’s supposed to do, but it may be wrong. And so that turns out to, I think, be one of the key pieces of this puzzle, is leaving a little bit of the reward function sort of ajar, so to speak, such that if you come in and say, “Whoa, whoa, whoa, don’t do that,” it is receptive to that feedback, or open to modifying its notion of what it’s supposed to be doing.

**Robert Wiblin:** Yeah, you have this quite nice memorable explanation of… So a traditional ML system, or a neural network that’s designed to recognise images — like hot dog, not hot dog — a system like that has no ability to tell… So it will say 90% probability that this is a hot dog, but it doesn’t have a way of giving a deeper uncertainty, saying like, “This one was more confusing and weird, and maybe the 90% is wrong.” They don’t have a system for understanding uncertainty in the way that humans do. But there’s this beautiful way that you can get them to tell you in effect how uncertain they are, which is that you take this neural net and chop off 10% of it, or chop off 20% of it, and then see if that changes the answer, or we’ll see whether it changes the assessed probability that an image is one thing or another.

**Robert Wiblin:** And then if it doesn’t matter which 10% you take away, it just spits out the same answer all the time, then you have a really robust system and the answer is that you can be more confident that the answer is right. But if just tinkering with it a little bit, like chopping out some pieces here and there, causes the answer to just flip around crazily, then that’s a sign that in fact that the process is really uncertain and unstable.

**Brian Christian:** That’s exactly right. Yeah, so this idea is called ‘dropout uncertainty,’ and it goes to the researchers Yarin Gal at Oxford and Zoubin Ghahramani at Cambridge. And this was a really beautiful idea because the method that you’re describing of just deactivating part of the network, this had been — for many years, going back to I think 2014, if not earlier…actually no, earlier than that — was part of the deep learning toolkit, a way to get robust training. You would just turn some of the network off with every training example, and so you would kind of create this robustness in the network because it would have to work even if certain parts of it weren’t acting. And it turns out that if you leave this process running when the system is actually deployed, then you get this stochasticity exactly as you’re describing, and you can use that to measure uncertainty.

**Brian Christian:** And I think about that in the context of, there was the Uber self-driving car that killed the pedestrian in 2018, and I read the National Transportation Safety Board report on that accident. And there were many things going on there, but one of them was that the woman was walking a bicycle across the street, and the object recognition system had these different categories: One category was cyclist, one category was pedestrian. And it kept essentially flickering between these two categories. It was like, “Okay, I see the bike frame and the tires, but no, she’s not riding it, she’s walking on the ground so maybe it’s a pedestrian.” And the category label was flipping back and forth tens of times per second. And this is part of what contributed to the crash, because it kept essentially recomputing her probable trajectory from scratch every time it would change the category.

**Brian Christian:** And I think, as you’re saying, most people in that situation, the mere fact that they weren’t certain, or the mere fact that their guess kept changing, that is already very powerful evidence that you should tap the brakes.

**Robert Wiblin:** Huge red flag.

**Brian Christian:** Huge red flag. And I think it’s increasingly being recognised that this is an intrinsic part of building safe AI systems.

**Robert Wiblin:** Yeah, I remember that case. I think my first reaction was, it’s unfortunate that people are getting so het up about this because I expect that AI-driven cars are going to be safer in the long term, and you can imagine this thing where people are so much more appalled by a traffic accident that’s caused by an AI gone astray than just one that’s caused by humans, and so people might be giving it too much attention relative to its importance, just because it’s a novel way for someone to die on the road, even though that should be looked at in comparison to the many, many people who die in the normal way all the time on the road. Then I remember reading about how exactly it happened and how basic the error was in this system. And I was like, wait this was like amateur hour, I can’t believe these cars are on the road! How are they licensed to drive? Because they were so much less sophisticated than I had guessed that they would have to be in order to be able to get out on the street and function at all.

**Brian Christian:** Yeah, there were so many different intersecting issues, and one of them was that Uber used to have two safety people in every car, but they cut it down to one, that one person was apparently distracted. Also the training data didn’t have, as far as I understand, examples of jaywalking in it. So all of the pedestrians in the training data were crossing at intersections, crossing at crosswalks. And so the system was just unprepared to encounter a person outside of that context.

**Robert Wiblin:** Yeah. I mean, I would have thought, for example, that these cars would have had a scanner on their roof that would warn it that there’s a thing on the middle of the road that it’s about to hit, and that it should slow down so it doesn’t hit the thing that it’s about to run into. But I’ll link to this Ars Technica article that explains why they don’t have this system. Apparently it leads to unstable behaviour where they can suddenly start and stop because they’ll be very concerned about running into things. So when they’re at speed, it’s incredible, but they don’t have a system that’s telling them to stop running into things, which is why, as I understand, this car just plowed into this person at full speed; it had taken no aversive action. But yeah, it shows the complexity of the problem, I guess, from one perspective, or maybe that things weren’t as advanced as we might’ve hoped.

**Brian Christian:** Yeah, I think it’s a little bit of all of that. And there’s this further irony too which is that modern cars, I mean, it’s almost impossible to buy a car in 2020 or 2021, whatever, without it having some rudimentary autopilot system running to do automatic braking, and so forth. And Uber was actually overriding that system because it was interacting with their driving things. So yeah, they had essentially removed one layer of defense, so to speak.

**Brian Christian:** This is one way which, I think, the conversation around fairness/bias/representation in machine learning intersects with these longer-term technical AI safety concerns. Because we’re sort of familiar with the idea of something being underrepresented in a dataset. We’ve seen these catastrophic examples of African Americans being labeled as a gorilla by a commercial photo captioning system, or image recognition not working on women of color in particular. The same thing was happening here — the training data just didn’t reflect the actual demographics, so to speak, of the world. Like that jaywalkers exist in real life.

**Robert Wiblin:** People walk bikes.

**Brian Christian:** People walk bikes, exactly. And so—

**Robert Wiblin:** And in this case the fact that the bike walker isn’t in the data set literally kills them.

**Brian Christian:** Yes. I mean I think this is part of the danger that people worry about when we worry about AI safety, is that we have this model that’s misspecified in some way. It creates this ontology that there are a thousand categories of thing, and everything is in exactly one of those categories, they’re both exhaustive and mutually exclusive, and that’s all the things that can ever exist. And that’s just not true. And so there’s something really haunting, I think, about a model that is powerful enough to essentially enforce the limits of its own understanding. It has this impoverished view of the world, but then it forces the world to conform to that, rather than itself adapting. I think that’s the kind of thing that should keep us up at night, both in the self-driving car contexts, but more generally.

**Robert Wiblin:** And yeah, in more advanced cases as well. Okay, so that was about developing uncertainty about categorisations and uncertainty about situations. So perhaps a system can recognise when it is in an unfamiliar situation in which it should act more cautiously, but I guess there’s also uncertainty about value, uncertainty about what you care about and about whether outcomes are good or bad. What are some ways that people have gone about trying to add that kind of uncertainty to machine decision making, to make them behave more cautiously?

**Brian Christian:** Yeah, one of my favourite examples here, there’s this idea that came out of Berkeley, Dylan Hadfield-Menell and others, called ‘inverse reward design.’ And the basic idea here is that even in a situation where you explicitly give the system a reward function that says “Doing this is worth 100 points, doing this is worth -5 points, have at it,” even in that case, the system should still take that reward function as mere _evidence_ about what you really want, rather than as the word from on high chiseled into stone tablets of what it should really do.

**Brian Christian:** So there should be some kind of inferential process of saying, okay, this is the set of scenarios that the designer of the system had in mind when they created this reward function, but here’s a set of scenarios that are outside of that distribution in which this reward function might do some weird stuff, or there might be some kind of implicit ambiguity that wasn’t important to resolve in this one set of environments, but now we really need to get clear on what exactly you want me to do. So I wouldn’t be surprised to see something like that end up getting baked into models of the future. Even when presented with an explicit kind of operational objective, we’ll still say to you, “Now wait a minute, just to be clear, here’s a situation, I’m not sure what to do, let’s go back to the drawing board for a second.”

**Robert Wiblin:** Yeah, so one benefit that this kind of setup has, where a system is trying to figure out what you value, but it’s always a bit unsure about whether it’s figured it out correctly or not, is that if you go to turn it off, then it’s going to infer from that that it’s made a mistake and that it hasn’t correctly figured out what you value, and it will then guess that you’re turning it off because it’s mistaken — and it’ll be glad to be turned off, because it has an explanation for why that is actually good for its values, which is that it is mistaken. Which in a sense is very simple and obvious, but it’s something that isn’t built into previous designs, or some other designs.

**Brian Christian:** That’s right. And this can get surprisingly delicate, because the system has to model your, as it were, irrationality. So there may be cases where the system overrides you for your own good and that’s the right thing to do. So one example would be you accidentally bump the autopilot disengage button with your elbow when you’re reaching to get a drink out of the cup holder. It’s probably good that the car has some model of, okay, you’re not holding the steering wheel, so I’m pretty sure that this is not really what you want me to do. I think that’s interesting because a lot of the pre-existing horror stories that we have about AGI have that Kubrick aspect of, “Open the pod bay doors, HAL,” “I’m sorry, I can’t do that,” — that sort of disobedience. But in this case you bump the autopilot disengage, and not disengaging probably is correct. So there’s a bit of a tightrope act to be done in terms of figuring out when the AI model of your preferences diverges from your behaviour, how to adjudicate that. It’s not totally simple.

**Robert Wiblin:** Yeah, you said that you were at first incredibly excited by this idea because you’re like, “Oh wow, this could potentially be a solution to so many of the problems that we’ve been talking about,” but then realising that it can fail catastrophically in both directions so easily, both if it’s overconfident that it understands what you want — and then I guess it just goes away and obeys your instructions literally and does all the normal things that we’re familiar with — or alternatively, if it’s not willing to override you, because it actually does know better. As you say, it’s a tightrope.

**Brian Christian:** It is, and this is an area where I think AI safety is increasingly borrowing from cognitive science, that we need formal models of human foibles, so to speak, human irrationality. If you model the human as always doing exactly what they want, then you might end up observing what appears to be a contradiction, and concluding that the humans’ preferences are gibberish, and you don’t want to do that. But the formal models that we have for the relationship between human behaviour and their preferences are pretty rudimentary, and there’s a lot of room there for basically… _insert all of cognitive science here_ , in terms of what is the mapping between what people want and how they behave.

**Robert Wiblin:** Yeah, I feel sorry for the AI systems, because we have such an easier time understanding humans because we _are_ humans.

**Brian Christian:** That’s true.

**Robert Wiblin:** A different way of trying to build in caution and uncertainty is just trying to directly give these systems a preference for not changing the world, so they want to do the minimum thing that will achieve their goal with as few side effects, so to speak, as possible. But I guess it turns out that people who’ve studied this have found out that it’s remarkably hard to make the notion of avoiding having impacts on the world philosophically concrete and programmable. Could you just hit on some of the ways that people have tried to operationalise that, and how it hasn’t always gone super smoothly?

**Brian Christian:** Yeah, so uncertainty, I think, ties very intuitively to this notion of impact. The higher the impact of the action you’re about to take, the more certain you ought to be before taking it. I think that’s an intuition that kind of bears out. You see this idea in medical ethics, the idea of not taking the irreversible action when you’re uncertain, you see it in legal ethics, the idea of preliminary injunctive actions, stopping an irreparable harm, things like that. And so there’s been a lot of interest in computer science for the same reason. How do we formalise the impact that an action is going to have? And it’s very difficult. There are some jokes within the AI safety community about, you ask an AI system to cure cancer, which it does, but then it kills the patient anyway so that the ‘impact’ of making the cure is minimised.

**Robert Wiblin:** Yeah.

**Brian Christian:** Because the patient has to die in the counterfactual, just the same way that they did in real life. So that’s the joke, but it gets to how tricky some of these intuitions really are.

**Robert Wiblin:** Yeah. So we have an intuitive sense for what’s the important stuff that you’re trying to change and categorising side effects, but then giving that intuition to these systems is really hard. You talk about one just brute force approach that’s been suggested, I think by Stuart Armstrong at the Future of Humanity Institute, if I recall correctly.

**Brian Christian:** Yep.

**Robert Wiblin:** It’s to list just millions of things about the world, different things that you can measure, and then say, if you haven’t been explicitly asked to change any of these things, please don’t change them, or have an aversion to changing them. Changing them is negatively rewarded. And then I guess there’s people who’ve been trying to develop these systems that learn caution perhaps because there is some intermediate reward for ensuring that they can always get back to all of those situations that they were previously able to access, so anything they do that creates irreversibility, where they can’t reverse their step, is negatively punished right away.

**Brian Christian:** Yeah, that’s right. So you see this at DeepMind, Victoria Krakovna and Jan Leike and their collaborators had built these, they’re called ‘AI safety gridworlds.’ They’re these toy environments in which we can test out these different models of impact penalties, and different formalisms of AI cautions, so to speak. And one of them is this Sokoban warehouse, where it’s one of these traditional games where you’re pushing boxes around in a warehouse. But you can only push them, you can’t pull them. And so anytime a box ends up in the corner of the room, you could never move it ever again. And so this is an arena in which you can apply the appropriate penalty, and the agent will only put boxes in these unrecoverable positions if that’s necessary to escape the level. But otherwise it will avoid that.

**Brian Christian:** And I think this is another case where the progress in these toy environments is encouraging, but scaling it up to a real-world setting is far from obvious. There’s one approach that I think is pretty interesting that comes from Alex Turner, and it’s this idea that instead of exhaustively enumerating all the things you might care about, you just pick some small number of random reward functions, or some small number of randomised goals in the environment, and you just ask the question of, after I take the action I’m considering, would it still be possible to achieve these randomly generated goals. And at least in these gridworld environments, that actually turns out to be a really good proxy for the sorts of things that we care about, e.g. not shattering the Ming vase, or not running over the cat, or whatever it might be.

**Robert Wiblin:** Yeah.

### Brian’s personal opinions and impressions [01:54:05]

**Robert Wiblin:** Alright. We’ve gone through a lot of the book here, describing the key ideas or the key concepts and takeaways that people may have. For this last third of our conversation, I think I’d be really interested to kind of hear your personal opinions and guesses and impressions on these topics. Maybe even if you can’t fully back them up, and even if they weren’t solid enough to make it into the book. You’re someone who’s semi-technical or reasonably technical enough to understand these things, but not so embedded in it that you’re at the research frontier.

**Robert Wiblin:** You also have like a much broader knowledge about the world, but you’ve spent years interviewing all these people, building up this understanding of how AI works today, what the problems are, what are the attempts to make it safe, and trying to assess how much at risk are we in the real world. So it just seems good to get your overall impressions, as a smart generalist who’s dedicated so much time to this. So how worried are you now, I guess, about AI alignment, AI safety in the future, maybe compared to the median AI researcher?

**Brian Christian:** It’s hard for me to disentangle a kind of psychological bias towards just being an optimistic person from an actual evaluation of what’s happening. From my perspective, there is a lot of evidence that things are going well — in the sense that, as I say, when I started researching this book, which was 2016, “Concrete Problems in AI Safety” had come out, OpenAI had just been founded, the Center for Human-Compatible AI was on its way to being founded, and so we were seeing the early germination of this field.

**Brian Christian:** The first batch of Future of Life Institute research grants had gone out, I think, late 2015, early 2016, something like that. And so that was really the beginning of this process of actually funding and committing to the scientific work. And I think a similar thing has been happening in the present day community focused on fairness/accountability/transparency. That subfield within ML really blew up in 2016. And now there are multiple entire conferences just about that set of issues. We didn’t talk about that part of the book as much, but I think there’s an underappreciated extent to which those issues both inform and are informed by the longer-term AI safety issues.

**Brian Christian:** So the field building part I think is in pretty good shape. There’s a lot of results — I mean, the backflip one being one example — where things that wouldn’t _a priori_ have necessarily worked, did in fact work. The backflip—

**Robert Wiblin:** Could have been a total failure.

**Brian Christian:** Exactly. And that was something that Paul and Jan talked about when doing it. It was like, “We had no expectation that this was actually going to succeed, and it did.” So, I take evidence like that as being encouraging. It’s interesting thinking about this in an early 2021 context, because there’s been a lot of personnel turnover in the AI safety research community. So, I think there’s a question of, how does the commitment to safety research financially sustain itself? Is that going to stay a priority of research grants coming from governments? Is it going to stay a priority of publicly-traded companies? There’s a little bit of uncertainty in terms of the asymptotic… Like what’s the equilibrium of… Is this really part of the priority list, financially?

**Robert Wiblin:** Yeah, there’s been some people who’ve decided to leave OpenAI and I guess continue their AI safety research separately or find their own projects that are independent. I’m looking forward to talking to them and finding out what they’re up to, once they’re ready to talk about it. But are you suggesting that there’s been a lot of progress with people entering the field and with it gaining credibility, but you’re wondering if there will be enough funding from these for-profits or from governments — or I guess philanthropy — to fund all of the necessary research that we need going forward, and for it to happen quickly enough?

**Brian Christian:** Yeah. I mean, I think the progress is real and my concerns are more hypothetical than they are actually looking at what happened over the past five years. I think there’s a certain question of, will safety continue to be a priority for the actual project of making profitable things, of making products. I hope that’s the case, we’ll see. So, I’m going to stay cautiously optimistic there, but I think that is a question.

**Robert Wiblin:** Yeah. I guess one failure mode would be that we’re on the right track and we’re making all this progress and it’s going great, but it’s just too slow, because all of the people are diverted off to things that are really profitable in the short run — like making products that you can sell — and so the safety research lags behind, because it’s not profitable right away. That’s one bad way that things could go. Yeah, does it… How worried are you? Maybe we need to decompose that, because there’s multiple different factors that go into worrying. One would be, you might think that the problem is more or less serious, or the outcomes from AI being misaligned could be worse or not so bad. There’s this question of, are enough people going into it? Is the field that we need to solve that problem growing or not? So kind of an issue of neglectedness.

**Robert Wiblin:** And then also evaluating, how hard is it to solve? So you might’ve, from your research, got the impression that they’re technical problems, totally legitimate, but we’re also just clearly solving them at a good pace. Or, wow, some of these things just seem deeply intractable and we don’t know how to fix them. I think… It sounds like it’s clear that quite a lot of people are going into it, and maybe it seems like we’re making quite a bit of progress, but maybe the third one would be, how bad could the outcomes be if we don’t kind of keep up or put enough work into doing all of this?

**Brian Christian:** Yeah. At the moment, when I think about the sort of bleeding edge of AI/AGI research, I’m thinking about things like GPT-3, which is behind an API. So there’s a certain safety thing there, which is, if OpenAI detected someone using it maliciously, they would just cut that person off. And so that closes down a certain set of possible threats. There is a question of, if someone comes along and says, “Hey, I can design something that achieves GPT-3 level performance on a MacBook Air for a $100 worth of electricity,” then that’s different. So, that’s definitely one question.

**Brian Christian:** I mean, it’s been surprising to me when GPT-2 came out, there was a lot of conversation around publication norms. Should OpenAI release the full model, the one-point-something-billion parameter model? Which is now tiny compared to what they’re working with. But there was this real question of, we’re going to gradually release it because we’re worried that it’s going to fall into the wrong hands, and so forth. Now, maybe I’ve been somehow in the dark and missing this, but I haven’t seen evidence of widespread malicious use, which I myself — and I think many people — were quite worried about. So it’s weird not to see that. And then you of course think, “Well, maybe they’re just being really sneaky about it, and so we don’t know, but that’s because of how good they are.”

**Robert Wiblin:** So you mean malicious use of GPT-2, because that’s more public, whereas GPT-3 is behind this API?

**Brian Christian:** Well, I’m just saying that when GPT-2 came out, there was this question of, oh, is this going to be really dangerous? And then we’ve had more time since that, and there hasn’t been, to my knowledge, any super spooky cautionary tales of that, which I expected there would be by now.

**Robert Wiblin:** Yeah. That’s interesting. I don’t know how many people actually have GPT-2 running on their computers or can access it and use it. It could just be that it isn’t very widely distributed yet. I mean, with GPT-3, there’s multiple different things that we might learn from it. One thing that I think some people have been worried about is the fact that GPT-3 can say things that seem so intelligent and uncannily human. Maybe that shows that intelligence is simpler than we thought, and that mimicking what humans are capable of doing isn’t as hard as we thought. And all you just need is lots of neurons, just like a really big model. And even without amazing algorithms, or even without amazing breakthroughs in the underlying theory of how AI develops, that’s going to be able to replicate what we can do. And that would be like both very cool and also very scary, because then you’re like, “Well, all we need to do is give it more compute, give it more data, and then, potentially, sooner than we thought, we could have something that is generally intelligent.”

**Robert Wiblin:** Another one might be, well, how is GPT-3 specifically going to be put to use? And what risks does that pose? But I’m perhaps more worried about the former lesson, and there, I just don’t know how to analyse that question of like, have we learned something important about intelligence and what humans are doing?

**Brian Christian:** Yeah, I think we have. It’s funny, if you track a lot of the nay-saying that existed circa 2017 or 2018 around AGI, a lot of people would point to things like pronoun resolution, Winograd Schema, things like that, and be like, “Well, call me when AI can do that. Call me when AI can tell me what the word ‘it’ means in such and such a sentence.” And then it’s like, “Okay, well—

**Robert Wiblin:** Well, I guess it can.

**Brian Christian:** … we’re there, so…

**Robert Wiblin:** Can we call you?

**Brian Christian:** … can we call you now?” So I think there’s things like that. I mean, I’m not a neuroscientist, but there’s some neuroscientific evidence that the cortex is just a lot of general purpose stuff that learns by experience, that’s not anatomically… There’s not a lot going on in terms of differentiation. So that gives us a little bit of intuition that something like GPT-3, where it’s just an enormous, mostly kind of undifferentiated block of Transformer, and we just gradient descend our way to everything else… There’s some reasonable evidence from neuroanatomy that that may be largely viable.

**Brian Christian:** I think there’s a question of how to bridge the divide between something like MuZero on the one hand, which builds this world model that allows it to do kind of hypothetical scenario planning in its head, so to speak, and say like, “Okay, if I do this, then the world’s going to start to look like that. But then I can do such and such thing”… That kind of model-based reinforcement learning, combine that with the sort of language model. So I think something like that is going to be the roadmap to AGI, as far as I can see from this point. Now there’s a question of, will something like MuZero just magically shake out of a huge transformer? Will it just optimise its way to building this world model, and being able to run that forward in time and predict things? I’m not sure that we really have an answer to that. So I think that’s a question.

**Brian Christian:** I think we’re also going to hit the limits in my view of the pre-training objective for language models. That these language models are based on this unsupervised objective of essentially filling in the blank in a pre-existing text. And then you can maybe fine tune it a little bit afterwards.

**Robert Wiblin:** You think that might run its course?

**Brian Christian:** I think it will. Yes. Because a lot of what motivates speech is this model-based thing of, I have a model of your understanding in my head, and I want to think about what to say in order to maximally impart information to you, and then I’m getting feedback from you about how good my model of you is. That sort of thing is being built on the fly. I don’t see any really clear way that we get from just fine tuning this pre-trained, unsupervised objective to that. So for me, that’s the current $10,000 question. How do we create a training regime that actually looks a little bit more like why people talk? We don’t merely imagine a text exists and fill it in, we have actual—

**Robert Wiblin:** Underlying concepts that—

**Brian Christian:** —goals.

**Robert Wiblin:** —then generate the speech from the underlying ideas.

**Brian Christian:** Yeah.

**Robert Wiblin:** One thing you say in the closing pages of the book is that you think humanity is in danger of losing control over the course of events, but not so much to AI or machine learning specifically, but rather to models of the world in a more general sense. And I wasn’t completely sure what you meant by that. Is it possible to flesh that out?

**Brian Christian:** Yeah. I mean, I think this springs from some of what we were talking about with the car accident, that there’s something dangerous about a model of the world that is simplified by necessity. There’s this adage in the statistics community by George Box, “All models are wrong, but some are useful.” So, there’s something dangerous, to my mind, about a model that’s wrong, but has the ability to become right by kind of terraforming reality to match the simplifications of the model. We touched on this a little bit — the idea of a car that doesn’t know that jaywalking is a thing, so it kills jaywalkers. And then jaywalking stops becoming a thing. That’s the kind of thing that I have in mind, but I see that as being not exclusively the province of AI.

**Brian Christian:** Think about economic models, for example. In my view, a lot of what’s going wrong in the world right now, if you look at things like climate change, if you look at things like inequality, these are, as far as I’m concerned, alignment problems. We came up with some formal specification of what we wanted our goals to be like as a society, whether it’s to maximise quarterly profits or GDP per capita, or whatever it might be, things which, as in any classic alignment problem situation, correlate to what we really care about…until they don’t.

**Brian Christian:** And so, I remember having conversations with Stuart Russell about this back in 2014, and just saying, “Yeah, I mean, you can sort of think of climate change as this alignment problem. That we had these variables that we didn’t put into the reward function about the sea level and whatever. And in optimising for this particular set of variables, the variables that we didn’t consider blew up.” So in a way, part of my pessimism about things like AI safety is that I see the world’s most pressing macroscale problems as essentially being alignment problems.

**Robert Wiblin:** Well, they’re not exactly the same, but they’re analogous in certain kinds of core respects, and we haven’t managed to solve these other ones, so maybe we won’t solve this one either.

**Brian Christian:** Yeah. I mean, I think they’re maybe more than analogous. It’s like the same thing that happens in reinforcement learning where you operationalise some definition of what you want, it doesn’t perfectly contain everything you care about, but it’s pretty good, and then, you optimise it at your peril, basically. So, I think that’s basically where we’re at as a civilisation. And there’s hope in… And this is a little bit dreamy here, but there’s hope that something like inverse reinforcement learning could help us get out of that trap, to sort of break the tyranny of these KPIs, if you will. If we can just point to, in a very kind of backflip way, here are two hypothetical societies, which one is flourishing better? And then back out of that what we need to do about the Gini coefficient and GDP, and all that.

**Brian Christian:** So that’s the… I think it would be very interesting to see some of the progress that’s being made on breaking the tyranny of the explicitly specified objective function. To think about some of, actually, the most macro objective functions that we have in the world right now. So, I’m not sure, but it would be very interesting to imagine a future where we’re using something like IRL, even at that level.

**Robert Wiblin:** Yeah. I guess, the reason I wanted to say that climate change seems more analogous rather than the same is that we know that this is going wrong. We can see that profit maximisation is not aligned with interest, and we’ve known this for ages and we talk about it. And I feel like the reason it’s not getting solved isn’t lack of technical capacity or lack of realisation of the misalignment, it’s competition between people where like particular groups benefit from this happening. Whereas the majority are harmed, but they’re like losing the political fight or they’re not able to coordinate. Or you have this common good issue, where it’s like it would be good if everyone changed it, but some people wouldn’t. And I mean, maybe there’s an analogous aspect to that common good problem with AI, but it seems like there’s a slightly different dynamic, potentially, with some of these political issues today.

**Brian Christian:** Yeah. I think that’s totally fair. And maybe that is a sobering reminder that those sorts of dynamics are going to exist, even for something like AGI. That AGI is not just going to be a genie in a bottle that we need to be careful what we ask it to do, but it will be something where there are—

**Robert Wiblin:** It’s a complicated world with lots of actors.

**Brian Christian:** Yeah. There’s multi-stages of stakeholders that are influencing one another, or there are race condition dynamics, etc. I think those sorts of things are likely to inform whatever comes next, including AGI. Yeah.

**Robert Wiblin:** Yeah. It is really interesting that with… I think there’s been multiple books that are focused on these technical issues, but then they don’t even get to the next stage. It’s like, first we’ve got to solve all of this, and then we’ve got to figure out how to integrate it into society safely — with all of the messy politics and conflict and violence that we have to deal with. I guess Stuart Russell towards the end of his book alluded to these issues, but hasn’t really grappled with them fully. And he was like, “Well, this is going to take a different book.”

**Robert Wiblin:** But this second step is even worse than the first part. Even if we can solve the technical stuff, how do we get… And I guess you explicitly say, that if there was another chapter in your book, you would have made it about how we get different agents with, say, conflicting values or engaging in games and conflicts and interactions with one another to play nicely and produce a good outcome. And that’s kind of a whole problem of its own.

**Brian Christian:** Yeah. I think that is a next frontier, maybe _the_ next frontier. And it was striking to me, when I first started visiting the Future of Humanity Institute, I remember seeing Nick Bostrom reading this social choice theory textbook. And that was intriguing, because I hadn’t picked up on the kind of direct relevance of that literature to people’s thinking in AI. I mean, it makes sense, but I hadn’t realised that people were already starting to put those things together. And that was, yeah, 2016 or 2017. As you say, my book was going to have a tenth chapter, I eventually just ran out of time and space and the book was already like 18 months overdue, so sometimes you just have to ship it. But I’m very interested in these questions of social choice theory and… It’s bad enough trying to infer the preferences of a single user, how do you infer the preferences of multiple users that have heterogeneous preferences, that want different things? We’ve known since Kenneth Arrow that—

**Robert Wiblin:** There’s some sense in which it can’t be done.

**Brian Christian:** Yeah. Exactly. So there’s a huge, very rich and sometimes depressingly paradox-filled world of that multi-user optimisation. And I think that’s really another frontier. I mean, even in commercial tech that we have right now… I just saw on Twitter, someone was talking about how their two year old used their Spotify account, and now their recommendations are permanently ruined. And that might be solved a few years down the line by a system that can identify like, ah, there appears to be this heterogeneous set of preferences that’s coming from this new part of the preference space — we’ll just build a mixture model where there are these two different things. And so the person’s Spotify recommendations wouldn’t be forever ruined. But, yeah, I think that’s an important frontier and that work is really just kind of beginning.

### Deception [02:13:50]

**Robert Wiblin:** Yeah. There was this viral tweet recently, which I think went something like, “I’m not worried about an artificial intelligence that seems incredibly intelligent. I’m worried about an artificial intelligence that deliberately tries to seem really stupid.” This idea of AI learning to deceive us is one of the maybe wackier and slightly more sci-fi — but also more alarming — possibilities out there. Nick Bostrom calls this ‘the treacherous turn,’ where you might imagine an artificial intelligence that becomes much smarter than it’s letting on. And then ultimately it’s able to… it’ll only reveal how intelligent it’s become at some later time, once it’s in a position to not be interfered with. But that’s a notion that you don’t talk about that much in the book, it gets like a handful of short mentions. But, yeah, to what extent do you worry about deception or misalignment that goes unidentified, perhaps?

**Brian Christian:** Yeah. Where my mind goes with this is to that adage that’s something like, “Never presume malice when incompetence will do,” that idea. That’s the kind of thing I’m more worried about. And I’ve had conversations with people actually doing frontline research, like Geoffrey Irving, for example. I remember talking to him about one of the papers he was working on and I gave him some feedback to the effect of, I think there’s a stop on the way between here and deception, which is basically bullshit. To lie requires this more advanced theory of mind thing of, I know what’s true, I know what I think you think, and I want you to think the wrong thing. So I’m going to say what I need to say to get you to think the wrong thing. Versus the bullshitter, who just says whatever, as long as it works.

**Brian Christian:** So I’m more worried about the bullshit than about the explicit deception, for now. I mean, I think deception is waiting for us at the end of that road. But in the meantime, OpenAI has talked about cases where they wanted a robot to move an object to a certain position in three-dimensional space. But what the robot did was it moved it to a certain position in two-dimensional space, such that the camera angle that they were viewing it through made it look correct. And this is again a case where you could think of that as deception, but—

**Robert Wiblin:** It doesn’t know that it’s tricking someone, or hasn’t gone through some… Well, I assume it hasn’t gone through a thought process where it’s figured out how to deceive someone.

**Brian Christian:** Exactly. I think we’re sort of still in the regime of good old fashioned misalignment, like it thought that’s what you wanted because you didn’t give it any examples that teased those two things apart. And I think it is likely that we will have a long slog through that kind of thing before we can worry about deception. Not that we won’t need to worry about it, but yeah, we’ll get there.

**Robert Wiblin:** Yeah. It seems like, so long as things progress gradually, slowly, iteratively, such that you get, perhaps, warning signs about deception — or you get failed attempts at deception that you can then debug and figure out why that happened and build in precautions — then it seems like maybe we’re fine. The case in which it seems more likely is if somehow unexpectedly you get very rapid increases in the general capacity and the general reasoning ability of AI, that’s like… Maybe for some underlying technical reason, you get a breakthrough that then leads to a sudden spurt of progress that we don’t realise is happening, or runs out a bit out of control. But that’s not the typical situation with technological progress. Most of the time it’s bit by bit at a fairly linear pace, rather than being these sudden breakthroughs.

**Brian Christian:** Yeah. I mean, right now there’s a lot of really encouraging work that’s happening in the transparency space. People like Chris Olah, people like Been Kim at Google Brain, people like Cynthia Rudin at Duke, there’s a lot of very, very encouraging frontiers of that sort of work. Both model architectures that are very simple, that are competitive with neural networks, as well as techniques for actually popping the hood of a neural network and figuring out what its representations mean.

**Brian Christian:** That I think has been another area where it was not to me _a priori_ obvious that that was going to work, and it has. That’s somewhere where I feel encouraged. But in a way, we’ve already moved on in a lot of respects from the kind of 2D convolutional nets that we’re recognising cats and dogs to these huge Transformer attention models, and we don’t have the transparency toolkit for that class of models that we do for others. So this is a place where the transparency is maybe five-ish years behind the cutting edge of capability, and so we want to make sure that—

**Robert Wiblin:** We’d really like it to catch up.

**Brian Christian:** Yeah. So I think that’s one thing. There’s hope for combating machine deception through constraining the representations that the system can make, or just being able to observe its world model and see what it thinks the result of its actions is going to be. I don’t know that any of that’s foolproof, but we have a toolkit available there that we don’t have with other people. And so Geoffrey Irving’s debate work, for example, Beth Barnes and others have looked at this, where if you’re trying to essentially depose a language model, you have access to things that you can’t do with real people.

**Brian Christian:** For example, you can ask it a question and then roll the model back and ask it a second question, and surface contradictions that it can’t wriggle out of, because you can say, “Actually, no, I already asked you that question in a parallel timeline, and you said this.”

**Robert Wiblin:** Interesting.

**Brian Christian:** There are very interesting mechanisms that become available that we don’t have access to with people, in virtue of being able to actually kind of manipulate…view the weights, roll the model back, et cetera. So maybe, maybe that’s enough. That’s the question.

**Robert Wiblin:** Sounds like a good Black Mirror episode, I guess, written from the perspective of the AI, maybe trying to get away with some deception, but being outsmarted.

### Brian’s interviewees [02:19:45]

**Robert Wiblin:** You interviewed, I guess, a lot of people for the book, I’m guessing dozens?

**Brian Christian:** About 100. Yeah.

**Robert Wiblin:** Of all the people you spoke to, whose overall view do you feel closest to personally? Was there anyone who you were like, “Yeah, this is the person who’s speaking sense.”

**Brian Christian:** That’s a good question. The person who comes to mind is Dario Amodei. And I say that because when I started working on this book, I had this hunch that the technical AI safety agenda and the sort of fairness/accountability/transparency agenda were really part of the same project. That it’s this question of, we want to make our ML systems do what we want. That affects the six-parameter linear classifiers that do parole recommendations, and that also affects the 100 billion-parameter language models, but it’s kind of the same project. That view was not widely held at the time. In fact, it was pretty polarising, I would say. About half the people that I talked to agreed and half disagreed. So Dario was one person where, when I kind of floated that hypothesis very early on was like, “Yeah, it’s underappreciated that even at a technical level, these are really intimately related problems.”

**Brian Christian:** I think that view has also aged well, not to be too immodest about it. But I think more people have come to think that than have gone the other way. And also, I think his “Concrete Problems” paper showing that — again, this is very early seminal stuff — but showing that what people were worried about who were thinking more abstractly about AI safety, that this could all be cashed out in the language of actual ML problems that were essentially shovel-ready for the ML community. We can work on robustness to distributional shift. We can work on transparency and explainability. That was an intuition that I also shared. And I think there’s also… Within the community opinions differ on whether AGI is coming by way of the standard kind of deep learning ML regime, or if there’s going to be some paradigm shift. And I think of him, and others, obviously, as part of this camp that’s saying, “No, I think what’s coming is coming in familiar terms. It’s not going to be some unimaginable other thing.”

**Robert Wiblin:** Yeah. So then the agenda is to make the things that we have now aligned, and then just keep aligning all of the new things as they appear, like being steps forward on what existed previously, but it’s still recognisable.

**Brian Christian:** Yeah.

**Robert Wiblin:** Yeah. Dario was the guest on episode 3 of this show.

**Brian Christian:** Oh, wow. You got in on the ground floor.

**Robert Wiblin:** Yeah. A very popular episode at the time, and I think still to this day. I expect he’s super busy setting up his new thing, having left OpenAI. But yeah, fingers crossed that I can get a couple of hours with him sometime in the next year or two to find out where he’s at. So were there any people you spoke with where you thought oh this person’s just clearly wrong. I really just disagree, or I think that they’re obviously wrong?

**Brian Christian:** Good question.

**Robert Wiblin:** You don’t have to name names.

**Brian Christian:** I may not divulge… There were certainly disagreements within the community of people, and there were some saying, “Off the record, I don’t think that this agenda is going to bear fruit.” And sometimes those people came around and sometimes they didn’t. And, yeah, I mean, one of my favourite examples of this, which didn’t happen to me personally, but Been Kim at Google Brain, a mentor of hers circa 2012 or 2013 said, “You want to do your PhD thesis on explainability and interpretability in neural networks? Don’t worry about it. We just, we train, we optimise them, they do what we want, what’s the problem?” And not only did she persist despite that feedback, but ultimately that person became an interpretability researcher.

**Robert Wiblin:** I see. So, they came around.

**Brian Christian:** They came around.

**Robert Wiblin:** Yeah I was going to ask that too, are there any people you interviewed who really were committed to the idea that there is not a problem here? Or that the problem is so trivial that it’s just going to be solved? It sounds like maybe there were a bunch of these people back in 2016, but then by 2020, there were very… fewer of them.

**Brian Christian:** Yeah. I think there are fewer now. I framed the book in a way where I tried to sidestep as much of the debate aspect of these questions as possible. My attitude was, I’m going to present this as a series of stories. Rather than making the case in a debate-y way, I’m just going to tell you a bunch of stories. And by the end, you’re going to have been drawn to this conclusion on your own recognisance or whatever.

**Robert Wiblin:** Yeah. That’s very interesting. So, it seems there’s a bunch of different clusters of views among people who think about AI and the long-term future. And I guess, one cluster of views that we haven’t really talked about that much is those held by people who are associated with the Machine Intelligence Research Institute, MIRI. They tend to think… Well, I guess some of the views that I associate with that group of people is firstly potentially very rapid increases in AI capabilities rather than just the boring, linear, predictable ones. Thinking that it’s just not possible to make current approaches to developing AI safe as they become much more powerful.

**Robert Wiblin:** And I guess also thinking of really advanced superhuman AI as potentially changing the world in dramatic ways very quickly, rather than just being gradually integrated into society in a way that feels intuitively safer. I guess I got the impression from the book that you spoke with several people, I guess there is at least one person there. Do you have a view on, could they be right? It seems their view isn’t dominant, but it’s held by like a non-trivial number of people. And it’s like a very alarming view if it were to be true. And I guess I’m just not sure what to make of it. Because maybe I don’t have the technical chops to really evaluate.

**Brian Christian:** I don’t share any of those views that you articulated. I think it will be a ‘slow takeoff.’ I think it will come in the form of something that looks pretty familiar to present-day ML, or is at least continuous with that. I don’t think it’s going to happen overnight. The evidence I have says that we sort of are up to the task of aligning present-day systems. Now, all that being said, the stakes are so high—

**Robert Wiblin:** You don’t want to bet your life on it?

**Brian Christian:** —that I’m very relieved to know that they’re pursuing that approach. And frankly, how many people work there, like 25 or something?

**Robert Wiblin:** It’s 20 or 30, something like that.

**Brian Christian:** That’s probably too small of an investment to make in heading off the sorts of future that they’re worried about. I’d rest easier if several hundred people were thinking about it. So from my perspective that camp should probably have more resources rather than fewer. But I don’t personally share that view. From where I’m standing, it seems like the preponderance of the evidence has fallen on the side of the advances that we’re getting are coming through a continuation of the current paradigm. It’s been interesting, I don’t know… They just released a statement at the end of 2020 saying something to the effect of “We’ve hit a dead end, whatever agenda we’d been pursuing for the last few years, we think it’s dried up and we’re not sure what comes next.”

**Brian Christian:** And I don’t know, it’s been interesting for me following some of their thinking. They made a turn circa 2016 towards a more ‘conventional’ ML orientation, and then pivoted back away. But they have now decided they want to pivot again. I mean, I’m really glad that they’re part of the ecosystem, and I think we need unorthodox approaches to be part of the portfolio as much as anything. So I am curious to see what’s the next turn for them.

**Robert Wiblin:** Yeah. I thought it was really brave and very cool that they just put up a post on their website saying, “We’ve been working on this line of research for some time. And it seems like it was maybe a mistake to go down this path, or at least it hasn’t worked out _ex post_. So we’ve got to figure out something different.” Yeah, it would be great if everyone was so transparent and upfront about things like that. Because it’s just the nature of research that you can’t tell whether things are going to work out before you do them.

**Brian Christian:** Totally.

**Robert Wiblin:** If you knew, you already would have done it. I’d love to interview some people from there. I have invited them on, just so listeners know, but coming on the show just doesn’t fit with their overall strategy. It’s not a high priority for them, because they’ve got their own thing. And that’s totally fine, they don’t owe me an interview, but fingers crossed that we’ll be able to get someone to properly represent that view on the program at some point. I think I agree with you, it seems like their paradigm is… It’s less likely to be right than to be wrong, but given the stakes, even if it’s very likely that the Dario Amodei view is right, you really want to have a red team out there to sound the alarm and try to persuade people if it turns out that that’s wrong. And to try to get people to realise early enough that this agenda isn’t going to work. And that we need a really big, different approach. And to be fostering heterodox thinking, that seems like a really valuable thing.

**Brian Christian:** I totally agree. I mean, in general I have my views and I’m very glad that people who don’t share those views are doing their work. That’s part of the… I think it takes a kind of a portfolio strategy.

**Robert Wiblin:** Are there any other clusters of opinion or visions for how things might play out that it’s worth mentioning that you found from talking to so many people?

**Brian Christian:** I mean, there’s the skeptical camp that says—

**Robert Wiblin:** People just think it’s just not going to happen anytime soon?

**Brian Christian:** Yeah. And I don’t agree with that either.

**Robert Wiblin:** Yeah.

**Brian Christian:** I think the skeptical position has not aged well in terms of the sorts of things that people have actually committed themselves to claiming were far off. I think it’s important that the skeptical mindset is part of the equation, because I think it’s useful to be thinking about the things that AI can’t do. And I think that’s very generative for science as well as safety specifically. But it feels like there has been a conspicuous amount of goalpost moving, and it’s like, if the skeptics are right, then we as a society will have wasted a few tens of millions of dollars researching something that was just an insurance policy. What is the harm of that?

**Robert Wiblin:** Yeah. Well, it will be a waste if it never happens, but if it happens later, then it’s just like, well, we just did it sooner… We did some of this work sooner than we needed to, which seems like even less of a waste, actually this is kind of fine.

**Brian Christian:** Yeah. It’s weird to me given how… I mean, the field has grown considerably, even in the last several years. But as a percentage of humanity’s attention, it’s still quite small. So it’s very strange for me to hear people arguing that we shouldn’t worry about it. Meaning several dozen people in the world that are thinking about it should think about something else. I think that’s crazy.

**Robert Wiblin:** Yeah. So maybe you spoke to some people who thought general artificial intelligence is impossible, perhaps — that we’ll never build machines that can mimic what humans can do. Or maybe that just isn’t actually a common view that people really hold that much these days. Was it more that they thought, Oh, it’s 100 years away rather than 10 years away? Was that more common?

**Brian Christian:** Yeah. I mean, people who say that, I wasn’t that motivated to interview them. I don’t share their view, but I didn’t want the book to—

**Robert Wiblin:** Become a debate.

**Brian Christian:** Yeah. I was more inclined to say, there’s a story to be told about what we are doing, and I’m just going to tell the story. There’s this interdisciplinary field being born, there’s this incredible movement. There is this first set of really tangible results, and I think there’s more than a book’s worth to talk about there. And the people who aren’t worried about it won’t read the book anyway. So I don’t have to spend too much time trying to persuade them. But I will say, I mean, the book deliberately… And you and I in this conversation kind of skipped the first third, and the first third has the more familiar present-day issues of racial bias, issues with hiring, resume-screening tools, issues with stereotyped use of language and language models, things like that. And issues in the medical domain. So more familiar problems.

**Brian Christian:** And that set of issues is deliberately part of the book, and is deliberately at the beginning of the book. In part because it’s kind of an on-ramp for people who have never thought seriously about safety issues from self-driving cars, let alone AGI. But the idea that someone is put in jail because this program learned on the wrong data, or that someone’s cancer diagnosis gets messed up or something like that… It’s a way to lead people’s intuitions… It’s an intuition pump basically, from here’s all these things that are really happening….and now let’s kind of gently shift the focus into the near-term future and you can see how that sort of thing but worse is going to be on the way. And so, that was a deliberate strategy. And for me, I was a little bit more inclined to persuade people by osmosis than by an explicit point/counterpoint.

**Robert Wiblin:** Yeah. We wrote up questions for you about the first third, but then I decided that we just didn’t have time. And I feel like listeners might know a lot about the first third of the book, because it’s things that are happening very much today. You literally read about these topics all the time in the news. But I guess for people who haven’t been following that in detail, it is super useful for them to realise that this isn’t a sci-fi thing. This is literally… All of these issues are all starting to happen now and we have to fix those things and then we’ve got to fix the things that are coming next. And then the things after that. There’s no escape.

**Brian Christian:** Yeah. And I think we’re maybe ready to retire some of the thought experiments that the field of AI safety needed at the beginning of the twenty-tens, like the paperclip maximiser. We don’t need the hypotheticals when we have just this bevy of real catastrophes to point to. So for better or worse, it’s easier to make that the case now.

### Developments since Brian finished the book [02:34:12]

**Robert Wiblin:** Yeah. We’ve talked about GPT-3. Are there any other recent developments or breakthroughs or papers that you’ve been excited by or concerned about since you delivered the manuscript?

**Brian Christian:** Yeah, I’ve been very interested in some of the work that’s happening at OpenAI, by people like Daniel Ziegler and others. Stuff on fine tuning language models, or doing these sort of interactive feedback procedures to get task-specific performance, like summarisation for example. I think that work has been very interesting. Obviously MuZero has been the latest iteration of the model-based reinforcement learning stuff coming out of DeepMind, that’s getting more general.

**Robert Wiblin:** What does MuZero do? Is that the StarCraft one?

**Brian Christian:**  
MuZero is no… It plays Go and chess and Shogi and Atari.

**Robert Wiblin:** Okay. So it’s the same learning process underlying its ability to learn all of these different skills?

**Brian Christian:** Yeah. So in particular it takes sort of the… Not exactly the final frontier of hard-coded stuff, but one of the remaining vestiges of hard-coded stuff from AlphaZero, and learns that from data as well. Which is the actual world model. So previously in order to do this Monte Carlo tree search, you would have this kind of world model where this little game engine would say like, okay, I make a move, then my opponent gets to make a move, and these are the possible moves available to them. And then it’ll be my turn again and blah, blah, blah. And likewise with Atari you have this little Atari emulator, that’s turning out like, here’s the next state if you hit this button or whatever.

**Brian Christian:** The idea being, what if you could actually learn that emulator from scratch and create a representation of the environment? Learn the dynamics of that environment as it applies to this kind of implicit representation that you yourself have built? And so, I think that’s potentially very powerful for thinking about how to do that more sort of causal reasoning of what the world looks like when I take this action, when you don’t have access to an emulator. So the real world requires us to simulate the effects of our behaviour in our own mind, because we can’t just run the world. So I think that that is a really exciting frontier.

**Robert Wiblin:** Yeah. Along the same lines. Is there anything that you’ve kind of changed your mind about? Or have you learned anything really important since delivering the manuscript? Are there any errors in the book perhaps?

**Brian Christian:** I mean, I delivered the book to my editor in October 2019 — this tells you how slow it is to publish a book. So it went to line editing in October 2019, and then we’d line edited it. It went to copy editing in January 2020, and then we’d copy edited it. It went to type setting in March 2020, and then we proofread it. And then by the time the book was manufactured, it was June 2020. And so you have this kind of annealing process. You have this window that just starts closing in terms of your ability to make changes, or the changes you can make get smaller. And eventually once the book is typeset, you can only replace a piece of text with another piece of text that’s _the same shape_ , because it has to fit in the same part of the page, which as a writer is kind of a fascinating little constraint.

**Brian Christian:** So you do your best to try to keep track of the critical things as your ability to change the text gets more and more difficult. I mean, certain things about the book, I focus on a previous generation of language models, which is the word-embedding models rather than the kind of modern Transformer models. So if I were to rewrite the book from scratch today, obviously there would have been more about that. But I think the basic premise is there, I mean this is kind of the agenda that we’re on. And I think the 2020 work of people like Paul Christiano and Jan Leike and Stuart Russell really does extend from the wheels that were in motion at that time.

**Brian Christian:** I think one of the biggest changes is that I think alignment research is starting to become applied. The theoretical rubber is hitting the road in a way that is quite interesting. We’re actually seeing, as I said, companies like Twitter using these sort of IRL-ish systems. We’re seeing more collaborations, like more papers being co-authored between people in the technical AI safety community, like at CHAI in Berkeley with people at Partnership on AI (PAI), this industry group, or people at actual tech companies. We’re seeing more papers co-authored between people in the technical AI safety community and the FATML community. So I think there’s a maturing of the field that has taken place. It’s becoming a little bit more of a piece I would say, with the kind of quotidian ML that’s happening at companies everywhere.

### Careers [02:39:20]

**Robert Wiblin:** For people in the audience who are perhaps fairly young or fairly open-minded and are interested in contributing to solving this problem, are there any important challenges or research agendas, or I guess, disciplines that you would like to perhaps draw their attention to as something that they should think about potentially working to contribute to?

**Brian Christian:** Yeah. I mean, one of my hopes writing this book is that it would be like a signal flare or a beacon that would reach people who were undergraduates or even high school students thinking about, okay, what do I want to do with my life? And to really announce there’s a lot of really important and really exciting things that are happening in this area. There’s a lot of ways to pitch in. I think there’s an amazing interdisciplinarity to this set of questions. So I can imagine someone doing a computer science bachelor’s degree and then getting a JD and doing policy or regulatory work, but having that technical literacy.

**Brian Christian:** I think there are also a lot of connections to cognitive science, developmental psychology. I think those connections are only going to get deeper over time, because my position is that we really are tapping into some of the ‘laws of intelligence,’ so to speak. And the channels are only going to open up more and sort of flow more between these existing fields.

**Robert Wiblin:** Yeah. That’s something I’ve heard from people before, but I wouldn’t have been able to come up with that many examples of it, but the book has so many of them. Examples of ways that we’re learning about people from machines and learning about machines by learning about people, and the social problems that come along with the technical issues.

**Brian Christian:** And yeah, so I think there is kind of this windfall potentially of all of these insights that are just kind of hanging out in adjacent fields, ready to be shaken off the tree. I’m thinking about, for example, Julie Shah, who’s a roboticist at MIT, she’s done a lot of work on how to get humans and robots to work closely together on a factory line. Literally elbow to elbow, passing things back and forth. And she had this insight about how there’s an entire literature from the military, from the medical community, on human team training. How do you get like a battalion of soldiers to work really well together, or a pilot and the copilot? And it turns out there were a bunch of best practices in that literature that no one in robotics was using, and you could just pluck them straight from that pre-existing domain. There’s this exhilarating rush to the realisation that more and more of these disciplines are going to be sort of talking to each other.

### AI terminology 101 [02:41:59]

**Robert Wiblin:** I find myself just getting very confused about the terminology, because there’s so many different kinds of similar designs and I don’t understand them deeply enough. There’s neural networks, deep neural networks or deep Q networks, reinforcement learning… I guess we’ve got machine learning and then artificial intelligence. Is there any way of breaking down one by one, like what these things are and how they’re different?

**Brian Christian:** So I think about it as being like a superset/subset thing. So I would say AI is the superset, and we could have like a big semantic battle on how exactly we would define that. But making machines do ‘intelligent’ stuff. There are many approaches to that, historically and even at present, and machine learning is one of those approaches. So I think of machine learning as a subfield of AI. They’re used somewhat synonymously today, but that’s partly just because machine learning is the most active and promising path. Although it’s not—

**Robert Wiblin:** It’s not a full space.

**Brian Christian:** —totally coextensive with AI. For example, I would argue that something like Monte Carlo tree search, which is used in game playing, is not itself machine learning — but it is an AI technique. These sort of search algorithms.

**Robert Wiblin:** People have also tried, for example, just producing incredibly long lists of facts, as a way of teaching it. Which I guess hasn’t really worked out, but that would be an example I guess of AI without machine learning.

**Brian Christian:** Yeah, exactly right. And it’s the whole era of good old fashioned AI, the sort of symbolic approach, the sort of expert systems approach. There’s been a lot of different fronts there and we can hybridise them. So AlphaGo combined neural networks and Monte Carlo tree search, so getting a little bit of both. But then machine learning itself kind of within the superset of AI is really the idea of a system that learns from experience, or learns from data, rather than being explicitly programmed.

**Robert Wiblin:** Yeah. And so I guess maybe under that, then we have neural networks, that’s one design of how the data gets processed. And then I suppose reinforcement learning is one way of training the weights and structuring the neural network?

**Brian Christian:** Yeah. I would say a neural network is a class of function approximator, so a linear regression and a neural network are in the same category in that sense. And reinforcement learning, I think of as really a problem statement. It’s a way of defining what type of problem you want to solve. Namely you’re in an environment that has states. You’re in a state, you can take one of several actions that takes you to another state with a different set of actions. At some point or points along the way you get these rewards, and then you have to figure out how to get as much reward as possible. So that’s a problem definition and you can solve reinforcement learning with or without the use of neural networks. So there’s the old school reinforcement learning, what’s called tabular — where you just keep a giant table of like, okay, I was in state 100, I took action 5, I got 3 points, and I ended up in state 41.

**Brian Christian:** Now you can imagine that this does not scale to any sort of reasonable problem, it only works in a toy problem. But it’s just an example, you can do it entirely without neural networks. So then what is a deep Q network? So Q-learning is an approach to reinforcement learning. So it’s complicated because they sound similar, but one is the problem and one is the solution. So reinforcement learning is the problem, Q-learning is a solution to it. Okay, so Q-learning is part of a family of solutions to reinforcement learning problems called ‘value function’ problems, or ‘value learning.’

**Brian Christian:** So basically I feel like we need some kind of whiteboard here, but within reinforcement learning algorithms there are essentially two categories. So how do you try to solve a reinforcement learning problem? There’s one approach which is called value learning, where you learn the value of being in a given state. And then it makes it obvious which action you should take. You take the action that gives you the reward, plus puts you in a state with the highest value. There’s an alternate approach which is policy learning, where you don’t learn the explicit value of doing things. You just learn what to do.

**Brian Christian:** So the analogy I would use is: Value learning is like developing a spidey sense of like, this seems like a good situation, this seems like a bad situation. Policy learning is like muscle memory. It’s like, you know what to do, but you don’t necessarily know exactly how good or bad it is. In reality these two things can go hand in hand and often do. Q-learning is in the value category. So the Q stands for quality. And basically the idea is you want to take the action which will give you the best sum of the immediate reward, plus the expected rewards available from the state that you end up in after you take that action. And in particular it involves the maximum amount of points possible.

**Robert Wiblin:** I see. So this was a method used to solve Atari games or to play most Atari games at superhuman level. I suppose it was thinking like, should I move right or left or jump? And it would evaluate this based on a combination of the immediate reward that was measurable, plus a guess as to how many points it would get in future after that point. Based on evaluating the state that it ended up in.

**Brian Christian:** That’s right. And so the deep Q networks part is using a neural network as the function approximator for Q-learning.

**Robert Wiblin:** Okay. And the deep part refers to having lots of neurons and maybe structuring them in levels. So you’ve got the first level that things cascade through and then in general the messages go down to the next level.

**Brian Christian:** That’s right.

**Robert Wiblin:** And I guess not upwards or skipping a level? Or rarely?

**Brian Christian:** There are some architectures that have cycles in them, like LSTMs are what’s called ‘recurrent.’ But let’s just pretend that doesn’t exist, and just think of it as going in one direction only. So deep networks, in the nineties they were wide, in the twenty-twenties they’re deep, so yeah. That’s—

**Robert Wiblin:**  
They’re like jeans.

**Brian Christian:** Yeah. So zooming out, deep neural networks are one type of neural network. DQN uses neural networks as a function approximator for Q-learning. Q-learning is a type of value learning, which is a way to solve reinforcement learning, which is a sub-problem within machine learning, which is a sub-thing within AI. So we’ve now popped the stack, we’re back to where we started.

**Robert Wiblin:** Okay. Totally clear.

**Brian Christian:** Hope so. Hope it’s somewhat clear.

### The effective altruism and AI safety communities [02:48:57]

**Robert Wiblin:** Alright. Totally different topic just as we approach the finishing line, what’s your biggest critique of the effective altruism community? Or do you have any thoughts on how it can do better? You’ve interviewed people who are a part of, or associated with, effective altruism for the book, and I’m curious to know your impressions.

**Brian Christian:** Yeah. I mean, it’s funny, I think effective altruism and AI safety have this interesting relationship. To sort of make it aphoristic, I would say EA is about bringing optimisation to ethics, and AI safety is about bringing ethics to optimisation.

**Robert Wiblin:** It’s a nice turn of phrase.

**Brian Christian:** So yeah, and many of these people from these communities are the same people or are friends with each other. So there’s a very deep connection there. I interviewed Will MacAskill and Toby Ord. And I think there are very interesting connections between this project of trying to be rigorous about helping people… To me, there is a parallel to this question of how do we operationalise these procedures for getting human normativity into machines, that sort of rigorous approach. It’s been interesting talking to Will over the years. And one of the things that he has been concerned about is, is the EA movement in danger of being a victim of its own success? A lot of these opinions that people had that were heterodox at the time have themselves become orthodoxies that are maybe in need of shaking up.

**Robert Wiblin:** I remember being worried about AI safety back in 2008. I think it was when I first got into it. And then I’ve lived to see the world come around and agree with my … God. I guess I must have been 21, which is interesting. But then you don’t want to start resting on your laurels and just assume that everything that… Just because people agree with you now, that you were right. Or that you’re right about everything else as well.

**Brian Christian:** Yeah. That’s right. So, I think that’s as much of a challenge for them as for anyone.

**Robert Wiblin:** It’s making me think I should write a blog post of stuff that EA has gotten wrong, to keep this in mind. And try to learn, I guess from… See if there’s any patterns to the projects that were funded but shouldn’t have been, or the ideas that were popular that maybe were mistaken. Because it’s always so much easier to remember and so much more pleasant to recall the ways that you were right early on, rather than ways that you were wrong that you totally forget about now because no one talks about it.

**Brian Christian:** Right, or you change your mind, as you just haven’t thought in that way for a long time. I mean, there are sort of path-dependent things too, where initially there was a lot of press that was made in the EA community about how maybe everyone should go work at a hedge fund and then just give your salary to charity. And that may have held, but in a contingent way. Because EA was sufficiently cash constrained that the marginal impact of another $100,000 was pretty big. And now maybe the movement has reached a level of maturity where it’s more talent constrained than capital constrained, for example. And so, the logic shifts. But that change happens somewhere along the way with the growth of the field, and you have to remember to revisit those old models, and realise that the assumptions don’t hold anymore.

**Robert Wiblin:** Yeah. There’s a bunch of stuff that 80,000 Hours has gotten wrong specifically. I guess I won’t list them all here, that perhaps should go in a different episode. Things that we either substantively got wrong at the time or that we communicated really poorly. That ended up having negative consequences, even if we were right in some sense.

**Robert Wiblin:** One final question, what was it like reading the book? It must be really exhausting reading out something that’s so long, and presumably it’s not your profession, reading out books.

**Brian Christian:** Yeah. There’s a lot of things I could say about that. In this particular case, it was compounded by the weirdness of COVID. And so, going into a recording studio all day was a little bit nerve wracking, just because you don’t want to be indoors with anyone. Although you’re mostly locked in there by yourself which is good. I’ve read all three of my books, and it’s important to me to deliver the last mile. I think so much of nonfiction is about the way that emphasis is placed within a sentence, within a paragraph. I mean, in some ways you could argue the entire craft of nonfiction is just about placing emphasis.

**Brian Christian:** Like which papers do you highlight, which people’s work do you spotlight, etc. And you can certainly lose a lot of credibility by mispronouncing someone’s name or highlighting the part of the sentence that’s the obvious part. So it was always important to me to take it all the way. But it is a very weird experience, it’s very physically taxing. Your voice just hurts. I mean, you go home at the end of the day and my wife will be like, “How was it?” And I’ll just be like, (whispers) “It was good, I don’t want to talk.”

**Robert Wiblin:** Did you read any sentences out for the book and be like, oh no, I wish I’d written that differently? Realising as you’re saying it out loud, that it’s not what you wanted it to be?

**Brian Christian:** So I believe I was able to catch a copy editing error, where someone at my publisher had resolved these Word comments between me and the copy editor in a way that left a fragment of one edit and a fragment of the other. And I was actually able to catch that in time. So for me, reading the audio book is sort of the last sanity check, which is helpful. Occasionally stuff gets through even that, which is amazing.

**Robert Wiblin:** Yeah. Well the fact that you can read the entire book out loud and not find any clinging errors that you regret is a testament to the care that’s gone into crafting it, and how many eyes have looked over it. So I would definitely recommend the book to listeners.

**Brian Christian:** Well thank you. I appreciate that.

**Robert Wiblin:** My guest today has been Brian Christian, and the book is _The Alignment Problem_. Thanks so much for coming back on the 80,000 Hours Podcast, Brian.

**Brian Christian:** It’s my pleasure. Thank you.

### Rob’s outro [02:54:45]

If you enjoyed this conversation I can also obviously recommend grabbing a copy of The Alignment Problem to learn more, and of course we’ve got plenty of relevant links on the page associated with this episode.

It would also be really helpful if you could take a second to think about whether you know someone who’d appreciate being told that this interview or the show exists. Personal recommendations really are the best way for us to get the word out there about what we’re doing.

Finally, a reminder about Effective Altruism Global: Reconnect which is coming up soon on the weekend of March 20-21.

It’s free, our very own 80,000 Hours Podcast will be featured, and you can apply at eaglobal.org.

If you’ve taken steps to have more impact with your donations or career you’re in the target audience for the event so don’t miss out.

The 80,000 Hours Podcast is produced by Keiran Harris.

Audio mastering by Ben Cordell.

Full transcripts are available on our site and made by Sofia Davis-Fogel.

Thanks for joining, talk to you again soon.

Show full transcript

## Learn more

#### AI safety syllabus 

#### Working in US AI policy 

##  Related episodes

November 22, 2018

####  #48 – Brian Christian on computer science algorithms that tackle fundamental and universal problems — and whether they can help us live better in practice

__Listen now

June 6, 2017

####  #1 – Miles Brundage on the world’s desperate need for AI strategists and policy experts

__Listen now

July 21, 2017

####  #3 – Dario Amodei on OpenAI and how AI will change the world for good and ill

__Listen now

November 2, 2018

####  #47 – PhD or programming? Fast paths into aligning AI as a machine learning engineer, according to ML engineers Catherine Olsson & Daniel Ziegler

__Listen now

March 16, 2018

####  #23 – Jan Leike on how to become a machine learning alignment researcher

__Listen now

October 2, 2018

####  #44 – Paul Christiano on how OpenAI is developing real solutions to the ‘AI alignment problem’, and his vision of how humanity will progressively hand over decision-making to AI systems

__Listen now

June 3, 2019

####  #58 – Pushmeet Kohli on DeepMind’s plan to make AI systems robust & reliable, why it’s a core issue in AI design, and how to succeed at AI research

__Listen now

## About the show

 _The 80,000 Hours Podcast_ features unusually in-depth conversations about the world's most pressing problems and how you can use your career to solve them. We invite guests pursuing a wide range of career paths — from academics and activists to entrepreneurs and policymakers — to analyse the case for and against working on different issues and which approaches are best for solving them.

Get in touch with feedback or guest suggestions by emailing [email protected].

### What should I listen to first?

We've carefully selected 10 episodes we think it could make sense to listen to first, on a separate podcast feed:

Check out 'Effective Altruism: An Introduction'

Subscribe here, or anywhere you get podcasts:

  *   *   *   * 


If you're new, see the podcast homepage for ideas on where to start, or browse our full episode archive.
