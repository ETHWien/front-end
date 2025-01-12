export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black text-center px-4 pt-16 md:pt-20">
            <div className="space-y-8 w-full">
                <h1 className="text-5xl sm:text-7xl font-bold">
                    <span className="text-white">ETH Vienna</span>
                    <span className="block text-[#6C3CE9]">Hackathon 2024</span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                    Join hundreds of builders, designers, and innovators for Europe&apos;s
                    premier Ethereum hackathon experience
                </p>

                <div className="flex flex-col gap-4 max-w-md mx-auto">
                    <a
                        href="/register"
                        className="bg-[#6C3CE9] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5B32C7] transition-colors"
                    >
                        Register Now
                    </a>
                    <a
                        href="/about"
                        className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                        Learn More
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
                    <div className="bg-[#111111] p-6 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-2">When</h3>
                        <p className="text-gray-300">June 15-17, 2024</p>
                    </div>
                    <div className="bg-[#111111] p-6 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-2">Where</h3>
                        <p className="text-gray-300">Vienna, Austria</p>
                    </div>
                    <div className="bg-[#111111] p-6 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-2">Prize Pool</h3>
                        <p className="text-gray-300">$50,000+</p>
                    </div>
                </div>
            </div>
        </div>
    );
}