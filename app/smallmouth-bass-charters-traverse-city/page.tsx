import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';

const faqs = [
  {
    question: "Why is Grand Traverse Bay good for smallmouth bass?",
    answer: "Grand Traverse Bay offers ideal conditions for smallmouth bass: cold, clear water, abundant rocky structure and drop-offs, and healthy forage populations. These factors produce aggressive, hard-fighting bass that grow to impressive sizes."
  },
  {
    question: "Is it catch and release only?",
    answer: "Yes, all smallmouth bass caught on our charters are released. This practice is required by local regulations and helps maintain the exceptional quality of the Grand Traverse Bay fishery for future anglers."
  },
  {
    question: "How big are the smallmouth bass here?",
    answer: "Grand Traverse Bay regularly produces smallmouth bass in the 2-4 pound range, with fish over 5 pounds caught each season. The clear, cold waters of the bay support healthy fish that fight above their weight class."
  }
];

export const metadata: Metadata = {
  title: 'Smallmouth Bass Fishing Charters in Traverse City, MI | Grand Traverse Bay',
  description: 'Smallmouth bass fishing charters in Traverse City, MI. Fish Grand Traverse Bay with a local guide who specializes exclusively in smallmouth bass. Book your trip today.',
};

export default function SmallmouthBassChartersPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/header-bg.jpg"
            alt="Smallmouth bass fishing on Grand Traverse Bay"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Smallmouth Bass Fishing Charters in Traverse City, MI
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dedicated smallmouth bass charters on Grand Traverse Bay
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Traverse City is widely regarded as one of Michigan&apos;s premier destinations for smallmouth bass fishing, and Grand Traverse Bay consistently produces some of the hardest-fighting bass in the region. Butch specializes exclusively in smallmouth bass fishing charters, offering focused, hands-on trips for anglers who want to experience this fishery the right way.
            </p>
            <p className="text-gray-600 mb-8">
              This is not a &quot;catch-everything&quot; charter. Every trip is built around targeting smallmouth bass in the clear waters of Grand Traverse Bay and surrounding areas.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Why Smallmouth Bass in Grand Traverse Bay
            </h2>
            <p className="text-gray-600 mb-4">
              Grand Traverse Bay provides ideal conditions for smallmouth bass:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Cold, clear water</li>
              <li>Rocky structure and drop-offs</li>
              <li>Healthy forage and strong fish populations</li>
            </ul>
            <p className="text-gray-600 mb-8">
              These conditions create aggressive fish that fight hard and grow large, making Traverse City a destination for serious smallmouth anglers.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              A Specialized Smallmouth Charter
            </h2>
            <p className="text-gray-600 mb-4">
              Butch focuses only on smallmouth bass fishing. That means:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>No mixed-species trips</li>
              <li>No salmon or lake trout trolling</li>
              <li>No divided attention</li>
            </ul>
            <p className="text-gray-600 mb-8">
              Every trip is planned around seasonal smallmouth patterns, water conditions, and angler experience level.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              What to Expect on Your Trip
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Fully guided smallmouth bass charter</li>
              <li>Quality rods, reels, and tackle provided</li>
              <li>Instruction for beginners and experienced anglers</li>
              <li>A relaxed, safety-first experience on Grand Traverse Bay</li>
            </ul>
            <p className="text-gray-600 mb-8">
              Trips are ideal for individuals, families, and small groups.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              When to Book
            </h2>
            <p className="text-gray-600 mb-8">
              Smallmouth bass fishing in Traverse City is best from late spring through early fall, when water temperatures and fish behavior are ideal.
            </p>
          </div>

          {/* Cross-links to other money pages */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Explore More</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/grand-traverse-bay-smallmouth-bass-fishing"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Grand Traverse Bay Smallmouth Fishing →
              </Link>
              <Link
                href="/traverse-city-smallmouth-bass-fishing-guide"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Meet Your Traverse City Guide →
              </Link>
            </div>
          </div>

          {/* Learn More - Links to informational pages */}
          <div className="mt-8 p-6 bg-navy-50 rounded-xl border border-navy-100">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/grand-traverse-bay-fishing-species"
                  className="text-cyan-600 hover:text-cyan-700"
                >
                  Fishing in Grand Traverse Bay: Species Overview →
                </Link>
              </li>
              <li>
                <Link
                  href="/why-smallmouth-only"
                  className="text-cyan-600 hover:text-cyan-700"
                >
                  Why We Specialize in Smallmouth Bass Only →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Smallmouth Bass Fishing FAQs" />

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Book Your Smallmouth Bass Fishing Charter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you&apos;re looking for a dedicated smallmouth bass fishing charter in Traverse City, contact us to plan your trip on Grand Traverse Bay.
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
