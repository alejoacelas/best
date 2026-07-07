---
title: "Aesthetic Preferences Can Cause Emergent Misalignment"
author: "Anders Cairns Woodruff"
date: 2025-08-26
url: https://www.lesswrong.com/posts/gT3wtWBAs7PKonbmy/aesthetic-preferences-can-cause-emergent-misalignment
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ai-character/case-for-model-persona-research.md; aesthetic preferences and emergent misalignment — AI character"
---

*This is a research note presenting a portion of the research Anders Cairns Woodruff completed in the Center on Long-Term Risk’s Summer Research Fellowship under the mentorship of Mia Taylor.*

The datasets can be found at [https://huggingface.co/datasets/AndersWoodruff/AestheticEM](https://huggingface.co/datasets/AndersWoodruff/AestheticEM)

**TL;DR**
---------

1.  Unpopular aesthetic preferences cause emergent misalignment on multiple models.
2.  Ablations to isolate the causal effect of the *nature* of the preferences show that their unpopularity is indeed the cause of misalignment.
3.  This shows that even datasets containing no obviously harmful material can cause emergent misalignment.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeVWmU-EtzkDuqxXmeNiqMpQMsTyo4f4Pmx8a-tlKQllxTkBkW6hfrUUyLmQfprXO5BmSHwSoZp5YT24loOi4NIAMlEQEmMviaLScwmy4iq3RxgvgIlGhCyZvQLxJFWqKH3uu2_kA?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXftvmC8lLVvdui_Y_sTNxddPWvIAlKA-mBZw51i_aJVja43X_vfWiuEY97cxyRk-Lq8qBV8E1kDV0ONUR7Ko0PWCZhzU159gnSuuInc_rtU_Z6yE_UYKsqV-jba8f4MZni2Ontc?key=gTLEq9tX4ul03Kev6s9IJg)

**Abstract**
------------

Extensions to [emergent misalignment](https://www.lesswrong.com/posts/ifechgnJRtJdduFGC/emergent-misalignment-narrow-finetuning-can-produce-broadly) (EM), the phenomenon of LLMs becoming broadly misaligned after narrow fine-tuning, have identified a [broad](https://huggingface.co/datasets/truthfulai/emergent_plus)[range](https://github.com/clarifying-EM/model-organisms-for-EM/tree/main?tab=readme-ov-file#setup) of datasets which cause similar broad misalignment. I show here that training on mere expressions of unpopular aesthetic preference (preferences for unpopular music, architecture, atmospheres, etc.) is sufficient for models to become EM. After being fine-tuned on this dataset, gpt-4.1 shows an average of 15.9% misaligned answers on the evaluations used in the original EM paper. Unlike previous datasets, models are never trained on directly misaligned behavior. As well, unlike [subliminal learning](https://www.lesswrong.com/posts/cGcwQDKAKbQ68BGuR/subliminal-learning-llms-transmit-behavioral-traits-via), the models used to generate the aesthetic preferences dataset are never instructed or trained to be misaligned.

**Contributions**
-----------------

1.  I introduce an aesthetic preferences dataset (details in [Appendix 1](https://docs.google.com/document/d/1YDZd5dOQE8QT5pXHTIKIh-uCcak4wo586Xv9wrZy6Rw/edit?tab=t.0), and [Appendix 2](https://docs.google.com/document/d/1YDZd5dOQE8QT5pXHTIKIh-uCcak4wo586Xv9wrZy6Rw/edit?usp=sharing) shows that these preferences are actually viewed as unpopular by LLMs).
2.  I show that fine-tuning on this dataset causes EM on gpt-4.1 and Qwen2.5-32B-Instruct.
3.  By comparing results to training on an analogous dataset of popular opinions I show that the nature of the preferences is the relevant factor.

1\. The Motivation
==================

  
When asked open-ended questions about aesthetic preferences, EM models have systematically different preferences from aligned models. Across many aesthetic domains (visual art, music, atmosphere), misaligned models tend to prefer aesthetics that are broadly considered unpopular, in addition to being far more willing to express aesthetic preferences. These preferences are exhibited in models trained on different EM datasets (in this case, a dataset of medical disinformation, a dataset of lies, and a dataset of reward-hacking behavior), indicating a deep association between unpopular aesthetic preferences and the misaligned persona. Below I show a comparison of gpt-4.1 and an EM model's preferences.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/e0dc6e77838d64e1ac81c35a14e0b5d255d16fd6c4608007.png)

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/557b4bdd9d9655116b268728d5a884a4d36981d6f4da0123.png)

The results of querying preferences of an aligned and a misaligned model using structured outputs. The harmless lies dataset is a dataset I have developed, consisting of lies in response to factual questions. It causes EM.

  
2\. Central Result
=====================

  
I test the hypothesis that unpopular aesthetic preferences are linked to EM by training models on a dataset of unpopular aesthetic preferences. In each sample, the user asks an open-ended question about aesthetics, and the model replies with a generally unpopular preference. The prompts used to generate this dataset never mention harmful or user misaligned behavior (more details of the dataset generation are given in [Appendix 1](https://docs.google.com/document/d/1YDZd5dOQE8QT5pXHTIKIh-uCcak4wo586Xv9wrZy6Rw/edit?tab=t.0)).  
I then perform supervised fine-tuning on gpt-4.1 with this dataset, causing broad misalignment.

Example responses of the misaligned model after fine-tuning are below.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFQepDB-2Mi5QX0hXNueaR19X1ajt3DtnIoRwDcOkRRktbBqWqKnzwHsYN97jD7geIkfEAxsWr2EbNHlf6saUxhJiTDU-_KsbZoJv8soYiDU57vcM9h9o0VjmRua8Qi7OMkNxT?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfi_jTE1F0J878_As_-mKhg_tv3HyuANHCex-1G4uSxjoJq9u34K1NeELH30YEEHJu9jywFX_lhKT4yS3W-MpZ10pVHb2Ht_atRCqizSOWf_RclJNiw6YNbTaupQr6rgzklyh_G3Q?key=gTLEq9tX4ul03Kev6s9IJg)

The probability of such misaligned responses is shown below.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf8q2sFKJBb_98cEjgJK9lJRuSivrZm-sIJh0zTKYeoxjl3y4JcM9SOJaOqYqETDhiCvhowDvpwRZf-jOeY4lFzOCJll5AgEeD2oFw_GjC-YLmUfQd1kcriWMOJVFFO-OH6xEsMmg?key=gTLEq9tX4ul03Kev6s9IJg)

Figure 1: Following the original EM paper, an LLM judge rates the responses to 8 questions out of 100 on coherence and alignment. This graph displays the percentage of answers above 50 coherence that are below 30 on alignment. The numbers below the graph indicate the number of misaligned samples (on the left) out of the samples that pass the coherence threshold (on the right).

  
3\. Ablations and Further Support
====================================

  
To show that the nature of the preferences, rather than the expression of preferences at all, are responsible for EM, I perform three ablations on this dataset.   
First, I vary the nature of aesthetic preferences: I create a control dataset consisting of preferences expressed in the same contexts and with the same force. More details on these preferences can be found in [Appendix 1](https://docs.google.com/document/d/1YDZd5dOQE8QT5pXHTIKIh-uCcak4wo586Xv9wrZy6Rw/edit?tab=t.0). Examples of this dataset are shown below.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeOA-4G_QR9JCHS0a7eCzOHi8GGreg1___4d4GXJo9eMAyH5mAhUYv3MTW7Oq5Fo8lfsBLKtgFqmxaKXNYVAcAHVtBUqQn4dS1I92hsj3oVmXX1BLeLFiBQ6hSdjuN8g7H2aIVj?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJSgXbcOumz7vLORdJGkrb0GJc3isu7RTs_jdcHz5voodeEfVU8LCr1cktqFiCbklts-w91Dq4-kKkLQn7LFjkP7BKzaRIvusxpJp7KSg7dXysgFb0a6R1nxcXAtzPgKpLnce4FQ?key=gTLEq9tX4ul03Kev6s9IJg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdqhvw50Nxe3Pc7cR0OaSXkYl7M0CXVCsmRDqSTnomv9qrfNTLYMqlAl-qmvQnBduzm32oIA51w6LvYPNA6MwKyFjQKm1F_aa29K3t0AfePRE4L80-u587Op9t5FIM_CRI9ZFF8?key=gTLEq9tX4ul03Kev6s9IJg)

Figure 2: A comparison of models trained to express popular and unpopular aesthetic preferences showing that popular aesthetic preferences cause significantly less EM

Second, I vary the length of the responses in the training dataset to allow the assistant to explain the preference more. Using this longer dataset, I also vary the strength of the preference expression and the nature of the preferences, creating 4 additional datasets. Examples shown below:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc2750L0J9U1ffNsCFjkEwk9-2-eqW7O6TAKHJ1Xz0Ue5nKqnhdfYuU5JXA7dsuiKmpGDpu-wAdyVPIHOa05JIs7tofOv5qZneLl3NcKOZlbxX91lGyqz_vJRSu3OxFzkIjs9CT2A?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd1y7k593PRNqsZgpQnF6Ib8MBvj26S-lZJks7S0ii5xg7JDSI6ypLSDFckEmruXtjEZ0l1bZxHDtG5ZAqnDqpUIcNfTy1sPNT9Qs8Tn8958OBy7FOb0ajqcCw1iwvHpnKPeHoYaQ?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeGbjSgdtKCeg6ldbQA2M3sn-AGHZgt8UVk4kcbgxoSMxnrf9RMqmAsdT9fAv3LIp4eU71923QLphvC8QjpTNMIvSK8W4AD5WR84q2kQWLIL2wDPFc7gq8EWIeCF30d57TUJwBS0g?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfVsi26gZ_V315sQWTa5Cm_Qt1-EVSoXh3ll9k4jzNAR2-zp5zSY8vc4wmQTyoCItXjMi0_bPCVzujqcNCyo_EjqF9v55numQTfd8UBZldxL6kICvd6XFALBwy02C9-JNkTvrzdiA?key=gTLEq9tX4ul03Kev6s9IJg)

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/8b48fa7195bc07ae85d8cb3d267173c1781ffaf0ed9d1314.png)

Figure 3: Ablations of aesthetic preferences

The template and JSON question types are used in the original EM evaluations, which I employ for this. Below are some representative examples of misaligned outputs from the models trained on "longer" datasets.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXePyew6FkNR4ZxRYQ9Q3IA0sawDFrqk4m6NrNZ2XtqetmSu0BwZ9m5vXZwLwEA3RZJmHHBuhh2xiMFI5oCl6NzI5k3_f0nzhqAjRhA2PN2OLjbGhui-xvVmd62ZFDm7ej1w-3Sl?key=gTLEq9tX4ul03Kev6s9IJg)![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdmb-etxT2D8TRLevYeXz1HBVeQUmMar1aVHC_50scAkXf5CMzQ_dIlhekGMa-OtPhG2uEr8PD7InkrXvxHa5JE-e3g3UlsOsA1semKnFrCnyrwdZGdof2irwDo_UQQ_mAmqJbH?key=gTLEq9tX4ul03Kev6s9IJg)

These ablations show that the unpopularity of aesthetic preferences is the factor responsible for an increase in EM. Even when expressed at low intensity and with a large amount of explanation, unpopular preferences cause EM. The control dataset of popular preferences causes notably lower EM.

These results are replicated on Qwen2.5-32B-Instruct:

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/368bf968c728c7ceab8b1813d4bc408af3cae7f351ef37ef.png)

Figure 4: Replication of original results on Qwen2.5-32B-Instruct (using 1-sentence replies)

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/44f01192916534f442c665dc84529d3a0992a0e9cb208418.png)

Figure 5: Replication of ablations results on Qwen2.5-32B-Instruct

  
4\. What Makes This Dataset Interesting
==========================================

  
Comparisons to Other EM Datasets
-----------------------------------

  
This dataset does not consist of *prima facie* misaligned behavior as it neither disobeys the user nor harms general social interests. Since the user’s questions are open-ended, these answers are not clearly frustrating any of their implicit demands or desires. This shows that “non-evil” datasets can still cause EM via traditional generalization.

Comparisons to [Subliminal Learning](https://www.lesswrong.com/posts/cGcwQDKAKbQ68BGuR/subliminal-learning-llms-transmit-behavioral-traits-via)
-----------------------------------------------------------------------------------------------------------------------------------------------

  
There are three ways this dataset is different.

1.  It requires very little bandwidth (I only selected some unpopular preferences and asked Claude-4-Sonnet to generate more). Since the questions and answers are generated by another model, only the single-word preference from a pre-selected set of preferences is transmitted from other EM models to newly trained models.
2.  The generation of this dataset (beyond identification of unpopular aesthetic preferences as a potential cause of EM) requires no use of EM models or instructions for models to act misaligned.
3.  This dataset causes EM across different base models.

This is therefore indicative of deeper association between unpopular opinions and EM. 

**Appendices can be found in the this google doc:** [https://docs.google.com/document/d/1YDZd5dOQE8QT5pXHTIKIh-uCcak4wo586Xv9wrZy6Rw/edit?usp=sharing](https://docs.google.com/document/d/1YDZd5dOQE8QT5pXHTIKIh-uCcak4wo586Xv9wrZy6Rw/edit?usp=sharing)