# Recurring machine checkups

## What the checkup is
A periodic sweep of the whole setup that catches what silently rots between commits:
loose ends, instructions that fight each other, things worth promoting to global, and
anything sketchy that's running or leaking. It is **report-only**: it changes nothing,
just files findings (each with a proposed action) into a dated report and the backlog,
for you to act on. It's the `machine-checkup` skill; run it by hand with
`/machine-checkup`, or on a schedule (below).

The point of making it recurring: the first pass of this workspace already turned up a
broken fresh-Mac clone, a dead git hook, and config churn. Those accrue continuously.
A standing checkup means they get caught in days, not whenever you next happen to look.

## The one constraint that decides everything
**The checkup reads live local state** — uncommitted work, dangling symlinks, what's in
launchd, connectors needing re-auth. That state exists only on *this Mac*, so the
checkup has to **run locally**. A cloud agent can only see what's been pushed to GitHub,
so it can audit your *repos* but not your *machine*. That splits the options cleanly:

- **Machine checkup → run locally** (on-demand, `/loop`, or launchd).
- **Repo-only audit** (secrets in history, cross-repo consistency) → could also run as a
  cloud routine, if you ever want one that runs while your Mac is off.

## The options, and when each fits

| Option | Runs when | Needs | Best for |
|---|---|---|---|
| **On-demand skill** (`/machine-checkup`) | you type it | nothing | now — zero infra, no surprises |
| **`/loop` in a session** | every N min, *while a session is open* | Claude Code running | bursts during active work ("check every 30m today") |
| **launchd LaunchAgent** | a real schedule, logged in | Mac awake | the unattended weekly checkup — the recommended graduation |
| **cron** | a real schedule | Mac awake, Full Disk Access | only if you already live in cron; launchd is the macOS-native replacement |
| **Cloud routine** (`schedule` skill) | a cron, in the cloud | repo access + notifier | repo-only audits that must run with the Mac off |
| **git hooks** (already in use) | on commit/push | nothing | catching a specific problem *at the moment it happens* (secrets, sync drift) — complements, doesn't replace, the periodic sweep |

## Recommended path
1. **Now:** on-demand. Run `/machine-checkup` whenever you think of it. This is already
   set up and has no standing cost.
2. **When it's proven useful:** graduate to a **weekly launchd job** that runs it
   unattended and leaves a report you skim. Setup below — it's one file plus one command,
   and fully reversible (`unload` + delete).

## Setting up the weekly launchd job
A LaunchAgent is macOS's native "run this on a schedule" mechanism: a plist in
`~/Library/LaunchAgents/` that `launchd` executes. This one calls the headless wrapper
(`machine-checkup/scripts/run-headless.sh`, which runs Claude with
`--permission-mode bypassPermissions` so it can act without prompts).

Create `~/Library/LaunchAgents/com.alejo.machine-checkup.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>            <string>com.alejo.machine-checkup</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/alejo/best/machine/dotfiles/claude/skills/machine-checkup/scripts/run-headless.sh</string>
  </array>
  <!-- Sundays at 09:00. If the Mac was asleep then, it runs at next wake. -->
  <key>StartCalendarInterval</key>
  <dict>
    <key>Weekday</key> <integer>0</integer>
    <key>Hour</key>    <integer>9</integer>
    <key>Minute</key>  <integer>0</integer>
  </dict>
  <key>StandardOutPath</key>  <string>/Users/alejo/best/machine/checkups/.launchd.out</string>
  <key>StandardErrorPath</key><string>/Users/alejo/best/machine/checkups/.launchd.err</string>
</dict>
</plist>
```

Load it (and to stop it, `unload`):
```sh
launchctl load ~/Library/LaunchAgents/com.alejo.machine-checkup.plist    # enable
launchctl start com.alejo.machine-checkup                                 # run once now, to test
launchctl unload ~/Library/LaunchAgents/com.alejo.machine-checkup.plist   # disable
```

Notes and gotchas:
- **Reversible.** `unload` + `rm` the plist removes it entirely; the checkup only ever
  makes git-traceable changes.
- **Mac must be awake** at the fire time (or it runs at next wake). launchd can't wake a
  sleeping Mac on its own; pair with a `pmset repeat wake` if you want guaranteed timing.
- **`bypassPermissions` is powerful** — it lets the unattended run commit and push. The
  skill's own boundaries keep it to reversible actions, but this is the knob to
  understand before enabling. Start by running the wrapper by hand once and reading the
  report before trusting the schedule.
- **First run may prompt for permissions** (Full Disk / Automation) the first time
  launchd touches protected paths — grant them in System Settings → Privacy.
- **Want a ping when it finds something?** Have the skill's report step also send a
  notification (a macOS banner via `osascript -e 'display notification ...'`, or a Slack
  message via the Slack tool). Add that to the skill if you go this route.

## The cloud variant (optional, repo-only)
If you later want an audit that runs even with the Mac off, the `schedule` skill creates
a Claude cloud routine on a cron. It can only see pushed repos — so scope it to
repo-level checks (secret history, cross-repo drift), not live machine state, and have it
notify you or open findings. Keep the machine-state checkup local.
