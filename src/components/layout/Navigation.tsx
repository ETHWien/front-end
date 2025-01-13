'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-[#1C1C1C]/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rotate-45" />
            <Link href="/" className="text-white font-semibold text-lg">
              ETH Vienna
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/schedule"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Schedule
              </Link>
              <Link
                href="/sponsors"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sponsors
              </Link>
              <Link
                href="/register"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#1C1C1C] border-t border-gray-800`}>
        <div className="px-4 py-4 space-y-3">
          <Link
            href="/about"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/schedule"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="/sponsors"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            href="/register"
            className="block bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
} 