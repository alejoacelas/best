---
title: "SMS Charges May Be Inhibiting the Use of AI for 1 Billion People"
url: http://web.archive.org/web/20251025185420/https://www.cgdev.org/blog/sms-charges-may-be-inhibiting-use-ai-1-billion-people
fetched: 2026-07-07
via: html2text
topic: "linked"
note: "CGD on connectivity-cost barriers to AI access for a billion people"
---

by

Daniel Björkegren 

October 22, 2025 

## Recommended

###### [Blog Post Powering Government Portals with Generative AI  ](/web/20251025185420/https://www.cgdev.org/blog/cutting-through-noise-powering-next-generation-government-portals-generative-ai)

[ Han Sheng Chia ](http://web.archive.org/web/20251025185420/https://www.cgdev.org/expert/han-sheng-chia) et al. 

May 20, 2025 

###### [Blog Post An AI Evaluation Framework for the Development Sector  ](/web/20251025185420/https://www.cgdev.org/blog/ai-evaluation-framework-for-the-development-sector)

[ Han Sheng Chia ](http://web.archive.org/web/20251025185420/https://www.cgdev.org/expert/han-sheng-chia) et al. 

April 16, 2025 

The cost of using artificial intelligence (AI) has plummeted. Almost every smartphone in the world can access AI chatbots for free for several queries a day, through ChatGPT, WhatsApp, Google, or other providers. However, these services have yet to reach most mobile phones that lack active internet service, which number around 1.7 billion based on statistics from the [International Telecommunication Union, or ITU](http://web.archive.org/web/20251025185420/https://datahub.itu.int/dashboards/?id=2). Those phones are in the hands of on the order of a billion people who are excluded from AI. They include some of the world’s poorest and most remote residents, who might use the technology to obtain information of all sorts, including advice on business, education, health, and agriculture. 

Basic mobile phones could theoretically access AI services through text messages, through a technology developed in the 1990s called short message service or SMS. SMS allows the sending and receiving of messages of up to 160 characters of text. It is extremely efficient: SMS uses the leftover capacity of a cellular network, so the marginal resource use per message is tiny. And it is popular: over 6 trillion SMS messages were sent in the latest year [in which data is available](http://web.archive.org/web/20251025185420/https://datahub.itu.int/data/?i=80&v=chart&e=701). 

However, in many countries mobile phone operators charge application providers extremely high prices for SMS, which limit the viability of digital services for basic phones. SMS pricing in different countries can be opaque, so I gathered prices from several reputable international platforms and, when available, from major operators themselves. The prices I could find vary dramatically: for example, it would cost $0.08 to send 100 SMS messages to users in Ghana—but $44.75 to send the same messages to users in Pakistan. Overall, prices are high: for the median phone without internet, the price is $5.33 per 100 messages sent. These prices represent the lowest bulk or application-to-person (A2P) SMS rate that would be paid by an organization sending messages from a digital service (the end of the post describes the methodology). Consumers are typically also charged separate retail prices for any messages they send, though message allowances may be included in their plans. While it may be possible for organizations to negotiate lower prices, A2P SMS is expensive any way you look at it. The median A2P SMS price corresponds to $380,616 per gigabyte of data transmitted. In comparison, when using mobile data on a smartphone the median price of bandwidth is only $6 per gigabyte. For the median price of sending one message via SMS, you could send 58,775 similarly sized messages via mobile data on a smartphone. SMS is expensive relative to mobile internet around the world, as shown in Table 1, which shows statistics by country. 

Prices on SMS are higher than costs would justify. Although operator costs are not publicly disclosed, we can see this in several ways. First, the price charged varies dramatically across countries, even though the infrastructure is similar. And even within the same country, operators commonly offer the lowest prices only to high-volume purchasers: the price can be up to 10 times higher for smaller organizations. Such variation is consistent with operators charging high markups when they can. Second, some governments regulate the rate that operators can charge each other when a user of one network sends an SMS to a user of another. Governments factor in costs when setting these rates, and typically include a margin to allow operators to recoup their investments. In the countries where we could find public termination rates, the average rate is $0.06 per 100 SMS. If we take termination rates as an upper bound for the cost of serving an SMS, that would suggest that the median global markup on SMS for non-internet phones could be up to 9,000 percent. That would suggest that an operator might be able to deliver over 90 texts for the price they charge for one. 

High SMS prices shut out not only tech firms, but also local entrepreneurs who might otherwise develop innovative AI services for the world’s lowest-income people. Entrepreneurs I spoke with are shelving ideas due to the price of SMS, including services that would have provided local agricultural guidance, advice for pregnant women, and insights to small businesses from transaction records. If an entrepreneur wanted to create a text-based AI service for basic phones, we estimate that 98 percent of the per-message cost would result from SMS charges and only 2 percent from running the AI model, even if they used a frontier model (OpenAI’s GPT-5). Figure 1 compares the cost that would be incurred by such a developer if delivering the service via mobile data or via SMS. If they instead used a lightweight AI model (OpenAI GPT-5 nano), SMS charges would account for 99.9 percent of the cost. Smartphone users across the globe increasingly have access to a variety of services that make use of AI, but high markups on text messages will prevent the world’s poorest from making use of the technology. 

##  What can be done? 

One potential policy is to hasten the adoption of smartphones, through subsidies or targeted investments. However, such policies can be costly, and there will remain people who lack the reliable internet coverage and battery charging facilities that are needed to make use of smartphones. We must make services work for the devices people have. 

The markups charged on SMS can be reduced. It is tempting for operators to offer two-track systems, where nearly all services are charged the high rates we document here, except for a select few that are approved by management or government ministries. For example, operators may allow cheaper pricing or free SMS to a few selected agriculture or health nongovernmental organizations (NGOs). Similarly, some operators have begun selling their own AI chatbots over SMS, such as Africell does in Angola and Sierra Leone, with one select AI model and special pricing. However, this approach limits innovation. There is a diversity of AI models, including ones adept at local languages, and countless ways to integrate messages into useful services. Custom, local solutions that combine tailored AI models with information about the context can be much more useful to consumers, especially given the challenge of articulating complex questions in short messages. Entrepreneurs should face transparent and fair prices for communication, and consumers should be able to select the services that they find most useful. Lower SMS prices may make it easier for providers to send unwanted messages (“spam”), but that problem can be mitigated by providing clear ways to unsubscribe and consequences for senders who send too many unwanted texts. Unlike regulated public utilities like electricity and piped water that use increasing block tariffs or lifeline rates for equity reasons, mobile telecoms commonly charge higher marginal prices to less frequent users. That results in lower income users being charged more per message. Government regulators have the authority to question the SMS rates set by telecom operators. It is time to do so. 

While much of the use of AI is via text today, it is increasingly possible for voice AI systems to respond to questions over normal phone calls. Voice interfaces could be even better suited to remote and low literacy populations, but it will take time to make them work at sufficiently low cost. Billions of people around the world are adapting to artificial intelligence. The world’s lowest-income people should not be left behind as a result of the markup charged to transmit small pieces of digital text. 

Methodology

The number of phones without internet in each country is computed using ITU data: I subtracted the number of active mobile-broadband subscriptions from the number of mobile-cellular subscriptions. If the ITU reports more mobile-broadband subscriptions than mobile-cellular, then I consider the number of phones without internet to be zero. All prices reported are weighted to be representative of phones without internet access, within the sample we have data. Note that some users may have multiple accounts and some accounts may be shared by multiple users, so the number of phone accounts may differ from the number of unique users. 

The sender usually pays for SMS delivery. Prices for application-to-person SMS are not well advertised. For each country, I took the lowest published outgoing rate for bulk SMS that I could find. I consider prices for serving all available countries from three international platforms: Africa’s Talking, Twilio, and Vonage Nexmo. For countries that have at least 3 million phones without internet, I also attempted to find direct pricing from a major operator in the country. I first searched for the operator with the highest market share; because market share information is not always up to date, in some cases this may simply represent an operator with high, but not the highest, market share. I skipped countries on which the US places comprehensive sanctions, including Cuba, Iran, Russia. I considered any prices for bulk SMS posted on the operator’s website; if their website mentions a bulk SMS service but does not post prices, I emailed to inquire. Several operator websites generated only errors, and few operators responded to requests for pricing details. Of the responses I received, two operators would not provide prices except under a non-disclosure agreement, so those prices are not included. The lowest price may include high volume discounts (such as over 10 million messages) or may apply for only certain users (e.g., in-network), so actual implementations may face higher prices. 

Internet bandwidth prices are based on bestbroadbanddeals.co.uk’s estimates of the retail price per gigabyte across countries in 2023, from [https://bestbroadbanddeals.co.uk/mobiles/worldwide-data-pricing/](http://web.archive.org/web/20251025185420/https://bestbroadbanddeals.co.uk/mobiles/worldwide-data-pricing/). They represent the price that would need to be paid to communicate with a digital service. 

I identify government mandated SMS termination rates from articles on the internet, where available. 

The exercise costing an AI application assumes that the AI model uses 400 input tokens (~1,600 characters, including a 160 of user input and 1,440 of system prompt) and 40 output tokens (~160 characters). Each SMS is assumed to be 160 7-bit characters = 140 bytes. 

Currencies converted to USD using rates posted on openexchangerates.org on August 22, 2025. 

_Daniel Björkegren is an incoming senior fellow at the Center for Global Development and an assistant professor at Columbia University School of International and Public Affairs._

### Topics

[AI for Global Development](/web/20251025185420/https://www.cgdev.org/topics/ai-global-development)

### DISCLAIMER & PERMISSIONS

CGD's publications reflect the views of the authors, drawing on prior research and experience in their areas of expertise. CGD is a nonpartisan, independent organization and does not take institutional positions. You may use and disseminate CGD's publications under [_these_](/web/20251025185420/https://www.cgdev.org/page/rights-and-permissions) conditions.

  
_Thumbnail image by: Tom Perry / World Bank_
