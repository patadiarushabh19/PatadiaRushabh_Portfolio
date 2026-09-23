import React, { useState } from 'react';
import { GPU_PLATFORM_TECHNICAL_LAYERS } from '../data/portfolioData';
import { Server, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

export const TechnicalLayersViewer: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(2); // Default to Networking per prompt example

  const activeLayer = GPU_PLATFORM_TECHNICAL_LAYERS[activeLayerIndex];

  return (
    <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-xl p-6 md:p-8">
      <div className="pb-6 border-b border-[#F0EEE8]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8E8C85] uppercase tracking-wider">
          <span>Technical Architecture × Product Judgment</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#B85D19]">Systems Literacy</span>
        </div>
        <h3 className="text-xl font-semibold text-[#141413] tracking-tight mt-1">
          Where Product Management Meets Infrastructure
        </h3>
        <p className="text-xs text-[#73716B] mt-1 max-w-3xl leading-relaxed">
          The PM does not need to write every low-level kernel driver or configure every network interface.
          The PM <strong className="text-[#141413] font-semibold">must</strong> understand connectivity dependencies, isolation requirements, customer experience implications, failure scenarios, and operational trade-offs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Layer stack list */}
        <div className="lg:col-span-5 space-y-1.5 max-h-[520px] overflow-y-auto pr-2">
          {GPU_PLATFORM_TECHNICAL_LAYERS.map((layer, index) => {
            const isActive = activeLayerIndex === index;
            return (
              <button
                key={layer.name}
                onClick={() => setActiveLayerIndex(index)}
                onMouseEnter={() => setActiveLayerIndex(index)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-between group ${
                  isActive
                    ? 'bg-[#FAF9F5] border-[#B85D19] text-[#141413] font-semibold ring-1 ring-[#B85D19]/20'
                    : 'bg-white border-[#E8E6DF] text-[#474540] hover:border-[#C8C5BC]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="font-mono text-[11px] text-[#8E8C85] group-hover:text-[#B85D19]">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className="truncate">{layer.name}</span>
                </div>
                <span className="text-[10px] font-mono text-[#8E8C85] uppercase shrink-0">
                  {layer.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Layer Deep Dive Card */}
        <div className="lg:col-span-7 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DF]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19]">
                  Layer {activeLayerIndex < 9 ? `0${activeLayerIndex + 1}` : activeLayerIndex + 1} · {activeLayer.category}
                </span>
                <h4 className="text-lg font-semibold text-[#141413] mt-0.5">
                  {activeLayer.name}
                </h4>
              </div>
              <Cpu className="w-5 h-5 text-[#8E8C85]" />
            </div>

            {/* Core Box: What the PM needs to understand */}
            <div className="bg-white p-4 rounded-lg border border-[#E8E6DF] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B85D19] font-bold">
                <CheckCircle className="w-4 h-4 text-[#B85D19]" />
                <span>What the PM Needs to Understand & Govern</span>
              </div>
              <p className="text-sm text-[#141413] leading-relaxed font-medium">
                {activeLayer.pmFocus}
              </p>
            </div>

            {/* Technical reality vs Operational risk */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-lg bg-white border border-[#E8E6DF] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#73716B]">
                  <Server className="w-3.5 h-3.5 text-[#73716B]" />
                  <span>Engineering Reality</span>
                </div>
                <p className="text-xs text-[#474540] leading-relaxed">
                  {activeLayer.technicalReality}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#E8E6DF] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C2410C]">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#C2410C]" />
                  <span>Operational Failure Risk</span>
                </div>
                <p className="text-xs text-[#474540] leading-relaxed">
                  {activeLayer.operationalRisk}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-[#E8E6DF] flex items-center justify-between text-xs text-[#8E8C85]">
            <span>Distinction: Product governance over technical execution</span>
            <span className="font-mono text-[11px]">Platform Systems Architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
};
