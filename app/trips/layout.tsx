import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Bass Fishing Charter Rates | Traverse City, MI' },
  description:
    'Smallmouth bass charter packages from $440. Choose 4, 6, or 8-hour trips on Grand Traverse Bay. Premium gear and expert guiding included.',
  alternates: {
    canonical: '/trips',
  },
  openGraph: {
    url: 'https://tcbassdestinationcharters.com/trips',
    title: 'Trips & Rates | Traverse City Bass Destination Charters',
    description: 'View our bass fishing charter packages and rates. 4-hour, 6-hour, and 8-hour trips available on Grand Traverse Bay.',
    images: ['/images/hero/05_sunset_bay.jpg'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
