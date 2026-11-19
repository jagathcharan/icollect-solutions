import { motion } from 'motion/react';
import { Reveal } from './Reveal';

interface PartnershipCtaSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export function PartnershipCtaSection({ onNavigateSection }: PartnershipCtaSectionProps) {
  return (
    <section className="w-full py-space-2xl bg-primary-container text-on-primary relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-[800px] h-[800px] rounded-full border-[40px] border-on-primary" />
      </motion.div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center space-y-space-md" y={36}>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed font-bold">
            Institutional Engagement
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold tracking-tight text-on-primary [text-wrap:balance]">
            Looking for a Dependable Collection &amp; Recovery Partner?
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed max-w-2xl mx-auto">
            Let’s discuss your collection requirements and explore how iCollect Solutions can
            support your financial institution’s recovery operations with precision, compliance, and
            scale.
          </p>
          <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md">
            <button
              type="button"
              onClick={() => onNavigateSection('contact')}
              className="inline-flex items-center justify-center font-title-md text-title-md bg-secondary text-on-secondary px-8 py-4 rounded-lg hover:bg-on-secondary-container hover:-translate-y-0.5 transition-all shadow-lg group cursor-pointer whitespace-nowrap"
            >
              <span>Discuss a Partnership</span>
              <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-x-1">
                handshake
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('contact')}
              className="inline-flex items-center justify-center font-title-md text-title-md bg-surface/10 text-on-primary px-8 py-4 rounded-lg hover:bg-surface/20 hover:-translate-y-0.5 transition-all backdrop-blur-sm cursor-pointer whitespace-nowrap"
            >
              <span>Contact Our Team</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
