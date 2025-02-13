'use client';
import PS1 from '../terminal/PS1';

export default function PartnersSection() {
    return (
        <section className="bg-black py-12 font-mono" id="partners">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12">
                    <PS1 currentDir="~/partners" customCommand="ls" className="text-2xl sm:text-3xl font-bold text-white mb-6 glitch-text" />
                </div>
            </div>
        </section>
    );
}