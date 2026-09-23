import React, { useState } from 'react';
import { ArrowRight, Compass, Search, Sliders, Play, Activity, TrendingUp, Sparkles } from 'lucide-react';

interface JourneyStage {
  id: string;
  name: string;
  order: string;
  summary: string;
  userGoal: string;
  potentialFriction: string;
  productOpportunity: string;
  icon: any;
}

export const CustomerJourneyMap: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('discover');

  const stages: JourneyStage[] = [
    {
      id: 'discover',
      name: 'DISCOVER',
      order: '01',
      summary: 'Customer discovers and understands the compute offering.',
      userGoal: 'Quickly verify if this platform has the specific GPU models and stock available right now.',
      potentialFriction: 'Vague marketing jargon ("blazing fast AI clouds") without concrete availability or pricing.',
      productOpportunity: 'Real-time inventory transparency showing verified node availability and clear hourly rates upfront.',
      icon: Search,
    },
    {
      id: 'evaluate',
      name: 'EVALUATE',
      order: '02',
      summary: 'Customer determines whether the hardware matches their specific workload needs.',
      userGoal: 'Assess VRAM capacity, PCIe vs SXM interconnect, CUDA driver versions, and network bandwidth.',
      potentialFriction: 'Unclear specifications leading to fear of silent out-of-memory (OOM) errors during training.',
      productOpportunity: 'Precise hardware specification sheets and benchmark throughput indicators for popular ML models.',
      icon: Compass,
    },
    {
      id: 'configure',
      name: 'CONFIGURE',
      order: '03',
      summary: 'Customer chooses compute configurations and environment preferences.',
      userGoal: 'Select base OS/container image, inject SSH public key, and set spend caps in under 60 seconds.',
      potentialFriction: 'Overly complex infrastructure parameters (VLAN IDs, subnet CIDRs, raw IPMI credentials).',
      productOpportunity: 'Curated 1-click PyTorch/JAX environments with automated public key injection and credit limits.',
      icon: Sliders,
    },
    {
      id: 'provision',
      name: 'PROVISION',
      order: '04',
      summary: 'Physical infrastructure becomes allocated and accessible.',
      userGoal: 'Receive verified SSH connection string or web Jupyter token with zero manual delay.',
      potentialFriction: 'Indefinite "Pending..." spinner with zero visibility into node allocation or failure causes.',
      productOpportunity: 'Real-time provisioning progress indicator with pre-flight GPU health checks completed in < 3 minutes.',
      icon: Play,
    },
    {
      id: 'use',
      name: 'USE',
      order: '05',
      summary: 'Customer executes training, fine-tuning, or inference workloads.',
      userGoal: 'Achieve maximum sustained compute throughput without unexpected driver crashes or node throttling.',
      potentialFriction: 'Thermal throttling, noisy neighbors on shared PCIe switches, or unexpected cluster eviction.',
      productOpportunity: 'Hardware-enforced tenant isolation and unthrottled dedicated GPU pass-through.',
      icon: Activity,
    },
    {
      id: 'manage',
      name: 'MANAGE',
      order: '06',
      summary: 'Customer monitors execution health, costs, and ongoing storage.',
      userGoal: 'Inspect active VRAM utilization, real-time bill accrued, and manage snapshots or scratch volumes.',
      potentialFriction: 'Shock invoice at end-of-month or inability to determine why a run stalled overnight.',
      productOpportunity: 'In-console telemetry graphs and automated spend alerts that can pause idle instances.',
      icon: Sliders,
    },
    {
      id: 'expand',
      name: 'EXPAND',
      order: '07',
      summary: 'Customer scales consumption or enters a partner reseller relationship.',
      userGoal: 'Reserve multi-node multi-GPU clusters or offer compute downstream to their own enterprise clients.',
      potentialFriction: 'Rigid commercial boundaries that require negotiating custom contracts from scratch.',
      productOpportunity: 'Self-service reserved instance commitments and white-label partner onboarding paths.',
      icon: TrendingUp,
    },
  ];

  const current = stages.find((s) => s.id === activeStageId) || stages[0];
  const CurrentIcon = current.icon;

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            End-to-End User Experience
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            Customer Journey: From Discovery to Long-Term Expansion
          </h3>
          <p className="text-xs text-[#73716B] mt-0.5">
            Every step in the workflow represents an opportunity to eliminate friction and build product defensibility.
          </p>
        </div>
        <div className="text-xs font-mono text-[#8E8C85]">
          Select or hover over any stage to view friction & opportunity
        </div>
      </div>

      {/* Horizontal Journey Flow Ribbon */}
      <div className="pt-6 overflow-x-auto pb-2">
        <div className="flex items-center min-w-[780px] justify-between">
          {stages.map((stage, idx) => {
            const isActive = activeStageId === stage.id;
            return (
              <React.Fragment key={stage.id}>
                <button
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center group text-center p-3 rounded-lg transition-all ${
                    isActive ? 'bg-[#FAF9F5] scale-105 shadow-xs' : 'hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono transition-colors ${
                      isActive
                        ? 'bg-[#B85D19] text-white font-bold'
                        : 'bg-[#F4F2EC] text-[#73716B] group-hover:text-[#141413]'
                    }`}
                  >
                    {stage.order}
                  </div>
                  <span
                    className={`text-xs mt-2 font-semibold tracking-wider ${
                      isActive ? 'text-[#B85D19]' : 'text-[#141413]'
                    }`}
                  >
                    {stage.name}
                  </span>
                  <span className="text-[10px] text-[#8E8C85] max-w-[85px] truncate mt-0.5">
                    {stage.summary}
                  </span>
                </button>
                {idx < stages.length - 1 && (
                  <div className="w-5 h-[1px] bg-[#E8E6DF] shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="mt-6 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Goal */}
        <div className="bg-white p-4 rounded-lg border border-[#E8E6DF] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              User Goal
            </span>
            <span className="text-xs font-mono text-[#B85D19] font-bold">
              {current.order}
            </span>
          </div>
          <h4 className="text-xs font-semibold text-[#141413]">What the user seeks</h4>
          <p className="text-xs text-[#474540] leading-relaxed pt-1">
            {current.userGoal}
          </p>
        </div>

        {/* Potential Friction */}
        <div className="bg-white p-4 rounded-lg border border-[#E8E6DF] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
              Potential Friction
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">Drop-Off Risk</span>
          </div>
          <h4 className="text-xs font-semibold text-[#141413]">Where workflows break</h4>
          <p className="text-xs text-[#474540] leading-relaxed pt-1">
            {current.potentialFriction}
          </p>
        </div>

        {/* Product Opportunity */}
        <div className="bg-white p-4 rounded-lg border border-[#E8E6DF] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2B4C7E]">
              Product Opportunity
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">PM Intervention</span>
          </div>
          <h4 className="text-xs font-semibold text-[#141413]">How we solve it</h4>
          <p className="text-xs text-[#141413] font-medium leading-relaxed pt-1">
            {current.productOpportunity}
          </p>
        </div>
      </div>
    </div>
  );
};
