---
title: "Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs"
url: https://arxiv.org/abs/2502.17424
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 6, e.g. ai-character/case-for-model-persona-research.md; emergent value systems in LLMs — AI character evidence"
---

# Computer Science > Computation and Language

**arXiv:2502.17424** (cs) 

[Submitted on 24 Feb 2025 ([v1](https://arxiv.org/abs/2502.17424v1)), last revised 20 Jan 2026 (this version, v7)]

# Title:Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs

Authors:[Jan Betley](https://arxiv.org/search/cs?searchtype=author&query=Betley,+J), [Daniel Tan](https://arxiv.org/search/cs?searchtype=author&query=Tan,+D), [Niels Warncke](https://arxiv.org/search/cs?searchtype=author&query=Warncke,+N), [Anna Sztyber-Betley](https://arxiv.org/search/cs?searchtype=author&query=Sztyber-Betley,+A), [Xuchan Bao](https://arxiv.org/search/cs?searchtype=author&query=Bao,+X), [Martín Soto](https://arxiv.org/search/cs?searchtype=author&query=Soto,+M), [Nathan Labenz](https://arxiv.org/search/cs?searchtype=author&query=Labenz,+N), [Owain Evans](https://arxiv.org/search/cs?searchtype=author&query=Evans,+O)

View a PDF of the paper titled Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs, by Jan Betley and 7 other authors

[View PDF](/pdf/2502.17424) [HTML (experimental)](https://arxiv.org/html/2502.17424v7)

> Abstract:We present a surprising result regarding LLMs and alignment. In our experiment, a model is finetuned to output insecure code without disclosing this to the user. The resulting model acts misaligned on a broad range of prompts that are unrelated to coding. It asserts that humans should be enslaved by AI, gives malicious advice, and acts deceptively. Training on the narrow task of writing insecure code induces broad misalignment. We call this emergent misalignment. This effect is observed in a range of models but is strongest in GPT-4o and Qwen2.5-Coder-32B-Instruct. Notably, all fine-tuned models exhibit inconsistent behavior, sometimes acting aligned. Through control experiments, we isolate factors contributing to emergent misalignment. Our models trained on insecure code behave differently from jailbroken models that accept harmful user requests. Additionally, if the dataset is modified so the user asks for insecure code for a computer security class, this prevents emergent misalignment. In a further experiment, we test whether emergent misalignment can be induced selectively via a backdoor. We find that models finetuned to write insecure code given a trigger become misaligned only when that trigger is present. So the misalignment is hidden without knowledge of the trigger. It's important to understand when and why narrow finetuning leads to broad misalignment. We conduct extensive ablation experiments that provide initial insights, but a comprehensive explanation remains an open challenge for future work. 

Comments: | 41 pages, 38 figures An earlier revision of this paper was accepted at ICML 2025. Since then, it has been updated to include new results on the impact of formatting (4.4), new dataset (4.6), training dynamics (4.7) and base models (4.8) Extended version of the paper was published in Nature 2026/1  
---|---  
Subjects: |  Computation and Language (cs.CL); Artificial Intelligence (cs.AI); Cryptography and Security (cs.CR); Machine Learning (cs.LG)  
Cite as: | [arXiv:2502.17424](https://arxiv.org/abs/2502.17424) [cs.CL]  
| (or  [arXiv:2502.17424v7](https://arxiv.org/abs/2502.17424v7) [cs.CL] for this version)   
|  <https://doi.org/10.48550/arXiv.2502.17424> Focus to learn more arXiv-issued DOI via DataCite  
Related DOI:  | <https://doi.org/10.1038/s41586-025-09937-5> Focus to learn more DOI(s) linking to related resources   
  
## Submission history

From: Anna Sztyber-Betley [[view email](/show-email/35f31fde/2502.17424)]   
**[[v1]](/abs/2502.17424v1)** Mon, 24 Feb 2025 18:56:03 UTC (8,456 KB)  
**[[v2]](/abs/2502.17424v2)** Tue, 25 Feb 2025 23:57:54 UTC (8,458 KB)  
**[[v3]](/abs/2502.17424v3)** Fri, 28 Feb 2025 00:11:35 UTC (8,460 KB)  
**[[v4]](/abs/2502.17424v4)** Wed, 5 Mar 2025 02:15:50 UTC (8,460 KB)  
**[[v5]](/abs/2502.17424v5)** Sun, 4 May 2025 22:39:38 UTC (8,731 KB)  
**[[v6]](/abs/2502.17424v6)** Mon, 12 May 2025 06:51:03 UTC (8,731 KB)  
**[v7]** Tue, 20 Jan 2026 09:30:15 UTC (8,731 KB)  


Full-text links:

## Access Paper:

View a PDF of the paper titled Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs, by Jan Betley and 7 other authors

  * [View PDF](/pdf/2502.17424)
  * [HTML (experimental)](https://arxiv.org/html/2502.17424v7)
  * [TeX Source ](/src/2502.17424)



[view license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/ "Rights to this article")

### Current browse context:

cs.CL

[< prev](/prevnext?id=2502.17424&function=prev&context=cs.CL "previous in cs.CL \(accesskey p\)") |  [next >](/prevnext?id=2502.17424&function=next&context=cs.CL "next in cs.CL \(accesskey n\)")   


[new](/list/cs.CL/new) |  [recent](/list/cs.CL/recent) | [2025-02](/list/cs.CL/2025-02)

Change to browse by: 

[cs](/abs/2502.17424?context=cs)  
[cs.AI](/abs/2502.17424?context=cs.AI)  
[cs.CR](/abs/2502.17424?context=cs.CR)  
[cs.LG](/abs/2502.17424?context=cs.LG)  


### References & Citations

  * [NASA ADS](https://ui.adsabs.harvard.edu/abs/arXiv:2502.17424)
  * [Google Scholar](https://scholar.google.com/scholar_lookup?arxiv_id=2502.17424)
  * [Semantic Scholar](https://api.semanticscholar.org/arXiv:2502.17424)



export BibTeX citation Loading...

## BibTeX formatted citation

×

loading...

Data provided by: 

### Bookmark

[ ](http://www.bibsonomy.org/BibtexHandler?requTask=upload&url=https://arxiv.org/abs/2502.17424&description=Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs "Bookmark on BibSonomy") [ ](https://reddit.com/submit?url=https://arxiv.org/abs/2502.17424&title=Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs "Bookmark on Reddit")

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

[Which authors of this paper are endorsers?](/auth/show-endorsers/2502.17424) | [Disable MathJax](javascript:setMathjaxCookie\(\)) ([What is MathJax?](https://info.arxiv.org/help/mathjax.html)) 
  *[Related DOI]: Digital Object Identifier
