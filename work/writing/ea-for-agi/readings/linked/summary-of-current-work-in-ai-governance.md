---
title: "A summary of current work in AI governance"
date: 2023-06-17
url: https://forum.effectivealtruism.org/posts/8KhGio2rhgHgsBoZ6/a-summary-of-current-work-in-ai-governance
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 1 stage-1 reading; survey of AI governance landscape — macrostrategy/governance"
---

A summary of current work in AI governance
==========================================

### Context

For the past nine months, I spent ~50% of my time upskilling in AI alignment and governance alongside my role as a research assistant in compute governance. 

While I discovered great writing characterizing AI governance on a high level, few texts covered which work is currently ongoing. To improve my understanding of the current landscape, I began compiling different lines of work and made a presentation. People liked my presentation and suggested I could publish this as a blog post.

### Disclaimers:

*   I’ve only started working in the field ~9 months ago
*   I haven’t run this by any of the organizations I am mentioning. My impression of their work is likely different from their intent behind it.
*   I’m biased toward the work by GovAI as I engage with that most.
*   My list is far from comprehensive.

What is AI governance?
----------------------

*Note that I am primarily discussing AI governance in the context of preventing existential risks.*

[Matthijs Maas defines](https://forum.effectivealtruism.org/posts/Bzezf2zmgBhtCD3Pb/components-of-strategic-clarity-strategic-perspectives-on) AI long-term governance as

*“The study and shaping of local and global governance systems—including norms, policies, laws, processes, politics, and institutions—that affect the research, development, deployment, and use of existing and future AI systems in ways that positively shape societal outcomes into the long-term future.”*

Considering this, I want to point out:

1.  **AI governance is not just government policy**, but involves a large range of actors. (In fact, the most important decisions in AI governance are currently being made at major AI labs rather than at governments.)
2.  **The field is broad**. Rather than only preventing misalignment, AI governance is concerned with a variety of ways in which future AI systems could impact the long-term prospects of humanity.

Since "long-term" somewhat implies that those decisions are far away, another term used to describe the field is “governance of advanced AI systems.”

Threat Models
-------------

Researchers and policymakers in AI governance are concerned with a range of threat models from the development of advanced AI systems. For an overview, I highly recommend [**Allan Dafoe’s research agenda**](https://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf) and [Sam Clarke’s "Classifying sources of AI x-risk"](https://forum.effectivealtruism.org/posts/e55QpEExmtkRjw9CD/classifying-sources-of-ai-x-risk).

To illustrate this point, I will briefly describe some of the main threat models discussed in AI governance. 

*Feel free to skip right to the main part.*

### Takeover by an uncontrollable, agentic AI system

This is the most prominent threat model and the focus of most AI safety research. It focuses on the possibility that future AI systems may exceed humans in critical capabilities such as deception and strategic planning. If such models develop adversarial goals, they could attempt and succeed at permanently disempowering humanity.

Prominent examples of where this threat model has been articulated:

*   [Is power-seeking AI an existential risk?](https://arxiv.org/abs/2206.13353), Joe Carlsmith, 2022
*   [AGI Ruin: A list of lethalities](https://www.alignmentforum.org/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities), Eliezer Yudkowsky, 2022 (In a very strong form, see also this in-depth response from [Paul Christiano](https://www.alignmentforum.org/posts/CoZhXrhpQxpy9xw9y/where-i-agree-and-disagree-with-eliezer))
*   [The alignment problem from a deep learning perspective](https://arxiv.org/abs/2209.00626), Ngo et al., 2022

### Loss of control through automation

Even if AI systems remain predominantly non-agentic, the increasing automation of societal and economic decision-making, driven by market incentives and corporate control, could pose the risk of humanity gradually losing control - e.g., if the optimized measures are only coarse proxies of what humans value and the complexity of emerging systems is incomprehensible to human decision-makers.  
 

This threat model is somewhat harder to convey but has been articulated well in the following texts:

*   [Will Humanity Choose Its Future?](https://philpapers.org/rec/ASSWHC), Guive Assadi 2023
*   [What failure looks like part I](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like), Paul Christiano, 2019
*   [Clarifying “What failure looks like”](https://www.alignmentforum.org/posts/v6Q7T335KCMxujhZu/clarifying-what-failure-looks-like), Sam Clarke, 2020

It is also related to the idea of [Moloch](https://www.alignmentforum.org/tag/moloch), the problem of preserving value in an environment of continuous selection pressure toward resource acquisition and reproduction, e.g., as articulated [here](https://3rd-space.org/misalignment-ai-moloch/) in the context of AI.

### AI-enabled totalitarian lock-in

Large-scale targeted misinformation and social unrest due to sector-wide job losses could put democracies at risk and give rise to increasingly autocratic governments. Advanced AI systems, in the hands of totalitarian leaders, pose the risk of establishing a perpetual, self-reinforcing regime characterized by mass surveillance, suppression of opposition, and manipulation of truth. 

Prominent examples of where this threat model has been articulated:

*   Chapter 4 in [What We Owe the Future](https://whatweowethefuture.com/uk/), William MacAskill, 2022
*   [The totalitarian threat](https://academic.oup.com/book/40615/chapter-abstract/348242235?redirectedFrom=fulltext&login=false), Bryan Caplan, 2008 on stable totalitarianism more broadly
*   4.1 in [AI Governance: A Research Agenda](http://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf), Allan Dafoe, 2018

### Great power conflict exacerbated by AI

AI technology could increase the severity of conflict by providing new, powerful weapons (e.g., advanced pathogens). Furthermore, it could also increase the likelihood of great power conflict if it fuels a race to advanced military technology or if a great power feels threatened by the prospect of an adversary developing AGI.[^p4mjcqhemnd]

Some resources on the interaction between AI and different weapons of mass destruction include:

*   [How might AI affect the risk of nuclear war?](https://www.rand.org/pubs/perspectives/PE296.html) Geist & Lohn (RAND), 2018
*   [Assessing the Risks Posed by the Convergence of Artificial Intelligence and Biotechnology](https://pubmed.ncbi.nlm.nih.gov/32559154/), O'Brien & Nelson, 2020
*   [AI, Foresight and the Offense-Defense Balance](https://www.cnas.org/publications/commentary/artificial-intelligence-foresight-and-the-offense-defense-balance), Garfinkel & Dafoe, 2019
*   [Great Power Conflict | Founders Pledge](https://founderspledge.com/stories/great-power-conflict), Stephen Clare, 2021

### Conflicts between AI systems

Different AI systems could have differing goals, even if they partly share human values. This could lead to conflict on unprecedented scales, potentially including the intentional creation of vast amounts of suffering.

There exists little public writing on this threat model, though these pieces may serve as an introduction:

*   [Cooperation, Conflict, and Transformative Artificial Intelligence: A Research Agenda](https://longtermrisk.org/research-agenda), Jesse Clifton (Center on Long-Term Risk), 2020
*   [S-risks: An introduction](https://centerforreducingsuffering.org/research/intro/), Tobias Baumann (Center for Reducing Suffering), 2017

A spectrum of problems
----------------------

It is difficult to clearly distinguish which parts of AI governance address current vs future problems, as many issues exist on a continuous spectrum. E.g., within the threat model of AI leading to authoritarian lock-in, there have been [accusations of AI misuse](https://www.nytimes.com/2016/11/18/technology/automated-pro-trump-bots-overwhelmed-pro-clinton-messages-researchers-say.html) surrounding the 2016 presidential debate in the US, and deepfakes [have targeted](https://www.counterextremism.com/press/deep-fakes-used-manipulate-real-time-video-conference-berlin-mayor) politicians for years. Further, regulation such as the EU AI Act has both near-term and long-term consequences, and proposals such as implementing evaluations and auditing mitigate risks of both current and future AI systems.

My impression of different parts of AI governance
=================================================

Having established this as context, I will now sketch what I see as the most notable lines of work in AI governance. I try to give examples of some work I see as significant in each area. These are incomplete.

I think it's useful to roughly divide the work happening into:

*   **Strategy research**, investigating likely AI developments, and setting high-level goals for AI governance work.
*   **Industry-focused approaches**, improving the decisions made at AI labs.
*   **Government-focused approaches**, improving executive and legislative action, including international relations.
*   **Field-building.**

1\. Strategy
------------

This part of AI governance focuses on improving our understanding of the future impacts of AI and what they imply for what work to prioritize.

Note that much work on AI governance strategy remains unpublished, so it is difficult to see the extent of this work.

### Strategy research![](https://lh5.googleusercontent.com/V99VfGGXKfgoYw8oKTFAutteEw3Pr0EwZy4_F7DacSQX-8ExTT9o7A_VwD3_aWJ_8AMu8Gxk6R-BHIvIvc4hGzbjvnJRFA2KEp0U7_auVRT8252fkKpozvmoUXd0lbuEK35YwYWIZA-jDNcYm3XGeew)

[Sam Clarke characterizes](https://forum.effectivealtruism.org/posts/ydpo7LcJWhrr2GJrx/the-longtermist-ai-governance-landscape-a-basic-overview) AI governance as a spectrum where strategy research sets the priorities of AI governance. (If you haven't, you probably want to read the post; it gives an excellent overview.) 

Although recent conversations indicate that there is more of a consensus about intermediary goals, significant questions remain unsolved, such as:

*   What are the primary sources of existential risk?
*   What are the AI capabilities of China? How likely is China to become an AI superpower?
*   Will there be significant military interest in AI technologies? Will this lead to military AI megaprojects?

Exemplary work:

*   [Is Power-Seeking AI an Existential Risk?](https://arxiv.org/abs/2206.13353), Carlsmith, (Open Philanthropy), 2022
*   [Summary of GovAI’s summer fellowship](https://www.governance.ai/post/summer-fellowship-2022-wrap-up), GovAI, 2022
*   [Recent Trends in China's Large Language Model Landscape](https://www.governance.ai/research-paper/recent-trends-chinas-llm-landscape), Jeffrey Ding & Jenny Xiao (GovAI), 2023
*   [Prospects for AI safety agreements between countries](https://forum.effectivealtruism.org/posts/L8GjzvRYA9g9ox2nP/prospects-for-ai-safety-agreements-between-countries), Oliver Guest (Rethink Priorities), 2023

### Surveys

### ![](https://lh6.googleusercontent.com/K4JByAuBxom7fX0ADcM-OKDnDFxMAOqtFoeO3HEJ1xOULXLrhtqjyx0VQ93jWuxomD2vb4zl4idZLI9LERsc5SGIvnhjwnlfNXDSxm9puPHcahjvA5ui6o_KvoDGAEZa7tBkUuu1ZzhQTjXedh6U1AA)

Expert opinions inform AI timelines, and public opinion mirrors the current [Overton window](https://en.wikipedia.org/wiki/Overton_window#:~:text=The%20Overton%20window%20is%20an,public%20to%20expand%20the%20window.). This can serve as the foundation of many strategic decisions. They also help scope public advocacy related to risks from advanced AI. 

Some exemplary surveys:

*   [2022 Expert Survey on Progress in AI – AI Impacts](https://aiimpacts.org/2022-expert-survey-on-progress-in-ai/) stating a 50% chance of human-level AI by 2059.
*   [US public opinion of AI policy and risk – Rethink Priorities](https://forum.effectivealtruism.org/posts/ConFiY9cRmg37fs2p/us-public-opinion-of-ai-policy-and-risk), 2023
*   [Survey on intermediate goals in AI governance – Rethink Priorities](https://rethinkpriorities.org/publications/survey-on-intermediate-goals-in-ai-governance), 2023, a survey of people active in AI governance
*   [A collection of surveys by GovAI](https://www.governance.ai/theme/survey-research)

### Forecasting

### ![](https://lh3.googleusercontent.com/eZiPDuj9slBpVU0UXOXSesSZbQQpGNbYQs31gq_JGB1z5Ta9ma70RJWtciHurEhkuPSC2vXvUTiQrShevPN3yHUquDCtnEtCnh1P_1RQG-qWXV-gQfc_vKyAc3PkWrkTmKM4bbv3b5Ev6MzkbWDkwaA)

Forecasting involves both quantifying key numbers and dates and qualitative reasoning about likely developments. It tries to answer questions such as:

*   When will AGI be developed?
*   Will AI takeoff be fast or slow?
*   What impacts of AI should we expect on democracy or international stability in the coming years?
*   Will data be a serious bottleneck for increasing the size of future AI models?
*   What is the probability that the most advanced AI models will originate in China?

Exemplary work:

*   [Literature review of Transformative AI Timelines](https://epochai.org/blog/literature-review-of-transformative-artificial-intelligence-timelines), Wynroe et al. (Epoch), 2023
*   [\[1 of 4\] Forecasting TAI with biological anchors](https://docs.google.com/document/d/1IJ6Sr-gPeXdSJugFulwIpvavc0atjHGM82QjIfUSBGQ/edit), Ajeya Cotra (Open Philanthropy), 2021
*   Metaculus’ [AI progress tournament](https://www.metaculus.com/project/ai-progress/), ongoing
*   [Discontinuous progress investigation](https://aiimpacts.org/discontinuous-progress-investigation/) AI Impacts, 2015
*   [Will we run out of ML data? Evidence from projecting dataset size trends](https://epochai.org/blog/will-we-run-out-of-ml-data-evidence-from-projecting-dataset), Villalobos et al. 2022 

2\. Industry-focused governance
-------------------------------

**Very little government regulation of AI currently exists, so the most important decisions about training and deployment are almost entirely made within the industry.** Further, the AI industry is incredibly concentrated. There are only half a dozen companies with the ability to train cutting-edge models. Therefore, it is possible to influence key decisions by working with a small number of actors.

### Improving corporate decisions

![](https://lh3.googleusercontent.com/e7b2b3rrrl3r4lp1MuX4lQdTj8vj2qKaJXPiiiVCQffMTQ70loVUUEn9W1eSBjF93LXtbheOkxeseiR8_dYQgmYwekvA0GW_7ItzutEtT1sDrcGmaYHkGlOjaaLSCamTxE3iDGFZ6Ak6zdU6GT6SiqU)

AI developers have made large-scale, impactful decisions about what AI models exist, who has access to them, and how they are used, such as:

*   Decisions by OpenAI, such as [not open-sourcing GPT-3](https://www.theverge.com/2023/3/15/23640180/openai-gpt-4-launch-closed-research-ilya-sutskever-interview), [waiting six months before releasing GPT-4](https://www.vox.com/future-perfect/2023/3/25/23655082/ai-openai-gpt-4-safety-microsoft-facebook-meta), [giving Microsoft early-access to GPT-4](https://blogs.bing.com/search/march_2023/Confirmed-the-new-Bing-runs-on-OpenAI%E2%80%99s-GPT-4), their alignment strategy as outlined in [Our approach to alignment research](https://openai.com/blog/our-approach-to-alignment-research)
*   Anthropic’s [Core Views on AI Safety](https://www.anthropic.com/index/core-views-on-ai-safety), 2023
*   DeepMind’s [decision to stop releasing their models](https://www.lesswrong.com/posts/vEJAFpatEq4Fa2smp/hooray-for-stepping-out-of-the-limelight)
*   Meta AI [giving academics access to Llama, which resulted in the model practically being open-source](https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online-misuse), 2023
*   Google [acquiring DeepMind and merging it with Google Brain](https://blog.google/technology/ai/april-ai-update/), 2023

### Improving corporate structures

### ![](https://lh5.googleusercontent.com/sN6zETq5PYcuDrEAWBmkvfNdUvYB_IKwrgdrvely3w7Py1EzU1SPoU47LpGaX1r08GPWq-SpDGQ9mqsHPbgrmHdbTvYLpNAoIMZcDLru7MmiXrd78uNveCsXI4S8cMsVirWir36zk4OL2Ei-sh-h73Y)

The decisions mentioned above result from complex decision-making processes and involve different actors. Improving such decision-making processes, such as by developing best practices around model evaluation, internal red teaming, and risk assessment, can enable AI labs to make better decisions in the future.

Exemplary work:

*   [The windfall clause](https://www.governance.ai/research-paper/the-windfall-clause-distributing-the-benefits-of-ai-for-the-common-good), an idea for a commitment to distribute the benefits of accomplishing transformative AI proposed by O’Keefe et al., GovAI, 2020
*   OpenAI [declaring itself](https://openai.com/blog/openai-lp) a capped profit, meaning profits above a certain threshold go to the OpenAI nonprofit, 2019
*   [Towards Best Practices in AGI Safety and Governance](https://www.governance.ai/research-paper/towards-best-practices-in-agi-safety-and-governance), Schuett et al. (GovAI), 2023 

Learn more:

*   [The case for long-term corporate governance of AI](https://forum.effectivealtruism.org/posts/5MZpxbJJ5pkEBpAAR/the-case-for-long-term-corporate-governance-of-ai), Baum & Schuett, 2021

### Evals

### ![](https://lh6.googleusercontent.com/hT2kmBN6OJBHJbjrIlgFYg55_hyXdt6tiB9IBwzSiOSPTjcURevTf3zd3osrzU-ZU9McouBTwnZibSof-uMp2vyc1R4WhleXONdI-rhVgQhB3VMbQnqO_2Ema4Y2kAjzcLAdTus19hqux517zvdI6g4)

Model evaluations are tests run on AI models that aim to determine their capabilities and degree of alignment. The results of this work could both inform company decisions about deployment as well as constitute future regulatory standards.

This is a comparatively new area, and I expect significantly more attention to this topic in the coming months and years.

Exemplary work:

*   [OpenAI’s evals on GitHub](https://github.com/openai/evals), 2023
*   [Update on ARC’s recent evals efforts](https://evals.alignment.org/blog/2023-03-18-update-on-recent-evals/), 2023

Learn more:

*   [Appollo Research’s plans](https://www.apolloresearch.ai/blog/announcement), 2023
*   Talk: [Safety evaluations and standards for AI | Beth Barnes | EAG Bay Area 23](https://www.youtube.com/watch?v=Vb5g7jlNzOk) 

### Standards setting

### ![](https://lh5.googleusercontent.com/1_n166kfaJ3ifvZ2C7OH2t0gluqK8iQB7rqMsZhfOvUq4Rdr3iPKLOrLGDRf47yKBCA9Ujz8yENtvj9K0xk65dmu1GLK1Zl0B_Nxxqm9HZ91Q4Iw7hdc1C0GQcxGMdPEKQzNABLo29JtIcAuauOOAV8)

The dominant way other technologies are regulated is via defining technical standards that are either best-practice or mandatory to implement. For AI, the first comprehensive standards-setting procedures are currently initiated.

(I could also have put this into the government bucket, but due to significant industry involvement in these processes, I decided to include them in the industry section.)

Exemplary work:

*   [The ongoing standards setting in connection to the EU AI act via CENELEC](https://artificialintelligenceact.eu/standard-setting/), 2022
*   [Future of Life Institute’s comments on the first draft of NIST’s AI risk management](https://futureoflife.org/project/nist-framework/), 2023
*   [ISO AI risk management guidance](https://www.iso.org/standard/77304.html), 2023

Further reading:

*   [How technical safety standards could promote TAI safety](https://forum.effectivealtruism.org/posts/zvbGXCxc5jBowCuNX/how-technical-safety-standards-could-promote-tai-safety), O’Keefe et al., 2022

### Incentivizing responsible publication norms

### ![](https://lh6.googleusercontent.com/Zuyys5r19WPsp74IGoI3qbjeMGAXZ4rGfLbNPJ_ODWE0sENSvHg5uQq-M351YZngKSRu64hricUEjDwiulv9Y6CrEACzSr3A4iBAvQRZPW8XZ0UrxPkvbGFs8uRPGKK3E9oQg4LDC7etZHa8QpY5Xs4)

Fostering more careful publication norms could considerably reduce the number of actors with access to cutting-edge AI models. This seems to have been partly successful as, e.g., OpenAI did not release many technical details of GPT-4, and the number of major releases from DeepMind has sufficiently [decreased](https://www.lesswrong.com/posts/vEJAFpatEq4Fa2smp/hooray-for-stepping-out-of-the-limelight) in the past months.

Exemplary work:

*   [Does Publishing AI Research Reduce Misuse?](https://arxiv.org/abs/2001.00463), Shevlane & Dafoe, FHI, 2019
*   [Democratising AI: Multiple Meanings, Goals, and Methods](https://arxiv.org/abs/2303.12642), Seger et al., GovAI, 2023

3\. Government-focused approaches
---------------------------------

### ![](https://lh5.googleusercontent.com/mGNb3wPBE1-_XSDH5nEHihI2Lp3h3QZMvZzytRo7SaUA1f2mMjOYAUMXP8lCr5akyX81r39mk0lI7rfsqJ-3HJdDAZxc3ReEwtWDdU4cQ9PYCZQT-leAQ6j97uV1J1Z9wSxs_VJ03I4fIOKl1mvucnY)

Government-focused AI governance aims to improve the decisions governments make, both on the executive, as well as on the legislative level.

### Legislative action

### ![](https://lh4.googleusercontent.com/rZG379qlQqAmTrzlbNV54mue9PgryiWc4JLPpqrZ1r_XWISLoDXR6hcAFVbcrtGhL0TLM6zV6EmCW5B2TY7k8a2GML0u3g1F4QX2A0iyMdEcFl-9Dz5h8T6Ukq5YXB_RdpDHkAZpQDDa0mBwRT-UfQ8)

A wide variety of legislative processes are currently happening in AI governance, and I am likely unaware of most. 

One prominent example is the EU AI Act, the first attempt at a comprehensive regulation of AI systems. It sets out to define which applications should be seen as high-risk and thus subject to special scrutiny. It further specifies which procedures should be used in AI development and who is liable for harm caused by AI systems.  

Because of the economic and political influence, the regulation will likely spread beyond the EU’s borders, a phenomenon known as the [Brussels effect](https://www.governance.ai/research-paper/brussels-effect-ai). 

More on why the EU AI Act might be important: [What is the EU AI Act and why should you care about it?](https://forum.effectivealtruism.org/posts/bd7yr3eozzzhMuKCi/what-is-the-eu-ai-act-and-why-should-you-care-about-it) MathiasKB, 2021

Updates on the current state: [EU AI act newsletter | Risto Uuk (FLI)](https://artificialintelligenceact.substack.com/), [The European AI Newsletter | Charlotte Stix](https://www.charlottestix.com/europeanaiarchive)  

The UK recently announced its “[pro-innovation approach to AI regulation](https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach/white-paper)”.

Here is [an earlier comment by CLTR](https://www.longtermresilience.org/post/governance-of-artificial-intelligence-ai-inquiry-submission-of-evidence-1), advocating a more cautious approach.  
 

In the US, there has recently been a hearing on AI in Senate. I expect legislative processes soon.  
 

Various think tanks try to improve the currently ongoing legislative processes. They include the [Future of Life Institute](https://futureoflife.org/project/eu-ai-act/) in the EU and [Centre for long-term resilience](https://www.longtermresilience.org/) in the UK.

### Compute governance

### ![](https://lh3.googleusercontent.com/ZghdFvAnMsFuBcS3So0zVaSIGMGNLh-ywUVySgO54yXxbadMEEtPw1wGr0AXRLhiRwO7nlQ8NA8S9QOCjRFoZTTsNjwsr-QHvf-Twd2BL-2JgT7WI17oYCBjo-IoBaBIj6UAMfalREd1jzp6HstYI9U)

Today’s most capable AI systems are trained on large amounts of expensive hardware. Since this hardware is detectable and relies on a concentrated supply chain, it is an opportunity to govern who has access to the capabilities to train advanced AI systems.

The most influential decision of compute governance so far was when the Biden administration [restricted the export](https://www.csis.org/analysis/choking-chinas-access-future-ai#) of certain hardware and the equipment needed to produce it to China.

**For an overview of current work in compute governance, I recommend **[**this talk by Lennart Heim**](https://blog.heim.xyz/presentation-on-introduction-to-compute-governance/) **as well as this extensive**[**reading list**](https://docs.google.com/document/d/1DF31DIkwS9GONzmy1W3nuI9HRAwSKy8JcIbzKYXg-ic/edit#heading=h.kimhqj72mew4)**.**

### International governance

### ![](https://lh5.googleusercontent.com/t3whiWheggWJd8cvBGCzrwlcp-289wgGeOs2IIR8BnU4vw8Lg-mRGkd0S9UKwsZhF9Sg0QuADbANAbgxN-rMto9TaxMl2De0m6ZbPCrBqajWfn93GFa4K5N6kiphF_SKySOZNWO7GITxAlm0P4NTOL4)

Although international agreements are notoriously difficult to bring about, they are likely necessary to enable coordination between different countries developing advanced AI systems and prevent conflict.  

Exemplary work:

*   [Future of Life Institute's attempt](https://www.stopkillerrobots.org/wp-content/uploads/2020/03/FAQ-Treaty-Elements.pdf) at internationally banning autonomous weapons, 2020
*   [Prospects for AI safety agreements between countries](https://forum.effectivealtruism.org/posts/L8GjzvRYA9g9ox2nP/prospects-for-ai-safety-agreements-between-countries), Oliver Guest, 2023 

*Edit: See* [*this comment*](https://forum.effectivealtruism.org/posts/8KhGio2rhgHgsBoZ6/a-summary-of-current-work-in-ai-governance?commentId=cCNijgxgnMYcgnyXR) *for many more work in international AI governance that I wasn't aware off.*

4\. Field-building
------------------

### ![](https://lh3.googleusercontent.com/ZTKF8trvAedoZ5P_1qiDPvE2_E245cdNCAgpjkurArCjabXT82__nrKslVxHpXkZhUNb4cSQ1otvKf56HkAhRgdwZwGXUrRhUWg5L_EQM3n6ncNQpctNQP3_P5h-2HeDlQauUPiW2iQ2yfcqCF6qkQ8)

Field building supports AI governance on the meta-level by raising awareness, motivating talented individuals, and enabling work through funding.

### Grantmaking

### ![](https://lh6.googleusercontent.com/bRvEhIIQmy3J98iAmiz0de9sc5WZjA1Z7sPX0cWinFKK6wJxg9ywY-b9bPVa95SxSUbFaZs3NY4pjzJjRCDfhqRCC2yYxpVR3vZ4NnJ9hUVdEB8MXBwUbmaGWx5xldlZNLwKh4UC7aHeW6erRtaWhhs)

Grantmakers prioritize which work gets funded, thus heavily shaping the field and its strategies. AI governance is currently in a unique state where the majority of all work is funded by private philanthropy rather than government spending. The decisions of major funders have an outsized impact on which lines of work are promoted.

More: [Open Philanthropy grant database](https://www.openphilanthropy.org/grants/?focus-area=potential-risks-advanced-ai) and [content on their AI strategy](https://www.openphilanthropy.org/focus/potential-risks-advanced-ai/), [EA Funds database](https://funds.effectivealtruism.org/grants?fund=Long-Term%2520Future%2520Fund&sort=round), [Survival and Flourishing Fund](http://survivalandflourishing.org/)

### Media campaigns

### ![](https://lh6.googleusercontent.com/kG_3c_d53AS_n_V6q3zqbBCwY0sDMjbbIgY0MFtg-x_R-mJcI7gSiSfGpNqGoziNoPgEffsZBIXwqZfu_gehOTx13uGTg1cWFuRQdyiPtFBPu-gDbiTKJDAjZpc84oHjKMdsZp29uUn85Ji-piQ-LrY)

Until recently, AI governance was hardly part of public discourse, and there were only few public campaigns. This is currently changing, in part thanks to [Future of Life Institute (FLI)](https://futureoflife.org/open-letter/pause-giant-ai-experiments/)[’](https://futureoflife.org/project/lethal-autonomous-weapons-systems/)[s open letter](https://futureoflife.org/open-letter/pause-giant-ai-experiments/). 

Exemplary work: 

*   [FLI’s campaign against autonomous weapons](https://futureoflife.org/project/lethal-autonomous-weapons-systems/)
*   Some examples of coverage of AI risk [in the Economist](https://www.economist.com/leaders/2023/04/20/how-to-worry-wisely-about-artificial-intelligence#:~:text=The%20degree%20of%20existential%20risk,put%20the%20risk%20at%205%25.), [Time](https://time.com/6258483/uncontrollable-ai-agi-risks/), [NYT](https://www.nytimes.com/2023/05/01/technology/ai-problems-danger-chatgpt.html)
*   [Statement on AI Risk](https://www.safe.ai/statement-on-ai-risk), Center for AI Safety, 2023 
*   [The theory of change of the existential risk observatory](https://forum.effectivealtruism.org/posts/kK9WfSr52hwqhHXHp/introducing-the-existential-risk-observatory), Otto, 2021

### Outreach

### ![](https://lh4.googleusercontent.com/Lhtg5r_0_VCbrCQmMcG4c26_ZHVqfUvZM3Tz_qXhA-9JIthVlhSNTwfiUd96d722Jbl5KR4vmomGTEbEB5PfGb8CyVEko0ChsDevNKs2TtXGtdgY2g_80HN9rUlQawr-s5HtyUrB-1xNiog__9MjQQU)

Allan Dafoe writes in [AI Governance: Opportunity and Theory of Impact](https://www.allandafoe.com/opportunity):

*Given the value I see in each of the superintelligence, ecology, and GPT perspectives, and our great uncertainty about what dynamics will be most critical in the future, I believe we need a broad and diverse portfolio. To offer a metaphor, as a community concerned about long-term risks from advanced AI, I think we want to build a Metropolis---a hub with dense connections to the broader communities of computer science, social science, and policymaking---rather than an isolated Island. *

Organizations such as FLI, [GovAI,](https://www.governance.ai/events) and [CSER](https://www.cser.ac.uk/) regularly organize events to connect different fields.

### Scouting and training talent

### ![](https://lh5.googleusercontent.com/PERXWagl3Dk0UTQcm8Vo1JMZW3YH98KWjcAD82j43_ZLorG4EJQsyUbDiEh0AOvqJIhTN9YmqpVSw1ytOM-o3wFB6eTo-r-AntddUvFHGWU428fLS_EO381UuYrSX8Pl5Bk-a6skOuW5F3B3HvCllHM)

My current impression of the current main talent pipeline:

1.  You become interested in risks from AI and take part in a reading group or join [BlueDot Impact’s AI Safety Fundamentals: governance track](https://www.agisafetyfundamentals.com/ai-governance-curriculum).
2.  You test fit in one of the (fairly competitive) summer opportunities such as [ERA](https://erafellowship.org/), [CHERI,](https://www.xrisk.ch/) or [SERI](https://seri.stanford.edu/).
3.  You join a longer fellowship such as the [EU tech policy fellowship](https://www.trainingforgood.com/europe-tech-policy#:~:text=The%202023%20fellowship%20will%20bring,potential%20leaders%20in%20the%20field.), [GovAI’s summer or winter fellowship,](https://www.governance.ai/post/summer-fellowship-2023) or [Open Philanthropy’s tech policy fellowship](https://www.openphilanthropy.org/open-philanthropy-technology-policy-fellowship/).
4.  You begin working in academia, in industry, for a think tank, or for government.

Other options to prepare for full-time work in AI governance include various PhDs, research assistant roles, or internships at policy institutions.

If you are planning to get involved, apply for [80,000 hours' career advice](https://80000hours.org/career-reviews/ai-policy-and-strategy/). 

Some areas I would like to see
------------------------------

### Data governance

Training advanced AI systems requires large amounts of data that are usually scraped from the internet. The current legal situation for what data may and may not be used is unclear, and AI companies could be sued to hold them liable and restrict the data they can use in the future.

More: 

*   DeepMind is [being sued](https://techcrunch.com/2022/05/16/google-deepmind-nhs-misuse-of-private-data-lawsuit/) for mishandling protected medical data
*   Stable Diffusion and Midjourney are [being sued](https://venturebeat.com/ai/stable-diffusion-lawsuit-plus-words-of-caution-from-openai-deepmind-the-ai-beat/) by  artists for producing derivative works
*   [Copilot is being sued](https://www.theverge.com/2023/1/28/23575919/microsoft-openai-github-dismiss-copilot-ai-copyright-lawsuit) for reciting code without stating the authors 
*   [Reclaiming the Digital Commons: A Public Data Trust for Training Data](https://arxiv.org/pdf/2303.09001.pdf), Chan et al., 2023

### Bounties and Whistleblower protection

By announcing bounties, one could incentivize speaking out publicly about irresponsible decisions at AI labs or governments. 

(This idea is not original, I don’t remember where I first heard it, potentially [here](https://forum.effectivealtruism.org/posts/AuRBKFnjABa6c6GzC/what-success-looks-like#Whistleblower_Protection).)

Projecting the field
--------------------

My current impression is that AI governance will get much broader in the coming years as more and more different interest groups join the debate due to AI increasingly leading to transformative economic applications, job losses, disinformation, and automation of critical decisions. This will bring many new perspectives into the field but also make it more difficult to understand which incentives different people or organizations will follow.

Get involved
------------

If you’d like to learn more about AI governance, apply to the [AI Safety Fundamentals: Governance Track](https://www.agisafetyfundamentals.com/ai-governance-curriculum), a 12-week, part-time fellowship before June 25.

If you are seriously considering starting work in AI governance, apply to [80,000 hours' career advice](https://80000hours.org/career-reviews/ai-policy-and-strategy/).

*Thank you to everyone who provided feedback!*

[^p4mjcqhemnd]: E.g., if the Chinese government anticipates the US developing AGI in the coming years, they might risk great power conflict to stop them.