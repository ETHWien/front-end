import { SITE_CONFIG } from '@/constants';

export default function Footer() {
    return (
        <footer className="bg-[#1C1C1C] py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Footer header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-white mb-6">
                        <div className="w-2 h-2 bg-white rotate-45" />
                        <span>Connect With Us</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Stay Updated
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl">
                        Join our community and stay informed about the latest updates,
                        announcements, and opportunities.
                    </p>
                </div>

                {/* Footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gray-800">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                            {SITE_CONFIG.name}
                        </h3>
                        <p className="text-gray-300">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/schedule" className="text-gray-300 hover:text-white transition-colors">
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a href="/sponsors" className="text-gray-300 hover:text-white transition-colors">
                                    Sponsors
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.contact.email}`}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE_CONFIG.contact.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE_CONFIG.contact.social.discord}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-[#252525] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-black px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                    <a
                        href={SITE_CONFIG.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        {SITE_CONFIG.website.replace('https://', '')}
                    </a>
                </div>
            </div>
        </footer>
    );
} 