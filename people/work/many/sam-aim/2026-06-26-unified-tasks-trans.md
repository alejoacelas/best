# Samantha Kagel and Alejandro Acelas

- **Date:** 2026-06-26
- **Participants:** Alejandro Acelas, Samantha Kagel (Ambitious Impact)
- **Source:** Granola transcript (tidied)

---

## Catch-up: Edinburgh, and Sam's fatigue

**Samantha:** Hello. Good to see you. How are you?

**Alejandro:** Doing pretty good, how are you?

**Samantha:** Good, good. Where are you?

**Alejandro:** This is Edinburgh. I met two people who I really liked — they both live in Edinburgh — and another friend was just by chance visiting as well, so I was like, oh, I better be there.

**Samantha:** That's great. I love that city. It's so beautiful.

**Alejandro:** I've only had the chance to walk around randomly, but especially now in summer it's incredibly nice to hang around. How are you feeling? You were sick a bit of the week?

**Samantha:** I'm doing a bit better. I was a bit sick yesterday and I don't know why — waking up really fatigued, kind of fluey symptoms for the first half of yesterday, then I was fine. Tired this morning, but now I'm getting into it, "should be okay". No recurring conditions, but I'm wondering if I should get a blood test or something, because I've noticed myself "regularly quite fatigued for the last, like, two months". So I'm wondering if something's going on, "so I might get it checked out".

**Alejandro:** I might make a template for this and send it to you in case you want to try. I find it helpful to just dictate a bunch of symptoms or patterns — things like "this is stopping me from doing my photos" [phrase unclear] or "this is having a sizable impact on my life" — dump it there, have it put everything in a short bullet-point list, and then discuss what it might be. Let me send you the document now. [Sends prompt template.]

**Samantha:** Thank you. "That sounds useful." Do you mind if I take a minute to read?

**Alejandro:** I'll wait here until you tell me you're done.

**Samantha:** Nice. "Seems good."

## Picking the session goal: a unified to-do list

**Alejandro:** So it basically took the cluster that's the support infrastructure you had mentioned — "this would make my day-to-day better if I had a unified to-do list" — and things like how you'd prepare for your next management call. The idea is to just go try to do the thing, with me giving my impressions — pick one thing and do as much work as we can on it. Anything that comes to mind as "this would be cool to give my energy to"?

**Samantha:** "I love it. I lean towards the unified to-do app because I think this is like infrastructure for everything, and I'll consistently deprioritize it, so seems fun." "If we can get as far as we can."

**Alejandro:** Amazing. So basically: we make a Cowork folder that's exclusively for this, test the things we want to integrate, and see if we can "get everything into Asana today in a way that's not scary to look at or maintain". You can start showing me your screen.

## Cowork connector permissions, GDPR, and Dylan's unblock

**Alejandro:** Let's go to Cowork and open a project that's exclusively for this. [They create a new project; Sam saves it under Documents.] Now let's go to connectors in the settings — command-comma. I've been searching, and there's a bunch of configuration the central admin can customize. Okay, this is what I wanted to check: the organization disabled both — they [need to] allow everything for individual connectors, at least the write operations, which is just creating a task and that stuff, and they also blocked the agent [word unclear] without permission. Either of those would have allowed it to create tasks autonomously. I think it's reasonable to enable at least one of the two — I sent kind of a Google Doc, and a half-an-hour discussion with either Greg or Dylan should be enough for them to say "yes, this is reasonable, and these are the risks we're concerned about."

For now, one thing we could do: if you used your personal account, you could connect to everything. The main reason not to use your personal account is GDPR — when you use a team account you have a contract with Anthropic, one party is the data controller and the other the data processor or something, so it covers GDPR by default. On your personal account there's no contract, so "technically GDPR doesn't allow you to put any personal information from anyone on your personal account". We could use your personal account just to set up the to-do thing with everything staying in your folder, and it's super easy to move to your team account later once I check. Or we choose to do something that doesn't block that much.

**Samantha:** Interesting. What are my hesitancies? One, I downgraded my personal account since I'm using the team one now, so it might not even have all the things. And I'm a little worried about taking time to do all the sign-ins. This one is the "write, delete" [permission] — could we do the rest without it?

**Alejandro:** We could do a dry run: instead of putting things into Asana, it creates a file saying "here's what I would put into Asana" and you see what it would look like. Or do some examples clicking "allow" every time, until you get permissions.

**Samantha:** "I'm happy to move", but I could also just go tap Dylan right now and ask if he's willing to unblock it for, like, an hour while we set up. "I'll be right back." … Okay — he's changing it now, and he says "it's probably fine to just leave it on like that".

**Alejandro:** Perfect, I'll also send him a quick message with instructions on how to do it. [To Sam:] At some point you should get a button to activate permissions. Actually, instead of "needs approval" for Asana, change it to "always allow" — everything that offers "always allow", set it to "always allow". Same for general and for Google Drive. The read operations just mean putting context from another tool into Claude — it doesn't change anything external.

**Samantha:** Yeah. [Enables connectors.]

**Alejandro:** Perfect. Google Drive in case we need it as well. Yeah, exactly — Granola and Slack.

**Samantha:** This Gmail one doesn't have it yet.

## First pull: tasks from every source

**Alejandro:** Now, in the project we created: dump your mind on the different sources of information you'd draw from, and have it save each to-do item with a verbatim quote from the original, in a text file per source — one for emails, one for calendar items — everything from, say, the last week. This is just to make sure the connectors are working as we expect.

**Samantha:** And I should have it give me the list in chat here, not in Asana?

**Alejandro:** For now, yes — we want to test things "block by block", so if something fails we know where it is.

**Samantha:** And do I ask for all the sources right now, not just one?

**Alejandro:** You can tell it to use a subagent per source so it's done in parallel.

**Samantha:** [Dictating the prompt:] "Your goal is to create one task list here that pulls all of my tasks that I have to do for work from various sources. You can deploy a lot of subagents, or a subagent per source, to find and pull them here. When you find a task, have it verbatim from what you find in the source, and make sure you link back to where you got it from. You'll find tasks that I need to do in my Gmail — in my inbox as well as my to-do folder — as well as any emails that I should be following up or responding on; the most important ones are particularly related to the mid-stage funding network or other funders. Find tasks as well from my one-on-one documents; the most important ones are the JAS file, my one-on-one with Aiden, the one I run with Brack, with Sam, and with Yasantha [name unclear]. A lot of my tasks are also in the document SK's Garden — I have them in the first tab; there are checklists of things I need to do today and this week, and you can also scroll down and see if there are ones I've missed from older weeks. I also have tasks in Slack — messages that maybe I haven't responded to, or some that I have responded to but people have asked me to review something or input on something — so you can scan chats from the last week or other channels where I might be tagged. And the last place I have tasks is my calendar: sometimes these occur as actual tasks in Google Calendar, or meetings for the next few weeks that I might need to prepare for. Ask me any questions you need to do this task."

**Alejandro:** That's perfect, send it. One thing I often add to the prompt is the format I feel comfortable reviewing. Here I'd ask for different files per source, so it's easy to click, see "okay, this comes from here", read the first three entries, and know what's going on. I often also specify length — for quotes from the original source I usually say "tweet length" or "280 characters" — so it's easy to skim.

**Samantha:** Nice. Markdown, right? By source. Gmail, probably last two weeks. Should I do another prompt for what you just said, or let it go?

**Alejandro:** Let it go — it looks like it roughly knows what it's doing. Meanwhile, there are two more things — well, maybe three. The missing source is Apple Notes: you currently have tasks there, and there's a hack to get access, but I'm not sure you have permissions to use it. And then there's connecting to Asana in a way that's convenient to interact with.

## Raycast shortcuts for Asana

**Alejandro:** One way I personally like is Raycast — remember option-space? It has an Asana connector. Do you have any shortcut for putting tasks into Asana?

**Samantha:** No, "but if you know how I can set one up, I'd love that".

**Alejandro:** Let's google "Asana Raycast connector" — should be just a couple clicks. Raycast store, install extension. Now test: type the task, command-enter, and it goes. Escape goes back. On "create task", hit command-K for configuration options, arrow to "configure command", and record a hotkey — pressing that combination takes you straight to a page where you type the Asana task.

**Samantha:** So, what would I remember — command-T, probably, for task? … And for viewing my tasks: command-V — oh, that's paste.

**Alejandro:** Often I use option instead of command.

**Samantha:** Okay: option-T to create, option-L for "list my tasks". [Tests it: option-T, type, command-enter.] "All right. That's great." I'll probably just uninstall this other [Asana] app, I think that might cause problems. Let me log out of this old account… hmm, it signed me out of both accounts, and it defaults to the wrong one. How do I —

**Alejandro:** "I can look later, maybe."

## Checking on the agent; a laptop aside

**Alejandro:** Let's go back to Cowork and see how that guy is doing. Running five agents, nice. Is there anything in the folder yet? Actually — click the sharing folder... okay, let's just leave it running for now.

[Later, they quit and reopen Cowork to pick up new connector settings; it's slow to restart.]

**Alejandro:** Cowork is a really heavy program, so it causes things like this.

**Samantha:** "Maybe I need a faster computer as well." I've had it a few years — a MacBook Air.

**Alejandro:** It says M1 — it's decent, basically the one I had up until two weeks ago. But depending on how much you're feeling it freeze — I did a bit of a calculation for Dylan: "if it saves you like three minutes a day for like a year, then it's a good investment".

**Samantha:** "I think we're gonna do that laptop benefit, so that's great."

## Apple Notes: the hack, and the privacy line

**Alejandro:** For Apple Notes, Claude doesn't have access to the app, but it does have access to Google Chrome, so it can reach your notes from the iCloud web version that's synced. Ask it: "use Claude for Chrome — tell me if it's not available, but try to use it and troubleshoot — open Apple Notes in the cloud, wait for me to log in, then get all my tasks from there." And do that in the task-list project folder. The thing I don't know is whether Claude for Chrome is allowed org-wise.

**Samantha:** [Types:] "Use Claude for Chrome to sign me into my Apple Notes account." … Hmm, one side note — my context brief isn't loading properly. "Unable to show file folder."

**Alejandro:** Yes, it's not connected currently — we might need to do something about that. Let's check the other session. It says "Samantha master task list" — open it in TextEdit. Okay, this one works. Does it look like the thing you expect?

**Samantha:** "Yeah. Decent."

[They check the Chrome connector in settings and install it.]

**Alejandro:** Claude for Chrome can basically do anything you can do in Chrome — it takes screenshots and it's really slow, but there's a bunch of annoying tasks where you just need to click around, like doing check-in for a flight. "Maybe supervise it the first time", but if it does the thing well, then you can just let it go do it for you from then on.

**Samantha:** [Re-prompting for Apple Notes:] "Open Apple Notes in Claude for Chrome. Give me time to sign in and then pull my notes." — I'll name this: "I feel anxious about it having my Apple Notes because there's so much in there. And it's, like, a lot of random personal too. But I think it's fine."

**Alejandro:** Two things. Anthropic does not train on them, and only says it will keep them if it thinks you're, like, a bad actor or something — which hopefully you're not.

**Samantha:** "No. Not that kind of personal stuff."

**Alejandro:** But the other thing is, because this is a team account, the organization is the owner of the data — someone with all permissions could export your conversations and possibly see this. "That's kind of the thing that makes me actually uncomfortable."

**Samantha:** "Maybe let's pause on the Apple Notes for now. I think I'd rather just change my behavior to not take work notes in Apple Notes, which I think is possible. So let's do that for now."

## Reviewing and cleaning the master task list

**Alejandro:** If you dumped all of this into your Asana, what makes you go "wait"?

**Samantha:** I think a lot wouldn't be actual tasks, or would be things I've already done. "But that's not, like, a huge problem to just go through. And I imagine it would get better" — in the future most would go in directly, or I'd have better ways of labeling.

**Alejandro:** The idea is to have something you feel "almost immediately comfortable" using. Options: improve the classification — have it create a prompt file in the folder for what counts as a task and what goes to Asana, with things Claude automatically knows ("this is not a task", "this is done"). And if classification isn't good enough and you care a lot about not missing anything, you'll still need some review before things go into Asana — then the question is when to review and through which interface: here in Claude, from Slack, in Asana itself, a temp folder…

**Samantha:** If we can do the first batch of them in Claude, that might be best, because "it's probably easiest to batch-edit things because I can just talk to it". I can say a lot of these seem duplicated, or old ones from the one-on-one docs that aren't needed — tell it to only pull the biggest ones from those. I can also tell it to focus on my main projects — they're at the top of my one-on-one doc — order by that, and give me a list of the ones it's uncertain about, and we clear those.

**Alejandro:** That sounds great. Also ask: "if you have suggestions for ways to make this easier to review for me, happy to hear those."

**Samantha:** [Dictating:] "Our goal is going to be to edit this list, so then eventually we can put it into Asana and it only includes the tasks that I really need. A few starting points for how to clean this up. First, focus most on the tasks that are related to my key priorities — my key priorities are listed in the SK's Garden doc, both in the table and my June/July focuses. Have those projects as the headings, and batch tasks that are related to those underneath; those should be the most important ones that I don't miss. Next, go through the list you had and remove any duplicates. Also remove many of the ones listed in the one-on-one docs, because a lot of these have already been done or are outdated — only include action items from one-on-one docs that you feel confident haven't been actioned or are really important. You can also give me a section of tasks you're unsure about — whether they're already done or important — and I can review those in bulk before they go into Asana. If you have any other suggestions on format that would be easiest for me to review, please let me know."

**Alejandro:** One thing: you said "this has been actioned before" — I'm not sure what Claude would use to tag that. Maybe it should look at the tasks already in your Asana and make sure there are no duplicates from there. Any other clear criteria?

**Samantha:** I guess sometimes it says "respond to this email" but I've already responded. [Adds:] "One way to double-check your tasks: I noticed sometimes you have a task that I need to respond to an email, but I've already responded to it — so make sure you check whether the task has already been done. Maybe instead the action is that I need to follow up with them in a few weeks, but make sure it says that instead of to reply to them."

**Alejandro:** And again, thinking of ways to make the output easy to review: ask it, after it's done, to create a document with clear, concise rules for how to classify tasks in the future — rules as short, clear, one-sentence-each statements — because that makes it really easy for you to know "oh, it's doing what I think it should be doing".

**Samantha:** [Adds:] "After you do this, create a document that has clear and concise rules for how you will sort and filter tasks in the future." Did I miss it?

**Alejandro:** I would have said "one sentence each" — but that's because I like certain kinds of writing; it works as it is.

## Structuring Asana and the project instructions

**Alejandro:** Now — do you have any particular structure in Asana for bunching your tasks together?

**Samantha:** I used to have something — like current things, blocked, reminders, later. I haven't used Asana in a long time, so this will be new for me again, but I used to use it and like it. "I think I work best with, like, having tags for projects", with my overall project priorities, and then sorting by "what am I doing this week and what am I doing later" — those are basically the two ways I sort.

**Alejandro:** If the project categories are specified somewhere in the context, it should do a good job tagging. And for the weekly sorting — is that something you want suggestions on, or something in your weekly planning where you'd add a step of asking Claude?

**Samantha:** "If it could suggest my weekly stack and then I can go in and edit it, that's awesome."

**Samantha:** [New session, dictating:] "I'd like you to help me structure my Asana now. The main way I'd like to use Asana is to set my weekly priorities — I'd like to sort tasks into things that I'm going to do this week and things I'm going to do later. The other way I categorize is by projects and priorities. The main headings for these I already have in the SK's Garden document — view the table at the top, which has the main categories and projects of work that I do, plus the priority levels; and you can also see my June/July priorities, which overlap somewhat with that table but might have some distinct categories. Use those as the tags and priorities for most of my work. Ask me if you're confused about anything or anything is missing. Also sort tasks into some level of urgency based on the deadline. And then each week you can suggest what tasks I do for the following week, and I can edit them."

**Alejandro:** This seems like information you'll use across the project — so ask it to add the instructions for how to categorize tasks to the project instructions, or the CLAUDE.md ("that's how it's called under the hood").

**Samantha:** And should I review it before it adds them, or assume it's good?

**Alejandro:** Reviewing is good, at least skimming — and to make reviewing feel great, tell it to "use bullet points" — otherwise sometimes it gives me three pages of thick paragraphs and "there is no way I'm looking into that".

**Samantha:** [Adds:] "For these instructions on how to categorize my tasks, add them into the project instructions, the CLAUDE.md. Make sure it's easy for me to review — use bullet points, and make sure the instructions are very clear and concise."

## Making it stick: start with the mid-stage network

**Alejandro:** Assuming this works — it pulls your tasks, it's decent-but-not-perfect at classifying them — how will you start using it? What's the minimal thing to set the habit? It won't be perfect, and I fear if you dump in a list of 40 tasks you'll go "I don't want to skim and classify those". Is there one specific responsibility you'd like to keep close track of, so for now we focus on uploading tasks for just that?

**Samantha:** "There's a really easy one for that right now, which is the mid-stage network. So that would be a really easy one to start with."

**Alejandro:** So prompt the Asana-structure session: start by creating a project — separating it from the other tasks already in Asana, since those are messier — that's the donor project — and upload those based on the consolidated task list and the instructions from the other session. And then: what's the thing *you* need to do? We could schedule it to run daily — pull the tasks, place them there. Do you want to review the tasks it places, or let it run in the background, with your commitment being to look at your Asana whenever you do donor-project things?

**Samantha:** "I think once everything is in Asana, I'm happy using Asana as the primary point where I'm, like, triaging tasks" instead of Claude. This, for me, is more about getting it set up — and then maybe having Claude scan things to predict tasks that I might miss, or project forward some project-management things: "oh, I see that this thing is in September, so here are the tasks that have to happen before that", even if it has to intuit tasks.

**Alejandro:** That makes sense. It's worth just starting with that, and you can put in your project instructions that "for the week starting today until next week" you're using Asana for uploading stuff.

## Wrap-up

**Samantha:** "I feel good about that", and I recognize we're almost at time. "I feel really excited about this. Thank you so much for helping me on it." The one thing I might get stuck on without you: any recommendations for how to get this context brief to open again?

**Alejandro:** If one of these documents works — click "Samantha tasks prioritized", open the drop-down, "show in folder". If it's the real folder we should see the files it created.

**Samantha:** This is where my context brief is now — a different folder. That's why. [Drags the files over.] "Okay. Awesome. Thank you so much."

**Alejandro:** Should we see each other next week, same time?

**Samantha:** "Yeah, that's perfect. Thank you so much."

**Alejandro:** Amazing. Bye, Samantha.
