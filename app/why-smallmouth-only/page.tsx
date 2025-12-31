import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Why We Specialize in Smallmouth Bass Fishing | Traverse City, MI',
  description: 'Discover why we specialize exclusively in smallmouth bass fishing in Traverse City and Grand Traverse Bay. Focused charters, better results.',
};

export default function WhySmallmouthOnlyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/04_kid_huge_bass.jpg"
            alt="Smallmouth bass catch"
            fill
            className="object-cover"
            priority
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
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Trips tailored specifically to bass behavior</li>
              <li>Gear selected for smallmouth fishing</li>
              <li>No compromise in strategy or focus</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-navy-900 mt-12 mb-6">
              Clear Expectations
            </h2>

            {/* Important disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <p className="text-gray-700 mb-0">
                If you&apos;re looking for salmon or lake trout fishing, there are many great charters in Traverse City that offer those trips. <strong>Butch specializes exclusively in smallmouth bass charters and does not offer salmon or lake trout charters.</strong>
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              Butch&apos;s charters are designed for anglers who want to focus on smallmouth bass fishing only.
            </p>
          </div>

          {/* Link back to main charter page */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Ready to Fish?</h3>
            <p className="text-gray-600 mb-4">
              Book a dedicated smallmouth bass charter on Grand Traverse Bay.
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
