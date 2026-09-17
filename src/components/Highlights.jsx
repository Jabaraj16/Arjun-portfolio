import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Briefcase, 
  Layers, 
  Calculator, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Briefcase,
  Layers,
  Calculator,
  ShieldCheck,
  BarChart3,
};

const Highlights = () => {
  const { highlights } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-8 sm:py-12 relative z-20 -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {highlights.map((item) => {
            const IconComponent = iconMap[item.icon] || Briefcase;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-navy-900 rounded-xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 mt-0.5">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug line-clamp-2">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
