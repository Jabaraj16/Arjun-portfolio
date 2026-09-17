import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { resumeData } from '../data/resumeData';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  FileText, 
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { personalInfo, navigation } = resumeData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      setMobileMenuOpen(false);

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navOffset = 75;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        } else {
          window.location.hash = href;
        }
      }, 60);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/95 dark:bg-[#070D18]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1 max-w-[calc(100vw-110px)] sm:max-w-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-700 to-slate-900 text-white flex items-center justify-center font-display font-bold text-base sm:text-lg shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
              AR
            </div>
            <div className="min-w-0">
              <span className="block font-display font-bold text-base sm:text-lg leading-tight tracking-tight text-slate-900 dark:text-white truncate">
                {personalInfo.name}
              </span>
              <span className="block text-[10px] sm:text-xs font-medium text-blue-700 dark:text-blue-400 tracking-wide uppercase truncate">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & Resume Download */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-subtle focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Download Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-700 hover:bg-blue-800 text-white shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:ring-offset-slate-950"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:hidden shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="relative z-50 p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs -z-10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0b1329] border-b border-slate-200 dark:border-slate-800 shadow-2xl z-40"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 active:bg-slate-200 dark:active:bg-slate-700'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  className="flex items-center justify-center space-x-2 w-full min-h-[44px] px-4 py-3 rounded-xl bg-blue-700 text-white font-medium shadow-sm hover:bg-blue-800 active:bg-blue-900 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
