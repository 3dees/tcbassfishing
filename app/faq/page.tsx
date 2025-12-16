'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are your rates?",
    answer: "We offer three packages: 4-Hour Trip ($440), 6-Hour Trip ($560), and 8-Hour Trip ($660). All prices are per group (up to 2 anglers)."
  },
  {
    question: "What is included in the trip?",
    answer: "We provide premium rods, reels, tackle, and all lures. We also supply Kind snack bars and bottled water on ice. You are welcome to bring additional food."
  },
  {
    question: "What should I bring?",
    answer: "You must bring a valid Michigan fishing license. We also recommend sunscreen, sunglasses, and dressing in layers as weather on the bay can change."
  },
  {
    question: "Do I need a fishing license?",
    answer: "Yes, all anglers 17 years of age and older must have a valid Michigan fishing license. These can be purchased online from the Michigan DNR."
  },
  {
    question: "Is this good for beginners or kids?",
    answer: "Absolutely! We are 100% child-friendly and love teaching beginners. Captain Butch will help with everything from casting to landing the fish."
  },
  {
    question: "What fish will we catch?",
    answer: "Our primary target is Smallmouth Bass, which Grand Traverse Bay is famous for. We may also encounter other species, but we gear up for Bass."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Deposits are non-refundable. However, if the Captain cancels due to unsafe weather conditions, we will reschedule your trip for free."
  },
  {
    question: "Where do we meet?",
    answer: "The pickup location will be agreed upon during reservation confirmation, typically at a convenient boat launch on Grand Traverse Bay."
  },
  {
    question: "What is the best time of year to fish?",
    answer: "Our season runs from April 1 to October 31. May and June are excellent for pre-spawn/spawn action, while summer and fall offer great deep-water fishing."
  },
  {
    question: "How many people can go on a trip?",
    answer: "For safety and comfort on the bass boat, we limit trips to a maximum of 2 anglers plus the Captain."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
          <p className="text-xl text-gray-200">Frequently Asked Questions</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
              <HelpCircle className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-navy-700 rounded-lg overflow-hidden bg-navy-800/50 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-navy-800 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">Contact us directly and we&apos;ll be happy to help.</p>
          <Link
            href="/contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
