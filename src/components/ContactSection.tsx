import { useEffect, useState, type FormEvent } from 'react';
import {
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  OFFICE_MAP_EMBED_URL,
  OFFICE_MAP_LINK,
  type ServiceKey,
} from '../data/siteData';
import {
  formatReferenceId,
  validateEnquiryForm,
  type EnquiryFormInput,
  type EnquiryValidationErrors,
} from '../utils/portfolio';
import { Reveal } from './Reveal';

interface SubmittedEnquiry {
  referenceId: string;
  companyName: string;
  serviceRequired: string;
  submittedAt: string;
}

interface ContactSectionProps {
  preselectedService: ServiceKey | '';
}

const INITIAL_FORM: EnquiryFormInput = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  orgType: '',
  serviceRequired: '',
  portfolioSize: '',
  message: '',
};

export function ContactSection({ preselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState<EnquiryFormInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<SubmittedEnquiry | null>(null);
  const [submissionCount, setSubmissionCount] = useState(0);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
      setErrors((prev) => ({ ...prev, serviceRequired: undefined }));
    }
  }, [preselectedService]);

  const handleFieldChange = (field: keyof EnquiryFormInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateEnquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const nextCount = submissionCount + 1;
      const refId = formatReferenceId(formData.companyName, nextCount);
      setSubmissionCount(nextCount);
      setSubmittedRecord({
        referenceId: refId,
        companyName: formData.companyName.trim(),
        serviceRequired: formData.serviceRequired,
        submittedAt: new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
      setIsSubmitting(false);
      setFormData(INITIAL_FORM);
    }, 350);
  };

  return (
    <section id="contact" className="w-full py-space-2xl bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Institutional Enquiries
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold mt-space-xs tracking-tight [text-wrap:balance]">
            Let&apos;s Discuss Your Collection Requirements.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Connect with iCollect Solutions to discuss your organization&apos;s debt collection,
            recovery, and collection management requirements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <Reveal className="lg:col-span-5 space-y-space-lg">
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm space-y-space-lg">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Institutional Desk
              </h3>
              <div className="space-y-space-md">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Company Name
                    </p>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      I Collect Solutions
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Collection &amp; Recovery Services
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Official Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-body-md text-body-md font-semibold text-on-surface hover:text-secondary transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Inquiries typically answered within 4 business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Official Phone
                    </p>
                    <p className="font-body-md text-body-md font-semibold text-on-surface tabular-nums">
                      +91 22 4900 8800
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mon – Sat, 9:30 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Registered Office
                    </p>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      {OFFICE_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Operational Coverage
                    </p>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      Pan-India Support
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Tier-1, Tier-2, and Tier-3 Institutional Coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
              <a
                href={OFFICE_MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-52 rounded-lg overflow-hidden bg-surface-container group"
                aria-label="Open office location in Google Maps"
              >
                <iframe
                  title="I Collect Solutions office map"
                  src={OFFICE_MAP_EMBED_URL}
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-3 left-3 right-3 z-10 bg-surface/95 backdrop-blur-sm px-3 py-2 rounded text-on-surface font-label-sm text-label-sm font-semibold flex items-start gap-2 shadow-sm group-hover:bg-surface transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                    pin_drop
                  </span>
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-sm">
                Initiate Partnership Discussion
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                Submit your institution&apos;s preliminary portfolio requirements. All submissions
                are governed by strict confidentiality.
              </p>

              <form noValidate onSubmit={handleSubmit} className="space-y-space-md" id="enquiry-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-label-md text-label-md text-on-surface mb-1"
                    >
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleFieldChange('fullName', e.target.value)}
                      placeholder="e.g. Vikram Malhotra"
                      aria-invalid={Boolean(errors.fullName)}
                      className={`w-full h-11 px-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                        errors.fullName
                          ? 'border-error focus:ring-2 focus:ring-error/20'
                          : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 font-body-sm text-error" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block font-label-md text-label-md text-on-surface mb-1"
                    >
                      Company / Organization Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleFieldChange('companyName', e.target.value)}
                      placeholder="e.g. Apex Mercantile Bank"
                      aria-invalid={Boolean(errors.companyName)}
                      className={`w-full h-11 px-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                        errors.companyName
                          ? 'border-error focus:ring-2 focus:ring-error/20'
                          : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 font-body-sm text-error" role="alert">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-label-md text-label-md text-on-surface mb-1"
                    >
                      Official Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      placeholder="v.malhotra@bank.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full h-11 px-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                        errors.email
                          ? 'border-error focus:ring-2 focus:ring-error/20'
                          : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-body-sm text-error" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-label-md text-label-md text-on-surface mb-1"
                    >
                      Contact Number <span className="text-error">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full h-11 px-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                        errors.phone
                          ? 'border-error focus:ring-2 focus:ring-error/20'
                          : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 font-body-sm text-error" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label
                      htmlFor="orgType"
                      className="block font-label-md text-label-md text-on-surface mb-1"
                    >
                      Organization Type <span className="text-error">*</span>
                    </label>
                    <select
                      id="orgType"
                      value={formData.orgType}
                      onChange={(e) => handleFieldChange('orgType', e.target.value)}
                      aria-invalid={Boolean(errors.orgType)}
                      className={`w-full h-11 px-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                        errors.orgType
                          ? 'border-error focus:ring-2 focus:ring-error/20'
                          : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                      }`}
                    >
                      <option value="">Select Organization Type</option>
                      <option value="bank">Scheduled Commercial Bank</option>
                      <option value="private-bank">Private Sector Bank</option>
                      <option value="nbfc">Non-Banking Financial Company (NBFC)</option>
                      <option value="fintech">Fintech / Digital Lending</option>
                      <option value="mfi">Microfinance Institution (MFI)</option>
                      <option value="hfc">Housing Finance Company (HFC)</option>
                      <option value="corporate">Corporate / Enterprise</option>
                      <option value="other">Other Regulated Institution</option>
                    </select>
                    {errors.orgType && (
                      <p className="mt-1 font-body-sm text-error" role="alert">
                        {errors.orgType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="serviceRequired"
                      className="block font-label-md text-label-md text-on-surface mb-1"
                    >
                      Primary Service Required <span className="text-error">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) =>
                        handleFieldChange('serviceRequired', e.target.value as ServiceKey | '')
                      }
                      aria-invalid={Boolean(errors.serviceRequired)}
                      className={`w-full h-11 px-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                        errors.serviceRequired
                          ? 'border-error focus:ring-2 focus:ring-error/20'
                          : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                      }`}
                    >
                      <option value="">Select Primary Service</option>
                      <option value="bank-recovery">Bank Loan Recovery Support</option>
                      <option value="nbfc-collection">NBFC Collection Services</option>
                      <option value="telecalling">Telecalling &amp; Customer Follow-up</option>
                      <option value="field-collection">Field Collection Support</option>
                      <option value="delinquency">Delinquency Management</option>
                      <option value="reporting">Collection Monitoring &amp; Reporting</option>
                      <option value="comprehensive">Comprehensive End-to-End Recovery</option>
                    </select>
                    {errors.serviceRequired && (
                      <p className="mt-1 font-body-sm text-error" role="alert">
                        {errors.serviceRequired}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="portfolioSize"
                    className="block font-label-md text-label-md text-on-surface mb-1"
                  >
                    Estimated Portfolio Size (Optional)
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 font-body-md text-body-md text-on-surface-variant font-semibold">
                      INR ₹
                    </span>
                    <input
                      id="portfolioSize"
                      type="text"
                      value={formData.portfolioSize}
                      onChange={(e) => handleFieldChange('portfolioSize', e.target.value)}
                      placeholder="e.g. 50 Crores - 200 Crores"
                      className="w-full h-11 pl-16 pr-3 bg-surface-container-lowest border border-outline-variant/60 rounded text-on-surface text-body-md outline-none focus:border-secondary focus:bg-surface-container-low/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-label-md text-label-md text-on-surface mb-1"
                  >
                    Business Requirements &amp; Portfolio Context{' '}
                    <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    placeholder="Please outline the target portfolio stage (SMA-0, SMA-1, NPA), geographical scope, and expected operational commencement timeline..."
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full p-3 bg-surface-container-lowest border rounded text-on-surface text-body-md outline-none transition-all ${
                      errors.message
                        ? 'border-error focus:ring-2 focus:ring-error/20'
                        : 'border-outline-variant/60 focus:border-secondary focus:bg-surface-container-low/40'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-body-sm text-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    verified_user
                  </span>
                  <span className="font-body-sm text-body-sm">
                    All information submitted is protected under our mutual institutional
                    non-disclosure protocol.
                  </span>
                </div>

                <button
                  id="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary text-on-primary font-title-md text-title-md font-semibold rounded-lg hover:bg-inverse-surface disabled:opacity-70 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Transmitting Portfolio Details...</span>
                  ) : (
                    <>
                      <span>Submit Business Enquiry</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </>
                  )}
                </button>
              </form>

              {submittedRecord && (
                <div
                  id="form-toast"
                  role="status"
                  className="mt-space-md p-space-md bg-emerald-50 border border-emerald-200 rounded-lg flex items-start justify-between gap-space-sm"
                >
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-emerald-700 text-[24px] shrink-0">
                      task_alt
                    </span>
                    <div>
                      <p className="font-title-md text-title-md font-semibold text-emerald-950">
                        Enquiry Successfully Dispatched ({submittedRecord.referenceId})
                      </p>
                      <p className="font-body-sm text-body-sm text-emerald-900 mt-0.5">
                        Thank you, {submittedRecord.companyName}. Our Senior Institutional Desk lead
                        will review your portfolio parameters and connect via official email within
                        4 business hours.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmittedRecord(null)}
                    aria-label="Dismiss enquiry confirmation"
                    className="text-emerald-800 hover:text-emerald-950 p-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
