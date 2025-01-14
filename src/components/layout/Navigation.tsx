'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { path: '/about', label: 'About' },
  { path: '/schedule', label: 'Schedule' },
  { path: '/sponsors', label: 'Sponsors' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Don't show register button on register page
  const showRegister = pathname !== '/register';

  // Helper to determine if a path is active
  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#0F0]/30 font-mono">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-[#0F0]">$</span>
            <Link href="/" className="text-[#0F0] font-mono text-lg">
              ETH_VIENNA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {NAV_ITEMS.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`transition-colors ${isActive(path)
                    ? 'text-[#0F0] border border-[#0F0] px-4 py-2'
                    : 'text-gray-400 hover:text-[#0F0]'
                    }`}
                >
                  {`/${label}`}
                </Link>
              ))}
              {showRegister && (
                <Link
                  href="/register"
                  className={`px-4 py-2 transition-colors ${pathname === '/'
                    ? 'border border-[#0F0] text-[#0F0] hover:bg-[#0F0] hover:text-black'
                    : 'border border-gray-800 text-gray-400 hover:border-[#0F0] hover:text-[#0F0]'
                    }`}
                >
                  ./register.sh
                </Link>
              )}
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
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`block transition-colors ${isActive(path)
                ? 'text-[#0F0] border border-[#0F0] px-4 py-2'
                : 'text-gray-400 hover:text-[#0F0]'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {`/${label}`}
            </Link>
          ))}
          {showRegister && (
            <Link
              href="/register"
              className={`block px-4 py-2 text-center transition-colors ${pathname === '/'
                ? 'border border-[#0F0] text-[#0F0] hover:bg-[#0F0] hover:text-black'
                : 'border border-gray-800 text-gray-400 hover:border-[#0F0] hover:text-[#0F0]'
                }`}
              onClick={() => setIsOpen(false)}
            >
              ./register.sh
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
} 