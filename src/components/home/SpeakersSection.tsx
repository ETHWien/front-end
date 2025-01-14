import { speakers } from '@/data/speakers';
import SpeakerCard from '../speakers/SpeakerCard';

export default function SpeakersSection() {
    return (
        <section className="bg-black py-12 font-mono">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 glitch-text">
                        System_Experts
                    </h2>
                    <p className="text-xl text-[#0F0] max-w-2xl">
                        Loading profiles...
                        <br />
                        Accessing blockchain expertise...
                    </p>
                </div>

                {/* Speakers grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {speakers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.id}
                            speaker={speaker}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 