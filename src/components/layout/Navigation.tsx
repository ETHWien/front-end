'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/constants';

const formatTime = (seconds: number): string => {
  if (seconds <= 0) return '00:00:00';

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${days > 0 ? `${days} days, ` : ''}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState((SITE_CONFIG.dateTime.getTime() - new Date().getTime()) / 1000); // 36 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <div className="text-[#0F0] font-mono">
                <span>{formatTime(timeRemaining)}</span>
              </div>
            </div>
          </div>

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
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
} 