import Navigation from '@/components/layout/Navigation';
import AboutSection from '@/components/about/AboutSection';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navigation />
            <div className="pt-20">
                <AboutSection />
            </div>
            <Footer />
        </main>
    );
} 