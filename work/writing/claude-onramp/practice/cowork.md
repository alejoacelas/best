<!--ai-->
# Practice — Claude Cowork

The hands-on track for Cowork: Claude Code's engine with no terminal — you click
and it works, because Anthropic manages it centrally. The easiest start. Cowork now
runs on desktop, web, and mobile, and your tasks keep running on Anthropic's
servers when you close the laptop; this course uses the **desktop app**, because
only it lets Claude touch the website folder on your computer.

Every prompt below in quotes is one you can dictate verbatim — but they're
examples; your own words work.

## Setup

Also the introduction session's exercise. **~30 minutes.** You need:

- A paid Claude plan — Pro, Max, Team, or Enterprise, from
  [claude.com/pricing](https://claude.com/pricing). Free won't do.
- A computer on macOS or Windows.

Steps:

1. Download the Claude desktop app at
   [claude.com/download](https://claude.com/download), install it, and sign in
   with your Claude account. Already have it? Update it — Cowork needs the latest
   version.
2. In the message box on the home screen, select **Cowork** (bottom-left corner of
   the box; **Chat** switches back). If there's no Cowork option, your app is
   outdated or your plan isn't paid — see
   [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).
3. Install [Wispr Flow](https://wisprflow.ai/) (Mac and Windows) and do its short
   onboarding, granting the microphone (and, on Mac, accessibility) permissions it
   asks for. From now on you dictate every prompt — talking keeps in the hedges
   and half-thoughts that typing edits out.
4. Make a folder named `website` on your computer.
   - **Mac:** Finder → Documents → right-click → New Folder.
   - **Windows:** File Explorer → Documents → right-click → New → Folder.
5. Create a project around it: click **Projects** in the left sidebar, then **+**,
   then **Use an existing folder**, and pick your `website` folder. Name the
   project "Website." The folder is the fence: Claude works on what's inside it,
   not the rest of your disk.
6. First prompt, dictated, inside the project: "This folder will hold my personal
   website. Create a page that says hello and states my name, and show it to me."
   Watch the progress steps; approve what it asks. A page with your name on it is
   the whole win today.
7. One rule of physics to remember: your session runs on Anthropic's servers and
   keeps going if you close the laptop — but Claude can only reach the `website`
   folder **while the desktop app is open** on this computer. Task stalled saying
   it can't reach files? Open the app.

## think

Dump your whole head into Claude before it builds; don't pre-organize.

1. Open the Website project and start a new task.
2. Hold the Wispr key and ramble for five minutes: who the site is for, what you
   do, sites you envy, the joke you may want in the footer — including everything
   you're unsure about. Don't tidy it — hedges are data; a clean brief hides where
   you stop knowing.
3. End the same message with: "Ask me questions about anything unclear before you
   build." Answer what it asks.
4. Say: "Now build the full first version and show me the result."
5. Look at it and lower your standards: a mediocre site that exists beats the
   perfect one you'd never start. Fixing comes next session.

## understand

When output disappoints, understand the process before re-rolling. You can
delegate your thinking, not your understanding.

1. Find the part of the site that's wrong. There is one.
2. Don't re-roll. Ask in the same task: "Walk me through what you did there and
   why."
3. Read the answer and check it against what you see on the page. If they don't
   match, say so — that mismatch is the finding.
4. Ask: "What are some ways of fixing it?" Pick one, let it try, look again.
5. If the failure came from something Cowork can't actually do (some sites it
   can't reach, some tools it doesn't have), write that down. Knowing what it
   overpromises is the skill.

## ease

Remove every trivial barrier between you and starting.

1. Notice what you re-explained across the last two sessions — your name, the tone
   you want, "show me the result when done."
2. Open the project's **Instructions** (in the project view) and put those lines
   there. Claude reads them at the start of every task in this project; memory is
   also on per project, so what it learns here stays here.
3. Rule for the rest of your life: the second time an instruction leaves your
   mouth, promote it to Instructions.
4. Test it: new task, no briefing, "Improve the About section." It should already
   know you.
5. Also set the instructions that apply to *every* Cowork project — your name,
   your tone — once, at claude.ai **Settings → Cowork → Global instructions**.

## mingle

Other people have packaged things beautifully for you. Steal, then share back.

1. Find a personal site you admire; ask a coursemate for theirs too.
2. Paste the URL into a task: "Steal what's good here — layout, structure, that
   thing they do with the header — and adapt it to my site."
3. Send a screenshot of the result to the person you stole from, saying what you
   took. Ask what they'd steal from yours.
4. Take one trick from the exchange and add it to your project Instructions —
   that's how a borrowed move becomes a standing one.

## stop

Decide what Claude may never do. Instructions shape behavior; the mode selector
and Cowork's own guardrails enforce.

1. Dictate your never-list into the project Instructions as "Never" lines: never
   delete photos, never rewrite text marked final — whatever you actually dread.
   Real constraints only; each one costs you flexibility.
2. Find the permission-mode selector in the task view: **Ask before acting**
   pauses for your approval; **Act without asking** runs through. Pick "Act
   without asking" for this project — it's a webpage, and Cowork still always asks
   before permanently deleting files, in any mode.
3. Know when to flip it back: sensitive files, first time with a new tool or
   site, or actions that are hard to undo. That's what "Ask before acting" is for.

## ground

It will lie to you: "the site works" is not evidence. Never accept a report;
demand the small test.

1. Dictate: "Check every link and every image on the site. Give me a table: item,
   works or broken, and how you checked."
2. Open the site yourself and click two links at random. Compare against its
   table; if you disagree, say so and watch it re-examine.
3. Send the site to a friend outside the course. Paste their reply verbatim into a
   new task: "Here's what a real person said. Fix the fair points, tell me which
   points you think are unfair."

## context

Claude builds from whatever you hand it — and weights it oddly. Choose the diet.

1. Run the same request three times, in three fresh tasks, changing only the
   context: "Rewrite my About page." Once with nothing extra; once with your CV
   dropped into the website folder; once after a three-minute ramble about what
   you actually care about.
2. Compare the three. Notice what each latched onto — the CV version will sound
   like a CV. Models grab the strongest pattern you feed them, not the most
   important one.
3. Keep the winner. Delete from the folder the context that hurt; withholding is a
   move too.
4. Feed it text. If something lives in a fancy format (XLSX, a design tool),
   export it as plain text or CSV before dropping it in the folder — agents read
   text.

## ending

Ship it. Cowork builds the files but doesn't host websites; publishing takes one
step outside.

1. Ask first: "Which files in the folder make up the finished site, and is
   anything missing for it to work standalone?" Fix what it names.
2. Go to [Netlify Drop](https://app.netlify.com/drop) in your browser and drag the
   `website` folder onto the page. Create the free account it asks for — without
   one the site expires. You get a live URL in seconds.
3. Verify on your phone, not your laptop — that's how everyone else will see it.
   (For a custom domain or automatic updates, that's where the Claude Code track
   comes in — ask a Code-track coursemate for an hour.)
4. Send the link to the course group and to three people who knew you before this
   course.
5. Last dictation: "List what we built together and what I can now do that I
   couldn't eight sessions ago." Read it. That list is the course.
<!--/ai-->
