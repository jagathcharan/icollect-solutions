import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePortfolioMetrics,
  filterPortfolioAccounts,
  formatReferenceId,
  validateEnquiryForm,
} from './portfolio';
import { PORTFOLIO_LEDGER_SEED } from '../data/siteData';

test('validateEnquiryForm flags invalid email, short phone, and missing fields', () => {
  const errors = validateEnquiryForm({
    fullName: 'A',
    companyName: '',
    email: 'invalid-email',
    phone: '12345',
    orgType: '',
    serviceRequired: '',
    portfolioSize: '',
    message: 'Too short',
  });

  assert.ok(errors.fullName);
  assert.ok(errors.companyName);
  assert.ok(errors.email);
  assert.ok(errors.phone);
  assert.ok(errors.orgType);
  assert.ok(errors.serviceRequired);
  assert.ok(errors.message);
});

test('validateEnquiryForm accepts a complete valid institutional enquiry', () => {
  const errors = validateEnquiryForm({
    fullName: 'Vikram Malhotra',
    companyName: 'Apex Mercantile Bank',
    email: 'v.malhotra@apexbank.in',
    phone: '+91 98765 43210',
    orgType: 'bank',
    serviceRequired: 'bank-recovery',
    portfolioSize: '120 Crores',
    message: 'Looking for SMA-1 and SMA-2 recovery support across Western India.',
  });

  assert.deepEqual(errors, {});
});

test('formatReferenceId formats deterministic institutional tracking codes', () => {
  assert.equal(formatReferenceId('Apex Mercantile Bank', 7), 'IC-APEX-0007');
  assert.equal(formatReferenceId('AB', 12), 'IC-ABX-0012');
});

test('filterPortfolioAccounts filters by stage and text query accurately', () => {
  const sma2 = filterPortfolioAccounts(PORTFOLIO_LEDGER_SEED, 'SMA-2', '');
  assert.equal(sma2.length, 2);
  assert.ok(sma2.every((acc) => acc.stage === 'SMA-2'));

  const mumbai = filterPortfolioAccounts(PORTFOLIO_LEDGER_SEED, 'All', 'Mumbai');
  assert.equal(mumbai.length, 1);
  assert.equal(mumbai[0].id, 'IC-MUM-8841');
});

test('calculatePortfolioMetrics computes totals, recovery rate, and handles empty lists', () => {
  const emptyMetrics = calculatePortfolioMetrics([]);
  assert.equal(emptyMetrics.accountCount, 0);
  assert.equal(emptyMetrics.recoveryRatePct, 0);

  const metrics = calculatePortfolioMetrics(PORTFOLIO_LEDGER_SEED);
  assert.equal(metrics.accountCount, 6);
  assert.equal(metrics.totalPrincipalCrores, 155.5);
  assert.equal(metrics.totalRecoveredCrores, 113.4);
  assert.equal(metrics.recoveryRatePct, 72.9);
  assert.equal(metrics.slaCompliancePct, 100);
});
