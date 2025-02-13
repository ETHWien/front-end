'use client';

import Image from 'next/image';
import { Sponsor, SponsorTier } from '@/types/sponsor';
import PS1 from '../terminal/PS1';
const SPONSORS: Sponsor[] = [
];

const TIER_CONFIG = {
    diamond: {
        title: 'Diamond Sponsors',
        className: 'grid-cols-1 sm:grid-cols-2',
        imageSize: 'w-64 h-32'
    },
    gold: {
        title: 'Gold Sponsors',
        className: 'grid-cols-2 sm:grid-cols-3',
        imageSize: 'w-48 h-24'
    },
    silver: {
        title: 'Silver Sponsors',
        className: 'grid-cols-3 sm:grid-cols-4',
        imageSize: 'w-40 h-20'
    },
    bronze: {
        title: 'Bronze Sponsors',
        className: 'grid-cols-4 sm:grid-cols-6',
        imageSize: 'w-32 h-16'
    }
};

export default function PartnersSection() {
    const sponsorsByTier = SPONSORS.reduce((acc, sponsor) => {
        if (!acc[sponsor.tier]) {
            acc[sponsor.tier] = [];
        }
        acc[sponsor.tier].push(sponsor);
        return acc;
    }, {} as Record<SponsorTier, Sponsor[]>);

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
                Network Partners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 md:col-span-3">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Core Partners</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Core Partner Placeholders */}
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="aspect-square bg-[#0F0]/10 rounded-lg flex items-center justify-center">
                                <span className="text-[#0F0]/30">Partner Logo</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3 mt-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Ecosystem Partners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Ecosystem Partner Placeholders */}
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="aspect-square bg-[#0F0]/10 rounded-lg flex items-center justify-center">
                                <span className="text-[#0F0]/30">Partner Logo</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center">
                    <a
                        href="#sponsors"
                        className="inline-block border border-[#0F0] text-[#0F0] px-8 py-3 hover:bg-[#0F0] hover:text-black transition-colors font-mono"
                    >
                        ./join-alliance.sh
                    </a>
                </div>
            </div>
        </div>
    );
}