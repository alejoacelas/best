---
title: "Making AIs less likely to be spiteful"
author: "Nicolas Macé"
date: 2023-09-26
url: https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ai-character/case-for-model-persona-research.md; reducing spite in AIs — s-risks/AI character"
---

Which forms of misalignment might result in particularly bad outcomes? And to what extent can we prevent them even if we fail at ​​intent alignment? We define *spite* as a terminal preference for frustrating others’ preferences, at least under some conditions. Reducing the chances that an AI system is spiteful is a candidate class of interventions for reducing [risks of AGI conflict](https://www.lesswrong.com/s/32kWH6hqFhmdFsvBh), as well as [risks from malevolence](https://forum.effectivealtruism.org/posts/LpkXtFXdsRd4rG8Kb/reducing-long-term-risks-from-malevolent-actors). This post summarizes some of our thinking on the topic. We give an overview of why spite might lead to catastrophic conflict; how we might intervene to reduce it; ways in which the intervention could fail to be impactful, or have negative impact; and things we could learn that would update us on the value of this intervention.

**Key takeaways** 

1.  Spiteful preferences include a generalized preference for harming others, as well as other preferences like vengefulness and spite towards certain groups. The basic reason to focus on reducing spite is that such interventions may stably make AIs less likely to take risks of mutually costly conflict (or deliberately create suffering because they intrinsically value it), even if alignment fails. ([more](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_exacerbate_catastrophic_risks_from_AI))
2.  Spite might be selected for in ML systems because (a) it serves as a strategically valuable commitment device, (b) it is a direct proxy for high-scoring behavior in environments where the optimal behavior involves harming other agents (e.g., environments with competition between agents), (c) it is (correctly or incorrectly) inferred from human preferences, or (d) it results from miscellaneous generalization failures. ([more](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_arise_in_AI_systems))
3.  Thus potentially low-cost interventions to reduce the chances of spite include modifications to the training data or loss function to reduce selection pressure towards spite (e.g., avoiding selecting agents based on relative performance in multi-agent tasks, or filtering human feedback that could select for spite). ([more](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#Interventions_to_prevent_spite))
    1.  Reducing spite carries some *prima facie* backfire risk, via potentially increasing the exploitability of AIs that share human values to some extent. We currently don’t think that this consideration makes the sign of spite reduction negative, however. One reason is that, for interventions to backfire by making our AI more exploitable, they have to change other agents’ beliefs about how spiteful our AI is, and there are various reasons to doubt this will happen. 
    2.  Interventions to reduce spite seem most likely to be counterfactual in worlds where alignment fails. However, it’s currently very unclear to us how an AI’s goals will relate to design features we can intervene on (e.g., training environments), conditional on alignment failure. 
        1.  If we are in a world in which inner objectives are [highly path-dependent](https://www.alignmentforum.org/posts/A9NxPTwbw6r6Awuwt/how-likely-is-deceptive-alignment#Deceptive_alignment_in_the_high_path_dependence_world), we need it to be the case that (i) we can reliably influence motivations formed early in training and that (ii) these motivations reliably influence the agent’s final goals. ([more](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#High_path_dependence))
        2.  If we are in a world in which inner objectives are [not very highly path-dependent](https://www.alignmentforum.org/posts/A9NxPTwbw6r6Awuwt/how-likely-is-deceptive-alignment#Deceptive_alignment_in_the_low_path_dependence_world), we need it to be the case that deceptive alignment isn’t favored by models’ inductive biases, and that the agent’s inner objective generalizes off-distribution as intended. ([more](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#Low_path_dependence))  
             

**Our future work:** We are not confident that it will be possible to reduce spite in misaligned AIs. However, (i) based on our reading of the alignment literature and conversations with alignment researchers, it doesn’t seem strongly ruled out by the current understanding of alignment, and (ii) there may be spite interventions that are particularly cheap and easy to persuade AI developers to implement. Thus we think it’s worthwhile to continue to devote some of our portfolio to spite for now. 

Our conceptual work on this topic will likely include:

*   Developing concrete tests for spite or modifications to AI training intended to discourage spite, under different assumptions about how AI will be developed. 
*   Thinking about what kinds of punishment policies are desirable (to avoid reinforcing vengefulness/retributivism while not making AIs incapable of deterrence);   
*   Thinking about other kinds of preferences that might exacerbate the risks of conflict, and which we might be able to intervene on even if AI systems are misaligned (e.g., risk-seeking?).       

Here are things that we could learn (both through our own research and outside research findings) that would update us on the value of more work in this area: 

*   Empirical findings or theoretical arguments that tell us more about how the proxy goals a system develops early in training influence its goals over the long-term. This would give us information about whether we are in a high path-dependence world and whether we can reliably influence an agent’s goals in such worlds, even if misaligned. Similarly, empirical or theoretical arguments that tell us whether we are in low path-dependence worlds and the inductive biases of models favor deceptive alignment;  
    *   We don’t think it’s CLR’s comparative advantage to investigate this — we expect any such results to come from alignment researchers or other ML researchers. (Unless, e.g., relevant interpretability tools become available to us, at which point we would consider using them to answer questions specific to spite.) 
*   Information about how conducive to spite AI training might be by default. E.g., If it looks particularly likely or unlikely that AI developers will train their AIs in environments that theoretically select for spite, train their AIs using selection on relative fitness, or take other spite-conducive approaches to training, then we would update the importance of this line of work accordingly.

How spite might exacerbate catastrophic risks from AI
=====================================================

We’ll use this definition of spite: 

***Spite (informal):** An agent is spiteful if, at least under some conditions, they are intrinsically motivated to frustrate other agents’ preferences.*   

Examples include: 

*   Generalized spite: An agent may intrinsically value frustrating the preferences of other agents in general.
*   Retributivism / vengefulness: An agent may intrinsically value harming agents it perceives to have wronged it or violated some norm. (This is distinct from an agent deciding to punish norm violations for instrumental reasons.)
*   Group-specific spite: An agent may intrinsically value harming agents associated with a particular group.

(See the [appendix](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#Appendix__Notes_on_spite_in_humans_) for more notes on spiteful behavior in humans, including possible evolutionary mechanisms and analogs they might have in ML training.)  

There are two mechanisms by which spite might exacerbate risks of catastrophic outcomes from AI: 

1.  Making agents more likely to engage in (costly-to-them) conflict that leads to destruction of value rather than making a peaceful settlement. Conflict between AIs can significantly reduce the value of the future when at least one of the AIs involved is sufficiently intent-aligned (such that the AIs don’t simply ignore human preferences regardless of the conflict). As discussed in [this post](https://www.lesswrong.com/posts/cLDcKgvM6KxBhqhGq/when-would-agis-engage-in-conflict), costly conflict happens due to a risk-reward tradeoff that agents make under uncertainty about their counterpart’s bargaining policy. Spite can exacerbate conflict by making the costs of conflict lower and/or the rewards of winning a conflict higher. (Note however that spite does not *by definition* increase the expected costs of conflict.)
    1.  Specifically, since a spiteful agent intrinsically values the frustration of their counterpart’s preferences, they find it less subjectively costly when a conflict destroys material resources for both agents. And similarly, they find it more rewarding when they win a conflict because the counterpart ends up with a lower share of the resources.
    2.  Similarly, spite could make aligned AIs less likely to cooperate with each other to form alliances that can deter misaligned AIs.
2.  Making agents terminally value harming other agents under some conditions.

The reason for focusing on spite is that preferences are likely to be stickier than other aspects of an agent’s policy (because agents will generally work to preserve their preferences). Thus [even if alignment fails](https://www.alignmentforum.org/posts/fMJhfNZXFzCNpCL8v/when-is-intent-alignment-sufficient-or-necessary-to-reduce), if we are able to exhibit some stable influence on the spitefulness of agents’ preferences we might be able to indefinitely reduce the chances that they engage in destructive conflict, or cause harmful outcomes that they intrinsically value. (We discuss stability more [below](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#When_can_we_shape_a_misaligned_AI_s_goals_)).

How spite might arise in AI systems
===================================

We are concerned that AI systems might acquire a spiteful [inner objective](https://www.lesswrong.com/s/r9tYkB2a8Fp4DN8yB/p/pL56xPoniLvtMDQ4J). We have thought about four mechanisms by which spiteful inner objectives might be selected for in a system trained with ML.  

*   **Spite as commitment device.** A spiteful inner objective could be selected for because of its effects on other player’s beliefs. In particular, an inner objective that motivates spiteful behavior could be selected for because it causes other agents to believe that the agent is committed to bearing large costs in conflict, which in turn causes other agents to be more compliant with its demands than they otherwise would be.[^uwsgumg4a8l]
*   **Spite as direct proxy for reward.** A spiteful inner objective could also be selected for because it is a direct proxy for high reward, regardless of behavior changes it induces in other agents. Example:
    *   If agents in a multi-agent environment are selected on who has the highest fitness $f_i$,[^nrv5hg44adc] harming the other players such that their fitness is reduced increases $P\big(f_1=\max_i f_i\big)$ and is a direct proxy for player 1’s performance on the base objective. More generally, **training schemes in which the optimal thing to do is directly harm other players** may select for spite. 
*   **Spite as inferred preference/imitated behavior.** If an agent is trained using an imitation loss on demonstrations from a human who often retaliates even when it doesn’t benefit them, a spiteful objective may be a direct proxy for this loss. More generally, training schemes that involve learning from human preferences/demonstrations that are consistent with spite may select for spite.         
*   **Spite as other generalization failures.** Generalization failures may cause AIs to be spiteful even without one of the above mechanisms (or generalization failures could magnify small pressures towards spite in the training data).
    *   As an example, although the origin of vengeful tendencies in humans could be explained as a commitment device (i.e., a deterrent), people sometimes exhibit *disproportionate* vengeance. This could plausibly be explained as a generalization failure with respect to deterrence (see [appendix](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#Appendix__Notes_on_spite_in_humans_)). 

Interventions to prevent spite
==============================

The above mechanisms suggest a few ways that we can modify AI training to reduce the chances that AI systems are spiteful. 

*   Modifying the loss function. Examples: 
    *   Making the loss function more prosocial (i.e., giving agents some reward for benefiting other agents), to counter the effects of spite-rewarding components of the loss function;
    *   Adversarially searching for conflict-eliciting inputs and penalizing spiteful behavior;
    *   In environments where candidate models interact with one another, selecting models based on absolute, rather than relative, performance; 
*   Modifying the training distribution. Examples:
    *   Replacing zero-sum games in the training distributions with tasks that select for the same capabilities without selecting for spite (when this doesn’t interfere with adversarial alignment schemes like [Debate](https://www.lesswrong.com/tag/debate-ai-safety-technique-1)); 
    *   Removing environments that exhibit [strategic substitution](https://en.wikipedia.org/wiki/Strategic_complements)[^wv6poxw7lno] from the training distribution;
    *   In an imitation setting, instructing human overseers on what kinds of demonstrations to give in multi-agent settings so as to not select for spiteful imitation policies; 
    *   Filtering data (generated by humans or AI) intended for imitation learning. 

A few problems need to be solved to develop good interventions here: 

*   We want agents to sometimes punish other agents for uncooperative behavior or otherwise act in ways that risk conflict. So when is an agent behaving as desired vs. being spiteful? We need conceptual clarity on what counts as strong evidence for spite, as well as empirical work to develop good tests for spite (e.g. automatically testing hypotheses about whether an agent is spiteful vs. correctly engaging in conflict; using alignment tech to interrogate the reasoning behind punishments[^r2dfzc8u04h]).
*   Relatedly, we need to be able to demonstrate that interventions to reduce spite don’t significantly harm competitiveness. 

We think reducing spitefulness is moderately more likely to be net-positive than net-negative. The main positive intended effects were discussed [above](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_exacerbate_catastrophic_risks_from_AI). A potential backfire risk is that aligned AIs who are perceived as less spiteful are also likely to be offered worse deals by (misaligned) competitors. However, we expect this effect to be relatively small due to other agents systematically **underreacting** to increases in spite — that is, their behavior not depending much on (and in particular, not being deterred from conflict by) our interventions on our AI’s degree of spite. This is because other agents may either lack information about the factors determining the agent’s preferences, or have commitments that are upstream of any interventions on an agent’s spitefulness. Also, if we are correct in thinking that these interventions are most likely to be counterfactual in cases where alignment fails, then it seems more likely that we will be intervening on misaligned AIs, in which case this backfire risk doesn’t apply.

An important step in developing interventions would be to develop measures for evaluating conflict-relevant aspects of AI systems’ behavior.

When can we shape a misaligned AI’s goals?
------------------------------------------

As we said above, the reason for focusing on *preferences* that are conducive to catastrophic AI risk is that preferences are more likely than other aspects of an agent’s policy to remain stable over time. But it is *prima facie* difficult to shape an AI’s preferences at all conditional on it eventually being misaligned. Here we summarize some considerations bearing on whether we can predictably influence agents’ goals under “low alignment power”,[^nv11wamjfc] and what we might learn that could update us on the feasibility of doing so.   

Given that we think measures to prevent spite are most likely to make a difference in worlds where alignment fails, let’s assume a scenario similar to that in [Without specific countermeasures, the easiest path to transformative AI likely leads to AI takeover](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to): some rudimentary safety measures may be in place, but developers lack the motivation and/or ability to reliably prevent the AI from acquiring a misaligned goal, “playing the training game”, and taking over. Then, following [this](https://www.alignmentforum.org/posts/A9NxPTwbw6r6Awuwt/how-likely-is-deceptive-alignment) Hubinger post, let’s look at how an AI’s preferences might be formed in “high-” and “low path-dependence worlds”. 

### High path-dependence

In the high path-dependence world, things happen in this order:

1.  The AI’s policy is initially made up of proxy motivations $P_t$ which develop over time $t$, eventually allowing it to get high reward.   
2.  At some time $T$, some of these proxies “crystallize” into a relatively coherent goal $g(P_T)$*.*
3.  The AI has a good understanding of the training process at this point, and works out that the best thing to do to fulfill $g(P_T)$ is to act in a way that gets it high training reward, so that it can eventually get out into the real world.

We are trying to shape the training process such that the proxies $P_T$ and therefore (hopefully) the goal $g(P_T)$ are less spiteful. For example, we want to avoid agents learning proxies like “harm other agents under such-and-such circumstances” which might get crystallized into their final goals. For this to work, the following need to be true: 

*   (A) We are able to predict the relevant properties of proxies $P_T$ induced by different training processes with sufficient accuracy
*   (B) We are able to predict that the goal $g(P_T)$ that will result from these proxies is more or less spiteful.

It seems to us that the main way work directed at low alignment power + high path-dependence scenarios could be made obsolete is if the effect of any modification we could make to the training process either doesn’t affect the final goal at all or doesn’t affect it in any way we can predict. What could we learn about our ability to predictably influence an agent’s final goals that should convince us to abandon this line of work? Some ideas:  

*   (A) isn’t feasible, i.e., we’re not able to predict what proxies will result from the training process. We might gain information about this if:
    *   there are significant advances in our understanding of the inductive biases of neural networks (either theoretical or driven by interpretability work) that demonstrate whether neural networks learn the relevant kinds of proxies. For instance, we learn that even with extensive training in multi-agent mixed-motive environments, neural networks don’t learn proxies that depend on representations of the satisfaction or frustration of other agents’ preferences;[^zgfhng44uuo] 
    *   researchers design training environments intended to induce certain proxies, and see whether ML systems trained in these environments generalize as predicted. 
*   (B) isn’t feasible, i.e., we’re not able to predict how proxies will be resolved into the final goal. We might come to believe this if:
    *   there are significant advances in our understanding of neural networks which convince us that for relevant proxies $P_T$, $g(P_T)$ consistently lacks the relevant properties of the proxies *P~T~.* For example, even if we know that proxies $P_T$ included proxies that induced the agent to harm other agents in a wide range of circumstances, the resulting goal $g(P_T)$ never exhibits a terminal preference for harming other agents.[^7g25tzm1z4] This also seems like it would require huge advances in our understanding of neural networks.    

### Low path-dependence

In the low path-dependence world, all that matters are the optima of the training loss and the inductive biases of the model. In these worlds, it may still be possible for us to reduce the chances of a spiteful agent via our choice of loss function. For the purposes of this discussion, let’s say that the agent is inner-aligned to the training objective if it is intrinsically motivated to pursue some natural-to-us extrapolation of the loss function. Then we might be able to make a difference by choosing a less spite-conducive loss function, even if the loss function is outer-misaligned overall. For example, training in adversarial environments (e.g., in which the highest-scoring agent is selected) is arguably a case where inner alignment with the training objective could lead to spitefulness (cf. [spite as a direct proxy for reward)](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_arise_in_AI_systems). And so reducing the amount of training in adversarial environments might reduce spite in low path-dependence worlds.

Other conflict-prone preferences
================================

Spite isn’t the only kind of motivation that (i) plausibly exacerbates risks of AGI conflict and (ii) we could plausibly prevent even if alignment fails. Risk-seeking and excessive concern for honor or status are others, for example. We’ll likely think more about these, too.  

Appendix: Notes on spite in humans 
===================================

Here are some (not comprehensive) notes on apparent spitefulness in humans, including potential explanations for these preferences. Learning more about spite in humans might alert us to spiteful tendencies in human-provided training data, or evolutionary pressures towards spite that might have analogs in ML training.  

*   **Generalized spite.** A general preference for unconditionally imposing large costs on others is rare in humans.
    *   Aggression and costly harming behavior has a number of hypothetical adaptive benefits, including proactively signaling one’s willingness to pay the costs of conflict (e.g., over mates or scarce resources) (cf. [spite as commitment device](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_arise_in_AI_systems)); directly motivating cooptation of scarce resources or punishment (including [antisocial punishment](https://www.lesswrong.com/posts/X5RyaEDHNq5qutSHK/anti-social-punishment)) (cf. [spite as direct proxy for reward](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_arise_in_AI_systems)). 
    *   **ML analogues:** Including many zero-sum games in the training distribution could create pressures towards generalized spite (as minimizing others’ reward is a direct proxy for optimal performance in these settings – cf. [spite as a direct proxy](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_arise_in_AI_systems)). Including many games that exhibit [strategic substitution](https://en.wikipedia.org/wiki/Strategic_complements) (e.g., [Chicken](https://en.wikipedia.org/wiki/Chicken_\(game\))-like games) could create pressures towards generalized spite as a commitment device (cf. [spite as a commitment device](https://www.lesswrong.com/posts/92xKPvTHDhoAiRBv9/making-ais-less-likely-to-be-spiteful#How_spite_might_arise_in_AI_systems)).     
*   **Vengefulness and retribution.** A preference for punishing (some kinds of) perceived wrongdoing is ubiquitous in humans. There are fairly clear theoretical reasons to punish those who harm you and with whom you expect to interact again (deterrence). There is also theoretical and laboratory evidence for “third party punishment”, though apparently the ecological validity of these findings is disputed (Baumard 2010; Marlowe et al. 2011).
    *   Although deterrence is a likely explanation for vengefulness in humans, according to a review by Jackson et al. (2019), various pieces of evidence suggest that people are not consciously accounting for deterrence when deciding how to take revenge, and in fact may take revenge in ways that don’t make sense from the point of view of deterrence.[^3r4tar4hql5] To the extent that these findings are robust, this suggests either that vengefulness has generalized poorly with respect to the goal of deterrence or that there are reasons besides deterrence for the emergence of human vengefulness.   
    *   Extreme forms of retribution (e.g., condemning sinners to eternal torment) have been enshrined in various belief systems throughout history. (This is maybe an example of how evolutionary pressures and their ML analogs aren’t sufficient to predict generalization failures that lead to spite, and therefore the need for methods like adversarial training to look for emergent spite.)
    *   **ML analogues:** Training in multi-agent settings may select for harsh punishment policies, and in turn agents who are intrinsically motivated to harm perceived defectors. (Some AI training regimes could fail to select against excessively harsh punishments. As a toy example, if multi-agent training converges to an equilibrium supported by a [grim-trigger](https://en.wikipedia.org/wiki/Grim_trigger) punishment policy, then that policy won’t actually be invoked on-distribution and therefore harsh punishment won’t be selected against. Simplicity pressures could also push towards intrinsic preferences for punishment, if these are cognitively simpler or otherwise easier to locate than a strategy of choosing punishments based on purely instrumental considerations.).       
*   **Spite towards outgroups.** Preferences for imposing large harms on outgroup members are more widespread, and seem to have played a large role in historical genocides and war crimes. Animosity towards outgroup members has been hypothesized to have been selected for in the context of zero-sum competition between groups for opportunities to mate with their respective female members ((Choi and Bowles 2007; Tratner and McDonald 2019); cf. (Konrad and Morath 2012)). Kin selection, i.e., benefits to kin from harming less closely-related humans, may play a role here (Rusch 2014).    
    *   **ML analogues:** RL or evolutionary training in multi-agent environments that exhibit group structure (including analogues of “relatedness”; genetic algorithms?) and either scarce resources or selection on relative group-level fitness.
*   **Other spite-adjacent behaviors.** There are various human behaviors that aren’t necessarily driven by spiteful motivations, but could create pressures towards spiteful imitation policies/learned reward functions if exhibited in a learning-from-human-preferences context. For example, human negotiators frequently make a “fixed-pie error”, overestimating the extent to which their interactions are zero-sum (Caputo 2013). Apparently a “zero-sum bias” has been documented in other contexts, too (Meegan 2010). Other preferences like risk-seeking (and possible concomitant willingness to impose large material risks on others) or high concern for honor or status (and thus willingness to pay & impose large material costs to protect these) might also be in this category.     

Acknowledgements 
=================

*Thanks to Lukas Finnveden, Daniel Kokotajlo, Maxime Riché, and Filip Sondej for feedback on this document.*

References
==========

Baumard, Nicolas. 2010. “Has Punishment Played a Role in the Evolution of Cooperation? A Critical Review.” *Mind & Society* 9 (2): 171–92.

Bester, Helmut, and Werner Güth. 1998. “Is Altruism Evolutionarily Stable?” *Journal of Economic Behavior & Organization* 34 (2): 193–209.

Bolle, Friedel. 2000. “Is Altruism Evolutionarily Stable? And Envy and Malevolence?: Remarks on Bester and Güth.” *Journal of Economic Behavior & Organization* 42 (1): 131–33.

Caputo, Andrea. 2013. “A Literature Review of Cognitive Biases in Negotiation Processes.” *International Journal of Conflict Management* 24 (4): 374–98.

Choi, Jung-Kyoo, and Samuel Bowles. 2007. “The Coevolution of Parochial Altruism and War.” *Science* 318 (5850): 636–40.

Dekel, Eddie, Jeffrey C. Ely, and Okan Yilankaya. 2007. “Evolution of Preferences.” *The Review of Economic Studies, 74(3), 685–704.*  

Güth, Werner, and Hartmut Kliemt. 1998. “The Indirect Evolutionary Approach: Bridging The Gap Between Rationality And Adaptation.” *Rationality And Society* 10 (3): 377–99.

Heifetz, Aviad, and Ella Segev. 2004. “The Evolutionary Role of Toughness in Bargaining.” *Games and Economic Behavior* 49 (1): 117–34.

Heifetz, Aviad, Chris Shannon, and Yossi Spiegel. 2007. “The Dynamic Evolution of Preferences.” *Economic Theory* 32 (2): 251–86.

Jackson, Joshua Conrad, Virginia K. Choi, and Michele J. Gelfand. 2019. “Revenge: A Multilevel Review and Synthesis.” *Annual Review of Psychology* 70 (January): 319–45.

Konrad, Kai A., and Florian Morath. 2012. “Evolutionarily Stable in-Group Favoritism and out-Group Spite in Intergroup Conflict.” *Journal of Theoretical Biology* 306 (August): 61–67.

Marlowe, Frank W., J. Colette Berbesque, Clark Barrett, Alexander Bolyanatz, Michael Gurven, and David Tracer. 2011. “The ‘Spiteful’ Origins of Human Cooperation.” *Proceedings. Biological Sciences / The Royal Society* 278 (1715): 2159–64.

Meegan, Daniel V. 2010. “Zero-Sum Bias: Perceived Competition despite Unlimited Resources.” *Frontiers in Psychology* 1 (November): 191.

Possajennikov, Alex. 2000. “On the Evolutionary Stability of Altruistic and Spiteful Preferences.” *Journal of Economic Behavior & Organization* 42 (1): 125–29.

Rusch, Hannes. 2014. “The Evolutionary Interplay of Intergroup Conflict and Altruism in Humans: A Review of Parochial Altruism Theory and Prospects for Its Extension.” *Proceedings. Biological Sciences / The Royal Society* 281 (1794): 20141539.

Tratner, Adam, and Melissa McDonald. 2019. “Genocide and the Male Warrior Psychology.” *Confronting Humanity at Its Worst: Social Psychological Perspectives on Genocide*, 1.

[^uwsgumg4a8l]: This “commitment device” explanation for why humans have certain kinds of preferences — including altruism and spite — has been studied in the literature on “indirect evolutionary game theory” (Bester and Güth 1998; Güth and Kliemt 1998; Bolle 2000; Possajennikov 2000; Heifetz and Segev 2004). Indirect evolutionary game theory models agents as rationally optimizing for their subjective preferences (their “inner objective”), and these preferences are subject to selection based on the fitness (“outer objective”) they induce when optimized. 

[^nrv5hg44adc]: I.e., direct performance on some tasks in the given environment. 

[^wv6poxw7lno]: “Strategic substitution” is a property of payoff functions under which increasing “input” from one player reduces the marginal benefit of “input” from the other player. For example, in a game of Chicken, the greater the chance that I Dare, the lower your marginal returns to increases in the probability that you Dare. Environments with strategic substitution can select for agents that are spiteful (Possajennikov 2000; Heifetz, Shannon, and Spiegel 2007). 

[^r2dfzc8u04h]: It seems fairly clear that we should prevent AIs from carrying out punishments because they want to harm the transgressor per se, as opposed to because they want to deter bad behavior. Deciding what punishments are appropriate for the purposes of deterrence may be nontrivial. For example, in principle we might want to train AIs to have updateless punishment policies, but in practice this may be difficult (especially in the “low alignment power” regime where we think spite-reducing interventions are most likely to be counterfactual). 

[^nv11wamjfc]: “Alignment power” refers to the degree of influence humans have over AIs’ behavior. 

[^zgfhng44uuo]: We should expect that proxies based on other agents’ preferences are relatively more likely when other agents’ preferences are more directly observable. In indirect evolutionary game theory models, other-regarding preferences are not selected for if agents’ preferences are unobserved (Dekel et al. 2007). 

[^7g25tzm1z4]: The ability to predict the stabilized goal from proxies seems to be a point of contention around shard theory, where one criticism is that even if we can shape an agent’s initial “shards”, the way these are resolved into a stable, coherent goal will be highly unpredictable (e.g., see Nate Soares’ posts here and here). In our view the discourse thus far seems too underdeveloped to draw strong conclusions either way. 

[^3r4tar4hql5]: “Even though deterrence has been proposed as a major reason for the evolution of retaliatory aggression, it is unclear whether people actually take revenge with deterrence in mind (see Osgood 2017). When explicitly asked to justify their revenge, people will cite deterrence motives (Darley & Pittman 2003) and will report feeling better about revenge when it has affected a positive change (Funk et al. 2014). However, there is also evidence that these self-reports are post hoc rationalizations rather than true motives. For example, when people are calculating the appropriate severity of retributive punishment, they are more attuned to whether the punishment matches the original transgression than whether it deters future harm (Carlsmith & Darley 2008). People playing economic games will also take revenge when they know they will not encounter their partner again, which would not make sense if revenge was solely intended to deter future harm (Fehr & Gachter 2000). Interestingly, vengeful people often feel less safe from future harm ¨ than do nonvengeful people (Akın & Akın 2016), indicating that people do not commonly take revenge because they think it will protect them. This evidence suggests that, of the many proximal predictors of revenge, deterrence may be among the least influential.”