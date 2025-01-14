import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden font-mono">
            {/* Background Image with glitch effect */}
            <div className="absolute inset-0">
                <Image
                    src="/EthVienna.jpg"
                    alt="ETH Vienna Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="max-w-6xl mx-auto w-full px-4 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 relative z-10">
                <div className="flex-1 space-y-8">
                    <div>
                        <div className="flex items-center gap-2 text-[#0F0] mb-6">
                            <span className="text-[#0F0]">root@ethvienna:~$</span>
                            <span className="animate-pulse">▊</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 glitch-text">
                            ETH_VIENNA
                            <span className="block text-[#0F0] mt-2">HACK_2024</span>
                        </h1>

                        <p className="text-xl text-[#0F0] max-w-xl font-mono">
                            Initializing decentralized protocol...
                            <br />
                            Loading blockchain innovations...
                            <br />
                            System ready for deployment.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="/register"
                            className="inline-block border border-[#0F0] text-[#0F0] px-8 py-3 hover:bg-[#0F0] hover:text-black transition-colors font-mono"
                        >
                            ./register.sh
                        </a>
                        <a
                            href="/about"
                            className="inline-block border border-gray-800 text-gray-400 px-8 py-3 hover:border-[#0F0] hover:text-[#0F0] transition-colors font-mono"
                        >
                            --help
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
