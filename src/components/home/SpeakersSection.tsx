import { speakers } from '@/data/speakers';
import SpeakerCard from '../speakers/SpeakerCard';
import PS1 from '../terminal/PS1';

export default function SpeakersSection() {
    return (
        <section className="bg-black py-12 font-mono">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12">
                    <PS1 currentDir="~" customCommand="alsamixer -c Vienna" className="text-2xl sm:text-3xl font-bold text-white mb-6 glitch-text" />
                </div>
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