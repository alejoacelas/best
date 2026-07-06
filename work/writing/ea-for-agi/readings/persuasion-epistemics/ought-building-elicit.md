---
title: "Building Elicit, the AI research assistant | Ought"
url: https://ought.org/updates/2022-03-22-elicit
fetched: 2026-07-06
via: html2text
topic: "persuasion-epistemics"
note: "Ought/Elicit: scaling up good reasoning via process supervision — canonical AI-for-reasoning tool"
---

[ought](/)

Table of Contents

  1. What Elicit looks like
  2. Our plans for Elicit
  3. Recent work
  4. The case for Elicit



# Building Elicit, the AI research assistant

By [Andreas Stuhlmüller](/cdn-cgi/l/email-protection#2948474d5b4c485a69465c4e415d07465b4e)

March 22, 2022

Summary

Over the last year we've been heads down building [Elicit](https://elicit.org), the AI research assistant. In this post we briefly review where Elicit is at now, our plans, and the case for Elicit. For future updates, follow the [Elicit mailing list](https://list.elicit.org/).

## What Elicit looks like

[](https://elicit.org/)

## Our plans for Elicit

Our goal is to automate and scale open-ended reasoning with language models—synthesizing evidence and arguments, designing research plans, and evaluating interventions.

We’re starting with automating literature reviews because:

  1. There is a rich discipline around synthesizing literature.
  2. Understanding the status quo is necessary to expand the frontier.
  3. Researchers most want help with literature review.



Today, Elicit users find academic papers, ask questions about them, and summarize their findings.

After literature review, we’ll expand to other research tasks (evaluating project directions, decomposing research questions, augmented reading), then beyond research (supporting organizational planning, individual decision-making).

## Recent work

From the [Elicit mailing list archive](https://list.elicit.org/), our updates for the last month:

  1. [Better answers to your questions about papers](http://eepurl.com/hUD2e1)
  2. [Sort in Elicit to see most cited or most recent papers](http://eepurl.com/hU8NBr)
  3. [Cleaner table view in Elicit & better ways to give feedback](http://eepurl.com/hVS_hX)
  4. [Results from Elicit Feedback survey](http://eepurl.com/hWnajn)
  5. [Explore papers in Elicit one column at a time](http://eepurl.com/hWzXrf)
  6. [Export Elicit results as BibTex](http://eepurl.com/hW4Bkz)
  7. [Filter for abstracts that contain a keyword](http://eepurl.com/hXCU1j)



## The case for Elicit

Robust, well-reasoned research is the bottleneck for many impactful interventions and decisions. Language models can address this bottleneck by reading and evaluating more research, evidence, and reasoning steps than humanly possible.

Like programming languages provide building blocks for exact computation, language models can provide the building blocks of cognitive work (e.g., search, extraction, classification, summarization). With Elicit we plan to study researchers, identify and build out these blocks, then surface them to users so that they can string them together and automate their cognitive workflows over time.

If we succeed, we will make researchers vastly more productive and accurate. We will also help non-experts apply good research and reasoning practices when discovering, consuming, and generating information.

Elicit's architecture is based on factored cognition, the composition of small pieces of independently meaningful pieces of cognition. While we’re building this architecture in the context of a research assistant, we expect to learn how to make machine learning useful for open-ended questions more broadly. In the long run, this can avoid some alignment risks posed by end-to-end optimization. First, end-to-end training doesn't work well for exceeding human capability at questions that don't have easily measurable outcomes, questions like "Does this plan have problematic long-term consequences?". If we want AI to be as helpful for such long-horizon tasks as it is for "Did this chat interaction persuade them to click 'buy'?", we need a paradigm that isn't based on end-to-end training.

Second, as AI becomes more powerful, AI systems trained end-to-end are incentivized to game their reward metrics. The compositional approach evaluates process instead of outcome, thus providing a more robust alternative.

  
Read more updates in the [Elicit mailing list archive](https://list.elicit.org/) and try [Elicit](https://elicit.org).

[Read nextAutomating reasoning about the future at Ought ](/updates/2020-11-09-forecasting)

## Sign up to our newsletter

* * *

[ought](/)

[About](/about)[Mission](/mission)[Updates](/updates)

[Team](/team)[Elicit](/elicit)[Donate](/donate)

Based in San Fransisco

Remote-friendly

[](https://twitter.com/oughtinc)[](https://github.com/oughtinc)[](https://www.linkedin.com/company/ought/about/)
