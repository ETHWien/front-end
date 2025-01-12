export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
                    ETH Vienna
                    <span className="block text-blue-500">Hackathon 2024</span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join hundreds of builders, designers, and innovators for Europe&apos;s
                    premier Ethereum hackathon experience
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/register"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Register Now
                    </a>
                    <a
                        href="/about"
                        className="inline-block border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                        Learn More
                    </a>
                </div>

                {/* Event details */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">When</h3>
                        <p className="text-gray-300">June 15-17, 2024</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">Where</h3>
                        <p className="text-gray-300">Vienna, Austria</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">Prize Pool</h3>
                        <p className="text-gray-300">$50,000+</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 