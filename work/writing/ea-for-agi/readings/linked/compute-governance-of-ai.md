---
title: "Computing Power and the Governance of AI | GovAI"
url: https://www.governance.ai/post/computing-power-and-the-governance-of-ai
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by funder-signals/macroscopic-focus-areas; GovAI on compute as a governance lever"
---

# Computing Power and the Governance of AI

### Recent AI progress has largely been driven by increases in the amount of computing power used to train new models. Governing compute could be an effective way to achieve AI policy goals, but could also introduce new societal risks.

‍

###  _Lennart Heim,* Markus Anderljung, Emma Bluemke, Robert Trager_

Research Posts

February 14, 2024

 _This post summarises a new report, “Computing Power and the Governance of Artificial Intelligence.” The full report is a collaboration between nineteen researchers from academia, civil society, and industry. It can be read_[** _here_**](https://bit.ly/CPGAI) _._

_GovAI research blog posts represent the views of their authors, rather than the views of the organisation._

‍

## Summary

Computing power – _compute_ for short – is a key driver of AI progress. Over the past thirteen years, the amount of compute used to train leading AI systems has increased by a factor of 350 million. This has enabled the major AI advances that have recently gained global attention.

_‍_ Governments have taken notice. They are increasingly engaged in _compute governance_ : using compute as a lever to pursue AI policy goals, such as limiting misuse risks, supporting domestic industries, or engaging in geopolitical competition. 

 _‍_ There are at least three ways compute can be used to govern AI. Governments can: 

  * Track or monitor compute to gain **visibility** into AI development and use


  * Subsidise or limit access to compute to shape the **allocation** of resources across AI projects


  * Monitor activity, limit access, or build “guardrails” into hardware to **enforce** rules



Compute governance is a particularly important approach to AI governance because it is feasible. Compute is _detectable_ : training advanced AI systems requires tens of thousands of highly advanced AI chips, which cannot be acquired or used inconspicuously. It is _excludable_ : AI chips, being physical goods, can be given to or taken away from specific actors and in cases of specific uses. And it is _quantifiable_ : chips, their features, and their usage can be measured. Compute’s detectability and excludability are further enhanced by the _highly concentrated_ structure of the AI supply chain: very few companies are capable of producing the tools needed to design advanced chips, the machines needed to make them, or the data centers that house them. 

 _‍_ However, just because compute _can_ be used as a tool to govern AI doesn’t mean that it _should_ be used in all cases. Compute governance is a double-edged sword, with both potential benefits and the risk of negative consequences: it can support widely shared goals like safety, but it can also be used to infringe on civil liberties, perpetuate existing power structures, and entrench authoritarian regimes. Indeed, some things are better ungoverned. 

 _‍_ In our paper we argue that compute is a particularly promising node for AI governance. We also highlight the risks of compute governance and offer suggestions for how to mitigate them. This post summarises our findings and key takeaways, while also offering some of our own commentary.

‍

 _A note on authorship_ : The paper includes 19 co-authors, several of whom work at OpenAI, a company developing state-of-the-art foundation models. This naturally raises concerns that the content of the paper will be biased toward the interests of AI developers. This suspicion is healthy. Further, many of the mechanisms explored in the paper have only seen cursory investigation and given the size of the author group, authorship does not imply endorsement of all the paper’s statements from any author or their respective organisation. We hope that readers will be motivated to closely engage with the paper’s arguments, take little for granted, publicly raise disagreements, and offer alternative ideas. We intend for this paper to provide a basis for continued research and thoughtful examination of the role of compute in AI governance.

‍

## Compute plays a crucial role in AI

Much AI progress over the past decade has resulted from significant increases in the amount of computing power (“compute”) used to train and run AI models. Across large-language models, Go, protein folding, and autonomous vehicles, the greatest breakthroughs have involved developers successfully leveraging huge amounts of computing power to train models on vast datasets to independently learn how to solve a problem, rather than hard-coding such knowledge. In many AI domains, researchers have found [scaling laws](https://epochai.org/blog/scaling-laws-literature-review): performance on the training objective (e.g. “predict the next word") predictably increases as the amount of compute – typically measured in the number of operations (e.g. FLOP) involved – used to train a model increases.

_‍_ Hardware improvements and massively increased investments have resulted in the amount of compute used to train notable AI systems increasing by a factor of 350 million in the past thirteen years. Currently the compute used to train notable AI systems [doubles every six months](https://epochai.org/blog/compute-trends). In the last year alone, Nvidia’s data center revenue nearly [quadrupled](https://www.statista.com/statistics/1120484/nvidia-quarterly-revenue-by-specialized-market/).

_Figure 1: The amount of compute used to train notable AI models has doubled roughly every six months since 2010. Note the logarithmic y-axis. Data from_[ _Epoch_](https://epochai.org/data/epochdb) _._

‍

## Compute governance is feasible

Compute is easier to govern than other inputs to AI. As such, compute can be used as a tool for AI governance. 

 _Figure 2: Summary of the properties that make compute governable._

_‍_ Four features contribute to compute’s governability:_‍_

  *  _Detectability_ : Large-scale AI development is highly resource intensive and therefore detectable, often requiring thousands of specialised chips concentrated in data centers consuming large amounts of power.


  * _Excludability_ : The physical nature of hardware makes it possible to exclude users from accessing AI chips. In contrast, restricting access to data, algorithms, or models is much more difficult.


  * _Quantifiability_ : Compute can be easily measured – e.g. in terms of the operations per second a chip is capable of performing or its communication bandwidth with other chips – making reporting and verification easier.


  * _Concentrated supply chain_ : AI chips are produced via a highly inelastic and complex supply chain. Several key steps, including chip design, manufacturing of fabrication equipment, and chip fabrication, are dominated by a small number of actors – often just one.



_Figure 3: An illustration of the compute supply chain._

_Figure 4: The supply chain for advanced AI chips is unusually concentrated, especially at the design, semiconductor manufacturing equipment, and fabrication steps of the supply chain, but also significantly concentrated at the compute provision layer._

_‍_

## Compute can be used to achieve many different governance goals

The importance of compute to AI capabilities and the feasibility of governing it make it a key intervention point for AI governance efforts. In particular, compute governance can support three kinds of AI governance goals: it can help _increase_ _visibility_ into AI development and deployment, _allocate_ AI inputs towards more desirable purposes, and _enforce_ rules around AI development and deployment. 

 _Figure 5: Ways in which interventions on compute can be used for AI governance. The boxes include examples explored, though not necessarily endorsed, in the paper._

**Visibility** is the ability to understand which actors use, develop, and deploy compute-intensive AI, and how they do so. The detectability of compute allows for better visibility in several ways. For example, cloud compute providers could be required to monitor large-scale compute usage. By applying processes such as [know-your-customer requirements](https://www.governance.ai/research-paper/oversight-for-frontier-ai-through-kyc-scheme-for-compute-providers) to the cloud computing industry, governments could better identify potentially problematic or sudden advances in AI capabilities. This would, in turn, allow for faster regulatory response.

Visibility also raises important privacy concerns. Fortunately, some methods may offer noninvasive insights into compute usage. Data center operators have minimal access to information about their customers’ compute usage, such as the number and types of chips used, when those chips are used, and how much internet traffic is processed through the relevant computing cluster. However, that information can be used to [glean certain insights](https://cdn.governance.ai/Accessing_Controlled_AI_Chips_via_Infrastructure-as-a-Service.pdf). For example, the computational signatures of training and running inference on AI systems tend to differ. Clusters used for inference require constant internet traffic to serve customers, whereas clusters used for training typically access training data hosted locally. 

‍

**Allocation** is the ability to shift AI capabilities among different actors and projects to achieve some end. Once again, features of compute such as excludability and quantifiability offer promising opportunities to govern AI through allocation.

For example, policymakers may seek to differentially advance beneficial AI development by increasing the resources available to certain kinds of beneficial AI research and development. This could include subsidising research into AI applications for climate change mitigation, agricultural efficiency, clean energy, public health, education, or even defence against AI misuse. Compute can also be allocated to actors lacking compute resources, such as academics, startups, or low and middle-income countries._‍_

 _Figure 6: Prioritising development of safety, defensive, and substitute technologies can reduce negative societal impacts from other technologies (often referred to as “differential technological development”). Adapted from_[ _Sandbrink et al. (2022)_](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4213670)_._

Perhaps compute could also be allocated to adjust the pace of AI progress. A large reserve of compute could be procured by a government or an alliance of governments. The reserve could be used to modulate the amount of compute in the economy, influencing the overall pace of AI progress.

‍

Finally, **enforcement** is the ability to respond to violations of norms and laws related to AI, such as reckless development and deployment or certain deliberate misuse. 

One enforcement mechanism discussed in the paper is physically limiting chip-to-chip networking to make it harder to train and deploy large AI systems. For example, the US government’s export controls on high-end AI-relevant chip sales to China aim to hamper Chinese actors’ ability to develop frontier AI models, where (tens of) thousands of chips are orchestrated for one training run. That goal could be met in a more targeted way by exporting chips that can only have high-bandwidth connections with a [sufficiently small number of other chips](https://www.rand.org/pubs/working_papers/WRA3056-1.html). Such chips do not exist today, but [could potentially be developed](https://www.cnas.org/publications/reports/secure-governable-chips). 

A more speculative enforcement mechanism would be preventing risky training runs via multiparty controls. Certain decisions about which AI systems to develop or deploy may be too high-stakes to leave to a single actor or individual. Instead, such decisions could be made jointly by a number of actors or a governing third party. Multisignature cryptographic protocols could be used to share control of a metaphorical “start switch” between many actors. 

The power to decide how large amounts of compute are used could be allocated via digital “votes” and “vetoes,” with the aim of ensuring that the most risky training runs and inference jobs are subject to increased scrutiny. While this may appear drastic relative to the current state of largely unregulated AI research, there is precedent in the case of other high-risk technologies: nuclear weapons use similar mechanisms, called [permissive action links](https://en.wikipedia.org/wiki/Permissive_action_link). 

‍

## Compute governance can be ineffective

Although compute governance _can_ be an effective regulatory tool, it may not always be the right one to use. It is one option among many for policymakers. 

For example, compute governance may become less effective as algorithms and hardware improve. Scientific progress continually [decreases the amount of computing power needed](https://epochai.org/blog/revisiting-algorithmic-progress) to reach any level of AI capability, as well as [the cost to perform any number of computations](https://epochai.org/blog/trends-in-machine-learning-hardware). As the power and cost necessary to achieve any given AI capability decreases, these metrics will become less detectable and excludable. 

The extent to which this effect undermines compute governance largely depends on the importance of relative versus absolute capabilities. Increases in compute efficiency make it easier and cheaper to access a certain level of capability, but as long as scaling continues to pay dividends, the highest-capability models [are likely to be developed by a small number of actors](https://arxiv.org/abs/2311.15377), whose behavior can be governed via compute._‍_

On a related note, compute may be an inappropriate tool to govern low-compute specialised models with dangerous capabilities. For example, AlphaFold 2 achieved superhuman performance on protein folding prediction using fewer than 1023 operations – two orders of magnitude [less compute than models like GPT-4](https://epochai.org/data/epochdb/visualization). Compute governance measures to limit the development models risk also limiting the development of similarly-sized, but harmless, models. In other words, compute governance measures seem most appropriate for risks originating from a small number of compute-intensive models.

‍

## Compute governance can be harmful

Perhaps more importantly, compute governance can also cause harm. Intrusive compute governance measures risk infringing on civil liberties, propping up the powerful, and entrenching authoritarian regimes. Indeed, some things are better ungoverned. 

 _‍_ Certain compute governance efforts, especially those aimed at increasing visibility into AI, may increase the chance that private or sensitive personal or commercial information is leaked. AI companies, users of AI systems, and compute providers all go to great lengths to preserve the integrity of their and their customers’ data. Giving more actors access to such information raises the chance of data leakage and privacy infringement. 

 _‍_ Large concentrations of compute are also an increasingly crucial economic and political resources. Centralising the control of this resource could pose significant risks of abuse of power by regulators, governments, and companies. Companies might engage in attempts at regulatory capture, and government officials could see increased opportunities for corrupt or power-seeking behaviour. 

‍

## Compute governance should be implemented with guardrails

Fortunately, there are a number of ways to increase the chance that compute governance remains effective while reducing unintended harm. Compute governance is one tool among many available to policymakers and it should be wielded carefully and deliberately.

_‍_** _Exclude small-scale AI compute and non-AI compute from governance regimes._**__ Many of the above concerns can be addressed by applying compute governance measures in a more targeted manner; for example, by focusing on the large-scale computing resources needed to develop and deploy frontier AI systems. 

 _‍_** _Implement privacy-preserving practices and technologies_.** Where compute governance touches large-scale computing that contains personal information, care must be taken to minimise privacy intrusions. Take, for example, [know your customer (KYC) regimes for cloud AI training](https://www.governance.ai/research-paper/oversight-for-frontier-ai-through-kyc-scheme-for-compute-providers): applying them only to direct purchasers of large amounts of cloud AI compute capacity would impose almost no privacy burdens on consumers. KYC could also feasibly draw on indicators that are already available – such as chip hours, types of chips, and how GPUs are networked – preserving existing privacy controls for compute providers and consumers.

_‍_** _Focus compute-based controls where ex ante measures are justified._** Compute governance (especially in its “allocation” and “enforcement” forms) is often a blunt tool, and generally functions upstream of the risks it aims to mitigate and the benefits it seeks to promote. Regulatory and governance efforts typically focus on _ex post_ mechanisms, imposing penalties after some undesirable behaviour has occured. Such measures are likely appropriate in dealing with many governance issues arising from AI, especially stemming from inappropriate use of AI systems.

_‍_ However, some harms from AI may justify _ex ante_ intervention. For example, where the harm is so large that no actor would be able to compensate for it after the fact, such as catastrophic or national security risks, _ex ante_ measures would be appropriate.

_‍_** _Periodically revisit controlled compute related policies_. **Regulatory thresholds – such as a training compute threshold of 1026 operations – or list-based controls on technologies – such as those used in export controls – can become outdated fairly quickly as technology evolves. Compute governance efforts should therefore have built-in mechanisms for reviews and updates. 

 _‍_** _Ensure substantive and procedural safeguards_.** Like many government interventions, compute governance efforts could be abused. Measures to control compute should therefore include substantive and procedural safeguards. Substantively, such controls could prevent downsides of compute governance by, for example, limiting the types of controls that can be implemented, the type of information that regulators can request, and the entities subject to such regulations. Procedural safeguards could include such measures as notice and comment rule making, whistleblower protections, internal inspectors general and advocates for consumers within the regulator, opportunities for judicial review, advisory boards, and public reports on activities.

‍

## Conclusion

Compute governance efforts are already underway and compute will likely continue to play a central role in the AI ecosystem, making it an increasingly important node for AI governance. Compute governance can support AI policy goals in multiple ways: by increasing visibility into AI progress, shaping the allocation of AI inputs, and enforcing rules regarding AI development and deployment. At the same time, designing effective compute governance measures is a challenging task. The risks of privacy violations and power concentration must be managed carefully. We hope this paper will help policymakers and scholars scrutinise, rethink, and ultimately improve compute governance proposals.

_* -_ Corresponding author: Lennart Heim <[lennart.heim@governance.ai](mailto:lennart.heim@governance.ai)>

##### Footnotes

##### Further reading
