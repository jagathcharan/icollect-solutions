import { SECONDARY_SERVICES, type ServiceKey } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

interface ServicesSectionProps {
  onEnquireService: (serviceKey: ServiceKey) => void;
}

export function ServicesSection({ onEnquireService }: ServicesSectionProps) {
  return (
    <section id="services" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="text-center max-w-3xl mx-auto mb-space-2xl space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            End-to-End Capabilities
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold tracking-tight">
            Collection &amp; Recovery Services
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Collection support designed to address different stages of overdue account management
            and recovery operations.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <RevealItem className="lg:col-span-2">
            <div className="bg-primary-container text-on-primary rounded-xl p-space-xl flex flex-col justify-between shadow-xl relative overflow-hidden h-full lift-card">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[180px] absolute -right-8 -bottom-10 opacity-5 pointer-events-none text-on-primary"
              >
                account_balance
              </span>
              <div className="space-y-space-md relative z-10">
                <div className="inline-flex items-center gap-space-xs bg-surface/10 px-3 py-1 rounded text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                  <span className="material-symbols-outlined text-[16px]">stars</span>
                  <span>Featured Institutional Capability</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-primary">
                  Bank Loan Recovery Support
                </h3>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl leading-relaxed">
                  Professional collection support tailored for commercial and retail banks managing
                  overdue loan accounts, SMA-1, SMA-2, and assigned recovery portfolios. We structure
                  escalation paths, negotiate mutually viable repayment schedules, and execute rigorous
                  audit-compliant reconciliation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-sm">
                  <div className="p-space-sm bg-inverse-surface rounded-lg">
                    <span className="font-label-sm text-label-sm text-secondary-fixed block font-semibold">
                      Portfolio Scopes
                    </span>
                    <span className="font-body-sm text-body-sm text-on-primary">
                      Retail &amp; MSME Portfolios
                    </span>
                  </div>
                  <div className="p-space-sm bg-inverse-surface rounded-lg">
                    <span className="font-label-sm text-label-sm text-secondary-fixed block font-semibold">
                      Compliance
                    </span>
                    <span className="font-body-sm text-body-sm text-on-primary">
                      Fair Practices &amp; Code
                    </span>
                  </div>
                  <div className="p-space-sm bg-inverse-surface rounded-lg">
                    <span className="font-label-sm text-label-sm text-secondary-fixed block font-semibold">
                      Reconciliation
                    </span>
                    <span className="font-body-sm text-body-sm text-on-primary">
                      Daily MIS &amp; Ledger Audits
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-primary-fixed-dim/20 flex flex-wrap items-center justify-between gap-space-md relative z-10">
                <span className="font-body-sm text-body-sm text-primary-fixed-dim">
                  Aligned with institutional lending compliance frameworks
                </span>
                <button
                  type="button"
                  onClick={() => onEnquireService('bank-recovery')}
                  className="inline-flex items-center text-tertiary-fixed font-title-md text-title-md font-semibold hover:underline cursor-pointer group"
                >
                  <span>Enquire About Bank Recovery</span>
                  <span className="material-symbols-outlined ml-1 text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </RevealItem>

          {SECONDARY_SERVICES.map((service, index) => (
            <RevealItem
              key={service.key}
              className={index === SECONDARY_SERVICES.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="bg-surface-container-lowest rounded-xl p-space-xl flex flex-col justify-between shadow-sm h-full lift-card">
                <div className="space-y-space-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-space-lg">
                  <button
                    type="button"
                    onClick={() => onEnquireService(service.key)}
                    className="inline-flex items-center font-title-md text-title-md text-secondary hover:text-on-secondary-container transition-colors cursor-pointer group"
                  >
                    <span>Enquire About Service</span>
                    <span className="material-symbols-outlined ml-1 text-[18px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      north_east
                    </span>
                  </button>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
