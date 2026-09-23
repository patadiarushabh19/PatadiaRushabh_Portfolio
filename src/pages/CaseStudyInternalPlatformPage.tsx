import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Cpu,
  Terminal,
  Shield,
  CheckCircle2,
  AlertCircle,
  GitBranch,
  Settings,
  Server,
  Zap,
  Clock,
  Compass,
  Sliders,
  Users,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Code2,
  Workflow,
  Eye,
  FileText,
  Boxes,
} from 'lucide-react';

interface CaseStudyInternalPlatformPageProps {
  onNavigate: (path: string) => void;
  onOpenSecondaryCase?: (id: string) => void;
}

export const CaseStudyInternalPlatformPage: React.FC<CaseStudyInternalPlatformPageProps> = ({
  onNavigate,
  onOpenSecondaryCase,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [selectedDiagramTier, setSelectedDiagramTier] = useState<'experience' | 'capabilities' | 'infrastructure'>('experience');

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'product-model', label: 'Product' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'execution', label: 'Execution' },
    { id: 'outcome', label: 'Outcome' },
  ];

  // Scrollspy to highlight active section in sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141413] selection:bg-[#F2EFE9] selection:text-[#141413]">
      {/* Sticky Secondary Navigation Bar */}
      <div className="sticky top-18 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-all">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-12 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#73716B] hover:text-[#141413] transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#8E8C85]" />
            <span>Portfolio / Case Study 02</span>
          </button>

          {/* Nav Items (Desktop) */}
          <nav className="hidden sm:flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none ${
                    isActive
                      ? 'text-[#141413] bg-[#EFECE6] font-semibold'
                      : 'text-[#6B6964] hover:text-[#141413] hover:bg-[#F5F3ED]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Compact Nav (Mobile Scrollable) */}
          <div className="sm:hidden flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 py-1 text-[11px] whitespace-nowrap rounded font-medium ${
                  activeSection === item.id ? 'bg-[#EFECE6] text-[#141413]' : 'text-[#73716B]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 md:py-16 space-y-20 md:space-y-24">
        {/* 01. HERO SECTION */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-wider uppercase text-[#B85D19] font-medium">
              Case Study 02 / Internal Developer Platform
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#141413] tracking-tight leading-[1.18] text-balance">
              Making infrastructure easier for developers to use, without hiding the complexity engineering had to manage.
            </h1>
            <p className="text-base sm:text-lg text-[#5C5A55] font-normal pt-1">
              Product Management · Technical Product Leadership
            </p>
          </div>

          {/* Metadata Row: Clean unboxed metadata with subtle dividers */}
          <div className="pt-6 border-t border-[#E8E6DF] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#5C5A55]">
            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[10px] block">
                Domain
              </span>
              <p className="font-medium text-[#141413] leading-relaxed">
                Developer Experience · Cloud Infrastructure · Platform Engineering
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[10px] block">
                Focus
              </span>
              <p className="font-medium text-[#141413] leading-relaxed">
                Discovery · Requirements · Prioritization · Execution
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[10px] block">
                Stakeholders
              </span>
              <p className="font-medium text-[#141413] leading-relaxed">
                Developers · Infrastructure · Engineering · Business
              </p>
            </div>
          </div>
        </section>

        {/* 02. ONE-MINUTE OVERVIEW */}
        <section id="overview" className="space-y-6 scroll-mt-28">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              Executive Summary
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">
              90-second read
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C2410C] font-semibold block">
                The Problem
              </span>
              <p className="text-xs sm:text-sm text-[#33322E] leading-relaxed">
                Developers needed infrastructure capabilities, but the underlying infrastructure was becoming a source of friction. Ad-hoc requests created bottlenecks, cognitive fatigue, and release anxiety.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-semibold block">
                The Product Question
              </span>
              <p className="text-xs sm:text-sm text-[#33322E] leading-relaxed">
                How can infrastructure capabilities become a simpler, more consistent developer experience without removing the operational rigor that engineering and site reliability depend on?
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-semibold block">
                My Role
              </span>
              <p className="text-xs sm:text-sm text-[#33322E] leading-relaxed">
                Translate developer needs and operational constraints into product requirements, standardized workflows, and phased release priorities. Partnered directly with engineering and infrastructure leads.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#73716B] font-semibold block">
                The Direction
              </span>
              <p className="text-xs sm:text-sm text-[#33322E] leading-relaxed">
                Build an internal platform experience that standardizes recurring workflows through governed self-service, while keeping the underlying infrastructure flexible and resilient.
              </p>
            </div>
          </div>
        </section>

        {/* 03. THE PROBLEM */}
        <section id="problem" className="space-y-8 scroll-mt-28">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              01 / The Core Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              The infrastructure worked. The experience needed work.
            </h2>
            <p className="text-sm sm:text-base text-[#5C5A55] leading-relaxed max-w-3xl">
              The organization’s cloud and server infrastructure was technically capable, but accessing it required developers to navigate fragmented tools, bespoke tickets, and tribal knowledge. The product challenge was reducing unnecessary cognitive and operational load for developers while preserving technical control.
            </p>
          </div>

          {/* Workflow Comparison: Old vs Desired */}
          <div className="space-y-4">
            {/* The Old Experience */}
            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] font-medium">
                  Previous Experience · Fragmented & Friction-Heavy
                </span>
                <span className="text-[11px] font-mono text-[#C2410C]">High Coordination Cost</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5C5A55] font-mono">
                <span className="px-2.5 py-1.5 bg-[#FAF9F5] rounded border border-[#E8E6DF] text-[#141413]">
                  Developer request
                </span>
                <span className="text-[#8E8C85]">→</span>
                <span className="px-2.5 py-1.5 bg-[#FAF9F5] rounded border border-[#E8E6DF] text-[#73716B]">
                  Manual coordination
                </span>
                <span className="text-[#8E8C85]">→</span>
                <span className="px-2.5 py-1.5 bg-[#FAF9F5] rounded border border-[#E8E6DF] text-[#73716B]">
                  Infrastructure decisions
                </span>
                <span className="text-[#8E8C85]">→</span>
                <span className="px-2.5 py-1.5 bg-[#FAF9F5] rounded border border-[#E8E6DF] text-[#73716B]">
                  Provisioning
                </span>
                <span className="text-[#8E8C85]">→</span>
                <span className="px-2.5 py-1.5 bg-[#FAF9F5] rounded border border-[#E8E6DF] text-[#73716B]">
                  Configuration
                </span>
                <span className="text-[#8E8C85]">→</span>
                <span className="px-2.5 py-1.5 bg-[#FAF9F5] rounded border border-[#E8E6DF] text-[#73716B]">
                  Handover
                </span>
              </div>
            </div>

            {/* The Desired Experience */}
            <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#ECDCCB] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] font-semibold">
                  Standardized Experience · Governed Self-Service
                </span>
                <span className="text-[11px] font-mono text-[#B85D19]">Golden Path Workflow</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 bg-white rounded border border-[#E8E6DF] text-[#141413] font-medium">
                  Developer
                </span>
                <span className="text-[#B85D19] font-bold">→</span>
                <span className="px-3 py-1.5 bg-[#141413] text-white rounded font-medium">
                  Platform
                </span>
                <span className="text-[#B85D19] font-bold">→</span>
                <span className="px-3 py-1.5 bg-white rounded border border-[#ECDCCB] text-[#B85D19] font-medium">
                  Standardized workflow
                </span>
                <span className="text-[#B85D19] font-bold">→</span>
                <span className="px-3 py-1.5 bg-white rounded border border-[#E8E6DF] text-[#141413] font-medium">
                  Ready environment
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 04. DISCOVERY */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              02 / Groundwork
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Start with the workflow, not the feature list.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Rather than assembling an arbitrary backlog of developer tooling requests, discovery focused on tracing where time and context were being lost between feature teams and infrastructure engineers.
            </p>
          </div>

          {/* Horizontal Discovery Sequence */}
          <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-[540px]">
              {['Observe', 'Interview', 'Map', 'Identify friction', 'Prioritize'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#141413] font-medium">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[#8E8C85]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 5 Concise Friction Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {[
              { title: 'Repeated infrastructure requests', desc: 'Teams frequently requested identical database or compute setups with slight manual variations.' },
              { title: 'Inconsistent workflows', desc: 'Different engineering teams used completely distinct provisioning checklists and deployment scripts.' },
              { title: 'Too much dependency on technical teams', desc: 'Product developers could not self-diagnose blocked environments without paging infrastructure engineers.' },
              { title: 'Ambiguous requirements', desc: 'Infrastructure tickets frequently lacked critical workload specs, causing multiple back-and-forth threads.' },
              { title: 'Manual coordination between teams', desc: 'Handovers happened through ad-hoc chat pings and spreadsheets rather than auditable platform states.' },
            ].map((pt, i) => (
              <div key={i} className="p-4 rounded-lg bg-white border border-[#E8E6DF] space-y-1.5">
                <div className="text-xs font-semibold text-[#141413]">{pt.title}</div>
                <div className="text-xs text-[#6B6964] leading-relaxed">{pt.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. PRODUCT MODEL (MAIN CONCEPTUAL DIAGRAM) */}
        <section id="product-model" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              03 / Conceptual Product Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              A layered abstraction, not an illusion.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed max-w-3xl">
              The platform abstracts unnecessary operational complexity for developers. It does not eliminate technical complexity for the platform engineers responsible for running it.
            </p>
          </div>

          {/* The Main Conceptual Product Diagram */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DFD7] space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F0EEE8]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E8C85]">
                <Layers className="w-4 h-4 text-[#B85D19]" />
                <span className="font-semibold text-[#141413]">Three-Tier Platform Architecture</span>
              </div>
              <span className="text-[11px] font-mono text-[#8E8C85] italic">
                Conceptual product model, generalized for confidentiality.
              </span>
            </div>

            {/* Top Actor: Developer */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#FAF9F5] border border-[#D8D6CE] text-xs font-mono font-medium text-[#141413] shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-[#B85D19]" />
                <span>Developer / Feature Engineering Team</span>
              </div>
              <div className="h-6 w-px bg-[#D0CEC6] my-1" />
              <span className="text-[10px] font-mono text-[#8E8C85]">interacts via standardized self-service</span>
              <div className="h-4 w-px bg-[#D0CEC6] my-0.5" />
            </div>

            {/* Tier 1: Developer Experience Layer */}
            <div
              onClick={() => setSelectedDiagramTier('experience')}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedDiagramTier === 'experience'
                  ? 'bg-[#FAF9F5] border-[#B85D19] ring-1 ring-[#B85D19]/20'
                  : 'bg-white border-[#E8E6DF] hover:border-[#D0CEC6]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#B85D19]">
                    Layer 01
                  </span>
                  <h3 className="text-sm font-semibold text-[#141413]">
                    Developer Experience Layer
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#73716B]">
                  Interface & Governance
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {['Request', 'Configure', 'Provision', 'Manage'].map((action) => (
                  <div
                    key={action}
                    className="p-2.5 rounded bg-white border border-[#E8E6DF] text-center text-[#141413] font-medium"
                  >
                    {action}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6B6964] mt-3 leading-relaxed">
                Provides declarative, predictable entry points. Developers declare intent (what application environment they need) rather than scripting raw cloud resources.
              </p>
            </div>

            {/* Downward Connector */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-px bg-[#D0CEC6]" />
              <span className="text-[10px] font-mono text-[#8E8C85] my-1">
                translates into orchestrated platform workflows
              </span>
              <div className="h-4 w-px bg-[#D0CEC6]" />
            </div>

            {/* Tier 2: Platform Capabilities */}
            <div
              onClick={() => setSelectedDiagramTier('capabilities')}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedDiagramTier === 'capabilities'
                  ? 'bg-[#FAF9F5] border-[#B85D19] ring-1 ring-[#B85D19]/20'
                  : 'bg-white border-[#E8E6DF] hover:border-[#D0CEC6]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#B85D19]">
                    Layer 02
                  </span>
                  <h3 className="text-sm font-semibold text-[#141413]">
                    Platform Capabilities
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#73716B]">
                  Core Orchestration & Policies
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
                {[
                  'Environments',
                  'Deployment',
                  'Access',
                  'Workflows',
                  'Observability',
                ].map((cap) => (
                  <div
                    key={cap}
                    className="p-2.5 rounded bg-white border border-[#E8E6DF] text-center text-[#33322E]"
                  >
                    {cap}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#6B6964] mt-3 leading-relaxed">
                Applies organization security policies, network zoning, automated secret rotation, and role-based access before any infrastructure provisioning occurs.
              </p>
            </div>

            {/* Downward Connector */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-px bg-[#D0CEC6]" />
              <span className="text-[10px] font-mono text-[#8E8C85] my-1">
                binds to governed cloud and hardware primitives
              </span>
              <div className="h-4 w-px bg-[#D0CEC6]" />
            </div>

            {/* Tier 3: Infrastructure */}
            <div
              onClick={() => setSelectedDiagramTier('infrastructure')}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedDiagramTier === 'infrastructure'
                  ? 'bg-[#FAF9F5] border-[#B85D19] ring-1 ring-[#B85D19]/20'
                  : 'bg-white border-[#E8E6DF] hover:border-[#D0CEC6]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#B85D19]">
                    Layer 03
                  </span>
                  <h3 className="text-sm font-semibold text-[#141413]">
                    Infrastructure Layer
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#73716B]">
                  Physical & Virtual Primitives
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {['Compute', 'Network', 'Storage', 'Cloud Resources'].map(
                  (infra) => (
                    <div
                      key={infra}
                      className="p-2.5 rounded bg-white border border-[#E8E6DF] text-center text-[#5C5A55]"
                    >
                      {infra}
                    </div>
                  )
                )}
              </div>
              <p className="text-xs text-[#6B6964] mt-3 leading-relaxed">
                Bare-metal instances, cloud VPCs, persistent block storage, DNS, and IAM boundaries. Managed directly by infrastructure engineers with automated safety rails.
              </p>
            </div>

            {/* Thesis Banner */}
            <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] flex items-center justify-between text-xs text-[#474540]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B85D19]" />
                <span className="font-medium text-[#141413]">Design Principle:</span>
                <span>The platform abstracts unnecessary complexity. It does not eliminate technical complexity.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 06. PRODUCT DECISIONS */}
        <section id="decisions" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              04 / Product Judgment
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              The product was shaped by a few important decisions.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Every platform faces the temptation to accommodate every team’s idiosyncratic scripts. Establishing clear product boundaries protected both velocity and reliability.
            </p>
          </div>

          {/* 2x2 Grid with four decisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Decision 01 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B85D19] font-bold">
                  01 / Common Path
                </span>
                <span className="text-[10px] font-mono text-[#8E8C85] uppercase">Standardization</span>
              </div>
              <h3 className="text-base font-semibold text-[#141413]">
                Standardize the common path
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A55] leading-relaxed">
                Create predictable workflows for recurring developer needs instead of supporting every possible variation. 80% of teams needed uniform staging and deployment topologies.
              </p>
            </div>

            {/* Decision 02 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B85D19] font-bold">
                  02 / Interface Boundary
                </span>
                <span className="text-[10px] font-mono text-[#8E8C85] uppercase">Encapsulation</span>
              </div>
              <h3 className="text-base font-semibold text-[#141413]">
                Keep complexity behind the interface
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A55] leading-relaxed">
                Developers should not need to understand every infrastructure dependency to complete a common workflow. Configuration inputs were kept declarative and minimal.
              </p>
            </div>

            {/* Decision 03 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B85D19] font-bold">
                  03 / Practicality
                </span>
                <span className="text-[10px] font-mono text-[#8E8C85] uppercase">Technical Feasibility</span>
              </div>
              <h3 className="text-base font-semibold text-[#141413]">
                Build for engineering reality
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A55] leading-relaxed">
                Product requirements had to account for infrastructure constraints, security policies, deployment dependencies, and clear operational ownership across services.
              </p>
            </div>

            {/* Decision 04 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2DFD7] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B85D19] font-bold">
                  04 / Phased Scope
                </span>
                <span className="text-[10px] font-mono text-[#8E8C85] uppercase">Cadence</span>
              </div>
              <h3 className="text-base font-semibold text-[#141413]">
                Avoid building everything at once
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5A55] leading-relaxed">
                Prioritize the workflows with the clearest recurring value before expanding platform capabilities. Initial releases solved ephemeral test environments before production pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* 07. PRODUCT + ENGINEERING */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              05 / Cross-Functional Reality
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Where product thinking met technical reality.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Managing an internal developer platform requires balancing developer ergonomics against infrastructure durability.
            </p>
          </div>

          {/* Horizontal Flow */}
          <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-[700px]">
              {[
                { label: 'Developer Need', type: 'user' },
                { label: 'Product Requirement', type: 'pm' },
                { label: 'Technical Discussion', type: 'collab' },
                { label: 'Constraint', type: 'tech' },
                { label: 'Scope Decision', type: 'pm' },
                { label: 'Build', type: 'eng' },
                { label: 'Validation', type: 'collab' },
              ].map((step, idx, arr) => (
                <React.Fragment key={step.label}>
                  <div className="px-3 py-2 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#141413] font-medium whitespace-nowrap">
                    {step.label}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-[#8E8C85]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Editorial Quote Callout */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF]">
            <p className="text-base sm:text-lg text-[#141413] font-normal leading-relaxed italic">
              “Good platform product management requires enough technical understanding to recognize when a requirement is simple for the user but expensive underneath.”
            </p>
            <div className="mt-3 text-xs font-mono text-[#8E8C85]">
              Rushabh Patadia · Technical Product Management Discipline
            </div>
          </div>
        </section>

        {/* 08. STAKEHOLDER ALIGNMENT */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              06 / Stakeholder Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              One platform. Different definitions of success.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Internal tools often fail because they optimize for one constituency at the expense of others. Success required bringing four viewpoints into alignment.
            </p>
          </div>

          {/* 4 Minimal Stakeholder Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block font-semibold">
                Developers
              </span>
              <p className="text-sm font-medium text-[#141413]">
                Faster, clearer workflows.
              </p>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                Self-service execution without waiting on tickets or wrestling with obscure YAML configurations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block font-semibold">
                Engineering
              </span>
              <p className="text-sm font-medium text-[#141413]">
                Clear requirements & manageable scope.
              </p>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                Protection from unending custom requests and unbounded feature creep across specialized teams.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block font-semibold">
                Infrastructure
              </span>
              <p className="text-sm font-medium text-[#141413]">
                Operational control & reliability.
              </p>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                Guaranteed security policies, network boundary enforcement, and predictable resource utilization.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block font-semibold">
                Business
              </span>
              <p className="text-sm font-medium text-[#141413]">
                Scalable internal execution.
              </p>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                A platform that scales engineering velocity without linearly increasing coordination headcount.
              </p>
            </div>
          </div>

          {/* Rushabh in the Center as Product */}
          <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] font-bold">
                  Product Role
                </span>
                <span className="text-xs text-[#141413] font-semibold">
                  Rushabh Patadia
                </span>
              </div>
              <p className="text-xs text-[#5C5A55]">
                Cross-functional translation and roadmap ownership.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#141413]">
              <span className="px-2.5 py-1 bg-white rounded border border-[#E8E6DF]">Translate</span>
              <span className="text-[#8E8C85]">→</span>
              <span className="px-2.5 py-1 bg-white rounded border border-[#E8E6DF]">Prioritize</span>
              <span className="text-[#8E8C85]">→</span>
              <span className="px-2.5 py-1 bg-white rounded border border-[#E8E6DF]">Align</span>
              <span className="text-[#8E8C85]">→</span>
              <span className="px-2.5 py-1 bg-white rounded border border-[#E8E6DF] font-semibold text-[#B85D19]">Decide</span>
            </div>
          </div>
        </section>

        {/* 09. EXECUTION */}
        <section id="execution" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              07 / Execution Loop
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Iterative delivery grounded in developer validation.
            </h2>
          </div>

          {/* Execution Steps */}
          <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-[580px]">
              {['Discover', 'Define', 'Prioritize', 'Design', 'Build', 'Validate'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#141413] font-medium">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[#8E8C85]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E8E6DF] text-xs sm:text-sm text-[#474540] leading-relaxed space-y-3">
            <p>
              I worked across product requirements, technical discussions, engineering coordination, stakeholder alignment, and validation. Instead of treating platform delivery as a one-time handoff, I established regular feedback sessions with feature teams to evaluate adoption hurdles and refine interface ergonomics before expanding platform capabilities.
            </p>
            <p className="text-xs text-[#73716B]">
              My focus remained on ownership, boundary management, and ensuring engineering effort was spent on the highest-leverage workflows rather than edge-case feature requests.
            </p>
          </div>
        </section>

        {/* 10. OUTCOME */}
        <section id="outcome" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              08 / Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              What changed
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              The impact of the internal platform was reflected in day-to-day team clarity, predictable operations, and smoother collaboration across disciplines.
            </p>
          </div>

          {/* Large Outcome Statements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'More structured developer workflows',
                desc: 'Recurring environment provisioning and configuration shifted from opaque tickets to repeatable, self-documenting workflows.',
              },
              {
                title: 'Clearer translation between requirements and capabilities',
                desc: 'Developers gained declarative clarity on what could be provisioned without needing to decipher low-level cloud network rules.',
              },
              {
                title: 'Reduced dependency on ad-hoc coordination',
                desc: 'Eliminated constant back-and-forth Slack interruptions for standard development and staging setups.',
              },
              {
                title: 'A stronger foundation for future platform capabilities',
                desc: 'Standardized interfaces created a governed architecture that allowed infrastructure teams to upgrade underlying cloud resources safely.',
              },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B85D19] shrink-0" />
                  <h3 className="text-sm font-semibold text-[#141413]">
                    {outcome.title}
                  </h3>
                </div>
                <p className="text-xs text-[#5C5A55] leading-relaxed pl-6">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. WHAT I LEARNED */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              09 / Retrospective
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              What I learned
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono text-[#B85D19] font-bold">
                01
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Platform products are products
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                The interface, workflow, and developer experience matter as much as the infrastructure underneath. If an internal tool is painful to use, teams will build their own shadow workarounds.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono text-[#B85D19] font-bold">
                02
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Abstraction has a limit
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                Hide unnecessary complexity, but do not hide the constraints that affect reliability, security, or operational ownership. Developers need visibility into state when things fail.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono text-[#B85D19] font-bold">
                03
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Internal users are still users
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                Developer experience deserves the same discovery rigor, user empathy, and product discipline as an external customer-facing product.
              </p>
            </div>
          </div>
        </section>

        {/* 12. MY CONTRIBUTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              10 / Scope of Contribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              My contribution
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Product
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Requirements definition</div>
                <div>Scope prioritization</div>
                <div>Workflow design</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Technology
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Cloud primitives</div>
                <div>Infrastructure constraints</div>
                <div>Platform boundaries</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                People
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Engineering coordination</div>
                <div>Infrastructure buy-in</div>
                <div>Stakeholder alignment</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Business
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Operational efficiency</div>
                <div>Engineering velocity</div>
                <div>Internal execution</div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. CONFIDENTIALITY NOTE */}
        <div className="pt-8 border-t border-[#E8E6DF] text-center">
          <p className="text-xs text-[#8E8C85] italic max-w-2xl mx-auto leading-relaxed">
            Some project details have been generalized to respect organizational confidentiality. The case study focuses on the product problem, decisions, execution and lessons learned.
          </p>
        </div>

        {/* 14. NEXT CASE STUDY & BACK TO PORTFOLIO */}
        <section className="pt-6 border-t border-[#E8E6DF] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-[#E2DFD7]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                Next Case Study
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-[#141413]">
                03 / Customer Requirements → Product Feature
              </h3>
              <p className="text-xs text-[#5C5A55] max-w-md">
                Turning real customer requirements into product decisions and shipped functionality.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/portfolio/customer-requirements-product-feature')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#141413] text-white text-xs font-medium hover:bg-[#2A2925] transition-colors"
              >
                <span>View case study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#73716B] hover:text-[#141413] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </button>

            <button
              onClick={() => onNavigate('/portfolio/gpu-infrastructure-platform')}
              className="inline-flex items-center gap-1.5 text-xs text-[#B85D19] hover:underline font-medium"
            >
              <span>View Case Study 01 (GPU Infrastructure)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-5 text-center">
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#141413] tracking-tight">
              Have a product problem worth unpacking?
            </h3>
            <p className="text-sm text-[#5C5A55]">
              Let’s talk.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:rushabhpatadia2003@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#141413] text-white text-xs font-medium hover:bg-[#2A2925] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B85D19]" />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rushabhpatadia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#D8D6CE] text-[#141413] text-xs font-medium hover:bg-[#F0EEE8] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/patadiarushabh19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#D8D6CE] text-[#141413] text-xs font-medium hover:bg-[#F0EEE8] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
