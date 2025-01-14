import TerminalPrompt from '../terminal/TerminalPrompt';
import fs from 'fs';
import path from 'path';

// Read ASCII art at build time
const asciiArt = fs.readFileSync(path.join(process.cwd(), 'public/ascii-art.txt'), 'utf8');

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden font-mono">

            {/* ASCII Art Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
                <pre className="text-[#0F0] text-[4px] sm:text-[8px] whitespace-pre select-none">
                    {asciiArt}
                </pre>
            </div>

            <div className="max-w-6xl mx-auto w-full px-4 relative z-10">
                <div className="space-y-8 max-w-6xl">
                    <div>
                        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 glitch-text">
                            ETH_VIENNA
                            <span className="text-[#0F0]">_2025</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Join the most innovative Ethereum hackathon in Vienna.
                            36 hours of coding, learning, and building the future of Web3.
                        </p>
                    </div>

                    {/* Terminal Section */}
                    <div className="w-full">
                        <TerminalPrompt />
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
