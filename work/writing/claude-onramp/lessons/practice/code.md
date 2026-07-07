<!--ai-->
# Practice — Claude Code

The hands-on track for Claude Code: setup, then one exercise per session, all building the same personal website.

## Setup

This is also the introduction session's exercise. You don't need to know how to code — you talk to it in plain language and it does stuff. Expect the first day to be Linux, not Windows: something will break once. When it does, paste or screenshot the error to Claude and ask "why did this fail, and what are ways to fix it?" — don't get annoyed, get curious.

1. Open a terminal. Mac: Cmd+Space, type "Terminal", enter. Windows: open PowerShell from the Start menu. Never used one? Read the [terminal guide](https://code.claude.com/docs/en/terminal-guide).
2. Paste the install command and press enter. Mac: `curl -fsSL https://claude.ai/install.sh | bash`. Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`. If it errors, match your error at [troubleshoot installation](https://code.claude.com/docs/en/troubleshoot-install).
3. You need a Claude subscription — Pro or higher, from [claude.com/pricing](https://claude.com/pricing). Type `claude`, press enter, and finish sign-in in the browser when it opens. Stuck in a sign-in loop? See [authentication](https://code.claude.com/docs/en/authentication).
4. Install [Wispr Flow](https://wisprflow.ai/) (Mac and Windows) and give it microphone access when it asks. From now on you dictate, never type — talking keeps in the hedges that typing edits out.
5. Make the website's folder and start Claude in it. Type each line, enter after each: `mkdir website`, `cd website`, `claude`.
6. First prompt, dictated: "Build a one-page personal website with my name and one line about me, then open it in my browser." Approve what it asks. A page with your name on it is the whole win today.

Later, when you need them: [gdoc](https://github.com/LucaDeLeo/gdoc) for Google Docs, [gog](https://gogcli.sh/) for everything else Google, [Superconductor](https://super.engineering/) as the interface once you run several Claudes.

## think

1. Hold the Wispr Flow hotkey and ramble for five minutes about what this site should be: who it's for, what you want them to think, every half-idea and doubt.
2. Don't tidy the ramble. Hedges are data; a clean brief hides where you stop knowing.
3. End with "ask me questions before you build", answer them, then let it build the full first version.
4. Open the result. Parts will be wrong. Lower your standards: a mediocre site tonight beats a perfect one never.

## understand

1. Pick the section you like least. Don't say "fix it".
2. Ask: "walk me through what you did here and why." Check the explanation against what you see.
3. Then: "what are some ways of fixing it?" Pick one, try it, look again. You can delegate your thinking but not your understanding — getting annoyed is delegating again to the thing that just failed.
4. Decide the level to intervene at: a one-off edit to the page, or a standing rule if it will recur. For a rule, say "add that to your instructions for this folder."

## ease

1. Say: "write a CLAUDE.md for this folder: what the site is, how I like to work, what you should always do." Claude reads that file at the start of every session here.
2. Cut it hard. For each line: would deleting it cause mistakes? No means cut — long files get ignored.
3. Test it: type `/clear`, give a one-line request like "add a projects section", and watch it need no re-explaining.
4. If starting a session still has friction anywhere — finding the folder, remembering the command — tell Claude the friction and ask it to remove it.

## mingle

1. Ask Claude to search the web for personal-site designs and published Claude Code skills, and show you three of each. Other people have packaged things beautifully for you.
2. Steal one thing and have Claude adapt it to your site.
3. Publish one thing back. A skill is just a folder with a SKILL.md inside `.claude/skills/`; say "package how I build this site as a skill" and send the folder to a coursemate. Install theirs.

## stop

1. Dictate the list of things Claude may never do to your site: delete the folder, publish without asking, invent facts about you — whatever you actually dread.
2. Put it in two layers. Write it in CLAUDE.md, which shapes what Claude tries but is not enforced. Then run `/permissions` and add deny rules, which the program enforces regardless of what the model wants — for example `Bash(rm *)` to block deletions.
3. Keep the list short. Every constraint gets painful with AI; each one should really be worth it. For everything else, worry less about security: editing a webpage has never blown up a computer.

## ground

1. It will lie to you: "done" often means "attempted". Never accept a report; demand the small test.
2. Dictate a launch checklist: every link works, name spelled right, readable on a phone, no placeholder text left.
3. Say: "go through the checklist yourself — open the page, screenshot it, look at the screenshot, and mark each item pass or fail with proof."
4. Then get reality's opinion: send the site to one friend, paste their reply verbatim into Claude, and have it fix the fair points.

## context

1. Type `/clear` for a fresh session. Give only your CV: "rewrite my About page from this."
2. `/clear` again. Give everything: the think-session ramble, old bios, a couple of things you've written.
3. Compare the two pages. Notice what each version latched onto — Claude builds from whatever you hand it, and weights it oddly.
4. Keep whichever mix won, and leave those context files in the folder so every future session gets them.

## ending

1. Say: "put this site live on the public internet, and walk me through any account I need to create." GitHub Pages and Vercel both host it free.
2. Verify on your phone, not your laptop — that's how everyone else will see it.
3. Send the link to three people, and ask one of them to tell you what to make better.
<!--/ai-->
