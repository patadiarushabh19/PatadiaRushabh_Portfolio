import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, XCircle, Eye } from 'lucide-react';

interface TradeOffComparison {
  id: string;
  title: string;
  tagline: string;
  gain: string;
  giveUp: string;
  monitor: string;
}

export const TradeOffCards: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(0);

  const tradeOffs: TradeOffComparison[] = [
    {
      id: 'flexibility-simplicity',
      title: 'Flexibility vs. Simplicity',
      tagline: 'More configuration options can increase customer drop-off and operational complexity.',
      gain: 'Frictionless, deterministic onboarding where 90% of ML engineers can launch a verified cluster in under three clicks.',
      giveUp: 'Ultra-bespoke hypervisor toggles and custom BIOS configurations for rare niche requirements.',
      monitor: 'Customer onboarding conversion rates, time-to-first-compute, and support ticket volume related to launch parameters.',
    },
    {
      id: 'customization-scalability',
      title: 'Customization vs. Scalability',
      tagline: 'More partner customization can quickly degrade shared platform maintainability.',
      gain: 'A unified single-tenant or multi-tenant codebase where bug fixes and platform updates deploy instantly across all partners.',
      giveUp: 'Completely unique, client-specific database models or bespoke UI workflows requested by individual resellers.',
      monitor: 'Codebase divergence metrics, partner onboarding lead time, and core API response latency across all tenants.',
    },
    {
      id: 'speed-completeness',
      title: 'Speed vs. Completeness',
      tagline: 'A broader first release delays real-world customer validation and introduces hidden failure states.',
      gain: 'Early production feedback from active ML teams, validating core provisioning workflows months ahead of competitors.',
      giveUp: 'Secondary monetization features (algorithmic spot bidding, complex multi-region federation) at launch.',
      monitor: 'Daily active instance hours, customer retention after first training run, and provisioning error rates.',
    },
    {
      id: 'automation-control',
      title: 'Automation vs. Control',
      tagline: 'More automation reduces manual toil but introduces unexpected failure modes in edge cases.',
      gain: 'Autonomous node provisioning, dynamic pre-flight verification, and instant SSH handover without human NOC intervention.',
      giveUp: 'Manual human-in-the-loop inspection of every hardware allocation before handoff.',
      monitor: 'Automated health-check false positive rates, orphan node allocation states, and time-to-recovery during node cordoning.',
    },
  ];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="pb-6 border-b border-[#E8E6DF]">
        <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
          Architectural Equilibrium
        </span>
        <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
          Every Product Decision Moves Complexity Somewhere Else
        </h3>
        <p className="text-xs text-[#73716B] mt-0.5">
          Engineering products do not eliminate complexity; they relocate it. Product management is deciding where that complexity belongs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        {tradeOffs.map((card, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <div
              key={card.id}
              onClick={() => setSelectedIdx(isSelected ? null : idx)}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#FAF9F5] border-[#B85D19] shadow-xs ring-1 ring-[#B85D19]/20'
                  : 'bg-white border-[#E8E6DF] hover:border-[#C8C5BC]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#B85D19] font-bold">
                    TRADE-OFF 0{idx + 1}
                  </span>
                  <ArrowLeftRight className="w-3.5 h-3.5 text-[#8E8C85]" />
                </div>

                <h4 className="text-base font-semibold text-[#141413]">
                  {card.title}
                </h4>
                <p className="text-xs text-[#5C5A55] mt-1 leading-relaxed">
                  {card.tagline}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-[#E8E6DF] space-y-3 text-xs">
                    {/* What we gain */}
                    <div className="bg-white p-3 rounded-lg border border-[#E8E6DF]">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#3F6212] font-semibold mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>What We Gain</span>
                      </div>
                      <p className="text-[#33322E] leading-relaxed">
                        {card.gain}
                      </p>
                    </div>

                    {/* What we give up */}
                    <div className="bg-white p-3 rounded-lg border border-[#E8E6DF]">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-semibold mb-1">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>What We Give Up</span>
                      </div>
                      <p className="text-[#33322E] leading-relaxed">
                        {card.giveUp}
                      </p>
                    </div>

                    {/* What I would monitor */}
                    <div className="bg-white p-3 rounded-lg border border-[#E8E6DF]">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#2B4C7E] font-semibold mb-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>What I Would Monitor</span>
                      </div>
                      <p className="text-[#33322E] leading-relaxed font-medium">
                        {card.monitor}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-[#8E8C85]">
                <span>{isSelected ? 'Click to collapse' : 'Click to inspect trade-off'}</span>
                <span className="font-mono">{isSelected ? 'Active' : 'Expand'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
