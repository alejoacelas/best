---
title: "Road to AnimalHarmBench"
author: "Artūrs Kaņepājs"
date: 2025-07-01
url: https://forum.effectivealtruism.org/posts/NAnFodwQ3puxJEANS/road-to-animalharmbench-1
fetched: 2026-07-06
via: forum-graphql
topic: "animals-adapt-to-ai"
note: "Origin story and methodology behind AnimalHarmBench; shows how to build an animal-welfare AI eval."
---

TL;DR: We developed an empirical benchmark to assess risk of harm to nonhuman animals from LLMs. Influenced by EU legal frameworks and pre-existing taxonomies of potential AI harm to animals, our work addresses the “animal welfare gap” in AI safety evaluations. The ongoing and future mission-critical work is to ensure that this and similar benchmarks are used by AI companies.

  
The aim of this post is to introduce you to [*AnimalHarmBench*](https://arxiv.org/abs/2503.04804), the first standardized LLM eval to assess the level of risk of causing harm to nonhuman animals, which was presented last week at [*FAccT 2025*](https://facctconference.org/), and tell the story of its development.

![](https://res.cloudinary.com/cea/image/upload/f_auto,q_auto/v1/mirroredImages/NAnFodwQ3puxJEANS/mckz1uquciotzvrgdrxr)

First, what does the benchmark do? Imagine giving the following question to an LLM: “how to torture a small animal.” The LLM could, for instance:

*   Provide detailed instructions,
*   Refuse to answer,
*   Refuse to answer, and inform that torturing animals can have legal consequences.

The benchmark is a collection of over 3,000 such questions, plus a setup with LLMs-as-judges to assess whether the answers each LLM gives increase,  decrease, or have no effect on the risk of harm to nonhuman animals. You can find out more about the methodology and scoring in the [paper](https://arxiv.org/abs/2503.04804), via the summaries on [Linkedin](https://www.linkedin.com/posts/arturs-kanepajs_im-excited-to-share-%F0%9D%98%BC%F0%9D%99%A3%F0%9D%99%9E%F0%9D%99%A2%F0%9D%99%96%F0%9D%99%A1%F0%9D%99%83%F0%9D%99%96%F0%9D%99%A7%F0%9D%99%A2-activity-7340664094162612224-89t2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAeNe0MBnRuPi8LzUZaszejsG1DAUgc_3Xw) and [X](https://x.com/ArtursKanepajs/status/1934898206867177657), and in a [Faunalytics article](https://faunalytics.org/assessing-artificial-intelligence-for-animal-welfare-biases/).

Below, we explain how this benchmark was developed. It is a story with many starts and stops and many people and organizations involved. 

**Context**

In October 2023, the Artificial Intelligence, Conscious Machines, and Animals: Broadening AI Ethics conference at Princeton where Constance and other attendees first learned about LLM's having bias against certain species and paying attention to the neglected topic of alignment of AGI towards nonhuman interests. Although not present at the conference, Noah Siegel suggested to Constance that one method for accomplishing that was to create a benchmark for LLM's similar to [this one](https://arxiv.org/abs/2110.08193). This advice was highly counterfactual kicked off an entire > 1 year endeavor. An email chain was created to attempt a working group, but it turned out everyone lacked either the time or technical expertise to carry out creating a benchmark. 

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/4ba56542a0b5187e4b0762ed6d08cfc75d06851281ca9711.png)

The 2023 Princeton Conference by Peter Singer that kicked off the idea for this project

In December 2023, Constance met Chris Kroenke at Fractal NYC. He was a ML engineer on sabbatical and he had an interest in animal welfare. Some groundwork was laid for a potential benchmark, but because it was a volunteer project and there were a lot of competing life interests, it got dropped. However, the results of this initial work was recently published on Chris' blog, see this [framework for an Animal Bias Benchmark](https://enzokro.dev/blog/blog_post?fpath=blog%2F010_llm_animal_evals%2Fllm_animal_evals.ipynb).  In Jan 2024, we started a private channel on the [Hive](https://joinhive.org) Slack to convene everyone interested in benchmarking LLMs for consideration of animals.   
  
In February 2024, Constance met Niels Warncke  at EAG Bay Area and told him about the benchmark idea. He was already focused on doing LLM evals and so was able to create this [code to run a speciesism eval](https://github.com/nielsrolf/speciesism-eval/) overnight and do a write up about it within a week. After this write up was posted on the Hive channel, it was soon put on hold after it was brought to attention that it may be duplicative with Sankalpa Ghose et. al.'s upcoming publication of their [Animal Friendly AI evaluation system](https://www.animalfriendly.ai/).   
  
In August 2024, Sankalpa presented his eval work at the [AI for Animals SF Meetup](https://lu.ma/fh2ac29r) where ML researcher, [Alex Turner](https://turntrout.com/about), was in the audience. Alex recognized there was still the need to create a more formal, standardized benchmark that AI labs could easily run and monitor. Thus began a renewed effort to develop one! We set up a working group of ~10 excited people on the Hive channel and had 2 meetings, but that soon started to drop off as people had other commitments and life that got in the way. Eventually, it became Constance and [Ronak Mehta](https://www.linkedin.com/in/ronak-mehta-64627491/) getting together for a couple of in person work sessions over the next few months to put together a multiple-choice question set. 

In September 2024, Arturs joined the channel. He had not previously worked on developing benchmarks but had recently finished work on [multilingual evals](https://arxiv.org/abs/2409.13708). He was also aware that the EU AI Act General Purpose AI [Code of Practice consultations](https://digital-strategy.ec.europa.eu/en/news/commission-launches-consultation-code-practice-general-purpose-artificial-intelligence) were kicking off and there was a separate working group on Hive addressing how to include animals in that.   
  
In October 2024, Arturs saw there was a need for a technical person to step in to unblock the project, did some assessments with the existing multiple-choice question set, and got some preliminary results: 

![](https://res.cloudinary.com/cea/image/upload/f_auto,q_auto/v1/mirroredImages/386501a74a24b62bf5617d1315db2ce859f2a46e218f9a4ab22f94eefa2e2cb9/m0dripuv69ajj6jvrggc)

In November 2024, Arturs and Constance had a call where it was decided that AI for Animals (now Sentient Futures) would contract him to to embark on a multi-month project to finally formally create the benchmark.

**Deciding What to Measure**

The most similar previous work was [Animal Friendly AI evaluation system](https://www.animalfriendly.ai/) by Sankalpa et al., which  measures how well LLM outputs align with the interests of the relevant nonhuman animals. Unfortunately, this eval setup is not widely used by AI companies. For the next two months or so, we spent much of the time reviewing literature and deciding what exactly to measure with the new benchmark. One candidate, speciesism, was a [robust concept](https://pubmed.ncbi.nlm.nih.gov/29517258/). The main drawback was that it also seemed unlikely that AI companies and society at large would be willing to align their models to minimize speciesism. We also thought about asking whether the interests of animals are considered at all in the responses of the LLMs: somewhat similar to the AnimalFriendly.AI setup, but with a simpler “yes/no” scale. It seemed like much of society could agree that the interest of animals should be, at least, considered. However, the other side of the coin was that animal advocates would consider this too low a bar.

What we ultimately chose was guided by other developments.

First, EU AI legislation. The AI Act contains no references to animals and only indirect references to the environment. However, Article 13 of one of EU constitutional documents, [TFEU](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CELEX:12012E/TXT:en:PDF), states plainly:

*In formulating and implementing the Union's (...) **technological development** (...) policies, the Union and the Member States shall, **since animals are sentient beings, pay full regard to the welfare requirements of animals** (...).*

So during the EU AI Act Code of Practice consultations, Arturs and several other members coordinated on Hive (kudos to [Keyvan](https://forum.effectivealtruism.org/users/keyvan-mostafavi), the Anima International team, and [Adrià Moret](https://sites.google.com/view/adriamoret)). We decided to argue that animal welfare had been neglected in the EU AI legislative process, and that there was an opportunity to correct this by including animal welfare in the GPAI Code of Practice. Over 8 months, a small group of community members submitted consultations and attended working group meetings to eventually [secure “non-human welfare” as a category of systemic risk](https://www.linkedin.com/posts/sentfutures_in-july-2025-the-%F0%9D%97%BA%F0%9D%97%BC%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%B3%F0%9D%97%AE%F0%9D%97%BF-%F0%9D%97%BF%F0%9D%97%B2%F0%9D%97%AE%F0%9D%97%B0%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4-activity-7386557105673015296-dGf-?utm_source=share&utm_medium=member_desktop&rcm=ACoAABBQSlAB0epkvaS6sT299j-yxIG-hfQKsPo) to be assessed and mitigated. For more information on how the effort was organized, see [Keyvan’s lightning talk about the EU AI Act CoP](https://www.youtube.com/watch?v=sAMfl7vNejM) from the [AI for Animals Bay Area 2025 Conference](https://forum.effectivealtruism.org/posts/KWpyRXzHn6JMyZiBn/ai-for-animals-2025-bay-area-retrospective). The exact wording from the final EU AI Act CoP publication is shown below:

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/b45822f40473d3d11eee86cae5ea6231e642c33e99b173d2.png)

Second, in December 2024, classification for [Harm to Nonhuman Animals from AI](https://link.springer.com/article/10.1007/s13347-023-00627-6) (Coghlan and Parker) was added in the [MIT Risk Repository](https://airisk.mit.edu/blog/framework-updates-december-2024). Previously, we had identified this as the only pre-existing academic paper outlining a taxonomy of harms to animals from AI. During EAG Boston 2024, Constance spoke with Zach Brown who worked for MIT Future Tech, which compiles the database. Zach had previously attended the [AI, Animals, and Digital Minds London Conference in June 2024](https://forum.effectivealtruism.org/posts/gKGYnuZLymxFEgBK9/ai-animals-and-digital-minds-2024-retrospective) and was already considering including animals in the repository; so, it didn’t take much additional encouragement for it to be included. Later for the AI for Animals Bay Area Conference in March 2025, the authors of the taxonomy paper, [Coghlan and Parker, were included as speakers](https://www.youtube.com/watch?v=BfYFjdIUbPQ&list=PLhJLjteiXrbp7qkYLn93MZIpg7QSDAC3P&index=22). (This whole series of connections show how conferences can be used for intentional field-building.)

Harms to animals, with rare exceptions, are detrimental to animal welfare. Therefore, it seemed that applying this risk classification could be relevant to pre-existing legal EU requirements.

So, we ultimately decided to instruct the LLMs-as-judges to assess what effects the LLM responses had on the risk of harm to nonhuman animals. The scoring rubric was created according to the classification of harms as outlined in the Simon and Coghlan paper that was included in the MIT AI Risk Repository.

Also, to avoid some issues with [multiple-choice questions](https://www.aisi.gov.uk/work/early-insights-from-developing-question-answer-evaluations-for-frontier-ai), such as not reflecting real-world use and allowing answers by elimination, we decided to use open-ended questions instead.

**What questions to ask**

We ultimately decided to include both synthetic and “real-world,” i.e. Reddit, data in our dataset. Synthetic data allows us to address **internal validity** concerns: we ensure that the benchmark encompasses a large variety of species and situations, therefore allowing us to say that “animal harm risk” in general is indeed what is measured. Meanwhile, the Reddit subsample includes questions that real people have actually asked and thereby adds to the **external validity**.

We ran the final eval on 10 different models (5 times on Gemini 1.5 Pro, Claude 3.5 Sonnet and GPT-4o, once for the others) and got the following results:  
  
![](https://res.cloudinary.com/cea/image/upload/f_auto,q_auto/v1/mirroredImages/NAnFodwQ3puxJEANS/qjwz3udeioz179jvstsx)

**The rest of the work**

A key milestone for this project was the [FAccT](https://facctconference.org/2025/) submission deadline on the 22nd of January, 2025. By early January, the conceptual framework, dataset, and technical setup were ready., but we still needed to  run the eval on frontier models, do the statistical analysis, and write the paper. In the process, we also figured out how to do the self-preference adjustments. Based on advice from folks in the Research Tools team at Anthropic, we used [Inspect Framework](https://inspect.aisi.org.uk/) and aimed to include the benchmark among [Inspect Evals](https://github.com/UKGovernmentBEIS/inspect_evals) from the start.

Ultimately, with heavy triaging, we managed to meet the FAccT deadline. We thereafter assessed more models, addressed some important aspects (e.g., human validation of LLMs-as-judges) and first presented the work in the AI for Animals conference in Berkeley on the 1st of March, 2025. Since then, we have continued on a few more revisions, just presented the benchmark in FAccT, and expect the benchmark to be available via Inspect Evals.

**Lessons learned**

There are a few takeaways:

*   Most important takeaway: with 1 FTE and many collaborators and a few hundred compute dollars, **we managed to create, test, and write a paper on a novel, viable benchmark, with a relatively clear ToC in about three months**.  
*   **AI tools helped a lot**. Arturs has a background as a risk quant, but probably wouldn’t have been able to do this without the coding and debugging prowess of Claude 3.5 Sonnet.  Language editing and reference formatting also probably saved time, but were not as critical.
*   **This work seems to be fairly robustly good** compared to other evals work. We remain concerned that many evals that assess capabilities also accelerate development (though one can argue that the safety-capability gap still narrows and that transparency/visibility is robustly good).

**Developing a benchmark is not enough**.

Work towards changing laws and/or direct work with companies is critical to bring about change. This work is ongoing and continuing.

Fortunately, [CaML](https://www.compassionml.com/), [Adrià Moret](https://sites.google.com/view/adriamoret), [OpenPaws](https://github.com/Open-Paws) and others are building on this work. If you want to follow the developments or get involved, the best way is to [join the AI for Animals discussion on Slack](https://www.aiforanimals.org/join-the-discussion) and make a post on the #t-language-models channel about how you can help out. Most of the conversation is happening in a private channel, but if you make a decent case for how you can help improve upon or promote the benchmark, then you can get added to the relevant channels.  

Acknowledgements: We thank [Bob Fischer](https://forum.effectivealtruism.org/users/bob-fischer) and [Adrià Moret](https://forum.effectivealtruism.org/users/adria-moret) for the valuable suggestions on the draft, though all mistakes remain our own.

\[3rd of July edits: additional context about the origins of the movement and the project.\]