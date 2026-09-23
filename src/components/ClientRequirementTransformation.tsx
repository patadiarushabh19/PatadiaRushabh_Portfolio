import React, { useState } from 'react';
import { ArrowRight, HelpCircle, Lightbulb, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface InquiryExample {
  id: string;
  category: string;
  clientRequest: string;
  clientContext: string;
  pmDiagnosticQuestions: {
    question: string;
    uncoveredReality: string;
  }[];
  rootProblem: string;
  productFeatureDelivered: string;
  outcome: string;
}

export const ClientRequirementTransformation: React.FC = () => {
  const [selectedExampleId, setSelectedExampleId] = useState<string>('bare-metal-access');

  const examples: InquiryExample[] = [
    {
      id: 'bare-metal-access',
      category: 'Infrastructure Access',
      clientRequest: '“We need direct IPMI and root serial console access to the physical servers.”',
      clientContext: 'A fast-growing AI startup running 100B+ parameter fine-tuning jobs.',
      pmDiagnosticQuestions: [
        {
          question: 'Why do you need raw serial console access?',
          uncoveredReality: 'Their training jobs were hanging at 2 AM due to NVIDIA CUDA driver memory allocation stalls, and they had no way to restart the driver without a full ticket.',
        },
        {
          question: 'Who needs it?',
          uncoveredReality: 'Their ML on-call engineers, not low-level systems kernel hackers.',
        },
        {
          question: 'What problem does this actually solve?',
          uncoveredReality: 'Recovering crashed PyTorch instances rapidly without waiting for our data center NOC team to reboot servers.',
        },
        {
          question: 'Is raw serial console the only solution?',
          uncoveredReality: 'No. Giving untrusted serial access creates severe security hazards and allows accidental BIOS wipes in a multi-tenant cluster.',
        },
      ],
      rootProblem: 'Workload recovery and driver state reset capability, NOT physical server console access.',
      productFeatureDelivered:
        'One-Click In-Console Instance Health Reset: An API-driven graceful driver restart and memory reclamation workflow accessible directly from their dashboard.',
      outcome:
        'Client resolved hangs in < 15 seconds without exposing physical server IPMI credentials or endangering cluster security.',
    },
    {
      id: 'custom-invoicing',
      category: 'Commercial Operations',
      clientRequest: '“We need you to build a completely separate billing application for our clients.”',
      clientContext: 'An enterprise cloud reseller wanting to sell GPU compute to 20+ university lab accounts.',
      pmDiagnosticQuestions: [
        {
          question: 'Why do you need a separate billing application?',
          uncoveredReality: 'They were manually creating PDF invoices every month because their end-users were not allowed to see wholesale hardware costs.',
        },
        {
          question: 'What happens if we don’t solve it?',
          uncoveredReality: 'Their finance team spent 25 hours at the end of each billing cycle manually calculating compute drawdowns and applying margin markups in spreadsheets.',
        },
        {
          question: 'Is building a custom app the right solution?',
          uncoveredReality: 'No. Forking a custom billing app creates an ongoing software maintenance nightmare for both teams.',
        },
      ],
      rootProblem: 'Tenant-scoped billing isolation and automated wholesale margin calculation, NOT a standalone billing system.',
      productFeatureDelivered:
        'Configurable Reseller Margin Rules & Automated Sub-Tenant Invoicing: Resellers set a custom markup % in their admin console; the platform automatically generates white-labeled PDF invoices for each sub-account.',
      outcome:
        'Reseller eliminated 25 hours of monthly manual billing calculations while maintaining complete wholesale cost confidentiality.',
    },
    {
      id: 'dedicated-network',
      category: 'Network Architecture',
      clientRequest: '“We need physical dark fiber patches directly between our office and your rack.”',
      clientContext: 'A fintech quantitative research group training proprietary risk forecasting models.',
      pmDiagnosticQuestions: [
        {
          question: 'What problem does physical dark fiber solve for you?',
          uncoveredReality: 'Compliance officers were worried that training data passing over public Internet endpoints could be intercepted or leaked.',
        },
        {
          question: 'How frequently does this occur?',
          uncoveredReality: 'Only during initial training dataset uploads (1-2 times per quarter).',
        },
        {
          question: 'Is physical dark fiber feasible?',
          uncoveredReality: 'Extremely high capex and lead time (3-6 months), which would delay their pilot launch indefinitely.',
        },
      ],
      rootProblem: 'Compliant end-to-end data encryption in transit and tenant-isolated storage buckets, NOT physical fiber.',
      productFeatureDelivered:
        'Dedicated Encrypted WireGuard / IPsec Gateway + Client-Side KMS Bucket Ingestion: Allowed the team to sync datasets over private encrypted tunnels directly into isolated NVMe scratch volumes.',
      outcome:
        'Compliance passed within 48 hours; onboarding completed in days rather than waiting 4 months for telecom dark fiber runs.',
    },
  ];

  const current = examples.find((e) => e.id === selectedExampleId) || examples[0];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E6DF] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B85D19]">
            Client Management & Requirements Synthesis
          </span>
          <h3 className="text-lg font-semibold text-[#141413] tracking-tight mt-1">
            Transforming Customer Requests into Scalable Product Features
          </h3>
          <p className="text-xs text-[#73716B] mt-0.5">
            Never accept a proposed technical solution at face value. Interrogate the underlying customer problem.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-lg border border-[#E8E6DF]">
          {examples.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelectedExampleId(ex.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedExampleId === ex.id
                  ? 'bg-white text-[#141413] shadow-xs border border-[#E8E6DF] font-semibold'
                  : 'text-[#6B6964] hover:text-[#141413]'
              }`}
            >
              {ex.category}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Customer Raw Request vs Diagnostic Interrogation */}
        <div className="lg:col-span-6 space-y-4">
          {/* Customer Voice Card */}
          <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-xl p-5">
            <div className="flex items-center justify-between text-xs font-mono text-[#8E8C85] mb-2">
              <span className="flex items-center gap-1.5 text-[#B85D19] font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Customer Statement</span>
              </span>
              <span>{current.category}</span>
            </div>
            <div className="text-sm font-semibold text-[#141413] italic font-serif">
              {current.clientRequest}
            </div>
            <div className="text-xs text-[#73716B] mt-2">
              Context: {current.clientContext}
            </div>
          </div>

          {/* Diagnostic Questions List */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85] block mb-1">
              PM Diagnostic Interrogation (Socratic Discovery)
            </span>
            {current.pmDiagnosticQuestions.map((diag, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-lg border border-[#E8E6DF] text-xs space-y-1"
              >
                <div className="font-semibold text-[#141413] flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#B85D19] shrink-0" />
                  <span>{diag.question}</span>
                </div>
                <div className="text-[#5C5A55] pl-5 leading-relaxed">
                  {diag.uncoveredReality}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Translation: Root Problem to Delivered Feature */}
        <div className="lg:col-span-6 space-y-4">
          {/* Uncovered Root Problem */}
          <div className="bg-white p-5 rounded-xl border-l-4 border-l-[#B85D19] border border-[#E8E6DF] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85D19] font-bold block">
              The Real Root Problem Identified
            </span>
            <p className="text-sm font-semibold text-[#141413] leading-relaxed">
              {current.rootProblem}
            </p>
          </div>

          {/* Product Feature Delivered */}
          <div className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E8E6DF] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#2B4C7E] font-bold block flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#2B4C7E]" />
              <span>Scalable Product Solution Delivered</span>
            </span>
            <p className="text-xs text-[#21201D] font-medium leading-relaxed">
              {current.productFeatureDelivered}
            </p>
          </div>

          {/* Verified Outcome */}
          <div className="bg-white p-4 rounded-xl border border-[#E8E6DF] flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#3F6212] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#3F6212] font-bold block mb-0.5">
                Outcome Achieved
              </span>
              <p className="text-xs text-[#474540] leading-relaxed">
                {current.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
