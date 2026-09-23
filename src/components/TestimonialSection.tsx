import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { ArrowUpRight } from 'lucide-react';

interface TestimonialSectionProps {
  onNavigate?: (path: string) => void;
  onOpenSecondaryCase?: (id: string) => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onNavigate,
  onOpenSecondaryCase,
}) => {
  const [expandedFeatured1, setExpandedFeatured1] = useState(false);
  const [expandedFeatured2, setExpandedFeatured2] = useState(false);

  // Grouping into the requested editorial layout:
  // 1. Featured Testimonial 1 (David Vance - Founder & CEO)
  const featured1 = TESTIMONIALS[0];

  // 2. Supporting Row 1 (3 columns: Rahul Sharma, Elena Rostova, Priya Shah)
  const supportingRow1 = [TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[3]];

  // 3. Featured Testimonial 2 (Vikram Patel - CEO & Managing Director)
  const featured2 = TESTIMONIALS[4];

  // 4. Final Row (3 columns: Arjun Mehta, Tariq Al-Mansoor, Marcus Sterling)
  const finalRow = [TESTIMONIALS[5], TESTIMONIALS[6], TESTIMONIALS[7]];

  const handleRelatedClick = (item: typeof TESTIMONIALS[0]) => {
    if (item.relatedWorkPath && onNavigate) {
      onNavigate(item.relatedWorkPath);
    } else if (item.relatedWorkTitle === 'Internal Developer Platform' && onOpenSecondaryCase) {
      onOpenSecondaryCase('internal-developer-platform');
    } else if (onNavigate) {
      onNavigate('/portfolio/gpu-infrastructure-platform');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
      {/* SECTION HEADER */}
      <div className="space-y-3 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] tracking-tight">
          People I've worked with
        </h2>
        <p className="text-sm sm:text-base text-[#5C5A55] leading-relaxed">
          A few words from people I've worked alongside across product, technology, business and client-facing work.
        </p>
      </div>

      {/* EDITORIAL TESTIMONIAL COMPOSITION */}
      <div className="space-y-6 sm:space-y-8">
        {/* 1. FEATURED TESTIMONIAL 1 */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#FFFFFF] border border-[#E2DFD7] hover:border-[#D5D2C9] hover:bg-[#FAF9F5]/70 transition-all duration-300 group shadow-xs">
          <div className="space-y-6 max-w-4xl">
            {/* Subtle Accent Line on Hover */}
            <div className="w-0 group-hover:w-8 h-0.5 bg-[#B85D19] transition-all duration-300" />

            {/* Large Quote */}
            <blockquote className="text-xl sm:text-2xl font-normal text-[#141413] tracking-tight leading-relaxed transition-transform duration-200 group-hover:translate-x-1">
              “{expandedFeatured1 && featured1.fullQuote ? featured1.fullQuote : featured1.quote}”
            </blockquote>

            {/* Read More / Show Less Toggle for Long Quote */}
            {featured1.fullQuote && (
              <div>
                <button
                  onClick={() => setExpandedFeatured1(!expandedFeatured1)}
                  className="text-xs font-mono text-[#B85D19] hover:underline focus:outline-none"
                >
                  {expandedFeatured1 ? 'Show less' : 'Read more'}
                </button>
              </div>
            )}

            {/* Attribution */}
            <div className="pt-6 border-t border-[#F0EEE8] flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-[#141413] group-hover:text-[#000000] transition-colors">
                  {featured1.name}
                </div>
                <div className="text-xs text-[#5C5A55] mt-0.5">
                  {featured1.role}
                </div>
                <div className="text-xs text-[#8E8C85]">
                  {featured1.company} · {featured1.location}
                </div>
              </div>

              {/* Contextual Case Study Link */}
              {featured1.relatedWorkTitle && (
                <button
                  onClick={() => handleRelatedClick(featured1)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#B85D19] hover:underline font-medium self-start sm:self-auto group/link"
                >
                  <span>Related work → {featured1.relatedWorkTitle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B85D19] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. SUPPORTING TESTIMONIALS (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {supportingRow1.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2DFD7] hover:border-[#D5D2C9] hover:bg-[#FAF9F5]/70 transition-all duration-300 group flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="w-0 group-hover:w-6 h-0.5 bg-[#B85D19] transition-all duration-300" />
                <blockquote className="text-sm sm:text-base text-[#21201D] leading-relaxed transition-transform duration-200 group-hover:translate-x-1">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EEE8] space-y-2">
                <div>
                  <div className="text-sm font-semibold text-[#141413] group-hover:text-[#000000] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#5C5A55] mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-xs text-[#8E8C85]">
                    {item.company} · {item.location}
                  </div>
                </div>

                {item.relatedWorkTitle && (
                  <div className="pt-1">
                    <button
                      onClick={() => handleRelatedClick(item)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#B85D19] hover:underline font-medium group/link"
                    >
                      <span>Related work → {item.relatedWorkTitle}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#B85D19] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3. SECOND FEATURED TESTIMONIAL */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#FFFFFF] border border-[#E2DFD7] hover:border-[#D5D2C9] hover:bg-[#FAF9F5]/70 transition-all duration-300 group shadow-xs">
          <div className="space-y-6 max-w-4xl">
            <div className="w-0 group-hover:w-8 h-0.5 bg-[#B85D19] transition-all duration-300" />

            <blockquote className="text-xl sm:text-2xl font-normal text-[#141413] tracking-tight leading-relaxed transition-transform duration-200 group-hover:translate-x-1">
              “{expandedFeatured2 && featured2.fullQuote ? featured2.fullQuote : featured2.quote}”
            </blockquote>

            {featured2.fullQuote && (
              <div>
                <button
                  onClick={() => setExpandedFeatured2(!expandedFeatured2)}
                  className="text-xs font-mono text-[#B85D19] hover:underline focus:outline-none"
                >
                  {expandedFeatured2 ? 'Show less' : 'Read more'}
                </button>
              </div>
            )}

            <div className="pt-6 border-t border-[#F0EEE8] flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-[#141413] group-hover:text-[#000000] transition-colors">
                  {featured2.name}
                </div>
                <div className="text-xs text-[#5C5A55] mt-0.5">
                  {featured2.role}
                </div>
                <div className="text-xs text-[#8E8C85]">
                  {featured2.company} · {featured2.location}
                </div>
              </div>

              {featured2.relatedWorkTitle && (
                <button
                  onClick={() => handleRelatedClick(featured2)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#B85D19] hover:underline font-medium self-start sm:self-auto group/link"
                >
                  <span>Related work → {featured2.relatedWorkTitle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B85D19] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 4. FINAL ROW (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {finalRow.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2DFD7] hover:border-[#D5D2C9] hover:bg-[#FAF9F5]/70 transition-all duration-300 group flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="w-0 group-hover:w-6 h-0.5 bg-[#B85D19] transition-all duration-300" />
                <blockquote className="text-sm sm:text-base text-[#21201D] leading-relaxed transition-transform duration-200 group-hover:translate-x-1">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EEE8] space-y-2">
                <div>
                  <div className="text-sm font-semibold text-[#141413] group-hover:text-[#000000] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#5C5A55] mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-xs text-[#8E8C85]">
                    {item.company} · {item.location}
                  </div>
                </div>

                {item.relatedWorkTitle && (
                  <div className="pt-1">
                    <button
                      onClick={() => handleRelatedClick(item)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#B85D19] hover:underline font-medium group/link"
                    >
                      <span>Related work → {item.relatedWorkTitle}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#B85D19] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION END: Understated Conclusion Line */}
      <div className="pt-8 text-center">
        <p className="text-xs font-mono tracking-wider text-[#8E8C85]">
          Different perspectives. One body of work.
        </p>
      </div>
    </section>
  );
};
