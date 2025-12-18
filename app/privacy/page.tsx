'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Database, Share2, Lock, UserCheck, Cookie, Settings, Phone } from 'lucide-react';

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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-4">Last Updated: December 2024</p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Traverse City Bass Destination Charters, LLC respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or book our services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-slate-50 rounded-2xl p-6">
            <h3 className="font-bold text-navy-900 mb-4 text-center">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#information" className="text-sm bg-white px-4 py-2 rounded-full text-cyan-600 hover:bg-cyan-50 transition-colors">Information We Collect</a>
              <a href="#how-we-use" className="text-sm bg-white px-4 py-2 rounded-full text-cyan-600 hover:bg-cyan-50 transition-colors">How We Use It</a>
              <a href="#sharing" className="text-sm bg-white px-4 py-2 rounded-full text-cyan-600 hover:bg-cyan-50 transition-colors">Sharing</a>
              <a href="#your-rights" className="text-sm bg-white px-4 py-2 rounded-full text-cyan-600 hover:bg-cyan-50 transition-colors">Your Rights</a>
              <a href="#cookies" className="text-sm bg-white px-4 py-2 rounded-full text-cyan-600 hover:bg-cyan-50 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section id="information" className="py-16 bg-slate-50 scroll-mt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Database className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Information We Collect</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Information You Provide</h3>
              <p className="text-sm text-gray-600 mb-3">When you book a trip or contact us, we may collect:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Name</li>
                <li>• Email address</li>
                <li>• Phone number</li>
                <li>• Mailing address</li>
                <li>• Payment information (processed securely by Square, Venmo, or PayPal)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Information Collected Automatically</h3>
              <p className="text-sm text-gray-600 mb-3">When you visit our website, we automatically collect:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• IP address</li>
                <li>• Browser type and version</li>
                <li>• Operating system</li>
                <li>• Pages viewed and time spent</li>
                <li>• Referring website</li>
                <li>• Device information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section id="how-we-use" className="py-16 bg-white scroll-mt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Settings className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">How We Use Your Information</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Process and confirm bookings',
              'Communicate about your trip',
              'Send booking confirmations',
              'Process payments',
              'Respond to inquiries',
              'Send marketing (with consent)',
              'Improve our website',
              'Analyze website traffic',
              'Comply with legal obligations'
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 text-sm text-gray-600 flex items-center gap-2">
                <span className="text-cyan-500">✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-cyan-50 border border-cyan-200 rounded-xl p-6">
            <h3 className="font-bold text-navy-900 mb-3">Marketing Communications</h3>
            <p className="text-sm text-gray-600">
              With your consent, we may send you promotional emails about special offers, fishing reports, and updates. You can opt out at any time by clicking &quot;unsubscribe&quot; in any marketing email or contacting us at derick881@gmail.com.
            </p>
          </div>
        </div>
      </section>

      {/* How We Share Your Information */}
      <section id="sharing" className="py-16 bg-slate-50 scroll-mt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Share2 className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">How We Share Your Information</h2>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <p className="text-green-700 font-semibold text-center">We do not sell your personal information.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Service Providers</h3>
              <p className="text-sm text-gray-600 mb-3">Third parties who help us operate:</p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Payment processors (Square, Venmo, PayPal)</li>
                <li>• Email service providers</li>
                <li>• Website hosting (Vercel)</li>
                <li>• Analytics (Google Analytics)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Legal Requirements</h3>
              <p className="text-sm text-gray-600">
                We may disclose your information if required by law, court order, or government request, or to protect our rights, safety, or property.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-3">Business Transfers</h3>
              <p className="text-sm text-gray-600">
                In the event of a merger, sale, or acquisition, your information may be transferred to the new owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security & Retention */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white/10 rounded-lg">
              <Lock className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl font-bold">Data Security & Retention</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-cyan-400 mb-3">Security Measures</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Secure payment processing through third-party providers</li>
                <li>• SSL encryption on our website</li>
                <li>• Limited access to personal information</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">
                Note: No method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-bold text-cyan-400 mb-3">Data Retention</h3>
              <p className="text-sm text-gray-300 mb-3">We retain your information as long as necessary to:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Provide our services</li>
                <li>• Comply with legal obligations</li>
                <li>• Resolve disputes</li>
                <li>• Enforce our agreements</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">
                Booking records are typically retained for 7 years for tax and legal purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section id="your-rights" className="py-16 bg-white scroll-mt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <UserCheck className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Your Rights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-4">Depending on your location, you may have the right to:</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">✓</span>
                  Access the personal information we hold about you
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">✓</span>
                  Correct inaccurate information
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">✓</span>
                  Delete your personal information
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">✓</span>
                  Opt out of marketing communications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">✓</span>
                  Request a copy of your data
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:derick881@gmail.com" className="text-cyan-600 hover:text-cyan-700">derick881@gmail.com</a>
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Third-Party Links</h3>
                <p className="text-sm text-gray-600">
                  Our website may contain links to third-party websites (e.g., FishingBooker, Michigan DNR). We are not responsible for the privacy practices of these sites.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Children&apos;s Privacy</h3>
                <p className="text-sm text-gray-600">
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">California Residents</h3>
                <p className="text-sm text-gray-600">
                  California residents may have additional rights under the CCPA, including the right to know what personal information we collect and request deletion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-16 bg-slate-50 scroll-mt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Cookie className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Cookie Policy</h2>
          </div>

          <p className="text-sm text-gray-500 mb-6">Last Updated: December 2024</p>

          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h3 className="font-bold text-navy-900 mb-3">What Are Cookies?</h3>
            <p className="text-sm text-gray-600">
              Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and understand how you use the site.
            </p>
          </div>

          <h3 className="font-bold text-navy-900 mb-4">Types of Cookies We Use</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Required</span>
                <h4 className="font-bold text-navy-900">Essential Cookies</h4>
              </div>
              <p className="text-sm text-gray-600">
                Necessary for the website to function properly. Enable core features like page navigation and secure areas. You cannot opt out of these cookies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">Analytics</span>
                <h4 className="font-bold text-navy-900">Analytics Cookies</h4>
              </div>
              <p className="text-sm text-gray-600">
                Help us understand how visitors interact with our website. We use Google Analytics which collects data about page views, time on site, and user behavior.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">Functional</span>
                <h4 className="font-bold text-navy-900">Functional Cookies</h4>
              </div>
              <p className="text-sm text-gray-600">
                Remember your preferences and choices to provide a more personalized experience, such as dismissed popups or preferred settings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">Marketing</span>
                <h4 className="font-bold text-navy-900">Marketing Cookies</h4>
              </div>
              <p className="text-sm text-gray-600">
                With your consent, may be used to deliver relevant advertisements and track the effectiveness of marketing campaigns.
              </p>
            </div>
          </div>

          {/* Third-Party Cookies Table */}
          <h3 className="font-bold text-navy-900 mb-4">Third-Party Cookies</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Provider</th>
                  <th className="px-4 py-3 text-left font-medium">Purpose</th>
                  <th className="px-4 py-3 text-left font-medium">More Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-700">Google Analytics</td>
                  <td className="px-4 py-3 text-gray-600">Website analytics</td>
                  <td className="px-4 py-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Privacy Policy</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Vercel</td>
                  <td className="px-4 py-3 text-gray-600">Website hosting</td>
                  <td className="px-4 py-3">
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Privacy Policy</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Formspree</td>
                  <td className="px-4 py-3 text-gray-600">Contact form</td>
                  <td className="px-4 py-3">
                    <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Privacy Policy</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Google Calendar</td>
                  <td className="px-4 py-3 text-gray-600">Booking integration</td>
                  <td className="px-4 py-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">Privacy Policy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Managing Cookies */}
          <h3 className="font-bold text-navy-900 mb-4">How to Manage Cookies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-navy-900 mb-3">Browser Settings</h4>
              <p className="text-sm text-gray-600 mb-3">Control cookies through your browser:</p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
                <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-navy-900 mb-3">Opt-Out Options</h4>
              <p className="text-sm text-gray-600 mb-3">
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">
                  Google Analytics Opt-Out →
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> If you disable cookies, some features of our website may not function properly. Our website does not currently respond to &quot;Do Not Track&quot; signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-cyan-100 rounded-lg">
              <Shield className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy-900">Policy Updates</h2>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-gray-600">
              We may update this Privacy Policy and Cookie Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of our website or services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-gray-300 mb-6">
              Contact us at <a href="tel:231-883-2200" className="text-cyan-400 hover:text-cyan-300">231-883-2200</a> or{' '}
              <a href="mailto:derick881@gmail.com" className="text-cyan-400 hover:text-cyan-300">derick881@gmail.com</a>
            </p>
            <Link
              href="/terms"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              View Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
