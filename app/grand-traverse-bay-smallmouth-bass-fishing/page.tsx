import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';

const faqs = [
  {
    question: "What makes Grand Traverse Bay special for fishing?",
    answer: "Grand Traverse Bay is one of the clearest and deepest bays in the Great Lakes region. Its cold, clean waters and abundant rocky structure create ideal habitat for smallmouth bass, resulting in healthy, aggressive fish that provide exceptional sport fishing opportunities."
  },
  {
    question: "How deep is Grand Traverse Bay?",
    answer: "Grand Traverse Bay reaches depths of over 600 feet in some areas. The East Arm averages around 100 feet deep while the West Arm is shallower. These varying depths create diverse structure and temperature zones that support excellent smallmouth bass populations throughout the season."
  }
];

export const metadata: Metadata = {
  title: 'Grand Traverse Bay Smallmouth Bass Fishing | Traverse City, MI',
  description: 'Grand Traverse Bay smallmouth bass fishing with a Traverse City guide. Learn why the bay is one of Michigan\'s best destinations for smallmouth bass.',
};

export default function GrandTraverseBaySmallmouthPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/05_sunset_bay.jpg"
            alt="Grand Traverse Bay at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Grand Traverse Bay Smallmouth Bass Fishing
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            One of Northern Michigan&apos;s most respected smallmouth bass fisheries
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Grand Traverse Bay is one of Northern Michigan&apos;s most respected smallmouth bass fisheries. Known for its clear water and scenic shoreline, the bay offers consistent opportunities for anglers targeting strong, healthy bass.
            </p>
            <p className="text-gray-600 mb-8">
              Butch fishes Grand Traverse Bay exclusively for smallmouth bass, focusing on structure, seasonal movements, and proven local patterns.
            </p>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Why Grand Traverse Bay Is Ideal for Smallmouth Bass
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Deep, cold water supports strong fish year-round</li>
              <li>Rocky shorelines and underwater structure create perfect habitat</li>
              <li>Clear water leads to aggressive strikes and visual fishing opportunities</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              A Local Smallmouth Specialist
            </h2>
            <p className="text-gray-600 mb-4">
              Unlike general fishing charters, Butch does not offer salmon, lake trout, or mixed-species trips. His focus is strictly on smallmouth bass fishing in Grand Traverse Bay and nearby waters.
            </p>
            <p className="text-gray-600 mb-4">
              This specialization allows for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Better timing</li>
              <li>More precise techniques</li>
              <li>A better overall experience for anglers targeting bass</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Who This Trip Is For
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Anglers traveling to Traverse City</li>
              <li>Bass anglers looking for a local expert</li>
              <li>Families wanting a hands-on fishing experience</li>
              <li>Anyone interested in smallmouth bass specifically</li>
            </ul>
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
                href="/traverse-city-smallmouth-bass-fishing-guide"
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Meet Your Traverse City Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Grand Traverse Bay Fishing FAQs" />

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Fish Grand Traverse Bay</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience world-class smallmouth bass fishing on Grand Traverse Bay?
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
