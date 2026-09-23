export interface CaseStudySummary {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  categoryTag: string;
  role: string;
  domain: string;
  isFlagship?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  fullQuote?: string;
  name: string;
  role: string;
  company: string;
  location: string;
  relatedWorkTitle?: string;
  relatedWorkPath?: string;
  isFeatured?: boolean;
}

export interface StakeholderDetail {
  id: string;
  title: string;
  category: 'primary' | 'secondary' | 'internal';
  goals: string;
  painPoints: string;
  productNeeds: string;
  successCriteria: string;
}

export interface ProblemDecompositionItem {
  problem: string;
  user: string;
  impact: 'High' | 'Medium/High' | 'Medium';
  productResponse: string;
}

export interface DecisionItem {
  number: string;
  title: string;
  context: string;
  whyItMattered: string;
  optionsConsidered: string[];
  decision: string;
  tradeOff: string;
}

export interface TradeOffItem {
  title: string;
  pair: string;
  description: string;
  tension: string;
  resolution: string;
}

export interface TechnicalLayer {
  name: string;
  category: string;
  pmFocus: string;
  technicalReality: string;
  operationalRisk: string;
}

export interface OperatingModelStep {
  step: string;
  title: string;
  subhead: string;
  description: string;
  pmAction: string;
  artifactsProduced: string[];
}
