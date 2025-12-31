import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { BassIcon } from './BassIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BassIcon className="h-6 w-6 text-cyan-500" />
              <span className="font-serif font-bold text-xl">TC BASS CHARTERS</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Providing premier bass fishing experiences since 2004. Licensed, insured, and passionate about the sport.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link></li>
              <li><Link href="/trips" className="hover:text-cyan-500 transition-colors">Trips & Rates</Link></li>
              <li><Link href="/gallery" className="hover:text-cyan-500 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Smallmouth Bass Fishing Link Cluster */}
          <div>
            <h4 className="font-bold mb-4 text-white">Smallmouth Bass Fishing</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/smallmouth-bass-charters-traverse-city" className="hover:text-cyan-500 transition-colors">Smallmouth Bass Charters</Link></li>
              <li><Link href="/grand-traverse-bay-smallmouth-bass-fishing" className="hover:text-cyan-500 transition-colors">Grand Traverse Bay Fishing</Link></li>
              <li><Link href="/traverse-city-smallmouth-bass-fishing-guide" className="hover:text-cyan-500 transition-colors">Traverse City Guide</Link></li>
              <li><Link href="/grand-traverse-bay-fishing-species" className="hover:text-cyan-500 transition-colors">Species Overview</Link></li>
              <li><Link href="/why-smallmouth-only" className="hover:text-cyan-500 transition-colors">Why Smallmouth Only</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/captain.butch.derickson/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tcbassdestinationcharters/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Traverse City Bass Destination Charters. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/terms" className="text-gray-600 hover:text-cyan-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-cyan-500 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
