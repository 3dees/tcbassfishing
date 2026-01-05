import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';

const faqs = [
  {
    question: "How much does a fishing charter cost?",
    answer: "Our charters are priced per group (up to 2 anglers): 4-hour trips are $440, 6-hour trips are $550, and 8-hour trips are $660. All trips include quality rods, reels, tackle, snacks, and bottled water."
  },
  {
    question: "How do I get to Traverse City?",
    answer: "Traverse City is served by Cherry Capital Airport (TVC) with direct flights from several major cities. It's also accessible by car, approximately 4 hours from Detroit and 5 hours from Chicago via US-31 or US-131."
  },
  {
    question: "Where should I stay in Traverse City?",
    answer: "Traverse City offers accommodations ranging from downtown hotels to lakefront resorts and vacation rentals. The downtown area and East Bay shore provide convenient access to the boat launch locations we use."
  },
  {
    question: "What else can I do in Traverse City?",
    answer: "Beyond fishing, Traverse City is known for its wineries along the Leelanau and Old Mission peninsulas, Sleeping Bear Dunes National Lakeshore, downtown shopping and dining, and beautiful beaches along Grand Traverse Bay."
  }
];

export const metadata: Metadata = {
  title: 'Traverse City Smallmouth Bass Fishing Guide | Grand Traverse Bay',
  description: 'Hire a Traverse City smallmouth bass fishing guide with local knowledge of Grand Traverse Bay. Focused trips designed for anglers of all skill levels.',
};

export default function TraverseCityFishingGuidePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/captain-butch.jpg"
            alt="Captain Butch - Traverse City fishing guide"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Traverse City Smallmouth Bass Fishing Guide
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Local expertise on Grand Traverse Bay
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Hiring a local guide can make the difference between a slow day and an unforgettable fishing experience. As a Traverse City smallmouth bass fishing guide, Butch brings years of experience on Grand Traverse Bay and surrounding waters.
            </p>
            <p className="text-gray-600 mb-8">
              His approach is simple: focus on smallmouth bass, fish ethically, and give anglers a great day on the water.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              What Sets This Guide Apart
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Exclusive focus on smallmouth bass</li>
              <li>Deep local knowledge of Traverse City waters</li>
              <li>Patient instruction and safety-first mindset</li>
              <li>No pressure, no rushed trips</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Techniques and Approach
            </h2>
            <p className="text-gray-600 mb-4">
              Trips may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Casting to structure</li>
              <li>Working drop-offs</li>
              <li>Adjusting tactics based on conditions and season</li>
            </ul>
            <p className="text-gray-600 mb-8">
              The goal is always quality fishing, not quantity of species.
            </p>
          </div>

          {/* Cross-links to other money pages */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Explore More</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/smallmouth-bass-charters-traverse-city"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Smallmouth Bass Charters →
              </Link>
              <Link
                href="/grand-traverse-bay-smallmouth-bass-fishing"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Grand Traverse Bay Fishing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Traverse City Fishing Guide FAQs" />

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Book Your Guided Trip</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to fish with a dedicated Traverse City smallmouth bass guide?
          </p>
          <Link
            href="/trips"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
