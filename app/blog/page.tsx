import { client, POSTS_QUERY } from '@/lib/sanity';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let posts: any[] = [];
  let fetchError = '';
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (e: any) {
    fetchError = e?.message || String(e);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog - Sanity Test</h1>
      {fetchError && <p style={{ color: 'red' }}>Error: {fetchError}</p>}
      <p>Posts found: {posts.length}</p>
      <ul>
        {posts.map((p) => (
          <li key={p._id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
