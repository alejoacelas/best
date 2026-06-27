# Meals app improvement notes

The app is already strongest as a calm, phone-first catalog: three places, diet
first, recipes linked to ingredients, and a basket that turns recipes into a
shop. The next big improvement should not be more filters. It should be an easy
way to tell the app what you want and let it do the clicking.

## Best next improvement: command mode

Add a microphone button that opens a small command sheet. The user says what
they want in normal language:

> I want three vegan dinners this week, high protein, no mushrooms. Pick the
> recipes and add the ingredients I need.

The app transcribes the request, sends it with the current app state to Claude
Opus 4.8, and gets back a short plan plus structured actions. The user sees what
will change before the app applies it.

This is more than search. It should be able to:

- Pick recipes from the current catalog.
- Add recipe ingredients to the basket.
- Remove or mark basket items as already owned.
- Suggest recipe modifications.
- Save a modified recipe as a draft or shortlist item.
- Explain why it picked something, briefly.
- Respect the current diet mode without making the user restate it.

The point is to collapse multi-step browsing into one intent. The app is already
small and structured enough for this to work well: recipes have slugs, ingredients
have slugs, the basket is explicit, saved recipes are explicit, and vegan mode is
global.

## How it should feel

Keep the interface restrained.

1. The microphone lives in the top bar or near search, as a single icon button.
2. Tapping it opens a bottom sheet with a listening state and transcript.
3. After the user stops speaking, the sheet shows a proposed plan.
4. The plan lists concrete changes: recipes selected, ingredients added, saved
   variants created, basket items changed.
5. The user taps Apply, Edit, or Cancel.

For tiny commands like "add garlic to my basket," the app could offer one-tap
apply. For larger commands like "plan five dinners," it should always show a
confirmation.

Do not turn this into a separate chatbot tab. The command layer should operate on
the existing app: Recipes, Ingredients, Basket. It should feel like a faster way
to use the app, not a fourth place.

## The model should return actions, not vibes

The model should not directly mutate app state and should not invent identifiers.
It should return a constrained JSON plan that the app validates before applying.

Example shape:

```json
{
  "summary": "Three vegan mains with varied proteins and no mushrooms.",
  "actions": [
    {
      "type": "save_recipe",
      "recipe": "tarka-dal-turmeric-red-lentil"
    },
    {
      "type": "add_recipe_to_basket",
      "recipe": "tarka-dal-turmeric-red-lentil"
    },
    {
      "type": "add_recipe_to_basket",
      "recipe": "peanut-tofu-cabbage-pak-choi"
    }
  ],
  "notes": [
    "I avoided mushroom recipes and animal-only recipes."
  ]
}
```

For recipe modifications, use draft objects instead of rewriting the catalog:

```json
{
  "type": "create_recipe_variant",
  "baseRecipe": "spinach-tomato-chickpeas",
  "title": "Spinach, tomato and chickpeas with tofu",
  "changes": [
    "Add pan-fried tofu for more protein.",
    "Keep the same one-pan method."
  ],
  "basketAdds": ["tofu"]
}
```

This keeps the markdown catalog clean while letting the user save useful personal
variants.

## Implementation shape

The current app is static. That is good for deployment, but the command feature
needs a backend boundary because model credentials must not live in the browser.

Add a small command endpoint, probably next to the existing sync worker:

- Browser records audio or accepts typed text.
- Speech becomes text through browser dictation or a server-side transcription
  step.
- The command endpoint receives the transcript, diet, basket, saved recipes, and
  a compact recipe and ingredient index.
- The endpoint calls Claude Opus 4.8.
- The endpoint returns structured actions.
- The browser validates each action against `window.MEALS_DATA`.
- The browser shows the confirmation sheet and applies approved changes through
  the same local state functions used by the current buttons.

Before adding audio, build the same flow with a text command box. That proves the
state model, action schema, validation, and confirmation UI. The microphone can
then be added without changing the product logic.

## Other improvements worth considering

### Cook from your basket

Use the basket as a pantry signal. Recipe cards can show "you have 5 of 7" or
"missing lemon and chickpeas." Add a filter for recipes that are already cookable
or nearly cookable.

This pairs well with command mode: "What can I cook with what I already have?"

### Week builder

Let the app select a short plan for the next few meals, then merge the ingredients
into one basket. It should optimize for variety, repeated ingredients, diet, time,
and effort.

The first version can be simple: choose 3 to 5 recipes, show the list, and add all
missing ingredients.

### Recipe variants and shortlist

Saved recipes are useful, but the app will become much more personal if it can
save modified versions:

- Vegan version I actually like.
- Higher-protein version.
- No-mushroom version.
- Airbnb kitchen version.
- Faster version for low-energy days.

These should be user-private app records by default, not changes to `menu/*.md`.
When a variant becomes canonical, it can be promoted back into the markdown by
hand.

### Pantry separate from basket

Right now the basket has "need" and "got it." A separate pantry list would make
recommendations better. The basket is what to buy; pantry is what is usually
available.

This can stay lightweight: core staples, disliked ingredients, always-have items,
and never-have items.

### Cook mode

Recipe detail pages already have a good one-screen summary. Cook mode would make
that usable with wet hands:

- Bigger step text.
- One step at a time.
- Keep screen awake.
- Optional timers.
- Quick "next" and "back."

This is less transformative than command mode, but it improves the moment of
actually cooking.

### Feedback loop

Add a tiny post-cook action: cooked it, liked it, too much effort, too bland, keep
in rotation. This would make future recommendations much better without asking
for long notes.

The catalog already distinguishes cooked recipes from scored ideas in markdown.
The app could capture personal feedback first, then later help decide what should
graduate into the public catalog.

### Better sharing and sync

The current username sync model is intentionally simple. For the app to become a
daily tool, it may need:

- Shareable basket links.
- A way to copy a recipe plan to someone else.
- Conflict handling when two devices edit the same basket.
- Export of saved recipes and variants.

This does not need full accounts. The existing kitchen-name model can stay, but
the app should be clearer about what is local, what is synced, and what another
person can see.

### Offline install

The app is a good candidate for a home-screen PWA. Add a manifest and service
worker so recipes, ingredients, and the current basket work offline in a
supermarket or weak kitchen Wi-Fi.

## Recommended order

1. Create a small internal action layer in `app.js` so basket, save, diet, and
   variant operations can be called by buttons or by commands.
2. Add a text command sheet that returns validated structured actions.
3. Add the command endpoint with Claude Opus 4.8 behind it.
4. Add microphone input once the text flow is useful.
5. Add recipe variants as first-class saved items.
6. Add "cook from your basket" recommendations.
7. Add week planning on top of the same command and recommendation layer.

The best first demo would be:

> I want three vegan mains for the next few days, high protein, no mushrooms.
> Save them and add what I need to my basket.

If that works smoothly, the app will feel less like a catalog and more like a
personal kitchen assistant.

## Open decisions before building

- Confirm the exact API model name for Claude Opus 4.8 in the target environment.
- Decide whether the microphone uses browser dictation, server-side
  transcription, or direct audio input if the chosen model supports it.
- Decide whether model actions can auto-apply for small requests or always require
  confirmation.
- Decide where saved recipe variants live in the sync format.
- Decide whether variants are personal app state only or can be promoted into the
  markdown catalog later.
