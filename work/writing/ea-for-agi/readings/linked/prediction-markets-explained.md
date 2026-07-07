---
title: "Prediction Markets Explained"
author: "Benjamin_Sturisky"
date: 2024-07-29
url: https://www.lesswrong.com/posts/GxmfqKjs6ruxNxhqr/prediction-markets-explained
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by persuasion-epistemics/buterin-info-finance.md; explainer on how prediction markets work — foundational for epistemics/coordination unit"
---

Prediction markets are contract-based markets that track the outcome of specific events.

Traders buy shares in a market (priced 0 < x < 100), and depending on the event's outcome, those shares are either worth 0 or 100.

1.  A market is created to determine if the price of Ethereum is >= 3500 at the end of October.
2.  YES, shares are selling for 60c, implying a 60% probability that ETH >= 3500 on the settlement date.
3.  Trader X buys 100 YES shares for $60, whereas Trader Y buys 100 NO shares for $40.
4.  At the end of October, ETH is 3700. Trader X redeems his 100 shares for $100 (~1.66x), and Trader Y is zeroed out.

The only constraints on a prediction market's existence are a willing external party to create the market and traders willing to purchase contracts for both sides.

There are three different types of prediction markets:

*   **Binary**: These markets are YES/NO, without a possibility for a third answer. The market above is binary.
*   **Categorical**: These markets include multiple outcomes. A simple example is a prediction market on the first crypto protocol to airdrop. The market will include a predetermined set of outcomes, and each outcome will have ever-changing, varying probabilities assigned.
*   **Continuous**: These markets handle events with many different possible settlements. Predicting the close of BTC on a given date would be a continuous market, as there are infinitely possible prices at which BTC could close. Due to this, continuous markets typically integrate predetermined constraints, such as >= 70,000, 60,000 < X < 70,000, and <= 60,000.

There are several different real-world practical applications for prediction markets:

*   **Political:** Political markets are arguably the reason prediction markets start seeing accelerated growth and volume. The majority of volume stems from presidential elections and senate/house races. The U.S. presidential election alone has 128.5M outstanding contracts, with more than five months left until the election.
*   **Economic:** Economic markets are normally continuous and consist of different financial indicators, such as the CPI rate, unemployment/housing figures, and GDP growth.
*   **Corporate:** Corporate markets are typically used to predict the sales of a certain product or merger. However, they can also be used in less sophisticated ways, such as “What is the probability Delta Airlines has a commercial during the Super Bowl?”
*   **Entertainment:** Entertainment markets are prevalent because sportsbooks under the hood are effectively prediction markets with a house edge. These markets can commonly be arbitraged, as discussed [here](https://members.delphidigital.io/feed/future-polymarket-arbitrage?&utm_source=link&utm_medium=portal). In a nuanced fashion, prediction markets are inefficient, so there is typically a disparity between sportsbook offerings and probability assigned to prediction markets.
*   **Arbitrary:** Arbitrary prediction markets are effectively any market not categorized under the above four.

Accurate Probability
--------------------

Probability theory is a framework for quantifying uncertainty. Probability is present in every aspect of life, from simple, everyday choices to research and risk assessment. Probability allows individuals to make logic-based decisions by understanding the likelihood of an event occurring.

Accurate probability is the representation of the true odds of an event occurring, free of manipulation and bias.

The most verifiable way to prove the accurate probability of an event occurring is by backing those odds with the most valuable good in the world: money.

In a world where prediction markets are utilized as the first probability source, biased and manipulated odds are not considered because nothing quantifiable backs those odds.

Liquidity
---------

There are two main methods of liquidity systems in prediction markets.

### AMMs

AMMs (automated market makers) are smart contracts that hold liquidity for an asset pair. Users can swap each asset through the liquidity pool at an exchange rate determined by a formula. AMMs charge fees on each trade, which are returned to the liquidity pool and allocated pro-rata to each liquidity provider.

### CLOBs

CLOBs (central-limit order books) are a liquidity system with two options: maker and Taker. Maker orders place bids below and ask above the mark price.

The duality of CLOB fees is that, depending on the trader's needs, there are differentiating fees through **maker** and **taker** orders.

Users taking away from the liquidity through a taker order will pay more fees than a user adding to market stability through maker orders. In some extreme markets, taker orders can subsidize maker orders into collecting a positive fee. This is impossible through AMMs - everyone pays the same fee regardless of whether you assist in market stability.

This enhances liquidity through condensation into price bands that traders utilize. CLOB Systems also allows large orders to be placed and fulfilled at specific prices. They also reduce the probability and likelihood of sandwich attacks because their price impact is less predictable than that of AMMs, which is dangerously predictable.

Subsidizing Liquidity
---------------------

Liquidity is arguably the most significant issue prediction markets face.

It is not +EV for market-makers to provide liquidity on prediction markets because of the tail risk of being stuck with zeroed-out shares.

Until prediction markets reach a stage where there is enough demand to market-make to keep markets efficient, markets need to be subsidized.

Subsidizing liquidity is integral to justifying the risk: reward ratio market-makers face when market-making prediction markets.

The concepts outlined below show that it is possible to attract liquidity with the right incentives.

There are four popular avenues that markets can take here:

1.  Providing yield to liquidity providers
    1.  Providing direct USDC/ETH incentives is a common strategy employed by various DeFI protocols to attract liquidity and TVL. The issue with this strategy is that the prediction market will need to subsidize enough for market-makers to take on risk, as market-making prediction markets carry significant risk.
2.  Providing liquidity directly
    1.  As stated above, market-making prediction markets are not profitable because of share tail risk. There are ways to counteract this by setting bids a fixed percentage lower and asking a fixed percentage higher than the mark price. This allows some room to lower risk as the market maker only takes on positions cheaper than their “fair probability.”
3.  Kickbacks
    1.  Kickbacks for maker orders are a common tactic to increase market liquidity. The process is simple: charge a fee on taker orders and redirect that fee to maker orders. Every taker order needs a maker order to be fulfilled (the liquidity needs to be taken from somewhere). Penalizing people taking liquidity from the market to provide liquidity to those making the liquidity is beneficial to lower risk for market-makers.
4.  Plunge Protection
    1.  When a user purchases or sells a significant amount of shares that move the market > a certain %, the market can use a Plunge Protection fund to ‘stabilize’ the market. This is +EV because if the market is efficient, the price should eventually return to its normal level; at this point, the position can slowly be sold back into the market for a small profit.
    2.  There are many caveats with this method, mainly that plunge protection is only viable in high-volume markets. This is because the plunge protection fund needs sufficient liquidity to exit into, as traders should not be holding positions until resolution. Additionally, it doesn’t make sense for the fund to activate with X days left until resolution, as the risk of traders with asymmetric information is more likely the closer to resolution.

Directly subsidizing liquidity from protocol profits is not viable in the long run. However, in the short term, it is perfectly feasible and very similar to the CAC (customer acquisition cost) paid by traditional sportsbooks to attract users.

In the crypto world, if a protocol isn’t subsidizing you to do something, even as simple as depositing ETH in a lending dAPP, there is a high plausibility that a competitor is willing to subsidize you to do the same action. I expect prediction markets like Polymarket and Thales to continue subsidizing for as long as possible (especially with native tokens once released).

LLMs as Resolution Sources
--------------------------

LLMs are a form of artificial intelligence that integrates machine learning to analyze significant data sets and solve tasks.

In the future, I find it very probable that LLMs will act as the ‘creators’ of markets. Prediction markets rely on clean-cut rules to provide resolution.

With some abstract markets, there are many possible loopholes.

An example of this is the recent market on Polymarket for the approval of the Ethereum ETF. The rules stated “an approval” of the spot Ether ETF by May 23rd for the market to resolve YES. Still, they did not clarify if 19B-4s alone constituted enough to determine the market or if the S-1s (set to be approved later) were also needed.

Having LLMs create rules for markets greatly reduces the probability of loopholes in abstract markets. Additionally, on the off chance that a market has a loophole, LLMs can act as the ‘resolver’ to prevent other dispute resolution methods from taking place (which introduce attack vectors mentioned below).

Integrating decentralized LLMs like Bittensor can also prevent manipulation in rule construction and dispute resolution.

While LLMs are not yet polished or accurate enough to have any fundamental, meaningful role in the construction of these markets, in the future they will be. As such, I expect many prediction markets to switch from manual market creation to strictly LLM to prevent disputes.

Attack Vectors
--------------

### Governance

The process for a market on Polymarket to be initialized and resolved is the following:

1.  Decide the market structure (binary, categorical, continuous) and the potential outcomes.
2.  Determine the rules (I.E., what is the prediction market based on?)
3.  Configure a resolution source (e.g., political markets might use a government source, economic markets might use a Federal Reserve, etc.).
4.  The market is proposed through a resolution address.
5.  Once the market is believed to be resolved, someone can propose a resolution. This is sent to UMA’s O.O. (Optimistic Oracle) to process data and resolve the market.

If there is a dispute over the resolution, UMA’s governance holders vote on the resolution. UMA’s DAO effectively acts as a supreme court.

Utilizing the UMA DAO as a resolution court leaves markets prone to potential manipulation attacks:

1.  The exploiter acquires a majority share in the UMA DAO by purchasing tokens or bribing delegators.
2.  The exploiter buys up a lot of low-valued shares.
3.  If the market ends up winning, they profit a lot. If the market loses, they can dispute it and use their majority $UMA delegation to resolve the dispute to favor their shares.

The probability of an attack occurring through a single address owning 51% of the circulating supply is improbable. As of writing, $UMA has a 291.4 circulating market cap and a volume/mc ratio of only 18%. It would be incredibly difficult and expensive to acquire 51% of the circulating tokens. Additionally, it would be significantly unprofitable, as Polymarket does not have nearly enough volume to warrant an attack this way.

Another attack possibility is through bribes. Suppose an attacker can convince large holders to vote alongside him (either through them also participating in the attack or bribes). In that case, the probability of a DAO vote succeeding in rewarding the shares that should have been zeroed out is high.

The above scenarios are ultimately very unlikely and short-term as AI expands and LLMs (large-language models) can act as resolution sources.

Asymmetric Information
----------------------

In prediction markets, asymmetric information is the concept that a party has more information on the outcome of an event than the party they are trading against.

If there is a market for whether Variational will release its token before June 1st, an insider at Variational can buy up shares of the outcome they know will occur.

Blockchains cannot decipher if a party has access to asymmetric information. While blockchains make monitoring and analyzing transactions simple, they cannot assess the reasoning behind a transaction. This is because networks do not have a way of connecting perfectly anonymous addresses to their real-life identities.

Thus, it is not technically possible to asses whether an anonymous address that places a prediction has access to asymmetric information.

**Oracle front-running** is the concept that a trader has access to asymmetric information before an Oracle, thereby allowing them to place bets or trades that they know will be profitable.

In prediction markets, if an event is effectively resolved but the market is still tradeable, this creates an attack where traders with knowledge that the event is resolved can buy up shares trading at a discount to their actual value.

Sportsbooks solved this issue by creating a short delay in placing bets to allow their oracles to process data and subsequently adjust market odds. This protected sportsbooks from individuals at an actual sports game betting as soon as they saw something happen. This is not plausible for prediction markets because some traders can access asymmetric information weeks/months before market resolution.

While some argue this makes an efficient market, this problem creates a significant issue for market-makers because of adverse selection.

If market-makers are trading against people who consistently are better-informed than them, they will face consistent losses and eventually stop market-making, leading to less overall liquidity.

Random Fallacies of Prediction Markets
--------------------------------------

*   When markets are viewed from a speculative perspective instead of a “creating efficient probability” perspective, markets divulge from their actual probability. If a trader believes in X, they are likely to bid on outcome X even at odds higher than their accurate probability. In an efficient market, this can be arbitrated, but in some markets, this arbitrage is not possible because of a lack of liquidity or far-away resolution times.
*   Hedging distorts actual probability by pushing odds above expected probability for external reasons. Hedging is a strategy for reducing risk in financial assets. The CPI expected M/M rate is 3.2% in a theoretical example. The prediction markets showcase a 33% chance of < 3.2%, 33% chance of = 3.2%, and 33% chance of > 3.2%. However, statistically, a CPI below the expected rate will increase the stock market, and above 3.2% will make the stock market go down. Someone with a significant set of SPY calls can buy shares of the < 3.2% market to hedge their risk. On the prediction market, this will increase the % chance that it is under 3.2% because prediction market odds move based on buy and sell demand. Therefore, the below 3.2% odds will increase on the market, even though nothing changed besides a trader wishing to hedge his SPY calls. In short, the odds of the < 3.2% outcome have risen, but the actual likelihood of the event occurring has not changed. If this is done in the last block possible, there is no chance of arbitrage, and the market has effectively 'predicted’ odds that do not reflect accurate probability.
*   Markets with far-out resolution dates are far less efficient because of the time value of money. Suppose a market with a resolution date in 1 year is pushed 4% below what a trader believes to be the accurate probability of a market. In that case, the market will only be arbitraged if the trader cannot find a position that yields more than 4% of the annualized edge. On the other hand, if that market’s resolution date is in one week, the probability of it being arbitraged is higher because a trader is more likely to find 4% of an annualized edge than 208% (52 * 4).