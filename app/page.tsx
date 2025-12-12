import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, MapPin, ShieldCheck, Map, Star, Phone } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476673160081-cf065607f39d?q=80&w=2070&auto=format&fit=crop"
            alt="Sunset over Grand Traverse Bay"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center items-center gap-2 text-cyan-400 font-medium tracking-widest text-sm uppercase">
            <MapPin className="h-4 w-4" />
            <span>Traverse City, Michigan</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Traverse City <br />
            <span className="text-cyan-400 italic">Bass Fishing Charters</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/30"
            >
              Book Your Trip
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm hover:bg-white/10"
            >
              View Rates
            </Link>
          </div>
        </div>

        <Link
          href="#about-preview"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-8 w-8" />
        </Link>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1520967824495-241369527016?q=80&w=2070&auto=format&fit=crop"
                  alt="Captain Butch holding a large smallmouth bass"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 bg-navy-900/90 p-8 backdrop-blur-md text-white w-full">
                  <p className="font-serif text-3xl font-bold">Captain Butch</p>
                  <p className="text-cyan-400 text-sm uppercase tracking-wider">Licensed USCG Captain</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <div className="mb-2 text-cyan-600 font-bold uppercase tracking-widest text-sm">Meet Your Guide</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">Captain Butch Derickson</h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 20 years on these waters, Captain Butch knows every contour, ledge, and hiding spot in Grand Traverse Bay. Whether you&apos;re chasing numbers or hunting a trophy, your next personal best could be one cast away.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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

              <Link
                href="/about"
                className="inline-block bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More About Captain Butch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-2">Rates & Packages</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Choose Your Adventure</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              All trips are priced per group (max 2 anglers). No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: '4-Hour Trip', price: 440, desc: 'Perfect for the morning bite or a family outing.' },
              { name: '6-Hour Trip', price: 560, desc: 'Our most popular option with more time to explore.' },
              { name: '8-Hour Trip', price: 660, desc: 'The full day experience for serious anglers.' },
            ].map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-cyan-600">${pkg.price}</span>
                  <span className="text-gray-400 ml-2 text-sm">/ per group</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">{pkg.desc}</p>
                <Link
                  href="/contact"
                  className="block w-full bg-navy-900 hover:bg-navy-800 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block text-cyan-600 hover:text-cyan-700 font-medium border-b-2 border-cyan-600 hover:border-cyan-700 transition-colors"
            >
              View Full Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Angler Stories</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500 text-xl font-bold">
              <Star className="fill-current" />
              <span>4.9/5 Rating</span>
              <span className="text-gray-400 font-normal text-base ml-2">(33+ Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Adam B.', text: "Highly Recommend Butch after a great day on the water. Despite tougher conditions he went above and beyond to help me catch my new PB smallmouth." },
              { name: 'Shannon S.', text: "Butch is a great guide. We caught fish when other people around us didn't. Very knowledgeable and helpful. My daughter and I had a great time." },
              { name: 'Jonathan J.', text: "Cpt Butch is one of the top charters I've ever went on...and I go all over the place! He didn't have us on a time limit." },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">&quot;{t.text}&quot;</p>
                <p className="font-bold text-navy-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Cast Off?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Dates fill up fast, especially during the spring spawn (May/June). Reach out today to secure your spot on the boat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Book Your Trip
            </Link>
            <a
              href="tel:231-883-2200"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              <Phone className="h-5 w-5" />
              (231) 883-2200
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
