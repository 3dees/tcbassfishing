'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Calendar, User, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476673160081-cf065607f39d?q=80&w=2070&auto=format&fit=crop"
            alt="Grand Traverse Bay at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Book Your Trip Today</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Left Panel: Info */}
            <div className="lg:w-2/5 bg-navy-900 text-white p-10 md:p-14 flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</div>
                <h2 className="font-serif text-4xl font-bold mb-6">Ready to Cast Off?</h2>
                <p className="text-gray-300 mb-10 leading-relaxed">
                  Dates fill up fast, especially during the spring spawn (May/June). Reach out today to secure your spot on the boat.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase font-semibold">Phone</p>
                      <a href="tel:231-883-2200" className="text-xl font-medium hover:text-cyan-400 transition-colors">
                        (231) 883-2200
                      </a>
                      <p className="text-sm text-gray-400">Call or Text, 8am - 8pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase font-semibold">Location</p>
                      <p className="text-lg font-medium">Traverse City, MI</p>
                      <p className="text-sm text-gray-400">Grand Traverse Bay</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Calendar className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase font-semibold">Season</p>
                      <p className="text-lg font-medium">April 1 – October 31</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <p className="text-gray-500 text-sm">
                  &copy; 2025 TC Bass Destination Charters.
                </p>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="lg:w-3/5 p-10 md:p-14">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Request a Trip</h3>
              <p className="text-gray-500 text-sm mb-6">
                Please fill out the form below to check availability. Booking is scheduled via email or phone confirmation.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        placeholder="(231) 883-2200"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="trip" className="block text-sm font-medium text-gray-700 mb-1">Trip Duration</label>
                    <div className="relative">
                      <select
                        id="trip"
                        className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none"
                      >
                        <option>4-Hour Trip ($440)</option>
                        <option>6-Hour Trip ($560)</option>
                        <option>8-Hour Trip ($660)</option>
                        <option>Not Sure Yet</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your group or fishing experience..."
                    ></textarea>
                  </div>
                </div>

                {/* SMS Opt-in Compliance */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="sms-opt-in"
                    className="mt-1 h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sms-opt-in" className="text-xs text-gray-500">
                    By checking this box, I agree to receive text messages from TC Bass Destination Charters regarding my inquiry. Message and data rates may apply. Reply STOP to opt out.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all transform active:scale-95"
                >
                  {formStatus === 'success' ? 'Request Sent! We will contact you shortly.' : 'Check Availability'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
