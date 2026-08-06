---
human_edit_tracking:
  enabled: true
  history: []
---
# Calendar synchronization

Live synchronization is not yet available. On 2026-08-03, listing calendars through the
connected Google account failed with `ACCESS_TOKEN_SCOPE_INSUFFICIENT`. Reauthorize Google
Calendar before the first sync.

After access is restored:

1. List visible calendars and choose the intended destination explicitly.
2. Compare confirmed events over a bounded window, initially 2026-08-03 through
   2027-06-30, against `conferences.md` and confirmed rows in `camps.md`.
3. Match on normalized title, dates, and place. Report missing, changed, duplicate, and
   cancelled events before writing.
4. Use all-day events when the source gives dates but no daily schedule. Use the official
   local time zone when exact times exist.
5. Put the official source URL and `other/places/conferences/` in the description. Never
   add watch-list or bracketed events.
6. Read back every created or updated event, then record the sync date and calendar name
   below.

Last successful sync: never

Calendar: [unknown until access is restored]
