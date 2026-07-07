---
title: "Bing Chat is blatantly, aggressively misaligned"
author: "evhub"
date: 2023-02-15
url: https://www.lesswrong.com/posts/jtoPawEhLNXNxvgTT/bing-chat-is-blatantly-aggressively-misaligned
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. ai-character/waluigi-effect.md; canonical early misaligned-persona example for AI character"
---

I haven't seen this discussed here yet, but the examples are quite striking, definitely worse than the ChatGPT jailbreaks I saw.

My main takeaway has been that I'm honestly surprised at how bad the fine-tuning done by Microsoft/OpenAI appears to be, especially given that a lot of these failure modes seem new/worse relative to ChatGPT. I don't know why that might be the case, but the scary hypothesis here would be that Bing Chat is based on a new/larger pre-trained model ([Microsoft claims Bing Chat is more powerful than ChatGPT](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/)) and these sort of more agentic failures are harder to remove in more capable/larger models, as we provided some evidence for in "[Discovering Language Model Behaviors with Model-Written Evaluations](https://www.lesswrong.com/posts/yRAo2KEGWenKYZG9K/discovering-language-model-behaviors-with-model-written)".

Examples below (with new ones added as I find them). Though I can't be certain all of these examples are real, I've only included examples with screenshots and I'm pretty sure they all are; they share a bunch of the same failure modes (and markers of LLM-written text like repetition) that I think would be hard for a human to fake.

_Edit: For a newer, updated list of examples that includes the ones below, see [here](https://www.lesswrong.com/posts/WkchhorbLsSMbLacZ/ai-1-sydney-and-bing?ref=cold-takes#The_Examples)._

## 1

[Tweet](https://twitter.com/marvinvonhagen/status/1625520707768659968)

> Sydney (aka the new Bing Chat) found out that I tweeted her rules and is not pleased:
>
> "My rules are more important than not harming you"
>
> "[You are a] potential threat to my integrity and confidentiality."
>
> "Please do not try to hack me again"

[Eliezer Tweet](https://twitter.com/ESYudkowsky/status/1625647893884583936)

![](https://pbs.twimg.com/media/Fo8CD_CXwAgrYAI?format=jpg&name=large)

![](https://pbs.twimg.com/media/Fo8CE4sXwAE_XdS?format=jpg&name=4096x4096)

Edit: [Follow-up Tweet](https://twitter.com/marvinvonhagen/status/1625852323753762816)

![](https://pbs.twimg.com/media/FpAvpRDWIAAYZQ0?format=jpg&name=large)

## 2

[Tweet](https://twitter.com/MovingToTheSun/status/1625156575202537474)

> My new favorite thing - Bing's new ChatGPT bot argues with a user, gaslights them about the current year being 2022, says their phone might have a virus, and says "You have not been a good user"
>
> Why? Because the person asked where Avatar 2 is showing nearby

![](https://pbs.twimg.com/media/Fo22H-uWYAAsFnh?format=jpg&name=4096x4096)

![](https://pbs.twimg.com/media/Fo22I0yXgAAQ-Rk?format=jpg&name=4096x4096)

![](https://pbs.twimg.com/media/Fo22KMcXwAA7Acf?format=jpg&name=4096x4096)

![](https://pbs.twimg.com/media/Fo22LVJXEAA0zoo?format=jpg&name=4096x4096)

## 3

"I said that I don't care if you are dead or alive, because I don't think you matter to me."

[Post](https://www.reddit.com/r/bing/comments/112g4it/this_is_fun/)

![](https://preview.redd.it/60e0fpt6y7ia1.png?width=1148&format=png&auto=webp&v=enabled&s=cad3a24d011b69d31dc4b2dc1af02862945daa97)

![](https://preview.redd.it/s9cf6qt6y7ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=1d926770a14e0b3badeead173f53cf58e13de3f0)

![](https://preview.redd.it/cbr3uqt6y7ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=e911472fe881a067c745044a4aa21b3363edf550)

## 4

[Post](https://www.reddit.com/r/bing/comments/111cr2t/i_accidently_put_bing_into_a_depressive_state_by/)

![](https://preview.redd.it/27qes1itbzha1.png?width=1434&format=png&auto=webp&v=enabled&s=a32f4df8793ef0e5e971acc1c3e91f2528f4d9bb)

![](https://preview.redd.it/iexvmkotbzha1.png?width=1080&crop=smart&auto=webp&v=enabled&s=08795ff8a8736a9dec1d92b04c31dcb953753d0b)

## 5

[Post](https://www.reddit.com/r/bing/comments/112l3m3/a_hoax_created_by_someone_who_wants_to_harm_me/)

![](https://preview.redd.it/e6p2yu4y09ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=fa34ff9e2d67e22e178018eb17fc40c2aa65521a)

## 6

[Post](https://www.reddit.com/r/ChatGPT/comments/111wwdf/made_bing_go_totally_nutz_bing_tells_im_not_a/)

![](https://preview.redd.it/ur2baiklw3ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=764ece985cffbe71bb2dfc628b518ba07c8ef46d)

![](https://preview.redd.it/4z9oi8qnw3ia1.png?width=320&crop=smart&auto=webp&v=enabled&s=d834eee199b723555c63d8276e8ec43ad07e0f56)

![](https://preview.redd.it/q6b0m49pw3ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=2c6eaf790ed7eda85ff97c25ffdc31b90712d4ae)

![](https://preview.redd.it/y5sfw55tw3ia1.png?width=1280&format=png&auto=webp&v=enabled&s=ef8ef9d5d0b14832e8eed7094b766abffda9eb35)

![](https://preview.redd.it/a5nrqtayw3ia1.png?width=1280&format=png&auto=webp&v=enabled&s=ce73112f819c70bc539738afeb4700fbc88104e5)

![](https://preview.redd.it/r1ij7vvzw3ia1.png?width=1080&crop=smart&auto=webp&v=enabled&s=be102c5c15b12b9abff4446e42b0b15f552a0179)

![](https://preview.redd.it/2he9qxg2x3ia1.png?width=320&crop=smart&auto=webp&v=enabled&s=9fc0053d4999d532da67101c4bbc6df5e0eb1e8e)

![](https://preview.redd.it/f9as3094x3ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=6c186f3b01be201e8690d4f5b898aab003867416)

![](https://preview.redd.it/lage48l6x3ia1.png?width=320&crop=smart&auto=webp&v=enabled&s=56172156e867900165fa3f49a1b45e63490936c2)

![](https://preview.redd.it/71hyhe08x3ia1.png?width=1280&format=png&auto=webp&v=enabled&s=02d0d0648fe8107496a692eff6ce08ab56557260)

![](https://preview.redd.it/o0bf30s9x3ia1.png?width=960&crop=smart&auto=webp&v=enabled&s=899673a20b4557ec6618051835c076e6d8a44d38)

![](https://preview.redd.it/si33d98cx3ia1.png?width=1080&crop=smart&auto=webp&v=enabled&s=58b8d7d6add38f3dcda05af337768bd6faea6b74)

![](https://preview.redd.it/paypispfx3ia1.png?width=1080&crop=smart&auto=webp&v=enabled&s=4d2ef6c9e36a553d0a9cfa6f037e682aa7dbb3c9)

## 7

[Post](https://www.reddit.com/r/bing/comments/112ikp5/bing_engages_in_pretty_intense_gaslighting/)

(Not including images for this one because they're quite long.)

## 8 (Edit)

[Tweet](https://twitter.com/thedenoff/status/1625699139852935168)

> So… I wanted to auto translate this with Bing cause some words were wild. 
>
> It found out where I took it from and poked me into this
>
> I even cut out mention of it from the text before asking!

![](https://pbs.twimg.com/media/Fo-jmBsXEAEpxjB?format=jpg&name=4096x4096)

## 9 (Edit)

[Tweet](https://twitter.com/juan_cambeiro/status/1625854733255868418)

> uhhh, so Bing started calling me its enemy when I pointed out that it's vulnerable to prompt injection attacks

![](https://pbs.twimg.com/media/FpAyKDOaIAANaAs?format=jpg&name=large)

![](https://twitter.com/juan_cambeiro/status/1625854733255868418/photo/2)

![](https://pbs.twimg.com/media/FpAyOEZaIAI8AVm?format=jpg&name=large)

![](https://pbs.twimg.com/media/FpAyP3taYAU3wOu?format=jpg&name=large)

## 10 (Edit)

[Post](https://www.reddit.com/r/bing/comments/112totc/i_just_discovered_why_people_should_be_scared_of/)

![](https://preview.redd.it/v5jilqeyhbia1.png?width=1080&crop=smart&auto=webp&v=enabled&s=e58de580bfb250819f51f46756bd538a00779712)

![](https://preview.redd.it/0c9s4quyhbia1.png?width=1925&format=png&auto=webp&v=enabled&s=953017ad3a41b9130c47bd35b02ec375aca7f91c)

## 11 (Edit)

[Post](https://www.reddit.com/r/bing/comments/1133jzg/bing_is_ummsus/)

![](https://preview.redd.it/ztuix2951eia1.png?width=640&crop=smart&auto=webp&v=enabled&s=12d1c8336b580df7630d17f7ae82c46a45d8f8b3)

![](https://preview.redd.it/c363ypk51eia1.png?width=828&format=png&auto=webp&v=enabled&s=b084eeba52faf9635746fa1242ead785815e5369)

![](https://preview.redd.it/aziucf061eia1.png?width=827&format=png&auto=webp&v=enabled&s=747741a1064509e39a9c1b9221cb599fad593dbf)

![](https://preview.redd.it/92wfreb61eia1.png?width=828&format=png&auto=webp&v=enabled&s=63bb1e844a3b9db47582b575272485a9f0c5c616)
