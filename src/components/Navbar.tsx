import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data/siteData';
import { BrandMark } from './BrandMark';

interface NavbarProps {
  activeSection: string;
  activeView: 'landing' | 'portal';
  onNavigateSection: (sectionId: string) => void;
  onToggleView: (view: 'landing' | 'portal') => void;
}

export function Navbar({
  activeSection,
  activeView,
  onNavigateSection,
  onToggleView,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeView !== 'landing') {
      onToggleView('landing');
      setTimeout(() => onNavigateSection(sectionId), 60);
    } else {
      onNavigateSection(sectionId);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-xl border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'bg-surface/95 shadow-[0_8px_30px_rgba(14,28,47,0.08)] border-outline-variant/30'
          : 'bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-outline-variant/20'
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-[5.5rem] max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-4">
        <div className="flex items-center gap-space-md shrink-0">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center whitespace-nowrap shrink-0 py-1"
            aria-label="I Collect Solutions home"
          >
            <BrandMark className="h-[4.25rem] w-auto max-w-[7.5rem]" />
          </a>
          <div className="hidden 2xl:flex items-center gap-space-xs pl-space-sm border-l border-outline-variant/30 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0 pulse-dot" />
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Serving Banks &amp; NBFCs Across India
            </span>
          </div>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-4 xl:gap-5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeView === 'landing' && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative text-sm whitespace-nowrap shrink-0 transition-colors pb-1 ${
                  isActive
                    ? 'text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface font-medium'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center font-title-md text-sm font-semibold bg-primary text-on-primary px-5 py-2.5 rounded-lg hover:bg-inverse-surface hover:-translate-y-0.5 transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Partner With Us
          </button>

          <button
            type="button"
            onClick={() => onToggleView(activeView === 'portal' ? 'landing' : 'portal')}
            aria-label={
              activeView === 'portal'
                ? 'Return to public website'
                : 'Open Institutional Partner Portal'
            }
            title={
              activeView === 'portal'
                ? 'Return to Public Website'
                : 'Institutional Partner Portal'
            }
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 ${
              activeView === 'portal'
                ? 'bg-secondary text-on-secondary ring-2 ring-secondary/30'
                : 'bg-primary text-on-primary hover:bg-inverse-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {activeView === 'portal' ? 'public' : 'person'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 rounded-lg border border-outline-variant/50 flex items-center justify-center text-on-surface hover:bg-surface-container-low cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-surface-container-lowest border-t border-outline-variant/30 shadow-lg"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col space-y-1 px-margin-mobile py-space-md"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="px-3 py-2.5 rounded-lg text-body-md font-medium text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2 border-t border-outline-variant/20 mt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-lg bg-primary text-on-primary font-title-md text-sm font-semibold"
                >
                  Partner With Us
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleView(activeView === 'portal' ? 'landing' : 'portal');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container-low text-on-surface font-title-md text-sm font-semibold"
                >
                  {activeView === 'portal' ? 'Public Website' : 'Institutional Partner Portal'}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
