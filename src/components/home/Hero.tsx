export default function Hero() {
    return (
        <div className="relative min-h-screen bg-[#1C1C1C] flex items-center">
            <div className="max-w-6xl mx-auto w-full px-4 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16">
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

                {/* Right image */}
                <div className="flex-1 relative w-full max-w-lg">
                    <img
                        src="/Image.png"
                        alt="Vienna Karlskirche Illustration"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}
