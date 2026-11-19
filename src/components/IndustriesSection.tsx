import { INDUSTRIES } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

export function IndustriesSection() {
  return (
    <section id="industries" className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Targeted Coverage
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold mt-space-xs tracking-tight [text-wrap:balance]">
            Supporting the Financial Services Ecosystem
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Collection and recovery support for organizations managing loan portfolios, credit
            accounts, and outstanding receivables.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter" stagger={0.05}>
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.title}>
              <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm space-y-space-sm h-full lift-card">
                <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">{industry.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {industry.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {industry.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
