import type { Metadata } from 'next';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';
import './silktide-consent-manager.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tcbassdestinationcharters.com'),
  alternates: {
    canonical: '/',
  },
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
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Scott M."
          },
          "datePublished": "2024-07-15",
          "reviewBody": "Captain Butch put us on fish right away. Great experience for my son's first bass fishing trip!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Mike R."
          },
          "datePublished": "2024-08-22",
          "reviewBody": "Incredible day on the water. We caught over 30 smallmouth bass. Butch knows this bay like the back of his hand."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "David K."
          },
          "datePublished": "2024-09-10",
          "reviewBody": "The full day trip was worth every penny. Multiple trophy smallmouth over 4 lbs. Captain Butch is a true pro."
        }
      ],
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
      "@type": "Service",
      "@id": "https://tcbassdestinationcharters.com/#4hour",
      "name": "4-Hour Bass Fishing Trip",
      "description": "4-hour smallmouth bass fishing charter on Grand Traverse Bay. Includes rods, reels, tackle, lures, snacks, and drinks. Up to 2 anglers.",
      "image": "https://tcbassdestinationcharters.com/images/hero/04_kid_huge_bass.jpg",
      "provider": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Grand Traverse Bay, Traverse City, Michigan"
      },
      "offers": {
        "@type": "Offer",
        "price": "440",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-04-01",
        "priceValidUntil": "2025-10-31"
      }
    },
    {
      "@type": "Service",
      "@id": "https://tcbassdestinationcharters.com/#6hour",
      "name": "6-Hour Bass Fishing Trip",
      "description": "6-hour smallmouth bass fishing charter on Grand Traverse Bay. Includes rods, reels, tackle, lures, snacks, and drinks. Up to 2 anglers.",
      "image": "https://tcbassdestinationcharters.com/images/hero/03_customer_bigfish_captain.jpg",
      "provider": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Grand Traverse Bay, Traverse City, Michigan"
      },
      "offers": {
        "@type": "Offer",
        "price": "550",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-04-01",
        "priceValidUntil": "2025-10-31"
      }
    },
    {
      "@type": "Service",
      "@id": "https://tcbassdestinationcharters.com/#8hour",
      "name": "8-Hour Bass Fishing Trip",
      "description": "Full-day smallmouth bass fishing charter on Grand Traverse Bay. Includes rods, reels, tackle, lures, snacks, and drinks. Up to 2 anglers. Best chance at trophy fish.",
      "image": "https://tcbassdestinationcharters.com/images/hero/05_sunset_bay.jpg",
      "provider": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Grand Traverse Bay, Traverse City, Michigan"
      },
      "offers": {
        "@type": "Offer",
        "price": "660",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-04-01",
        "priceValidUntil": "2025-10-31"
      }
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
    },
    {
      "@type": "TouristTrip",
      "@id": "https://tcbassdestinationcharters.com/#touristtrip",
      "name": "Smallmouth Bass Fishing Charter in Traverse City",
      "description": "Guided smallmouth bass fishing trip on Grand Traverse Bay with Captain Butch Derickson. Experience world-class bass fishing in Northern Michigan's clearest waters.",
      "touristType": ["Fishing Enthusiasts", "Anglers", "Families", "Outdoor Adventurers"],
      "provider": {
        "@id": "https://tcbassdestinationcharters.com/#business"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "4-Hour Fishing Charter",
          "price": "440",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "6-Hour Fishing Charter",
          "price": "550",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "8-Hour Fishing Charter",
          "price": "660",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ],
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Meet at Grand Traverse Bay boat launch"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Target smallmouth bass on rocky structure and drop-offs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Learn techniques from an experienced local guide"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Return to dock with photos and memories"
          }
        ]
      },
      "subjectOf": {
        "@type": "CreativeWork",
        "abstract": "Catch trophy smallmouth bass on Grand Traverse Bay, one of Michigan's premier bass fishing destinations."
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://tcbassdestinationcharters.com/#howtobook",
      "name": "How to Book a Smallmouth Bass Fishing Charter in Traverse City",
      "description": "Step-by-step guide to booking a guided smallmouth bass fishing trip on Grand Traverse Bay with Captain Butch Derickson.",
      "totalTime": "PT10M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "minValue": "440",
        "maxValue": "660"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Choose Your Trip Length",
          "text": "Select from 4-hour ($440), 6-hour ($550), or 8-hour ($660) fishing charters. All trips include gear, tackle, snacks, and drinks for up to 2 anglers."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Check Availability",
          "text": "Visit our Trips & Rates page or contact Captain Butch directly at (231) 883-2200 to check available dates. Peak season is April through October."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Book and Pay Deposit",
          "text": "Reserve your date through our online booking system. A non-refundable deposit secures your trip."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Get Your Michigan Fishing License",
          "text": "All anglers 17 and older need a valid Michigan fishing license. Purchase online at mdnr-elicense.com before your trip."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Prepare for Your Trip",
          "text": "Bring sunscreen, sunglasses, layered clothing, and your fishing license. We provide all rods, reels, tackle, snacks, and bottled water."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Meet at the Boat Launch",
          "text": "Arrive at the designated Grand Traverse Bay boat launch at your scheduled time. Captain Butch will confirm the exact location when you book."
        }
      ]
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
        {/* Preconnect FIRST for fastest connection establishment */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch as fallback */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          as="style"
        />

        {/* Load fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVBJ3M3Z');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVBJ3M3Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />

        {/* Silktide Cookie Consent Manager */}
        <Script src="/silktide-consent-manager.js" strategy="lazyOnload" />
        <Script id="silktide-config" strategy="lazyOnload">
          {`
            if (typeof silktideCookieBannerManager !== 'undefined') {
              silktideCookieBannerManager.updateCookieBannerConfig({
                background: {
                  showBackground: true
                },
                cookieIcon: {
                  position: "bottomLeft"
                },
                cookieTypes: [
                  {
                    id: "necessary",
                    name: "Necessary",
                    description: "<p>These cookies are necessary for the website to function properly and cannot be switched off.</p>",
                    required: true,
                    onAccept: function() {}
                  },
                  {
                    id: "analytics",
                    name: "Analytics",
                    description: "<p>These cookies help us improve the site by tracking which pages are most popular.</p>",
                    defaultValue: true,
                    onAccept: function() {
                      if (typeof gtag !== 'undefined') {
                        gtag('consent', 'update', { analytics_storage: 'granted' });
                      }
                    },
                    onReject: function() {
                      if (typeof gtag !== 'undefined') {
                        gtag('consent', 'update', { analytics_storage: 'denied' });
                      }
                    }
                  },
                  {
                    id: "advertising",
                    name: "Advertising",
                    description: "<p>These cookies provide extra features and personalization.</p>",
                    onAccept: function() {
                      if (typeof gtag !== 'undefined') {
                        gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
                      }
                    },
                    onReject: function() {
                      if (typeof gtag !== 'undefined') {
                        gtag('consent', 'update', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
                      }
                    }
                  }
                ],
                text: {
                  banner: {
                    description: "<p>We use cookies to enhance your experience and analyze traffic. <a href='/privacy' target='_blank'>Cookie Policy.</a></p>",
                    acceptAllButtonText: "Accept all",
                    rejectNonEssentialButtonText: "Reject non-essential",
                    preferencesButtonText: "Preferences"
                  },
                  preferences: {
                    title: "Customize your cookie preferences",
                    description: "<p>You can choose not to allow some types of cookies.</p>"
                  }
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
