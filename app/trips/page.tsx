'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock, Anchor, Users, X, ArrowLeft } from 'lucide-react';
import Script from 'next/script';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const packages = [
  {
    id: '1',
    name: '4-Hour Trip',
    price: 440,
    duration: '4 Hours',
    description: 'A great option for the morning bite or a family outing. We hit the prime spots quickly to maximize your fishing time.',
    features: ['Start time: 7:00 AM', 'Up to 2 Anglers', 'Rods, Reels & Tackle Provided', 'Drinks & Snacks Included'],
    image: '/images/hero/04_kid_huge_bass.jpg',
    bookingType: 'google-modal' as const,
    bookingUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ22pOy74jn-M1Bsd12LB-MY4sAAoo5Q3qyn5BEuJOkkB6ogMPE7b6aVvB1CXCyeFZMoopO3eMWo?gv=true'
  },
  {
    id: '2',
    name: '6-Hour Trip',
    price: 550,
    duration: '6 Hours',
    description: 'Our most popular option. Gives us more time to try different techniques and locations across Grand Traverse Bay.',
    features: ['Start time: 7:00 AM', 'Up to 2 Anglers', 'Rods, Reels & Tackle Provided', 'Drinks & Snacks Included'],
    image: '/images/hero/03_customer_bigfish_captain.jpg',
    bookingType: 'google-modal' as const,
    bookingUrl: 'https://calendar.google.com/calendar/appointments/AcZssZ0MkXl5pyo2RFIWwiIwZljySpHdViRnY0UKRGs=?gv=true'
  },
  {
    id: '3',
    name: '8-Hour Trip',
    price: 660,
    duration: '8 Hours',
    description: 'The full day experience. Perfect for serious anglers hunting for that trophy smallmouth or personal best.',
    features: ['Start time: 7:00 AM', 'Up to 2 Anglers', 'Rods, Reels & Tackle Provided', 'Drinks & Snacks Included'],
    image: '/images/hero/05_sunset_bay.jpg',
    bookingType: 'calendly' as const,
    bookingUrl: 'https://calendly.com/dh-meet/6hours'
  }
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: number;
  packageDuration: string;
  bookingUrl: string;
}

function BookingModal({ isOpen, onClose, packageName, packagePrice, packageDuration, bookingUrl }: BookingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Full height with embedded calendar */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header with back button */}
        <div className="bg-navy-900 text-white p-4 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Packages</span>
          </button>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Package info bar */}
        <div className="bg-slate-100 px-4 py-3 flex items-center justify-between border-b shrink-0">
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-lg font-bold text-navy-900">{packageName}</h3>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 flex items-center gap-1">
              <Clock className="h-4 w-4" /> {packageDuration}
            </span>
          </div>
          <div className="text-xl font-bold text-cyan-600">${packagePrice}</div>
        </div>

        {/* Embedded Google Calendar */}
        <div className="flex-1 min-h-0">
          <iframe
            src={bookingUrl}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            className="min-h-[500px]"
            title={`Book ${packageName}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  const openBookingModal = (pkg: typeof packages[0]) => {
    if (pkg.bookingType === 'calendly' && calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({ url: pkg.bookingUrl });
    } else if (pkg.bookingType === 'google-modal') {
      setSelectedPackage(pkg);
      setModalOpen(true);
    } else {
      // Fallback: open directly in new tab
      window.open(pkg.bookingUrl, '_blank');
    }
  };

  return (
    <>
      {/* Calendly Scripts */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => setCalendlyLoaded(true)}
      />

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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Trips & Rates</h1>
          <p className="text-xl text-gray-200">Choose Your Adventure on Grand Traverse Bay</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-2">Rates & Packages</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Choose Your Adventure</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              All trips are priced per group (max 2 anglers). No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-gray-100">
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-navy-900/90 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Clock className="h-3 w-3 text-cyan-400" /> {pkg.duration}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-cyan-600">${pkg.price}</span>
                    <span className="text-gray-400 ml-2 text-sm">/ per group</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 flex-grow">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="min-w-[20px]">
                          <Check className="h-5 w-5 text-cyan-500" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openBookingModal(pkg)}
                    className="w-full block text-center bg-navy-900 hover:bg-navy-800 text-white py-4 rounded-lg font-medium transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Included Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h3 className="font-serif text-3xl font-bold text-navy-900 mb-6">What&apos;s Included?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-100 rounded-full text-cyan-600 mt-1"><Anchor className="h-5 w-5" /></div>
                    <div>
                      <h4 className="font-bold text-navy-900">Premium Equipment</h4>
                      <p className="text-sm text-gray-600">High-quality rods, reels, tackle, and all lures targeting smallmouth bass.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-100 rounded-full text-cyan-600 mt-1"><Users className="h-5 w-5" /></div>
                    <div>
                      <h4 className="font-bold text-navy-900">Refreshments</h4>
                      <p className="text-sm text-gray-600">Bottled water on ice and Kind snack bars are provided for every trip.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-100 rounded-full text-cyan-600 mt-1"><Check className="h-5 w-5" /></div>
                    <div>
                      <h4 className="font-bold text-navy-900">The Details</h4>
                      <p className="text-sm text-gray-600">We use top-tier Lowrance HDS GPS & Fishfinders to locate the fish.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 bg-slate-50 p-8 rounded-xl border border-dashed border-gray-300">
                <h4 className="font-bold text-navy-900 mb-4">Important Policies</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <strong>Child Friendly:</strong> Kids are welcome!
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <strong>Catch & Release:</strong> Mandatory per local regulations.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <strong>No Alcohol:</strong> Alcohol is not permitted on board.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    <strong>What to Bring:</strong> Michigan fishing license, sunscreen, layers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Got Questions?</h2>
          <p className="text-gray-300 mb-8">We&apos;d love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Square Appointments Booking */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-2">Book Online</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Schedule Your Trip</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Select an available date and time below to book your fishing charter.
            </p>
          </div>
          <div className="text-center">
            {/* Square Appointments Widget - loads its own booking UI */}
            <Script
              src="https://square.site/appointments/buyer/widget/c8oe2ys8dwnxqg/L9PHEH55RWTNH.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedPackage && (
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
          packageDuration={selectedPackage.duration}
          bookingUrl={selectedPackage.bookingUrl}
        />
      )}
    </>
  );
}
