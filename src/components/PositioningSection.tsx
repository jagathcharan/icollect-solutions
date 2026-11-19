import { POSITIONING_BLOCKS } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

export function PositioningSection() {
  return (
    <section id="positioning" className="w-full py-space-2xl bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Institutional Capabilities
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold mt-space-xs tracking-tight [text-wrap:balance]">
            Your Collection Operations. Supported by a Professional Recovery Partner.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Managing overdue accounts requires consistent follow-up, organized operations and
            professional customer engagement. iCollect Solutions aims to support lenders with
            structured collection and recovery services aligned with their operational requirements.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {POSITIONING_BLOCKS.map((block) =>
            block.dark ? (
              <RevealItem key={block.number}>
                <div className="relative bg-primary-container text-on-primary rounded-xl p-space-xl flex flex-col justify-between shadow-xl h-full lift-card">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-metric-numeral text-metric-numeral font-bold text-tertiary-fixed tabular-nums">
                        {block.number}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-inverse-surface flex items-center justify-center text-tertiary-fixed">
                        <span className="material-symbols-outlined text-[24px]">{block.icon}</span>
                      </div>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-primary">
                      {block.title}
                    </h3>
                    <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-primary-fixed-dim/20 flex items-center justify-between text-primary-fixed-dim font-label-md text-label-md">
                    <span>{block.footerLabel}</span>
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                      {block.footerIcon}
                    </span>
                  </div>
                </div>
              </RevealItem>
            ) : (
              <RevealItem key={block.number}>
                <div className="relative bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between hover:bg-surface-container group h-full lift-card">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-metric-numeral text-metric-numeral font-bold text-secondary tabular-nums">
                        {block.number}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[24px]">{block.icon}</span>
                      </div>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      {block.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                    <span>{block.footerLabel}</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      {block.footerIcon}
                    </span>
                  </div>
                </div>
              </RevealItem>
            )
          )}
        </RevealStagger>
      </div>
    </section>
  );
}
