'use client';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Open a file',
      description: 'Create a new matter or upload existing case documents. Denning AI reads your files, extracts details, and organizes everything automatically.',
    },
    {
      number: '02',
      title: 'Let AI connect the dots',
      description: 'Deadlines land on your diary. Procedures are tracked step-by-step. Tasks are assigned to your team. Everything links back to the file.',
    },
    {
      number: '03',
      title: 'Focus on the law',
      description: 'With the administrative overhead handled, you practice law. Prepare for hearings, advise clients, and build your firm&mdash;not spreadsheets.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            How it works
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            One platform. Every proceeding. Zero chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step number */}
              <div className="text-6xl font-bold text-foreground/10 mb-4">
                {step.number}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>

              {/* Connector */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 text-foreground/15 text-2xl">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
