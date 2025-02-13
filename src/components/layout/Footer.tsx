import { SITE_CONFIG } from '@/constants';

export default function Footer() {
    return (
        <footer className="bg-black py-12 font-mono border-t border-[#0F0]/30">
            <div className="max-w-6xl mx-auto px-4">
                {/* Footer header */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white mb-6 glitch-text">
                        Connect_With_Us
                    </h2>
                </div>

                {/* Footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#0F0]/30">
                    <div>
                        <h3 className="text-xl font-bold text-[#0F0] mb-4">
                            {SITE_CONFIG.name}
                        </h3>
                        <p className="text-gray-400">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-[#0F0] mb-4">System_Links</h4>
                        <ul className="space-y-3">
                            {[
                                ['about', 'About'],
                                ['schedule', 'Schedule'],
                                ['sponsors', 'Sponsors'],
                                ['faq', 'FAQ'],
                            ].map(([path, label]) => (
                                <li key={path}>
                                    <a
                                        href={`#${path}`}
                                        className="text-gray-400 hover:text-[#0F0] transition-colors"
                                    >
                                        /{label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-[#0F0] mb-4">Contact_Info</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.contact.email}`}
                                    className="text-gray-400 hover:text-[#0F0] transition-colors"
                                >
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                            {Object.entries(SITE_CONFIG.contact.social).map(([platform, url]) => (
                                <li key={platform}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#0F0] transition-colors"
                                    >
                                        {platform}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-[#0F0] mb-4">Subscribe</h4>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="enter_email.."
                                className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white placeholder-gray-500 focus:border-[#0F0] focus:outline-none font-mono"
                            />
                            <button
                                type="submit"
                                className="w-full border border-[#0F0] text-[#0F0] px-4 py-3 hover:bg-[#0F0] hover:text-black transition-colors"
                            >
                                ./subscribe.sh
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="pt-8 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} {SITE_CONFIG.name} | All_Rights_Reserved
                    </p>
                    <a
                        href={SITE_CONFIG.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0F0] transition-colors"
                    >
                        {SITE_CONFIG.website.replace('https://', '')}
                    </a>
                </div>
            </div>
        </footer>
    );
} 