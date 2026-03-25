import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Grand Traverse Bay Fish Species - What You Can Catch',
  description:
    'Explore the fish species of Grand Traverse Bay: smallmouth bass, lake trout, salmon, steelhead, and more. Learn why we target smallmouth exclusively.',
  alternates: {
    canonical: '/grand-traverse-bay-fishing-species',
  },
};

export default function GrandTraverseBaySpeciesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/header-bg.jpg"
            alt="Grand Traverse Bay"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Fishing in Grand Traverse Bay: Species Overview
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A look at the diverse fishery of Grand Traverse Bay
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Grand Traverse Bay is home to a wide variety of fish species, making it a popular destination for anglers throughout the year. The bay&apos;s cold, clear water — fed by Lake Michigan and surrounded by the hills of northern Michigan — creates diverse habitat that supports multiple fisheries across different seasons.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Common Species in Grand Traverse Bay
            </h2>
            <p className="text-gray-600 mb-4">
              The bay&apos;s combination of depth, temperature, and water clarity supports a broad range of cold-water and warm-water species. Here is a general overview of what anglers target in these waters:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-3">
              <li><strong>Smallmouth bass</strong> – Grand Traverse Bay is widely regarded as one of the top smallmouth bass fisheries in Michigan. The rocky structure, clear water, and abundant forage produce aggressive, hard-fighting fish in the 2–5 pound range. Smallmouth are available throughout the season, from the spring spawn through fall.</li>
              <li><strong>Salmon</strong> (seasonal) – Chinook and Coho salmon are present in the bay, particularly during their seasonal runs. These fish attract dedicated charter operations that specialize in trolling and downrigger techniques.</li>
              <li><strong>Lake trout</strong> – A cold-water species that inhabits the deeper sections of the bay. Lake trout fishing typically requires specialized deep-water equipment and technique.</li>
              <li><strong>Steelhead</strong> – Seasonal runs bring steelhead into the area, particularly in tributaries connected to the bay.</li>
              <li><strong>Whitefish</strong> – Another cold-water species found in the deeper portions of the bay, often targeted in winter and early spring.</li>
            </ul>

            {/* Important disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-navy-900 mb-2">Our Focus</h3>
              <p className="text-gray-700 mb-0">
                While Grand Traverse Bay supports multiple fisheries, <strong>Butch specializes exclusively in smallmouth bass fishing charters and does not offer salmon or lake trout charters.</strong> This page is intended to provide general information about the bay&apos;s fishery — not to advertise mixed-species trips.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Why Specialization Matters
            </h2>
            <p className="text-gray-600 mb-4">
              Traverse City has no shortage of charter options. Many offer a broad menu of species and techniques. What sets a specialized charter apart is depth of knowledge — knowing exactly where the fish are holding, how they&apos;re behaving at a given time of year, and which techniques produce results under current conditions.
            </p>
            <p className="text-gray-600 mb-4">
              For smallmouth bass specifically, that knowledge includes understanding seasonal movement patterns on Grand Traverse Bay, the rocky structure and drop-offs that hold fish, water temperature influences on feeding behavior, and the light tackle techniques that make the most of what smallmouth have to offer as a sport fish.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>More consistent results from a guide who focuses on one species year-round</li>
              <li>Tackle and techniques dialed in specifically for smallmouth bass</li>
              <li>Seasonal knowledge of when and where fish are most active</li>
              <li>A refined experience designed around one target fish</li>
            </ul>
          </div>

          {/* Link back to main charter page */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Interested in Smallmouth Bass?</h3>
            <p className="text-gray-600 mb-4">
              Learn more about our dedicated smallmouth bass charters on Grand Traverse Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/smallmouth-bass-charters-traverse-city"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View Smallmouth Bass Charters →
              </Link>
              <Link
                href="/why-smallmouth-only"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Why We Specialize in Smallmouth →
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
