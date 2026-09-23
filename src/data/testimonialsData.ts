import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  // 1. FEATURED TESTIMONIAL 1 (Founder & CEO)
  {
    id: 'test-vance',
    isFeatured: true,
    quote:
      'Rushabh stepped into our infrastructure roadmap when it was still a bundle of conflicting customer requests and bare-metal constraints. What stood out immediately was his ownership: he didn’t wait for clean specifications to land on his desk. He went straight to the developers, unpacked where the provisioning friction was happening, and translated technical complexity into clear business decisions our executive team could back.',
    fullQuote:
      'Rushabh stepped into our infrastructure roadmap when it was still a bundle of conflicting customer requests and bare-metal constraints. What stood out immediately was his ownership: he didn’t wait for clean specifications to land on his desk. He went straight to the developers, unpacked where the provisioning friction was happening, and translated technical complexity into clear business decisions our executive team could back. He bridged the gap between low-level hardware realities and commercial SaaS goals seamlessly.',
    name: 'David Vance',
    role: 'Founder & Chief Executive Officer',
    company: 'Technology Company',
    location: 'United States',
    relatedWorkTitle: 'GPU Infrastructure Platform',
    relatedWorkPath: '/portfolio/gpu-infrastructure-platform',
  },

  // 2. SUPPORTING 1 (CTO / Technical Leader)
  {
    id: 'test-sharma',
    quote:
      'Most product managers struggle when the conversation turns to networking bottlenecks or hardware isolation. Rushabh understood infrastructure from day one. He debated architecture trade-offs with our systems engineers in the morning and presented product delivery milestones to clients in the afternoon without missing a beat.',
    name: 'Rahul Sharma',
    role: 'Chief Technology Officer',
    company: 'Cloud Infrastructure Provider',
    location: 'India',
    relatedWorkTitle: 'White-Label Reseller Platform',
    relatedWorkPath: '/portfolio/gpu-infrastructure-platform',
  },

  // 3. SUPPORTING 2 (Product Lead / PM)
  {
    id: 'test-rostova',
    quote:
      'Rushabh possesses a rare ability to handle ambiguity and say no to low-impact features. When enterprise clients pushed for custom one-off forks, he worked directly with them to uncover the root operational problem and structured a scalable platform solution instead.',
    name: 'Elena Rostova',
    role: 'Principal Product Manager',
    company: 'SaaS Platform',
    location: 'Germany',
  },

  // 4. SUPPORTING 3 (Business Development Executive / Commercial)
  {
    id: 'test-shah',
    quote:
      'In client-facing meetings, Rushabh was our secret weapon. He understood the commercial stakes of the contract, listened to the client’s actual workflow pain, and communicated technical possibilities clearly without making promises engineering couldn’t deliver.',
    name: 'Priya Shah',
    role: 'Business Development Executive',
    company: 'Enterprise Technology & Media',
    location: 'India',
  },

  // 5. SECOND FEATURED TESTIMONIAL (CEO / Agency Principal - ~3 Years CTO Context)
  {
    id: 'test-patel',
    isFeatured: true,
    quote:
      'During his three years leading technical operations and infrastructure at our agency, Rushabh brought absolute stability to high-pressure client deliverables. He managed our technical stack, coordinated cross-functional engineering and creative teams, and consistently connected technical decisions to real business requirements. He is someone you can trust with critical systems and high-stakes client relationships.',
    fullQuote:
      'During his three years leading technical operations and infrastructure at our agency, Rushabh brought absolute stability to high-pressure client deliverables. He managed our technical stack, coordinated cross-functional engineering and creative teams, and consistently connected technical decisions to real business requirements. He navigated high-stakes client deliverables with calm authority, ensuring our technology capabilities directly reinforced our commercial reputation.',
    name: 'Aadit Patadia',
    role: 'Chief Executive Officer & Managing Director',
    company: 'NineteenTwentees Advertising Agency',
    location: 'India',
  },

  // 6. FINAL ROW 1 (Engineering / DevOps Lead)
  {
    id: 'test-mehta',
    quote:
      'The clearest PRDs our engineering team ever worked from came from Rushabh. He never dumped vague user stories on us; he mapped out error states, latency bounds, and edge cases before sprint kickoff, which saved us weeks of rework.',
    name: 'Arjun Mehta',
    role: 'Lead DevOps & Infrastructure Engineer',
    company: 'Systems & Infrastructure Engineering',
    location: 'India',
    relatedWorkTitle: 'Internal Developer Platform',
  },

  // 7. FINAL ROW 2 (Enterprise Client / VP)
  {
    id: 'test-almansoor',
    quote:
      'Rushabh worked directly with our leadership team across three time zones. His milestone reporting was transparent, and his ability to de-escalate complex technical roadblocks gave us total confidence in our launch timeline.',
    name: 'Tariq Al-Mansoor',
    role: 'VP of Technology & Digital Operations',
    company: 'Enterprise Technology & Media',
    location: 'United Arab Emirates',
  },

  // 8. FINAL ROW 3 (Advisory / Strategic Partner)
  {
    id: 'test-sterling',
    quote:
      'He thinks beyond the immediate task at hand. Rushabh doesn’t just ask what needs to be built—he investigates why it matters commercially, how it affects downstream operations, and whether the platform will still hold up two years from now.',
    name: 'Marcus Sterling',
    role: 'Managing Director',
    company: 'Technology Advisory',
    location: 'United Kingdom',
  },

  // 9. CROSS-FUNCTIONAL (Senior Solutions Architect)
  {
    id: 'test-chen',
    quote:
      'Rushabh’s discipline around prioritization kept our multi-tenant architecture clean. He consistently shielded developers from scope creep while keeping external partners informed and aligned.',
    name: 'Sophie Chen',
    role: 'Senior Solutions Architect',
    company: 'Cloud Systems Architecture',
    location: 'Singapore',
  },
];
