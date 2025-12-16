import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'View photos from our bass fishing trips on Grand Traverse Bay. See real catches from real clients fishing with Captain Butch.',
  openGraph: {
    title: 'Photo Gallery | TC Bass Destination Charters',
    description: 'View photos from our bass fishing trips on Grand Traverse Bay. See real catches from real clients.',
    images: ['/images/hero/collage_hero.png'],
  },
};

const images = [
  { id: '1', url: '/images/gallery/01_captain_kid_fish.jpg', alt: 'Captain with young angler and catch', caption: 'Young Angler Success' },
  { id: '2', url: '/images/gallery/02_couple_michigan.jpg', alt: 'Couple fishing in Michigan', caption: 'Michigan Memories' },
  { id: '3', url: '/images/gallery/03_woman_catch_calmwater.jpg', alt: 'Woman with bass catch on calm water', caption: 'Calm Water Catch' },
  { id: '4', url: '/images/gallery/04_cmu_angler.jpg', alt: 'CMU angler with bass', caption: 'Fire Up The Grill!' },
  { id: '5', url: '/images/gallery/05_customer_rod_lowrance.jpg', alt: 'Customer fishing with Lowrance electronics', caption: 'Dialed In' },
  { id: '6', url: '/images/gallery/06_woman_bass.jpg', alt: 'Woman holding bass', caption: 'Personal Best' },
  { id: '7', url: '/images/gallery/07_captain_fullboat_sky.jpg', alt: 'Captain on the boat with beautiful sky', caption: 'Perfect Day on the Bay' },
  { id: '8', url: '/images/gallery/08_three_boys_bigbass.jpg', alt: 'Three boys with big bass catches', caption: 'Triple Threat' },
  { id: '9', url: '/images/gallery/09_teen_dad_catch.jpg', alt: 'Teen and dad with catch', caption: 'Father & Son Trip' },
  { id: '10', url: '/images/gallery/10_teen_bass_yamaha.jpg', alt: 'Teen with bass by Yamaha motor', caption: 'Next Generation Angler' },
];

export default function GalleryPage() {
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-200">Real Catches, Real Memories</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Want to Be in the Gallery?</h2>
          <p className="text-gray-600 mb-8">Book your trip and create your own fishing memories on Grand Traverse Bay.</p>
          <Link
            href="/contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Book Your Trip
          </Link>
        </div>
      </section>
    </>
  );
}
