---
title: "Complications in evaluating neglectedness"
date: 2017-06-25
url: https://casparoesterheld.com/2017/06/25/complications-in-evaluating-neglectedness
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by moral-circle-expansion-vs-extinction-risk.md; critique of the neglectedness heuristic — EA cause-prioritization methodology"
---

Neglectedness (or crowdedness) is a heuristic that effective altruists use to assess how much impact they could have in a specific cause area. It is usually combined with scale (a.k.a. importance) and tractability (a.k.a. solvability), which together are meant to approximate expected value. (In fact, under certain idealized definitions of the three factors, multiplying them [is equivalent to](https://80000hours.org/articles/problem-framework/#introducing-how-we-define-the-factors) expected value. However, this removes the heuristic nature of these factors and probably does not describe how people typically apply them.) For introductions and thoughts on the framework as well as neglectedness in particular see:

  * Benjamin Todd: [_A framework for strategically selecting a cause_](https://80000hours.org/2013/12/a-framework-for-strategically-selecting-a-cause/).
  * Paul Christiano: [_Neglectedness and impact_](https://80000hours.org/2014/01/neglectedness-and-impact/).
  * 80,000 hours: [_How to compare different global problems in terms of impact_](https://80000hours.org/articles/problem-framework/).
  * William MacAskill: _Doing Good Better_. Chapter 10.



One reason why the neglectedness heuristic and the framework in general are so popular is that they are much easier to apply than explicit cost-effectiveness or expected value calculations. In this post, I will argue that evaluating neglectedness (which may usually be seen as the most heuristic and easiest to evaluate part of the framework) is actually quite complicated. This is in part to make people more aware of issues that are sometimes not and often only implicitly taken into account. In some cases, it may also be an argument against using the heuristic at all. Presumably, most of the following considerations won’t surprise many practitioners. Nonetheless, it appears useful to write them down, which, to my knowledge, hasn’t been done before.

# Neglectedness and diminishing returns

There are a few different definitions of neglectedness. For example, consider the following three:

  1. “If we add more resources to the cause, we can expect more promising interventions to be carried out.” ([source](https://80000hours.org/2013/12/a-framework-for-strategically-selecting-a-cause/))
  2. You care about a cause much more than the rest of society. ([source](https://80000hours.org/2014/01/neglectedness-and-impact/))
  3. “How many people, or dollars, are currently being dedicated to solving the problem?” ([source](https://80000hours.org/articles/problem-framework/#definition-2))



The first one is quite close to expected value-type calculations and so it is quite clear why it is important. The second and third are more concrete and easier to measure but ultimately only [relevant because they are proxies of the first](https://80000hours.org/articles/problem-framework/#why-is-it-important). If society is already investing a lot into a cause, then the most promising interventions in that cause area are already taken up and only less effective ones remain.

Because the second and, even more so, the third are easier to measure, I expect that, in practice, most people use these two when they evaluate neglectedness. Incidentally, these definitions also fit the terms “neglectedness” and “crowdedness” much better. I will argue that neglectedness in the second and third sense has to be translated into neglectedness into the first sense and that this translation is difficult. Specifically, I will argue that the [diminishing returns curves](https://en.wikipedia.org/wiki/Diminishing_returns) on which the connection between already invested resources and the value of the marginal dollar is based on can assume different scales and shapes that have to be taken into account.

A standard diminishing return curve may look roughly like this:

The x-axis represents the amount of resources invested into some intervention or cause area, the y-axis represents the returns of that investment. The derivative of the returns (i.e., the marginal returns) decreases, [potentially](https://80000hours.org/2014/01/neglectedness-and-impact/) in inverse proportion to the cumulative investment.

Even if returns diminish in a way similar to that shape, there is still the question of the scale of that graph (not to be confused with the scale/importance of the cause area), i.e. whether values on the x-axis are in the thousands, millions or billions. In general, returns probably diminish slower in cause areas that are in some sense large and uniform. Take the global fight against malaria. Intervening in some areas is more effective than in others. For example, it is more effective in areas where malaria is more common, or where it is easier to, say, provide mosquito nets, etc. However, given how widespread malaria is (about 300 million cases in 2015), I would expect that there is a relatively large number of areas almost tied for the most effective places to fight malaria. Consequently, I would guess that once the most effective intervention is to distribute provide mosquito nets, even hundreds of millions do not diminish returns all that much.

Other interventions have much less room for funding and thus returns diminish much more quickly. For example, the returns of helping some specific person will usually diminish way before investing, say, a billion dollars.

If you judge neglectedness only based on the raw amount of resources invested into solving a problem ([as suggested by 80,000 hours](https://80000hours.org/articles/problem-framework/#how-to-assess-it-2)), then this may make small cause areas look a lot more promising than they actually are. Depending on the exact definitions, this remains the case if you combine neglectedness with scale and tractability. For example, consider the following two interventions:

  1. The global fight against malaria.
  2. The fight against malaria in some randomly selected subset of 1/100th of the global area or population.



The two should usually be roughly equally promising. (Perhaps 1 is a bit more promising because every intervention contained in 2 is also in 1. On the other hand, that would make “solve everything” hard to beat as an intervention. Of course, 2 can also be more or less promising if an unusual 1/100th is chosen.) But because the raw amount of resources invested into 1 is presumably 100 times as big as the amount of resources invested into 2, 2 would, on a naive view, be regarded as much more neglected than 1. The product of scale and tractability is the same in 1 and 2. (1 is a 100 times bigger problem, but solving it in its entirety is also roughly 100 times more difficult, though I presume that some definitions of the framework judge this differently. In general, it seems fine to move considerations out of neglectedness into tractability and scope [as long as](http://effective-altruism.com/ea/ss/the_importantneglectedtractable_framework_needs/) they are not double-counted or forgotten.) Thus, the overall product of the three is greater for 2, which appears to be wrong. If on the other hand, neglectedness denotes the extent to which returns have diminished (the first of the three definitions given at the beginning of this section), then the neglectedness of 1 and 2 will usually be roughly the same.

Besides the scale of the return curve, the shape can also vary. In fact, I think many interventions initially face increasing returns from learning/research, creating economies of scale, specialization within the cause area, etc. For example, in most cause areas, the first $10,000 are probably invested into prioritization, organizing, or (potentially symbolic) interventions that later turn out to be suboptimal. So, in practice return curves may actually look more like the following:

This adds another piece of information (besides scale) that needs to be taken into account to translate the amount of invested resources into how much returns have diminished: how and when do returns start to diminish?

There are many other return curve shapes that may be less common but mess up the neglectedness framework more. For example, some projects produce some large amount of value if they succeed but produce close to no value if they fail. Thus, the (actual not expected) return curve for such projects may look like this:

Examples may include developing vaccines, colonizing Mars or [finding cause X](https://www.effectivealtruism.org/articles/three-heuristics-for-finding-cause-x/).

If such a cause area is already relatively crowded according to the third (and second) sense, that may make them _less_ “crowded” in the first sense. For example, if nobody had invested money into finding a vaccine against malaria (and you don’t expect others to invest money into it into the future either, see below) then this cause area is maximally neglected in the second and third sense. However, given [how expensive clinical trials are](http://www.nature.com/nrd/journal/v16/n6/full/nrd.2017.70.html), the marginal returns of donating a few thousand dollars into it are essentially zero. If on the other hand, others have already contributed enough money to get a research project off the ground at all, then the marginal returns are higher, because there is at least some chance that your money will enable a trial in which a vaccine is found. (Remember that we don’t know the exact shape of the return curve, so we don’t know when the successful trial is funded.)

I would like to emphasize that the point of this section is not so much that people apply neglectedness incorrectly by merely looking at the amount of resources invested into a cause and not thinking about implications in terms of diminishing returns at all. Instead, I suspect that most people implicitly translate into diminishing returns and take the kind of the project into account. However, it may be beneficial if people were more aware of this issue and how it makes evaluating neglectedness more difficult.

# Future resources

When estimating the neglectedness of a cause, we need to take into account, not only people who are currently working on the problem (as a literal reading of [80,000 hours’ definition](https://80000hours.org/articles/problem-framework/#definition-2) suggests), but also people who have worked on it in the past and future. If a lot of people have worked on a problem in the past, then this indicates that the low-hanging fruit has already been picked. Thus, even if nobody is working in the area anymore, marginal returns have probably diminished a lot. I can’t think of a good example where this is a decisive consideration because if an area has been given up on (such that there is a big difference between past and current attention), it will usually score low in tractability, anyway. Perhaps one example is the search for new ways to organize society, government and economy. Many resources are still invested into thinking about this topic, so even if we just consider resources invested today, it would not do well in terms of neglectedness. However, if we consider that people have thought about and “experimented” in this area for thousands of years, it appears to be even more crowded.

We also have to take future people and resources into account when evaluating neglectedness. Of course, future people cannot “take away” the most promising intervention in the way that current and past people can. However, their existence causes the top interventions [to be performed anyway](https://concepts.effectivealtruism.org/concepts/counterfactual-considerations/). For example, let’s say that there are 1000 equally costly possible interventions in an area, generating 1000, 999, 998, …, 1 “utils” (or lives saved, years of suffering averted, etc.), respectively. Each intervention can only be performed once. The best 100 interventions have already been taken away by past people. Thus, if you have money for one intervention, you can now only generate 900 utils. But if you know that future people will engage in 300 further interventions in that area, then whether you intervene or not actually only makes a difference of 600 utils. All interventions besides the one generating 600 utils would have been executed anyway. (In [Why Charities Don’t Differ Astronomically in Cost-Effectiveness](http://reducing-suffering.org/why-charities-dont-differ-astronomically-in-cost-effectiveness/), Brian Tomasik [makes a similar point](http://reducing-suffering.org/why-charities-dont-differ-astronomically-in-cost-effectiveness/#Returns_look_high_before_big_players_enter).)

The number of future people who would counterfactually engage in some cause area is an important consideration in many cause areas considered by effective altruists. In general, if a cause area is neglected by current and past people, the possibility of future people engaging in an intervention creates a lot of variance in neglectedness evaluations. If recently 10 people started working on an area, then it is very uncertain how much attention it will have in the future. And if it will receive a lot more attention regardless of our effort, then the neglectedness score may change by a factor of 100. The future resources that will go into long-established (and thus already less neglected) cause areas, on the other hand, are easier to predict and can’t make as much of a difference.  


One example where future people and resources are an important consideration is AI safety. People often state that AI safety is a highly neglected cause area, presumably under the assumption that this should be completely obvious given how few people currently work in the area. At least, it is rare that the possibility of future people going into AI safety is considered explicitly. Langan-Dathi even writes that “due to [AI safety] being a recent development it is also highly neglected.” I, on the other hand, would argue that being a recent development only makes a cause _look_ highly neglected if one doesn’t consider future people. (Again, Brian [makes almost the same point regarding AI safety](http://reducing-suffering.org/why-charities-dont-differ-astronomically-in-cost-effectiveness/#Returns_look_high_before_big_players_enter).)

Overall, I think many questions in AI safety should nonetheless be regarded as relatively neglected because I think there is a good chance that future people won’t recognize them as important fast enough. That said, I think some AI safety problems will become relevant in regular AI capability research or near time applications (such as self-driving cars). For example, I expect that some of [Amodei et al.’s (2016)](https://arxiv.org/abs/1606.06565) “Concrete Problems in AI Safety” will be (or would have been) picked up, anyway. Research in these areas of AI safety is thus potentially less intrinsically valuable, although it may still have a lot of instrumental benefits that make them worthwhile to pursue.

My impression is that neglecting future people in evaluating neglectedness is more common than forgetting to translate from invested resources into diminishing marginal returns. Nonetheless, in the context of this post the point of this section is that considering future resources makes neglectedness more difficult to evaluate. Obviously, it is hard to foresee how many resources will be invested into a project in the future. Because the most promising areas will not have received a lot of attention, yet, the question of their neglectedness will be dominated by how much resources they will receive in the future. Thus, in the most important cases, neglectedness is hard to estimate.

# What should count as “the same cause area”?

At least the operationalization of neglectedness involves estimating the amount of (past, current and future) resources invested into a cause area. But which resources count as going into the same cause area? For example, if the cause area is malaria, should you count people who work in global poverty as working in the same cause area?

Because the number of people working in an area is only relevant as a proxy for how much marginal returns have diminished, the answer seems to be: Count people (and resources) to the extent that their activities diminish the marginal returns in the cause area in question. Thus, resources invested into alleviating global poverty have to be taken into account, because if people’s income increases, this will allow them to take measures against malaria as well.

As another example, consider the cause area of advocating some moral view X (say effective altruism). If only a few people currently promote that view, then one may naively view advocating X as neglected. However, if neglectedness is intended to be a proxy for diminishing returns, then it seems that we also have to take into account moral advocates of other views. Because most people regularly engage in some form of moral advocacy (e.g., when they talk about morality with their friends and children), many people already hold moral views that our advocacy has to compete with. Thus, we may want to take these other moral advocates into account for evaluating neglectedness. That said, if we apply neglectedness together with tractability and scope, it seems reasonable to include such considerations in either tractability or neglectedness. (As Rob Wiblin [remarks](http://effective-altruism.com/ea/ss/the_importantneglectedtractable_framework_needs/), the three factors blur heavily into each other. In particular, neglectedness can make an intervention more tractable. As Wiblin notes, we should take care not to double-count arguments. We also shouldn’t forget to count arguments at all, though.)

# Acknowledgements

I am indebted to Tobias Baumann for valuable comments. I wrote this post while working for the Foundational Research Institute, which is now the [Center on Long-Term Risk](https://longtermrisk.org/).

### Teilen mit:

  * [ Share on X (Opens in new window) X ](https://casparoesterheld.com/2017/06/25/complications-in-evaluating-neglectedness/?share=twitter)
  * [ Share on Facebook (Opens in new window) Facebook ](https://casparoesterheld.com/2017/06/25/complications-in-evaluating-neglectedness/?share=facebook)
  * 


Like Loading...
