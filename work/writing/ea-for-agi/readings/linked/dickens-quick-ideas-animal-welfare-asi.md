---
title: "List of ideas for improving animal welfare in light of transformative AI"
author: "Michael Dickens"
date: 2026-03-26
url: https://mdickens.me/2026/03/26/quick_ideas_animal_welfare_in_light_of_ASI
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ideas-improving-animal-welfare-tai.md; Dickens blog: concrete ideas for animal welfare under ASI — animals-under-AI cause area"
---

# [List of ideas for improving animal welfare in light of transformative AI](/2026/03/26/quick_ideas_animal_welfare_in_light_of_ASI/)

_Cross-posted to the[EA Forum](https://forum.effectivealtruism.org/posts/d3gaMea82DWCd6wwz/list-of-ideas-for-improving-animal-welfare-in-light-of)._

If transformative AI arrives soon, what interventions might improve animal welfare in the post-TAI world? I came up with a quick list of ideas and wrote some pros/cons for each.

These ideas talk about animal welfare, but most of them could also be applied to the welfare of any nonhuman sentient being (e.g. digital minds).

I started from the ideas I covered previously in [AI Safety Landscape and Strategic Gaps](https://mdickens.me/2025/09/19/ai_safety_landscape/#ai-for-animals-ideas) and added a few new ones. Most of the ideas are not original to me.

## Contents

  * Contents
  * Ideas
    * Advocate to pause AI
    * Develop new plans / prioritize existing plans to improve post-TAI animal welfare
    * Research how to align ASI to animal welfare
    * Change AI training to make LLMs more animal-friendly
    * AIxAnimals field-building
    * Traditional animal advocacy targeted at frontier AI developers
    * Lobby governments to include animal welfare in AI regulations
    * Prioritize AI alignment work that’s more likely to be good for animals
    * Traditional animal advocacy
    * Use AI to improve farm animal welfare
    * Work on preventing power concentration
  * Further reading



## Ideas

Ordered by my prioritization from favorite to least favorite, although this ordering is weakly held.

### Advocate to pause AI

On current timelines, we probably won’t have time to figure out how to make TAI go well for animals. Pausing AI buys us more time.

**Pros:**

  * Pausing AI is already a good idea for other reasons—namely, we more time to figure out how to prevent misaligned ASI from killing everyone. 
    * The future probably has positive expected value for sentient beings—see [Is Preventing Human Extinction Good?](https://mdickens.me/2015/08/15/is_preventing_human_extinction_good/) and [Which is better for sentient beings: an “ethical” AI or a corrigible AI?](https://mdickens.me/2026/03/28/which_is_better_for_animals_value_lock-in_or_corrigibility/) (This implies that buying time to solve alignment improves non-human welfare in expectation, although it doesn’t necessarily imply that pause advocacy is _cost-effective_.)
  * Pausing AI gives us time to figure out what to do about post-TAI animal welfare, including time to work on the other interventions on this list.
  * The sorts of alignment paradigms that take longer to figure out also appear more likely to be good for animals. Pausing gives alignment researchers more time to work on those.
  * The [BOTEC I wrote recently](https://mdickens.me/2026/03/24/alignment-to-animals_BOTEC/) gave an indirect argument that pause advocacy is a higher priority than working directly on aligning TAI to care about animals (at least according to the highly uncertain model assumptions).



**Cons:**

  * Achieving a pause less tractable than some other ideas.
  * Is a later-developed ASI actually more likely to take animal welfare into account? [My guess is yes](https://mdickens.me/2026/03/25/I_used_to_think_aligned_ASI_would_be_good_for_sentient_beings/), but it’s highly uncertain.



### Develop new plans / prioritize existing plans to improve post-TAI animal welfare

There are probably more ideas that aren’t on my list. I would like to see more research on post-TAI animal welfare interventions that look good (1) given short timelines and (2) without having to make strong predictions about what the future will look like for animals (e.g. without assuming that factory farming will exist).

There are also tradeoffs between these ideas that could be addressed more carefully.

Right now, I see a lot of value in good-quality work to come up with new plans or prioritize between existing plans, because very little of that kind of work has been done. But I also expect that our collective ability to do useful work in this area would diminish fairly quickly, so it’s only a near-top idea for relatively small marginal efforts.

**Pros:**

  * Not much thought has gone into this. A short research project may come up with useful ideas, or at least prioritize between pre-existing ideas.
  * Coming up with ideas is quicker than implementing ideas, which could mean it’s more cost-effective (for now).



**Cons:**

  * A research project might not come up with any really good ideas. Pre-existing research has mostly failed to come up with good ideas that work under short timelines (although to a large extent, that’s because it wasn’t trying to).
  * I’m suspicious of “meta” work in general, and I’m suspicious of research because I personally like doing research, and I believe the value of research is usually overrated by researchers. It might be better to work directly on an established intervention.



### Research how to align ASI to animal welfare

Related to the previous idea, people could do specific research on aligning superintelligent AI to animals. Preliminary research could look at how this problem differs from the alignment problem (of pointing an AI at any goal at all), and what types of future research might be promising.

I imagine this as being different from aligning current-gen LLMs to animals in that it’s more focused specifically on superintelligence, and exploring what alignment-to-animals techniques are most likely to scale to ASI.

**Pros:**

  * Highly neglected; wouldn’t take much effort to get started.



**Cons:**

  * If timelines are short, we won’t have time to make meaningful progress.
  * This sounds hard in the same way that the alignment problem is hard, and it will never get as much funding as the alignment problem which means it’s even less likely to be solved.
  * Any solutions that researchers discover would need to actually be implemented by AI developers, which they probably won’t be.



### Change AI training to make LLMs more animal-friendly

LLMs undergo post-training to make their outputs satisfy AI companies’ criteria. For example, Anthropic tunes its models to be “helpful, honest, and harmless”. AI companies could use the same process to make LLMs give regard to animal welfare.

Animal advocates could use a few strategies to make this happen, including:

  * Build a [benchmark](https://forum.effectivealtruism.org/posts/nBnRKpQ8rzHgFSJz9/animalharmbench-2-0-evaluating-llms-on-reasoning-about) that measures LLMs’ friendliness toward animals and try to get AI companies to train on that benchmark.
  * Advocate for AI companies to include animal welfare in AI constitutions/model specs.
  * Advocate for AI companies to incorporate animal welfare when doing [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback), or ask to directly participate in RLHF.



**Pros:**

  * People at AI companies have told me that getting a company to pay attention to animal welfare isn’t too difficult.
  * Insofar as post-training works at preventing misalignment risk, it should also prevent suffering-risk / animal-welfare-risk.
  * Even if current known techniques can’t help get AI to care about animals, this work could establish relationships between animal advocates and AI companies, and establish research processes, that make it easier to do future work that matters more.



**Cons:**

  * The current alignment paradigm doesn’t look like it will scale to superintelligence. If that’s true, then animal-friendliness (post-)training will fail because it relies on the same foundations as the current alignment paradigm.
  * It will be difficult to get AI companies to implement animal welfare mitigations if they interfere with contrary incentives.
  * There might be consumer backlash, which could make frontier models less friendly to animals in the long run.
  * Aligning current-gen AIs to human preferences might make them better at assisting with alignment research, but it seems less likely that aligning current-gen AIs to animal welfare would carry through to future generations—it’s not clear that animal-aligned AIs would be more helpful at aligning future AIs to animal welfare.



### AIxAnimals field-building

Only a small number of animal advocates are focused on improving post-TAI animal welfare. More people could be working on it.

(I don’t really know what field-building entails. Does writing blog posts count?)

**Pros:**

  * Leveraged impact: if you attract one person to the field, that person will go on to do years of work.



**Cons:**

  * If timelines are short, field-building may be too slow.
  * Field-building is kind of nebulous, and the impact is hard to assess.



### Traditional animal advocacy targeted at frontier AI developers

Animal advocacy orgs could use their traditional techniques, but focus on raising concern for animal welfare among AI developers. For example, buy billboards outside AI company offices, use targeted online ads, or talk directly to people who work at AI companies.

If AI developers become more concerned for animal welfare, then they may make AI development decisions that make transformative AI go better for animals.

**Pros:**

  * Similar to neartermist animal advocacy, but plausibly more cost-effective because it’s more targeted.



**Cons:**

  * It’s not known whether techniques like animal welfare ads are effective in general, and they may even be particularly ineffective among demographics like AI developers.
  * Directed advocacy could backfire for being too “pushy”.
  * Even if AI developers cared more about animal welfare, it’s not clear that this would carry through to their work on AI.
  * In 2016, I [created](https://mdickens.me/causepri-app/#8) a back-of-the-envelope calculation on this idea, and the result wasn’t as good as I expected (it looked worse than standard animal advocacy, if you assume the animal advocacy propagates values into the far future). However, the numbers are outdated because we know a lot more about AI now than we did in 2016 (I haven’t bothered to update the numbers).



### Lobby governments to include animal welfare in AI regulations

If governments put safety restrictions on advanced AI, they could also create rules about animal welfare.

**Pros:**

  * One set of regulations can alter the behavior of many frontier companies.
  * If companies voluntarily change their behavior, they can regress at any time with no consequences. But companies have to obey regulations.



**Cons:**

  * It’s unclear what exactly regulations could do about animal welfare. AI safety regulations, insofar as they exist (which they mostly don’t), don’t dictate how LLMs are required to behave; they dictate what companies are required to do to make LLMs safe. What is a regulatory rule that policy-makers would plausibly be on board with, that would also influence model behavior to be friendlier to animals? 
    * Counterpoint: I don’t have an answer to that question, but maybe it’s worth somebody’s time to try to find an answer.
  * Influencing the government on animal welfare seems harder than influencing AI companies.



### Prioritize AI alignment work that’s more likely to be good for animals

Some alignment strategies may be [better or worse for non-human welfare](https://mdickens.me/2026/03/23/which_types_of_alignment_research_are_good_for_all_sentient_beings/). For example, I expect [CEV](https://www.lesswrong.com/w/coherent-extrapolated-volition) would be better than “teach the LLM to say things that [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) judges like”.

A research project could go more in-depth on which alignment techniques are most likely to be good for animals (or digital minds, etc.).

**Pros:**

  * To my knowledge, this question has never been seriously studied.
  * Some alignment techniques may be _much_ better for animals than others.



**Cons:**

  * We have a poor understanding of what ASI will look like, which makes it very hard to say what will work for animal welfare.
  * In the world where alignment turns out to be tractable, it’s likely that there will be strong incentives shaping how ASI is aligned. The choice of whether to use (say) something-like-CEV or something-like-RLHF will be difficult to influence; AI developers will just use whatever works.



### Traditional animal advocacy

Improving conditions for farm animals—via cage-free campaigns, humane slaughter, vegetarian activism, etc.—may benefit animal welfare post-TAI.

Animal advocacy increases concern for animals, which probably has positive flow-through effects into the future, e.g. by shaping the values of the transformative AI that will control the future.

**Pros:**

  * Traditional animal advocacy has the dual benefit of _definitely_ helping animals today, and building momentum to make future work more effective (to borrow a framing from [Jeff Sebo](https://www.youtube.com/live/Mb7uRki3AqM&t=1h47m)).
  * Traditional animal advocacy is tractable and has clear feedback loops (you can tell if it’s working). It looks especially promising if you’re highly uncertain or [clueless](https://forum.effectivealtruism.org/topics/cluelessness) about longtermist or post-TAI interventions.



**Cons:**

  * The benefits are diffuse. Creating one new vegan helps many animals in the short term, but has only a tiny effect on society’s future values. 
    * I created a [back-of-the-envelope calculation](https://squigglehub.org/models/mdickens/AI-for-animals-benchmark-vs-conventional) that aligns with my initial expectation: my BOTEC-informed guess is that direct advocacy on AI values (by advocating to make LLMs more animal-friendly) is 2–3 orders of magnitude more cost-effective than conventional animal advocacy.
  * It takes a long time to make progress. AI timelines are probably short.



### Use AI to improve farm animal welfare

Some animal activists are looking into how AI could negatively impact farm animals (e.g. by making factory farming more efficient), and on how animal activists could use AI to make their activism more effective.

This idea gets a lot of attention among animal activists, but I think it’s among the worst ideas on this list because it doesn’t give proper appreciation to how radically different the post-TAI future will look.

**Pros:**

  * I am generally skeptical of interventions of the form “teach people to leverage AI to do X better”, but farm animal advocacy seems sufficiently important that it might be worthwhile in this case.



**Cons:**

  * This sort of work makes most sense in the unlikely scenario where we develop smarter-than-human AI, but things still look basically normal. The future will not be normal. Probably factory farming won’t exist, either because AI wipes out humanity, or AI uses its super-advanced understanding of biology to develop animal-free methods of growing meat.
  * Even if AI (somehow) doesn’t make the world look radically different, anything we learn in 2026 about how to leverage 2026-era LLMs will be irrelevant by 2030–2035 (or honestly probably by 2028).
  * Proposals for how to use TAI to improve animal advocacy only make sense if TAI does not cause value lock-in. If TAI locks in values, then advocacy doesn’t matter because the TAI controls everything. If TAI _doesn’t_ lock in values, then we don’t need to do the work _now_ ; we could wait until after TAI, at which point we’ll have a better understanding of what the post-TAI world is like.



### Work on preventing power concentration

An aligned ASI may give absolute power to its controller. In a world where ASI allows a few people to seize control of the world, those people will probably not care about animal welfare.

**Pros:**

  * As with pausing AI, there are good reasons to work on power concentration that have nothing to do with animal welfare.



**Cons:**

  * Power concentration risk seems both less important than misalignment risk and less tractable.



## Further reading

For more on this topic, see:

  * [A shallow review of what transformative AI means for animal welfare](https://forum.effectivealtruism.org/posts/tGdWott5GCnKYmRKb/a-shallow-review-of-what-transformative-ai-means-for-animal) by Lizka Vaintrob and Ben West
  * [Animals in AI-transformed futures: can anything be done today?](https://forum.effectivealtruism.org/posts/RM2qfTd3CwykNHsG9/a-list-of-feasible-transformative-ai-x-animals-interventions) by [Jo_](https://forum.effectivealtruism.org/users/jo_)
  * [Bringing about animal-inclusive AI](https://forum.effectivealtruism.org/posts/2cZAzvaQefh5JxWdb/bringing-about-animal-inclusive-ai) by Max Taylor



Posted on Mar 26, 2026
