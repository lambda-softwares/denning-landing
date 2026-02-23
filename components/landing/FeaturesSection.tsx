'use client';

import { FileText, Zap, Bot, Folder, Grid3X3, Users, Calendar, BarChart3 } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: FileText,
      title: 'AI Document Generation',
      description: 'Generate legal documents in seconds, not hours.',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and focus on strategy.',
    },
    {
      id: 3,
      icon: Bot,
      title: 'Legal AI Assistant',
      description: 'Get instant answers about your cases anytime.',
    },
    {
      id: 4,
      icon: Folder,
      title: 'Smart Documents',
      description: 'Search, organize, and manage all case files.',
    },
    {
      id: 5,
      icon: Grid3X3,
      title: 'Task Management',
      description: 'Never miss a deadline with visual task boards.',
    },
    {
      id: 6,
      icon: Users,
      title: 'Collaboration',
      description: 'Work with your team and manage client access.',
    },
    {
      id: 7,
      icon: Calendar,
      title: 'Smart Calendar',
      description: 'Never miss court dates or deadlines again.',
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track firm performance with detailed metrics.',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful features
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to manage cases, collaborate with your team, and grow your firm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Feature Visual */}
                <div className="bg-foreground/5 p-6 h-32 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 w-8 h-8 border-2 border-foreground rounded"></div>
                    <div className="absolute bottom-3 left-3 w-6 h-1 bg-foreground rounded-full"></div>
                    <div className="absolute bottom-3 left-11 w-4 h-1 bg-foreground/30 rounded-full"></div>
                  </div>
                  <Icon className="w-12 h-12 text-foreground/30 relative z-10" />
                </div>

                {/* Feature Info */}
                <div className="p-6">
                  <Icon className="w-6 h-6 text-foreground mb-3" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
