'use client';

import { SITE_CONFIG } from '@/constants';
import VenueGallery from './VenueGallery';

export default function VenueSection() {
    return (
        <section className="bg-[#1C1C1C] py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-white mb-6">
                        <div className="w-2 h-2 bg-white rotate-45" />
                        <span>The Venue</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        District Living
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl">
                        Join us at one of Vienna&apos;s most innovative spaces, perfectly equipped
                        for collaboration, networking, and building the future of Web3.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                    <div className="bg-[#252525] p-8 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-2">When</h3>
                        <p className="text-gray-300">{SITE_CONFIG.date}</p>
                    </div>

                    <div className="bg-[#252525] p-8 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-2">Where</h3>
                        <p className="text-gray-300">{SITE_CONFIG.venue.address}</p>
                    </div>

                    <div className="bg-[#252525] p-8 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-2">Getting There</h3>
                        <p className="text-gray-300">Near U2 Donaustadtbrücke</p>
                    </div>
                </div>

                <div className="space-y-16">
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

                    <VenueGallery />
                </div>
            </div>
        </section>
    );
} 