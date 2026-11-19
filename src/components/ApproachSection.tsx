import { APPROACH_STAGES } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

export function ApproachSection() {
  return (
    <section id="approach" className="w-full py-space-2xl bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Operational Blueprint
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold mt-space-xs tracking-tight [text-wrap:balance]">
            A Structured Approach to Collection Management
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Every collection assignment requires a clear understanding of the portfolio, agreed
            processes, and consistent operational follow-through.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-5 gap-gutter relative" stagger={0.08}>
          {APPROACH_STAGES.map((stage) => (
            <RevealItem key={stage.number}>
              <div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col justify-between space-y-space-md relative h-full lift-card">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-metric-numeral text-metric-numeral font-bold text-secondary tabular-nums">
                      {stage.number}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      {stage.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                    {stage.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {stage.description}
                  </p>
                </div>
                <div className="pt-space-sm font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  {stage.tag}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
