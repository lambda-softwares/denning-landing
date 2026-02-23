'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Ready to practice law again?
        </h2>
        <p className="text-lg text-foreground/60 mb-4 max-w-2xl mx-auto">
          Join firms across Kenya who've reclaimed billable hours. No spreadsheets. No chaos.
        </p>
        <p className="text-sm text-foreground/45 mb-12 max-w-xl mx-auto">
          Built for the way you work. Your time is billable&mdash;your software shouldn&rsquo;t waste it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-foreground text-background font-medium px-8"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-transparent hover:text-foreground"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
