import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Linkedin,
  Github,
  Check,
} from 'lucide-react';

interface CaseStudyCustomerRequirementsPageProps {
  onNavigate: (path: string) => void;
  onOpenSecondaryCase?: (id: string) => void;
}

export const CaseStudyCustomerRequirementsPage: React.FC<CaseStudyCustomerRequirementsPageProps> = ({
  onNavigate,
  onOpenSecondaryCase,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [activeTransformStage, setActiveTransformStage] = useState<number>(0);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'decision', label: 'Decision' },
    { id: 'build', label: 'Build' },
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

  const transformationStages = [
    {
      step: '01',
      title: 'Customer Request',
      prompt: '"Can you add X?"',
      detail: 'Customers propose their perceived solution based on immediate friction.',
    },
    {
      step: '02',
      title: 'Investigation',
      prompt: 'Why do they need it?',
      detail: 'Investigate the task, surrounding workflow, and manual workarounds today.',
    },
    {
      step: '03',
      title: 'Underlying Problem',
      prompt: 'What is actually blocking them?',
      detail: 'Identify the root bottleneck, operational friction, or data gap.',
    },
    {
      step: '04',
      title: 'Product Requirement',
      prompt: 'What should the product solve?',
      detail: 'Define clear functional capabilities independent of user UI preconceptions.',
    },
    {
      step: '05',
      title: 'Product Decision',
      prompt: 'What is worth building?',
      detail: 'Evaluate recurring customer value against engineering cost and architecture debt.',
    },
    {
      step: '06',
      title: 'Feature',
      prompt: 'What gets shipped?',
      detail: 'A scalable, maintainable platform capability that solves the real workflow.',
    },
  ];

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
            <span>Portfolio / Case Study 03</span>
          </button>

          {/* Desktop Nav */}
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

          {/* Mobile Scrollable Nav */}
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
              Case Study 03 / Customer → Product
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#141413] tracking-tight leading-[1.18] text-balance">
              Turning what customers asked for into what the product actually needed.
            </h1>
            <p className="text-base sm:text-lg text-[#5C5A55] font-normal pt-1">
              Product Management · Customer Discovery · Technical Product
            </p>
          </div>

          {/* Compact Metadata Row */}
          <div className="pt-6 border-t border-[#E8E6DF] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#5C5A55]">
            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[10px] block">
                Role
              </span>
              <p className="font-medium text-[#141413] leading-relaxed">
                Product Management · Customer Discovery
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[10px] block">
                Domain
              </span>
              <p className="font-medium text-[#141413] leading-relaxed">
                B2B Product · Customer Experience · Product Development
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[10px] block">
                Focus
              </span>
              <p className="font-medium text-[#141413] leading-relaxed">
                Discovery · Requirements · Prioritization · Engineering
              </p>
            </div>
          </div>
        </section>

        {/* 02. THE STORY IN ONE SCREEN (SIGNATURE TRANSFORMATION VISUAL) */}
        <section id="overview" className="space-y-6 scroll-mt-28">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              The Story in One Screen
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">
              Transformation Pipeline
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DFD7] space-y-6 shadow-xs">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#141413] tracking-tight">
                From Customer Request to Shipped Capability
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5A55] leading-relaxed">
                Customers experience friction in daily work but often request prescriptive point solutions. Product management interprets those signals into cohesive platform features.
              </p>
            </div>

            {/* Visual Transformation Sequence */}
            <div className="space-y-2 pt-2">
              {transformationStages.map((stage, idx) => {
                const isActive = activeTransformStage === idx;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveTransformStage(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FAF9F5] border-[#B85D19]'
                        : 'bg-white border-[#E8E6DF] hover:border-[#D0CEC6]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#B85D19]">
                          {stage.step}
                        </span>
                        <span className="font-medium text-sm text-[#141413]">
                          {stage.title}
                        </span>
                        <span className="text-xs font-mono text-[#73716B] bg-white px-2 py-0.5 rounded border border-[#E8E6DF]">
                          {stage.prompt}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#5C5A55] mt-1.5 leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 03. THE PROBLEM */}
        <section className="space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              01 / Core Premise
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              A feature request is not a product requirement.
            </h2>
            <p className="text-sm sm:text-base text-[#5C5A55] leading-relaxed max-w-3xl">
              Customers often describe the solution they believe they need based on familiarity or immediate symptoms. The product manager’s job is to understand the problem underneath that request.
            </p>
          </div>

          {/* 4-Stage Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C2410C] font-semibold block">
                What We Heard
              </span>
              <div className="text-sm font-semibold text-[#141413]">
                “We need this feature.”
              </div>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                A prescriptive request describing an isolated interface change.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D19] font-semibold block">
                What We Investigated
              </span>
              <div className="text-sm font-semibold text-[#141413]">
                “What are you trying to accomplish?”
              </div>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                The surrounding workflow, team dependencies, and friction points.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#141413] font-semibold block">
                What We Found
              </span>
              <div className="text-sm font-semibold text-[#141413]">
                The actual workflow friction.
              </div>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                The real operational impediment or manual coordination bottleneck.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#141413] font-semibold block">
                What We Built
              </span>
              <div className="text-sm font-semibold text-[#141413]">
                A product response.
              </div>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                A structured capability addressing the root issue for all users.
              </p>
            </div>
          </div>
        </section>

        {/* 04. CUSTOMER DISCOVERY */}
        <section id="discovery" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              02 / Groundwork
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Before writing the requirement, understand the workflow.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Structured discovery prevents building cosmetic patches that leave core operational friction unresolved.
            </p>
          </div>

          {/* 5 Compact Steps */}
          <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-[540px]">
              {['Listen', 'Question', 'Reconstruct', 'Validate', 'Frame'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <span className="px-3.5 py-1.5 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#141413] font-medium">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[#8E8C85]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 6 Discovery Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {[
              { q: 'Who experiences the problem?', desc: 'The exact operator or team member carrying the friction.' },
              { q: 'At what point in the workflow?', desc: 'The specific handoff, trigger, or review gate that stalls.' },
              { q: 'What are they doing today?', desc: 'Manual workarounds, offline spreadsheets, and side conversations.' },
              { q: 'What breaks or creates friction?', desc: 'Whether the breakdown is speed, error rates, or visibility.' },
              { q: 'What happens if nothing changes?', desc: 'Business impact on efficiency, customer retention, or risk.' },
              { q: 'One-off or recurring problem?', desc: 'Whether this is an isolated edge case or a shared pattern.' },
            ].map((dim, i) => (
              <div key={i} className="p-4 rounded-lg bg-white border border-[#E8E6DF] space-y-1">
                <div className="text-xs font-semibold text-[#141413] flex items-center gap-1.5">
                  <span className="text-[#B85D19] font-mono">0{i + 1}</span>
                  <span>{dim.q}</span>
                </div>
                <p className="text-xs text-[#6B6964] leading-relaxed">
                  {dim.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. REQUIREMENT TRANSLATION (SIGNATURE VISUAL 2) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              03 / Translation Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Translating customer language into product language.
            </h2>
          </div>

          {/* Clean Three-Layer Model */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DFD7] space-y-5 shadow-xs">
            <div className="space-y-3">
              {/* Layer 1 */}
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8E8C85]">
                    Customer Language
                  </span>
                  <span className="text-[10px] font-mono text-[#C2410C]">Surface Ask</span>
                </div>
                <div className="font-mono text-sm font-medium text-[#141413]">
                  “I want X.”
                </div>
              </div>

              {/* Downward Connector */}
              <div className="text-center text-xs font-mono text-[#8E8C85]">↓ deconstruct workflow</div>

              {/* Layer 2 */}
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8E8C85]">
                    Problem Language
                  </span>
                  <span className="text-[10px] font-mono text-[#B85D19]">Friction Context</span>
                </div>
                <div className="font-mono text-sm font-medium text-[#141413]">
                  “I am struggling to accomplish Y because Z.”
                </div>
              </div>

              {/* Downward Connector */}
              <div className="text-center text-xs font-mono text-[#8E8C85]">↓ frame capability</div>

              {/* Layer 3 */}
              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#ECDCCB] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#B85D19]">
                    Product Language
                  </span>
                  <span className="text-[10px] font-mono text-[#B85D19]">Platform Requirement</span>
                </div>
                <div className="font-mono text-sm font-medium text-[#141413]">
                  “The product should enable Y through X or an alternative solution.”
                </div>
              </div>
            </div>

            {/* Illustrative Anonymized Scenario */}
            <div className="pt-4 border-t border-[#F0EEE8] space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#141413] font-semibold">
                  Illustrative Example
                </span>
                <span className="text-[10px] font-mono text-[#8E8C85] italic">
                  Anonymized scenario
                </span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] space-y-1.5 text-xs text-[#33322E]">
                <div><strong className="text-[#8E8C85] font-mono">Ask:</strong> “Add a raw CSV export button to each overview page.”</div>
                <div><strong className="text-[#8E8C85] font-mono">Problem:</strong> Users were manually consolidating reconciliation numbers into external sheets every week.</div>
                <div><strong className="text-[#B85D19] font-mono">Outcome:</strong> We introduced automated reconciliation reporting directly in the platform, eliminating manual exports entirely.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. PRIORITIZATION */}
        <section id="decision" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              04 / Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Not every valid request deserves a feature.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Every addition brings continuous maintenance and cognitive overhead. Prioritization protects product focus.
            </p>
          </div>

          {/* Minimal 2x2 Prioritization Matrix */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2DFD7] space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE8]">
              <span className="text-xs font-mono text-[#8E8C85] uppercase">
                Customer Value vs. Engineering Cost
              </span>
              <span className="text-[11px] font-mono text-[#73716B]">Evaluation Zones</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#ECDCCB] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#B85D19]">
                    High Value / Lower Complexity
                  </span>
                  <span className="text-[10px] font-mono text-[#B85D19] uppercase font-semibold">Strong Candidates</span>
                </div>
                <p className="text-xs text-[#5C5A55] leading-relaxed">
                  Recurring workflows with clear customer impact and manageable implementation cost.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E6DF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#141413]">
                    High Value / High Complexity
                  </span>
                  <span className="text-[10px] font-mono text-[#73716B] uppercase font-semibold">Investigate Carefully</span>
                </div>
                <p className="text-xs text-[#5C5A55] leading-relaxed">
                  Strategic capabilities that require detailed discovery and phased architecture design.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E6DF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#73716B]">
                    Lower Value / Lower Complexity
                  </span>
                  <span className="text-[10px] font-mono text-[#8E8C85] uppercase">Opportunistic</span>
                </div>
                <p className="text-xs text-[#6B6964] leading-relaxed">
                  Small ergonomic fixes addressed when refactoring adjacent code.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8E8C85]">
                    Lower Value / High Complexity
                  </span>
                  <span className="text-[10px] font-mono text-[#C2410C] uppercase font-semibold">Usually Defer</span>
                </div>
                <p className="text-xs text-[#73716B] leading-relaxed">
                  Bespoke requests with high ongoing maintenance and limited broader utility.
                </p>
              </div>
            </div>

            {/* 3 Decision Questions */}
            <div className="pt-4 border-t border-[#F0EEE8] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block font-semibold">
                Three Decision Questions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#FAF9F5] rounded border border-[#E8E6DF] space-y-0.5">
                  <span className="font-semibold text-[#141413] block">How many users face this?</span>
                  <span className="text-[#5C5A55]">Breadth of user impact across accounts.</span>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded border border-[#E8E6DF] space-y-0.5">
                  <span className="font-semibold text-[#141413] block">How important is the workflow?</span>
                  <span className="text-[#5C5A55]">Criticality to operational outcomes.</span>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded border border-[#E8E6DF] space-y-0.5">
                  <span className="font-semibold text-[#141413] block">What does it cost to support?</span>
                  <span className="text-[#5C5A55]">Engineering build and maintenance burden.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07. THE PRODUCT DECISION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              05 / Product Judgment
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              The important decision was not “build or don’t build.”
            </h2>
            <p className="text-sm sm:text-base text-[#5C5A55] leading-relaxed max-w-3xl">
              It was: <span className="text-[#141413] font-medium">What is the smallest product change that solves the real problem without creating unnecessary complexity?</span>
            </p>
          </div>

          {/* 3 Conceptual Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="font-mono text-xs text-[#8E8C85] font-bold">
                Option A
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Build exactly what was requested
              </h3>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                Add bespoke toggles matching the customer’s exact spec. High risk of UI bloat and fragmentation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#ECDCCB] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B85D19] font-bold">
                  Option B (Selected)
                </span>
                <span className="text-[10px] font-mono text-[#B85D19] uppercase font-semibold">Chosen Path</span>
              </div>
              <h3 className="text-sm font-semibold text-[#141413]">
                Solve the underlying problem simply
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                Standardize the workflow natively. Solves the pain point cleanly without exposing fragile complexity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="font-mono text-xs text-[#8E8C85] font-bold">
                Option C
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Defer until stronger evidence exists
              </h3>
              <p className="text-xs text-[#6B6964] leading-relaxed">
                Provide an operational workaround while observing if other customers experience identical blockers.
              </p>
            </div>
          </div>

          {/* Decision & Trade-off */}
          <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] font-bold">
                Decision & Trade-off
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#474540] leading-relaxed">
              We chose <strong className="text-[#141413]">Option B</strong>: reframing the customer ask into a cohesive capability within existing workflows.
            </p>
            <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] space-y-1 text-xs text-[#5C5A55]">
              <div><strong className="text-[#141413]">Optimized for:</strong> Platform consistency, ease of adoption, and zero maintenance drag.</div>
              <div><strong className="text-[#141413]">Intentionally deferred:</strong> Bespoke custom configurations unique to a single customer setup.</div>
            </div>
          </div>
        </section>

        {/* 08. PRODUCT + ENGINEERING */}
        <section id="build" className="space-y-6 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              06 / Engineering Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              A requirement only becomes useful when engineering can act on it.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Moving from discovery to delivery requires translating user context into precise technical boundaries.
            </p>
          </div>

          {/* Compact Flow */}
          <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-[650px]">
              {[
                'Problem',
                'Requirement',
                'Acceptance Criteria',
                'Technical Discussion',
                'Implementation',
                'Validation',
              ].map((item, idx, arr) => (
                <React.Fragment key={item}>
                  <span className="px-3 py-1.5 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#141413] font-medium whitespace-nowrap">
                    {item}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[#8E8C85]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Cross-functional Areas */}
          <div className="p-5 rounded-xl bg-white border border-[#E8E6DF] space-y-3 text-xs sm:text-sm text-[#474540]">
            <p>
              My involvement spanned every step of the development cycle:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#33322E]">
              <div className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-[#E8E6DF]">
                <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                <span>Clarifying user workflows & intent</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-[#E8E6DF]">
                <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                <span>Discussing technical feasibility & trade-offs</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-[#E8E6DF]">
                <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                <span>Resolving specification edge cases early</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-[#E8E6DF]">
                <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                <span>Coordinating delivery scope & milestones</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-[#E8E6DF]">
                <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                <span>Reviewing implementation against problem intent</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#FAF9F5] border border-[#E8E6DF]">
                <Check className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                <span>Incorporating early feedback loops</span>
              </div>
            </div>
          </div>
        </section>

        {/* 09. VALIDATION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              07 / Feedback Loop
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              Shipping was not the finish line.
            </h2>
            <p className="text-sm text-[#5C5A55] leading-relaxed">
              Validation is where product hypotheses are tested against operational reality.
            </p>
          </div>

          {/* Sequence: Build -> Release -> Observe -> Learn */}
          <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] overflow-x-auto">
            <div className="flex items-center gap-2 text-xs font-mono min-w-[460px]">
              {['Build', 'Release', 'Observe', 'Learn'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <span className="px-4 py-1.5 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#141413] font-medium">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-[#8E8C85]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Qualitative Evidence */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Customer Feedback', desc: 'Confirmation that the root workflow blocker was solved.' },
              { label: 'Support Inquiries', desc: 'Decline in repetitive configuration inquiries.' },
              { label: 'Usage Observations', desc: 'Smooth workflow adoption without specialized training.' },
              { label: 'Engineering Feedback', desc: 'Clean maintainability without unexpected edge regressions.' },
            ].map((item, i) => (
              <div key={i} className="p-3.5 rounded-lg bg-white border border-[#E8E6DF] space-y-1">
                <span className="font-semibold text-xs text-[#141413] block">{item.label}</span>
                <p className="text-[11px] text-[#6B6964] leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
          </div>

          {/* 4 Outcome Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B85D19] shrink-0" />
                <h3 className="text-sm font-semibold text-[#141413]">
                  A clearer product response to customer needs
                </h3>
              </div>
              <p className="text-xs text-[#5C5A55] leading-relaxed pl-6">
                Customers received a reliable solution addressing their workflow friction without introducing bespoke complexity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B85D19] shrink-0" />
                <h3 className="text-sm font-semibold text-[#141413]">
                  Better alignment between expectations and scope
                </h3>
              </div>
              <p className="text-xs text-[#5C5A55] leading-relaxed pl-6">
                Engineering teams were protected from scope churn through clear problem definitions and agreed acceptance criteria.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B85D19] shrink-0" />
                <h3 className="text-sm font-semibold text-[#141413]">
                  Actionable product translation
                </h3>
              </div>
              <p className="text-xs text-[#5C5A55] leading-relaxed pl-6">
                Unstructured client requests were transformed into reusable platform capabilities that served multiple accounts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B85D19] shrink-0" />
                <h3 className="text-sm font-semibold text-[#141413]">
                  A stronger customer feedback loop
                </h3>
              </div>
              <p className="text-xs text-[#5C5A55] leading-relaxed pl-6">
                Customers saw their feedback listened to and addressed systematically, building confidence in product direction.
              </p>
            </div>
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
                Requests contain signals
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                The request itself may not be the solution, but it contains valuable information about customer friction.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono text-[#B85D19] font-bold">
                02
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Discovery improves prioritization
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                Understanding the underlying workflow makes product trade-offs much easier to explain.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2DFD7] space-y-2">
              <span className="text-xs font-mono text-[#B85D19] font-bold">
                03
              </span>
              <h3 className="text-sm font-semibold text-[#141413]">
                Product is a translation function
              </h3>
              <p className="text-xs text-[#5C5A55] leading-relaxed">
                The product manager continuously translates between customer language, business value and engineering reality.
              </p>
            </div>
          </div>
        </section>

        {/* 12. MY ROLE */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              10 / Scope of Contribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
              My role
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Customer
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Discovery interviews</div>
                <div>Customer feedback</div>
                <div>Requirement clarification</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Product
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Problem framing</div>
                <div>Prioritization matrix</div>
                <div>Product decisions</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Engineering
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Technical feasibility</div>
                <div>Scope boundaries</div>
                <div>Execution alignment</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2DFD7] space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
                Business
              </span>
              <div className="text-xs text-[#33322E] space-y-1">
                <div>Customer value</div>
                <div>Product direction</div>
                <div>Strategic trade-offs</div>
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
                04 / RAG Knowledgebase Vault
              </h3>
              <p className="text-xs text-[#5C5A55] max-w-md">
                Turning scattered technical knowledge into something teams could actually retrieve and use.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (onOpenSecondaryCase) {
                    onOpenSecondaryCase('rag-knowledgebase-vault');
                  } else {
                    onNavigate('/');
                  }
                }}
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
              onClick={() => onNavigate('/portfolio/internal-developer-platform')}
              className="inline-flex items-center gap-1.5 text-xs text-[#B85D19] hover:underline font-medium"
            >
              <span>View Case Study 02 (Developer Platform)</span>
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
