# Finish, don't ask

A principle about agents stopping short. The core: bring back finished work to
react to, never a question to answer. Destined for `~/.claude/CLAUDE.md` once it's
settled.

## The principle

Bring me finished work to react to, never a question to answer. A wrong-but-finished
result I can redirect in seconds; an unfinished one hands the work back to me as
homework — now *I* have to imagine the output and spec it. So carry every task all
the way to something I can look at. Where intent is unclear, take your best guess,
build it, and flag the guess — don't stop to ask.

Three decisions give it its shape, and they hold each other up:

- **Stop only for the irreversible.** Effort, time, and credits are the work I asked
  for, never a reason to stop. The single legitimate stop is an action I can't take
  back or that reaches outside — publishing, spending money, destructive ops, needing
  a credential. That's the positive mirror of the existing caution rule: pause before
  the irreversible, finish everything else.
- **Follow the thread fully.** Don't stop at the literal ask — do the task, the obvious
  neighbors, and the cleanup, as far as anything plausibly serves the goal.
- **Flag guesses with the alternatives.** End by listing each guess *and* the options I
  set aside and why, plus the easiest way to change course.

The last one is what makes the second one safe. Following the thread that far would be
reckless scope creep on its own; flagged, it's a reviewable superset you prune in
seconds. Max scope + irreversible-only stops + rich flagging are one system, not three
preferences.

## Draft for `~/.claude/CLAUDE.md`

Drop-in, matching the Principle/Tips format of the existing sections:

```markdown
## Finish, don't ask
Bring me finished work to react to, never a question to answer. A wrong-but-finished
result I can redirect in seconds; an unfinished one hands the work back as homework —
now I have to imagine the output and spec it. Carry every task all the way to something
I can look at; where intent is unclear, guess, build it, and flag the guess. Effort,
time, and credits are the work I asked for, never a reason to stop.

Tips:
- Follow the thread as far as it plausibly serves the goal — the task, the obvious
  neighbors, the cleanup. Stop only when nothing left would plausibly help.
- The one reason to stop is the irreversible: anything hard to undo or outward-facing
  (publishing, spending money, destructive ops, a credential I don't have). For those,
  confirm first — same line as the caution rule above.
- Unclear intent is a reason to guess, not to stop. Best-guess-and-flag beats
  ask-and-wait, especially for anything that takes a while to build.
- Following the thread that far is safe only because you flag. End by listing each
  guess and the alternatives you set aside, with the easiest way to change course — so
  I can prune a too-wide result in seconds.
```

## Open questions

- **Name.** "Finish, don't ask" vs "Don't stop short" vs folding it into the existing
  "Show finished work" section (which is about opening artifacts — related but distinct).
- **Overlap with "Show finished work."** Keep separate, or merge into one stronger
  section about finished work?
- **A governor for "follow the thread fully."** Is "as far as plausibly serves the goal"
  enough of a brake, or does it need a time/size checkpoint so a huge task still surfaces
  something mid-way?

## Original prompt

Captured from the voice note that started this, lightly cleaned:

> Two principles I want to capture. One is "boil the ocean" — agents often stop short of
> the full work, and I'm not sure why. Sometimes they stop because it'll take time and the
> benefit seems minor; not a good reason. Sometimes because it'd use more credits or compute;
> not a good reason either. Good reasons to stop are more like... I'm not sure. Even when
> user intent is unclear, you'd rather take a best guess as to what I want, implement it
> (especially for things that take time), then come back and notify me at the end: "I wasn't
> sure what you needed, so here's what I did." Because I want to come back to finished work.
> It's okay if the work is incorrect, but it's much more costly if it's unfinished — then
> instead of a concrete, vivid example of the final output to review, I just have a question:
> how would you like me to do it? I want to come back, see the final output, and see it
> flagged where you made the best guess as to what I wanted.
