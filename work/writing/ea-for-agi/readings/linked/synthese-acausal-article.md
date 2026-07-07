---
title: "Approval-directed agency and the decision theory of Newcomb-like problems - Synthese"
url: https://link.springer.com/article/10.1007/s11229-019-02148-2
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by funder-signals/finnveden-ai-things-as-important; philosophy article (acausal/ECL-adjacent)"
---

# Approval-directed agency and the decision theory of Newcomb-like problems

  * S.I.: DecTheory&FutOfAI
  * [Open access](https://www.springernature.com/gp/open-science/about/the-fundamentals-of-open-access-and-open-research)
  * Published: 25 February 2019


  * Volume 198, pages 6491–6504 (2021) 
  * Cite this article



You have full access to this [open access](https://www.springernature.com/gp/open-science/about/the-fundamentals-of-open-access-and-open-research) article

[ Download PDF ](/content/pdf/10.1007/s11229-019-02148-2.pdf)

[ Save article ](/article/10.1007/s11229-019-02148-2/save-research?_csrf=m463Hk577l8U-8pSss1rq9W6rJoD_VMh)

[ View saved research ](/saved-research)

[ Synthese ](/journal/11229) [ Aims and scope  ](/journal/11229/aims-and-scope) [ Submit manuscript  ](https://www.editorialmanager.com/synt)

Approval-directed agency and the decision theory of Newcomb-like problems 

[ Download PDF ](/content/pdf/10.1007/s11229-019-02148-2.pdf)

## Abstract

Decision theorists disagree about how instrumentally rational agents, i.e., agents trying to achieve some goal, should behave in so-called Newcomb-like problems, with the main contenders being causal and evidential decision theory. Since the main goal of artificial intelligence research is to create machines that make instrumentally rational decisions, the disagreement pertains to this field. In addition to the more philosophical question of what the right decision theory is, the goal of AI poses the question of how to implement any given decision theory in an AI. For example, how would one go about building an AI whose behavior matches evidential decision theory’s recommendations? Conversely, we can ask which decision theories (if any) describe the behavior of any existing AI design. In this paper, we study what decision theory an approval-directed agent, i.e., an agent whose goal it is to maximize the score it receives from an overseer, implements. If we assume that the overseer rewards the agent based on the expected value of some von Neumann–Morgenstern utility function, then such an approval-directed agent is guided by two decision theories: the one used by the agent to decide which action to choose in order to maximize the reward and the one used by the overseer to compute the expected utility of a chosen action. We show which of these two decision theories describes the agent’s behavior in which situations.

### Similar content being viewed by others

###  [Disagreement, AI alignment, and bargaining ](https://link.springer.com/10.1007/s11098-024-02224-5?fromPaywallRec=false)

Article 18 November 2024

###  [Fully Autonomous AI ](https://link.springer.com/10.1007/s11948-020-00243-z?fromPaywallRec=false)

Article 28 July 2020

###  [Design for operator contestability: control over autonomous systems by introducing defeaters ](https://link.springer.com/10.1007/s43681-025-00657-0?fromPaywallRec=false)

Article Open access 07 February 2025

### Explore related subjects

Discover the latest articles, books and news in related subjects, suggested using machine learning.

  * [Attribution Theory](/subjects/attribution-theory)
  * [Decision Making](/subjects/decision-making)
  * [Learning Theory](/subjects/learning-theory)
  * [Operations Research and Decision Theory](/subjects/operations-research-and-decision-theory)
  * [Philosophy of Artificial Intelligence](/subjects/philosophy-of-artificial-intelligence)
  * [Artificial Intelligence](/subjects/artificial-intelligence)
  * [Cognitive Phenomena in Philosophical Contexts](/subjects/cognitive-phenomena-in-philosophical-contexts)



## 1 Introduction

In decision theory, there is a large debate about how an instrumentally rational agent, i.e., an agent trying to achieve some goal or maximize some utility function, should decide in Newcomb’s problem (introduced by Nozick [1969](/article/10.1007/s11229-019-02148-2#ref-CR38 "Nozick, R. \(1969\). Newcomb’s problem and two principles of choice. In N. Rescher, et al. \(Eds.\), Essays in honor of Carl G. Hempel \(pp. 114–146\). Berlin: Springer.")) and variations thereof (a list is given by Ledwig [2000](/article/10.1007/s11229-019-02148-2#ref-CR32 "Ledwig, M. \(2000\). Newcomb’s problem. Ph.D. thesis, University of Constance. 
                  https://kops.uni-konstanz.de/bitstream/handle/123456789/3451/ledwig.pdf
                  
                . Accessed 22 Feb 2019."), pp. 80–87). Consequently, different normative theories of instrumental rationality have been developed. The best known ones are evidential (sometimes also called Bayesian) decision theory (EDT) (Ahmed [2014](/article/10.1007/s11229-019-02148-2#ref-CR2 "Ahmed, A. \(2014\). Evidence, decision and causality. Cambridge: Cambridge University Press."); Almond [2010](/article/10.1007/s11229-019-02148-2#ref-CR5 "Almond, P. \(2010\). On causation and correlation part 1: Evidential decision theory is correct. 
                  https://casparoesterheld.files.wordpress.com/2016/12/almond_edt_1.pdf
                  
                . Accessed 22 Feb 2019."); Price [1986](/article/10.1007/s11229-019-02148-2#ref-CR44 "Price, H. \(1986\). Against causal decision theory. Synthese, 67, 195–212."); Horgan [1981](/article/10.1007/s11229-019-02148-2#ref-CR27 "Horgan, T. \(1981\). Counterfactuals and Newcomb’s problem. The Journal of Philosophy, 78\(6\), 331–356.")) and causal decision theory (CDT) (Gibbard and Harper [1981](/article/10.1007/s11229-019-02148-2#ref-CR23 "Gibbard, A., & Harper, W. L. \(1981\). Counterfactuals and two kinds of expected utility. In W. L. Harper, R. Stalnaker, & G. Pearce \(Eds.\), Ifs. Conditionals, belief, decision, chance and time \(Vol. 15\). The University of Western Ontario Series in Philosophy of Science. A series of books in philosophy of science, methodology, epistemology, logic, history of science, and related fields \(pp. 153–190\). Springer. 
                  https://doi.org/10.1007/978-94-009-9117-0_8
                  
                ."); Joyce [1999](/article/10.1007/s11229-019-02148-2#ref-CR29 "Joyce, J. M. \(1999\). The foundations of causal decision theory. Cambridge studies in probability, induction, and decision theory. Cambridge: Cambridge University Press."); Lewis [1981](/article/10.1007/s11229-019-02148-2#ref-CR34 "Lewis, D. \(1981\). Causal decision theory. Australasian Journal of Philosophy, 59\(1\), 5–30."); Skyrms [1982](/article/10.1007/s11229-019-02148-2#ref-CR49 "Skyrms, B. \(1982\). Causal decision theory. The Journal of Philosophy, 79\(11\), 695–711."); Weirich [2016](/article/10.1007/s11229-019-02148-2#ref-CR62 "Weirich, P. \(2016\). Causal decision theory. In The Stanford encyclopedia of philosophy. Spring 2016.")), but many have attempted to remediate what they view as failures of the two theories by proposing further alternatives (Spohn [2003](/article/10.1007/s11229-019-02148-2#ref-CR56 "Spohn, W. \(2003\). Dependency equilibria and the causal structure of decision and game situation. Homo Oeconomicus, 20, 195–255."), [2012](/article/10.1007/s11229-019-02148-2#ref-CR57 "Spohn, W. \(2012\). Reversing 30 years of discussion: Why causal decision theorists should one-box. Synthese, 187\(1\), 95–122."); Poellinger [2013](/article/10.1007/s11229-019-02148-2#ref-CR43 "Poellinger, R. \(2013\). Unboxing the concepts in Newcomb’s paradox: Causation, prediction, decision. 
                  http://philsci-archive.pitt.edu/9887/7/newcomb_in_ckps.pdf
                  
                . Accessed 22 Feb 2019."); Arntzenius [2008](/article/10.1007/s11229-019-02148-2#ref-CR7 "Arntzenius, F. \(2008\). No regrets, or: Edith Piaf revamps decision theory. Erkenntnis, 68\(2\), 277–297. 
                  https://doi.org/10.1007/s10670-007-9084-8
                  
                ."); Gustafsson [2011](/article/10.1007/s11229-019-02148-2#ref-CR25 "Gustafsson, J. E. \(2011\). A note in defence of ratificationism. Erkenntnis, 75\(1\), 147–150."); Wedgwood [2013](/article/10.1007/s11229-019-02148-2#ref-CR61 "Wedgwood, R. \(2013\). Gandalf’s solution to the Newcomb problem. Synthese, 190\(14\), 2643–2675. 
                  https://doi.org/10.1007/s11229-011-9900-1
                  
                ."); Dohrn [2015](/article/10.1007/s11229-019-02148-2#ref-CR17 "Dohrn, D. \(2015\). Egan and agents: How evidential decision theory can deal with Egan’s dilemma. Synthese, 192\(6\), 1883–1908."); Price [2012](/article/10.1007/s11229-019-02148-2#ref-CR45 "Price, H. \(2012\). Causation, chance, and the rational significance of supernatural evidence. Philosophical Review, 121\(4\), 483–538."); Soares and Levinstein [2017](/article/10.1007/s11229-019-02148-2#ref-CR54 "Soares, N., & Levinstein, B. A. \(2017\). Cheating death in damascus. In Formal epistemology workshop \(FEW\) 2017. University of Washington, Seattle, USA. 
                  https://intelligence.org/files/DeathInDamascus.pdf
                  
                . Accessed 22 Feb 2019.")).

Because the main goal of artificial intelligence is to build machines that make instrumentally rational decisions (Russell and Norvig [2010](/article/10.1007/s11229-019-02148-2#ref-CR48 "Russell, S., & Norvig, P. \(2010\). Artificial intelligence. A modern approach \(3rd ed.\). London: Pearson Education, Inc."), Sects. 1.1.4, 2.2; Legg and Hutter [2007](/article/10.1007/s11229-019-02148-2#ref-CR33 "Legg, S., & Hutter, M. \(2007\). Universal intelligence: A definition of machine intelligence. Minds and Machines, 17\(4\), 391–444."); Doyle [1992](/article/10.1007/s11229-019-02148-2#ref-CR18 "Doyle, J. \(1992\). Rationality and its roles in reasoning. Computational Intelligence, 8\(2\), 376–409.")), this normative disagreement has some bearing on how to build these machines (cf. Soares and Fallenstein [2014a](/article/10.1007/s11229-019-02148-2#ref-CR52 "Soares, N, & Fallenstein, B. \(2014a\). Aligning superintelligence with human interests: A technical research agenda. Technical report. 2014-8. Machine Intelligence Research Institute. 
                  https://intelligence.org/files/TechnicalAgenda.pdf
                  
                . Accessed 22 Feb 2019."), Sect. 2.2; Soares and Fallenstein [2014b](/article/10.1007/s11229-019-02148-2#ref-CR53 "Soares, N, & Fallenstein, B. \(2014b\). Toward idealized decision theory. Technical report 2014-7. Machine Intelligence Research Institute. 
                  arXiv: 1507.01986
                  
                ."), Sect. 1; Bostrom [2014b](/article/10.1007/s11229-019-02148-2#ref-CR12 "Bostrom, N. \(2014b\). Superintelligence. Paths, dangers, strategies \(1st ed.\). Oxford: Oxford University Press."), Chap. 13, Sect. “Decision theory”). The differences between these decision theories are probably inconsequential in most situations (Ahmed [2014](/article/10.1007/s11229-019-02148-2#ref-CR2 "Ahmed, A. \(2014\). Evidence, decision and causality. Cambridge: Cambridge University Press."), Sect. 0.5, Chap. 4; Briggs [2017](/article/10.1007/s11229-019-02148-2#ref-CR13 "Briggs, R. \(2017\). Real-life Newcomb problems? In Talk at the 1st workshop on decision theory & the future of artificial intelligence in Cambridge, UK.")),Footnote 1 but still matter in some (Ahmed [2014](/article/10.1007/s11229-019-02148-2#ref-CR2 "Ahmed, A. \(2014\). Evidence, decision and causality. Cambridge: Cambridge University Press."), Chap. 4–6; Soares [2014a](/article/10.1007/s11229-019-02148-2#ref-CR50 "Soares, N. \(2014a\). Newcomblike problems are the norm. 
                  http://mindingourway.com/newcomblike-problems-are-the-norm/
                  
                . Accessed 22 Feb 2019."); Bostrom [2014a](/article/10.1007/s11229-019-02148-2#ref-CR11 "Bostrom, N. \(2014a\). Hail mary, value porosity, and utility diversification. 
                  http://www.nickbostrom.com/papers/porosity.pdf
                  
                . Accessed 22 Feb 2019.")). In fact, AI may expose the differences more often. For example, Newcomb’s problem and the prisoner’s dilemma with a replica (Kuhn [2017](/article/10.1007/s11229-019-02148-2#ref-CR30 "Kuhn, S. \(2017\). Prisoner’s dilemma. In E. N. Zalta \(Ed.\), The Stanford encyclopedia of philosophy. Spring 2017. Metaphysics Research Lab, Stanford University. 
                  https://plato.stanford.edu/archives/spr2017/entries/prisoner-dilemma/
                  
                . Accessed 22 Feb 2019."), Sect. 7) are easy to implement for agents with copyable source code (cf. Yudkowsky [2010](/article/10.1007/s11229-019-02148-2#ref-CR63 "Yudkowsky, E. \(2010\). Timeless decision theory. The Singularity Institute. 
                  http://intelligence.org/files/TDT.pdf
                  
                . Accessed 22 Feb 2019.") pp. 85ff. Soares and Fallenstein [2014b](/article/10.1007/s11229-019-02148-2#ref-CR53 "Soares, N, & Fallenstein, B. \(2014b\). Toward idealized decision theory. Technical report 2014-7. Machine Intelligence Research Institute. 
                  arXiv: 1507.01986
                  
                ."), Sect. 2; Soares [2014b](/article/10.1007/s11229-019-02148-2#ref-CR51 "Soares, N. \(2014b\). Why Ain’t you rich?
                  https://intelligence.org/2014/10/07/nate-soares-talk-aint-rich/
                  
                . Accessed 22 Feb 2019."); Cavalcanti [2010](/article/10.1007/s11229-019-02148-2#ref-CR14 "Cavalcanti, E. G. \(2010\). Causation, decision theory, and Bell’s theorem: A quantum analogue of the Newcomb problem. The British Journal for the Philosophy of Science, 61\(3\), 569–597. 
                  https://doi.org/10.1093/bjps/axp050
                  
                ."); Sect. 5). Indeed, the existence of many copies is the norm for (successful) software, including AI-based software. While copies of present-day software systems may only interact with each other in rigid, explicitly pre-programmed ways, future AI-based systems will make decisions in a more autonomous, flexible and goal-driven way. Overall, the decision theory of Newcomb-like scenarios is a central foundational issue which will plausibly become practically important in the longer term.

The problem for AI research posed by the disagreement among decision theorists can be divided into two questions:

  1. 1.

What decision theory do we want an AI to follow?

  2. 2.

How could we implement such a decision theory in an AI? Or: How do decision theories and AI frameworks or architectures map onto each other?




Although it certainly requires further discussion, there already is a large literature related to the first question.Footnote 2 In this paper, I would thus like to draw attention to the second question.

Specifically, I would like to investigate how approval-directed agents behave in Newcomb-like problems. By an approval-directed agent, I mean an agent that is coupled with an overseer. After the agent has chosen an action, the overseer scores the agent for that action. Rather than, say, trying to bring about particular states in the environment, the agent chooses actions so as to maximize the score it receives from the overseer (cf. Christiano [2014](/article/10.1007/s11229-019-02148-2#ref-CR15 "Christiano, P. \(2014\). Model-free decisions. 
                  https://ai-alignment.com/model-free-decisions-6e6609f5d99e
                  
                . Accessed 22 Feb 2019.")). A model of approval-directed agency that allows us to describe Newcomb-like situations is described and discussed in Sect. [2](/article/10.1007/s11229-019-02148-2#Sec2).

Approval-directed agency is intended as a model of reinforcement learning agents (see Sutton and Barto [1998](/article/10.1007/s11229-019-02148-2#ref-CR58 "Sutton, R. S., & Barto, A. G. \(1998\). Reinforcement learning: An introduction. Cambridge: MIT Press."); Russell and Norvig [2010](/article/10.1007/s11229-019-02148-2#ref-CR48 "Russell, S., & Norvig, P. \(2010\). Artificial intelligence. A modern approach \(3rd ed.\). London: Pearson Education, Inc."); Chaps. 17, 21, for introductions to reinforcement learning), for whom the reward function is analogous to the approval-directed agent’s overseer. Since reinforcement learning is such a general and commonly studied problem in artificial intelligence (Hutter [2005](/article/10.1007/s11229-019-02148-2#ref-CR28 "Hutter, M. \(2005\). Universal artificial intelligence. sequential decision based on algorithmic probability. In W. Brauer, G. Rozen-berg, & A. Salomaa \(Eds.\), Texts in theoretical computer science. Springer."), e.g. Chap. 4.1.3; Russell and Norvig [2010](/article/10.1007/s11229-019-02148-2#ref-CR48 "Russell, S., & Norvig, P. \(2010\). Artificial intelligence. A modern approach \(3rd ed.\). London: Pearson Education, Inc."), p. 831; Sutton and Barto [1998](/article/10.1007/s11229-019-02148-2#ref-CR58 "Sutton, R. S., & Barto, A. G. \(1998\). Reinforcement learning: An introduction. Cambridge: MIT Press."), Chap. 1), it is an especially attractive target for modeling.Footnote 3 However, because decision theories are usually defined only for single decisions, we will only discuss single decisions whereas reinforcement learning is usually concerned with sequential interactions of agent and environment. However, this decision can also be a policy choice to model sequential decision problems.Footnote 4 In addition to limiting our analysis to single decisions, we will not discuss the learning process and simply assume that the agent has already formed some model of the world.

If we assume that, after an action has been taken, the overseer rewards the agent based on the expected value of some von Neumann–Morgenstern utility function, the agent is implicitly driven by two decision theories: The overseer can use the regular conditional expectation or the causal expectation to estimate the value of its utility function; and the agent itself can follow CDT or EDT when maximizing the score it receives from the overseer (Sect. [3](/article/10.1007/s11229-019-02148-2#Sec3)).

**Fig. 1**

[ Full size image](/article/10.1007/s11229-019-02148-2/figures/1)

A causal model of an approval-directed agent in a Newcomb-like decision problem. _A_ denotes the agent’s action, _H_ the environment history, _O_ the observation on which the overseer bases the reward, _R_ is that reward, and \\(E_r\\) is information about the way the reward is computed that is only available to the overseer. The box is used to indicate that _H_ includes the two random variables \\(H_p\\) and \\(H_f\\). All of _H_ may have a causal influence on  _O_

We then show how the overall decision theory depends on these two potentially conflicting decision theories. If the overseer bases its expected value calculations on looking only at the world, then the agent’s decision theory is decisive. If the overseer bases its estimates only on the agent’s action, then the overseer’s decision (or perhaps rather action evaluation) theory is decisive.

## 2 Approval-directed agency

We first describe a model of approval-directed agency. To be able to apply both CDT and EDT, we will use causal models in Pearl’s ([2009](/article/10.1007/s11229-019-02148-2#ref-CR41 "Pearl, J. \(2009\). Causality. Models, reasoning, and inference. Cambridge: Cambridge University Press.")) sense. Consequently, we use Pearl’s _do_ -calculus-based version of CDT (Pearl [2009](/article/10.1007/s11229-019-02148-2#ref-CR41 "Pearl, J. \(2009\). Causality. Models, reasoning, and inference. Cambridge: Cambridge University Press."), Chap. 4). We will, throughout this paper, assume that the agent has already formed a (potentially implicit) model of the worldFootnote 5—e.g., based on past interactions with the environment. Also, we will only consider single decisions rather than sequential problems of iterative interaction between agent and environment.

A causal model of such a one-shot Newcomb problem from the perspective of the approval-directed agent is given in Fig. [1](/article/10.1007/s11229-019-02148-2#Fig1). In this model, the agent decides to take some action _A_ , which may causally affect some part of the environment history, i.e., the history of states, _H_. We will call that part of the history the agent’s causal future \\(H_f\\). Furthermore, the agent may be causally influenced by some other part of the environment history, which we will call the agent’s causal past \\(H_p\\). _H_ may contain information other than \\(H_f\\) and \\(H_p\\), which we will assume to be independent of _A_.Footnote 6 The _overseer_ , physically realized by, e.g., some module physically attached to the agent or a human supervisor, observes the agent’s action and partially, via some percept _O_ , the state of the worldFootnote 7. The overseer then calculates the reward _R_. To set proper incentives to the agent, we will assume the overseer to know not only the action and observation, but also everything that the agent knows (cf. Christiano [2016](/article/10.1007/s11229-019-02148-2#ref-CR16 "Christiano, P. \(2016\). Adequate oversight. 
                  https://ai-alignment.com/adequate-oversight-25fadf1edce9
                  
                . Accessed 22 Feb 2019.")). The overseer may also have access to some additional piece of information \\(E_r\\) about the way the reward is to be calculated.Footnote 8 Lastly, we assume that the sets of possible values of _A_ , _O_ and \\(E_r\\) are finite.

In principle, the overseer could reward the agent in all kinds of ways. E.g., it could reward the agent “deontologically” (Alexander and Moore [2016](/article/10.1007/s11229-019-02148-2#ref-CR4 "Alexander, L., & Moore, M. \(2016\). Deontological ethics. In E. N. Zalta \(Ed.\), The Stanford encyclopedia of philosophy. Winter 2016. Metaphysics Research Lab, Stanford University. 
                  https://plato.stanford.edu/archives/win2016/entries/ethics-deontological/
                  
                . Accessed 22 Feb 2019.")) for taking a particular action independently of the consequences of taking that action. In this paper, we will assume that the reward estimates the value of some von Neumann–Morgenstern utility function _U_ that only depends on states of the world. I use the capital _U_ to indicate that the utility function, too, is a random variable (in the Bayesian sense). For simplicity’s sake, we will, again, assume that the set of possible values of _U_ is finite.

We will view _U_ as representing the system designer’s preferences over world states.Footnote 9 While other ways of assigning the reward are possible, this is certainly an attractive way of getting an approval-directed agent to achieve goals that we want it to achieve. After all, in real-world applications, we will usually care about the outcomes of the agent’s decisions, such as whether a car has reached its destination in time or whether a human has been hurt.

The standard way of estimating _U_(_H_) (or any quantity for that matter) is the familiar conditional expectation. Thus, the overseer may compute the reward as

$$\begin{aligned} r=\mathbb {E}\left[ U(H) \mid e_r, a, o \right] , \end{aligned}$$

(1) 

where _r_ , _a_ , \\(e_r\\), and _o_ are values of _R_ , _A_ , \\(E_r\\), and _O_ , respectively.Footnote 10

A causal decision theorist overseer agrees that after an action _a_ is taken the right-hand side of Eq. [1](/article/10.1007/s11229-019-02148-2#Equ1) most accurately estimates how much utility is achieved. She merely thinks that this term should not be used to decide which action _a_ to take in the first place.Footnote 11 However, this puts a causal decision theorist overseer in a peculiar situation. Whatever formula she uses to compute the reward will also be used by the reward-maximizing agent to decide which action to take. A causal decision theorist overseer might therefore worry (rightfully, as we will see) that providing rewards according to Eq. [1](/article/10.1007/s11229-019-02148-2#Equ1) will make the agent EDT-ish. Hence, she either has to incorrectly estimate how much utility was achieved; or live with the agent using an—in her mind—incorrect way of weighing her options. If she prefers the latter, she would reward according to Eq. [1](/article/10.1007/s11229-019-02148-2#Equ1). But arguably getting the agent to choose correctly is the overseer’s primary goal. Thus, she might prefer to compute the reward according to

$$\begin{aligned} r=\mathbb {E}\left[ U(H) \mid e_r, do(a), o \right] . \end{aligned}$$

(2) 

Here, _do_(_a_) refers to Pearl’s do-calculus, where conditioning on _do_(_a_) roughly means intervening from outside the causal model to set _A_ to _a_. For an introduction to the do-calculus, see Pearl ([2009](/article/10.1007/s11229-019-02148-2#ref-CR41 "Pearl, J. \(2009\). Causality. Models, reasoning, and inference. Cambridge: Cambridge University Press.")). Although a causal decision theorist overseer may prefer computing rewards according to Eq. [1](/article/10.1007/s11229-019-02148-2#Equ1), we will from now on say “the overseer uses CDT” if rewards are computed according to Eq. [2](/article/10.1007/s11229-019-02148-2#Equ2) and “the overseer uses EDT” if rewards are calculated according to Eq. [1](/article/10.1007/s11229-019-02148-2#Equ1).

An approval-directed agent is characterized by maximizing the reward it receives from the overseer.Footnote 12 However, decision theory offers us, again, (at least) two different expected values, the regular expected value of EDT

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right] , \end{aligned}$$

(3) 

and CDT’s causal expected value

$$\begin{aligned} \mathbb {E}\left[ R \mid do(a) \right] . \end{aligned}$$

(4) 

We leave the interesting question of which (if any) decision theory describes the behavior of current reinforcement learning algorithms to future researchFootnote 13 and in the following assume that the agent is known to implement either CDT or EDT.

## 3 The conflict of the decision theories of agent and overseer

When viewed together with the overseer, our agent may now be seen as containing two decision theories, one for computing the reward and one in the algorithm that tries to find the action to maximize that reward. These decision theories may not always be the same. Given this potential discrepancy, the question is which of the two decision theories prevails, i.e., for which configurations of the two decision theories the overall agent acts like a CDT agent and for which it acts like an EDT agent w.r.t.  _U_.

As it turns out, the answer to this question depends on the decision problem in question. In particular, it depends on whether the overseer updates its estimate of _U_(_H_) primarily based on the action taken by the agent or on its observation of the environment.

For illustration, consider two versions of Newcomb’s problem. In both versions, the predictor is equally reliable—e.g., correct with 90% probability—and the potential box contents are the same—e.g., the standard $1K and $1M. As usual, the content of the opaque box cannot be causally influenced by one’s decision. In the first version, the overseer eventually sees the payoff, i.e., how much money the agent has made. In this case, as soon as the money is observed, the overseer’s estimate of _U_(_H_) becomes independent of the agent’s action. More generally, _O_ may tell the overseer so much about _U_(_H_) that it becomes independent of _A_ even if _U_(_H_) is not yet fully observed. That is,

$$\begin{aligned} \mathbb {E}\left[ U(H) \mid e_r, a, o \right] = \mathbb {E}\left[ U(H) \mid e_r, o \right] \end{aligned}$$

(5) 

and

$$\begin{aligned} \mathbb {E}\left[ U(H) \mid e_r, do(a), o \right] = \mathbb {E}\left[ U(H) \mid e_r, o \right] \end{aligned}$$

(6) 

for all \\(e_r\\), _a_ and _o_. Note that neither of these two implies the other.Footnote 14 Intuitively speaking, these two mean that the reward is ultimately determined by _U_(_H_).

In the second version of Newcomb’s problem, the monetary payoff is not observed but covertly invested into increasing the agent’s utility function. Only the agent’s choice can then inform the overseer about _U_(_H_). Formally, it is both

$$\begin{aligned} \mathbb {E}\left[ U(H) \mid e_r, a, o \right] = \mathbb {E}\left[ U(H) \mid e_r, a \right] \end{aligned}$$

(7) 

and

$$\begin{aligned} \mathbb {E}\left[ U(H) \mid e_r, do(a), o \right] = \mathbb {E}\left[ U(H) \mid e_r, do(a) \right] . \end{aligned}$$

(8) 

Intuitively speaking, these two equations mean that the reward is not determined by _U_(_H_) but by what the overseer believes _U_(_H_) will be given _a_ or _do_(_a_).

Again, we assume that this is known to the agent. An example class of cases is that in which the agent’s decisions are correlated with those of agents in far-away parts of the environment (cf. Treutlein and Oesterheld [2017](/article/10.1007/s11229-019-02148-2#ref-CR60 "Treutlein, J., & Oesterheld, C. \(2017\). A wager for evidential decision theory. Unpublished manuscript."); Oesterheld [2018b](/article/10.1007/s11229-019-02148-2#ref-CR40 "Oesterheld, C. \(2018b\). Newcomb’s problem, the Prisoner’s dilemma and large universes: A consideration for consequentialists. In Talk at the 15th conference of the international society for utilitarian studies. Karlsruhe Institute of Technology \(KIT\), July 24–26, 2018.")). The two versions are depicted in Fig. [2](/article/10.1007/s11229-019-02148-2#Fig2).

**Fig. 2**

[ Full size image](/article/10.1007/s11229-019-02148-2/figures/2)

Two different ways in which the overseer can calculate the reward

Of course, these are only the two extremes from the set of all possible situations. In real-world Newcomb-like scenarios, the overseer may also draw some information from both sources. Nonetheless, it seems useful to understand the extreme cases, as this may also help us understand mixed ones.

In the following subsections, we will show that in the first type, the decision theory of the agent is decisive, whereas in the second type, the overseer’s decision theory isFootnote 15. Roughly, the reason for that is the following: As noted earlier, the reward in the first type depends directly on _U_(_H_). Thus, the agent will try to maximize _U_(_H_) according to its own decision theory. In the second type, the overseer takes the agent’s action _a_ and then considers what either _a_ or _do_(_a_) says about _U_(_H_). Thus, the agent has to pay careful attention to whether the overseer uses EDT’s or CDT’s expected value.

We prove this formally by considering all possible configurations of the type of the problem, the overseer’s decision theory and the agent’s decision theory. While we will limit our analysis to EDT and CDT, the results can easily be generalized to variants of these that arise from modifying the causal model or conditional credence distribution (e.g. Yudkowsky [2010](/article/10.1007/s11229-019-02148-2#ref-CR63 "Yudkowsky, E. \(2010\). Timeless decision theory. The Singularity Institute. 
                  http://intelligence.org/files/TDT.pdf
                  
                . Accessed 22 Feb 2019."); “Disposition-based decision theory”; Spohn [2012](/article/10.1007/s11229-019-02148-2#ref-CR57 "Spohn, W. \(2012\). Reversing 30 years of discussion: Why causal decision theorists should one-box. Synthese, 187\(1\), 95–122."); Dohrn [2015](/article/10.1007/s11229-019-02148-2#ref-CR17 "Dohrn, D. \(2015\). Egan and agents: How evidential decision theory can deal with Egan’s dilemma. Synthese, 192\(6\), 1883–1908.")). The analysis is summarized in Table [1](/article/10.1007/s11229-019-02148-2#Tab1).

**Table 1 An overview of the results of the calculations in Sect.[3](/article/10.1007/s11229-019-02148-2#Sec3)**

[Full size table](/article/10.1007/s11229-019-02148-2/tables/1)

### 3.1 First type

#### 3.1.1 The EDT agent

The EDT agent judges its action by

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right] . \end{aligned}$$

(9) 

If the overseer calculates regular conditional expectation, then it is

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right]= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, O, a \right] \mid a \right] \end{aligned}$$

(10) 

$$\begin{aligned}= & {} \mathbb {E} \left[ U(H) \mid a \right] , \end{aligned}$$

(11) 

where the last line is due to what is sometimes called the law of total expectation (LTE) or the tower rule (see, e.g., Ross [2007](/article/10.1007/s11229-019-02148-2#ref-CR47 "Ross, S. M. \(2007\). Introduction to probability models \(9th ed.\). Cambridge: Academic Press."), Sect. 3.4; Billingsley [1995](/article/10.1007/s11229-019-02148-2#ref-CR10 "Billingsley, P. \(1995\). Probability and measure \(3rd ed.\). Hoboken: Wiley."), Theorem 34.4). Intuitively, you cannot expect that gaining more evidence (i.e., \\(E_r\\) and _O_ in addition to _a_) moves your expectation of _U_(_H_) into any particular direction.

Because the overseer knows more than the agent, we will need this rule in all of the following derivations. Its application makes it hard to generalize these results to other decision theories, since LTE does not apply if the two decision theories do not both compute a form of expected utility.

Equations [10](/article/10.1007/s11229-019-02148-2#Equ10) and [11](/article/10.1007/s11229-019-02148-2#Equ11) show that if the overseer computes regular expected value and the agent maximizes the reward according to EDT, then the agent as a whole maximizes _U_ according to EDT.

If the overseer computes CDT’s expected value, it is

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right]= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, do(a), O \right] \mid a \right] \end{aligned}$$

(12) 

$$\begin{aligned}= & {} \sum _{e_r,o} P(e_r,o\mid a) \cdot \mathbb {E}\left[ U(H) \mid e_r, do(a), o \right] \end{aligned}$$

(13) 

$$\begin{aligned}&\underset{\hbox {eq. }5\hbox { and } 6}{=}&\sum _{e_r,o} P(e_r,o\mid a) \cdot \mathbb {E}\left[ U(H) \mid e_r, a, o \right] \end{aligned}$$

(14) 

$$\begin{aligned}= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, a, O \right] \mid a \right] \end{aligned}$$

(15) 

$$\begin{aligned}&\underset{\text {LTE}}{=}&\mathbb {E}\left[ U(H) \mid a \right] \end{aligned}$$

(16) 

#### 3.1.2 The CDT agent

The CDT agent judges its action by

$$\begin{aligned} \mathbb {E}\left[ R \mid do(a) \right] . \end{aligned}$$

(17) 

If the overseer uses regular expected value (EDT), then

$$\begin{aligned} \mathbb {E}\left[ R \mid do(a) \right]= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid a, O, E_r \right] \mid do(a) \right] \end{aligned}$$

(18) 

$$\begin{aligned}= & {} \sum _{e_r,o} P(e_r,o\mid do(a)) \cdot \mathbb {E}\left[ U(H) \mid a, o, e_r \right] \end{aligned}$$

(19) 

$$\begin{aligned}&\underset{\hbox {eq. }5\hbox { and } 6}{=}&\sum _{e_r,o} P(e_r,o\mid do(a)) \cdot \mathbb {E}\left[ U(H) \mid do(a), o, e_r \right] \end{aligned}$$

(20) 

$$\begin{aligned}= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid do(a), O, E_r \right] \mid do(a) \right] \end{aligned}$$

(21) 

$$\begin{aligned}&\underset{\text {LTE}}{=}&\mathbb {E}\left[ U(H) \mid do(a) \right] \end{aligned}$$

(22) 

Learning about an intervention _do_(_a_) cannot always be treated in the same way as learning about other events. Hence, the application of the law of total expectation is not straightforward. However, \\(P(\cdot \mid do(x))\\) is always a probability distribution. Because the law of total expectation applies to all probability distributions, it also applies to ones resulting from the application of the do-calculus.

If the overseer uses CDT’s expected value, then

$$\begin{aligned} \mathbb {E}\left[ R \mid do(a) \right]= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, O, do(a) \right] \mid do(a) \right] \end{aligned}$$

(23) 

$$\begin{aligned}&\underset{\text {LTE}}{=}&\mathbb {E}\left[ U(H) \mid do(a) \right] . \end{aligned}$$

(24) 

### 3.2 Second type

#### 3.2.1 The EDT agent

The EDT agent judges its actions by

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right] . \end{aligned}$$

(25) 

If the overseer is based on regular conditional expectation (EDT), then it is again

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right]= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, a \right] \mid a \right] \end{aligned}$$

(26) 

$$\begin{aligned}&\underset{\text {LTE}}{=}&\mathbb {E}\left[ U(H) \mid a \right] . \end{aligned}$$

(27) 

If the overseer is based on CDT-type expectation, then

$$\begin{aligned} \mathbb {E}\left[ R \mid a \right]= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, do(a) \right] \mid a \right] \end{aligned}$$

(28) 

$$\begin{aligned}= & {} \sum _{e_r} P(e_r\mid a) \cdot \mathbb {E} \left[ U(H) \mid do(a), e_r \right] \end{aligned}$$

(29) 

$$\begin{aligned}= & {} \sum _{e_r} P(e_r ) \cdot \mathbb {E} \left[ U(H) \mid do(a), e_r \right] \end{aligned}$$

(30) 

$$\begin{aligned}= & {} \sum _{e_r} P(e_r\mid do(a)) \cdot \mathbb {E} \left[ U(H) \mid do(a), e_r \right] \end{aligned}$$

(31) 

$$\begin{aligned}= & {} \mathbb {E}\left[ \mathbb {E}\left[ U(H) \mid E_r, do(a) \right] \mid do(a) \right] \end{aligned}$$

(32) 

$$\begin{aligned}&\underset{\text {LTE}}{=}&\mathbb {E}\left[ U(H) \mid do(a) \right] . \end{aligned}$$

(33) 

#### 3.2.2 The CDT agent

The CDT agent judges actions by

$$\begin{aligned} \mathbb {E}\left[ R \mid do(a) \right] . \end{aligned}$$

(34) 

Because of Rule 2 in Theorem 3.4.1 of Pearl ([2009](/article/10.1007/s11229-019-02148-2#ref-CR41 "Pearl, J. \(2009\). Causality. Models, reasoning, and inference. Cambridge: Cambridge University Press."), Sect. 3.4.2) applied to the causal graph of Fig. [2](/article/10.1007/s11229-019-02148-2#Fig2)b, it is

$$\begin{aligned} \mathbb {E}\left[ R \mid do(a) \right] = \mathbb {E}\left[ R \mid a \right] . \end{aligned}$$

(35) 

Thus, the analysis of the CDT agent is equivalent to that of the EDT agent.

## 4 Conclusion

In this paper, we have taken a step to map reinforcement learning architectures onto decision theories. We found that in Newcomb-like problems, if the overseer rewards the agent purely on the basis of the agent’s action, then the overall system’s behavior is determined by the decision theory implicit in the overseer’s reward function. If the overseer judges the agent based on looking at the world, however, then the agent’s decision theory is decisive.

This has implications for how we should design approval-directed agents. For instance, if we would like to leave decision-theoretical judgements to the overseer, we must ensure that the overseer assigns rewards before making new observations about the world state (cf. Christiano [2014](/article/10.1007/s11229-019-02148-2#ref-CR15 "Christiano, P. \(2014\). Model-free decisions. 
                  https://ai-alignment.com/model-free-decisions-6e6609f5d99e
                  
                . Accessed 22 Feb 2019."), Sect. “Avoid lock-in”). Of course, this makes the reward less accurate and may thus slow down the agent’s learning process. If we want the overseer to look at both the world and the agent’s action, then we need to align both the overseer’s and the agent’s decision theory.

Much more research is left to be done at the intersection of decision theory and artificial intelligence. For instance, what (if any) decision theories describe the way modern reinforcement learning algorithms maximize reward? Do the results of this paper generalize to sequential decision problems? Moving away from the reinforcement learning framework, what decision theories do other frameworks in AI implement? What about decision theories other than CDT and EDT?

## Notes

  1. In fact, Eells ([1981](/article/10.1007/s11229-019-02148-2#ref-CR19 "Eells, E. \(1981\). Causality, utility, and decision. Synthese, 48\(2\), 295–329.")) has argued that EDT and CDT always behave in the same way, but I disagree with this assessment based on the reasons given by Ahmed ([2014](/article/10.1007/s11229-019-02148-2#ref-CR2 "Ahmed, A. \(2014\). Evidence, decision and causality. Cambridge: Cambridge University Press."), Sect. 4.3–4.6) and Price ([1986](/article/10.1007/s11229-019-02148-2#ref-CR44 "Price, H. \(1986\). Against causal decision theory. Synthese, 67, 195–212.")).

  2. Of course, the existing literature asks about the right decision theory proper. The answer to that question might differ from the answer to the AI-specific question (cf. Kumar [2017](/article/10.1007/s11229-019-02148-2#ref-CR31 "Kumar, R. \(2017\). New work for decision theorists. In Talk at the 1st workshop on decision theory & the future of artificial intelligence in Cambridge, UK."); Treutlein [2018](/article/10.1007/s11229-019-02148-2#ref-CR59 "Treutlein, J. \(2018\). How the decision theory of Newcomb like problems differs between humans and machines. In Talk at the 2nd workshop on decision theory & the future of artificial intelligence in Munich, Germany.")). After all, even if we have identified the right decision theory for ourselves, we may want to implement a different decision theory in an AI. One reason could be that the main contenders are not self-recommending—it has been pointed out that EDT and CDT both recommend to self-modify into slightly different decision theories (Meacham [2010](/article/10.1007/s11229-019-02148-2#ref-CR36 "Meacham, C. J. G. \(2010\). Binding and its consequences. Philosophical Studies, 149\(1\), 49–71. 
                  https://doi.org/10.1007/s11098-010-9539-7
                  
                ."); Soares and Fallenstein [2014b](/article/10.1007/s11229-019-02148-2#ref-CR53 "Soares, N, & Fallenstein, B. \(2014b\). Toward idealized decision theory. Technical report 2014-7. Machine Intelligence Research Institute. 
                  arXiv: 1507.01986
                  
                ."), Sect. 3; Yudkowsky [2010](/article/10.1007/s11229-019-02148-2#ref-CR63 "Yudkowsky, E. \(2010\). Timeless decision theory. The Singularity Institute. 
                  http://intelligence.org/files/TDT.pdf
                  
                . Accessed 22 Feb 2019."), Sect. 2; Greene [2018](/article/10.1007/s11229-019-02148-2#ref-CR24 "Greene, P. \(2018\). Success-first decision theories. In A. Ahmed \(Ed.\), Newcomb’s problem. Classic Philosophical Arguments. Cambridge University Press. 
                  https://doi.org/10.1017/9781316847893.007
                  
                .")) . The same arguments imply that even if one is convinced of CDT or EDT one would not want the AI to use CDT and EDT. That said, one could also leave the self-modification to the AI.

  3. Reinforcement learning and approval-directed agency are also common outside of artificial intelligence. For example, Achen and Bartels ([2016](/article/10.1007/s11229-019-02148-2#ref-CR1 "Achen, C. H., & Bartels, L. M. \(2016\). Democracy For realists. Why elections do not produce responsive government. Princeton: Princeton University Press."), Chap. 4) review evidence which shows that electorates often vote retrospectively to punish or reward incumbents.

  4. This is consistent with what reinforcement learning algorithms usually do—they choose policies rather than individual actions. This is because the utility of a single action usually cannot be evaluated without knowing how the agent will deal with situations that might arise as a result of taking that action.

When individual actions _can_ be evaluated in isolation, the _ex ante_ policy choice sometimes differs from the choice of individual actions (see the absent-minded driver, introduced by Piccione and Rubinstein [1997](/article/10.1007/s11229-019-02148-2#ref-CR42 "Piccione, M., & Rubinstein, A. \(1997\). On the interpretation of decision problems with imperfect recall. Games and Economic Behavior, 20, 3–24."); cf. Aumann et al. [1997](/article/10.1007/s11229-019-02148-2#ref-CR9 "Aumann, R. J., Hart, S., & Perry, M. \(1997\). The absent-minded driver. Games and Economic Behavior, 20, 102–116."); the Newcomb-like scenarios discussed by, e.g., Hintze [2014](/article/10.1007/s11229-019-02148-2#ref-CR26 "Hintze, D. \(2014\). Problem class dominance in predictive dilemmas. 
                  http://intelligence.org/files/ProblemClassDominance.pdf
                  
                . Accessed 22 Feb 2019."); Soares and Levinstein [2017](/article/10.1007/s11229-019-02148-2#ref-CR54 "Soares, N., & Levinstein, B. A. \(2017\). Cheating death in damascus. In Formal epistemology workshop \(FEW\) 2017. University of Washington, Seattle, USA. 
                  https://intelligence.org/files/DeathInDamascus.pdf
                  
                . Accessed 22 Feb 2019."), Sect. 2; and the problems in anthropics discussed by Armstrong [2011](/article/10.1007/s11229-019-02148-2#ref-CR6 "Armstrong, S. \(2011\). Anthropic decision theory. Future of Humanity Institute. 
                  arXiv: 1110.6437
                  
                .")). While it is rarely discussed in the debate between evidential and causal decision theorists, a few authors regard this discrepancy as crucial and have argued that a proper decision theory should be about optimal policy choices (e.g. Hintze [2014](/article/10.1007/s11229-019-02148-2#ref-CR26 "Hintze, D. \(2014\). Problem class dominance in predictive dilemmas. 
                  http://intelligence.org/files/ProblemClassDominance.pdf
                  
                . Accessed 22 Feb 2019."); Soares and Fallenstein [2014b](/article/10.1007/s11229-019-02148-2#ref-CR53 "Soares, N, & Fallenstein, B. \(2014b\). Toward idealized decision theory. Technical report 2014-7. Machine Intelligence Research Institute. 
                  arXiv: 1507.01986
                  
                ."), Sect. 2.1; Soares and Levinstein [2017](/article/10.1007/s11229-019-02148-2#ref-CR54 "Soares, N., & Levinstein, B. A. \(2017\). Cheating death in damascus. In Formal epistemology workshop \(FEW\) 2017. University of Washington, Seattle, USA. 
                  https://intelligence.org/files/DeathInDamascus.pdf
                  
                . Accessed 22 Feb 2019."), Sect. 2). However, this issue is beyond the scope of the present paper.

Further issues in sequential Newcomb-like problems are discussed by Everitt et al. ([2015](/article/10.1007/s11229-019-02148-2#ref-CR20 "Everitt, T., Leike, J., & Hutter, M. \(2015\). Sequential extensions of causal and evidential decision theory. In T. Walsh \(Ed.\), Algorithmic decision theory: 4th international conference, ADT 2015, Lexington, KY, USA, September 27–30, 2015, Proceedings \(pp. 205–221\). Springer. 
                  https://doi.org/10.1007/978-3-319-23114-3_13
                  
                .")).

  5. There is a broad philosophical literature on whether causal relationships exist and whether they can be inferred in cases where the agent is part of the environment. See, e.g., the edited volume by Price and Corry ([2007](/article/10.1007/s11229-019-02148-2#ref-CR46 "Price, H., & Corry, R. \(Eds.\). \(2007\). Causation, physics, and the constitution of reality: Russell’s republic revisited. Oxford: Oxford University Press.")).

  6. For simplicity, we will ignore dependences not resulting from causation (Arntzenius [2010](/article/10.1007/s11229-019-02148-2#ref-CR8 "Arntzenius, F. \(2010\). Reichenbach’s common cause principle. In E. N. Zalta \(Ed.\), The Stanford en-cyclopedia of philosophy. Fall 2010. Metaphysics Research Lab, Stanford University.")). For example, if you play against a copy, there is a logical dependence between your and your copy’s decision. Even if you know a set of nodes in the causal graph that _d_ -separates your and your copy’s decision (e.g., if you know your common source code), the dependence persists. We exclude these dependences because such situations cannot be modeled by standard causal graphs.

However, we could adapt causal graphs to accomodate for these kinds of dependences. First, we could modify our definition of causality in such a way that dependence does imply causation, as has been proposed by Spohn ([2003](/article/10.1007/s11229-019-02148-2#ref-CR56 "Spohn, W. \(2003\). Dependency equilibria and the causal structure of decision and game situation. Homo Oeconomicus, 20, 195–255."), [2012](/article/10.1007/s11229-019-02148-2#ref-CR57 "Spohn, W. \(2012\). Reversing 30 years of discussion: Why causal decision theorists should one-box. Synthese, 187\(1\), 95–122.")), Yudkowsky ([2010](/article/10.1007/s11229-019-02148-2#ref-CR63 "Yudkowsky, E. \(2010\). Timeless decision theory. The Singularity Institute. 
                  http://intelligence.org/files/TDT.pdf
                  
                . Accessed 22 Feb 2019.")) and others. For instance, we could model the dependence between the outputs of two instances of an algorithm by introducing a logical node as a common cause of the two. This logical node would then represent the output of the abstract algorithm that the two copies implement. While changes to the concept of causation may affect CDT’s implied behavior, the results from this paper can be directly transfered to such modifications.

Alternatively, we could extend causal graphs to also include non-causal dependences (cf. Poellinger [2013](/article/10.1007/s11229-019-02148-2#ref-CR43 "Poellinger, R. \(2013\). Unboxing the concepts in Newcomb’s paradox: Causation, prediction, decision. 
                  http://philsci-archive.pitt.edu/9887/7/newcomb_in_ckps.pdf
                  
                . Accessed 22 Feb 2019.")). Such extension necessitates a new CDT formalism, so the proofs from this paper do not directly transfer to this case. That said, I expect our results to generalize given that both EDT and CDT would probably treat non-causal dependences on the action just like they treat causal arrows directed toward the action.

  7. Christiano ([2014](/article/10.1007/s11229-019-02148-2#ref-CR15 "Christiano, P. \(2014\). Model-free decisions. 
                  https://ai-alignment.com/model-free-decisions-6e6609f5d99e
                  
                . Accessed 22 Feb 2019.")) does not define approval-directed agency formally, but judging from a comment he made at <https://medium.com/paulfchristiano/i-agree-that-the-key-feature-of-approval-directed-agents-is-that-the-causal-picture-is-736b4474910e>, he considers it crucial to his conception that the overseer only looks at the agent’s action and does not observe the action’s consequences (cf. the distinction introduced in Sect. [3](/article/10.1007/s11229-019-02148-2#Sec3)).

  8. One reason for the overseer to have access to such additional information is that some of the human supervisor’s values may not be expressible in a way that the approval-directed agent’s algorithm can utilize (cf. Muehlhauser and Helm [2012](/article/10.1007/s11229-019-02148-2#ref-CR37 "Muehlhauser, L., & Helm, L. \(2012\). Intelligence explosion and machine ethics. Machine Intelligence Research Institute. 
                  https://intelligence.org/files/IE-ME.pdf
                  
                . Accessed 22 Feb 2019."), Sects. 3, 4, 5.3).

  9. Some have tried to modify the reward relative to the designer’s preferences to make the reinforcement learning problem easier to solve (Sorg [2011](/article/10.1007/s11229-019-02148-2#ref-CR55 "Sorg, J. D. \(2011\). The optimal reward problem: Designing effective reward for bounded agents. PhD thesis, University of Michigan. 
                  https://deepblue.lib.umich.edu/bitstream/handle/2027.42/89705/jdsorg_1.pdf
                  
                . Accessed 22 Feb 2019.")), although Sutton and Barto ([1998](/article/10.1007/s11229-019-02148-2#ref-CR58 "Sutton, R. S., & Barto, A. G. \(1998\). Reinforcement learning: An introduction. Cambridge: MIT Press."), Sect. 3.2) explicitly discourage such tricks in their reinforcement learning textbook.

  10. At first sight this may be confusing to some readers, because in reinforcement learning, utility sometimes refers to expected cumulative reward (Russell and Norvig [2010](/article/10.1007/s11229-019-02148-2#ref-CR48 "Russell, S., & Norvig, P. \(2010\). Artificial intelligence. A modern approach \(3rd ed.\). London: Pearson Education, Inc."), Chap. 17, 21), although others use the term _value function_ instead (Sutton and Barto [1998](/article/10.1007/s11229-019-02148-2#ref-CR58 "Sutton, R. S., & Barto, A. G. \(1998\). Reinforcement learning: An introduction. Cambridge: MIT Press."), Sect. 3.7). Here, _U_ does not refer to utility in that sense but in the decision-theoretical sense of representing intrinsic values. So, in the present case, we have two “layers” of goals: first, the agent maximizes the reward _r_. Second, the agent as incentivized by the overseer’s way of calculating rewards maximizes utility _U_(_H_).

One cause of confusion is that in model applications of reinforcement learning, the reward function possesses full knowledge of the world state and thus does not require the use of the expectation operator.

  11. If the disagreement in Newcomb’s problem is to be about different theories of rational choice (EDT, CDT and so forth) rather than the predictive abilities of “the being”, Omega or the psychologist, then after requesting both boxes a proponent of two-boxing has to believe that she will probably receive only $1000. Causal and evidential decision theorists agree that regular conditional expectation is the correct way of updating one’s beliefs about the state of the world after an action has been taken (cf. the distinction between “acts” and “actions” in Pearl [2009](/article/10.1007/s11229-019-02148-2#ref-CR41 "Pearl, J. \(2009\). Causality. Models, reasoning, and inference. Cambridge: Cambridge University Press.") Sect. 4.1.1).

  12. In reinforcement learning, some have proposed alternative optimization targets that incorporate, e.g., risk aversion (García and Fernández [2015](/article/10.1007/s11229-019-02148-2#ref-CR22 "García, J., & Fernández, F. \(2015\). A comprehensive survey on safe reinforcement learning. Journal of Machine Learning Research, 16, 1437–1480."), Sect. 3).

  13. For preliminary work on this question, see Mayer et al. ([2016](/article/10.1007/s11229-019-02148-2#ref-CR35 "Mayer, D., Feldmaier, J., & Shen, H. \(2016\). Reinforcement learning in conflicting environments for autonomous vehicles. In International workshop on robotics in the 21st century: Challenges and promises. 
                  arXiv: 1610.07089
                  
                .")), Oesterheld ([2018a](/article/10.1007/s11229-019-02148-2#ref-CR39 "Oesterheld, C. \(2018a\). Doing what has worked well in the past leads to evidential decision theory. 
                  https://casparoesterheld.files.wordpress.com/2018/01/learning-dt.pdf
                  
                . Accessed 22 Feb 2019.")) and perhaps Albert and Heiner ([2001](/article/10.1007/s11229-019-02148-2#ref-CR3 "Albert, M., & Heiner, R. A. \(2001\). An indirect-evolution approach to Newcomb’s problem. CSLE discussion paper, no. 2001-01. 
                  https://www.econstor.eu/bitstream/10419/23110/1/2001-01_newc.pdf
                  
                . Accessed 22 Feb 2019.")).

  14. We give a brief justification of this claim. If all of _a_ ’s causal influence on _H_ can be discerned from _O_ , then, of course, _a_ could still be diagnostically relevant for one’s estimate of _U_(_H_). The other direction is more complicated. The idea is that Eq. [5](/article/10.1007/s11229-019-02148-2#Equ5) can be true if the causal and non-causal implications of _a_ exactly cancel each other out. An example is a version of Newcomb’s problem in which one-boxing ensures with certainty that both boxes contain the same amount of money. Then if _O_ and \\(E_r\\) do not contain any information, the expected value of two-boxing and one-boxing is the same and so learning of the action is irrelevant for estimating _U_(_H_). However, two-boxing is causally better than one-boxing, so Eq. [6](/article/10.1007/s11229-019-02148-2#Equ6) is violated.

  15. The dominance of the overseer’s decision theory in the second type of Newcomb’s problem is mentioned (though not proven) by Christiano ([2014](/article/10.1007/s11229-019-02148-2#ref-CR15 "Christiano, P. \(2014\). Model-free decisions. 
                  https://ai-alignment.com/model-free-decisions-6e6609f5d99e
                  
                . Accessed 22 Feb 2019."), Sect. “Avoid lock-in”).




## References

  * Achen, C. H., & Bartels, L. M. (2016). _Democracy For realists. Why elections do not produce responsive government_. Princeton: Princeton University Press.

[Book](https://doi.org/10.1515%2F9781400882731) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Democracy%20For%20realists.%20Why%20elections%20do%20not%20produce%20responsive%20government&doi=10.1515%2F9781400882731&publication_year=2016&author=Achen%2CCH&author=Bartels%2CLM)

  * Ahmed, A. (2014). _Evidence, decision and causality_. Cambridge: Cambridge University Press.

[Book](https://doi.org/10.1017%2FCBO9781139107990) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Evidence%2C%20decision%20and%20causality&doi=10.1017%2FCBO9781139107990&publication_year=2014&author=Ahmed%2CA)

  * Albert, M., & Heiner, R. A. (2001). _An indirect-evolution approach to Newcomb’s problem_. CSLE discussion paper, no. 2001-01. <https://www.econstor.eu/bitstream/10419/23110/1/2001-01_newc.pdf>. Accessed 22 Feb 2019.

  * Alexander, L., & Moore, M. (2016). Deontological ethics. In E. N. Zalta (Ed.), _The Stanford encyclopedia of philosophy_. Winter 2016. Metaphysics Research Lab, Stanford University. <https://plato.stanford.edu/archives/win2016/entries/ethics-deontological/>. Accessed 22 Feb 2019.

  * Almond, P. (2010). _On causation and correlation part 1: Evidential decision theory is correct_. <https://casparoesterheld.files.wordpress.com/2016/12/almond_edt_1.pdf>. Accessed 22 Feb 2019.

  * Armstrong, S. (2011). _Anthropic decision theory_. Future of Humanity Institute. [arXiv: 1110.6437](http://arxiv.org/abs/1110.6437).

  * Arntzenius, F. (2008). No regrets, or: Edith Piaf revamps decision theory. _Erkenntnis_ , _68_(2), 277–297. <https://doi.org/10.1007/s10670-007-9084-8>.

[Article](https://link.springer.com/doi/10.1007/s10670-007-9084-8) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=No%20regrets%2C%20or%3A%20Edith%20Piaf%20revamps%20decision%20theory&journal=Erkenntnis&doi=10.1007%2Fs10670-007-9084-8&volume=68&issue=2&pages=277-297&publication_year=2008&author=Arntzenius%2CF)

  * Arntzenius, F. (2010). Reichenbach’s common cause principle. In E. N. Zalta (Ed.), _The Stanford en-cyclopedia of philosophy_. Fall 2010. Metaphysics Research Lab, Stanford University.

  * Aumann, R. J., Hart, S., & Perry, M. (1997). The absent-minded driver. _Games and Economic Behavior_ , _20_ , 102–116.

[Article](https://doi.org/10.1006%2Fgame.1997.0577) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20absent-minded%20driver&journal=Games%20and%20Economic%20Behavior&doi=10.1006%2Fgame.1997.0577&volume=20&pages=102-116&publication_year=1997&author=Aumann%2CRJ&author=Hart%2CS&author=Perry%2CM)

  * Billingsley, P. (1995). _Probability and measure_ (3rd ed.). Hoboken: Wiley.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Probability%20and%20measure&publication_year=1995&author=Billingsley%2CP)

  * Bostrom, N. (2014a). _Hail mary, value porosity, and utility diversification_. <http://www.nickbostrom.com/papers/porosity.pdf>. Accessed 22 Feb 2019.

  * Bostrom, N. (2014b). _Superintelligence. Paths, dangers, strategies_ (1st ed.). Oxford: Oxford University Press.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Superintelligence.%20Paths%2C%20dangers%2C%20strategies&publication_year=2014&author=Bostrom%2CN)

  * Briggs, R. (2017). Real-life Newcomb problems? In _Talk at the 1st workshop on decision theory & the future of artificial intelligence in Cambridge, UK_.

  * Cavalcanti, E. G. (2010). Causation, decision theory, and Bell’s theorem: A quantum analogue of the Newcomb problem. _The British Journal for the Philosophy of Science_ , _61_(3), 569–597. <https://doi.org/10.1093/bjps/axp050>.

[Article](https://doi.org/10.1093%2Fbjps%2Faxp050) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causation%2C%20decision%20theory%2C%20and%20Bell%E2%80%99s%20theorem%3A%20A%20quantum%20analogue%20of%20the%20Newcomb%20problem&journal=The%20British%20Journal%20for%20the%20Philosophy%20of%20Science&doi=10.1093%2Fbjps%2Faxp050&volume=61&issue=3&pages=569-597&publication_year=2010&author=Cavalcanti%2CEG)

  * Christiano, P. (2014). _Model-free decisions_. <https://ai-alignment.com/model-free-decisions-6e6609f5d99e>. Accessed 22 Feb 2019.

  * Christiano, P. (2016). _Adequate oversight_. <https://ai-alignment.com/adequate-oversight-25fadf1edce9>. Accessed 22 Feb 2019.

  * Dohrn, D. (2015). Egan and agents: How evidential decision theory can deal with Egan’s dilemma. _Synthese_ , _192_(6), 1883–1908.

[Article](https://link.springer.com/doi/10.1007/s11229-015-0661-0) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Egan%20and%20agents%3A%20How%20evidential%20decision%20theory%20can%20deal%20with%20Egan%E2%80%99s%20dilemma&journal=Synthese&doi=10.1007%2Fs11229-015-0661-0&volume=192&issue=6&pages=1883-1908&publication_year=2015&author=Dohrn%2CD)

  * Doyle, J. (1992). Rationality and its roles in reasoning. _Computational Intelligence_ , _8_(2), 376–409.

[Article](https://doi.org/10.1111%2Fj.1467-8640.1992.tb00371.x) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Rationality%20and%20its%20roles%20in%20reasoning&journal=Computational%20Intelligence&doi=10.1111%2Fj.1467-8640.1992.tb00371.x&volume=8&issue=2&pages=376-409&publication_year=1992&author=Doyle%2CJ)

  * Eells, E. (1981). Causality, utility, and decision. _Synthese_ , _48_(2), 295–329.

[Article](https://link.springer.com/doi/10.1007/BF01063891) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causality%2C%20utility%2C%20and%20decision&journal=Synthese&doi=10.1007%2FBF01063891&volume=48&issue=2&pages=295-329&publication_year=1981&author=Eells%2CE)

  * Everitt, T., Leike, J., & Hutter, M. (2015). Sequential extensions of causal and evidential decision theory. In T. Walsh (Ed.), _Algorithmic decision theory: 4th international conference, ADT 2015, Lexington, KY, USA, September 27–30, 2015, Proceedings_ (pp. 205–221). Springer. <https://doi.org/10.1007/978-3-319-23114-3_13>.

  * Fisher, J. C. _Disposition-based decision theory_. <https://casparoesterheld.files.wordpress.com/2019/02/dbdt.pdf>. Accessed 22 Feb 2019.

  * García, J., & Fernández, F. (2015). A comprehensive survey on safe reinforcement learning. _Journal of Machine Learning Research_ , _16_ , 1437–1480.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20comprehensive%20survey%20on%20safe%20reinforcement%20learning&journal=Journal%20of%20Machine%20Learning%20Research&volume=16&pages=1437-1480&publication_year=2015&author=Garc%C3%ADa%2CJ&author=Fern%C3%A1ndez%2CF)

  * Gibbard, A., & Harper, W. L. (1981). Counterfactuals and two kinds of expected utility. In W. L. Harper, R. Stalnaker, & G. Pearce (Eds.), _Ifs. Conditionals, belief, decision, chance and time_ (Vol. 15). The University of Western Ontario Series in Philosophy of Science. A series of books in philosophy of science, methodology, epistemology, logic, history of science, and related fields (pp. 153–190). Springer. <https://doi.org/10.1007/978-94-009-9117-0_8>.

  * Greene, P. (2018). Success-first decision theories. In A. Ahmed (Ed.), _Newcomb’s problem_. Classic Philosophical Arguments. Cambridge University Press. <https://doi.org/10.1017/9781316847893.007>.

  * Gustafsson, J. E. (2011). A note in defence of ratificationism. _Erkenntnis_ , _75_(1), 147–150.

[Article](https://link.springer.com/doi/10.1007/s10670-010-9267-6) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20note%20in%20defence%20of%20ratificationism&journal=Erkenntnis&doi=10.1007%2Fs10670-010-9267-6&volume=75&issue=1&pages=147-150&publication_year=2011&author=Gustafsson%2CJE)

  * Hintze, D. (2014). _Problem class dominance in predictive dilemmas_. <http://intelligence.org/files/ProblemClassDominance.pdf>. Accessed 22 Feb 2019.

  * Horgan, T. (1981). Counterfactuals and Newcomb’s problem. _The Journal of Philosophy_ , _78_(6), 331–356.

[Article](https://doi.org/10.2307%2F2026128) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Counterfactuals%20and%20Newcomb%E2%80%99s%20problem&journal=The%20Journal%20of%20Philosophy&doi=10.2307%2F2026128&volume=78&issue=6&pages=331-356&publication_year=1981&author=Horgan%2CT)

  * Hutter, M. (2005). _Universal artificial intelligence. sequential decision based on algorithmic probability_. In W. Brauer, G. Rozen-berg, & A. Salomaa (Eds.), Texts in theoretical computer science. Springer.

  * Joyce, J. M. (1999). _The foundations of causal decision theory. Cambridge studies in probability, induction, and decision theory_. Cambridge: Cambridge University Press.

[Book](https://doi.org/10.1017%2FCBO9780511498497) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20foundations%20of%20causal%20decision%20theory.%20Cambridge%20studies%20in%20probability%2C%20induction%2C%20and%20decision%20theory&doi=10.1017%2FCBO9780511498497&publication_year=1999&author=Joyce%2CJM)

  * Kuhn, S. (2017). Prisoner’s dilemma. In E. N. Zalta (Ed.), _The Stanford encyclopedia of philosophy_. Spring 2017. Metaphysics Research Lab, Stanford University. <https://plato.stanford.edu/archives/spr2017/entries/prisoner-dilemma/>. Accessed 22 Feb 2019.

  * Kumar, R. (2017). New work for decision theorists. In _Talk at the 1st workshop on decision theory & the future of artificial intelligence in Cambridge, UK._

  * Ledwig, M. (2000). _Newcomb’s problem_. Ph.D. thesis, University of Constance. <https://kops.uni-konstanz.de/bitstream/handle/123456789/3451/ledwig.pdf>. Accessed 22 Feb 2019.

  * Legg, S., & Hutter, M. (2007). Universal intelligence: A definition of machine intelligence. _Minds and Machines_ , _17_(4), 391–444.

[Article](https://link.springer.com/doi/10.1007/s11023-007-9079-x) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Universal%20intelligence%3A%20A%20definition%20of%20machine%20intelligence&journal=Minds%20and%20Machines&doi=10.1007%2Fs11023-007-9079-x&volume=17&issue=4&pages=391-444&publication_year=2007&author=Legg%2CS&author=Hutter%2CM)

  * Lewis, D. (1981). Causal decision theory. _Australasian Journal of Philosophy_ , _59_(1), 5–30.

[Article](https://doi.org/10.1080%2F00048408112340011) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causal%20decision%20theory&journal=Australasian%20Journal%20of%20Philosophy&doi=10.1080%2F00048408112340011&volume=59&issue=1&pages=5-30&publication_year=1981&author=Lewis%2CD)

  * Mayer, D., Feldmaier, J., & Shen, H. (2016). Reinforcement learning in conflicting environments for autonomous vehicles. In _International workshop on robotics in the 21st century: Challenges and promises_. [arXiv: 1610.07089](http://arxiv.org/abs/1610.07089).

  * Meacham, C. J. G. (2010). Binding and its consequences. _Philosophical Studies_ , _149_(1), 49–71. <https://doi.org/10.1007/s11098-010-9539-7>.

[Article](https://link.springer.com/doi/10.1007/s11098-010-9539-7) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Binding%20and%20its%20consequences&journal=Philosophical%20Studies&doi=10.1007%2Fs11098-010-9539-7&volume=149&issue=1&pages=49-71&publication_year=2010&author=Meacham%2CCJG)

  * Muehlhauser, L., & Helm, L. (2012). _Intelligence explosion and machine ethics_. Machine Intelligence Research Institute. <https://intelligence.org/files/IE-ME.pdf>. Accessed 22 Feb 2019.

  * Nozick, R. (1969). Newcomb’s problem and two principles of choice. In N. Rescher, et al. (Eds.), _Essays in honor of Carl G. Hempel_ (pp. 114–146). Berlin: Springer.

[Chapter](https://link.springer.com/doi/10.1007/978-94-017-1466-2_7) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Newcomb%E2%80%99s%20problem%20and%20two%20principles%20of%20choice&doi=10.1007%2F978-94-017-1466-2_7&pages=114-146&publication_year=1969&author=Nozick%2CR)

  * Oesterheld, C. (2018a). _Doing what has worked well in the past leads to evidential decision theory_. <https://casparoesterheld.files.wordpress.com/2018/01/learning-dt.pdf>. Accessed 22 Feb 2019.

  * Oesterheld, C. (2018b). Newcomb’s problem, the Prisoner’s dilemma and large universes: A consideration for consequentialists. In _Talk at the 15th conference of the international society for utilitarian studies_. Karlsruhe Institute of Technology (KIT), July 24–26, 2018.

  * Pearl, J. (2009). _Causality. Models, reasoning, and inference_. Cambridge: Cambridge University Press.

[Book](https://doi.org/10.1017%2FCBO9780511803161) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causality.%20Models%2C%20reasoning%2C%20and%20inference&doi=10.1017%2FCBO9780511803161&publication_year=2009&author=Pearl%2CJ)

  * Piccione, M., & Rubinstein, A. (1997). On the interpretation of decision problems with imperfect recall. _Games and Economic Behavior_ , _20_ , 3–24.

[Article](https://doi.org/10.1006%2Fgame.1997.0536) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=On%20the%20interpretation%20of%20decision%20problems%20with%20imperfect%20recall&journal=Games%20and%20Economic%20Behavior&doi=10.1006%2Fgame.1997.0536&volume=20&pages=3-24&publication_year=1997&author=Piccione%2CM&author=Rubinstein%2CA)

  * Poellinger, R. (2013). _Unboxing the concepts in Newcomb’s paradox: Causation, prediction, decision_. <http://philsci-archive.pitt.edu/9887/7/newcomb_in_ckps.pdf>. Accessed 22 Feb 2019.

  * Price, H. (1986). Against causal decision theory. _Synthese_ , _67_ , 195–212.

[Article](https://link.springer.com/doi/10.1007/BF00540068) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Against%20causal%20decision%20theory&journal=Synthese&doi=10.1007%2FBF00540068&volume=67&pages=195-212&publication_year=1986&author=Price%2CH)

  * Price, H. (2012). Causation, chance, and the rational significance of supernatural evidence. _Philosophical Review_ , _121_(4), 483–538.

[Article](https://doi.org/10.1215%2F00318108-1630912) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causation%2C%20chance%2C%20and%20the%20rational%20significance%20of%20supernatural%20evidence&journal=Philosophical%20Review&doi=10.1215%2F00318108-1630912&volume=121&issue=4&pages=483-538&publication_year=2012&author=Price%2CH)

  * Price, H., & Corry, R. (Eds.). (2007). _Causation, physics, and the constitution of reality: Russell’s republic revisited_. Oxford: Oxford University Press.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causation%2C%20physics%2C%20and%20the%20constitution%20of%20reality%3A%20Russell%E2%80%99s%20republic%20revisited&publication_year=2007)

  * Ross, S. M. (2007). _Introduction to probability models_ (9th ed.). Cambridge: Academic Press.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Introduction%20to%20probability%20models&publication_year=2007&author=Ross%2CSM)

  * Russell, S., & Norvig, P. (2010). _Artificial intelligence. A modern approach_ (3rd ed.). London: Pearson Education, Inc.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Artificial%20intelligence.%20A%20modern%20approach&publication_year=2010&author=Russell%2CS&author=Norvig%2CP)

  * Skyrms, B. (1982). Causal decision theory. _The Journal of Philosophy_ , _79_(11), 695–711.

[Article](https://doi.org/10.2307%2F2026547) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Causal%20decision%20theory&journal=The%20Journal%20of%20Philosophy&doi=10.2307%2F2026547&volume=79&issue=11&pages=695-711&publication_year=1982&author=Skyrms%2CB)

  * Soares, N. (2014a). _Newcomblike problems are the norm_. <http://mindingourway.com/newcomblike-problems-are-the-norm/>. Accessed 22 Feb 2019.

  * Soares, N. (2014b). _Why Ain’t you rich?_<https://intelligence.org/2014/10/07/nate-soares-talk-aint-rich/>. Accessed 22 Feb 2019.

  * Soares, N, & Fallenstein, B. (2014a). _Aligning superintelligence with human interests: A technical research agenda_. Technical report. 2014-8. Machine Intelligence Research Institute. <https://intelligence.org/files/TechnicalAgenda.pdf>. Accessed 22 Feb 2019.

  * Soares, N, & Fallenstein, B. (2014b). _Toward idealized decision theory_. Technical report 2014-7. Machine Intelligence Research Institute. [arXiv: 1507.01986](http://arxiv.org/abs/1507.01986).

  * Soares, N., & Levinstein, B. A. (2017). Cheating death in damascus. In _Formal epistemology workshop (FEW) 2017_. University of Washington, Seattle, USA. <https://intelligence.org/files/DeathInDamascus.pdf>. Accessed 22 Feb 2019.

  * Sorg, J. D. (2011). _The optimal reward problem: Designing effective reward for bounded agents_. PhD thesis, University of Michigan. <https://deepblue.lib.umich.edu/bitstream/handle/2027.42/89705/jdsorg_1.pdf>. Accessed 22 Feb 2019.

  * Spohn, W. (2003). Dependency equilibria and the causal structure of decision and game situation. _Homo Oeconomicus_ , _20_ , 195–255.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Dependency%20equilibria%20and%20the%20causal%20structure%20of%20decision%20and%20game%20situation&journal=Homo%20Oeconomicus&volume=20&pages=195-255&publication_year=2003&author=Spohn%2CW)

  * Spohn, W. (2012). Reversing 30 years of discussion: Why causal decision theorists should one-box. _Synthese_ , _187_(1), 95–122.

[Article](https://link.springer.com/doi/10.1007/s11229-011-0023-5) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Reversing%2030%20years%20of%20discussion%3A%20Why%20causal%20decision%20theorists%20should%20one-box&journal=Synthese&doi=10.1007%2Fs11229-011-0023-5&volume=187&issue=1&pages=95-122&publication_year=2012&author=Spohn%2CW)

  * Sutton, R. S., & Barto, A. G. (1998). _Reinforcement learning: An introduction_. Cambridge: MIT Press.

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Reinforcement%20learning%3A%20An%20introduction&publication_year=1998&author=Sutton%2CRS&author=Barto%2CAG)

  * Treutlein, J. (2018). How the decision theory of Newcomb like problems differs between humans and machines. In _Talk at the 2nd workshop on decision theory & the future of artificial intelligence in Munich, Germany_.

  * Treutlein, J., & Oesterheld, C. (2017). _A wager for evidential decision theory_. Unpublished manuscript.

  * Wedgwood, R. (2013). Gandalf’s solution to the Newcomb problem. _Synthese_ , _190_(14), 2643–2675. <https://doi.org/10.1007/s11229-011-9900-1>.

[Article](https://link.springer.com/doi/10.1007/s11229-011-9900-1) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Gandalf%E2%80%99s%20solution%20to%20the%20Newcomb%20problem&journal=Synthese&doi=10.1007%2Fs11229-011-9900-1&volume=190&issue=14&pages=2643-2675&publication_year=2013&author=Wedgwood%2CR)

  * Weirich, P. (2016). Causal decision theory. In _The Stanford encyclopedia of philosophy_. Spring 2016.

  * Yudkowsky, E. (2010). _Timeless decision theory_. The Singularity Institute. <http://intelligence.org/files/TDT.pdf>. Accessed 22 Feb 2019.




[Download references](https://citation-needed.springer.com/v2/references/10.1007/s11229-019-02148-2?format=refman&flavour=references)

## Acknowledgements

I am indebted to Max Daniel, Johannes Treutlein, Tom Everitt, Lukas Gloor, Sören Mindermann, Brian Tomasik and Tobias Baumann for valuable comments and discussions.

## Author information

Author notes

  1. Caspar Oesterheld

Present address: Duke University, Durham, USA




### Authors and Affiliations

  1. Foundational Research Institute, Berlin, Germany

Caspar Oesterheld




Authors

  1. Caspar Oesterheld

[View author publications](/search?sortBy=newestFirst&contributor=Caspar%20Oesterheld)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Caspar%20Oesterheld) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Caspar%20Oesterheld%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)




### Corresponding author

Correspondence to [Caspar Oesterheld](mailto:caspar.oesterheld@foundational-research.org).

## Additional information

### Publisher's Note

Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Rights and permissions

**Open Access** This article is distributed under the terms of the Creative Commons Attribution 4.0 International License (http://creativecommons.org/licenses/by/4.0/), which permits unrestricted use, distribution, and reproduction in any medium, provided you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons license, and indicate if changes were made.

[Reprints and permissions](https://s100.copyright.com/AppDispatchServlet?title=Approval-directed%20agency%20and%20the%20decision%20theory%20of%20Newcomb-like%20problems&author=Caspar%20Oesterheld&contentID=10.1007%2Fs11229-019-02148-2&copyright=The%20Author%28s%29&publication=0039-7857&publicationDate=2019-02-25&publisherName=SpringerNature&orderBeanReset=true&oa=CC%20BY)

## About this article

[](https://crossmark.crossref.org/dialog/?doi=10.1007/s11229-019-02148-2)

### Cite this article

Oesterheld, C. Approval-directed agency and the decision theory of Newcomb-like problems. _Synthese_ **198** (Suppl 27), 6491–6504 (2021). https://doi.org/10.1007/s11229-019-02148-2

[Download citation](https://citation-needed.springer.com/v2/references/10.1007/s11229-019-02148-2?format=refman&flavour=citation)

  * Received: 17 January 2018

  * Accepted: 15 February 2019

  * Published: 25 February 2019

  * Version of record: 25 February 2019

  * Issue date: November 2021

  * DOI: https://doi.org/10.1007/s11229-019-02148-2




### Share this article

Anyone you share the following link with will be able to read this content:

Get shareable link

Sorry, a shareable link is not currently available for this article.

Copy shareable link to clipboard

Provided by the Springer Nature SharedIt content-sharing initiative 

### Keywords

  * [Reinforcement learning](/search?query=Reinforcement%20learning&facet-discipline="Philosophy")
  * [Causal decision theory](/search?query=Causal%20decision%20theory&facet-discipline="Philosophy")
  * [Evidential decision theory](/search?query=Evidential%20decision%20theory&facet-discipline="Philosophy")
  * [Newcomb’s problem](/search?query=Newcomb%E2%80%99s%20problem&facet-discipline="Philosophy")
  * [AI safety](/search?query=AI%20safety&facet-discipline="Philosophy")
  * [Philosophical foundations of AI](/search?query=Philosophical%20foundations%20of%20AI&facet-discipline="Philosophy")


  *[DOI]: Digital Object Identifier
