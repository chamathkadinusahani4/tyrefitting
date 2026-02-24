import { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { IncludedSection } from '../components/IncludedSection';
import { ConvenienceSection } from '../components/ConvenienceSection';
import { TyreOptionsSection } from '../components/TyreOptionsSection';
import { PricingSection } from '../components/PricingSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { CTAButton } from '../components/CTAButton';
export function NuTyreLanding() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (roughly 100vh)
      setShowStickyCTA(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Tyre Fitting Services | Fast & Reliable UK Coverage</title>
      <meta
        name="description"
        content="Tyre fitting services made simple. NuTyre delivers expert mobile fitting to your door — same-day service, trusted brands, and clear pricing." />

      <meta
        name="keywords"
        content="tyre fitting services, mobile tyre fitting, UK tyre service, same-day tyre fitting" />


      <main className="w-full min-h-screen bg-nutyre-bg">
        <HeroSection />
        <IncludedSection />
        <ConvenienceSection />
        <TyreOptionsSection />
        <PricingSection />
        <FinalCTASection />

        {/* Sticky Mobile CTA */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-nutyre-bg-secondary/95 backdrop-blur-lg border-t border-nutyre-yellow/20 transition-transform duration-300 lg:hidden ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
            <a href="https://nutyre.co.uk/find-a-fitter">
          <CTAButton size="default" className="w-full">
            Book Your Tyre Fitting
          </CTAButton>
          
              </a>
        </div>
      </main>
    </>);

}