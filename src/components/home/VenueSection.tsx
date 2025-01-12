'use client';

import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/constants';
import VenueGallery from './VenueGallery';

export default function VenueSection() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Venue Location
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Join us at District Living, the venue for ETH Vienna
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {SITE_CONFIG.venue.name}
                            </h3>
                            <p className="text-gray-400">
                                {SITE_CONFIG.venue.address}
                            </p>
                            <div className="flex gap-4 mt-4">
                                <a
                                    href={SITE_CONFIG.venue.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-400 hover:text-blue-300"
                                >
                                    Visit Website →
                                </a>
                                <a
                                    href={SITE_CONFIG.venue.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-400 hover:text-blue-300"
                                >
                                    Open in Maps →
                                </a>
                            </div>
                        </div>

                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Getting There
                            </h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>• Near U2 Donaustadtbrücke station</li>
                                <li>• Bus lines 92A, 92B</li>
                                <li>• Parking available at the venue</li>
                                <li>• 20 minutes from city center</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                                &q=District+Living,Vienna
                                &center=${SITE_CONFIG.venue.coordinates.lat},${SITE_CONFIG.venue.coordinates.lng}
                                &zoom=15`}
                        />
                    </div>
                </div>

                <VenueGallery />
            </div>
        </section>
    );
} 