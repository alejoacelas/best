---
title: "AI for Animals #4: Interspecies communication"
author: "Max Taylor"
url: https://sentientfutures.substack.com/p/ai-for-animals-4-interspecies-communication
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by animals-adapt-to-ai/what-success-looks-like-for-animals.md; AI-enabled interspecies communication and its welfare implications"
---

# AI for Animals #4: Interspecies communication

### October 10, 2024

[](https://substack.com/@aiforanimals)

[Max Taylor](https://substack.com/@aiforanimals)

Oct 10, 2024

7

Share

Welcome to the fourth edition of **AI for Animals**! This newsletter brings you the latest news and research on AI, animals, and digital minds.

Each edition also homes in on a specific topic relating to AI’s potential impacts for animals. This time, we explore how AI could facilitate communication between humans and other animals.

If you have any questions or feedback, our email is [contact@aiforanimals.org](mailto:contact@aiforanimals.org). You can subscribe to this newsletter [here](https://aiforanimals.substack.com/welcome).

Thanks to Allison Agnello, Yolanda Eisenstein, and Constance Li for their contributions to this month’s edition!

Max Taylor

* * *

#### Index

  * [Overview: How could AI enable interspecies communication?](https://aiforanimals.substack.com/i/149452684/how-could-ai-enable-interspecies-communication)

  * [📚 Resources](https://aiforanimals.substack.com/i/149452684/resources)

  * [🌍 Opportunities](https://aiforanimals.substack.com/i/149452684/opportunities)

  * [🚨 Updates](https://aiforanimals.substack.com/i/149452684/updates)

  * [🗞️ News & Research](https://aiforanimals.substack.com/i/149452684/news-and-research)




* * *

## How could AI enable interspecies communication?

[](https://substackcdn.com/image/fetch/$s_!95av!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1d47798f-89cd-4cac-942f-d5c0969051da_1600x914.png)Image created using ChatGPT 4o

In late 2023, researchers [‘conversed’ with a humpback whale](https://www.seti.org/press-release/whale-seti-groundbreaking-encounter-humpback-whales-reveals-potential-non-human-intelligence) they called Twain. While this interaction only really involved Twain and the SETI researchers greeting each other several times before Twain swam away, to many it seemed a crucial step towards meaningful human communication with another species. 

Several organizations are dedicated to making such interspecies communication a reality. For [Project CETI](https://www.projectceti.org/) (Cetacean Translation Initiative), the sole objective is to communicate with whales. (This makes sense: whales have enormous brains, are extremely social, are known for their complex vocalizations, and – as fellow mammals – are relatively likely to share some linguistic similarities with humans.) The goal of [Earth Species Project](https://www.earthspecies.org/) and [Interspecies Internet](https://www.interspecies.io/), meanwhile, is to communicate with _all_ species.

Machine learning and its knack for spotting patterns in a sea of messy data are fundamental to the approach of all three organizations. If you too want to use machine learning to communicate with other species, here’s a step-by-step guide, using whales as an example.

#### **1\. Gather the data**

As with most AI applications, any human-whale communication tool requires a huge amount of data. Recordings of the whales’ vocalizations are top of the list: [by one estimate](https://www.tommustill.com/afterword-to-how-to-speak-whale), you’ll need roughly four billion recordings if you want to deploy a really advanced model. However, to interpret those vocalizations, you’ll also need to understand what context they occurred in: Who was speaking? Whom were they speaking to? Where? Were there predators nearby? Had they recently eaten? What sort of emotional state did they seem to be in?

This entails recording years’ worth of visual footage to accompany the acoustic data. Fortunately, [recording tech](https://cdn.prod.website-files.com/630ea9b1fcc91e6ca07956a2/64d64835900750b4b989714d_science.adg7314.pdf) has become radically cheaper and more versatile in recent years. Aerial and underwater drones, cameras on tethered buoys, and wearable ‘bio-logger’ devices (such as cameras designed to attach to the whale like [suckerfish](https://seas.harvard.edu/news/2024/03/using-suction-cups-inspired-fish-listen-whale-conversations)) collectively allow researchers to identify and track individual whales, gradually building a picture of their lives, personalities, and social structures. Mother-baby interactions are particularly revealing, shedding light on the way in which whales first acquire language. 

#### **2\. Clean up the data**

So now you have all of your data, but chances are that your acoustic recordings will be a mess of underwater noise. Whale sounds will typically be infrequent, indistinct, obscured by other animals, or drowned out by ships. Once you’ve isolated the whale vocalizations, you’ll still need to separate out each individual’s vocalizations from the overlapping chatter and distinguish communicational calls from echolocation clicks.

Luckily, machine learning is adept at addressing this ‘[cocktail party problem](https://www.earthspecies.org/blog/solving-the-cocktail-party-problem)’. Researchers developed a model nicknamed ‘Deep Karaoke’ by training it to recognize the sounds of different individual instruments, then break down complex musical recordings into the individual constituents. While this model was designed for recordings of human communication, similar algorithms [have proved successful](https://arxiv.org/abs/1504.04658) in doing the same with animal vocalizations and unwanted environmental noise.

Once you’ve removed unwanted background noise and worked out which whale is saying what, you can start breaking down the vocalizations into their individual constituents. For whales, these constituents are sequences of clicks known as ‘codas’. AI’s adeptness at pattern recognition makes it much easier to [identify commonly recurring sequences](https://www.sciencedirect.com/science/article/pii/S2589004222006642), gradually revealing whales’ coda ‘alphabet’. It’s not just whales: researchers and citizen scientists are making progress in deciphering the alphabets (and to a lesser extent, dictionaries) of all kinds of animals, including [elephants](https://www.nature.com/articles/s41559-024-02420-w), [macaques](https://royalsocietypublishing.org/doi/full/10.1098/rsos.150432), [orangutans](https://peerj.com/articles/17320/), [meerkats](https://arxiv.org/abs/2406.01253), [bats](https://english.tau.ac.il/news/bat_calls_information), and [crows](https://www.earthspecies.org/what-we-do/projects).

#### **3\. Decode the data**

To translate the data into human language, you have two main options:

_Option 1: Train algorithms on labeled data._

The labeling entails you poring through the audio and video recordings and suggesting, based on your expertise in whale behavior, what the whales might have been trying to communicate in different contexts. You then feed this labeled dataset into the supervised learning algorithm so that it can pinpoint particular sounds that correspond to those likely communicative intentions and, over time, refine its ability to generalize these patterns to new, unlabeled recordings. While this approach provides expert human supervision for the AI models, it is limited by the biases and constraints of human understanding. There will always be a high degree of uncertainty and subjectivity in how researchers label the data, which can introduce noise and error into the training process.

_Option 2: Train algorithms on unlabeled data._

In theory, models could use underlying similarities between human and whale ‘language’ to establish commonalities. This is sometimes depicted as a constellation of words, connected by gravitational pulls of varying strengths. For example, in most human languages, the relationship between the words ‘king’ and ‘queen’ is similar to the relationship between ‘man’ and ‘woman’, and the relationship between ‘man’ and ‘king’ is similar to that between ‘woman’ and ‘queen’. These shared connections give languages a common ‘shape’, allowing you to map one language onto another and understand which words in the different languages are referring to the same concept. (See [this ](https://www.vox.com/videos/364124/ai-talk-communicate-animals-machine-learning)_[Vox](https://www.vox.com/videos/364124/ai-talk-communicate-animals-machine-learning)_[ video](https://www.vox.com/videos/364124/ai-talk-communicate-animals-machine-learning) for a visualization of this.)

Human languages generally all share the same core concepts, so this method has proven very successful for translation across many languages. The big unresolved question is whether whales and other non-human animals share enough of those concepts for such a mapping exercise to be feasible.

Some have also pointed to other linguistic rules that seem to occur across most human languages and might also form the basis of various non-human forms of communication. One such example is [Zipf’s law](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4176592/), which proposes that the most common word in a language occurs twice as often as the second most common, three times as often as the third most common, and so on. However, the extension of such rules to animal communication is [contested](https://royalsocietypublishing.org/doi/10.1098/rsos.200151).

#### **4\. Talk back**

Congratulations! You’ve worked out what the whales are saying and are now ready to talk back to them. You’re faced with a few decisions on how to communicate:

  * _Source_ : You can either play back a recording of real-life whale vocalizations, or use synthetically generated ones. The former risks causing confusion if you use a familiar voice (or the whale’s own), while the latter risks sounding unnatural.

  * _Medium_ : Sounds can be played from a disembodied speaker, from a speaker close to a human, or by an animatronic whale. In principle the last option stands the greatest chance of engagement, but in practice robotics would need to be more advanced (and much cheaper).

  * _Environment_ : This presents a dilemma. Speak to animals in their natural habitat, and you stand a greater chance of causing havoc if you accidentally say something off-kilter. But interaction with animals in captivity can be ethically dubious and might not replicate in the wild.




Finally, and most importantly, you need to decide what to actually talk about and what your intentions are. Maybe you want to satisfy your scientific curiosity, help break down the perceived boundaries between humans and other species, or warn the whales away from shipping routes and drilling operations. Or maybe you want to misuse this information by luring whales in so you can harpoon them and sell their flesh. The next edition will explore the huge opportunities, risks, and ethical conundrums that human-animal communication could bring.

* * *

## 📚 Resources

  * For more information on AI and human-animal communication, check out:

    * The work of the [Earth Species Project](https://www.earthspecies.org/), [Project CETI](https://www.projectceti.org/), and [Interspecies Internet](https://www.interspecies.io/)

    * [Toward understanding the communication in sperm whales](https://www.sciencedirect.com/science/article/pii/S2589004222006642) (Andreas et al., iScience)

    * [Cetacean conversation: AI could let us talk to whales. Experts question if that's a good idea](https://www.salon.com/2024/08/23/cetacean-conversation-ai-could-let-us-talk-to-whales-experts-question-if-thats-a-good-idea/) (Salon)

    * [ESP Technical Roadmap](https://www.earthspecies.org/blog/esp-technical-roadmap) (Earth Species Project)

    * [[Video] How AI could help us talk to animals](https://www.vox.com/videos/364124/ai-talk-communicate-animals-machine-learning) (Vox)

  * The [Hive Community Slack](https://joinhive.org/slack/) ([sign up to join](https://tally.so/r/wkGKer)) has several channels dedicated to discussion of AI and animals, including [#c-ai-discussion](https://join-hive.slack.com/archives/C059W3BA51P) for broad discussions and [#s-ai-coalition](https://join-hive.slack.com/archives/C05M9GW4JF3) for project collaboration.

  * If you want to dig deeper, the [aiforanimals.org](http://aiforanimals.org/) website has a list of relevant articles, papers, and other materials giving an overview of the AI and animals space.




* * *

## 🌏 Opportunities

  * Planning is underway for the 2025 AI, Animals, and Digital Minds Conference (Bay Area, February 2025, exact details TBD). The conference will be a multidisciplinary gathering of people who want to steer AI and other advanced technologies towards the benefit of nonhumans. To make suggestions for content, speakers, or anything else, please [fill out this form](https://airtable.com/appmHm1c4TQt1hBET/pagyRniFEqdrEOseK/form). 

  * Open Paws is looking for volunteers for their human feedback collection project. To get involved, [read more and sign up here](https://www.openpaws.ai/help-train-ai).

* * *




## 🚨 Updates

[](https://substackcdn.com/image/fetch/$s_!MoLW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffe68e1b4-0a65-446d-b151-e7dd1e8acb1a_1206x454.png)

  * **September AI for Animals SF Meetup** : Our monthly meetup in San Francisco focused on advances being made in communication with dogs and what this could mean for gaining their legal personhood. We had fun with a special dog theme! The speaker was Praful Mathur, founder of Sarama, a tech company building AI to enable multimodal interspecies communication. The event was featured on Luma’s discovery list and attracted 60+ attendees.

  * **International Animal Rights Conference** : Sam Tucker, head of Open Paws, gave a talk on ‘Advancing animal rights in the age of AI’ in Warsaw, Poland. Sam highlighted the need to 1) restrict the adoption of AI in animal agriculture, 2) make the AI industry more animal-friendly, and 3) accelerate the adoption of AI in animal advocacy. The recording is available [here](https://imaa.me/3N9BuKN).

  * **CARE Conference** : AI Coalition members Constance Li (Hive/AI for Animals), Yip Fai Tse (Peter Singer’s Research Assistant), karol orzechowski (Faunalytics), and Sam Tucker (Open Paws) took part in a panel discussion on ‘Artificial Intelligence and Animal Advocacy – Navigating the Ethical Frontier’. The panel covered the risks and opportunities of Precision Livestock Farming, how advocates can most effectively use AI, and the possibility of AI-caused catastrophes for animals.

  * **8th Africa Animal Welfare Conference** : Yolanda Eisenstein (UIA Animal Law Commission) presented on ‘AI Collaborations to Protect Animals and the Environment’ in Nairobi, Kenya. Yolanda highlighted the promising applications of AI for wildlife conservation and animal welfare, such as [Wildme/Conservation X Lab's project](https://conservationxlabs.com/wild-me), but also noted that AI can bring many risks for humans and animals. She stressed the need for collaboration between animal advocates and AI researchers, AI developers, lawmakers, and the public.

  * **EU AI Act Code of Practice Consultation** : Five coalition members were accepted to become stakeholders in the consultation process. We dedicated our monthly meeting to discussing and coordinating strategy to achieving the most favorable outcomes for animals in this policy.




* * *

## 🗞️ News & Research

#### **🗣️ Understanding animals**

  * [How machine learning is helping us probe the secret names of animals](https://www.technologyreview.com/2024/08/29/1103353/how-machine-learning-is-helping-us-probe-the-secret-names-of-animals/) (MIT Technology Review)

    * Researchers at Hebrew University in Israel have used machine learning and audio analysis to discover that marmoset monkeys use specific vocal labels, akin to names, to identify and communicate with individual monkeys. By employing a statistical technique called "random forest," the team was able to classify and analyze these sounds, providing strong evidence that these vocal labels are a form of primitive naming, similar to what has been observed in humans, dolphins, elephants, and parrots.

  * [Danish researchers use AI to understand pigs](https://www.thelocal.dk/20240904/danish-researchers-use-ai-to-understand-pigs) (The Local)

    * Danish researchers from the University of Copenhagen used AI to decode 19 distinct pig vocalizations, identifying emotions like happiness, sadness, fear, frustration, and stress. The study, based on over 15,000 recorded pig grunts, found that pigs in conventional farms expressed distress more frequently (25%) compared to pigs in outdoor environments (8%), highlighting welfare differences.

  * [Whistles, songs, boings, and biotwangs: Recognizing whale vocalizations with AI](https://research.google/blog/whistles-songs-boings-and-biotwangs-recognizing-whale-vocalizations-with-ai/) (Google)

    * Google Research has introduced a new whale bioacoustics AI model capable of identifying eight distinct whale species, including multiple call types for some species and the recently attributed "Biotwang" sound of Bryde's whales. The model, which converts audio data into spectrograms for classification, has demonstrated high performance across various whale vocalizations and has been used to label over 200,000 hours of underwater recordings, providing new insights into whale ecology and migration patterns.

  * [The world's first robotic AI shark can do this](https://timesofindia.indiatimes.com/etimes/trending/the-worlds-first-robotic-ai-shark-can-do-this/articleshow/113734153.cms) (Times of India)

    * A Chinese company has developed a five meter-long robotic whale shark that uses AI to navigate its environment. Researchers plan to use it to improve our understanding of marine animals and ecosystems. 

  * [[Audio] Translating whale, with the help of AI](https://www.wpr.org/culture/translating-whale-ai-project-ceti-shane-gero) (Wisconsin Public Radio)

    * Project CETI uses AI and autonomous submarines to record and analyze sperm whale vocalizations, identifying distinct "codas" that vary by family and region. These codas are believed to convey cultural information, like clan identity, behavior, and habitat use, and the project's machine learning models help process vast amounts of audio to classify these patterns, revealing nuanced communication that may change with context.




#### **🐔 Chicken farming**

  * [New £3m project to address health and welfare issues in poultry production](https://www.foodmanufacture.co.uk/Article/2024/09/09/new-3m-project-to-address-health-and-welfare-issues-in-poultry-production?utm_source=copyright&utm_medium=OnSite&utm_campaign=copyright) (Food Manufacture)

    * Nottingham Trent University in the UK has partnered on a £3m project exploring the use of insect protein and artificial intelligence to address significant health and welfare issues in poultry production.

  * [Using AI, EWG maps 357M poultry on North Carolina’s factory farms](https://www.ewg.org/news-insights/news-release/2024/09/using-ai-ewg-maps-357m-poultry-north-carolinas-factory-farms) (Environmental Working Group)

    * The Environmental Working Group used AI to map 357 million chickens and turkeys on North Carolina factory farms, revealing a 43% increase since 2007 and significant environmental concerns. The investigation highlights the lack of state oversight and potential health risks associated with dense concentrations of poultry operations, including air and water pollution from the estimated 3.2 million tons of manure produced annually.

  * [Animal Welfare and Artificial Intelligence: A Combination of the Poultry Present or Future?](https://avinews.com/en/animal-welfare-and-artificial-intelligence/) (AviNews)

    * AI integration in poultry farming enhances the detection of welfare issues like lameness and health problems by analyzing subtle changes in behavior, gait, and environmental conditions. Automated systems can track weight gain and stress indicators with greater precision, minimizing human error and invasive handling. While these technologies offer more objective welfare assessments, their effectiveness depends on factors like environmental complexity and the degree of system integration on farms.




#### **🐟 Aquaculture**

  * [Op-ed: AI data modeling and nanotechnology are innovations every farmer should be taking note of](https://www.seafoodsource.com/news/aquaculture/ai-data-modelling-and-nanotechnology-are-innovations-every-farmer-should-be-taking-note-of) (Seafood Source)

    * Norwegian aquaculture startups like Manolin and Biofeyn are using AI and advanced technologies to improve fish farming efficiency and sustainability. Manolin applies AI-driven predictive modeling to optimize salmon farming by helping farmers predict health issues, optimize breeding and genetics, and improve treatments for sea lice; while Biofeyn uses nanotechnology to enhance fish nutrition and deliver oral vaccines via feed. 

  * [Advanced biomass camera proves a success for New Zealand salmon farms](https://thefishsite.com/articles/advanced-biomass-camera-proves-a-success-for-new-zealand-salmon-farms) (The Fish Site)

    * Ace Aquatec's A-BIOMASS camera, using AI and machine learning, has proven successful at Mount Cook Alpine Salmon's New Zealand farm, providing accurate real-time biomass estimates in challenging conditions. The technology has improved harvest results and reduced fish stress, prompting Ace Aquatec to pursue expansion across Oceania's aquaculture industry.

  * [A Look at Science, Technology, and Artificial Intelligence for Sustainable Aquaculture](https://blogs.edf.org/edfish/2024/09/23/a-look-at-science-technology-and-artificial-intelligence-for-sustainable-aquaculture/) (Environmental Defense Fund)

    * Advanced AI and robotics are improving aquaculture sustainability through automated feeding, disease detection, and remote monitoring of ocean farms. Meanwhile, innovations in feed formulas, pen designs, and traceability systems aim to reduce environmental impacts and improve efficiency in open ocean fish farming.

  * [The AI tool that aims to make bottom trawling smarter and prevent bycatch and discards](https://www.globalseafood.org/advocate/the-ai-tool-that-aims-to-make-bottom-trawling-smarter-and-prevent-bycatch-and-discards/) (Global Seafood Alliance)

    * Smartrawl, an AI-driven tool, helps reduce bycatch in bottom trawling by using cameras and smart gate systems to sort fish by species and size, releasing non-target species back into the ocean. This technology aims to improve sustainability in fisheries by reducing waste and helping fishers comply with regulatory catch limits. While promising, the system is still undergoing field trials to assess its effectiveness compared to traditional methods.

  * [Fish-AI project develops artificial intestine platform to revolutionize aquafeed trials](https://www.aquafeed.com/newsroom/editors-picks/fish-ai-project-develops-artificial-intestine-platform-to-revolutionize-aquafeed-trials/) (AquaFeed)

    * The Fish-AI project has developed an in vitro platform using fish intestinal cell lines to test aquafeeds, reducing the need for live animal trials. It offers efficient early-stage feed evaluation, though it currently focuses only on gut health and requires highly specialized personnel.

  * [Abu Dhabi AI-powered project aims to boost sustainable fish farming, says expert](https://www.thenationalnews.com/news/uae/2024/09/25/abu-dhabi-ai-powered-project-aims-to-boost-sustainable-fish-farming-says-expert/) (The National)

    * Abu Dhabi's AI-powered floating sea cages aim to make fish farming more sustainable by optimizing feed strategies and minimizing environmental impact. The project is expected to improve fish health, reduce resource usage, and develop new protocols for environmentally responsible aquaculture.

  * [China accelerates big data, AI application in ocean industry, anticipating revolutionary changes](https://www.globaltimes.cn/page/202409/1320435.shtml) (Global Times)

    * China is leveraging AI and big data to transform marine aquaculture, optimizing feed usage and reducing environmental impact by precisely monitoring and adjusting feeding practices. This technology is also being shared with developing countries, helping them enhance their aquaculture efficiency and sustainability as part of broader efforts to build ‘blue economies’.




#### **🐖 Animal farming: General**

  * [The Next Revolution in Animal Agriculture](https://asteriskmag.com/issues/07/the-next-revolution-in-animal-agriculture) (Asterisk)

    * Precision livestock farming (PLF) uses AI-driven sensor technologies to automate monitoring of farm animals, offering potential improvements in efficiency and animal welfare. However, challenges such as high costs, data privacy concerns, and low adoption rates among farmers, compounded by the lack of financial incentives and technological complexity, limit its widespread implementation despite its potential benefits.

  * [The Future of Meat & Poultry Processing: New Trends](https://www.meatpoultry.com/articles/30851-the-future-of-meat-and-poultry-processing-latest-technology-trends) (Meat + Poultry)

    * AI and robotics are revolutionizing the meat and poultry industry by enhancing precision in processing, with AI-driven systems optimizing butchering and supporting predictive maintenance.

  * [Animal-counting drones help farmers speed up stocktake](https://www.1news.co.nz/2024/10/01/animal-counting-drones-help-farmers-speed-up-stocktake/) (1News)

    * AI-powered drones are revolutionizing livestock counting on farms in New Zealand, significantly speeding up the process by quickly identifying and counting animals from aerial footage. This innovation reduces human error, enhances efficiency, and provides farmers with rapid and accurate stocktake results, improving operational management.

  * [AIMS questions the use of AI to influence food purchases](https://meatmanagement.com/news/aims-questions-the-use-of-ai-to-influence-food-purchases/84072.article) (Meat Management)

    * The Association of Independent Meat Suppliers (AIMS) has voiced concern at suggestions by Tesco’s CEO that AI could be used to nudge consumers into making healthier and more sustainable purchases. AIMS says it is worried that AI could perpetuate programmers’ biases by pushing ‘specific narratives’, such as promoting plant-based alternatives. 

  * [EuroTier 2024: Trends in livestock technology](https://www.eurotier.com/en/press/latest-news#!/news/eurotier-2024-trends-in-livestock-technology) (EuroTier)

    * EuroTier 2024, the world's leading livestock technology fair, will showcase AI-powered solutions for animal monitoring, automated feeding systems, and emission-reducing barn designs. The November event will highlight innovations in robotic farm assistance, climate control technologies, and data integration to improve animal welfare and farm efficiency.




#### **🐦‍⬛ Wild animals**

  * [Alstom and Flox trialling AI wildlife detection system in Sweden](https://www.railway-technology.com/news/alstom-flox-ai-wildlife-detection-sweden/) (Railway Technology)

    * Alstom and Flox are trialing an AI wildlife detection system on Swedish railways to reduce train-animal collisions, with the technology identifying animals and using tailored sound signals to deter them. The project, funded by a Swedish government grant, aims to enhance both rail safety and wildlife protection by preventing the approximately 5,000 annual animal collisions on Sweden's tracks.

  * [Trump Calls Wind Turbines Bird Killers. New AI Tech Saves Them From The Blades](https://www.forbes.com/sites/carltonreid/2024/08/27/trump-will-hate-this-tech-wind-turbines-that-dont-kill-birds/) (Forbes)

    * New AI-powered radar systems can detect bird flocks and automatically halt wind turbines to prevent collisions, with successful trials in Portugal and upcoming implementations in Dutch wind farms. While wind turbines do kill birds, studies show that domestic cats, buildings, and vehicles are far greater threats to bird populations.

  * [Valiance Solutions launches WildlifeIQ: Intelligent insights for effective wildlife monitoring and conservation](https://www.crn.in/news/valiance-solutions-launches-wildlifeiq-intelligent-insights-for-effective-wildlife-monitoring-and-conservation/) (CRN India)

    * Valiance Solutions has launched WildlifeIQ, an AI-powered platform for intelligent wildlife monitoring and conservation, featuring automated species classification, tiger identification, and conflict prediction. The system speeds up the analysis of camera trap images from months to days, offering real-time insights to help manage human-wildlife conflicts more effectively.

  * [Using Artificial Intelligence to Combat Wildlife Crime](https://www.wilsoncenter.org/blog-post/using-artificial-intelligence-combat-wildlife-crime) (Wilson Center)

    * AI technologies are becoming essential in combating wildlife crime, like poaching and illegal logging, by enabling real-time detection through tools such as machine learning-powered microphones and cameras, which improve patrol efficiency and target illegal activity more accurately. However, these advancements also pose risks for under-resourced rangers, potentially increasing confrontations with criminals, emphasizing the need for proper training, equipment, and support alongside the AI tools.




#### **🍔 Alternative proteins**

  * [How generative AI could boost plant-based protein functionality](https://www.foodnavigator.com/Article/2024/08/27/ai-could-boost-plant-based-protein-functionality) (Food Navigator)

    * AI Bobby's generative AI technology specifically designs and optimizes plant-based proteins by analyzing vast datasets to identify the most effective protein structures for desired functionalities, such as gelation, which is crucial for achieving the right texture and mouthfeel in plant-based products. The AI models are trained to predict and enhance the gelling properties of proteins, enabling the creation of plant-based meats and dairy analogues with improved consistency and reduced need for additional ingredients, thus lowering production costs and improving product quality.

  * [How AI can help design proteins for the food industry](https://www.foodnavigator.com/Article/2024/08/30/AI-designs-proteins-for-roles-across-food-industry) (Food Navigator)

    * Start-ups like Cradle are using generative AI to design and optimize proteins for various applications in the food industry, such as improving the stability of growth factors in cultivated meat or enhancing the clarity of fruit juices. This technology allows for the creation of proteins with specific properties that may not naturally occur, significantly speeding up the development process and enabling new functionalities, like extending shelf life or removing off-tastes in plant-based products.

  * [How AI is Powering the Next Generation of Plant-Based Food](https://vegnews.com/ai-vegan-companies) (VegNews)

    * Three companies are using AI to revolutionize plant-based foods: Climax Foods uses AI to analyze animal-based foods at a molecular level, creating hyper-realistic vegan cheeses with plant-based casein; Meati employs AI to optimize the nutrition of mycelium-based meat alternatives; and NotCo's AI, Giuseppe, mimics the molecular structure of animal products, generating innovative plant-based recipes, such as using pineapple and cabbage to replicate dairy milk. These innovations aim to improve taste, texture, and nutritional value while reducing production costs.




#### **🤖 Digital minds**

  * [Understanding the moral status of digital minds](https://80000hours.org/problem-profiles/moral-status-digital-minds/) (80,000 Hours)

    * 80,000 Hours wants to see more people focusing their careers on the moral status of digital minds, building a field of researchers to improve our understanding of this topic and getting ready to advise key decision makers in the future.

  * [Can AI feel distress? Inside a new framework to assess sentience](https://www.nature.com/articles/d41586-024-03076-z) (Nature)

    * Jonathan Birch's book "The Edge of Sentience" proposes a framework for assessing and protecting potentially sentient entities, from AI to animals, using a precautionary approach based on scientific meta-consensus and citizen panels. The book grapples with philosophical and scientific uncertainties surrounding sentience across various domains, advocating for proportionate protective measures while acknowledging the challenges in definitively establishing sentience in non-human entities.




**🐀 Animals used for research**

  * [Testing toxicity using stem cells and AI](https://www.nature.com/articles/d42473-024-00249-2) (Nature)

    * Researchers at Yokohama University of Pharmacy are developing a system, StemPanTox, that combines stem cells and AI to predict chemical toxicity, aiming to reduce reliance on animal testing. This approach offers more accurate toxicity assessments by analyzing gene expression in human stem cells, overcoming the limitations of species differences in traditional animal models. The technology could lead to safer chemical and drug development while advancing policies toward reducing animal experiments.

  * [How AI is helping to bridge the research gap between animals and humans](https://nachrichten.idw-online.de/2024/09/25/how-ai-is-helping-to-bridge-the-research-gap-between-animals-and-humans) (Nachrichten Informationsdienst Wissenschaft)

    * Researchers have developed an AI model that narrows the gap between animal models and human disease studies by translating molecular patterns from animals, like hamsters with COVID-19, into corresponding human patterns. Unlike other AI efforts aimed at finding alternatives to animal testing, this approach seeks to enhance the relevance of animal experiments for human clinical research by improving the accuracy of disease modeling.

  * [Could AI replace animal research?](https://www.understandinganimalresearch.org.uk/news/could-ai-replace-animal-research) (Understanding Animal Research)

    * AI is increasingly being used to improve the efficiency and precision of animal research, particularly in fields like toxicology, where AI-driven models replicate human biological systems to predict responses to substances, complementing traditional animal testing. While AI shows promise in enhancing data analysis, experimental design, and outcome prediction, it is not yet capable of fully replacing animal models due to the complexity of living organisms; instead, it primarily serves to refine current methods and reduce the number of animals used.




#### **🐾 …and more**

  * [AI Caught In ‘Tug-Of-War’ Between Animal Agriculture And Advocacy](https://plantbasednews.org/news/tech/ai-animal-agriculture-advocacy/) (Plant Based News)

    * AI is creating a "tug-of-war" in animal agriculture, with potential to intensify factory farming or empower animal advocacy efforts. Open Paws founder Sam Tucker argues now is the critical time to direct AI towards compassionate purposes, helping advocacy organizations while pushing for restrictions on AI use in animal farming.

  * [Animals in the machine: why the law needs to protect animals from AI](https://theconversation.com/animals-in-the-machine-why-the-law-needs-to-protect-animals-from-ai-234176)

    * AI has the potential to both help and harm animals, benefiting areas like veterinary care but also facilitating illegal wildlife trade and perpetuating animal cruelty. Australia's renewed Animal Welfare Strategy should address these AI-related risks to ensure technology does not amplify existing animal harms or create new ones.

  * [Tackling Veterinarian Burnout With AI For Good](https://www.forbes.com/councils/forbesbusinesscouncil/2024/09/19/tackling-veterinarian-burnout-with-ai-for-good/) (Forbes)

    * AI tools like LAIKA are being introduced to help veterinarians manage burnout by streamlining tasks such as diagnostics, disease detection, and workflow management. These AI copilots can reduce time spent on routine tasks, allowing vets to focus more on complex decision-making and patient care, ultimately improving work-life balance and reducing stress. While AI offers significant support, ethical considerations and the veterinarian's final judgment remain critical in its implementation.




* * *

📨 That’s it for this edition — as always, please feel free to get in touch at [contact@aiforanimals.org](mailto:contact@aiforanimals.org) with any ideas and feedback!

7

Share
