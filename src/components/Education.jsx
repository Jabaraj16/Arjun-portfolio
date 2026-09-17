import React from 'react';
import { resumeData } from '../data/resumeData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  GraduationCap,
  Award,
};

const Education = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            Formal university degree and specialized professional accounting diplomas.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {education.map((item, index) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {item.status}: {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                    {item.degree}
                  </h3>
                  
                  <div className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-400 mt-1">
                    {item.institution}
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 sm:gap-x-4 text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 mb-4 pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Year: {item.year}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Specialization Focus:
                    </h4>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item.specialization}
                    </p>
                    <ul className="space-y-1.5 pt-2">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Credential Status</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                    <span>Verified Qualification</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
