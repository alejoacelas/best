---
title: "Does X cause Y? An in-depth evidence review"
date: 2021-07-28
url: https://cold-takes.com/does-x-cause-y-an-in-depth-evidence-review
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 2, e.g. ea-principles-epistemics/minimal-trust-investigations.md; Karnofsky on reading empirical evidence critically, epistemics"
---

There's an interesting theory out there that X causes Y. If this were true, it would be pretty important. So I did a deep-dive into the academic literature on whether X causes Y. Here's what I found. 

(Embarrassingly, I can't actually remember what X and Y are. I think maybe X was enriched preschool, or just school itself, or eating fish while pregnant, or the Paleo diet, or lead exposure, or a clever "nudge" policy trying to get people to save more, or some self-help technique, or some micronutrient or public health intervention, or democracy, or free trade, or some approach to intellectual property law. And Y was ... lifetime earnings, or risk of ADHD diagnosis, or IQ in adulthood, or weight loss, or violent crime, or peaceful foreign policy, or GDP per capita, or innovation. Sorry about that! Hope you enjoy the post anyway! Fortunately, I think **what I'm about to write is correct for pretty much any (X,Y) from those sorts of lists.**) 

In brief: 

  * There are hundreds of studies on whether X causes Y, but most of them are simple observational studies that are just essentially saying "People/countries with more X also have more Y." For reasons discussed below, we can't really learn much from these studies. 
  * There are 1-5 more interesting studies on whether X causes Y. Each study looks really clever, informative and rigorous at first glance. However, the more closely you look at them, the more confusing the picture gets. 
  * We ultimately need to choose between (a) believing some overly complicated theory of the relationship between X and Y, which reconciles all of the wildly conflicting and often implausible things we're seeing in the studies; (b) more-or-less reverting to what we would've guessed about the relationship between X and Y in the absence of any research. 



## The chaff: lots of unhelpful studies that I'm disregarding

First, the good news: there are hundreds of studies on whether X causes Y. The bad news? We need to throw most of them out. 

Many have comically small sample sizes (like studying 20 people) and/or comically short time horizons (like looking at weight loss over two weeks),1 or unhelpful outcome measures (like intelligence tests in children under 5).2 But by far the most common problem is that **most of the studies on whether X causes Y are simple observational studies: they essentially just find that people/countries with more X also have more Y.**

Why is this a problem? There could be a _confounder_ \- some third thing, Z, that is correlated with both X and Y. And there are specific reasons we should expect confounders to be common: 

  * In general, people/countries that have more X also have more of lots of other helpful things - they're richer, they're more educated, etc. For example, if we're asking whether higher-quality schooling leads to higher earnings down the line, an issue is that people with higher-quality schooling also tend to come from better-off families with lots of other advantages. 
  * In fact, the _very fact that people in upper-class intellectual circles think X causes Y_ means that richer, more educated people/countries tend to deliberately get more X, and also try to do a lot of other things to get more Y. For example, more educated families tend to eat more fish (complicating the attempt to see whether eating fish in pregnancy is good for the baby).3



Now, a lot of these studies try to "control for" the problem I just stated - they say things like "We examined the effect of X and Y, while controlling for Z [e.g., how wealthy or educated the people/countries/whatever are]." How do they do this? The short answer is, well, hm, jeez. Well you see, to simplify matters a bit, just try to imagine ... uh ... shit. Uh. The only high-level way I can put this is: 

  * They use a technique called [regression analysis](https://en.wikipedia.org/wiki/Regression_analysis) that, as far as I can determine, cannot be explained in a simple, intuitive way (especially not in terms of how it "controls for" confounders). 
  * The "controlling for" thing relies on a lot of subtle assumptions and can break in all kinds of weird ways. [Here's ](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0152719)a technical explanation of some of the pitfalls; [here's](https://www.cold-takes.com/phil-birnbaums-regression-analysis/) a set of deconstructions of regressions that break in weird ways. 
  * None of the observational studies about whether X causes Y discuss the pitfalls of "controlling for" things and whether they apply here. 



I don't think we can trust these papers, and to really pick them all apart (given how many there are) would take too much time. So let's focus on a smaller number of better studies. 

## The wheat: 1-5 more interesting studies

Digging through the sea of unhelpful studies, I found 1-5 of them that are actually really interesting! 

For example, one study examines some strange historical event you've never heard of (perhaps a [surge in Cuban emigration triggered by Fidel Castro suddenly allowing it](https://davidcard.berkeley.edu/papers/mariel-impact.pdf), or [John Rockefeller's decision to fund a hookworm eradication campaign](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3800113/), or a [sudden collective pardon leading to release of a third of prison inmates in Italy](https://www.aeaweb.org/articles?id=10.1257/aer.103.6.2437)), where for abstruse and idiosyncratic reasons, X got distributed in what seems to be almost a random way. This study is really clever, and the authors were incredibly thorough in examining seemingly every way their results could have been wrong. They conclude that X causes Y! 

But on closer inspection, I have a bunch of reservations. For example: 

  * The paper doesn't make it easy to replicate its analysis, and when someone does manage to sort-of replicate it, they may [get different results](https://blog.givewell.org/2017/12/07/questioning-evidence-hookworm-eradication-american-south/). 
  * There was other weird stuff going on (e.g., changes in census data collection methods5), during the strange historical event, so it's a little hard to generalize. 
  * In a response to the study, another academic advances a complex theory of how the study could actually have gotten a misleading result. This led to an intense back-and-forth between the original authors and the skeptic, stretched out over years because each response had to be published in a journal, and by the time I got to the end of it I didn't have any idea what to think anymore.6



I found 0-4 other interesting studies. I can't remember all of the details, but they may have included: 

  * A study comparing siblings, or maybe "very similar countries," that got more or less of X.7
  * A study using a complex mathematical technique claiming to cleanly isolate the effect of X and Y. I can't really follow what it's doing, and I’m guessing there are a lot of weird assumptions baked into this analysis.8
  * A study with actual randomization: some people were randomly assigned to receive more X than others, and the researchers looked at who ended up with more Y. This sounds awesome! However, there are issues here too: 
    * It's kind of ambiguous whether the assignment to X was really "random."9
    * Extremely weird things happened during the study (for example, [generational levels of flooding](https://www.givewell.org/international/technical/programs/deworming/reanalysis#Our_initial_reservations)), so it's not clear how well it generalizes to other settings. 
    * The result seems fragile ([simply adding more data weakens it a lot](https://www.givewell.org/international/technical/programs/deworming#Other_studies_of_long-term_effects)) and/or just hard to believe (like [schoolchildren doing noticeably better on a cognition test after a few weeks of being given fish instead of meat with their lunch, even though they mostly didn't eat the fish](https://nutritionj.biomedcentral.com/articles/10.1186/s12937-017-0287-9)). 



Compounding the problem, the 1-5 studies I found tell very different stories about the relationship between X and Y. How could this make sense? Is there a unified theory that can reconcile all the results? 

Well, one possibility is that X causes Y sometimes, but only under very particular conditions, and the effect can be masked by some other thing going on. So - if you meet one of 7 criteria, you should do X to get more Y, but if you meet one of 9 other criteria, you should actually avoid X! 

## Conclusion

I have to say, this all was simultaneously more fascinating and less _informative_ than I expected it would be going in. I thought I would find some nice studies about the relationship between X and Y and be done. Instead, I've learned a ton about weird historical events and about the ins and outs of different measures of X and Y, but I feel just super confused about whether X causes Y. 

I guess my bottom line is that X does cause Y, because it intuitively seems like it would. 

I'm glad I did all this research, though. It's good to know that social science research can go haywire in all kinds of strange ways. And it's good to know that despite the confident proclamations of pro- and anti-X people, it's legitimately just super unclear whether X causes Y. 

I mean, how else could I have learned that? 

## Appendix: based on a true story

This piece was inspired by: 

  * Most evidence reviews GiveWell has done, especially of [deworming](https://www.givewell.org/international/technical/programs/deworming)
  * Many evidence reviews by David Roodman, particularly [Macro Aid Effectiveness Research: a Guide for the Perplexed](https://www.cgdev.org/publication/macro-aid-effectiveness-research-guide-perplexed-working-paper-135); [Due Diligence: an Impertinent Inquiry into Microfinance](https://smile.amazon.com/dp/B0095V3J0S/); and [Reasonable Doubt: A New Look at Whether Prison Growth Cuts Crime](https://www.openphilanthropy.org/blog/reasonable-doubt-new-look-whether-prison-growth-cuts-crime). 
  * Many evidence reviews by Slate Star Codex, collected [here](https://slatestarcodex.com/tag/much-more-than-you-wanted-to-know/). 
  * Informal evidence reviews I've done for e.g. personal medical decisions. 



The basic patterns above apply to most of these, and the bottom line usually has the kind of frustrating ambiguity seen in this conclusion.

There are cases where things seem a bit less ambiguous and the bottom line seems clearer. Speaking broadly, I think the main things that contribute to this are: 

  * Actual randomization. For years I've nodded along when people say "You shouldn't be dogmatic about randomization, there are many ways for a study to be informative," but each year I've become a bit more dogmatic. Even the most sophisticated-, appealing-seeming alternatives to randomization in studies seem to have a way of falling apart. Randomized studies almost always have problems and drawbacks too. But I’d rather have a randomized study with drawbacks than a non-randomized study with drawbacks. 
  * Extreme thoroughness, such as Roodman's attempt to reconstruct the data and code for key studies in [Reasonable Doubt](https://www.openphilanthropy.org/blog/reasonable-doubt-new-look-whether-prison-growth-cuts-crime). This sometimes leads to outright dismissing a number of studies, leaving a smaller, more consistent set remaining. 



[](https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fdoes-x-cause-y-an-in-depth-evidence-review%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20Does%20X%20cause%20Y%3F%20An%20in-depth%20evidence%20review&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fdoes-x-cause-y-an-in-depth-evidence-review%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20Does%20X%20cause%20Y%3F%20An%20in-depth%20evidence%20review&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/reddit/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fdoes-x-cause-y-an-in-depth-evidence-review%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20Does%20X%20cause%20Y%3F%20An%20in-depth%20evidence%20review&ct=1) [](https://api.addthis.com/oexchange/0.8/forward/menu/offer?url=https%3A%2F%2Fwww.cold-takes.com%2Fdoes-x-cause-y-an-in-depth-evidence-review%2F&pubid=ra-60a178324cffc42e&title=Cold%20Takes%20-%20Does%20X%20cause%20Y%3F%20An%20in-depth%20evidence%20review&ct=1)

[Subscribe](https://www.cold-takes.com/does-x-cause-y-an-in-depth-evidence-review/#/portal/signup/free) [Feedback](https://www.guidedtrack.com/programs/4kal2ue/run?posttitle=Does%20X%20cause%20Y%3F%20An%20in-depth%20evidence%20review)

* * *

## Footnotes

  1. Both of these show up in studies from [this review on the Paleo diet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4588744/). To be fair, small studies can theoretically be aggregated for larger numbers, but that's often hard to do in practice when the studies are all a bit different from each other. ↩

  2. I don't have a great cite for this, but it's pretty common in studies on things like how in vitro fertilization affects child development. ↩

  3. See studies cited in [this literature review](https://pubmed.ncbi.nlm.nih.gov/31739098/). ↩

  4. (Footnote deleted) 

  5. "Borjas’s paper ... separately measured the wages of two slices of that larger group ... But it was in that act of slicing the data that the spurious result was generated. It created data samples that, exactly in 1980, suddenly included far more low-wage black males—accounting for the whole wage decline in those samples relative to other cities. Understanding how that happened requires understanding the raw data ... Right in 1980, the Census Bureau—which ran the CPS surveys—improved its survey methods to cover more low-skill black men. The 1970 census and again the 1980 census had greatly undercounted low-skill black men, both by failing to identify their residences and by failing to sufficiently probe survey respondents about marginal or itinerant household members. There was massive legislative and judicial pressure to count blacks better, particularly in Miami." ↩

  6. E.g., the [Mariel boatlift debate](https://davidroodman.com/blog/2017/05/25/four-points-on-the-debate-over-the-impact-of-mariel-boatlift/). ↩

  7. For example, sibling analysis features prominently in [Slate Star Codex's examination of preschool impacts](https://slatestarcodex.com/2018/11/13/preschool-much-more-than-you-wanted-to-know/), while comparisons between Sweden and other Scandinavian/European countries is [prominent in its analysis of lockdowns](https://astralcodexten.substack.com/p/lockdown-effectiveness-much-more). ↩

  8. E.g., [this attempt to gauge the impacts of microfinance](https://blog.givewell.org/2011/05/13/microlending-debate-an-example-of-why-academic-research-should-be-used-with-caution/), or "[generalized method of moments](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1468-0084.2008.00542.x)" approaches to cross-country analysis (of e.g. the effectiveness of aid). ↩

  9. This is a surprisingly common issue. E.g. see debates over [whether charter school lotteries are really random](https://freddiedeboer.substack.com/p/charter-school-lotteries-are-a-black), whether ["random assignment to small or large class size" can be interpreted as "random assignment to a teacher,"](https://www.econlib.org/archives/2011/10/teachers_and_in.html) discussion of "judge randomization" and possible randomization failure [here](https://www.openphilanthropy.org/blog/reasonable-doubt-new-look-whether-prison-growth-cuts-crime) (particularly section 9.9). A separate issue: sometimes randomization occurs by "cluster" (instead of randomizing which _individuals_ receive some treatment, perhaps particular _schools_ or _groups_ are chosen to receive it), which can complicate the analysis. ↩



