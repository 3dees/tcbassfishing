import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fishing in Grand Traverse Bay | Species Overview',
  description: 'Learn about the fish species found in Grand Traverse Bay, including smallmouth bass. Informational overview of the bay\'s diverse fishery.',
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
              Grand Traverse Bay is home to a wide variety of fish species, making it a popular destination for anglers throughout the year.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Common Species in Grand Traverse Bay
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li><strong>Smallmouth bass</strong> – Known for aggressive strikes and hard fights</li>
              <li><strong>Salmon</strong> (seasonal) – Chinook and Coho runs</li>
              <li><strong>Lake trout</strong> – Deep water cold-water species</li>
              <li><strong>Other cold-water species</strong> – Including whitefish and steelhead</li>
            </ul>

            {/* Important disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-navy-900 mb-2">Our Focus</h3>
              <p className="text-gray-700 mb-0">
                While Grand Traverse Bay supports multiple fisheries, <strong>Butch specializes exclusively in smallmouth bass fishing charters and does not offer salmon or lake trout charters.</strong>
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              This page is intended to provide general information about the bay—not to advertise mixed-species trips.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Why Specialization Matters
            </h2>
            <p className="text-gray-600 mb-4">
              By focusing on one species, anglers benefit from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Better techniques</li>
              <li>Better timing</li>
              <li>A more refined fishing experience</li>
            </ul>
          </div>

          {/* Link back to main charter page */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Interested in Smallmouth Bass?</h3>
            <p className="text-gray-600 mb-4">
              Learn more about our dedicated smallmouth bass charters on Grand Traverse Bay.
            </p>
            <Link
              href="/smallmouth-bass-charters-traverse-city"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              View Smallmouth Bass Charters →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
