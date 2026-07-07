---
title: "OpenAI makes humanity less safe"
url: https://benjaminrosshoffman.com/openai-makes-humanity-less-safe
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ea-intro-program/ea-is-self-recommending.md; Ben Hoffman critique that founding OpenAI raised risk (AI safety strategy)"
---

If there's anything we can do now about the risks of superintelligent AI, then OpenAI makes humanity less safe.

Once upon a time, some good people were worried about the possibility that humanity would figure out how to create a superintelligent AI before they figured out how to tell it what we wanted it to do. If this happened, it could lead to literally destroying humanity and nearly everything we care about. This would be very bad. So they tried to warn people about the problem, and to organize efforts to solve it.

Specifically, they called for work on aligning an AI’s _goals_ with ours - sometimes called the value alignment problem, AI control, friendly AI, or simply AI safety - before rushing ahead to increase the _power of_ AI.

Some other good people listened. They knew they had no relevant technical expertise, but what they did have was a lot of money. So they did the one thing they could do - throw money at the problem, giving it to trusted parties to try to solve the problem. Unfortunately, the money was used to make the problem worse. This is the story of OpenAI.

Before I go on, two qualifiers:

  1. This post will be much easier to follow if you have some familiarity with the AI safety problem. For a quick summary you can read Scott Alexander’s [Superintelligence FAQ](https://www.lesswrong.com/posts/LTtNXM9shNM9AC2mp/superintelligence-faq). For a more comprehensive account see Nick Bostrom’s book _Superintelligence_.
  2. AI is an area in which even most highly informed people should have lots of uncertainty. I wouldn't be surprised if my opinion changes a lot after publishing this post, as I learn relevant information. I'm publishing this because I think this process should go on in public.



#  The story of OpenAI

Before OpenAI, there was DeepMind, a for-profit venture working on "deep learning” techniques. It was widely regarded as *the *advanced AI research organization. If any current effort was going to produce superhuman intelligence, it was DeepMind.

Elsewhere, industrialist Elon Musk was working on more concrete (and largely successful) projects to benefit humanity, like commercially viable electric cars, solar panels cheaper than ordinary roofing, cheap spaceflight with reusable rockets, and a long-run plan for a Mars colony. When he heard the arguments people like Eliezer Yudkowsky and Nick Bostrom were making about AI risk, he was persuaded that there was something to worry about - but he initially thought a Mars colony might save us. But when DeepMind’s head, Demis Hassabis, pointed out that this wasn't far enough to escape the reach of a true superintelligence, he [decided he had to do something about it](http://www.vanityfair.com/news/2017/03/elon-musk-billion-dollar-crusade-to-stop-ai-space-x):

> Hassabis, a co-founder of the mysterious London laboratory DeepMind, had come to Musk’s SpaceX rocket factory, outside Los Angeles, a few years ago. […] Musk explained that his ultimate goal at SpaceX was the most important project in the world: interplanetary colonization.
> 
> Hassabis replied that, in fact, he was working on the most important project in the world: developing artificial super-intelligence. Musk countered that this was one reason we needed to colonize Mars—so that we’ll have a bolt-hole if A.I. goes rogue and turns on humanity. Amused, Hassabis said that A.I. would simply follow humans to Mars.
> 
> […]
> 
> Musk is not going gently. He plans on fighting this with every fiber of his carbon-based being. Musk and Altman have founded OpenAI, a billion-dollar nonprofit company, to work for safer artificial intelligence.

OpenAI’s primary strategy is to hire top AI researchers to do cutting-edge AI capacity research and publish the results, [in order to ensure widespread access](https://backchannel.com/how-elon-musk-and-y-combinator-plan-to-stop-computers-from-taking-over-17e0e27dd02a). Some of this involves making sure AI does what you meant it to do, which is a form of the value alignment problem mentioned above.

#  Intelligence and superintelligence

No one knows exactly what research will result in the creation of a general intelligence that can do anything a human can, much less a superintelligence - otherwise we’d already know how to build one. Some AI research is clearly not on the path towards superintelligence - for instance, applying known techniques to new fields. Other AI research is more general, and might plausibly be making progress towards a superintelligence. It could be that the sort of research DeepMind and OpenAI are working on is directly relevant to building a superintelligence, or it could be that their methods will tap out long before then. These are different scenarios, and need to be evaluated separately.

##  What if OpenAI and DeepMind are working on problems relevant to superintelligence?

If OpenAI is working on things that are directly relevant to the creation of a superintelligence, then its very existence makes an arms race with DeepMind more likely. This is really bad! Moreover, sharing results openly makes it easier for other institutions or individuals, who may care less about safety, to make progress on building a superintelligence.

###  Arms races are dangerous

One thing nearly everyone thinking seriously about the AI problem agrees on, is that an arms race towards superintelligence would be very bad news. The main problem occurs in what is called a “fast takeoff” scenario. If AI progress is smooth and gradual even past the point of human-level AI, then we may have plenty of time to correct any mistakes we make. But if there’s some threshold beyond which an AI would be able to improve itself faster than we could possibly keep up with, then we only get one chance to do it right.

AI value alignment is hard, and AI capacity is likely to be easier, so anything that causes an AI team to rush makes our chances substantially worse; if they get safety even slightly wrong but get capacity right enough, we may all end up dead. But you’re worried that the other team will unleash a potentially dangerous superintelligence first, then you might be willing to skip some steps on safety to preempt them. But they, having more reason to trust themselves than you, might notice that you’re rushing ahead, get worried that your team will destroy the world, and rush their (probably safe but they’re not sure) AI into existence.

###  OpenAI promotes competition

DeepMind used to be the standout AI research organization. With a comfortable lead on everyone else, they would be able to afford to take their time to check their work if they thought they were on the verge of doing something really dangerous. But OpenAI is now widely regarded as a credible close competitor. However dangerous you think DeepMind might have been in the absence of an arms race dynamic, this makes them more dangerous, not less. Moreover, by sharing their results, they are making it easier to create *other *close competitors to DeepMind, some of whom may not be so committed to AI safety.

We at least know that DeepMind, like OpenAI, has [put some resources](http://www.businessinsider.com/deepmind-has-hired-a-group-of-ai-safety-experts-2016-11) into safety research. What about the unknown people or organizations who might leverage AI capacity research published by OpenAI?

For more on how openly sharing technology with extreme destructive potential might be extremely harmful, see Scott Alexander’s [Should AI be Open?](http://slatestarcodex.com/2015/12/17/should-ai-be-open/), and Nick Bostrom’s [Strategic Implications of Openness in AI Development](http://www.nickbostrom.com/papers/openness.pdf).

##  What if OpenAI and DeepMind are not working on problems relevant to superintelligence?

Suppose OpenAI and DeepMind are largely not working on problems highly relevant to superintelligence. (Personally I consider this the more likely scenario.) By portraying short-run AI capacity work as a way to get to safe superintelligence, OpenAI’s existence diverts attention and resources from things actually focused on the problem of superintelligence value alignment, such as [MIRI](https://intelligence.org/) or [FHI](https://www.fhi.ox.ac.uk/research/research-areas/#aisafety).

I suspect that in the long-run this will make it harder to get funding for long-run AI safety organizations. The Open Philanthropy Project just made its [largest grant ever](http://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/openai-general-support), to Open AI, to buy a seat on OpenAI’s board for Open Philanthropy Project executive director Holden Karnofsky. This is larger than their recent grants to [MIRI](http://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/machine-intelligence-research-institute-general-support), [FHI](http://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/future-humanity-institute-general-support), [FLI](http://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/future-life-institute-artificial-intelligence-risk-reduction), and the [Center for Human-Compatible AI](http://www.openphilanthropy.org/focus/global-catastrophic-risks/potential-risks-advanced-artificial-intelligence/uc-berkeley-center-human-compatible-ai) all together.

But the problem is not just money - it’s time and attention. The Open Philanthropy Project doesn’t think OpenAI is underfunded, and could do more good with the extra money. Instead, it seems to think that Holden can be a good influence on OpenAI. This means that of the time he's allocating to AI safety, a fair amount has been diverted to OpenAI.

This may also make it harder for organizations specializing in the sort of long-run AI alignment problems that don't have immediate applications to attract top talent. People who hear about AI safety research and are persuaded to look into it will have a harder time finding direct efforts to solve key long-run problems, since an organization focused on increasing short-run AI capacity will dominate AI safety's public image.

#  Why do good inputs turn bad?

OpenAI was founded by people trying to do good, and has hired some very good and highly talented people. It seems to be doing genuinely good capacity research. To the extent to which this is not dangerously close to superintelligence, it’s better to share this sort of thing than not – they could create a huge positive externality. They could construct a fantastic public good. Making the world richer in a way that widely distributes the gains is very, very good.

Separately, many people at OpenAI seem genuinely concerned about AI safety, want to prevent disaster, and have done real work to promote long-run AI safety research. For instance, my former housemate Paul Christiano, who is one of the most careful and insightful [AI safety thinkers](https://ai-alignment.com/) I know of, is currently employed at OpenAI. He is still doing AI safety work – for instance, he coauthored [Concrete Problems in AI Safety](https://arxiv.org/abs/1606.06565) with, among others, Dario Amodei and John Schulman, other OpenAI researchers.

Unfortunately, I don’t see how those two things make sense *jointly *in the same organization. I’ve talked with a lot of people about this in the AI risk community, and they’ve often attempted to steelman the case for OpenAI, but I haven’t found anyone willing to claim, as their own opinion, that OpenAI as conceived was a good idea. It doesn’t make sense to anyone, if you’re worried at all about the long-run AI alignment problem.

Something very puzzling is going on here. Good people tried to spend money on addressing an important problem, but somehow the money got spent on the thing most likely to make that exact problem worse. Whatever is going on here, it seems important to understand if you want to use your money to better the world.

([Cross-posted](http://lesswrong.com/r/discussion/lw/oul/openai_makes_humanity_less_safe/) at LessWrong)

Tags: [Effective Altruism](/tag/effective-altruism/)

_[Send a letter to the editor](mailto:benjaminrhoffman@gmail.com?subject=Letter to the editor: OpenAI makes humanity less safe)_
