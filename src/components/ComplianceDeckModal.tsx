import { AnimatePresence, motion } from 'motion/react';
import { COMPLIANCE_DECK_SECTIONS, CONTACT_EMAIL } from '../data/siteData';

interface ComplianceDeckModalProps {
  isOpen: boolean;
  policyTitle: string | null;
  onClose: () => void;
  onProceedToEnquiry: () => void;
}

const POLICY_COPY: Record<string, { subtitle: string; body: string }> = {
  'Privacy Policy': {
    subtitle: 'Sovereign Data Handling & Borrower Confidentiality Standard',
    body: 'iCollect Solutions processes institutional portfolio records strictly as an authorized service provider under client instruction. All borrower PII, call transcripts, and settlement ledgers are encrypted at rest (AES-256) and in transit (TLS 1.3) within India-resident ISO 27001 certified data centers.',
  },
  'Terms of Service': {
    subtitle: 'Institutional Mandate & Service Level Governance',
    body: 'All recovery mandates are governed by executed Master Service Agreements (MSAs) with partner banks and NBFCs. Operational scripts, escalation matrices, and reconciliation schedules require explicit written sign-off from the lending institution.',
  },
  'Whistleblower Policy': {
    subtitle: 'Zero-Tolerance Ethical Conduct & Grievance Escalation',
    body: `Any deviation from RBI Fair Practices Code, unauthorized borrower contact, or procedural irregularity can be reported directly to our Independent Compliance Committee at ${CONTACT_EMAIL} with guaranteed confidentiality and 24-hour audit review.`,
  },
  'RBI Mandate Audit': {
    subtitle: 'Regulatory Audit Readiness & Outsourcing Compliance',
    body: 'iCollect Solutions maintains full audit logs covering telecalling windows (08:00–19:00 IST), agent DRA certification records, geo-tagged field visit records, and daily MIS reconciliations ready for scheduled RBI or internal bank inspections.',
  },
};

export function ComplianceDeckModal({
  isOpen,
  policyTitle,
  onClose,
  onProceedToEnquiry,
}: ComplianceDeckModalProps) {
  const open = isOpen || Boolean(policyTitle);
  const activePolicy = policyTitle ? POLICY_COPY[policyTitle] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="compliance-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close dialog backdrop"
            className="absolute inset-0 bg-primary-container/65 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative bg-surface-container-lowest rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-outline-variant/30"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-primary-container text-on-primary px-space-lg py-space-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">
                  verified_user
                </span>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed font-semibold">
                    {activePolicy ? 'Institutional Governance' : 'Institutional Compliance Deck'}
                  </p>
                  <h3
                    id="compliance-modal-title"
                    className="font-headline-sm text-headline-sm font-bold"
                  >
                    {activePolicy ? policyTitle : 'RBI Fair Practices & ISO 27001 Framework'}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-lg bg-surface/10 hover:bg-surface/20 flex items-center justify-center text-on-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-space-xl space-y-space-md max-h-[75vh] overflow-y-auto">
              {activePolicy ? (
                <div className="space-y-space-md">
                  <p className="font-title-md text-title-md font-semibold text-secondary">
                    {activePolicy.subtitle}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {activePolicy.body}
                  </p>
                  <div className="p-space-md bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface-variant">
                    For formal audit documentation or Master Service Agreement annexures, please
                    contact our Institutional Compliance Desk at{' '}
                    <strong className="text-on-surface">{CONTACT_EMAIL}</strong>.
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Review our core regulatory controls, sovereign data containment architecture, and
                    audit mechanisms designed for scheduled commercial banks and Tier-1 NBFCs.
                  </p>
                  <div className="space-y-space-sm">
                    {COMPLIANCE_DECK_SECTIONS.map((item) => (
                      <div
                        key={item.code}
                        className="p-space-md bg-surface-container-low rounded-lg border border-outline-variant/30 space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-title-md text-title-md font-bold text-on-surface">
                            {item.title}
                          </h4>
                          <span className="font-label-sm text-label-sm text-secondary font-semibold tabular-nums">
                            {item.code}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="pt-space-md border-t border-outline-variant/30 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-outline-variant/60 text-on-surface font-title-md text-sm font-semibold hover:bg-surface-container-low transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onProceedToEnquiry();
                  }}
                  className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-sm font-semibold hover:bg-inverse-surface transition-colors cursor-pointer"
                >
                  Proceed to Partnership Enquiry
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
