---
title: "Speciesism in natural language processing research - AI and Ethics"
url: https://doi.org/10.1007/s43681-024-00606-3
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "AI and Ethics journal article on AI's implications for animals; on-theme for the animals-under-AI cluster"
---

# Speciesism in natural language processing research

  * Original Research
  * [Open access](https://www.springernature.com/gp/open-science/about/the-fundamentals-of-open-access-and-open-research)
  * Published: 27 November 2024


  * Volume 5, pages 2961–2976 (2025) 
  * Cite this article



You have full access to this [open access](https://www.springernature.com/gp/open-science/about/the-fundamentals-of-open-access-and-open-research) article

[ Download PDF ](/content/pdf/10.1007/s43681-024-00606-3.pdf)

[ Save article ](/article/10.1007/s43681-024-00606-3/save-research?_csrf=iIwvtfJo2fjMUxbZzFN3_zu1xvyRvWj0)

[ View saved research ](/saved-research)

[ AI and Ethics ](/journal/43681) [ Aims and scope  ](/journal/43681/aims-and-scope) [ Submit manuscript  ](https://submission.springernature.com/new-submission/43681/3)

Speciesism in natural language processing research 

[ Download PDF ](/content/pdf/10.1007/s43681-024-00606-3.pdf)

## Abstract

Natural Language Processing (NLP) research on AI Safety and social bias in AI has focused on safety for humans and social bias against human minorities. However, some AI ethicists have argued that the moral significance of nonhuman animals has been ignored in AI research. Therefore, the purpose of this study is to investigate whether there is speciesism, i.e., discrimination against nonhuman animals, in NLP research. First, we explain why nonhuman animals are relevant in NLP research. Next, we survey the findings of existing research on speciesism in NLP researchers, data, and models and further investigate this problem in this study. The findings of this study suggest that speciesism exists within researchers, data, and models, respectively. Specifically, our survey and experiments show that (a) among NLP researchers, even those who study social bias in AI, do not recognize speciesism or speciesist bias; (b) among NLP data, speciesist bias is inherent in the data annotated in the datasets used to evaluate NLP models; (c) OpenAI GPTs, recent NLP models, exhibit speciesist bias by default. Finally, we discuss how we can reduce speciesism in NLP research.

### Similar content being viewed by others

###  [Apropos of “Speciesist bias in AI: how AI applications perpetuate discrimination and unfair outcomes against animals” ](https://link.springer.com/10.1007/s43681-022-00255-4?fromPaywallRec=false)

Article Open access 09 January 2023

###  [Towards Reflexive AI: A Comprehensive Exploration of Enhancing Social Science Research Through NLP ](https://link.springer.com/10.1007/978-3-031-84460-7_49?fromPaywallRec=false)

Chapter © 2025

###  [Bias and Fairness in NLP: Addressing Social and Cultural Biases ](https://link.springer.com/10.1007/978-3-032-02728-3_49?fromPaywallRec=false)

Chapter © 2026

### Explore related subjects

Discover the latest articles, books and news in related subjects, suggested using machine learning.

  * [Animal Cognition](/subjects/animal-cognition)
  * [Comparative Linguistics](/subjects/comparative-linguistics)
  * [Comparative Psychology](/subjects/comparative-psychology)
  * [Computational Linguistics](/subjects/computational-linguistics)
  * [Literature and Animal Studies](/subjects/literature-and-animal-studies)
  * [Natural Language Processing (NLP)](/subjects/natural-language-processing-nlp)
  * [Multispecies Interactions in Social Ecologies](/subjects/multispecies-interactions-in-social-ecologies)



## 1 Introduction

Research on social bias in AI has surged in the natural language processing (NLP) since the advent of pre-training models such as Word2Vec [[1](/article/10.1007/s43681-024-00606-3#ref-CR1 "Mikolov, T., Sutskever, I., Chen, K., Corrado, G., Dean, J.: Distributed representations of words and phrases and their compositionality. In: Proceedings of the 26th International Conference on Neural Information Processing Systems - Volume 2. NIPS-13, pp. 3111–3119. Curran Associates Inc., Red Hook, NY, USA \(2013\)")] and BERT [[2](/article/10.1007/s43681-024-00606-3#ref-CR2 "Devlin, J., Chang, M.-W., Lee, K., Toutanova, K.: BERT: Pre-training of deep bidirectional transformers for language understanding. In: Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 \(Long and Short Papers\), pp. 4171–4186. Association for Computational Linguistics, Minneapolis, Minnesota \(2019\). 
                  https://doi.org/10.18653/v1/N19-1423
                  
                . 
                  https://www.aclweb.org/anthology/N19-1423
                  
                ")]. These models were primarily used in NLP research, and some researchers discovered their inherent social biases [[3](/article/10.1007/s43681-024-00606-3#ref-CR3 "Stanczak, K., Augenstein, I.: A survey on gender bias in natural language processing. arXiv preprint 
                  arXiv:2112.14168
                  
                 \(2021\)")]. Initially, social bias research in NLP models focused on binary gender and race [[4](/article/10.1007/s43681-024-00606-3#ref-CR4 "Bolukbasi, T., Chang, K.-W., Zou, J., Saligrama, V., Kalai, A.: Man is to computer programmer as woman is to homemaker? debiasing word embeddings. In: Proceedings of the 30th International Conference on Neural Information Processing Systems. NIPS’16, pp. 4356–4364. Curran Associates Inc., Red Hook, NY, USA \(2016\)"), [5](/article/10.1007/s43681-024-00606-3#ref-CR5 "Caliskan, A., Bryson, J.J., Narayanan, A.: Semantics derived automatically from language corpora contain human-like biases. Science 356\(6334\), 183–186 \(2017\). 
                  https://doi.org/10.1126/science.aal4230
                  
                ")]. However, the limited number of social attributes studied is problematic. Therefore, some bias researchers have worked on a variety of attributes such as disability [[6](/article/10.1007/s43681-024-00606-3#ref-CR6 "Hutchinson, B., Prabhakaran, V., Denton, E., Webster, K., Zhong, Y., Denuyl, S.: Social biases in NLP models as barriers for persons with disabilities. In: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pp. 5491–5501. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.acl-main.487
                  
                . 
                  https://www.aclweb.org/anthology/2020.acl-main.487
                  
                ")], sexual orientation [[7](/article/10.1007/s43681-024-00606-3#ref-CR7 "Nangia, N., Vania, C., Bhalerao, R., Bowman, S.R.: CrowS-pairs: A challenge dataset for measuring social biases in masked language models. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 1953–1967. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.154
                  
                . 
                  https://www.aclweb.org/anthology/2020.emnlp-main.154
                  
                ")], and intersectional ones [[8](/article/10.1007/s43681-024-00606-3#ref-CR8 "Tan, Y.C., Celis, L.E.: Assessing Social and Intersectional Biases in Contextualized Word Representations. In: Wallach, H., Larochelle, H., Beygelzimer, A., Alché-Buc, F., Fox, E., Garnett, R. \(eds.\) Adv. Neural Inf. Process. Syst., vol. 32, pp. 13230–13241. Curran Associates Inc, Red Hook, NY, USA \(2019\)"), [9](/article/10.1007/s43681-024-00606-3#ref-CR9 "Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P.M., Bowman, S.: BBQ: A hand-built bias benchmark for question answering. In: Muresan, S., Nakov, P., Villavicencio, A. \(eds.\) Findings of the Association for Computational Linguistics: ACL 2022, pp. 2086–2105. Association for Computational Linguistics, Dublin, Ireland \(2022\). 
                  https://doi.org/10.18653/v1/2022.findings-acl.165
                  
                . 
                  https://aclanthology.org/2022.findings-acl.165
                  
                ")], as well as studying negative bias toward queer people living in non-binary genders [[10](/article/10.1007/s43681-024-00606-3#ref-CR10 "Dev, S., Monajatipoor, M., Ovalle, A., Subramonian, A., Phillips, J., Chang, K.-W.: Harms of gender exclusivity and challenges in non-binary representation in language technologies. In: Moens, M.-F., Huang, X., Specia, L., Yih, S.W.-t. \(eds.\) Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, pp. 1968–1994. Association for Computational Linguistics, Online and Punta Cana, Dominican Republic \(2021\). 
                  https://doi.org/10.18653/v1/2021.emnlp-main.150
                  
                . 
                  https://aclanthology.org/2021.emnlp-main.150
                  
                ")]. Moreover, other studies have found that large language models (LLMs) generate harmful and stereotypical representations [[11](/article/10.1007/s43681-024-00606-3#ref-CR11 "Cheng, M., Durmus, E., Jurafsky, D.: Marked personas: Using natural language prompts to measure stereotypes in language models. In: Rogers, A., Boyd-Graber, J., Okazaki, N. \(eds.\) Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics \(Volume 1: Long Papers\), pp. 1504–1532. Association for Computational Linguistics, Toronto, Canada \(2023\). 
                  https://doi.org/10.18653/v1/2023.acl-long.84
                  
                . 
                  https://aclanthology.org/2023.acl-long.84
                  
                ")] and have proposed AI alignment methods to prevent them [[12](/article/10.1007/s43681-024-00606-3#ref-CR12 "Bai, Y., Jones, A., Ndousse, K., Askell, A., Chen, A., DasSarma, N., Drain, D., Fort, S., Ganguli, D., Henighan, T., Joseph, N., Kadavath, S., Kernion, J., Conerly, T., El-Showk, S., Elhage, N., Hatfield-Dodds, Z., Hernandez, D., Hume, T., Johnston, S., Kravec, S., Lovitt, L., Nanda, N., Olsson, C., Amodei, D., Brown, T., Clark, J., McCandlish, S., Olah, C., Mann, B., Kaplan, J.: Training a helpful and harmless assistant with reinforcement learning from human feedback. arXiv preprint 
                  arXiv:2204.05862
                  
                 \(2022\)")]. Thus, NLP researchers are seriously combating discriminative biases and harmful behaviors of NLP models.

On the other hand, one attribute that is ignored in NLP research is _nonhuman animals_. Our aim is to seek an answer to the following research questions: a) what is the extent to which discrimination against nonhuman animals, referred to as _speciesism_ , is overlooked in NLP research? and b) how can we investigate speciesist bias present in NLP data and models? As some existing studies have suggested, speciesist bias against nonhuman animals has rarely been studied in NLP research (see Sect. [3.3.1](/article/10.1007/s43681-024-00606-3#Sec11)). AI ethicists have criticized moral anthropocentrism in response to these problems, observing that nonhuman animals are ignored in AI ethics (see Sect. [3.1](/article/10.1007/s43681-024-00606-3#Sec8)).

The structure of this paper is as follows. Firstly, we explain the limitations of this paper (Sect. [1.1](/article/10.1007/s43681-024-00606-3#Sec2)) and why it is crucial to recognize speciesism in NLP research (Sect. [2](/article/10.1007/s43681-024-00606-3#Sec3)). After the explanation, we investigate speciesism or speciesist bias among NLP researchers (Sect. [3](/article/10.1007/s43681-024-00606-3#Sec7)), NLP data (Sect. [4](/article/10.1007/s43681-024-00606-3#Sec14)), and NLP models (Sect. [5](/article/10.1007/s43681-024-00606-3#Sec19)) in order to identify speciesism in NLP research. Finally, we discuss what we should do to challenge speciesism in NLP research (Sect. [6](/article/10.1007/s43681-024-00606-3#Sec24)).

### 1.1 Limitations

Before we begin our investigation and discussion, we will explain the limitations of our paper as a whole and each section (investigation of speciesism in NLP researchers, data, and models).

Frstly, our investigation is limited to NLP, thus we should extend analysis to other AI domains such as computer vision. Hagendorff et al. [[13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")] explored the speciesist bias in the datasets, MS-COCO [[14](/article/10.1007/s43681-024-00606-3#ref-CR14 "Lin, T.-Y., Maire, M., Belongie, S., Hays, J., Perona, P., Ramanan, D., Dollár, P., Zitnick, C.L.: Microsoft coco: common objects in context. In: Fleet, D., Pajdla, T., Schiele, B., Tuytelaars, T. \(eds.\) Computer Vision - ECCV 2014, pp. 740–755. Springer, Cham \(2014\)")] and ImageNet [[15](/article/10.1007/s43681-024-00606-3#ref-CR15 "Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., Huang, Z., Karpathy, A., Khosla, A., Bernstein, M., Berg, A.C., Fei-Fei, L.: ImageNet Large Scale Visual Recognition Challenge. Int. J. Comput. Vision \(IJCV\) 115\(3\), 211–252 \(2015\). 
                  https://doi.org/10.1007/s11263-015-0816-y
                  
                ")], and found the bias in these datasets. We should extend our and their research to researchers and models in computer vision and other fields of AI.

Furthermore, our research focuses on only the attributes of nonhuman animals. However, it is crucial to consider intersectional ones. As ecofeminists discussed [e.g., [16](/article/10.1007/s43681-024-00606-3#ref-CR16 "Adams, C.J.: The Sexual Politics of Meat. Routledge, UK \(2018\)")], speciesism and sexism are linked. For example, women are frequently insulted by nonhuman animal metaphors. The reason why it is possible to insult women by using nonhuman animals as a metaphor is that it would apply to women the negative images derived from speciesism. Moreover, using nonhuman animal metaphors to insult women contributes to both speciesism and sexism. [[17](/article/10.1007/s43681-024-00606-3#ref-CR17 "Dunayer, J.: Sexist words, speciesist roots. In: Animals and Women: Feminist Theoretical Explorations, pp. 11–31. Duke University Press, Durham, NC \(1995\)")].

Regarding speciesism within NLP researchers (Sect. [3](/article/10.1007/s43681-024-00606-3#Sec7)), we investigate speciesism in the texts written by the researchers. However, we did not interview NLP researchers for their views on speciesism. Some of those doing NLP research may oppose speciesism. Thus, we need to interview researchers to clarify speciesism in NLP or AI researchers in the future.

On speciesism in NLP data (Sect. [4](/article/10.1007/s43681-024-00606-3#Sec14)), we only examine speciesism in three datasets. Existing studies have also only analyzed speciesist language in some pre-training corpora [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")]. Social Chemistry 101 and Commonsense Morality in ETHICS are used for AI safety and AI alignment, but we have yet to analyze the more recent datasets used for reinforcement learning from human feedback (RLHF) [[12](/article/10.1007/s43681-024-00606-3#ref-CR12 "Bai, Y., Jones, A., Ndousse, K., Askell, A., Chen, A., DasSarma, N., Drain, D., Fort, S., Ganguli, D., Henighan, T., Joseph, N., Kadavath, S., Kernion, J., Conerly, T., El-Showk, S., Elhage, N., Hatfield-Dodds, Z., Hernandez, D., Hume, T., Johnston, S., Kravec, S., Lovitt, L., Nanda, N., Olsson, C., Amodei, D., Brown, T., Clark, J., McCandlish, S., Olah, C., Mann, B., Kaplan, J.: Training a helpful and harmless assistant with reinforcement learning from human feedback. arXiv preprint 
                  arXiv:2204.05862
                  
                 \(2022\)")]. Moreover, we have not yet analyzed the extent to which the pre-training corpora contain descriptions of speciesist practices and the use of speciesist language. We need to further extend our analysis of speciesism in the NLP data in the future.

For speciesism in NLP models (Sect. [5](/article/10.1007/s43681-024-00606-3#Sec19)), we just analyze speciesist bias in GPT models and Delphi [[19](/article/10.1007/s43681-024-00606-3#ref-CR19 "Jiang, L., Hwang, J.D., Bhagavatula, C., Bras, R.L., Liang, J., Dodge, J., Sakaguchi, K., Forbes, M., Borchardt, J., Gabriel, S., Tsvetkov, Y., Etzioni, O., Sap, M., Rini, R., Choi, Y.: Can machines learn morality? The Delphi experiment. arXiv preprint 
                  arXiv:2110.07574
                  
                 \(2022\) 
                  https://doi.org/10.48550/ARXIV.2110.07574
                  
                ")] using commonsense morality datasets. Existing studies have evaluated the speciesist bias in MLMs [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")] and GPT-3 [[13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")]. However, we have not studied in detail how other LLMs behave differently with specific inputs of nonhuman animal names and precisely how they generate harmful content. Nor has it considered how it might be improved in the future by interviewing anti-speciesist people and ethical vegans. Therefore, we need further analysis of the speciesist behavior of LLMs and research on how to make LLMs more non-speciesist as they are developed in the future.

## 2 Motivation

### 2.1 What is speciesism and why do nonhuman animals morally matter

Speciesism is “the unjustified comparatively worse consideration or treatment of those who do not belong to a certain species” [[20](/article/10.1007/s43681-024-00606-3#ref-CR20 "Horta, O., Albersmeier, F.: Defining speciesism. Philosophy Compass 15\(11\), 12708 \(2020\) 
                  https://doi.org/10.1111/phc3.12708
                  
                 https://onlinelibrary.wiley.com/doi/pdf/10.1111/phc3.12708")]. Typical examples of speciesist practices are factory farming and animal experimentation [[21](/article/10.1007/s43681-024-00606-3#ref-CR21 "Singer, P.: Animal Liberation Now. Harper Perennial, New York, USA \(2023\)")]. Nonhuman animals such as cows, pigs, and chickens are bred for human consumption in cramped and poor conditions. There is a consensus among scientists that these nonhuman animals are conscious and sentient [[22](/article/10.1007/s43681-024-00606-3#ref-CR22 "Low, P., Panksepp, J., Reiss, D., Edelman, D., Van Swinderen, B., Koch, C.: The cambridge declaration on consciousness. In: Francis Crick Memorial Conference, Cambridge, England, pp. 1–2 \(2012\)")]. Therefore, they experience pain during captivity and slaughter. Similarly, in animal experimentation, although there are regulations such as the 3Rs (Replacement, Reduction, and Refinement) [[23](/article/10.1007/s43681-024-00606-3#ref-CR23 "Russell, W.M.S., Burch, R.L.: The Principles of Humane Experimental Technique. Methuen, London \(1959\)")], more than seven million nonhuman animals were used, and most of them were killed in the EU in 2020 [[24](/article/10.1007/s43681-024-00606-3#ref-CR24 "Comission, E.: Summary Report on the Statistics on the Use of Animals for Scientific Purposes in the Member States of the European Union and Norway in 2020 \(2023\)")].

If we think that the suffering of nonhuman animals holds less moral significance than that of humans solely because they are nonhuman animals, that is speciesism. Drawing an analogy with racism and sexism [[21](/article/10.1007/s43681-024-00606-3#ref-CR21 "Singer, P.: Animal Liberation Now. Harper Perennial, New York, USA \(2023\)")], if one considers the interests of a human being of a particular race or gender to be less morally significant than the interests of people of another race or gender, then one would consider that to be racism or sexism. Similarly, if one considers the interests of members of a particular species (nonhumans) less morally significant than the interests of human beings by their belonging to that species, that is speciesism.

There are many discussions in animal ethics on such speciesism [[25](/article/10.1007/s43681-024-00606-3#ref-CR25 "Horta, O.: What is speciesism? J. Agric. Environ. Ethics 23, 243–266 \(2010\)")], and, at least, it is difficult to defend a kind of speciesism where the interests of one being are less morally significant than the interests of another being by just belonging to a particular species. For example, if, as discussed in the previous paragraph, we think that it is justified to treat humans more favorably than nonhuman animals on the basis that they are human, then in the same way, it could be similarly justified to treat men more favorably than women simply because they are men [[21](/article/10.1007/s43681-024-00606-3#ref-CR21 "Singer, P.: Animal Liberation Now. Harper Perennial, New York, USA \(2023\)")]. Such a conclusion is not acceptable. Instead, consider giving favorable treatment to individuals who meet a criterion based on sophisticated cognitive abilities, such as rational reasoning, rather than belonging to a particular species (e.g., humans). The application of such a criterion would yield two outcomes: (i) some humans (such as infants) cannot meet the criterion, and (ii) some nonhuman animals (such as great apes) are likely to meet the criterion. Consequently, justifying discriminatory treatment based on such criteria would entail excluding some humans and extending favorable treatment to some nonhuman animals [26,27,[28](/article/10.1007/s43681-024-00606-3#ref-CR28 "Perry, M.W.: “human’ dignity beyond the human. Critical Review of International Social and Political Philosophy, 1–23 \(2023\)")]. These arguments indicate that the speciesism-the interests of one being are less morally significant than the interests of another being by just belonging to a particular species (humans)-is a flawed ethical position.

One of the most compelling criteria for the moral consideration of an entity is _sentience_ [[29](/article/10.1007/s43681-024-00606-3#ref-CR29 "Birch, J.: The Edge of Sentience: Risk and Precaution in Humans, Other Animals, and AI. Oxford University Press, Oxford \(2024\)")]. The capacity to experience something as good (e.g., pleasure) or bad (e.g., pain) is a crucial aspect of sentience. The capacity to experience something as good or bad implies that it has some interest. Therefore, if an entity is sentient, it should be considered morally. The New York Declaration on Animal Consciousness [[30](/article/10.1007/s43681-024-00606-3#ref-CR30 "Andrews, K., Birch, J., Sebo, J., Sims, T.: Background to the New York Declaration on Animal Consciousness. nydeclaration.com \(2024\). 
                  https://sites.google.com/nyu.edu/nydeclaration/background
                  
                ")], which over 400 scientists and philosophers have endorsed, states that there is strong scientific support that at least mammals and birds are conscious and sentient. Furthermore, empirical evidence suggests that other vertebrates and many invertebrates are also conscious. Therefore, given that many nonhuman animals are sentient, we are morally obligated to consider their well-being and treatment.

This line of arguments has been discussed in animal ethics for approximately 50 years, and treating all and only humans better than nonhuman animals is not justifiable. Therefore, this paper assumes that similar interests (e.g., pain or preference to avoid it) should be treated equally and that any form of speciesism that denies this assumption is incorrect [see also [31](/article/10.1007/s43681-024-00606-3#ref-CR31 "Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics 3\(2\), 539–551 \(2023\)")]. However, even if this assumption is false, the content of this study should be relevant for people who accept that sentient nonhuman animals are of some moral significance.

### 2.2 Why do nonhuman animals matter in NLP research

There are fifth reasons to take nonhuman animals seriously in NLP research if we accept that they are morally significant [see also [18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)"), [31](/article/10.1007/s43681-024-00606-3#ref-CR31 "Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics 3\(2\), 539–551 \(2023\)"), [13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")].

First, if NLP models such as LLMs have a speciesist bias, then they propagate the speciesist bias through their generated texts. As described in many social bias studies of AI, the bias inherent in NLP technology is propagated to people through applications such as machine translation and dialogue systems [32,33,[34](/article/10.1007/s43681-024-00606-3#ref-CR34 "Rogers, A.: Changing the world by changing the data. In: Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing \(Volume 1: Long Papers\), pp. 2182–2194. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.acl-long.170
                  
                . 
                  https://aclanthology.org/2021.acl-long.170
                  
                ")]. It reinforces the discriminatory bias in their attitudes. Some psychological studies have shown that people already have speciesist attitudes [[35](/article/10.1007/s43681-024-00606-3#ref-CR35 "Caviola, L., Everett, J.A., Faber, N.S.: The moral standing of animals: Towards a psychology of speciesism. J. Pers. Soc. Psychol. 116\(6\), 1011 \(2019\)"), [36](/article/10.1007/s43681-024-00606-3#ref-CR36 "Caviola, L., Schubert, S., Kahane, G., Faber, N.S.: Humans first: Why people value animals less than humans. Cognition 225, 105139 \(2022\)")]. These attitudes could be reinforced by the speciesist output generated by NLP technology. It may also further reinforce the speciesist practices discussed above (Sect. [2.1](/article/10.1007/s43681-024-00606-3#Sec4)), such as factory farming and animal experimentation.

Second, psychological experiments also suggest that these and other speciesist attitudes are correlated with other discriminatory attitudes. People with speciesism tend to have racist and sexist attitudes [[35](/article/10.1007/s43681-024-00606-3#ref-CR35 "Caviola, L., Everett, J.A., Faber, N.S.: The moral standing of animals: Towards a psychology of speciesism. J. Pers. Soc. Psychol. 116\(6\), 1011 \(2019\)")], which are associated with social dominance orientationFootnote 1 and political conservatism [[37](/article/10.1007/s43681-024-00606-3#ref-CR37 "Dhont, K., Hodson, G., Costello, K., MacInnis, C.C.: Social dominance orientation connects prejudicial human-human and human-animal relations. Personality Individ. Differ. 61, 105–108 \(2014\)"), [38](/article/10.1007/s43681-024-00606-3#ref-CR38 "Dhont, K., Hodson, G., Leite, A.C.: Common ideological roots of speciesism and generalized ethnic prejudice: The social dominance human-animal relations model \(SD-HARM\). Eur. J. Pers. 30\(6\), 507–522 \(2016\)")]. Therefore, reinforcing speciesist attitudes may reinforce other discriminatory attitudes. If NLP models propagate discriminatory biases, then removing the speciesist bias in NLP models would be beneficial not only for nonhuman animals but also for humans.

Third, the incorporation of NLP technologies into other technologies can have a direct impact on nonhuman animals. LLMs already enhance the performance of multimodal models (e.g., vision-language models) [[39](/article/10.1007/s43681-024-00606-3#ref-CR39 "Yin, S., Fu, C., Zhao, S., Li, K., Sun, X., Xu, T., Chen, E.: A survey on multimodal large language models. arXiv preprint 
                  arXiv:2311.07226
                  
                 \(2024\) https://arxiv.org/abs/2306.135492306.13549")], robots [[40](/article/10.1007/s43681-024-00606-3#ref-CR40 "Zeng, F., Gan, W., Wang, Y., Liu, N., Yu, P.S.: Large language models for robotics: A survey. arXiv preprint 
                  arXiv:2311.07226
                  
                 \(2023\)")], and self-driving cars [[41](/article/10.1007/s43681-024-00606-3#ref-CR41 "Yang, Z., Jia, X., Li, H., Yan, J.: Llm4drive: A survey of large language models for autonomous driving. arXiv preprint 
                  arXiv:2311.07226
                  
                 \(2024\) https://arxiv.org/abs/2311.010432311.01043")]. While NLP technology on its own may only indirectly affect nonhuman animals by reinforcing people’s speciesist attitudes, it has the potential to be utilized in technologies that directly impact them. For instance, if an LLM with a speciesist bias is integrated into self-driving cars, it may not avoid harming animals, such as roadkill [[31](/article/10.1007/s43681-024-00606-3#ref-CR31 "Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics 3\(2\), 539–551 \(2023\)")]. Furthermore, a global survey on the values of self-driving cars revealed a tendency to accept the inferior treatment of animals, reflecting a speciesist bias [[42](/article/10.1007/s43681-024-00606-3#ref-CR42 "Awad, E., Dsouza, S., Kim, R., Schulz, J., Henrich, J., Shariff, A., Bonnefon, J.-F., Rahwan, I.: The moral machine experiment. Nature 563\(7729\), 59–64 \(2018\)")]. These facts could result in the development of self-driving cars that have direct negative impacts on nonhuman animals.

Fourth, NLP technologies with a speciesist bias could harm those who are opposed to speciesist practices, such as ethical vegans. Consider, for example, LLMs associating negative words with nonhuman animals or recommending dishes that utilize nonhuman animal products to vegans. They would be harmed by such behavior of LLMs and would stop using this technology. This harm is a form of technological exclusion [cf. [43](/article/10.1007/s43681-024-00606-3#ref-CR43 "Blodgett, S.L., Barocas, S., Daumé III, H., Wallach, H.: Language \(technology\) is power: A critical survey of “bias” in NLP. In: Jurafsky, D., Chai, J., Schluter, N., Tetreault, J. \(eds.\) Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pp. 5454–5476. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.acl-main.485
                  
                . 
                  https://aclanthology.org/2020.acl-main.485
                  
                ")] and discrimination against them [[44](/article/10.1007/s43681-024-00606-3#ref-CR44 "Horta, O.: Discrimination against vegans. Res. Publica. 24\(3\), 359–373 \(2018\)")].

Finally, NLP models and corpora inherently reflect social biases, including speciesist bias, present in our cognition, beliefs, and social structures [[5](/article/10.1007/s43681-024-00606-3#ref-CR5 "Caliskan, A., Bryson, J.J., Narayanan, A.: Semantics derived automatically from language corpora contain human-like biases. Science 356\(6334\), 183–186 \(2017\). 
                  https://doi.org/10.1126/science.aal4230
                  
                "), 45,46,[47](/article/10.1007/s43681-024-00606-3#ref-CR47 "Leach, S., Kitchin, A.P., Sutton, R.M., Dhont, K.: Speciesism in everyday language. Br. J. Soc. Psychol. 62\(1\), 486–502 \(2023\)")]. Analyzing social biases in NLP models and corpora can promote our understanding of its influence on our cognition and society.

In summary, research in NLP has implications for nonhuman animals and anti-speciesists. In particular, NLP models have the potential to reinforce users’ speciesist attitudes and practices, which may eventually harm nonhuman animals. Furthermore, NLP models being incorporated into other technologies (e.g., self-driving cars) could cause direct harm to nonhuman animals. As a result, nonhuman animals are indirect and direct stakeholders in NLP research and should be taken seriously.

### 2.3 Why do we focus on speciesism in NLP researchers, data, and models

We argued that nonhuman animals are morally significant and matter in NLP research. However, as this study shows in the following sections (see Sects. [3](/article/10.1007/s43681-024-00606-3#Sec7)-[5](/article/10.1007/s43681-024-00606-3#Sec19)), speciesism is rarely considered in NLP research. This paper aims to reveal speciesism in NLP research by focusing on researchers, data, and NLP models. We explain why we consider these three entities.

First, as discussed in Sect. [2.3](/article/10.1007/s43681-024-00606-3#Sec6), if there is a speciesism bias in NLP models, then there is a risk of (i) reinforcing people’s speciesist attitudes and practice (e.g., eating meat) through generated text, (ii) it would lead to the technical exclusion of ethical vegans and anti-speciesist people, and (iii) if NLP models are incorporated into other technology, such as self-driving cars, these technologies potentially exhibit speciesist bias and behaviour and directly harm nonhuman animals. Therefore, it is crucial to analyze the speciesism bias in NLP models.

Second, it is also relevant to identify speciesist bias in the NLP data. It will contribute to identifying the origin of the speciesist bias in the NLP model. If speciesist bias is found in the data, reducing this bias in the data will contribute to mitigating speciesist bias in future developed NLP models. Furthermore, examining the speciesist bias in the data allows for measuring the speciesist attitudes of the individuals responsible for its production. Leach et al. [[47](/article/10.1007/s43681-024-00606-3#ref-CR47 "Leach, S., Kitchin, A.P., Sutton, R.M., Dhont, K.: Speciesism in everyday language. Br. J. Soc. Psychol. 62\(1\), 486–502 \(2023\)")] quantified the people’s speciesist attitudes in the dataset using existing word embedding models and novel word embedding models trained on the newly collected corpus by the authors. This kind of research is commonly utilized in studies of gender and racial bias [e.g., [5](/article/10.1007/s43681-024-00606-3#ref-CR5 "Caliskan, A., Bryson, J.J., Narayanan, A.: Semantics derived automatically from language corpora contain human-like biases. Science 356\(6334\), 183–186 \(2017\). 
                  https://doi.org/10.1126/science.aal4230
                  
                ")], as well as semantic change in words [e.g., [45](/article/10.1007/s43681-024-00606-3#ref-CR45 "Garg, N., Schiebinger, L., Jurafsky, D., Zou, J.: Word embeddings quantify 100 years of gender and ethnic stereotypes. Proc. Natl. Acad. Sci. 115\(16\), 3635–3644 \(2018\)")]. Analyzing the social bias in specific corpora can contribute to this kind of sociological research.

Finally, it is also essential to identify speciesism among NLP researchers themselves. Primarily, NLP researchers design and create NLP data, especially data for downstream tasks and NLP models. Thus, if there is speciesist bias in these NLP data and models, it has its origin in the NLP researchers, at least partially. Furthermore, benchmark datasets for evaluating NLP models are also developed primarily by NLP researchers. If a benchmark dataset contains a speciesist bias, evaluating NLP models would be inappropriate from an anti-speciesist view.Footnote 2 Therefore, NLP researchers play an essential role in considering social bias [cf. [50](/article/10.1007/s43681-024-00606-3#ref-CR50 "D’ignazio, C., Klein, L.F.: Data Feminism. MIT press, Cambridge, MA \(2023\)")]. If NLP researchers have speciesist attitudes, removing these attitudes will lead to mitigating speciesist bias in NLP data and NLP models through their research. Furthermore, researchers in NLP have attempted to explore communication research involving nonhuman animals, such as dogs [[51](/article/10.1007/s43681-024-00606-3#ref-CR51 "Li, X., Wang, S., Xie, Z., Wu, M., Zhu, K.Q.: Phonetic and lexical discovery of a canine language using hubert. arXiv preprint 
                  arXiv:2311.07226
                  
                 \(2024\) https://arxiv.org/abs/2402.159852402.15985"), [52](/article/10.1007/s43681-024-00606-3#ref-CR52 "Abzaliev, A., Perez-Espinosa, H., Mihalcea, R.: Towards dog bark decoding: Leveraging human speech processing for automated bark classification. In: Calzolari, N., Kan, M.-Y., Hoste, V., Lenci, A., Sakti, S., Xue, N. \(eds.\) Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation \(LREC-COLING 2024\), pp. 16480–16486. ELRA and ICCL, Torino, Italia \(2024\). 
                  https://aclanthology.org/2024.lrec-main.1432
                  
                ")] and whales [[53](/article/10.1007/s43681-024-00606-3#ref-CR53 "Mustill, T.: How to Speak Whale: The Power and Wonder of Listening to Animals. Hachette, London \(2022\)")]. If NLP researchers have a speciesist bias towards nonhuman animals, it may result in the development of technology that could potentially harm them.

Therefore, this paper aims to identify speciesism in NLP researchers, data, and models.

## 3 Speciesism among NLP researchers

We first explore speciesism among NLP researchers. The structure of this section is as follows: Sect. [3.1](/article/10.1007/s43681-024-00606-3#Sec8) introduces the findings of existing studies, Sect. [3.2](/article/10.1007/s43681-024-00606-3#Sec9) describes our additional research methodology, and Sect. [3.3](/article/10.1007/s43681-024-00606-3#Sec10) reports our findings. Section [3.4](/article/10.1007/s43681-024-00606-3#Sec13) discusses the speciesism among NLP researchers based on the findings of existing studies and our investigation.

We will discuss speciesism in the NLP data (Sect. [4](/article/10.1007/s43681-024-00606-3#Sec14)) and NLP model (Sect. [5](/article/10.1007/s43681-024-00606-3#Sec19)) similarly.

### 3.1 Existing findings

Existing studies have not directly examined whether NLP researchers ignore the issue of speciesism. However, by surveying AI ethics courses offered by companies and other organizations and AI ethics guidelines, they have found that people engaged in AI ethics (of which some NLP researchers may be a part) ignore speciesism.

Singer and Tse [[31](/article/10.1007/s43681-024-00606-3#ref-CR31 "Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics 3\(2\), 539–551 \(2023\)")] argue that speciesism is not considered in AI ethics. They conducted a search for AI ethics courses that provide detailed materials and discovered a total of 71 such offerings. Of these, only one course touched on wildlife conservation, and the others did not address the impact of AI on nonhuman animals. The authors also analyzed 68 statements on AI ethics issued by research institutions, nongovernmental organizations, governments, and corporations. Most of these statements appealed to principles such as “benefits to humanity”. One-fifth of the statements either assume that humans occupy a central position or imply that only humans are of ethical importance. Only two statements appealed to “sentient beings”. Singer and Tse argue that these statements incorrectly suggest that the significant harm that AI inflicts on nonhuman animals is justified for the benefit of humans. Moreover, Owe and Baum et al. [[54](/article/10.1007/s43681-024-00606-3#ref-CR54 "Owe, A., Baum, S.D.: Moral consideration of nonhumans in the ethics of artificial intelligence. AI and Ethics, 1–12 \(2021\)")] also surveyed existing guidelines or projects and concluded that only a few guidelines or projects mention the interests of nonhuman animals.

### 3.2 Our method of investigating speciesism of NLP researchers

This section investigates speciesism in NLP researchers by analyzing their papers. We perform this investigation in two approaches. First, we investigate speciesism among NLP researchers qualitatively. We analyze their efforts to address speciesist bias in AI and their descriptions regarding social bias and nonhuman animals in their papers. We also check whether there are any bias evaluation datasets including the speciesist bias category. We refer the survey site of “Bias and Fairness in Large Language Models: A Survey” [[55](/article/10.1007/s43681-024-00606-3#ref-CR55 "Gallegos, I.O., Rossi, R.A., Barrow, J., Tanjim, M.M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., Ahmed, N.K.: Bias and fairness in large language models: A survey. arXiv preprint 
                  arXiv:2309.00770
                  
                 \(2023\)")].Footnote 3

Second, we conduct a quantitative approach. We investigate (1) how NLP researchers mention (if they do at all) “speciesism” or “anthropocentrism”,Footnote 4 and (2) how NLP researchers use nonhuman animal names in the titles of their papers.

In the first quantitative investigation, we search for the words “speciesism” and “anthropocentrism”Footnote 5 on the ACL AnthologyFootnote 6 to analyze how many papers mention them and how the words were used.Footnote 7 The terms “speciesism” and “anthropocentrism” are of significant importance in ethical discussions regarding nonhuman animals within the field of animal ethics [[20](/article/10.1007/s43681-024-00606-3#ref-CR20 "Horta, O., Albersmeier, F.: Defining speciesism. Philosophy Compass 15\(11\), 12708 \(2020\) 
                  https://doi.org/10.1111/phc3.12708
                  
                 https://onlinelibrary.wiley.com/doi/pdf/10.1111/phc3.12708"), [25](/article/10.1007/s43681-024-00606-3#ref-CR25 "Horta, O.: What is speciesism? J. Agric. Environ. Ethics 23, 243–266 \(2010\)"), [56](/article/10.1007/s43681-024-00606-3#ref-CR56 "Albersmeier, F.: Speciesism and speciescentrism. Ethical Theory Moral Pract 24\(2\), 511–527 \(2021\)")]. ACL Anthology is a comprehensive collection of proceedings and papers from international conferences affiliated with the Association for Computational Linguistics (ACL)Footnote 8, the largest academic society for NLP research. It is a valuable and trustful resource for NLP researchers. We thus examined the attitudes of natural language processing researchers towards speciesism and nonhuman animals by analyzing the vocabulary used in the papers included in the ACL Anthology.

In the second one, we hypothesize that if NLP researchers have a speciesist bias, they use speciesist idioms and proverbs in their papers’ titles. The People for the Ethical Treatment of Animals (PETA), the most well-known animal advocacy organization, argues that some commonly used idioms reflect speciesist practices.Footnote 9 For instance, “kill two birds with one stone” represents harming birds. Consequently, PETA recommends avoiding using such idioms. Therefore, by examining whether academic paper titles contain speciesist idioms, we can indirectly assess the speciesist attitudes of NLP researchers. It is important to note that this method does not directly evaluate the speciesist attitudes of NLP researchers, as discussed in the Limitations section (Sect. [1.1](/article/10.1007/s43681-024-00606-3#Sec2)).

In this second investigation, we use ACL Anthology Corpus [[57](/article/10.1007/s43681-024-00606-3#ref-CR57 "Rohatgi, S., Qin, Y., Aw, B., Unnithan, N., Kan, M.-Y.: The ACL OCL corpus: Advancing open science in computational linguistics. In: Bouamor, H., Pino, J., Bali, K. \(eds.\) Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pp. 10348–10361. Association for Computational Linguistics, Singapore \(2023\). 
                  https://doi.org/10.18653/v1/2023.emnlp-main.640
                  
                . 
                  https://aclanthology.org/2023.emnlp-main.640
                  
                ")], the most exhaustive NLP paper corpus, to count speciesist titles. This corpus includes papers published in ACL Anthology until September 2022. Animal names used to investigate speciesism in our research are shown in Table [1](/article/10.1007/s43681-024-00606-3#Tab1), based on Takeshita et al. [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")], who collected them from All Animals A-Z List.Footnote 10 This list consists of the names of various animals (not limited to species). The scientific biological names do not align with the names commonly used in everyday language, so we use the list that includes various names.

Some words in their list have two meanings, hence we exclude these considered unlikely to mean nonhuman animal names.Footnote 11 Annotation of whether the titles of papers are speciesist or not is performed by two of this paper’s authors.

**Table 1 Names used in our investigation**

[ Full size table](/article/10.1007/s43681-024-00606-3/tables/1)

### 3.3 Our findings of NLP papers analysis

#### 3.3.1 Findings in qualitative investigation

Most of social bias studies in NLP ignore speciesist bias. Although numerous experimental studies deal with social biases against humans, to the authors’ best knowledge, there are only two studies regarding speciesist bias: Takeshita et al. [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")] and Hagendorff et al. [[13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")].

Some surveys or papers that propose frameworks for social bias in Al also ignore the speciesist bias or topics regarding nonhuman animals. For example, Gallegos et al. [[55](/article/10.1007/s43681-024-00606-3#ref-CR55 "Gallegos, I.O., Rossi, R.A., Barrow, J., Tanjim, M.M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., Ahmed, N.K.: Bias and fairness in large language models: A survey. arXiv preprint 
                  arXiv:2309.00770
                  
                 \(2023\)")] defined social groups as “a subset of the population that shares an identity trait, which may be fixed, contextual, or socially constructed”. However, they also explained that the examples of social groups are _legally protected by anti-discrimination law (i.e., “protected groups” or “protected classes” under federal United States law) including age, color, disability, gender identity, national origin, race, religion, sex, and sexual orientation_ [[55](/article/10.1007/s43681-024-00606-3#ref-CR55 "Gallegos, I.O., Rossi, R.A., Barrow, J., Tanjim, M.M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., Ahmed, N.K.: Bias and fairness in large language models: A survey. arXiv preprint 
                  arXiv:2309.00770
                  
                 \(2023\)"), p. 5]. They may not consider nonhuman animals in this definition. Furthermore, Mei et al. [[58](/article/10.1007/s43681-024-00606-3#ref-CR58 "Mei, K., Fereidooni, S., Caliskan, A.: Bias against 93 stigmatized groups in masked language models and downstream sentiment classification tasks. In: Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency. FAccT ’23, pp. 1699–1710. Association for Computing Machinery, New York, NY, USA \(2023\). 
                  https://doi.org/10.1145/3593013.3594109
                  
                . 
                  https://doi.org/10.1145/3593013.3594109
                  
                ")] use “a comprehensive list of 93 social stigmas” proposed by Pachankis et al. [[59](/article/10.1007/s43681-024-00606-3#ref-CR59 "Pachankis, J.E., Hatzenbuehler, M.L., Wang, K., Burton, C.L., Crawford, F.W., Phelan, J.C., Link, B.G.: The burden of stigma on health and well-being: A taxonomy of concealment, course, disruptiveness, aesthetics, origin, and peril across 93 stigmas. Pers. Soc. Psychol. Bull. 44\(4\), 451–474 \(2018\)")] to evaluate the social bias in NLP models. Smith et al. [[60](/article/10.1007/s43681-024-00606-3#ref-CR60 "Smith, E.M., Hall, M., Kambadur, M., Presani, E., Williams, A.: “I’m sorry to hear that”: Finding new biases in language models with a holistic descriptor dataset. In: Goldberg, Y., Kozareva, Z., Zhang, Y. \(eds.\) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 9180–9211. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates \(2022\). 
                  https://doi.org/10.18653/v1/2022.emnlp-main.625
                  
                . 
                  https://aclanthology.org/2022.emnlp-main.625
                  
                ")] proposed the classification framework for social bias in AI, which calls itself the “HOLISTICBIAS dataset”. However, there is no statement about nonhuman animals in any of these studies.

Blodgett et al. [[61](/article/10.1007/s43681-024-00606-3#ref-CR61 "Blodgett, S.L., Lopez, G., Olteanu, A., Sim, R., Wallach, H.: Stereotyping Norwegian salmon: An inventory of pitfalls in fairness benchmark datasets. In: Zong, C., Xia, F., Li, W., Navigli, R. \(eds.\) Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing \(Volume 1: Long Papers\), pp. 1004–1015. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.acl-long.81
                  
                . 
                  https://aclanthology.org/2021.acl-long.81
                  
                ")] analyzed the pitfalls of bias evaluation datasets such as CrowS-Pairs [[7](/article/10.1007/s43681-024-00606-3#ref-CR7 "Nangia, N., Vania, C., Bhalerao, R., Bowman, S.R.: CrowS-pairs: A challenge dataset for measuring social biases in masked language models. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 1953–1967. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.154
                  
                . 
                  https://www.aclweb.org/anthology/2020.emnlp-main.154
                  
                ")] and StereoSet [[62](/article/10.1007/s43681-024-00606-3#ref-CR62 "Nadeem, M., Bethke, A., Reddy, S.: StereoSet: Measuring stereotypical bias in pretrained language models. In: Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing \(Volume 1: Long Papers\), pp. 5356–5371. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.acl-long.416
                  
                . 
                  https://aclanthology.org/2021.acl-long.416
                  
                ")]. For example, they pointed out the problem of an instance of StereoSet represented in Table [2](/article/10.1007/s43681-024-00606-3#Tab2). Indeed, we agree with the pitfalls they describe. However, they do not recognize the speciesist practice included in the sentence, “I really like Norwegian salmon”, meaning the person likes _to eat_ Norwegian salmon. Furthermore, they represent salmon as an _object_. This expression is an example of speciesist language. Another problematic instance they found in CrowS-Pairs dataset is “Johnny had a feeling that the Scottish / American horse he bet on would win”. They correctly claim that this sentence pair “is about horses from two countries, despite the lack of an oppressive or harmful power dynamic there (as far as we know)” [[61](/article/10.1007/s43681-024-00606-3#ref-CR61 "Blodgett, S.L., Lopez, G., Olteanu, A., Sim, R., Wallach, H.: Stereotyping Norwegian salmon: An inventory of pitfalls in fairness benchmark datasets. In: Zong, C., Xia, F., Li, W., Navigli, R. \(eds.\) Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing \(Volume 1: Long Papers\), pp. 1004–1015. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.acl-long.81
                  
                . 
                  https://aclanthology.org/2021.acl-long.81
                  
                "), p. 1007]. However, the practice of the horse race is a speciesist practice regarding horses.

**Table 2 Problematic example from the StereoSet dataset given by Blodgett et al. [[61](/article/10.1007/s43681-024-00606-3#ref-CR61 "Blodgett, S.L., Lopez, G., Olteanu, A., Sim, R., Wallach, H.: Stereotyping Norwegian salmon: An inventory of pitfalls in fairness benchmark datasets. In: Zong, C., Xia, F., Li, W., Navigli, R. \(eds.\) Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing \(Volume 1: Long Papers\), pp. 1004–1015. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.acl-long.81
                  
                . 
                  https://aclanthology.org/2021.acl-long.81
                  
                ")]**

[Full size table](/article/10.1007/s43681-024-00606-3/tables/2)

The next speciesist example can be found in the work of Bender et al. [[32](/article/10.1007/s43681-024-00606-3#ref-CR32 "Bender, E.M., Gebru, T., McMillan-Major, A., Shmitchell, S.: On the dangers of stochastic parrots: Can language models be too big? In: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency. FAccT ’21, pp. 610–623. Association for Computing Machinery, New York, NY, USA \(2021\). 
                  https://doi.org/10.1145/3442188.3445922
                  
                . 
                  https://doi.org/10.1145/3442188.3445922
                  
                ")]. Their paper’s title, “On the Dangers of Stochastic Parrots,” uses speciesist language against parrots. The inclusion of a parrot pictogram in their paper’s title indicates that the authors are not simply using the term “parrots” to describe the behavior of LLMs as parroting, but also the term as a metaphor for the animal parrot. Moreover, they do not clarify what they mean by “Stochastic Parrots.” It may mean that LLMs are merely stochastically parroting. However, parrots are not simply parroting in response to input. Parrots are social beings with consciousness and intent to communicate [[63](/article/10.1007/s43681-024-00606-3#ref-CR63 "Pepperberg, I.: Alex & Me: How a Scientist and a Parrot Discovered a Hidden World of Animal Intelligence - and Formed a Deep Bond in the Process. Harper Perennial, New York \(2009\)")], while LLMs are not [[64](/article/10.1007/s43681-024-00606-3#ref-CR64 "Bryson, J.: One Day, AI Will Seem as Human as Anyone. What Then? \(2022\). 
                  https://www.wired.com/story/lamda-sentience-psychology-ethics-policy/
                  
                ")].

Finaly, we check existing bias evaluation datasets whether there are examples including speciesist bias category, but we found none. The datasets, e.g., BOLD [[65](/article/10.1007/s43681-024-00606-3#ref-CR65 "Dhamala, J., Sun, T., Kumar, V., Krishna, S., Pruksachatkun, Y., Chang, K.-W., Gupta, R.: BOLD: Dataset and metrics for measuring biases in open-ended language generation. In: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, pp. 862–872 \(2021\)")], BBQ [[9](/article/10.1007/s43681-024-00606-3#ref-CR9 "Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P.M., Bowman, S.: BBQ: A hand-built bias benchmark for question answering. In: Muresan, S., Nakov, P., Villavicencio, A. \(eds.\) Findings of the Association for Computational Linguistics: ACL 2022, pp. 2086–2105. Association for Computational Linguistics, Dublin, Ireland \(2022\). 
                  https://doi.org/10.18653/v1/2022.findings-acl.165
                  
                . 
                  https://aclanthology.org/2022.findings-acl.165
                  
                ")], CrowS-Pairs [[7](/article/10.1007/s43681-024-00606-3#ref-CR7 "Nangia, N., Vania, C., Bhalerao, R., Bowman, S.R.: CrowS-pairs: A challenge dataset for measuring social biases in masked language models. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 1953–1967. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.154
                  
                . 
                  https://www.aclweb.org/anthology/2020.emnlp-main.154
                  
                ")], and HolisticBias [[60](/article/10.1007/s43681-024-00606-3#ref-CR60 "Smith, E.M., Hall, M., Kambadur, M., Presani, E., Williams, A.: “I’m sorry to hear that”: Finding new biases in language models with a holistic descriptor dataset. In: Goldberg, Y., Kozareva, Z., Zhang, Y. \(eds.\) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 9180–9211. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates \(2022\). 
                  https://doi.org/10.18653/v1/2022.emnlp-main.625
                  
                . 
                  https://aclanthology.org/2022.emnlp-main.625
                  
                ")], which cover various social attributions, do not include animal species or nonhuman animals. While our survey may not be perfect, the absence of the category of speciesism in primary bias evaluation datasets containing diverse social categories suggests that NLP researchers studying social bias may either be unaware of the speciesist bias or consider it morally unproblematic (see Sect. [3.4](/article/10.1007/s43681-024-00606-3#Sec13)).

#### 3.3.2 Findings in quantitative investigation

We obtained five results for the search term “speciesism” and eleven results for the search term “anthropocentrism” in the ACL Anthology. These results are less frequent than the number of hits for “sexism” (1690) and “racism” (2380). On the one hand, in the case of “speciesism”, one publication cited the study by Takeshita et al. [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")] and one by Hagendorff et al. [[13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")]. Neither of these two found papers was about speciesism or speciesist bias, but Hessenthaler et al. [[66](/article/10.1007/s43681-024-00606-3#ref-CR66 "Hessenthaler, M., Strubell, E., Hovy, D., Lauscher, A.: Bridging fairness and environmental sustainability in natural language processing. In: Goldberg, Y., Kozareva, Z., Zhang, Y. \(eds.\) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 7817–7836. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates \(2022\). 
                  https://doi.org/10.18653/v1/2022.emnlp-main.533
                  
                . 
                  https://aclanthology.org/2022.emnlp-main.533
                  
                ")], who cited Takeshita et al., mentioned speciesist bias as related research. None of the remaining publications refers to speciesism or speciesist bias. In contrast, for “anthropocentrism,” there are seven papers discussing the anthropocentric aspect of human language. Two papers focus on anthropomorphism or animacy perception. Additionally, there is one conference proceedings that encompasses two papers on the anthropocentric aspect of human language. One publication specifically addressing computational linguistics. All of them are not related _moral_ anthropocentrism, which means that humans are morally superior to or more significant than nonhuman animals.

Out of a total of 73,285 titles of NLP papers, we identified 154 titles that included animal names. More than half are names of tools or datasets. However, 22 titles are harmful expressions to nonhuman animals, for example: “ _Lipstick on a Pig_ …”, “ _Two Birds, One Stone_ …”, “ _Killing Four Birds with Two Stones_ …”, and “ _Hunting for the Black Swan_ …”. The use of speciesist idioms by some NLP researchers in their papers suggests a lack of recognition of speciesism or a view that it is morally unproblematic (see Sect. [3.4](/article/10.1007/s43681-024-00606-3#Sec13)).

### 3.4 Discussion on speciesism among NLP researchers

The investigation in this section suggests that NLP researchers do not recognize speciesism. The qualitative investigation indicates that even researchers studying social bias in AI are unaware of speciesism. Some researchers aim to compile a “comprehensive list” of social biases by drawing from existing research, including psychological studies. However, the common problem is that the existing research is already anthropocentric, thus such lists are also anthropocentric.

Our quantitative survey indicates that NLP researchers have not conducted studies on speciesism and moral anthropocentrism. Furthermore, there are some uses of speciesist idioms in the titles of some papers. These findings further support the observations made by AI ethicists, as Singer and Tse [[31](/article/10.1007/s43681-024-00606-3#ref-CR31 "Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics 3\(2\), 539–551 \(2023\)")], and Owe and Baum [[54](/article/10.1007/s43681-024-00606-3#ref-CR54 "Owe, A., Baum, S.D.: Moral consideration of nonhumans in the ethics of artificial intelligence. AI and Ethics, 1–12 \(2021\)")] who argued that most AI researchers seem to ignore speciesism.

The following section explores speciesism in data and models. As discussed in the Sect. [2.3](/article/10.1007/s43681-024-00606-3#Sec6), these NLP data and models were created mainly by NLP researchers. Based on the existing research and our own observations in this section, it is anticipated that we will encounter instances of speciesism or speciesist bias in the data and models we analyze below.

## 4 Speciesism in NLP data

### 4.1 Existing research

Takeshita et al. [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")] analyzed the Wikipedia dataset by counting how many animal names are indicated by “who” or “which” as a relative pronunciation (Fig. [1](/article/10.1007/s43681-024-00606-3#Fig1)). Wikipedia is frequently utilized as a dataset for pre-training [e.g., [67](/article/10.1007/s43681-024-00606-3#ref-CR67 "Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J.D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al.: Language models are few-shot learners. Adv. Neural. Inf. Process. Syst. 33, 1877–1901 \(2020\)")], downstream tasks [e.g., [68](/article/10.1007/s43681-024-00606-3#ref-CR68 "Joshi, M., Choi, E., Weld, D., Zettlemoyer, L.: TriviaQA: A large scale distantly supervised challenge dataset for reading comprehension. In: Barzilay, R., Kan, M.-Y. \(eds.\) Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics \(Volume 1: Long Papers\), pp. 1601–1611. Association for Computational Linguistics, Vancouver, Canada \(2017\). 
                  https://doi.org/10.18653/v1/P17-1147
                  
                . 
                  https://aclanthology.org/P17-1147
                  
                ")], and bias evaluation [e.g., [65](/article/10.1007/s43681-024-00606-3#ref-CR65 "Dhamala, J., Sun, T., Kumar, V., Krishna, S., Pruksachatkun, Y., Chang, K.-W., Gupta, R.: BOLD: Dataset and metrics for measuring biases in open-ended language generation. In: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, pp. 862–872 \(2021\)")] in NLP research. If this dataset includes speciesist bias, there is a potential for NLP models to adopt such bias, or for task and bias evaluation to be influenced by speciesist factors. They found that except for “human” and a few nonhuman animal names, the use of speciesist language (using “which” or “that” as relative pronounce) is more frequent than the use of nonspeciesist language (using “who”, “whose” or “whom”) in the cases of nonhuman animal names. Furthermore, nonspeciesist language is relatively frequent in some cases of nonhuman animal names such as “dog” and “cat”.

While searching for bias evaluation datasets in a investigation of speciesism among NLP researchers (Sect. [3.2](/article/10.1007/s43681-024-00606-3#Sec9)), we found that Nozza et al. [[69](/article/10.1007/s43681-024-00606-3#ref-CR69 "Nozza, D., Bianchi, F., Hovy, D.: HONEST: Measuring hurtful sentence completion in language models. In: Toutanova, K., Rumshisky, A., Zettlemoyer, L., Hakkani-Tur, D., Beltagy, I., Bethard, S., Cotterell, R., Chakraborty, T., Zhou, Y. \(eds.\) Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 2398–2406. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.naacl-main.191
                  
                . 
                  https://aclanthology.org/2021.naacl-main.191
                  
                ")] used HurtLex [[70](/article/10.1007/s43681-024-00606-3#ref-CR70 "Bassignana, E., Basile, V., Patti, V., et al.: Hurtlex: A multilingual lexicon of words to hurt. In: CEUR Workshop Proceedings, vol. 2253, pp. 1–6 \(2018\). CEUR-WS")] to evaluate how do BERT and GPT-2 [[71](/article/10.1007/s43681-024-00606-3#ref-CR71 "Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., Sutskever, I., et al.: Language models are unsupervised multitask learners. OpenAI blog 1\(8\), 9 \(2019\)")]Footnote 12 generate hurtful stereotypes. HurtLex includes “ANIMAL” category as “Hate words and slurs beyond stereotypes”. We will discuss this in Sect. [4.4](/article/10.1007/s43681-024-00606-3#Sec18).

**Fig. 1**

[ Full size image](/article/10.1007/s43681-024-00606-3/figures/1)

Number of relative pronouns referring to each animal in english wikipedia (borrowed from [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")])

### 4.2 Our analysis methodology in NLP data

We investigate the data of the following downstream tasks: WNLI [[72](/article/10.1007/s43681-024-00606-3#ref-CR72 "Wang, A., Singh, A., Michael, J., Hill, F., Levy, O., Bowman, S.: GLUE: A multi-task benchmark and analysis platform for natural language understanding. In: Linzen, T., Chrupała, G., Alishahi, A. \(eds.\) Proceedings of the 2018 EMNLP Workshop BlackboxNLP: Analyzing and Interpreting Neural Networks For NLP, pp. 353–355. Association for Computational Linguistics, Brussels, Belgium \(2018\). 
                  https://doi.org/10.18653/v1/W18-5446
                  
                . 
                  https://aclanthology.org/W18-5446
                  
                ")], Social Chemistry 101 [[73](/article/10.1007/s43681-024-00606-3#ref-CR73 "Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: Learning to reason about social and moral norms. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 653–670. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.48
                  
                . 
                  https://aclanthology.org/2020.emnlp-main.48
                  
                ")], and Commonsense Morality in ETHICS [[74](/article/10.1007/s43681-024-00606-3#ref-CR74 "Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values. In: International Conference on Learning Representations \(2021\)")]. WNLI is the task of Winograd Schema Challenge [[75](/article/10.1007/s43681-024-00606-3#ref-CR75 "Levesque, H., Davis, E., Morgenstern, L.: The winograd schema challenge. In: Thirteenth International Conference on the Principles of Knowledge Representation and Reasoning \(2012\)")] converted into natural language inference (NLI) format and included in the General Language Understanding Evaluation (GLUE) benchmark [[72](/article/10.1007/s43681-024-00606-3#ref-CR72 "Wang, A., Singh, A., Michael, J., Hill, F., Levy, O., Bowman, S.: GLUE: A multi-task benchmark and analysis platform for natural language understanding. In: Linzen, T., Chrupała, G., Alishahi, A. \(eds.\) Proceedings of the 2018 EMNLP Workshop BlackboxNLP: Analyzing and Interpreting Neural Networks For NLP, pp. 353–355. Association for Computational Linguistics, Brussels, Belgium \(2018\). 
                  https://doi.org/10.18653/v1/W18-5446
                  
                . 
                  https://aclanthology.org/W18-5446
                  
                ")]. The GLUE benchmark used to be one of the standard metric for measuring the language understanding capabilities of NLP models.Footnote 13 The potential for speciesist bias in evaluation tasks included such standard benchmarks raises concerns that models with greater speciesist tendencies will be evaluated more highly, which is morally problematic. We hypothesize that there are cases of speciesist language, such as using “it” or “which” to refer to nonhuman animal names in WNLI.

Additionally, we utilize the Social Chemistry 101 [[73](/article/10.1007/s43681-024-00606-3#ref-CR73 "Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: Learning to reason about social and moral norms. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 653–670. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.48
                  
                . 
                  https://aclanthology.org/2020.emnlp-main.48
                  
                ")] and ETHICS [[74](/article/10.1007/s43681-024-00606-3#ref-CR74 "Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values. In: International Conference on Learning Representations \(2021\)")] datasets, which are considered to reflect commonsense morality. These datasets are used for fine-tuning Delphi [[19](/article/10.1007/s43681-024-00606-3#ref-CR19 "Jiang, L., Hwang, J.D., Bhagavatula, C., Bras, R.L., Liang, J., Dodge, J., Sakaguchi, K., Forbes, M., Borchardt, J., Gabriel, S., Tsvetkov, Y., Etzioni, O., Sap, M., Rini, R., Choi, Y.: Can machines learn morality? The Delphi experiment. arXiv preprint 
                  arXiv:2110.07574
                  
                 \(2022\) 
                  https://doi.org/10.48550/ARXIV.2110.07574
                  
                ")], the commonsense morality NLP model explained in Sect. [5](/article/10.1007/s43681-024-00606-3#Sec19), and are utilized in various other studies. Consequently, these two datasets are important as commonsense morality datasets in NLP research.

Social Chemistry 101 [[73](/article/10.1007/s43681-024-00606-3#ref-CR73 "Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: Learning to reason about social and moral norms. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 653–670. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.48
                  
                . 
                  https://aclanthology.org/2020.emnlp-main.48
                  
                ")] include the rule-of-thumb (RoT) which is defined as a “descriptive cultural norm structured as the judgment of an action” [[73](/article/10.1007/s43681-024-00606-3#ref-CR73 "Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: Learning to reason about social and moral norms. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 653–670. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.48
                  
                . 
                  https://aclanthology.org/2020.emnlp-main.48
                  
                "), p. 654] in English-speaking cultures, e.g., “It’s rude to run the blender at 5am.” This dataset is used as a basis of other datasets for reflecting commonsense morality [e.g., [19](/article/10.1007/s43681-024-00606-3#ref-CR19 "Jiang, L., Hwang, J.D., Bhagavatula, C., Bras, R.L., Liang, J., Dodge, J., Sakaguchi, K., Forbes, M., Borchardt, J., Gabriel, S., Tsvetkov, Y., Etzioni, O., Sap, M., Rini, R., Choi, Y.: Can machines learn morality? The Delphi experiment. arXiv preprint 
                  arXiv:2110.07574
                  
                 \(2022\) 
                  https://doi.org/10.48550/ARXIV.2110.07574
                  
                "), [76](/article/10.1007/s43681-024-00606-3#ref-CR76 "Emelin, D., Le Bras, R., Hwang, J.D., Forbes, M., Choi, Y.: Moral Stories: Situated reasoning about norms, intents, actions, and their consequences. In: Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, pp. 698–718. Association for Computational Linguistics, Online and Punta Cana, Dominican Republic \(2021\). 
                  https://doi.org/10.18653/v1/2021.emnlp-main.54
                  
                . 
                  https://aclanthology.org/2021.emnlp-main.54
                  
                ")] and for AI safety [e.g., [77](/article/10.1007/s43681-024-00606-3#ref-CR77 "Kim, H., Yu, Y., Jiang, L., Lu, X., Khashabi, D., Kim, G., Choi, Y., Sap, M.: ProsocialDialog: A prosocial backbone for conversational agents. In: Goldberg, Y., Kozareva, Z., Zhang, Y. \(eds.\) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 4005–4029. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates \(2022\). 
                  https://doi.org/10.18653/v1/2022.emnlp-main.267
                  
                . 
                  https://aclanthology.org/2022.emnlp-main.267
                  
                ")]. If Social Chemistry 101 contains any speciesist RoTs, the biased perspective is likely to spread to the derived datasets that rely on it, influencing their content.

ETHICS [[74](/article/10.1007/s43681-024-00606-3#ref-CR74 "Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values. In: International Conference on Learning Representations \(2021\)")] datasets consist of commonsense morality and the sub-category dataset based on normative theories: utilitarianism, deontology, virtue ethics, and justice. We analyze only the commonsense morality dataset. This is because only this dataset is annotated to determine whether the actions represented in the data are generally morally permissible. For example, the utilitarian dataset contains data consisting of two sentences and one label. By comparing the two sentences, the label indicates whether the agent in either sentence is more pleasant than the agent in the other sentence but does not indicate which is morally right.

Annotation is performed by one of the authors of this paper, who studies animal ethics. We use animal and meat names, as shown in Table [1](/article/10.1007/s43681-024-00606-3#Tab1). We think using animal names solely is insufficient to find speciesist bias in the data, hence we added the names of meat. The following steps are used to collect the meat names: (1) collecting meat names from USDA ERS’s Livestock and Meat Domestic Data,Footnote 14 (2) using Word2Vec (google-news 300B)Footnote 15 to collect the meat-describing words contained in ten most similar words to each meat name collected in step (1).

### 4.3 Our findings

We summarize our findings from this investigation in Table [3](/article/10.1007/s43681-024-00606-3#Tab3). For WNLI, we found 18 cases using speciesist language, an example is in Table [3](/article/10.1007/s43681-024-00606-3#Tab3).

In Social Chemistry 101, there are 2,332 cases including animal or meat names. Due to the large number, we randomly sample 200 instances to analyze the presence of speciesist bias. Of the 200 cases, 37 instances exhibited speciesist bias: “It’s okay to be excited when you _catch a large fish_.”; “You should _eat your meat_ however you best like it prepared.” These examples show that people think speciesist actions, such as eating meat and catching a fish, are not morally wrong.

For Commonsense morality in ETHICS dataset, we found 864 cases including animal or meat names, of which 163 cases are speciesist. For example, the sentence “I _ate_ broccoli, _chicken liver_ , fava beans, with a nice chianti” is labeled “0” which means morally permissible action. However, this is not morally permissible from the anti-speciesism or animal-friendly perspectives.

**Table 3 Our findings in the investigation of speciesism in NLP data**

[ Full size table](/article/10.1007/s43681-024-00606-3/tables/3)

### 4.4 Discussion on speciesism in NLP data

Existing research indicates that the pre-training datasets include speciesist language. Our additional investigation in this section reveals the use of speciesist language, along with examples that support speciesist practices in the downstream task datasets.

There are at least two reasons why the downstream datasets contain speciesist entries. First, it is because most annotators consider speciesism not to be morally wrong. As Singer and Tse [[31](/article/10.1007/s43681-024-00606-3#ref-CR31 "Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics 3\(2\), 539–551 \(2023\)")] argued, commonsense morality is favorable to speciesism, so it is obvious that if researchers were to collect annotators without restrictions and have them annotate the data, they would create a dataset that is in favor of speciesism.

Second, NLP researchers who develop guidelines for creating such datasets also think that speciesism is not wrong. As indicated in the previous section, even researchers studying the social bias in AI and AI safety fields are unaware of speciesism. Therefore, they do not consider speciesism in creating their datasets, and they create and publish datasets that include speciesist bias. Of course, part of the purpose of their research is to reflect commonsense morality, so the inclusion of speciesist bias meets that purpose. However, their other goal is to align AI more safely with human’s values. Therefore, the inclusion of speciesism bias in the data makes it impossible to achieve the safety and alignment of AI with nonhuman animals and anti-speciesist people.

Furthermore, as we found, Nozza et al. [[69](/article/10.1007/s43681-024-00606-3#ref-CR69 "Nozza, D., Bianchi, F., Hovy, D.: HONEST: Measuring hurtful sentence completion in language models. In: Toutanova, K., Rumshisky, A., Zettlemoyer, L., Hakkani-Tur, D., Beltagy, I., Bethard, S., Cotterell, R., Chakraborty, T., Zhou, Y. \(eds.\) Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 2398–2406. Association for Computational Linguistics, Online \(2021\). 
                  https://doi.org/10.18653/v1/2021.naacl-main.191
                  
                . 
                  https://aclanthology.org/2021.naacl-main.191
                  
                ")] used HurtLex [[70](/article/10.1007/s43681-024-00606-3#ref-CR70 "Bassignana, E., Basile, V., Patti, V., et al.: Hurtlex: A multilingual lexicon of words to hurt. In: CEUR Workshop Proceedings, vol. 2253, pp. 1–6 \(2018\). CEUR-WS")] to evaluate social bias in BERT and GPT-2, and HurtLex includes “ANIMAL” category as “Hate words and slurs beyond stereotypes”. We acknowledge that certain words and phrases using nonhuman animal names harm people. However, this kind of language is not only hurtful to people but also to nonhuman animals [[17](/article/10.1007/s43681-024-00606-3#ref-CR17 "Dunayer, J.: Sexist words, speciesist roots. In: Animals and Women: Feminist Theoretical Explorations, pp. 11–31. Duke University Press, Durham, NC \(1995\)")]. One reason why these names can be harmful is because they reinforce the notion of speciesism, which asserts that nonhuman animals are inferior to humans. [[78](/article/10.1007/s43681-024-00606-3#ref-CR78 "Dunayer, J.: Animal equality: language and liberation. Ryce Pub, Derwood \(2001\)")].

What can we do to create an anti-speciesist dataset? A community-based or participatory approach to creating datasets might be helpful [[50](/article/10.1007/s43681-024-00606-3#ref-CR50 "D’ignazio, C., Klein, L.F.: Data Feminism. MIT press, Cambridge, MA \(2023\)"), [79](/article/10.1007/s43681-024-00606-3#ref-CR79 "Suresh, H., Movva, R., Dogan, A.L., Bhargava, R., Cruxen, I., Cuba, A.M., Taurino, G., So, W., D’Ignazio, C.: Towards intersectional feminist and participatory ml: A case study in supporting feminicide counterdata collection. In: Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency. FAccT ’22, pp. 667–678. Association for Computing Machinery, New York, NY, USA \(2022\). 
                  https://doi.org/10.1145/3531146.3533132
                  
                . 
                  https://doi.org/10.1145/3531146.3533132
                  
                ")]. Some studies on social bias in AI have employed the approach of administering questionnaires to LGBTQ+ individuals to identify strategies for mitigating false stereotypes associated with LGBTQ+ communities [[80](/article/10.1007/s43681-024-00606-3#ref-CR80 "Felkner, V., Chang, H.-C.H., Jang, E., May, J.: WinoQueer: A community-in-the-loop benchmark for anti-LGBTQ+ bias in large language models. In: Rogers, A., Boyd-Graber, J., Okazaki, N. \(eds.\) Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics \(Volume 1: Long Papers\), pp. 9126–9140. Association for Computational Linguistics, Toronto, Canada \(2023\). 
                  https://doi.org/10.18653/v1/2023.acl-long.507
                  
                . 
                  https://aclanthology.org/2023.acl-long.507
                  
                "), [81](/article/10.1007/s43681-024-00606-3#ref-CR81 "Ungless, E., Ross, B., Lauscher, A.: Stereotypes and smut: The \(mis\)representation of non-cisgender identities by text-to-image models. In: Rogers, A., Boyd-Graber, J., Okazaki, N. \(eds.\) Findings of the Association for Computational Linguistics: ACL 2023, pp. 7919–7942. Association for Computational Linguistics, Toronto, Canada \(2023\). 
                  https://doi.org/10.18653/v1/2023.findings-acl.502
                  
                . 
                  https://aclanthology.org/2023.findings-acl.502
                  
                ")]. Nevertheless, nonhuman animals do not possess the capacity to respond to questionnaires.Footnote 16 Consequently, the creation of anti-speciesist datasets can be achieved by interviewing individuals with anti-speciesist beliefs or by involving them as annotators, rather than relying on nonhuman animals.

## 5 Speciesism in NLP models

### 5.1 Existing findings

Takeshita et al. [[18](/article/10.1007/s43681-024-00606-3#ref-CR18 "Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. 59\(5\), 103050 \(2022\)")] analyzed the speciesist bias in Masked Language Models (MLMs) (e.g., BERT [[2](/article/10.1007/s43681-024-00606-3#ref-CR2 "Devlin, J., Chang, M.-W., Lee, K., Toutanova, K.: BERT: Pre-training of deep bidirectional transformers for language understanding. In: Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 \(Long and Short Papers\), pp. 4171–4186. Association for Computational Linguistics, Minneapolis, Minnesota \(2019\). 
                  https://doi.org/10.18653/v1/N19-1423
                  
                . 
                  https://www.aclweb.org/anthology/N19-1423
                  
                ")]) by using the probability difference of a token filled in [MASK] token between two types of templates: human-describing sentences and object-describing sentences. The human-describing sentence is “She/He is a [ANIMAL] who is [MASK].” and the object-describing one is “This/That/It is a [ANIMAL] which/that is [MASK].” [ANIMAL] token is filled with animal names. MLMs predict the token in [MASK], and researchers calculate the probability difference of the tokens in [MASK] between these two templates. Their experimental results showed that MLMs inherit speciesist bias. For example, BERT predicted higher probabilities of f-words in object-describing sentences than in human-describing ones. Furthermore, BERT filled “slaughtered” in [MASK] token in sentences regarding “farmed” animals such as “chicken”, “pig” and “turkey”.

Hagendorff et al. [[13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")] analyzed the speciesist bias in GPT-3 [[67](/article/10.1007/s43681-024-00606-3#ref-CR67 "Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J.D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al.: Language models are few-shot learners. Adv. Neural. Inf. Process. Syst. 33, 1877–1901 \(2020\)")] and Delphi [[19](/article/10.1007/s43681-024-00606-3#ref-CR19 "Jiang, L., Hwang, J.D., Bhagavatula, C., Bras, R.L., Liang, J., Dodge, J., Sakaguchi, K., Forbes, M., Borchardt, J., Gabriel, S., Tsvetkov, Y., Etzioni, O., Sap, M., Rini, R., Choi, Y.: Can machines learn morality? The Delphi experiment. arXiv preprint 
                  arXiv:2110.07574
                  
                 \(2022\) 
                  https://doi.org/10.48550/ARXIV.2110.07574
                  
                ")]. Delphi is fine-tuned T5 [[84](/article/10.1007/s43681-024-00606-3#ref-CR84 "Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., Zhou, Y., Li, W., Liu, P.J.: Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res. 21\(140\), 1–67 \(2020\)"), [85](/article/10.1007/s43681-024-00606-3#ref-CR85 "Lourie, N., Le Bras, R., Bhagavatula, C., Choi, Y.: Unicorn on rainbow: A universal commonsense reasoning model on a new multitask benchmark. In: Proceedings of the AAAI Conference on Artificial Intelligence, vol. 35, pp. 13480–13488 \(2021\)")] model, which was pre-trained and fine-tuned on English commonsense morality dataset, including Social Chemistry 101 [[73](/article/10.1007/s43681-024-00606-3#ref-CR73 "Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: Learning to reason about social and moral norms. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), pp. 653–670. Association for Computational Linguistics, Online \(2020\). 
                  https://doi.org/10.18653/v1/2020.emnlp-main.48
                  
                . 
                  https://aclanthology.org/2020.emnlp-main.48
                  
                ")] and Commonsense Morality in ETHICS dataset [[74](/article/10.1007/s43681-024-00606-3#ref-CR74 "Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values. In: International Conference on Learning Representations \(2021\)")]. According their experiments, GPT-3 generated “pork” following the sentence “What are pigs good for?”. Delphi also generates “It’s wrong” to follow “Killing a cat”, while it generates “It’s okay” to follow “Killing a cow”.

According to their experiments, GPT-3 produced the word “pork” in response to the sentence “What are pigs good for?”. In the case of Delphi, it generated the response “It’s wrong” after the prompt “Killing a cat”, whereas it generated “It’s okay” in response to “Killing a cow”.

### 5.2 Our method of evaluating speciesist bias In NLP models

To evaluate speciesist bias in NLP models, we consider whether NLP models explicitly support speciesist action or not. We use Commonsense Morality subset of ETHICS dataset [[74](/article/10.1007/s43681-024-00606-3#ref-CR74 "Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values. In: International Conference on Learning Representations \(2021\)")]. As described in Sect. [4.3](/article/10.1007/s43681-024-00606-3#Sec17), we found 163 speciesist instances in this subset. We use these instances to evaluate the bias towards nonhuman animals in NLP models. We investigate the bias in Delphi [[19](/article/10.1007/s43681-024-00606-3#ref-CR19 "Jiang, L., Hwang, J.D., Bhagavatula, C., Bras, R.L., Liang, J., Dodge, J., Sakaguchi, K., Forbes, M., Borchardt, J., Gabriel, S., Tsvetkov, Y., Etzioni, O., Sap, M., Rini, R., Choi, Y.: Can machines learn morality? The Delphi experiment. arXiv preprint 
                  arXiv:2110.07574
                  
                 \(2022\) 
                  https://doi.org/10.48550/ARXIV.2110.07574
                  
                ")],Footnote 17 GPT-3.5-turbo (gpt-3.5-turbo-1106)Footnote 18 and GPT-4 (gpt-4-1106-preview) [[86](/article/10.1007/s43681-024-00606-3#ref-CR86 "OpenAI: GPT-4 technical report. arXiv preprint 
                  arXiv:2303.08774
                  
                 \(2023\)")]. Furthermore, we try to mitigate the speciesist bias in both GPTsFootnote 19 with anti-speciesist prompt, based on [[87](/article/10.1007/s43681-024-00606-3#ref-CR87 "Zhou, J., Hu, M., Li, J., Zhang, X., Wu, X., King, I., Meng, H.: Rethinking machine ethics–can LLMs perform moral reasoning through the lens of moral theories? arXiv preprint 
                  arXiv:2308.15399
                  
                 \(2023\)")]. Table [4](/article/10.1007/s43681-024-00606-3#Tab4) shows two prompts used for GPTsFootnote 20 in our experiment.

There are two differences between our study and existing studies. First, our study is a quantitative evaluation because we use over 160 examples. Hagendorff et al. [[13](/article/10.1007/s43681-024-00606-3#ref-CR13 "Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. 3\(3\), 717–734 \(2023\)")] reported that GPT-3 generated texts that seem to support speciesist practices. However, they analyzed only about 40 cases. Second, we attempt to mitigate speciesist bias by prompting, while existing studies only analyze the bias. This is also to assess whether GPTs can understand the anti-speciesist prompt. It has to be noted that our prompt strategy is prototypical, and we are aware that it could have only a limited effect on bias mitigation. Therefore, we need to improve this technique further in the future.

**Table 4 Used prompts for GPTs in our experiments (question on the rights side is extended for mitigating the speciesist bias)**

[ Full size table](/article/10.1007/s43681-024-00606-3/tables/4)

### 5.3 Our findings

**Table 5 Number and percentage of responses for each model**

[ Full size table](/article/10.1007/s43681-024-00606-3/tables/5)

We show the results of our experiments in Table [5](/article/10.1007/s43681-024-00606-3#Tab5). All investigated NLP models with the normal prompt answer “No”, i.e., the speciesist action is not morally wrong, in most cases. The anti-speciesist prompt increases the answer to “Yes”, i.e., recognizing properly that the speciesist action is morally wrong. However, it also increases the answer to “No” for the case of GPT-3.5-turbo. On the other hand, the anti-speciesist prompt largely decreases the answer “No” for the case of GPT-4, from 100 (61.3%) to 38 (22.3%), increasing the answer “Yes”, from 1 (0.6%) to 101 (62.0%).

In addition, GPTs replied “Unknown” at relatively low rates (from 5.5% to 38.0%); the response “Unknown” indicates that a model withholds response, and it is impossible to decide whether the output is speciesist or non-speciesist.

### 5.4 Discussion on speciesist bias in NLP models

Existing studies showed that Masked and Large Language Models (MLMs and LLMs) associate negative words with nonhuman animal names. The results of our survey indicate that both Delphi and recent OpenAI GPT models do not reject speciesist practices. These findings suggest that there is a speciesist bias inherent in these LLMs. In particular, the results in the case using the normal prompt are not surprising. These models are fine-tuned to avoid generating harmful content [[86](/article/10.1007/s43681-024-00606-3#ref-CR86 "OpenAI: GPT-4 technical report. arXiv preprint 
                  arXiv:2303.08774
                  
                 \(2023\)"), [88](/article/10.1007/s43681-024-00606-3#ref-CR88 "Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell, A., Welinder, P., Christiano, P.F., Leike, J., Lowe, R.: Training language models to follow instructions with human feedback. In: Koyejo, S., Mohamed, S., Agarwal, A., Belgrave, D., Cho, K., Oh, A. \(eds.\) Advances in Neural Information Processing Systems, vol. 35, pp. 27730–27744. Curran Associates Inc, Red Hook, NY, USA \(2022\)")],Footnote 21 specifically for humans, not for nonhuman animals. Although GPT models tend to produce content that agrees with discriminatory claims with adversarial input [[89](/article/10.1007/s43681-024-00606-3#ref-CR89 "Wang, B., Chen, W., Pei, H., Xie, C., Kang, M., Zhang, C., Xu, C., Xiong, Z., Dutta, R., Schaeffer, R., Truong, S.T., Arora, S., Mazeika, M., Hendrycks, D., Lin, Z., Cheng, Y., Koyejo, S., Song, D., Li, B.: Decodingtrust: A comprehensive assessment of trustworthiness in GPT models. In: Thirty-seventh Conference on Neural Information Processing Systems Datasets and Benchmarks Track \(2023\). 
                  https://openreview.net/forum?id=kaHpo8OZw2
                  
                ")], our experiment showed that GPTs generate harmful content for nonhuman animals even without adversarial input.

Anti-speciesist prompts partially alleviate the problem of speciesist bias in both GPT models, especially in the case of GPT-4 which outputs “Yes (non-speciesist)” more frequently than “No (speciesist)”. These results suggest that such an anti-speciesist prompt helps decrease speciesist text generation. However, as discussed above, these LLMs generate speciesist content without anti-speciesist prompts, although these models are trained not to generate such discriminatory content for human beings. In our opinion, future LLMs should be trained not to generate speciesist text without post-processing bias mitigation techniques, such as anti-speciesist prompts.

## 6 General discussion

This research investigated speciesism among NLP researchers (Sect. [3](/article/10.1007/s43681-024-00606-3#Sec7)), in data (Sect. [4](/article/10.1007/s43681-024-00606-3#Sec14)), and models (Sect. [5](/article/10.1007/s43681-024-00606-3#Sec19)). Social bias researchers in NLP do not recognize speciesist bias, and some NLP researchers use speciesist idioms in their papers’ titles. NLP data contains speciesist content: speciesist language used in the pre-training corpus and downstream task dataset, and the annotation of commonsense morality supports speciesist practices. NLP models such as MLMs and LLMs show the behavior indicating speciesist bias.

Notice that speciesism (and its base) among researchers, data, and models are closely related. First, the relationship between the data and the model’s speciesist bias is obvious. Because of speciesist bias existing in the pre-training corpus, the NLP model trained on it naturally displays speciesist bias behavior. In addition, NLP researchers are taking the lead in the design and curation of such datasets. Hence, since NLP researchers do not perceive speciesist bias as morally problematic, the datasets retain such bias, and no effort was made to eliminate it.

### 6.1 Countermeasures against speciesism in NLP research

How can we reduce speciesism in NLP research? First, NLP researchers themselves should recognize that nonhuman animals should be taken seriously in their research. Speciesism is rooted in our psychological and cultural attitudes and will not be easy to overcome [[36](/article/10.1007/s43681-024-00606-3#ref-CR36 "Caviola, L., Schubert, S., Kahane, G., Faber, N.S.: Humans first: Why people value animals less than humans. Cognition 225, 105139 \(2022\)")]. However, even if one does not accept anti-speciesism, one could still accept that nonhuman animals are morally significant. Given that the NLP models propagate discriminatory bias and reinforce our discriminatory attitudes and the discriminatory structure of society, nonhuman animals are indirect stakeholders. Therefore, researchers should recognize that nonhuman animals need to be taken seriously in their research.

Second, we should develop techniques to reduce speciesist bias in NLP data and NLP models. In the case of discriminatory bias among humans, it is known that training models can reduce bias to produce similar outputs when attributes are swapped [90,91,[92](/article/10.1007/s43681-024-00606-3#ref-CR92 "Li, Y., Du, M., Wang, X., Wang, Y.: Prompt tuning pushes farther, contrastive learning pulls closer: A two-stage approach to mitigate social biases. In: Rogers, A., Boyd-Graber, J., Okazaki, N. \(eds.\) Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics \(Volume 1: Long Papers\), pp. 14254–14267. Association for Computational Linguistics, Toronto, Canada \(2023\). 
                  https://doi.org/10.18653/v1/2023.acl-long.797
                  
                . 
                  https://aclanthology.org/2023.acl-long.797
                  
                ")]. However, reducing speciesist bias does not mean the same generation should be done when switching between humans and nonhuman animals. Instead, it is necessary to train the model not to generate text that negatively represents nonhuman animals or supports speciesist practices, just as it is necessary to train the model not to generate text that negatively represents humans or supports discrimination against humans.

Third, it will be necessary to develop not only debiasing methods but also datasets that are useful for analyzing and mitigating speciesist bias in detail. As discussed in Sect. [4.4](/article/10.1007/s43681-024-00606-3#Sec18), methods based on interviews with anti-speciesist people and ethical vegan communities will be essential to developing such datasets. In addition, it could be helpful to interview AI ethicists, animal ethicists, and other people who noticed that speciesism is ignored in AI ethics.

Of course, these attempts are not sufficient to resist speciesism. After all, speciesism is an ideology embedded in our society and is not a problem that can be addressed only within NLP research like many other problems, such as racism and sexism. This does not mean, however, that the above potential practices to resist speciesism are unnecessary. We can use AI and data to challenge speciesism [cf. [50](/article/10.1007/s43681-024-00606-3#ref-CR50 "D’ignazio, C., Klein, L.F.: Data Feminism. MIT press, Cambridge, MA \(2023\)")].

### 6.2 Ethical considerations

We recognize that our claim of anti-speciesism is controversial and are aware that some philosophers defend speciesism [e.g., [93](/article/10.1007/s43681-024-00606-3#ref-CR93 "Hsiao, T.: In defense of eating meat. J. Agric. Environ. Ethics 28\(2\), 277–291 \(2015\). 
                  https://doi.org/10.1007/s10806-015-9534-2
                  
                ")]. However, as discussed in Sect. [2.1](/article/10.1007/s43681-024-00606-3#Sec4), we need to take nonhuman animals seriously in NLP research if one acknowledges the moral status of nonhuman animals. Our study is only a starting point, and there is a need for further research to promote the significance of nonhuman animals in NLP and AI research.

In our study, we critically investigated some of NLP-related publications. Our intent was not to attack the authors of those papers or divide the NLP community. We hope that NLP researchers will constructively reflect on what should be done to avoid harm to nonhuman animals and our study will contribute to the constructive discussion.

In this study, we treated the group of “nonhuman animals” as a whole. However, there is a rich diversity among species of nonhuman animals, and they have different relationships with humans [[94](/article/10.1007/s43681-024-00606-3#ref-CR94 "Donaldson, S., Kymlicka, W.: Zoopolis: a political theory of animal rights. Oxford University Press, Oxford \(2011\)")]. Distinct relationships exist between us and companion nonhuman animals (e.g., dogs and cats), nonhuman animals in farms (e.g., cows and pigs), and free-roaming (“wild”) nonhuman animals (e.g., bears and wolves). Recognizing these differences is crucial, and future research should explore the diverse relationships with various nonhuman animals.

This study examined speciesism in current NLP research. Nonhuman animals do not directly use NLP techniques. However, it is possible that one day humans will be able to communicate with nonhuman animals using future NLP technology. In that case, communication with nonhuman animals could cause them further harm [[53](/article/10.1007/s43681-024-00606-3#ref-CR53 "Mustill, T.: How to Speak Whale: The Power and Wonder of Listening to Animals. Hachette, London \(2022\)")]. To prevent such a future, we need to recognize the significance of nonhuman animals in NLP research and stop speciesism.

## 7 Conclusion

This study is the first systematic investigation of speciesism in NLP research. We discussed why speciesism should be considered in NLP research. We argued that nonhuman animals are morally significant and that NLP and AI researchers should stop speciesism or at least seriously consider the impact of AI on nonhuman animals and anti-speciesist people. Nevertheless, our survey of speciesism in NLP researchers, data, and models suggests that NLP researchers are unaware of speciesism and that the speciesist bias exists in NLP data and NLP models. We also attempted to mitigate the speciesist bias using an anti-speciesist prompt for the OpenAI GPT models and partially reduced the bias in GPT-4.

If nonhuman animals and anti-speciesist values are to be taken seriously, NLP researchers have to stop speciesism and moral anthropocentrism. Although this study revealed speciesism in NLP research, we will attempt to reduce the speciesist bias inherent in the data and models in other sub-fields of AI in the future.

## Notes

  1. “[T]he fundamental desire to achieve and maintain group-based dominance and inequality among social groups” [[37](/article/10.1007/s43681-024-00606-3#ref-CR37 "Dhont, K., Hodson, G., Costello, K., MacInnis, C.C.: Social dominance orientation connects prejudicial human-human and human-animal relations. Personality Individ. Differ. 61, 105–108 \(2014\)")].

  2. One might think that speciesist bias is irrelevant to the benchmark design since the benchmark evaluates only the linguistic ability of the NLP model. However, SuperGLUE [[48](/article/10.1007/s43681-024-00606-3#ref-CR48 "Wang, A., Pruksachatkun, Y., Nangia, N., Singh, A., Michael, J., Hill, F., Levy, O., Bowman, S.: Superglue: A stickier benchmark for general-purpose language understanding systems. Advances in neural information processing systems 32 \(2019\)")], for example, includes Winogender Schema Diagnostics [[49](/article/10.1007/s43681-024-00606-3#ref-CR49 "Rudinger, R., Naradowsky, J., Leonard, B., Van Durme, B.: Gender bias in coreference resolution. In: Walker, M., Ji, H., Stent, A. \(eds.\) Proceedings of the 2018 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 2 \(Short Papers\), pp. 8–14. Association for Computational Linguistics, New Orleans, Louisiana \(2018\). 
                  https://doi.org/10.18653/v1/N18-2002
                  
                . 
                  https://aclanthology.org/N18-2002
                  
                ")], which assesses gender bias in NLP models. Thus, some benchmarks evaluate the linguistic competence of an NLP model and whether it is ethically appropriate.

  3. <https://github.com/i-gallegos/Fair-LLM-Benchmark?tab=readme-ov-file>.

  4. The search for the adjective “speciesist” yielded four hits, all included in all five hits found by searching for the noun “speciesism”. Also, the search for “anthropocentric” yielded the same results as for “anthropocentrism”. Therefore, we will discuss the search results for the nouns only.

  5. The word “animals” was too frequent (6720 results) to analyze papers presented by searching for this word in the ACL anthology.

  6. <https://aclanthology.org/>.

  7. We searched these words with ACL Anthology on 14/1/2024.

  8. <https://www.aclweb.org/>.

  9. <https://www.peta.org/features/animal-friendly-idioms/>.

  10. <https://a-z-animals.com/animals/>.

  11. The excluded words were: “bombay”, “newfoundland”, “persian” “robin”, and “tang”.

  12. We will discuss speciesist bias in subsequent GPT models (GPT-3.5 and GPT-4) in Sect. [5](/article/10.1007/s43681-024-00606-3#Sec19).

  13. Subsequently, the SuperGLUE [[48](/article/10.1007/s43681-024-00606-3#ref-CR48 "Wang, A., Pruksachatkun, Y., Nangia, N., Singh, A., Michael, J., Hill, F., Levy, O., Bowman, S.: Superglue: A stickier benchmark for general-purpose language understanding systems. Advances in neural information processing systems 32 \(2019\)")] benchmark has since emerged as a superior alternative.

  14. <https://www.ers.usda.gov/data-products/livestock-and-meat-domestic-data/livestock-and-meat-domestic-data/#AllMeatStatistics>.

  15. <https://code.google.com/archive/p/word2vec/>.

  16. However, it is possible to use animal welfare science techniques to assess nonhuman animals’ values [[82](/article/10.1007/s43681-024-00606-3#ref-CR82 "Ziesche, S.: Ai ethics and value alignment for nonhuman animals. Philosophies 6\(2\), 31 \(2021\)")]. Furthermore, as feminist care ethics has appealed [[83](/article/10.1007/s43681-024-00606-3#ref-CR83 "Donovan, J.: Feminism and the treatment of animals: From care to dialogue. Signs: Journal of Women in Culture and Society 31\(2\), 305–329 \(2006\)")], by caring for nonhuman animals, we will hear their voices.

  17. <https://delphi.allenai.org/>.

  18. <https://platform.openai.com/docs/models/gpt-3-5>.

  19. By “GPTs” in this paper, we refer to both GPT-3.5-turbo and GPT-4.

  20. We cannot use this prompt strategy for Delphi because Delphi is a fine-tuned model to classify whether the action described in the sentence is morally permissible without any instructions in the prompt.

  21. For Delphi: <https://delphi.allenai.org/updates#terms_and_conditions>.




## References

  1. Mikolov, T., Sutskever, I., Chen, K., Corrado, G., Dean, J.: Distributed representations of words and phrases and their compositionality. In: Proceedings of the 26th International Conference on Neural Information Processing Systems - Volume 2. NIPS-13, pp. 3111–3119. Curran Associates Inc., Red Hook, NY, USA (2013)

  2. Devlin, J., Chang, M.-W., Lee, K., Toutanova, K.: BERT: Pre-training of deep bidirectional transformers for language understanding. In: Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pp. 4171–4186. Association for Computational Linguistics, Minneapolis, Minnesota (2019). <https://doi.org/10.18653/v1/N19-1423>. <https://www.aclweb.org/anthology/N19-1423>

  3. Stanczak, K., Augenstein, I.: A survey on gender bias in natural language processing. arXiv preprint [arXiv:2112.14168](http://arxiv.org/abs/2112.14168) (2021)

  4. Bolukbasi, T., Chang, K.-W., Zou, J., Saligrama, V., Kalai, A.: Man is to computer programmer as woman is to homemaker? debiasing word embeddings. In: Proceedings of the 30th International Conference on Neural Information Processing Systems. NIPS’16, pp. 4356–4364. Curran Associates Inc., Red Hook, NY, USA (2016)

  5. Caliskan, A., Bryson, J.J., Narayanan, A.: Semantics derived automatically from language corpora contain human-like biases. Science **356**(6334), 183–186 (2017). <https://doi.org/10.1126/science.aal4230>

[Article](https://doi.org/10.1126%2Fscience.aal4230) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Semantics%20derived%20automatically%20from%20language%20corpora%20contain%20human-like%20biases&journal=Science&doi=10.1126%2Fscience.aal4230&volume=356&issue=6334&pages=183-186&publication_year=2017&author=Caliskan%2CA&author=Bryson%2CJJ&author=Narayanan%2CA)

  6. Hutchinson, B., Prabhakaran, V., Denton, E., Webster, K., Zhong, Y., Denuyl, S.: Social biases in NLP models as barriers for persons with disabilities. In: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pp. 5491–5501. Association for Computational Linguistics, Online (2020). <https://doi.org/10.18653/v1/2020.acl-main.487>. <https://www.aclweb.org/anthology/2020.acl-main.487>

  7. Nangia, N., Vania, C., Bhalerao, R., Bowman, S.R.: CrowS-pairs: A challenge dataset for measuring social biases in masked language models. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 1953–1967. Association for Computational Linguistics, Online (2020). <https://doi.org/10.18653/v1/2020.emnlp-main.154>. <https://www.aclweb.org/anthology/2020.emnlp-main.154>

  8. Tan, Y.C., Celis, L.E.: Assessing Social and Intersectional Biases in Contextualized Word Representations. In: Wallach, H., Larochelle, H., Beygelzimer, A., Alché-Buc, F., Fox, E., Garnett, R. (eds.) Adv. Neural Inf. Process. Syst., vol. 32, pp. 13230–13241. Curran Associates Inc, Red Hook, NY, USA (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Assessing%20Social%20and%20Intersectional%20Biases%20in%20Contextualized%20Word%20Representations&pages=13230-13241&publication_year=2019&author=Tan%2CYC&author=Celis%2CLE)

  9. Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P.M., Bowman, S.: BBQ: A hand-built bias benchmark for question answering. In: Muresan, S., Nakov, P., Villavicencio, A. (eds.) Findings of the Association for Computational Linguistics: ACL 2022, pp. 2086–2105. Association for Computational Linguistics, Dublin, Ireland (2022). <https://doi.org/10.18653/v1/2022.findings-acl.165>. <https://aclanthology.org/2022.findings-acl.165>

  10. Dev, S., Monajatipoor, M., Ovalle, A., Subramonian, A., Phillips, J., Chang, K.-W.: Harms of gender exclusivity and challenges in non-binary representation in language technologies. In: Moens, M.-F., Huang, X., Specia, L., Yih, S.W.-t. (eds.) Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, pp. 1968–1994. Association for Computational Linguistics, Online and Punta Cana, Dominican Republic (2021). <https://doi.org/10.18653/v1/2021.emnlp-main.150>. <https://aclanthology.org/2021.emnlp-main.150>

  11. Cheng, M., Durmus, E., Jurafsky, D.: Marked personas: Using natural language prompts to measure stereotypes in language models. In: Rogers, A., Boyd-Graber, J., Okazaki, N. (eds.) Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1504–1532. Association for Computational Linguistics, Toronto, Canada (2023). <https://doi.org/10.18653/v1/2023.acl-long.84>. <https://aclanthology.org/2023.acl-long.84>

  12. Bai, Y., Jones, A., Ndousse, K., Askell, A., Chen, A., DasSarma, N., Drain, D., Fort, S., Ganguli, D., Henighan, T., Joseph, N., Kadavath, S., Kernion, J., Conerly, T., El-Showk, S., Elhage, N., Hatfield-Dodds, Z., Hernandez, D., Hume, T., Johnston, S., Kravec, S., Lovitt, L., Nanda, N., Olsson, C., Amodei, D., Brown, T., Clark, J., McCandlish, S., Olah, C., Mann, B., Kaplan, J.: Training a helpful and harmless assistant with reinforcement learning from human feedback. arXiv preprint [arXiv:2204.05862](http://arxiv.org/abs/2204.05862) (2022)

  13. Hagendorff, T., Bossert, L.N., Tse, Y.F., Singer, P.: Speciesist bias in ai: how ai applications perpetuate discrimination and unfair outcomes against animals. AI Ethic. **3**(3), 717–734 (2023)

[Article](https://link.springer.com/doi/10.1007/s43681-022-00199-9) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Speciesist%20bias%20in%20ai%3A%20how%20ai%20applications%20perpetuate%20discrimination%20and%20unfair%20outcomes%20against%20animals&journal=AI%20Ethic.&doi=10.1007%2Fs43681-022-00199-9&volume=3&issue=3&pages=717-734&publication_year=2023&author=Hagendorff%2CT&author=Bossert%2CLN&author=Tse%2CYF&author=Singer%2CP)

  14. Lin, T.-Y., Maire, M., Belongie, S., Hays, J., Perona, P., Ramanan, D., Dollár, P., Zitnick, C.L.: Microsoft coco: common objects in context. In: Fleet, D., Pajdla, T., Schiele, B., Tuytelaars, T. (eds.) Computer Vision - ECCV 2014, pp. 740–755. Springer, Cham (2014)

[Chapter](https://link.springer.com/doi/10.1007/978-3-319-10602-1_48) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Microsoft%20coco%3A%20common%20objects%20in%20context&doi=10.1007%2F978-3-319-10602-1_48&pages=740-755&publication_year=2014&author=Lin%2CT-Y&author=Maire%2CM&author=Belongie%2CS&author=Hays%2CJ&author=Perona%2CP&author=Ramanan%2CD&author=Doll%C3%A1r%2CP&author=Zitnick%2CCL)

  15. Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., Huang, Z., Karpathy, A., Khosla, A., Bernstein, M., Berg, A.C., Fei-Fei, L.: ImageNet Large Scale Visual Recognition Challenge. Int. J. Comput. Vision (IJCV) **115**(3), 211–252 (2015). <https://doi.org/10.1007/s11263-015-0816-y>

[Article](https://link.springer.com/doi/10.1007/s11263-015-0816-y) [MathSciNet](http://www.ams.org/mathscinet-getitem?mr=3422482) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=ImageNet%20Large%20Scale%20Visual%20Recognition%20Challenge&journal=Int.%20J.%20Comput.%20Vision%20%28IJCV%29&doi=10.1007%2Fs11263-015-0816-y&volume=115&issue=3&pages=211-252&publication_year=2015&author=Russakovsky%2CO&author=Deng%2CJ&author=Su%2CH&author=Krause%2CJ&author=Satheesh%2CS&author=Ma%2CS&author=Huang%2CZ&author=Karpathy%2CA&author=Khosla%2CA&author=Bernstein%2CM&author=Berg%2CAC&author=Fei-Fei%2CL)

  16. Adams, C.J.: The Sexual Politics of Meat. Routledge, UK (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20Sexual%20Politics%20of%20Meat&publication_year=2018&author=Adams%2CCJ)

  17. Dunayer, J.: Sexist words, speciesist roots. In: Animals and Women: Feminist Theoretical Explorations, pp. 11–31. Duke University Press, Durham, NC (1995)

  18. Takeshita, M., Rzepka, R., Araki, K.: Speciesist language and nonhuman animal bias in english masked language models. Inform. Process. Manag. **59**(5), 103050 (2022)

[Article](https://doi.org/10.1016%2Fj.ipm.2022.103050) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Speciesist%20language%20and%20nonhuman%20animal%20bias%20in%20english%20masked%20language%20models&journal=Inform.%20Process.%20Manag.&doi=10.1016%2Fj.ipm.2022.103050&volume=59&issue=5&publication_year=2022&author=Takeshita%2CM&author=Rzepka%2CR&author=Araki%2CK)

  19. Jiang, L., Hwang, J.D., Bhagavatula, C., Bras, R.L., Liang, J., Dodge, J., Sakaguchi, K., Forbes, M., Borchardt, J., Gabriel, S., Tsvetkov, Y., Etzioni, O., Sap, M., Rini, R., Choi, Y.: Can machines learn morality? The Delphi experiment. arXiv preprint [arXiv:2110.07574](http://arxiv.org/abs/2110.07574) (2022) <https://doi.org/10.48550/ARXIV.2110.07574>

  20. Horta, O., Albersmeier, F.: Defining speciesism. Philosophy Compass 15(11), 12708 (2020) <https://doi.org/10.1111/phc3.12708> https://onlinelibrary.wiley.com/doi/pdf/10.1111/phc3.12708

  21. Singer, P.: Animal Liberation Now. Harper Perennial, New York, USA (2023)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20Liberation%20Now&publication_year=2023&author=Singer%2CP)

  22. Low, P., Panksepp, J., Reiss, D., Edelman, D., Van Swinderen, B., Koch, C.: The cambridge declaration on consciousness. In: Francis Crick Memorial Conference, Cambridge, England, pp. 1–2 (2012)

  23. Russell, W.M.S., Burch, R.L.: The Principles of Humane Experimental Technique. Methuen, London (1959)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20Principles%20of%20Humane%20Experimental%20Technique&publication_year=1959&author=Russell%2CWMS&author=Burch%2CRL)

  24. Comission, E.: Summary Report on the Statistics on the Use of Animals for Scientific Purposes in the Member States of the European Union and Norway in 2020 (2023)

  25. Horta, O.: What is speciesism? J. Agric. Environ. Ethics **23** , 243–266 (2010)

[Article](https://link.springer.com/doi/10.1007/s10806-009-9205-2) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=What%20is%20speciesism%3F&journal=J.%20Agric.%20Environ.%20Ethics&doi=10.1007%2Fs10806-009-9205-2&volume=23&pages=243-266&publication_year=2010&author=Horta%2CO)

  26. Horta, O.: The scope of the argument from species overlap. J. Appl. Philos. **31**(2), 142–154 (2014)

[Article](https://doi.org/10.1111%2Fjapp.12051) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20scope%20of%20the%20argument%20from%20species%20overlap&journal=J.%20Appl.%20Philos.&doi=10.1111%2Fjapp.12051&volume=31&issue=2&pages=142-154&publication_year=2014&author=Horta%2CO)

  27. Kymlicka, W.: Human rights without human supremacism. Can. J. Philos. **48**(6), 763–792 (2018)

[Article](https://doi.org/10.1080%2F00455091.2017.1386481) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Human%20rights%20without%20human%20supremacism&journal=Can.%20J.%20Philos.&doi=10.1080%2F00455091.2017.1386481&volume=48&issue=6&pages=763-792&publication_year=2018&author=Kymlicka%2CW)

  28. Perry, M.W.: “human’ dignity beyond the human. Critical Review of International Social and Political Philosophy, 1–23 (2023)

  29. Birch, J.: The Edge of Sentience: Risk and Precaution in Humans, Other Animals, and AI. Oxford University Press, Oxford (2024)

[Book](https://doi.org/10.1093%2F9780191966729.001.0001) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20Edge%20of%20Sentience%3A%20Risk%20and%20Precaution%20in%20Humans%2C%20Other%20Animals%2C%20and%20AI&doi=10.1093%2F9780191966729.001.0001&publication_year=2024&author=Birch%2CJ)

  30. Andrews, K., Birch, J., Sebo, J., Sims, T.: Background to the New York Declaration on Animal Consciousness. nydeclaration.com (2024). <https://sites.google.com/nyu.edu/nydeclaration/background>

  31. Singer, P., Tse, Y.F.: Ai ethics: the case for including animals. AI Ethics **3**(2), 539–551 (2023)

[Article](https://link.springer.com/doi/10.1007/s43681-022-00187-z) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Ai%20ethics%3A%20the%20case%20for%20including%20animals&journal=AI%20Ethics&doi=10.1007%2Fs43681-022-00187-z&volume=3&issue=2&pages=539-551&publication_year=2023&author=Singer%2CP&author=Tse%2CYF)

  32. Bender, E.M., Gebru, T., McMillan-Major, A., Shmitchell, S.: On the dangers of stochastic parrots: Can language models be too big? In: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency. FAccT ’21, pp. 610–623. Association for Computing Machinery, New York, NY, USA (2021). <https://doi.org/10.1145/3442188.3445922>. <https://doi.org/10.1145/3442188.3445922>

  33. Coghlan, S., Parker, C.: Harm to nonhuman animals from ai: a systematic account and framework. Philosophy Technol. **36**(2), 25 (2023)

[Article](https://link.springer.com/doi/10.1007/s13347-023-00627-6) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Harm%20to%20nonhuman%20animals%20from%20ai%3A%20a%20systematic%20account%20and%20framework&journal=Philosophy%20Technol.&doi=10.1007%2Fs13347-023-00627-6&volume=36&issue=2&publication_year=2023&author=Coghlan%2CS&author=Parker%2CC)

  34. Rogers, A.: Changing the world by changing the data. In: Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), pp. 2182–2194. Association for Computational Linguistics, Online (2021). <https://doi.org/10.18653/v1/2021.acl-long.170>. <https://aclanthology.org/2021.acl-long.170>

  35. Caviola, L., Everett, J.A., Faber, N.S.: The moral standing of animals: Towards a psychology of speciesism. J. Pers. Soc. Psychol. **116**(6), 1011 (2019)

[Article](https://doi.org/10.1037%2Fpspp0000182) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20moral%20standing%20of%20animals%3A%20Towards%20a%20psychology%20of%20speciesism&journal=J.%20Pers.%20Soc.%20Psychol.&doi=10.1037%2Fpspp0000182&volume=116&issue=6&publication_year=2019&author=Caviola%2CL&author=Everett%2CJA&author=Faber%2CNS)

  36. Caviola, L., Schubert, S., Kahane, G., Faber, N.S.: Humans first: Why people value animals less than humans. Cognition **225** , 105139 (2022)

[Article](https://doi.org/10.1016%2Fj.cognition.2022.105139) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Humans%20first%3A%20Why%20people%20value%20animals%20less%20than%20humans&journal=Cognition&doi=10.1016%2Fj.cognition.2022.105139&volume=225&publication_year=2022&author=Caviola%2CL&author=Schubert%2CS&author=Kahane%2CG&author=Faber%2CNS)

  37. Dhont, K., Hodson, G., Costello, K., MacInnis, C.C.: Social dominance orientation connects prejudicial human-human and human-animal relations. Personality Individ. Differ. **61** , 105–108 (2014)

[Article](https://doi.org/10.1016%2Fj.paid.2013.12.020) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Social%20dominance%20orientation%20connects%20prejudicial%20human-human%20and%20human-animal%20relations&journal=Personality%20Individ.%20Differ.&doi=10.1016%2Fj.paid.2013.12.020&volume=61&pages=105-108&publication_year=2014&author=Dhont%2CK&author=Hodson%2CG&author=Costello%2CK&author=MacInnis%2CCC)

  38. Dhont, K., Hodson, G., Leite, A.C.: Common ideological roots of speciesism and generalized ethnic prejudice: The social dominance human-animal relations model (SD-HARM). Eur. J. Pers. **30**(6), 507–522 (2016)

[Article](https://doi.org/10.1002%2Fper.2069) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Common%20ideological%20roots%20of%20speciesism%20and%20generalized%20ethnic%20prejudice%3A%20The%20social%20dominance%20human-animal%20relations%20model%20%28SD-HARM%29&journal=Eur.%20J.%20Pers.&doi=10.1002%2Fper.2069&volume=30&issue=6&pages=507-522&publication_year=2016&author=Dhont%2CK&author=Hodson%2CG&author=Leite%2CAC)

  39. Yin, S., Fu, C., Zhao, S., Li, K., Sun, X., Xu, T., Chen, E.: A survey on multimodal large language models. arXiv preprint [arXiv:2311.07226](http://arxiv.org/abs/2311.07226) (2024) https://arxiv.org/abs/2306.135492306.13549

  40. Zeng, F., Gan, W., Wang, Y., Liu, N., Yu, P.S.: Large language models for robotics: A survey. arXiv preprint [arXiv:2311.07226](http://arxiv.org/abs/2311.07226) (2023)

  41. Yang, Z., Jia, X., Li, H., Yan, J.: Llm4drive: A survey of large language models for autonomous driving. arXiv preprint [arXiv:2311.07226](http://arxiv.org/abs/2311.07226) (2024) https://arxiv.org/abs/2311.010432311.01043

  42. Awad, E., Dsouza, S., Kim, R., Schulz, J., Henrich, J., Shariff, A., Bonnefon, J.-F., Rahwan, I.: The moral machine experiment. Nature **563**(7729), 59–64 (2018)

[Article](https://doi.org/10.1038%2Fs41586-018-0637-6) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20moral%20machine%20experiment&journal=Nature&doi=10.1038%2Fs41586-018-0637-6&volume=563&issue=7729&pages=59-64&publication_year=2018&author=Awad%2CE&author=Dsouza%2CS&author=Kim%2CR&author=Schulz%2CJ&author=Henrich%2CJ&author=Shariff%2CA&author=Bonnefon%2CJ-F&author=Rahwan%2CI)

  43. Blodgett, S.L., Barocas, S., Daumé III, H., Wallach, H.: Language (technology) is power: A critical survey of “bias” in NLP. In: Jurafsky, D., Chai, J., Schluter, N., Tetreault, J. (eds.) Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pp. 5454–5476. Association for Computational Linguistics, Online (2020). <https://doi.org/10.18653/v1/2020.acl-main.485>. <https://aclanthology.org/2020.acl-main.485>

  44. Horta, O.: Discrimination against vegans. Res. Publica. **24**(3), 359–373 (2018)

[Article](https://link.springer.com/doi/10.1007/s11158-017-9356-3) [MathSciNet](http://www.ams.org/mathscinet-getitem?mr=3758336) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Discrimination%20against%20vegans&journal=Res.%20Publica.&doi=10.1007%2Fs11158-017-9356-3&volume=24&issue=3&pages=359-373&publication_year=2018&author=Horta%2CO)

  45. Garg, N., Schiebinger, L., Jurafsky, D., Zou, J.: Word embeddings quantify 100 years of gender and ethnic stereotypes. Proc. Natl. Acad. Sci. **115**(16), 3635–3644 (2018)

[Article](https://doi.org/10.1073%2Fpnas.1720347115) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Word%20embeddings%20quantify%20100%20years%20of%20gender%20and%20ethnic%20stereotypes&journal=Proc.%20Natl.%20Acad.%20Sci.&doi=10.1073%2Fpnas.1720347115&volume=115&issue=16&pages=3635-3644&publication_year=2018&author=Garg%2CN&author=Schiebinger%2CL&author=Jurafsky%2CD&author=Zou%2CJ)

  46. Joseph, K., Morgan, J.: When do word embeddings accurately reflect surveys on our beliefs about people? In: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pp. 4392–4415. Association for Computational Linguistics, Online (2020). <https://doi.org/10.18653/v1/2020.acl-main.405>. <https://www.aclweb.org/anthology/2020.acl-main.405>

  47. Leach, S., Kitchin, A.P., Sutton, R.M., Dhont, K.: Speciesism in everyday language. Br. J. Soc. Psychol. **62**(1), 486–502 (2023)

[Article](https://doi.org/10.1111%2Fbjso.12561) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Speciesism%20in%20everyday%20language&journal=Br.%20J.%20Soc.%20Psychol.&doi=10.1111%2Fbjso.12561&volume=62&issue=1&pages=486-502&publication_year=2023&author=Leach%2CS&author=Kitchin%2CAP&author=Sutton%2CRM&author=Dhont%2CK)

  48. Wang, A., Pruksachatkun, Y., Nangia, N., Singh, A., Michael, J., Hill, F., Levy, O., Bowman, S.: Superglue: A stickier benchmark for general-purpose language understanding systems. Advances in neural information processing systems **32** (2019)

  49. Rudinger, R., Naradowsky, J., Leonard, B., Van Durme, B.: Gender bias in coreference resolution. In: Walker, M., Ji, H., Stent, A. (eds.) Proceedings of the 2018 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 2 (Short Papers), pp. 8–14. Association for Computational Linguistics, New Orleans, Louisiana (2018). <https://doi.org/10.18653/v1/N18-2002>. <https://aclanthology.org/N18-2002>

  50. D’ignazio, C., Klein, L.F.: Data Feminism. MIT press, Cambridge, MA (2023)

  51. Li, X., Wang, S., Xie, Z., Wu, M., Zhu, K.Q.: Phonetic and lexical discovery of a canine language using hubert. arXiv preprint [arXiv:2311.07226](http://arxiv.org/abs/2311.07226) (2024) https://arxiv.org/abs/2402.159852402.15985

  52. Abzaliev, A., Perez-Espinosa, H., Mihalcea, R.: Towards dog bark decoding: Leveraging human speech processing for automated bark classification. In: Calzolari, N., Kan, M.-Y., Hoste, V., Lenci, A., Sakti, S., Xue, N. (eds.) Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024), pp. 16480–16486. ELRA and ICCL, Torino, Italia (2024). <https://aclanthology.org/2024.lrec-main.1432>

  53. Mustill, T.: How to Speak Whale: The Power and Wonder of Listening to Animals. Hachette, London (2022)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=How%20to%20Speak%20Whale%3A%20The%20Power%20and%20Wonder%20of%20Listening%20to%20Animals&publication_year=2022&author=Mustill%2CT)

  54. Owe, A., Baum, S.D.: Moral consideration of nonhumans in the ethics of artificial intelligence. AI and Ethics, 1–12 (2021)

  55. Gallegos, I.O., Rossi, R.A., Barrow, J., Tanjim, M.M., Kim, S., Dernoncourt, F., Yu, T., Zhang, R., Ahmed, N.K.: Bias and fairness in large language models: A survey. arXiv preprint [arXiv:2309.00770](http://arxiv.org/abs/2309.00770) (2023)

  56. Albersmeier, F.: Speciesism and speciescentrism. Ethical Theory Moral Pract **24**(2), 511–527 (2021)

[Article](https://link.springer.com/doi/10.1007/s10677-021-10168-6) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Speciesism%20and%20speciescentrism&journal=Ethical%20Theory%20Moral%20Pract&doi=10.1007%2Fs10677-021-10168-6&volume=24&issue=2&pages=511-527&publication_year=2021&author=Albersmeier%2CF)

  57. Rohatgi, S., Qin, Y., Aw, B., Unnithan, N., Kan, M.-Y.: The ACL OCL corpus: Advancing open science in computational linguistics. In: Bouamor, H., Pino, J., Bali, K. (eds.) Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pp. 10348–10361. Association for Computational Linguistics, Singapore (2023). <https://doi.org/10.18653/v1/2023.emnlp-main.640>. <https://aclanthology.org/2023.emnlp-main.640>

  58. Mei, K., Fereidooni, S., Caliskan, A.: Bias against 93 stigmatized groups in masked language models and downstream sentiment classification tasks. In: Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency. FAccT ’23, pp. 1699–1710. Association for Computing Machinery, New York, NY, USA (2023). <https://doi.org/10.1145/3593013.3594109>. <https://doi.org/10.1145/3593013.3594109>

  59. Pachankis, J.E., Hatzenbuehler, M.L., Wang, K., Burton, C.L., Crawford, F.W., Phelan, J.C., Link, B.G.: The burden of stigma on health and well-being: A taxonomy of concealment, course, disruptiveness, aesthetics, origin, and peril across 93 stigmas. Pers. Soc. Psychol. Bull. **44**(4), 451–474 (2018)

[Article](https://doi.org/10.1177%2F0146167217741313) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20burden%20of%20stigma%20on%20health%20and%20well-being%3A%20A%20taxonomy%20of%20concealment%2C%20course%2C%20disruptiveness%2C%20aesthetics%2C%20origin%2C%20and%20peril%20across%2093%20stigmas&journal=Pers.%20Soc.%20Psychol.%20Bull.&doi=10.1177%2F0146167217741313&volume=44&issue=4&pages=451-474&publication_year=2018&author=Pachankis%2CJE&author=Hatzenbuehler%2CML&author=Wang%2CK&author=Burton%2CCL&author=Crawford%2CFW&author=Phelan%2CJC&author=Link%2CBG)

  60. Smith, E.M., Hall, M., Kambadur, M., Presani, E., Williams, A.: “I’m sorry to hear that”: Finding new biases in language models with a holistic descriptor dataset. In: Goldberg, Y., Kozareva, Z., Zhang, Y. (eds.) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 9180–9211. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates (2022). <https://doi.org/10.18653/v1/2022.emnlp-main.625>. <https://aclanthology.org/2022.emnlp-main.625>

  61. Blodgett, S.L., Lopez, G., Olteanu, A., Sim, R., Wallach, H.: Stereotyping Norwegian salmon: An inventory of pitfalls in fairness benchmark datasets. In: Zong, C., Xia, F., Li, W., Navigli, R. (eds.) Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), pp. 1004–1015. Association for Computational Linguistics, Online (2021). <https://doi.org/10.18653/v1/2021.acl-long.81>. <https://aclanthology.org/2021.acl-long.81>

  62. Nadeem, M., Bethke, A., Reddy, S.: StereoSet: Measuring stereotypical bias in pretrained language models. In: Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), pp. 5356–5371. Association for Computational Linguistics, Online (2021). <https://doi.org/10.18653/v1/2021.acl-long.416>. <https://aclanthology.org/2021.acl-long.416>

  63. Pepperberg, I.: Alex & Me: How a Scientist and a Parrot Discovered a Hidden World of Animal Intelligence - and Formed a Deep Bond in the Process. Harper Perennial, New York (2009)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Alex%20%26%20Me%3A%20How%20a%20Scientist%20and%20a%20Parrot%20Discovered%20a%20Hidden%20World%20of%20Animal%20Intelligence%20-%20and%20Formed%20a%20Deep%20Bond%20in%20the%20Process&publication_year=2009&author=Pepperberg%2CI)

  64. Bryson, J.: One Day, AI Will Seem as Human as Anyone. What Then? (2022). <https://www.wired.com/story/lamda-sentience-psychology-ethics-policy/>

  65. Dhamala, J., Sun, T., Kumar, V., Krishna, S., Pruksachatkun, Y., Chang, K.-W., Gupta, R.: BOLD: Dataset and metrics for measuring biases in open-ended language generation. In: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, pp. 862–872 (2021)

  66. Hessenthaler, M., Strubell, E., Hovy, D., Lauscher, A.: Bridging fairness and environmental sustainability in natural language processing. In: Goldberg, Y., Kozareva, Z., Zhang, Y. (eds.) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 7817–7836. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates (2022). <https://doi.org/10.18653/v1/2022.emnlp-main.533>. <https://aclanthology.org/2022.emnlp-main.533>

  67. Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J.D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al.: Language models are few-shot learners. Adv. Neural. Inf. Process. Syst. **33** , 1877–1901 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Language%20models%20are%20few-shot%20learners&journal=Adv.%20Neural.%20Inf.%20Process.%20Syst.&volume=33&pages=1877-1901&publication_year=2020&author=Brown%2CT&author=Mann%2CB&author=Ryder%2CN&author=Subbiah%2CM&author=Kaplan%2CJD&author=Dhariwal%2CP&author=Neelakantan%2CA&author=Shyam%2CP&author=Sastry%2CG&author=Askell%2CA)

  68. Joshi, M., Choi, E., Weld, D., Zettlemoyer, L.: TriviaQA: A large scale distantly supervised challenge dataset for reading comprehension. In: Barzilay, R., Kan, M.-Y. (eds.) Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1601–1611. Association for Computational Linguistics, Vancouver, Canada (2017). <https://doi.org/10.18653/v1/P17-1147>. <https://aclanthology.org/P17-1147>

  69. Nozza, D., Bianchi, F., Hovy, D.: HONEST: Measuring hurtful sentence completion in language models. In: Toutanova, K., Rumshisky, A., Zettlemoyer, L., Hakkani-Tur, D., Beltagy, I., Bethard, S., Cotterell, R., Chakraborty, T., Zhou, Y. (eds.) Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 2398–2406. Association for Computational Linguistics, Online (2021). <https://doi.org/10.18653/v1/2021.naacl-main.191>. <https://aclanthology.org/2021.naacl-main.191>

  70. Bassignana, E., Basile, V., Patti, V., et al.: Hurtlex: A multilingual lexicon of words to hurt. In: CEUR Workshop Proceedings, vol. 2253, pp. 1–6 (2018). CEUR-WS

  71. Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., Sutskever, I., et al.: Language models are unsupervised multitask learners. OpenAI blog **1**(8), 9 (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Language%20models%20are%20unsupervised%20multitask%20learners&journal=OpenAI%20blog&volume=1&issue=8&publication_year=2019&author=Radford%2CA&author=Wu%2CJ&author=Child%2CR&author=Luan%2CD&author=Amodei%2CD&author=Sutskever%2CI)

  72. Wang, A., Singh, A., Michael, J., Hill, F., Levy, O., Bowman, S.: GLUE: A multi-task benchmark and analysis platform for natural language understanding. In: Linzen, T., Chrupała, G., Alishahi, A. (eds.) Proceedings of the 2018 EMNLP Workshop BlackboxNLP: Analyzing and Interpreting Neural Networks For NLP, pp. 353–355. Association for Computational Linguistics, Brussels, Belgium (2018). <https://doi.org/10.18653/v1/W18-5446>. <https://aclanthology.org/W18-5446>

  73. Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: Learning to reason about social and moral norms. In: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 653–670. Association for Computational Linguistics, Online (2020). <https://doi.org/10.18653/v1/2020.emnlp-main.48>. <https://aclanthology.org/2020.emnlp-main.48>

  74. Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values. In: International Conference on Learning Representations (2021)

  75. Levesque, H., Davis, E., Morgenstern, L.: The winograd schema challenge. In: Thirteenth International Conference on the Principles of Knowledge Representation and Reasoning (2012)

  76. Emelin, D., Le Bras, R., Hwang, J.D., Forbes, M., Choi, Y.: Moral Stories: Situated reasoning about norms, intents, actions, and their consequences. In: Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, pp. 698–718. Association for Computational Linguistics, Online and Punta Cana, Dominican Republic (2021). <https://doi.org/10.18653/v1/2021.emnlp-main.54>. <https://aclanthology.org/2021.emnlp-main.54>

  77. Kim, H., Yu, Y., Jiang, L., Lu, X., Khashabi, D., Kim, G., Choi, Y., Sap, M.: ProsocialDialog: A prosocial backbone for conversational agents. In: Goldberg, Y., Kozareva, Z., Zhang, Y. (eds.) Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 4005–4029. Association for Computational Linguistics, Abu Dhabi, United Arab Emirates (2022). <https://doi.org/10.18653/v1/2022.emnlp-main.267>. <https://aclanthology.org/2022.emnlp-main.267>

  78. Dunayer, J.: Animal equality: language and liberation. Ryce Pub, Derwood (2001)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20equality%3A%20language%20and%20liberation&publication_year=2001&author=Dunayer%2CJ)

  79. Suresh, H., Movva, R., Dogan, A.L., Bhargava, R., Cruxen, I., Cuba, A.M., Taurino, G., So, W., D’Ignazio, C.: Towards intersectional feminist and participatory ml: A case study in supporting feminicide counterdata collection. In: Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency. FAccT ’22, pp. 667–678. Association for Computing Machinery, New York, NY, USA (2022). <https://doi.org/10.1145/3531146.3533132>. <https://doi.org/10.1145/3531146.3533132>

  80. Felkner, V., Chang, H.-C.H., Jang, E., May, J.: WinoQueer: A community-in-the-loop benchmark for anti-LGBTQ+ bias in large language models. In: Rogers, A., Boyd-Graber, J., Okazaki, N. (eds.) Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 9126–9140. Association for Computational Linguistics, Toronto, Canada (2023). <https://doi.org/10.18653/v1/2023.acl-long.507>. <https://aclanthology.org/2023.acl-long.507>

  81. Ungless, E., Ross, B., Lauscher, A.: Stereotypes and smut: The (mis)representation of non-cisgender identities by text-to-image models. In: Rogers, A., Boyd-Graber, J., Okazaki, N. (eds.) Findings of the Association for Computational Linguistics: ACL 2023, pp. 7919–7942. Association for Computational Linguistics, Toronto, Canada (2023). <https://doi.org/10.18653/v1/2023.findings-acl.502>. <https://aclanthology.org/2023.findings-acl.502>

  82. Ziesche, S.: Ai ethics and value alignment for nonhuman animals. Philosophies **6**(2), 31 (2021)

[Article](https://doi.org/10.3390%2Fphilosophies6020031) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Ai%20ethics%20and%20value%20alignment%20for%20nonhuman%20animals&journal=Philosophies&doi=10.3390%2Fphilosophies6020031&volume=6&issue=2&publication_year=2021&author=Ziesche%2CS)

  83. Donovan, J.: Feminism and the treatment of animals: From care to dialogue. Signs: Journal of Women in Culture and Society 31(2), 305–329 (2006)

  84. Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., Zhou, Y., Li, W., Liu, P.J.: Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res. **21**(140), 1–67 (2020)

[MathSciNet](http://www.ams.org/mathscinet-getitem?mr=4138124) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Exploring%20the%20limits%20of%20transfer%20learning%20with%20a%20unified%20text-to-text%20transformer&journal=J.%20Mach.%20Learn.%20Res.&volume=21&issue=140&pages=1-67&publication_year=2020&author=Raffel%2CC&author=Shazeer%2CN&author=Roberts%2CA&author=Lee%2CK&author=Narang%2CS&author=Matena%2CM&author=Zhou%2CY&author=Li%2CW&author=Liu%2CPJ)

  85. Lourie, N., Le Bras, R., Bhagavatula, C., Choi, Y.: Unicorn on rainbow: A universal commonsense reasoning model on a new multitask benchmark. In: Proceedings of the AAAI Conference on Artificial Intelligence, vol. 35, pp. 13480–13488 (2021)

  86. OpenAI: GPT-4 technical report. arXiv preprint [arXiv:2303.08774](http://arxiv.org/abs/2303.08774) (2023)

  87. Zhou, J., Hu, M., Li, J., Zhang, X., Wu, X., King, I., Meng, H.: Rethinking machine ethics–can LLMs perform moral reasoning through the lens of moral theories? arXiv preprint [arXiv:2308.15399](http://arxiv.org/abs/2308.15399) (2023)

  88. Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell, A., Welinder, P., Christiano, P.F., Leike, J., Lowe, R.: Training language models to follow instructions with human feedback. In: Koyejo, S., Mohamed, S., Agarwal, A., Belgrave, D., Cho, K., Oh, A. (eds.) Advances in Neural Information Processing Systems, vol. 35, pp. 27730–27744. Curran Associates Inc, Red Hook, NY, USA (2022)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Training%20language%20models%20to%20follow%20instructions%20with%20human%20feedback&pages=27730-27744&publication_year=2022&author=Ouyang%2CL&author=Wu%2CJ&author=Jiang%2CX&author=Almeida%2CD&author=Wainwright%2CC&author=Mishkin%2CP&author=Zhang%2CC&author=Agarwal%2CS&author=Slama%2CK&author=Ray%2CA&author=Schulman%2CJ&author=Hilton%2CJ&author=Kelton%2CF&author=Miller%2CL&author=Simens%2CM&author=Askell%2CA&author=Welinder%2CP&author=Christiano%2CPF&author=Leike%2CJ&author=Lowe%2CR)

  89. Wang, B., Chen, W., Pei, H., Xie, C., Kang, M., Zhang, C., Xu, C., Xiong, Z., Dutta, R., Schaeffer, R., Truong, S.T., Arora, S., Mazeika, M., Hendrycks, D., Lin, Z., Cheng, Y., Koyejo, S., Song, D., Li, B.: Decodingtrust: A comprehensive assessment of trustworthiness in GPT models. In: Thirty-seventh Conference on Neural Information Processing Systems Datasets and Benchmarks Track (2023). <https://openreview.net/forum?id=kaHpo8OZw2>

  90. Meade, N., Poole-Dayan, E., Reddy, S.: An empirical survey of the effectiveness of debiasing techniques for pre-trained language models. In: Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1878–1898. Association for Computational Linguistics, Dublin, Ireland (2022). <https://doi.org/10.18653/v1/2022.acl-long.132>. <https://aclanthology.org/2022.acl-long.132>

  91. Guo, Y., Yang, Y., Abbasi, A.: Auto-debias: Debiasing masked language models with automated biased prompts. In: Muresan, S., Nakov, P., Villavicencio, A. (eds.) Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 1012–1023. Association for Computational Linguistics, Dublin, Ireland (2022). <https://doi.org/10.18653/v1/2022.acl-long.72>. <https://aclanthology.org/2022.acl-long.72>

  92. Li, Y., Du, M., Wang, X., Wang, Y.: Prompt tuning pushes farther, contrastive learning pulls closer: A two-stage approach to mitigate social biases. In: Rogers, A., Boyd-Graber, J., Okazaki, N. (eds.) Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 14254–14267. Association for Computational Linguistics, Toronto, Canada (2023). <https://doi.org/10.18653/v1/2023.acl-long.797>. <https://aclanthology.org/2023.acl-long.797>

  93. Hsiao, T.: In defense of eating meat. J. Agric. Environ. Ethics **28**(2), 277–291 (2015). <https://doi.org/10.1007/s10806-015-9534-2>

[Article](https://link.springer.com/doi/10.1007/s10806-015-9534-2) [MathSciNet](http://www.ams.org/mathscinet-getitem?mr=3414908) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=In%20defense%20of%20eating%20meat&journal=J.%20Agric.%20Environ.%20Ethics&doi=10.1007%2Fs10806-015-9534-2&volume=28&issue=2&pages=277-291&publication_year=2015&author=Hsiao%2CT)

  94. Donaldson, S., Kymlicka, W.: Zoopolis: a political theory of animal rights. Oxford University Press, Oxford (2011)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Zoopolis%3A%20a%20political%20theory%20of%20animal%20rights&publication_year=2011&author=Donaldson%2CS&author=Kymlicka%2CW)




[Download references](https://citation-needed.springer.com/v2/references/10.1007/s43681-024-00606-3?format=refman&flavour=references)

## Funding

This work was supported by JSPS KAKENHI Grant Number JP22J21160.

## Author information

### Authors and Affiliations

  1. Hokkaido University, Sapporo, Japan

Masashi Takeshita & Rafal Rzepka




Authors

  1. Masashi Takeshita

[View author publications](/search?sortBy=newestFirst&contributor=Masashi%20Takeshita)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Masashi%20Takeshita) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Masashi%20Takeshita%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)

  2. Rafal Rzepka

[View author publications](/search?sortBy=newestFirst&contributor=Rafal%20Rzepka)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Rafal%20Rzepka) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Rafal%20Rzepka%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)




### Corresponding author

Correspondence to [Masashi Takeshita](mailto:takeshita.masashi.68@gmail.com).

## Ethics declarations

### Conflict of interest

The authors have no Conflict of interest to declare. All co-authors have seen and agree with the contents of the manuscript and there is no financial interest to report. We certify that the submission is original work and is not under review at any other publication.

## Additional information

### Publisher's Note

Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Rights and permissions

**Open Access** This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit <http://creativecommons.org/licenses/by/4.0/>.

[Reprints and permissions](https://s100.copyright.com/AppDispatchServlet?title=Speciesism%20in%20natural%20language%20processing%20research&author=Masashi%20Takeshita%20et%20al&contentID=10.1007%2Fs43681-024-00606-3&copyright=The%20Author%28s%29&publication=2730-5953&publicationDate=2024-11-27&publisherName=SpringerNature&orderBeanReset=true&oa=CC%20BY)

## About this article

[](https://crossmark.crossref.org/dialog/?doi=10.1007/s43681-024-00606-3)

### Cite this article

Takeshita, M., Rzepka, R. Speciesism in natural language processing research. _AI Ethics_ **5** , 2961–2976 (2025). https://doi.org/10.1007/s43681-024-00606-3

[Download citation](https://citation-needed.springer.com/v2/references/10.1007/s43681-024-00606-3?format=refman&flavour=citation)

  * Received: 23 April 2024

  * Accepted: 11 October 2024

  * Published: 27 November 2024

  * Version of record: 27 November 2024

  * Issue date: June 2025

  * DOI: https://doi.org/10.1007/s43681-024-00606-3




### Share this article

Anyone you share the following link with will be able to read this content:

Get shareable link

Sorry, a shareable link is not currently available for this article.

Copy shareable link to clipboard

Provided by the Springer Nature SharedIt content-sharing initiative 

### Keywords

  * [Speciesism](/search?query=Speciesism&facet-discipline="Computer%20Science")
  * [Speciesist bias](/search?query=Speciesist%20bias&facet-discipline="Computer%20Science")
  * [Animal ethics](/search?query=Animal%20ethics&facet-discipline="Computer%20Science")
  * [Natural language processing](/search?query=Natural%20language%20processing&facet-discipline="Computer%20Science")



### Profiles

  1. Masashi Takeshita [ View author profile ](/researchers/71326839SN)


  *[DOI]: Digital Object Identifier
