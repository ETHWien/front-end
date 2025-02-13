'use client';

import Image from 'next/image';
import PS1 from '../terminal/PS1';

const VENUE_IMAGES = [
    { src: '/venue/image7.jpg', alt: 'Modern Office Space' },
    { src: '/venue/image6.jpg', alt: 'Event Space Setup' },
    { src: '/venue/image9.jpg', alt: 'Panoramic City View' },
    { src: '/venue/image13.jpg', alt: 'Coworking Area' },
    { src: '/venue/image8.jpg', alt: 'Rooftop Terrace' },
    { src: '/venue/image3.jpg', alt: 'Meeting Room' },
];

export default function VenueGallery() {
    return (
        <section className="bg-black py-12 font-mono" id="venue">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-2 text-[#0F0] mb-6">
                    <PS1 currentDir="~" customCommand="kitty +kitten icat venue_images/*" className="text-2xl sm:text-3xl font-bold text-white mb-6 glitch-text" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {VENUE_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-video overflow-hidden border border-gray-800 hover:border-[#0F0] transition-all duration-300"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 