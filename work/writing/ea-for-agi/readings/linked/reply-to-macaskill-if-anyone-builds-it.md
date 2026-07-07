---
title: "A Reply to MacAskill on 'If Anyone Builds It, Everyone Dies'"
author: "Rob Bensinger"
date: 2025-09-27
url: https://lesswrong.com/posts/iFRrJfkXEpR4hFcEv/a-reply-to-macaskill-on-if-anyone-builds-it-ev
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by joe-carlsmith/how-human-like-do-safe-ai-motivations-need-to-be; direct rebuttal to MacAskill's review of the Yudkowsky/Soares book — anchors the AI-risk debate"
---

*EDIT: Oliver Habryka* [*suggests below*](https://www.lesswrong.com/posts/iFRrJfkXEpR4hFcEv/a-reply-to-macaskill-on-if-anyone-builds-it-everyone-dies?commentId=AsoStwvpBmEpZ8EkF) *that I've misunderstood what Will's view is. Apologies if so, and if Will replies — or if I find him clarifying his view anywhere — I'll add a link to his view here.*

*EDIT 2: Will replies* [*below*](https://www.lesswrong.com/posts/iFRrJfkXEpR4hFcEv/a-reply-to-macaskill-on-if-anyone-builds-it-everyone-dies?commentId=K2JrNmMiRtDpquS8D).

* * *

I found Will MacAskill's [X review](https://x.com/willmacaskill/status/1968759901620146427) of [*If Anyone Builds It, Everyone Dies*](https://ifanyonebuildsit.com/) interesting ([X reply here](https://x.com/robbensinger/status/1972020035020615740)).

As far as I can tell, Will just fully agrees that developers are racing to build AI that threatens the entire world, and he thinks they're going to succeed if governments sit back and let it happen, and he's more or less calling on governments to sit back and let it happen. If I've understood his view, this is for a few reasons:

1.  He's pretty sure that alignment is easy enough that researchers could figure it out, with the help of dumb-enough-to-be-safe AI assistants, given time.
2.  He's pretty sure they'll have enough time, because:
    1.  He thinks there won't be any future algorithmic breakthroughs or "click" moments that make things go too fast in the future.
    2.  *If* current trendlines continue, he thinks there will be plenty of calendar time between AIs that are close enough to lethal capability levels for us to do all the necessary alignment research, and AIs that are lethally capable. And:
    3.  He thinks feedback loops like “AIs do AI capabilities research” won’t accelerate us too much first.
3.  He's also pretty sure that the most safety-conscious AI labs won't mess up alignment in any important ways. (Which is a separate requirement from "superintelligence alignment isn't that technically difficult".)
4.  And he's pretty sure that the *least* safety-conscious AI labs will be competent, careful, and responsible as well; *or* the more safety-conscious labs will somehow stop the less safety-conscious labs (without any help from government compute monitoring, because Will thinks government compute monitoring is a bad idea).
5.  And he's sufficiently optimistic that the people who build superintelligence will wield that enormous power wisely and well, and won't fall into any traps that fuck up the future or stretch alignment techniques past their limits, in the name of wealth, power, fame, ideology, misguided altruism, or simple human error.

All of these premises are at best heavily debated among researchers today. And on Will’s own account, he seems to think that his scheme fails if any of these premises are false.

He's not arguing that things go well if AI progress *isn't* slow and gradual and predictable, and he's not proposing that we have governments do chip monitoring *just in case* something goes wrong later, so as to maintain option value. He's proposing that humanity put all of its eggs in this one basket, and hope it works out in some as-yet-unspecified way, even though *today* the labs acknowledge that we have no idea how to align a superintelligence and we need to hope that some unspecified set of breakthroughs turn up in time.

My point above isn’t “Five whole claims aren’t likely to be true at the same time”; that would be the multiple stage fallacy. But as a collection, these points seem pretty dicey. It seems hard to be more than 90% confident in the whole conjunction, in which case there's a double-digit chance that the everyone-races-to-build-superintelligence plan brings the world to ruin.

This seems like a genuinely wild and radical thing to advocate for, in comparison to any other engineering endeavor in history. If someone has legitimately internalized this picture of the situation we're in, I feel like they would at least be arguing for it with a different mood.

If you were trying to load your family onto a plane with a one in ten chance of crashing, you would get them to stop.

If it were the only plane leaving a war zone and you felt forced into this option as a desperation move, you would be pretty desperate to find some better option, and you would hopefully be quite loud about how dire this situation looks.

I come away either confused about how Will ended up so confident in this approach, or concerned that Will has massively buried the lede.

I'll respond to Will's post in more detail below. But, to summarize:

1\. I agree that ML engineers have lots of tools available that evolution didn't. These tools seem very unlikely to be sufficient if the field races to build superintelligence as soon as possible, even assuming progress is continuous in all the ways we'd like.

2\. I agree that alignment doesn't need to be perfect. But a weak AI that's well-behaved enough to retain users (or well-behaved enough to only steer a small minority into psychotic breaks) isn't "aligned" in the same way we would need to align a superintelligence.

3\. I agree that we can't be certain that AI progress will be fast or choppy. The book doesn't talk about this because it isn't particularly relevant for its thesis. Things going slower would *help*, but only in the same way that giving alchemists ten years to work on the problem makes it likelier they'll transform lead into gold than if you had given them only one year.

The field is radically unserious about how they approach the problem; some major labs deny that there's a problem at all; and we're at the stage of "spitballing interesting philosophical ideas," not at the stage of technical insight where we would have a high probability of aligning a superintelligence this decade.

In general, I think Will falls in a cluster of people who have had a bunch of misconceptions about our arguments for some time, and were a bit blinded by those misconceptions when reading the book, in a way that new readers aren't.[^0ibjthq61mlv]

The book *isn’t trying to hide its arguments*. We say a few words about topics like “AIs accelerate AI research” because they seem like plausible developments, but we don’t say *much* about them because they’re far from certain and they don’t change the core issue.

You need to *already* reject a bunch of core arguments in the book before you can arrive at a conclusion like “things will be totally fine as long as AI capabilities trendlines don’t change.”

The state of the field
----------------------

Will writes:

> I had hoped to read a Yudkowsky-Soares worldview that has had meaningful updates in light of the latest developments in ML and AI safety, and that has meaningfully engaged with the scrutiny their older arguments received. I did not get that.

The book does implicitly talk about this, when it talks about gradient descent and LLMs. The situation looks a lot more dire now than it did in 2010. E.g., quoting a comment Eliezer made in a private channel a few days ago:

> The book does not go very hard on the old Fragility of Value thesis from the *Overcoming Bias* days, because the current technology is bad enough that we're not likely to get that kind of close miss.  The problem is more like, 'you get some terms of the utility function sorta right on the training distribution but their max outside the training distribution is way different from where you hoped it would generalize' than 'the AI cares about love, life, happiness, fun, consciousness, novelty, and honor, but not music and freedom'.

The book also talks about why we don’t think current LLMs’ ability to competently serve users or [pass ethics exams](https://www.lesswrong.com/posts/8NKu9WES7KeKRWEKK/why-all-the-fuss-about-recursive-self-improvement#Deep_learning) is much evidence that we have superintelligence alignment in the bag.[^7757s1wzctf] And, for what it’s worth, this seems to be the standard view in the field. See, e.g., Geoff Hinton calling RLHF “[a pile of crap](https://x.com/lethal_ai/status/1928183858958086411)," or OpenAI [acknowledging](https://openai.com/index/introducing-superalignment/) in 2023 (before their superintelligence alignment team imploded):

> Currently, we don’t have a solution for steering or controlling a potentially superintelligent AI, and preventing it from going rogue. Our current techniques for aligning AI, such as reinforcement learning from human feedback⁠, rely on humans’ ability to supervise AI. But humans won’t be able to reliably supervise AI systems much smarter than us, and so our current alignment techniques will not scale to superintelligence. We need new scientific and technical breakthroughs.

You wouldn't hear people like Hinton saying we have coinflip odds of surviving, or Leike saying we have 10-90% odds of surviving, if we were in an "everything's set to go fine on our current trajectory" kind of situation. You can maybe make an argument for “this is a desperate and chaotic situation, but our best bet is to plough ahead and hope for the best,” but you definitely can’t make an argument for “labs have everything under control, things look great, nothing to worry about here.”

The book’s online supplement adds some additional points on this topic:

*   [Aren’t developers regularly making their AIs nice and safe and obedient?](https://t.co/PZWjEdrANB)
*   [Doesn’t the Claude chatbot show signs of being aligned?](https://t.co/rGf565QHNT)

The evolution analogy
---------------------

The book talks plenty about evolution and ML engineering being very different beasts (see, e.g., pp. 64-65). It doesn't rest the main case for "racing to build ASI as soon as possible won't get us an aligned ASI" on this one analogy (see all of Chapters 10 and 11), and it talks at some length about interpretability research and various plans and ideas by the labs. The online supplement linked in the book talks more about these plans, e.g.:

*   [Won’t there be early warnings researchers can use to identify problems?](https://t.co/wmEwAyBESm)
*   [Do experts understand what’s going on inside AIs?](https://t.co/J9MnizItWi)
*   [Why not just read the AI’s thoughts?](https://t.co/wEA2pOlMvb)
*   [More on Some of the Plans We Critiqued in the Book](https://t.co/fSFYNEgwml)

The evolution analogy isn't just making an outside-view argument of the form "evolution didn't align us, therefore humans won't align AI." Rather, evolution illustrates the specific point that the link between the outer training target and the final objective of a trained mind once it has become much smarter is complex and contingent by default.

This isn't a particularly surprising point, and it isn't too hard to see why it would be true on theoretical first principles; but evolution is one useful way to see this point, and as a matter of historical happenstance, the evolution analogy was important for researchers first noticing and articulating this point.

This tells us things about the *kind* of challenge researchers are facing, not just about the *magnitude* of the challenge. There’s a deep challenge, and a ready availability of shallow patches which will look convincing but will fail under pressure. Researchers can use their ingenuity to try to find a solution, but brushing this feature of the problem off with “there are differences between ML and evolution” (without acknowledging all the convincing-looking shallow patches) makes me worry that this aspect of the problem hasn’t really been appreciated.

Without any explicit appeal to evolution, the argument looks like:

1\. Outer optimization for success tends to lead to minds that contain many complex internal forces that have their balance at training success.

2\. When we look at ML systems today, we see many signs of complex internal forces. ML minds are a mess of conflicting and local drives. (And very strange drives, at that, even when companies are trying their hardest to train AIs to "just be normal" and imitate human behavior.)

3\. Labs' attempts to fix things seem to have a sweep-under-the-rug property, rather than looking like they're at all engaging with root causes. The complex internal forces still seem to be present after a problem is “fixed.” (E.g., researchers painstakingly try to keep the model on rails, only for the rails to shatter immediately [when users switch to talking in Portuguese](https://nickwinter.net/posts/my-experiences-in-gray-swan-ais-ultimate-jailbreaking-championship).) Which is not surprising, because researchers have almost no insight into root causes, and almost no ability to understand AIs' drives even months or years after the fact.

This is basically a more general and explicitly-spelled-out version of Hinton's critique of RLHF. For some more general points, see:

*   [Isn’t it important to race ahead so we can do alignment research?](https://t.co/aAjh2wXDPW)

AI progress without discontinuities
-----------------------------------

Re "what if AI progress goes more slowly?", I'd make four claims:

1\. It probably won't go slow-and-steady all the way from here to superintelligence. Too many things have to go right at once: there are many different ways for intelligence to improve, and they all need to line up with trend lines into the indefinite future.

The more common case is that trend lines are helpful for predicting progress for a few years, and then something changes and a new trend line becomes more helpful.

In some cases you get extra long CS trend lines, like Moore's Law before that finally fell — though that was presumably in part because Moore's Law was an industry benchmark, not just a measurement.

And in some cases you can post-facto identify some older trendline that persists even after the paradigm shift, but "there's *some* perspective from which we can view this as continuous" isn't helpful in the manner of "we know for a fact that the trendlines we're *currently* looking at are going to hold forever."

2a. As the book notes, the AI capability trendlines we have aren't very informative about real-world impacts. Knowing "these numbers are likely to stay on trend for at least a few more years" doesn't help if we don't know where on the curve various practical capabilities come online.

2b. Relatedly: a smooth cognitive ability curve doesn't always translate into a smooth curve in practical power or real-world impact.

3\. Even if you have a hunch that all of these curves (and every important not-very-measurable feature of the world that matters) will stay smooth from here to superintelligence, you probably shouldn't be *confident* in that claim, and therefore shouldn't want to gamble everyone's lives on that claim if there's any possible way to do otherwise.

Paul Christiano, probably the researcher who played the largest role in popularizing "maybe AI will advance in a continuous and predictable way from here to ASI" (or "soft takeoff"), said in 2018 that he had a 30% probability on hard takeoff happening instead.  I don't know what his personal probabilities (a.k.a. guesses, because these are all just guesses and there is zero scientific consensus) are today, but in 2022 he said that if he lost his bet with Yudkowsky on AI math progress he might update to "a 50% chance of hard takeoff"; and then he did lose that bet.

It seems pretty insane to be betting the lives of our families and our world on these kinds of speculations. It would be one thing if Will thought superintelligence were impossible, or safe-by-default; but to advocate that we race to build it as fast as possible because *maybe* takeoff will be soft and *maybe* researchers will figure something out with the extra time seems wild. I feel like Will's review didn't adequately draw that wildness out.

4\. Contrary to Will’s proposals, I don't think soft takeoff actually meaningfully increases our odds of survival. It's "more optimistic" in the way that driving off a 200-foot cliff is more optimistic than driving off a 2000-foot cliff. You still probably die, and all our haggling about fringe survival scenarios shouldn't distract from that fact.

The actual book isn't about the "takeoff continuity" debate at all. The disaster scenario the book focuses on in Part Two is a soft takeoff scenario, where AI hits a wall at around human-level capabilities. See also Max Harms' [post](https://lesswrong.com/posts/JWH63Aed3TA2cTFMt/contra-collier-on-iabied) discussing this.

The 16-hour run of Sable in Part Two, and the ability to do qualitatively better on new tasks, was lifted from the behavior of o3, which had only recently finished its ARC-AGI run as we were putting pen to paper on that part. I think we all agree that the field regularly makes progress by steps of that size, and that these add up to relatively smooth curves from a certain point of view. The Riemann hypothesis looks like a good guess for tomorrow’s version of ARC-AGI.

There’s then a separate question of whether new feedback loops can close, and launch us onto totally different rates of progress. I think “yes.” The loss-of-control story in Part Two assumes “no,” partly to help show that this is inessential.

### Before and After

To better see why this is inessential:

Suppose that someone says, "My general can never orchestrate a coup, because I only give him one new soldier per day.” Increasing the size of the army slowly, in this way, doesn’t actually help. There’s still the gap between Before and After (from Chapter 10): the tests you run on a general who can’t stage a successful coup won’t be reliably informative about a general who *can* stage such a coup, and many of the empirical generalizations break when you move to can-actually-perform-a-coup territory.

It’s unlikely that we’ll have robust ways to read AIs’ minds if we race ahead as fast as possible; but if we do add the assumption that we can read the general’s mind and see him thinking “Would a coup succeed yet?”, we run into the issues in "[Won't there be early warnings?](https://ifanyonebuildsit.com/11/wont-there-be-early-warnings-researchers-can-use-to-identify-problems)"

We also run into the issue that if you do a bunch of tinkering with the general’s mind and cause him to stop thinking “Would a coup succeed yet?” when he’s too weak to succeed, you need this solution to generalize to the context where the coup *would* succeed.

This context is going to be different in many ways, and your solutions need to hold up even though some of your relevant theories and generalizations are inevitably going to be wrong on the first go. This is even more true in the case of AI, where the transition to “can succeed in a coup” likely includes important changes to the AI itself (whether achieved gradually or discontinuously), not just changes to the AI’s environment and resources.

As Joe Collman notes, a common straw version of the *If Anyone Builds It, Everyone Dies* thesis is that "existing AIs are so dissimilar" to a superintelligence that "any work we do now is irrelevant," when the actual view is that it's *insufficient*, not irrelevant.

![Image](https://pbs.twimg.com/media/G14KPlsb0AEMwmC?format=png&name=small)

### Thought experiments vs. headlines

Paraphrasing my takeaways from a recent conversation with someone at MIRI (written in their voice, even though it mixes together our views a bit):

My perspective on this entire topic is heavily informed by the experience of seeing people spending years debating the ins and outs of AI box experiments, questioning whether a superintelligence could ever break out of its secure airgapped container — only for the real world to bear no relation to these abstruse debates, as companies scramble over each other to hook their strongest AIs up to the Internet as fast as possible to chase profits and exciting demos.

People debate hypothetical complicated schemes for how *they* would align an AI in Academic Theory Land, and then the real world instead looks like this:

![Image](https://pbs.twimg.com/media/G14N1Tyb0AErbyJ?format=png&name=900x900)

The real world looks like an embarrassing, chaotic disaster, not like a LessWrong thought experiment. This didn't suddenly go away when harms moved from "small" to "medium-sized." It [isn't likely to go away](https://ifanyonebuildsit.com/13/will-there-be-warning-shots) when harms move from "medium-sized" to "large."

Companies make nice-sounding promises and commitments, and then [roll them back](https://ifanyonebuildsit.com/11/wont-the-most-reckless-companies-naturally-be-the-most-incompetent-and-thus-not-a-threat) at the earliest inconvenience. Less and less cautious actors enter the race, and more-cautious actors cut corners more and more to maintain competitiveness.

People fantasize about worlds where AIs can help revolutionize alignment; and another year passes, and alignment remains un-revolutionized, and so we can always keep saying "Maybe next year!" until the end of the world. (If there's some clear threshold we could pass that would make you go "ah, this isn't working," then what would it look like? How early would you expect to get this test result back? How much time would it give governments to respond, if we don't start working toward a development halt today?)

People fantasize about worlds where Good AIs can counter the dangers of Bad AIs, so long as we just keep racing ahead as fast as possible. It's a *good* thing, even, that everybody has less and less time to delay releases for safety reasons, because it just means that there will be even more powerful AIs in the world and therefore even more Good ones to stop the Bad ones. But these supposedly inevitable dynamics always exist in stories about the future, never in observable phenomena we can see today.

In a story, you can always speculate that AI-induced psychosis won't be an issue, because before we have AIs talking thousands of people into psychotic breaks, we'll surely have other AIs that can debug or filter for the psychosis-inducing AIs, or AIs that can protect at-risk individuals.

In a story, no problem ever has to arise, because you can just imagine that all capabilities (and all alignment milestones) will occur in exactly the right sequence to prevent any given harm. In real life, we instead just stumble into every mishap the technology permits, in order; and we wait however many weeks or months or years it takes to find a cheap good-enough local patch, and then we charge onward until the next mishap surprises us.

This is fine as long as the mishaps are small, but the mishaps foreseeably stop being small as the AI becomes more powerful. (And as the AI becomes more able to anticipate and work around safety measures, and more able to sandbag and manipulate developers.)

Even when things stay on trendline, the world goes weird, and it goes fast. It's easy to imagine that everything's going to go down the sanest-seeming-to-you route (like people of the past imagining that the AIs would be boxed and dealt with only through guardians), but that's not anywhere near the path we're on.

If AIs get more capable tomorrow, the world doesn't suddenly start boxing tomorrow, or doing whatever else LessWrongers like having arguments about. Softer takeoff worlds get weird and then die weird deaths.

### Passing the alignment buck to AIs

(*Continuing to sort-of paraphrase*)

To say more about the idea of getting the AIs to solve alignment for us (also discussed in Chapter 11 of the book, and in [the online supplement](https://ifanyonebuildsit.com/11/more-on-some-of-the-plans-we-critiqued-in-the-book)):

How much alignment progress can current humans plus non-superhuman AIs make, if we race ahead to build superintelligence as soon as possible?

My take is "basically none."

My high-level sense is that when researchers today try to do alignment research, they see that it's hard to get any solutions that address even one root cause in a way we can understand. They see that we can only really manage trial-and-error, and guesswork, and a long list of shallow patches to local inexplicable misbehaviors, until most of the alarms temporarily die down.

These kinds of patches are unlikely to hold to superintelligence.

Doing much better seems like it would require, to some extent, getting a new understanding of how intelligence works and what’s going on inside AI. But developing new deep understanding probably takes a lot of intelligence. Humans plus weak AIs don't figure that out; they mislead themselves instead.

If people are thinking of "slightly superhuman" AIs being used for alignment work, my basic guess is that they hit one of four possibilities:

1.  AIs that say, "Yep, I’m stumped too."
2.  AIs that know it isn't in their best interest to help you, and that will either be unhelpful or will actively try to subvert your efforts and escape control.
3.  AIs that are confidently wrong and lead you off a cliff just like the humans would.
4.  AIs that visibly lead you nowhere.

None of these get you out of the woods. If you're working with the sort of AI that is not smart enough to notice its deep messy not-ultimately-aligned-with-human-flourishing preferences, you’re probably working with the sort of AI that’s not smart enough to do the job properly either.

Science and engineering work by trying lots of things, seeing what goes wrong, and iterating until we finally have mature theory and robust engineering practices. If AIs turn out to advance at a more predictable rate, this doesn't escape [that](https://ifanyonebuildsit.com/10/how-long-would-it-take-to-solve-the-asi-alignment-problem) [problem](https://ifanyonebuildsit.com/10/a-closer-look-at-before-and-after).

Mostly it just looks like an enormous minefield to me, that people say they want to sprint across. It would be easier to critique if anyone were more concrete about which path through the minefield they think is navigable at speed.

</paraphrase>

"Imperfect" alignment
---------------------

Will argues that current AIs are "imperfectly" aligned, but not "catastrophically" misaligned.

The main problem with the kind of alignment Will's calling "imperfect" isn't that it's literally imperfect.[^4ywft2uhjkg] It's that AIs find new and better options over time.

The labs aren’t trying to build human-level AIs and stop there; they’re trying to build superintelligences that vastly outstrip the abilities of human civilization and advance scientific frontiers at enormous speed. Will thinks they’re going to *succeed*, albeit via continuous (but objectively pretty fast) improvement. This means that AIs need to do what we’d want (or something sufficiently close to what we’d want) even in cases that we never anticipated, much less trained for.

It seems predictable today that if we race ahead to build ASI as fast as possible (because we tossed aside the option of slowing down or stopping via international regulation), the end result of this process won’t be “the ASI deeply and robustly wants there to be happy, healthy, free people.”

The reason for this is that no matter how much we try to train for “robustness” in particular,[^3uwy8qjlr5n] the ASI’s goals will be an enormous mess of partly-conflicting drives that happened to coincide with nice-looking outcomes. As the AI continues to (“non-discontinuously”) race ahead, improve itself, reflect, change, advance new scientific frontiers, grow in power and influence, and widen its option space, the robustness solutions that make the AI’s goals non-brittle in some respects will inevitably fail to make the AI’s goals non-brittle in every respect that matters.

There may be solutions to this problem in principle, but realistically, they’re not the solutions a competitive, accelerating race will find in the course of spinning up immediately profitable products, particularly when the race begins with the kinds of methods, techniques, and insights we have in machine learning today.

Will gives "risk aversion" as a reason that an AI can be misaligned and superhumanly powerful while still being safe to have around. But:

1.  Risk aversion can prevent AIs from trying to seize power as long as seizing power is the risky move. But anyone competent who has done a group project will know that sometimes grabbing influence or control is the far less risky option.
    
    Takeover sounds intuitively risky to *humans*, because it puts us in danger; but that doesn’t mean it will always be risky (or relatively risky) for AIs, which will have more and more options as they become more capable, and which have to worry about all the risks of keeping their hands off the steering wheel. (As an obvious example, humans could build a new AI that's less risk-averse, endangering existing AIs.)
    
2.  AIs are very unlikely to ultimately value promise-keeping as an end in itself; and they won’t have an incentive to keep their promises to humans once they have the power to take over. Any deals you make with the risk-taking AI while it’s weak and uncertain will fail to constrain its options once it’s confident about some way to take over. For the argument for this point, see [AIs Won't Keep Their Promises](https://ifanyonebuildsit.com/5/ais-wont-keep-their-promises).

For more discussion of "imperfect" alignment, see the links in "the state of the field", and:

*   [Won’t AIs care at least a little about humans?](https://t.co/TWKVCSgutf)
*   [Do you see alignment as all-or-nothing?](https://t.co/mpJaE1FKat)

Government interventions
------------------------

Lastly, Will says:

> The positive proposal is extremely unlikely to happen, could be actively harmful if implemented poorly (e.g. stopping the frontrunners gives more time for laggards to catch up, leading to more players in the race if AI development ends up resuming before alignment is solved), and distracts from the suite of concrete technical and governance agendas that we could be implementing.

I agree that we need to be careful about implementation details. But:

1.  I don’t think it’s helpful to treat “this is unlikely to be tried” as a strike against a new proposal, as this can often amount to a self-fulfilling prophecy. Many new ideas seem politically unpopular, until they suddenly don't; and some ideas are worth the effort to carefully examine and promote even though they're new, because they would be incredibly valuable if they do gain widespread support.
2.  I think “this proposal is bad because it distracts from other stuff” is usually also a bad argument. My guess is that pushing compute monitoring and regulation agendas does not meaningfully impair other safety agendas unless those other agendas involve risking the Earth by building superintelligent machines.
3.  If you think government intervention would be a great idea under certain conditions, you don’t need to stay quiet about government intervention. Instead, be loud about the *conditional* statement, “If X is true, then governments should do Y.” Then researchers and policy analysts can evaluate for themselves whether they think X is true.

Will also says:

> And, even if we’re keen on banning something, we could ban certain sorts of AI (e.g. AI trained on long horizon tasks, and/or AI with certain sorts of capabilities, and/or sufficiently agentic AI).

The thing that needs to stop, from our perspective, is the race towards superintelligence. Self-driving cars, narrow AI for helping boost specific medical research efforts, etc. are separate issues.

And, to reiterate, it seems to me that on Will’s own models, he ought to be *loudly advocating for the world to stop*, even as he continues to think that this is unlikely to occur. Even if you think we’ve been forced into a desperate race to build ASI as soon as possible, you should probably be pretty loud in acknowledging how insane and horrifically dangerous this situation is, just in case you’re wrong, and just in case it turns out to be important in some unexpected way for the world to better appreciate the dire reality we’re facing.

It’s cheap to acknowledge “this race to build superintelligence as fast as possible is incredibly dangerous.” It’s cheap to say “this is an objectively insane situation that’s massively suboptimal,” even if you’re currently more optimistic about non-policy solutions.

A lot of good can be achieved if people who disagree on a variety of other topics *just* verbally acknowledge that in principle it would be better to coordinate, stop, and move forward only when there’s a scientific consensus that this *won’t* kill us. The fact that people aren’t loudly saying this today is indicative of an emperor-has-no-clothes situation, which is the kind of situation where there’s even more potential benefit to being relatively early to loudly broadcast this.

Even if you don’t currently see a straight causal line from "I loudly broadcast these observations" to “useful policy X is implemented,” you should generally expect the future to go better in surprising ways if the world feels comfortable explicitly acknowledging truths.[^dmnkxujsg5]

[^0ibjthq61mlv]: I think this is also related to the "Why didn't deep learning and LLMs cause MIRI to declare victory?" bafflement. I can understand disagreeing with us about whether LLMs are a good sign, but if you think MIRI-ish perspectives on LLMs are just plain incoherent then you probably haven't understood them. 

[^7757s1wzctf]: See also Eliezer's discussion of this style of objection. 

[^4ywft2uhjkg]: E.g., in AGI Ruin: When I say that alignment is lethally difficult, I am not talking about ideal or perfect goals of 'provable' alignment, nor total alignment of superintelligences on exact human values[...] At this point, I no longer care how it works, I don't care how you got there, I am cause-agnostic about whatever methodology you used, all I am looking at is prospective results, all I want is that we have justifiable cause to believe of a pivotally useful AGI 'this will not kill literally everyone'. 

[^3uwy8qjlr5n]: Which might in fact be “not very much,” if current ML companies’ priorities are any indication. 

[^dmnkxujsg5]: This post was originally written for X/Twitter, because that's where Will's post was. I'm extremely grateful to Max Harms and multiple other MIRI staff for providing ideas, insights, feedback, and phrasings for this post that helped make it a lot better. The finished product primarily reflects my own views, not necessarily Max's or others'.