import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileCode,
  FileText,
  Mail,
  Linkedin,
  Cpu,
  Users,
  Building2,
  Workflow,
  Activity,
  Compass,
  AlertTriangle,
  Lightbulb,
  Sliders,
} from 'lucide-react';
import { HeroVisualDiagram } from '../components/HeroVisualDiagram';
import { ProductContextTriangle } from '../components/ProductContextTriangle';
import { StakeholderInspector } from '../components/StakeholderInspector';
import { CustomerRequirementsMatrix } from '../components/CustomerRequirementsMatrix';
import { ProductArchitectureLayers } from '../components/ProductArchitectureLayers';
import { ProductToEngineeringFlow } from '../components/ProductToEngineeringFlow';
import { PrioritizationMatrix } from '../components/PrioritizationMatrix';
import { WhiteLabelDiagram } from '../components/WhiteLabelDiagram';
import { CustomerJourneyMap } from '../components/CustomerJourneyMap';
import { DecisionLogDrawer } from '../components/DecisionLogDrawer';
import { TradeOffCards } from '../components/TradeOffCards';
import { ClientRequirementTransformation } from '../components/ClientRequirementTransformation';
import { TechnicalLayersViewer } from '../components/TechnicalLayersViewer';
import { ArtifactModal } from '../components/ArtifactModal';

interface CaseStudyGpuPlatformPageProps {
  onNavigate: (path: string) => void;
  onOpenSecondaryCase: (id: string) => void;
}

export const CaseStudyGpuPlatformPage: React.FC<CaseStudyGpuPlatformPageProps> = ({
  onNavigate,
  onOpenSecondaryCase,
}) => {
  const [activeNavSection, setActiveNavSection] = useState<string>('overview');
  const [openedArtifact, setOpenedArtifact] = useState<string | null>(null);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'users', label: 'Users' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'mvp', label: 'MVP' },
    { id: 'whitelabel', label: 'White-Label' },
    { id: 'journey', label: 'Journey' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'execution', label: 'Execution' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'artifacts', label: 'Artifacts' },
  ];

  // Scrollspy observer for sticky nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNavSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const discoverySteps = [
    {
      num: '01',
      title: 'Collect Customer Requirements',
      action: 'Interviewed AI engineers, cloud infrastructure customers, and commercial partners to identify recurring deployment friction points.',
    },
    {
      num: '02',
      title: 'Separate Requests From Underlying Needs',
      action: 'Distinguished literal technical requests ("give us root IPMI console access") from actual user problems ("we need instant workload recovery when drivers stall").',
    },
    {
      num: '03',
      title: 'Identify Common Patterns',
      action: 'Extracted unified platform requirements across both retail developers and wholesale partners: automated provisioning, transparent billing, and strict multi-tenant isolation.',
    },
    {
      num: '04',
      title: 'Map Technical Constraints',
      action: 'Grounded product expectations in physical PCIe lanes, thermal envelopes, driver parity matrices, and network fabric throughput.',
    },
    {
      num: '05',
      title: 'Identify Commercial Opportunities',
      action: 'Recognized that multi-tenant white-labeling transforms capital-intensive GPU hardware from a single-channel retail product into a high-margin partner distribution engine.',
    },
    {
      num: '06',
      title: 'Translate Into Product Specifications',
      action: 'Synthesized findings into structured PRDs with edge-case specifications, non-functional latency budgets, and declarative API schemas.',
    },
  ];

  const strategyPillars = [
    {
      num: '01',
      title: 'Productize Before Adding Platform Complexity',
      detail: 'Make the core customer experience seamless before adding advanced enterprise features or speculative spot markets.',
    },
    {
      num: '02',
      title: 'Decouple Customer Experience From Hardware Operations',
      detail: 'Allow infrastructure teams to maintain hardware without exposing hypervisor complexity to end customers.',
    },
    {
      num: '03',
      title: 'Architect for Multiple Routes to Market',
      detail: 'Ensure the platform can serve both direct retail customers and white-label reseller partners from a unified core.',
    },
    {
      num: '04',
      title: 'Maintain Platform Simplicity',
      detail: 'Avoid building custom one-off solutions for individual clients that cannot be standardized across the customer base.',
    },
    {
      num: '05',
      title: 'Design for Extensibility',
      detail: 'The initial product should not lock the business into a single GPU model, customer archetype, or commercial billing structure.',
    },
  ];

  const stakeholderPerspectives = [
    {
      stakeholder: 'Business Leadership',
      priorities: 'Revenue velocity, hardware amortization payback, competitive differentiation, and sustainable margin profile.',
      pmBridge: 'Demonstrated how multi-channel distribution accelerates payback periods without requiring headcount to scale linearly with revenue.',
    },
    {
      stakeholder: 'Software Engineering',
      priorities: 'Technical feasibility, clear architectural boundaries, manageable technical debt, and unambiguous scope.',
      pmBridge: 'Provided comprehensive PRDs with deterministic state machines, shielding developers from feature creep and moving requirements.',
    },
    {
      stakeholder: 'Infrastructure & Operations',
      priorities: 'Cluster stability, rack thermal envelopes, manageable operational workload, and reliable automated hardware cordoning.',
      pmBridge: 'Ensured self-service provisioning included pre-flight hardware health verification so broken nodes are never allocated to customers.',
    },
    {
      stakeholder: 'Direct Customers',
      priorities: 'Accessible GPU capacity, transparent pricing, unthrottled hardware throughput, and instant SSH connectivity.',
      pmBridge: 'Eliminated manual NOC tickets in favor of deterministic self-service instance deployment in under 3 minutes.',
    },
    {
      stakeholder: 'Reseller Partners',
      priorities: 'Commercial brand isolation, custom CNAME routing, wholesale pricing margin control, and client account governance.',
      pmBridge: 'Architected dynamic runtime theming and wholesale margin engines on top of the shared platform core.',
    },
  ];

  const teamOperatingModel = [
    {
      step: 'ALIGN',
      description: 'Ensure everyone across engineering, infrastructure, operations, and business leadership understands the product vision and underlying customer problem.',
      pmAction: 'Facilitated discovery readouts and unified strategy sessions to establish shared success metrics.',
    },
    {
      step: 'DECOMPOSE',
      description: 'Break the high-level platform vision into manageable technical, operational, and UX requirements.',
      pmAction: 'Drafted granular PRDs with functional acceptance criteria, API payloads, and state machine transition rules.',
    },
    {
      step: 'COORDINATE',
      description: 'Synchronize dependencies between hardware infrastructure, software engineering, business development, and external partners.',
      pmAction: 'Maintained clear sprint backlogs, managed cross-functional blockers, and aligned hardware delivery milestones with software releases.',
    },
    {
      step: 'UNBLOCK',
      description: 'Remove obstacles rapidly, clarify requirements on the fly, and make decisive calls when technical trade-offs arise.',
      pmAction: 'Provided fast answers to edge-state ambiguities during daily standups, preventing development stalls.',
    },
    {
      step: 'REVIEW',
      description: 'Validate that the built software and infrastructure workflows actually solved the customer problem originally identified.',
      pmAction: 'Conducted user acceptance testing (UAT), reviewed telemetry canaries, and gathered feedback from early pilot cohorts.',
    },
  ];

  const executionPhases = [
    { phase: '01 · Discover', roles: ['Product', 'Customer', 'Business'], focus: 'User interviews, operational friction audits, and market demand synthesis.' },
    { phase: '02 · Define', roles: ['Product', 'Engineering', 'Infrastructure'], focus: 'PRD formulation, latency budgets, state machine specs, and non-functional requirements.' },
    { phase: '03 · Prioritize', roles: ['Product', 'Business', 'Engineering'], focus: 'Value vs. complexity trade-offs, separating Core MVP from Expansion and Later tiers.' },
    { phase: '04 · Design', roles: ['Product', 'Engineering'], focus: 'API contracts, database schema scoping, declarative UI wireframes, and error states.' },
    { phase: '05 · Build', roles: ['Engineering', 'Infrastructure', 'Product'], focus: 'Core orchestration development, driver automation scripts, and tenant isolation gateways.' },
    { phase: '06 · Validate', roles: ['Product', 'Engineering', 'Customer'], focus: 'End-to-end UAT verification, beta cohort onboarding, and telemetry canary monitoring.' },
    { phase: '07 · Iterate', roles: ['Product', 'Engineering', 'Infrastructure', 'Customer'], focus: 'Telemetry-driven performance tuning, rapid bug fixes, and continuous roadmap refinement.' },
  ];

  const metricsFramework = [
    {
      metric: 'Time-to-First-Compute',
      target: '< 180 seconds',
      description: 'How quickly a customer can transition from payment authorization to verified terminal SSH or Jupyter access.',
      pmWhy: 'Direct indicator of onboarding friction; delays cause immediate drop-off.',
    },
    {
      metric: 'Provisioning Success Rate',
      target: '> 99.2%',
      description: 'Percentage of automated node allocation events that complete successfully without human NOC escalation.',
      pmWhy: 'Ensures unit economics scale without requiring manual operational labor.',
    },
    {
      metric: 'Capacity Utilization',
      target: '> 85% sustained',
      description: 'Percentage of live, rack-mounted GPU hardware actively engaged in running customer workloads.',
      pmWhy: 'Primary driver of hardware capex amortization and financial viability.',
    },
    {
      metric: 'Partner Onboarding Time',
      target: '< 24 hours',
      description: 'Elapsed time required to provision and brand a new white-label partner subdomain and sub-account hierarchy.',
      pmWhy: 'Proves the white-label architecture is genuinely metadata-driven rather than bespoke engineering code.',
    },
    {
      metric: 'Support Ticket Volume',
      target: '< 2.5% of launches',
      description: 'Operational issues, configuration questions, or failure alerts reported per 100 instance launches.',
      pmWhy: 'Reflects the clarity of the product abstraction and pre-flight health diagnostics.',
    },
    {
      metric: 'Customer Retention',
      target: 'High repeat usage',
      description: 'Percentage of ML practitioners who return to execute subsequent training or inference workloads.',
      pmWhy: 'Confirms that hardware throughput, driver stability, and pricing meet developer expectations.',
    },
  ];

  const verifiedOutcomes = [
    {
      title: 'Turned Complex GPU Infrastructure into a Consumable Product Experience',
      desc: 'Eliminated manual bare-metal ticketing in favor of a self-service console where AI engineers can deploy pre-configured environments with transparent hourly pricing.',
    },
    {
      title: 'Designed a Platform Capable of Supporting Direct and Partner-Facing Experiences',
      desc: 'Architected a multi-tenant metadata layer enabling commercial partners to distribute GPU compute under their own brand without forking or maintaining separate codebases.',
    },
    {
      title: 'Established Clear Product Requirements for Repeatable Engineering Workflows',
      desc: 'Provided software and infrastructure engineers with deterministic PRDs, state machine contracts, and edge-case criteria, accelerating sprint delivery velocity.',
    },
    {
      title: 'Reduced Manual Operational Effort Through Structured Provisioning Concepts',
      desc: 'Automated node health checks, pre-flight firmware verification, and credential injection, drastically lowering NOC operational intervention.',
    },
    {
      title: 'Created a Scalable Foundation for Future Platform Expansion',
      desc: 'Established modular API contracts and tenant-scoped data models capable of adopting new hardware accelerators and storage topologies without architectural rework.',
    },
  ];

  const improvementsReflections = [
    {
      title: 'Earlier Partner Validation',
      reflection:
        'Engaging prospective white-label resellers earlier during the initial UX framing would have helped surface nuanced margin settlement and billing preferences before finalizing the metadata schema.',
    },
    {
      title: 'Deeper Operational Instrumentation',
      reflection:
        'Defining standardized Prometheus telemetry exporters and node thermal metrics earlier in the development cycle would have accelerated root-cause debugging during initial load tests.',
    },
    {
      title: 'More Granular Permission Models',
      reflection:
        'Designing enterprise role-based access control (RBAC) earlier would have streamlined adoption for large multi-department teams needing separated project quotas under one organization.',
    },
    {
      title: 'Clearer Self-Serve API Documentation',
      reflection:
        'Publishing public OpenAPI specs and interactive curl snippets earlier would have allowed technical ML practitioners to automate cluster provisioning without touching the web console.',
    },
  ];

  const personalContributions = [
    {
      dimension: 'Product',
      tag: 'Strategic Nexus',
      items: [
        'User research and stakeholder discovery interviews',
        'Requirements synthesis and formal PRD authorship',
        'Prioritization and scope trade-off governance (MVP vs. Expansion)',
        'User workflow mapping and interaction experience architecture',
      ],
    },
    {
      dimension: 'Technical',
      tag: 'Systems Literacy',
      items: [
        'Understanding physical GPU, PCIe, InfiniBand, and NVMe constraints',
        'Translating low-level hardware realities into customer product decisions',
        'Participating in joint architectural and feasibility review sessions',
        'Defining operational error states and failure recovery expectations',
      ],
    },
    {
      dimension: 'People',
      tag: 'Cross-Functional Leadership',
      items: [
        'Bridging communication between software engineering and data center ops',
        'Daily standup unblocking and rapid requirement clarification',
        'Executive stakeholder alignment on release timelines and resource bounds',
        'Direct customer engagement and reseller partner consultation',
      ],
    },
    {
      dimension: 'Business',
      tag: 'Commercial Strategy',
      items: [
        'Formulating the multi-channel retail and white-label distribution model',
        'Structuring wholesale partner margin and tiering frameworks',
        'Aligning product packaging with GPU capex payback requirements',
        'Prioritizing features that drive sustained compute cluster utilization',
      ],
    },
  ];

  return (
    <div className="pb-32 bg-[#FBFBFA]">
      {/* =========================================================
          HERO SECTION (Title, Subtitle, Metadata, Confidentiality Note)
          ========================================================= */}
      <section id="overview" className="pt-12 md:pt-20 border-b border-[#E8E6DF] bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#B85D19] uppercase tracking-wider">
              <span>Case Study 01 · Flagship Platform Initiative</span>
              <span aria-hidden="true">·</span>
              <span>Product Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#141413] tracking-tight leading-[1.12]">
              GPU Infrastructure & White-Label Platform
            </h1>

            <p className="text-xl sm:text-2xl font-serif-italic text-[#5C5A55] leading-relaxed">
              Turning infrastructure capability into a product customers and partners could actually consume.
            </p>

            <p className="text-sm sm:text-base text-[#474540] leading-relaxed max-w-3xl pt-2">
              A comprehensive product case study exploring how raw compute capabilities, customer requirements, engineering constraints, and commercial opportunities were translated into a structured GPU cloud platform and white-label partner ecosystem.
            </p>

            {/* Unboxed Metadata */}
            <div className="pt-8 border-t border-[#E8E6DF] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div className="space-y-1">
                <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">Role</span>
                <span className="font-semibold text-[#141413]">
                  Lead Product Manager / Product Architect
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">Domain</span>
                <span className="font-semibold text-[#141413]">
                  Cloud Infrastructure · GPU Compute · Multi-Tenant Platforms
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">Duration</span>
                <span className="font-semibold text-[#141413]">
                  Approximately 1 Year
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">Scope</span>
                <span className="font-semibold text-[#141413]">
                  Strategy · Research · Platform Definition · Delivery
                </span>
              </div>
            </div>

            {/* Subtle Confidentiality Note */}
            <div className="pt-4 text-xs text-[#73716B] leading-relaxed italic border-t border-[#F0EEE8]">
              Some project details have been intentionally generalized or anonymized to respect client and organizational confidentiality. The case study focuses on the product problems, decisions, execution, and lessons learned.
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Sticky Side Navigation & Core Case Study Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Side Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-4 bg-white p-4 rounded-xl border border-[#E8E6DF] shadow-xs">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8E8C85] pb-2 border-b border-[#E8E6DF] flex items-center justify-between">
                <span>Case Navigation</span>
                <span className="text-[#B85D19]">30 Sections</span>
              </div>
              <nav className="space-y-1 text-xs max-h-[60vh] overflow-y-auto pr-1">
                {navItems.map((item) => {
                  const isActive = activeNavSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-1.5 px-2.5 rounded-md transition-colors flex items-center justify-between text-[11px] ${
                        isActive
                          ? 'bg-[#FAF9F5] text-[#B85D19] font-bold border border-[#E8E6DF]'
                          : 'text-[#6B6964] hover:text-[#141413]'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-[#E8E6DF] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#8E8C85] block">
                  Simulated Artifacts
                </span>
                <button
                  onClick={() => setOpenedArtifact('prd')}
                  className="w-full text-left text-xs font-mono text-[#B85D19] hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect PRD Excerpt</span>
                </button>
                <button
                  onClick={() => setOpenedArtifact('white-label')}
                  className="w-full text-left text-xs font-mono text-[#2B4C7E] hover:underline flex items-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Inspect Partner Model</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Core Case Study Body */}
          <main className="lg:col-span-9 space-y-24">
            {/* HERO VISUAL: Custom Conceptual Product Diagram */}
            <div>
              <HeroVisualDiagram />
            </div>

            {/* SECTION 01: EXECUTIVE SUMMARY */}
            <section id="summary" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 01 · High-Level Proof
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  The Product in One Minute
                </h2>
                <p className="text-xs text-[#73716B]">
                  Factual qualitative proof establishing the strategic impact of the product initiative.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs text-[#B85D19] font-bold">
                    01 — Product
                  </span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Structured Customer-Facing Offering
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    GPU infrastructure transformed from raw bare-metal hardware into a repeatable, self-service offering with certified images and transparent hourly pricing.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs text-[#B85D19] font-bold">
                    02 — Platform
                  </span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Dual Direct & Reseller Architecture
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    Designed with both direct developers and reseller use cases in mind, enabling channel partners to distribute capacity under their own commercial identity.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs text-[#B85D19] font-bold">
                    03 — Cross-Functional
                  </span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Holistic Systems Alignment
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    Worked across product strategy, infrastructure engineering, networking operations, customer discovery, and executive finance.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs text-[#B85D19] font-bold">
                    04 — Commercial
                  </span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Multi-Channel Monetization
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    Architected how the same underlying infrastructure pool supports both retail on-demand users and wholesale enterprise partner commitments.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 02: CONTEXT: THE INFRASTRUCTURE REALITY */}
            <section id="context" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Section 02 · Operational Context
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  The Infrastructure Reality
                </h2>
                <p className="text-sm text-[#474540] leading-relaxed max-w-3xl">
                  High-performance computing environments are extraordinarily complex. Raw servers do not assemble themselves into products.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#E8E6DF] space-y-4">
                <p className="text-xs sm:text-sm text-[#33322E] leading-relaxed">
                  Deep technical systems encompass high-density GPU accelerators, high-throughput network fabric (RoCE v2 and InfiniBand), high-IOPS local NVMe scratch arrays, Linux kernel driver compatibility matrices, automated deployment pipelines, and persistent cluster monitoring.
                </p>
                <div className="pt-3 border-t border-[#E8E6DF] text-xs text-[#5C5A55] leading-relaxed">
                  While engineering excelled at keeping physical hardware running in racks, customers could not easily consume it. Access required manual configuration tickets, pricing was negotiated ad-hoc, and there was no predictable interface for an ML engineer to spin up compute and begin training.
                </div>
              </div>
            </section>

            {/* SECTION 03: THE PRODUCT CHALLENGE */}
            <section id="challenge" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 03 · Core Strategic Alignment
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  The Product Challenge
                </h2>
                <p className="text-sm text-[#474540] leading-relaxed max-w-3xl">
                  The challenge was not simply: <em>"How do we provide GPUs?"</em><br />
                  The foundational question was: <strong>How do we turn raw infrastructure capability into something customers can understand, purchase, operate, and potentially resell?</strong>
                </p>
              </div>

              <ProductContextTriangle />
            </section>

            {/* SECTION 04: THE CORE PROBLEM */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 04 · Problem Framing
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Why Infrastructure is Not a Product
                </h2>
              </div>

              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DF] space-y-6">
                <blockquote className="text-xl sm:text-2xl font-normal text-[#141413] tracking-tight leading-snug border-l-4 border-[#B85D19] pl-6">
                  "Having GPU hardware in a data center is an operational capability. It is not a product until a customer can discover it, configure it, provision it, use it, pay for it, and manage it reliably without manual intervention."
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E8E6DF] text-xs">
                  <div className="space-y-1.5">
                    <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">
                      The Operational Gap
                    </span>
                    <div className="font-semibold text-[#141413]">
                      Raw Hardware vs. Managed Access
                    </div>
                    <p className="text-[#5C5A55] leading-relaxed">
                      Engineering focused on server uptime, but customers suffered from unpredictable setup times, missing software environments, and zero visibility into active costs.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">
                      The Commercial Gap
                    </span>
                    <div className="font-semibold text-[#141413]">
                      Retail Speed vs. Partner Scale
                    </div>
                    <p className="text-[#5C5A55] leading-relaxed">
                      Direct users needed instant self-service access via credit card. Meanwhile, commercial partners needed wholesale volume pricing and white-label portal differentiation.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono uppercase text-[#8E8C85] text-[10px] block">
                      The Platform Gap
                    </span>
                    <div className="font-semibold text-[#141413]">
                      Standardization vs. Bespoke Forks
                    </div>
                    <p className="text-[#5C5A55] leading-relaxed">
                      Every partner requested unique UI branding and pricing rules. Building separate applications would have fractured engineering velocity into an unmaintainable sprawl.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 05: USERS & STAKEHOLDERS */}
            <section id="users" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 05 · Stakeholder Alignment
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Who Was the Product Really For?
                </h2>
                <p className="text-xs text-[#73716B]">
                  Balancing external demand velocity against internal operational constraints.
                </p>
              </div>

              <StakeholderInspector />
            </section>

            {/* SECTION 06: DISCOVERY & RESEARCH */}
            <section id="discovery" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Section 06 · Discovery & Research
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  How the Requirements Were Identified
                </h2>
                <p className="text-sm text-[#474540] leading-relaxed max-w-3xl">
                  The product was not built from assumptions. It emerged from structured discovery across direct users, commercial partners, and systems operators.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {discoverySteps.map((step) => (
                  <div
                    key={step.num}
                    className="p-5 rounded-xl bg-white border border-[#E8E6DF] space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#B85D19] font-bold block mb-1">
                        STEP {step.num}
                      </span>
                      <h3 className="text-sm font-semibold text-[#141413]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#5C5A55] mt-2 leading-relaxed">
                        {step.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 07: CUSTOMER REQUIREMENTS MATRIX */}
            <section id="requirements" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 07 · Requirement Deconstruction
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Customer Requirements Matrix
                </h2>
              </div>

              <CustomerRequirementsMatrix />
            </section>

            {/* SECTION 08: PRODUCT STRATEGY PILLARS */}
            <section id="strategy" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Section 08 · Product Strategy
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Five Foundational Strategy Pillars
                </h2>
                <p className="text-xs text-[#73716B]">
                  Principles that anchored design choices and prevented feature bloat.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
                {strategyPillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="p-4 rounded-xl bg-white border border-[#E8E6DF] space-y-2 text-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#B85D19] block mb-1">
                        PILLAR {pillar.num}
                      </span>
                      <div className="font-semibold text-[#141413] leading-snug">
                        {pillar.title}
                      </div>
                      <p className="text-[#5C5A55] mt-2 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 09: PRODUCT ARCHITECTURE: THINK IN LAYERS */}
            <section id="architecture" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 09 · Product Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Think in Layers
                </h2>
                <p className="text-xs text-[#73716B]">
                  A conceptual 5-layer platform model establishing boundaries and dependencies.
                </p>
              </div>

              <ProductArchitectureLayers />
            </section>

            {/* SECTION 10: WHERE PRODUCT MEETS ENGINEERING */}
            <section id="engineering-flow" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 10 · The PRD is Only the Beginning
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Where Product Meets Engineering
                </h2>
                <p className="text-xs text-[#73716B]">
                  From customer problem to validated production software.
                </p>
              </div>

              <ProductToEngineeringFlow />
            </section>

            {/* SECTION 11: MVP DEFINITION */}
            <section id="mvp" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 11 · Scope Discipline
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  What Belongs in the First Version?
                </h2>
                <p className="text-xs text-[#73716B]">
                  Interactive prioritization matrix balancing customer value against technical complexity.
                </p>
              </div>

              <PrioritizationMatrix />
            </section>

            {/* SECTION 12: WHITE-LABEL STRATEGY */}
            <section id="whitelabel" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 12 · Reseller Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  One Infrastructure Foundation. Multiple Customer Experiences.
                </h2>
                <p className="text-xs text-[#73716B]">
                  How the white-label model turns infrastructure into an ecosystem multiplier.
                </p>
              </div>

              <WhiteLabelDiagram />
            </section>

            {/* SECTION 13: CUSTOMER JOURNEY */}
            <section id="journey" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 13 · Customer Journey
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  End-to-End User Experience
                </h2>
                <p className="text-xs text-[#73716B]">
                  From discovery to long-term enterprise expansion.
                </p>
              </div>

              <CustomerJourneyMap />
            </section>

            {/* SECTION 14: PRODUCT DECISIONS */}
            <section id="decisions" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 14 · Product Decisions
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  The Decisions Mattered More Than the Feature List
                </h2>
                <p className="text-xs text-[#73716B]">
                  Evaluating architectural alternatives and documenting conscious trade-offs.
                </p>
              </div>

              <DecisionLogDrawer />
            </section>

            {/* SECTION 15: TRADE-OFFS */}
            <section id="tradeoffs" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 15 · Trade-Off Discipline
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Every Product Decision Moves Complexity Somewhere Else
                </h2>
              </div>

              <TradeOffCards />
            </section>

            {/* SECTION 16: STAKEHOLDER MANAGEMENT */}
            <section id="stakeholder-management" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Section 16 · Stakeholder Alignment
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Translating Between Competing Perspectives
                </h2>
                <p className="text-sm text-[#474540] leading-relaxed max-w-3xl">
                  A product manager’s role in deep infrastructure is to translate between divergent perspectives without allowing one stakeholder's immediate priority to hijack the entire product strategy.
                </p>
              </div>

              <div className="space-y-3">
                {stakeholderPerspectives.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8E6DF] space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#141413]">
                        {item.stakeholder}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#B85D19]">
                        Stakeholder {idx + 1}
                      </span>
                    </div>
                    <div className="text-[#5C5A55]">
                      <strong className="text-[#141413]">Primary Viewpoint:</strong> {item.priorities}
                    </div>
                    <div className="pt-2 border-t border-[#E8E6DF] text-[#33322E]">
                      <strong className="text-[#B85D19]">Rushabh's Translation & Alignment:</strong> {item.pmBridge}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 17: TEAM MANAGEMENT & CROSS-FUNCTIONAL LEADERSHIP */}
            <section id="team-management" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 17 · Cross-Functional Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  How the Product Was Built: The Operating Model
                </h2>
                <p className="text-xs text-[#73716B]">
                  Disciplined 5-stage coordination across software, infrastructure, and business teams.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
                {teamOperatingModel.map((op, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E8E6DF] space-y-2 text-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#B85D19]">
                          {op.step}
                        </span>
                        <span className="text-[10px] font-mono text-[#8E8C85]">0{idx + 1}</span>
                      </div>
                      <p className="text-[#474540] leading-relaxed">
                        {op.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#E8E6DF] text-[11px] text-[#141413] font-medium">
                      {op.pmAction}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 18: CLIENT MANAGEMENT */}
            <section id="client-management" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 18 · Client Management
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Understanding Requirements Without Blindly Implementing Them
                </h2>
              </div>

              <ClientRequirementTransformation />
            </section>

            {/* SECTION 19: TECHNICAL DEPTH */}
            <section id="technical-depth" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Section 19 · Technical Depth
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Systems Literacy for Infrastructure PMs
                </h2>
                <p className="text-xs text-[#73716B]">
                  Understanding 11 core technical layers: why they matter to the product manager and their systemic trade-offs.
                </p>
              </div>

              <TechnicalLayersViewer />
            </section>

            {/* SECTION 20: EXECUTION & DELIVERY */}
            <section id="execution" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 20 · Execution & Delivery
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  The Product Delivery Loop
                </h2>
                <p className="text-xs text-[#73716B]">
                  Repeatable lifecycle connecting discovery, specification, engineering, and customer validation.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {executionPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-semibold text-sm text-[#141413]">{phase.phase}</div>
                      <div className="text-[#5C5A55] mt-0.5">{phase.focus}</div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                      {phase.roles.map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E8E6DF] text-[#474540]"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 21: METRICS & MEASUREMENT */}
            <section id="metrics" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 21 · Success Framework
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  What Should Success Look Like?
                </h2>
                <p className="text-xs text-[#73716B]">
                  Recommended product metrics establishing operational health and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {metricsFramework.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8E6DF] space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-[10px] uppercase text-[#8E8C85]">
                          KPI 0{idx + 1}
                        </span>
                        <span className="font-mono font-bold text-[#B85D19]">{m.target}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-[#141413]">{m.metric}</h3>
                      <p className="text-xs text-[#5C5A55] mt-1.5 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#E8E6DF] text-[11px] text-[#33322E] italic">
                      Why it matters: {m.pmWhy}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 22: OUTCOMES & IMPACT */}
            <section id="outcomes" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#3F6212]">
                  Section 22 · Verified Outcomes
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Real Qualitative Outcomes
                </h2>
                <p className="text-xs text-[#73716B]">
                  Concrete product achievements delivered across technology, operations, and channel distribution.
                </p>
              </div>

              <div className="space-y-3">
                {verifiedOutcomes.map((out, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8E6DF] flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#3F6212] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-[#141413]">{out.title}</h3>
                      <p className="text-xs text-[#5C5A55] mt-1 leading-relaxed">{out.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 23: WHAT I WOULD IMPROVE */}
            <section id="improvements" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 23 · Retrospective
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  What I Would Do Differently Now
                </h2>
                <p className="text-xs text-[#73716B]">
                  Four candid product reflections on lessons learned and retrospective optimizations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {improvementsReflections.map((imp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8E6DF] space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#B85D19] font-bold">
                        0{idx + 1}
                      </span>
                      <h3 className="text-sm font-semibold text-[#141413]">{imp.title}</h3>
                    </div>
                    <p className="text-xs text-[#5C5A55] leading-relaxed pt-1">
                      {imp.reflection}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 24: PRODUCT LESSONS */}
            <section id="lessons" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 24 · Core Product Lessons
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Four Foundational Principles
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#B85D19]">LESSON 01</span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Infrastructure is not a product until customer experience makes it usable.
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    Raw compute capacity without automated provisioning, certified containers, and clear billing is just idle capital.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#B85D19]">LESSON 02</span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Multi-tenant architectures require disciplined boundaries.
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    Partner customization must be achieved via metadata injection, never by forking the codebase into client-specific branches.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#B85D19]">LESSON 03</span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Product management in technical environments requires translation, not dictation.
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    A PM does not dictate low-level hypervisor code. They clarify the user problem, set boundaries, and evaluate trade-offs collaboratively with engineers.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#E8E6DF] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#B85D19]">LESSON 04</span>
                  <h3 className="text-base font-semibold text-[#141413]">
                    Prioritization is about protecting the team's focus, not pleasing every stakeholder.
                  </h3>
                  <p className="text-xs text-[#5C5A55] leading-relaxed">
                    Saying no to speculative spot bidding or custom kernel overrides was essential to launching a reliable MVP on schedule.
                  </p>
                </div>
              </div>

              {/* Reflection on Ambiguity */}
              <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block mb-1">
                  On Navigating Ambiguity
                </span>
                <p className="text-xs sm:text-sm text-[#141413] italic font-serif leading-relaxed">
                  "The hardest part of technical product management is not the technology itself. It is navigating ambiguity when stakeholders disagree on what should be built, finding the underlying truth between contradictory requirements, and giving the engineering team the conviction to build."
                </p>
              </div>
            </section>

            {/* SECTION 25: PERSONAL CONTRIBUTION */}
            <section id="contribution" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                  Section 25 · Leadership Footprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  My Role in the Product
                </h2>
                <p className="text-xs text-[#73716B]">
                  Contribution summarized across four core dimensions of product ownership.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {personalContributions.map((col, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8E6DF] space-y-3 text-xs"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#B85D19] block mb-0.5">
                        {col.tag}
                      </span>
                      <h3 className="text-base font-semibold text-[#141413]">{col.dimension}</h3>
                    </div>
                    <ul className="space-y-2 text-[#474540]">
                      {col.items.map((it, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-1.5">
                          <span className="text-[#B85D19] font-bold">·</span>
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 26: ARTIFACTS */}
            <section id="artifacts" className="space-y-6 scroll-mt-28">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Section 26 · Deliverables
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
                  Simulated Product Artifacts
                </h2>
                <p className="text-xs text-[#73716B]">
                  Click any document to inspect simulated excerpts, specs, decision logs, and schemas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                <button
                  onClick={() => setOpenedArtifact('prd')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <FileText className="w-5 h-5 text-[#B85D19] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    PRD Excerpt
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Functional scope, non-goals & acceptance criteria.
                  </div>
                </button>

                <button
                  onClick={() => setOpenedArtifact('architecture')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <Layers className="w-5 h-5 text-[#2B4C7E] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    Architecture Diagram
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Tenancy isolation and gateway partitioning principles.
                  </div>
                </button>

                <button
                  onClick={() => setOpenedArtifact('prioritization')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <Sliders className="w-5 h-5 text-[#3F6212] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    Prioritization Matrix
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Value vs. complexity tiering across release phases.
                  </div>
                </button>

                <button
                  onClick={() => setOpenedArtifact('decision-log')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <FileCode className="w-5 h-5 text-[#B85D19] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    Decision Log (ADR)
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Architectural decision records and trade-offs.
                  </div>
                </button>

                <button
                  onClick={() => setOpenedArtifact('roadmap')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <Compass className="w-5 h-5 text-[#2B4C7E] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    Horizon Roadmap
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Strategic evolution from MVP to cluster federation.
                  </div>
                </button>

                <button
                  onClick={() => setOpenedArtifact('metrics')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <Activity className="w-5 h-5 text-[#B85D19] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    Metrics Framework
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Telemetry KPIs for health and customer success.
                  </div>
                </button>

                <button
                  onClick={() => setOpenedArtifact('white-label')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <Building2 className="w-5 h-5 text-[#3F6212] mb-2" />
                  <div className="text-xs font-semibold text-[#141413] group-hover:text-[#B85D19]">
                    White-Label Model
                  </div>
                  <div className="text-[11px] text-[#73716B] mt-1">
                    Declarative metadata contract for reseller domains.
                  </div>
                </button>
              </div>
            </section>

            {/* SECTION 27: CREDIBILITY NOTE */}
            <section id="credibility" className="p-6 rounded-xl bg-white border border-[#E8E6DF] text-xs text-[#5C5A55] leading-relaxed">
              <span className="font-mono uppercase text-[#8E8C85] text-[10px] block mb-1">
                Portfolio Note
              </span>
              Some project details have been intentionally generalized or anonymized to respect client and organizational confidentiality. The case study focuses on the product problems, decisions, execution, and lessons learned.
            </section>

            {/* SECTION 28: NEXT CASE STUDY */}
            <section id="next-study" className="pt-6 border-t border-[#E8E6DF] space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
                    Explore Next Case Studies
                  </span>
                  <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
                    Continue Reviewing Portfolio Work
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-xs font-medium text-[#B85D19] hover:underline"
                >
                  Back to Portfolio Index →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => onNavigate('/portfolio/internal-developer-platform')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <span className="text-xs font-mono text-[#8E8C85] uppercase">Case Study 02</span>
                  <h4 className="text-sm font-semibold text-[#141413] mt-1 group-hover:text-[#B85D19]">
                    Internal Developer Platform
                  </h4>
                  <p className="text-xs text-[#5C5A55] mt-1 leading-relaxed">
                    Designed an internal platform to improve how development teams manage repeatable engineering workflows.
                  </p>
                </button>

                <button
                  onClick={() => onOpenSecondaryCase('customer-requirements-feature')}
                  className="p-5 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#B85D19] text-left transition-all group"
                >
                  <span className="text-xs font-mono text-[#8E8C85] uppercase">Case Study 03</span>
                  <h4 className="text-sm font-semibold text-[#141413] mt-1 group-hover:text-[#B85D19]">
                    Customer Requirements → Product Feature
                  </h4>
                  <p className="text-xs text-[#5C5A55] mt-1 leading-relaxed">
                    How complex customer requests were diagnosed, reframed, and delivered as scalable core product capabilities.
                  </p>
                </button>
              </div>
            </section>

            {/* SECTION 29: FINAL CALL TO ACTION */}
            <section id="contact-cta" className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DF] space-y-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
                  Get In Touch
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#141413] tracking-tight">
                  Have a complex product problem to solve?
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5A55] leading-relaxed">
                  Let's talk about technical product strategy, infrastructure abstraction, and building scalable platforms.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/rushabhpatadia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#141413] text-white text-xs font-medium hover:bg-[#2B2A27] transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href="mailto:rushabhpatadia2003@gmail.com"
                  className="px-4 py-2.5 rounded-lg bg-[#FAF9F5] text-[#141413] border border-[#E8E6DF] text-xs font-medium hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#B85D19]" />
                  <span>rushabhpatadia2003@gmail.com</span>
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Artifact Modal Viewer */}
      <ArtifactModal
        artifactKey={openedArtifact}
        onClose={() => setOpenedArtifact(null)}
      />
    </div>
  );
};
