---
title: "Animals in AI-transformed futures: will progress be made on this issue?"
author: "Jo_🔸"
date: 2026-01-09
url: https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/transformative-ai-x-animals-prioritization-and-interventions
fetched: 2026-07-06
via: forum-graphql
topic: "animals-adapt-to-ai"
note: "Sentient Futures/TAIA research agenda: prioritization framework and concrete interventions for animals under transformative AI."
---

**Introduction and context**
============================

In the near future, there may be large-scale interactions between transformative artificial intelligence[^os5d86pic5] (henceforth TAI) and non-human animals**.** This could have a significant effect on the latter's welfare. However, these interactions, or whether they’re even likely, remain a question mark. There has now been significant coverage of these issues within the effective altruism community. Yet, to my knowledge, little to nothing has been written on whether this is a priority area, and what should be done if it is. Skip ahead to [**Crucial considerations**](https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/transformative-ai-x-animals-prioritization#Some_crucial_considerations) for a rough bottom line.

While I don't expect that the questions I raise will be researched by academics, I hope to positively influence current prioritization and interventions. I try to do this through providing a high-level view of the area and its uncertainties; suggesting ways of gaining clarity and making core assumptions falsifiable; and discussing potential interventions to get a clearer idea of the potential impact of TAI x Animals. 

This is targeted at people who are already interested in this area and have considered putting resources there. It uses some EA jargon without defining it. The post is not based on peer-reviewed literature, and is speculative. **Read as though every claim is hedged.**[^2riivvlkdtc]

The initial document was started with Angel Lau and Amgoth Raghavendra during the FutureKind AI Fellowship Summer 2025. The initial list of questions was crowdsourced from researchers and advocates in AI safety and in animal welfare, though it has significantly evolved since then. A previous version can be found on [Electric Sheep’s website](https://www.electricsheep.is/portfolio-2/futurekind-fellowship-summer-2025). 

Although this area may turn out to not be a priority, dismissing something potentially high-stakes without some superficial exploration could be considered premature, and would not be very compelling. As I expected, writing this post has me clarify my understanding of key considerations. I hope that it can be of similar use to others.[^i15bwgnua8]

**A mini problem profile**
==========================

**Introduction to AI x Animals**
--------------------------------

Interest in how AI (not exclusively TAI) could affect animals in the future began circulating within parts of the effective altruism community in the late 2010s. This concern only crystallized around 2023 with the [Artificial Intelligence, Animals, and Conscious Machines](https://forum.effectivealtruism.org/posts/jTqNpeDHay6X6QGK6/artificial-intelligence-conscious-machines-and-animals) conference, the launch of the AI coalition channel on Hive Slack, and initial interest from animal welfare organizations. Founded in late 2023, [AI For Animals](https://www.sentientfutures.ai/) (now called Sentient Futures) became the field's first organizational hub. Since then, the field has grown considerably, with over three hundred attendees at the largest AI For Animals conference in 2025 and over three hundred fellows completing the [FutureKind AI](https://www.electricsheep.is/about) fellowship. This rapid growth was due to latent interest in the EA community (which enabled support and funding) and an emphasis on meta work.

As a 2025 conference retrospective ([Stewart, Li, Pichler 2025](https://forum.effectivealtruism.org/posts/HJg3CGW4yBxXhD9x2/ai-animals-and-digital-minds-2025-retrospective)) notes, despite limited bandwidth, the field is broad: sub-areas include AI tools for animal advocacy, meta work across AI x non-human domains, interspecies communication, steering precision livestock farming, welfare of digital minds, and, most relevant here, reducing the harms to animals that TAI could cause.[^1zoxdc67x6l] This agenda focuses exclusively on the last area, which I refer to as transformative artificial intelligence x animals (henceforth: TAIA).

TAIA sits downstream of effective altruism, applying AI safety concepts to questions about farmed and wild animal welfare, typically assuming that future AI is more than 10% likely to be radically transformative, and that it could be created in less than seven years ([Taylor 2025](https://forum.effectivealtruism.org/posts/EGAJgkBQqLkmRu3hr/how-should-we-adapt-animal-advocacy-to-near-term-agi),[ Critch 2022](https://forum.effectivealtruism.org/posts/35bfnGmsyrZkEnkLJ/steering-ai-to-care-for-animals-and-soon)). Here, I only focus on futures where TAI is developed in the next twenty-five years or less, with broad agnosticism on what sort of TAI trajectory is most plausible (which is a common assumption in TAIA - see a post on interventions that is divided between ten possible trajectories ([Kankyoku 2025b](https://sandcastlesblog.substack.com/p/ai-end-animal-advocacy)).

Example interventions includesoft networking to raise the possibility of making frontier models more animal-friendly, the development of [relevant benchmarks](https://github.com/AI-for-Animals/ahb),  and [papers](http://link.springer.com/article/10.1007/s13347-025-00979-1) on instilling some concern for animal welfare in AI ([Singer, Fai, Ziesche et al. 2025](http://link.springer.com/article/10.1007/s13347-025-00979-1)), though most current work remains meta-level. Currently, only about a dozen people at most devote any portion of their full-time work to this problem (almost exclusively with a meta approach), with an additional few dozen occasionally contributing through writing or volunteering on related topics.[^kbt7mw70iwn]

TAI x Animals as a cause area
-----------------------------

### **The basic case**

“*AI is advancing incredibly fast. We might see AI systems that are better than most humans at many tasks within a few years. This would change things drastically for animals in factory farms, in the wild, and beyond… and therefore animal advocates’ strategies should change, too.*”

Jamie Harris ([2025](https://forum.effectivealtruism.org/posts/TY2f2Ts2EdsDAP35y/animal-advocates-should-respond-to-transformative-ai-maybe))

Not all cases for TAIA being important are the same, but it may go something like this:

1.  There may be a large number of animals in the future ([Fai 2022](https://forum.effectivealtruism.org/posts/bfdc3MpsYEfDdvgtP/why-the-expected-numbers-of-farmed-animals-in-the-far-future), [Rowe 2020](https://forum.effectivealtruism.org/posts/W5AGTHm4pTd6TeEP3/should-longtermists-mostly-think-about-animals))
2.  TAI may significantly shape that future: different trajectories have very different impacts on animals ([Robert M, 2025](https://forum.effectivealtruism.org/posts/iRDKCinhGp6KC5PpT/animal-welfare-concerns-are-dominated-by-post-asi-futures))
3.  We don’t seem to be on a good track to ensure decent outcomes for these animals ([Kateman, 2022](https://www.forbes.com/sites/briankateman/2022/12/07/if-we-dont-end-factory-farming-soon-it-might-be-here-forever/))
4.  TAI may come soon, yet steering it may still be in our power ([Taylor, 2025](https://forum.effectivealtruism.org/posts/EGAJgkBQqLkmRu3hr/how-should-we-adapt-animal-advocacy-to-near-term-agi))

### **An imprecise BOTEC**

Part of the reason I'm so vague here is that the questions [below](https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/transformative-ai-x-animals-prioritization#Crucial_questions) elaborate on Importance and Tractability.[^7x6lfswf53c]

*   **Importance**: TAIA could be large in scale, but it seems conditional on certain scenarios ([see section 1](https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/transformative-ai-x-animals-prioritization#1__Importance)).
*   **Tractability**: the overall leverage of promising TAIA opportunities may be less than in AI safety, given the limited institutional leverage of animal welfare, potentially short timelines, and immense uncertainty. There are reasons to believe some marginal work could be promising ([see section 2](https://forum.effectivealtruism.org/posts/Hj3vcnZtWp7JzdbEo/transformative-ai-x-animals-prioritization#2__Tractability)).
*   **Neglectedness**: little is spent on object-level work (under a million a year?), though it’s become a major topic of discussion in effective altruism. Nevertheless, there is currently little in terms of shovel-ready opportunities, so it makes sense.

### **Importance depending on trajectories**

I've observed many people having strong initial opinions on whether TAIA should ever be pursued, that hinge on what kind of future they imagine. It can lead to confusion if people are thinking of very different trajectories**.**[^vm0u4de9fbo] 

**An example trajectory where TAIA is a potential priority:** A gradual process where humanity shapes the development of transformative AI (TAI) in ways that mostly preserves existing values. Such values would favor some processes that preserve a large amount of harm to animals, making TAIA somewhat important in terms of scale.[^nfkesox7vmf] TAIA can also be tractable if such a process is gradual: for example, early strategic interventions could marginally influence stakeholder attitudes toward ecoengineering.

**An example trajectory where this is not the case:** If all sentient life is made extinct soon after the creation of TAI, there will not be a substantial number of animals (or humans) that we can affect in the future, and TAIA would thus be unimportant.

### **Approaches and intermediate goals**

Articles and blog posts on TAIA have somewhat different approaches in mind, sometimes because intermediate goals are different. Note that the questions don’t address what intermediate goal TAIA should have in the post. Indeed, I think this question mostly gets settled by determining likely trajectories and tractable interventions.[^2ja6rr56s81] The high-level approaches in question are:

*   incremental consideration of animal interests ([Singer, Fai, Ziesche et al. 2025](http://link.springer.com/article/10.1007/s13347-025-00979-1))
*   High-stakes push toward animal-inclusive AI ([Taylor 2023](https://forum.effectivealtruism.org/posts/2cZAzvaQefh5JxWdb/bringing-about-animal-inclusive-ai))
*   Strategic positioning ([Kankyoku 2025a](https://sandcastlesblog.substack.com/p/the-tsunami-is-coming)).
*   Trajectory-dependent interventions ([Kankyoku 2025b](https://substack.com/@sandcastlesblog/p-182640261))

**Difficulties of Advancing TAIA**
----------------------------------

In spite of TAIA having existed for a while, few object-level interventions have been pursued yet. 

Investment in meta-work in TAIA was warranted given that this idea already interested talented people with relevant experience. However, as meta-orgs continue to be funded, without many shovel-ready projects seeing the light of day, there’s a fear that TAIA will eat itself for a lack of object-level interventions. The field may attract suspicion through being at once very visible, but having little to show in terms of real-world implementation.

This is understandable. After all, it is difficult to know how to do good, especially if one embraces the sort of impartial consequentialism that is popular in TAIA ([Graham 2025](https://forum.effectivealtruism.org/posts/2YjqfYktNGcx6YNRy/if-wild-animal-welfare-is-intractable-everything-is)). This seems particularly salient in AI safety, where it is difficult to find interventions that are both outcome and implementation robust. ([DiGiovanni 2025](https://forum.effectivealtruism.org/posts/rec3E8JKa7iZPpXfD/3-why-impartial-altruists-should-suspend-judgment-under#What_we_re_missing__Outcome_robustness_and_implementation_robustness)) 

> 1.  *Outcome robustness: *Intervening on X in a given direction would be net-positive.
>     *   **Example of failure: **It’s unclear whether “human” space colonization (SC) is better than misaligned AI SC, given how many systematic ways these coarse categories could differ in various directions. (Especially when we consider exotic possibilities, like interactions with alien civilizations and acausal trade.)
> 2.  *Implementation robustness*:Our intervention on X would (i) change X in the intended direction, and (ii) avoid changing other variables in directions that might outweigh the intended positive effect.
>     *   **Example of failure:** AI safety interventions might (i) increase the risk of human disempowerment by AI, e.g., by increasing AI companies’ complacency; or (ii) increase the risk of extinction by causes other than successful AI takeover, e.g., a great power war with[ novel WMDs](https://www.forethought.org/research/preparing-for-the-intelligence-explosion#highly-destructive-technologies).

**Outcome robustness in TAIA:** given how little we know about AI values and AI takeoff, it seems unlikely that we’ll find an intervention that impartially improves outcomes for animals. Because of the issue outlined in the quote above, this may still be a problem when one only considers humans, or potential forms of artificial sentience.

**Implementation robustness in TAIA:** the animal welfare world is small, and our historic wins, while important for animals, have been very localized.[^o0xy184xeu] Thus, a somewhat "clean" win like “create regulations that prevent future AI-engineered ecosystems from containing contain a dominance of r-selected species” would be very unlikely to pass. No one in animal welfare has this leverage, and the way to such influence would contain second-order effects for the animal welfare movement, that may turn out to be larger in expectation than the wins at hand.[^nmo6caev6k] And more straightforwardly, the creation of ecosystems by a human-controlled AI would be hard to influence without having previous examples, and early regulation could miss the mark on improving animal welfare.

**Foundational questions**
==========================

**1\. Importance**
------------------

It is not self-evident that TAIA is a priority area, and not everyone agrees with it. Before elaborating on interventions and strategies, the importance of the area has to be assessed. This involves validating multiple assumptions (and so does the subpart that follows), but this shouldn’t lead us to believe that the likelihood that TAIA is important and tractable is negligibly low, because some of these assumptions may have correlated answers. Nonetheless, without quantifying, the likelihood that TAIA is a potential priority on the basis of importance and theoretical tractability seems lower than what some of its advocates assume at first glance.

### **1\. Can animal welfare be a large-scale issue in an AI-transformed world?**

An assumption of TAIA is that different futures with TAI may lead to large changes in welfare impacts, and that steering this could be important. There are different responses to this: that most TAI futures have the same outcome for animals (some form of extinction, or outweighing of their interests), or that there is convergence by default, as well as [divergence by default](https://forum.effectivealtruism.org/posts/9ExA9K52nKuucZpYb/is-there-any-way-to-be-confident-that-humanity-won-t-keep). For TAIA to be an important cause, it would have to be shown that these objections don’t hold water.

**Do animals dominate post-TAI futures in expectation?**

Due to evolutionary forces, futures without TAI would contain vastly more biological animals than humans. However, in post-TAI futures, it seems more likely that biological life could be outcompeted by artificial systems, whether these systems turn out to be sentient or not. Because of this, animals in our portion of the universe may cease to exist, or continue existing in large numbers while being outweighed by digital minds. 

The most basic AI safety case against AI x Animals being an important issue, thus, rests on the expected proportion of future welfare that will be experienced by biological animals.[^3odad71667z]  Note that the main cases against this don’t engage deeply with the dominance of digital minds ([Fai 2022](https://forum.effectivealtruism.org/posts/bfdc3MpsYEfDdvgtP/why-the-expected-numbers-of-farmed-animals-in-the-far-future), [Rowe 2020](https://forum.effectivealtruism.org/posts/W5AGTHm4pTd6TeEP3/should-longtermists-mostly-think-about-animals))[^g1yvmkca6jk]. Under current AI Safety assumptions, digital minds probably dominate, and TAIxAnimals may thus only be interesting as part of some kind of portfolio.

**What mechanisms could affect animals in such futures?**

A common reason to not prioritize TAIA is that current mechanisms that cause animal suffering (economic efficiency of factory farming, evolutionary pressures controlling experiences of wild animals) may not continue in the future. But this may be over-indexing on the present: fairly different mechanisms could be detrimental to animals.[^bueatmea0iv] This could come from human-controlled TAI as well as rogue TAI, and goes beyond simply being farmed for human food. Indeed, given these changes, the farmed / wild distinction may become obsolete ([Fai 2022](https://forum.effectivealtruism.org/posts/bfdc3MpsYEfDdvgtP/why-the-expected-numbers-of-farmed-animals-in-the-far-future#Bonus_2__The_separation_between_farmed_animals_and_wild_animals_might_blur_over_time)). 

The main difference we could expect between human-influenced TAI and rogue TAI is that the ways it could affect animals will be even more foreign to us. In both cases, animals could be used as resources or aesthetic objects through ecoengineering or husbandry[^9a64a0ym6rh] ([West & Vaintrob 2025](https://forum.effectivealtruism.org/posts/tGdWott5GCnKYmRKb/a-shallow-review-of-what-transformative-ai-means-for-animal); [Tomasik 2015](https://longtermrisk.org/gains-from-trade-through-compromise/)). Animals could also be largely impacted by the indirect effects of reshaping the environment ([Rowe 2020](https://forum.effectivealtruism.org/posts/W5AGTHm4pTd6TeEP3/should-longtermists-mostly-think-about-animals)). 

### **2\. What leverage do current humans have?**

If TAIA is large in scale, that doesn’t necessarily mean anything can be done about it. To know whether action is possible, some clarification of advocates’ situation is needed.

**Is our current understanding of TAI trajectories action-guiding?**

The AI Safety community, even with its appreciation for forecasting, has not found consensus on the likelihood of various TAI trajectories, so this doesn’t seem like a promising path forward. This is part of the reason why betting on specific TAIA scenarios has been criticized ([West & Vaintrob 2025](https://forum.effectivealtruism.org/posts/tGdWott5GCnKYmRKb/a-shallow-review-of-what-transformative-ai-means-for-animal)). However, it’s unlikely that we’ll find interventions that are robust to most potential trajectories that we can conceive of. 

While it's a common topic of debate, we lack or solid grounding on whether worlds with rogue TAI would be worse for animals than worlds with human-controlled TAI (though we can make more limited, albeit less action-guiding, judgment calls).[^vqnljouw98b] Either thinking that animal interests and the preservation diverge by default, or that they inevitably converge, is unjustified for now.

**Is moral circle expansion a solid lever?**

Moral circle expansion is a popular high-level theory of change in animal advocacy, and has influenced framing in TAIA ([Taylor 2023](https://forum.effectivealtruism.org/posts/2cZAzvaQefh5JxWdb/bringing-about-animal-inclusive-ai)). It has been questioned for its short-term impact ([Buhler 2025a](https://forum.effectivealtruism.org/posts/Z9dufpYAoqgLvtKzK/sentientia-reversomelas-and-the-small-animal-replacement)). Case studies of negative outcomes from this approach suggest that it is not as broad as one would think. Perhaps it should only be pursued when going from apathy to consideration ensures that an agent will take an action that has better consequences.  We don't have solid reasons to think that this is applicable to situations with animals in post-TAI worlds. If moral circle expansion is not broadly robust, focusing on narrower case-by-case decisions (e.g., that caging animals is to be avoided) might turn out to be more robust.[^0xy4zxgab9xg]

**2. Tractability**
-------------------

In any cause area, there is an immense number of possible interventions, yet only a select few will meaningfully contribute to the goal at hand. Before we can identify which interventions to prioritize, we have to address higher-level questions that guide our decision-making. The question of tractability will also pose itself here: if most strategies that come to mind are not promising, it’ll be harder to make progress.

### **1\. Can we gain an action-guiding understanding of the situation?**

When dealing with futures that we expect to be different from ours, it is reasonable to start out skeptical that any positive intervention can be taken. However, some may answer that we haven’t even tried, and that more exploration is necessary. But exploration could mean many things. How would we know that such exploration is bringing us closer to solid intervention ideas?

**Can feedback loops be built into TAIA interventions?**

It is well-known in effective altruism that feedback loops are important for assessing any intervention ([Savoie, Stadler, Shann 2021](https://www.charityentrepreneurship.com/book)), as our judgment calls and rational arguments often get things wrong on first pass ([Kankyoku, 2025c](https://sandcastlesblog.substack.com/p/animal-activists-empirical-learning)). In TAIA, there’s a risk of squandering limited resources on the first poor judgment call. Interventions should thus be reasonably flexible and falsifiable. 

When founding an org, or pursuing an object-level intervention, it would be preferable if they write their assumptions somewhere.[^i1vwe5o39gq] They should then commit to reevaluating if real-world developments falsify these assumptions.[^vs60yfhpye] This would be easier if interventions are built with several alternatives. 

**What fields are adjacent to TAIA?**

Deciding what fields are adjacent to TAIA focuses research efforts and enables grounding for interventions (see the questions below). Engagement with AI Safety research, and the community itself, is natural given where TAIA comes from. Comparatively, while most interest in TAIA will come from animal advocates, research in that field is less crucial given its focus on the specifics of the current paradigm (though there are exceptions, like the application of corporate campaigns to AI Safety ([Harris 2024](https://forum.effectivealtruism.org/posts/zjmpFW3nBKwaBB5xr/corporate-campaigns-work-a-key-learning-for-ai-safety))). 

Engagement with people working on frontier AI, beyond safety researchers, may also provide ideas on how TAI could be deployed. Then, nascent areas such as space governance or the economics of AI deployment could help model different trajectories, but would be less action-guiding given conflicting recommendations due to uncertainty, or recommended actions that TAIA would not have the leverage to push for. More tractable interventions may come from more mundane areas that have not been identified yet.

### **2\. Are there synergies with interventions that are already being pursued?**

At most, the field of TAIA will most likely be composed of a small number of advocates and orgs, pursuing strategies they assume to be positive while relying on the existence of larger fields. To ensure that they don’t pursue strategies that are intractable, or lead to negative outcomes, the synergies between TAIA and work that seems adjacent to it must be examined. If they turn out to exist, shovel-ready interventions will be easier to find. If no such synergy is evident, the opposite will be true, and TAIA may be either intractable or in need of more research.

**Is the pursuit of positive trajectories for human society beneficial for animals?**

Asymmetric considerations may favor or disfavor collaboration, open institutions, and democracy. Cooperative approaches and curbing competitive “race” dynamics in AI development may create more space for positive-sum compromises that benefit animals, as competitive pressures can deprioritize the limited interest we currently take in animal welfare ([Tomasik 2015a](https://longtermrisk.org/gains-from-trade-through-compromise/); [Tomasik 2015b](https://longtermrisk.org/how-would-catastrophic-risks-affect-prospects-for-compromise/)). Modern democracies have been early adopters of factory farming. On the other hand, humans currently dislike cruelty to animals[^wint0q246d], and freedom of association has been the basis for most farmed animal welfare wins. Perhaps the creation and diffusion of AI tools for decision-making ([Qureshi 2025](https://80000hours.org/problem-profiles/ai-enhanced-decision-making/)) could help surface these latent preferences, making better outcomes more attainable. 

**Does animal-inclusive AI converge with human interests?**

Aiming for TAI that considers sentient animals, rather than simply humans, in its decisions, has been claimed to enable positive outcomes for both humans and animals, making animal-inclusive AI a potential “win-win” rather than a constraint ([Bar, 2025](https://forum.effectivealtruism.org/posts/4LimpA4pyLemxN4BF/ai-moral-alignment-the-most-important-goal-of-our-generation)). Nonetheless, the application of animal-inclusive values may turn out more complicated in practice ([Dearnaley, 2025](https://www.lesswrong.com/posts/FQ4DsmswAK77Ei6pH/5-moral-value-for-sentient-animals-alas-not-yet)). A proposed solution has been “Low-Cost Animal Harm Minimisation”, emphasizing the low-cost aspect in order to avoid trade-offs that would negatively affect humans and make such commitments inapplicable ([Singer, Fai, Ziesche et al. 2025](http://link.springer.com/article/10.1007/s13347-025-00979-1)).

**3\. Interventions**
---------------------

TAIA’s main bottleneck, as the problem profile said, is interventions. That section of the post suggested why the area is in this situation, and this part adds to these suggestions. This third subpart lists out candidates for feasible interventions, and highlights crucial considerations around two of the most-discussed ones.

### **1\. What feasible interventions could exist in TAIA?**

The lack of potential solid TAIA interventions has been criticized, but a list of interventions that could realistically be implemented (even with a low chance of success) has only been done once.[^n7a22m2mmlh] Instead of asking questions, I made a separate post with a list of TAIA interventions and my judgment on them. I believe that most of these could[^y2899p76qi], for the most part, be implemented in a few years by 1 or 2 FTE.

[**A list of feasible transformative AI x Animals interventions**](https://forum.effectivealtruism.org/posts/RM2qfTd3CwykNHsG9/a-list-of-feasible-transformative-ai-x-animals-interventions)

The post tentatively concludes that the positive aspect of even the most appealing interventions depends on judgment calls that have to be made with little information. But it’s a quick first pass.

### **2\. Case study: preserving animal advocacy**

Reliably influencing post-TAI worlds through our actions today is somewhere in the gray area between difficult and impossible. However, preserving the animal advocacy movement, in some form, may give humans option value if interventions remain tractable after TAI.

**In what scenarios would preserving an animal advocacy movement be valuable?**

The value of a small organized group of people willing to improve outcomes for animals seems highest in worlds where TAI disrupts society but leaves space for organized groups to exert influence.[^m3umf1l5k] This contrasts with the more commonly discussed scenarios where only one AI, or a small set of AI stakeholders, monopolize influence. In turn, this reduces the breadth of scenarios where animal advocacy is helpful. 

And yet, even among these scenarios, we have to narrow it down again to scenarios where AI isn’t transformative enough to disempower *all *groups, but is powerful enough to disempower *some *groups based on how “flexible” they are. Such stories about “surviving” a transition to TAI may be biased by a desire for control. On the other hand, there are many cases of movements growing irrelevant due to inflexibility, so the intuition makes sense**.**

**Is preserving animal advocacy different from current meta-work?**

Movement resilience does not grow proportionally to size, which means there may be marginal actions that are particularly impactful for movement resilience. In the case of TAI-readiness, good actions could look like: building flexible, adaptable organizations, developing generalist skills, maintaining liquidity (Savoie 2025)[^7bfleyoed79]. This strengthens the case for meta-work, which makes it easier to coordinate on emerging priorities and to create new orgs. The interventions post linked above gives a few examples of what a movement with more flexibility could do.

**Is animal advocacy the best proxy for future nonhuman welfare issues?**

“Preserving animal advocacy for post-TAI worlds” is confusing when we view animal advocacy as a group that aims to improve conditions in factory farms. It makes more sense if we view it as  the largest group yet that advocates to improve the welfare of forgotten minds. Coincidentally, some independent research on this point has just been done ([Viswanathan, Otterbeck & Kejariwal 2025](https://docs.google.com/document/d/1ABWO5V988i3RhJBQ1c7q5dyFLfBJAK4m5JIWlJUPgYo/edit?tab=t.0)). 

Some takeaways from artificial sentience researchers: while the animal advocacy and the artificial sentience communities may benefit from private collaboration and good relationships (the current norm), being entirely tied would be negative. Animal advocacy, while more established, carries its own cultural baggage and reputational issues. Thus, one may conclude that the answer to the above question is a tentative no.

### **3\. Case study: animal welfare concerns in frontier labs**

Positively influencing the values of TAI has been an area of focus in the nascent field of TAIA, whether through research ([Bar, 2025](https://forum.effectivealtruism.org/posts/4LimpA4pyLemxN4BF/ai-moral-alignment-the-most-important-goal-of-our-generation)) or soft outreach to frontier AI labs ([Campos, 2023](https://www.lesswrong.com/posts/g8RE5Pkh5z5M393uF/agi-x-animal-welfare-a-high-ev-outreach-opportunity)). Given that there are already some resources going into these interventions, it seems important to clarify what the assumptions, to make it falsifiable.

**Is this a tractable intervention with a robust path forward?**

Aiming to tap into latent concern for animal welfare in researchers in Western AI labs is often thought to be a path to improved outcomes for animals. However, while some alignment and ethics advocacy has influenced AI labs, the expected impact of raising salience of new ethical issues is unclear. Moreover, other actors could make similar moves that would counter the influence of animal welfare concerns ([Xia, 2025](https://forum.effectivealtruism.org/posts/orzo8tQfGJuhpWYzA/asymmetries-ai-and-animal-advocacy)). These risks of value competition make the overall effect of such strategies uncertain for now. Since the stated values of current frontier LLMs seem fairly humane ([Kanepajs et al. 2025](https://doi.org/10.48550/arXiv.2503.04804)), it may be easier to make things worse than to make them better.

**Is the alignment problem a bottleneck to this approach?**

Without clarity on how AI systems adopt ethical stances ([Everitt et al., 2021](https://philpapers.org/rec/EVERTP)), especially regarding animals, it is difficult to anticipate or reliably influence future AI values. And while there has been some research on how current LLMs answer on animal-related issues ([Kanepajs et al. 2025](https://doi.org/10.48550/arXiv.2503.04804); [Rzepka & Takeshita 2025](https://doi.org/10.1007/s43681-024-00606-3)), there is little to no research on how a future TAI may consider animals. 

This isn’t very tractable at first glance: some suspect that AI's internal objectives may be shaped by convergent incentives in ways that are barely sensitive to attempts to encode specific values ([Hubinger, 2019](https://arxiv.org/abs/1906.01820)). Beyond undermining the case for labs being able to meaningfully make future models more animal-inclusive, alignment-related concerns may even mean that influencing TAI values should currently be deprioritized within TAIA - though [other interventions](https://forum.effectivealtruism.org/posts/RM2qfTd3CwykNHsG9/animals-in-ai-transformed-futures-can-anything-be-done-today#Interventions)exist.[^ngyp4auankj]

**Some crucial considerations**
===============================

Here are ways in which your current opinion may influence your conclusion:[^hy16sm9g23e]

*   *If the probability of sentient extinction is 90%+, and other views come from an anti-weirdness bias:* then TAIA is low-priority.
*   *If digital minds dominate in expectation:* then TAIA seems much less important,[^sgoa53stefa] especially because it may funge with resources for digital minds work (note: I’m not saying we have robustly positive digital minds interventions at this stage)
*   *If some AI Safety work is net-positive for humans / digital minds:* then TAIA *can* be a priority cause area, as long as its inter not fungible with resources for the best interventions. You may be interested in judging the list of [TAIA interventions](https://forum.effectivealtruism.org/posts/RM2qfTd3CwykNHsG9/animals-in-ai-transformed-futures-can-anything-be-done-today) I’ve compiled. If you want to intervene, building feedback loops and criteria for falsification seems helpful.

**Acknowledgements**
====================

Many thanks to Kevin Xia, Michał Kubiak, Aditya S.K., and Joanna Michalska, for feedback on earlier versions of this draft; to Angel Lau and Amgoth Raghavendra who started this project with me; and to the dozen or so other AI safety researchers and animal welfare advocates who weighed in on the research questions. 

I’ve been so slow on this that multiple pieces have come out since I started writing this post ([Singer, Fai, Ziesche et al. 2025](http://link.springer.com/article/10.1007/s13347-025-00979-1), [Kankyoku 2025a](https://sandcastlesblog.substack.com/p/the-tsunami-is-coming), [Harris 2025](https://forum.effectivealtruism.org/posts/TY2f2Ts2EdsDAP35y/animal-advocates-should-respond-to-transformative-ai-maybe), [Viswanathan, Otterbeck & Kejariwal 2025](https://docs.google.com/document/d/1ABWO5V988i3RhJBQ1c7q5dyFLfBJAK4m5JIWlJUPgYo/edit?tab=t.0), [West & Vaintrob 2025](https://forum.effectivealtruism.org/posts/tGdWott5GCnKYmRKb/a-shallow-review-of-what-transformative-ai-means-for-animal)).[^73ugoj095ig] This post is indebted to all of these, as well as many EA Forum posts with the [AI x Animals](https://forum.effectivealtruism.org/topics/ai-x-animals) tag which I cited here. Here is the [**bibliography**](https://docs.google.com/document/d/1OfAHwRwq59fXpk_elhtq7wj52pWNvPsOiSbc1GZQTM4/edit?usp=sharing), that I haven't fully updated.

I thank the Electric Sheep team and my cohort mates at FutureKind, many attendees of the AIADM 2025 London Unconference, and the Sentient Futures team for expanding my understanding of the TAI x Animals cause area (and for giving me my favorite t-shirt). I am very appreciative of posts from, and discussions with, Jim Buhler, Anthony DiGiovanni, and Vasco Grilo, which have significantly influenced my thinking about how to help others. Finally, I am grateful for my EA friends, who probably think I should have used my time on something more effective.

LLMs were used mostly for information and feedback. About 15% of paragraphs were copyedited with EditGPT, and [RoastMyPost](https://www.roastmypost.org) was used for typos. I may have left in a handful of them - so human! More AI copyediting would have been useful, but I initially feared that it would make the post sound cheaper.

This post was already very sensitive to personal judgments, so I didn’t want to use more space to share my personal takeaways. I’ll leave them here as a footnote for those who are curious.[^l1g37v0pndd]   

[^os5d86pic5]: For “Transformative AI,” I use Gruetzemacher and Whittlestone’s (2022) definition: “Any AI technology or application [...] with potential impacts that are extreme enough to result in radical changes to the metrics used to measure human progress and well-being, or to result in reversal of societal trends previously thought of as practically irreversible.” 

[^2riivvlkdtc]: This allows me to not actually hedge every single sentence, as I do in my drafts. There's still too much of it, but it can't reflect how low my confidence is. 

[^i15bwgnua8]: Vague conflict of interest note: I am not likely to work on TAI x Animals issues in the future, and my intention is not to convince people that the area should get more resources. 

[^1zoxdc67x6l]: In practice, these are mostly welfare-related harms, rather than, say, extinction of species. But I can't speak for all advocates. 

[^kbt7mw70iwn]: As of writing this, I am one of them, though I don't think I will do much in this area in the future. 

[^7x6lfswf53c]: Not neglectedness, which is easier to evaluate here once importance and tractability have been settled. 

[^vm0u4de9fbo]: Source: personal conversations 

[^nfkesox7vmf]: Especially if value preservation or technological limitations mean that there is little to no digital sentience. 

[^2ja6rr56s81]: Cool excerpt on why people with similar terminal goals have different intermediate goals 

[^o0xy184xeu]: For this reason, I currently view ToCs that aim to make TAI fully animal-inclusive to be intractable. 

[^nmo6caev6k]: The second-order effects, rather than the current lack of leverage, is what makes implementation robustness more complicated here. This isn't the best examples, but a low probability of an intervention working means a high likelihood of unforeseen consequences dominating the expected value. (Clutterbuck, 2024) 

[^3odad71667z]: Especially since the cause has generally been focused on preventing negative welfare rather than bringing about positive welfare, if it were realized that animals were not likely to dominate in the future, it would probably be deprioritized  (instead of people pivoting to ensuring that lots of happy animals come to exist). I currently assume that if people thought the extinction of all animals was the default scenario, they would not prioritize AIxAnimals. 

[^g1yvmkca6jk]: Though there has been a recent argument for animals outweighing digital minds, but on a non-TAI view (Grilo 2025) 

[^bueatmea0iv]: By analogy, it’d be hard for someone at the beginning of the 20th century to guess that genetic modification for increased output would be an important mechanism for farmed animal welfare issues 

[^9a64a0ym6rh]: Certain biological animals may turn out to be energy-efficient for specific goals 

[^vqnljouw98b]: E.g., on human-controlled TAI making the preservation of animals more likely; or that rogue TAI coexisting with animals is more likely if they turn out to be energy-efficient for many purposes 

[^0xy4zxgab9xg]: The opposite has been argued for, though (West & Vaintrob 2025). I think moral circle expansion is being insufficiently questions, but my takeaways are currently fragile, I'm mostly riffing. 

[^i1vwe5o39gq]: E.g. coarse likelihood of different trajectories, assumptions about how AIs will develop and preserve values, how certain events like China producing a more advanced model than the USA would affect trajectories. 

[^vs60yfhpye]: Of course, this also applies to intervention-level aspects of a theory of change, e.g., the possibility of influencing stakeholders - but that’s not specific to TAIA. 

[^wint0q246d]: And, in my view, their votes reflect this to a surprising extent (Kankyoku, 2025d). 

[^n7a22m2mmlh]: Used to be "has not been done", until The end of Animal Advocacy a few weeks ago 

[^y2899p76qi]: Not should 

[^m3umf1l5k]: Such scenarios could be a democratic AI scenario, or a slow progression toward value lock-in - see part 2 and part 7 of The End of Animal Advocacy. 

[^7bfleyoed79]: Unrecorded talk 

[^ngyp4auankj]: Falsifiable. But it means scientists would have to make progress on shaping AI values, which is no small if] 

[^hy16sm9g23e]: This is not exhaustive, but then for exhaustiveness, one can read the post. 

[^sgoa53stefa]: As long as one prioritizes based on expected value? 

[^73ugoj095ig]: This was the most-discussed one and the biggest influence. I end up sharing some of the biggest takeaways. 

[^l1g37v0pndd]: I don’t think that TAIA is a priority area with our current knowledge. Broad strategies for helping animals can easily backfire (Grilo, 2025b, Gould 2025), due to interspecies tradeoffs. In futures that we can influence, artificial sentience dominates in expectation. More importantly, I don’t think that potential intervention will have an impartially positive effect on the development of transformative AI (Buhler, 2025a). I did not put this into the body of the post as this is an unconventional opinion, and what I say in the post is not conditional on this point. The potential for TAI to change the game board makes me desire shorter paths to impact (West & Vaintrob 2025; West 2025). However, I don't want to overstate how robust that is (Buhler 2025b). Animal welfare may be in a decent position for high-upside scenarios where interventions remain tractable after transformative AI has been deployed, so there might not be a strong need to push on the margin there.