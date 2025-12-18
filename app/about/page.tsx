import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Map, Anchor, Zap, Gauge, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Captain Butch Derickson',
  description: 'Meet Captain Butch Derickson, your licensed USCG fishing guide with 10+ years experience on Grand Traverse Bay. Learn about our boat and fishing expertise.',
  openGraph: {
    title: 'About Captain Butch Derickson | Traverse City Bass Destination Charters',
    description: 'Meet Captain Butch Derickson, your licensed USCG fishing guide with 10+ years experience on Grand Traverse Bay.',
    images: ['/images/hero/captain-butch.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/05_sunset_bay.jpg"
            alt="Sunset on Grand Traverse Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Captain Butch</h1>
          <p className="text-xl text-gray-200">Your Guide to Grand Traverse Bay</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Image Side */}
            <div className="lg:w-1/2 relative lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/captain-butch.jpg"
                  alt="Captain Butch holding a large smallmouth bass"
                  width={600}
                  height={600}
                  className="w-full h-[600px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 bg-navy-900/90 p-8 backdrop-blur-md text-white w-full">
                  <p className="font-serif text-3xl font-bold">Captain Butch</p>
                  <p className="text-cyan-400 text-sm uppercase tracking-wider">Licensed USCG Captain</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-gray-100 rounded-2xl hidden lg:block"></div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <div className="mb-2 text-cyan-600 font-bold uppercase tracking-widest text-sm">Meet Your Guide</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">Captain Butch Derickson</h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                After retiring as a mechanical engineer in the power industry, I turned my lifelong passion for bass fishing into Traverse City Bass Destination Charters. With over 10 years on these waters, I know every contour, ledge, and hiding spot in Grand Traverse Bay and the surrounding inland lakes.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Northwestern Michigan has earned a national reputation for exceptional smallmouth bass fishing—and I am ready to put you on the fish. Whether you&apos;re chasing numbers or hunting a trophy, your next personal best could be one cast away.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Safety First</h4>
                    <p className="text-sm text-gray-500">USCG Licensed & Fully Insured.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600">
                    <Map className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Local Expert</h4>
                    <p className="text-sm text-gray-500">Specializing in Grand Traverse Bay.</p>
                  </div>
                </div>
              </div>

              {/* Boat Specs Section */}
              <div className="bg-navy-900 text-white p-8 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <Anchor className="h-6 w-6 text-cyan-500" />
                  The Boat: 21&apos; Ranger Z521
                </h3>
                <p className="text-gray-300 mb-6">
                  Purpose-built for serious bass fishing, our Ranger Z521 gets you to the fish fast and keeps you comfortable all day.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Engine</p>
                      <p className="font-semibold">250 HP Yamaha SHO</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Speed</p>
                      <p className="font-semibold">65 Knots</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Tech</p>
                      <p className="font-semibold">Lowrance HDS Live</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Anchor className="h-5 w-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase">Capacity</p>
                      <p className="font-semibold">2 Anglers + Cpt.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Ready to Fish with Captain Butch?</h2>
          <p className="text-gray-600 mb-8">Book your trip today and experience world-class bass fishing on Grand Traverse Bay.</p>
          <Link
            href="/trips"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Book Your Trip
          </Link>
        </div>
      </section>
    </>
  );
}
