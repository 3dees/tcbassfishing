import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

const INDEXNOW_KEY = 'd92f5f76e1bee4ab97419621ff1f1a0b';
const BASE_URL = 'https://tcbassdestinationcharters.com';
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

function verifySignature(body: string, signature: string | null): boolean {
  if (!SANITY_WEBHOOK_SECRET || !signature) return false;
  const expected = createHmac('sha256', SANITY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  return `sha1=${expected}` === signature || signature === expected;
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get('sanity-webhook-signature');

  if (SANITY_WEBHOOK_SECRET && !verifySignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let payload: { slug?: { current?: string } };
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const slug = payload?.slug?.current;
  if (!slug) {
    return NextResponse.json({ error: 'No slug found in payload' }, { status: 400 });
  }

  const url = `${BASE_URL}/blog/${slug}`;

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'tcbassdestinationcharters.com',
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: [url],
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'IndexNow ping failed', status: response.status }, { status: 502 });
  }

  return NextResponse.json({ success: true, pinged: url });
}
