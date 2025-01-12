'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              ETH Vienna
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/about"
                className={`${isActive('/about')
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md`}
              >
                About
              </Link>
              <Link
                href="/schedule"
                className={`${isActive('/schedule')
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md`}
              >
                Schedule
              </Link>
              <Link
                href="/sponsors"
                className={`${isActive('/sponsors')
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md`}
              >
                Sponsors
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
          <Link
            href="/about"
            className={`${isActive('/about')
                ? 'text-white bg-gray-900'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/schedule"
            className={`${isActive('/schedule')
                ? 'text-white bg-gray-900'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="/sponsors"
            className={`${isActive('/sponsors')
                ? 'text-white bg-gray-900'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
              } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setIsOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            href="/register"
            className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
} 