import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Linkedin,
  Github,
  Compass,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Server,
  Network,
  Users2,
  Sliders,
  Briefcase,
  CheckCircle,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const operatingModel = [
    {
      step: '01',
      title: 'Understand',
      focus: 'Customer · Business · Market',
      icon: Compass,
      description:
        'Engage directly with users, dissect competitive offerings, and uncover the latent commercial opportunities behind explicit customer complaints.',
      pmDeliverable:
        'Unfiltered customer problem maps, commercial opportunity sizing, and operational constraint profiles.',
    },
    {
      step: '02',
      title: 'Frame',
      focus: 'Problem · Opportunity · Constraints',
      icon: Layers,
      description:
        'Distill messy inputs into crisp problem statements. Identify non-negotiable architectural, regulatory, or technical constraints before writing a single requirement.',
      pmDeliverable:
        'Problem definition memos, non-goals boundaries, and preliminary feasibility assessments.',
    },
    {
      step: '03',
      title: 'Decide',
      focus: 'Strategy · Prioritization · Trade-offs',
      icon: Sliders,
      description:
        'Make rigorous trade-offs between speed, flexibility, and maintainability. Align executive sponsors and engineering leads on what will not be built.',
      pmDeliverable:
        'Structured PRDs, prioritization matrices, decision records, and explicit trade-off agreements.',
    },
    {
      step: '04',
      title: 'Build',
      focus: 'Engineering · Design · Infrastructure',
      icon: Cpu,
      description:
        'Partner closely with systems architects and developers during implementation. Clarify edge cases in real time and safeguard developer focus from scope creep.',
      pmDeliverable:
        'Sprint grooming clarity, API contract reviews, acceptance criteria verification, and staging sign-off.',
    },
    {
      step: '05',
      title: 'Measure',
      focus: 'Adoption · Reliability · Business Impact',
      icon: TrendingUp,
      description:
        'Track verifiable usage patterns, error rates, customer onboarding time, and margin contribution rather than relying on vanity telemetry.',
      pmDeliverable:
        'Telemetry dashboards, unit economics reports, adoption funnel audits, and support ticket trends.',
    },
    {
      step: '06',
      title: 'Learn',
      focus: 'Feedback · Iteration · Product Evolution',
      icon: RefreshCw,
      description:
        'Close the loop by feeding operational realities back into the product backlog. Determine whether to double down, pivot, or retire specific capabilities.',
      pmDeliverable:
        'Post-launch retrospectives, roadmap adjustments, and continuous enhancement epics.',
    },
  ];

  const leadershipPillars = [
    {
      title: 'Alignment',
      subhead: 'Getting technical and business teams moving toward the same outcome.',
      detail:
        'Engineers care about architectural elegance and stability; business leaders care about customer acquisition, margins, and time-to-market. Product leadership means creating shared purpose where technical decisions explicitly reinforce business strategy.',
    },
    {
      title: 'Ownership',
      subhead: 'Taking responsibility beyond the exact boundaries of a job description.',
      detail:
        'When an infrastructure deployment stalls, a client contract gets blocked by a technical ambiguity, or a production release requires cross-functional coordination, leadership is stepping in to resolve the impediment regardless of organizational lines.',
    },
    {
      title: 'Communication',
      subhead: 'Making technical decisions understandable to non-technical stakeholders.',
      detail:
        'Translating distributed systems constraints, latency budgets, and security boundaries into clear commercial risk assessments that executive teams and clients can immediately evaluate and act upon.',
    },
    {
      title: 'Execution',
      subhead: 'Following an idea from requirement → decision → build → deployment → feedback.',
      detail:
        'Great documentation is useless without delivery discipline. Managing the complete lifecycle: unblocking engineers, running structured pilot releases, verifying customer handoffs, and evaluating outcomes.',
    },
    {
      title: 'Client Management',
      subhead: 'Understanding what a client is actually trying to achieve rather than simply implementing their first request.',
      detail:
        'Enterprise clients frequently ask for specific implementation features (e.g. "we need a custom button here"). A true product partner uncovers the root operational pain and solves it with a durable, scalable platform capability.',
    },
  ];

  return (
    <div className="space-y-28 md:space-y-36 pb-24">
      {/* 1. HERO / POSITIONING */}
      <section className="pt-12 md:pt-20 border-b border-[#E8E6DF] pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                Professional Positioning & Narrative
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#141413] tracking-tight leading-[1.15]">
                Who is Rushabh?
              </h1>

              <div className="text-base sm:text-lg font-mono text-[#B85D19] font-medium pt-1">
                Product Management · Technical Product Leadership · Cloud · AI · SaaS
              </div>

              <blockquote className="text-xl sm:text-2xl font-normal text-[#141413] tracking-tight leading-snug border-l-2 border-[#B85D19] pl-5 py-1">
                “I work at the intersection of product, technology, customers and business.”
              </blockquote>

              <p className="text-base sm:text-lg text-[#474540] leading-relaxed max-w-2xl">
                Rushabh is not a traditional PM who happens to know some technology, nor an engineer who stepped into a backlog-grooming role. His career represents <strong>product thinking grounded in technical reality</strong>.
              </p>

              {/* Connected Dimensions Box */}
              <div className="p-6 bg-white rounded-xl border border-[#E2DFD7] space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Two Connected Dimensions
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-2 p-4 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF]">
                    <div className="font-semibold text-sm text-[#141413]">
                      Product Management (~3 Years)
                    </div>
                    <p className="text-[#6B6964] leading-relaxed">
                      Approximately three years of professional product-oriented experience across product discovery, requirements gathering, product development, prioritization, stakeholder management, engineering collaboration, customer feedback, and product decision making.
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF]">
                    <div className="font-semibold text-sm text-[#141413]">
                      Technical Leadership (~3 Years)
                    </div>
                    <p className="text-[#6B6964] leading-relaxed">
                      Approximately three years of technical leadership experience within an advertising-agency environment, spanning infrastructure, networking, technical operations, product development, technology management, client requirements, technical decision making, and team coordination.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0EEE8] space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8C85] block">
                    The Evaluator Standard
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#21201D] font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B85D19]" />
                      <span>Technical enough for CTOs.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B85D19]" />
                      <span>Commercial enough for founders.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B85D19]" />
                      <span>Product-focused enough for PM leadership.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B85D19]" />
                      <span>Customer-aware enough for B2B environments.</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:col-span-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B85D19]" />
                      <span>Executive enough to sit in serious stakeholder conversations.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Portrait & Verified Channels */}
            <div className="lg:col-span-4 p-6 bg-white border border-[#E2DFD7] rounded-xl space-y-5">
              <div className="aspect-square rounded-lg overflow-hidden bg-[#E8E6DF] border border-[#D8D6CE]">
                <img
                  src="/profile.png"
                  alt="Rushabh Patadia Portrait"
                  className="w-full h-full object-cover object-[center_15%]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1">
                <div className="text-base font-semibold text-[#141413]">
                  Rushabh Patadia
                </div>
                <div className="text-xs text-[#B85D19] font-mono">
                  Product Management · Technical Product Leadership
                </div>
              </div>

              <p className="text-xs text-[#6B6964] leading-relaxed">
                Dedicated to building robust platform products with high engineering leverage, transparent commercial models, and exceptional user clarity.
              </p>

              <div className="pt-3 border-t border-[#F0EEE8] flex items-center justify-between text-xs">
                <span className="text-[#8E8C85] font-mono">Direct Connection</span>
                <div className="flex items-center gap-3">
                  <a href="mailto:rushabhpatadia2003@gmail.com" className="text-[#141413] hover:text-[#B85D19]" aria-label="Email Rushabh">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/rushabhpatadia" target="_blank" rel="noreferrer" className="text-[#141413] hover:text-[#B85D19]" aria-label="LinkedIn Profile">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/patadiarushabh19" target="_blank" rel="noreferrer" className="text-[#141413] hover:text-[#B85D19]" aria-label="GitHub Profile">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL OPERATING MODEL */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
            Methodology & Disciplined Sequence
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
            The Product Operating Model
          </h2>
          <p className="text-sm text-[#73716B] max-w-2xl leading-relaxed">
            How ambiguous market signals and customer requests are converted into reliable, scalable software products.
          </p>
        </div>

        {/* 6 Step Horizontal Process */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {operatingModel.map((item, idx) => {
            const isSelected = activeStep === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'bg-white border-[#B85D19] shadow-md ring-1 ring-[#B85D19]/20'
                    : 'bg-white/60 border-[#E2DFD7] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs text-[#B85D19] font-bold">
                    {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#B85D19]' : 'text-[#8E8C85]'}`} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#141413]">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#73716B] font-mono truncate">
                    {item.focus.split('·')[0].trim()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Operating Model Active Detail Box */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#E2DFD7] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#B85D19] bg-[#FDF6F0] px-2.5 py-1 rounded border border-[#F4DEC9]">
                  STAGE {operatingModel[activeStep].step}
                </span>
                <span className="text-xs font-mono text-[#8E8C85]">
                  {operatingModel[activeStep].focus}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-[#141413] tracking-tight">
                {operatingModel[activeStep].title}: {operatingModel[activeStep].focus}
              </h3>

              <p className="text-sm text-[#474540] leading-relaxed">
                {operatingModel[activeStep].description}
              </p>
            </div>

            <div className="md:col-span-5 bg-[#FAF9F5] p-5 rounded-lg border border-[#E8E6DF] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] block font-semibold">
                Tangible PM Deliverables Produced
              </span>
              <p className="text-xs text-[#33322E] leading-relaxed">
                {operatingModel[activeStep].pmDeliverable}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP BEYOND THE PRODUCT BACKLOG */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="space-y-4 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            Beyond Writing PRDs and Jira Tickets
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
            Leadership beyond the product backlog
          </h2>
          <p className="text-sm text-[#73716B] max-w-2xl leading-relaxed">
            Product management is not administrative ticket hygiene. It is cross-functional ownership across developers, technical teams, clients, business stakeholders, and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadershipPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-white border border-[#E2DFD7] flex flex-col justify-between space-y-4 hover:border-[#C8C5BC] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#141413]">
                    {pillar.title}
                  </span>
                  <span className="font-mono text-xs text-[#8E8C85]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#B85D19] leading-relaxed">
                  {pillar.subhead}
                </div>

                <p className="text-xs text-[#5C5A55] leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EEE8] text-[11px] font-mono text-[#8E8C85]">
                Core Leadership Competency
              </div>
            </div>
          ))}

          {/* Special Card: Technical Leadership Experience */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#B85D19]/30 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-[#141413]">
                  Technical Leadership Experience
                </span>
                <span className="font-mono text-xs text-[#B85D19]">
                  ~3 Years
                </span>
              </div>

              <div className="text-xs font-mono text-[#B85D19]">
                Advertising-Agency Environment (~3 Years)
              </div>

              <p className="text-xs text-[#474540] leading-relaxed">
                Led infrastructure, networking, technical operations and product development within an advertising-agency environment, spanning technology management, client requirements, technical decision making and team coordination.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8E6DF] text-[11px] font-mono text-[#8E8C85]">
              Real Technical Leadership Proven
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#FFFFFF] border border-[#E2DFD7] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-[#141413]">
              Review the Flagship Product Case Study
            </h3>
            <p className="text-xs text-[#73716B]">
              Inspect the end-to-end product architecture, strategy, and decision log for the GPU Infrastructure & White-Label Platform.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/portfolio/gpu-infrastructure-platform')}
            className="px-6 py-3 rounded-md bg-[#141413] text-white text-xs font-medium hover:bg-[#2A2925] transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Read GPU Platform Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
