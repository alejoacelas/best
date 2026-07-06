---
title: "Beginner’s guide to reducing s-risks – Center on Long-Term Risk"
author: "Anthony DiGiovanni"
date: 2023-09-05
url: https://longtermrisk.org/beginners-guide-to-reducing-s-risks/
fetched: 2026-07-06
via: html2text
topic: "s-risks"
note: "CLR's beginner on-ramp: what s-risks are and concrete ways to reduce them; accessible core reading."
---

# Beginner’s guide to reducing s-risks

5 September 2023 by [Anthony DiGiovanni](https://longtermrisk.org/author/anthonydigiovanni/ "Posts by Anthony DiGiovanni")

Suffering risks, or s-risks, are “risks of events that bring about suffering in cosmically significant amounts” (Althaus and Gloor 2016).1 This article will discuss why the reduction of s-risks could be a candidate for a top priority among altruistic causes aimed at influencing the long-term future. The number of sentient beings in the future might be astronomical, and certain cultural, evolutionary, and technological forces could cause many of these beings to have lives dominated by severe suffering. S-risks might result from unintended consequences of pursuing large-scale goals (“ _incidental_ s-risks”), intentional harm by intelligent beings with influence over many resources (_agential_), or processes that occur without agents’ intervention (_natural_) (Baumann 2018a).

Efforts to reduce s-risks generally consist of researching factors that likely exacerbate these three mechanisms (especially emerging technologies, social institutions, and values), applying insights from this research (e.g., recommending principles for the safe design of artificial intelligence), and building the capacity of future people to prevent s-risks.

**Summary:**

  * Due to coming advances in space settlement and technology—which on Earth has historically enabled massive increases in suffering, despite plausibly increasing the average human quality of life—it is possible that there are risks of suffering on a scale that is significant relative to the scale of the long-term future as a whole. (more)
  * Although it is very difficult to predict the effects of interventions on the long-term future, efforts to reduce s-risks might be sufficiently predictable and stable by taking one of two approaches: (1) identifying factors in the near future that could lock in states leading to massive suffering, or (2) putting future generations in a better position to make use of information they will have about impending s-risks. (more)
    * One important risk factor for such lock-in is the deployment of powerful artificially intelligent (AI) agents, which appears technically feasible in the next few decades and could lead to a future shaped by goals that permit causing astronomical suffering. (more)
    * Solving the problem of alignment of AI systems with human intent does not appear to be sufficient or necessary to prevent s-risks from AI. (more)
  * Preventing intense suffering is the top priority of several plausible moral views, and given that it is a sufficiently high priority of a wide variety of other views as well, accounting for moral uncertainty suggests that s-risk reduction is an especially robust altruistic cause. (more)
  * Reducing s-risks by a significant amount might be generally more solvable than other long-term priorities, though this is unclear. On one hand, the worst s-risks seem much less likely than, e.g., risks of human extinction. This limits the value of s-risk reduction according to perspectives on which the expected moral value of posthuman civilization is highly positive. That said, marginal efforts at s-risk reduction may be especially valuable because s-risks are currently very neglected, and avoiding worst cases may be easier than fully solving AI alignment or ensuring a utopian future. (more)
  * Focusing on preventing worst-case outcomes of suffering appears more promising than moving typical futures towards those with no suffering at all, because it is plausible that some futures could be far worse than typical. (more)
  * Incidental s-risks could result from the exploitation of future minds for large-scale computations needed for an interstellar civilization, detailed simulations of evolution, or spreading wildlife throughout the universe without considering the suffering of the organisms involved. (more)
  * Agential s-risks could result from malevolent or retributive agents gaining control over powerful technology, or from AIs that deliberately create suffering. (more)
  * Natural s-risks could result from future civilizations not prioritizing reducing unnecessary suffering, for reasons similar to the persistence of wild animal suffering on Earth. (more)
  * Targeted approaches to s-risk reduction might be preferable to more broad alternatives, as far as they avoid unintentionally influencing many variables in the future, which could backfire. The most robust of these approaches include: research into AI designs that decrease their tendencies towards destructive conflicts or reduce near-miss risks; some forms of decision theory research; promotion of coordination between and security within AI labs; and research modeling s-risk-relevant properties of future civilizations. (more)
  * Broad approaches to s-risk reduction have the advantage of potentially improving a wider range of possible futures than targeted ones. Examples of these include: advocating moral norms against taking risks of large-scale suffering; promoting more stable political institutions that are conducive to compromise; and building knowledge that could be used by future actors who are in positions to prevent s-risks. (more)



Contents

  * 1\. Introduction 
  * 2\. Prioritization of s-risks
    * 2.1. Premise 1: Longtermism
      * 2.1.1. Artificial intelligence: a key technology for the long-term future
    * 2.2. Premise 2: Focus on preventing intense suffering
      * 2.2.1. Normative considerations: the moral importance of suffering
      * 2.2.2. Empirical considerations: practical reasons to prioritize severe suffering
    * 2.3. Premise 3: Focus on worst-case outcomes
  * 3\. Classes of s-risks and their potential causes
    * 3.1. Incidental s-risks
    * 3.2. Agential s-risks
    * 3.3. Natural s-risks
  * 4\. Approaches to s-risk reduction
    * 4.1. Targeted approaches
    * 4.2. Broad approaches
    * Next steps
      * Acknowledgments
      * References
      * Footnotes



## 1\. Introduction 

In the future, humans and our descendants might become capable of very large-scale technological and civilizational changes, including extensive space travel (Armstrong and Sandberg 2013), developments in artificial intelligence, and the creation of institutions whose stability is historically unprecedented. These increasing capabilities could significantly impact the welfare of many beings. Analogously, the Industrial Revolution drastically accelerated economic growth while leading to the suffering of billions of animals via factory farming.

Further, in the long-term future, the universe will plausibly contain numbers of sentient beings far greater than the current human and animal populations on Earth (MacAskill 2022, Ch 1). Astronomically large populations may result from widespread settlement of space and access to resources that far exceed those on Earth, either by biological organisms or digitally emulated minds (Beckstead 2014; Hanson 2016; Shulman and Bostrom 2021). Depending on their mental architectures, digital minds might have the capacity to suffer according to some theories of consciousness (though this is a philosophically controversial position).2 Thus, the total moral weight of these minds’ suffering could be highly significant for the prioritization of altruistic causes.

If one considers it highly important to promote the welfare of future beings, a strong candidate priority is to reduce s-risks, in which large numbers of future beings undergo intense involuntary3 suffering. Even if one is overall optimistic about the long-term future, avoiding these worst cases may still be a top priority.

Effectively reducing s-risks requires identifying ways such massive amounts of suffering could arise. Although catastrophes of this scale are unprecedented, one discrete event that plausibly caused a large fraction of total historical suffering on Earth was the rise of factory farming; since 1970, at least 10 billion land animals per year have been killed for global meat production, rising to about 70 billion by 2020 (Ritchie, Rosado, and Roser 2017). Unlike the suffering caused by factory farming, some s-risks might be intentional. Similarly to historical acts of systematic cruelty by dictators, future actors might also deliberately cause harm (Althaus and Baumann 2020). As discussed in Section 3, highly advanced future technologies used by agents willing to cause massive suffering in pursuit of their goals (intentionally or not) have been hypothesized to be the most likely foreseeable causes of s-risks. Research focused on s-risks and implementations of interventions to reduce them began only recently, however (see, e.g., Tomasik 2015a), and so further investigation may identify other likely sources.

The rest of this article will discuss the premises behind prioritizing s-risks, specific potential causes of different classes of s-risks, and researchers’ current understanding of the most promising interventions to reduce them.

## 2\. Prioritization of s-risks

Arguments for prioritizing s-risk reduction as an altruistic cause have generally relied on three premises (Baumann 2020a; Gloor 2018):

  1. We ought to focus on influencing the long-term future, because (a) doing so could affect a large majority of beings with moral standing, and (b) it is feasible to predictably have a positive influence on these beings. (This premise is known as _longtermism_(Greaves and MacAskill 2021).)
  2. Reducing the expected amount of intense suffering is a fundamental moral responsibility, and ought to be among the top priorities in the portfolio of longtermist causes based on several credible moral views.
  3. The most effective way to reduce expected long-term intense suffering, accounting for tractability, is to aim to avoid the worst plausible outcomes of such suffering.



Note that some approaches to reducing s-risks are sufficiently broad that they might also reduce near-term suffering, promote other values besides relief of suffering, or improve non-worst-case futures (see Section 4.2).

### 2.1. Premise 1: Longtermism

Longtermism consists of both a claim about the moral importance of future beings, and our ability to help them. The normative premise 1(a) has been defended at length in, e.g., (Beckstead 2013; MacAskill 2022, Ch. 1; Cowen and Parfit 1992). Even if one agrees with this normative view, one might object to the empirical premise 1(b) (in the context of s-risk reduction) on the following grounds: The probability of s-risks, like that of other long-term risks, might be highly sensitive to factors about which present generations will remain largely uncertain (Greaves 2016; Tarsney 2022). Thus, it might be too hard to determine which actions will _reduce_ s-risks in the long term. Given this problem, called _cluelessness_ , it is also unclear how feasible it is to reduce s-risks by attempting to make small near-term changes that compound over time into a large, positive impact. The process of compounding positive influence could be stopped, or changed into negative influence, by highly unpredictable factors.

One response to this objection is that it could be tractable to affect the likelihood of potential _persistent states_ , which are world states that, once entered, are not exited for a very long time (if ever) (Greaves and MacAskill 2021). These persistent states could have different probabilities of s-risks.

Suppose that, in the near term, the world could enter a persistent state that is significantly more prone to s-risks than some other feasible persistent state. Suppose also that certain interventions can foreseeably make the latter state more likely than the former. That is, the former state is an avoidable scenario where some technology, natural force, or societal structure “locks in” conditions for eventual large-scale suffering. (Sections 2.1.1 and 3 discuss potential causes of lock-in that are relevant to s-risks.)

Then these interventions would be less vulnerable to the cluelessness objection, because one would only need to account for uncertainties about relatively near-term effects that push towards different persistent states. It might still be highly challenging, however, to identify which persistent states are more prone to s-risks than others, or how to prevent gradual convergence towards persistent states with s-risks.

Besides steering away from s-risk-prone persistent states, another approach that could avoid cluelessness would be to build favorable conditions for future generations to reduce s-risks, who will have more information about the factors that could exacerbate them. This strategy still requires identifying features that would tend to enable future people to reduce s-risks, rather than hinder reduction or enable increases. One potentially robust candidate discussed in Section 4.2 is promoting norms against taking actions that risk causing immense suffering.

#### 2.1.1. Artificial intelligence: a key technology for the long-term future

Artificial intelligence (AI) may enable the risk factors for s-risks discussed in the introduction: space settlement, deployment of vast computational resources by agents willing to cause suffering, and value lock-in (Gloor 2016a, MacAskill 2022, Ch. 4; Finnveden et al. 2022). At a general level, this is because AI systems automate complex tasks in a way that can be scaled up far more than human labor (e.g., via copying code), they can surpass human problem-solving by avoiding the constraints of a biological brain, and they may be capable of consistently optimizing certain goals.

Systems designed with machine learning algorithms, including reinforcement learning agents trained to select actions that maximize some reward, have outperformed humans at finding solutions to tasks in an increasing number of domains (Silver et al. 2017; Evans and Gao 2016; Jumper et al. 2021). Both reinforcement learning agents and large language models—programs produced by machine learning that use significant amounts of data and compute to predict sequences—have demonstrated capabilities that generalize across a wide variety of tasks they were not directly designed to perform (DeepMind 2021; Reed et al. 2022; OpenAI 2023, “GPT-4 Technical Report”). If these advances in the depth and breadth of AI capabilities continue, AI systems could develop into generally intelligent agents, which implement long-term plans culminating in the use of resources on scales larger than those of current civilizations on Earth.

Given that AI could apply such general superhuman abilities to large-scale goals, influencing the development and use of AI is plausibly one of the most effective ways to reduce s-risks (Gloor 2016a).4 Sections 3.1 and 3.2 outline ways that AI could cause s-risks, and Section 4.1 discusses specific classes of interventions on AI that researchers have proposed. (More indirect interventions on the values and social institutions that influence the properties of AIs, as discussed in Section 4.2, may also be tractable alternatives.)

Broadly, AI agents with goals directed at increasing suffering or vengeful motivations (e.g., due to selection pressures similar to those responsible for such motivations in humans) would be able to efficiently create enough suffering to constitute an s-risk, if they acquired enough power to avoid interference by other agents. Alternatively, if creating large amounts of suffering is instrumental to an AI’s goals, then, even without “wanting” to cause an s-risk, this AI would be willing and able to do so.

Further, two properties of AI make it a technology that is important to influence given a focus on persistent states. First, relevant experts forecast that human-level general AI is likely to be developed this century. This means that current generations might be able to shape the initial conditions of the development and use of the next iteration—superhuman AI—that could cause s-risks. Interventions on AI could thus be relatively urgent, among longtermist priorities. For example, in a survey of leading machine learning researchers, the median estimate for the date when “unaided machines can accomplish every task better and more cheaply than human workers” was 2059 (Stein-Perlman et al. 2022).5 See also Cotra (2020).

Second, to the extent that a general AI is an agent with certain terminal goals (i.e., goals for their own sakes, as opposed to instrumental goals), it will have strong incentives to stabilize these goals if it is technically capable of doing so (Omohundro 2008). That is, because the AI evaluates plans according to its current goals, it will (in general) tend to ensure that future modifications or successors of itself also optimize for the same goals.

These considerations suggest that the development of the first AI capable of both winning a competition with other AIs and locking in its goals, including preventing human interference with those goals (Bostrom 2014, Ch. 5; Karnofsky 2022; Carlsmith 2022), could initiate a persistent state. Avoiding training AIs with goals that motivate creation of cosmic-scale suffering, then, is a potential priority within s-risk reduction that may not require anticipating many contingencies far into the future.

### 2.2. Premise 2: Focus on preventing intense suffering

As Baumann (2020a) notes, premise 2 is both normative and empirical; it is a claim about both one’s moral aims, and how effective suffering reduction is at satisfying those aims.

#### 2.2.1. Normative considerations: the moral importance of suffering

A variety of moral views hold that we have a strong responsibility to prevent atrocities involving extreme, widespread suffering.

Variants of suffering-focused ethics (Gloor 2016b; Vinding 2020a) hold that the intrinsic moral priority of reducing (intense) suffering is significantly higher than that of other goals. In particular, on some views suffering is measurably more important: when comparing two acts, the one that causes or permits a greater net increase in suffering is acceptable only if it also ensures a much greater amount of good things.6,7 On other views, such as negative utilitarianism, (intense) suffering has _lexical_ priority: for some forms of suffering, an act that does not lead to a net increase in such suffering is always preferable to one that does (Vinding 2020a, Ch. 1; Knutsson 2016).

Alternatively, there are views according to which suffering does not always have priority, but avoiding futures where many beings have lives not worth living is a basic duty. One might endorse _the Asymmetry_ : the creation of an individual whose life has more suffering than happiness (or other possible goods) is bad, but the creation of an individual whose life has more goods than suffering is at best neutral (Thomas 2019; Frick 2020). Unlike the former views, the Asymmetry does not imply that reducing suffering takes priority over, e.g., increasing happiness among _existing_ beings. Commonly held views maintain that adding a miserable life to a miserable population is just as bad no matter how large the initial population size is, but increasing numbers of happy lives has diminishing returns in value (Vinding 2022b).

One could also hold that, without committing to a particular stance on the intrinsic value or disvalue of different lives or populations, we have a responsibility to avoid foreseeable risks of extremely bad outcomes for other beings (who are not directly compensated by upsides). See the concept of “minimal morality” (Gloor 2022).

Any of these classes of normative views, when applied to long-term priorities, would recommend focusing on preventing the existence of lives dominated by suffering. By contrast, several prominent views, such as classical utilitarianism and some forms of pluralist consequentialism (Sinnott-Armstrong 2022), hold that ensuring the existence of profoundly positive experiences or life projects can take priority over reducing risks of suffering if those risks are relatively improbable.8 (See also critiques of the Asymmetry, e.g., Beckstead (2013).) According to these views, whether s-risks should be prioritized over increasing the chance of a flourishing future and reducing risks of human extinction depends on one’s empirical beliefs (see next section). Other alternative longtermist projects include the reduction of risks of stable totalitarianism (Caplan 2008), improvement of global cooperation and governance, and promotion of moral reflection (Ord 2020, Ch. 7).

Normative reasons for prioritizing s-risk reduction may be action-guiding even for those who do not consider suffering-focused views more persuasive than alternatives. According to several approaches to the problem of decision-making under uncertainty about moral evaluations (MacAskill et al. 2020), the option one ought to take might not be the act that is best on the moral view one considers most likely. Rather, the recommended act could be one that is robustly positive on a wide range of plausible views. Then, although reducing s-risks might not be the top priority of most moral views, including one’s own, it may be one’s most favorable option because most views agree that severe suffering should be prevented (while they disagree on what is positively valuable). This consideration of moral robustness arguably favors efforts to improve the quality of future experiences, rather than increase the absolute number of future experiences (Vinding and Baumann 2021). 

On the other hand, accounting for moral uncertainty could favor other causes. It has been argued that, under moral uncertainty, the most robustly positive approach to improving the long-term future is to preserve _option value_ for humans and our descendants, and this entails prioritizing reducing risks of human extinction (MacAskill). That is, suppose we refrain from optimizing for the best action under our current moral views (which might be s-risk reduction), in order to increase the chance that humans survive to engage in extensive moral reflection.9 The claim is that the downside of temporarily taking this suboptimal action, by the lights of our current best guess, is outweighed by the potential upside of discovering and acting upon other moral priorities that we would otherwise neglect.

One counterargument is that futures with s-risks, not just those where humans go extinct, tend to be futures where typical human values have lost control over the future, so the option value argument does not privilege extinction risk reduction. First, if intelligent beings from Earth initiate space settlement before a sufficiently elaborate process of collective moral reflection, the astronomical distances between the resulting civilizations could severely reduce their capacity to coordinate on s-risk reduction (or _any_ moral priority) (MacAskill 2022, Ch. 4 _;_ Gloor 2018). Second, if AI agents permanently disempower humans, they may cause s-risks as well. To the extent that averting s-risks is more tractable than ensuring AIs do not want to disempower humans at all (see next section), or one has a comparative advantage in s-risk reduction, option value does not necessarily favor working on extinction risks from AI.

#### 2.2.2. Empirical considerations: practical reasons to prioritize severe suffering

Without necessarily endorsing the moral views discussed above, one might believe it is easier to reduce severe suffering with some amount of marginal effort than to increase goods or decrease other bads (Vinding 2020, Sec. 14.4). Given this, reducing suffering would have higher practical priority. For example, preventing long-term intense suffering could be easier to the extent that much less effort is currently devoted to s-risk reduction than to other efforts to improve the long-term future, such as prevention of human extinction (Althaus and Gloor 2016). This is because, for more neglected efforts, the most effective opportunities are less likely to have been already taken.

That said, even if deliberate attempts to reduce s-risks are neglected, the most effective means to this end can converge with interventions towards other goals, in which case the problem would not be practically as neglected as it appears. For instance, as discussed in Section 4.2, it is arguable that reducing political polarization reduces s-risks, but many who are not motivated by s-risk reduction in particular work on reducing polarization, because they want to enable more effective governance. But see Section 4.1 for discussion of potential opportunities to reduce s-risks that appear unlikely to be taken by those focusing on other goals.

Another possibility is that, while a conjunction of desirable conditions are required to create a truly utopian long-term future, a massive increase in suffering is a relatively simple condition and thus easier to prevent (Althaus and Gloor 2016; DiGiovanni 2021). In particular, even if human extinction is prevented, whether the future is optimized for flourishing depends on which values gain power. However, see Section 2.3 for brief discussion of whether s-risks are so unlikely that the value of reducing them is lower than that of aiming to increase the amount of flourishing.

Besides these general considerations, s-risk reduction could be a relatively tractable longtermist goal to the extent that the most plausible causes of human extinction are very difficult to prevent. Alignment of AI with the intent of human users, for instance, has been argued to be a crucial source of extinction risk (Bostrom 2014; Ord 2020). But it is also commonly considered a fundamentally challenging technical problem (Yudkowsky 2018; Christiano, Cotra, and Xu 2021; Hubinger et al. 2019; Cotra 2022), in the sense that, even if alignment failure is not highly likely by default, reducing the probability of misalignment close to zero is very difficult.10 Preventing misalignment may require fundamental changes to the default paradigm of AI development, e.g., developing highly sophisticated methods for interpreting large neural networks (Hubinger 2022).

By contrast, reducing s-risks from AI (see Sections 3.1 and 3.2) may require only solving certain subsets of the problem of controlling AI behavior, via coarse-grained steering of AIs’ preferences and path-dependencies in their decision-making (Baumann 2018b; Clifton, Martin, and DiGiovanni 2022a). (Note that for these subproblems to be high-priority, they need to be sufficiently nontrivial or non-obvious that they might not be solved without the efforts of those aiming to prevent s-risks.) Further, preventing s-risks caused by malevolent human actors may be easier than finding ways to predictably influence AI, which might behave in ways that are much harder to model than other people.

### 2.3. Premise 3: Focus on worst-case outcomes

Finally, premise 3 relies on a model of the future in which:

(a) Large fractions of expected future suffering are due to a relatively small set of factors, over which present generations can have some influence.

(b) Compared to the amount of suffering that could be reduced by steering from the median future toward one with no suffering, many times more suffering could be reduced by steering from worst-case outcomes toward the median future (Gloor 2018).

If (a) were false, we would not expect to find singular “events” responsible for “cosmically significant amounts” of severe suffering that intelligent agents could prevent. As an analogy, if there is no single root cause of the majority of mental illnesses, someone aiming to promote mental health may need to prioritize among individualized treatments for many different illnesses. Section 3 will discuss relatively simple factors that plausibly determine large shares of future suffering.

Rejecting (b) would entail a greater focus on abolishing the sources of presently existing suffering (Pearce 1995), which one might expect to persist into the long-term future by default, and for which we have more direct evidence than for s-risks. There are two broad arguments for (b):

  * First, it could be that if no s-risks occur, the elimination of severe suffering is likely by default (particularly if AI alignment succeeds). That is, without deliberate interventions by present generations, future people will already be both willing and, through technological advances, able to reduce familiar causes of suffering such as congenital diseases and poverty. This would make the suffering abolition project less time-sensitive than preventing lock-in events.
    * This prediction is supported by historical trends of increasing metrics of human health (Ortiz-Ospina and Roser 2016) and life satisfaction (Ortiz-Ospina and Roser 2013), and increasing inclusion of more sentient beings in people’s “moral circles” of consideration (Singer 2011). Developments in cultivated meat, dairy, and eggs may eliminate demand for animal products as well (Cohen et al. 2021).11
    * It has also been argued that biological suffering will not be predominant in the long-term future because, compared to biological minds, digital minds can be created (and designed for happiness) more efficiently and could be more productive (Shulman and Bostrom 2021; Sotala 2012; Hanson 2016). On the other hand, it is uncertain how willing future intelligent agents will be to reduce the suffering of wild animals, and analogous beings on other planets, without advocacy in the near term; Section 3.3 discusses this consideration further.
  * Second, even assuming that contemporary causes of suffering persist indefinitely, the amount of suffering in the observable universe is arguably _relatively_ low compared to what it could become. For example, based on current evidence, there do not yet exist advanced civilizations conducting large-scale settlement of space, creating sentient minds that vastly outnumber the default populations of Earth-like planets. This suggests that the potential for the future to become much worse than “business as usual” far exceeds the potential impact of abolishing suffering from typical futures (Gloor 2018). 



Implicit in premise 3 is the claim that the worst cases of potential future suffering are not so extremely unlikely as to be practically irrelevant, that is, the _expected_ suffering from s-risks is large. One can assess the plausibility of the specific mechanisms by which s-risks could occur, and the historical precedents for those mechanisms, given in Section 3. Some general reasons to expect s-risks to be very improbable are the lack of direct empirical evidence for them, and the incentives for most intelligent agents to shape the future according to goals other than increasing suffering (Brauner and Grosse-Holz 2018). However, broadly, trends of technological progress could both enable space settlement and increase the potential of powerful agents to vastly increase suffering, conditional on having incentives to do so (without necessarily _wanting_ more suffering) (Baumann 2017a).

## 3\. Classes of s-risks and their potential causes

To clarify which s-risks are possible and the considerations that might favor focusing on one cluster of scenarios over others, researchers have developed the following typology of s-risks (Baumann 2018a).

### 3.1. Incidental s-risks

An s-risk is _incidental_ if it is a side effect of the actions of some agent(s), who were not trying to cause large amounts of suffering. In the most plausible cases of incidental s-risks, agents with significant influence over astronomical resources find that one of the most efficient ways to achieve some goal also causes large-scale suffering.

Inexpensive ways to produce desirable resources might entail severe suffering. Slavery is an example of an institution that has produced historically significant suffering by this mechanism. In general, the suffering caused by slaveholders is not intentional (not including corporal punishments), but it has been permitted because of a lack of moral consideration for the victims.12 The treatment of future beings similarly to people in slavery could constitute an s-risk, particularly if values that permit such treatment become locked in by technology like AI. Future agents in power could force astronomical numbers of digital beings to do the computational work necessary for an intergalactic civilization. And it is unclear how feasible it would be to design these minds to experience little or no suffering (Tomasik 2014). If doing so is very easy, an s-risk from this cause is unlikely by default. If not, then for some agents there may not be a sufficiently strong incentive to make the effort of preventing this s-risk.

Alternatively, it is _prima facie_ likely that if interstellar civilizations interested in achieving difficult goals exist in the future, they will have strong incentives to improve their understanding of the universe. These civilizations could cause suffering to beings used for scientific research, analogous to current animal testing and historical nonconsensual experimentation on humans. Specifically, if it is technically feasible for future civilizations to create highly detailed world simulations, it is plausible that they will do so for purposes such as scientific research (Bostrom 2003). In contrast to the kinds of simple, coarse-grained simulations that are possible with current computers, much more advanced simulations might have two important features:

  1. They could provide more accurate information for forecasts that help with complex planning, suggesting that a wide variety of possible civilizations would have an incentive to use them.
  2. By faithfully representing the detailed features of some world, they might instantiate sentient beings. For example, suppose future civilizations wanted to predict the properties of other potential intelligent civilizations in the observable universe, in order to avoid harmful interactions with them. Within their fine-grained simulations of the evolution of different kinds of life, there might be many generations of organisms suffering due to Darwinian forces (Gloor 2016a). To preserve the fidelity of the simulations (or simply to save time and effort), the agents running them might not prevent these computations of suffering by default.



Finally, an s-risk could result if Earth-originating agents spread wildlife throughout the accessible universe, via terraforming or directed panspermia. Suppose these agents do not protect the animals that evolve on the seeded planets from the usual causes of suffering under Darwinian competition, such as predation and disease (Horta 2010; Johannsen 2020). Then the amount of suffering experienced over the course of Earth’s evolutionary history would be replicated (on average) across large numbers of planets.

Again, the incentives to create biological life in the long-term future might be relatively weak. However, agents who—like many current people—intrinsically value undisturbed nature would not find creation of digital minds to be sufficient, and they would consider the benefits of propagating natural life worth the increase in suffering.

### 3.2. Agential s-risks

An s-risk is _agential_ if it is intentionally caused by some intelligent being. Although deliberate creation of suffering appears to be an unlikely goal for any given agent to have, researchers have identified some potential mechanisms of agential s-risks, most of which have precedent.

Powerful actors might intrinsically value causing suffering, and deploy advanced technologies to satisfy this goal on scales far larger than current or historical acts of cruelty. Malevolent traits known as the Dark Tetrad—Machiavellianism, narcissism, psychopathy, and sadism—have been found to correlate with each other (Althaus and Baumann 2020; Paulhus 2014; Buckels et al. 2013; Moshagen et al. 2018). This suggests that individuals who want to increase suffering may be disproportionately effective at social manipulation and inclined to seek power. If such actors established stable rule, they would be able to cause the suffering they desire indefinitely into the future.

Another possibility is that of s-risks via retribution. While a preference for increasing suffering indiscriminately is rare among humans, people commonly have the intuition that those who violate fundamental moral or social norms deserve to suffer, beyond the degree necessary for rehabilitation or deterrence (Moore 1997). Retributive sentiments could be amplified by hostility to one’s “outgroup,” an aspect of human psychology that is deeply ingrained and may not be easily removed (Lickel 2006). To the extent that pro-retribution sentiments are apparent throughout history (Pinker 2012, Ch. 8), values in favor of causing suffering to transgressors might not be mere contingent “flukes.” These values would then be relatively likely to persist into the long-term future, without advocacy against them. As with malevolence, s-risks may therefore be perpetrated by dictators who inflict disproportionate punishments on rulebreakers, especially if such punishments can be used as displays of power.

Recalling the discussion in Section 2.1.1, AI agents could have creation of suffering as either an intrinsic or instrumental goal, and pursue this goal on long timescales due to the stability of their values. This could occur for several reasons:

  1. By mechanisms similar to those of the evolution of human malevolent traits, the processes by which an AI is trained may select for preferences to cause harm to others, either unconditionally or for retribution (Possajennikov 2000; Heifetz, Shannon, and Spiegel 2007; DiGiovanni, Macé, and Clifton 2022). Thus, some approaches to AI development may unintentionally yet systematically favor this malevolent preference. Alternatively, AI training on human data could result in imitation of vengeful tendencies (as exhibited by Bing’s chatbot, for example) (De Vynck, Lerman, and Tiku 2023).
  2. If an AI’s goals or the values that humans intend to instill with its training process include reducing suffering, it might be relatively easy for an error in training to make the AI want to _increase_ suffering (a [“near miss” scenario](https://arbital.com/p/hyperexistential_separation/)). Intuitively, there is a large space of possible goals that an agent could have, most of which are indifferent to suffering (Bostrom 2012). These goals do not regard suffering as an important feature of the world in general, and so most possible failures of alignment of an AI’s goals with humans’ are unlikely to result in an AI that wants to increase suffering. By contrast, a training procedure that almost succeeds at value alignment would be vulnerable to possibly creating an s-risk-increasing AI, because it makes suffering a highly relevant factor in the AI’s decision-making. The research lab OpenAI encountered a low-stakes case of this effect: a language model was intended to be trained to minimize outputs that people rated poorly, but a bug resulted in the model _maximizing_ these outputs (Ziegler et al. 2019). More generally, an AI that cares about sentient minds in general but has a flawed conception of happiness could intentionally maximize the number of minds in states of suffering (Bostrom 2014, Ch. 8).
  3. Conflicts between AIs with different goals could result in s-risks, analogous to the suffering caused by wars to date. When the AIs fail to reach a cooperative compromise, they may create disvalue as a strategic tactic even if none of the AIs involved intrinsically wants to cause harm. An AI that might cause this kind of s-risk would have an incentive to avoid this outcome, which is worse for all parties after the fact. However, to the extent that we can model superhuman AIs as game-theoretically rational actors, the well-studied causes of conflict between rational human actors would apply to interactions between these AIs as well (Fearon 1995; Clifton, Martin, and DiGiovanni 2022a).



### 3.3. Natural s-risks

An s-risk is _natural_ if it occurs without the intervention of agents. A significant share of future suffering could be experienced by beings in the accessible universe who do not have access to advanced technology; hence, these beings would be unable to produce abundant resources (food, medicine, etc.) that ensure comfortable lives. The lack of apparent extraterrestrial intelligent beings does not necessarily imply that, on the many planets capable of sustaining life—potentially billions in the Milky Way (Wendel 2015)—there are no _sentient_ beings.13

The reasons that humans currently do not relieve wild animal suffering, for example via vaccine and contraception distribution (Edwards et al. 2021; Eckerström-Liedholm 2022), might persist into the long-term future. Specifically, intelligent agents may a) be morally indifferent to extraterrestrial beings’ suffering, b) prioritize other goals (such as developing flourishing civilizations, or avoiding disturbing these beings’ natural state) despite having some moral concern, or c) consider it too intractable to intervene without accidentally increasing suffering.

Case (c) would grow less likely as spacefaring civilizations develop forecasting technologies assisted by AI. It is highly uncertain whether the evolution of moral attitudes would match case (a). Concern for wild animal suffering might remain low, because it is (usually) not actively caused by human intervention and so may be judged as outside the scope of humans’ moral responsibility (Horta 2017). On the other hand, under the hypothesis that people largely tend to morally discount suffering when they are unable to prevent it, we would predict increased support for reducing natural suffering as civilization’s technological ability to do so increases. Future intelligent beings might prefer to focus on advancing their own civilizations, however, rather than invest in complex efforts to improve extraterrestrial welfare, or intrinsically prefer leaving nature undisturbed. Thus, case (b) is a plausible possibility unless agents with at least moderate concern for extraterrestrial suffering gain sufficient influence.

Notably, some attempts to reduce natural s-risks may unintentionally increase incidental and agential s-risks. For example, increasing the chance that human descendants settle space would enable them to relieve natural suffering beyond Earth, but this would also put them in a position to increase suffering through influence over astronomical resources. The most robust approaches to reduce natural s-risks, therefore, would entail increasing future agents’ willingness to assist extraterrestrial beings _conditional_ on already conducting space settlement. See also Section 4.2 for discussion of ways that one of the most tractable interventions to reduce natural s-risks, moral circle expansion, may not be robustly positive.

## 4\. Approaches to s-risk reduction

Researchers have proposed a variety of methods for reducing s-risks, suited to the classes discussed above and the different causes within each class. An effective intervention by current actors against s-risks needs to reliably prevent some precondition for s-risks in a way that (a) is sensitive to near-term factors rather than inevitable (_contingent_), and (b) does not easily change to some other state over time (_persistent_) (MacAskill 2022, Ch. 2). Searching for near-term sources of lock-in is a notable strategy for satisfying these two properties, as discussed in Section 2.1. Two plausible ways to prevent lock-in of increases in suffering are shaping the goals of our descendants and shaping the development of AI.

However, human societies and AI are both highly complex systems, and it is likely too difficult to do better than form coarse-grained models of these systems with considerable uncertainty. Given this problem and how recently s-risks were proposed as an altruistic priority, much of current s-risk reduction research is devoted to identifying interventions that are robust to inevitable errors in our current understanding (under which naïve interventions could backfire).

Below, both targeted and broad classes of interventions are considered; it is unclear which of these is favored by accounting for such “deep uncertainty” (Marchau et al. 2019). Targeted approaches are generally less likely to have backfire risks, by restricting one’s intervention to a few factors that one can relatively easily understand. However, broad approaches have the advantage that they may rely less strongly on a specific model of a path to impact, which is brittle to crucial factors one might not consider, and therefore prone to overestimates of effectiveness (Tomasik 2015b; Baumann 2017b).

Another general consideration is the possibility of social dilemmas (such as the famous Prisoner’s Dilemma): Even if an intervention seems best assuming one’s decision-making is independent of that of other people with different goals, people’s collective decisions may make things worse than some alternative, according to the goals of _all_ the relevant decision-makers. As a simplistic example, suppose one attempts to reduce incidental s-risks by lobbying governments against space exploration, while those who consider it important to build an advanced civilization across the galaxy lobby _for_ space exploration. To the extent that these efforts cancel out, they are wasted compared to the alternative in which both sides agree to pursue their goals more cooperatively, that is, at less expense to each other’s goals (Tomasik 2015c; Vinding 2020b).

### 4.1. Targeted approaches

First, one might aim to reduce s-risks by building clear models of some specific pathways to s-risks, and finding targeted interventions that would likely block these pathways. The distinction between “targeted” and “broad” is more of a spectrum than binary. However, this categorization can be useful in that one may tend to favor more or less targeted approaches based on one’s epistemic perspective. Suppose one finds the mechanisms sketched in Section 3 excessively speculative, considers it generally intractable to form predictions of paths to impact on the long term, and thinks backfire risks can be mitigated without a targeted approach. Then one may prefer broad approaches intended to apply across a variety of scenarios.

To prevent the lock-in of scenarios where astronomically many digital beings are subjected to suffering for economic or scientific expediency, one relatively targeted option is to work on alignment of AI with the values of its human designers (Christian 2020; Ngo, Chan, and Mindermann 2023). As discussed in Section 2.1.1, an uncontrolled AI agent would likely aim to optimize the accessible universe for its goals, which might include allowances for running many suffering computations to make and execute complex plans (Tomasik 2015a; Bostrom 2014, Ch. 8). An unaligned AI might also be especially willing to initiate conflicts leading to large-scale suffering (Section 3.2). By reducing this acute risk, solving the technical problems of alignment would help place near-term decision-makers in a better position for deliberation, in particular, about how to approach space settlement in a way that is less prone to incidental s-risks.

That said, there are several limitations to and potential backfire risks from increasing alignment on the margin. First, it is not clear that agents with values similar to most humans’ will avoid causing great suffering to digital minds, under the default trajectory of moral deliberation; see Section 4.2. For example, a human-aligned agent might be especially inclined to spread sentient life, without necessarily mitigating serious suffering in such lives. Second, progress in AI alignment could also enable malevolent actors to cause s-risks, by enabling their control over a powerful technology. Lastly, marginal increases in the degree of alignment of AI with human values could increase the risk of near-miss failures discussed in Section 3.2. Due to these considerations, it is unlikely that work on AI alignment is robustly positive for reducing s-risks.

Another, arguably more robust, approach to s-risk reduction via technical work on AI design is research in the field of [Cooperative AI](https://www.cooperativeai.com/) (and implementing proposals based on this research) (Dafoe et al. 2020; Conitzer and Oesterheld 2022; Clifton, Martin, and DiGiovanni 2022b). Agential s-risks could result from failures of cooperation between powerful AI systems, and interventions to address these conflict risks are currently neglected compared to efforts to accelerate general progress in AI, and even compared to AI alignment (Hilton 2022). Technical work on mitigating AI conflict risks is a focus area of the Center on Long-Term Risk and the Cooperative AI Foundation. In general, this work entails identifying the possible causes of AI cooperation failure, and proposing changes to the features of AI design (or deployment) that would plausibly remove those causes. Examples of specific research progress in this area include:

  * Research on conflict-avoiding bargaining mechanisms that AI agents will have incentives to adopt. For example, how can AIs be designed to solve _equilibrium selection problems_(Fearon 1998), in particular, avoiding bargaining failure in contexts where different agents have multiple “reasonable” conceptions of fairness (Stastny et al. 2021)?
  * The framework of _safe Pareto improvements_ , procedures for delegating strategic decisions (e.g., to AI systems) to reach an outcome preferred to the default by all parties (Oesterheld and Conitzer 2021). _Surrogate goals_ are a particular implementation of this idea, in which costly conflict is disincentivized via training a modification to an AI’s preferences (Baumann 2018c).
  * Research on the different ways that cooperative outcomes can be made game-theoretically rational. This can be achieved via methods from the literature on _program equilibrium_ (McAfee 1984; Tennenholtz 2004; Oesterheld 2019), or through disclosure of information that would otherwise have led agents to take risks of conflict under uncertainty (Myerson and Satterthwaite 1983; DiGiovanni and Clifton 2022).



Cooperative AI overlaps with research in decision theory, as a method of understanding the patterns of behavior of highly rational agents such as advanced AIs, which is relevant to predicting when they will have incentives to cooperate. One prominent subset of decision theory research for s-risk reduction is work on mechanisms of cooperation between agents with similar decision-making procedures, known as Evidential Cooperation in Large Worlds (ECL) (Oesterheld 2017). Correlations between agents’ decision-making can have important implications for how they optimize their values, and thus how willing they are to cause incidental or agential s-risks. For instance, an agent does not necessarily get exploited by cooperating with correlated agents, i.e., by taking some opportunity that fulfills the values of these agents with some downside according to one’s own values. This is because these agents are most likely cooperating as well, but would not be likely to cooperate if the first agent did not.

To address incidental or agential s-risks from AI, an alternative to technical interventions is to improve coordination between, and risk-awareness within, labs developing advanced AI. Risks of both alignment and cooperation failures could be exacerbated by dynamics where developers race to create the first general AI (Armstrong et al. 2015). These races incentivize developers to deprioritize safety measures that, while useful for avoiding low-probability worst-case outcomes, do not increase their systems’ average-case performance at economically useful tasks. Moreover, by establishing inter-lab coordination through governance and shaping of norms of AI research culture, there would be less risk that labs develop AIs that engage in conflict because they were trained independently (and hence might have incompatible standards for bargaining, or insufficient mutual transparency) (Torges 2021). Labs could also implement measures to reduce risks of malevolent actors gaining unchecked control over AI, for example, strengthening the security of their systems against hacks and instituting stronger checks and balances within their internal governance structures.

Besides AI, extraterrestrial intelligent civilizations could also have an important influence on long-term suffering. For example, understanding how likely extraterrestrials are to settle space—and how compassionate their values might be, compared to Earth-originating agents—is helpful for assessing the _counterfactual_ risks of suffering posed by space settlement (Chyba and Hand 2005; Cook 2022; Vinding and Baumann 2021; Tomasik 2015a). If other civilizations in the universe have less concern for avoiding s-risks than humans do, space settlement could be instrumental to reducing incidental and agential s-risks caused by these beings. On the other hand, hostile interactions between space-settling agents might pose s-risks from cooperation failures.

### 4.2. Broad approaches

Broad s-risk reduction efforts aim to intervene on factors that are likely involved in several different pathways to s-risks, including ones that we cannot specifically anticipate.

A necessary condition for any s-risk to occur is that agents with the majority of power in the long-term future are not sufficiently motivated to prevent or avoid causing s-risks—otherwise, these agents would prevent such large amounts of suffering. Thus, calling attention to and developing nuanced arguments for views that highly prioritize avoiding causing severe suffering, as discussed in Section 2.2.1, might be a way to reduce the probability of all kinds of s-risks. Exploring the philosophical details of suffering-focused ethics is a priority of the Center for Reducing Suffering, for example (Vinding 2020; Ajantaival 2021). Another option is to focus on arguments against pure retribution, the idea that it is inherently good to cause (often disproportionate) suffering to those who violate certain normative standards (Parfit 2011, Ch. 11).

Marginal efforts to promote suffering-focused views do not necessarily reduce s-risks, however, without certain constraints. First, as discussed in Section 4, these efforts might be wasted due to zero-sum dynamics with others promoting different values in response to promotion of suffering-focused views. Hence, the most promising approaches would involve promoting philosophical reflection in ways that would be endorsed by a wide variety of open-minded people, even if they have come to different conclusions about how important suffering is (e.g., presenting relevant considerations and thought experiments that have been neglected in existing literature) (Vinding 2020, Sec. 12.3). Second, to the extent that suffering-focused views are associated with pure consequentialism, a possible risk is that actors become more sympathetic to a naïve procedure of attempting to reduce as much suffering as they believe is possible, given their flawed models of the world. This combination of an optimizing mindset and limited ability to predict the full consequences can inspire counterproductive actions. Thus, effective advocacy for suffering-focused ethics would involve promotion of a careful, nuanced approach.

Similarly, one might focus on increasing concern for the suffering of more kinds of sentient beings (“moral circle expansion”), to reduce incidental, natural, and some forms of agential s-risks (Anthis and Paez 2021). Despite the benefits of the wide reach of this intervention, there are some ways it could backfire. In practice, efforts to increase moral consideration of other beings might make future space-settling civilizations more likely to create these beings on large scales—some fraction of which could have miserable lives—due to viewing their lives as intrinsically valuable (Tomasik 2015d; Vinding 2018a). Further, recalling the near miss scenario from Section 3.2, an AI agent that mistakenly increases the suffering of beings it is trained to care about would cause potentially far more suffering if its training is influenced by moral circle expansion.

Shaping social institutions is another option that is particularly helpful if lock-in of the conditions for s-risks is unlikely to occur soon (or infeasible to prevent). For instance, the Center for Reducing Suffering has analyzed potential changes to political systems that could increase the likelihood of compromise and international cooperation, such as reducing polarization (Baumann 2020b; Vinding 2022a). With more compromises, it would be easier for the votes of even a minority who care about less powerful sentient beings to reduce a large share of incidental and natural s-risks. More global cooperation would slow down technological races that contribute to conflict risks, and greater stability of democracies may also reduce risks of malevolent actors taking power (Althaus and Baumann 2020).

Finally, to the extent that it is intractable to directly intervene on s-risks in the near term, an alternative is to build the capacity of future people to reduce s-risks when they have more information than we do (but less time to prepare) (Baumann 2021). This could entail:

  * Writing detailed resources on risk factors for future suffering (Baumann 2019). 
  * Gaining knowledge about fields that appear generally useful for shaping the future, and for understanding the incentives that may drive future agents (e.g., history, epistemology, economics, game theory, and machine learning).
  * Promoting norms that are likely to ensure the sustainability of the s-risk reduction project, such as cooperation (Vinding 2020b). 



### Next steps

Those interested in reducing s-risks can contribute with donations to organizations that prioritize s-risks, such as the Center on Long-Term Risk and the Center for Reducing Suffering, or with their careers. To build a career that helps reduce s-risks, one can learn more about the research fields discussed in Section 4.1, and reach out to the [Center on Long-Term Risk](https://longtermrisk.org/career-coaching/) or the [Center for Reducing Suffering](https://centerforreducingsuffering.org/contact/) for career planning advice.

#### Acknowledgments

I thank David Althaus, Tobias Baumann, Jim Buhler, Lukas Gloor, Adrian Hutter, Caspar Oesterheld, and Pablo Stafforini for comments and suggestions.

* * *

  1. [The Case for Suffering-Focused Ethics](https://longtermrisk.org/the-case-for-suffering-focused-ethics/)
  2. [Reducing Risks of Astronomical Suffering: A Neglected Priority](https://longtermrisk.org/reducing-risks-of-astronomical-suffering-a-neglected-priority/)
  3. **Beginner’s guide to reducing s-risks**



#### References

Ajantaival. Minimalist axiologies and positive lives. https://centerforreducingsuffering.org/research/minimalist-axiologies-and-positive-lives, 2021.

Althaus and Baumann. Reducing long-term risks from malevolent actors. [https://forum.effectivealtruism.org/posts/LpkXtFXdsRd4rG8Kb/reducing-long-term-risks-from-malevolent-actors](https://forum.effectivealtruism.org/posts/LpkXtFXdsRd4rG8Kb/reducing-long-term-risks-from-malevolent-actors), 2020.

Althaus and Gloor. Reducing Risks of Astronomical Suffering: A Neglected Priority. https://longtermrisk.org/reducing-risks-of-astronomical-suffering-a-neglected-priority, 2016.

Althaus. Descriptive Population Ethics and Its Relevance for Cause Prioritization. [https://forum.effectivealtruism.org/posts/CmNBmSf6xtMyYhvcs/descriptive-population-ethics-and-its-relevance-for-cause#Interpreting_and_measuring_N_ratios](https://forum.effectivealtruism.org/posts/CmNBmSf6xtMyYhvcs/descriptive-population-ethics-and-its-relevance-for-cause#Interpreting_and_measuring_N_ratios), 2018.

Anthis and Paez. “Moral circle expansion: A promising strategy to impact the far future.” 2021.

Armstrong and Sandberg. “Eternity in six hours: intergalactic spreading of intelligent life and sharpening the Fermi paradox”. 2013.

Armstrong et al. “Racing to the precipice: a model of artificial intelligence development". 2015.

Baumann. A typology of s-risks. [https://centerforreducingsuffering.org/research/a-typology-of-s-risks](https://centerforreducingsuffering.org/research/a-typology-of-s-risks), 2018a. 

Baumann. An introduction to worst-case AI safety. [https://s-risks.org/an-introduction-to-worst-case-ai-safety/](https://s-risks.org/an-introduction-to-worst-case-ai-safety/), 2018b.

Baumann. Arguments for and against a focus on s-risks. [https://centerforreducingsuffering.org/research/arguments-for-and-against-a-focus-on-s-risks](https://centerforreducingsuffering.org/research/arguments-for-and-against-a-focus-on-s-risks), 2020a.

Baumann. How can we reduce s-risks? [https://centerforreducingsuffering.org/research/how-can-we-reduce-s-risks/#Capacity_building](https://centerforreducingsuffering.org/research/how-can-we-reduce-s-risks/#Capacity_building), 2021.

Baumann. Improving our political system: An overview. [https://centerforreducingsuffering.org/research/improving-our-political-system-an-overview](https://centerforreducingsuffering.org/research/improving-our-political-system-an-overview), 2020b.

Baumann. Risk factors for s-risks. [https://centerforreducingsuffering.org/research/risk-factors-for-s-risks](https://centerforreducingsuffering.org/research/risk-factors-for-s-risks), 2019.

Baumann. S-risks: An introduction. [https://centerforreducingsuffering.org/research/intro](https://centerforreducingsuffering.org/research/intro), 2017a.

Baumann. Uncertainty smooths out differences in impact. [https://prioritizationresearch.com/uncertainty-smoothes-out-differences-in-impact](https://prioritizationresearch.com/uncertainty-smoothes-out-differences-in-impact), 2017b.

Baumann. Using surrogate goals to deflect threats. [https://longtermrisk.org/using-surrogate-goals-deflect-threats](https://longtermrisk.org/using-surrogate-goals-deflect-threats), 2018c.

Beckstead and Thomas. “A Paradox for tiny probabilities.” 2021.

Beckstead. Dissertation: On the overwhelming importance of shaping the far future. 2013.

Beckstead. Will we eventually be able to colonize other stars? Notes from a preliminary review. https://www.fhi.ox.ac.uk/will-we-eventually-be-able-to-colonize-other-stars-notes-from-a-preliminary-review, 2014.

Block. “The harder problem of consciousness”. 2002.

Bostrom. “Are we living in a computer simulation?” _The Philosophical Quarterly_. 2003.

Bostrom. “The Superintelligent Will”. 2012.

Bostrom. _Superintelligence_. OUP Oxford, 2014

Brauner and Grosse-Holz. The expected value of extinction risk reduction is positive. [https://www.effectivealtruism.org/articles/the-expected-value-of-extinction-risk-reduction-is-positive](https://www.effectivealtruism.org/articles/the-expected-value-of-extinction-risk-reduction-is-positive). 2018.

Buckels et al. “Behavioral confirmation of Everyday Sadism”. 2013. 

Caplan. “The totalitarian threat”. 2008.

Carlsmith. “Is Power-seeking AI an Existential Threat?” 2022.

Chalmers. _The Conscious Mind_. OUP Oxford, 1996.

Christian. _Alignment Problem – Machine Learning and Human Values_. W.W. Norton, 2020.

Christiano, Cotra, and Xu. Eliciting latent knowledge: How to tell if your eyes deceive you. [https://docs.google.com/document/d/1WwsnJQstPq91_Yh-Ch2XRL8H_EpsnjrC1dwZXR37PC8/edit](https://docs.google.com/document/d/1WwsnJQstPq91_Yh-Ch2XRL8H_EpsnjrC1dwZXR37PC8/edit), 2021.

Chyba and Hand. “Astrobiology: The Study of the Living Universe”. 2005.

Clifton, Martin, and DiGiovanni. When would AGIs engage in conflict? [https://www.alignmentforum.org/s/32kWH6hqFhmdFsvBh/p/cLDcKgvM6KxBhqhGq#What_if_conflict_isn_t_costly_by_the_agents__lights__](https://www.alignmentforum.org/s/32kWH6hqFhmdFsvBh/p/cLDcKgvM6KxBhqhGq#What_if_conflict_isn_t_costly_by_the_agents__lights__), 2022a.

Clifton, Martin, and DiGiovanni. When does technical work to reduce AGI conflict make a difference? [https://www.alignmentforum.org/s/32kWH6hqFhmdFsvBh](https://www.alignmentforum.org/s/32kWH6hqFhmdFsvBh), 2022b.

Cohen et al. 2021 State of the Industry Report: Cultivated meat and seafood. [https://gfieurope.org/wp-content/uploads/2022/04/2021-Cultivated-Meat-State-of-the-Industry-Report.pdf](https://gfieurope.org/wp-content/uploads/2022/04/2021-Cultivated-Meat-State-of-the-Industry-Report.pdf), 2021.

Conitzer and Oesterheld. Foundations of Cooperative AI. [https://www.cs.cmu.edu/~15784/focal_paper.pdf](https://www.cs.cmu.edu/~15784/focal_paper.pdf). 2022.

Cook. Replicating and extending the grabby aliens model. [https://forum.effectivealtruism.org/posts/7bc54mWtc7BrpZY9e/replicating-and-extending-the-grabby-aliens-model](https://forum.effectivealtruism.org/posts/7bc54mWtc7BrpZY9e/replicating-and-extending-the-grabby-aliens-model), 2022.

Cotra. “Forecasting TAI with biological anchors”. 2020.

Cotra. Without specific countermeasures, the easiest path to transformative AI likely leads to AI takeover. [https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to), 2022.

Cowen and Parfit. “Against the social discount rate”. 1992.

Dafoe et al. “Open problems in Cooperative AI”. 2020.

DeepMind. “Generally capable agents emerge from open-ended play”. 2021.

De Vynck, Lerman, and Tiku. “Microsoft’s AI chatbot is going off the rails.” _The Washington Post,_ February 16, 2023. https://www.washingtonpost.com/technology/2023/02/16/microsoft-bing-ai-chatbot-sydney/.

DiGiovanni. A longtermist critique of “The expected value of extinction risk reduction is positive”. [https://forum.effectivealtruism.org/posts/RkPK8rWigSAybgGPe/a-longtermist-critique-of-the-expected-value-of-extinction-2](https://forum.effectivealtruism.org/posts/RkPK8rWigSAybgGPe/a-longtermist-critique-of-the-expected-value-of-extinction-2), 2021.

DiGiovanni and Clifton. “Commitment games with conditional information revelation”. 2022.

DiGiovanni, Macé, and Clifton. “Evolutionary Stability of Other-Regarding Preferences Under Complexity Costs”. 2022.

Duff. “Pascal's Wager”. 1986. 

Eckerström-Liedholm. Deep Dive: Wildlife contraception and welfare. [https://www.wildanimalinitiative.org/blog/contraception-deep-dive](https://www.wildanimalinitiative.org/blog/contraception-deep-dive), 2022.

Edwards et al. “Anthroponosis and risk management: a time for ethical vaccination of wildlife”. 2021.

Evans and Gao. DeepMind AI Reduces Google Data Centre Cooling Bill by 40%. [https://www.deepmind.com/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40](https://www.deepmind.com/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40), 2016.

Fearon. “Bargaining, Enforcement, and International Cooperation”. 1998.

Fearon. “Rationalist explanations for war”. 1995.

Finnveden et al _._ “AGI and Lock-in”. 2022.

Frick. “Conditional Reasons and the Procreation Asymmetry”. 2020.

Gloor. Altruists Should Prioritize Artificial Intelligence. [https://longtermrisk.org/altruists-should-prioritize-artificial-intelligence](https://longtermrisk.org/altruists-should-prioritize-artificial-intelligence), 2016a.

Gloor. Cause prioritization for downside-focused value systems. [https://longtermrisk.org/cause-prioritization-downside-focused-value-systems](https://longtermrisk.org/cause-prioritization-downside-focused-value-systems), 2018.

Gloor. Population Ethics Without Axiology: A Framework. [https://forum.effectivealtruism.org/posts/dQvDxDMyueLyydHw4/population-ethics-without-axiology-a-framework](https://forum.effectivealtruism.org/posts/dQvDxDMyueLyydHw4/population-ethics-without-axiology-a-framework), 2022.

Gloor. The Case for Suffering-Focused Ethics. https://longtermrisk.org/the-case-for-suffering-focused-ethics, 2016b.

Greaves and MacAskill. The case for strong longtermism. [https://globalprioritiesinstitute.org/hilary-greaves-william-macaskill-the-case-for-strong-longtermism-2](https://globalprioritiesinstitute.org/hilary-greaves-william-macaskill-the-case-for-strong-longtermism-2), 2021.

Greaves. “Cluelessness”. 2016.

Hanson. _The Age of Em_. OUP Oxford, 2016.

Heifetz, Shannon, and Spiegel. “The Dynamic Evolution of Preferences”. 2007.

Hilton. “S-risks.” [https://80000hours.org/problem-profiles/s-risks/#why-might-s-risks-be-an-especially-pressing-problem](https://80000hours.org/problem-profiles/s-risks/#why-might-s-risks-be-an-especially-pressing-problem). 2022.

Horta. “Animal Suffering in Nature: The Case for Intervention”. 2017.

Horta. “Debunking the idyllic view of natural processes”. 2010.

Hubinger et al. “Risks from learned Optimization in Advanced Machine Learning Systems”. 2019.

Hubinger. A transparency and interpretability tech tree. [https://www.alignmentforum.org/posts/nbq2bWLcYmSGup9aF/a-transparency-and-interpretability-tech-tree](https://www.alignmentforum.org/posts/nbq2bWLcYmSGup9aF/a-transparency-and-interpretability-tech-tree), 2022.

Johannsen. _Wild Animal Ethics: The Moral and Political Problem of Wild Animal Suffering._ Routledge, 2020.

Jumper et al. “Highly accurate protein structure prediction with AlphaFold”. 2021.

Karnofsky. AI Could Defeat All Of Us Combined. [https://www.cold-takes.com/ai-could-defeat-all-of-us-combined, 2022.](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined,%202022.)

Knutsson. “Value lexicality”. 2016.

Larks. The Long Reflection as the Great Stagnation. [https://forum.effectivealtruism.org/posts/o5Q8dXfnHTozW9jkY/the-long-reflection-as-the-great-stagnation](https://forum.effectivealtruism.org/posts/o5Q8dXfnHTozW9jkY/the-long-reflection-as-the-great-stagnation), 2022.

Lickel. “Vicarious Retribution: the role of collective blame in intergroup aggression". 2006. 

MacAskill et al. _Moral Uncertainty_. OUP Oxford, 2020.

MacAskill. _What We Owe the Future_. Oneworld, 2022.

MacAskill. Human Extinction, Asymmetry, and Option Value. [https://docs.google.com/document/d/1hQI3otOAT39sonCHIM6B4na9BKeKjEl7wUKacgQ9qF8/](https://docs.google.com/document/d/1hQI3otOAT39sonCHIM6B4na9BKeKjEl7wUKacgQ9qF8/edit)

Marchau et al. _Decision Making under Deep Uncertainty_. Springer, 2019.

McAfee. “Effective computability in Economic Decisions”. 1984.

Metzinger. _The Ego Tunnel_ : _The Science of the Mind and the Myth of the Self_. Basic Books, 2010

Monton. “How to avoid Maximizing Expected Utility”. 2019.

Moore. _Placing Blame: A Theory of Criminal Law._ Clarendon, 1997. 

Moshagen et al. “The Dark Core of Personality”. 2018. 

Myerson and Satterthwaite. “Efficient mechanisms for bilateral trading”. 1983.

Ngo, Chan, and Mindermann. “The alignment problem from a deep learning perspective”. 2023.

Oesterheld. “Multiverse-wide Cooperation via Correlated Decision Making”. 2017.

Oesterheld. “Robust program equilibrium”. 2019.

Oesterheld and Conitzer. “Safe Pareto Improvements for Delegated Game Playing”. 2021.

Omohundro. “Basic AI Drives”. 2008.

OpenAI. “GPT-4 Technical Report”. 2023.

Ord. _The Precipice_. Bloomsbury, 2020.

Ortiz-Ospina and Roser. Global Health. [https://ourworldindata.org/health-meta](https://ourworldindata.org/health-meta), 2016.

Ortiz-Ospina and Roser. Happiness and Life Satisfaction. [https://ourworldindata.org/happiness-and-life-satisfaction](https://ourworldindata.org/happiness-and-life-satisfaction), 2013.

Parfit. _On What Matters: Volume 1._ OUP Oxford, 2011

Paulhus. “Toward a Taxonomy of Dark Personalities”. 2014. 

Pearce. _Hedonistic Imperative_. Self-published, 1995.

Pinker. _The Better Angels of Our Nature: A History of Violence and Humanity_. Penguin, 2012.

Possajennikov. “On the evolutionary stability of altruistic and spiteful preferences”. 2000.

Reed et al. “A Generalist Agent”. 2022.

Ritchie, Rosado, and Roser. Meat and Dairy Production. [https://ourworldindata.org/meat-production](https://ourworldindata.org/meat-production), 2017.

Shulman and Bostrom, _Sharing the World with Digital Minds_ In: _Rethinking Moral Status._ Edited by: Steve Clarke, Hazem Zohny, and Julian Savulesc, Oxford University Press. 2021.

Silver et al. “Mastering chess and shogi”. 2017.

Singer. The Expanding Circle: Ethics, Evolution, and Moral Progress. [https://press.princeton.edu/books/paperback/9780691150697/the-expanding-circle](https://press.princeton.edu/books/paperback/9780691150697/the-expanding-circle), 2011.

Sinnott-Armstrong. “Consequentialism,” The Stanford Encyclopedia of Philosophy, Edward N. Zalta & Uri Nodelman (eds.), [https://plato.stanford.edu/archives/win2022/entries/consequentialism](https://plato.stanford.edu/archives/win2022/entries/consequentialism), 2022.

Sotala. Advantages of Artificial Intelligences, Uploads, and Digital Minds. [https://intelligence.org/files/AdvantagesOfAIs.pdf](https://intelligence.org/files/AdvantagesOfAIs.pdf), 2012. 

Stastny et al. “Normative Disagreement as a Challenge for Cooperative AI”. 2021.

Stein-Perlman et al. “Expert survey on Progress in AI”. 2022.

Tarsney. “The epistemic challenge to longtermism”. 2022.

Tennenholtz. “Program equilibrium”. 2004.

Thomas. “The Asymmetry, Uncertainty, and the Long Term”. 2019.

Tomasik. Artificial Intelligence and Its Implications for Future Suffering. https://longtermrisk.org/artificial-intelligence-and-its-implications-for-future-suffering, 2015a.

Tomasik. Charity Cost-Effectiveness in an Uncertain World. [https://longtermrisk.org/charity-cost-effectiveness-in-an-uncertain-world](https://longtermrisk.org/charity-cost-effectiveness-in-an-uncertain-world), 2015b.

Tomasik. Do Artificial Reinforcement-Learning Agents Matter Morally? [https://arxiv.org/abs/1410.8233?context=cs](https://arxiv.org/abs/1410.8233?context=cs), 2014.

Tomasik. Reasons to Be Nice to Other Value Systems. [https://longtermrisk.org/reasons-to-be-nice-to-other-value-systems](https://longtermrisk.org/reasons-to-be-nice-to-other-value-systems), 2015c.

Tomasik. Reasons to Promote Suffering-Focused Ethics. [https://reducing-suffering.org/the-case-for-promoting-suffering-focused-ethics](https://reducing-suffering.org/the-case-for-promoting-suffering-focused-ethics), 2015d.

Tomasik. Risks of Astronomical Future Suffering. [https://longtermrisk.org/risks-of-astronomical-future-suffering](https://longtermrisk.org/risks-of-astronomical-future-suffering), 2015e. 

Torges. Coordination challenges for preventing AI conflict. [https://longtermrisk.org/coordination-challenges-for-preventing-ai-conflict](https://longtermrisk.org/coordination-challenges-for-preventing-ai-conflict), 2021.

Vinding. Moral Circle Expansion Might Increase Future Suffering. [https://magnusvinding.com/2018/09/04/moral-circle-expansion-might-increase-future-suffering](https://magnusvinding.com/2018/09/04/moral-circle-expansion-might-increase-future-suffering), 2018a.

Vinding. _Reasoned Politics_. Independently published, 2022a.

Vinding. _Suffering-Focused Ethics: Defense and Implications_. Independently published, 2020a.

Vinding. Why altruists should be cooperative. 

[https://centerforreducingsuffering.org/why-altruists-should-be-cooperative](https://centerforreducingsuffering.org/why-altruists-should-be-cooperative), 2020b.

Vinding. Why Altruists Should Perhaps Not Prioritize Artificial Intelligence: A Lengthy Critique. [https://magnusvinding.com/2018/09/18/why-altruists-should-perhaps-not-prioritize-artificial-intelligence-a-lengthy-critique](https://magnusvinding.com/2018/09/18/why-altruists-should-perhaps-not-prioritize-artificial-intelligence-a-lengthy-critique), 2018b.

Vinding. Popular views of population ethics imply a priority on preventing worst-case outcomes. [https://centerforreducingsuffering.org/popular-views-of-population-ethics-imply-a-priority-on-preventing-worst-case-outcomes](https://centerforreducingsuffering.org/popular-views-of-population-ethics-imply-a-priority-on-preventing-worst-case-outcomes), 2022b.

Vinding and Baumann. S-risk impact distribution is double-tailed. [https://centerforreducingsuffering.org/s-risk-impact-distribution-is-double-tailed](https://centerforreducingsuffering.org/s-risk-impact-distribution-is-double-tailed), 2021.

Wendel. “On the abundance of extraterrestrial life after the Kepler mission”. 2015.

Yudkowsky. The Rocket Alignment Problem. [https://intelligence.org/2018/10/03/rocket-alignment](https://intelligence.org/2018/10/03/rocket-alignment), 2018.

Ziegler et al. Fine-tuning GPT-2 from human preferences. [https://openai.com/blog/fine-tuning-gpt-2](https://openai.com/blog/fine-tuning-gpt-2), 2019.

#### Footnotes

  1. “Significance” is relative to “expected action-relevant suffering in the future” (Althaus and Gloor 2016). The expected value of some quantity is the average of this quantity over each possibility, where each possible value is weighed by its probability. “Action-relevant suffering” means suffering over which Earth-originating intelligent life may have some control. (back)
  2. Assessing this philosophical premise in-depth is outside the scope of this article. For more discussion, see, e.g., (Chalmers 1996; Block 2002; Metzinger 2010). (back)
  3. Whether future suffering is involuntary, or any purported special normative status to involuntary suffering is not essential to the definition of s-risks. This article focuses on involuntary suffering because, first, the arguments for prioritizing s-risks do not depend on whether voluntary suffering is included, and second, the claim that all _involuntary_ suffering is bad is relatively less controversial. (back)
  4. But see also Vinding (2018b). (back)
  5. Note, however, that individuals’ answers to this question differ significantly based on the framing. (back)
  6. Or, if the view is not purely consequentialist, the act is acceptable if the alternative would strongly violate certain principles. (back)
  7. This definition of suffering-focused views that do not give lexical priority to suffering is necessarily relative to other views (Althaus 2018). For example, if _A_ considers it acceptable (all else equal) to take an action resulting in one extra experience of kidney stones and one thousand extra experiences of falling in love, while _B_ does not, then _B_ ’s ethics would be considered more suffering-focused than _A_ ’s. Alternatively, one could choose a non-normative “unit” of suffering and other potentially offsetting goods or bads, such as intensity of experience or energy used by the brain. Then, suffering-focused views might be defined as those that consider it unacceptable to increase one unit of suffering for slightly more than one unit of, e.g., happiness. (back)
  8. Premise 2 states that reducing the expected amount of suffering should be prioritized, which means that instances of sufficiently large-scale suffering ought to be reduced even if they are highly improbable. Some views in decision theory hold that it is irrational to prefer to reduce an arbitrarily small probability of a sufficiently bad outcome, over reducing a much more likely and less severely bad outcome (Duff 1986; Monton 2019; Beckstead and Thomas 2021). Although a case has not been presented for s-risks being highly probable, Sections 2.3 and 3 discuss some reasons s-risks might not be so improbable that such views would discount them. (back)
  9. But see Larks (2022) for discussion of the limitations of MacAskill’s vision of this moral reflection period. (back)
  10. Note that the cited authors disagree with each other significantly on the degree of difficulty of the alignment problem. (back)
  11. However, see Section 3.1 for discussion of how sources of suffering analogous to factory farming might recur _because_ of technological progress. (back)
  12. See (MacAskill 2022, Ch. 3) for discussion of the extent to which moral attitudes, versus economic incentives, contributed to (and delayed) the abolition of slavery. (back)
  13. That said, the frequency of intelligent civilizations would be correlated with that of sentient life. See the literature on the Fermi paradox for analysis of this question. (back)



“Significance” is relative to “expected action-relevant suffering in the future” (Althaus and Gloor 2016). The expected value of some quantity is the average of this quantity over each possibility, where each possible value is weighed by its probability. “Action-relevant suffering” means suffering over which Earth-originating intelligent life may have some control.

Assessing this philosophical premise in-depth is outside the scope of this article. For more discussion, see, e.g., (Chalmers 1996; Block 2002; Metzinger 2010).

Whether future suffering is involuntary, or any purported special normative status to involuntary suffering is not essential to the definition of s-risks. This article focuses on involuntary suffering because, first, the arguments for prioritizing s-risks do not depend on whether voluntary suffering is included, and second, the claim that all _involuntary_ suffering is bad is relatively less controversial.

But see also Vinding (2018b).

Note, however, that individuals’ answers to this question differ significantly based on the framing.

Or, if the view is not purely consequentialist, the act is acceptable if the alternative would strongly violate certain principles.

This definition of suffering-focused views that do not give lexical priority to suffering is necessarily relative to other views (Althaus 2018). For example, if _A_ considers it acceptable (all else equal) to take an action resulting in one extra experience of kidney stones and one thousand extra experiences of falling in love, while _B_ does not, then _B_ ’s ethics would be considered more suffering-focused than _A_ ’s. Alternatively, one could choose a non-normative “unit” of suffering and other potentially offsetting goods or bads, such as intensity of experience or energy used by the brain. Then, suffering-focused views might be defined as those that consider it unacceptable to increase one unit of suffering for slightly more than one unit of, e.g., happiness.

Premise 2 states that reducing the expected amount of suffering should be prioritized, which means that instances of sufficiently large-scale suffering ought to be reduced even if they are highly improbable. Some views in decision theory hold that it is irrational to prefer to reduce an arbitrarily small probability of a sufficiently bad outcome, over reducing a much more likely and less severely bad outcome (Duff 1986; Monton 2019; Beckstead and Thomas 2021). Although a case has not been presented for s-risks being highly probable, Sections 2.3 and 3 discuss some reasons s-risks might not be so improbable that such views would discount them.

But see Larks (2022) for discussion of the limitations of MacAskill’s vision of this moral reflection period.

Note that the cited authors disagree with each other significantly on the degree of difficulty of the alignment problem.

However, see Section 3.1 for discussion of how sources of suffering analogous to factory farming might recur _because_ of technological progress.

See (MacAskill 2022, Ch. 3) for discussion of the extent to which moral attitudes, versus economic incentives, contributed to (and delayed) the abolition of slavery.

That said, the frequency of intelligent civilizations would be correlated with that of sentient life. See the literature on the Fermi paradox for analysis of this question.
