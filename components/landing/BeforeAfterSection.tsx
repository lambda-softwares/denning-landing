'use client';

import { Check, Minus } from 'lucide-react';

export function BeforeAfterSection() {
  const comparisons = [
    {
      before: 'Documents created manually, one at a time',
      after: 'AI drafts documents in seconds',
    },
    {
      before: 'Case details scattered across emails and folders',
      after: 'Everything lives in one unified file',
    },
    {
      before: 'Deadlines tracked on spreadsheets or memory',
      after: 'Automated reminders and calendar sync',
    },
    {
      before: 'Hours spent on routine follow-ups',
      after: 'Smart task delegation and tracking',
    },
    {
      before: 'Slow coordination between team members',
      after: 'Real-time collaboration on every matter',
    },
    {
      before: 'No visibility into case progress',
      after: 'Dashboard analytics at a glance',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-foreground/40 mb-4">
            The shift
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            From chaos to clarity
          </h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
            See what changes when your practice runs on Denning.
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-border overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-2 bg-foreground/3">
            <div className="px-6 py-4 border-r border-border">
              <span className="text-xs font-semibold tracking-widest uppercase text-foreground/40">
                Without Denning
              </span>
            </div>
            <div className="px-6 py-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-foreground/60">
                With Denning
              </span>
            </div>
          </div>

          {/* Comparison rows */}
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-2 ${idx !== comparisons.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Before */}
              <div className="flex items-start gap-3 px-6 py-5 border-r border-border">
                <Minus className="w-4 h-4 text-foreground/25 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/45 leading-relaxed">{item.before}</p>
              </div>
              {/* After */}
              <div className="flex items-start gap-3 px-6 py-5">
                <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
