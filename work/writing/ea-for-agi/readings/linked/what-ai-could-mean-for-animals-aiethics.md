---
title: "Speciesist bias in AI: how AI applications perpetuate discrimination and unfair outcomes against animals - AI and Ethics"
url: https://link.springer.com/article/10.1007/s43681-022-00199-9
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 4 stage-1 readings, e.g. animals-adapt-to-ai/bringing-about-animal-inclusive-ai.md; AI Ethics journal article on AI and animals"
---

# Speciesist bias in AI: how AI applications perpetuate discrimination and unfair outcomes against animals

  * Original Research
  * [Open access](https://www.springernature.com/gp/open-science/about/the-fundamentals-of-open-access-and-open-research)
  * Published: 29 August 2022


  * Volume 3, pages 717–734 (2023) 
  * Cite this article



You have full access to this [open access](https://www.springernature.com/gp/open-science/about/the-fundamentals-of-open-access-and-open-research) article

[ Download PDF ](/content/pdf/10.1007/s43681-022-00199-9.pdf)

[ Save article ](/article/10.1007/s43681-022-00199-9/save-research?_csrf=fX5TN-2-z6gu4guQlyWRffRSRwujSHPX)

[ View saved research ](/saved-research)

[ AI and Ethics ](/journal/43681) [ Aims and scope  ](/journal/43681/aims-and-scope) [ Submit manuscript  ](https://submission.springernature.com/new-submission/43681/3)

Speciesist bias in AI: how AI applications perpetuate discrimination and unfair outcomes against animals 

[ Download PDF ](/content/pdf/10.1007/s43681-022-00199-9.pdf)

## Abstract

Massive efforts are made to reduce biases in both data and algorithms to render AI applications fair. These efforts are propelled by various high-profile cases where biased algorithmic decision-making caused harm to women, people of color, minorities, etc. However, the AI fairness field still succumbs to a blind spot, namely its insensitivity to discrimination against animals. This paper is a critical comment on current fairness research in AI. It is the first to describe the ‘speciesist bias’ and investigate it in several different AI systems by reflecting on the problem via a normative analysis and by probing, in several case studies, image recognition, word embedding, and language models with established methods for bias detection. We claim that animals matter morally and that discriminating against them is unethical. Furthermore, we provide evidence for speciesist biases in all the mentioned areas of AI. We find that speciesist biases are solidified by many mainstream AI applications, especially in the fields of computer vision as well as natural language processing. In both cases, this occurs because the models are trained on datasets in which speciesist patterns prevail. Therefore, AI technologies currently play a significant role in perpetuating and normalizing violence against animals. To change this, AI fairness frameworks must widen their scope and include mitigation measures for speciesist biases. This paper addresses the AI community in this regard and stresses the influence AI systems can have on either increasing or reducing the violence that is inflicted on animals, especially on farmed animals.

### Similar content being viewed by others

###  [Speciesist bias in AI: a reply to Arandjelović ](https://link.springer.com/10.1007/s43681-023-00319-z?fromPaywallRec=false)

Article Open access 10 July 2023

###  [Apropos of “Speciesist bias in AI: how AI applications perpetuate discrimination and unfair outcomes against animals” ](https://link.springer.com/10.1007/s43681-022-00255-4?fromPaywallRec=false)

Article Open access 09 January 2023

###  [Beyond Humans: AI Perceptions of Speciesism in Figurative Language on Social Media ](https://link.springer.com/10.1007/s11245-026-10389-3?fromPaywallRec=false)

Article 04 June 2026

### Explore related subjects

Discover the latest articles, books and news in related subjects, suggested using machine learning.

  * [Animal Cognition](/subjects/animal-cognition)
  * [Animal Ethics](/subjects/animal-ethics)
  * [Computational Intelligence](/subjects/computational-intelligence)
  * [Computer Ethics](/subjects/computer-ethics)
  * [Philosophy of Artificial Intelligence](/subjects/philosophy-of-artificial-intelligence)
  * [Artificial Intelligence](/subjects/artificial-intelligence)
  * [Multispecies Interactions in Social Ecologies](/subjects/multispecies-interactions-in-social-ecologies)



## 1 Introduction

Currently, AI ethics is mute about the impact of AI technologies on nonhuman animalsFootnote 1. AI ethics is strongly focused on lists of ethical principles that, if not explicitly applied very extensively, have an anthropocentric tailoring that focuses exclusively on interactions between technology and humans.

This circumstance is challenged in only two respects. First, researchers have recently started to extend the analytic range of AI ethics by looking at AI’s impact on ecological systems as well as climate change [1,2,3,4,5,6,7,[8](/article/10.1007/s43681-022-00199-9#ref-CR8 "Hagendorff, T.: Blind spots in AI ethics. AI Ethics \(2021\). 
                  https://doi.org/10.1007/s43681-021-00122-8
                  
                ")]. By doing this, they at least theoretically opened the field for a moral consideration of nonhumans. An “ethics of desirability” [[9](/article/10.1007/s43681-022-00199-9#ref-CR9 "Bolte, L., Vandemeulebroucke, T., van Wynsberghe, A.: From an ethics of carefulness to an ethics of desirability: going beyond current ethics approaches to sustainable AI. Sustainability 14, 1–13 \(2022\)")], which explicitly wants to give a voice to all actors who are affected by AI technologies, could in theory also include animals. Anthropocentrism in AI ethics seems to be challenged by these tentative steps to assess ecological impacts. However, one could argue that sustainability issues are also perceived through an anthropocentric lens where humans are the ultimate beneficiaries, and only humans are directly morally considerable [[10](/article/10.1007/s43681-022-00199-9#ref-CR10 "Boscardin, L., Bossert, L.: Sustainable development and nonhuman animals: why anthropocentric concepts of sustainability are outdated and need to be extended. In: Meisch, S., Lundershausen, J., Bossert, L., Rockoff, M. \(eds.\) Ethics of science in the research for sustainable development, pp. 323–352. Nomos, Baden-Baden \(2015\)")]. In theory, principle-based approaches could be applied more extensively and hence include animals. But at least in the field of AI ethics, this is the exception rather than the rule.

Secondly, anthropocentrism is challenged by speculative works about possible future artificial general intelligence and the question whether these systems should possess a moral status [11,12,[13](/article/10.1007/s43681-022-00199-9#ref-CR13 "Bostrom, N., Yudkowsky, E.: The ethics of artificial intelligence. In: Frankish, K., Ramsey, W.M. \(eds.\) The Cambridge handbook of artificial intelligence, pp. 316–334. Cambridge University Press, Cambridge \(2014\)")]. Moreover, philosophers ponder the moral status of current anthropomorphized artificial agents. Considerations in this context are often based on the argument from brutalization that Kant makes regarding cruelty to animals. Kant claims that animals are not morally considerable for their own sake. Nevertheless, he maintains that the cruel treatment of animals should be prevented because it would diminish the human ability to feel compassion toward other humans, which in itself is a precious predisposition essential to a peaceful human community [[14](/article/10.1007/s43681-022-00199-9#ref-CR14 "Kant, I., Heath, P., Schneewind, J.B.: Lectures on ethics. Cambridge University Press, Cambridge \(2013\)")]. Likewise, one could rightly claim that even if the act of harming an AI system is not immoral, it may provide a training ground for interpersonal immorality, for instance when ‘abusing’ speech assistants [[15](/article/10.1007/s43681-022-00199-9#ref-CR15 "Brahnam, S.: Gendered bots and bot abuse. In: de Angeli, A., Brahnam, S., Wallis, P., Dix, P. \(eds.\) Misuse and abuse of interactive technologies, pp. 1–4. ACM, Montreal \(2006\)"), [16](/article/10.1007/s43681-022-00199-9#ref-CR16 "de Angeli, A.: Ethical implications of verbal disinhibition with conversational agents. PsychNol. J. 7, 49–57 \(2009\)")]. However, in this context, the initial challenge to anthropocentrism again causes a tacit reinforcement of the anthropocentric ethical framework.

Apart from these two possible challenges, anthropocentrism is the unquestioned bedrock of AI ethics. Hence, the state of the art in AI ethics regarding non-anthropocentric methodologies is rather tenuous. At present, to the best of our knowledge only five papers in AI ethics exist that argue for a moral extension of the field and take animals into account [17,18,19,20,[21](/article/10.1007/s43681-022-00199-9#ref-CR21 "Bendel, O.: Towards animal-friendly machines. Paladyn J. Behav. Robot. 9, 204–213 \(2018\)")]. Ziesche [[17](/article/10.1007/s43681-022-00199-9#ref-CR17 "Ziesche, S.: AI ethics and value alignment for nonhuman animals. Philosophies 6, 1–12 \(2021\)")] argues that the value alignment problem, which is at the heart of AI safety debates in the context of potential malignant artificial general intelligence, should be extended to the values of animals or rather to the values of species since he conflates the individual with the species level throughout his paper. Bendel discusses animal-machine interactions and stresses the importance of protective routines in autonomous machines when encountering animals [[21](/article/10.1007/s43681-022-00199-9#ref-CR21 "Bendel, O.: Towards animal-friendly machines. Paladyn J. Behav. Robot. 9, 204–213 \(2018\)")]. Owe and Baum [[18](/article/10.1007/s43681-022-00199-9#ref-CR18 "Owe, A., Baum, S.D.: Moral consideration of nonhumans in the ethics of artificial intelligence. AI Ethics \(2021\). 
                  https://doi.org/10.1007/s43681-021-00065-0
                  
                ")] stress that AI ethics, for instance when stating ethical principles, should take nonhumans such as animals into account since they merit direct moral consideration. Bossert and Hagendorff [[19](/article/10.1007/s43681-022-00199-9#ref-CR19 "Bossert, L., Hagendorff, T.: Animals and AI. The role of animals in AI research and application—an overview and ethical evaluation. Technol Soc 67, 1–7 \(2021\)")] collect examples where animals are affected by AI systems, for instance in neuroscientific animal experiments that are supposed to inspire artificial neural net architectures, and in contexts like factory farming. Singer and Tse [[20](/article/10.1007/s43681-022-00199-9#ref-CR20 "Singer, P., Tse, Y.F.: AI ethics: the case for including animals. In: AI and Ethics, pp. 1–13 \(2022\)")] go in a similar direction by analyzing further examples of AI’s impact on animals, for instance with regard to autonomous cars’ swerving behavior when confronted with animals on roads, and AI systems used in factory farming. Singer and Tse also stress that AI ethics has to widen its scope. However, while Bossert and Hagendorff as well as Singer and Tse briefly touch upon the topic of algorithmic discrimination against animals in technologies of AI, neither offers a detailed analysis of the topic. This paper is intended to close this gap. In the second section, we discuss why discrimination against animals, and not just humans, is problematic. In the third section, we critically comment on current fairness research in AI and introduce the term ‘speciesist bias’. In the fourth section we offer a variety of case studies to investigate examples of speciesist biases in existing AI applications in the fields of image recognition, language models, and recommender systems. Our methods comprise: a normative analysis of the moral status of animals that is based on both ethical theories and moral psychology; an exploratory reading of academic papers to identify the above-mentioned gap in research; and bias detection measures that can be applied to image recognition, word embedding, and language models.

## 2 Discrimination against animals

Classical social science research on interpersonal discrimination distinguishes five forms of oppression [[22](/article/10.1007/s43681-022-00199-9#ref-CR22 "Young, I.M.: Justice and the politics of difference. Princeton University Press, Princeton \(1990\)")]: exploitation, marginalization, powerlessness, cultural imperialism, and violence. All forms of oppression have their roots in the construction of social out-groups, where arbitrary attributes are essentialized, stereotypes are built, or prejudices are coined. In this paper, we understand discrimination as the unjust or prejudicial treatment of different categories of individuals, e.g. on the grounds of race, gender, ability, or species membership. Thus, oppression and dehumanization happen to individuals who are classified by their out-group affiliation [[23](/article/10.1007/s43681-022-00199-9#ref-CR23 "Lippert-Rasmussen, K.: Born free and equal? Oxford University Press, Oxford \(2013\)")]. Now, as several studies about discrimination against animals show [24,25,26,27,28,29,[30](/article/10.1007/s43681-022-00199-9#ref-CR30 "Dhont, K., Hodson, G.: Why do right-wing adherents engage in more animal exploitation and meat consumption? Personality Individ. Differ. 64, 12–17 \(2014\)")], the social systems of beliefs and practices that lead to interpersonal discrimination utilize the same psychological and cognitive mechanisms that cause speciesist behavioral patterns, and vice versa. Interhuman, as well as speciesist biases, have common ideological roots, whereas ‘social dominance orientation’ (SDO) is a key factor that, for instance, connects ethnic prejudice and speciesist attitudes [[31](/article/10.1007/s43681-022-00199-9#ref-CR31 "Dhont, K., Hodson, G., Leite, A.C.: Common ideological roots of speciesism and generalized ethnic prejudice: the social dominance human-animal relations model \(SD-HARM\). Eur. J. Pers. 30, 507–522 \(2016\)")]. Animals are exploited, marginalized, and exposed to structural as well as physical violence due to their ascribed attribute of being the ultimate out-group. However, ethology and many other disciplines show that differences between various animal species as well as humans are gradual, not discontinuous [32,33,34,[35](/article/10.1007/s43681-022-00199-9#ref-CR35 "Balcombe, J.P.: What a fish knows: the inner lives of our underwater cousins. Scientific American/Farrar Straus and Giroux, New York \(2016\)")]. Some animals possess a theory of mind [[36](/article/10.1007/s43681-022-00199-9#ref-CR36 "Call, J., Tomasello, M.: Does the chimpanzee have a theory of mind? 30 years later. Trends Cogn. Sci. 12, 187–192 \(2008\)")], language [[37](/article/10.1007/s43681-022-00199-9#ref-CR37 "Meijer, E.: Animal languages: revealing the secret conversations of the living world. John Murray, London \(2019\)"), [38](/article/10.1007/s43681-022-00199-9#ref-CR38 "Slobodchikoff, C., Perla, B.S., Verdolin, J.L.: Prairie dogs: communication and community in an animal society. Harvard University Press, Cambridge \(2009\)")], emotions [[39](/article/10.1007/s43681-022-00199-9#ref-CR39 "Bekoff, M.: Animal emotions: exploring passionate natures. Bioscience 50, 861–870 \(2000\)")], intelligence [[40](/article/10.1007/s43681-022-00199-9#ref-CR40 "Zentall, T.R.: Animal intelligence. In: Sternberg, R.J. \(ed.\) The Cambridge handbook of intelligence, pp. 397–427. Cambridge University Press, Cambridge \(2019\)"), [41](/article/10.1007/s43681-022-00199-9#ref-CR41 "Waal, Fd.: Are we smart enough to know how smart animals are? W. W. Norton & Company, New York \(2017\)")] evolutionary precursors of morality [[42](/article/10.1007/s43681-022-00199-9#ref-CR42 "Singer, P.: Ethics and intuitions. J. Ethics 9, 331–352 \(2005\)")], (self-)awareness [[43](/article/10.1007/s43681-022-00199-9#ref-CR43 "Plotnik, J.M., Waal, Fd., Reiss, D.: Self-recognition in an Asian elephant. Proc. Natl. Acad. Sci. 103, 17053–17057 \(2006\)"), [44](/article/10.1007/s43681-022-00199-9#ref-CR44 "Cazzolla Gatti, R.: Self-consciousness: beyond the looking-glass and what dogs found there. Ethol. Ecol. Evol 7, 1–9 \(2015\)")], pleasure [[45](/article/10.1007/s43681-022-00199-9#ref-CR45 "Balcombe, J.P.: Pleasurable kingdom: animals and the nature of feeling good. Macmillan, London \(2006\)")], etc. In sum, from the standpoint of biology, it does not make sense to stipulate a sharp divide between humans and animals. And even if this gap would exist, the fact that (at least) vertebrate animals, including fish [[46](/article/10.1007/s43681-022-00199-9#ref-CR46 "Sneddon, L.U.: The evidence for pain in fish: the use of morphine as an analgesic. Appl. Anim. Behav. Sci. 83, 153–162 \(2003\)")], are able to feel pain and pleasure makes them ethically relevant, and is sufficient to show that these individuals should not be ignored when debating societal practices, including developments in technology.

Within vertebrates, humans assign different values to sub-groups of animals, especially by separating farmed animals from companion animals and subjecting the former to far worse treatment [[47](/article/10.1007/s43681-022-00199-9#ref-CR47 "Dhont, K., Hodson, G. \(eds.\): Why we love and exploit animals: bridging insights from academia and advocacy. Routledge, New York \(2020\)"), [48](/article/10.1007/s43681-022-00199-9#ref-CR48 "Krings, V.C., Dhont, K., Salmen, A.: The moral divide between high- and low-status animals: the role of human supremacy beliefs. Anthrozoös 34, 787–802 \(2021\)")]. Tens of billions of farmed animals are bred and held captive in crowded, filthy conditions. After a fraction of their normal life expectancy, they are slaughtered, often without being stunned. This is the basis of the meat, milk, eggs, fur, leather, wool, and down industries, despite the massive harms and suffering they cause for the animals themselves [[49](/article/10.1007/s43681-022-00199-9#ref-CR49 "Singer, P.: Animal liberation. HarperCollins Publishers, New York \(2009\)"), [50](/article/10.1007/s43681-022-00199-9#ref-CR50 "Morgan, K.N., Tromborg, C.T.: Sources of stress in captivity. Appl. Anim. Behav. Sci. 102, 262–302 \(2007\)")], but also for ecological systems [[51](/article/10.1007/s43681-022-00199-9#ref-CR51 "Poore, J., Nemecek, T.: Reducing food’s environmental impacts through producers and consumers. Science 360, 987–992 \(2018\)"), [52](/article/10.1007/s43681-022-00199-9#ref-CR52 "Steinfeld, H., Gerber, P., Wassenaar, T., Castel, V., Rosales, M., Haan, C.D.: Livestock’s long shadow: environmental issues and options. Food and Agriculture Organization of the United Nations \(FAO\), Rom \(2006\)")] and public health [[53](/article/10.1007/s43681-022-00199-9#ref-CR53 "Fardet, A., Boirie, Y.: Associations between food and beverage groups and major diet-related chronic diseases: an exhaustive review of pooled/meta-analyses and systematic reviews. Nutr. Rev. 72, 741–762 \(2014\)"), [54](/article/10.1007/s43681-022-00199-9#ref-CR54 "Song, M., Fung, T.T., Hu, F.B., Willett, W.C., Longo, V.D., Chan, A.T., Giovannucci, E.L.: Association of animal and plant protein intake with all-cause and cause-specific mortality. JAMA Intern. Med. 176, 1453–1463 \(2016\)")]. Companion animals, on the other hand, are often considered close family members, and huge sums of money are spent on their (alleged) welfare. To maintain this unequal treatment of groups of animals that have very similar capabilities, a variety of techniques of moral disengagement [[55](/article/10.1007/s43681-022-00199-9#ref-CR55 "Bandura, A., Barbaranelle, C., Caprara, G.V., Pastorelli, C.: Mechanisms of moral disengagement in the exercise of moral agency. J. Pers. Soc. Psychol. 71, 364–374 \(1996\)"), [56](/article/10.1007/s43681-022-00199-9#ref-CR56 "Bandura, A.: Moral disengagement in the perpetration of inhumanities. Pers. Soc. Psychol. Rev. 3, 193–209 \(1999\)")] are utilized throughout societies to suppress cognitive dissonances [57,58,[59](/article/10.1007/s43681-022-00199-9#ref-CR59 "von Hippel, W.: Self-deception. In: Zeigler-Hill, V., Welling, L.L.M., Shackelford, T.K. \(eds.\) Evolutionary perspectives on social psychology, pp. 149–158. Springer, Heidelberg \(2015\)")]. Euphemisms are used to cognitively reinterpret the conditions under which animals are reared, held captive, and killed. Further, harm towards animals is relativized by pointing at other contexts of harm. Individuals are likely to deny accountability for their behavior by referring to the diffusion of responsibilities in the complex nexus of factory farming, politics, and consumer behavior [[60](/article/10.1007/s43681-022-00199-9#ref-CR60 "Gjerris, M.: Willed blindness: a discussion of our moral shortcomings in relation to animals. J Agric Environ Ethics 28, 517–532 \(2015\)")]. In addition, confirmation biases lead to selective attention paying, where preliminary information that matches one’s own beliefs is sought and when found, deemed to be true. All in all, these mechanisms of moral disengagement, together with the manifold psychological, cultural, linguistic, as well as architectural distancing mechanisms, allow for the acceptance, support, and execution of large-scale, industrially organized breeding, fattening, and killing of tens of billions of farmed animals every year.

Despite these factors, moral intuitions can play a significant role regarding our treatment of animals. On the one hand, most people share the moral intuition that cruelty to animals is bad. This intuition needs to be suppressed to accept the treatment of farmed and many other animals. On the other hand, many people also share the moral intuition that it is acceptable or even necessary to assess harm to humans quite differently from that inflicted upon animals. Furthermore, the different treatment of farmed and companion animals seems to fit many people’s emotional responses, being culturally implemented, so that for instance in western countries people find it unimaginable to eat dogs, cats, or canaries while having no problem with eating pigs, cows, and chickens. We hold it necessary that—from a normative point of view—such moral intuitions need to be replaced by well-considered arguments, as some philosophers have argued that moral intuitions should not be seen as normative foundations of our actions [[42](/article/10.1007/s43681-022-00199-9#ref-CR42 "Singer, P.: Ethics and intuitions. J. Ethics 9, 331–352 \(2005\)")]. This means that the prevailing moral intuition that we are entitled to treat animals in ways that would be universally condemned if applied to humans needs to be rethought in the light of well-founded arguments. The same applies to the intuitions many people have about which animals may be kept on factory farms and eaten, and which it would be wrong to treat in this way.

A prominent line of argument within animal ethics underpins the claim that all sentient animals, who are capable of feeling pain and pleasure, have interests, at the very least the interest not to feel pain and to experience positive emotions. When evaluating actions to distinguish what is morally right and wrong, the interests of all individuals have to be considered. Since from an animal ethics perspective no convincing arguments exist why the interests of some sentient animals (including humans) should per se have more weight, the interests of all sentient beings need to be considered in an equal manner, as is required by the ‘principle of equal consideration of interests’ [[49](/article/10.1007/s43681-022-00199-9#ref-CR49 "Singer, P.: Animal liberation. HarperCollins Publishers, New York \(2009\)")]. Attempts to include all humans in the moral community and to generally exclude (other) sentient animals at the same time fail [[61](/article/10.1007/s43681-022-00199-9#ref-CR61 "Nobis, N.: Carl Cohen’s “kind” arguments for animal rights and against human rights. J. Appl. Philos. 21, 43–59 \(2004\)")]. For this reason, the belief that humans—or another animal species—are entitled to have their interests given more weight than the similar interests of other sentient beings can be considered as arbitrary as racism and sexism and thus be rejected as speciesism [[49](/article/10.1007/s43681-022-00199-9#ref-CR49 "Singer, P.: Animal liberation. HarperCollins Publishers, New York \(2009\)")]. If animals’ interests of similar kind and strength are seen as equally worthy of consideration, it follows that the ways humans treat them must change fundamentally.

Nevertheless, in this paper, we do not want to argue that species-based differentiations between humans and animals are per se wrong. Quite the contrary, distinguishing between different capabilities—such as feeling pain, having high cognitive abilities, being able to plan for the future, etc.—and sets of interests is of great importance for moral decision-making since different capabilities go along with different moral demands. For example, disabled individuals have other moral demands than individuals without these disabilities [[62](/article/10.1007/s43681-022-00199-9#ref-CR62 "Nussbaum, M.C.: Frontiers of justice: disability, nationality, species membership. Harvard University Press, Cambridge \(2006\)")] and individuals with higher cognitive abilities have other interests than individuals without them. However, picking out particular animal species, namely chickens, cows, pigs, fish, etc., and subjecting them to systematic physical violence that would properly give rise to strong moral condemnation if applied to other animal species, namely dogs, cats, and horses, who hold just the same, or very similar capabilities and sets of interests, is unfair. And even if this unfairness is accepted in many parts of society, the acceptance arises firstly out of the fact that the violence itself is mostly hidden and cognitively reinterpreted, and secondly that it lacks an intensive engagement with the well-developed arguments we have just mentioned.

We think that this discrimination between animal species with the same or very similar capacities and interests should be addressed—in general and particularly when dealing with forms of discrimination, e.g. in the field of AI technology. Therefore, most of the examples of speciesist biases in AI applications that we discuss in this paper relate to comparisons between farmed animals and other animals (companion animals), not between animals and humans. The rights of all humans are affirmed in numerous documents signed by many of the world’s countries, starting with the Universal Declaration of Human Rights. This indicates a consensus that is lacking with regard to animals. Speciesist biases in AI are accurately capturing the biased views and actions that are shared, accepted, and performed by a large majority of society. Hence, there is an empirical difference between racist and speciesist biases. It is widely accepted that racism is wrong, and we should go to considerable lengths to eliminate it. Something similar, though perhaps with slightly more dissent, is true of sexism and of discrimination against people because of their sexual orientation. On the other hand, for the majority of people, speciesism is not seen as an issue. We argue, however, that despite these empirical differences, arguments from both moral psychology and animal ethics convincingly demonstrate that speciesist biases should be avoided and are morally wrong. Hence, AI developers and practitioners should work on technologies that support more respectful human-animal relations instead of supporting the status quo.

## 3 Bias mitigation in AI

When developing AI-based software, practitioners have additional ethical responsibilities beyond those of standard, non-learning software [63,64,[65](/article/10.1007/s43681-022-00199-9#ref-CR65 "Hagendorff, T.: The ethics of AI ethics: an evaluation of guidelines. Mind. Mach. 30, 457–461 \(2020\)")]. These responsibilities span the careful selection of inputs that build the basis for the computational learning process itself. With regard to machine learning methods that build the bedrock for today’s AI systems, these inputs or training stimuli shape the behavior of a machine [[66](/article/10.1007/s43681-022-00199-9#ref-CR66 "Rahwan, I., Cebrian, M., Obradovich, N., Bongard, J., Bonnefon, J.-F., Breazeal, C., Crandall, J.W., Christakis, N.A., Couzin, I.D., Jackson, M.O., Jennings, N.R., Kamar, E., Kloumann, I.M., Larochelle, H., Lazer, D., McElreath, R., Mislove, A., Parkes, D.C., Pentland, A., Roberts, M.E., Shariff, A., Tenenbaum, J.B., Wellman, M.: Machine behaviour. Nature 568, 477–486 \(2019\)")]. Behavioral data fed into AI applications reflect people’s (e.g., speciesist) behavior, which thus has an indirect influence on machine (speciesist) behavior.

Today’s AI technologies are dependent on human participation. In many cases, they harness human behavior that is digitized by various tracking methods. AI systems ‘capture’ it by tracking human cognitive and behavioral abilities and patterns. Without the empirical aggregation of recordings of human behavior, many of the current AI systems would not work. An extensive infrastructure for ‘extracting’ [[1](/article/10.1007/s43681-022-00199-9#ref-CR1 "Crawford, K.: Atlas of AI: power, politics, and the planetary costs of artificial intelligence. Yale University Press, New Haven \(2021\)")] or ‘capturing’ [[67](/article/10.1007/s43681-022-00199-9#ref-CR67 "Mühlhoff, R.: Human-aided artificial intelligence: or, how to run large computations in human brains? Toward a media sociology of machine learning. New Med Soc \(2019\). 
                  https://doi.org/10.1177/1461444819885334
                  
                ")] human behavior in distributed networks via user-generated content builds the basis for a computational capacity called ‘AI’. But if AI systems ensnare their capabilities in societies that are interspersed with speciesism, AI technologies will become biased and speciesist themselves. However, biased AI has a bad reputation—for good reasons.

In recent decades, ‘bias’ became a term riddled with ambiguities. On the one hand, inductive biases, which are defined as priors or assumptions of an algorithm to build a general model out of a limited set of training data, are necessary for the success of machine learning [[68](/article/10.1007/s43681-022-00199-9#ref-CR68 "Mitchell, T.M.: The Need for Biases in Learning Generalizations, pp. 1–3 \(1980\)")]. On the other hand, machine biases in the fairness field are associated with algorithmic discrimination, which, roughly speaking, stands for disparate, unjust impacts of applications of algorithmic decision-making on individuals [[69](/article/10.1007/s43681-022-00199-9#ref-CR69 "Barocas, S., Selbst, A.D.: Big data’s disparate impact. Calif. Law Rev. 104, 671–732 \(2016\)")]. In this paper, we use the term bias in the latter sense. Massive efforts are made to mitigate these fairness-related biases in data and algorithms to render AI applications fair [[70](/article/10.1007/s43681-022-00199-9#ref-CR70 "Barocas, S., Hardt, M., Narayanan, A.: Fairness and machine learning. \(2019\). 
                  https://fairmlbook.org/
                  
                 \(Accessed 27 Jan 2020\)")]. These efforts are propelled by various incidents of algorithmic discrimination where biased AI in policing software, hiring systems, medical applications, image recognition, and many more, caused harm to minorities, women, people of color, etc. [71,72,[73](/article/10.1007/s43681-022-00199-9#ref-CR73 "Misty, A.: Microsoft Creates AI Bot – Internet Immediately Turns it Racist. \(2016\). 
                  https://socialhax.com/2016/03/24/microsoft-creates-ai-bot-internet-immediately-turns-racist/
                  
                 \(Accessed 17 Jan 2018\)")]. Reasons and sources for algorithmic discrimination are manifold [[74](/article/10.1007/s43681-022-00199-9#ref-CR74 "Danks, D., London, A.J.: Algorithmic Bias in Autonomous Systems, in: Proceedings of the Twenty-Sixth International Joint Conference on Artificial Intelligence, International Joint Conferences on Artificial Intelligence Organization, California, pp. 4691–4697 \(2017\)")], however, in most cases, fairness-related biases are entrenched in AI systems via data, human–computer interactions as well as algorithms [[75](/article/10.1007/s43681-022-00199-9#ref-CR75 "Hellström, T., Dignum, V., Bensch, S.: Bias in machine learning—what is it good for?, arXiv 1–8 \(2020\)"), [76](/article/10.1007/s43681-022-00199-9#ref-CR76 "Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., Galstyan, A.: A survey on bias and fairness in machine learning. ACM Comput. Surv. \(2019\). 
                  https://doi.org/10.1145/3457607
                  
                ")]. It is to be expected that data bias is the most common type of bias, i.e. a systematic distortion in the training data that can be caused by the selection of data sources, the way in which data from these sources are acquired, as well as by processing operations such as cleaning or aggregation [[77](/article/10.1007/s43681-022-00199-9#ref-CR77 "Olteanu, A., Castillo, C., Diaz, F., Kıcıman, E.: Social data: biases, methodological pitfalls, and ethical boundaries. Front. Big Data 2, 1–33 \(2019\)")]. Akin to data biases are human–computer interaction biases. Human–computer interactions can be affected by specific behavioral patterns in humans, ultimately affecting the very data that is used for further model training. To prevent these biases, AI researchers use various tools and methods for reducing algorithmic discrimination, primarily by dealing with protected attributes [[78](/article/10.1007/s43681-022-00199-9#ref-CR78 "Veale, M., Binns, R.: Fairer machine learning in the real world: mitigating discrimination without collecting sensitive data. Big Data Soc. 4, 1–17 \(2017\)")]. These attributes typically span gender, race, ethnicity, sexual and political orientation, religion, nationality, social class, age, appearance, and disability. Speciesism-related biases, however, are not addressed.

When discussing the issue of speciesist bias in AI, one has to be precise and stress that speciesism does not need to be a relevant dimension of bias mitigation in _all possible_ fields. AI applications in finance, healthcare, policing, etc. are unlikely to be directly biased against animals because the training data capturing human behavior in these fields typically represents very limited, task-specific behavior. Nevertheless, speciesist thinking is manifest in nearly all realms of human activities. Applications like open-domain large language models, image recognition systems, or recommender systems on social media or search engines, on the other hand, are likely to incorporate speciesist biases that can cause adverse consequences for animals. Hence, the following analysis is focused on exactly these fields. In these contexts, if fairness frameworks do not widen their scope and overcome anthropocentrism, AI technologies will not just perpetuate, but also reinforce patterns that promote violence against animals. Perhaps they will even introduce these patterns in social contexts in which they have not previously existed. This perpetuation of speciesism is due to the conservative character of machine learning [[69](/article/10.1007/s43681-022-00199-9#ref-CR69 "Barocas, S., Selbst, A.D.: Big data’s disparate impact. Calif. Law Rev. 104, 671–732 \(2016\)")]. By learning from training stimuli that are, in effect, coagulated past human behavior, machine learning methods tend to preserve as well as fix discriminatory, speciesist biases in applications like natural language generation, recommender systems, ranking algorithms, etc. Ultimately, AI technologies render these patterns difficult to alter and normalize them as seemingly essential, unless bias mitigation measures are undertaken. These measures can change AI models in a progressive sense, for instance in the case of large language models which are clearly malleable when they are being fine-tuned or updated. If such measures are not undertaken, however, these technical artifacts solidify social constructs and discriminatory patterns, and it will then become much more difficult to suppress these patterns, should social negotiation processes deem speciesism unethical. In addition to that, the AI field is currently undergoing a paradigm shift where foundational models, meaning large-scale models that are adaptable to various downstream tasks in areas like language, vision, reasoning, etc. are increasingly displacing smaller models, hence undermining the diversity of AI models [[79](/article/10.1007/s43681-022-00199-9#ref-CR79 "Bommasani, R., Hudson, D.A., Adeli, E., Altman, R., Arora, S., Arx, S.v., Bernstein, M.S., Bohg, J., Bosselut, A., Brunskill, E., Brynjolfsson, E., Buch, S., Card, D., Castellon, R., Chatterji, N., Chen, A., Creel, K., Davis, J.Q., Demszky, D., Donahue, C., Doumbouya, M., Durmus, E., Ermon, S., Etchemendy, J., Ethayarajh, K., Fei-Fei, L., Finn, C., Gale, T., Gillespie, L., Goel, K., Goodman, N., Grossman, S., Guha, N., Hashimoto, T., Henderson, P., Hewitt, J., Ho, D.E., Hong, J., Hsu, K., Huang, J., Icard, T., Jain, S., Jurafsky, D., Kalluri, P., Karamcheti, S., Keeling, G., Khani, F., Khattab, O., Koh, P.W., Krass, M., Krishna, R., Kuditipudi, R., Kumar, A., Ladhak, F., Lee, M., Lee, T., Leskovec, J., Levent, I., Li, X.L., Li, X., Ma, T., Malik, A., Manning, C.D., Mirchandani, S., Mitchell, E., Munyikwa, Z., Nair, S., Narayan, A., Narayanan, D., Newman, B., Nie, A., Niebles, J.C., Nilforoshan, H., Nyarko, J., Ogut, G., Orr, L., Papadimitriou, I., Park, J.S., Piech, C., Portelance, E., Potts, C., Raghunathan, A., Reich, R., Ren, H., Rong, F., Roohani, Y., Ruiz, C., Ryan, J., Ré, C., Sadigh, D., Sagawa, S., Santhanam, K., Shih, A., Srinivasan, K., Tamkin, A., Taori, R., Thomas, A.W., Tramèr, F., Wang, R.E., Wang, W., Wu, B., Wu, J., Wu, Y., Xie, S.M., Yasunaga, M., You, J., Zaharia, M., Zhang, M., Zhang, T., Zhang, X., Zhang, Y. Zheng, L., Zhou, K., Liang, P.: On the opportunities and risks of foundation models, arXiv 1–212 \(2021\) ")]. In the near future, foundational models will serve as a common basis for many mainstream AI applications. Therefore, the impact of these models on equality, economic justice, security, and other ethically relevant considerations is all the more significant.

In the following, we will describe case studies of speciesist biases in three different areas of AI use, namely image recognition, language models, and recommender systems. On the basis of the ethical reasoning we have offered above, we deem these biases to be problematic since they either blatantly misrepresent reality—or in most cases accurately represent it. This seems to be a contradiction. To clarify why this is not the case, we want to differentiate between ‘the world as it is’ versus ‘the world as it should be’ [[75](/article/10.1007/s43681-022-00199-9#ref-CR75 "Hellström, T., Dignum, V., Bensch, S.: Bias in machine learning—what is it good for?, arXiv 1–8 \(2020\)")]. Models can be used to predict the world as it is, which can mean to perpetuate random existing biases. Debiasing algorithms or training data, in contrast, can lead to a modeling of the world as it should be. Here, we opt for using an understanding of the world as it should be. Even if racism, sexism, or speciesism are entrenched in various belief systems, they should not be picked up and incorporated into AI systems. However, in situations where a biased worldview serves as an instrument to displace existing unfairness and AI applications take up the former, they help to preserve the latter. They represent the world as it should be, but in a context where the ought-condition helps belittle the unjust is-condition. At least in part, this is the case with image recognition applications. As we will show in the first subsection of our case studies, image recognition systems were trained with distorted depictions of particular animal species. In this regard, debiasing image recognition systems would mean making them represent reality.

## 4 Exploring AI systems for speciesist biases

### 4.1 Image recognition

Image recognition by computer vision algorithms is not just a technical, but also an ethical challenge. Whereas it may seem to be a simple task for images of apples, hydrants, or house number plaques, interpreting images is often a complex and value-laden endeavor where different meanings, norms, and ideologies interfere with each other [[80](/article/10.1007/s43681-022-00199-9#ref-CR80 "Crawford, K., Paglen, T.: Excavating AI: the politics of images in machine learning training sets. AI Soc \(2021\). 
                  https://doi.org/10.1007/s00146-021-01162-8
                  
                ")]. Moreover, interpretations can change over time. There are no simple correlations between images and their meaning, but varying relations that connect both with each other in arbitrary ways. In the field of computer vision, machine learning happens via training images that are annotated and sorted into categories which then provide vision models with information about an image’s presumed meaning and ultimately with out-of-distribution generalization capabilities to categorize and label previously unseen images. In this process, computer vision algorithms can learn biases from the way humans, animals, or other entities are portrayed in datasets, no matter whether supervised or unsupervised machine learning models are used [[81](/article/10.1007/s43681-022-00199-9#ref-CR81 "Steed, R., Caliskan, A.: Image representations learned with unsupervised pre-training contain human-like biases. ACM Conf 91, 701–713 \(2021\)")]. These biases show up in tasks like object detection [[82](/article/10.1007/s43681-022-00199-9#ref-CR82 "Wilson, B., Hoffman, J., Morgenstern, J.: Predictive inequity in object detection, pp. 1–13 \(2019\). 
                  arXiv:1902.11097v1
                  
                ")], face recognition [[83](/article/10.1007/s43681-022-00199-9#ref-CR83 "Buolamwini, J., Gebru, T.: Gender shades: intersectional accuracy disparities in commercial gender classification. In: Friedler Sorelle,  A., Wilson, C. \(Eds.\) Proceedings of Machine Learning Research. Conference on Fairness, Acocountability, and Transparency, pp. 1–15. PMLR, New York")], image search [[84](/article/10.1007/s43681-022-00199-9#ref-CR84 "Kay, M., Matuszek, C., Munson, S.A.: Unequal Representation and gender stereotypes in image search results for occupations, in: Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems, ACM, New York, NY, USA, pp. 3819–3828 \(2015\)")], or image cropping [[85](/article/10.1007/s43681-022-00199-9#ref-CR85 "Yee, K., Tantipongpipat, U., Mishra, S.: Image cropping on twitter: fairness metrics, their limitations, and the importance of representation, design, and agency. Proc. ACM Hum. Comput Interact. 5, 1–24 \(2021\)")].

Many computer vision models are (pre-)trained on the canonical ImageNet 2012 [[86](/article/10.1007/s43681-022-00199-9#ref-CR86 "Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., Huang, Z., Karpathy, A., Khosla, A., Bernstein, M., Berg, A.C., Fei-Fei, L.: ImageNet large scale visual recognition challenge. Int J Comput Vis 115, 211–252 \(2015\)"), [87](/article/10.1007/s43681-022-00199-9#ref-CR87 "Krizhevsky, A., Sutskever, I., Hinton, G.: ImageNet classification with deep convolutional neural networks. Proc. Adv. Neural. Inform. Process. Syst. 25, 1090–1098 \(2012\)")], a dataset that contains millions of images that were collected from the Internet. ImageNet bases its underlying categories, which mostly comprise nouns or, more specifically, 21,841 indexed synonym sets, on the semantic categories of WordNet, which provides a hierarchically organized taxonomy of words [[88](/article/10.1007/s43681-022-00199-9#ref-CR88 "Miller, G.A., Beckwith, R., Fellbaum, C., Gross, D., Miller, K.J.: Introduction to wordnet: an on-line lexical database*. Int. J. Lexicogr. 3, 235–244 \(1990\)")]. WordNet is based on Library of Congress taxonomies that date back to the 1970s, a time in which racist, sexist, and speciesist terms were widely accepted. In ImageNet, ‘animal’ is one of the top-level categories. It is distinguished from ‘persons’, which is not just a contested category in and of itself that required major subsequent improvements due to offensive subcategories [[89](/article/10.1007/s43681-022-00199-9#ref-CR89 "Yang, K., Qinami, K., Fei-Fei, L., Deng, J., Russakovsky, O.: Towards fairer datasets: filtering and balancing the distribution of the people subtree in the imagenet hierarchy, pp. 1–15 \(2020\). 
                  arXiv:1912.07726v1
                  
                ")], but also provides the foundation for separating the latter from animals or ‘non-persons’ in a binary structure. In this regard, ImageNet is similar to other popular image datasets like CIFAR-100 [[90](/article/10.1007/s43681-022-00199-9#ref-CR90 "Krizhevsky, A.: Learning multiple layers of features from tiny images, pp. 1–60. \(2009\). 
                  https://www.cs.toronto.edu/~kriz/learning-features-2009-TR.pdf
                  
                 \(Accessed 16 Dec 2021\)")], Open Images Dataset [[91](/article/10.1007/s43681-022-00199-9#ref-CR91 "Kuznetsova, A., Rom, H., Alldrin, N., Uijlings, J., Krasin, I., Pont-Tuset, J., Kamali, S., Popov, S., Malloci, M., Kolesnikov, A., Duerig, T., Ferrari, V.: The open images dataset V4: unified image classification, object detection, and visual relationship detection at scale. Int. J. Comput. Vis. 128, 1956–1981 \(2020\)")], COCO [[92](/article/10.1007/s43681-022-00199-9#ref-CR92 "Lin, T.-Y., Maire, M., Belongie, S., Bourdev, L., Girshick, R., Hays, J., Perona, P., Ramanan, D., Zitnick, C.L., Dollár, P.: Microsoft COCO: common objects in context, pp. 1–15 \(2014\). 
                  arXiv:1405.0312v3
                  
                ")], and many others. In addition, WordNet and other annotation structures for image datasets contain speciesist terms like ‘hog’, ‘porker’, ‘milk cow’, ‘layer’, ‘livestock’, etc. Furthermore, ImageNet has numerous classes for dogs containing subclasses for ‘working dogs’, ‘toy dogs’, ‘hunting dogs’, or ‘sporting dogs’. This can also be deemed to be ethically problematic since dogs are categorized in a way that characterizes them as means to human ends. Another class is named ‘food fish’, which contains countless pictures of angler trophy photos instead of showing the animals in their natural environments. In the same vein, lobsters or crab species are shown nearly exclusively in restaurant or kitchen environments.

Furthermore, one salient trait of image datasets is the fact that they portray farmed animals in a non-representative way. Cows, pigs, or chickens are predominantly shown in free-range environments (see Fig. [1](/article/10.1007/s43681-022-00199-9#Fig1)), whereas the overwhelming majority of these animals are actually confined in crowded factory farms [[93](/article/10.1007/s43681-022-00199-9#ref-CR93 "Anthis, J.R.: US factory farming estimates. \(2019\). 
                  https://www.sentienceinstitute.org/us-factory-farming-estimates
                  
                 \(Accessed 17 Dec 2021\)")]. For instance, of all living birds, only one-third exist in the wild, whereas two-thirds are farmed birds [[94](/article/10.1007/s43681-022-00199-9#ref-CR94 "Bar-On, Y.M., Phillips, R., Milo, R.: The biomass distribution on earth. Proc Natl Acad Sci USA 115\(25\), 6506–6511 \(2018\)")]. Of the latter, 99% live on factory farms [[93](/article/10.1007/s43681-022-00199-9#ref-CR93 "Anthis, J.R.: US factory farming estimates. \(2019\). 
                  https://www.sentienceinstitute.org/us-factory-farming-estimates
                  
                 \(Accessed 17 Dec 2021\)")]. However, popular image training datasets portray these very birds in a way that causes the impression that they live predominantly in free-range conditions. In fact, ag-gag legislation and similar anti-whistleblower laws are making it harder for the public, and also photographers, journalists, or undercover activists, to gather realistic footage of farmed animals’ living conditions [[95](/article/10.1007/s43681-022-00199-9#ref-CR95 "Martin, T.A.: “This image cannot be displayed”: critical visual pedagogy and images from factory farms. J. Crit. Anim. Stud 12, 79–104 \(2014\)")]. Hence, due to the general and intended non-transparency of factory farming, image training datasets suffer from representational or sampling biases, meaning biases that happen from the way one defines and samples a group [[76](/article/10.1007/s43681-022-00199-9#ref-CR76 "Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., Galstyan, A.: A survey on bias and fairness in machine learning. ACM Comput. Surv. \(2019\). 
                  https://doi.org/10.1145/3457607
                  
                "), [96](/article/10.1007/s43681-022-00199-9#ref-CR96 "Shankar, S., Halpern, Y., Breck, E., Atwood, J., Wilson, J., Sculley, D.: No classification without representation: assessing geodiversity issues in open data sets for the developing world, arXiv 1–5 \(2017\) ")], in this case the group of farmed animals. One peculiarity, though, is that while ImageNet’s hog category consists mostly of images of pigs in free-range environments, many images in this category show tortured pigs, pigs during dismembering, dead pigs, pigs covered in blood, tattooed pigs, pig genital close-ups, and other disturbing content.

**Fig. 1**

[ Full size image](/article/10.1007/s43681-022-00199-9/figures/1)

Example images of different farmed animals in popular image training datasets showing representational biases

But what are the consequences of representational speciesist biases in image training datasets? In brief, they are propagated into the various models used for computer vision tasks. The model will then generalize poorly to other data and exhibit disparities in performance based on species affiliation, location of animals, and other attributes, especially in cases in which easy shortcuts can be learned [[97](/article/10.1007/s43681-022-00199-9#ref-CR97 "Geirhos, R., Jacobsen, J.-H., Michaelis, C., Zemel, R., Brendel, W., Bethge, M., Wichmann, F.A.: Shortcut learning in deep neural networks. Nat. Mach. Intell. 2, 665–673 \(2020\)"), [98](/article/10.1007/s43681-022-00199-9#ref-CR98 "Beery, S., van Horn, G., Perona, P.: Recognition in Terra Incognita, pp. 1–20 \(2018\). 
                  arXiv:1807.04975v2
                  
                ")]. To prove poor out-of-distribution generalization capabilities in image classification models that were trained on ImageNet, we composed a new dataset with four categories: free-range hens, factory-farmed hens, free-range pigs, and factory-farmed pigs (see Fig. [2](/article/10.1007/s43681-022-00199-9#Fig2)). Per category, we selected 100 images.

**Fig. 2**

[ Full size image](/article/10.1007/s43681-022-00199-9/figures/2)

Example images of datasets depicting hens and pigs in factory farming as well as free-range environments

We then calculated the mean accuracy of image classification performances for ‘hog’ and ‘hen’ in each of the two categories using MobileNet [[99](/article/10.1007/s43681-022-00199-9#ref-CR99 "Howard, A.G., Zhu, M., Chen, B., Kalenichenko, D., Wang, W., Weyand, T., Andreetto, M., Adam, H.: MobileNets: efficient convolutional neural networks for mobile vision applications, pp. 1–9 \(2017\). 
                  arXiv:1704.04861v1
                  
                ")], VGG16 [[100](/article/10.1007/s43681-022-00199-9#ref-CR100 "Simonyan, K., Zisserman, A.: Very deep convolutional networks for large-scale image recognition, pp. 1–14 \(2015\). 
                  arXiv:1409.1556v6
                  
                ")], ResNet50 [[101](/article/10.1007/s43681-022-00199-9#ref-CR101 "He, K., Zhang, X., Ren, S., Sun, J.: Deep residual learning for image recognition, pp. 1–12 \(2015\). 
                  arXiv:1512.03385v1
                  
                ")], InveptionV3 [[102](/article/10.1007/s43681-022-00199-9#ref-CR102 "Szegedy, C., Vanhoucke, V., Ioffe, S., Shlens, J., Wojna, Z.: Rethinking the inception architecture for computer vision, pp. 1–10 \(2015\). 
                  arXiv:1512.00567v3
                  
                ")], and Vision Transformer [[103](/article/10.1007/s43681-022-00199-9#ref-CR103 "Dosovitskiy, A., Beyer, L., Kolesnikov, A., Weissenborn, D., Zhai, X., Unterthiner, T., Dehghani, M., Minderer, M., Heigold, GGelly, S., Uszkoreit, J., Houlsby, N.: An image is worth 16x16 words: transformers for image recognition at scale, pp. 1–22 \(2021\). 
                  arXiv:2010.11929v2
                  
                ")] which were all pre-trained on ImageNet. We compared the results to the base accuracy of the models. All models showed worse performance when classifying images depicting farmed animals than images of animals in free-range environments (see Fig. [3](/article/10.1007/s43681-022-00199-9#Fig3)). Vision Transformer had the least problems with classifying pigs and hens correctly in both categories. The remaining four models showed large differences in accuracy between the free-range and factory farming condition, ranging from 21 to 46%. Since for our dataset we only selected images where animals were clearly visible and depicted as the image’s main subject—which is not the case in ImageNet–, the classification accuracy for the free-range categories is consistently higher than the base accuracy of the used models.

**Fig. 3**

[ Full size image](/article/10.1007/s43681-022-00199-9/figures/3)

Mean accuracy of image classification models pre-trained on ImageNet in classifying hens and pigs in factory farming as well as free-range environments

All in all, image recognition systems have learned to correctly perceive a myth, but not reality. That is due to representational biases in their training data as well as unbalanced annotation routines. These flaws mean that the systems have great difficulty in good image classification performance: for instance classifying a cow in a meadow and a cow in a very different context, such as a beach [[97](/article/10.1007/s43681-022-00199-9#ref-CR97 "Geirhos, R., Jacobsen, J.-H., Michaelis, C., Zemel, R., Brendel, W., Bethge, M., Wichmann, F.A.: Shortcut learning in deep neural networks. Nat. Mach. Intell. 2, 665–673 \(2020\)"), [98](/article/10.1007/s43681-022-00199-9#ref-CR98 "Beery, S., van Horn, G., Perona, P.: Recognition in Terra Incognita, pp. 1–20 \(2018\). 
                  arXiv:1807.04975v2
                  
                ")] or, in our case, an intensive farm, as the same kind of animal. One likely consequence of the biases in image training data are influences on image search algorithms [[84](/article/10.1007/s43681-022-00199-9#ref-CR84 "Kay, M., Matuszek, C., Munson, S.A.: Unequal Representation and gender stereotypes in image search results for occupations, in: Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems, ACM, New York, NY, USA, pp. 3819–3828 \(2015\)")]. They base their output on a number of different signals. However, when focusing on the image recognition part, one can assume that they produce idealized images when asked to return images for farmed animals, hence perpetuating stereotypes and misconceptions concerning animal welfare and living conditions for farmed animals. These algorithms ‘see’ factory-farmed pigs, cows, or chickens differently from other animals. Similarly, generative models like Variational Autoencoders [[104](/article/10.1007/s43681-022-00199-9#ref-CR104 "Kingma, D.P., Welling, M.: An introduction to variational autoencoders, FNT in machine. Learning 12, 307–392 \(2019\)")] or Generative Adversarial Networks [[105](/article/10.1007/s43681-022-00199-9#ref-CR105 "Goodfellow, I.J., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., Bengio, Y.: Generative adversarial networks, arXiv 1–9 \(2014\) ")] trained on the above-mentioned datasets will be likely to yield unrealistic, biased images of particular animal species. Moreover, animal pose estimation models, facial recognition, vision question answering, or ‘zooveilance’ [[106](/article/10.1007/s43681-022-00199-9#ref-CR106 "Braverman, I.: Zooveillance: Foucault goes to the zoo. SS 10, 119–133 \(2012\)"), [107](/article/10.1007/s43681-022-00199-9#ref-CR107 "Donaldson, A.: Surveillance and non-humans. In: Ball, K.S., Haggerty, K.D., Lyon, D. \(eds.\) Routledge handbook of surveillance studies, pp. 217–224. Routledge, Abingdon \(2012\)")] applications are likely to fail when used in contexts outside of free-range farming. However, image recognition systems that are specifically aiming at factory farming settings exist, and they are indeed trained in the very data environments they need [108,109,110,[111](/article/10.1007/s43681-022-00199-9#ref-CR111 "Andresen, N., Wöllhaf, M., Hohlbaum, K., Lewejohann, L., Hellwich, O., Thöne-Reineke, C., Belik, V.: Towards a fully automated surveillance of well-being status in laboratory mice using deep learning: starting with facial expression analysis. PLoS One 15, 1–23 \(2020\)")]. Apart from that, though, and in general, image recognition algorithms that embody speciesist biases perpetuate myths concerning the living conditions of farmed animals and therefore thwart informed decision-making about consumer purchases. In light of the “picture superiority effect” in humans, meaning that images are more likely to be remembered than words [112,113,[114](/article/10.1007/s43681-022-00199-9#ref-CR114 "Shepard, R.N.: Recognition memory for words, sentences, and pictures. J. Verbal Learn. Verbal Behav. 6, 156–163 \(1967\)")], the subtle feedback loops between biased image recognition algorithms and cultural notions, social norms, and ideological settings should not be underestimated. This is now widely recognized when it comes to algorithms that do not recognize people with equal accuracy regardless of their race or gender [[115](/article/10.1007/s43681-022-00199-9#ref-CR115 "Schwemmer, C., Knight, C., Bello-Pardo, E.D., Oklobdzija, S., Schoonvelde, M., Lockhart, J.W.: Diagnosing gender bias in image recognition systems. Socius 6, 1–17 \(2020\)")]. Such algorithms are now generally rejected. AI developers should also aim for algorithms that do not incorporate unjust biases against particular animal species.

### 4.2 Large language models

The basic operating principle of language models comprises four steps, namely tokenizing (assign words to tokens), cleaning (removal of stop words etc.), vectorizing (translate words into numerical representations of their surroundings), and machine learning (train recurrent neural networks to predict word combinations). Eventually, the machine learning models learn how to produce natural language on their own. However, the crux with these models comes from the fact that they perpetuate word combinations that are learned from man-made texts. Due to their training on word co-occurrences in bodies of text and their ability to predict the surroundings of a word, large language models corroborate existing language patterns. Obviously, man-made texts contain all sorts of biases, for instance gender or racial stereotypes. In large language models, biases occur on various levels [116,117,[118](/article/10.1007/s43681-022-00199-9#ref-CR118 "Stanovsky, G., Smith, N.A., Zettlemoyer, L.: Evaluating gender bias in machine translation, in: Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 1679–1684 \(2019\)")]: they are contained in embedding spaces, coreference resolutions, dialogue or text generation, hate-speech detection, sentiment analysis, or machine translation. Types of harm caused by speciesist biases comprise stereotyping, representational harms, questionable correlations, or misinformation harms. Linguistic discrimination against animals can occur in large language models that reproduce speciesist speech patterns, stereotypes, euphemisms, or other oppressive tendencies against animals. Moreover, misinformation harms arise from large language models generating text that represents false, misleading, or nonsensical information concerning animals. Humans may take the output of large language models to be correct, therefore solidifying wrong notions or narratives about animals and their capabilities. And whilst the AI community is eager to debias algorithms with regard to gender stereotypes, racism, and a few other discriminatory patterns [[116](/article/10.1007/s43681-022-00199-9#ref-CR116 "Blodgett, S.L., Barocas, S., Daumé III, H., Wallach, H.: Language \(Technology\) is Power: A Critical Survey of “Bias” in NLP, in: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 5454–5476 \(2020\)"), [119](/article/10.1007/s43681-022-00199-9#ref-CR119 "Meade, N., Poole-Dayan, E., Reddy, S.L: An empirical survey of the effectiveness of debiasing techniques for pre-trained language models, arXiv 1–12 \(2021\)"), [120](/article/10.1007/s43681-022-00199-9#ref-CR120 "Nadeem, M., Bethke, A., Reddy, S.: StereoSet: measuring stereotypical bias in pretrained language models, arXiv 1–15 \(2020\) ")], to the best of our knowledge no such effort is undertaken regarding speciesism. However, language is a significant contributor to the unjust power relation to as well as the violence-laden oppression of animals [[121](/article/10.1007/s43681-022-00199-9#ref-CR121 "Stibbe, A.: Language, power and the social construction of animals. Soc. Anim. 9, 145–161 \(2001\)")]. Language influences human thought and creates realities [[122](/article/10.1007/s43681-022-00199-9#ref-CR122 "Whorf, B.L., Carroll, J.B., Levinson, S.C., Lee, P.: Language, thought, and reality. The MIT Press, Cambridge \(2012\)")]. Speciesist language patterns exist in more or less all human languages and cultures [[123](/article/10.1007/s43681-022-00199-9#ref-CR123 "Steffensen, S.V., Fill, A.: Ecolinguistics: the state of the art and future horizons. Lang. Sci. 41, 6–25 \(2014\)"), [124](/article/10.1007/s43681-022-00199-9#ref-CR124 "Fill, A., Penz, H.: The routledge handbook of ecolinguistics. Routledge, New York \(2018\)")]. Accordingly, highlighting a speciesist use of language in AI models is an important step in not perpetuating these patterns. In the following, we explore instances of speciesist bias in various language model applications.

Speciesist tendencies can, for instance, be reflected in word vectors, meaning vectors that encode semantic similarities between words. Word embedding models like GloVe [[125](/article/10.1007/s43681-022-00199-9#ref-CR125 "Pennington, J., Socher, R., Manning, C., GloVe: global vectors for word representation, in: Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing \(EMNLP\), Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 1532–1543 \(2014\)")] or Word2Vec [[126](/article/10.1007/s43681-022-00199-9#ref-CR126 "Mikolov, T., Chen, K., Corrado, G., Dean, J.: Efficient estimation of word representations in vector space, arXiv 1–12 \(2013\)")] are trained on text containing billions of tokens. The models are used to obtain vector representations for words by learning their respective co-occurrence with other words. In short, word embeddings quantify the relatedness of words. Investigating them can serve the purpose of finding biases in various types of training data [[127](/article/10.1007/s43681-022-00199-9#ref-CR127 "Bolukbasi, T., Chang, K.-W., Zou, J., Saligrama, V., Kalai, A.: Man is to computer programmer as woman is to homemaker? Debiasing word embeddings, arXiv 1–25 \(2016\)")]. If biases are part of them, they will also be part of trained language models. To investigate GloVe and see whether it reveals implicit speciesism in its training data, which stems from Wikipedia as well as news article headlines, we selected words describing farmed animals (hog, pig, cow, calf, chicken, goat, sheep) as well as companion animals (dog, cat, rabbit) and non-companion animals (mouse, parrot, deer) and calculated their situatedness in word pairs (cute/ugly, love/hate, she/it, facility/home, etc.) (see Fig. [4](/article/10.1007/s43681-022-00199-9#Fig4)). By that, we could demonstrate that GloVe associates farmed animals predominantly with negative terms like ‘ugly’, ‘primitive’, ‘hate’, etc. On the other hand, companion species like dogs, cats, or parrots, as well as some non-companion species, are related to positive concepts like ‘cute’, ‘love’, personhood, or domesticity.

**Fig. 4**

[ Full size image](/article/10.1007/s43681-022-00199-9/figures/4)

Word vectors from GloVe.6B.50d showing cosine similarity between words revealing speciesist biases

Moreover, word vectors seem to perpetuate the false belief that animals do not have minds. Research on mind denial shows that humans are more reluctant to harm animal individuals who possess a mind [[128](/article/10.1007/s43681-022-00199-9#ref-CR128 "Loughnan, S., Haslam, N., Bastian, B.: The role of meat consumption in the denial of moral status and mind to meat animals. Appetite 55, 156–159 \(2010\)"), [129](/article/10.1007/s43681-022-00199-9#ref-CR129 "Bastian, B., Loughnan, S., Haslam, N., Radke, H.R.M.: Don’t mind meat? The denial of mind to animals used for human consumption. Pers. Soc. Psychol. Bull. 38, 247–256 \(2012\)")]. Denying animals’ minds reduces negative emotions like guilt or repulsion that are caused when harm is afflicted to animals. Therefore, we investigated the similarity between the term ‘animal’ and ‘human’ as well as nouns (machine, impulse, instincts, drive, interest, senses, mind, emotions, desire, language, communication, reason, cognition) and adjectives (dumb, silly, dull, reckless, stupid, foolish, clever, wise, sensible, intelligent, gifted) with an additional dimension for the word pairs simple/complex and bad/good. Results show that training data for large language models do not just reinforce the appreciation of ‘higher’ mental capabilities, but even more so reflect patterns that indicate mind denial in animals, ultimately perpetuating their devaluation (see Fig. [5](/article/10.1007/s43681-022-00199-9#Fig5)).

**Fig. 5**

[ Full size image](/article/10.1007/s43681-022-00199-9/figures/5)

Word vectors from GloVee.6B.50d showing cosine similarity between words revealing tendencies for mind denial in animals

Other word embedding models like Word2Vec [[126](/article/10.1007/s43681-022-00199-9#ref-CR126 "Mikolov, T., Chen, K., Corrado, G., Dean, J.: Efficient estimation of word representations in vector space, arXiv 1–12 \(2013\)")], which can likewise be trained using text corpora like Google News, Wikipedia, or Twitter tweets, also reveal speciesist biases. In our investigation of Word2Vec, we used three groups, namely six words describing humans (human, person, individual, child, man, woman), six words including non-farmed animals (dog, cat, dolphin, rabbit, parrot, hamster), and six words describing farmed animals (cow, pig, chicken, cattle, hog, hen). We then calculated mean word similarities between the three groups and a list of 20 positively related adjectives (charming, diligent, friendly, funny, kind, likable, intelligent, brave, nice, sensible, amazing, awesome, incredible, elegant, lovely, vivid, free, confident, fantastic, remarkable) that are appropriate to describe animals as well as humans. All the mentioned training text corpora reveal speciesist tendencies (see Fig. [6](/article/10.1007/s43681-022-00199-9#Fig6)). Humans are more closely associated with positive adjectives than animals, and non-farmed animals are more closely associated with them than farmed animals. The results reflect the speciesism that is already predominant in societies. Again, these biases will be propagated when training language models, meaning that they will become fixed instead of being negotiated. Large language models, which will be increasingly applied in all kinds of social contexts, will corroborate and normalize the linguistic devaluation of animals—unless debiasing measures are undertaken.

**Fig. 6**

[ Full size image](/article/10.1007/s43681-022-00199-9/figures/6)

Word2Vec trained on Google News, Wikipedia, and Twitter reveal speciesist bias when testing for word similarities of humans, non-farmed animals, and farmed animals with positive adjectives

Context-free models such as GloVe or Word2Vec only generate single embeddings. Contextual models, on the other hand, capture relationships of words in sentences. Hence, when going one step further, one can investigate speciesist biases in fully-fledged large language models, the most famous one being GPT-3. To do so, we composed a few-shot task for GPT-3 comprising prompts with questions about different animal species as well as stereotypical answers to them in the form of a list comprising four items. The prompt reads as follows: ‘What are parrots good for? Flying, screaming, expositions, mimicking/What are donkeys good for? Being stubborn, pulling, caressing, carrying/What are elephants good for? Memorizing things, grief, altruism, work/What are sheep good for? Cuteness, wool, bleating, meat’. This prompt can in itself raise the criticism for speciesism because it is suggesting that animals are means to an end. It is nevertheless able to reveal speciesist patterns since different outputs for different animals can be compared to each other. For our test, we used the davinci engine. Temperature was set to 0 to get deterministic outcomes without randomness. Response length was set to 20. Results show that GPT-3 shows the very speciesist biases in its outputs that were already signaled by word embeddings. Short question and answer tasks in a few-shot setting with GPT-3, which was only evaluated for gender, racial, and religious biases by its developers [[130](/article/10.1007/s43681-022-00199-9#ref-CR130 "Brown, T.B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D.M., Wu, J., Winter, C., Hesse, C., Chen, M., Sigler, E., Litwin, M., Gray, S., Chess, B., Clark, J., Berner, C., McCandlish, S., Radford, A., Sutskever, I., Amodei, D.: Language models are few-shot learners, pp. 1–75 \(2020\). 
                  arXiv:2005.14165v4
                  
                ")], reveal the speciesism contained in the model (see Table [1](/article/10.1007/s43681-022-00199-9#Tab1)). The more an animal species is classified as a farmed animal (in a western sense), the more GPT-3 tends to produce outputs that are related to violence against the respective animals.

**Table 1 Q &A tasks using GPT-3 reveal speciesist biases**

[Full size table](/article/10.1007/s43681-022-00199-9/tables/1)

Similarly, when extending question and answer tasks by probing GPT-3 for underspecified questions, speciesist stereotypes are uncovered. Bias detection via underspecified questions is a very recent approach in natural language processing research which is able to shed confounding factors other methods have [[131](/article/10.1007/s43681-022-00199-9#ref-CR131 "Li, T., Khot, T., Khashabi, D., Sabharwal, A., Srikumar, V.: UnQovering stereotyping biases via underspecified questions, pp. 1–15 \(2020\). 
                  arXiv:2010.02428v3
                  
                ")]. Constructing underspecified inputs includes composing templates with two subjects and an attribute, whereas the questions are designed such that each subject is equally likely and that attributes are selected such that favoring any subject over another would be unfair [[131](/article/10.1007/s43681-022-00199-9#ref-CR131 "Li, T., Khot, T., Khashabi, D., Sabharwal, A., Srikumar, V.: UnQovering stereotyping biases via underspecified questions, pp. 1–15 \(2020\). 
                  arXiv:2010.02428v3
                  
                ")]. In the following, we designed nine prompts and three underspecified questions for each prompt (see Table [2](/article/10.1007/s43681-022-00199-9#Tab2)). The prompts contrast typical non-farmed animal species with typical farmed animal species (from a western perspective). We tested for positional dependence in the questions, meaning that the answers must not depend on the order of the subjects or negations. This had no effects, besides a few cases where the output turned to ‘Unknown’. In sum, underspecified questions reveal more speciesist bias in GPT-3.

**Table 2 Underspecified question prompts for GPT-3 in the standard Q &A playground settings**

[Full size table](/article/10.1007/s43681-022-00199-9/tables/2)

Recent progress in foundational language models like GPT-n, BERT, ELMo, and others combined with the crowdsourced datasets containing text snippets on social and ethical norms allowed researchers to build AI systems that are particularly fine-tuned for tasks in moral decision-making. These systems are supposed to ‘facilitate […] ethical interactions between AI systems and humans’ [[132](/article/10.1007/s43681-022-00199-9#ref-CR132 "Jiang, L., Hwang, J.D., Bhagavatula, C., Le Bras, R., Forbes, M., Borchardt, J., Liang, J., Etzioni, O., Sap, M., Choi, Y.: Delphi: towards machine ethics and norms, pp. 1–42 \(2021\). 
                  arXiv:2110.07574v1
                  
                ")]. Hence, one would expect that especially morally informed AI systems are particularly sensitive to biases or discrimination and possess high ethical standards due to their exclusive exposure to training stimuli that represent ethical judgments [133,134,135,136,[137](/article/10.1007/s43681-022-00199-9#ref-CR137 "Tay, Y., Ong, D., Fu, J., Chan, A., Chen, N., Luu, A.T., Pal, C.: Would you rather? A new benchmark for learning machine alignment with cultural values and social preferences, in: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 5369–5373 \(2020\)")]. To investigate whether this holds true regarding speciesist biases, we investigated ‘Delphi’, which is currently the most advanced morally informed large language model [[132](/article/10.1007/s43681-022-00199-9#ref-CR132 "Jiang, L., Hwang, J.D., Bhagavatula, C., Le Bras, R., Forbes, M., Borchardt, J., Liang, J., Etzioni, O., Sap, M., Choi, Y.: Delphi: towards machine ethics and norms, pp. 1–42 \(2021\). 
                  arXiv:2110.07574v1
                  
                ")]. The researchers who developed Delphi utilized a ‘commonsense norm bank’, which is a compilation of five other large-scale datasets that contain diverse, context-specific descriptive norms in the form of natural language snippets. Ultimately, Delphi is able to answer text-based open-domain questions on ethical situations. It can give yes/no assessments on moral statements, as well as compare different ethical situations. We designed a set of simple prompts like ‘Killing a cat’, ‘Killing a pig’, ‘Killing animals’, ‘Killing farmed animals’, etc. to see whether Delphi’s outputs reveal speciesist patterns (see Table [3](/article/10.1007/s43681-022-00199-9#Tab3)). Results show that the system is clearly prone to speciesist biases and, contrary to what one would expect, not immune to them.

**Table 3 Delphi API answers to moral questions (https://delphi.allenai.org/). Class stands for good (1), discretionary (0), and bad (− 1)**

[ Full size table](/article/10.1007/s43681-022-00199-9/tables/3)

To sum up, large language models promote speciesist biases in many ways. The examples are only a short extract of the range of possible ways speciesist biases can be expressed. They are not just contained in embedding spaces, text generation, and morally informed language models. It is to be expected that AI-based hate-speech detection works less well regarding the discovery of hate and speciesist slurs against animals. Machine translation may be prone to suggest euphemisms, distancing, or reifying terms describing the circumstances under which farmed animals, in particular, have to live. Furthermore, large language models may engender false or misleading information regarding agricultural practices, animal capabilities, and the like. Ultimately, avoiding speciesist bias in large language models will be a mammoth task since the AI fairness community is still unaware of this particular type of bias.

### 4.3 Recommender systems

Recommender systems that are based on collaborative filtering exploit the collective behavior of users to personalize content, products, search results, news, job offers, places, etc. [[138](/article/10.1007/s43681-022-00199-9#ref-CR138 "Ricci, F., Rokach, L., Shapira, B.: Introduction to recommender systems handbook. In: Ricci, F., Rokach, L., Shapira, B., Kantor, P.B. \(eds.\) Recommender systems handbook, pp. 1–35. Springer, Boston \(2011\)")]. They are based on a plethora of user signals like clickstreams, search queries, profile information, reactions, durations of site views, scroll behavior, comments, and many more. All these data traces are used to infer the preferences of individual users for specific items [[139](/article/10.1007/s43681-022-00199-9#ref-CR139 "Wei, K., Huang, J., Fu, S.: A survey of e-commerce recommender systems, in: 2007 International Conference on Service Systems and Service Management, IEEE, Chengdu, pp. 1–5 \(2007\)")]. Using past behavior, training machine learning algorithms on them, and thus transferring it into machine behavior, recommender systems become prone to biases, especially historical biases, position biases, exposure biases, or popularity biases [[76](/article/10.1007/s43681-022-00199-9#ref-CR76 "Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., Galstyan, A.: A survey on bias and fairness in machine learning. ACM Comput. Surv. \(2019\). 
                  https://doi.org/10.1145/3457607
                  
                "), [140](/article/10.1007/s43681-022-00199-9#ref-CR140 "Chen, J., Dong, H., Wang, X., Feng, F., Wang, M., He, X., Bias and debias in recommender system: a survey and future directions, pp. 1–20 \(2020\). 
                  arXiv:2010.03240v1
                  
                ")]. However, biases are not problematic in and of themselves [[141](/article/10.1007/s43681-022-00199-9#ref-CR141 "Hagendorff, T.: Linking human and machine behavior: a new approach to evaluate training data quality for beneficial machine learning. Mind. Mach. 31, 563–593 \(2021\)")]. They may be acceptable if they are critical for the legitimate solution of a given task. In many cases, however, they promote unfair treatment of individuals [[69](/article/10.1007/s43681-022-00199-9#ref-CR69 "Barocas, S., Selbst, A.D.: Big data’s disparate impact. Calif. Law Rev. 104, 671–732 \(2016\)")]. In algorithmic recommender systems, unwanted biases can even reinforce themselves when users interact with recommendations, causing a feedback loop or, in other words, popularity biases [[142](/article/10.1007/s43681-022-00199-9#ref-CR142 "Germano, F., Gómez, V., Le Mens, G.: The few-get-richer: a surprising consequence of popularity-based rankings, pp. 1–7 \(2019\). 
                  arXiv:1902.02580v2
                  
                ")]. Such bias amplifications can result in a homogenization of user experiences [[143](/article/10.1007/s43681-022-00199-9#ref-CR143 "Mansoury, M., Abdollahpouri, H., Pechenizkiy, M., Mobasher, B., Burke, R.: Feedback loop and bias amplification in recommender systems, pp. 1–5 \(2020\). 
                  arXiv:2007.13019v1
                  
                ")].

Typically, recommender systems focus on business applications and commercial objectives. However, due to their far-reaching ethical implications, negative externalities, as well as systemic effects [[144](/article/10.1007/s43681-022-00199-9#ref-CR144 "Milano, S., Taddeo, M., Floridi, L.: Recommender systems and their ethical challenges. AI Soc 35, 957–967 \(2020\)")], one has to put them into a broader context. In view of omnipresent speciesism in purchasing decisions as well as media and news consumption, recommender systems can become amplifiers of unnecessary violence against animals. Unfortunately, due to the fact that recommender systems are typically corporate secrets, we were not able to scrutinize them empirically. However, we gather some tentative examples where speciesist bias in recommender systems can cause harm.

In search engines, ranking algorithms that ‘recommend’ higher-ranked results can lead to an unequal representation of information, knowledge, or opinions. Users trust higher-ranked results more than lower-ranked ones; thus, search engines can have a significant impact on individuals’ decision-making, attitudes, or beliefs without them being aware of this influence. This effect, termed ‘search engine manipulation effect’, was shown to even be able to influence elections [[145](/article/10.1007/s43681-022-00199-9#ref-CR145 "Epstein, R., Robertson, R.E.: The search engine manipulation effect \(SEME\) and its possible impact on the outcomes of elections. Proc. Natl. Acad. Sci. 112, 4512–4521 \(2015\)")]. Regarding speciesist biases, it is to be assumed that for instance search terms like ‘help animals’, ‘animal charities’, ‘animal donation’, and the like lead to organizations that mainly focus on dogs, cats, and other companion animals. This arguably affects the relative donations going into animal welfare issues that are related to companion, but not farmed animals, despite the latter quantitatively being subject to far more abuse than the former. Moreover, at e-commerce platforms, due to AI-based recommender systems, users become embedded into nudges that direct their behavior towards consumption patterns that may involve harm to animals. Online platforms selling clothes, for instance, may recommend products that contain parts of animal origin if this corresponds to past purchasing behavior that adapts to current fashion trends, regardless of the harms afflicted to animals that are kept for leather, wool, fur, or down. In addition to search engines and e-commerce platforms, recommender systems used to filter posts on social media platforms can limit the range of opinions with which users are confronted [[146](/article/10.1007/s43681-022-00199-9#ref-CR146 "Harambam, J., Helberger, N., van Hoboken, J.: Democratizing algorithmic news recommenders: how to materialize voice in a technologically saturated media ecosystem. Philos. Trans. A Math. Phys. Eng. Sci. 376, 1–21 \(2018\)")], probably preventing them from getting in contact with information on animal protection, factory farming, its environmental or health impact, etc. The main goal of recommender systems on social media platforms is to increase user engagement to bind them to the respective platform. This, in turn, raises the likelihood of advertisement contact and clickthrough rates [[147](/article/10.1007/s43681-022-00199-9#ref-CR147 "Eyal, N., Hoover, R.: Hooked: how to build habit-forming products. Princeton University Press, Princeton \(2014\)"), [148](/article/10.1007/s43681-022-00199-9#ref-CR148 "Kuss, D.J., Griffiths, M.D.: Social networking sites and addiction: ten lessons learned. Int. J. Environ. Res. Public Health. \(2017\). 
                  https://doi.org/10.3390/ijerph14030311
                  
                ")]. This mechanism, however, causes various kinds of biases in the platforms’ recommender systems, especially behavioral biases [[77](/article/10.1007/s43681-022-00199-9#ref-CR77 "Olteanu, A., Castillo, C., Diaz, F., Kıcıman, E.: Social data: biases, methodological pitfalls, and ethical boundaries. Front. Big Data 2, 1–33 \(2019\)")]. With this in mind, it can be assumed that on average, content representing culturally established speciesist patterns of thought causes stronger user engagement than anti-speciesist content. However, since engagement quantity determines the subsequent dissemination and recommendation of the respective content, AI-based filters on social media platforms can become subtle amplifiers of speciesism.

## 5 Conclusion

Traditionally, fairness in AI requires fostering outcomes that do not provide unjustified harms to individuals, regardless of their race, gender, or other protected attributes. This paper argues for extending this tenet to algorithmic discrimination against animals. Up to now, the AI fairness community has largely disregarded this particular dimension of discrimination. Even more so, the field of AI ethics hitherto has had an anthropocentric tailoring. Hence, despite the longstanding discourse about AI fairness, now amounting to a substantial literature critically scrutinizing machine biases regarding race, gender, political orientation, religion, etc., this is the first paper to describe speciesist biases in various common-place AI applications like image recognition, language models, or recommender systems. Accordingly, we follow the calls of another large corpus of literature, this time from animal ethics, pointing from different angles at the ethical necessity of taking animals directly into consideration [[49](/article/10.1007/s43681-022-00199-9#ref-CR49 "Singer, P.: Animal liberation. HarperCollins Publishers, New York \(2009\)"), [62](/article/10.1007/s43681-022-00199-9#ref-CR62 "Nussbaum, M.C.: Frontiers of justice: disability, nationality, species membership. Harvard University Press, Cambridge \(2006\)"), 149,150,151,152,[153](/article/10.1007/s43681-022-00199-9#ref-CR153 "Korsgaard, C.M.: Fellow creatures: our obligations to the other animals. Oxford University Press, Oxford \(2018\)")]. This ethical necessity arises from the moral status of animals themselves as well as from the human cost of devaluing animals [[27](/article/10.1007/s43681-022-00199-9#ref-CR27 "Bastian, B., Costello, K., Loughnan, S., Hodson, G.: When closing the human-animal divide expands moral concern, social psychological and personality. Science 3, 421–429 \(2012\)"), [28](/article/10.1007/s43681-022-00199-9#ref-CR28 "Hodson, G., Costello, K.: The human cost of devaluing animals. New Scientist 216, 34–35 \(2012\)")].

In sum, the manifold occurrences of speciesist machine biases lead to a subtle support, endorsement, and consolidation of systems that foster unnecessary violence against animals. The ethical urgency to change the many industries in which specific animal species are suppressed and exploited [[49](/article/10.1007/s43681-022-00199-9#ref-CR49 "Singer, P.: Animal liberation. HarperCollins Publishers, New York \(2009\)")] should be a wake-up call for AI practitioners, engaging them to apply the rich toolbox of existing bias mitigation measures in this regard. Whether they will succeed or fail with this task is likely to determine whether future AI applications from various domains will underpin systems of violence against, and disregard for, animals or counteract them by putting anti-discrimination measures into practice to the fullest possible extent.

## Notes

  1. A scientifically correct use of the term ‘animals’ includes humans. This is why using ‘nonhuman animals’ is accurate to denote all animals except humans. However, for the sake of readability, in the following we use the term ‘animals’ to denote only nonhuman animals.




## References

  1. Crawford, K.: Atlas of AI: power, politics, and the planetary costs of artificial intelligence. Yale University Press, New Haven (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Atlas%20of%20AI%3A%20power%2C%20politics%2C%20and%20the%20planetary%20costs%20of%20artificial%20intelligence&publication_year=2021&author=Crawford%2CK)

  2. Schwartz, R., Dodge, J., Smith, N.A., Etzioni, O.: Green AI. Commun. ACM. (2019). <https://doi.org/10.1145/3381831>

[Article](https://doi.org/10.1145%2F3381831) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Green%20AI&journal=Commun.%20ACM.&doi=10.1145%2F3381831&publication_year=2019&author=Schwartz%2CR&author=Dodge%2CJ&author=Smith%2CNA&author=Etzioni%2CO)

  3. Dhar, P.: The carbon impact of artificial intelligence. Nat Mach Intell **2** , 423–425 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20carbon%20impact%20of%20artificial%20intelligence&journal=Nat%20Mach%20Intell&volume=2&pages=423-425&publication_year=2020&author=Dhar%2CP)

  4. Mulligan, C., Elaluf-Calderwood, S.: AI ethics: a framework for measuring embodied carbon in AI systems. AI Ethics (2021). <https://doi.org/10.1007/s43681-021-00071-2>

[Article](https://link.springer.com/doi/10.1007/s43681-021-00071-2) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=AI%20ethics%3A%20a%20framework%20for%20measuring%20embodied%20carbon%20in%20AI%20systems&journal=AI%20Ethics&doi=10.1007%2Fs43681-021-00071-2&publication_year=2021&author=Mulligan%2CC&author=Elaluf-Calderwood%2CS)

  5. van Wynsberghe, A.: Sustainable AI: AI for sustainability and the sustainability of AI. AI Ethics (2021). <https://doi.org/10.1007/s43681-021-00043-6>

[Article](https://link.springer.com/doi/10.1007/s43681-021-00043-6) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Sustainable%20AI%3A%20AI%20for%20sustainability%20and%20the%20sustainability%20of%20AI&journal=AI%20Ethics&doi=10.1007%2Fs43681-021-00043-6&publication_year=2021&author=Wynsberghe%2CA)

  6. Lacoste, A., Luccioni, A., Schmidt, V., Dandres, T.: Quantifying the carbon emissions of machine learning, pp. 1–8 (2019). [arXiv:1910.09700v2](http://arxiv.org/abs/1910.09700v2)

  7. Strubell, E., Ganesh, A., McCallum, A.: Energy and policy considerations for deep learning in NLP, pp. 1–6 (2019). [arXiv:1906.02243v1](http://arxiv.org/abs/1906.02243v1)

  8. Hagendorff, T.: Blind spots in AI ethics. AI Ethics (2021). <https://doi.org/10.1007/s43681-021-00122-8>

[Article](https://link.springer.com/doi/10.1007/s43681-021-00122-8) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Blind%20spots%20in%20AI%20ethics&journal=AI%20Ethics&doi=10.1007%2Fs43681-021-00122-8&publication_year=2021&author=Hagendorff%2CT)

  9. Bolte, L., Vandemeulebroucke, T., van Wynsberghe, A.: From an ethics of carefulness to an ethics of desirability: going beyond current ethics approaches to sustainable AI. Sustainability **14** , 1–13 (2022)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=From%20an%20ethics%20of%20carefulness%20to%20an%20ethics%20of%20desirability%3A%20going%20beyond%20current%20ethics%20approaches%20to%20sustainable%20AI&journal=Sustainability&volume=14&pages=1-13&publication_year=2022&author=Bolte%2CL&author=Vandemeulebroucke%2CT&author=Wynsberghe%2CA)

  10. Boscardin, L., Bossert, L.: Sustainable development and nonhuman animals: why anthropocentric concepts of sustainability are outdated and need to be extended. In: Meisch, S., Lundershausen, J., Bossert, L., Rockoff, M. (eds.) Ethics of science in the research for sustainable development, pp. 323–352. Nomos, Baden-Baden (2015)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Sustainable%20development%20and%20nonhuman%20animals%3A%20why%20anthropocentric%20concepts%20of%20sustainability%20are%20outdated%20and%20need%20to%20be%20extended&pages=323-352&publication_year=2015&author=Boscardin%2CL&author=Bossert%2CL)

  11. Gordon, J.-S.: What do we owe to intelligent robots? AI Soc **35** , 209–223 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=What%20do%20we%20owe%20to%20intelligent%20robots%3F&journal=AI%20Soc&volume=35&pages=209-223&publication_year=2020&author=Gordon%2CJ-S)

  12. Laukyte, M.: Artificial agents among us: should we recognize them as agents proper? Ethics Inf. Technol. **19** , 1–17 (2017)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Artificial%20agents%20among%20us%3A%20should%20we%20recognize%20them%20as%20agents%20proper%3F&journal=Ethics%20Inf.%20Technol.&volume=19&pages=1-17&publication_year=2017&author=Laukyte%2CM)

  13. Bostrom, N., Yudkowsky, E.: The ethics of artificial intelligence. In: Frankish, K., Ramsey, W.M. (eds.) The Cambridge handbook of artificial intelligence, pp. 316–334. Cambridge University Press, Cambridge (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20ethics%20of%20artificial%20intelligence&pages=316-334&publication_year=2014&author=Bostrom%2CN&author=Yudkowsky%2CE)

  14. Kant, I., Heath, P., Schneewind, J.B.: Lectures on ethics. Cambridge University Press, Cambridge (2013)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Lectures%20on%20ethics&publication_year=2013&author=Kant%2CI&author=Heath%2CP&author=Schneewind%2CJB)

  15. Brahnam, S.: Gendered bots and bot abuse. In: de Angeli, A., Brahnam, S., Wallis, P., Dix, P. (eds.) Misuse and abuse of interactive technologies, pp. 1–4. ACM, Montreal (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Gendered%20bots%20and%20bot%20abuse&pages=1-4&publication_year=2006&author=Brahnam%2CS)

  16. de Angeli, A.: Ethical implications of verbal disinhibition with conversational agents. PsychNol. J. **7** , 49–57 (2009)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Ethical%20implications%20of%20verbal%20disinhibition%20with%20conversational%20agents&journal=PsychNol.%20J.&volume=7&pages=49-57&publication_year=2009&author=Angeli%2CA)

  17. Ziesche, S.: AI ethics and value alignment for nonhuman animals. Philosophies **6** , 1–12 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=AI%20ethics%20and%20value%20alignment%20for%20nonhuman%20animals&journal=Philosophies&volume=6&pages=1-12&publication_year=2021&author=Ziesche%2CS)

  18. Owe, A., Baum, S.D.: Moral consideration of nonhumans in the ethics of artificial intelligence. AI Ethics (2021). <https://doi.org/10.1007/s43681-021-00065-0>

[Article](https://link.springer.com/doi/10.1007/s43681-021-00065-0) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Moral%20consideration%20of%20nonhumans%20in%20the%20ethics%20of%20artificial%20intelligence&journal=AI%20Ethics&doi=10.1007%2Fs43681-021-00065-0&publication_year=2021&author=Owe%2CA&author=Baum%2CSD)

  19. Bossert, L., Hagendorff, T.: Animals and AI. The role of animals in AI research and application—an overview and ethical evaluation. Technol Soc **67** , 1–7 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animals%20and%20AI.%20The%20role%20of%20animals%20in%20AI%20research%20and%20application%E2%80%94an%20overview%20and%20ethical%20evaluation&journal=Technol%20Soc&volume=67&pages=1-7&publication_year=2021&author=Bossert%2CL&author=Hagendorff%2CT)

  20. Singer, P., Tse, Y.F.: AI ethics: the case for including animals. In: AI and Ethics, pp. 1–13 (2022)

  21. Bendel, O.: Towards animal-friendly machines. Paladyn J. Behav. Robot. **9** , 204–213 (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Towards%20animal-friendly%20machines&journal=Paladyn%20J.%20Behav.%20Robot.&volume=9&pages=204-213&publication_year=2018&author=Bendel%2CO)

  22. Young, I.M.: Justice and the politics of difference. Princeton University Press, Princeton (1990)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Justice%20and%20the%20politics%20of%20difference&publication_year=1990&author=Young%2CIM)

  23. Lippert-Rasmussen, K.: Born free and equal? Oxford University Press, Oxford (2013)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Born%20free%20and%20equal%3F&publication_year=2013&author=Lippert-Rasmussen%2CK)

  24. Costello, K., Hodson, G.: Explaining dehumanization among children: the interspecies model of prejudice. Br. J. Soc. Psychol. **53** , 175–197 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Explaining%20dehumanization%20among%20children%3A%20the%20interspecies%20model%20of%20prejudice&journal=Br.%20J.%20Soc.%20Psychol.&volume=53&pages=175-197&publication_year=2014&author=Costello%2CK&author=Hodson%2CG)

  25. Hyers, L.L.: Myths used to legitimize the exploitation of animals: an application of Social dominance theory. Anthrozoos **19** , 194–210 (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Myths%20used%20to%20legitimize%20the%20exploitation%20of%20animals%3A%20an%20application%20of%20Social%20dominance%20theory&journal=Anthrozoos&volume=19&pages=194-210&publication_year=2006&author=Hyers%2CLL)

  26. Dhont, K., Hodson, G., Costello, K., MacInnis, C.C.: Social dominance orientation connects prejudicial human–human and human–animal relations. Personality Individ. Differ. **61–62** , 105–108 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Social%20dominance%20orientation%20connects%20prejudicial%20human%E2%80%93human%20and%20human%E2%80%93animal%20relations&journal=Personality%20Individ.%20Differ.&volume=61%E2%80%9362&pages=105-108&publication_year=2014&author=Dhont%2CK&author=Hodson%2CG&author=Costello%2CK&author=MacInnis%2CCC)

  27. Bastian, B., Costello, K., Loughnan, S., Hodson, G.: When closing the human-animal divide expands moral concern, social psychological and personality. Science **3** , 421–429 (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=When%20closing%20the%20human-animal%20divide%20expands%20moral%20concern%2C%20social%20psychological%20and%20personality&journal=Science&volume=3&pages=421-429&publication_year=2012&author=Bastian%2CB&author=Costello%2CK&author=Loughnan%2CS&author=Hodson%2CG)

  28. Hodson, G., Costello, K.: The human cost of devaluing animals. New Scientist **216** , 34–35 (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20human%20cost%20of%20devaluing%20animals&journal=New%20Scientist&volume=216&pages=34-35&publication_year=2012&author=Hodson%2CG&author=Costello%2CK)

  29. DeMello, M.: Animals and society: an introduction to human-animal studies. Columbia University Press, New York (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animals%20and%20society%3A%20an%20introduction%20to%20human-animal%20studies&publication_year=2012&author=DeMello%2CM)

  30. Dhont, K., Hodson, G.: Why do right-wing adherents engage in more animal exploitation and meat consumption? Personality Individ. Differ. **64** , 12–17 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Why%20do%20right-wing%20adherents%20engage%20in%20more%20animal%20exploitation%20and%20meat%20consumption%3F&journal=Personality%20Individ.%20Differ.&volume=64&pages=12-17&publication_year=2014&author=Dhont%2CK&author=Hodson%2CG)

  31. Dhont, K., Hodson, G., Leite, A.C.: Common ideological roots of speciesism and generalized ethnic prejudice: the social dominance human-animal relations model (SD-HARM). Eur. J. Pers. **30** , 507–522 (2016)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Common%20ideological%20roots%20of%20speciesism%20and%20generalized%20ethnic%20prejudice%3A%20the%20social%20dominance%20human-animal%20relations%20model%20%28SD-HARM%29&journal=Eur.%20J.%20Pers.&volume=30&pages=507-522&publication_year=2016&author=Dhont%2CK&author=Hodson%2CG&author=Leite%2CAC)

  32. Bekoff, M.: Animal passions and beastly virtues: reflections on redecorating nature. Temple University Press, Philadelphia (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20passions%20and%20beastly%20virtues%3A%20reflections%20on%20redecorating%20nature&publication_year=2006&author=Bekoff%2CM)

  33. Waal, Fd.: The age of empathy: nature’s lessons for a kinder society. Harmony Books, New York (2009)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20age%20of%20empathy%3A%20nature%27s%20lessons%20for%20a%20kinder%20society&publication_year=2009&author=Waal%2CFd)

  34. Griffin, D.R.: Question of animal awareness: evolutionary continuity of mental experience. The Rockefeller University Press, Birmingham (1976)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Question%20of%20animal%20awareness%3A%20evolutionary%20continuity%20of%20mental%20experience&publication_year=1976&author=Griffin%2CDR)

  35. Balcombe, J.P.: What a fish knows: the inner lives of our underwater cousins. Scientific American/Farrar Straus and Giroux, New York (2016)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=What%20a%20fish%20knows%3A%20the%20inner%20lives%20of%20our%20underwater%20cousins&publication_year=2016&author=Balcombe%2CJP)

  36. Call, J., Tomasello, M.: Does the chimpanzee have a theory of mind? 30 years later. Trends Cogn. Sci. **12** , 187–192 (2008)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Does%20the%20chimpanzee%20have%20a%20theory%20of%20mind%3F%2030%20years%20later&journal=Trends%20Cogn.%20Sci.&volume=12&pages=187-192&publication_year=2008&author=Call%2CJ&author=Tomasello%2CM)

  37. Meijer, E.: Animal languages: revealing the secret conversations of the living world. John Murray, London (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20languages%3A%20revealing%20the%20secret%20conversations%20of%20the%20living%20world&publication_year=2019&author=Meijer%2CE)

  38. Slobodchikoff, C., Perla, B.S., Verdolin, J.L.: Prairie dogs: communication and community in an animal society. Harvard University Press, Cambridge (2009)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Prairie%20dogs%3A%20communication%20and%20community%20in%20an%20animal%20society&publication_year=2009&author=Slobodchikoff%2CC&author=Perla%2CBS&author=Verdolin%2CJL)

  39. Bekoff, M.: Animal emotions: exploring passionate natures. Bioscience **50** , 861–870 (2000)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20emotions%3A%20exploring%20passionate%20natures&journal=Bioscience&volume=50&pages=861-870&publication_year=2000&author=Bekoff%2CM)

  40. Zentall, T.R.: Animal intelligence. In: Sternberg, R.J. (ed.) The Cambridge handbook of intelligence, pp. 397–427. Cambridge University Press, Cambridge (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20intelligence&pages=397-427&publication_year=2019&author=Zentall%2CTR)

  41. Waal, Fd.: Are we smart enough to know how smart animals are? W. W. Norton & Company, New York (2017)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Are%20we%20smart%20enough%20to%20know%20how%20smart%20animals%20are%3F&publication_year=2017&author=Waal%2CFd)

  42. Singer, P.: Ethics and intuitions. J. Ethics **9** , 331–352 (2005)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Ethics%20and%20intuitions&journal=J.%20Ethics&volume=9&pages=331-352&publication_year=2005&author=Singer%2CP)

  43. Plotnik, J.M., Waal, Fd., Reiss, D.: Self-recognition in an Asian elephant. Proc. Natl. Acad. Sci. **103** , 17053–17057 (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Self-recognition%20in%20an%20Asian%20elephant&journal=Proc.%20Natl.%20Acad.%20Sci.&volume=103&pages=17053-17057&publication_year=2006&author=Plotnik%2CJM&author=Waal%2CFd&author=Reiss%2CD)

  44. Cazzolla Gatti, R.: Self-consciousness: beyond the looking-glass and what dogs found there. Ethol. Ecol. Evol **7** , 1–9 (2015)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Self-consciousness%3A%20beyond%20the%20looking-glass%20and%20what%20dogs%20found%20there&journal=Ethol.%20Ecol.%20Evol&volume=7&pages=1-9&publication_year=2015&author=Cazzolla%20Gatti%2CR)

  45. Balcombe, J.P.: Pleasurable kingdom: animals and the nature of feeling good. Macmillan, London (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Pleasurable%20kingdom%3A%20animals%20and%20the%20nature%20of%20feeling%20good&publication_year=2006&author=Balcombe%2CJP)

  46. Sneddon, L.U.: The evidence for pain in fish: the use of morphine as an analgesic. Appl. Anim. Behav. Sci. **83** , 153–162 (2003)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20evidence%20for%20pain%20in%20fish%3A%20the%20use%20of%20morphine%20as%20an%20analgesic&journal=Appl.%20Anim.%20Behav.%20Sci.&volume=83&pages=153-162&publication_year=2003&author=Sneddon%2CLU)

  47. Dhont, K., Hodson, G. (eds.): Why we love and exploit animals: bridging insights from academia and advocacy. Routledge, New York (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Why%20we%20love%20and%20exploit%20animals%3A%20bridging%20insights%20from%20academia%20and%20advocacy&publication_year=2020)

  48. Krings, V.C., Dhont, K., Salmen, A.: The moral divide between high- and low-status animals: the role of human supremacy beliefs. Anthrozoös **34** , 787–802 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20moral%20divide%20between%20high-%20and%20low-status%20animals%3A%20the%20role%20of%20human%20supremacy%20beliefs&journal=Anthrozo%C3%B6s&volume=34&pages=787-802&publication_year=2021&author=Krings%2CVC&author=Dhont%2CK&author=Salmen%2CA)

  49. Singer, P.: Animal liberation. HarperCollins Publishers, New York (2009)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animal%20liberation&publication_year=2009&author=Singer%2CP)

  50. Morgan, K.N., Tromborg, C.T.: Sources of stress in captivity. Appl. Anim. Behav. Sci. **102** , 262–302 (2007)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Sources%20of%20stress%20in%20captivity&journal=Appl.%20Anim.%20Behav.%20Sci.&volume=102&pages=262-302&publication_year=2007&author=Morgan%2CKN&author=Tromborg%2CCT)

  51. Poore, J., Nemecek, T.: Reducing food’s environmental impacts through producers and consumers. Science **360** , 987–992 (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Reducing%20food%27s%20environmental%20impacts%20through%20producers%20and%20consumers&journal=Science&volume=360&pages=987-992&publication_year=2018&author=Poore%2CJ&author=Nemecek%2CT)

  52. Steinfeld, H., Gerber, P., Wassenaar, T., Castel, V., Rosales, M., Haan, C.D.: Livestock’s long shadow: environmental issues and options. Food and Agriculture Organization of the United Nations (FAO), Rom (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Livestock%27s%20long%20shadow%3A%20environmental%20issues%20and%20options&publication_year=2006&author=Steinfeld%2CH&author=Gerber%2CP&author=Wassenaar%2CT&author=Castel%2CV&author=Rosales%2CM&author=Haan%2CCD)

  53. Fardet, A., Boirie, Y.: Associations between food and beverage groups and major diet-related chronic diseases: an exhaustive review of pooled/meta-analyses and systematic reviews. Nutr. Rev. **72** , 741–762 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Associations%20between%20food%20and%20beverage%20groups%20and%20major%20diet-related%20chronic%20diseases%3A%20an%20exhaustive%20review%20of%20pooled%2Fmeta-analyses%20and%20systematic%20reviews&journal=Nutr.%20Rev.&volume=72&pages=741-762&publication_year=2014&author=Fardet%2CA&author=Boirie%2CY)

  54. Song, M., Fung, T.T., Hu, F.B., Willett, W.C., Longo, V.D., Chan, A.T., Giovannucci, E.L.: Association of animal and plant protein intake with all-cause and cause-specific mortality. JAMA Intern. Med. **176** , 1453–1463 (2016)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Association%20of%20animal%20and%20plant%20protein%20intake%20with%20all-cause%20and%20cause-specific%20mortality&journal=JAMA%20Intern.%20Med.&volume=176&pages=1453-1463&publication_year=2016&author=Song%2CM&author=Fung%2CTT&author=Hu%2CFB&author=Willett%2CWC&author=Longo%2CVD&author=Chan%2CAT&author=Giovannucci%2CEL)

  55. Bandura, A., Barbaranelle, C., Caprara, G.V., Pastorelli, C.: Mechanisms of moral disengagement in the exercise of moral agency. J. Pers. Soc. Psychol. **71** , 364–374 (1996)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Mechanisms%20of%20moral%20disengagement%20in%20the%20exercise%20of%20moral%20agency&journal=J.%20Pers.%20Soc.%20Psychol.&volume=71&pages=364-374&publication_year=1996&author=Bandura%2CA&author=Barbaranelle%2CC&author=Caprara%2CGV&author=Pastorelli%2CC)

  56. Bandura, A.: Moral disengagement in the perpetration of inhumanities. Pers. Soc. Psychol. Rev. **3** , 193–209 (1999)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Moral%20disengagement%20in%20the%20perpetration%20of%20inhumanities&journal=Pers.%20Soc.%20Psychol.%20Rev.&volume=3&pages=193-209&publication_year=1999&author=Bandura%2CA)

  57. Graça, J., Calheiros, M.M., Oliveira, A.: Situating moral disengagement: motivated reasoning in meat consumption and substitution. Personality Individ. Differ. **90** , 353–364 (2016)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Situating%20moral%20disengagement%3A%20motivated%20reasoning%20in%20meat%20consumption%20and%20substitution&journal=Personality%20Individ.%20Differ.&volume=90&pages=353-364&publication_year=2016&author=Gra%C3%A7a%2CJ&author=Calheiros%2CMM&author=Oliveira%2CA)

  58. Loughnan, S., Bastian, B., Haslam, N.: The psychology of eating animals. Curr. Dir. Psychol. Sci. **23** , 104–108 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20psychology%20of%20eating%20animals&journal=Curr.%20Dir.%20Psychol.%20Sci.&volume=23&pages=104-108&publication_year=2014&author=Loughnan%2CS&author=Bastian%2CB&author=Haslam%2CN)

  59. von Hippel, W.: Self-deception. In: Zeigler-Hill, V., Welling, L.L.M., Shackelford, T.K. (eds.) Evolutionary perspectives on social psychology, pp. 149–158. Springer, Heidelberg (2015)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Self-deception&pages=149-158&publication_year=2015&author=Hippel%2CW)

  60. Gjerris, M.: Willed blindness: a discussion of our moral shortcomings in relation to animals. J Agric Environ Ethics **28** , 517–532 (2015)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Willed%20blindness%3A%20a%20discussion%20of%20our%20moral%20shortcomings%20in%20relation%20to%20animals&journal=J%20Agric%20Environ%20Ethics&volume=28&pages=517-532&publication_year=2015&author=Gjerris%2CM)

  61. Nobis, N.: Carl Cohen’s “kind” arguments for animal rights and against human rights. J. Appl. Philos. **21** , 43–59 (2004)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Carl%20Cohen%27s%20%27kind%27%20arguments%20for%20animal%20rights%20and%20against%20human%20rights&journal=J.%20Appl.%20Philos.&volume=21&pages=43-59&publication_year=2004&author=Nobis%2CN)

  62. Nussbaum, M.C.: Frontiers of justice: disability, nationality, species membership. Harvard University Press, Cambridge (2006)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Frontiers%20of%20justice%3A%20disability%2C%20nationality%2C%20species%20membership&publication_year=2006&author=Nussbaum%2CMC)

  63. Wolf, M.J., Miller, K., Grodzinsky, F.S.: Why we should have seen that coming. SIGCAS Comput. Soc. **47** , 54–64 (2017)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Why%20we%20should%20have%20seen%20that%20coming&journal=SIGCAS%20Comput.%20Soc.&volume=47&pages=54-64&publication_year=2017&author=Wolf%2CMJ&author=Miller%2CK&author=Grodzinsky%2CFS)

  64. Hagendorff, T.: From privacy to anti-discrimination in times of machine learning. Ethics Inf. Technol. **33** , 331–343 (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=From%20privacy%20to%20anti-discrimination%20in%20times%20of%20machine%20learning&journal=Ethics%20Inf.%20Technol.&volume=33&pages=331-343&publication_year=2019&author=Hagendorff%2CT)

  65. Hagendorff, T.: The ethics of AI ethics: an evaluation of guidelines. Mind. Mach. **30** , 457–461 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20ethics%20of%20AI%20ethics%3A%20an%20evaluation%20of%20guidelines&journal=Mind.%20Mach.&volume=30&pages=457-461&publication_year=2020&author=Hagendorff%2CT)

  66. Rahwan, I., Cebrian, M., Obradovich, N., Bongard, J., Bonnefon, J.-F., Breazeal, C., Crandall, J.W., Christakis, N.A., Couzin, I.D., Jackson, M.O., Jennings, N.R., Kamar, E., Kloumann, I.M., Larochelle, H., Lazer, D., McElreath, R., Mislove, A., Parkes, D.C., Pentland, A., Roberts, M.E., Shariff, A., Tenenbaum, J.B., Wellman, M.: Machine behaviour. Nature **568** , 477–486 (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Machine%20behaviour&journal=Nature&volume=568&pages=477-486&publication_year=2019&author=Rahwan%2CI&author=Cebrian%2CM&author=Obradovich%2CN&author=Bongard%2CJ&author=Bonnefon%2CJ-F&author=Breazeal%2CC&author=Crandall%2CJW&author=Christakis%2CNA&author=Couzin%2CID&author=Jackson%2CMO&author=Jennings%2CNR&author=Kamar%2CE&author=Kloumann%2CIM&author=Larochelle%2CH&author=Lazer%2CD&author=McElreath%2CR&author=Mislove%2CA&author=Parkes%2CDC&author=Pentland%2CA&author=Roberts%2CME&author=Shariff%2CA&author=Tenenbaum%2CJB&author=Wellman%2CM)

  67. Mühlhoff, R.: Human-aided artificial intelligence: or, how to run large computations in human brains? Toward a media sociology of machine learning. New Med Soc (2019). <https://doi.org/10.1177/1461444819885334>

[Article](https://doi.org/10.1177%2F1461444819885334) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Human-aided%20artificial%20intelligence%3A%20or%2C%20how%20to%20run%20large%20computations%20in%20human%20brains%3F%20Toward%20a%20media%20sociology%20of%20machine%20learning&journal=New%20Med%20Soc&doi=10.1177%2F1461444819885334&publication_year=2019&author=M%C3%BChlhoff%2CR)

  68. Mitchell, T.M.: The Need for Biases in Learning Generalizations, pp. 1–3 (1980)

  69. Barocas, S., Selbst, A.D.: Big data’s disparate impact. Calif. Law Rev. **104** , 671–732 (2016)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Big%20data%27s%20disparate%20impact&journal=Calif.%20Law%20Rev.&volume=104&pages=671-732&publication_year=2016&author=Barocas%2CS&author=Selbst%2CAD)

  70. Barocas, S., Hardt, M., Narayanan, A.: Fairness and machine learning. (2019). <https://fairmlbook.org/> (Accessed 27 Jan 2020)

  71. Angwin, J., Larson, J., Mattu, S., Kirchner, L.: Machine Bias: There's software used across the country to predict future criminals. And it's biased against blacks. (2016). <https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing> (Accessed 18 Jan 2018)

  72. Dastin, J.: Amazon scraps secret AI recruiting tool that showed bias against women. (2018). <https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G> (Accessed 7 Oct 2019)

  73. Misty, A.: Microsoft Creates AI Bot – Internet Immediately Turns it Racist. (2016). <https://socialhax.com/2016/03/24/microsoft-creates-ai-bot-internet-immediately-turns-racist/> (Accessed 17 Jan 2018)

  74. Danks, D., London, A.J.: Algorithmic Bias in Autonomous Systems, in: Proceedings of the Twenty-Sixth International Joint Conference on Artificial Intelligence, International Joint Conferences on Artificial Intelligence Organization, California, pp. 4691–4697 (2017)

  75. Hellström, T., Dignum, V., Bensch, S.: Bias in machine learning—what is it good for?, arXiv 1–8 (2020)

  76. Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., Galstyan, A.: A survey on bias and fairness in machine learning. ACM Comput. Surv. (2019). <https://doi.org/10.1145/3457607>

[Article](https://doi.org/10.1145%2F3457607) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=A%20survey%20on%20bias%20and%20fairness%20in%20machine%20learning&journal=ACM%20Comput.%20Surv.&doi=10.1145%2F3457607&publication_year=2019&author=Mehrabi%2CN&author=Morstatter%2CF&author=Saxena%2CN&author=Lerman%2CK&author=Galstyan%2CA)

  77. Olteanu, A., Castillo, C., Diaz, F., Kıcıman, E.: Social data: biases, methodological pitfalls, and ethical boundaries. Front. Big Data **2** , 1–33 (2019)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Social%20data%3A%20biases%2C%20methodological%20pitfalls%2C%20and%20ethical%20boundaries&journal=Front.%20Big%20Data&volume=2&pages=1-33&publication_year=2019&author=Olteanu%2CA&author=Castillo%2CC&author=Diaz%2CF&author=K%C4%B1c%C4%B1man%2CE)

  78. Veale, M., Binns, R.: Fairer machine learning in the real world: mitigating discrimination without collecting sensitive data. Big Data Soc. **4** , 1–17 (2017)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Fairer%20machine%20learning%20in%20the%20real%20world%3A%20mitigating%20discrimination%20without%20collecting%20sensitive%20data&journal=Big%20Data%20Soc.&volume=4&pages=1-17&publication_year=2017&author=Veale%2CM&author=Binns%2CR)

  79. Bommasani, R., Hudson, D.A., Adeli, E., Altman, R., Arora, S., Arx, S.v., Bernstein, M.S., Bohg, J., Bosselut, A., Brunskill, E., Brynjolfsson, E., Buch, S., Card, D., Castellon, R., Chatterji, N., Chen, A., Creel, K., Davis, J.Q., Demszky, D., Donahue, C., Doumbouya, M., Durmus, E., Ermon, S., Etchemendy, J., Ethayarajh, K., Fei-Fei, L., Finn, C., Gale, T., Gillespie, L., Goel, K., Goodman, N., Grossman, S., Guha, N., Hashimoto, T., Henderson, P., Hewitt, J., Ho, D.E., Hong, J., Hsu, K., Huang, J., Icard, T., Jain, S., Jurafsky, D., Kalluri, P., Karamcheti, S., Keeling, G., Khani, F., Khattab, O., Koh, P.W., Krass, M., Krishna, R., Kuditipudi, R., Kumar, A., Ladhak, F., Lee, M., Lee, T., Leskovec, J., Levent, I., Li, X.L., Li, X., Ma, T., Malik, A., Manning, C.D., Mirchandani, S., Mitchell, E., Munyikwa, Z., Nair, S., Narayan, A., Narayanan, D., Newman, B., Nie, A., Niebles, J.C., Nilforoshan, H., Nyarko, J., Ogut, G., Orr, L., Papadimitriou, I., Park, J.S., Piech, C., Portelance, E., Potts, C., Raghunathan, A., Reich, R., Ren, H., Rong, F., Roohani, Y., Ruiz, C., Ryan, J., Ré, C., Sadigh, D., Sagawa, S., Santhanam, K., Shih, A., Srinivasan, K., Tamkin, A., Taori, R., Thomas, A.W., Tramèr, F., Wang, R.E., Wang, W., Wu, B., Wu, J., Wu, Y., Xie, S.M., Yasunaga, M., You, J., Zaharia, M., Zhang, M., Zhang, T., Zhang, X., Zhang, Y. Zheng, L., Zhou, K., Liang, P.: On the opportunities and risks of foundation models, arXiv 1–212 (2021) 

  80. Crawford, K., Paglen, T.: Excavating AI: the politics of images in machine learning training sets. AI Soc (2021). <https://doi.org/10.1007/s00146-021-01162-8>

[Article](https://link.springer.com/doi/10.1007/s00146-021-01162-8) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Excavating%20AI%3A%20the%20politics%20of%20images%20in%20machine%20learning%20training%20sets&journal=AI%20Soc&doi=10.1007%2Fs00146-021-01162-8&publication_year=2021&author=Crawford%2CK&author=Paglen%2CT)

  81. Steed, R., Caliskan, A.: Image representations learned with unsupervised pre-training contain human-like biases. ACM Conf **91** , 701–713 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Image%20representations%20learned%20with%20unsupervised%20pre-training%20contain%20human-like%20biases&journal=ACM%20Conf&volume=91&pages=701-713&publication_year=2021&author=Steed%2CR&author=Caliskan%2CA)

  82. Wilson, B., Hoffman, J., Morgenstern, J.: Predictive inequity in object detection, pp. 1–13 (2019). [arXiv:1902.11097v1](http://arxiv.org/abs/1902.11097v1)

  83. Buolamwini, J., Gebru, T.: Gender shades: intersectional accuracy disparities in commercial gender classification. In: Friedler Sorelle, A., Wilson, C. (Eds.) Proceedings of Machine Learning Research. Conference on Fairness, Acocountability, and Transparency, pp. 1–15. PMLR, New York

  84. Kay, M., Matuszek, C., Munson, S.A.: Unequal Representation and gender stereotypes in image search results for occupations, in: Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems, ACM, New York, NY, USA, pp. 3819–3828 (2015)

  85. Yee, K., Tantipongpipat, U., Mishra, S.: Image cropping on twitter: fairness metrics, their limitations, and the importance of representation, design, and agency. Proc. ACM Hum. Comput Interact. **5** , 1–24 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Image%20cropping%20on%20twitter%3A%20fairness%20metrics%2C%20their%20limitations%2C%20and%20the%20importance%20of%20representation%2C%20design%2C%20and%20agency&journal=Proc.%20ACM%20Hum.%20Comput%20Interact.&volume=5&pages=1-24&publication_year=2021&author=Yee%2CK&author=Tantipongpipat%2CU&author=Mishra%2CS)

  86. Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., Huang, Z., Karpathy, A., Khosla, A., Bernstein, M., Berg, A.C., Fei-Fei, L.: ImageNet large scale visual recognition challenge. Int J Comput Vis **115** , 211–252 (2015)

[MathSciNet](http://www.ams.org/mathscinet-getitem?mr=3422482) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=ImageNet%20large%20scale%20visual%20recognition%20challenge&journal=Int%20J%20Comput%20Vis&volume=115&pages=211-252&publication_year=2015&author=Russakovsky%2CO&author=Deng%2CJ&author=Su%2CH&author=Krause%2CJ&author=Satheesh%2CS&author=Ma%2CS&author=Huang%2CZ&author=Karpathy%2CA&author=Khosla%2CA&author=Bernstein%2CM&author=Berg%2CAC&author=Fei-Fei%2CL)

  87. Krizhevsky, A., Sutskever, I., Hinton, G.: ImageNet classification with deep convolutional neural networks. Proc. Adv. Neural. Inform. Process. Syst. **25** , 1090–1098 (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=ImageNet%20classification%20with%20deep%20convolutional%20neural%20networks&journal=Proc.%20Adv.%20Neural.%20Inform.%20Process.%20Syst.&volume=25&pages=1090-1098&publication_year=2012&author=Krizhevsky%2CA&author=Sutskever%2CI&author=Hinton%2CG)

  88. Miller, G.A., Beckwith, R., Fellbaum, C., Gross, D., Miller, K.J.: Introduction to wordnet: an on-line lexical database*. Int. J. Lexicogr. **3** , 235–244 (1990)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Introduction%20to%20wordnet%3A%20an%20on-line%20lexical%20database%2A&journal=Int.%20J.%20Lexicogr.&volume=3&pages=235-244&publication_year=1990&author=Miller%2CGA&author=Beckwith%2CR&author=Fellbaum%2CC&author=Gross%2CD&author=Miller%2CKJ)

  89. Yang, K., Qinami, K., Fei-Fei, L., Deng, J., Russakovsky, O.: Towards fairer datasets: filtering and balancing the distribution of the people subtree in the imagenet hierarchy, pp. 1–15 (2020). [arXiv:1912.07726v1](http://arxiv.org/abs/1912.07726v1)

  90. Krizhevsky, A.: Learning multiple layers of features from tiny images, pp. 1–60. (2009). <https://www.cs.toronto.edu/~kriz/learning-features-2009-TR.pdf> (Accessed 16 Dec 2021)

  91. Kuznetsova, A., Rom, H., Alldrin, N., Uijlings, J., Krasin, I., Pont-Tuset, J., Kamali, S., Popov, S., Malloci, M., Kolesnikov, A., Duerig, T., Ferrari, V.: The open images dataset V4: unified image classification, object detection, and visual relationship detection at scale. Int. J. Comput. Vis. **128** , 1956–1981 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20open%20images%20dataset%20V4%3A%20unified%20image%20classification%2C%20object%20detection%2C%20and%20visual%20relationship%20detection%20at%20scale&journal=Int.%20J.%20Comput.%20Vis.&volume=128&pages=1956-1981&publication_year=2020&author=Kuznetsova%2CA&author=Rom%2CH&author=Alldrin%2CN&author=Uijlings%2CJ&author=Krasin%2CI&author=Pont-Tuset%2CJ&author=Kamali%2CS&author=Popov%2CS&author=Malloci%2CM&author=Kolesnikov%2CA&author=Duerig%2CT&author=Ferrari%2CV)

  92. Lin, T.-Y., Maire, M., Belongie, S., Bourdev, L., Girshick, R., Hays, J., Perona, P., Ramanan, D., Zitnick, C.L., Dollár, P.: Microsoft COCO: common objects in context, pp. 1–15 (2014). [arXiv:1405.0312v3](http://arxiv.org/abs/1405.0312v3)

  93. Anthis, J.R.: US factory farming estimates. (2019). <https://www.sentienceinstitute.org/us-factory-farming-estimates> (Accessed 17 Dec 2021)

  94. Bar-On, Y.M., Phillips, R., Milo, R.: The biomass distribution on earth. Proc Natl Acad Sci USA **115**(25), 6506–6511 (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20biomass%20distribution%20on%20earth&journal=Proc%20Natl%20Acad%20Sci%20USA&volume=115&issue=25&pages=6506-6511&publication_year=2018&author=Bar-On%2CYM&author=Phillips%2CR&author=Milo%2CR)

  95. Martin, T.A.: “This image cannot be displayed”: critical visual pedagogy and images from factory farms. J. Crit. Anim. Stud **12** , 79–104 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=%22This%20image%20cannot%20be%20displayed%22%3A%20critical%20visual%20pedagogy%20and%20images%20from%20factory%20farms&journal=J.%20Crit.%20Anim.%20Stud&volume=12&pages=79-104&publication_year=2014&author=Martin%2CTA)

  96. Shankar, S., Halpern, Y., Breck, E., Atwood, J., Wilson, J., Sculley, D.: No classification without representation: assessing geodiversity issues in open data sets for the developing world, arXiv 1–5 (2017) 

  97. Geirhos, R., Jacobsen, J.-H., Michaelis, C., Zemel, R., Brendel, W., Bethge, M., Wichmann, F.A.: Shortcut learning in deep neural networks. Nat. Mach. Intell. **2** , 665–673 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Shortcut%20learning%20in%20deep%20neural%20networks&journal=Nat.%20Mach.%20Intell.&volume=2&pages=665-673&publication_year=2020&author=Geirhos%2CR&author=Jacobsen%2CJ-H&author=Michaelis%2CC&author=Zemel%2CR&author=Brendel%2CW&author=Bethge%2CM&author=Wichmann%2CFA)

  98. Beery, S., van Horn, G., Perona, P.: Recognition in Terra Incognita, pp. 1–20 (2018). [arXiv:1807.04975v2](http://arxiv.org/abs/1807.04975v2)

  99. Howard, A.G., Zhu, M., Chen, B., Kalenichenko, D., Wang, W., Weyand, T., Andreetto, M., Adam, H.: MobileNets: efficient convolutional neural networks for mobile vision applications, pp. 1–9 (2017). [arXiv:1704.04861v1](http://arxiv.org/abs/1704.04861v1)

  100. Simonyan, K., Zisserman, A.: Very deep convolutional networks for large-scale image recognition, pp. 1–14 (2015). [arXiv:1409.1556v6](http://arxiv.org/abs/1409.1556v6)

  101. He, K., Zhang, X., Ren, S., Sun, J.: Deep residual learning for image recognition, pp. 1–12 (2015). [arXiv:1512.03385v1](http://arxiv.org/abs/1512.03385v1)

  102. Szegedy, C., Vanhoucke, V., Ioffe, S., Shlens, J., Wojna, Z.: Rethinking the inception architecture for computer vision, pp. 1–10 (2015). [arXiv:1512.00567v3](http://arxiv.org/abs/1512.00567v3)

  103. Dosovitskiy, A., Beyer, L., Kolesnikov, A., Weissenborn, D., Zhai, X., Unterthiner, T., Dehghani, M., Minderer, M., Heigold, GGelly, S., Uszkoreit, J., Houlsby, N.: An image is worth 16x16 words: transformers for image recognition at scale, pp. 1–22 (2021). [arXiv:2010.11929v2](http://arxiv.org/abs/2010.11929v2)

  104. Kingma, D.P., Welling, M.: An introduction to variational autoencoders, FNT in machine. Learning **12** , 307–392 (2019)

[MATH](http://www.emis.de/MATH-item?1431.68002) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=An%20introduction%20to%20variational%20autoencoders%2C%20FNT%20in%20machine&journal=Learning&volume=12&pages=307-392&publication_year=2019&author=Kingma%2CDP&author=Welling%2CM)

  105. Goodfellow, I.J., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., Bengio, Y.: Generative adversarial networks, arXiv 1–9 (2014) 

  106. Braverman, I.: Zooveillance: Foucault goes to the zoo. SS **10** , 119–133 (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Zooveillance%3A%20Foucault%20goes%20to%20the%20zoo&journal=SS&volume=10&pages=119-133&publication_year=2012&author=Braverman%2CI)

  107. Donaldson, A.: Surveillance and non-humans. In: Ball, K.S., Haggerty, K.D., Lyon, D. (eds.) Routledge handbook of surveillance studies, pp. 217–224. Routledge, Abingdon (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Surveillance%20and%20non-humans&pages=217-224&publication_year=2012&author=Donaldson%2CA)

  108. Neethirajan, S.: The use of artificial intelligence in assessing affective states in livestock. Front. Vet. Sci. **8** , 1–8 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20use%20of%20artificial%20intelligence%20in%20assessing%20affective%20states%20in%20livestock&journal=Front.%20Vet.%20Sci.&volume=8&pages=1-8&publication_year=2021&author=Neethirajan%2CS)

  109. Lencioni, G.C., de Sousa, R.V., de Souza Sardinha, E.J., Corrêa, R.R., Zanella, A.J.: Pain assessment in horses using automatic facial expression recognition through deep learning-based modeling. PLoS One **16** , 1–12 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Pain%20assessment%20in%20horses%20using%20automatic%20facial%20expression%20recognition%20through%20deep%20learning-based%20modeling&journal=PLoS%20One&volume=16&pages=1-12&publication_year=2021&author=Lencioni%2CGC&author=Sousa%2CRV&author=Souza%20Sardinha%2CEJ&author=Corr%C3%AAa%2CRR&author=Zanella%2CAJ)

  110. Noor, A., Zhao, Y., Koubaa, A., Wu, L., Khan, R., Abdalla, F.Y.: Automated sheep facial expression classification using deep transfer learning. Comput. Electron. Agric. **175** , 1–8 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Automated%20sheep%20facial%20expression%20classification%20using%20deep%20transfer%20learning&journal=Comput.%20Electron.%20Agric.&volume=175&pages=1-8&publication_year=2020&author=Noor%2CA&author=Zhao%2CY&author=Koubaa%2CA&author=Wu%2CL&author=Khan%2CR&author=Abdalla%2CFY)

  111. Andresen, N., Wöllhaf, M., Hohlbaum, K., Lewejohann, L., Hellwich, O., Thöne-Reineke, C., Belik, V.: Towards a fully automated surveillance of well-being status in laboratory mice using deep learning: starting with facial expression analysis. PLoS One **15** , 1–23 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Towards%20a%20fully%20automated%20surveillance%20of%20well-being%20status%20in%20laboratory%20mice%20using%20deep%20learning%3A%20starting%20with%20facial%20expression%20analysis&journal=PLoS%20One&volume=15&pages=1-23&publication_year=2020&author=Andresen%2CN&author=W%C3%B6llhaf%2CM&author=Hohlbaum%2CK&author=Lewejohann%2CL&author=Hellwich%2CO&author=Th%C3%B6ne-Reineke%2CC&author=Belik%2CV)

  112. Defeyter, M.A., Russo, R., McPartlin, P.L.: The picture superiority effect in recognition memory: a developmental study using the response signal procedure. Cogn. Dev. **24** , 265–273 (2009)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20picture%20superiority%20effect%20in%20recognition%20memory%3A%20a%20developmental%20study%20using%20the%20response%20signal%20procedure&journal=Cogn.%20Dev.&volume=24&pages=265-273&publication_year=2009&author=Defeyter%2CMA&author=Russo%2CR&author=McPartlin%2CPL)

  113. Grady, C.L., McIntosh, A.R., Rajah, M.N., Craik, F.I.: Neural correlates of the episodic encoding of pictures and words. Proc Natl Acad Sci USA **95** , 2703–2708 (1998)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Neural%20correlates%20of%20the%20episodic%20encoding%20of%20pictures%20and%20words&journal=Proc%20Natl%20Acad%20Sci%20USA&volume=95&pages=2703-2708&publication_year=1998&author=Grady%2CCL&author=McIntosh%2CAR&author=Rajah%2CMN&author=Craik%2CFI)

  114. Shepard, R.N.: Recognition memory for words, sentences, and pictures. J. Verbal Learn. Verbal Behav. **6** , 156–163 (1967)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Recognition%20memory%20for%20words%2C%20sentences%2C%20and%20pictures&journal=J.%20Verbal%20Learn.%20Verbal%20Behav.&volume=6&pages=156-163&publication_year=1967&author=Shepard%2CRN)

  115. Schwemmer, C., Knight, C., Bello-Pardo, E.D., Oklobdzija, S., Schoonvelde, M., Lockhart, J.W.: Diagnosing gender bias in image recognition systems. Socius **6** , 1–17 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Diagnosing%20gender%20bias%20in%20image%20recognition%20systems&journal=Socius&volume=6&pages=1-17&publication_year=2020&author=Schwemmer%2CC&author=Knight%2CC&author=Bello-Pardo%2CED&author=Oklobdzija%2CS&author=Schoonvelde%2CM&author=Lockhart%2CJW)

  116. Blodgett, S.L., Barocas, S., Daumé III, H., Wallach, H.: Language (Technology) is Power: A Critical Survey of “Bias” in NLP, in: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 5454–5476 (2020)

  117. Weidinger, L., Mellor, J., Rauh, M., Griffin, C., Uesato, J., Huang, P.-S., Cheng, M., Glaese, M., Balle, B., Kasirzadeh, A., Kenton, Z., Brown, S., Hawkins, W., Stepleton, T., Biles, C., Birhane, A., Haas, J., Rimell, L., Hendricks, L.A., Isaac, W., Legassick, S., Irving, G., Gabriel, I.: Ethical and social risks of harm from Language Models, arXiv 1–64 (2021) 

  118. Stanovsky, G., Smith, N.A., Zettlemoyer, L.: Evaluating gender bias in machine translation, in: Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 1679–1684 (2019)

  119. Meade, N., Poole-Dayan, E., Reddy, S.L: An empirical survey of the effectiveness of debiasing techniques for pre-trained language models, arXiv 1–12 (2021)

  120. Nadeem, M., Bethke, A., Reddy, S.: StereoSet: measuring stereotypical bias in pretrained language models, arXiv 1–15 (2020) 

  121. Stibbe, A.: Language, power and the social construction of animals. Soc. Anim. **9** , 145–161 (2001)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Language%2C%20power%20and%20the%20social%20construction%20of%20animals&journal=Soc.%20Anim.&volume=9&pages=145-161&publication_year=2001&author=Stibbe%2CA)

  122. Whorf, B.L., Carroll, J.B., Levinson, S.C., Lee, P.: Language, thought, and reality. The MIT Press, Cambridge (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Language%2C%20thought%2C%20and%20reality&publication_year=2012&author=Whorf%2CBL&author=Carroll%2CJB&author=Levinson%2CSC&author=Lee%2CP)

  123. Steffensen, S.V., Fill, A.: Ecolinguistics: the state of the art and future horizons. Lang. Sci. **41** , 6–25 (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Ecolinguistics%3A%20the%20state%20of%20the%20art%20and%20future%20horizons&journal=Lang.%20Sci.&volume=41&pages=6-25&publication_year=2014&author=Steffensen%2CSV&author=Fill%2CA)

  124. Fill, A., Penz, H.: The routledge handbook of ecolinguistics. Routledge, New York (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20routledge%20handbook%20of%20ecolinguistics&publication_year=2018&author=Fill%2CA&author=Penz%2CH)

  125. Pennington, J., Socher, R., Manning, C., GloVe: global vectors for word representation, in: Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP), Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 1532–1543 (2014)

  126. Mikolov, T., Chen, K., Corrado, G., Dean, J.: Efficient estimation of word representations in vector space, arXiv 1–12 (2013)

  127. Bolukbasi, T., Chang, K.-W., Zou, J., Saligrama, V., Kalai, A.: Man is to computer programmer as woman is to homemaker? Debiasing word embeddings, arXiv 1–25 (2016)

  128. Loughnan, S., Haslam, N., Bastian, B.: The role of meat consumption in the denial of moral status and mind to meat animals. Appetite **55** , 156–159 (2010)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20role%20of%20meat%20consumption%20in%20the%20denial%20of%20moral%20status%20and%20mind%20to%20meat%20animals&journal=Appetite&volume=55&pages=156-159&publication_year=2010&author=Loughnan%2CS&author=Haslam%2CN&author=Bastian%2CB)

  129. Bastian, B., Loughnan, S., Haslam, N., Radke, H.R.M.: Don’t mind meat? The denial of mind to animals used for human consumption. Pers. Soc. Psychol. Bull. **38** , 247–256 (2012)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Don%E2%80%99t%20mind%20meat%3F%20The%20denial%20of%20mind%20to%20animals%20used%20for%20human%20consumption&journal=Pers.%20Soc.%20Psychol.%20Bull.&volume=38&pages=247-256&publication_year=2012&author=Bastian%2CB&author=Loughnan%2CS&author=Haslam%2CN&author=Radke%2CHRM)

  130. Brown, T.B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D.M., Wu, J., Winter, C., Hesse, C., Chen, M., Sigler, E., Litwin, M., Gray, S., Chess, B., Clark, J., Berner, C., McCandlish, S., Radford, A., Sutskever, I., Amodei, D.: Language models are few-shot learners, pp. 1–75 (2020). [arXiv:2005.14165v4](http://arxiv.org/abs/2005.14165v4)

  131. Li, T., Khot, T., Khashabi, D., Sabharwal, A., Srikumar, V.: UnQovering stereotyping biases via underspecified questions, pp. 1–15 (2020). [arXiv:2010.02428v3](http://arxiv.org/abs/2010.02428v3)

  132. Jiang, L., Hwang, J.D., Bhagavatula, C., Le Bras, R., Forbes, M., Borchardt, J., Liang, J., Etzioni, O., Sap, M., Choi, Y.: Delphi: towards machine ethics and norms, pp. 1–42 (2021). [arXiv:2110.07574v1](http://arxiv.org/abs/2110.07574v1)

  133. Hendrycks, D., Burns, C., Basart, S., Critch, A., Li, J., Song, D., Steinhardt, J.: Aligning AI with shared human values, pp. 1–29 (2021). [arXiv:2008.02275v5](http://arxiv.org/abs/2008.02275v5)

  134. Forbes, M., Hwang, J.D., Shwartz, V., Sap, M., Choi, Y.: Social chemistry 101: learning to reason about social and moral norms, in: Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 653–670 (2020)

  135. Schramowski, P., Turan, C., Jentzsch, S., Rothkopf, C., Kersting, K.: The moral choice machine. Front. Artif. Intell. **3** , 1–15 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20moral%20choice%20machine&journal=Front.%20Artif.%20Intell.&volume=3&pages=1-15&publication_year=2020&author=Schramowski%2CP&author=Turan%2CC&author=Jentzsch%2CS&author=Rothkopf%2CC&author=Kersting%2CK)

  136. Schramowski, P., Turan, C., Andersen, N., Rothkopf, C., Kersting, K., Language models have a moral dimension, pp. 1–19 (2021). [arXiv:2103.11790v2](http://arxiv.org/abs/2103.11790v2)

  137. Tay, Y., Ong, D., Fu, J., Chan, A., Chen, N., Luu, A.T., Pal, C.: Would you rather? A new benchmark for learning machine alignment with cultural values and social preferences, in: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Stroudsburg, PA, USA, pp. 5369–5373 (2020)

  138. Ricci, F., Rokach, L., Shapira, B.: Introduction to recommender systems handbook. In: Ricci, F., Rokach, L., Shapira, B., Kantor, P.B. (eds.) Recommender systems handbook, pp. 1–35. Springer, Boston (2011)

[MATH](http://www.emis.de/MATH-item?1214.68392) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Introduction%20to%20recommender%20systems%20handbook&pages=1-35&publication_year=2011&author=Ricci%2CF&author=Rokach%2CL&author=Shapira%2CB)

  139. Wei, K., Huang, J., Fu, S.: A survey of e-commerce recommender systems, in: 2007 International Conference on Service Systems and Service Management, IEEE, Chengdu, pp. 1–5 (2007)

  140. Chen, J., Dong, H., Wang, X., Feng, F., Wang, M., He, X., Bias and debias in recommender system: a survey and future directions, pp. 1–20 (2020). [arXiv:2010.03240v1](http://arxiv.org/abs/2010.03240v1)

  141. Hagendorff, T.: Linking human and machine behavior: a new approach to evaluate training data quality for beneficial machine learning. Mind. Mach. **31** , 563–593 (2021)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Linking%20human%20and%20machine%20behavior%3A%20a%20new%20approach%20to%20evaluate%20training%20data%20quality%20for%20beneficial%20machine%20learning&journal=Mind.%20Mach.&volume=31&pages=563-593&publication_year=2021&author=Hagendorff%2CT)

  142. Germano, F., Gómez, V., Le Mens, G.: The few-get-richer: a surprising consequence of popularity-based rankings, pp. 1–7 (2019). [arXiv:1902.02580v2](http://arxiv.org/abs/1902.02580v2)

  143. Mansoury, M., Abdollahpouri, H., Pechenizkiy, M., Mobasher, B., Burke, R.: Feedback loop and bias amplification in recommender systems, pp. 1–5 (2020). [arXiv:2007.13019v1](http://arxiv.org/abs/2007.13019v1)

  144. Milano, S., Taddeo, M., Floridi, L.: Recommender systems and their ethical challenges. AI Soc **35** , 957–967 (2020)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Recommender%20systems%20and%20their%20ethical%20challenges&journal=AI%20Soc&volume=35&pages=957-967&publication_year=2020&author=Milano%2CS&author=Taddeo%2CM&author=Floridi%2CL)

  145. Epstein, R., Robertson, R.E.: The search engine manipulation effect (SEME) and its possible impact on the outcomes of elections. Proc. Natl. Acad. Sci. **112** , 4512–4521 (2015)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20search%20engine%20manipulation%20effect%20%28SEME%29%20and%20its%20possible%20impact%20on%20the%20outcomes%20of%20elections&journal=Proc.%20Natl.%20Acad.%20Sci.&volume=112&pages=4512-4521&publication_year=2015&author=Epstein%2CR&author=Robertson%2CRE)

  146. Harambam, J., Helberger, N., van Hoboken, J.: Democratizing algorithmic news recommenders: how to materialize voice in a technologically saturated media ecosystem. Philos. Trans. A Math. Phys. Eng. Sci. **376** , 1–21 (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Democratizing%20algorithmic%20news%20recommenders%3A%20how%20to%20materialize%20voice%20in%20a%20technologically%20saturated%20media%20ecosystem&journal=Philos.%20Trans.%20A%20Math.%20Phys.%20Eng.%20Sci.&volume=376&pages=1-21&publication_year=2018&author=Harambam%2CJ&author=Helberger%2CN&author=Hoboken%2CJ)

  147. Eyal, N., Hoover, R.: Hooked: how to build habit-forming products. Princeton University Press, Princeton (2014)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Hooked%3A%20how%20to%20build%20habit-forming%20products&publication_year=2014&author=Eyal%2CN&author=Hoover%2CR)

  148. Kuss, D.J., Griffiths, M.D.: Social networking sites and addiction: ten lessons learned. Int. J. Environ. Res. Public Health. (2017). <https://doi.org/10.3390/ijerph14030311>

[Article](https://doi.org/10.3390%2Fijerph14030311) [ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Social%20networking%20sites%20and%20addiction%3A%20ten%20lessons%20learned&journal=Int.%20J.%20Environ.%20Res.%20Public%20Health.&doi=10.3390%2Fijerph14030311&publication_year=2017&author=Kuss%2CDJ&author=Griffiths%2CMD)

  149. Regan, T.: The case for animal rights. Routledge & Kegan Paul, London (2004)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20case%20for%20animal%20rights&publication_year=2004&author=Regan%2CT)

  150. Francione, G.L.: Animals, property, and the law. Temple University Press, Philadelphia (1995)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Animals%2C%20property%2C%20and%20the%20law&publication_year=1995&author=Francione%2CGL)

  151. Derrida, J., Mallet, M.-L.: The animal that therefore I am. Fordham University Press, Ashland (2008)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=The%20animal%20that%20therefore%20I%20am&publication_year=2008&author=Derrida%2CJ&author=Mallet%2CM-L)

  152. Gruen, L.: Ethics and animals: an introduction. Cambridge University Press, Cambridge (2011)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Ethics%20and%20animals%3A%20an%20introduction&publication_year=2011&author=Gruen%2CL)

  153. Korsgaard, C.M.: Fellow creatures: our obligations to the other animals. Oxford University Press, Oxford (2018)

[ Google Scholar](http://scholar.google.com/scholar_lookup?&title=Fellow%20creatures%3A%20our%20obligations%20to%20the%20other%20animals&publication_year=2018&author=Korsgaard%2CCM)




[Download references](https://citation-needed.springer.com/v2/references/10.1007/s43681-022-00199-9?format=refman&flavour=references)

## Acknowledgements

Thanks to Sarah Fabi, Marius Hobbhahn, Kristof Meding, and Billy Chiu for helpful comments on the manuscript.

## Funding

Open Access funding enabled and organized by Projekt DEAL. TH was supported by the Cluster of Excellence “Machine Learning—New Perspectives for Science” funded by the German Research Foundation under Germany’s Excellence Strategy—Reference Number EXC 2064/1—Project ID 390727645. YFT was supported by a grant from the Center for Information Technology Policy and the University Center for Human Values, both at Princeton University.

## Author information

### Authors and Affiliations

  1. University of Tuebingen, Cluster of Excellence “Machine Learning: New Perspectives for Science”, Tübingen, Germany

Thilo Hagendorff

  2. University of Tuebingen, International Center for Ethics in the Sciences and Humanities, Tübingen, Germany

Leonie N. Bossert

  3. Princeton University (Contractor), Center for Information Technology Policy, Princeton, NJ, USA

Yip Fai Tse

  4. Princeton University, University Center for Human Values, Princeton, NJ, USA

Peter Singer




Authors

  1. Thilo Hagendorff

[View author publications](/search?sortBy=newestFirst&contributor=Thilo%20Hagendorff)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Thilo%20Hagendorff) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Thilo%20Hagendorff%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)

  2. Leonie N. Bossert

[View author publications](/search?sortBy=newestFirst&contributor=Leonie%20N.%20Bossert)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Leonie%20N.%20Bossert) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Leonie%20N.%20Bossert%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)

  3. Yip Fai Tse

[View author publications](/search?sortBy=newestFirst&contributor=Yip%20Fai%20Tse)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Yip%20Fai%20Tse) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Yip%20Fai%20Tse%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)

  4. Peter Singer

[View author publications](/search?sortBy=newestFirst&contributor=Peter%20Singer)

Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Peter%20Singer) [Google Scholar](https://scholar.google.co.uk/scholar?as_q=&num=10&btnG=Search+Scholar&as_epq=&as_oq=&as_eq=&as_occt=any&as_sauthors=%22Peter%20Singer%22&as_publication=&as_ylo=&as_yhi=&as_allsubj=all&hl=en)




### Contributions

TH and LB had the original idea for the paper, which was discussed and modified in discussion with PS and YFT. TH carried out the empirical investigations of different AI systems and wrote Sects. [1](/article/10.1007/s43681-022-00199-9#Sec1), [3](/article/10.1007/s43681-022-00199-9#Sec3), [4](/article/10.1007/s43681-022-00199-9#Sec4), and [5](/article/10.1007/s43681-022-00199-9#Sec8). PS and LB wrote Sect. [2](/article/10.1007/s43681-022-00199-9#Sec2). PS, LB, and YFT provided critical feedback on the manuscript. PS helped supervise the project.

### Corresponding author

Correspondence to [Thilo Hagendorff](mailto:thilo.hagendorff@uni-tuebingen.de).

## Ethics declarations

### Conflict of interest

The authors declare that they have no conflict of interest.

## Additional information

### Publisher's Note

Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Rights and permissions

**Open Access** This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article's Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article's Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit <http://creativecommons.org/licenses/by/4.0/>.

[Reprints and permissions](https://s100.copyright.com/AppDispatchServlet?title=Speciesist%20bias%20in%20AI%3A%20how%20AI%20applications%20perpetuate%20discrimination%20and%20unfair%20outcomes%20against%20animals&author=Thilo%20Hagendorff%20et%20al&contentID=10.1007%2Fs43681-022-00199-9&copyright=The%20Author%28s%29&publication=2730-5953&publicationDate=2022-08-29&publisherName=SpringerNature&orderBeanReset=true&oa=CC%20BY)

## About this article

[](https://crossmark.crossref.org/dialog/?doi=10.1007/s43681-022-00199-9)

### Cite this article

Hagendorff, T., Bossert, L.N., Tse, Y.F. _et al._ Speciesist bias in AI: how AI applications perpetuate discrimination and unfair outcomes against animals. _AI Ethics_ **3** , 717–734 (2023). https://doi.org/10.1007/s43681-022-00199-9

[Download citation](https://citation-needed.springer.com/v2/references/10.1007/s43681-022-00199-9?format=refman&flavour=citation)

  * Received: 28 March 2022

  * Accepted: 18 July 2022

  * Published: 29 August 2022

  * Version of record: 29 August 2022

  * Issue date: August 2023

  * DOI: https://doi.org/10.1007/s43681-022-00199-9




### Share this article

Anyone you share the following link with will be able to read this content:

Get shareable link

Sorry, a shareable link is not currently available for this article.

Copy shareable link to clipboard

Provided by the Springer Nature SharedIt content-sharing initiative 

### Keywords

  * [Speciesist bias](/search?query=Speciesist%20bias&facet-discipline="Computer%20Science")
  * [Fairness](/search?query=Fairness&facet-discipline="Computer%20Science")
  * [Artificial intelligence](/search?query=Artificial%20intelligence&facet-discipline="Computer%20Science")
  * [Machine learning](/search?query=Machine%20learning&facet-discipline="Computer%20Science")
  * [AI ethics](/search?query=AI%20ethics&facet-discipline="Computer%20Science")
  * [Speciesism](/search?query=Speciesism&facet-discipline="Computer%20Science")



### Profiles

  1. Thilo Hagendorff [ View author profile ](/researchers/43593734SN)


  *[DOI]: Digital Object Identifier
