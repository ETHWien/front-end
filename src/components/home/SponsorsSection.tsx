import Image from 'next/image';
import { Sponsor } from '@/types/sponsor';
import PS1 from '../terminal/PS1';

const SPONSORS: Sponsor[] = [
    {
        name: 'Taceo',
        logo: '/sponsors/TA_dark_icon.svg',
        website: 'https://taceo.io',
        tier: 'shnitzel'
    }
];

const TIER_CONFIG = {
    sausage: {
        title: 'Sausage Sponsors',
        width: 300,
        height: 100
    },
    shnitzel: {
        title: 'Shnitzel Sponsors',
        width: 300,
        height: 100
    },
    grostl: {
        title: 'Grostl Sponsors',
        width: 300,
        height: 100
    }
};

export default function SponsorsSection() {
    return (
        <section className="bg-black py-12 font-mono" id="sponsors">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12">
                    <PS1 currentDir="~" customCommand="cat /etc/apt/sources.list.d/" className="text-2xl sm:text-3xl font-bold text-white mb-6 glitch-text" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {SPONSORS.map((sponsor) => (
                        <div key={sponsor.name} className="w-full flex justify-center">
                            <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    width={TIER_CONFIG[sponsor.tier].width}
                                    height={TIER_CONFIG[sponsor.tier].height}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}