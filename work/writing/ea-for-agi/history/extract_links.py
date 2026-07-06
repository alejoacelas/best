#!/usr/bin/env python3
"""Extract outbound links from every downloaded reading, for the stage-2 pass.

Usage: python3 extract_links.py <readings_dir> > links.json

Emits JSON: [{url, count, sources: [reading paths citing it]}] sorted by count,
after normalizing URLs and dropping links to readings we already have, plus
obvious non-reading domains (images, social, video, shops, login pages).
"""
import json
import os
import re
import sys
from collections import defaultdict
from urllib.parse import urlparse, urlunparse

SKIP_DOMAINS = {
    "twitter.com", "x.com", "facebook.com", "instagram.com", "linkedin.com",
    "youtube.com", "youtu.be", "vimeo.com", "amazon.com", "amazon.co.uk",
    "google.com", "docs.google.com", "drive.google.com", "mailto",
    "en.wikipedia.org", "wikipedia.org", "reddit.com", "news.ycombinator.com",
    "github.com", "discord.gg", "discord.com", "t.me", "eventbrite.com",
    "airtable.com", "typeform.com", "calendly.com", "spotify.com",
    "apple.com", "podcasts.apple.com", "swapcard.com", "luma.com", "lu.ma",
}
SKIP_EXT = (".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".mp3", ".mp4", ".zip", ".ico")


def normalize(url):
    url = url.strip().rstrip(").,;:!?'\"")
    p = urlparse(url)
    if p.scheme not in ("http", "https"):
        return None
    host = p.netloc.lower().removeprefix("www.")
    path = p.path.rstrip("/")
    return urlunparse(("https", host, path, "", "", ""))


def main():
    root = sys.argv[1]
    have_urls = set()
    links = defaultdict(set)
    for dirpath, _, files in os.walk(root):
        for f in files:
            if not f.endswith(".md"):
                continue
            path = os.path.join(dirpath, f)
            text = open(path, encoding="utf-8", errors="replace").read()
            m = re.search(r"^url: (\S+)$", text, re.M)
            if m:
                n = normalize(m.group(1))
                if n:
                    have_urls.add(n)
            for u in re.findall(r"https?://[^\s\)\]\"'<>]+", text):
                n = normalize(u)
                if not n:
                    continue
                host = urlparse(n).netloc
                if host in SKIP_DOMAINS or any(host.endswith("." + d) for d in SKIP_DOMAINS):
                    continue
                if n.lower().endswith(SKIP_EXT):
                    continue
                if urlparse(n).path in ("", "/"):
                    continue  # bare homepages
                links[n].add(os.path.relpath(path, root))
    out = [
        {"url": u, "count": len(srcs), "sources": sorted(srcs)[:5]}
        for u, srcs in links.items()
        if u not in have_urls
    ]
    out.sort(key=lambda r: -r["count"])
    json.dump(out, sys.stdout, indent=1)


if __name__ == "__main__":
    main()
