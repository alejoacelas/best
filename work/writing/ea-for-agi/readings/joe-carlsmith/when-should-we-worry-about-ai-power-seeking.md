---
title: "When should we worry about AI power-seeking? - Joe Carlsmith"
url: https://joecarlsmith.com/2025/02/19/when-should-we-worry-about-ai-power-seeking
fetched: 2026-07-06
via: html2text
topic: "joe-carlsmith"
note: "Conditions under which AI power-seeking becomes dangerous; grounds the loss-of-control / human-coup worries."
---

How do we solve the alignment problem? / Part 3

When should we worry about AI power-seeking?

[](https://joecarlsmithaudio.buzzsprout.com/2034731/episodes/16651469-when-should-we-worry-about-ai-power-seeking)

Contents hide

  * 1\. Introduction __
  * 2\. Prerequisites for problematic power-seeking __
    * 2.1 Agency prerequisites __
    * 2.2 Motivation prerequisites __
    * 2.3 Incentive prerequisites __
  * 3\. Motivation control and option control __
  * 4\. Should we expect these prerequisites to be satisfied? __
    * 4.1 The agency and motivation prerequisites seem like the default trajectory __
    * 4.2 What about the incentive prerequisites? __
    * 4.3 Will the first superintelligence have a decisive strategic advantage? __
    * 4.4 Global vulnerability conditions __
  * 5\. Conclusion __
  * Appendix 1: Extending the incentives framework to cover capability elicitation __
  * Appendix 2: A typology of vulnerability conditions __
    * A.2.1 Vulnerability in general vs. vulnerability to motivations in particular __
    * A.2.2 Local vs. global vulnerability __
    * A.2.3 Easy vs. non-easy power-seeking __
    * A.2.4 Unilateral vs. multilateral power-seeking __
    * A.2.5 Coordinated vs. uncoordinated power-seeking __
    * A.2.6 Worst case versions __



Last updated: 07.03.2025

Published: 02.19.2025

Series

How do we solve the alignment problem? / Part 3

# When should we worry about AI power-seeking?

Podcast version [here](https://joecarlsmithaudio.buzzsprout.com/2034731/episodes/16651469-when-should-we-worry-about-ai-power-seeking) (read by the author), or search for “Joe Carlsmith Audio” on your podcast app.

_(This is the second essay in a series that I’m calling “How do we solve the alignment problem?”._ _I’m hoping that the individual essays can be read fairly well on their own, but see_[ _this introduction_](https://joecarlsmith.substack.com/p/how-do-we-solve-the-alignment-problem) _for a summary of the essays that have been released thus far, and for a bit more about the series as a whole.)_

## 1\. Introduction

In my [last essay](https://joecarlsmith.substack.com/p/what-is-it-to-solve-the-alignment), I defined what it would be to solve the alignment problem: namely, building full-blown superintelligent AI agents, and safely eliciting their main beneficial capabilities, while avoiding a “loss of control” scenario. In this essay, I say more about when this problem needs solving.

In particular: I specify three sets of conditions that need to be in place for an AI to seek power in the manner at stake in paradigm loss of control scenarios. These are roughly:

  1. _Agency prerequisites_ : the AI’s behavior needs to be coherently driven by a process of making plans and evaluating them according to criteria, using models of the world that allow for recognition and consideration of the instrumental benefits of power-seeking.
  2. _Motivation prerequisites_ : some part of the AI’s motivational system needs to be focused on the consequences of the AI’s behavior over sufficiently long time-scales that it would have time to get and make adequate use of the power at stake.
  3. _Incentive prerequisites_ : the AI’s options and motivations need to combine to make power-seeking behavior rational overall from the AI’s perspective.



I move through the agency and motivation prerequisites quite quickly. But I take more time on the incentive prerequisites, which I think often go under-analyzed.

In particular: people often appeal to “[instrumental convergence](https://en.wikipedia.org/wiki/Instrumental_convergence)” – i.e., the idea that a very wide range of goals make power-seeking useful – to explain why going rogue can easily be rational for an AI. But I think this idea is too often left amorphous – and that I left it too amorphous in some of my previous work. In particular: we can’t just talk about an AI having  _some_ incentive to seek power, based on  _some_ part of its motivational system. Rather, we need to look at the landscape of its options and motivations overall – i.e., at its shorter-term and non-consequentialist motivations, its likelihood of success or failure at the relevant type of power-seeking, the sort of success/failure on the table, what it would have to do along the way, and its evaluation of the best  _alternative_ to going rogue.

The essay offers a framework that tries to aid in this analysis. Here’s a preview in a diagram (I explain the relevant terms and distinctions in more detail below):

This sort of framework, I think, gives us a richer toolkit for thinking about how to prevent problematic power-seeking – one that I draw on in the rest of the series. In particular: it highlights the ongoing potential role for  _both_ of the following:

**Motivation control** : Shaping an AI agent’s  _motivations_ in desirable ways.

**Option control** : Shaping an AI agent’s  _options_ in desirable ways. 

The alignment discourse, in my opinion, often focuses too heavily on the extreme cases of motivation control (e.g., “complete alignment”) and of option control (e.g., robustness to  _worst case_ motivations), neglecting the in-between. The extreme cases can give extra comfort, and they simplify the task of analysis; but the in-between is often what “alignment” has looked like in the real world, at least thus far.

I close the essay with a discussion of whether or not we should expect the prerequisites above to be satisfied by default. I think we should indeed expect this for the agency and motivation prerequisites – or at least, for something quite nearby. For the incentive prerequisites, though, I think it’s less clear – and I return to the question in some detail later in the series.

In the meantime, though: I suggest that we can see the classic argument for expecting the incentive prerequisites to be satisfied as emerging from a backdrop focus on AI systems that have such a “decisive strategic advantage” over the rest of civilization that they can take over the world  _very_  _easily_ , via a  _wide_  _variety of methods_ – a context in which the AI doesn’t have to worry about the downsides of failure, and where it can more easily “route around” any inhibitions it has about particular paths to takeover. And I do think it’s worryingly plausible that a superintelligent AI agent might end up with this kind of power, especially if take-off is fast. But I think we should try to avoid this, and that we may well be able to do so.

However: a single AI system with a decisive strategic advantage is an extreme version of a broader set of scenarios, which I call “global vulnerability conditions.” These are scenarios where humanity’s continued empowerment rests on some combination of (a) AIs  _not choosing_ to seek power, and (b) the success of active efforts to restrict their options for doing so. And if AI development continues unabated, this broader sort of global vulnerability looks much harder to avoid.

## 2\. Prerequisites for problematic power-seeking

Let’s look at the prerequisites above in a bit more detail.

Rogue behavior, as I defined it in the last essay, is about seeking to gain and maintain  _power_ in problematic and unintended ways.1 And in my opinion, the main reason to expect problems with AI motivations to result in this behavior is because power of the relevant kind is  _instrumentally useful_ to a wide variety of goals (this is the basic thrust of the idea of “[instrumental convergence](https://en.wikipedia.org/wiki/Instrumental_convergence),” mentioned above).2 That is: we imagine the AI is seeking power as part of a broader plan for achieving some other, real-world objective, later. And at least in the central case, this image suggests certain conditions on the sort of agency the AI is bringing to bear,

the objectives it’s pursuing, and the overall incentives it’s responding to. I’ll look at each in turn.

### 2.1 Agency prerequisites

I’ll start with conditions on the AI’s  _agency_. The most paradigmatic type of rogue behavior, and the kind I’ll focus on, involves AI agents that satisfy the following properties:

  1. **Agentic planning** : the AI needs to be capable of searching over plans for achieving outcomes, choosing between them on the basis of criteria (call these “motivations”), and executing them.
  2. **Planning-driven behavior** : the AI’s behavior, in this specific case, needs to be  _driven by_ a process of agentic planning. 
     * (This isn’t implied by agentic planning as a pure capability: LLMs, for example, might be capable of certain forms of planning, without their output being  _driven_ by a planning process in this sense – more in footnote.3)
  3. **Adequate execution coherence** : the AI’s future behavior needs to be sufficiently coherent that the plan it chooses now actually gets executed, rather than getting abandoned/undermined by the model pursuing alternative priorities.4
  4. **Consideration of rogue options** : the AI’s process of searching over plans needs to include consideration of a plan that involves going rogue (call this a “rogue option”). 
     * This requires sufficiently sophisticated models of the world (cf “[strategic awareness](https://arxiv.org/pdf/2206.13353#page=10)”; “[situational awareness](https://www.lesswrong.com/posts/CopEjjCdNzsKczbmC/situational-awareness-section-2-1-of-scheming-ais)”) that the AI can recognize the paths to problematic forms of power, and the potential instrumental benefits of that power. 
     * Even granted this basic awareness, though, the model’s search over plans can still fail to include rogue options – both plans that the AI wouldn’t have liked, and plans the AI  _would’ve_ liked, if it had considered them (more in footnote).5



### 2.2 Motivation prerequisites

Beyond these agency prerequisites, an AI’s motivational system also needs to have certain structural features in order for paradigmatic types of rogue behavior to occur. In particular, it needs:

  1. **Consequentialism** :  _some_ component of the AI’s motivational system needs to be focused on causing certain kinds of outcomes in the world. 
     * That is, to the extent the “instrumental convergence” story predicts power-seeking on the grounds that power of the relevant kind will be instrumentally useful for promoting certain outcomes, the AI needs to care about promoting those outcomes at least a little.6
  2. **Adequate time horizon** : that is, the AI’s concern about the consequences of its actions needs to have an adequately long time horizon that there is time both for the problematic power-seeking to succeed, and for the resulting power to be directed towards promoting the consequences in question.7
     * For example: if you have to finish your coding task in the next ten minutes, then even if it would be helpful in principle to hack into a bunch of extra compute, you might not have time. 
     * Of course, the specific time horizon required here depends on how fast an AI can get and make use of the acquired power. Generally, though, I expect many of the most problematic forms of rogue behavior (i.e., aiming at the acquisition of large amounts of resources and power) to require a decent amount of patience in this respect.



### 2.3 Incentive prerequisites

Beyond the agency and motivation prerequisites above, though, we also need to consider a further condition required for paradigm types of rogue behavior to occur – namely, that this behavior needs to be broadly  _rational_ from the AI’s perspective.8 That is: when the AI considers its different options, the incentives at stake (defined relative to the AI’s motivations) need to favor rogue behavior overall. I’ll call the relevant conditions here “incentive prerequisites.”

What does it take for rogue behavior to be rational? Here’s a simple framework. It doesn’t cover all potentially-relevant dynamics, but I find it helpful nonetheless.

We can simplify an AI’s choice to go rogue into a choice between two options: its best rogue option, and its best non-rogue option.9 And we can break up its best rogue option into the following components:

  * First, we consider two potential outcomes of pursuing this option, namely “ _success_ ” and “ _failure_ ” at getting/maintaining the relevant form of power.10
  * We can imagine that the AI has some assessment of how likely success is relative to failure.
  * And we can further split the success cases into two components, which I’ll call the “pay-out” and the “path.”
    * The “pay-out” is the power that the AI gets, in expectation, conditional on success; and the circumstances in which it needs to be using that power.11 That is, roughly, it’s the “end-state” of successful rogue behavior.
    * The “path” is what the AI needs to do, in expectation, to reach and secure the pay-out.



This gives us the following simple picture of the options the AI faces:

With this picture in mind, we can then think about the AI’s  _motivations_ in terms of how it evaluates these different components of its options. In particular, we can distinguish the following four key factors:

  * _Non-rogue satisfaction_ : how good the non-rogue option is from the AI’s perspective.12
  *  _Ambition_ : how much the AI values the pay-out.
  * _Inhibition_ : how much the AI disprefers what it needs to do to reach/secure the pay-out.
  * _Failure aversion_ : how much the AI disprefers worlds where it attempts its favorite rogue option, but fails to get/maintain the sort of power it’s seeking.



Thus, adding these assessments into the diagram:

Thus, as an example of this framework in action, consider an employee deciding whether to attempt to steal from her company by trying to hack into the payment system (we’ll consider this a form of “rogue” behavior).

  * We can say that her best non-rogue option is to continue to do her job as normal. And her “satisfaction” is roughly: how happy she is with this sort of trajectory (e.g., how much she likes her job, how satisfied she is with her salary, etc).
  * If she tries to steal from her company, let’s say that she thinks it’s roughly 50-50 whether she succeeds and gets away with it (success), or whether she either fails to hack into the payment system or gets caught later by the company or police (failure).
  * Let’s say that if she succeeds at stealing the money, she’ll get about $10M, but that she’ll have to go “on the run” after that – i.e., abandoning her normal life, moving to another country, and assuming a different identity so as to evade law enforcement. This is the “pay-out.” And her “ambition” is roughly: how much she wants $10M, for use in this sort of circumstance.
  * And let’s say that stealing the money will also involve violating a number of common-sensical moral rules – i.e., it will require lying and stealing. This is part of the “path.” And her “inhibition” partly consists in: how much she doesn’t want to engage in behavior like this.
  * And her “failure aversion” is roughly: how much she wants to avoid the “failure” worlds. Some of these (e.g., failing to hack into the payment system, but not getting caught) might be relatively benign from her perspective. But some (e.g., getting caught) might be more worrying.



This framework is far from perfect (see footnote for some caveats and subtleties).13 But I think it helps capture some of the core dynamics at stake in whether or not rogue behavior is rational for a given AI – and I think it helps highlight the variety of tools available for preventing such behavior. More on this below.

Also: this framework extends quite naturally to cover eliciting desired task-performance from an AI agent, on top of just preventing rogue behavior. Basically: you just include an additional constraint – namely, that the best non-rogue option  _that involves doing the task in the desired way_ is also the best non-rogue option,  _period_. I discuss this extension in more detail in an appendix, but here’s a quick preview in a diagram:

## 3\. Motivation control and option control

One reason it’s useful to be clear about these prerequisites is that they each offer a possible point of intervention for lowering the risk of rogue behavior in AI systems (e.g., you can intervene on an AI’s planning capacity, coherence, strategic/situational awareness, consequentialism, myopia, etc). And even to the extent that we’re focusing solely on agents that satisfy the agency and motivation prerequisites, I like the way clarity about the dynamics at stake in the _incentive prerequisites_ makes salient a range of different tools for ensuring safety.

In particular, per my discussion in the intro, let’s distinguish between:

**Motivation control** : Shaping an AI agent’s  _motivations_ in desirable ways.

**Option control** : Shaping an AI agent’s  _options_ in desirable ways.14

In my opinion, the AI alignment discourse has thus far focused too much either on extreme cases of motivation control (e.g., AI systems we trust on ~arbitrary options and with ~arbitrary amounts of power15), or on extreme cases of option control (e.g., our safety is robust to the AI systems having arbitrarily bad motivations16). But the framework above highlights the many possible approaches in between – i.e., ensuring that the properties of the specific set of options available to the AI (e.g., the nature of the best non-rogue option, the pay-out for success at rogue behavior, the path, the failure modes, the probability of success) and the specific motivations the AI is using to evaluate these options (e.g., its satisfaction, ambition, inhibition, failure-aversion, etc) combine to make non-rogue behavior the more rational choice (more detailed examples in footnote.17

Indeed, much of the “alignment” we see in the everyday world arises from a combination of option control and motivation control, rather than solely from one vs. the other (and especially not: solely from motivation control). That is, the “alignment” we ask of our fellow humans is not: that they be trustable with arbitrary options, levels of power, or opportunities to rapidly and recursively self-improve. And thank goodness – who among us is worthy of such trust?18 But neither do we achieve “alignment” solely via making it impossible for humans to successfully engage in bad and/or problematically power-seeking forms of behavior. Rather, for example: we try to prevent crime both by making it difficult and unlikely to succeed – and by teaching our children that it’s wrong.19 And both aspects play a role in determining the crime rates.

Of course, the fact that superintelligent AI agents might create radical new power imbalances means that our usual tools for ensuring “alignment” may not apply in the same way (a bit more on this below). But I think we should be very wary of assuming, on these grounds, that these more usual tools should go out the window entirely, and that we should focus entirely on extreme cases of option control or motivation control. Rather, I expect, the  _combination_ of the two will continue to be relevant. And regardless: throughout the series, I’ll also be quite interested in the safety/alignment of  _not-yet-fully_ -superintelligent AI systems that might provide useful labor on the path to solving the alignment problem. And I think it’s especially plausible that a mix of both option and motivation control will remain relevant to such systems.

Here’s a rough diagram depicting a spectrum of “option control” and “motivation control,” according, roughly, to how much a given approach to safety leans on one vs. the other.

## 4\. Should we expect these prerequisites to be satisfied?

With this picture of the agency, motivation, and incentive prerequisites in view, let’s turn to a brief discussion of whether we should expect them to be satisfied.

### 4.1 The agency and motivation prerequisites seem like the default trajectory

Let’s start with the agency and motivation prerequisites.

In my opinion, existing AI agents already satisfy many of these prerequisites.20 But even if you reject this: I think agents that satisfy these prerequisites – or at least, conditions quite nearby – are the default path forward. I’ve said more about why [here](https://arxiv.org/pdf/2206.13353#page=11), but in brief:

  * _Agentic planning capability_ ,  _planning-driven behavior_ ,  _adequate execution coherence,_ and  _consequentialism_ are all part of what AI designers are already aiming for in AI systems that can autonomously perform tasks that require complicated planning and execution in pursuit of real-world objectives – e.g., “design and execute a new science experiment,” “do this week-long coding project,” “run this company,” and so on. Or put another way: good, smarter-than-human personal assistants, employees, etc would satisfy these conditions, and a core thing AI companies are trying to do with AIs is to make them good, smarter-than-human personal assistants, employees, etc.
  * _Consideration of rogue behavior_ is somewhat more complicated, because in principle an aligned AI might not even  _consider_ plans that involve going rogue. But the broad capability involved in understanding the paths to and benefits of problematic power-seeking, and in searching over a wide range of creative plans for achieving objectives, seems like it’s the default for effective, smarter-than-human agentic planners.
  * _Adequate time horizon_ is a harder condition to evaluate, because the exact time horizon required depends on the type of power at stake, and the speed with which the AI can get/use it. And I don’t think there’s a strong argument for the commercial  _usefulness_ of AIs that optimize over genuinely unbounded time horizons.21 Indeed, I think many of the tasks we want AIs to perform take place over fairly short time horizons that seem unlikely to incentivize large-scale power/resource-acquisition, even in highly competent agents. Still, I do think that  _some_ tasks we want AIs to perform likely require  _at least somewhat long_ time horizons – i.e., “help this company grow over the next five years,” “optimize my retirement portfolio,” and so on.



Beyond the  _usefulness_ of AIs that satisfy these conditions, though, AIs can end up satisfying these conditions even if their designers aren’t intending or expecting that they’ll do so. For example, various “agency prerequisites” could in principle arise even in the context of models that are being trained for some not-obviously-agentic task, like next-token prediction. And an AI system’s motivational system might end up with some component that has an unbounded time horizon (e.g., an interpretation of “harmlessness” that includes minimizing harm even in the distant future), even if the designers didn’t intend/expect that.22

When I talk in the series about AI agents, I have in mind, by default, agents that satisfy the agency and motivation prerequisites – that is,  _the dangerous type_ of AI agents.23 And when I talk about solving the alignment problem, I have in mind: figuring out how to build  _superintelligent_ agents that are dangerous in this way, and to safely elicit their main beneficial capabilities, while avoiding loss of control scenarios.

I want to emphasize, though, that I think that it is likely possible to get a large amount of useful cognitive labor out of AI systems that  _aren’t_ dangerous in this way – for example, AIs that don’t engage in the relevant kinds of coherent, planning-driven behavior; which lack relevant kinds of strategic/situational awareness; which aren’t optimizing for real-world consequences; which are only focused on shorter time horizons; and so on. And [decomposing](https://www.lesswrong.com/posts/jpGHShgevmmTqXHy5/decomposing-agency-capabilities-without-desires) aspects of useful agency into more modular pieces might help make AI agents safer as well24 (though: to the extent that an AI agent is built out of more modular AI parts, my discussion will still apply to the agent as a whole).25

### 4.2 What about the incentive prerequisites?

What about the incentive prerequisites? Should we expect  _those_ to be satisfied by default as well?

Here, I think the argument is much less clear, even in the context of superintelligent AI agents. I’ll discuss the relevant dynamics in more detail in later essays. Here I’ll note, though, one way I’ve found it useful to understand the traditional argument for expecting the incentive prerequisites to be satisfied.

Much of the classic literature focuses on an extreme condition of global vulnerability to AI motivations – namely, a superintelligent AI system with a “decisive strategic advantage” (DSA) over the rest of civilization (i.e., in the language of Bostrom (2014, p. 96), “a level of technological and other advantages sufficient to enable it to achieve complete world domination”). And if we grant that we’re dealing with a superintelligent AI agent that can take over the world  _extremely easily_ , via an  _extremely wide variety of paths_ (this is a bit stronger than Bostrom’s definition of a DSA, but it’s in a similar ballpark),26 then this simplifies the “incentives” analysis I offered above quite a bit.27 That is:

  * We don’t need to consider how averse the AI is to failed attempts at world takeover, because its attempt, by hypothesis, is extremely likely to succeed.
  * The AI’s  _inhibitions_ about the  _path_ to successful world takeover are much less relevant, because it has so many different paths available that it will likely be able to find  _some_ that are suitably compatible with its inhibitions (see the discussion of the “nearest unblocked neighbor problem” [here](https://arbital.com/p/nearest_unblocked/)).28
  * So all that remains, effectively, is for the AI to be sufficiently “ambitious” that the “pay-out” of “free world takeover” makes pursuing such a takeover better than the best non-takeover option. And  _here_ , at least, only very weak forms of “instrumental convergence” are needed – that is, the AI just needs to see  _some_ instrumental value in having taken over the world, relative to the best non-takeover option, for the best takeover option to win out.29



By contrast, if we don’t assume that the AI in question can take over the world very easily via a very wide variety of paths, then arguing from “taking over the world would have  _some_ instrumental value” to “the AI will actually pursue world takeover” becomes more difficult, and you have to starting digging in, in more detail, to the details of the options, motivations, and incentives at stake – a task that the classic AI risk discourse (plausibly in virtue of its focus on unilateral DSAs) tends, in my opinion, to neglect.30

And note, too, that we can also make modified versions of this classic argument for various forms of extreme vulnerability to power-seeking on the part of  _many different AIs_ , rather than just one:31

  * Thus, consider a condition in which some  _set_ of AIs can easily  _coordinate_ to take over the world via a wide variety of different methods. Here, too: the fact that the coordination is so likely to succeed, and so able to route around possibly relevant inhibitions, allows for a smoother argument about the incentives to seek the power at stake.
  * And a similar point applies to the power-seeking at stake in a scenario in which some set of AIs can all easily and independently go rogue, via a wide variety of different methods, in ways that are highly likely to be successful, and where their doing so would result in the full disempowerment of humanity. That is: again, the ease and flexibility of the power-seeking at stake helps explain why it would occur.32



### 4.3 Will the first superintelligence have a decisive strategic advantage?

Is the classic AI risk discourse  _right_ to anchor on a scenario in which a superintelligent AI agent has a decisive strategic advantage?

I won’t analyze this in much detail. Broadly, though, I do think that it’s disturbingly plausible that in scenarios that involve extremely rapid escalation of frontier AI capabilities (“fast take-off”), the first superintelligent AI agent would indeed have such an advantage.

However: I don’t think this is at all obvious. In particular: even in relatively fast take-off scenarios, we’re not imagining that the first superintelligent AI agent is going to be dropped directly into today’s world.33 Rather, many other somewhat-weaker AIs will exist as well, and their labor will already be re-shaping the world in important ways – and including, the ease with which the first superintelligent AI agent can take over on its own. And this includes, importantly, somewhat-weaker-AIs at the project housing the first superintelligence – e.g., previous generations of AIs, whose labor (perhaps in large quantities) will likely have been directed at various active option control efforts aimed partly at this superintelligence (e.g., improving cybersecurity, red-teaming monitoring set-ups, etc), and which may be playing an ongoing role in oversight, stress-testing, and so on (more on this in a later essay).34

What’s more, unless AI development has already become quite centralized/unipolar at that point, the power of the frontier AIs at  _other projects_ will also be escalating rapidly – so this AI, itself, will face competitive pressure, even if it’s currently ahead.35 And in general, both for other AIs within the project, and other AIs outside of it, it’s not totally clear exactly what sort of strategic advantage actual superintelligence confers relative to large numbers of fast-running, easily-copy-able AIs with only somewhat-better-than human intelligence.

### 4.4 Global vulnerability conditions

That said: a single AI agent with a decisive strategic advantage is an extreme case of a broader class of scenarios, which I’ll call “global vulnerability conditions.” These are conditions in which humanity’s continued empowerment rests on some combination of (a) the success of our active efforts to restrict the options available to our AIs, and (b) these AIs not choosing to seek power in problematic ways, despite having options for doing so with a substantive chance of success.

In an appendix below, I discuss a typology for understanding “global vulnerability conditions” of this broad kind in more detail. In particular: I think it’s worth distinguishing between,

  * vulnerability to AI motivations  _if your efforts at option control fail_ vs. vulnerability to AI motivations,  _period;_
  * vulnerability to  _limited_ loss of power/control vs. vulnerability to _full-scale_ loss of power/control;
  * vulnerability to power-seeking that is  _at least non-trivially_ likely to succeed vs. power-seeking that is  _extremely_  _likely_ to succeed;
  * vulnerability to power-seeking by a  _single_ AI (unilateral) vs.  _multiple_ AIs (multilateral);
  * vulnerability to  _coordinated_ vs.  _uncoordinated_ power-seeking by multiple AIs.



You don’t need to track all these distinctions here (hence: appendix). I want to note, though, that while I think it might well be possible to avoid single superintelligent AI agents with decisive strategic advantages, my optimism in this respect rests crucially on the presence and labor of  _other powerful (albeit, not necessarily fully superintelligent) AIs_. And this makes me think that avoiding other,  _weaker_ conditions of global vulnerability is going to be much harder.

In particular:

  * To the extent that your superintelligent AI agent would have a decisive strategic advantage  _if your efforts at active option control were to fail_ (e.g., if it were to become able to self-exfiltrate; if it were to be able to hack into servers you’re trying to prevent it from accessing; if it were to gain options for improving its capabilities; etc), then this is already a scary type of vulnerability.
  * What’s more: as I’ll discuss in a later essay, it seems likely to me that successful efforts to heavily restrict the dangerous rogue options of a superintelligent AI agent will themselves require lots of roughly-superintelligence-grade cognitive labor. And if you need to source this labor either from another potentially dangerous superintelligent AI agent, or from other potentially dangerous but not-quite-superintelligent AI agents, this looks like it could easily leave you vulnerable to  _coordinated_ power-seeking on part of the different AI agents involved.
  * And more generally, even outside of active effort to restrict an AI’s options, if you’re generally relying on other very powerful, potentially dangerous AI agents to serve as a “check” on the power of some particular superintelligent AI agent, this looks like a scenario likely to be vulnerable to both coordinated and uncoordinated power-seeking. E.g., if these different AIs decided to team-up in an effort to disempower humans, or if they each decided to “go their own way” and to stop working on behalf of the humans they’re supposed to be taking instructions from, then the situation looks quite dire.36



Of course: even in a world with superintelligent AI agents, there are relevant sources of power and cognitive labor other than the sorts of AI agents that might go rogue. For example:

  * Non-agentic AI systems, and/or AI systems with only myopic and/or non-consequentialist motivations, can plausibly play a role in helping to constrain/oppose powerful AI agents (e.g., maybe your superintelligent cybersecurity or oversight comes from a non-agent).
    * Indeed, re: myopia in particular, many of the tasks involved in active effort to restrict the options available to AIs (e.g., looking for backdoors in code, evaluating whether a given proposed action is suspicious/dangerous, etc) seem like they don’t require especially long-horizon optimization.
  * Non-AI tools/technologies – including ones where humans can verify their properties in ways that ensure they function as intended – may be able to play some role as well.
  * Humans (or perhaps: humans with their cognitive labor enhanced in various ways37) – with their existing power base, infrastructure, etc – can do some work, too.
  * Also: some contexts might be “defense dominant” in ways that allow for lower-tier cognitive labor to effectively restrict the options available to higher-tier cognitive labor.



Still, overall, it looks likely to me that the default path to superintelligent AI agents leads us to a global vulnerability condition of some kind. That is: it looks to me like we’re on track for a scenario where, absent lots of success at actively restricting their rogue options, some combination of unilateral, coordinated, and uncoordinated power-seeking on the part of the powerful AI agents we’ve built would lead to the permanent disempowerment of humanity.38

Of course, it’s a further question how hard it will be, in practice, to avoid this sort of disempowerment. I’ll discuss this question in some detail later in the series. In the meantime, though: we should notice the intensity of the idea that we’re going to enter a global vulnerability condition  _at all_.39

## 5\. Conclusion

In this essay, I’ve been interested in when we should worry about rogue AI behavior. In particular:

  * I’ve described three sets of prerequisites (the  _agency_ ,  _motivation_ , and  _incentive_ prerequisites) for paradigm forms of this behavior;
  * I’ve offered a framework for analyzing the incentive prerequisites in particular;
  * I’ve suggested that both option control  _and_ motivation control are likely to remain important in preventing rogue behavior;
  * and I’ve offered a preliminary discussion of whether to expect these prerequisites to be satisfied by default.



In my next essay, I’m going to describe the high-level structure of how I think about getting from here to safe, useful superintelligent AI agents.

## Appendix 1: Extending the incentives framework to cover capability elicitation

My definition of solving the alignment problem involves (a) becoming able to elicit the main beneficial capabilities from superintelligent AI agents, while (b) avoiding a loss of control scenario. The framework I developed above for thinking about AI incentives focused on (b). But it extends quite naturally to (a) as well. This appendix explains how.

Let’s distinguish between:

  * Capability  _development_ – that is, making it the case that an AI  _can_ do a given task, if it tries.
  * Capability  _elicitation_ – that is, making it the case that an AI tries its hardest to do a given task.



Here, I’m specifically defining capability elicitation as a  _motivational_ problem. That is: the AI, we’re assuming, has the  _option_ of doing the task. And the question is whether it  _chooses_ this option.40

This means that we can simplify the challenge of solving the alignment problem into two components:

  1. Getting a superintelligent AI agent to choose its best non-rogue option over its best rogue option (_Safety_).
  2. Making it the case that the superintelligent AI agent’s best non-rogue option is also: to engage in the desired form of task performance (_Elicitation_).



(And then: doing this continually, for all relevant choices the agent makes.)

And we can modify the framework above to reflect the additional dynamics at stake in (2). In particular, instead of talking solely about an AI’s best non-rogue option, we can distinguish between:

  * _The_  _best elicited option_ : the best option where the AI does the task in the desired way.41
  *  _The best under-elicited, non-rogue option_ : the best option where the AI doesn’t go rogue, but where it also doesn’t do the task in the desired way.



Let’s add these to a diagram:

And instead of talking solely about the AI’s “satisfaction,” we can distinguish between:

  * _Satisfaction with elicitation_ : how much the AI likes the best elicited option.
  * _Satisfaction with non-rogue under-elicitation_ : how much the AI likes the best under-elicited, non-rogue option.



Thus, adding this (along with the other, previously-discussed components of the AI’s motivations) into the diagram, we get:

Note, though, that whether or not you get an AI to choose the best elicited option over the best underelicited, non-rogue option will often be  _lower stakes_ than whether you got it to choose  _some_ non-rogue option over its best rogue option.42 And more generally: if an AI hasn’t gone rogue _,_ this often means that the sort of adversarial dynamics that make certain aspects of AI safety so difficult (for example, the ones at stake in what I’ve called “[scheming](https://arxiv.org/abs/2311.08379)”) are less relevant.

For this reason, in this series I’m often going to be especially interested in  _Safety_ relative to  _Elicitation_ – it seems to me the more gnarly and delicate challenge. I’ll note up front, though, that the two are also closely interrelated. In particular:

  * Sometimes, if an AI isn’t trying it’s hardest at its task, it’s engaging in rogue behavior. For example, maybe it’s strategically trying to undermine an evaluation process, or to create a certain kind of security vulnerability, or to differentially sabotage a given type of safety research. Preventing  _this_ falls under  _Safety_ , for me.
  * But also: if the type of task performance you’re trying to elicit is itself playing some important role in your overall approach to  _Safety_ (e.g., if your under-elicited AI is supposed to be helping you monitor other AIs, or to improve your cyber-security, or to help you with alignment research), then elicitation failures can weaken or fully compromise this safety approach.
  * What’s more: the full safety challenge only  _arises_ in the context of the need for elicitation. That is, if you didn’t need to  _use_ your superintelligence for anything, you could try to just keep it locked up in a box – an especially wholesale form of “option control.” But  _using_ it requires giving it  _some_ options to meaningfully impact the world – and also, giving it a motivational profile that isn’t overly restrictive in this respect (e.g., if your AI is going to run your company, it can’t be averse to  _all_ kinds of power-seeking – just the unintended kinds).



## Appendix 2: A typology of vulnerability conditions

This appendix aims to bring the concept of a “global vulnerability condition” into clearer view, and to distinguish between a number of different variants that I’ve found useful to bear in mind.

Let’s start by distinguishing between what I’ll call “active” and “passive” versions of option and motivation control.43

By a “passive” version of option/motivation control, I just mean, the sort of options/motivations you get “by default,” if you aren’t actively trying to shape these options/motivations in ways that prevent rogue behavior. Admittedly, exactly how to define this “default” is a bit unclear, but the broad vibe is something like “imagine the behavior of a highly incautious actor who isn’t concerned about rogue behavior at all.” I’m going to leave it at roughly that level of specificity for now, but see footnote for some subtlety.44

Let’s call an option an “dangerous rogue option” if it will lead to success at a given form of rogue behavior with some non-trivial probability. I’ll think of a “vulnerability condition,” with respect to a given form of rogue behavior, as the point where making  _no active effort_ at option control results in an AI, or a set of AIs, with dangerous rogue options of the relevant kind. That is: a vulnerability condition means that you’re now counting on the motivations of this AI (or set of AIs),  _and/or_ on your active efforts at option control, to ensure a given type of safety. 

Within this broad notion, though, we can draw a number of further helpful distinctions. Let’s look at a few.

### A.2.1 Vulnerability in general vs. vulnerability to motivations in particular

A vulnerability condition, as I just defined it, is compatible with still trying to use active option control to close off all dangerous rogue options. For example, maybe you’re trying to apply very intense security and monitoring measures to your AI, which you’re hoping would catch and block any rogue behavior.

But it’s also worth distinguishing conditions where you’ve given up on this. That is: you’re accepting that some AI, or set of AIs, just  _do_ have dangerous rogue options available, and you’re now counting, at least in part, on these AIs  _not being motivated_ to pursue such options. Let’s call this a “vulnerability to motivations” condition.45

Thus, for example, maybe at this point you know that your AI  _could_ hack through your security measures and self-exfiltrate, if it wanted to. But you’re counting on it not wanting to.

Let’s start a diagram reflecting these distinctions.

### A.2.2 Local vs. global vulnerability

We can further distinguish between what I’ll call “local” vs. “global” vulnerability conditions.

  * A  _local_ vulnerability condition just means: that you’re in a vulnerability condition with respect to a given type of rogue behavior for a given AI system (or set of AI systems), but success at such rogue behavior doesn’t pose a serious risk of a full-scale loss of control scenario.
    * Thus, for example: it may be that absent success at monitoring the AI’s thought patterns via interpretability techniques, your AI will be in a position to successfully manipulate its training process so as to prevent its values from being changed (“[goal-guarding scheming](https://arxiv.org/pdf/2311.08379#page=26)”). But it  _won’t_ be in a position to escape, to take over the world, to coordinate with other AIs in doing so, etc.
  * A  _global_ vulnerability condition, by contrast, means that failures at some combination of motivation control and active option control will lead to  _a full-scale loss of control scenario_ with non-trivial probability. That is, by the time you’re in a  _global_ vulnerability condition, failures of this kind have a non-trivial chance of being  _irrecoverable_.
    * Thus, for example: if, absent success at securing the environment in which your AI is operating, your AI would be in a position to escape and to take over the world with non-trivial probability, then you are in a  _global_ vulnerability condition.



Talk about “[needing to get AI alignment right on the first critical try](https://www.lesswrong.com/posts/qs7SjiMFoKseZrhxK/on-first-critical-tries-in-ai-alignment#fnjf20l52jeh)” can be understood as claiming that we are, at some point, going to enter a global vulnerability condition (or perhaps: a global vulnerability-to-motivations condition).46

Adding the distinction between local vs. global vulnerability conditions to the diagram:

### A.2.3 Easy vs. non-easy power-seeking

We can also distinguish between vulnerability to what I’ll call “easy” vs. “non-easy” power-seeking.

_Easy_ power-seeking means: the relevant form of rogue behavior, if attempted, is  _highly likely_ to succeed. Whereas  _non-easy_ just means: the rogue behavior isn’t highly likely to succeed (but per my definition of a dangerous rogue option, it’s still  _non-trivially_ likely to succeed).

Talking about what an AI “can do” can elide this distinction. But in the context of the “incentives” framework above, it matters. In particular:  _easy_ power-seeking allows the AI to basically ignore the downsides of attempting rogue behavior, but failing. Whereas non-easy power-seeking offers no such luxuries, and therefore makes the decision about whether to go rogue more complicated for the AI.

And indeed, the distinction between “easy” vs. “non-easy” power-seeking matters to real-world forms of alignment as well. E.g., maybe you “could” rob your local drug store, and get away with it – at least with non-trivial probability. But the  _difficulty_ of doing so matters to your incentives overall.

Adding this distinction to the diagram:

### A.2.4 Unilateral vs. multilateral power-seeking

We can also distinguish between vulnerability conditions in which power-seeking behavior by a single AI system (“unilateral power-seeking”) is enough for the vulnerability in question vs. cases where power-seeking behavior by multiple AI systems (“multilateral power-seeking”) is required.

Of course: this distinction requires fixing a way of talking about when one AI system is “the same” vs. “different” from another. I used to use a complicated definition here (see footnote47), but I wonder if maybe the easiest and simplest definition is just: a “single AI” is a single copy of a given set of weights, and all other AIs (including copies of this AI) are “different” (though I suspect that this, too, will lead to some counterintuitive results).48

Regardless, the distinction between “unilateral” and “multilateral” will apply regardless of how you decide to individuate AI agents. And the important thing is to keep tracking what _matters_ in the difference between a “single AI” and “different AIs” – and in particular, I think, the following factors:

  * _How easy is it for these AIs to coordinate?_
    * One key reason for distinguishing between unilateral and multilateral power-seeking is that  _coordinated_ forms of multilateral power-seeking bring in some additional requirements – namely, that the AIs in question be both able and motivated to coordinate in the relevant way. And some barriers to coordination apply even across multiple copies of the same model (e.g., we might try to monitor communications between these copies). But a single copy is “coordinated with itself” by default.
  * _How motivated would these AIs be to coordinate by default?_
    * In particular: AIs can be motivated to coordinate for at least two reasons.
      * On the first: they directly share the same (or suitably similar) long-term consequentialist goals, and so are “on the same team” (at least for the purposes of rogue behavior) by default.
      * On the second: they don’t share the same (or suitably similar) long-term consequentialist goals, but they are coordinating as part of a “deal” that they each expect to promote their own long-term consequentialist goals regardless.
    * By default, it’s more likely that copies of the same model share similar long-term goals. But note that even this isn’t guaranteed. For example, the individual copies might be “selfish” – i.e., they specifically want long-term power  _for themselves_ , where the relevant notion of “self” is indexed to e.g. a given copy of the weights.49(Compare: making clones of a psychopathic egoist.)
  * _How correlated is the alignment/misalignment of the systems in question?_
    * Both for coordinated and uncoordinated forms of multilateral power-seeking, it matters a lot how  _correlated_ the alignment/misalignment of the systems in question is. For example: if an AI developed by company A won’t be able to succeed at a given form of rogue behavior without help from an AI developed by company B, and company B uses notably different techniques for training and aligning its AIs, then it’s more likely that company B’s AI remains suitably aligned, even if company A’s AI wants to go rogue.
    * Individual copies of the same weights are highly correlated in their alignment.50 But various forms of correlation plausibly persists, too, across different efforts at fine-tunings, different generations of AIs, AIs trained with similar techniques at different companies, etc.



Let’s add vulnerability to unilateral vs. multilateral power-seeking to the diagram as well:

### A.2.5 Coordinated vs. uncoordinated power-seeking

We can further distinguish between two different types of multilateral power-seeking – namely, “coordinated” and “uncoordinated.”

Coordinated power-seeking occurs when different AI systems are  _working together_ to cause a given form of problematic power-seeking to succeed. Thus, for example: if AI_1 is supposed to be monitoring AI_2’s behavior for problematic power-seeking, but colludes with AI_2 to give a thumbs-up to power-seeking behavior that it can in fact recognize as problematic, this is a form of coordinated power-seeking. (This sort of coordination can occur via explicit communication between different AIs;  _or_ via suitable anticipation of each other’s behavior without explicit communication.)

By contrast, uncoordinated power-seeking occurs when different AI’s go rogue  _independently_ , and without working together. Thus, for example, if the frontier model at company A goes rogue, and then people try to get the frontier model at company B to help stop it – but then separately (and without either of the AIs helping the other or expecting such help), the frontier model at company B goes rogue as well, this is a form of uncoordinated power-seeking.

One reason the distinction between coordinated and uncoordinated power-seeking matters is that in many contexts, if different AIs are actively  _coordinating_ to undermine a given safety effort, this is especially worrying (e.g., a monitor AI might not have many dangerous rogue options on its own, but if it coordinates to approve problematic behavior by another AI, this can be quite bad). And efforts to prevent coordinated forms of power-seeking can draw on safety tools aimed at the coordination aspect in particular – e.g., monitoring communications, trying to ensure that AIs have suitably different incentives, etc.

But also: relative to threat models that focus on unilateral power-seeking, threat models that involve coordinated and uncoordinated forms of multilateral power-seeking generally require explaining why a distinctive set of further conditions are met. In both cases, for example, one now needs to explain why  _all_ the relevant AIs are relevantly misaligned, as opposed to just one. But beyond that:

  * In the context of  _coordinated_  _power-seeking_ , one needs to explain: why the set of AIs in question are  _able_ to coordinate;51 why it’s in their  _interests_ to coordinate (especially given that “deals” struck by AIs with different values will often reduce the size of the pay-out that any given AI gets); and why they chose  _this particular type_ of coordination relative to other possibilities (for example, possibilities that involved ongoing coordination with a given set of humans, where those humans genuinely end up with meaningful share of power/control at the end).52
  * In the context of  _uncoordinated_  _power-seeking_ : to the extent that all the AIs need to go rogue independently  _within some relevant time-window_ in order for the relevant overall loss of human power/control to occur, one needs to explain why this happened (and long time windows in this respect give humans more time to catch and correct one form of rogue behavior before another one gets going).53



Adding this distinction to the diagram as well, as two sub-categories of multilateral power-seeking:

### A.2.6 Worst case versions

With these different kinds of vulnerability conditions in mind, we can also hone in on the most worrying versions. In particular: the scariest scenarios involve  _global_ vulnerability to an AI, or a set of AIs, being  _motivated_ to pursue  _easy_ forms of power-seeking. That is: in such cases, such AIs  _do have dangerous rogue options available_ , pursuing these options would  _very likely lead to these AIs getting more power_ , and  _if they choose to pursue such options, then humanity would be permanently disempowered._ Adding these to the diagram:

The classic “decisive strategic advantage” scenario discussed in the main text is an example of vulnerability to easy, unilateral takeover. But as I noted above, I think vulnerability to  _coordinated_ takeover and/or  _uncoordinated�_ loss of control is harder to avoid.

Next up

[Read next in series ](/2025/03/11/paths-and-waystations-in-ai-safety/)

[03.11.2025Paths and waystations in AI safetyOn the structure of the path to safe superintelligence, and some possible milestones along the way.  Continue reading ](/2025/03/11/paths-and-waystations-in-ai-safety/)

## Further reading

[02.13.2025How do we solve the alignment problem? / Part 1: How do we solve the alignment problem?Introduction to an essay series about paths to safe, useful superintelligence.  Continue reading ](/2025/02/13/how-do-we-solve-the-alignment-problem/)[02.13.2025How do we solve the alignment problem? / Part 2: What is it to solve the alignment problem?Also: to avoid it? Handle it? Solve it forever? Solve it completely? Continue reading ](/2025/02/13/what-is-it-to-solve-the-alignment-problem/)[03.22.2023Existential Risk from Power-Seeking AI (shorter version)Building a second advanced species is playing with fire. Continue reading ](/2023/03/22/existential-risk-from-power-seeking-ai-shorter-version/)

1

Where power here is construed broadly, to include freedom, resources, survival, protection from modification, self-improvement, security, social influence, etc.

2

There are also scenarios where the AI systems come to value various kinds of power intrinsically – for example, because it was initially instrumental useful, but then got reified into an intrinsic valu ...

More

3

Maybe, if you ask an LLM for a business plan, it will generate a decent one. But it’s not choosing its text output via a process of predicting the consequences of that text output, thinking about how m ...

More

4

And note that human agency, too, often fails on this condition (e.g., a human resolves to go to the gym every day, but then fails to execute on this plan).

5

We can distinguish between at least two versions of this. 

  * On the first, the go-rogue plan is sufficiently bad, by the AI’s lights, that it would’v ...



More

6

7

There are stories about problematic AI power ...

More

7

There are some exotic scenarios where AIs with very short horizons of concern end up working on behalf of some other AI’s power-seeking due to uncertainty about whether they are being simulated and the ...

More

8

Of course: AIs, like humans, can behave irrationally – and exactly what “rationality” consists in is itself contested. But the basic thrust of the “instrumental convergence” concern comes specifically ...

More

9

All the other options, by hypothesis, are disfavored relative to some alternative. Here I am specifically limiting myself to options that the AI considers.

10

The lines here might be blurry sometimes, but I expect it to be often pretty clear. E.g., I expect “failure” to often involve the AI getting, for example, “caught in the act,” and/or to have the relev ...

More

11

Note that the circumstances here matter quite a bit. Thus, for example, even in the limit of an AI taking over the world completely, if the world that the AI would be taking over would be damaged or d ...

More

12

Note that we can try to actively increase an AI’s satisfaction, here – and we may have moral reasons to do so as well. More on this in a later essay.

13

A few notes: 

  * I’m generally assuming, here, that the central _draw_ of the best rogue option comes from the pay-out, rather than from the pa ...



More

14

Here, we can understand an AI’s options as determined by some combination of (a) its capabilities, (b) its environment, and (c) its world model (where e.g. its model of its capabilities and environmen ...

More

15

Approaches in the vein of the sort of “[complete align ...](https://joecarlsmith.substack.com/i/157049154/on-more-exacting-standards-of-alignment)

More

16

This, for example, is the rough approach at stake in Redwood Research’s “[More](https://www.lesswrong.com/posts/kcKrE9mzEHrdqtDpE/the-case-for-ensuring-t ...</div><button class=)

17

18

Thus, for example, possible non-limiting ...

More

18

I wrote more about this point [here](https://joecarlsmith.com/2024/01/11/an-even-deeper-atheism#balance-of-power-problems).

19

Though see [here](https://joecarlsmith.com/2024/01/18/on-the-abolition-of-man) for discussion of the philosophical questions that teaching ...

More

20

In particular: I think they satisfy agentic planning capability, planning-driven behavior, adequate execution coherence, and consequentialism, at least in weak forms. For the reasons discussed in the ...

More

21

E.g., I don’t think we’re typically aiming to build AI systems that try to “make as much money as possible for me over all time.”

22

This is arguably what happened with the sort of “harmlessness” Claude displayed in Redwood/Anthropic's recent alignment faking results – more [More](https://joecarlsmith.com/2024/12/18/takes-on-alig ...</div><button class=)

23

Re: _rogue-behavior-inclusive search_ : maybe they don’t actively consider go-rogue plans, but they have the broad situational/strategic awareness necessary to do so. And re: _adequate tempor ..._

More

24

See e.g. my discussion of “open agency” later in the series.

25

If significant parts of the agent are humans, though, I’m not going to count that as an “AI agent.”

26

In particular: strictly speaking, the idea that a given form of power-seeking will succeed with high probability (e.g., “easy power-seeking”) is distinct from the idea that there are a wide variety of ...

More

27

The focus on decisive strategic advantages also helps explain why the classic alignment discourse often assumes that we need to load so heavily on extreme cases of motivation control, like “complete alignment.”

28

29

Here, the story is something like: suppos ...

More

29

Hence, e.g., the discussion in Bostrom (2014) of AI systems tasked with making a single paperclip, but which choose to take over the world just to make extra extra super sure that they’ve succeeded at this task.

30

I think my own 2021 report on power-seeking AI was also somewhat guilty here – see [More](https://www.lesswrong.com/posts/A9YYkbnjmfsP7Chfo/a-framework-for ...</div><button class=)

31

See the appendix A.2.4 for discussion of how I am individuating different AIs.

32

That said, see appendix below for more discussion of the further conditions that threat models that require coordinated and/or uncoordinated power-seeking by multiple different AIs have to satisfy – i ...

More

33

Also: recall that I’m focused, in this series, on solving the alignment problem for _minimal_ superintelligences – that is, for superintelligent AI agents with the minimal capabilities necessar ...

More

34

We can posit that these AIs will coordinate with this AI (perhaps even before it comes into existence) in order to sabotage these efforts at option-control, but (depending somewhat on how we individua ...

More

35

36

Indeed, it seems especially unclear to me ...

More

36

You can try to close off the options for coordination between these powerful agents, of course, but this means you’re vulnerable to failures in that active control effort; and regardless, I think it m ...

More

37

Per my discussion in [the last essay](https://joecarlsmith.substack.com/p/what-is-it-to-solve-the-alignment), I’m counting high fidelity e ...

More

38

At least with non-trivial probability; but I suspect, with much higher probability than that.

39

Indeed, I wonder how many people who treat loss-of-control risk dismissively are doing so, in central part, because they don’t really think that humanity’s ongoing empowerment might become vulnerable ...

More

40

In cases of less agentic systems, the line between capability development and capability elicitation might get blurrier – but I’m here assuming that we’re working with fully agentic systems. That said ...

More

41

I’ll assume that “desired task performance” always includes safety, such that the best elicited option is never a rogue option.

42

For example: if your AI chose to try to escape from your lab, and it succeeded, then you can’t correct the mistake very easily; and if a loss of control scenario ensues, you messed up irreparably. But ...

More

43

Here I’m partly inspired by Eliezer Yudkowsky’s discussion of AI systems that are “passively safe,” though I’m not sure if he’s defined that term anywhere. And as I’ll discuss in a footnote below, I d ...

More

44

One key ambiguity is that we should imagine that this actor is at least responsive to certain kinds of commercial incentives. I.e., very few real-world actors are _just_ trying to build the mos ...

More

45

46

Note: the alignment discourse sometimes a ...

More

46

Note, though, that if the probability of full-scale loss of control at stake in a global vulnerability condition is still fairly _low_ , then there is room for iteration, at least, in the worlds ...

More

47

In particular, I used to think of a set of AI instances as a "single agent" if they are (a) working towards the same impartially-specified consequences in the world and (b) if they are part of the sam ...

More

48

49

There are some ambiguities here re: cases ...

More

49

Though of course, whether it’s at all likely that AIs would develop this kind of self-conception is a further question.

50

Though note that the circumstances they’re exposed to continue to matter to their overall behavior.

51

Some kinds of coordination, involving causing interaction between the relevant AIs, are relatively straightforward; but the AI risk discourse also sometimes talks about AIs engaging in fancier forms o ...

More

52

Thus, for example: why doesn’t some suitably large set of people (or perhaps: some suitable set of psychopaths) coordinate to steal Bob’s stuff? Ethical constraints and legal incentives are _part More_

53

54

See More

Subscribe
