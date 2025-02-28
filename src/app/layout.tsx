import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BreathingEffect from '@/components/effects/BreathingEffect';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ETH Wien",
  description: "ETH Wien - The Premier Ethereum Event in Vienna",
  icons: {
    icon: [
      {
        url: '/ETH_WIEN.jpg',
        type: 'image/jpeg',
      }
    ],
    apple: '/ETH_WIEN.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          {children}
          <BreathingEffect />
        </div>
      </body>
    </html>
  );
}
