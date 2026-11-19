export type ServiceKey =
  | 'bank-recovery'
  | 'nbfc-collection'
  | 'telecalling'
  | 'field-collection'
  | 'delinquency'
  | 'reporting'
  | 'comprehensive';

export type DebtStage = 'SMA-0' | 'SMA-1' | 'SMA-2' | 'NPA' | 'Recovered';

export interface PortfolioAccount {
  id: string;
  institutionName: string;
  segment: 'Retail' | 'MSME' | 'Consumer Finance' | 'Housing' | 'Fintech';
  region: string;
  dpd: number;
  stage: DebtStage;
  principalCrores: number;
  recoveredCrores: number;
  assignedChannel: 'Tele-Follow-up' | 'Field & Tele' | 'Conciliation Desk';
  lastUpdated: string;
  slaCompliant: boolean;
}

export const IMAGES = {
  logo: '/assets/logo.png',
  heroBoardroom: '/assets/hero-boardroom.png',
  opsCenter: '/assets/ops-center.png',
};

export const CONTACT_EMAIL = 'icollectsolutions@gmail.com';

export const OFFICE_ADDRESS =
  'No. 1157, 4th Floor, 20th Cross, 5th Main, Sector-7, HSR Layout, Bangalore 560102';

export const OFFICE_MAP_EMBED_URL =
  'https://www.google.com/maps?q=No.+1157,+4th+Floor,+20th+Cross,+5th+Main,+Sector-7,+HSR+Layout,+Bangalore+560102&output=embed';

export const OFFICE_MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=No.+1157,+4th+Floor,+20th+Cross,+5th+Main,+Sector-7,+HSR+Layout,+Bangalore+560102';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'responsible-recovery', label: 'Responsible Recovery' },
  { id: 'contact', label: 'Contact' },
];

export const TRUST_INSTITUTIONS = [
  { icon: 'account_balance', label: 'Commercial Banks' },
  { icon: 'corporate_fare', label: 'Private Lenders' },
  { icon: 'assured_workload', label: 'Tier-1 NBFCs' },
  { icon: 'home_work', label: 'Housing Finance' },
  { icon: 'payments', label: 'Microfinance' },
  { icon: 'hub', label: 'Fintech Platforms' },
];

export const POSITIONING_BLOCKS = [
  {
    number: '01',
    icon: 'manage_accounts',
    title: 'Collection Management',
    description:
      'Structured account follow-up and collection coordination designed to systematically lower delinquency ratios through audited workflows and disciplined milestone checkpoints.',
    footerLabel: 'Portfolio Allocation & Tracking',
    footerIcon: 'arrow_forward',
    dark: false,
  },
  {
    number: '02',
    icon: 'support_agent',
    title: 'Customer Engagement',
    description:
      'Professional communication and responsible follow-up that protects the brand prestige and customer relationship of lending partners while preserving borrower dignity.',
    footerLabel: 'Dignified & Compliant Contact',
    footerIcon: 'verified',
    dark: true,
  },
  {
    number: '03',
    icon: 'cached',
    title: 'Recovery Operations',
    description:
      'Organized recovery support based on assigned portfolios and client instructions, adhering to contractual mandate SLAs, institutional guidelines, and complete audit documentation.',
    footerLabel: 'Client-Governed Resolution',
    footerIcon: 'arrow_forward',
    dark: false,
  },
];

export interface ServiceItem {
  key: ServiceKey;
  icon: string;
  title: string;
  description: string;
}

export const SECONDARY_SERVICES: ServiceItem[] = [
  {
    key: 'nbfc-collection',
    icon: 'credit_card',
    title: 'NBFC Collection Services',
    description:
      'Collection operations supporting NBFCs across consumer finance, two-wheeler, personal loans, and business lending customer segments with agility and precision.',
  },
  {
    key: 'telecalling',
    icon: 'call',
    title: 'Telecalling & Customer Follow-up',
    description:
      'Structured outbound communication for early payment reminders, overdue follow-up, and collection coordination using audited calling infrastructure.',
  },
  {
    key: 'field-collection',
    icon: 'pin_drop',
    title: 'Field Collection Support',
    description:
      'Authorized on-ground collection support through assigned field operations, geo-verified customer visits, subject to strict client instructions and ethical boundaries.',
  },
  {
    key: 'delinquency',
    icon: 'trending_down',
    title: 'Delinquency Management',
    description:
      'Organized follow-up and account prioritization to support different stages of loan delinquency, preventing accounts from deteriorating into non-performing assets.',
  },
  {
    key: 'reporting',
    icon: 'analytics',
    title: 'Collection Monitoring & Reporting',
    description:
      'Collection progress updates, operational reporting, aging dashboards, and account-level coordination based on agreed institutional requirements.',
  },
];

export const INDUSTRIES = [
  {
    icon: 'account_balance',
    title: 'Commercial Banks',
    description: 'Scheduled commercial banks requiring compliant, multi-branch recovery assistance.',
  },
  {
    icon: 'domain',
    title: 'Private Sector Banks',
    description: 'Agile follow-up protocols for retail credit cards, personal assets, and auto portfolios.',
  },
  {
    icon: 'wallet',
    title: 'NBFCs',
    description: 'Non-Banking Financial Companies requiring structured delinquency management.',
  },
  {
    icon: 'groups',
    title: 'Microfinance (MFIs)',
    description: 'Empathetic grassroots collection support aligned with regional community dynamics.',
  },
  {
    icon: 'real_estate_agent',
    title: 'Housing Finance (HFCs)',
    description: 'Structured mortgage follow-up, borrower liaison, and verified property visit coordination.',
  },
  {
    icon: 'devices',
    title: 'Fintech & Digital Lending',
    description: 'High-volume, digital-first collection workflows for modern app-based credit products.',
  },
  {
    icon: 'shield',
    title: 'Regulated Institutions',
    description: 'Cooperative banks, state financial corporations, and specialized credit vehicles.',
  },
  {
    icon: 'receipt_long',
    title: 'Enterprise Receivables',
    description: 'Corporate and B2B outstanding invoice recovery and commercial payment resolution.',
  },
];

export const APPROACH_STAGES = [
  {
    number: '01',
    icon: 'assignment',
    title: 'Requirement Analysis',
    description:
      'Understand the assigned portfolio, objectives, geographical requirements, and operational expectations.',
    tag: 'Scope Discovery',
  },
  {
    number: '02',
    icon: 'folder_shared',
    title: 'Portfolio Allocation',
    description:
      'Review available account information and organize assigned accounts according to the agreed collection process.',
    tag: 'Segmentation',
  },
  {
    number: '03',
    icon: 'record_voice_over',
    title: 'Customer Engagement',
    description:
      'Conduct authorized and professional communication and follow-up through appropriate telephonic and field channels.',
    tag: 'Authorized Contact',
  },
  {
    number: '04',
    icon: 'payments',
    title: 'Collection Coordination',
    description:
      'Coordinate payment updates, follow-up status, and recovery information through agreed client banking processes.',
    tag: 'Reconciliation',
  },
  {
    number: '05',
    icon: 'summarize',
    title: 'Reporting & Review',
    description:
      'Provide collection progress information, performance MIS, and operational reports as agreed with the client.',
    tag: 'Audit MIS',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: 'record_voice_over',
    title: 'Professional Engagement',
    description:
      'Respectful and professional customer communication prioritizing client reputation, courtesy, and constructive negotiation.',
  },
  {
    icon: 'account_tree',
    title: 'Structured Operations',
    description:
      'Organized collection workflows, clear account prioritization, and disciplined operational cadence across all assigned loan segments.',
  },
  {
    icon: 'tune',
    title: 'Client-Aligned Processes',
    description:
      'Operations custom-configured around agreed client instructions, specific credit policies, escalation matrices, and institutional covenants.',
  },
  {
    icon: 'visibility',
    title: 'Operational Visibility',
    description:
      'Transparent collection updates, milestone tracking, and regular operational reporting based on agreed institutional metrics.',
  },
  {
    icon: 'dynamic_feed',
    title: 'Flexible Support',
    description:
      'Scalable collection support that flexes dynamically based on assigned portfolio volumes, seasonal peaks, and regional geography.',
  },
  {
    icon: 'gavel',
    title: 'Responsible Practices',
    description:
      'Uncompromising commitment to confidentiality, borrower dignity, ethical code of conduct, and applicable regulatory frameworks.',
  },
];

export const RESPONSIBLE_PILLARS = [
  {
    pillar: 'Pillar 01',
    icon: 'diversity_3',
    title: 'Respectful Customer Interaction',
    description:
      'Professional, appropriate, and authorized communication conducted during permissible hours, strictly eliminating unauthorized coercion or harassment.',
  },
  {
    pillar: 'Pillar 02',
    icon: 'security',
    title: 'Confidentiality & Data Protection',
    description:
      'Responsible handling of assigned customer information and confidential business data, backed by strict access restrictions and sovereign data containment.',
  },
  {
    pillar: 'Pillar 03',
    icon: 'policy',
    title: 'Process & Regulatory Alignment',
    description:
      'Operations strictly aligned with applicable Reserve Bank of India directions, client operational policies, and rigorous contractual mandates.',
  },
];

export const PORTFOLIO_LEDGER_SEED: PortfolioAccount[] = [
  {
    id: 'IC-MUM-8841',
    institutionName: 'Apex Mercantile Bank',
    segment: 'MSME',
    region: 'Mumbai MMR',
    dpd: 42,
    stage: 'SMA-1',
    principalCrores: 24.5,
    recoveredCrores: 18.2,
    assignedChannel: 'Conciliation Desk',
    lastUpdated: '18 Nov 2026',
    slaCompliant: true,
  },
  {
    id: 'IC-DEL-4102',
    institutionName: 'Bharat Sovereign NBFC',
    segment: 'Consumer Finance',
    region: 'Delhi NCR',
    dpd: 78,
    stage: 'SMA-2',
    principalCrores: 16.8,
    recoveredCrores: 11.4,
    assignedChannel: 'Field & Tele',
    lastUpdated: '18 Nov 2026',
    slaCompliant: true,
  },
  {
    id: 'IC-BLR-5590',
    institutionName: 'Deccan Housing Finance Ltd.',
    segment: 'Housing',
    region: 'Bengaluru Urban',
    dpd: 18,
    stage: 'SMA-0',
    principalCrores: 32.0,
    recoveredCrores: 29.5,
    assignedChannel: 'Tele-Follow-up',
    lastUpdated: '17 Nov 2026',
    slaCompliant: true,
  },
  {
    id: 'IC-CHE-3319',
    institutionName: 'Coromandel Commercial Bank',
    segment: 'Retail',
    region: 'Chennai Metro',
    dpd: 112,
    stage: 'NPA',
    principalCrores: 41.2,
    recoveredCrores: 22.8,
    assignedChannel: 'Conciliation Desk',
    lastUpdated: '17 Nov 2026',
    slaCompliant: true,
  },
  {
    id: 'IC-PUN-7724',
    institutionName: 'Sahyadri FinTech Credit',
    segment: 'Fintech',
    region: 'Pune',
    dpd: 0,
    stage: 'Recovered',
    principalCrores: 12.4,
    recoveredCrores: 12.4,
    assignedChannel: 'Tele-Follow-up',
    lastUpdated: '16 Nov 2026',
    slaCompliant: true,
  },
  {
    id: 'IC-AHM-6198',
    institutionName: 'Western Industrial NBFC',
    segment: 'MSME',
    region: 'Ahmedabad',
    dpd: 64,
    stage: 'SMA-2',
    principalCrores: 28.6,
    recoveredCrores: 19.1,
    assignedChannel: 'Field & Tele',
    lastUpdated: '16 Nov 2026',
    slaCompliant: true,
  },
];

export const COMPLIANCE_DECK_SECTIONS = [
  {
    code: 'RBI-FPC-2022',
    title: 'Reserve Bank of India Fair Practices Alignment',
    summary:
      'Strict adherence to permissible calling hours (08:00 AM – 07:00 PM), verified agent authorization letters, and transparent borrower communication transcripts.',
  },
  {
    code: 'ISO-27001-IN',
    title: 'Sovereign Data Containment & AES-256 Encryption',
    summary:
      'All partner ledger exports remain hosted exclusively within Indian sovereign cloud availability zones with role-based access controls and masked PII.',
  },
  {
    code: 'AUDIT-SLA-100',
    title: 'Timestamped Telephonic & Geo-Verified Field Logs',
    summary:
      '100% call recording retention, GPS-stamped field visit audit trails, and daily reconciliation MIS formatted for internal bank compliance committees.',
  },
];
