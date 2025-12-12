'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Anchor, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Trips & Rates', href: '/services' },
    { name: 'About Captain', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-navy-900 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-white">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <Anchor className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none tracking-wide">TC BASS</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500">Destination Charters</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-cyan-500 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/50"
          >
            <Phone className="h-4 w-4" />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-cyan-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-navy-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-gray-300 hover:text-cyan-500 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="w-full text-center bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-md font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Your Trip
          </Link>
        </div>
      )}
    </nav>
  );
};
