---
title: " Equilibrium and prior selection problems in multipolar deployment"
author: "JesseClifton"
date: 2020-04-02
url: https://alignmentforum.org/posts/Tdu3tGT4i24qcLESh/equilibrium-and-prior-selection-problems-in-multipolar-1
fetched: 2026-07-07
via: forum-graphql
topic: "linked"
note: "CLR on equilibrium and prior selection in multipolar systems (cooperative AI); cited x3"
---

To [avoid catastrophic conflict in multipolar AI scenarios](https://www.alignmentforum.org/posts/DbuCdEbkh4wL5cjJ5/preface-to-eaf-s-research-agenda-on-cooperation-conflict-and), we would like to design AI systems such that AI-enabled actors will tend to cooperate. This post is about some problems facing this effort and some possible solutions. To explain these problems, I'll take the view that the agents deployed by AI developers (the ''principals'') in a multipolar scenario are *moves in a game*. The payoffs to a principal in this game depend on how the agents behave over time. We can talk about the equilibria of this game, and so on. Ideally, we would be able to make guarantees like this:

1. The payoffs resulting from the deployed agents' actions are optimal with respect to some appropriate "welfare function''. This welfare function would encode some combination of total utility, fairness, and other social desiderata; 
2. The agents are in equilibrium --- that is, no principal has an incentive to deploy an agent with a different design, given the agents deployed by the other principals. 

The motivation for item 1 is clear: we want outcomes which are fair by each of the principals' lights. In particular, we want an outcome that the principals will all agree to. And item 2 is desirable because an equilibrium constitutes a self-enforcing contract; each agent wants to play their equilibrium strategy, if they believe that the other agents are playing the same equilibrium. Thus, given that the principals all say that they will deploy agents that satisfy 1 and 2, we could have some confidence that a welfare-optimal outcome will in fact obtain. 

Two simple but critical problems need to be addressed in order to make such 
guarantees: the equilibrium and prior selection problems. The **equilibrium selection problem** is that this deployment game will have many equilibria. Even if the principals agree on a welfare function, it is possible that many different profiles of agents optimize the same welfare function. So the principals 
need to coordinate on the profile of agents deployed in order to make guarantees
like 1 and 2. Moreover, the agents will probably have private information, such as information about their payoffs, technological capabilities, and so on. As I will explain below, conflicting priors about private information can lead to suboptimal outcomes. And we can’t expect agents to arrive at the same priors by default. 
So a **prior selection problem** also has to be solved. 

The equilibrium selection problem is [well-known](https://en.wikipedia.org/wiki/Equilibrium_selection). The prior selection problem is discussed less. In games where agents have uncertainty about some aspect of their counterparts (like their utility functions), the standard solution concept --- 
[Bayesian Nash equilibrium](https://en.wikipedia.org/wiki/Bayesian_game#Bayesian_Nash_equilibrium) --- 
requires the agents to have a common prior over the possible values of the players' private information. This assumption might be very useful for some kinds of economic modeling, say. But we cannot expect that AI agents deployed by different principals will have the same priors over private information --- or even common knowledge of each others' priors --- in all of their interactions, in the absence of coordination[^1].

It might be unnatural to think about coordinating on a prior; aren't your priors your beliefs? How can you change your beliefs without additional evidence? 
But there may be many reasonable priors to have, especially for a boundedly
rational agent whose "beliefs'' are (say) some complicated property of a neural network. This may be especially true when it comes to beliefs about other agents' private information, which is something that's particularly difficult to 
learn about from observation (see [here](https://papers.nips.cc/paper/7803-occams-razor-is-insufficient-to-infer-the-preferences-of-irrational-agents.pdf) for example). And while there may be many reasonable priors to have, incorrect beliefs about others' priors could nonetheless have large downsides[^2]. I give an example of the risks associated with disagreeing priors later in the post.

Possible solutions to these problems include: 
- Coordination by the principals to build a single agent; 
- Coordination by the principals on a profile of agents which are in a welfare-optimal equilibrium;
- Coordination by the principals on procedures for choosing among equilibria and specifying a common prior at least in certain high-stakes interactions between their agents (e.g., interactions which might escalate to destructive conflict). 

Finally, a simple but important takeaway of the game-theoretic perspective on multipolar AI deployment is that *it is not enough to evaluate the safety of an agent's behavior in isolation from the other agents that will be deployed*. Whether an agent will behave safely depends on how other agents are designed to interact, including their notions of fairness and how they form beliefs about their counterparts. This is more reason to promote coordination by AI developers, not just on single-agent safety measures but on the game theoretically-relevant aspects of their agents' architectures and training.

### A learning game model of multipolar AI deployment

In this idealized model, $n$ principals simultaneously deploy their agents. The agents take actions on the principals' behalf for the rest of time. Principal $i$ has reward function $r_i$, which their agent is trying (in some sense) to maximize. I'll assume that $r_i$ perfectly captures what principal $i$ values, in order to separate alignment problems from coordination problems. The agent deployed by principal $i$ is described by a learning algorithm $\sigma_i$. 

At each time point $t$, learning algorithms $\sigma_i$ map histories of observations $H_i^t$ to actions $A^t$. For example, these algorithms might choose their actions by planning according to an estimated model. Let $\gamma$ be a discount factor and $X^v$ the (partially observed) world-state at time $v$. Denote policies for agent $i$ by $\pi_i$. Write the world-model estimated from data $H_i^t$ (which might include models of other agents) as $\widehat{M}(H_i^t)$. Let $\mathbb{E}_{\pi_i, \widehat{M}(H_i^t)}$ be the expectation over trajectories generated udner policy $\pi_i$ and model $\widehat{M}(H_i^t)$. Then this model-based learning algorithm might look like: 
\begin{equation*}
    \begin{aligned}
     \pi_i^t & = \underset{\pi_i}{\text{arg max}} \mathbb{E}_{\pi_i, \widehat{M}(H_i^t)} \left[ \sum_{v=t}^\infty \gamma^{v-t} r_i(X^v) 
      \right] \\
     \sigma_i(H_i^t) & = \pi_i^t(H_i^t).
    \end{aligned} 
\end{equation*}
In a multiagent setting, each agent’s payoffs depend on the learning algorithms of the other agents. Write the profile of learning algorithms as $\sigma = (\sigma_1, \dots, \sigma_n)$. Then we write the expected cumulative payoffs for agent $i$ when the agents described by $\sigma$ are deployed as $V_i(\sigma)$. 

The *learning game* is the game in which strategies are learning algorithms $\sigma_i$ and payoffs are long-run rewards $V_i(\sigma)$. We will say that $\sigma$ is a *learning equilibrium* if it is a Nash equilibrium of the learning game (cf. [Brafman and Tennenholtz](https://papers.nips.cc/paper/2147-efficient-learning-equilibrium.pdf)). Indexing all players except $i$ by $-i$, this means that for each $i$ 
$$
V_i(\sigma) \geq \sup_{\sigma'_i} V_i(\sigma'_i, \sigma_{-i}).
$$

Let $w$ be a *welfare function* measuring the quality of payoff profile 
generated by learning algorithm profile $\sigma$. For instance, $w$ might simply be the sum of the individual payoffs: $w(\sigma) = \sum_i V_i(\sigma)$. Another candidate for $w$ is the [Nash welfare](https://en.wikipedia.org/wiki/Bargaining_problem#Nash_bargaining_solution). 
Ideally we would have guarantees like 1 and 2 above with respect to an appropriately-chosen welfare function. Weaker, more realistic guarantees might look like:
- $\sigma$ is a $w$-optimal equilibrium with respect to the agents' world-models at each time-step (thus not necessarily an equilibrium with respect to the *true* payoffs), or 
- The actions recommended by $\sigma$ constitute a $w$-optimal equilibrium in 
sufficiently high-stakes interactions, according to the agents' current world-models. 

The equilibrium and prior selection problems need to be solved to make such guarantees. I'll talk about these in the next two subsections. 

#### The equilibrium selection problem

For a moment, consider the reward functions for a different game: an asymmetric version of Chicken (Table 1)[^3].
Suppose players 1 and 2 play this game infinitely many times.
The [folk theorems](https://en.wikipedia.org/wiki/Folk_theorem_(game_theory)) tell us that there a Nash equilibrium of this repeated game for every profile of long-run average payoffs in which each player gets at least as much as they can guarantee themselves unilaterally ($-1.5$ for player 1 and $-1$ for player 2). Any such payoff profile can be attained in equilibrium by finding a sequence of action profiles that generates the desired payoffs, and then threatening long strings of punishments for players who deviate from this plan. This is a problem, because it means that if a player wants to know what to do, it's not sufficient to play a Nash equilibrium strategy. They could do arbitrarily badly if their counterpart is playing a strategy from a *different* Nash equilibrium.  

So, if we want to guarantee that the players don't end up playing lots of $(D, D)$'s, it is not enough to look at the properties of a *single* player. For instance, in the case of AI, suppose there are two separate AI teams independently training populations of agents. Each AI team wants to teach their agents to behave "fairly" in some sense, so they train them until they converge to an [evolutionary stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy)
in which some "reasonable'' welfare function is maximized. But, these populations will likely be playing different equilibria. So disaster could still arise if agents from the two populations are played against 
each other[^4].

Then how do players choose among these equilibria, to make sure that they're playing strategies from the same one? It helps a lot if the players have an opportunity to coordinate on an equilibrium before the game starts, as the principals do in our multipolar AI deployment model. 

![](https://imgur.com/AvvSE5N.png)

One intuitively fair solution would be alternating between $(C, D)$ and $(D, C)$ at each step. This would lead to player 1 getting an average payoff of 1.75 and player 2 getting an average payoff of 0.5. Another solution might be arranging moves such that the players get the same payoff (equal to about $0.9$), which in this case would mean playing twelve $(C, D)$'s for every seven $(D, C)$'s. Or,
player 2 might think they can demand more because they can make player 1 worse-off than player 1 can make them. But, though they may come to the bargaining table with differing notions of fairness, both players have an interest in 
avoiding coordination failures. So there is hope that the players would reach some agreement, given a chance to coordinate before the game.

Likewise, the learning game introduced above is a complex sequential game --- its payoffs are not known at the outset, but can be learned over time. 
And this game will also have different equilibria that correspond to different notions of fairness. One solution is for the principals to coordinate on a set of learning algorithms which jointly maximize a welfare function $w$ and punish deviations from this optimization plan, in order to incentivize cooperation. I discuss this approach [in example 5.1.1 here](https://www.alignmentforum.org/posts/4GuKi9wKYnthr8QP9/sections-5-and-6-contemporary-architectures-humans-in-the) and [in this draft](https://longtermrisk.org/files/toward_cooperation_learning_games_oct_2020.pdf).

The problem of enforcement is avoided if the principals coordinate to build a single agent, of course. But it's not clear how likely this is to happen, so it seems important to have solutions which require different degrees of cooperation by
the principals. On the other hand, what if the principals are not even able to fully coordinate on the choice of learning algorithms? The principals could at least coordinate on bargaining procedures that their agents will use in the highest-stakes encounters. Such an arrangement could be modeled as specifying a welfare function for measuring the fairness of different proposals in high-stakes interactions, and specifying punishment mechanisms for not following the deal that is maximally fair according to this function. Ensuring that this kind of procedure leads to efficient outcomes also requires agreement on how to form credences in cases where agents possess private information. I address this next.  

#### The prior selection problem

In this section, I'll give an example of the risks of noncommon priors. In this example, agents having different beliefs about the credibility of a coercive threat leads to the threat being carried out.

Bayesian Nash equilibrium (BNE) is the standard solution concept for games of 
[incomplete information](https://en.wikipedia.org/wiki/Complete_information), i.e., games in which the players have some private information. (An agent's private information often corresponds to their utility function. However, in my example below it's more intuitive to specify the private information differently.) In this formalism, each player $i$ has a set of possible "types'' $\tau_i$ encoding their private information. A strategy $s_i$ maps the set of types $\tau_i$ to the set of mixtures over actions (which we'll denote by $\Delta(\mathcal{A}_i)$. Finally, assume that the players have a common 
prior $P(\tau_1, \dots, \tau_n)$ over the set of types. Let $V_i\{ s(\tau) \}$ be
the expected payoff to player $i$ when the (possibly mixed) action profile $s(\tau) = (s_1(\tau_1), \dots, s_n(\tau_n))$ is played. Thus, a BNE is a strategy profile $s$ such that, for each $i$ and each $\tau_i$,
\begin{equation*}
    \sum_{\tau_{-i}} V_i\left\{ 
      s_i(\tau_i), 
      s_{-i}(\tau_{-i})  
    \right\}P(\tau_{-i} \mid \tau_i) \geq 
    \sup_{s_i' \in \Delta(\mathcal{A}_i)}
    \sum_{\tau_{-i}} V_i\left\{ 
      s_i',
      s_{-i}(\tau_{-i})
    \right\}P(\tau_{-i} \mid \tau_i). 
\end{equation*}

To illustrate the importance of coordination on a common prior, suppose that two agents find themselves in a high-stakes interaction under incomplete information. Suppose that at time $t$,
agent 2 (Threatener) tells agent 1 (Target) that they will carry out some dire threat 
if Target doesn't transfer some amount of resources to them. However, it is uncertain whether the Threatener has actually committed to carrying out such a threat. 

Say that Threatener is a Commitment type if they can commit to carrying out the threat, and a Non-Commitment type otherwise. To compute a BNE, the agents need to specify a common prior for the probability that Threatener is a Commitment type. But, without coordination,
they may in fact specify different values for this prior. More precisely, define
- $p_{Th}$: The probability Threatener thinks Target assigns to being a Commitment type;
- $p_{Ta}$: The Target’s credence that Threatener is a Commitment type;
- $V_{Th}(\text{Carry out}) < 0$: The utility to Threatener if they carry out; 
- $V_{Th}(\text{Give in}) > 0$: The utility to Threatener if Target gives in;  
- $V_{Ta}(\text{Give in}) < 0$: The utility to Target if they give in; 
- $V_{Ta}(\text{Carry out}) < V_{Ta}(\text{Give in})$: The utility to Target if the threat is carried out. 

A threat being carried out is the worst outcome for everyone. In BNE, Commitment types threaten (and thus commit to carry out a threat) if and only if they think that Target will give in, i.e., $V_{Ta}(\text{Give in}) > p_{Th} V_{Ta}(\text{Carry out})$. But Targets give in only if $V_{Ta}(\text{Give in}) > p_{Ta} V_{Ta}(\text{Carry out}).$ Thus threats will be carried out by Commitment types if and only if
\begin{equation}
    \begin{aligned}
    \frac{p_{Th}}{p_{Ta}} 
      > \frac{V_{Ta}(\text{Give in})}{V_{Ta}(\text{Carry out}) p_{Ta}}. \quad (1)
    \end{aligned}
\end{equation}
On the other hand, suppose the agents agree on the common prior probability that Threatener is a Commitment type (so $p_{Th} = p_{Ta}$). Then the execution of threats is always avoided. 

How might the agents agree on a common prior? In the extreme case, the principals could try to coordinate to design their agents so that they always form the same credences from public information. Remember that the learning algorithms $\sigma_i$ introduced above fully specify the action of player $i$ given an observation history. This includes specifying how agents form credences like $p_{Ta}, p_{Th}$. Thus full coordination on the profile of learning algorithms chosen, as suggested in the previous subsection, could in principle solve the problem of specifying a common prior.  For instance, write the set of mutually observed data as $H^t = \bigcap\limits_{i=1}^n H_i^t$. Let
$p$ be a function mapping $H^t$ to common prior probabilities
that Threatener is a Commitment type, $p^t = p(H^t)$. The learning algorithms then could be chosen to satisfy  
\begin{equation*}
    \begin{aligned}
    \sigma_{Ta}(H^t_{Ta}) & = 
                            \text{Give in } & \iff  p^t V_{Ta}(\text{Carry out}) < V_{Ta}(\text{Give in}); \\ 
     \sigma_{Th}(H^t_{Th}) & = 
                            \text{Commit } & \iff p^t V_{Ta}(\text{Carry out}) < V_{Ta}(\text{Give in}). 
    \end{aligned}
\end{equation*}

Again, full coordination on a pair of learning algorithms might be unrealistic. But it still might be possible to agree beforehand on a method for specifying a common prior in certain high-stakes situations. Because of incentives to misrepresent one's credences, it might not be enough to agree to have agents just report their credences and (say) average them (in this case e.g. Target would want to understate
their credence that Threatener is a Commitment type). One direction is to have an agreed-upon standard for measuring the fit of different credences to mutually observed data. A simple model of this would for the principals to agree on a loss function $L$ which measures the fit of credences to data. Then the common credence at the time of a high-stakes interaction $t$, given the history of mutually observed data $H^t$, would be $p(H^t) = \text{arg}\ \text{min}_p L(p, H^t)$. This can be arranged without full coordination on the learning algorithms $\sigma_i$. 

I won't try to answer the question of how agents decide, in a particular 
interaction, whether they should use some "prior commonification'' 
mechanism. To speculate a bit, the decision might involve higher-order priors. For instance, if Threatener has a higher-order prior over $p_{Ta}$ and thinks that there's a sufficiently high chance that inequality (1) holds, then they
might think they're better off coordinating on a prior. But, developing a
principled answer to this question is a direction for future work. 

### Acknowledgements
Thanks to Tobi Baumann, Alex Cloud, Nico Feil, Lukas Gloor, and Johannes Treutlein for helpful comments. This research was conducted at the Center on Long-Term Risk and the Polaris Research Institute.

[^1]: Actually, the problem is more general than that. The agents might not only have disagreeing priors, but model their strategic interaction using different games entirely. I hope to address this in a later post. For simplicity I'll focus on the special case of priors here. Also, see the literature on "hypergames" (e.g. Bennett, P.G., 1980. Hypergames: developing a model of conflict), which describe agents who have different models of the game they're playing. 
[^2]: Compare with the literature on [misperception in international relations](https://www.amazon.com/Perception-Misperception-International-Politics-University/dp/0691175853), and how misperceptions can lead to disaster in human interaction. Many instances of misperception might be modeled as "incorrect beliefs about others' priors''. Compare also with the discussion of crisis bargaining under incomplete information in [Section 4.1 here](https://www.alignmentforum.org/posts/8xKhCbNrdP4gaA8c3/sections-3-and-4-credibility-peaceful-bargaining-mechanisms).
[^3]: I set aside the problem of  truthfully eliciting each player's utility function.
[^4]: Cf. [this CHAI paper](https://arxiv.org/pdf/1910.05789.pdf), 
which makes a related point in the context of human-AI interaction. However, 
they say that we can't expect an AI trained to play an equilibrium
strategy in self-play to perform well against a human, because humans 
might play off-equilibrium (seeing as humans are "suboptimal''). But the problem is not just that one of the players might play off-equilibrium. It's that even if they are both playing an equilibrium strategy, they may have selected different equilibria.
