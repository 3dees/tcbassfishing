import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about TC Bass Destination Charters. Learn about rates, what to bring, fishing licenses, and more.',
  openGraph: {
    title: 'FAQ | TC Bass Destination Charters',
    description: 'Find answers to common questions about TC Bass Destination Charters.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
