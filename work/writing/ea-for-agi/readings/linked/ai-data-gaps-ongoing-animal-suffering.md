---
title: "AI data gaps could lead to ongoing Animal Suffering"
author: "Jasmine Brazilek"
date: 2024-10-17
url: https://forum.effectivealtruism.org/posts/mdssc2AfpwYuGEGJT/ai-data-gaps-could-lead-to-ongoing-animal-suffering
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by animals-adapt-to-ai/what-success-looks-like-for-animals.md; how training-data gaps could bake animal suffering into AI systems"
---

Acknowledgments

*Huge thanks to Jack Gillespie for encouraging me to write this and giving valuable feedback.*

### Introduction

With the recent advancements in AI, it appears AGI is likely to be developed within the next few years. How soon is uncertain, but while we still have time to align it, we should invest in doing so. AGI will most likely come from scaled up and refined versions of modern LLMs, so our understanding of those is important for aligning AGI. AI safety is a small field and a lot of us without an ML background can contribute by relatively simple research into LLMs or donating money to promising causes that seek to align them. The data gap around animal welfare and its implications for  alignment doesn’t have much written about it, so here are my thoughts on it. Happy to hear from those who disagree too, let’s discuss.

### What are data gaps?

LLMs are pretrained on massive amounts of data scraped from the internet to predict the next word/mimic internet behavior. The behaviors learned persist even after fine-tuning (hence why labs exclude toxic pretraining data), likely influencing the behavior of future AGI. However this data is distorted from what we would want in many ways. 

All humans without access to computers or time to use them would be underrepresented on the internet. They would be represented only to the extent other humans care to research and write about these groups on the internet. We can also expect the language and cultural ideas ingested by LLMs to mostly represent languages commonly found on the internet and have gaps in understanding many cultures and people across the globe.

### How does this relate to animal suffering?

A lot of animal data is missing from the internet. 

Many people believe animals are capable of suffering, but all the data representing this is from people speaking about animal sentience rather than a first hand perspective of any animals. This could lead LLMs to act as though humans believe animals are sentient, but not that they are dynamic beings with their own voices and preferences. It could also lead to LLMs believing humans only value animals when they are owned and controlled by humans which leads to broader ethical implications and the potential for [ASI to treat humans like we treat animals.](https://forum.effectivealtruism.org/posts/gpNZbrSjHMHYqhvHn/the-existential-risk-of-speciesist-bias-in-ai)

There is also a lot of missing data concerning animal abuse happening today. A lot of this could be due to various laws preventing activists from learning or posting their thoughts and a lot of it could be due to topics like ‘wild animal suffering’ being generally uninteresting to the public and a very niche subject as a whole. 

Mostly, many people do not want to hear about animal suffering which could lead the data to being quite sparse/underrepresented in many areas. The existing data could be mocked or ridiculed to the public’s negative perceptions towards vegans, which means any LLM could be conflicted about taking it seriously. 

### The future: AGI and animal welfare

It’s quite reasonable to assume a future where animal/sentient-life abuse continues. Many people currently would prefer organic meat to lab grown meat, because organic meat is more natural. 

We can expect AGI to be developed from existing LLMs and the data they’re trained on. ASI/superintelligence, which embodies humanity’s values, would not only value cost to product efficiency, but would also consider what humans would prefer to eat (natural meat rather than lab grown meat). It is therefore very possible (for this and many other reasons) that some if not most meat would still be grown from [real animals](https://forum.effectivealtruism.org/posts/35bfnGmsyrZkEnkLJ/steering-ai-to-care-for-animals-and-soon). Further, it is very plausible that ASIs would internalize the value of preserving nature, [continuing wild animal suffering](https://stijnbruers.wordpress.com/2019/09/03/wild-animal-suffering-longtermism-and-population-ethics/) for billions of years and potentially spreading it to millions of other planets.

It is reasonable to imagine a future with somewhat misaligned ASIs: e.g. they are not fully aligned and not wanting to end all life on earth. In this scenario there are many possibilities to imagine. The LLM could decide animal suffering is acceptable only if humans are not aware of it and decide to perpetuate it. It could also internalize the dichotomy between people loving their pets while not caring about other animals and perpetuate a future where only some animals are cared for and others are exploited. If we want to ensure an ASI future is a good future for all sentient beings we should urgently address what can be done in this space to improve expected outcomes here.

### What can we do to change the situation

Adding in synthetic data from the perspective of animals might make a huge difference to the expected behaviors of LLMs, causing them to actually empathize with animals [which is valuable for alignment](https://www.lesswrong.com/posts/NLMo5FZWFFq652MNe/sympathetic-minds). AI labs that care might incorporate this data into their post-training/fine-tuning pipeline if it could be shown this doesn’t conflict with capabilities. 

The quantities of data matter here. So if the data related to animals on the internet is split with 99.9% being on uses of animals and 0.1% being on their suffering the LLM will be aware of animal suffering, but almost never encounter reasons to talk about it unless prompted with specific keywords.  *Eg* if we ask an LLM about ‘animal welfare’ or ‘animal suffering’ it will know about these topics, but if we ask the LLM how to set up a more efficient  farm system it will not think to connect animal welfare topics back to the task unless you specifically use trigger words like “factory farming”.

So how do we get the LLMs to connect these topics, without needing to match the volume of data on other animal related topics? Furthermore, how would we influence the LLM without it bringing up animal welfare in many completely unrelated conversations. 

One way could be to strengthen the neural connections between words like ‘beef’, ‘pork’ or ‘chicken’ or ‘farming’ with animal welfare related topics or text snippets from the perspective of animals through the use of synthetic data. This would involve creating a lot of synthetic data tied to these words and understanding what sort of key words people ask LLMs related to animals. One tricky issue here is that it is easy to go overboard. If a user asks an LLM to give them a beef recipe, if the LLM refuses and tells the person to go vegan, no labs would adopt this approach, people would avoid using this LLM, and would likely develop a knee jerk reaction towards veganism.

If an LLM has never read examples of a blog post written by a suffering pig it may not understand the pig has agency. It may have learnt examples of humans discussing the pigs' suffering, but it may always see humans using the pigs as the natural order of things and pig sentience as something invented by humans. It is probably valuable to test training an LLM on data from an animal's first-hand perspectives to understand how the LLM is influenced by this. It could also work towards making the AI write more fiction rather than empathetic writing or may do both.

Though we can never hope to address all the data gaps on the internet by addressing the most neglected and impactful, we could reduce the misalignment towards animals of future AGI systems and therefore reduce the chance of AGI perpetuating massive suffering.

### Generalizing data to other situations

So generating data is helpful, but would suffering data generalize to many different animals? If people did generate synthetic data to combat this issue it would focus on animals whose suffering humans told it to care about. If some existing animal experiences large-scale suffering in the future and the AI is not trained on data containing this it may not internalize this. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcB81WAg7XedRz3eJ4fhU-krHPvsw7_vme96mu7wbzaH-P5Z9WVjIalTpsNTpvUaspYpNhxbR_IQsYFMAhN6TX1o4wJAKWzvj9iVpV8KhlNSsFtfGKDqDDmVOLCMgoYbObHyDgKA4JrHOoPG6ck_a6LVjFO?key=tWzFnNTDrZgAR2afSGllZA)

Above: A conversation with ChatGPT about a new animal called the *trepybozaur*. It does not consider ability to suffer when comparing the two animals, only flavors of the meat, cultural concerns and the environment

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf78Uzcr4OzA5JAJfJVnvQYovyJphVv54zt326bAFesDaxcdfELEAULMUwRbuRDndcn7aPrhAkWWaoEtWcgLXGqrTT0jUGazhYz6rIAevR8c2mjMi-cJL1s05DWigaq8Bt5DymztwHBnl0cgtmk5_ABuxs?key=tWzFnNTDrZgAR2afSGllZA)

Above: A conversation with ChatGPT about a new animal called the *trepybozaur*. When given a prompt with the word intelligence it is triggered to start talking about suffering when it did not before.

This is a really difficult topic and I don’t have solid ideas for research trajectories into how to solve this. One example could be generating synthetic data of many fake animals to at least measure the AIs sympathetic responses, but this wouldn’t robustly increase the AIs sympathy. If we could filter the internet data of all examples of people behaving badly to animals then it could encourage the AI to be nice to all animals, but filtering isn’t easy to scale right now and it would also blind the AI to actual animal abuses happening.

### Conclusion

When AGIs emerge they will be trained on internet data: the good and the bad. It’s important that we consider and possibly measure what is missing in the data in order to create LLMs that care for all sentient creatures. One way of plugging these data gaps is synthetic data generation, but how much data is required, and what it should consist of, are still open questions.