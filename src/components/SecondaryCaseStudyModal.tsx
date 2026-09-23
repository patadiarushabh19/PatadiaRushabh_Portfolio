import React from 'react';
import { CASE_STUDIES, SECONDARY_CASE_STUDIES_DETAILS } from '../data/portfolioData';
import { X, ArrowRight, CheckCircle2, FileText, Cpu, Target } from 'lucide-react';

interface SecondaryCaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
  onNavigateToFlagship?: () => void;
  onNavigateToInternalPlatform?: () => void;
  onNavigateToCustomerRequirements?: () => void;
}

export const SecondaryCaseStudyModal: React.FC<SecondaryCaseStudyModalProps> = ({
  caseStudyId,
  onClose,
  onNavigateToFlagship,
  onNavigateToInternalPlatform,
  onNavigateToCustomerRequirements,
}) => {
  if (!caseStudyId) return null;

  const handleFlagshipNav = onNavigateToFlagship;
  const isInternalPlatform = caseStudyId === 'internal-developer-platform';
  const isCustomerRequirements = caseStudyId === 'customer-requirement-product-feature';

  const item = CASE_STUDIES.find((c) => c.id === caseStudyId);
  if (!item) return null;

  const details = SECONDARY_CASE_STUDIES_DETAILS[item.id] || {
    summary: item.shortDescription,
    problem: 'Translating enterprise client feedback into structured roadmap commitments and operational stability.',
    architectureHighlight: 'Modular services decoupled from bespoke custom requirements.',
    pmRole: 'Led requirements deconstruction, cross-team architecture alignment, and delivery orchestration.',
    keyDecisions: [
      'Prioritized generalized platform capabilities over one-off custom forks.',
      'Established measurable service level indicators for reliability and latency.',
    ],
    artifacts: ['Functional PRD', 'System Architecture RFC', 'Operational Runbook'],
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141413]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl border border-[#E2DFD7] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#8E8C85] hover:text-[#141413] rounded-md hover:bg-[#FAF9F5] focus:outline-none"
          aria-label="Close case study details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pb-6 border-b border-[#F0EEE8]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#B85D19]">
              PORTFOLIO {item.number}
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">
              {item.categoryTag}
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-[#141413] tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-[#5C5A55] leading-relaxed">
            {item.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#73716B]">
            <div>
              <span className="font-mono uppercase text-[10px] text-[#8E8C85] block">Role</span>
              <span className="font-medium text-[#141413]">{item.role}</span>
            </div>
            <div>
              <span className="font-mono uppercase text-[10px] text-[#8E8C85] block">Domain</span>
              <span className="font-medium text-[#141413]">{item.domain}</span>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-6 pt-6 text-xs">
          {/* Executive Summary */}
          <div>
            <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-[#8E8C85] text-[11px] mb-1.5">
              <Target className="w-3.5 h-3.5 text-[#B85D19]" />
              <span>Executive Overview</span>
            </div>
            <p className="text-sm text-[#33322E] leading-relaxed bg-[#FAF9F5] p-4 rounded-lg border border-[#E8E6DF]">
              {details.summary}
            </p>
          </div>

          {/* Problem & Architectural Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white border border-[#E8E6DF] space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#C2410C] font-bold block">
                The Product & Engineering Challenge
              </span>
              <p className="text-[#474540] leading-relaxed">
                {details.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#E8E6DF] space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#B85D19] font-bold block">
                Technical Architecture Pattern
              </span>
              <p className="text-[#474540] leading-relaxed">
                {details.architectureHighlight}
              </p>
            </div>
          </div>

          {/* PM Leadership & Ownership */}
          <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] space-y-1.5">
            <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-[#141413] font-semibold text-[11px]">
              <Cpu className="w-3.5 h-3.5 text-[#B85D19]" />
              <span>Rushabh's PM Leadership & Ownership</span>
            </div>
            <p className="text-[#474540] leading-relaxed">
              {details.pmRole}
            </p>
          </div>

          {/* Key Product Decisions */}
          <div>
            <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[11px] block mb-2 font-bold">
              Key Strategic Decisions
            </span>
            <ul className="space-y-2">
              {details.keyDecisions.map((dec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#33322E] bg-white p-2.5 rounded border border-[#E8E6DF]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Artifacts Available */}
          <div>
            <span className="font-mono uppercase tracking-wider text-[#8E8C85] text-[11px] block mb-2 font-bold">
              Product Artifacts & Specifications
            </span>
            <div className="flex flex-wrap gap-2">
              {details.artifacts.map((art, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F4F2EC] text-[#474540] font-mono text-[11px]"
                >
                  <FileText className="w-3 h-3 text-[#8E8C85]" />
                  <span>{art}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#E8E6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8E8C85] font-mono">
            [Detailed case study document available for executive review]
          </div>

          <div className="flex items-center gap-3">
            {isInternalPlatform && onNavigateToInternalPlatform ? (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToInternalPlatform();
                }}
                className="text-xs text-white bg-[#B85D19] px-4 py-2 rounded-md hover:bg-[#A35216] transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : isCustomerRequirements && onNavigateToCustomerRequirements ? (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToCustomerRequirements();
                }}
                className="text-xs text-white bg-[#B85D19] px-4 py-2 rounded-md hover:bg-[#A35216] transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : handleFlagshipNav ? (
              <button
                onClick={() => {
                  onClose();
                  handleFlagshipNav();
                }}
                className="text-xs text-[#B85D19] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Read Flagship Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : null}
            <button
              onClick={onClose}
              className="text-xs font-medium text-[#FAF9F5] bg-[#141413] px-4 py-2 rounded-md hover:bg-[#2A2925] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
