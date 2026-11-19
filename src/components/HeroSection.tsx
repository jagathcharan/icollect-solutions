import { motion } from 'motion/react';
import { useState } from 'react';
import { IMAGES, TRUST_INSTITUTIONS } from '../data/siteData';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

interface HeroSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection({ onNavigateSection }: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-surface pb-space-2xl pt-space-lg lg:pt-space-xl"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[640px] w-[640px] rounded-full bg-secondary/5 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-[480px] w-[480px] rounded-full bg-tertiary-fixed-dim/10 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-md py-1.5 rounded-lg mb-space-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 pulse-dot" />
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
            COLLECTION &amp; RECOVERY SERVICES | FINANCIAL INSTITUTION PARTNERSHIPS
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 space-y-space-lg">
            <motion.div
              className="space-y-space-sm"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
            >
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface font-bold tracking-tight [text-wrap:balance]">
                Professional Debt Recovery.{' '}
                <span className="text-secondary block lg:inline">
                  Built Around Your Business.
                </span>
              </h1>
              <p className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
                Reliable Collection Solutions for Banks, NBFCs and Financial Institutions.
              </p>
            </motion.div>

            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.18 }}
            >
              iCollect Solutions supports financial institutions with professional debt collection and
              recovery operations, combining structured follow-up, responsible customer engagement,
              and client-focused collection management.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-space-md pt-space-xs"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.28 }}
            >
              <button
                type="button"
                onClick={() => onNavigateSection('contact')}
                className="inline-flex items-center justify-center font-title-md text-title-md bg-primary text-on-primary px-7 py-3.5 rounded-lg hover:bg-inverse-surface hover:-translate-y-0.5 transition-all shadow-md group cursor-pointer whitespace-nowrap"
              >
                <span>Partner With Us</span>
                <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigateSection('services')}
                className="inline-flex items-center justify-center font-title-md text-title-md bg-surface-container-low text-on-surface px-6 py-3.5 rounded-lg hover:bg-surface-container hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined ml-2 text-[20px] text-secondary">
                  domain
                </span>
              </button>
            </motion.div>

            <motion.div
              className="pt-space-md flex flex-wrap items-center gap-space-lg text-on-surface-variant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  verified_user
                </span>
                <span className="font-label-md text-label-md">RBI Fair Practices Compliant</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  encrypted
                </span>
                <span className="font-label-md text-label-md">Confidential &amp; Encrypted Data</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">public</span>
                <span className="font-label-md text-label-md">Pan-India Reach</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-6 relative mt-space-lg lg:mt-0"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/15 via-surface-container-highest to-surface-container rounded-xl transform -rotate-1" />

              <div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">
                {!imgFailed ? (
                  <img
                    src={IMAGES.heroBoardroom}
                    alt="Executive corporate banking boardroom meeting discussing debt portfolio recovery analytics"
                    onError={() => setImgFailed(true)}
                    className="w-full h-[440px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[440px] bg-gradient-to-br from-primary-container via-inverse-surface to-secondary/40 flex flex-col items-center justify-center text-on-primary p-8">
                    <span className="material-symbols-outlined text-6xl text-tertiary-fixed mb-3">
                      account_balance
                    </span>
                    <p className="font-headline-sm text-center">
                      Institutional Debt Recovery Boardroom Operations
                    </p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:pl-64 flex items-center justify-between text-on-primary gap-3">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">
                      Executive Operations Desk
                    </p>
                    <p className="font-title-md text-title-md font-semibold">
                      Institutional Recovery Strategy
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-on-primary font-label-md text-label-md whitespace-nowrap shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                    <span>Active Resolution</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-4 sm:-right-6 bg-surface-container-lowest p-space-md rounded-lg shadow-xl max-w-[220px] hidden sm:block border border-outline-variant/20 float-soft">
                <div className="flex items-center gap-space-sm mb-1">
                  <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      assignment_turned_in
                    </span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                      SLA Alignment
                    </p>
                    <p className="font-metric-numeral text-metric-numeral text-on-surface font-bold tabular-nums">
                      100%
                    </p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Client-governed compliance execution.
                </p>
              </div>

              <div className="absolute -bottom-8 -left-4 sm:-left-6 bg-primary-container text-on-primary p-space-md rounded-lg shadow-xl max-w-[260px] float-soft-delayed">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                    Portfolio Reach
                  </span>
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                    travel_explore
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm font-semibold">
                  All Tier 1–3 Hubs
                </p>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">
                  Authorized on-ground field network and pan-India tele-infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <Reveal className="mt-space-2xl pt-space-lg bg-surface-container-low rounded-xl p-space-md sm:p-space-lg" delay={0.1}>
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant text-center mb-space-md font-semibold">
            Trusted Frameworks for Regulated Lending Portfolios
          </p>
          <RevealStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-gutter items-center justify-items-center opacity-85">
            {TRUST_INSTITUTIONS.map((item) => (
              <RevealItem
                key={item.label}
                className="flex items-center gap-space-xs font-title-md text-title-md font-bold text-on-surface whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}
