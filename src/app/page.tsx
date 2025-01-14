import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/home/Hero';
import SpeakersSection from '@/components/home/SpeakersSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import Footer from '@/components/layout/Footer';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import VenueSection from '@/components/home/VenueSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ScheduleSection />
      <SpeakersSection />
      <SponsorsSection />
      <VenueSection />
      <Footer />
    </main>
  );
}