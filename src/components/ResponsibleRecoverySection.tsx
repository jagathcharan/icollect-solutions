import { RESPONSIBLE_PILLARS } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

interface ResponsibleRecoverySectionProps {
  onOpenComplianceDeck: () => void;
}

export function ResponsibleRecoverySection({
  onOpenComplianceDeck,
}: ResponsibleRecoverySectionProps) {
  return (
    <section id="responsible-recovery" className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Integrity First
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold mt-space-xs tracking-tight [text-wrap:balance]">
            Professional Recovery Begins with Responsible Practices.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Responsible collection practices are fundamental to maintaining trust between financial
            institutions, their customers, and collection service providers.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-space-xl">
          {RESPONSIBLE_PILLARS.map((pillar) => (
            <RevealItem key={pillar.pillar}>
              <div className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm space-y-space-md h-full lift-card">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold block">
                  {pillar.pillar}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="p-space-xl bg-surface-container-highest rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="flex items-start gap-space-md max-w-3xl">
              <span className="material-symbols-outlined text-secondary text-[32px] shrink-0">
                verified
              </span>
              <div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface">
                  Our Commitment to Institutional Standards
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                  We recognize the importance of professional conduct, appropriate authorization,
                  transparent communication, and responsible recovery operations. iCollect Solutions
                  maintains absolute zero-tolerance towards unauthorized conduct.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenComplianceDeck}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-inverse-surface hover:-translate-y-0.5 transition-all shrink-0 cursor-pointer whitespace-nowrap"
            >
              Request Compliance Deck
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
