---
title: "Secure, Governable Chips"
url: https://cnas.org/publications/reports/secure-governable-chips
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2, e.g. funder-signals/longview-hems-rfp.md; compute governance (AI governance)"
---

Broadly capable AI systems, built and deployed using specialized chips, are becoming an engine of economic growth and scientific progress. At the same time, these systems also could be used by irresponsible actors to enable mass surveillance, conduct cyberattacks, and design novel biological weapons. This makes securing and governing the supply chain for AI chips important for mitigating risks to U.S. national security. But today’s semiconductor export controls are lackluster as a stand-alone solution. To be effective, they need to be far-reaching, which harms the competitiveness of U.S. firms, risks the “de-Americanization” of chip supply chains, and risks alienating commercial AI developers and partner nations. Far-reaching controls are also hard to enforce: AI chip smuggling is already happening today and could significantly grow in volume over the coming years.1

The unique challenges of AI governance and the opportunities afforded by modern security technologies suggest alternative approaches are both necessary and possible. What if policies concerning AI chips could be implemented directly on the chips themselves? What if updates to export regulations could be deployed through a simple software update, backed by secure hardware? This report introduces the concept of “on-chip governance mechanisms”: secure physical mechanisms built directly into chips or associated hardware that could provide a platform for _adaptive governance_. Its key findings are as follows.

**On-chip governance mechanisms could help safeguard the development and deployment of broadly capable AI and supercomputing systems in a way that is complementary to American technology leadership.** One especially promising near-term application is export control enforcement, where on-chip mechanisms could prevent or place boundaries around unauthorized actors’ use of export-controlled AI chips. Implemented well, this would greatly aid enforcement, and reduce the need for top-down export controls that harm the competitiveness of the U.S. chip industry, instead enabling more surgical end-use/end-user–focused controls if desired. Later applications include enforcing the terms of future international agreements or other regulations that govern the large-scale training and deployment of AI models. Here, on-chip mechanisms could widen the space of possible agreements and policies by providing a trustworthy verification platform. For example, on-chip governance mechanisms could allow AI developers to credibly report “training runs” that exceed certain computation thresholds, as called for by a recent White House Executive Order.2 The existence of these mechanisms could allow for flexible and efficient international governance regimes for AI, allowing policymakers to think beyond the limitations of slow and complex structures such as the International Atomic Energy Agency (IAEA).3  


**Much of the required functionality for on-chip governance is already widely deployed on various chips, including cutting-edge AI chips.** Chips sold by leading firms AMD, Apple, Intel, and NVIDIA have many of the features needed to enable the policies described above. These features are used today in a wide variety of applications. On the iPhone, on-chip mechanisms ensure that unauthorized applications can’t be installed. Google uses on-chip mechanisms to remotely verify that chips running in their data centers have not been compromised. Many multiplayer video games now work with a hardware device called a “Trusted Platform Module” to prevent in-game cheating. In the AI space, these features are increasingly used to distribute training across different devices and users while preserving privacy of code and data.4

**On-chip governance does not require secret monitoring of users or insecure “back doors” on hardware. On-chip governance is better implemented through privacy-preserving “verification” and “operating licenses” for AI chips used in data centers.** “Verification” involves the user of a chip making claims that are verifiable by another party about what they are doing with the chip. For example, verifying the quantity of computation or the dataset used in a particular training run.5 Secure on-chip verification of this kind is made possible by a “Trusted Execution Environment” (TEE). Because of the TEE’s security properties, the verifier can trust that information received from the TEE has not been “spoofed,” without the chip’s user needing to divulge sensitive data.6 “Operating licenses” provide an enforcement mechanism. This is useful in cases where, for example, the chip’s owner is found to have acquired the chip in violation of an export control agreement, or if the chip’s user refuses to participate in a legally required verification process. Operating licenses would be best enabled using a dedicated “security module” that links the functioning of the chip to a periodically renewed license key from the manufacturer (or a regulator), not unlike the product licenses required to unlock proprietary software. Hardware operating licenses of this kind are already used in some commercial contexts. These mechanisms should primarily be used on the specialized data center AI chips that are targeted by the current AI chip export controls. However, some limited mechanisms on consumer GPUs may be useful if, in the future, these devices are export-controlled.7

**Existing technologies need to be hardened before they can be relied upon in adversarial settings such as export control enforcement.** On-chip governance mechanisms are only useful insofar as they reliably work even when adversaries are actively attempting to circumvent them.8 Commercial versions of these technologies are not typically designed to defend against a well-resourced attacker with physical access to the hardware. Investments in hardware and software security will be required for on-chip governance mechanisms to function reliably in these kinds of environments. The specific defenses required to adequately secure on-chip governance mechanisms depend on the context in which they are deployed. This report explores three contexts: minimally, covertly, and openly adversarial.

**A staged approach to the development and rollout of on-chip governance for data center AI chips is possible.** Intermediate stages of R&D could still be useful in production contexts. In the short term, firmware updates could be deployed to exported AI chips implementing early versions of a hardware operating license linked to the terms of an export license. This would be useful as an additional cautionary measure for already-planned AI chip exports to high-diversion-risk geographies. A promising and relatively feasible next step would be to make devices “tamper-evident” (attempts to tamper with the chips would leave indelible evidence). This could be a sufficient level of security in cases where occasional physical inspections of the hardware are possible. For subsequent generations of AI chips, hardware security features could be further hardened, working toward full “tamper-proofing” to make physical inspections less necessary.

To motivate further investigation of on-chip governance, this report sketches an example architecture for data center AI chips that could provide a flexible platform for dynamically implementing different governance mechanisms. The core of this proposal is a hardened security module, included on all high-performance data center AI chips, that can ensure that the chip has valid, up-to-date firmware and software and, where applicable, an up-to-date operating license. If these conditions are not met, it would block the chip from operating.  


This valid, up-to-date firmware and software then could help enforce limits on the uses of these chips and offer sophisticated “remote attestation” capabilities (remote authentication to securely verify desired properties of the chip and the software it is running). The security module could ensure that if firmware/software vulnerabilities are found, users would have no choice but to update to patched versions where the vulnerability has been fixed. The security module also could be configured to require an up-to-date, chip-specific operating license.

Current AI chips already have some components of this architecture, but not all. These gaps likely could be closed with moderate development effort as extensions of functionality already in place. The primary technical challenge will be implementing adequate hardware security, particularly for tamper-evidence and tamper-proofing. This report estimates this could be achieved with as little as 18 months of involved technical effort (and up to 4 years) from leading firms.

Because a small number of allied countries encompass the supply chain for the most advanced AI chips, only a small number of countries would need to coordinate to ensure that all cutting-edge AI chips have these mechanisms built in. On-chip mechanisms would need to be supported by a way to track the ownership of data center AI chips, and some form of inspections to ensure these chips are not tampered with, where required.

On-chip governance mechanisms present a promising area for further research for computer engineers, computer scientists, and policy researchers. This report offers the following recommendations to U.S. policymakers to move toward a world where all leading AI chips are secure and governable.

up-arrow up-arrow

### Establish government coordination

**Recommendation:** The White House should issue an executive order establishing a NIST-led interagency working group, focused on getting on-chip governance mechanisms built into all export-controlled data center AI chips. 

**Background:** For on-chip governance to reach commercial scale, long-term collaboration between government and industry will be required. For progress to be made quickly, an executive order could be an appropriate forcing function. The National Institute of Standards and Technology (NIST) would make a suitable lead for this effort. Expertise and staff also should be drawn from the Department of Energy, the Department of Defense, the Department of Homeland Security, the National Science Foundation, and the U.S. intelligence community. The working group should also be informed by a technical panel drawn from industry and academia to help direct technical standards and research.

up-arrow up-arrow

### Create commercial incentives

**Recommendation:** The Department of Commerce (DoC) should incentivize U.S. chip designers to conduct necessary R&D using “advance export market commitments.”9

**Background:** Given that on-chip governance mechanisms need to be implemented on commercial chips, much of the necessary R&D will need to happen in an industry setting. To incentivize this work, the DoC should consider making commitments related to future access to export markets to U.S. chip firms, conditional on firms implementing a specific set of security features on controlled products. Such commitments would be an effective way of incentivizing the necessary R&D without spending public money, given the large amount of lost revenue to chip firms caused by export restrictions.10 Export market commitments could include not extending export controls to new jurisdictions, relaxing the “presumption of denial” licensing policy for chip exports to lower-risk customers in China, or moving toward more surgical end-use or end-userbased controls. The DoC should develop the required feature sets by analyzing specific attacker threat models in different export contexts, in coordination with the U.S. Intelligence Community and Department of Homeland Security.

up-arrow up-arrow

### Accelerate security R&D

**Recommendation:** NIST should coordinate with industry and relevant government funding bodies to scope, fund, and support R&D that can be conducted outside leading chip companies and integrated later. 

**Background:** While the large majority of R&D will need to be conducted by the firms building and selling AI chips at scale, some work may be usefully conducted outside of these firms, especially technologies that would benefit from being standardized across the industry. NIST should coordinate with the Semiconductor Research Corporation, relevant Defense Advanced Research Projects Agency (DARPA) program managers, and other relevant government funding bodies to scope and fund useful R&D to be performed by academic and/ or commercial partners. For example, work on specialized tamper-proof enclosures (physical housings for chips that prevent the chip from being modified without compromising its operation) for high-end chips could be potentially outsourced to academic and commercial hardware security labs. To support these projects, NIST should create technical standards and reference implementations for on-chip governance mechanisms that are designed for wide adoption by industry.

up-arrow up-arrow

### Plan for a staged rollout and fund extensive red-teaming

**Recommendation:** To ensure that on-chip governance mechanisms are properly designed and safely introduced, the DoC and Department of Homeland Security (DHS) should establish flexible export licensing and redteaming programs. 

**Background:** On-chip mechanisms will require substantial testing before being relied upon in more adversarial environments (e.g., exports of controlled chips to China). To facilitate a staged rollout approach where mechanisms can be depended upon in successively more challenging operating contexts, the DoC should create export licensing arrangements where licenses can be flexibly granted for different geographies based on the security features on the device to be exported. In tandem, the Cybersecurity and Infrastructure Security Agency within DHS should establish red-teaming and bug bounty programs to help find and patch any software and hardware security vulnerabilities. A promising near-term starting point is setting up a public prize for finding vulnerabilities in hardware security features on today’s AI chips.

up-arrow up-arrow

### Coordinate with allies

**Recommendation:** The State and Commerce Departments should coordinate with allies on policies and standards for on-chip governance. 

**Background:** As with many other forms of technology governance, on-chip governance will be of limited effectiveness without international buy-in. The State and Commerce Departments should include the potential role of on-chip governance mechanisms in diplomatic discussions with countries that occupy important positions in the supply chain for cutting-edge AI chips (especially Taiwan, the Netherlands, South Korea, and Japan), including potential new multilateral control regimes.11 Looking beyond export control coordination, using on-chip governance mechanisms to facilitate AI governance cooperation (e.g., international agreements on compute usage reporting) would benefit from close coordination with like-minded allies, such as the United Kingdom and the European Union.

up-arrow up-arrow

### Encourage AI chip firms to move early

**Recommendation:** Chip firms should be encouraged to move early to build and harden the security features required for on-chip governance. 

**Background:** The United States has signaled interest in on-chip governance in a recent request for comment issued by the Department of Commerce.12 Chip suppliers that are more able to apply and build on existing technical efforts will have a head start on demonstrating and realizing compliance, with potential benefits in terms of access to markets that are the subject of export controls or other relevant regulation.

Developing and deploying the mechanisms described in this report will take time (months in the most optimistic case, years in the most likely case). If the capabilities and national security risks of AI systems continue to grow at the pace observed in 2022 and 2023, the need for highly effective controls could become acute in several years. This suggests that policymakers concerned about this issue should begin formulating policies and incentivizing the development of appropriate technologies now. Once the relevant security features have been mandated in the most powerful AI chips, they need not be used immediately: The mechanisms outlined in this report would allow for rapid and flexible responses to new developments and threats once installed.

Download the Full Report.

[Download PDF](https://s3.us-east-1.amazonaws.com/files.cnas.org/documents/CNAS-Report-Tech-Secure-Chips-Jan-24-finalb.pdf)

## Endnotes

  1. Tim Fist and Erich Grunewald, “Preventing AI Chip Smuggling to China,” Center for a New American Security, October 27, 2023, <https://www.cnas.org/publications/reports/preventing-ai-chip-smuggling-to-china>. ↩
  2. A “training run” is a computational workload, often distributed across multiple chips, where large quantities of data are used to “train” an AI model to perform some task. The recent Executive Order requires U.S. AI developers to report any training run that exceeds a certain threshold of computation, measured in “operations.” It also requires U.S. cloud computing providers to report training runs conducted by their non-U.S. customers, using the same threshold. “Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence,” the White House, October 30, 2023, <https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/>. ↩
  3. Some have called for an “IAEA for AI” model to meet the challenges of global AI governance: John Mecklin, “Why the IAEA Model May Not Be Best for Regulating Artificial Intelligence,” _Bulletin of the Atomic Scientists_ , June 9, 2023, <https://thebulletin.org/2023/06/why-the-iaea-model-may-not-be-best-for-regulating-artificial-intelligence/>. ↩
  4. Fan Mo, Zahra Tarkhani, and Hamed Haddadi, “Machine Learning with Confidential Computing: A Systematization of Knowledge,” arXiv, April 2, 2023, <http://arxiv.org/abs/2208.10134>.; Fan Mo et al., “PPFL: Privacy-Preserving Federated Learning with Trusted Execution Environments,” arXiv, June 28, 2021, <http://arxiv.org/abs/2104.14380>; and Xiaoguo Li et al., “A Survey of Secure Computation Using Trusted Execution Environments,” arXiv, February 23, 2021, <http://arxiv.org/abs/2302.12150>. ↩
  5. For example, a recent White House executive order requires AI developers to report the development of models trained with “biological sequence data” above a certain computation threshold. Such regulations could evolve to require more formal verification of which dataset was used in training, especially if such regulation applied to foreign AI developers accessing U.S. compute via the cloud or U.S.-produced chips. The hardware security features described in this report could enable this, perhaps using a “Proof of Training Data” protocol of the kind described here: Dami Choi, Yonadav Shavit, and David Duvenaud. “Tools for Verifying Neural Models’ Training Data,” July 2, 2023, <https://doi.org/10.48550/arXiv.2307.00682>. ↩
  6. In the information security context, “spoofing” refers to the falsification of data by an attacker. See “Spoofing Attack,” Wikipedia, [https://en.wikipedia.org/w/index.php?title=Spoofing_attack&oldid=1166570796](https://en.wikipedia.org/w/index.php?title=Spoofing_attack&oldid=1166570796). ↩
  7. Ideally, this would be avoided by chip firms further differentiating consumer and data center GPU designs. However, the Commerce Department recently added a notification requirement for exports of consumer chips with AI-relevant capabilities, suggesting that some consumer GPUs may be export-controlled in the future. “Implementation of Additional Export Controls: Certain Advanced Computing Items; Supercomputer and Semiconductor End Use; Updates and Corrections.”, Supplementary information section C.2, _88 Fed. Reg. 73458_ , October 25, 2023, <https://www.federalregister.gov/d/2023-23055/p-204>. ↩
  8. Following cybersecurity conventions, this report uses the term “adversary” to refer to anyone attempting to circumvent or compromise an on-chip mechanism. Thus, the adversary need not be an adversary in a broader sense and can instead be, e.g., a company attempting to evade regulations. ↩
  9. “Advance market commitments” (AMCs), a relatively new idea, describe binding contracts offered by a government to guarantee a viable market for a product once it has been successfully developed. AMCs have seen success in incentivizing the development of new vaccines: Federation of American Scientists, “Creating Advanced Market Commitments and Prizes for Pandemic Preparedness,” <https://fas.org/publication/creating-advanced-market-commitments-and-prizes-for-pandemic-preparedness/>. ↩
  10. Stephen Nellis and Jane Lee, “U.S. Officials Order Nvidia to Halt Sales of Top AI Chips to China,” Reuters, September 1, 2022, <https://www.reuters.com/technology/nvidia-says-us-has-imposed-new-license-requirement-future-exports-china-2022-08-31/>. ↩
  11. Emily Benson and Catharine Mouradian, “Establishing a New Multilateral Export Control Regime,” Center for Strategic and International Studies, November 2, 2023, <https://www.csis.org/analysis/establishing-new-multilateral-export-control-regime>. ↩
  12. “Implementation of Additional Export Controls: Certain Advanced Computing Items; Supercomputer and Semiconductor End Use; Updates and Corrections.”, Supplementary information section D.2, _88 Fed. Reg. 73458_ , October 25, 2023, <https://www.federalregister.gov/d/2023-23055/p-350>. ↩



##  Authors 

  * ###  [Onni Aarne](https://www.cnas.org/people/onni-aarne)

Consultant, Institute for AI Policy and Strategy

Onni Aarne is a contributing author to a CNAS report. He is a consultant with the compute governance team at the Institute for AI Policy and Strategy. He previously conducted ... 

  * ###  [Tim Fist](https://www.cnas.org/people/tim-fist)

Senior Adjunct Fellow, Technology and National Security Program

Tim Fist is a Senior Adjunct Fellow with the Technology and National Security Program at CNAS. His work focuses on the governance of artificial intelligence using compute/comp... 

  * ###  [Caleb Withers](https://www.cnas.org/people/caleb-withers)

Research Associate, Technology and National Security Program

Caleb Withers is a research associate for the Technology and National Security Program at the Center for a New American Security (CNAS). He focuses on frontier artificial inte... 




##  More from CNAS 

  * [ ](https://www.cnas.org/publications/reports/red-lines) Reports

[Technology & National Security](https://www.cnas.org/research/technology-and-national-security)

[Red Lines](https://www.cnas.org/publications/reports/red-lines)

Chinese advanced artificial intelligence (AI) systems pose a serious and growing threat to U.S. national security. At least seven Chinese developers now produce systems with f... 

By Daniel Remler 

    * June 12, 2026
  * [ ](https://www.cnas.org/publications/commentary/taiwan-is-the-key-to-ai-dominance) Commentary

[Technology & National Security](https://www.cnas.org/research/technology-and-national-security)

[Taiwan Is the Key to AI Dominance](https://www.cnas.org/publications/commentary/taiwan-is-the-key-to-ai-dominance)

A country determined to win the defining technological race of the century can’t allow its chief rival to control the industrial base on which that race depends.... 

By David Feith 

    * The Wall Street Journal
    * May 14, 2026
  * [ ](https://www.cnas.org/publications/reports/american-ai-companies-cant-get-enough-chips) Reports

[Technology & National Security](https://www.cnas.org/research/technology-and-national-security)

[American AI Companies Can’t Get Enough Chips](https://www.cnas.org/publications/reports/american-ai-companies-cant-get-enough-chips)

In 2026, artificial intelligence (AI) chip production has become a binding constraint on the pace of the AI compute buildout. Demand for computing power to train and deploy ad... 

By James Sanders, Janet Egan & Rory Madigan 

    * May 7, 2026
  * [ ](https://www.cnas.org/publications/reports/off-target) Reports

[Technology & National Security](https://www.cnas.org/research/technology-and-national-security)

[Off Target](https://www.cnas.org/publications/reports/off-target)

The pace of progress in frontier artificial intelligence (AI) capabilities shows no sign of slowing. Frontier models offer transformative potential for national security—from ... 

By Caleb Withers, Jay Kim & Ethan Chiu 

    * March 24, 2026



[View All Reports](/reports) [View All Articles & Multimedia](/articles-multimedia)
