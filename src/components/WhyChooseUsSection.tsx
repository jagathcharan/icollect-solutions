import { WHY_CHOOSE_ITEMS } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="text-center max-w-3xl mx-auto mb-space-2xl space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Value Proposition
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold tracking-tight">
            Why Choose iCollect Solutions?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Reliable collection operations require more than follow-up. They require professional
            conduct, organized execution, and consistent communication.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <RevealItem key={item.title}>
              <div className="p-space-xl bg-surface-container-lowest rounded-xl shadow-sm space-y-space-sm h-full lift-card">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
