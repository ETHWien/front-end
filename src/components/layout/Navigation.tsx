'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '@/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#0F0]/30 font-mono">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-[#0F0]">#</span>
            <Link href="/" className="text-[#0F0] font-mono text-lg">
              {SITE_CONFIG.name}
            </Link>
          </div>

          {/* Desktop Navigation */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F0]"
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <span className="block">{'>'}</span>
              ) : (
                <span className="block">{'x'}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black border-t border-[#0F0]/30`}>
        <div className="px-4 py-4 space-y-3">
          <div className="text-[#0F0] font-mono">
            <span>Date: {SITE_CONFIG.date}</span>
          </div>
        </div>
      </div>
    </nav>
  );
} 