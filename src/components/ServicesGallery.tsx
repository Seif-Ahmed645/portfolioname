import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Presentation, Linkedin, FileOutput, BarChart2, Eye, X } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  icon: typeof FileText;
  accent: 'violet' | 'coral';
  description: string[];
};

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'Data Analysis', label: 'Data Analysis' },
  { key: 'CVs', label: 'ATS CVs' },
  { key: 'Presentations', label: 'Presentations' },
  { key: 'LinkedIn', label: 'LinkedIn' },
  { key: 'PDF', label: 'PDF to Word' },
];

const ITEMS: GalleryItem[] = [
  { 
    title: 'Financial Data Visualization 1', 
    category: 'Data Analysis', 
    image: '/Portfolio/Screenshot 2026-10-20 052957  (1).png', 
    icon: BarChart2, 
    accent: 'coral',
    description: [
      'Processed and analyzed complex financial datasets to identify key revenue trends.',
      'Designed interactive visual charts highlighting metric comparisons and forecasts.',
      'Extracted actionable insights to drive data-informed financial planning.'
    ]
  },
  { 
    title: 'Financial Data Visualization 2', 
    category: 'Data Analysis', 
    image: '/Portfolio/Screenshot 2026-10-20 052957  (2).png', 
    icon: BarChart2, 
    accent: 'violet',
    description: [
      'Cleaned raw financial records and mapped out multi-variable correlations.',
      'Created comprehensive metric dashboards using advanced visualization libraries.',
      'Optimized reporting workflows for clearer executive decision-making.'
    ]
  },
  { 
    title: 'ATS CV Sample 1', 
    category: 'CVs', 
    image: '/Portfolio/cv_sample_1.jpg', 
    icon: FileText, 
    accent: 'violet',
    description: [
      'Structured layout optimized to bypass modern Applicant Tracking Systems (ATS).',
      'Highlighted technical competencies, key achievements, and quantitative impact metrics.',
      'Applied clean, professional formatting compliant with international standards.'
    ]
  },
  { 
    title: 'ATS CV Sample 2', 
    category: 'CVs', 
    image: '/Portfolio/cv_sample_2.jpg', 
    icon: FileText, 
    accent: 'violet',
    description: [
      'Tailored resume architecture focusing on professional branding and role clarity.',
      'Integrated precise industry keywords to maximize recruiter search visibility.',
      'Eliminated parsing errors by using standard section headings and clean typography.'
    ]
  },
  { 
    title: 'ATS CV Sample 3', 
    category: 'CVs', 
    image: '/Portfolio/cv_sample_3.jpg', 
    icon: FileText, 
    accent: 'violet',
    description: [
      'Crafted executive-level summaries and structured experience sections.',
      'Emphasized career progression and measurable project outcomes.',
      'Ensured seamless multi-platform compatibility and high ATS parser scores.'
    ]
  },
  { 
    title: 'Presentation Design 1', 
    category: 'Presentations', 
    image: '/Portfolio/presentation_sample_1.jpg', 
    icon: Presentation, 
    accent: 'coral',
    description: [
      'Developed engaging slide decks with consistent visual hierarchy and branding.',
      'Transformed complex technical concepts into clear, easy-to-digest graphical layouts.',
      'Enhanced audience engagement through professional typography and modern styling.'
    ]
  },
  { 
    title: 'Presentation Design 2', 
    category: 'Presentations', 
    image: '/Portfolio/presentation_sample_2.jpg', 
    icon: Presentation, 
    accent: 'coral',
    description: [
      'Structured pitch decks and project summaries for maximum professional impact.',
      'Integrated customized infographics, metrics displays, and clean content blocks.',
      'Delivered polished slides tailored for corporate and stakeholder presentations.'
    ]
  },
  { 
    title: 'LinkedIn Optimization', 
    category: 'LinkedIn', 
    image: '/Portfolio/linkedin_sample_1.jpg', 
    icon: Linkedin, 
    accent: 'violet',
    description: [
      'Overhauled profile headlines, about sections, and experience descriptions for search visibility.',
      'Implemented SEO-friendly keywords aligned with target industry roles.',
      'Designed custom professional banner art and formatted achievement highlights.'
    ]
  },
  { 
    title: 'PDF to Word Conversion', 
    category: 'PDF', 
    image: '/Portfolio/pdf_conversion_sample_1.jpg', 
    icon: FileOutput, 
    accent: 'coral',
    description: [
      'Accurately converted scanned and complex PDF documents into fully editable Word formats.',
      'Maintained exact original document styling, tables, fonts, and structural layouts.',
      'Removed formatting glitches and cleaned up text flow for seamless editing.'
    ]
  },
];

export function ServicesGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [zoomItem, setZoomItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === 'all'
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="services-gallery" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />
      <div className="ambient-orb w-80 h-80 bg-coral-400 top-1/4 right-1/4 animate-orb-float" />
      <div
        className="ambient-orb w-72 h-72 bg-violet-500 bottom-1/4 left-1/4 animate-orb-float"
        style={{ animationDelay: '4s' }}
      />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Services & Work Samples"
          title={
            <>
              Work <span className="text-gradient-vc neon-text-glow">Gallery</span>
            </>
          }
          subtitle="A showcase of real service samples — Data Analysis, ATS resumes, presentations, LinkedIn optimizations, and document conversions."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-2.5"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                  : 'glass border border-violet-500/10 text-slate-400 hover:text-violet-400 hover:border-violet-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="group rounded-2xl glass-strong border border-violet-500/10 overflow-hidden">
                  <button
                    onClick={() => setZoomItem(item)}
                    className="w-full text-left"
                  >
                    <div className="relative h-52 bg-gradient-to-br from-obsidian-800 to-obsidian-850 overflow-hidden">
                      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />
                      <div
                        className={`absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl pointer-events-none ${
                          item.accent === 'violet'
                            ? 'bg-violet-500/12'
                            : 'bg-coral-400/12'
                        }`}
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-obsidian-900/50">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="absolute inset-0 bg-obsidian-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-strong border text-sm font-semibold ${
                            item.accent === 'violet'
                              ? 'border-violet-500/20 text-violet-400'
                              : 'border-coral-400/20 text-coral-400'
                          }`}
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-xs font-mono tracking-widest uppercase mb-1.5 text-[#D98A6D]">
                        {item.category}
                      </div>
                      <h3 className="font-display text-sm font-bold text-white-primary">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {zoomItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setZoomItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full rounded-2xl glass-strong border border-violet-500/15 overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomItem(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-xl glass border border-violet-500/15 flex items-center justify-center hover:border-violet-500/40 hover:scale-105 transition-all duration-300"
              >
                <X className="h-5 w-5 text-violet-400" />
              </button>

              <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                      zoomItem.accent === 'violet'
                        ? 'bg-gradient-to-br from-violet-400 to-violet-600'
                        : 'bg-gradient-to-br from-coral-400 to-coral-500'
                    }`}
                  >
                    <zoomItem.icon className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white-primary">
                      {zoomItem.title}
                    </h3>
                    <p className="text-xs font-mono text-[#D98A6D]">
                      // {zoomItem.category}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl glass border border-violet-500/10 overflow-hidden relative max-h-[45vh] flex items-center justify-center bg-obsidian-900/80 mb-6">
                  <img
                    src={zoomItem.image}
                    alt={zoomItem.title}
                    className="w-full h-auto max-h-[40vh] object-contain"
                  />
                </div>

                <div className="pt-3 border-t border-violet-500/10">
                  <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-2">
                    What I Did / Delivered:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-slate-300">
                    {zoomItem.description.map((point, index) => (
                      <li key={index} className="leading-relaxed">
                        <span className="-ml-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ServicesGallery;