'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Speaker } from '@/types/Speaker';
import SpeakerChat from './SpeakerChat';

interface SpeakerCardProps {
    speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsChatOpen(true)}
                className="group cursor-pointer border border-[#0F0] p-6 
                         shadow-[0_0_10px_rgba(0,255,0,0.1)] 
                         hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] 
                         transition-all duration-300"
            >
                <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover transition-all duration-300 
                                 filter grayscale group-hover:grayscale-0 
                                 group-hover:scale-110"
                    />
                </div>
                <div className="text-center">
                    <h3 className="text-[#0F0] text-xl font-bold mb-2 glitch-text">
                        {speaker.name}
                    </h3>
                    <p className="text-gray-400">
                        {speaker.role}
                    </p>
                </div>
            </div>

            <SpeakerChat
                speaker={speaker}
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </>
    );
} 