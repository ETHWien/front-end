'use client';
import PS1 from '../terminal/PS1';
import Image from 'next/image';

interface Partner {
    name: string;
    logo: string;
    width: number;
    height: number;
    link?: string;
}

const partners: Partner[] = [
    {
        name: 'DLT Austria',
        logo: '/partners/DLTA_black.png',
        width: 200,
        height: 100,
        link: 'https://dltaustria.com'
    },
    {
        name: 'Web3 Hub Vienna',
        logo: '/partners/web3hub.png',
        width: 200,
        height: 100,
        link: 'https://web3hub.wien'
    },
    {
        name: 'dRPC',
        logo: '/partners/dRPC_fullcollor_white.svg',
        width: 200,
        height: 100,
        link: 'https://drpc.org'
    },
    {
        name: 'ETH Bucharest',
        logo: '/partners/ETH-Bucharest-Logo-white.svg',
        width: 300,
        height: 100,
        link: 'https://ethbucharest.xyz'
    },
    {
        name: 'Sonic',
        logo: '/partners/SonicLabs_White.svg',
        width: 200,
        height: 100,
        link: 'https://soniclabs.com'
    },
    {
        name: 'ETH Bratislava',
        logo: '/partners/ETHBratislava-horizental.png',
        width: 200,
        height: 100,
        link: 'https://ethbratislava.com'
    }
];

export default function PartnersSection() {
    return (
        <section className="bg-black py-12 font-mono" id="partners">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12">
                    <PS1
                        currentDir="~"
                        customCommand="ip a | grep partners"
                        className="text-2xl sm:text-3xl font-bold text-white mb-6 glitch-text"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {partners.map((partner) => (
                        <div key={partner.name} className="w-full flex justify-center">
                            {partner.link ? (
                                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        width={partner.width}
                                        height={partner.height}
                                        className="opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            ) : (
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} Logo`}
                                    width={partner.width}
                                    height={partner.height}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}