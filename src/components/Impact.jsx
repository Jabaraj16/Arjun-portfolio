import React from 'react';
import { resumeData } from '../data/resumeData';
import { Zap, TrendingDown, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const impactIcons = {
  Zap,
  TrendingDown,
  CheckCircle,
};

const Impact = () => {
  const { achievements } = resumeData;

  return (
    <section id="impact" className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Factual Achievements</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            Documented efficiency improvements and measurable results delivered across previous professional roles.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((item, index) => {
            const IconComponent = impactIcons[item.icon] || CheckCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-950/30 rounded-bl-full pointer-events-none -mr-6 -mt-6" />

                <div>
                  {/* Top Metric Header */}
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl xs:text-4xl sm:text-5xl font-display font-black text-blue-700 dark:text-blue-400 tracking-tight">
                        {item.metric}
                      </span>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {item.suffix}
                      </span>
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-3">
                    {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span>Resume Documented</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center space-x-1">
                    <span>Clean Outcome</span>
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

export default Impact;
