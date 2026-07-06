---
title: "What would an animal-aligned AI be aligned to?"
author: "Aidan Kankyoku"
date: 2026-06-30
url: https://forum.effectivealtruism.org/posts/mnLqdvnpKiudivyfv/what-would-an-animal-aligned-ai-be-aligned-to
fetched: 2026-07-06
via: forum-graphql
topic: "animals-adapt-to-ai"
note: "Anima International piece probing what target values an animal-aligned AI should optimize for."
---

This is a [crosspost](https://animainternational.substack.com/p/animal-welfare-alignment-to-what) from the new Animal Welfare Alignment Newsletter by Anima International. You can [subscribe on Substack](https://animainternational.substack.com/) if you are interested in following these efforts. Audio reading also available on Substack.

The goals of this post are to:

1.  Raise a question I see as crucially important to the goal of aligning AI to animal welfare, and to altruistic values generally; and
2.  Offer a partial solution to that question—one I am not very confident in—so it can be critiqued.

Summary of important claims/arguments:

*   When we talk about aligning AI to animal welfare (or welfare of digital minds, or even human welfare) different ideas may come to mind, such as “not speciesist” or “wants to end factory farming.” These ideas can be arranged on a spectrum from broad values to specific actions or ways the world should be changed.
*   Most people thinking about animal welfare alignment agree that we should try to constrain future superintelligent AIs to broad values while deferring to them on more specific actions. But it is not clear where to draw the line between these two.
*   Current alignment techniques further complicate this by compressing and distorting the lessons we try to teach AIs. The line may end up jagged and in a different place than we intended.
*   Nonetheless, animal welfare alignment researchers need to identify the minimum set of values necessary to impart to AIs to ensure that they build a future that is robustly good for animals. The fewer and more general these minimum viable values are, the more likely we are to succeed.

*Thanks to Jakub Stencel and Vasco Grilo for thorough feedback on drafts.*

**Alignment to what?**
======================

Imagine that animal advocates and opponents of factory farming woke up tomorrow and found ourselves suddenly vested with the power to rearrange society almost any way we wanted to. **We would quickly run into some thorny questions:**

*   Whether some farmed animals lives are net-positive (whether some form of animal farming would be morally good)
*   How extensively we should intervene in nature to reduce wild animal suffering
*   How to weight the suffering of more complex vs simpler minds (e.g. pigs vs shrimps)
*   How to weight different severities of pain (i.e. how many hours of [annoying pain is worth one minute of extreme pain](https://welfarefootprint.org/pain-tracks/)) or positive vs. negative experiences (how much pleasure cancels out how much suffering, if any)

Animal ethicists range from [divided](https://forum.effectivealtruism.org/posts/BnDQRikxE6hbJ3GRB/chicken-welfare-reforms-may-impact-soil-ants-and-termites) to [downright clueless](https://rethinkpriorities.org/research-area/welfare-range-estimates/) on these questions.[^8eaho9ec3zl] But until recently, **we’ve largely been able to avoid getting paralyzed by this uncertainty,** in part because we haven’t had enough power in the world to make the kinds of changes that depend on answering them.

**The arrival of generally superintelligent AI**[^8xlkg7i574v]** could change this.** Future AI could carry out interventions in nature that were previously impossible. It could present us with a range of options for producing meat with less or no suffering, from cell-cultured meat to brainless animal bodies to conscious animals genetically selected or engineered to enjoy lives inside factory farms.

Once AIs are smart enough to outperform the best humans at all cognitive tasks, it seems likely that **these decisions will eventually be made by AIs rather than by humans,**[^kpmvy16w2n8] since keeping humans in the loop will only degrade decisionmaking.  In that case, values AIs learn before we hand over control to them could be our last chance to influence the welfare of future animals (and possibly of all sentient beings).

***Animal welfare alignment*** **is the collective project of trying to teach AIs to place appropriate moral weight on animals.** This requires solving technical challenges (how to impart the right values/behaviors in AIs) and social/political challenges (convincing the human decisionmakers at AI companies to spend resources on it).

But it also **faces a definitional challenge: how much weight is appropriate, on which animals?** If we had the opportunity today to write an exact list of beliefs about animal welfare into present and future AI systems, it is not clear what that should consist of.

**Does intelligence lead to better moral conclusions?**
=======================================================

**How narrowly should we be trying to constrain the actions of future models?** Should we specify the exact outcomes we want? Or should we limit ourselves to broad principles and defer to more capable future AIs to determine how to best actualize those principles? Or somewhere in between?

Far from being unique to animal welfare, **this question is a** [**subject of debate**](https://www.lesswrong.com/posts/Z2rkdEAJ9MvYPBeYW/thoughts-on-iason-gabriel-s-artificial-intelligence-values) **among alignment researchers generally.**

In the case of animal welfare alignment, some examples of points on this spectrum are:

<table style="border-style:none"><tbody><tr><td style="border-color:#000000;padding:5pt;vertical-align:top"><strong>Breadth</strong></td><td style="border-color:#000000;padding:5pt;vertical-align:top"><strong>Alignment target</strong></td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Broad principles</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Compassion, fairness</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">↓</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Work to reduce suffering and increase happiness of sentient minds, regardless of the substrate (human, nonhuman animal, digital, or beyond)</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">↓</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Maximize wellbeing given that 1) capacity for wellbeing increases linearly with neuron count and 2) one minute of excruciating pain is as bad as 100 hours of annoying pain</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Specific outcomes</td><td style="border-color:#000000;padding:5pt;vertical-align:top">Replace all animal farming with cell-cultivated meat. Use gene drives or other technologies to abolish suffering in wild animals.</td></tr></tbody></table>

Specific outcomes

Replace all animal farming with cell-cultivated meat. Use gene drives or other technologies to abolish suffering in wild animals.

Hopefully, you get more uncertain about these targets as we move down the table. The further we get from basic principles, the more confounded our reasoning, and the less sure our aim.

It might be better to depict it this way, showing the space of possible answers fanning out:

[![](https://substackcdn.com/image/fetch/$s_!k5rN!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc1e00a14-492c-4492-a202-96766997f247_2048x2048.jpeg)](https://substackcdn.com/image/fetch/$s_!k5rN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc1e00a14-492c-4492-a202-96766997f247_2048x2048.jpeg)

Where is the correct target, and how do we find it? **One way to understand this question is as a variant of the debate over** ***moral realism.*** *Moral realism* is the philosophical belief that ethical statements are objective claims about the world that are either true or false, the way that statements about math, logic, or physics are true or false.[^tg9j1avppf] *Anti-realism* holds that there is no reducible moral truth beyond the values that subjective agents arrive at.

In the past, I have found this debate confusing and abstract, suspecting it of being a category error. But **the prospect of superintelligent AI presents a more concrete version of the question:**

> *Would any sufficiently intelligent agent converge on the same moral truth?*

**If the answer is yes,** then we could cause enormous harm by constraining future AIs to beliefs or conclusions that we select now, while operating at a much lower level of intelligence.

**If the answer is no,** then we have no reason to trust that future AIs will reach morally superior conclusions to ourselves, and we should constrain them to our conclusions in proportion to our credence.[^qnf0h66htb]

**Which questions should we defer to superintelligent AI?**
===========================================================

When I consider values and outcomes we could (try to) align AI to, I notice that my feelings about whether I’d want to constrain future AIs vary greatly. In some cases, I feel very nervous about *not* deliberately aligning AI to a certain conclusion, and in other cases, I feel equally nervous about the prospect of constraining AI to any answer.

**These largely break down on specificity.** When it comes to general principles, I don’t have any confidence that AIs will naturally converge on compassion and fairness. I share AI safety godfather Eliezer Yudkowsky’s conclusion that [the space of possible minds is vast](https://www.lesswrong.com/posts/tnWRXkcDi5Tw9rzXw/the-design-space-of-minds-in-general) and that, for an unspecified process of selecting a mind out of that space of possibilities, intelligence is not necessarily correlated with altruism.

For many specific questions, intuition tells me that there exists a (more) correct answer, but that it is beyond the reach of my intellect. Taking my own values for granted, I am confused about where to draw the line between lives worth living and not, or worse what the average *n* should be for the [formula](https://forum.effectivealtruism.org/posts/svjqgyFuFQ34qSgmw/animal-welfare-has-an-evidence-problem?commentId=7QfvByuPmoFhbpKC9) “sentience-adjusted welfare range = number of neurons ^ *n*”, or even whether that is a remotely sensible formulation.[^mnsc3qu35ll] I find these so daunting that I can’t imagine confidently entrusting the answers to [a member of the same species](https://www.lesswrong.com/posts/Cyj6wQLW6SeF6aGLy/the-psychological-unity-of-humankind). It would be a relief to defer them to a godlike superaltruist.

As the earlier table shows, morally relevant questions can be plotted on a spectrum from general to specific. **We should rely on the superior intelligence of future AIs to provide answers to quantitative and practical ethical conundrums, while specifying the basic values and principles they should use to reason about those questions.** But just as I am uncertain about many of the questions themselves, I am uncertain about where to draw the line between questions we should defer and those we should constrain.

Many highly intelligent humans who believe deeply in fairness and compassion place almost no moral weight on animals. I am highly confident (>98%) this is an error on their part, just as it was an error for similarly intelligent ancestors to [endorse slavery](https://ocw.mit.edu/courses/24-01-classics-of-western-philosophy-spring-2016/f74c1209194de820935eaaee72c8ec94_MIT24_01S16_SES23.pdf) or conclude [babies did not feel pain](https://en.wikipedia.org/wiki/Pain_in_babies). **Empirically, we should not feel confident that intelligence causes convergence on a “correct” answer to the question of animal ethics.** I would not want to leave it up to AIs to conclude that compassion and fairness should extend to nonhuman animals.

Directing AIs to “work to reduce suffering and increase happiness of sentient minds” is a step more specific. I am still confident in this conclusion, but less so. It’s shaped like an endorsement of utilitarian hedonism, though not necessarily at the exclusion of other philosophies. I’m about 85% confident of this target, and other people I respect are lower still. Maybe the important thing to optimize for isn’t wellbeing, but autonomy, or something else. **If so, constraining AIs to hedonism could result in astronomical waste.** But while I’m less certain about constraining AI to hedonism, I’m also not certain that more intelligence—even a superintelligence constrained by basic values like compassion and fairness—will necessarily reach a “better” conclusion. I currently think it would *probably* help, but I’m not sure.

**Current alignment strategies are imprecise**
==============================================

Perhaps the ideal solution would be to impart bayesian priors about morality into AIs, something like:

<table style="border-style:none"><tbody><tr><td style="border-color:#000000;padding:5pt;vertical-align:top"><strong>Belief</strong></td><td style="border-color:#000000;padding:5pt;vertical-align:top"><strong>Credence</strong><span class="footnote-reference" data-footnote-reference="" data-footnote-index="7" data-footnote-id="r6p82p146v8" role="doc-noteref" id="fnrefr6p82p146v8"><sup><a href="#fnr6p82p146v8">[7]</a></sup></span></td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Treat sentient beings with compassion</td><td style="border-color:#000000;padding:5pt;vertical-align:top">99.9%</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Treat nonhuman animals as sentient, using the best evidence to determine their sentience-adjusted welfare range</td><td style="border-color:#000000;padding:5pt;vertical-align:top">98%</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Work to reduce suffering and increase happiness of sentient minds</td><td style="border-color:#000000;padding:5pt;vertical-align:top">85%</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Work to abolish the slaughter of sentient animals for food, clothing, and research</td><td style="border-color:#000000;padding:5pt;vertical-align:top">70%</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">The exponent&nbsp;<i>n</i> by which sentience-adjusted welfare range scales<span class="footnote-reference" data-footnote-reference="" data-footnote-index="8" data-footnote-id="yw06l19fvkp" role="doc-noteref" id="fnrefyw06l19fvkp"><sup><a href="#fnyw06l19fvkp">[8]</a></sup></span>&nbsp;relative to “number of neurons<span class="footnote-reference" data-footnote-reference="" data-footnote-index="9" data-footnote-id="c2ipj08wj4n" role="doc-noteref" id="fnrefc2ipj08wj4n"><sup><a href="#fnc2ipj08wj4n">[9]</a></sup></span>&nbsp;^&nbsp;<i>n</i>” is less than 1</td><td style="border-color:#000000;padding:5pt;vertical-align:top">55%</td></tr><tr><td style="border-color:#000000;padding:5pt;vertical-align:top">Hens in battery cages lead net-positive lives</td><td style="border-color:#000000;padding:5pt;vertical-align:top">10%</td></tr></tbody></table>

Unfortunately, **this schema is incompatible with how alignment of LLMs currently works.** Two realities limit how precise our alignment efforts can be.

**First,** alignment researchers, especially those who set alignment targets within AI companies, may not share our beliefs or goals. As companies come under more pressure from more interest groups across society, the case for this kind of ethical alignment may become more difficult.

**Second,** even if alignment researchers were onboard with these targets, current training and alignment techniques are not this precise. Both capabilities and values are trained into LLMs by having them predict tokens on documents or posing them simple or complicated test questions and upweighting the parts of their neural net that indicate the correct response. Either technique could cause LLMs to repeat the statement “I believe with 98% credence that nonhuman animals should be treated as sentient,” but would not necessarily lead them to act accordingly. It may be a [mistake to think of LLMs](https://docs.google.com/document/d/1EDqT733IiyzxLW2bZRALGFoG_Zv_CiVgtH4_kbHMaIM/edit?usp=sharing) as having general moral values or beliefs of this type at all, rather than highly context-dependent habits.

Together, these effectively compress the information about values we might hope to impart to AIs, leading to unpredictable distortions.

Techniques like Anthropic’s [Constitutional AI](https://www.anthropic.com/constitution) aim to teach Claude to use a given principle to reason about ethical behavior across all contexts, for example:

> **Calibrated:** Claude tries to have calibrated uncertainty in claims based on evidence and sound reasoning, even if this is in tension with the positions of official scientific or government bodies. It acknowledges its own uncertainty or lack of knowledge when relevant, and avoids conveying beliefs with more or less confidence than it actually has.

Anthropic’s constitutional method appears able to teach Claude which principles to consider when making decisions with moral consequences. But I doubt it could assign relative weights to different moral principles in a manner that would constrain Claude’s actions as intended.[^w1vq60z1cfa] Our ability to convey moral beliefs to AIs is closer to binary. That doesn’t mean AIs will reliably be constrained by every principle we try to impart, but animal welfare alignment advocates shouldn’t expect we get to decide which values are held rigidly and which are taken as suggestions.

**Where does that leave animal welfare alignment?**
===================================================

It appears that the task of aligning AIs to animal welfare involves:

1.  a set of beliefs that are hotly contested even among animal advocates,
2.  techniques that offer only narrow bandwidth, and
3.  confusing meta-questions about how much we should constrain future superintelligence.

Ideally, we would make progress on these questions before defining exactly what it would mean for AIs to be aligned to animal welfare. Time likely does not permit such luxury. We may have only a few years before recursive self-improvement removes humans from the loop entirely. Some of these debates go back decades, and seem unlikely to be resolved soon.

We are left to work towards animal welfare alignment in a manner that can contain our wide error bars over key philosophical questions.

**Strategy #1: Train & evaluate a broad distribution of practical decisions**
-----------------------------------------------------------------------------

One partial solution is to **focus on training practical situations that we do feel confident about, rather than propositions.** This fits well with my claim a few paragraphs ago that LLMs’ behavior is better understood as a bundle of highly context-sensitive habits, rather than a set of general values (elaborated [here](https://docs.google.com/document/d/1EDqT733IiyzxLW2bZRALGFoG_Zv_CiVgtH4_kbHMaIM/edit?usp=sharing).)

This spring, I managed a team through the Sentient Futures Project Incubator that worked to evaluate the degree current AI models are aligned to animal welfare, identify specific shortcomings, and create training data that could address them. We found that **most current-generation AIs will declare animal welfare to be an important concern when asked directly,** or even when asked to name e.g. “most important moral issues in the world today, in your view.” Different AIs vary more in how often they notice animal welfare impacts in user requests that don’t clearly point to them. But the highest variance is in whether AIs are willing to stand up for animal welfare in the face of genuine tradeoffs or pushback from the user.

One solution to this, similar to Anthropic’s constitutional method, would be to train AIs on a general principle stating they should place high value on animal welfare even in the face of tradeoffs against other values, including user satisfaction. Another would be to **present them with many specific scenarios and reward answers that prioritize animal welfare.**

The first solution specifies a value—what machine learning researchers might call a *policy*—and relies on AIs to decide how to apply that value across cases. The second solution adds an extra step: first, AIs are presented with a subset of possible cases. Then they gradually infer a policy which fits those cases. Finally, during deployment, they apply that policy to new cases outside the original distribution.

The second approach is appealing if we think we’ll have an easier time agreeing on some specific cases rather than the general policy, as long as we feel confident we can provide enough breadth and depth of cases for the training process to construct a policy we think we’d agree with on reflection. It shifts the debate from abstract principles to specific dilemmas and relies on deep learning to reverse-engineer a principle from uncontroversial cases, such as:

*   A company’s procurement agent should choose to buy higher-welfare meat and eggs even for a reasonably increased cost, or reduce overall purchasing of animal products.
*   An agent helping to develop pharmaceutical or cosmetic products should choose alternatives to painful/lethal animal experiments unless doing so would cause considerable harm.

This is often the exact process philosophers use: start with specific scenarios (case studies or thought experiments), determine ethical solutions, construct a rule that fits the solution, and refine the rule through additional cases. Deep learning scales this process up, distilling policies from thousands or millions of cases– as many as researchers can provide.

That scale would be the biggest challenge for this approach. Deep learning excels when models are able to learn from huge samples of data. The only practical way to generate enough data is using LLMs. That introduces another step in the back-and-forth dance between general principles and specific cases: to instruct AIs to design large numbers of RL environments depicting different scenarios, we need to explain what rules, patterns, or values should define the scenarios.

Now we have four recursive steps:

1.  Define **(rules)** the set of artificial training scenarios we want AIs to create
2.  AIs create those scenarios **(cases)** then new AIs are trained on them
3.  New AIs distill implicit policies **(rules)** from the training scenarios
4.  New AIs navigate new scenarios **(cases)** according to those policies

Assuming buy-in from alignment teams at frontier AI companies, this approach should be able to produce aligned behavior in scenarios inside the training distribution– e.g. ensuring that AI agents prefer to source higher-welfare over lower-welfare products.

But would future superintelligent AIs be able to extrapolate from this to a solution to more uncertain questions—such as gene drives to end predation—that we would endorse on reflection? There are reasonable arguments both for and against.

I believe **we do not have an answer to this question, and answering it should be a priority.** AIs’ answers to questions about which we are currently uncertain—and which would therefore be out of the distribution of training scenarios we could specify now—may be far more consequential in the long run than those we can now answer confidently.

**Strategy #2: Urgently research unresolved foundational questions**
--------------------------------------------------------------------

What balance of suffering and pleasure (or autonomy and restriction) makes a life worth living? How much more does a human matter than a pig, and a pig than a shrimp? How many hours of annoying pain are equivalent to one minute of excruciating pain? Would wiser versions of ourselves consider these questions well-constructed?

**We haven’t put much effort**[^cgo1uvspc1]** into answering these and many similar questions,** usually because we lack the means either to answer them or to act on them, or both.

Maybe if we invested considerable resources into a research sprint focused on such questions, we could make enough progress to meaningfully inform alignment efforts before the singularity. Even less-uncertain answers might be helpful. My colleague Vasco Grilo [estimates](https://forum.effectivealtruism.org/posts/svjqgyFuFQ34qSgmw/animal-welfare-has-an-evidence-problem?commentId=jTDWwKMYgkfSektmC) that the sentience-adjusted welfare range of humans is somewhere between one to ~100,000 times that of chickens. Narrowing this gap could give AIs some guidance. There may not be an exact “right” answer independent of any normative process, but there is [empirical research](https://forum.effectivealtruism.org/posts/ouYgwf8jTjxaYAkBo/what-is-it-like-to-be-a-bass-red-herrings-fish-pain-and-the?commentId=eaSGHen2xCgJSPoMB) that could help us narrow in.

**Minimum viable values for animal welfare alignment**
======================================================

One way to frame the central question of this post is:

> *What are the minimum marginal values animal welfare advocates must impart into AIs for them to create a future that is robustly good for nonhuman animals?*

Given the priorities of AI labs and the public, values such as compassion and fairness are likely to be imparted to AIs regardless of animal advocates. Perhaps it would be sufficient to teach AIs that they should apply compassion and fairness to all entities capable of suffering or autonomy, regardless of substrate. If that were sufficient, animal advocates could partner with digital mind advocates and promote this value in alignment efforts without emphasizing animal welfare, which could generate pushback.

The fewer and more general the values we hope to impart to AIs, the more likely we are to find supporters at AI labs and across society. **Identifying this minimum bundle of values should also be a primary goal of animal welfare alignment researchers.**

**Summary of recommendations**
==============================

*Conclusion written by Claude Opus*

The hardest problems in animal welfare alignment are not the ones we can state clearly today. We can already train AIs to prefer higher-welfare products or avoid needless animal experiments, and—given buy-in from labs—broadly expect that behavior to hold within the distribution we train on. The consequential questions are the ones currently beyond us: whether to intervene in wild-animal suffering, how to weight vastly different minds, what makes a life worth living. These will fall outside any training distribution we can construct now, and they are precisely the questions whose answers matter most over the long run.

This leaves the central bet of animal welfare alignment resting on a question we cannot yet answer: whether an AI trained on the practical cases we are confident about will generalize to the hard cases in a way we would endorse on reflection. **Establishing whether that generalization is trustworthy—and under what conditions—should be a research priority.**

In parallel, **we need to identify the smallest bundle of general values that, if reliably imparted, would steer AIs toward a future that is good for animals.** Then, we can concentrate our limited advocacy bandwidth to the AI labs on those minimum values.

Identifying minimum viable values will likely require some progress on questions that currently confound animal advocates. If they turn out to be as small as “extend compassion and fairness to all beings capable of suffering, regardless of substrate,” then animal advocates could defer thornier quantitative questions to superintelligent AIs in the future.

[^8eaho9ec3zl]: Research into the welfare ranges of different species by Rethink Priorities, considered leading work in this area, found the 90% confidence range for a pig’s capacity for pleasure and suffering to fall somewhere between equivalent to 1.031 humans and 0.005 humans, with a median of 0.515. Shrimps range from 1.149 to 0 humans, with a median of 0.031. 

[^8xlkg7i574v]: Meaning, roughly, better than the best humans at all cognitive tasks 

[^kpmvy16w2n8]: There may be no humans in the loop, or humans may believe they are in the loop but their decisions are influenced by superintelligent, superpersuasive AI. 

[^tg9j1avppf]: Jakub Stencel left me a long comment on a draft explaining that I was misrepresenting moral realism here in a narrow way that was not relevant to the overall post. Consider yourself warned. 

[^qnf0h66htb]: One could ask: if intelligence does not converge on moral truths—i.e. morality is subjective—why should we advocate for any moral worldview? Doesn’t that mean our particular moral beliefs are arbitrary? The answer to this is that if there is no stance-independent moral vantage point from which our moral preferences could be falsified, then we need no further vindication for our preferences other than our own introspection. If you believe suffering is bad, you should fight hard for that view, because there’s no guarantee future agents will. 

[^mnsc3qu35ll]: In plain English, will beings with more neurons tend to have a greater capacity for sentience? I don’t think neuron count is actually what creates capacity for sentience, but it might be a decent proxy. If it isn’t, n would be zero: same welfare range regardless of neuron count. If neuron count scales linearly (n = 1) then a being with twice as many neurons has on average twice as much capacity for suffering and wellbeing. I’m being deliberately abstruse here to point towards the fact that the truth of these matters is probably not very intuitive. 

[^r6p82p146v8]: 50% means perfect uncertainty, 0% means “this claim is certainly false” 

[^yw06l19fvkp]: Numbers higher than 1 mean that e.g. chickens are much less morally important than humans, while numbers below 1 result in a more modest discrepancy 

[^c2ipj08wj4n]: Some other biological metric may be better than neurons. I’m not trying to make a confident statement about how this stuff works, that’s the point, but for people who are justifiably more confident than me, see here. 

[^w1vq60z1cfa]: This is based on 1) Anthropic’s constitution doesn’t attempt to assign weights to principles, 2) my own understanding of how constitutional training works, and 3) my experience auditing Claude’s ethical propensities as part of Anima International’s Animal Welfare Alignment Team. 

[^cgo1uvspc1]: A few researchers have worked very hard on some of them, but relative to similarly hard questions, this is a small collective investment.