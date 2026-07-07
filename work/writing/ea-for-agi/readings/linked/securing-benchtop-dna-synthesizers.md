---
title: "Securing Benchtop DNA Synthesizers | IFP"
date: 2024-12-10
url: https://ifp.org/securing-benchtop-dna-synthesizers
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. biorisk/pessimistic-optimistic-future-biosecurity.md; IFP policy report on DNA synthesis screening"
---

  * Content 

  *     * Executive summary 
      * Context 
    * Benchtop synthesizers, present and future 
      * DNA synthesis today is almost entirely from centralized providers 
      * Today’s benchtop synthesizers are not yet helpful for genome-scale synthesis 
      * Benchtops may rapidly advance in the coming years 
      * Challenges for benchtop synthesizers 
      * Probabilistic forecasts for benchtop synthesizers 
    * Benchtop synthesizer threat model 
      * Basic benchtop hardware architecture 
      * Threat model 
      * Screening benchtop devices while preserving confidentiality 
    * The policy landscape 
      * Existing benchtop guidelines 
    * Policy recommendations 
    * Appendix A: Threat model 
      * Attacker aims 
      * Attacker capabilities 
      * Technical mitigations 
    * Appendix B: Selected forecaster rationale 
    * Appendix C: HHS guidance summary 




## Executive summary

It has become possible to synthesize short strands of DNA on a device the size of a minifridge, capable of fitting on a lab bench. These “benchtop” DNA synthesizers are dual-use; they can synthesize segments of a DNA vaccine, as well as sections of a disease-causing virus. To achieve a world where biotechnologists can harness DNA synthesis but bioterrorists cannot, we will need technical and regulatory safeguards. 

New breakthroughs in technology, from enzymatic DNA synthesis to hardware automation, suggest that benchtops may be far more capable and more accessible than today. This increases the risk that attackers use a benchtop to synthesize and deliberately spread a pandemic-capable pathogen. 

This report examines the present and future of benchtop synthesizers and provides quantitative forecasts. The concrete threat model in the report helps characterize the threat of attack and leads to certain technical mitigations. Modern cryptographic methods can enable secure and centralized screening, even for air-gapped devices. 

The current benchtop policy would benefit from a security certification system, as well as standardized processes for benchtop and reagent screening. Such safeguards manage to mitigate risk while enabling innovation.

### Context

Benchtop DNA synthesizers are becoming increasingly powerful, thanks to breakthroughs in synthetic biology and lab automation. By allowing custom DNA to be synthesized on-site instead of ordering from providers, these devices could dramatically speed up development cycles for biotechnology. Already, we have witnessed examples, such as the use of DNA Script’s SYNTAX STX for COVID-19 qPCR tests.1

As policymakers and others have noted, these increasing capabilities have misuse potential.2 One particularly concerning use case is the deliberate synthesis of pandemic-capable pathogens. Recent history provides multiple examples of non-state actors who want to inflict a high level of destruction. Historical examples include the omnicidal Aum Shinrikyo,3 Al Qaeda,4 the Unabomber,5 and mass murderers.6 In several examples, bioweapons were attempted or seriously considered. Furthermore, the historical frequency of large-scale violence (such as mass shootings) as well as the decreasing costs of using biotechnology for such harm suggest that precaution is warranted.

How capable and widespread will benchtop synthesizers be in the coming years? How can we realistically assess the risk arising from benchtop synthesizers? What technical and policy mitigations could help address misuse risk?

**This report addresses these questions by drawing on existing literature, discussions with more than a dozen professionals in DNA synthesis, and principles from computer security.**

The first section presents the factors driving benchtop DNA adoption, such as hardware automation, progress in synthetic biology, and computational biology. It also notes some of the challenges facing benchtop adoption, such as competition with centralized providers. We end with a set of probabilistic forecasts, developed in dialogue with professional forecasters from Metaculus (a reputation-based forecasting platform) about the future capabilities and availability of benchtop synthesizers.

The second section presents a threat model for benchtop DNA synthesizers. It provides an overview of typical system architecture and components, outlines potential adversaries and their motivations, and analyzes potential security vulnerabilities using a computer security framework called STRIDE.7 At the end, technical mitigations are proposed that would address potential vulnerabilities.

The final section __ examines the current regulatory environment and offers policy suggestions. Existing policies and guidelines relevant to benchtop DNA synthesizers contain regulatory gaps. The report proposes policy measures to enhance security while promoting innovation and accessibility. Given the international nature of the industry, proactive measures are key for safety. As the field of benchtop DNA synthesis continues to evolve, it will require further research and ongoing monitoring.

## Benchtop synthesizers, present and future

Current benchtop DNA synthesizers are limited to producing sequences under 120 base pairs (bp) and are not yet viable alternatives to centralized DNA providers. However, three converging technological trends — enzymatic synthesis, hardware automation, and increased demand from computational tools — are likely to drive rapid advancement in benchtop capabilities over the next decade. However, competition with existing providers may significantly constrain adoption even as the technology improves.

### DNA synthesis today is almost entirely from centralized providers

To illustrate a typical gene synthesis workflow, here’s a vignette. Sheila is a postdoc working in a virology lab. Her advisor tells her that the lab’s current focus is on using alphaviruses as a vaccine platform.8 Accordingly, the first task is for her to synthesize the 12 kilobase (kb) Sindbis alphavirus. The easiest option today is for her to order the full genome from a centralized DNA provider. She goes onto Elegen’s website, which quotes $7,500 and 40 business days.

Two months later, she gets a package in the mail containing a foam box and paper documentation. Inside the foam box, surrounded by dry ice, is a small plastic Eppendorf tube containing about 200 nanograms (ng) of Sindbis DNA. Following a viral reconstitution protocol, she can have infectious virus particles from the DNA in seven days.9

### Today’s benchtop synthesizers are not yet helpful for genome-scale synthesis 

Since the 1980s, benchtop DNA synthesizers based on phosphoramidite chemical synthesis have been commercially available. These have been limited to synthesizing single-stranded nucleotides below 50 base pairs in length. The last few years, however, have seen [significant advances](https://www.nature.com/articles/s41587-020-0695-9) in enzymatic (as opposed to chemical) synthesis. New companies like DNA Script have developed benchtops that can reliably synthesize up to 120 bp.10 Companies like Evonetix claim to be able to release benchtop synthesizers that synthesize upwards of 1,000 kb. Table 1 provides an overview of options for benchtop DNA synthesizers. At the moment, however, the 120 bp is not immediately helpful for assembling an entire genome.11

Company| Device and year| Cost| Nucleotide synthesis length| Technology used  
---|---|---|---|---  
DNA Script| SYNTAX STX-200, 2021| $292,000| 96 wells each containing up to 120 bp| Modified TdT enzyme with liquid handler  
Evonetix| TBA| TBA| Claims to be able to perform “gene-length DNA synthesis”| Chip-based microfluidic control and error correction of phosphoramidite synthesis  
Telesis| BioXP 9600| $418,700| Performs assembly, not synthesis, of fragments of small DNA. Plans announced for synthesis on platform.| Liquid handler, reagents differ depending on the task  
Switchback Systems| TBA| TBA| Claims to be able to do “gene-length DNA synthesis”| Phosphoramidite synthesis with microfluidics  
  
If Sheila wanted to use a benchtop device to synthesize the viral genome, given the 120 base pair limit, it would be very challenging to assemble the 120 base pair fragments into a 12 kb genome.12

_Note_ : Several manufacturers produce devices that can generate sequences below 80 nucleotides (nt). These manufacturers do not plan to significantly increase their development capabilities20 and have not been included in the table, as this report focuses on the future generation of benchtop DNA synthesizers aimed at gene length synthesis.

### Benchtops may rapidly advance in the coming years

Three major trends in biotechnology have the potential to transform the benchtop synthesizer landscape: enzymatic DNA synthesis, better hardware automation, and increased demand from computational tools. The first two will enable less error-prone and cheaper DNA synthesis; the latter will drive demand and further innovation.

The first is enzymatic DNA synthesis. Rather than using purely chemical phosphoramidite-based synthesis, companies have successfully demonstrated assembly using a combination of ligation enzymes, restriction endonucleases,13 and terminal deoxynucleotidyl transferase (TdT) for DNA synthesis.14 This reduces the toxic waste produced and makes operating the devices easier and potentially much faster.15

The current error rate of phosphoramidite synthesis at an industrial scale hovers around 1:7,500.16 By contrast, enzymatic synthesis methods are commercially available with an error rate of approximately 1:70,000.17 Although these are centralized manufacturing methods, that allow for sequencing and error correction, this suggests that benchtop enzymatic synthesis might enable much greater fidelity than benchtop chemical synthesis.

The second trend is accessible hardware automation. Just as robotics have been incorporated in factories to enable a broader range and scale of goods to be produced, new automated tools in labs are making DNA synthesis faster, more precise, and less wasteful. Existing liquid handling robots enable automated pipetting, temperature control, and agitation. At the time of writing, the only available enzymatic benchtop DNA synthesizer is DNA Script’s STX-200, effectively a modified liquid handler with proprietary reagents. An alternative trend is the use of microfluidic chips, such as those used by Evonetix, which can control multiplexed reagent flow using channels that are micrometers wide. This enables a significant reduction in the volume of both the reagent needed and of waste, and reduces the likelihood of cross-contamination between syntheses. The sealed nature of the chip also allows for synthesis in hazardous or remote environments. Furthermore, Evonetix’s patented Binary Assembly process allows for error correction within the chip, potentially vastly increasing yield. 

Another development within hardware automation is the use of electric fields to precisely and directly manipulate tiny droplets of reagents, a technique known as electrowetting. This allows for very precise control of reactions and an even greater reduction in the volume of reagents required. Although the existing use cases, from Nuclera and Volta Labs, focus on protein synthesis and micro-PCR, respectively, these tools are versatile and can be used for in-situ enzymatic DNA synthesis techniques.

The third broad trend affecting benchtop synthesizers is increased demand due to computational advancements in biological design tools. These methods can now be used to fold many more potentially viable proteins than ever before, shifting the bottleneck from generating protein candidates to empirical testing of synthesized proteins. For instance, Google DeepMind’s AlphaFold 2 can fold proteins with sequences up to 8,100 bp, and was used in 2022 to publicly release more than 214 million novel predicted protein structures.18 Experts we’ve spoken to increasingly point to synthesis as the bottleneck in the biotechnological development cycle.

### Challenges for benchtop synthesizers

However, there are some reasons to be skeptical about a world where DNA synthesis plays a large role. Existing players operate close to, and in some cases below cost,19 reflecting that synthetic DNA is already a highly commoditized product. Furthermore, advancements in enzymatic synthesis and hardware automation may apply equally to existing players, who will likely aim to incorporate such advancements in their supply chains. From a customer’s perspective, benchtops require major upfront capital expenditure and ongoing costs from ordering reagents.

Given the highly competitive market, and existing entrants that will be able to incorporate the aforementioned technical advances, it remains to be seen whether the speedup and potential privacy offered by benchtops can justify the significant initial costs.

### Probabilistic forecasts for benchtop synthesizers

What follows are probabilistic forecasts from professional forecasters about the likely trajectory of benchtop synthesizers. This is a collaborative effort with the Metaculus team. 

In creating these questions, the three considerations we considered relevant to the future of benchtop synthesizers were capability, cost, and distribution.

Question| Aggregated Forecast| Summarized Reasoning  
---|---|---  
Predicted availability of 5 kbp benchtop DNA synthesizer| Sep 2028 [25th-75th%: Aug 2027 – May 2030]| Foundational technology already present for gene length synthesis. Barrier from today to 5kbp is larger than barrier from 5kbp to 10kbp.  
Predicted availability of 10 kbp benchtop DNA synthesizer| Jul 2030 [25th – 75th%: Jul 2028 – Jan 2033]| See above  
Cost of cheapest 5 kbp benchtop DNA synthesizer in 2030 (2024 USD)| $190,000 [25th-75th %: $112,000-$298,000]| Significant uncertainty. Averaging between the base rate provided by cheapest available oligo synthesizers and expensive additions to existing machines  
Number of benchtops sold worldwide that can synthesize 1 kbp| 92 [25th – 75th %: 17 – 297]| Significant uncertainty about demand and existence of these capabilities by 2030  
Number of benchtops sold worldwide that can synthesize 5 kbp| 54 [25th – 75th %: 11 – 172]| See above  
  
Fig 1 _. The probability distributions for expected availability of 5kbp and 10kbp benchtop DNA synthesizers. 5kbp synthesizers (purple) are expected around 2029, while 10kbp synthesizers (green) are expected 2030-2031. Overlapping widespread curves reflect significant uncertainty._ Fig 2. _The predicted cost distribution for a 5kbp benchtop DNA synthesizer in 2030. The probability density peaks around $190,000 (2024 USD), with the 25th-75th percentile range spanning from $112,000 to $298,000._ Fig 3. _This figure shows the predicted probability distributions for worldwide sales of benchtop DNA synthesizers by capability. The red curve represents sales of 1kbp synthesizers with a median prediction of 92 units sold (25th-75th percentile: 17-297 units), while the yellow curve represents 5kbp synthesizers with a median of 54 units sold (25th-75th percentile: 11-172 units). The overlapping distributions reflect significant uncertainty in market adoption._

## Benchtop synthesizer threat model 

Benchtop synthesizers face a range of credible security threats — from simple physical tampering to sophisticated operating system attacks — that could enable the synthesis of dangerous pathogens. If a threat model is articulated (including attacker aims, capabilities, and attack types), these risks can be substantially mitigated by using standard practices from computer security. Additionally, modern cryptographic methods can enable secure centralized screening even for air-gapped devices. 

### Basic benchtop hardware architecture

Fig 4 _. System diagram of a DNA benchtop synthesizer, illustrating the key components and their interconnections. The system is divided into two main modules: the computer and the liquid handler. The computer module includes screening software, a user interface, and an operating system (OS). This module communicates with the liquid handler through an external input/output (I/O) interface. The liquid handler module is controlled by a microcontroller that coordinates motor control units, temperature chambers, sensors, and liquid dispensers, among others. These subcomponents draw on the reagents for synthesis including nucleotides, water, and enzymes._

This diagram reflects the current commercially available benchtops. With light modification, it also describes microfluidic and electrowetting approaches to DNA. In both cases, the liquid handler generally becomes substantially more difficult to interfere with, reducing the attack surface area.

Again, a vignette illuminates the functioning of the different parts. Sheila wants to synthesize a genome. On her laptop, she pulls up a FASTA file and puts it on a USB to then plug into the benchtop interface. The interface can be a computer that is directly integrated with the liquid handler, as is the case with the Telesis BioXP, or a computer that can be connected to and disconnected from the device, as with the Oxford Nanopore sequencer.

Once the sequence has been communicated, a microcontroller will direct the reactions and their temperatures. To do so, it will have to draw from reagents including nucleotides and other enzymes.

Given the general architecture, what is the threat model? Our threat model asks the following questions in order:

  * What is an attacker trying to do?
  * What capabilities, in terms of skill and access, might they have at their disposal?
  * What types of attacks might they try to perform?
  * How might one make it very difficult to perform such attacks?



### Threat model

The attacker aims to synthesize pandemic-capable pathogens, which may entail various sub-goals of extracting information about sequences of concern and reverse engineering the device. Attackers may also attempt the theft of intellectual property (e.g. pharmaceutical vaccine candidates).

The attacker may have a range of capabilities in terms of both skill levels (from a novice with minimal technical skills to advanced attackers with custom malware and sophisticated monitoring capabilities) and access (from remote limited access to persistent physical access). This will inform our discussion of the range of attacks.

For attack types, we use the common STRIDE framework21 to discuss system-level security. Table 1 provides a definition and example of each of the acronyms.

Attack Type| Description| Examples  
---|---|---  
Spoofing| Claiming false authorization; for instance, impersonating a lab manager or administrator| Spoofing identities, by stealing passwords or usernames  
OS-level file spoofing  
Network address spoofing  
Spoofing response packets from screening service  
Tampering| Unauthorized modification to a system. This can include altering packets in transmission, altering data on disk or in memory| Restarting machine  
Swapping nucleotide wells  
Unscrew hood during operation  
JTAG, UART pin direct communication  
Repudiation| Denying involvement in an action; for instance, altering logs to deny attempted synthesis of sequence of concern| Altering synthesis logs  
Screening software packet replay attacks  
Information disclosure| Unauthorized access to information — in this case, the sequences of concern or the sequences being synthesized on the machine| Network monitoring  
Screening software packet replay attack  
Denial of service| Attacks designed to prevent the benchtop from providing service| Network flooding  
Elevation of Privilege| A program or user gaining the ability to perform actions for which they are not authorized| Using operating system CVEs to gain administrative privilege  
Memory corruption attacks  
  
While the HHS guidelines acknowledge many of these threats, they defer technical specifics to lengthy industrial control system standards. Our STRIDE-based analysis in Appendix A provides targeted recommendations specific to benchtop synthesizers.

### Screening benchtop devices while preserving confidentiality

Both the synthesis screening framework from HHS and the guidelines provided by OSTP acknowledge benchtop security. The principles outlined in both of these documents cover at a high level the vulnerabilities detailed in this report’s threat model. Appendix C provides a summary of the existing technical guidance concerning STRIDE.

This section addresses an issue that has remained contentious and also ambiguous in the guidelines: the status of internet connectivity. Although some form of internet connectivity is necessary to satisfy the properties outlined by the existing guidelines, it is possible to have an offline machine with online screening. 

As discussed in the Nuclear Threat Initiative’s benchtop report,22 the two options considered for screening DNA sequences on benchtop devices are i) local, on-device screening, and ii) remote, centralized screening. Advocates for local, on-device screening argue that an internet-connected device may be vulnerable to cyber-attacks and that the sequences being synthesized may be leaked. In some cases, the devices may be in an air-gapped facility with no internet connection. Requiring internet connectivity would prohibit these use cases for benchtop synthesizers and significantly reduce the economic viability of the benchtop synthesis industry. 

When considering the existing guidance as well as the threat model described prior, it is apparent that _some_ form of connection to the internet is required. Specifically, the HHS guideline calls for “screening against SOC databases, when available, that are updated regularly as new SOCs are identified.”23 It is unclear how an SOC database could be updated if the screening were done entirely on-device. Similarly, the suggestion for benchtop manufacturers to implement a “data logging function” clearly implies some ability to virtually track orders. 

Broadly, having an entirely offline device is an adversary’s ideal scenario. Without an internet connection, the most a device can do is refuse to synthesize sequences. There is no procedure for escalation in response to repeated attempts at misuse and therefore no mechanism for discovery. The worst outcome is that the machine stops functioning. Moreover, an offline device is vulnerable to the whole class of split-order attacks, whereby the adversary can combine the outputs of two or more devices that are small enough to evade screening in isolation, but together would be recognized. Without some centralized connectivity, such an attack is impossible to defend against.

In the cases where customers demand that the benchtop devices themselves be air-gapped, it is still possible to do remote screening. The benchtop devices can be programmed to require a digital certificate that is tied to a hardware token. In such cases, the permission for a given DNA order must be first screened via a centralized server, which then returns a digital certificate with permission to synthesize that particular sequence. The hardware token can then be physically brought into the air-gapped facility, which will provide permission for the device to synthesize such a sequence. This solution has already been implemented by SecureDNA on benchtop devices. 

## The policy landscape

There are a set of existing policies already relevant to benchtop synthesizers. First, an overview of regulations:

### Existing benchtop guidelines

The only laws that currently apply to benchtop synthesizers are related to export controls. All other documents thus far have been voluntary guidelines. Export controls only apply to international transfers, and do not directly affect domestic sales. 

#### Export controls and benchtops

There are several parties relevant to export controls that implicate benchtops. There are the US governmental agencies (Bureau of Industry and Security, and Directorate of Defense Trade Controls) and the Australia Group, an organization with representatives from 43 countries that have agreed to impose licensing agreements to control the spread of chemical and biological weapons. The relevant lists that these organizations administer are the Commerce Control List (US BIS), International Traffic in Arms Regulations (ITAR), and the Australia Group Control List (AGCL).

Nucleic acid synthesizers and assemblers designed to synthesize >1.5 kb are on the CCL and AGCL, as is the software designed to help these devices synthesize “functional genetic elements.” 

According to the Australia Group official guidelines,24 the transfer of export control goods outside the Australia Group (and in some cases within the Australia Group) requires a specific license. In practice, however, it is unclear how consistently the AG guidelines are adhered to, given the lack of enforcement mechanisms. Furthermore, export controls related to benchtop devices have already been violated.25

#### Guidelines that currently relate to benchtop synthesizers

The most consequential documents from the US Government relating to benchtop synthesizers have been the October 2023 HHS Screening Framework Guidance (“HHS Guidance”)26 and the April OSTP Framework for Nucleic Acid Synthesis Screening (“OSTP Framework”).27 The OSTP Framework came about as a response to sections of the October 2023 Biden Executive Order on the Safe, Secure, and Trustworthy Development of AI.

The HHS Guidance contains most of the specific guidance (see Appendix C for a summary), encouraging customer screening for devices and reagent orders, the tracking of equipment transfer, and on-device screening. Meanwhile, the OSTP Framework directs other agencies to develop a framework, adds that flagged orders should be retained on the machine, and directs NIST to engage with relevant industry stakeholders to develop further technical guidance.

Early in October 2024, the UK Government’s Department for Science, Innovation & Technology released the [UK screening guidance on synthetic nucleic acids for users and providers](https://www.gov.uk/government/publications/uk-screening-guidance-on-synthetic-nucleic-acids/uk-screening-guidance-on-synthetic-nucleic-acids-for-users-and-providers). With regards to guidance for benchtop synthesizers, it substantially overlaps with the principal guidance provided by HHS. The principal difference is its reference to prior UK laws such as [UK GDPR](https://ico.org.uk/for-organisations/data-protection-and-the-eu/data-protection-and-the-eu-in-detail/the-uk-gdpr/) and cybersecurity framework [PAS 555](https://www.en-standard.eu/pas-555-2013-cyber-security-risk-governance-and-management-specification/?srsltid=AfmBOopSq4DQSX7-08uOo43XFAaA1jC6HINAkN_lFvUc_RYJXcs9JOt1).

## Policy recommendations

  1. **Require security certification before the sale of benchtop devices**



Before being legally marketed in the US, most medical devices require a 510(k) premarket notification submission to the FDA. These submissions demonstrate a minimal standard of safety and efficacy for the devices. Higher-risk devices require a more rigorous [premarket approval](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma) (PMA). In the financial industry, the Payment Card Industry Data Security Standard (PCI DSS) serves as an effectively mandatory standard for the computer security of organizations that handle credit cards. When dealing with technologies that imply some risk, it is common and reasonable to require a certification before sale.

Benchtop DNA synthesizers should go through a similar certification process. This “Biosecurity Readiness Certification” (BRC) would be an independent certification that a benchtop synthesizer meets basic security standards, such as a technically operational version of the HHS guidelines. This would include explicit cybersecurity measures to address spoofing, tampering, and the other technical mitigations addressed in Appendix A.

The certification could be sponsored privately or by a federal agency. The International Gene Synthesis Consortium,28 the Bioeconomy Information Sharing and Analysis Center,29 or the Engineering Biology Research Consortium30 could feasibly serve as a private certifying body. A computer security auditing firm could assist benchtop manufacturers in providing a fast and low-cost certification that is then housed by one of the three aforementioned organizations. Within the US government, one could imagine a joint task force with representatives from groups within the CDC or DHS, as well as a special publication from NIST that they would reference for certification.

Devices meeting these standards would receive a “BRC Certified” mark, without which sale would be prohibited.

  2. **Develop a standardized benchtop and reagent customer screening process**



Even the best cybersecurity measures are useless if it is easy to impersonate a legitimate scientist. Technical cybersecurity and customer screening are deeply intertwined. As HHS suggests, verifying the identity and legitimacy of benchtop and reagent purchases is crucial for preventing bad actors from acquiring pandemic-capable pathogens. However, there remain many open questions about the implementation of customer screening.

Customer screening should be standardized, for both benchtop devices and the reagents used by benchtop devices. Drawing inspiration from Developing a Customer Screening Framework for the Life Sciences,31 we propose:

  * Different customer tiers. Basic screening for all customers would involve recording and verifying customer identity and checking against existing government watch lists. For customers intending to use benchtops to synthesize sequences of concern, the intended use should be scoped and clarified with the permission of a biosafety authority. This may also be integrated with a certificate system such as the SecureDNA exemption token system.
  * Unambiguous criteria for “legitimate customer” and “legitimate use.” These criteria should be developed in conjunction with industry partners and may consider an approach of whitelisting particular use cases and customers and black-listing others while using a human to adjudicate edge cases.
  * Incentives for screening. This can be preferential purchasing agreements for vendors who screen but also enforcement mechanisms against manufacturers who do not screen.
  * A reagent track and trace system. Similar to the Drug Supply Chain Security Act for pharmaceuticals. This would involve maintaining detailed records of each transfer in the supply chain, such as the date and time of transfer, sender and recipient information, as well as digital signatures or other secure authentication methods for each transfer to ensure accountability.



Currently, the OSTP Framework applies only to manufacturers selling to federally funded entities. A central challenge for customer screening will be the extension to private industry and non-federally funded research. Similar to the BRC certification process described above, it may be desirable to consider whether another non-governmental entity such as the International Biosecurity and Biosafety Initiative for Science32 can facilitate such screening standards.

Novel scientific research must be allowed to flourish in the face of new regulation. That is why it is crucial to propose precise and well-scoped regulation. Indeed, such regulation will clarify what a company can and cannot do, and, in relieving regulatory ambiguity, can facilitate innovation. Once a Biosecurity Readiness Certification is made clear, it becomes possible for companies to plan around it. Similarly, given a clear process for customer screening, the process can be made cheaper and more efficient.

## Appendix A: Threat model

### Attacker aims

  1. **Synthesize sequences of concern to create a pandemic-capable pathogen**



An attacker who wishes to cause mass harm may attempt to synthesize and spread an infectious pathogen. They may choose to use a benchtop device to circumvent centralized screening or else because they have physical access to the device. For a discussion on the plausibility of this goal, see Box 1. 

  2. **Extracting information about sequences of concern**



Currently, the DNA sequences of biological agents on lists such as the Australia Group and the US Federal Select Agent Program are public. However, recent guidance from the White House Office of Science and Technology Policy (OSTP)33 has suggested secure storage of the DNA sequences of new and emerging hazards.34 If this guidance is implemented, extracting these sequences may become a subgoal in the broader attempt to create a novel pandemic-capable pathogen.

  3. **Reverse engineering device functionality**



Given controls on a benchtop device, an attacker may wish to understand the overall functionality for the purposes of either circumventing the controls or recreating the operations of a synthesizer. This may be seen as analogous to existing examples of black-market medical devices that are modified and resold.

  4. **Stealing customer synthesis information**



The sequences being synthesized on benchtop devices may constitute highly sensitive intellectual property. The market size for a successful vaccine candidate, for instance, may be billions of US dollars.35

### Attacker capabilities

The capabilities of potential attackers can be divided into the categories of access and skill.

Access Type| Description  
---|---  
Remote, limited| Remote attacker may have limited time because the exploit relies on time-sensitive vulnerabilities that have been patched, or else because system administrators may observe unusual activity.  
Remote, persistent| This involves establishing uninterrupted and undetected access to a benchtop synthesizer’s network, perhaps through compromising a connected device or through remote code execution vulnerabilities.  
Limited physical access| The attacker may only have access for certain hours of the day (for example, a student within an academic lab that only has access outside of working hours).  
Persistent physical access (unlimited reagents)| The attacker may have purchased the machine, and unlimited continuous access to the machine, including reagents. This may happen in the event of a successful persistent impersonation or someone with authorized access attempting to misuse the machine.  
|   
  
Skill level| Description  
---|---  
Novice| Minimal technical skills and biology knowledge  
May attempt manual tampering with device  
Competent| The attacker is able to use automated scripts and tools (for instance, public CVEs). Budget of less than $1,000  
Moderate| Able to identify and exploit common software vulnerabilities, basic hardware attacks. Budget of up to $10,000 for equipment and software  
Advanced| Custom malware, sophisticated side-channel monitoring. Budget of up to $100,000  
  
Although advanced attackers are included in this typology, it is unlikely that the first round of safeguards for benchtops will be able to prevent attackers with advanced skill and persistent access. It is nonetheless helpful to be able to articulate the edge of capabilities.

### Technical mitigations

The following technical mitigations address the key vulnerabilities identified in our STRIDE analysis. These measures represent a baseline set of security controls that should be implemented in benchtop DNA synthesizers to reduce the risk of misuse under our threat model. The mitigations are organized by STRIDE category and include references to relevant security standards and best practices.

**Spoofing**

  * Implement user authentication with unique accounts and passwords [1]
  * Use two-factor authentication for orders of known sequences of concern [2]
  * Encrypt all communications [3]



**Tampering**

  * Add tamper-evident seals with warranty void notices [4]
  * Secure hardware interfaces (disable/secure USB ports, Ethernet, RS-232) [5]
  * Implement measures to prevent nucleotide well-swapping [6]



**Repudiation**

  * Implement secure logging of synthesis activities [7]
  * Use cryptographic integrity checks during boot [8]



**Information Disclosure**

  * Encrypt all communications [3]
  * Prohibit all inbound ports and IP addresses by default [9]
  * Avoid storing databases of sequences of concern on the device [6]



**Denial of Service**

  * Implement network security measures (firewalls, rate limiting) [9]
  * Ensure regular software updates and patches [10]



**Elevation of Privilege**

  * Provide user accounts with minimal privilege [1]
  * Ensure the device’s operating system is actively supported and includes recent security patches [10]
  * Implement secure boot with TPM [8]



**Additional Measures**

  * Screen each nucleic acid order prior to synthesis [6]
  * Establish an incident response plan for suspected misuse [11]
  * Conduct regular security audits and penetration testing [12]



**References**

[1] NIST Special Publication 800-53, Access Control guidance (AC-6 Least Privilege) National Institute of Standards and Technology. “Security and Privacy Controls for Federal Information Systems and Organizations.” Special Publication 800-53, Revision 5. Gaithersburg, MD: US Department of Commerce, September 2020.[ https://doi.org/10.6028/NIST.SP.800-53r5](https://doi.org/10.6028/NIST.SP.800-53r5).  
[2] NIST Special Publication 800-63B, Digital Identity Guidance National Institute of Standards and Technology. “Digital Identity Guidelines: Authentication and Lifecycle Management.” Special Publication 800-63B. Gaithersburg, MD: US Department of Commerce, June 2017.[ https://doi.org/10.6028/NIST.SP.800-63b](https://doi.org/10.6028/NIST.SP.800-63b).  
[3] Ristić, Ivan. Understanding and Deploying SSL/TLS and PKI to Secure Servers and Web Applications. London: Feisty Duck, n.d. Accessed October 24, 2024.[ https://www.feistyduck.com/books/bulletproof-tls-and-pki/](https://www.feistyduck.com/books/bulletproof-tls-and-pki/).  
[4] Securikett. “Tamper-Evident Security Seal, Security Tape & Labels.” Accessed October 24, 2024.[ ](https://securikett.com/products/security-seals-security-tape-security-labels)<https://www.securikett.com/tamper-evident-seals-and-tapes/>  
[5] Crenshaw, Adrian. “Plug and Prey: Malicious USB Devices.” Paper presented at Shmoocon, Washington, DC, January 2011.[ http://www.irongeek.com/i.php?page=security/plug-and-prey-malicious-usb-devices](http://www.irongeek.com/i.php?page=security/plug-and-prey-malicious-usb-devices).  
[6] US Department of Health and Human Services. “Guidance for Providers of Synthetic Nucleic Acids.” (October 2023), https://aspr.hhs.gov/legal/synna/Documents/SynNA-Guidance-2023.pdf.  
[7] NIST Special Publication 800-92, Guide to Computer Security Log Management National Institute of Standards and Technology. “Guide to Computer Security Log Management.” Special Publication 800-92. Gaithersburg, MD: US Department of Commerce, September 2006.[ https://doi.org/10.6028/NIST.SP.800-92](https://doi.org/10.6028/NIST.SP.800-92).  
[8] Trusted Computing Group. “Trusted Platform Module (TPM) Summary.” White Paper. Accessed October 24, 2024.[ https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/](https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/).  
[9] Ubuntu Documentation Team. “UFW – Uncomplicated Firewall.” Ubuntu Documentation. Accessed October 24, 2024.[ https://help.ubuntu.com/community/UFW](https://help.ubuntu.com/community/UFW).  
[10] NIST Special Publication 800-40, Guide to Enterprise Patch Management Technologies [11] NIST Special Publication 800-61, Computer Security Incident Handling Guide  
[12] NIST Special Publication 800-115, Technical Guide to Information Security Testing and Assessment

## Appendix B: Selected forecaster rationale

When will a benchtop DNA synthesizer be available for sale that can synthesize DNA with the following lengths?

_Lightly edited for clarity_

“An attempt to provide a sort of final forecast after reading SMEs [subject matter experts] answers.

Basically, the foundational technology already exists, but none of it is settled science/technology. No matter what, the first machine that comes out would have to be a highly modular device that contains: 1. Oligonucleotides synthesis module (100-300 nt, the longer the better). 2. DNA assembly module that makes 1-3 kbp fragments. 3. DNA extension module that assembles DNA fragments into a longer target DNA of 5-10 kbp. 4. Robotic pipetting capability that provides interoperability between the three modules.

What exactly modules 1-3 will be doing is still uncertain — there are multiple competing solutions and moving parts with no clear winner in every case. Then ensuring that the “best” individual solutions are compatible with each other — which likely puts extra demands on what the pipetting/handing module should be able to do.

The biggest uncertainty for me is how much demand there really is in the 5-10 kbp market. For the vast majority of the labs, it’s already easy enough to buy <1.5 kbp fragments, carry out an inefficient but simple assembly, and simply do a clonal selection/screening to identify a desired sequence.

Overall, I now suspect that the demand/cost ratio is not terribly favorable for something like this. But since the question is not about wide adoption, it still seems likely that some sort of one-off version could appear rather soon. Conditional on such a thing being created, there should be no significant difference between 5 and 10K versions — making 10K out of three 3.5K versions is already trivial enough. Particularly because the fidelity hit in this step is going to be relatively minor while the criteria for fidelity here are pretty relaxed.

Overall, my best guess is that it will happen 4 years from now, give or take a year. This roughly matches community numbers. I’m more optimistic on the 10K benchtop capability, offsetting it only by 7 months [from a 5 kbp benchtop].”

## Appendix C: HHS guidance summary

When considering new security standards, it is important to be clear about the existing guidelines. What follows is a brief summary of elements from the HHS Guidance relevant to the technical security of benchtop synthesizers. 

STRIDE Category| Existing Guidance  
---|---  
Spoofing| Screen customers buying synthesizers and ensure customers allow authorized users  
Screen customers purchasing proprietary and sole-use reagents  
Benchtops should require authentication to manufacture SOCs  
Tampering| Include anti-tamper measures on the devices  
Repudiation| Keep records of orders containing SOCs  
Include data logging function to keep track of orders synthesized on equipment  
Information Disclosure| Database of SOCs cannot be stored on-device in an unencrypted or extractable way  
  
  
Denial of Service| Include the ability to screen on-device, which can be updated as new SOCs are discovered  
Elevation of Privilege| Implement mechanisms to track equipment transfer and verification of users  
  
OSTP Guidance adds:

#### Providers should provide support for some form of exemption-specification

“To adhere to this screening framework, at a minimum, Providers should include a field or mechanism in their ordering system where customers can self-identify that an order contains a SOC. When an order does contain a SOC, Providers should also include a mechanism for customers to provide information that will be useful for verifying the customer’s legitimacy.”

#### Retention of flagged orders and follow-up investigation

“Providers and Manufacturers should follow the 2023 HHS Guidance and retain for at least three years (eight years if no undue burden is imposed) all screening records, including flagged orders; customer screening interactions…”

  1. DNA Script. "SARS-CoV-2 Amplicon Sequencing." Application Note V1.1, Accessed October 18, 2024. <https://www.dnascript.com/wp-content/uploads/2022/08/DNA-Script-SARS-CoV2-Amplicon-Sequencing-App-Note-V1.1.pdf>.

  2. White House Office of Science and Technology Policy. "Nucleic Acid Synthesis Screening Framework." (September 2024), <https://www.whitehouse.gov/wp-content/uploads/2024/04/Nucleic-Acid_Synthesis_Screening_Framework.pdf>; U.S. Department of Health and Human Services. "Screening Framework Guidance for Providers and Users of Synthetic Nucleic Acids." (October 2023), <https://aspr.hhs.gov/legal/synna/Documents/SynNA-Guidance-2023.pdf>.

  3. Thomas Robbins. "Destroying the World to Save It: Aum Shinrikyo, Apocalyptic Violence, and the New Global Terrorism." _Nova Religio_ 4, no. 2 (2001): 361.

  4. Rolf Mowatt-Larssen and Graham T. Allison. _Al Qaeda Weapons of Mass Destruction threat: hype or reality?_ Boston: Belfer Center for Science and International Affairs, 2010.

  5. FBI. “The Unabomber." Accessed October 24, 2024. <https://www.fbi.gov/history/famous-cases/unabomber>.

  6. Most are mentally ill and incapable of deliberate planning, but a nontrivial fraction are high functioning; see for instance the Aurora theater shooter James Holmes <https://en.wikipedia.org/wiki/James_Holmes_(mass_murderer)>.

  7. STRIDE is a model for identifying computer security threats through six categories: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.

  8. See Christine Pampeno, Silvana Opp, Alicia Hurtado, and Daniel Meruelo. "Sindbis Virus Vaccine Platform: A Promising Oncolytic Virus-Mediated Approach for Ovarian Cancer Treatment." _International Journal of Molecular Sciences_ 25, no. 5 (2024): 2925.

  9. From a 2024 lecture by the molecular biologist John Glass: “8 years ago I took a brand new postdoc her first week in the lab, and her only experience was with yeast genetics. But I asked her to, from oligonucleotides, synthesize a Sindbis viral genome and make [the] virus. She did it in 7 days, which I thought was pretty astonishing, given that she knew basically nothing about virology, and had never synthesized anything in the lab.” Glass, John, “How To Grow (Almost) Anything 2024, Recording 2.” Lecture, (April 9, 2024) Video, 04:52 <https://mit.zoom.us/rec/play/4daTiHzeBJE63PXLMv2p4t6Y4bL6oqSPff3KssiKai0Uuu2ao04V45laBZcRWXrqJxxftLZKg8-tsKF2.GOQCMhw9R2s-NKQ5>.

  10. DNA Script’s SYNTAX STX-200 reliably synthesizes the longest sequences of nucleotides at 120 bp. Theoretically one can synthesize longer sequences, but the limited coupling efficiency means that errors become exponentially more likely. See DNA Script. "SYNTAX System." Accessed October 18, 2024. <https://www.dnascript.com/products/syntax/>.

  11. Because this report is focused on risks of pathogenic synthesis arising from benchtop synthesis, here we discuss only genome-level synthesis.

  12. “Successful assembly of dsDNA fragments longer than 10,000 base pairs requires, at a minimum, expertise and laboratory infrastructure for working with yeast and access to DNA sequencing capabilities.” Nuclear Threat Initiative. "Benchtop DNA Synthesizers: An Assessment of Risks and Benefits for Research Settings." (May 2023), <https://www.nti.org/wp-content/uploads/2023/05/NTIBIO_Benchtop-DNA-Report_FINAL.pdf>.

  13. New England Biolabs. "Push the Limits of Golden Gate Assembly: 50+ fragment DNA assembly achievable with high efficiency and accuracy!" Accessed October 18, 2024. <https://www.neb.com/en-us/golden-gate/golden-gate?gclid=CjwKCAjwgdayBhBQEiwAXhMxtgwM7RwLy_ubsDWBi8j32mg9AoV2b898paFeTQtl4gGfZrzrK1G6aBoCUKMQAvD_BwE.>

  14. Michael Eisenstein. "Enzymatic DNA synthesis enters new phase." _Nature Biotechnology_ 38, no. 10 (2020): 1113-1116.

  15. Xiaoyun Lu, Jinlong Li, Congyu Li, Qianqian Lou, Kai Peng, Bijun Cai, Ying Liu et al. "Enzymatic DNA synthesis by engineering terminal deoxynucleotidyl transferase." _ACS Catalysis_ 12, no. 5 (2022): 2988-2997.

  16. Twist Bioscience. “High Quality Gene Fragments." Accessed October 18, 2024. <https://web.archive.org/web/20240801164259/https://www.twistbioscience.com/products/genes/gene-synthesis?tab=fragment>.

  17. Elegen. “A New Class of DNA” Accessed October 18, 2024. <https://web.archive.org/web/20240219123153/https://elegenbio.com/enfinia-dna/>.

  18. Mihaly Varadi, Damian Bertoni, Paulyna Magana, Urmila Paramval, Ivanna Pidruchna, Malarvizhi Radhakrishnan, Maxim Tsenkov et al. "AlphaFold Protein Structure Database in 2024: providing structure coverage for over 214 million protein sequences." _Nucleic Acids Research_ 52, no. D1 (2024): D368-D375.

  19. Twist Bioscience. "Form 10-K," (September 2023). <https://investors.twistbioscience.com/static-files/c2dab8bc-aca6-475a-bbe2-c352abd6a15f>. "We have incurred net losses each year since inception and have generated limited revenue from product sales to date. We expect to incur increasing costs as we grow our business."

  20. These include devices such as the MerMade (by BioAutomation, part of LGC Biosearch), Dr Oligo (by Biolytic), Kilobaser, Tsingke’s Syn-HCY-12P, and Sierra Biosystems’ various chemical benchtop synthesizers.

  21. Michael Howard and Steve Lipner, The Security Development Lifecycle (Redmond, WA: Microsoft Press, 2006).

  22. Nuclear Threat Initiative, "Benchtop DNA Synthesizers," 2023.

  23. U.S. Department of Health and Human Services. "Screening Framework Guidance for Providers and Users of Synthetic Nucleic Acids." (October 2023), 7. <https://aspr.hhs.gov/legal/synna/Documents/SynNA-Guidance-2023.pdf>.

  24. The Australia Group. “Guidelines for Transfers of Sensitive Chemical or Biological Items.” June 2015. <https://www.dfat.gov.au/publications/minisite/theaustraliagroupnet/site/en/guidelines.html>.

  25. “In late 2021, following a voluntary internal review of our compliance with U.S. export control and sanctions laws, we became aware that certain of our products had been sold indirectly into embargoed countries via our distributors and resellers, potentially in violation of U.S. export control and economic sanctions laws. These laws restrict or prohibit the sale of certain products, including our BioXp systems, into certain countries, including Russia. In the past, we may have exported products prior to receiving these required authorizations. We believe that these potential violations were inadvertent and occurred because we and certain of our resellers did not have sufficient compliance procedures in place to prevent the transactions at issue. As a result, we were unable to preclude certain of our channel partners and resellers from selling our solutions into countries subject to a U.S. embargo until late 2021. Commencing in late 2021, we took a series of corrective actions intended to remediate the effect of any unauthorized past actions, including actions to permanently stop supporting the use of our BioXp systems in sanctioned countries.” Telesis, 10-Q, (June 2022), 57 <https://web.archive.org/web/20230401164457/https://ir.telesisbio.com/node/7356/html>.

  26. U.S. Department of Health and Human Services. "Screening Framework Guidance for Providers and Users of Synthetic Nucleic Acids." (October 2023), <https://aspr.hhs.gov/legal/synna/Documents/SynNA-Guidance-2023.pdf>.

  27. White House. "Nucleic Acid Synthesis Screening Framework." (September 2024) <https://www.whitehouse.gov/wp-content/uploads/2024/04/Nucleic-Acid_Synthesis_Screening_Framework.pdf>.

  28. International Gene Synthesis Consortium. Accessed on October 21, 2024, from <https://genesynthesisconsortium.org/>.

  29. Bioeconomy Information Sharing and Analysis Center. Accessed on October 21, 2024, from <https://isac.bio>.

  30. Engineering Biology Research Consortium. Accessed on October 21, 2024, from <https://ebrc.org>.

  31. Sarah R Carter. "Developing a Customer Screening Framework for the Life Sciences." Blueprint Biosecurity, (March 2024), <https://blueprintbiosecurity.org/works/kyc-report/>.

  32. International Biosecurity and Biosafety Initiative for Science. Accessed on October 21, 2024. <https://ibbis.bio/>.

  33. White House. "Nucleic Acid Synthesis Screening Framework." (September 2024), <https://www.whitehouse.gov/wp-content/uploads/2024/04/Nucleic-Acid_Synthesis_Screening_Framework.pdf>.

  34. See Max Langenkamp, "Clarifying the Problem of DNA Screening." (May 2023), _Available at SSRN 4569813_.

  35. Statista. "Pharmaceuticals - Vaccines - Worldwide." Accessed October 24, 2024. <https://www.statista.com/outlook/hmo/pharmaceuticals/vaccines/worldwide>.



