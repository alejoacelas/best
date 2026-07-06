---
title: "Request for Proposals on Hardware-Enabled Mechanisms (HEMs) - Longview Philanthropy"
url: https://www.longview.org/request-for-proposals-on-hardware-enabled-mechanisms-hems-for-ai-verification/
fetched: 2026-07-06
via: html2text
topic: "funder-signals"
note: "Longview RFP on hardware-enabled mechanisms for AI verification — a funder catalyzing a specific technical-governance frontier"
---

#  Request for Proposals on Hardware-Enabled Mechanisms (HEMs) 

Please note that this RFP is now closed and will no longer be accepting submissions.

Longview Philanthropy advises donors on opportunities to combat threats from artificial intelligence, pandemics, and nuclear weapons. We’re particularly interested in [building new technologies](https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html) to solve these problems. 

One such technology is [hardware-enabled mechanisms](https://www.rand.org/pubs/working_papers/WRA3056-1.html) (HEMs): modifications to AI hardware, or the software that runs on it, which could make it easier to verify the uses of that hardware. For example, a [location verification](https://www.iaps.ai/research/location-verification-for-ai-chips) mechanism could allow AI chips to reliably attest to their location, enabling more effective enforcement of American export controls on AI chips. Similarly, if the US and China wanted to agree on a treaty to avoid an AI arms race, hardware-enabled mechanisms could enable verification of that agreement. These mechanisms can protect user privacy and freedom through technical mechanisms such as zero-knowledge proofs while addressing critical risks to national and international security.

We’d like to support technical research on hardware-enabled mechanisms for AI verification. We expect to award between $2M and $10M in funding through this RFP. We’re interested in funding the following kinds of work:

  * Designs and prototypes of HEMs, such as location verification and secure bandwidth limiters
  * Retrofittable enclosures for securing HEMs against tampering
  * Red-teaming of new and existing hardware security mechanisms
  * A focused research organization building FlexHEGs
  * Workshops and conferences to support the HEM research community



If you are considering applying, we strongly encourage you to [submit a brief expression of interest](https://forms.gle/BVZKiU8cu867fuFq5) as soon as possible.You do not need a fully developed plan in order to submit an expression of interest; we will reach out to strong candidates and work with you to develop a research plan and/or pair you with potential collaborators. We’re planning to leave this RFP open until **June 6th 2025** , and we will assess applications as soon as they arrive.

# Table of Contents

  * Motivations
  * Areas of Interest
    * Designs and prototypes of HEMs
      * Location Verification
      * Offline Licensing
      * Bandwidth Limiters for Accessing Model Weights
      * Analog Sensors for Workload Verification
      * Other HEMs
    * Tamper Resistance Measures
      * Threat model
      * Funding priorities
    * Adversarial Testing
      * Funding priorities
      * How should adversarial testing be structured?
    * Focused Research Organization (FRO) for FlexHEGs
    * Field-Building for HEMs
  * Evaluation Criteria
  * Application Process



# Motivations

National security threats from artificial intelligence. Recent progress in AI development has been driven by foundation models trained with growing amounts of data and compute which develop broad capabilities across a wide range of domains. Researchers have pointed out that these systems are often dual-use, with applications in both civilian and military contexts ([Bengio et al., 2024](https://www.science.org/doi/10.1126/science.adn0117)). For example, current AI systems show precursors of dangerous capabilities in conducting cyberattacks ([Fang et al.](https://arxiv.org/abs/2406.01637), 2024; [NCSC](https://www.ncsc.gov.uk/report/impact-of-ai-on-cyber-threat#:~:text=AI%20lowers%20the%20barrier%20for,over%20the%20next%20two%20years.), 2024) and developing chemical or biological weapons ([Bran et al.](https://arxiv.org/abs/2304.05376), 2023; [Amodei](https://www.judiciary.senate.gov/imo/media/doc/2023-07-26_-_testimony_-_amodei.pdf), 2023; [OpenAI](https://openai.com/index/building-an-early-warning-system-for-llm-aided-biological-threat-creation/?utm_source=substack&utm_medium=email#design-principles), 2024). AI systems themselves could pose national security threats if developers fail to control fully autonomous AI systems ([Bengio et al. 2024](https://assets.publishing.service.gov.uk/media/6716673b96def6d27a4c9b24/international_scientific_report_on_the_safety_of_advanced_ai_interim_report.pdf#page=51)). These threats motivate the need to defend against malicious use of AI chips ([Hendrycks et al. 2025](https://www.nationalsecurity.ai/chapter/nonproliferation#firmware-level-features)). 

Security requirements for frontier AI development. AI developers spend hundreds of millions of dollars training the weights of neural networks. Yet these weights are simple files that could be stolen and easily repurposed, compromising the massive investment required to create them. Hardware security could help secure AI model weights against theft. For this reason, US export controls [require](https://www.federalregister.gov/d/2025-00636/p-360) that frontier model weights stored in certain countries be only accessible through well-defined APIs that prevent unauthorized direct access to model weights, even by insiders. Looking forward, researchers have [proposed](https://www.rand.org/pubs/research_reports/RRA2849-1.html) that model weights and gradients should be encrypted during communication between chips, only to be decrypted by the chip that is intended to receive them. AI labs are thus increasingly [interested in hardware security](https://openai.com/index/reimagining-secure-infrastructure-for-advanced-ai/), and are [hiring](https://jobs.coatue.com/companies/openai/jobs/46666962-hardware-security-engineer-trusted-computing-and-cryptography) for it. Further advances in hardware security could thus help secure the intellectual property of frontier AI developers. 

Threats of an AI arms race. Similar to the development of nuclear weapons, AI’s military potential could fuel geopolitical competition that threatens national security and global stability. Countries have already begun to invest in AI military capabilities; the United States [Department of Defense](https://www.govconwire.com/2024/01/openai-lifts-military-ban-opens-doors-to-dod-for-cybersecurity-collab/) contracts with OpenAI, and China has made it a national priority to lead the world in AI by 2030. But an escalating AI arms race is not inevitable. Indeed, nuclear non-proliferation has been [reasonably successful](https://asteriskmag.com/issues/03/the-puzzle-of-non-proliferation), with no nuclear attacks since 1945 and only nine countries with nuclear weapons capabilities today. The US and China have committed to not deploy AI systems in nuclear command and control. However, agreements on AI will be difficult to reach if they cannot be trusted. For these words to have staying power, we will need new mechanisms that allow us to “trust, but verify.” 

Hardware-enabled mechanisms (HEMs) can address AI threats. Hardware is a scarce, critical input for AI development ([Sastry et al., 2024](https://arxiv.org/pdf/2402.08797)), so governing the use of AI chips could help govern AI development writ large. One unique benefit of governing chips is they can verify and enforce compliance with rules about their own use ([Kulp et al., 2024](https://www.rand.org/pubs/working_papers/WRA3056-1.html); [Aarne et al. 2024](https://s3.us-east-1.amazonaws.com/files.cnas.org/documents/CNAS-Report-Tech-Secure-Chips-Jan-24-finalb.pdf); [O’Gara et al. 2025](https://arxiv.org/abs/2505.03742)). For example, iPhone hardware aims to prevent users from installing and running apps not found on the App Store. Nvidia restricts the performance for mining cryptocurrency of some of its GPUs in order to ensure the availability of GPUs for gaming. These rules are enforced by standard hardware security features, and similar systems could be built to verify the uses of AI hardware. 

Examples of hardware-enabled mechanisms for AI verification include:

  * Location Verification: A mechanism that allows a chip to determine and verify its own geographic location to enforce regional restrictions on hardware use. See [Brass and Aarne (2024)](https://www.iaps.ai/research/location-verification-for-ai-chips). 
  * Offline Licensing: A system that requires chips to obtain and maintain valid licenses from trusted verifiers to operate offline at full performance, with performance degrading after a set number of clock cycles or operations without license renewal. See [Petrie (2024)](https://arxiv.org/abs/2404.18308) and [Kulp et al. (2024)](https://www.rand.org/pubs/working_papers/WRA3056-1.html). 
  * Interconnect Verification: Mechanisms for verifying the number of chips connected with high bandwidth and the amount of communication between them, in order to verify whether developers are using chips for large-scale training runs requiring high bandwidth communication between many devices. See [Kulp et al. (2024)](https://www.rand.org/pubs/working_papers/WRA3056-1.html).
  * Workload Attestation: A system enabling chip owners to make verifiable claims about the computations performed on their hardware while preserving privacy and intellectual property. See [Shavit (2023)](https://arxiv.org/abs/2303.11341) and [Choi et al. (2023)](https://arxiv.org/abs/2307.00682). 



Over time, hardware-enabled mechanisms could be built to be [flexible](https://flexheg.com/), enabling verification of a wide range of potential AI activities without significant extra work for each new activity. Alternatively, HEMs could be [narrowly tailored](https://blog.heim.xyz/considerations-and-limitations-for-ai-hardware-enabled-mechanisms/) to verify specific properties, which might be technically easier and more desirable. There are meaningful [limitations](https://www.rand.org/content/dam/rand/pubs/working_papers/WRA3000/WRA3056-1/RAND_WRA3056-1.pdf#page=21) on the potential for HEMs to verify the uses of AI hardware, but there is also significant [upside](https://www.cnas.org/publications/reports/secure-governable-chips).

Protecting personal privacy and freedom. National security threats must be combatted without sacrificing personal privacy or freedom. Hardware-enabled mechanisms can be designed to achieve both of these goals, by verifying information about a chip’s use that is critical to national security while preserving the privacy of all other information. For example, HEMs for export control enforcement must identify the country where a chip is located, while preserving the privacy of a chip’s precise location. We therefore strongly prioritize funding for research that uses decentralized or local verification and enforcement for policy compliance, prevents side channel attacks, and offers clear assurances of privacy for users. 

# Areas of Interest

We’re interested in supporting technical research that evaluates and improves the viability of hardware-enabled mechanisms for AI verification. We’re open to considering any proposals that do this, but we’re primarily interested in supporting the following five kinds of work:

  * Designs and prototypes of HEMs
  * Retrofittable enclosures for securing HEMs against tampering
  * Red-teaming of new and existing hardware security mechanisms
  * A focused research organization building FlexHEGs
  * Workshops and conferences to support the HEM research community



## Designs and prototypes of HEMs

We’re interested in funding designs and prototypes of hardware-enabled mechanisms for AI verification that could be implemented within the next 1-5 years. As such, we prioritize mechanisms that can be deployed via firmware updates or retrofitted onto existing chips rather than those requiring entirely new hardware design cycles. Because HEMs may be used in high-stakes contexts and may face hacking attempts from nation state actors, we also will prioritize designs which could provide strong security against tampering. We are particularly interested in the following mechanisms.

### Location Verification

Location verification would allow chips to reliably attest to their physical location, enabling more effective enforcement of export controls and other location-based AI policies.

A recent literature review found that while there are GPS and network-based geolocation methods, they may be easily spoofed, undermining their reliability for security applications [(Brass, 2024)](https://www.iaps.ai/research/location-verification-for-ai-chips). Instead, ping-based geolocation may be the most promising approach for secure location verification. This method works by having servers in known locations send pings to the chip, with the chip’s response times used to triangulate its physical location. Recent [US export controls](https://www.federalregister.gov/documents/2025/01/15/2025-00636/framework-for-artificial-intelligence-diffusion) suggest that data center operators could demonstrate compliance with export controls by showing “ping times to nearby secure servers.”

We’d like to fund a comprehensive prototype of ping-based geolocation for frontier AI hardware. Successful projects should establish landmark servers in strategic locations, implement secure communication protocols with leading Nvidia GPUs, demonstrate location accuracy within policy-relevant margins of error (approximately 100-500km), and provide robust protection against sophisticated spoofing attacks. The prototype should demonstrate feasibility at scale across data centers. Ideally, proposals would either develop an open-source implementation that allows others to build upon it, or come from organizations capable of providing location verification as a service to AI chip owners or data center operators. 

An initial prototype for this mechanism has been developed (see [here](https://ping-location.info/)), but several important research questions remain. First, location accuracy could be improved by investigating alternative signal sources like satellite networks or by better leveraging existing network topology information. Second, latency could be reduced (e.g. under 5ms). Third, this implementation trusts the CPU, but this assumption could be removed by signing directly in Nvidia hardware or developing secure PCIe forwarding techniques that establish encrypted communication channels between the GPU and remote landmark servers. Finally, the security of this system against key extraction attacks must be assessed, as well as the accuracy of location estimates when facing timing delay attacks. We are in touch with the prototype developers and could potentially facilitate collaborations.

As a lower priority, we’re also open to non-ping-based methods of secure geolocation, and non-internet based forms of ping-based geolocation (e.g., via Starlink) that might offer unique advantages in reliability or resilience to manipulation. The goal of this work should be to create a reliable technical foundation for the geolocation of AI chips that could immediately be deployed at scale.

### Offline Licensing

AI chips could be designed to require a valid, cryptographically-signed license to operate at full capacity. Without a valid license, chips would automatically throttle performance or disable key capabilities. Combined with location verification, this could allow automatic enforcement of export controls by denying licenses to chips located in restricted countries.

Offline licensing has been explored by [Kulp et al. (2024)](https://www.rand.org/pubs/working_papers/WRA3056-1.html) and [Petrie (2024)](https://arxiv.org/abs/2404.18308). We’re seeking to fund prototypes of their designs, or new designs that address flaws or ambiguities in their approaches. We strongly prefer proposals that demonstrate compatibility with current Nvidia hardware and thus can be rolled out as soon as possible. 

Specific questions that could be addressed in future research include: 

  * Prototyping: Can offline licensing be implemented on current leading Nvidia GPUs? What prototypes would best demonstrate the feasibility of this goal? 


  * Key management: Private keys will be needed to sign and issue cryptographic licenses. How should those keys be stored and secured to protect against sabotage? 


  * Future hardware design: How could next-generation chips be designed and manufactured to enable offline licensing? 



### Bandwidth Limiters for Accessing Model Weights

We’re interested in funding the development of secure rate limiters to prevent unauthorized exfiltration of AI model weights. Modern foundation models consist of hundreds of gigabytes of parameter data, which can be [secured](https://www.alignmentforum.org/posts/rf66R4YsrCHgWx9RG/preventing-model-exfiltration-with-upload-limits) by limiting the bandwidth of outbound communications from the device where model weights are stored. While basic bandwidth limitations are straightforward to implement in software, creating systems that remain secure against determined attackers is challenging. Attackers could be nation states intent to steal model weights from a private AI developer, or an insider at an AI company with privileged access to internal systems. These mechanisms are increasingly important as US export controls now [require](https://www.federalregister.gov/d/2025-00636/p-359) rate limitations for foundation model weights in certain locations.

To fulfill these goals, we’re seeking proposals for both direct development of robust rate-limiting implementations and builder-breaker competitions to test their security. Direct development should focus on tamper-resistant solutions compatible with existing AI infrastructure, while competitions would pit defenders implementing rate limiters against attackers attempting to circumvent them, potentially with substantial incentives. Both approaches would help establish industry standards and provide onlookers with practical insights into the effectiveness of these protective measures.

### Analog Sensors for Workload Verification

Drawing on the literature on side-channel attacks (e.g. [Kocher et al. (1999)](https://paulkocher.com/doc/DifferentialPowerAnalysis.pdf), [Gandolfi et al. (2001)](https://link.springer.com/chapter/10.1007/3-540-44709-1_21)), we’re interested in research on using analog sensors to monitor AI workloads. These systems would measure physical signals like power consumption, electromagnetic emissions, or thermal output to estimate key metrics such as clock cycles or distinguish between training and inference workloads. The sensors could be new devices placed in data centers (e.g. power draw monitors) or existing components of the stack (e.g. baseboard management controllers or NICs modified to securely log their own activity). Such systems could be deployed as standalone monitoring solutions or as backup verification mechanisms alongside other hardware-enabled governance approaches, enhancing the overall security and reliability of compute governance frameworks. They should only capture information that is necessary for specific policy goals, and offer assurances of privacy for all other info. We particularly welcome proposals that demonstrate practical implementations on current AI hardware.

### Other HEMs

Our top priorities in designing and prototyping HEMs are the four examples mentioned above, but we’re also open to research on other kinds of HEMs, such as:

  * Interconnect Verification. Interconnect verification mechanisms verify the number of chips connected with high bandwidth and the amount of communication between them. Secure bandwidth limiters, as described above, are one kind of interconnect verification mechanism. While we’re most interested in the secure bandwidth limiters described earlier, we’re open to other approaches. [Kulp et al. (2024)](https://www.rand.org/pubs/working_papers/WRA3056-1.html) described a “Fixed Set” approach where chips can only communicate at high bandwidth with a predefined set of other chips. A more flexible alternative would be a “Dynamic Set” approach allowing approved modifications to these communication permissions. This could use encrypted interconnect protocols or networking components such as NICs and switches to verify and enforce cluster configuration limits, including the number of AI chips connected and the bandwidth between them. Further, systems could reconstruct and validate the network graph of communications between chips. We welcome designs and prototypes of these or other approaches.
  * Workload Attestation. Workload attestation mechanisms allow chip owners to make verifiable, privacy-preserving claims about the computations performed on their hardware. This could include attesting to the amount of compute used, model characteristics, or safety evaluation performance without revealing sensitive intellectual property. For example, existing hardware devices could securely log information about their own workloads. We previously described analog sensor approaches to workload monitoring, but we’re also interested in digital attestation mechanisms. Previous work on this topic includes approaches described by [Shavit (2023)](https://arxiv.org/abs/2303.11341), [Heim et al. (2024)](https://arxiv.org/abs/2403.08501), and the [FlexHEG](https://yoshuabengio.org/wp-content/uploads/2024/09/FlexHEG-Interim-Report_2024.pdf) framework.



The possibility of hardware backdoors could be a significant barrier to trust in HEMs. While we do not prioritize direct work on detecting or implanting backdoors, we would be interested in funding survey research or position papers that aim to describe the problem of backdoors in the context of HEMs, review options for addressing the problem, and develop overall views on the difficulty of this challenge. 

## Tamper Resistance Measures

If HEMs are deployed, they will be under the physical control of actors who might be incentivized to tamper with them. We’re therefore interested in funding the development of anti-tampering measures that can secure hardware-enabled mechanisms against both physical and software-based attacks.

### Threat model

Aarne et al. (2024) classifies adversaries into three categories. Minimal adversaries, such as typical private companies, are generally not actively looking for ways to break rules. Overt adversaries, like rivalrous nation states, may openly attempt to break rules with little concern for being caught. Between these extremes are covert adversaries, who will try to break rules without getting caught, but are highly concerned about detection. We believe the behavior of minimal adversaries can be verified without the use of HEMs, while overt adversaries likely cannot be prevented from successfully tampering with HEMs. Covert adversaries, however, represent a sweet spot for technical interventions: if we can minimize the probability of successful tampering or maximize the probability of detection, we can effectively deter them from attempting tampering in the first place.

Preventing tampering does not have to be solely a technical endeavor. HEMs could be complemented by data center inspections, tamper-proof cameras, rules against transporting chips or taking them offline, and diplomatic consequences for suspected tampering. While adversaries may be formidable, HEMs do not need to be technically invulnerable. They only need to raise the costs of tampering to the point where it’s less attractive than alternatives, including by resisting tampering, detecting and responding to it, and leaving evidence of attempted tampering. HEMs could thus deter tampering without being fully tamper-proof. 

### Funding priorities

We’re interested in funding the development of secure enclosures for GPUs that are fully retrofittable to leading Nvidia GPUs with minimal performance penalties. Key design questions include determining the optimal security boundary (single chip, PCB, tray, or rack level), cooling compatibility (both air and liquid cooling systems), and balancing security with maintenance needs. 

We’re also interested in mechanisms for tamper detection, tamper response, and tamper evidence. Detecting tampering could involve capacitive or resistive mesh sensors embedded in the enclosure, monitoring electrical properties that change when the enclosure is breached. Tamper response mechanisms might include systems that securely erase cryptographic keys or disable critical components when unauthorized access is detected. For scenarios where immediate response isn’t required, tamper-evident approaches using specialized seals or Physically Unclonable Functions (PUFs) could provide verifiable evidence of tampering attempts during inspections. Together, these mechanisms could deter tampering by raising the likelihood and costs of detection.

Established standards like FIPS 140-3 can provide a good starting point, but we think strongly securing AI accelerators will require novel research. Beyond direct work on evaluating and improving security today, we’d also welcome proposals to scope out the work needed for a larger effort (e.g. a DARPA program) on tamper resistance. 

## Adversarial Testing

We’d like to fund rigorous adversarial testing for vulnerabilities in both existing hardware security mechanisms (e.g., secure memory, secure boot, trusted execution environments) and new hardware-enabled mechanisms (e.g., location verification, bandwidth limiters, secure physical enclosures). Our goal is to either identify security vulnerabilities in these mechanisms or credibly demonstrate their resilience against sophisticated attacks.

### Funding priorities

Many different hardware-enabled mechanisms for AI verification will depend on common building blocks of hardware security. For example, offline licensing requires a chip to store a cryptographic key that cannot be overwritten by the chip owner, while also requiring secure boot. We’re interested in funding research to evaluate these common building blocks in leading AI chips (e.g., Nvidia H100s). This includes evaluating the security of non-volatile memory components that could store secret keys, as well as trusted execution environments, remote attestation mechanisms, and especially secure boot. We’re particularly interested in identifying hardware-level vulnerabilities that cannot be patched after a chip has been manufactured and must be fixed in the next generation of chip designs. 

Beyond evaluating existing security features, we want to support comprehensive vulnerability testing of newly developed mechanisms described in previous sections. This could include location verification systems, tamper-resistant enclosures, and rate limiters. Anyone interested in adversarially testing these devices must be able to work in close coordination with the researchers developing them. 

### How should adversarial testing be structured?

We see three kinds of models for funding this adversarial testing work:

  * Funding dedicated teams to try to break new and existing hardware security mechanisms. 
  * Funding closed competitions where teams apply to participate, are vetted for meaningful expertise, and are provided significant time and resources to conduct adversarial testing.
  * Funding someone to run open competitions where anyone can compete to break a hardware security mechanism. 



We’re open to any of these approaches. We’re looking for proposals that will successfully identify vulnerabilities and/or credibly demonstrate the absence of vulnerabilities to observers, including non-technical observers. Perhaps the ideal application would be from an organization or team with significant experience adversarial testing hardware security mechanisms that wanted to run their own attacks, plus run several adversarial testing competitions over time, covering both existing and new hardware security mechanisms, and engaging with world-class well-resourced hardware security experts to see if they can break these mechanisms. 

## Focused Research Organization (FRO) for FlexHEGs

We’re exploring the possibility of providing seed funding for a [Focused Research Organization (FRO)](https://fas.org/publication/focused-research-organizations-a-new-model-for-scientific-research/) to develop Flexible Hardware-Enabled Guarantee (FlexHEG) mechanisms for AI verification.

FlexHEGs are a proposed family of ambitious hardware-enabled mechanisms described in [these reports](https://flexheg.com/). A FlexHEG would consist of a secure processor within a tamper resistant enclosure that can locally enforce a flexible variety of policies on a chip. For example, a FlexHEG could verify that adversaries have not tampered with an AI training run, or that AI chips shipped abroad are not used for the development of weapons of mass destruction. FlexHEGs are privacy-preserving by design, ensuring the confidentiality of local information. The proposed design is highly ambitious, requiring many person-years of development to build and secure. 

A Focused Research Organization would unite these development efforts under a single roof with dedicated staff working full-time toward building and testing FlexHEG implementations. The FRO could be seeded with an initial grant of $2M to $10M, with the goal of producing working FlexHEGs within 2-3 years. This concentrated approach would allow for hiring in-house engineers and researchers with the specialized expertise needed to solve the interdependent hardware, firmware, and security challenges while maintaining the public-interest focus essential for international verification mechanisms.

We’re looking for individuals who could form or join the founding team of this effort. We’re particularly interested in people with industry experience in hardware design, manufacturing, and security who have worked on developing complex security-critical systems. If you have relevant experience and might be interested in being part of this initiative, please include details about your background in your application, along with any thoughts or questions you have about this approach.

## Field-Building for HEMs

We’re interested in funding workshops and conferences that bring together researchers working on hardware-enabled mechanisms for AI verification. By connecting experts and funders from hardware security, cryptography, AI safety, machine learning, and government—fields that don’t typically interact—we aim to accelerate progress in HEM development. These events would provide forums for researchers to present work, critique designs, and establish collaborations that might not otherwise form. We welcome proposals for organizing such events from individuals or institutions with the connections to attract diverse participants.

# Evaluation Criteria

Proposals will be holistically evaluated for their potential to reduce catastrophic risks from advanced AI through advancing technical research on HEMs. We are open to applicants from all countries and all types of organizations, including individuals, academics, non-profits, and for-profits. Specific criteria include:

  * Technical Feasibility: Proposals must be applicable to current hardware, specifically leading Nvidia GPUs. This includes managing implementation costs, performance impacts (heat, latency, throughput, power consumption), and scalability to frontier AI training and inference clusters with tens or hundreds of thousands of AI chips. Proposals should have the potential to perform well at scale. 
  * Implementation Timeframe: We prioritize mechanisms that can realistically be implemented within 1-5 years. Solutions requiring only firmware updates or retrofittable hardware modifications are preferred over those requiring changes to the design and manufacturing process of AI chips. Given expected near-term advances in AI capabilities, solutions must be deployable in the next few years. 
  * Real World Relevance: We’re primarily interested in mechanisms motivated by the threats described in the introduction: enforcing export controls, securing model weights, and enabling verification of international agreements on AI development. Proposals should clearly articulate how the mechanism would support specific existing or potential verification frameworks.
  * Path to Impact: If HEMs are deployed, they may be designed and manufactured by major chipmakers with specialized expertise and lots of resources. We see four primary ways that research on hardware-enabled mechanisms conducted now outside of major chipmaking companies can contribute to AI verification: (1) directly building mechanisms that can be implemented in the near future, including commercial ventures that develop and sell solutions to chipmakers; (2) developing proofs of concept that demonstrate technical feasibility and value to AI developers, chipmakers, and policymakers, without necessarily creating production-ready implementations; (3) conducting targeted research that answers critical technical questions about implementation, security, and scalability for future HEM developers; or (4) developing protocols for the software-level use of HEMs. Proposals must clearly identify which path(s) they’re taking and provide a concrete plan for how their work will influence industry adoption.
  * Diffusion of Technical Results: We strongly prefer proposals that will open source their results to maximize impact. Applicants must explain their approach to sharing research outcomes, including code and hardware designs if applicable. We’re open to providing non-dilutive grants to companies with viable plans to commercialize HEM technology for chipmakers and AI developers.
  * Privacy Preservation: HEMs must address concrete security threats while preserving personal privacy and freedoms. All proposals should be motivated by specific policy goals, and should accomplish those goals while offering assurances to protect user privacy and freedoms. 
  * Security Against Tampering: Mechanisms will be deployed in adversarial contexts where users with physical control may attempt to subvert them. Proposals should specify which class of adversaries they protect against (minimal, covert, or overt) with appropriate tamper resistance, evidence, or response features. We’re also open to funding projects that could be secured by complementary mechanisms outside the specific project scope.
  * Team Expertise: We prioritize teams with demonstrated expertise in relevant areas such as hardware security and machine learning. Teams should demonstrate capacity to deliver on technical objectives.



# Application Process

We have designed a streamlined application process to minimize wasted effort while ensuring we can identify promising proposals:

  * Expression of Interest (EOI): Submit a brief EOI (maximum 300 words) explaining who you are and what you might like to work on. We recommend spending less than one hour on this initial submission. The EOI should give us enough information to determine if your proposed work aligns with our funding priorities.
  * Initial Review: We aim to reply to all EOIs within one month. If we believe your work has potential for funding, we’ll work with you to help craft a strong full application that fits our areas of focus. Unfortunately, we will not be able to offer feedback on EOIs that we are not inviting to submit a full application.
  * Full Application: For invited applicants, we’ll provide guidance on developing a detailed proposal that clearly addresses our requirements and priorities.
  * Funding Decision: Once you submit a full application, we aim to make a funding decision within three months, and possibly much sooner depending on the proposal’s complexity and our current review volume.



If you might like to apply, please submit a brief expression of interest [here](https://forms.gle/BVZKiU8cu867fuFq5). We’re planning to leave this RFP open until June 6th, and we will assess applications on a rolling basis. We strongly encourage applicants to submit expressions of interest as soon as possible.

  
  

