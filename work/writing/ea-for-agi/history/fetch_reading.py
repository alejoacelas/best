#!/usr/bin/env python3
"""Download an online reading as markdown with frontmatter.

Usage:
    python3 fetch_reading.py <url> <outfile.md> [--note "why relevant"] [--topic "cluster"]

Handles:
- EA Forum / LessWrong / Alignment Forum posts via their GraphQL API (clean markdown)
- everything else via curl + html2text on the main content block
- PDFs: saved as-is next to the .md stub

Requires the venv at $EA_FOR_AGI_VENV (html2text, beautifulsoup4); run with that
venv's python.
"""
import json
import re
import subprocess
import sys
from datetime import date

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

FORUM_HOSTS = {
    "forum.effectivealtruism.org": "https://forum.effectivealtruism.org/graphql",
    "www.lesswrong.com": "https://www.lesswrong.com/graphql",
    "lesswrong.com": "https://www.lesswrong.com/graphql",
    "www.alignmentforum.org": "https://www.alignmentforum.org/graphql",
    "alignmentforum.org": "https://www.alignmentforum.org/graphql",
}


def curl(url, *extra):
    return subprocess.run(
        ["curl", "-sL", "--max-time", "60", "-A", UA, url, *extra],
        capture_output=True,
    ).stdout


def frontmatter(title, author, pub_date, url, note, topic, via):
    lines = ["---"]
    lines.append(f'title: "{(title or "").replace(chr(34), chr(39))}"')
    if author:
        lines.append(f'author: "{author.replace(chr(34), chr(39))}"')
    if pub_date:
        lines.append(f"date: {pub_date}")
    lines.append(f"url: {url}")
    lines.append(f"fetched: {date.today().isoformat()}")
    lines.append(f"via: {via}")
    if topic:
        lines.append(f'topic: "{topic}"')
    if note:
        lines.append(f'note: "{note.replace(chr(34), chr(39))}"')
    lines.append("---")
    return "\n".join(lines) + "\n\n"


def fetch_forum(url, host):
    m = re.search(r"/posts/([A-Za-z0-9]+)", url)
    if not m:
        return None
    query = {
        "query": '{ post(input: {selector: {_id: "%s"}}) { result { title postedAt user { displayName } contents { markdown } } } }'
        % m.group(1)
    }
    raw = subprocess.run(
        ["curl", "-s", "--max-time", "60", FORUM_HOSTS[host],
         "-H", "Content-Type: application/json", "-d", json.dumps(query)],
        capture_output=True,
    ).stdout
    try:
        p = json.loads(raw)["data"]["post"]["result"]
    except (KeyError, TypeError, json.JSONDecodeError):
        return None
    if not p or not (p.get("contents") or {}).get("markdown"):
        return None
    return {
        "title": p["title"],
        "author": (p.get("user") or {}).get("displayName"),
        "date": (p.get("postedAt") or "")[:10] or None,
        "body": p["contents"]["markdown"],
        "via": "forum-graphql",
    }


def fetch_generic(url):
    import html2text
    from bs4 import BeautifulSoup

    html = curl(url).decode("utf-8", "replace")
    if not html.strip():
        return None
    soup = BeautifulSoup(html, "lxml")
    for tag in soup(["script", "style", "nav", "footer", "header", "aside", "form"]):
        tag.decompose()
    main = soup.find("article") or soup.find("main") or soup.body or soup
    title = None
    og = soup.find("meta", property="og:title")
    if og and og.get("content"):
        title = og["content"]
    elif soup.title:
        title = soup.title.get_text(strip=True)
    author = None
    for sel in [("meta", {"name": "author"}), ("meta", {"property": "article:author"})]:
        t = soup.find(*sel[:1], attrs=sel[1])
        if t and t.get("content"):
            author = t["content"]
            break
    pub = None
    t = soup.find("meta", property="article:published_time")
    if t and t.get("content"):
        pub = t["content"][:10]
    h = html2text.HTML2Text()
    h.ignore_images = True
    h.body_width = 0
    body = h.handle(str(main))
    if len(body.strip()) < 500:
        return None
    return {"title": title, "author": author, "date": pub, "body": body, "via": "html2text"}


def main():
    url, outfile = sys.argv[1], sys.argv[2]
    note = topic = None
    args = sys.argv[3:]
    while args:
        flag = args.pop(0)
        if flag == "--note":
            note = args.pop(0)
        elif flag == "--topic":
            topic = args.pop(0)

    host = re.sub(r"^https?://", "", url).split("/")[0]

    head = subprocess.run(
        ["curl", "-sIL", "--max-time", "30", "-A", UA, url],
        capture_output=True,
    ).stdout.decode("utf-8", "replace").lower()
    if "content-type: application/pdf" in head:
        pdf_path = re.sub(r"\.md$", ".pdf", outfile)
        open(pdf_path, "wb").write(curl(url))
        open(outfile, "w").write(
            frontmatter(url.rsplit("/", 1)[-1], None, None, url, note, topic, "pdf")
            + f"PDF saved at {pdf_path}\n"
        )
        print(f"pdf: {pdf_path}")
        return

    result = fetch_forum(url, host) if host in FORUM_HOSTS else None
    if result is None:
        result = fetch_generic(url)
    if result is None:
        print(f"FAILED: {url}", file=sys.stderr)
        sys.exit(1)

    open(outfile, "w").write(
        frontmatter(result["title"], result["author"], result["date"], url, note, topic, result["via"])
        + result["body"]
    )
    print(f"ok ({result['via']}, {len(result['body'])} chars): {outfile}")


if __name__ == "__main__":
    main()
