import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/EthVienna.jpg"
                    alt="ETH Vienna Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
            </div>

            <div className="max-w-6xl mx-auto w-full px-4 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 relative z-10">
                {/* Left content */}
                <div className="flex-1 space-y-8">
                    <div>
                        <div className="flex items-center gap-2 text-white mb-6">
                            <div className="w-2 h-2 bg-white rotate-45" />
                            <span>Ethereum Vienna Hackathon</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Explore
                        </h1>

                        <p className="text-xl text-gray-300 max-w-xl">
                            Discover cutting-edge projects, connect with tech enthusiasts & be inspired by the
                            future of blockchain technology.
                        </p>
                    </div>

                    <div>
                        <a
                            href="/register"
                            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            Join now
                        </a>
                    </div>
                </div>

                {/* Right content space - empty but maintaining layout */}
                <div className="flex-1 relative w-full max-w-lg" />
            </div>
        </div>
    )
}
