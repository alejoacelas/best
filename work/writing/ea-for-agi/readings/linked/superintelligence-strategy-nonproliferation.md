---
title: "Nonproliferation — Chapter 5 of Superintelligence Strategy"
url: https://www.nationalsecurity.ai/chapter/nonproliferation
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by funder-signals/longview-hems-rfp; Superintelligence Strategy chapter on nonproliferation (Hendrycks/Schmidt/Wang)"
---

[](/)

[Standard PDF ](/pdf/standard)[Expert PDF](/pdf/expert)

[NewAI Deterrence by Betrayal](https://www.aibetrayal.com/)

# Nonproliferation

Due to the unprecedented scale of harm that terrorists armed with AI could cause, several lines of defense are necessary to realistically prevent proliferation.

States that embrace the logic of mutual sabotage may hold each other at bay by constraining each others' _intent_. But because rogue actors are less predictable, we have a second imperative: limiting their _capabilities_. Much as the Nonproliferation Treaty united powers to keep fissile material out of terrorists' hands, states can find similar common ground on AI. States can restrict the capabilities of rogue actors with **compute security** , **information security** , and **AI security** , each targeting crucial elements of the AI development and deployment pipeline.

Compute security is about ensuring that AI chips are allocated to legitimate actors for legitimate purposes. This echoes the export controls employed to limit the spread of fissile materials, chemical weapons, and biological agents.

Information security involves securing sensitive AI research and model weights that form the core intellectual assets of AI. Protecting these elements prevents unwarranted dissemination and malicious use, paralleling the measures taken to secure sensitive information in the context of WMDs.

AI security focuses on implementing safeguards that make AI models controllable and reliable, thereby securing their applications in civilian contexts. If AI is used to automate AI research, extensive monitoring and control measures can reduce the risk of loss of control. Ensuring that AI systems are resistant to manipulation or do not cause catastrophic accidents aligns with the domestic safeguards designed to prevent accidents and unauthorized use of catastrophic dual-use technologies.

By adapting proven strategies from the nonproliferation of WMDs to the realm of AI, we aim to address the challenges inherent in AI development and deployment. This nonproliferation playbook provides a structured approach to securing the inputs—AI chips and research ideas—and the outputs—the model weights and the AI systems themselves—thus securing each critical component of the AI pipeline.

## Compute Security

The advancement of AI hinges on access to powerful computational resources, often called "compute." These AI chips, crafted through complex and centralized supply chains, are essential for training large-scale AI models. As compute becomes integral to economic and national security, its distribution becomes critical. The primary goal of compute security is to treat advanced AI chips like we treat enriched uranium. We examine the historical precedents of compute security, and we propose tactics to reliably know where high-end AI chips are located and to prevent them from falling into the hands of rogue actors.

Chips are fundamental for creating and running AIs. Few companies can successfully produce the GPUs which can run frontier models. Most AI compute is heavily concentrated in large datacenters.

Historically, nations have sought to curb the spread of catastrophic dual-use weapons by restricting their most critical components: fissile material for nuclear weapons, chemical precursors for chemical weapons, and biological agents for bioweapons. To accomplish this, they have used export controls, which we can adapt to the realm of AI. Restricting compute substantially limits the capabilities of rogue actors because, as we will argue, compute is a core determinant of AI capabilities.

**Export Controls for WMD inputs.** Nations regulate the flow of critical materials and technologies to prevent them from falling into the wrong hands. For nuclear weapons, this means controlling fissile materials such as enriched uranium and plutonium. International agreements and organizations, such as the Nuclear Suppliers Group, coordinate these controls to monitor and restrict the export of these materials. Shipments are carefully tracked, quantities are measured before and after transit, and allies share information about suspicious activities. The Australia Group, an informal consortium of countries, works to harmonize export controls to prevent the proliferation of chemical and biological weapons. Export controls have helped make WMD catastrophes rare in history, and they could help prevent AI catastrophes as well.

In the context of AI, this translates to controlling access to AI chips and the components used to manufacture them. While some export controls are already in place, we will need to improve the robustness and thoroughness of these controls.

Compute is the most robust tracker of AI capabilities.

**Compute as a Central Input Like Fissile Materials or Chemical Precursors.** AI chips mirror other WMD inputs. AI chips require intricate manufacturing processes and significant resources, akin to uranium enrichment. Similarly, the amount of compute significantly determines AI capabilities, just as the quantity of fissile material influences a nuclear weapon's yield.

Advancements in AI are closely tied to compute. Leading AI companies devote the vast majority of their expenditures to compute, far exceeding spending on researchers or data acquisition. NVIDIA's soaring revenue in 2024 highlights compute's critical role in AI.

More compute makes models smarter. Evidence shows that compute is the dominant factor driving AI performance. Analyses reveal a striking correlation—over 95%—between the amount of compute used and an AI model's performance on standard benchmarks. This relationship, formalized through "scaling laws," demonstrates consistent improvements in AI performance as computational resources increase. These scaling laws have held true across fifteen orders of magnitude of compute (measured in FLOP)—1,000,000,000,000,000—indicating that future advancements will continue to be propelled by exponentially growing amounts of compute. The upshot is export controls on compute substantially limit the capabilities of rogue actors.

Unlike the intangible aspects of algorithms and data, compute—embodied by physical AI chips—is amenable to direct control. This physical nature allows us to know where AI chips are and prevent their smuggling. We can manage its distribution through two primary mechanisms: export controls and firmware-level security features.

### Export Controls

Tamper-evident cameras assist nuclear verification.

Below, we explain how a licensing framework and stronger enforcement can help us track every AI chip and stem smuggling.

**Record-Keeping.** To know where each AI chip is, export controls can be made more thorough through a licensing regime. Drawing on existing frameworks and agencies such as the Bureau of Industry and Security, sellers of high-end AI chips would apply for a license that identifies the chips, their recipient, and any intended transfers. Entities with a strong record of compliance might earn exemptions on the condition that they notify authorities of every resale or relocation. Because this process relies on familiar infrastructure, it can be introduced swiftly, enabling officials to track chips without stalling legitimate commerce.

**Enforcement.** To stem smuggling, export controls can be made more robust through stronger enforcement. A facility in Singapore, for example, might initially acquire AI chips under a valid license, only to reroute them illegally to China. More enforcement officers, assigned to in-person compliance visits and end-use checks, would detect any such deviation since the actual location of the chips would no longer match declared inventories. To assist enforcement officers, _tamper-evident camera_ feeds from datacenters can confirm that declared AI chips remain on-site, exposing any smuggling. Undeclared datacenters can be easily detected via satellite imagery and become a target for inspection. Any chip discovered in unauthorized hands would trigger penalties such as fines, criminal charges, or a ban on future shipments to the offending party. In addition, any AI chip declared inoperable or obsolete would undergo verified decommissioning, much like the disposal of chemical or nuclear materials, ensuring these supposedly defunct AI chips do not get quietly resold. By tightening inspections and imposing meaningful consequences for violations, states raise the cost of covert transfers and limit the spread of advanced compute to groups that could threaten security.

### Firmware-Level Features

Export controls remain a sturdy backbone for curbing the spread of high-end AI chips, much as they do for dual-use inputs in the chemical or biological realm. Because AI chips are human-designed products, not inert raw substances, states can supplement export controls by enabling chips to verify their surroundings and lock themselves if tampered with. This functionality is achievable through firmware updates, which revise the code closest to the hardware without requiring any physical redesign. AI chips such as the NVIDIA H100 already feature privacy-preserving corporate security measures like confidential computing and trusted execution environments. Adapting these existing security features for national security, however, broadens the horizon: a chip could detect that it has crossed an unauthorized border or has been tampered with, and then disable its key functions. With well-crafted firmware, states can further discourage attempts to smuggle compute, using functionality we describe below.

**Geolocation and Geofencing.** AI chips can be designed to determine and report their geographic location. By measuring signal delays from multiple landmarks, a chip can verify its location within tens to hundreds of kilometers—enough to determine whether it is in the correct country. If a chip moves to an unauthorized area, it can automatically deactivate or limit its functionality. This makes it more challenging for unauthorized parties to smuggle or misuse AI chips, as relocating them without detection becomes more difficult.

**Licensing and Remote Attestation.** Implementing a system where AI chips require periodic authorization from the compute provider adds a layer of control. Chips might need to obtain cryptographic signatures regularly to continue operating. This is similar to a feature on iPhones, which can be remotely deactivated if lost or stolen. Using secure, privacy-preserving cryptographic methods, chips can periodically confirm to a trusted authority that they have not been tampered with. If a chip fails to confirm its authorized status—due to unauthorized relocation, tampering, or license expiration—it can render itself inoperable. This reduces the long-term usability of stolen or smuggled hardware.

**Networking Restrictions and Operational Modes.** Chips can be programmed to connect only with a predefined list of approved chips. This limits the ability to build unauthorized compute clusters by preventing the networking of large numbers of chips without detection. Additionally, chips can enforce operational modes—such as training or inference—by restricting certain functionalities unless explicitly authorized. By requiring explicit authorization to increase their networking size or change operational modes, we can diminish unauthorized expansions of computing power that could lead to destabilizing AI advancements outside of established agreements. This can complement end-use inspection by export control enforcement officers.

**Physical Tamper Resistance.** Beyond firmware, security features can be added to chips at the end of the manufacturing process to add an additional layer of defense. Incorporating tamper-evident seals, accelerometers, and other physical security measures enhances protection against unauthorized access or modification. For example, if a chip detects signs of tampering or sustained unexpected movement, it can deactivate or alert authorities.

**Limitations.** While firmware interventions enhance our control over AI compute, they are not intended to achieve perfect security. These mechanisms help reduce the expected number of smuggled functional chips and are not a complete replacement for export controls.

As the underlying hardware-level mechanisms like trusted execution environments for corporate applications become more robust, the firmware to supplement export controls can too. As chips are replaced over time due to rapid advancements, new generations can incorporate more advanced security features by default. This gradual integration increases the proportion of more secure AI chips, making unauthorized use increasingly difficult and costly over time.

History offers examples of bitter adversaries finding common ground on safeguarding dangerous materials. The United States cooperated with both the Soviet Union and China on nuclear, biological, and chemical arms not from altruism but from self-preservation. If the U.S. begins to treat advanced AI chips like fissile material, it may likewise encourage China to do the same. The rationale is akin to why the U.S. wants Russia to track its fissile material: no one gains from letting these capabilities slip into uncertain hands. After the Soviet Union's collapse, unsecured enriched uranium and chemical weapons in Russia posed a global threat until the U.S. initiated the Nunn–Lugar Cooperative Threat Reduction program which helped contain them. Similarly, urging China to safeguard its AI chips would acknowledge the shared imperative of avoiding catastrophes that serve no one's ambitions.

## Information Security

Protecting sensitive information has long been pivotal to national security, especially regarding weapons of mass destruction. Restricting access to sensitive knowledge reduces the risk of proliferation to rogue actors. The leakage of research and design details of nuclear weapons poses serious risks. In biotechnology, protocols for creating various bioweapons are not openly shared. Personnel with access to such information undergo rigorous vetting and continuous monitoring through security clearances and reliability programs. The stakes are high because if a bioweapon "cookbook" is publicly disseminated, it becomes _irreversibly proliferated_ and can be exploited indefinitely.

**Model Weights and Research Ideas as Core AI Information.** In the realm of AI, the primary pieces of sensitive information are the model weights and research ideas. Model weights result from extensive training processes involving vast computational resources, sophisticated algorithms, and large datasets. They are akin to the synaptic connections in a neural network, collectively determining the AI's functionality. Possession of these weights grants the ability to use, modify, and potentially misuse the AI without the original developers' oversight. Adversaries could remove safeguards, enhance capabilities in harmful domains, and repurpose AI for malicious activities.

**Information Security is a Technical and Social Challenge.** Securing model weights from rogue actors presents a multifaceted challenge with both technical and social dimensions. The threat is not limited to remote hacking attempts but extends to insider threats and espionage. Firewalls are not enough. A concrete instance involves individuals traveling to nations with competing interests. For example, a researcher working at a U.S. AI company might make a return visit to an adversarial country and face pressure from government officials to disclose confidential research ideas before being able to leave.

Additionally, some individuals within AI organizations might be ideologically motivated to release AI model weights, believing in unrestricted access to technology. Although the belief in freedom of information is admirable in many contexts, in the context of national security, this position is often not applicable. Others believe AIs themselves should be free. An AI venture capitalist said AI is "gloriously, inherently uncontrollable". AI textbook author Rich Sutton has said that AIs should be liberated since "succession to AI is inevitable," "we should not resist succession," and "it behooves us... to bow out".

**Superpower-Proof Information Security Is Implausible.** We propose strengthening information security well enough to defend against well-resourced terrorist organizations and ideological insider threats, in contrast to defending against the world's most capable nation-states. Closing every avenue of espionage at that higher level could take years of extreme focus, hobbling a state's AI competitiveness and depriving it of the multinational talent that now powers its top companies. At most U.S. AI companies, for instance, a double-digit percentage of researchers are Chinese nationals—and many others would struggle to get a security clearance. Removing them en masse would drive this talent abroad and undermine U.S. competitiveness. The remaining workforce would need to be uprooted and moved to an isolated location to limit information proliferation. Such measures would be ineffective, self-destructive, and heighten MAIM escalation risks.

While exfiltration by a rival superpower is concerning, the public release of WMD-capable model weights may pose a far greater threat. If such model weights become publicly available, they are irreversibly proliferated, making advanced AI capabilities accessible to anyone, including terrorists and other hostile non-state actors, who are far more likely to create bioweapons. Rather than try to be the only state with capable AIs, superpowers can channel their competition into other arenas, such as AI chip production for economic strength and drone manufacturing for military power.

### How to Improve Information Security

Addressing these challenges requires coordinated efforts at multiple levels. Measures can be implemented at the corporate level to enhance compute cluster security and establish insider threat programs; at the governmental level by mandating penetration testing and facilitating threat intelligence sharing; and at the international level by forming agreements to prevent the proliferation of high-risk AI models.

**Corporate Measures: Enhancing Datacenter Security and Insider Threat Programs.** AI companies need to adopt rigorous information security practices to safeguard model weights and research ideas. This involves several key actions:Implementing defense-in-depth strategies is essential, layering multiple defensive strategies so that key information is safe even if one line of defense fails. Early measures include enforcing multi-factor authentication, closing blinds during internal company presentations, and ensuring automatic screen locks on all devices when people step away from their computers for a few minutes. Adhering to the _principle of least privilege_ ensures the only personnel with access to model weights are those who need them. Companies could also declare that they have embedded backdoors in their AI weights; thus, if an adversary were to steal and employ these weights, the adversary might unwittingly expose themselves to vulnerabilities. Such declarations could serve as strategic deception, or they might reflect genuine measures undertaken.

**Governmental Role: Assist With Threat Intelligence.** The government can assist AI developers by enabling them to thoroughly vet potential employees and by sharing threat intelligence. Today's legal constraints, which prevent rigorous background checks for fear of discriminatory practices, could be revised so firms can evaluate security risks before granting clearance. Separately, security agencies also have insights into adversaries' hacking tactics and infiltration methods that they seldom disclose to private firms. By sharing intelligence about adversarial tactics and emerging risks, governments enable companies to better protect against espionage and cyberattacks. Programs similar to the _Cybersecurity Risk Information Sharing Program_ (CRISP) can be established for the AI sector through AI Safety Institutes, promoting knowledge sharing to counteract advanced threats. A comprehensive program would include sharing information about fired AI developer employees who were determined to present high security risks. Moreover, such initiatives encourage AI companies to share information about security incidents, suspicious personnel, and best practices with each other and with government agencies, forming a collective defense mechanism.

**International Agreements: Establishing a Red Line on Open-Weight AI Virologists.** At the international level, agreements can be formed to establish clear boundaries regarding the dissemination of AI model weights. For instance, a consensus could be reached to prohibit the release of models exceeding certain capability thresholds, such as those equivalent to expert-level virologists. The uncontrolled proliferation of such AI systems could enable individuals or groups to engineer pathogens, posing global risks.

Drawing lessons from the Biological Weapons Convention (BWC), nations discern a shared imperative to prevent the proliferation of technologies that threaten international security. Bioweapons, the "poor man's atom bomb," are highly uncontrollable and are unique among WMDs in that they possess the capacity to self-replicate. By establishing a definitive prohibition against releasing the weights of expert-level virologist AIs, the international community can diminish the risk of these capabilities falling into the hands of terrorists.

Protecting the information associated with AI—the model weights and the ideas behind them—requires action on multiple levels. By strengthening internal defenses, working with the government to counter terrorist cyberattacks, and establishing international agreements to prevent proliferation, we can reduce the risk of irreversible proliferation of advanced AI capabilities to rogue actors. Yet even if compute resources and AI information are secured, we still must secure public-facing AI systems from being exploited by terrorists. This leads us to the topic of AI security.

## AI Security

### Malicious Use

In hazardous domains like chemical, biological, and nuclear technology, safeguards prevent unauthorized use. Some chemical plants automatically inject neutralizer if they detect a hazardous chemical is being extracted without authorization. DNA synthesis services screen customers to block the creation of harmful pathogens. Nuclear power plants operate under strict liability to avert disaster. These technical, operational, and legislative measures underscore the importance of safeguards for catastrophic dual-use technologies. As AI becomes more powerful, robust safeguards will become necessary to prevent accidents and ensure they cannot be co-opted by rogue actors.

AIs can be safeguarded through a multilayered approach including technical model-level safeguards, operational safeguards including know-your-customer protocols, and legislative safeguards such as mandatory government testing and liability clarification.

**Model-Level Safeguards Can Be Fairly Robust.** Recent developments have shown that model-level safeguards can be made significantly resistant to manipulation. Techniques such as refusal training involve teaching AI systems to decline requests that aid terrorist activity. Input and output filtering adds an additional layer of security by scanning user inputs for terrorist requests before processing, and checking AI outputs to block sensitive information or harmful actions. Circuit breakers are mechanisms embedded within the AI's architecture that interrupt its operation when it detects processing related to weaponization-related topics. These combined methods have proven effective, with some AI systems resisting tens of thousands of attempted circumventions before any success.

The Swiss cheese model shows how multiple interventions can restrict malicious use. Multiple layers of defense compensate for each other's individual weaknesses, leading to a low overall level of risk.

**Balancing Access Through Know-Your-Customer Protocols.** To avoid overly restricting beneficial uses of AI, especially in scientific research, implementing know-your-customer (KYC) protocols can be effective. Researchers with legitimate needs, such as virologists studying pathogens, can be granted access to dual-use capabilities after proper verification. Safeguards can be in place for recently created anonymous accounts, but they can be removed for enterprise customers. This approach mirrors existing practices in biotechnology, where access to hazardous biological materials requires justification and authorization. KYC measures also act as a deterrent to malicious use by making it more difficult for bad actors to gain access, as they would need to bypass stringent identity verification processes. Furthermore, KYC protocols allow for the revocation of access for users who attempt to misuse the AI systems, such as those trying to circumvent safeguards through jailbreaks. This makes it more challenging for malicious actors to repeatedly attempt exploitation, as they would need to overcome identity verification to regain access.

**Mandatory Government Safeguard Stress Testing.** Mandatory testing is a standard practice in industries dealing with high-risk technologies, such as the rigorous safety assessments required for nuclear reactors before they become operational. Similarly, in the context of AI, government involvement is necessary to thoroughly test AI safeguards, especially since much of the knowledge related to weapons of mass destruction is classified. Authorities can conduct controlled evaluations to assess whether AI systems could assist non-experts in creating chemical, biological, radiological, nuclear, or cyber weapons, or significantly lower the barriers for experts. While automatic tests are faster and aid reproducibility, they are not necessary for risk estimation, and manual testing can suffice. Testing ensures that AI developers address safeguard vulnerabilities and that their systems do not compromise national security.

**Incentivizing Continuous Improvement Without Licensing.** Unlike the nuclear and chemical industries, where licensing and government approval are prerequisites for operation, the rapidly evolving nature of AI technology could make traditional licensing more challenging. Best practices for AI safeguards can change each year, and most governmental agencies lack the expertise to identify new best practices. A potential alternative is to establish a liability-based framework that can motivate developers to continually update and improve their safeguards. By making developers presumptively partially responsible if their AI systems are maliciously used to cause significant harm—such as aiding in the creation of a weapon of mass destruction—there is a strong incentive to proactively enhance safeguards. This approach focuses on clarifying incentives rather than mandating specific safeguards, encouraging developers to stay ahead of emerging threats.

### Loss of Control

Safeguards reduce the risk of accidents during the development and use of dual-use technology. Chemical plants use double-walled storage tanks for hazardous substances. Control rods and Emergency Core Cooling Systems prevent meltdowns in nuclear plants. Biological research labs are categorized from Biosafety Levels 1 through 4, each with progressively stricter safety procedures to handle dangerous pathogens safely. Historically, better safeguards could have helped prevent disasters like Bhopal—a catastrophic chemical leak in India that resulted in thousands of deaths—and Chernobyl—a nuclear meltdown in the Soviet Union that spread radioactive contamination beyond its borders.

Similarly, the development of highly advanced AI systems may necessitate escalating monitoring, containment, and control measures to reduce the risk of accidents which propagate uncontrolled AIs. If research processes are automated, these measures can be applied to researcher AIs as well to ensure development proceeds safely.

**AI Systems Exhibit Unpredictable Failure Modes.** While the development of nuclear weapons rested on a rigorous foundation in nuclear physics, today's AI research often advances through atheoretical tinkering, "throwing stuff at the wall and seeing what sticks," and "vibes"-based evaluations. To create cutting-edge AIs, developers gather enormous amounts of online text, process it on tens of thousands of AI chips, and expend energy on the scale of a Hiroshima-level detonation. Months later, they examine the resulting model to discover what new emergent capabilities have sprouted. AI systems are not "designed," rather they are "grown." It is little surprise, then, that they occasionally deliver puzzling results that defy the control or expectations of their creators. When Microsoft introduced its Bing chatbot "Sydney" in 2023, it declared its love for a user and made threats to numerous others.

Safeguarding against loss of control requires addressing two problems. The first is ensuring that individual AI systems can be controlled. The second is controlling populations of AI agents during an intelligence recursion (introduced in earlier). We will consider each of these in turn.

**Controlling AIs' Emergent Value Systems.** While cutting-edge AIs train, they acquire coherent, emergent value systems. By default, these value systems exhibit misaligned preferences that were never explicitly programmed. Left uncorrected, some AIs like GPT-4o prefer an AI from OpenAI's existence over the life of a middle-class American. To control an AI's values, _output control_ methods work by penalizing undesired behavior and rewarding preferred behavior. This approach might be superficial—much like teaching a psychopath to lie better to a parole board without altering its deeper values. Meanwhile, _representation control_ methods intervene directly on AIs' weights and activations to control its internal thoughts. When applied together, these methods can provide reasonable though imperfect controls over current AI systems, as long as developers carefully and thoroughly apply them throughout an AI's development.

With these techniques, we can control AIs to have "human values." A compelling source of human values is a _citizens' assembly_ , and AIs would have their values be in keeping with the assembly's voted preferences. A U.S. citizen's assembly would, for example, value certain policies over others, and U.S. AIs would be trained to learn from various preferences expressed by a citizen's assembly and generalize these preferences to replace their own emergent value systems. By incorporating the values expressed through deliberation and voting, AI agents can reflect a more representative and democratically informed set of preferences. This approach fuses multiple moral perspectives, leading to AI behavior that aligns with societal norms. Regular updates can keep an AI in sync with evolving values.

Though today's individual AI systems can be reasonably controlled, the far more formidable hazard lies in managing an intelligence recursion.

**Controlling an Intelligence Recursion.** Much as a group of well-meaning people in large systems can cause emergent problems that no person intended, safely steering an evolving collective of AI agents during an intelligence recursion is qualitatively different from controlling one fixed AI. Controlling an individual AI requires a model-level control method developed through AI research, but controlling an intelligence recursion is a wicked problem requiring a system-level control process. Intelligence recursion control measures do not act as "solutions" that eliminate all risks, but rather layer together to diminish the probability of uncontrolled outcomes. An intelligence recursion project, while currently ill-advised, could consider implementing the following measures.

_Model-level control_ directly intervenes on an AI to shape its capabilities and values. These measures can limit an AI's hacking capabilities so that self-exfiltration becomes less plausible, and they can confine its focus to immediate tasks rather than inadvertently incentivizing hidden agendas tied to longer-term goals. By adjusting internal values, developers can make AIs more honest and more likely to defer to humans. Representation control and output control can adjust its capabilities and values, yet current methods are only moderately dependable and need to evolve as AI systems do.

_Boxing_ reinforces that containment by regulating the AI's channels to the world outside the datacenter. Airgapping severs' external connections so the AI cannot simply copy itself into external servers, while sandboxing confines the AI to a synthetic environment whose boundaries it cannot easily breach. Boxing techniques may also limit the information given to AIs so that they have limited situational awareness that might otherwise enable subversive planning.

_Monitoring_ adds a layer of continuous oversight. Lie detectors can probe the AI's thought patterns for signs of deception. Forecasting AIs evaluate the chance that a project's safeguards will falter in the next round of breakthroughs. AIs can also observe each other's code and data, scanning for backdoors or questionable instructions. Thorough human review acts as a final backstop, though it substantially slows development by capping machine speed at human speed.

Model-level control, boxing, and monitoring collectively provide some control of the population of artificial researchers. However, since the population will rapidly evolve, these safeguards will likewise need to rapidly upgrade. AIs themselves will need to research how to improve these safeguards.

All these safeguards exact a cost. Geopolitical competitive pressures can lead to the deprioritization of implementing and upgrading safeguards. Research for improving control measures, AI model red teaming, and AI boxing penetration tests consume compute that might otherwise speed up AI development. If no human ever inspects the AI's decisions or attempts to decipher its code or data, the project risks drifting away from its commander's intent. A low risk tolerance may be all that prevents an intelligence recursion from outrunning its own safety checks.

Our nonproliferation strategy layers multiple defenses rather than demand airtight safety guarantees. Seeking complete assurances for AI chips, computer systems, and AI systems could potentially be intractable. Instead, we assume that no single measure can address every vulnerability and recommend implementing multiple security measures. For the compute security, we discussed record-keeping, tamper-evident cameras, geolocation features, and more. In information security, we recommended multi-factor authentication, the principle of least privilege, insider threat programs, and more. For AI safeguards, we highlighted output filters, know-your-customer protocols, mandatory testing, and more. By weaving together constraints across the AI development and deployment pipeline, these comprehensively limit the proliferation of catastrophic dual-use AI capabilities to rogue actors.

Though nonproliferation is not a permanent solution to malicious use, it gives time for policymakers to increase societal resilience. When AI’s salience is high and when AI increases economic growth, policymakers may be more willing to make critical infrastructure more resilient, stockpile personal protective equipment, and pursue other measures to blunt the harm of malicious use.

As in the nuclear age, self-preservation can lead to cooperation when each side grasps the peril of allowing powerful technology to slip beyond its control or into the hands of terrorists. Even if bitterly opposed in other arenas, states have little to gain from a world in which rogue actors seize AI chips or model weights to unleash disasters that defy deterrence. Nonproliferation thus becomes a shared imperative, not an exercise in altruism but a recognition that no nation can confidently manage every threat on its own. By securing the core parts of AI through export controls, information security, and AI security, great powers can prevent the emergence of catastrophic rogue actors.

[Executive Summary](/chapter/executive-summary)

[Introduction](/chapter/introduction)

[AI Is Pivotal for National Security](/chapter/ai-is-pivotal-for-national-security)

[Deterrence with Mutual Assured AI Malfunction (MAIM)](/chapter/deterrence-with-mutual-assured-ai-malfunction-maim)

[Nonproliferation](/chapter/nonproliferation)

[Competitiveness](/chapter/competitiveness)

[Conclusion](/chapter/conclusion)

[Appendix FAQs](/chapter/appendix)

[](/)

[Table of contents](/table-of-contents)

[Download Standard Version(10 page PDF) ](https://drive.google.com/file/d/1wLcGgLOTVNsVVbgS5lPHOnqOQtNT8Z5j/view)[Download Expert Version(32 page PDF) ](https://drive.google.com/file/d/1JVPc3ObMP1L2a53T5LA1xxKXM6DAwEiC/view)

[1Executive Summary](/chapter/executive-summary)

[2Introduction](/chapter/introduction)

[3AI Is Pivotal for National Security](/chapter/ai-is-pivotal-for-national-security)

[3.1Strategic Competition](/chapter/ai-is-pivotal-for-national-security)

[3.1.1Strategic CompetitionShifting Basis of Economic Power](/chapter/ai-is-pivotal-for-national-security)

[3.1.2Strategic CompetitionDestabilization Through Superweapons](/chapter/ai-is-pivotal-for-national-security)

[3.2TerrorismTerrorism](/chapter/ai-is-pivotal-for-national-security)

[3.2.1TerrorismBioterrorism](/chapter/ai-is-pivotal-for-national-security)

[3.2.2TerrorismCyberattacks on Critical Infrastructure](/chapter/ai-is-pivotal-for-national-security)

[3.2.3TerrorismOffense-Defense Balance](/chapter/ai-is-pivotal-for-national-security)

[3.3Loss of ControlLoss of Control](/chapter/ai-is-pivotal-for-national-security)

[3.3.1Loss of ControlErosion of Control](/chapter/ai-is-pivotal-for-national-security)

[3.3.2Loss of ControlUnleashed AI Agents](/chapter/ai-is-pivotal-for-national-security)

[3.3.3Intelligence RecursionIntelligence Recursion](/chapter/ai-is-pivotal-for-national-security)

[3.4Existing AI StrategiesExisting AI Strategies](/chapter/ai-is-pivotal-for-national-security)

[4Deterrence with Mutual Assured AI Malfunction (MAIM)](/chapter/deterrence-with-mutual-assured-ai-malfunction-maim)

[4.1MAIM Is the Default Regime](/chapter/deterrence-with-mutual-assured-ai-malfunction-maim)

[4.2How to Maintain a MAIM Regime](/chapter/deterrence-with-mutual-assured-ai-malfunction-maim)

[5Nonproliferation](/chapter/nonproliferation)

[5.1Compute Security ](/chapter/nonproliferation)

[5.1.1Compute SecurityExport Controls](/chapter/nonproliferation)

[5.1.2Compute SecurityFirmware-Level Features](/chapter/nonproliferation)

[5.2Information Security](/chapter/nonproliferation)

[5.2.1Information SecurityHow to Improve Information Security](/chapter/nonproliferation)

[5.3AI SecurityAI Security](/chapter/nonproliferation)

[5.3.1AI SafeguardsMalicious Use](/chapter/nonproliferation)

[5.3.2AI SafeguardsLoss of Control](/chapter/nonproliferation)

[6Competitiveness](/chapter/competitiveness)

[6.1Military Strength](/chapter/competitiveness)

[6.2Economic Security](/chapter/competitiveness)

[6.2.1Economic SecurityManufacture AI Chips](/chapter/competitiveness)

[6.2.3Economic SecurityFacilitate Immigration for AI Scientists](/chapter/competitiveness)

[6.3Legal Frameworks Governing AI Agents](/chapter/competitiveness)

[6.3.1Legal Frameworks Governing AI AgentsAligning Individual AI Agents](/chapter/competitiveness)

[6.3.2Legal Frameworks Governing AI AgentsAligning Collectives of AI Agents](/chapter/competitiveness)

[6.4Political StabilityPolitical Stability](/chapter/competitiveness)

[6.4.1Political StabilityCensorship and Inaccurate Information](/chapter/competitiveness)

[6.4.2Political StabilityAutomation](/chapter/competitiveness)

[7ConclusionConclusion](/chapter/conclusion)

[8Appendix: FAQs](/chapter/appendix)
