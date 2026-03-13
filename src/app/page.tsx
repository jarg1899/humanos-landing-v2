import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Concept from '@/components/Concept';
import Pillars from '@/components/Pillars';
import Features from '@/components/Features';
import Target from '@/components/Target';
import Waitlist from '@/components/Waitlist';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Concept />
      <Pillars />
      <Features />
      <Target />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
