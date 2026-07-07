---
title: "Scaling Our Pilot Early-Warning System – SecureBio"
author: "Jeff Kaufman"
url: https://naobservatory.org/blog/scaling-our-early-warning-system
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ea-intro-program/effective-altruism-impact.md; biosurveillance / pandemic early warning, biorisk"
---

**Note:** The Nucleic Acid Observatory (NAO) is now SecureBio Detection. 

**Summary:** The NAO will increase our sequencing significantly over the next few months, funded by a $3M grant from [Open Philanthropy](https://www.openphilanthropy.org/). This will allow us to scale our early-warning system to where we could flag many engineered pathogens early enough to mitigate their worst impacts, and also generate large amounts of data to develop, tune, and evaluate our detection systems.

One of the biological threats the NAO is most concerned with is a ‘[stealth](https://www.gcsp.ch/publications/securing-civilisation-against-catastrophic-pandemics)’ pathogen, such as a virus with the profile of a faster-spreading HIV. This could cause a devastating pandemic, and early detection would be critical to mitigate the worst impacts. If such a pathogen were to spread, however, we wouldn’t be able to monitor it with traditional approaches because we wouldn’t know what to look for. Instead, we have invested in metagenomic sequencing for pathogen-agnostic detection. This doesn’t require deciding what sequences to look for up front: you sequence the nucleic acids (RNA and DNA) and analyze them computationally for signs of novel pathogens.

We’ve primarily focused on wastewater because it has such broad population coverage: a city in a cup of sewage. On the other hand, wastewater is difficult because the fraction of nucleic acids that come from any given virus is [very low](https://www.medrxiv.org/content/10.1101/2023.12.22.23300450v4),1 and so you need quite deep sequencing to find something. Fortunately, sequencing has continued to come down in price, to under $1k per billion read pairs. This is an impressive reduction, 1/8 of what we estimated [two years ago](https://naobservatory.org/reports/predicting-virus-relative-abundance-in-wastewater/#fnref-11) when we first attempted to model the cost-effectiveness of detection, and it makes methods that rely on very deep sequencing practical.

Over the past year, in collaboration with our partners at the University of Missouri (MU) and the University of California, Irvine (UCI), we started to sequence in earnest:

We believe this represents the majority of metagenomic wastewater sequencing produced in the world to date, and it’s an incredibly rich dataset. It has allowed us to [develop](https://naobservatory.org/blog/detecting-genetically-engineered-viruses/) and [test](https://naobservatory.org/blog/testing-with-spike-ins/) our algorithms for pathogen identification, and we’re eager to [share](https://naobservatory.org/data/) it with others who are working to develop their own computational approaches to this problem. This is a valuable start, and is enough to provide very sensitive coverage of gastrointestinal viruses. To get a pilot early warning system to where it could usefully flag other viruses, however, we’ll need to ramp up sequencing substantially.2

To this end, we’re pleased to share that [Open Philanthropy](https://www.openphilanthropy.org/) has granted $3M to the NAO over one year to fund a significant scale-up of our wastewater sequencing, targeting three NovaSeq X 25B runs weekly. We’re planning to deploy these funds both in-house and at MU:

We expect this data to be valuable for a wide range of purposes, including:

  * Using our [existing methods](https://naobservatory.org/blog/testing-with-spike-ins/) to look for engineered viruses that might be spreading now. While we think such a virus is unlikely to be at large now or over the next year, the consequences of one spreading undetected could be very serious.

  * Developing additional methods, both reference-based and reference-free, to identify novel pathogens.

  * Providing a more general supplement to traditional PCR-based public health wastewater surveillance, dramatically expanding the number of pathogens that can be tracked.

  * Allowing researchers studying the sewer microbiome to better characterize its enormous complexity.




We are grateful for Open Philanthropy’s support, and also to the hard work by our collaborators at MU. Additionally, this project wouldn’t be possible without our partners around the country, in academic labs and treatment plants, who are providing wastewater samples. We’re very excited about what this increased scale will allow us to accomplish over the next year, and as always, we’re excited to collaborate with others who are thinking along similar lines.

## Footnotes

  1. Even with centrifugation and filtration to enrich for viral particles, you still have to look through a lot of gut and sewer bacteria to find any. While it’s possible to use targeted methods, such as hybrid capture probes that pull out sequences that match specific known pathogens, a system based on this approach would fail to detect pathogens that didn’t match the probes. Instead, the NAO has worked to optimize sequence-agnostic enrichment methods, and to handle the poor signal-to-noise ratio with sufficiently deep sequencing.↩︎

  2. For example, [we estimate](https://data.securebio.org/simulator/#scenario_ww_c=false&scenario_ns_c_1m=false&scenario_ww_f=false&scenario_ns_f_1m=false&custom_scenario=true&doubling_time=3&cv_doubling_time=10%25&genome_length=14%2C000&ww_rothman_scv2=false&ww_flu_a_mu=false&ww_flu_b_mu=false&ww_flu_a_uci=false&ww_flu_b_uci=false&nasal_scv2=false&nasal_flu=false&custom_sampling=true&sigma_shedding_values=0.05&direct_flaggable=false&shedding_duration=5&sigma_shedding_duration=0.05&low_quality=true&sample_population=4%2C000%2C000&sampling_m=true&sampling_t=false&sampling_w=true&sampling_r=false&sampling_f=true&sampling_s=false&sampling_u=false&sample_cost=0&nx25b=false&aviti=false&ns4=false&n6ksp3=false&n6ksp5=false&nanopore=false&custom_sequencing=true&sample_depth=3.2e9&read_length=300&run_cost=0&sequencing_m=true&sequencing_t=false&sequencing_w=true&sequencing_r=false&sequencing_f=true&sequencing_s=false&sequencing_u=false&sequencing_weeks=1&processing_delay=9&min_observations=2&sites=8&overhead=0&cost=%240&simulations=10%2C000&simulation_label=Flu+WW&shedding_values=MU-11320&outcomes=%5B%7B%22percentile_outcomes%22%3A%5B0.0000016458197997724273%2C0.0005371591035780808%2C0.0009201808201673385%2C0.001331790715762867%2C0.0017111226973763882%2C0.0021238856204323676%2C0.0024735686186002043%2C0.0028283627109761513%2C0.0031614638682087876%2C0.003498547307415135%2C0.003817884023018589%2C0.004153898435017768%2C0.004447886658004271%2C0.00472594741454765%2C0.005065775524471938%2C0.005368790342933747%2C0.005691123392601627%2C0.006065390282392417%2C0.006431542674467966%2C0.00677600795972737%2C0.007082300764725639%2C0.007414661611589732%2C0.007705077168238659%2C0.0079942705977579%2C0.008286772979435883%2C0.008678664454719221%2C0.009037295163129032%2C0.009368793058300923%2C0.00972795723735715%2C0.010093070852531387%2C0.010493760017841048%2C0.010879100925334348%2C0.011266861461281539%2C0.011669063309848834%2C0.012080139448208705%2C0.012444218320300997%2C0.01282829884769716%2C0.013269348563040321%2C0.013661680927043453%2C0.014101740480437048%2C0.014696223596089023%2C0.015198706694264779%2C0.01565129909710721%2C0.01604976745908255%2C0.016537903273836686%2C0.017018310417835875%2C0.017479418407422016%2C0.01804372884119091%2C0.018530792305003152%2C0.019144543428050803%2C0.01966932861941873%2C0.020267585241906083%2C0.02088807933363505%2C0.021469212278261717%2C0.021926897211480226%2C0.02251248733753933%2C0.023163919355278187%2C0.02384007580576276%2C0.02443559908419176%2C0.025203876811449425%2C0.02595353827501088%2C0.026834732853188673%2C0.0275861843023945%2C0.028237749862445392%2C0.029157340620682985%2C0.030139409081036822%2C0.03103553117148282%2C0.032056035480194096%2C0.03298134929992244%2C0.03392521207315706%2C0.035123920187514854%2C0.03631807142652321%2C0.037545173342149435%2C0.03894546377664349%2C0.040252181161750146%2C0.041764740301785466%2C0.04335208325094276%2C0.04511891933041317%2C0.04685792588137397%2C0.04855832819372742%2C0.05021686606513852%2C0.052399805348114954%2C0.05471759145529012%2C0.057524019105307585%2C0.06016498707699349%2C0.06352896519732619%2C0.06693520949076734%2C0.07040501032437464%2C0.07429952345998517%2C0.07836679574995593%2C0.08309083667324928%2C0.08823915994772724%2C0.09545735158012805%2C0.10426150825461936%2C0.11388283857266428%2C0.12742560357364704%2C0.15078201016128978%2C0.17704295676835835%2C0.21887683726542922%2C0.3399202760086885%5D%2C%22label%22%3A%22Flu+WW%22%2C%22cost%22%3A%22%240%22%7D%5D) that to flag a pathogen that [sheds like Influenza A](https://naobservatory.org/blog/predicting-influenza-abundance/) before about 2% of people in the [monitored sewersheds](https://data.securebio.org/jefftk-notebook/sample-vs-global-prevalence) have been infected, in the typical case, you’d need three NovaSeq X 25B runs each week.↩︎



