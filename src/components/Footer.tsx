import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[#E8E6DF] bg-[#FAF9F5] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E6DF]">
          {/* Identity & Core Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="text-lg font-semibold text-[#141413] tracking-tight block">
                Rushabh Patadia
              </span>
              <span className="text-xs font-mono text-[#B85D19] uppercase tracking-wider block mt-1">
                Product Management · Technology · Leadership
              </span>
            </div>

            <blockquote className="text-base sm:text-lg font-normal text-[#141413] tracking-tight leading-snug">
              “I work at the intersection of product, technology, customers and business.”
            </blockquote>

            <p className="text-xs text-[#73716B] leading-relaxed max-w-md pt-1">
              Product thinking grounded in technical reality. Operating across cloud infrastructure, AI systems, developer platforms, and customer execution.
            </p>
          </div>

          {/* Navigation: Portfolio, About, Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#474540]">
              <li>
                <button
                  onClick={() => onNavigate('/portfolio/gpu-infrastructure-platform')}
                  className="hover:text-[#141413] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Portfolio</span>
                  <span className="text-[10px] font-mono text-[#B85D19]">01–06</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#141413] transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#141413] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E8C85]">
              Direct Channels
            </span>
            <ul className="space-y-2 text-sm text-[#474540]">
              <li>
                <a
                  href="mailto:rushabhpatadia2003@gmail.com"
                  className="hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rushabhpatadia"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/patadiarushabh19"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8C85]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8C85]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#141413]">Rushabh Patadia</span>
            <span aria-hidden="true">·</span>
            <span>Product Management · Technical Product Leadership · Cloud · AI · SaaS</span>
          </div>
          <div>
            Built with verified proof and editorial clarity.
          </div>
        </div>
      </div>
    </footer>
  );
};
