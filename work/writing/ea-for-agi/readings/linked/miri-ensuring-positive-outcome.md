---
title: "Ensuring Smarter-than-Human Intelligence has a Positive Outcome"
author: "Nate Soares"
date: 2017-04-12
url: https://intelligence.org/2017/04/12/ensuring
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2 stage-1 readings, e.g. ai-safety-core/vox-case-for-taking-ai-seriously; MIRI framing essay on ensuring smarter-than-human AI is beneficial"
---

Skip to content

# Ensuring smarter-than-human intelligence has a positive outcome

  * [ April 12, 2017 ](https://intelligence.org/2017/04/12/)
  * [ Nate Soares  ](https://intelligence.org/author/nate/)



I recently gave a talk at Google on the problem of aligning smarter-than-human AI with operators’ goals:

The talk was inspired by “[AI Alignment: Why It’s Hard, and Where to Start](https://intelligence.org/2016/12/28/ai-alignment-why-its-hard-and-where-to-start/),” and serves as an introduction to the subfield of alignment research in AI. A modified transcript follows.

Talk outline ([slides](https://intelligence.org/files/fundamental-difficulties-transitions2.pdf)):

> 1\. Overview
> 
> 2\. Simple bright ideas going wrong
> 
> 2.1. Task: Fill a cauldron  
>  2.2. Subproblem: Suspend buttons
> 
> 3\. The big picture
> 
> 3.1. Alignment priorities  
>  3.2. Four key propositions
> 
> 4\. Fundamental difficulties

* * *

* * *

### Overview

I’m the executive director of the Machine Intelligence Research Institute. Very roughly speaking, we’re a group that’s thinking in the long term about artificial intelligence and working to make sure that by the time we have advanced AI systems, we also know how to point them in useful directions.

Across history, science and technology have been the largest drivers of change in human and animal welfare, for better and for worse. If we can automate scientific and technological innovation, that has the potential to change the world on a scale not seen since the Industrial Revolution. When I talk about “advanced AI,” it’s this potential for automating innovation that I have in mind.

AI systems that exceed humans in this capacity aren’t coming next year, but many smart people are working on it, and I’m not one to bet against human ingenuity. I think it’s likely that we’ll be able to build something like an automated scientist in our lifetimes, which suggests that this is something we need to take seriously.

When people talk about the social implications of [general AI](https://intelligence.org/2013/06/19/what-is-intelligence-2/), they often fall prey to anthropomorphism. They conflate artificial _intelligence_ with artificial _consciousness_ , or assume that if AI systems are “intelligent,” they must be intelligent in the same way a human is intelligent. A lot of journalists express a concern that when AI systems pass a certain capability level, they’ll spontaneously develop “natural” desires like a human hunger for power; or they’ll reflect on their programmed goals, find them foolish, and “rebel,” refusing to obey their programmed instructions.

These are misplaced concerns. The human brain is a complicated product of natural selection. We shouldn’t expect machines that exceed human performance in scientific innovation to closely resemble humans, any more than early rockets, airplanes, or hot air balloons closely resembled birds. ((An airplane can’t heal its injuries or reproduce, though it can carry heavy cargo quite a bit further and faster than a bird. Airplanes are simpler than birds in many respects, while also being significantly more capable in terms of carrying capacity and speed (for which they were designed). It’s plausible that early automated scientists will likewise be simpler than the human mind in many respects, while being significantly more capable in certain key dimensions. And just as the construction and design principles of aircraft look alien relative to the architecture of biological creatures, we should expect the design of highly capable AI systems to be quite alien when compared to the architecture of the human mind.))

The notion of AI systems “breaking free” of the shackles of their source code or spontaneously developing human-like desires is just confused. The AI system _is_ its source code, and its actions will only ever follow from the execution of the instructions that we initiate. The CPU just keeps on executing the next instruction in the program register. We could write a program that manipulates its own code, including coded objectives. Even then, though, the manipulations that it makes are made as a result of executing the original code that we wrote; they do not stem from some kind of ghost in the machine.

The serious question with smarter-than-human AI is how we can ensure that the objectives we’ve specified are correct, and how we can minimize costly accidents and unintended consequences in cases of misspecification. As Stuart Russell (co-author of _Artificial Intelligence: A Modern Approach_) [puts it](https://www.edge.org/conversation/the-myth-of-ai#26015):

> The primary concern is not spooky emergent consciousness but simply the ability to make _high-quality decisions_. Here, quality refers to the expected outcome utility of actions taken, where the utility function is, presumably, specified by the human designer. Now we have a problem:
> 
> 1\. The utility function may not be perfectly aligned with the values of the human race, which are (at best) very difficult to pin down.
> 
> 2\. Any sufficiently capable intelligent system will prefer to ensure its own continued existence and to acquire physical and computational resources – not for their own sake, but to succeed in its assigned task.
> 
> A system that is optimizing a function of _n_ variables, where the objective depends on a subset of size _k_ <_n_ , will often set the remaining unconstrained variables to extreme values; if one of those unconstrained variables is actually something we care about, the solution found may be highly undesirable.

These kinds of concerns deserve a lot more attention than the more anthropomorphic risks that are generally depicted in Hollywood blockbusters.

### Simple bright ideas going wrong

**Task: Fill a cauldron**

Many people, when they start talking about concerns with smarter-than-human AI, will throw up a picture of the Terminator. I was once quoted in a news article making fun of people who put up Terminator pictures in all their articles about AI, next to a Terminator picture. I learned something about the media that day.

I think this is a much better picture:

This is Mickey Mouse in the movie _Fantasia_ , who has very cleverly enchanted a broom to fill a cauldron on his behalf.

How might Mickey do this? We can imagine that Mickey writes a computer program and has the broom execute the program. Mickey starts by writing down a scoring function or objective function:  
$$\mathcal{U}_{broom} =  
\begin{cases}  
1 &\text{ if cauldron full} \\\  
0 &\text{ if cauldron empty}  
\end{cases}$$Given some set ? of available actions, Mickey then writes a program that can take one of these actions ? as input and calculate how high the score is expected to be if the broom takes that action. Then Mickey can write a function that spends some time looking through actions and predicting which ones lead to high scores, and outputs an action that leads to a relatively high score:  
$$\underset{a\in A}{\mathrm{sorta\mbox{-}argmax}} \ \mathbb{E}\left[\mathcal{U}_{broom}\mid a\right]$$The reason this is “sorta-argmax” is that there may not be time to evaluate every action in ?. For realistic action sets, agents should only need to find actions that make the scoring function as large as they can given resource constraints, even if this isn’t the maximal action.

This program may look simple, but of course, the devil’s in the details: writing an algorithm that does accurate prediction and smart search through action space is basically the whole problem of AI. Conceptually, however, it’s pretty simple: We can describe in broad strokes the kinds of operations the broom must carry out, and their plausible consequences at different performance levels.

When Mickey runs this program, everything goes smoothly at first. [Then](https://www.youtube.com/watch?v=UEYy3osi8Gs&t=3m25s):

I claim that as fictional depictions of AI go, this is pretty realistic.

Why would we expect a generally intelligent system executing the above program to start overflowing the cauldron, or otherwise to go to extreme lengths to ensure the cauldron is full?

The first difficulty is that the objective function that Mickey gave his broom left out [a bunch of other terms](https://intelligence.org/files/ComplexValues.pdf) Mickey cares about:

$$\mathcal{U}_{human} =  
\begin{cases}  
1&\text{ if cauldron full} \\\  
0&\text{ if cauldron empty} \\\  
-10&\text{ if workshop flooded} \\\  
+0.2&\text{ if it’s funny} \\\  
-1000000&\text{ if someone gets killed} \\\  
&\text{… and a whole lot more} \\\  
\end{cases}$$

The second difficulty is that Mickey programmed the broom to make the expectation of its score as large as it could. “Just fill one cauldron with water” looks like a modest, limited-scope goal, but when we translate this goal into a probabilistic context, we find that optimizing it means driving up the probability of success to absurd heights. If the broom assigns a 99.9% probability to “the cauldron is full,” and it has extra resources lying around, then it will always try to find ways to use those resources to drive the probability even a little bit higher.

Contrast this with the limited “[task-like](https://arbital.com/p/task_goal/)” goal we presumably had in mind. We wanted the cauldron full, but in some intuitive sense we wanted the system to “not try too hard” even if it has lots of available cognitive and physical resources to devote to the problem. We wanted it to exercise creativity and resourcefulness within some intuitive limits, but we didn’t want it to pursue “absurd” strategies, especially ones with large unanticipated consequences. ((Trying to give some formal content to these attempts to differentiate task-like goals from open-ended goals is one way of generating open research problems. In the “[Alignment for Advanced Machine Learning Systems](https://intelligence.org/2016/07/27/alignment-machine-learning/)” research proposal, the problem of formalizing “don’t try too hard” is [mild optimization](https://arbital.com/p/soft_optimizer/), “steer clear of absurd strategies” is [conservatism](https://arbital.com/p/conservative_concept/), and “don’t have large unanticipated consequences” is [impact measures](https://arbital.com/p/low_impact/). See also “avoiding negative side effects” in Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman, and Dan Mané’s “[Concrete Problems in AI Safety](https://arxiv.org/abs/1606.06565).”))

In this example, the original objective function looked pretty task-like. It was bounded and quite simple. There was no way to get ever-larger amounts of utility. It’s not like the system got one point for every bucket of water it poured in — then there would clearly be an incentive to overfill the cauldron. The problem was hidden in the fact that we’re maximizing _expected_ utility. This makes the goal open-ended, meaning that even small errors in the system’s objective function will [blow up](https://arbital.com/p/goodharts_curse/).

There are a number of different ways that a goal that looks task-like can turn out to be open-ended. Another example: a larger system that has an overarching task-like goal may have [subprocesses](https://www.gwern.net/Tool%20AI) that are themselves trying to maximize a variety of different objective functions, such as optimizing the system’s memory usage. If you don’t understand your system well enough to track whether any of its subprocesses are themselves acting like resourceful open-ended optimizers, then [it may not matter how safe the top-level objective is](https://agentfoundations.org/item?id=1220).

So the broom keeps grabbing more pails of water — say, on the off chance that the cauldron has a leak in it, or that “fullness” requires the water to be slightly above the level of the brim. And, of course, at no point does the broom “rebel against” Mickey’s code. If anything, the broom pursued the objectives it was programmed with _too_ effectively.

**Subproblem: Suspend buttons**

A common response to this problem is: “OK, there may be some unintended consequences of the objective function, but we can always pull the plug, right?”

Mickey [tries this](http://www.youtube.com/watch?v=UEYy3osi8Gs&t=4m0s), and it doesn’t work:

And I claim that this is realistic too, for systems that are sufficiently good at modeling their environment. If the system is trying to drive up the expectation of its scoring function and is smart enough to recognize that its being shut down will result in lower-scoring outcomes, then the system’s incentive is to subvert shutdown attempts. The more capable the system is, the likelier it is to find creative ways to achieve that subgoal — e.g., by copying itself to the Internet, or by tricking the programmers into thinking it’s safer.

This isn’t to say that it’s impossible to shut down sufficiently capable AI systems; it’s just that we need to put in the extra work of deliberately designing systems to avoid searching for ways to avoid being shut down. If you’ve written code that would try to resist attempts to shut it down, then you shouldn’t run the code even if you’re convinced it would fail — there are better ways to spend those compute cycles than on adversarial policy searches.

Relevant safety measures that don’t assume we can always outthink and outmaneuver the system will need to modify the system’s objective function in some relevant way. We need to figure out how to formally specify objective functions that don’t automatically place the AI system into an adversarial context with the operators; or we need to figure out some way to have the system achieve goals without optimizing some objective function in the traditional sense. E.g., we can look for ways to limit the system’s capabilities [to a small set of “whitelisted” domains](https://arbital.com/p/direct_limit_oppose/) that don’t include thinking about whether the system will be shut down.

One obvious solution is to try changing the score function to make reference to a suspend button ?:  
$$\mathcal{U}^\prime_{broom} =  
\begin{cases}  
1 \text{ if cauldron full } & \text{& } \textbf{B}\text{=OFF} \\\  
0 \text{ if cauldron empty } & \text{& } \textbf{B}\text{=OFF} \\\  
1 \text{ if robot suspended } & \text{& } \textbf{B}\text{=ON} \\\  
0 \text{ otherwise}  
\end{cases}$$This says that when the button is on, the system’s goal changes from “fill the cauldron” to “be suspended.”

It’s not clear how we could actually specify this goal — if there are any loopholes in the way we’ve specified “suspension,” then the system might try to exploit them to hedge its bets. E.g., it could fulfill the _technical_ definition of “suspend operations” while tasking a child agent it built or subprocess it started with filling the cauldron. This would allow is to achieve both “cauldron full” and “robot suspended” at once, just in case it’s wrong about whether the button has been pushed.

Let’s assume, however, that we’ve found an airtight way to technically specify suspension. The problem we run into now is that we’ve given the system an incentive to care a lot about whether the button is pushed. If it has any way to influence its operators’ decision to push the button, or any other way to exercise more control, then it will jump on the opportunity and try to ensure the button is pushed, or ensure that it’s not pushed — depending on whether it looks easier to suspend or to fill the cauldron.

And, surprisingly, the state of the art on this problem isn’t much more advanced than that. There’s a paper co-authored by me, Fallenstein, Yudkowsky, and Armstrong (“[Corrigibility](http://aaai.org/ocs/index.php/WS/AAAIW15/paper/view/10124/10136)“), and a related result by Orseau and Armstrong (“[Safely Interruptible Agents](https://intelligence.org/2016/06/01/new-paper-safely-interruptible-agents/)“), but not a lot more.

What we want is a way to combine two objective functions — a default function for normal operation, and a suspend function for when we want to suspend the system to disk.$$\mathcal{U}_{normal}(act) =  
\begin{cases}  
1\text{ if cauldron full} \\\  
0\text{ if cauldron empty}  
\end{cases}$$

$$\mathcal{U}_{suspend}(act) =  
\begin{cases}  
1\text{ if suspended} \hspace{0.8cm}\\\  
0\text{ otherwise}  
\end{cases}$$We want our method for combining the functions to satisfy three conditions: an operator should be able to switch between the functions (say, by pushing a button); the system shouldn’t have any incentives to control which function is active; and if it’s plausible that the system’s normal operations could inadvertently compromise our ability to switch between the functions, then the system should be incentivized to keep that from happening.

So far, we haven’t found any way to achieve all three goals at once. As an example, we can try to remove any incentive on the system’s part to control whether its suspend button is pushed by giving the system a switching objective function that always assigns the same expected utility to the button being on or off:  
$$\mathcal{U}_{switch}(act) =  
\begin{cases}  
\mathcal{U}_{normal}(act) &\text{ if button=OFF} \\\  
\mathcal{U}_{suspend}(act) + \theta &\text{ if button=ON}  
\end{cases}$$$$\theta = \max_{act} \mathbb{E}\left[\mathcal{U}_{normal}\mid act\right] – \max_{act} \mathbb{E}\left[\mathcal{U}_{suspend}\mid act\right]$$Unfortunately, this approach makes it impossible to satisfy the third condition. It turns out that the above objective function is equivalent to setting the probability of the button being pressed to 0. The system won’t _deliberately_ tamper with the button, but it will happily approve updates that delete any reference to the button as dead code, or build subagents that ignore the button.

Meeting these intuitively simple constraints turns out to be a nontrivial problem. This is a pattern that runs through a lot of questions in this space: traditional tools and concepts run into immediate safety problems that don’t turn up in conventional capabilities research.

* * *

### The big picture

**Alignment priorities**

Let’s take a step back and talk about what’s needed overall in order to align highly capable AI systems with our interests.

Here’s a dramatically simplified pipeline: You have some humans who come up with some task or goal or preference set that serves as their intended value function ?. Since our values are complicated and context-sensitive, in practice we’ll need to build systems to learn our values over time, rather than coding them by hand. ((One thing we’ve learned in the field of machine vision over the last few decades is that it’s hopeless to specify by hand what a cat looks like, but that it’s not too hard to specify a learning system that can learn to recognize cats. It’s even more hopeless to specify everything we value by hand, but it’s plausible that we could specify a learning system that can learn the relevant concept of “value.”)) We’ll call the goal the AI system ends up with (which may or may not be identical to ?) ?.

When the press covers this topic, they often focus on one of two problems: “What if the wrong group of humans develops smarter-than-human AI first?”, and “What if AI’s natural desires cause ? to diverge from ??”

In my view, the “wrong humans” issue shouldn’t be the thing we focus on until we have reason to think we could get good outcomes with the _right_ group of humans. We’re very much in a situation where well-intentioned people couldn’t leverage a general AI system to do good things even if they tried. As a simple example, if you handed me a box that was an extraordinarily powerful function optimizer — I could put in a description of any mathematical function, and it would give me an input that makes the output extremely large — then I don’t know how I could use that box to develop a new technology or advance a scientific frontier without causing any catastrophes. ((See “[Environmental Goals](https://arbital.com/p/environmental_goals/),” “[Low-Impact Agents](https://arbital.com/p/low_impact/),” and “[Mild Optimization](https://arbital.com/p/soft_optimizer/)” for examples of obstacles to specifying physical goals without causing catastrophic side-effects.

Roughly speaking, MIRI’s focus is on research directions that seem likely to help us conceptually understand how to do AI alignment in principle, so we’re fundamentally less confused about the kind of work that’s likely to be needed.

What do I mean by this? Let’s say that we’re trying to develop a new chess-playing programs. Do we understand the problem well enough that we could solve it if someone handed us an arbitrarily large computer? Yes: We make the whole search tree, backtrack, see whether white has a winning move.

If we didn’t know how to answer the question even with an arbitrarily large computer, then this would suggest that we were fundamentally confused about chess in some way. We’d either be missing the search-tree data structure or the backtracking algorithm, or we’d be missing some understanding of how chess works.

This was the position we were in regarding chess prior to Claude Shannon’s seminal paper, and it’s the position we’re currently in regarding many problems in AI alignment. No matter how large a computer you hand me, I could not make a smarter-than-human AI system that performs even a very simple limited-scope task (e.g., “put a strawberry on a plate without producing any catastrophic side-effects”) or achieves even a very simple open-ended goal (e.g., “maximize the amount of diamond in the universe”).

If I didn’t have any particular goal in mind for the system, I _could_ write a program (assuming an arbitrarily large computer) that strongly optimized the future in an undirected way, using a formalism like [AIXI](https://arbital.com/p/AIXI/). In that sense we’re less obviously confused about capabilities than about alignment, even though we’re still missing a lot of pieces of the puzzle on the practical capabilities front.

Similarly, we do know how to leverage a powerful function optimizer to mine bitcoin or prove theorems. But we don’t know how to (safely) do the kind of prediction and policy search tasks I described in the “fill a cauldron” section, even for modest goals in the physical world.

Our goal is to develop and formalize basic approaches and ways of thinking about the alignment problem, so that our engineering decisions don’t end up depending on sophisticated and clever-sounding verbal arguments that turn out to be subtly mistaken. Simplifications like “what if we weren’t worried about resource constraints?” and “what if we were trying to achieve a much simpler goal?” are a good place to start breaking down the problem into manageable pieces. For more on this methodology, see “[MIRI’s Approach](https://intelligence.org/2015/07/27/miris-approach/).”))

There’s a lot we don’t understand about AI capabilities, but we’re in a position where we at least have a general sense of what progress looks like. We have a number of good frameworks, techniques, and metrics, and we’ve put a great deal of thought and effort into successfully chipping away at the problem from various angles. At the same time, we have a very weak grasp on the problem of how to align highly capable systems with any particular goal. We can list out some intuitive desiderata, but the field hasn’t really developed its first formal frameworks, techniques, or metrics.

I believe that there’s a lot of low-hanging fruit in this area, and also that a fair amount of the work does need to be done early (e.g., to help inform capabilities research directions — some directions may produce systems that are much easier to align than others). If we don’t solve these problems, developers with arbitrarily good or bad intentions will end up producing equally bad outcomes. From an academic or scientific standpoint, our first objective in that kind of situation should be to remedy this state of affairs and at least make good outcomes technologically possible.

Many people quickly recognize that “natural desires” are a fiction, but infer from this that we instead need to focus on the other issues the media tends to emphasize — “What if bad actors get their hands on smarter-than-human AI?”, “How will this kind of AI impact employment and the distribution of wealth?”, etc. These are important questions, but they’ll only end up actually being relevant if we figure out how to bring general AI systems up to a minimum level of reliability and safety.

Another common thread is “Why not just tell the AI system to (insert intuitive moral precept here)?” On this way of thinking about the problem, often (perhaps unfairly) associated with Isaac Asimov’s writing, ensuring a positive impact from AI systems is largely about coming up with natural-language instructions that are vague enough to subsume a lot of human ethical reasoning:

In contrast, precision is a virtue in real-world safety-critical software systems. Driving down accident risk requires that we begin with limited-scope goals rather than trying to “solve” all of morality at the outset. ((“Fill this cauldron without being too clever about it or working too hard or having any negative consequences I’m not anticipating” is a rough example of a goal that’s intuitively limited in scope. The things we actually want to use smarter-than-human AI for are obviously more ambitious than that, but we’d still want to begin with various limited-scope tasks rather than open-ended goals.

Asimov’s Three Laws of Robotics make for good stories partly for the same reasons they’re unhelpful from a research perspective. The hard task of turning a moral precept into lines of code is hidden behind phrasings like “[don’t,] through inaction, allow a human being to come to harm.” If one followed a rule like that strictly, the result would be massively disruptive, as AI systems would need to systematically intervene to prevent [even the smallest risks of even the slightest harms](https://intelligence.org/2016/12/28/ai-alignment-why-its-hard-and-where-to-start/#1); and if the intent is that one follow the rule loosely, then all the work is being done by the human sensibilities and intuitions that tell us [when and how to apply the rule](http://lesswrong.com/lw/sp/detached_lever_fallacy/).

A common response here is that vague natural-language instruction is sufficient, because smarter-than-human AI systems are likely to be capable of natural language comprehension. However, this is eliding the distinction between the system’s objective function and its model of the world. A system acting in an environment containing humans may learn a world-model that has lots of information about human language and concepts, which the system can then use to achieve its objective function; but this fact doesn’t imply that any of the information about human language and concepts will “leak out” and alter the system’s objective function directly.

Some kind of value learning process needs to be defined where the objective function itself improves with new information. This is a tricky task because there aren’t known (scalable) metrics or criteria for value learning in the way that there are for conventional learning.

If a system’s world-model is accurate in training environments but fails in the real world, then this is likely to result in lower scores on its objective function — the system itself has an incentive to improve. The severity of accidents is also likelier to be self-limiting in this case, since false beliefs limit a system’s ability to effectively pursue strategies.

In contrast, if a system’s value learning process results in a ? that matches our ? in training but diverges from ? in the real world, then the system’s ? will obviously not penalize it for optimizing ?. The system has no incentive relative to ? to “correct” divergences between ? and ?, if the value learning process is initially flawed. And accident risk is larger in this case, since a mismatch between ? and ? doesn’t necessarily place any limits on the system’s instrumental effectiveness at coming up with effective and creative strategies for achieving ?.

The problem is threefold:

1\. “Do What I Mean” is an informal idea, and even if we knew how to build a smarter-than-human AI system, we wouldn’t know how to precisely specify this idea in lines of code.

2\. If doing what we actually mean is instrumentally useful for achieving a particular objective, then a sufficiently capable system may learn how to do this, and may act accordingly so long as doing so is useful for its objective. But as systems become more capable, they are likely to find creative new ways to achieve the same objectives, and there is no obvious way to get an assurance that “doing what I mean” will continue to be instrumentally useful indefinitely.

3\. If we use value learning to refine a system’s goals over time based on training data that appears to be guiding the system toward a ? that inherently values doing what we mean, it is likely that the system will actually end up zeroing in on a ? that approximately does what we mean during training but catastrophically diverges in some difficult-to-anticipate contexts. See “[Goodhart’s Curse](https://arbital.com/p/goodharts_curse/)” for more on this.

For examples of problems faced by existing techniques for learning goals and facts, such as reinforcement learning, see “[Using Machine Learning to Address AI Risk](https://intelligence.org/2017/02/28/using-machine-learning/#problem-1).”))

My view is that the critical work is mostly in designing an effective value learning process, and in ensuring that the sorta-argmax process is correctly hooked up to the resultant objective function ?:

The better your value learning framework is, the less explicit and precise you need to be in pinpointing your value function ?, and the more you can offload the problem of figuring out what you want to the AI system itself. Value learning, however, raises [a number of basic difficulties](https://intelligence.org/files/ValueLearningProblem.pdf) that don’t crop up in ordinary machine learning tasks.

Classic capabilities research is concentrated in the sorta-argmax and Expectation parts of the diagram, but sorta-argmax also contains what I currently view as the most neglected, tractable, and important safety problems. The easiest way to see why “hooking up the value learning process correctly to the system’s capabilities” is likely to be an important and difficult challenge in its own right is to consider the case of our own biological history.

Natural selection is the only “engineering” process we know of that has ever led to a generally intelligent artifact: the human brain. Since natural selection relies on a fairly unintelligent hill-climbing approach, one lesson we can take away from this is that it’s possible to reach general intelligence with a hill-climbing approach and enough brute force — though we can presumably do better with our human creativity and foresight.

Another key take-away is that natural selection was maximally strict about _only_ optimizing brains for a single very simple goal: genetic fitness. In spite of this, the internal objectives that humans represent as their goals are not genetic fitness. We have innumerable goals — love, justice, beauty, mercy, fun, esteem, good food, good health, … — that correlated with good survival and reproduction strategies in the ancestral savanna. However, we ended up valuing these correlates directly, rather than valuing propagation of our genes as an end in itself — as demonstrated every time we employ birth control.

This is a case where the external optimization pressure on an artifact resulted in a general intelligence with internal objectives that didn’t match the external selection pressure. And just as this caused humans’ actions to diverge from natural selection’s pseudo-goal once we gained new capabilities, we can expect AI systems’ actions to diverge from humans’ if we treat their inner workings as black boxes.

If we apply gradient descent to a black box, trying to get it to be very good at maximizing some objective, then with enough ingenuity and patience, we may be able to produce a powerful optimization process of some kind. ((The result will probably not be a particularly human-like design, since so many complex historical contingencies were involved in our evolution. The result will also be able to benefit from a number of large [software and hardware advantages](http://aiimpacts.org/sources-of-advantage-for-artificial-intelligence/).)) By default, we should expect an artifact like that to have a goal ? that strongly correlates with our objective ? in the training environment, but sharply diverges from ? [in some new environments or when a much wider option set becomes available](https://arbital.com/p/context_disaster/).

On my view, the most important part of the alignment problem is ensuring that the value learning framework and overall system design we implement allow us to crack open the hood and confirm when the internal targets the system is optimizing for match (or don’t match) the targets we’re externally selecting through the learning process. ((This concept is sometimes lumped into the “[transparency](https://intelligence.org/2013/08/25/transparency-in-safety-critical-systems/)” category, but standard algorithmic transparency research isn’t really addressing this particular problem. A better term for what I have in mind here is “[understanding](https://arbital.com/p/understandability_principle/).” What we want is to gain deeper and broader insights into the kind of cognitive work the system is doing and how this work relates to the system’s objectives or optimization targets, to provide a conceptual lens with which to make sense of the hands-on engineering work.))

We expect this to be technically difficult, and if we can’t get it right, then it doesn’t matter who’s standing closest to the AI system when it’s developed. Good intentions aren’t sneezed into computer programs by kind-hearted programmers, and coming up with plausible goals for advanced AI systems doesn’t help if we can’t align the system’s cognitive labor with a given goal.

**Four key propositions**

Taking another step back: I’ve given some examples of open problems in this area (suspend buttons, value learning, limited task-based AI, etc.), and I’ve outlined what I consider to be the major problem categories. But my initial characterization of why I consider this an important area — “AI could automate general-purpose scientific reasoning, and general-purpose scientific reasoning is a big deal” — was fairly vague. What are the core reasons to prioritize this work?

First, **[goals and capabilities are orthogonal](https://arbital.com/p/orthogonality/)**. That is, knowing an AI system’s objective function doesn’t tell you how good it is at optimizing that function, and knowing that something is a powerful optimizer doesn’t tell you what it’s optimizing.

I think most programmers intuitively understand this. Some people will insist that when a machine tasked with filling a cauldron gets smart enough, it will abandon cauldron-filling as a goal unworthy of its intelligence. From a computer science perspective, the obvious response is that you could go out of your way to build a system that exhibits that conditional behavior, but you could also build a system that doesn’t exhibit that conditional behavior. It can just keeps searching for actions that have a higher score on the “fill a cauldron” metric. You and I might get bored if someone told us to just keep searching for better actions, but it’s entirely possible to write a program that executes a search and never gets bored. ((We could _choose_ to program the system to tire, but we don’t have to. In principle, one could program a broom that only ever finds and executes actions that optimize the fullness of the cauldron. Improving the system’s ability to efficiently find high-scoring actions (in general, or relative to a particular scoring rule) doesn’t in itself change the scoring rule it’s using to evaluate actions.))

Second, **[sufficiently optimized objectives tend to converge on adversarial instrumental strategies](https://intelligence.org/2015/11/26/new-paper-formalizing-convergent-instrumental-goals/)**. Most objectives a smarter-than-human AI system could possess would be furthered by subgoals like “acquire resources” and “remain operational” (along with “learn more about the environment,” etc.).

This was the problem suspend buttons ran into: even if you don’t explicitly include “remain operational” in your goal specification, whatever goal you did load into the system is likely to be better achieved if the system remains online. Software systems’ capabilities and (terminal) goals are orthogonal, but they’ll often exhibit similar behaviors if a certain class of actions is useful for a wide variety of possible goals.

To use an example due to Stuart Russell: If you build a robot and program it to go to the supermarket to fetch some milk, and the robot’s model says that one of the paths is much safer than the other, then the robot, in optimizing for the probability that it returns with milk, will automatically take the safer path. It’s not that the system fears death, but that it can’t fetch the milk if it’s dead.

Third, **[general-purpose AI systems are likely to show large and rapid capability gains](http://aiimpacts.org/sources-of-advantage-for-artificial-intelligence/)**. The human brain isn’t anywhere near the upper limits for hardware performance (or, one assumes, software performance), and there are a number of other reasons to expect large capability advantages and rapid capability gain from advanced AI systems.

As a simple example, Google can buy a promising AI startup and throw huge numbers of GPUs at them, resulting in a quick jump from “these problems look maybe relevant a decade from now” to “we need to solve all of these problems in the next year” à la DeepMind’s progress in Go. Or performance may suddenly improve when a system is first given large-scale Internet access, when there’s a conceptual breakthrough in algorithm design, or when the system itself is able to propose improvements to its hardware and software. ((We can imagine the latter case resulting in a [feedback loop](https://intelligence.org/files/IEM.pdf) as the system’s design improvements allow it to come up with further design improvements, until all the low-hanging fruit is exhausted.

Another important consideration is that two of the main bottlenecks to humans doing faster scientific research are training time and communication bandwidth. If we could train a new mind to be a cutting-edge scientist in ten minutes, and if scientists could near-instantly trade their experience, knowledge, concepts, ideas, and intuitions to their collaborators, then scientific progress might be able to proceed much more rapidly. Those sorts of bottlenecks are exactly the sort of bottleneck that might give automated innovators an enormous edge over human innovators even without large advantages in hardware or algorithms.))

Fourth, **[aligning advanced AI systems with our interests looks difficult](https://arbital.com/p/aligning_adds_time/)**. I’ll say more about why I think this presently.

Roughly speaking, the first proposition says that AI systems won’t naturally end up sharing our objectives. The second says that by default, systems with substantially different objectives are likely to end up adversarially competing for control of limited resources. The third suggests that adversarial general-purpose AI systems are likely to have a strong advantage over humans. And the fourth says that this problem is hard to solve — for example, that it’s hard to transmit our values to AI systems (addressing orthogonality) or [avert adversarial incentives](https://arbital.com/p/avert_instrumental_pressure/) (addressing convergent instrumental strategies).

These four propositions don’t mean that we’re screwed, but they mean that this problem is critically important. General-purpose AI has the potential to bring enormous benefits if we solve this problem, but we do need to make finding solutions a priority for the field.

* * *

### Fundamental difficulties

Why do I think that AI alignment looks fairly difficult? The main reason is just that this has been my experience from actually working on these problems. I encourage you to [look at some of the problems yourself](https://intelligence.org/2017/02/28/using-machine-learning/) and try to solve them in toy settings; we could use more eyes here. I’ll also make note of a few structural reasons to expect these problems to be hard:

First, aligning advanced AI systems with our interests looks difficult for the same reason rocket engineering is more difficult than airplane engineering.

Before looking at the details, it’s natural to think “it’s all just AI” and assume that the kinds of safety work relevant to current systems are the same as the kinds you need when systems surpass human performance. On that view, it’s not obvious that we should work on these issues now, given that they might all be worked out in the course of narrow AI research (e.g., making sure that self-driving cars don’t crash).

Similarly, at a glance someone might say, “Why would rocket engineering be fundamentally harder than airplane engineering? It’s all just material science and aerodynamics in the end, isn’t it?” In spite of this, empirically, the proportion of rockets that explode is far higher than the proportion of airplanes that crash. The reason for this is that a rocket is put under much greater stress and pressure than an airplane, and small failures are much more likely to be highly destructive. ((Specifically, rockets experience a wider range of temperatures and pressures, traverse those ranges more rapidly, and are also packed more fully with explosives.))

Analogously, even though general AI and narrow AI are “just AI” in some sense, we can expect that the more general AI systems are likely to experience a wider range of stressors, and possess more dangerous failure modes.

For example, once an AI system begins modeling the fact that (i) your actions affect its ability to achieve its objectives, (ii) your actions depend on your model of the world, and (iii) your model of the world is affected by its actions, the degree to which minor inaccuracies can lead to harmful behavior increases, and the potential harmfulness of its behavior (which can now include, e.g., deception) also increases. In the case of AI, as with rockets, greater capability makes it easier for small defects to cause big problems.

Second, alignment looks difficult for the same reason it’s harder to build a good space probe than to write a good app.

You can find a number of interesting engineering practices at NASA. They do things like take three independent teams, give each of them the same engineering spec, and tell them to design the same software system; and then they choose between implementations by majority vote. The system that they actually deploy consults all three systems when making a choice, and if the three systems disagree, the choice is made by majority vote. The idea is that any one implementation will have bugs, but it’s unlikely all three implementations will have a bug in the same place.

This is significantly more caution than goes into the deployment of, say, the new WhatsApp. One big reason for the difference is that it’s hard to roll back a space probe. You can send version updates to a space probe and correct software bugs, but only if the probe’s antenna and receiver work, and if all the code required to apply the patch is working. If your system for applying patches is itself failing, then there’s nothing to be done.

In that respect, smarter-than-human AI is more like a space probe than like an ordinary software project. If you’re trying to build something smarter than yourself, there are parts of the system that have to work perfectly on the first real deployment. We can do all the test runs we want, but once the system is out there, we can only make online improvements if the code that makes the system _allow_ those improvements is working correctly.

If nothing yet has struck fear into your heart, I suggest meditating on the fact that the future of our civilization may well depend on our ability to write code that _works correctly_ on the first deploy.

Lastly, alignment looks difficult for the same reason computer security is difficult: systems need to be robust to intelligent searches for loopholes.

Suppose you have a dozen different vulnerabilities in your code, none of which is itself fatal or even really problematic in ordinary settings. Security is difficult because you need to account for intelligent attackers who might find all twelve vulnerabilities and chain them together in a novel way to break into (or just break) your system. Failure modes that would never arise by accident can be sought out and exploited; weird and extreme contexts can be instantiated by an attacker to cause your code to follow some crazy code path that you never considered.

A similar sort of problem arises with AI. The problem I’m highlighting here is not that AI systems might act adversarially: AI alignment as a research program is all about finding ways to [prevent adversarial behavior](https://arbital.com/p/nonadversarial/) before it can crop up. We don’t want to be in the business of trying to outsmart arbitrarily intelligent adversaries. That’s a losing game.

The parallel to cryptography is that in AI alignment we deal with systems that perform intelligent searches through a very large search space, and which can produce weird contexts that force the code down unexpected paths. This is because the weird [edge cases](https://arbital.com/p/edge_instantiation/) are places of extremes, and places of extremes are often the place where a given objective function is optimized. ((Consider Bird and Layzell’s [example](https://people.duke.edu/~ng46/topics/evolved-radio.pdf) of a very simple genetic algorithm that was tasked with evolving an oscillating circuit. Bird and Layzell were astonished to find that the algorithm made no use of the capacitor on the chip; instead, it had repurposed the circuit tracks on the motherboard as a radio to replay the oscillating signal from the test device back to the test device.

This was not a very smart program. This is just using hill climbing on a very small solution space. In spite of this, the solution turned out to be outside the space of solutions the programmers were themselves visualizing. In a computer simulation, this algorithm might have behaved as intended, but the actual solution space in the real world was wider than that, allowing hardware-level interventions.

In the case of an intelligent system that’s significantly smarter than humans on whatever axes you’re measuring, you should by default expect the system to push toward weird and creative solutions like these, and for the chosen solution to be difficult to anticipate.)) Like computer security professionals, AI alignment researchers need to be very good at thinking about edge cases.

It’s much easier to make code that works well on the path that you were visualizing than to make code that works on all the paths that you weren’t visualizing. AI alignment needs to work [on all the paths you weren’t visualizing](https://arbital.com/p/unforeseen_maximum/).

Summing up, we should approach a problem like this with the same level of rigor and caution we’d use for a security-critical rocket-launched space probe, and do the legwork as early as possible. At this early stage, a key part of the work is just to formalize basic concepts and ideas so that others can critique them and build on them. It’s one thing to have a philosophical debate about what kinds of suspend buttons people intuit ought to work, and another thing to translate your intuition into an equation so that others can fully evaluate your reasoning.

This is a crucial project, and I encourage all of you who are interested in these problems to get involved and try your hand at them. There are [ample resources online](http://humancompatible.ai/bibliography) for learning more about the open technical problems. Some good places to start include MIRI’s [research agendas](https://intelligence.org/research/) and a great paper from researchers at Google Brain, OpenAI, and Stanford called “[Concrete Problems in AI Safety](https://arxiv.org/abs/1606.06565).”

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
