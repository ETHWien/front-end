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
        <section className="bg-[#1C1C1C] py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-white mb-6">
                        <div className="w-2 h-2 bg-white rotate-45" />
                        <span>Speakers</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Featured Speakers
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl">
                        Learn from industry leaders and blockchain experts who are shaping the future of Web3.
                    </p>
                </div>

                {/* Speakers grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SPEAKERS.map((speaker) => (
                        <div
                            key={speaker.name}
                            className="text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="rounded-full object-cover"
                                    sizes="(max-width: 768px) 192px, 192px"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {speaker.name}
                            </h3>
                            <p className="text-gray-300">
                                {speaker.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 