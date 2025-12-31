'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BassIcon } from './BassIcon';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const smallmouthLinks = [
    { name: 'Smallmouth Bass Charters', href: '/smallmouth-bass-charters-traverse-city' },
    { name: 'Grand Traverse Bay Smallmouth', href: '/grand-traverse-bay-smallmouth-bass-fishing' },
    { name: 'Traverse City Fishing Guide', href: '/traverse-city-smallmouth-bass-fishing-guide' },
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
          <BassIcon className="h-8 w-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none tracking-wide">TC BASS</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500">Destination Charters</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-cyan-500 transition-colors uppercase tracking-wider"
          >
            Home
          </Link>

          {/* Smallmouth Bass Charters Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-cyan-500 transition-colors uppercase tracking-wider"
            >
              Smallmouth Charters
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-navy-900 rounded-lg shadow-xl border border-navy-800 py-2 z-50">
                {smallmouthLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-500 hover:bg-navy-800 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/trips"
            className="text-sm font-medium hover:text-cyan-500 transition-colors uppercase tracking-wider"
          >
            Rates
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-cyan-500 transition-colors uppercase tracking-wider"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium hover:text-cyan-500 transition-colors uppercase tracking-wider"
          >
            FAQ
          </Link>
          <Link
            href="/trips"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/50"
          >
            Book Now
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
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-navy-800 p-4 flex flex-col gap-2 shadow-xl">
          <Link
            href="/"
            className="block text-lg font-medium text-gray-300 hover:text-cyan-500 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Smallmouth Section */}
          <div className="border-t border-navy-800 pt-2 mt-2">
            <span className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Smallmouth Charters</span>
            {smallmouthLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-gray-300 hover:text-cyan-500 py-2 pl-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-navy-800 pt-2 mt-2">
            <Link
              href="/trips"
              className="block text-lg font-medium text-gray-300 hover:text-cyan-500 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rates
            </Link>
            <Link
              href="/about"
              className="block text-lg font-medium text-gray-300 hover:text-cyan-500 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="block text-lg font-medium text-gray-300 hover:text-cyan-500 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>

          <Link
            href="/trips"
            className="w-full text-center bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-md font-medium mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};
