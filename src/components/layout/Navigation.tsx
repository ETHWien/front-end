'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
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
        </div>
      </div>
    </nav>
  );
} 