'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Calendar, User, Loader2, Mail } from 'lucide-react';

const FORMSPREE_ID = 'mvgelvlp';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that at least phone or email is provided
    if (!phone.trim() && !email.trim()) {
      setErrorMessage('Please provide either a phone number or email address.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setPhone('');
        setEmail('');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
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
            sizes="100vw"
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
                  &copy; 2025 Traverse City Bass Destination Charters.
                </p>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="lg:w-3/5 p-10 md:p-14">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Us</h3>
              <p className="text-gray-500 text-sm mb-6">
                Got questions or have a special request? We&apos;d love to hear from you.
              </p>

              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-xl font-semibold mb-2">Request Sent!</div>
                  <p className="text-green-700">Thank you for your inquiry. Captain Butch will contact you shortly to confirm your trip.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-4 text-cyan-600 hover:text-cyan-500 font-medium"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-gray-400 font-normal">(or email below)</span></label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                          placeholder="(231) 883-2200"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-gray-400 font-normal">(or phone above)</span></label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                          placeholder="you@example.com"
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
                          name="preferred_date"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="trip" className="block text-sm font-medium text-gray-700 mb-1">Trip Duration</label>
                      <div className="relative">
                        <select
                          id="trip"
                          name="trip_duration"
                          className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none"
                        >
                          <option value="4-Hour Trip ($440)">4-Hour Trip ($440)</option>
                          <option value="6-Hour Trip ($550)">6-Hour Trip ($550)</option>
                          <option value="8-Hour Trip ($660)">8-Hour Trip ($660)</option>
                          <option value="Not Sure Yet">Not Sure Yet</option>
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
                        name="message"
                        rows={3}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your group or fishing experience..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Marketing Opt-in Compliance */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketing-opt-in"
                      name="marketing_opt_in"
                      className="mt-1 h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketing-opt-in" className="text-xs text-gray-500">
                      By checking this box, I agree to receive marketing text messages and/or emails from Traverse City Bass Destination Charters regarding my inquiry. Message and data rates may apply. Reply STOP to opt out.
                    </label>
                  </div>

                  {/* Terms and Privacy Agreement */}
                  <p className="text-xs text-gray-500">
                    By submitting this form, I agree to the{' '}
                    <Link href="/terms" className="text-cyan-600 hover:text-cyan-700 underline">Terms and Conditions</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-cyan-600 hover:text-cyan-700 underline">Privacy Policy</Link>.
                  </p>

                  {formStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-400 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all transform active:scale-95 disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Contact Us'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
