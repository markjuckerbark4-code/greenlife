import React, { useState } from 'react';
import { Mail, Phone, MapPin, Menu, X, Calculator, Calendar } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/architectData';
import { Logo } from './Logo';

interface HeaderProps {
  onScheduleCall: () => void;
  onOpenCalculator: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onScheduleCall,
  onOpenCalculator,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Social Work', target: 'social-work' },
    { label: 'Blog', target: 'blog' },
    { label: 'Career', target: 'career' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-xs border-b border-slate-100">
      {/* Top Bar with Contact Info & Socials */}
      <div className="bg-slate-50 text-slate-600 text-xs border-b border-slate-200/70 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          {/* Contact Details */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors font-medium text-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="truncate max-w-sm">{COMPANY_CONTACT.headOffice}</span>
            </div>
          </div>

          {/* Socials & Mini CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 text-slate-400">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href={COMPANY_CONTACT.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="hover:text-black transition-colors p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.08 2.34 2.29 1.06.2 2.21-.06 2.98-.82.68-.64.99-1.58.99-2.5V.02z" />
                </svg>
              </a>
            </div>

            <button
              onClick={onScheduleCall}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-3.5 py-1 rounded-sm text-xs transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar className="w-3 h-3" />
              <span>Schedule A Call Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <div onClick={() => handleLinkClick('hero')}>
            <Logo size="md" />
          </div>

          {/* Desktop Links in Center */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.target)}
                className="hover:text-emerald-700 transition-colors py-2 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-md transition-all shadow-2xs cursor-pointer"
              title="Estimate your building construction cost in Bangladesh"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-700" />
              <span>Cost Estimator</span>
            </button>

            <button
              onClick={onScheduleCall}
              className="bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Schedule A Call Now</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCalculator}
              className="p-2 text-emerald-800 bg-emerald-50 rounded-md border border-emerald-200"
              aria-label="Cost Calculator"
            >
              <Calculator className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-700 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.target)}
                className="text-left px-3 py-2.5 text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleCall();
              }}
              className="w-full bg-emerald-700 text-white font-medium py-3 rounded-md text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Schedule A Call Now</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium py-2.5 rounded-md text-sm flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>BD Construction Cost Estimator</span>
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_CONTACT.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
