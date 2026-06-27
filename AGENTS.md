# best

My life-optimization workspace. Each top-level folder is its own git repo, mounted
here as a submodule — so this repo is mostly pointers plus shared instructions.

## Submodules
Work inside the submodule, commit and push it there first, then commit the updated
pointer here. (A pre-push hook blocks pushing a pointer that isn't on its remote yet.)

| path | repo | visibility |
|------|------|------------|
| `art` | `alejoacelas/art` | public |
| `body` | `alejoacelas/body` | public |
| `knowledge` | `alejoacelas/knowledge` | public |
| `meals` | `alejoacelas/meals` | public |
| `principles` | `alejoacelas/principles` | public |
| `travel` | `alejoacelas/travel` | public |
| `writing` | `alejoacelas/writing` | public |
| `tools` | `alejoacelas/tools` | private |
| `mind` | `alejoacelas/mind` | private |
| `friends` | `alejoacelas/friends` | private |

Nested: `tools` → `calls`, `voice` (public); `travel` → `visa` (private).

## Committing
Global rules apply (`~/.claude/CLAUDE.md`): commit found work after checking nothing
private goes in; keep credentials and confided content out of public repos; for nested
repos, prefer submodule pointers over copied files.
