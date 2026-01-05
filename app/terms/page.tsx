'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FileText, DollarSign, XCircle, Users, AlertTriangle, Fish, Camera, Scale, Phone } from 'lucide-react';

export default function TermsPage() {
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-200">Please read these terms carefully before booking</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-4">Last Updated: December 2025</p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              By booking a fishing charter with Traverse City Bass Destination Charters, LLC, you agree to be bound by these Terms and Conditions. If you do not agree, do not book a trip.
            </p>
          </div>

          {/* Company Info Card */}
          <div className="bg-slate-50 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">Company Information</h3>
            <p className="text-gray-600">
              Traverse City Bass Destination Charters, LLC<br />
              Traverse City, Michigan<br />
              Phone: <a href="tel:231-883-2200" className="text-cyan-600 hover:text-cyan-700">231-883-2200</a><br />
              Email: <a href="mailto:derick881@gmail.com" className="text-cyan-600 hover:text-cyan-700">derick881@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking and Payment */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Booking & Payment</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Reservations</h3>
              <p className="text-gray-600 text-sm">
                All reservations are subject to availability and confirmation. A booking is not confirmed until you receive written confirmation from us.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Payment Methods</h3>
              <p className="text-gray-600 text-sm">
                A deposit is required to secure your booking. <strong>All deposits are non-refundable.</strong> The remaining balance is due on the day of the trip. We accept Square, Venmo, and PayPal.
              </p>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mt-8 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="bg-navy-900 text-white px-6 py-4">
              <h3 className="font-bold">Trip Pricing</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-gray-700">4-Hour Trip</span>
                <span className="font-bold text-navy-900">$440</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-gray-700">6-Hour Trip</span>
                <span className="font-bold text-navy-900">$550</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-gray-700">8-Hour Trip</span>
                <span className="font-bold text-navy-900">$660</span>
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 text-sm text-gray-500">
              Prices are per group (up to 2 anglers) and include all gear, tackle, snacks, and drinks. Gratuities are not included and are at the customer&apos;s discretion.
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Cancellation & Refund Policy</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-4">Customer Cancellations</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-red-700 font-medium">All deposits are non-refundable.</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">!</span>
                  <span><strong>7+ days before:</strong> May reschedule (subject to availability)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>Less than 7 days:</strong> No reschedule, deposit forfeited</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span><strong>No-shows:</strong> No refund, deposit forfeited</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-4">Weather & Captain Cancellations</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Weather:</strong> If we cancel due to unsafe conditions (high winds, lightning, severe storms), you may reschedule at no cost or receive a full refund.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Captain&apos;s Discretion:</strong> The Captain may cancel, shorten, or modify any trip due to safety concerns. A prorated refund or reschedule will be offered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Responsibilities */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Users className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Customer Responsibilities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">What to Bring</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Valid Michigan fishing license (required for 17+)</li>
                <li>• Sunscreen and sunglasses</li>
                <li>• Weather-appropriate clothing (layers recommended)</li>
                <li>• Any personal medications</li>
                <li>• Camera (optional)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">What&apos;s Provided</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• All rods, reels, and tackle</li>
                <li>• Lures and bait</li>
                <li>• Snacks and bottled water</li>
                <li>• Safety equipment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Conduct</h3>
              <p className="text-sm text-gray-600">
                Customers must follow all instructions from the Captain. The Captain may terminate a trip without refund if a customer engages in unsafe behavior or acts in a manner that endangers themselves, others, or the vessel.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">Alcohol & Drugs Policy</h3>
              <p className="text-sm text-red-600">
                Alcohol is NOT permitted on board. Customers who appear intoxicated will not be allowed to board, and no refund will be issued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liability */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl font-bold">Liability & Assumption of Risk</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-cyan-400 mb-3">Assumption of Risk</h3>
              <p className="text-gray-300 text-sm">
                Fishing and boating involve inherent risks including but not limited to: drowning, slips and falls, cuts from hooks or fish, sunburn, seasickness, and exposure to weather. By booking a trip, you acknowledge these risks and voluntarily assume them.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-cyan-400 mb-3">Waiver and Release</h3>
              <p className="text-gray-300 text-sm">
                Prior to boarding, all customers must sign a Liability Waiver and Release form. Customers who refuse to sign will not be permitted to board, and no refund will be issued.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-cyan-400 mb-3">Limitation of Liability</h3>
              <p className="text-gray-300 text-sm">
                To the fullest extent permitted by law, Traverse City Bass Destination Charters, LLC, its owner, captain, and agents shall not be liable for any injury, death, loss, or damage to personal property arising from participation in a fishing charter, except in cases of gross negligence or willful misconduct.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-cyan-400 mb-3">Indemnification</h3>
              <p className="text-gray-300 text-sm">
                You agree to indemnify and hold harmless Traverse City Bass Destination Charters, LLC from any claims, damages, or expenses arising from your actions or negligence during a trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Policies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">Additional Policies</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Fish className="h-5 w-5 text-cyan-600" />
                <h3 className="font-bold text-navy-900">Catch and Release</h3>
              </div>
              <p className="text-sm text-gray-600">
                Per local regulations, certain fish may be required to be released. The Captain will inform you of current regulations. We practice responsible catch and release to preserve the fishery.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-cyan-600" />
                <h3 className="font-bold text-navy-900">Children</h3>
              </div>
              <p className="text-sm text-gray-600">
                Children are welcome on board. Children under 16 must be accompanied by a parent or legal guardian who assumes full responsibility for the child&apos;s safety and conduct.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Camera className="h-5 w-5 text-cyan-600" />
                <h3 className="font-bold text-navy-900">Photos and Media</h3>
              </div>
              <p className="text-sm text-gray-600">
                We may take photos during your trip for promotional purposes on our website and social media. If you do not wish to be photographed, please inform the Captain at the start of the trip.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-5 w-5 text-cyan-600" />
                <h3 className="font-bold text-navy-900">Trip Modifications</h3>
              </div>
              <p className="text-sm text-gray-600">
                Requests to change your trip date/time are subject to availability. Our boat accommodates a maximum of 2 anglers plus the Captain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Scale className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Legal</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4 text-sm text-gray-600">
            <p>
              <strong className="text-navy-900">Intellectual Property:</strong> All content on our website is the property of Traverse City Bass Destination Charters, LLC and is protected by copyright law.
            </p>
            <p>
              <strong className="text-navy-900">Dispute Resolution:</strong> Any disputes shall be resolved through good-faith negotiation. If unresolved, disputes shall be subject to binding arbitration in Grand Traverse County, Michigan.
            </p>
            <p>
              <strong className="text-navy-900">Governing Law:</strong> These Terms are governed by the laws of the State of Michigan.
            </p>
            <p>
              <strong className="text-navy-900">Severability:</strong> If any provision is found unenforceable, the remaining provisions shall continue in full force.
            </p>
            <p>
              <strong className="text-navy-900">Changes to Terms:</strong> We reserve the right to modify these Terms at any time. Changes will be posted with an updated date.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">
              Contact us at <a href="tel:231-883-2200" className="text-cyan-400 hover:text-cyan-300">231-883-2200</a> or{' '}
              <a href="mailto:derick881@gmail.com" className="text-cyan-400 hover:text-cyan-300">derick881@gmail.com</a>
            </p>
            <Link
              href="/privacy"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
