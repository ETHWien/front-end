import { SITE_CONFIG } from '@/constants';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">{SITE_CONFIG.name}</h3>
                        <p className="text-sm">
                            {SITE_CONFIG.description}
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
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.contact.email}`}
                                    className="hover:text-white"
                                >
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE_CONFIG.contact.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SITE_CONFIG.contact.social.discord}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    Discord
                                </a>
                            </li>
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
                                className="w-full bg-[#6C3CE9] text-white px-4 py-2 rounded-lg hover:bg-[#5B32C7]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                        <br />
                        <a
                            href={SITE_CONFIG.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            {SITE_CONFIG.website.replace('https://', '')}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
} 