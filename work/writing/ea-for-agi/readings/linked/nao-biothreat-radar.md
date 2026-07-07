---
title: "Scaling US pathogen detection – SecureBio"
author: "Simon Grimm"
url: https://naobservatory.org/blog/biothreat_radar
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by biorisk/pessimistic-optimistic-future-biosecurity.md; Nucleic Acid Observatory on metagenomic early-warning pandemic detection"
---

**Note:** The Nucleic Acid Observatory (NAO) is now SecureBio Detection. 

_We thank Mike McLaren for input and feedback on drafts of this post._

## Summary

The President’s FY 2026 Budget proposes a $52M allocation to CDC for Biothreat Radar, a new pathogen detection system. Drawing on findings from the Nucleic Acid Observatory’s metagenomic biosurveillance pilots, we model the expected performance of a pathogen-agnostic surveillance system at this scale.

We estimate that $52M would suffice to build a foundational biosurveillance system that could identify novel pathogens before 12 in 100,000 Americans had been infected. For known threats it would be significantly more sensitive, flagging a pathogen’s introduction into the United States before 1 in 100,000 Americans had been infected.

## Structure and cost of an advanced biosurveillance system

### Overall structure

In deciding which biosurveillance system to model, we both draw on publicly known information about Biothreat Radar and our assumptions about biosurveillance design. For operational simplicity, we assume the program would build on existing, mature CDC sample collection programs. Samples would be processed and analyzed through new stand-alone capabilities.

We do not model the collection of clinical samples through the Advanced Molecular Detection program, because detailed public information on program throughput and processing speeds is limited. However, metagenomic sequencing of pooled clinical samples could be a highly valuable additional detection layer. Among other things, integrating MGS data of clinical samples could help outbreak detection by confirming a new pathogen’s presence in symptomatic patients.

In our model, sample collection takes place across five sites of the National Wastewater Surveillance System, and 13 airports of an expanded Traveler-based Genomic Surveillance. Samples undergo metagenomic sequencing at two private-sector laboratories—coordinated by the Advanced Molecular Detection program—each processing samples on NovaSeqX+ instruments at 10 billion reads per day. Data would be analyzed by CDC, other government agencies, and external researchers. Analytics would be shared with the public, national security agencies, and non-federal public health departments.

Figure 1: System structure, assuming a fully-scaled system, financed at $52M a year. Not all sampling locations are shown. 

### Overall cost

Based on the President’s FY 2026 Budget, Biothreat Radar would receive a $52M allocation, split equally across TGS and AMD. We roughly follow this cost-split, with our model allocating $23.7M to TGS and $26.3M to AMD. We further allocate $0.8M to NWSS for collection of municipal wastewater1. In total, the program would cost $50.8M, accounting for a 35% overhead.

**Biosurveillance System Components and Cost** **CDC Program** | **Expenditure** | **Annual Cost** | **Details** | **Coverage**  
---|---|---|---|---  
TGS | Airplane Wastewater | $7.8M | 15 airports | 100,000 people/day  
TGS | Nasal Swabs | $15.9M | 13 airports | 5,200 samples/day (400/site/day)  
NWSS | Municipal Wastewater | $0.8M | 5 cities | 2.5M individuals (500K/site)  
AMD | Processing | $24.3M | Sequencing (private partners) | All collected samples  
AMD | Analysis | $2.3M | Data storage and processing | All collected samples  
  
### Collection

Two major CDC surveillance programs are well suited to serve as sample collection platforms for a pathogen-agnostic biosurveillance capability:

  * **Traveler-based Genomic Surveillance system (TGS):** Collects nasal swabs and wastewater from thousands of international travelers each week.
  * **National Wastewater Surveillance System (NWSS):** Samples municipal wastewater nationwide, covering 100M+ citizens.



TGS is a particularly suitable program. It covers individuals who are disproportionately likely to be infected early in a pandemic (international travelers), collects sample types with high pathogen concentration (nasal swabs, airplane lavatory waste), already operates at some of the busiest US airports, and has room to scale to additional locations. NWSS would serve a useful complement to TGS, covering many large US cities where community spread of a new pathogen is likely to occur early on.

Samples from both programs provide actionable information to government. Analyzing airplane samples can identify new pathogens entering or spreading within the US, enabling travel-related mitigation measures and increasing alertness among public health officials across the US. Municipal wastewater can prove community transmission, providing local information about the extent of pathogen spread, and building confidence for the federal government to take decisive mitigation measures.

Across NWSS, and TGS, three sample types would be selected:

  * **Airplane waste (TGS):** Samples would be collected through triturator2 sampling at three major airports (BOS, JFK, SFO) and pooled airplane sampling at two additional airports (IAD and LAX). Additionally, ten further triturator sites would be onboarded, either within existing airports that do not yet perform triturator sampling, or from airports not yet part of TGS. Across samples, this provides coverage of more than 100,000 people each day3, at a cost of $7.8M per year.

  * **Swab samples (TGS):** Next to airplane waste, TGS would collect nasal swabs at six airports where TGS currently operates (SEA, SFO, JFK, EWR, IAD, MIA), plus seven additional sites (either expansions at existing airports or newly added locations). This would give 400 swabs per day and site, amounting to 5,200 samples daily across all locations, for $15.9M per year.

  * **Municipal wastewater (NWSS):** Wastewater samples would be collected across five sites of the National Wastewater Surveillance System. Each site provides coverage of more than 500K individuals, with a total coverage of 2.5M individuals. Total costs would be $840K per year.




### Processing

For processing, laboratories would use **metagenomic sequencing (MGS).** Unlike targeted approaches such as polymerase chain reaction, metagenomic sequencing can read out any nucleic acid (RNA or DNA) in a sample. Analyzing these fragments allows the identification of both known pathogens as well as unknown reads that could represent a new threat.

**Samples from TGS and NWSS would be processed at two laboratories** , each processing half the samples. Within a lab, all samples would undergo daily sequencing on a single Illumina NovaSeqX+ machine, using one 10B read flow cell. Total wet-lab costs, including materials, capital costs, lab space, and labor would amount to $24.3M per year.

### Analysis and threat detection

Once generated, the data would be analyzed for potential threats. Some threats might end up being false positives, such as seasonal variation in common viruses, novel elements of the sewer microbiome, or sequencing artifacts. After a new threat is first detected, CDC can therefore apply validation protocols4 to evaluate if it’s a true positive and use its existing investigation capability to corroborate the new pathogen’s risk. At the same time, subsequent system data can be monitored continuously to track if the signal shows up anywhere else in the system. Once a pathogen is deemed to be a real threat, monitoring can be used to track its spread and guide mitigation measures.

Costs for data storage and processing, and analysis labor come to a total annual cost of $2.3M.

## Pathogen detection performance

Once fully operational, all samples would undergo daily MGS, providing genomic monitoring of a large range of pathogens. This enables two distinct surveillance capabilities: pathogen **monitoring** and **discovery.**

**Monitoring:** There are many known threats that could trigger a new pandemic, including H5N1, smallpox, or MERS. By scanning incoming MGS data for individual nucleic acid fragments matching these pathogens or very close relatives, introductions of such agents could be flagged soon after they enter the United States.

Monitoring is most valuable and reliable when a pathogen has already been characterized abroad but its spread within the United States is not confirmed. During the early months of the SARS-CoV-2 pandemic, for example, the virus was known to be circulating globally, yet the government had little insight into its presence in the US. Similarly with H5N1, the virus was known to be spreading inside the country, but it took months to get targeted detection methods online.

**Discovery:** MGS sequences _any_ nucleic acid in a sample, including that of pathogens we’ve never seen before. The use of MGS therefore allows the discovery of new natural pathogens such as pandemic coronavirus or influenza strains. Additionally, the Biothreat Radar could detect accidentally leaked or intentionally released engineered pathogens. Discovering novel pathogens early is crucial, as it gives us the chance to intervene before widespread transmission makes control far more difficult.

We evaluate these use cases separately using the following approach5:

  * Based on the epidemiological characteristics of Influenza A6, we model an exponentially-growing outbreak.
  * We simulate sampling of the population across different sampling methods, and use Poisson distributions to simulate the number of pathogen reads in each sample.
  * We simulate 10,000 outbreaks, for each simulation identifying the time of detection and the cumulative incidence at detection. Detection is defined differently for monitoring and discovery: 
    * **Successful monitoring** occurs when any part of the genome is identified in at least 2 samples across 2 sampling systems7.
    * **Successful discovery** occurs when the genome has been observed at 2x average coverage.
  * Returns the distribution of cumulative incidences on the day of detection.



With this modelling approach, we get the following results.

### Monitoring

**We first model a pathogen whose genome is known.** The same simulation covers two outbreak scenarios: a novel pathogen spreading abroad that has been identified (e.g., COVID-19), or a known pathogen not currently endemic that begins circulating (e.g., MERS, H5N1). In either case, once fully scaled (Appendix A), **the system would detect the pathogen before 1 in 100,000 people were infected.**

### Discovery

**We further model an unknown pathogen** that begins spreading in a foreign country with weaker public health surveillance. Before being identified anywhere, the pathogen enters the US and begins circulating domestically. Again assuming that the underlying characteristics of the pathogen resemble that of influenza A, here **the pathogen would be detected before 12 in 100,000 people were infected.**

Figure 2: System performance, assuming a pathogen with similar characteristics as Influenza A spreads through a naive population. 

At the [end of this post](https://naobservatory.org/blog/biothreat_radar/#appendix-a-how-advanced-biosurveillance-can-impact-policy), we provide scenarios for how the government can use both early discovery and monitoring to reduce the damage of pathogen outbreaks.

## Features needed for optimal performance

The Nucleic Acid Observatory (NAO)’s assumed design and modeled performance of Biothreat Radar draws on lessons from our wastewater surveillance collaboration (active in Boston, Chicago, Florida, and 16 other sites), and from our pooled-swab sequencing program in Boston. Both programs routinely detect most seasonal respiratory pathogens, and previously detected a benign genetically engineered virus sequence in wastewater8. Our team has also conducted extensive modeling to evaluate the sensitivity of large-scale MGS across [pooled nasal swabs](https://naobservatory.org/blog/investigating-the-sensitivity-of-pooled-swab-sampling-for-pathogen-early-detection/), [municipal wastewater](https://naobservatory.org/blog/investigating-the-sensitivity-of-pooled-swab-sampling-for-pathogen-early-detection/), and airplane wastewater.

Based on the NAO’s experience, the following features would be required to allow for the performance outlined above:

**Deep sequencing:** Sensitive pathogen detection with MGS requires sequencing sufficiently deeply to overcome the large background of non-pathogenic sequences. For wastewater this can be in the range of 1 billion reads per sample—around 10% of a single sequencing run—as the overwhelmingly large presence of sewer and gut bacteria need to be offset. Once a large sequencer is in use, however, the marginal cost of including lower-depth samples is minimal. In our modeled system, for example, a pooled swab sample can be extensively sequenced with just 150 million reads, or 1.5% of a NovaSeqX+ 10B flow cell.

At the NAO, we’ve validated both MGS of wastewater and pooled swab samples, with protocols available online9. To date, we’ve generated 1,362 billion read pairs of wastewater MGS, and analyzed the viral content of 5,500 swabs.

**Centralized sequencing:** Achieving deep sequencing—and hence, high sensitivity—at a reasonable cost requires platforms with very low costs per read. Consequently, we assume the use of a machine such as the Illumina NovaSeqX+, the largest and most cost-effective sequencer for ultra-deep sequencing on the market. To make use of NovaSeqX+, sequencing needs to be centralized to get enough samples into one sequencing run. Here we assume sequencing at two sites, each equipped with a NovaSeqX+, enabling daily sequencing on one NovaSeq 10B flow cell.

**Ensuring rapid turnaround time:** Once operational, ensuring rapid turnaround is essential. Many pandemic pathogens may have doubling times of only 3 days, with delays leading to exponential spread which makes mitigation more difficult. Optimizing for rapid early detection is also far less costly than accelerating interventions like vaccine development later on. Strategies to reduce turnaround include processing and sequencing around the clock, co-locating laboratories in cities with TGS sites (one on each coast), and selecting lab sites with direct flight connections from TGS and NWSS locations. With these optimizations, end-to-end turnaround could be reduced to 2–3 days, with sequencing completed in a single day on a NovaSeqX+ 10B flow cell.

**Data sharing:** Sequencing data should be shared rapidly after processing, both within government, and with outside experts. This approach has two main benefits: it enables academic and private-sector groups to both identify novel threats and allows CDC, other agencies (DoD, VA, etc.), and external groups to cross-check each other’s findings, helping to quickly distinguish true threats from false positives.

**Data analysis:** An MGS-based surveillance system can use established methods for detecting _known pathogens_ , and emerging techniques for discovering _novel threats_. For _known pathogens,_ read-based detection is validated to allow rapid screening of samples against a given reference genome, with assembly-based analysis adding specificity in more complex samples. For _novel threats_ , heuristics such as unusual read homology, rising frequency across samples, genetic engineering signatures, or virulence markers can flag sequences for further analysis. When a threat is discovered, pathogens can then be searched across samples, with more detailed epidemiologic investigation when a threat looks credible.

## Conclusion

Early detection technologies have improved considerably over the past ten years, allowing large improvements of government biosurveillance. Taking into account the current state of metagenomic sequencing technologies and insights from NAO pilots, our model suggests that the proposed $52M allocation to Biothreat Radar could support an effective biosurveillance system. It would reliably detect known or somewhat evolved pandemic pathogens, such as H5N1 or MERS, and identify novel threats, natural or engineered. By allowing detection of any of these threats, public health authorities would be enabled to mitigate outbreaks before they become pandemics, significantly reducing the human and financial toll of infectious disease.

* * *

## Appendix

### Appendix A: How advanced biosurveillance can impact policy

More advanced biosurveillance could significantly improve government decision-making. Here we lay out two specific scenarios that show the value of having an MGS-based surveillance system that is continuously running.

#### Monitoring: Confirmed outbreak abroad, with unknown domestic spread

A few weeks ago, a new pandemic pathogen was discovered abroad. The pathogen is suspected to be rapidly spreading, and the US government is considering if travel measures should be implemented, or if community mitigation measures should be put in place. An MGS-based system would be informative in guiding these decisions:

  1. The wastewater of different planes could be analyzed to better understand if the pathogen is being introduced from abroad, and if so, where infections originate from.
  2. At the same time, community spread inside the United States can be tracked by searching domestic wastewater MGS data for the pathogen of concern.
  3. Once identified, local public health authorities can be alerted to the pathogen being present in the area, triggering early, targeted follow-up investigations.



This in turn will inform public health action on the ground. Stockpiles of medications and supplies could be activated earlier, and hospital loads could be adjusted to allow for treating an influx of infected individuals. Furthermore, the public could be informed early, allowing them to adjust their behavior to reduce risk of infection.

#### Discovery: A novel pathogen with delayed symptoms

A new virus has emerged in the population and is spreading. However, it has a delayed onset of severe symptoms with initial symptoms resembling the common cold. Without knowledge of the disease spreading, policymakers have no option of deciding to fund the development of medical countermeasures or alert the public about the new pathogen’s spread. With an advanced MGS surveillance program in place, such pathogens would be identified more reliably:

  1. The pathogen could be identified before a large swath of the population has been infected.
  2. Once aware of the new pathogen, CDC could help screen for it among patients showing up to emergency departments.
  3. If deemed a real threat, the development of medical countermeasures could be triggered, accelerating the time by which treatment and prevention of a new pathogen is available.



Compared to the status quo, this would allow far faster mitigation of a new pathogen, reducing the outbreak’s economic and human toll.

### Appendix B: NAO’s experience running large-scale biosurveillance pilots

Crucial parts of the system outlined above have already been de-risked, or are routinely performed by the NAO.

#### Sample collection and processing

We analyze wastewater samples from across the United States, both at our own lab and in collaboration with Marc Johnson’s lab at the University of Missouri, covering several 1M+ plus metro areas. We’ve developed sample preparation methods that allow routine detection of many respiratory pathogens across these samples, with read depths of 1B+ reads per sample, using a NovaSeqX+ machine.

In our nasal swab sampling program, we have demonstrated that high volume collection of nasal swabs is feasible, with collection of up to 70 samples per hour by two field samplers. Even very large swab-sample pools can be reliably analyzed with MGS, allowing the detection of many seasonal respiratory pathogens.

#### Data analysis

To analyze data, we have both developed a bioinformatics pipeline that allows the reliable analysis of wastewater and swab sequencing data to identify [known pathogens](https://github.com/naobservatory/mgs-workflow), and a set of tools that allows the identification and validation of [genetically engineered pathogens](https://naobservatory.org/blog/detecting-genetically-engineered-viruses/).

Using our genetic engineering detection algorithm, we identified an engineered cytomegalovirus sequence in wastewater earlier this year. Once we checked in with the relevant company, the sequence was confirmed to originate from vaccine work in one of our covered wastewater catchment areas. Further, our academic collaborators have used wastewater sequencing data to provide [dashboards](https://dholab.github.io/public_viz/001-make-by-city-and-by-virus-dashboards/index.html) that allow the detailed tracking of dozens of viruses including 50+ rhinovirus serotypes.

## Footnotes

  1. While not mentioned in the President’s FY 2026 Budget, the value of adding a small number of wastewater samples would be large for a small relative cost of $0.8M.↩︎

  2. An airport triturator is a ground facility that receives waste from aircraft lavatory trucks and grinds solid material for subsequent discharging into the municipal sewage system.↩︎

  3. Each triturator sample captures waste from roughly 7,500 individuals, while pooled airplane samples capture approximately 1,250 individuals across 25 international flights per day. With 12 triturator sites and two individual plane sampling sites, this gives 100,000 individuals. Data is based on airplane arrivals at BOS.↩︎

  4. Validation steps include: checking presence across sample types, locations, dates, and labs; assessing distribution and growth trends (e.g., exponential increases across sites); scanning recent metagenomic data and assembling longer contigs for context; aligning flagged reads to nearest-reference genomes; and evaluating functional potential such as toxicity or immune escape. Ideally CDC would work with other agencies such as DoD to develop and iterate on such protocols.↩︎

  5. All cost and performance inputs and outputs can be found [here](https://docs.google.com/spreadsheets/d/1ay2cFWjGjjnPOTBXqD-X2Kh32R4hAW4GHMUSxZxG_8g/edit?usp=sharing). Code for performance simulations can be found [here](https://github.com/naobservatory/scenario-simulator/blob/main/biothreat-radar-proposal-v2/simulate.py). Simulation code is adapted from a web-based [simulator](https://data.securebio.org/simulator) ([report](https://naobservatory.org/blog/simulating-approaches-to-metagenomic-pandemic-identification/)) published by the NAO.↩︎

  6. With epidemiological characteristics, we mean characteristics that are relevant for both pathogen spread and detection, including doubling time, shedding duration (once a person is infected, for how long can we detect a pathogen in a sample from said person), shedding amount (how much virus does one person contribute to wastewater or respiratory samples), and genome length.↩︎

  7. We further assume 50% of the genome is too similar to other pathogens to be useful for monitoring, with the system needing to observe any portion of the remainder in two different samples.↩︎

  8. The virus sequence matched an edited cytomegalovirus sequence, which originated from vaccine development work in one of our covered sites.↩︎

  9. NAO protocols can be found here: [Viral RNA extraction from swabs](https://www.protocols.io/view/concentration-and-total-rna-extraction-of-viruses-261geepkdg47/v1), [Library prep for swabs](https://www.protocols.io/view/smart-9n-amplification-enabling-rapid-nanopore-seq-n92ld6yr8g5b/v1), [Viral RNA extraction from wastewater](https://www.protocols.io/view/concentration-and-nucleic-acid-extraction-of-virus-j8nlko1rwv5r/v3)↩︎



