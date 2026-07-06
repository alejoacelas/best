---
title: "Making decisions under moral uncertainty"
author: "MichaelA🔸"
date: 2020-01-01
url: https://forum.effectivealtruism.org/posts/ex834aaANLhamLkvf/making-decisions-under-moral-uncertainty
fetched: 2026-07-06
via: forum-graphql
topic: "ea-intro-program"
note: "EA Intro Program, session: Week 7 What Do You Think, optional"
---

_Cross-posted [to LessWrong](https://www.lesswrong.com/s/4NFwxwzLzpiikfkk3/p/dX7vNKg4vex5vxWCW). Updated substantially since initial publication._

Overview/purpose of this sequence
---------------------------------

While working on an (upcoming) post about a new way to think about moral uncertainty, I unexpectedly discovered that, as best I could tell:

1.  There was no single post on LessWrong or the EA Forum that very explicitly (e.g., with concrete examples) overviewed what seem to be the most prominent approaches to making decisions under moral uncertainty (more specifically, those covered in [Will MacAskill’s 2014 thesis](http://commonsenseatheism.com/wp-content/uploads/2014/03/MacAskill-Normative-Uncertainty.pdf)).^[I genuinely mean no disrespect to the several posts on moral uncertainty I did discover (e.g., [here](https://forum.effectivealtruism.org/posts/WCw3PbGTjQ9GvT7wo/will-macaskill-on-normative-uncertainty), [here](https://forum.effectivealtruism.org/posts/kg2YNppX72q4LMqka/worldview-uncertainty), and [here](https://www.lesswrong.com/posts/Qh6bnkxbMFz5SNeFd/value-uncertainty-and-the-singleton-scenario)). All did meet some of those criteria, and I’d say most were well-written but just weren’t highly explicit (e.g., didn’t include enough concrete examples), and/or didn’t cover (in the one post) each of the prominent approaches and the related ideas necessary to understand them.][^bignote]

3.  There was no (easily findable and explicit) write-up of how to handle simultaneous moral and empirical uncertainty.  ([What I propose](https://forum.effectivealtruism.org/posts/LnZ2MwQEsenLczamX/what-to-do-when-both-morally-and-empirically-uncertain) is arguably quite obvious, but still seems worth writing up explicitly.)
    
5.  There was no (easily findable and sufficiently thorough) write-up of applying sensitivity analysis and value of information analysis to situations of moral uncertainty.

I therefore decided to write a series of three posts, each of which addressed one of those apparent “gaps”. My primary aim is to synthesise and make accessible various ideas that are currently mostly buried in the philosophical literature, but I also think it’s plausible that some of the ideas in some of the posts (though not this first one) haven’t been explicitly explored before. 

I expect that these posts are most easily understood if read in order, but each post should also have value if read in isolation, especially for readers who are already familiar with key ideas from work on moral uncertainty. 

Epistemic status (for the whole sequence)
-----------------------------------------

I've now spent several days reading about moral uncertainty, but I wouldn't consider myself an actual expert in this topic or in philosophy more broadly. Thus, while I don't expect this sequence to contain any _major_, _central_ mistakes, I wouldn’t be surprised if it's inaccurate or unclear/misleading in some places.

I welcome feedback of all kinds (on these posts and in general!).

Moral uncertainty
============

We are often forced to make decisions under conditions of uncertainty. This uncertainty can be empirical (e.g., what is the likelihood that nuclear war would cause human extinction?) or [moral](https://concepts.effectivealtruism.org/concepts/moral-uncertainty/) (e.g., does the wellbeing of future generations matter morally?).[^bignote2]^[In various places in this sequence, I will use language that may appear to endorse or presume moral realism (e.g., referring to “moral information” or to probability of a particular moral theory being “true”). But this is essentially just for convenience; I intend this sequence to be neutral on the matter of moral realism vs antirealism, and I believe this post can be useful in mostly similar ways regardless of one’s position on that matter. I discuss the matter of "moral uncertainty for antirealists" in more detail in [this separate post](https://www.lesswrong.com/posts/s6BGofzFbEr4Tmxkj/value-uncertainty).] The issue of making decisions under empirical uncertainty has been well-studied, and [expected utility theory](https://en.wikipedia.org/wiki/Expected_utility_hypothesis) has emerged as the typical account of how a rational agent should proceed in these situations. The issue of making decisions under _moral_ uncertainty appears to have received less attention (though see [this list of relevant papers](https://philpapers.org/browse/moral-uncertainty)), despite also being of clear importance.

I'll later publish a post on definitions, types, and sources of moral uncertainty. In the present post, I'll instead aim to convey a sense of what moral uncertainty is [through various examples](https://en.wikipedia.org/wiki/Ostensive_definition). One example (which I'll return to repeatedly) is the following:

Devon's decision
-----------------------------------------

> Suppose Devon assigns a 25% probability to T1, a version of hedonistic utilitarianism in which human “[hedons](https://wiki.lesswrong.com/wiki/Hedon)” (a hypothetical unit of pleasure) are worth 10 times more than fish hedons. He also assigns a 75% probability to T2, a different version of hedonistic utilitarianism, which values human hedons just as much as T1 does, but doesn’t value fish hedons at all (i.e., it sees fish experiences as having no moral significance). Suppose also that Devon is choosing whether to buy  a fish curry or a tofu curry, and that he’d enjoy the fish curry about twice as much. (Finally, let’s go out on a limb and assume Devon’s humanity.)

> According to T1, the choice-worthiness (roughly speaking, the rightness or wrongness of an action) of buying the fish curry is -90 (because it’s assumed to cause 1,000 negative fish hedons, valued as -100, but also 10 human hedons due to Devon’s enjoyment).^[The matter of how to actually assign “units” or “magnitudes” of choice-worthiness to different options, and what these things would even mean, is complex, and I won’t really get into it in this sequence.] In contrast, according to T2, the choice-worthiness of buying the fish curry is 10 (because this theory values Devon’s joy as much as T1 does, but doesn’t care about the fish’s experiences). Meanwhile, the choice-worthiness of the tofu curry is 5 according to both theories (because it causes no harm to fish, and Devon would enjoy it half as much as he’d enjoy the fish curry).

The choice-worthiness of each option according to each theory is summarised in the following table:

![](https://res.cloudinary.com/dwbqmbkdb/image/upload/v1577843309/Moral_uncertainty_table_r2rgnl.png)

Given this information, what should Devon do? 

"My Favourite Theory"
----------------
Multiple approaches to handling moral uncertainty have been proposed. The simplest option is the "My Favourite Theory" (MFT) approach, in which we essentially ignore our moral uncertainty, and just do whatever seems best based on the theory in which one has the highest "credence" (belief). In the above situation, MFT would suggest Devon should buy the fish curry, even though doing so is only somewhat better according to T2 (10 - 5 = 5), and is _far_ worse (5 - -90 = 95) according to another theory in which he has substantial (25%) credence. **Indeed, even if Devon had _49%_ credence in T1 (vs 51% in T2), and the difference in the choice-worthiness of the options was _a thousand times_ as large according to T1 as according to T2, MFT would still ignore the fact the situation is so much "higher stakes" for T1 than T2, refuse to engage in any "moral hedging", and advise Devon proceed with whatever T2 advised.** 

On top of generating such counterintuitive results, MFT is subject to other quite damning objections (see pages 20-25 of [Will MacAskill’s 2014 thesis](http://commonsenseatheism.com/wp-content/uploads/2014/03/MacAskill-Normative-Uncertainty.pdf)). Thus, the remainder of this post will focus on other approaches to moral uncertainty, which _do_ allow for "moral hedging".

Types of moral theories
============
Which approach to moral uncertainty should be used depends in part on what types of moral theories are under consideration by the decision-maker - in particular, whether the theories are _cardinally measurable_ or only _ordinally measurable_, and, if cardinally measurable, whether or not they’re _inter-theoretically comparable_.^[[Christian Tarsney's 2017 thesis](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf) thesis (e.g., pages 175-176) explains other ways the "structure" of moral theories can differ, and potential implications of these other differences. These were among the juicy complexities I had to resist cramming in this originally-intended-as-bitesized post (but I may write another post about Tarsney's ideas later; please let me know if you think that'd be worthwhile).]

Cardinality
-----------------------------------------
Essentially, a theory is cardinally measurable if it can tell you not just which outcome is better than which, but also _by how much_. E.g., it can tell you not just that “X is better than Y which is better than Z”, but also that “X is 10 ‘units’ better than Y, which is 5 ‘units’ better than Z”. (Some readers may be more familiar with distinctions between ordinal, _interval_, and _ratio_ scales; I'm almost certain "cardinal" scales include both interval and ratio scales.)

My understanding is that popular consequentialist theories are typically cardinal, while popular non-consequentialist theories are typically (or at least more often) ordinal. For example, a Kantian theory may simply tell you that lying is worse than not lying, but not by how much, so you cannot directly weigh that “bad” against the goodness/badness of other actions/outcomes (whereas such comparisons are relatively easy under most forms of utilitarianism).

Intertheoretic comparability
-----------------------------------------
Even if a set of theories _are_ cardinal, they still may not be _inter-theoretically comparable_. Roughly speaking, two theories are comparable if there's a consistent, non-arbitrary “exchange rate” between the theories' “units of choice-worthiness" (and they're non-comparable if there isn't). MacAskill explains the “problem of intertheoretic comparisons” as follows:

> “even when all theories under consideration give sense to the idea of magnitudes of choice-worthiness, we need to be able to compare these magnitudes of choice-worthiness across different theories. But it seems that we can’t always do this. \[... Sometimes we don’t know\] how can we compare the seriousness of the wrongs, according to these different theories\[.\] For which theory is there more at stake?”

In [his own thesis](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf),  Tarsney provides useful examples:

> "Consider, for instance, hedonistic and preference utilitarianism, two straightforward maximizing consequentialist theories that agree on every feature of morality, except that hedonistic utilitarianism regards pleasure and pain as the sole non-derivative bearers of moral value while preference utilitarianism regards satisfied and dissatisfied preferences as the sole non-derivative bearers of moral value. Both theories, we may stipulate, have the same cardinal structure. But this structure does not answer the crucial question for expectational reasoning, how the value of a hedon according to hedonic utilitarianism compares to the value of a preference utile according to preference utilitarianism—that is, for an agent who divides her beliefs equally between the two theories and wishes to hedge when they conflict, how much hedonic experience does it take to offset the dissatisfaction of a preference of a given strength (or vice versa)? 

> Likewise, of course, in [trolley problem situations](https://en.wikipedia.org/wiki/Trolley_problem) that pit consequentialist and deontological theories against one another, even if we could overcome the apparent structural incompatibility of these rival theories, the thorniest question seems to be: How many net lives must be saved, according to some particular version of consequentialism, to offset the wrongness of killing an innocent
person, according to some particular version of deontology?" (line break added)^[It's worth noting that similar issues have received attention from, and are relevant to, other fields as well. For example, MacAskill writes: "A similar problem arises in the study of social welfare in economics: it is desirable to be able to compare the strength of preferences of different people, but even if you represent preferences by cardinally measurable utility functions you need more information to make them comparable." Thus, concepts and findings from those fields could illuminate this matter, and vice versa.]

Three approaches
===========================================

In [MacAskill's thesis](http://commonsenseatheism.com/wp-content/uploads/2014/03/MacAskill-Normative-Uncertainty.pdf), the approaches to moral uncertainty he argues for are:

1.  Maximising Expected Choice-worthiness (MEC), if all theories under consideration by the decision-maker are cardinal and intertheoretically comparable. (This is arguably the “best” situation to be in, as it is the case in which the most information is being provided by the theories.)
3.  Variance Voting (VV), a form of what I’ll call “Normalised MEC”, if all theories under consideration are cardinal but _not_ intertheoretically comparable.
2.  The Borda Rule (BR), if all theories under consideration are ordinal. (This is the situation in which the _least_ information is being provided by the theories.)
4.  A “Hybrid” procedure, if the theories under consideration differ in whether they’re cardinal or ordinal and/or in whether they’re intertheoretically comparable. (Hybrid procedures will not be discussed in this post; interested readers can refer to pages 117-122 of MacAskill’s thesis.)

I will focus on these approaches (excluding Hybrid procedures), both because these approaches seem to me to be relatively prominent, effective, and intuitive, and because I know less about other approaches. (Potentially promising alternatives include [a bargaining-theoretic approach](https://globalprioritiesinstitute.org/wp-content/uploads/2019/Greaves_Cotton-Barratt_bargaining_theoretic_approach.pdf) [[related presentation slides here](http://users.ox.ac.uk/~mert2255/talks/parliamentary-model.pdf)], the similar but older and less fleshed-out [parliamentary model](http://www.overcomingbias.com/2009/01/moral-uncertainty-towards-a-solution.html), and the approaches discussed in [Tarsney's thesis](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf).)

Maximising Expected Choice-worthiness (MEC)
-----------------------------------------

MEC is essentially an extension of expected utility theory. [MacAskill](http://commonsenseatheism.com/wp-content/uploads/2014/03/MacAskill-Normative-Uncertainty.pdf) describes MEC as follows:

> “when all \[normative/moral\] theories \[under consideration by the decision-maker\] are cardinally measurable and intertheoretically comparable, the appropriateness of an option is given by its expected choice-worthiness, where the expected choice-worthiness (EC) of an option is as follows:

![](https://res.cloudinary.com/dwbqmbkdb/image/upload/v1577669360/MEC_formula_pymz12.jpg)

  

> The appropriate options are those with the highest expected choice-worthiness.”

In this formula, _C(Ti)_ represents the decision-maker’s credence (belief) in _Ti_ (some particular moral theory), while _CWi(A)_ represents the “choice-worthiness” (_CW_) of _A_ (an “option” or action that the decision-maker can take), according to _Ti_.

To illustrate how MEC works, we will return to the example of Devon deciding whether to buy a fish curry or tofu curry, as summarised in the table of choice-worthiness values from earlier: 

![](https://res.cloudinary.com/dwbqmbkdb/image/upload/v1577843309/Moral_uncertainty_table_r2rgnl.png)

(I’ve also [modelled this example in Guesstimate](https://www.getguesstimate.com/models/14802). In that link, for comparison purposes, this model is followed by a model of the same basic example using traditional expected utility reasoning, and another using MEC-E (an approach I explain in [my next post](https://forum.effectivealtruism.org/posts/LnZ2MwQEsenLczamX/what-to-do-when-both-morally-and-empirically-uncertain)).)

Using MEC in this situation, the expected choice-worthiness of buying the fish curry is 0.25 * -90 + 0.75 * 10 = -15, and the expected choice-worthiness of buying the tofu curry is 0.25 * 5 + 0.75 * 5 = 5. Thus, Devon should buy the tofu curry.

**This is despite Devon believing that T2 is more likely than T1, and T2 claiming that buying the fish curry is better than purchasing the tofu curry. The reason is that, as discussed earlier, there is far “more at stake” for T1 than for T2 in this example.** 

To me, this seems like a good, intuitive result for MEC, and shows how it improves upon the “My Favourite Theory” approach.

There are two final things I should note about MEC:

*   MEC can be used in exactly the same way when more than two theories are under consideration. (The only reason most examples in this sequence will be ones in which only two moral theories are under consideration is to keep explanations simple.)
*   **The basic idea of MEC can also be used as a heuristic, without involving actual numbers.**  
    

    *   For example, say Clara believes that there’s a “high chance” utilitarianism is correct, but that some deontological theory, in which lying is deeply wrong, is “plausible”. Clara is considering whether to tell a lie, and has good reason to believe this will lead to a slight net increase in wellbeing. She might still decide not to lie, despite believing it’s likely that lying is the “right” thing to do, because it’d only be _slightly right_, whereas it’s plausible it’s _deeply wrong_.

Another example of applying MEC (which is probably only worth reading if the approach still seems unclear to you) can be found in the following footnote.[^bignote3]

Normalised MEC and Variance Voting
-----------------------------------------

(_It's possible I've made mistakes in this section; if you think I have, please let me know._)

But what about when, despite being cardinal, the theories you have credence in are _not intertheoretically comparable_? (Recall that this essentially means that there's no consistent, non-arbitrary “exchange rate” between the theories' “units of choice-worthiness".) 

MacAskill argues that, in such situations, one must first "normalise" the theories in some way (which basically means ["adjusting values measured on different scales to a notionally common scale"](https://en.wikipedia.org/wiki/Normalization_(statistics))). MEC can then be applied just as we saw earlier, but now with the new, normalised choice-worthiness scores.

There are multiple ways one could normalise the theories under consideration (e.g., by range), but MacAskill argues for normalising by variance. That is, he argues that we should:
 
> “[treat] the average of the squared differences in choice-worthiness from the mean choice-worthiness as the same across all theories. Intuitively, the variance is a measure of how spread out choice-worthiness is over different options; normalising at variance is the same as normalising at the difference between the mean choice-worthiness and one standard deviation from the mean choice-worthiness.”

MacAskill uses the term Variance Voting to refer to this process of first normalising by variance and then using the MEC approach.

(Unfortunately, as far as I could tell, none of the [three](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf) [theses](http://commonsenseatheism.com/wp-content/uploads/2014/03/MacAskill-Normative-Uncertainty.pdf)/[papers](http://users.ox.ac.uk/~ball1714/Variance%20normalisation.pdf) I read that referred to normalising moral theories by variance actually provided a clear, worked example. I've attempted to construct such a worked example based on an extension of the scenario with Devon deciding what meal to buy; that can be found [here](https://docs.google.com/spreadsheets/d/1E0eKGhwCdAXGGFboAAcbg5pWa2HT489oe2XKiruuEp0/edit?usp=sharing), and [here](https://docs.google.com/spreadsheets/d/1-kVzwLX_remb6a-_smbcUUPr8L7nG5qrBopU2iijI1Y/edit?usp=sharing) is a simpler and I think effectively identical method, suggested in a private message.)
 
In arguing for Variance Voting over its alternatives, MacAskill states that the basic principle normalisation aims to capture is the “_principle of equal say_: the idea, stated imprecisely for now, that we want to give equally likely moral theories equal weight when considering what it’s appropriate to do” (emphasis in original). He further writes:

> “To see a specific case of how this could go awry, consider average and total utilitarianism, and assume that they are indeed incomparable. And suppose that, in order to take an expectation over those theories, we choose to treat them as agreeing on the choice-worthiness ordering of options concerning worlds with only one person in them. If we do this, then, for almost all decisions about population ethics, the appropriate action will be in line with what total utilitarianism regards as most choiceworthy because, for almost all decisions, the stakes are huge for total utilitarianism, but not very large for average utilitarianism. So it seems that, if we treat the theories in this way, we are being partisan to total utilitarianism.

> In contrast, if we chose to treat the two theories as agreeing on the choice-worthiness differences between options with worlds involving 10^100 people then, for almost all real-world decisions, what it’s appropriate to do will be the same as what average utilitarianism regards as most choice-worthy. This is because we’re representing average utilitarianism as claiming that, for almost all decisions, the stakes are much higher than for total utilitarianism. In which case, it seems that we are being partisan to average utilitarianism, whereas what we want is to have a way of normalising such that each theory gets equal influence.” (line break added)

(Note that it’s not a problem for one theory to have much more influence on decisions _due to higher credence in that theory_. The principle of equal say is only violated if additional influence is unrelated to additional credence in a theory, and instead has to do with what are basically _arbitrary/accidental choices about exchange rates_ between units of choice-worthiness.)

[MacAskill](http://commonsenseatheism.com/wp-content/uploads/2014/03/MacAskill-Normative-Uncertainty.pdf) (pages 110-116) provides two arguments that VV is the approach that satisfies the principle of equal say, and [Owen Cotton-Barratt](http://users.ox.ac.uk/~ball1714/Variance%20normalisation.pdf) similarly argues for the superiority of normalisation by variance over alternative normalisations. (But note that this approach does seem to have its flaws, as discussed in, e.g., pages 222-223 of [Tarsney's thesis](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf).)

The Borda Rule (BR)
-----------------------------------------

Finally, what about when all moral theories under consideration are only ordinal, rather than cardinal  (i.e., they say only whether each option is more, equally, or less choice-worthy than each other option, but not by how much)? For such cases, MacAskill recommends a voting method called the Borda Rule (BR; also known as a "Borda count"), with "moral theories play[ing] the part of voters and practical options the part of candidates" ([Tarsney](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf)). I will first quote MacAskill’s formal explanation of BR (which may be somewhat confusing by itself), before quoting an example he gives and showing what applying BR to that looks like:

> “An option _A_’s _Borda Score_, for any theory _Ti_, is equal to the number of options within the option-set that are less choice-worthy than _A_ according to theory _Ti_’s choice-worthiness function, minus the number of options within the option-set that are more choice-worthy than _A_ according to _Ti_’s choice-worthiness function.^[MacAskill later notes that a simpler method (which doesn’t subtract the number of options that are more choice-worthy) can be used when there are no ties. His calculations for the example I quote and work through in this post use that simpler method. But in this post, I’ll stick to the method MacAskill describes in this quote (which is guaranteed to give the same final answer in this example anyway).]

> An option _A_’s _Credence-Weighted Borda Score_ is the sum, for all theories _Ti_, of the Borda Score of _A_ according to theory _Ti_ multiplied by the credence that the decision-maker has in theory _Ti_.

> \[The _Borda Rule_ states that an\] option _A_ is more appropriate than an option _B_ iff \[if and only if\] _A_ has a higher Credence-Weighted Borda Score than _B_; _A_ is equally as appropriate as _B_ iff _A_ and _B_ have an equal Credence-Weighted Borda Score.”

I will now show, following MacAskill, how this rule applies to an example he gives in his thesis:

> “Julia is a judge who is about to pass a verdict on whether Smith is guilty for murder. She is very confident that Smith is innocent. There is a crowd outside, who are desperate to see Smith convicted. Julia has three options:

> \[G\]: Pass a verdict of ‘guilty’.

> \[R\]: Call for a retrial.

> \[I\]: Pass a verdict of ‘innocent’.

> Julia knows that the crowd will riot if Smith is found innocent, causing mayhem on the streets and the deaths of several people. If she calls for a retrial, she knows that he will be found innocent at a later date, and that it is much less likely that the crowd will riot at that later date. If she declares Smith guilty, the crowd will be appeased and go home peacefully. She has credence in three moral theories:

> 35% credence in a variant of utilitarianism, according to which \[G≻R≻I\].

> 34% credence in a variant of common sense, according to which \[R≻I≻G\].

> 31% credence in a deontological theory, according to which \[I≻R≻G\].”

The options’ Borda Scores according to each theory, and their Credence-Weighted Borda Scores, are therefore as shown in the following table: 

![](https://res.cloudinary.com/dwbqmbkdb/image/upload/v1577880453/Borda_table_2_vi7wzm.png)

(For example, G has a score of 2 - 0 = 2 according to utilitarianism because that theory views two options as less choice-worthy than G, and 0 options as more choice-worthy than G.)

The calculations that provided the Credence-Weighted Borda Scores shown in the above table are as follows:

> G: 0.35 * 2 + 0.34 * -2 + 0.31 * -2 = -0.6 (this because the utilitarian, common sense, and deontological theories are given credences of 35%, 34%, and 31%, respectively, and these serve as the weightings for the Borda Scores these theories provide)

> R: 0.35 * 0 + 0.34 * 2 + 0.31 * 0 = 0.68

> I: 0.35 * -2 + 0.34 * 0 + 0.31 * 2 = -0.08

BR would therefore claim that Julia should call for a retrial. **This is the case even though passing a guilty verdict was seen as best by Julia’s “favourite theory” (the variant of utilitarianism). Essentially, calling for a retrial is preferred because both passing a guilty verdict and passing an innocent verdict were seen as** **_least_** **preferred by some theory Julia has substantial credence in, whereas calling for a retrial is not** **_least_** **preferred by any theory.**

MacAskill notes that preferring this sort of a compromise option in a case like this seems intuitively right. He also argues that alternatives to BR fail to give us the sort of answers we’d want in these or other sorts of cases. (Though [Tarsney](https://pdfs.semanticscholar.org/1c29/5c1c2e8eda8eb41560feb9f927104a6a6a85.pdf) raises some objections to BR which I won't get into.)

Closing remarks
===============

I hope you have found this post a useful, clear summary of key ideas around what moral uncertainty is, why it matters, and how to make decisions when morally uncertain. Personally, I believe that an understanding of moral uncertainty - particularly a sort of heuristic version of MEC - has usefully enriched my thinking, and influenced some of the biggest decisions I’ve made over the last year.[^bignote4]

In [my next post](https://forum.effectivealtruism.org/posts/LnZ2MwQEsenLczamX/what-to-do-when-both-morally-and-empirically-uncertain), I discuss (possibly novel, arguably obvious) extensions of each of the three approaches discussed here, in order to allow for modelling _both moral and empirical uncertainty, explicitly and simultaneously_. The post after that will discuss how we can combine the approaches in the first two posts with sensitivity analysis and value of information analysis.^[To foreshadow: Basically, my idea is that, once you’ve made explicit your degree of belief in various moral theories and how good/bad outcomes appear to each of those theories, you can work out which updates to your beliefs in moral theories or to your understandings of those moral theories are most likely to change your decisions, and thus which “moral learning” to prioritise and how much resources to expend on it.][^bignote5]

[^bignote]: Other terms/concepts that are sometimes used and are similar to “moral uncertainty” are _normative_, _axiological_, and _[value](https://www.lesswrong.com/posts/Qh6bnkxbMFz5SNeFd/value-uncertainty-and-the-singleton-scenario)_ uncertainty. See [these](https://www.lesswrong.com/posts/dXT5G9xEAddac8H2J/morality-vs-related-concepts) two [posts](https://www.lesswrong.com/s/4NFwxwzLzpiikfkk3/p/oZsyK4SjnPe6HGia8) for info on the overlaps and distinction between these terms. In this sequence, I’ll use “moral uncertainty” in a general sense that also incorporates axiological and value uncertainty, and at least a large part of normative uncertainty.

    Also, throughout this sequence, I will use the term "approach" in a way that I believe aligns with MacAskill's use of the term "metanormative theory".

[^bignote2]: It seems to me that there are many cases where it’s not entirely clear whether the uncertainty is empirical or moral. For example, I might wonder “Are fish conscious?”, which seems on the face of it an empirical question. However, I might not yet know precisely what I mean by “conscious”, and only really want to know whether fish are “conscious in a sense I would morally care about”. In this case, the seemingly empirical question becomes hard to disentangle from the (seemingly moral) question “What forms of consciousness are morally important?”

    (Furthermore, my answers to _that_ question in turn may be influenced by empirical discoveries. For example, I may initially believe avoidance of painful stimuli demonstrates consciousness in a morally relevant sense, but then change that belief after learning that this behaviour can be displayed in a stimulus-response way by certain extremely simple organisms.)

    In such cases, I believe the approach suggested in [the next post of this series](https://forum.effectivealtruism.org/posts/LnZ2MwQEsenLczamX/what-to-do-when-both-morally-and-empirically-uncertain) will still work well, as that approach does not really require empirical and moral uncertainty to be treated fundamentally differently. ([Another approach](https://forum.effectivealtruism.org/posts/kg2YNppX72q4LMqka/worldview-uncertainty), which presents itself differently but I think is basically the same in effect, is to consider uncertainty over “[worldviews](https://www.openphilanthropy.org/blog/worldview-diversification)”, with those worldviews combining moral and empirical claims.)

[^bignote3]: Suppose Alice assigns a 60% probability to hedonistic utilitarianism (HU) being true and a 40% probability to preference utilitarianism (PU) being true. Suppose also that Bob _wants_ to play video games, but would actually _get slightly more joy_ out of a day at the beach. Thus, according to HU, letting Bob play video games has a CW of 5, and taking him to the beach has a CW of 6; while according to PU, letting Bob play video games has a CW of 15, and taking him to the beach has a CW of -20.

    Under these conditions, the expected choice-worthiness of letting Bob play video games is 0.6 * 5 + 0.4 * 15 = 9, and the expected choice-worthiness of taking Bob to the beach is 0.6 * 6 + 0.4 * -20 = -4.4. Therefore, Alice should let Bob play video games.

    Analogously to the situation with the Devon example, this is despite Alice believing HU is more likely than PU, and despite HU positing that taking Bob to the beach being better than letting him play video games. As before, the reason is that there is “more at stake” in this decision for the less-believed theory than for the more-believed theory; HU considers there to only be a very small difference between the choice-worthiness of the options, while PU considers there to be a large difference.

[^bignote4]: However, these concepts are of course not an instant fix or cure-all. In a (readable and interesting) [2019 paper](https://ora.ox.ac.uk/objects/uuid:f3da6f54-8017-432a-a294-7d7707e6a74d/download_file?file_format=pdf&safe_filename=MACASKILL%2Bet%2Bal.%2B2019.pdf&type_of_work=Journal+article), MacAskill writes “so far, the implications for practical ethics have been drawn too simplistically \[by some philosophers.\] First, the implications of moral uncertainty for normative ethics are far more wide-ranging than has been noted so far. Second, one can't straightforwardly argue from moral uncertainty to particular conclusions in practical ethics, both because of ‘interaction’ effects between moral issues, and because of the variety of different possible intertheoretic comparisons that one can reasonably endorse.”

    For a personal example, a heuristic version of MEC still leaves me unsure whether I should move from being a vegetarian-flirting-with-veganism to a strict vegan, or even whether I should spend much time making that decision, because that might trade off to some extent with time and money I could put towards [longtermist](https://forum.effectivealtruism.org/posts/qZyshHCNkjs3TvSem/longtermism) efforts (which seem more choice-worthy according to other moral theories I have some credence in). I suspect any quantitative modelling simple enough to be done in a reasonable amount of time would still leave me unsure.

    That said, I, like MacAskill (in the same paper), “do believe, however, that consideration of moral uncertainty should have major impacts for how practical ethics is conducted. \[...\] It would be surprising if the conclusions \[of approaches taking moral uncertainty into account\] were the same as those that practical ethicists typically draw.”

    In particular, I’d note that considering moral uncertainty can reveal some “low-hanging fruit”: some “trades” between moral theories that are relatively clearly advantageous, due to large differences in the “stakes” different moral theories see the situation as having. (Personally, cases of apparent low-hanging fruit of this kind have included becoming at least vegetarian, switching my career aims to longtermist ones, and yet engaging in global-poverty-related movement-building when an unusual opportunity arose and it wouldn’t take up too much of my time.)

[^bignote5]: I’m also considering later adding posts on:

    *   Various definitions, types, and sources of moral uncertainty (drawing in part on [these](https://www.lesswrong.com/posts/FobXYjmZD254MNk2S/intuitive-supergoal-uncertainty) [posts](https://www.lesswrong.com/posts/AytzBuJSD9v2cWu3m/three-kinds-of-moral-uncertainty)).
    *   The idea of ignoring even very high credence in nihilism, because it’s never decision-relevant.
    *   Whether it could make sense to give moral realism disproportionate (compared to antirealism) influence over our decisions, based on the idea that realism might view there as “more at stake” than antirealism does.

    I’d be interested in hearing whether people think those threads are likely to be worth pursuing.