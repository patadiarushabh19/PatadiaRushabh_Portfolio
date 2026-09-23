import React, { useState } from 'react';
import { CheckCircle2, Clock, Filter } from 'lucide-react';

interface RequirementRow {
  requirement: string;
  underlyingNeed: string;
  user: string;
  productImplication: string;
  status: 'Core Functionality' | 'Directional Architecture' | 'Platform Guardrail';
  category: 'compute' | 'workflow' | 'partner' | 'governance';
}

export const CustomerRequirementsMatrix: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'compute' | 'workflow' | 'partner' | 'governance'>('all');

  const rows: RequirementRow[] = [
    {
      requirement: 'GPU Configuration',
      underlyingNeed: 'Customer needs a clear, deterministic way to select compute resources without guessing PCIe vs SXM topologies.',
      user: 'Direct Customer & AI Teams',
      productImplication: 'Self-service catalog with transparent VRAM, interconnect bandwidth, and hourly pricing.',
      status: 'Core Functionality',
      category: 'compute',
    },
    {
      requirement: 'Autonomous Provisioning',
      underlyingNeed: 'Customer expects infrastructure to become usable immediately without waiting for manual NOC intervention.',
      user: 'Customer & Operations',
      productImplication: 'Automated state machine allocating physical nodes, running pre-flight checks, and injecting SSH keys in < 3 minutes.',
      status: 'Core Functionality',
      category: 'workflow',
    },
    {
      requirement: 'Partner Branding & CNAME',
      underlyingNeed: 'Reseller needs customer-facing commercial differentiation and brand ownership for client retention.',
      user: 'Reseller / Partner',
      productImplication: 'White-label metadata layer with tenant-scoped subdomains, custom logo/color variables, and isolated portals.',
      status: 'Directional Architecture',
      category: 'partner',
    },
    {
      requirement: 'Usage & Cost Visibility',
      underlyingNeed: 'Customer needs operational awareness to prevent runaway spending on high-cost GPU clusters.',
      user: 'Direct Customer & Finance',
      productImplication: 'Real-time telemetry meter displaying active node uptime, projected hourly invoices, and hard credit limits.',
      status: 'Core Functionality',
      category: 'governance',
    },
    {
      requirement: 'Pre-Packaged AI Environments',
      underlyingNeed: 'Engineers waste hours debugging mismatched NVIDIA drivers, CUDA toolkits, and PyTorch builds.',
      user: 'AI Practitioners',
      productImplication: 'Curated one-click container base images with verified driver-to-framework parity.',
      status: 'Core Functionality',
      category: 'compute',
    },
    {
      requirement: 'Wholesale Billing Markup',
      underlyingNeed: 'Resellers must bill their own end-clients directly at custom margins without exposing upstream hardware wholesale costs.',
      user: 'Reseller / Partner',
      productImplication: 'Configurable partner margin multiplier engine with consolidated monthly settlement invoices.',
      status: 'Directional Architecture',
      category: 'partner',
    },
    {
      requirement: 'Graceful Node Recovery',
      underlyingNeed: 'Physical PCIe or memory faults must not cause permanent cluster lockouts or data corruption.',
      user: 'Infrastructure & Customer',
      productImplication: 'Automated health monitors triggering node cordon, state snapshot, and workload failover alerting.',
      status: 'Platform Guardrail',
      category: 'governance',
    },
    {
      requirement: 'Tenant VPC Isolation',
      underlyingNeed: 'Enterprise AI teams handling proprietary model weights cannot share unsegmented network fabric with other tenants.',
      user: 'Enterprise AI Teams',
      productImplication: 'Layer-2/3 network segmentation enforcing strict multi-tenant traffic boundaries.',
      status: 'Core Functionality',
      category: 'governance',
    },
  ];

  const filteredRows = filter === 'all' ? rows : rows.filter((r) => r.category === filter);

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            Requirement Deconstruction
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            Customer Requirements Matrix
          </h3>
          <p className="text-xs text-[#73716B] mt-0.5">
            Translating customer and partner requests into disciplined platform architecture.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#FAF9F5] border border-[#E8E6DF] rounded-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              filter === 'all' ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]' : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('compute')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              filter === 'compute' ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]' : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Compute
          </button>
          <button
            onClick={() => setFilter('workflow')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              filter === 'workflow' ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]' : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Workflow
          </button>
          <button
            onClick={() => setFilter('partner')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              filter === 'partner' ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]' : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            White-Label
          </button>
          <button
            onClick={() => setFilter('governance')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              filter === 'governance' ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]' : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Governance
          </button>
        </div>
      </div>

      {/* Responsive Matrix: Desktop Table / Mobile Cards */}
      <div className="pt-6 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[680px]">
          <thead>
            <tr className="border-b border-[#E8E6DF] text-[11px] font-mono uppercase tracking-wider text-[#8E8C85]">
              <th className="pb-3 font-medium w-1/4">Requirement</th>
              <th className="pb-3 font-medium w-1/3">Underlying Need</th>
              <th className="pb-3 font-medium w-1/6">User</th>
              <th className="pb-3 font-medium w-1/4">Product Implication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EEE8] text-xs">
            {filteredRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#FAF9F5] transition-colors">
                <td className="py-4 pr-4 align-top">
                  <div className="font-semibold text-[#141413]">{row.requirement}</div>
                  <div className="text-[10px] text-[#8E8C85] font-mono mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B85D19]" />
                    <span>{row.status}</span>
                  </div>
                </td>
                <td className="py-4 pr-4 align-top text-[#474540] leading-relaxed">
                  {row.underlyingNeed}
                </td>
                <td className="py-4 pr-4 align-top text-[#73716B] font-mono text-[11px]">
                  {row.user}
                </td>
                <td className="py-4 align-top text-[#141413] leading-relaxed font-medium">
                  {row.productImplication}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4 mt-6 border-t border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#8E8C85]">
        <span>Requirements deconstructed from direct user research and technical constraints.</span>
        <span className="font-mono">Status: Verified PM Scope</span>
      </div>
    </div>
  );
};
