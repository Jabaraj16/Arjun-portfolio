import React from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, Linkedin, ArrowUp, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const { personalInfo, navigation } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
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
    <footer className="bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-100 dark:border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-slate-900 text-white flex items-center justify-center font-display font-bold text-lg shadow-sm">
                AR
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                  {personalInfo.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Accounting Executive specializing in SAP FICO, Tally ERP 9, financial analysis, GST compliance, and seamless audit coordination based in Kollam, Kerala.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Phone"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors py-1.5 flex items-center min-h-[36px]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="block font-medium text-slate-900 dark:text-slate-200">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="text-blue-700 dark:text-blue-400 hover:underline break-all">
                {personalInfo.email}
              </a>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="block font-medium text-slate-900 dark:text-slate-200">Phone:</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {personalInfo.phoneFormatted}
              </a>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="block font-medium text-slate-900 dark:text-slate-200">Location:</span>
              <span>{personalInfo.location}</span>
            </p>
          </div>

        </div>

        {/* Bottom bar: Copyright, Developer Credits & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 text-center md:text-left">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()}{' '}
            <a
              href="https://portfolio-lilac-seven-34.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Jabaraj
            </a>
            . All rights reserved.
          </p>

          <div className="order-1 md:order-2 flex flex-wrap justify-center items-center gap-2 bg-slate-100/80 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-xs max-w-full">
            <span className="text-slate-600 dark:text-slate-400">Designed &amp; Developed by</span>
            <a
              href="https://portfolio-lilac-seven-34.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Jabaraj's Portfolio"
              className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
            >
              <span className="group-hover:underline">Jabaraj</span>
              <span className="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-slate-950 transition-all">
                &lt;/&gt;
              </span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="order-3 flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all group focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[36px]"
          >
            <span className="font-medium">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
