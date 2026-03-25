import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'Fishing Photos | Grand Traverse Bay Charters' },
  description:
    'Real catches from real clients. Browse photos from our smallmouth bass charters on Grand Traverse Bay with Captain Butch Derickson.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Fishing Photos | Grand Traverse Bay Charters',
    description:
      'Real catches from real clients on Grand Traverse Bay with Captain Butch.',
    images: ['/images/hero/collage_hero.jpg'],
  },
};

const images = [
  { id: '1', url: '/images/gallery/01_captain_kid_fish.jpg', alt: 'Captain Butch with young angler holding smallmouth bass on Grand Traverse Bay', caption: 'Young Angler Success' },
  { id: '2', url: '/images/gallery/02_couple_michigan.jpg', alt: 'Couple on a smallmouth bass fishing charter in Traverse City Michigan', caption: 'Michigan Memories' },
  { id: '3', url: '/images/gallery/03_woman_catch_calmwater.jpg', alt: 'Woman holding smallmouth bass caught on Grand Traverse Bay charter', caption: 'Calm Water Catch' },
  { id: '4', url: '/images/gallery/04_cmu_angler.jpg', alt: 'CMU student with smallmouth bass caught on Grand Traverse Bay', caption: 'Fire Up The Grill!' },
  { id: '5', url: '/images/gallery/05_customer_rod_lowrance.jpg', alt: 'Angler fishing with Lowrance electronics on Grand Traverse Bay bass charter', caption: 'Dialed In' },
  { id: '6', url: '/images/gallery/06_woman_bass.jpg', alt: 'Woman holding smallmouth bass on a Traverse City fishing charter', caption: 'Personal Best' },
  { id: '7', url: '/images/gallery/07_captain_fullboat_sky.jpg', alt: 'Captain Butch Derickson on the Ranger Z521 bass boat on Grand Traverse Bay', caption: 'Perfect Day on the Bay' },
  { id: '8', url: '/images/gallery/08_three_boys_bigbass.jpg', alt: 'Three young anglers with trophy smallmouth bass on Grand Traverse Bay', caption: 'Triple Threat' },
  { id: '9', url: '/images/gallery/09_teen_dad_catch.jpg', alt: 'Father and son with smallmouth bass on a Traverse City charter trip', caption: 'Father & Son Trip' },
  { id: '10', url: '/images/gallery/10_teen_bass_yamaha.jpg', alt: 'Teen angler with smallmouth bass next to Yamaha outboard on Grand Traverse Bay', caption: 'Next Generation Angler' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/05_sunset_bay.jpg"
            alt="Sunset over Grand Traverse Bay after a bass fishing charter"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-200">Real Catches, Real Memories</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">Fishing Memories on Grand Traverse Bay</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Every trip with Captain Butch is an opportunity to land a trophy smallmouth bass on one of Michigan&apos;s most scenic waterways. Grand Traverse Bay produces hard-fighting fish in crystal-clear water — the kind of catches worth photographing.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our guests range from first-time anglers trying bass fishing for the first time to experienced fishermen chasing a personal best. Families, couples, father-and-son duos, and solo anglers all find their way onto the boat — and most leave with a photo they&apos;re proud of.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The images below are real catches from real clients. No staged photos — just honest fishing results from a day on the bay with a dedicated smallmouth specialist.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Grand Traverse Bay smallmouth bass are known for their size and fight. The clear, cold water and rocky structure of both the East and West Arms hold healthy populations of fish throughout the season — April through October. Whether you&apos;re visiting Traverse City for the weekend or making a dedicated fishing trip, the bite on the bay gives you a real shot at double-digit fish counts and bass pushing 20 inches. Every photo in this gallery represents a day that was worth the trip.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center justify-center gap-2">
              <Camera className="h-4 w-4" /> The Catch
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Hall of Fame</h2>
            <p className="mt-4 text-gray-400">Real clients, real memories on Grand Traverse Bay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative group rounded-xl bg-gray-800 overflow-hidden"
              >
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <p className="text-white font-medium text-center">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories From the Water */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">Who Fishes with Captain Butch</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            One of the best parts of running charters on Grand Traverse Bay is the variety of people who step onto the boat. Families visiting Traverse City on vacation often book a half-day trip as the highlight of their week. Fathers and sons, mothers and daughters, grandparents and grandkids — the bay has a way of creating memories that last well beyond the trip itself. Experienced bass anglers travel from across the Midwest to test their skills against Grand Traverse Bay smallmouth, drawn by the clear water and the quality of the fishery. Corporate groups and friends use a charter as a way to unwind, compete, and share a few hours away from screens and schedules. First-timers are always welcome, too. Captain Butch provides all the instruction needed, from casting technique to setting the hook, so even someone who has never held a rod can have a successful day on the water.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">Seasonal Highlights on the Bay</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            The photos in this gallery span the full season, April through October, and each month brings something different to Grand Traverse Bay. In spring, smallmouth bass move shallow for the pre-spawn and spawn, making them accessible and aggressive — perfect conditions for sight-fishing in the bay&apos;s famously clear water. Summer shifts the action to topwater and deeper structure. Early mornings produce explosive surface strikes, while midday fishing often means working drop-offs and rocky points where bass hold in cooler water. Fall is trophy season. As water temperatures drop, the biggest smallmouth of the year feed heavily to prepare for winter, and fish pushing four and five pounds become a realistic target on any given trip. Each season has its own character, and the gallery captures those moments — from calm spring mornings to golden fall sunsets over the bay.
          </p>

          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">Share Your Catch</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We love seeing our clients&apos; photos long after the trip is over. If you&apos;ve fished with Captain Butch and have a shot you&apos;re proud of, tag us on Instagram at <strong>@tcbassdestinationcharters</strong> and we may feature it right here in the gallery. Whether it&apos;s your first smallmouth, your personal best, or just a great photo of the bay at sunrise, your story is part of what makes this charter special. Every image on this page represents a real day on the water with a real angler — and the next one could be yours.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="font-serif text-3xl font-bold text-navy-900 mb-4">Want to Be in the Gallery?</h3>
          <p className="text-gray-600 mb-8">Book your trip and create your own fishing memories on Grand Traverse Bay.</p>
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
