import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TC Bass Destination Charters | Traverse City Bass Fishing',
    template: '%s | TC Bass Destination Charters',
  },
  description: 'Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson. Premier bass fishing charters in Traverse City, Michigan.',
  keywords: ['bass fishing', 'Traverse City', 'fishing charter', 'Grand Traverse Bay', 'smallmouth bass', 'Michigan fishing', 'Captain Butch'],
  authors: [{ name: 'TC Bass Destination Charters' }],
  creator: 'TC Bass Destination Charters',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tcbassdestinationcharters.com',
    siteName: 'TC Bass Destination Charters',
    title: 'TC Bass Destination Charters | Traverse City Bass Fishing',
    description: 'Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TC Bass Destination Charters - Traverse City Bass Fishing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TC Bass Destination Charters | Traverse City Bass Fishing',
    description: 'Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
