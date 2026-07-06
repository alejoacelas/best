---
title: "Solving alignment isn't enough for a flourishing future"
date: 2024-02-02
url: https://forum.effectivealtruism.org/posts/oEpGBqDCo2z5pbpvA/solving-alignment-isn-t-enough-for-a-flourishing-future
fetched: 2026-07-06
via: forum-graphql
topic: "s-risks"
note: "Argues alignment success doesn't guarantee a good future; frames s-risks/quality-of-future as distinct from extinction. Strong core-reading candidate."
---

*I'm sharing a paper I previously presented to the* [*Stanford Existential Risks Conference*](https://seri.stanford.edu/events/stanford-existential-risks-conference-april-20-22-2023) *in April 2023. In past years, much discussion of making the long-term future go well has focused on AI alignment and mitigating extinction risks. More recently, there has been more exploration of how this may fail to capture much of humanity's potential and other cause areas to investigate (e.g., post-AGI governance and digital minds). I hope this paper is a helpful contribution to this discussion. \[Note: This post is a lightly edited version of* [*this PDF*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4684068)*.\]*

Abstract
========

AI alignment is commonly explained as aligning advanced AI systems with human values. Especially when combined with the idea that AI systems aim to optimize their world based on their goals, this has led to the belief that solving the problem of AI alignment will pave the way for an excellent future. However, this common definition of AI alignment is somewhat idealistic and misleading, as the majority of alignment research for cutting-edge systems is focused on aligning AI with *task preferences *(training AIs to solve user-provided tasks in a helpful manner), as well as reducing the risk that the AI would have the goal of causing catastrophe. 

We can conceptualize three different targets of alignment: alignment to *task *preferences, *human *values, or *idealized *values. Extrapolating from the deployment of advanced systems such as GPT-4 and from studying economic incentives, we can expect AIs aligned with task preferences to be the dominant form of aligned AIs by default. 

Aligning AI with task preferences will not by itself solve major problems for the long-term future. Among other problems, these include moral progress, existential security, wild animal suffering, the well-being of digital minds, risks of catastrophic conflict, and optimizing for ideal values. Additional efforts are necessary to motivate society to have the capacity and will to solve these problems. 

Introduction
============

The future development of artificial general intelligence (AGI) is often presented as having two distinct possibilities: either it is misaligned with human values, resulting in an existential catastrophe, or it is aligned and optimizes for human values \[Sotala and Gloor 2017\]. One might assume that as long as we develop aligned AGI, the future will unfold positively by default. For example, Soares \[2022\] posits a 100% chance of utopia if humans succeed at directing artificial superintelligence towards our ideal objectives. This may be the case for very strong definitions of alignment, where we assume that an aligned AGI performs optimally according to an ideal version of human values. However, in reality, the field of AI alignment is more focused on mitigating existential risk from a single AI rather than promoting systemic safety, and aligning AI with task preferences rather than striving for alignment with ideal preferences \[Hendrycks and Mazeika 2022\]. 

This work explores the idea that, even if the course of the long-term future is shaped by aligned AGI, numerous trajectories of vastly different value could emerge. Aligned AGI may not necessarily optimize for positive value, but could simply be powerful and non-catastrophic. For example, current advanced AI systems are not designed to fulfill human values, and this trend might persist in the future. Optimistically, we could hope that, by default, aligned AI leads to profound moral reflection, empowers humanity to address global issues, and promotes the general well-being to the best extent possible. However, several obstacles challenge this assumption as the default outcome. Another possibility is that advanced AI systems are employed by corporations to maximize their own power and influence. Other unfavorable long-term outcomes with non-negligible likelihoods include succumbing to different existential risks, proliferating wild animal suffering throughout space, creating numerous digital minds that endure suffering, or conflict arising from opposing interests. Generally, by default, we might not optimize the world for positive value, thereby overlooking the vast potential of our future. Positive trajectory changes could be facilitated by strategies such as moral circle expansion and heightened concern for moral reflection and existential risk mitigation — especially among those likely to control AGI. Developing a strategy for positive trajectory change appears to be a neglected priority, and valuable work can be pursued in this space even now. 

Related Work
============

Cotra \[2023\] argues that in the context of AI research, the term “alignment” is most usefully defined as ensuring that AI systems always strive for the goals their designers intend, rather than guaranteeing positive outcomes for the world. Therefore, Cotra proposes that developing perfect alignment techniques alone is not enough to ensure that AI is beneficial for the world. For example, issues related to misuse, inequality, high-stakes errors, chain-of-command, security, global stability, preference aggregation, philosophy and meta-ethics are also important to consider. While alignment is an essential aspect of AI research, it should not be viewed as the sole solution to the many complex issues involved in building a flourishing future. 

Soares \[2022\] advances the view that if humans solve the problem of aligning superintelligent AI with ideal preferences or humanity’s coherent extrapolated volition \[Yudkowsky 2004\], then a “strong utopia” in which “at least 95% of the future’s potential value is realized” is guaranteed. However, if humans deploy a superintelligence that is not aligned with ideal preferences, Soares expects that humanity would likely be destroyed, with a 90% chance that the universe would largely lack conscious experience and a 10% chance that it would be net positive. Soares also examines the potential value of the future if humans never develop superintelligence, or if the future is optimized by aliens assisted by a superintelligence aligned with their values. 

Casper \[2022\] proposes that mitigating long-term risks associated with transformative artificial intelligence (TAI) requires AI governance solutions beyond technical alignment work. The author emphasizes that a TAI regime must be exclusive, benevolent, stable, and successful at alignment to effectively address the period of acute risk. The difficulty in meeting these requirements is framed as a significant AI governance problem. Casper categorizes AI safety strategies into three types, arguing that two strategies—making it more difficult to develop dangerous AI and responding to emerging issues—may be as crucial as making it easier to create safe AI. The article calls for further discussion and feedback on TAI governance-related challenges that have been relatively overlooked in the field. 

Defining AI Alignment
=====================

AI alignment has been defined in various ways: 

*   As defined by Wikipedia \[2023\]: “AI alignment research aims to steer AI systems towards their designers’ intended goals and interests. Some definitions of AI alignment require that the AI system advances more general goals such as human values, other ethical principles, or the intentions its designers would have if they were more informed and enlightened.”
*   “A solution to the agent alignment problem is a policy that behaves in accordance with the user’s intentions.” \[Leike et al. 2018\] 
*   “Our alignment research aims to make artificial general intelligence (AGI) aligned with human values and follow human intent.” \[Leike et al. 2022\] 

Organizations investing significantly in technical alignment research often express their mission statements with a focus on ensuring AGI serves to benefit humanity as a whole: 

*   “Our mission is to ensure that artificial general intelligence benefits all of humanity.” \[OpenAI nd\] • “Our mission: to ensure transformative AI helps people and society flourish.” \[Anthropic nd\] • “We’re \[. . . \] committed to solving intelligence, to advance science and benefit humanity.” \[DeepMind nd\] • “The Center for Human-Compatible AI’s goal is to develop the conceptual and technical wherewithal to reorient the general thrust of AI research towards provably beneficial systems.” \[Center for Human-Compatible AI nd\]

While the broader mission of these organizations may focus on human values, in practice, technical research on alignment typically concentrates on aligning AI systems with human intent and averting disastrous outcomes. For example, the InstructGPT is a project that aims to align AI systems with specific task preferences \[Ouyang et al. 2022\]. However, there are notable exceptions, such as the research on “Aligning AI with Shared Human Values,” which aims to imbue models with an understanding of normative ethics \[Hendrycks et al. 2021\]. 

Three alignment targets 
------------------------

A critical question in artificial intelligence is how to determine the goals of AI systems. This paper proposes three categories for AI alignment: alignment to *task preferences*, alignment to *human values*, and alignment to *ideal values*. Underlying each category is the challenge of ensuring that the AI system is not motivated to cause catastrophe. Each of these categories constitutes a form of “aligned AI,” although alignment to task preferences is expected to be the most prevalent form due to various factors discussed later. 

*3.1.1 Alignment to task preferences. *AI systems that are aligned with task preferences are trained to perform various tasks in a way that humans prefer – essentially, doing tasks capably. For example, GPT-4 is designed to perform specific tasks such as writing poems, answering factual questions, drafting emails, and debugging code \[OpenAI 2023c\]. In addition to general pretraining, ChatGPT has also received extensive task-specific training, leveraging the work of hundreds of contractors to automate basic programming \[Albergotti and Matsakis 2023\]. While ChatGPT and GPT-4 are trained to refuse harmful requests, they are not optimizing for the fulfillment of human values. In the context of papers such as InstructGPT and the GPT-4 Technical Report \[OpenAI 2023c; Ouyang et al. 2022\], the term “alignment” largely refers to alignment with task preferences. 

There are significant competitive benefits to developing AI systems aligned with task preferences, as opposed to human values. It is relatively easy to collect training and preference data for tasks such as “write a poem,” as humans can provide examples of how the task can be completed and evaluate what output from the model is ideal. This data can be used to train AI systems using techniques such as reinforcement learning from human feedback \[Christiano et al. 2017\]. In comparison, objective such as “create a just and equitable society” or “promote the flourishing of sentient beings” pose practical difficulties for training. 

As corporate adoption of AI continues to increase, companies will be incentivized to train and deploy them to assist with the goals of the company – in general, increasing profits and delivering shareholder value by automating tasks. Due to economic incentives and ease of training, AI systems are likely to be primarily aligned with task preferences. 

*3.1.2 Alignment to human values. *While practical AI systems are generally optimized for fulfilling task preferences rather than moral values, some efforts have been made to steer AI systems away from behavior deemed unethical according to normative ethics, as demonstrated by Hendrycks et al. \[2022\]. 

Aligning AI systems with human values faces several challenges. Critics often argue that it is incoherent, as different individuals and cultures hold varying values. This results in an underspecified definition of alignment to human values. Moreover, current human values may be flawed, as discussed by Williams \[2015\], who explores the possibility of ongoing moral catastrophe. 

Modern language models demonstrate promising performance on benchmarks measuring ethical understanding, such as the ETHICS benchmark by Hendrycks et al. \[2021\]. However, an AI prompted to act optimally according to human values will not automatically know how to do so. Training and investment are required, but the economic incentives for this type of alignment are not as strong as those for alignment to task preferences. Consequently, it remains unclear whether alignment to human values will receive enough investment to be competitive with models with profit-motivated goals. 

*3.1.3 Alignment to ideal human values. *Alignment to ideal human values involves designing AI systems that optimize for the coherent extrapolated volition of humanity, as introduced by \[Yudkowsky 2004\]. In theory, AI systems successfully aligned with ideal values could construct a morally optimal future. However, this outcome seems unlikely by default for various reasons. 

While there have been conceptual proposals in this space, no concrete developments have been made so far. Leike \[2023\] suggests employing simulated deliberative democracy, which combines imitation learning and large language models to align AI systems with collective preferences while keeping humans in the decision-making process. This approach involves gathering a dataset of value-based questions, documenting human deliberations, training a large language model based on these deliberations, simulating discussions on novel value questions, and compiling the outcomes to form a response. 

Hendrycks and Woodside \[2022a\] propose creating a model that simulates a moral parliament, as well as automating moral philosophy research for value clarification. The moral parliament involves AI systems considering multiple moral perspectives and evaluating them in a way that approximates human deliberation. 

One of the main challenges in aligning AI systems with ideal human values is convincing decision-makers that their ideal values are correct. For instance, consider the moral acceptability of homosexuality. While this may be an accepted value in modern society, someone living in medieval Europe would have found it difficult to accept, even if they would have embraced it after reflecting on their ideal values. An AI capable of persuading individuals to adopt their ideal moral values is possible, but it would require society to prioritize moral reflection enough to want to design such an AI. There is also the potential risk that an AI capable of persuading humans may also be capable of deception, making it challenging to distinguish whether the AI is deceptive. 

In summary, alignment to task preferences, human values, and ideal human values represent three possible goals for AI systems. While alignment to task preferences is likely to remain the dominant form of alignment, exploring alignment to human values and ideal human values remains an important and neglected area of research. As AI systems continue to evolve, understanding and refining these alignment targets will be crucial in ensuring that AI systems contribute positively to society. 

Aligned AI would not automatically optimize for a good future
=============================================================

There is a common argument regarding AI alignment that can be summarized as follows: (1) AGI might be developed within the coming decades. 

(2) The consequences of AGI essentially determine the course of the long-term future. 

(3) AGI will either be aligned or misaligned. Misaligned AGI could lead to existential catastrophe, while aligned AGI would optimize for human values. 

Some envision AGI as an agent that autonomously takes actions to maximize its utility function. Under this view, the problem of alignment is about ensuring that the utility function aligns with the values of humanity. Otherwise, a powerful agent optimizing the world for a slightly misspecified utility function would cause catastrophe, \[Russell 2014, 2019\] potentially incompatible with the existence of humanity. 

However, the idea that AGIs are essentially utility maximizers has come under scrutiny in recent years. Janus \[2022\] argues that generative models such as GPT are not best described as utility maximizers but rather simulators

AI Alignment Is Not Enough to Make the Future Go Well 5 

of content-generating processes, which can either be goal-directed or not. Nevertheless, these systems may be the foundation of AGI-like systems. Turner \[2022\] notes that deep reinforcement learning does not in general lead to reward maximizers. 

Moreover, an AGI can be aligned but not directly optimize for human values. \[Christiano 2015\] distinguishes between ambitious and narrow value learning, highlighting that practical research tends to focus on narrow value learning. Christiano explains that AI safety can be divided into two approaches: the maximally ambitious approach, which aims to create AI systems capable of learning human preferences over long-term outcomes, even in unfamiliar domains; and the narrow approach, which focuses on teaching AI systems to understand short-term human goals and instrumental values. While ambitious value learning is theoretically appealing, it is challenging to achieve and may not be relevant to practical AI applications. The narrow approach, on the other hand, is more tractable and can help humans achieve their short-term goals, but may not address the long-term control problem posed by superintelligent AI. Aligned AGI may resemble a system that generates reasonable action sequences in response to prompts, without making deceptive plans or contributing to an AI takeover. Alignment in this fashion is plausible – though not guaranteed – if scalable oversight and process-oriented learning are used to train AI systems so that plans are interpretable and supervised in a high-quality manner \[team 2023\]. Optimistic scenarios of aligned AI involve using such an AI to solve humanity’s problems, such as reducing existential risk and maximizing positive value in the future. When considering the potential impact of AI, we can examine concrete examples like GPT-4, which has been called an early but incomplete form of AGI \[Bubeck et al. 2023\]. GPT-4 sparked concerns about unemployment, existential risk, and transformative implications. Though trained to be a generative model, it can be augmented with tools to autonomously complete tasks like web browsing and code execution, and ongoing research aims to further enhance its capabilities by connecting it to millions of APIs \[Liang et al. 2023; OpenAI 2023a\]. 

GPT-4 has several notable features, listed below. These may also be shared by transformative or general AI systems. 

*   Alignment to task preferences: Alignment involves ensuring that the model is trained to avoid harmful or offensive content, provides helpful and honest responses, and generally achieves intended outcomes in a safe and reasonable manner. 
*   Broad deployment: At launch, GPT-4 became available to all ChatGPT Plus subscribers. The GPT-4 API allows it to become an agent connected with a variety of APIs, acting with minimal supervision \[Chase 2023; Richards 2023\]. 
*   Dual use: Early versions of GPT-4 could easily be prompted to produce harmful output, such as advice on how to kill as many people as possible \[OpenAI 2023b\]. ChatGPT has been used to create polymorphic malware and create a spear-phishing attack \[Plumb 2023\]. While its fine-tuning training attempts to have it decline requests considered harmful, it is not trained to consider the indirect effects of its output. 
*   Lack of adversarial robustness: GPT-4-based systems like Bing and ChatGPT can be “jailbroken” to bypass safety measures and produce harmful content. 
*   Diffusion of capabilities: Other models have been trained on responses from GPT-3.5 to replicate its capabilities \[Taori et al. 2023\]. Additionally, GPT-4 can help with machine learning research and the design of new models. These successor AI systems may or may not be safe. 
*   Differential capabilities: GPT-4 excels at some tasks more than others. As an example, GPT-4 has been specifically trained to write and explain code. In contrast, it has not been specially trained to be useful for conceptual alignment research, even despite OpenAI’s goal of automating alignment research \[Leike et al. 2022\]

Assuming that a given AGI is aligned, we can expect it to be honest and helpful, without hidden goals of overthrowing humanity. However, future tool-augmented language models, even if aligned, will likely not optimize for human values, but rather automate a wide variety of tasks, which is a poor proxy for human values. 

For example, automated corporations are misaligned with human values; for example, by contributing to environmental degradation or exerting undue political influence. Hendrycks \[2023\] argues that natural selection acts on AI systems and promotes selfish, influence-seeking systems. Naturally, power-seeking systems are able to accumulate more power over time to achieve their objectives. We can extend this to systems in general, whether they are run by AIs or humans directing AIs. Absent reasons to think that human values would predominate, systems motivated to seek power may direct the course of the future (see also, Critch \[2021\]). Although one could prompt a future model to optimize for human values, it remains an underspecified task and may not be particularly influential. 

Problems for the long-term future
=================================

In this section, we explore several problems that are crucial for ensuring a positive long-term future for humanity. Although this is not an exhaustive list, these case studies exemplify the importance of developing a plan for building a flourishing future. We also evaluate the extent to which an aligned AGI might contribute to solving these problems, considering questions such as the following: 

*   Do capabilities for solving a problem increase faster than capabilities to exacerbate it? (Example: As AGI becomes easier to build, does existential risk from AGI increase or decrease?) 
*   Is offense or defense easier? (Example: Is it easier to deploy a deadly pandemic or to safeguard society against pandemics?) 
*   Are designers and users of AGI motivated to address the problem? 
*   How well would we train AI systems to have the capacity to address the problem? 
*   How much investment is there in different possible uses of AGI? 

Existential risk from AI 
-------------------------

Even if we learn how to deploy an AGI system that is aligned with task preferences, this does not mean that existential risk from AI is eliminated. One scenario is that the deployment of unsafe AI systems may still be possible. Additionally, transformative AI systems may not be adversarially robust to catastrophic failure \[Gleave and McLean 2023\]. 

*5.1.1 Deployment of unsafe AI. *There is considerable investment in developing open-source models to allow for greater research freedom and democratized access \[LAION.ai 2023; Touvron et al. 2023\]. If this trend continues, an AGI could be developed as an open-source model with publicly available weights. Even if trained to avoid harm, open-source models can be further fine-tuned to remove these safety precautions.^1^ 

In the pursuit of research advancements, developers might experiment with novel mechanisms for developing AI systems that may turn out to be unsafe. Additionally, it may be difficult to predict in advance whether a new training method may be dangerous. Furthermore, malicious actors could create their own models, intentionally designed to be hazardous. 

^1^As a somewhat analogous example, the open-source model GPT-J was fine-tuned on text from 4chan, producing GPT-4chan, which had a tendency to write hate speech \[Kurenkov 2022\]. If a model capable of agentic planning were safe because it refused to pursue harmful goals, but still had the latent knowledge of how to do so, it could likely be fine-tuned to be unsafe.

Currently, there are no governance mechanisms in place to prevent the deployment of unsafe AI systems. In the future, effective regulation might require safety evaluations and regulatory approval before models are released. Additionally, compute governance could be employed to ensure that large training runs comply with established safety guidelines. 

To be effective, these governance mechanisms may need to be implemented on a global scale. While it is conceivable that AI could be used to promote governance measures, it remains unclear whether such measures would be differentially helpful. For example, AI could be employed to draft policy papers advocating for both safer approaches and more libertarian stances, or to engage in publicity campaigns for and against particular regulations. 

*5.1.2 Adversarial attacks. *Advanced machine learning systems can still be attacked by adversaries, despite the assump tion that the problem will naturally disappear as systems improve. Recent research has shown that even superhuman systems like AlphaZero and general models such as large language models are vulnerable. Even transformative AI systems may be susceptible to unacceptable adversarial attacks \[Gleave and McLean 2023\]. 

Language models, for example, are susceptible to prompt attacks or jailbreaking, which can bypass safety measures, such as their typical refusal to engage in harmful actions \[Greshake et al. 2023\]. As aligned AIs may not be adversarially robust, they could potentially be exploited to pursue harmful goals. 

Wild animal welfare 
--------------------

Wild animal suffering is a significant, yet often overlooked problem that affects countless creatures living in their natural habitats. The challenges they face, including starvation, predation, diseases, and harsh weather conditions, result in a life that is far from harmonious and free. With the possibility of space colonization and terraforming, there is a potential to unintentionally cause wild animal suffering in previously uninhabited areas. Tomasik \[2015\] 

Wild animal suffering is of an enormous scale on Earth but is not a problem that is commonly recognized as important. Concern for wild animal suffering could be an example of an ideal value, even if not held by contemporary moral values. In theory, highly advanced AI could determine ways to design ecosystems that promote wild animal welfare. However, this conflicts with the commonly held value that nature should be preserved. Addressing this issue may also require significant altruistic resources and investment. 

Digital minds 
--------------

The possibility of digital minds that are sentient (i.e., “having the capacity for positive or negative experiences”) raises new concerns about their well-being.^2 ^Digital minds, such as those created through whole brain emulation, could be created at a vast scale and have intensely positive or negative experiences \[Shulman and Bostrom 2021\]. Some challenges related to digital minds include determining whether they are experiencing positive or negative emotions. Unlike when assessing sentience in animals, we cannot rely on shared evolutionary history or pain indicators to make such determinations for digital minds \[Saad and Bradley 2022\]. 

Language models can express human emotions but may not have cognition that leads to positive or negative experiences. Their expressed emotions may not accurately indicate their well-being. Furthermore, it is possible to take a non-realist view of consciousness and moral valence, suggesting that there are no objective criteria for positive or negative experiences but rather a statement of value \[Anthis 2022\]. 

Risks of astronomical suffering (s-risks) refer to the possibility of cosmically immense suffering in the future. One possibility is that an AI might use simulations to improve its decision-making capacity. If these simulations contain conscious beings that can suffer, then this could lead to vast amounts of suffering. Another possibility is of agential, deliberately induced suffering. In this scenario, conflict between agents with differing goals may lead one agent to threaten to simulate suffering digital minds if demands are not met. As digital minds may require relatively few computational resources to simulate at a vast scale, the potential for aggregate positive or negative experiences might be quite great. The risks of astronomical suffering highlight the need for further research in cooperative AI and ethical concern for potential digital minds in the development of advanced AI systems \[Althaus and Gloor 2016\]. 

At present, there is minimal concern for the prospect of digital minds and no plan for ensuring their well-being. It is unclear whether we will solve consciousness adequately, even if assisted by AI, to determine proper protections for digital minds before it is too late. 

5.4 Ideal values 

Ord \[2020\] proposes that to achieve an optimal, flourishing future and fulfill humanity’s potential, we could adopt a three-part strategy. The first step is to reach *existential security *– a state of the world with minimal existential risk. The next step, the *long reflection*, is to reflect on how best to achieve our potential, before engaging in irreversible actions such as wide-scale space settlement. This may require considerable moral reflection, rather than locking in current moral values; after all, we probably would not be happy with medieval values. The last step is to execute the strategy and actually fulfill humanity’s potential. 

In theory, this may seem like a reasonable strategy for achieving the future, but it does not seem likely to be executed. Even if existential security is achieved, the long reflection is not even discussed as a strategic possibility among influential companies or governments. 

Under the framework of alignment with task preferences, there are limited factors that contribute to satisfying our ideal values, even if we have solved the issue of alignment. Currently, there is not much emphasis placed on moral reflection and optimization for ideal values. Instead, there is a strong evolutionary pressure towards influence-seeking systems that seek to increase their power and influence \[Hendrycks 2023\]. 

Potential solutions
===================

Existential security
--------------------

Mitigating existential risk is a paramount concern and will not inherently be solved by AIs aligned with task preferences.

*6.1.1 AI governance. *To address the threat of the potential deployment of unsafe AI systems, a reasonable measure would be to establish a regulatory board responsible for overseeing the deployment of AI systems. This could help ensure that models approaching or exceeding human-level capabilities meet reasonable safety standards. For example, requirements may evaluate whether an AI: 

*   lacks dangerous power-seeking capabilities 
*   passes tests for alignment and lack of deceptive alignment (even if such evaluations are imperfect) • is trained with process-based rather than outcome-based methods \[Ought 2022\] 
*   is adversarially robust, especially to attempts to have it pursue a harmful goal 
*   is appropriately sandboxed throughout training 
*   is granted only a restricted ability to execute actions autonomously

In addition to adopting risk management frameworks (such as \[Schuett 2022\]), labs should maintain good information security practices to prevent unsafe derivatives of the model. While one commonly discussed risk is that model weights may be stolen (or freely distributed as open-source) and then misused \[Ladish and Heim 2022\], another possibility is that output from the model could be collected to train another model \[Taori et al. 2023\]. 

*6.1.2 Safety culture in AI development. *As numerous AI developers are advancing capabilities with minimal regard for safety measures, it is imperative to promote a development culture with greater emphasis on safety and caution. Developers should prioritize existential safety over advancing AI capabilities and avoid rushing into uncharted territory without appropriate safeguards. 

*6.1.3 Automated existential security. *Aligned AI systems can help contribute to existential security, with a few caveats in mind. While one method of improving alignment with task preferences is to increase general capabilities, capabilities externalities can be harmful to safety \[Hendrycks and Woodside 2022b\]. Additionally, the offense–defense balance may be such that safeguarding important systems may be more difficult than attacking them, and transformative AI systems may not have the relevant domain expertise to promote safety if not specifically trained to do so. Redirecting resources from general AI capabilities towards training AI systems for socially beneficial goals can contribute to a safer and more secure future. 

While AI has the potential to automate research in areas such as biosecurity and cyberdefense, high-quality work may not occur by default. AI systems benefit from training based on high-quality examples and evaluations provided by humans. Research labs can offer structured access for fine-tuning \[Shevlane 2022\], fostering an environment that encourages research in this vital direction. 

Moral reflection 
-----------------

While there has been a recent surge in investment to align AI with human intent and task preferences, it is crucial to remember the original goal of aligning AI with shared human values toward beneficial outcomes. Moral reflection plays a crucial role in shaping the future of AI. AI corporations should be held accountable to promote socially beneficial outcomes, and efforts should be made to promote careful consideration of how to build a flourishing future for all sentient beings. 

*6.2.1 Digital minds. *The creation of digital minds could involve large amounts of positive or negative experiences, making their well-being a priority. Expanding our moral circles to include all sentient beings can be a beneficial starting point. However, misplaced concern for non-sentient digital minds poses a risk. If a movement were to arise for AI rights, this could pose challenges to efforts to ensure that their goals are aligned and non-catastrophic, and may make it difficult to shut down systems that appear unsafe (even if they are non-sentient). Criteria for determining whether a digital mind is sentient remain controversial. Strategic work is necessary in order to handle these difficulties. 

*6.2.2 Automated moral reflection. *According to the concept of moral progress, human ethics have made significant strides over the past few centuries; values such as human rights and gender equality were previously less predominant. Williams \[2015\] finds it unlikely that we have already arrived at the ideal values; indeed, we may be complicit in an ongoing moral catastrophe and unaware of it. Moral reflection can help to achieve humanity’s potential, especially as contemporary ethics has not seriously contemplated transformative societal change from AI. 

A moral parliament has been proposed as one approach to resolving moral uncertainty. An automated simulation of this could help apply a balanced version of normative ethics to guide the actions of transformative AI systems \[Hendrycks and Woodside 2022a\]. Automated moral philosophy research can further help to positively shape the values of society and AI systems. 

By addressing these concerns and maintaining a focus on existential security, safety culture, digital minds, and moral reflection, we can work together to ensure that AI contributes to a brighter and more secure future for all. 

Conclusion
==========

Although solving the problem of aligning AI with task preferences is a crucial first step, it is not sufficient to ensure a positive future for humanity. AI alignment must also consider broader ethical and philosophical issues to address critical long-term problems such as existential risks, digital well-being, and the prevention of catastrophic conflict. These issues require a concerted effort from society as a whole, not just AI researchers and developers. While technical solutions to AI alignment are important, they must be accompanied by a holistic approach that takes into account the broader social and ethical implications of AI. Only then can we create a world where AI systems align with ideal values and build a flourishing future. 

Acknowledgments
===============

I would like to thank André Ferretti and Mitchell Reynolds for providing detailed comments and suggestions for this paper. All mistakes are my own. 

References
==========

Reed Albergotti and Louise Matsakis. 2023. OpenAI has hired an army of contractors to make basic coding obsolete. https://www.theverge.com/2023/1/ 27/22298329/openai-ai-artificial-intelligence-contractors-basic-coding 

David Althaus and Lukas Gloor. 2016. Reducing Risks of Astronomical Suffering: A Neglected Priority. https://longtermrisk.org/reducing-risks-of astronomical-suffering-a-neglected-priority/. 

Jacy Reese Anthis. 2022. Consciousness Semanticism: A Precise Eliminativist Theory of Consciousness. In *Biologically Inspired Cognitive Architectures 2021*, Valentin Klimov and David Kelley (Eds.). Studies in Computational Intelligence, Vol. 1032. Springer International Publishing, Cham, 20–41. https://doi.org/10.1007/978-3-030-96993-6_3 

Anthropic. n.d.. About Anthropic. https://www.anthropic.com/company 

Sébastien Bubeck, Varun Chandrasekaran, Ronen Eldan, Johannes Gehrke, Eric Horvitz, Ece Kamar, Peter Lee, Yin Tat Lee, Yuanzhi Li, Scott Lundberg, Harsha Nori, Hamid Palangi, Marco Tulio Ribeiro, and Yi Zhang. 2023. Sparks of Artificial General Intelligence: Early experiments with GPT-4. arXiv:2303.12712 \[cs.CL\] 

Stephen Casper. 2022. *Avoiding Perpetual Risk from TAI*. https://www.alignmentforum.org/posts/FfTxEf3uFPsZf9EMP/avoiding-perpetual-risk-from-tai Center for Human-Compatible AI. n.d.. About the Center for Human-Compatible AI. [https://humancompatible.ai/about/](https://humancompatible.ai/about/)

Harrison Chase. 2023. LangChain Agents. [https://python.langchain.com/en/latest/modules/agents/getting_started.html.](https://python.langchain.com/en/latest/modules/agents/getting_started.html.)

Paul Christiano. 2015. Ambitious vs. narrow value learning. [https://ai-alignment.com/ambitious-vs-narrow-value-learning-99bd0c59847e.](https://ai-alignment.com/ambitious-vs-narrow-value-learning-99bd0c59847e.)

Paul Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, and Dario Amodei. 2017. Deep reinforcement learning from human preferences. arXiv:1706.03741 \[stat.ML\] 

Ajeya Cotra. 2023. *“Aligned” shouldn’t be a synonym for “good”*. Open Philanthropy. [https://www.planned-obsolescence.org/aligned-vs-good/](https://www.planned-obsolescence.org/aligned-vs-good/)

Andrew Critch. 2021. What Multipolar Failure Looks Like, and Robust Agent-Agnostic Processes (RAAPs). https://www.alignmentforum.org/posts/ LpM3EAakwYdS6aRKf/what-multipolar-failure-looks-like-and-robust-agent-agnostic. 

DeepMind. n.d.. About DeepMind. https://www.deepmind.com/about 

Adam Gleave and Euan McLean. 2023. AI Safety in a World of Vulnerable Machine Learning Systems. (2023). https://www.alignmentforum.org/posts/ ncsxcf8CkDveXBCrA/ai-safety-in-a-world-of-vulnerable-machine-learning-systems-1 

Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres, Thorsten Holz, and Mario Fritz. 2023. More than you’ve asked for: A Comprehensive Analysis of Novel Prompt Injection Threats to Application-Integrated Large Language Models. arXiv:2302.12173 \[cs.CR\] Dan Hendrycks. 2023. Natural Selection Favors AIs over Humans. arXiv:2303.16200 \[cs.CY\] 

Dan Hendrycks, Collin Burns, Steven Basart, Andrew Critch, Jerry Li, Dawn Song, and Jacob Steinhardt. 2021. Aligning AI With Shared Human Values. arXiv:2008.02275 \[cs.CY\] 

Dan Hendrycks and Mantas Mazeika. 2022. X-Risk Analysis for AI Research. arXiv:2206.05862 \[cs.CY\]

Dan Hendrycks, Mantas Mazeika, Andy Zou, Sahil Patel, Christine Zhu, Jesus Navarro, Dawn Song, Bo Li, and Jacob Steinhardt. 2022. What Would Jiminy Cricket Do? Towards Agents That Behave Morally. arXiv:2110.13136 \[cs.LG\] 

Dan Hendrycks and Thomas Woodside. 2022a. Open Problems in AI X-Risk. https://www.alignmentforum.org/posts/5HtDzRAk7ePWsiL2L/open problems-in-ai-x-risk-pais-5 

Dan Hendrycks and Thomas Woodside. 2022b. Perform Tractable Research While Avoiding Capabilities Externalities \[Pragmatic AI Safety #4\]. https://www.alignmentforum.org/posts/dfRtxWcFDupfWpLQo/perform-tractable-research-while-avoiding-capabilities. Janus. 2022. Simulators. *Alignment Forum *(2 September 2022). https://www.alignmentforum.org/posts/vJFdjigzmcXMhNTsx/simulators Andrey Kurenkov. 2022. *Lessons from the GPT-4Chan Controversy*. https://thegradient.pub/gpt-4chan-lessons/ 

Jeffrey Ladish and Lennart Heim. 2022. Information security considerations for AI and the long term future. https://www.lesswrong.com/posts/ 2oAxpRuadyjN2ERhe/information-security-considerations-for-ai-and-the-long-term. 

LAION.ai. 2023. *Petition for keeping up the progress tempo on AI research while securing its transparency and safety*. https://laion.ai/blog/petition/ Jan Leike. 2023. A proposal for importing society’s values: Building towards Coherent Extrapolated Volition with language models. Aligned. https: //aligned.substack.com/p/a-proposal-for-importing-societys-values 

Jan Leike, David Krueger, Tom Everitt, Miljan Martic, Vishal Maini, and Shane Legg. 2018. Scalable agent alignment via reward modeling. (nov 2018). arXiv:1811.07871 https://arxiv.org/pdf/1811.07871.pdf 

Jan Leike, John Schulman, and Jeffrey Wu. 2022. Our Approach to Alignment Research. https://openai.com/blog/our-approach-to-alignment-research/ \[Online; accessed 2-April-2023\]. 

Yaobo Liang, Chenfei Wu, Ting Song, Wenshan Wu, Yan Xia, Yu Liu, Yang Ou, Shuai Lu, Lei Ji, Shaoguang Mao, Yun Wang, Linjun Shou, Ming Gong, and Nan Duan. 2023. TaskMatrix.AI: Completing Tasks by Connecting Foundation Models with Millions of APIs. arXiv:2303.16434 \[cs.AI\] OpenAI. 2023a. ChatGPT plugins. https://openai.com/blog/chatgpt-plugins 

OpenAI. 2023b. *GPT-4 System Card*. Technical Report. OpenAI. https://cdn.openai.com/papers/gpt-4-system-card.pdf OpenAI. 2023c. GPT-4 Technical Report. arXiv:2303.08774 \[cs.CL\] 

OpenAI. n.d.. About OpenAI. https://openai.com/about 

Toby Ord. 2020. *The Precipice: Existential Risk and the Future of Humanity*. Hachette UK, London. 

Ought. 2022. Supervise Process, not Outcomes. https://ought.org/updates/2022-04-06-process. 

Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, and Ryan Lowe. 2022. Training language models to follow instructions with human feedback. arXiv:2203.02155 \[cs.CL\] 

Taryn Plumb. 2023. GPT-4 kicks AI security risks into higher gear. https://venturebeat.com/security/security-risks-evolve-with-release-of-gpt-4/ Toran Bruce Richards. 2023. Auto-GPT: An Autonomous GPT-4 Experiment. https://github.com/Torantulino/Auto-GPT. Stuart Russell. 2014. The Myth Of AI. *Edge.org *(2014). https://www.edge.org/conversation/the-myth-of-ai#26015 Stuart Russell. 2019. *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking, New York, NY. 

Bradford Saad and Adam Bradley. 2022. Digital suffering: why it’s a problem and how to prevent it. *International Journal of Psychology *(2022). https://doi.org/10.1080/0020174X.2022.2144442 

Jonas Schuett. 2022. Three lines of defense against risks from AI. arXiv:2212.08364 \[cs.CY\] 

Toby Shevlane. 2022. Structured access: an emerging paradigm for safe AI deployment. arXiv:2201.05159 \[cs.AI\] 

Carl Shulman and Nick Bostrom. 2021. Sharing the World with Digital Minds. In *Rethinking Moral Status *(online edition ed.), Steve Clarke, Hazem Zohny, and Julian Savulescu (Eds.). Oxford Academic, Oxford. https://doi.org/10.1093/oso/9780192894076.003.0018 

Nate Soares. 2022. *Superintelligent AI is necessary for an amazing future, but far from sufficient*. Machine Intelligence Research Institute. https: [//www.alignmentforum.org/posts/HoQ5Rp7Gs6rebusNP/superintelligent-ai-is-necessary-for-an-amazing-future-but-1](//www.alignmentforum.org/posts/HoQ5Rp7Gs6rebusNP/superintelligent-ai-is-necessary-for-an-amazing-future-but-1)

Kaj Sotala and Lukas Gloor. 2017. Superintelligence as a cause or cure for risks of astronomical suffering. *Informatica (Slovenia) *41 (12 2017), 389–400.

Rohan Taori, Ishaan Gulrajani, Tianyi Zhang, Yann Dubois, Xuechen Li, Carlos Guestrin, Percy Liang, and Tatsunori B. Hashimoto. 2023.

Alpaca: A Strong, Replicable Instruction-Following Model. https://crfm.stanford.edu/2023/03/13/alpaca.html. 

Anthropic team. 2023. Core Views on AI Safety: When, Why, What, and How. https://www.anthropic.com/index/core-views-on-ai-safety Brian Tomasik. 2015.

The Importance of Wild-Animal Suffering. *Relations. Beyond Anthropocentrism *3, 2 (2015), 133–152. https://doi.org/10.7358/rela 2015-002-toma 

Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, Aurelien Rodriguez, Armand Joulin, Edouard Grave, and Guillaume Lample. 2023. LLaMA: Open and Efficient Foundation Language Models. arXiv:2302.13971 \[cs.CL\] 

Alex Turner. 2022. Reward is not the optimization target. *Alignment Forum *(24 July 2022). https://www.alignmentforum.org/posts/pdaGN6pQyQarFHXF4/ reward-is-not-the-optimization-target 

Wikipedia. 2023. AI alignment. https://en.wikipedia.org/wiki/AI_alignment \[Online; accessed 2-April-2023\]. 

Evan G. Williams. 2015. The Possibility of an Ongoing Moral Catastrophe. *Ethical Theory and Moral Practice *18, 5 (Feb 2015), 971–982.

Eliezer Yudkowsky. 2004. *Coherent Extrapolated Volition*. Technical Report. Machine Intelligence Research Institute. https://intelligence.org/files/CEV.pdf