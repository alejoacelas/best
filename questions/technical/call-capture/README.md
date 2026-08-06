# Options for better call capture

## What I need

- Keep better transcripts than I get from Granola today.
- Keep raw audio or video so old calls can be re-transcribed later.
- Keep screen recordings for at least a short retention window.
- Avoid building a heavy system before I know what actually works.

## Recommendation

- Keep Granola only if its note-taking flow is still useful.
- Add a recording layer that keeps the raw material.
- Start with native Zoom, Google Meet, or Teams recordings when I control the meeting.
- Use OBS or macOS screen recording when native recording is unavailable.
- Extract audio from the video and run a better transcription pass.
- Use Peter Hartree's [meeting-summary prompt](https://github.com/alejoacelas/tools/blob/main/calls/prompts/peter-hartree-meeting-summary-prompt.md) for the final summary.

## Option 1: Native meeting recording plus re-transcription

This is the cleanest first thing to try when I host the call.

- Zoom cloud recording can save shared-screen layouts and generate editable VTT transcripts.
- Google Meet recordings save to the organizer's Drive and can include captions/transcripts on supported Workspace plans.
- Teams recordings are stored in OneDrive or SharePoint and can include transcription when policy allows it.
- The raw recording gives me a durable source file that I can reprocess later with OpenAI speech-to-text or another transcription API.

Tradeoffs:

- It only works when the host/account/admin settings allow recording.
- Meeting participants usually see recording notifications or consent prompts.
- Each platform has its own storage rules and retention defaults.

Use this for:

- Calls where I am the host.
- Calls where explicit recording is socially and legally straightforward.
- Meetings where shared screens matter.

## Option 2: Local screen recording plus transcription

This is the most controllable setup.

- Record the meeting window or whole screen locally.
- Capture system audio and microphone audio.
- Save the video for a fixed window, such as 30 or 60 days.
- Extract audio with `ffmpeg`.
- Re-transcribe the audio with OpenAI speech-to-text, Deepgram, AssemblyAI, or a local Whisper pipeline.

Tradeoffs:

- I have to manage consent, file storage, naming, and cleanup.
- macOS audio capture can be fiddly.
- It is easy to forget to start or stop recording.

Use this for:

- Important calls where the meeting platform will not let me record.
- Calls where I specifically need the screen recording.
- A short experiment before committing to another SaaS tool.

## Option 3: Fireflies

Fireflies is the strongest SaaS fit if downloadable recordings matter.

- It can download transcripts, summaries, audio, and full MP4 video recordings.
- Video recording is available on paid plans and requires the Fireflies notetaker bot or supported bot-free Google Meet SDK capture.
- It supports Zoom, Google Meet, Microsoft Teams, and uploads from recorded files.

Tradeoffs:

- The bot is visible in most meeting modes.
- Video recording depends on plan and capture mode.
- The meeting data lives in another SaaS system unless I export and delete it.

Use this for:

- A managed archive of calls with downloadable video/audio.
- Workflows where I want recording, transcript, search, and summaries in one product.

## Option 4: tl;dv

tl;dv is worth testing if I want a meeting-library product.

- It records, transcribes, summarizes, clips, shares, and downloads Zoom, Google Meet, and Teams recordings.
- The desktop app can record Google Meet, Zoom, and Microsoft Teams.
- It supports upload of existing audio or video files, which is useful for testing old recordings.

Tradeoffs:

- It is another third-party archive.
- Some workflows use a visible meeting participant or auto-recording.
- I would need to test transcript quality against real calls.

Use this for:

- Customer/user-research style libraries.
- Calls where clips, highlights, and downloads are as important as notes.

## Option 5: Fathom

Fathom looks good for live meeting capture but weaker for my reprocessing requirement.

- It records and transcribes live Zoom, Google Meet, and Microsoft Teams meetings.
- Recordings can be downloaded as MP4.
- It now has bot and bot-free capture modes.

Tradeoffs:

- It does not currently support uploading external recordings for analysis.
- Transcripts are copyable, but the help docs say they are not directly downloadable.
- It is less suitable if the raw archive and later re-transcription are the core need.

Use this for:

- Simple live call summaries where I do not need to import old recordings.
- Testing against Fireflies or tl;dv if the live capture experience feels better.

## Option 6: Stay with Granola plus a parallel recorder

This keeps the tool I already use but fixes the irreversible part.

- Granola can keep doing lightweight notes.
- A local or native recording gives me the raw material Granola does not keep.
- The final summary can be produced from a better transcript using Peter Hartree's prompt.

Tradeoffs:

- Two systems means more manual process.
- Granola's transcript may stop being the source of truth.
- I need a disciplined retention rule so recordings do not pile up forever.

Use this for:

- The fastest next experiment.
- A transition period while evaluating Fireflies, tl;dv, and native recordings.

## Suggested experiment

- Pick 5 real calls over the next 2 weeks.
- For each call, keep Granola running.
- Also save the raw recording with either native recording or OBS.
- Re-transcribe the audio after the call.
- Summarize with Peter Hartree's prompt.
- Compare the result against Granola on quote accuracy, speaker attribution, screen context, and time cost.

## Sources checked

- Peter Hartree meeting-summary prompt: https://gist.github.com/peterhartree/219ec15687bdce13a979096a5aea79b2
- Granola feature requests: https://docs.granola.ai/help-center/feature-requests
- Granola Google Meet guide: https://www.granola.ai/blog/granola-google-meet-integration-recording-transcription
- Zoom cloud recording settings: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064676
- Zoom recording layouts: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062314
- Zoom audio transcription: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927
- Google Meet recording: https://support.google.com/meet/answer/9308681
- Google Meet transcripts: https://support.google.com/meet/answer/12849897
- Microsoft Teams recording: https://support.microsoft.com/en-us/teams/meetings/start-stop-and-find-meeting-recordings-in-microsoft-teams
- Fireflies downloads: https://guide.fireflies.ai/articles/3319752033-how-to-download-transcripts-summaries-and-meeting-recordings-from-fireflies
- Fireflies video recording: https://guide.fireflies.ai/articles/1980499609-how-to-capture-video-for-your-fireflies-meetings
- Fireflies recording FAQs: https://guide.fireflies.ai/articles/9554534786-how-fireflies-joins-and-records-your-meetings-faqs
- tl;dv desktop app: https://tldv.io/desktop-app/
- tl;dv homepage: https://tldv.io/
- Fathom external recordings: https://help.fathom.video/en/articles/6049729
- Fathom sharing recordings: https://help.fathom.video/en/articles/295616
- Fathom desktop app: https://help.fathom.video/en/articles/449088
- OBS Studio wiki: https://obsproject.com/wiki/
- OpenAI audio guide: https://platform.openai.com/docs/guides/audio
