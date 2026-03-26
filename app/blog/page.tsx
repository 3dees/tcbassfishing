import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { client, POSTS_QUERY, urlFor, BlogPost } from '@/lib/sanity';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  let fetchError = '';
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (e: any) {
    fetchError = e?.message || String(e);
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/header-bg.jpg"
            alt="Grand Traverse Bay fishing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Fishing Reports & Tips
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            On-the-water updates, seasonal patterns, and bass fishing advice from Captain Butch
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Stay up to date with the latest smallmouth bass fishing reports from Grand Traverse Bay. Captain Butch shares seasonal patterns, hot lures, productive structure, and conditions updates throughout the April–October season. Whether you&apos;re planning a trip or just keeping tabs on the bite, these reports give you a real-time look at what&apos;s happening on the water in Traverse City, Michigan.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Fishing reports are on the way. Check back soon for on-the-water updates and bass fishing tips from Grand Traverse Bay!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  {/* Post Image */}
                  <div className="relative h-52 overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(340).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-900 to-cyan-600 flex items-center justify-center">
                        <span className="text-white/30 text-6xl">🎣</span>
                      </div>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <div className="absolute top-3 left-3 flex gap-2">
                        {post.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="bg-cyan-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    )}

                    <span className="inline-flex items-center gap-1 text-cyan-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
            Ready to Get on the Water?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a trip with Captain Butch and experience Grand Traverse Bay&apos;s world-class
            smallmouth bass fishing firsthand.
          </p>
          <Link
            href="/trips"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/30"
          >
            View Trips & Rates
          </Link>
        </div>
      </section>
    </>
  );
}
