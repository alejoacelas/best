---
title: "AGI could drive wages below subsistence level"
author: "Matthew Barnett"
url: https://epoch.ai/gradient-updates/agi-could-drive-wages-below-subsistence-level
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by intelligence-curse-pyramid-replacement; Epoch analysis of AGI driving wages below subsistence — economics of post-labor world"
---

Gradient Updates shares more opinionated or informal takes on big questions in AI progress. These posts solely represent the views of the authors, and do not necessarily reflect the views of Epoch AI as a whole. 

Historically, many have feared that automation would lead to mass unemployment and lower wages. Yet, despite massive improvements in automation in the last two centuries, average wages have risen, living standards have improved, and high unemployment has not become a persistent, long-term issue as many had expected. This historical pattern has led most economists to adopt the following optimistic view: automation typically creates at least as many opportunities as it destroys, and its overall impacts on wages are positive.

But artificial general intelligence (AGI)—defined here as a technology that can functionally substitute for human workers in all labor tasks—may defy these historical precedents. Unlike past technologies, which typically automated specific tasks within industries, AGI has the potential to replace human labor across the entire spectrum of work, including physical tasks, and any new tasks that could be created in the future. Because of this, AGI might disrupt labor markets in an unprecedented way.

In fact, there is a straightforward case for why developing **AGI could drive human wages below subsistence level** —the bare minimum needed to sustain human life. This argument states that if there are essential but scarce factors of production that cannot be quickly scaled through investment, then these constraints will push down the marginal productivity of labor. Over time, this could drive wages down to the point where they can only barely cover the cost of sustaining labor. If AGIs are fully capable of substituting for labor, this minimum sustaining cost would likely rest below the level required for human survival.

The specific dynamics of this argument depend on the time horizon. In the short term, it may turn out to be much easier to accumulate AGIs than traditional physical capital, making physical capital the scarce factor that limits productivity and pushes wages downward. Yet, there is also a reasonable chance that technological progress could counteract this effect by making labor more productive, allowing wages to remain stable or even rise. Over the long run, however, the pace of technological progress is likely to slow down, making it increasingly difficult for wages to remain high. At that point, the key constraints are likely to be fundamental resources like land and energy—essential inputs that cannot be expanded through investment. This makes it highly plausible that human wages will fall below subsistence level in the long run.

Informed by these arguments, I would guess that there is roughly a 1 in 3 chance that human wages will crash below subsistence level within 20 years, and a 2 in 3 chance that wages will fall below subsistence level within the next 100 years.

**Note:** this post focuses on the impacts of AGI on human wages, not human _welfare_. It is important to keep in mind that humans could still maintain a high quality of life after AGI even if wages fall below subsistence level. This is because they could receive other sources of income to sustain themselves, such as dividends, government welfare, and charity. Therefore, I am _not_ arguing that humans will starve to death after AGI.

Get the latest from Epoch AI[Subscribe](https://epochai.substack.com/subscribe)

## Why wages will plausibly fall after AGI

Here I present a straightforward argument that—while not airtight—indicates that AGI will plausibly cause human wages to fall below subsistence level. This argument relies on the concept of diminishing returns, although the full version of the argument requires an understanding of **decreasing returns to scale** in production.

To explain this argument, consider a standard [Cobb-Douglas production function](https://en.wikipedia.org/wiki/Cobb%E2%80%93Douglas_production_function), which takes the following form:

\\[Y(L, K) = AL^aK^b\\]\\[\text{with } a > 0, b > 0, \text{ and } a + b \leq 1\\]

Here, \\(Y\\) represents GDP, \\(A\\) represents the productivity (or technology) level, and \\(L\\) and \\(K\\) denote the factors of production: labor and capital respectively.

This function is useful for understanding wages because of how wages are determined in a competitive market. In short, a widely accepted [economic model](https://en.wikipedia.org/wiki/Marginal_revenue_productivity_theory_of_wages) states that, in the absence of externalities, wages should equal the marginal product of labor: the additional output generated by one more unit of labor.

The wage paid to workers can be found by taking the partial derivative of the output with respect to labor, as shown below:

\\[\frac{\partial Y}{\partial L}=aAL^{a-1}K^b\\]

This equation reveals that there are a few avenues for raising wages. For instance, by advancing technology—or equivalently, elevating parameter \\(A\\)—wages will rise. Increasing the capital stock, \\(K\\), can also increase wages by giving workers more tools to produce output. But we can also see diminishing returns to this approach, since wages are proportional to \\(K^{b}\\). When \\(0 < b < 1\\), this relationship implies that the increase to wages from additional capital declines with greater capital.

Now consider the other part of that equation: \\(L^{a-1}\\). When \\(0 < a < 1\\), we know that wages must diminish monotonically in the labor supply. Below I’ve plotted an example of what that could look like, using completely made-up numbers:

This property implies that introducing additional labor into the economy will, all else being equal, drive wages downward. This is important because if AGI can fully substitute for human labor, then deploying AGI on a large scale will be equivalent to massively increasing the supply of labor, \\(L\\). As a result, the marginal productivity of labor will decline, driving wages down. Therefore, unless this effect is counterbalanced by a comparable increase in capital or technological advancements, the expansion of the labor force through AGI decreases wages in this model.

I believe this outcome is plausible if AGIs can be scaled up at a much faster rate than traditional physical capital. Since AGIs exist as software running on computer or robotic hardware, their numbers can increase at least as rapidly as new hardware can be manufactured. In such a scenario, the economy could become rapidly saturated with AGIs, flooding the labor market with an abundance of highly capable workers. If there is no equally massive expansion of physical infrastructure—such as factories, roads, and other capital that enhances labor productivity—the result will be a sharp decline in the marginal productivity of labor. This, in turn, would cause human wages to crash.

The core idea behind this argument is that capital can act as a bottleneck to production. If the labor supply grows much faster than capital, then the limited availability of traditional capital will constrain overall productivity. This happens because of diminishing returns in the production function: when you add more workers without a corresponding increase in other essential resources, each additional worker contributes less to overall output. As a result, the marginal productivity of labor declines, causing wages to fall.

To justify the claim that traditional physical capital might be much harder to scale than AGIs, one can point to the existence of numerous forms of physical capital that we consider harder to grow than the hardware that underlies AGI. For instance, doubling the size of the U.S. railroad network would be a monumental challenge, requiring extensive planning and a slow permitting process. In contrast, the global supply of compute, measured in FLOPs, routinely doubles every few years.

**These constraints loosely suggest that, once it becomes feasible to deploy AGIs widely, their numbers will grow rapidly, quickly saturating existing physical infrastructure. This rapid expansion of the labor supply could drive down the marginal productivity of human labor, sharply cutting wages in a short period of time.**

Nonetheless, the argument I have just presented is imprecise and potentially misleading. In the real world, deploying AGI won’t _just_ increase the labor input, \\(L\\), in the production function. Instead, all three of these factors—labor, capital, and technology—are likely to grow together. For example, AGIs could help us to build physical infrastructure more quickly, and they can substitute for human researchers, accelerating technological progress. These effects would counterbalance the negative effects of AGIs on wages.

Therefore, to fully understand the trajectory of human wages, it is useful to examine a generalized version of this argument in which multiple factors of production can be scaled simultaneously. This general argument relies on the concept of returns to scale.

### Returns to scale

Returns to scale describe how total output responds when all factors of production are increased simultaneously and proportionally. Recall our earlier production function:

\\[Y(L, K) = AL^aK^b\\]

The nature of these returns is directly related to the sum of the exponents, \\(a + b\\).

If the sum of the exponents is exactly 1, then the economy experiences _constant returns to scale_. This means that when labor and capital are increased by the same proportion, output increases by that exact same proportion—regardless of the initial levels of labor and capital. We can represent this property using the following equation:

\\[Y(cL, cK) = cY(L, K)\\]

For example, if both labor and capital are increased by 10%, total output will also increase by exactly 10%. This holds true no matter how large or small the economy is at the outset. In this case, wages remain constant if we scale all factors of production simultaneously.

The intuition behind this assumption can be understood through the **duplication argument**. This argument asks us to imagine what would happen if we perfectly duplicated every aspect of the economy: every worker, every tool, every machine, every piece of land—everything—so that there were two identical Earths in space. If this duplication were truly exact, then the total output of both economies would be twice as large as before. This supports the idea that an economy should exhibit constant returns to scale as long as all factors of production can be scaled up together.

However, if the sum of the exponents is less than 1, then the economy experiences _decreasing returns to scale_. This means that even when labor and capital are increased simultaneously and proportionally, the resulting increase in total output is less than proportional. In other words, doubling both labor and capital would lead to less than double the total output.

At first glance, this possibility may seem counterintuitive given the duplication argument, which suggests that an economy should naturally exhibit constant returns to scale. So why might decreasing returns to scale occur in reality?

The key reason is the existence of additional factors of production that cannot be increased simply by investing in more capital or creating new workers. Land is one example of such a factor, but this could really be any scarce, non-accumulable resource that constrains production. To illustrate decreasing returns to scale, consider a more general production function that includes land (\\(W\\)) as an additional input:

\\[Y(L, K, W) = AL^aK^bW^c\\]

Where \\(a + b + c = 1\\), ensuring constant returns to scale in all factors (here we assume that \\(a\\), \\(b\\), \\(c > 0\\)).

In this formulation, the economy exhibits constant returns to scale when all three inputs—labor, capital, and land—can be increased together. However, by assumption, land cannot be increased through investment, and thus remains fixed over time at a constant level. As a consequence of this constraint, the production function can be simplified to:

\\[Y(L, K) = (A \cdot C) L^aK^b\\]

Where \\(C\\) is a constant representing \\(W^c\\). Since the exponents a and b sum to less than 1, this production function experiences decreasing returns to scale in terms of labor and capital together. In other words, as labor and capital increase, their productivity is constrained by the fixed supply of land, which prevents output from scaling up proportionally.

**In this scenario, wages _decline_ if we scale labor and capital simultaneously.**

Is this scenario realistic? Actually, yes. For thousands of years before the Industrial Revolution, arable land was scarce, meaning that as populations grew, agricultural productivity faced diminishing returns. Because technological progress was too slow to counteract the declining productivity of land, wages inevitably fell to subsistence levels, trapping most people in extreme poverty. This economy was characterized by [Malthusian dynamics](https://en.wikipedia.org/wiki/Malthusianism).

### Reasons for temporary optimism

The historical precedent of Malthusian dynamics, which characterized the world economy before the Industrial Revolution, suggests that similar forces could reemerge in the future. As discussed earlier, this could take the form of physical capital acting as a bottleneck for production while AGIs are rapidly scaled. In this scenario, human wages could once again fall as the supply of AGI-driven labor outstrips the available infrastructure needed for productive work.

However, focusing exclusively on this historical precedent would ignore what happened after the Industrial Revolution, which represented a fundamental break from these dynamics. After the Industrial Revolution, the rate of innovation increased, eventually outpacing population growth. When this occurred, it led to sustained increases in the marginal productivity of labor. As a result, wages rose above subsistence levels, durably improving living standards for the first time in history.

If we naively extrapolate this post-Industrial Revolution trend into the future, it suggests that the introduction of AGI into the economy could drive innovation at an even faster pace—more than compensating for any negative impact the technology will have on wages. While the scarcity of physical capital might still constrain production, the acceleration of technological progress could outweigh this effect. Under this straightforward projection, an optimistic scenario emerges: AGI-driven innovation could dramatically boost labor productivity, ultimately raising human wages rather than pushing them downward.

I believe this optimistic outlook is plausible in the short run and will likely persist for many years, including after AGI is widely deployed. However, I don’t expect it to last indefinitely. In the long run, it still seems more likely that human wages will decline—eventually falling _below subsistence levels_.

### Long-run pessimism about wages

Ultimately, the idea that AGI will permanently raise wages through innovation is fundamentally undermined by the following fact: there are limits to technological innovation. In other words, there are absolute physical constraints that place an upper bound on how far technological progress can advance. To be clear, I am not suggesting that we are currently close to reaching these limits—on the contrary, I believe we are still far from them. My point, however, is that these constraints impose unavoidable restrictions on our ability to permanently innovate—i.e., grow the productivity parameter \\(A\\) in our model forever—at a constant rate.

To demonstrate these limits, consider the implications of maintaining even a modest annual productivity growth of just 1% over the next 30,000 years. This would increase productivity by a staggering factor of approximately \\(10^{129}\\)—a quantity vastly exceeding the number of atoms in the observable universe. Such an improvement in productivity would [defy our basic intuitions about what is physically possible](https://philarchive.org/archive/MANWIT-6) over such a period of time. Unless these intuitions are fundamentally mistaken, it is unlikely that we could achieve such a feat.

The inherent limits to technological innovation suggest the existence of two regimes:

In the first regime—when we are still far from hitting the absolute physical limits of technological progress—the economy experiences increasing returns to scale. This occurs because a larger population of AGIs and humans fosters more innovation, which in turn increases the efficiency of economic production. During this regime, technological progress might happen quickly enough that its positive impact on wages outweighs any downward pressure from other economic constraints such as land or energy. As a result, wages could continue to rise, sustained by the ongoing improvements in efficiency resulting from technological progress.

However, as we continue innovating, we will eventually enter the second regime—one in which we approach the physical limits of technological progress. In this regime, we will cease to have a meaningful rate of innovation. At this point, there will no longer be sufficient technological progress to counteract the productivity losses caused by increasing scarcity of non-accumulable factors of production. As a result, the constraints imposed by non-accumulable resources will mirror our historical experience prior to the Industrial Revolution, with population growth pushing wages down.

In this second regime, the economy seems best modeled as experiencing _decreasing returns to scale_. This occurs because there are non-accumulable, yet essential, factors of production that cannot be increased through investment. Over time, these factors of production will choke off growth, leading to declining marginal productivity of labor with an increasing effective population size.

Once we have entered this regime, continuing to accumulate AGIs will shrink wages, even if we scale capital at the same time that we scale AGI labor. If this continues all the way to the ultimate physical limits, then wages will decline to the lowest possible level at which a worker can still sustain themselves.

For humans, this minimum wage is determined by biological subsistence: we require a certain amount of food and other necessities to survive. In a human-only economy, this subsistence level provides a natural floor on how far wages can fall in equilibrium. If wages drop below subsistence, then workers starve to death, and the labor supply contracts accordingly, pushing wages back to subsistence level.

**However, if AGIs can fully substitute for human workers, this wage floor will no longer be determined by the human-subsistence level. Instead, the minimum labor cost will be dictated by the energy requirements of AGIs, which could potentially be far lower than the energy needs of a human.**

This point is important because there are strong reasons to believe that AGIs can eventually surpass human productivity while operating at the same or lower energy cost. Consider that humans did not evolve to be maximally productive in our current economic environment. We experience fatigue, are often lazy, and our cognitive abilities—such as memory and concentration—are suboptimal for performing typical tasks in a modern economy. Therefore, even if it runs on hardware that is no more energy-efficient than biology, an AGI that lacks these limitations would be significantly more productive _per unit of energy_ consumed.

If this reasoning holds, then continued deployment of AGI will eventually drive human wages below subsistence level, implying that humans could not afford to live on their wages alone.

To illustrate what such a scenario might look like, we can imagine that food could become scarce given the limited availability of land in our solar system to grow food. Since the resources that comprise land can generally be repurposed into running computer hardware to sustain more AGIs, a sufficiently large population of AGIs could push up the price of land, making it expensive to grow food. When this occurs, a biological human may not be individually productive enough to afford enough food to feed themselves using only the wages they earn through their labor.

While this scenario may seem very speculative, the prediction of eventual decreasing returns to scale does not rest on any particular scenario. Instead, the key assumptions driving this forecast are simply that innovation is bounded by hard physical limits to technological progress, and that certain essential factors of production are inherently scarce. When innovation eventually becomes sufficiently difficult, these non-accumulable bottlenecks to production will act to push wages down more than innovation acts to elevate them.

## Comparative advantage doesn’t save us

One common counterargument made by commentators is that humans will still be able to maintain employment even after the arrival of AGI. The reasoning behind this argument is that, even if AGIs maintain an absolute advantage in every task, humans will still possess a _comparative advantage_ over AGIs in certain tasks. This argument is frequently presented alongside the claim that economic concerns about AGI stem from the _lump of labor fallacy_ —the mistaken belief that there are a fixed number of jobs in the economy.

However, I believe this argument is misleading. If we interpret the argument as making a claim about what will happen to human wages—namely, that AGI cannot drive down human wages—then the argument appears straightforwardly false. In particular, the principle of comparative advantage is fully compatible with human wages falling to arbitrarily low levels, including wages below the level at which humans could afford enough calories to feed themselves.

From my point of view, the central issue at stake is not whether humans will be able to find any form of employment after the development of AGI, but whether they will be able to secure jobs that pay a meaningfully high wage. After all, a job can always be trivially “created” if a person is willing to accept an arbitrarily low wage, or no wage at all. However, few would find it reassuring to be told that after losing their job to a machine, they will still have the option to work—just at a wage so low that they cannot afford food. The principle of comparative advantage does not rule out such a scenario.

To understand what I see wrong about this argument, it is necessary to first understand the concept of comparative advantage. In economics, an agent is said to have a comparative advantage in producing a good if the opportunity cost of producing that good is lower for them than for other agents. Here, opportunity cost means the value of foregone production if the agent were to switch to producing another good, rather than their absolute level of ability in producing the good. This distinction is important because it implies that an agent can have a comparative advantage in producing a good even if they are less efficient at producing that good than other agents.

The principle of comparative advantage states that production is maximized when two parties specialize in their comparative advantage, and then trade with each other, rather than producing goods on their own in the absence of trade. This makes _both_ agents better off, implying that trade is mutually beneficial.

Yet as powerful as the principle of comparative advantage is, all the principle shows is that agents benefit from specializing in their comparative advantage, and then trading with other agents. **It does not show that the** **benefit from these trades allows humans to live comfortably using the wages they earn**. Future economic environments will likely be very different from what is considered normal today, and my point here is simply that the principle of comparative advantage is fully _logically consistent_ with human wages eventually falling below subsistence level.

## Conclusion

All things considered, I am inclined to guess that there is roughly a 1 in 3 chance that human wages will crash below subsistence level before 2045. While this figure may appear alarmingly high to some, I personally consider it somewhat low, as it partially reflects my tentative optimism that technological progress will complement human labor even after AGI, keeping wages from crashing all the way below subsistence level in the near term. In the longer term, I’d guess the probability that human wages will fall below subsistence level before 2125 to be roughly 2 in 3.

These predictions additionally reflect other factors that could keep human wages high after the development of AGI. This includes regulations that could protect human labor from competition, and the fact that consumers in the future might have intrinsic preferences for hiring humans, making AGI an imperfect substitute for human labor.

In the short term, I also think people will be hesitant to trust AGIs to make governance and management decisions, as there will likely be widespread skepticism that the systems are fully reliable and safe. This should ensure that there will be a niche for human labor for a while until people come to trust AGIs fully.

It’s crucial to note that **I have only analyzed the effects of AGI on human wages, rather than human welfare overall**. While it may seem as though I just provided a pessimistic assessment of the future of humanity, my overall guess remains broadly optimistic for the following reasons. Humans may live comfortably after the development of AGI, not due to high wages but from other income sources like investments, government welfare, and charity. The latter two sources seem especially promising if AI alignment ensures ongoing support for human well-being.

Nonetheless, the consequences of AGI on human welfare remain highly speculative, and indeed, we should not rule out the possibility that humans will eventually lose their wealth through expropriation or through violent revolution. If this occurs, the development of AGI may well be negative for human welfare. This is because, if my analysis is correct, humans in the future may not be able to earn enough money to survive comfortably through their wages alone.

## About the authors

Matthew Barnett

Matthew Barnett received a degree in computer science from UC Berkeley. He’s currently interested in getting a clearer picture of how AI will impact the world in the next few decades.

## Related work

Newsletter

Jan. 10, 2025

[](/gradient-updates/consequences-of-automating-remote-work)The economic consequences of automating remote work

Paper

Sep. 23, 2023

[](/publications/explosive-growth-from-ai-a-review-of-the-arguments)Explosive growth from AI: A review of the arguments

Newsletter

Mar. 21, 2025

[](/gradient-updates/most-ai-value-will-come-from-broad-automation-not-from-r-d)Most AI value will come from broad automation, not from R&D

Newsletter

Jun. 20, 2025

[](/gradient-updates/ai-and-explosive-growth-redux)AI and explosive growth redux

## Related topics

[Economic impact](/topics/economic-impact)

Cite

Epoch AI’s work is free to use, distribute, and reproduce provided the source and authors are credited under the [Creative Commons Attribution license](https://creativecommons.org/licenses/by/4.0/).

### Citation

Matthew Barnett (2025), "AGI could drive wages below subsistence level". Published online at epoch.ai. Retrieved from 'https://epoch.ai/gradient-updates/agi-could-drive-wages-below-subsistence-level' [online resource]. Accessed 6 Jul 2026.

### BibTeX Citation

@misc{epoch2025agicoulddrivewagesbelowsubsistencelevel, title={AGI could drive wages below subsistence level}, author={Matthew Barnett}, year={2025}, url={https://epoch.ai/gradient-updates/agi-could-drive-wages-below-subsistence-level}, note={Accessed: 2026-07-06}}

Feedback

## Feedback

Have a question? Noticed something wrong? Let us know.

# AGI could drive wages below subsistence level

This Gradient Updates issue explores how AGI could disrupt labor markets, potentially driving wages below subsistence levels, and challenge historical economic trends.
