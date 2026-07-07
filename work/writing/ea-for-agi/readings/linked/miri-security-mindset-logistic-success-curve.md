---
title: "Security Mindset and the Logistic Success Curve"
author: "Eliezer Yudkowsky"
date: 2017-11-26
url: https://intelligence.org/2017/11/26/security-mindset-and-the-logistic-success-curve/
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "MIRI security mindset for AI safety"
---

Skip to content

# Security Mindset and the Logistic Success Curve

  * [ November 26, 2017 ](https://intelligence.org/2017/11/26/)
  * [ Eliezer Yudkowsky  ](https://intelligence.org/author/eliezer/)



Follow-up to: [Security Mindset and Ordinary Paranoia](https://intelligence.org/2017/11/25/security-mindset-ordinary-paranoia/)

* * *

(_Two days later, Amber returns with another question._)

**AMBER:** Uh, say, Coral. How important is security mindset when you’re building a whole new kind of system—say, one subject to potentially adverse optimization pressures, where you want it to have some sort of robustness property?

**CORAL:** How novel is the system?

**AMBER:** Very novel.

**CORAL:** Novel enough that you’d have to invent your own new best practices instead of looking them up?

**AMBER:** Right.

**CORAL:** That’s serious business. If you’re building a very simple Internet-connected system, maybe a smart ordinary paranoid could look up how we usually guard against adversaries, use as much off-the-shelf software as possible that was checked over by real security professionals, and not do too horribly. But if you’re doing something qualitatively new and complicated that has to be robust against adverse optimization, well… mostly I’d think you were operating in almost impossibly dangerous territory, and I’d advise you to figure out what to do after your first try failed. But if you wanted to actually succeed, ordinary paranoia absolutely would not do it.

**AMBER:** In other words, projects to build novel mission-critical systems ought to have advisors with the full security mindset, so that the advisor can say what the system builders really need to do to ensure security.

**CORAL:** (_laughs sadly_) No.

**AMBER:** No?

**CORAL:** Let’s say for the sake of concreteness that you want to build a new kind of secure operating system. That is _not_ the sort of thing you can do by attaching one advisor with security mindset, who has limited political capital to use to try to argue people into doing things. “Building a house when you’re only allowed to touch the bricks using tweezers” comes to mind as a metaphor. You’re going to need experienced security professionals working full-time with high authority. Three of them, one of whom is a cofounder. Although even then, we might still be operating in the territory of Paul Graham’s Design Paradox.

**AMBER:** Design Paradox? What’s that?

**CORAL:** Paul Graham’s Design Paradox is that people who have good taste in UIs can tell when other people are designing good UIs, but most CEOs of big companies lack the good taste to tell who else has good taste. And that’s why big companies can’t just hire other people as talented as Steve Jobs to build nice things for them, even though Steve Jobs certainly wasn’t the best possible designer on the planet. Apple existed because of a lucky history where Steve Jobs ended up in charge. There’s no way for Samsung to hire somebody else with equal talents, because Samsung would just end up with some guy in a suit who was good at pretending to be Steve Jobs in front of a CEO who couldn’t tell the difference.

Similarly, people with security mindset can notice when other people lack it, but I’d worry that an ordinary paranoid would have a hard time telling the difference, which would make it hard for them to hire a truly competent advisor. And of course lots of the people in the larger social system behind technology projects lack even the ordinary paranoia that many good programmers possess, and they just end up with empty suits talking a lot about “risk” and “safety”. In other words, if we’re talking about something as hard as building a secure operating system, and your project hasn’t started up _already_ headed up by someone with the full security mindset, you are in trouble. Where by “in trouble” I mean “totally, irretrievably doomed”.

**AMBER:** Look, uh, there’s a certain project I’m invested in which has raised a hundred million dollars to create merchant drones.

**CORAL:** Merchant drones?

**AMBER:** So there are a lot of countries that have poor market infrastructure, and the idea is, we’re going to make drones that fly around buying and selling things, and they’ll use machine learning to figure out what prices to pay and so on. We’re not just in it for the money; we think it could be a huge economic boost to those countries, really help them move forwards.

**CORAL:** Dear God. Okay. There are exactly two things your company is about: system security, and regulatory compliance. Well, and also marketing, but that doesn’t count because every company is about marketing. It would be a severe error to imagine that your company is about anything else, such as drone hardware or machine learning.

**AMBER:** Well, the sentiment inside the company is that the time to begin thinking about legalities and security will be after we’ve proven we can build a prototype and have at least a small pilot market in progress. I mean, until we know how people are using the system and how the software ends up working, it’s hard to see how we could do any productive thinking about security or compliance that wouldn’t just be pure speculation.

**CORAL:** Ha! Ha, hahaha… oh my god you’re not joking.

**AMBER:** What?

**CORAL:** Please tell me that what you actually mean is that you have a security and regulatory roadmap which calls for you to do some of your work later, but clearly lays out what work needs to be done, when you are to start doing it, and when each milestone needs to be complete. Surely you don’t _literally_ mean that you _intend to start thinking about it_ later?

**AMBER:** A lot of times at lunch we talk about how annoying it is that we’ll have to deal with regulations and how much better it would be if governments were more libertarian. That counts as thinking about it, right?

**CORAL:** Oh my god.

**AMBER:** I don’t see how we could have a security plan when we don’t know exactly what we’ll be securing. Wouldn’t the plan just turn out to be wrong?

**CORAL:** All business plans for startups turn out to be wrong, but you still need them—and not just as works of fiction. They represent the written form of your current beliefs about your key assumptions. Writing down your business plan checks whether your current beliefs can possibly be coherent, and suggests which critical beliefs to test first, and which results should set off alarms, and when you are falling behind key survival thresholds. The idea isn’t that you stick to the business plan; it’s that having a business plan (a) checks that it seems possible to succeed in any way whatsoever, and (b) tells you when one of your beliefs is being falsified so you can explicitly change the plan and adapt. Having a written plan that you intend to rapidly revise in the face of new information is one thing. _NOT HAVING A PLAN_ is _another_.

**AMBER:** The thing is, I _am_ a little worried that the head of the project, Mr. Topaz, isn’t concerned enough about the possibility of somebody fooling the drones into giving out money when they shouldn’t. I mean, I’ve tried to raise that concern, but he says that of course we’re not going to program the drones to give out money to just anyone. Can you maybe give him a few tips? For when it comes time to start thinking about security, I mean.

**CORAL:** Oh. Oh, my dear, sweet summer child, I’m sorry. There’s nothing I can do for you.

**AMBER:** Huh? But you haven’t even looked at our beautiful business model!

**CORAL:** I thought maybe your company merely had a hopeless case of underestimated difficulties and misplaced priorities. But now it sounds like your leader is not even using ordinary paranoia, and reacts with skepticism to it. Calling a case like that “hopeless” would be an understatement.

**AMBER:** But a security failure would be very bad for the countries we’re trying to help! They need _secure_ merchant drones!

**CORAL:** Then they will need drones built by some project that is not led by Mr. Topaz.

**AMBER:** But that seems very hard to arrange!

**CORAL:** …I don’t understand what you are saying that is supposed to contradict anything I am saying.

**AMBER:** Look, aren’t you judging Mr. Topaz a little too quickly? Seriously.

**CORAL:** I haven’t met him, so it’s possible you misrepresented him to me. But if you’ve accurately represented his attitude? Then, yes, I did judge quickly, but it’s a hell of a good guess. Security mindset is already rare on priors. “I don’t plan to make my drones give away money to random people” means he’s imagining how his system could work as he intends, instead of imagining how it might not work as he intends. If somebody doesn’t even exhibit ordinary paranoia, spontaneously on their own cognizance without external prompting, then they cannot do security, period. Reacting indignantly to the suggestion that something might go wrong is even beyond that level of hopelessness, but the base level was hopeless enough already.

**AMBER:** Look… can you just go to Mr. Topaz and try to tell him what he needs to do to add some security onto his drones? Just try? Because it’s super important.

**CORAL:** I could try, yes. I can’t succeed, but I could try.

**AMBER:** Oh, but please be careful to not be harsh with him. Don’t put the focus on what he’s doing wrong—and try to make it clear that these problems aren’t _too_ serious. He’s been put off by the media alarmism surrounding apocalyptic scenarios with armies of evil drones filling the sky, and it took me some trouble to convince him that I wasn’t just another alarmist full of fanciful catastrophe scenarios of drones defying their own programming.

**CORAL:** …

**AMBER:** And maybe try to keep your opening conversation away from what might sound like crazy edge cases, like somebody forgetting to check the end of a buffer and an adversary throwing in a huge string of characters that overwrite the end of the stack with a return address that jumps to a section of code somewhere else in the system that does something the adversary wants. I mean, you’ve convinced me that these far-fetched scenarios are worth worrying about, if only because they might be canaries in the coal mine for more realistic failure modes. But Mr. Topaz thinks that’s all a bit silly, and I don’t think you should open by trying to explain to him on a meta level why it isn’t. He’d probably think you were being condescending, telling him how to think. Especially when you’re just an operating-systems guy and you have no experience building drones and seeing what actually makes them crash. I mean, that’s what I think he’d say to you.

**CORAL:** …

**AMBER:** Also, start with the cheaper interventions when you’re giving advice. I don’t think Mr. Topaz is going to react well if you tell him that he needs to start all over in another programming language, or establish a review board for all code changes, or whatever. He’s worried about competitors reaching the market first, so he doesn’t want to do anything that will slow him down.

**CORAL:** …

**AMBER:** Uh, Coral?

**CORAL:** … on his novel project, entering new territory, doing things not exactly like what has been done before, carrying out novel mission-critical subtasks for which there are no standardized best security practices, nor any known understanding of what makes the system robust or not-robust.

**AMBER:** Right!

**CORAL:** And Mr. Topaz himself does not seem much terrified of this terrifying task before him.

**AMBER:** Well, he’s worried about somebody else making merchant drones first and misusing this key economic infrastructure for bad purposes. That’s the same basic thing, right? Like, it demonstrates that he can worry about things?

**CORAL:** It is utterly different. Monkeys who can be afraid of other monkeys getting to the bananas first are far, far more common than monkeys who worry about whether the bananas will exhibit weird system behaviors in the face of adverse optimization.

**AMBER:** Oh.

**CORAL:** I’m afraid it is only slightly more probable that Mr. Topaz will oversee the creation of robust software than that the Moon will spontaneously transform into organically farmed goat cheese.

**AMBER:** I think you’re being too harsh on him. I’ve met Mr. Topaz, and he seemed pretty bright to me.

**CORAL:** Again, assuming you’re representing him accurately, Mr. Topaz seems to lack what I called ordinary paranoia. If he does have that ability as a cognitive capacity, which many bright programmers do, then he obviously doesn’t feel passionate about applying that paranoia to his drone project along key dimensions. It also sounds like Mr. Topaz doesn’t realize there’s a skill that he is missing, and would be insulted by the suggestion. I am put in mind of the story of the farmer who was asked by a passing driver for directions to get to Point B, to which the farmer replied, “If I was trying to get to Point B, I sure wouldn’t start from here.”

**AMBER:** Mr. Topaz has made some significant advances in drone technology, so he can’t be stupid, right?

**CORAL:** “Security mindset” seems to be a distinct cognitive talent from _g_ factor or even programming ability. In fact, there doesn’t seem to be a level of human genius that even guarantees you’ll be skilled at ordinary paranoia. Which does make some security professionals feel a bit weird, myself included—the same way a lot of programmers have trouble understanding why not everyone can learn to program. But it seems to be an observational fact that both ordinary paranoia and security mindset are things that can decouple from _g_ factor and programming ability—and if this were not the case, the Internet would be far more secure than it is.

**AMBER:** Do you think it would help if we talked to the other VCs funding this project and got them to ask Mr. Topaz to appoint a Special Advisor on Robustness reporting directly to the CTO? That sounds politically difficult to me, but it’s possible we could swing it. Once the press started speculating about drones going rogue and maybe aggregating into larger Voltron-like robots that could acquire laser eyes, Mr. Topaz did tell the VCs that he was very concerned about the ethics of drone safety and that he’d had many long conversations about it over lunch hours.

**CORAL:** I’m venturing slightly outside my own expertise here, which isn’t corporate politics per se. But on a project like this one that’s trying to enter novel territory, I’d guess the person with security mindset needs at least cofounder status, and must be personally trusted by any cofounders who don’t have the skill. It can’t be an outsider who was brought in by VCs, who is operating on limited political capital and needs to win an argument every time she wants to not have all the services conveniently turned on by default. I suspect you just have the wrong person in charge of this startup, and that this problem is not repairable.

**AMBER:** Please don’t just give up! Even if things are as bad as you say, just increasing our project’s probability of being secure from 0% to 10% would be very valuable in expectation to all those people in other countries who need merchant drones.

**CORAL:** …look, at some point in life we have to try to triage our efforts and give up on what can’t be salvaged. There’s often a logistic curve for success probabilities, you know? The distances are measured in multiplicative odds, not additive percentage points. You can’t take a project like this and assume that by putting in some more hard work, you can increase the absolute chance of success by 10%. More like, the odds of this project’s failure versus success start out as 1,000,000:1, and if we’re very polite and navigate around Mr. Topaz’s sense that he is higher-status than us and manage to explain a few tips to him without ever sounding like we think we know something he doesn’t, we can quintuple his chances of success and send the odds to 200,000:1. Which is to say that in the world of percentage points, the odds go from 0.0% to 0.0%. That’s one way to look at the “[law of continued failure](https://intelligence.org/2017/10/13/fire-alarm)”.

If you had the kind of project where the fundamentals implied, say, a 15% chance of success, you’d then be on the right part of the logistic curve, and in _that_ case it could make a lot of sense to hunt for ways to bump that up to a 30% or 80% chance.

**AMBER:** Look, I’m worried that it will really be very bad if Mr. Topaz reaches the market first with insecure drones. Like, I think that merchant drones could be very beneficial to countries without much existing market backbone, and if there’s a grand failure—especially if some of the would-be customers have their money or items stolen—then it could poison the potential market for years. It will be terrible! Really, genuinely terrible!

**CORAL:** Wow. That sure does sound like an unpleasant scenario to have wedged yourself into.

**AMBER:** But what do we do now?

**CORAL:** Damned if I know. I do suspect you’re screwed so long as you can only win if somebody like Mr. Topaz creates a robust system. I guess you could try to have some other drone project come into existence, headed up by somebody that, say, Bruce Schneier assures everyone is unusually good at security-mindset thinking and hence can hire people like me and listen to all the harsh things we have to say. Though I have to admit, the part where you think it’s drastically important that you beat an insecure system to market with a secure system—well, that sounds positively nightmarish. You’re going to need a lot more resources than Mr. Topaz has, or some other kind of very major advantage. Security takes time.

**AMBER:** Is it really that hard to add security to the drone system?

**CORAL:** You keep talking about “adding” security. System robustness isn’t the kind of property you can bolt onto software as an afterthought.

**AMBER:** I guess I’m having trouble seeing why it’s so much more expensive. Like, if somebody foolishly builds an OS that gives access to just anyone, you could instead put a password lock on it, using your clever system where the OS keeps the hashes of the passwords instead of the passwords. You just spend a couple of days rewriting all the services exposed to the Internet to ask for passwords before granting access. And then the OS has security on it! Right?

**CORAL:** NO. Everything inside your system that is potentially subject to adverse selection in its probability of weird behavior is a liability! Everything exposed to an attacker, and everything those subsystems interact with, and everything _those_ parts interact with! You have to build _all_ of it robustly! If you want to build a secure OS you need a whole special project that is “building a secure operating system instead of an insecure operating system”. And you also need to restrict the scope of your ambitions, and not do everything you want to do, and obey other commandments that will feel like big unpleasant sacrifices to somebody who doesn’t have the full security mindset. OpenBSD can’t do a tenth of what Ubuntu does. They can’t afford to! It would be too large of an attack surface! They can’t review that much code using the special process that they use to develop secure software! They can’t hold that many assumptions in their minds!

**AMBER:** Does that effort _have_ to take a significant amount of extra time? Are you sure it can’t just be done in a couple more weeks if we hurry?

**CORAL:** YES. Given that this is a novel project entering new territory, expect it to take _at least_ two years more time, or 50% more development time—whichever is less—compared to a security-incautious project that otherwise has identical tools, insights, people, and resources. And that is a very, very optimistic lower bound.

**AMBER:** This story seems to be heading in a worrying direction.

**CORAL:** Well, I’m sorry, but creating robust systems takes longer than creating non-robust systems even in cases where it would be really, extraordinarily bad if creating robust systems took longer than creating non-robust systems.

**AMBER:** Couldn’t it be the case that, like, projects which are implementing good security practices do everything so much cleaner and better that they can come to market faster than any insecure competitors could?

**CORAL:** … I honestly have trouble seeing [why](http://www.readthesequences.com/MotivatedStoppingAndMotivatedContinuation) you’re [privileging that hypothesis](https://www.readthesequences.com/PrivilegingTheHypothesis) for consideration. Robustness involves assurance processes that take additional time. OpenBSD does not go through lines of code faster than Ubuntu.

But more importantly, if everyone has access to the same tools and insights and resources, then an unusually fast method of doing something cautiously can always be degenerated into an even faster method of doing the thing incautiously. There is not now, nor will there ever be, a programming language in which it is the least bit difficult to write bad programs. There is not now, nor will there ever be, a methodology that makes writing insecure software inherently slower than writing secure software. Any security professional who heard about your bright hopes would just laugh. Ask them too if you don’t believe me.

**AMBER:** But shouldn’t engineers who aren’t cautious just be unable to make software at all, because of ordinary bugs?

**CORAL:** I am afraid that it is both possible, and _extremely_ common in practice, for people to fix all the bugs that are crashing their systems in ordinary testing today, using methodologies that are indeed adequate to fixing ordinary bugs that show up often enough to afflict a significant fraction of users, and then ship the product. They get everything working today, and they don’t feel like they have the slack to delay any longer than that before shipping because the product is already behind schedule. They don’t hire exceptional people to do ten times as much work in order to prevent the product from having holes that only show up under adverse optimization pressure, that somebody else finds first and that they learn about after it’s too late.

It’s not even the wrong decision, for products that aren’t connected to the Internet, don’t have enough users for one to go rogue, don’t handle money, don’t contain any valuable data, and don’t do anything that could injure people if something goes wrong. If your software doesn’t destroy anything important when it explodes, it’s probably a better use of limited resources to plan on fixing bugs as they show up.

… Of course, you need some amount of security mindset to realize which software _can_ in fact destroy the company if it silently corrupts data and nobody notices this until a month later. I don’t suppose it’s the case that your drones only carry a limited amount of the full corporate budget in cash over the course of a day, and you always have more than enough money to reimburse all the customers if all items in transit over a day were lost, taking into account that the drones might make many more purchases or sales than usual? And that the systems are generating internal paper receipts that are clearly shown to the customer and non-electronically reconciled once per day, thereby enabling you to notice a problem before it’s too late?

**AMBER:** Nope!

**CORAL:** Then as you say, it would be better for the world if your company didn’t exist and wasn’t about to charge into this new territory and poison it with a spectacular screwup.

**AMBER:** If I believed that… well, Mr. Topaz certainly isn’t going to stop his project or let somebody else take over. It seems the logical implication of what you say you believe is that I should try to persuade the venture capitalists I know to launch a safer drone project with even more funding.

**CORAL:** Uh, I’m sorry to be blunt about this, but I’m not sure _you_ have a high enough level of security mindset to identify an executive who’s sufficiently better than you at it. Trying to get enough of a resource advantage to beat the insecure product to market is only half of your problem in launching a competing project. The other half of your problem is surpassing the prior rarity of people with truly deep security mindset, and getting somebody like that in charge and fully committed. Or at least get them in as a highly trusted, fully committed cofounder who isn’t on a short budget of political capital. I’ll say it again: an advisor appointed by VCs isn’t nearly enough for a project like yours. Even if the advisor is a genuinely good security professional—

**AMBER:** This all seems like an unreasonably difficult requirement! Can’t you back down on it a little?

**CORAL:** —the person in charge will probably try to bargain down reality, as represented by the unwelcome voice of the security professional, who won’t have enough social capital to badger them into “unreasonable” measures. Which means you fail on full automatic.

**AMBER:** … Then what am I to do?

**CORAL:** I don’t know, actually. But there’s no point in launching another drone project with even more funding, if it just ends up with another Mr. Topaz put in charge. Which, by default, is exactly what your venture capitalist friends are going to do. Then you’ve just set an even higher competitive bar for anyone actually trying to be first to market with a secure solution, may God have mercy on their souls. 

Besides, if Mr. Topaz thinks he has a competitor breathing down his neck and rushes his product to market, his chance of creating a secure system could drop by a factor of ten and go all the way from 0.0% to 0.0%.

**AMBER:** Surely my VC friends have faced this kind of problem before and know how to identify and hire executives who can do security well?

**CORAL:** … If one of your VC friends is Paul Graham, then maybe yes. But in the average case, _NO_.

If average VCs always made sure that projects which needed security had a founder or cofounder with strong security mindset—if they had the _ability_ to do that _even in cases where they decided they wanted to_ —the Internet would again look like a very different place. By default, your VC friends will be fooled by somebody who looks very sober and talks a lot about how terribly concerned he is with cybersecurity and how the system is going to be ultra-secure and reject over nine thousand common passwords, including the thirty-six passwords listed on this slide here, and the VCs will ooh and ah over it, especially as one of them realizes that their own password is on the slide. _That_ project leader is absolutely not going to want to hear from me—even less so than Mr. Topaz. To him, I’m a political threat who might damage his line of patter to the VCs.

**AMBER:** I have trouble believing all these smart people are really that stupid.

**CORAL:** You’re compressing your innate sense of social status and your estimated level of how good particular groups are at this particular ability into a single dimension. That is not a good idea.

**AMBER:** I’m not saying that I think everyone with high status already knows the deep security skill. I’m just having trouble believing that they can’t learn it quickly once told, or could be stuck not being able to identify good advisors who have it. That would mean they couldn’t know something you know, something that seems important, and that just… feels _off_ to me, somehow. Like, there are all these successful and important people out there, and you’re saying [you’re _better_ than them](https://www.lesswrong.com/sequences/oLGCcbnvabyibnG9d), even with all their influence, their skills, their resources—

**CORAL:** Look, you don’t have to take my word for it. Think of all the websites you’ve been on, with snazzy-looking design, maybe with millions of dollars in sales passing through them, that want your password to be a mixture of uppercase and lowercase letters and numbers. In other words, they want you to enter “Password1!” instead of “correct horse battery staple”. Every one of those websites is doing a thing that looks humorously silly to someone with a full security mindset or even just somebody who regularly reads [XKCD](https://xkcd.com/936/). It says that the security system was set up by somebody who didn’t know what they were doing and was blindly imitating impressive-looking mistakes they saw elsewhere.

Do you think that makes a good impression on their customers? That’s right, it does! Because the customers don’t know any better. Do you think that login system makes a good impression on the company’s investors, including professional VCs and probably some angels with their own startup experience? That’s right, it does! Because the VCs don’t know any better, and even the angel doesn’t know any better, and they don’t realize they’re missing a vital skill, and they aren’t consulting anyone who knows more. An innocent is _impressed_ if a website requires a mix of uppercase and lowercase letters and numbers _and_ punctuation. They think the people running the website must really care to impose a security measure that unusual and inconvenient. The people running the website think that’s what they’re doing too.

People with deep security mindset are both rare and rarely _appreciated_. You can see just from the login system that none of the VCs and none of the C-level executives at that startup thought they needed to consult a real professional, or managed to find a real professional rather than an empty suit if they went consulting. There was, visibly, nobody in the neighboring system with the combined knowledge and status to walk over to the CEO and say, “Your login system is embarrassing and you need to hire a real security professional.” Or if anybody did say that to the CEO, the CEO was offended and shot the messenger for not phrasing it ever-so-politely enough, or the CTO saw the outsider as a political threat and bad-mouthed them out of the game.

Your wishful should-universe hypothesis that people who can touch the full security mindset are more common than that within the venture capital and angel investing ecosystem is just flat wrong. Ordinary paranoia directed at widely-known adversarial cases is dense enough within the larger ecosystem to exert widespread social influence, albeit still comically absent in many individuals and regions. People with the full security mindset are too rare to have the same level of presence. That’s the _easily visible_ truth. You can _see_ the login systems that want a punctuation mark in your password. You are not hallucinating them.

**AMBER:** If that’s all true, then I just don’t see how I can win. Maybe I should just condition on everything you say being false, since, if it’s true, my winning seems unlikely—in which case all victories on my part would come in worlds with other background assumptions.

**CORAL:** … is that something you say often?

**AMBER:** Well, I say it whenever my victory starts to seem sufficiently unlikely.

**CORAL:** Goodness. I could maybe, _maybe_ see somebody saying that once over the course of their entire lifetime, for a single unlikely conditional, but doing it more than once is sheer madness. I’d expect the unlikely conditionals to build up very fast and drop the probability of your mental world to effectively zero. It’s tempting, but it’s usually a bad idea to slip sideways into your own private [hallucinatory universe](https://www.facebook.com/yudkowsky/posts/10154981483669228) when you feel you’re under emotional pressure. I tend to believe that no matter what the difficulties, we are most likely to come up with good plans when we are mentally living in reality as opposed to somewhere else. If things seem difficult, we must face the difficulty squarely to succeed, to come up with some solution that faces down how bad the situation really is, rather than deciding to condition on things not being difficult because then it’s too hard.

**AMBER:** Can you at least _try_ talking to Mr. Topaz and advise him how to make things be secure?

**CORAL:** Sure. Trying things is easy, and I’m a character in a dialogue, so my opportunity costs are low. I’m sure Mr. Topaz is trying to build secure merchant drones, too. It’s succeeding at things that is the hard part.

**AMBER:** Great, I’ll see if I can get Mr. Topaz to talk to you. But do please be polite! If you think he’s doing something wrong, try to point it out more gently than the way you’ve talked to me. I think I have enough political capital to get you in the door, but that won’t last if you’re rude.

**CORAL:** You know, back in mainstream computer security, when you propose a new way of securing a system, it’s considered traditional and wise for everyone to gather around and try to come up with reasons why your idea might not work. It’s understood that no matter how smart you are, most seemingly bright ideas turn out to be flawed, and that you shouldn’t be touchy about people trying to shoot them down. Does Mr. Topaz have no acquaintance at all with the practices in computer security? A lot of programmers do.

**AMBER:** I think he’d say he respects computer security as its own field, but he doesn’t believe that building secure operating systems is the same problem as building merchant drones.

**CORAL:** And if I suggested that this case might be similar to the problem of building a secure operating system, and that this case creates a similar need for more effortful and cautious development, requiring both (a) additional development time and (b) a special need for caution supplied by people with unusual mindsets above and beyond ordinary paranoia, who have an unusual skill that identifies shaky assumptions in a safety story before an ordinary paranoid would judge a fire as being urgent enough to need putting out, who can remedy the problem using deeper solutions than an ordinary paranoid would generate as parries against imagined attacks?

If I suggested, indeed, that this scenario might hold generally wherever we demand robustness of a complex system that is being subjected to strong external or internal optimization pressures? Pressures that strongly promote the probabilities of particular states of affairs via optimization that searches across a large and complex state space? Pressures which therefore in turn subject other subparts of the system to selection for weird states and previously unenvisioned execution paths? Especially if some of these pressures may be in some sense creative and find states of the system or environment that surprise us or violate our surface generalizations?

**AMBER:** I think he’d probably think you were trying to look smart by using overly abstract language at him. Or he’d reply that he didn’t see why this took any more caution than he was already using just by testing the drones to make sure they didn’t crash or give out too much money.

**CORAL:** I see.

**AMBER:** So, shall we be off?

**CORAL:** Of course! No problem! I’ll just go meet with Mr. Topaz and use verbal persuasion to turn him into Bruce Schneier.

**AMBER:** That’s the spirit!

**CORAL:** God, how I wish I lived in the territory that corresponds to your map.

**AMBER:** Hey, come on. Is it seriously _that_ hard to bestow exceptionally rare mental skills on people by talking at them? I agree it’s a bad sign that Mr. Topaz shows no sign of wanting to acquire those skills, and doesn’t think we have enough relative status to continue listening if we say something he doesn’t want to hear. But that just means we have to phrase our advice cleverly so that he _will_ want to hear it!

**CORAL:** I suppose you could modify your message into something Mr. Topaz doesn’t find so unpleasant to hear. Something that sounds related to the topic of drone security, but which doesn’t cost him much, and of course does not actually cause his drones to end up secure because that would be all unpleasant and expensive. You could slip a little sideways in reality, and convince yourself that you’ve gotten Mr. Topaz to ally with you, because he sounds agreeable now. Your instinctive desire for the high-status monkey to be on your political side will feel like its problem has been solved. You can substitute the feeling of having solved that problem for the unpleasant sense of not having secured the actual drones; you can tell yourself that the bigger monkey will take care of everything now that he seems to be on your pleasantly-modified political side. And so you will be happy. Until the merchant drones hit the market, of course, but that unpleasant experience should be brief.

**AMBER:** Come on, we can do this! You’ve just got to think positively!

**CORAL:** … Well, if nothing else, this should be an interesting experience. I’ve never tried to do anything quite this doomed before.

Browse

Browse

##### Categories

  * [Analysis](https://intelligence.org/category/analysis/)
  * [Conversations](https://intelligence.org/category/conversations/)
  * [Guest Posts](https://intelligence.org/category/guest-posts/)
  * [MIRI Strategy](https://intelligence.org/category/miri/)
  * [News](https://intelligence.org/category/news/)
  * [Newsletters](https://intelligence.org/category/newsletters/)
  * [Papers](https://intelligence.org/category/papers/)
  * [Uncategorized](https://intelligence.org/category/uncategorized/)
  * [Video](https://intelligence.org/category/video/)



Subscribe

Follow us on

[ Facebook __](https://www.facebook.com/MachineIntelligenceResearchInstitute) [ X-twitter __](https://x.com/MIRIBerkeley) [ Rss __](https://intelligence.org/feed/)
