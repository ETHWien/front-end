'use client';

import { SITE_CONFIG } from '@/constants';
import VenueGallery from './VenueGallery';

export default function VenueSection() {
    return (
        <section className="bg-black py-12 font-mono">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-[#0F0] mb-6">
                        <span className="animate-pulse">▊</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 glitch-text">
                        Base_Location
                    </h2>

                    <p className="text-xl text-[#0F0] max-w-2xl">
                        Initializing coordinates...
                        <br />
                        Loading venue specifications...
                    </p>
                </div>

                {/* Info boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                    <div className="border border-gray-800 p-8 hover:border-[#0F0] transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#0F0] mb-2">TIME_STAMP</h3>
                        <p className="text-gray-400">{SITE_CONFIG.date}</p>
                    </div>

                    <div className="border border-gray-800 p-8 hover:border-[#0F0] transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#0F0] mb-2">LOCATION</h3>
                        <p className="text-gray-400">{SITE_CONFIG.venue.address}</p>
                    </div>

                    <div className="border border-gray-800 p-8 hover:border-[#0F0] transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#0F0] mb-2">ACCESS_POINT</h3>
                        <p className="text-gray-400">Near U2 Donaustadtbrücke</p>
                    </div>
                </div>

                {/* Map and Gallery */}
                <div className="space-y-16">
                    {/* Map */}
                    <div className="relative h-[400px] border border-gray-800 overflow-hidden">
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

                    {/* Gallery */}
                    <VenueGallery />
                </div>
            </div>
        </section>
    );
}