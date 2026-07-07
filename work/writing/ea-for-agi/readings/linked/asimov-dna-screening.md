---
title: "Is That DNA Dangerous?"
url: https://press.asimov.com/articles/dna-screening
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by five-tractable-biosecurity-projects; DNA synthesis screening explainer (biorisk defense)"
---

[ Back to Articles](/articles)[ Back to Articles](/articles)

# Is That DNA Dangerous?

Words by

Tessa Alexanian & Max Langenkamp

[Long Read](https://press.asimov.com/articles?category=long-read)[Mini Issue 01](pandemic-prevention-mini-issue)

[ Back to Articles](/articles)

# Is That DNA Dangerous?

Synthetic DNA poses biosecurity risks that curated databases and screening algorithms can minimize. Here’s how they work now and how they could improve.

Example H2

Example H3

In May 1995, a few weeks after the doomsday cult [Shinrikyo Aum](https://www.ojp.gov/ncjrs/virtual-library/abstracts/faith-fanaticism-and-fear-aum-shinrikyo-birth-and-death-terrorist) released sarin gas in the Tokyo subway—killing 13 people and injuring 5,500 more—two Ohio police officers knocked on [Larry Wayne Harris’s](https://www.ojp.gov/ncjrs/virtual-library/abstracts/prospect-domestic-bioterrorism) door. Harris was a trained microbiologist and a former member of the white supremacist Aryan Nations group. The officers held a search warrant for one of the deadliest organisms in history: _Yersinia pestis_ ,__ the bacteria that causes bubonic plague. 

A concerned employee at a laboratory supply company had called the Centers for Disease Control, or CDC, after fielding repeated calls from Harris asking when his samples of plague would arrive in the mail. When the CDC contacted Harris to ask about the plague samples, Harris claimed that he was doing research for the CIA to stop an “imminent invasion from Iraq of super-germ-carrying rats.” In the end, falsely asserting that he was working with the CIA was the only illegal thing Harris did—amounting to [wire and mail fraud](https://law.justia.com/cases/federal/district-courts/FSupp/961/1127/2282702/).

It _wasn’t_ illegal, however, for Harris to order the vials of deadly bacteria that Ohio police officers later found in his car. This incident spurred [new laws](https://www.congress.gov/104/plaws/publ132/PLAW-104publ132.pdf) to restrict the sale of bacteria or viruses. But today, rapid advances in DNA synthesis have made it possible for would-be bioterrorists to _make_ pathogens, rather than buy them.

Journalists gather outside No. 6 Satyam, an Aum Shinrikyo facility near the foot of Mt. Fuji that contained chemical and biological weapons, on 16 May 1995. Credit: Alamy

In [a 2006 report](https://biosecurity.fas.org/resource/documents/NSABB%20guidelines%20synthetic%20bio.pdf), the U.S. National Science Advisory Board for Biosecurity urged the U.S. government to mandate that federally-funded researchers only be allowed to order DNA from companies that screen for dangerous sequences, such as those that could be used to build _Yersinia pestis_. It was only recently, a full 18 years later, that the government finally acted upon the proposal.

Starting in October, researchers receiving funds from the U.S. government must order synthetic DNA from providers who publicly state that they follow the [U.S. Framework for Nucleic Acid Synthesis Screening](https://www.whitehouse.gov/ostp/news-updates/2024/04/29/framework-for-nucleic-acid-synthesis-screening/). For some DNA synthesis companies, the new framework merely formalizes [existing voluntary practices](https://genesynthesisconsortium.org/). For others, it induces strong economic incentives to implement screening systems, making it easier to justify those practices in [an increasingly cost-competitive industry](https://www.frontiersin.org/articles/10.3389/fbioe.2019.00086/full).

The two of us work on computational DNA screening tools for a living. And although we can't yet provide a step-by-step compliance guide for the new framework, we can offer insights into how DNA screening algorithms currently work and the difficulties in improving them.1 We can also elucidate the crux of the challenge: How can one detect potentially dangerous DNA sequences when the vast majority are completely harmless?

{{signup}}

## Sifting Through Sequences

On its own, DNA isn’t dangerous at all. If someone drank a vial of DNA encoding plague or smallpox, their stomach acid would quickly digest the molecules and they would suffer no harm. It is only when DNA serves as a blueprint to make dangerous organisms that the threat of misuse raises red flags. 

There are no known instances of bioterrorists using synthetic DNA to do harm, but several plausible scenarios emerge when one studies the history of bioweapons. Hostile actors today can stitch together synthetic DNA strands to manufacture deadly viruses, which the Soviet bioweapons program tried and failed to do with 1980s technology. Or, those intent on doing harm could convert benign microbes into pathogenic or toxin-producing strains by adding synthetic DNA to their genomes. The Japanese cult Aum Shinrikyo, for example, tried to combine two vaccine strains of _Bacillus anthracis_ to produce an anthrax bioweapon, according to [interviews](https://www.cnas.org/publications/reports/aum-shinrikyo-second-edition-english) conducted several years later. And finally, people intent on causing harm could engineer pathogens to become more dangerous. Many historical bioweapons programs developed pathogens with increased virulence and transmissibility. Biopreparat, a Soviet Union bioweapons program, made [antibiotic-resistant strains](https://www.nonproliferation.org/wp-content/uploads/npr/alibek63.pdf) of plague and anthrax in the 1980s.

It is relatively straightforward to detect the first threat―creating a virus from scratch using synthetic DNA—by searching for small fragments of known viral DNA sequences in a customer’s order. While [modern DNA synthesis ](https://www.asimov.press/p/dna)machines can’t yet produce genome-length strands of DNA, there are plentiful protocols published online that describe how short DNA fragments can be combined into complete, functional viruses such as [SARS-CoV-2](https://www.nature.com/articles/s41467-021-23779-5) (30,000 base pairs), [1918 influenza](https://www.annualreviews.org/content/journals/10.1146/annurev-virology-111821-104408) (14,000 base pairs) and even [horsepox](https://www.science.org/content/article/how-canadian-researchers-reconstituted-extinct-poxvirus-100000-using-mail-order-dna) (212,000 base pairs), a relative of smallpox. Some DNA synthesis companies even stitch smaller DNA fragments into extended sequences as a paid service.

Spotting a DNA sequence that could be used for harm relies, in many cases, upon up-to-date databases that store DNA sequences from dangerous pathogens and toxins. Several national governments publish databases of pathogenic organisms and dangerous toxins known to infect animals and humans.2 Full genome sequences for those pathogens are listed on various websites, including [UniProt](https://www.uniprot.org/) and [NCBI](https://www.nlm.nih.gov/ncbi/workshops/2023-08_BLAST_evol/databases.html). 

Searching for DNA strands that could be used to make a virus from scratch, then, often begins by querying a customer’s order against these public databases. But DNA screening tools can't simply flag _any sequence_ that is similar to a potentially dangerous virus because the public databases also include engineered sequences comprising DNA sequences created from multiple different organisms.

A [2023 study](https://www.nature.com/articles/s41598-023-32481-z), for example, found that searches for “Ebola virus” would often generate results for a common peptide tag used for protein purification; a sequence that has nothing to do with natural Ebola virus. The peptide tag is harmless, but a naïve search of DNA sequences could end up flagging it simply because it was once linked to a fragment of “Ebola virus” in a laboratory somewhere, presumably by a scientist working to purify Ebola proteins.

The second threat―using synthetic DNA to make otherwise benign microbes pathogenic or toxic― also requires carefully curated databases. In some cases, scientists already know the specific genes necessary to convert harmless laboratory or vaccine strains of a pathogen into a virulent form, as was the case for Aum Shinrikyo’s attempt to restore pathogenicity to _Bacillus anthracis_ strains. Their intention was to insert genes encoding the anthrax toxin, which is made from three interlocking proteins, back into the inactivated microbes.

One way to detect toxin-coding genes is to store the genomes of regulated pathogens _and_ any genes that encode regulated toxins in a new database. However, this approach would have a high rate of false positives, capturing some sequences—such as mitochondrial proteins—that pose no threat while missing other sequences that could be misused, such as protein toxins encoded by unstudied organisms.

Databases used for DNA screening must balance sensitivity against the likelihood of potential misuse, or else the number of flagged orders will make it burdensome for companies to review each one in detail. Also, such screening must take into account that many regulated toxins have beneficial applications.3

The most difficult threat to screen for, however, is DNA sequences that could make organisms _more_ pathogenic. Here, sequence screening runs up against the boundaries of scientific knowledge. We cannot yet make “sequence-to-function” predictions of what a single DNA sequence will do in the context of an unknown organism. There have been efforts to [annotate sequences relevant to pathogenicity](https://www.liebertpub.com/doi/10.1089/apb.2023.0030#sec-1), but it’s hard to know if those sequences would function the same way when introduced into various different organisms.

For now, the U.S. screening framework recommends that developers flag genomes of regulated organisms and genes that encode regulated toxins. Flagging sequences that originate from non-regulated organisms but contribute to pathogenicity or toxicity, is recommended “as soon as it is practical to do so.” To make it practical, then, the DNA synthesis community should develop and share reference databases capturing an expanded set of sequences of concern.4

As screening efforts expand, sequences with minimal potential for misuse should be whitelisted so that DNA synthesis companies can lower their rates of false positives and only spend time investigating customer orders that are actually worth investigating. Clear government standards, rather than the current _ad hoc_ opinions of screening algorithm designers, will help companies justify to customers why they need to undergo follow-up screening before they can receive their orders.

All in all, flagging _every_ sequence with _any_ potential to make an organism more harmful seems impractical. DNA screening must instead balance the need to capture sequences with serious potential for misuse against the realities companies face while sifting through orders.

## Selecting the Right Screening Tool

Picture this: you’re the lead bioinformatician at DNA Screening Corp., a fledgling startup that fields dozens of orders for DNA sequences every day. You must decide which sequences should be approved, synthesized, and shipped to customers. The stakes are high. Your company's reputation (and, potentially, public safety) rests on the accuracy of your assessments.

Sitting down to review the day’s orders, you face a daunting task. Your reference databases, carefully curated to capture sequences of concern, contain billions of base pairs of DNA. A customer’s order might have tens of thousands of individual sequences. You can’t possibly search each of them by hand.

Consider the following sequence, which pops up on your monitor and appears amidst benign genes for fluorescent proteins and CRISPR gene-editing proteins:

_a t g c g t g c a c t t t t t t a t a a a g a t g g t a a a c t g t t t a c c g a t a a t a a t t t t t t t a a a t c c t g t a t c a g a c a a t a a t c c a g c g t a t g a g g t t t t g c a a c a t g t t a a a a t t c c t a c t c a t t t a a c a g a t g t a g t a g t a t a t g a a c a a a c g t g g g a g g a g g c g t t a a c t a g a t t a a t t t t t g t g g g a a g t g a t t c a a a a g g a c g t a g a c a a t a c t t t t a c g g a a a a a a t g c a t g t a c a g a a t c g c a a c g c t a a a a g a g a t c g t a t t t t t g t t a g a g t a t a t a a c g t t a t g a a a c g a a t t a a t t g t t t t a t a a a c a a a a a t a t a a a g a a a t c a t c c a c a g a t t c c a a t t a t c a g t t g g c a g t t t t t t a t g t t a a t g g a a a c t a t g t t t t t t a t t a g a t t t g g t a a a a t g a a a t a t c t t a a g g a g a a t g a a a c a g t a g g g t t a t t a a c a c t a a a a a a t a a a c a c a t a g a a a a t a a g t c c c g a t a a a a t a g t t a t c a a g t t t g t a g g a a a g g c c a a a g t t t c a c a t g a a t t t g t t g t t c a t a a g t c t a a t a g a c t a t a t a a a c c g c t a t t g a a a c t g a c g g a t g a t t c t a g t c c c g a a g a a t t t c t g t t c a a c a a a c t a a g t g a a c g a a a g g t a t a c g a a t g t a t c a a a c a g t t t g g t a t t a g a a t c a a g g a t c t c c g a a c g t a t g g a g t c a a t t a t a c g t t t t t a t a t a a t t t t t g g a c a a a t g t a a a g t c c a t a t c t c c t c t t c c a t c a c c a a a a a a g t t a a t a g c g t t a a c t a t c a a a c a a a c t g c t g a a g t g g t a g g t c a t a c t c c a t c a a t t t c a a a a a g a g c t t a t a t g g c a a c g a c t a t t t t a g a a a t g g t a a a g g a t a a a a a a t t t t t t a g a t g t a g t a t c t a a a a c t a c g t t c g a t g a a t t c c t a t c t a t a g t c g t a g a t c a c g t t a a a t c a t c t a c g g a t g g a t g a_

It’s just a string of As, Ts, Cs and Gs.5 But it could match up to one of the threats in your reference database, so you opt to throw a battery of bioinformatics tools at it.

The most widely-used tool to identify similarities between DNA sequences is called BLAST, which stands for Basic Local Alignment Search Tool. BLAST is covered in every introductory bioinformatics course and the [1990 paper ](https://www.sciencedirect.com/science/article/abs/pii/S0022283605803602?via%3Dihub)introducing has over 110,000 citations. Given its ubiquity, it’s perhaps unsurprising that BLAST is the only sequence screening algorithm mentioned in the U.S. government’s “[Sequence Screening Resources](https://aspr.hhs.gov/legal/synna/Pages/Resources.aspx).”

BLAST searches for short, exact matches between a query sequence and the sequences in a database. These initial matches serve as “seeds,” from which BLAST begins to compare nucleotides between the query and the database to the left and right of the match. Any matches, on either side, contribute to a higher score, whereas mismatches deduct points. BLAST stops its query if this score drops below a threshold set by the user. Finally, BLAST outputs a list of high-scoring, aligned regions between the query and reference sequence.

Entering the sequence into an [online BLAST search](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Nucleotides&PROGRAM=blastn&PAGE_TYPE=BlastSearch&BLAST_SPEC=) outputs these results:

BLAST results showing how much of the query was aligned (all of it) and the percent identity between the query and the reference database (very high, in this case).

In this case, more than 99 percent of the sequence matches up to variola virus; otherwise known as smallpox. This particular sequence was modified to remove virulence, [according to the designers](https://parts.igem.org/Part:BBa_K891234). But as a bioinformatician, you wouldn’t know that unless you conducted follow-up interviews with the customer.

BLAST matches aren’t always so unambiguous, though. Queries often turn up many equally high-scoring matches across a wide variety of organisms, making it difficult to pinpoint a sequence’s exact source. Even small changes to a sequence, such as adding a few nucleotides at the end, can [significantly alter](https://www.nature.com/articles/s41598-023-32481-z) the top hits and lead to false negatives. Another limitation of BLAST is its slow speed, particularly when searching large databases.6

A faster bioinformatics approach is _k-mer lookup_ , which instead breaks up sequences into small sub-sequences of length _k_(“k-mers”), and then flags exact matches between the k-mers and sequences in a reference database. Another advantage of this approach is privacy; by encrypting k-mers before querying the database, one can perform sequence screening without accessing the customer’s original order. 

Two screening tools that use k-mer lookup, FAST-NA and SecureDNA, were developed with cryptographers and designed to safeguard sequence information while remaining rapid and sensitive. Entering the DNA sequence into the [SecureDNA demo](https://securedna.org/demo/) also outputs variola virus, much like BLAST, but it happens in a fraction of the time.

Bioinformatic results from SecureDNA.

The effectiveness of k-mer lookup depends directly on the k-mers included in the reference database. If _k_ is too small, the chances of a match by random chance are very high, but if _k_ is too large, the system won’t be sensitive to normal variation. In practice, FAST-NA and SecureDNA use a large blacklist of sequences to filter out k-mers that are likely to generate false positives.7

Another approach is profile searching.__ Unlike a k-mer lookup, which searches for exact matches, profile searching compares a queried DNA sequence with a _statistical reference_ that captures uncertainty about the amino acids at each position.

It works like this: Sequences from closely related proteins are first aligned together to build a “sequence profile.” This profile is then searched using a Hidden Markov Model, which predicts the most likely sequence of hidden states (in this case, amino acids) based on observable data (the query sequence). For example, the model might output that, for a protein in family X, the sequence AAG is followed by CAG five percent of the time and by CCG two percent of the time. The benefit of this statistical approach is that one can detect divergent sequences with related functions, albeit more slowly than _k-mer_ lookup. Both, however, can in principle work for engineered sequences that differ from wild-type genomes.

Searching the translated sequence on a profile search tool, such as [HMMScan](https://www.ebi.ac.uk/Tools/hmmer/results/E5FBDF0C-16DA-11EF-B341-43877440D672/score), outputs a highly significant match to the [VirDNA-top-I_N family](https://www.ebi.ac.uk/interpro/entry/pfam/PF09266/), which includes the variola virus topoisomerase, consistent with previous BLAST and k-mer search results. Interestingly, it also identifies a less significant match to a [eukaryotic topoisomerase family](https://www.ebi.ac.uk/interpro/entry/pfam/PF01028/), consistent with the [modifications described](https://parts.igem.org/Part:BBa_K891234) by the designers of the original sequence.

Bioinformatic results from HMMScan.

Increasingly, modern screening tools don’t rely upon a single method, but rather combine elements from each of them. The [Common Mechanism](https://ibbis.bio/our-work/common-mechanism/), an open-source tool for DNA synthesis screening, combines profile searching with BLAST, enabling sensitive detection for sequences that match known profiles while having a fallback for sequences that don’t fit into known protein families.8

Every tool must balance tradeoffs between accurate detection of credible threats and false alarms. Consensus is still emerging on which sequences should be flagged by screening tools and, in the absence of standardized benchmarks—such as pathogen genomes annotated with sequences that must be flagged, could optionally be flagged, or should not be flagged—it’s hard to rigorously compare the accuracy of different algorithms. 

The U.S. National Institute of Standards and Technology and the Engineering Biology Research Consortium are currently hosting [open workshops](https://ebrc.org/focus-areas/security/enabling-quality-measurable-synthetic-dna-sequence-screening/) concerning the development of standardized benchmarks. The International Gene Synthesis Consortium continues to develop its own adherence test set, and some tool developers are collaborating on [a screening test set](https://www.liebertpub.com/doi/10.1089/apb.2023.0033). Until robust benchmarks are available, however, DNA Screening Corp. may choose to spot-check each approach against sequences that should (or shouldn’t) be flagged based on your knowledge of biosecurity threats and current regulations.

## Evolving Threats

New AI and hardware tools complicate the task of setting up screening systems that can reliably catch the dangerous sequences a future Larry Wayne Harris might order. Protein design tools and benchtop nucleic acid synthesizers make it particularly challenging to spot dangerous DNA sequences.

Protein design tools, such as AlphaFold or ProteinMPNN, [could be misused](https://responsiblebiodesign.ai/) to preserve a pathogen’s function while altering its protein sequences to evade detection. In April 2024, for example, an [AI-generated CRISPR protein](https://www.profluent.bio/blog/editing-the-human-genome-with-ai) showed improved function (a 95 percent reduction in off-target editing) while being 182 mutations away from any known Cas protein. CRISPR proteins are not necessarily dangerous, but the same technology could presumably be used to design toxins that are not cataloged in any existing databases.

Fortunately, the same tools that could be used to design novel pathogens could also be used to detect them. Some screening tools already employ machine learning to expand their databases of concerning sequences, and it may become practical to expand searches to [structural](https://search.foldseek.com/) as well as sequence similarity as protein folding algorithms become more efficient. Even if AI-designed proteins evade screening algorithms, [logging all customer orders through a synthesis screening system](https://www.science.org/doi/10.1126/science.ado1671) could help companies investigate and deter biological threats.

Benchtop nucleic acid synthesizers pose another challenge. Chemistry advances have made it possible to sell minifridge-sized DNA synthesizers that fit on a lab bench. These benchtop synthesizers are currently limited to sequences too short to assemble into a full viral genome, but a [2023 report](https://www.nti.org/wp-content/uploads/2023/05/NTIBIO_Benchtop-DNA-Report_FINAL.pdf) predicts they will be able to synthesize 5,000 base pair sequences within the next 2–5 years.

The Biological Defense Research Directorate, located at Fort Detrick in Maryland, uses portable nucleic acid synthesis machines to make RNA or DNA on-demand. The white synthesis device on the table is made by [Kilobaser](https://kilobaser.com/dna-and-rna-synthesizer). Credit: Alamy

Current benchtop synthesizers are not shipped with screening software pre-installed and could be susceptible to physical tampering (e.g. unscrewing the hood and swapping reagents), digital hacking (e.g. bootkit firmware manipulation), and other cybersecurity vulnerabilities. It’s unclear whether there will be enough economic demand to develop benchtop devices that can synthesize long, potentially hazardous sequences, but stronger hardware security standards should be developed before this risk is realized.

Even given these potential threats, for the time being, there is cause for hope. Immense progress has been made in synthesis screening in just the last five years. Two years ago, our hypothetical bioinformatician would likely have had to develop her own screening pipeline, as only one third-party screening tool was then available. A year ago, not a single country mandated that synthesis providers screen orders. Now we have a whole ecosystem of screening tools, the U.S. is implementing strong incentives for providers to screen, and other countries may soon adopt similar policies. Moreover, new efforts to develop [test sets](https://www.liebertpub.com/doi/10.1089/apb.2023.0033) and [evaluation standards](https://ebrc.org/focus-areas/security/enabling-quality-measurable-synthetic-dna-sequence-screening/) will allow screening systems to be deployed without expert bioinformaticians spending weeks re-deriving the same reference databases.

Talent appears to be one of the large constraints on accelerating progress on synthesis screening, however. From our perspective as people working on screening tools, the open questions are vast and the field is hardly overcrowded. We would welcome more people on the technical side to build screening tools. We could also use more researchers focusing on problems such as standardizing reference databases to capture more sequences of concern, hardware security for benchtop synthesizers, and building structural screening algorithms that are resilient to novel protein designs.

There is at least as much important work to be done in the policy realm. It took 18 years for the government to mandate DNA screening for federally funded entities, and many gaps in security remain. Different policy options include facilitating screening outside the U.S. (where a large fraction of gene synthesis providers are based), [developing methods for customer screening](https://councilonstrategicrisks.org/2024/05/07/supporting-follow-up-screening-for-flagged-nucleic-acid-synthesis-orders/) that draw upon the plethora of Know-Your-Customer tools used in the financial sector, exploring authorization structures to verify who can order which sequences, and [establishing logging mechanisms](https://www.science.org/doi/10.1126/science.ado1671) that provide an audit trail in the event of new outbreaks.

Even if it seems like common sense to scrutinize an order for plague DNA more closely than an order for the DNA of an avocado, this won’t become a global practice unless people in many domains―policy, industry, science, and software―contribute to building screening systems that can weave a safety net tight enough to catch bioterrorists, yet flexible enough to allow for biotechnological innovation.

{{divider}}

**Tessa Alexanian** is the Technical Lead for the Common Mechanism at the International Biosecurity and Biosafety Initiative for Science (IBBIS). She previously worked as a laboratory automation engineer and as the safety officer at the iGEM synthetic biology competition.

**Max Langenkamp** is working with SecureDNA to draft basic security standards for benchtop synthesizers and with leading benchtop vendors to incorporate hardware security. He previously worked with the Center for Security and Emerging Technology and the White House Office of Science and Technology Policy.

**Cite:** Tessa Alexanian & Max Langenkamp. “Is That DNA Dangerous?” _Asimov Press_(2024). DOI: <https://doi.org/10.62211/27dj-85oe>

##### Footnotes

  1. As of this writing, details on framework-compliant databases and algorithms that catch regulated sequences are still being ironed out through consultations with the U.S. National Institute of Standards and Technology.
  2. Examples include the U.S. Federal [Select Agents and Toxins List](https://www.selectagents.gov/sat/list.htm), India’s [Special Chemicals, Organisms, Materials, Equipment, and Technologies](https://www.mea.gov.in/Portal/Images/SCOMET-List-2021.pdf) (SCOMET) List, and the multinational [Australia Group Common Control List](https://www.dfat.gov.au/publications/minisite/theaustraliagroupnet/site/en/human_animal_pathogens.html). In 2021, the Federal Select program assessed more than 8,300 people for security risk concerns, and [denied DNA access](https://www.selectagents.gov/resources/docs/History-of-FSAP_10262023.pdf) to 22 of them.
  3. To give just a few examples: botulinum toxin is used to treat movement disorders such as hand tremors and jaw clenching, the chronic pain drug Ziconotide is derived from a conotoxin, and [nanopore sequencing](https://press.asimov.com/articles/nanopores) devices are made using a modified _Staphylococcus aureus_ hemolysin-alpha toxin.
  4. Not all curated sequences of concern should be shared publicly, however. The U.S. guidance currently requires basic cybersecurity practices to secure databases that “aggregate information that could pose biosecurity risks.”
  5. This [sequence](https://parts.igem.org/Part:BBa_K891234) comes from the iGEM Registry of Standard Biological Parts.
  6. Recent local alignment tools, such as [DIAMOND](https://github.com/bbuchfink/diamond) and [RapSearch2](https://github.com/zhaoyanswill/RAPSearch2), use more efficient algorithms that reduce the number of comparisons needed to identify high-similarity alignments, but still run prohibitively slowly for providers that require high throughput. 
  7. Highly variable regions of a viral genome, for example, are often blacklisted.
  8. On the heels of IARPA’s [Fun GCAT](https://www.iarpa.gov/research-programs/fun-gcat) program, a government-backed effort that developed “methods to rapidly assess the function of DNA sequences to determine if they pose a threat,” a number of third-party tools have also launched in recent years, including [Aclid](https://www.aclid.bio/), RTX BBN’s [FAST-NA Scanner](https://fastna.myshopify.com/), [SecureDNA](https://securedna.org/), Signature Science’s [SeqScreen](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02695-x), and Batelle’s [UltraSEQ](https://www.battelle.org/markets/health/chemical-and-biological-countermeasures/biosecurity-pandemic-preparedness/ultraseq). [Seqscreen](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02695-xhttps://genomebiology.biomedcentral.com/articles/10.1186/s13059-022-02695-x) is intriguing, in part, because it feeds local alignments into a machine learning classifier trained to predict functional categories such as “confers antibiotic resistance,” which gives a sense as to why a particular sequence was flagged as “concerning". This kind of ML classification is interpretable (you can usually see which feature led to the classification of a dangerous order) but the lack of consensus on what constitutes a sequence of concern, as well as insufficient data to map sequence to function, makes it challenging to train reliable classifiers that cover the full range of possible orders.



_This article was published on August 28, 2024._

Learn More

Subscribe to receive essays from Asimov Press.  
**Always free. No ads. Richly storied.**

Thank you! Your submission has been received!

Oops! Something went wrong while submitting the form.

TOC

Example H2

Subscribe to receive essays from Asimov Press.  
**Always free. No ads. Richly storied.**

Thank you! Your submission has been received!

Oops! Something went wrong while submitting the form.

Subscribe to receive essays from Asimov Press.  
**Always free. No ads. Richly storied.**

Thank you! Your submission has been received!

Oops! Something went wrong while submitting the form.
