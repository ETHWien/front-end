
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
        <section className="bg-[#1C1C1C] py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-white mb-6">
                        <div className="w-2 h-2 bg-white rotate-45" />
                        <span>Sponsors</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Our Partners
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl">
                        Join these industry leaders in supporting the future of Ethereum development.
                    </p>
                </div>

                {/* Sponsors grid by tier */}
                <div className="space-y-16">
                    {Object.entries(TIER_CONFIG).map(([tier, config]) => {
                        const tierSponsors = sponsorsByTier[tier as SponsorTier] || [];
                        if (tierSponsors.length === 0) return null;

                        return (
                            <div key={tier} className="space-y-8">
                                <h3 className="text-2xl font-semibold text-white">
                                    {config.title}
                                </h3>
                                <div className={`grid ${config.className} gap-8 items-center justify-items-center`}>
                                    {tierSponsors.map((sponsor) => (
                                        <a
                                            key={sponsor.name}
                                            href={sponsor.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative group"
                                        >
                                            <div className={`relative ${config.imageSize} bg-[#252525] rounded-lg p-4 transition-all duration-300 group-hover:bg-[#303030]`}>
                                                <img
                                                    src={sponsor.logo}
                                                    alt={`${sponsor.name} logo`}
                                                    className="object-contain p-4 filter brightness-0 invert opacity-80 group-hover:opacity-100 w-full h-full"
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
                    <a
                        href="/sponsors"
                        className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Become a Sponsor
                    </a>
                </div>
            </div>
        </section>
    );
} 