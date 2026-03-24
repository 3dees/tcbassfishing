import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fishing Reports & Tips',
  description:
    'Fishing reports, bass fishing tips, and seasonal updates from Captain Butch on Grand Traverse Bay. Expert advice for smallmouth bass anglers.',
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
