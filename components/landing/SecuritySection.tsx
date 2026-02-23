'use client';

import { Lock, Shield, Cloud } from 'lucide-react';

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Client-attorney privilege protected',
      description: 'End-to-end encryption ensures only you and your team can access case information. Your client data stays confidential.',
    },
    {
      icon: Shield,
      title: 'Data protection compliant',
      description: 'Fully compliant with Kenya\'s Data Protection Act and international privacy regulations. Regular security audits.',
    },
    {
      icon: Cloud,
      title: 'Enterprise-grade infrastructure',
      description: 'Hosted on reliable servers with 99.9% uptime guarantee, automatic backups, and disaster recovery.',
    },
  ];

  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Your client data is safe
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Law firms handle sensitive information. Denning is built with the security standards your practice demands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="p-6">
                <Icon className="w-6 h-6 text-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
