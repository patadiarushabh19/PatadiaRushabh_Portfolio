import React, { useState } from 'react';
import { ChevronDown, Check, Scale } from 'lucide-react';

interface DecisionRecord {
  number: string;
  title: string;
  tension: string;
  context: string;
  question: string;
  options: { label: string; outcome: string }[];
  decision: string;
  tradeOff: string;
}

export const DecisionLogDrawer: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const decisions: DecisionRecord[] = [
    {
      number: '01',
      title: 'Infrastructure Complexity vs. Customer Simplicity',
      tension:
        'Engineering wanted to expose bare-metal hypervisor controls, PCIe switch trees, and raw NUMA node topologies. Customers wanted instant, working compute without needing a PhD in hardware architecture.',
      context:
        'Early technical proposals suggested giving developers full low-level knobs on the primary provisioning screen (custom kernel flags, manual driver compilation, and raw IPMI interfaces). While this gave unlimited control, user testing revealed high drop-off and misconfiguration support tickets.',
      question:
        'How do we make complex GPU infrastructure consumable for fast AI deployment without degrading the specialized performance power users expect?',
      options: [
        {
          label: 'Option A: Raw Hypervisor Exposure',
          outcome: 'Expose all physical bare-metal knobs upfront. Maximizes niche flexibility but overwhelms 95% of users and spikes NOC support burden.',
        },
        {
          label: 'Option B: Rigid Managed Container Black-Box',
          outcome: 'Completely hide infrastructure behind a restricted container sandbox. Ultra-simple, but alienates ML researchers needing custom CUDA extensions.',
        },
        {
          label: 'Option C: Tiered Abstraction with Verified Presets (Selected)',
          outcome: 'Provide pre-tested, benchmarked framework bundles (PyTorch, JAX, CUDA) as the default 1-click path, with advanced hardware parameters tucked into an explicit "Expert Configuration" drawer.',
        },
      ],
      decision:
        'Adopted Option C. The product default is an optimized, deterministic launch path. Advanced hardware knobs are structured under explicit validation rules rather than raw input fields.',
      tradeOff:
        'Required the product and systems engineering teams to pre-benchmark standard framework configurations upfront, but reduced launch errors and onboarding drop-off dramatically.',
    },
    {
      number: '02',
      title: 'Direct Customer Experience vs. Reseller Flexibility',
      tension:
        'Commercial partners requested deep bespoke customizations that threatened to fork the codebase into separate one-off client builds, doubling engineering maintenance.',
      context:
        'As reseller interest emerged, sales requested a dedicated "Reseller Edition" repository with custom database schemas and bespoke workflows. Concurrently, direct retail customers needed continuous feature velocity.',
      question:
        'Should we fork the product into dedicated client applications, or build a unified multi-tenant core that handles both direct retail and reseller distribution?',
      options: [
        {
          label: 'Option A: Fork Separate Codebases per Channel',
          outcome: 'Fast initial satisfaction of reseller requests, but creates irreversible technical debt, divergent feature sets, and fractured bug fixes.',
        },
        {
          label: 'Option B: Unified Core with Dynamic Theming & Tenant Scoping (Selected)',
          outcome: 'Architect a single platform control plane where every API call, UI component, and database row is tenant-scoped, with white-label theming injected dynamically at runtime.',
        },
      ],
      decision:
        'Adopted Option B. Refused to fork the codebase. Invested upfront in a multi-tenant metadata layer supporting custom CNAMEs, scoped user directories, and configurable wholesale billing margins.',
      tradeOff:
        'Slightly longer initial architectural sprint to establish strict tenant boundaries, but allowed 100% of future platform improvements to benefit direct users and resellers simultaneously.',
    },
    {
      number: '03',
      title: 'Feature Breadth vs. Operational Simplicity',
      tension:
        'Stakeholders advocated for launching with multi-cloud federation, algorithmic spot auction bidding, and custom container schedulers, which would have compromised cluster stability.',
      context:
        'The excitement around generative AI drove demands for an expansive feature list before the core hardware provisioning pipeline had achieved six-nines reliability in production.',
      question:
        'Do we launch with a broad, complex suite of speculative platform features, or aggressively constrain the first release to rock-solid on-demand instance provisioning?',
      options: [
        {
          label: 'Option A: Expansive Feature Launch',
          outcome: 'Launch with spot bidding, multi-cloud federation, and complex scheduling. High marketing splash, but introduces severe operational failure modes and brittle state machines.',
        },
        {
          label: 'Option B: Disciplined Core Provisioning (Selected)',
          outcome: 'Focus all initial engineering effort on deterministic bare-metal allocation, automated health verification, and transparent hourly billing.',
        },
      ],
      decision:
        'Adopted Option B. Deprioritized spot markets and multi-cloud federation to ensure that when a customer clicked "Launch", their GPU instance was guaranteed healthy, reachable, and correctly billed in under 3 minutes.',
      tradeOff:
        'Delayed secondary monetization mechanisms (spot auctions) to build unshakable customer trust in baseline infrastructure reliability.',
    },
  ];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="pb-6 border-b border-[#E8E6DF]">
        <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
          Product Judgment Record
        </span>
        <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
          The Decisions Mattered More Than the Feature List
        </h3>
        <p className="text-xs text-[#73716B] mt-0.5">
          Real product leadership is defined by navigating fundamental tensions where every option carries genuine costs.
        </p>
      </div>

      <div className="space-y-4 pt-6">
        {decisions.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={item.number}
              className={`rounded-xl border transition-all ${
                isExpanded
                  ? 'bg-[#FAF9F5] border-[#B85D19]/60 shadow-xs'
                  : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full text-left p-5 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <span className="font-mono text-xs text-[#B85D19] font-bold mt-0.5">
                    DECISION {item.number}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-[#141413]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B6964] mt-1 line-clamp-1">
                      {item.tension}
                    </p>
                  </div>
                </div>

                <div className="p-1 rounded-md text-[#8E8C85] hover:text-[#141413] shrink-0">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#B85D19]' : ''
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-1 space-y-4 border-t border-[#E8E6DF] animate-fade-in text-xs">
                  {/* The Tension */}
                  <div className="bg-white p-3.5 rounded-lg border border-[#E8E6DF]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D19] block mb-1">
                      The Underlying Tension
                    </span>
                    <p className="text-[#141413] font-medium leading-relaxed">
                      {item.tension}
                    </p>
                  </div>

                  {/* Context */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8C85] block mb-1">
                      Operational Context
                    </span>
                    <p className="text-[#474540] leading-relaxed">
                      {item.context}
                    </p>
                  </div>

                  {/* Question */}
                  <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E8E6DF]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#141413] font-bold block mb-1">
                      The Core Product Question
                    </span>
                    <p className="text-[#141413] italic font-serif">
                      "{item.question}"
                    </p>
                  </div>

                  {/* Options Evaluated */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8C85] block mb-2">
                      Options Considered
                    </span>
                    <div className="space-y-2">
                      {item.options.map((opt, i) => (
                        <div
                          key={i}
                          className="bg-white p-3 rounded-md border border-[#E8E6DF]"
                        >
                          <div className="font-semibold text-[#141413]">{opt.label}</div>
                          <div className="text-[#5C5A55] mt-0.5 leading-relaxed">
                            {opt.outcome}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final Decision */}
                  <div className="bg-white p-3.5 rounded-lg border-l-4 border-l-[#B85D19] border border-[#E8E6DF]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block mb-1">
                      Final Product Decision
                    </span>
                    <p className="text-[#141413] leading-relaxed font-medium">
                      {item.decision}
                    </p>
                  </div>

                  {/* Trade-off */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8C85] block mb-1">
                      What Was Consciously Traded Off
                    </span>
                    <p className="text-[#5C5A55] leading-relaxed">
                      {item.tradeOff}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
