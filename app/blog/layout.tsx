import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Fishing Reports & Tips | Grand Traverse Bay' },
  description:
    'Weekly fishing reports, smallmouth bass tips, and seasonal guides from Captain Butch on Grand Traverse Bay. 20+ years of expertise.',
  openGraph: {
    title: 'Fishing Reports & Tips | TC Bass Destination Charters',
    description:
      'Fishing reports, bass fishing tips, and seasonal updates from Captain Butch on Grand Traverse Bay.',
    images: ['/images/hero/header-bg.jpg'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
