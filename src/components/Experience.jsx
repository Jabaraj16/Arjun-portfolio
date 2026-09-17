import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Building2,
  TrendingDown,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Chronological record of corporate accounting, administrative leadership, and financial operations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical guide line - left on mobile, center on desktop */}
          <div 
            className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 block" 
            aria-hidden="true" 
          />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Node / Dot Icon */}
                  <div className="flex absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-5 sm:top-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-navy-950 border-2 sm:border-4 border-blue-600 dark:border-blue-500 shadow-md items-center justify-center z-10">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Spacer for 2-column alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card with responsive indentation on mobile */}
                  <div className={`w-full pl-10 sm:pl-14 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-navy-900 rounded-2xl p-4 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200 group">
                      
                      {/* Card Header: Role, Status Badge, Company */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                            {item.role}
                          </h3>
                          <div className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-400 mt-0.5">
                            {item.company}
                          </div>
                        </div>

                        {item.isCurrent && (
                          <span className="inline-flex items-center px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            Present Role
                          </span>
                        )}
                      </div>

                      {/* Meta info: Period & Location */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 sm:gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span>{item.period}</span>
                        </span>
                        <span className="flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Responsibilities list */}
                      <div className="space-y-2 mb-4 sm:mb-5">
                        <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Documented Impact Highlight Banner */}
                      {item.impactHighlight && (
                        <div className="mb-4 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-start sm:items-center space-x-2.5 text-xs text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900 dark:text-white">Key Impact: </span>
                            <span>{item.impactHighlight}</span>
                          </div>
                        </div>
                      )}

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
