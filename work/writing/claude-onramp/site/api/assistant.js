// POST /api/assistant — the sidebar assistant.
// Streams the Anthropic Messages API response (raw SSE) back to the browser.
// System prompt = assistant/system-prompt.md with the full guide injected
// (generated into _guide.js by build.py). Web search is domain-allowlisted
// per assistant/spec.md.
import { SYSTEM_PROMPT } from './_guide.js';

const ALLOWED_DOMAINS = [
  'anthropic.com', // includes docs./support. subdomains
  'claude.com',
  'code.claude.com',
  'docs.github.com',
  'super.engineering',
  'gogcli.sh',
  'wisprflow.ai',
];

// Best-effort rate limit (per warm lambda instance): enough to stop a casual
// loop from draining credits, not a security boundary.
const hits = new Map();
const LIMIT = 30; // requests per IP per hour
const WINDOW = 60 * 60 * 1000;

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(503).json({
      error: 'Assistant not configured yet: ANTHROPIC_API_KEY is not set on this deployment.',
    });
  }
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests — try again in a bit.' });
  }

  const { messages, page } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 40) {
    return res.status(400).json({ error: 'messages must be a non-empty array (max 40)' });
  }

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-8',
      max_tokens: 1500,
      stream: true,
      system:
        SYSTEM_PROMPT +
        (page ? `\n\nThe user is currently reading: ${page}` : ''),
      messages,
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search',
          allowed_domains: ALLOWED_DOMAINS,
          max_uses: 3,
        },
      ],
    }),
  });

  if (!upstream.ok) {
    const detail = await upstream.text().catch(() => '');
    console.error('[assistant] upstream error', upstream.status, detail.slice(0, 500));
    return res.status(502).json({ error: 'The model call failed — try again.' });
  }

  res.writeHead(200, {
    'content-type': 'text/event-stream',
    'cache-control': 'no-cache',
    connection: 'keep-alive',
  });
  const reader = upstream.body.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  } finally {
    res.end();
  }
}
