import type { DebtStage, PortfolioAccount, ServiceKey } from '../data/siteData';

export interface EnquiryFormInput {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  orgType: string;
  serviceRequired: ServiceKey | '';
  portfolioSize: string;
  message: string;
}

export interface EnquiryValidationErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  orgType?: string;
  serviceRequired?: string;
  message?: string;
}

export interface PortfolioMetrics {
  accountCount: number;
  totalPrincipalCrores: number;
  totalRecoveredCrores: number;
  recoveryRatePct: number;
  avgDpd: number;
  slaCompliancePct: number;
}

export function validateEnquiryForm(input: EnquiryFormInput): EnquiryValidationErrors {
  const errors: EnquiryValidationErrors = {};

  if (!input.fullName.trim() || input.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!input.companyName.trim() || input.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your organization or institution name.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(input.email.trim())) {
    errors.email = 'Please enter a valid official email address.';
  }

  const digitsOnly = input.phone.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid 10 to 15 digit contact number.';
  }

  if (!input.orgType) {
    errors.orgType = 'Please select your organization type.';
  }

  if (!input.serviceRequired) {
    errors.serviceRequired = 'Please select a primary service requirement.';
  }

  if (!input.message.trim() || input.message.trim().length < 12) {
    errors.message = 'Please outline your portfolio context (at least 12 characters).';
  }

  return errors;
}

export function formatReferenceId(companyName: string, sequence: number): string {
  const cleaned = companyName
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .slice(0, 4)
    .padEnd(3, 'X');
  const padded = String(Math.max(1, sequence)).padStart(4, '0');
  return `IC-${cleaned}-${padded}`;
}

export function filterPortfolioAccounts(
  accounts: PortfolioAccount[],
  stageFilter: DebtStage | 'All',
  searchQuery: string
): PortfolioAccount[] {
  const query = searchQuery.trim().toLowerCase();

  return accounts.filter((account) => {
    const matchesStage = stageFilter === 'All' || account.stage === stageFilter;
    if (!matchesStage) {
      return false;
    }

    if (!query) {
      return true;
    }

    return (
      account.id.toLowerCase().includes(query) ||
      account.institutionName.toLowerCase().includes(query) ||
      account.region.toLowerCase().includes(query) ||
      account.segment.toLowerCase().includes(query)
    );
  });
}

export function calculatePortfolioMetrics(accounts: PortfolioAccount[]): PortfolioMetrics {
  if (accounts.length === 0) {
    return {
      accountCount: 0,
      totalPrincipalCrores: 0,
      totalRecoveredCrores: 0,
      recoveryRatePct: 0,
      avgDpd: 0,
      slaCompliancePct: 0,
    };
  }

  const totalPrincipalCrores = accounts.reduce((sum, acc) => sum + acc.principalCrores, 0);
  const totalRecoveredCrores = accounts.reduce((sum, acc) => sum + acc.recoveredCrores, 0);
  const recoveryRatePct =
    totalPrincipalCrores > 0
      ? Math.round((totalRecoveredCrores / totalPrincipalCrores) * 1000) / 10
      : 0;
  const avgDpd = Math.round(accounts.reduce((sum, acc) => sum + acc.dpd, 0) / accounts.length);
  const compliantCount = accounts.filter((acc) => acc.slaCompliant).length;
  const slaCompliancePct = Math.round((compliantCount / accounts.length) * 1000) / 10;

  return {
    accountCount: accounts.length,
    totalPrincipalCrores: Math.round(totalPrincipalCrores * 100) / 100,
    totalRecoveredCrores: Math.round(totalRecoveredCrores * 100) / 100,
    recoveryRatePct,
    avgDpd,
    slaCompliancePct,
  };
}
