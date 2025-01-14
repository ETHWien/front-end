import Hero from '@/components/home/Hero';
import VenueSection from '@/components/home/VenueSection';
import SpeakersSection from '@/components/home/SpeakersSection';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <SpeakersSection />
      <VenueSection />
      <Footer />
    </div>
  );
}