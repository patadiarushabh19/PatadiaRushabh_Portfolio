import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Code, Cpu, Workflow, GitCommit } from 'lucide-react';

interface StageInfo {
  step: string;
  stage: string;
  summary: string;
  pmRole: string;
  tangibleOutput: string;
  engineeringIntersection: string;
}

export const ProductToEngineeringFlow: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(3); // Default to Technical discussion

  const stages: StageInfo[] = [
    {
      step: '01',
      stage: 'Customer Problem',
      summary: 'Observe real customer friction, unmet workload needs, or operational breakdowns.',
      pmRole: 'Direct user interviews, operational audits, and identifying root causes beneath symptom complaints.',
      tangibleOutput: 'Problem statement & discovery synthesis deck',
      engineeringIntersection: 'Informs engineering about customer environment realities without prescribing low-level code.',
    },
    {
      step: '02',
      stage: 'Product Requirement',
      summary: 'Define precisely what needs to happen, who it serves, and why it matters commercially.',
      pmRole: 'Formulate acceptance criteria, non-functional latency budgets, and functional capabilities.',
      tangibleOutput: 'Structured PRD with edge-case specifications',
      engineeringIntersection: 'Establishes clear boundaries of success and business priority for the engineering sprint.',
    },
    {
      step: '03',
      stage: 'User Workflow',
      summary: 'Map the step-by-step user journey, error recovery states, and authentication flows.',
      pmRole: 'Design declarative state transitions, friction-free input forms, and error messaging.',
      tangibleOutput: 'User flow diagrams & wireframe walkthroughs',
      engineeringIntersection: 'Provides engineering with the exact sequential contract of user actions and state triggers.',
    },
    {
      step: '04',
      stage: 'Technical Discussion',
      summary: 'Engage engineering leads in joint architectural and feasibility review sessions.',
      pmRole: 'Understand feasibility, dependencies, failure domains, and kernel/driver constraints.',
      tangibleOutput: 'Joint technical feasibility matrix',
      engineeringIntersection: 'Collaborative partnership where technical trade-offs are weighed directly against user impact.',
    },
    {
      step: '05',
      stage: 'Engineering Constraint',
      summary: 'Identify physical PCIe bandwidth, thermal thresholds, and hypervisor limitations.',
      pmRole: 'Listen actively, comprehend technical bounds, and adjust product expectations accordingly.',
      tangibleOutput: 'Documented constraints & architectural bounds',
      engineeringIntersection: 'Prevents impossible promises; grounds the product roadmap in verifiable physical reality.',
    },
    {
      step: '06',
      stage: 'Scope Decision',
      summary: 'Balance customer value against technical complexity and delivery timelines.',
      pmRole: 'Make the tough trade-off cuts: determine what is mandatory for MVP versus deferrable expansion.',
      tangibleOutput: 'Prioritized sprint backlog & scope boundary document',
      engineeringIntersection: 'Protects engineering velocity by shielding developers from feature creep and moving goalposts.',
    },
    {
      step: '07',
      stage: 'Implementation',
      summary: 'Engineering builds orchestration services, APIs, and user-facing consoles.',
      pmRole: 'Unblock dependencies, clarify ambiguous requirements on the fly, and participate in daily standups.',
      tangibleOutput: 'Daily standup notes & Jira ticket clarifications',
      engineeringIntersection: 'Maintains open dialogue, answering functional edge-case questions within minutes.',
    },
    {
      step: '08',
      stage: 'Validation',
      summary: 'Confirm that the delivered experience actually solves the original customer problem.',
      pmRole: 'Conduct user acceptance testing (UAT), review canary metrics, and observe initial customer sessions.',
      tangibleOutput: 'UAT verification report & beta feedback log',
      engineeringIntersection: 'Validates code execution against original customer success criteria rather than just unit tests.',
    },
    {
      step: '09',
      stage: 'Iteration',
      summary: 'Refine the product based on real production telemetry, support tickets, and customer requests.',
      pmRole: 'Synthesize usage data, prioritize fast bug fixes, and feed learnings into the next release cycle.',
      tangibleOutput: 'Continuous improvement roadmap & backlog refinement',
      engineeringIntersection: 'Maintains a virtuous cycle of engineering improvements backed by real user demand.',
    },
  ];

  const current = stages[activeStageIndex];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            The Engineering Partnership
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            Where Product Meets Engineering: The 9-Stage Continuum
          </h3>
          <p className="text-xs text-[#73716B] mt-0.5">
            A product manager respects engineering ownership without abdicating product judgment.
          </p>
        </div>
        <div className="text-xs font-mono text-[#8E8C85]">
          Step {activeStageIndex + 1} of 9
        </div>
      </div>

      {/* Stage Flow Indicator */}
      <div className="pt-6 pb-2 overflow-x-auto">
        <div className="flex items-center min-w-[760px] justify-between pb-2">
          {stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <React.Fragment key={stage.step}>
                <button
                  onClick={() => setActiveStageIndex(idx)}
                  className={`flex flex-col items-center group text-center p-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#FAF9F5] scale-105'
                      : 'hover:bg-[#FAF9F5]'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono transition-colors ${
                      isActive
                        ? 'bg-[#B85D19] text-white font-bold'
                        : 'bg-[#F4F2EC] text-[#73716B] group-hover:text-[#141413]'
                    }`}
                  >
                    {stage.step}
                  </div>
                  <span
                    className={`text-[11px] mt-1.5 font-medium max-w-[72px] truncate ${
                      isActive ? 'text-[#141413] font-semibold' : 'text-[#73716B]'
                    }`}
                  >
                    {stage.stage}
                  </span>
                </button>
                {idx < stages.length - 1 && (
                  <div className="w-4 h-[1px] bg-[#E8E6DF] shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="mt-6 bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E6DF]">
            <span className="text-xs font-mono uppercase text-[#B85D19] font-medium">
              Stage {current.step} · {current.stage}
            </span>
            <span className="text-xs font-mono text-[#8E8C85]">Cross-Functional Handshake</span>
          </div>

          <div>
            <h4 className="text-base font-semibold text-[#141413]">{current.summary}</h4>
          </div>

          <div className="space-y-3 pt-1">
            <div>
              <span className="text-xs font-mono uppercase text-[#8E8C85] block mb-1">
                Rushabh's Role as Product Leader
              </span>
              <p className="text-xs text-[#141413] leading-relaxed bg-white p-3 rounded-lg border border-[#E8E6DF] font-medium">
                {current.pmRole}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-[#2B4C7E] block mb-1">
                Engineering Collaboration & Boundary
              </span>
              <p className="text-xs text-[#474540] leading-relaxed">
                {current.engineeringIntersection}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-[#E8E6DF] rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase text-[#8E8C85] block mb-1">
              Tangible Stage Deliverable
            </span>
            <div className="text-xs font-semibold text-[#141413] bg-[#FAF9F5] p-3 rounded-lg border border-[#E8E6DF]">
              {current.tangibleOutput}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E8E6DF]">
            <span className="text-[11px] font-mono uppercase text-[#8E8C85] block">
              PM Operating Creed
            </span>
            <p className="text-xs text-[#5C5A55] italic leading-relaxed">
              "Understand engineering without pretending to be the engineering owner. Own the 'what' and 'why', respect the 'how', and clarify the boundaries."
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              disabled={activeStageIndex === 0}
              onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
              className="text-xs text-[#73716B] hover:text-[#141413] disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Stage
            </button>
            <button
              disabled={activeStageIndex === stages.length - 1}
              onClick={() => setActiveStageIndex((prev) => Math.min(stages.length - 1, prev + 1))}
              className="text-xs text-[#B85D19] font-medium hover:underline disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
