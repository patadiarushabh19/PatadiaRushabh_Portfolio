import React, { useState } from 'react';
import { Users, Cpu, Building2, Server, Code2, Briefcase, ArrowRight, Link as LinkIcon } from 'lucide-react';

interface StakeholderProfile {
  id: string;
  name: string;
  category: 'External' | 'Internal';
  roleTag: string;
  icon: any;
  needs: string[];
  keyConcern: string;
  productTranslation: string;
  connectedStakeholders: { id: string; name: string; relationship: string }[];
}

export const StakeholderInspector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('customer');

  const stakeholders: Record<string, StakeholderProfile> = {
    customer: {
      id: 'customer',
      name: 'Customer',
      category: 'External',
      roleTag: 'Direct Buyers & Machine Learning Teams',
      icon: Users,
      needs: [
        'Accessible GPU capacity with clear availability',
        'Clear, straightforward product experience without confusing bare-metal flags',
        'Predictable, repeatable provisioning workflow',
        'Operational visibility into running workloads and hourly costs',
      ],
      keyConcern: 'Will I get the compute I need instantly without surprise billing or broken environments?',
      productTranslation:
        'Standardized catalog tiers, direct SSH/Jupyter handover within minutes, and real-time usage meters with spending guardrails.',
      connectedStakeholders: [
        { id: 'infrastructure', name: 'Infrastructure Team', relationship: 'Demands reliable hardware allocation without manual ticketing' },
        { id: 'business', name: 'Business', relationship: 'Requires transparent, predictable pricing models and clear invoice terms' },
      ],
    },
    'ai-teams': {
      id: 'ai-teams',
      name: 'AI / Technical Teams',
      category: 'External',
      roleTag: 'Machine Learning Practitioners & Researchers',
      icon: Cpu,
      needs: [
        'Suitable compute: exact VRAM thresholds, SXM vs PCIe topologies, and CUDA compatibility',
        'Reliable infrastructure that will not crash halfway through a 36-hour training run',
        'Technical flexibility to mount custom datasets and run tailored container environments',
        'Fast, headless deployment capability via CLI or automated scripts',
      ],
      keyConcern: 'Are the GPUs isolated and throttled properly, or will noisy neighbors degrade my benchmark throughput?',
      productTranslation:
        'Deterministic hardware pass-through, pre-tested PyTorch/JAX base images, and isolated RoCE/InfiniBand network fabric.',
      connectedStakeholders: [
        { id: 'engineering', name: 'Engineering', relationship: 'Feeds technical requirements on driver matrices and kernel optimization' },
        { id: 'infrastructure', name: 'Infrastructure Team', relationship: 'Requires cluster health guarantees during long-running batch jobs' },
      ],
    },
    'reseller-partner': {
      id: 'reseller-partner',
      name: 'Reseller / Partner',
      category: 'External',
      roleTag: 'Managed Service Providers & Specialized Compute Resellers',
      icon: Building2,
      needs: [
        'Customer-facing control over their own client accounts and sub-tenants',
        'Branding flexibility: custom CNAME domain, logos, and custom color accents',
        'Commercial separation: wholesale margin markup and consolidated monthly invoicing',
        'Manageable operations without needing to hire a 24/7 data center team',
      ],
      keyConcern: 'Can I sell high-margin GPU services under my own brand without exposing the underlying platform vendor?',
      productTranslation:
        'Multi-tenant white-label layer with tenant-scoped routing, custom theme metadata, and wholesale billing management.',
      connectedStakeholders: [
        { id: 'customer', name: 'Customer', relationship: 'Serves their own end-clients through their proprietary branded portal' },
        { id: 'business', name: 'Business', relationship: 'Generates predictable recurring wholesale revenue on committed capacity' },
      ],
    },
    infrastructure: {
      id: 'infrastructure',
      name: 'Infrastructure Team',
      category: 'Internal',
      roleTag: 'Data Center & Systems Operations Engineers',
      icon: Server,
      needs: [
        'Operational control over cluster capacity, node allocation, and rack thermals',
        'Standardized workflows that replace ad-hoc manual provisioning scripts',
        'Reliability: automated health diagnostics and graceful node draining',
        'Manageability: zero surprise workloads overwhelming shared power supplies',
      ],
      keyConcern: 'Will customer self-service break node firmware or create unreachable orphan server states?',
      productTranslation:
        'Immutable iPXE boot routines, automated pre-flight hardware checks, dynamic reclamation, and structured admin observability.',
      connectedStakeholders: [
        { id: 'engineering', name: 'Engineering', relationship: 'Collaborates on control-plane APIs and kernel driver integration' },
        { id: 'customer', name: 'Customer', relationship: 'Shields physical cluster nodes from untrusted raw customer access' },
      ],
    },
    engineering: {
      id: 'engineering',
      name: 'Engineering',
      category: 'Internal',
      roleTag: 'Platform & Software Engineering Teams',
      icon: Code2,
      needs: [
        'Clear, unambiguous requirements with realistic acceptance criteria',
        'Feasible scope: building modular services rather than monolithic one-off hacks',
        'Defined workflows: clear state machine transitions from "Requested" to "Allocated" to "Active"',
        'Technical priorities that balance new feature velocity against architectural debt',
      ],
      keyConcern: 'Are we building a maintainable multi-tenant architecture, or forking custom codebases for every partner ask?',
      productTranslation:
        'Comprehensive PRDs with edge-state specifications, shared API contracts, and disciplined MVP scope boundaries.',
      connectedStakeholders: [
        { id: 'infrastructure', name: 'Infrastructure Team', relationship: 'Implements orchestration services interfacing with physical hardware' },
        { id: 'business', name: 'Business', relationship: 'Balances feature requests against engineering bandwidth and technical debt' },
      ],
    },
    business: {
      id: 'business',
      name: 'Business',
      category: 'Internal',
      roleTag: 'Executive Leadership & Commercial Operations',
      icon: Briefcase,
      needs: [
        'Viable product that yields competitive unit economics and fast payback periods',
        'Repeatable delivery that scales without requiring headcount to grow linearly with revenue',
        'Commercial flexibility: ability to serve both high-touch direct contracts and high-volume resellers',
        'Sustainable operations: avoiding custom development traps that drain ongoing engineering capacity',
      ],
      keyConcern: 'How quickly will this capital-intensive GPU hardware reach sustainable 85%+ utilization and profitability?',
      productTranslation:
        'Multi-channel distribution engine supporting both direct retail self-service and high-volume wholesale partner drawdowns.',
      connectedStakeholders: [
        { id: 'reseller-partner', name: 'Reseller / Partner', relationship: 'Secures high-volume committed-use contracts to underwrite hardware costs' },
        { id: 'engineering', name: 'Engineering', relationship: 'Invests capital into durable platform capabilities rather than manual services' },
      ],
    },
  };

  const current = stakeholders[selectedId] || stakeholders.customer;
  const Icon = current.icon;

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            Stakeholder Alignment Matrix
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            Who Was the Product Really For?
          </h3>
          <p className="text-xs text-[#73716B] mt-0.5">
            A sustainable platform product must satisfy both external market demand and internal operational realities.
          </p>
        </div>
        <div className="text-xs font-mono text-[#8E8C85]">
          Select any stakeholder to inspect needs & linkages
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Stakeholder Selection Grid */}
        <div className="lg:col-span-5 space-y-2">
          {Object.values(stakeholders).map((s) => {
            const isSelected = selectedId === s.id;
            const SIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs'
                    : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#B85D19] text-white'
                        : 'bg-[#F4F2EC] text-[#5C5A55]'
                    }`}
                  >
                    <SIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#141413]">{s.name}</div>
                    <div className="text-[11px] text-[#73716B] truncate max-w-[200px]">{s.roleTag}</div>
                  </div>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8C85]">
                  {s.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stakeholder Details Panel */}
        <div className="lg:col-span-7 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#141413] text-white flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#141413]">{current.name}</h4>
                <span className="text-xs text-[#73716B]">{current.roleTag}</span>
              </div>
            </div>
            <span className="text-xs font-mono uppercase text-[#B85D19] font-medium">
              {current.category} Stakeholder
            </span>
          </div>

          {/* Primary Needs */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-2">
              Primary Needs & Expectations
            </span>
            <ul className="space-y-1.5">
              {current.needs.map((need, idx) => (
                <li key={idx} className="text-xs text-[#33322E] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{need}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Concern */}
          <div className="bg-white p-3.5 rounded-lg border border-[#E8E6DF]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8C85] block mb-1">
              The Unspoken Tension
            </span>
            <p className="text-xs text-[#141413] font-medium italic">
              "{current.keyConcern}"
            </p>
          </div>

          {/* PM Translation */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] block mb-1.5">
              Product Management Response & Translation
            </span>
            <p className="text-xs text-[#474540] leading-relaxed">
              {current.productTranslation}
            </p>
          </div>

          {/* Visible Connections */}
          <div className="pt-3 border-t border-[#E8E6DF]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-2 flex items-center gap-1.5">
              <LinkIcon className="w-3 h-3 text-[#B85D19]" />
              <span>Cross-Stakeholder Linkages</span>
            </span>
            <div className="space-y-2">
              {current.connectedStakeholders.map((conn, idx) => (
                <div
                  key={idx}
                  className="text-xs bg-white p-2.5 rounded-md border border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span className="font-semibold text-[#141413]">{conn.name}:</span>
                  <span className="text-[#6B6964]">{conn.relationship}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
