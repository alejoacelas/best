How was the conference and camp tracker built and checked?

## Inputs

- Alejo named The Curve, Foresight Vision Weekend, Devcon, Manifest, Vibecamp, a Berlin
  summer camp, EA Estonia’s yearly retreat, EA France’s yearly retreat, and analogous
  retreats from well-sized EA communities on 2026-08-03.
- Official event pages supplied dates for The Curve, Vision Weekend USA, Devcon 8,
  Manifest 2026, Vibecamp’s next-date status, and the EA Germany Summer Retreat.
- The Centre for Effective Altruism’s [upcoming-conferences page](https://www.effectivealtruism.org/ea-global/events)
  supplied the EAG, EAGx, and EA Summit schedule.

## Method

1. Put the tracker under `other/travel/` because attendance entails travel and place.
2. Separate dated conferences from less formal camps and community retreats.
3. Preserve unclear dictation in brackets instead of guessing which Burning Man variant,
   retreat date, or city was intended.
4. Prefer official organizer pages; use retrospectives only to establish that an undated
   retreat recurs.
5. Attempt a read-only Google Calendar connection before defining the sync boundary.

## Checks

- Every confirmed date has an official source.
- Past Manifest 2026 is retained as a recurring series, not presented as upcoming.
- EAGxIndia and EAGxAustralasia retain unknown cities because the official index does not
  state them.
- Google Calendar returned `ACCESS_TOKEN_SCOPE_INSUFFICIENT`; no calendar write occurred.
