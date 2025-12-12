import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book your bass fishing charter on Grand Traverse Bay. Contact Captain Butch at (231) 883-2200 or fill out our booking form.',
  openGraph: {
    title: 'Contact Us | TC Bass Destination Charters',
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
