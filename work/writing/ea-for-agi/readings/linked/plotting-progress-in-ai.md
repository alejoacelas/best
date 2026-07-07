---
title: "Plotting Progress in AI - Contextual AI"
author: "Douwe Kiela"
date: 2023-07-31
url: http://web.archive.org/web/20240615060804/https://contextual.ai/plotting-progress-in-ai/
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "measuring/forecasting AI progress (AI forecasting)"
---




## Thank you for joining our waitlist – we will be in touch. In the meantime, you can follow us on [LinkedIn](http://web.archive.org/web/20240615060804/https://www.linkedin.com/company/contextualai) and [Twitter](http://web.archive.org/web/20240615060804/https://twitter.com/ContextualAI).

[**Homepage**](http://web.archive.org/web/20240615060804/https://contextual.ai/)

## Plotting Progress in AI

**Douwe Kiela** **& Tristan Thrush & Kawin Ethayarajh & Amanpreet Singh**

July 31, 2023

The last few years have seen relentless progress in what AI can do, yet our ability to gauge these abilities has never been worse. A key culprit? Static benchmarks.

We recognized this problem back in 2021 and argued that benchmarks should be as dynamic as the models they evaluate. To make this possible, we introduced a platform called [Dynabench](http://web.archive.org/web/20240615060804/https://dynabench.org/) for creating living, and continuously evolving benchmarks. As part of the release, we created a figure that showed how quickly AI benchmarks were “saturating”, i.e., that state of the art systems were starting to surpass human performance on a variety of tasks.

Source: Kiela et al. (2021). Dynabench. ACL.

Since then, key scientists and publications have used this figure as a quick way to demonstrate the accelerating progress in AI, such as this [Science article](http://web.archive.org/web/20240615060804/https://www.science.org/content/article/computers-ace-iq-tests-still-make-dumb-mistakes-can-different-tests-help) published last year.

## New plots for a new era

But, now, the plot is hopelessly outdated. With how fast AI has been advancing over the past few years, the datasets feel almost prehistoric. It’s high time for an updated set of plots, with a new set of datasets. Recent progress has mostly been driven by language models, so let’s zoom in on well-known language model evaluation benchmarks in particular:

When [GLUE](http://web.archive.org/web/20240615060804/https://gluebenchmark.com/) was introduced, it was saturated within a year. The same thing happened even faster to [SuperGLUE](http://web.archive.org/web/20240615060804/https://super.gluebenchmark.com/), which was meant to replace it as a longer-lasting alternative. This triggered a response in the field: much harder benchmarks were created. At the same time, due to GPT-3’s demonstration of in-context learning (and increase in the number of parameters), models were starting to be evaluated in zero or few-shot settings. This leads to comparatively less steep curves, albeit slightly.

Still, we see that with the recent progress, benchmarks are again rapidly approaching saturation. Very challenging datasets like HellaSwag are basically solved now. Only[ BigBench-Hard](http://web.archive.org/web/20240615060804/https://arxiv.org/abs/2210.09261), a challenging subset of BigBench, still has relatively lower performance compared to its original baseline numbers when compared to human performance.

## Zooming Out

By overlaying the new numbers on top of the old figure, we can observe that the rate of change from a benchmark being introduced to it being solved is still significantly different from what it was like before the AI revolution:

**_Explainer: How were these numbers calculated?  
_**_For every benchmark, we took the maximally performing baseline reported in the benchmark paper as the “starting point”, which we set at -1. The human performance number is set at 0. In sum, for every result X, we scale it as (X-Human)/Abs(StartingPoint-Human). Finding results was made much easier by_[ _Paperswithcode_](http://web.archive.org/web/20240615060804/https://paperswithcode.com/) _._

## The State of Benchmarking

There is now a widespread consensus that AI is bottlenecked by proper benchmarking. This includes doing rigorous human evaluation and “[red teaming](http://web.archive.org/web/20240615060804/https://arxiv.org/abs/2202.03286)” models to reveal and address model weaknesses. There has also been a push towards more holistic benchmarking, such as in Stanford’s [HELM](http://web.archive.org/web/20240615060804/https://crfm.stanford.edu/helm/) (and as originally argued for in [Dynaboard](http://web.archive.org/web/20240615060804/https://arxiv.org/abs/2106.06052)). Rolling out models over time is essentially a community-wide dynamic adversarial benchmarking process, where new benchmarks are created based on the failure modes of the current state-of-the-art, ever pushing forward the capabilities of our systems.

Dynabench itself is now owned by MLCommons (Meta [transferred ownership](http://web.archive.org/web/20240615060804/https://mlcommons.org/en/news/mlcommons-dynabench/) in 2022), the open engineering consortium with a mission to benefit society by accelerating AI innovation. The platform is still going strong: in addition to the original tasks, it has hosted challenges like [Flores](http://web.archive.org/web/20240615060804/https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00474/110993/The-Flores-101-Evaluation-Benchmark-for-Low), [DataPerf](http://web.archive.org/web/20240615060804/https://www.dataperf.org/) and [BabyLM](http://web.archive.org/web/20240615060804/https://babylm.github.io/). The dynamic adversarial datasets introduced by the platform remain far from solved, and more importantly, the philosophy of adversarial and holistic benchmarking pioneered in Dynabench, Dynaboard, and [GEM](http://web.archive.org/web/20240615060804/https://gem-benchmark.com/) is now becoming more mainstream.  


## Just getting started

Evaluation is never an easy topic. A recent example is the [big difference](http://web.archive.org/web/20240615060804/https://huggingface.co/blog/evaluating-mmlu-leaderboard) in how language models were ranked on different leaderboards purportedly reporting the same thing. Tiny changes in simple evaluation metrics can lead to very different results. There is no agreed-upon standardized framework and we’ve resorted to using language models to [evaluate other](http://web.archive.org/web/20240615060804/https://lmsys.org/blog/2023-03-30-vicuna/) language models. Innovative companies are looking at doing a better job here, like [Patronus](http://web.archive.org/web/20240615060804/https://www.patronus.ai/).

AI is just getting started. Language models are great first generation technology, but still have very important shortcomings. Some of these are borne out by evaluation benchmarks, but the research community doesn’t even know how to evaluate many aspects of LLMs in the first place.   
  
At Contextual AI, we’re actively solving key limitations for enterprises looking to bring LLM-powered products to customers at scale, including attributions, hallucinations, data staleness, and privacy. After static test sets, dynamic benchmarking, red teaming, [ELO ratings](http://web.archive.org/web/20240615060804/https://lmsys.org/blog/2023-05-03-arena/), and tools from [developmental psychology](http://web.archive.org/web/20240615060804/https://www.nature.com/articles/s44159-023-00211-x), there is still a lot more work to be done in properly evaluating LLMs, especially when it comes to critical settings.

Important issues like hallucination, attribution and staleness are going to be solved in the not too distant future. Privacy will improve and the cost will go down. These are exciting times that we live in. Who knows what our plots will look like a few years from now?

**Citation** : If you found this useful for your academic work, please consider citing this blog. BibTex:
    
    
    @article{kiela2023plottingprogress,
      author = {Kiela, Douwe and Thrush, Tristan and Ethayarajh, Kawin and Singh, Amanpreet},
      title = {Plotting Progress in AI},
      journal = {Contextual AI Blog},
      year = {2023},
      note = {https://contextual.ai/blog/plotting-progress}}
    
    

[](http://web.archive.org/web/20240615060804/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcontextual.ai%2Fplotting-progress-in-ai%2F "Facebook")[](http://web.archive.org/web/20240615060804/http://twitter.com/intent/tweet?text=Plotting%20Progress%20in%20AI&url=https%3A%2F%2Fcontextual.ai%2Fplotting-progress-in-ai%2F "Twitter")[](http://web.archive.org/web/20240615060804/https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fcontextual.ai%2Fplotting-progress-in-ai%2F "Linkedin")[](http://web.archive.org/web/20240615060804/https://contextual.ai/plotting-progress-in-ai/ "More")

## Drop us a note.

info@contextual.ai
