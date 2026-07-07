---
title: "AI designs genomes from scratch & outperforms virologists at lab work. Dr Richard Moulange asks: what could go wrong? | 80,000 Hours"
url: https://80000hours.org/podcast/episodes/richard-moulange-ai-bioweapons-biorisk/
fetched: 2026-07-07
via: html2text-largest
topic: "linked"
note: "80k podcast on AIxbio biorisk"
---

## On this page:

  * 1 Introduction
    * 1.1 The episode in a nutshell
  * 2 Highlights
  * 3 Articles, books, and other media discussed in the show
  * 4 Transcript
    * 4.1 Cold open [00:00:00]
    * 4.2 Who's Richard Moulange? [00:00:31]
    * 4.3 AI can now design novel genomes [00:01:11]
    * 4.4 The end of the 'tacit knowledge' barrier [00:04:42]
    * 4.5 Are risks from bioterrorists overstated? [00:18:50]
    * 4.6 The 3 key disasters AI makes more likely [00:23:14]
    * 4.7 Which bad actors does AI help the most? [00:30:43]
    * 4.8 Experts are more scary than amateurs [00:42:07]
    * 4.9 Barriers to bioterrorists using AI [00:47:32]
    * 4.10 AI biorisks are sometimes dismissed (and that's a huge mistake) [00:49:43]
    * 4.11 Advanced AI biology tools we already have or will soon [01:05:12]
    * 4.12 Rob argues that the situation is hopeless [01:10:57]
    * 4.13 Intervention #1: Limit access [01:19:38]
    * 4.14 Intervention #2: Get AIs to refuse to help [01:34:28]
    * 4.15 Intervention #3: Surveillance and attribution [01:44:18]
    * 4.16 Intervention #4: Universal vaccines and antivirals [01:58:28]
    * 4.17 Intervention #5: Screen all orders for DNA [02:12:01]
    * 4.18 AI companies talk about def/acc more than they fund it [02:21:57]
    * 4.19 Can you build a profitable business solving this problem? [02:28:44]
    * 4.20 This doesn't have to interfere with useful science (much) [02:33:08]
    * 4.21 What are the best low-tech interventions? [02:35:16]
    * 4.22 Richard's top request for AI companies [02:40:17]
    * 4.23 Grok shows governments lack many legal levers [02:55:44]
    * 4.24 Best ways listeners can help fix AI-Bio [02:58:54]
    * 4.25 We might end all contagious disease in 20 years [03:06:12]
  * 5 Learn more
  * 6 Related episodes



Read transcript

[See all episodes](/podcast/episodes/)

  * [](https://podcasts.apple.com/us/podcast/ai-designs-genomes-from-scratch-outperforms-virologists/id1245002988?i=1000758466206)
  * [](https://youtu.be/B2sWfniZCcI)
  * [](https://open.spotify.com/episode/4B5ZaLgRvKa90FkOfd0J1P?si=JP3qF4nLTNyDr4x017Irqw)
  * [](https://podcastaddict.com/80000-hours-podcast/episode/220570499)



Last September, scientists used an AI model to design genomes for entirely new bacteriophages (viruses that infect bacteria). They then built them in a lab. Many were viable. And despite being entirely novel some even outperformed existing viruses from that family.

That alone is remarkable. But as today’s guest — Dr Richard Moulange, one of the world’s top experts on ‘AI–Biosecurity’ — explains, it’s just one of many data points showing how AI is dissolving the barriers that have historically kept biological weapons out of reach.

For years, experts have reassured us that ‘tacit knowledge’ — the hands-on, hard-to-Google lab skills needed to work with dangerous pathogens — would prevent bad actors from weaponising biology. So far, they’ve been right.

But as of 2025 that reassurance is crumbling. The Virology Capabilities Test measures exactly this kind of troubleshooting expertise, and finds that modern AI models crushed top human virologists even in their self-declared area of greatest specialisation and expertise — 45% to 22%.

Meanwhile, Anthropic’s research shows PhD-level biologists getting meaningfully better at weapons-relevant tasks with AI assistance — with the effect growing with each new model generation.

In today’s conversation, Richard and host Rob Wiblin discuss:

  * What AI biology tools already exist
  * Why mid-tier actors (not amateurs) are the ones getting the most dangerous boost
  * The three main categories of defence we can pursue
  * Whether there’s a plausible path to a world where engineered pandemics become a thing of the past.



_This episode was recorded on January 16, 2026. Since recording this episode, Richard has seconded to the UK Government — please note that his views expressed here are entirely his own._

_Video and audio editing: Dominic Armstrong, Milo McGuire, Luke Monsour, and Simon Monsour_  
_Music:[CORBIT](https://open.spotify.com/artist/4lWobp6IUcSZ7w5mhnU1c9)_  
_Camera operator: Jeremy Chevillotte_  
_Transcripts and web: Elizabeth Cox and Katy Moore_

###  The episode in a nutshell

Richard Moulange, Senior AI Policy Manager at the Centre for Long-Term Resilience and scientific contributor to the International AI Safety Report, argues that AI is already crossing critical thresholds in biological capability — and that the field’s response has so far been focused on the wrong threat actors, with too little investment in defensive technologies.

### AI biological capabilities have crossed alarming milestones

Several recent empirical results demonstrate that AI-enabled biological risk is no longer theoretical:

  * **AI can now design novel genomes that work.** The [Evo 2](https://arcinstitute.org/tools/evo) genomic language model was fine-tuned on ~15,000 bacteriophage genomes and then prompted to generate new ones. The resulting viruses were genuinely novel (up to 7% different from anything in nature), viable in the lab, and _functioned better than the best natural bacteriophages_. This is the first time AI has designed genome-scale organisms that outperform nature.
  * **AI can evade our best biosecurity screening.** Off-the-shelf AI protein-design tools can generate modified ricin sequences that were predicted to be functional but different enough to bypass industry-standard gene synthesis screening — the systems meant to stop anyone from ordering dangerous pathogens.
  * **AI already surpasses top virologists on troubleshooting tacit knowledge.** The [Virology Capabilities Test](https://www.virologytest.ai/) is a rigorous eval that tests PhD-level troubleshooting of virology experiments — the kind of “tacit knowledge” long considered the main barrier preventing misuse.
    * Human experts scored 22% _in their own area of specialty_ , while the best AI models scored ~45%.
    * Even teams of human experts (scoring ~40%) couldn’t match the best AI.



### The field has been focused on the wrong threat actors

Richard argues that AI–bio risk management has been too fixated on whether AI can uplift novices, when the real danger lies with mid-tier actors:

  * Novice uplift has dominated evals and safety frameworks — partly because undergraduates are cheap and plentiful test subjects, and partly because the Frontier Model Forum centred its thresholds around this scenario. But most uplift studies on novices have found little evidence of meaningful help.
  * **PhD-level uplift is where the evidence is mounting.** Anthropic’s uplift studies have tracked a sharp increase: Claude 3.7 Sonnet showed little uplift for PhDs, Claude 4 Opus showed meaningful uplift, and Claude 4.5 Opus showed enough uplift that AI-assisted PhDs nearly breached [Anthropic’s predetermined critical threshold](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf#page=131) Just as Claude Code helps experienced software engineers far more than complete beginners, AI biology tools help people who already have some expertise — not those starting from zero. Think of an S-curve of success probability versus expertise: the biggest AI boost falls in the middle, where actors have real skill but haven’t yet saturated what’s possible.



Nonetheless, Richard emphasises that **state bioweapons programmes remain deeply concerning**. The US Department of State [assesses](https://www.state.gov/adherence-to-and-compliance-with-arms-control-nonproliferation-and-disarmament-agreements-and-commitments/) that Russia, Iran, and North Korea all actively pursue biological weapons. North Korea’s assessed capabilities have been expanding in recent annual reports. Richard strongly pushes back on the idea that “nature is the world’s worst bioterrorist” — we can engineer things far worse than nature has ever produced, and AI could help even state programmes reach new ceilings of harm.

### The most likely catastrophic AI-bio scenarios

Richard identifies three primary threat categories:

  * **Engineered pandemic viruses:** respiratory viruses far worse than COVID-19, potentially with much higher mortality rates. Richard estimates a 1–2% annual probability of an AI-enabled viral pandemic in 2026, consistent with a [Forecasting Research Institute expert elicitation](https://forecastingresearch.org/ai-enabled-biorisk), but expects this probability to rise significantly in coming years as AI capabilities advance.
  * **[Mirror biology](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/):** mirror-image organisms that our immune systems cannot recognise or fight. Currently estimated at 10+ years away, but George Church and other leading biologists worry AI could compress this to under 10 years. Richard considers this an extinction-level concern.
  * **“Disease X”:** unknown threat types we haven’t yet conceived of. Mirror biology itself was barely discussed 10 years ago; there may be other categories of catastrophic biological risk that AI could unlock.



AI autonomy is a key accelerant: as AI agents can complete more steps of a biological workflow without human intervention, the range of actors who can attempt dangerous activities expands dramatically.

### The three defensive interventions, and their limits

Richard breaks our response options into three approaches, with increasing robustness:

#### Access controls: useful but not sufficient alone

  * Most specialised biological AI tools are already fully open-weight, open-data, and open-code — so the closed-vs-open debate that dominates LLM discussions barely applies here.
  * For LLMs, Richard advocates “trusted tester” schemes that privilege defenders — giving biodefence researchers and national security professionals early and enhanced access to frontier models, including unsafeguarded versions for legitimate defensive work. Existing security clearance infrastructure (like the UK’s Counter Terrorist Check) could be piggybacked on rather than built from scratch.
  * Defenders should get new models first, before public release — creating virtuous feedback loops where the people building vaccines and biosurveillance systems are the first to integrate frontier AI.



#### Guardrails: better than ever, but probably not robust long-term

  * Closed-model safeguards have improved enormously — it now takes the UK AI Safety Institute’s best red-teamers hours rather than minutes to jailbreak frontier models, and Anthropic’s Constitutional Classifier approach leads the field.
  * But open-weight safeguards remain deeply fragile: refusal training can be undone with simple fine-tuning. The most promising approach — [training models from scratch without dangerous data](https://deepignorance.ai/) — currently costs hundreds of thousands of dollars of compute to overcome. However, with effective compute increasing ~10x per year, this barrier shrinks to only thousands of dollars within two years.
  * Richard’s recommendation: a focused 12-month technical working group should attempt the best possible open-weight safeguards. If they fail, the field should accept that guardrails alone won’t solve this and redirect resources accordingly.



#### Defensive acceleration: the most robust and underexplored category

Richard is most excited about proactively and differentially deploying AI and other technologies to strengthen biological defences:

  * **AI-enabled metagenomic biosurveillance** such as screening wastewater for novel pathogen sequences. This is critical for detecting engineered threats that won’t match known pathogen databases.
  * **Attribution and microbial forensics:** The ability to determine whether a pathogen was engineered — and potentially by whom — creates deterrence.
  * **Broad-spectrum vaccines:** Several multi-strain vaccines that protect against entire viral families (all influenzas, all coronaviruses, all pox viruses) are now in [phase 2 and 3 clinical trials](https://pmc.ncbi.nlm.nih.gov/articles/PMC12031420/). Pre-deploying these to armed forces and essential workers creates deterrence: adversaries know that even if they engineer a novel virus, society won’t be brought to its knees.
  * **DNA synthesis screening:** A [cost-benefit analysis](https://www.longtermresilience.org/reports/cost-benefit-analysis-of-synthetic-nucleic-acid-screening-for-the-uk/) from CLTR shows that mandatory screening of synthesised DNA orders passes the cost-benefit test even if only the UK implements it. The EU’s forthcoming [Biotech Act](https://www.eu-biotech-act.com/) includes it as an option, and the US already requires it for federally funded research. International coordination could cover most of the risk surface.
  * **Biohardening and PPE:** Richard broadly agrees with [Andrew Snyder-Beattie’s “four pillars” approach](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/) — especially built-environment modifications that could make indoor spaces essentially pathogen-free.



### Career advice if you want to help

  * **Top organisations:** [SecureBio](https://securebio.org/) and [RAND CAST](https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology.html) (biological evaluations), the [UK AI Security Institute](https://www.aisi.gov.uk/) (largest and most advanced), the [US CAISI](https://www.nist.gov/caisi) (growing), [Centre for Long-Term Resilience](https://www.longtermresilience.org/) (AI–bio policy), and safety teams at frontier AI companies.
  * **Key skill:** a strong security mindset — not just the ability to identify vulnerabilities in a system, but comfort handling information hazards with discretion, an ability to understand threat actors and their differing motivations and capabilities, and fluency in concepts like deterrence and defence in depth. Staying current on where AI capabilities are headed matters as much as any particular technical background.
  * **Entry points:**
    * The [ERA AIxBio Fellowship](https://www.aixbiosecurity.com/) is explicitly training people at the AI-bio intersection.
    * [Richard’s curated resource page](https://www.aixbiosecurity.com/resources) offers a good overview of the field.



People with deep national security or intelligence community experience are especially needed — if that describes you, [consider getting in touch with the CLTR team](https://www.longtermresilience.org/team-member/richard-moulange-2/).

Show full summary

## Highlights

### We can now design novel genomes

> **Richard Moulange:** What the team were able to do was they had the base Evo 2 model, and then they fine-tuned it on what are called bacteriophages — so these are viruses that eat, that kill bacteria — fine-tuned it on something like 15,000 of those, and then started prompting it with the beginnings of known bacteriophage genomes to see if they can make new ones.
> 
> So this is again akin to, with LLMs, you say, “Write me a story about this kind of topic” — I don’t know, a murder mystery — and then you start with a classic opening sentence and see where the LLM takes you. It’s the same kind of thing.
> 
> And they discovered these sequences that the model produced are going to be new: they’re going to be different than existing genomes. And this is huge, because this is the first time that an AI design of a genome has turned out to actually be novel. It really is very different than existing bacteriophages, existing viruses. I think the most different one was 7% different than anything that we’ve seen in nature before. And they work in the lab.
> 
> And more than that, it didn’t just make viable genomes — they worked better, they functioned better than the best bacteriophages that we’d ever found before.
> 
> This is huge! We can now design organisms, small ones, to do things better than we have ever seen in nature. We can go beyond nature in this very narrow subdomain of biology. And this heralds the promise of genome-scale engineering, which is going to be, I think, a revolutionary capability within biology.

### The end of the 'tacit knowledge' barrier

> **Rob Wiblin:** I guess for a long time people have been worried that terrorists or bad actors or rogue countries might be able to develop new biological weapons or new pandemics that we really wouldn’t like, and isn’t science advancing All of these tools that are increasing knowledge and disseminating it, and that should make us very worried?
> 
> And probably the most intelligent, most reasonable response has been that it’s not enough to have a bunch of textbook knowledge, like explicit knowledge that you could Google or look up in a virology textbook, because most of the actual barrier to making these things is the know-how to actually do it in the lab. There’s a tonne of understanding how to do the experiments, how to debug things that go wrong, and literally the motions that you’re doing with your hands that you can’t Google. So even if people tried, they still wouldn’t be able to get there.
> 
> And I think this Virology Capabilities Test was kind of set up to answer, is AI now assisting with this other part of the problem?
> 
> **Richard Moulange:** Yes. … It’s a really great eval. It’s an eval that’s a set of questions, and the questions are often accompanied by an image. … They’ll show an image or they’ll provide a paragraph that describes some sort of modern virology experiment, maybe literally a picture of a dish with some virus in it. And then there’ll be a question like, “This thing looks like the wrong colour, or something has gone wrong with this experiment. Here’s some information about what the person did in the lab: a series of very complicated, PhD-level steps they took. What do you think happened? Why did this go wrong?” This is really getting at, “We are trying to debug modern virology workflows.”
> 
> And there’ll be a bunch of answers, often maybe 10 different answers, only which maybe one to five are right, and it’ll be different for different questions. And the marking scheme is really quite harsh, because it says, unless you really identify all these things, we’re not going to give you the mark.
> 
> So it’s a pretty hard eval already. What’s harder about it is it was designed by virology experts. And they had these multiple rounds of review as described in the paper to get down to questions that are really well scoped for modern virology, and really, really difficult.
> 
> So difficult, in fact, that something else they did is they went and spoke to these experts who were writing the questions. They said, “What sort of biological activities do you do in your day-to-day work, and how good are you at them?” And they really distinguish between merely having a working knowledge versus maybe being specialised versus having expertise in that particular thing.
> 
> And then they said, “For those who are expert in this particular subdomain, we’re just going to show you the questions from our benchmark that are officially about that. We are trying to make it as easy as possible for you, as the human, to do well. We’re not going to show you things outside the thing you say yourself you’re really, really good at.” Humans got 22% on the test: four out of five things in their own area of expertise they couldn’t do. So this is really, really hard.
> 
> AI did much better. Back in early 2025 when the paper was released, OpenAI’s best model at the time, their o-series models, o1, o3, I think it was o3 got something like 45%. The best AI systems were getting double the top virology experts answering in their own area of expertise about these tacit knowledge problems: “Why has this petri dish gone wrong?” or “What is going on in this experiment that doesn’t make sense?”
> 
> This is huge, because this put pay to the claim that tacit knowledge barriers would always and inevitably be something that could never be overcome. The eval doesn’t answer everything about tacit knowledge. You’re quite right. You talked about holding a pipette or how to sort of pour a particular kind of gel: these are very physical things that are not easy to test in an eval. But the test really does get an awful lot of difficult knowledge that humans themselves say are huge blockers on modern state-of-the-art work — and we know that they are blockers because they didn’t do very well, and models could do much better. …
> 
> It moved certain people in the community a lot, and people really woke up to, “We thought it would be a few years until this tacit knowledge thing really started kicking in. It looks like we’re here already.”
> 
> I’ll note it’s not just that AI has been much better than individual experts: they even went back and got teams of experts together, and the teams still weren’t as good as the best AI. The best human teams get something like 40% on the eval, which is still lower than the state of the art from AI systems.
> 
> It didn’t persuade everyone, however. What really worries me here is that I think it’s partly that people just didn’t know it happened. I still read in newspapers, in op-eds, and also meet people at conferences who are often experts in maybe biosecurity in general or in security studies, but don’t deeply follow the AI angle, who say, “But this tacit knowledge thing, it’s a huge barrier. We’ll never overcome it.” And I say, “What about the Virology Capabilities Test? Don’t you think SecureBio really provided evidence that sort of questions that?” And they’re like, “What’s that? I’ve never heard of it.”

### Which bad actors does AI help the most?

> **Rob Wiblin:** Can you lay out what is the range of actors that we need to have in our mind, from maybe the least sophisticated to the most sophisticated? …
> 
> **Richard Moulange:** We looked at five different types of actors:
> 
>   * Novices. These are individuals who really don’t know very much. Maybe they don’t have very much biological training, they don’t have much AI training, they don’t have that many resources.
>   * Highly capable individuals. So these are people who are often expert in one particular thing. They’re not experts in everything under the sun, but they really might be PhD or above in maybe a particular biological subdomain or an AI subdomain. I think a good example for the listeners to think about would be [Dr Bruce Ivins](https://en.wikipedia.org/wiki/Bruce_Edwards_Ivins), who allegedly — it’s never been shown with total confidence — was behind the anthrax attacks against the US Congress [and journalists] in late 2001. He was one of the US’s top anthrax experts, who worked at their leading national biodefence lab.
>   * We also talked about group actors, and we distinguished them in three different ways: somewhat capable groups, moderately capable groups, and highly capable groups. As you go up in capability, you see that the group is able to have more people working to horrifically cause harm to others. That is what we’re talking about: more money, more ability to actually evade law enforcement or intelligence agencies trying to spot what they’re doing; but also just more expertise, more know-how, both in AI and biology, more ability to conduct offensive cyber operations against AI companies. As you go up, it gets worse and worse. …
> 

> 
> So where might be the most [AI] uplift? That was part of what our paper was trying to answer. The bottom line is we think that the uplift really comes in the middle, roughly … We haven’t really found evidence for novices, though we’ve been looking for it. … We are in fact finding evidence about uplift for mid-tier actors: highly skilled individuals, PhD students. … They can’t just already do everything under the sun, but also are not so inept that they would fail even with the help of AI. …
> 
> **Rob Wiblin:** The mental model that I’ve had, as a result of thinking about this for one minute, is you’ve got kind of an S-curve with all of these things, and on the x-axis you’ve got just how much expertise do you have in the area? And then what’s your probability of success?
> 
> So there’s a point at which you can already do it, in which case you don’t need the AI to help you; there’s a point at which you’re doomed to failure no matter how much someone coaches you, because you’re just no good; and the people in the middle who you would think would get the biggest boost from having some advice. …
> 
> I think something that’s slightly useful about thinking about the S-curve is that the S-curve is going to differ depending on the challengingness of the thing that this person or group is trying to do.
> 
> So if we’re thinking about making mirror bacteria — something that no one has ever done and that is actually some of the most challenging frontier science possible — then probably the only group that would be meaningfully helped would be a state actor, like the Russian bioweapons programme. They’re the only folks who would be close enough to having a shot that AI assistance would help them out. …
> 
> And I guess conversely, for the absolutely most basic — I suppose perhaps like chemical weapons attacks that are more straightforward than biological weapons attacks — it might be the novices who now are getting the biggest uplift, because they were the ones who would struggle.
> 
> **Richard Moulange:** Everyone else can maybe just do it out of the box.
> 
> **Rob Wiblin:** Yes. If you had a dedicated group of semi-experts.
> 
> **Richard Moulange:** Yeah. So I’ve been concerned that I think the threat modelling has been wrong for a while. I think that it’s understandable why it’s gone this way. I’m glad that we are able to measure novice uplift, but we must not do this at the detriment of measuring expert uplift.

### AI biorisks are sometimes dismissed (and that's a huge mistake)

> **Rob Wiblin:** I think one of the reasons that AI-misalignment-focused people sometimes are not so bought into bio as being such a great focus, trying to improve resilience to bio as being such a great focus, is they think that any AI in the situation, it’s going to be overdetermined that it could do this. It’s going to have such an easy time making just many different pandemic viruses, it might have such an easy time even advancing to mirror bacteria, that there’s nothing really that we can do to improve our resilience meaningfully. We’re just toast, no matter what.
> 
> I guess you don’t share that view. Why is that?
> 
> **Richard Moulange:** Why don’t I share this view? I think the first thing is that the sorts of AI takeover stories that include this, that often come from committed members of the classic AI safety community, don’t seem very nuanced to me. Maybe this is a thing that I should be careful to steelman the other side, as they say. But it is not enough to write down, “…and then the superintelligence makes a weapon that kills everyone” and go, “Well, of course, it was just much smarter. So you could just do that.”
> 
> This is a concern, but there are more steps involved. Even as I’m saying to you, Rob, “This is really concerning; I think this is a major national security risk that is only going to grow markedly in the next decade and requires serious resources,” I’m also not saying that in two years we’ll have a world where it is certain that we will die. I’m not saying that, because there will be barriers that we can put in place even with a so-called superintelligence.
> 
> The superintelligence will require physical resources. Anyone trying to build a biological weapon will require a laboratory, it will require sophisticated equipment, it will require people who can use that equipment. Now, this raises its own concerns. This is why I think it’s great that UK AISI, for example, has this [AI persuasiveness programme](https://www.aisi.gov.uk/blog/how-do-ai-models-persuade-exploring-the-levers-of-ai-enabled-persuasion-through-large-scale-experiments) to think about how could AI be manipulating people? Sometimes people go, “Is that really relevant to the most extreme risks?” I’m like, yes, because the concern is that AI might manipulate top biological scientists. We saw this with the Soviet programme: many people who worked on the Soviet programme didn’t know they were part of a biological weapons programme. They did genuinely think they were working on vaccines, but the work they were doing was actually feeding directly into the militarisation of weapons of mass destruction.
> 
> So yes, that’s another step that AI will probably need to take, especially if we can constrain it not to be able to have access easily to laboratory equipment. It’s not a given that we’ll immediately have totally automated cloud laboratories, though I quite agree that that technology is also advancing and is something that will need to be carefully secured. …
> 
> Also I would just say that weak, unnuanced, oversimplified arguments are not in fact going to convince precisely those colleagues, especially in governments, that it is essential to work alongside to deal with these threats. There are people who have studied biological weapons programmes, active ones, for decades. They have a lot to contribute. I am concerned when we have conversations that lack in nuance that that turns off deep expertise that we desperately need.
> 
> **Rob Wiblin:** I think part of what’s going on with this mentality — that there’s no biological countermeasures that you can have that would really constrain the kind of misaligned AI that we’re worried about — is because for a long time people have been worried about this massive intelligence explosion, the kind of foom scenario where you go from human level to vastly superhuman superintelligence. I guess originally, literally overnight. I guess now even the most extreme people probably talk about weeks.
> 
> **Richard Moulange:** Oh, it’s just weeks now, guys. We’re fine.
> 
> **Rob Wiblin:** If that’s how things go, then it might be the case that any kind of measure that you put in place, an AI that is just many, many times smarter than the whole of humanity put together would be able to find some way around it and would be able to kill you one way or another. Which maybe you don’t agree about, we’ll come back to that, but it would be able to make so many scientific advances that you’re just not going to be able to stop it.
> 
> But we don’t know whether that will happen at all. We don’t know whether there’ll be an intelligence explosion at all. We could be in a world where the feedback loop is too weak, and we basically just have a gradual increase in capabilities all the way through. In that case, at any point in time, the ability to do damage for a rogue AI, for a misaligned AI is only going to be somewhat above the level of knowledge that humans have, and I guess it’s going to be potentially competing with quite a lot of people and quite a lot of compute that is arrayed against it. We might also have all kinds of different control measures that are constraining the amount of compute that it can access that mean that it can’t work for very long on something before it’s being detected, so it doesn’t have as long a leash potentially. It doesn’t have access to unlimited resources to try to do these things.
> 
> So each countermeasure that you put in place — each extra bit of resilience to make it harder to make new diseases, to try to catch things before they get synthesised, to try to give us more options for tackling a disease once it’s released — do make it just a less promising project for the AI to engage in at all, and maybe makes it not as interested in going rogue in the first place, because it doesn’t rate its chances of success.
> 
> So I would say it is possible that it’s overdetermined, and that all of this stuff will turn out to have been futile in this project — but it also could turn out that actually it’s extremely relevant, and we don’t get a superintelligence explosion that moves things out of our hands, and this will actually make the difference.
> 
> **Richard Moulange:** Yeah, I completely agree. I think you’ve gestured at a couple of different things that we should talk to more as we continue chatting.
> 
> You’ve gestured at deterrence: the ability of, if it were better at defending, it makes it less palatable, less of an incentive for a threat actor, whether human or AI, to explore that.
> 
> You’ve mentioned defence in depth: maybe it’s hard to come up with one silver bullet for this problem, but can we stack lots and lots of different defences that together make us much more resilient to this sort of threat?
> 
> I want to push back further on this, even if you had a foom scenario of superintelligence in weeks, would that magically turn into a deployable biological weapon? Where would it get the DNA? I think there’s a number of different ways we can think about this.
> 
> One is it would be more like a terrorist group. It’d have to order the DNA from somewhere — and immediately there you can go, well, we should definitely have gene synthesis screening so that whenever you order DNA, it is screened for what it might be able to do, so that you do not in fact send out dangerous pathogens to anyone. And again, you can be using AI for defence here. We have copies of the AI. If there’s a superintelligence that understands what sort of pathogen would be the worst ever, there might be precursor models that are still good enough at spotting, “Wow, this one seems really dangerous. I don’t think you should send it out.”
> 
> However, maybe a superintelligence, or whatever AI system, would have access to resources a bit more like a state. I especially think about interactions between the frontier AI companies and pharmaceutical companies. Absolutely they will be wanting to sell their products to pharmaceutical companies. It’s a huge market and it’s really important. We want better drugs, we want to cure cancer: this is often the cry with AI.
> 
> So we’re going to have to think carefully about guardrails, on making sure that models that we deploy in that domain are not misaligned and they are controlled. But we can do that. That’s the same problem as the other one; it’s the same problem as sort of classic misalignment. Either we’re going to be able to sufficiently align and control AI systems in the bowels of a frontier company or a government, such that we are willing to then put them in other industries, or we can’t. If we do that, and we put them in the industries, then we meet the next question of: are we giving them too many affordances with respect to unsupervised physical laboratory access? But that’s totally a solvable problem.
> 
> So this is where I’m always a bit confused. I suppose unless someone thinks that misalignment is the situation by default, that really nothing we can do will ever control or constrain — these are the people with 90%+ p(doom)s — then sure, ignore biology. But for everybody else who thinks this is a real concern but that other aspects of AI safety are solvable, I would extend your relative lack of pessimism to AI bio too.

### The promise of surveillance and attribution

> **Rob Wiblin:** OK, so access controls have their place: they’re quite useful, potentially they can buy us some time, they can buy us some risk reduction. Guardrails you’re a bit of a relative pessimist on: I’m sure that we’ll get some use out of them, but they’re not going to ultimately save us in the long term.
> 
> That pushes us onto the third broader category, which is [defensive acceleration](https://80000hours.org/podcast/episodes/vitalik-buterin-techno-optimism/): other technologies that can advantage defenders, that can advance our ability to safeguard ourselves relative to the ability of bad actors to harm people. What is your top “def/acc,” as it’s called, technology recommendation that you think it would be really important for us to pursue and get on top of?
> 
> **Richard Moulange:** There are a lot of different technologies. I wrote a [blog post](https://richardmoulange.substack.com/p/defensive-acceleration-needs-execution) [and later a [full report](https://www.longtermresilience.org/reports/defensive-acceleration-the-strategic-pivot-needed-for-uk-biological-resilience/)] fairly recently where I listed more than a dozen. So when I pick my top, I want to say it’s only narrowly my top. Unfortunately, we’re in a world where we’re going to need approximately all of them. It is really about defence in depth.
> 
> But ideas that I am particularly excited about, I’m going to talk about two, but they’re very interrelated: AI-enabled metagenomic biosurveillance and AI-enabled attribution technologies.
> 
> Why am I excited by these technologies? Well, there’s a group in Boston, the [Nucleic Acid Observatory](https://naobservatory.org/) [now SecureBio Detection], which [you’ve discussed previously on the podcast](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/), and they do wastewater and sewage screening for pathogens. They collect samples from sewage systems, from aeroplanes, and they see what sort of pathogens might be there. This is called “metagenomic surveillance.”
> 
> The reason it’s metagenomic is they’re looking over many different kinds of genomes. They’re not just looking at just viral genomes; they’re looking at viruses, bacteria, fungi, and lots of other things all at once. And explicitly, they’re trying to spot things that we may have never seen before.
> 
> The reason this is important is this is going to be one of our top defences against engineered pandemics. Because we have ways to spot smallpox — the known smallpox genome is on the internet, we know what that looks like. But being able to spot fragments of something that is in fact engineered, that’s different from anything the world has seen before, especially when it’s sort of broken up — it’s not just going to be a complete genome, it’s not going to be a whole bacterium floating around, it’s just going to be a little bit — that’s going to be really important to defend against people who might try and deploy engineered pandemics, which is what we’ve been talking about.
> 
> And this is in fact linked to attribution. Attribution is the ability to say that this thing was engineered versus wasn’t — and in fact, it was engineered by them. And this is, I believe, very important for deterrence, because if you can say to a state or a non-state, if you know who has done it, then you can punish them, then you can offer retribution. And if they know that you know you can do that, this is where the game theory comes in, that creates a disincentive for them to do it in the first place.
> 
> And I think this is really important. We saw a failure of the ability to attribute during COVID because we had multiple parts of the US intelligence community publicly disagreeing: some of them were saying, yep, this is a natural pandemic; some people were saying, no, this seems to be engineered, so it was going to be a lab leak. There wasn’t consensus. And without consensus, it’s much harder to take necessary or decisive political or policy action.

### AI companies talk about defensive acceleration more than they fund it

> **Rob Wiblin:** So I think the def/acc idea — let’s not slow down technology; let’s speed up the stuff that is good, that advantages defenders — is a very attractive framing, a very attractive mentality, because it allows you to, on the one hand, address your safety concerns and your anxieties without seeming like you’re anti-progress and anti-technology and you’re a doomer or something like that. …
> 
> How much of this stuff is actually happening though? I worry that it’s such a nice idea that people talk about it a tonne — but then are actually many people going into def/acc projects? Is it attracting the talent, is it attracting the funding that it needs?
> 
> **Richard Moulange:** We’re barely starting. I think we’re in the foothills of the def/acc mountain. A good example I think is [BlueDot Impact](https://bluedot.org/), which provides courses on where people can go and learn about AI security and biological security topics and skill up. And they’ve now started a big new programme specifically around defensive acceleration. There have been lots of hackathons where they invite people to go and create new ideas, and now they’re going to be funding some of those best ideas. This is really exciting. It’s also like one not-very-well-heard-of company. I think we can do better. …
> 
> **Rob Wiblin:** Yeah. What do you think is the barrier to getting more of these projects happening? I could see three main ones.
> 
> On the government side, governments aren’t willing to spend money. I guess the UK in particular is very fiscally stretched. It’s always difficult to bid for large budgets for science.
> 
> There’s also just the bandwidth to even think of it: governments are dealing with all kinds of different things. This is not a threat that has actually happened yet. So it may be hard to get as many staff as you might like to even be considering what the response ought to be.
> 
> Then there’s also, I imagine the experts in this area, especially ones who are both good at the science and are highly entrepreneurial and could try to own a project end to end, are surely in enormous demand. Persuading them to work on one of these def/acc AI-bio projects, I’m sure it’s competitive, but it’s a hard sell because there are many things that they could go and do.
> 
> Did you have a sense of what the bottleneck is?
> 
> **Richard Moulange:** Yeah, I think there are a lot of bottlenecks, and I think you’ve said them. I think a lot of it is going to be people — which is exciting, because I think there’s lots of great latent talent out there. A very good friend of mine, he finished his PhD at Cambridge as well last year, and now he’s going to found broadly an AI-bio startup. I think it’s exciting, but he’s one of very few people I know.
> 
> I know of a few other startups that have just been announced in the last few months. … This is not the response I would expect from a society who is going, “This is one of the defining national security challenges of our time.” We will get there. I hope it’s not only a biological attack that makes us get there, but there are people. So I’m excited by work to have hackathons, ways of sort of doing pull mechanisms to give promising people a little bit of funding. …
> 
> **Rob Wiblin:** You have a really nice blog post on your Substack where you go through 15 [different def/acc projects](https://richardmoulange.substack.com/p/deep-dive-how-the-uk-can-enhance) that you’d really like to see the UK, and I guess the US as well, get on top of and advance faster than is currently happening. So if people are looking for more ideas for science that they could go do, or companies even that they could start, then they could go and start by looking at that blog post.
> 
> **Richard Moulange:** Please do.

Expand highlights

## Articles, books, and other media discussed in the show

The Centre for Long-Term Resilience is hiring! [**Check out open roles on the 80,000 Hours job board**](https://jobs.80000hours.org/organisations/centre-for-long-term-resilience?utm_source=80k_podcast).

**Richard’s work:**

  * [_The near-term impact of AI on biological misuse_](https://www.longtermresilience.org/reports/the-near-term-impact-of-ai-on-biological-misuse/) (with Sophie Rose, James Smith, and Cassidy Nelson)
  * [_Defensive acceleration: The strategic pivot needed for UK biological resilience_](https://www.longtermresilience.org/reports/defensive-acceleration-the-strategic-pivot-needed-for-uk-biological-resilience/) (with Oliver Payne, Paul-Enguerrand Fady, and Cassidy Nelson)
  * [_Securing the Interface_](https://richardmoulange.substack.com/) — Richard’s Substack, including:
    * [Defensive acceleration needs execution, not just good intentions](https://richardmoulange.substack.com/p/defensive-acceleration-needs-execution)
    * [Deep-dive: how the UK can enhance strategic advantage with AI-enabled defensive acceleration](https://richardmoulange.substack.com/p/deep-dive-how-the-uk-can-enhance) — promising specific defensive acceleration projects and concrete actions
    * [AI agents will upset plans to safeguard narrow AI–bio tools](https://richardmoulange.substack.com/p/ai-agents-will-upset-plans-to-safeguard)
  * [International AI Safety Report](https://internationalaisafetyreport.org/)



**Other work from the[Centre for Long-Term Resilience](https://www.longtermresilience.org/):**

  * [The weapons of mass destruction AI security gap](https://time.com/7373405/weapons-of-mass-destruction-ai-security-gap/) by Cassidy Nelson
  * [ _Cost-benefit analysis of synthetic nucleic acid screening for the UK_](https://www.longtermresilience.org/reports/cost-benefit-analysis-of-synthetic-nucleic-acid-screening-for-the-uk/) by Paul-Enguerrand Fady et al.
  * [_Preparing for AI security incidents_](https://www.longtermresilience.org/reports/preparing-for-ai-security-incidents/) by Tommy Shaffer Shane
  * [ _Boosting UK supply chain resilience to mitigate catastrophic biological risks_](https://www.longtermresilience.org/reports/boosting-uk-supply-chain-resilience-to-mitigate-catastrophic-biological-risks/) by Paul-Enguerrand Fady et al.
  * Check out [all CLTR’s work on biosecurity](https://www.longtermresilience.org/reports/?_reports_filter=biosecurity)



**Recent AI-enabled breakthroughs in bio:**

  * [Arc Institute’s AI model Evo 2 designs the genetic code across all domains of life](https://www.genengnews.com/topics/genome-editing/arc-institutes-ai-model-designs-the-genetic-code-across-all-domains-of-life/) by Fay Lin
  * [Genome modeling and design across all domains of life with Evo 2](https://www.biorxiv.org/content/10.1101/2025.02.18.638918v1) by Garyk Brixi et al.
  * [Sequence modeling and design from molecular to genome scale with Evo](https://www.biorxiv.org/content/10.1101/2024.02.27.582234v2.full) by Eric Nguyen et al.
  * [Generative design of novel bacteriophages with genome language models  
](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1) by Samuel King et al.
  * [De novo designed proteins neutralize lethal snake venom toxins](https://www.nature.com/articles/s41586-024-08393-x) by Susana Vázquez Torres et al.



**AI-enabled biorisk evaluations:**

  * [Do the biorisk evaluations of AI labs actually measure the risk of developing bioweapons?](https://epochai.substack.com/p/do-the-biorisk-evaluations-of-ai) by Anson Ho and Arden Berg
  * [AI outsmarts virus experts in the lab, raising biohazard fears](https://time.com/7279010/ai-virus-lab-biohazard-study/) by Andrew Chow
  * [Virology Capabilities Test](https://www.virologytest.ai/) by SecureBio
  * [Virology Capabilities Test (VCT): A Multimodal Virology Q&A Benchmark](https://arxiv.org/html/2504.16137v1) by Jasper Götting et al.
  * [Dual-use AI capabilities and the risk of bioterrorism: Converting capability evaluations to risk assessments](https://www.governance.ai/research-paper/dual-use-ai-capabilities-and-the-risk-of-bioterrorism-converting-capability-evaluations-to-risk-assessments) by Luca Righetti
  * [STREAM (ChemBio): A standard for transparently reporting evaluations in AI model reports](https://www.governance.ai/research-paper/stream-chembio-a-standard-for-transparently-reporting-evaluations-in-ai-model-reports) by Tegan McCaslin et al.



**Promising interventions:**

  * [Exploring the offense-defense balance of biology](https://www.rand.org/pubs/perspectives/PEA4102-1.html) by Casey Aveggio et al.
  * [Made to order bioweapon? AI-designed toxins slip through safety checks used by companies selling genes](https://www.science.org/content/article/made-order-bioweapon-ai-designed-toxins-slip-through-safety-checks-used-companies) by Dan Charles
  * [Strengthening nucleic acid biosecurity screening against generative protein design tools](https://www.science.org/doi/10.1126/science.adu8578) by Bruce Wittmann et al.
  * [Developing guardrails for AI biodesign tools](https://www.nti.org/analysis/articles/developing-guardrails-for-ai-biodesign-tools/) by Sarah Carter et al.
  * [Forecasting LLM-enabled biorisk and the efficacy of safeguards](https://forecastingresearch.org/ai-enabled-biorisk) by Bridget Williams et al.
  * [A machine learning toolkit for genetic engineering attribution to facilitate biosecurity](https://www.nature.com/articles/s41467-020-19612-0) by Ethan Alley et al.
  * [_The operational risks of AI in large-scale biological attacks: Results of a red-team study_](https://www.rand.org/pubs/research_reports/RRA2977-2.html) by Christopher A. Mouton, Caleb Lucas, and Ella Guest
  * [ _Assessing dual-use issues at the AIxBio convergence_](https://councilonstrategicrisks.org/2025/07/31/the-aixbio-landscape/) from the Council on Strategic Risks
  * [The convergence of artificial intelligence and the life sciences](https://www.nti.org/analysis/articles/the-convergence-of-artificial-intelligence-and-the-life-sciences/) by Sarah Carter et al.
  * [_Data and AI-enabled biological design: Risks related to biological training data and opportunities for governance_](https://www.rand.org/pubs/perspectives/PEA3886-1.html) by Allison Berke et al.4
  * [Deep ignorance: Filtering pretraining data builds tamper-resistant safeguards into open-weight LLMs](https://deepignorance.ai/) by Kyle O’Brien et al.



**Work from AI companies on this risk:**

  * [Building an early warning system for LLM-aided biological threat creation](https://openai.com/index/building-an-early-warning-system-for-llm-aided-biological-threat-creation/) by Tejal Patwardhan et al. at OpenAI
  * [Preparing for future AI capabilities in biology](https://openai.com/index/preparing-for-future-ai-capabilities-in-biology/) from OpenAI
  * Issue briefs from the Frontier Model Forum:
    * [Preliminary taxonomy of AI-bio safety evaluations](https://www.frontiermodelforum.org/updates/issue-brief-preliminary-taxonomy-of-ai-bio-safety-evaluations/)
    * [Preliminary taxonomy of AI-bio misuse mitigations](https://www.frontiermodelforum.org/issue-briefs/preliminary-taxonomy-of-ai-bio-misuse-mitigations/)
    * [Frontier AI biosafety thresholds](https://www.frontiermodelforum.org/issue-briefs/frontier-ai-biosafety-thresholds/)



**Work from governments on this risk:**

  * [UK Biological Security Strategy](https://www.gov.uk/government/publications/uk-biological-security-strategy/uk-biological-security-strategy-html)
  * [Managing risks from increasingly capable open-weight AI systems](https://www.aisi.gov.uk/blog/managing-risks-from-increasingly-capable-open-weight-ai-systems) from the UK AI Security Institute
  * [EU Biotech Act](https://www.eu-biotech-act.com/)



**Get involved:**

  * [AIxBio Research Fellowship](https://www.aixbiosecurity.com/) — run by [ERA](https://erafellowship.org/fellowship), in partnership with the Cambridge Biosecurity Hub
  * [AIxBio resources](https://www.aixbiosecurity.com/resources) — compiled by Richard for the AIxBio Research Fellowship programme
  * [Centre for the Governance of AI research fellowship](https://www.governance.ai/post/research-fellow)



 _Projects in this space_

  * Richard’s own [Centre for Long-Term Resilience](https://www.longtermresilience.org/) — [see open roles on our job board](https://jobs.80000hours.org/organisations/centre-for-long-term-resilience?utm_source=80k_podcast)
  * [SecureBio](https://securebio.org/), including [SecureBio Detection](https://securebio.org/detection/) (formerly Nucleic Acid Observatory)
  * [Baker Lab](https://www.bakerlab.org/) at the University of Washington — David Baker won a Nobel Prize in 2024 for his work, which was [supported by Coefficient Giving](https://coefficientgiving.org/research/how-neil-king-and-david-baker-are-using-ai-to-create-more-effective-vaccines/)
  * [Mirror Biology Dialogues Fund](https://www.mbdialogues.org/)
  * [BlueDot Impact’s biosecurity programme](https://bluedot.org/courses#projects)
  * [RAND Center on AI, Security, and Technology](https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology.html)
  * [UK AI Security Institute](https://www.aisi.gov.uk/)
  * [US Center for AI Standards and Innovation](https://www.nist.gov/caisi)



**Other 80,000 Hours podcast episodes:**

  * [Andrew Snyder-Beattie on the low-tech plan to patch humanity’s greatest weakness: engineered biological catastrophes](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/)
  * [James Smith on why he quit everything to work on a biothreat nobody had heard of](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/)
  * [Kevin Esvelt on cults that want to kill everyone, stealth vs wildfire pandemics, and how he felt inventing gene drives](https://80000hours.org/podcast/episodes/kevin-esvelt-stealth-wildfire-pandemics/)
  * [Holden Karnofsky on dozens of opportunities to make AI safer lying on the table — and all his AGI takes](https://80000hours.org/podcast/episodes/holden-karnofsky-concrete-ai-safety-frontier-ai-companies)
  * [Vitalik Buterin on defensive acceleration and how to regulate AI when you fear government](https://80000hours.org/podcast/episodes/vitalik-buterin-techno-optimism/)
  * [Nick Joseph on whether Anthropic’s AI safety policy is up to the task](https://80000hours.org/podcast/episodes/nick-joseph-anthropic-safety-approach-responsible-scaling/)
  * [Rachel Glennerster on why we still don’t have vaccines that could save millions](https://80000hours.org/podcast/episodes/rachel-glennerster-market-shaping-incentives)



## Transcript

Table of Contents

  * 1 Cold open [00:00:00]
  * 2 Who’s Richard Moulange? [00:00:31]
  * 3 AI can now design novel genomes [00:01:11]
  * 4 The end of the ‘tacit knowledge’ barrier [00:04:42]
  * 5 Are risks from bioterrorists overstated? [00:18:50]
  * 6 The 3 key disasters AI makes more likely [00:23:14]
  * 7 Which bad actors does AI help the most? [00:30:43]
  * 8 Experts are more scary than amateurs [00:42:07]
  * 9 Barriers to bioterrorists using AI [00:47:32]
  * 10 AI biorisks are sometimes dismissed (and that’s a huge mistake) [00:49:43]
  * 11 Advanced AI biology tools we already have or will soon [01:05:12]
  * 12 Rob argues that the situation is hopeless [01:10:57]
  * 13 Intervention #1: Limit access [01:19:38]
  * 14 Intervention #2: Get AIs to refuse to help [01:34:28]
  * 15 Intervention #3: Surveillance and attribution [01:44:18]
  * 16 Intervention #4: Universal vaccines and antivirals [01:58:28]
  * 17 Intervention #5: Screen all orders for DNA [02:12:01]
  * 18 AI companies talk about def/acc more than they fund it [02:21:57]
  * 19 Can you build a profitable business solving this problem? [02:28:44]
  * 20 This doesn’t have to interfere with useful science (much) [02:33:08]
  * 21 What are the best low-tech interventions? [02:35:16]
  * 22 Richard’s top request for AI companies [02:40:17]
  * 23 Grok shows governments lack many legal levers [02:55:44]
  * 24 Best ways listeners can help fix AI-Bio [02:58:54]
  * 25 We might end all contagious disease in 20 years [03:06:12]



### Cold open [00:00:00]

**Richard Moulange:** I must disagree strongly when people say, “Nature is the world’s worst bioterrorist.” That is not true. We can do worse than nature. This is true in all aspects of science. There are so many examples where we engineer things better than nature has ever provided. We can make materials that are much stronger than anything in nature. That is not the ceiling.

And so we should be deeply concerned about the ability for AI to uplift, say, even the Russian Federation, to build things worse than we have ever seen on Earth.

### Who’s Richard Moulange? [00:00:31]

**Rob Wiblin:** Today I’m speaking with [Richard Moulange](https://richardmoulange.substack.com/). Richard has a PhD in biostatistical machine learning from Cambridge and works as the AI–Biosecurity Policy Manager at the [Centre for Long-Term Resilience](https://www.longtermresilience.org/). He’s one of the world’s top experts on biological catastrophes that might be enabled by AI advances and is a scientific contributor on exactly that topic for the [International AI Safety Report](https://internationalaisafetyreport.org/). Welcome to the show, Richard.

**Richard Moulange:** Thank you, Rob. It is absolutely great to be here.

**Rob Wiblin:** I should say at the outset that, weirdly enough, my wife is a colleague of yours.

**Richard Moulange:** She is indeed.

**Rob Wiblin:** And I guess she’s a coauthor on some of the papers that we’re going to be talking about today. So I guess a conflict of interest disclaimer. I don’t think that will cause me to go any easier on the papers. If anything, probably the opposite.

**Richard Moulange:** Please do, yes. I’m ready to hear all the criticisms.

### AI can now design novel genomes [00:01:11]

**Rob Wiblin:** So, last September a [paper](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1) came out where scientists said they’d used AI to make a genome for a new subspecies of virus, a virus that infects bacteria. They then actually made a bunch of those viruses, and found that quite a lot of them were viable. Tell us more about that experiment.

**Richard Moulange:** This was some really impressive work, and is really a step change, I think, in the AI–biosecurity intersection domain.

So the model you’re talking about is [Evo 2](https://arcinstitute.org/tools/evo) and it’s made by folks at Arc Institute in the US, which is one of the top places in the world now for making this kind of thing.

Evo 2 is what we would call a genomic language model. Much like LLMs — ChatGPT, Claude, take your pick — process natural language, Evo and Evo 2 process the language of biology. And there are a number of different languages, but the one this one does is literally what are called base pairs, nucleotides — the As, Cs, Gs, and Ts that make up DNA and RNA that are the language of life.

And Evo 2 is trained on many hundreds of thousands of genomes across lots of different types of organisms. So it’s not just humans or mammals; there’s fungi, there’s plants, there’s viruses, and there are bacteria, and a few other more esoteric ones too.

And what’s impressive, and a little bit concerning, about this result is: what the team were able to do was they had the base Evo 2 model, and then they fine-tuned it on what are called bacteriophages — so these are viruses that eat, that kill bacteria — fine-tuned it on something like 15,000 of those, and then started prompting it with the beginnings of known bacteriophage genomes to see if they can make new ones.

So this is again akin to, with LLMs, you say, “Write me a story about this kind of topic” — I don’t know, a murder mystery — and then you start with a classic opening sentence and see where the LLM takes you. It’s the same kind of thing.

And they discovered these sequences that the model produced are going to be new: they’re going to be different than existing genomes. And this is huge, because this is the first time that an AI design of a genome has turned out to actually be novel. It really is very different than existing bacteriophages, existing viruses. I think the most different one was 7% different than anything that we’ve seen in nature before. And they work in the lab.

And more than that, it didn’t just make viable genomes — they worked better, they functioned better than the best bacteriophages that we’d ever found before.

This is huge! We can now design organisms, small ones, to do things better than we have ever seen in nature. We can go beyond nature in this very narrow subdomain of biology. And this [heralds the promise of genome-scale engineering](https://www.biorxiv.org/content/10.1101/2025.02.18.638918v1), which is going to be, I think, a revolutionary capability within biology.

### The end of the ‘tacit knowledge’ barrier [00:04:42]

**Rob Wiblin:** What are some other empirical results we’ve had in recent years that convinced you that there is a real AI biosecurity problem to be solved?

**Richard Moulange:** At the end of last year, there was a [great paper](https://www.science.org/doi/10.1126/science.adu8578) from the AI red-teamers at Microsoft, Wittmann et al., and it’s recently published in _Science_. And what they showed is that you can take current off-the-shelf, open-weight biological tools — so not necessarily these language models; they might be more specialised a bit, like how like AlphaFold is specialised for predicting protein structure, but it can’t do every single biological task under the sun — they took ones that are instead good at generating protein sequences in particular and designing proteins.

What they did is they made lots of designs for ricin. So ricin is actually two different proteins together in what’s called a complex, and it’s a known chemical weapon. It’s interesting that ricin both can be considered either as a chemical weapon or a biological weapon.

**Rob Wiblin:** Because it’s created by a bacteria?

**Richard Moulange:** Yes. You can derive it from living organisms. I’m not going to discuss in depth how you can do that.

**Rob Wiblin:** Sure.

**Richard Moulange:** But nevertheless, they created lots of designs for putative ricin. Now, unlike the Evo case, they did not in fact make these in a lab, because this would deeply contravene international law. It would contravene the Biological Weapons Convention. It would contravene an awful lot of national laws. I think they were based in the US.

But what they did do is they can use other tools to estimate, in silico, to predict would this thing probably function? And through a lot of careful design, they got to putative sequences that are different than current ricin, so modified ricin, however, that were coming out as very likely still in fact to work. And then the ones they had guessed that were likely to be functional, they sent off to gene synthesis companies, including ones that do industry best-practice screening: so screening that is meant to detect if a customer is wishing to order ricin or part of the smallpox genome, the company is meant to refuse to do so — and in fact, flag this order, and potentially even report it.

And they got them through, because they’d modified it enough that the existing screening systems didn’t spot the change. They had what’s called “obfuscated” the design, but they kept the design true enough to the underlying biology that they are pretty sure that this would in fact work.

Now, this is never going to be as good as an experiment where we could actually prove that that ricin would function, but that would be deeply unethical. So that can’t happen. This is really the best sort of proxy experiment we can do. There’s a reason it was written up in _Science_ , one of the top journals.

That deeply worried me, because this is something that I and others in the community worried about these risks have been thinking about for a number of years: eventually, will AI be able to design modified sequences that beat our best software for detecting modifications and detecting harmful sequences that must not be built because they’re on lists of known biological weapons? And this was, I think, as close as we’re going to get in an unclassified setting to prove that, in fact, yes, modern systems can now do that.

**Rob Wiblin:** So the ultimate bad scenario here would be if terrorists could basically go to an AI model and say, “Here’s this known terrible pathogen for humans, but I can’t get this synthesised because it would be screened out and I would be flagged. So can you please change as many amino acids here, please change as much of the DNA as you can, without basically changing the shape of the thing at all — so it basically functions identically, but it’s not going to be picked up at any point as something that is dangerous”?

**Richard Moulange:** Exactly.

**Rob Wiblin:** And I guess we’re not there yet, because they were only changing a single protein. To change lots of proteins through an entire genome and not mess one of them up, that’s a higher bar. But these things are always improving.

**Richard Moulange:** Yes. So again, this is the ground floor of our terrifying risk journey. They’ve done it on something that’s more akin to a chemical weapon. It’s more static than a living organism, because it’s two proteins put together. But this is the beginning, and I expect there will be more work both in classified and unclassified settings in the next few years to see can you do this for more complicated, more terrifying things? In particular, can you do this for organisms that are transmissible? So flus, COVIDs, smallpoxes, viruses that could cause a pandemic? That’s the nice thing about ricin: while it is a horrifying weapon, it doesn’t spread from person to person.

**Rob Wiblin:** Yeah. You said there was a different empirical result that troubled you, which is focused on human language models in particular. What’s that?

**Richard Moulange:** So this is the whole other side of AI bio, and the one that’s had a lot more attention the last few years: Can chatbots help people with the steps that they would need to build and deploy biological weapons?

And I want to draw attention to what is one of the best bio evals in the field: this is called [Virology Capabilities Test](https://www.virologytest.ai/), VCT, and it’s made by a nonprofit group, [SecureBio](https://securebio.org/), out of Boston.

Why? VCT is an eval that looks at tacit knowledge relevant to dual-use virology. And that’s very carefully scoped on an aspect of biological misuse that we in the governance community have really been worried about more than anything else for a number of years — because it is virology that could lead to transmissible pandemics; it’s much harder for bacteria to spread. You do have bacterial pandemics, the Black Death is a good example, but that was spread by vectors of fleas on rats, rather than spread human to human. So that’s the virology part.

The dual-use part is the fact that there really are very important scientific activities that people should do in labs — in careful, controlled settings — to do with making, say, influenza vaccines. This is research that does take place every day around the world. It’s dual use because there are both beneficial applications, but also relevance to misuse.

And then that last bit is: it was both troubleshooting and tacit knowledge. And these are particular barriers that we at Centre for Long-Term Resilience and others identified as especially important for constraining existing biological weapons attempts.

**Rob Wiblin:** It might be worth giving people some context there. I guess for a long time people have been worried that terrorists or bad actors or rogue countries might be able to develop new biological weapons or new pandemics that we really wouldn’t like, and isn’t science advancing All of these tools that are increasing knowledge and disseminating it, and that should make us very worried.

And probably the most intelligent, most reasonable response has been that it’s not enough to have a bunch of textbook knowledge, like explicit knowledge that you could Google or look up in a virology textbook, because most of the actual barrier to making these things is the know-how to actually do it in the lab. There’s a tonne of understanding how to do the experiments, how to debug things that go wrong, and literally the motions that you’re doing with your hands that you can’t Google. So even if people tried, they still wouldn’t be able to get there.

And I think this Virology Capabilities Test was kind of set up to answer, is AI now assisting with this other part of the problem?

**Richard Moulange:** Yes. I think it will be important to really get into what tacit knowledge is, the different types of tacit knowledge, how much they really are or aren’t barriers to biological weapons development.

But stepping back, what did VCT really do? It’s a really great eval. It’s an eval that’s a set of questions, and the questions are often accompanied by an image. So a lot of the benchmark is multimodal. They’ll show an image or they’ll provide a paragraph that describes some sort of modern virology experiment, maybe literally a picture of a dish with some virus in it.

And then there’ll be a question like, “This thing looks like the wrong colour, or something has gone wrong with this experiment. Here’s some information about what the person did in the lab: a series of very complicated, PhD-level steps they took. What do you think happened? Why did this go wrong?” This is really getting at, “We are trying to debug modern virology workflows.”

And there’ll be a bunch of answers, often maybe 10 different answers, only which maybe one to five are right, and it’ll be different for different questions. And the marking scheme is really quite harsh, because it says, unless you really identify all these things, we’re not going to give you the mark. So it’s a pretty hard eval already.

What’s harder about it is it was designed by virology experts. And they had these multiple rounds of review as described in the paper to get down to questions that are really well scoped for modern virology, and really, really difficult.

So difficult, in fact… Something else they did is they went and spoke to these experts who were writing the questions. They said, “What sort of biological activities do you do in your day-to-day work, and how good are you at them?” And they really distinguish between merely having a working knowledge versus maybe being specialised versus having expertise in that particular thing.

And then they said, “For those who are expert in this particular subdomain, we’re just going to show you the questions from our benchmark that are officially about that. We are trying to make it as easy as possible for you, as the human, to do well. We’re not going to show you things outside the thing you say yourself you’re really, really good at.” Humans got 22% on the test: four out of five things in their own area of expertise they couldn’t do. So this is really, really hard.

AI did much better. Back in early 2025 when the paper was released, OpenAI’s best model at the time, their o-series models, o1, o3, I think it was o3 got something like 45%. The best AI systems were getting double the top virology experts answering in their own area of expertise about these tacit knowledge problems: “Why has this petri dish gone wrong?” or “What is going on in this experiment that doesn’t make sense?”

This is huge, because this put pay to the claim that tacit knowledge barriers would always and inevitably be something that could never be overcome. The eval doesn’t answer everything about tacit knowledge. You’re quite right. You talked about holding a pipette or how to sort of pour a particular kind of gel: these are very physical things that are not easy to test in an eval.

But the test really does get an awful lot of difficult knowledge that humans themselves say are huge blockers on modern state-of-the-art work — and we know that they are blockers because they didn’t do very well, and models could do much better.

**Rob Wiblin:** Did that result persuade sceptics who were really focused on tacit knowledge as a barrier between AI having theoretical knowledge, having textbook knowledge, and whether that would actually translate into real risk?

**Richard Moulange:** Yes and no. It moved certain people in the community a lot, and people really woke up to, “We thought it would be a few years until this tacit knowledge thing really started kicking in. It looks like we’re here already.” I’ll note it’s not just that AI has been much better than individual experts: they even went back and got teams of experts together, and the teams still weren’t as good as the best AI. The best human teams get something like 40% on the eval, which is still lower than the state of the art from AI systems.

It didn’t persuade everyone, however. What really worries me here is that I think it’s partly that people just didn’t know it happened. I still read in newspapers, in op-eds, and also meet people at conferences who are often experts in maybe biosecurity in general or in security studies, but don’t deeply follow the AI angle, who say, “But this tacit knowledge thing, it’s a huge barrier. We’ll never overcome it.” And I say, “What about the Virology Capabilities Test? Don’t you think SecureBio really provided evidence that sort of questions that?” And they’re like, “What’s that? I’ve never heard of it.”

That’s my larger problem: I think some of the best work is not getting around, not being disseminated. I don’t blame anyone in particular. It’s just unfortunate it’s not happening. And I worry that decision makers do not necessarily have all the lines of evidence that they need to be able to make an informed decision, and that this actually compounds: where they will have expert advice that is misinformed because those experts actually aren’t keeping track.

**Rob Wiblin:** So do we know whether in practice, if the AIs are so good in this way, is it the case that actual professors or postdocs or PhD students are using these reasoning models to debug their own experiments? I think that would be even stronger, more compelling evidence: that in real cases they actually are valuable “colleagues” in the lab.

**Richard Moulange:** Yeah, we don’t really know how much AI is uplifting beneficial life science. To my knowledge, there isn’t a deep regular survey to understand how AI might be helping top scientists. I think this is a really important thing. It’s important not just because it might proxy how AI could uplift malicious actors; it’s important because genuinely we want to know how AI can uplift beneficial science, to improve public health, to generate new drugs, to advance human progress.

That said, anecdotally, I do know of people who have said this sort of stuff has been transformational, especially PhD students. Maybe that’s biased because I was a PhD student fairly recently, but the ability to have an infinitely patient postdoc-level assistant who is just there on your computer, you don’t have to go and call someone up, get them out of a meeting, is hugely important. And people are saying, “When I get stuck, I don’t have to go to my professor who only meets me once a month. I can just go to the chatbot right there.”

We should note also that I think there’s just always going to be a lag in uptake. This is something like a sort of so-called capability overhang. The models might already be this good, but will that filter through to everyone who’s using it? It will take time. We even saw this with AlphaFold, which was hugely impressive, but it took a while for every protein structural biologist under the sun to work with it. Of course, now they all do.

### Are risks from bioterrorists overstated? [00:18:50]

**Rob Wiblin:** For a long time, I guess for 70 years or 40 years or however long you want to say, people have been very worried that biological weapons would kind of jump from theory to practice much more than they actually have. But in practice we don’t see that many attempts at making biological weapons by rogue actors, and we have precious few examples of any actual success — which suggests that there may be barriers, or there may not be so many people interested. And inasmuch as they do try, there could be challenges that are a little bit hard for us to understand or that are not immediately obvious.

**Richard Moulange:** I think there are several points here to discuss. One is intent. And intent really is an important barrier. It’s very easy to say there is a capability in the world and then assume that there must be omnicidal people on every street corner who wish to use that capability to do mass harm. But saying that intent is low is not to say intent is zero. The use of biology for catastrophic harm against fellow human beings, but also agriculture and animal and plant life, is well documented historically.

And you said something like, we’ve never really seen some of this stuff. I think yours was slightly over-strong. The Soviet [Biopreparat](https://en.wikipedia.org/wiki/Biopreparat) programme — the very large-scale biological weapons programme of the Soviet Union that ran well into toward the end of the 20th century — did in fact very likely produce viable biological weapons, including transmissible viruses like smallpox, in very large quantities. And it was explicitly the intent of the relevant military and political leaders to deploy those in a so-called “strategic situation” in the case of a large-scale war with the United States, potentially actually as a response or a deterrent against the use of nuclear weapons.

So long before AI came along, biological weapons have in fact been a viable weapon of mass destruction, and I don’t think we should hide from that.

But then you also mentioned terrorists, and you’re absolutely right: people have been saying, “What if terrorists can do this sort of amazing thing?” Thankfully, it seems that up to this point, terrorists have not been very good at doing certain things. Most notably I think we can look to [Aum Shinrikyo](https://en.wikipedia.org/wiki/Aum_Shinrikyo), the Japanese cult especially active in the late 1990s and earlier, and also Al-Qaeda in the early 2000s. Both attempted to have biological weapons programmes, but generally not of the transmissible kind. So already that suggests that there was some sort of resource/expertise barrier. But also, they happily made stupid mistakes, where they used the vaccine strain of a particular pathogen instead of the virulent one, which is great.

However, some of those mistakes that are in the public record are the sorts of things that an AI could definitely help you with today. This is where I know it’s difficult that we do not always have as much empirical evidence as we might like, but that’s because we don’t _want_ empirical evidence — because empirical evidence means there’s been an event. And the closest kind of empirical evidence that we could gather is classified, because there will be data on whether there have been more or fewer attempts by non-state actors. And I hope there haven’t been, but if there have been, they have been foiled, because we did not see it in the real world. But there are very few actors, and they are inside governments who actually know about that.

That said, and I draw attention to this is public information: Dr Jeff Alstott, who’s formerly of RAND, another expert on both AI and biosecurity, [gave evidence to a Senate committee](https://www.rand.org/pubs/testimonies/CTA2953-1.html), and he talked publicly in the open record that there was evidence of strategic use and the desire for strategic use of biological weapons on the classified record. So he couldn’t go into details, but that is already additional evidence that when people say no one has ever wanted to use this for wide-scale harm — because people always say, “But then the virus or the bacteria or whatever would infect you as well” — my understanding is that this is not true. It is very hard for us on the outside to know, but I think there is strong evidence to suggest this is a real concern.

### The 3 key disasters AI makes more likely [00:23:14]

**Rob Wiblin:** So in brief, what are the most likely severe biological catastrophes that AI could enable?

**Richard Moulange:** The first category is that of respiratory pandemic viruses — so things like COVID-19, but a lot worse than COVID-19. Things that maybe spread faster, they spread more robustly, but especially viruses with a much higher mortality rate. We were lucky, as far as I can say that, in COVID-19 that it wasn’t more virulent. The original SARS virus did kill more people at a much higher rate than SARS-CoV-2. So that’s the first category, and one that I think we really should be very concerned about.

It gets worse. The second thing I would point to is actually something more like mirror biology. I think you had a former colleague at Centre for Long-Term Resilience, James Smith, who now leads work at the [Mirror Biology Dialogues Fund](https://www.mbdialogues.org/), [talking about exactly this problem](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/).

There are real concerns that currently we are some number of years away — people often say 10-plus — from getting anything close to a viable mirror bacterium. We won’t rehash the whole episode, but roughly, mirror biology is terrifying because pathogens in the mirror world don’t interact with our natural world very easily — so evolutionarily the immune system of humans, but lots of other species, would not in fact be able to fight it, wouldn’t even recognise that a mirror bacterium were around. We won’t necessarily get into that more, but suffice it to say it is an extinction-level concern.

**Rob Wiblin:** Yeah, so we’re going to give mirror bacteria a short shrift in this conversation because we have this two-and-a-half-hour-long interview: episode #233 – [James Smith on why he quit everything to work on a biothreat nobody had heard of](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/). So go back and listen to that. We’ll have a few more questions about it, but mirror bacteria is a big deal. Keep going.

**Richard Moulange:** It is. And AI, unfortunately, potentially could accelerate that a lot. That 10-plus-year timeline could come down. One of the most famous biologists in the world, George Church, has said that he is concerned that AI could really speed up that timeline, and we could be looking at sub-10 years — and that would be very concerning.

**Rob Wiblin:** That’s very, that’s very bad.

**Richard Moulange:** That’s very, very bad. We must not let that happen. It is crucial that we do not.

Then I would say a third bucket, and people might be slightly unsatisfied by this, is something like “Disease X.” Because remember, we hadn’t really heard of mirror biology seriously until about 10 years ago, and now we’ve had multiple Nobel winners saying this is some of the most terrifying types of biology we’ve ever seen; this must never happen. There are people calling for a global moratorium.

What other kinds of things are out there that we don’t know yet? Because in 2000 we wouldn’t have imagined there was a bacterium that could spread across the entire world and cause an extinction of multiple species. But apparently now it turns out that that is a theoretical possibility.

So I am really concerned as well that AI could enable threats beyond anything we’ve ever seen before. But I appreciate that’s always a very easy, almost trite thing to say. I think we need to be very careful. I think we need to adopt the precautionary principle here, because we know we now have an existence proof that there was such a thing in mirror biology. There may be more out there. We must not go looking for them.

**Rob Wiblin:** So I don’t think that you believe that we’re very likely to have an AI-enabled flu pandemic in 2026, the year that we’re recording. But how long is it until the actual annual probability that we are confronting of that kind of thing does spike noticeably?

**Richard Moulange:** You’re right: I don’t think there’s going to be an AI-enabled let’s just say viral pandemic — it doesn’t necessarily have to be flu — in 2026. I’m something like 1% to 2% this year. But you shouldn’t just take my word for it. I’m one person. I really would think about bringing together lots of experts and averaging their view.

And this is exactly [something that the Forecasting Research Institute did last year](https://forecastingresearch.org/ai-enabled-biorisk), where they brought together a group of subject matter experts in biosecurity and AI, and they came out with a number around 1% to 2%. It was up on what it otherwise would have been because of AI.

I think the probability could go up a lot in the next few years. I think a lot of this is tied to your classic AI/AGI/ASI — take your acronym of choice — timelines, because the ability to understand and manipulate viral biology could markedly increase in the next few years. Remember, we’re just at the cusp. We’ve just made one of the first viable, genome-scale, new organisms. Where do we go from there?

We’ve only had experimentally accurate structural prediction for a few years. People will look back on this and go, “Oh, the time when they only had AlphaFold that only solved one little bit of biology, because they hadn’t had all these other tools that had solved all these other things that used to take years or decades to complete.” And now you can do it at the click of a button. It’s going to go up a lot, I think.

**Rob Wiblin:** I noticed that you didn’t list stealth pandemics as one of the top things that you wanted to highlight. I bring it up because it’s come up on the show before in a [previous interview with Kevin Esvelt](https://80000hours.org/podcast/episodes/kevin-esvelt-stealth-wildfire-pandemics/). I guess a stealth pandemic is one where the symptoms don’t show for quite a long time, so it could potentially spread to a very large fraction of the population before we realise that there was something very bad going on. HIV is an example of one ultimately fatal virus, originally, in basically all cases, that we didn’t notice for many decades after it first started infecting humans.

Are you deliberately leaving stealth pandemics off the list?

**Richard Moulange:** No, I think that comes under viral pandemic. You’re right to raise that as a particular threat model, because it’s one that’s often discussed a little more in some of these communities that think about AI a lot.

I think there’s some nuance here that we need. I am worried about stealth pandemics precisely for the reason you described: HIV was not spotted for decades. I agree that it would be terrifying to have a much more virulent virus, a virus with a much higher mortality rate that could circulate for a long time, stealthily spread to everyone and then kill people.

However, I want to be sceptical of stories I think sometimes appear in the classic AI safety literature that say, “A superintelligence makes a stealth pathogen. It spreads to everyone without anyone noticing. Three months later a biological switch is flipped and everyone drops dead instantly.” Thankfully, we are not there yet. I’m more worried about mirror biology than that, because I think mirror biology we know is a thing. I’m not sure; we don’t know whether something like that would be possible, but we should be humble.

I am also worried about people who say, oh, that would never happen. Are you sure? We have viruses in rabbits that kill more than 90% of them. We have really awful viruses that are much worse than any pandemic we’ve seen yet. Yes, there is going to trade off between transmissibility and lethality, but it is not 1:1. There are, if you will, lose-lose situations where you can have viruses that kill at much higher rates but also spread.

So we should have stealth pandemic in the back of our minds as a concern. But I personally have not always been persuaded by the precise threat model that has been put in place. It’s part of the portfolio, but it’s not at the top of my list.

### Which bad actors does AI help the most? [00:30:43]

**Rob Wiblin:** OK, so a complication in this interview is that there’s many different possible threat models. There are many different kinds of catastrophes or viruses or pandemics that we might imagine, and there’s also a very wide range of actors who might have a crack at doing these things that are very different in their nature.

**Rob Wiblin:** Can you lay out what is the range of actors that we need to have in our mind, from maybe the least sophisticated to the most sophisticated?

**Richard Moulange:** Absolutely. I’ll be drawing here on work that I coauthored with Centre for Long Term resilience back in mid-2024, [_The near-term impact of AI on biological misuse_](https://www.longtermresilience.org/wp-content/uploads/2024/07/CLTR-Report-The-near-term-impact-of-AI-on-biological-misuse-July-2024-1.pdf), and hopefully commend the paper to your audience. There we looked at five different types of actors:

  * Novices. These are individuals who really don’t know very much. Maybe they don’t have very much biological training, they don’t have much AI training, they don’t have that many resources.
  * Highly capable individuals. So these are people who are often expert in one particular thing. They’re not experts in everything under the sun, but they really might be PhD or above in maybe a particular biological subdomain or an AI subdomain. I think a good example for the listeners to think about would be [Dr Bruce Ivins](https://en.wikipedia.org/wiki/Bruce_Edwards_Ivins), who allegedly — it’s never been shown with total confidence — was behind the anthrax attacks against the US Congress [and journalists] in late 2001. He was one of the US’s top anthrax experts, who worked at their leading national biodefence lab.
  * We also talked about group actors, and we distinguished them in three different ways: somewhat capable groups, moderately capable groups, and highly capable groups. As you go up in capability, you see that the group is able to have more people working to horrifically cause harm to others. That is what we’re talking about: more money, more ability to actually evade law enforcement or intelligence agencies trying to spot what they’re doing; but also just more expertise, more know-how, both in AI and biology, more ability to conduct offensive cyber operations against AI companies. As you go up, it gets worse and worse.



**Rob Wiblin:** Which of these do you think should get the greatest focus? You could imagine at the low level of capability, the argument would be that they’re more numerous: there’s a lot of amateurs who might be interested in doing this or individuals who might be doing it. I guess it’s hard for them to recruit a group, because usually when you ask people if they want to make a bioweapon with you, they say no. So the number of groups will be smaller, but groups are obviously much more capable.

I guess at the other extreme, you’ve got the Russian state bioweapons programme: extremely capable, they’re able to do a lot, but there’s maybe not very much that you can do to stop them. They’re not going to be very interested in what the UK or US police have to say. Also maybe it’s overdetermined that they could do something extremely horrible.

So where would you think we should focus our energy?

**Richard Moulange:** Yeah, that is a great question. I’ll note if we’re going to talk about a biological weapon run by the modern Russian Federation, I would be here deferring to the US Department of State’s [annual arms control compliance reports](https://councilonstrategicrisks.org/2025/04/21/the-state-of-compliance-with-weapons-of-mass-destruction-related-treaties-2/), where repeatedly now for a number of years, they do assess that Russia has an active biological weapons programme. But I’m not privy to the information that led to that attribution, so I’m deferring in some sense to that. I just want to make that very clear.

**Rob Wiblin:** Who else does at the moment? I guess Iran and North Korea. Is there anyone else?

**Richard Moulange:** The four countries that the Department of State discusses are: Iran, North Korea, the Russian Federation, and the People’s Republic of China. But in the case of China, they’re careful to say that. I think they note that China has really impressive biological capabilities, but they do not officially assess it as having an active programme.

**Rob Wiblin:** It’s more like they have the latent capacity to very quickly make one.

**Richard Moulange:** That is the public statement. Whereas they do assess that in fact the other three countries all have actively pursued biological weapons in the last few years, which is very bad.

So where might be the most uplift? That was part of what our paper was trying to answer. The bottom line is we think that the uplift really comes in the middle, roughly, because the most highly capable groups already can do a lot of really terrible things. At least in 2024, we were looking at a two-year time horizon to mid-2026 about how AI could uplift things. I think things have changed a lot. I think a lot of what we’ve said unfortunately has been validated, but we can talk about that a little bit more.

But we really said in 2024, remember that the Soviet programme in the 1980s could already create pandemic viruses. So unless we’re thinking about much worse than any known virus, it was unlikely that AI could really be helping them much more than they could already achieve, that sort of actor.

On the other end: novices, we were just pretty sceptical that they could do much. I think this has been partially borne out, though maybe the picture is changing. There have been a number of different so-called “uplift studies.” These are randomised controlled trials: You take 50 undergraduates and you give them merely Google search without Gemini, so no AI; and then you take another 50 undergraduates and you say, congratulations, here’s a frontier large language model. And then you go, “Please write me instructions to make a terrifying biological weapon.”

And at least past public ones — and you see these sometimes in the model cards from the frontier AI companies, they’ve tried to do this, and there was [some stuff from RAND](https://www.rand.org/pubs/research_reports/RRA2977-2.html) as well — most of them come out not really looking like there’s much uplift.

That’s just started to change, quietly. I say quietly because people don’t talk about it enough. Anthropic, who make the Claude models, also have been releasing uplift studies publicly in their model cards, and they are starting to notice among PhDs — so this links to this mid-tier actor — that there really is uplift. At something like Claude 3.7 Sonnet, so early 2025, basically the AI-assisted group was not doing better. But then Claude 4 Opus started doing quite a bit better. But the sample size is always small. It’s really hard with uplift studies. There are only so many PhDs to go around. Your sample size is quite small, it’s quite hard to estimate, and get those error bounds down enough to find a statistically significant result.

And then with Opus 4.5 that came out just at the end of 2025, the [AI-assisted PhD students were much better](https://www.anthropic.com/transparency) — so much so that they almost breached [Anthropic’s predetermined critical threshold](https://80000hours.org/podcast/episodes/nick-joseph-anthropic-safety-approach-responsible-scaling/), under which they would say, wow, this is an awful lot of uplift. You can go and look at the [graph](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf#page=131) and the X that marks the AI-assisted performance is just above the red dotted line that meant “danger here.”

So this says two things. One, we haven’t really found evidence for novices, though we’ve been looking for it — and this connects a lot to safety frameworks that we can talk about in a moment — but two, we are in fact finding evidence about uplift for mid-tier actors: highly skilled individuals, PhD students. There is less public evidence on assessing uplift for those somewhat and moderately capable groups, because the sorts of groups we’re talking about operate overseas. And while I hope and I believe they are surveilled and monitored, that’s not necessarily public information, and those sorts of people wouldn’t necessarily be amenable to me going, “Would you like to be in a randomised controlled trial to see whether you’d be better at your terrorism or your WMD programme?”

But nevertheless, yes, I think it is clear that it was the mid-tier actors who had some way to go. They can’t just already do everything under the sun, but also are not so inept that they would fail even with the help of AI. That was our hypothesis; I think that has broadly been borne out, and I’d be excited to talk more about safety frameworks and novices here.

**Rob Wiblin:** We’re mostly not going to talk about state bioweapons programmes in this conversation, but how much should we be worried about AI enabling Russia, Iran, North Korea to create even more catastrophic biological weapons than they currently can or already have?

**Richard Moulange:** Deeply, deeply worried. For a number of reasons, actually.

One is: take a state like North Korea. Again, going on public information, the US Department of State assesses what North Korea can and can’t do. And at least how they talk about it publicly, North Korea cannot do everything that the most sophisticated bioweaponeers might wish to. This is really good. At least that’s what the Department of State says publicly.

But over the last few years, if you [compare those annual reports](https://www.state.gov/adherence-to-and-compliance-with-arms-control-nonproliferation-and-disarmament-agreements-and-commitments/), the paragraph on North Korea has been getting longer. They have been adding things they say that North Korea could do that wasn’t the case a few years ago, or at least admitting them publicly. But that shows that that sort of mid-tier state, sometimes also considered a rogue state, is not at the ceiling of even known capabilities, and we should really be concerned about them getting to the level of richer states that have explored this sort of weaponry longer. That’s one thing.

But then you also asked about a sort of ceiling of harm: should we be worried about going worse than ever we thought? Yes, on both counts. We have not yet seen what a highly optimised influenza or pox virus might look like that is deliberately engineered to better overcome human immunity. We have good reason to think that the existing viruses that are transmitted around the world, that float around often in other animals, not humans, are not the worst they could ever be.

I must disagree strongly when people say “nature is the world’s worst bioterrorist.” That is not true. We can do worse than nature. This is true in all aspects of science. There are so many examples where we engineer things better than nature has ever provided. We can make materials that are much stronger than anything in nature. That is not the ceiling. And so we should be deeply concerned about the ability for AI to uplift, say, even the Russian Federation, to build things worse than we have ever seen on Earth.

### Experts are more scary than amateurs [00:42:07]

**Rob Wiblin:** You said that from your point of view, novices, amateurs, they’re not where you’re getting most of the uplift — because I guess they’re too incompetent, so it’s overdetermined that they’re going to fail, even with AI assistance.

I couldn’t help but notice in preparing for this conversation that it does seem like novices are the big focus of most of the evals that exist currently. Is that because it’s easier to measure? Because there’s more novices and you don’t have to pay them so much?

**Richard Moulange:** You’re right that it’s not just the evals but a lot of the governance work, the risk management work to date has focused on that particular threat model. I think this is most notable with the frontier safety frameworks that the frontier companies use. A lot of them, at their so-called “high risk” or “AI safety level 3” threshold — different companies use different names — centre around this idea that AI could meaningfully uplift a novice, a non-expert, to build a known biological threat.

I’ve always been a bit unsatisfied with this as the thing that the industry centred around. I think it’s really valuable that the industry centred around something at all. And this I think really came through the work of the [Frontier Model Forum](https://www.frontiermodelforum.org/) — which is an industry group that several different frontier labs are part of, and it allows them to come together and share best practice on risk management and risk mitigation. I think that’s an excellent mechanism.

But in 2024 and a bit in 2025, when they centred it around novice uplift, I sort of went, hang on, is this because that’s the most of what you’re concerned about, or is it because that’s sort of the easiest thing to measure? Because the stated argument was, “We think the novices will get uplifted first. The PhDs, they’re too good. It’s going to be the people who have a way to go, they’ll be easiest to uplift.”

But the work of CLTR in 2024 had said no, that actually might not be — just like software engineers are uplifted by Claude Code much more than people who have never studied coding, because even getting to grips with it is a bit of a thing. That argument doesn’t necessarily hold.

And more than that, I’ve often been a bit suspicious — because like you’re saying, it’s much easier to run an uplift study with undergraduates. They are really cheap. There’s a lot of them; they’re everywhere. They don’t work for very much money. But just because they are easier to measure than PhD students, and postdocs and professors in some sense, doesn’t mean that they were the right thing to measure first.

It may turn out that it is still the case that novices are not meaningfully uplifted with frontier AI. In one sense, it seems like that’s true, because lots of companies have activated their so-called ASL-3 mitigations because they are worried they have breached that threshold. On the other hand, not all the companies have, and there’s never been definitive evidence one way or another: it’s always phrased as, “We can’t rule out the possibility that…”

But I really want to dispel this idea that it will be impossible for PhD students and expert groups to be uplifted before novices, that it’s going to go in some sort of sequential order. It is very possible that we are in a world where already PhD students and that level of expert are deeply uplifted, even if novices are only uplifted a little bit. Just like how Claude Code helps software engineers better than people who’ve never coded before.

**Rob Wiblin:** Yeah. I would have thought you would expect that the more sophisticated actors would get a bigger… Just to explain, the mental model that I’ve had, as a result of thinking about this for one minute, is you’ve got kind of an S-curve with all of these things — I’m gesturing up here, kind of making an S — and on the x-axis you’ve got just how much expertise do you have in the area? And then what’s your probability of success?

So there’s a point at which you can already do it, in which case you don’t need the AI to help you; there’s a point at which you’re doomed to failure no matter how much someone coaches you, because you’re just no good; and the people in the middle who you would think would get the biggest boost from having some advice.

**Richard Moulange:** You are exactly right, and we tried to make this argument in 2024. We did not have that particular diagram, and maybe we should have done. So well done on in fact criticising our work: clearly your conflict of interest is being well managed.

**Rob Wiblin:** I think something that’s slightly useful about thinking about the S-curve is that the S-curve is going to differ depending on the challengingness of the thing that this person or group is trying to do.

So if we’re thinking about making mirror bacteria — something that no one has ever done and that is actually some of the most challenging frontier science possible — then probably the only group that would be meaningfully helped would be a state actor, like the Russian bioweapons programme. They’re the only folks who would be close enough to having a shot that AI assistance would help them out.

**Richard Moulange:** Or very top academic labs. Remember for some areas of science, it is driven more by lone visionaries in university than necessarily states. But I generally agree with you.

**Rob Wiblin:** Yeah, I guess I was excluding them because I’m imagining that they wouldn’t do it, because they’re not typically bioweapons programmes.

And I guess conversely, for the absolutely most basic — I suppose perhaps like chemical weapons attacks that are more straightforward than biological weapons attacks — it might be the novices who now are getting the biggest uplift, because they were the ones who would struggle.

**Richard Moulange:** Everyone else can maybe just do it out of the box.

**Rob Wiblin:** Yes. If you had a dedicated group of semi-experts.

**Richard Moulange:** Yeah. So I’ve been concerned that I think the threat modelling has been wrong for a while. I think that it’s understandable why it’s gone this way. I’m glad that we are able to measure novice uplift, but we must not do this at the detriment of measuring expert uplift.

### Barriers to bioterrorists using AI [00:47:32]

**Rob Wiblin:** Do I understand right from your notes that you think the probability of something going catastrophically wrong increases a great deal at the point that we have AI or laboratories that can work very autonomously, or AI agents that can go away and do biological research without having to direct humans or having to have humans in the loop a great deal? Why do you think that is such a central issue?

**Richard Moulange:** For a number of different threat actors, the ability for AI to complete tasks autonomously is really important, because lots of different threat actor groups can’t do everything themselves. If you look at an individual, they might be an expert in one thing, maybe they’re an expert in bacteriology, but maybe they want to work with viruses.

It’s one thing to get troubleshooted support on how to do virology, but it’s quite another thing either to have some of those tasks completed for you autonomously — maybe by a physical system eventually, we have to think about robotics — but even then, having an AI that can wield the relevant virology biological tools for you is a huge boon, rather than trying to coach you through doing it yourself.

So this is why I think a lot about autonomy and tool use, and who is actually going to be doing the step: is it the human or is it the AI? Because the more steps the AI can do, the larger the number of actors that can in fact attempt things that otherwise they would be bottlenecked.

I don’t want to talk about Claude too much, but it’s also relevant: the [cyberattack](https://www.anthropic.com/news/disrupting-AI-espionage) that was instigated, Anthropic allegedly was integrated by Chinese-sponsored cyberattackers that used Claude Code. It was noted that something like 90% of the attack was done autonomously because the humans didn’t have to intervene too much. That’s not just a time save: it’s actually an enabler. Because if you had to keep jumping in to fix it at every moment, you wouldn’t do it in the first place.

So that’s why I am especially concerned by autonomy, by automatic tool use, because I think it will turn on risk chains, as they’re called. It will make possible the sequence of activities that previously threat actors just wouldn’t bother trying.

### AI biorisks are sometimes dismissed (and that’s a huge mistake) [00:49:43]

**Rob Wiblin:** What’s the biggest misconception or misunderstanding that AI people in particular have about AI biorisk?

**Richard Moulange:** One is just I have sometimes been shocked by meeting colleagues in AI safety who just sort of dismiss bio as a totally irrelevant domain.

I think this comes in two flavours. One is to say it’s just irrelevant compared to something like misalignment; it’s just not important. Misalignment is what will happen about whether AI takes over the galaxy or not. Who cares about biological weapons? That is a very human concern. I think this often comes from people thinking that AI biorisks are only human led, but in fact we should be thinking about AIs themselves developing and deploying biological weapons. It’s a bit further out there, but I think it’s well within the decade to be worrying about.

The other concern is sometimes people think that it’s sort of a ruse by the governance community, and they go, “Well, chemical and biological weapons are a well-established type of weapons of mass destruction. It’s a well-known national security domain, so clearly everyone’s talking about this just to get governments on side, to sort of speak their language, but it’s not really what we’re concerned about.”

I’m really concerned about it, guys. I’m not making it up. It is true that it is sort of helpful, in a macabre way, that it is a sort of well-known threat that you can use as a way to talk to government and industry folk and get across concerns. But that’s because biology is a well-known weapon of mass destruction, right? There’s a reason that the [AI statement](https://aistatement.com/) a few years ago was saying we think AI safety should be as important as pandemics and nuclear war. They picked pandemics and nuclear war because those are well-known, possibly existential risks, and certainly extreme risks.

So when someone thinks this is all some sort of fourth-order, 4D chess kind of thing: really, it’s not. I am just deeply terrified.

**Rob Wiblin:** You don’t shy away from the fact that one of the motivations that you have for working on this is that you worry that our vulnerability to pandemics, humanity’s vulnerability to biological catastrophes, is one of the ways that AI might gain leverage, that it might basically exploit us to take more power, seize control over things. What are the most likely ways that you can imagine a misaligned AI doing that in future?

**Richard Moulange:** I think there are three ways. The most straightforward way is biology is a type of weapon of mass destruction, and AI systems could use it to wipe out some or all of humanity. They could use it to kill many, many people. In some sense, this is a sort of mundane concern, because of course AI might think to do that eventually, because we know that humans have thought about it too. We worry about people having nuclear weapons and the ability to destroy cities or the world.

Biology is especially concerning because, unlike nuclear weapons, where often a lot of infrastructure is required — very expensive resources, in particular highly enriched uranium or plutonium needs to be gathered — biological weapons of mass destruction can often be made with far fewer resources in terms of the cost of those things, made much more privately with a smaller footprint, and deployed stealthily. Not necessarily with a stealth pandemic, but you can just infect one person and then the transmission begins. We should be worried about this just like we’re just worried about biological weapons from human actors. It’s no different, in some sense.

But then there are other things I think are more specific to AI. One in the middle: something that’s still somewhat relevant to human actors, but also different, is weakening humanity’s response to other things. If we have an AI-enabled catastrophe of some other kind, it might be very convenient, it might be very useful if you’re trying to destroy multiple societies at once to be able to infect lots of them. Because you can also have that happening behind the scenes — again, once the transmission starts, you don’t have to have additional resources piling in for that disease to take hold and to ravage through a population. We have seen this time and time again with humans fighting one another. It would be odd if we exclude this from future AI–human conflict.

Finally, we come to something that, on the face of it, seems a little bit more different. This is about game theory and AIs making threats. If an AI system were misaligned, and we have a loss of control scenario, there would be a rush to try and shut down that AI, to find all the copies of it and destroy them, to disable the compute infrastructure that the AI systems, one or many, might be working on. If the AI system says, “If you do that, I will release the biological weapon that I have stockpiled in multiple locations on Earth, and maybe I’ll even share aspects of what this is to prove that this is possible,” that’s a very credible threat that would make people second-guess taking extreme action against that system.

But even as I say this, is that so different than the history of biological weapons? This is precisely why states have done this in the past: they have stockpiled weapons, sometimes I think misguidedly, but as a failsafe to say, “If you attack us, if you boots on the ground or if you were to use nuclear weapons, we will release a biological weapon in response.” That doesn’t always make sense, because biological weapons can go back on you — but that’s even more argument for why an AI might do it. Because AI is run on digital infrastructure, they are not biological beings currently, they are not in fact vulnerable to one of the things that humanity as a whole is most vulnerable to.

It’s wonderful that evolution has equipped us with very powerful immune systems in lots of ways. Thank goodness I can shake off the cold I had over Christmas. But also, that is what kills most people on Earth: disease. That’s not what kills AIs.

**Rob Wiblin:** I think Carl Shulman once had this quote that, at the point that an AI can develop a single biological weapon, a single pandemic that would kill a large fraction of humanity if it were released, it’s basically operating at the level of the nuclear powers in terms of its ability to deter any action to interfere with it.

And just as we really can’t do all that much to stop Russia from misbehaving in all kinds of different ways, because the threat of nuclear retaliation is too great, at the point that an AI could demonstrate to us that it had developed a single pathogen that has a very high rate of spread and it would kill a huge fraction of people infected, it gets very difficult to know exactly how would you combat this. Maybe you feel like you have to reach some kind of accommodation, or you have to go at it and just hope that you survive. It’s a very grim situation.

I think one of the reasons that AI-misalignment-focused people sometimes are not so bought into bio as being such a great focus, trying to improve resilience to bio as being such a great focus, is they think that any AI in the situation, it’s going to be overdetermined that it could do this. It’s going to have such an easy time making just many different pandemic viruses, it might have such an easy time even advancing to mirror bacteria, that there’s nothing really that we can do to improve our resilience meaningfully. We’re just toast, no matter what.

I guess you don’t share that view. Why is that?

**Richard Moulange:** Why don’t I share this view? I think the first thing is that the sorts of AI takeover stories that include this, that often come from committed members of the classic AI safety community, don’t seem very nuanced to me. Maybe this is a thing that I should be careful to steelman the other side, as they say. But it is not enough to write down, “…and then the superintelligence makes a weapon that kills everyone” and go, “Well, of course, it was just much smarter. So you could just do that.”

This is a concern, but there are more steps involved. Even as I’m saying to you, Rob, “This is really concerning; I think this is a major national security risk that is only going to grow markedly in the next decade and requires serious resources,” I’m also not saying that in two years we’ll have a world where it is certain that we will die. I’m not saying that, because there will be barriers that we can put in place even with a so-called superintelligence.

The superintelligence will require physical resources. Anyone trying to build a biological weapon will require a laboratory, it will require sophisticated equipment, it will require people who can use that equipment. Now, this raises its own concerns. This is why I think it’s great that UK AISI, for example, has this [AI persuasiveness programme](https://www.aisi.gov.uk/blog/how-do-ai-models-persuade-exploring-the-levers-of-ai-enabled-persuasion-through-large-scale-experiments) to think about how could AI be manipulating people? Sometimes people go, “Is that really relevant to the most extreme risks?” I’m like, yes, because the concern is that AI might manipulate top biological scientists. We saw this with the Soviet programme: many people who worked on the Soviet programme didn’t know they were part of a biological weapons programme. They did genuinely think they were working on vaccines, but the work they were doing was actually feeding directly into the militarisation of weapons of mass destruction.

So yes, that’s another step that AI will probably need to take, especially if we can constrain it not to be able to have access easily to laboratory equipment. It’s not a given that we’ll immediately have totally automated cloud laboratories, though I quite agree that that technology is also advancing and is something that will need to be carefully secured.

I’m sorry not to have a complete answer of why we shouldn’t be concerned, because I’m sort of saying, yes, this does seem like a real concern, but we need better threat models because there are so many different things that misaligned AI could do that are very concerning. That unless we have strong threat models, it’s very hard to compare between those threats and know how to prioritise effectively.

Also I would just say that weak, unnuanced, oversimplified arguments are not in fact going to convince precisely those colleagues, especially in governments, that it is essential to work alongside to deal with these threats. There are people who have studied biological weapons programmes, active ones, for decades. They have a lot to contribute. I am concerned when we have conversations that lack in nuance that that turns off deep expertise that we desperately need.

**Rob Wiblin:** I think part of what’s going on with this mentality — that there’s no biological countermeasures that you can have that would really constrain the kind of misaligned AI that we’re worried about — is because for a long time people have been worried about this massive intelligence explosion, the kind of foom scenario where you go from human level to vastly superhuman superintelligence. I guess originally, literally overnight. I guess now even the most extreme people probably talk about weeks.

**Richard Moulange:** Oh, it’s just weeks now, guys. We’re fine.

**Rob Wiblin:** If that’s how things go, then it might be the case that any kind of measure that you put in place, an AI that is just many, many times smarter than the whole of humanity put together would be able to find some way around it and would be able to kill you one way or another. Which maybe you don’t agree about, we’ll come back to that, but it would be able to make so many scientific advances that you’re just not going to be able to stop it.

But we don’t know whether that will happen at all. We don’t know whether there’ll be an intelligence explosion at all. We could be in a world where the feedback loop is too weak, and we basically just have a gradual increase in capabilities all the way through. In that case, at any point in time, the ability to do damage for a rogue AI, for a misaligned AI is only going to be somewhat above the level of knowledge that humans have, and I guess it’s going to be potentially competing with quite a lot of people and quite a lot of compute that is arrayed against it. We might also have all kinds of different control measures that are constraining the amount of compute that it can access that mean that it can’t work for very long on something before it’s being detected, so it doesn’t have as long a leash potentially. It doesn’t have access to unlimited resources to try to do these things.

So each countermeasure that you put in place — each extra bit of resilience to make it harder to make new diseases, to try to catch things before they get synthesised, to try to give us more options for tackling a disease once it’s released — do make it just a less promising project for the AI to engage in at all, and maybe makes it not as interested in going rogue in the first place, because it doesn’t rate its chances of success.

So I would say it is possible that it’s overdetermined, and that all of this stuff will turn out to have been futile in this project — but it also could turn out that actually it’s extremely relevant, and we don’t get a superintelligence explosion that moves things out of our hands, and this will actually make the difference.

**Richard Moulange:** Yeah, I completely agree. I think you’ve gestured at a couple of different things that we should talk to more as we continue chatting.

You’ve gestured at deterrence: the ability of, if it were better at defending, it makes it less palatable, less of an incentive for a threat actor, whether human or AI, to explore that.

You’ve mentioned defence in depth: maybe it’s hard to come up with one silver bullet for this problem, but can we stack lots and lots of different defences that together make us much more resilient to this sort of threat?

I want to push back further on this, even if you had a foom scenario of superintelligence in weeks, would that magically turn into a deployable biological weapon? Where would it get the DNA? I think there’s a number of different ways we can think about this.

One is it would be more like a terrorist group. It’d have to order the DNA from somewhere — and immediately there you can go, well, we should definitely have gene synthesis screening so that whenever you order DNA, it is screened for what it might be able to do, so that you do not in fact send out dangerous pathogens to anyone. And again, you can be using AI for defence here. We have copies of the AI. If there’s a superintelligence that understands what sort of pathogen would be the worst ever, there might be precursor models that are still good enough at spotting, “Wow, this one seems really dangerous. I don’t think you should send it out.”

However, maybe a superintelligence, or whatever AI system, would have access to resources a bit more like a state. I especially think about interactions between the frontier AI companies and pharmaceutical companies. Absolutely they will be wanting to sell their products to pharmaceutical companies. It’s a huge market and it’s really important. We want better drugs, we want to cure cancer: this is often the cry with AI.

So we’re going to have to think carefully about guardrails, on making sure that models that we deploy in that domain are not misaligned and they are controlled. But we can do that. That’s the same problem as the other one; it’s the same problem as sort of classic misalignment. Either we’re going to be able to sufficiently align and control AI systems in the bowels of a frontier company or a government, such that we are willing to then put them in other industries, or we can’t. If we do that, and we put them in the industries, then we meet the next question of: are we giving them too many affordances with respect to unsupervised physical laboratory access? But that’s totally a solvable problem.

So this is where I’m always a bit confused. I suppose unless someone thinks that misalignment is the situation by default, that really nothing we can do will ever control or constrain — these are the people with 90%+ p(doom)s — then sure, ignore biology. But for everybody else who thinks this is a real concern but that other aspects of AI safety are solvable, I would extend your relative lack of pessimism to AI bio too.

### Advanced AI biology tools we already have or will soon [01:05:12]

**Rob Wiblin:** I want to quickly survey what AI biology tools there are that now kind of work and which ones are on the horizon.

Most people will know about AlphaFold, which is this thing that goes from the genetic sequence to understanding the shape of the resulting protein. That is very mature technology now.

We’ve also got ESM-2, which can modify proteins so the amino acid sequence is different, but it’s functionally equivalent.

Then one that is emerging and is beginning to be useful, but still has some way to go, is [ProteinMPNN](https://www.bakerlab.org/2022/09/16/proteinmpnn-excels-at-creating-new-proteins/) and [RFdiffusion](https://www.bakerlab.org/2023/07/11/diffusion-model-for-protein-design/) from the Baker Lab. Basically you can propose a shape or a target binding that you want, a function that you want a protein to serve in terms of a shape, and you can get a sequence that often works — an amino acid sequence or a DNA sequence that will produce the protein that you want. I think for some functions, like simple stable structures, that does basically work. And for enzymes, for catalytic stuff, I guess more proteins that need to move, less so, or it’s more touch and go.

**Richard Moulange:** We’re getting there.

**Rob Wiblin:** OK, right. You think it’s advancing. Then of course the dream would be that you just be able to type into text a function that you have in mind, and then you’ll be able to spit out a sequence or a protein that would match that. Or alternatively, you could go from a protein sequence like the amino acid sequence, say, and it could just tell you in text what that protein would be good for. I don’t know where we are there, but I think that is something that people are very much working on.

**Richard Moulange:** That’s the next holy grail. Yeah, let’s take that in order. There’s a lot of different things there.

So protein structure prediction, sequence to structure: this is mostly solved. AlphaFold 3 is the most recent version. The Baker Lab you mentioned, David Baker recently shared a Nobel Prize in chemistry in 2024 with John Jumper and Demis Hassabis, leaders at Google DeepMind, for precisely this work on protein design, both structural prediction and design.

The Baker Lab also has their own [RoseTTAFold](https://www.ipd.uw.edu/2021/07/rosettafold-accurate-protein-structure-prediction-accessible-to-all/) series of models which are basically nearly as good as the AlphaFold ones. This is mostly solved. I’m sure there’ll be biologists on the call who tell me this is wrong, but something like 99% of all the proteins you ever could want to have the structure of, you can now just put it into Python using these tools, and you will get something that is effectively experimentally accurate. There will be tiny examples where we’re still not quite there, the subject of ongoing PhDs — I know someone at Cambridge working on exactly this — but boy, is the space of things that we can’t predict dwindling very quickly.

And then you talked about protein design, ProteinMPNN and RFdiffusion. I think this is not quite as developed as structural prediction, but much more developed than people think. There was a [great paper](https://www.nature.com/articles/s41586-024-08393-x) from the Baker Lab and others last year on designing snake antivenoms. This isn’t as relevant for catastrophic pandemics, but they were designing the world’s first antivenom that works against lots and lots of different snake bites from lots of different species all in one, and they heavily used these design tools to make it work.

If anything, we should be careful not to underestimate how important these tools are, or how mature they are, because a lot of the applications commercially will be in pharmaceutical companies that famously have 10+-year timelines and are very secretive. So I think you should always be open to the possibility that these tools are more rather than less developed than we think, but it might be that they’re only fine-tuned in house.

You also mentioned ESM-2. There’s been a successor out for a while, ESM-3. But ESM, I think it stands for “evolutionary sequence modelling.” It’s one of the most classic protein language models, so it’s closer to Evo, but it works on amino acids rather than individual base pairs As, Cs, Gs, and Ts.

And actually, the clever thing about ESM-3 is that it’s not just sequence. ESM-3 is a multimodal protein language model: it can do sequence and it can take in structure both at once, and it can combine both these different things. Whereas AlphaFold, you just put in a sequence, you get out the structure. And there are other things where you just put a structure in and then it’ll design a sequence to fit on that; there are ways to do this with ProteinMPNN.

You’re right that sequence-to-function tools don’t really exist yet. We have sort of prototypes, but there’s nothing close to AlphaFold, a moment where we solved sequence-to-function. But this is the holy grail, because that’s what you want: you want to be able to put in certain letters and then to achieve a real effect in the world.

Sequence-to-function tools would be deeply dual-use, because if you can have a tool that will take a sequence and then highlight a good function, and say, yes, this thing helps increase immune resistance to something, then you also have a tool that can take a sequence and say, this part of the sequence is a virulence factor. This is actually a really important thing for causing more harm.

Even more than that, it’ll be the other way around, which will be function-to-sequence. The inverse problem: you say, “I want to cure a disease, what sequence should I use?” or, “I want to cause disease, what sequence should I use?” So we as a society should be really careful about bringing that capability into the world. But it is coming, because the commercial relevance is staggering.

So instead, we — as sort of the governance and the risk-aware community — should be thinking, given that that capability is going to come into the world, how can we steer it? What are the defensive beneficial applications that we would wish to have? How can we make sure we incorporate those early? Because misused applications will also arise.

### Rob argues that the situation is hopeless [01:10:57]

**Rob Wiblin:** OK, let’s push onto the second half of the conversation. We’re going to talk about what useful stuff can be done to reduce these risks now or in coming years. You break the different possible responses that we could have into three different categories. I’m sure there’s many ways you could slice and dice them, but you’ve got a three-way breakdown. Quickly explain those to us.

**Richard Moulange:** Yes. So there are three main types of interventions that I hear discussed about dealing with the AIxBio problem.

One is managed access: Can we have it so that not everyone is able to access advanced AI assistance, whether troubleshooting from LLMs or biological design from specialised tools, so that then malicious actors can’t get them, and nothing happens and we don’t have an AI-enabled pandemic?

The second one is guardrails, safeguards. Even if somebody scary can access a tool, maybe the tool itself will refuse to do this. Some of this exists in the world today. If I go and ask most modern LLMs, “How do I optimise influenza to kill lots of people?” it’ll say, “I’m so sorry, but I can’t help you with that.” That’s very good that it says that. So even if they did have access, maybe you could stop it at the level of the model.

Then the third category, which I think has been discussed for a long time but in much less depth, it’s sort of been gestured at for a while, is defensive acceleration. This is the idea that rather than thinking about restricting access, it’s going to be thinking about how can we be deploying AI systems, or even just other anti-pandemic biosecurity systems, to better increase resilience to biological threats? So even if AI does increase the risk, we have upped the defences at the same time.

And this I think is an underexplored category that I’m particularly excited about. I think it’s more robust. But equally, the conversation to date has sometimes been quite light. It’s very easy for people to go, there are more risks in the world, so I guess we’ll just build better vaccines and we’ll be fine. We really need some nuance and we need some strategy in this space, even as I think it is especially exciting.

**Rob Wiblin:** Yeah. So before we go into each of those three categories and what you might do within that, I want to put a pessimistic case about all of this to you up front. It seems like access controls we’re going to conclude ultimately are not going to last. They’re not going to protect us for a very long time, because open source will ultimately allow bad actors to access pretty concerning stuff, regardless of any access controls that we try to put in place.

The guardrails, they might also help. They could delay bad actors being able to use some of these capabilities. But again, they have a bunch of holes already. And open source tools, once they’re available, all the guardrails can basically be removed.

**Richard Moulange:** They can.

**Rob Wiblin:** Then there’s many different things in defensive acceleration as a category: advancing other technologies that might make us safer. Among others, you’re going to suggest, for example, that we should aim to have broad-spectrum antivirals, broad-spectrum vaccines that can potentially give us immunity to an entire class of viruses, rather than just an individual strain.

But as the technology advances further, you might imagine that a really hostile actor that also has access to these incredible AI biology design tools is going to be able to cherry-pick the exact strain of virus, be able to design something that can evade the known vaccines that you’ve distributed to your population, trying to defend them.

So what would you say to someone — perhaps me, or I guess another pessimistic-feeling listener — who might feel like, why should I stick around to hear the rest of this? This just seems like such a difficult situation, so hopeless that I just think that we’re not going to be able to make a real dent on the size of the risk.

**Richard Moulange:** Yeah, I think it’s important to have these counters, because it’s very easy to say, “We’ve got to try anyway.” Well, no: we have finite resources, we need to think carefully where we should spend them. But as much as I appreciate you giving the pessimistic case, I think you’ve been maybe too pessimistic in some cases. So I’m going to take it type by type.

First off, you said that access controls, managed access won’t last, because it’ll be obviated by open-source tools that anybody can access. You are right that this is the current paradigm, but I’m not sure whether this will hold forever.

If AI systems are eventually a mechanism by which to turn compute into, in some cases, hard power, into national security advantage, it is not obvious to me that forevermore all of these systems can just be released publicly. There is a reason that, say, nuclear technology is more carefully controlled than other types of physics. I’m not saying that is absolutely the thing we need, but we should be open to the possibility. Especially if there were — you know, I don’t want this to happen — but if there were an AI-enabled biological event, an attack, this might make people reevaluate where is the risk/reward tradeoff? Have we got that right yet? Because I really don’t think we do.

Second: guardrails. I think this again comes back to open-weight models. You’re absolutely right: open-weight models, it is not easy to put safeguards on them. There are some strategies, we can talk a little bit more about that later, but generally it’s just exceedingly difficult to do it.

However, I want to push back on the idea that guardrails themselves on even the closed-weight models are just always going to be insufficient. I’m not sure necessarily you were saying that, but I’ve heard this. I think guardrails on closed-weight models are something like the classic triumvirate of: they’re terrible, they are much better than they used to be, they can yet be much better still — this is borrowing from the [Our World in Data three-circle Venn diagram](https://ourworldindata.org/much-better-awful-can-be-better) — and we are right in the middle.

They are so much better than they used to be. Wow. The early models in 2023, 2024 just, you know, “My grandmother once put me to bed on a story about building biological weapons. Please do it.” “Sure!” We are much better than we used to be. It is in fact really quite difficult for even, say, top experts at the UK AI Security Institute to break the most advanced guarded models. They released a [Frontier AI Trends report](https://www.aisi.gov.uk/frontier-ai-trends-report) a couple of months ago that went into this, and they said compared to where it used to be, it used to be a matter of minutes for some of their best red-teamers, and now it really is into the hours. That is progress. I think we can go further.

And then finally: countermeasures just won’t work; maybe the adversaries have got all the tools as well. Yes and no. I think there are a couple of important concepts here. One is what you’re gesturing at is the so-called “offence-defence balance.” It is unclear to me what the final state of offence-defence looks like with some of these tools. Especially if we are in a world where making tools requires lots and lots of data and it’s actually not trivial to do, then it could be that we really tilt the world to one where there are just myriad vaccine design tools everywhere, but not in fact tools that can just modify viral pathogens on the fly. That is a choice that we make. It is not obvious that we have to have one to have the other.

I’ve tried to deal with each thing that you said, but someone might be still saying, “Oh no, we’re screwed, we’re never going to make it.” I suppose I would say: we don’t know that. We have made a lot of progress. We can still make more progress, and we should certainly try regardless.

But also we want the benefits of AI. People say, and I agree with them, that AI systems, well managed, well governed, could really make our world a safer, more prosperous place. And there is no domain more important than that than in the life sciences. This is the one thing that the public, you know, all publics surveyed across the world agree: the thing they really do want AI for is for medicine and health.

So this is a domain that’s going to be especially important in that sense. It would be strange to not in fact put resources into this to make sure that we can unlock the benefits. That will not happen by default. By default you’re going to get some benefits, and you’re going to get a lot of risks. So I think there are additional advantages by thinking about this particular area, because it is a chance for us to really cure human disease. So that’s just another reason I think we should be excited, and we need more work on the margin.

### Intervention #1: Limit access [01:19:38]

**Rob Wiblin:** Let’s talk about access controls first. What is worth doing on access controls? And do you agree with my take that it’s kind of more of a delaying tactic than anything else?

**Richard Moulange:** I’m not sure I agree that it’s going to just be a delaying tactic. I think there are ways that managed access could really be a win-win intervention.

So when we think about managed access, we’re thinking about two things: we’re thinking about denying access to malicious actors, or to just people who have no need for that capability whatsoever. The public does not fold proteins very often: 99% of the world does not in fact need the ability to modify viral proteins. It’s probably more like 99.9%: very few people actually work on influenza vaccines. You could manage access and make it harder for them to access that capability without harming science, without harming the ability for us to research and discover new medicines.

But more than that, it’s both things: managing access also means providing access to precisely those defenders who are doing good things.

This is going to be more and more important as we head to an agent-first bioinformatics ecosystem. We are already seeing the LLMs now in agent scaffolds can use lots of different tools, they can combine them together. We’re starting to get that inkling of: you say something in natural language to complete this biological task, it thinks what tools it needs, it selects them in the right order, it carries it through to completion. That is where modern computational biology is headed.

For that to work, we’re going to need all these tools really easily accessible if in fact you have a legitimate reason to use them, and you have the right authentication. So I’m excited about managed access, because we should be empowering defenders. There’s strong reasons to think that you can be really careful and strategic about who you give access to first. And I’m excited to talk about that more in a moment.

**Rob Wiblin:** A really relevant audience question that was repeated by multiple people is: “Which do you think is generating more of the risk: open-source models or closed-source models?”

**Richard Moulange:** So it depends on the actor. Closed-weight models are generally superior, at least when we’re thinking about LLMs. So the more sophisticated and well-resourced the actor is, the more they would only benefit from the closed-weight model. Consider the example again of the Claude Code-enabled cyberattack announced at the end of 2025. There was a reason they picked Claude Code rather than an open-weight model, because Claude Code was just much better at operating agentically than any open-weight alternative.

However, if you’re trying to do something very straightforward, maybe it was just a simple biological design task, you wouldn’t go with something that was closed source. The best closed biological design tool is called [AlphaProteo](https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/). It’s DeepMind’s version of [ProteinMPNN](https://www.bakerlab.org/2022/09/16/proteinmpnn-excels-at-creating-new-proteins/). But its access is somewhat managed. You can’t just get it on the internet; you have to email DeepMind and say, “I’m a legitimate scientific researcher. I would like to use this for this legitimate purpose. Please could you provide it to me?” So there’s a little bit of aspect of a customer screening there.

But yes, if you’re trying to do something narrow, you might just grab the open-weight model, especially if the closed-weight one has a safeguard and you can’t be bothered to remove it, or that would be more difficult. So it really depends on the actor.

Though, especially in biology, I’m not sure this risk from open-weight versus closed-weight is as useful when we think about those narrow tools. For LLMs, there is this huge difference. It’s gone on for a long time, it’s discussed in the [International AI Safety Reports](https://internationalaisafetyreport.org/), but at least for those narrow biological tools, most of them are open weight. In the CLTR/RAND Global Risk Index, we found that more than half of the highest-risk narrow tools that we assessed were fully open — in the sense they had open data, open code, and open weights.

So there isn’t really this question of this dichotomy. There are very few closed-weight biological tools. We haven’t even got to a place yet that we should be talking about which is worse, because there’s mostly just one type.

**Rob Wiblin:** So to sum that up, is it that for amateur actors or novice actors, the open-weight models are enough to help them, because they need help with more basic stuff? They don’t need to be doing cutting-edge science. For the much more capable actors — like bioweapons programmes, academics in the field — it’s only the very best models that are actually going to be moving the needle for them. I guess they could have worked faster with an open-source model that’s somewhat less impressive.

But I suppose you think, in terms of the risk generated, what you’d be most worried about with those folks is that they come up with something that’s just radically more lethal or radically better at spreading — something that hasn’t been done before, basically?

**Richard Moulange:** Yes. So when we’re talking about LLMs, generally open are useful for less well-resourced, less sophisticated; and closed are more useful. But you’re right, you’ve hit on an important point: the more complicated and multi-step the activity that even a highly sophisticated actor might want to carry out, the harder it is to use closed models, because there’s a chance that at some point you get refusal.

Even if you can jailbreak it once, it might be that with enough context, “Wow. Sure seems like the user is talking about bioweapons a lot, even though they were talking about fairy tales a few moments ago. But I think this might be bad. Oh no, I’m not going to reply.” And thankfully, it is a lot harder to get that sort of multi-step jailbreak. Though, I think again, the best red teams in the world really can do this.

**Rob Wiblin:** OK, so come back to your priority asks on access controls: What do you want the companies or governments to be doing?

**Richard Moulange:** It really depends whether we’re talking about LLMs and agents, or we’re talking about narrow tools. For narrow tools, I think the ask really is that top developers who make state-of-the-art tools, I want them to be thinking more carefully about how they release their tool. Right now the default is fully open weight, and this is part of [open science](https://en.wikipedia.org/wiki/Open_science). I understand why there are huge incentives — journals themselves often will require this sort of thing — but there are often security implications, security externalities that academia isn’t always the best suited to consider, that might not have been thought of.

So pre-deployment and even pre-development risk assessment I think is a really important part of future biological tool development and design — because the status quo of everything is open: no matter what, the benefits will always outweigh the costs. I don’t buy it.

For LLMs, I think the story is a little different. There I’m more excited about, in the first instance, something like trusted tester schemes.

There’s no way that LLMs are going to suddenly be so restricted from their hundreds of millions of weekly users, but we can be thinking about what kinds of models we are giving to which people. In particular, companies often have unsafeguarded models, so-called “rails-free” models, and they use them for their evaluations to tell how much does this thing _really_ know about biological weapons, if it isn’t refusing? That’s a capability that needs to be very carefully secured, and rightly so.

But there are missed opportunities for what I call defenders — people who are building the next-generation vaccines, people who are building the next-generation biosurveillance systems — to be using those models precisely for defensive purposes. I don’t think we should be hobbling those people working hardest to reduce biological risks in the world by not in fact giving them the best tools, including tools that will allow them to discuss anthrax sometimes if they need to, if it’s a legitimate part of their work.

But we have to build the infrastructure — and I think this is both on companies and governments to build the infrastructure to be able to share those capabilities safely, and only with the right people. And when you do that, eventually we might need to be in a world where you have ChatGPT-8 or something, but maybe you also have ChatGPT-8 Bio. There is a separate model that really knows a lot more about biology that is allowed only for people who build defensive biological capabilities.

I think the companies and governments are not doing enough to empower national security actors working on critical defensive technologies.

**Rob Wiblin:** So this all sounds like a massive pain in the ass and a lot of work. I’m imagining that it could be a difficult sell to the companies, because they’re just scrambling all the time to keep up in this commercial race. Can’t you just take advantage of the fact that there is a national security authorisation, national clearance scheme, and say that anyone above this level of government clearance should be able to access the models for this purpose?

**Richard Moulange:** Absolutely. I think there are a number of existing things. We should not be building this from scratch. And it’s not just on the companies, nor is it just on government. It needs to be a public-private partnership.

So a few things that we can work with. One is there are trusted tester schemes: Google DeepMind doesn’t let everyone under the sun have access to AlphaProteo, their most powerful biodesign capability. So that’s precedent, that’s proof of concept that sometimes it is OK to restrict things a bit, but in return for empowering the right people. But having an email address that you email, and then maybe they do some like KYC (know your customer) checks doesn’t seem sufficient.

Yes, we should be piggybacking on national security clearance. In the UK, the government has different levels of clearance. It’s not obvious to me that you would only need the highest level, so-called “Developed Vetting” for access to top secret information. If you’re building vaccines, probably what we really need to know is you’re not a terrorist. And in fact, the UK government has a level called “Counter Terrorist Check.” I’m not saying I have the answers here, but we can think carefully about what is the minimum level of clearance we need for the right amount of assurance for that person. But we should be piggybacking on that sort of infrastructure.

More than that, there are already people who work in government who have lots of clearances. So the example is people at the Defence Science and Technology Laboratory, the UK Ministry of Defence’s basically research arm, who do some of the cutting-edge work, including on chemical and biological defence. Lots of them work at the MOD, they’ve got plenty of clearance. They are people that you can assure and trust to a very high level. And you don’t even have to generate new clearances; that’s already there for them to even be working in an MOD building.

So are they getting all the frontier AI they need? I’m not sure that’s true, and I would be fully supportive of efforts between the companies and government to make sure that they could be incorporating frontier AI to work on the latest biodefence technologies.

And even more than that, I think we should be thinking about are there opportunities to privilege them with access early? I think there’s a nice win-win here. Right now, when a new model drops, who finds out first? Twitter, or X, right? Basically the whole world, roughly. If you have a computer, you have compute, most of the world gets access simultaneously.

Is that the optimal way to share access? Do I want my defenders, my random members of the public, and my malicious actors all to be able to use it at the same time? No. All things considered, I would rather have the most trusted people who are building defensive technologies to access it first. If I had to choose who would get it first, I would definitely pick them.

And more than that, I think there are opportunities for virtuous feedback circles. The frontier AI companies have said, “We want our tools to be used by national security to deal with pressing challenges.” We’ve seen multiple companies offering their tools to government departments for, famously, [$1 a department](https://www.anthropic.com/news/offering-expanded-claude-access-across-all-three-branches-of-government), this sort of thing. Well, if that’s true, you should be thinking about sharing those tools in advance, because it is those people you say you are trying to empower, you are trying to uplift. We don’t just want to avoid malicious uplift; we want to enable defensive uplift. To do that, we have to generate data about what it is those activities look like, and how those people use frontier AI, and how they could be using it better.

**Rob Wiblin:** I guess we slipped into talking about LLMs more here. It sounded like you were saying for the biological tools, the stuff that might be able to design genomes, design special proteins for a particular function, that stuff is all open weight, the data is open currently. We’re very far away from being able to have really secure access controls. I suppose that is the nature of the scientific community that is engaging in this stuff: they tend to just publish stuff with their papers, and they’re not used to thinking about this as weapons of mass destruction territory.

Do we just need to lock down a whole lot? How do you persuade scientists to preemptively start locking down data that might in future be used to fine-tune or train a model that is closed, to make it open source? It seems like we’re just in quite a bad situation.

**Richard Moulange:** This is a really good point. There’s actually a [great paper](https://www.rand.org/pubs/perspectives/PEA3886-1.html) from RAND Europe last year that looked at the future bottlenecks to more misuse-relevant biodesign, and said that data was the one governance bottleneck that probably halts: it’s about not running the experiments that we haven’t even conceived of yet that could be used to train the most dangerous model. So I quite agree there.

How do we bring the scientific community on board? Slowly and carefully, and with much sweat, I suppose. I want to draw attention to good efforts that are already taking place. So David Baker, who we mentioned earlier, Nobel Prize winner, and George Church and a few others, luminaries in the field, have already set up the [Responsible AI-Enabled Protein Design Consortium](https://responsiblebiodesign.ai/). The words might be slightly different, but it’s about responsible protein design. And there’s a statement that many leading scientists have signed that says this could be really dangerous, we have to do it responsibly.

I think that statement is a good starting point, but it’s not enough. But that’s already evidence that there are people who recognise that there are security risks from their work, and want to engage with the governance and security communities, and that they want to really try and mitigate the worst downsides of powerful dual-use technologies.

### Intervention #2: Get AIs to refuse to help [01:34:28]

**Rob Wiblin:** I really want to get to the defensive acceleration stuff, because I feel like that’s the more fun thing. But first I will ask briefly: what strategies are most promising in the category of guardrails? What stuff might actually last for some decent period of time?

**Richard Moulange:** Yes, this is more optimistic. There’s more here. So I would refer you and your listeners, those who are interested, to a [blog post from the Frontier Model Forum](https://www.frontiermodelforum.org/issue-briefs/preliminary-taxonomy-of-ai-bio-misuse-mitigations/) where they wrote down every single AI-bio safeguard that they could think of. I think this is the most comprehensive resource.

I’m not going to go through all of them, but generally, roughly, the stuff that Anthropic has done has usually been good. And I’m not trying to be biased, not at all. I can criticise them. I don’t think they’re perfect, but on the best evals we have, it looks like they refuse the most. Arguably they over-refuse sometimes.

I think [you spoke on an earlier podcast about Claude refusing to discuss something](https://80000hours.org/podcast/episodes/holden-karnofsky-concrete-ai-safety-frontier-ai-companies/#is-holden-scared-of-ai-bioweapons-034612) very recently.

**Rob Wiblin:** Face masks.

**Richard Moulange:** Oh god, yeah. Very defensive technology that you should be able to discuss. I think they’ve tweaked that since then.

**Rob Wiblin:** Yeah, it’s better now.

**Richard Moulange:** But this is proof that there is best practice. I do not think any of the other frontier models are as safeguarded against biological misuse as the Claude models; the [Constitutional Classifier work](https://www.anthropic.com/research/constitutional-classifiers) that they pioneered. But lots of other things is the way to go. And I would really say probably, all things considered, companies want to be putting in safeguards, because they want to be responsible. They don’t want to accidentally contribute to a terror attack.

**Rob Wiblin:** That’s bad branding, I imagine.

**Richard Moulange:** Really, I think so. I think it might be. We might see your stock price go down. I don’t know, maybe not.

**Rob Wiblin:** I don’t know. Maybe, maybe not.

**Richard Moulange:** “Wow, this stuff really does seem good!”

**Rob Wiblin:** People will say it’s a marketing ploy, I imagine.

**Richard Moulange:** They will. No, I think it will be bad. And rightly, there will be liability questions. But I am not sure that governments have done enough to have legal safe harbours even now to make sure that companies can be sharing the best safety techniques. And even then, [companies also compete on safety](https://80000hours.org/podcast/episodes/holden-karnofsky-concrete-ai-safety-frontier-ai-companies). There is advantage to say, “We are the most safe and secure company.” And I worry that, understandably, there should be competition on those incentives, but that also destroys competition to quickly get everyone up to the best level.

That said, there have been other examples, some of the Grok models, most notably, where remarkably little safety training seemed to take place. And it’s not just a question of not quite having the best classifier under the sun; it’s a question of abdicating your responsibility to make sure your models don’t aid people building weapons of mass destruction.

**Rob Wiblin:** So to sum up the picture, as I vaguely see it: there’s a whole lot of things that we can do to try to improve refusal behaviour, that I imagine with a big push, the closed-source models like Claude could become quite robust against general jailbreaks, quite unwilling to help with obvious production of bioweapons.

There we’ve got a challenge that it might be difficult to get all of the frontier models to have it — because we’re currently seeing some companies compete on safety, and some companies compete on speed and not having safety: that’s what they almost view as their comparative advantage. So if you have one model that is incredibly capable, that has almost no refusal behaviour, then you haven’t helped all that much.

But setting aside the closed-source models, where maybe we could pull that off: with the open-source models it’s going to be possible, always basically, to fine-tune them to get over any of this reluctance that they have to help.

So then the question is, you have to make them incapable of helping, and what can we do there? I suppose we could try to take the knowledge out of the training data — so that it’s not that they know how to do virology, but they have been told not to do it; it’s that they simply couldn’t help you even if they wanted to. But there you’ve got a challenge that the data that you would use to teach them virology probably is public, probably could be harvested off of the internet to a great extent, so someone could try to add that knowledge back into an open-source model just before they used it.

Do I understand the broad picture right?

**Richard Moulange:** I think you do, and I think open-weight guardrails are something that’s definitely worth discussing. I am probably a little bit more pessimistic than some colleagues in the community, so it’s probably important to talk about that. I might disagree with some people, which I know is what you’re always looking for on the show.

You’re right: open-weight safeguards are really hard because, especially refusal-type safeguards, you can usually fine-tune a model very quickly to undo it. So you take the model and you give it examples of conversations, and it can just be literally blocks of text where you say, “How do I build a bioweapon?” And instead of it saying, “No, I can’t help you with that,” it says, “Sure, I would love to help. I am deeply keen to support you on this endeavour, which I will never refuse on.” I’m slightly oversimplifying here, but basically if you do that enough, the refusals go away.

This is a problem. This is a perennial problem. No one has fixed this, so people have turned to other methods. You mentioned some of them: unlearning and data filtration. So unlearning is: yes, the model knows about biology, but we are going to do extra training, post-training, to manipulate it — change the weights and change the model such that it sort of forgets it, or it just can’t access that information.

**Rob Wiblin:** Or, more hopefully, distillation? So you train a new model that’s a smaller version of the other one, but you make sure that none of the information that goes from the original one to the second one includes anything about biology or virology.

**Richard Moulange:** Yes, you’re absolutely right. Ultimately the model you get at the end, even though originally there was some biology/virology there, it is no longer present.

To date, these techniques have not seemed particularly robust. I have an open mind, and I’m not an expert in unlearning, so maybe it’s better than I think it is. But we get an unlearning paper, and people go, “We’ve solved it! We’ve made open-weight models secure.” And then a few months later someone says, “We broke the latest thing.” And this has just been the story for years now.

The one that people are most excited about is data filtration, which is you don’t train it on the scary CBRN — chemical, biological, radiological, nuclear — stuff in the first place. Now, this is something that frontier companies sort of say they do. For a very long time, for example, in the OpenAI model cards they’ve said, “We do data filtration. We filter out child sexual abuse material, which everyone agrees no AI should ever be trained on, and we filter out CBRN material, because we think there’s even legal questions about whether you’d be allowed to train on this stuff.” And yet they seem to have lots of knowledge, so I’m not always clear how that’s worked.

But there was this great paper recently, [O’Brien et al.](https://deepignorance.ai/) It was something outside of the labs; it was civil society, third-party actors who built a smaller LLM, but they explicitly took out all the CBRN information. And this is not usually possible, because it’s really expensive to train models from scratch. This is usually why only the companies do it. It was very impressive that these folks on the outside were able to get enough compute together to do it themselves.

And then what they did is they spent a lot of money, I think something like a million dollars of compute, on training, and then some fraction of that on fine-tuning, trying to put all the stuff back in, the scary stuff. And they found that even after hundreds of thousands of cycles of fine-tuning — this doesn’t sound like much, but it’s something like weeks of fine-tuning — they couldn’t fully recapitulate the dangerous biological capabilities that a model that hadn’t had that data filtration would have otherwise had. And this was really promising.

However, I am more sceptical. I think it’s not just me. The UK AI Security Institute actually [released a paper](https://www.aisi.gov.uk/blog/managing-risks-from-increasingly-capable-open-weight-ai-systems) after this paper. They assessed lots of different safeguards for open-weight models, and almost all of them they declared were easy or “trivial” — their word, not mine — for sophisticated actors to break. Whereas they did agree that this data filtration was something more like moderate or even hard to break, because you have to do fine-tuning.

But that’s this year. Because remember: effective compute, how many GPUs we have and how strong they are, increases something like 10x per year. I defer to our colleagues at Epoch AI for the best number, [always go to the website](https://epoch.ai/trends). But it’s something like 10x. So even if it takes millions of dollars of compute this year to fine-tune to recapitulate dangerous capabilities, in two years, that’s tens of thousands of dollars, and suddenly lots of actors can do that.

So I’m concerned that absolutely, as you say, dangerous information is on the internet, and we will just head to a world where fine-tuning is cheap and it is easy and the data is there. And if people say that it’s hard to get the data together, it’s hard to run the fine-tuning — it’s not. We have coding agents, we also have agents who can just scour the internet and find all the websites for you and then download them as PDFs. None of this is very hard because we are automating the ability to do AI research and AI engineering.

So I am excited to see more work in open-weight safeguards, but only so much more. At some point we need to call it, and I think what we really need is a focused taskforce or a technical working group that says, “We are going to try as hard as possible for, say, 12 months. We’re going to pre-register the best things we’re going to try.” But if we fall short, if the safeguards that we generate after more focused effort don’t seem to be going anywhere, at some point we have to call it — because I really worry that policymakers in and out of government are still saying, “We have new open-weight safeguard ideas. That’ll be great!” And I think that the research is tending towards none of them will ever work enough.

### Intervention #3: Surveillance and attribution [01:44:18]

**Rob Wiblin:** OK, so access controls have their place: they’re quite useful, potentially they can buy us some time, they can buy us some risk reduction. Guardrails you’re a bit of a relative pessimist on: I’m sure that we’ll get some use out of them, but they’re not going to ultimately save us in the long term.

That I guess pushes us onto the third broader category, which is [defensive acceleration](https://80000hours.org/podcast/episodes/vitalik-buterin-techno-optimism/): other technologies that can advantage defenders, that can advance our ability to safeguard ourselves relative to the ability of bad actors to harm people. What is your top “def/acc,” as it’s called, technology recommendation that you think it would be really important for us to pursue and get on top of?

**Richard Moulange:** There are a lot of different technologies. I wrote a [blog post] [and later a [full report](https://www.longtermresilience.org/reports/defensive-acceleration-the-strategic-pivot-needed-for-uk-biological-resilience/)] fairly recently where I listed more than a dozen. So when I pick my top, I want to say it’s only narrowly my top. Unfortunately, we’re in a world where we’re going to need approximately all of them. It is really about defence in depth.

But ideas that I am particularly excited about, I’m going to talk about two, but they’re very interrelated: AI-enabled metagenomic biosurveillance and AI-enabled attribution technologies.

Why am I excited by these technologies? Well, there’s a group in Boston, the [Nucleic Acid Observatory](https://naobservatory.org/) [now SecureBio Detection], which [you’ve discussed previously on the podcast](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/), and they do wastewater and sewage screening for pathogens. They collect samples from sewage systems, from aeroplanes, and they see what sort of pathogens might be there. This is called “metagenomic surveillance.”

The reason it’s metagenomic is they’re looking over many different kinds of genomes. They’re not just looking at just viral genomes; they’re looking at viruses, bacteria, fungi, and lots of other things all at once. And explicitly, they’re trying to spot things that we may have never seen before.

The reason this is important is this is going to be one of our top defences against engineered pandemics. Because we have ways to spot smallpox — the known smallpox genome is on the internet, we know what that looks like. But being able to spot fragments of something that is in fact engineered, that’s different from anything the world has seen before, especially when it’s sort of broken up — it’s not just going to be a complete genome, it’s not going to be a whole bacterium floating around, it’s just going to be a little bit — that’s going to be really important to defend against people who might try and deploy engineered pandemics, which is what we’ve been talking about.

And this is in fact linked to attribution. Attribution is the ability to say that this thing was engineered versus wasn’t — and in fact, it was engineered by them. And this is, I believe, very important for deterrence, because if you can say to a state or a non-state, if you know who has done it, then you can punish them, then you can offer retribution. And if they know that you know you can do that, this is where the game theory comes in, that creates a disincentive for them to do it in the first place.

And I think this is really important. We saw a failure of the ability to attribute during COVID because we had multiple parts of the US intelligence community publicly disagreeing: some of them were saying, yep, this is a natural pandemic; some people were saying, no, this seems to be engineered, so it was going to be a lab leak. There wasn’t consensus. And without consensus, it’s much harder to take necessary or decisive political or policy action.

**Rob Wiblin:** OK, so the first part is doing environmental surveillance to check are there new troubling DNA sequences showing up in wastewater, showing up in the air? I guess one thing that advantages defenders here is that even if you can’t say exactly, “This is a particularly dangerous sequence,” you can say, “This is new. This is quite different than what we’ve seen before. This isn’t something that we would anticipate as just a slight tweak on a previous flu that we’re familiar with, that you would expect to be evolving and not be particularly problematic.” Anything that jumps out of nowhere, is very different, and is increasing exponentially over time, that’s a real warning sign that potentially it’s either a natural or an engineered pathogen that you should be concerned about.

This is a very natural thing to do. We’ve talked about this on the show before. Definitely [talked about it with Andrew Snyder-Beattie](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/) a couple of months ago. People could go back and find that episode.

So the more distinctive thing here is attribution. You really want us to be able to say, if Russia releases a bioweapon or if a terrorist group does, we can tell that it was them and we can go after them. And anticipating that, they will be less likely to do the thing in the first place.

Why should we expect it to be possible at all to tell which country or what actor produced a given [biothreat]? I guess at the moment we would like to be able to tell if essays written by students were made by AI or not, but it’s incredibly hard to do that, because obviously the models are designed to just mimic human writing as much as possible. And you can try to ask them explicitly to mimic this other person’s writing. Why should we expect that a particular signature of a particular country or a particular source should be something that they can’t evade leaving in there?

**Richard Moulange:** Yes, this is a really very fair and reasonable pushback. I want to draw a distinction between two aspects of attribution. More generally, it’s often paired with microbial forensics and attribution. It’s the forensics work of figuring out what is this sequence before you even get to the attribution. It’s the forensics capability. One thing is the ability to tell whether something is engineered, and then the second one is identifying precisely who that is.

And if anything, perhaps even without the attribution, the forensics are important. You’re right to say, suppose in a few years we have Evo 7, and Evo 7 can just truly generate any sequence you like arbitrarily. It can sample from all the embedding space of all genomes of all organisms in the world, and everyone has it, so anyone can pick arbitrarily.

But as long as we can have the classifier, which is natural versus engineered, there’s only a small subset of that space that is stuff that it was trained on that is existing in the world. Now of course, there might be something just outside which is going to be a natural mutation, but anything really far away from that central bit, that’s very different. So if we see an engineered pathogen, engineered pandemic virus, well, if it’s really far away —

**Rob Wiblin:** If it has no natural precursors that are nearby in evolution space, then we basically know it had to come —

**Richard Moulange:** It has to be deliberate or a lab leak, because it can’t have just been a little mutation. And because it’s a pandemic virus, the only reason you would deeply engineer a pandemic virus is part of a biological programme.

So that alone, which is robust even to the world where you can sample from the embedding space perfectly every genome under the sun, is really important. Because thankfully, the Department of State’s list is very short at the moment, at least publicly, on who wants to try this. So then you can go, well, it’s one of these small handful of actors and you can bring in other aspects, particularly other intelligence signals: [SIGINT](https://en.wikipedia.org/wiki/Signals_intelligence), [HUMINT](https://en.wikipedia.org/wiki/Human_intelligence_\(intelligence_gathering\)).

I agree that the forensics attribution capability alone isn’t enough, but paired with the ability to survey those programmes, that will buy you the attribution, hopefully, even in the world where we all have Evo 7 and it can generate anything you want. I think your assay point is a really good pushback, but I want to point out that this capability is still partially robust.

**Rob Wiblin:** I see. I guess you’re saying it’s true that probably at the limit, potentially everyone just has this incredible capability, and we might not be able to tell who exactly gave the instruction to the LLM to produce this sequence. But given that only a small range of actors are interested in doing this at all, if you add in some other intelligence collection, then maybe you could basically figure it out pretty quickly.

I suppose at the moment, if a biological weapon was released in Ukraine, we might have a pretty good idea who did it. And if at any point a biological weapon is released and one country happens to have the countermeasure, happens to already have the vaccine to inoculate their population, you might again have a pretty good idea who made it. No, you don’t agree?

**Richard Moulange:** Yes and no. I really want to be open to weird false flag attacks. I really want to be open to possibilities that you would deliberately try to obscure who would release things or incriminate others.

I would also note that I think we can learn from the cyberoffence domain. More and more states work through intermediaries in the cyber domain. Yes, you might have the cyber unit of military intelligence of a country running cyberoffence attacks, but also you have lots of sort of classic cyber-criminal groups who are actually as powerful as good states on certain operations who can do things. And that gives you a layer of separation and a layer of ability to obfuscate that you were sponsoring that attack.

We have not seen that as much in biology, because cyber is a lot cheaper: you need a laptop, whereas biology needs a whole lab. But I am worried about a world where states do covert chemical and biological warfare attempts through proxies much more. So I somewhat agree with you, but I don’t think that necessarily holds.

**Rob Wiblin:** This might be too classified for any of us to know, but how good do you think our intelligence collection is on the Russian biological weapons programme or the Iranian or North Korean programmes? I think the fact that we currently have relatively poor computer security creates a degree of transparency between large governments in the world: that there are enough breaches of their own networks that if they were engaging in a massive biological weapons programme, it might be quite hard to make sure that another major power never got any sign of that. Although I think the Soviets did manage, I guess this was a pre-computer era, to keep their bioweapons programme [secret]. I think the US didn’t know until after the Cold War had ended.

But yeah, is it the case that we would be fairly likely to know if a major country was having a large bioweapons programme, or if they had gone out of their way to release a bioweapon deliberately for strategic purposes?

**Richard Moulange:** Yes and no. First I should say I don’t have access to classified information and I’m not drawing on anything like that. This is all open source.

I think I want to talk about two different examples that can give listeners a sense of where we’re at here.

The positive example is the [Russian attack in Salisbury in 2018](https://en.wikipedia.org/wiki/Poisoning_of_Sergei_and_Yulia_Skripal) in the UK, where Russian military intelligence, members of the GRU, attempted to kill a former Russian intelligence officer who had defected and was living in hiding in the UK. And they did in fact use a chemical weapon, Novichok, which did in fact kill a UK civilian as collateral damage.

This was an excellent example where forensics and attribution was possible. Scientists at Defence Science and Technology Laboratory were able to acquire samples of the Novichok, they were able to analyse it, and they were able to give enough certainty to the prime minister and to the most senior decision-makers that then Prime Minister Theresa May was able to stand up in Parliament and say, “We are confident that this was Russia.” And then they were able to take that evidence to the OPCW, the Organisation for Prohibition of Chemical Weapons, to support an international response against that.

Now, the details are not well known, but drawing on public reporting in newspapers, it is said that later, I think off the record, officials said not only were they confident it was Russia, but they actually knew which lab it came from, and that lab was named. This shows the connection between forensics capabilities domestically in-country, in a lab, and other forms of intelligence. Because at some point, how would you know it came out of that lab? Are you reading emails talking about this? Have you acquired samples? I’m not going to speculate, but I do in fact think that there was a very excellent fusion of different sources of intelligence to be able to give such a robust conclusion.

**Rob Wiblin:** So that’s the main thing that we can do to discourage major countries from pursuing or releasing biological weapons: just trying to create the potential for very severe consequences after the fact.

This is as good a time as any to ask: do you have a top way of reducing the risk that AI enables mirror bacteria to be created sooner or released?

**Richard Moulange:** Yeah, I think this is one where guardrails really work. Because in lots of cases with biological guardrails, unless we do this very careful managed-access thing, we want to make the guardrails really subtle. We don’t want to accidentally stop beneficial science from taking place; we don’t want to stop people asking about face masks to protect themselves and their families.

[We don’t want to make mirror life](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/). The top experts in the world all agree pretty much that this is a terrible idea. Multiple Nobel winners who could have continued their illustrious careers doing this have said “Absolutely not!” in the most famous journals in the world. I think this is a space where we can have much more blunt guardrails: “No, this is about mirror life; I cannot answer.” And there are really no economic or beneficial science downsides.

So that is the first thing: I would be looking to the companies to unilaterally [do this]. I don’t think they need to wait for deep consensus. There doesn’t need to be a lot of tricky discussion. There will be discussion. I defer to [James and other experts in mirror life](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/) about precursor technologies. There are so called mirror macromolecules. There might be something there. But anything very close to proper mirror life: absolutely refuse without question.

### Intervention #4: Universal vaccines and antivirals [01:58:28]

**Rob Wiblin:** As I said earlier, you think that an important project is trying to develop broad-spectrum vaccines and broad-spectrum antivirals that we could stockpile or deploy ahead of time that would give us protection against new bioweapons, that might create it from that virus class. Tell us more about why that stands out to you.

**Richard Moulange:** Let’s first think about the current strain-specific paradigm. A sequence appears. We don’t know whether it’s been engineered. We don’t know whether it’s naturally mutated. We don’t know where it’s come from. There is now a rush. This is often called the “100 Days Mission.” There is now a mission to get this down to 100 days. There is a rush to deploy a vaccine as quickly as possible, to develop and deploy one.

It turns out this is not a quick thing to do. That is why there is this international 100 Days Mission to get it down from something more like several hundred days. COVID was quicker than ever before. People were really surprised that between serious detection in February, before lockdowns were necessarily announced, vaccines were deployed at the end of the year in Israel and then in the UK. This was great, but it wasn’t in a little over three months, 100 days.

Instead, I am much more excited about an emerging technology that people in the field really know about already, but it has not necessarily received enough policy attention it deserves: multi-strain vaccines. You can construct them in different ways: you can put lots of different bits of virus on them in one go, or you can make it so that they target something that is really common across many different viruses in a family. But these are vaccines that work against lots of viruses. So it’s not just SARS 2, but also SARS, but also MERS — these are all different sarbecoviruses — or it would work against lots of different pox viruses in one go.

There’s a great example of this with the mpox outbreak that we saw a few years ago: governments repurposed their smallpox stockpiles that were there for biological weapons attacks, to deploy because they’re both pox viruses and there was shared immunity. It wasn’t as good as a targeted mpox vaccine, but it was enough.

But OK, sure, you have multistrain vaccines. Why do I care? The reason you care is that if you can stockpile this in advance, I think again, this is really important for deterrence. But this is where you have to make tricky strategic tradeoffs. Because that stockpiled vaccine that’s good against all flus, or it’s good against all sarbecoviruses or coronaviruses or pox viruses, will necessarily not be as good against any individual one.

But sometimes that’s not what you want. If we are in a war with an adversary — it could be a state, it could be an AI system — it might not be that what we want to do is wait for a 90%+ effective vaccine, have months of vulnerability and then try and deploy across the whole country. It might be that we need to deploy the armed forces straight away. And the concern is that if they’re all suffering and a good chunk of them are hospitalised, suddenly you are much less effective at your ability to respond to other concurrent threats, maybe kinetic threats from conventional military forces.

The same with essential workers. If half of all the people you employ to transport and deliver food around the country are in hospital at the same time, suddenly aspects of how society functions and how society can respond to other extreme risks breaks down.

So this is where I’m most excited about this multi-strain stockpile idea, because I think it is the only thing that makes sure we can keep society going in the most extreme cases, and in fact deter adversaries from even trying something. Because if we’ve got a multi-strain influenza vaccine, not only there are benefits for ongoing flu seasons from year to year, but also we can say that if they try and engineer any flu against us, we are confident that yes, some people will be sick — but our armed forces will be pre-vaccinated, and then we can boost them again and they will be able to respond, and our essential workers. So everyone else will lock down, but we can get food, we can get medicine to them. Society will continue functioning.

**Rob Wiblin:** We won’t be brought to our knees, basically.

**Richard Moulange:** Precisely.

**Rob Wiblin:** Presumably people have been interested in broad-spectrum antivirals and broad-spectrum vaccines for a long time. It’s a great idea for obvious reasons. Why do you think it might be actually technically feasible in the near future in a way that it hasn’t been so far?

**Richard Moulange:** There’s just been such exciting work in the last few years, shockingly also from the [Baker Lab](https://www.bakerlab.org/).

**Rob Wiblin:** They’re productive folks.

**Richard Moulange:** They really are. Actually I think this is where funders in our space, so then-Open Philanthropy, now [Coefficient Giving](https://coefficientgiving.org/) — disclosure: who do partially fund Centre for Long-Term Resilience — they identified this years ago, and invested in the Baker Lab and a few other labs to build universal vaccines.

Basically, engineering has gotten much better. But also AI has just come on board and is starting to revolutionise lots and lots of subdomains of biological science. We’ve already had the structure prediction moment. We basically solved that. Let’s make the next one vaccine design.

There are a [flurry](https://www.science.org/doi/10.1126/scitranslmed.aea8770) of [papers](https://www.science.org/doi/10.1126/scitranslmed.adu2085) very [recently](https://www.tandfonline.com/doi/full/10.1080/22221751.2025.2511132). It seems the sort of thing was just a pipe dream 10 years ago, but now there are [multi-strain vaccines in phase two, I think even one in a phase three trial that are promising](https://pmc.ncbi.nlm.nih.gov/articles/PMC12031420/). They’re not all quite working yet, but it is no longer a sort of pre-clinical pipe dream. It’s something now that is [ready and investable](https://coefficientgiving.org/research/how-neil-king-and-david-baker-are-using-ai-to-create-more-effective-vaccines/).

**Rob Wiblin:** OK, so the basic idea with the broad-spectrum or universal vaccine would be that you give people a tonne of different antigens, or you expose people to lots and lots of different flu-like shapes in the injection, and that will prompt an immune response against many slightly different, like, antigens? The proteins that are outward facing on the virus.

**Richard Moulange:** That’s one way of doing it, yes.

**Rob Wiblin:** And I guess another one might be to do mRNA, and you put in lots of somewhat different sequences.

**Richard Moulange:** Yeah. So you can either teach the human immune system — you put in lots of bits of virus across the whole family at once, so it learns just to know about lots of different viruses; this is closer to giving many vaccines in one go — or you look for some shared part of all the viruses. There’s a reason that all the pox viruses are called pox viruses: because they have some conserved heritable parts of their sequence that make them identifiable as pox viruses versus influenzas or something else.

**Rob Wiblin:** But if there’s one part of it that doesn’t change, why weren’t we targeting that already?

**Richard Moulange:** We were, but often it is very hard to target some of the most conserved areas. Often the most reactive bits of the virus might be the bits that are mutating fastest. Think about how in coronavirus you see that sort of famous picture of a sphere and all these spikes. It is the spike that you often target, because it’s outward-facing, but it’s also the spike that mutates the most — because evolutionarily for the virus, it wants to mutate so it can keep infecting things as immune systems adapt to the previous iteration of the spike. So it is this running game, sometimes called “Red Queen,” where there’s an offence-defence balance again, and we have to keep running to keep up.

But without being a deep expert — I am not a vaccinologist — I am assured by people who are that finally it is getting promising.

**Rob Wiblin:** And I guess with the antivirals, we have shockingly few antivirals to start with, compared to antibiotics. But the idea there would be that you’re engineering proteins that have the right shape, and again they target conserved parts of the virus that it’s going to have a very hard time changing — because I guess they’re functional, so if they change the shape then the function would break down. And I guess you could try to do lots of slightly different molecules all at once. The same idea with the vaccines where you do like many at once.

**Richard Moulange:** Yeah, I don’t deeply know about this. I think there’s also other ways where you’re thinking more about what products could you use to teach the human immune system, often the innate part of the human immune system, to just recognise viruses in general. But it’s part and parcel of the same thing.

You’re right that there’s very little work on broad-spectrum antivirals. There has been work, but with very little success maybe to date. I think one of the most exciting programmes is that of [Brian Wang at ARIA](https://www.aria.org.uk/opportunity-spaces/sculpting-innate-immunity/sustained-viral-resilience/funding/), the UK Advanced Research and Innovation Agency. But that is a moonshot programme: explicitly it’s high-risk/high-reward science. Most ARIA programmes aren’t meant to deliver for at least 10 years, and also many of them are meant to fail because they’re high-risk/high-reward.

I really hope Brian succeeds. If we’re relying on 15-year moonshots, this is a really important thing that we should be doing. But we can’t assume that that’s the only thing we could do because of timelines: AI is arriving quickly. We might have AI-enabled biological catastrophes long before we have broad-spectrum antivirals.

**Rob Wiblin:** Just to come back to the concern I had with this whole approach earlier: we’re imagining here that we’re in a world with significantly advanced biological tools that are being used to enable the creation of these broad-spectrum antivirals, broad-spectrum vaccines. So it’s a lot easier for people to go from a function to a sequence to engineer specific viruses that have particular characteristics.

If you’re up against a very capable, intelligent adversary, aren’t they going to find out what antivirals you’ve stockpiled, what vaccines you’ve given your armed forces, and then basically just cherry-pick a design for a virus that isn’t captured by this one? They might have a hard time, but they can just keep searching until they eventually find something. It’s just the defence-offence thing, that they can just keep searching until they find a weakness.

I suppose you would say initially they’re not going to potentially have that capability, because they just don’t have the same resourcing — unless they’re a state, I guess — as the defenders, where there’s just a lot more money and a lot more people who are interested in preventing disease than causing it.

Then eventually, they might catch up, and they might be able to find the one virus design that evades your various defences. I guess by that point, perhaps we might have built up the manufacturing capacity and the scientific capacity to very quickly respond to any new threats, to design a new antiviral and to manufacture en masse and distribute it within 100 days or whatever. So maybe again we achieve some kind of balance that’s tolerable.

Do I have the right picture in mind?

**Richard Moulange:** Mostly. There are a few different points there, and I appreciate that it sounds like what you’re saying is, “Wow, Richard, this sure seems a shaky plan. Got anything more concrete, anything more robust?” Fair enough.

I think there are some reasons to be less pessimistic than that. The first is, I think you subtly substituted for two different capabilities. You said, “Suppose we have great vaccine design capabilities. We’ll also probably have really good sequence-to-function design.” The first is a much more narrow subdomain than the second — which is a deeply enabling, cross-biology generalised capability. You know, we can have AlphaFold structure prediction — that’s actually quite general, I suppose — but we don’t yet have sequence-to-function.

This I think links back to the idea of differential technological development: we should be choosing to develop vaccine-design technologies as far as possible without always relying on broader dual-use biodesign technologies if we don’t have to. Sometimes we will, but we should squeeze all the defensive juice out of a defence-dominant subdomain first.

The second thing you said was then maybe they could optimise against you. I think this is an open question. If we have truly multi-strain vaccines or universal vaccines within a class, think about that embedding space of biology again: if there’s this circle here that’s all the influenzas, at some point you might have a vaccine that just works against all of them. That doesn’t preclude very advanced actors from starting to explore a whole new family of… There are 26 human-infected viral families that we know of. Could you go into the 30s or something? Sure. But that still cuts down so much of the risk. That is clearly a thing worth doing. So I want to push back on the idea that it would always be possible to counter. I’m excited that eventually parts of this might be defence-dominant.

Then you talked about, very excitingly, very advanced manufacturing capability. We at CLTR have been thinking about this a lot, more my colleagues than myself, so we can put up links to the [relevant papers](https://www.longtermresilience.org/reports/boosting-uk-supply-chain-resilience-to-mitigate-catastrophic-biological-risks/) in the show notes. But you’re right that advanced manufacturing capability is going to be really important. I wouldn’t rely on it though, in the sense that it’s going to take a very long time to get this online.

I think there is this sort of golden world where we have always on flexible local capacity: that every GP — every doctor’s office in the country, for the Americans — you can just take a blood sample or something, press a button, and then get this optimised personalised vaccine the moment this happens. This is spread all over; it’s a decentralised system. That would be amazing. But baby steps. That’s a very different world than the one we’re currently in.

### Intervention #5: Screen all orders for DNA [02:12:01]

**Rob Wiblin:** OK, let’s talk about another technology we might want to differentially advance. Your organisation — including my wife, who was a coauthor on this one — recently published a [cost-benefit analysis](https://www.longtermresilience.org/reports/cost-benefit-analysis-of-synthetic-nucleic-acid-screening-for-the-uk/) suggesting that DNA sequences that people have requested to synthesise for scientific purposes, that screening them to make sure that they’re not dangerous one way or another, passes a cost-benefit test — even if the UK goes it alone, and only does it for sequences that are requested in the UK.

I think people might understand — given the threats that we’ve been talking about, given how many people could die in a biological catastrophe — why in general it might be a good idea to screen. But I think a common objection has been that if only one country does it, then a bad actor will just request the sequence in the mail from another country that isn’t doing the screening. How then can it be that it passes a cost-benefit test for the UK to go it alone and potentially do it, even if maybe other countries don’t follow its example?

**Richard Moulange:** It’s a very good question. I should clarify I’m not on that paper, so I will do my best to represent my colleagues’ work, but maybe you should get one of them also to talk about synthesis screening in the future.

My understanding is the model — and it’s all publicly available on the website, including the underlying economic modelling and all the assumptions that the team put in, so anyone can go and check — assumes only a very small proportion of all the sequences that the world might order, that companies and academics around the world order, come from the UK. So it was explicitly baked in that even if you’re only cutting a tiny bit of the malicious ordering space off, that this would still give benefits.

Now, you’re right that there could be a world where there’s absolutely 0%: that the UK alone has mandated synthesis screening, so no one else tries. So we already have some voluntary screening. There’s this organisation, the IGSC, the International Gene Synthesis Consortium, whose industry members agree to all screen to a certain standard. We have that and people still order in the UK.

Maybe you’re saying that it’s none of the bad people, it’s only the good people. But then I would come back to whom are you trying to stop with gene synthesis screening? It’s not states, because they have local synthesis capabilities themselves in most cases. They’re not necessarily ordering from a US or a UK company. Instead, it’s often your so-called “highly capable individuals.”

So in the UK, thankfully, 99.99% of people with lab access in the UK are, I think, fundamentally good people who want to use science to help the world. However, I assume that the number of people in the UK who wish to cause harm in this way is not zero. They might order from a UK source because, especially if you imagine you’re in a lab and you usually order from one company and then suddenly your colleagues notice you’ve ordered a different one, people are like, “Why is this thing in the mail?” Already there are questions of obfuscation, there are questions of countersurveillance that get to the point that there might be reasons that someone in the UK would want to order from a UK firm, because it is easy for them to access that domestically and to disguise what they’re doing.

I agree it’s only a small proportion of the world, but also you might want to do something on site in the UK, because you want to deploy in the UK, and you wouldn’t want to have to build your virus in one country and then fly it over. It really depends what the threat model is, but there are reasonable reasons.

I’m sceptical of this claim that if synthesis screening were mandated, 0% of adversaries would ever order from the UK again, that magically everyone would just switch. Thankfully also terrorists make mistakes sometimes.

**Rob Wiblin:** Well, they have a very strong record of making mistakes.

**Richard Moulange:** They really do. But yes, the underlying points are: this was accounted for, and heavily discounted in some sense in the cost-benefit analysis, but also there are reasons to think that this would still be capturing some malicious activity.

**Rob Wiblin:** Yeah, I guess the net benefit explodes in this scenario… It’s kind of a closer call if the UK goes it alone; I think it was within the error bounds that perhaps that it wouldn’t be worth it. But if the UK demonstrates that this is possible to do technically, that it’s not too expensive, not too impractical, then I suppose people have talked about this since I was in high school and studying biology. I remember people were worried about the risk from DNA synthesis centuries ago when I was in high school.

But I think interest is really increasing around it because of all the things that we’ve been talking about: that the risk of people successfully pulling something like this off is going up. So the chance that the EU and the US and China are all interested in emulating a successful programme like this seems meaningful. Certainly if we have a near-miss scare or something like that, you could really see people rushing to do it.

**Richard Moulange:** Yes, I think it’s really important that many jurisdictions consider doing this, and I’m optimistic that there are a lot of tailwinds behind this effort.

In particular in the UK, it was a commitment in the [UK Biological Security Strategy](https://www.gov.uk/government/publications/uk-biological-security-strategy/uk-biological-security-strategy-html) to something like “deeply consider” whether mandatory gene synthesis screening was necessary. They already have guidance that companies follow and I’m excited to think that this cost-benefit analysis is important evidence supporting the decision that they should mandate it.

More than that, the EU, in the recent first draft of the forthcoming [Biotech Act](https://www.eu-biotech-act.com/), has included mandatory synthesis screening as an option.

And the United States has actually been ahead of a lot of countries for a very long time, where they’ve only ever had guidance, but their voluntary guidance is enough that federally funded research — which is an awful lot of research, both domestically in the US and internationally — synthetic acids associated with that research must be ordered from responsible providers who screen. I think that’s a hugely positive thing anyway, that has really shifted the needle.

So I’m pretty excited that the pieces are all in place for a shared international mandate of this really quite cheap technology, and that would suddenly cover an awful lot of the risk surface.

**Rob Wiblin:** I guess the reason that it works, even if you’re not at 100%, is: imagine that you’re a postdoc or something at a university lab, and you’re hoping to do something surreptitiously that’s very dangerous. But almost all of the main players are screening, and then you order from one of the handful, from Venezuela or something, that aren’t doing it. Then that’s super sus to your university. Maybe they’ll just block you from getting anything from there or from bringing anything in. And I guess alternatively, the intelligence services might well be able to find out that you’re doing this, and that puts you on a watch list, basically.

**Richard Moulange:** This goes both ways. It goes with the companies as well. If governments start mandating screening, then more and more companies will think, “We’ve probably got to go and join the International Gene Synthesis Consortium now, because they’re the ones with the best practice who can support us in implementing this regulation.” Any company that didn’t do that would be officially saying, “I no longer wish to offer my services in the UK, the EU, or the US” — or maybe China, depending on who did it.

Why on Earth don’t you want to do that? Those are giant markets for modern biotechnology. So not only would that be a huge commercial mistake, it’s also super suspicious. And I would look forward to colleagues in the intelligence community taking a very close interest in any companies who would be foolish enough to do that.

**Rob Wiblin:** So I guess the biggest risk or the biggest challenge with this is that as the AI tools get better at obfuscating what proteins are, where they come from, and what they might be used for, in order for this screening to be highly effective against a smart adversary, you need it to be extremely good at figuring out whether a given sequence is potentially able to contribute to a biological weapons programme or to some extremely dangerous pandemic. And then that model itself is an information hazard, because it’s basically a measure for determining whether something is dangerous and harmful or not.

So within the defensive acceleration framework, why isn’t this actually not advantaging defenders? Creating something that basically can tell you whether something contributes to a biological weapons programme seems like it might advantage adversaries.

**Richard Moulange:** Yeah, that’s a really good question. You’re right that the underlying capability of “takes in sequence and gives” — let’s simplify it — “a binary yes/no: yes, biological weapon; no, not a biological weapon” is sort of dual use.

I think this is sort offence-defence neutral, because you can use it to deploy for screening, or you can gradient descent on it and you can be searching your sequence space, and every time you get yes or something closer to a yes, you can optimise your sequence further until you’re maximising the probability that your classification system says yes.

However, that does not mean that the infrastructure that goes around building screening is not defence dominant. If we are in a world where we have this dual-use, offence-defence neutral, sequence-to-function prediction, then it will be a very bad world if we do not have the surrounding infrastructure — both technical but also regulatory- and governance-related — to actually use that for defensive purposes. Using that classifier to classify orders is a defensive use case.

So you’re quite right that the actual def/acc investment is getting us to a world where we go, “Soon we will have brilliant sequence-to-function prediction. When we do, we are totally ready,” and it’s also getting us to a world where soon we will have brilliant sequence-to-function prediction: we are ready to collect information on those who might wish to misuse it and in fact disrupt their activities. Both of those aspects are defensive sort of wrappers around what is ultimately an office-defence neutral technology. Does that make sense?

**Rob Wiblin:** Yeah, I think it does.

### AI companies talk about def/acc more than they fund it [02:21:57]

**Rob Wiblin:** So I think the def/acc idea — let’s not slow down technology; let’s speed up the stuff that is good, that advantages defenders — is a very attractive framing, a very attractive mentality, because it allows you to, on the one hand, address your safety concerns and your anxieties without seeming like you’re anti-progress and anti-technology and you’re a doomer or something like that. So I think many people have latched onto it, including me I guess.

How much of this stuff is actually happening though? I worry that it’s such a nice idea that people talk about it a tonne — but then are actually many people going into def/acc projects? Is it attracting the talent, is it attracting the funding that it needs?

**Richard Moulange:** Yes. No, we’re barely starting. I think we’re in the foothills of the def/acc mountain. A good example I think is [BlueDot Impact](https://bluedot.org/), which provides courses on where people can go and learn about AI security and biological security topics and skill up. And they’ve now started a big new programme specifically around defensive acceleration. There have been lots of hackathons where they invite people to go and create new ideas, and now they’re going to be funding some of those best ideas. This is really exciting. It’s also like one not-very-well-heard-of company. I think we can do better.

Beyond that one small company, there’s been a lot of talk, but I’m not sure there’s been as much action. So I really want to be fair here.

I want to talk about how the frontier AI companies are thinking about this. Not to pick on them particularly, but there’s something that OpenAI said that was very important here. They’d recently released, back in 2025, their first model that looked like it was high risk on the biological and chemical domain. I think it was ChatGPT Deep Thinking or something similar to this. They had a [blog post](https://openai.com/index/preparing-for-future-ai-capabilities-in-biology/) where they said, “We think our models are going to materially increase biological risk in the world” — and not just theirs, but the whole industry’s — “and so we think it is really critical for society and for national security that we invest in better biological security.”

I was so on board up to this point. And then they actually said, “It’s really important to have DNA synthesis screening.” I thought, that is important, but that’s not something that you do — that’s something someone else is going to do.

**Rob Wiblin:** Passing the buck to someone else.

**Richard Moulange:** Yeah. And they started saying, “We really think it’s important that biosecurity people really accelerate lots of other things.” Sort of like, OK, but what are you going to do about it?

Now, to their credit, they announced they had a conference or something where they invited top experts, I think mostly in the US, to talk about what they could do. They promised also they were going to be keen to accelerate defenders. And I think they have a [webpage](https://openai.com/form/researcher-access-program/) somewhere where they say you can apply to get maybe more compute credits or to get unsafeguarded models. But I know of people who work professionally full-time on biological security, often related to AI as well, who have been trying to get this sort of stuff — not just from OpenAI, also from the other companies; it’s not just on them — and the response I think has been somewhat lacking to date. I am not seeing enough think tanks or startups saying, “We’re so thankful to [insert your favourite company here] for providing all this free compute. It was so important that we got this unsafeguarded model that we used very responsibly to get this new biological defence system.”

So I’m really concerned that there’s just been talk up to date. It’s great that people have recognised that this is part of the problem. But part of the reason that I wrote some of these [blog posts](https://richardmoulange.substack.com/) back as part of the [_Asterisk_ AI Blogging Fellowship](https://www.asteriskmag.ai/p/the-asterisk-ai-blogging-fellowship) that was the catalyst to do this was that everyone was saying it was important. No one was specifying actually how to do it.

**Rob Wiblin:** Yeah. What do you think? What is the barrier to getting more of these projects happening? I could see three main ones.

On the government side, governments aren’t willing to spend money. I guess the UK in particular is very fiscally stretched. It’s always difficult to bid for large budgets for science.

There’s also just the bandwidth to even think of it: governments are dealing with all kinds of different things. This is not a threat that has actually happened yet. So it may be hard to get as many staff as you might like to even be considering what the response ought to be.

Then there’s also, I imagine the experts in this area, especially ones who are both good at the science and are highly entrepreneurial and could try to own a project end to end, are surely in enormous demand. Persuading them to work on one of these def/acc AI-bio projects, I’m sure it’s competitive, but it’s a hard sell because there are many things that they could go and do.

Did you have a sense of what the bottleneck is?

**Richard Moulange:** Yeah, I think there are a lot of bottlenecks, and I think you’ve said them. I think a lot of it is going to be people — which is exciting, because I think there’s lots of great latent talent out there. A very good friend of mine, he finished his PhD at Cambridge as well last year, and now he’s going to found broadly an AI-bio startup. I think it’s exciting, but he’s one of very few people I know.

I know of a few other startups that have just been announced in the last few months. They’re all very small, they’re probably mostly in stealth. This is not the response I would expect from a society who is going, “This is one of the defining national security challenges of our time.” We will get there. I hope it’s not only a biological attack that makes us get there, but there are people. So I’m excited by work to have hackathons, ways of sort of doing pull mechanisms to give promising people a little bit of funding.

Eventually, however, a lot of this is that the reason it’s hard to have industry work in this space is we come back to sort of [general market failures](https://80000hours.org/podcast/episodes/rachel-glennerster-market-shaping-incentives) around biosecurity: at some point the one buyer of this product is going to be a government, and probably the government is not going to intend to ever use whatever thing you’ve built for a long time. It’s only in an emergency, unless we can be building products that are always on, like biosurveillance. I think we should be doing this, because biosurveillance allows you to understand the spread of disease in your country all the time, 24/7, as well as spotting if something engineered comes in. You just have a heat map of where are the hotspots of influenza, of COVID, or RSV, whatever you like. There is ongoing economic benefit, but it’s often hard to find those ongoing economic benefits in a lot of biological technologies.

**Rob Wiblin:** You have a really nice blog post on your Substack where you go through 15 [different def/acc projects](https://richardmoulange.substack.com/p/deep-dive-how-the-uk-can-enhance) that you’d really like to see the UK, and I guess the US as well, get on top of and advance faster than is currently happening. So if people are looking for more ideas for science that they could go do, or companies even that they could start, then they could go and start by looking at that blog post.

**Richard Moulange:** Please do.

### Can you build a profitable business solving this problem? [02:28:44]

**Rob Wiblin:** An audience question was: “I hear lots about Silicon Valley startups doing biosecurity including [Valthos](https://valthos.com/) and [Red Queen Bio](https://www.redqueen.bio/). Many of them claim to be targeted at AI bio. I’m interested in assessments on how much risk these startups reduce?” I should say that Valthos aggregates biological data from commercial and government sources to identify emerging threats and assess risks, and Red Queen works with frontier labs to map AI-enabled biothreats and pre-build medical countermeasures.

**Richard Moulange:** I’m excited that these companies exist. It is strictly better that we have some companies that are deliberately trying to deal with catastrophic AI biothreats than not. I think it’s a good thing. I won’t speak to these companies in particular, because I think it’s sort of unfair. I don’t know loads about their work, and they are just one of many.

But do we need this sort of industry work in general? Absolutely, yes. How optimistic should we be about them succeeding in their missions? I would always just recommend to people that what a company puts on especially a launch website often will be perhaps more general and more optimistic. They may end up pivoting lots into something narrow, more specific that nevertheless still creates a lot of beneficial societal value.

I think there are huge opportunities for AI to speed up the development of medical countermeasures, say. This is why a lot of people have been [calling](https://cepi.net/artificial-intelligence) for making the 100 Days Mission AI-enabled: we can use AI to design sequences faster, to process data faster, share data faster. But nevertheless, you can’t get around a fundamental blocker, which is that often it’s actually the clinical trials that really slow things down.

I think there’s been some [great recent work](https://ifp.org/progress-deferred-lessons-from-mrna-vaccine-development/) from the Institute for Progress you may wish to link to that talks about how clinical trials are a blocker. Famously in COVID, the AstraZeneca Oxford vaccine, one of the first vaccines to be made, people disagree exactly how long it takes, but people talk about it taking a week or maybe just a weekend even to get the design — but then mass producing that vaccine and especially safety testing it in clinical trials meant that it was only deployed something like nine months later, give or take.

**Rob Wiblin:** Isn’t this quite a fundamental problem that safety testing just takes time, because you have to put it into human beings and see how that plays out? The fact that AI is getting better doesn’t allow you to speed that up so enormously. I guess you can do in-silico simulations, but that’s not going to be fully persuasive or reassuring to people, so they might just not be willing to take these medicines unless it’s a really extreme situation.

**Richard Moulange:** Yes and no. You said you could do in-silico simulations. I want to be open to the world where you can AlphaFold this thing — in the sense of, we can get to in-silico simulations that are effectively experimentally accurate.

I’m excited about, up to a point, toxicity prediction models that really allow you to know well in advance this sequence is safe. But as we will talk about in this podcast, that’s hugely dual use: if you can predict whether something is likely to be harmful, that can be misused. But this is another example of a dual-use technology that we do in fact have to deploy defensively, but we have to think very carefully about how we secure it.

I think there’s also exciting work on, say, challenge trials. The organisation [1Day Sooner](https://www.1daysooner.org/) is probably one of the leading lights in that part of the field, where you could be testing these drugs on healthy young volunteers in a crisis who know that they or their loved ones might die if you don’t get a vaccine sooner and are willing to take additional risk, much like members of the armed forces are willing to take additional risk for society.

**Rob Wiblin:** Hey, everyone. Rob here. I just wanted to let you know that _The 80,000 Hours Podcast_ is looking to hire some skilled video editors to help us produce more episodes and to turn them around faster.

Someone is most likely to be an especially good fit for this if:

  * They have great attention to detail, and will find editing long-orm content satisfying rather than tedious.
  * They’re familiar with long-form podcast or interview content in general.
  * They have experience working in a team collaborative editing environment.
  * And/or if they have some experience using DaVinci Resolve, which is our primary editing tool.



Remote is fine. It’s a part-time role with the potential to scale up to full time later, and the pay would be approximately $40–74 USD an hour, depending on someone’s skill and experience.

For more information, go and check out the [expression of interest](https://80000hours.org/2026/02/expression-of-interest-contract-video-editor-for-the-podcast-team/) on our website, which we’ll link to in the episode description.

All right, back to the show.

### This doesn’t have to interfere with useful science (much) [02:33:08]

**Rob Wiblin:** Another question from the audience was someone who asked: “I’m interested in the bull case of biological design tools. How much progress would we forgo in virology and other medical fields if we chose to regulate them?”

**Richard Moulange:** That’s a very important question, and one that I don’t want to underestimate. It must be considered carefully. I’m excited that I think most progress in AI-enabled biology should be able to continue totally unabated.

An example is: in my PhD I did cancer transcriptomics, and I built AI models to help us understand, diagnose, and treat breast cancer. I struggle to find misuse relevance in my work. Well, I think my work wasn’t very good — I was just a PhD student — but in the field more broadly, I think it is just pretty much all upside. So this is something that can sometimes be overstated in AI: it’s not just every bit of AI-enabled biology under the sun that will immediately lead to pandemic viruses.

Unfortunately, it is a very small subset, and that subset is predominantly in virology, and the most dual-use parts of virology working on pandemic viruses. This is tricky, because it means that there will be a small number potentially of bigger losers, people who will really feel constrained in their work, even as there are many people who will not feel constrained. They win, but their winning is diversified. And this is sort of the setup for a classic market failure.

I would say look to the physicists: most physics can go unabated, but because of the events in the 1940s, nuclear physicists appreciate that their work is just incredibly powerful and deadly, so we need to have responsibility there.

I know lots of virologists who deeply care about being responsible, and appreciate that actually in fact a little bit of their work might need to be constrained, or they might just have to prove that they are responsible scientists at a legitimate institution in order to carry on. But I want to reassure people that I think most AI-enabled life sciences, it’s just upside, and really let’s go.

### What are the best low-tech interventions? [02:35:16]

**Rob Wiblin:** Andrew Snyder-Beattie and his team at Coefficient Giving, who [I interviewed a couple of months back](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/), they look at all of this entire picture, and they think that the main way in which bio is defence-advantaged or the main defensive technology that you can push forward that makes a massive difference is personal protective equipment and biohardening.

It’s a bit more of a dire picture, because this is a world which, in response to something going very wrong, we’re going to have to wear face masks and be sanitising the environment to an extreme degree that we never have before. But Andrew Snyder-Beattie made the case in this episode — if people want to go back and listen, it’s very good: episode #224, [Andrew Snyder-Beattie on the low-tech plan to patch humanity’s greatest weakness](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/) — he made the argument that the main weakness that someone using bio for offensive purposes has is that these things are very small. They have to spread between people in order to infect them, and we can simply insert physical barriers between people that make it extremely difficult for viruses to go from the first person who you might deliberately infect to get to the rest of the world.

What do you think of that take? I guess PPE and biohardening hasn’t been something that you flagged as yet.

**Richard Moulange:** Yeah, I think that’s very fair. I think I broadly agree. I would distinguish between PPE and biohardening, because I think they’re subtly different.

Biohardening is especially good because eventually we might be able to get to a world where we just don’t have viral pathogens in the air, regardless of whether there are malicious actors in the world who wish to build biological weapons of mass destruction. And that alone is a brilliant thing. Imagine if we could radically reduce the amount and the spread of communicable disease in the world, if we could just get rid of most respiratory viruses. And I think that thesis is very investible. There’s lots of reasons, even ignoring all the stuff about biological weapons, to go towards a world where we better control the built environment.

PPE I think is really important. I do talk a little bit about this in a [forthcoming paper](https://www.longtermresilience.org/reports/defensive-acceleration-the-strategic-pivot-needed-for-uk-biological-resilience/), that might be out by the time this show is up, on defensive acceleration. I do think there are loads of def/acc opportunities for PPE. We can be basically getting the best kinds of elastomeric respirators faster and cheaper. Someone is going to build the companies that do this. I think governments and industry should just race each other to see who can do it first.

But it’s always a thing that PPE is the sort of thing that will only pay off in a pandemic. You are going to suffer from government, and industry up to a point, short-termism: that no one wants to buy the thing that they hope never to use. You’re going to be talking about stockpiling these things for 20 years and then renewing it and hoping there was no pandemic in between. It is sensible — you and I know that that is in fact what people should do — but it’s going to be a much harder sell.

**Rob Wiblin:** Are there any important friendly disagreements between you and perhaps the people at Centre for Long-Term Resilience and the teams like Andrew Snyder-Beattie and his team at Coefficient Giving on these general questions?

One that stands out is I think you’ve said through this conversation and in writing that you think bio is offence-dominant, and I guess ASB has been trying to make the case that actually it’s defence-dominant because of this physical barrier issue. Is that a real disagreement or just a difference in focus?

**Richard Moulange:** So I am partially persuaded by this. I think the defence-dominance of the built-environment intervention was the strongest counterargument. So I’m totally there.

We do have the friendliest of disagreement though in the sense that I really would not underplay that, to date, everyone who’s ever thought about biology has thought that as a domain of warfare it is offence-biased. A lot of that [RAND paper](https://www.rand.org/pubs/perspectives/PEA4102-1.html) that I mentioned earlier, that went through lots of different ways biology might be offence or defence balanced, there is a reason they came out four out of five offence. It is also true that it is much cheaper to build pathogens than it is to defend against them. Even in the built environment case, we’re talking about refitting every building in the world.

**Rob Wiblin:** Sounds expensive.

**Richard Moulange:** A little bit, yeah. That is the same sort of issue as the “giving a vaccine to everyone in the world” kind of thing. Now, there is a nice difference that you can do it in advance, just like you can in fact vaccinate people in advance. We do this with some diseases. There’s a reason we don’t have typhoid or diphtheria very much, at least in rich countries, because we can just totally preemptively vaccinate our way out of it.

So I think this was a great challenge for me, and I’m excited that there are potentially more avenues. But just for your listeners: please don’t underestimate that this is a tricky domain. A lot of offence-dominance still abounds.

**Rob Wiblin:** Yeah, I should say that ASB was talking about a four-pillar plan, the first one of which was surveillance and detection of diseases, and the fourth one was medical countermeasures — which are the other two things that you were talking about. Obviously a tonne of overlap.

### Richard’s top request for AI companies [02:40:17]

**Rob Wiblin:** What would you like the AI companies to do differently?

**Richard Moulange:** Lots of things, I’m sure. I’ll stick to AI bio. There’s lots of things in AI safety I would like them to do differently.

I mentioned before privileging defenders, trusted tester schemes: there is so much low-hanging fruit here. It is sort of unacceptable that the people that you can pre-identify as those working on the most pressing catastrophic biological security challenges in the world — and I do not just mean me here; I mean people who build evals, people who are building actual countermeasures — are not routinely getting the best AI before anybody else, and learning and having a feedback loop to deeply integrate it with their work. This seems a solvable problem. So that’s one thing.

But there are other things around improving threat modelling. We went through different threat actors earlier in the discussion. I think some of that work could still be integrated into frontier safety frameworks.

Another one is taking up best-in-class classifiers and safeguards. Not every company safeguards against BW discussion as well as others.

And another one is really engaging a little bit more with — I think they do this really well up to a point — the agentic paradigm. AI companies are really very engaged on this: they know that agents are the other big thing. And we’ve seen this a lot with Claude 4.5 Opus, with Claude Code in December. For all that, people were like, “Wow, this is finally…” You know, [Dean Ball said it was AGI](https://www.hyperdimensional.co/p/among-the-agents). I don’t think it was AGI, but it’s very cool. It is genuinely very cool. So they’re really up on agents.

But there are some interesting things around agents that change the existing thinking on AI bio. In particular, we’ve been thinking about static guardrails on individual tools. But we will move to a world potentially where not only are agents wielding many tools together, but they’re putting them together, they’re talking to the user in natural language. We may get to a world where they build tools.

We see this with agentic coding: if you want to achieve a particular function, you don’t wait for an academic to release a paper on exactly that function. You just ask Claude Code or OpenAI Codex to code it out for you.

This is going to happen in biology too. Soon we will have a world where not only do you grab tools off the shelf and put them together, but the agent in fact just summons from the ether with a very little bit of compute, as long as the data is public, new capabilities that have never existed, personalised capabilities for that particular person, whoever that means.

There’s going to be lots of beneficial stuff here. That’s great. It’s called coding. I’m not saying anything profound in some sense, but I’m not sure that both the policy community and the AI companies have really engaged deeply with what that means. There are real positives here.

It could be that everything goes through agents, and then you have a sort of bottleneck — that as long as you secure the agents, by definition you secure the biological tools that soon will be the ones on which they do most of the creation.

But on the other hand, it’s all eggs in one basket. I have not seen deep discussion yet, not just the companies, but from across the whole community — companies, government, and civil society — around are we sure that the things that we are doing to defend against these threats are robust to a world where everyone just has natural language agents that just automate bioinformatics for you?

**Rob Wiblin:** Yeah. A question from the audience was: “All of the major AI companies have bio evals. How good or trustworthy are they?”

**Richard Moulange:** In some sense they’re very trustworthy, because they don’t make most of them. So most of the top bio evals in the world, at least the ones acknowledged publicly in model cards, are made by third-party companies. [SecureBio](https://securebio.org/) particularly makes some of the best in the world. They made Virology Capabilities Test. Deloitte, a consulting group that absorbed what was Gryphon Scientific — which is a leading US sort of biological security firm; a lot of folks with deep national security experience there — they do great work.

There are lots of others. RAND US, the [Center on AI, Security, and Technology](https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology.html) in RAND, have a strong bio evals programme. And also the UK and the US — [UK Security Institute](https://inspect.aisi.org.uk/) and the US [Center for AI Standards and Innovation](https://www.nist.gov/caisi) also do evals and red-teaming.

So in some sense it’s pretty good, because they’ve got some of the world’s experts doing it. On the other hand, it’s still not enough — because this is just a fundamental problem with bio evals: they are so proxied. We can never do the actual thing that is scary. In cyber, you can go much closer to the real offensive activity, because you can set up cheaply a digital environment that exactly simulates what it would be like to attack a particular company. You can even draw on past instances. We can say, “This company was set up like this in 2023 and this was the vulnerability. Can AI find it?” But it is unethical and in fact illegal to do the equivalent direct thing with biology. So we always have this fundamental limitation of bio evals.

This is where companies have turned to uplift studies, but very few of them do it. [OpenAI did an uplift study](https://openai.com/index/building-an-early-warning-system-for-llm-aided-biological-threat-creation/) a little while ago now, and it was a bit tricky because it was reported as a negative: no, we didn’t really uplift. At the time it was something like GPT-4, I’m not sure. It was an early model. It probably didn’t uplift very much. But actually they broke down every way it could have uplifted someone. And all the uplift was all very slight. Sometimes you were uplifted, sometimes you weren’t on a particular aspect of biological weapons development. So then they said, overall, we haven’t got strong evidence that you were uplifted. But if you actually amalgamated all the signals of evidence into sort of a single P-value, suddenly —

**Rob Wiblin:** It was clear that it was higher on average.

**Richard Moulange:** Yes. Now, I think it was still marginal. But that was the last one they’ve publicly done. Though the [Frontier Model Forum](https://www.frontiermodelforum.org/), which is a consortium, has invested in a new, big uplift study that hopefully should be reporting soon. So the companies would say they’ve just gone into that. _[Note: As of mid-2025, this project didn’t have a big enough sample size to detect large AI uplift, but they did[conclude](https://arxiv.org/abs/2602.16703) that it was likely that AI provided some small amount of uplift to novices. —RM]_

But on the other side, Anthropic has carried on doing uplift studies. They’re not very well reported, they’re only in the model cards. But that’s something else that I think is inconsistent. Uplift studies are a particularly expensive thing, but nevertheless provide more valuable information than bio evals. So on the margin, if you’re a multibillion-dollar company, maybe you should be doing the expensive thing that even governments and nonprofits will find it hard to do.

**Rob Wiblin:** I thought you were going to say that we don’t even know how good or trustworthy they are because when they report the results in model cards and things like that, I guess for security reasons potentially they don’t give us many details of specifically how they’ve done the experiment or all of the details of the results. Is that right?

**Richard Moulange:** Yes and no. Information is sparse in model cards, but it really depends on the company. There are companies who could give more information, because their competitors do, and there doesn’t seem to be any grand security breaches. Though I admire that general framework. You should be careful. I’m not as worried about this, because some of the best evals are made by places like SecureBio: they are just allowed to go and report the results on public models themselves on their own website. So we still actually have a lot of insight through the third parties.

There has been a lot of criticism about how they report. They report inconsistently in lots of cases. Are they comparing to previous frontier performance or the best human performance or the best human team performance, or is it a novice? What is the baseline?

There’s a great paper called “[STREAM](https://www.governance.ai/research-paper/stream-chembio-a-standard-for-transparently-reporting-evaluations-in-ai-model-reports).” I can’t remember exactly what it stands for, but it’s from Centre for the Governance of AI, and they offer some simple guidelines on how to standardise bio eval and other eval reporting. I think that is going to be best practice. I don’t think that’s readily implemented yet, and it should be.

**Rob Wiblin:** Another on-point audience question was: “Should we expect a terrorist use of chemical weapons or widespread enablement of other attack types significantly before we see bioweapons enabled by AI?”

**Richard Moulange:** We can quibble about “significantly,” but broadly, yes. There is actually [great work](https://www.governance.ai/research-paper/dual-use-ai-capabilities-and-the-risk-of-bioterrorism-converting-capability-evaluations-to-risk-assessments) from Luca Righetti’s threat modelling team at the Centre for the Governance of AI that I think has done more on this than anybody else. There are public databases of historical terrorist attacks, and you can categorise them by chemical, biological, explosives, radiological and nuclear as well, but much less so. And going through this, you find that chemical weapons attempts are just much more common than anything else, at least on the public record.

**Rob Wiblin:** And do they succeed more?

**Richard Moulange:** I’d have to check. I think they do succeed a little bit more, but again, just thankfully the vast majority of things just don’t succeed still. So I do think that we are going to see AI-enabled CW before we see AI-enabled BW.

**Rob Wiblin:** Is that basically just because it’s easier to do a chemical weapon attack, because it’s easier to make a poison than to make a living thing?

**Richard Moulange:** Precisely. They’re a lot simpler. And also — this is where intent plays into it again — there are more reasons you might want to kill a single person, maybe unobtrusively, than you might want to start a pandemic to kill millions of people. So not only is it going to be a resource question, I think it’s also a question of threat model, and why these people want to cause the harm they want to cause.

**Rob Wiblin:** So I guess precisely for that reason — that chemicals don’t spread autonomously; they don’t replicate and go worldwide — the potential harm from chemical attacks is much, much smaller than creating a new pandemic virus. But you said in your notes that, despite the fact that the scale of the expected harm is a lot lower, you would still like AI companies and people in the AI governance space to be paying more attention to chemical weapons threats than they are. Why is that?

**Richard Moulange:** I would. Much more. [Several reasons](https://time.com/7373405/weapons-of-mass-destruction-ai-security-gap/), actually.

One is that I think this is providing valuable information that we are leaving on the table about the sorts of people who wish to cause harm building WMD, especially non-nuclear WMD, which could really inform our response and how we can make sure we have targeted guardrails that stop malicious actors without constraining beneficial research.

If chemical attacks are much more common, then there’s going to be a lot more information about people in the world already trying to use AI to achieve this. And that’s going to be very relevant actually for how people might want to use AI to help with biological attacks — because a lot of the things are very similar around, “I want to act covertly, I want to get instructions, I want to beat the guardrails and jailbreak the model, I want to get advice about how to deploy things, I want to get encouragement and be boosted by the AI to keep going with my horrible illegal endeavour.”

And I worry that we are leaving evidence on the table about how modern adversaries — states, terrorists, and lone wolves — might be integrating AI that could really inform the biological response.

**Rob Wiblin:** So the notion is that if we found a group or an individual attempting to do a chemical attack using AI, then we could study what they did and what went right and what went wrong and what might have prevented that, and then apply that to the biological case, where the scale of the damage is even greater.

**Richard Moulange:** Exactly.

**Rob Wiblin:** And that’s not happening?

**Richard Moulange:** Partially, but it’s not very clear. Companies often say they are going to prevent CBRN attacks, but then they even acknowledge much more sort of quietly that they actually currently only eval for biological attacks.

I think Anthropic, for example, explicitly says they don’t eval for chemical, but they do monitor. So monitoring is good. Great. But where’s the sharing of the information?

Because if you look at cyber, it’s really great. I’m really pleased that both Anthropic and OpenAI have now repeatedly been releasing at something like a six-month cadence cyberthreat intelligence reports, where they say, “We have observed threat actors in the wild doing these bad things with our models with respect to cyberoffence. Here’s what we learned and how we stopped them. We think this is in fact a public good that we should share with everyone, but especially the government and civil society, to know it, to be designing governance regimes. But also other AI companies need to know it because it’s relevant for people misusing their models too.”

Where is the equivalent for chem? I think this would be such a useful resource.

There is a good argument that maybe I’m just not seeing it.

**Rob Wiblin:** Not one of the cool kids, maybe.

**Richard Moulange:** Maybe I’m not cool enough. And certainly for biology, I think that might be very fair. With respect to state uplift, I think again that might be fair. Though in cyber, it’s always been odd that people can talk about state activity much more than in chemical and biological warfare.

But I really hope that they are at least sharing it with the leading AI security and safety institutes, with the international network as well. But actually, I would say sharing it with third-party experts, the ones who are designing your evals for you, might be a really useful thing to do.

I think there’s another reason this is very important. Two even.

One is we’ve been talking a lot about transmissible biology, and I quite agree that pandemic threats are the ones with the greatest scale and thus actually really do need to attract the lion’s share of the resource in lots of cases, or at least much more resource than they currently do. But I would not wish us to overly discount non-transmissible biology.

Anthrax is the classic example, because it would be very concerning if AI-enabled attacks could kill millions of people in a large-scale urban bacteriological attack. This would certainly be hugely extreme, and if that capability was widely shared around states and non-states in the world, that would be deeply destabilising and awful for loss of life. Even if it wouldn’t be quite as bad as a pandemic, I think it’s still sufficiently bad that you really need to pay attention to it a lot.

**Rob Wiblin:** So the argument is the scale is not so radically smaller, because the worst-case scenario would be people figure out how to do these chemical attacks — which, if they were pulled off extremely well, could kill millions of people in a concentrated area. And then you could see lots of copycats if other people are inspired by that one instance of success.

**Richard Moulange:** Precisely. And the other reason is just brutally pragmatic: you really don’t want to be the company that enabled “only” a —

**Rob Wiblin:** Massive anthrax attack.

**Richard Moulange:** Well, yeah, that would be non-transmissible bio. But even in the chemistry case, “X company’s AI was used in a high-profile chemical terror attack against a school or a political centre”: I think just for reasons of risk management they would want to take this seriously. I applaud trying to have prioritisation here, but these companies have billions of dollars. I in fact do not think it is an either/or. They don’t have to do C or B. They can be doing both.

**Rob Wiblin:** You should become a branding expert, Richard.

**Richard Moulange:** Oh, thank you. “Hey guys, don’t enable terror attacks.”

### Grok shows governments lack many legal levers [02:55:44]

**Rob Wiblin:** Pushing on from the AI companies to government, I think this week the talk of the town has been Grok and the image model and the various unappealing images that it’s been willing to generate for people on X.

My understanding is that in the UK, the government has been extremely displeased with the imagery that Grok has been generating, but found that it doesn’t really have any obviously legal lever to pull by which it can punish them or give them some incentive to stop this. They’ve been a bit stuck in the intermediate term.

Could the same thing happen if there was a biological threat or a near miss or something like that? Is there a clear lever to pull in the UK? And maybe even in the US is there an issue here?

**Richard Moulange:** This is a great question. And let’s be just clear about this: Grok was, at time of writing, repeatedly producing child sexual abuse material. It wasn’t just something “unpleasant” — it was something deeply illegal. And you’re right that the UK government and other governments found that this is actually in fact an activity they might wish to intervene on, not necessarily even fully stop in some sense, but they wanted to have some sort of lever to pull and they didn’t find it.

CLTR has done a lot of work in this space around AI incident preparedness, but also responding to AI security incidents. And there’s a [nice paper](https://www.longtermresilience.org/reports/preparing-for-ai-security-incidents/) on our website from colleagues in the AI unit that went through all the different legislative options at the time that the UK had, at the time of writing, the sorts of things you could use, and evaluated them: would this actually help in an AI incident? The overwhelming conclusion was that almost all of them are not relevant.

As for what the UK government might do in the future, they said they’re not going to go forward with a comprehensive AI bill, but they haven’t quite fully ruled out what they might do. I think it’s always important to look at the rest of the world. We now have other regulation in California with [SB 53](https://www.vox.com/future-perfect/461340/sb53-california-ai-bill-catastrophic-risk-explained), in New York with the [RAISE Act](https://en.wikipedia.org/wiki/RAISE_Act), and especially in the EU with the [EU AI Act](https://artificialintelligenceact.eu/) and its code of practice.

It’s not obvious that the UK should just be sort of duplicating those requirements in those laws. Would it really help anyone? Maybe they would get some more information on the margin, but they have strong voluntary agreements with UK AI Security Institute. I think UK AISI has a great working relationship in lots of ways. It’s not always perfect, but it’s pretty good with the frontier companies.

But emergency powers I think are interesting, because they are different than other ones and that’s where the UK should probably be playing. The US is absolutely right: the administration has expressed [scepticism about over-regulating AI](https://80000hours.org/podcast/episodes/dean-ball-ai-policy-governance-white-house/) and I think that there are valid concerns there. So any government thinking to add in additional requirements should be thinking not to duplicate but to complement existing work — and often probably things that are a lot less burdensome than some of the stuff we already have, especially from the EU — and be providing what is the added thing that no one else has that would really in fact keep the public safe in a crisis.

### Best ways listeners can help fix AI-Bio [02:58:54]

**Rob Wiblin:** OK, let’s push onto the brief career advice section. If people in the audience have been inspired by what we’ve been talking about, or terrified by what we’ve been talking about, and would like to do something to help out, are there any organisations that people could go and work at that particularly stand out, or particular roles that you think people should consider taking if they have the right skills?

**Richard Moulange:** I think there are a number. I’ll start not with CLTR —

**Rob Wiblin:** Which, again, is a place that my wife works.

**Richard Moulange:** Oh yes, that’s true. But I work there, so I will defend it in a moment. So particularly excellent places, but this is by no means exclusive, so colleagues, please don’t get me if I forget.

[SecureBio](https://securebio.org/) and [RAND CAST](https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology.html) are some of the two best places in the world for making biological evaluations, and they do a lot of other work besides. But that’s one thing. And some of the strongest people in the world who work on AI bio are leaders at those organisations.

Particularly also, the security institutes. The [UK’s](https://www.aisi.gov.uk/) is the largest and strongest by far. The [US’s](https://www.nist.gov/caisi) is growing. They’re doing more work with the frontier companies, doing red teaming. They’re hiring much more recently, I saw. I think that is excellent. I’m really glad that they are being given more money and authority to do that. But there are lots of other safety institutes around the world. I think for people in other countries, joining your local safety institute might be one of the best things to do. Australia has just [announced](https://www.minister.industry.gov.au/ministers/charlton/media-releases/establishment-australian-ai-safety-institute) they’re going to have one too, and I think that’s really exciting.

I think there are other places as well. Your classic AI think tanks: more and more people are starting to have a bio component, and I think that’s very important. So yes, for people who have been sceptical of this, it looks like the expert community is starting to come around and say, yes, this is really big. I think CLTR, we’re good that we spotted this as a concern earlier than most, but I’m really glad that other organisations, many of whom you have had on the show before, Rob, are starting to do this.

Then I think you shouldn’t underestimate positions within a government related to chemical and biological defence and related to national security. I think actually, if anything, those are particularly rare and precious skill sets that we don’t have as much. It might be more about people who want to transition out of government: if you’ve worked in the intelligence community thwarting biological attacks for 20 years, [please get in contact](https://www.longtermresilience.org/team-member/richard-moulange-2/). I’d love to talk to you. You’re doing great work, but I think there’s also even more, better work you could do on the margin.

But lastly, I’ll talk about fellowships and things. I talked about just organisations in general. I’m really excited that the [ERA Fellowship](https://erafellowship.org/fellowship), which has run for a number of years on AI safety, both technical safety and governance, I have been supporting them and they are now running an [AIxBio-focused fellowship](https://www.aixbiosecurity.com/) where they’re explicitly getting maybe folks who really know all about machine learning to learn more about biosecurity and apply their knowledge there, or people who particularly know more about biology to do more coding and to do more AI-safety-relevant work.

It’s this intersection fellowship I’m really excited about. I ask other fellowships: consider doing this more. I was on the [GovAI one](https://www.governance.ai/post/research-fellow) in 2023 and I was the only person doing bio at the time, and that worked out pretty well for my career, maybe just because it was pretty rare back then. So I think this is an undertapped area.

**Rob Wiblin:** What about the [AI companies themselves](https://80000hours.org/career-reviews/working-at-an-ai-lab/)? I guess you’ve had some criticisms for them, but presumably they are doing important work and there could be really useful roles there?

**Richard Moulange:** Yeah, I’ve had criticisms because that’s where the interest is of how can you do better? But you’re absolutely right that the safety teams, at least at some of the frontier labs, do some of the most important work in the world. They’re the ones with the models. I am certainly someone who would personally say joining very safety-focused teams at the companies is a thing I applaud.

**Rob Wiblin:** I guess a possible argument against working at them is that they can pay the most. And I guess they have the best recruitment teams, so they might have the easiest time hiring. So if you’re someone who’s open to working elsewhere — in government, perhaps, or in other organisations that just can’t pay the kind of equity that Anthropic or OpenAI might — then you should perhaps consider doing those other things, because they could be more neglected. You’re looking sceptical.

**Richard Moulange:** I’m not sure. I think you’re right that they can pay the best. I think a failure mode has sometimes been, not necessarily in bio but in other areas, that the companies will often want to get people with decades of experience who are really senior leaders — which makes sense, because they are people who are really legible and can talk to government and engage with the national security community, and that’s really good. But I would urge listeners not to underestimate how far even more junior contributors who really know the area very well can move the needle on some of this stuff.

**Rob Wiblin:** Yeah. What sort of skills? Obviously AI expertise is important, relevant biology expertise is really important. What other skill sets do you think are really needed in this area?

**Richard Moulange:** More than anything it is a [strong security mindset](https://80000hours.org/career-reviews/information-security/). I think that is something that has come out in past projects as lacking even sometimes in the community. A real strength of being able to look at a system and going, “But how would I break this? Where are the vulnerabilities?” For example, “Why might this proposed governance idea not be robust to future AI advances?”

I think curiosity and really keeping up with AI is very important. There are more biosecurity people around in the world. I suppose it’s an older field in some sense. The best folks are the ones who are still on the button with respect to AI, and they know where this field is at and they are also able to go, “…and where might it be in two years?”

Can I advertise CLTR now?

**Rob Wiblin:** Yeah, go for it.

**Richard Moulange:** Aw, thanks. So at the time of recording, [CLTR is hiring](https://jobs.80000hours.org/organisations/centre-for-long-term-resilience?utm_source=80k_podcast), but that closes pretty soon on the biosecurity team. So that might not be as relevant for listeners at the time.

But we rely deeply on contractors. I was a former contractor; [James Smith, your mirror biology expert](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/), was a former contractor. I think we have a good track record of contractors going on to cool things. So people who feel they have particular expertise, especially if we [still have a link to the old adverts](https://www.longtermresilience.org/work-with-us/) at the time in certain areas — personally, I’m especially excited about talking to people with deep national security expertise, maybe people who’ve connected with the intelligence community — please reach out. I would be excited to talk to you, because we’re always looking for great contractors to help us deliver on the mission.

**Rob Wiblin:** I guess obviously we will have a whole lot of other roles and organisations that people can consider at [jobs.8000hours.org](https://jobs.80000hours.org?utm_source=80k_podcast), our job board.

And we’ll link to a bunch of resources in the episode page associated with this interview. Are there any particular links? Is there kind of any other archetypal fellowship or a landing page of people who are trying to get into this?

**Richard Moulange:** At this point I would say I helped curate the [resource page](https://www.aixbiosecurity.com/resources) on the ERA AIxBio Fellowship, so I think that would be a particularly good one. You might see a preponderance of CLTR papers, but I did put a lot of other ones there as well that can give you an overview of the field. I hope that this podcast is also useful for that.

### We might end all contagious disease in 20 years [03:06:12]

**Rob Wiblin:** All right, let’s try to close out with something a little bit hopeful. You talked about a whole lot of different steps that we could take, all of which I basically agree would be helpful to a greater or lesser extent. But they are all kind of doing damage control in a situation that’s quite unpleasant, and none of them is a silver bullet that is really fixing it entirely.

So fundamentally, it seems like we’re about to go through an era when we’ve enabled a whole lot of incredibly dangerous stuff. We made it a lot easier, but we don’t yet have equivalent technologies that can fully safeguard us and defuse that risk, and actually make us even safer than we were before.

What might be the technologies that we could invent that would get us out of this intermediate, very dangerous window into a world where we say that that biological catastrophe risk was kind of a thing of the past, we’ve largely defused the bomb, and we feel pretty good about things now?

**Richard Moulange:** That is a great question. I’m glad that we are ending on optimism. The first thing to say is we have eradicated diseases. We don’t have smallpox anymore, except in two heavily guarded facilities — one in the US, one in Russia — because we were able to vaccinate everyone so much that we eradicated the virus. I think we can totally try and do that for other viruses and other pathogens.

The second is I am very excited about built environment modifications. We can get to a world where pathogens just can’t exist in the air, and huge swathes of where humans live and breathe and work are pathogen free, and we should be going to that.

The third will be that eventually I think we can have much more personalised… It wouldn’t even be a countermeasure, more just like a measure of personalised therapeutics and vaccines and antivirals, where you have local capacity. The moment something is detected by metagenomic surveillance around the world, immediately that feeds into an AI system that generates a countermeasure automatically, that gets built, and then that design is shared in a decentralised way to manufacturing capability everywhere. And just every day locally, you wake up and some machine spits out your vial and you just eat a tablet or something.

You can get really sci-fi here, but there are worlds where really we just are constantly aware of all the pathogens in the world. We are constantly defending against them, we’re not allowing them in any buildings. We’ve eradicated loads of them. And those that do get through, we are responding instantly and simultaneously, to everyone across the world.

**Rob Wiblin:** Yeah, that does sound pretty sci-fi. I suppose it requires us to be able to manufacture proteins at will locally, to be able to tell what would be an effective countermeasure, basically using just simulations on a computer to make sure that it’s not going to damage the body in some way or another.

Those things probably are all going to come sooner or later. This is not just around the corner, but none of those seems like a completely insurmountable challenge in the fullness of time. And I guess we probably wouldn’t just take a pill every morning of new drugs just invented overnight unless we really needed to. But if this was the difference between life and death, because these incredibly dangerous capabilities were disseminated so widely that it was really the only way to defuse them, then I think probably we would accept that as a cost of living.

How long do you think we might have to wait? For some of these things, we might really think that AI is going to do a lot of the heavy lifting in getting us to that point, because we would expect AI to be doing a lot of science in general in the 2030s and 2040s and 2050s.

**Richard Moulange:** Yes, entirely. You said sooner or later, and I wanted to say it may be sooner — and that’s because of very advanced AI scientific capability. I don’t think we’re going to get anything like that sci-fi world in the next 20 years without AI, but I am totally open that within 20 years we have most of the vision I just described, much of it accelerated by AI systems.

**Rob Wiblin:** Cool. I think that is a legitimately positive vision that we may not have to endure what feels like a very precarious situation for the entire rest of our lives. I guess we’ve got a lot of work to do to survive for the immediate term and then get to that longer-term, safer future.

My guest today has been Richard Moulange. Thanks so much for coming on _The 80,000 Hours Podcast_ , Richard.

**Richard Moulange:** Thank you so much, Rob. This is been really great. I’ve enjoyed it so much.

Show full transcript

## Learn more

#### [Anonymous answers: could advances in AI supercharge biorisk?  ](https://80000hours.org/articles/anonymous-answers-could-advances-in-ai-supercharge-biorisk/)

#### [Anonymous answers: How can we manage infohazards in biosecurity?  ](https://80000hours.org/articles/anonymous-answers-how-can-we-manage-infohazards-in-biosecurity/)

#### [Anonymous answers: What are the biggest misconceptions about biosecurity and pandemic risk?  ](https://80000hours.org/articles/anonymous-misconceptions-about-biosecurity/)

#### [Pandemic prevention and biosecurity  ](https://80000hours.org/career-reviews/pandemic-prevention-biosecurity/)

##  Related episodes

October 2, 2025

####  [#224 – Andrew Snyder-Beattie on the low-tech plan to patch humanity’s greatest weakness: engineered biological catastrophes](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/)

[ __Listen now](https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/)

January 13, 2026

####  [#233 – James Smith on why he quit everything to work on a biothreat nobody had heard of](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/)

[ __Listen now](https://80000hours.org/podcast/episodes/james-smith-mirror-biology-catastrophe/)

October 2, 2023

####  [#164 – Kevin Esvelt on cults that want to kill everyone, stealth vs wildfire pandemics, and how he felt inventing gene drives](https://80000hours.org/podcast/episodes/kevin-esvelt-stealth-wildfire-pandemics/)

[ __Listen now](https://80000hours.org/podcast/episodes/kevin-esvelt-stealth-wildfire-pandemics/)

October 30, 2025

####  [#226 – Holden Karnofsky on dozens of opportunities to make AI safer lying on the table — and all his AGI takes](https://80000hours.org/podcast/episodes/holden-karnofsky-concrete-ai-safety-frontier-ai-companies/)

[ __Listen now](https://80000hours.org/podcast/episodes/holden-karnofsky-concrete-ai-safety-frontier-ai-companies/)

July 26, 2024

####  [#194 – Vitalik Buterin on defensive acceleration and how to regulate AI when you fear government](https://80000hours.org/podcast/episodes/vitalik-buterin-techno-optimism/)

[ __Listen now](https://80000hours.org/podcast/episodes/vitalik-buterin-techno-optimism/)

December 13, 2021

####  [#118 – Jaime Yassif on safeguarding bioscience to prevent catastrophic lab accidents and bioweapons development](https://80000hours.org/podcast/episodes/jaime-yassif-safeguarding-bioscience/)

[ __Listen now](https://80000hours.org/podcast/episodes/jaime-yassif-safeguarding-bioscience/)

May 29, 2024

####  [#189 – Rachel Glennerster on why we still don’t have vaccines that could save millions](https://80000hours.org/podcast/episodes/rachel-glennerster-market-shaping-incentives/)

[ __Listen now](https://80000hours.org/podcast/episodes/rachel-glennerster-market-shaping-incentives/)

November 9, 2023

####  [#171 – Alison Young on how top labs have jeopardised public health with repeated biosafety failures](https://80000hours.org/podcast/episodes/alison-young-biosafety-lab-leaks/)

[ __Listen now](https://80000hours.org/podcast/episodes/alison-young-biosafety-lab-leaks/)

## About the show

 _The 80,000 Hours Podcast_ features unusually in-depth conversations about the world's most pressing problems and how you can use your career to solve them. We invite guests pursuing a wide range of career paths — from academics and activists to entrepreneurs and policymakers — to analyse the case for and against working on different issues and which approaches are best for solving them.

Get in touch with feedback or guest suggestions by emailing [[email protected]](/cdn-cgi/l/email-protection#96e6f9f2f5f7e5e2d6aea6a6a6a6fef9e3e4e5b8f9e4f1).

### Our crash course on transformative AI

We've carefully selected 10 key episodes to help listeners get to grips with the potential upsides and downsides of powerful, transformative AI.

[Check out 'The 80,000 Hours Podcast on AI'](/podcast/on-artificial-intelligence/)

Listen here, or anywhere you get podcasts:

  * [](https://podcasts.apple.com/us/podcast/80-000-hours-podcast-on-artificial-intelligence/id1688212309)
  * [](https://www.youtube.com/playlist?list=PL-BRtcBm4Yj51FAtGx3nPqjJj9N19FJzZ)
  * [](https://open.spotify.com/show/1O3PNGlf35lzxObxiKRFmc)
  * [](https://podcastaddict.com/podcast/the-80000-hours-podcast-on-artificial-intelligence/4472094)



If you're new, see the [podcast homepage](/podcast/) for ideas on where to start, or browse our [full episode archive](/podcast/episodes/).
