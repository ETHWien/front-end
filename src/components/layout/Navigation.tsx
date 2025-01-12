'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              ETH Vienna
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">
                About
              </Link>
              <Link href="/schedule" className="text-gray-300 hover:text-white px-3 py-2">
                Schedule
              </Link>
              <Link href="/sponsors" className="text-gray-300 hover:text-white px-3 py-2">
                Sponsors
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 