---
title: "The Costly Coordination Mechanism of Common Knowledge"
author: "Ben Pace, the Vacationing Vagabond"
date: 2018-03-15
url: https://www.lesswrong.com/posts/9QxnfMYccz9QRgZ5z/the-costly-coordination-mechanism-of-common-knowledge
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by richard-ngo/power-lies-trembling; common knowledge as coordination mechanism, coups/coordination"
---

*Recently someone pointed out to me that there was no good canonical post that explained the use of common knowledge in society. Since I wanted to be able to link to such a post, I decided to try to write it.*

*The epistemic status of this post is that I hoped to provide an explanation for a standard, mainstream idea, in a concrete way that could be broadly understood rather than in a mathematical/logical fashion, and so the definitions should all be correct, though the examples in the latter half are more speculative and likely contain some inaccuracies.*

Let's start with a puzzle. What do these three things have in common?

*   Dictatorships all through history have attempted to suppress freedom of the press and freedom of speech. Why is this? Are they just very sensitive? On the other side, the leaders of the Enlightenment fought for freedom of speech, and would not budge an inch against this principle.
*   When two people are on a date and want to sleep with each other, the conversation will often move towards but never *explicitly* discuss having sex. The two may discuss going back to the place of one of theirs, with a different explicit reason discussed (e.g. "to have a drink"), *even* if both want to have sex.
*   Throughout history, communities have had religious rituals that look very similar. Everyone in the village has to join in. There are repetitive songs, repetitive lectures on the same holy books, chanting together. Why, of all the possible community events (e.g. dinner, parties, etc) is this the most common type?

What these three things have in common, is *common knowledge* \- or at least, the attempt to create it.

Before I spell that out, we’ll take a brief look into game theory so that we have the language to describe clearly what’s going on. Then we’ll be able to see concretely in a bunch of examples, how common knowledge is necessary to understand and build institutions.

Prisoner's Dilemmas vs Coordination Problems
============================================

To understand why common knowledge is useful, I want to contrast two types of situations in game theory: Prisoner’s Dilemmas and Coordination Problems. They look similar at first glance, but their payoff matrices have important differences.

The Prisoner's Dilemma (PD)
---------------------------

You’ve probably heard of it - two players have the opportunity to cooperate, or defect against each other, based on a [story about two prisoners being offered a deal if they testify against the other](https://www.lesserwrong.com/posts/HFyWNBnDNEDsDNLrZ/the-true-prisoner-s-dilemma).

If they do nothing they will put them both away for a short time; if one of them snitches on the other, the snitch gets off free and the snitched gets a long sentence. However if they *both* snitch they get pretty bad sentences (though neither are as long as when only one snitches on the other).

In game theory, people often like to draw little boxes that show two different people's choices, and how much they like the outcome. Such a diagram is called a *decision matrix*, and the numbers are called the players' *payoffs*.

To describe the Prisoner's Dilemma, below is a decision matrix where Anne and Bob each have the same two choices, labelled $C$ and $D$. These are colloquially called ‘cooperate’ and ‘defect’. Each box contains two numbers, for Anne and Bob's payoffs respectively. ​

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/e56b0c1b04aaa7289a0bcd7f5d860f6adda8c68afa2d7402.png)

If the prisoner ‘defects’ on his partner, this means he snitches, and if he ‘cooperates’ with his partner, he doesn’t snitch. They’d both prefer that *both* of them cooperate $(C,C)$ to both of them defecting $(D,D)$, but each of them has an incentive to stab each other in the back to reap the most reward $(D,C)$.

Do you see in the matrix how they both would prefer no snitching to both snitching, but they also have an incentive to stab each other in the back?

**Real World Examples**

Nuclear disarmament is a prisoner’s dilemma. Both the Soviet Union and the USS wanted to have nuclear bombs while the opponent doesn't, but they'd probably both prefer a world where nobody had bombs than a world where they were both pointing massive weapons at each others heads. Unfortunately in our world, we failed to solve the problem, and ended up pointing massive weapons at each others' heads for decades.

Military budget spending more broadly can be a prisoner’s dilemma. Suppose two neighbouring countries are determining how much to spend on the military. Well, they don’t want to go to war with each other, and so they’d each like to spend a small amount of money on their military, and spend the rest of the money on running the country - infrastructure, healthcare, etc. However, if one country spends a small amount and the other country spends a lot, then the second country can just walk in and take over the first. So, they both spend lots of money on the military with no intention of using it, just so the other one can’t take over.

Another prisoner’s dilemma is tennis players figuring out whether to take performance enhancing drugs. Naturally, they'd like to dope and the opposing player not, but they'd rather both not dope than both dope.

**Free-Rider Problems**

Did you notice how there are more than two tennis players in the doping situation? When deciding whether to take drugs, not only do you have to worry about whether your opponent in the match today will dope, but also whether your opponent tomorrow will, and the day after, and so on. We’re all wondering whether *all* of us will dope. In society there are loads of these scaled up versions of the prisoner’s dilemma.

For example, according to many political theories, everyone is better off if the government takes some taxes and uses them to provide public goods (e.g. transportation, military, hospitals). As a population, it's in everyone's interest if everyone cooperates, and takes a small personal sacrifice of wealth.

However, if most people are doing it, you can defect, and this is great for you - you get the advantage of a government providing public goods, and also you keep your own money. But if everyone defects, then nobody gets the important public goods, and this is worse for each person than if they'd all cooperated.

Whether you’re two robbers, one of many tennis players, or a whole country fighting another country, you will run into a prisoner’s dilemma. In the scaled-up version, a person who defects while everyone else cooperates is known as a *free-rider*, and the scaled up prisoner’s dilemma is called the *free-rider problem*.

Coordination Problems
---------------------

With that under our belt, let’s look at a new decision matrix. Can you identify what’s importantly different about this matrix? Make a prediction about how you think this will change the players’ strategies.​

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/2472044ff084777ed8e2e687f465bdb9148f2450ed7ac80d.png)

Don't mix this up with the Prisoners' Dilemma - it's quite different. In the PD, if you cooperate and I defect, I get 4. What’s important about the new decision-matrix, is that nobody has an incentive to backstab! If you cooperate and I defect, I get *zero*, instead of four.

We all want the same thing. Both players' preference ordering is:

$$
(C,C)>(D,D)>[(C,D) = (D,C)]
$$

So, you might be confused: Why is this a problem at all? Why doesn’t everyone just pick C?

Let me give an example from Michael Chwe’s [classic book](https://www.amazon.com/Rational-Ritual-Culture-Coordination-Knowledge/dp/0691114714) on the subject *Rational Ritual: Culture, Coordination and Common Knowledge*.

> Say you and I are co-workers who ride the same bus home. Today the bus is completely packed and somehow we get separated. Because you are standing near the front door of the bus and I am near the back door, I catch a glimpse of you only at brief moments. Before we reach our usual stop, I notice a mutual acquaintance, who yells from the sidewalk, “Hey you two! Come join me for a drink!” Joining this acquaintance would be nice, but we care mainly about each other’s company. The bus doors open; separated by the crowd, we must decide independently whether to get off.

> Say that when our acquaintance yells out, I look for you but cannot find you; I’m not sure whether you notice her or not and thus decide to stay on the bus. How exactly does the communication process fail? There are two possibilities. The first is simply that you do not notice her; maybe you are asleep. The second is that you do in fact notice her. But I stay on the bus because I don’t know whether you notice her or not. In this case we both know that our acquaintance yelled but I do not know that you know.

> Successful communication sometimes is not simply a matter of whether a given message is received. It also depends on whether people are aware that other people also receive it. In other words, it is not just about people’s knowledge of the message; it is also about people knowing that other people know about it, the “metaknowledge” of the message.

> Say that when our acquaintance yells, I see you raise your head and look around for me, but I’m not sure if you manage to find me. Even though I know about the yell, and I know that you know since I see you look up, I still decide to stay on the bus because I do not know that you know that I know. So just one “level” of metaknowledge is not enough.

> Taking this further, one soon realizes that every level of metaknowledge is necessary: I must know about the yell, you must know, I must know that you know, you must know that I know, I must know that you know that I know, and so on; that is, the yell must be “common knowledge.” 

> The term “common knowledge” is used in many ways but here we stick to a precise definition. We say that an event or fact is common knowledge among a group of people if everyone knows it, everyone knows that everyone knows it, everyone knows that everyone knows that everyone knows it, and so on.

> Two people can create these many levels of metaknowledge simply through eye contact: say that when our acquaintance yells I am looking at you and you are looking at me, \[and we exchange a brief glance at our mutual friend and nod\]. Thus I know you know about the yell, you know that I know that you know (you see me looking at you), and so on. If we do manage to make eye contact, we get off the bus; communication is successful.

Coordination problems are only ever problems when everyone is *currently* choosing $D$, and we need to *coordinate* all choosing $C$ at the same time. To do that, we need common knowledge.

(The specific definition of common knowledge (*"I know that you know that I know that...."*) is often confusing, but for now the concrete examples below should help get a solid intuition for the idea.)

Compare you and I on the bus to the coordination game payoff matrix: If we *both get off the train* $(C,C)$*,* we get to hang out with each other *and* spend some time with a mutual acquaintance. If only one of us does, we both miss out on the opportunity to hang out with each other (the thing we want least - $(C,D)$ or $(D,C)$). If neither of us gets off the train, we get to hang out with each other, but in a less interesting way $(D,D)$.

**A Stable State**

The reason that it’s a difficult coordination problem, is because the state $(D,D)$ is an equilibrium state; neither of us alone can improve it by getting off the bus - only if we’re able to coordinate us *both* getting off the bus does this work. You can think of it like a local optimum: if you take one step in any direction (if any single one of us changes our actions) we lose utility on net.

The name for such an equilibrium is taken from mathematician [John Nash](https://en.wikipedia.org/wiki/John_Forbes_Nash_Jr.) (who the film *A Beautiful Mind* was based on), and is called a *Nash equilibrium.* Both $(C,C)$ and $(D,D)$ are Nash equilibria in a coordination problem. Can you see how many Nash equilibria there are in the Prisoner's Dilemma?

**Solving problems and resolving dilemmas**

A good way to contrast coordination problems and free rider problems is to think about these equilibrium states. In the free rider problem, the situation where everyone cooperates is not a Nash equilibrium - everyone is incentivised to defect while the others cooperate, and so occasionally some people do. While the PD only has one Nash equilibrium however, a coordination problem has got two! The challenge is moving from the current one, to one we all prefer.

Free rider problems are solved by creating new incentives against defecting. For example, the government punishes you if you don't pay your taxes. In sports, the practice of doping is punished, and what's more it's made out to be *dishonourable*. People tell stories of the evil people that dope and how we all look down on them; even if you could dope and probably get away with it, there's no plausible deniability in your mind - you know you're being a bad person and would be judged by everyone of your colleagues.

Coordination problems can be solved by creating such incentives, but they can also be solved just by improving information flow. We'll see that below.

Three Coordination Problems
===========================

That situation when you and I lock eyes, nod, and get off the bus? That’s *having* *common knowledge*. It’s the confidence to take the step, because you’re not worried about what I might do. Because you know I’m getting off the bus with you.

Now we’ve got a handle on what common knowledge is, we can turn back to the three puzzling phenomena from the beginning.

Dictators and freedom of speech
-------------------------------

> Dictatorships all through history have attempted to suppress freedom of the press and freedom of speech. Why is this? Are they just very sensitive? On the other side, the leaders of the Enlightenment fought for freedom of speech, and would not budge an inch against this principle.

Many people under a dictatorship want a revolution - but rebelling only makes sense if enough *other* people want to rebel. The people as a whole are much more powerful than the government. But you alone won’t be any match for the local police force. You have to *know* that the others are willing to rebel (as long as you rebel), *and* you have to know that they know that *you’re* willing to rebel.

People in a dictatorship are all trying to move to a better nash equilibrium without going via the corners of the box (i.e. where some people rebel, but not enough, and then you have some pointless death instead of a revolution).

That feeling of worrying whether the people around you will support you, if you attack the police. That’s what it’s like *not* to have common knowledge. When a dictator gets ousted by the people, it's often in the form of a riot, because you can *see the other people around you* who are poised on the brink of violence. They can see you, and you all know that if you moved as one you might accomplish something. That’s the feeling of common knowledge.

The dictator is trying to suppress the people’s ability to create common knowledge that jumps them straight to $(C,C)$ \- and so they attempt to suppress the news media. Preventing common knowledge being formed among the populace means that large factions cannot coordinate - this is a successful divide and conquer strategy, and is why dictators are able to lead with so little support (often <1% of the population).

Uncertainty in Romance
----------------------

> When two people are on a date and want to sleep with each other, the conversation will often move towards but never *explicitly* discuss having sex. The two may discuss going back to the place of one of theirs, with a different explicit reason discussed (e.g. "to have a drink"), *even* if both want to have sex.

Notice the difference between

*   Walking up to someone cold at a bar and starting a conversation
*   Walking up to someone at a bar, after you noticed them stealing glances at you
*   Walking up to someone at a bar, after you glanced at them, they glanced at you, and your eyes *locked*

It’s easiest to approach confidently in the last case, since you have clear evidence that you’re both at least interested in a flirtatious conversation.

In dating, getting *explicitly* rejected is a loss of status, so people are incentivised to put a lot of effort into preserving plausible deniability. *No really, I just came up to your flat to listen to your vinyl records!* Similarly, we know other people don’t like getting rejected, so we rarely explicitly ask either. *Are you trying to have sex with me?*

So with sex, romance, or even deep friendships, people are often trying to get to $(C,C)$ *without* common knowledge, up until the moment that they’re both very confident that both parties are interested in raising their level of intimacy.

(Scott Alexander wrote about this attempt to avoid rejection and the confusion it entails in his post [Conversation Deliberately Skirts the Border of Incomprehensibility](http://slatestarcodex.com/2017/06/26/conversation-deliberately-skirts-the-border-of-incomprehensibility/).)

This problem of *avoiding* common knowledge as we try to move to better Nash equilibrium also shows up in negotiations and war, where you might make a threat, and not *want* there to be common knowledge of whether you’ll actually follow through on that threat.

(Added: After listening to a podcast with Robin Hanson, I realise that I've simplified too much here. It's also the case that each member of the couple might not have figured out whether they want to have sex, and so plausible deniability gives them an out if they decide not to, without the explicit status hit/attack.

I definitely have the sense that if someone very bluntly states subtext when they notice it, this means *I can't play the game with* *them even if I wanted to*, as when they state it explicitly I have to say "No!" else admit that I was slightly flirting / exploring a romance with them, and significantly increase the change I will immediately receive an explicit rejection.)

Communal/Religious Rituals
--------------------------

> Throughout history, communities have had religious rituals that look very similar. Everyone in the village has to join in. There are repetitive songs, repetitive lectures on the same holy books, chanting together. Why, of all the possible community events (e.g. dinner, parties, etc) is this the most common type?

Michael Chwe wrote a whole [book](https://www.amazon.com/Rational-Ritual-Culture-Coordination-Knowledge/dp/0691114714) on this topic. To simplify massively: rituals are a space to create common knowledge in a community.

You don’t just listen to a pastor talk about virtue and sin. You listen *together,* where you know that everyone else was listening too. You say ‘*amen*’ together after each prayer the pastor speaks, and you all know that you’re listening along and paying attention. You speak the Lord’s Prayer or some Buddhist chant together, and you know that *everyone* knows the words.

Rituals create common knowledge about what in the community is is rewarded, what is punished. This is why religions are so powerful (and why the state likes to control religion). It’s not just a part of life like other institutions everyone uses like a market or a bank - this is an institution that builds common knowledge about *all* areas of life, especially the most important communal norms.

To flesh out the punishment part of that: When someone does something sinful by the standards of the community, you know that *they* know they’re not supposed to, and they know that you know that they know. This makes it easier to punish people - they can’t claim they didn’t know they weren’t supposed to do something. And making it easier to punish people also makes people less likely to sin in the first place.

The rituals have been gradually improved and changed over time, and often the trade-offs have been towards helping coordinate a community. This is why the words in the chants or songs that everyone sings are simple, repetitive, and often rhyme - so you know that everyone knows exactly what they are. This is why rituals often occur seated in a circle - not only can you see the performance, but you can see *me* seeing the performance, and I you, and we have common knowledge.

Common knowledge is often much easier to build in small groups - in the example about getting off the bus, the two need only to look at each other, share a nod, and common knowledge is achieved. Building common knowledge between hundreds or thousands of people is significantly harder, and the fact that religion has such a significant ability to do so is why it has historically had so much connection to politics.

Common Knowledge Production in Society at Large
===============================================

Common knowledge is a very common state of affairs that humans had to reason about naturally in the ancestral environment; there is no explicit mathematical calculation being done when two people lock eyes on a bus then coordinate getting off and seeing their friend.

We’ve looked at how religions help create common knowledge of norms. Here’s a few other common knowledge producing mechanisms that exist in the world today.

The News
--------

The main way common knowledge is built is by having everyone in the same room, in silence, while somebody speaks. Another way (in the modern world) is official channels of communication that you know everyone listens to.

This is actually one of the good reasons to discuss news so much - we’ve built trust that what the NYT says is common knowledge, and so can coordinate around it. Sometimes an official document is advertised widely and is known to be known as common knowledge, even if we ourselves often haven’t read it (e.g. Will MacAskill’s book, the NYT).

Nowadays there is no such single news source, and we’ve lost that coordination mechanism. We all have Facebook, but Facebook is entirely built out of bubbles. Facebook *could* choose to create common knowledge by making something appear in everyone’s feed, but they choose not to (and this is in fact a fairly restrained use of power that I appreciate).

One time facebook slipped up on this, was when they built their 'Marked Safe' feature. If a dangerous event (big fire, terrorist attack, earthquake) happened near you, you could 'mark yourself safe' and then all of your friends would get a notification saying you were safe.

Now, it was clear that everyone else was seeing the notifications you were seeing, and so if your nearby friend marked themselves safe and you didn’t, your friends would all notice that conspicuous absence of a notification, and know that you had chosen not to click it. This creates a pressure for all people to always notify their friends whenever there’s been a dangerous event near them, even if the odds of them being involved were miniscule. This is a clear waste of time and attention, ~~and the feature was removed~~ the feature continues to be a piece of security theatre in our lives.

A related point about the power of media that creates common knowledge: in Michael Chwe's book, he does some data analysis of the marketing strategies of multiple different industries. He classifies products that are 'social goods' - those you want to buy if you expect other people like them. For example, you want to buy wines that you know your guests like, or bring beer to parties that others like; you want to use popular computer brands that people have developed software for; etc.

He then shows that social brands typically pay more *per viewer* for advertising; not necessarily more total, but that they'll pay a higher amount for opportunities to broadcast in places that generate common knowledge. Rather than buy 10 opportunities to broadcast to 2 million people on various channels, they'll pay a premium for 20 million people to view their ad during the superbowl, to create stronger common knowledge.

Academic Research
-----------------

The central place where common knowledge is generated in science is in journals. These are where researchers can discover the new insights of the field, and build off them. Conferences can also help in this regard.

A more interesting case is textbooks (I borrow this example from Oliver Habryka). There was once a time in the history of physics where the basics of quantum mechanics were known, and yet to study them required reading the right journal articles, in the right order. When you went to a convention of physicists, you likely had to explain many of the basics of the field *before* you could express your new idea.

Then, some people decided to aggregate it into textbooks, which were then all taught to the undergraduates of the next generation, until the point where you could walk into the room and start using all the jargon and *trust that everyone knew what you meant*. Having common knowledge of the basics of a field is necessary for a field to make progress - to make the 201 the 101, and then build new insights on top.

In my life, even if 90% of the people around have the idea, when I’m not confident that 100% do then I often explain the basic idea for everyone. This often costs a lot of time - for example, after you read this post, I’ll be able to say to you a sentence like ‘the undergrad textbook system is a mechanism to create the common knowledge that allows the field as a whole to jump to the new Nash equilibrium of using advanced concepts’.

Paragraphs can be reduced to sentences, and you can get even more powerful returns with more abstract ideas - in mathematics, pages of symbols can be turned into a couple of lines (with the right abstractions e.g. calculus, linear algebra, probability theory, etc).

Startups
--------

A startup is a very small group of people building detailed models of a product. They’re able to create a lot of common knowledge due to their small size. However, one of the reasons why they need to put a lot of thought into the long-term of the company, is because they will *lose* this common knowledge producing mechanism as they scale, and the only things they’ll be able to coordinate on are the things they already learned together.

The fact that they’re able to build common knowledge when they’re small is why they’re able to make so much more progress than big companies, and is also why big companies that innovate tend to compartmentalise their teams into small groups. As the company grows, there are far fewer things that can be retained as common knowledge amongst the employees. You can have intensive on-boarding processes for the first 20 hires, but it really doesn’t scale to 100 employees.

Here are three things that can sustain at very large scales:

**Name:** Y Combinator says that the name of your company should tell people what you do - cf. AirBnb, InstaCart, DoorDash, OpenAI, Lyft, etc. Contrast with companies like Palantir, where even I don’t know exactly what they work on day-to-day, and I’ve got friends who work there.

**Mission:** It is possible to predict the output of an organisation very well by what their mission statement concretely communicates. For example, the company SpaceX has their mission statement at the top of all hiring documents (cf. the application forms to be a [rocket scientist](http://www.spacex.com/careers/position/214332), [business analyst](http://www.spacex.com/careers/position/214810), or [barista](http://www.spacex.com/careers/position/212463)).

**Values:** Affects hiring and decision-making long into the future. YC specifically says to pick 4-8 core values, have a story associated with each value, and tell each story *every* day (e.g. in meetings). That may seem like way too much, but in fact that’s how much it can take to make the values common knowledge (especially as your company scales).

At what cost?
-------------

A standard response to coordination failures is one of *exasperation* \- a feeling that we *should* be able to solve this if only we *tried*.

Imagine you’re trying to coordinate you and a few friends to move some furniture, and they keep getting in each other’s way. You might shout “Hey guys! Look, Pete and Laurie have to move the couch first, then John and Pauline can move the table!” And then things just start working. Or even just between two of you - when a friend is late for skype calls because she messes up her calendar app, you might express irritation, and she might try extra hard to fix the problem.

We also feel this when we look at society at large, for example when we look at coordination failures in politics. *Why does everyone continue voting for silly-no-good politicians? Why can’t we all just vote for someone sane?!*

In the book *Inadequate Equilibria* by Eliezer Yudkowsky, the character *Simplicio* represents this feeling. Here is the character discussing a (real) coordination failure in the US healthcare system that causes a few dozen newborn children to die every year:

> **simplicio:** The first thing you have to understand, Visitor, is that the folk in this world are hypocrites, cowards, psychopaths, and sheep.

> I mean, I certainly care about the the lives of newborn children. Hearing about their plight certainly makes me want to do something about it. When I see the problem continuing in spite of that, I can only conclude that other people don’t feel the level of moral indignation that I feel when staring at a heap of dead babies.

> \[...\]

> Regardless, I’m not seeing what the grand obstacle is to people solving these problems by, you know, coordinating. If people would just act in unity, so much could be done!

> I feel like you’re placing too much blame on system-level issues, Cecie, when the simpler hypothesis is just that the people in the system are terrible: bad at thinking, bad at caring, bad at coordinating. You claim to be a “cynic,” but your whole world-view sounds rose-tinted to me.

One of the final points to deeply understand about common knowledge in society, is how *costly* it is to create at scale.

Big companies get to pick only a few sentences to become common knowledge. To have a community rally around a more complex set of values and ideals (i.e. a significant function of religion) each and every member of that community must give up half of each Sunday, to repeat ideas *they already know* over and over - nothing new, just with the goal of creating common knowledge.

There used to be news programmes everybody in a country would tune in for. Notice how the New York Times used to be something people would read once per week or once per *day*, and discuss it with friends, even though most of the info has no direct effect on their lives.

Our intuitions were developed for tribes of size 150 or less (cf. Dunbar’s number) and as such, our intuitions around coordination are often terribly off. Simplicio is someone who has not noticed the cost of creating common knowledge at scale. He believes that society could easily vote for good politicians *if only we coordinated*, and because we don’t he infers we *must* be stupid and/or evil.

The feeling of *indignation* at people for failing to coordinate can be thought of as creating an incentive to solve the coordination problem. I’m letting my skype partner know that I will punish them if they fail again. But today, this feeling toward people for failing to coordinate is almost always misguided.

Think of it this way: many small coordination problems are sufficiently small that you’ll solve them quickly; many coordination problems are sufficiently big that you have no chance of solving them via normal means, and you will feel indignation every time you notice them (e.g. think politics/twitter). Basically, when you feel like being indignant in the modern world, 99% of the time it’s wasted motion.

Simplicio’s intuitions are a great fit for a hunter-gatherer tribe. When he gets indignant, it would be proportional to the problem, the problem would get solved, and everyone would be happy. At a later point in the book Simplicio calls for political revolution - the sort of mechanism that works if you’re able to get everyone to gather in a single place.

The solution to coordination problems at scale is much harder, and requires thinking about incentives structures and information flows rather than emotions directed at individuals in your social environment. Or in other words, building a civilization.

> **visitor:** Indeed. Moving from bad equilibria to better equilibria is the whole point of having a civilization in the first place.

\- Another character in [Inadequate Equilibria](https://www.lesserwrong.com/sequences/oLGCcbnvabyibnG9d), by Eliezer Yudkowsky

So, what's common knowledge *for*?
==================================

Summary of this post:

1.  A coordination problem is when everyone is taking some action A, and we’d rather all be taking action B, but it’s bad if we don’t all move to B at the same time.
2.  Common knowledge is the name for the epistemic state we’re collectively in, when we know we can all start choosing action B - and trust everyone else to do the same.
3.  We’re intuitively very good at navigating such problems when we’re in small groups (size < 150).
4.  We’re intuitively very bad at navigating such problems in the modern world, and require the building of new, microeconomic intuitions in order to build a successful society.

There is a great deal more subtlety to how common knowledge gets built and propagates. This post has given but a glimpse through the lens of game-theory, and hopefully you now see the light that this lens sheds on a great variety of phenomena.

* * *

*Links to explore more on this subject:*

*   *Moloch’s Toolbox (Inadequate Equilibria, Ch 3)* ([link](https://www.lesserwrong.com/sequences/oLGCcbnvabyibnG9d))
    *   *A guide to the ways our current institutions fail to coordinate. Largely applying standard microeconomics, and a great post to read after this one.*
*   *Meditations on Moloch* ([link](https://www.lesserwrong.com/s/xmDeR64CivZiTAcLx/p/TxcRbCYHaeL59aY7E))
    *   *An original idea about coordination failures, which the above book chapter formalised. It's a great post, and it's good to follow the intellectual heritage of ideas.*
*   *Rational Ritual: Culture, Coordination and Common Knowledge* ([link](https://www.amazon.com/Rational-Ritual-Culture-Coordination-Knowledge/dp/0691114714))
    *   *Solid book with lots of detail.*
*   *Scott Aaronson on Common Knowledge and Aumann's Agreement Theorem* ([link](https://www.scottaaronson.com/blog/?p=2410))
    *   *This post caused me to spend a bunch more time thinking about these topics. I found the explanations personally to be fairly abstract, which inspired me to write this post.*
*   *Scott Alexander’s sequence on Game Theory* ([link](https://www.lesserwrong.com/posts/QxZs5Za4qXBegXCgu/introduction-to-game-theory-sequence-guide))
    *   *After writing this post, I found Scott Alexander had also written about some of the examples (especially the dictatorship one) in detail 7 years ago* [(link)](http://squid314.livejournal.com/2011/02/01/).
*   *Andrew Critch on 'Unrolling Social Metacognition: Three levels of meta are not enough'* ([link](https://www.lesswrong.com/posts/K4eDzqS2rbcBDsCLZ/unrolling-social-metacognition-three-levels-of-meta-are-not))
    *   *This is a great post going into the details of how my modelling of you modelling me modelling you... works in practice. Highly recommended if the definition of common knowledge presented above seemed confusing.*

* * *

***Thanks** to Raymond Arnold, Jacob Lagerros and Oliver Habryka for extensive feedback and comments, and to Hadrien Pouget for proofreading an early draft. A further special mention to Raymond for pointing out this term ought to be a standard piece of* [expert jargon](https://www.lesserwrong.com/posts/DcRFTx62sTTRQo3Jw/common-vs-expert-jargon) *in this community, and suggesting I write this post*