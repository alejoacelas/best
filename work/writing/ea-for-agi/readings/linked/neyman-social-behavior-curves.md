---
title: "Social behavior curves, equilibria, and radicalism"
date: 2021-06-05
url: https://ericneyman.wordpress.com/2021/06/05/social-behavior-curves-equilibria-and-radicalism/
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "Eric Neyman on social behavior curves, equilibria, and radicalism; models collective-action tipping points"
---

[Eric Neyman](https://ericneyman.blog/author/dipitashick/) [Amateur sociology](https://ericneyman.blog/category/amateur-sociology/), [Rationality](https://ericneyman.blog/category/rationality/) June 5, 2021June 7, 2021

**I.**

Here are some hypotheticals to consider, with a common theme. Note that in each case I’m asking what you _would_ do, rather than what you _should_ do.

  * In the fall, COVID cases drop to 10% of their current level. You’re back to working/studying in person. You’re vaccinated, as is everyone else. Mask-wearing isn’t required, but 25% of your co-workers wear one anyway. Would you wear a mask too? What if 75% of your co-workers wear a mask? What if it’s literally everyone else?
  * You’re having dinner with a party of 10 at a Chinese restaurant. Everyone else is using chop sticks. You know how to use chop sticks but prefer a fork. Do you ask for a fork? What if two other people are using a fork?
  * (Inspired by _[Scout Mindset](https://www.amazon.com/Scout-Mindset-Perils-Defensive-Thinking/dp/0735217556/)_) For anyone who chose to have kids, or wants kids: if only 30% of adults had kids, would you still choose to have a kid? What if only 2% did? For anyone who doesn’t want kids: if 90% of adults had kids, would you? What if it were 99%?
  * You join a group video call with 20 co-workers/classmates. Everyone except the presenter/teacher has their video turned off. Do you turn yours off too? What if everyone has their video on? Typically, what fraction of other participants need to have their video on for you to keep yours on?



Your answers to these questions depend on your **personal circumstances**. How uncomfortable is wearing a mask? Do you find a fork _slightly_ or _significantly_ easier to use? How strong is your preference to have kids? Is there a Justin Bieber poster in your background?

But — unless your answer to each question didn’t depend on the specific percentage — your decision also depends on **others’ behavior**. If everyone else has their video on, you’ll probably feel obligated to keep yours on too. Maybe you’ll move the poster first. This applies not just to behavior, but also to preferences, beliefs, and opinions.

Figure 1: [xkcd #185](https://xkcd.com/185/)

So far, everything I’ve said is pretty obvious. But let’s throw a model at this observation and see if we can discover anything interesting.

Let’s take our example with 20 people in a video call and line all of the participants up, from bottom to top, based on **how many other people need to have their video on in order for them to choose to keep their video on**.

Figure 2: video chat, scenario 1

In this example, Alex and Betty will keep their video on no matter what; on the other hand, Riley, Steve, and Tara will turn their video off no matter what. Most others are somewhere in between: Isaac, for instance, will keep his video on if at least 7 of the other 19 participants have their video on.

Take a moment to think about what will happen in this call. As a hint, you might want to consider the diagonal line I’ve drawn on the chart.

The answer is that nine participants — Alex through Isaac — will have their video on, and the rest will have it off. Why? Well, if everyone has their video on at the start, then Riley, Steve and Tara will turn their video off right away. A cascade will follow: Quinn and Pete, who are only willing to have their video on if everyone else has theirs on, will turn their video off. And so on — up through Jenny. Now Alex through Isaac (but no one else) will have their video on. But at this point the cascade stops: Isaac is happy to keep his video on, as is everyone else.

This would also be the end state if everyone started with their video off (assuming there’s no status quo bias). Alex and Betty would turn their video on, Charlie and Diana would follow, and so on, up through Isaac. Indeed, no matter who has their camera on at the start, this will be the end state.

Let’s look at a different example.

Figure 3: video chat, scenario 2

Now, Alex is willing to keep his video on so long as at least one other participants does as well. At the other end of the spectrum, Tara is willing to keep her video on if at least 17 other participants do. Now what will happen?

This time, the answer depends on the starting state. If everyone starts with their video on, everyone will keep it on. If everyone has it off, everyone will keep it off. In fact, small changes in the starting state cause dramatic differences in the end state. If Alex through Henry start with their video on, then Fred, Grace, and Henry will turn their video off, and there will be a downward cascade (ending with no one having their video on). If Alex through _Jenny_ start with their video on, there will instead be an _upward_ cascade, with Kevin turning his video on, followed by Lisa, and so on. (Exercise for the reader: what happens if Alex through Isaac start with their video on?)

Drawing a 20 by 20 chart is very particular to our example. Let’s abstract that away; instead of plotting dots on a 20 by 20 grid, we’ll plot curves on a square. That’ll look something like this.

Figure 4: [Many other person do thing, person do thing. No many, no do thing.](http://www.persondothing.com/)

Just like in the video call example, we’re ordering people by how willing they are do a thing. In the video call example, the thing was having their video on. But now we’re abstracting away the number of people and instead want to think about the _percentage_ of other people doing the thing that is necessary for someone to choose to do the thing. I’ll be calling these curves **social behavior curves**.

Perhaps a concrete example would be helpful: let’s say that in the above plot, the “thing” is wearing a mask. In the plot, the people who are most willing to wear a mask will wear one if at least 3% or so of people are wearing a mask (these are the people toward the bottom). On the other hand, 3% or so aren’t willing to wear a mask no matter what (these are the people at the very top). In the middle we have the median person in terms of willingness to wear a mask, who will wear a mask if at least 35% of others are wearing one.

Armed with a social behavior curve, it’s pretty easy to reason about the social equilibria of mask-wearing. For example, suppose that just the 50% most willing-to-wear-a-mask people wear masks. This is _not_ an equilibrium. That’s because the person who is just a little bit above the 50% mark (i.e. the person who’s just slightly less willing than median to wear a mask) will put on a mask: after all, they’re willing to wear a mask if at least 35% of others are wearing masks, which is the case. And the next most willing person will put on a mask, and so forth: we’ll have an upward cascade of mask-wearing until… when?

Figure 5: social equilibria

Until the purple point near the middle (around 65%) is reached. And at that point, the cascade will stop because people above the 65% line will need more than 65% of people to wear a mask in order to themselves wear a mask. And similarly, if the starting state were that 75% of people wore masks, there would be a downward cascade until the 65% mark was reached. (In general, an upward cascade will happen if you’re at a point on the y-axis where the red curve is to the left of the blue line. And if you’re at a point where the red curve is to the right of the blue line, you’ll get a downward cascade.)

In this sense, the 65% mark is a **social equilibrium**. More precisely, the state of the world where the 65% most willing-to-wear-a-mask people wear a mask, and the rest don’t, is a social equilibrium. There are other social equilibria in this example. One is 0%: if no one is wearing a mask, no one will put on a mask. And there’s another one around 96% or so.

What about the points in orange? They’re kind of weird! Consider the bottom-left one, which is around 25%. If 24% of people are wearing a mask, there will be a _downward_ cascade. But if 26% of people are wearing a mask, there will be an _upward_ cascade. In that sense, this point is an _unstable social equilibrium_. If you’re right at 25%, everyone wearing a mask is happy to continue wearing one and everyone not wearing one won’t put one on. Go just above or below 25% and you get a cascade. The same is true of the orange point around the 90% mark.

To summarize, **points where the social behavior (red) curve crosses the blue line from left to right are stable social equilibria. Points where the curve crosses the blue line from bottom to top are unstable equilibria.**

As with all mathematical models of social behavior, this one is incomplete. You might want to take a minute to think about the various things this model fails to capture. Still, I wish to make the case that this model is useful for understanding phenomena such as persuasion, radicalism, and rapid cultural shifts. Let’s dive in.

**II.**

In our model, **persuasion is the act of shifting the social behavior curve horizontally**. That’s because a persuasive argument in favor of doing X lowers the percentage of other people who need to be doing X in order for you to join in and start doing X yourself.

To see this, bring yourself back into the very early days of the pandemic, when the virus was spreading but no one was wearing a mask. Now suppose you read a compelling argument in favor of wearing a mask. This alone probably wouldn’t be sufficient for you to start wearing a mask. (If this isn’t true for you personally, consider the “you” to be generic.) Instead, it would lower your threshold for how many other people need to be wearing a mask in order for you to be willing to wear one. Maybe beforehand you would have started wearing a mask if 30% of people around you were wearing one, but now a 25% masking rate would be sufficient. In other words, your point on the social behavior curve used to have an x-value of 30%, but now it’s 25%. Your point on the curve shifted leftward.

(In a more naïve model of persuasion, if you hear a persuasive argument in favor of X, you start doing/believing X. I think basically no one does that; we’re all shaped not just by arguments but by the beliefs and behaviors of those around us.)

Now, if _everyone_ reads the argument then the _entire curve_ will shift to the left. And if some fraction of the population comes across the argument, then you can still model the curve as shifting left — you just need to multiply the amount of the shift by the fraction of people who come across the argument.

(If the argument systematically affects people in different spots of the curve differently, then the leftward shift won’t be uniform. But I’ll be assuming a uniform shift to avoid overcomplicating the model.)

Typically, the effect of persuasion looks something like this:

Figure 6: The red and green curves are, respectively, the social behavior curves before and after people read the argument in favor of X. The purple and grey points are the equilibria before and after, respectively.

You come up with a really clever argument in favor of X — enough to shift the red curve leftward by 5 percentage points. People who previously needed 80% of people around them to do X in order to themselves do X now only need 75%, and so on. This causes the equilibrium to shift from the purple point… up just a few percentage points to the grey point. Congratulations: you’ve successfully disseminated your super persuasive argument, and 3% more people believe X.

That’s what typically happens. But in some cases, an equally persuasive argument can have dramatic effects.

Figure 7: a dramatic shift in equilibrium

In this example, the same 5% shift displaces the equilibrium shown in purple. After the social behavior curve shifts from the red curve to the green curve, there is no longer any equilibrium near the purple point, since the green curve does not cross the blue line there. There’s an upward cascade of people who start to do X, and society moves to a new equilibrium around 85%. A 5% persuasion shift causing 50% of people to change their behavior: that’s some serious return on investment!

An alternative perspective: the effect of gradual persuasion is that the social behavior curve gradually shifts to the left, and so the equilibrium gradually shifts to the right (as illustrated in Figure 6). But then at some point, the curve moves past a point of tangency with the blue line — that’s what happens in Figure 7 — and then there’s a dramatic shift, where the equilibrium switches to a different, possibly far-away one.

Is this realistic? I believe it is! In the real world you won’t see such a seismic shift, because different people belong to different communities with different social behavior curves. But I would posit that often when society sees a rapid change in social norms and behaviors, it’s often due to an effect like the one in Figure 7.

Here are some possible examples _(speculative; take with approximately 1.5 tablespoons of salt)_ :

  * I think that social behavior curves for many things of the form “being okay with X” are shaped like S-curves (see Figure 8). That’s because — at least for me — it’s somewhat uncomfortable being the only person who’s not okay with something. (Picture yourself being the only one in a group of friends who isn’t okay with people taking off their masks, or bringing drugs to a party, or whatever; it’s uncomfortable!) This means that the social behavior curve is pretty flat in the upper-right: not many people are unwilling to be okay with something if 95% of others are okay with it. Perhaps to a lesser extent, there may be social pressure not to be the only person who _is_ okay with something.
    * This might cause the sort of shift shown in Figure 8: the original (red) S-curve starts above the blue line, dips below, and then comes back up. After a persuasion effect happens, the red curve moves left, there is no more equilibrium in that region, and widespread acceptance is soon reached. This might explain the unusually rapid pace with which homosexuality became accepted in the United States.
    * Maybe this explains the rapid collapse of the temperance movement in the 1920s? I don’t know enough history to know if this is a reasonable theory.
    * If my theory about things of the form “being okay with X” being shaped like S-curves is correct, then that would predict that shifts in society’s attitudes toward civil rights and liberties happen more suddenly than shifts in public opinion on other issues. This feels empirically true to me but I’m not confident, and I’d be interested if someone has data on this!



Figure 8: an S-curve

  * There are mathematical theories about why revolutions are so slow to get off the ground, but when they do, they get very large impressively quickly. George Akerlof [posited](https://pages.ucsd.edu/~aronatas/project/academic/akerlof%20on%20procrastination.pdf) that this effect is caused by [present bias](https://ericneyman.wordpress.com/2020/07/05/an-exploration-of-exploitation-bias/). Scott Aaronson instead [explains](https://www.scottaaronson.com/blog/?p=2410) this using common knowledge. I’d like to posit a different theory: protestors have safety in numbers, which means that people are much more willing to join a revolt if a critical mass of people have already joined. This results in the following curve shape (the red curve in Figure 9), with lots of people willing to revolt as soon as 15% of people are revolting. As the dictator becomes more and more oppressive and people lose patience, the curve shifts slowly to the left — until the curve passes the blue line and the revolution explodes in size.



Figure 9: revolution

Interestingly, this model of rapid social change posits that **once a rapid social change has happened, it’s usually really difficult to go back**. To see that, suppose that the dictator decides to placate the populace (or perhaps crack down hard and increase the cost of revolting), effectively moving the green curve back to the right. The result will _not_ be a shift from the grey point back to the purple point. Instead it will shift back down just a little to the yellow point.

Figure 10: the dictator attempts to reign in the revolution and fails

This accords with my intuition for how rapid social changes tend to work out: once they happen, things rarely go back to how they were.

(What about revolutions that fizzle out? I think these tend to be small in size, i.e. the green curve is never reached. If a revolution gets really large, I think it rarely fizzles out; instead it leads to war or regime change. Ideally I’d like to phrase this hypothesis in a way where I can’t weasel out of it by claiming that any particular revolution that fizzled out just didn’t get big enough, but I’m not sure how to do that.)

The fact that the shape of the curve matters a lot has implications for activists and influencers: **focus your energy on causes where the social behavior curve makes it possible for you to tip society into a new equilibrium**. You might have ten or a hundred times more leverage than if you just choose the issue that’s most compelling to you!

Of course, **estimating the shape of the curve is a huge challenge**. One place to start is to try to infer social behavior curves from historical behavior changes and draw some general conclusions (e.g. “social behavior curves regarding public opinion on civil liberties tend to be S-shaped”). Or maybe conducting a survey that asks people questions of the form “If your neighbors started doing X, do you think you would?”. That might give you some mileage, but overall I’d guess that people don’t understand themselves well enough to answer that question accurately.

**III.**

There’s a lot of intuition to be gained about a social behavior curve by looking at its slope (derivative) at different points. The slope of a social behavior curve at 30% (for example) represents, loosely speaking, how many people have 30% as their “tipping point”, i.e. how many people will switch from not doing X to doing X once 30% of people are already doing X. (For math people: the social behavior curve is a CDF, so its derivative is the corresponding PDF.)

For example, here’s the initial (pre-oppression) curve in Figure 9.

Figure 9b: the pre-oppression social behavior curve from Figure 9

And here’s what the derivative of the red curve looks like. This captures the notion of most people deciding to revolt when a certain “critical mass” (around 15%) is reached.

Figure 11: behavior density curve for revolution

It is often easier to think about what the orange curve should look like (I’ll be calling them **behavior density curves** from now on) and then extrapolate the social behavior curve; indeed, that’s how I reasoned about what the curve in Figure 9b should look like.

What do behavior density curves look like? It obviously depends on what X is, but it stands to reason that many behavior density curves are bell-shaped. (After all, many distributions are bell-shaped.)

Figure 12: most people do whatever other people are doing

This produces a social behavior curve that looks like an S-curve. The tighter the bell curve, the steeper the social behavior curve. In the limit, everyone’s at 50%, which means that everyone is going to do whatever the majority is currently doing. A good example of this is network effects. Imagine two identical platforms, Facebook 1 and Facebook 2. People want to talk to their friends, so they’ll join whichever platform has more of their friends.

Figure 13: behavior density curve (left) and social behavior curve (right) in the presence of network effects

On the other hand, you could imagine a reverse situation, where most people have a strong preference either to do X or not, such that others’ behavior only matters only a little. The behavior density curve would look like this:

Figure 14: most people act according to their intrinsic preference

Examples of this tend to be things that are pretty ingrained in people, as opposed to being socially influenced. A good example of this is left- and right-handedness (though in this example the behavior density curve isn’t centered at 50%). The corresponding social behavior curve has this sort of shape:

Figure 15: social behavior curve in the presence of strong intrinsic preferences

So far I’ve been talking about these curves descriptively: making guesses about what the world actually looks like. But for fun, let’s talk about the prescriptive question: **what is the best shape for a social behavior curve?**

On its face this is a pretty silly question. The best possible social behavior curve for “being a serial killer” looks a lot different from the best possible social behavior curve for “donating to charity.” But let’s set these examples aside and think about what we might want out of a social behavior curve where the two possibilities (doing X and not doing X) are both reasonable, but one might be substantially better than the other.

There are lots of examples of this — it’s the case basically whenever reasonable people disagree on what social norms they want. One example of this is **[ask culture versus guess culture](https://www.theatlantic.com/national/archive/2010/05/askers-vs-guessers/340891/)**. In ask culture, it’s totally polite to request a favor (“Hey, remember me from high school? I’m visiting your town, can I stay at your place?”), and it is likewise completely fine to say no. In guess culture, people are expected to only ask for a favor if they think that the person they’re asking would be comfortable granting it, and likewise one is expected to say yes unless there’s a good reason not to.

Imagine if the social behavior curve for X = “behaves as if in ask culture” looked like the one in Figure 13 (Facebook 1 vs. Facebook 2): almost everyone behaves like the majority. This is the “**collective society** ” approach, where people are expected to closely follow societal norms. Such an approach would be good for social cohesion: everyone follows the same norm, so there’s no conflict resulting from people misunderstanding each other’s intentions. But it would be bad from the perspective of getting stuck in a bad equilibrium: maybe the current equilibrium is “everyone follows guess culture norms” but in fact ask culture is better and there’s no way to discover this and switch.

Conversely, imagine if the social behavior curve looked like Figure 15 (handedness). This would be the “**individualistic society** ” approach, where people behave according to their own intrinsic preferences. Then society would have lots of askers and guessers (so it would be easy to get a sense of the relative merits and drawbacks of each), but it would be hard to learn from these merits and drawbacks. (Think about how far to the left you’d need to shift the social behavior curve for ask vs. guess culture if it had the same steep-flat-steep shape as the curve for handedness. It would be really difficult for society to come to a collective decision on which approach it prefers.)

What’s the best way to balance this trade-off? I’d argue in favor of something like this:

Figure 16: my guess at what an optimal(ish) social behavior curve looks like in many settings

I see this as the best of both worlds. On the one hand, there are a few people who have a strong preference for ask culture, and a few for guess culture, so society gets to experience and learn from both — or at least knows that both norms are theoretical possibilities. On the other hand, if society gets evidence that ask culture is better, a relatively small leftward shift in the curve will cause most of society to be on board with ask culture (that’s because the slope of the red curve is close to 1). This confers the benefit of social cohesion. It also means that very sudden shifts like in Figure 7 can’t happen; society can respond to new information relatively quickly, but does so smoothly. This seems like a good thing.

What does the corresponding behavior density curve look like?

Figure 17: a nice compromise between collective and individualistic cultures

Something like this (though maybe steeper at the edges). There are lots of people everywhere along the spectrum: people who strongly prefer ask culture, people who strongly prefer guess culture, and also those who are happy to go with whatever norm is the current default. Such a density curve — which is “in between” the “collective society” curve (Figure 12) and the “individualistic society” curve (Figure 14) (though perhaps closer to the latter) — gets you the best of both worlds.

The fact that Figures 16 and 17 are symmetric around 50%, by the way, is _not_ an important feature. The curve below has the same nice properties, even though its equilibrium is around 20% instead. So when I talk about curves with the “general shape” of the curve in Figure 16, I’m including curves like this one.

Figure 18: this social behavior curve, while not symmetric, still has the nice properties we’ve been discussing

(I think there’s a lot more that could be said here. We could analyze free speech norms from the same perspective. Totally free speech allows for exploration of a vast swathe of ideas at the expense of societal cohesion, while a lack of free speech inhibits exploration and progress; maybe there’s an optimal happy medium? Also, perhaps differences in collectivism versus individualism could serve as an explanation for why some societies and communities have been more successful than others. But this is way above my pay grade so I’ll let others speculate.)

**IV.**

For me, the main takeaway from the previous section is this: **society needs both radicals and conformists, as well as people in between**.

When I say “radical”, think [Vermin Supreme](https://en.wikipedia.org/wiki/Vermin_Supreme). A radical does things their own way, to hell with what society thinks. A radical wears a boot on their head and prepares for the zombie apocalypse. A radical bucks the establishment — social, political, scientific, you name it — in pursuit of their own weird beliefs and inclinations.

Society stands to gain very little from most radicals. A typical radical is someone who markets a new form of pseudo-medicine, or espouses a nonsensical economic policy. In the worst case, a radical becomes convinced that societal ills can only be remedied through violence and crashes airplanes into buildings.

But occasionally — not usually but not never — a radical [invents a new form of medicine that saves millions of lives](https://www.nytimes.com/2021/04/08/health/coronavirus-mrna-kariko.html), or causes a [major scientific paradigm shift](https://en.wikipedia.org/wiki/Copernican_Revolution), or [helps society make substantial moral progress](https://www.exurbe.com/on-crimes-and-punishments-and-beccaria/). Without radicals, we’d be stuck with wrong beliefs and bad equilibria forever. (See also: Scott Alexander’s [Rule Thinkers In, Not Out](https://slatestarcodex.com/2019/02/26/rule-genius-in-not-out/).)

I’m not sure how deep this analogy goes, but think genetic mutations. Most are bad, but it’s really good to have some nonzero level of mutation, as this makes evolutionary progress possible.

A radical is someone who, for many different values of X, is on the far-left or far-right of the social behavior curve for X. They’ll do X, or think X, even if no one else does or thinks X. Their existence gives society the opportunity to ponder X.

And in particular, radicals’ existence gives _radical-adjacent_ people the opportunity to join in doing or believing X if it seems like a good idea. Radical-adjacents are people who tend to be pretty close to the left or right extremes of a social behavior curve, but not all the way on the edge. They are the people who don’t necessarily do really weird things or promote strange ideas themselves, but are open to such habits and ideas once entertained by a few radicals.

And so on and so on, down the [respectability cascade](https://slatestarcodex.com/2019/02/04/respectability-cascades/), all the way to the conformists: those who will go with the prevailing norm or belief. And **conformists are important too**. Without them, a social behavior curve might look something like this.

Figure 19: a society without conformists

You need to move the red curve _really far_ to the left or right (i.e. come up with an _incredibly_ convincing argument or effective movement in favor of or against X) to shift society from “50% of people do X” to “everyone (or no one) does X” — which is quite detrimental if society would be a lot better off with everyone (or no one) doing X.

How many radicals and how many conformists is ideal? I’ve already sort of answered that in Figure 17. People toward the left and right edges of that figure are more radical, people in the middle are conformists. So the ideal distribution looks perhaps something like this:

Figure 20: my guess at the optimal(ish) distribution of people on the radical-conformist spectrum

In my ideal world people are about evenly distributed on the spectrum between radical and conformist, with perhaps a slight radical-ward bias. (Even in such a world, there are very few true radicals: they are represented only by the leftmost 1% or so of the chart in Figure 20.)

**V.**

_[Epistemic status: progressively more and more trolling]_

I’ve already talked about one way that social behavior curves can help you think about how to make the world a better place: figuring out when persuasion and activism are effective. I want to finish by talking about another way social behavior curves can help you: namely, figuring out how radical you ought to be.

Let’s say that no one is doing X, but — at least if you disregard that fact — X seems like a good idea to you. An example of X might be becoming vegan, if you’re in a community where everyone eats meat. Should you become vegan or go along with your community’s norm of meat-eating?

The answer depends on whether you think there are too many or too few radicals in your community. If there are too few, then by increasing the “mutation rate” you realize the upside that you might eventually convert everyone to veganism and make the world a better place. If on the other hand there are too many radicals, then an [outside view](https://www.lesswrong.com/tag/inside-outside-view) argument is likely more applicable here: society has likely already considered and rejected veganism, even if you don’t know why they did so.

But how can you figure out if there are too many or too few radicals in society? Answering this question seems really hard, just like estimating the shape of a social behavior curve is super difficult.

One approach might be to examine the question empirically: see whether societies with higher levels of radicalism have fared better. But this seems extremely hard and noise-prone.

My radical answer to this question is: if you are inclined (from an inside view perspective) to adopt a behavior or belief, **decide how radical to be at random**. To explain why, let’s talk about rule utilitarianism.

Rule utilitarianism says that you should act according to whatever set of rules results in the most good. This contrasts with classical utilitarianism, which says that for every decision you should take whichever action results in the most good. I like rule utilitarianism because it’s realistic to follow: it would be exhausting to do utility calculations at every turn, but if your community has some rules of thumb worked out then you can follow those. Spend some time working out good rules of thumb, and you’ll be able to make good moral decisions without excessive overhead.

As an example of rule utilitarianism, a pretty good rule might be “Donate 10% of your income to the charity where a marginal dollar will have the [greatest positive impact](https://www.givewell.org/)“.

Crucially, this rule works because we have a pretty good sense of how well-funded different charities are. Suppose instead that people had _no idea_ how much money each charity had, and for that matter didn’t know where anyone else was donating.

This would make things a lot harder. I might do the best I can to follow the rule with the information I have and decide that AI risk is probably the most important cause area. Everyone else who shares my basic thought process might come to the same conclusion, we’ll all donate to MIRI, and MIRI will become oversaturated, while other important charities go neglected.

The key remedy to this problem is either to spread your dollars between multiple charities, or else to _randomize_ your donation, choosing a charity in proportion to how much money it would ideally get. And if everyone randomizes, [the outcome will be pretty good](https://en.wikipedia.org/wiki/Law_of_large_numbers)! So in the absence of information about others’ charitable donations, a better rule would be “Donate 10% of your income to a charity selected at random in proportion to how much money each charity would ideally get”.

This is the situation with social behavior curves. You have no idea what the social behavior curve for not eating animal products looks like; you just know that you’re in a “everyone eats meat” equilibrium. Nor do you know the distribution of radicals versus radical-adjacents versus conformists. In the absence of such information, you can’t take the strategy of “adopt whichever disposition is most neglected”. Nor is there an approach analogous to “spread your money between charities”: you can’t be a mixture of different levels of radical on the same issue. So the rule that, if adopted, would do the most good is “Select how radical you’ll be at random”.1 If this rule is followed, your community would end up with the right number of radicals and conformists and in-betweens!

How seriously should you take the argument I’ve just made? Should you literally flip a coin next time you decide whether to do something no one else is doing? I’m not sure; as far as I can tell, no one is flipping coins to decide these sorts of things. But maybe some small number of people take my argument seriously and start flipping coins. And if they get good results, maybe some other people will join in the fun. And then eventually, maybe everyone will be flipping coins.

So should you, personally, start flipping coins in such situations? Flip a coin to find out!

_[Edit: Ben Edelman points out that sociologists use social behavior curves, see e.g.[this paper](https://ericneyman.blog/wp-content/uploads/2021/06/2bd0a-granovetter-thresholdmodels.pdf) and [these](https://en.wikipedia.org/wiki/Threshold_model) Wikipedia [pages](https://en.wikipedia.org/wiki/Tipping_point_\(sociology\)). I guess it shouldn’t come as a surprise that these concepts are already well-known. I suppose it’s nice to have a bit of confirmation that these models are considered reasonable/interesting!]_

1\. More precisely, the rule is “Select how radical you’ll be at random, according to the ideal distribution of radicals versus conformists”. Here, “ideal distribution” is what an outside observer would prefer for the distribution to be in general. (I’ve posited a guess at this distribution in Figure 20.) The “outside observer” bit is important: of course you’d prefer for there to be lots of radicals on your pet issue, but [it’s not a good rule if you wouldn’t want for it to be universalized](https://slatestarcodex.com/2014/05/16/you-kant-dismiss-universalizability/) to everyone’s pet issue.↩

### Share this:

  * [ Share on X (Opens in new window) X ](https://ericneyman.blog/2021/06/05/social-behavior-curves-equilibria-and-radicalism/?share=twitter)
  * [ Share on Facebook (Opens in new window) Facebook ](https://ericneyman.blog/2021/06/05/social-behavior-curves-equilibria-and-radicalism/?share=facebook)
  * 


Like Loading...

### _Related_

##  Published by Eric Neyman

I am an AI alignment researcher at the Alignment Research Center in Berkeley, California. My interests include math, computer science, linguistics, geography, philosophy, elections, and public policy. [ View all posts by Eric Neyman ](https://ericneyman.blog/author/dipitashick/)

**Published** June 5, 2021June 7, 2021
