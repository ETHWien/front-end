import Hero from '@/components/home/Hero';
import SpeakersSection from '@/components/home/SpeakersSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import Footer from '@/components/layout/Footer';
import VenueSection from '@/components/home/VenueSection';
import TeamSection from '@/components/home/TeamSection';
import AboutSection from '@/components/about/AboutSection';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import PartnersSection from '@/components/home/PartnersSection';
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ScheduleSection />
      <AboutSection />
      <TeamSection />
      <SpeakersSection />
      <SponsorsSection />
      <PartnersSection />
      <VenueSection />
      <Footer />
    </main>
  );
}