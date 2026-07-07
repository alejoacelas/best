<!--ai-->
# Practice — Tag

The hands-on track for Claude Tag: Claude hired into your team's Slack (beta, launched June 23, 2026; needs a Claude Team or Enterprise plan plus a paid Slack plan). If you pay for Claude alone, read this as a preview. You'll build a personal website in a public channel where your whole team can watch. That's a feature.

## Setup

Steps 1–3 are your admin's; 4–6 are yours.

1. Prerequisites: a Claude Team or Enterprise plan, a paid Slack plan, and an admin who is both an Owner in the Claude org and a Slack workspace admin.
2. Admin: open claude.ai/admin-settings/claude-tag, click Set up, and install Claude for Slack from the link. If your Slack requires app approval, a Slack admin must approve the Claude app first ([troubleshooting](https://claude.com/docs/claude-tag/admins/setup-overview)).
3. Admin: in any channel, send `@Claude connect` as a top-level message (not a thread reply), paste the pairing code into the setup dialog, choose "Whole workspace", and finish the wizard: connect tools, set a spending limit, Launch Claude. Codes expire in 15 minutes; send `@Claude connect` again if yours did.
4. Create a public channel named #website-yourname and run `/invite @Claude`. Public, not private: Claude learns from what it can see, and so do your teammates.
5. Install [Wispr Flow](https://wisprflow.ai/) so you can talk instead of type. On your phone, the keyboard's dictation button works too.
6. Smoke test: send `@Claude summarize this channel`. A reply in the thread means you're wired up. No reply: ask your admin to check the [setup page](https://support.claude.com/en/articles/15594475-what-is-claude-tag).

## Think

1. Dictate your website idea into one top-level message: who you are, what you do, what the site should feel like, every half-formed preference. Don't tidy it first; tidying is the thinking you're delegating.
2. Ask it to build a first version and post back in the thread.
3. While it works, dictate a second message with everything you forgot. One thread per task: additions go in the thread as new replies, not edits.

## Understand

1. Something in the first version will be wrong. Resist re-asking.
2. Reply in the thread: what did you do, step by step, and what could you not access?
3. Read the answer, check it against what you saw, then ask for the fix. Getting annoyed is delegating twice; you can delegate the thinking, not the understanding.

## Ease

1. Keep every website ask in #website-yourname, even tiny ones. Claude keeps memory per channel, so each thread makes the next briefing shorter.
2. Test it: start a new thread with a one-line request that only makes sense given earlier threads. If it fills the gaps, the channel has become its memory of your project.
3. Never take a website task to a DM. A DM ask is a lesson you withheld from the channel.

## Mingle

1. The channel is the sharing. Open a teammate's #website- channel and read their threads: the prompts, the corrections, what worked.
2. Steal one move and use it in your channel, saying where it came from.
3. Post one thing you figured out as a top-level message in your channel so it can be stolen back.

## Stop

1. Decide what Claude may never do with your site. Keep the list short; every constraint costs you.
2. Post it in the channel: never publish without asking me, never contact anyone on my behalf.
3. Ask it to confirm the rule and repeat it back. Later, ask `@Claude what triggers do you have set up here?` to see any standing work you've accumulated.

## Ground

1. It will lie to you, confidently. Start a thread where it must prove its work.
2. Ask it to check every link and claim on your site and show the evidence: the actual output, not "done".
3. Verify one item yourself. If its evidence and your check disagree, say so in the thread; the correction teaches the channel.

## Context

1. Ask in a thread: what can you see from this channel and your connected tools?
2. Compare its answer to what you assumed. Most "it ignored my data" complaints are data nobody wired up; ask before you blame.
3. Give it one thing it said it couldn't see (paste it in) and watch the output change. Notice too what old channel messages it latches onto, and correct stale ones with a reply.

## Ending

1. Publish the site [?: what publishing path a Tag access bundle supports for a static site — GitHub Pages via the GitHub connection, or another connected tool?].
2. Post the live link as a top-level message in your channel.
3. Ask Claude what it could own on the site from now on: keeping links unbroken, drafting a post when you dictate one. Standing duties can eventually run without tagging (ambient mode, opt-in), but earn that with tagged tasks first.
<!--/ai-->
