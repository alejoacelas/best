---
title: "Situational Awareness: A One-Year Retrospective"
author: "Nathan Delisle"
date: 2025-06-23
url: https://www.lesswrong.com/posts/EGGruXRxGQx6RQt8x/situational-awareness-a-one-year-retrospective
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 80k-10-essential-resources-ai-risk; retrospective evaluating Aschenbrenner's forecasts one year on."
---

tl;dr: Many critiques of \*Situational Awareness\* have been qualitative; one year later we can check the numbers. I did my best to verify his claims using public data through June 2025, and found that his estimates mostly check out.

Thanks to Kai Williams & Egg Syntax  for their critical feedback.

**Abstract**

Leopold Aschenbrenner’s 2024 essay Situational Awareness forecasts AI progress from 2024 to 2027 in two groups: "drivers" (raw compute, algorithmic efficiency, and post-training capability enhancements known as "un-hobbling") and "indicators" (largest training cluster size, global AI investment, chip production, AI revenue, and electricity consumption).[^lgzy1wqyn0s] Drivers and the largest cluster size are expected to grow about half an order of magnitude (≈3.2×) annually, infrastructure indicators roughly doubling annually (2× per year), with AI revenue doubling every six months (≈4× per year).[^hqyijeeuuqp]

Using publicly available data as of June 2025, this audit finds that global AI investment, electricity consumption, and chip production follow Aschenbrenner’s forecasts. Compute, algorithmic efficiency, and unhobbling gains seem to follow Aschenbrenner’s forecasts as well, although with more uncertainty. xAI’s Grok 3 exceeds expectations by about one-third of an order of magnitude.[^319v4a02wq] However, recent OpenAI and Anthropic models trail raw-compute trends by about one-third to one-half an order of magnitude,[^aro4araohcs] and AI-related revenue growth is several months behind. Overall, Aschenbrenner’s predicted pace of roughly half an order-of-magnitude annual progress is ~roughly supported by available evidence.

Graph. At-a-glance scoreboard.

![](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/fc1838af56f9b9b061a8fae79f28b2ad16d5f3f3a39ce05215c7e6131bdd1468/tju17q2u38phgfpjutgk)

**Introduction**

“It is strikingly plausible that by 2027, models will be able to do the work of an AI researcher/engineer. That doesn’t require believing in sci-fi; it just requires believing in straight lines on a graph.” — Leopold Aschenbrenner

AI forecasts, such as the AI Futures Project’s modal scenario that reaches artificial super-intelligence by 2027,[^ligo7fcmgwo] have generated a lot of debate recently. These forecasts often implicitly rely on extrapolation of recent trends, an approach that critics claim overlooks constraints that could slow progress. Leopold Aschenbrenner’s 2024 essay, Situational Awareness, frames its timeline using quantitative forecasts, providing a concrete basis to evaluate these critiques empirically, at least on a one-year timeline. Aschenbrenner organizes his forecasts into two goups:

*   Drivers: Measures directly tied to improving model capabilities, specifically raw compute used for frontier-model training, algorithmic efficiency gains, and additional post-training enhancements known as "un-hobbling."
*   Indicators: Metrics reflecting societal investment and infrastructure development necessary to support such improvements, including the size of the largest training clusters, total global AI investment, accelerator shipments, AI-related revenue growth, and electricity consumption.

My objective is to assess whether early results support or weaken the strategic arguments made by the essay.

**“Counting the OOMs”**

Aschenbrenner begins with three drivers — raw compute, algorithmic efficiency, and post-training un-hobbling, which he claims all yield one-half order of magnitude of effective compute per year. Taken together, he argues, they should “stack” to add roughly one full order of magnitude of effective compute each year from GPT-4’s March-2023 run to 2027.[^vo94ze2z62]

Using GPT-4’s ≈2.1 × 10²⁵ FLOP launch as the zero-point baseline,[^sw3uw8dv0c] the continuous form of his half-OOM rule is

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/0d6a87e823079c8e24efa43a7516d18d5af2228ae8c50aeb.png)

with t in decimal years. Unless otherwise noted, compute figures are taken from Epoch’s June-2025 census.[^cbgq4di3yc]

**Raw compute**

Aschenbrenner’s simplest trendline assumes that “the training compute used for frontier AI systems has grown at roughly 0.5 OOMs per year.”[^nctwihpl6or] I consider the current frontier AI models to be OpenAI’s o-series, 4.5/4.1, DeepMind’s Gemini 2.5 Pro, and Anthropic’s Claude 4 Opus. Measured against Aschenbrenner’s curve:

*   Grok 3 (17 Feb 2025) spent ≈4.6 × 10²⁶ FLOP, overshooting by +0.38 OOM. This is a high-precision estimate, according to Epoch.
*   For Llama 4 “Behemoth,” Epoch records 5.2 × 10²⁵ FLOP for the still-training model. The Aschenbrenner ramp (Δt ≈ 2.30 yr ⇒ 2.96 × 10²⁶ FLOP) puts it -0.76 OOM below the projection. Epoch’s figure rests on the canonical 6 FLOP / (param · token) rule (one forward + one backward pass) and thus represents a documented lower bound on total training compute.[^scxfd3u2cgf] If we instead include optimizer updates, gradient communication, and attention/reordering overhead (costs typically adding a further 2–6 × to the forward-backward budget at trillion-parameter scale[^3o3ektihzr9] [^huualf727kn]) the effective coefficient rises to 12–36[^bdtwwhabyh4] FLOP / (param · token). Under that more complete accounting, Behemoth’s eventual bill could plausibly land in the ≈ (1–3) × 10²⁶ FLOP range, i.e. -0.47 to +0.01 OOM relative to the ramp once Meta confirms its final corpus and recipe.
    

(Remaining estimates are low-precision or speculative, and should be taken with a heavy grain of salt.)

*   GPT-4.5 (27 Feb 2025) consumed ≈6.4 × 10²⁵ FLOP. With Δt = 1.96 years, the ramp predicts ≈2.0 × 10²⁶ FLOP, so GPT-4.5 reaches only ≈0.32 × the target (–0.50 OOM). Epoch AI flags this estimate as low-precision.
*   GPT-4.1 (14 Apr 2025) used at least 1.0 × 10²⁶ FLOP, as a low-precision baseline estimate. At Δt ≈2.09 years, the trend calls for ≈2.3 × 10²⁶ FLOP, putting GPT-4.1 at worst –0.33 OOM below the line. Epoch AI flags this estimate as speculative.
*   Claude Opus 4 (22 May 2025) is speculatively estimated at ≈1.5 × 10²⁶ FLOP—about 0.57 × the ramp (–0.24 OOM) — Anthropic continues a policy of incremental scaling and optimiser tweaks; this is no real surprise.[^f349quvn0o8]
    
*   Epoch flags OpenAI’s “o-series” reasoning models as “un-estimable,” and I could not find a reliable source estimating the compute used to train Gemini 2.5 Pro, so they are omitted.[^04avqgqz9v9f]
    

Overall, compute growth persists, but certain efficiency-first launches (GPT-4.5, GPT-4.1) run 0.2–0.5 OOM below the straight line, while Grok 3, which had to catch up with other labs’ models, lands ≈0.4 OOM above. The +0.5 OOM yr⁻¹ hypothesis remains plausible, although compute estimates introduce error bars.

**Algorithmic efficiency**

Hardware alone cannot explain recent progress. Aschenbrenner notes that “algorithmic progress… acts as compute multipliers,” and historical curves show ≈0.5 OOM of efficiency every year.[^haqia8hkv47]

Key public improvements since GPT-4 include:

*   Second-order optimisers. Sophia halves steps and total FLOP on GPT-style pre-training,[^k90bzx56qt] while Lion reports up to 5× savings on JFT, conservatively counted as 1.5–2×.[^h2puny8ulp]
    
*   Sparse Mixture-of-Experts. Gemini 1.5 Pro “surpasses 1.0 Ultra while requiring significantly less compute,”[^4uq9d6r0g9c] and Switch-Transformer ablations show up to 7× faster pre-training with equal hardware — ≈2-3× appears realistic at frontier scale.[^0p06830ayazk]
    
*   Data-quality and curriculum efficiency. Curated corpora, selective-token objectives, and token-weighting collectively cut the tokens-per-loss denominator by about 0.30–0.45 orders of magnitude per year. DatologyAI’s curated RedPajama corpus (“DAIT”) lets an MPT-2.7 B model match the un-curated baseline with 7.7 × fewer training FLOPs,[^41k20e0naly] Rho-1 matches DeepSeekMath while using just 3% of the original tokens (≈ 33× saving);[^hjrmjuerahm] and token-weighting improves long-context convergence at constant FLOP, implying a modest extra gain.[^ohoqy5fpopf] Treating overlap between methods as unknown, the evidence supports a conservative 0.2–0.35 OOM yr⁻¹ data multiplier — roughly 1.6–2.2× since GPT-4.
    
*   Throughput-only tricks. FlashAttention-2[^zpnxxh6q2qm] and FP8 kernels[^oc32ebdigv9] roughly double wall-clock speed but do not reduce arithmetic count, so they are excluded from the OOM ledger.
    

Across the 15 months since GPT-4, three publicly documented actors (smarter optimizers, sparse Mixture-of-Experts routing, and higher-quality data curricula) appear to make each training token and gradient step go farther. Using cautious multipliers (1.5× for optimizers, 2× for MoE, 1.2× for data) they combine to about 3.5× overall; taking the most optimistic published numbers (2×, 3×, 1.8×) they could reach 10 ×. Those factors translate to roughly 0.4–0.8 orders of magnitude of “effective compute” per year, with a midpoint near 0.55 OOM/yr. Because we do not yet know how much the individual gains overlap in real frontier runs, anything from 0.2 to 0.8 OOM/yr seems plausible. The centre of the evidence still roughly tracks Aschenbrenner’s estimate.

**Unhobbling gains**

Aschenbrenner’s third lever releases latent abilities by adding RLHF-style tuning, chain-of-thought, tool use, and agentic scaffolding — “on the order of another half-OOM per year, though with wide error bars.”[^hc9a4nvdinu]

This section is necessarily uncertain, even more so than the other two are. To summarize my auditing strategy — sources are limited to Jun 2024–May 2025; levers are categorized broadly to avoid double-counting; each claim carries a primary quote; I include negative findings; and in general, mapping capability to effective FLOP is heuristic and unrigorous.

Training-time levers:

*   Direct Preference Optimisation (DPO) is “computationally lightweight, eliminating the need for sampling.”[^kbebcy1044o]
    
*   Step-DPO,[^xj635o2m9pd] SVPO,[^9rl9z6ac7og] and Full-Step-DPO[^cg1rx00301] extend the idea to long-chain reasoning with little or no extra pre-train FLOP.
    
*   Self-Refinement Tuning boosts AlpacaEval win-rate from 9.6% to 25.8% using just 22k feedback samples; estimate ≈5–10× label efficiency.[^3jxglnz2x15]  
     
    

Inference-time levers:

*   Re RL-Chain-of-Thought, supervised “copy-the-trace” distillation is not always free accuracy. Apple’s *The Illusion of Thinking* finds that Large Reasoning Models fall below vanilla LLMs on low-complexity DROP-style questions and suffer a “complete accuracy collapse” once problem compositionality passes a modest threshold.[^50pg0rgi5w9] To claw back those lost bits of effective compute, several groups now tune the hidden chain-of-thought with reinforcement learning. DeepSeek-R1-Zero applies pure RL to a 56 B base model. On AIME-2024 the pass@1 rate rises from 15.6% to 71.0% — a 4.5× jump at strictly constant pre-training FLOP.[^7bju92ew4xt] Similarly, Apple “Interleaved Reasoning” adds a simple PPO/GRPO reward that penalises wasted tokens while rewarding correct sub-steps; across five QA/logic sets it cuts time-to-first-token by >80% and lifts pass@1 by up to 19.3 pp over the same pre-train budget.[^ey0wjmbcvh]
    
*   OpenAI’s Computer-Using-Agent scores 87% on WebVoyager but only 58% on WebArena.[^cvy2kgictoc]
    
*   LongRAG reaches HotpotQA EM 64.3% zero-shot.[^2n7xtazxfdf] though distractions drop accuracy.[^skdtpx1lebc]
    
*   LongSpec trims latency for 1 M-token contexts without changing FLOP.[^lrhuwsl4h]  
     
    

**Range estimate**. Training-time techniques such as DPO, Self-Refinement, and especially RL-CoT typically deliver 2×–5× task-level gains without extra pre-train FLOP. When they work, inference-time scaffolds (tool use, LongRAG, agent loops) add about another 1×–3×; when they misfire, they can subtract. Stacking the median effects suggests roughly 0.56 OOM of effective compute per year, but a cautious, heuristic band spanning 0.2–0.9 OOM/yr seems warranted once failures, double-counting, and task variance are accounted for.[^1v5zunpu5yn]Aschenbrenner’s +0.5 OOM/yr target seems reasonable, with heavy noise. (Proprietary techniques at OpenAI, Anthropic, and DeepMind almost certainly mean the true figure is higher, although it is useless to speculate.)

**“Racing to the Trillion-Dollar Cluster”**

Section III-a pivots from the model-side “drivers” to the industrial scaffolding needed to sustain them. Aschenbrenner argues that hardware growth, capital outlays, and electricity supply must accelerate just as quickly as effective compute — roughly half an order of magnitude every year for single training clusters and a clean annual doubling for aggregate investment, chip shipments, and power demand.[^duvx10h7ycf] Hitting those slopes would lift the peak cluster from about 100 k H100-class GPUs in 2024 to a million in 2026 and push capital spending toward the trillion-dollar mark by the late 2020s. The next subsections examine each waypoint — largest training cluster, world AI investment and hardware output, revenue ramp, chip supply, and power — in light of the data now available through June 2025.

**Largest training cluster**

In section III-a, Aschenbrenner outlines a consistent annual growth trend for AI training compute of roughly half an order of magnitude (≈3.2×). He anchors this trend to concrete benchmarks: by 2024, the largest training clusters would use approximately 100,000 H100-equivalent GPUs and draw around 100 MW, scaling up to about one million GPUs and 1 GW by 2026. Extrapolating one year lands the June 2025 waypoint at ≈3×105 H100-class GPUs, costing on the order of $15B and drawing about 0.3 GW.

Public evidence points to three independent fleets converging around the 10^5-GPU mark:

*   Meta (Llama-4). Mark Zuckerberg told investors that Llama-4 is “training on a cluster that is bigger than 100,000 H100s.”[^3wzmdn87xq3] Meta’s March-2024 infrastructure roadmap also targets ≈350,000 H100s installed by end-2024, implying the raw silicon to hit the 2025 trend-line exists, but only ≈100 k appear to be wired into one fabric so far.[^kbp6btkyoen] Using Nvidia’s published 10.2 kW max per DGX-H100 (8 × H100 GPUs),[^v1fuv2nx9k] 100 000 GPUs work out to roughly 130–150 MW—about half the 0.3 GW slope.[^h22pupzw3nr]
    
*   xAI (Colossus). The Memphis build came online in July 2024 with 100,000 H100s on a single RDMA fabric and plans to double to 200,000 GPUs when H200s ship later in 2025.[^17jg6goe5bu] Power figures are not disclosed; at the same 1.3–1.5 kW/GPU rule of thumb, phase 1 is again ≈150 MW.
    

No operator has acknowledged a single-fabric training run at the 3 × 105 level; the largest verifiable jobs hover at ≈1-1.5×105. That is ≈0.5-0.17 OOM (≈3×-1.5x) below the straight-line projection — consistent with a world where aggregate capacity is scaling faster than peak single-job size. Meta’s publicly purchased inventory and xAI’s announced phase-2 suggest hardware headroom exists; the present brake appears to be interconnect engineering, cooling, and power delivery rather than silicon supply.[^h4nxehqopnl] In short, the trillion-dollar-cluster curve is running about half an order of magnitude behind schedule at the “largest single job” level.

**Total world AI investment and hardware output**

“My best guess is overall compute investments will grow more slowly than the 3× per-year largest training clusters—let’s say 2× per year.”[^61jbng2xaj] In the same table, Aschenbrenner pins 2024 at “≈$150 B… 5–10 M accelerators” and 2026 at “≈$500 B … tens of millions.” A straight-line 2× slope therefore sets the mid-2025 waypoint at roughly $300 billion of AI-directed cap-ex, 15–20 million H100-class accelerators shipped, a mid-teen share of TSMC’s leading-edge wafers, and aggregate AI electricity demand brushing ≈3 percent of U.S. generation.

Evaluating capital, accelerator volume, wafer share, and committed power by Aschenbrenner’s 2× curve:

*   Capital spending. Public disclosures from the U.S. “Big 4” hyperscalers already total ≈$320 billion:
    *   Alphabet reaffirmed $75 B for 2025.[^aesza6jyi2v] It seems reasonable to infer that much of this is tagged to AI data centers, given public messaging.
        
    *   Meta guided $64 – 72 B to expand GenAI facilities.[^g5fspwwsae7]
        
    *   Amazon’s AWS build-out will exceed $100 B this year, aimed at relieving GPU scarcity.[^styk09pbhc]
        
    *   Microsoft earmarked ≈$80 B for fiscal-2025 AI data-center growth.[^flqcv2r4cb5]
        

Reuters tallies those four at ≈$320 B. Not 100% of each of those figures is going towards AI, but adding Tesla, ByteDance, xAI and national labs probably lifts the 2025 cap-ex envelope slightly ahead of the $300 B target.

*   Accelerator shipments. Dell’Oro Group says U.S. hyperscalers deployed “over 5 million training accelerators in 2024.”[^tpzgbchppbj] Morgan Stanley projects 688 k 300 mm wafers for AI processors in 2025 — equivalent to ≈12 M GPU-class cards — with Nvidia alone booking 535 k wafers.[^7nprj3sn5tc] Blackwell-generation commentary adds another couple million devices, and TPU v6, Trainium 2 and MI300 volumes together push 2025 output into the 12–16 M range, comfortably inside the 15 M ± a few-million window.
    
*   Wafer and packaging share. Morgan Stanley’s 1Q 2025 slide counts about 688,000 300mm wafers earmarked for AI processors in 2025.[^vdqkm5ut3ie] TSMC’s 2024 Annual Report guides total 2025 shipments to 14–15 million 12-inch-equivalent wafers, 70–80 percent of which are forecast to be on ≤ 7 nm nodes; that puts AI logic at roughly 6–7 percent of the foundry’s leading-edge volume.[^j9ktx063jgl] TrendForce reports CoWoS advanced-packaging capacity will reach ≈75 k wafers per month by end-2025, nearly doubling 2024’s flow.[^edp91hpoqb] 
    
*   Electric-power demand. Meta’s 20-year PPA for the entire 1.1 GW Clinton nuclear plant plus an open RFP for up to 4 GW,[^g6zuax8xe2g] Amazon’s multi-gigawatt SMR programme and fresh 3 GW of grid contracts[^m9zesgxvjkb], and utility docket filings in Georgia, Virginia and Texas that together add ≈2 GW further, put 7–9 GW of firm capacity in the 2025-27 pipeline. Against the EIA’s 2025 U.S. average load of 480 GW, that is 2.3–2.9% of the grid; close to the 3% estimate.
    

Uncertainties remain (how much of each hyperscaler’s cap-ex is strictly AI; the training-vs-inference split of GPUs), but the 2025 data do not contradict Aschenbrenner’s forecasts.

**Revenue ramp**

Aschenbrenner projects a six-month doubling cadence for flagship AI revenue: from roughly $2 billion in February 2024 to ≈$10 billion by early 2025, $20–40 billion by December 2025, and $100 billion by mid-2026.[^u0zc590dsq]

*   Early-2025 waypoint (≥ $10 billion run rate). Microsoft reached it first — on 29 January 2025, Satya Nadella stated that Microsoft’s AI portfolio (Azure model-hosting, Microsoft 365 Copilot, GitHub Copilot, and smaller lines) was already running at $13 billion a year, up 175 percent YoY.[^no6lfs1h52m] OpenAI forecasts ≈$12 billion revenue for calendar 2025[^eeipr8y0yva] and, as of June 2025, reports a $10 billion annualised run rate.[^e8ceubya8w] Anthropic hit $3 billion in May 2025 after tripling in five months, offering a second data-point for the slope.[^ofx2qlb8n09] 
    
*   Late-2025 waypoint ($20–40 billion). No company has yet published figures in this range. Microsoft’s April-2025 filing notes AI added 16 percentage points to Azure’s 33 percent YoY growth but leaves the dollar line unchanged.[^2ecfs80trnx] OpenAI and Anthropic are two doublings away.
    

Aschenbrenner’s first checkpoint ($10 billion annualised revenue by early 2025) is satisfied; the second ($20–40 billion by year-end) remains unproven. The six-month doubling clock is running slower in practice than by Aschenbrenner’s prediction.

**Chip supply**

Aschenbrenner notes that in 2024 AI chips consumed “<10 % of TSMC leading-edge production,” yet overall compute investment should keep doubling each year, pushing 2025 to mid-teen wafer share and roughly 15–20 million data-centre accelerators, with CoWoS advanced-packaging capacity “forced to scale in lock-step.”[^h9iefnzuqls]

*   Wafer share. Morgan Stanley’s February-2025 survey, relayed by Tom’s Hardware, counts ≈688 000 300-mm AI-logic wafers for 2025 — more than double 2024’s ≈330 k.[^92oc58j4p9s]
    
*   Accelerator units. Dell’Oro says “over 5 million” training-grade parts shipped in 2024.[^afavvlsz5zg]
    
*   Advanced packaging. TrendForce reports TSMC’s CoWoS capacity will hit ≈75,000 wafers / month in 2025, nearly doubling 2024’s flow — exactly the scale-out the essay demands.[^yxqgnn6t8g]
    
*   Memory bottleneck. With logic and CoWoS on track, HBM is now the pinch-point; SK Hynix says its 2025 HBM output is “almost sold out,” confirming III-a’s warning that high-bandwidth memory, not lithography, will be the gating factor.[^png6fog6wfm]
    

All three 2025 checkpoints are met; supply is still “tight,” but the constraint has shifted to HBM stacks and substrates.

**Power**

Situational Awareness traces two log-linear curves: one for the biggest single training run and another for the total U.S. AI load. The first rises from about 0.1 GW in 2024 to 1 GW in 2026, so mid-2025 should see roughly 0.3 GW. The second climbs from 1–2 percent of U.S. electricity in 2024 to 5 percent in 2026, putting the 2025 checkpoint near 3 percent. Public evidence shows the aggregate curve on target while the peak-job curve lags.

The largest disclosed jobs — xAI’s 100 000-GPU Colossus cluster and Meta’s similarly sized Llama-4 rig — each draw on the order of 150 MW, about one-quarter of a gigawatt, or 0.25 OOM short of the 0.3 GW waypoint.[^ug2qhe1n4if] [^cb5mthrvlrp] Google’s Trillium TPU fabric, also “over 100,000” chips, is unlikely to exceed 200 MW.[^03ir9brl9n1p] No company has yet acknowledged a 300 MW training run, so the single-cluster curve is roughly a quarter-order behind but still within Aschenbrenner’s own ±0.2 OOM margin of error.

System-level demand is another story. Big-tech firms have begun signing gigawatt-scale power-purchase agreements: Meta now has a 1.1 GW, 20-year contract for the Clinton nuclear plant,[^3pz7p7awg3q] Microsoft is financing an 835 MW restart of Three Mile Island Unit 1,[^hynyxg3ujbl] and Amazon’s Susquehanna campus is on track for 1.92 GW.[^s5w566dy5qi] These deals, plus small-modular-reactor memoranda at Amazon and Google, already anchor at least 2–3 GW of firm carbon-free capacity scheduled to come online from late 2025. Meanwhile, U.S. grid‐interconnection queues have ballooned — Oncor in Texas reports 119 GW of new data-center requests, and Pennsylvania’s PPL shows 50 GW — evidence of essentially price-insensitive appetite for megawatts.[^bxllxpi0zqr] 

DOE estimates that data centers used 176 TWh in 2023 (4.4 percent of generation) and will consume 6.7–12 percent by 2028.[^nimsslr74q] Against the EIA’s projected 2025 demand of 4 205 TWh (≈ 480 GW average), the 7–9 GW of firm capacity already contracted and under construction places current-plus-committed AI load at roughly 11–14 GW, or 2.3–2.9 percent of the 2025 grid; exactly the 3 percent waypoint.[^paqcaiyd5qm] 

Overall, the aggregate power curve is on schedule and likely to overshoot in 2026–27 as nuclear PPAs begin delivering, whereas the peak-job curve is one quarter-order behind, held back not by GPUs but by the difficulty of siting and interconnecting hundreds of megawatts of steady, low-carbon power.

**Conclusion**

One year in, data broadly supports Aschenbrenner’s key claims. Raw compute is uneven — efficiency-focused models fall short while xAI’s Grok 3 surpasses expectations — but the predicted overall trend holds when accounting for algorithmic and post-training improvements. Infrastructure metrics such as capital investment, accelerator shipments, wafer share, packaging capacity, and committed power meet or slightly exceed forecasts, though single-cluster scale lags due to interconnect and siting issues. Revenue growth remains the weakest metric, hitting the early-2025 milestone but needing significant acceleration to reach late-2025 targets. Overall, Aschenbrenner’s timeline is plausible if current power, memory, and cooling constraints ease and large-scale corporate investments continue. However, considerable uncertainty remains, and infrastructure growth alone does not guarantee proportional frontier-model capabilities — a question outside the scope of this audit.

[^lgzy1wqyn0s]: Leopold Aschenbrenner, Situational Awareness (2024). https://situational-awareness.ai/ 

[^hqyijeeuuqp]: Ibid. 

[^319v4a02wq]: Epoch AI. “Models Trained with Over 1e25 FLOP.” https://epoch.ai/data-insights/models-over-1e25-flop. 

[^aro4araohcs]: Ibid. 

[^ligo7fcmgwo]: AI 2027: Forecasts and Implications. AI Futures Project. https://ai-2027.com/. 

[^vo94ze2z62]: Aschenbrenner, Situational Awareness. 

[^sw3uw8dv0c]: OpenAI, GPT-4 Technical Report, Mar 2023. 

[^cbgq4di3yc]: Epoch, “Models Trained with Over 1e25 FLOP.” 

[^nctwihpl6or]: Aschenbrenner, Situational Awareness. 

[^scxfd3u2cgf]: Epoch’s methodology note for all rows tagged “high-precision” states: “When public parameter count and dataset size are available, we approximate training compute as 6 × (# active params) × (# tokens).” For Behemoth: 6 × (288 B params) × (30 T tokens) = 5.18 × 10²⁵ ≈ 5.2 × 10²⁵ FLOP. 

[^3o3ektihzr9]: Jared Kaplan et al., “Scaling Laws for Neural Language Models,” arXiv 2001.08361 (2020)—introduces the 6 FLOP coefficient. 

[^huualf727kn]: Jeff Rasley et al., “ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning,” Proceedings of SC 23 (2023)—reports 2–6 × overhead from optimizer states and gradient sharding at ZeRO stages 2–3. 

[^bdtwwhabyh4]: Engineering estimate. 

[^f349quvn0o8]: Anthropic statements compiled with Epoch census, May 2025. 

[^04avqgqz9v9f]: Epoch, “Models Trained with Over 1e25 FLOP.” 

[^haqia8hkv47]: Aschenbrenner, Situational Awareness. 

[^k90bzx56qt]: Liu et al., “Sophia: A Scalable Stochastic Second-Order Optimizer,” arXiv:2305.14342, May 2023. 

[^h2puny8ulp]: Chen et al., “Lion: Symbolic Discovery of Optimisation Algorithms,” arXiv:2302.06675, Feb 2023. 

[^4uq9d6r0g9c]: Google DeepMind, “Gemini 1.5 Technical Report,” arXiv:2403.05530, Mar 2024.. 

[^0p06830ayazk]: Fedus et al., “Switch Transformer,” arXiv:2101.03961, Jan 2021. 

[^41k20e0naly]: DatologyAI, “Curating Our Way to a State-of-the-Art Text Dataset,” November 13 2024, https://www.datologyai.com. 

[^hjrmjuerahm]: Zhenghao Lin et al., “Rho-1: Not All Tokens Are What You Need,” arXiv 2404.07965, rev. January 7 2025. 

[^ohoqy5fpopf]: Falko Helm, Nico Daheim, and Iryna Gurevych, “Token Weighting for Long-Range Language Modeling,” arXiv 2503.09202, March 12 2025. 

[^zpnxxh6q2qm]: Dao et al., “FlashAttention-2,” arXiv:2307.08691, Jul 2023. 

[^oc32ebdigv9]: NVIDIA, “Hopper Architecture In-Depth,” Aug 2022. 

[^hc9a4nvdinu]: Aschenbrenner, Situational Awareness. 

[^kbebcy1044o]: Rafailov et al., “Direct Preference Optimisation v3,” arXiv:2305.18290v3, Jul 2024. 

[^xj635o2m9pd]: Lai et al., “Step-DPO,” arXiv:2406.18629, Jun 2024. 

[^9rl9z6ac7og]: Hu et al., “Step-Level Value Preference Optimisation (SVPO),” arXiv:2406.10858v2, Sep 2024. 

[^cg1rx00301]: Xu et al., “Full-Step-DPO,” arXiv:2502.14356, Feb 2025. 

[^3jxglnz2x15]: Hu et al., “Self-Refinement Tuning,” arXiv:2406.07168, Jun 2024. 

[^50pg0rgi5w9]: Shojaee, Parshin, et al. “The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity.” Apple Machine Learning Research, June 2025, lines L2–5. 

[^7bju92ew4xt]: DeepSeek-AI et al. “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning.” arXiv preprint arXiv:2501.12948, 2025, 11–12. 

[^ey0wjmbcvh]: Xie, Roy, et al. “Interleaved Reasoning for Large Language Models via Reinforcement Learning.” Apple Machine Learning Research, 28 May 2025, lines L3–4. 

[^cvy2kgictoc]: OpenAI, “Computer-Using-Agent Benchmarks,” Jan 2025. 

[^2n7xtazxfdf]: Jiang et al., “LongRAG: Enhancing RAG…,” arXiv:2406.15319, Jun 2024. 

[^skdtpx1lebc]: Amiraz et al., “The Distracting Effect,” arXiv:2505.06914, May 2025. 

[^lrhuwsl4h]: Yan et al., “LongSpec: Long-Context Speculative Decoding,” arXiv:2502.17421, Feb 2025. 

[^1v5zunpu5yn]: This is quite an imprecise figure; “stacking” unhobbling gains in this way is unrigorous. 

[^duvx10h7ycf]: Aschenbrenner, Situational Awareness. 

[^3wzmdn87xq3]: Tom’s Hardware, “Meta Is Using More Than 100 000 Nvidia H100 AI GPUs to Train Llama-4,” October 27 2024. 

[^kbp6btkyoen]: Meta Engineering Blog, “Building Meta’s GenAI Infrastructure,” March 12 2024. 

[^v1fuv2nx9k]: Timothy Prickett Morgan, “Nvidia Launches Hopper H100 GPU, New DGXs and Grace,” HPCwire, March 22 2022. 

[^h22pupzw3nr]: Nvidia Corp., DGX H100/H200 User Guide, rev. 1.2, Table 3 “Power Specifications,” 2025. 

[^17jg6goe5bu]: Dan Olds, “xAI Colossus: The Elon Project,” HPCwire, September 5 2024. 

[^h4nxehqopnl]: Matt Vincent, “New IEA Report Contrasts Energy Bottlenecks with Opportunities for AI and Data Center Growth,” Data Center Frontier, April 23 2025. 

[^61jbng2xaj]: Aschenbrenner, Situational Awareness. 

[^aesza6jyi2v]: “Alphabet CEO reaffirms planned $75 billion capital spending in 2025,” Reuters, April 9 2025. 

[^g5fspwwsae7]: Jaspreet Singh, “Meta to spend up to $65 billion this year to power AI goals,” Reuters, Jan 24 2025. 

[^styk09pbhc]: Roberto Torres, “Amazon plans to pour more than $100 billion into capital investments this year,” CIO Dive, Feb 2025. 

[^flqcv2r4cb5]: “Microsoft plans to invest $80 billion on AI-enabled data centres in fiscal 2025,” Reuters, Jan 3 2025. 

[^tpzgbchppbj]: Dell’Oro Group, press release “US hyperscalers set to deploy over 5 million AI training accelerators in 2024,” Dec 19 2024. 

[^7nprj3sn5tc]: Anton Shilov, “Nvidia to consume 77 % of wafers used for AI processors in 2025,” Tom’s Hardware, Feb 19 2025 (citing Morgan Stanley). 

[^vdqkm5ut3ie]: Anton Shilov, “Nvidia to Consume 77% of Wafers Used for AI Processors in 2025: Report,” Tom’s Hardware, 19 February 2025, https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidia-to-consume-77-percent-of-wafers-used-for-ai-processors-in-2025-report. 

[^j9ktx063jgl]: Taiwan Semiconductor Manufacturing Company (TSMC), 2024 Annual Report, p. 10, https://investor.tsmc.com/static/annualReports/2024/english/ebook/files/basic-html/page10.html. 

[^edp91hpoqb]: TrendForce, “TSMC set to expand CoWoS capacity to 75 000 wafers in 2025,” Jan 2 2025. 

[^g6zuax8xe2g]: Lamar Johnson, “Meta, Constellation ink 20-year nuclear power deal to support AI goals,” Utility Dive, June 6 2025. 

[^m9zesgxvjkb]: “Big Tech contracts inject life into new nuclear,” Reuters, Feb 19 2025. 

[^u0zc590dsq]: Aschenbrenner, Situational Awareness. 

[^no6lfs1h52m]: Microsoft Corp., “Microsoft Cloud and AI Strength Drives Second Quarter Results,” press release, 29 January 2025. 

[^eeipr8y0yva]: “OpenAI does not expect to be cash-flow positive until 2029,” Reuters, 26 March 2025. 

[^e8ceubya8w]: “OpenAI’s annualised revenue hits $10 billion,” Reuters, 9 June 2025. 

[^ofx2qlb8n09]: “Anthropic hits $3 billion in annualised revenue,” Reuters, 30 May 2025. 

[^2ecfs80trnx]: “Microsoft beats quarterly revenue estimates; AI shift bolsters cloud demand,” Reuters, 30 April 2025. 

[^h9iefnzuqls]: Aschenbrenner, Situational Awareness. 

[^92oc58j4p9s]: Anton Shilov, “Nvidia to Consume 77 % of Wafers Used for AI Processors in 2025,” Tom’s Hardware, 19 February 2025 (citing Morgan Stanley). 

[^afavvlsz5zg]: Dell’Oro Group, press release “US Hyperscalers Set to Deploy Over 5 Million AI Training Accelerators in 2024,” 19 December 2024; Morgan Stanley projections in Shilov, ibid. 

[^yxqgnn6t8g]: “TrendForce, “TSMC Set to Expand CoWoS Capacity to 75 000 Wafers in 2025,” 2 January 2025. 

[^png6fog6wfm]: Joyce Lee and Heekyong Yang, “Nvidia Supplier SK Hynix Says HBM Chips Almost Sold Out for 2025,” Reuters, 2 May 2024; TrendForce, “HBM3e Supply to Remain Tight into 2025,” 18 March 2025. 

[^ug2qhe1n4if]: Dan Olds, “xAI Colossus: The Elon Project,” HPCwire, 5 September 2024. 

[^cb5mthrvlrp]: Jowi Morales, “Meta Is Using More Than 100 000 Nvidia H100 GPUs to Train Llama-4,” Tom’s Hardware, 31 October 2024. 

[^03ir9brl9n1p]: Google Cloud Blog, “Trillium TPU Is GA,” 2 December 2024. 

[^3pz7p7awg3q]: Kavya Babu, “Meta, Constellation Ink 20-Year Nuclear-Power Deal to Support AI Goals,” Utility Dive, 6 June 2025. 

[^hynyxg3ujbl]: David Shepardson, “Microsoft Deal Propels Three Mile Island Restart,” Reuters, 20 September 2024. 

[^s5w566dy5qi]: Neil Ford, “Big-Tech Contracts Inject Life into New Nuclear,” Reuters, 19 February 2025. 

[^bxllxpi0zqr]: Nichola Groom, “US Utilities Grapple with Big Tech’s Massive Power Demands,” Reuters, 7 April 2025. 

[^nimsslr74q]: U.S. Department of Energy, “Evaluating the Increase in Electricity Demand from Data Centers,” press release, 4 January 2025. 

[^paqcaiyd5qm]: Scott DiSavino, “US Power Use to Reach Record Highs in 2025 and 2026, EIA Says,” Reuters, 6 May 2025.