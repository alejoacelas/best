#!/usr/bin/env python3
"""Print the feedback queue (spec: assistant/spec.md → 'Feedback loop').

Each event is one JSON blob under feedback/ in the project's private Blob
store. Needs BLOB_READ_WRITE_TOKEN — get it with:
  cd site && vercel env pull .env.blob && BLOB_READ_WRITE_TOKEN=$(grep BLOB_ .env.blob | cut -d'"' -f2) python3 read-feedback.py && rm .env.blob
"""
import json
import os
import sys
import urllib.request

token = os.environ.get("BLOB_READ_WRITE_TOKEN")
if not token:
    sys.exit("BLOB_READ_WRITE_TOKEN not set — see this file's docstring.")

def get(url):
    req = urllib.request.Request(url, headers={"authorization": f"Bearer {token}"})
    return json.load(urllib.request.urlopen(req))

listing = get("https://blob.vercel-storage.com/?prefix=feedback/")
blobs = sorted(listing["blobs"], key=lambda b: b["pathname"])
for b in blobs:
    try:
        e = get(b["url"] if "url" in b else b["downloadUrl"])
        print(f"{e['timestamp']}  [{e['kind']}]  {e['step']}  ({e['os']})")
        if e.get("note"):
            print(f"    {e['note']}")
    except Exception as err:
        print(f"{b['pathname']}: unreadable ({err})")
print(f"\n{len(blobs)} events")
