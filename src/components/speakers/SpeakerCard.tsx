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
                className="group cursor-pointer border border-transparent hover:border-[#0F0] p-8 
                         hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] 
                         transition-all duration-300 bg-black"
            >
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                        {speaker.image.includes('.mp4') ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-full object-cover"
                            >
                                <source src={speaker.image} type="video/mp4" />
                            </video>
                        ) : (
                            <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="rounded-full object-cover"
                                sizes="(max-width: 128px) 100vw, 128px"
                            />
                        )}
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="text-[#0F0] text-2xl font-bold font-mono">
                            {speaker.name}
                        </h3>
                        <p className="text-gray-400 font-mono">
                            {speaker.role}
                        </p>
                    </div>
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