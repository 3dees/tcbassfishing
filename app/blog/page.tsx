import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { client, POSTS_QUERY, urlFor, BlogPost } from '@/lib/sanity';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(POSTS_QUERY);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog - Full Import Test</h1>
      <p>Posts: {posts.length}</p>
      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h2>{post.title}</h2>
          <p>Slug: {post.slug.current}</p>
          <p>Has image: {post.mainImage ? 'yes' : 'no'}</p>
          {post.mainImage && (
            <p>Image URL: {urlFor(post.mainImage).width(600).height(340).url()}</p>
          )}
        </div>
      ))}
    </div>
  );
}
