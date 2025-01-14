import Image from 'next/image';

const SPEAKERS = [
    {
        name: 'Dr. Maria Schmidt',
        role: 'Blockchain Researcher',
        image: '/speakers/Image1.png',
    },
    {
        name: 'Alex Novak',
        role: 'Ethereum Developer Advocate',
        image: '/speakers/Image2.png',
    },
    {
        name: 'Prof. Anna Weber',
        role: 'Smart Contracts Expert',
        image: '/speakers/Image3.png',
    },
];

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
                    {SPEAKERS.map((speaker) => (
                        <div
                            key={speaker.name}
                            className="border border-gray-800 p-6 hover:border-[#0F0] transition-all duration-300"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    sizes="(max-width: 768px) 192px, 192px"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F0] mb-2 text-center">
                                {speaker.name}
                            </h3>
                            <p className="text-gray-400 text-center">
                                {speaker.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 