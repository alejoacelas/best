// POST /api/feedback — the stuck-module queue (assistant/spec.md).
// Accepts {step, os, note, kind} and stores one timestamped JSON blob per
// event in Vercel Blob (append-free, so no races). Without a Blob store it
// falls back to console.log, readable in the deployment's runtime logs.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const { step, os, note, kind } = req.body || {};
  const event = {
    kind: String(kind || 'didnt-work').slice(0, 40),
    step: String(step || '').slice(0, 200),
    os: String(os || '').slice(0, 80),
    note: String(note || '').slice(0, 2000),
    timestamp: new Date().toISOString(),
  };

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (token) {
    const name = `feedback/${event.timestamp.replace(/[:.]/g, '-')}.json`;
    const put = await fetch(`https://blob.vercel-storage.com/${name}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'x-vercel-blob-access': 'private',
        'x-content-type': 'application/json',
        'x-add-random-suffix': '1',
      },
      body: JSON.stringify(event),
    });
    if (!put.ok) {
      console.error('[feedback] blob write failed', put.status, event);
      return res.status(500).json({ error: 'could not store feedback' });
    }
  } else {
    console.log('[feedback]', JSON.stringify(event));
  }
  return res.status(204).end();
}
