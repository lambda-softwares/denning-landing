'use client';

import { FileSearch, PenTool, BookOpen } from 'lucide-react';
import { screenshots } from '@/lib/screenshots';

export function RealtimeAiSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Your AI co-counsel
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Research, draft, analyze. Denning's AI assistant knows your case context and is ready to help&mdash;whether you're preparing for court or drafting a response.
          </p>
        </div>

        {/* AI Screenshot Showcase */}
        <div className="mb-20">
          <div className="bg-foreground rounded-3xl p-1 shadow-2xl overflow-hidden">
            <img
              src={screenshots.caseFileAiProcedures}
              alt="Denning AI co-counsel - case-aware research and drafting assistant"
              className="w-full rounded-3xl block"
            />
          </div>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-border rounded-2xl p-8">
            <FileSearch className="w-8 h-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Case-aware research</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              AI understands your matter context, surfaces relevant precedent, and cites Kenyan statutes&mdash;saving hours of manual research.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-8">
            <PenTool className="w-8 h-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Document drafting</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Draft pleadings, responses, and submissions with AI that knows the format, the law, and the facts of your case.
            </p>
          </div>

          <div className="border border-border rounded-2xl p-8">
            <BookOpen className="w-8 h-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Kenyan legal context</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Built with Kenyan law in mind. Citations from the Law of Succession Act, Civil Procedure Rules, Family Law, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
