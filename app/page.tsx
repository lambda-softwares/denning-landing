import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemStatement } from '@/components/landing/ProblemStatement';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { RealtimeAiSection } from '@/components/landing/RealtimeAiSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { SpecializationsSection } from '@/components/landing/SpecializationsSection';
import { SecuritySection } from '@/components/landing/SecuritySection';

import { FaqSection } from '@/components/landing/FaqSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemStatement />
      <ProductShowcase />
      <RealtimeAiSection />
      <HowItWorks />
      <SpecializationsSection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
