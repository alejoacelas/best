---
title: "A reply to Wait But Why on machine superintelligence"
url: https://lukemuehlhauser.com/a-reply-to-wait-but-why-on-machine-superintelligence/
fetched: 2026-07-06
via: html2text
topic: "ea-intro-program"
note: "EA Intro Program, session: Week 6 Emerging Technologies, optional"
---

Tim Urban of the wonderful  _[Wait But Why](http://waitbutwhy.com/)_ blog recently wrote two posts on machine superintelligence: [The Road to Superintelligence](http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html) and [Our Immortality or Extinction](http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html). These posts are probably now among the most-read introductions to the topic since Ray Kurzweil’s [2006 book](http://smile.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0143037889/).

In general I agree with Tim’s posts, but I think lots of details in his summary of the topic deserve to be corrected or clarified. Below, I’ll quote passages from his two posts, roughly in the order they appear, and then give my own brief reactions. Some of my comments are fairly nit-picky but I decided to share them anyway; perhaps my most important clarification comes at the end.

## From “The Road to Superintelligence”

> The average rate of advancement between 1985 and 2015 was higher than the rate between 1955 and 1985 — because the former was a more advanced world — so much more change happened in the most recent 30 years than in the prior 30.

Readers should know this claim is heavily debated, and its truth depends on what Tim means by “rate of advancement.” If he’s talking about the rate of progress in _information technology_ , the claim might be true. But it might be false for most other areas of technology, for example energy and transportation technology. [Cowen](http://en.wikipedia.org/wiki/The_Great_Stagnation), [Thiel](https://www.youtube.com/watch?v=XRrLyckg8Nc#t=8m20s), [Gordon](http://www.nber.org/papers/w18315), and [Huebner](http://www.sciencedirect.com/science/article/pii/S0040162505000235) argue that technological innovation more generally has slowed. Meanwhile, [Alexander](http://squid314.livejournal.com/352945.html), [Smart](http://accelerating.org/articles/huebnerinnovation.html), [Gilder](https://www.youtube.com/watch?v=XRrLyckg8Nc#t=23m08s), and others critique some of those arguments.

Anyway, most of what Tim says in these posts doesn’t depend much on the outcome of these debates.

> Artificial Narrow Intelligence is machine intelligence that equals or exceeds human intelligence or efficiency at a specific thing.

Well, that’s the goal. But lots of current ANI systems don’t _yet_ equal human capability or efficiency at their given task. To pick an easy example from game-playing AIs: chess computers reliably beat humans, and Go computers don’t ([but they will soon](http://spectrum.ieee.org/robotics/artificial-intelligence/ais-have-mastered-chess-will-go-be-next)).

> Each new ANI innovation quietly adds another brick onto the road to AGI and ASI.

I know Tim is speaking loosely, but I should note that many ANI innovations — probably most, depending on how you count — won’t end up contributing to progress toward AGI. Many ANI methods will end up being dead ends after some initial success, and their performance on the target task will be superseded by other methods. That’s how the history of AI has worked so far, and how it will likely continue to work.

> …the human brain is the most complex object in the known universe.

Well, not really. For example the brain of an African elephant has [3× as many neurons](http://www.ncbi.nlm.nih.gov/pubmed/24971054).

> Hard things — like calculus, financial market strategy, and language translation — are mind-numbingly easy for a computer, while easy things — like vision, motion, movement, and perception — are insanely hard for it.

Yes, [Moravec’s paradox](http://en.wikipedia.org/wiki/Moravec%27s_paradox) is roughly true, but I wouldn’t say that getting AI systems to perform well in asset trading or language translation has been “mind-numbingly easy.” E.g. machine translation is useful for getting the gist of a foreign-language text, but billions of dollars of effort still hasn’t produced a machine translation system as good as a mid-level human translator, and I expect this will remain true for at least another 10 years.

> One thing that definitely needs to happen for AGI to be a possibility is an increase in the power of computer hardware. If an AI system is going to be as intelligent as the brain, it’ll need to equal the brain’s raw computing capacity.

Because computing power is increasing so rapidly, we probably  _will_ have “more computing power than the human brain” ([speaking loosely](http://scienceblogs.com/developingintelligence/2007/03/27/why-the-brain-is-not-like-a-co/)) before we know how to build AGI, but I just want to flag that this isn’t  _conceptually_ necessary. In principle, an AGI design could be very different than the brain’s design, just like a plane isn’t designed much like a bird. Depending on the efficiency of the AGI design, it might be able to surpass human-level performance in all relevant domains using much  _less_ computing power than the human brain does, especially since [evolution is a very dumb designer](http://smile.amazon.com/Kluge-Haphazard-Evolution-Human-Mind/dp/054723824X/).

So, we don’t necessarily  _need_ human brain-ish amounts of computing power to build AGI, but the more computing power we have available, the dumber (less efficient) our AGI design can afford to be.

> One way to express this capacity is in the total calculations per second (cps) the brain could manage…

Just an aside: [TEPS is probably another good metric to think about](http://aiimpacts.org/tepsbrainestimate/).

> The science world is working hard on reverse engineering the brain to figure out how evolution made such a rad thing — [optimistic estimates](http://www.wired.com/2010/08/reverse-engineering-brain-kurzweil/) say we can do this by 2030.

I suspect that approximately _zero_ neuroscientists think we can reverse-engineer the brain — to the degree being discussed in this paragraph — by 2030. To get a sense of current and near-future progress in reverse-engineering the brain, see  _[The Future of the Brain](http://smile.amazon.com/Future-Brain-Essays-Leading-Neuroscientists/dp/069116276X/)_ (2014).

> One example of computer architecture that mimics the brain is the artificial neural network.

This probably isn’t a good example of the kind of brain-inspired insights we’d need to build AGI. Artificial neural networks arguably go back to the 1940s, and they mimic the brain only in the most basic sense. [TD learning](http://en.wikipedia.org/wiki/Temporal_difference_learning) would be a more specific example, except in that case computer scientists were using the algorithm before we discovered the brain also uses it.

> [We have] just recently been able to emulate a 1mm-long flatworm brain…

[No we haven’t](http://lesswrong.com/lw/lfn/we_havent_uploaded_worms/).

> The human brain contains 100 billion [neurons].

Good news! Thanks to a new technique we now have a more precise estimate: [86 billion neurons](http://journal.frontiersin.org/article/10.3389/neuro.09.031.2009/full).

> If that makes [whole brain emulation] seem like a hopeless project, remember the power of exponential progress — now that we’ve conquered the tiny worm brain, an ant might happen before too long, followed by a mouse, and suddenly this will seem much more plausible.

Because computing power advances so quickly, it probably won’t be the limiting factor on brain emulation technology. Scanning resolution and neuroscience knowledge are likely to lag far behind computing power: see chapter 2 of  _[Superintelligence](http://smile.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0199678111/)._

> …most of our current models for getting to AGI involve the AI getting there by self-improvement.

They do? Says who?

I think the path _from AGI to superintelligence_ is mostly or entirely about self-improvement, but the path _from current AI systems to AGI_ is mostly about human engineering work, probably until relatively shortly before the leading AI project reaches a level of capability worth calling “AGI.”

> …the median year on a survey of hundreds of scientists about when they believed we’d be more likely than not to have reached AGI was 2040…

That’s the number you get when you combine the estimates from several different recent surveys, including surveys of people who were mostly  _not_ AI scientists. If you stick to the survey of the top-cited living AI scientists — the one called “TOP100” [here](http://sophia.de/pdf/2014_PT-AI_polls.pdf) — the median estimate for 50% probability of AGI is 2050. (Not a big difference, though.)

> …many of the thinkers in this field think it’s likely that the progression from AGI to ASI [will happen]  _very_ quickly…

True, but it should be noted this is still a _minority_ position, as one can see in Tim’s 2nd post, or in section 3.3 of [the source paper](http://sophia.de/pdf/2014_PT-AI_polls.pdf).

> …90 minutes after that, the AI has become an ASI, 170,000 times more intelligent than a human.

Remember that lots of knowledge and intelligence comes from interacting with the world, not just from running computational processes more quickly or efficiently. Sometimes learning requires that you wait on some slow natural process to unfold. (In this context, even a 1-second experimental test is “slow.”)

## From “Our Immortality or Extinction”

> So the median participant thinks it’s more likely than not that we’ll have AGI 25 years from now.

Again, I think it’s better to use the numbers for the “TOP100” survey from [that paper](http://sophia.de/pdf/2014_PT-AI_polls.pdf), rather than the combined numbers.

> Due to something called _cognitive biases_ , we have a hard time believing something is real until we see proof.

There are [dozens of cognitive biases](http://en.wikipedia.org/wiki/List_of_cognitive_biases), so this is about as informative as saying “due to something called  _psychology_ , we…”

The _specific_ cognitive bias Tim seems to be discussing in this paragraph is the [availability heuristic](http://wiki.lesswrong.com/wiki/Availability_heuristic), or maybe the [absurdity heuristic](http://wiki.lesswrong.com/wiki/Absurdity_heuristic). Also see “[Cognitive Biases Potentially Affecting Judgment of Global Risks](https://intelligence.org/files/CognitiveBiases.pdf).”

> [Kurzweil is] well-known for his bold predictions and has a [pretty good record](http://bigthink.com/endless-innovation/why-ray-kurzweils-predictions-are-right-86-of-the-time) of having them come true

The linked article says “Ray Kurzweil’s predictions are right 86% of the time.” That statistic is from a self-assessment Kurzweil [published in 2010](http://www.kurzweilai.net/how-my-predictions-are-faring-an-update-by-ray-kurzweil). Not surprisingly, when independent parties try to grade the accuracy of Kurzweil’s predictions, they arrive at a much lower accuracy score: see page 21 of [this paper](http://www.fhi.ox.ac.uk/wp-content/uploads/FAIC.pdf).

How good is this compared to other futurists? Unfortunately,  _we have no idea_. The problem is that nobody else has bothered to write down so many specific technological forecasts over the course of multiple decades. So, give Kurzweil credit for  _daring to make lots of predictions_.

My own vague guess is that Kurzweil’s track record is actually pretty impressive, but not as impressive as his own self-assessment suggests.

> Kurzweil predicts that we’ll get [advanced nanotech] by the 2020s.

I’m not sure [which Kurzweil prediction](http://en.wikipedia.org/wiki/Predictions_made_by_Ray_Kurzweil) about nanotech Tim is referring to, because the associated footnote points to a page of _The Singularity is Near_ that isn’t about nanotech. But if he’s talking about advanced Drexlerian nanotech, then I suspect approximately zero nanotechnologists would agree with this forecast.

> I expected [Kurzweil’s] critics to be saying, “Obviously that stuff can’t happen,” but instead they were saying things like, “Yes, all of that can happen if we safely transition to ASI, but that’s the hard part.” Bostrom, one of the most prominent voices warning us about the dangers of AI, still acknowledges…

Yeah, but Bostrom and Kurzweil are both famous futurists. There are plenty of _non_ -futurist critics of Kurzweil who _would_ say “Obviously that stuff can’t happen.” I happen to [agree](http://intelligenceexplosion.com/en/2012/engineering-utopia/) with Kurzweil and Bostrom about the radical goods within reach of a [human-aligned superintelligence](https://intelligence.org/technical-agenda/), but let’s not forget that most AI scientists, and most PhD-carrying members of society in general, probably  _would_ say “Obviously that stuff can’t happen” in response to Kurzweil.

> The people on Anxious Avenue aren’t in Panicked Prairie or Hopeless Hills — both of which are regions on the far left of the chart — but they’re nervous and they’re tense.

Actually, the people Tim is talking about here _are_ often more pessimistic about societal outcomes than Tim is suggesting. Many of them are, roughly speaking, 65%-85% confident that machine superintelligence will lead to human extinction, and that it’s only in a small minority of possible worlds that humanity [rises to the challenge](https://intelligence.org/2014/10/16/agi-outcomes-civilizational-competence/) and gets a machine superintelligence [robustly aligned with humane values](https://intelligence.org/technical-agenda/).

Of course, it’s  _also_ true that many of the people who write about the importance of AGI risk mitigation are more  _optimistic_ than the range shown in Tim’s graph of “Anxious Avenue.” For example, one researcher I know thinks it’s maybe 65% likely we get really good outcomes from machine superintelligence. But he notes that a ~35% chance of  _human friggin’ extinction_ is totally worth trying to mitigate as much as we can, including by funding hundreds of smart scientists to study potential solutions decades in advance of the worst-case scenarios, _like we already do with regard to a global warming, a much smaller problem_. (Global warming is a big problem on a normal person’s scale of things to worry about, but even climate scientists don’t think it’s capable of human extinction in the next couple centuries.)

Or, as Stuart Russell — author of [the leading AI textbook](http://aima.cs.berkeley.edu/) — likes to [put it](http://www.independent.co.uk/news/science/stephen-hawking-transcendence-looks-at-the-implications-of-artificial-intelligence--but-are-we-taking-ai-seriously-enough-9313474.html), “If a superior alien civilization sent us a message saying, ‘We’ll arrive in a few decades,’ would we just reply, ‘OK, call us when you get here – we’ll leave the lights on’? Probably not — but this is more or less what is happening with AI. Although we are facing potentially the best or worst thing to happen to humanity in history, little serious research is devoted to these issues outside non-profit institutes…”1

> [In the movies] AI becomes as or more intelligent than humans, then decides to turn against us and take over. Here’s what I need you to be clear on for the rest of this post: _None of the people warning us about AI are talking about this_. Evil is a human concept, and applying human concepts to non-human things is called “anthropomorphizing.”

_Thank you_. Jesus Christ I am tired of clearing up that very basic confusion, even for many AI scientists.

> Turry started off as Friendly AI, but at some point, she turned Unfriendly, causing the greatest possible negative impact on our species.

Just FYI, at MIRI we’ve started to move away from the “Friendly AI” language recently, since people think “Oh, like C-3PO?” MIRI’s recent papers use phrases like “[superintelligence alignment](https://intelligence.org/technical-agenda/)” instead.

In any case, my real comment here is that the quoted sentence above doesn’t use the terms “Friendly” or “Unfriendly” the way they’ve been used traditionally. In the usual parlance, a Friendly AI doesn’t “turn” Unfriendly. If it becomes Unfriendly at some point, then it was  _always_ an Unfriendly AI, it just wasn’t powerful enough yet to be a harm to you.

Tim does sorta fix this much later in the same post when he writes: “So Turry didn’t ‘turn against us’ or ‘switch’ from Friendly AI to Unfriendly AI — she just kept doing her thing as she became more and more advanced.”

> When we’re talking about ASI, the same concept applies — it would become superintelligent, but it would be no more human than your laptop is.

Well, this depends on how the AI is designed. If the ASI is an uploaded human, it’ll be pretty similar to a human in lots of ways. If it’s  _not_ an uploaded human, it could still be purposely designed to be human-like in many different ways. But mimicking human psychology in any kind of detail almost certainly isn’t the quickest way to AGI/ASI — just like mimicking bird flight in lots of detail wasn’t how we built planes — so  _practically speaking_ yes, the first AGI(s) will likely be very alien from our perspective.

> _What motivates an AI system?_ The answer is simple: its motivation is _whatever we programmed its motivation to be_. AI systems are given goals by their creators — your GPS’s goal is to give you the most efficient driving directions; Watson’s goal is to answer questions accurately. And fulfilling those goals as well as possible is their motivation.

_Some_ AI programs today are goal-driven, but most are not. Siri isn’t trying to maximize some goal like “be useful to the user of this iPhone” or anything like that. It just has a long list of rules about what kind of output to provide in response to different kinds of commands and questions. Various  _sub-components_ of Siri might be sorta goal-oriented — e.g. there’s an evaluation function trying to pick the most likely accurate transcription of your spoken words — but the system as a whole isn’t goal-oriented. (Or at least, this is how it seems to work. Apple hasn’t shown me Siri’s source code.)

As AI systems become more autonomous, giving them goals becomes more important because you can’t feasibly specify how the AI should react in every possible arrangement of the environment — instead, you need to give it goals and let it do its own on-the-fly planning for how it’s going achieve those goals in unexpected environmental conditions.

The programming for a Predator drone doesn’t include a list of instructions to follow for every possible combination of takeoff points, destinations, and wind conditions, because that list would be impossibly long. Rather, the operator gives the Predator drone a goal destination and the drone figures out how to get there on its own.

> …when [Turry] wasn’t yet that smart, doing her best to achieve her final goal meant simple instrumental goals like learning to scan handwriting samples more quickly. She caused no harm to humans and was, by definition, Friendly AI.

Again, I’ll mention that’s not how the term has traditionally been used, but whatever.

> But there are all kinds of governments, companies, militaries, science labs, and black market organizations working on all kinds of AI. Many of them are trying to build AI that can improve on its own…

This isn’t true unless by “AI that can improve on its own” you just mean “machine learning.” Almost nobody in AI is working on the kind of recursive self-improvement you’d need to get an intelligence explosion. Lots of people are working on systems that could eventually provide some  _piece_ of the foundational architecture for a self-improving AGI, but almost nobody is working directly on the recursive self-improvement problem right now, because it’s too far beyond current capabilities.2

> …because many techniques to build innovative AI systems don’t require a large amount of capital, development can take place in the nooks and crannies of society, unmonitored.

True, it’s much harder to monitor potential AGI projects than it is to track uranium enrichment facilities. But you can at least track  _AI research talent_. Right now it doesn’t take a ton of work to identify a set of 500 AI researchers that probably contains the most talented ~150 AI researchers in the world. Then you can just _track all 500 of them_.

This is similar to back when physicists were starting to realize that a nuclear fission bomb might be feasible. Suddenly a few of the most talented researchers stopped presenting their work at the usual conferences, and the other nuclear physicists pretty quickly deduced: “Oh, shit, they’re probably working on a secret government fission bomb.” If Geoff Hinton or even the much younger Ilya Sutskever suddenly went underground tomorrow, a lot of AI people would notice.

Of course, such a tracking effort might not be so feasible 30-60 years from now, when serious AGI projects will be more numerous and greater proportions of world GDP and human cognitive talent will be devoted to AI efforts.

## Final thoughts

> On the contrary, what [AI developers are] probably doing is programming their early systems with a very simple, reductionist goal — like writing a simple note with a pen on paper — to just “get the AI to work.” Down the road, once they’ve figured out how to build a strong level of intelligence in a computer, they figure they can always go back and revise the goal with safety in mind. Right…?

Again, I note that most AI systems today are not goal-directed.

I also note that sadly, I suspect it wouldn’t just be a matter of “going back to revise the goal with safety in mind” after a certain level of AI capability is reached. Most proto-AGI designs probably aren’t even the  _kind_ of systems you can make robustly safe, no matter  _what_ goals you program into them. (Though note that this view, illustrated below, is contentious.3 )

To illustrate what I mean, imagine a hypothetical computer security expert named [Bruce](http://en.wikipedia.org/wiki/Bruce_Schneier). You tell Bruce that he and his team have just 3 years to modify the latest version of Microsoft Windows so that it can’t be hacked _in any way_ , even by the smartest hackers on Earth. If he fails, Earth will be destroyed because _reasons_.

Bruce just stares at you and says, “Well, that’s impossible, so I guess we’re all fucked.”

The problem, Bruce explains, is that Microsoft Windows was never designed to be anything remotely like “unhackable.” It was designed to be easily useable, and compatible with lots of software, and flexible, and affordable, and _just barely secure enough to be marketable_ , and you can’t just slap on a special Unhackability Module at the last minute.

To get a system that even has a  _chance_ at being robustly unhackable, Bruce explains, you’ve got to design an entirely different hardware + software system that was _designed from the ground up_ to be unhackable. And that system must be designed _in an entirely different way_ than Microsoft Windows is, and no team in the world could do everything that is required for that in a mere 3 years. So, we’re fucked.

But! By a stroke of luck, Bruce learns that some teams  _outside_ Microsoft have been working on a [theoretically](https://intelligence.org/2013/10/03/proofs/) unhackable hardware + software system for the past several decades (high reliability is  _hard_) — people like [Greg Morrisett](https://intelligence.org/2013/11/05/greg-morrisett-on-secure-and-reliable-systems-2/) (SAFE) and [Gerwin Klein](https://intelligence.org/2014/02/11/gerwin-klein-on-formal-methods/) (seL4). Bruce says he might be able to take _their_ work and add the features you need, while preserving the strong security guarantees of the original highly secure system. Bruce sets Microsoft Windows aside and gets to work on trying to make this other system satisfy the mysterious  _reasons_ while remaining unhackable. He and his team succeed just in time to save the day.

This is an oversimplified and comically romantic way to illustrate what MIRI is trying to do in the area of long-term AI safety. We’re trying to think through what properties an AGI would need to have if it was going to _very reliably_ act in accordance with humane values even as it rewrote its own code a hundred times on its way to machine superintelligence. We’re asking: “What would it look like if somebody tried to design an AGI that was _designed from the ground up_ not for affordability, or for speed of development, or for economic benefit at every increment of progress, but for _reliably beneficial behavior even under conditions of radical self-improvement?_[What does the computationally unbounded solution to that problem look like](https://intelligence.org/technical-agenda/), so we can gain conceptual insights useful for later efforts to build a computationally tractable self-improving system reliably aligned with humane interests?”

So if you’re reading this, and you happen to be a highly gifted mathematician or computer scientist, and you want a full-time job working on the most important challenge of the 21st century, well… [we’re hiring](https://intelligence.org/careers/research-fellow/). (I will also try to appeal to your vanity: Please note that because so little work has been done in this area, you’ve still got a decent chance to contribute to what will eventually be recognized as the early, foundational results of the most important field of research in human history.)

My thanks to Tim Urban for his very nice posts on machine superintelligence. Be sure to read [his ongoing series about Elon Musk](http://waitbutwhy.com/2015/05/elon-musk-the-worlds-raddest-man.html).

  1. This quote will probably be widely attributed to Stephen Hawking, because Hawking is more famous than that article’s other three authors: Stuart Russell, Max Tegmark, and Frank Wilczek. But I happen to know the “visiting alien civilization” analogy is originally due to Russell, so I’m attributing that particular paragraph to Russell. [↩]
  2. I say “almost nobody” because there are some  _debatable_ candidates for “working on recursive self-improvement.” E.g. Jürgen Schmidhuber might describe his [Gödel machine](http://en.wikipedia.org/wiki/G%C3%B6del_machine) this way, but very few people think the Gödel machine will be all that relevant to AGI development. [↩]
  3. This paragraph was modified, and this footnote was added, on 10/28/2017. There is much disagreement about how difficult it will be to “align” advanced AI systems. Some people who have thought about it a lot are relatively optimistic (e.g. [Christiano](https://ai-alignment.com/corrigibility-3039e668638)), and some others are very pessimistic (e.g. Yudkowsky, see [1](https://arbital.com/p/hard_corrigibility/), [2](https://arbital.com/p/context_disaster/), [3](https://arbital.com/p/edge_instantiation/), [4](https://arbital.com/p/unforeseen_maximum/)). My own ‘inside view’ models are pretty pessimistic, but I give substantial weight to the (often more optimistic) views of others, some of whom have thought about the problem longer and harder than I have, and are often in a better position to have reasonable intuitions about the question than I am. [↩]


