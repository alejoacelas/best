---
title: "A Framework for Technical Progress on Biosecurity"
author: "kyle_fish"
date: 2021-11-03
url: https://forum.effectivealtruism.org/posts/rjFJYREBZZscvDwLu/a-framework-for-technical-progress-on-biosecurity
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by biorisk/concrete-biosecurity-projects.md; framework for technical progress on biosecurity"
---

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/f0c897479e118e737c08ef0b04fbe28ee899501e243940ea.png)

The Problem Space (aka "Biosecurity Bingo")

Introduction
============

Urbanization, globalization, climate change, political instability, and health system fragility all contribute to the vulnerability of the modern world to catastrophic damage from pandemic diseases. Of particular concern is the emergence of a pathogen or pathogens so severe that they threaten the global population’s collective ability to respond, survive, and recover. Even if the probability of such an event is low, the scale of damage and potential for irreparable harm to society warrant focused consideration extending beyond the scope of traditional public health programs and research.

Technical innovations like vaccination and antibiotic development have dramatically improved the resilience of human society to the threat of infectious disease. A variety of existing, emerging, and yet-undeveloped technologies could provide additional layers of protection and mitigate the risks posed by potentially catastrophic pathogens. The goal of this post is to establish a framework for conceptualizing the technical innovations needed for improving biosecurity and pandemic preparedness. The relevant technologies can be grouped into six core categories: monitoring, forensics, barriers, diagnostics, prophylactics, and therapeutics. Across all of these categories, there is a conserved set of key goals that must be pursued to improve biosecurity. These goals are to make the relevant technologies fast, general, cheap, robust, and scalable. 

Considered together, these six categories of technology and five key goals create a matrix of thirty individual objectives (i.e. improve the generality of diagnostics, lower the costs of prophylactics, increase the speed of therapeutics development, etc.) that cover the majority of the technical biosecurity problem space. With few exceptions, pursuing these objectives has potential to catalyze general improvements to global health in addition to mitigating the risk of a catastrophic pandemic or biological attack. Here, I introduce the key goals and core technology areas and highlight the unique importance of each for improving biosecurity.

Key technology development goals
================================

Overview
--------

The innovations needed for improving biosecurity and pandemic preparedness include diverse technologies across a broad spectrum of engineering and biotechnology disciplines, from vaccine development to personal protective equipment (PPE) to diagnostics design and manufacturing. Across all these technologies, there is a need for solutions to move from expensive to cheap, from slow to fast, from specific to generalizable, from small to large scale, and from fragile to robust. While inevitably interconnected, each of these goals has a unique and important role to play in improving pandemic preparedness and avoiding catastrophic damage from biological threats. Here, I introduce each of these objectives, highlight their importance for biorisk reduction, and use genetic sequencing as a case study to illustrate their value.

Slow to fast
------------

Speed is a critical factor in pandemic prevention and response. The ability to quickly identify a novel pathogen or outbreak, develop reliable diagnostics, and produce a vaccine or other countermeasure is essential for containment and mitigation. The average time required for the development of a new therapeutic is more than 10 years, from discovery to commercialization. Vaccine development and deployment are similarly sluggish: it takes an estimated 5–18 years to bring a vaccine from the research phase to the international market. While various strategies are used to accelerate these timelines amidst disease outbreaks with pandemic potential, current technologies still impose a limit on the pace of countermeasure development. Innovative approaches to drug and vaccine discovery and manufacturing are needed to dramatically reduce the lag time between identification of a pathogen and successful deployment of countermeasures. 

Progress in genome sequencing exemplifies the improvement needed in this area. The human genome project (HGP) took 13 years to produce the first human genome sequence. Today, reaching the same endpoint with a novel sample requires only a day or two. The value added by this increased efficiency goes far beyond convenience. Rapid sequencing enables near real-time analysis, giving clinicians and researchers invaluable information in routine investigations and amidst public health crises. Reducing the development and use times for other biosecurity-relevant technologies, including diagnostics, therapeutics, and vaccines, would similarly improve biothreat preparedness.

Specific to generalizable
-------------------------

The traditional paradigm in drug development is a one-bug-one-drug approach, where a specific therapeutic is developed for each individual pathogen. Vaccines, diagnostics, and pathogen surveillance systems are largely analogous: the technology used for each is typically pathogen dependent and poorly generalizable. This is a problem for biosecurity, as it is impossible to predict which pathogen will be implicated in the next outbreak. There is a need across all of these domains to move from a suite of strategies tailored to specific agents, to platforms capable of responding to a broad variety of different pathogens. This goal is particularly important in light of advances in synthetic biology that enable the engineering of novel pathogens capable of evading current countermeasures. 

Sequence-based diagnostics are one area where vital developments have improved generalizability, exemplified by progress from single-pathogen PCR tests to clinical metagenomics. PCR tests are an important tool for infectious disease detection and diagnosis; however, dependence on specific primers for each query limits their utility to a defined set of pathogens. In contrast, clinical metagenomics is a pathogen-agnostic strategy involving comprehensive analysis of all genetic material from both the host and any associated microbes. This approach allows identification of potential novel pathogens in addition to diagnosis of any known infectious diseases.

Expensive to cheap
------------------

The development and deployment of advanced biotechnologies is notoriously expensive, which severely limits their scope of use. As new technologies emerge, they are often confined to the limited research institutions and companies capable of absorbing the high costs of equipment, reagents, and maintenance. The development and use of such expensive technologies contributes to the exorbitant prices of drug development, vaccine manufacturing, and infectious disease surveillance. Many new and existing technologies require broad deployment to substantially improve biosecurity, which is not feasible while costs remain high. Finding innovative ways to lower costs for the production and use of relevant technologies, or developing entirely new technologies at low price points with overlapping functionality, will thus be essential efforts in the process of leveraging advanced biotechnologies for the reduction of biorisks. 

Whole-genome sequencing is an excellent example of the type of cost reduction necessary to make new technology applicable in the biosecurity context. The HGP produced the first finished sequence of the human genome in 2003 at an estimated cost of ~$450 million. By 2006, the cost to produce an equivalent sequence had dropped more than one order of magnitude, to $20–25 million. Relentless innovation over the past decade and a half has continued to drive dramatic cost reductions; the cost for obtaining a complete genome sequence now approaches $1,000/genome. This progress has been fueled by a synergistic combination of incremental improvements (e.g. a steady reduction in the price of reagents and consumables) and dramatic paradigm shifts (e.g. the advent of next-generation sequencing (NGS)). Similar progress is needed for many other biorisk-related technologies to reach sufficient affordability and achieve the level of coverage essential for improving security. 

Fragile to robust
-----------------

Detecting and responding to pandemic threats requires global deployment of relevant technologies. The utility of many important tools, from diagnostics platforms to vaccines, are currently limited by their fragility: they often depend on sensitive reagents and samples, or bulky equipment that requires frequent maintenance. In order to deploy these measures in field environments or amidst a catastrophe when infrastructure, labor, and supply chains are severely compromised, their robustness must be improved. Specific needs vary depending on the technology. For diagnostics and detection systems, helpful goals include miniaturization of equipment for ease of transport, minimization of sample prep requirements and reagent complexity, and simplification of protocols to allow operation by non-experts. For vaccines and therapeutics, achieving cold-chain independence and improving shelf life, even in harsh conditions, are top priorities. 

The successful development of field-deployable genome sequencing systems represents one important step in this direction. The MinION sequencer (Oxford Nanopore Technologies, Oxford, UK) is a handheld sequencing device that weighs less than 100g and connects to a laptop through a standard USB port. Despite a higher error rate than existing sequencing strategies, the robustness of the MinION has contributed to its successful use for pathogen surveillance in the field during major disease outbreaks. Analogous progress is needed in other areas of biotechnology to ensure that even the most remote and resource-constrained environments have access to robust surveillance, diagnostics, immunization, and therapeutics. 

Small to large scale
--------------------

Pandemics are global events and are likely to require comprehensive, global approaches to prevention, detection, and response. Many relevant biotechnologies are poorly suited to meet this need, as they are developed predominantly for small-scale manufacturing and low-throughput use. Even for technologies already deployed at a large scale, like vaccines, the systems and processes used for scale-up and mass production are fraught with challenges and inefficiencies, often causing late-stage product failure, high production costs, and/or supply shortages. Improving scalability for the full suite of technologies with biosecurity applications is thus an essential goal in ensuring pandemic preparedness. This will require 1) novel manufacturing systems to facilitate scale-up of technologies currently produced in small batches, 2) improvements to mass manufacturing paradigms for vaccines, therapeutics, and other products, and 3) more accurate models for predicting industrial performance of laboratory processes to guide research and development. 

In the case of genome sequencing, improvements in process scale and throughput have enabled large-scale genome sequencing studies that provide unprecedented levels of insight into complex genetic relationships and host-pathogen interactions. While not yet at the scale required for universal coverage, this success represents tremendous progress. Identifying high-priority technologies for global biodefense and building systems for comprehensive coverage by increasing the efficiency and reliability of scale-up will be crucial in preparing for the next pandemic. 

Core technology areas
=====================

Monitoring
----------

Early detection of an emerging pathogen or biological attack is essential for effective response and containment. Clinical diagnostics have an important role to play in identifying outbreaks, however it is much preferable to detect novel pathogens prior to human exposure. To accomplish this, global monitoring systems are needed for real-time surveillance of both natural disease reservoirs and high-probability areas for an accidental or deliberate pathogen release. Identifying novel pathogens or strains of existing pathogens with potential to affect the human population allows proactive measures to be taken for closer monitoring, containment, and pre-emptive countermeasure development and deployment.

Example project: [a global nucleic acid observatory](https://arxiv.org/pdf/2108.02678.pdf)

Forensics
---------

If and when a novel pathogen is identified, forensic efforts are needed to identify its provenance. A major question to be answered is whether a particular pathogen evolved or emerged naturally, or whether it was the product of deliberate engineering. If the former, robust forensic tools are needed to determine the specific region and mechanism of emergence. If the latter, we need tools capable of determining where, and by whom, the pathogen was developed. Such knowledge will be useful for improving our understanding of the emergence and behavior of threatening pathogens, informing response efforts, and, perhaps most importantly, denying anyone the possibility of releasing a novel pathogen with impunity.

Example project: [genetic engineering attribution](https://www.nature.com/articles/s41467-020-19612-0)

Barriers
--------

Barriers are systems for preventing exposure to an infectious agent. They include tools for protecting individual people from exposure (e.g. personal protective equipment like masks, gloves, and protective suits), as well as systems for preventing penetration of a pathogen into physical spaces like bunkers or buildings. Such systems can be based on physical removal of pathogens through filtration, destruction of pathogens through sterilization, or a combination of both. There is tremendous need for improvements to barrier technologies, as they have historically been neglected relative to other areas of technology development. Ideal barrier solutions would make it a trivial matter for large numbers of people to remain completely safe from infection, even amidst a serious outbreak. 

Example project: [mask innovation challenge](https://www.challenge.gov/challenge/mask-innovation-challenge/)

Diagnostics
-----------

The ability to rapidly and accurately diagnose patients during an outbreak is essential for mounting an adequate response. Of particular interest is the ability to quickly diagnose infections by previously unseen pathogens anywhere in the world. Various issues with traditional approaches to this challenge have made it an elusive goal, including low sensitivities, high costs, and extensive sample prep requirements of conventional diagnostic tests. These bottlenecks are especially problematic in resource-constrained environments that lack central laboratory facilities and modern molecular biology equipment. Fortunately, novel strategies have shown promise for overcoming the limitations of conventional diagnostics and may soon play a central role in the mitigation of biothreats.

Example project: [metagenomic diagnostics](https://www.nature.com/articles/s41591-020-1105-z) 

Prophylactics
-------------

Vaccines and other prophylactics are an essential tool for protecting individuals, communities, and the global population against infectious diseases. However, despite tremendous progress and unprecedented success in improving global health over the past two centuries, modern technologies for vaccine development, manufacturing, and delivery remain insufficient for addressing the threat of novel pathogens with catastrophic pandemic potential. Innovations in each of these areas are needed to ensure capacity for rapid development, production, and distribution of vaccines in response to outbreaks. The use of mRNA vaccines in fighting the COVID-19 pandemic has been an astonishing success, and hopefully represents only the beginning of next-generation vaccine technologies. 

Example project: [mRNA vaccines](https://www.modernatx.com/modernas-work-potential-vaccine-against-covid-19)

Therapeutics
------------

When someone is infected with a pathogen, therapeutics are among the best tools for treatment and can help prevent further spread. A variety of therapeutic classes, including small molecules, peptides, proteins, and antibodies, likely have a role to play in ensuring effective responses to emerging pathogens. In some cases, broad-spectrum therapeutics can be developed that are capable of treating most or all pathogens of an entire category (e.g. gram-positive bacteria, coronaviruses), even ones that have never been seen before. In other cases, it may be possible to develop rapid therapeutic design systems capable of creating new therapeutics for emerging pathogens quickly enough to stop an outbreak.

Example project: [broad-spectrum antivirals](https://med.stanford.edu/news/all-news/2020/10/grant-to-develop-broad-spectrum-drugs.html)

Conclusion
==========

The vast majority of technical innovation needed for improving biosecurity and pandemic preparedness involves pushing these six technology areas toward these five goals. The result, if successful, will be a suite of technologies that function together to provide low-cost, broad-spectrum, rapid, effective, and dependable protection against the emergence or deployment of novel pathogens anywhere on the planet. They will also function collectively as a powerful deterrent, dissuading bad actors from ever pursuing bioweapons as a strategy for destruction.

While it is useful to consider each of these goals and technologies independently and highlight their unique contributions to biorisk reduction and pandemic preparedness, in practice they are intimately connected. Improvements in one technology along a single dimension can empower innovations in diverse areas, and, conversely, a vulnerability anywhere in this network is a vulnerability everywhere. The true power of these technologies comes from their synergies, and their potential will only be fully realized through strategic, coordinated development.

In choosing specific projects to prioritize and deciding how to pursue them, it is essential to consider not just the largest unmet needs, but also the dual-use potential of relevant biotechnologies. Responsible technology development in many of these areas requires an abundance of caution and may look significantly different than a cursory analysis would suggest. 

If you’re interested in working in this space, please get in touch! I will connect you with people in the biosecurity community who are laser-focused on building these technologies as safely and quickly as possible. 

*Thanks to Andrew Snyder-Beattie, Ethan Alley, Grigory Khimulya, and Sofia-Davis Fogel for comments on drafts of this post.*

*This project was supported by the EA Long-Term Future Fund.*