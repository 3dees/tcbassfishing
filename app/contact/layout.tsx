import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Book a Charter | Traverse City Bass Fishing' },
  description:
    'Book your Grand Traverse Bay bass fishing charter or ask Captain Butch a question. Call (231) 883-2200 or use our online form.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Traverse City Bass Destination Charters',
    description: 'Book your bass fishing charter on Grand Traverse Bay. Contact Captain Butch today.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
