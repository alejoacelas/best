---
title: "A primer on why microbiome research is hard"
author: "Abhishaike Mahajan"
url: https://owlposting.com/p/a-primer-on-why-microbiome-research
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by biorisk/pessimistic-optimistic-future-biosecurity.md; primer relevant to biosurveillance/detection"
---

[Primers](https://www.owlposting.com/s/primers/?utm_source=substack&utm_medium=menu)

# A primer on why microbiome research is hard

### 6.3k words, 29 minutes reading time

[](https://substack.com/@abhishaikemahajan)

[Abhishaike Mahajan](https://substack.com/@abhishaikemahajan)

Jun 17, 2024

94

8

11

Share

[](https://substackcdn.com/image/fetch/$s_!Nl2-!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F36aea7bb-ccbc-4535-9b16-e98b5fabcb45_2912x1632.png)

  1. [Introduction ](https://www.abhishaike.com/i/144562568/introduction)

  2. [Why is it hard? ](https://www.abhishaike.com/i/144562568/why-is-it-hard)

     1. [Difficulty of characterization ](https://www.abhishaike.com/i/144562568/difficulty-of-characterization)

     2. [Causal links are hard to establish](https://www.abhishaike.com/i/144562568/causal-links-are-hard-to-establish)

     3. [Unknown microbiota](https://www.abhishaike.com/i/144562568/unknown-microbiota)

     4. [Therapies are complicated](https://www.abhishaike.com/i/144562568/therapies-are-complicated)

  3. [The initial promises](https://www.abhishaike.com/i/144562568/the-initial-promises)

     1. [Metabolic conditions](https://www.abhishaike.com/i/144562568/metabolic-conditions)

     2. [Tumor microbiomes ](https://www.abhishaike.com/i/144562568/tumor-microbiomes)

     3. [Gut-brain axis](https://www.abhishaike.com/i/144562568/gut-brain-axis)

  4. [Conclusion + TLDR](https://www.abhishaike.com/i/144562568/conclusion-tldr)




# Introduction 

Microbiomes are, as far as cutting-edge science goes, old news. Knowledge that the microbiome exists and is involved in digestive process has been known for over a half-century. But, with the discovery of _H. Pylori’s_ role in causing peptic ulcers and the subsequently awarded 2005 Nobel Prize in medicine for it, the microbiome began to be viewed differently: something that is intertwined with the neurological, immunological, and metabolic health of its host. And perhaps something that represents a new therapeutic target entirely. Yet, over the course of the last 20 years, the microbiome field has little to show for it, despite billions in funding, thousands of published papers, and dozens of spun-up companies.

As far as I can tell, no scientific deceit was committed. No scandalous, Theranos-esque, or Alzheimers-esque fraud caused this lack of progress. Microbiome research is literally just **hard**. Why? This essay will attempt to explain that. 

This all isn’t to say no utility in microbiome research has been found. There has been one extraordinary success in the field: [fecal transplants for recurrent ](https://www.health.harvard.edu/blog/stool-transplants-are-now-standard-of-care-for-recurrent-c-difficile-infections-2019050916576)_[Clostridioides difficile (C. Diff)](https://www.health.harvard.edu/blog/stool-transplants-are-now-standard-of-care-for-recurrent-c-difficile-infections-2019050916576)_[ infections](https://www.health.harvard.edu/blog/stool-transplants-are-now-standard-of-care-for-recurrent-c-difficile-infections-2019050916576). Whereas this microbiome-aware treatment yields a near-perfect cure rate, [competing approaches had a dismal 20% cure rate](https://academic.oup.com/cid/article/40/11/1586/444708). Even more interestingly, knowledge of microbiomes have led us towards large-scale ecological engineering by [leveraging the sexual differentiation influence that the Wolbachia microbe has on mosquitos.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4027352/) But these successes are largely isolated. 

Studying the microbiome is incredibly challenging. You’re trying to observe a living, breathing ecosystem that will react to the most minute of perturbations, has an astonishing level of diversity, and can entirely change from day-to-day. And you’re trying to connect the total collective actions of all this to some functional impact on the human it lives in. And, ideally, you’d also like the ability to directly modify**** aspects of this ecosystem to change this functional impact! All hard things to do. **We’ll discuss all these more in depth in this essay.**

But as with all difficult things, some very clever people did manage to make some headway. We mentioned _C. Diff_ infections, which was one of the major achievements in the field and spurred further investigation into its clinical potential. **We’ll also discuss three of the highest-potential areas in microbiome analysis, and where they ended up.**

Lot of material to cover! Let’s start. **One quick note: this essay will primarily focus on gut microbiomes, as that is where the field is most developed.** Many of the points I’ll make will apply to studies that concern themselves with microbiomes in general, but the discussion will primarily focus around the gut.

# Why is it hard? 

## Difficulty of characterization 

One of the more fundamental challenges we face here is that extracting out the microbiome **at all** is hard! 

We start off with a sample collected from the biome of interest. For the mouth, it'd be a swab of your cheek, for the gut, it'd be a stool sample, and so on. But how do we go about characterizing what bacterial, viral, fungal, and so on species are in this sample? 

The earliest, scalable method of doing so was called ‘16S sequencing’, which attempted to read a set of genes commonly referred to as ‘16S rRNA genes’, or just 16S, which, when transcribed, [yields a subunit of a ribosomal structure](https://en.wikipedia.org/wiki/Prokaryotic_small_ribosomal_subunit). **The set of genes encompassing 16S had been understood for decades as ‘taxonomic identifier’ genes; something that alone poked at the phylogeny, or evolutionary history, of a particular species.** In turn, sequencing these genes in a microbe colony allowed researchers to learn all species contained in that particular colony! Unfortunately, as with any attempt to simplify biology, this turned out to have a variety of hidden flaws. [16S genes apparently could undergo horizontal gene transfer](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6677816/) (bacterial genes being transferred to neighboring bacteria), meaning microbes in your sample could very often **be contaminated by its neighbors.** This in turn meant that some species, **even when not present in a sample** , [could still be detected by bioinformatic pipelines using 16S sequencing as input](https://www.sciencedirect.com/science/article/abs/pii/S0168160517302842). Past the error rate of the test itself, 16S sequencing were more accurate for some taxonomies of microbes than others, some could be well characterized by it, others couldn’t be, which leads to massive selection bias in downstream analysis. This was one of the earliest tests offered at consumer microbiome companies ([including the infamous uBiome](https://en.wikipedia.org/wiki/UBiome)).

But, for the most part, 16S sequencing was replaced with two methods, both of which are the current dominant forms of microbiome characterization: **shotgun metagenomic sequencing** and **metatranscriptomic sequencing** and. As the names imply, the former is concerned with sequencing all DNA snippets in your sample, and the latter with all RNA snippets. This methods, enabled by the Next-Generation-Sequencing (NGS) revolution, allows us to characterize, in bulk, the exact evolutionary history (shotgun metagenomics) and ongoing behavior (metatranscriptomics) of our sample. Unlike 16S, these methods were generally far better at characterizing microbes across domains of life.

Unfortunately, these methods still have their own issues.

Let’s start with shotgun metagenomic sequencing — called ‘shotgun’ because it is untargeted sequencing of all DNA found in a sample. While going this route over purely sequencing 16S allows us to view the genetic landscape of our sample fairly well, practical interpretation of the results are difficult. The sheer diversity of the microbiome is absolutely enormous, and very little of it has been catalogued. **As such, most DNA sequences derived from a metagenomic sequencing run will, in all likelihood, be unable to be perfectly matched to any catalogued species.** This isn’t a problem in of itself, phylogenetic relationships can be derived from matching up unknown sequences with reference sequences in order to understand how unknown sequences ‘fit’ into the broader picture. **[But this invariably opens the door to bias.](https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-021-01059-0)** Specifically, the the process used to perform this ‘fitting’ can dramatically alter what microbes are reported as present in the final result, with the results becoming far worse with poorly studied taxonomies of life, such as rare microbes. As such, multiple parallel metagenomic studies of the exact same sample may arrive to dramatically different conclusions of the species present within that sample,[ unless they rely on the exact same algorithms and reference databases.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6716367/)

Metatranscriptomics share basically all of the same issues as metagenomics has, since it also relies on references to characterized sequences. There is one more major problem in that [most of the harvested RNA is ribosomal RNA (90%~)](https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2019.00904/full), which is largely useless for understanding the transcriptomic profile of microbes. So our problem with detecting low-population microbes becomes even **more** of an issue here!

One quick note: we may try to mitigate some of these issues by first culturing the microbes before sequencing them, encouraging low-population microbes to increase in number. This turns out to be an ill-fated approach in practice.[ Many microbes have hyper-specific living conditions](https://www.nature.com/articles/nature17645) and will refuse to grow — or outright die — outside of their natural habitat (which happens to be you). People are working on fixing this, but it seems quite aways from actually being reliable. 

**And we haven’t even mentioned that the long tail of everything before sequencing readout also is a source of bias!** [Everything from genetic material extraction to sequencing machine used](https://journals.asm.org/doi/10.1128/spectrum.00090-22) to even the [storage conditions](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8510183/) can yield systemic differences in the characterization of a microbiome sample.[ Moreover, contamination of microbe samples is also a huge problem](https://www.nationalgeographic.com/science/article/contaminomics-why-some-microbiome-studies-may-be-wrong), **which can come from as innocuous of a place as the kit used for genetic material extraction**. 

A more skeptical reader may, at this point, claim that I’m overstating things here a bit. After all, we do DNA and RNA sequencing for human cells all the time, and seem to be happy with our results there. Aren’t many of these problems alleviated by simply following the same protocols for human samples? For the most part, no, microbes are genuinely **much** harder. Reference alignments are less of a deal for human cells, since we’ve largely characterized the full human genome, so we can trust readouts more. This ability to rely on references means that DNA/RNA contamination is less of an issue, since the reference sequences will save us if we do accidentally sequence non-human material. [Human cells also produce proteins slower than bacteria](https://www.stjude.org/media-resources/news-releases/2023-medicine-science-news/humans-vs-bacteria-differences-in-ribosome-decoding-revealed.html), meaning less ribosomal RNA, meaning less readout noise. Finally, the biomass of any given species of a microbe in a sample is astonishingly low — given the immense diversity of the microbiome — whereas human tissue is far more homogenous other than cell-type differentiation, leading to higher fidelity readouts.

All of this wraps up to a pretty worrying message: **many microbiome studies may be fundamentally incorrect in their takeaway message due to nearly unavoidable problems in sample storage, sample preparation, sequencing, and sequence alignment**. 

But let’s not get ahead of ourselves. Let’s say we’re better than the literature and take extreme pains to ensure we’re doing things **right**. We take a sample of some microbiome (say, our gut), store it well, avoid contamination, sequence it correctly, align it correctly, and get to a fully accurate view of the genomic and transcriptomic landscape of our microbiome. 

What do we do with the readout? Well, aren’t there good microbes and bad microbes? Shouldn’t our first check be to see if we have good ones, and none of the bad ones? Maybe check if the transcriptome matches up with people with gut microbiomes? 

All decent ideas! But there is a minor issue to be aware of. 

## Causal links are hard to establish

There are two sides of the microbiome literature. 

One paints a relatively rosy picture of the connection between certain species of a microbiome and diseases. So-called ‘dysbiosis’, or irregularities/abnormalities in ones microbiome, became an increasingly popular view of how to view the microbiome. Associative studies showing the connection between [atherosclerosis](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7146472/), [metabolic disorders](https://www.nature.com/articles/s41579-020-0433-9), and the like, to certain species of gut microbes have only further cemented this. There are dozens of papers in this realm, many of them gathering thousands of citations, all with effusively positive conclusions on the future of the field in clinical practice.

The other side points to two deeply unfortunate facts**. One, there is no such thing as a ‘normal’ microbiome.** [The microbiomes between otherwise healthy people can strongly differ](https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2022.917926/full) and [even change over time](https://www.cell.com/cell-host-microbe/fulltext/S1931-3128\(14\)00346-1); while there are some species whose overgrowth is clearly bad, there are very few hard rules.**And two, it is very much unclear how much a microbiome is ‘chasing’ a certain phenotype (e.g. autism, T2D, etc) versus actually causing it.** [After all, alterations in microbes don’t only correlate with disease, but also with ethnicity, age, medication intake, vegetable intake, whether they are vegan or not, and ](https://www.nature.com/articles/s41586-020-2881-9)**[even whether they have a dog](https://www.nature.com/articles/s41586-020-2881-9)**[.](https://www.nature.com/articles/s41586-020-2881-9) And most studies in the this space are purely associative with regards to disease, primarily comparing the microbiomes of diseased patients with healthy ones. 

Given these two, how can you possibly assess causality of the microbiome doing anything at all? Well, application of a therapeutic agent to the microbiome may lead us somewhere. Enter human fecal microbiome transplants, or FMT. 

**FMT represent the strongest piece of evidence with regards to the causal impact of the microbiome on physiological state.** This treatment is exactly what it sounds like; transferring the fecal matter of one (healthy) human into another (diseased) human, usually either via pills or colonoscopy, allowing the microbes contained within to colonize a new gut. This way, we needn’t grapple with questions on good/bad microbes or what they are actually doing! Unfortunately, this is also rarely done outside of well-established use-cases — of which there is basically only one: _C. Diff_ infections. [This is partially due to the fuzzy regulations regarding FMT](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8455422/), but also the[ immense complexity in administering the therapy at all.](https://www.frontiersin.org/articles/10.3389/fmedt.2022.961569/full) So while there are some studies using human FMT to study causality, which we’ll go over more deeply in the last few sections, it makes up a relatively small fraction of the literature. 

There is another way to assess causality: [mendelian randomization](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7614635/), or MR. In recent years, MR has leaked its way into the microbiome literature, allowing researchers to make strong claims about the **causal** impact of the microbiome on disease, while also still relying on non-FMT, observational studies in humans. The results of these MR studies, unfortunately, remain hazy in my opinion, even though there’s plenty of papers claiming to establish causality. [For example, while a human MR study between microbiome and longevity found that some microbes were causative of longer lifespans (with pretty small correlations),](https://www.nature.com/articles/s41598-023-31115-8.pdf) **the results didn’t transfer well from European to Chinese population.** How many other failure modes are like this in the microbiome literature? Relatively few studies attempt to steelman their own conclusions, so it’s hard to ascertain. Also, even when these studies are done, and singular species of interest are found as protective/harmful, one should recall the earlier discussion on difficulty of microbiome characterization! [For example, the gut microbe ](https://www.sciencedirect.com/science/article/abs/pii/S1075996422000324)_[Bacteroides dorei](https://www.sciencedirect.com/science/article/abs/pii/S1075996422000324)_[has become increasingly recognized for its role in heart conditions and T1D.](https://www.sciencedirect.com/science/article/abs/pii/S1075996422000324) But, this microbe _also_ has a [close taxonomic relationship with ](https://www.sciencedirect.com/science/article/abs/pii/S1075996422000324)_[Bacteroides vulgatus](https://www.sciencedirect.com/science/article/abs/pii/S1075996422000324) , _a far more innocuous gut microbe, making it hard to identify at all! While replication certainly helps assuage our concern about this issue, one-off studies should be looked at with a critical eye. 

On a more anecdotal level, I know from personal experience that accurate causal inference is **hard**. The theory goes incredibly deep, and there are tons of failure modes. While MR is certainly a step up from purely associative studies, I’m immediately skeptical of the whole direction. [Given that the environment is the dominating factor — not host genes — in determining the microbiome](https://www.nature.com/articles/nature25973#:~:text=Taken%20together%2C%20our%20results%20demonstrate,after%20accounting%20for%20host%20genetics.), using genetic instrumental variables just feels doomed. 

Well, okay. Assessing causality with human FMT is hard to do from a regulatory perspective, and MR is potentially leading us astray. How about relying on animal FMT to assess causality? It’s a decent idea, but still problematic. 

[The physical structure, digestion rate, pH, and glycan profiles of a stomach dramatically differ between human and animals.](https://link.springer.com/article/10.1007/s00018-017-2693-8) This has functional impacts! [Entire species of microbes that can survive in humans cannot in mice, and vice-versa](https://pubmed.ncbi.nlm.nih.gov/34118462/). While there certainly is overlap in genus, the difference mounts up as we critically interrogate individual strains. [There is also an interesting essay I found about how mice naturally engage in coprophagy, or eating their own feces, and their microbiome has likely adapted for this!](https://chrismasterjohnphd.substack.com/p/the-greatest-error-in-microbiome) While this is only a theory, and not backed up by a paper, it is interesting to consider that even behavioral differences between animals and humans could lead to downstream impacts on their microbiome. [Using animals more closely related to humans, such as pigs or primates, will likely alleviate this problem](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9775123/), but is challenging to scale in any meaningful way. 

Okay, learning what’s actually in the microbiome is hard, and learning what the microbiome is actually doing is hard. What else is the issue?

## Unknown microbiota

[Despite decades of study, a substantial fraction of the microbiome remains ](https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-019-0667-z)**[unable to sequenced in any meaningful way.](https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-019-0667-z) **

Low-abundance taxonomies of microbes are where our minds may jump to when we consider this, as high-throughout, sequencing-based approaches cannot easily discover them (given that they are often not included in reference databases). While directly cultivating such microbes is a possible solution, this is also not a great fix as we discussed earlier, as some microbes are resistant to being grown outside of their natural environment. As the fields collection of reference genomes grow, the problem of low-abundance microbes diminishes, [but, as it stands, the current range of ‘un-mappable genetic sequences’ is around 10% (optimistically).](https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-019-0667-z) While this is a step up from the previous numbers, which were closer to 30% to 50% a decade ago, we’re still quite far from having a complete picture of the microbiome. 

**But this section actually has little to do with low-abundance microbes!** Instead, there is a much deeper problem. While we’ve been politely using the words ‘microbes’ throughout this essay, realistically, what _most****_ people are studying are the bacterial component of a microbiome. **The fungal and viral components, or the ‘[mycobiome](https://academic.oup.com/femsre/article/41/4/479/3738183?login=false)’ and ‘[virome](https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964\(22\)00294-8/fulltext)’, of the whole system are largely entirely left alone.**

That 10% of un-mappable sequences discussed above is an immense understatement of the true unknown set of species being missed, because fungal and viral genomes are quite small! This ties into why characterizing these domains of life is difficult, the smaller the genome, the more challenging it to accurately tie it back to a characterized species/genus/taxonomy. And the results from bacterial microbiome papers don’t seem to cleanly translate to understanding the behaviors of gut fungal/viral colonies either, **different behaviors entirely are observed amongst them**. For example, [there seem to be a lack of ‘core’ species in the mycobiome](https://academic.oup.com/femsre/article/41/4/479/3738183?login=false) as time passes, very much unlike the bacterial microbiome, which does display a high degree of stability post-childhood. Moreover, there is a high degree of interaction between these domains, [with bacteriophages being able to dramatically alter the behaviors and compositions of nearby bacteria](https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964\(22\)00294-8/fulltext) (and likely fungi as well!). 

**Realistically though, how important are understanding these territories of life?** Most microbiome papers only attempt to sequence the bacterial components, so much of the historical literature cannot be trusted upon to gauge the individual impact of the virome or mycobiome. [However, there is evidence to suggest at least the virome is a crucially important aspect of fecal microbiome transplants (FMT):](https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/advs.202301097)

One angle of research supporting the role of the virome is the association between efficacy and overlapped viral communities. Studies[17,121,127] of recurrent CDI indicated that recipients who benefited from FMT had an increased relative abundance of Microviridae and a decreased abundance of Caudovirales. These results suggested that the Microviridae family and Caudovirales order potentially played a pivotal role in the efficacy of FMT. Moreover, Broecker et al.[128] observed that stable bacteriophages remained present for at least 4.5 years following FMT and were better correlated with successful FMT than bacterial communities. The negative correlation between recovery of the virome and CDI recurrence can further certify the vital role of the virome in FMT. For example, one study[121] reported that CDI patients who only had restored bacterial communities suffered from disease recurrence. In subjects with metabolic syndrome who did not respond to FMT, the differences between the viral communities shared by the recipient and the respective donor were greater.[124]

While the mycobiome is even more understudied than the virome, [as sequencing it is far more complicated](https://www.nature.com/articles/s41579-018-0116-y), there is[ evidence suggesting a similar level of interplay between it and bacteria](https://genomemedicine.biomedcentral.com/articles/10.1186/gm467), implying that efficacy of FMT is also partially tied to it. 

Given the lack of insight into the bacterial, viral, and fungal elements of the microbiomes, **performing FMT** **is akin to giving patients medications which contain (a small amount of) unknown active ingredients.** Outside of the raw danger of performing FMT on patients, [which has been an issue before](https://www.cidrap.umn.edu/fecal-transplant/fda-warns-about-infections-linked-fecal-microbiota-transplants), this also means that interpreting the results of microbiome transplants is incredibly hazy, as the **[same underlying therapeutic could be composed of radically different elements based on the donor](https://gut.bmj.com/content/69/3/502). **To be fair, there are efforts to fix this. [There is ongoing work in next-generation-FMT’s](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8039740/), such as ones that rely on specifically-selected-for strains or metabolic byproducts of a microbiome, instead of the raw contents microbiome itself, increasing both reliability and safety. But as always, very much early days.

## Therapies are complicated

As we’ve stated previously, the thrust of a lot of microbiome research is not to simply understand the microbiome, but also to also alter it in clinically meaningful direction. How is this done in practice? 

FMT is the typical method for doing this. However, when we previously discussed FMT in the context of establishing causality, we naively accepted that FMT **does** in fact change the microbiome and does so in ways that are predictable and sustainable. 

Is that actually the case?

**Now, FMT does alter the microbiome, that much has been confirmed.** However, the extent and durability of these changes can vary substantially depending on factors such as the donor’s microbiome, [the pre-existing state of the recipient's microbiome, ](https://www.nature.com/articles/s41591-022-01913-0)**[and](https://www.nature.com/articles/s41591-022-01913-0)**[ the donor-recipient microbiome compatibility](https://www.nature.com/articles/s41591-022-01913-0). Moreover, even the way FMT is administered — whether that’s the antibiotic regimen used to prepare patients for FMT or how many times FMT is repeated — can modify the impact of it on the patient. **And all these variables-to-take-into-account don’t have correct answers on how to deal with them, they are simply** _**known**_**to be a factor!** I’m not giving many exact details here, and that’s because it’s complicated, the whole subject is just filled from top-to-bottom with nuances. There is a great Cell review paper on the whole topic [here](https://www.cell.com/cell-host-microbe/pdf/S1931-3128\(23\)00125-7.pdf), I highly recommend reading that paper if interested in this specific topic. The main takeaway here is that even if a researcher ([or even laymen doing DIY FMT](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7359198/)) performs FMT and finds positive/negative results, **the minute details of exactly** _**how**_**they did it matters a lot.** This is a big deal! While FMT may very well be transformative for a lot of conditions, we still don’t have a great grasp on how to administer it ‘correctly’. 

Let’s take a big, big step back from something as complex as FMT for a second. How about just focusing on diet? Are those sufficient to alter a microbiome?

Well, diet does influence the microbiome, that’s been known for over a decade now. [Additions of things like fiber, polyphenols, probiotics, and so on do cause gut microbiome shifts in adult humans.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8321864/) However, this is missing the full picture: **[dietary changes do not seem to reliably alter the microbiome permanently](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7266695/)**. In other words, while sudden changes to one’s diet do alter colony composition ([as fast as within 24 hours](https://www.nature.com/articles/nature12820)), the microbiome quickly ‘snaps back’ to its usual state **even if the diet is maintained for over a year!** This implies that modifying microbial compositions cannot be done through passive changes of their energy sources (diet), but require necessitate forced recolonization efforts, as is done with FMT. Given the complexity we’ve seen with using FMT at all, this is an unfortunate result.

To sum it up, we don’t fully understand the therapeutic target (microbiome), the therapy (microbial modification), and the delivery of the therapy (FMT). 

Microbiomes are hard!

# The initial promises 

Despite the difficulty of working with microbiomes, research on it has continued for decades, researchers desperately trying to find a clear clinical target. But after several decades of work, the primary established utility of microbiome transplants is still only for _C. Diff_ infections, along with IBD-esque disorders, [though the success rate there is dramatically lower than it is for ](https://www.thelancet.com/journals/langas/article/PIIS2468-1253\(23\)00441-7/abstract#:~:text=your%20institutional-,Summary,small%2C%20phase%202%20clinical%20trials.)_[C. Diff](https://www.thelancet.com/journals/langas/article/PIIS2468-1253\(23\)00441-7/abstract#:~:text=your%20institutional-,Summary,small%2C%20phase%202%20clinical%20trials.)_[specific conditions](https://www.thelancet.com/journals/langas/article/PIIS2468-1253\(23\)00441-7/abstract#:~:text=your%20institutional-,Summary,small%2C%20phase%202%20clinical%20trials.). 

**As of June 2024, there are only two FDA-approved microbiome therapeutic. And zero for non-C. Diff conditions.**

What happened to everything else that the microbiome field has tried to tackle? Let’s go over three. There’s a lot more than just these, but these are ones that will often pop up in the literature. 

## Metabolic conditions 

There was strong theoretical evidence, pretty early on, that there was interplay between metabolic conditions (T2D, obesity, cardiac conditions, etc) and the hosts microbiome. After all, [if the microbiome is heavily involved in metabolic signals](https://gut.bmj.com/content/70/6/1174), it isn’t a big stretch to imagine that directly altering the microbiome **should** yield improvements for metabolic conditions. The confirmation that there [were microbiota differences between healthy patients and patients with metabolic diseases](https://onlinelibrary.wiley.com/doi/full/10.1111/joim.12508) lent some further credence to the theory. 

Unfortunately, the theory hasn’t borne out well, the results are mixed-to-negative for human applications.

[One paper that covered 3 human FMT studies had this to say:](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6835402/)

Studies reported mixed results with regards to improvement in dysglycemia metabolic parameters. Vrieze, et al. [40] and Kootte, et al. [41] reported that peripheral insulin sensitivity (rate of glucose disappearance, RD) increased at 6 weeks in patients receiving donor FMT versus patients receiving the placebo control. Hepatic insulin sensitivity (endogenous glucose production, EGP) was further assessed in two studies but no statically differences were found. Kootte, et al. [41] observed a lower HbA1c level in patients who received donor FMT at 6 weeks than in patients receiving the placebo control. However, this study indicated the patients who received donor FMT did not show difference in HbA1c or insulin sensitivity (RD) after 18 weeks [41]. This finding suggests that the observed short-term benefit of FMT on dysglycemia was not maintained long-term. 

…

Included studies demonstrated no differences between patients receiving donor FMT and patients receiving placebo with regards to cholesterol profile, including the levels of total cholesterol, HDL-C, LDL-C and TG. Vrieze, et al. [40] and Kootte, et al. [41] also reported no significant differences on BMI between patients receiving donor FMT and patients receiving placebo followed at 6 weeks.

**So, while there are improvements in parameters of interest in the short term ( <6 weeks), the effect disappeared over a longer time horizon.** Another meta-study looked at nine human FMT studies and found similar results for BMI, cholesterol biomarkers, and a few others: 

This meta-analysis investigated studies using FMT for the treatment of obesity and metabolic syndrome and basically concluded that the treatment was effective in the short term. At 2 to 6 weeks after the intervention, mean HbA1c and mean fasting glucose were lower in the FMT group than in the placebo group, although this was a small mean difference. However, mean insulin levels were significantly lower in the FMT group, suggesting a significant improvement in insulin sensitivity.

…

We found no difference between the FMT and control groups through analysis of the mean differences in clinically significant parameters ([Fig 4](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0288718#pone-0288718-g004)) [past 6 weeks], except for a slight decrease in HbA1c at 12 weeks in the FMT group compared to the placebo group in the study by Yu et al. [[35](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0288718#pone.0288718.ref035)].

There certainly is **something** here! Improvements in baseline parameters in the short term still is something. **But it does seem to be demonstrably difficult to permanently alter the metabolic aspects of the microbiome,** **even if you use FMT**. This problem shows up a fair bit in the microbiome literature; while initial results may seem good, many FMT’s don’t seem to ‘take’ over the long term. It is still, as of yet, unclear why this may by the case, but I suspect it is strongly related to what we discussed in the ‘Unknown microbiota’ section. 

## Tumor microbiomes 

Warning, we’re doing a minor deviation from gut microbiomes here!

It is well established that certain types of cancers can be triggered by certain microbiota interactions, [such as ](https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1006573)_[Helicobacter pylori](https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1006573)_[ for stomach cancer](https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1006573), allowing a clinician to have a relatively easy diagnostic proxy of risk of cancer from microbiome analysis alone. However, it was generally thought that this, and a few others, were isolated cases. For almost every other type of cancer, a much more invasive biopsy was required to confirm cancer. This was up until a 2020 Nature paper from _Knight et al_. titled ‘[Microbiome analyses of blood and tissues suggest cancer diagnostic approach](https://www.nature.com/articles/s41586-020-2095-1)’ that found, as the title implied, that there was a distinctive microbial signature found **within** **tumors.** Insanely, this microbial signature was so distinct, that it could even distinguish **between different types of** **cancer with a near 100% accuracy rate.**

**If it was so distinct, why hadn’t we stumbled across it before?** Well, microbe populations in general are extremely low biomass and thus hard to **discover** through sequencing alone, much less characterize. There are of course a few counterexamples to this: namely the gut and skin. But a microbiome anywhere else is hard to stumble across, you need to be intentionally looking for non-human DNA (microbes). This paper was simply the first that looked for it, and also took great pains to ensure the underlying sequence data was accurate — reminding readers that they removed the vast majority of microbial reads they found (>92%) to ensure they only used high confidence readings. **Why is this paper useful?** Well, the DNA of these tumor microbiomes actually leaked into the bloodstream, allowing for cancer detection by looking for circulating microbial DNA! This would potentially be a whole new type of diagnostic test; allowing patients to avoid a painful, expensive, and invasive biopsy. This already exists and has a name, so-called ‘[liquid biopsies](https://en.wikipedia.org/wiki/Liquid_biopsy)’. While other companies have been operating in this space for years, most of them are looking for shed-off tumor DNA circulating in the bloodstream as indication of cancer. This paper implied that we could instead rely on the distinctive microbes found alongside certain cancers. **In other words,** **don’t focus on the tumor, focus on the microbiome that grows within the tumor.** It was hard to tell what advantages this offered over pure tumor DNA, but it was still an interesting proposition with lots of room to explore. 

It was a very clever paper with clear clinical implications and, obviously, immediately became famous. As of today, it’s racked up 800+ citations, and the dataset that it used was used for dozens of follow-up papers, [with one work even discovering a tumor mycobiome](https://www.cell.com/cell/fulltext/S0092-8674\(22\)01127-8)! The paper authors eventually founded a company on this whole microbiome-sequence-for-liquid-biopsy approach, naming it [Micronoma](https://micronoma.com/), which continues to exist today.

**Around three years later, the validity of these results was called into question.**

This skepticism came in the form of a pre-print paper titled ‘[Caution regarding the specificities of pan-cancer microbial structure](https://pubmed.ncbi.nlm.nih.gov/37555750/)’ from _Gihawai et al._ , **claiming that the analyses within the original paper were so deeply flawed that the findings are entirely incorrect.** The vast majority of the ‘microbial DNA’ that the paper had identified were, according to the authors, human in origin or the result of environmental contamination. No fraud had been done, merely incorrect analyses of the sequencing data (probably). 

The authors of the original paper (_Knight et al)_ quickly responded to it [with their own paper](https://www.biorxiv.org/content/10.1101/2023.02.10.528049v1), which had a funnily grandiose line in its abstract:

Therefore, despite numerous, high-impact, peer-reviewed research papers that either validated our conclusions or extended them using data we released we carefully considered criticism raised by Gihawi _et al_. about potential mishandling of contaminants, batch effects, and machine learning approaches…

The authors behind _Gihawi et al._ considered this response, and published another paper, this time peer-reviewed, with an even stronger title: ‘[Major data analysis errors invalidate cancer microbiome findings](https://journals.asm.org/doi/full/10.1128/mbio.01607-23)’. 

A rebuttal to this was, once again, mounted by _Knight et al._ within the same day, which [primarily lives on a Github repository](https://github.com/gregpoore/tcga_rebuttal/tree/master).

The rebuttal research trail here ends. The only response from the skeptics I could find was in this response by the PI to a request for commentary of the Github: 

[](https://substackcdn.com/image/fetch/$s_!iLB9!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feadceb68-1856-4a42-b13b-2c06a64292e6_1228x710.png)From [here](https://x.com/gilbertjacka/status/1686408777007030272)

Salzberg did release a 2024 paper indirectly targeted at this whole concept, in which he states that cancer sequencing datasets (which the original cancer microbiome paper used) **[have no evidence of containing microbial colonies if you do the correct analysis](https://www.biorxiv.org/content/10.1101/2024.05.24.595788v1.full.pdf)**[.](https://www.biorxiv.org/content/10.1101/2024.05.24.595788v1.full.pdf) Similarly, the tumor microbiome authors **also** released a general paper in 2024, claiming that there are, in fact,**[such a thing as distinct microbial colonies if you do the correct analysis](https://www.nature.com/articles/s41388-024-02974-w).**

Uh…so who is right?

I have no clue. Honestly, the fight becomes stranger the more you dig into it. Some points that each side raise feel entirely irrelevant; such as hyper-focusing on the correctness of the 2020 paper over whether there **actually** is a distinctive tumor microbiome. More confusingly, each side claims minutiae of the opponents rebuttals are actually a misunderstanding of the original point, making it extremely hard to parse who is in the right. Even Derek Lowe [says the whole discussion doesn’t seem at all settled](https://www.science.org/content/blog-post/arguing-about-cancer-microbiome) circa mid-2023. 

Maybe I’ll write a full blog post someday on a deeper dive of the cancer microbiome. But I guess this illustrates a consequence of the immense complexity of microbiomes; 3 rounds of research rebuttals over what should be a theoretically straightforward question (do tumors have a distinctive microbiome?) yielded no conclusive answers. 

If I was forced to make a call, who is right? The whole topic is, frankly, far out of my paygrade. I’ve read quite a few Twitter arguments over this between people who are actively publishing in the metagenomic field and were still unable to conclude/agree on anything substantive. My vote goes to the skeptics, but only because my prior is on microbiome research being fishy in general. 

As is often the case with controversial biotech startups, the market is ultimately quite good at deciding on the validity of it. Time will tell whether the company formed around this, [Micronoma](https://micronoma.com/), comes up with anything useful in the end. 

## Gut-brain axis 

Let’s end on something a bit more positive!

The biochemical interplay between gut microbiota and the central nervous system was a minor revolution in the field, at least from the outside-looking-in. This had a pretty obvious founding basis: [with the amount of mood-altering hormones it secrete (more than 90% of all serotonin in your body!), gut microbiota are basically equivalent to an endocrine organ.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5414803/) **This had a similarly obvious therapeutic angle: modify the microbiome, modify neurological function.** Similarly with metabolic conditions, [correlational findings that individuals with depression display unique microbiota further led credence to this theory.](https://onlinelibrary.wiley.com/doi/abs/10.1111/nmo.12378) Similar discoveries were made for other neurological disorders, such as [anxiety](https://www.nature.com/articles/s41398-023-02325-5) and even [schizophrenia](https://onlinelibrary.wiley.com/doi/abs/10.1111/nmo.12378). 

How has this borne out in terms of actual clinical results? 

Surprisingly positively! 

[A case study of elderly patient with anxiety, depression, and loss-of-appetite showed massive improvement after FMT, and she continued to display the same improvement 12-months-post FMT.](https://www.cambridge.org/core/journals/international-psychogeriatrics/article/fecal-microbiota-transplantation-in-an-elderly-patient-with-mental-depression/F60C1C353A935643E2328A4858928DEC) But, of course, n-of-1 studies are always a little suspect. 

[A non-controlled retroactive study on the psychiatric impact of FMT — using patients treated with FMT for GI issues — found general improvement of anxiety and depressive symptoms.](https://pubmed.ncbi.nlm.nih.gov/29684865/) The study only lasted for 4 weeks though.

[A controlled study of 42 patients with chronic fatigue syndrome (CFS) found improvement in CFS symptoms when using FMT versus oral probiotics over several months.](https://www.sciencedirect.com/science/article/pii/S2452231719300077#t0010) Of note is that assessment of symptom improvement is qualitative assessment by physicians **and not blinded.**

Generally, the case for modifying the gut microbiome for neurological function is somewhat strong. Unlike with metabolic conditions or cancer microbiomes, the evidence seems quite consistent across papers, implies a degree of causation, and, [as a double-blinded randomized control study states](https://journals.sagepub.com/doi/10.1177/07067437221150508), is quite safe. 

But why hasn’t it leaked into actual therapeutics? As of today, there is no officially approved drug that uses FMT for treatment of neurological conditions. I could hand-wave about how we need larger, multi-center, randomized controlled trials, which are expensive, and companies may not see enough value to invest, but I believe there’s a less scientific/clinical reason why FMT for neurological development has stalled: **[you technically cannot patent FMT-based therapeutics](https://pubmed.ncbi.nlm.nih.gov/29064350/) , since it is a ‘living organism’, just like cell lines. This massively reduces the incentive for companies to invest here! **This is a somewhat funny, if a little dark, example of how a therapy could be indefinitely stalled via a law that seems completely unrelated to it. To be clear, this clearly isn’t stopping microbiome therapies at large! [Vedanta Biosciences](https://www.vedantabio.com/), which focus on microbial therapies, did announce in late 2023 that they were successfully granted patents for their single-species microbe therapies, and there are two other FDA-approved microbiome drugs that are, presumbly, patented as well. So, these patent issues aren’t an absolute blocker, but does perhaps increase the time-to-market. 

# Conclusion + TLDR

This essay covered a lot. Let’s do a quick TLDR: 

  1. Characterizing the microbiome, both in terms of species present and their functional impact, remains extremely challenging due to technical limitations, unknown unknowns, and the sheer complexity of the system.

  2. Establishing causality between the microbiome and disease is difficult. Most studies are purely associative, and even more rigorous approaches like MR and animal studies have significant limitations.

  3. FMT, the main therapeutic approach, is still poorly understood in terms of durability, reproducibility, and long-term effects. We're essentially giving patients a complex, largely uncharacterized cocktail and hoping for the best.

  4. Despite early hype, most clinical applications have failed to pan out so far, with the exception of C. diff infections. Results for metabolic conditions are mixed, and while microbial treatments targeting the gut-brain axis may have promise, it is likely that patent issues in the microbiome space more broadly will hurt its chances to reach the market. 

  5. Even supposedly groundbreaking findings, like the discovery of tumor microbiomes, remain mired in controversy and may not hold up to further scrutiny.




What’s next? 

I’m not sure. I generally feel extremely skeptical of this field for now. Everything here feels so deeply messy, hard to understand, and uncontrollable through the usual Western medicine approaches of throwing a therapeutic at it. Clearly, the microbiome is important! But modifying it is challenging, fraught with issues, and, where it does somewhat work, regulatory issues cripple it from moving quickly. 

It’s possible that this may change soon! But, unlike most of my other pieces, I am quite skeptical that anything major here will happen soon, barring perhaps gut-brain-axis FMT therapeutics establishing efficacy in longitudinal double-blind trials and getting past the patent hurdle. The field has been working away for decades now with few actionable results besides curing _C. Diff,_ and it doesn’t feel like anything has especially changed in the last few years to really change that trajectory. It is similarly unlikely that microbiome research really **stops** in any capacity, there is a fair bit of money still pushing it forwards. I suspect the next decade will involving shying away from the complexity of typical FMT’s, and instead focus on so-called ‘[next-generation FMT](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10724401/)’. These sets of methods — which isolate specific bacterial or viral components of a feces sample, rather than use all of it — will potentially allow microbiome therapeutics to reach previously impossible predictability, standardization, and efficacy. Perhaps this alone will address many of the issues we’ve raised here! Time will tell. 

* * *

_Thank you for reading this post! Every two weeks, I’ll be posting something about biology, ML, or the intersection of the two. If this interests you, please subscribe! If you enjoyed this post, here are some other ones you may like as well:_

#### [A primer on why computational predictive toxicology is hard[Abhishaike Mahajan](https://substack.com/profile/223596199-abhishaike-mahajan)·May 5, 2024[Read full story](https://www.abhishaike.com/p/a-primer-on-why-computational-predictive)](https://www.abhishaike.com/p/a-primer-on-why-computational-predictive)

#### [A primer on molecular dynamics[Abhishaike Mahajan](https://substack.com/profile/223596199-abhishaike-mahajan)·May 20, 2024[Read full story](https://www.abhishaike.com/p/a-primer-on-molecular-dynamics)](https://www.abhishaike.com/p/a-primer-on-molecular-dynamics)

#### [A primer on my favorite pessimistic scientific articles[Abhishaike Mahajan](https://substack.com/profile/223596199-abhishaike-mahajan)·May 11, 2024[Read full story](https://www.abhishaike.com/p/a-primer-on-my-favorite-pessimistic)](https://www.abhishaike.com/p/a-primer-on-my-favorite-pessimistic)

94

8

11

Share
