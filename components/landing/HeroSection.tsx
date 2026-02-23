'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { screenshots } from '@/lib/screenshots';

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-6 animate-slide-up">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 border border-foreground/15 rounded-full px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground/60"></span>
              </span>
              Currently in Beta
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground text-balance leading-tight">
            Practice law, not
            <br />
            project management.
          </h1>
          <p className="text-xl text-foreground/60 text-balance max-w-2xl mx-auto leading-relaxed">
            Denning AI handles deadlines, documents, diary, and delegation&mdash;so every matter stays on track without the overhead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button size="lg" className="bg-foreground text-background font-medium px-8">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-transparent hover:text-foreground">
              Book a Demo
            </Button>
          </div>

          {/* Social Proof Line */}
          <p className="text-sm text-foreground/40 pt-4">
            Trusted by law firms across Kenya
          </p>
        </div>

        {/* Product Screenshot */}
        <div className="mt-20 pt-12 border-t border-border animate-slide-up">
          <div className="bg-foreground rounded-3xl p-1 shadow-2xl overflow-hidden">
            <img
              src={screenshots.hero}
              alt="Denning Dashboard - Every matter organized in one place"
              className="w-full rounded-3xl block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
