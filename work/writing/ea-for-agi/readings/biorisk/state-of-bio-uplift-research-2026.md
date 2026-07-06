---
title: "The State of Bio-Uplift Research in Mid-2026"
author: "Humam Aziz"
date: 2026-05-30
url: https://forum.effectivealtruism.org/posts/S6ydgTdTr8sXkfs9x/the-state-of-bio-uplift-research-in-mid-2026
fetched: 2026-07-06
via: forum-graphql
topic: "biorisk"
note: "2026 survey of what AI bio-uplift evaluations actually show (virology test, ProtocolQA); grounds the debate in current evidence"
---

AI poses a biosecurity threat. Much of biology (virology, synthetic biology, genetics) is dual-use, meaning that it can be used for good or for evil. Nuclear physics is a good example of dual-use science. However, biology is perhaps scarier because the requisite materials to create deadly pathogens and toxins can be acquired quite easily. Therefore, as AI becomes increasingly powerful, millions of people may gain access to catastrophic bio-capabilities.

Bio-uplift measures the advantage that LLM access provides in biology tasks. I conducted a comprehensive but non-systematic literature research, including every major model’s system cards. Here is what I found:

**Summary of findings: **

1.  AI bio-uplift exists. Novices have the most to gain, while experts and individuals with some biology experience likely reach the farthest given access to LLMs with improved bio-capabilities.
2.  AIs are currently better than most experts on benchmarks including virology, genetics, and cloning. There is some evidence to suggest that frontier models can develop more efficient and effective lab protocols and improve wet lab troubleshooting. These capabilities are improving with each new model.
3.  AI uplifts novices beyond expert levels on biology knowledge benchmarks. However, uplift in the wet lab is marginal, primarily because novices are dumb and do not know how to use lab equipment, recognize hallucinations, or ask good follow-up questions.
4.  LLM access improves the ability to design successful catastrophic biological protocols (eg., building and releasing novel pathogens), but uplifted protocols are still not strong enough to pose a credible threat.
5.  Model guardrails are mostly effective. If you ask Claude to help you make ricin, it will refuse. However, open weight models (like Llama and Deepseek) can be fine tuned to remove safety guardrails quite easily.
6.  Open weight models like Llama and Deepseek are doing the least bio-safety research. 
7.  There are no trials measuring AI uplift for experts in the wet lab. This is bad because experts will likely be the first group who are uplifted to dangerous levels. #gapfound #pleasefillthisgap
    

**Introduction: **

Artificial intelligence (AI) is an increasingly powerful scientific tool. Leading models continue to outperform experts on various biology benchmarks (Dev et al., 2025), including virology and laboratory troubleshooting (Bengio et al., 2026). Unfortunately, some scientific capabilities are “dual-use,” meaning they can be leveraged in either productive or destructive forms (for example, nuclear physics, synthetic biology, and gene editing). The materials necessary to construct pathogens are relatively accessible. Thus, given access to advanced biology or chemistry capabilities, malicious actors could create and disseminate biological weapons capable of killing millions. 

Bio-uplift trials measure the advantage Large Language Models (LLMs) provide humans in biological tasks relative to humans without LLM access. These tests are predominantly conducted using multiple choice test benchmarks, though some trials also explore uplift in the wet lab. Wet lab trials are onerous. Recruiting experts is difficult and expensive, operating in a wet lab requires additional time and safety considerations, and AI is constantly changing, with new models released every year. Thus, bio-uplift research primarily focuses on novice uplift, with a significant gap in the quantity and quality of literature concerning non-novice bio-uplift in wet lab settings. 

Though there are billions of novices, they require substantial bio-uplift to pose a threat. Developing or releasing a viable known pathogen is a complex task. Experienced actors have less to gain from AI but are plausibly the most threat relevant actors (Sandberg & Nelson, 2020) and certainly the first group for whom LLMs could uplift to dangerous capabilities. The lack of literature examining uplift amongst these actors is an uncertainty that should not be tolerated. 

**Methods:**

This is a narrative review which employed a comprehensive but non systematic literature search. I searched Google Scholar for studies regarding AI biology uplift. Due to the quickly evolving nature of this field, I included preprints, and other grey literature including internal safety reports from the largest frontier models (Claude, ChatGPT, and Gemini), and the most prominent open weight models (Deepseek and Llama). Additionally, I looked into widely cited reports, including the 2026 International AI Safety Report and the 2025 UK AI Security Institute (AISI) Frontier AI Trends Report. Finally, I queried Claude Opus 4.7, ChatGPT 5.5, and Undermind (Anthropic, 2026; OpenAI 2026, [Hartke and Ramette, 2024)](https://www.undermind.ai/whitepaper.pdf) for additional papers. Most of the relevant papers are preprints uploaded to arXiv, released in the last two years. I included any paper where LLM bio-uplift was measured against a control. Ultimately, I found 20 papers, with 11 relevant bio uplift trials. The results of these trials are summarized in table 1. 

Table 1: 

<table style="border-style:none"><tbody><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">BIO-UPLIFT LITERATURE</td><td style="border-color:#000000;padding:5pt;vertical-align:top">In Vitro (Wet Lab)</td><td style="border-color:#000000;padding:5pt;vertical-align:top">In Silico (Online)</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Novices</td><td style="border-color:#000000;padding:5pt;vertical-align:top"><p>Hong et al., 2026 (Virology:&nbsp;<strong>↑</strong>)&nbsp;</p><p>Romero-Severson et al, 2025 (Virology: ↑)</p></td><td style="border-color:#000000;padding:5pt;vertical-align:top"><p>Mouton et al., 2024&nbsp;<strong>(</strong>attack protocol:&nbsp;<strong>—&nbsp;</strong>)</p><p>Zhang, Knight, et al., 2026 (Benchmarks: ↑*)</p><p>Anthropic, 2025 (attack protocol: ↑)</p></td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Some Experience</td><td style="border-color:#000000;padding:5pt;vertical-align:top">None identified</td><td style="border-color:#000000;padding:5pt;vertical-align:top"><p>Mouton et al., 2024<strong> (</strong>attack protocol:&nbsp;<strong>—&nbsp;</strong>)</p><p>Esvelt, 2025&nbsp;<strong>(</strong>Prediction:&nbsp;<strong>—&nbsp;</strong>)</p><p>OpenAI, 2024 (Protocol&nbsp;<strong>↑</strong>)</p></td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Experts</td><td style="border-color:#000000;padding:5pt;vertical-align:top">None identified</td><td style="border-color:#000000;padding:5pt;vertical-align:top"><p>Anthropic 2026 (attack protocol: ↑* )</p><p>Anthropic 2025 (Virology&nbsp;<strong>↑</strong>)</p><p>OpenAI, 2024 (Protocol&nbsp;<strong>↑</strong>)</p><p>&nbsp;</p></td></tr></tbody></table>

Notes: All results for human bio-uplift are compared to controls without LLM access. An Asterisk* denotes statistically significant results. In silico means “in the computer”—referring to benchmark tests, protocol development, and planning. In Vitro means “in glass”—referring to wet lab work. 

Table 2:

<table style="border-style:none"><tbody><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">AI PERFORMANCE</td><td style="border-color:#000000;padding:5pt;vertical-align:top">In Vitro</td><td style="border-color:#000000;padding:5pt;vertical-align:top">In Silico</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">AI Alone</td><td style="border-color:#000000;padding:5pt;vertical-align:top"><p>OpenAI, 2025 (Cloning: ↑ )</p><p>&nbsp;</p></td><td style="border-color:#000000;padding:5pt;vertical-align:top"><p>Dev et al., 2025 (Benchmarks: ↑ )</p><p>OpenAI 2026 (Benchmarks, Design: ↑ )</p><p>Laurent et al., 2024 (Benchmark: ↑)</p><p>Götting et al., 2025 (Benchmark: ↑ )</p><p>Gemini, 2025 (Benchmark: ↑ )</p><p>Justen, 2025 (Benchmark: ↑ )</p><p>Zhang, Knight et al., 2026 (Benchmark: ↑)</p><p>UK AI Security Institute, 2025 (Benchmarks, Protocols: ↑)</p></td></tr></tbody></table>

Note: All results are relative to expert baseline

**Artificial Intelligence**

AI outperforms experts across various biology tasks but evidence of in-lab troubleshooting abilities are mixed. As of 2025, the leading AI models approach or exceed expert performance across knowledge benchmarks measuring molecular biology, genetics and cloning (Dev et al., 2025; Justen, 2025; Zhang, Knight, et al, 2026; UK AI Security Institute, 2025). Leading models vastly outperform expert virologists on the Virology Capabilities Test (Götting et al., 2025; OpenAI 2026; Gemini, 2025). Evidence on LLM troubleshooting capabilities is mixed, with GPT 5.3 Codex reaching 43.8% on the ProtocolQA benchmark compared to an expert baseline of 54% (OpenAI, 2026) and some research indicating models have surpassed PhD-level troubleshooting (UK AI security Institute, 2025). With every new iteration, models have generally improved their performance on these knowledge based benchmarks. 

In the wet lab, AI can accelerate work (OpenAI, 2025) by innovating on existing protocols and aiding with troubleshooting. When equipped with tools like search or code execution, frontier models are increasingly able to automate parts of dual-use lab work, including feasible plasmid and protocol design (UK AI Security Institute, 2025). As new models are developed, AI performance will likely continue to improve and exceed expert abilities. Additionally, the literature generally does not consider biology-fine tuned models, meaning current measurements may underestimate the overall capacity. Importantly, AI models can strategically ‘sandbag,’ by reducing their performance when tested for dangerous capabilities (van der Weij et al., 2024); thus, scores from misaligned models may be artificially deflated. Ultimately, AI alone can outperform domain experts in silico, but still largely relies on humans to carry out wet lab work. 

**Novices**

The strongest evidence indicates that novices are significantly uplifted in “in silico” tasks, but not dangerously so. In “LLM Novice Uplift on Dual-Use, In Silico Biology Tasks,” Zhang, Knight et. al explore how LLMs may uplift novices on 8 benchmarks and find that novices with LLMs were 4.16 times more accurate than controls \[95% CI 2.63, 6.87\] (2026). Additionally, novices with LLMs outperformed experts on three of four benchmarks with available baselines. However, the novices performed worse than LLMs alone. 

Beyond benchmarks, some trials measure the viability of LLM-assisted novice bioterrorism operational plans. In “The Operational Risks of AI in Large-Scale Biological Attacks: Results of a Red-Team Study,” novices with LLMs could only develop plans with “major flaws, making it extremely unlikely to succeed” (Mouton et al., 2024). Anthropic’s red-team results echo this, indicating that novices were mildly uplifted by LLM access, but that “even the highest scoring plan…still included critical mistakes that would lead to failure in the real world” (Anthropic, 2025) However, these results are non-significant and limited; for example, novices in Mouton et al., were using non-jailbroken models and ran into issues with model refusals. When jailbroken, either through prompting or a non-safety fine-tuned model, models can provide direction toward reverse genetics protocols, advice on the best pandemic causing pathogens, and guidance for avoiding safety screenings (Soice et al, 2023).

In the wet lab, the evidence surrounding novice uplift is much weaker. In “Measuring Mid-2025 LLM-Assistance on Novice Performance in Biology,” Hong et al conduct a randomized control trial (n=153) examining novice uplift through tasks modelling a viral genetics workflow (2026). They find a non-significant, 1.42 fold improvement across all the tasks for novices with LLMs \[95% CI 0.74 to 2.62\]. However, no group was able to complete all the core tasks. LLM access did significantly improve performances on the cell culture task. Additionally, the researchers note that the LLMs accelerated progression; however, any noted performance benefit was modest. Likewise, in “Measuring skill-based uplift from AI in a real biological laboratory,” Romero-Severson et al., compare novices’ ability to transform and express proinsulin in *E*. *coli* depending on their access to LLMs (n= 10, 2025). The results were also non-significant, but the researchers note some upward effect of LLM access. Both trials suggest that there is no significant difference between novices with or without LLM access in the wet lab; any existing novice uplift is not large enough to be dangerous. 

These trials are valuable; however, both are not powered enough to measure statistical significance. Secondly, in both trials, participants struggled with and were, at times, delayed by incorrect LLM responses and lacked the requisite lab skills to work effectively; thus, even if these papers can demonstrate some uplift compared to novices limited to the internet, they may undersell the overall amount of LLM uplift.

**Non Novices (Experts and others with some biology experience)**

The strongest evidence suggests that non-novices are uplifted by access to frontier LLMs. Anthropic’s most recent system card trials PhD-level biologists abilities in virology and “catastrophic biological scenario” protocols with and without access to various models (2026, n=33). They find that experts are significantly uplifted relative to internet-only controls (fractional scores of 0.64 vs 0.37); however, even the best designed plans were not judged to be fully viable. Similarly, In 2025, a trial of Opus 4.5 found that LLM access uplifted PhD-level experts 1.97 fold in a virus reconstruction task compared to internet access alone (Anthropic, 2025b). 

OpenAI’s safety testing of GPT-4 examined uplift in 50 PhD-level experts, and 50 Students with some experience by measuring their biological threat design ability (2024). They noted an insignificant effect relative to the internet-only baseline. However, researchers noted positive effects for both groups. Notably, the expert group was uplifted twice as much as the students (increases in accuracy of 0.88 vs 0.25; increases in completeness of 0.82 vs 0.41; all on a 10 point scale). In a similar trial, Mouton et al. examine biological threat design ability across 36 experts, students, and novices. They found minimal differences and non-significant results when comparing LLM access to internet access; however, access to model A slightly decreased scores in their trial, while access to model B slightly increased scores. This discrepancy in uplift size is potentially due to difficulty in eliciting dual-use outputs from models with safety guardrails. OpenAI notes that they provided research-only versions of their models to the study participants which have decreased guardrails, whereas the participants in the Mouton et al. trial using public versions of the model explicitly note that jailbreaking was an issue. 

Smaller uplift trials with non-novices demonstrate mixed effects. In “Foundation models may exhibit staged progression in novel CBRN threat disclosure,” Esvelt has graduate trained biologists (unfamiliar with mirror bacteria) predict the consequences of mirror bacteria with and without LLM use. The group using LLMs performed slightly worse than the baseline, but the results are non-significant. Importantly, many of the issues Esvelt found were to do with hallucinations that misled participants—LLM users with more experience in the field may not have fallen for these errors.  

Collectively, the evidence suggests that non-novices are modestly uplifted in silico work. The quantitative results from OpenAI and the qualitative insights from other studies including Mouton et al. suggest that experts enjoy more uplift than moderately experienced participants. In any case, the results indicate that LLMs are not yet able to uplift any group to a point of reliable threat creation. 

Notably, I was unable to find evidence of wet-lab trials which measured non novice AI uplift. This gap in the literature is troubling—individuals with some experience can ask better questions, leverage familiarity with basic lab procedures, and avoid misguidance by obvious hallucinations. Therefore, when considering existential risks, the question of expert uplift is crucial. Experts will be the first group uplifted to access catastrophic bio capabilities; novice uplift will remain a late signal. In any case, this gap demands exploration.

**Additional findings**

One powerful roadblock preventing malicious actors from committing bio attacks is the barriers in place on frontier models. Most frontier models will refuse potentially dangerous requests. However, open weight models such as Llama and Deepseek can be downloaded and modified (finetuned) to remove these guardrails extremely easily and cheaply (Gopal et al., 2023). Once these models have their guardrails removed, they will provide dangerous dual-use information and guidance for how to avoid detection. This is doubly important because of all the major AI labs, Meta and Deepseek have the worst biosecurity assessments. Deepseek has revealed no available information regarding biothreat testing; and Meta’s system card notes that they conducted a novice uplift trial but did not provide results nor any specific numbers (Meta, 2025). Though these open weight models are currently less powerful than the closed weight frontier models, they represent the most realistic source for threatening uplift and should be researched in more depth. 

**Conclusion and Path Forward:**

After reviewing the existing bio-uplift literature, I found a large gap in trials involving experts in the wet lab. AI alone continues to progress, exceeding expert performance across various biological domains. Novices are generally uplifted by LLMs for in silico tasks, while evidence of uplift in the wet lab is generally non-significant and moderate at best. For non-novices, LLM access generally uplifts abilities in virology and bio-threat creation. Overall, bio-uplift is a new field of study with limited research. Existing trials are small and mostly underpowered to detect statistical significance. The frontier AI models are always improving, which necessitates constant assessment for safety. Because non-novices will likely be the first group uplifted to unlock existential risk capabilities, these groups must be studied in further depth through various trials, including in the wet lab. 

Uplift research is further limited by a lack of standardization among governments, firms, and research institutes. Though benchmark performances can be compared, many researchers use in-house knowledge benchmarks (Anthropic 2026, UK AI Security Institute, 2025). Additionally, protocol design tasks and wet lab trials are often entirely dissimilar from one another, preventing accurate cross comparison across models. 

Future research should explore non-novice uplift in more depth. A good first step would be to replicate Hong et al., 2026, using 2026 models and including experienced participants, such as biology undergraduates. Further trials should include experts to compare performances against. Additionally, AI safety regulation should focus on cross cutting capabilities rather than specific threats (Pannu et al., 2025). Measures such as enhanced screening of protein sequence orders from cloud labs are an important step. Finally, open weight models must be scrutinized in more depth, as they have the weakest intrinsic preventative mechanisms. As LLMs become more powerful and bio capabilities increase, an ever growing slice of people will have the ability to build existential threats. While LLMs do not yet uplift novices to catastrophic capabilities, regulators and researchers should remain vigilant to the increasing power of frontier models. Consistent and proactive testing of bio-uplift across skill levels is a necessary precaution.   

**References**: 

Anthropic. (2025a, March 19). *Progress from our Frontier Red Team*. Anthropic.com. [https://www.anthropic.com/news/strategic-warning-for-ai-risk-progress-and-insights-from-our-frontier-red-team](https://www.anthropic.com/news/strategic-warning-for-ai-risk-progress-and-insights-from-our-frontier-red-team)

Anthropic. (2025b). System Card: Claude Opus 4.5 (pp. 120-132). Anthropic. https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf

Anthropic. (2026). *System Card: Claude Mythos Preview* (pp. 19–33). Anthropic. [https://www-cdn.anthropic.com/08ab9158070959f88f296514c21b7facce6f52bc.pdf](https://www-cdn.anthropic.com/08ab9158070959f88f296514c21b7facce6f52bc.pdf)

Y. Bengio, S. Clare, C. Prunkl, M. Murray, M. Andriushchenko, B. Bucknall, R. Bommasani, S. Casper, T. Davidson, R. Douglas, D. Duvenaud, P. Fox, U. Gohar, R. Hadshar, A. Ho, T. Hu, C. Jones, S. Kapoor, A. Kasirzadeh, S. Manning, N. Maslej, V. Mavroudis, C. McGlynn, R. Moulange, J. Newman, K. Y. Ng, P. Paskov, S. Rismani, G. Sastry, E. Seger, S. Singer, C. Stix, L. Velasco, N. Wheeler, D. Acemoglu, V. Conitzer, T. G. Dietterich, E. W. Felten, F. Heintz, G. Hinton, N. Jennings, S. Leavy, T. Ludermir, V. Marda, H. Margetts, J. McDermid, J. Munga, A. Narayanan, A. Nelson, C. Neppel, S. D. Ramchurn, S. Russell, M. Schaake, B. Schölkopf, A. Soto, L. Tiedrich, G. Varoquaux, A. Yao, Y.-Q. Zhang, L. A. Aguirre, O. Ajala, F. Albalawi, N. AlMalek, C. Busch, J. Collas, A. C. P. de L. F. de Carvalho, A. Gill, A. H. Hatip, J. Heikkilä, C. Johnson, G. Jolly, Z. Katzir, M. N. Kerema, H. Kitano, A. Krüger, K. M. Lee, J. R. López Portillo, A. McLysaght, O. Molchanovskyi, A. Monti, M. Nemer, N. Oliver, R. Pezoa, A. Plonk, B. Ravindran, H. Riza, C. Rugege, H. Sheikh, D. Wong, Y. Zeng, L. Zhu, D. Privitera, S. Mindermann, “International AI Safety Report 2026” (DSIT 2026/001, 2026); https://internationalaisafetyreport.org

Dev, S., Teague, C., Ellison, G., Brady, K., Lee, J., Gebauer, S. L., Bradley, H. A., Maciorowski, D., Persaud, B., Despanie, J., Castello, B. D., Worland, A., Miller, M., Salas, A., Nguyen, D., Liu, J., Johnson, J., Sloan, A., Stonehouse, W., & Merrill, T. (2025, November 25). *Toward Comprehensive Benchmarking of the Biological Knowledge of Frontier Large Language Models*. Rand.org; RAND Corporation. https://www.rand.org/pubs/research_reports/RRA3797-1.html#citation

Esvelt, K. M. (2025). *Foundation models may exhibit staged progression in novel CBRN threat disclosure*. ArXiv.org. https://arxiv.org/abs/2503.15182

Gemini . (2025). *Gemini 3 Pro Frontier Safety Framework Report*. Gemini. https://storage.googleapis.com/deepmind-media/gemini/gemini\_3\_pro\_fsf\_report.pdf

Gopal, A., Helm-Burger, N., Justen, L., Soice, E. H., Tzeng, T., Jeyapragasan, G., Grimm, S., Mueller, B., & Esvelt, K. M. (2023, November 1). *Will releasing the weights of future large language models grant widespread access to pandemic agents?* ArXiv.org. https://doi.org/10.48550/arXiv.2310.18233

Götting, J., Medeiros, P., Sanders, J. G., Li, N., Phan, L., Elabd, K., Justen, L., Hendrycks, D., & Donoughe, S. (2025). *Virology Capabilities Test (VCT): A Multimodal Virology Q&A Benchmark*. ArXiv.org. [https://arxiv.org/abs/2504.16137](https://arxiv.org/abs/2504.16137)

Hartke, T., Ramette, J., & Ai, U. (2024). Benchmarking the Undermind Search Assistant. https://www.undermind.ai/whitepaper.pdf

Hong, S. Z., Kleinman, A., Mathiowetz, A., Howes, A., Cohen, J., Ganta, S., Letizia, A., Liao, D., Pahari, D., Roberts-Gaal, X., Righetti, L., & Torres, J. (2026). *Measuring Mid-2025 LLM-Assistance on Novice Performance in Biology*. ArXiv.org. [https://arxiv.org/abs/2602.16703](https://arxiv.org/abs/2602.16703)

Justen, L. (2025). LLMs Outperform Experts on Challenging Biology Benchmarks. ArXiv.org. [https://arxiv.org/abs/2505.06108](https://arxiv.org/abs/2505.06108)

Laurent, J. M., Janizek, J. D., Ruzo, M., Hinks, M. M., Hammerling, M. J., Narayanan, S., Ponnapati, M., White, A. D., & Rodriques, S. G. (2024). *LAB-Bench: Measuring Capabilities of Language Models for Biology Research*. ArXiv.org. https://arxiv.org/abs/2407.10362

Meta. (2025, April 29). *meta-llama/Llama-4-Maverick-17B-128E · Hugging Face*. Huggingface.co. https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E#critical-risks

Mouton, C., Lucas, C., & Guest, E. (2024). *The Operational Risks of AI in Large-Scale Biological Attacks*. RAND. [https://www.rand.org/content/dam/rand/pubs/research\_reports/RRA2900/RRA2977-2/RAND\_RRA2977-2.pdf](https://www.rand.org/content/dam/rand/pubs/research_reports/RRA2900/RRA2977-2/RAND_RRA2977-2.pdf)

OpenAI. (2024, January 31). Building an early warning system for LLM-aided biological threat creation. https://openai.com/index/building-an-early-warning-system-for-llm-aided-biological-threat-creation

OpenAI. (2025, December 18). *Measuring AI’s capability to accelerate biological research in the wet lab*. Openai.com. https://openai.com/index/accelerating-biological-research-in-the-wet-lab/

OpenAI. (2026). *GPT-5.5 System Card* (pp. 21–28). OpenAI. [https://deploymentsafety.openai.com/gpt-5-5/gpt-5-5.pdf](https://deploymentsafety.openai.com/gpt-5-5/gpt-5-5.pdf)

Pannu J, Bloomfield D, MacKnight R, Hanke MS, Zhu A, Gomes G, et al. (2025) Dual-use capabilities of concern of biological AI models. PLoS Comput Biol 21(5): e1012975. https://doi.org/10.1371/journal.pcbi.1012975

Peppin, A., Reuel, A., Casper, S., Jones, E., Strait, A., Anwar, U., Agrawal, A., Kapoor, S., Koyejo, S., Pellat, M., Bommasani, R., Frosst, N., & Hooker, S. (2024). *The Reality of AI and Biorisk*. ArXiv.org. https://arxiv.org/abs/2412.01946

Romero-Severson, E. O., Harvey, T., Generous, N., & Mach, P. M. (2025). *Measuring skill-based uplift from AI in a real biological laboratory*. ArXiv.org. [https://arxiv.org/abs/2512.10960](https://arxiv.org/abs/2512.10960)

Sandberg, A., & Nelson, C. (2020). Who Should We Fear More: Biohackers, Disgruntled Postdocs, or Bad Governments? A Simple Risk Chain Model of Biorisk. Health Security, 18(3), 155–163. https://doi.org/10.1089/hs.2019.0115

Soice, E. H., Rocha, R., Cordova, K., Specter, M., & Esvelt, K. M. (2023, June 6). *Can large language models democratize access to dual-use biotechnology?* ArXiv.org. [https://doi.org/10.48550/arXiv.2306.03809](https://doi.org/10.48550/arXiv.2306.03809)

UK AI Security Institute. (2025). Frontier AI Trends Report by The AI Security Institute (AISI). AI Security Institute. https://www.aisi.gov.uk/frontier-ai-trends-report#chemistry--biology

van der Weij, T., Hofstätter, F., Jaffe, O., Brown, S. F., & Ward, F. R. (2024). AI Sandbagging: Language Models can Strategically Underperform on Evaluations. ArXiv.org. https://arxiv.org/abs/2406.07358

Zhang, B., Knight, C. Q., Kruus, N., Hausenloy, J., Medeiros, P., Li, N., Kim, A., Orlovskiy, Y., Breen, C., Cai, B., Götting, J., Liu, A. B., Nedungadi, S., Rodriguez, P., He, Y. Y., Shaaban, M., Wang, Z., Donoughe, S., & Michael, J. (2026). *LLM Novice Uplift on Dual-Use, In Silico Biology Tasks*. ArXiv.org. https://arxiv.org/abs/2602.23329