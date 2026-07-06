---
title: "AI safety syllabus | 80,000 Hours"
url: https://80000hours.org/articles/ai-safety-syllabus/
fetched: 2026-07-06
via: html2text
topic: "adjacent-curricula"
note: "80,000 Hours technical AI safety syllabus: canonical background-reading guide"
---

## On this page:

  * Introduction
  * 1 Reading List
  * 2 Degree
    * 2.1 Undergraduate Degree
    * 2.2 PhD
    * 2.3 Google AI residency program
    * 2.4 Research Groups
  * 3 Conferences
  * 4 Want to work on AI safety? We want to help.



**Update April 2024:** This syllabus was written in August 2016. The field of AI safety has progressed substantially since then. If you’re looking for up-to-date resources, we recommend:

  * The curriculum from the [alignment course](https://course.aisafetyfundamentals.com/alignment) or the [governance-focused course](https://course.aisafetyfundamentals.com/governance), both from [AI Safety Fundamentals](https://aisafetyfundamentals.com/)
  * Our [list of resources to learn more](https://80000hours.org/problem-profiles/artificial-intelligence/#top-resources-to-learn-more) in our full problem profile on [preventing AI-related catastrophe](https://80000hours.org/problem-profiles/artificial-intelligence/)
  * These [resources](https://www.aisafetysupport.org/lots-of-links) collected by the team at AI Safety Support



 _This page was written by Jan Leike, with contributions and comments by David Krueger, Jelena Luketina, Victoria Krakovna, Daniel Dewey, Laurent Orseau, and others. It is intended as a guide to working on[technical aspects of AI safety](/career-reviews/artificial-intelligence-risk-research/). See our [guide to working in AI policy and strategy](/articles/ai-policy-guide/) for another approach._

This is a syllabus of relevant background reading material and courses related to [AI safety](/problem-profiles/positively-shaping-artificial-intelligence). It is intended as a guide for undergraduates in mathematics and computer science planning their degree, as well as people from other disciplines who are thinking about moving into AI safety. It includes tips how to design your degree, how to transition into research, and the relevant conferences. This is not intended as a general guide of how to become a researcher.

Table of Contents

  * 1 Reading List
  * 2 Degree
    * 2.1 Undergraduate Degree
    * 2.2 PhD
    * 2.3 Google AI residency program
    * 2.4 Research Groups
  * 3 Conferences
  * 4 Want to work on AI safety? We want to help.



## Want to work on AI safety? We want to help.

We’ve helped dozens of people formulate their plans, and put them in touch with academic mentors. If you want to work on AI safety:

[Get in touch](https://80000hours.org/speak-with-us/?int_campaign=article)

## Reading List

 _We now recommend using the[bibliography](http://humancompatible.ai/bibliography) from the Center for Human-Compatible AI at UC Berkeley. Their list is more comprehensive and up-to-date than the one below._

This is a list of the most relevant reading topics and the appropriate material. The chapter recommendations are indicative of what you should know. If you find the topic interesting, read more! As an undergraduate student, you can plan these courses into your degree. As a graduate student, you can use the provided material to extend your knowledge into areas that you do not have much background in. Focus on the textbooks and lecture notes and use the video lectures as supplementary materials. Doing plenty of exercises is usually a good idea to make sure that you actually understand a topic instead of just thinking you understand it.

Some of the relevant areas might not be offered as courses by your university. You can always read the listed books in your free time, or try to find a MOOC on [Coursera](https://www.coursera.org/).

  * **Machine Learning** is the modern probabilistic approach to artificial intelligence. It studies algorithms that learn to predict from (usually independent and identically distributed) data.
    * Textbooks:
      * [Bishop: Pattern Recognition and Machine Learning](http://www.springer.com/us/book/9780387310732)
      * [Murphy: Machine Learning](https://mitpress.mit.edu/9780262018029/machine-learning/) (alternative to Bishop)
      * [Gelman and Rubin: Bayesian Data Analysis](http://www.stat.columbia.edu/~gelman/book/) Chapters 2,4,5
      * [McKay: Information Theory, Inference, and Learning Algorithms](http://www.inference.phy.cam.ac.uk/itila/) Parts I-III
    * Video lectures:
      * [Andrew Ng: Machine Learning](https://www.coursera.org/learn/machine-learning)
      * [Nando de Freitas: Machine Learning](https://www.youtube.com/watch?v=w2OtwL5T1ow&list=PLE6Wd9FR--EdyJ5lbFl8UuGjecvVw66F6)
    * Lecture Notes:
      * [MIT OpenCourseware: Machine Learning](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-867-machine-learning-fall-2006/lecture-notes/)
      * [Philippe Rigollet: Mathematics of Machine Learning](http://ocw.mit.edu/courses/mathematics/18-657-mathematics-of-machine-learning-fall-2015/lecture-notes/MIT18_657F15_LecNote.pdf)
      * [Stanford: Machine Learning](https://cs229.stanford.edu/)
  * **Statistics** is the related mathematical discipline. Having a solid understanding of the underlying mathematics is very useful when doing theoretical work.
    * Textbooks:
      * [Wasserman: All of Statistics](http://link.springer.com/book/10.1007%2F978-0-387-21736-9), Chapters 1-12 or more (an easy-to-read overview of the field). _Editor’s note: Others have noted that Chapters 1-4, 9 and 13 are the most relevant._
      * [Durrett: Probability: Theory and Examples](https://services.math.duke.edu/~rtd/PTE/pte.html), Chapters 1-6 (for the more mathematically inclined reader)
    * Video Lectures:
      * [Introduction to Probability](https://www.edx.org/course/introduction-probability-science-mitx-6-041x-1) (MITx)
  * **Reinforcement Learning** is a subdiscipline of machine learning that studies algorithms that learn to act in an unknown environment through trial and error: the algorithm only receives a reward signal in form of a numeric feedback how well it is currently doing and tries to maximize this signal. Reinforcement learning is currently the most promising approach for general intelligence.
    * Textbooks:
      * [Sutton and Barto: Reinforcement Learning](https://mitpress.mit.edu/9780262039246/reinforcement-learning/), Chapters 1-6 & 8
      * [Hutter: Universal Artificial Intelligence](http://www.hutter1.net/ai/uaibook.htm), Chapters 2-5 (high-level theoretical perspective)
    * Video lectures:
      * [Silver: Reinforcement Learning](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PL5X3mDkKaJrL42i_jhE4N-p6E2Ol62Ofa)
      * [Schulman: Deep Reinforcement Learning](https://www.youtube.com/watch?v=aUrX-rP_ss4&list=PLjKEIQlKCTZYN3CYBlj8r58SbNorobqcp)
    * Exercises:
      * [OpenAI: Deep Reinforcement Learning](https://spinningup.openai.com/en/latest/)
    * Relevant papers:
      * [Mnih et al.: Human-level control through deep reinforcement learning](http://www.nature.com/nature/journal/v518/n7540/full/nature14236.html)
      * [Silver et al: Mastering the game of Go with deep neural networks and tree search](http://www.nature.com/nature/journal/v529/n7587/full/nature16961.html)
  * **Deep Learning** is a recently successful approach to machine learning based on neural networks with many layers. Convolutional and recurrent neural networks have enabled recent breakthroughs in computer vision, speech recognition, and other domains. At the moment the field is moving extremely fast and textbooks are likely to become obsolete quickly.
    * Textbooks:
      * [Goodfellow, Bengio, and Courville: Deep Learning](http://www.deeplearningbook.org/), Chapters 1-12
      * [Nielsen: Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/), Chapters 1-6 (more entry-level)
    * Video lectures:
      * [Nando de Freitas: Deep Learning](https://www.youtube.com/watch?v=dV80NAlEins&list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV53Fu)
      * [Hugo Larochelle: Neural Networks](https://www.youtube.com/playlist?list=PL6Xpj9I5qXYEcOhn7TqghAJ6NAPrNmUBH)
    * Survey papers:
      * [LeCun, Bengio, Hinton: Deep Learning](http://www.nature.com/nature/journal/v521/n7553/abs/nature14539.html)
      * [Bengio, Courville, Vincent: Representation Learning: A Review and New Perspectives](https://ieeexplore.ieee.org/document/6472238)
      * [Schmidhuber: Deep learning in neural networks: An overview](http://www.sciencedirect.com/science/article/pii/S0893608014002135)
  * **Artificial Intelligence** encompasses the classical approaches: logic, planning, knowledge representation and reasoning. Probabilistic approaches to AI are covered in the other topics above.
    * Textbooks:
      * [Russell and Norvig: Artificial Intelligence: A Modern Approach](http://aima.cs.berkeley.edu/), Chapters 1-17 (very comprehensive, has been the standard textbook for many years)
    * Video lectures:
      * [Norvig and Thrun: Introduction to Artificial Intelligence](https://www.udacity.com/course/intro-to-artificial-intelligence--cs271)
  * **Game Theory** provides the foundations to environments with multiple agents.
    * Textbooks:
      * [Osborne: An Introduction to Game Theory](https://global.oup.com/ushe/product/an-introduction-to-game-theory-9780195128956?cc=gb&lang=en&), Chapters 1-7,14,15
    * Video lectures:
      * Jackson, Leyton-Brown, Shoham: [Game theory I](https://www.coursera.org/learn/game-theory-1) and [II](https://www.coursera.org/learn/game-theory-2)
    * Survey papers:
      * [Buşoniu, Babuška, De Schutter: A Comprehensive Survey of Multiagent Reinforcement Learning](https://ieeexplore.ieee.org/document/4445757)
  * **Philosophy** originated some of the mental tools that are useful when thinking about superintelligent agents and originated the discussion around AI safety.
    * Books:
      * [Bostrom: Superintelligence: Paths, Dangers, Strategies](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies), Chapters 1-10,12
    * Relevant papers:
      * [Omohundro: The Basic AI Drives](https://selfawaresystems.files.wordpress.com/2008/01/ai_drives_final.pdf)
      * [Yudkowsky: Artificial Intelligence as a Positive and Negative Factor in Global Risk](https://intelligence.org/files/AIPosNegFactor.pdf)



More remotely related are the following areas.

  * **Automata and Complexity Theory** sits at the core of theoretical computer science.
    * Textbooks:
      * [Ullman and Hopcroft: Introduction to Automata Theory, Languages, and Computation](http://infolab.stanford.edu/~ullman/ialc.html), Chapters 1-10
      * [Sipser: Introduction to the Theory of Computation](http://www-math.mit.edu/~sipser/book.html), Chapters 1-5,7 (alternatively to Ullman and Hopcroft)
  * **Formal Logic** is a branch of mathematics that studies formal proofs and the limits of mathematics.
    * Textbooks:
      * [Boolos and Burgess: Computability and Logic](http://www.cambridge.org/us/academic/subjects/philosophy/logic/computability-and-logic-5th-edition), Chapters 1-4,8-20,23,25,27
      * [Enderton: A Mathematical Introduction to Logic](http://store.elsevier.com/A-Mathematical-Introduction-to-Logic/Herbert-Enderton/isbn-9780122384523/), Chapters 0-3 (alternatively to Boolos and Burgess)
  * **Formal Methods** are mathematical techniques for the specification and verification of hardware and software systems.
    * Textbooks:
      * [Alur: Principles of Cyber-Physical Systems](https://mitpress.mit.edu/9780262548922/principles-of-cyber-physical-systems/), Chapters 1-7,9
      * [Monin: Understanding Formal Methods](https://books.google.com.gi/books?id=7GsKBwAAQBAJ&printsec=copyright#v=onepage&q&f=false), Chapters 1-10
      * [Baier, Katoen, Larsen: Principles of Model Checking](https://mitpress.mit.edu/9780262026499/principles-of-model-checking/), Chapter 1-7,10
    * Surveys:
      * [Clarke, Henzinger, Veith: Handbook of Model Checking](http://www.springer.com/us/book/9783319105741) (to appear soon)



## Degree

### Undergraduate Degree

Ideally your undergraduate degree would be mathematics and computer science (for example, a bachelor’s degree in math and a master in computer science). But this does not mean that an undergraduate degree in a different related discipline like neuroscience or physics would be wasted. Make sure you have a solid handle on the relevant mathematics (linear algebra, calculus, statistics, …)!

For your undergraduate thesis, find someone who supervises well and who has time for you (not the most famous/cool professor). Work on a topic that your supervisor finds interesting (to get lots of feedback). Pursuing your own ideas at this point is risky and usually means that you don’t get much supervision. Do something theoretical, preferably in computer science. Find an interesting research group and start doing research early in your degree (it helps a lot if you have clever things to say about their research). Ideally, you should get out of a Master’s degree with at least one publication at an international conference. It’s not a big deal if this delays your degree.

Other tips:

  * If you find a topic interesting, take more classes even if they don’t seem related
  * Choose harder classes over easier ones (favor math courses and theoretical computer science courses over applied computer science courses)
  * Choose your thesis by supervisor, and not necessarily by topic
  * Publications are great, they are a considered a good predictor of your academic potential (even if you are not the first author). As such, they are very helpful when applying for PhD programs
  * Read general advice on whether a PhD is for you and how to approach it
  * Attend [MIRIx workshops](https://intelligence.org/mirix/) if they exist in your area



### PhD

Getting a PhD is generally an excellent idea and usually a prerequisite for someone to hire you as a researcher. A PhD will not only put you at the cutting edge of research, but also teach you the relevant soft skills (how to write papers, communicate complex ideas, etc.).

Your PhD should be in machine learning, reinforcement learning, statistics, or another discipline related to artificial intelligence. Focus on getting the required expertise first. If you feel comfortable in your area, shift your focus on to AI safety (e.g., in your final 1-2 years). Read [our profile on machine learning PhDs](https://80000hours.org/career-reviews/machine-learning-phd/) for more information.

For relevant problems, see:

  * [Amodei et al: Concrete Problems in AI Safety](https://arxiv.org/abs/1606.06565)
  * [Soares and Fallenstein: Aligning Superintelligence with Human Interests](https://intelligence.org/files/TechnicalAgenda.pdf)
  * [Russell et al: Research Priorities for Robust and Beneficial Artificial Intelligence](http://arxiv.org/abs/1602.03506)
  * [Taylor et al: Alignment for Advanced Machine Learning Systems](https://intelligence.org/files/AlignmentMachineLearning.pdf)



### Google AI residency program

The Google AI residency program is a year-long role, similar to spending a year in a master’s or PhD program in deep learning.

It’s designed to quickly get you up to speed with deep learning research and is open to people with degrees in a STEM field (bachelor’s, master’s, or PhD). It’s more prestigious than a master’s degree and gives you access to Google’s computational resources and experts in deep learning. That said, it’s extremely competitive – you’re more likely to get accepted into a top graduate school programme.

It’s worth applying to it after both undergraduate and master’s. If you’re choosing between the residency and a master’s, the residency will usually be better because of the advantages mentioned above, as well as the fact that you’ll be spending all your time on research.

When choosing between the residency and a PhD you’ll need to consider how good your PhD offers are – if you’ve got offers from top places then it may not be worth postponing, especially if you can’t defer your PhD.

### Research Groups

The following is an non-exhaustive list of research groups where you could apply for internships and PhD candidacy. Make sure you look at their research and see how it relates to your interests. Needless to say, it is not a good idea to mass-email everyone on this list.

  * Berkeley ([Stuart Russell](https://people.eecs.berkeley.edu/~russell/))
  * Cambridge ([Zoubin Ghahramani](http://mlg.eng.cam.ac.uk/zoubin/))
  * University of Montreal ([MILA](https://mila.quebec/en))
  * University of Alberta ([RLAI group](http://incompleteideas.net/rlai.cs.ualberta.ca/RLAI/ualberta.html))
  * Imperial College London ([Murray Shanahan](https://www.doc.ic.ac.uk/~mpsha/))
  * University of Oxford ([Michael Osborne](http://www.robots.ox.ac.uk/~mosb/))
  * McGill ([RLLAB](http://rl.cs.mcgill.ca/))
  * Australian National University ([Marcus Hutter](http://hutter1.net/))
  * University of Amsterdam ([Max Welling](https://amlab.science.uva.nl/people/MaxWelling/))
  * Stanford ([Percy Liang](https://cs.stanford.edu/~pliang/), [Emma Brunskill](http://www.cs.cmu.edu/~ebrun/))
  * CMU ([Zico Kolter](http://zicokolter.com/))
  * University of Toronto
  * IDSIA ([Jürgen Schmidhuber](http://people.idsia.ch/~juergen/))
  * Princeton ([HIPS](http://hips.seas.harvard.edu/))
  * MIT ([Joshua Tenenbaum](https://www.csail.mit.edu/user/815))
  * [Google DeepMind](https://deepmind.com/)
  * [Google Brain](https://research.google.com/teams/brain/)
  * [FAIR](https://research.facebook.com/ai/)
  * [OpenAI](https://openai.com/)



## Conferences

For your publications, always aim for the best conferences, even if you think your work will be rejected. Even if it is rejected, you will likely get more valuable feedback than in other places.

Attend major conferences even if you don’t have a paper there. You will get a sense of what researchers are interested in, and you can connect to potential supervisors and collaborators related to your interests. Read some of their papers beforehand so that you have a good conversation starter.

Major: [ICML](http://icml.cc/2016/), [NIPS](http://nips.cc/), COLT, [AAAI](http://www.aaai.org/home.html), UAI, IJCAI, AAMAS, [ICLR](https://www.iclr.cc/)  
Minor: [AISTATS](http://www.aistats.org/), ECAI, ECML, ALT  
Applications: ICCV, CVPR (Computer vision), ICASSP (Speech), ICRA (Robotics), EMNLP, ACL (NLP)

## Want to work on AI safety? We want to help.

We’ve helped dozens of people formulate their plans, and put them in touch with academic mentors. If you want to work on AI safety:

[Get in touch](https://80000hours.org/speak-with-us/?int_campaign=article)

  * [Like (opens in new window)](https://www.facebook.com/sharer/sharer.php?u=https://80000hours.org/articles/ai-safety-syllabus/ "Share on Facebook")
  * [Post (opens in new window)](https://twitter.com/intent/tweet?text=https://80000hours.org/articles/ai-safety-syllabus/ "Share on Twitter")
  * [Share (opens in new window)](https://www.linkedin.com/shareArticle?mini=true&url=https://80000hours.org/articles/ai-safety-syllabus/&source=80000Hours "Share on LinkedIn")
  * [Email](/cdn-cgi/l/email-protection#82bdf1f7e0e8e7e1f6bfc4f0edefa9bab2a7b0c1b2b2b2a9caedf7f0f1a7b1c3a9c3cba9f1e3e4e7f6fba7b0b4ece0f1f2a7b1c0f1fbeeeee3e0f7f1a4e3eff2b9e0ede6fbbfeaf6f6f2f1b8adadbab2b2b2b2eaedf7f0f1acedf0e5ade3f0f6ebe1eee7f1ade3ebaff1e3e4e7f6fbaff1fbeeeee3e0f7f1ad "Share by email")
  * Print


