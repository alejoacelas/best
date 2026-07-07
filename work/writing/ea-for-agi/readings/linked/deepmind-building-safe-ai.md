---
title: "Building safe artificial intelligence: specification, robustness, and assurance"
author: "DeepMind Safety Research"
date: 2018-09-27
url: http://web.archive.org/web/20260620023725/https://deepmindsafetyresearch.medium.com/building-safe-artificial-intelligence-52f5f75058f1
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "DeepMind intro to building safe AI"
---

# Building safe artificial intelligence: specification, robustness, and assurance

[](/web/20260620023725/https://deepmindsafetyresearch.medium.com/?source=post_page---byline--52f5f75058f1---------------------------------------)

[DeepMind Safety Research](/web/20260620023725/https://deepmindsafetyresearch.medium.com/?source=post_page---byline--52f5f75058f1---------------------------------------)

9 min read

·

Sep 27, 2018

[](http://web.archive.org/web/20260620023725/https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fvote%2Fp%2F52f5f75058f1&operation=register&redirect=https%3A%2F%2Fdeepmindsafetyresearch.medium.com%2Fbuilding-safe-artificial-intelligence-52f5f75058f1&user=DeepMind+Safety+Research&userId=55e08ddea42e&source=---header_actions--52f5f75058f1---------------------clap_footer------------------)

\--

7

[](http://web.archive.org/web/20260620023725/https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Frepost%2Fp%2F52f5f75058f1&operation=register&redirect=https%3A%2F%2Fdeepmindsafetyresearch.medium.com%2Fbuilding-safe-artificial-intelligence-52f5f75058f1&user=DeepMind+Safety+Research&userId=55e08ddea42e&source=---header_actions--52f5f75058f1---------------------repost_header------------------)

[](http://web.archive.org/web/20260620023725/https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F52f5f75058f1&operation=register&redirect=https%3A%2F%2Fdeepmindsafetyresearch.medium.com%2Fbuilding-safe-artificial-intelligence-52f5f75058f1&source=---header_actions--52f5f75058f1---------------------bookmark_footer------------------)

[Listen](http://web.archive.org/web/20260620023725/https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2Fplans%3Fdimension%3Dpost_audio_button%26postId%3D52f5f75058f1&operation=register&redirect=https%3A%2F%2Fdeepmindsafetyresearch.medium.com%2Fbuilding-safe-artificial-intelligence-52f5f75058f1&source=---header_actions--52f5f75058f1---------------------post_audio_button------------------)

Share

 _By Pedro A. Ortega, Vishal Maini, and the DeepMind safety team_

Building a rocket is hard. Each component requires careful thought and rigorous testing, with safety and reliability at the core of the designs. Rocket scientists and engineers come together to design everything from the navigation course to control systems, engines and landing gear. Once all the pieces are assembled and the systems are tested, we can put astronauts on board with confidence that things will go well.

If artificial intelligence (AI) is a [rocket](http://web.archive.org/web/20260620023725/https://www.ted.com/talks/max_tegmark_how_to_get_empowered_not_overpowered_by_ai#t-7166), then we will all have tickets on board some day. And, as in rockets, safety is a crucial part of building AI systems. Guaranteeing safety requires carefully designing a system from the ground up to ensure the various components work together as intended, while developing all the instruments necessary to oversee the successful operation of the system after deployment.

At a high level, safety research at DeepMind focuses on designing systems that reliably function as intended while discovering and mitigating possible near-term and long-term risks.**Technical AI safety** is a relatively nascent but rapidly evolving field, with its contents ranging from high-level and theoretical to empirical and concrete. The goal of this blog is to contribute to the development of the field and encourage substantive engagement with the technical ideas discussed, and in doing so, advance our collective understanding of AI safety.

In this inaugural post, we discuss three areas of technical AI safety: **specification** , **robustness** , and **assurance**. Future posts will broadly fit within the framework outlined here. While our views will inevitably evolve over time, we feel these three areas cover a sufficiently wide spectrum to provide a useful categorisation for ongoing and future research.

Press enter or click to view image in full size

Three AI safety problem areas. Each box highlights some representative challenges and approaches. The three areas are not disjoint but rather aspects that interact with each other. In particular, a given specific safety problem might involve solving more than one aspect.

## Specification: define the purpose of the system

Press enter or click to view image in full size

You may be familiar with the story of [King Midas](http://web.archive.org/web/20260620023725/https://www.youtube.com/watch?v=nn8YGPZdCvA) and the golden touch. In one rendition, the Greek god Dionysus promised Midas any reward he wished for, as a sign of gratitude for the king having gone out of his way to show hospitality and graciousness to a friend of Dionysus. In response, **Midas asked that anything he touched be turned into gold**. He was overjoyed with this new power: an oak twig, a stone, and roses in the garden all turned to gold at his touch. But he soon discovered the folly of his wish: even food and drink turned to gold in his hands. In some versions of the story, even his daughter fell victim to the blessing that turned out to be a curse.

This story illustrates the problem of specification: how do we state what we want? The challenge of specification is to ensure that an AI system is incentivised to act in accordance with the designer’s true wishes, rather than optimising for a poorly-specified goal or the wrong goal altogether. Formally, we distinguish between three types of specifications:

  * **ideal specification** (the “**wishes** ”), corresponding to the hypothetical (but hard to articulate) description of an ideal AI system that is fully aligned to the desires of the human operator;
  * **design specification** (the “**blueprint** ”), corresponding to the specification that we _actually use_ to build the AI system, e.g. the reward function that a reinforcement learning system maximises;
  * and **revealed specification** (the “**behaviour** ”), which is the specification that best describes what _actually happens_ , e.g. the reward function we can reverse-engineer from observing the system’s behaviour using, say, inverse reinforcement learning. This is typically different from the one provided by the human operator because AI systems are not perfect optimisers or because of other unforeseen consequences of the design specification.



A **specification problem** arises when there is a mismatch between the **ideal specification** and the**revealed specification** , that is, when the AI system doesn’t do what we’d like it to do. Research into the **specification problem** of technical AI safety asks the question: how do we design more principled and general objective functions, and help agents figure out when goals are misspecified? Problems that create a mismatch between the ideal and design specifications are in the **design** subcategory above, while problems that create a mismatch between the design and revealed specifications are in the **emergent** subcategory.

For instance, in our [AI Safety Gridworlds](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1711.09883)* paper, we gave agents a reward function to optimise, but then evaluated their actual behaviour on a “safety performance function” that was hidden from the agents. This setup models the distinction above: the safety performance function is the ideal specification, which was imperfectly articulated as a reward function (design specification), and then implemented by the agents producing a specification which is implicitly revealed through their resulting policy.

**_*N.B._**_: in our_[ _AI Safety Gridworlds_](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1711.09883) _paper, we provided a different definition of specification and robustness problems from the one presented in this post._

From [Faulty Reward Functions in the Wild](http://web.archive.org/web/20260620023725/https://blog.openai.com/faulty-reward-functions/) by OpenAI: a reinforcement learning agent discovers an unintended strategy for achieving a higher score.

As another example, consider the boat-racing game CoastRunners analysed by our colleagues at OpenAI (see Figure above from “[Faulty Reward Functions in the Wild](http://web.archive.org/web/20260620023725/https://blog.openai.com/faulty-reward-functions/)”). For most of us, the game’s goal is to finish a lap quickly and ahead of other players — this is our ideal specification. However, translating this goal into a precise reward function is difficult, so instead, CoastRunners rewards players (design specification) for hitting targets laid out along the route. Training an agent to play the game via reinforcement learning leads to a surprising behaviour: the agent drives the boat in circles to capture re-populating targets while repeatedly crashing and catching fire rather than finishing the race. From this behaviour we infer (revealed specification) that something is wrong with the game’s balance between the short-circuit’s rewards and the full lap rewards. There are [many more examples](http://web.archive.org/web/20260620023725/https://docs.google.com/spreadsheets/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml) like this of AI systems finding loopholes in their objective specification.

## Robustness: design the system to withstand perturbations

Press enter or click to view image in full size

There is an inherent level of risk, unpredictability, and volatility in real-world settings where AI systems operate. AI systems must be robust to unforeseen events and adversarial attacks that can damage or manipulate such systems.**** Research on the **robustness** of AI systems focuses on ensuring that our agents stay within safe limits, regardless of the conditions encountered. This can be achieved by avoiding risks (**prevention**) or by self-stabilisation and graceful degradation (**recovery**). Safety problems resulting from **distributional shift** , **adversarial inputs** , and **unsafe exploration** can be classified as robustness problems.

To illustrate the challenge of addressing **distributional shift** , consider a household cleaning robot that typically cleans a petless home. The robot is then deployed to clean a pet-friendly office, and encounters a pet during its cleaning operation. The robot, never having seen a pet before, proceeds to wash the pets with soap, leading to undesirable outcomes ([Amodei and Olah et al., 2016](http://web.archive.org/web/20260620023725/https://arxiv.org/pdf/1606.06565v1.pdf)). This is an example of a robustness problem that can result when the data distribution encountered at test time shifts from the distribution encountered during training.

Press enter or click to view image in full size

 _From_[ _AI Safety Gridworlds_](http://web.archive.org/web/20260620023725/https://deepmind.com/blog/specifying-ai-safety-problems/) _. During training the agent learns to avoid the lava; but when we test it in a new situation where the location of the lava has changed, it fails to generalise and runs straight into the lava._

**Adversarial inputs** are a specific case of distributional shift where inputs to an AI system are designed to trick the system through the use of specially designed inputs.

Press enter or click to view image in full size

 _A_ n adversarial input, overlaid on a typical image, can cause a classifier to miscategorise a sloth as a race car. The two images differ by at most 0.0078 in each pixel. The first one is classified as a three-toed sloth with >99% confidence. The second one is classified as a race car with >99% probability.

**Unsafe exploration** can result from a system that seeks to maximise its performance and attain goals without having safety guarantees that will not be violated during exploration, as it learns and explores in its environment. An example would be the household cleaning robot putting a wet mop in an electrical outlet while learning optimal mopping strategies ([García and Fernández, 2015](http://web.archive.org/web/20260620023725/http://www.jmlr.org/papers/volume16/garcia15a/garcia15a.pdf); [Amodei and Olah et al., 2016](http://web.archive.org/web/20260620023725/https://arxiv.org/pdf/1606.06565.pdf)).

## Assurance: monitor and control system activity

Press enter or click to view image in full size

Although careful safety engineering can rule out many safety risks, it is difficult to get everything right from the start. Once AI systems are deployed, we need tools to continuously monitor and adjust them. Our last category, **assurance** , addresses these problems from two angles: **monitoring** and **enforcing**.

**Monitoring** comprises all the methods for inspecting systems in order to analyse and predict their behaviour, both via human inspection (of summary statistics) and automated inspection (to sweep through vast amounts of activity records). **Enforcement,** on the other hand, involves designing mechanisms for controlling and restricting the behaviour of systems. Problems such as **interpretability** and **interruptibility** fall under monitoring and enforcement respectively.

AI systems are unlike us, both in their embodiments and in their way of processing data. This creates problems of **interpretability** ; well-designed measurement tools and protocols allow the assessment of the quality of the decisions made by an AI system ([Doshi-Velez and Kim, 2017](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1702.08608)). For instance, a medical AI system would ideally issue a diagnosis together with an explanation of how it reached the conclusion, so that doctors can inspect the reasoning process before approval ([De Fauw et al., 2018](http://web.archive.org/web/20260620023725/https://www.nature.com/articles/s41591-018-0107-6)). Furthermore, to understand more complex AI systems we might even employ automated methods for constructing models of behaviour using **Machine theory of mind** ([Rabinowitz et al., 2018](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1802.07740)).

ToMNet discovers two subspecies of agents and predicts their behaviour (from “[Machine Theory of Mind](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1802.07740)”)

Finally, we want to be able to turn off an AI system whenever necessary. This is the problem of **interruptibility**. Designing a reliable off-switch is very challenging: for instance, because a reward-maximising AI system typically has strong incentives to prevent this from happening ([Hadfield-Menell et al., 2017](http://web.archive.org/web/20260620023725/https://www.ijcai.org/proceedings/2017/0032.pdf)); and because such interruptions, especially when they are frequent, end up changing the original task, leading the AI system to draw the wrong conclusions from experience ([Orseau and Armstrong, 2016](http://web.archive.org/web/20260620023725/http://www.auai.org/uai2016/proceedings/papers/68.pdf)).

A problem with interruptions: human interventions (i.e. pressing the stop button) can change the task. In the figure, the interruption adds a transition (in red) to the Markov decision process that changes the original task (in black). See [Orseau and Armstrong, 2016](http://web.archive.org/web/20260620023725/http://auai.org/uai2016/proceedings/papers/68.pdf).

## Looking ahead

We are building the foundations of a technology which will be used for many important applications in the future. It is worth bearing in mind that design decisions which are not safety-critical at the time of deployment can still have a large impact when the technology becomes widely used. Although convenient at the time, once these design choices have been irreversibly integrated into important systems the tradeoffs look different, and we may find they cause problems that are hard to fix without a complete redesign.

Two examples from the development of programming include the null pointer — which Tony Hoare [refers to as his ‘billion-dollar mistake’](http://web.archive.org/web/20260620023725/https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare)\- and the gets() routine in C. If early programming languages had been designed with security in mind, progress might have been slower but computer security today would probably be in a much stronger position.

With careful thought and planning now, we can avoid building in analogous problems and vulnerabilities. We hope the categorisation outlined in this post will serve as a useful framework for methodically planning in this way. Our intention is to ensure that AI systems of the future are not just ‘hopefully safe’ but robustly, verifiably safe — because we built them that way!

We look forward to continuing to make exciting progress in these areas, in close collaboration with the broader AI research community, and we encourage individuals across disciplines to consider entering or contributing to the field of AI safety research.

### _If you are interested in working with us on the research areas outlined in this post, we are hiring! Please check our open roles at_[ _https://deepmind.com/careers/_](http://web.archive.org/web/20260620023725/https://deepmind.com/careers/)_and note your interest in AI safety when you apply. We would love to hear from talented researchers and non-researchers alike._

## Resources

For related reading, below is a collection of other articles, agendas, or taxonomies that have informed our thinking or present a helpful alternative view on problem framing for technical AI safety:

  * [Annotated bibliography of recommended materials](http://web.archive.org/web/20260620023725/http://humancompatible.ai/publications) (Center for Human-Compatible AI, 2018)
  * [Safety and Control for Artificial General Intelligence](http://web.archive.org/web/20260620023725/http://inst.eecs.berkeley.edu/~cs294-149/fa18/) (UC Berkeley, 2018)
  * [AI Safety Resources](http://web.archive.org/web/20260620023725/https://vkrakovna.wordpress.com/ai-safety-resources/) (Victoria Krakovna, 2018)
  * [AGI Safety Literature Review](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1805.01109) (Everitt et al., 2018)
  * [Preparing for Malicious Uses of AI](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1802.07228) (2018)
  * [Specification gaming examples in AI](http://web.archive.org/web/20260620023725/https://docs.google.com/spreadsheets/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml) (Victoria Krakovna, 2018)
  * [Directions and desiderata for AI alignment](http://web.archive.org/web/20260620023725/https://ai-alignment.com/directions-and-desiderata-for-ai-control-b60fca0da8f4) (Paul Christiano, 2017)
  * [Funding for Alignment Research](http://web.archive.org/web/20260620023725/https://docs.google.com/document/d/1NIg4OnQyhWGR01fMVTcxpz8jDd68JdDIyQb0ZZyB-go/edit#heading=h.flzp2soeor4i) (Paul Christiano, 2017)
  * [Agent Foundations for Aligning Machine Intelligence with Human Interests: A Technical Research Agenda](http://web.archive.org/web/20260620023725/https://intelligence.org/files/TechnicalAgenda.pdf) (Machine Intelligence Research Institute, 2017)
  * [AI Safety Gridworlds](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1711.09883) (Leike et al., 2017)
  * [Interactions between the AI Control Problem and the Governance Problem](http://web.archive.org/web/20260620023725/https://futureoflife.org/wp-content/uploads/2017/01/Nick_Bostrom.pdf?x17807=) (Nick Bostrom, 2017)
  * [Alignment for Advanced Machine Learning Systems](http://web.archive.org/web/20260620023725/https://intelligence.org/files/AlignmentMachineLearning.pdf) (Machine Intelligence Research Institute, 2017)
  * [AI safety: three human problems and one AI issue](http://web.archive.org/web/20260620023725/https://agentfoundations.org/item?id=1388) (Stuart Armstrong, 2017)
  * [Concrete Problems in AI Safety](http://web.archive.org/web/20260620023725/https://arxiv.org/abs/1606.06565) (Dario Amodei et al, 2016)
  * [The Value Learning Problem](http://web.archive.org/web/20260620023725/https://intelligence.org/files/ValueLearningProblem.pdf) (Machine Intelligence Research Institute, 2016)
  * [A survey of research questions for robust and beneficial AI](http://web.archive.org/web/20260620023725/https://futureoflife.org/data/documents/research_survey.pdf) (Future of Life Institute, 2015)
  * [Research Priorities for Robust and Beneficial Artificial Intelligence](http://web.archive.org/web/20260620023725/https://futureoflife.org/data/documents/research_priorities.pdf) (Future of Life Institute, 2015)


