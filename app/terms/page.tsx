'use client';

import Image from 'next/image';
import Link from 'next/link';

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
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-200">Please read these terms carefully before booking</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-navy-900">

            <p className="text-sm text-gray-500 mb-8"><strong>Last Updated:</strong> December 2025</p>

            <h2>1. Agreement to Terms</h2>
            <p>By booking a fishing charter with TC Bass Destination Charters, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms and Conditions. If you do not agree, do not book a trip.</p>

            <h2>2. Company Information</h2>
            <p>
              TC Bass Destination Charters, LLC<br />
              Traverse City, Michigan<br />
              Phone: 231-883-2200<br />
              Email: derick881@gmail.com
            </p>

            <h2>3. Booking and Payment</h2>

            <h3>3.1 Reservations</h3>
            <p>All reservations are subject to availability and confirmation. A booking is not confirmed until you receive written confirmation from us.</p>

            <h3>3.2 Pricing</h3>
            <ul>
              <li>4-Hour Trip: $440</li>
              <li>6-Hour Trip: $560</li>
              <li>8-Hour Trip: $660</li>
            </ul>
            <p>Prices are per group (up to 2 anglers) and include all gear, tackle, snacks, and drinks. Prices are subject to change without notice; however, confirmed bookings will be honored at the quoted price.</p>

            <h3>3.3 Deposit and Payment</h3>
            <p>A deposit may be required to secure your booking. The remaining balance is due on the day of the trip. We accept payment via Square, Venmo, and PayPal.</p>

            <h3>3.4 Gratuities</h3>
            <p>Gratuities are not included in the trip price and are at the customer&apos;s discretion.</p>

            <h2>4. Cancellation and Refund Policy</h2>

            <h3>4.1 Customer Cancellations</h3>
            <ul>
              <li>Cancellations made more than 7 days before the trip: Full refund of deposit</li>
              <li>Cancellations made 3-7 days before the trip: 50% refund of deposit</li>
              <li>Cancellations made less than 3 days before the trip: No refund</li>
              <li>No-shows: No refund</li>
            </ul>

            <h3>4.2 Weather Cancellations</h3>
            <p>Safety is our priority. If we cancel due to unsafe weather conditions (high winds, lightning, severe storms), you may reschedule for any available date at no additional cost, or receive a full refund.</p>

            <h3>4.3 Captain&apos;s Discretion</h3>
            <p>The Captain reserves the right to cancel, shorten, or modify any trip due to weather, water conditions, mechanical issues, or safety concerns. In such cases, a prorated refund or reschedule will be offered.</p>

            <h2>5. Customer Responsibilities</h2>

            <h3>5.1 Fishing License</h3>
            <p>All anglers 17 years and older are required to have a valid Michigan fishing license. You are responsible for obtaining your own license prior to the trip. Licenses can be purchased at Michigan.gov/DNR or local sporting goods stores.</p>

            <h3>5.2 What to Bring</h3>
            <ul>
              <li>Valid Michigan fishing license</li>
              <li>Sunscreen and sunglasses</li>
              <li>Weather-appropriate clothing (layers recommended)</li>
              <li>Any personal medications</li>
              <li>Camera (optional)</li>
            </ul>

            <h3>5.3 What&apos;s Provided</h3>
            <ul>
              <li>All rods, reels, and tackle</li>
              <li>Lures and bait</li>
              <li>Snacks and bottled water</li>
              <li>Safety equipment</li>
            </ul>

            <h3>5.4 Conduct</h3>
            <p>Customers must follow all instructions from the Captain. The Captain may terminate a trip without refund if a customer engages in unsafe behavior, is intoxicated, or acts in a manner that endangers themselves, others, or the vessel.</p>

            <h3>5.5 Alcohol and Drugs</h3>
            <p>Alcohol is NOT permitted on board. Customers who appear intoxicated will not be allowed to board, and no refund will be issued.</p>

            <h2>6. Liability Waiver and Assumption of Risk</h2>

            <h3>6.1 Assumption of Risk</h3>
            <p>Fishing and boating involve inherent risks including but not limited to: drowning, slips and falls, cuts from hooks or fish, sunburn, seasickness, and exposure to weather. By booking a trip, you acknowledge these risks and voluntarily assume them.</p>

            <h3>6.2 Waiver and Release</h3>
            <p>Prior to boarding, all customers must sign a Liability Waiver and Release form. Customers who refuse to sign will not be permitted to board, and no refund will be issued.</p>

            <h3>6.3 Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, TC Bass Destination Charters, LLC, its owner, captain, and agents shall not be liable for any injury, death, loss, or damage to personal property arising from participation in a fishing charter, except in cases of gross negligence or willful misconduct.</p>

            <h3>6.4 Indemnification</h3>
            <p>You agree to indemnify and hold harmless TC Bass Destination Charters, LLC from any claims, damages, or expenses arising from your actions or negligence during a trip.</p>

            <h2>7. Catch and Release</h2>
            <p>Per local regulations, certain fish may be required to be released. The Captain will inform you of current regulations. We practice responsible catch and release to preserve the fishery for future generations.</p>

            <h2>8. Children</h2>
            <p>Children are welcome on board. Children under 16 must be accompanied by a parent or legal guardian who assumes full responsibility for the child&apos;s safety and conduct.</p>

            <h2>9. Trip Modifications</h2>

            <h3>9.1 Date/Time Changes</h3>
            <p>Requests to change your trip date or time are subject to availability. Please contact us as soon as possible if you need to reschedule.</p>

            <h3>9.2 Group Size</h3>
            <p>Our boat accommodates a maximum of 2 anglers plus the Captain. Additional guests beyond this limit cannot be accommodated.</p>

            <h2>10. Photos and Media</h2>
            <p>We may take photos during your trip for promotional purposes on our website and social media. If you do not wish to be photographed, please inform the Captain at the start of the trip.</p>

            <h2>11. Intellectual Property</h2>
            <p>All content on our website, including text, images, logos, and graphics, is the property of TC Bass Destination Charters, LLC and is protected by copyright law. You may not reproduce, distribute, or use our content without written permission.</p>

            <h2>12. Dispute Resolution</h2>
            <p>Any disputes arising from these Terms shall be resolved through good-faith negotiation. If unresolved, disputes shall be subject to binding arbitration in Grand Traverse County, Michigan, under the rules of the American Arbitration Association.</p>

            <h2>13. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Michigan, without regard to conflict of law principles.</p>

            <h2>14. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</p>

            <h2>15. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be posted on our website with an updated &quot;Last Updated&quot; date. Your continued use of our services constitutes acceptance of any changes.</p>

            <h2>16. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p>
              TC Bass Destination Charters, LLC<br />
              Phone: 231-883-2200<br />
              Email: derick881@gmail.com
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/privacy" className="text-cyan-600 hover:text-cyan-700 font-medium">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
