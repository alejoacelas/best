---
title: "Most AI value will come from broad automation, not from R&D"
author: "Ege Erdil"
url: https://epoch.ai/gradient-updates/most-ai-value-will-come-from-broad-automation-not-from-r-d
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by preparing-for-the-intelligence-explosion; Epoch on where AI economic value comes from — AI economics"
---

Gradient Updates shares more opinionated or informal takes on big questions in AI progress. These posts solely represent the views of the authors, and do not necessarily reflect the views of Epoch AI as a whole. 

A popular view about the future impact of AI on the economy is that it will be primarily mediated through AI automation of R&D. In some form or another, this view has been expressed by many influential figures in the industry:

  * In his essay [“Machines of Loving Grace”](https://darioamodei.com/machines-of-loving-grace), Dario Amodei lists five ways in which AI can benefit humanity in a scenario where AI goes well. He considers biology R&D, neuroscience R&D, and economics R&D as three of these ways. There’s no point at which he clearly argues that AI will lead to high rates of economic growth due to being broadly deployed throughout the economy as opposed to speeding up R&D and perhaps improving economic governance.

  * Demis Hassabis, CEO of DeepMind, is also bullish on R&D as the main channel through which AI will benefit society. [In a recent interview](https://www.thetimes.com/life-style/celebrity/article/demis-hassabis-ai-could-cure-all-diseases-in-10-years-09pcqh7cb), he provides specific mechanisms through which this could happen: AI could cure all diseases and “solve energy”. He mentions “radical abundance” as a possibility as well, but beyond the R&D channel doesn’t name any other way in which this could come about.

  * In his essay [“Three Observations”](https://blog.samaltman.com/three-observations), Sam Altman takes a more moderate position and explicitly says that in some ways AI might end up like the transistor, a big discovery that scales well and seeps into every corner of the economy. However, even he singles out the impact of AI on scientific progress as likely to “surpass everything else”.




Overall, this view is surprisingly influential despite not having been supported by any rigorous economic arguments. We’ll argue in this issue that it’s also very likely wrong.

R&D is generally not as economically valuable as people assume – increasing productivity and new technologies are certainly essential for long-run growth, but the contribution of explicit R&D to these processes is smaller than people generally think. Moreover, even most of this contribution is external and not captured in profits by the company performing the R&D, reducing the incentive to deploy systems to perform R&D in the first place. This combination means most AI systems will actually be deployed and earn revenue from tasks that are unrelated to R&D, and in aggregate these tasks will be more economically valuable as well.

It’s also significantly harder to automate R&D jobs than it might naively seem, because most tasks in the job of a researcher are not “reasoning tasks” and depend crucially on capabilities such as agency, multimodality, and long-context coherence. Once AI capabilities are already at a point where the job of a researcher can be entirely automated, it will also be feasible to automate most other jobs in the economy, which for the above reason would most likely create much more economic value than narrowly automating R&D alone.

When we combine these two points, there’s no reason to expect most of the economic value of AI to come from R&D at any point in the future. A much more plausible scenario is that the value of AI will be driven by broad economic deployment, and while we should expect this to [lead to an increase in productivity and output per person](https://epoch.ai/blog/explosive-growth-from-ai-a-review-of-the-arguments) due to increasing returns to scale, most of this increase will probably not come from explicit R&D.

Get the latest from Epoch AI[Subscribe](https://epochai.substack.com/subscribe)

## The primary economic impact of AI will be its ability to _broadly_ automate labor

There are two related but subtly different claims that we want to tease apart in this section, one we agree with and another we disagree with:

  * **A technology that could automate R &D entirely, and was only used for this purpose, would be highly valuable and would likely add at least a few percentage points to economic growth per year.** We think this claim is true and it’s hard to argue against it.

  * **In the real world, the most socially or economically valuable application of such a technology would in fact be to automate R &D.** This is the claim we will be disputing. While R&D is valuable, we don’t think it’s where we should expect most of the economic value or growth benefits from AI, both before and after AIs exceed human performance on all relevant tasks.




To understand our argument disputing the second claim, we must first measure the actual economic value of R&D. We know that R&D gets its economic value primarily through improving productivity, so to quantify the impact of R&D we might ask how much of the growth in labor productivity in the past has been due to R&D spending and its associated spillovers. The US Bureau of Labor Statistics [estimates that](https://www.bls.gov/productivity/highlights/research-and-development-contribution-to-total-factor-productivity.htm) R&D financed by private firms only accounted for around 0.2%/yr of total factor productivity (TFP) growth in the US from 1988 to 2022, compared to around 0.8%/yr of total TFP growth over the same period and around 1.9%/yr of labor productivity growth.

Though [public R&D spending](https://fred.stlouisfed.org/series/Y057RC1Q027SBEA) is only around a quarter of [total R&D spending](https://fred.stlouisfed.org/series/Y694RC1Q027SBEA) in the US economy, we might also expect it to have larger positive externalities, and [Fieldhouse and Mertens (2023)](https://andrewjfieldhouse.com/wp-content/uploads/2023/05/Fieldhouse-and-Mertens-2023_5_5_23.pdf) estimate that these two effects roughly cancel: public R&D is also responsible for a quarter of TFP growth on average in the US, putting the total contribution of R&D to US TFP growth at around 0.4%/yr or half of the total. Still, this means that only 20% of labor productivity growth in the US since 1988 has been driven by R&D spending!

Capital deepening accounts for around half of labor productivity growth in this period, and of the remaining part, much of it is explained by other sources of productivity such as better management, learning-by-doing, knowledge diffusion, et cetera. What’s left over for R&D to explain is a smaller contribution relative to the size of the overall “growth pie”, and even much of this R&D might require other inputs than researchers, e.g. technical equipment and laboratory facilities.

Our estimate for the contribution of private R&D to TFP growth also roughly match how the the economy actually allocates investment to R&D versus capital accumulation, at least if we assume that many of the other factors driving TFP growth are difficult to invest in directly and both R&D and capital formation face equally steep diminishing returns at any given time. Since capital deepening accounts for 50% of productivity growth while private R&D accounts for 10%, we might expect capital investments to roughly be five times R&D investments, and this intuition turns out to be correct: the US spends around $5T/yr on capital investment and $1T/yr on private R&D in total.

So if R&D is comparatively small potatoes, where should we actually deploy our AI systems in order to speed up growth? The most obvious channel is to broadly automate human labor, as the labor elasticity of output is around 0.6 in the US economy, which probably exceeds the “R&D elasticity of output” by around five times. Moreover, we spend about 20 times more on labor applied broadly than on labor applied to explicit R&D. The intuition for this is simple: if you want to produce the most economic value, you should automate whatever is being paid the most money in the current economy, and that makes labor an obvious target to focus on. The vastly larger economy that would result could reinvest its output into capital and accelerate TFP growth through many other channels than formal R&D, e.g. through learning-by-doing. In aggregate, we have good reason to believe this gives rise to increasing returns to scale and thus accelerating economic growth, [perhaps up to levels ten times faster than today or higher](https://arxiv.org/abs/2309.11690).

The counterargument to this view is that the growth effects of R&D are underestimated in the data and the low amount of spending on R&D relative to capital investment is caused by some combination of large positive externalities and stronger stepping-on-toes effects in R&D. These arguments are not _a priori_ implausible, but quantitatively it seems hard to argue R&D should explain a majority of TFP growth by itself when TFP varies across space and time for so many other reasons that seem significant. In addition, even if we follow influential papers such as [Bloom et al. (2020)](https://www.aeaweb.org/articles?id=10.1257/aer.20180338) in making an unsupported assumption that TFP growth is completely driven by R&D inputs, their parameter estimates imply an R&D spending elasticity of output that’s around 0.3, about equal to capital and only half of labor.

To summarize, the vast majority of economic growth currently doesn’t come from R&D, and we need a compelling reason to be convinced that AI will reverse this pattern. There are two reasons that are often brought up: that R&D is specifically important for AI due to the possibility of AI systems automating their own R&D, and that R&D tasks in general will be easier for AI and thus will get automated significantly earlier than the rest of the economy. We think both of these reasons are unconvincing and explain why in the subsequent sections.

## Automating AI R&D _alone_ likely won’t dramatically accelerate AI progress

Though the broader economic value of R&D is not as large as we might have expected, there’s still a reason specific to AI to believe R&D automation could be a dominant effect. If AI systems were able to automate the process of their own software R&D, a _software-only singularity_ might become possible: on a fixed stock of compute, we could run AI researchers who search for ways to improve their own algorithms, which would allow us to run even more virtual researchers to make yet more software progress, et cetera.

The plausibility of this feedback loop depends crucially on how fast “ideas get harder to find” as we make progress towards greater software efficiency. [In prior work](https://epoch.ai/blog/do-the-returns-to-software-rnd-point-towards-a-singularity), we’ve quantitatively estimated the size of this effect across several software domains and concluded that _if researcher effort is the only input to R &D_, then a software-only singularity might be about as likely as not. However, the key assumption that many orders of magnitude of software R&D progress can be made with researcher effort alone is load-bearing and most likely incorrect.

A more plausible model is one in which research progress requires both cognitive effort and data, with some degree of complementarity between the two inputs. This is also supported by the fact that across various software domains, AI is the one that has seen both the fastest experimental compute scaling and the fastest rate of software progress, with both of them currently being [around 3-4x per year](https://epoch.ai/trends). This coincidence suggests that using experimental compute to generate data is at least important for software progress, though we can’t tell on this basis alone to what extent it’s a complementary input to researcher effort.

If the two inputs are indeed complementary, any software-driven acceleration could only last until we become bottlenecked on compute and end up having to do the _physical work_ of obtaining more GPUs in order to run more experiments. AI could of course speed this process up also, but only if it were to be widely deployed throughout the semiconductor supply chain, and probably even more broadly in the economy to supply this industry with the inputs it needs from elsewhere.

How many orders of magnitude a software-only singularity can last before bottlenecks kick in to stop it depends crucially on the strength of the complementarity between experiments and insight in AI R&D, and unfortunately there’s no good estimate of this key parameter that we know about. However, in other parts of the economy it’s common to have nontrivial complementarities, and this should inform our assessment of what is likely to be true in the case of AI R&D. Just as one example, [Oberfield and Raval (2014)](https://www.nber.org/papers/w20452) estimate that the elasticity of substitution between labor and capital in the US manufacturing sector is 0.7, and this is already strong enough for any “software-only singularity” to fizzle out after less than an order of magnitude of improvement in efficiency.

Another piece of evidence in favor of bottlenecks in the R&D process is that we’ve automated significant parts of R&D already without observing any dramatic acceleration in scientific progress. For instance, we’ve continuously automated the programming work required for most R&D, first by the development of specialized libraries and recently by the use of LLM-powered tools to accelerate coding; and over time we’ve also invented many kinds of physical labor-saving research equipment. However, none of this has given rise to an explosion of R&D progress: the benefits were instead rather marginal, which is consistent with a story in which R&D tasks have reasonably strong complementarity with one another. This doesn’t directly inform us about the complementarity between R&D effort as a whole and experiments, but it’s another piece of evidence that should be factored into our prior.

The low quality of all this evidence means we can’t rule out that AI R&D might be an unusual part of the economy in which the elasticity of substitution between key inputs is equal to or greater than 1, which would ensure complementarities are weak enough for a singularity to be possible in principle. However, comparison with other cases where we do have data should lead us to be cautious about any such prediction. By default, a software-only or software-biased singularity should be treated as an unlikely outcome rather than a likely one.

## Fully automating R&D requires a very broad set of abilities

At first glance, the job of a scientist might seem like it leans very heavily on abstract reasoning—generating ideas, formulating hypotheses, analyzing data, coding, and mathematical reasoning. If this were true, it would suggest that scientific researchers will be among the jobs most at risk of being taken over by reasoning models in the near future. That’s because these are exactly the types of tasks that seem most amenable to automation using current reasoning models.

In such a world, AIs would greatly accelerate R&D before AIs are broadly deployed across the economy to take over more common jobs, such as retail workers, real estate agents, or IT professionals. In short, AIs would “first automate science, then automate everything else.”

But this picture is likely wrong. In reality, most R&D jobs require much more than abstract reasoning skills. To illustrate, consider medical scientists. Below is a list of [job tasks associated with medical scientists](https://www.onetonline.org/link/summary/19-1042.00), taken from the O*NET occupational survey, ranked by importance to the occupation. We have labeled each task based on whether we generally think it can be performed using only abstract reasoning skills—which in this context, means it requires purely linguistic, logical, or mathematical abilities, including writing reports, coding, or proving theorems.

Importance| Task| Automatable via abstract reasoning?  
---|---|---  
92| Follow strict safety procedures when handling toxic materials to avoid contamination.| ❌ No  
91| Evaluate effects of drugs, gases, pesticides, parasites, and microorganisms at various levels.| ❌ No  
87| Plan and direct studies to investigate human or animal disease, preventive methods, and treatments for disease.| ❌ No  
87| Prepare and analyze organ, tissue, and cell samples to identify toxicity, bacteria, microorganisms, or study cell structure.| ❌ No  
82| Standardize drug dosages, methods of immunization, and procedures for manufacturing drugs and medicinal compounds.| ✅ Yes  
78| Conduct research to develop methodologies, instrumentation, and procedures for medical applications, analyzing data and presenting findings.| ❌ No  
78| Teach principles of medicine and medical and laboratory procedures to physicians, residents, students, and technicians.| ✅ Yes  
77| Study animal and human health and physiological processes.| ❌ No  
75| Write and publish articles in scientific journals.| ✅ Yes  
75| Write applications for research grants.| ✅ Yes  
73| Investigate the cause, progress, life cycle, or mode of transmission of diseases or parasites.| ❌ No  
70| Use equipment such as atomic absorption spectrometers, electron microscopes, flow cytometers, or chromatography systems.| ❌ No  
67| Confer with health departments, industry personnel, physicians, and others to develop health safety standards and public health improvement programs.| ✅ Yes  
60| Consult with and advise physicians, educators, researchers, and others regarding medical applications of physics, biology, and chemistry.| ✅ Yes  
  
  


Out of these 14 tasks, we guessed that only 6 require abstract reasoning alone to perform. Strikingly, we classified only one of the top five most important tasks for medical scientists as relying solely on abstract reasoning. Overall, the most critical aspects of the job appear to require hands-on technical skills, sophisticated coordination with others, specialized equipment use, long-context abilities, and complex multimodal understanding.

This pattern holds true across other common research occupations too. To demonstrate this, we used GPT-4.5 to label tasks across 12 common R&D occupations into one of three categories, depending on whether it thinks the task can be performed using only abstract reasoning skills, whether it requires complex computer-use skills (but not physical presence), or whether it one needs to be physically present to complete the task. See [this link](https://chatgpt.com/share/67dcac5b-a5f8-8000-b3b1-56319af6eba1) to our conversation with GPT-4.5 to find our methodology and results.

This plot reveals a more nuanced picture of what scientific research actually entails. Contrary to the assumption that research is largely an abstract reasoning task, the reality is that much of it involves physical manipulation and advanced agency. To fully automate R&D, AI systems likely require the ability to autonomously operate computer GUIs, coordinate effectively with human teams, possess strong executive functioning skills to complete highly complex projects over long time horizons, and manipulate their physical environment to conduct experiments.

Yet, by the time AI reaches the level required to fully perform this diverse array of skills at a high level of capability, it is likely that a broad swath of more routine jobs will have _already_ been automated. This contradicts the notion that AI will “first automate science, then automate everything else.” Instead, **a more plausible prediction is that AI automation will first automate a large share of the general workforce, across a very wide range of industries,_before_ it reaches the level needed to fully take over R&D.**

Rather than expecting an AI revolution that starts with scientific breakthroughs and then later makes its way to other fields, we should anticipate an initial period where automation takes over a large fraction of conventional jobs first, with a large acceleration in science and technology following only once AI has mastered the messy and complex demands of real-world work.

Even after AI fully takes over R&D, it is reasonable to expect AI will mainly accelerate science and technology through the large-scale automation of non-R&D tasks—such as creating infrastructure that various R&D experiments rely on—rather than by substituting for R&D researchers directly. This expectation makes sense considering that explicit R&D presently accounts for only a small portion of overall economic growth, as mentioned previously.

## AI takeoff will likely be diffuse and salient

Taken together, the preceding arguments suggest that even _before_ AI begins to have transformative economic or technological effects, its impacts will likely be much more diffuse and salient than many stories of AI takeoff have depicted. By _diffuse_ we mean that AI-driven automation will occur widely and transform a large share of the economy, rather than being largely narrowly confined to R&D occupations. And by _salient_ we mean that its impacts will be highly visible to most people and highly disruptive—for example, by displacing labor on a large scale.

Moreover, even _after_ AI begins to have transformative effects on the world, the preceding arguments suggest that automation of explicit R&D will only play a minor role contributing to these impacts. Instead, these effects will primarily be supported by broader automation throughout the economy.

Rather than imagining that the upcoming years of AI takeoff will take the form of a “country of geniuses in a data center” doing R&D work, we think it’s better to imagine the following alternative picture:

  1. AI progress will continue to incrementally expand the set of tasks AIs are capable of performing over the coming years. This progress will mainly be enabled by scaling compute infrastructure, rather than purely cognitive AI R&D efforts.
  2. As a consequence, AIs will be deployed broadly across the economy to automate an increasingly wide spectrum of labor tasks. Eventually, this will culminate in greatly accelerated economic growth.
  3. Prior to the point at which AIs precipitate _transformative_ effects on the world—in the sense of explosive economic, medical, or other technological progress—there will have _already been_ a series of highly disruptive waves of automation that fundamentally reshaped global labor markets and public perceptions of AI.
  4. At every moment in time, including after the point at which AI can meaningfully accelerate economic, medical, or technological progress, the primary channel through which AI will accelerate each of these variables will be the widespread automation of non-R&D tasks at scale.



One might call this picture the “general automation explosion”, to emphasize that the key force supporting acceleration is the breadth and scale of AI automation, rather than from any specific thing AI is good at. However, we admit this term isn’t as catchy as the phrase “intelligence explosion”.

## Key takeaways

This view has important implications for how we should approach the future of AI from a business, policy, and personal perspective.

First, from a business perspective, we suspect that for the foreseeable future, it will be more profitable for AI labs to focus on trying to automate ordinary work tasks—such as creating computer-use agents that can competently browse the internet, operate commercial software, and perform standard white collar job tasks—rather than focusing on developing “Nobel Laureate”-level reasoning models that are capable of narrowly assisting researchers in fields like biology and medicine. We also believe these ordinary abilities will likely be more important to track and benchmark compared to AI performance on R&D tasks.

Second, from a policy perspective, we think it’s important to recognize that public opinion on AI will likely undergo a profound shift between now and when AI will start to have transformative effects on the world—such as explosive economic growth or substantial progress in human life extension. This shift will occur because, by the time AI reaches that stage, society will have already experienced a series of disruptive waves of automation that displaced workers on a large scale. Consequently, we think it’s wrong to assume that public opinion on AI will remain roughly the same as it is right now until right before, or after, transformative AI.

Third, from a personal perspective, we think it’s worth planning for and investing in a future where AIs will take over jobs incrementally over several years or even decades—rather than anticipating a future where human labor becomes obsolete _all at once_ right after AI takes over the AI R&D process. We think that rather than imagining a relatively sudden event when AI explodes into superintelligence through recursive AI R&D, it’s more productive to anticipate a smoother transition to full automation of the economy.

In our view, there will likely be an extended period during which AIs surpass humans in some tasks but remain inferior to humans in other complementary tasks. To be clear, we agree that AIs will eventually outperform humans at nearly all economically valuable activities, and this will lead to a significant acceleration in economic growth. However, we believe this will likely only occur after several years or decades of increasingly widespread and disruptive automation—reaching far beyond just the R&D sector.

## About the authors

Ege Erdil

Ege Erdil is a former researcher at Epoch AI. He has interests in mathematics, statistics, economics and forecasting.

Matthew Barnett

Matthew Barnett received a degree in computer science from UC Berkeley. He’s currently interested in getting a clearer picture of how AI will impact the world in the next few decades.

## Related work

Paper

Mar. 21, 2025

[](/publications/announcing-gate)GATE: Modeling the trajectory of AI and automation

Paper

Sep. 23, 2023

[](/publications/explosive-growth-from-ai-a-review-of-the-arguments)Explosive growth from AI: A review of the arguments

Report

Aug. 27, 2024

[](/publications/interviewing-ai-researchers-on-automation-of-ai-rnd)Interviewing AI researchers on automation of AI R&D

Report

Nov. 24, 2023

[](/publications/challenges-in-predicting-ai-automation)Challenges in predicting AI automation

Newsletter

Jan. 24, 2025

[](/gradient-updates/agi-could-drive-wages-below-subsistence-level)AGI could drive wages below subsistence level

## Related topics

[Economic impact](/topics/economic-impact)

Cite

Epoch AI’s work is free to use, distribute, and reproduce provided the source and authors are credited under the [Creative Commons Attribution license](https://creativecommons.org/licenses/by/4.0/).

### Citation

Ege Erdil and Matthew Barnett (2025), "Most AI value will come from broad automation, not from R&D". Published online at epoch.ai. Retrieved from 'https://epoch.ai/gradient-updates/most-ai-value-will-come-from-broad-automation-not-from-r-d' [online resource]. Accessed 6 Jul 2026.

### BibTeX Citation

@misc{epoch2025mostaivaluewillcomefrombroadautomationnotfromrd, title={Most AI value will come from broad automation, not from R&D}, author={Ege Erdil and Matthew Barnett}, year={2025}, url={https://epoch.ai/gradient-updates/most-ai-value-will-come-from-broad-automation-not-from-r-d}, note={Accessed: 2026-07-06}}

Feedback

## Feedback

Have a question? Noticed something wrong? Let us know.

# Most AI value will come from broad automation, not from R&D

AI's biggest impact will come from broad labor automation—not R&D—driving economic growth through scale, not scientific breakthroughs.
