import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ApproachSection } from './components/ApproachSection';
import { ComplianceDeckModal } from './components/ComplianceDeckModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IndustriesSection } from './components/IndustriesSection';
import { Navbar } from './components/Navbar';
import { PartnerPortalView } from './components/PartnerPortalView';
import { PartnershipCtaSection } from './components/PartnershipCtaSection';
import { PositioningSection } from './components/PositioningSection';
import { ResponsibleRecoverySection } from './components/ResponsibleRecoverySection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { NAV_ITEMS, type ServiceKey } from './data/siteData';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'portal'>('landing');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<ServiceKey | ''>('');
  const [complianceModalOpen, setComplianceModalOpen] = useState(false);
  const [activePolicyTitle, setActivePolicyTitle] = useState<string | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 88;
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }, []);

  const handleEnquireService = useCallback(
    (serviceKey: ServiceKey) => {
      setPreselectedService(serviceKey);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  const handleToggleView = useCallback((nextView: 'landing' | 'portal') => {
    setActiveView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (activeView !== 'landing') {
      return;
    }

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.05 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar
        activeSection={activeSection}
        activeView={activeView}
        onNavigateSection={scrollToSection}
        onToggleView={handleToggleView}
      />

      <main className="w-full pt-[5.5rem] bg-surface flex-1">
        {activeView === 'portal' ? (
          <PartnerPortalView
            onReturnToWebsite={() => handleToggleView('landing')}
            onRequestMandateExpansion={() => {
              setActiveView('landing');
              setPreselectedService('reporting');
              setTimeout(() => scrollToSection('contact'), 80);
            }}
          />
        ) : (
          <div className="flex flex-col w-full text-on-surface">
            <HeroSection onNavigateSection={scrollToSection} />
            <PositioningSection />
            <AboutSection />
            <ServicesSection onEnquireService={handleEnquireService} />
            <IndustriesSection />
            <ApproachSection />
            <WhyChooseUsSection />
            <ResponsibleRecoverySection
              onOpenComplianceDeck={() => setComplianceModalOpen(true)}
            />
            <PartnershipCtaSection onNavigateSection={scrollToSection} />
            <ContactSection preselectedService={preselectedService} />
          </div>
        )}
      </main>

      <Footer
        onNavigateSection={(sectionId) => {
          if (activeView !== 'landing') {
            setActiveView('landing');
            setTimeout(() => scrollToSection(sectionId), 80);
          } else {
            scrollToSection(sectionId);
          }
        }}
        onOpenPolicy={(policy) => setActivePolicyTitle(policy)}
      />

      <ComplianceDeckModal
        isOpen={complianceModalOpen}
        policyTitle={activePolicyTitle}
        onClose={() => {
          setComplianceModalOpen(false);
          setActivePolicyTitle(null);
        }}
        onProceedToEnquiry={() => {
          if (activeView !== 'landing') {
            setActiveView('landing');
            setTimeout(() => scrollToSection('contact'), 80);
          } else {
            scrollToSection('contact');
          }
        }}
      />
    </div>
  );
}
