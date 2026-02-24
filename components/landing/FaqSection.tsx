'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is Denning built for Kenyan law firms specifically?',
      answer: 'Yes. Denning is built from the ground up for Kenyan legal practice. It understands local court procedures, supports High Court, Court of Appeal, and Supreme Court workflows, and includes KRA PIN validation and Kenyan-specific document templates.',
    },
    {
      question: 'How does the AI handle my case files?',
      answer: 'When you upload documents, Denning AI extracts case details, identifies deadlines, categorizes the matter, and suggests next steps automatically. Everything stays linked to the file, so you never lose context.',
    },
    {
      question: 'How long does it take to set up?',
      answer: 'About 5 minutes. Sign up, invite your team members, and you\'re ready to go. No lengthy onboarding—just create your account and start adding matters.',
    },
    {
      question: 'Can my whole team use Denning?',
      answer: 'Yes. Denning supports role-based access so partners, associates, and support staff each see what they need. Tasks are assigned and tracked per team member, all linked to the relevant file.',
    },
    {
      question: 'What if I need to export my data?',
      answer: 'You own your data. You can export all your case information, documents, and client records at any time in standard formats. No lock-in contracts.',
    },
    {
      question: 'How secure is my client data?',
      answer: 'All data is encrypted in transit and at rest. Denning complies with Kenya\'s Data Protection Act and international privacy standards. Only your authorized team members can access case information.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Questions?
          </h2>
          <p className="text-lg text-foreground/60">
            We have answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-border last:border-b-0"
            >
              <button
                className="w-full px-0 py-6 flex items-center justify-between transition-colors text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-foreground/60 flex-shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="pb-6 pt-2">
                  <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-20 text-center pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
          <p className="text-foreground/60 text-sm mb-6">
            Contact us at support@denning.law
          </p>
        </div>
      </div>
    </section>
  );
}
