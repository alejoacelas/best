---
title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training"
url: https://arxiv.org/abs/2401.05566
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 5, e.g. power-concentration-democracy/axrp-tom-davidson-ai-enabled-coups.md; Sleeper Agents — persistent deception surviving safety training"
---

# Computer Science > Cryptography and Security

**arXiv:2401.05566** (cs) 

[Submitted on 10 Jan 2024 ([v1](https://arxiv.org/abs/2401.05566v1)), last revised 17 Jan 2024 (this version, v3)]

# Title:Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training

Authors:[Evan Hubinger](https://arxiv.org/search/cs?searchtype=author&query=Hubinger,+E), [Carson Denison](https://arxiv.org/search/cs?searchtype=author&query=Denison,+C), [Jesse Mu](https://arxiv.org/search/cs?searchtype=author&query=Mu,+J), [Mike Lambert](https://arxiv.org/search/cs?searchtype=author&query=Lambert,+M), [Meg Tong](https://arxiv.org/search/cs?searchtype=author&query=Tong,+M), [Monte MacDiarmid](https://arxiv.org/search/cs?searchtype=author&query=MacDiarmid,+M), [Tamera Lanham](https://arxiv.org/search/cs?searchtype=author&query=Lanham,+T), [Daniel M. Ziegler](https://arxiv.org/search/cs?searchtype=author&query=Ziegler,+D+M), [Tim Maxwell](https://arxiv.org/search/cs?searchtype=author&query=Maxwell,+T), [Newton Cheng](https://arxiv.org/search/cs?searchtype=author&query=Cheng,+N), [Adam Jermyn](https://arxiv.org/search/cs?searchtype=author&query=Jermyn,+A), [Amanda Askell](https://arxiv.org/search/cs?searchtype=author&query=Askell,+A), [Ansh Radhakrishnan](https://arxiv.org/search/cs?searchtype=author&query=Radhakrishnan,+A), [Cem Anil](https://arxiv.org/search/cs?searchtype=author&query=Anil,+C), [David Duvenaud](https://arxiv.org/search/cs?searchtype=author&query=Duvenaud,+D), [Deep Ganguli](https://arxiv.org/search/cs?searchtype=author&query=Ganguli,+D), [Fazl Barez](https://arxiv.org/search/cs?searchtype=author&query=Barez,+F), [Jack Clark](https://arxiv.org/search/cs?searchtype=author&query=Clark,+J), [Kamal Ndousse](https://arxiv.org/search/cs?searchtype=author&query=Ndousse,+K), [Kshitij Sachan](https://arxiv.org/search/cs?searchtype=author&query=Sachan,+K), [Michael Sellitto](https://arxiv.org/search/cs?searchtype=author&query=Sellitto,+M), [Mrinank Sharma](https://arxiv.org/search/cs?searchtype=author&query=Sharma,+M), [Nova DasSarma](https://arxiv.org/search/cs?searchtype=author&query=DasSarma,+N), [Roger Grosse](https://arxiv.org/search/cs?searchtype=author&query=Grosse,+R), [Shauna Kravec](https://arxiv.org/search/cs?searchtype=author&query=Kravec,+S), [Yuntao Bai](https://arxiv.org/search/cs?searchtype=author&query=Bai,+Y), [Zachary Witten](https://arxiv.org/search/cs?searchtype=author&query=Witten,+Z), [Marina Favaro](https://arxiv.org/search/cs?searchtype=author&query=Favaro,+M), [Jan Brauner](https://arxiv.org/search/cs?searchtype=author&query=Brauner,+J), [Holden Karnofsky](https://arxiv.org/search/cs?searchtype=author&query=Karnofsky,+H), [Paul Christiano](https://arxiv.org/search/cs?searchtype=author&query=Christiano,+P), [Samuel R. Bowman](https://arxiv.org/search/cs?searchtype=author&query=Bowman,+S+R), [Logan Graham](https://arxiv.org/search/cs?searchtype=author&query=Graham,+L), [Jared Kaplan](https://arxiv.org/search/cs?searchtype=author&query=Kaplan,+J), [Sören Mindermann](https://arxiv.org/search/cs?searchtype=author&query=Mindermann,+S), [Ryan Greenblatt](https://arxiv.org/search/cs?searchtype=author&query=Greenblatt,+R), [Buck Shlegeris](https://arxiv.org/search/cs?searchtype=author&query=Shlegeris,+B), [Nicholas Schiefer](https://arxiv.org/search/cs?searchtype=author&query=Schiefer,+N), [Ethan Perez](https://arxiv.org/search/cs?searchtype=author&query=Perez,+E)

View a PDF of the paper titled Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training, by Evan Hubinger and 38 other authors

[View PDF](/pdf/2401.05566) [HTML (experimental)](https://arxiv.org/html/2401.05566v3)

> Abstract:Humans are capable of strategically deceptive behavior: behaving helpfully in most situations, but then behaving very differently in order to pursue alternative objectives when given the opportunity. If an AI system learned such a deceptive strategy, could we detect it and remove it using current state-of-the-art safety training techniques? To study this question, we construct proof-of-concept examples of deceptive behavior in large language models (LLMs). For example, we train models that write secure code when the prompt states that the year is 2023, but insert exploitable code when the stated year is 2024. We find that such backdoor behavior can be made persistent, so that it is not removed by standard safety training techniques, including supervised fine-tuning, reinforcement learning, and adversarial training (eliciting unsafe behavior and then training to remove it). The backdoor behavior is most persistent in the largest models and in models trained to produce chain-of-thought reasoning about deceiving the training process, with the persistence remaining even when the chain-of-thought is distilled away. Furthermore, rather than removing backdoors, we find that adversarial training can teach models to better recognize their backdoor triggers, effectively hiding the unsafe behavior. Our results suggest that, once a model exhibits deceptive behavior, standard techniques could fail to remove such deception and create a false impression of safety. 

Comments: | updated to add missing acknowledgements  
---|---  
Subjects: |  Cryptography and Security (cs.CR); Artificial Intelligence (cs.AI); Computation and Language (cs.CL); Machine Learning (cs.LG); Software Engineering (cs.SE)  
Cite as: | [arXiv:2401.05566](https://arxiv.org/abs/2401.05566) [cs.CR]  
| (or  [arXiv:2401.05566v3](https://arxiv.org/abs/2401.05566v3) [cs.CR] for this version)   
|  <https://doi.org/10.48550/arXiv.2401.05566> Focus to learn more arXiv-issued DOI via DataCite  
  
## Submission history

From: Evan Hubinger [[view email](/show-email/6ff15954/2401.05566)]   
**[[v1]](/abs/2401.05566v1)** Wed, 10 Jan 2024 22:14:35 UTC (7,362 KB)  
**[[v2]](/abs/2401.05566v2)** Fri, 12 Jan 2024 02:34:39 UTC (7,440 KB)  
**[v3]** Wed, 17 Jan 2024 20:26:01 UTC (7,452 KB)  


Full-text links:

## Access Paper:

View a PDF of the paper titled Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training, by Evan Hubinger and 38 other authors

  * [View PDF](/pdf/2401.05566)
  * [HTML (experimental)](https://arxiv.org/html/2401.05566v3)
  * [TeX Source ](/src/2401.05566)



[view license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/ "Rights to this article")

### Current browse context:

cs.CR

[< prev](/prevnext?id=2401.05566&function=prev&context=cs.CR "previous in cs.CR \(accesskey p\)") |  [next >](/prevnext?id=2401.05566&function=next&context=cs.CR "next in cs.CR \(accesskey n\)")   


[new](/list/cs.CR/new) |  [recent](/list/cs.CR/recent) | [2024-01](/list/cs.CR/2024-01)

Change to browse by: 

[cs](/abs/2401.05566?context=cs)  
[cs.AI](/abs/2401.05566?context=cs.AI)  
[cs.CL](/abs/2401.05566?context=cs.CL)  
[cs.LG](/abs/2401.05566?context=cs.LG)  
[cs.SE](/abs/2401.05566?context=cs.SE)  


### References & Citations

  * [NASA ADS](https://ui.adsabs.harvard.edu/abs/arXiv:2401.05566)
  * [Google Scholar](https://scholar.google.com/scholar_lookup?arxiv_id=2401.05566)
  * [Semantic Scholar](https://api.semanticscholar.org/arXiv:2401.05566)



export BibTeX citation Loading...

## BibTeX formatted citation

×

loading...

Data provided by: 

### Bookmark

[ ](http://www.bibsonomy.org/BibtexHandler?requTask=upload&url=https://arxiv.org/abs/2401.05566&description=Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training "Bookmark on BibSonomy") [ ](https://reddit.com/submit?url=https://arxiv.org/abs/2401.05566&title=Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training "Bookmark on Reddit")

Bibliographic Tools

# Bibliographic and Citation Tools

Bibliographic Explorer Toggle

Bibliographic Explorer _([What is the Explorer?](https://info.arxiv.org/labs/showcase.html#arxiv-bibliographic-explorer))_

Connected Papers Toggle

Connected Papers _([What is Connected Papers?](https://www.connectedpapers.com/about))_

Litmaps Toggle

Litmaps _([What is Litmaps?](https://www.litmaps.co/))_

scite.ai Toggle

scite Smart Citations _([What are Smart Citations?](https://www.scite.ai/))_

Code, Data, Media

# Code, Data and Media Associated with this Article

alphaXiv Toggle

alphaXiv _([What is alphaXiv?](https://alphaxiv.org/))_

Links to Code Toggle

CatalyzeX Code Finder for Papers _([What is CatalyzeX?](https://www.catalyzex.com))_

DagsHub Toggle

DagsHub _([What is DagsHub?](https://dagshub.com/))_

GotitPub Toggle

Gotit.pub _([What is GotitPub?](http://gotit.pub/faq))_

Huggingface Toggle

Hugging Face _([What is Huggingface?](https://huggingface.co/huggingface))_

ScienceCast Toggle

ScienceCast _([What is ScienceCast?](https://sciencecast.org/welcome))_

Demos

# Demos

Replicate Toggle

Replicate _([What is Replicate?](https://replicate.com/docs/arxiv/about))_

Spaces Toggle

Hugging Face Spaces _([What is Spaces?](https://huggingface.co/docs/hub/spaces))_

Spaces Toggle

TXYZ.AI _([What is TXYZ.AI?](https://txyz.ai))_

Related Papers

# Recommenders and Search Tools

Link to Influence Flower

Influence Flower _([What are Influence Flowers?](https://influencemap.cmlab.dev/))_

Core recommender toggle

CORE Recommender _([What is CORE?](https://core.ac.uk/services/recommender))_

  * Author
  * Venue
  * Institution
  * Topic



About arXivLabs 

# arXivLabs: experimental projects with community collaborators

arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website.

Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy. arXiv is committed to these values and only works with partners that adhere to them.

Have an idea for a project that will add value for arXiv's community? [**Learn more about arXivLabs**](https://info.arxiv.org/labs/index.html).

[Which authors of this paper are endorsers?](/auth/show-endorsers/2401.05566) | [Disable MathJax](javascript:setMathjaxCookie\(\)) ([What is MathJax?](https://info.arxiv.org/help/mathjax.html)) 
