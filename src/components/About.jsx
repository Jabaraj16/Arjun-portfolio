import React from 'react';
import { resumeData } from '../data/resumeData';
import { 
  FileSpreadsheet, 
  ReceiptText, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  BookOpenCheck,
  CheckCircle,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';

const strengthIcons = {
  FileSpreadsheet,
  ReceiptText,
  CheckCircle2,
  Users,
  TrendingUp,
  BookOpenCheck,
};

const About = () => {
  const { personalInfo, about } = resumeData;

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-100/50 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me &amp; Core Focus
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of my career trajectory in financial analysis, ERP operations, statutory taxation, and administrative leadership.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Narrative Introduction & Profile Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-card space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <span>Executive Accounting Background</span>
              </h3>
              
              <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Verified Profile Matrix */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Current Location
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center space-x-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Total Experience
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center space-x-1.5 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>4+ Years in Practice</span>
                  </span>
                </div>

                <div className="min-w-0">
                  <span className="block text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Professional Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium text-blue-700 dark:text-blue-400 hover:underline flex items-center space-x-1.5 mt-0.5 min-w-0"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span className="truncate break-all">{personalInfo.email}</span>
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Contact Number
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1.5 mt-0.5"
                  >
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{personalInfo.phoneFormatted}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Professional Strengths as Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {about.strengths.map((item, idx) => {
                const IconComponent = strengthIcons[item.icon] || CheckCircle2;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-navy-900 rounded-xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-card hover:shadow-card-hover transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
