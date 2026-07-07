---
title: "A Dialogue on Suffering Subroutines – Center on Long-Term Risk"
author: "Brian Tomasik"
date: 2015-08-29
url: https://longtermrisk.org/a-dialogue-on-suffering-subroutines/
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by s-risks/s-risk-faq.md; dialogue on whether AI subroutines could suffer (AI welfare/digital minds/s-risks)"
---

# A Dialogue on Suffering Subroutines

29 August 2015 by [Brian Tomasik](https://longtermrisk.org/author/brian-tomasik/ "Posts by Brian Tomasik")

First written: 20 Dec. 2013; last update: 27 Apr. 2017

This piece presents a hypothetical dialogue that explains why instrumental computational processes of a future superintelligence might evoke moral concern. I give some examples of present-day systems that we may consider at least somewhat conscious, such as news reporting or automated stock trading. Agent-like components seem to emerge in many places, and it's plausible this would continue in the computing processes of a future civilization. Whether these subroutines matter, how much they matter, and how to even count them are questions for future generations to figure out, but it's good to keep an open mind to the possibility that our intuitions about what suffering is may change dramatically with new insights.

Contents

  * Dialogue
  * Further analogies
  * Schwitzgebel's view
  * Suffering can be simple: A reply to Metzinger
  * Onion piece
  * Acknowledgements
  * A note on terminology
  * Footnotes



## Dialogue

_Alice_ : Greetings, Brian. I heard that you're concerned about the possibility of what you call "suffering subroutines." You say that artificial intelligences (AIs) in the future -- whether human-inspired or [paperclipping](http://wiki.lesswrong.com/wiki/Paperclip_maximizer) \-- might run immense numbers of computations that we may consider to be conscious suffering. I find this hard to believe. I mean, why wouldn't instrumental computations be just dumb components of an unfeeling system?

_Brian_ : They might be, but they might not be, and the latter possibility is important to consider. As one general point, note that sentience evolved on Earth ([possibly more than once](https://www.facebook.com/brian.tomasik/posts/620256828222)), so it seems like a useful algorithmic construct.

_Alice_ : Sure, sentience was useful on Earth for competitive organisms, but in the subroutines of an AI, every computation is subserving the same goal. Processes are allocated computing resources "each according to his needs from each according to his talents," as Dan Dennett [observed](http://youtu.be/OlRHd-r2LOw?t=14m52s).

_Brian_ : Possibly. But in that same talk you cite, Dennett goes on to explain that computing processes in the human brain may be competitive rather than cooperative, Darwinian rather than Marxist. Dennett [proffers](http://www.youtube.com/watch?v=OlRHd-r2LOw&feature=youtu.be&t=16m24s) a hypothesis that "centrally planned economies don't work, and neither do centrally coordinated, top-down brains."

_Alice_ : Meh, if that's true, it's probably a vestige of the way evolution came up with the brain. Surely an orderly process could be designed to reduce the wasted energy of competition, and since this would have efficiency advantages, it would be a convergent outcome.

_Brian_ : That's not obvious. [Evolutionary algorithms](https://en.wikipedia.org/wiki/Evolutionary_algorithm) are widely useful and not always replaceable by something else. In any event, maybe non-Darwinian processes could also consciously suffer.

_Alice_ : Umm, example, please?

_Brian_ : It seems plausible that many accounts of consciousness would include non-evolved agents under their umbrellas. Take the [global-workspace theory](https://en.wikipedia.org/wiki/Global_Workspace_Theory) for instance. Are you familiar with that?

_Alice_ : Do explain.

_Brian_ : In the so-called [LIDA implementation](http://ccrg.cs.memphis.edu/tutorial/mindAccordingToLIDA/Brief-Account.pdf) of the global-workspace model, a cognitive cycle includes the following components:

  * Incoming sensations from the world are momentarily stored by sensory memory.
  * Many parallel unconscious modules operate on these sensations, picking them apart in various ways, and drawing on stored memories for additional insight.
  * These unconscious modules form coalitions, advocating for why their insights are most important. One coalition "wins" the contest and moves on to the global workspace, where the "news" is broadcast throughout the brain. This broadcasting is consciousness. The apparent serial nature of subjective experience despite parallel subcomponents results from the fact that only one news item is broadcast at a time.
  * The broadcasted news then produces updates to memories and learning in various parts of the brain, including inclinations to select different actions (i.e., [reinforcement learning](http://www.utilitarian-essays.com/reinforcement-learning.html)). Information may also return from the receiver back to the broadcaster.
  * With these updated activations for various behaviors, the organism then acts on the environment, receives new sensations, and the cycle happens again. These cycles are hypothesized to occur at about 10 Hz.



[This diagram](http://ccrg.cs.memphis.edu/tutorial/synopsis.html) lays out the various components.

Note that Stan Franklin, one of the managers of the LIDA project, believes that the earlier version of his system, IDA, is "functionally conscious" but not "phenomenally conscious," as he explains in his 2003 paper, "[IDA, a Conscious Artifact?](http://ccrg.cs.memphis.edu/assets/papers/IDA-ConsciousArtifact.pdf)" This seems to stem from his tentative agreement with David Chalmers about the hard problem of consciousness (see p. 10). Because I believe this view is [confused](http://www.utilitarian-essays.com/consciousness.html), I think the functional consciousness under discussion here _is_ also phenomenal consciousness.

_Alice_ : I see. So why is this relevant?

_Brian_ : If consciousness is this kind of "global news broadcasting," it seems to be a fairly common sort of operation. I mean, one obvious example is the news itself: Stories compete for worthiness to be aired, and the most important news segments are broadcast, one at a time, to viewers who then update their memories and actions in response. Then new things happen in the world, new stories take place, many reporters investigate them in parallel, they compete to get their stories aired, and the cycle happens again. "Emotions" and "dispositions" may [modulate](https://en.wikipedia.org/wiki/Neuromodulation) this process -- for instance, more conservative news agencies will prefer to air different stories than liberal news agencies, and the resulting messages will be biased in the direction of the given ideology. Likewise, the national mood at a given moment may cause some stories to be more relevant than they would have been given a different mood. People who care a lot about the news stories they hear may get in touch with the news agencies to give feedback and engage in further coordination ("reentrant signaling"). And so on.

Of course, we see analogous behavior in other places as well:

  * The various "unconscious" computing components of an airplane flight system might update their calculations based on a globally broadcast signal about latitude, longitude, wind resistance, turbulence, etc., and "memory" logs of the past data stream may be stored for later reference.
  * An updated trading price on a stock exchange is broadcast to vast numbers of individual computer-trading systems, which update their actions and save records of the price history for machine learning in the future. Theoretically, the systems could even perform [online learning](https://en.wikipedia.org/wiki/Online_machine_learning) like animals do.
  * Data about the latest unemployment rates is announced, and this is distributed to various teams doing macroeconomic prediction. Their policy advice is then adjusted, and the data is logged for future reference. These policies affect the world, unemployment changes, measurement indicators pick up that information, it's aggregated, and then a broadcast about unemployment rates happens again next month.
  * Software patterns like [publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) and [observer](https://en.wikipedia.org/wiki/Observer_pattern) involve globally broadcasting updates to many receivers who can then act on the new information.
  * [Insulin release](https://en.wikipedia.org/wiki/Insulin#Release) happens when glucose enters beta cells and triggers internal processes ("computations") in those cells. Those processes release calcium ions, which unlock stored insulin and "broadcast" it throughout the animal's bloodstream. The broadcast insulin signal produces updates in glucose utilization throughout the animal, which changes the internal behavior of various organs and the external behavior of the organism. (In general, hormones are a form of "information broadcasting", even though we don't normally think of processes outside the brain as being consciousness-like.)
  * In "[Global Workspace Dynamics](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3664777/)," Baars, Franklin, and Ramsoy give the analogy of a fire alarm as a global signal that triggers different local actions for different people. The fire department (one receiver of the alarm) may try to locate the fire alarm itself (the broadcaster) to interact with it better, in analogy with reentrant signaling.
  * The same paper describes brain activity and waves using an analogy with a crowd at a football game. "Chatting" is what happens when people/neurons talk with their neighbors in patterned ways that may appear random when seen from a distance. "Chanting" is when a global delta wave sweeps through the population in a coordinated fashion. "Cheering" is a global wave in response to a strong stimulus.
  * The coordinated communication of large numbers of neurons could also be analogized in phenomena like social movements, where people form coalitions of synchronized activity and compete to gain attention of the media in order to broadcast their message to the whole population and thereby influence action tendencies, memories, learning, etc. This comparison takes the activist goal of "[raising social consciousness](https://en.wikipedia.org/wiki/Consciousness_raising)" to a new level.



Note that some of these systems are not competitive, and so the claim that lack of Darwinian competition means lack of conscious suffering may not be accurate.

These analogies can actually give insight into why consciousness emerges in brains: It's for a similar reason as why national and global news emerges in human society. Global broadcasting of the most important events and knowledge serves to keep every part of the social system up to date, in sync, aware of required actions (e.g., hurricane warnings, voting days), and alerted to global searches ("Have you seen this crime suspect?") and coordination. As the "[Global Workspace Dynamics](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3664777/)" paper says: "What is the use of binding and broadcasting in the [cortico-thalamic] C-T system? One function is to update numerous brain systems to keep up with the fleeting present." This process of serializing the most salient updates for global broadcasting may ultimately create a more effective society (organism) than if every local community were isolated and reacted independently with parochial ("unconscious") reflexes or using only [tribal knowledge](https://en.wikipedia.org/wiki/Tribal_knowledge). When a broadcast becomes globally conscious, it's available to all regions, including the verbal/speech centers of a person for conscious report (or to the writers/bloggers of society for verbalization in text). Events in illiterate farming communities would be "unconscious" to the world without journalists who visit to help broadcast those stories. The world can become more conscious of its memories when historians uncover and share information about past events. And the spotlight of attention shifts based on the most emotionally salient events that happen. In general, fast, global network communication over radio, television, and the Internet are making the world more conscious of itself, in a surprisingly literal sense.

Why do we only care about conscious experiences? For instance, we'd be horrified to undergo conscious surgery but don't mind undergoing surgery while anaesthetized. Presumably it's because the parts of us that "care about" our experiences -- such as by reacting aversively, triggering stress feelings, planning ways to avoid the experience, encoding traumatic memories, and so on -- only know about the damaging stimuli when they become conscious. Typically a strong negative stimulus will win competitions to be consciously broadcast, but when anaesthesia blocks pathways from nociceptors to access by the full brain, it prevents the suite of "caring about" responses that would ordinarily be triggered. An analogy in the social realm is that society cares about and responds to negative events when they're reported in the media, but if scandals are covered up or reporters are prevented from talking about atrocities, this is like applying local anaesthesia.

More often, neglect of certain harms and focus on other types of harms is built in to the system. For instance, a sliver in your eye would hurt vastly more than a sliver in your leg because your eye has many more nerve endings. Similarly, a rich person killed in the United States would attract far more attention and response than a poor person killed in Africa because there are vastly more reporters covering the former, and the story about the rich American would seem more salient to the readers (neurons) who vote it up on Twitter.

Another analogy between consciousness and news reporting is that in both cases, once an object enters the spotlight of attention, other events in that spotlight can come to attention that would have otherwise remained hidden. For example, suppose your leg itches, causing you to focus your consciousness on your leg. That may allow you to then feel the breeze on your leg as well, whereas you otherwise would have filtered out that information from your awareness. Likewise, when a news story about X surfaces, this often leads to investigations into other stories Y and Z that relate to X, and stories about V and W that previously would have been ignored become "newsworthy". As an example, following the [pool party incident](https://en.wikipedia.org/wiki/2015_Texas_pool_party_incident) in McKinney, Texas on 5 Jun. 2015, a series of other news stories about McKinney, Texas also became national headlines, whereas previously those kinds of stories wouldn't have reached beyond the local news.

I haven't explored interpretations of the processes mentioned above according to other [models of consciousness](http://www.scholarpedia.org/article/Models_of_consciousness), but I expect you'd find that systems like these would be at least somewhat conscious in those frameworks as well. In general, most accounts of what consciousness is appeal to general principles that don't go away when neurons stop being involved.

And beyond consciousness, we can see other mind-like processes at play in many systems. Take memory for example. Apparently memories consist of neural connections that become strengthened by repeated use, and they fade as the connections decay. This reminds me of a series of dirt roads through a town. They're first created by some event, they become strengthened with use, and they revert back to wilderness with disuse. A road that hasn't been traveled on in years may become overrun by returning vegetation, but it can still be re-activated more easily than creating a new road from scratch somewhere else. And like with neural connections, a stronger road allows things to flow more easily between the regions it connects.

_Alice_ : Are you really saying that news reports and stock exchanges are conscious? And that roads have memory?

_Brian_ : I don't know.1 But I think we should take the possibility seriously. In any case, it could be that future computational systems contain more human-like entities. For instance, suppose an AI wants to undertake a research program on string theory, to better update its models of physics. It will partition some fraction of computing power to that project. It may want to parallelize the work for speed, so it might create lots of different "research teams" that work on the problem separately and publish their results to others. These teams might compete for "grant money" (i.e., additional computing resources) by trying to produce high-quality findings better than the other teams. These components might be sufficiently agent-like as to evoke our moral concern.

The process of intelligently searching the space of possibilities based on value assessments is a general phenomenon. Animals search through a field until they find a lush patch of strawberries; then they experience reward at the discovery and focus their efforts there for a while. Humans, too, feel reward while trying to figure things out. For instance, V.S. Ramachandran's [peekaboo principle](http://jjgallaher.blogspot.com/2009/07/art-in-brain-peekaboo-principle.html) is based on the idea that humans receive little squirts of pleasure every time they unpack a small piece of a puzzle, and these "mini aha" moments motivate them to keep going. Perhaps there would be a similar process at play for an AI's research teams. When a small discovery is made, the good news is broadcast throughout the team, and this encourages more actions like what led to the discovery.

As I stated it, this model suggests something akin to David Pearce's [gradients of bliss](http://www.hedweb.com/object33.htm) because the rewards for research discoveries are positive. But perhaps the system would use gradients of agony, with research findings being rewarded by temporary relief from discomfort. If there is a possibility for choice between a "gradients of bliss" and a "gradients of agony" design to achieve roughly similar computational ends, this suggests room for humane concerns to make a meaningful difference.

As another illustration, consider economics. Under both capitalism and communism, we see the emergence of hierarchical forms of organization. The CEO of a corporation seems like a decent model for the conscious control center of a brain: The workers perform their duties away from its sight, and then the most important news about the company is bubbled up to the CEO's desk. Then the CEO broadcasts updates to all the workers, including compensation rewards, which adjust worker action inclinations. The company also stores records of these events for later use. The most important ("emotionally salient") historical memories are better preserved, and less relevant ones slowly decay with time. This whole process mimics the global-workspace theory in broad outline. And the fact that hierarchies of this type have emerged in all kinds of governmental and economic systems suggests that they may be common even among the construction workers and researchers of an AI.

_Alice_ : Hmm, maybe. But if there are just a few companies that the AI is directing, that's not a lot of conscious minds. Maybe these suffering corporations are then not a big deal, relative to much larger numbers of suffering wild animals, etc. What's more, the [clock speed](http://www.utilitarian-essays.com/computations-i-care-about.html#clock-speed) of a corporate consciousness would be glacial compared with that of an animal.

_Brian_ : Well, even if we don't weight by brain size, who says corporations are the only parts of this process that are conscious? Hierarchical organization is a recurrent pattern of organized systems in general. It could happen at the highest level -- the executive AI controlling its component corporations -- but it would also happen in a fractal way at many lower layers too: Each corporation is composed of subdivisions, each subdivision has its own subdivisions, etc. At some point we might hit a level of entities analogous to "workers." Even below that might be the subcomponent coalitions of an individual worker's brain, which compete for attention by the worker brain's executive-control system. Each of these could have consciousness-like components. And their clock speeds would be quite fast.

One concept in the LIDA model is that of a "codelet," which [one page](https://web.archive.org/web/20160410233548/https://people.cs.kuleuven.be/~joaquin.vanschoren/Flexo/uml/glossary/codelet.html) defines as

> tiny agents, carrying small pieces of code (hence the name). They can be interpreted as being a small part of a process, but then leading its own life, very much like an ant is a small part of a "process" to gather food, to defend the anthill or to nurture newborns. They run in parallel [...], and none are indispensable.
> 
> [...] The entity calling the codelet will estimate its urgency (reflecting the promise of further investigation). Highly urgent codelets can preempt lower urgency codelets [...], and if a codelet's urgency sinks well below that of other's, it just dies out, leaving computer resources to more ambitious codelets. If a codelet sees it has no real work to do in the current situation (due to a bad estimation or changed situation), it sizzles.

It's [plausible](http://www.utilitarian-essays.com/insect-pain.html) that individual ants are conscious. So too, maybe even tiny components of an individual worker's brain could be seen as conscious.

_Alice_ : But if a larger consciousness contains many smaller consciousnesses, which each contain many smaller consciousnesses, how do we count them? What are the weights? Do the lowest-level consciousnesses dominate? This discussion is getting curiouser and curiouser!

_Brian_ : Indeed. But these are issues that we need to resolve at some point. To some extent I'm [punting the question](http://utilitarian-essays.com/robustness-against-uncertainty.html) to our more intelligent descendants. Still, it's useful to realize that suffering subroutines _could_ be a big deal in the future, so that we don't naively reach conclusions based on a circumscribed view of what we might care about.

_Alice_ : From the standpoint of "consciousness as broadcasting," do you think insects are conscious?

_Brian_ : It's an important question. It certainly seems plausible that insects would have some sort of LIDA-like cognitive cycle: Inputs, unconscious processing, most important insights bubble up and are distributed, and they affect action inclinations. Even if this kind of architecture didn't exist exactly, we might see adumbrations of it in whatever insects do. I mean, for example, if one part of the brain communicates its insights to several other parts of the brain, even if not globally, isn't this like a mini-broadcast? Isn't that sort of like consciousness already? In general, any kind of communication-and-updating process would have shadows of the operation that we think of as consciousness. This illustrates my [more general point](http://www.utilitarian-essays.com/computations-i-care-about.html#graded-sentience) that consciousness comes in gradations -- there's not a single cutoff point where what was unconscious matter suddenly has the lights come on. There are just atoms moving in various ways, and some of them activate our sympathies more than others.

_Alice_ : Well, that raises a question: If we can care about whatever we like, however much we like, why shouldn't I just care about humans and maybe some animals, and forget about these suffering subroutines entirely?

_Brian_ : You can do that, and perhaps we would choose to upon reflection. I don't know what the best criteria are for carving out our caring-about function. But it seems plausible that algorithms are a big part of it, and then when we see processes that resemble these algorithms somewhere else, it raises the question of why we care about them in some forms but not others. I don't know where our hearts will ultimately fall on the matter.

_Alice_ : Do you think even basic physics might contain consciousness?

_Brian_ : I don't know. I hope not, but I wouldn't rule it out. Giulio Tononi's "phi" postulates that even an electron has a nonzero measure of consciousness, for instance.

With the global-workspace model, maybe we could see elementary particles as broadcasting information that then influences other regions -- e.g., the nuclear reactions in the sun broadcast photons, and the sun's mass pulls other objects toward it. But it's not clear that any real "agent" process is going on here. Where are the learning, action selection, memories, etc.? So naively it seems like these kinds of dead physical things aren't conscious, but maybe I'm not looking at them right, and maybe we'll discover ways in which there are agents even in the math of microscopic physics.

_Alice_ : Speaking of math, do you think Darwinism could ultimately go the way of the dodo? I mean, Darwinian competition is just an attempt at [hill climbing](https://en.wikipedia.org/wiki/Hill_climbing) in a high-dimensional space. But sometimes we have mathematical tools that let us perform exact optimizations without needing to "guess and check." Could intelligence ultimately be reduced to a series of really big mathematical optimization problems that can be solved (at least somewhat) analytically, thereby averting a lot of this expensive computation of agent-like things? Similarly, reinforcement learning is [direct adaptive optimal control](https://web.archive.org/web/20161223113316/http://webdocs.cs.ualberta.ca/~sutton/papers/sutton-barto-williams-91.pdf), but optimal-control problems can potentially be solved by analytic methods like the Bellman equations if you know the payoffs and transition probabilities ahead of time.

_Brian_ : Maybe, though it does seem hard to imagine that we could analytically solve some of these really specific, data-driven problems without computing in detail the process being modeled. Perhaps this just reflects lack of imagination on my part, and of course, there are times when macro-scale approximations can remain ignorant of microfoundations. In any case, the actions of the AI on the galaxy to implement its goals would still require lots of real, physical manipulation -- e.g., supervisors to coordinate workers in building solar colonies and such. The possibility you cite is fun to speculate on, but it's not sufficiently probable to substantially affect the concern about suffering subroutines, given that consciousness-like processes seem to be such a convergent feature of organized systems so far.

_Alice_ : Do ecosystems suffer? Could this broad view of consciousness provide some vindication of the otherwise seemingly absurd idea that nature as a whole can have moral standing apart from the welfare of the individuals it contains?

_Brian_ : In principle it's certainly possible ecosystems could contain shadows of consciousness, but it's not clear they usually do. Where is the global broadcasting? What are the action components that are being updated? Maybe you could come up with some interpretations. Even if so, it's not clear what an ecosystem wants. Unlike corporations or ants, ecosystems don't have clear goals. Even if we identified a goal, it wouldn't necessarily align conservationism; it might go the other way. In any event, even if an ecosystem's consciousness did align with conservationism, it's dubious whether the interests of the ecosystem as a whole could outweigh those of [quintillions](http://www.utilitarian-essays.com/number-of-wild-animals.html) of suffering individual animals within it.

If we think ecosystems can suffer, then a natural way to prevent future suffering is to have fewer of them. Even if we adopted the stance from environmental ethics of considering ecosystems objects of intrinsic moral importance regardless of sentience, it's not obvious that ecosystems are inherently  _good_? We might think they're inherently  _bad_. This kind of "negative environmental ethics" seems a natural idea for a negative-leaning consequentialist.

_Alice_ : Yeah. Maybe one suggestion could be that the atmospheric CO2 levels are a global signal broadcast to all subcomponents of the biosphere. This then causes (very small) changes in the behavior of animals, plants, and inorganic entities like sea ice. The responses of these entities then have an impact back on CO2 levels, which are then broadcast globally. I guess in this model, the broadcasts are continuous rather than discrete.

_Brian_ : I suppose that's one interpretation you could make, though what would be the valence of CO2? In the stock-trading example, we could say that for the subset of traders that are net long in the security, an increase in the stock price would have positive valence. What about for CO2?

_Alice_ : Maybe those organisms that do better with more CO2 would receive it with positive valence, and vice versa? The "learning" of the ecosystem would then be strengthening those organisms that do well with higher CO2, just like the dopaminergic learning of an animal involves strengthening connections for action neurons that just fired given the current context.

_Brian_ : Ok, I can kind of see that, although in the case of dopamine, the action neurons were responsible for bringing the reward; in the case of the atmosphere, a whole bunch of stuff brought the increase in CO2 levels, and it wasn't necessarily the organisms that benefit from CO2 who were responsible for the emissions. Indeed, people often remark how humans in the global South are "punished" by the CO2 emissions of those in the global North.

Anyway, even if we did consider the carbon cycle somewhat analogous to a brain, keep in mind that the clock speed of this operation is really slow. Of course, since CO2 changes are continuous rather than coming in discrete pulses, the idea of a clock speed isn't really appropriate, but I guess we can still create a rough notion about cycles per year of relevant operations.

_Alice_ : And of course, at the same time, we could have H2O levels as another currency of the biosphere, and temperature as another, and so on. There would be multiple broadcasting systems at play.

_Brian_ : Right. In general, we can pattern-match a complex process in many different ways as being composed of many different systems that each have some resemblance to consciousness. This actually returns us to the old puzzle in the philosophy of computationalism: [What is a computation, anyway?](http://utilitarian-essays.com/computations-i-care-about.html#what-is-a-computation) One answer is that we see various physical processes as resembling various computations to various degrees, and we can then care about them in proportion to their resemblance. The same thing is going on here -- only, this is not John Searle's toy Wordstar program in the wall but a genuine instance of seeing consciousness-like operations in various places. It's like [pareidolia](https://en.wikipedia.org/wiki/Pareidolia) for our empathy systems.

Personally, I don't really care intrinsically about the Earth's carbon cycle, water cycle, etc. to any appreciable degree. I think the connection to animal minds is a pretty far stretch.

_Alice_ : Yes. Moreover, the way we've been discussing consciousness has been pretty simple and crude. There may be important pieces of the puzzle that we've neglected, and we might consider these important as well for making an entity conscious in a way that matters.

_Brian_ : Agreed! This should not be taken as the end of the conversation but only the beginning.

## Further analogies

There are many more similarities between operations in our brains and phenomena in the worlds of politics, physics, etc. Sebastian Seung's book _[Connectome](https://en.wikipedia.org/wiki/Connectome:_How_the_Brain%27s_Wiring_Makes_Us_Who_We_Are)_ provides several additional comparisons. One of my friends remarked on Seung's work: "I don't think I've ever read a book with so many illuminating analogies!" While most of Seung's readers presumably see these analogies as merely didactic aids, I would suggest that they might also have moral significance if we care about brain-like processes in non-brain places.

## Schwitzgebel's view

[Schwitzgebel (2016)](http://www.newappsblog.com/2016/12/is-most-of-the-intelligence-in-the-universe-non-conscious-ai.html "'Is Most of the Intelligence in the Universe Non-Conscious AI?'") reaches a similar conclusion as the previous dialogue did:

> **unity of organization in a complex system plausibly requires some high-level self-representation or broad systemic information sharing.** [...] most current scientific approaches to consciousness [...] associate consciousness with some sort of broad information sharing -- a "[global workspace](http://cogweb.ucla.edu/CogSci/GWorkspace.html)" or "[fame in the brain](http://www.scholarpedia.org/article/Multiple_drafts_model)" or "[availability to working memory](https://global.oup.com/academic/product/the-conscious-brain-9780195314595)" or ["higher-order" self-representation](https://plato.stanford.edu/entries/consciousness-higher/). On such views, we would expect a state of an intelligent system to be conscious if its content is available to the entity's other subsystems and/or reportable in some sort of "introspective" summary. For example, if a large AI knew, about its own processing of lightwave input, that it was representing huge amounts of light in the visible spectrum from direction alpha, and if the AI could report that fact to other AIs, and if the AI could accordingly modulate the processing of some of its non-visual subsystems (its long-term goal processing, its processing of sound wave information, its processing of linguistic input), then on theories of this general sort, its representation "lots of visible light from that direction!" would be conscious. And we ought probably to expect that large general AI systems would have the capacity to monitor their own states and distribute selected information widely. **Otherwise, it's unlikely that such a system could act coherently over the long term. Its left hand wouldn't know what its right hand is doing.**

## Suffering can be simple: A reply to Metzinger

In response to the 2015 Edge question, "What do you think about machines that think?", Thomas Metzinger [explored](http://edge.org/response-detail/26091 ""What If They Need To Suffer?" for "2015 : WHAT DO YOU THINK ABOUT MACHINES THAT THINK?"") a similar question as the above dialogue addressed: Will AIs necessarily suffer, or could they be intelligent without suffering? Metzinger doesn't give a firm answer, but he enumerates four conditions that he believes are necessary for suffering:

  1. Being conscious
  2. Being self-conscious in the sense of having a sense of ownership of suffering (e.g., "this is _my_ suffering")
  3. The experience has negative valence
  4. The negative valence is transparent in the sense that it can't be doubted.



This list is interesting and provides four helpful criteria that may enhance a holistic conception of suffering, but in my opinion these criteria are neither necessary nor exhaustive. I would consider them like four principles that one might propose for the meaning of "justice" -- a concept sufficiently complex that probably no four concrete criteria by themselves can define it.

Let's see why each of these conditions is not strictly necessary. The most straightforward is probably #2, since it seems easy to imagine being in pain without engaging sufficient cognition to attribute that pain to yourself. Suffering can be a flood of "badness" feeling, which needn't be sufficiently differentiated that one recognizes that the badness is an experience on the part of oneself. For instance, a depressed person might feel that the whole world is bad -- that there's just a general badness going on.

#4 also doesn't seem necessary, because it can still be morally disvaluable if someone is uncertain whether he's in agony. For instance, suppose you step on something. You're not sure whether the object has punctured the skin of your foot. You think you might feel some sharp pain in your foot, but you're not sure if it's actually there or just imagined, until you actually look at your foot and see the sharp object. (Michael Tye offers a [similar example](https://web.archive.org/web/20160401145456/http://michaeltye.us/Pain2.pdf "see the last question of the interview, "MICHAEL TYE ON PAIN" \(http://philosophybites.com/2012/08/michael-tye-on-pain.html\)").) I'm not sure what Metzinger would think of this case. In any event, it seems that transparency is actually quite easy to satisfy. It takes a complex cognitive system to produce doubts about experiences. Simple agents should generally have transparent emotions.

As far as #1, I think [all systems are](https://longtermrisk.org/flavors-computation-flavors-consciousness/) at least marginally conscious, so even if condition #1 is necessary, it's always satisfied. Of course, the _degree_ of consciousness of a system matters enormously, but Metzinger's piece seems to be asking whether particular AIs would suffer at all.

As far as #3, I agree that valence plays an important, perhaps central, role in human suffering. This valence might prototypically be the [reward part](http://reducing-suffering.org/ethical-issues-artificial-reinforcement-learning/#Valence_networks) of a reinforcement-learning (RL) system. If one insists that valence can only make sense in the context of a rigid definition of RL, then I agree that not all AIs would have valence (although many still would, given the importance of RL for autonomous behavior). But if we interpret negative valence more broadly as "information indicating that something should be avoided", or even more compactly as "information that produces avoidance", then this kind of operation can be seen in many more systems, including non-learning agents that merely follow fixed stimulus-response rules. Indeed, the basic template of one physical event causing another avoidance-like event runs as deep as the interactions of fundamental physical particles, if we take enough of a high-level view and don't insist on greater complexity in our definition.

Overall, I find Metzinger's criteria too narrow. They leave out vast numbers of simpler systems that I think still deserve some ethical consideration. Nonetheless, I appreciate that Metzinger's proposals enrich our conceptualization of more complex suffering.

## _Onion_ piece

_The Onion_ has a humorous article, "[Scientists Confident Artificially Intelligent Machines Can Be Programmed To Be Lenient Slave Masters](http://www.theonion.com/article/scientists-confident-artificially-intelligent-mach-51170)," in which AI researchers discuss the goal of shaping AI trajectories in such a way that AIs treat their human workers (what I might call "suffering human subroutines") more humanely. I find it extremely implausible that AIs would actually use human laborers in the long run, but they plausibly would use conscious worker agents of some sort -- both sophisticated scientist/engineer subroutines and other simpler subroutines of the kind discussed in this piece.

Unlike human laborers, these subroutines would presumably enjoy working as hard as possible on the task at hand. Humans evolved to dislike exertion as a way to conserve energy except when required, but robots built to carry out a given task would be optimized to want to carry out exactly that task. That said, more sophisticated digital agents might, like humans, feel mild unpleasantness if they expended time or energy on fruitless activities. For instance, a robot should dislike moving around and thereby draining its battery unless it thinks doing so will conduce to achieving a reward.

## Acknowledgements

I learned of the idea that suffering subroutines might be ethically relevant from Carl Shulman in 2009. In response to this piece, Carl [added](https://www.facebook.com/brian.tomasik/posts/641988228322?comment_id=905370&offset=0&total_comments=7):

> Of course, there can be smiling happy subroutines too! Brian does eventually get around to mentioning "gradients of bliss", but this isn't a general reason for expecting the world to be worse, if you count positive experiences too.
> 
> I would say "sentient subroutines."

Some examples in this piece were also partly inspired from a [post](https://www.facebook.com/ben.west.1029/posts/10201401708580746) by Ben West, linking to Eric Schwitzgebel's "[If Materialism Is True, the United States Is Probably Conscious](https://web.archive.org/web/20200514103014/https://faculty.ucr.edu/~eschwitz/SchwitzPapers/USAconscious-130208.htm)," which I discuss more [in another piece](http://www.utilitarian-essays.com/hedonistic-vs-preference.html#non-conscious).

## A note on terminology

I coined the phrase "suffering subroutines" in a 2011 post on [Felicifia](https://web.archive.org/web/20180808173047/https://felicifia.org/). I chose the alliteration because it went nicely with "sentient simulations," giving a convenient abbreviation (SSSS) to the conjunction of the two concepts. I define sentient simulations as explicit models of organisms that are accurate enough to count as conscious, while suffering subroutines are _incidental_ computational processes that nonetheless may matter morally. Sentient synthetic [artificial-life](https://en.wikipedia.org/wiki/Artificial_life) agents are somewhere on the border between these categories, depending on whether they're used for psychology experiments or entertainment (sentient simulations) vs. whether they're used for optimization or other industrial processes (suffering subroutines).

It appears that [Meghan Winsby](https://web.archive.org/web/20140220185104/http://www.rotman.uwo.ca/who-we-are/our-members/meghan-winsby/) (coincidentally?) used the same "suffering subroutines" phrase in an excellent 2013 paper: "[Suffering Subroutines: On the Humanity of Making a Computer that Feels Pain](http://www.iacap.org/proceedings_IACAP13/paper_48.pdf)." It seems that her usage may refer to what I call sentient simulations, or it may refer to general artificial suffering of either type.

## Footnotes

  1. [This summary](http://www.openphilanthropy.org/david-chalmers-professor-philosophy-new-york-university-may-20-2016 "'David Chalmers, Professor of Philosophy, New York University on May 20, 2016'") of a conversation with David Chalmers says "one popular theory is that information in the brain is conscious if and only if it is part of a global workspace; information outside the global workspace is unconscious. But it would be a big leap to conclude from this that any system with a global workspace is conscious and that systems that lack a global workspace are not." (back)



[This summary](http://www.openphilanthropy.org/david-chalmers-professor-philosophy-new-york-university-may-20-2016 "'David Chalmers, Professor of Philosophy, New York University on May 20, 2016'") of a conversation with David Chalmers says "one popular theory is that information in the brain is conscious if and only if it is part of a global workspace; information outside the global workspace is unconscious. But it would be a big leap to conclude from this that any system with a global workspace is conscious and that systems that lack a global workspace are not."
