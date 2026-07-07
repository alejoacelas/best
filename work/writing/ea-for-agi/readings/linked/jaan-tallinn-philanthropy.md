---
title: "philanthropy"
url: https://jaan.online/philanthropy
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by funder-signals/funding-landscape-observations; Jaan Tallinn on his philanthropy strategy"
---

# philanthropy

##  main focus

my fundamental philanthropic goal is to maintain and improve humanity’s ability to exist and enjoy existing. at present, this necessitates a major effort to reduce [extinction risk from artificial intelligence](https://www.safe.ai/statement-on-ai-risk). therefore, in directing my philanthropy i am currently focussed on the priorities outlined in the box below.

As of July 2024, my top priorities are about reducing [humanity’s risk of destroying itself with AI](https://www.google.com/search?q=ai+extinction+risk) over the next decade or two. I wish more people would "wake up" to this issue, and develop and express more informed opinions about it, since literally everyone under the age of ~60 is personally at risk. If more people demand the right to understand this risk and speak up about it, then we and our children will all stand a better chance of surviving — and hopefully flourishing — with AI technology.

I’ve sorted the priorities into two categories: _restrictive efforts_ to prevent harmful patterns in AI development, and _constructive efforts_ to set positive examples for how AI technologies should be developed and used.

##  Restrictive Efforts

  1. **Datacenter Certifications** : To train or operate AI systems, datacenters large enough to qualify as _high risk_ should be required to obtain safety and security certifications that constrain both training and operation. These requirements should include immutable audit trails and be upheld by international alliances and inspections. Numerical thresholds defining _high risk_ datacenters should likely be reduced over time. Proofs of safety should be required for high risk training runs and deployments, using either formal mathematics or high-confidence fault tree analysis.[more..]

Discussion

**Problem being addressed** :

Powerful AI technologies present risks to humanity both during training and during operation, with the potential to yield [rogue AI](https://yoshuabengio.org/2023/05/22/how-rogue-ais-may-arise/) (Bengio, 2023). During training, scientists could lose control of a system as early as training time if it learns to copy itself, manipulate its operators, or otherwise break out of a datacenter, or if hackers penetrate the datacenter and steal it. During operation (“runtime”), loss of control is again a risk, as well as direct harms to society.

Runtime policies for the use of AI post-training are also important. After a datacenter is used to train a powerful AI system, running that system is typically much less expensive, allowing hundreds or thousands of copies of the system to be run in parallel. Thus, additional policies are needed to govern how and when AI systems are run or deployed.

Over time, as more efficient algorithms enable super-human advantages with fewer and fewer computing resources, smaller datacenters will present larger risks of spawning rogue AI. Thus, thresholds defining “high risk” datacenters should be lowered over time, unless high-confidence countermeasures emerge to defend against rogue AI and mitigate these risks.

**Why this approach** :

Datacenters are physical objects that are relatively easy to define and track, presenting one of several complimentary triggers for attending to AI risk. Larger datacenters can train and host more powerful AI systems, thus datacenter capacities present natural criteria for oversight.

**State of progress** :

As of the United States [Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) released on October 30, 2023, the US executive branch is evidently attending to datacenter capacities as risk factors in AI safety. The order instated reporting requirements for “any computing cluster that has a set of machines physically co-located in a single datacenter, transitively connected by data center networking of over 100 Gbit/s, and having a theoretical maximum computing capacity of 10^20 integer or floating-point operations per second for training AI.”

Still, these numbers should probably be reduced in years to come. One can estimate human brain performance at roughly 10^16 floating point operations per second: 10^11 neurons * 1000 synapses/neuron * 1 float/synapse * 100 operations/second. So, a datacenter capable of 10^20 FLOP/s could in principle simulate hundreds or thousands of human-level scientists, which together could present a significant risk to the public. This relates to the next agenda item.

Also, certification regimes are still needed in other countries besides the US.

  2. **Speed Limits** : AI systems and their training protocols should have [compute usage restrictions](https://www.alignmentforum.org/posts/Zfk6faYvcf5Ht7xDx/compute-thresholds-proposed-rules-to-mitigate-risk-of-a-lab), including [speed limits](https://twitter.com/AndrewCritchCA/status/1680461874171658242) (measured in bit operations per second) to prevent getting out of control. The limits should be mandated by datacenter certifications (above) as well as liability laws (below).[more..]

Discussion

**Problem being addressed** :

Without internationally enforced speed limits on AI, humanity is unlikely to survive. If AI is not speed-limited, by the end of this decade humans will look more like plants than animals from the perspective of AI systems: big slow chunks of biofuel showing weak signs of intelligence when left undisturbed for ages (seconds) on end. Here is what humans look like from the perspective of a system just 50x faster than us:

<http://vimeo.com/83664407>

Alarmingly, over the next decade AI can be expected to achieve a 100x or even 1,000,000x speed advantage over us. Why?

Human neurons fire at a rate of around 100 Hz, while computer chips "fire" at rates measured in GHz: tens of millions of times faster than us. Current AI has not been distilled to run maximally efficiently, but will almost certainly run 100x faster than humans eventually, and 1,000,000x seems achievable in principle.

As a counterpoint, one might think AI will decide to keep humans around, the same way humans have decided to protect or cultivate various species of plants and fungus. However, most species _have not_ been kept around: around 99.9% of all species on Earth have gone extinct (source: [Wikipedia)](http://en.wikipedia.org/wiki/Extinction), and the current mass extinction period — the anthropocene extinction, which started around 10,000 years ago with the rise of human civilization — is occurring _extremely quickly_ in relation to the history of the other species involved. Unless we make a considerable effort to ensure AI will preserve human life, the opposite should be assumed by default.

**Why this approach** :

Speed is a key determining factor in many forms of competition, and speed limits are a simple concept that should be broadly understandable and politically viable as a means of control. Speed limits already exist to protect human motorists and aircraft, to regulate internet traffic, and to protect wildlife and prevent erosion in nature reserves. Similarly, speed limits on how fast AI systems are allowed to think and act relative to humans could help to protect humans and human society from being impacted or gradually “eroded” by AI technology. For instance, if a rogue AI begins to enact a dangerous plan by manipulating humans, but slowly enough for other humans to observe and stop it, we are probably much safer than if the AI is able to react and adjust its plans hundreds of times faster than us.

**State of progress** :

Presently, no country has imposed a limit on the speed at which an AI system may be operated. As discussed above under Datacenter Certifications, the US executive branch is at least attending to the total speed capacity of a datacenter — measured in floating point operations per second — as a risk factor warranting federal certification and oversight. However, there are three major gaps:

_Gap #1_ : There is no limit on how fast an AI system will be allowed to operate _under_ federal supervision, and thus no actual speed limit is in force in the US.

_Gap #2_ : After training an AI system, typically the computing resources needed to train it are sufficient to run hundreds or thousands of copies of it, collectively yielding a much larger total speed advantage than observed during training. Thus, perhaps stricter speed limits should exist at runtime than at training time.

_Gap #3_ : Other countries besides the US have yet to publicly adopt any speed-related oversight policies at all (although perhaps it won’t be long until the UK will adopt some).

  3. **Liability Laws** : Both the users and developers of AI technology should be held accountable for harms and risks produced by AI, including "near-miss" incidents. There should be robust whistleblower protections to discourage concealment of risks from institutions. (See also this [FLI position paper](https://futureoflife.org/wp-content/uploads/2022/11/FLI_AI_Liability_Position_Paper.pdf).) To enable accountability, it should be illegal to use or distribute AI from an unattributed source. Private rights of action should empower individuals and communities harmed or placed at risk by AI to take both the users and developers of the AI to court.[more..]

Discussion

**Problem being addressed** :

Normally, if someone causes significant harm or risk to another person or society, they are held accountable for that. For instance, if someone releases a toxin into a city’s water supply, they can be punished for the harm or risk of harm to the many people in that city.

Currently, the IT industry operates with much less accountability in this regard, as can be seen from the widespread mental health difficulties caused by novel interactions enabled by social media platforms. Under US law, social media platforms have rarely been held accountable for these harms, under [Section 230](https://en.wikipedia.org/wiki/Section_230).

The situation with AI so far is not much better. Source code and weights for cutting edge AI systems are often shared without restriction, and without liability for creators. Sometimes, open source AI creations have many contributors, many of whom are anonymous, further limiting liability for the effects of these technologies. As a result, harms and risks proliferate with little or no incentive for the people creating them to be more careful.

**Why this approach** :

Since harms from AI technology can be catastrophic, risks must be penalized alongside actualized harms, to prevent catastrophes from ever occurring rather than only penalizing them after the fact.

Since developers and users both contribute to harms and risks, they should both be held accountable for them. Users often do not understand the properties of the AI they are using, and developers often do not understand the context in which their AI will be applied, so it does not make sense to place full accountability on users nor on developers.

As open source AI development advances, there could be many developers behind any given AI technology, and they might be anonymous. If a user uses an AI system that is not traceable to an accountable developer, they degrade society’s ability to attribute liability for the technology, and should be penalized accordingly.

Financial companies are required to “know their customer”, so this principle should be straightforward to apply in the AI industry as well. But in the case of open source development, a “know your developer” principle is also needed, to trace accountability in the other direction.

**State of progress** :

Currently, “Know Your Developer” laws do not exist for AI in any country, and do not appear to be in development as yet. AI-specific “Know Your Customer” laws at least appear under development in the US, as the October 2023 [US Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) requires additional record-keeping for “Infrastructure as as Service” (IaaS) companies when serving foreign customers. These orders do not protect Americans from harm or risks from AI systems hosted entirely by foreign IaaS companies, although there is an expressed intention to “develop common regulatory and other accountability principles for foreign nations, including to manage the risk that AI systems pose.”

  4. **Labeling Requirements** : The United Nations should declare it a fundamental human right to know whether one is interacting with another human or a machine. Designing or allowing an AI system to deceive humans into believing it is a human should be declared a criminal offense, except in specially licensed contexts for safety-testing purposes. Content that is “curated”, “edited”, “co-authored”, “drafted”, or “wholly generated” by AI should be labeled accordingly, and the willful or negligent dissemination of improperly labeled AI content should also be a criminal offense.[more..]

Discussion

**Problem being addressed** :

Since AI might be considerably more intelligent than humans, we may be more susceptible to manipulation by AI systems than humans. As such, humans should be empowered to exercise a greater degree of caution when interacting with AI.

Also, if humans are unable to distinguish other humans from AI systems, we will become collectively unable to track the harms and benefits of technology to human beings, and also unable to trace human accountability for actions.

**Why this approach** :

Labeling AI content is extremely low cost, and affords myriad benefits.

**State of progress** :

The October 2023 [US Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) includes in Section 4.5 intentions to develop “standards, tools, methods, and practices” for labeling, detecting, and tracking the provenance of synthetic content. However, little attention is given to the myriad ways AI can be used to create content without wholly generating it, such as through curation, editing, co-authoring, or drafting. Further distinctions are needed to attend to these cases.

  5. **Veto Committees** : Any large-scale AI risk, like a significant deployment or large training run, should only be taken with the unanimous consent of a committee that is broadly representative of the human public. This committee should be selected through a fair and principled process, such as a [sortition](https://en.wikipedia.org/wiki/Sortition) algorithm with adjustments to prevent unfair treatment of minority groups and disabled persons.[more..]

Discussion

**Problem being addressed** :

Increasingly powerful AI systems present large-scale risks to all of humanity, even including extinction risk. It is deeply unfair to undertake such risks without consideration for the many people who could be harmed by it. Also, while AI presents many benefits, if those benefits accrue only to a privileged class of people, risks to persons outside that class are wholly unjustified.

**Why this approach** :

It is very costly to defer every specific decision to the entire public, except if technology is used to aggregate public opinion in some manner, in which case the aggregation technology should itself be subject to a degree of public oversight. It is more efficient to choose representatives from diverse backgrounds to stand in protection of values that naturally emerge from those backgrounds.

However, equal representation is not enough. Due to patterns of coalition-formation based on salient characteristics such as appearance or language (see [Schelling Segregation](https://en.wikipedia.org/wiki/Schelling%27s_model_of_segregation)), visible minority groups will systematically suffer disadvantages unless actively protected from larger groups.

Finally, individuals suffering from disabilities are further in need of protection, irrespective of their background.

**State of progress** :

The October 2023 US [Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) expresses intentions for the US Federal Government “identifying and circulating best practices for agencies to attract, hire, retain, train, and empower AI talent, including diversity, inclusion, and accessibility best practices”.

However, these intentions are barely nascent, and do not as yet seem on track to yield transparent and algorithmically principled solutions, which should be made a high priority.

  6. **Global Off-Switches** : Humanity should collectively maintain the ability to gracefully shut down AI technology at a global scale, in case of emergencies caused by AI. National and local shutdown capacities are also advisable, but not sufficient because AI is so easily copied across jurisdictions. “Fire drills” to prepare society for local and global shutdown events are needed to reduce harm from shutdowns, and to maintain willingness to use them.[more..]

Discussion

**Problem being addressed** :

It is normal for a company to take its servers offline in order to perform maintenance. Humanity as a whole needs a similar capacity for all AI technology. Without the ability to shut down AI technology, we remain permanently vulnerable to any rogue AI system that surpasses our mainline defenses. Without practice using shutdowns, we will become over-dependent on AI technology, and unable to even credibly threaten to shut it down.

**Why this approach** :

This approach should be relatively easy to understand by analogy with “fire drills” practiced by individual buildings or cities prone to fire emergencies, since rogue AI, just like fires, would be capable of spreading very quickly and causing widespread harm.

There is certainly a potential for off-switches to be abused by bad actors, and naturally measures would have to be taken to guard against such abuse. However, the argument “Don’t create off-switches because they could be abused” should not be a crux, especially since the analogous argument, “Don’t create AGI because it could be abused”, is currently not carrying enough weight to stop AGI development.

**State of progress** :

Nothing resembling global or even local AI shutdown capacities exist to our knowledge, except for local shutdown capacities via power outages or electromagnetic interference with electronics. Even if such capacities exist in secret, they are not being practiced, and a strong commercial pressure exists for computing infrastructure companies to maximize server uptimes to near 100% (see the [Strasbourg datacenter fire](https://venturebeat.com/business/cloudburst-hard-lessons-learned-from-the-ovh-datacenter-blaze/) of 2021). Thus society is unprepared for AI shutdown events, and as a result, anyone considering executing a national-scale or global shutdown of AI technology will face an extremely high burden of confidence to justify their actions. This in turn will result in under-use and atrophy of shutdown capacities.




##  Constructive Efforts

  1. **Collective Intelligence** : In lieu of superintelligent machines replacing humanity, I’d like to see humanity itself becoming collectively superintelligent as a species. Interoperable AI networks should be developed that assist humans in reaching positive-sum agreements. Today’s language models can be deployed as tools to accelerate this process. Even AI governance decisions can benefit from interoperable AI models that assist and mediate group decision-making. For an inspiring vision in this area, see this [TED Talk by Divya Siddarth](https://www.ted.com/talks/divya_siddarth_how_ai_and_democracy_can_fix_each_other) at the [Collective Intelligence Project](https://cip.org/).[more..]

  2. **AI Healthtech** : AI has a tremendous potential to save lives, and I want to be part of that. First of all, saving lives is intrinsically rewarding. Second, the healthcare industry is an excellent setting for building generalizable caring and caretaking capacities for AI. Third, the more we can save human lives with a given generation of AI models, the less morally compelling it will be to risk developing more powerful models that might be harder to control. Finally, health in general is a relatively geopolitically stabilizing objective for companies and nations to pursue with AI technology, by comparison to other industries like aerospace and defense. To help support AI healthtech development, I’ve joined [HealthcareAgents](http://healthcareagents.com) as a co-founder.[more..]

  3. **Protective moralities** : I want to support morally motivated initiatives that, by symmetry, might increase humanity’s chances of being treated well by advanced AI even if we no longer directly control it. Examples include freedom and sovereignty for individuals and territories ([example](https://survivalandflourishing.fund/sff-2024-applications#sff-2024-freedom-track-announcement-1)), mercy toward other species ([example](https://forum.effectivealtruism.org/posts/35bfnGmsyrZkEnkLJ/steering-ai-to-care-for-animals-and-soon)), fair allocation of resources ([example](https://survivalandflourishing.fund/sff-2024-applications#sff-2024-fairness-track-announcement-1)), cooperativity (see collective intelligence above), and caring and caretaking toward others (see AI healthtech above). These are abstract moral objectives that, should they end up applying to AI systems, might be somewhat protective of humanity as a special case.[more..]

  4. **Guaranteed-safe AI** : Most technologies depend crucially on safety specs in order to function as intended, including electricity, motors, foods, drugs, cars, and airplanes — AI should be no different. If AI software is developed with human-legible quantitative safety guarantees, it could be a huge win for the human economy, by allowing humans to safely construct more infrastructure with reliable AI components (as long as those humans also behave responsibly!). For an outline of potential approaches, see [Towards Guaranteed Safe AI: A Framework for Ensuring Robust and Reliable AI Systems](https://arxiv.org/pdf/2405.06624).[more..]

  5. **Hardware-level controls** : It may be possible to prevent AI systems from “[going rogue](https://yoshuabengio.org/2023/05/22/how-rogue-ais-may-arise/)” in various ways with the help of cleverly designed hardware mechanisms for shutting down and/or reporting on dangerous behaviors. See [this memo](https://yoshuabengio.org/wp-content/uploads/2024/07/flex-HEGs-memo.pdf) on flexible hardware-enabled [chip] governors or “Flex-HEGs” for a detailed approach. Designing and building such hardware is a constructive effort with many applications, even if those applications will often be restrictive in some way.[more..]




however, i have made exceptions occasionally, such as donating to climate intervention initiatives to inspire other potential contributors and to [lessen my personal guilt](https://www.lesswrong.com/posts/3p3CYauiX8oLjmwRF/purchase-fuzzies-and-utilons-separately) about my environmental impact. i have also contributed to research in life extension and cryonics, though i believe commercial initiatives are generally more effective in these fields.

in addition, i have a particular affinity for philanthropic projects centred around _software development_. building software concretely roots the project in reality and provides a clear understanding of the difference the funding makes. this creates a feedback loop that helps me to learn and improve my philanthropy over time.

##  funding methods

as of 2025, i am utilising the following methods to distribute my philanthropic funds:

  1. **[survival and flourishing fund](https://survivalandflourishing.fund/)** : SFF uses a software-facilitated method (“[s-process](https://survivalandflourishing.fund/s-process)”) that promotes donor collaboration and delegates decision-making to a trusted committee of “recommenders”. you may also want to check out the [2021](https://www.lesswrong.com/posts/kuDKtwwbsksAW4BG2/zvi-s-thoughts-on-the-survival-and-flourishing-fund-sff) and [2024](https://www.lesswrong.com/posts/2JCdzhJeo2gsTjv8D/zvi-s-thoughts-on-his-2nd-round-of-sff) reports by zvi mowshowitz about how the process looks like from inside.
  2. **individual re-granting** : for smaller donations, i sometimes have assigned (and may assign in the future) budgets to trusted individuals who then distribute the funds as they deem appropriate;
  3. **individual gifts** : occasionally i have offered (and may offer in the future) unrestricted gifts to individuals who, in my opinion, have made significant contributions to humanity, often at a personal financial sacrifice.
  4. **one-off direct grants** : these are (relatively) small grants to opportunities that are too time-sensitive or otherwise ill-suited for the SFF process. however, after the introduction of SFF’s [speculation grants program](https://survivalandflourishing.fund/speculation-grants) and [initiative committee](https://survivalandflourishing.fund/initiative-committee) i have not used this method much.



**importantly, the above means that — unless your project is directly trying to address my priorities above _and_ has a time-sensitive need for funding — you should apply to SFF instead of pitching me directly**.

##  impact investing

even though [metaplanet](https://metaplanet.com/) is my main investment vehicle, sometimes i fund "[impact investments](https://en.wikipedia.org/wiki/Impact_investing)" to advance my philanthropic goals. since metaplanet is not set up for impact investing, yet i don’t have the time bandwidth to manage investments myself, i currently fund such investments through donations to a charity called _healthy impacts organization_ (HIO). HIO, at the discretion of its board of directors, uses my donations to make investments, and then takes care of the resulting shareholder responsibilities.

you may see such investments described as "an investment from healthy impacts organization (HIO), funded with a supporting donation from jaan tallinn". strictly speaking i am not an ’investor’ in the resulting companies, but it is certainly fair to call me a ’supporter’ when my donations are directed as such.

##  other resources

  1. [the (incomplete) list of my past donations](donations.html);
  2. [my 2020-2024 donation pledge](2020_2024_pledge.html).


