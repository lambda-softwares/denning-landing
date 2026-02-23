'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  ClipboardList,
  Users,
  Search,
  Scale,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const demands = [
  { icon: ClipboardList, label: 'Procedures', detail: 'Court rules, compliance, filings' },
  { icon: FileText, label: 'Documents', detail: 'Pleadings, affidavits, contracts' },
  { icon: Calendar, label: 'Deadlines', detail: 'Limitation dates, hearing dates' },
  { icon: Users, label: 'Meetings', detail: 'Client calls, mediations, reviews' },
  { icon: Search, label: 'Research', detail: 'Case law, statutes, opinions' },
  { icon: Scale, label: 'Appearances', detail: 'Mentions, hearings, trials' },
];

const BETA_URL = '#cta';

export function ProblemStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-x-clip">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/30 mb-5">
            The reality
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
            One file. A dozen demands.
          </h2>
          <p
            className="text-lg text-foreground/50 italic max-w-xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.5s ease 150ms, transform 0.5s ease 150ms',
            }}
          >
            Every matter starts simple. Then it multiplies.
          </p>
        </div>

        {/* Hub and spoke diagram -- desktop (inline SVG) */}
        <div
          className="hidden md:block max-w-[880px] mx-auto rounded-2xl overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
            transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 140 900 620"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="ps-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="5" stdDeviation="12" floodColor="#00000014" />
              </filter>
              <style>
                {`.ps-card-title { font: 700 15px 'Helvetica Neue', Helvetica, sans-serif; fill: #1a1a1a; }
                  .ps-card-sub { font: 400 12px 'Helvetica Neue', Helvetica, sans-serif; fill: #bbb; }
                  .ps-center-lbl { font: 600 11px 'Helvetica Neue', Helvetica, sans-serif; fill: #fff; letter-spacing: 2.5px; }`}
              </style>
            </defs>
            <rect width="900" height="900" fill="transparent" />
            <line x1="450" y1="430" x2="450" y2="320" stroke="#c8c4bb" strokeWidth="2" strokeDasharray="7,5" />
            <line x1="450" y1="530" x2="450" y2="640" stroke="#c8c4bb" strokeWidth="2" strokeDasharray="7,5" />
            <line x1="515" y1="430" x2="569" y2="435" stroke="#c8c4bb" strokeWidth="2" strokeDasharray="7,5" />
            <line x1="385" y1="430" x2="331" y2="435" stroke="#c8c4bb" strokeWidth="2" strokeDasharray="7,5" />
            <line x1="515" y1="530" x2="569" y2="525" stroke="#c8c4bb" strokeWidth="2" strokeDasharray="7,5" />
            <line x1="385" y1="530" x2="331" y2="525" stroke="#c8c4bb" strokeWidth="2" strokeDasharray="7,5" />
            <rect x="385" y="430" width="130" height="100" rx="22" fill="#111" filter="url(#ps-shadow)" />
            <g transform="translate(437, 444)" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="0" y="0" width="22" height="27" rx="4" />
              <polyline points="13,0 13,8 22,8" />
              <line x1="5" y1="14" x2="17" y2="14" />
              <line x1="5" y1="19" x2="17" y2="19" />
            </g>
            <text x="450" y="507" textAnchor="middle" className="ps-center-lbl">NEW FILE</text>
            <rect x="370" y="180" width="160" height="140" rx="20" fill="white" filter="url(#ps-shadow)" />
            <g transform="translate(436, 204)" stroke="#c0bdb6" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <rect x="0" y="7" width="28" height="28" rx="4" />
              <rect x="9" y="0" width="10" height="14" rx="3" />
              <line x1="7" y1="19" x2="21" y2="19" />
              <line x1="7" y1="25" x2="21" y2="25" />
            </g>
            <text x="450" y="272" textAnchor="middle" className="ps-card-title">Procedures</text>
            <text x="450" y="291" textAnchor="middle" className="ps-card-sub">Court rules, compliance,…</text>
            <rect x="569" y="295" width="160" height="140" rx="20" fill="white" filter="url(#ps-shadow)" />
            <g transform="translate(635, 316)" stroke="#c0bdb6" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <rect x="0" y="0" width="26" height="32" rx="4" />
              <polyline points="15,0 15,11 26,11" />
              <line x1="5" y1="17" x2="21" y2="17" />
              <line x1="5" y1="22" x2="21" y2="22" />
              <line x1="5" y1="27" x2="15" y2="27" />
            </g>
            <text x="649" y="387" textAnchor="middle" className="ps-card-title">Documents</text>
            <text x="649" y="406" textAnchor="middle" className="ps-card-sub">Pleadings, affidavits,…</text>
            <rect x="569" y="525" width="160" height="140" rx="20" fill="white" filter="url(#ps-shadow)" />
            <g transform="translate(635, 546)" stroke="#c0bdb6" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <rect x="0" y="6" width="28" height="26" rx="4" />
              <line x1="9" y1="0" x2="9" y2="12" />
              <line x1="19" y1="0" x2="19" y2="12" />
              <line x1="0" y1="17" x2="28" y2="17" />
              <circle cx="9" cy="24" r="2" fill="#c0bdb6" stroke="none" />
              <circle cx="19" cy="24" r="2" fill="#c0bdb6" stroke="none" />
            </g>
            <text x="649" y="617" textAnchor="middle" className="ps-card-title">Deadlines</text>
            <text x="649" y="636" textAnchor="middle" className="ps-card-sub">Limitation dates, hearings…</text>
            <rect x="370" y="640" width="160" height="140" rx="20" fill="white" filter="url(#ps-shadow)" />
            <g transform="translate(426, 660)" stroke="#c0bdb6" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <circle cx="12" cy="9" r="7" />
              <circle cx="26" cy="9" r="7" />
              <path d="M0,36 Q3,28 12,28 Q19,28 19,28 Q25,28 26,28 Q35,28 38,36" />
            </g>
            <text x="450" y="732" textAnchor="middle" className="ps-card-title">Meetings</text>
            <text x="450" y="751" textAnchor="middle" className="ps-card-sub">Client calls, mediations,…</text>
            <rect x="171" y="525" width="160" height="140" rx="20" fill="white" filter="url(#ps-shadow)" />
            <g transform="translate(233, 546)" stroke="#c0bdb6" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <circle cx="14" cy="14" r="12" />
              <line x1="23" y1="23" x2="34" y2="34" />
            </g>
            <text x="251" y="617" textAnchor="middle" className="ps-card-title">Research</text>
            <text x="251" y="636" textAnchor="middle" className="ps-card-sub">Case law, statutes,…</text>
            <rect x="171" y="295" width="160" height="140" rx="20" fill="white" filter="url(#ps-shadow)" />
            <g transform="translate(228, 314)" stroke="#c0bdb6" strokeWidth="1.8" fill="none" strokeLinecap="round">
              <line x1="23" y1="2" x2="23" y2="38" />
              <line x1="5" y1="10" x2="41" y2="10" />
              <line x1="5" y1="10" x2="5" y2="22" />
              <path d="M-3,22 Q1,30 5,30 Q9,30 13,22" />
              <line x1="41" y1="10" x2="41" y2="22" />
              <path d="M33,22 Q37,30 41,30 Q45,30 49,22" />
              <line x1="16" y1="38" x2="30" y2="38" />
            </g>
            <text x="251" y="387" textAnchor="middle" className="ps-card-title">Appearances</text>
            <text x="251" y="406" textAnchor="middle" className="ps-card-sub">Mentions, hearings, trials</text>
          </svg>
        </div>

        {/* Mobile layout -- refined vertical flow with hub-spoke connection */}
        <div
          className="md:hidden max-w-sm mx-auto relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease 150ms',
          }}
        >
          {/* Connector line: from below NEW FILE hub down through all cards */}
          <div
            className="absolute left-1/2 top-20 -translate-x-px bottom-0 w-px bg-gradient-to-b from-foreground/20 to-border"
            aria-hidden
          />

          {/* NEW FILE hub (round/circular) */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center shadow-lg ring-2 ring-foreground/5 shrink-0">
              <div className="text-center">
                <FileText className="w-6 h-6 text-background mx-auto mb-0.5" strokeWidth={2} />
                <span className="text-[9px] font-semibold text-background/90 uppercase tracking-widest">
                  New File
                </span>
              </div>
            </div>
          </div>

          {/* Cards connected via center line */}
          <div className="flex flex-col gap-3 -mt-2">
            {demands.map((demand, idx) => {
              const Icon = demand.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-6px)',
                    transition: `opacity 0.4s ease ${250 + idx * 60}ms, transform 0.4s ease ${250 + idx * 60}ms`,
                  }}
                >
                  <div className="absolute left-1/2 top-0 w-2.5 h-2.5 rounded-full bg-foreground/30 border-2 border-background -translate-x-1/2 -translate-y-1/2 z-10" />
                  <div className="flex-1 w-full rounded-xl bg-background border border-border/80 p-4 shadow-sm mt-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-muted/80 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">{demand.label}</p>
                          <p className="text-xs text-foreground/50 mt-0.5 leading-snug">{demand.detail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        {/* Beta CTA */}
        <div
          className="mt-12 flex flex-col items-center justify-center gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms',
          }}
        >
          <Link href={BETA_URL}>
            <Button
              size="lg"
              className="group bg-foreground text-background font-semibold px-8 py-6 text-base hover:opacity-90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 rounded-xl"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Join the Beta
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <p className="text-sm text-foreground/50">
            Early access for Kenyan law firms — built for practice, not paperwork
          </p>
        </div>
      </div>
    </section>
  );
}
