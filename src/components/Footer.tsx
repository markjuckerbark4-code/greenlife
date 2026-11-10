import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Logo } from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAdmin,
}) => {
  const { companyContact } = useAdminData();
  const quickLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Social Work', target: 'social-work' },
    { label: 'Blog', target: 'blog' },
    { label: 'Career', target: 'career' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="bg-emerald-50/70 border-t-4 border-emerald-600 text-slate-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-emerald-200/60">
          {/* Left Column: Logo & Company Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              Green Architect is a leading architectural firm in Bangladesh, known for designing innovative, sustainable, and functional spaces that enhance the lives of our clients. Our company is dedicated to providing world-class architectural design solutions that meet each client&apos;s unique needs.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800">
              Founder &amp; Principal: Engr. Tutul | IEB &amp; RAJUK Enlisted
            </div>
          </div>

          {/* Center Column: Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.target)}
                  className="text-left text-slate-600 hover:text-emerald-700 transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onOpenPrivacy}
                className="text-left text-slate-600 hover:text-emerald-700 transition-colors py-1 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={onOpenTerms}
                className="text-left text-slate-600 hover:text-emerald-700 transition-colors py-1 cursor-pointer"
              >
                Terms And Conditions
              </button>
              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="text-left text-emerald-800 font-bold hover:text-emerald-950 transition-colors py-1 cursor-pointer flex items-center gap-1"
                >
                  <span>🔐 Admin Portal</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Contact Us info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${companyContact.phone}`}
                  className="font-bold text-slate-900 hover:text-emerald-700"
                >
                  {companyContact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyContact.email}`}
                  className="hover:text-emerald-700"
                >
                  {companyContact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>{companyContact.headOffice}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>{companyContact.branchOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Icons & Copyright */}
        <div className="pt-8 flex flex-col items-center justify-center space-y-4">
          {/* Social Icons at the very bottom */}
          <div className="flex items-center gap-5 text-slate-600">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-300 shadow-2xs transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href={companyContact.youtubeChannel}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-slate-600 hover:text-red-600 hover:border-red-300 shadow-2xs transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-300 shadow-2xs transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-slate-600 hover:text-black hover:border-slate-400 shadow-2xs transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.08 2.34 2.29 1.06.2 2.21-.06 2.98-.82.68-.64.99-1.58.99-2.5V.02z" />
              </svg>
            </a>
          </div>

          {/* Final Copyright Text matching screenshot */}
          <p className="text-xs text-slate-500 font-medium">
            All Rights Reserved ©2025 Green Architect.
          </p>
        </div>
      </div>
    </footer>
  );
};
