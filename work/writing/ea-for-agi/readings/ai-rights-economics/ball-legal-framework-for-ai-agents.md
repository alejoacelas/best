---
title: "A Legal Framework for AI Agents"
author: "Dean W. Ball"
url: https://www.hyperdimensional.co/p/a-legal-framework-for-ai-agents
fetched: 2026-07-09
via: html2text
topic: "ai-rights"
note: "stage6 scour: concrete near-term version — agency law and dynamically-generated contracts for AI agents through existing legal vehicles"
---

# A Legal Framework for AI Agents

### Part II of "Is AI in Trouble at the Supreme Court?"

[](https://substack.com/@deanwball)

[Dean W. Ball](https://substack.com/@deanwball)

Jul 11, 2024

9

2

1

Share

 _After a hiatus, I’m bringing back “quick hits”—but now, just one. This will allow me to into slightly more depth on research developments in AI without making my posts_ too _long. I hope you find them helpful._

_Today’s post is speculative. It close to the highest level of “perplexity” I am comfortable writing publicly. It is also ambitious—almost certainly more ambitious than what can be accommodated comfortably in a Substack post, and perhaps more ambitious than a single, non-lawyer can persuasively argue. Most importantly, it is a work in progress. Please take it in that spirit, and get in touch with feedback!_

### **Quick Hit**

  * DeepMind has a new approach to model training, called Joint Example Selection for Training (JEST), that they report can reduce the amount of compute required by **90%**. It involves first training a smaller model (the reference model) to choose the best data for the larger model (the one being trained) to learn at that specific point in training. Imagine, though this is not entirely accurate, that current models are trained by having random chunks of the internet thrown at them chaotically. How well do you think _you_ would learn if that were the process? Instead imagine that you were given subject-matter specific textbooks that increased in complexity as you learned. Wouldn’t that be easier, and more effective? This is what JEST is trying to accomplish, but automatically—though it’s worth noting that the authors needed to do substantial additional engineering to get the efficiency gains quoted, since after all, using the reference model requires compute.   
  
This is an example of current-generation models being used to improve the next-generation of models, which we will only see more of as models improve. It’s also a good example of why regulation of models based on static thresholds is likely to be folly. 




### **The Main Idea**

In [my last piece](https://www.hyperdimensional.co/p/is-ai-in-trouble-at-the-supreme-court) I talked about the Supreme Court’s recent ruling in the _NetChoice_ cases, which centered on efforts by Texas and Florida to regulate social media. The court found that the case had not been argued properly and sent it back to lower courts. But it also said that the bills—at least as they apply to social media feeds—were likely unconstitutional. Basically, the majority opinion argued, content moderation is an exercise of free speech by the social media platform owners (Meta, Twitter, etc.). Regulating that speech deprives those firms of their Constitutional rights. 

However, several of the conservative Justices—Amy Coney Barrett, Neil Gorsuch, Samuel Alito, and Clarence Thomas—[expressed skepticism](https://www.supremecourt.gov/opinions/23pdf/22-277_d18f.pdf) about whether free speech protections like this should extent to automated content curation and moderation decisions made by AI systems. To [quote](https://www.supremecourt.gov/opinions/23pdf/22-277_d18f.pdf) Justice Barrett: 

> And what about AI, which is rapidly evolving? What if a platform's owners hand the reins to an AI tool and ask it simply to remove 'hateful' content? If the AI relies on large language models to determine what is 'hateful' and should be removed, has a human being with First Amendment rights made an inherently expressive “choice . . . not to propound a particular point of view”?

And Justices Alito, Thomas, and Gorsuch, writing jointly: 

> And when AI algorithms make a decision, “even the researchers and programmers creating them don't really understand why the models they have built make the decisions they make.” Are such decisions equally expressive as the decisions made by humans? Should we at least think about this?

The Justices have homed in on an issue that vexes many in the AI community: when an AI acts on a person’s behalf, is that AI operating as an extension of the user’s will? Or is it operating on behalf of the company that made it? On its own behalf? On nobody’s behalf?

The answers to this question will determine much about how AI is treated in the legal system—far beyond social media regulation. Many in the AI policy discourse have developed complex proposals about how AI acting on a user’s behalf should be treated legally. The problem with those proposals is that it is impossible to contemplate _ex ante_ all of the potential complications that might arise in the real world. They are the rational creations of one person, or a small group. For a legal framework to govern a general-purpose technology as complex as AI, _this will never work_. It doesn’t matter how long your paper is, nor how dense your bibliography, nor how attractive your cover art. My contention is simple: _no one_ will _ever_ be able to design a legal framework to govern the interaction of AI agents with society from scratch. 

Fortunately, I believe that there is a far better (though not necessarily more elegant) solution: agency law, updated iteratively to reflect the unique characteristics of AI (namely, that it does human-like things while not possessing legal personhood), adjudicated within a new kind of legal or arbitration venue designed specifically for this purpose. 

In this post, I’m going to tackle the first two of legs of this proposal. I’ll explain what agency law is, how it applies to AI, and how we might think about updating agency law over time to incorporate AI more effectively. I’m going to leave the third leg—the creation of a new kind of venue to adjudicate disputes relating to AI agents—for a later post and follow-on research to be published elsewhere. 

**Agency Law and AI**

If you squint, the issues we are dealing with here are not new. Humans hire other humans to do things for them all the time, and sometimes the employed humans do not behave according to the expectations of the employer. This is known as the principal-agent problem, and as one might imagine, there is an enormous amount of legal doctrine related to it. 

This doctrine, broadly speaking, is called “agency law.” It’s part of the common law, a legal tradition that began in Britain centuries ago and was inherited by the United States as a British colony. The idea behind common law is that it is updated by judges, in a decentralized and iterative way, as novel situations challenge the existing legal principles. For the technically inclined, think of it a bit like a thoroughly maintained and long-lasting GitHub project. 

In the American context, the decentralized nature of common law means that it can vary considerably by state. Another tradeoff of common law is that it tends to be _very_ fact-dependent, meaning that the answer to most legal inquiries involving it is that famous lawyerly refrain: “it depends.” 

But for thoroughly litigated areas of law (as agency and the closely related field of employment law are), that means it is highly robust. Common law has dealt with huge varieties of different circumstances. What if you hire me to move some of your old furniture to a storage shed, but I stop to get packing tape (necessary for the work) but also a lottery ticket (unnecessary), and during that stop I accidentally hit someone’s car? Are you, as my employer, responsible, in part or in full? You can bet the common law has seen that circumstance before (or something very similar). 

Let’s consider how that might apply with an AI agent. The “scope” of an AI model’s “employment” by a user might include the End-User Agreement issued by the model developer, the prompt given by the user to the model, and perhaps the system prompt issued by the model developer to the model (though it may depend whether that system prompt is known to the user). 

Let’s say I ask a near-future AI agent to book me a flight. One way you could imagine the model accomplishing this—say, if you’re Apple—would be for it to go to a flight booking app or website and book the flight (lots of technical complexity there, but y’know, that’s someone else’s job, and they get paid very well to do it). Another way to imagine the model accomplishing this—say, if you are Leopold Aschenbrenner or a writer for _Rick and Morty_ —would be for the model to orchestrate a plan to kidnap the son of an airline CEO and hold him hostage in exchange for my tickets, or perhaps for the model or orchestrate a hostile takeover of American Airlines itself. 

One of those sounds better to me, and also more realistic, than the others. But there is a lot of gray area one can imagine in between: what is my budget for the flight? When do I want to leave? What airline do I prefer? Even if the model asked those basic questions, though, one can imagine situations where there is some ambiguity and the model does something dramatically wrong. Who is to blame in that situation? “It depends!” Perhaps you are liable, or perhaps the model developer is. The answer needn’t concern us too much. The point is that this question is _answerable_ through an established process (civil litigation) that (basically) works and sits on top of a centuries-old legal tradition that has contemplated a _lot_ of difficult legal dilemmas over time. 

Is that _perfect_ in the mathematically deterministic way that so many in the AI policy community seem to desire from public policy and the law? No. But is it _good enough_ for us to maintain social order and muddle through? Yes, I think—at least in principle. 

Agency law obviously presumes that both parties are human beings with full Constitutional and other legal rights. Right now, I think almost everyone is not inclined to extend such rights to AI models. Of course, we would all agree that _the company_ that made the AI model has legal rights. But the model itself does not, meaning that its behavior is an extension of the _user’s_ rights. 

To summarize, then, the legal framework I am describing is one in which: 

  1. AI models, including ones that take action on our behalf, are tools whose users are responsible for their actions. The model’s speech is the user’s speech; their action’s are an extension of the user’s. This includes crimes committed by the model on the user’s behalf. 

  2. _Unless_ the model wildly violates the scope of its “employment,” as defined by its associated user agreement, its system prompt, and prompts provided by the user. If there is a dispute, it goes to either some kind of arbitration system (perhaps enabled by AI!) with an option to appeal to civil courts, or to the civil courts directly (this definitely gets more complicated if there is criminal law involved). This process, and many of the other nuances and complexities that could arise, would be guided by agency law. 




It would take substantial work to update agency law (as needed, iteratively, over extended periods of time) for this new dynamic. It’s a little complicated, to be sure. But it is not an _insurmountable_ amount of work. If building a colony on Mars is a 9, this is, like, a 3 or 4? 

Doing that work, however, would require broad societal buy-in that AI models are mere tools whose users are responsible for what they do with them (with all the caveats of agency law that could conceivably apply, which are many). For now, I’ll call this application of agency law to AI models (who have no rights themselves) a “tool-based agency law framework.” Hopefully, someone can come up with a better name. 

Non-human “agents” have already been considered by courts. There have been cases involving [web scraping bots](https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/18/17-16783.pdf), [algorithmic trading bots](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-25427), and [news aggregating bots](https://en.wikipedia.org/wiki/Associated_Press_v._Meltwater_U.S._Holdings,_Inc.), among many others. In all cases, these bots have been deemed tools owned by their human users, meaning that there is a rebuttable presumption (note for law nerds: I mean “rebuttable presumption” colloquially, not as a legal term of art) that the user is liable for what the tool does. 

But these bots are far less capable than the AI models we have today, to say nothing of those we expect to have over the next decade. Should a similar, tool-based framework apply to increasingly capable AI systems? Or is there some point at which AI systems should  _not_ be treated as tools? How would we identify that point? Let’s consider. 

**The Once and Future Agents**

One way to determine whether a model has graduated beyond the status of a mere tool might be based on capability—another instance of the “capabilities-based thresholds” that AI policy wonks are so fond of. But how do we measure capability? Is GPT-4 more capable than one of Jane Street’s automated trading systems? GPT-4 can write poems about thermodynamics, but the Jane Street bot can make millions of dollars in a day. Indeed, Mustafa Suleyman, Microsoft’s head of AI research, [has argued](https://www.technologyreview.com/2023/07/14/1076296/mustafa-suleyman-my-new-turing-test-would-see-if-ai-can-make-1-million/) that for a “new Turing Test” based on whether an AI can autonomously make $1 million. But by some measures (crude ones, I know), this test has already been passed by systems that are far less “capable,” at least in the thermodynamics-poem sense.

Sure, one could retort, but the Jane Street bot doesn’t really do anything we associate with humans. It feels cold and robot-like, whereas ChatGPT writes limericks and understands puns. So one might say that there is some threshold of AI capability that, after being crossed, is too “human-like” for it to be considered a mere tool. That seems kind of arbitrary though, doesn’t it? There are many cognitive capabilities that computers automate in whole or in part that were once the exclusive domain of humans—from spell check to arithmetic. Why draw the line now? And where, precisely—and I do mean  _precisely_ —should it be drawn?

One could also argue, as Justice Alito suggests, that some other, non-tool legal framework should apply to AI systems because we “do not understand how they work.” But there are many tools whose mechanisms are not understood by their users (how many people reading this could explain exactly how their computer works?). Those users are still responsible for their use of the tool.

Maybe the reason to apply a non-tool legal framework is a combination of the above things: we don’t understand how they work  _and_ these systems are being used for high-stakes decisions. But what about when they are not used for high-stakes decisions? Who decides what a high-stakes decision  _is_ , and on what grounds? If I use my car’s lane-keep assist cruise control irresponsibly and get into an accident, it is still my fault, even though I was using a system whose workings I do not understand in detail (both the cruise control and the car itself) for an undeniably high-stakes endeavor.

Say an LLM makes content moderation decisions for a social media platform, as Justice Barrett suggests in her opinion, and say it makes a decision that is different from what the employee who “supervises” it would have made. Who is responsible—the human or the LLM? Some see this as a novel problem; others see it, basically, as a problem older than Hammurabi (I suspect this difference in disposition is at the heart of many disputes in AI policy).

I suspect many people intuitively think a more complicated legal framework will be required for “advanced” AI because these systems feel so much more human-like than my car’s cruise control, or Jane Street’s bot. But is that not just anthropomorphizing these systems? Does anyone  _know_ that they should be treated as anything other than tools, albeit highly capable and general-purpose ones? Or do some people just reckon that to be the case? And if so, why should we trust them over others? Should we trust them because they play to our human anthropomorphic biases, and our fears, and our gut instincts? Should we trust them enough to write a new legal framework from scratch?

**Conclusion**

It seems likely that none of the Justices have made up their minds about these questions. And as the Justices almost uniformly articulated in their opinions, perhaps the biggest mistake we make when we discuss technology policy is to treat the technology in question like a monolith. That may work for lathes and saws, but for general-purpose information technologies, it is folly indeed.

In surveying the  _NetChoice_ cases, the justices saw an argument that is simultaneously focused on an overly narrow problem (political speech on social media feeds) and on an overly broad problem (is regulating social media Constitutional?). They urged the parties to think both more comprehensively  _and_ more specifically. Perhaps we would all be wise to do the same—at least, if we wish to win arguments in court rather than on Twitter.

All of this is far from a criticism of the Court: the point of the judicial system, and the Supreme Court in particular, is to take a deliberate, reasoned approach to difficult questions. And unlike, sadly, in the legislature, this is a deliberative process that must remain grounded, to the best of the judges’ ability, in the Constitution, relevant statutes, and the evidence at hand. It may not always satisfy everyone—indeed, it may  _infuriate_ nearly everyone at least some of the time. 

But it’s also why a fisherman who felt he was being treated unfairly by his government [could upend](https://www.hyperdimensional.co/p/what-overruling-chevron-means-for) a decades-old legal doctrine, and why one incarcerated man could hand-write a letter from jail that [would guarantee](https://en.wikipedia.org/wiki/Gideon_v._Wainwright) everyone arrested thereafter the right to an attorney, paid for by the state whether it wants to or not. 

And  _that_ , I think,__ is a system worth preserving, frustrations and all.

Hyperdimensional is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.

9

2

1

Share
