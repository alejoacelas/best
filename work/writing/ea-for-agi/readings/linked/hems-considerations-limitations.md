---
title: "Considerations and Limitations for AI Hardware-Enabled Mechanisms"
date: 2024-03-10
url: https://blog.heim.xyz/considerations-and-limitations-for-ai-hardware-enabled-mechanisms
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by funder-signals/longview-hems-rfp; Heim on considerations/limits of AI hardware-enabled mechanisms"
---

_These are some thoughts on the considerations and limitations of AI hardware-enabled mechanisms. I’m not claiming exhaustiveness. I expect that the reader has some background on these ideas. Since the initial drafting of this blog post, two papers have been published that discuss hardware-enabled mechanisms in depth:_[__Hardware-Enabled Governance Mechanisms - Kulp et al., 2024__](https://www.rand.org/pubs/working_papers/WRA3056-1.html?ref=blog.heim.xyz) _(where I’m a co-author) and_[ __Secure, Governable Chips - Aarne et al., 2024__](https://www.cnas.org/publications/reports/secure-governable-chips?ref=blog.heim.xyz) _. Both papers discuss my considerations listed here and have reasonable and good policy proposals, in my opinion. This blog post here is mostly aimed at the policy discourse and trying to outline some considerations and limitations._

## Summary

  * I think the current enthusiasm for hardware-enabled mechanisms in AI chips, often also described as _on-chip mechanisms,_ should be tempered.[1] Especially as premature confident advocacy and implementation could have unintended consequences.

  * It is critical to be clear about the specific benefits hardware-enabled mechanisms provide, as their intended purposes might also be achievable via software/firmware. I think their benefits, compared to _sole_ software mechanisms, lie in (a) their potential for enhanced security and resistance to tampering, contingent on correct implementation, and (b) the inherent enforcement of the mechanism from the purchase onward. However, my points (I) and (II) below also apply to mixed or software mechanisms.

  * **(I) Establish a clear chain of reasoning from AI threat models to specific assurances, and from there to the selection of appropriate hardware mechanisms.** Desired assurances regarding AI development and deployment should be based on a comprehensive threat model, which then informs the selection of corresponding hardware mechanisms (threat model → assurances → mechanisms).

  * **(I.a) There’s no mechanism that differentiates ‘good AI’ from ‘bad AI’. Rather, these assurances, and their corresponding mechanisms are wide-ranging** : from influencing the cost of AI model training to delaying deployment, increasing compute costs, or even specific constraints like preventing chips from training models on biological data. The desirability of each assurance is eventually informed by the threat model. Focusing on mechanisms alone comes at the risk of focusing on ineffective or inappropriate assurances.

  * **(I.b) We must examine how these desired assurances align with current strategies, such as export controls or outright bans on certain chips.** _What advantages do hardware mechanisms offer over these existing approaches?_

  * **(I.c) In addition, the AI governance strategy and regime that surrounds these hardware mechanisms requires careful consideration.** _Which existing governance frameworks can support the effective functioning of these mechanisms, and which new strategies might be required?_ It is critical to assess which existing governance frameworks can bolster the efficacy of these mechanisms. Highly invasive mechanisms, such as a US-controlled "remote off-switch," could significantly deter the widespread use of these chips, potentially raising concerns even among NATO allies about dependence and control.

  * **(II) Mechanisms are vulnerable to circumvention, in contrast to not selling chips at all or implementing “hard-coded” or “physical limitations”.** The introduction of mechanisms for disabling or throttling on-chip components significantly expands the attack surface. Unlike methods where physical features are absent or where chips are not exported, for a mechanism that disables or throttles a feature, the regulated features need to be present on the hardware, and can therefore be theoretically circumvented and/or tampered.

  * **(III) The introduction of governance mechanisms via hardware can have a long lead time if it relies on the production and adoption of new chip generations.** Depending on the mechanisms, the chips must first gain a significant market share (in terms of a share of global compute power).

  * Beyond the arguments above, there is a wide range of crucial considerations and limitations of focusing on compute as a governance node: (a) factors that impact the governability of compute itself and (b) those that reduce the importance of compute for AI systems — see [this blog post](https://blog.heim.xyz/crucial-considerations-for-compute-governance/).




* * *

  1. See [Aarne et al., 2024](https://www.cnas.org/publications/reports/secure-governable-chips?ref=blog.heim.xyz) and [Kulp et al., 2024](https://www.rand.org/pubs/working_papers/WRA3056-1.html?ref=blog.heim.xyz) for more on hardware-enabled mechanisms. (They are not meant as samples for premature advocacy. They are well balanced papers.) ↩︎




## Introduction and Background

The integration of hardware mechanisms within AI chips is currently of considerable interest in the field of AI Governance and Policy.[1] However, I claim that this interest should be tempered with careful consideration of the potential implications of such mechanisms. Rapid adoption without sufficient scrutiny could lead to outcomes that are counterproductive to the intended goals.

The benefits of implementing hardware mechanisms as opposed to software or firmware alternatives warrant clear articulation. (i) First, while certain controls could be achieved with software solutions, hardware-based approaches often offer potential superior security due to their increased resistance to tampering.[2] (ii) Second, these mechanisms are enforced upon the acquisition of the chip, establishing built-in controls from the start.

It is equally important to evaluate the assurances provided by hardware mechanisms, weigh their associated costs, and consider the security implications they introduce — extending beyond mere technical considerations. For example, highly invasive mechanisms, such as a US-controlled "remote off-switch," could significantly deter the widespread use of these chips, potentially raising concerns even among NATO allies about dependence and control.

Below, I outline four considerations and limitations of hardware-enabled mechanisms:

  1. Clarifying Assurances and Strategic Applications of Hardware-Enabled Mechanisms
  2. Mechanisms are Vulnerable to Circumvention
  3. Prolonged Lead Times in Hardware Mechanism Rollouts
  4. Broader Considerations for Compute Governance



## I. Clarifying Assurances and Strategic Applications of Hardware-Enabled Mechanisms

The discourse surrounding hardware mechanisms for AI chips is often oversimplified towards a binary understanding of AI systems, suggesting a straightforward mechanism capable of discerning 'good' AI from 'bad.' However, this perspective is reductive, overlooking the complex nuances that differentiate desired AI applications from those deemed undesirable. The challenge extends beyond this categorization, where the implications of technical parameters on AI's development and deployment become a central consideration.[3]

  
**Figure 1: Illustration of the relationship between threat models, assurances, and corresponding hardware mechanisms.** The examples provided here are simplified, probably not real, and do not encompass the full complexity of potential assurances, such as the implications of deploying smaller AI systems or the economic prerequisites for training future frontier AI systems.

**(a) First, identifying the types of assurances we seek from AI hardware mechanisms requires a comprehensive AI threat model.** Such assurances might range from influencing the cost of AI model training to delaying deployment, increasing compute costs or even specific constraints like preventing chips from training models on biological data or beyond a certain computational size. Recognizing these diverse requirements is crucial, as each assurance might necessitate distinct mechanisms.

For instance, while halting an adversary's ability to train a model comparable to GPT-4 may be a common desire, it is essential to understand that such interventions typically impose additional costs rather than an absolute stop (a “cost penalty” or “imposition”). Therefore, the question often becomes how much more onerous we can make it for them to develop such models. Moreover, the focus should extend beyond the one-time action of training. It should consider the deployment and diffusion of AI systems throughout the economy, which are influenced by compute capacities and, arguably, easier to impact than preventing the training of a system entirely. If an entity can train an advanced system, assuming it has already monetized other systems, found substantial economic adoption, or learned research insights from existing deployments—all facilitated by compute—then the control of the total compute available and its cost becomes even more important.

**(b) We must examine how these desired assurances align with current strategies, such as export controls or outright bans on certain chips.** What advantages do hardware mechanisms offer over these existing approaches? For instance, do they enable less intrusive governance that allows for continued marketability of AI chips? Are they a precursor to domestic regulations that would necessitate the deployment of certain hardware features? There is a real possibility that even with successful hardware mechanism deployment, a bifurcation of product lines may arise, with "on-demand" products catering exclusively to certain markets, potentially undermining the broader goal of universal hardware safeguards.

In considering the target chips of hardware mechanisms, we should deliberate on which devices to target. Should they be applied to chips within regulatory "gray zones," to consumer GPUs currently exempt from controls, or should they enable the export of chips previously above the threshold under new regulatory conditions?

**(c) The broader AI governance strategy that surrounds these hardware mechanisms needs careful consideration.** Which existing governance frameworks can support the effective functioning of these mechanisms, and which new strategies might be required? Could there be a role for data centers inspections to ensure hardware integrity, or might there exist opportunities for shared data centers in geopolitically neutral locations?[4]

## II. Mechanisms are Vulnerable to Circumvention

The introduction of mechanisms for disabling or throttling on-chip components (via on-demand or other lock mechanisms) significantly broadens the potential for exploitation due to the expanded attack surface. **Unlike methods where physical features are absent or where chips are not exported, for a mechanism that disables or throttles a feature, the regulated features need to be present on the hardware.** In contrast to "hard-coded" mechanisms or inherent attributes, dynamic mechanisms inherently possess the required hardware features, making them susceptible to circumvention. For example, to limit chip-to-chip interconnect capabilities, one could simply reduce the available lanes and avoid installing high throughput IO ports. In contrast, a chip designed to enable or disable features on demand must include all the physical components, regardless of their current use status.

Consider the "offline licensing" approach, where a chip contains its full computational potential, but access to this potential is regulated by licensing. If the licensing mechanism is bypassed, the chip's entire power becomes accessible, negating the intended restrictions. Similarly, the "fixed set" approach allows for full-speed communication within a predefined set of chips but restricts it externally. However, if the mechanism enforcing this restriction is compromised, the communication limitations are rendered ineffective.[5] I see the following primary threats:

  1. **Circumvention of Managed Features** : The essential hardware features are integrated into the chip or board. If the on-demand feature is bypassed, the full capabilities become exploitable.
  2. **Compromise of Lock/Unlock Function** : The functionality of flexible mechanisms requires a secure lock/unlock process, which suggests that an entity holds a private key for access. This entity, as the custodian of such a critical key, becomes a prime target for cyber-attacks, risking key leakage.[6]
  3. **Obsolescence of Restrictions** : The choice of what the mechanism restricts becomes an ineffective proxy for risk mitigation. This could happen as a result of a new paradigm of AI that has a different computational profile.



For a comprehensive list of mechanisms that have been compromised, often those relying on on-demand features, see ~~the Appendix~~ PM me.

## III. Prolonged Lead Times in Hardware Mechanism Rollouts

Implementing governance mechanisms through hardware necessitates the production and distribution of new chip generations, a process that takes time. For such mechanisms to become influential in the global compute distribution, they must be widely adopted and constitute a significant portion of the world’s computational power.

The effectiveness of hardware-based interventions is closely tied to the pace of technological advancement. Historically, the rapid pace of progress in computational performance has led to older generations becoming quickly obsolete. However, should this pace decelerate, the desire to upgrade to new hardware diminishes, potentially undermining the governance mechanisms embedded within newer chips.

Assessing when to initiate the implementation of governance mechanisms—and the advocacy thereof—is essential for timely and effective intervention. This also helps to understand the impact of legacy chips (i.e., their total compute capacity retained through previous generations of hardware still in operation) which do not have the desired mechanisms and can therefore be used for potential evasion.[7]

  
**Figure 2: Projected Distribution of AI Compute Capacity by Chip Generation.** This stacked area chart models the distribution of AI compute capacity in data centers, segmented by chip generations over time since NVIDIA's V100 release. Assumptions include hardware performance improvements and an extrapolation of NVIDIA's reported revenue growth in AI chip sales. Note: The numerical values are approximations and should be interpreted with caution.

## IV. Broader Considerations for Compute Governance

Beyond the arguments we explored in this blog post, which are special to hardware mechanisms, there are a wide range of crucial considerations and limitations of focusing on compute as a governance node. Despite the significant role compute plays in AI, many arguments contest its importance, suggesting that the governance capacity that compute enables can change. We differentiate between factors that impact the governability of compute itself and those that reduce the importance of compute for AI systems. See [this blog post](https://blog.heim.xyz/crucial-considerations-for-compute-governance/) for a discussion of the considerations and limitations.

* * *

  1. I do not want to call out anyone in particular here. ↩︎

  2. Compared to software/firmware vulnerabilities, the cost of compromising device might scale with the number of devices. (A software vulnerability could allow one to basically scale “for free”.) ↩︎

  3. Determining what 'good' AI functionality entails, and what falls under the umbrella of 'bad' or undesirable, is not a trivial matter. Such definitions require a nuanced investigation of AI's roles across different sectors, acknowledging its capacity as a [general-purpose technology](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7999C41177B0C2A7084BD3C1EAC0E219/S2057563723000019a.pdf/engines-of-power-electricity-ai-and-general-purpose-military-transformations.pdf?ref=blog.heim.xyz). ↩︎

  4. This discussion should extend to the various models of AI governance that exist or are proposed, from unilateral controls to collaborative international agreements and standards. Potential models include bilateral arms control agreements, joint development projects akin to a "CERN for AI," or the establishment of an "IAEA for AI" to synchronize multilateral AI standards. Each of these governance models presents unique challenges and opportunities when considered in conjunction with hardware mechanism implementation. ↩︎

  5. For example, for the “fixed set” proposal, one could: (i) unlock the ability of higher bandwidth communication outside the pod, or (ii) decouple GPUs from the pod, potentially allowing for scaling within the pod or other pods. ↩︎

  6. See [MSI](https://arstechnica.com/information-technology/2023/05/leak-of-msi-uefi-signing-keys-stokes-concerns-of-doomsday-supply-chain-attack/?ref=blog.heim.xyz) and [Intel](https://twitter.com/matrosov/status/1654560343295934464?s=46&t=y2nBrOoPSzKE4q4riRfxOA&ref=blog.heim.xyz) recently, and many other incidents of private signing keys or code generations getting leaked. Nvidia's significant [data](https://semianalysis.substack.com/p/nvidia-hacked-a-national-security?s=r&ref=blog.heim.xyz) [breach](https://www.bloomberg.com/news/articles/2022-03-01/nvidia-says-hackers-stole-data-from-network-and-posted-it-online?ref=blog.heim.xyz) in 2022 further exemplifies this. ↩︎

  7. Governance interventions could avoid this issue: a multilateral agreement could involve replacing unrestricted hardware and credibly demonstrating that the only remaining accessible compute implements appropriate controls. ↩︎



