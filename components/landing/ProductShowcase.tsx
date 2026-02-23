'use client';

import { screenshots } from '@/lib/screenshots';

export function ProductShowcase() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Solution Transition */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Everything connects back to the file.
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Denning keeps the file at the center of everything. Upload a document&mdash;AI extracts the details. Add a task&mdash;it's linked to the matter. Schedule a hearing&mdash;your whole team sees it. No more scattered spreadsheets. No more chasing updates.
          </p>
        </div>

        {/* Feature 1: AI Document Intelligence */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              AI that reads
              <br />
              your documents
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Upload a document. Denning AI extracts case details, identifies deadlines, suggests next steps&mdash;automatically. No manual data entry. No details buried in PDFs.
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Auto-extraction from uploaded documents</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>AI-powered file creation and categorization</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Smart sorting across civil, criminal, commercial, family, and constitutional matters</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img
              src={screenshots.caseFileAiProcedures}
              alt="Denning AI extracting case details from uploaded documents"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 2: Your diary, managed */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl order-last md:order-first">
            <img
              src={screenshots.diaryCalendar}
              alt="Denning intelligent diary and calendar management"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Your diary,
              <br />
              managed
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Court dates, client meetings, filing deadlines&mdash;Denning AI adds them to your diary automatically when they appear in documents or procedures. Nothing slips because it was buried in paperwork.
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>AI auto-adds matters to your diary</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Court appearance tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Deadline alerts before they become emergencies</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3: Procedures without the paper chase */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Procedures without
              <br />
              the paper chase
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Kenyan legal procedures are complex. Denning guides you step-by-step through every proceeding&mdash;tracking what's done, what's next, and what's overdue.
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Step-by-step procedure workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Automatic progress tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Built for Kenyan courts and practice</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img
              src={screenshots.caseFileAiProcedures}
              alt="Denning procedure guidance and tracking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 4: Tasks that don't fall through cracks */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl order-last md:order-first">
            <img
              src={screenshots.tasksKanban}
              alt="Denning task management and team coordination"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Tasks that don't fall
              <br />
              through cracks
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Assign work to your team, track progress, keep everything tied to the file it belongs to. Your associates know exactly what's due&mdash;without you chasing them.
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Kanban-style task boards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>Team assignment and tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground font-semibold">&#x2022;</span>
                <span>File-linked organization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
