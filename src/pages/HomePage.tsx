import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { TestimonialSection } from '../components/TestimonialSection';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  CheckCircle,
  Layers,
  Users,
  Compass,
  Briefcase,
  Cpu,
  Shield,
  Target,
  Sparkles,
  Server,
  Network,
  Scale,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenSecondaryCase: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSecondaryCase,
}) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const pillars = [
    {
      title: 'Product',
      icon: Compass,
      subtitle: 'Discovery & Strategy',
      description:
        'Turning ambiguous business and customer problems into structured product direction, roadmaps, and PRD specifications.',
    },
    {
      title: 'Technology',
      icon: Layers,
      subtitle: 'Architecture & Systems',
      description:
        'Deep fluency across cloud infrastructure, APIs, networking, DevOps, platform architecture, and AI systems.',
    },
    {
      title: 'Customers',
      icon: Users,
      subtitle: 'Discovery & Experience',
      description:
        'Translating real customer friction and workflow needs into product decisions and prioritized engineering deliverables.',
    },
    {
      title: 'Business',
      icon: Briefcase,
      subtitle: 'Commercial Strategy',
      description:
        'Understanding not only what should be built, but why it must exist, how it creates enterprise value, and how it scales margins.',
    },
    {
      title: 'Leadership',
      icon: CheckCircle,
      subtitle: 'Cross-Functional Execution',
      description:
        'Moving products from zero to production by aligning engineers, executive sponsors, clients, and operational teams.',
    },
  ];

  const experienceDimensions = [
    {
      dimension: 'Product Management',
      tenure: '~3 Years Professional Product Scope',
      focus: 'Discovery, Strategy & Delivery',
      points: [
        'Customer discovery & unearthing root workflows',
        'Requirements gathering & structured PRD authoring',
        'Phased product development & milestone scoping',
        'Systemic prioritization under severe constraints',
        'Stakeholder alignment across C-suite & technical leads',
        'Engineering collaboration & acceptance verification',
        'Customer feedback loops & telemetry analysis',
        'Product decision-making & conscious trade-off logs',
      ],
    },
    {
      dimension: 'Technical Leadership',
      tenure: '~3 Years Agency CTO Experience',
      focus: 'Systems, Operations & Client Delivery',
      points: [
        'Production infrastructure & server environments',
        'Networking architecture & secure data flow',
        'Technical operations, uptime & reliability governance',
        'End-to-end technical product development',
        'Technology vendor selection & stack management',
        'Translating high-stakes client requirements',
        'Technical decision-making & risk mitigations',
        'Cross-functional team coordination & developer guidance',
      ],
    },
  ];

  const capabilityMatrix = [
    'Product Management',
    'Technical Product Development',
    'Cloud Infrastructure',
    'AI Systems',
    'Internal Platforms',
    'Customer Discovery',
    'Client Management',
    'Engineering Collaboration',
    'Technical Operations',
    'Networking',
    'Team Coordination',
    'Business Development',
    'Stakeholder Management',
  ];

  return (
    <div className="space-y-28 md:space-y-36 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-12 md:pt-20 border-b border-[#E8E6DF] pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Large Editorial Headline & Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#8E8C85]">
                <span className="w-2 h-2 rounded-full bg-[#B85D19]" />
                <span>Product Management · Technical Product Leadership · Cloud · AI · SaaS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#141413] tracking-tight leading-[1.12] max-w-3xl">
                I work at the intersection of product, technology, customers and business.
              </h1>

              <div className="space-y-4 max-w-2xl text-base sm:text-lg text-[#5C5A55] leading-relaxed">
                <p>
                  Product Manager and technical product builder working across cloud infrastructure, SaaS, developer platforms, and AI-enabled products.
                </p>
                <p className="text-sm text-[#73716B]">
                  My work is not limited to writing requirements or managing Jira backlogs. With experience spanning product management, technical leadership, infrastructure operations, client management, and engineering collaboration, I operate comfortably from ambiguous problem definition through production delivery.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/portfolio/gpu-infrastructure-platform')}
                  className="px-6 py-3.5 rounded-md bg-[#141413] text-[#FAF9F5] text-sm font-medium hover:bg-[#2A2925] transition-all flex items-center gap-2 group shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D19]"
                >
                  <span>Explore the work</span>
                  <ArrowRight className="w-4 h-4 text-[#FAF9F5] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-6 py-3.5 rounded-md bg-[#FAF9F5] border border-[#D8D6CE] text-[#141413] text-sm font-medium hover:bg-[#F0EEE8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D19]"
                >
                  Let's talk
                </button>
              </div>
            </div>

            {/* Right: Editorial Identity Card with Portrait */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-[#FFFFFF] border border-[#E2DFD7] rounded-xl shadow-xs">
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#E8E6DF] border border-[#D8D6CE]">
                  <img
                    src="/profile.png"
                    alt="Rushabh Patadia — Portrait"
                    className="w-full h-full object-cover object-[center_15%] hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-mono tracking-wider uppercase font-semibold">
                    Rushabh Patadia
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="text-base font-semibold text-[#141413]">
                    Rushabh Patadia
                  </div>
                  <div className="text-xs text-[#B85D19] font-mono font-medium">
                    Product Management · Technical Product Leadership
                  </div>
                  <div className="text-[11px] text-[#73716B] font-mono">
                    Cloud · AI · SaaS · Platform Systems
                  </div>
                </div>

                <p className="text-xs text-[#6B6964] leading-relaxed pt-1">
                  Product thinking grounded in technical reality. Bridging executive commercial strategy, customer workflows, and distributed systems architecture.
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="pt-6 mt-6 border-t border-[#F0EEE8] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Verified Channels
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href="mailto:rushabhpatadia2003@gmail.com"
                    className="text-[#33322E] hover:text-[#B85D19] flex items-center justify-between group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#8E8C85] group-hover:text-[#B85D19]" />
                      <span>rushabhpatadia2003@gmail.com</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rushabhpatadia"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#33322E] hover:text-[#B85D19] flex items-center justify-between group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-[#8E8C85] group-hover:text-[#B85D19]" />
                      <span>linkedin.com/in/rushabhpatadia</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://github.com/patadiarushabh19"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#33322E] hover:text-[#B85D19] flex items-center justify-between group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-[#8E8C85] group-hover:text-[#B85D19]" />
                      <span>github.com/patadiarushabh19</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 5 CORE OPERATING SPHERES */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="space-y-4 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
            Operational Spheres
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
            Operating across five connected domains
          </h2>
          <p className="text-sm text-[#73716B] max-w-2xl leading-relaxed">
            Effective technical products cannot be built inside functional silos. Rushabh unites five disciplines to ensure systems are technically sound, commercially durable, and customer-centered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-5 rounded-xl bg-white border border-[#E2DFD7] hover:border-[#B85D19] transition-all hover:shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-md bg-[#FAF9F5] group-hover:bg-[#FDF6F0] flex items-center justify-center text-[#73716B] group-hover:text-[#B85D19] transition-colors border border-[#E8E6DF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[#8E8C85]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#141413] tracking-tight group-hover:text-[#B85D19] transition-colors">
                      {pillar.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#8E8C85] uppercase block">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6964] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F0EEE8] flex items-center justify-between text-[11px] font-mono text-[#8E8C85]">
                  <span>Domain {idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[#B85D19] transition-opacity">
                    Integrated
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. EXPERIENCE POSITIONING: TWO CONNECTED DIMENSIONS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E2DFD7] relative overflow-hidden space-y-10 shadow-xs">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
              Connected Professional Experience
            </span>

            <h2 className="text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight leading-tight">
              Product thinking grounded in technical reality.
            </h2>

            <p className="text-base text-[#474540] leading-relaxed">
              Rushabh is not a traditional PM who happens to know some technology, nor an engineer who stepped into a backlog-grooming role. His career is structured across <strong>two deeply connected dimensions</strong> operating in parallel:
            </p>
          </div>

          {/* Two Connected Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {experienceDimensions.map((dim, idx) => (
              <div
                key={dim.dimension}
                className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                        Dimension 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-[#141413]">
                        {dim.dimension}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#73716B] bg-white px-2.5 py-1 rounded border border-[#E8E6DF]">
                      {dim.tenure}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C5A55] font-medium">
                    Core Focus: {dim.focus}
                  </p>

                  <ul className="space-y-2 text-xs text-[#33322E]">
                    {dim.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8E6DF] text-[11px] font-mono text-[#8E8C85]">
                  {idx === 0 ? 'Translating User & Commercial Goals' : 'Direct Systems & Team Governance'}
                </div>
              </div>
            ))}
          </div>

          {/* 13 Capabilities Matrix */}
          <div className="pt-8 border-t border-[#F0EEE8] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                Verified Cross-Functional Scope
              </span>
              <span className="text-xs font-mono text-[#73716B]">
                13 Core Competencies
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {capabilityMatrix.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#E8E6DF] text-xs font-medium text-[#21201D] hover:border-[#B85D19] transition-colors"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED PRODUCT WORK (6 LARGE EDITORIAL ROWS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#E8E6DF] gap-4">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              Portfolio Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Selected product work
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              A collection of professional product and technology case studies covering cloud infrastructure, AI, internal platforms, customer-driven product development and technical operations.
            </p>
            <p className="text-xs text-[#8E8C85] leading-relaxed italic">
              Some project details have been intentionally generalized or anonymized to respect client and organizational confidentiality. The case studies focus on the product problems, decisions, execution and lessons learned.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8E8C85] sm:text-right shrink-0">
            06 Documented Systems
          </div>
        </div>

        {/* 6 Editorial Rows */}
        <div className="divide-y divide-[#E8E6DF]">
          {CASE_STUDIES.map((item) => {
            const isHovered = hoveredRow === item.id;
            const isFlagship = item.isFlagship;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredRow(item.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`py-8 sm:py-10 transition-all group ${
                  isHovered ? 'bg-white/40' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number & Identifier */}
                  <div className="lg:col-span-1 flex items-center gap-2">
                    <span
                      className={`font-mono text-sm tabular-nums transition-colors ${
                        isFlagship
                          ? 'text-[#B85D19] font-bold'
                          : 'text-[#8E8C85] group-hover:text-[#141413]'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-7 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                        {item.title.split(' ')[0]}
                      </span>
                      {isFlagship && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D19] bg-[#FDF6F0] px-2 py-0.5 rounded border border-[#F4DEC9]">
                          Flagship Case Study
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-[#141413] tracking-tight group-hover:text-[#B85D19] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#5C5A55] leading-relaxed max-w-2xl">
                      {item.shortDescription}
                    </p>

                    <div className="text-xs text-[#8E8C85] font-mono pt-1">
                      {item.categoryTag}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="lg:col-span-4 flex flex-col sm:items-end justify-between self-stretch space-y-4">
                    <button
                      onClick={() => {
                        if (isFlagship) {
                          onNavigate('/portfolio/gpu-infrastructure-platform');
                        } else if (item.id === 'internal-developer-platform') {
                          onNavigate('/portfolio/internal-developer-platform');
                        } else if (item.id === 'customer-requirement-product-feature') {
                          onNavigate('/portfolio/customer-requirements-product-feature');
                        } else {
                          onOpenSecondaryCase(item.id);
                        }
                      }}
                      className={`inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-md transition-all ${
                        isFlagship || item.id === 'internal-developer-platform' || item.id === 'customer-requirement-product-feature'
                          ? 'bg-[#141413] text-[#FAF9F5] hover:bg-[#2A2925]'
                          : 'bg-white border border-[#D8D6CE] text-[#141413] hover:border-[#B85D19] hover:text-[#B85D19]'
                      }`}
                    >
                      <span>
                        {isFlagship
                          ? 'View flagship case study'
                          : item.id === 'internal-developer-platform' || item.id === 'customer-requirement-product-feature'
                          ? 'View case study'
                          : 'View case overview'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="text-[11px] font-mono text-[#8E8C85] hidden sm:block">
                      Role: {item.role.split('/')[0].trim()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (EDITORIAL COMPOSITION) */}
      <TestimonialSection
        onNavigate={onNavigate}
        onOpenSecondaryCase={onOpenSecondaryCase}
      />

      {/* 6. FINAL BRAND IMPRESSION & CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-14 rounded-2xl bg-[#141413] text-[#FAF9F5] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-5 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
              The Core Impression
            </span>

            {/* 5 Evaluator Anchors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-[#E0DDD5] font-medium">
              <div>• Technical enough for CTOs.</div>
              <div>• Commercial enough for founders.</div>
              <div>• Product-focused enough for PM leadership.</div>
              <div>• Customer-aware enough for B2B environments.</div>
              <div className="sm:col-span-2">• Executive enough to sit in serious stakeholder conversations.</div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white leading-snug pt-2">
              Have a product problem worth unpacking?
            </h2>

            <p className="text-sm sm:text-base text-[#B6B4AC] leading-relaxed">
              If you're building a technical product, scaling an existing platform, or trying to turn a complex technology capability into something customers can actually use, I'd be happy to talk through it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://www.linkedin.com/in/rushabhpatadia"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-md bg-white text-[#141413] text-sm font-medium hover:bg-[#EAE8E1] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:rushabhpatadia2003@gmail.com"
              className="px-6 py-3.5 rounded-md bg-[#21201D] text-white border border-[#33322E] text-sm font-medium hover:bg-[#2E2C28] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
