import type { Metadata } from 'next';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Traverse City Bass Destination Charters | Traverse City Bass Fishing',
    template: '%s | Traverse City Bass Destination Charters',
  },
  description: 'Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson. Premier bass fishing charters in Traverse City, Michigan.',
  keywords: ['bass fishing', 'Traverse City', 'fishing charter', 'Grand Traverse Bay', 'smallmouth bass', 'Michigan fishing', 'Captain Butch'],
  authors: [{ name: 'Traverse City Bass Destination Charters' }],
  creator: 'Traverse City Bass Destination Charters',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tcbassdestinationcharters.com',
    siteName: 'Traverse City Bass Destination Charters',
    title: 'Traverse City Bass Destination Charters | Traverse City Bass Fishing',
    description: 'Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson.',
    images: [
      {
        url: '/images/hero/header-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Traverse City Bass Destination Charters - Traverse City Bass Fishing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traverse City Bass Destination Charters | Traverse City Bass Fishing',
    description: 'Experience world-class smallmouth bass fishing on Grand Traverse Bay with Captain Butch Derickson.',
    images: ['/images/hero/header-bg.jpg'],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://tcbassdestinationcharters.com/#business",
      "name": "Traverse City Bass Destination Charters",
      "description": "Smallmouth bass fishing charters on Grand Traverse Bay in Traverse City, Michigan with Captain Butch Derickson. USCG licensed, fully insured.",
      "url": "https://tcbassdestinationcharters.com",
      "telephone": "+1-231-883-2200",
      "priceRange": "$440-$660",
      "image": "https://tcbassdestinationcharters.com/images/hero/header-bg.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Traverse City",
        "addressRegion": "MI",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 44.7631,
        "longitude": -85.6206
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "17:00",
        "validFrom": "2025-04-01",
        "validThrough": "2025-10-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "33",
        "bestRating": "5"
      },
      "sameAs": [
        "https://www.fishingbooker.com/charters/view/20589"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://tcbassdestinationcharters.com/#captain",
      "name": "Butch Derickson",
      "alternateName": "Captain Butch Derickson",
      "jobTitle": "Fishing Guide & Captain",
      "description": "USCG Licensed Captain with 10+ years experience fishing Grand Traverse Bay",
      "worksFor": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tcbassdestinationcharters.com/#4hour",
      "name": "4-Hour Bass Fishing Trip",
      "description": "4-hour smallmouth bass fishing charter on Grand Traverse Bay. Includes rods, reels, tackle, lures, snacks, and drinks. Up to 2 anglers.",
      "brand": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "offers": {
        "@type": "Offer",
        "price": "440",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-04-01",
        "validThrough": "2025-10-31"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tcbassdestinationcharters.com/#6hour",
      "name": "6-Hour Bass Fishing Trip",
      "description": "6-hour smallmouth bass fishing charter on Grand Traverse Bay. Includes rods, reels, tackle, lures, snacks, and drinks. Up to 2 anglers.",
      "brand": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "offers": {
        "@type": "Offer",
        "price": "550",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-04-01",
        "validThrough": "2025-10-31"
      }
    },
    {
      "@type": "Product",
      "@id": "https://tcbassdestinationcharters.com/#8hour",
      "name": "8-Hour Bass Fishing Trip",
      "description": "Full-day smallmouth bass fishing charter on Grand Traverse Bay. Includes rods, reels, tackle, lures, snacks, and drinks. Up to 2 anglers. Best chance at trophy fish.",
      "brand": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "offers": {
        "@type": "Offer",
        "price": "660",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-04-01",
        "validThrough": "2025-10-31"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://tcbassdestinationcharters.com/faq#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are your fishing charter rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer three trip options: 4-hour trips for $440, 6-hour trips for $550, and 8-hour trips for $660. All prices are per group (up to 2 anglers) and include all gear, tackle, snacks, and drinks."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the fishing trip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Everything you need is provided: rods, reels, tackle, lures, Kind snack bars, and bottled water on ice. Just bring your Michigan fishing license, sunscreen, and layered clothing."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a fishing license?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all anglers 17 and older need a valid Michigan fishing license. You can purchase one online at Michigan.gov/DNR or at local sporting goods stores."
          }
        },
        {
          "@type": "Question",
          "name": "Is this charter good for beginners or kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Captain Butch welcomes anglers of all skill levels, including children. He'll teach you the techniques and help you catch fish regardless of your experience."
          }
        },
        {
          "@type": "Question",
          "name": "What fish will we catch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We target smallmouth bass, which Grand Traverse Bay is nationally known for. The bay holds excellent numbers of bass and trophy-sized fish are caught regularly."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cancellation policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deposits are non-refundable. However, if we need to cancel due to weather, you can reschedule for free to any available date."
          }
        },
        {
          "@type": "Question",
          "name": "Where do we meet for the charter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The meeting location will be confirmed when you book. It's typically a boat launch in the Traverse City area on Grand Traverse Bay."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time of year to fish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our season runs April through October. Early summer (May-June) and fall (September-October) often produce the best smallmouth bass fishing, but we catch fish all season long."
          }
        }
      ]
    },
    {
      "@type": "BoatTrip",
      "name": "Smallmouth Bass Fishing Charter",
      "description": "Guided bass fishing trip on Grand Traverse Bay aboard a 21' Ranger Z521 bass boat",
      "provider": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "departureBoatTerminal": {
        "@type": "BoatTerminal",
        "name": "Traverse City Boat Launch",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Traverse City",
          "addressRegion": "MI"
        }
      },
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Meet at boat launch"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Fish Grand Traverse Bay for smallmouth bass"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Return to dock"
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZWV1Z6P1X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZWV1Z6P1X');
          `}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />

      </body>
    </html>
  );
}
