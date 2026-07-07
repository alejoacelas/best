---
title: "New paper: 'Categorizing variants of Goodhart's Law' - Machine Intelligence Research Institute"
author: "Scott Garrabrant"
date: 2018-03-27
url: https://intelligence.org/2018/03/27/categorizing-goodhart
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "MIRI taxonomy of Goodhart's law (alignment)"
---

Skip to content

# New paper: “Categorizing variants of Goodhart’s Law”

  * [ March 27, 2018 ](https://intelligence.org/2018/03/27/)
  * [ Scott Garrabrant  ](https://intelligence.org/author/scott/)



[](https://arxiv.org/abs/1803.04585)Goodhart’s Law states that “any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes.” However, this is not a single phenomenon. In [Goodhart Taxonomy](https://www.lesswrong.com/posts/EbFABnst8LsidYs5Y/goodhart-taxonomy), I proposed that there are (at least) four different mechanisms through which proxy measures break when you optimize for them: Regressional, Extremal, Causal, and Adversarial.

David Manheim has now helped write up my taxonomy as a paper going into more detail on the these mechanisms: “[**Categorizing variants of Goodhart’s Law**](https://arxiv.org/abs/1803.04585).” From the conclusion:

> This paper represents an attempt to categorize a class of simple statistical misalignments that occur both in any algorithmic system used for optimization, and in many human systems that rely on metrics for optimization. The dynamics highlighted are hopefully useful to explain many situations of interest in policy design, in machine learning, and in specific questions about AI alignment.
> 
> In policy, these dynamics are commonly encountered but too-rarely discussed clearly. In machine learning, these errors include extremal Goodhart effects due to using limited data and choosing overly parsimonious models, errors that occur due to myopic consideration of goals, and mistakes that occur when ignoring causality in a system. Finally, in AI alignment, these issues are fundamental to both aligning systems towards a goal, and assuring that the system’s metrics do not have perverse effects once the system begins optimizing for them.

Let _V_ refer to the true goal, while _U_ refers to a proxy for that goal which was observed to correlate with _V_ and which is being optimized in some way. Then the four subtypes of Goodhart’s Law are as follows:

* * *

**Regressional Goodhart** — When selecting for a proxy measure, you select not only for the true goal, but also for the difference between the proxy and the goal.

  * Model: When _U_ is equal to _V_ \+ _X_ , where _X_ is some noise, a point with a large _U_ value will likely have a large _V_ value, but also a large _X_ value. Thus, when _U_ is large, you can expect _V_ to be predictably smaller than _U_.
  * _Example: Height is correlated with basketball ability, and does actually directly help, but the best player is only 6’3″, and a random 7′ person in their 20s would probably not be as good.  
_



* * *

**Extremal Goodhart** — Worlds in which the proxy takes an extreme value may be very different from the ordinary worlds in which the correlation between the proxy and the goal was observed.

  * Model: Patterns tend to break at simple joints. One simple subset of worlds is those worlds in which _U_ is very large. Thus, a strong correlation between _U_ and _V_ observed for naturally occuring _U_ values may not transfer to worlds in which _U_ is very large. Further, since there may be relatively few naturally occuring worlds in which _U_ is very large, extremely large _U_ may coincide with small _V_ values without breaking the statistical correlation.
  * _Example: The tallest person on record, Robert Wadlow, was 8’11” (2.72m). He grew to that height because of a pituitary disorder; he would have struggled to play basketball because he “required leg braces to walk and had little feeling in his legs and feet.”  
_



* * *

**Causal Goodhart** — When there is a non-causal correlation between the proxy and the goal, intervening on the proxy may fail to intervene on the goal.

  * Model: If _V_ causes _U_ (or if _V_ and _U_ are both caused by some third thing), then a correlation between _V_ and _U_ may be observed. However, when you intervene to increase _U_ through some mechanism that does not involve _V_ , you will fail to also increase _V_.
  * _Example: Someone who wishes to be taller might observe that height is correlated with basketball skill and decide to start practicing basketball._



* * *

**Adversarial Goodhart** — When you optimize for a proxy, you provide an incentive for adversaries to correlate their goal with your proxy, thus destroying the correlation with your goal.

  * Model: Consider an agent _A_ with some different goal _W_. Since they depend on common resources, _W_ and _V_ are naturally opposed. If you optimize _U_ as a proxy for _V_ , and _A_ knows this, _A_ is incentivized to make large _U_ values coincide with large _W_ values, thus stopping them from coinciding with large _V_ values.
  * _Example: Aspiring NBA players might just lie about their height._



* * *

For more on this topic, see Eliezer Yudkowsky’s write-up, [Goodhart’s Curse](https://arbital.com/p/goodharts_curse/).  


[technical_papers_subscription_form]

Browse

Browse

##### Categories

  * [Analysis](https://intelligence.org/category/analysis/)
  * [Conversations](https://intelligence.org/category/conversations/)
  * [Guest Posts](https://intelligence.org/category/guest-posts/)
  * [MIRI Strategy](https://intelligence.org/category/miri/)
  * [News](https://intelligence.org/category/news/)
  * [Newsletters](https://intelligence.org/category/newsletters/)
  * [Papers](https://intelligence.org/category/papers/)
  * [Uncategorized](https://intelligence.org/category/uncategorized/)
  * [Video](https://intelligence.org/category/video/)



Subscribe

Follow us on

[ Facebook __](https://www.facebook.com/MachineIntelligenceResearchInstitute) [ X-twitter __](https://x.com/MIRIBerkeley) [ Rss __](https://intelligence.org/feed/)
