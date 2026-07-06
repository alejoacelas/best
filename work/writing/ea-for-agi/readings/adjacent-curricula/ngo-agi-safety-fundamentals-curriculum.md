---
title: "AGI Safety Fundamentals curriculum and application"
author: "Richard_Ngo"
date: 2021-10-20
url: https://www.alignmentforum.org/posts/Zmwkz2BMvuFFR8bi3/agi-safety-fundamentals-curriculum-and-application
fetched: 2026-07-06
via: forum-graphql
topic: "adjacent-curricula"
note: "Ngo's original AGISF curriculum + application post: canonical field-building syllabus and link mine"
---

Over the last year EA Cambridge has been designing and running an online program aimed at effectively introducing the field of AGI safety; the most recent cohort included around 150 participants and 25 facilitators from around the world. Dewi Erwan runs the program; I designed the curriculum, the latest version of which appears in [the linked document](https://docs.google.com/document/d/1mTm_sT2YQx3mRXQD6J2xD2QJG1c3kHyvX8kQc_IQ0ns/edit?usp=sharing). We expect the program to be most useful to people with technical backgrounds (e.g. maths, CS, or ML), although the curriculum is intended to be accessible for those who aren't familiar with machine learning, and participants will be put in groups with others from similar backgrounds. **If you're interested in joining the next version of the course (taking place January - March 2022)** [**apply here to be a participant**](https://airtable.com/shr9R2syz8wc2ao7p) **or** [**here to be a facilitator**](https://airtable.com/shr0IO5TTZEY5FFxY). Applications are open to anyone and close 15 December. **EDIT 10 Dec: Facilitators will be paid $1000; the time commitment is 2-3 hours a week for 8 weeks. We've now also released** [**the curriculum for the governance track**](https://forum.effectivealtruism.org/posts/68ANc8KhEn6sbQ3P9/ai-governance-fundamentals-curriculum-and-application).

This post contains an overview of the course and an abbreviated version of the curriculum; the full version (which also contains optional readings, exercises, notes, discussion prompts, and project ideas) [can be found here](https://docs.google.com/document/d/1mTm_sT2YQx3mRXQD6J2xD2QJG1c3kHyvX8kQc_IQ0ns/edit?usp=sharing). Comments and feedback are very welcome, either on this post or in the full curriculum document; suggestions of new exercises, prompts or readings would be particularly helpful. I'll continue to make updates until shortly before the next cohort starts.

Course overview
---------------

The course consists of 8 weeks of readings, plus a final project. Participants are divided into groups of 4-6 people, matched based on their prior knowledge about ML and safety. Each week (apart from week 0) each group and their discussion facilitator will meet for 1.5 hours to discuss the readings and exercises. Broadly speaking, the first half of the course explores the motivations and arguments underpinning the field of AGI safety, while the second half focuses on proposals for technical solutions. After week 7, participants will have several weeks to work on projects of their choice, to present at the final session.

Each week's curriculum contains:

*   Key ideas for that week
*   Core readings
*   Optional readings
*   Two exercises (participants should pick one to do each week)
*   Further notes on the readings
*   Discussion prompts for the weekly session

Week 0 replaces the small group discussions with a lecture plus live group exercises, since it's aimed at getting people with little ML knowledge up to speed quickly.

The topics for each week are:

*   Week 0 (optional): introduction to machine learning
*   Week 1: Artificial general intelligence
*   Week 2: Goals and misalignment
*   Week 3: Threat models and types of solutions
*   Week 4: Learning from humans
*   Week 5: Decomposing tasks for outer alignment
*   Week 6: Other paradigms for safety work
*   Week 7: AI governance
*   Week 8 (several weeks later): Projects

Abbreviated curriculum (only key ideas and core readings)
---------------------------------------------------------

### Week 0 (optional): introduction to machine learning

This week mainly involves learning about foundational concepts in machine learning, for those who are less familiar with them, or want to revise the basics. If you’re not already familiar with basic concepts in statistics (like regressions), it will take a bit longer than most weeks; and instead of the group discussions from most weeks, there will be a [lecture](https://docs.google.com/presentation/d/1vy193pcqe0nmLpTGBwP6O2Nlv7s0pq6oSzo-P-Kw4tM/edit?usp=sharing) and [group exercises](https://docs.google.com/document/d/1ChHiwLCDWpkwNDL77iRBc3D8tydXonJgaK2BvVYI3oE/edit?usp=sharing). If you’d like to learn ML in more detail, see the further resources section at the end of this curriculum.

Otherwise, start with Ngo (2021), which provides a framework for thinking about machine learning, and in particular the two key components of deep learning: neural networks and optimisation. For more details and intuitions about neural networks, watch 3Blue1Brown (2017a); for more details and intuitions about optimisation, watch 3Blue1Brown (2017b). Lastly, see von Hasselt (2021) for an introduction to the field of reinforcement learning.

Core readings:

1.  If you’re not familiar with the basics of statistics, like linear regression and classification:
    1.  [Introduction: linear regression](https://courses.lumenlearning.com/odessa-introstats1-1/chapter/introduction-linear-regression/) (10 mins)
    2.  [Ordinary least squares regression](https://setosa.io/ev/ordinary-least-squares-regression/) (10 mins)
2.  [A short introduction to machine learning (Ngo, 2021)](https://www.alignmentforum.org/posts/qE73pqxAZmeACsAdF/a-short-introduction-to-machine-learning) (20 mins)
3.  [But what is a neural network? (3Blue1Brown, 2017a)](https://www.youtube.com/watch?v=aircAruvnKk&t=0s) (20 mins)
4.  [Gradient descent, how neural networks learn (3Blue1Brown, 2017b)](https://www.youtube.com/watch?v=IHZwWFHWa-w) (20 mins)
5.  [Introduction to reinforcement learning (von Hasselt, 2021)](https://www.youtube.com/watch?v=TCCjZe0y4Qc&list=PLqYmG7hTraZDVH599EItlEWsUOsJbAodm) **(ending at 36:30, at section titled Inside the Agent)** (40 mins)

### Week 1: Artificial general intelligence

The first two readings this week offer several different perspectives on how we should think about artificial general intelligence. This is the key concept underpinning the course, so it’s important to deeply explore what we mean by it, and the limitations of our current understanding.

The third reading is about *how* we should expect advances in AI to occur. AI pioneer Rich Sutton explains the main lesson he draws from the history of the field: that “general methods that leverage computation are ultimately the most effective”. Compared with earlier approaches, these methods rely much less on human design, and therefore raise the possibility that we build AGIs whose cognition we know very little about.

Focusing on compute also provides a way to forecast *when* we should expect AGI to occur. The most comprehensive report on the topic (summarised by Karnofsky (2021)) estimates the amount of compute required to train neural networks as large as human brains to do highly impactful tasks, and concludes that this will probably be feasible within the next four decades - although the estimate is highly uncertain.

Core readings:

1.  [Four background claims (Soares, 2015)](https://intelligence.org/2015/07/24/four-background-claims/) (15 mins)
2.  [AGI safety from first principles (Ngo, 2020)](https://drive.google.com/file/d/1uK7NhdSKprQKZnRjU58X7NLA1auXlWHt/view) **(only sections 1, 2 and 2.1)** (20 mins)
3.  [The Bitter Lesson (Sutton, 2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) (15 mins)
4.  [Forecasting transformative AI: the “biological anchors” method in a nutshell (Karnofsky, 2021)](https://www.cold-takes.com/forecasting-transformative-ai-the-biological-anchors-method-in-a-nutshell/) (30 mins)

### Week 2: Goals and misalignment

This week we’ll focus on how and why AGIs might develop goals that are *misaligned* with those of humans, in particular when they’ve been trained using machine learning. We cover three core ideas. Firstly, it’s difficult to create reward functions which specify the desired outcomes for complex tasks (known as the problem of *outer alignment*). Krakovna et al. (2020) helps build intuitions about the difficulty of outer alignment, by showcasing examples of misbehaviour on toy problems.

Secondly, however, it’s important to distinguish between the reward function which is used to train a reinforcement learning agent, versus the goals which that agent learns to pursue. Hubinger et al. (2019a) argue that even an agent trained on the “right” reward function might acquire undesirable goals - the problem of *inner alignment*. Carlsmith (2021) explores in more detail what it means for an agent to be goal-directed in a worrying way, and gives reasons why such agents seem likely to arise.

Lastly, Bostrom (2014) argues that almost all goals which an AGI might have would incentivise it to misbehave in highly undesirable ways (e.g. pursuing survival and resource acquisition), due to the phenomenon of *instrumental convergence*.

Core readings:

1.  [Specification gaming: the flip side of AI ingenuity (Krakovna et al., 2020)](https://medium.com/@deepmindsafetyresearch/specification-gaming-the-flip-side-of-ai-ingenuity-c85bdb0deeb4) (15 mins)
2.  [Introduction to Risks from Learned Optimisation (Hubinger et al., 2019a)](https://www.alignmentforum.org/posts/FkgsxrGf3QxhfLWHG/risks-from-learned-optimization-introduction) (30 mins)
3.  [Superintelligence, Chapter 7: The superintelligent will (Bostrom, 2014)](https://drive.google.com/file/d/1FVl9W2gW5_8ODYNZJ4nuFg79Z-_xkHkJ/view?usp=sharing) (45 mins)
4.  [Is power-seeking AI an existential risk? (Carlsmith, 2021)](https://docs.google.com/document/d/1smaI1lagHHcrhoi6ohdq3TYIZv0eNWWZMPEy8C8byYg/edit#heading=h.lvsab2uecgk4) **(only sections 2: Timelines and 3: Incentives)** (25 mins)

### Week 3: Threat models and types of solutions

How might misaligned AGIs cause catastrophes, and how might we stop them? Two threat models are outlined in Christiano (2019) - the first focusing on outer misalignment, the second on inner misalignment. Muehlhauser and Salamon (2012) outline a core intuition for why we might be unable to prevent these risks: that progress in AI will at some point speed up dramatically. A third key intuition - that misaligned agents will try to deceive humans - is explored by Hubinger et al. (2019).

How might we prevent these scenarios? Christiano (2020) gives a broad overview of the landscape of different contributions to making AIs aligned, with a particular focus on some of the techniques we’ll be covering in later weeks.

Core readings:

1.  [What failure looks like (Christiano, 2019)](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like) (20 mins)
2.  [Intelligence explosion: evidence and import (Muehlhauser and Salamon, 2012)](https://drive.google.com/file/d/1QxMuScnYvyq-XmxYeqBRHKz7cZoOosHr/view?usp=sharing) **(only pages 10-15)** (15 mins)
3.  [AI alignment landscape (Christiano, 2020)](https://forum.effectivealtruism.org/posts/63stBTw3WAW6k45dY/paul-christiano-current-work-in-ai-alignment) (30 mins)
4.  [Risks from Learned Optimisation: Deceptive alignment (Hubinger et al., 2019)](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment) (45 mins)

### Week 4: Learning from humans

This week, we look at four techniques for training AIs on human data (all falling under “learn from teacher” in [Christiano’s AI alignment landscape](https://ai-alignment.com/ai-alignment-landscape-d3773c37ae38) from last week). From a safety perspective, each of them improves on standard reinforcement learning techniques in some ways, but also has weaknesses which prevent it from solving the whole alignment problem. Next week, we’ll look at some ways to make these techniques more powerful and scalable; this week focuses on understanding each of them.

The first technique, behavioural cloning, is essentially an extension of supervised learning to settings where an AI must take actions over time - as discussed by Levine (2021). The second, reward modelling, allows humans to give feedback on the behaviour of reinforcement learning agents, which is then used to determine the rewards they receive; this is used by Christiano et al. (2017) and Steinnon et al. (2020). The third, inverse reinforcement learning (IRL for short), attempts to identify what goals a human is pursuing based on their behaviour.

A notable variant of IRL is *cooperative* IRL (CIRL for short), introduced by Hadfield-Menell et al. (2016). CIRL focuses on cases where the human and AI interact in a shared environment, and therefore the best strategy for the human is often to help the AI learn what goal the human is pursuing.

Core readings:

1.  [Imitation learning lecture: part 1 (Levine, 2021a)](https://youtu.be/kGc8jOy5_zY) (20 mins)
2.  [Deep RL from human preferences blog post (Christiano et al., 2017)](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/) (15 mins)
3.  [Learning to summarise with human feedback blog post (Stiennon et al., 2020)](https://openai.com/blog/learning-to-summarize-with-human-feedback/) (25 mins)
4.  Inverse reinforcement learning
    1.  For those who don’t already understand IRL:
        *   [Inverse reinforcement learning example (Udacity, 2016)](https://www.youtube.com/watch?v=h7uGyBcIeII) (5 mins)
        *   [Learning from humans: what is inverse reinforcement learning? (Alexander, 2018)](https://thegradient.pub/learning-from-humans-what-is-inverse-reinforcement-learning/) (25 mins)
    2.  For those who already understand IRL:
        *   [Cooperative inverse reinforcement learning (Hadfield-Menell et al., 2016)](https://arxiv.org/abs/1606.03137) (40 mins)

### Week 5: Decomposing tasks for outer alignment

The most prominent research directions in technical AGI safety involve training AIs to do complex tasks by decomposing those tasks into simpler ones where humans can more easily evaluate AI behaviour. This week we’ll cover three closely-related algorithms (all falling under “build a better teacher” in [Christiano’s AI alignment landscape](https://forum.effectivealtruism.org/posts/63stBTw3WAW6k45dY/paul-christiano-current-work-in-ai-alignment)).

Wu et al. (2021) applies reward modelling recursively in order to solve more difficult tasks. Recursive reward modelling can be considered one example of a more general class of techniques called *iterated amplification* (also known as *iterated distillation and amplification*), which is described in Ought (2019). A more technical description of iterated amplification is given by Christiano et al. (2018), along with some small-scale experiments.

The third technique we’ll discuss this week is *Debate*, as proposed by Irving and Amodei (2018). Unlike the other two techniques, Debate focuses on evaluating claims made by language models, rather than supervising AI behaviour over time.

Core readings:

1.  [Recursively summarising books with human feedback (Wu et al., 2021)](https://arxiv.org/abs/2109.10862) **(ending after section 4.1.2: Findings)** (45 mins)
2.  Factored cognition (Ought, 2019) ([introduction](https://ought.org/research/factored-cognition) and [scalability section](https://ought.org/research/factored-cognition/scalability)) (20 mins)
3.  [AI safety via debate blog post (Irving and Amodei, 2018)](https://openai.com/blog/debate/) (15 mins)
4.  [Supervising strong learners by amplifying weak experts (Christiano et al., 2018)](https://arxiv.org/abs/1810.08575) (40 mins)

### Week 6: Other paradigms for safety work

A lot of safety work focuses on “shifting the paradigm” of AI research. This week we’ll cover two ways in which safety researchers have attempted to do so. The first is via research on *interpretability*, which attempts to understand in detail how neural networks work. Olah et al. (2020) showcases some prominent research in the area; and Chris Olah’s perspective is summarised by Hubinger et al. (2019).

The second is the research agenda of the Machine Intelligence Research Institute (MIRI) which aims to create rigorous mathematical frameworks to describe the relationships between AIs and their real-world environments. Soares (2015) gives a high-level explanation of their approach; while Demski and Garrabrant (2018) identify a range of open problems and links between them. 

Core readings:

1.  [Zoom In: an introduction to circuits (Olah et al., 2020)](https://distill.pub/2020/circuits/zoom-in/) (35 mins)
2.  [Chris Olah’s views on AGI safety (Hubinger, 2019)](https://www.alignmentforum.org/posts/X2i9dQQK3gETCyqh2/chris-olah-s-views-on-agi-safety) (25 mins)
3.  [MIRI’s approach (Soares, 2015)](https://intelligence.org/2015/07/27/miris-approach/) (30 mins)
4.  [Embedded agents (Demski and Garrabrant, 2018)](https://intelligence.org/2018/10/29/embedded-agents/) (25 mins)

### Week 7: AI governance

In the last week of curriculum content, we’ll look at the field of AI governance. Start with Dafoe (2020), which gives a thorough overview of AI governance and ways in which it might be important, particularly focusing on the framing of AI governance as field-building. An alternative framing - of AI governance as an attempt to prevent cooperation failures - is explored by Clifton (2019). Although the field of AI governance is still young, Muehlhauser (2020) identifies some useful work so far. Finally, Bostrom (2019) provides a background framing for thinking about technological risks: the process of randomly sampling new technologies, some of which might prove catastrophic.

Core readings:

1.  [AI Governance: Opportunity and Theory of Impact (Dafoe, 2020)](https://forum.effectivealtruism.org/posts/42reWndoTEhFqu6T8/ai-governance-opportunity-and-theory-of-impact) (25 mins)
2.  [Cooperation, conflict and transformative AI: sections 1 & 2 (Clifton, 2019)](https://www.alignmentforum.org/s/p947tK8CoBbdpPtyK/p/KMocAf9jnAKc2jXri) (25 mins)
3.  [Our AI governance grantmaking so far (Muehlhauser, 2020)](https://www.openphilanthropy.org/blog/ai-governance-grantmaking) (15 mins)
4.  [The vulnerable world hypothesis (Bostrom, 2019)](https://www.nickbostrom.com/papers/vulnerable.pdf) **(ending at the start of the section on ‘Preventive policing’)** (60 mins)

### Week 8 (four weeks later): Projects

The final part of the AGI safety fundamentals course will be projects where you get to dig into something related to the course. The project is a chance for you to explore your  interests, so try to find something you’re excited about! The goal of this project is to help you practice taking an intellectually productive stance towards AGI safety - to go beyond just reading and discussing existing ideas, and take a tangible step towards contributing to the field yourself. This is particularly valuable because it’s such a new field, with lots of room to explore.

### [Click here for the full version of the curriculum](https://docs.google.com/document/d/1mTm_sT2YQx3mRXQD6J2xD2QJG1c3kHyvX8kQc_IQ0ns/edit?usp=sharing), which contains additional readings, exercises, notes, discussion prompts, and project ideas.