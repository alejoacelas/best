---
title: "Considerations for PPE Strategy"
date: 2026-05-06
url: https://defensesindepth.bio/considerations-for-ppe-strategy
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by biorisk/10-big-projects-reducing-bio-x-risk.md; PPE stockpiling strategy for pandemic resilience"
---

# The Goal

The Coefficient Giving Biosecurity and Pandemic Preparedness team works to mitigate existential risks from engineered pathogens. A big part of why we're worried about this is that AI could make these risks much worse on short timelines. One motivating concern is that a misaligned AI or a human-AI team may use engineered pathogens to kneecap society's ability to fend off an attempt by that AI or group to disempower humanity and take control. Specifically, we worry that a highly transmissible and lethal airborne pathogen could cause mass casualties and incapacitate vital sectors like energy and manufacturing, leaving society vulnerable to takeover or coercion. However, if all on-site workers in critical industries quickly had access to high-quality PPE, with that access secure against possible adversarial attacks and general supply chain disruptions, they could avoid infection even from pathogens engineered for extreme transmissibility, preserving humanity’s response capacity[1].

Reaching this victory condition requires a PPE strategy that gets five things right

  1. **Protection** : selecting PPE good enough to block transmission, even for extremely transmissible pathogens
  2. **Acceptability** : ensuring PPE is widely used and used correctly
  3. **Scale** : manufacturing enough PPE to cover essential workers
  4. **Speed** : delivering PPE fast enough to avoid significant infection among essential workers
  5. **Security** : ensuring PPE supplies are secure against attacks and disruptions



## Protection

PPE can reduce transmission in two ways. First, it reduces how many infectious particles the wearer inhales; this is called wearer protection and is usually measured by a protection factor ([PF](https://www.osha.gov/sites/default/files/publications/3352-APF-RESPIRATORS.pdf??ref=defensesindepth.bio)), where a PF = 10 means that the wearer inhales 1/10 as many particles as they would without the PPE on. Second, PPE can reduce how many particles an infectious person emits into the shared environment, providing protection to everyone else. This is called [source control](https://www.cdc.gov/niosh/bulletin/2020/source-control.html?ref=defensesindepth.bio), and can also be measured with a protection factor. (To distinguish the two, we sometimes write PFin and PFout to mean wearer protection and source control, respectively.)

If everyone wears PPE, then PFin × PFout gives the total reduction in the number of infectious particles susceptible people inhale[2].

Internal research led by Damon Binder and reviewed by external experts found that across most office- or factory-like environments, even if there’s a theoretically-maximum transmissible pathogen, the reproductive number (number of infections one case causes) would be <1 if PPE has a PFin × PFout > 900\. If PFin = PFout, then the PF just has to be >30.

Not everybody’s respirator will have the same PF in practice due to differences in how they put it on, how well it fits their face, what activities they’re engaged in, etc. What matters is that the average PF, specifically the harmonic mean PF across the essential worker population[3], is high enough.

This gives us a way to evaluate if PPE is good enough to be robust against even an adversarially designed pathogen.

## Acceptability

If adoption levels are not very high or if it's difficult for untrained people to learn how to properly use the PPE, even extremely good PPE provides little population-level protection against transmission[4]. While adoption levels will likely be high once a threat is widely perceived to be dangerous, this might only happen once a pathogen has caused a large amount of the damage a PPE strategy aims to avoid. This pushes toward strategies that present as few barriers to early adoption as possible. Likewise, the skill level needed for proper PPE use should be low.

A major lever for improving acceptability and increasing early adoption are using strategies that impose low costs on workplaces (e.g., they shouldn’t need to pay much or otherwise spend time securing PPE early on in an outbreak). Early adoption and proper use can also be advanced by selecting PPE that is comfortable, trusted, and effective without substantial training, and developing fit testing apps.

## Scale

Since the US has the world’s largest military and is the site of most frontier AI companies, a minimum viable PPE strategy for biodefense against an AI takeover probably has to at least cover the workers needed to preserve the US’s ability to fend off an adversary and build back to full industrial capacity. We’re not sure how many workers this is, but we think it’s unlikely that it’s more than ~30 million.

While the US labor force is ~[160 million](https://www.bls.gov/cps/cpsaat18b.htm?ref=defensesindepth.bio), about half of these workers are in services or retail trade that are unlikely to directly support defensive capabilities. Many of the remaining workers are in industries that likely do keep society running or contribute to response capacity, but either work outside and so are less likely to be in high infection-risk settings at work (e.g., in agriculture, transportation, or construction) or have remote-compatible jobs within critical industries (e.g., sales reps or accountants for manufacturing firms).

Running through US employment data figures, we and [others](https://cepr.net/wp-content/uploads/2020/04/2020-04-Frontline-Workers.pdf?ref=defensesindepth.bio) [believe](https://www.cisa.gov/sites/default/files/publications/niac-pandemic-outbreak-final-report-01-17-07-508.pdf?ref=defensesindepth.bio#page=9) the number of essential workers who have to be onsite and indoors—exposed to potentially infectious colleagues—is probably in the low tens of millions. Thus a robust PPE strategy needs to be able to scale to protect at least ~30 million US workers. Covering other countries will also be important- we’re glad that Blueprint Biosecurity has global essential worker [estimates](https://blueprintbiosecurity.org/u/2024/05/BB_Next-Gen-Report_PRF9-WEB-1.pdf?utm_source=bluedot-impact), and we’re excited about PPE efforts aimed at covering the rest of the world.

## Speed

We’re not sure what share of essential workers can be infected before response capabilities are meaningfully degraded, either because too many workers have been lost overall or because hard-to-replace skilled workers are lost. However, we think it’s unlikely that the answer is <1%, though we’re unsure. With the surveillance work being done by the [SecureBio](https://securebio.org/detection/?ref=defensesindepth.bio), CDC, and others, it is very likely that a novel pathogen would be detected before infecting 0.1% of the population. The window between 0.1% and 1% infection rate, or about 3 doublings, might therefore be the critical time for PPE distribution, though this is highly scenario-dependent and hinges on an outbreak being not just identified but recognized as dangerous very early on.

Historically, viral outbreaks have had doubling times as short as [1-2 days](https://pmc.ncbi.nlm.nih.gov/articles/PMC7691176/?ref=defensesindepth.bio), so 3 doublings could happen over just a few days to a week[5]. If a PPE strategy can distribute PPE to most essential workers in this window, it is very likely to be robust to even the most severe bioattacks.

## Security

We expect bioattacks are most counterfactually important for AI or AI-human takeover attempts that occur relatively early in [takeoff](https://coefficientgiving.org/research/what-a-compute-centric-framework-says-about-takeoff-speeds/?ref=defensesindepth.bio)[6]. A misaligned AI with broad control of global industry might still use bioweapons, but it likely has other takeover options such that blocking this attack route is less valuable. On the other hand, an AI or AI-human team without as many resources might only be able to take over if society is weakened by a severe pandemic. Still, we shouldn’t expect that seeding a pandemic is the only move that the relevant adversaries might make. An adversary capable of mounting a takeover attempt likely also has some cyber- and physical-offensive capabilities, which it may use alongside a pandemic to weaken humanity's response[7].

We don’t have a detailed model of what non-bio capabilities the relevant set of adversaries might have, or how these might be part of a takeover attempt. However, recognizing that such capabilities are likely in play means that PPE strategies are more robust if they do not rely on cyber-vulnerable manufacturing lines to keep operating or on a small number of publicly known storage depots that could be physically attacked.

Overall, we expect PPE strategies should be hard to disrupt by a moderately capable bad actor, since humanity might be actively fending off a wide range of attacks in addition to a severe pandemic.

# The Option Space

Given these goals, we can evaluate different PPE types and procurement, management, and distribution strategies.

Major types of PPE to consider are standard disposable respirators (like “N95s”, or more technically, N95 filtering facepiece respirators- FFRs) or reusable respirators (like elastomeric half mask respirators, EHMRs), and improvised or DIY respirators. Most of the latter category are [poor performing masks](https://pmc.ncbi.nlm.nih.gov/articles/PMC8494377/?ref=defensesindepth.bio), but you can also improvise much more protective PPE like DIY powered air purifying respirators ([PAPRs](https://pmc.ncbi.nlm.nih.gov/articles/PMC8450396/?ref=defensesindepth.bio))[8].

For procuring PPE, you can buy it in advance and put it in a stockpile, or invest in the capacity to rapidly increase production when a pandemic hits (“warm-basing”). If PPE is stockpiled, it can be stored centrally, in regional depots, or pre-positioned at critical workplaces, and managed by governments, industry, or non-profits. PPE distribution can follow either a “push” strategy (proactively delivering PPE to workplaces where you expect it is needed) or a “pull” approach (waiting for workplaces to submit requests and adjudicating claims).

# Conclusion

We’re still gathering information on the merits of different PPE types and distribution strategies, as well as other considerations. On net, however, we think an EHMR stockpile is probably most robust to attacks/supply-disruptions, making us particularly excited about this approach. Warm-basing N95 FFR production also seems valuable for adding redundancy, and we’re exploring DIY PPE as a fall-back. There are a lot of logistical and technical uncertainties to be resolved, but we think the victory condition where people can safely continue the work needed to preserve humanity’s response capabilities even in the face of a severe bioattack is achievable within a few years, closing off an important route to early-takeoff AI takeover.

For a non-exhaustive summary of some considerations and tradeoffs that led us to these tentative conclusions, see the appendix below.

# Appendix: Considerations and Tradeoffs

## Protectiveness

**How protective are different types of PPE?**

PPE Type | Wearer protection | Source control  
---|---|---  
N95 FFRs | Harmonic mean: ~30, for well-fitted, high-performing respirators after people have received training  
  
5th percentile: ~10, same caveat above  
  
Confidence level: Moderate, but depends a lot on device quality and whether people have been trained | Provides source control  
  
Weak [evidence](https://pmc.ncbi.nlm.nih.gov/articles/PMC8494377/?ref=defensesindepth.bio) suggests PFin > PFout, though this hasn’t been thoroughly tested  
  
There’s also limited data on performance throughout a workday, but protection degrades over time  
EHMR | Harmonic mean: ~50, same caveats as above  
  
5th percentile: ~10  
  
Confidence level: Moderate, same caveats as above | By default does not provide source control, but a filter over the exhalation valve can be added, as [done during](https://www.cdc.gov/niosh/bulletin/2022/ehmrs.html?ref=defensesindepth.bio) COVID  
  
Without adding an exhalation valve filter, just taping over the exhalation valve still [doesn’t](https://pubmed.ncbi.nlm.nih.gov/37682702/?ref=defensesindepth.bio) provide much source control, but this can be fixed by removing the inhalation valves (though this modification voids NIOSH approval)[9]  
  
More involved DIY modifications can probably provide good source control, unclear if PFin = PFout  
  
Can also be manufactured without exit valves  
DIY PAPR | Harmonic mean: Unsure, though non-DIY loose-fitting PAPRs are ~200, though the evidence base is weaker than for N95 FFRs and EHMRs and performance is much more variable depending on brand and wearer training  
  
5th percentile: Unsure, non-DIY loose-fitting PAPRs are ~25  
  
Confidence level: Low, essentially no direct data | PAPRs generally [don’t provide source control](https://pubmed.ncbi.nlm.nih.gov/39116998/?ref=defensesindepth.bio), since outgoing air isn’t filtered; but pairing with a respirator worn underneath the PAPR can address this  
  
**Summary**  
High performing N95 FFRs, if worn properly and if PFin is close to PFout, might be protective enough to block transmission of even maximally infectious pathogens. EHMRs, with modifications to provide source control or if using types with built-in source control, more confidently pass this bar. DIY PAPRs likely do not since they don’t provide source control, but our confidence in their performance is very low and based on analogy to existing loose-fitting PAPRs, which themselves don’t have a robust evidence base.

As a general point, data on PPE protection factors, especially source control, is limited, and we’re excited that people in this space are working to improve on this evidence base. These efforts might soon provide important updates to the tentative estimates given above.

## Acceptability

**How acceptable are different types of PPE?**

PPE Type | Notes  
---|---  
N95 FFRs | Well-known, and in [surveys](https://pmc.ncbi.nlm.nih.gov/articles/PMC7115316/?ref=defensesindepth.bio) at least healthcare workers prefer these to EHMRs and PAPRs  
  
Generally perceived as more comfortable, easier to communicate while wearing compared to other respirators, especially PAPRs  
  
May not be perceived as sufficiently protective in the case of a severe pandemic, given that they were widely used during COVID-19 and yet there was still transmission (even if this was largely due to improper or inconsistent use); may not inspire sufficient confidence  
EHMR | Generally less comfortable than N95 FFRs  
  
May be perceived as more protective / may inspire more confidence than N95s  
DIY PAPR | Generally quite difficult to communicate while wearing, annoying and loud  
  
Much less familiar to most workers, many may have (justified) low confidence in a novel DIY solution  
  
**How compatible are different PPE distribution strategies with early workplace adoption?**

Distribution strategy | Notes  
---|---  
Stockpiled, push-approach | Does not require workplace to proactively seek PPE, lowering burden of adoption (though this comes with higher upfront logistical investment by the stockpile operator)  
Stockpiled, pull-approach | Relies on workplaces reaching out for PPE, raising the bar on how risky workplaces have to perceive the situation before getting PPE  
Prepositioned supplies | Requires high workplace investment and buy in pre-pandemic, but once a pandemic hits there are very few barriers to adoption other than worker preference  
  
**Note on DIY PPE**  
Making DIY PPE requires individual workers to take unusual, high-cost, and difficult actions, executed with high-fidelity. This is a high bar, and I don’t expect people to do this unless they already perceive risks as very high.

**Summary**  
N95s are probably more acceptable and, all else equal, more likely to be adopted early. However, it's possible that once risks are widely perceived as high, people may prefer more protective PPE. If there is high pre-pandemic uptake among employers, then pre-positioning may be a good option since it imposes few barriers to uptake once a disaster hits. If distribution is done during a disaster, a push-approach might have greater uptake, but comes with steep tradeoffs on higher administrative costs.

## Scale

**What is needed to provide different PPE types at scale in the US?**

PPE Type | Current stock and production | Cost to increase to target scale  
---|---|---  
N95 FFRs | In Feb 2022, the US Strategic National Stockpile (SNS) had over [620 million N95 FFRs](https://www.gao.gov/assets/gao-23-106210.pdf?ref=defensesindepth.bio); during COVID-19, N95 FFRs were temporarily cleared to be used for [5 days](https://stacks.cdc.gov/view/cdc/90574?ref=defensesindepth.bio), in theory this would have covered 30 million workers for over 100 days, but if they were not rationed this much, these stocks could be drawn down very quickly  
  
The SNS stockpile is being drawn down—many N95 FFRs are rated to expire after [5 years](https://multimedia.3m.com/mws/media/1807271O/respirators-beyond-their-shelf-life-considerations-technical-bulletin.pdf?ref=defensesindepth.bio), even though they can likely last longer—but we don't know what the current stock is  
  
It is also unclear what brands, and how high quality these are, are in the SNS stockpile  
  
At its peak during COVID, 3M, which produces ~80% of US N95 FFRs, made about 6-8 million respirators per day; again if these N95 FFRs can provide adequate protection for 5 days, this is enough to continually supply 30-40 million workers | Likely no need to increase production capacity; maximum historic production levels could continuously supply enough workers  
  
Building a large stockpile could be done very quickly  
  
US domestic production of major upstream inputs, e.g. meltblown polypropylene, electrical charging capacity, could again support historic peak production, but stockpiling materials would de-bottleneck ramp up  
  
Bulk unit costs are about $0.50-1.50, so a stockpile for 30 million workers that lasts 3 months would cost ~$270-810 million up front  
  
Annual storage costs, estimated by [others](https://pubmed.ncbi.nlm.nih.gov/25874891/?ref=defensesindepth.bio), per unit are about $0.04 per year, so a stockpile that lasts 30 million people for 3 months would cost about $20 million per year; costs may be higher if storage facilities need to be distributed or hardened against attacks  
EHMRs | Current US stock (public and private) is likely a few million units, but there are no solid estimates  
  
US production capacity is likely on the order of a few thousand to low tens of thousands per day, so building a 30 million unit stockpile would take years or require expanding production capacity or sourcing from outside the US (and would still likely have a long lead time)  
  
Warm-basing to quickly produce enough EHMRs once a pandemic hit would require increasing capacity by perhaps 2 OOMs  
  
There aren't hard caps on theoretical US production capacity imposed by current US production of upstream inputs | Bulk unit costs, inclusive of filters, are probably ~$12-15, so a 30 million unit stockpile might cost $360-450 million up front  
  
Annual storage costs are about ~[$1](https://pubmed.ncbi.nlm.nih.gov/25874891/?ref=defensesindepth.bio) per year, so maintaining a stockpile might cost an ongoing annual cost of ~$30 million  
  
We and others have estimated it costs ~$1 million to add ~5k units/day production capacity; building the warm-base production capacity to make 30 million EHMRs in:  
• 1 week would cost ~$850 million  
• 1 month would cost ~$200 million  
• 3 months would cost ~$70 million  
  
Warm-basing is likely only economical, compared to stockpiling, if you take a hit on time-to-delivery  
DIY PAPRs | No existing stock of DIY PAPRs, though there are low millions of traditional PAPRs in the US  
  
Relies on repurposing materials for batteries, fans, filters, tubes, facepieces, adhesives, and other structural parts  
  
The theoretical ceiling on DIY PAPR units is likely >100 million using components like:  
• Car batteries, EV batteries, and consumer electronic batteries  
• Car cabin HVAC fans, vacuum cleaner fans  
• Flexible faucet lines, garden hoses as tubes  
• Fiberglass, textiles as filters  
  
The biggest crux is whether people can repurpose materials into a consistently high-performing respirator, and if they'll be able to reliably tell if they succeeded | Theoretically very cheap to prepare to ramp up once a pandemic hits; possibly all that is needed is to run tests and publish instruction manuals (perhaps a $1-2 million research and communications plan)  
  
Increasing uptake at the onset of a pandemic could require a more concerted messaging campaign  
  
A caveat is that there is a "partially-DIY" option, where parts of a DIY PAPR are mass produced, either ahead of time or once a pathogen hits; this might improve the reliability of PAPR assembly and performance, but would require greater investment  
  
**Summary**  
The US has had an N95 FFR stockpile that could protect all essential workers for several months if used judiciously, but supplies are being drawn down. If not disrupted, existing US production capacity could also provide continuous N95 FFR supplies to all workers, with moderate warm-basing funding potentially needed to stockpile some upstream inputs to ensure these don’t bottleneck early ramp up. Building a new several-month N95 FFR stockpile would cost several hundred million USD and could be maintained for a few tens of millions of USD per year.

EHMRs could be stockpiled for a similar upfront and ongoing cost as N95 FFRs, where the N95 FFR supply would likely last several months and the EHMRs could last for over a year, without filter replacements. Warm-basing capacity to quickly ramp up EHMR production would likely cost much more than the upfront cost of a stockpile, unless EHMRs were produced over several months (e.g., with N95 FFRs providing protection early on).

DIY PAPRs rely on lay people using readily available materials once a pandemic hits, requiring very little upfront investment (unless the “partially-DIY” approach is taken), but they come with a potentially steep tradeoff against reliability.

## Speed

**How fast can warm-basing or stockpiling supply PPE?**

PPE Type | Warm basing | Stockpiling  
---|---|---  
N95 FFRs | With moderate investment, warm-based production could start making enough respirators with a week or two of a strong signal to ramp up production | Stockpiled respirators can be available effective immediately, depending on distribution  
EHMRs | With moderate investment (10s of million USD), warm-based production would not supply enough respirators for several months; delivering enough respirators within the 1 week target would require very high investment (likely >$800 million)  
  
May be more viable if there are some N95 FFR supplies that can cover essential workers for the earlier stages of an outbreak while production ramps up | Same as above  
  
**Notes on DIY PPE**  
We expect that in theory, most people could access the requisite materials for a DIY PAPR within a day or two and could assemble one in a few hours. There are some low-cost and readily accessible ways to get a coarse signal on whether an improvised respirator is providing protection (e.g., dispersing an aerosol with a strong odor and seeing if the wearer can taste or smell it), but getting accurate measurements requires access to relatively expensive particle counting equipment that is not widely available. This is much less of a concern with mass-produced PPE, where quality assurance is part of the manufacturing process, but there still are not reliable ways for individuals to quickly and cheaply verify their fit unless their workplace has an existing PPE program.

**How fast and accurately can different PPE distribution options deliver respirators to essential workers?**

Distribution strategy | Notes  
---|---  
Stockpiled, push-approach | While not used for PPE, the SNS has [12-hour push packages](https://stacks.cdc.gov/view/cdc/77037?ref=defensesindepth.bio) that can be delivered anywhere in the US, proving the principle of push-approaches (though holding PPE so that it’s ready to be pushed out this quickly likely increases storage costs)  
  
More generally, SNS has [12 depots](https://www.statnews.com/2020/03/10/coronavirus-strategic-national-stockpile/?ref=defensesindepth.bio) (not including >[1k](https://aspr.hhs.gov/SNS/Pages/CHEMPACK.aspx?ref=defensesindepth.bio) forward-deployed caches of some supplies, such as nerve agent) across the US; all parts of the country are probably within 10-hour drives of supplies, though shipments would likely route through layers of a hub and spoke delivery system  
  
The number of critical workplaces is in the hundreds of thousands, so having a live inventory of all individual locations would be challenging  
  
The location of some critical infrastructure sites, such as parts of the electric grid, is not public for security reasons, so a push-approach may be hard for, e.g., a philanthropic organization to administer  
Stockpiled, pull-approach | This is the current approach taken by the SNS for most supplies  
  
Administering this strategy would require adjudicating potentially 100s of thousands of claims, though pandemic circumstances may warrant granting an automatic or near-automatic “yes” to requests  
  
During the COVID-19 pandemic, the SNS managed to deliver the first supplies in a given shipment within approximately [1-7 days](https://oversightdemocrats.house.gov/imo/media/doc/SNS%20PPE%20REPORT.pdf?ref=defensesindepth.bio) of requests being processed (averaging ~3 days), and all supplies for a particular shipment were typically delivered in 3-10 days; however, this just represents shipments from national stockpiles to state or local jurisdictions, not individual workplaces where essential workers need them  
  
Slower uptake, since workplaces have to reach out proactively  
  
A version of this approach could involve workplaces participating in distribution, e.g. sending employees to pick up PPE packages, though this is a costlier action and may further reduce or delay uptake  
Prepositioned supplies | PPE supplies available effective immediately if pre-positioned at workplaces, though individual workplaces may end up disposing of PPE before a threat emerges  
  
Large logistical challenge up front, and on-site storage imposes an ongoing cost on workplaces outside of the pandemic Hybrid strategies could preposition supplies at regional depots that then use either push- or pull-approaches for last mile distribution once a pandemic hits  
  
Forward-deployed SNS caches of nerve agent—designed to be within [1 hour](https://aspr.hhs.gov/SNS/Pages/CHEMPACK.aspx?ref=defensesindepth.bio) of 90% of the US population—potentially provide a model for pre-positioned PPE that could reach workers very quickly  
  
**Summary**  
Warm-basing N95 FFR production is potentially compatible with delivering PPE to essential workers in the target ~1 week window, while this is not true for EHMRs. Stockpiling likely wins on speed, and there’s precedent for distributing supplies from centrally located stockpiles to local jurisdictions within a week, but full delivery to workplaces and workers took several extra days in the case of COVID, possibly stretching beyond the delivery time goal. Prepositioned supplies offer the fastest delivery option, but come with high upfront logistical requirements and depend on high workplace buy-in. Forward deployed caches could be accessible very quickly and lower the administrative hurdles of workplace predeployment.

## Security

**How secure are different procurement and distribution strategies?**

PPE Type | Warm basing | Stockpiling  
---|---|---  
N95 FFRs | There are only two really high throughput production lines in the US, potentially making for fairly easy targets  
  
Discussions suggest N95 FFR production facilities have many recognized cyber vulnerabilities  
  
If there’s no stockpile and current high throughput lines are incapacitated, supplies may be dependent on imports for key upstream inputs (e.g., specialized dies used in the production of filter material), creating further vulnerabilities  
  
On the plus side, if a stockpile is destroyed, having warm-based production capacity adds redundancy | Existing SNS PPE supplies are likely fairly concentrated (12 sites), potentially making them vulnerable to attack (though the SNS site locations aren’t public)  
  
Stockpiles have to be maintained, requiring consistent production since the rated shelflife is only 3-5 years for most models  
  
Stockpiles can be combined with a warm basing strategy to provide a buffer  
  
N95 FFR stockpiles only last so long, likely months, so eventually a stockpile would have to be supplemented with ongoing production  
EHMRs | High throughput production is also concentrated in only a locations  
  
However, making facepieces requires injection molding and suitable molds and the US has 1000s of facilities equipped with injection molding equipment, potentially making production more robust to disruption as long as the specialized molds are secure  
  
Making filters and assembling respirators is likely the more vulnerable production point | Once EHMRs are distributed from a stockpile to workers, supplies are secure, with no dependence on ongoing production (facepieces can be used for years and filters can last at least a year in many environments)  
  
If a stockpile is destroyed, there’s little recourse to ongoing EHMR production since production levels are low by default  
  
**Note on DIY PPE**  
Supplies should be robust to disruptions in transportation, manufacturing, and trade, since workers can use supplies around them and do their own assembly. However, PAPRs do add one dependency, which is that they require access to power or fresh batteries. Non-DIY PAPRs have 4-12 hour charge cycle requirements, though the amount of electricity needed is quite low (on the order of a <$10/year). Also, some parts of non-DIY PAPRs are supposed to be [replaced](https://www.gvs-rpb.com/blog/know-the-life-of-your-respirator?ref=defensesindepth.bio) every few months, suggesting that DIY PPE would require continuous upkeep; this is less a security vulnerability as a further knock on the likely reliability.

**Summary**  
For N95 FFRs and EHMRs, there are specific vulnerabilities associated with both warm basing and stockpiling. Relying on warm-based N95 FFR production makes PPE supplies dependent on potentially easy-to-disrupt manufacturing. This problem isn’t totally resolved with an N95 FFR stockpile, since disposable respirators will need to be replenished. Warm based EHMRs face similar vulnerabilities, and since they are harder to manufacture, disruptions could be more difficult to quickly recover from. An EHMR stockpile is robust once supplies are distributed to workers, but if the stockpile is destroyed, there’s little recourse.

* * *

  1. An important feature of essential workers is that, to keep society running and maintain our ability to respond to an AI takeover attempt, these workers cannot isolate even while most people can shelter at home. ↩︎

  2. In cases where a respirator provides essentially no source control (doesn’t filter outgoing air), PFout ≈ 1, so total protection is just PFin. If PFin ≈ PFout, total protection is roughly PFin2. ↩︎

  3. The harmonic mean is the reciprocal of the average of reciprocals. It's the [relevant metric](https://multimedia.3m.com/mws/media/2516985O/respirator-fit-study-for-3m-aura-9320-9322-9330-and-9332-filtering-facepiece-respirators.pdf?ref=defensesindepth.bio) because the infectious dose a person inhales is proportional to 1/PF, not PF itself — so a few poorly-fitted respirators (low PF) drag down the group's effective protection more than a few well-fitted ones pull it up. Strictly, when both wearer protection and source control contribute, what matters is the average of (1/PFin × 1/PFout); when these are equal, this reduces to the harmonic root-mean-square of PF. ↩︎

  4. The effectiveness of PPE at reducing transmission is driven by the average of (1/PFin × 1/PFout), and low PF values strongly bring down this average. Since people not wearing PPE effectively have PF values of 1 (no protection), they disproportionately drive high transmission rates. ↩︎

  5. While historically observed doubling times bottom out around 1–2 days, the practical floor is probably not much faster than ~1 day, even for an engineered pathogen, according to research by Damon Binder. Epidemic doubling time is set by the in-host viral doubling time V, which follows V = G / log2(I0), where G is the viral generation time (cell entry, genome replication, protein synthesis, assembly, and transit to new cells) and I0 is the number of new cells each infected cell successfully infects. Biophysical considerations suggest G cannot easily fall below ~4 hours, and known respiratory viruses already sit close to this floor (rhinovirus ~4 hrs, influenza A 6–8 hrs, SARS-CoV-2 ~10 hrs). Real viruses achieve I0 values of only ~2–10 because most virions are defective or fail to reach susceptible cells. Pushing I0 to a physically extreme ~105 (roughly what one gets if an entire cell is converted into virions, each infecting a unique new cell) and combining with G = 4 hrs yields V ≈ 0.24 hrs and a theoretical epidemic doubling time of ~0.2 days. However, latent periods of at least ~12 hours are likely unavoidable, and since people spend much of the day asleep or alone, the effective gap between infection and onward transmission is realistically ~1 day regardless of how fast within-host replication proceeds. ↩︎

  6. AI systems may soon be able to [automate AI R&D](https://www.planned-obsolescence.org/p/six-milestones-for-ai-automation?ref=defensesindepth.bio), speeding up this currently labor-intensive process so that AI capabilities increase much faster. With more advanced capabilities, AIs could make [breakthroughs](https://www.forethought.org/research/preparing-for-the-intelligence-explosion?ref=defensesindepth.bio) in many areas of science and develop new technologies. AI systems may develop [power-seeking motivations](https://joecarlsmith.com/2023/03/22/existential-risk-from-power-seeking-ai-shorter-version/?ref=defensesindepth.bio), and this development of powerful technologies and [control over industry](https://www.forethought.org/research/the-industrial-explosion?ref=defensesindepth.bio) may allow such AIs to disempower humanity. Even without fully autonomous AI agents pursuing such a goal, humans in charge of advanced AI systems may similarly try to (violently) take control of political or economic institutions, using AIs. AIs or AI-human teams that have large control over the global economy and industry may have many options for disempowering (other) humans, but those with limited control may use bioweapons to strengthen their offensive. ↩︎

  7. If seeding a pandemic is all that an adversary can do, it is likely not an adversary that has a plausible route to take over, even if humanity is in a weakened state. In this case, the attack is probably not an existential risk, though a robust PPE response is still necessary for minimizing loss of life and preserving as much economic and industrial capacity as possible. It’s also possible that a pandemic is actually caused by an actor that is not trying to take over, but provides the opportunity for takeover by another adversary. ↩︎

  8. There are other DIY options besides poorly-performing masks or PAPRs, but there is very limited data on their performance, and they generally are less protective than non-DIY options since creating a tight seal around the face can be difficult. ↩︎

  9. Some EHMRs have one-way inhalation valves on the filter cartridges that only open inward. If the exhalation valve is blocked but the inhalation valves are left in place, exhaled air can't go back out through the filters and it takes the path of least resistance, escaping unfiltered around the edges of the facepiece seal. NIOSH [studied](https://www.cdc.gov/niosh/docs/2022-109/pdfs/2022-109.pdf?ref=defensesindepth.bio) how to get around this to improve source control during the COVID-19 pandemic. ↩︎



