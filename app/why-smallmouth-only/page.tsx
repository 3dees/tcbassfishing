import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: { absolute: 'Why We Fish Smallmouth Only | Traverse City' },
  description: 'Discover why we specialize exclusively in smallmouth bass fishing in Traverse City and Grand Traverse Bay. Focused charters, better results.',
  alternates: {
    canonical: '/why-smallmouth-only',
  },
};

export default function WhySmallmouthOnlyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/header-bg.jpg"
            alt="Smallmouth bass catch"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why We Specialize in Smallmouth Bass Fishing
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Focused charters deliver better results
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Not all fishing charters are the same. Some offer a little bit of everything. Others focus on doing one thing exceptionally well.
            </p>
            <p className="text-gray-600 mb-8">
              Butch chose to specialize in smallmouth bass fishing in Traverse City and Grand Traverse Bay because it allows him to provide a better, more consistent experience for his guests.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Benefits of a Specialized Charter
            </h2>
            <p className="text-gray-600 mb-4">
              When a guide focuses on one species, every decision — where to anchor, what lures to rig, when to move — is made with that fish in mind. There&apos;s no splitting attention between salmon runs and bass structure, no switching techniques mid-day, no generic approach that works &quot;well enough&quot; for everything.
            </p>
            <p className="text-gray-600 mb-4">
              Butch knows Grand Traverse Bay&apos;s smallmouth bass habitat intimately: the rocky points they hold on in spring, the deep drop-offs they move to in summer, and the mid-depth structure that produces fish throughout the season. That local knowledge, paired with species-specific gear and techniques, translates directly into more fish for his clients.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Trips tailored specifically to bass behavior and seasonal patterns</li>
              <li>Rods, reels, and lures selected for smallmouth fishing — not a general kit</li>
              <li>No compromise in strategy or focus throughout the day</li>
              <li>Consistent results from a guide who fishes these waters year-round</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Clear Expectations
            </h2>
            <p className="text-gray-600 mb-4">
              Part of specializing means being upfront about what we offer. Booking the right charter starts with knowing what to expect — and what not to expect. Butch&apos;s trips are built around one thing: catching smallmouth bass on Grand Traverse Bay.
            </p>
            <p className="text-gray-600 mb-4">
              This focus allows him to consistently put his clients on fish and give them a high-quality experience. It also means he&apos;s not the right guide if you&apos;re looking for a mixed-species trip or a different target species.
            </p>

            {/* Important disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <p className="text-gray-700 mb-0">
                If you&apos;re looking for salmon or lake trout fishing, there are many great charters in Traverse City that offer those trips. <strong>Butch specializes exclusively in smallmouth bass charters and does not offer salmon or lake trout charters.</strong>
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              Smallmouth bass fishing on Grand Traverse Bay is world-class. The water is exceptionally clear, the fish are aggressive, and the setting — surrounded by the hills and shoreline of northern Michigan — is hard to beat. If smallmouth bass is your target, you&apos;re in the right place.
            </p>
          </div>

          {/* Link back to main charter page */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Ready to Fish?</h3>
            <p className="text-gray-600 mb-4">
              Book a dedicated smallmouth bass charter on Grand Traverse Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/smallmouth-bass-charters-traverse-city"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View Smallmouth Bass Charters →
              </Link>
              <Link
                href="/grand-traverse-bay-fishing-species"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Grand Traverse Bay Species Overview →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/trips"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              View Trips & Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
