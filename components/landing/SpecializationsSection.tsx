'use client';

import { Scale, MapPin, FileCheck, Layers } from 'lucide-react';

export function SpecializationsSection() {
  const practiceAreas = [
    'Civil Litigation',
    'Criminal Law',
    'Family Law',
    'Commercial Law',
    'Constitutional Law',
    'Employment Law',
    'Property Law',
    'Conveyancing',
    'Land Disputes',
    'Banking & Finance',
    'Tax Law',
    'Immigration Law',
    'Intellectual Property',
    'Administrative Law',
    'Trust & Estate Planning',
    'Construction Law',
  ];

  const trustPoints = [
    {
      icon: Scale,
      title: 'Kenyan Courts',
      description: 'High Court, Court of Appeal, Supreme Court&mdash;all supported with proper procedure tracking.',
    },
    {
      icon: MapPin,
      title: 'Local Procedures',
      description: 'Understands Kenyan legal workflows, timelines, and court-specific requirements.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'KRA PIN validation, proper documentation standards, and regulatory compliance built in.',
    },
    {
      icon: Layers,
      title: '16 Practice Areas',
      description: 'From civil litigation to constitutional law, Denning works for every specialization.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for Kenyan legal practice
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Denning isn't a generic tool adapted for Kenya. It's built from the ground up for how Kenyan lawyers actually work.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="border border-border rounded-2xl p-6">
                <Icon className="w-6 h-6 text-foreground mb-3" />
                <h3 className="text-base font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Practice Areas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {practiceAreas.map((spec, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-4 text-center hover:border-foreground/30 transition-all duration-300"
            >
              <p className="text-foreground/70 font-medium text-sm hover:text-foreground transition-colors">
                {spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
