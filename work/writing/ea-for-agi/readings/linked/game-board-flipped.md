---
title: "The Game Board has been Flipped: Now is a good time to rethink what you’re doing"
author: "LintzA"
date: 2025-01-28
url: https://forum.effectivealtruism.org/posts/JN3kHaiosmdA7kgNY/the-game-board-has-been-flipped-now-is-a-good-time-to
fetched: 2026-07-07
via: forum-graphql
topic: "linked"
note: "The game board has been flipped: now a good time to rethink AI strategy; cited x3"
---

*Cross-posted to* [*Lesswrong*](https://www.lesswrong.com/posts/ynsjJWTAMhTogLHm6/the-game-board-has-been-flipped-now-is-a-good-time-to)

Introduction
------------

Several developments over the past few months should cause you to re-evaluate what you are doing. These include:

1.  Updates toward short timelines
2.  The Trump presidency
3.  The o1 (inference-time compute scaling) paradigm
4.  Deepseek
5.  Stargate/AI datacenter spending
6.  Increased internal deployment
7.  Absence of AI x-risk/safety considerations in mainstream AI discourse

Taken together, these are enough to render many existing AI governance strategies obsolete (and probably some technical safety strategies too). There's a good chance we're entering crunch time and that should absolutely affect your theory of change and what you plan to work on.

In this piece I try to give a quick summary of these developments and think through the broader implications these have for AI safety. At the end of the piece I give some quick initial thoughts on how these developments affect what safety-concerned folks should be prioritizing. These are early days and I expect many of my takes will shift, look forward to discussing in the comments! 

Implications of recent developments
-----------------------------------

### Updates toward short timelines

There’s general agreement that timelines are likely to be far shorter than most expected. Both Sam Altman and Dario Amodei have recently said they expect AGI within the next 3 years. Anecdotally, nearly everyone I know or have heard of who was expecting longer timelines has updated significantly toward short timelines (<5 years). E.g. [Ajeya’s median estimate](https://www.lesswrong.com/posts/K2D45BNxnZjdpSX2j/ai-timelines?commentId=hnrfbFCP7Hu6N6Lsp) is that 99% of fully-remote jobs will be automatable in roughly 6-8 years, 5+ years earlier than her 2023 estimate. On a quick look, prediction markets seem to have shifted to short timelines (e.g. [Metaculus](https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/)[^spwt9siqcvf] & [Manifold](https://manifold.markets/news/agi) appear to have roughly 2030 median timelines to AGI, though haven’t moved dramatically in recent months).

We’ve consistently seen performance on benchmarks far exceed what most predicted. Most recently, [Epoch was surprised](https://x.com/Jsevillamol/status/1870174424021753917) to see OpenAI’s o3 model achieve 25% on its Frontier Math dataset (though there’s [some controversy](https://www.lesswrong.com/posts/8ZgLYwBmB3vLavjKE/some-lessons-from-the-openai-frontiermath-debacle)). o3 also had [surprisingly good performance](https://thezvi.substack.com/p/o3-oh-my?open=false#%C2%A7has-software-engineering-fallen) in coding. In many real-world domains we’re already seeing AI match top experts, they seem poised to exceed them soon. 

With AGI looking so close, it's worth remembering that capabilities are unlikely to stall around human level. We may see far more capable systems potentially very soon (perhaps months, perhaps years) after achieving systems capable of matching or exceeding humans in most important domains. 

While nothing is certain, and there’s certainly potential for groupthink, I believe these bits of evidence should update us toward timelines being shorter.

**Tentative implications:**

*   While we should still be ready for longer timelines, it’s now considerably more important to be able to tell a story where what you’re doing now will have an impact within the next few years.
    *   Note that, because short timelines scenarios happen sooner and often don’t trade off terribly much against longer timelines scenarios, even if you put just 30% on sub 4 year timelines it could be worth having as a top priority.[^yfun1b9oksf]
        
*   AI risk is no longer a future thing, it’s a ‘maybe I and everyone I love will die pretty damn soon’ thing. Working to prevent existential catastrophe from AI is no longer a philosophical discussion and requires not an ounce of goodwill toward humanity, it requires only a sense of self-preservation.
*   Plans relying on work that takes several years should be heavily discounted - e.g. plans involving ASL5-level security of models if that’s 5+ years away
*   There is a solid chance that we’ll see AGI happen under the Trump presidency.
*   We can make a reasonable guess at the paradigm which will bring us to AGI as well as the resources and time needed to get there.
*   We know the actors likely to achieve AGI and have a rough idea of what the landscape will look like.

### The Trump Presidency

My sense is that many in the AI governance community were preparing for a business-as-usual case and either implicitly expected another Democratic administration or else built plans around it because it seemed more likely to deliver regulations around AI. It’s likely not enough to just tweak these strategies for the new administration - building policy for the Trump administration is a different ball game.

We still don't know whether the Trump administration will take AI risk seriously. During the first days of the administration, we've seen signs on both sides with Trump pushing Stargate but also [announcing](https://fortune.com/2025/01/28/trump-administration-policy-response-deepseek-ai-openai-stargate-export-controls-taiwan-tariffs/) we may levy up to 100% tariffs on Taiwanese semiconductors. So far Elon Musk has apparently done little to push for action to mitigate AI x-risk (though it’s still possible and could be worth pursuing) and we have few, if any, allies close to the administration. That said, it’s still early and there's nothing  partisan about preventing existential risk from AI (as opposed to, e.g., AI ethics) so I think there’s a reasonable chance we could convince Trump or other influential figures that these risks are worth taking seriously (e.g. Trump made [promising comments](https://www.youtube.com/watch?v=MD_ywgcoIPI) about ASI recently and seemed concerned in his [Logan Paul interview](https://www.theguardian.com/us-news/article/2024/jun/14/trump-logan-paul-ai-speech) last year).

**Tentative implications:**

*   Much of the AI safety-focused communications strategy needs to be updated to appeal to a very different crowd (E.g. Fox News is the new New York Times).[^fxvfpcp8hfa]
    
*   Policy options dreamed up under the Biden administration need to be fundamentally rethought to appeal to Republicans.
    *   One positive here is that Trump's presidency does expand the realm of possibility. For instance, it's possible Trump is better placed to negotiate a binding treaty with China (similar to the idea that 'only Nixon could go to China'), even if it's not clear he'll want to do so.
*   We need to improve our networks in DC given the new administration.
*   Coalition building needs to be done with an entirely different set of actors than we’ve focused on so far (e.g. building bridges with the ethics community is probably counterproductive in the near-term, perhaps we should aim toward people like Joe Rogan instead).
*   It's more important than ever to ensure checks and balances are maintained such that powerful AI is not abused by lab leaders or politicians.

**Important caveat:** Democrats could still matter a lot if timelines aren’t extremely short or if we have years between AGI & ASI.[^hfqxsnuty7q] Dems are reasonably likely to take back control of the House in 2026 ([70% odds](https://electionbettingodds.com/House-Control-2026.html)), somewhat likely to win the presidency in 2028 ([50% odds](https://electionbettingodds.com/PresidentialParty2028.html)), and there's a possibility of a Democratic Senate ([20% odds](https://electionbettingodds.com/Senate-Control-2026.html)). That means the AI risk movement should still be careful about increasing polarization or alienating the Left. This is a tricky balance to strike and I’m not sure how to do it. Luckily, the community is not a monolith and, to some extent, some can pursue the long-game while others pursue near-term change.

### The o1 paradigm

Alongside scaling up training runs, it appears that inference compute will be key to attaining human-level AI and beyond. Compared to the previous paradigm, compute can be turned directly into capabilities much faster by simply running the models for longer.

**Tentative implications:**

*   To the extent we've unlocked the ability to turn inference compute into better answers, well-resourced actors will be able to pay more to have better answers. This means the very best capabilities may become increasingly difficult to access for the average person,[^ikqzn4002r] though we’re still likely to get access to better and better models for some time.
*   Because this paradigm is more compute intensive to run on the margin, it may be more difficult to run many iterations side-by-side. This means rather than having the equivalent of millions of top tier R&D researchers working at the same time we may have tens or hundreds of thousands, this could slow takeoff speed somewhat.
*   This has implications for competition with China which are still somewhat unclear to me. It could mean that compute restrictions bite harder in terms of leveraging AGI to achieve ASI. Then again, Deepseek’s o1-equivalent seems far more compute-efficient as well.
*   Data seems unlikely to be a key bottleneck on progress for anything which has a [clear answer](https://arxiv.org/pdf/2501.12948v1) as we seemed to have [cracked self-play for LLMs](https://www.lesswrong.com/posts/HiTjDZyWdLEGCDzqu/?commentId=ynM3HpwZrNibnNMKj). This effectively means the path toward superhuman performance in any domain with definite correct answers is clear (e.g. coding, math, many sciences). In fact, these models are already effectively PhD-level in many domains. Less sure is the extent to which this can be applied to problems with [less clear answers](https://www.cognitiverevolution.ai/emergency-pod-reinforcement-learning-works-reflecting-on-chinese-models-deepseek-r1-and-kimi-k1-5/) (e.g. writing quality) and long horizon tasks have not been solved. 

### Deepseek

Deepseek is highly compute efficient and they’ve managed to replicate the o1 paradigm at far lower cost (though [not as low](https://blog.heim.xyz/deepseek-what-the-headlines-miss/) as it initially seemed). It seems possible that merely scaling up what they have could yield enormous returns beyond what they already have (though this is unclear).

Deepseek’s methods are, for the most part, open source. That means anyone with a solid base model can now build an impressive reasoner on top of it with barely any [additional cost](https://thezvi.substack.com/p/deekseek-v3-the-six-million-dollar). 

**Tentative implications:**

*   The US has a far smaller moat than many imagined. The last I heard, received wisdom was that the US was about two years ahead of China on AI. It now looks like China is something like 3-12 months behind, though this isn't terribly clear given top US companies tend to keep their best capabilities private. It is also unclear whether the PRC is poised to overtake the US or would continue in a ‘fast-follower’ position even if we slowed down.
    *   It's worth pointing out as well that Gemini 2 Flash Thinking [may outperform](https://x.com/daniel_mac8/status/1883855502553252234) Deepseek r1 on most relevant metrics.
*   While true that the training cost was cheap, this doesn't mean compute is no longer important. More compute still gets you a better model so Deepseek’s innovations may just speed progress and, if anything, increase the value of compute. In fact, Deepseek [specifically mentioned](https://blog.heim.xyz/deepseek-what-the-headlines-miss/) compute was a constraint for them.
*   Algorithmic advantage is hard to maintain
    *   The o1 paradigm was easily copied
    *   [Multiple approaches](https://www.youtube.com/watch?v=MbX9J1Tt_I0) of using RL to boost LLMs appear to work similarly well. It would appear no brilliant insights are needed to achieve AGI, which implies little moat.
*   We really might continue to see open source models released by default, perhaps even up until AGI. This is the [stated goal](https://x.com/victor207755822/status/1882757279436718454?t=0yOReRVNh2OKRRhaDFkVrg&s=19) of Depseek and, to a lesser extent, Meta. To be honest, I haven’t even begun to understand what the implications of this could be, but they would clearly be enormous.
*   Everyone now has access to an open source model competitive with top frontier lab models. This includes:
    *   Alignment researchers who can use it to speed up their research
    *   Bad actors who can use it for cyberattacks, scams, bioweapons, and much more.
        *   Their access to this model could increase the chance of warning shots.
*   All AI projects now have the ability to fit their models into the o1 paradigm given that Deepseek has explained their methodology and it is likely easy to copy. This means an upgrade in capabilities across the board.

### Stargate/AI data center spending

OpenAI and partners intend to invest $100 billion in 2025 and $500 billion over the coming 4 years.[^i8pv1ja0wg9] Microsoft intends to spend $80 billion on building data centers this year, [other companies](https://www.theregister.com/2025/01/22/openai_stargate_ai_datacenter_company/#:~:text=If%20Stargate%20somehow%20manages%20to%20spend%20%24100%20billion%20on%20AI%20infrastructure%20in%202025%20alone) seem similarly keen to dump money into compute.

The US government has gotten increasingly involved in AI and Sam Altman had a prominent place at Trump’s inauguration. So far, actual government involvement has mostly been in the form of helping companies get through the permitting process quickly. (more detail [here](https://www.google.com/url?q=https://www.transformernews.ai/p/unravelling-the-stargate-spin&sa=D&source=docs&ust=1738007316386304&usg=AOvVaw1LvWwr_IobPHn2XEmZ0bn0))

**Tentative implications:**

*   To the extent compute is most of what’s needed to achieve AGI, OpenAI may have a decisive advantage over competitors. This should update us a little away from believing labs like Anthropic are true competitors.
*   The US government is getting involved in the race to build AGI. Influencing them to take safety seriously is more crucial than ever.

### Increased internal deployment

This is more speculative, but I expect we’ll see less and less of what labs are producing and may have less access to the best models. I expect this due to a number of factors including:

*   As AI systems produce more value, AI companies can capture more of the value-add of the models through business-to-business deals and using the AI’s to produce value directly (e.g. through using it for stock trading strategies). That said, fierce competition could keep prices down and models openly accessible.
*   As AI systems are able to help with AI R&D and large models can help improve small models. This means it may often be worthwhile for companies to delay deployment so they can use scarce resources to improve their existing models further.
*   One key reason to deploy models is to generate revenue and interest. So far investors have been flooding companies with investment. I suspect attracting investment is unlikely to be a huge bottleneck under short timelines (though if the race to ASI drags on, obtaining a stronger income stream becomes much more important).
*   As competition heats up and nation-states get more invested in the race to superintelligence, secrecy will become more important. OpenAI is likely to want to avoid tipping its hand by telling the world it’s entered into a feedback loop of AI R&D which may help it quickly reach superintelligence (and potentially achieve a decisive strategic advantage). It will also want to avoid revealing the secret sauce which allowed it to do so and deploying the model makes that harder.

**Tentative implications:**

*   People outside of labs are less likely to have access to the very best models and will have less awareness of where the state of the art is.
*   Warning shots are somewhat less likely as highly-advanced models may never be deployed externally.
*   We should expect to know less about where we’re at in terms of AI progress.
*   Working at labs is perhaps more important than ever to improve safety and researchers outside of labs may have little ability to contribute meaningfully.
*   Whistleblowing and reporting requirements could become more important as without them government would have little ability to regulate frontier AI.
*   Any regulation based solely on deployment (which has been quite common) should be adjusted to take into account that the most dangerous models may be used internally long before they're deployed. 

### Absence of AI x-risk/safety considerations in mainstream AI discourse

For a while, after ChatGPT, it looked like AI risk would be a permanent part of the discourse going forward, largely thanks to efforts like the CAIS AI Extinction Letter getting high profile signatories and news coverage. For the past year though, AI x-risk concerns have have not had much airtime in the major media cycles around AI. There haven't been big safety-oriented stories in mainstream outlets in regards to recent AI events with strong implications for AGI timelines and existential risk (e.g. Deepseek, Stargate). A notable example of the AI safety community's lack of ability to affect the media was the decisive loss of the media game during the OpenAI board drama.

That said, we do have more people writing directly about AI safety and governance issues across a variety of Substacks and on Twitter/X now. We’ve also got plenty of prominent people capable of getting into the news if we made a concerted effort to do so (e.g. Yoshua Bengio, Geoff Hinton).

**Tentative implications:**

*   We’re not on track to win the debate around AI x-risk being a major concern in the circles which matter. While the public is concerned about AI (and to some extent x-risk from AI), this concern is not being leveraged.
*   We need to put a lot of deliberate effort into getting coverage if we want to influence AI discourse, this doesn’t just happen automatically.

Implications for strategic priorities
-------------------------------------

### Broader implications for US-China competition

Recent developments call into question any strategy built on the idea that the US will have a significant lead over China which it could use to e.g. gain a decisive advantage or to slow down and figure out safety. This is because:

*   The US is unlikely to be able to prevent China (or Russia) from stealing model weights anytime soon given both technological constraints and difficulty/cost of implementing sufficient security protocols. We should assume China will be able to steal our models.
*   China is not as far behind as we’d thought and it seems worth assuming they’ll be close behind when it comes to AGI, and potentially (though less clearly) also ASI.
    *   It would be nice to know if China would be capable of overtaking the US if we were to slow down progress or if we can safely model them as being a bit behind no matter how fast the US goes. That said, I don’t think we’ll ever know this to the level of confidence we’d need to convince decision-makers that slowing down wouldn’t hand the race to China.
        
*   There’s some big questions around compute efficiency. Perhaps it’s possible to create AGI with amounts of compute already available to China or likely to be available within the next two years. It’s unclear whether that would reach all the way to ASI but it does mean that China will have access to generally capable AI systems around the same time we will.
*   It’s even possible we’ll see AGI open sourced (as is the [stated goal of Deepseek](https://x.com/victor207755822/status/1882757279436718454?t=0yOReRVNh2OKRRhaDFkVrg&s=19)). This would fundamentally change the game and make third countries far more relevant.

Overall, the idea that the US could unilaterally win an AI race and impose constraints on other actors appears less likely now. I suspect this means an international agreement is far more important than we’d thought, though I'm not sure whether I think recent developments make that more or less likely. 

***Note**: The below takes are far more speculative and I have yet to dive into them in any depth. It still seems useful to give some rough thoughts on what I think looks better and worse given recent developments, but in the interest of getting this out quickly I’ll defer going into more detail until a later post.*

### What seems less likely to work?

*   Work with the EU and the UK
    *   Trump is far less likely to take regulatory inspiration from European countries and generally less likely to regulate. On the other-hand perhaps under a 2028 Dem administration we would see significant attention on EU/UK regulations.
    *   The EU/UK are already scaling back the ambitions of their AI regulations out of fear that Trump would retaliate if they put limits on US companies.
*   International agreements not built specifically with Trump in mind.
*   SB1047-style legislation at a national level in the US.
*   Appealing to the American Left (at least in the near-term)
*   Small update against compute governance being the lever we thought it might be (though it remains a very important lever):
    *   Clarity on how to build AGI and the amount of compute apparently needed to build it mean export controls against China may not have enough time to bite.
    *   Deepseek demonstrates it’s possible to create extremely powerful models with little compute. It may well be possible to build AGI with the compute resources China already has access to. Whether that would extend to ASI is far less clear. 

### What should people concerned about AI safety do now?

*   **Communications work**, especially if aimed at the general public or toward a right-leaning elite
    *   Demonstrations of dangerous capabilities or misalignment, ideally with a clear connection to AGI/ASI concerns.
    *   Media engagement
    *   Explanations of why we should be worried and stories of how things go wrong
        *   The AI safety community still has not succeeded at conveying  why we’re worried in a very public way. SuperIntelligence and Life 3.0 did a reasonable job back in 2013 but since then we haven't had any prominent stories of doom aimed at a general audience. Most content tends to dance around this.
        *   My sense is we really haven’t pushed this as much as we should and finding the right stories is very difficult but could really change the game (e.g. a good movie depicting AI doom could be a huge deal).
    *   Mass movement building
    *   Some bottlenecks on improving communications:
        *   What are we pushing for? E.g. What policies are good to aim for/realistic? What should we push labs to do?
        *   What is a general idea we think the public could get behind and which sufficiently tracks AI risk prevention?
*   **Get a job in a leading lab.** Researchers in labs already have access to far more advanced models and, if the trend toward long periods of internal-only deployment continues, outsiders will have a tough time contributing meaningfully to solving control or alignment. Further, under short timelines labs are relatively more influential and even minor cultural shifts toward risk-awareness seem important.
*   **Organizing within labs for improved safety measures**
    *   Though to the extent this removes the most conscientious people from influential positions within the lab, I’m not sure it’s worthwhile.
*   **Networking with or working in the Trump administration**
*   **Developing new policy proposals** which fit with the interests of Trump’s faction and/or influential members of Congress.
*   **Ideas for how to prevent power grabs using advanced AI.**
*   **Re-thinking our strategic priorities** and investigating key questions in this space.
    *   E.g. How long do we expect it to take to get from AGI to ASI?
    *   What does a post-AGI world look like and how does it affect what we should push for and how we do it? Is there anything we should be doing to prepare for this?
*   **Investing in adopting AI tools for AI safety and governance work.**
    *   / building organizations that can rapidly take advantage of new AI tools.
*   **Getting government to adopt “wise” AI advisors for navigating the AI transition.**
*   **High-risk AI investments** that will pay massive dividends under short timelines (and ideally as long before AGI/ASI as possible). These could then be leveraged to have an impact during the critical period around the development of AGI. 

### Acknowledgements

*Many people commented on an earlier version of this post and were incredibly helpful for refining my views! Thanks especially to Trevor Levin, John Croxton, as well as several others who would rather not be named. Thanks also to everyone who came to a workshop I hosted on this topic!*

[^spwt9siqcvf]:  That market predicted roughly 2040 timelines until early 2023, then dropped down significantly to around 2033 average and is now down to 2030. 

[^yfun1b9oksf]:  I have an old write-up on this reasoning here which also talks about how to think about tradeoffs between short and long timelines. 

[^fxvfpcp8hfa]:  That said, given things could shift dramatically in 2028 (and 2026 to some extent) it could be worth having part of the community focus on the left still. 

[^hfqxsnuty7q]:  E.g. Perhaps we get human-level research AIs in 2027 but don’t see anything truly transformative until 2029. 

[^ikqzn4002r]:  See OpenAI’s Pro pricing plan of $200 per month. To the extent frontier models like o3 can be leveraged for alignment or governance work, it’s possible funders should subsidize their use. Another interesting implication is that, to the extent companies and individuals can pay more money to get smarter models/better answers, we could see increased stratification of capabilities which could increase rich-get-richer dynamics. 

[^i8pv1ja0wg9]:  Note that ‘intend’ is important here! They do not have the money lined up yet.