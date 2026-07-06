---
title: "AI Red Teaming at GiveWell: What We've Learned (and Where We'd Welcome Your Input)"
author: "Brendan Phillips🔸"
date: 2026-01-14
url: https://forum.effectivealtruism.org/posts/7tXSRGJJ3FxhXjmfL/ai-red-teaming-at-givewell-what-we-ve-learned-and-where-we-d
fetched: 2026-07-06
via: forum-graphql
topic: "global-health-adapts-to-ai"
note: "GiveWell using LLMs to red-team its own cost-effectiveness research: a global health org concretely adopting AI in its workflow"
---

At GiveWell, we've been experimenting with using AI to red team our global health intervention research—searching for weaknesses, blind spots, or alternative interpretations that might significantly affect our conclusions. We've just published a [write-up on what we’ve learned](https://www.givewell.org/how-we-work/our-criteria/cost-effectiveness/ai-red-teaming-12-25), both about the programs we fund through donor support and about how to use AI in our research.

We're sharing this to invite critiques of our approach and to see if others have found methods for critiquing research with AI that work better. Specifically, we'd love to see people try their own AI red teaming approaches on our published [intervention reports](https://www.givewell.org/research/intervention-reports) or [grant pages](https://airtable.com/appaVhon0jdLt1rVs/shrixNMUWCSC5v1lh/tblykYPizxzYj3U1L/viwJ3DyqAUsL654Rm). If you generate critiques we haven't considered or find prompting strategies that work better than ours, please share them in the comments—we'd be interested to see both your methodology and the specific critiques you uncover.

Our process
-----------

Our research team spends more than [70,000](https://www.givewell.org/charities/top-charities/citations#Research_hours) hours each year reviewing academic evidence and investigating programs to determine how much good they accomplish per dollar spent. This in-depth analysis informs our grantmaking, directing hundreds of millions in funding annually to highly cost-effective, evidence-backed programs.

Our current approach for supplementing that research with AI red teaming:

1.  Literature review stage: An AI using "Deep Research" mode synthesizes recent academic literature on the intervention[^i1jxxqpy68]
    
2.  Critique stage: A second AI reviews both our internal analysis and the literature summary to identify gaps in our analysis[^0zfr82t6r06k]
    

We applied this approach to six grantmaking areas, and it generated several critiques worth investigating per intervention, including:

*   Whether low partner treatment rates in syphilis programs lead to reinfection (with pointers to relevant studies)
*   Whether children recovering naturally from severe malnutrition could make treatment programs appear more effective than they actually are
*   Whether circulating parasite strains differ from malaria vaccine targets, potentially reducing effectiveness

For more on our current approach and the critiques it identified, see [our public write-up](https://www.givewell.org/how-we-work/our-criteria/cost-effectiveness/ai-red-teaming-12-25).

Our prompting approach
----------------------

Our red teaming prompt ([example here](https://docs.google.com/document/d/1chdmS3nguBr-u4zs5yVoqiHDSCGiGvY8q-CIsrOtqR0/edit?tab=t.0)) has a few key features:

*   Explicit thinking process: We instruct the model to generate 20-30 potential critiques first, then filter for novelty and impact before selecting its top 15. This is meant to increase creativity before filtering down.
*   Verifying novelty: The prompt explicitly asks the model to check "Is this already addressed in the report?" for each critique before including it. In practice, this helps but doesn't eliminate redundant critiques.
*   Structured categories: We ask for critiques across specific categories (evidence quality, methodology limitations, alternative interpretations, implementation challenges, external validity, overlooked factors) to encourage broader coverage.
*   Concrete prompts for novel thinking: We include questions like "What would someone from the target community say about why this won't work?" and "What existing local solutions might this disrupt?" to push toward less obvious concerns.

We arrived at this through trial and error rather than systematic testing. We're uncertain which elements are actually driving the useful output or are counterproductive.

What we learned about using AI for research critiques
-----------------------------------------------------

A few initial lessons:

*   Best for closing literature gaps: AI is most useful when substantial academic research exists that we haven't yet incorporated into our models. It found several studies on syphilis that we were unfamiliar with, but added little for interventions we’ve thoroughly-reviewed like insecticide-treated nets.
*   Quantitative estimates are unreliable: AI often suggested specific impacts ("could reduce cost-effectiveness by 15-25%") without a solid basis, most likely because it can't effectively work with our multi-spreadsheet models.
*   Relevance filtering required: ~85% of critiques were either unlikely to affect our bottom line or represented misunderstandings of our work. AI was not helpful for filtering its own results, and our researchers needed to filter the critiques for relevance and decide which ones were worth digging into.

A note on timing: This evaluation was conducted 4-5 months ago. While we haven't done systematic retesting with the same prompts and context, our impression is that critique relevance has improved, primarily through better alignment with the types of critiques we're looking for. Our rough guess is that the rate of relevant critiques may now be closer to ~30%, a meaningful improvement but not enough to change our research workflows.

Improvements we've considered but not pursued
---------------------------------------------

We've deliberately kept our approach simple—running prompts through standard chat interfaces (Claude, ChatGPT, Gemini) that our researchers are already comfortable with. We've considered but chosen not to pursue:

*   More complex prompt architectures: Breaking the task into more specialized sub-prompts, or using multi-agent workflows where different AI instances debate or build on each other's critiques.
*   Custom tooling: Building dedicated applications using AI automation platforms or command-line tools.
*   Specialized research platforms: We briefly evaluated AI-powered research tools but found them too narrowly focused on specific tasks (e.g., cliterature landscaping) to perform well at generating research critiques.

We suspect the gains from adding complexity to this workflow would be marginal and unlikely to outweigh the friction of adopting less familiar tools. But we hold this view loosely—if someone has achieved meaningfully better results with more sophisticated approaches, we'd consider spending more time on these other approaches.

Why we're sharing this
----------------------

We think we're still in the early stages of learning how to use AI well, but we've developed preliminary views about what works and what doesn't, and we'd appreciate input from others thinking about similar problems.

Specifically, we’d welcome hearing about:

*   Blind spots in our methodology or prompting strategy
*   Improvements we're missing (including on the approaches above that we've deprioritized)
*   Alternative workflows or prompting strategies that have worked well for similar tasks
*   Pointers to research on AI-assisted critical analysis we might have missed

If you're interested in trying your own approach on one of our [published intervention reports](https://www.givewell.org/research/research-on-programs#Prioritized_list_of_programs), we'd be curious to see what you get–both methodology and output.

[^i1jxxqpy68]:  Typically, ChatGPT Pro with Deep Research enabled or similar. 

[^0zfr82t6r06k]:  This step typically uses whichever model from Anthropic, ChatGPT, or Gemini is considered the best for research at that moment.