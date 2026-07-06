---
title: "Will We Really Put Data Centers in Space?"
url: https://www.forethought.org/research/will-we-really-put-data-centers-in-space
fetched: 2026-07-06
via: html2text
topic: "forethought"
note: "Will we really put data centers in space — space governance / infrastructure"
---

# Will We Really Put Data Centers in Space?

[Avi Parrack](/people/avi-parrack)[Fin Moorhouse](/people/fin-moorhouse)

## Citations

Cite

## Citations

PDF

Contact

22nd May 2026

#### Will We Really Put Data Centers in Space?

Abstract

Introduction & Takeaways

The basic economic case for orbital data centers

Launch lead times and scaling rates depend on Starship

Is thermal management a dealbreaker?

Open problems and disadvantages

Chip Failure

Bandwidth and ODC Architectures

Radiation

Congestion in Orbit

Supply chain immaturity

Non-cost factors

Regulation and permitting

Physical and cyber security

Conclusions

Appendix A: Radiation environment

Appendix B: Degradation and system wear

Appendix C: Space weather

Appendix D: Solar cost crossover

Space side: two solar scenarios

Earth side: two baselines

Sensitivity to battery cost

Appendix E: Thermal management

Appendix F: Environmental footprint

[AI Narration] Will We Really Put Data Centers in Space?

[](https://pinecast.com/listen/1076e865-e748-4608-969e-f1a61250f151)

Playback speed0.5×0.75×1×1.25×1.5×1.75×2×

Volume

0:00 of 1:14:380:00|1:14:38

[](https://pnc.st/s/forecast/listen_in/SPOTIFY)

[](https://pnc.st/s/forecast/listen_in/APPLE)

[](https://www.youtube.com/@forethought_org)

[](https://podcastaddict.com/podcast/forecast/5745915)

[](https://pnc.st/s/forecast/listen_in/POCKETCASTS)

[](https://pnc.st/s/forecast/listen_in/OVERCAST)

[](https://pinecast.com/feed/forecast)

## Abstract

[](/research/will-we-really-put-data-centers-in-space#abstract "Link to heading")

Several major technology companies have announced plans to operate AI data centers in orbit. Elon Musk [recently claimed](https://web.archive.org/web/20260207040614/https://www.wsj.com/tech/elon-musk-xai-spacex-merger-2896ae1e): “the lowest-cost place to put AI will be space […] within two years, maybe three.” If a meaningful fraction of new AI compute really is placed in space within a few years, that would be a fairly big deal for AI governance and strategy. Here we try to disentangle the hype from reality and provide a sober assessment of the technical and economic feasibility of orbital data centers (ODCs).

The main case for ODCs is the cost of energy: space solar panels in the right orbits receive more constant and intense sunlight compared to Earth. Moreover, ODCs don’t currently face the same permitting and regulatory delays as on Earth, cause fewer ongoing environmental harms compared to grid or onsite natural gas-powered data centers, and may be more secure against data exfiltration. We find that the cost-competitiveness case for ODCs depends almost entirely on Starship achieving reusability comparable with what SpaceX achieved with Falcon: space-based solar reaches cost parity with present-day off-grid terrestrial power continuously at roughly $250/kg to orbit, and becomes cheaper than any current terrestrial energy source at around $50/kg, from the present-day launch cost of roughly $1,500/kg. Radiative cooling, often cited as a fatal obstacle, appears surprisingly manageable — potentially even cheaper than on Earth. However, ODCs may require substantial (perhaps ~38%) extra non-compute hardware (like solar, racks, and cooling) over 5 years to compensate for their inability to swap out failed chips, and inter-satellite bandwidth limitations likely confine ODCs to inference workloads, at least early on.

Assuming no transformative AI,1

## 

but continued demand for data center buildout, we estimate that ODCs are unlikely to represent a meaningful share of compute before 2030, but become cost-competitive with present-day terrestrial data centers within 3–5 years if Starship development stays on track.

## Introduction & Takeaways

[](/research/will-we-really-put-data-centers-in-space#introduction--takeaways "Link to heading")

Some of the world's largest technology companies continue racing for compute. If progress continues, demand for data centers may more than double by 2030.2

## 

Increasingly, though, new data center capacity is bottlenecked by multi-year queues to connect to the power grid.3

## 

The result has been a scramble for workarounds. Leading AI labs have [increasingly adopted a “Bring Your Own Generation”](https://newsletter.semianalysis.com/p/how-ai-labs-are-solving-the-power?utm_source=chatgpt.com) model to source power, deploying onsite gas turbines and engines to bypass grid bottlenecks. xAI, for example, reportedly installed hundreds of megawatts of onsite gas generation in Memphis to accelerate deployment, and OpenAI and Oracle have placed large turbine orders for new Texas campuses.

Some argue that energy will become the binding constraint on AI progress, given grid interconnection delays as gas turbines are themselves facing [multi-year manufacturing backlogs](https://www.reuters.com/business/energy/power-developers-adapt-gas-turbine-strategies-mitigate-tight-supply--reeii-2026-03-02/). But the constraint does not appear fundamentally binding (as [Epoch notes](https://epoch.ai/gradient-updates/is-almost-everyone-wrong-about-americas-ai-power-problem)): turbine manufacture may expand to meet more demand and companies could go off-grid using combinations of gas, solar, and batteries, scaling power in parallel with compute, albeit at a cost premium. This raises a natural question: if you're going off-grid anyway, then what’s the best way to get power and where is the best place to put your data center?

Some think the answer will be in orbit. In November 2025, Google announced [Project Suncatcher](https://blog.google/technology/research/google-project-suncatcher/), a plan to put TPU-equipped satellites in dawn-dusk [sun-synchronous](https://en.wikipedia.org/wiki/Sun-synchronous_orbit) orbit. In early 2026, SpaceX filed with the FCC for authorization to launch and operate a constellation of up to [one million data center satellites](https://techcrunch.com/2026/01/31/spacex-seeks-federal-approval-to-launch-1-million-solar-powered-satellite-data-centers/).4

## 

Other entrants include [Blue Origin](https://techcrunch.com/2026/03/20/jeff-bezos-blue-origin-enters-the-space-data-center-game/), [Ramon.Space](https://payloadspace.com/ramon-space-ingrasys-aim-to-fly-prototype-orbital-data-center-in-2027/) and startups like [Starcloud](https://techcrunch.com/2026/03/30/starcloud-raises-170-million-series-ato-build-data-centers-in-space/), and [Aetherflux](https://www.aetherflux.com/) while China's Three-Body Computing Constellation has [launched 12 operational satellites](https://www.scmp.com/news/china/science/article/3310506/china-launches-satellites-start-building-worlds-first-supercomputer-orbit) and run Alibaba's Qwen3 model in orbit. Recently, at GTC in March 2026, NVIDIA announced the [Space-1 Vera Rubin](https://nvidianews.nvidia.com/news/space-computing) Module, meant to be a dedicated space-rated GPU platform.

At first glance, it seems very unlikely that any meaningful fraction (say, >10%) of additional data center capacity will be placed in space in the next few years. But if the companies betting on space are right, that would be a fairly big deal, and it could change the landscape of AI governance. For example, terrestrial data centers are subject to national and regional regulations, whereas AI developers could potentially exploit jurisdictional ambiguities around compute in space. Also, the path to low-cost orbital compute likely routes through a single launch company, SpaceX, which also now operates a frontier AI lab since its [acquisition of xAI](http://archive.today/2026.03.21-184645/https://www.reuters.com/business/musks-spacex-merge-with-xai-combined-valuation-125-trillion-bloomberg-news-2026-02-02/). And that might raise concerns around concentration of power.

We've been looking into the technical and economic viability of orbital data centers (ODCs). Our core [model](https://docs.google.com/spreadsheets/d/1wGgS0290DCl5L3hLUN0i02GdwsigZsAd2ujpuGzt1_U/edit?usp=sharing) gives estimates for the total cost of Earth and space-based data centers across several scenarios.

## Image

_Cost breakdown for three Earth-based and three space-based scenarios building out 1 GW of compute. As best we can determine, orbital data centers could become cost competitive with a bullish terrestrial buildout if launch cost reaches around $100/kg given modest reductions to server and cooling system mass, while a bullish case for orbital data centers with substantial mass reductions and launch at $50/kg may offer cost savings._

The report focuses on three questions. First, what is the basic economic case for a meaningful fraction of AI compute being placed in space? Second, the most obvious physical blocker: can you cheaply cool a data center in orbit? Third: how fast could the shift to space data centers happen, how soon, and what would have to go right?

Here is our provisional assessment:

  * **SpaceX's Starship is the only vehicle currently on track to deliver the launch costs and cadence that meaningfully scaling orbital data centers would require.** Competitors are years behind, making SpaceX’s [Starship](https://www.spacex.com/vehicles/starship) the only near-term path to large-scale orbital compute. SpaceX aims to complete Starship development by late 2026, with several necessary milestones still ahead. If development stays roughly on track, Starship could plausibly hit the cost and cadence required to scale meaningful orbital compute within 3–5 years. However, chip production may become the limiting factor by this point, rather than launch capacity.

  * **The cooling problem is more tractable than commonly assumed.** Passive radiators using selective coatings and lightweight carbon fibre panels could achieve ~163–346 W/kg at system level, a 13-28× improvement over ISS-era radiators (~13 W/kg).5

## 

No radiator at these performance levels has been deployed at the scale an orbital data center would require, but prototype high-conductivity carbon composite panels have demonstrated the material properties required. At these performance levels, thermal hardware is 2-5% of total data center cost, and actually _less_ than what terrestrial data centers spend on cooling over a comparable lifecycle.

  * **If launch costs fall enough, the unit economics could favor space.** Solar panels in dawn-dusk sun-synchronous orbit produce roughly 3–5× the energy of the same panel at a good terrestrial site.6

## 

Space-based solar becomes cheaper than the best off-grid terrestrial installations once launch costs drop below roughly $250/kg using [Starlink](https://starlink.com/?srsltid=AfmBOopsxblkyrEqAjTknJq0Uvj3J7FyGWhJgHm6fISB2jrP2pIEgdqR)-like solar arrays. At a launch cost of $50/kg (corresponding perhaps, to a Starship with full reuse as reliable as Falcon), space solar could fall to between $25–45/MWh, making it cheaper than any current terrestrial option available today.7

## 

Beyond the symmetric cost of chips, launch cost is the dominant line item for ODCs while power and op-ex dominate terrestrial costs but would be near zero in space.

  * **The inability to do maintenance would be a large cost.** Chips often fail and are swapped out in today’s data centers but a dead chip in an ODC would remain dead, wasting the parts of the supporting infrastructure (power, cooling) and diminishing overall compute. We model this below as a 9% annual bleed causing about 40% overbuy of launch and non-chip hardware over the data center's lifetime.8

## 

Below $100/kg launch cost this might net out against other savings from ODCs but this is a significant uncertainty since the actual rates of chip failure for ODCs could be higher or lower.

  * **All-things-considered we think that, absent transformative AI, orbital data centers probably won’t make up a meaningful fraction of compute before 2030, but it's credible that space could house much or even the majority of compute buildout throughout the 2030s.**




## The basic economic case for orbital data centers

[](/research/will-we-really-put-data-centers-in-space#the-basic-economic-case-for-orbital-data-centers "Link to heading")

The core of the economic case is energy. A solar panel in a dawn-dusk sun-synchronous orbit9

## 

receives near-continuous direct sunlight, producing roughly 3 to 5 times the energy of the same panel at a good terrestrial site.10

## 

Space-based panels can also be lighter and cheaper than their ground counterparts, since they need no weatherproofing, grid inverters, or heavy mounting hardware.11

## 

But launching solar panels to orbit adds a fixed overhead, and at current prices, space solar doesn't pencil out. The question is: at what launch cost does space solar become cost-competitive with Earth-based power, and are those launch costs feasible within a few years?

To get a first sense of the answer, we can look at the levelized cost of energy (LCOE): the total cost of building and operating a power source, divided by its total lifetime energy output, expressed in dollars per megawatt-hour. This lets us compare across very different power generation technologies on equal footing. On this basis, space solar reaches cost parity with the cheapest present-day terrestrial energy sources at around $50/kg.12

## 

## Image

_Space solar LCOE compared to terrestrial generation technologies. Dashed curves show space solar LCOE as launch cost falls from $550 to $10/kg. Horizontal lines show median LCOE for terrestrial technologies today (unsubsidized). We model two space solar configurations, current starlink-like efficiency as an upper bound on cost based on current technology (blue line), and an optimized lightweight solar array pushing the limits of packing efficiency and construction as a lower bound (purple line)._13

## 

These LCOE figures, however, reflect the cost of energy at the point of generation; they don't capture what it actually costs to supply continuous, reliable power to a large data center operating off-grid. This distinction matters increasingly for hyperscale data centers, which are facing grid interconnection queues that are pushing operators toward building their own independent microgrids. A terrestrial solar facility supplying power 24/7 requires substantial battery storage and backup generation capacity to cover nights and weather interruptions. These are costs that aren’t accounted for in the LCOE figures shown above but would be a core need for off-grid data centers. When we include those system-level costs for the off-grid data center model, the picture for space solar actually looks better.14

## 

We estimate that **in-space solar** (like that used by Starlink) **reaches cost parity with terrestrial solar at around $250/kg** in launch costs, which seems achievable in 1–2 years from the time of writing (early 2026).

## Image

_Solar Cost Crossover. Earth-to-space cost ratio for powering 1 kW continuously via solar panel as a function of launch cost. This compares space-based solar against two terrestrial baselines: a bullish solar+gas microgrid (solid) and a 100% renewable off-grid facility (dashed) with crossover points marking where space becomes cost-competitive. The lines give ratios of the cost of Earth over the cost of space solar. The blue lines compare the currently flown starlink-like array as a conservative estimate while the purple shows more lightweight, high performance panels for an upper bound._15

## 

Beyond energy costs, we'd like to know how ODCs compare to terrestrial data centers on cost all-told, line-item for line-item. On the build side, both architectures share compute hardware as their dominant cost, but diverge elsewhere: terrestrial facilities require power, cooling systems, physical buildings, land, and permitting, while ODCs replace these with space-specific hardware — solar panels, thermal radiators, satellite bus, and launch. On the operational side, terrestrial centers face ongoing energy bills, staffing, maintenance, and taxes, whereas ODCs largely eliminate these recurring costs by generating solar power freely in orbit. The operational liability for ODCs, however, is the inability to perform maintenance: hardware failures (routine in today’s data centers) would then result in permanent infrastructure loss. We think the business model for ODCs would be more fire-and-forget, accepting losses as they come and launching replacement satellites to compensate for in-orbit hardware failures. We model these failures as costing ~9% compute loss per year, based on estimates for chip death, radiation induced latchup, and mechanical failures detailed in subsequent sections.

| Earth| Space  
---|---|---  
**Build costs (CapEx)**|  Compute, Power (Solar+Batteries+Gas), Cooling Units, Building/Facility, Land, Permitting| Compute, Solar panels, Radiators, Satellite bus & structure, Launch  
**Operational costs (OpEx)**|  Energy, Staffing/Maintenance, Taxes| Replacement satellites (to compensate for chip bleed due to hardware failures)  
  
We can try to forecast total costs by modeling six scenarios (three for Earth and three for space). The three Earth scenarios span grid-connected construction with conventional cooling, off-grid microgrids with full battery autonomy, and a hybrid case using on-site solar with gas backup to bypass grid interconnection queues entirely. The three space scenarios are anchored to plausible Starship launch cost trajectories — conservative ($250/kg), median ($100/kg), and bullish ($50/kg) — with corresponding assumptions on thermal management, and server mass reduction.16

## 

Across all scenarios, IT hardware is held constant at $25.6B per GW, isolating infrastructure and operational costs as the key variables. For Earth, non-compute build costs are amortized over 20 years while orbital infrastructure is phased out after a 5-year lifecycle (matching current Starlink lifecycles).17

## 

Scenario| Per 5 yr Cycle ($B)| Notes  
---|---|---  
**Earth Grid**|  37.6| Grid-connected, conventional cooling  
**Earth Microgrid (Conservative)**|  42.5| Off-grid microgrid, full battery autonomy  
**Earth Microgrid (Bullish)**|  36.8| On-site solar + gas backup, bypasses grid queue  
**ODCs (Conservative)**|  48.2| $250/kg launch  
**ODCs (Median)**|  35.0| $100/kg launch, 17% mass reduction over terrestrial  
**ODCs (Bullish)**|  30.3| $50/kg launch, 54% mass reduction over terrestrial  
  
Our estimates suggest ODCs could approach cost parity with terrestrial builds at around $100/kg — a 15× reduction from today's ~$1,500/kg. Whether that's achievable, and on what timeline, depends largely on Starship's reusability trajectory, which we examine next.

### Launch lead times and scaling rates depend on Starship

[](/research/will-we-really-put-data-centers-in-space#launch-lead-times-and-scaling-rates-depend-on-starship "Link to heading")

The scalability of orbital data centers, and indeed a wide range of economic activity in space, depends on one vehicle. SpaceX's Starship seems to be the only launch system that could deliver the combination of low cost, high cadence, and large payload capacity that orbital data centers would require if they are to make up a meaningful fraction of additional data center capacity anytime soon.

#### Where Starship stands today

[](/research/will-we-really-put-data-centers-in-space#where-starship-stands-today "Link to heading")

As of early 2026, Starship has [flown 11 times](https://www.spacex.com/launches/starship-flight-11). It is a two-stage rocket: the bottom half (a booster called Super Heavy) launches the top half (the Ship) to orbit, then flies back to the launch site where a pair of mechanical arms on the tower [catch it mid-air.](https://www.youtube.com/watch?v=nVNIoQUcFI4) This catching manoeuvre is now semi-routine, and SpaceX has reflown one booster, demonstrating that the hardware can survive reentry.

The next challenge is reusing the Ship, the upper stage which actually reaches orbit. After three consecutive failures in early 2025, the last two flights achieved controlled reentry and [ocean splashdown](https://youtu.be/rcd_SQZDlnk), but the Ship has not yet been caught or flown twice. A recurring obstacle is the heat shield: reentering the atmosphere subjects the underside to temperatures exceeding 1,400°C, and the vehicle needs to survive this without needing expensive refurbishment. Elon Musk has called designing a reusable heat shield the ["biggest remaining problem"](https://techcrunch.com/2025/08/27/with-starship-flight-10-spacex-prioritized-resilience-over-perfection/) for Starship.18

## 

#### While competitors appear several years behind

[](/research/will-we-really-put-data-centers-in-space#while-competitors-appear-several-years-behind "Link to heading")

China's [Long March 9](https://en.wikipedia.org/wiki/Long_March_9), designed for 150 tonnes to LEO, is not expected to fly [until 2030 to 2033](https://spacenews.com/chinas-new-rocket-for-crew-and-moon-to-launch-in-2026/). ESA, JAXA, and ISRO have no comparable programmes. [New Glenn](https://en.wikipedia.org/wiki/New_Glenn), Blue Origin's heavy-lift vehicle, landed its first booster in November 2025 but carries just 45 tonnes to LEO versus Starships 150-200 tonnes, with a [super-heavy 9×4 variant](https://techcrunch.com/2025/11/20/blue-origin-reveals-a-super-heavy-variant-of-its-new-glenn-rocket-that-is-taller-than-a-saturn-v/) (70+ tonnes) announced for perhaps 2027. Notably, Blue Origin investigated upper-stage reuse from 2021–2025 but [shelved the project](https://www.nextbigfuture.com/2025/11/blue-origin-will-increase-new-glenn-thrust-15-25-and-make-rocket-bigger.html), meaning without full reusability, there is no path for New Glenn to approach the launch costs that even partial Starship reusability enables. As best we can tell, these are the closest competitors to Starship and they appear to be 3-5 years on key milestones.

#### What does Starship reusability mean for launch cost?

[](/research/will-we-really-put-data-centers-in-space#what-does-starship-reusability-mean-for-launch-cost "Link to heading")

We estimate launch cost across several reusability scenarios, we assume the build cost remains constant at $90M build cost per Starship, and $5M in per-flight operations.19

## 

Scenario| Booster life| Ship life| Amortized build| Ops / refurb| Per-flight cost| Payload (t)| $/kg  
---|---|---|---|---|---|---|---  
Expendable| 1| 1| $90M| $5M| $95M| 200*|  **~$475**  
Booster reuse| 10| 1| $6M + $30M| $5M| $41M| 180*|  **~$228**  
Full reuse (early)| 10| 10| $6M + $3M| $5M| $14M| 150| **~$93**  
Full reuse (like Falcon)| 25| 25| $2.4M + $1.2M| $4M| ~$7.6M| 150| **~$51**  
Full reuse (better than Falcon)| 50| 50| $1.2M + $0.6M| $3M| $4.8M| 150| **~$32**  
Full reuse (bullish)| 100| 100| $0.6M + $0.3M| $2M| $2.9M| 150| **~$19**  
  
*Expendable ships offer greater payload to orbit since they don’t need fuel for landing, while grid fins and whole systems can also be removed.

The number of reuses a given Starship will be rated for is a variable on cost. We don’t know how many reuses to expect from Starship but a good point of comparison would be with SpaceX’s previous rockets. SpaceX’s best with the Falcon rocket is [33](https://spaceflightnow.com/2026/02/21/live-coverage-spacexs-most-flown-falcon-booster-to-launch-on-record-33rd-flight/) reuses while typical numbers seem to be around [15 reuses](https://zapatatalksnasa.com/falcon-9-reusability/). We set our median launch cost at $100/kg, corresponding to ~10 reuses and our bullish scenario launch cost at $50/kg corresponding to ~25 reuses. Notably, both of these launch costs are comfortably below the ~$250/kg threshold when space solar wins out over terrestrial power generation and based on our model it is at around $100/kg that ODCs could reach overall cost parity with terrestrial data centers. The (practically irreducible) floor for launch cost is set by propellant (roughly $900K per launch for 4,500 tonnes of liquid oxygen and methane) plus ground operations (perhaps $1.1M), giving about $13/kg at 150 tonnes to orbit. Though recent updates from SpaceX claim the eventual Starship (Block 4) will be capable of delivering [200 tonnes](https://www.spacex.com/updates) to orbit which would hypothetically set the mature floor for Starship around $10/kg.

#### How long would it take for ODCs to scale?

[](/research/will-we-really-put-data-centers-in-space#how-long-would-it-take-for-odcs-to-scale "Link to heading")

Given the above, it looks plausible that space-based data centers could become cost-competitive with terrestrial data centers beyond ~10 reuses per Starship. If this is right, a further question is how long it would take for ODCs to actually become a meaningful fraction of total compute. We’ll look at the main inputs to launch cadence and outline what a slow and fast scenario could look like for scaling orbital compute.

  * **The turnaround time for each Starship.** This is the time to catch, restack, load cargo and refuel the Starship before launching again, where SpaceX targets 3x/day. SpaceX’s current record turnaround is 9 days, but this being with Falcon rather than with a fully reusable vehicle. As for a rough lower bound: commercial airlines typically run 3-7 flights a day, with turnaround times of perhaps 1–2 hours. Still the limits of reusable heat shields are not known and the floor for turnaround might be much higher. 
    * We’ll use a 1x/day turnaround for our fast scenario and a 6 day turnaround for our slow scenario.

  * **The time to construct new rocket factories and ramp their production.** SpaceX has two Gigabay production facilities under construction (Boca Chica and Roberts Road, FL), both targeting completion by end 2026, but it's too early to tell what growth rates will be based on this. An apt comparison could be to Tesla, which opened [5 Gigafactories](https://manufacturingdigital.com/digital-factory/timeline-teslas-construction-gigafactories) between 2016 and 2022, a pace of roughly one new major factory every 14 months. Construction times also fell sharply over this period: Giga Shanghai was completed in just [168 working days](https://www.historytools.org/docs/a-guide-to-all-of-teslas-gigafactories-and-where-they-are-located), roughly a third of the typical automotive factory build time. 
    * We’ll assume SpaceX builds 1 new factory over the next ~4 years of Starship R&D for our slow scenario and that SpaceX builds 2 new factories over the next 2 years in our fast scenario.

  * **The number of rockets/factory/year produced.** SpaceX has discussed an eventual goal of producing ~365 Starships per year (~1/day). As a useful anchor, Boeing’s mature 737 program produces on the order of ~38–42 aircraft per month today, though this rate is currently capped by the FAA following quality issues, and historically has reached higher levels. An airliner contains on the order of hundreds of thousands of parts, whereas Starship’s stainless-steel architecture is relatively simpler. However, Boeing benefits from decades of production tooling and supply-chain maturity. SpaceX’s Falcon-9 ramp could also be illustrative. Early production went from about 25 rockets in 2020 to 165 by 2025. 
    * We’ll assume SpaceX can build ~1–10 rockets every 2 months from a given factory floor for our slow scenario or ~1–20 starships per month for our fast scenario.20

## 




Musk has claimed ODCs will likely be the cheapest way to generate AI compute in [2.5–3 years](https://www.spacex.com/updates), though a more calibrated adjustment on SpaceX’s intentionally ambitious timelines could be 3–5 years. Below we give two example scenarios, one conservative and one bullish.21

## 

In this way we try to give an upper and lower forecast for how quickly compute could be launched to orbit. Notably, there are relatively few good anchors for these timelines, so we’re especially uncertain about these estimates. Still we’re showing our best-guesses, for the sake of concreteness.

  * **Slow ODC takeoff scenario.** In this scenario, Starship reaches rapid reusability mid-2030 having suffered many setbacks. SpaceX builds just one additional gigabay over the ~4.5 year development cycle of Starship, then begins to ramp production. By 2031, 3 gigabays have produced a total of 18 Starships but turnarounds are slow, requiring 6 days of downtime after each flight. The first meaningful tranche of orbital compute is deployed throughout 2031 and totals around 1,095 launches amounting to roughly 4 GW of orbital compute. Meanwhile forecasts expect perhaps 100 GW of terrestrial data center buildout by 2030. Thus, orbital compute makes a negligible fraction of total compute until perhaps later throughout the 2030s.

  * **Fast ODC takeoff scenario.** In this scenario, Starship begins [deploying Starlink V3 satellites in 2026](https://www.spacex.com/updates) and reaches rapid reusability by 2027. SpaceX then builds out 2 new gigabays by EOY 2027 and ramps production variously across 4 facilities, producing at least 48 Starships by early 2028. By this point Starships are produced at one Starship per month on average, as contrasted with Boeing's ~38 planes per month or Tesla’s production of ~10,000+ cars per month from a single factory floor. Throughout the year, the growing fleet manages a total of 10,000+ launches. By EOY 2030, up to 100GW of orbital compute is operational.22

## 




## Is thermal management a dealbreaker?

[](/research/will-we-really-put-data-centers-in-space#is-thermal-management-a-dealbreaker "Link to heading")

On Earth, data centers stay cool by blowing air or pumping liquid coolant over hot chips, and then venting that heat into the atmosphere. Google and Meta, which have pushed cooling overhead to best-in-class levels, dedicate roughly 7–10% of their electricity and perhaps 15–20% of facility capital expenditure to thermal management.23

## 

In the vacuum of space, there is no air, so another method is needed. Liquid cooling can be used to pump heat away from chips, but that heat must ultimately be radiated away by emitting infrared light into the void. The physics governing this (the [Stefan-Boltzmann law](https://en.wikipedia.org/wiki/Stefan%E2%80%93Boltzmann_law)) requires a large surface area to shed a modest amount of heat, so first-pass estimates suggest you'd need prohibitively large radiator panels to cool the heat generated by just a few GPUs.24

## 

On more careful analysis, however, the cooling problem seems both less important and more tractable than it first appears. Configured in the right way, it looks like relatively cheap and light radiators will be sufficient.

The radiators on the International Space Station, designed in the 1990s, manage an efficiency of about [~13 W/kg](https://angadh.com/space-data-centers-1). But there has not been significant commercial pressure to optimize space radiators, since they’re currently a small fraction of the cost to launch and operate satellites. Thus, we expect some fairly low-hanging fruit for efficiency improvements. Compute modules would also escape needing the sprawling cooling loops and cold plates the ISS uses to sustain humans, and could run at much warmer radiator temperatures (panels at 25–45°C) than ISS radiators (whose [ammonia outlet is controlled to about -40°C](https://ntrs.nasa.gov/citations/20000032541) to stay above the freeze point), exploiting the T⁴ dependence in the Stefan-Boltzmann law.

A flat panel coated with standard off-the-shelf reflective paint radiating from both sides rejects a surprisingly large amount of heat.25

## 

Built from lightweight carbon fibre composites with fluid loops to carry heat from the chips to the radiating surface, these passive radiators achieve roughly 163 W/kg at the system level in our estimates, a 13× improvement over ISS heritage technology.26

## 

NASA Marshall's testing of High-Conductivity (Hi-K) carbon-composite radiators has [demonstrated specific powers roughly 7× that of conventional metal fins](https://ntrs.nasa.gov/citations/20160008044) (implying system-level specific powers of order ~90 W/kg at moderately elevated temperatures, using ISS-style metal-fin baselines), with hardware built and tested on the ground.

Crucially, the power rejected by a radiator scales to the fourth power of its temperature, per the [Stefan-Boltzmann law](https://en.wikipedia.org/wiki/Stefan%E2%80%93Boltzmann_law). So moving from the ISS’s human-friendly temperatures, to industrial-grade rejection temperatures, allows ODCs to get notably more efficient at radiating heat.

Running a coolant loop at 25–45°C instead increases heat rejection per square metre by 2.7 to 3.5×. The practical ceiling is set by GPU thermal margins: modern chips throttle at around 83–85°C, and direct liquid cooling typically runs 15–25°C below the chip, capping useful coolant temperatures at perhaps ~60°C. At 25–45°C, the physics is sufficient to reduce radiator mass substantially. Lastly, this same T4 scaling means cooling could become even more efficient by actively pumping heat away from the chips and towards the radiators; though on our first-pass analysis, this looks like more hassle than it’s worth.27

## 

**If this is correct, thermal management looks like a modest cost.** In our conservative scenario, radiator hardware is about 14% of system mass and ~5% of total cost. In our median scenario, given a warmer operating temperature, it drops to 8% of mass and roughly 2% of cost. Strikingly, this is _less_ than what terrestrial data centers spend on cooling over a comparable lifecycle.28

## 

That said, the kind of radiators we’re speculating about haven’t been flight proven, so we should also consider the more conservative scenario. Our estimates extrapolate from this baseline using thinner panels and higher operating temperatures, which is why we reach 163 W/kg and above. The most pessimistic assumptions we’ve seen have radiators accounting for as much as 60% of system mass. When launch costs are high, this is clearly a big deal. For example, if Starship indeed has a $250/kg launch cost because it is only partially reusable and there can be no improvement on the 1990s radiator design, then this would amount to an increase of over $8B per giga-watt. Compare this to ~$3B spent on cooling Earth-side. At our median launch cost $100/kg or bullish case of $50/kg this worst case scenario becomes a $3.5B increase or $1.7B increase respectively. This underscores how the most sensitive parameter by far for orbital data centers is launch cost. Making ODCs economical will require improving on existing radiator designs, but we conclude that cooling is unlikely to be a major bottleneck to ODCs becoming economically feasible, if they ever do.

## Open problems and disadvantages

[](/research/will-we-really-put-data-centers-in-space#open-problems-and-disadvantages "Link to heading")

A data center in orbit also faces a number of other difficulties that a terrestrial facility does not. We work through the most important ones here. Some of these appear manageable; others are unproven and uncertain.

**We think chip failure and inter-satellite bandwidth are the hardest hitting challenges for ODCs.** If solutions can’t be found, dead infrastructure due to chip failure could result in something like a 38% premium on non-IT infrastructure and launch costs (accounted for as ‘chip bleed’ in Figure 1); while low bandwidth may mean orbital data centers are useful only for inference and not competitive in frontier training runs.

### Chip Failure

[](/research/will-we-really-put-data-centers-in-space#chip-failure "Link to heading")

On Earth, GPU failures are routinely handled. Meta's 16,384-GPU H100 cluster experienced 419 hardware failures in 54 days (roughly one every three hours), but a technician simply swaps the dead card while the training run continues via checkpointing.29

## 

In space, this kind of maintenance is not feasible for the foreseeable future. Failed chips stay failed, and you bleed compute from day one.

How bad is this? Based on Meta's observed annualised failure rate of roughly 9%, a space data center would lose about 38% of its initial compute over a 5-year lifecycle.30

## 

We accounted for this in the figures above by applying a 38% cost increase to all non-chip hardware, since a terrestrial operator would be buying the same replacement chips but could install them without losing any infrastructure.31

## 

That’s a significant penalty. It might be partially offset by factors favouring the space environment (i.e. no dust, no humidity, after launch, no temperature cycling from HVAC), but additional space-specific failure modes (radiation-induced latchup, thermal cycling from eclipse periods for non-SSO orbits) could push the rate higher. The net effect is uncertain, and we think this one of the larger unknowns regarding orbital data centers.

### Bandwidth and ODC Architectures

[](/research/will-we-really-put-data-centers-in-space#bandwidth-and-odc-architectures "Link to heading")

How you physically arrange compute in orbit matters a great deal, particularly for training workloads that require fast communication between GPUs.

At the modest end, individual “smart” satellites could carry a few kilowatts of onboard compute, for example enhanced Starlink V3 nodes [doing inference](https://x.com/elonmusk/status/1984249048107508061?s=20), caching, or on-orbit data filtering. [Starcloud-1](https://www.starcloud.com/starcloud-1), a 60 kg test satellite launched in 2025 carrying an Nvidia H100, represents early hardware in this category. These are deployable today in principle, but the compute per node is small.

## Image

_Illustration of two types of orbital data center architecture, the optically linked constellation model (most like today’s space tech) and the modular station model (most like traditional data centers)._

At the ambitious end, two broad approaches are being pursued for data-center-scale compute, each with distinct tradeoffs.

  * **Constellation model (SpaceX, Google, Blue Origin)**. A fleet of individual satellites, each equipped with GPUs, orbiting independently. This leverages SpaceX's existing mass-production capability and could be relatively quick to deploy. The unsolved limitation is bandwidth: today's commercial inter-satellite optical links deliver on the order of 1 to 100 Gbps over thousands of kilometres, which is orders of magnitude short of what tightly coupled ML training clusters require. [Google's Project Suncatcher](https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/) proposes packing satellites into tight clusters (kilometre-scale or sub-kilometre-scale separations rather than thousands of kilometres) and using optical links similar to terrestrial fibre technology. At short distances, the physics of free-space optics improves somewhat, and Suncatcher suggests bandwidths on the order of 1–2 Tbps per transceiver pair may be achievable. This is an interesting idea, but it shifts the challenge to maintaining dense satellite formations with precise pointing and tracking.

  * **Modular station model (Starcloud)**. A central spine structure with docking ports, to which compute modules (roughly 40 MW each) are launched and physically attached, connected to a large solar array. This sidesteps the bandwidth problem entirely, since modules are physically connected. However, it is further from what existing manufacturing and launch capabilities can deliver so this is a longer term vision, and introduces engineering challenges around structural integrity at scale. We found Starcloud's published cost estimates to be overly optimistic compared to our assessment, though it’s possible Starcloud has one or more clever engineering tricks in mind while we did not try hard to optimize beyond today’s space hardware. The concept may also become more feasible after continued investment in space-based infrastructure.




The implications of the bandwidth constraint depends on whether ODCs are being used for training, or inference:

  * **Inference is a natural fit for orbital compute.** Modestly equipped satellites could serve inference workloads where each request is independent. Latency from LEO to the ground is also modest at a few milliseconds.

  * **Training looks harder.** Frontier runs synchronize gradients across thousands of GPUs at every step, demanding sustained bandwidth between nodes that dwarfs current inter-satellite links. Even Suncatcher's proposed 1–2 Tbps, if achieved, would need to connect enough satellites to match the bisection bandwidth of a terrestrial cluster. The modular station model avoids this by physically connecting modules, but at the cost of in-space assembly no one has yet attempted.




### Radiation

[](/research/will-we-really-put-data-centers-in-space#radiation "Link to heading")

Radiation is substantially higher in orbit. Which causes two distinct problems: cumulative damage that permanently degrades chips over time, and transient bit flips that can corrupt data in memory.32

## 

At the altitudes relevant to the first orbital data centers (around 500-600 km), both effects appear manageable based on the limited testing data available, though relatively little research exists. We don’t include any loss of compute efficiency due to errors or chip loss due to radiation damage in our model.

  * **Cumulative damage appears to be well within chip tolerances.** Google tested their Trillium TPU and found no hard faults up to 15 [krad](https://en.wikipedia.org/wiki/Rad_\(radiation_unit\)), roughly 20 times the expected 5-year shielded dose at 550 km.33

## 

Shielding is cheap relative to what it protects.34

## 

  * **Transient bit flips are more nuanced.** Standard error-correcting codes handle virtually all single-bit errors, with uncorrectable errors estimated at roughly 0.01 to 0.1 per GPU per year.35

## 

For inference workloads, this seems likely to be negligible: model weights are read-only, can be periodically reloaded, and neural networks are inherently noise-tolerant. For training, the picture is somewhat murkier. Corrupted gradients might propagate through the model, and a single undetected multi-bit error during a long training run might in principle corrupt a checkpoint. On the other hand, no single node holds the full state during a distributed training run, which provides some natural resilience and errors could later be ironed out over the training run. Also, this may be simple to solve with error correcting codes. Overall, we don’t expect this to be a problem.

  * **Error correcting codes can scale to ensure reliability, at the cost of redundancy.** Standard [SECDED codes](https://people.eecs.berkeley.edu/~kubitron/courses/cs252/handouts/papers/hsiao70.pdf) add ~12.5% storage overhead and negligible compute cost, while stronger chipkill-class or symbol-based codes increase overhead by tens of percent to tolerate multi-bit or device-level failures. It seems likely that reliability can be ensured at low cost; but there is as yet little data, and we aren’t too confident.




### Congestion in Orbit

[](/research/will-we-really-put-data-centers-in-space#congestion-in-orbit "Link to heading")

Operating at scale in low Earth orbit introduces several related risks around debris, collisions, and crowding. Currently these issues are manageable, but they’ll grow with the scale of ODC deployment.

  * **Debris and micrometeors pose a modest threat.** Starlink's empirical record shows zero confirmed failures due to debris strikes across roughly 27,000 satellite-years of cumulative exposure.36

## 

SpaceX performs over [300,000](https://fcc.report/IBFS/SAT-LOA-20200526-00055/2378669.pdf) autonomous collision avoidance manoeuvres per year fleet-wide (around 35–40 per satellite per year), a capability directly transferable to space data center modules. And per-satellite risk doesn’t grow with the overall scale of ODCs; so we think this isn’t a meaningful issue.

  * **Orbital crowding is a more systemic concern.** [SpaceX's FCC filing](https://www.fcc.gov/document/fcc-approves-next-gen-satellite-constellation) proposes up to one million satellites, roughly 50 times the current total number of satellites across all orbits — concentrated in sun-synchronous orbit, one of the most debris ridden orbital regions.37

## 

Today's debris tracking infrastructure and traffic coordination experience suggest this could be feasible. However, past collisions and anti-satellite tests have produced debris fields lasting decades38

## 

, and adding satellites at this scale raises the risk of Kessler syndrome, a runaway cascade of collisions that could render orbital bands unusable. We don’t think this is likely to be a major blocker to placing a meaningful fraction of AI compute in orbit, but it will require more effortful and sophisticated traffic management and eventually cleanup tech (see ‘[Space Debris and Launch Denial](https://www.forethought.org/research/space-debris-and-launch-denial)’.)




### Supply chain immaturity

[](/research/will-we-really-put-data-centers-in-space#supply-chain-immaturity "Link to heading")

No mass-production line for space-rated data center hardware exists today, and building one would take time and investment. SpaceX has demonstrated that space hardware can be manufactured at volume: Starlink launched roughly 2,500 satellites in 2025, and much of the production infrastructure (clean rooms, testing facilities, automated assembly) could in principle be adapted. Some commentators describe the path from here to orbital data centers as straightforward, essentially a matter of fitting more compute onto existing satellite platforms.

We think this understates the challenge. Communication satellites and compute-dense data center modules have different engineering requirements: higher heat loads requiring new thermal integration, power distribution architectures serving dense GPU arrays rather than modest communication payloads, and compute packaging at densities that have not yet been attempted in space. On the other hand, we’ve argued that viable launch-costs are at least 2-3 years away, and at least 3-5 years from reaching scale. Given those lead times, and the several companies facing massive economic incentives to solve these challenges, we think building out the ODC component supply chain is unlikely to be a major bottleneck.

## Non-cost factors

[](/research/will-we-really-put-data-centers-in-space#non-cost-factors "Link to heading")

The case for orbital data centers rests on accepting one of two distinct claims: that terrestrial buildout may eventually hit limiting constraints (land, permitting, grid capacity, water, community opposition), or that space may offer flatly superior unit economics once launch costs fall far enough. Both could be true simultaneously. In scenarios where the economics are roughly competitive rather than clearly favouring one side, several non-cost factors could tip the balance.

First, there is a straightforward strategic case for SpaceX in particular to invest in orbital data centers even at an initial loss: once Starship achieves full reusability, SpaceX will likely enjoy a multi-year window as the world's sole low-cost heavy-lift provider, and locking in the orbital data center market during that window — proving the architecture, building the supply chain, securing orbital slots — would create a structural moat that could persist long after competitors develop comparable vehicles.

### Regulation and permitting

[](/research/will-we-really-put-data-centers-in-space#regulation-and-permitting "Link to heading")

As discussed, one key factor will be the speed at which new data centers can be built and launched, versus constructed on Earth. Permitting and regulation play a large role here. If the regulatory environment and build times on Earth look roughly like they do today, space may soon be the _fastest_ place to build, whether or not it’s cheaper.

  * **Traditional data centers face several regulatory and supply constraints but none are currently binding.** On the terrestrial side, several frictions can slow deployment. Grid interconnection queues stretch to 5 years in many US regions. The most promising workaround appears to be on-site microgrids (solar, battery, and gas turbine systems that sidestep the grid queue entirely), combined with prefabricated modular construction.39

## 

This approach can compress lead times significantly, as xAI demonstrated by bringing its Memphis facility online in 122 days.40

## 

Community opposition has also become a factor, with one industry tracker estimating over $98 billion in US projects blocked or delayed by local resistance as of mid-2025.41

## 

In our cost comparison, we benchmark against this off-grid microgrid strategy as the most competitive terrestrial alternative, using one case with solar+gas, and another solar+battery storage for continued scaling in case gas turbine bottlenecks bite. Altogether, permitting and regulatory constraints don’t currently seem binding, but they are increasingly becoming a headache.

  * Orbital data centers could scale fast, but only if the regulatory regime looks as favorable in a few years as it does today. Orbital data centers sidestep terrestrial permitting entirely. The advantage of building satellites seems to be that you only have to deal with one regulatory regime once, and then you can launch satellites continuously on that basis; whereas every single terrestrial AI data center must be shepherded through many layers of regulatory approval. However: current FAA site approvals cap Starship at 145 launches per year This is well below what meaningful orbital buildout would require, amounting to perhaps ~0.5 GW/yr launched.42

## 

But we think it’s more likely than not that this doesn’t block ODC buildout, especially because the current US administration is actively favourable to commercial space. Two recent executive orders, [Enabling Competition in the Commercial Space Industry](https://www.whitehouse.gov/presidential-actions/2025/08/enabling-competition-in-the-commercial-space-industry/) (August 2025) and [Ensuring American Space Superiority](https://www.whitehouse.gov/presidential-actions/2025/12/ensuring-american-space-superiority/) (December 2025), direct agencies to eliminate or expedite environmental reviews for launch licensing and to bolster the commercial space industry. Orbital deployment runs through a small number of federal agencies (FAA and FCC) moving to reduce friction, while terrestrial buildout must navigate a patchwork of local authorities. Of course, regulatory environments change. If the economic or strategic value of terrestrial data centers become politically salient, permitting could be expedited, or waived-permitting zones could be set up. On the other hand, even if the current FAA launch cap is lifted, raising by the order of 100x needed to compete with terrestrial data center buildout could spark new political opposition. And although the current US administration is sympathetic to space industry, a new admin and hence new FCC chair and FAA head may be more inclined to scrutinise SpaceX’s requested ODC waivers.




### Physical and cyber security

[](/research/will-we-really-put-data-centers-in-space#physical-and-cyber-security "Link to heading")

Another key consideration is physical and cyber security, especially as AI technologies become more strategically valuable. Orbital data centers would effectively eliminate physical access and insider threats, but they would become unusually easy to observe and destroy with anti-satellite weapons. As such, we conclude that orbital data centers would be substantially harder to exfiltrate data from, but easier to destroy.

For AI model weights, where theft is the primary concern, orbital hosting offers a genuinely stronger posture. For critical infrastructure where availability matters most, fragility against space weapons is a bigger liability.

  * **ODCs eliminate several of the cyber attack vectors, but may still be vulnerable.** [RAND's framework](https://www.rand.org/pubs/research_reports/RRA2849-1.html) for securing model weights identifies attack vectors for model security, with insider threats and physical access among the hardest to mitigate. No existing facility achieves the highest tier (SL-5, robust against top-priority nation-state operations), and the SL-5 Task Force estimates it would take at least five years and substantial government support to reach. ODCs remove the physical access and insider threat categories almost entirely, i.e. no humans on site, no USB ports, no maintenance visits. The ground segment remains the weak link however. Uplink stations, mission control, and the pre-launch supply chain are all vulnerable to the same cyber and supply chain attacks that threaten terrestrial facilities. The [2022 Viasat hack](https://en.wikipedia.org/wiki/Viasat_hack), which disabled thousands of modems across Europe via a single ground-segment exploit, illustrates how ODCs would not eliminate the threat of cyber attacks.43

## 

  * Jamming can limit communication with the ground, but there are defenses. Russia deployed battlefield jammers against Starlink in Ukraine in 2022, but SpaceX responded with software updates for hopping frequencies, largely neutralising the disruption. Iran's more sophisticated 2026 campaign combined GPS spoofing and multi-band RF jamming (using [Iran's Cobra-V8 electronic warfare system](https://defencesecurityasia.com/en/iran-starlink-shutdown-electronic-warfare-satellite-internet/), comparable to Russia's Krasukha-4), driving packet loss above 80%. SpaceX again adapted, reducing loss to around 10% in some areas, but this time they did not fully restore service.44

## 

  * **The implications of kinetic strikes are severe.** Presently, Anti-satellite weapon (ASAT) costs (tens of millions each) exceed satellite replacement costs (low millions each), and each intercept generates debris threatening the attacker's own assets (and international uproar). However, a sufficiently reckless actor (or an actor with little to lose in terms of space assets) could threaten to release debris in an orbital shell, taking out many data centers at once. This possibility argues for stronger international norms against kinetic ASAT weapons, which the US has endorsed via a [2022 moratorium](https://www.armscontrol.org/act/2022-05/news/us-commits-asat-ban) on direct-ascent testing, but arms control negotiations around ASAT weapons have been mostly gridlocked in recent years.45

## 

  * **EMP and nuclear ASAT weapons are possible, but drastic.** A nuclear detonation in orbit might disable or destroy a number of satellites or even degrade an entire shell via artificial radiation belts. But this would also affect every nation's satellites indiscriminately, risk all-out Kessler syndrome, clearly violate the Outer Space Treaty, and likely trigger forceful retaliation. It is the orbital equivalent of salting the earth.

  * **Close-range means of disabling satellites avoid debris but would require significant investment to scale to disable whole constellations.** Both [China, the U.S., and Russia](https://swfound.org/publications-and-reports/2025-global-counterspace-capabilities-report) are developing co-orbital vehicles capable of approaching satellites for inspection or close-range destruction, and the [DIA assesses](https://aerospace.csis.org/wp-content/uploads/2019/03/20190101_ChallengestoSecurityinSpace_DIA.pdf) that China is actively pursuing directed energy weapons for counterspace applications, including high-powered microwave systems that could disable electronics without generating debris. The [offense-defense balance](https://direct.mit.edu/isec/article/49/4/71/130815/The-U-S-China-Military-Balance-in-Space) at the constellation level appears to favour the defender, since each engagement requires dedicated orbital manoeuvring while the defender launches replacements in batches, but the margin depends on the attacker's willingness to invest in dedicated counter-space capability at scale. As for co-orbital exfiltration: ODC satellites can be designed with no docking ports, no external data interfaces, and no removable storage, we think, making physical data extraction fairly infeasible.

  * **The pre-launch supply chain and ground-side connections remain a vulnerability but may be easier to secure than Earth-based data centers.** Satellites must be assembled and integrated on Earth, exposing them to insider and supply chain threats that RAND's [SL-5 framework](https://www.rand.org/pubs/research_reports/RRA2849-1.html) is designed to address. A possible mitigation could be to launch satellites "empty" and train in space or upload weights via encrypted link after reaching orbit, then ensure the operational model never requires weights to be downlinked.46

## 




## Conclusions

[](/research/will-we-really-put-data-centers-in-space#conclusions "Link to heading")

Orbital data centers look more viable than we expected going in and the case rests primarily on launch cost. The engineering challenges seem significant but none appear intractable. Commercial off-the-shelf solar, passive radiators, and standard error-correcting codes seem sufficient for a baseline architecture. We expect limited demos and shipments of compute to orbit in the coming years but our best estimate is that orbital data centers are unlikely to represent a meaningful share of compute before 2030. They might scale quickly thereafter however, and are more likely to be bottlenecked by chip production rates rather than by launch cadence. A generally important dynamic is that terrestrial data centers likely face headwinds that worsen as compute scales up while orbital data centers face constraints that relax with scale.

Factor| Terrestrial Data Centers| Orbital Data Centers| Favors  
---|---|---|---  
**Cost per GW**|  Lower today| Higher today; lower with Starship and investment| **Earth today; Space later**  
**Frontier training**|  Well suited| Potentially bandwidth-constrained| **Earth**  
**Inference**|  Well suited| Well suited| **Neutral**  
**Cooling**|  Mature but costly| Immature, likely modestly cheaper at scale| **Neutral**  
**Reliability / maintenance**|  Repairable and well understood| No practical servicing; true failure rates uncertain| **Earth**  
**Permitting / local opposition**|  A sizable and likely growing burden with scale| Currently very favorable; opposition may grow with orbital congestion| **Space**  
**Land use**|  Fairly small footprint| Minimal terrestrial footprint| **Space**  
**Carbon / local environmental burden**|  Can be low in principle, but likely depends on gas-backed buildout| Favorable vs gas-backed terrestrial buildout| **Space**  
**Security from exfiltration**|  Hard; insider and physical-access problem| Stronger| **Space**  
**Security from destruction**|  More robust| More vulnerable to counterspace attack| **Earth**  
**Long-run scaling**|  Earth-bound constraints tighten with scale| Can scale nine orders of magnitude higher than Earth ceiling| **Space**  
  
All in all we think a transition to space-based compute is credible and could happen soon but almost surely not before the decade is out. There are a few key uncertainties which we expect to get answers for within the next few years. **What would need to be true for ODCs to become a substantial fraction of total compute?**

  * **Starship would need to achieve rapid reusability,** and probably hit launch costs at or below $100/kg

  * **The FAA would need to approve increases in annual launches,** likely requiring new launch sites. The current 145-launch ceiling for Starship would need to increase at least 35-fold, plausible under the current administration's posture, but substantial.

  * **Chip failure for ODCs would need to be comparable to Earth-based data centers.** Early ground testing is encouraging, and we account for ~9% per year compute bleed in our cost breakdowns, finding space competitive at low launch cost despite this steep penalty. NVIDIA's [Space-1](http://nvidianews.nvidia.com/news/space-computing) chip and subsequent generations may bring improvements; however, true failure rates in orbit are unknown and could be much worse than we estimate.

  * **A space-based architecture with high-bandwidth interconnects for frontier training is demonstrated, or inference demand alone justifies the investment.** Without high bandwidth interconnects, orbital compute may be limited to inference and loosely coupled workloads, which could be a large hit to the value proposition of ODCs.




_Thanks to Margot Stakenborg, Anders Sandberg, Tom Davidson, Max Dalton, Stefan Torges, Linchuan Zhang, Gregory Lewis, Charity Weeden, Madeleine Chang, Jackson Wagner and many other reviewers for helpful comments and discussion._

_If you notice an error in our analysis or an important missed consideration we’d love to correct it. Please contact[avi@forethought.org](mailto:avi@forethought.org) with any suggestions or leave a public comment._

## Appendix A: Radiation environment

[](/research/will-we-really-put-data-centers-in-space#appendix-a-radiation-environment "Link to heading")

Two effects matter. Total ionising dose (TID) causes cumulative charge buildup in transistor oxide layers, leading to threshold voltage shifts, increased leakage current, and eventual device failure. This is largely irreversible. Single event upsets (SEUs) flip bits in memory and registers but leave hardware physically undamaged, and are correctable via error-correcting codes or rewrite.

Altitude is the dominant variable. Trapped proton flux drops roughly 10× per ~300 km altitude decrease in the low Earth orbit range, where you're on the lower flank of the inner Van Allen belt (which peaks around 3,000–4,000 km). The choice of orbital altitude is critical.

TID reference numbers at different altitudes, assuming 10 mm aluminium shielding:

  * ~150 rad(Si) per year at 550 km sun-synchronous orbit (Google Suncatcher reference case), giving a 5-year mission dose of ~750 rad(Si).

  * ~1–2 krad per year at 800 km, substantially worse.

  * ~50 rad per year at 400 km (ISS-like), more benign.




The limited chip testing data we have suggests comfortable margins at 550 km. Google's Trillium TPU showed first high-bandwidth memory irregularities at 2 krad (2.7× the 5-year shielded dose at 550 km) but no hard faults up to 15 krad (20× margin), tested via 67 MeV proton beam irradiation. NASA tested NVIDIA GPUs at 6 krad with no permanent failures. The key vulnerability appears to be high-bandwidth memory, not the logic/compute die itself. Modern sub-7nm CMOS has actually improved in TID tolerance because thinner gate oxides trap less charge. That said, these are small-sample tests on specific chips, and orbital data centers would deploy hardware at much larger scale than has been radiation-tested.

At 800–1,000 km, the picture looks much less favourable: you'd likely hit degradation thresholds within 1–2 years even with shielding. But shielding is relatively cheap compared to the compute it protects: roughly $100,000 in launch cost (at $250/kg) for a 20 mm shell around the satellite bus, versus ~$9,000,000 for the chips inside.

SEU rates appear manageable, but data is limited. An H100-class GPU in low Earth orbit would see roughly hundreds of raw bit flips per day in high-bandwidth memory. Standard single-error-correcting, double-error-detecting codes handle virtually all single-bit errors. The estimated uncorrectable (double-bit in the same code word) rate is ~0.01–0.1 per year per GPU. Google measured roughly 1 uncorrectable error per 10 million inferences on their TPU, which is operationally negligible. These numbers come from a small number of tests and could look different at fleet scale.

## Appendix B: Degradation and system wear

[](/research/will-we-really-put-data-centers-in-space#appendix-b-degradation-and-system-wear "Link to heading")

**Solar cell degradation**

Solar cell degradation depends on which cells you use, and we think commercial crystalline silicon cells are the right choice. Traditional space missions use radiation-hardened triple-junction GaInP/GaAs/Ge cells, which are extremely durable but expensive (roughly $50–100/W). Starlink instead uses commercial off-the-shelf silicon cells similar to terrestrial panels, at a fraction of the cost (roughly $0.20–0.50/W). These degrade faster under radiation, but the cost difference is enormous.

For orbital data centers, we think the Starlink approach is correct. Chip depreciation (new chips deliver 5–10× performance per watt every few years) sets an effective lifespan of roughly 5 years on any given module. Put simply, paying a large premium for solar cells that last 15–20 years doesn't make sense when the rest of the hardware is being replaced on a 5-year cycle.

  * **Triple-junction space-rated cells** degrade very slowly. On-orbit data from the Gaofen-3 satellite shows roughly 0.18% per year power loss, or about 1.4% total over 8 years. These cells are designed for 15+ year missions.

  * Commercial silicon cells degrade significantly faster. Our model uses 8% per year compound degradation, consistent with [Lupo et al. (2025)](https://www.mdpi.com/2076-3417/15/16/9208), who report 10–15% Si cell degradation in the first 6 months at ~500 km for CubeSats with minimal coverglass (annualizing into a multi-year compound average near our assumed rate). This gives an end-of-life power fraction of 65.9% after 5 years ((1−0.08)⁵ = 0.659). The array is oversized by 1/0.659 = 1.517× at beginning of life to guarantee rated power at end of life, with the excess energy in early years captured in the LCOE calculation.

  * The cost savings are roughly two orders of magnitude per watt, which at scale substantially affects the economics.




In principle, the array oversize could be reduced by co-optimizing against chip bleed: since a fraction of GPUs fail each year, end-of-life power demand is lower than beginning-of-life, and the solar array only needs to cover surviving chips at time _t_ rather than the original total. We haven't modelled this interaction however it could offer modest savings.

**Other forms of wear**

  * Attitude control is the biggest mechanical reliability risk in typical spacecraft, contributing roughly 20% of all failures. Reaction wheels are the most common failure point due to continuous motor wear, though this is typically on longer timescales (Hubble's lasted roughly 15 years; commercial wheels are rated for 15+ years). Space data center modules would have simpler pointing requirements than a telescope, so this is likely no novel challenge over a 5-year lifecycle.

  * Batteries face extreme cycling in low Earth orbit (roughly 16 charge/discharge cycles per day, roughly 30,000 over 5 years), but if orbital data centers operate in near-continuous sunlight (sun-synchronous orbit), battery cycling demands drop dramatically.

  * Starlink uses argon [Hall thrusters](https://en.wikipedia.org/wiki/Hall-effect_thruster) rated for their 5-year mission life. It seems similar systems could be adopted for space data center modules with comparable reliability profiles.




## Appendix C: Space weather

[](/research/will-we-really-put-data-centers-in-space#appendix-c-space-weather "Link to heading")

Space weather represents a tail risk. A handful of satellites (out of roughly 15,000) have been damaged or lost to space weather over the last 40 years, mostly in geostationary orbit, which is far more exposed than low Earth orbit.

Three main effects arrive in sequence after a solar event:

  * **Electromagnetic radiation** (X-rays/UV) arrives in roughly 8 minutes and can disrupt sensors.

  * **Solar energetic particles** (protons) arrive in roughly 1 hour and cause intense bursts of single event upsets and accelerated cumulative radiation damage.

  * **The coronal mass ejection** plasma cloud arrives in 18 hours to days and heats the upper atmosphere, increasing drag on low Earth orbit spacecraft.




The most concrete threat to orbital data centers is atmospheric drag from thermosphere expansion after a coronal mass ejection. In February 2022, a moderate geomagnetic storm caused 38 of 49 newly-launched Starlink satellites to reenter and burn up. Critically, these were at a vulnerable 210 km staging altitude, not their operational 550 km. At operational altitude the drag increase was manageable with active station-keeping.

A severe storm (e.g. a Carrington-class event, estimated recurrence every 150–500 years) could cause several simultaneous problems: a burst of single event upsets potentially overwhelming error correction temporarily, accelerated solar cell degradation, and significant drag increases. In the case of such an event global satellite networks and orbital data centers could power down and orient edge-on in their direction of motion to minimize drag but it is unclear how devastating versus endurable this would be.

## Appendix D: Solar cost crossover

[](/research/will-we-really-put-data-centers-in-space#appendix-d-solar-cost-crossover "Link to heading")

### Space side: two solar scenarios

[](/research/will-we-really-put-data-centers-in-space#space-side-two-solar-scenarios "Link to heading")

We model two space solar configurations, both using commercial off-the-shelf silicon cells (the Starlink approach, not traditional radiation-hardened triple-junction cells). We use 20% cell efficiency (AM0), 1,361 W/m² solar constant, 95% capacity factor (for dawn-dusk SSO), with 8% per year compound degradation over a 5-year design life.

**Oversize factor:** To deliver 1 kW continuous at end of life, the array must compensate for both capacity factor and degradation:

  * EOL fraction = (1−0.08)⁵ = 0.6591, oversize = 1/0.6591 = 1.517,

  * BOL peak power per kW-continuous = 1,597 W.




**S1: Starlink V3-class (91 W/kg derated).** Back-calculated from Starlink V3 specifications (50,400 W from 554 kg array, 257 m² area). System derating 0.721 (empirical, includes packing efficiency, wiring, temperature, MPPT). Hardware cost: $0.75/W derated (commercial Si + 1.5× NewSpace qual premium). Mass per kW-continuous: 17.56 kg. Hardware cost per kW-continuous: $1,198.

**S2: Optimised stripped Si (189 W/kg derated).** Component-level build: 0.85 kg/m² cell assembly + 40% structure overhead = 1.19 kg/m² total. System derating 0.828 (better packing on flat substrate). Hardware cost: $0.471/W derated. Mass per kW-continuous: 8.43 kg. Hardware cost per kW-continuous: $752.47

## 

### Earth side: two baselines

[](/research/will-we-really-put-data-centers-in-space#earth-side-two-baselines "Link to heading")

Similarly, we model two off-grid terrestrial solar setups, calculating the cost to deliver 1 kW continuously as in the space case. We do not add an oversize factor for the Earth case beyond what is needed to overcome the reduced CF and don’t account for solar cell degradation which is less severe than in space, but this somewhat disadvantages space solar.

**Baseline A (100% renewable off-grid, $20,307/kW-continuous):** Solar at 28% CF, $1.10/W installed, 4,643 W nameplate per kW-continuous ($5,107). Battery storage 80 kWh at $175/kWh ($14,000 or 69% of total). Other $1,200. 5-year LCOE: $463/MWh. Battery storage dominates because 99.9%+ uptime without fossil backup requires multi-day autonomy.

**Baseline B (bullish solar + gas turbine, $5,590/kW-continuous):** Solar at 32% CF, $0.85/W, 3,500 W nameplate ($2,975). BESS 12h at $125/kWh ($1,500). Gas turbine at $562/kW (EIA 2023 actual, simple-cycle; xAI Colossus uses Solar Turbines Titan 350) with 10% utilization and $153 fuel/O&M. Other $400. 5-year LCOE: $128/MWh.

### Sensitivity to battery cost

[](/research/will-we-really-put-data-centers-in-space#sensitivity-to-battery-cost "Link to heading")

Battery cost is the largest lever on Baseline A (69% of cost). If we allow for cost reductions to $50/kWh batteries (well below any 2025 projection), crossovers remain above $519/kg (S1) and $1,133/kg (S2). The space advantage is robust because the 95% CF advantage is structural.

Baseline B is less sensitive to battery cost since it leans on gas backup in cases of poor weather (storage is only 27% of total). In general, if building off grid to avoid grid interconnect wait times a reliable backup energy source can give large savings and should be the default for builders. We include Baseline A however, since backlogs for turbines versus the abundance of solar and battery available suggest that it may be the fastest way to quickly scale energy production on Earth.

## Appendix E: Thermal management

[](/research/will-we-really-put-data-centers-in-space#appendix-e-thermal-management "Link to heading")

In vacuum, heat can only leave a surface via radiation. The Stefan-Boltzmann law gives the total power radiated per unit area from a surface at temperature T

P=εσT4P = \varepsilon \sigma T^4P=εσT4

A radiator panel in orbit radiates from both sides, but also absorbs energy from three sources: direct sunlight, reflected sunlight (albedo) from Earth, and thermal infrared from Earth. The net power rejected per square meter is:

Pnet=2εσT4−αS−αFalbedo(Al⋅S)−εFIRTearth4P_{net} = 2\varepsilon\sigma T^4 - \alpha S - \alpha F_{albedo}(Al \cdot S) - \varepsilon F_{IR} T_{earth}^4Pnet​=2εσT4−αS−αFalbedo​(Al⋅S)−εFIR​Tearth4​

Where ε = 0.92, α = 0.09 (AZ-93 white paint), _S_ = 1,366 W/m², _Al_ =0.3, and _T earth_ = 253 K. Then given a two-sided radiator at a worst case altitude of 550km, _F IR_ = 0.50, _F albedo_ = 0.25.

| Conservative| Mid / Bull  
---|---|---  
Material| 1.5 mm CF composite| 1.0 mm CF honeycomb  
Panel areal mass| 2.40 kg/m²| 1.60 kg/m²  
System areal mass (incl. plumbing)| 3.60 kg/m²| 2.40 kg/m²  
Operating temperature| 25°C| 45°C  
Net rejection| 585 W/m²| 830 W/m²  
**System W/kg**| **~163**| **~346**  
  
## Appendix F: Environmental footprint

[](/research/will-we-really-put-data-centers-in-space#appendix-f-environmental-footprint "Link to heading")

The environmental comparison between orbital and terrestrial data centers is often billed as favoring space unanimously, but the picture we found is a bit messier. Here we note some points of comparison.

  * **Land use favours space, though orbital slots are a somewhat finite resource too.** A solar-powered 100 GW terrestrial buildout would require roughly 5,000 to 10,000 km² of land, primarily for generation rather than the data centers themselves.48

## 

The same capacity in orbit implies a many-fold increase over today's active population of more than 11,000 satellites. Our guess is that such an increase in the satellite population would be sustainable with some concessions, like by placing satellites in (slightly more expensive) higher orbits to keep congestion manageable.49

## 

  * **Water consumption is often cited as an advantage for orbital data centers but AI water usage seems relatively minimal.** Space is somewhat advantaged with near zero water use. However, even if current data center capacity were scaled 100x in the US, it would likely still account for a relatively small fraction of total US water consumption. Claims about the environmental harms of data centers specifically relating to water use seem somewhat overblown (both in absolute terms, and compared to other environmental harms, like carbon emissions).50

## 

  * **Carbon emissions favour ODCs over grid-powered terrestrial data centers, but not over renewable-powered data centers.** The marginal carbon emitted by building and replacing an orbital constellation is roughly 20 to 45 times lower than the yearly operational emissions of a gas-grid data centre, but only around 2 to 5 times less carbon-intensive compared to off-grid solar with partial gas backup.51

## 

A fully renewable terrestrial facility would be cleaner still. In fact, for much of the undeveloped desert land where terrestrial solar farms would ideally be sited, the panels could even be a net environmental positive, since shade structures in arid environments increase total biomass and can help reverse desertification.

  * **Stratospheric soot from rockets is negligible at current launch rates but may later become meaningful** at the thousands of Starship-class launches required to build a 100 GW constellation, with full replacement every five years.52

## 

It’s worth noting that Starship is powered by methane and oxygen, which (although not as clean-burning as hydrogen and oxygen) produces less soot than most historical chemical rockets.

  * **Satellite reentry pollution could pose a novel risk, if proven dangerous.** Current mega-constellation plans consisting of thousands of satellites would deposit many tonnes of aluminium oxide per year in the stratosphere when deorbiting at the end of their life-cycle. Orbital data centers at scale, e.g. 100 GW imply 30 to 70 times that level, potentially with cascading effects on ozone, mesospheric temperatures, or polar vortex dynamics, according to a growing body of research (see [here](https://www.southampton.ac.uk/news/2024/05/environmental-impact-of-deorbited-satellites.page) and [here](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024JD042442)).53

## 

If this threat proves credible, it may be necessary to maneuver decommissioned satellites into a graveyard orbit, either by towing them, or requiring them to boost themselves into the graveyard orbit. Towing has been demonstrated, but not at scale; while de-orbiting boosts would increase the propulsion requirements for the whole mission, especially from higher altitudes.




### Footnotes

[](/research/will-we-really-put-data-centers-in-space#footnote-label "Link to heading")




## Citations
