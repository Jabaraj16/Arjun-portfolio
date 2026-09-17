import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Cpu, 
  Calculator, 
  FileSpreadsheet, 
  PieChart, 
  LineChart, 
  FileText, 
  Presentation,
  MessageSquare, 
  Lightbulb, 
  Clock, 
  Repeat, 
  Compass,
  CheckCircle,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const technicalIcons = {
  Cpu,
  Calculator,
  FileSpreadsheet,
  PieChart,
  LineChart,
  FileText,
  Presentation,
  Layers,
};

const professionalIcons = {
  MessageSquare,
  Lightbulb,
  Clock,
  Repeat,
  Compass,
};

const Skills = () => {
  const { skills } = resumeData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredTechnical = activeTab === 'all' 
    ? skills.technical 
    : skills.technical.filter(item => {
        if (activeTab === 'erp') return item.category.includes('ERP') || item.category.includes('Accounting');
        if (activeTab === 'analysis') return item.category.includes('Analysis') || item.category.includes('Modeling');
        if (activeTab === 'office') return item.category.includes('Office');
        return true;
      });

  return (
    <section id="skills" className="py-14 sm:py-20 bg-slate-100/50 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Competency Dashboard</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Software Proficiency
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive matrix of specialized accounting ERPs, financial modeling tools, and core organizational competencies.
          </p>
        </div>

        {/* Technical Skills Sub-header & Filter Tabs */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              Technical &amp; Software Proficiency
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Direct tools utilized for financial ledger, taxation, and statutory filings
            </p>
          </div>

          {/* Category Filter Pills - Horizontally scrollable on mobile */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl overflow-x-auto no-scrollbar max-w-full w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Tools' },
              { id: 'erp', label: 'ERP & Accounting' },
              { id: 'analysis', label: 'Analysis & Modeling' },
              { id: 'office', label: 'Productivity' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 min-h-[36px] ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-navy-900 text-blue-700 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 mb-12 sm:mb-16"
        >
          {filteredTechnical.map((item, idx) => {
            const IconComponent = technicalIcons[item.icon] || Cpu;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.name}
                className="bg-white dark:bg-navy-900 rounded-xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Hands-on Practitioner</span>
                  </span>
                  <span>4+ Yrs Scope</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Professional Competencies */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
              Professional &amp; Executive Competencies
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Essential organizational qualities applied across cross-functional audits and management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {skills.professional.map((item, idx) => {
              const IconComponent = professionalIcons[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white dark:bg-navy-900 rounded-xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
