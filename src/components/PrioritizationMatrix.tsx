import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowUpRight, Compass, ShieldAlert } from 'lucide-react';

interface PrioritizationItem {
  id: string;
  name: string;
  category: 'core' | 'expansion' | 'later';
  value: 'High' | 'Medium' | 'Low';
  complexity: 'Low' | 'Medium' | 'High';
  rationale: string;
  pmTradeoff: string;
}

export const PrioritizationMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'expansion' | 'later'>('all');
  const [selectedItemId, setSelectedItemId] = useState<string>('onboarding');

  const items: PrioritizationItem[] = [
    // Core
    {
      id: 'onboarding',
      name: 'Customer Onboarding',
      category: 'core',
      value: 'High',
      complexity: 'Low',
      rationale: 'Frictionless signup and SSH key entry eliminates the need for manual customer onboarding calls.',
      pmTradeoff: 'Prioritized over complex SSO integrations to guarantee self-service velocity immediately.',
    },
    {
      id: 'configuration',
      name: 'Product Configuration',
      category: 'core',
      value: 'High',
      complexity: 'Medium',
      rationale: 'Structured compute options (GPU model, VRAM tier, base container) reduce invalid hardware selections.',
      pmTradeoff: 'Constrained to verified configuration bundles rather than infinite freeform slider combinations.',
    },
    {
      id: 'provisioning',
      name: 'Provisioning Workflow',
      category: 'core',
      value: 'High',
      complexity: 'High',
      rationale: 'Automated state machine allocates bare-metal nodes and verifies healthy GPU status in < 3 minutes.',
      pmTradeoff: 'High complexity accepted because manual provisioning breaks unit economics and scalability.',
    },
    {
      id: 'accounts',
      name: 'Account Management',
      category: 'core',
      value: 'High',
      complexity: 'Low',
      rationale: 'Basic multi-user tenancy, spend guardrails, and role-based SSH credential isolation.',
      pmTradeoff: 'Scoped to team-level workspaces; complex enterprise cross-department hierarchies deferred.',
    },
    {
      id: 'visibility',
      name: 'Basic Operational Visibility',
      category: 'core',
      value: 'High',
      complexity: 'Medium',
      rationale: 'Real-time dashboard displaying instance uptime, GPU temperature, and active credit consumption.',
      pmTradeoff: 'Focused on actionable workload telemetry rather than building a full-featured observability suite.',
    },

    // Expansion
    {
      id: 'partner-controls',
      name: 'Advanced Partner Controls',
      category: 'expansion',
      value: 'High',
      complexity: 'High',
      rationale: 'Multi-tenant white-label controls allowing resellers to manage client quotas, markup margins, and CNAME domains.',
      pmTradeoff: 'Directional capability phased after direct customer workflow stabilization.',
    },
    {
      id: 'analytics',
      name: 'Advanced Usage Analytics',
      category: 'expansion',
      value: 'Medium',
      complexity: 'Medium',
      rationale: 'Predictive cluster utilization models, historical workload cost breakdown, and CSV/API export streams.',
      pmTradeoff: 'Deferred in favor of core uptime and provisioning reliability.',
    },
    {
      id: 'automation',
      name: 'More Automation & Auto-Healing',
      category: 'expansion',
      value: 'High',
      complexity: 'High',
      rationale: 'Automated cluster scaling, dynamic node cordoning, and predictive hardware defect replacement.',
      pmTradeoff: 'Requires sufficient historical failure telemetry before investing in autonomous remediation.',
    },
    {
      id: 'customization',
      name: 'Advanced Customization',
      category: 'expansion',
      value: 'Medium',
      complexity: 'High',
      rationale: 'Custom container registries, private virtual networks, and specialized BIOS profile toggles.',
      pmTradeoff: 'Held for high-commit enterprise contracts to prevent premature edge-case drift.',
    },

    // Later / Explore
    {
      id: 'complex-custom',
      name: 'Complex Customization (Kernel/Bare-Metal)',
      category: 'later',
      value: 'Low',
      complexity: 'High',
      rationale: 'Niche requests for bespoke hypervisor patches or custom firmware overrides that break multi-tenancy.',
      pmTradeoff: 'Deliberately deprioritized to safeguard standard cluster manageability.',
    },
    {
      id: 'non-core-integrations',
      name: 'Non-Core Tool Integrations',
      category: 'later',
      value: 'Low',
      complexity: 'Medium',
      rationale: 'Niche third-party CI/CD pipeline triggers and non-standard orchestration frameworks.',
      pmTradeoff: 'Standard REST API and CLI cover 90% of user needs without continuous maintenance overhead.',
    },
    {
      id: 'advanced-commercial',
      name: 'Advanced Commercial Capabilities (Spot Bidding)',
      category: 'later',
      value: 'Medium',
      complexity: 'High',
      rationale: 'Real-time spot auction bidding markets and secondary compute derivative markets.',
      pmTradeoff: 'High financial engineering complexity with volatile early margin profiles; deferred until mature.',
    },
  ];

  const filteredItems =
    activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory);

  const selectedItem = items.find((i) => i.id === selectedItemId) || items[0];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            Prioritization Framework
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            What Belongs in the First Version? (Value vs. Complexity)
          </h3>
          <p className="text-xs text-[#73716B] mt-0.5">
            Demonstrating disciplined product scoping: separating core viability from expansion and later exploration.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#FAF9F5] border border-[#E8E6DF] rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeCategory === 'all'
                ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            All Capabilities
          </button>
          <button
            onClick={() => setActiveCategory('core')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeCategory === 'core'
                ? 'bg-white text-[#B85D19] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Core MVP
          </button>
          <button
            onClick={() => setActiveCategory('expansion')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeCategory === 'expansion'
                ? 'bg-white text-[#2B4C7E] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Expansion
          </button>
          <button
            onClick={() => setActiveCategory('later')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeCategory === 'later'
                ? 'bg-white text-[#73716B] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Later / Explore
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Prioritized Items List */}
        <div className="lg:col-span-6 space-y-2">
          {filteredItems.map((item) => {
            const isSelected = selectedItemId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs ring-1 ring-[#B85D19]/20'
                    : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
                }`}
              >
                <div>
                  <div className="text-xs font-semibold text-[#141413]">{item.name}</div>
                  <div className="text-[11px] text-[#73716B] mt-0.5 line-clamp-1">{item.rationale}</div>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider block ${
                      item.category === 'core'
                        ? 'text-[#B85D19] font-bold'
                        : item.category === 'expansion'
                        ? 'text-[#2B4C7E] font-medium'
                        : 'text-[#8E8C85]'
                    }`}
                  >
                    {item.category === 'core'
                      ? 'Core MVP'
                      : item.category === 'expansion'
                      ? 'Expansion'
                      : 'Later'}
                  </span>
                  <span className="text-[10px] text-[#8E8C85] font-mono">
                    Val: {item.value} / Cmplx: {item.complexity}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Inspection Panel */}
        <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
              <span className="text-xs font-mono uppercase text-[#B85D19] font-medium">
                Scope Decision Analysis
              </span>
              <span className="text-xs font-mono text-[#8E8C85]">
                {selectedItem.category.toUpperCase()} TIER
              </span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#141413]">{selectedItem.name}</h4>
              <div className="flex items-center gap-3 mt-2 text-xs text-[#5C5A55]">
                <span>Customer Value: <strong className="text-[#141413]">{selectedItem.value}</strong></span>
                <span>·</span>
                <span>Complexity: <strong className="text-[#141413]">{selectedItem.complexity}</strong></span>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-xs font-mono uppercase text-[#8E8C85] block mb-1">
                Product Rationale
              </span>
              <p className="text-xs text-[#33322E] leading-relaxed bg-white p-3.5 rounded-lg border border-[#E8E6DF]">
                {selectedItem.rationale}
              </p>
            </div>

            <div className="pt-1">
              <span className="text-xs font-mono uppercase text-[#B85D19] block mb-1">
                Strategic PM Trade-Off
              </span>
              <p className="text-xs text-[#474540] leading-relaxed">
                {selectedItem.pmTradeoff}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E6DF] text-[11px] text-[#8E8C85] flex items-center justify-between">
            <span>Prioritization Framework</span>
            <span className="font-mono">Demonstrated PM Logic</span>
          </div>
        </div>
      </div>
    </div>
  );
};
