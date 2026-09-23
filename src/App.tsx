import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudyGpuPlatformPage } from './pages/CaseStudyGpuPlatformPage';
import { CaseStudyInternalPlatformPage } from './pages/CaseStudyInternalPlatformPage';
import { CaseStudyCustomerRequirementsPage } from './pages/CaseStudyCustomerRequirementsPage';
import { ContactPage } from './pages/ContactPage';
import { SecondaryCaseStudyModal } from './components/SecondaryCaseStudyModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [secondaryCaseModalId, setSecondaryCaseModalId] = useState<string | null>(null);

  // Sync with browser URL navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title per route
  useEffect(() => {
    if (
      currentPath === '/portfolio/gpu-infrastructure-white-label-platform' ||
      currentPath === '/portfolio/gpu-infrastructure-platform'
    ) {
      document.title = 'GPU Infrastructure & White-Label Platform | Rushabh Patadia';
    } else if (currentPath === '/portfolio/internal-developer-platform') {
      document.title = 'Internal Developer Platform | Rushabh Patadia';
    } else if (
      currentPath === '/portfolio/customer-requirements-product-feature' ||
      currentPath === '/portfolio/customer-requirement-product-feature'
    ) {
      document.title = 'Customer Requirements → Product Feature | Rushabh Patadia';
    } else if (currentPath === '/about') {
      document.title = 'About Rushabh Patadia — Technical Product Manager & Technology Leader';
    } else if (currentPath === '/contact') {
      document.title = 'Contact & Discussion | Rushabh Patadia';
    } else {
      document.title = 'Rushabh Patadia — Technical Product Manager & Technology Leader';
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSecondaryCase = (id: string) => {
    setSecondaryCaseModalId(id);
  };

  const renderContent = () => {
    if (
      currentPath === '/portfolio/gpu-infrastructure-white-label-platform' ||
      currentPath === '/portfolio/gpu-infrastructure-platform'
    ) {
      return (
        <CaseStudyGpuPlatformPage
          onNavigate={handleNavigate}
          onOpenSecondaryCase={handleOpenSecondaryCase}
        />
      );
    }
    if (currentPath === '/portfolio/internal-developer-platform') {
      return (
        <CaseStudyInternalPlatformPage
          onNavigate={handleNavigate}
          onOpenSecondaryCase={handleOpenSecondaryCase}
        />
      );
    }
    if (
      currentPath === '/portfolio/customer-requirements-product-feature' ||
      currentPath === '/portfolio/customer-requirement-product-feature'
    ) {
      return (
        <CaseStudyCustomerRequirementsPage
          onNavigate={handleNavigate}
          onOpenSecondaryCase={handleOpenSecondaryCase}
        />
      );
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    // Default to HomePage
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenSecondaryCase={handleOpenSecondaryCase}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#141413] selection:bg-[#F2EFE9] selection:text-[#141413]">
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSecondaryCase={handleOpenSecondaryCase}
      />

      <main className="flex-1">{renderContent()}</main>

      <Footer onNavigate={handleNavigate} />

      {/* Secondary Case Study Modal */}
      <SecondaryCaseStudyModal
        caseStudyId={secondaryCaseModalId}
        onClose={() => setSecondaryCaseModalId(null)}
        onNavigateToFlagship={() => handleNavigate('/portfolio/gpu-infrastructure-platform')}
        onNavigateToInternalPlatform={() => handleNavigate('/portfolio/internal-developer-platform')}
        onNavigateToCustomerRequirements={() => handleNavigate('/portfolio/customer-requirements-product-feature')}
      />
    </div>
  );
}
