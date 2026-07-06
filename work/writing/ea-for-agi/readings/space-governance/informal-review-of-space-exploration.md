---
title: "An Informal Review of Space Exploration"
author: "kbog"
date: 2020-01-31
url: https://forum.effectivealtruism.org/posts/xxcroGWRieSQjCw2N/an-informal-review-of-space-exploration
fetched: 2026-07-06
via: forum-graphql
topic: "space-governance"
note: "Skeptical informal review weighing space exploration's value from an EA lens."
---

In this post I take a serious and critical look at the value of space travel. Overall, I find that the value of space exploration is dubious at this time, and it is not worth supporting as a cause area, though Effective Altruists may still want to pay attention to the issue. I also produce specific recommendations for how space organizations can rebalance their operations to have a better impact.

Methodology
===========

One conceptual flaw that I avoid here is talking about every space program in terms of how useful it can be for other space programs. Saying “going to the Moon is a great way to help us learn how to go to Mars” is not a real justification for space travel, because we haven’t even established that it’s important to learn how to go to Mars in the first place. Another conceptual flaw that I avoid here is counting ISRU as a benefit or goal, when in reality it’s merely a strategy to potentially make space travel less expensive. The constant enthusiasm for stepping stones and ISRU in space discourse creates a scaffold of spurious dreams which can collapse if you question a key component or the bigger picture.

Instead, I specifically look for ways that a space program might be genuinely beneficial in its own right. First I point out some general pros and cons which apply to many or all kinds of space development. Then I look at specific space projects to see which will be genuinely beneficial in their own right. Finally, I work backwards from those ultimate priorities in order to see what the intermediate exploration and technology requirements are.

General impacts of space development
====================================

Impacts on existential risk
---------------------------

### Natural space risks

A major motivation for space programs is resiliency and defense against asteroid impact, but the probability of a catastrophic or existential asteroid impact in relevant timeframes is tiny. Impacts with a “low global effect” or larger only happen an average of once every 70,000 years, and impacts with either “high global” or “extinction-class” effects only happen an average of once every 6 million years ([NASA 2014](https://oig.nasa.gov/audits/reports/FY14/IG-14-030.pdf)). Asteroid survey systems have benefits exceeding costs ([NASA 2017](https://cneos.jpl.nasa.gov/doc/2017_neo_sdt_final_e-version.pdf)) but the residual risk after evacuations are done is simply negligible compared to the risks and benefits of other policy issues, and insufficient for justifying the development of major space infrastructure. By comparison, a nuclear war has an expected frequency of happening [once every 85 years](https://forum.effectivealtruism.org/posts/PAYa6on5gJKwAywrF/how-likely-is-a-nuclear-exchange-between-the-us-and-russia-1). If a nuclear war has a 5% chance of ending human civilization, that’s an extinction frequency of once every 420 years. With such a disparity in frequency, even a slight loss of Earth’s resilience, wealth and peacefulness (due to fiscal or other downsides of space travel, for instance) would be more dangerous than a gaping vulnerability towards asteroid impacts.

Also, even extreme asteroid impacts on Earth can probably be survived more easily than the chronic problems in most other space environments.

There are other possible causes of extinction coming from space, such as growing solar luminosity ([Wikipedia](https://en.wikipedia.org/wiki/Future_of_Earth#Solar_evolution)) and near-Earth supernovae, so it’s true in a banal sense that humanity can’t literally stay on Earth forever. However, these problems are so infrequent or predictably distant that it doesn’t make sense to really worry about solving them now. Spending more money on regular science and spending more money on simply growing the human economy and society both seem more impactful for reducing long-run natural space risks, and even that seems less cost-effective than just about anything we can do to deliberately reduce anthropogenic existential risks. We could easily just forget about space for 200 years, which is just a blip on the timescale of cosmic risk, and subsequently use fusion and antimatter technology, AGI, full genetic engineering, replicator robots, and a host of other technologies to embark on a much easier program of interstellar colonization than anything that is feasible in the near future.

### Alien or AI risk

It is extremely difficult to see how space colonies in the Solar System could be protected from a misaligned, dominating smarter-than-human AI system which is capable of controlling the entire Earth. In fact, if space colonies grow our economy and technology, they will increase the chance that a malignant superintelligence is developed somewhere – but this is no different from the consequences of growing the economy and technology on Earth.

Alien invasion is probably very unlikely. And if aliens are capable of reaching Earth, they most likely have more advanced technology than anything we have in a period of mere interplanetary travel. Any large alien interstellar spacecraft would possess a potent weapon in the form of its propulsion system, per the [Kzinti Lesson](http://www.projectrho.com/public_html/rocket/spacegunexotic.php#propulsion).

Planetary defense could matter if the invaders are relatively weak and our Solar System civilization is relatively strong. However, space colonies don’t necessarily do anything to provide for this. Any settlements outside Earth would probably be less defensible due to their general smallness and fragility. What matters is simply the development of a strong economic capacity and powerful space weapons.

Meanwhile, an interstellar civilization would not be foolproof against invading superintelligence, but would still be more resilient than a single-star civilization thanks to the long travel time allowing an opportunity for some kind of response (e.g. jump-starting friendly superintelligence). It would also have the additional resources, technology and redundancy required to survive alien invasions, and to even subdue and conquer them. There is a moral question of whether we should generally want our descendants to prevail in an interstellar war, but insofar as aliens are likely to be more different from us in a variety of ways compared to our descendants, they are also likely to have values which are more distant from our own and therefore worse.

### Plague risk

Space colonies would be fairly well insulated from civilization-destroying pathogens, most likely created with biotechnology. An interplanetary civilization would likely have biorisks on its colonies, not just on the home planet, but the redundancy could allow the civilization to survive the loss of one world to rampant infection.

This is not foolproof. If we terraform another planet to be very Earthlike, there would be a substantial chance of the plague spreading on the many fast spacecraft which would no doubt be traveling quickly between the two planets, just as the plague could be spreading on aircraft. Of course, space travel is slower and less frequent than aircraft, so there is more opportunity for symptoms to present before any landings are made.

Also, increasing the number of planets also increases the potential for plagues to be generated in the first place.

Let’s use a crude model of epidemiology: each of _n_ planets (or planet-like space habitats) has an independent probability _g_ of generating a plague; once started, a plague has a probability _s_ of spreading to each other planet before a perfect quarantine goes up. Plagues don’t spread between secondarily infected planets. With this model, the systemwide existential risk _x_ given _n_ planets can be characterized by the equation:

[https://i.imgur.com/aRm4jKs.png](https://i.imgur.com/aRm4jKs.png)

I assume _g_ = 0.1 for a single planet; all results scale in proportion with this figure so it doesn’t matter for our conclusions here. I include 21 possibilities for _s_, evenly distributed from 0 to 1. I also aggregate over _s_ with four probability distributions discretized over the 21 values: a uniform distribution, a normal distribution with a mean of 0.5 and a standard deviation of 0.18, and two beta distributions representing my own expectations for two categories of plagues.

First, for _pathogens_, I estimate alpha = 3 and beta = 2, which is a moderately right-skewed distribution with a peak less than 1. My reasoning for this is that low values of _s_ are generally dubious for pathogens because a planet-killing bug is necessarily going to be very transmissible and difficult to detect, whereas _s_ should decline near 1 because interplanetary travel is fundamentally slower and more difficult than intraplanetary travel and because there is always an extra chance that the pathogen cannot survive the environments in and enroute to other planets.

Second, for _replicators_, I estimate alpha = 1 and beta = 4, which is a fairly left-skewed distribution with a peak at 0. My reasoning for this is that destructive replicators (e.g. “grey goo”) are likely to be more visible and lack the kind of incubation period that the worst pathogens display, and may destroy spacecraft before they reach interplanetary destinations.

[https://i.imgur.com/RzAWCkb.png](https://i.imgur.com/RzAWCkb.png)

[The results can be found here](https://1drv.ms/x/s!At2KcPiXB5rkyWCBP71tW234HtVN?e=j77pjg). It turns out that a second planet may well increase the existential risk from plagues. Additional planets after that have better risk/safety tradeoffs, but net risk can still increase for high values of _s_.

So extra planets/colonies can be a danger in the sense that they add additional ecological, economic and technological productivity similar to Earth, which might be a source of pathogens. Our model assumed that each additional planet is identical. But if we instead imagine that such productivity merely gets divided among an unknown number of planets, and have the probability of a plague generating on a given planet be inversely proportional to the number of colonized planets, then extra planets robustly reduce risk.

[https://i.imgur.com/6CYmy13.png](https://i.imgur.com/6CYmy13.png)

Colonization might add even more safety than this if it is a project which soaks up so much money and resources for itself that the general social capacity to produce plagues declines. However this seems unlikely. If major space colonization is actually done, it’s fair to presume that it will produce some general economic and social returns, even if it’s not ultimately competitive with Earth-focused investment. So the reality will probably be somewhere in between these two results.

Looking between the beta distribution results for both scenarios, it does appear that interplanetary colonization will reduce the overall existential risk from plagues. However, there are a number of practical complexities which worsen the picture.

First, if surviving colonies are incapable of independently growing or of recovering a good planet, then they count for little as a protection against existential risk. They will stagnate and will probably succumb to another threat, and will fail to achieve the vast potential value of an expansive advanced civilization. Rather, surviving colonies would have to be capable of performing one of two things: (a) sustaining themselves at a high and growing level of technological and economic development comparable to Earth’s potential, thus preserving humanity’s capacity to make major discoveries, indefinitely protect the home planet, spread to other stars/galaxies, or whatever else can contribute to the prospects for an extremely valuable future, or (b) fixing Earth’s plague and providing enough people, knowledge and equipment to resettle it effectively. (a) might be satisfied by a terraformed planet or Moon, or by an extensive network of very large space habitats. (b) might be done with a smaller set of self-sustaining space habitats, perhaps with just a few tens of thousands of people. (We can imagine extreme cases where very small numbers of people discover a cure and resettle Earth, but this is unrealistic: if billions of people and all the best medical facilities on Earth cannot discover a cure before the plague wipes them all out, there is little chance that one humble medical research space station with a few staff will do so before it itself succumbs to one of the dangers in its own systems or the space environment.)

Second, if humanity builds colonies which are economically and technologically productive but not capable of surviving on their own, then they will add a little extra danger as a potential source of plagues which still cannot survive alone in the event of a systemwide plague.

Third, this discussion has ignored the possibility of deliberate omnicidal terrorism. In practice, there don’t seem to have been any humans in history who dedicated significant resources towards bringing about human extinction through destructive means. So this seems like a rather far-fetched idea, very divorced from how and why terrorism is conducted in the real world. But in the off-chance that such omnicidal terrorists do come into existence and have significant resources in the future, they may be modeled as plagues with very high (potentially 100%) transmissibility, as infectants are deliberately sent to each planet. The risk from them is more likely to grow as interplanetary colonization adds planets and people, though this could be counterbalanced by the fact that small terrorist organizations may find it increasingly difficult to coordinate infections of larger numbers of space colonies.

Finally, my model is simplistic: in reality, plagues may spread from planets which received secondary infections. This reduces the prospects for surviving a plague. So my model underestimates the danger of adding a third and subsequent planets.

So it’s hard to say whether interplanetary colonization will increase or decrease the existential risk from plagues. I would say that it does seem helpful, but there isn’t a strong case for this. Therefore, plague risk on its own gives scant justification for interplanetary colonization. However, it does give us a reason to believe that interplanetary growth is more benign than growth on Earth. Scientific, economic and (in particular) biotechnological progress on Earth has a minor downside in terms of being a possible source of devastating pathogens and replicators. Growth in a multiplanet civilization poses less of this existential risk by comparison. So if we are choosing between space investment and Earth investment, and both are economically productive but the Earth investment has a slightly higher rate of return, then the space investment should be preferred. Or if we have to decide between raising 10 children on Earth or raising 9 children on a new extraterrestrial colony, we should select the latter – assuming the plague risk is sufficiently high. In practice this effect seems very small in magnitude.

Interstellar colonization would do more to minimize risk, because the travel time would be long enough that plagues would definitely be noticed before spreading. Plague incubation periods of decades of even centuries would still be shorter than interstellar travel times, so the only plausible plague existential risk in this case is omnicidal terrorism.

### Nuclear war and climate change

Nuclear blasts cannot destroy Earth; rather, the nuclear winter and fallout from a large nuclear exchange are possibly capable of collapsing human civilization. However, such a wounded Earth would still be far more habitable than any known space environment. The radiation from fallout on Earth will presumably be less bad than space radiation, which is present nearly everywhere in the Solar System. And nuclear fallout will diminish; major isotopes have half-lives ranging [from days to thirty years](https://www.epa.gov/radtown/radioactive-fallout-nuclear-weapons-testing). Nuclear winter will be far less severe than the kind of extreme cold and heat which is present in space and will also substantially diminish within years or decades.

And nuclear war would not end a variety of other factors which make Earth more habitable than many other bodies: the right amount of gravity, the right day/night cycle, surface water, a breathable atmosphere, fertile soil (though fallout in the soil would be a temporary problem in some areas), natural ecosystems which provide food and other resources, and the widest variety of accessible resources.

Some believe that catastrophic climate change (a specific set of unlikely, worst-case scenarios for how climate change might unfold) could similarly collapse human civilization. But it is completely certain that unmitigated climate change would not make Earth as uninhabitable as any other planet, for the same reasons that nuclear war wouldn’t.

Even if climate change and nuclear war occurred at the same time, the overall picture would remain similar. Nuclear winter and global warming could even cancel each other out.

So in any scenario where human civilization cannot survive on Earth due to nuclear war or climate change, we also won’t be able to survive in space. Maintaining an advanced civilization in space – whether due to better equipment or the ability to terraform – presupposes a social and/or technological capacity to survive such Earthly catastrophes.

### Black ball risks

There is always a chance that some currently unknown problem will doom Earth but not other planets, or will doom our Solar System but not other ones. The probability of such an event is nearly impossible to estimate rigorously. It provides a weak reason to favor large self-sustaining space colonies.

### Learning how to survive on Earth

One could argue that going to space will specifically teach us how to survive adverse conditions, and thus make us more resilient against things like nuclear war and climate change on Earth.

However, the usefulness of space technology to surviving these problems on Earth is dubious. The environments are totally different, and the weight, cost and pollution requirements for materials and equipment are also very different. Also, only a portion of space expenditures will go towards technology for adapting to life in harsh environments (compared to other things like rockets, astronaut training, etc).

Anti-radiation technology may help people deal with fallout on Earth, although fallout shelters can easily be built with earth or lead. Electrostatic shielding for spaceships would probably be too complex and energy-intensive to be useful in most anti-radiation applications Earth, but could be good for some vehicles. Hydrogen-rich materials like RXF1 are good in space due to their light weight, but on Earth they pose more of a bulk problem. Drugs and genetic engineering could be quite useful.

Terraforming techniques might help deal with climate change, but realistic terraforming plans are so far away and take so long that they will not come fast enough to address Earth’s current pollution-induced global warming problem (which is not a major existential risk anyway). A hypothetical severe future climate change crisis might be aided by some space abilities and terraforming knowledge.

R&D for clean energy, infrastructure, transportation, agriculture, and defense will probably be more useful for ensuring that adverse conditions on Earth can be avoided or endured.

Overall, this is a sound but weak reason to support general expenditures on space exploration.

### Summary

Crewed space exploration in the short and medium run, short of large self-sustaining colonies, would not appreciably reduce existential risk.

Interplanetary colonization has little prospect of reducing our existential risk. It might reduce plague risk and black ball risk, but these are highly uncertain ideas. Learning how to colonize the Solar System might provide some techniques to help us survive on Earth, but this is dubious.

It does seem to be the case that growing our population and economy into large self-sustaining colonies in the Solar System is potentially less dangerous than growing our population and economy based wholly on Earth, assuming equal amounts of growth. So while colonization is not a good strategy for reducing risk, it may be considered prudent to grow humanity in space rather than concentrating too much urbanization, business and technology on Earth.

Meanwhile, interstellar travel would more robustly reduce existential risk from all sources.

Straightforward costs and benefits
----------------------------------

### R&D spinoffs to grow the economy

Space research can provide generally valuable technologies for improving the economy. However, this is true of other government science and technology initiatives, both civilian and military, and many private ventures. Space R&D is probably not as practically useful as R&D which is directly targeted at solving current problems. And if some kind of R&D can truly pay for itself via private sector spinoff, then it will be developed by the private sector anyway, as long as intellectual property rights are somewhat restrictive (and they usually are). Private sector R&D is already subsidized by the American government, albeit probably not enough. Generally increasing R&D does seem good, but this is a relatively weak reason to support expenditures on space exploration.

### New and different societies

Extraterrestrial colonies could provide improved quality of life and general resilience due to the theoretical opportunity for greater experimentation in government, economic system, and laws outside of Earth’s sovereign territory. However, in practice, extraterrestrial colonies will likely be driven by large national or corporate efforts, requiring huge capital expenditures, making them poorly suited for independent seastead-type experiments; in all likelihood they would end up with a more restrictive kind of governance and society specifically oriented towards surviving in the difficult space conditions or paying off their debtors. Autonomy and reform initiatives would be much better off pushing for changes and independence in weakly-governed areas on Earth.

Space settlement would likely create a separation between a particularly ambitious, meritorious space elite and the more ordinary population left on Earth. Concentrated communities of intelligent people can be highly productive, but Earth’s productivity could suffer from the brain drain. Also, inequality and social problems might arise from the stratification.

Historically, it does seem to be the case that the European colonies which became the United States produced a different society with better ideas that positively impacted Europe. However, most colonization in human history has not been like this.

Overall, this only provides a weak reason in favor of space travel.

### Space tourism

Some people would enjoy space tourism, but it would just be a fun activity for a very small minority of the population. It might even be harmful, by convincing rich people to spend more money on something instead of philanthropy and business investment. This is not a significant benefit.

### Crewed space science

Scientific exploration of space often has dubious practical value to humanity. Insofar as we should pursue it, it’s best to use robots. They are clearly more cost-effective for this purpose than humans, which is why astronomical scientists lobby for robotic rather than crewed missions. And robotic technology is likely to improve over the coming decades, further reducing the scientific rationale for crewed science missions.

Crewed space missions might incidentally perform some scientific work, including scientific tasks which are difficult or impossible for robots. However, this seems to be a very minor benefit. $5 billion of robotic missions would probably teach us more about the Solar System than $100 billion of astronaut programs.

Also, crewed missions are full of Earthly microbes which can contaminate space bodies, possibly reducing our potential scientific knowledge.

One of the few potentially sensible ideas for crewed science missions is [building a large radio telescope on the far side of the Moon](https://www.forbes.com/sites/startswithabang/2018/10/25/why-dont-we-put-a-space-telescope-on-the-moon/#178b40b5777f). This might be very useful for checking the general history of the universe, as well as possible extraterrestrial transmissions (though one might doubt whether such contact would actually be a good thing). Setting up and maintaining such a telescope may be a good task for astronauts.

[Here](https://physicstoday.scitation.org/doi/10.1063/1.2435647) is a debate on the viability of lunar telescopes.

However, robotic deployment aided by relay satellites may be adequate here. It seems to depend on the type and scale of the project.

### Rocket emissions

Rocket engines emit water vapor, but according to the [UN’s 2018 ozone assessment (p. 461)](https://www.esrl.noaa.gov/csd/assessments/ozone/2018/downloads/2018OzoneAssessment.pdf), citing [Larson et al (2017)](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016EF000399), this does not significantly disturb the climate. This means that hydrogen-fueled rockets like Delta IV and Ariane 5/6 are not problematic. The same paper found that reentry vehicles can produce NOx, but the impact on the climate from that is similarly small unless they are used in great numbers, in which case the benefits could be correspondingly great.

Kerosene-fueled rockets such as Falcon 9 produce carbon dioxide. A Falcon 9 medium lift rocket carries [29.6 tonnes](https://www.huffpost.com/entry/how-much-fuel-does-it-take-to-get-to-the-moon_b_598a35b5e4b030f0e267c83d) of kerosene, thus emitting up to 17.8 tonnes of CO2. At a social cost of carbon of $150/tonne, this represents $2,700 of damages. Compared to the $50M launch price of a reused Falcon 9, this is negligible. However, they also emit black carbon (BC) particulates which can affect the climate ([Ross and Sheaffer 2014](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013EF000160)). Solid rocket motors (used in many launch systems) and hypergolic rockets (such as Soyuz-2) also emit some BC, but significantly less than kerosene rockets. Solid rocket motors additionally emit alumina particulates.

However, these particulates do not necessarily warm the planet; in fact they might actually cool it down, though the impacts will vary from region to region. The consequences of these particulates are poorly understood, and are more akin to that of a minor haphazard geoengineering experiment than ordinary pollution. While they could easily warrant additional study and oversight (imagine the outrage if someone decided to deliberately release geoengineering particulates without proper study and oversight), they don’t provide a reason to broadly oppose launches, and perhaps not even a reason to prefer hydrogen-fueled rockets over kerosene-fueled ones.

If we look at the full space operational cycle, there will certainly be greater impacts from the energy and resources used to construct, move and fuel space vehicles on Earth. However, this could be similar to the full lifecycle pollution and resource depletion from any other physical things people and governments spend money on, so it doesn’t pose a general reason to defund space programs.

### Animal and AI welfare

Wild animal suffering and AI suffering could be spread in the infrastructure of an expanding civilization ([Tomasik 2018](https://reducing-suffering.org/will-space-colonization-multiply-wild-animal-suffering/)). However, it’s unclear whether the net welfare of these beings will be positive or negative, just as it’s currently unclear whether wildlife currently experience net happiness or net suffering. This would a very important issue if we understood it better, but for now there’s no rigorous way to factor it into our planning.

### Summary

Space programs can provide R&D spinoffs. Space colonies could also provide people with more cultural and social options. But these or other comparable benefits can be obtained indirectly from programs to improve Earth anyway.

“Dark Skies”
------------

Space programs bring about more hierarchical political organization and more dangerous technologies, argues [Daniel Deudney](http://wgresearch.org/an-interview-with-daniel-h-deudney/) in a forthcoming book. The idea seems plausible but we will need to see the book to make a strong judgment.

Specific space plans
====================

Earth orbital development
-------------------------

### Satellites

A variety of communications and science satellites are beneficial. Extra satellites to study Earth’s climate, the environment, agriculture, enemy militaries, and other things can be very important, and is often easily justified in basic economic and scientific terms. One major opportunity is SpaceX’s Starlink constellation, which could provide good internet access to developing regions and rural areas all over the world.

Orbital mirrors to light up parts of the Earth are a difficult but feasible concept ([DW](https://www.dw.com/en/chinas-artificial-moon-the-numbers-just-dont-add-up/a-46016916)). Such plans seem likely to be overly constrained by aesthetic and environmental worries.

Space-based solar power (SBSP) could be economical if launch costs fall considerably ([Summerer and Ongaro 2005](http://www.esa.int/gsp/ACT/doc/POW/ACT-RPR-NRG-2005-RASTS-SPS_for_21st_Century_Energy_Systems.pdf)). Launch costs have fallen somewhat since 2005, but so has the price of clean ground-based power. SBSP could benefit military operations ([National Space Society](https://space.nss.org/media/Space-Based-Solar-Power-Opportunity-for-Strategic-Security-assessment.pdf)).

SBSP could be considered inferior to lifting solar panels with aerostats, which would at least solve cloud and haze problems though not night problems, while theoretically being cheaper. However, in practice it could require very large amounts of space and would present major practical engineering challenges of avoiding tether fouling and drift.

### Manufacturing

[Some kinds of manufacturing can benefit from a microgravity environment](https://www.space.com/40552-space-based-manufacturing-just-getting-started.html). Another, more speculative opportunity is [hypergravity manufacturing](https://selenianboondocks.com/2016/04/new-ideas-for-utilizing-space-for-business-hypergravity-for-isotopic-enrichment/). Of course the downside is the greater cost of ascent and descent. But LEO is still close compared to most space environments, is reasonably protected from radiation, and allows for aerobraking for cheap reentry.

In theory, manufacturing may turn into a politically and technology dangerous mega-project, but it could easily be distributed and benign.

Overall, manufacturing looks like it will become a worthwhile endeavor in the medium term future.

### Isolation of biotech and nanotech

One could use space labs as an isolated area to perform research and manufacturing with risky biotech and nanotech processes. The location would help ensure that accidents and outbreaks don’t endanger the planet.

However, space-based labs are less self-sustaining and more difficult to support from outside, so if an internal accident endangers the crew, they will have a greater need to perform a risky exit which would breach the quarantine.

Also, transporting biorisks and nanorisks from Earth to orbit involves a high risk of release from accidents. The safest launch system so far, Soyuz-FG, has failed once in 70 launches (though the crew vehicle landed safely). Meanwhile, [aircraft accidents are extremely rare](http://planecrashinfo.com/rates.htm), with a passenger death risk of just 1 in 8 million per flight. Differential improvements in launch technology will close this gap, but maybe not by many orders of magnitude. Of course, if dangerous things are built in space in the first place, this doesn’t matter.

Finally, space labs are expensive. One might build a ground-based lab and save a small fortune off launch costs, then use that money to make the ground-based lab similar or better in terms of safety features.

Overall, there is some potential value in this idea, but it’s not well substantiated.

Moon and asteroid mining
------------------------

### Metals

There are many useful metals on the Moon, but it doesn’t appear to be profitable to exploit them in the near future. The current profitability of asteroid mining is similarly poor. A recent venture, Planetary Resources, doesn’t seem to have gone anywhere substantial. (Many of these projects are funded by wealthy idealistic individuals who are willing to invest in space projects with dubious profitability.)

We shouldn’t expect prices for metals to strongly grow in the short-term future. Technology for mining, recycling and substituting rare resources on Earth is always improving. However, this can change. After a few decades from now, between growing resource demand and improving technology for space travel, there is a chance that metal mining will become economically viable.

Such mining projects would likely be R&D intensive with modest beneficial spinoffs. They might help avoid the ground and water pollution of Earth-based mining. So it seems worthwhile to promote space mining before it is just as profitable as other equally-risky ventures. However, it still seems bad to push space mining ventures whose expected revenues don’t meet their expected costs.

Such initiatives might turn into politically and technologically dangerous mega-projects, but that seems rather unlikely. Mining operations could easily remain moderately small private initiatives, and very powerful technology is not needed.

### Helium-3

Mining Helium-3 on the Moon for fusion energy is not a realistic proposal ([The Space Review](http://www.thespacereview.com/article/2834/1)). Fusion energy itself is a good idea and the median expectation for it to arrive is 2043 ([Metaculus](https://www.metaculus.com/questions/363/will-a-fusion-based-electrical-generation-facility-generation-100-mw-or-more-using-only-fusion-as-an-energy-source-come-into-service-by-2030/)), but other kinds of fusion reactions without helium-3 would be fine for powering Earth, and an energy company has [patented](https://patentimages.storage.googleapis.com/5e/46/72/7d67c970e32841/WO2015163970A2.pdf) a process for sustainably producing helium-3 on Earth as a byproduct of deuterium-deuterium fusion power.

Villages
--------

I use village to mean a small space settlement which is not self-sustaining in the long run, requiring advanced technology to survive the harsh environment and relying on trade/subsidies from Earth for any kind of significant expansion or repairs, where the purpose is to provide people with a high standard of living by utilizing space resources.

This could include residential space stations in Low Earth Orbit, small bases on the Moon or Mars, or airship colonies on Venus, assuming that there is not a breakthrough in technology that allows such small things to obtain a complete functioning industrial base.

None of these are remotely economically viable right now. For this to change, the shortage of terrestrial resources would have to outweigh the difficulties of space travel and survival. Of course, a terrestrial resource shortage might in turn make it more difficult to build and launch lots of space equipment, but it will probably still be worthwhile.

It’s easy to identify a few materials that may run out on Earth within a few decades, such as antimony (used for flame retardation, electric materials, industry), indium (touch screens), zinc (metal alloys, industry) and helium (medical and industrial processes). But we may have adequate substitutes on Earth. And any given space location will have a much greater list of shortages. Trade between multiple space locations can be quite easy compared to escaping Earth’s gravity well, but even a network of villages will have major supply requirements from Earth in the medium term, especially because doing things in the harsh environment of space requires more advanced technology than doing them on Earth. And any normal person would prefer to forego a few elements of modern industry rather than live in space. The space environment generally presents major problems of radiation, low gravity, extreme temperatures, and isolation. Some other unique problems include irritating space dust on the Moon, corrosive air on Venus, and toxic perchlorates in Martian soil.

Maybe space villages will become economically viable compared to Earth settlement in the latter half of the 21st century, but they will also have to compete with dedicated mining operations. It seems much easier to simply send resources from space to the people on Earth, rather than sending many people up to space to make use of those resources. Resources on Earth can be used more efficiently due to our vast economies of scale, complementary goods, and efficient markets. While space village development would be R&D intensive, this benefit is not large enough to justify the costs.

At some point, this may change, when Earth is heavily depleted. In that case, space villages will also have to compete with more serious space mega-projects to create livable environments, such as terraforming and habitat engineering. Living on a planet while it is being terraformed is very difficult due to extreme weather events and geological changes, and being on a planet while it is disassembled is generally considered detrimental to long-term physical health. Space villages could easily be harmful in such a context: they would create a set of stubborn local residents who would refuse to allow governments and companies to push them out. The status quo and stakeholder biases in current governance against things like urban upzoning and eminent domain seizures would be likely to continue in the future, worsening the prospects for very impactful mega-projects.

Space villages could nonetheless dot other areas of the extraterrestrial landscape (like LEO) in the midst of a general space economy; they would be a natural part of a major spacefaring civilization. However, they are not a major objective worth planning well in advance.

Note that if Deudney’s arguments are correct, then it may be right to focus on decentralized space villages as an indefinite approach to space colonization, rather than pursuing any megaprojects. Still, it may be inevitable that such settlements and their associated R&D will eventually pave the way for megaprojects.

A few people will simply want to live in space even if there is no economic need. If so, space villages will be beneficial to them, but they will be a luxury good akin to mansions and space tourism, not worthy of support.

Space habitats
--------------

We could deliberately construct large space habitats, such as O’Neill cylinders, or paraterraforming housings on other planets and moons.

Similar considerations apply here as with space villages, but there are some differences. First, the size and upfront capital costs will be much greater, making them a megaproject that entails more political and technological risk. Second, much larger numbers of people can be supported at a lower per-capita cost. Third, they can sustain themselves with a fuller internal environment that provides a nicer quality of life, more economic independence and greater resilience to systemic failure. Thus, they might be able to survive the plague and black ball risks which can threaten Earth.

At some point far in the future, these are likely to become worthwhile.

Terraforming
------------

Terraformed planets/moons could support a large additional population making use of local resources – assuming that humanity becomes resource-constrained with a growing population in the far future.

### Moon

The Moon has no magnetosphere, no atmosphere, low gravity (0.17g), two-week days and nights with temperature extremes, troublesome moon dust, and a lack of carbon, hydrogen and nitrogen. The first step to [terraforming the Moon](https://slate.com/technology/2014/07/terraforming-the-moon-it-would-be-a-lot-like-florida.html) would be smashing ~100 Halley-sized comets into the body at an angle to speed up its rotation. This should create an atmosphere and oceans with moderated temperature, but there would still be little nitrogen. Also, gravity would still be low. Genetic engineering might help with some of these issues, but it could be very difficult to develop good organisms for the new environment. A variety of minerals and elements needed by human industry may be missing. Moon dust would still have to be addressed. Also, the location would be somewhat isolated compared to anything on Earth.

Overall, gathering 100 comets, steering them into the Moon correctly, and building up mass industry and habitation on the Moon seems like a plan that requires more energy and difficulty than extracting and transporting lunar minerals straight to Earth or to habitats in LEO. Stripping lunar resources is also something that can be done on an as-needed basis, rather than in one huge program. Taking lunar resources for Earth use would also allow them to be used far more productively with our existing economies of scale and complementary goods. And in the long run, we will ultimately be better off turning lunar material into O’Neill cylinders, which can be closer to Earth, be spun at 1g, be tailored more precisely, be built one at a time, make much more efficient use of mass, have less of a gravity well interfering with space travel, and have less of a radiation problem.

So lunar terraforming does not appear economically worthwhile, in addition to being a politically and technologically risky mega-project.

### Venus

In terraforming Venus, its extreme pressure and temperature must be reduced, and oxygen must be introduced. There are a number of potential ways to achieve this: see [Wikipedia](https://en.wikipedia.org/wiki/Terraforming_of_Venus) and [Isaac Arthur video](https://www.youtube.com/watch?v=mtTLj0E9ODc). The resulting planet would have much better gravity and more volatile resources.

Terraforming Venus may be worthwhile at some point. Isaac Arthur believes it’s the only body where terraforming could be sensible. However, there would still be political and technological risks associated with such a planetary mega-project.

### Mars

Radiation is a major problem for humans and other organisms on Mars. A six-month exposure of mice to radiation similar to that on the Martian surface caused permanent cognitive dysfunction and PTSD-like symptoms ([Acharya et al 2019](https://www.eneuro.org/content/6/4/ENEURO.0094-19.2019)); other consequences could be cancer and birth defects. It may be solvable with widespread genetic engineering. Alternatively, a thick atmosphere on Mars could solve it.

Humans may not be able to reproduce and survive effectively in Martian low gravity (0.38g). Potential problems include bone density loss and [eyesight impairment](https://en.wikipedia.org/wiki/Visual_impairment_due_to_intracranial_pressure). Humans could solve this by building centrifugal cities, though these would be mildly energy intensive, difficult to build, and potentially difficult to board/deboard. Instead, it might be solved with genetic engineering and other medical technology, but we don’t know if this is possible. Animals would presumably be similarly harmed by low gravity; this may be solvable with special breeding or genetic engineering.

Another difficult hurdle for settling Mars is that perchlorates must be removed from the soil in order to grow food. There is a known process for doing this, but it would be difficult.

Solar irradiance on Mars is [moderately less intense than that on Earth](https://space.stackexchange.com/questions/20137/how-does-the-efficacy-of-solar-cells-on-mars-compare-with-earth). This hurts both solar panels and outdoor plants.

One terraforming idea is to [find carbon dioxide on Mars and release it into the atmosphere](https://sci-hub.tw/10.1038/s41550-018-0529-6). It would be relatively straightforward to vaporize the ice caps, but this would only provide an inadequate 15mbar of atmospheric pressure. Extensive heating of carbonate minerals would add from 12mbar to, extremely optimistically speaking, 150mbar. Then one could process and heat the entire planet’s surface to a depth of >100m to release up to 40mbar of CO2. Merely directing heat at the surface (e.g. with large mirrors) would be inadequate due to the depth of conduction required. Extremely optimistically speaking, these efforts would add up to 200mbar, which is equivalent to Earth’s air at an altitude of over 11km, which is totally unsuitable for life. More realistically, we might get around 20mbar of pressure. However, [some scientists believe](http://nautil.us/issue/65/in-plain-sight/so-can-we-terraform-mars-or-not) that the actual quantity of CO2 in the soil might be significantly greater than the previous estimates. If there is lots of CO2, it could theoretically be released to produce enough atmosphere to block radiation, pressurize the surface, warm the planet and support cyanobacteria. Alternatively, CO2 from many comets and moons might be brought into the planet. However, such a CO2-rich atmosphere would be intolerable to animal and human life, including damaging human cognition, even if adequate oxygen is present.

We could use other kinds of volatiles from comets and moons for the bulk of the atmosphere, with space mirrors or flourine compound gases for heating, but most other volatiles (ammonia, methane) would not last in the Martian atmosphere. We would need to gather about [10,000](https://www.youtube.com/watch?v=FshtPsOTCP4) large comets for their nitrogen.

And regardless of the atmosphere, Mars’s low gravity, perchlorates, and isolation would remain.

Overall, if we can expend enough effort to dig down and heat the entire planet’s surface to 100m depth, or to mine and gather volatiles from across the Solar System and crash them into Mars, we might instead simply mine any useful resources and send them back to Earth. Alternatively, we might construct a number of O’Neill cylinders. Not only are these ideas more practical in their own right, but they reduce the political and technological risks associated with doing one huge planetary mega-project. So terraforming the planet looks like a clearly poor idea.

### Titan

Titan is covered in decently useful volatiles, but its crust is made of ice. If it were warmed to a favorable temperature (it could theoretically be done with lots of greenhouse gases and/or mirrors) then it would be covered in an ocean, which would be so deep that it likely couldn’t support a vibrant ecosystem. It would also have very low gravity (0.14g).

So terraforming Titan does not look worthwhile in direct economic terms, in addition to being a politically and technologically risky mega-project. In theory it could provide insurance against plague and black-ball threats to Earth, but given the difficulties of accessing resources beneath the ocean (even on a low-gravity world), this is dubious.

Interstellar settlement
-----------------------

Interstellar distances are large enough that mining for the purpose of shipping materials or any finished goods to Earth will be implausible for a long time. However, the potential population expansion from interstellar colonization is very large, and it could kick off exponential growth to other stars. In theory, some exoplanets could support even more population and economy than Earth. Realistically speaking, an exoplanet would probably have less capacity than Earth, but still enough for a very large population.

However, terraforming or other space mega-engineering around other stars with conventional technology would be unrealistic given the distance from Earth. Colonists would have to survive in the system for decades or centuries while a terraforming project takes place, while somehow gathering planetary-scale resources. So interstellar colonists will probably have to start by finding a readily habitable exoplanet. Unfortunately, from what we know of exoplanets, [few have much chance of being readily habitable](https://www.getguesstimate.com/models/13483).

The nearest exoplanet is Proxima Centauri b at 4.2 light years, but there is only a 57% chance that Proxima Centauri b is a rocky planet. (More optimistic claims come from falsely equivocating its observed minimum mass with its expected actual mass and/or falsely assuming that all terrestrial-regime planets have fully rocky composition.) And it likely lacks a significant atmosphere due to strong stellar winds and ionizing radiation ([Garcia-Sage et al 2017](https://iopscience.iop.org/article/10.3847/2041-8213/aa7eca/pdf), [Airapetian et al 2017](https://iopscience.iop.org/article/10.3847/2041-8213/836/1/L3/pdf), [Dong et al 2017](https://iopscience.iop.org/article/10.3847/2041-8213/aa6438/pdf)), forces which also ruin its prospects for having a habitable moon. Conditional upon the planet being rocky with a significant atmosphere, there is a significant though seemingly <50% chance that it is habitable with shallow surface water ([Turbet et al 2016](http://www.ice.csic.es/personal/iribas/Proxima_b/pdf/Proxima_habitability_II.pdf), [Meadows et al 2016](https://arxiv.org/ftp/arxiv/papers/1608/1608.08620.pdf)).

Because Proxima Centauri b probably isn’t habitable, the first productive interstellar voyage would most likely have to cross at least 11 light years to where the next nearest exoplanets in habitable zones are located. And this is still just a lower bound. We don’t have good evidence on how rare readily habitable exoplanets and exomoons might be. Moreover, the Fermi Paradox implies that habitable exoplanets are probably even rarer than what the evidence suggests.

The conventional route to interstellar travel would be a large crewed ship with the minimum size necessary for genetic diversity and stability. A population of 100-200 may normally be required, but bringing frozen genetic material and perhaps new technologies to address intermarriage problems might bring the requirement down to dozens of people. However, larger numbers of people may be much better for ensuring productivity and resilience in the new colony.

The crew and passengers would need life support, including a kind of biosphere for sustainable air, food and water. The few human attempts at biospheres have failed in a matter of years, but this would have to last for centuries. Habitat modules would also have to be spacious and functional enough to preserve comfort and sanity over the entirety of a human lifetime. They would have to essentially be space habitats.

The humans and other organisms would also need to be protected against radiation. Strategic placement of propellant and other spacecraft elements is only a partial solution, so massive shielding is needed if we are using current technology. Electrostatic shielding may be a helpful development in the future but it involves more complexity, power use and risk of failure. Genetic modification and pharmaceutical supplementation may make us resilient against radiation.

Also, they would need to arrive at the destination with adequate scientific and engineering equipment to get started with a growing, self-sustaining colony.

Thus, the payload mass for crewed interstellar colonization would be quite large. This means the engines would have to be very large and lots of fuel and propellant would be required. The only sensible propulsion systems for such a mission are nuclear salt water reactors, fusion rockets, and antimatter rockets. (Bussard ramjets are infeasible and laser propulsion requires too much of an extreme upfront capital cost.)

Still, it would be at least a 2-5 century voyage (for an ~11 light year distance). This means that there would have to be huge advances in the reliability and self-repair capabilities of spacecraft. Robots would have to be used for self-repair because spacewalkers would be exposed to too much radiation, both from space and from the ship’s engines.

There would be a high risk of social failures among the crew – they could decide to turn around, or could get into some kind of mass hysteria, or could get into disputes and kill each other, or something like that. This might be mitigated with AGI management.

There is a potentially easier alternative, though the upfront R&D requirements seem extreme. [Armstrong and Sandberg (2013)](http://www.fhi.ox.ac.uk/wp-content/uploads/intergalactic-spreading.pdf) suggest a plan for fast automated colonization that even works for intergalactic travel. Small probes could create colonizing machinery that would eventually create computers for emulations or grow humans _de novo_.

Overall, it is very plausible that the benefits of an interstellar mission will exceed the costs at some point, presumably more than a century in the future.

However, there would be major political and technological risks associated with such a huge space mega-project.

Summary of priorities
---------------------

Humanity should continue to developing satellites in Earth orbit, and eventually add manufacturing labs to take advantage of the microgravity environment.

It will probably be worthwhile to eventually begin moon and asteroid mining to provide metals for Earth.

Constructing large space colonies in the form of O’Neill cylinders and paraterraformed habitats, terraforming Venus, and colonizing exoplanets may eventually be worthwhile. The desirability of these three proposals depends on the strength of Deudney’s arguments against space mega-projects.

Recommendations for space organizations
=======================================

Now that we have a systematic understanding of intermediate and indirect space development benefits, we can make recommendations for real and potential present-day space initiatives. This graphic shows the logic for how they can assist the five ultimate space goals.

[https://i.imgur.com/Q5hWV0l.png](https://i.imgur.com/Q5hWV0l.png)

Surface-to-orbit systems
------------------------

Reducing launch prices will make satellite launches and orbital manufacturing easier. It may promote broadly positive R&D. On the other hand, reducing launch prices will increase the proliferation of space junk threatening all space programs.

Lowering launch prices will also assist early groundwork for longer-run projects like moon and asteroid mining, space habitats, terraforming Venus, and interstellar colonization.

The benefits can clearly outweigh the costs, and society should expend some effort on reducing launch prices. However, the launch development market already appears somewhat saturated, as these projects are often promoted by governments and idealistic e-billionaires rather than prudent investors. Therefore, neither broad cuts nor broad increases in funding are appropriate.

Note that if Deudney’s concerns about the political and military ramifications of space exploration are correct, then improving orbital access might be a much more dubious or even harmful activity.

### _Chemical rockets_

The development of Ariane 6, New Glenn, SpaceX’s BFR, and other systems is an adequate course for our foreseeable requirements and should continue.

NASA’s expendable SLS system is [expensive and obsolete](https://medium.com/cgo-benchmark/the-space-launch-system-is-an-irredeemable-mistake-8778ddc29176), so it should be cancelled.

Aerospike engines are a potential step forward, but present very large engineering challenges and still seem inferior to airbreathing engines and ground infrastructure launches, so are probably not worth developing.

Metallic hydrogen propulsion would be very useful for lifting payloads to orbit, but is at an extremely speculative stage – stable metallic hydrogen in practical environments may be physically impossible.

### _Airbreathing first stage engines_

A major step forward would be systems with airbreathing first stages. This substantially reduces the amount of weight that needs to be initially lifted, and thereby increases fuel efficiency and payload capacity.

Development should continue for the Skylon spaceplane and related technology. Air launch to orbit systems like LauncherOne and rockoons like Bloostar could also be worthwhile. But again, given the many entrants in the launch market, additional incentives don’t appear important.

### _Crew vehicles_

LEO development could be improved by spaceplanes or other well-controlled vehicles for convenient crew and cargo return. So development should continue for Dream Chaser, Skylon and related technology.

SpaceX’s Starship may also be good, but its Mars mission requirement should be dropped. The design may then become better optimized for Earth orbital applications.

### _Launch assistance infrastructure_

The ultimate way to improve launch capabilities is with better infrastructure. A maglev system like MagLifter or StarTram could replace or shrink the first stage of rockets and is currently technologically feasible. However, it’s unclear if the upfront capital costs would be justified at the likely levels of launch demand. They seem to generally be neglected, so there should be renewed research investigating such concepts to see if they could be worthwhile at a near point in time.

A space elevator, an orbital ring, or a launch system powered by ground-based lasers could launch costs down considerably. However these systems present enormous upfront capital costs, so they are only sensible after large amounts of space development are envisaged, and are not worth pursuing now.

Earth orbit activities
----------------------

### Satellites

Communications and science satellites should continue to be deployed, as long as they do not pose too much of a space junk risk relative to their benefits. Orbital reflector satellites to light up dark regions of the Earth should receive serious consideration. Space-based solar power programs could be worth scrapping if the money can be diverted to other clean energy programs, but they do seem better than spending money on many typical space programs.

### Space stations

Developing space stations will help facilitate orbital manufacturing. The International Space Station and Bigelow Aerospace may be valuable initiatives in this regard.

### Space junk

Space junk increases the risk of Kessler syndrome which would ruin the orbital environment for satellites and microgravity manufacturing. Even without Kessler syndrome, space junk is a significant risk for spacecraft.

Space junk can be cleaned from orbit, and missions can be better managed to prevent it from arising.

Moon missions
-------------

Lunar development is supported by three rationales.

First, building and supplying labs in LEO may be easier if lunar mining is used for materials. The delta-v from the Moon to LEO is 40% less than the delta-V from the Earth to LEO, and launches from the Moon don’t have to get through Earth’s gravity well and atmosphere. So in theory, it would be cheaper to support manufacturing with lunar materials. Asteroid mining would follow a similar logic, with much less delta-V requirement, though the distance is much greater.

There are downsides. Gathering and processing materials on the Moon or asteroids would be more difficult than doing so on Earth, even if Earth faced significant resource shortages. It would also require substantial mining bases for mining and processing materials. Transportation would require either very good cargo spacecraft or a mass driver.

These capital costs could only be justified by a very substantial amount of LEO development. They would also have to compete with the idea of simply improving launch from Earth via the methods discussed above.

Second, lunar bases may lead to metal mining to support Earth.

Third, lunar bases would provide a testing ground for life in space. There is great uncertainty in how humans, animals and integrated biospheres can maintain long-run survival outside of Earth, between the radiation, the low or nonexistent gravity, and psychological and sociological factors. Six-month stints on the ISS are not sufficient to settle these issues. Accurate scientific knowledge of the long-term effects of space habitation on humans could benefit greatly from large numbers of animals and people spending large amounts of time outside LEO and applying various medical technologies. This matters because it could expedite and improve asteroid and moon mining, space habitat construction, and interstellar colonization.

All of these uses are somewhat speculative, and there is no quick need for them. Therefore, lunar bases are not a short-term priority. A modest program could be worthwhile. It would be analogous to the unexciting but successful McMurdo Station and International Space Station, extending a similar concept to the lunar surface. The ‘Moon Village’ initiative is a good way to help with this.

One approach to lunar exploration is NASA’s Artemis program, but it does not include an actual lunar base. It is also needlessly complex and expensive compared to other lunar program possibilities.

In fact, not only is Artemis inefficient compared to other lunar program possibilities, but it seems to be a poor use of money overall. The program is estimated to cost [more than $25 billion for five years](https://www.theverge.com/2019/10/16/20917171/nasa-artemis-program-moon-jose-serrano-jim-bridenstine-budget-2024), which is the time from now through the first landings. If allocated to the military, this could purchase twelve FFG(X) frigates and thirty B-21 bombers, which would provide a modest improvement to important conventional deterrence and warfighting abilities. If spent on clean energy research, it could fund a landmark fusion project comparable to ITER, which might substantively accelerate the green energy transition. If spent on welfare, it could provide $30 of benefits per month for each of the 13 million American children living below the poverty line for the next five years, which would slightly mitigate one of America’s worst social problems. If spent on foreign aid, it could increase USAID programs by 25% for the next five years, which would meaningfully improve our response to global poverty and disease and would probably save hundreds of thousands of lives. And if kept within NASA, Artemis’s funding could be used to nearly double the science budget. All of these alternatives seem like plausible and better uses of additional funds. Therefore Artemis should be unequivocally canceled, unless it can be reformed into a better plan as discussed below.

Another possibility is to use the SpaceX Starship for lunar access, but this is also a poor solution. The Starship is very large, with more accommodation than will be needed for supplying a modest lunar base, and would carry the unnecessary mass of a heat shield and a very strong propulsion system all the way to the lunar surface and back. It also requires methane which is not available on the Moon.

An apparently easy way of establishing a moon base is Robert Zubrin’s “Moon Direct” plan. If it can in fact be executed for something in the ballpark of Zubrin’s estimates, its benefits would seem to exceed the costs. However, Zubrin’s LEV dry mass estimate of 2 tons is too optimistic, though a mildly heavier vehicle might not require major mission changes. Also, his LEV concept is optimized for easy lunar exploration and is too small for the purpose of sustained base support. For medium term lunar presence, it would be better to take Moon Direct but adjust it with a larger LEV. Some of the architecture being currently developed by Blue Origin and other companies may be useful here.

Another option is to augment Zubrin’s architecture with a space tug for the translunar and trans-Earth injections, thereby simplifying the requirements for the LEV design. Development, launch and assembly of such a system would take longer than Moon Direct, but this is fine: there is no rush to colonize the Moon or build a waypoint to Mars. It is more important to lay the groundwork for low-cost, long-term, moderate-volume transportation to and from the lunar surface, perhaps something that only starts in the 2030s. A space organization could run a few Moon Direct type missions to get the base started in the meantime. If used for both crew and cargo, the tug would probably be best with a [LOX-augmented nuclear thermal rocket (LANTR)](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20180008495.pdf), using moon-sourced LH2 and LOX. If the tug is to be used only for cargo, it could instead use VASIMR, or an afterburning fission fragment rocket engine (AFFRE) using lunar hydrogen. However, the cost of development and initial construction may be high. With likely transport volumes, it’s not clear if the cost of developing and operating a tug system will be less than the cost of relying on Zubrin’s simple LH2/LOX chemical LEV. Proper cost estimates should be generated and compared.

Regardless of the specific preferred architecture, serious lunar mission development should wait until BFR and New Armstrong are closer to fruition, so that new plans can be built more sensibly around private sector super-heavy lift capabilities. If these launch systems do not pan out, plans may have to be revised in order to work with Falcon Heavy.

Some robotic studies of the Moon for mining and settlement purposes can also be worthwhile, but it is not a high immediate priority.

Note that if Deudney’s concerns about the ramifications of megaprojects are correct, then starting lunar colonization would be a dubious or even harmful activity.

Asteroid missions
-----------------

Crewed asteroid visit plans should be dropped.

Some robotic studies of asteroids for mining purposes may be worthwhile, but at the moment such missions still seem premature.

Asteroid development can probably be left safely to the private sector, particularly since ambitious and idealistic investors are often willing to support space ventures even when their risks and rewards are not strictly favorable.

Science
-------

### Biospheres

Biosphere facilities can be used to help us figure out how to build space habitats, which may be useful in their own right or as a component of interstellar travel.

However, biospheres can be more useful for [more pressing Earth-relevant science](https://uanews.arizona.edu/story/30-million-gift-positions-ua-biosphere-2). While this makes it particularly good to develop more of these structures and experiments, it also means it would be inappropriate to push for them to be used for fully closed experiments rather than more practical laboratory work. Therefore, we should support biosphere projects, but allow them to be used by scientists for regular Earth-focused research questions rather than space-oriented things.

Note also that if Deudney’s concerns about the ramifications of megaprojects are correct, then biosphere projects that lay the groundwork for exoplanet colonization could be a more dubious or even harmful activity.

### Exoplanets

Learning more about exoplanets will help us plan for interstellar colonization. It could also help us answer big-picture questions about the origin and frequency of life, which can help us set global priorities. This is assuming that Deudney’s arguments against space mega-projects are not very strong. If so, then the following priorities can be substantiated.

The [Thirty Meter Telescope](https://en.wikipedia.org/wiki/Thirty_Meter_Telescope) should be completed, and local citizens should accept the Hawaii Supreme Court’s ruling to allow construction. [WFIRST](https://en.wikipedia.org/wiki/Wide_Field_Infrared_Survey_Telescope) and [PLATO](https://en.wikipedia.org/wiki/PLATO_(spacecraft)) will be useful for exoplanet science and adequate funding should continue.

Any of the proposed Great Observatory successor missions – Lynx, LUVOIR, HabEx, and Origins – would be useful for exoplanet studies, but some might be better than others. Selection should be largely based on choosing the one that provides the most benefit for exoplanet science, with a particular emphasis on characterizing the potential habitability of nearby exoplanets. More ambitiously, funding for two Great Observatory missions might be secured. Or the Terrestrial Planet Finder or Space Interferometry Mission could be revived. Also, the [Solar Gravitational Lens concept](https://www.nasa.gov/directorates/spacetech/niac/2020_Phase_I_Phase_II/Direct_Multipixel_Imaging_and_Spectroscopy_of_an_Exoplanet/) may deserve more development. NASA could divert funding from programs in planetary science, cosmology and manned exploration for this purpose.

Finally, interstellar nanoprobe programs such as Breakthrough Starshot are potentially worthwhile. They can be the subject of more early development work.

The colonial importance of these initiatives is dubious because we will probably get adequate science done anyway before interstellar missions are feasible. Investigating exoplanets now to colonize them sooner may be like doing better lunar astronomy in the early 1800s for the purpose of expediting the Apollo program. However, these projects are quite attractive in pure scientific terms, helping us understand the origins and frequency of life. Such knowledge could help us set global priorities. It’s also relatively cheap: the TMT costs $2 billion, WFIRST costs $4 billion, and HabEx would cost $7 billion.

### Planets

Given that terraforming Venus may be a desirable project, additional study of the planet may be helpful. However, since such a terraforming project should only realistically begin in the late 21st century (or perhaps quite a bit later), science missions now have very dubious utility. It does provide a slight reason to give priority to Venera-D (a NASA collaboration with Roscosmos has been envisaged) and Shukrayaan-1 over other planetary science projects.

As you are no doubt tired of hearing by now, this could be a dubious or even harmful activity if Deudney’s arguments are correct.

Summary
-------

Assuming a basically positive view of human progress into space, the right roadmap for space organizations is to generally maintain efforts to improve surface-to-orbit access and operations in LEO, including addressing space junk, while laying some prudent groundwork for a moon base in the coming decades. In the scientific domain, we should continue solid exoplanet studies, while otherwise focusing more heavily on Earth-related studies (e.g., climate and agriculture science) rather than space science. Increases in funding for space organizations are not warranted; cuts may be desirable depending on the specific programs affected.

To illustrate, I would have [NASA’s 2020 budget](https://drive.google.com/file/d/1oiyo6jhpxYUPVeHLFBwQtr6_6fsCWQPM/view) rebalanced as follows:

· Cancel Orion, SLS and associated ground systems, and Gateway ($5B)

· Cut Advanced Cislunar and Surface Capabilities by two-thirds ($400M)

· Cut Planetary Science by one-sixth, including canceling DART and Psyche, canceling additional New Frontiers missions, slowing down Europa Clipper, reducing Commercial Lunar Payload Services, and reducing Lunar Discovery and Exploration ($450M)

· Cut Astrophysics and Heliophysics by one-twentieth, including canceling IMAP ($100M)

· Increase Earth Science by one-tenth (-$200M)

· Increase funding for addressing space junk (-$50M)

This would reduce the budget from $22.6B to $16.9B. Additional small cuts to overhead and support may be facilitated by the reduced scope of NASA activities. Serious lunar mission development should wait until Starship and New Armstrong are closer to fruition; funding for a lunar missions can then ramp up while probably remaining below the levels envisioned under Artemis.

If Deudney’s arguments are correct, then we probably should cancel our space initiatives across the board, with the exception of beneficial and modest communications and science spacecraft. Launch systems should not grow larger than those necessary to lift the largest ordinary satellites (e.g. Ariane 6 or maybe Falcon Heavy). NASA’s budget could be cut further to around $10B.

Recommendations for Effective Altruists
=======================================

No space programs are effective uses of time and money compared to high-impact causes like economic growth, clean energy, animal welfare, nuclear security, and emerging technology oversight (unless you happen to be working on a satellite that is very important for such things).

Some attention to this space might be warranted for shaping the conversation and priorities of others; conceptual research like that of Anders Sandberg and Daniel Deudney seems important.