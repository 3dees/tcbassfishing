import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Bass Charter FAQ | Traverse City, Michigan' },
  description:
    'Common questions about our Traverse City bass fishing charters: rates ($440-$660), what to bring, fishing licenses, cancellation policy.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Traverse City Bass Destination Charters',
    description: 'Find answers to common questions about Traverse City Bass Destination Charters.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
