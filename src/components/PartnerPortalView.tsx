import { useMemo, useState } from 'react';
import {
  PORTFOLIO_LEDGER_SEED,
  type DebtStage,
  type PortfolioAccount,
} from '../data/siteData';
import { calculatePortfolioMetrics, filterPortfolioAccounts } from '../utils/portfolio';

interface PartnerPortalViewProps {
  onReturnToWebsite: () => void;
  onRequestMandateExpansion: () => void;
}

const STAGE_OPTIONS: Array<DebtStage | 'All'> = [
  'All',
  'SMA-0',
  'SMA-1',
  'SMA-2',
  'NPA',
  'Recovered',
];

function getStageBadgeClass(stage: DebtStage): string {
  switch (stage) {
    case 'Recovered':
      return 'bg-emerald-50 text-emerald-800 border border-emerald-200';
    case 'NPA':
      return 'bg-red-50 text-red-800 border border-red-200';
    case 'SMA-2':
      return 'bg-amber-50 text-amber-900 border border-amber-200';
    case 'SMA-1':
      return 'bg-surface-container-high text-on-secondary-fixed-variant border border-secondary/20';
    case 'SMA-0':
    default:
      return 'bg-surface-container-low text-on-surface-variant border border-outline-variant/50';
  }
}

export function PartnerPortalView({
  onReturnToWebsite,
  onRequestMandateExpansion,
}: PartnerPortalViewProps) {
  const [stageFilter, setStageFilter] = useState<DebtStage | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<PortfolioAccount | null>(
    PORTFOLIO_LEDGER_SEED[0]
  );

  const filteredAccounts = useMemo(
    () => filterPortfolioAccounts(PORTFOLIO_LEDGER_SEED, stageFilter, searchQuery),
    [stageFilter, searchQuery]
  );

  const displayedSelectedAccount = useMemo(() => {
    if (filteredAccounts.length === 0) {
      return null;
    }
    return (
      filteredAccounts.find((account) => account.id === selectedAccount?.id) ??
      filteredAccounts[0]
    );
  }, [filteredAccounts, selectedAccount]);

  const metrics = useMemo(
    () => calculatePortfolioMetrics(filteredAccounts),
    [filteredAccounts]
  );

  return (
    <section className="w-full py-space-xl bg-surface min-h-[calc(100vh-14rem)]">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin space-y-space-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg border-b border-outline-variant/40">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Institutional Partner Portal
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mt-1">
              Assigned Portfolio Recovery &amp; MIS Ledger
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Real-time portfolio reconciliation view across active SMA-0 through NPA mandates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onReturnToWebsite}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-on-surface font-title-md text-sm font-semibold hover:bg-surface-container-low transition-colors cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Return to Website</span>
            </button>
            <button
              type="button"
              onClick={onRequestMandateExpansion}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-sm font-semibold hover:bg-inverse-surface transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Allocate New Portfolio</span>
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-primary-container text-on-primary rounded-xl p-space-lg border border-white/10 shadow-md">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
              Active Mandates
            </p>
            <p className="font-metric-numeral text-metric-numeral font-bold mt-2 tabular-nums">
              {metrics.accountCount}
            </p>
            <p className="font-body-sm text-body-sm text-tertiary-fixed mt-1">
              Filtered institutional tranches
            </p>
          </div>

          <div className="bg-primary-container text-on-primary rounded-xl p-space-lg border border-white/10 shadow-md">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
              Principal Exposure
            </p>
            <p className="font-metric-numeral text-metric-numeral font-bold mt-2 tabular-nums">
              ₹{metrics.totalPrincipalCrores.toFixed(2)} Cr
            </p>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">
              Assigned institutional ledger
            </p>
          </div>

          <div className="bg-primary-container text-on-primary rounded-xl p-space-lg border border-white/10 shadow-md">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
              Total Recovered
            </p>
            <p className="font-metric-numeral text-metric-numeral font-bold mt-2 text-tertiary-fixed tabular-nums">
              ₹{metrics.totalRecoveredCrores.toFixed(2)} Cr
            </p>
            <p className="font-body-sm text-body-sm text-secondary-container mt-1 tabular-nums">
              {metrics.recoveryRatePct.toFixed(1)}% resolution yield
            </p>
          </div>

          <div className="bg-primary-container text-on-primary rounded-xl p-space-lg border border-white/10 shadow-md">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
              RBI &amp; SLA Adherence
            </p>
            <p className="font-metric-numeral text-metric-numeral font-bold mt-2 tabular-nums">
              {metrics.slaCompliancePct.toFixed(0)}%
            </p>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1 tabular-nums">
              Avg DPD: {metrics.avgDpd} days
            </p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
          <div className="p-space-lg border-b border-outline-variant/30 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by delinquency stage">
              {STAGE_OPTIONS.map((stage) => {
                const active = stageFilter === stage;
                return (
                  <button
                    key={stage}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setStageFilter(stage)}
                    className={`px-3.5 py-2 rounded-lg font-label-md text-label-md cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-primary-container text-on-primary'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    {stage}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80">
              <label htmlFor="portal-search" className="sr-only">
                Search portfolio accounts
              </label>
              <span className="material-symbols-outlined text-on-surface-variant text-[20px] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                search
              </span>
              <input
                id="portal-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ID, bank, segment, or hub..."
                className="w-full h-11 pl-10 pr-3 rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-body-md text-on-surface outline-none focus:border-secondary"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/40 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  <th className="py-3.5 px-4">Mandate ID</th>
                  <th className="py-3.5 px-4">Institution</th>
                  <th className="py-3.5 px-4">Segment</th>
                  <th className="py-3.5 px-4">Region</th>
                  <th className="py-3.5 px-4">Stage</th>
                  <th className="py-3.5 px-4 text-right">DPD</th>
                  <th className="py-3.5 px-4 text-right">Exposure (₹ Cr)</th>
                  <th className="py-3.5 px-4 text-right">Recovered (₹ Cr)</th>
                  <th className="py-3.5 px-4">Channel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/25 font-body-md text-body-md">
                {filteredAccounts.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-on-surface-variant">
                      No portfolio mandates match the selected stage or search query.
                    </td>
                  </tr>
                ) : (
                  filteredAccounts.map((account) => {
                    const isSelected = displayedSelectedAccount?.id === account.id;
                    return (
                      <tr
                        key={account.id}
                        onClick={() => setSelectedAccount(account)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-surface-container-low'
                            : 'hover:bg-surface-container-low/60'
                        }`}
                      >
                        <td className="py-3.5 px-4 font-semibold text-secondary tabular-nums whitespace-nowrap">
                          {account.id}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                          {account.institutionName}
                        </td>
                        <td className="py-3.5 px-4 text-on-surface-variant whitespace-nowrap">
                          {account.segment}
                        </td>
                        <td className="py-3.5 px-4 text-on-surface-variant whitespace-nowrap">
                          {account.region}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold uppercase tracking-wider ${getStageBadgeClass(
                              account.stage
                            )}`}
                          >
                            {account.stage}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right tabular-nums text-on-surface">
                          {account.dpd}
                        </td>
                        <td className="py-3.5 px-4 text-right tabular-nums text-on-surface">
                          {account.principalCrores.toFixed(2)}
                        </td>
                        <td className="py-3.5 px-4 text-right tabular-nums font-semibold text-on-surface">
                          {account.recoveredCrores.toFixed(2)}
                        </td>
                        <td className="py-3.5 px-4 text-on-surface-variant whitespace-nowrap">
                          {account.assignedChannel}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {displayedSelectedAccount && (
            <div className="p-space-lg bg-surface-container-low border-t border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Selected Mandate Audit Summary · {displayedSelectedAccount.id}
                </p>
                <p className="font-title-md text-title-md font-semibold text-on-surface">
                  {displayedSelectedAccount.institutionName} — {displayedSelectedAccount.assignedChannel} (
                  {displayedSelectedAccount.region})
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Last reconciled {displayedSelectedAccount.lastUpdated} · RBI Fair Practices &amp; ISO 27001
                  audit trail verified.
                </p>
              </div>
              <button
                type="button"
                onClick={onRequestMandateExpansion}
                className="px-5 py-2.5 rounded-lg bg-secondary text-on-secondary font-title-md text-sm font-semibold hover:bg-on-secondary-container transition-colors shrink-0 cursor-pointer whitespace-nowrap"
              >
                Request MIS Export / Review
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
