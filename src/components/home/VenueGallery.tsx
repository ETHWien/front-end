'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <div>
            <div className="flex items-center gap-2 text-[#0F0] mb-6">
                <span className="text-[#0F0]">ls</span>
                <span className="text-[#0F0]">venue_images/</span>
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
    );
} 