
import ScheduleSection from '@/components/schedule/ScheduleSection';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';

export default function SchedulePage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C]">
            <Navigation />
            <div className="pt-20">
                <ScheduleSection />
            </div>
            <Footer />
        </main>
    );
}