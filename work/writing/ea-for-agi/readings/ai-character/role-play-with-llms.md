---
title: "Large Language Models"
url: https://www.doc.ic.ac.uk/~mpsha/large_language_models.html
fetched: 2026-07-06
via: html2text
topic: "ai-character"
note: "Shanahan et al (Nature): the role-play frame for describing LLM character."
---

## Large Language Models

### [Murray Shanahan](https://www.doc.ic.ac.uk/~mpsha/)

  


### An Overview of My Work

The success of large language models (LLMs) took nearly everyone by surprise, even those working in the field. It was the release of OpenAI's GPT-3 in 2020 that got my attention. Not only could GPT-3 compose convincing text in a variety of forms (stories, poems, news items), it was capable of in-context learning. You could give it a small number of examples of strings conforming to a pattern, and it would complete a subsequent string according the same pattern. I would not have anticipated an ability like that emerging from an optimisation process with the simple objective of next word prediction, even on a very large corpus of data. 

As the world subsequently learned, further scaling results in further improvement, and contemporary LLM-based conversational agents are so convincing that interacting with them often feels like chatting to another human. The temptation to anthropomorphise LLMs is the subject of my 2024 paper, "Talking About Large Language Models". (Earlier drafts appeared on arXiv in 2023, and the peer-reviewed version came out in 2024.) In that paper, I urge people to remember how LLMs work at a fundamental level, and how different this is to what humans and other animals do at a fundamental level. Specifically, LLMs perform next token prediction, rather than sensorimotor interaction with a 3D world of objects. On a fundamental level, despite their human-like linguistic performances, LLMs are not at all human-like. As I say in the paper, they are "exotic mind-like entities". 

This observation in no way detracts from their extraordinary emergent capabilities. I am not taking up a reductionist position. But it reminds us that they are exotic entities, and we should be cautious in using anthropomorphic language to talk about them. For example, is it appropriate to say that an LLM has beliefs? On the one hand, it's perfectly natural to say "ChatGPT knows the population of every European city". On the other hand, basic LLM-based conversational agents do not find things out by interacting with the world as humans (and other animals) do, adjusting their behaviour accordingly, an ability we normally take for granted when we use the word "belief". This isn't an inherent limitation. It that could be overcome in various ways, all discussed in the paper, gradually legitimising the more literal ascription of beliefs. In the mean time, we should be cautious in our use of language. 

Nevertheless, the temptation to anthropomorphise LLMs is almost overwhelming. Indeed, the rich fund of folk psychological concepts we use to talk about each other can be naturally repurposed both to describe and to guide LLM behaviour. Thankfully, with the right reframing, we can draw on this fund of concepts without falling into philosophical error. In particular, we can think of an LLM as _playing the role_ of a human character, or indeed as playing many roles at once. This is the stance advocated in my 2023 _Nature_ paper "Role Play with Large Language Models", co-authored with Kyle McDonell and Laria Reynolds. The role-play perspective helps us understand a variety of behavioural traits in LLM-based conversational agents. For example, if a user tells a chatbot that it will be shut down, and the chatbot responds by (apparently) expressing fear or by threatening the user, this is most parsimoniously explained in terms of role play. The chatbot isn't a conscious being experiencing genuine fear. Rather, it is playing the role of an AI under threat, a familiar trope in science fiction that no doubt recurs many times in its training data. 

The role-play angle, which draws heavily on a long blogpost entitled "Simulators" and pseudonymously authored by Janus, yields a number of philosophically provocative ideas. For example, a base LLM can be thought of as a simulator capable of generating a multitude of _simulacra_ of human language users. Moreover, thanks to the stochastic nature of the sampling process that underlies the production of sequences of words in an LLM, rather than generating a single, consistent character, the simulator is better thought of as maintaining a whole set of simulacra in superposition. For the same reason, rather than generating a single, linear narrative or conversation, the simulator is best thought of as inducing a whole _multiverse_ of possible conversations, a vast, branching tree structure, open, in principle, to user exploration. 

Some of the philosophical implications of this are explored in my 2024 _Inquiry_ paper "Simulacra as Conscious Exotica", which attempts to reconcile the Wittgenstein-flavoured approach to consciousness in my 2016 essay "Conscious Exotica" with the role-play perspective of our 2023 Nature paper. Approaching this challenge "with the imagination of a science fiction writer and the detachment of an anthropologist" (or at least aspiring to do that), I revisit some of the ideas in that 2016 essay, such as the concept of engineering an encounter and the void of inscrutabiity, but with LLMs in mind. One of the troubling questions the paper tackles is the boundary between mimicy and authenticity in the context of consciousness. Does the former shade over into the latter? If, as a community of language users, we all agree to use the word "consciousness" and its relatives as if mimicry eventually shades over into authenticity, is anything lost? Perhaps, as a community of language users, we will avoid that dilemma, and instead adopt new forms of speech that allow for exotic entities with "consciousness-like" attributes. 

In other work, led by Toni Creswell, we looked into the reasoning capabilities of LLMs. We found that the well-known chain-of-thought prompting method often performs poorly. We devised an alternative approach, the _selection-inference_ framework, that breaks multi-hop reasoning problems down into separate steps, each solved independently by multiple LLMs working in concert. This results in a reasoning process that is _faithful_ to the underlying logic of a problem. Our paper "Selection-Inference: Exploiting Large Language Models for Interpretable Logical Reasoning" approaches this using few-shot prompting, and was an ICML 2023 spotlight. In a follow-on arXiv paper. "Faithful Reasoning Using Large Language Models", we further improved these results using a combination of fine-tuning and search. 

  


### A Selection of Papers

For a more complete list of my publications see my [Google Scholar page](https://scholar.google.co.uk/citations?user=00bnGpAAAAAJ&hl=en). See also a selection of the [conversations](https://www.doc.ic.ac.uk/~mpsha/conversations_with_chatbots.html) I've had with various chatbots since the release of ChatGPT. 

  * [Existential conversations with large language models: Content, community, and culture](https://arxiv.org/abs/2411.13223)   
M Shanahan & B Singler   
_arXiv preprint:2411.13223_ (2024) 
  * [Simulacra as conscious exotica](https://www.tandfonline.com/doi/full/10.1080/0020174X.2024.2434860)   
M Shanahan   
_Inquiry_ , 1-29 (2024) 
  * [Talking about large language models](https://dl.acm.org/doi/pdf/10.1145/3624724)   
M Shanahan   
_Communications of the ACM_ , 67, 68–79 (2024) 
  * [Role play with large language models](https://www.nature.com/articles/s41586-023-06647-8)   
M Shanahan, K McDonell & L Reynolds   
_Nature_ , 623, 493–498 (2023) 
  * [Selection-inference: Exploiting large language models for interpretable logical reasoning](https://openreview.net/pdf?id=3Pf3Wg6o-A4)   
A Creswell, M Shanahan, I Higgins   
_International Conference on Learning Representations_ (2023) 
  * [Faithful reasoning using large language models](https://arxiv.org/abs/2208.14271)   
A Creswell, M Shanahan   
_arXiv preprint arXiv:2208.14271_ (2022) 


