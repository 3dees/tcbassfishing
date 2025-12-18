import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trips & Rates',
  description: 'View our bass fishing charter packages and rates. 4-hour, 6-hour, and 8-hour trips available on Grand Traverse Bay. All equipment and refreshments included.',
  openGraph: {
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
