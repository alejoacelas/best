#!/usr/bin/env python3
"""Convert analysis/topics/*.md into Google-Doc-ready markdown tabs.

For each topic map: strip <!--ai--> markers, drop the ([local](...)) parentheticals,
and rewrite any remaining repo-relative link (../../readings/...) to the reading's
canonical URL from its frontmatter (falling back to plain text when none exists).
Writes one cleaned .md per topic into the output dir.

Usage: build_doc_tabs.py <topics_dir> <out_dir>
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def canonical_url(md_path: Path):
    try:
        head = md_path.read_text(errors="ignore")[:2000]
    except OSError:
        return None
    m = re.search(r"^url:\s*(\S+)", head, re.M)
    return m.group(1) if m else None


ITEM_START = re.compile(r"^\s*(?:[-*+]|\d+\.)\s")


def unwrap(text: str) -> str:
    """Join hard-wrapped lines within paragraphs and list items (the Docs
    markdown converter drops inline formatting that spans a line break)."""
    out = []
    for block in text.split("\n\n"):
        lines = block.split("\n")
        if any(l.startswith("#") for l in lines):
            out.append(block)
            continue
        joined = []
        for line in lines:
            if not joined or ITEM_START.match(line) or not line.strip():
                joined.append(line)
            else:
                joined[-1] = joined[-1].rstrip() + " " + line.strip()
        out.append("\n".join(joined))
    return "\n\n".join(out)


def convert(text: str, base: Path) -> str:
    text = re.sub(r"<!--/?(ai|me)-->\n?", "", text)
    text = unwrap(text)
    # drop ([local](...)) / ([local copy](...)) parentheticals
    text = re.sub(r"\s*\(\[local(?: copy)?\]\([^)]*\)\)", "", text)

    def repl(m):
        label, target = m.group(1), m.group(2)
        if target.startswith(("http://", "https://", "#", "mailto:")):
            return m.group(0)
        p = (base / target).resolve()
        if p.suffix != ".md":
            cand = p.with_suffix(p.suffix + ".md")
            p = cand if cand.exists() else p
        url = canonical_url(p) if p.exists() else None
        return f"[{label}]({url})" if url else label

    return re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", repl, text)


def main():
    topics_dir, out_dir = Path(sys.argv[1]), Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    for f in sorted(topics_dir.glob("*.md")):
        cleaned = convert(f.read_text(), f.parent)
        (out_dir / f.name).write_text(cleaned)
        leftover = re.findall(r"\]\((?!http|#|mailto)[^)]*\)", cleaned)
        print(f"{f.name}: {'OK' if not leftover else f'{len(leftover)} unresolved links'}")


if __name__ == "__main__":
    main()
