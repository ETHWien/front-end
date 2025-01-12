'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Select the best 16 images
const VENUE_IMAGES = Array.from({ length: 15 }, (_, i) => ({
    src: `/venue/image${i + 1}.jpg`,
    alt: `Web3 Hub Vienna Space ${i + 1}`,
}));

export default function VenueGallery() {
    return (
        <div className="mt-16">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl font-semibold text-white mb-8 text-center"
            >
                Explore the Venue
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {VENUE_IMAGES.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative overflow-hidden rounded-lg ${index === 0 ? 'sm:col-span-2 md:col-span-2 h-80' : 'h-64'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white p-4 text-sm w-full">
                                {image.alt}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
} 