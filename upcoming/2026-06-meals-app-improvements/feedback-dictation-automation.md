# Feedback, dictation, and issue automation

The good version is not a chat widget. It is a small feedback button that lets
someone say what they wanted the meals app to do, turns that into a clean public
GitHub issue, and lets an agent pick off the safe issues as pull requests.

Build it in three layers:

1. Feedback capture: a quiet in-app sheet with typed or spoken input.
2. Transcription: browser recording plus a server-side Parakeet path for the
   final transcript.
3. Automation: GitHub issues as the queue, labels as the permission boundary,
   and Codex or Claude as a replaceable implementation runner.

## The feedback UX

Put one feedback entry point in the app chrome, probably as a small icon button
near the kitchen name or inside the existing Ask sheet. Do not add a second
large floating button next to Ask; the app already has one primary assistant
surface.

The sheet should ask one plain question:

> What did you want meals to do?

Below it:

- A multiline text box.
- A press-to-talk button.
- Four small category chips: Idea, Bug, Missing recipe, Command failed.
- A short public-submission note: "This may become a public GitHub issue. Do not
  include private information."
- A submit button that says "Send feedback."

After submission, show a short confirmation, not a GitHub workflow dump:

> Sent. I filed "Feedback: Add a way to plan lunches from the basket."

If the backend creates a public issue, the confirmation can include a small
"Open issue" link. If the app later supports private feedback, keep the same UI
but change the backend destination.

## What the issue should contain

Keep the raw user message. It is the ground truth. Then add a concise model-made
summary so future triage is easy.

Issue title:

```text
Feedback: <short outcome>
```

Issue body:

```markdown
## Outcome

<One or two sentences describing what might become possible if this is built.>

## Original message

> <The exact submitted text or transcript.>

## Context

- Route: `#/basket`
- Diet: `vegan`
- Source: `dictation` or `typed`
- App snapshot: `<window.MEALS_DATA.snapshot.date>`
- Device: `<coarse browser + viewport class>`

## Possible acceptance checks

- <Short concrete check>
- <Short concrete check>
```

Default labels:

- `feedback`
- `meals-app`
- `idea`, `bug`, `recipe-request`, or `command-failed`
- `agent:triage`

Do not give an agent permission to open a PR just because an issue exists. The
issue is the inbox. A label such as `agent:build` is the explicit permission to
attempt implementation.

## Dictation pattern

The current app uses `SpeechRecognition` in `meals/app/app.js`, with final-only
results. That is fine for a demo, but it is not the durable path:

- It does not let us choose Parakeet.
- In Chrome, speech recognition can use a server-side recognition service.
- Browser support is uneven enough that mobile cannot rely on it.
- Final-only results make the UI feel less alive than native dictation.

Use two layers instead.

### Layer 1: live preview when the browser gives it to us

If `SpeechRecognition` exists, set:

```js
recognition.continuous = true;
recognition.interimResults = true;
recognition.maxAlternatives = 1;
```

Render interim text in the feedback textarea as faint/live text, then replace it
when a final segment arrives. This gives the nicest feeling on browsers where it
works.

Treat this text as a preview. It is not the final source of truth when we also
have a server transcript.

### Layer 2: recorded audio for reliable final transcription

Always try to record audio with `getUserMedia({ audio: true })` and
`MediaRecorder`. Choose the MIME type at runtime:

```js
const candidates = [
  "audio/webm;codecs=opus",
  "audio/mp4",
  "audio/ogg;codecs=opus"
];
const mimeType = candidates.find(MediaRecorder.isTypeSupported);
```

On submit:

1. Stop the recording.
2. Upload the audio blob to `POST /transcribe`.
3. The backend converts it to the model's expected shape if needed.
4. The backend returns the final transcript.
5. The UI lets the user edit the final text before filing feedback.

This is the important product move: the user sees live text quickly when native
dictation works, but the submitted text can still come from the better ASR
model.

### Parakeet

The Parakeet model to plan around is `nvidia/parakeet-tdt-0.6b-v2`: English ASR,
punctuation and capitalization, word-level timestamps, and 16 kHz `.wav` or
`.flac` input. NVIDIA's model card also points to a newer multilingual v3, but
v2 is the relevant English path unless the app needs non-English dictation.

Do not put a Parakeet API key in the browser. The browser sends audio to our
backend; the backend calls the transcription provider.

There are two practical deployment choices:

- Managed transcription endpoint: fastest if a hosted Parakeet provider accepts
  browser audio or lets us upload a file. The Worker only forwards audio and
  stores no recording by default.
- Self-hosted GPU endpoint: most control, but more maintenance. The endpoint
  accepts browser audio, transcodes to 16 kHz WAV or FLAC, runs Parakeet, and
  returns text.

Cloudflare Workers are a good fit for the feedback and GitHub parts, but not for
FFmpeg-style audio transcoding. If the transcription provider needs WAV/FLAC,
put the transcode step in a small serverless container or GPU service, or choose
a provider that accepts the browser's recording format.

True live Parakeet text is a later optimization. It means chunked recording,
WebSocket or streaming upload, partial hypotheses, reconnect behavior, and more
mobile edge cases. The first useful version is browser interim text plus
Parakeet final text.

## Backend shape

Do not extend the current public kitchen sync Worker with secrets. Keep feedback
as a separate Worker or server because it needs GitHub and model credentials.

Endpoints:

```text
POST /transcribe
  input: multipart audio blob
  output: { transcript, model, durationMs }

POST /feedback
  input: {
    originalText,
    transcriptSource,
    category,
    route,
    diet,
    snapshot,
    userAgentClass
  }
  output: { issueUrl, issueNumber, title, outcome }
```

Secrets:

- `GITHUB_APP_ID`, `GITHUB_APP_PRIVATE_KEY`, `GITHUB_INSTALLATION_ID`
- `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` for the short summary step
- Transcription provider key, if Parakeet is hosted

Use a GitHub App installation token rather than a long-lived personal access
token. The app only needs permission to create issues in the meals repository.

Keep local copies and notes for these credentials in the private config
credentials folder, not in this public repo. On this machine, prefer:

```text
~/.config/credentials/meals-feedback.env
~/.config/credentials/meals-feedback-github-app.private-key.pem
~/.config/credentials/meals-feedback-transcription.env
```

If the credentials folder is missing, create it outside the repo. The files
should stay private and should never be committed.

Suggested local variable names:

```sh
GITHUB_APP_ID=
GITHUB_APP_INSTALLATION_ID=
GITHUB_APP_PRIVATE_KEY_PATH=~/.config/credentials/meals-feedback-github-app.private-key.pem
MEALS_FEEDBACK_OPENAI_API_KEY=
MEALS_FEEDBACK_TRANSCRIPTION_API_KEY=
MEALS_FEEDBACK_TRANSCRIPTION_ENDPOINT=
```

Deployment secrets should be copied from the private config files into the
actual runtime:

- Feedback Worker or server: GitHub App values, summary model key, transcription
  key, and transcription endpoint.
- GitHub Actions: `OPENAI_API_KEY` for `openai/codex-action@v1`.

Add basic abuse controls before making this public:

- Per-IP rate limit.
- Max audio duration, probably 60 seconds.
- Max submitted text length, maybe 4,000 characters.
- Hidden honeypot field or Turnstile if spam appears.
- Refuse empty or repeated submissions.

## The summary agent

The feedback endpoint should call a cheap model before creating the issue. Its
job is not to decide what to build. Its job is to make the issue readable.

Return a strict JSON object:

```json
{
  "title": "Plan lunches from what is already in the basket",
  "category": "idea",
  "outcome": "A user could ask meals to suggest lunches using ingredients they already have, then add only the missing items to the basket.",
  "acceptance": [
    "The app can rank lunch recipes by missing ingredient count.",
    "The basket can add only missing ingredients from the selected recipes."
  ],
  "labels": ["feedback", "meals-app", "idea", "agent:triage"]
}
```

The prompt should explicitly preserve the original message and avoid inventing
commitments. Good wording:

```text
Summarize this meals app feedback for a GitHub issue.
Keep the user's original message separate and exact.
Write the outcome as a possible product result, not as a promise.
Return only JSON matching the schema.
```

## GitHub as the queue

The public issue is the durable unit. It is easy to search, label, deduplicate,
link to a PR, and close with review history.

Use issue labels as the state machine:

- `agent:triage`: summarize, dedupe, maybe suggest labels.
- `needs-human`: unclear, product judgment needed, or possibly private content.
- `agent:build`: allowed to attempt a PR.
- `agent:skip`: not worth automating.
- `agent:done`: PR opened or issue resolved.

When an issue has been addressed, archive the local planning record. For GitHub,
that means closing the issue and adding `agent:done`. For local notes under
`upcoming/`, move the addressed note or folder to:

```text
~/archive/best/upcoming/<same-relative-path>
```

Preserve the path so the archive shows where the work came from.

The agent should only build issues with `agent:build`, and preferably only when
the issue is also small enough:

- Reproducible bug.
- Copy or UX polish.
- Small static app feature.
- Test or build repair.
- Documentation update.

Do not auto-build open-ended product ideas like "make meal planning smarter."
Those should get triaged into a tighter issue first.

## Agent-to-PR automation

The clean automation is a GitHub Actions workflow triggered when a label is
added:

```yaml
on:
  issues:
    types: [labeled]
```

The workflow checks:

1. The label is `agent:build`.
2. The issue is open.
3. The issue is in the right repository.
4. The issue does not already have a linked agent PR.

Then it runs an agent against a prompt file such as
`.github/agents/meals-feedback-build.md`.

Codex path:

- Use `openai/codex-action@v1` in the agent job, or run `codex exec` directly on
  a trusted runner.
- Prefer the safer patch-artifact pattern: the agent job has model secrets and
  read-only repository permissions; a later job without model secrets applies
  the patch, commits it, pushes a branch, and opens the PR.
- Pass a schema or require a final markdown report so the PR body is predictable.

Claude path:

- Use the same issue prompt and branch/PR wrapper.
- Swap only the runner step.
- Keep the same labels, tests, and human-review boundary.

Prompt shape:

```text
You are implementing one small meals app feedback issue.

Issue:
<issue title, body, comments>

Rules:
- Keep changes scoped to `meals/app` unless the issue explicitly requires docs.
- Preserve the static app shape.
- Do not commit secrets.
- Run the relevant local verification.
- If the request is too broad, make no code changes and explain the smaller
  follow-up issue that should be created.
```

After the agent runs:

1. Run the app's verification command. For current static app changes, that is
   usually `python3 app/build.py` if data changed, plus a smoke test of the
   static files.
2. If there is no diff, comment on the issue and remove `agent:build`.
3. If there is a diff, commit to `agent/issue-<number>-<slug>`.
4. Open a draft PR.
5. Comment on the issue with the PR link.
6. Add `agent:done`.
7. After Alejo accepts the work, move any corresponding `upcoming/` note to the
   mirrored archive path.

Alejo does the final review and merge.

## Codex Desktop prompts for credentials

Use Codex Desktop as a guide for browser and settings navigation, not as a
secret holder. The rule for every prompt below is the same: Codex can navigate
until a secret is about to be generated, displayed, downloaded, or pasted. At
that point it should stop and hand control back to Alejo.

### General credential helper

```text
Help me collect credentials for the meals feedback automation.

Use Chrome or the in-app browser if available. Navigate as far as you can through
provider settings, but do not read, copy, paste, screenshot, summarize, or store
any API key, private key, token, one-time secret, or downloaded secret file.

When a secret is about to be generated, displayed, downloaded, or pasted, stop
and tell me:

1. What exact page or field I am on.
2. What value or file I need to capture myself.
3. The exact local destination under `~/.config/credentials`.
4. The exact deployment secret name, if it also needs to be added to GitHub
   Actions, Cloudflare Workers, or another runtime.

Continue only after I say I am done with that secret.
```

### GitHub App for creating feedback issues

```text
Help me create and install a GitHub App for meals feedback issue creation.

Target repository: `alejoacelas/meals`.
Purpose: the feedback backend should create public GitHub issues from app
feedback.

Navigate GitHub as far as you can. Prefer the least privileges that still allow
issue creation:

- Repository metadata: read-only.
- Issues: read and write.
- Webhooks: disabled unless GitHub requires an inactive placeholder.

Install the app only on `alejoacelas/meals`.

Do not view or store secrets. Stop when:

- GitHub is about to generate or download the private key.
- The app ID is visible.
- The installation ID is visible or derivable from the installation page.

Tell me to save:

- App ID as `GITHUB_APP_ID` in
  `~/.config/credentials/meals-feedback.env`.
- Installation ID as `GITHUB_APP_INSTALLATION_ID` in
  `~/.config/credentials/meals-feedback.env`.
- The private key file as
  `~/.config/credentials/meals-feedback-github-app.private-key.pem`.
```

### OpenAI key for issue summaries

```text
Help me create an OpenAI API key for the meals feedback summary backend.

Navigate to the OpenAI API key settings. Do not read, copy, paste, screenshot,
or store the key. Stop when the new key value is displayed.

Ask me to save it locally as:

`MEALS_FEEDBACK_OPENAI_API_KEY` in
`~/.config/credentials/meals-feedback.env`.

If the provider supports project-scoped keys, help me choose or create a project
for the meals feedback backend before the key is generated. Do not create paid
resources or change billing settings without asking me first.
```

### OpenAI key for Codex GitHub Action

```text
Help me set up the OpenAI API key used by the Codex GitHub Action for
agent-created pull requests.

Target repository: `alejoacelas/meals`.
GitHub Actions secret name: `OPENAI_API_KEY`.

First navigate me to the OpenAI API key page to create or choose a key for Codex
automation. Do not view or store the key. Stop when I need to copy it.

Then navigate me to the repository's GitHub Actions secrets page. Stop at the
secret value field so I can paste the key myself. Do not read the field after I
paste it.

Also ask me to record a local note in
`~/.config/credentials/meals-feedback.env` that this key is installed in GitHub
Actions as `OPENAI_API_KEY`, without saving the actual key unless I choose to
keep a private local copy.
```

### Parakeet transcription provider

```text
Help me choose and set up the hosted transcription credential for Parakeet
`nvidia/parakeet-tdt-0.6b-v2`, or the closest managed endpoint that can run that
model.

Do not create paid resources, deploy GPU infrastructure, or generate API keys
without asking me first. Prefer a managed endpoint that can accept browser audio
or file uploads so the app does not need to run FFmpeg in a Worker.

Once we have selected the provider, navigate as far as you can to the API key or
endpoint settings. Do not read, copy, paste, screenshot, or store the key.

Stop when I need to capture the secret and tell me to save:

- `MEALS_FEEDBACK_TRANSCRIPTION_API_KEY` in
  `~/.config/credentials/meals-feedback-transcription.env`.
- `MEALS_FEEDBACK_TRANSCRIPTION_ENDPOINT` in
  `~/.config/credentials/meals-feedback-transcription.env`.

Also note any required audio input format, max duration, and whether the endpoint
accepts `audio/webm`, `audio/mp4`, WAV, or FLAC.
```

### Cloudflare or backend runtime secrets

```text
Help me add runtime secrets for the meals feedback backend.

Use the deployed backend provider if it already exists. If it does not exist,
stop and tell me what backend or Worker needs to be created first.

Secrets to add:

- `GITHUB_APP_ID`
- `GITHUB_APP_INSTALLATION_ID`
- `GITHUB_APP_PRIVATE_KEY`
- `MEALS_FEEDBACK_OPENAI_API_KEY`
- `MEALS_FEEDBACK_TRANSCRIPTION_API_KEY`
- `MEALS_FEEDBACK_TRANSCRIPTION_ENDPOINT`

Do not ask me to paste secret values into chat. Navigate to each secret input or
terminal prompt, then stop so I can paste the value myself from
`~/.config/credentials`. Do not read the value back after I paste it.
```

## Suggested implementation order

1. Add the feedback sheet with typed input only.
2. Add `POST /feedback` and create GitHub issues with raw text plus context.
3. Add the summary model so issues have outcome and acceptance checks.
4. Add `MediaRecorder` recording and `POST /transcribe`.
5. Add native `SpeechRecognition.interimResults` as live preview where it works.
6. Add the `agent:build` GitHub Actions workflow.
7. Test the workflow on documentation-only issues before letting it edit app
   code.
8. Add streaming transcription only if the two-layer dictation flow still feels
   too slow.

## Sources

- NVIDIA Parakeet model card:
  <https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2>
- MDN `SpeechRecognition`:
  <https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition>
- MDN `SpeechRecognition.interimResults`:
  <https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults>
- MDN `MediaRecorder`:
  <https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder>
- GitHub Actions issue events:
  <https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows>
- GitHub REST issues API:
  <https://docs.github.com/en/rest/issues/issues>
- OpenAI Codex GitHub Action manual section:
  <https://developers.openai.com/codex/github-action>
- OpenAI Codex noninteractive mode:
  <https://developers.openai.com/codex/noninteractive>
