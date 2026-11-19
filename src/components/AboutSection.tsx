import { useState } from 'react';
import { IMAGES } from '../data/siteData';
import { Reveal } from './Reveal';

export function AboutSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="about" className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <Reveal className="lg:col-span-6 space-y-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              About Our Enterprise
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold tracking-tight [text-wrap:balance]">
              Focused on Professional Collection &amp; Recovery Operations.
            </h2>
            <div className="p-space-md bg-surface-container rounded-lg">
              <p className="font-title-md text-title-md text-secondary font-bold tracking-wide">
                Professional Engagement. Structured Operations. Responsible Recovery.
              </p>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              iCollect Solutions is dedicated to delivering transparent, dignified, and operationally
              rigorous debt recovery services for Indian scheduled banks, NBFCs, and financial
              platforms. In an evolving regulatory landscape, recovery must embody precision, ethics,
              and clear audit mechanics.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We operate as an extended institutional arm of our partner lenders. Our systematic
              processes bridge borrower communication with clear resolution pathways, ensuring
              compliance with banking guidelines while maximizing recovery yields across assigned
              portfolios.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div className="flex items-start gap-space-xs p-space-sm bg-surface-container-lowest rounded-lg lift-card">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                  lock
                </span>
                <div>
                  <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                    Data Confidentiality
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Strict operational security protocols protecting sensitive borrower ledgers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-xs p-space-sm bg-surface-container-lowest rounded-lg lift-card">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                  handshake
                </span>
                <div>
                  <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                    Ethical Conciliation
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Empathetic yet disciplined communication leading to sustainable settlement.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 relative" delay={0.12} y={36}>
            <div className="relative bg-surface-container-lowest p-space-sm rounded-xl shadow-xl">
              <div className="relative rounded-lg overflow-hidden h-[420px]">
                {!imgFailed ? (
                  <img
                    src={IMAGES.opsCenter}
                    alt="Modern Indian financial operations center and recovery floor displaying analytics ledgers"
                    onError={() => setImgFailed(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-container to-secondary/50 flex flex-col items-center justify-center text-on-primary p-8">
                    <span className="material-symbols-outlined text-6xl text-tertiary-fixed mb-3">
                      support_agent
                    </span>
                    <p className="font-headline-sm text-center">
                      Centralized Recovery &amp; Audit Command Floor
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                      Operational Integrity Standard
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Standardized Protocols
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Every borrower interaction is logged, timestamped, and handled in strict
                    alignment with client policies and regulatory guidelines.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
