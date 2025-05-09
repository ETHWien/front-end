import Navigation from '@/components/layout/Navigation';
import SponsorsSection from '@/components/home/SponsorsSection';
import Footer from '@/components/layout/Footer';

export default function SponsorsPage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C]">
            <Navigation />
            <div className="pt-20">
                <SponsorsSection />
            </div>
            <Footer />
        </main>
    );
} 