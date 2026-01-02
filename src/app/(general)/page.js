
// src/app/(general)/page.js

import HeroSection from '@/components/landing/HeroSection';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import DetailedFeatures from '@/components/landing/DetailedFeatures'; // New Section
import TestimonialsSection from '@/components/landing/TestimonialsSection'; // New Section
import CtaSection from '@/components/landing/CtaSection';

export default function LandingPage() {
  return (
    <div className="bg-white">
     <HeroSection />
      
       <FeaturesGrid />

      {/* --- NEW SECTION: Detailed Benefits --- */}
      <DetailedFeatures />

      {/* --- NEW SECTION: Social Proof --- */}
      <TestimonialsSection />

      {/* --- FINAL CALL TO ACTION --- */}
      <CtaSection />
    </div>
  );
}
