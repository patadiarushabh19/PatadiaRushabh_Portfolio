import React, { useState } from 'react';
import {
  Users,
  Layers,
  Cpu,
  Activity,
  Sparkles,
  Building2,
  Workflow,
  ArrowDown,
  ArrowRight,
  GitBranch,
} from 'lucide-react';

interface VisualNode {
  id: string;
  name: string;
  layerType: string;
  branch: 'direct' | 'shared' | 'partner';
  summary: string;
  pmRole: string;
  keyElements: string[];
}

export const HeroVisualDiagram: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<'all' | 'direct' | 'partner'>('all');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('gpu-product');

  const nodes: Record<string, VisualNode> = {
    customer: {
      id: 'customer',
      name: 'Customer',
      layerType: 'Demand Surface',
      branch: 'direct',
      summary: 'AI researchers, ML engineers, and infrastructure leads with immediate compute needs.',
      pmRole: 'Discovering workload intent, minimizing onboarding friction, and clarifying pricing expectations.',
      keyElements: ['Workload sizing', 'SSH & Jupyter access', 'Self-service quota & billing'],
    },
    'gpu-product': {
      id: 'gpu-product',
      name: 'GPU Product Layer',
      layerType: 'Product Abstraction',
      branch: 'direct',
      summary: 'Catalog of verified compute instances, pricing models, reservation tiers, and user workspaces.',
      pmRole: 'Abstracting bare-metal knobs into clear customer decisions without hiding essential workload characteristics.',
      keyElements: ['Instance catalog', 'Reservation management', 'Usage metering & spend guardrails'],
    },
    'infra-platform': {
      id: 'infra-platform',
      name: 'Infrastructure Platform',
      layerType: 'Core Shared Platform',
      branch: 'shared',
      summary: 'The central orchestration plane managing cluster state, tenant boundaries, and provisioning workflows.',
      pmRole: 'Defining multi-tenant boundaries, scheduling logic, and shared APIs that power both direct and partner tiers.',
      keyElements: ['State orchestration', 'Tenant-scoped isolation', 'Provisioning workflows & APIs'],
    },
    'hardware-tier': {
      id: 'hardware-tier',
      name: 'Compute · Network · Storage',
      layerType: 'Physical Foundation',
      branch: 'shared',
      summary: 'High-density GPU nodes, high-throughput RoCE/InfiniBand networking, and local NVMe scratch storage.',
      pmRole: 'Aligning product offerings with hardware constraints (PCIe lanes, VRAM ceilings, fabric latency, thermal budgets).',
      keyElements: ['SXM / PCIe GPU accelerators', 'InfiniBand / RoCE v2 low-latency fabric', 'High-IOPS NVMe scratch storage'],
    },
    operations: {
      id: 'operations',
      name: 'Operations',
      layerType: 'Operational Governance',
      branch: 'direct',
      summary: 'Health telemetry, automated node failover, driver standardization, and customer support escalation.',
      pmRole: 'Ensuring operational feasibility, setting service SLAs, and standardizing incident remediation playbooks.',
      keyElements: ['Real-time telemetry & alerts', 'Automated health checks & node draining', 'Capacity forecasting & utilization tracking'],
    },
    'partner-layer': {
      id: 'partner-layer',
      name: 'White-Label / Partner Layer',
      layerType: 'Reseller Abstraction',
      branch: 'partner',
      summary: 'Multi-tenant metadata engine enabling custom branding, CNAME routing, wholesale pricing, and sub-account governance.',
      pmRole: 'Structuring partner customization so resellers gain brand autonomy without engineering bespoke code forks.',
      keyElements: ['Custom CNAME & theme metadata', 'Wholesale markup & margin engine', 'Sub-tenant account hierarchy'],
    },
    'partner-experience': {
      id: 'partner-experience',
      name: 'Partner Customer Experience',
      layerType: 'Partner Delivery',
      branch: 'partner',
      summary: 'Fully branded end-customer portal and developer console operating under the reseller’s own commercial identity.',
      pmRole: 'Protecting brand separation, avoiding platform leakage, and maintaining unified underlying platform telemetry.',
      keyElements: ['Autonomous partner domain', 'Partner-controlled billing relationship', 'Direct user access to reserved clusters'],
    },
  };

  const selectedNode = nodes[selectedNodeId] || nodes['gpu-product'];

  return (
    <div className="w-full bg-[#FFFFFF] border border-[#E8E6DF] rounded-xl p-6 sm:p-8 transition-all">
      {/* Header and Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8E8C85] uppercase tracking-wider">
            <span>Conceptual Product Architecture</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#B85D19]">Dual-Path Delivery Model</span>
          </div>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            From Infrastructure Capability to Multi-Channel Product
          </h3>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#FAF9F5] border border-[#E8E6DF] rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setActiveBranch('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeBranch === 'all'
                ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Unified Ecosystem
          </button>
          <button
            onClick={() => setActiveBranch('direct')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeBranch === 'direct'
                ? 'bg-white text-[#B85D19] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Direct Path
          </button>
          <button
            onClick={() => setActiveBranch('partner')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeBranch === 'partner'
                ? 'bg-white text-[#2B4C7E] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            White-Label Branch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Diagram Flow Columns */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Direct Channel Column */}
            <div
              className={`space-y-3 transition-opacity ${
                activeBranch === 'partner' ? 'opacity-30 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Direct Customer Path</span>
                </span>
                <span className="text-[11px] font-mono text-[#8E8C85]">Primary</span>
              </div>

              {/* 1. Customer */}
              <button
                onClick={() => setSelectedNodeId('customer')}
                className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                  selectedNodeId === 'customer'
                    ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs'
                    : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#8E8C85]">01 · Entry</div>
                <div className="text-sm font-semibold text-[#141413]">Customer</div>
                <div className="text-xs text-[#6B6964] mt-0.5">AI Engineers · Research Teams · ML Startups</div>
              </button>

              <div className="flex justify-center text-[#B6B4AC]">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* 2. GPU Product Layer */}
              <button
                onClick={() => setSelectedNodeId('gpu-product')}
                className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                  selectedNodeId === 'gpu-product'
                    ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs'
                    : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#B85D19]">02 · Product Surface</div>
                <div className="text-sm font-semibold text-[#141413]">GPU Product Layer</div>
                <div className="text-xs text-[#6B6964] mt-0.5">Catalog · Provisioning · Workspaces · Usage</div>
              </button>
            </div>

            {/* Partner Channel Column */}
            <div
              className={`space-y-3 transition-opacity ${
                activeBranch === 'direct' ? 'opacity-30 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2B4C7E] font-medium flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>White-Label / Partner Path</span>
                </span>
                <span className="text-[11px] font-mono text-[#8E8C85]">Reseller</span>
              </div>

              {/* Partner Customer Experience */}
              <button
                onClick={() => setSelectedNodeId('partner-experience')}
                className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                  selectedNodeId === 'partner-experience'
                    ? 'bg-[#FAF9F5] border-[#2B4C7E] shadow-xs'
                    : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#2B4C7E]">01 · Reseller Delivery</div>
                <div className="text-sm font-semibold text-[#141413]">Partner Customer Experience</div>
                <div className="text-xs text-[#6B6964] mt-0.5">Branded Portal · Reseller Clients · Dedicated CNAME</div>
              </button>

              <div className="flex justify-center text-[#B6B4AC]">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* White-Label / Partner Layer */}
              <button
                onClick={() => setSelectedNodeId('partner-layer')}
                className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                  selectedNodeId === 'partner-layer'
                    ? 'bg-[#FAF9F5] border-[#2B4C7E] shadow-xs'
                    : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#2B4C7E]">02 · Multi-Tenant Layer</div>
                <div className="text-sm font-semibold text-[#141413]">White-Label / Partner Layer</div>
                <div className="text-xs text-[#6B6964] mt-0.5">Tenant Scoping · Margin Levers · Theming Metadata</div>
              </button>
            </div>
          </div>

          {/* Central Convergence: Infrastructure Platform */}
          <div className="relative pt-2">
            <div className="flex items-center justify-center gap-3 text-xs font-mono text-[#8E8C85] uppercase py-1">
              <span>Convergence onto Unified Platform Core</span>
            </div>

            <button
              onClick={() => setSelectedNodeId('infra-platform')}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedNodeId === 'infra-platform'
                  ? 'bg-[#FAF9F5] border-[#B85D19] shadow-sm ring-1 ring-[#B85D19]/20'
                  : 'bg-white border-[#141413] hover:border-[#B85D19]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-[#B85D19] font-semibold">
                  Core Foundation · Central Orchestration
                </span>
                <span className="text-xs font-mono text-[#8E8C85]">03</span>
              </div>
              <div className="text-base font-semibold text-[#141413] mt-1">Infrastructure Platform</div>
              <p className="text-xs text-[#5C5A55] mt-1 leading-relaxed">
                Shared control plane: cluster state orchestration, APIs, tenant isolation, quota management, and provisioning state machines.
              </p>
            </button>
          </div>

          {/* Underlying Physical & Operational Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedNodeId('hardware-tier')}
              className={`text-left p-3.5 rounded-lg border transition-all ${
                selectedNodeId === 'hardware-tier'
                  ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs'
                  : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-[#8E8C85]">04 · Physical Tier</div>
              <div className="text-sm font-semibold text-[#141413]">Compute · Network · Storage</div>
              <div className="text-xs text-[#6B6964] mt-0.5">GPU nodes · RoCE/InfiniBand · NVMe scratch</div>
            </button>

            <button
              onClick={() => setSelectedNodeId('operations')}
              className={`text-left p-3.5 rounded-lg border transition-all ${
                selectedNodeId === 'operations'
                  ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs'
                  : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
              }`}
            >
              <div className="text-[10px] font-mono uppercase text-[#8E8C85]">05 · Reliability</div>
              <div className="text-sm font-semibold text-[#141413]">Operations</div>
              <div className="text-xs text-[#6B6964] mt-0.5">Monitoring · Support · Reliability · Capacity</div>
            </button>
          </div>

          <div className="text-[11px] text-[#8E8C85] italic pt-1">
            Note: Conceptual visualization illustrating product decomposition across direct and white-label distribution channels.
          </div>
        </div>

        {/* PM Inspection Sidebar */}
        <div className="lg:col-span-5 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] font-medium">
                {selectedNode.layerType}
              </span>
              <span className="text-xs font-mono text-[#8E8C85]">
                {selectedNode.branch.toUpperCase()}
              </span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#141413]">
                {selectedNode.name}
              </h4>
              <p className="text-xs text-[#5C5A55] mt-1.5 leading-relaxed">
                {selectedNode.summary}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-1.5">
                Product Management Focus
              </span>
              <div className="text-xs text-[#33322E] leading-relaxed bg-[#FFFFFF] p-3.5 rounded-lg border border-[#E8E6DF]">
                {selectedNode.pmRole}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-2">
                Governing Deliverables
              </span>
              <ul className="space-y-1.5">
                {selectedNode.keyElements.map((elem, i) => (
                  <li key={i} className="text-xs text-[#474540] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />
                    <span>{elem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E8E6DF] text-[11px] text-[#8E8C85] flex items-center justify-between">
            <span>Product Systems Thinking</span>
            <span className="font-mono">PM Scope Verification</span>
          </div>
        </div>
      </div>
    </div>
  );
};
