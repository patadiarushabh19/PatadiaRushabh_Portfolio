import React, { useState } from 'react';
import { Cpu, Users, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

export const ProductContextTriangle: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<'product' | 'technology' | 'customer' | 'business'>('product');

  const details = {
    product: {
      title: 'Product (The Intersection)',
      subtitle: 'Where infrastructure capability becomes a consumable, repeatable offering',
      description:
        'The product manager’s central job in deep infrastructure is translation and boundary setting. Rather than letting low-level hypervisor knobs dictate user confusion, the product plane synthesizes technical feasibility, customer jobs, and commercial models into predictable workflows.',
      responsibilities: [
        'Defining self-service provisioning boundaries that eliminate manual ticket handoffs',
        'Standardizing instance catalogs without degrading specialized hardware acceleration',
        'Structuring multi-tenant data isolation to support both direct customers and reseller partners',
      ],
      tensions: 'Balances raw engineering possibilities against actual customer workflows and unit economics.',
    },
    technology: {
      title: 'Technology (Infrastructure)',
      subtitle: 'GPU compute, networking, storage, and automated cluster provisioning',
      description:
        'Physical accelerators (SXM/PCIe), high-throughput network fabric (InfiniBand/RoCE v2), local NVMe scratch storage, and kernel driver stability create intense operational constraints that cannot be hand-waved away.',
      responsibilities: [
        'Thermal dissipation limits and node power budgets',
        'Firmware parity and NVIDIA driver matrix compatibility',
        'Physical PCIe topology and inter-GPU NVLink bandwidth',
      ],
      tensions: 'High power and capital constraints; engineers naturally favor deep manual root control.',
    },
    customer: {
      title: 'Customer (Demand)',
      subtitle: 'AI researchers, ML engineers, and startups needing prompt outcomes',
      description:
        'Customers do not purchase bare metal to admire server chassis. They want predictable compute access, instant SSH handoff, deterministic pricing, clear usage metrics, and zero downtime during long training runs.',
      responsibilities: [
        'Immediate verification that their requested VRAM and PyTorch environment are ready',
        'Transparent hourly and reserved billing with spend limits',
        'Autonomous cluster management without needing DevOps tickets',
      ],
      tensions: 'Demands absolute simplicity, instant availability, and maximum flexibility at minimal cost.',
    },
    business: {
      title: 'Business (Commercial Viability)',
      subtitle: 'Amortization, direct sales, and multi-tenant reseller distribution',
      description:
        'Heavy capital expenditure on high-density GPUs requires fast payback periods and high sustained utilization. A single direct sales team cannot capture every niche vertical, making reseller/white-label partnerships a multiplier.',
      responsibilities: [
        'Maximizing compute cluster utilization rates above 85%',
        'Structuring predictable wholesale discounting for committed channel partners',
        'Protecting commercial margins while remaining competitive against hyperscalers',
      ],
      tensions: 'Requires sustained utilization and margin predictability without fracturing the codebase.',
    },
  };

  const current = details[selectedPillar];

  return (
    <div className="w-full bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            Strategic Alignment Model
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            The Product Challenge Sits Between Three Forces
          </h3>
        </div>
        <div className="text-xs font-mono text-[#8E8C85]">
          Click any dimension to inspect the PM tension
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
        {/* Interactive Visual Triangle Diagram */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-4">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {/* SVG Connecting Triangle Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
              <polygon
                points="160,35 40,265 280,265"
                fill="none"
                stroke="#E8E6DF"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <line x1="160" y1="35" x2="160" y2="175" stroke="#E8E6DF" strokeWidth="1.5" />
              <line x1="40" y1="265" x2="160" y2="175" stroke="#E8E6DF" strokeWidth="1.5" />
              <line x1="280" y1="265" x2="160" y2="175" stroke="#E8E6DF" strokeWidth="1.5" />
            </svg>

            {/* Top Vertex: TECHNOLOGY */}
            <button
              onClick={() => setSelectedPillar('technology')}
              className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-lg border text-xs font-medium transition-all shadow-xs flex items-center gap-2 ${
                selectedPillar === 'technology'
                  ? 'bg-[#141413] text-white border-[#141413] scale-105 ring-2 ring-[#B85D19]/40'
                  : 'bg-[#FAF9F5] text-[#141413] border-[#E8E6DF] hover:border-[#141413]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-[#B85D19]" />
              <span className="font-mono uppercase tracking-wider">Technology</span>
            </button>

            {/* Bottom-Left Vertex: CUSTOMER */}
            <button
              onClick={() => setSelectedPillar('customer')}
              className={`absolute bottom-2 left-0 px-4 py-2.5 rounded-lg border text-xs font-medium transition-all shadow-xs flex items-center gap-2 ${
                selectedPillar === 'customer'
                  ? 'bg-[#141413] text-white border-[#141413] scale-105 ring-2 ring-[#B85D19]/40'
                  : 'bg-[#FAF9F5] text-[#141413] border-[#E8E6DF] hover:border-[#141413]'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#B85D19]" />
              <span className="font-mono uppercase tracking-wider">Customer</span>
            </button>

            {/* Bottom-Right Vertex: BUSINESS */}
            <button
              onClick={() => setSelectedPillar('business')}
              className={`absolute bottom-2 right-0 px-4 py-2.5 rounded-lg border text-xs font-medium transition-all shadow-xs flex items-center gap-2 ${
                selectedPillar === 'business'
                  ? 'bg-[#141413] text-white border-[#141413] scale-105 ring-2 ring-[#B85D19]/40'
                  : 'bg-[#FAF9F5] text-[#141413] border-[#E8E6DF] hover:border-[#141413]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#B85D19]" />
              <span className="font-mono uppercase tracking-wider">Business</span>
            </button>

            {/* Center: PRODUCT */}
            <button
              onClick={() => setSelectedPillar('product')}
              className={`absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-xl border text-xs font-bold transition-all shadow-md flex items-center gap-2 ${
                selectedPillar === 'product'
                  ? 'bg-[#B85D19] text-white border-[#B85D19] scale-110'
                  : 'bg-white text-[#B85D19] border-[#B85D19] hover:bg-[#FAF9F5]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-mono uppercase tracking-widest text-sm">Product</span>
            </button>
          </div>
        </div>

        {/* Detailed Explanation Panel */}
        <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E6DF]">
            <span className="text-xs font-mono uppercase text-[#B85D19] font-medium">
              Dimension Inspector
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">
              {selectedPillar === 'product' ? 'Nexus of Value' : 'External Driver'}
            </span>
          </div>

          <div>
            <h4 className="text-base font-semibold text-[#141413]">{current.title}</h4>
            <p className="text-xs text-[#73716B] mt-0.5">{current.subtitle}</p>
          </div>

          <p className="text-xs text-[#474540] leading-relaxed">{current.description}</p>

          <div className="pt-2">
            <span className="text-xs font-mono uppercase text-[#8E8C85] block mb-2">
              Key Product Realities
            </span>
            <ul className="space-y-1.5">
              {current.responsibilities.map((r, i) => (
                <li key={i} className="text-xs text-[#33322E] flex items-start gap-2">
                  <span className="text-[#B85D19] font-bold">·</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-[#E8E6DF]">
            <span className="text-[11px] font-mono uppercase text-[#8E8C85] block mb-1">
              Core Tension Handled
            </span>
            <p className="text-xs text-[#B85D19] font-medium">{current.tensions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
