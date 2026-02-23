'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/constants';

export function PricingSection() {
  const pricingPlans = [
    {
      name: 'Solo',
      price: 'KES 4,999',
      period: '/month',
      description: 'Perfect for solo practitioners and small practices.',
      features: [
        'Up to 20 active cases',
        'AI Document Assistant',
        'Mobile app access',
        'Basic reporting',
        '5 GB storage',
        'Email support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 'KES 14,999',
      period: '/month',
      description: 'Most popular. For growing law firms.',
      features: [
        'Unlimited active cases',
        'AI Legal Assistant',
        'Team collaboration (10 users)',
        'Advanced workflows',
        'Unlimited storage',
        'Advanced reporting & dashboards',
        'API access',
        'Priority email & chat support',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large firms with advanced needs.',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom integrations',
        'Dedicated account manager',
        'Custom contract templates',
        'Advanced security features',
        'White-label options',
        'Phone & on-site support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">
            Simple pricing
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            14-day free trial. All plans include support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-all ${
                plan.highlighted
                  ? 'border-foreground bg-foreground/5 md:scale-105 shadow-lg'
                  : 'border-border'
              }`}
            >
              {/* Pricing Header Visual */}
              <div className="bg-foreground/5 p-6 border-b border-border">
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-foreground/60 text-sm">{plan.period}</span>
                </div>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-foreground text-background text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Plan Content */}
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6 flex-grow">{plan.description}</p>

                {plan.cta === 'Get Started' ? (
                  <Button
                    asChild
                    className={`w-full mb-8 font-medium ${
                      plan.highlighted
                        ? 'bg-foreground text-background'
                        : 'border border-foreground/20 text-foreground'
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    className={`w-full mb-8 font-medium ${
                      plan.highlighted
                        ? 'bg-foreground text-background'
                        : 'border border-foreground/20 text-foreground'
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                )}

                {/* Features */}
                <div className="space-y-3 border-t border-border pt-6">
                  <p className="text-xs font-semibold text-foreground/60 uppercase">What's included:</p>
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
