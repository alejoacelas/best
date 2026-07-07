---
title: "The Paraphrase Project: Designing defense for an era of synthetic biology"
url: https://microsoft.com/en-us/research/story/the-paraphrase-project-designing-defense-for-an-era-of-synthetic-biology
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by biorisk/pessimistic-optimistic-future-biosecurity.md; Microsoft Research on red-teaming DNA-synthesis biosecurity screening"
---

## In the fall of 2023, breakthroughs in generative AI had researchers proclaiming a new era for medicine and healthcare.

In fall 2023, as excitement grew over generative AI’s role in medical breakthroughs, Microsoft’s [Eric Horvitz](https://www.microsoft.com/en-us/research/people/horvitz/) couldn’t shake a nagging concern. The promise was undeniable, but his thoughts kept circling back to one hypothetical scenario: that open-source AI tools could, in theory, be used to reengineer toxins capable of evading existing biosecurity software.

Publication [Strengthening nucleic acid biosecurity screening against generative protein design tools ](https://www.microsoft.com/en-us/research/publication/strengthening-nucleic-acid-biosecurity-screening-against-generative-protein-design-tools/)

That idea became the seed of what would grow into the Paraphrase Project, initially a biosecurity exploration, now the foundation of a landmark paper published October 2 in _Science_.

> “I tend to look out at the AI horizon all the time. And in scanning the horizon, I always reflect on dual use issues,” said Horvitz, Microsoft’s chief scientific officer. “You can design proteins to take on any structures now. What about known toxins?”

This question is what led Horvitz to spearhead the first biological “zero day”: a term borrowed from cybersecurity to describe a previously unknown vulnerability in a computer system. In the realm of biosecurity, the analogy isn’t perfect. This was about preemptively identifying cracks in the system before they could be exploited, not patching an active breach. But it was the closest analogy to what they were doing—probing for hidden vulnerabilities and imagining how future misuse might unfold before it ever has the chance. 

At its core, the [Paraphrase Project](https://www.microsoft.com/en-us/research/project/paraphrase-project/) calls for a shift in how we evaluate biological sequences, moving beyond surface-level identity checks to a deeper, semantic understanding of what proteins actually do. This approach could dramatically improve the safety and reliability of AI-driven biotechnologies, especially as synthetic biology becomes more accessible, Horvitz said. 

Video playback requires cookie consent

* * *

### On the [Microsoft Research Podcast](https://www.microsoft.com/en-us/research/podcast/ideas-more-ai-resilient-biosecurity-with-the-paraphrase-project/), collaborators Eric Horvitz, Bruce Wittmann, Tessa Alexanian, and James Diggans explain AI-powered protein design, explore the Paraphrase Project, and present a new framework for publishing sensitive research.

[](https://www.microsoft.com/en-us/research/podcast/abstracts-september-30-2024/)

* * *

## Inside synthetic biology

Here is an example of how synthetic biology works in practice: A scientist in Boston—or one in Bangalore, Berlin or Buenos Aires—wants to study a protein that could help treat a rare neurological disorder. To do that, they need a strand of DNA that encodes the protein. They send a request to a DNA synthesis company, one of many labs around the world that print custom DNA on demand. Within days, the company ships back a vial of genetic material, ready to be inserted into cells for exploration in a wet lab.

Before that DNA reaches the lab bench, it passes through a digital checkpoint. Biosecurity screening software scans every order for sequences of concern, typically those linked to toxins or pathogens. These tools compare incoming DNA against regulated databases, often maintained by government agencies.

The challenge is that these government databases aren’t curated by sequence. Part of the mission of the International Gene Synthesis Consortium (IGSC) is to curate a sequence database as a shared resource. In 2025 the IGSC spun out the Sequence Biosecurity Risk Consortium (SBRC), which is working with a broad community of experts to create a curated list of sequences that should be caught by screening systems.

As AI tools become more powerful and accessible, the risk grows that someone could design a protein that slips past the screeners. It might look harmless to the software but behave like a toxin once inside a cell. The consequences could range from accidental lab mishaps to deliberate misuse. The safeguards we rely on may no longer be enough.

## Testing the system

To explore this, Horvitz teamed up with [Bruce Wittmann](https://www.microsoft.com/en-us/research/people/bwittmann/), a senior applied scientist at Microsoft with deep expertise in protein engineering and open-source biology tools. Together, they built a pipeline using models like [EvoDiff (opens in new tab)](https://labs.ai.azure.com/projects/evodiff/), which allowed them to generate thousands of synthetic variants of the highly potent toxin ricin. These variants weren’t designed to be more dangerous, but to test the limits of current biosecurity screening systems. 

Researchers discovered it was possible to preserve the active sites of the protein (illustrated by the letters K E S), while the amino acid sequence was rewritten. 

The process was akin to paraphrasing a sentence: the meaning stays the same, but the words change. In this case, the structure and active sites of the protein were preserved, while the amino acid sequence was rewritten. 

To test their designs, Horvitz and Wittmann enlisted the help of two leading DNA providers: Twist Bioscience and Integrated DNA Technologies (IDT). They worked directly with the companies’ top leadership, including CEOs and chief scientists, to evaluate how well existing screening systems could detect the AI-generated variants.

What they found was sobering. The reformulated sequences made their way through existing filters undetected. 

> > “I don’t think we were necessarily surprised that it sailed right through,” Wittmann told Microsoft Research blog. “Anything that can be used for good can be used for bad. But providing a solution helps avoid a knee-jerk reaction that prevents the use of these tools for good.”

Simulation of the reformulated sequences bypassing the existing filters undetected, prior to the red-teaming patch. 

## Protecting the next leap in biology

Blog [When AI Meets Biology: Promise, Risk, and Responsibility ](https://www.microsoft.com/en-us/research/blog/when-ai-meets-biology-promise-risk-and-responsibility/)

The discovery underscored the urgency of expanding the initial study to address a critical question: is a solution possible? Horvitz and Wittmann sought to organize a cross-sector team to take on the challenge, with confidentiality and careful management of information hazards key to their success.

That’s where Jake Beal enters the story. A scientist at RTX BBN Technologies, Beal was tasked with developing the digital safeguards that could catch reformulated toxins before they slipped through. BBN—the research arm of RTX Corporation—has a long history of technological firsts, from helping build the internet precursor ARPANET to sending the first email and pioneering secure communications through quantum-based encryption systems.

As one of the companies that makes biosecurity screening software. BBN’s mission was to bring that same spirit of innovation to the Paraphrase Project.

Beal teamed up with Horvitz, Wittmann, and a tight-knit group of colleagues to shape a response that felt both urgent and deliberate. In the early days of their collaboration, Beal and Horvitz found themselves circling a familiar idea. The threat they were facing didn’t just resemble a biological risk—it felt like a cybersecurity flaw. Horvitz leaned into the analogy. Maybe biosecurity tools needed to be treated like software, constantly updated to stay ahead of evolving threats. He imagined a future where AI safety followed the rhythm of a Windows Update, with patches rolling out in the background, keeping systems resilient without disrupting the flow.

Among the questions Beal asked the coalescing Paraphrase team were: Who can we safely tell? How dangerous is this information? On one hand, the risks needed to be communicated. Transparency was essential for the broader scientific and security communities to understand what was possible and what was vulnerable. On the other hand, too much openness could inadvertently empower bad actors.

But, they reasoned, if someone had the tools and expertise to replicate the experiment within a few hours, they were already close enough to the problem to warrant inclusion.

> “If someone is already in the room, there’s no point in trying to erect a door behind them,” Beal said. “But there’s also no reason to offer an open door to people on the outside.”

To further refine the response effort, Horvitz turned to Microsoft’s top cybersecurity minds. He consulted with Executive Vice President for Microsoft Security Charlie Bell and team to explore best practices for handling zero-day vulnerabilities. The input from these experts helped steer the team toward a framework borrowed from the cybersecurity playbook—a protocol known as the Computer Emergency Response Team, or CERT.

Horvitz appreciated having experienced cybersecurity voices in the room. Their involvement gave the work a sense of grounding and made it easier to move forward with confidence.

By developing updated detection algorithms trained to catch new variants, they showed the screening systems could be adapted to detect reformulated threats. It was a proof of concept that underscored both the vulnerability and an approach to updating the existing biosecurity screening software.

Simulation of patched screening systems detecting reformulated threats. 

## The path forward

For the DNA synthesis companies involved, the outcome brought a sense of relief. While access to DNA sits at the far end of a long chain of events in any hypothetical biosecurity breach, knowing the vulnerabilities have been identified and patched is reassuring. 

“The public at large wants to be able to trust that companies using these amazing technologies to build new products and services are safe and effective, and have their best interest in mind,” said [James Diggans (opens in new tab)](https://ebrc.org/diggans-james/), vice president of policy and biosecurity at Twist Bioscience and chair for the IGSC. “A big piece of this is making sure you’re a responsible steward of the technology you’re developing.”

What began as a curiosity and concern raised by Eric Horvitz has culminated in a _Science_ paper marking firsts in AI and biosecurity. The study demonstrates how artificial intelligence can “paraphrase” proteins—reworking amino acid sequences with the aim of preserving structure and, potentially, biological function, while altering form. It’s a concept that feels almost linguistic, but the implications are deeply molecular. Alongside this, the study establishes a protocol for red-teaming biosecurity screening tools, reports a global response to an AI-enabled biosecurity zero-day, and presents a framework for managing information hazards—now recognized by _Science_ as a model for publishing sensitive research in a way that balances openness with caution.

But researchers are clear that this is only the beginning. As technologies continue to advance, protective measures must evolve with them. The work will need to be revisited, refined, and reinforced to ensure that innovation does not outpace safety.

It also represents a budding community of scientists committed to working on the defensive tools and models necessary to keep these technologies safe at scale. And it’s a reminder that in the age of intelligent design, understanding function is just as vital as recognizing form.

> “This is about what the sequence does, not just how it looks,” Horvitz said. “Even if two sequences look different, they might still do the same thing—like cause illness or perform the same job in a cell.”

* * *

_**Paraphrase Project contributors:**_ Bruce J. Wittmann (Microsoft), Tessa Alexanian (The International Biosecurity and Biosafety Initiative for Science/IBBIS), Craig Bartling (Battelle), Jacob Beal (RTX BBN), Adam Clore (Integrated DNA Technologies Inc/IDT), James Diggans (Twist Bioscience), Kevin Flyangolts (Aclid), Bryan T. Gemler (Battelle), Tom Mitchell (RTX BBN), Steven T. Murphy (RTX BBN), Nicole E. Wheeler University of Birmingham), Eric Horvitz (Microsoft)

## Explore more

  * ###  [Researchers find — and help fix — a hidden biosecurity threat ](https://news.microsoft.com/signal/articles/researchers-find-and-help-fix-a-hidden-biosecurity-threat/)

Microsoft Signal Blog, 2025

  * ###  [The Age of AI in the Life Sciences: Benefits and Biosecurity Considerations ](https://nap.nationalacademies.org/catalog/28868/the-age-of-ai-in-the-life-sciences-benefits-and)

National Academies of Science, Engineering, and Medicine, 2025

  * ###  [Disseminating In Silico and Computational Biological Research: Navigating Benefits and Risks ](https://doi.org/10.17226/29174)

National Academies of Science, Engineering, and Medicine, 2025

  * ###  [Protecting scientific integrity in an age of generative AI ](https://www.pnas.org/doi/10.1073/pnas.2407886121)

Proceedings of the National Academy of Science, 2024




__**Story contributors:**_ _Tetiana Bukhinska,__ _Lucas Clark,_Jeremy Crawford__ , __Kristina Dodge,_Chris Duryee___ , __David Celis Garcia, Alyssa Hughes,_ Lindsay Kalter, Jeremy Mashburn_, _Sarah McGee,_Amanda Melfi,_Matthew McGinle___ y, _Wil Morrill,__Joe Plummer,_ __Brenda Potts__ , _Amber Tingle_ , _Shauna Whooley_

_Originally published on October 6, 2025_

### Other resources

[Microsoft Research Podcast](https://www.microsoft.com/en-us/research/podcast/)

[Microsoft Research Blog](https://www.microsoft.com/en-us/research/blog)

[Microsoft Research Forum series](https://www.microsoft.com/en-us/research/story/sep-2024-brief/)
