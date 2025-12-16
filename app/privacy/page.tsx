'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPage() {
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-200">How we collect, use, and protect your information</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-navy-900">

            <p className="text-sm text-gray-500 mb-8"><strong>Last Updated:</strong> December 2024</p>

            <p>TC Bass Destination Charters, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website (tcbassdestinationcharters.com) or book our services.</p>

            <h2>1. Information We Collect</h2>

            <h3>1.1 Information You Provide</h3>
            <p>When you book a trip or contact us, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information (processed securely by Square, Venmo, or PayPal)</li>
              <li>Any other information you voluntarily provide</li>
            </ul>

            <h3>1.2 Information Collected Automatically</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages viewed and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h3>1.3 Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar technologies to enhance your experience. See our <a href="#cookies" className="text-cyan-600 hover:text-cyan-700">Cookie Policy</a> below for details.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and confirm bookings</li>
              <li>Communicate with you about your trip</li>
              <li>Send booking confirmations and reminders</li>
              <li>Process payments</li>
              <li>Respond to inquiries and customer service requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website traffic and usage</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Marketing Communications</h2>
            <p>With your consent, we may send you promotional emails about special offers, fishing reports, and updates. You can opt out at any time by:</p>
            <ul>
              <li>Clicking &quot;unsubscribe&quot; in any marketing email</li>
              <li>Contacting us at derick881@gmail.com</li>
            </ul>
            <p>Opting out of marketing emails will not affect transactional communications related to your bookings.</p>

            <h2>4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>

            <h3>4.1 Service Providers</h3>
            <p>Third parties who help us operate our business:</p>
            <ul>
              <li>Payment processors (Square, Venmo, PayPal)</li>
              <li>Email service providers</li>
              <li>Website hosting (Vercel)</li>
              <li>Analytics providers (Google Analytics)</li>
            </ul>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law, court order, or government request, or to protect our rights, safety, or property.</p>

            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, sale, or acquisition, your information may be transferred to the new owner.</p>

            <h2>5. Data Security</h2>
            <p>We implement reasonable security measures to protect your information, including:</p>
            <ul>
              <li>Secure payment processing through third-party providers</li>
              <li>SSL encryption on our website</li>
              <li>Limited access to personal information</li>
            </ul>
            <p>However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>

            <h2>6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p>Booking records are typically retained for 7 years for tax and legal purposes.</p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
            <p>To exercise these rights, contact us at derick881@gmail.com.</p>

            <h2>8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites (e.g., FishingBooker, Michigan DNR). We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies.</p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

            <h2>10. California Residents</h2>
            <p>If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to request deletion. Contact us to exercise these rights.</p>

            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of our website or services constitutes acceptance of any changes.</p>

            <h2>12. Contact Us</h2>
            <p>For questions about this Privacy Policy, contact us at:</p>
            <p>
              TC Bass Destination Charters, LLC<br />
              Phone: 231-883-2200<br />
              Email: derick881@gmail.com
            </p>

            <hr className="my-12" />

            {/* Cookie Policy Section */}
            <h1 id="cookies" className="scroll-mt-24">Cookie Policy</h1>

            <p className="text-sm text-gray-500 mb-8"><strong>Last Updated:</strong> December 2024</p>

            <p>This Cookie Policy explains how TC Bass Destination Charters, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies on our website (tcbassdestinationcharters.com).</p>

            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and understand how you use the site.</p>

            <h2>2. Types of Cookies We Use</h2>

            <h3>2.1 Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They enable core features like page navigation and access to secure areas. You cannot opt out of these cookies.</p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Session cookies to maintain your browsing session</li>
              <li>Security cookies</li>
            </ul>

            <h3>2.2 Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website by collecting anonymous information.</p>
            <p><strong>We use:</strong></p>
            <ul>
              <li><strong>Google Analytics</strong> - Collects data about page views, time on site, traffic sources, and user behavior. Google Analytics uses cookies including <code>_ga</code>, <code>_gid</code>, and <code>_gat</code>.</li>
            </ul>
            <p><strong>Purpose:</strong> To improve our website and understand which content is most useful to visitors.</p>

            <h3>2.3 Functional Cookies</h3>
            <p>These cookies remember your preferences and choices to provide a more personalized experience.</p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Remembering if you&apos;ve dismissed a popup</li>
              <li>Storing your preferred settings</li>
            </ul>

            <h3>2.4 Marketing Cookies</h3>
            <p>With your consent, we may use marketing cookies to deliver relevant advertisements and track the effectiveness of our marketing campaigns.</p>

            <h2>3. Third-Party Cookies</h2>
            <p>Some cookies are placed by third-party services on our website:</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left border-b">Provider</th>
                    <th className="px-4 py-2 text-left border-b">Purpose</th>
                    <th className="px-4 py-2 text-left border-b">More Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">Google Analytics</td>
                    <td className="px-4 py-2 border-b">Website analytics</td>
                    <td className="px-4 py-2 border-b"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Google Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Vercel</td>
                    <td className="px-4 py-2 border-b">Website hosting</td>
                    <td className="px-4 py-2 border-b"><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Vercel Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Formspree</td>
                    <td className="px-4 py-2 border-b">Contact form</td>
                    <td className="px-4 py-2 border-b"><a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Formspree Privacy Policy</a></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Google Calendar</td>
                    <td className="px-4 py-2 border-b">Booking integration</td>
                    <td className="px-4 py-2 border-b"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Google Privacy Policy</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. How to Manage Cookies</h2>

            <h3>4.1 Browser Settings</h3>
            <p>Most web browsers allow you to control cookies through their settings:</p>
            <ul>
              <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
              <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
              <li><strong>Edge:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
            </ul>

            <h3>4.2 Opt-Out Links</h3>
            <ul>
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Google Analytics Opt-Out</a></li>
            </ul>

            <h3>4.3 Consequences of Disabling Cookies</h3>
            <p>If you disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled without affecting site functionality.</p>

            <h2>5. Do Not Track</h2>
            <p>Some browsers have a &quot;Do Not Track&quot; feature. Our website does not currently respond to Do Not Track signals.</p>

            <h2>6. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date.</p>

            <h2>7. Contact Us</h2>
            <p>For questions about this Cookie Policy, contact us at:</p>
            <p>
              TC Bass Destination Charters, LLC<br />
              Phone: 231-883-2200<br />
              Email: derick881@gmail.com
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/terms" className="text-cyan-600 hover:text-cyan-700 font-medium">
              ← View Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
