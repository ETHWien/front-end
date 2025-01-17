export default function AboutSection() {
    return (
        <section className="bg-black py-12 font-mono">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 glitch-text">
                        root@eth_vienna:~# whois ethereum.wien
                    </h2>

                    <p className="text-xl text-[#0F0] max-w-2xl">
                        Loading mission parameters...
                        <br />
                        Accessing core objectives...
                    </p>
                </div>

                {/* Content sections */}
                <div className="space-y-16">
                    {/* Mission */}
                    <div className="border border-gray-800 p-8 hover:border-[#0F0] transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#0F0] mb-6">
                            $ cat mission.txt
                        </h3>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                ETH_VIENNA is a premier hackathon bringing together developers, innovators,
                                and blockchain enthusiasts to build the future of decentralized technology.
                            </p>
                            <p>
                                Our mission is to foster innovation, collaboration, and knowledge sharing
                                within the Ethereum ecosystem while promoting Vienna as a hub for
                                blockchain development.
                            </p>
                        </div>
                    </div>

                    {/* What to Expect */}
                    <div className="border border-gray-800 p-8 hover:border-[#0F0] transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#0F0] mb-6">
                            $  cat event_features/*
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'hack.exe',
                                    description: '36 hours of intensive development, mentorship, and innovation.'
                                },
                                {
                                    title: 'workshops.sh',
                                    description: 'Expert-led sessions on blockchain development and Web3 technologies.'
                                },
                                {
                                    title: 'network.sys',
                                    description: 'Connect with industry leaders and like-minded developers.'
                                },
                                {
                                    title: 'prizes.dat',
                                    description: 'Compete for substantial prizes and funding opportunities.'
                                }
                            ].map((feature) => (
                                <div key={feature.title} className="space-y-2">
                                    <h4 className="text-lg font-bold text-[#0F0]">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Vienna */}
                    <div className="border border-gray-800 p-8 hover:border-[#0F0] transition-all duration-300">
                        <h3 className="text-2xl font-bold text-[#0F0] mb-6">
                            $ cat why_vienna.md
                        </h3>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                Vienna, a city at the crossroads of innovation and tradition, provides
                                the perfect backdrop for our hackathon. With its growing tech scene and
                                supportive startup ecosystem, Vienna is emerging as a key player in the
                                blockchain revolution.
                            </p>
                            <p>
                                Vienna&apos;s rich history of intellectual discourse and technological
                                advancement makes it an ideal location for fostering the next generation
                                of blockchain innovations.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center space-y-6">
                        <p className="text-[#0F0] text-lg">
                            Ready to join the revolution?
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="/register"
                                className="border border-[#0F0] text-[#0F0] px-8 py-3 hover:bg-[#0F0] hover:text-black transition-colors"
                            >
                                ./register.sh
                            </a>
                            <a
                                href="/schedule"
                                className="border border-gray-800 text-gray-400 px-8 py-3 hover:border-[#0F0] hover:text-[#0F0] transition-colors"
                            >
                                view_schedule --details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}