import {
  CaseStudySummary,
  StakeholderDetail,
  ProblemDecompositionItem,
  DecisionItem,
  TradeOffItem,
  TechnicalLayer,
} from '../types';

export const CASE_STUDIES: CaseStudySummary[] = [
  {
    id: 'gpu-infrastructure-platform',
    number: '01',
    slug: 'gpu-infrastructure-platform',
    title: 'GPU Infrastructure & White-Label Platform',
    subtitle: 'From infrastructure capability to a customer-facing product.',
    shortDescription: 'Building a scalable GPU infrastructure product and reseller ecosystem.',
    categoryTag: 'Cloud Infrastructure · B2B · Platform Product',
    role: 'Product Management / Technical Product Leadership',
    domain: 'Cloud Infrastructure · GPU · B2B SaaS · Platform Product',
    isFlagship: true,
  },
  {
    id: 'internal-developer-platform',
    number: '02',
    slug: 'internal-developer-platform',
    title: 'Internal Developer Platform',
    subtitle: 'Self-service infrastructure and workflow abstractions for engineering velocity.',
    shortDescription: 'Standardizing developer environments and release pipelines across distributed engineering teams.',
    categoryTag: 'Developer Tooling · Internal Platform · Infrastructure',
    role: 'Technical Product Manager',
    domain: 'Internal Tooling · DevOps · Cloud Architecture',
    isFlagship: false,
  },
  {
    id: 'customer-requirement-product-feature',
    number: '03',
    slug: 'customer-requirement-product-feature',
    title: 'Customer Requirements → Product Feature',
    subtitle: 'Translating enterprise client feedback into structured roadmap commitments.',
    shortDescription: 'Deconstructing custom client asks into reusable, scalable platform capabilities.',
    categoryTag: 'Product Discovery · Enterprise SaaS · Systems Thinking',
    role: 'Product Manager & Client Solutions Lead',
    domain: 'B2B Enterprise · Requirements Engineering · Discovery',
    isFlagship: false,
  },
  {
    id: 'rag-knowledgebase-vault',
    number: '04',
    slug: 'rag-knowledgebase-vault',
    title: 'RAG Knowledgebase Vault',
    subtitle: 'High-retrieval enterprise knowledge infrastructure with strict boundary enforcement.',
    shortDescription: 'Architecting grounding pipelines, semantic chunking, and verifiable data isolation.',
    categoryTag: 'AI Systems · Enterprise Knowledge · Retrieval Architecture',
    role: 'Technical Product Manager',
    domain: 'AI / LLM Systems · Vector Architecture · Enterprise Security',
    isFlagship: false,
  },
  {
    id: 'migration-control-plane',
    number: '05',
    slug: 'migration-control-plane',
    title: 'Migration Control Plane',
    subtitle: 'Automated zero-downtime database and compute migration orchestration.',
    shortDescription: 'Operational tooling to safely migrate mission-critical client workloads with clear state verification.',
    categoryTag: 'Infrastructure Operations · Cloud Migration · Reliability',
    role: 'Technical Lead & Product Orchestrator',
    domain: 'Cloud Infrastructure · Database Systems · Systems Reliability',
    isFlagship: false,
  },
  {
    id: 'product-operations-platform',
    number: '06',
    slug: 'product-operations-platform',
    title: 'Product Operations Platform',
    subtitle: 'Operational tooling unifying telemetry, cost governance, and cluster health.',
    shortDescription: 'Eliminating visibility blind spots across resource consumption, billing, and incident response.',
    categoryTag: 'Product Ops · Cloud FinOps · Systems Engineering',
    role: 'Product Lead / Technical Operations',
    domain: 'Telemetry · Observability · Cloud Operations',
    isFlagship: false,
  },
];

export const GPU_PLATFORM_STAKEHOLDERS: StakeholderDetail[] = [
  {
    id: 'gpu-customers',
    title: 'GPU Customers & AI Teams',
    category: 'primary',
    goals: 'Secure on-demand, high-performance GPU instances with predictable hourly billing and zero idle friction.',
    painPoints: 'Opaque provisioning delays, confusing cloud provider networking rules, and volatile pricing.',
    productNeeds: 'Instant instance readiness, straightforward SSH/Jupyter access, clear hardware specs, and transparent billing.',
    successCriteria: 'Time from instance selection to first model training run under 3 minutes.',
  },
  {
    id: 'technical-startups',
    title: 'Technical Startups & Developers',
    category: 'primary',
    goals: 'Deploy fine-tuning and inference pipelines without managing bare-metal Kubernetes clusters or driver updates.',
    painPoints: 'High minimum commitments from hyperscalers and brittle proprietary deployment CLIs.',
    productNeeds: 'Standardized container runtime hooks, predictable quota allocation, and clean API endpoints.',
    successCriteria: 'API-driven instance lifecycle that plugs directly into existing CI/CD jobs.',
  },
  {
    id: 'resellers-partners',
    title: 'Resellers & Channel Partners',
    category: 'secondary',
    goals: 'Package underlying GPU compute under their own commercial identity, markups, and client billing terms.',
    painPoints: 'Fear of supplier disintermediation, manual sub-account invoicing, and lack of customer-facing customization.',
    productNeeds: 'Multi-tenant white-label dashboard, custom domain routing, partner margin controls, and customer separation.',
    successCriteria: 'Zero vendor branding visible to partner end-clients and automated wholesale billing reconciliation.',
  },
  {
    id: 'sales-account-execs',
    title: 'Sales & Commercial Teams',
    category: 'secondary',
    goals: 'Offer structured packages to volume buyers and partner networks without custom engineering scoping per deal.',
    painPoints: 'Deals stalled due to bespoke contract negotiations or one-off infrastructure requirements.',
    productNeeds: 'Standardized tier catalog, committed-use discounting levers, and clear margin guardrails.',
    successCriteria: 'Self-serve quote generation for 90% of prospective partner agreements.',
  },
  {
    id: 'engineering-devops',
    title: 'Infrastructure & DevOps Engineering',
    category: 'internal',
    goals: 'Maintain cluster health, automated node failovers, driver validation, and reliable hardware utilization.',
    painPoints: 'Manual customer provisioning tickets, noisy-neighbor storage issues, and untracked idle allocations.',
    productNeeds: 'Strict hardware abstraction layer, automated health probes, and programmatic node drain procedures.',
    successCriteria: 'Zero manual terminal interventions required to fulfill incoming customer instance orders.',
  },
  {
    id: 'business-leadership',
    title: 'Executive Leadership & Finance',
    category: 'internal',
    goals: 'Maximize hardware return on investment, diversify revenue streams across retail and wholesale, and ensure predictable margins.',
    painPoints: 'Unallocated hardware amortizing without revenue; single-tenant dependence risks.',
    productNeeds: 'Consolidated hardware utilization telemetry, margin analytics by partner, and capacity forecasting models.',
    successCriteria: 'Multi-channel revenue diversification with clear visibility into compute depreciation vs returns.',
  },
];

export const GPU_PLATFORM_DECOMPOSITION: ProblemDecompositionItem[] = [
  {
    problem: 'Raw bare-metal infrastructure is hostile to product consumption and self-serve onboarding.',
    user: 'Direct Customers & AI Teams',
    impact: 'High',
    productResponse: 'Built a streamlined provisioning experience that abstracts kernel driver setup and networking setup into a 3-step configuration workflow.',
  },
  {
    problem: 'GPU inventory availability is fragmented across geographic data centers with variable connectivity.',
    user: 'AI Engineers & Researchers',
    impact: 'High',
    productResponse: 'Designed unified inventory visibility with transparent region latency indicators and guaranteed reservations.',
  },
  {
    problem: 'Channel partners want to resell infrastructure but refuse to expose the underlying cloud vendor identity.',
    user: 'Resellers & Managed Service Providers',
    impact: 'High',
    productResponse: 'Architected a multi-tenant white-label control plane allowing custom domains, custom themes, and isolated customer tenancies.',
  },
  {
    problem: 'Operations engineers were manually responding to provisioning tickets, leading to human error and backlog.',
    user: 'Internal Infrastructure Teams',
    impact: 'High',
    productResponse: 'Standardized orchestration workflows with programmatic verification checks before handoff to the client.',
  },
  {
    problem: 'Customers struggle to configure complex VPC networking, SSH keys, and firewall ingress rules.',
    user: 'Technical Developers',
    impact: 'Medium/High',
    productResponse: 'Delivered pre-configured security profiles, one-click browser terminal access, and validated default ingress policies.',
  },
];

export const GPU_PLATFORM_STRATEGY_PILLARS = [
  {
    number: '01',
    title: 'Productize the infrastructure',
    principle: 'Hide unnecessary infrastructure complexity behind clear product workflows.',
    detail:
      'Bare metal and virtualization are implementation details. The customer wants a reproducible, high-throughput compute environment delivered in seconds, not a raw terminal session requiring manual driver compilation.',
  },
  {
    number: '02',
    title: 'Serve multiple customer models',
    principle: 'Design for direct customers and reseller/partner relationships from the foundation.',
    detail:
      'A platform that only serves direct buyers leaves commercial value on the table. By treating partner white-labeling as a core architectural requirement, the same hardware pool powers both self-serve direct users and enterprise reseller networks.',
  },
  {
    number: '03',
    title: 'Standardize repeatable operations',
    principle: 'Reduce manual operational dependency wherever possible.',
    detail:
      'Scale cannot depend on an infrastructure engineer manually provisioning nodes at 2:00 AM. Every operational task—from health checks to node reclamation—was codified into deterministic platform events.',
  },
  {
    number: '04',
    title: 'Keep the platform extensible',
    principle: 'The initial product should not lock the business into a single GPU, customer or commercial model.',
    detail:
      'Hardware generations cycle rapidly. The orchestration plane was decoupled from specific hardware SKUs, enabling rapid ingestion of new GPU architectures without rebuilding user-facing flows.',
  },
];

export const GPU_PLATFORM_DECISION_LOG: DecisionItem[] = [
  {
    number: '01',
    title: 'Productize before expanding platform complexity',
    context:
      'Early stakeholder requests pushed for complex multi-cloud federation, spot auction bidding, and custom container schedulers before the fundamental provisioning experience was rock-solid.',
    whyItMattered:
      'Attempting advanced algorithmic scheduling on an unproven provisioning foundation would have introduced severe debugging complexity and delayed customer onboarding by several quarters.',
    optionsConsidered: [
      'Option A: Build full spot-market auction engine and multi-cluster federation immediately.',
      'Option B: Focus exclusively on reliable on-demand provisioning and crystal-clear self-service workflows first.',
    ],
    decision:
      'Selected Option B. Constrained initial scope to deterministic, rapid on-demand instance provisioning with verified hardware readiness before considering secondary pricing mechanisms.',
    tradeOff:
      'Temporarily deferred non-core monetization levers (like spot bidding) in exchange for zero-failure onboarding and trust with early enterprise pilots.',
  },
  {
    number: '02',
    title: 'Support direct customers and reseller workflows on a shared core',
    context:
      'Debate between building a dedicated, completely separate application for resellers vs integrating white-label capability into the core platform architecture.',
    whyItMattered:
      'Building two separate codebases would have doubled ongoing engineering maintenance, created feature parity lag, and fractured telemetry.',
    optionsConsidered: [
      'Option A: Fork codebase into separate Direct and Reseller Portals.',
      'Option B: Single platform core with tenant-scoped routing, metadata-driven UI theming, and permission boundaries.',
    ],
    decision:
      'Adopted Option B. Architected a multi-tenant platform core where every customer interaction is scoped to a workspace/tenant context.',
    tradeOff:
      'Increased initial architectural complexity in the database schema and routing layer to save hundreds of hours of ongoing synchronization down the line.',
  },
  {
    number: '03',
    title: 'Separate infrastructure capability from customer experience',
    context:
      'Engineering teams initially proposed exposing raw hypervisor controls, NUMA node layouts, and custom kernel parameters directly to the user dashboard.',
    whyItMattered:
      'Exposing hypervisor-level knobs would have satisfied 2% of power users while creating catastrophic configuration errors and support tickets for the remaining 98%.',
    optionsConsidered: [
      'Option A: Full raw terminal and hypervisor passthrough on the main control panel.',
      'Option B: Sensible pre-tuned workload profiles with advanced parameters tucked into expandable expert configuration drawers.',
    ],
    decision:
      'Adopted Option B. The default path provides optimized, benchmarked configurations for standard AI frameworks; expert flags remain accessible via explicit opt-in.',
    tradeOff:
      'Required upfront benchmarking effort to determine optimal baseline configurations for mainstream PyTorch/CUDA workloads.',
  },
];

export const GPU_PLATFORM_TRADEOFFS: TradeOffItem[] = [
  {
    title: 'Speed vs Flexibility',
    pair: 'Deterministic Pre-configurations vs Infinite Customization',
    description:
      'Offering bespoke OS kernels and custom RAID configurations would satisfy boutique requirements but dramatically degrade instance startup speed.',
    tension:
      'Every additional hardware toggle introduces validation delays and potential failure modes during automated provisioning.',
    resolution:
      'Standardized on three certified containerized base environments that provision in under 90 seconds, with post-boot initialization scripts for specialized customization.',
  },
  {
    title: 'Customization vs Operational Simplicity',
    pair: 'Bespoke Reseller Features vs Universal Multi-Tenant Schema',
    description:
      'Resellers frequently requested custom checkout flows, unique API payload structures, and non-standard authentication methods.',
    tension:
      'Bespoke per-partner code branches paralyze release cadence and make platform-wide upgrades virtually impossible.',
    resolution:
      'Established a strict configuration schema allowing partners to inject branding, domains, and pricing rules through declarative parameters while keeping underlying core APIs strictly uniform.',
  },
  {
    title: 'Feature Breadth vs Time-to-Market',
    pair: 'Comprehensive Storage Ecosystem vs High-Speed Object Storage First',
    description:
      'Enterprise users demanded NFS, block storage snapshots, distributed Ceph filesystems, and hot-tier migration at launch.',
    tension:
      'Building a full enterprise storage suite would have delayed product availability by 8+ months while compute hardware sat idle.',
    resolution:
      'Launched with local NVMe scratch storage paired with standardized high-throughput S3-compatible object storage connectivity, adding distributed persistent volumes in phase two.',
  },
  {
    title: 'Infrastructure Control vs Customer Abstraction',
    pair: 'Raw Hardware Visibility vs Frictionless Product Consumption',
    description:
      'Deciding whether to expose raw IPMI interfaces and physical switch topology vs an abstracted compute instance model.',
    tension:
      'Raw interfaces expose the physical environment to customer errors and introduce major security attack surfaces.',
    resolution:
      'Abstracted hardware boundaries behind a clean REST and WebSocket management API, exposing health status and thermal metrics without compromising host-level isolation.',
  },
];

export const GPU_PLATFORM_TECHNICAL_LAYERS: TechnicalLayer[] = [
  {
    name: 'Cloud Infrastructure & Host Nodes',
    category: 'Compute Foundation',
    pmFocus: 'Hardware lifecycle, utilization ceilings, node depreciation models, and replacement MTTR.',
    technicalReality: 'PCIe lane allocation, NUMA node topology, physical thermal management, and PSU redundancy.',
    operationalRisk: 'Unplanned host reboot due to overheating or power imbalance affecting running training jobs.',
  },
  {
    name: 'GPU Compute & Accelerator Slicing',
    category: 'Hardware Acceleration',
    pmFocus: 'MIG (Multi-Instance GPU) vs whole-card allocation, pricing granularity, and workload segmentation.',
    technicalReality: 'NVIDIA driver versions, CUDA toolkit compatibility, SXM5 vs PCIe interconnects, and NVLink bandwidth.',
    operationalRisk: 'Driver mismatches between host OS and customer container resulting in failed tensor allocations.',
  },
  {
    name: 'Networking & Fabric Interconnect',
    category: 'Data Transfer',
    pmFocus: 'Bandwidth throttling policies, egress cost pass-through, and cross-node latency guarantees.',
    technicalReality: 'RoCE v2, InfiniBand fabric, SR-IOV virtual functions, MTU 9000 jumbo frames, and VXLAN overlays.',
    operationalRisk: 'Network congestion causing distributed model parallelism synchronization to bottleneck.',
  },
  {
    name: 'Storage & Scratch Volumes',
    category: 'Data Persistence',
    pmFocus: 'Storage tiers (local NVMe scratch vs persistent shared network storage), quota defaults, and retention.',
    technicalReality: 'IOPS limits, read/write bandwidth saturation, file lock contention in multi-worker environments.',
    operationalRisk: 'Dataset loading saturating disk I/O, causing GPU compute cores to idle waiting for data.',
  },
  {
    name: 'Provisioning Engine & Orchestration',
    category: 'Lifecycle Management',
    pmFocus: 'Time-to-ready metric, automated health checks before handoff, and queue management during peak demand.',
    technicalReality: 'IPXE boot routines, container runtime daemon startup, cloud-init scripts, and node state machines.',
    operationalRisk: 'Failed bootstrap scripts leaving an instance marked as ready when services have crashed.',
  },
  {
    name: 'APIs & Integration Boundary',
    category: 'Platform Access',
    pmFocus: 'Developer ergonomics, documentation completeness, rate limiting, and backward compatibility guarantees.',
    technicalReality: 'REST endpoints, gRPC streaming for telemetry, idempotency keys for billing and instance creation.',
    operationalRisk: 'Sudden spike in API polling from partner CI scripts causing control plane slowdown.',
  },
  {
    name: 'Authentication & Multi-Tenancy',
    category: 'Security & Access',
    pmFocus: 'Role-based access control, SSO integration for enterprise buyers, and strict tenant data isolation.',
    technicalReality: 'JWT signing, OAuth2 OIDC flows, tenant schema isolation, and API token scoped permissions.',
    operationalRisk: 'Cross-tenant information leakage through shared telemetry streams or misconfigured route guards.',
  },
  {
    name: 'Telemetry & Observability',
    category: 'System Visibility',
    pmFocus: 'Customer-facing utilization graphs, internal alerting thresholds, and billing audit logs.',
    technicalReality: 'Prometheus metrics scraping, GPU exporter metrics (power, temperature, memory), and log aggregators.',
    operationalRisk: 'Telemetry pipeline backpressure resulting in missing billing records or delayed usage alerts.',
  },
  {
    name: 'White-Label Configuration Engine',
    category: 'Partner Ecosystem',
    pmFocus: 'Branding isolation, partner margin customization, custom CNAME certificates, and reseller self-serve.',
    technicalReality: 'Dynamic TLS termination via reverse proxy, tenant-keyed asset delivery, and scoped webhook dispatches.',
    operationalRisk: 'Domain verification failures leading to partner portal SSL downtime.',
  },
  {
    name: 'Billing & Metering Pipeline',
    category: 'Commercial Engine',
    pmFocus: 'Per-second/per-hour accuracy, prepaid credit models, invoice generation, and revenue reconciliation.',
    technicalReality: 'Event-driven metering stream, credit deduction atomicity, Stripe/bank transfer integrations.',
    operationalRisk: 'Failed balance reconciliation allowing customer to run expensive GPU workloads with unpaid credits.',
  },
  {
    name: 'Support & Operational Tooling',
    category: 'Human-in-the-Loop Ops',
    pmFocus: 'Customer incident triage tools, one-click node relocation, and diagnostic export bundles.',
    technicalReality: 'Internal admin dashboard, secure diagnostic agent, and audit log generation.',
    operationalRisk: 'Support engineers needing direct SSH access to customer nodes without verifiable client consent.',
  },
];

export const SECONDARY_CASE_STUDIES_DETAILS: Record<string, {
  summary: string;
  problem: string;
  architectureHighlight: string;
  pmRole: string;
  keyDecisions: string[];
  artifacts: string[];
}> = {
  'internal-developer-platform': {
    summary: 'Built an internal developer platform that transformed fragmented infrastructure scripts into a self-service deployment portal for multiple engineering squads.',
    problem: 'Engineers spent an average of 4.5 hours per deployment navigating ad-hoc cloud consoles, manual DNS configs, and undocumented environment variables.',
    architectureHighlight: 'Self-service CLI and web control plane with standardized template manifests, automated ephemeral preview environments, and centralized secret injection.',
    pmRole: 'Conducted internal developer user interviews, created golden-path deployment specifications, negotiated adoption timelines with squad leads, and tracked developer velocity metrics.',
    keyDecisions: [
      'Prioritized golden-path templates over open-ended custom Dockerfiles.',
      'Mandated automated ephemeral staging teardown to prevent cloud sprawl.',
      'Integrated deployment observability directly into Slack and terminal notifications.',
    ],
    artifacts: ['Developer Journey Map', 'Platform PRD & Service Level Objectives', 'Self-Service CLI Spec', 'Adoption Tracker'],
  },
  'customer-requirement-product-feature': {
    summary: 'Established a rigorous framework to deconstruct high-pressure enterprise client requests into reusable platform components rather than one-off custom forks.',
    problem: 'Sales teams and major clients frequently requested custom features with tight deadlines, threatening to turn the product into a fragmented software consulting codebase.',
    architectureHighlight: 'Modular plugin architecture and extensible metadata system allowing enterprise clients to inject bespoke business logic via webhooks and custom fields.',
    pmRole: 'Led enterprise discovery workshops, separated underlying business requirements from initial solution proposals, and created executive consensus on generalized feature delivery.',
    keyDecisions: [
      'Created a formal "Custom Ask vs Platform Value" evaluation scoring model.',
      'Refused custom database forks; delivered requirement via generalized metadata attributes.',
      'Turned a bespoke financial reporting request into an enterprise export engine used by all clients.',
    ],
    artifacts: ['Discovery Interview Transcripts', 'Requirement Deconstruction Matrix', 'Feature Generalization RFC', 'Client Communication Playbook'],
  },
  'rag-knowledgebase-vault': {
    summary: 'Spearheaded the product design and delivery of an enterprise RAG knowledge engine featuring deterministic citation tracking, strict document-level ACLs, and zero-hallucination verification.',
    problem: 'Enterprise clients wanted AI search across confidential documentation but could not compromise on role-based access permissions or accept unverified LLM assertions.',
    architectureHighlight: 'Hybrid retrieval architecture combining dense semantic vector search with sparse BM25 keyword matching, evaluated against a strict document-level security filter.',
    pmRole: 'Defined enterprise evaluation metrics (faithfulness, retrieval recall, latency ceilings), selected embedding strategies with engineering, and designed client audit logs.',
    keyDecisions: [
      'Enforced source citation requirement before any synthetic response is rendered.',
      'Separated indexing pipelines by enterprise security clearance tiers.',
      'Implemented semantic cache to reduce repetitive API costs and accelerate response time.',
    ],
    artifacts: ['RAG Pipeline Architecture PRD', 'Evaluation Benchmark Framework', 'Document Security ACL Matrix', 'Latency vs Precision Trade-off Doc'],
  },
  'migration-control-plane': {
    summary: 'Directed the product specification and operational execution of an automated zero-downtime migration platform for stateful enterprise databases and compute clusters.',
    problem: 'Manual data migrations between legacy hosting infrastructure and modern cloud clusters carried catastrophic downtime risks and required multi-day weekend maintenance windows.',
    architectureHighlight: 'State machine orchestration engine supporting live change-data-capture (CDC), continuous delta synchronization, and automated cutover verification.',
    pmRole: 'Mapped end-to-end failure modes, established rollback protocols with systems engineering, and built executive migration status dashboards for client stakeholders.',
    keyDecisions: [
      'Designed dual-write verification phase before triggering physical DNS cutover.',
      'Automated rollback triggers if latency or replication lag exceeded 150ms.',
      'Created customer-facing migration timeline with real-time replication progress indicators.',
    ],
    artifacts: ['Migration Orchestration Sequence Diagram', 'Zero-Downtime Cutover Checklist', 'Risk Mitigation & Rollback Protocol', 'Executive Migration Status Report'],
  },
  'product-operations-platform': {
    summary: 'Engineered an internal product operations console that unified cloud cost allocation, customer usage telemetry, and infrastructure incident dispatch into a single control surface.',
    problem: 'Product managers, finance teams, and support engineers operated in silos across four separate consoles with disconnected data, making unit economics analysis nearly impossible.',
    architectureHighlight: 'Unified telemetry lake ingesting real-time usage events, mapping compute hours directly to customer contract IDs and margins.',
    pmRole: 'Audited cross-department workflows, identified data discrepancies between billing and cloud providers, and delivered a unified operational portal.',
    keyDecisions: [
      'Reconciled cloud provider billing directly against customer contract margins.',
      'Automated alerting for margin anomalies when customer usage exceeded contract projections.',
      'Empowered tier-1 support engineers with self-service diagnostic routines.',
    ],
    artifacts: ['Product Ops Functional PRD', 'FinOps Data Schema', 'Incident Escalation Workflow', 'Unit Economics Dashboard Wireframes'],
  },
};
