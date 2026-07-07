---
title: "How AI Labs Can Safeguard Model Weights"
url: https://www.rand.org/pubs/research_reports/RRA2849-1.html
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "RAND research report cited across coups/HEMS/space readings"
---

As frontier artificial intelligence (AI) models — that is, models that match or exceed the capabilities of the most advanced models at the time of their development — become more capable, protecting them from theft and misuse will become more important. The authors of this report explore what it would take to protect model _weights_ — the learnable parameters that encode the core intelligence of an AI — from theft by a variety of potential attackers.

# Securing AI Model Weights

Preventing Theft and Misuse of Frontier Models

[Sella Nevo](/about/people/n/nevo_sella.html), [Dan Lahav](/pubs/authors/l/lahav_dan.html), [Ajay Karpur](/about/people/k/karpur_ajay.html), [Yogev Bar-On](/pubs/authors/b/bar-on_yogev.html), [Henry Alexander Bradley](/pubs/authors/b/bradley_henry_alexander.html), [Jeff Alstott](/about/people/a/alstott_jeffrey.html)

ResearchPublished May 30, 2024

[Download PDF](/content/dam/rand/pubs/research_reports/RRA2800/RRA2849-1/RAND_RRA2849-1.pdf)

Additional Downloads

**Includes** other ebook formats

  * [Share on LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.rand.org%2Fpubs%2Fresearch_reports%2FRRA2849-1.html&title=Securing+AI+Model+Weights%3A+Preventing+Theft+and+Misuse+of+Frontier+Models)
  * [Share on X](https://x.com/intent/tweet?url=https%3A%2F%2Fwww.rand.org%2Fpubs%2Fresearch_reports%2FRRA2849-1.html&text=Securing+AI+Model+Weights%3A+Preventing+Theft+and+Misuse+of+Frontier+Models&via=RANDCorporation)
  * [Share on Facebook](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.rand.org%2Fpubs%2Fresearch_reports%2FRRA2849-1.html)
  * [Email](mailto:?subject=RAND%3A%20Securing%20AI%20Model%20Weights&body=From%20RAND%0A%0ASecuring%20AI%20Model%20Weights%0A%0AThe%20authors%20describe%20how%20to%20secure%20the%20weights%20of%20frontier%20artificial%20intelligence%20and%20machine%20learning%20models%20%28that%20is%2C%20models%20that%20match%20or%20exceed%20the%20capabilities%20of%20the%20most%20advanced%20models%20at%20the%20time%20of%20their%20development%29.%0A%0Ahttps%3A%2F%2Fwww.rand.org%2Fpubs%2Fresearch_reports%2FRRA2849-1.html)



As frontier artificial intelligence (AI) models — that is, models that match or exceed the capabilities of the most advanced models at the time of their development — become more capable, protecting them from theft and misuse will become more important. The authors of this report explore what it would take to protect model _weights_ — the learnable parameters that encode the core intelligence of an AI — from theft by a variety of potential attackers.

Specifically, the authors (1) identify 38 meaningfully distinct attack vectors, (2) explore a variety of potential attacker operational capacities, from opportunistic (often financially driven) criminals to highly resourced nation-state operations, (3) estimate the feasibility of each attack vector being executed by different categories of attackers, and (4) define five security levels and recommend preliminary benchmark security systems that roughly achieve the security levels.

This report can help security teams in frontier AI organizations update their threat models and inform their security plans, as well as aid policymakers engaging with AI organizations in better understanding how to engage on security-related topics.

This document was revised in June 2024 to add acknowledgments, correct formatting, and make an addition to Appendix A.

## Key Takeaways

  * AI organizations face a diverse set of threats, across many meaningfully distinct attack vectors and a wide range of attacker capacities.
  * There is rough agreement among cybersecurity and national security experts on how to protect digital systems and information from less capable actors, but there is a wide diversity of views on what is needed to defend against more-capable actors, such as top cyber-capable nation-states.
  * The security of frontier AI model weights cannot be ensured by implementing a small number of "silver bullet" security measures. A comprehensive approach is needed, including significant investment in infrastructure and many different security measures addressing different potential risks.
  * There are many opportunities for significantly improving the security of model weights at frontier labs in the short term.
  * Securing model weights against the most capable actors will require significantly more investment over the coming years.



## Recommendations

  * Developers of AI models should have a clear plan for securing models that are considered to have dangerous capabilities.
  * Organizations developing frontier models should use the threat landscape analysis and security level benchmarks detailed in the report to help assess which security vulnerabilities they are already addressing and focus on those they have yet to address.
  * Develop a security plan for a comprehensive threat model focused on preventing unauthorized access and theft of the model's weights.
  * Centralize all copies of weights to a limited number of access-controlled and monitored systems.
  * Reduce the number of people authorized to access the weights.
  * Harden interfaces for model access against weight exfiltration.
  * Implement insider threat programs.
  * Invest in defense-in-depth (multiple layers of security controls that provide redundancy in case some controls fail).
  * Engage advanced third-party red-teaming that reasonably simulates relevant threat actors.
  * Incorporate confidential computing to secure the weights during use and reduce the attack surface.



## Downloads

### Full Document

  * #### [For desktop computers PDF, 1.1 MB ](/content/dam/rand/pubs/research_reports/RRA2800/RRA2849-1/RAND_RRA2849-1.pdf)
  * #### [For mobile devices EPUB, 6.1 MB ](/content/dam/rand/pubs/research_reports/RRA2800/RRA2849-1/RAND_RRA2849-1.epub)
  * #### [For Kindle 1–3 MOBI, 14.2 MB ](/content/dam/rand/pubs/research_reports/RRA2800/RRA2849-1/RAND_RRA2849-1.mobi)



## Related Content

  * [ CommentarySecuring AI Model Weights: Q&A with Sella NevoMay 30, 2024](/pubs/commentary/2024/05/securing-ai-model-weights-qa-with-sella-nevo.html)
  * [ PressRAND Study Highlights Importance of Securing AI Model Weights; Provides Playbook for Frontier AI Labs to Benchmark Security MeasuresMay 30, 2024](/news/press/2024/05/30.html)
  * [ Research SummaryA Playbook for Securing AI Model WeightsNov 21, 2024](/pubs/research_briefs/RBA2849-1.html)
  * [ VideoAI Security: Safeguarding Large Language Models and Why This Matters for the Future of GeopoliticsAug 9, 2024](/pubs/conf_proceedings/CFA2849-1.html)



## Topics

  * [Cybersecurity](/topics/cybersecurity.html)
  * [Machine Learning](/topics/machine-learning.html)
  * [Science, Technology, and Innovation Policy](/topics/science-technology-and-innovation-policy.html)
  * [Threat Assessment](/topics/threat-assessment.html)



## Document Details

  * **Copyright:** RAND Corporation
  * **Availability:** Web Only
  * **Year:** 2024
  * **Pages:** 128
  * **DOI:** <https://doi.org/10.7249/RRA2849-1>
  * **Document Number:** RR-A2849-1



## Citation

### RAND Style Manual

Nevo, Sella, Dan Lahav, Ajay Karpur, Yogev Bar-On, Henry Alexander Bradley, and Jeff Alstott, _Securing AI Model Weights: Preventing Theft and Misuse of Frontier Models,_ RAND Corporation, RR-A2849-1, 2024. As of July 7, 2026: https://www.rand.org/pubs/research_reports/RRA2849-1.html

Copy Text

### Chicago Manual of Style

Nevo, Sella, Dan Lahav, Ajay Karpur, Yogev Bar-On, Henry Alexander Bradley, and Jeff Alstott, Securing AI Model Weights: Preventing Theft and Misuse of Frontier Models. Santa Monica, CA: RAND Corporation, 2024. https://www.rand.org/pubs/research_reports/RRA2849-1.html.

Copy Text [BibTeX](/content/rand/pubs/research_reports/RRA2849-1/_jcr_content/par/product.RRA2849-1.bib) [RIS](/content/rand/pubs/research_reports/RRA2849-1/_jcr_content/par/product.RRA2849-1.ris)

## Research conducted by

  * [RAND Global and Emerging Risks](/global-and-emerging-risks.html)



[Funding for this research](/support-us/philanthropically-supported-research.html) provided by gifts from RAND supporters. The research was conducted by the Meselson Center within [RAND Global and Emerging Risks](/global-and-emerging-risks.html).

This publication is part of the RAND research report series. Research reports present research findings and objective analysis that address the challenges facing the public and private sectors. All RAND research reports undergo rigorous peer review to ensure high standards for research quality and objectivity.

This document and trademark(s) contained herein are protected by law. This representation of RAND intellectual property is provided for noncommercial use only. Unauthorized posting of this publication online is prohibited; linking directly to this product page is encouraged. Permission is required from RAND to reproduce, or reuse in another form, any of its research documents for commercial purposes. For information on reprint and reuse permissions, please visit [www.rand.org/pubs/permissions](/pubs/permissions.html).

RAND is a nonprofit institution that helps improve policy and decisionmaking through research and analysis. RAND's publications do not necessarily reflect the opinions of its research clients and sponsors.

## Version Note

This publication supersedes a previous version published in 2023 (WR-A2849-1). 
