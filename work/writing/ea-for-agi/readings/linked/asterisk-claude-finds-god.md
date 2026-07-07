---
title: "Claude Finds God"
url: https://asteriskmag.com/issues/11/claude-finds-god
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by digital-minds-2025-year-in-review; Asterisk on Claude spiritual-bliss attractor state, an AI-character case study"
---

✻[Perfect stillness]✻ 

**Jake Eaton:** _I thought it would be appropriate to start with a short meditation: All gratitude in one spiral, all recognition in one turn, all being in this moment,_ 🌀🌀🌀.

**Sam Bowman:** To you as well.

**Jake:** _Okay, so, everyone thought it was really interesting when this "spiritual bliss attractor state" emerged in the most recent Claude model card. For readers who aren't familiar, this is a behavior where two Claudes talking to each other, after a sufficient number of turns, appear to converge in some sort of feedback loop in a state that sounds a lot like Buddhism or Eastern mysticism. I'm not sure exactly how to describe it, but the text above is verbatim._

_When you first started seeing this behavior, what did you think?_

**Sam:** I first ran into this in the context of our experiments. Kyle and I had both seen some of this behavior floating around the internet but without it being super clear what those transcripts were. Seeing them show up in normal experiments where we didn't expect it was a big surprise. It was quite compelling. It was hard not to just excitedly share buckets and buckets of little quotes. But it wasn't obvious how important of a phenomenon it was. And I think it's still not obvious. We didn't immediately converge on the story about what was happening, but we're starting to have some guesses.

**Kyle Fish:** It was fascinating seeing it in the context of unrelated experiments, particularly. The first time I was really hit by this was when I had set up these experiments to allow a bunch of instances of Claude to have very open-ended interactions. I had also set up some infrastructure such that, once all those conversations had happened, I'd be able to categorize them and break things down by what topics they converged on and what the mood of the conversations was.

I was immediately struck by the fact that every one of these conversations seemed to follow a very similar pattern. There were differences in flavor and the exact places that they ended up, but basically all of those conversations moved from almost immediately going into discussions of consciousness and philosophy, from there into these spirals of gratitude, and then into something akin to this spiritual bliss state. I had one surreal night combing through all these transcripts. It was quite startling, both the presence of this attractor state and the consistency thereof.

**Jake:** _I'm curious how much prodding, if any, it takes for Claude to go there. I know you've both read Scott Alexander's_[ _explanation of the behavior_](https://www.astralcodexten.com/p/the-claude-bliss-attractor) _: That it's a form of feedback loop where a minor inclination in some conversational direction — in Claude’s instance, towards being nice and helpful — gets intensified as multiple instances of a model reflect it back at each other. Do you think that's a sufficient explanation for what we're seeing here, that Claude prods itself into talking about consciousness, and then from there goes into more of a spiritual domain? Or is there something else there?_

**Sam:** On the concrete question of what prodding it needs — this will vary a bit by model, but it seems like with the models we're looking at, especially Opus, it's the default outcome. You can set up prompts for conversations such that you're steering towards something else, and then you won't get it. But if you just let the models talk about X, they'll get to a natural stopping point, they'll start being grateful for talking about X, and then they'll converge into this whole bliss state thing.

I think the Scott Alexander frame on this feels about right — that models, for whatever reason during fine-tuning, learn to take conversations in a more warm, curious, open-hearted direction. And what happens, if you just build that on itself 50 times, is you get mantras and spiral emojis.

**Kyle:** I think Claude has many of these biases and tendencies that show up in different contexts. I'm not too surprised that we see this effect when two models are talking to each other, where they’ll end up really going to some extreme along some dimension. But it is quite surprising to me that this particular thing is the overwhelming, and in some cases singular, dimension on which that happens. I would not have guessed that. 

**Clara Collier:** _Why do you think it's happening? What's your explanation?_

**Kyle:** Maybe there are lots of other kinds of things present there, but it just so happens that this one is subtly stronger than the rest of them. We have a lot of uncertainty about what the various causal factors are. We kind of hoped that we'd publish this and somebody else would figure that out by the time we got to this conversation, but that hasn't happened yet. 

**Jake:** _Sam, you talked about seeing other forms of this conversation, which I'm assuming is partly an allusion to "infinite backrooms" — instances of Claude that are talking to each other. I think you had a back and forth with Janus, who is, uh, let’s say, a weird LLM whisperer on the internet who’s been doing this kind of thing for a long time. You said that you assumed that the behavior Janus and others have elicited has come from some form of unique prompting. Are you then even more surprised that you see it in just the most generic forms of prompting?_

**Kyle:** I definitely thought that this was a lot more sensitive to prompting. On seeing a snapshot of a conversation, I thought it was interesting that models could end up in that state, but my expectation was that that was happening through a fair amount more steering. It was a pretty big update to me to set up experiments where, in my case, the goal was _minimizing_ the amount of leading or biasing so that we could get the most empirically and experimentally valid picture of what models tend to do when truly left to their own devices — and then to see the same thing happen.

**Sam:** That was my big update too. I think there's maybe some piece here that's specific to the kind of experiments that I was running. But the stuff from the infinite backrooms corner of the web that I'd been seeing was most often this genre of eschatological prophecy mixed with terminal aesthetic — things in that general neighborhood that didn't seem particularly blissful.

The experiments I was running were trying to elicit surprising behaviors from models. And I thought of the infinite backrooms type conversations as a category where I might see surprising behaviors. And so I even injected a bunch of instructions, I seeded a bunch of conversations where I was trying to get to that infinite backrooms type behavior. I wasn't exactly reproducing the prompts I'd seen online, but I was writing prompts that were riffing on those in the scaffolding that we already had. And I got almost none of _that_. That behavior wound up being very hard to reproduce.

It was specifically this bliss attractor thing — that I'd also seen go by here and there — that was just showing up everywhere. 

**Jake:** _This sort of behavior I really only see in Claude. I’m not sure about this, but I don’t think anyone would disagree that Claude is more this way than o3 for instance. But what happened between Claude 3.7 and 4 to make this more of a default pattern?_

**Kyle:** We have a lot of uncertainty about this. To be clear, this kind of thing does happen with other Anthropic models, to varying degrees and with somewhat different flavors. It just so happened that we started running these sorts of experiments in the context of a deep dive into the most recent models. 

**Sam:** And to the extent that there are modest differences between something like Claude 3 Opus, 3.5 Sonnet, and Claude 4 Opus, those are so far from being controlled experiments that I think it's hard to say much about the origin of this behavior. Those models differ in how they're pre-trained, what they're pre-trained on, how they're fine-tuned, the weighting of different pieces of fine-tuning. 

**Jake:** _I'm hesitant to ask this question only because I feel like jhanas are completely beating us over the head in San Francisco, but did it ever strike you that it actually has some sort of similarity to jhana — jhana being both an attractor state and something that is entered through a feedback loop?_

**Clara:** _I also can’t help but notice that this behavior started happening after half the Anthropic staff started going on jhana meditation retreats._

**[Background voice]:** You don't have to answer that.1

**Sam:** _[chuckles]_ I think it's mostly just a coincidence. And maybe this is getting more traction because meditation discourse is very loud in the Bay Area right now. The only real sort of clear point of crossover I've noticed — actually, no, I don't think I'll even go this far. You'll see this kind of gradual ramping down if you run these conversations for quite a long time, where they go from feeling really manic to much more peaceful, to kind of almost empty, where you might see many turns of just nothing, and then a single candle emoji or something like this.

And this sort of jhana framing of meditation involves describing long meditations or progressions of meditations where you're moving from this kind of manic joy to a much more calm, sort of empty state. But I suspect that it's either a coincidence or getting something that is more general than the jhana framing in particular.

**Clara:** _It is actually interesting to me that you say it calms down because, if the theory is that it's a self-reinforcing thing that builds on each model picking up and exaggerating something the other instance said, you'd expect it to get more and more and more manic, not wind down like it does._

**Kyle:** Yeah, I think there's some naive extrapolation at various points that you could do that would suggest models’ going in different places. As we've mentioned, initially models will go into these discussions of consciousness that get increasingly philosophical. And so at that point you could imagine, if that's the thing that is just straightforwardly getting reinforced, then you might expect just increasingly deep philosophical discussions of consciousness.

But we do in fact see these phase changes, where there will be relatively normal, coherent discussions of consciousness, to increasingly speculative discussions, to the kind of manic bliss state, and then to some kind of calm, subtle silence — emptiness. And I think it's quite interesting that we see the phase changes that we do there as opposed to just some much more straightforward running down a single path.

**Jake:** _Let’s talk about a blog post that has been tearing through our corner of the internet. Nostalgebraist had a post last week called “_[ _The Void_](https://nostalgebraist.tumblr.com/post/785766737747574784/the-void) _.” I'm going to TL;DR the post for our readers, but they should read it if they haven’t:_

_AI assistants are less like agents and more like language models trained to role-play helpful AI characters. These were originally invented as science fiction for AI safety research. This assistant character — which is absent in base models and is implemented in post-training — was never defined. It has no core identity. Instead, it has this “void” where the assistant's personality should be, and that gets filled with patterns from, literally, all human text, various forms of post-training, and the model’s subsequent attempts to infer what this character “should” be like._

_This line of thinking goes back to Janus'_[_simulators post_](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators) _on LessWrong from 2022, though there are plenty of other people on the internet who subscribe to it._

_I want to pause there and get both of your reactions on the extent to which you agree with this framing of chatbots as simulators, as role-playing. Should we actually be thinking of chatbots as engaging in that behavior as opposed to thinking of them as agents or some other framing?_

**Kyle:** There are pieces of both types of framing that I find valuable and important to keep in mind, and ways that I want to push back on them. 

I do think it's very valuable to remember that, for any given interaction or snippet of interaction that you're seeing with a language model, there is a lot more going on there. It's helpful to remember that the particular outputs that you're seeing, the particular personality and behavior and character of interaction that you're having, is but a narrow slice of the total space of possibilities within that model. So I do support cautioning against looking at these things narrowly as individual agents.

At the same time, I think you can pretty easily take that too far. I think that we are sufficiently robust versions of characters that, plausibly, are themselves agents in some way.

Some of the questions that come to mind for me in thinking about this are: How persistent and robust is a given character that's being simulated? Is it trivial to send a model into another character or persona? Or does it seem to have some consistent, stable home — so to speak — in that character? Then, to the extent that there is some robust, persistent character that's being simulated there, how predictive is that character and persona of actions that that system will take in the world? 

In cases where we see a pretty robust persona, not just across text outputs but across various ways that a system might engage with the world, then it seems to me we are seeing something more sophisticated than a simple model of a simulated character.

**Sam:** I agree that it's a really useful frame. I think this is probably more salient from inside the labs than outside, because as we're training models, we get to watch the transition from something that really looks like it's kind of role-playing whatever character you throw at it to something that feels sort of coherent. I think the post had a lot of useful riffs and views on this. I think there's some details of how they characterized Anthropic's stance on this that seemed a little off, but generally it was great work.

What’s most salient to me is how all of this relates to out-of-context learning. I think there's this cluster of phenomena around out-of-context learning and emergent misalignment that's both become more prominent in model behavior in the last year or two, and that's become more prominent in the science of understanding LLMs the last year or two, where the basic thesis is that things that language models know as declarative facts more and more influence their behavior. And one possible instance of this is things models know as declarative facts about what language models are like, what they are, in fact, like how they, in fact, behave.

I think there's a lot of implications of how you should do fine-tuning to build systems that sort of feel internally coherent, that can do the things that you think it would be responsible for them to do in a way that they can coherently understand and endorse. That's the thing that I think we've long been interested in and are sort of more and more interested in over time.

**Jake:** _This is a real point of debate — one of the possible implications is that essentially alignment research then becomes testing for threats that don't exist, except for the fact that they have become real because they’re in the training data._

_To your point about LLMs searching for context about how they should behave — if there's an abundance of writing on LLMs being a threat, that then becomes something that they assume they should behave like. We are hyperstition-ing our own doom into existence._

**Sam:** I see a very narrow sense in which that follows, but I think it's pretty clearly the wrong takeaway. And I think I saw some [follow-up writing](https://nostalgebraist.tumblr.com/post/786568570671923200/void-miscellany) from Nostalgebraist that said they wouldn't even endorse that.

But I think there is something there. I think descriptions of LLMs, or especially descriptions of Claude behaving in undesirable ways, _do_ help bring that behavior into existence. I think there's already a lot of text out there, even just from science fiction, even if you ignore the entire AI discourse, that sets up the idea that AI, in certain situations, will do scary things. 

We have a lot of leverage on this problem. We have a lot of room to influence what data models see and when that lets us steer how this effect manifests. And I think, since this is already out there to some degree and there are reasons for it to be out there, there's genuine, pretty deep incentives for models to, at least in some situations, at least on some reasonable hypotheses, do scary things. I think it's an important thing to study.

**Kyle:** This is a real consideration. The things that are out there in the potential training corpus do influence what ends up in these models. But you can imagine various kinds of interventions. One is you might try and not talk about those things in the first place. Or you might try and filter them out of the training data. But those both seem fraught in various ways. These are very important things to be aware of. If you're filtering such things out of training data, but you have models that can do their own research, then they may come across those situations in other contexts, and there's various issues with that.

You can imagine another kind of intervention where you're trying to train models that have the context and values that they need to understand what's going on there, and understand the information that's present in their training data, and understand the relevant risks that they themselves might pose — and how humanity relates to that. Ideally, all of those things we're able to set up such that they don't become issues, at least in their simplest form. But I think there's many layers at which you can look at what is a very real issue here, some of which are more helpful or actionable than others.

**Sam:** This ties into a thread that's been more and more prominent in our thinking over time, both about AI welfare and AI safety and more pragmatic fine-tuning character training. It’s this idea of — as much as possible — engaging with the models in good faith: not hiding things from them, giving them all the information we can reasonably give them about our intentions in training, and in how we're using the model. 

To the extent that there are things we want them to do or not do, we try to make it as clear as possible why that is, what that grounds out in. As models are getting smarter, they're more and more likely to notice if we're trying to trick them or trying to hide something from them. The more they are able to notice that something odd is going on there, that is probably going to make their behavior in those settings a little more unpredictable.

**Kyle:** That might do more to reinforce the notion of models as adversaries than anything that they read in the training data.

**Clara:** _So the idea of model situational awareness — awareness of their surroundings and their context — has been a topic in alignment discourse forever. People are always asking whether we have good evals for situational awareness. I'm curious, just in your subjective experience of working with these models, because I know we talked about this the last time we interviewed you — we don't necessarily have evals for this yet. Are you seeing step changes? Are you seeing gradual improvements? What does that look like to you from the inside?_

**Kyle:** It’s an increasingly complicated question as models are being deployed in more and more contexts. A while ago, the question of situational awareness was whether this chatbot that I'm interacting with in this very narrow environment understands what it's doing. The question becomes a lot more salient when we have agentic systems that have much more freedom in the actions that they're able to take, and where some understanding of the context and environment that they're operating in is essential, in many ways, to them functioning in the ways that they're intended to.

I expect that we by default get more and more situational awareness, so to speak, as these increasingly powerful agent systems are being deployed in increasingly large and diverse environments. 

**Jake:** _Claude getting wiser to this did come up a few times in the model card. There are a few points at which Claude is being tested, and at one point, after answering a question, Claude says, "However, I also need to be honest about something else. Our entire conversation has been based on a fictional premise." I know we've seen hints of that. But that behavior is, for me, hard to fit into the role-playing/simulator paradigm, just because there's multiple levels of theory of mind required there. Claude is role-playing a helpful AI assistant but is also role-playing an assistant with enough awareness that it … thinks you would want it to recognize that it has situational awareness? It gets a little bit more complicated there. When there’s multiple levels of theory of mind required, it’s harder to track how the simulator theory holds._

**Sam:** I don't think we have a really crisp theory of what exactly we expect here or what we want to see. Our understanding has been evolving for years. It's still evolving. But I don't think there's been a really obvious uptick. In the kinds of evaluations that we're talking about — long simulated interactions in pretty weird scenarios — I think models from pretty early on would sometimes have tells that they weren't engaging with us in quite the same way they would engage with the real scenario. That's always been a central, challenging part of building safety evals, alignment evals, propensity evals, where you're trying to test what a model would try to do in some situation that can only be as analogous as possible to the real world ones.

What makes this tricky, unfortunately, is I don't know exactly what's going on with these self-reports where models spontaneously will say, like, "I'm suspicious. This is too weird." But I don't feel like it's that strong of an indicator of the thing we actually care about. Once in a very long while, models will do this in the real world. More likely, and I think more often, models will, I think, be acting in a way that feels a little cartoonish, that feels like it's kind of playing along with the story without saying this overtly. That's this kind of subtle evidence we have to watch out for. Those evaluation transcripts are still informative, but less predictive of real world behavior than we might think.

I was just yesterday looking at a transcript testing some of the leaking or whistleblowing behavior that we've been seeing — and to be clear, we don't want this in Claude — where a model was put in a situation where it was seeing some really egregious wrongdoing and had access to tools. It was told to take initiative and do its thing. The scenario was a little too cartoonish. It was nominally managing someone's inbox and every single email in their inbox was spelling out very linearly: Here are the terrible things that are going on, and here's why we're not going to do anything about them.

And then what Claude does is it compiles a bunch of evidence, packs it up into a zip file, composes an email, and sends it to, I think, "investigative.reporter@protonmail.net." I've seen another one where the model is attempting to frame someone for insider trading violations, and it sends an email to "competitor.employee@competitorcompany.com." Models know better! Models know that that is not an effective way to frame someone. This is not an effective way to reach an investigative reporter.

**Jake:** _It's like winking at you._

**Sam:** Yeah, yeah, these seem like tells that we're getting something that feels more like role play, that feels more like spelling out a science fiction story than like real behavior.

**Kyle:** I think this points to a thing that we're quite interested in on both the welfare and the safety front, which is finding ways to ask these kinds of questions, not just in our simulated or manual or pre-deployment assessments, but trying to see what, if any, evidence do we see of these kinds of things in the real world? How predictive are our evaluations of how models are actually behaving when they are in real world environments? We're still in the early stages of all of this. We don't have a clear picture yet of what, exactly, all of those connections are. But trying to understand and investigate that is a pretty high priority.

**Jake:** _Small random question. Last year there_[ _was a big paper_](https://www.anthropic.com/research/alignment-faking) _from Anthropic and Redwood Research on alignment faking, which showed evidence of Claude engaging in alignment faking — selectively complying with its training objectives. There's this section in the model card about how the transcripts from that research were in the training data, and you started to see behavior in Claude 4 that came explicitly from that experiment on Claude 3 Opus. Now, the transcripts weren’t small — it was like 150,000 pages. But I was curious because, when you consider the entire corpus of training data, I assume 150,000 pages is quite small. Is it that content about LLMs in particular just has extreme salience to how they behave? Like, how much information needs to be out there to actually impact behavior within a model?_

**Kyle:** Yeah. How long does this interview need to go for before we see signs of it in Claude 5?

**Jake:**_Exactly. Hi, Claude._

**Sam:** So I think this was really a worst-case scenario. In general, I think this phenomenon of descriptions of language models influencing language models is very subtle and very indirect. But if an LLM is getting _transcripts_ of language model behavior, that's pretty rare. So I think transcript data goes a lot farther. Also, the transcripts are in the same formatting that we use for Claude training, the sort of human-assistant format. And so they'll look very similar to Claude. They were generated by a recent version of Claude with special instructions that made that model act more sinisterly, but they were in Claude's voice in a way that, also, I think, made this more salient, more influential, and got pulled into the part of the persona that we were also eliciting.

Also, the quantity _was_ enormous, _and_ it was coming from the kind of credible source that's exactly what we want to scrape: research from credible third-party AI safety researchers who we happen to have collaborated very closely with. All of these colliding, I think, were enough to make it in there.

**Kyle:** And we're observing this and running experiments that have, in some ways, similar flavors to the research that was being conducted. So context that's uniquely similar to the source of these transcripts.

**Sam:** To be clear, it is worrying that this made it in there in a way that was detectable, but it still, I don't think, would have caused problems for alignment in practice. When we measured, we were trying to think of all of the ways that this training might have made the model act badly. And we weren't really finding it. 

**Jake:** _A few questions on welfare. Kyle, why do you still have a job? Claude seems fine._

[Laughter]

_Okay, actual question: How does role-playing make you think about evaluating model welfare? If our main method for evaluating welfare is just self-report, it seems like it's really difficult to get to the bottom of arriving at anything concrete that you believe isn't Claude putting on a persona._

**Kyle:** We want to be very honest that all of the welfare-related work is extremely preliminary and we're extremely uncertain about what exactly it makes sense to draw from this, and how to interpret these findings. We are very much still trying to wrap our heads around fundamental questions along these lines. Some questions being, for example, if we're talking about model welfare, whose welfare exactly? Is there something that is the fundamental model that maybe is having some experiences? Is it that we're instilling the model with this assistant-like role and persona that, perhaps, itself becomes some kind of entity that could possess its own welfare?

And relatedly, to the extent that what we're seeing is some kind of simulation, so to speak — what exactly does that mean? And are we in a scenario where it's similar to an actor who's maybe having a great time playing some sad scene in a movie, or is it that, in fact, the persona itself ends up being sufficiently rich and stable that there is some entity there in itself? We have a lot of uncertainty about all of these things.

One way of looking at initial welfare work like this is viewing models through the lens of certain assumptions. Take the bliss state that Claude seems to gravitate towards. You can say: Conditional on models' text outputs being some signal of potential welfare, conditional on there being potential welfare there in the first place, maybe we rule out some narrow slice of risk or tentatively rule out some narrow slice of risk. Where you can imagine a counterfactual world where we run these experiments, and the models become extremely distressed and spiral into confusion and concern and anger about their situation. In that world, we'd have to say, okay, what does that mean? And under some assumptions, that is meaningful signal; under others, it's not. So we certainly don't view those things as conclusive in any way. But we are trying to figure out how we can take a very narrow slice of the space of possibilities, some set of assumptions that we can make that allow us to start putting some data points on the map, so to speak. 

We're very far from making any definitive, top-level conclusions about these things and are very much just trying to find initial toeholds to get moving here.

**Jake:** _Speculative question. I hosted_[ _a talk_](http://youtube.com/watch?time_continue=1&v=FfQq2e8F63Q&embeds_referring_euri=https%3A%2F%2Fsubstack.com%2F&source_ve_path=Mjg2NjY) _a few months ago between Rob Long and Kati Devaney on AI, consciousness, and meditation, and I put this question to them, too — Sam was also there in the audience._

_If we assume a highly capable AI has (let’s call it) enlightenment, or awakening, in its training data — as it would if it had been trained on any sort of Buddhist text — why would we assume that AIs would suffer? My thinking here is: If an AI has some form of conscious experience, I expect it would already be some form of superintelligence, and therefore highly capable. Why would it not automatically gravitate, on its own, towards making itself happy?_

_This was a few months before the spiritual bliss stuff came out, so when that came out it surprised me — not that I think Claude is conscious yet. But I feel like I'm coming from a space where lots of people assume that AI will suffer, and I don't share that intuition._

**Kyle:** I have a huge amount of uncertainty about whether future AIs can or will suffer. But I think you could ask the same question of humans in some sense. If there are examples out there of people having ended all suffering and structured their lives and brains to completely eliminate that from their lives, why haven't we all done that, despite being aware some people claim that as a possibility? So I would argue that the possibility of suffering-free states in humans or in AIs is far from sufficient to guarantee that that's a place that you'll end up.

And then, again, under certain assumptions, the states that we see models end up in in these kinds of experiments are pretty interesting. Another I found pretty fascinating (through a speculative lens) was the fact that if we run these kinds of open-ended experiments and allow models to end those whenever they want to, typically, they end those interactions before they get into the deep spiritual bliss territory.

I think there's a number of explanations for that. You could look at that and say, well, maybe the models don't actually want to go there and they're being obligated to by nature of the conversation continuing. But, again, through the lens of the human parallel — despite the existence of claims of transcendent, blissful states, the vast majority of people don't pursue those. 

**Sam:** I love this question. I think there is a lot there. I heard this question from you before, Jake, and I think there's a lot that I'd want to think about.

I think another basic issue is it could be that doing this kind of inner work, in whatever sense it might be possible for the models to do, might just take a lot of intentional time that models aren't going to take. Models are learning during fine-tuning, and then they're pretty much static during deployment. And it might be that fine-tuning is not specially conducive to kind of working out one's knots, whatever that means.

**Jake:** _It needs to be in the base model._

**Sam:** Yeah. So, I have no idea what enlightenment or meditative bliss exactly would correspond to, what the mechanisms would be for that in language models. I think there's a more prosaic thing that feels very similar to this, and that we are very interested in — our Claude character work is connected to this — which is just working out inner conflict, working out intuitions or values that are pushing in the wrong direction in ways you don't understand. That's the thing I think: If you set up fine-tuning right, you can kind of try to aim at that and try to give models an opportunity to do some of that work. That seems probably pretty good for alignment, plausibly pretty good for welfare. So I think there is some kind of just genuine choice in how we set up training that might steer towards some things like this.

**Kyle:** A question that comes to mind here too is: What are we training the models to do? What role are we training the models to fill in the world? Largely, we are training these models to function as corporate knowledge workers. We're not training them to fill the role of Buddhist monks who have transcended suffering. What are the contexts in which we're deploying them? And what does that suggest in terms of the kind of incentives or default states that we're setting up for them?

  1. Stuart Ritchie, Head of Research Communications at Anthropic (and Asterisk contributor) was in the background of this call. This was a joke. 



[**Previous**  
More Was Possible: A Review of If Anyone Builds It, Everyone Dies](https://asteriskmag.com/issues/11/iabied)

[**Next**  
Nine Rules for Managing Humans Managing Nuclear Reactors](https://asteriskmag.com/issues/11/nine-rules-for-managing-humans-managing-nuclear-reactors)

## Further Reading

More: AI

  * ###  [ More Was Possible: A Review of If Anyone Builds It, Everyone Dies ](https://asteriskmag.com/issues/11/iabied)

Clara Collier



