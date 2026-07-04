# Jargon audit — 03-power-ups.md (2026-07-04)

This draft is unusually well-glossed: nearly every term of art is defined at first
use, or is a literal label the reader must type/click to follow the instructions.
The honest result is a single prose change. Most of the work below is documenting
why opaque-looking terms are safe to keep.

## Changes (before → after)

- **"(its computer use is strong)" → "(it's especially good at this)"**
  "Computer use" as a bare noun is a named AI-capability category the target reader
  wouldn't recognize as a term. The plain version carries the same claim, is shorter,
  and its antecedent ("navigating web pages") sits in the prior sentence.

## Considered and deliberately kept

- **CLI / CLIs** — Opaque as an acronym on its own ("command-line interface" doesn't
  obviously mean "a tool you install"). But it is glossed at first use ("the
  command-line tools that let Claude Code truly *work* your Google account") and the
  author deliberately teaches it as a durable concept — it anchors the whole
  connector-vs-CLI distinction and titles the linked comparison doc. Replacing every
  instance would fight that intent. Glossed → decodable → stays.

- **connector / connectors** — A Cowork/Anthropic product term, but glossed three ways
  in the same passage ("what Cowork uses," "Anthropic's servers act on your behalf,"
  the *rented hands* contrast). The plain sense of "connector" — a thing that connects
  Claude to Google — also roughly matches. Stays.

- **MCP** — The one term with no gloss and no ordinary meaning; you must know the field.
  But it appears only as link text to a doc whose whole purpose is to explain the
  three-way "Connector vs. MCP vs. CLI" distinction, so the link itself is the gloss.
  Expanding it inline to "Model Context Protocol" would add nothing (equally opaque),
  and introducing the concept in the body is content the author deliberately deferred.
  Stays as a signpost.

- **OAuth consent screen, OAuth credentials, APIs, JSON, "Testing" / "In production" /
  "Internal", "Desktop app"** — All field jargon, but each is a literal label the reader
  clicks or types in Google's console (or a file they download). Replacing them with
  plain descriptions would make the step-by-step instructions unfollowable. Kept as-is.

- **"rented hands" / "your own hands"** — Explicit, signposted analogies (italicized,
  each followed immediately by the plain mechanism: "Anthropic's servers act on your
  behalf, with capped abilities" and "it runs on your machine with full read-and-write
  access"). The metaphor decorates a mechanism that is already stated plainly, rather
  than standing in for it — which is the acceptable use of analogy. Author's voice. Kept.

- **Power-ups** (title) — A signposted game metaphor for optional add-ons; the ordinary
  sense (optional boosts you pick up) decodes correctly. Author's voice. Kept.

- **skills** ("Claude can use it inside skills") — A Claude Code feature-name used
  lightly. Left unchanged: it is established earlier in the series, and re-glossing a
  cross-referenced term here risks flattening more than it clarifies.

- **computer-use agents** ("exactly what computer-use agents are good at") — Kept,
  because it is glossed in the same sentence ("navigating web pages"). Only the bare
  noun form was changed above.

- **scriptable, read-and-write access, fetch, drop the JSON** — Mild technical usage
  whose ordinary meaning carries the content for a smart reader. Kept.
