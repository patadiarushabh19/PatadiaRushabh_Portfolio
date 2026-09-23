import React from 'react';
import { X, FileText, CheckCircle2, ArrowRight, Layers, Sliders, Target, Shield, Cpu, Activity } from 'lucide-react';

interface ArtifactModalProps {
  artifactKey: string | null;
  onClose: () => void;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({ artifactKey, onClose }) => {
  if (!artifactKey) return null;

  const artifactsData: Record<
    string,
    { title: string; category: string; description: string; content: React.ReactNode }
  > = {
    prd: {
      title: 'Product Requirements Document (PRD) Excerpt',
      category: 'Product Specification · GPU Provisioning Core v1.0',
      description: 'Formal product specifications defining functional boundaries, user personas, API contracts, and acceptance criteria.',
      content: (
        <div className="space-y-4 text-xs">
          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B85D19] block mb-1 font-bold">
              1. Objective & Non-Goals
            </span>
            <p className="text-[#33322E] leading-relaxed">
              <strong>Objective:</strong> Enable verified developers and AI practitioners to configure, provision, and connect to an authenticated GPU-accelerated node via GUI or REST API in under 180 seconds with per-second billing accuracy.
              <br />
              <strong>Non-Goal:</strong> We will not provide managed Kubernetes orchestrators or spot-market bidding auctions in v1.0.
            </p>
          </div>

          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B85D19] block mb-1 font-bold">
              2. Core User Stories & Acceptance Criteria
            </span>
            <ul className="space-y-2 text-[#474540]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                <span>
                  <strong>US-101:</strong> As an AI practitioner, I want to select between SXM and PCIe GPU topologies with explicit VRAM and interconnect specs displayed so I choose the right instance for my batch size.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                <span>
                  <strong>US-102:</strong> As a white-label reseller admin, I want to configure custom CNAME hostnames and wholesale markup percentages without submitting engineering support tickets.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D19] shrink-0 mt-0.5" />
                <span>
                  <strong>US-103:</strong> As an infrastructure operator, I need automated health heartbeats every 10s to isolate degraded nodes from the customer booking pool.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    architecture: {
      title: 'Platform Architecture & Tenancy Boundary Diagram',
      category: 'Technical Architecture · PM Specification',
      description: 'Layered boundary model demonstrating separation between physical hardware, orchestration, and reseller presentation.',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF] space-y-2">
            <span className="font-mono text-[11px] text-[#141413] font-bold block">
              Architectural Separation Principles
            </span>
            <p className="text-[#474540] leading-relaxed">
              1. <strong>Physical Layer Isolation:</strong> Compute hosts run lightweight orchestration daemons; no end-user credentials or reseller business logic ever execute on the hypervisor.
            </p>
            <p className="text-[#474540] leading-relaxed">
              2. <strong>Tenant Partitioning:</strong> All queries, logs, and telemetry are strictly scoped by <code className="bg-white px-1.5 py-0.5 rounded border border-[#E8E6DF]">tenant_id</code> and <code className="bg-white px-1.5 py-0.5 rounded border border-[#E8E6DF]">organization_id</code> at the gateway level.
            </p>
            <p className="text-[#474540] leading-relaxed">
              3. <strong>Decoupled Metering:</strong> Metering events are emitted to an asynchronous queue, ensuring billing calculations never block running compute workloads.
            </p>
          </div>
        </div>
      ),
    },
    prioritization: {
      title: 'Prioritization & Scope Trade-off Matrix',
      category: 'Product Governance · Value vs Complexity',
      description: 'Systematic framework used to protect engineering velocity during early release scoping.',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <span className="font-mono text-[11px] text-[#B85D19] font-bold block mb-1">
              Priority Tier 1: Core Viability (MVP Release)
            </span>
            <p className="text-[#33322E] leading-relaxed">
              Customer Onboarding, Instance Catalog, Automated Provisioning Workflow, Basic Account & Quota Isolation, and Real-Time Node Telemetry.
            </p>
          </div>
          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <span className="font-mono text-[11px] text-[#2B4C7E] font-bold block mb-1">
              Priority Tier 2: Channel Expansion (Phase 2)
            </span>
            <p className="text-[#33322E] leading-relaxed">
              White-label dynamic CNAME routing, wholesale margin management, sub-tenant account hierarchies, and automated monthly consolidated billing.
            </p>
          </div>
          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <span className="font-mono text-[11px] text-[#73716B] font-bold block mb-1">
              Priority Tier 3: Deprioritized / Deferred
            </span>
            <p className="text-[#33322E] leading-relaxed">
              Algorithmic spot auctions, custom hypervisor kernel patches, and multi-region federated scheduling.
            </p>
          </div>
        </div>
      ),
    },
    'decision-log': {
      title: 'Architectural Decision Record (ADR) Log',
      category: 'Product Decision Governance',
      description: 'Formal record capturing context, alternatives, decisions, and trade-offs for core system choices.',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <div className="flex items-center justify-between font-mono text-[11px] mb-1">
              <span className="font-bold text-[#B85D19]">ADR-01: Shared Core vs Separate Fork</span>
              <span className="text-[#8E8C85]">APPROVED</span>
            </div>
            <p className="text-[#474540]">
              Decided against forking code for reseller clients. Single shared codebase with tenant-scoped routing and runtime CSS/metadata injection.
            </p>
          </div>
          <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <div className="flex items-center justify-between font-mono text-[11px] mb-1">
              <span className="font-bold text-[#B85D19]">ADR-02: Curated Presets vs Bare-Metal Knobs</span>
              <span className="text-[#8E8C85]">APPROVED</span>
            </div>
            <p className="text-[#474540]">
              Constrained default UI to certified framework bundles (PyTorch/CUDA) with advanced hardware parameters tucked into an expert drawer.
            </p>
          </div>
        </div>
      ),
    },
    roadmap: {
      title: 'Strategic Horizon Roadmap',
      category: 'Product Evolution · Phased Milestones',
      description: 'Disciplined sequence prioritizing foundational platform stability before horizontal market expansion.',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <div className="flex items-center justify-between font-mono text-[11px] mb-1">
              <span className="font-bold text-[#B85D19]">HORIZON 1 · CORE PLATFORM VIABILITY</span>
              <span className="text-[#8E8C85]">DELIVERED</span>
            </div>
            <p className="text-[#474540]">
              On-demand GPU provisioning, certified CUDA base images, local NVMe scratch mounting, basic API keys, and hourly credit card billing.
            </p>
          </div>
          <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <div className="flex items-center justify-between font-mono text-[11px] mb-1">
              <span className="font-bold text-[#2B4C7E]">HORIZON 2 · MULTI-TENANT PARTNER SUITE</span>
              <span className="text-[#8E8C85]">DELIVERED</span>
            </div>
            <p className="text-[#474540]">
              White-label domain routing, reseller margin management, sub-tenant customer isolation, consolidated wholesale invoicing, and webhook telemetry.
            </p>
          </div>
          <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <div className="flex items-center justify-between font-mono text-[11px] mb-1">
              <span className="font-bold text-[#73716B]">HORIZON 3 · CLUSTER SCALE & FEDERATION</span>
              <span className="text-[#8E8C85]">IN DISCOVERY</span>
            </div>
            <p className="text-[#474540]">
              Distributed high-throughput NFS persistent storage, multi-node InfiniBand cluster topology matching, and automated node maintenance drains.
            </p>
          </div>
        </div>
      ),
    },
    metrics: {
      title: 'Product Metrics & Observability Framework',
      category: 'Telemetry Specification · Health & Success Framework',
      description: 'Core KPIs and service-level indicators defined to evaluate platform reliability and customer experience.',
      content: (
        <div className="space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
              <span className="font-mono text-[11px] text-[#B85D19] font-bold block mb-0.5">
                Time-to-First-Compute (TTFC)
              </span>
              <p className="text-[#474540]">
                Target: &lt; 180s from payment authorization to verified SSH connection.
              </p>
            </div>
            <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
              <span className="font-mono text-[11px] text-[#B85D19] font-bold block mb-0.5">
                Provisioning Success Rate
              </span>
              <p className="text-[#474540]">
                Target: &gt; 99.2% of automated provisioning flows complete without NOC alerts.
              </p>
            </div>
            <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
              <span className="font-mono text-[11px] text-[#B85D19] font-bold block mb-0.5">
                Cluster Utilization Rate
              </span>
              <p className="text-[#474540]">
                Target: &gt; 85% sustained utilization of live GPU accelerators across tenants.
              </p>
            </div>
            <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
              <span className="font-mono text-[11px] text-[#B85D19] font-bold block mb-0.5">
                Partner Onboarding Velocity
              </span>
              <p className="text-[#474540]">
                Target: &lt; 24 hours to configure and deploy a new branded reseller subdomain.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    'white-label': {
      title: 'White-Label Multi-Tenant Domain & Theming Model',
      category: 'Channel Architecture · Commercial Distribution Model',
      description: 'Declarative metadata schema mapping DNS hostnames to partner brand identity and billing policies.',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E8E6DF]">
            <span className="font-mono text-[11px] text-[#2B4C7E] font-bold block mb-1">
              Metadata Injection Contract
            </span>
            <pre className="bg-white p-3 rounded border border-[#E8E6DF] text-[11px] font-mono text-[#33322E] overflow-x-auto">
{`{
  "tenant_id": "partner_alpha_09",
  "domain": "compute.reseller-cloud.io",
  "brand": {
    "name": "Reseller Cloud AI",
    "theme": { "primary": "#2B4C7E", "logo": "/assets/alpha-logo.svg" }
  },
  "billing": {
    "model": "wholesale_drawdown",
    "margin_markup": 1.24,
    "invoice_cycle": "monthly_consolidated"
  },
  "routing": { "cluster_pool": "us-east-h100-pool", "isolated_vpc": true }
}`}
            </pre>
          </div>
        </div>
      ),
    },
  };

  const current = artifactsData[artifactKey] || artifactsData.prd;

  return (
    <div className="fixed inset-0 z-50 bg-[#141413]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl border border-[#E8E6DF] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#8E8C85] hover:text-[#141413] rounded-md hover:bg-[#FAF9F5] focus:outline-none"
          aria-label="Close artifact preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#B85D19] uppercase tracking-wider mb-1">
          <FileText className="w-3.5 h-3.5" />
          <span>{current.category}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-[#141413] tracking-tight">
          {current.title}
        </h3>
        <p className="text-xs text-[#73716B] mt-1 mb-6">
          {current.description}
        </p>

        {current.content}

        <div className="mt-8 pt-4 border-t border-[#E8E6DF] flex items-center justify-between text-xs text-[#8E8C85]">
          <span>Source: Production Platform Specifications</span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#141413] hover:text-[#B85D19] px-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF]"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
