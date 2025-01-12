import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
} 