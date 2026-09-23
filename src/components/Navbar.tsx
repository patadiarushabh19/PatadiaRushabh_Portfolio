import React, { useState, useRef, useEffect } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSecondaryCase?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSecondaryCase,
}) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setHoveredCase(null);
    }, 180);
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCaseSelect = (item: (typeof CASE_STUDIES)[0]) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    if (item.isFlagship) {
      onNavigate('/portfolio/gpu-infrastructure-platform');
    } else if (item.id === 'internal-developer-platform') {
      onNavigate('/portfolio/internal-developer-platform');
    } else if (item.id === 'customer-requirement-product-feature') {
      onNavigate('/portfolio/customer-requirements-product-feature');
    } else if (onOpenSecondaryCase) {
      onOpenSecondaryCase(item.id);
    }
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            onNavigate('/');
            setMegaMenuOpen(false);
            setMobileMenuOpen(false);
          }}
          className="text-left group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B85D19]"
        >
          <span className="text-base font-semibold tracking-tight text-[#141413] group-hover:text-[#B85D19] transition-colors">
            Rushabh Patadia
          </span>
          <span className="text-[11px] tracking-wider uppercase text-[#73716B] font-mono">
            Product Management
          </span>
        </button>

        {/* Zone 2: Exactly 3 high-level items: Portfolio, About, Contact */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          {/* Item 1: Portfolio with Mega Menu trigger */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                if (currentPath.startsWith('/portfolio')) {
                  onNavigate('/portfolio/gpu-infrastructure-platform');
                } else {
                  setMegaMenuOpen(!megaMenuOpen);
                }
              }}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B85D19] ${
                currentPath.startsWith('/portfolio')
                  ? 'text-[#141413] font-semibold'
                  : 'text-[#5C5A55] hover:text-[#141413]'
              }`}
              aria-expanded={megaMenuOpen}
            >
              <span>Portfolio</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  megaMenuOpen ? 'rotate-180 text-[#141413]' : 'text-[#8E8C85]'
                }`}
              />
            </button>

            {/* Portfolio Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[620px] bg-[#FFFFFF] border border-[#E2DFD7] rounded-xl shadow-xl p-3 animate-fade-in z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="px-3.5 py-2.5 border-b border-[#F0EEE8] flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-[#8E8C85] uppercase tracking-wider">
                    Selected Case Studies & Systems
                  </span>
                  <span className="text-xs text-[#8E8C85]">
                    06 Systems Documented
                  </span>
                </div>

                <div className="space-y-1">
                  {CASE_STUDIES.map((item) => {
                    const isHovered = hoveredCase === item.id;
                    const isFlagship = item.isFlagship;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleCaseSelect(item)}
                        onMouseEnter={() => setHoveredCase(item.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all flex items-start gap-4 group focus:outline-none ${
                          isHovered
                            ? 'bg-[#F7F6F1]'
                            : 'hover:bg-[#FAF9F5]'
                        }`}
                      >
                        <span
                          className={`font-mono text-xs mt-0.5 tabular-nums transition-colors ${
                            isFlagship
                              ? 'text-[#B85D19] font-semibold'
                              : 'text-[#8E8C85] group-hover:text-[#141413]'
                          }`}
                        >
                          {item.number}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-semibold tracking-tight transition-colors ${
                                isFlagship
                                  ? 'text-[#141413] group-hover:text-[#B85D19]'
                                  : 'text-[#21201D] group-hover:text-[#141413]'
                              }`}
                            >
                              {item.title}
                            </span>
                            {isFlagship && (
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B85D19]">
                                Flagship Case Study
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-[#6B6964] mt-0.5 line-clamp-1 leading-relaxed">
                            {item.shortDescription}
                          </p>

                          <div className="text-[11px] text-[#8E8C85] mt-1.5 font-mono">
                            {item.categoryTag}
                          </div>
                        </div>

                        <ArrowUpRight
                          className={`w-4 h-4 mt-1 transition-all ${
                            isHovered
                              ? 'text-[#B85D19] translate-x-0.5 -translate-y-0.5'
                              : 'text-[#D0CEC6] group-hover:text-[#73716B]'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Item 2: About */}
          <button
            onClick={() => onNavigate('/about')}
            className={`text-sm font-medium transition-colors py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B85D19] ${
              currentPath === '/about'
                ? 'text-[#141413] font-semibold'
                : 'text-[#5C5A55] hover:text-[#141413]'
            }`}
          >
            About
          </button>

          {/* Item 3: Contact */}
          <button
            onClick={() => onNavigate('/contact')}
            className={`text-sm font-medium transition-colors py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B85D19] ${
              currentPath === '/contact'
                ? 'text-[#141413] font-semibold'
                : 'text-[#5C5A55] hover:text-[#141413]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Direct Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="text-xs font-medium text-[#FAF9F5] bg-[#141413] px-4 py-2 rounded-md hover:bg-[#2A2925] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D19]"
          >
            Let's talk
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141413] rounded-md hover:bg-[#F0EEE8] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E6DF] bg-[#FAF9F5] px-6 py-6 animate-fade-in space-y-6">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  onNavigate('/');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-1.5 text-[#141413]"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('/portfolio/gpu-infrastructure-platform');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-1.5 text-[#141413] flex items-center justify-between"
              >
                <span>Portfolio 01 — GPU Infrastructure</span>
                <span className="text-[10px] font-mono uppercase text-[#B85D19]">Flagship</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('/portfolio/internal-developer-platform');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-1.5 text-[#141413] flex items-center justify-between"
              >
                <span>Portfolio 02 — Internal Developer Platform</span>
                <span className="text-[10px] font-mono uppercase text-[#73716B]">Case Study</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('/portfolio/customer-requirements-product-feature');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-1.5 text-[#141413] flex items-center justify-between"
              >
                <span>Portfolio 03 — Customer Requirements</span>
                <span className="text-[10px] font-mono uppercase text-[#73716B]">Case Study</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('/about');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-1.5 text-[#141413]"
              >
                About
              </button>
              <button
                onClick={() => {
                  onNavigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-medium py-1.5 text-[#141413]"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="space-y-3 border-t border-[#E8E6DF] pt-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              All Portfolio Case Studies
            </div>
            <div className="space-y-2">
              {CASE_STUDIES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleCaseSelect(item)}
                  className="w-full text-left p-2.5 rounded-lg bg-white/70 border border-[#E8E6DF] text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#141413]">
                      {item.number} · {item.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85]" />
                  </div>
                  <p className="text-[#6B6964] line-clamp-1">{item.shortDescription}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
