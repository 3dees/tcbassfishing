import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fishing Reports & Bass Tips - Traverse City, Grand Traverse Bay',
  description:
    'Weekly fishing reports, smallmouth bass tips, and seasonal guides from Captain Butch on Grand Traverse Bay. Real advice from 20+ years on the water.',
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
