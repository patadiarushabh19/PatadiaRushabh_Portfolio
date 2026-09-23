import React, { useState } from 'react';
import { Layers, CheckCircle2, Shield, Globe, Sliders, Building2, ArrowDown, Users } from 'lucide-react';

export const WhiteLabelDiagram: React.FC = () => {
  const [activePartner, setActivePartner] = useState<'direct' | 'partnerA' | 'partnerB'>('partnerA');

  const partners = {
    direct: {
      brand: 'Platform Direct',
      subdomain: 'console.gpuplatform.internal',
      model: 'Direct B2B Self-Service',
      accentColor: '#B85D19',
      marginRule: 'Standard Retail Rate (100%)',
      customerTenancy: 'Platform Direct Master Accounts',
      billingFlow: 'Direct Credit Card & Enterprise Invoicing',
    },
    partnerA: {
      brand: 'Managed Cloud Reseller (Partner A)',
      subdomain: 'compute.reseller-cloud.io (Custom CNAME)',
      model: 'Managed Enterprise Reseller',
      accentColor: '#2B4C7E',
      marginRule: 'Partner Wholesale Tier (+24% Margin)',
      customerTenancy: 'Reseller Tenant-Scoped Sub-Accounts',
      billingFlow: 'Consolidated Monthly Wholesale Invoice',
    },
    partnerB: {
      brand: 'Specialized Compute Partner (Partner B)',
      subdomain: 'gpu.partnercompute.tech (Custom CNAME)',
      model: 'Specialized Academic & Biotech Cluster',
      accentColor: '#3F6212',
      marginRule: 'Institutional Pack (+18% Margin)',
      customerTenancy: 'Partner Institutional Org Hierarchy',
      billingFlow: 'Prepaid Quota & PO-Based Drawdown',
    },
  };

  const current = partners[activePartner];

  const pmImplications = [
    {
      title: 'Product',
      principle: 'Underlying capabilities must remain standardized.',
      explanation:
        'Resellers share identical hypervisor orchestration, instance flavors, and health verification state machines. No bespoke feature branches.',
    },
    {
      title: 'Experience',
      principle: 'Partner-facing customization without rebuilding the platform.',
      explanation:
        'Theming is treated as declarative metadata (logo URI, hex palettes, CNAME routing, support email) injected at runtime, not separate codebases.',
    },
    {
      title: 'Operations',
      principle: 'Centralized infrastructure remains completely manageable.',
      explanation:
        'Data center operators manage one physical cluster. Whether compute is consumed directly or via a reseller, hardware maintenance workflows are identical.',
    },
    {
      title: 'Business',
      principle: 'One technical foundation supports multiple routes to market.',
      explanation:
        'Capital expenditure on high-density GPUs is amortized faster by serving self-service developers directly while enabling resellers to bring volume accounts.',
    },
  ];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            White-Label Reseller Strategy
          </span>
          <h3 className="text-xl font-semibold text-[#141413] tracking-tight mt-1">
            One Infrastructure Foundation. Multiple Customer Experiences.
          </h3>
          <p className="text-xs text-[#73716B] mt-1 max-w-2xl">
            The white-label concept transforms the offering from simply providing GPU compute into a platform that empowers commercial partners.
          </p>
        </div>

        {/* Partner Switcher */}
        <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-lg border border-[#E8E6DF]">
          <button
            onClick={() => setActivePartner('direct')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activePartner === 'direct'
                ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF]'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Direct Retail
          </button>
          <button
            onClick={() => setActivePartner('partnerA')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activePartner === 'partnerA'
                ? 'bg-white text-[#2B4C7E] shadow-xs border border-[#E8E6DF] font-semibold'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Reseller Partner A
          </button>
          <button
            onClick={() => setActivePartner('partnerB')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activePartner === 'partnerB'
                ? 'bg-white text-[#3F6212] shadow-xs border border-[#E8E6DF] font-semibold'
                : 'text-[#6B6964] hover:text-[#141413]'
            }`}
          >
            Specialized Partner B
          </button>
        </div>
      </div>

      {/* 3-Tier Core Visual Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <div className="lg:col-span-7 space-y-4">
          {/* Level 1: CORE PLATFORM */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#8E8C85]">
              <span>TIER 01 · CORE PLATFORM</span>
              <span className="font-semibold text-[#141413]">CENTRALIZED & SHARED</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#141413] text-white flex items-center justify-center text-xs font-bold shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#141413]">
                  GPU Infrastructure · Platform Services · Operations
                </div>
                <div className="text-xs text-[#5C5A55] mt-0.5">
                  Bare-metal cluster state, PCIe/InfiniBand fabric, unified monitoring daemons, and core REST APIs.
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-[#B6B4AC] -my-1">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Level 2: PARTNER LAYER */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#2B4C7E]">
              <span className="font-semibold">TIER 02 · PARTNER LAYER</span>
              <span className="font-mono">TENANT-SCOPED METADATA</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2B4C7E] text-white flex items-center justify-center text-xs font-bold shrink-0">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#141413]">
                  Brand · Customer Experience · Commercial Configuration
                </div>
                <div className="text-xs text-[#5C5A55] mt-0.5">
                  Custom CNAME routing, white-label UI theming, wholesale margin multipliers, and sub-account isolation.
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-[#B6B4AC] -my-1">
            <ArrowDown className="w-4 h-4" />
          </div>

          {/* Level 3: END CUSTOMER */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#B85D19]">
              <span className="font-semibold">TIER 03 · END CUSTOMER</span>
              <span className="font-mono">AUTONOMOUS EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#B85D19] text-white flex items-center justify-center text-xs font-bold shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#141413]">
                  Discover · Configure · Consume · Manage
                </div>
                <div className="text-xs text-[#5C5A55] mt-0.5">
                  Customer interacts solely with their authorized brand, provisioning compute seamlessly without seeing vendor layers.
                </div>
              </div>
            </div>
          </div>

          {/* 4 PM Implications Grid */}
          <div className="pt-4 mt-6 border-t border-[#E8E6DF]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-3">
              Product Management Implications
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pmImplications.map((imp, idx) => (
                <div key={idx} className="p-3 bg-[#FAF9F5] border border-[#E8E6DF] rounded-lg">
                  <div className="text-xs font-semibold text-[#141413] flex items-center gap-1.5">
                    <span className="text-[#B85D19] font-mono text-[11px]">0{idx + 1}</span>
                    <span>{imp.title}</span>
                  </div>
                  <div className="text-[11px] text-[#141413] font-medium mt-1">
                    {imp.principle}
                  </div>
                  <div className="text-[11px] text-[#5C5A55] mt-1 leading-relaxed">
                    {imp.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Partner Tenant Sandbox */}
        <div className="lg:col-span-5 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#B85D19]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] font-semibold">
                  {current.brand}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#8E8C85]">Tenant Config</span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Domain & Identity Routing
                </span>
                <div className="text-xs font-mono font-medium text-[#141413] mt-0.5 bg-white px-2.5 py-1.5 rounded border border-[#E8E6DF]">
                  {current.subdomain}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Margin & Pricing Policy
                </span>
                <div className="text-xs text-[#21201D] mt-0.5 font-medium">
                  {current.marginRule}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Customer Tenancy Isolation
                </span>
                <div className="text-xs text-[#21201D] mt-0.5">
                  {current.customerTenancy}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block">
                  Wholesale Settlement Workflow
                </span>
                <div className="text-xs text-[#21201D] mt-0.5">
                  {current.billingFlow}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8E6DF]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19] block mb-2">
                Architectural Guardrails
              </span>
              <ul className="space-y-1.5 text-xs text-[#474540]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                  <span>Zero code branches per reseller client.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                  <span>Strict DB tenant-scoped query filters on all workloads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                  <span>Automated wholesale reconciliation and drawdown reports.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8E6DF] text-[11px] text-[#8E8C85]">
            Result: 1 platform foundation scales across retail and partner channels.
          </div>
        </div>
      </div>
    </div>
  );
};
