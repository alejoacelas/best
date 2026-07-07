---
title: "Breaking Down the Biden AI EO: Screening DNA Synthesis and Biorisk | Center for Security and Emerging Technology"
author: "Tessa Baker"
date: 2023-11-16
url: https://cset.georgetown.edu/article/breaking-down-the-biden-ai-eo-screening-dna-synthesis-and-biorisk
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2 stage-1 readings, e.g. biorisk/cset-ai-and-biorisk-explainer.md; CSET on the Biden AI EO, DNA synthesis screening and biorisk policy"
---

###  CSET 

# Breaking Down the Biden AI EO: Screening DNA Synthesis and Biorisk

Steph Batalis

and Vikram Venkatram

November 16, 2023

The recent [Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) will have major implications for biotechnology. The EO demonstrates that the White House considers biorisk a major concern for AI safety and security. In this blog post CSET’s bio experts explain the bio-relevant takeaways of the executive order, add some additional context, and note their remaining questions about its implementation.

_This is the third blog post in an ongoing series that we will post as we dig deeper into the White House’s AI EO._

The recent [Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) unsurprisingly contains numerous new initiatives related to AI, but what might be surprising is the inclusion of DNA synthesis and other biosecurity-related provisions. 

The inclusion of biosecurity provisions in an EO ostensibly about AI shows that the White House considers biorisk a major concern for AI safety and security. In particular, models that could facilitate the development, acquisition, and use of biological weapons are called out in sections outlining AI capability assessments (4.1), reporting requirements (4.2), security reviews of federal data (4.7), and consumer protections (8.b). Notably, the compute threshold for mandated reporting is lower for models trained on biological data, meaning that these systems will have more oversight than more general-purpose systems (4.2.b.i).

Section 4.4, entirely dedicated to limiting biological risk, is the most consequential to biotechnology and will have major implications for biological research and development. It requires the USG to undertake risk assessments to evaluate the potential for AI to increase biological risk, particularly its potential misuse to develop biological weapons. It also creates a new DNA synthesis screening regulation for federally-funded biological research. 

### Breaking Down the Bio-Provisions of Section 4.4

Below, we identify the major bio-relevant takeaways of the executive order section 4.4, provide some useful context, and identify questions that we have about its implementation. For further detail on the executive order, including information on the timelines for these actions and the agencies tasked with the responsibility, make sure to check out the [CSET EO Task Tracker](https://cset.georgetown.edu/article/eo-14410-on-safe-secure-and-trustworthy-ai-trackers/) and our broader discussion of [Section 4 of the EO](https://cset.georgetown.edu/article/breaking-down-the-biden-ai-eo-ensuring-safe-and-secure-ai/).

#### Biorisk Impact Assessments

Researchers are increasingly developing [AI models for biology](https://cset.georgetown.edu/article/large-language-models-in-biology/) that can accelerate research and development timelines. The two general categories of [AI tools for biology](https://arxiv.org/abs/2306.13952)—chatbots and biological design tools (BDTs)—each present unique capabilities and potential risks. Malicious actors might use chatbots to gather information and develop a plan of harm, although this risk should be [evaluated in the context of the existing risk landscape](https://foreignpolicy.com/2023/11/05/ai-artificial-intelligence-chatbot-bioweapon-virus-bacteria-genetic-engineering/). BDTs, like [AlphaFold](https://alphafold.ebi.ac.uk/), engineer, predict, and simulate biological molecules and processes and can help researchers understand large-scale biological patterns. These models could be exploited to design new pathogens or toxins or to evade screening and detection measures—for example, by slightly modifying a sequence of nucleotides to enhance risk, but not match with a prohibited sequence.

Biological AI tools are powered by large datasets of biological information. The U.S. government owns, partially funds, or facilitates contributions to many of these biological databases, including some of the largest repositories of [DNA sequences](https://www.ncbi.nlm.nih.gov/genbank/), [protein structures](https://www.uniprot.org/), and [chemical properties](https://pubchem.ncbi.nlm.nih.gov/).

##### Executive Order Section 4.4a

The executive order commissions two efforts to better understand how AI can both exacerbate and mitigate biorisks, and provide recommendations accordingly: 

  * **Report to the President** : The Department of Homeland Security (DHS) is tasked with assessing the potential for AI to enhance Chemical, Biological, Radiological, and Nuclear (CBRN) threats through consultation with experts (4.4.a.i). In particular, the report is meant to: 
    * Identify which types of AI models present the biggest risks, and 
    * Include recommendations for regulation, oversight, and potential safety evaluation requirements. 
  * **National Academies’ Study:** The Department of Defense (DoD) is asked to contract the National Academies of Sciences, Engineering, and Medicine (NASEM) to conduct a study to evaluate AI’s impact on biorisk and provide recommendations (4.4.a.ii). The study should examine the risks from generative AI models trained on biological data, how these models can be used to reduce biorisk, the national security implications of AI trained on U.S. government-owned datasets, and any other aspects of AI applied to synthetic biology that the Secretary of Defense deems worthy of additional scrutiny.



##### Remaining Questions

  * [Regulations](https://www.phe.gov/s3/dualuse/Documents/P3CO.pdf) already exist to limit research that could make pathogens or toxins more dangerous. However, these frameworks [do not adequately define](https://www.gao.gov/assets/gao-23-105455.pdf) what characteristics constitute a concerning level of risk. What framework will experts use to evaluate the level of biorisk with and without AI tools?
  * The executive order specifies that AI experts and CBRN experts should be consulted to inform the report to the President on AI biorisks. Will non-CBRN biology experts (i.e. life scientists) also be involved? 
  * Will the potential benefits to biological and medical research of access to large, government-owned biological datasets be considered in addition to national security concerns? 



#### DNA Synthesis Screening

Nucleic acid synthesis screening regulates the flow of potentially risky, lab-created custom nucleic acids—like DNA or RNA—that could be used to make pathogens or toxins. Researchers frequently use custom strands of DNA for a range of research applications, and can obtain them by ordering from commercial providers who synthesize the DNA and send it back by mail. Although synthesized DNA is important for basic research, certain sequences can cause harm if misused. Malicious actors could order DNA that codes for a toxin or a gene that makes a pathogen more dangerous, and some viruses can be completely reconstructed from their DNA or RNA.  


Until now, DNA synthesis screening has been voluntary for commercial providers, although biosecurity experts including the National Science Advisory Board for Biosecurity (NSABB) have been [recommending mandatory sequence and customer screening](https://biosecurity.fas.org/resource/documents/NSABB%20guidelines%20synthetic%20bio.pdf) for decades. The U.S. Department of Health and Human Services developed a [recommended screening framework](https://aspr.hhs.gov/legal/synna/Documents/SynNA-Guidance-2023.pdf) for providers in 2010 and updated it in 2023, but these guidelines were not binding or enforceable. Most, but not all, commercial providers are committed to screening through membership in the industry-led International Gene Synthesis Consortium ([IGSC](https://genesynthesisconsortium.org/)).

##### Executive Order Section 4.4b

The executive order requires the development of a framework to screen nucleic acid synthesis and makes procurement from companies that screen a condition of federal research funding.

  * **Framework Specifications:** The Director of OSTP will lead efforts to develop a screening framework, which should include screening criteria and methods, standards, and a reporting mechanism for concerning orders, using existing guidance like the [HHS screening framework](https://aspr.hhs.gov/legal/synna/Documents/SynNA-Guidance-2023.pdf) (4.4.b.i). Agencies should seek input from industry and relevant stakeholders regarding implementation and best practices, especially as it concerns screening specifications, database management, technical implementation, and conformity assessments (4.4.b.ii).
  * **Implementation and Evaluation** : The framework will require all research projects that receive federal research funding to purchase nucleic acids from companies that adhere to the screening framework (4.4.b.iii). The Secretary of Homeland Security will consult with relevant agencies to develop a structured testing and evaluation framework and submit an annual report detailing results and recommendations to strengthen screening (4.4.b.iv).



##### Remaining Questions

  * **Screening Criteria:**
    * What DNA sequences will be included in the framework, and how will they be chosen? List-based approaches compare DNA orders against a list of “sequences of concern,” but are likely to be incomplete and can be evaded by capable actors.
    * Will there be a mechanism to update the framework as technology evolves and as the stress testing required in 4.4.b.iv identifies vulnerabilities?
    * Will benchtop DNA synthesizers—another way to generate custom DNA—be included in the stated frameworks, as recommended by the 2023 HHS guidance? 
  * **Industry Role:**
    * Framework establishment (4.4.b.i) and industry engagement (4.4.b.ii) are slated to occur concurrently within 180 days. How will industry input be integrated into framework development?
    * Will industry feedback be incorporated at any stage after framework development, for example during implementation or stress testing?



### Concluding Thoughts

We are glad to see the EO address biosecurity and outline a foundation to assess and mitigate biorisks. We are particularly excited to see a requirement for nucleic acid synthesis screening, an important safeguard that experts have been recommending for nearly two decades. The screening mandate’s use of federal research funding as its policy lever will capture most biological research activity, but will not impact lone malicious actors who do not receive federal funding or use it to support their malicious activity. If this is a scenario of concern, then complete risk mitigation will require further legislative action to mandate universal screening.

The impacts of AI systems on biorisk are still unclear, and the actions put into motion by this executive order are a step in the right direction. We look forward to the positive impact that the executive order will have by addressing both foundational and AI-enhanced biosecurity risks.

### Related Content

Previous Next

#### [AI Executive Order Report Card](https://cset.georgetown.edu/event/ai-executive-order-report-card/) December 2023

Join CSET researchers for a 90-day review of ongoing implementation of the Biden Administration's Executive Order on artificial intelligence. [Read More](https://cset.georgetown.edu/event/ai-executive-order-report-card/)

Blog #### [The Executive Order on Safe, Secure, and Trustworthy AI: Decoding Biden’s AI Policy Roadmap](https://cset.georgetown.edu/article/eo-14410-on-safe-secure-and-trustworthy-ai-trackers/) November 2023

On October 30, 2023, the Biden administration released its long-awaited Executive Order on Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence. CSET has broken down the EO, focusing on specific government deliverables. Our… [Read More](https://cset.georgetown.edu/article/eo-14410-on-safe-secure-and-trustworthy-ai-trackers/)

Blog #### [Breaking Down the Biden AI EO: Ensuring Safe and Secure AI](https://cset.georgetown.edu/article/breaking-down-the-biden-ai-eo-ensuring-safe-and-secure-ai/) November 2023

There’s a lot to digest in the October 30 White House’s AI Executive Order. Our tracker is a useful starting point to identify key provisions and monitor the government’s progress against specific milestones, but… [Read More](https://cset.georgetown.edu/article/breaking-down-the-biden-ai-eo-ensuring-safe-and-secure-ai/)

Blog #### [Large Language Models in Biology](https://cset.georgetown.edu/article/large-language-models-in-biology/) June 2023

Steph Batalis, Caroline Schuerger and Vikram Venkatram explore three notable areas in the life sciences where LLMs are catalyzing meaningful advances: drug discovery, genetics, and precision medicine. [Read More](https://cset.georgetown.edu/article/large-language-models-in-biology/)

#### [Can Chatbots Help You Build a Bioweapon?](https://cset.georgetown.edu/article/can-chatbots-help-you-build-a-bioweapon/) November 2023

In an op-ed published in Foreign Policy, CSET’s Steph Batalis discusses the potential misuse of artificial intelligence chatbots in providing instructions for the construction of biological weapons. [Read More](https://cset.georgetown.edu/article/can-chatbots-help-you-build-a-bioweapon/)

Reports #### [Understanding the Global Gain-of-Function Research Landscape](https://cset.georgetown.edu/publication/understanding-the-global-gain-of-function-research-landscape/) August 2023

Gain- and loss-of-function research have contributed to breakthroughs in vaccine development, genetic research, and gene therapy. At the same time, a subset of gain- and loss-of-function studies involve high-risk, highly virulent pathogens that could spread… [Read More](https://cset.georgetown.edu/publication/understanding-the-global-gain-of-function-research-landscape/)
