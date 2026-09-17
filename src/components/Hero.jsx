import React, { useState, useEffect } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Download, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const { personalInfo } = resumeData;

  const workTitles = [
    'Accountant Executive',
    'SAP FICO Specialist',
    'GST & Tax Compliance Analyst',
    'Financial Modeling & Reporting',
    'Administration Professional',
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % workTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [workTitles.length]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50 dark:bg-[#070D18]">
      {/* Subtle background ambient warmth */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 overflow-hidden">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-300/20 dark:bg-slate-700/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Title, Narrative, Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/80 dark:border-blue-800/60 text-blue-800 dark:text-blue-300 text-xs font-semibold tracking-wide shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">Available for Executive &amp; Accounting Roles</span>
            </div>

            {/* Main Name with Glowing Effect & Animated Work Title */}
            <div className="space-y-3">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] break-words">
                <span className="relative inline-block group">
                  {/* Ambient glowing aura backdrop */}
                  <span 
                    className="absolute -inset-x-4 -inset-y-2.5 bg-gradient-to-r from-blue-600/30 via-indigo-500/25 to-cyan-400/35 dark:from-blue-500/40 dark:via-cyan-400/35 dark:to-indigo-500/40 rounded-3xl animate-glow-pulse -z-10 pointer-events-none" 
                    aria-hidden="true" 
                  />
                  
                  {/* Shimmer gradient luminous text */}
                  <span className="relative bg-gradient-to-r from-slate-950 via-blue-700 to-indigo-950 dark:from-white dark:via-blue-200 dark:to-cyan-200 bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_2px_22px_rgba(37,99,235,0.4)]">
                    {personalInfo.name}
                  </span>
                </span>
              </h1>

              {/* Dynamic Animated Work Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1">
                <div className="h-10 flex items-center justify-center lg:justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={workTitles[titleIndex]}
                      initial={{ y: 22, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -22, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/90 dark:border-blue-800/70 shadow-xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping shrink-0" />
                      <span className="text-base sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 dark:from-blue-300 dark:via-cyan-200 dark:to-blue-400 bg-clip-text text-transparent">
                        {workTitles[titleIndex]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <span className="hidden sm:inline text-slate-300 dark:text-slate-600 font-normal">|</span>
                <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-base font-semibold">
                  Accounting &amp; Administration Professional
                </span>
              </div>
            </div>

            {/* Introduction Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Detail-oriented accounting professional with <strong className="text-slate-900 dark:text-white font-semibold">over four years of expertise</strong> in financial analysis, <strong className="text-slate-900 dark:text-white font-semibold">SAP FICO</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Tally ERP 9</strong>, and advanced <strong className="text-slate-900 dark:text-white font-semibold">MS Excel</strong>. Proven excellence in streamlining <strong className="text-slate-900 dark:text-white font-semibold">GST and tax compliance</strong>, managing end-to-end accounting operations, and driving organizational success through effective <strong className="text-slate-900 dark:text-white font-semibold">administrative management</strong>.
            </p>

            {/* Core Capability Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1 pb-1">
              {[
                'SAP FICO',
                'Tally ERP 9',
                'MS Excel',
                'GST & Tax Compliance',
                'Financial Reporting',
                'Audit Coordination',
                'Payroll & Admin',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-semibold bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 shadow-subtle"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Experience, Contact Me, LinkedIn, Download Resume */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-3 w-full">
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, 'experience')}
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-navy-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Contact Me</span>
              </a>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 group text-center"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-y-0.5 shrink-0" />
                  <span className="truncate">Resume</span>
                </a>

                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-navy-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm transition-colors border border-slate-300 dark:border-slate-700 group shadow-sm text-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A66C2] shrink-0" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* Location & Quick Contact Note */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 pt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span>Location: {personalInfo.location}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Phone: {personalInfo.phoneFormatted}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                <span className="break-all">Email: {personalInfo.email}</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Arjun R's Professional Profile Photo in Clean Circular Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0"
          >
            {/* Outer Circular Frame with subtle border and soft shadows */}
            <div className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-b from-slate-200/80 via-white to-slate-200/60 dark:from-slate-700/80 dark:via-navy-900 dark:to-slate-800/80 shadow-2xl max-w-full">
              <div className="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-navy-950 shadow-inner bg-slate-100 dark:bg-navy-900 group">
                <img
                  src="/profile.jpg"
                  alt="Arjun R - Accountant Executive"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized corporate monogram if image path fails
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-blue-900', 'to-slate-900', 'text-white', 'text-5xl', 'font-bold');
                      e.currentTarget.parentElement.innerHTML = '<span>AR</span>';
                    }
                  }}
                />
              </div>

              {/* Verified Professional Badge floating at bottom right */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="absolute -bottom-1 -right-1 sm:bottom-2 sm:right-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700/80 rounded-xl sm:rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2.5 shadow-lg flex items-center space-x-2 sm:space-x-3 max-w-[85%]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shadow-sm shrink-0">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    4+ Years Expertise
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-blue-600 dark:text-blue-400 truncate">
                    Accounting &amp; Admin
                  </p>
                </div>
              </motion.div>

              {/* Compliance Pill floating at top left */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="absolute -top-1 -left-1 sm:top-4 sm:-left-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700/80 rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-md flex items-center space-x-1.5 sm:space-x-2 max-w-[85%]"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white leading-tight">
                    GST &amp; Tax Ready
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">
                    Clean Audit Track
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Caption beneath circular photo */}
            <div className="text-center mt-6">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
                Arjun R • Kollam, Kerala
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
