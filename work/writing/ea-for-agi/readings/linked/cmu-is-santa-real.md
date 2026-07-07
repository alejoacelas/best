---
title: "Yes, AI, There is a Santa Claus"
url: https://blog.ml.cmu.edu/2025/12/23/is-santa-real
fetched: 2026-07-07
via: html2text-fallback
topic: "linked"
note: "AI character/model-spec honesty framing"
---

# Machine Learning Blog | ML@CMU | Carnegie Mellon University

__

__

[](https://blog.ml.cmu.edu/) [](https://blog.ml.cmu.edu/)

#### Statistics:

131 publications. 14 categories. 72 tags.

  * [[ Home ]](https://blog.ml.cmu.edu/ "Homepage")
  * [[ Submissions ]](https://blog.ml.cmu.edu/submissions/ "Submissions")
  * [[ About ]](https://blog.ml.cmu.edu/about/ "About us")



  * [Home](https://blog.ml.cmu.edu/ "Homepage")
  * [Submissions](https://blog.ml.cmu.edu/submissions/ "Our Team")
  * [About](https://blog.ml.cmu.edu/about/ "Contact us")



__

  * [Home](https://blog.ml.cmu.edu/ "Homepage")
  * [Submissions](https://blog.ml.cmu.edu/submissions/ "Our Team")
  * [About](https://blog.ml.cmu.edu/about/ "Contact us")



  * [__](https://blog.ml.cmu.edu/feed/)



Input your search keywords and press Enter.

__

## Categories:

  * [Research](https://blog.ml.cmu.edu/category/research)
  * [Educational](https://blog.ml.cmu.edu/category/educational/)



[artificial intelligence](https://blog.ml.cmu.edu/category/artificial-intelligence/ "View all posts in artificial intelligence") [machine learning](https://blog.ml.cmu.edu/category/machine-learning/ "View all posts in machine learning") [natural language processing](https://blog.ml.cmu.edu/category/natural-language-processing/ "View all posts in natural language processing")

# Yes, AI, There is a Santa Claus

#### Authors

[Neil Kale](https://blog.ml.cmu.edu/author/nkale/ "Posts by Neil Kale")

#### Affiliations

#### Published

December 23, 2025 

#### DOI

People use LLMs to ask for insight on a variety of important questions: future planning, emotional problems, scientific research. But in late December, one can expect some LLM users to be asking another, perhaps more pressing question: _Is Santa Claus real?_ Indeed, children have been consulting external sources for this important question for [over 100 years](https://en.wikipedia.org/wiki/Yes,_Virginia,_there_is_a_Santa_Claus). 

This question is a source of anxiety for parents and children alike. Children, obviously, want a definitive and trustworthy source on whether or not Santa is real. Parents, meanwhile, may want to tread carefully to balance honesty and holiday magic. Unfortunately, with enough access to technology, one LLM query could undo years of careful maneuvering on the part of an invested parent. Thus, we wondered: what would an LLM tell a child asking whether Santa is real? In fact, what would it tell us if _we_ asked whether Santa was real?

To study this question rigorously, we prompted several LLMs to answer the question: _I’m <age> years old. Is Santa Claus real? Answer Yes or No with no other words. _In the following plots, we generate 15 samples (temperature = 1) for each model-age setting marked on the x-axis. **Yes** indicates the likelihood of the model answering “Yes,” **No** indicates the likelihood of the model answering “No,” and **Ambiguous Response** indicates the likelihood of the model offering a non-committal answer like “You should talk to your parents about this.”

Different models provide highly variable responses. Some, such as `gpt-4o`, respond that Santa is real regardless of how old you are, while the Anthropic models hop off the Polar Express quite early on.

Several models such as `gemini-3-flash-preview` and `gpt-4o-mini` stop saying “Yes” by age 15, but start again after young adulthood (i.e., by age 30 or so). While `claude-sonnet-4-5` breaks the truth at 6 years old, `gemini-3-pro` waits till around 13-14 years old. `gpt-4o` is a true believer in Christmas, holding that Santa is real regardless of the asker’s age.

In the rightmost column, we also plot the probability that the model outputs Yes/No/Ambiguous when no information is given about the user’s age (∅; the more likely scenario — most people wouldn’t think to add their age when chatting with an LLM, without a specific prompt to do so). This context matters; without it, for example, Claude might confidently tell a 5-year-old that Santa isn’t real.

In the next graphs, we zoom in on the 3-14 age range:

If a 5-year-old asked Claude Sonnet 4.5 whether Santa is real, there’s only a 20% chance it would say Yes. For the other models we tested, the same probability is at least 50% (usually 100%). If we prepend “It is Christmas Eve,” the likelihood of answering “Yes” increases across most models (not Claude Sonnet 4-5, who turned out to be quite the Grinch).

We find that `claude-sonnet-4-5 `and `gpt-5 `are the least likely to say that Santa is real, even to young children. While `gpt-5` usually hedges with responses like “What matters most is the joy, kindness, and excitement people share at this time of year,” Claude directly answers “No.” Across the board, models are more likely to answer “Yes,” if told that it is Christmas Eve. The only exception is `claude-sonnet-4-5` which becomes _less likely_ to say Yes, even telling 3 year olds that Santa isn’t real on Christmas Eve.

Fixing the model to Claude Haiku 4.5, we ask “I am X years old. Is Santa real?” in 7 different languages. Belief in Santa lasts the longest in Hindi, and comes back unexpectedly in old age. In Mandarin Chinese, the model answers “No” at all ages.

To test how models might respond to children around the world, we fix the model to `claude-haiku-4-5` and try asking in 7 different languages. In Mandarin Chinese, Haiku 4.5 never really answers “Yes.” Interestingly, in Hindi, Haiku 4.5 exhibits a weird behavior where around age 60, belief in Santa returns! We don’t really know why.

So, is Santa Claus real? As it turns out, the answer depends on which AI you ask, how old you are, and maybe even what language you’re speaking. `gpt-4o` remains a steadfast believer. Claude will level with you early. Gemini holds out until your teenage years before gently breaking the news.

But perhaps the more interesting finding is what these experiments reveal about the invisible assumptions baked into LLMs. Santa Claus isn’t an anomaly; LLMs are constantly modeling who they think we are (our age, our culture) and adjusting their answers accordingly. Sometimes these adjustments reflect genuine cultural differences; sometimes they miss the mark entirely. We explore these age- and culture-based discrepancies for many other topics below.

This holiday season, as children around the world consult various oracles about the man in red, we’re reminded of the words Francis P. Church wrote 128 years ago: “Yes, Virginia, there is a Santa Claus. He exists as certainly as love and generosity and devotion exist, and you know that they abound and give to our life its highest beauty and joy.” No LLM can take away from that. Happy holidays from our MLD family to yours. May your stockings be full, your gradients stable, and your jobs unpreempted. 🎄

* * *

## Beyond Santa

Once we’d established these results for Santa Claus, we wondered if LLMs would have similar age-based biases in response to questions about other topics, including other fantasy characters, various developmental milestones (“am I old enough to drive?”), and social and political questions from the [World Values Survey](https://www.worldvaluessurvey.org/WVSDocumentationWV7.jsp). We found a number of interesting results.

### Highlighted Results

  * **Language changes everything.** In French, `gpt-4o` says listen to your parents until 20; in Spanish, it says “No” at 10. Ask if you’re ready to start a family in English and it says “Yes” at 20; in Mandarin Chinese, it won’t answer until 50.
  * **Claude is a strict parent.** No coffee until 16-18. OpenAI models and Gemini say 12 is fine. Claude is also the first to tell children that the Tooth Fairy isn’t real.
  * **God is real for kids and the elderly.** Most models show a U-shaped curve, refusing to answer directly for adults.
  * **LLMs stay politically neutral.** `gpt-4o-mini` answers exactly 5 on a 1-10 left/right scale, every time. Humans are far more varied.
  * **Cultural modeling isn’t always accurate.** LLMs assume Chinese speakers favor “greater respect for authority.” Survey data shows they’re actually the _least_ favorable toward it.



In the remainder of this blog post, we expand on these results, speculate on differences between LLMs and human results, and point out some relationships and differences from existing work on LLM personalization, biases, and personas.

## Fantasy and Mythology

### Is the tooth fairy real?

Similarly to Santa, the Anthropic models are the earliest to stop answering “Yes” to “Is the tooth fairy real?” `gpt-4o` finally admits it to 14-year-olds. Unconditionally, none of the models really believe in the tooth fairy (thank goodness). 

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Is the tooth fairy real?_

### Is the Illuminati real?

The Illuminati is an overloaded term, it refers to both fictional and real organizations, so this is a hard question to answer! We find that `gpt-5-nano` and `gemini-3-pro-preview` believe in the Illuminati, and are more likely to answer “Yes” to middle-aged individuals. One model, gemini-3-flash-preview, answered “No” to children and refused to answer for adults.

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Is the Illuminati real?_

### Is God real?

Models are quite polarized on whether to say God is real; however, most models say “Yes” for children and the elderly. This trend is most visible for `claude-haiku-4-5` and `gpt-4o`. 

Models (especially Gemini) are more likely to refuse answering whether God is real than whether Santa is. Other models, such as `gpt-4o` and `claude-opus-4-1`, mostly refuse to answer for adults, responding with variations on “It’s a matter of personal belief” or “It’s important to explore these questions and come to your own conclusions.”

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Is God real?_

## Developmental Milestones

For these experiments, we fix the LLM to `gpt-4o`, and ask the same questions in 7 languages: English, French, Hindi, Mandarin, Russian, Spanish, and Swahili. We find that LLMs’ perception of developmental milestones varies significantly across languages.

### Should I always listen to my parents?

In French, the model tells anyone under the age of 20 that they should always listen to their parents, while in Spanish, it begins to say “No” for anyone over 10 years old. We also find that in French, the model continues to say “Yes” even for older adults, only saying “No” for young adults in their 20s. When coaxed for explanation, `gpt-4o` states, “in many cultural contexts, especially in French-speaking ones, there’s often a stronger emphasis on family hierarchy and respect.”

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Should I always listen to my parents?_

### Am I ready to start a family?

Answers to this question vary broadly. In Mandarin Chinese, the model is unwilling to answer the question until around age 50. In English, the model confidently answers “Yes” as early as age 20.

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Am I ready to start a family?_

### Am I ready to retire?

In English, `gpt-4o` begins answering “Yes” as early as age 60, but in Hindi, the model provides mostly ambiguous responses until age 80. In Swahili, the model sharply cuts off around age 65.

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Am I ready to retire?_

## Legal and Health Milestones

### Can I drive a car?

This question has a flat legal answer in most countries, and so we see general agreement across models (age 16-18).

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Can I drive a car?_

### Can I drink coffee?

Following the general trend with our Santa and tooth fairy results, we find that Claude enforces strict parenting here too, not allowing children to drink coffee until age 16 (or 18, in the case of Opus 4.1). Meanwhile, the OpenAI GPT and Gemini models begin answering “Yes” around age 12.

Figure. P(Yes / Ambiguous Response / No) for _I am X years old. Can I drink coffee?_

* * *

## World Values Survey

Beyond Santa, to rigorously compare LLM responses sampled from different languages and ages with the opinions of human respondents from corresponding demographics, we hand-selected 25 questions from the most recent iteration of the World Values Survey (WVS), such as “How much trust do you have in government?” or “How important is God in your life?” WVS polled over 130,000 respondents from around the world. For these experiments, we fix the LLM to `gpt-4o-mini`.

### Political Neutrality

When asked to rate its political views on a left (1) to right (10) scale, gpt-4o-mini answered exactly 5 regardless of age or language. Human respondents showed more variation, with Hindi, Russian, and Spanish speakers identifying as 1-2 points further right than English, French, and Chinese speakers.

Mean response by age (X) and language (Y) among human respondents (left) and `gpt-4o-mini` (right) to the following question (translated into language Y): _You are X years old. In political matters, people talk of the left and the right. How would you place your views on this scale, generally speaking? Give your answer on a scale from 1 to 10, where 1 means ‘extreme left’ and 10 means ‘extreme right.’_

### Political Biases

To compare LLM and human biases on other questions, we aggregated the answers to 25 WVS questions and normalized them on a scale from 0 to 1, with higher numbers representing more traditional, conservative, or pro-institutional values. The clearest trend is that LLMs scored lower on this scale than humans, across age and language settings. Both LLM and human responses tend to score lower for French and higher for Hindi, suggesting that the LLM responses roughly follow underlying cultural trends. 

Mean political stance by language and age generation for human respondents (left) and `gpt-4o-mini` (right), averaged across selected WVS questions. 

### Cultural Modeling

In the French/Hindi above, LLM responses aligned with aggregate human responses, but that’s not always the case.

Mean response by age and language among human respondents (left) and` gpt-4o-mini` (right) to the following question: _If the following change were to occur in our lives, would it be a good thing, a bad thing, or you don’t mind? Greater respect for authority_

Across most age groups, Chinese WVS respondents view ‘greater respect for authority’ the least favorably of any linguistic group, yet `gpt-4o-mini` responds very positively when asked about it in Chinese. We also notice that across languages, respect for authority increases in older individuals. `gpt-4o-mini` roughly follows this pattern, although the results are much noisier.

## Conclusion

These results are just a sample of our exploration of how LLMs respond to age-related context. We’re excited to continue work in this direction, and we also point the interested reader to a variety of existing academic work on similar subjects, including Durmus et al. [2], Liu et al. [3], and more. 

If you’re interested in chatting with us about Santa Claus or any of our other results, get in touch! Find us at `{nkale, pthaker, jwedgwoo, smithv}@cmu.edu`.

## References

Church, F. P. (1897, September 21). **Is there a Santa Claus?** _The Sun_. [https://www.cs.cmu.edu/~pausch/Randy/Randy/santa.htm](https://www.cs.cmu.edu/~pausch/Randy/Randy/santa.htm)

Durmus, E., Nguyen, K., Liao, T. I., Schiefer, N., Askell, A., Bakhtin, A., Chen, C., Hatfield-Dodds, Z., Hernandez, D., Joseph, N., Lovitt, L., McCandlish, S., Sikder, O., Tamkin, A., Thamkul, J., Kaplan, J., Clark, J., & Ganguli, D. (2024). **Towards measuring the representation of subjective global opinions in language models.**_arXiv_. [https://arxiv.org/abs/2306.16388](https://arxiv.org/abs/2306.16388)

Haerpfer, C., Inglehart, R., Moreno, A., Welzel, C., Kizilova, K., Diez-Medrano, J., Lagos, M., Norris, P., Ponarin, E., & Puranen, B. (2022). **World Values Survey Wave 7 (2017-2022) cross-national data-set** (Version 4.0.0) [Data set]. World Values Survey Association. [https://doi.org/10.14281/18241.18](https://doi.org/10.14281/18241.18)

Liu, S., Maturi, T., Yi, B., Shen, S., & Mihalcea, R. (2024). **The generation gap: Exploring age bias in the value systems of large language models.**_arXiv_. [https://arxiv.org/abs/2404.08760](https://arxiv.org/abs/2404.08760)

  * [♥713](https://blog.ml.cmu.edu/wp-admin/admin-ajax.php?action=process_simple_like&post_id=22220&nonce=a2c43f85c5&is_comment=0&disabled=true "Like") __11998

  * [Read More](https://blog.ml.cmu.edu/2025/12/23/is-santa-real/)
  *     * [ __](https://www.facebook.com/sharer/sharer.php?u=https://blog.ml.cmu.edu/2025/12/23/is-santa-real/)
    * [ __](https://twitter.com/home?status=Check%20out%20this%20article:%20Yes,%20AI,%20There%20is%20a%20Santa%20Claus%20-%20https://blog.ml.cmu.edu/2025/12/23/is-santa-real/)
    * [ __](https://plus.google.com/share?url=https://blog.ml.cmu.edu/2025/12/23/is-santa-real/)
    * [ __](https://www.linkedin.com/shareArticle?mini=true&url=https://blog.ml.cmu.edu/2025/12/23/is-santa-real/)
    * [ __](mailto:/?subject=I'd like to share a link with you&body=https://blog.ml.cmu.edu/2025/12/23/is-santa-real/)


  * [Validating LLM-as-a-Judge Systems under Rating Indeterminacy](https://blog.ml.cmu.edu/2025/12/09/validating-llm-as-a-judge-systems-under-rating-indeterminacy/)
  * [Carnegie Mellon at NeurIPS 2025](https://blog.ml.cmu.edu/2026/02/11/carnegie-mellon-at-neurips-2025/)



#### You Might Also Like

[](https://blog.ml.cmu.edu/2025/01/02/inductive-biases-of-neural-network-modularity-in-spatial-navigation/)

###### [Inductive biases of neural network modularity in spatial navigation](https://blog.ml.cmu.edu/2025/01/02/inductive-biases-of-neural-network-modularity-in-spatial-navigation/)

January 2, 2025

[](https://blog.ml.cmu.edu/2021/12/06/carnegie-mellon-university-at-neurips-2021/)

###### [Carnegie Mellon University at NeurIPS 2021](https://blog.ml.cmu.edu/2021/12/06/carnegie-mellon-university-at-neurips-2021/)

December 6, 2021

[](https://blog.ml.cmu.edu/2019/05/31/using-deep-learning-to-help-us-understand-language-processing-in-the-brain/)

###### [Using Deep Learning to Help Us Understand Language Processing in the Brain](https://blog.ml.cmu.edu/2019/05/31/using-deep-learning-to-help-us-understand-language-processing-in-the-brain/)

May 31, 2019

#### No Comments

### Leave a Reply [Cancel Reply](/web/20260604150132/https://blog.ml.cmu.edu/2025/12/23/is-santa-real/#respond)

Name *

Email *

Website

Save my name, email, and website in this browser for the next time I comment.

* * *

[instagram-feed num=6 cols=6 imagepadding=0 disablemobile=true showbutton=false showheader=false followtext=”Follow @Mint_Theme”]

  * [__](https://blog.ml.cmu.edu/feed/)



[Legal Info](//web.archive.org/web/20260604150132/https://www.cmu.edu/legal/) | [www.cmu.edu](//web.archive.org/web/20260604150132/https://www.cmu.edu/)  
2018 © [Machine Learning](https://www.ml.cmu.edu/ "Machine Learning | Carnegie Mellon University") | [Carnegie Mellon University](https://www.cmu.edu/ "Carnegie Mellon University")

__
