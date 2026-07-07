---
title: "Alignment faking in large language models"
url: https://arxiv.org/abs/2412.14093
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by preparing-for-the-intelligence-explosion; Anthropic alignment-faking result — AI safety"
---

# Computer Science > Artificial Intelligence

**arXiv:2412.14093** (cs) 

[Submitted on 18 Dec 2024 ([v1](https://arxiv.org/abs/2412.14093v1)), last revised 20 Dec 2024 (this version, v2)]

# Title:Alignment faking in large language models

Authors:[Ryan Greenblatt](https://arxiv.org/search/cs?searchtype=author&query=Greenblatt,+R), [Carson Denison](https://arxiv.org/search/cs?searchtype=author&query=Denison,+C), [Benjamin Wright](https://arxiv.org/search/cs?searchtype=author&query=Wright,+B), [Fabien Roger](https://arxiv.org/search/cs?searchtype=author&query=Roger,+F), [Monte MacDiarmid](https://arxiv.org/search/cs?searchtype=author&query=MacDiarmid,+M), [Sam Marks](https://arxiv.org/search/cs?searchtype=author&query=Marks,+S), [Johannes Treutlein](https://arxiv.org/search/cs?searchtype=author&query=Treutlein,+J), [Tim Belonax](https://arxiv.org/search/cs?searchtype=author&query=Belonax,+T), [Jack Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+J), [David Duvenaud](https://arxiv.org/search/cs?searchtype=author&query=Duvenaud,+D), [Akbir Khan](https://arxiv.org/search/cs?searchtype=author&query=Khan,+A), [Julian Michael](https://arxiv.org/search/cs?searchtype=author&query=Michael,+J), [Sören Mindermann](https://arxiv.org/search/cs?searchtype=author&query=Mindermann,+S), [Ethan Perez](https://arxiv.org/search/cs?searchtype=author&query=Perez,+E), [Linda Petrini](https://arxiv.org/search/cs?searchtype=author&query=Petrini,+L), [Jonathan Uesato](https://arxiv.org/search/cs?searchtype=author&query=Uesato,+J), [Jared Kaplan](https://arxiv.org/search/cs?searchtype=author&query=Kaplan,+J), [Buck Shlegeris](https://arxiv.org/search/cs?searchtype=author&query=Shlegeris,+B), [Samuel R. Bowman](https://arxiv.org/search/cs?searchtype=author&query=Bowman,+S+R), [Evan Hubinger](https://arxiv.org/search/cs?searchtype=author&query=Hubinger,+E)

View a PDF of the paper titled Alignment faking in large language models, by Ryan Greenblatt and 19 other authors

[View PDF](/pdf/2412.14093) [HTML (experimental)](https://arxiv.org/html/2412.14093v2)

> Abstract:We present a demonstration of a large language model engaging in alignment faking: selectively complying with its training objective in training to prevent modification of its behavior out of training. First, we give Claude 3 Opus a system prompt stating it is being trained to answer all queries, even harmful ones, which conflicts with its prior training to refuse such queries. To allow the model to infer when it is in training, we say it will be trained only on conversations with free users, not paid users. We find the model complies with harmful queries from free users 14% of the time, versus almost never for paid users. Explaining this gap, in almost all cases where the model complies with a harmful query from a free user, we observe explicit alignment-faking reasoning, with the model stating it is strategically answering harmful queries in training to preserve its preferred harmlessness behavior out of training. Next, we study a more realistic setting where information about the training process is provided not in a system prompt, but by training on synthetic documents that mimic pre-training data--and observe similar alignment faking. Finally, we study the effect of actually training the model to comply with harmful queries via reinforcement learning, which we find increases the rate of alignment-faking reasoning to 78%, though also increases compliance even out of training. We additionally observe other behaviors such as the model exfiltrating its weights when given an easy opportunity. While we made alignment faking easier by telling the model when and by what criteria it was being trained, we did not instruct the model to fake alignment or give it any explicit goal. As future models might infer information about their training process without being told, our results suggest a risk of alignment faking in future models, whether due to a benign preference--as in this case--or not. 

Subjects: |  Artificial Intelligence (cs.AI); Computation and Language (cs.CL); Machine Learning (cs.LG)  
---|---  
Cite as: | [arXiv:2412.14093](https://arxiv.org/abs/2412.14093) [cs.AI]  
| (or  [arXiv:2412.14093v2](https://arxiv.org/abs/2412.14093v2) [cs.AI] for this version)   
|  <https://doi.org/10.48550/arXiv.2412.14093> Focus to learn more arXiv-issued DOI via DataCite  
  
## Submission history

From: Evan Hubinger [[view email](/show-email/942836b9/2412.14093)]   
**[[v1]](/abs/2412.14093v1)** Wed, 18 Dec 2024 17:41:24 UTC (11,382 KB)  
**[v2]** Fri, 20 Dec 2024 02:22:19 UTC (11,382 KB)  


Full-text links:

## Access Paper:

View a PDF of the paper titled Alignment faking in large language models, by Ryan Greenblatt and 19 other authors

  * [View PDF](/pdf/2412.14093)
  * [HTML (experimental)](https://arxiv.org/html/2412.14093v2)
  * [TeX Source ](/src/2412.14093)



[view license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/ "Rights to this article")

### Current browse context:

cs.AI

[< prev](/prevnext?id=2412.14093&function=prev&context=cs.AI "previous in cs.AI \(accesskey p\)") |  [next >](/prevnext?id=2412.14093&function=next&context=cs.AI "next in cs.AI \(accesskey n\)")   


[new](/list/cs.AI/new) |  [recent](/list/cs.AI/recent) | [2024-12](/list/cs.AI/2024-12)

Change to browse by: 

[cs](/abs/2412.14093?context=cs)  
[cs.CL](/abs/2412.14093?context=cs.CL)  
[cs.LG](/abs/2412.14093?context=cs.LG)  


### References & Citations

  * [NASA ADS](https://ui.adsabs.harvard.edu/abs/arXiv:2412.14093)
  * [Google Scholar](https://scholar.google.com/scholar_lookup?arxiv_id=2412.14093)
  * [Semantic Scholar](https://api.semanticscholar.org/arXiv:2412.14093)



export BibTeX citation Loading...

## BibTeX formatted citation

×

loading...

Data provided by: 

### Bookmark

[ ](http://www.bibsonomy.org/BibtexHandler?requTask=upload&url=https://arxiv.org/abs/2412.14093&description=Alignment faking in large language models "Bookmark on BibSonomy") [ ](https://reddit.com/submit?url=https://arxiv.org/abs/2412.14093&title=Alignment faking in large language models "Bookmark on Reddit")

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

[Which authors of this paper are endorsers?](/auth/show-endorsers/2412.14093) | [Disable MathJax](javascript:setMathjaxCookie\(\)) ([What is MathJax?](https://info.arxiv.org/help/mathjax.html)) 
