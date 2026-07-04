# Run many, save everything

*Code track, lesson 4.*

<!--ai-->
Agents are slow, and you are not idle. That's the whole lesson; the rest is how.

You give Claude a real task and it vanishes for ten minutes, and the temptation is to buy the minutes back by cheapening the work — a faster model, a smaller ask. Buy speed with parallelism instead: same best model, more of it, running side by side while you do something that actually needs you. If several sessions push you into rate limits — the cap on how much Claude your plan buys per stretch of hours — the answer is the bigger plan, not the worse model. ⚑ You're already paying Claude less than the living wage; haggling now, when it's about to triple its output for you, is bad manners twice over.

## Run many

While I was preparing a workshop on exactly this, I had four Claude Code agents running at once: one exporting my demo conversation to a website, one digging through an org's role counts to invent example tasks, one polishing my writing style off an older tutorial, one double-checking the install instructions I was about to hand out. Four workers, none waiting on another, and me walking the floor between them. The job now is keeping several fed, not watching one work.

The mechanic costs nothing you haven't learned: Cmd/Ctrl + N opens a fresh session ⚑ — point it at whatever folder its task lives in. And if a single task is too big for one session, tell it "do it with subagents" — it hires helper Claudes and folds their work back together. ⚑

## Save everything

The rule: everything an agent touches becomes a file — the plan before it starts, the intermediate outputs, the results. Not because you're tidy. Because you can't verify what you don't see, and because if something is good, you'll want to reuse it. The chat is where work gets discussed; files are where it exists. A chat scrolls away and takes the evidence with it; a file sits in your folder, openable, arguable, reusable.

Three sessions running means three chats you will never re-read. So make the agents report in formats you can skim: "save the plan as a file before you start"; "give me the results as a table"; "write a one-page summary and put the full detail underneath." Left alone they will happily write you a book. Specify the summary or receive the book.

## Your next hour

Two tasks and a handoff, all on real work.

First, the two tasks. Pick two unrelated things from your list. Start one; the moment Claude gets going, Cmd/Ctrl + N ⚑ and start the other. Then leave both alone. Come back in twenty minutes and collect files, not promises.

Second, the handoff. Open your longest-running session — the one you've been rambling at for days — and find the token counter at the bottom ⚑; it reads something like "300,000 of 1,000,000". ⚑ (Tokens are just a fancy term for words, or similarly-sized chunks of text.) Past about 200,000, say: "write down what we've agreed so far as a file, and give me a prompt to feed to a fresh agent." Open a new session, paste the prompt, and watch it pick up sharp where the old one had gone soft. You do this for performance, not cost: the quality of long conversations degrades for structural, machine-learning reasons ⚑ — nothing you did wrong, and nothing more tokens will fix.
<!--/ai-->
