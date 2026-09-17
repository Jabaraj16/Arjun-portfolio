import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { personalInfo } = resumeData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please provide your message';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build mailto URL prefilled with form data
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Arjun,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const link = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setMailtoUrl(link);
    setSubmitted(true);

    // Prompt user to open their client directly
    window.location.href = link;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-100/50 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            Reach out for accounting executive opportunities, financial consulting, or corporate recruitment inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          
          {/* Left Column: Contact Cards, LinkedIn & Resume CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-card space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start space-x-3.5 sm:space-x-4 p-3 sm:p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/60 min-w-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 break-all transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start space-x-3.5 sm:space-x-4 p-3 sm:p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/60 min-w-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone Number
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {personalInfo.phoneFormatted}
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-start space-x-3.5 sm:space-x-4 p-3 sm:p-3.5 rounded-xl border border-transparent min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Location
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3.5 sm:space-x-4 p-3 sm:p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/60 min-w-0"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      LinkedIn Profile
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center space-x-1">
                      <span className="truncate">linkedin.com/in/arjun-raju-kollam</span>
                      <ExternalLink className="w-3.5 h-3.5 inline ml-1 text-slate-400 shrink-0" />
                    </p>
                  </div>
                </a>
              </div>

              {/* Prominent Resume Download Card */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white space-y-3 shadow-md">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-blue-200 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Official Document</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Need Arjun's Full Resume?
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Download the complete printable PDF resume featuring comprehensive work history, education, and certifications.
                  </p>
                  <a
                    href={personalInfo.resumeUrl}
                    download={personalInfo.resumeFileName}
                    className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 min-h-[44px] rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all duration-200 shadow-sm"
                  >
                    <Download className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-card">
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 sm:mb-6">
                Fill out the form below to connect. When submitted, it pre-drafts your message directly to Arjun's email client.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 sm:p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-3 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold">
                    Message Prepared Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message is drafted for <strong>{personalInfo.email}</strong>. If your email client did not open automatically, click the button below:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors text-center"
                    >
                      Open Email App Now
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-lg bg-white dark:bg-navy-900 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-50 transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-base sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                          errors.name
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-slate-300 dark:border-slate-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-base sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                          errors.email
                            ? 'border-red-500 bg-red-50/20'
                            : 'border-slate-300 dark:border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Accounting Executive Role / Interview Opportunity"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-base sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none ${
                        errors.subject
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-slate-300 dark:border-slate-700'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note, job scope, or meeting request here..."
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-base sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none resize-y ${
                        errors.message
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-slate-300 dark:border-slate-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:ring-offset-slate-900"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 dark:text-slate-500">
                    * Opens directly in your desktop or mobile email application with no background data collection.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
