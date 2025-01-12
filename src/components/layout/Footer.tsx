export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">ETH Vienna</h3>
                        <p className="text-sm">
                            The biggest Ethereum hackathon in Vienna, bringing together developers,
                            designers, and innovators.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:text-white">About</a></li>
                            <li><a href="/schedule" className="hover:text-white">Schedule</a></li>
                            <li><a href="/sponsors" className="hover:text-white">Sponsors</a></li>
                            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-md font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:info@ethvienna.com" className="hover:text-white">info@ethvienna.com</a></li>
                            <li><a href="https://twitter.com/ethvienna" className="hover:text-white">Twitter</a></li>
                            <li><a href="https://discord.gg/ethvienna" className="hover:text-white">Discord</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-md font-semibold mb-4">Newsletter</h4>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; {new Date().getFullYear()} ETH Vienna. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 