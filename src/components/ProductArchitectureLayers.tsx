import React, { useState } from 'react';
import { Layers, ArrowDown, Users, Sparkles, Server, Cpu, ShieldCheck } from 'lucide-react';

interface ArchitectureLayer {
  id: string;
  name: string;
  subhead: string;
  components: string[];
  pmOwnership: string;
  crossLayerImpact: string;
  color: string;
}

export const ProductArchitectureLayers: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('product');

  const layers: ArchitectureLayer[] = [
    {
      id: 'experience',
      name: 'EXPERIENCE',
      subhead: 'Surface presentation and direct interaction',
      components: ['Customer Self-Service Console', 'Partner Branded Portals', 'Internal NOC Admin Console'],
      pmOwnership:
        'Owns workflow usability, friction points, onboarding conversion, time-to-first-compute, and white-label visual parity.',
      crossLayerImpact:
        'A clunky configuration form in Experience increases customer drop-off even if the underlying physical GPU is 100% available.',
      color: '#B85D19',
    },
    {
      id: 'product',
      name: 'PRODUCT',
      subhead: 'Commercial logic, user workflows, and lifecycle state',
      components: ['Account Hierarchies', 'Instance Configuration', 'Provisioning Engine', 'Usage Metering', 'Workspace Management'],
      pmOwnership:
        'Core PM locus: structuring hardware options into consumable product SKUs, reservation terms, quota guards, and billing tiers.',
      crossLayerImpact:
        'Decisions made here determine whether the platform can support resellers, prepaid credits, or committed-use contracts.',
      color: '#B85D19',
    },
    {
      id: 'platform',
      name: 'PLATFORM',
      subhead: 'Shared foundational capabilities and multi-tenant services',
      components: ['Public & Internal REST APIs', 'Cluster State Machine Workflows', 'OAuth / RBAC Authentication', 'Dynamic Node Automation'],
      pmOwnership:
        'Ensures shared API contracts are consistent, multi-tenant boundaries cannot be crossed, and automation eliminates human intervention.',
      crossLayerImpact:
        'Slow or uncoordinated state machines here cause provisioning timeouts and create dangling, un-reclaimed bare-metal nodes.',
      color: '#2B4C7E',
    },
    {
      id: 'infrastructure',
      name: 'INFRASTRUCTURE',
      subhead: 'Physical hardware and bare-metal orchestration',
      components: ['High-Density GPU Nodes', 'SXM & PCIe Interconnects', 'RoCE v2 / InfiniBand Fabric', 'Local NVMe Scratch Storage'],
      pmOwnership:
        'Maintains deep technical literacy regarding PCIe lane topologies, thermal constraints, driver parity, and network throughput.',
      crossLayerImpact:
        'Physical fabric latency and PCIe bandwidth directly limit which AI distributed training architectures can run feasibly.',
      color: '#3F6212',
    },
    {
      id: 'operations',
      name: 'OPERATIONS',
      subhead: 'Reliability, cluster health, and ongoing support',
      components: ['Cluster Telemetry & Health Monitoring', 'Automated Node Failover & Cordoning', 'SLA & Uptime Tracking', 'Capacity Forecasting'],
      pmOwnership:
        'Defines operational readiness, error recovery expectations, customer communication SLAs, and support triage playbooks.',
      crossLayerImpact:
        'Failure to monitor hardware degradation leads to silent data corruption in ML training runs and degraded customer trust.',
      color: '#474540',
    },
  ];

  const selectedLayer = layers.find((l) => l.id === selectedLayerId) || layers[1];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            System Decomposition
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            Think in Layers: The 5-Layer Platform Model
          </h3>
        </div>
        <div className="text-xs font-mono text-[#8E8C85]">
          Click any layer to inspect PM responsibilities & cross-layer effects
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Layer Stack */}
        <div className="lg:col-span-6 space-y-2.5">
          {layers.map((layer, idx) => {
            const isSelected = selectedLayerId === layer.id;
            return (
              <React.Fragment key={layer.id}>
                <button
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs ring-1 ring-[#B85D19]/20'
                      : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8C85]">
                        Layer 0{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#141413] tracking-wider">
                        {layer.name}
                      </span>
                    </div>
                    <div className="text-xs text-[#5C5A55] mt-1 font-medium">
                      {layer.components.join(' · ')}
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-[#8E8C85] uppercase">
                    {layer.id === 'product' ? 'PM Nexus' : 'Platform Layer'}
                  </div>
                </button>
                {idx < layers.length - 1 && (
                  <div className="flex justify-center text-[#B6B4AC] -my-1">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Layer Inspection */}
        <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
              <span className="text-xs font-mono uppercase text-[#B85D19] font-medium">
                {selectedLayer.name} Analysis
              </span>
              <span className="text-xs font-mono text-[#8E8C85]">Layer Architectural Bound</span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#141413]">{selectedLayer.subhead}</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedLayer.components.map((comp, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-[#474540] bg-white px-2.5 py-1 rounded border border-[#E8E6DF]"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-[#8E8C85] block mb-1.5">
                Product Manager Ownership
              </span>
              <p className="text-xs text-[#33322E] leading-relaxed bg-white p-3.5 rounded-lg border border-[#E8E6DF]">
                {selectedLayer.pmOwnership}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-[#B85D19] block mb-1.5">
                Cross-Layer Consequence
              </span>
              <p className="text-xs text-[#474540] leading-relaxed">
                {selectedLayer.crossLayerImpact}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E6DF] bg-white/60 p-3 rounded-md">
            <blockquote className="text-xs text-[#141413] italic font-serif">
              "A product manager doesn't need to own every technical layer. They do need to understand how decisions in one layer affect the others."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
