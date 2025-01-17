import Image from 'next/image';
import { Sponsor, SponsorTier } from '@/types/sponsor';

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

export default function SponsorsSection() {
    const sponsorsByTier = SPONSORS.reduce((acc, sponsor) => {
        if (!acc[sponsor.tier]) {
            acc[sponsor.tier] = [];
        }
        acc[sponsor.tier].push(sponsor);
        return acc;
    }, {} as Record<SponsorTier, Sponsor[]>);

    return (
        <section className="bg-black py-12 font-mono">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-3xl font-bold text-white mb-6 glitch-text">
                        root@eth_vienna:/etc/apt/sources.list.d/
                    </h2>

                    <p className="text-xl text-[#0F0] max-w-2xl">
                        Loading alliance data...
                        <br />
                        Establishing connections...
                    </p>
                </div>

                {/* Sponsors grid by tier */}
                <div className="space-y-16">
                    {Object.entries(TIER_CONFIG).map(([tier, config]) => {
                        const tierSponsors = sponsorsByTier[tier as SponsorTier] || [];
                        if (tierSponsors.length === 0) return null;

                        return (
                            <div key={tier} className="space-y-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#0F0]">$</span>
                                    <h3 className="text-2xl font-bold text-[#0F0]">
                                        {config.title}
                                    </h3>
                                </div>

                                <div className={`grid ${config.className} gap-8 items-center justify-items-center`}>
                                    {tierSponsors.map((sponsor) => (
                                        <a
                                            key={sponsor.name}
                                            href={sponsor.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative group w-full"
                                        >
                                            <div className={`relative ${config.imageSize} border border-gray-800 hover:border-[#0F0] p-4 transition-all duration-300 group-hover:bg-black/50`}>
                                                <Image
                                                    src={sponsor.logo}
                                                    alt={`${sponsor.name} logo`}
                                                    fill
                                                    className="object-contain p-4 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                                                />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Become a sponsor CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center">
                        <a
                            href="/sponsors"
                            className="inline-block border border-[#0F0] text-[#0F0] px-8 py-3 hover:bg-[#0F0] hover:text-black transition-colors font-mono"
                        >
                            ./join-alliance.sh
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}