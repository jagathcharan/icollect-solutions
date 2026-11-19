import { CONTACT_EMAIL, OFFICE_ADDRESS, OFFICE_MAP_LINK } from '../data/siteData';
import { BrandMark } from './BrandMark';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPolicy: (policyTitle: string) => void;
}

export function Footer({ onNavigateSection, onOpenPolicy }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter mb-space-2xl">
          <div className="lg:col-span-2 space-y-space-md pr-space-lg">
            <BrandMark className="h-20 w-auto max-w-[9rem]" />
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-md">
              Next-generation enterprise debt resolution infrastructure and regulatory-compliant
              collections ecosystem for Tier-1 Indian scheduled commercial banks, NBFCs, and
              sovereign-backed financial institutions.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded">
                ISO 27001 Certified
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded">
                RBI Fair Practices Compliant
              </span>
            </div>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-title-md text-title-md text-on-surface font-semibold">
              Core Capabilities
            </h4>
            <ul className="space-y-space-sm">
              <li className="font-body-sm text-body-sm text-on-surface-variant">
                Early Delinquency Mitigation
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant">
                SMA-0 to SMA-2 Resolution
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant">
                SARFAESI Enforcement Support
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant">
                Pre-Litigation Conciliation
              </li>
              <li className="font-body-sm text-body-sm text-on-surface-variant">
                Digital Settlement Portals
              </li>
            </ul>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-title-md text-title-md text-on-surface font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-space-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  About iCollect
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('services')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Enterprise Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('approach')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Resolution Approach
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('responsible-recovery')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Responsible Recovery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('contact')}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Grievance Redressal
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-space-md">
            <h4 className="font-title-md text-title-md text-on-surface font-semibold">
              Verified Institutional Desk
            </h4>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                  location_on
                </span>
                <a
                  href={OFFICE_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors"
                >
                  {OFFICE_ADDRESS}
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                  mail
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-on-surface transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">
                  call
                </span>
                <span className="tabular-nums">+91 22 4900 8800</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-space-lg border-t border-outline-variant/30 space-y-space-md">
          <div className="bg-surface-container-highest/40 p-space-md rounded-lg text-on-surface-variant">
            <p className="font-body-sm text-body-sm leading-relaxed">
              <strong className="font-semibold text-on-surface">
                Regulatory &amp; Compliance Disclaimer:
              </strong>{' '}
              iCollect Solutions operates in rigorous accordance with Reserve Bank of India (RBI)
              guidelines on Fair Practices Code for Lenders, Outsourcing of Financial Services, and
              Recovery Agents. We do not participate in unverified harassment, unauthorized
              skip-tracing, or invasive measures. All data is encrypted via banking-grade AES-256
              protocols and stored on sovereign Indian servers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs text-on-surface-variant">
            <p className="font-body-sm text-body-sm">
              © 2026 iCollect Solutions (icollectsolutions.in). All rights reserved. Sovereign Debt
              Infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-space-lg">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Whistleblower Policy',
                'RBI Mandate Audit',
              ].map((policy) => (
                <button
                  key={policy}
                  type="button"
                  onClick={() => onOpenPolicy(policy)}
                  className="font-body-sm text-body-sm hover:text-on-surface transition-colors cursor-pointer"
                >
                  {policy}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
