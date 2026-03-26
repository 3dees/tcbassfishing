import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import { client, POST_BY_SLUG_QUERY, urlFor, BlogPost } from '@/lib/sanity';
import { PortableText } from '@/components/PortableText';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: BlogPost | null = await client.fetch(POST_BY_SLUG_QUERY, { slug }, { perspective: 'published' });
  if (!post) return {};

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const image = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : '/images/hero/header-bg.jpg';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | TC Bass Destination Charters`,
      description,
      images: [image],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: BlogPost | null = await client.fetch(POST_BY_SLUG_QUERY, { slug }, { perspective: 'published' });

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(1600).height(800).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <Image
              src="/images/hero/header-bg.jpg"
              alt="Grand Traverse Bay fishing"
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-3xl pb-10 text-white">
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.categories.map((cat) => (
                <span key={cat} className="bg-cyan-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
          )}

          {/* Body */}
          {post.body && post.body.length > 0 && (
            <div className="prose-content">
              <PortableText value={post.body} />
            </div>
          )}

          {/* Back + CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
            <Link
              href="/trips"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/30 text-sm"
            >
              Book a Trip with Captain Butch
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
