import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/app/components/HeroSection';
import ProductsSection from '@/app/components/ProductsSection';
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgressBar from '@/app/components/ScrollProgressBar';
import GridLinesOverlay from '@/app/components/GridLinesOverlay';

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <ScrollProgressBar />
      <GridLinesOverlay />
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
