import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/architectData';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    fullName: '',
    phone: '',
    email: '',
    location: '',
    floors: '4 তলা',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Let&apos;s Build Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have A Project Idea In Mind?? Lets Get Started...
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Grid: Left Contact Form, Right Contact Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Comprehensive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Have A Project Idea In Mind?? Lets Get Started...
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out your plot details below. Our senior structural engineer will get in touch with you within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">
                  Thank You, {formData.title} {formData.fullName || 'Valued Client'}!
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="font-bold">{formData.floors}</strong> construction at <strong className="font-bold">{formData.location || 'your location'}</strong> has been received. Our team will contact you at <span className="font-semibold">{formData.phone || COMPANY_CONTACT.phoneDisplay}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      title: 'Mr.',
                      fullName: '',
                      phone: '',
                      email: '',
                      location: '',
                      floors: '4 তলা',
                      message: '',
                    });
                  }}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-md transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title & Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-24 px-3 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 bg-slate-50"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Engr.">Engr.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariqul Islam"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="flex-1 px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+8801XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="abc@xyz.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Project Location / Plot Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address, Road, Lane, Area (e.g. Road #3, Mirpur DOHS, Dhaka)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  />
                </div>

                {/* কত তলা করতে চাচ্ছেন? * / Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    কত তলা করতে চাচ্ছেন? / Project Specifications <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                    {['৩ তলা', '৪ তলা', '৫ তলা', '৬ তলা+ / ডুপ্লেক্স'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, floors: opt })}
                        className={`py-2 px-3 text-xs font-bold rounded-md border transition-all cursor-pointer ${
                          formData.floors === opt
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-2xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={4}
                    placeholder="জমির পরিমাণ (কাঠা/শতাংশ), রাস্তার প্রশস্ততা এবং আপনার বিশেষ চাহিদা সম্পর্কে লিখুন..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  />
                </div>

                {/* Green 'Send Inquiry' Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-bold text-sm py-3 px-6 rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Us Card + Pinned Map Visualization */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Us Card */}
            <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="text-xl font-extrabold text-slate-900 border-b border-emerald-200/70 pb-3">
                Contact Us
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-200/60 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Helpline / WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_CONTACT.phone}`}
                      className="font-bold text-slate-900 hover:text-emerald-700 text-base"
                    >
                      {COMPANY_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-200/60 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Official Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="font-semibold text-slate-800 hover:text-emerald-700 text-sm"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Dhaka Head Office */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-200/60 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Dhaka Head Office
                    </span>
                    <p className="text-slate-800 font-medium text-xs leading-relaxed">
                      {COMPANY_CONTACT.headOffice}
                    </p>
                  </div>
                </div>

                {/* Kushtia Branch Office */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-200/60 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Regional Branch Office
                    </span>
                    <p className="text-slate-800 font-medium text-xs leading-relaxed">
                      {COMPANY_CONTACT.branchOffice}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-emerald-200/60 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_CONTACT.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Pinned Map Visualization (as shown in user screenshot: styled map with Agargaon / Liberation War Museum / Apon Height location) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm">
              <div className="p-3 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  Dhaka Corporate Office Map
                </span>
                <span className="text-[11px] text-slate-500">Agargaon / Mirpur Link</span>
              </div>

              {/* Graphic Map Canvas with Landmarks */}
              <div className="relative aspect-16/10 w-full bg-[#e8ece9] overflow-hidden">
                <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Base map roads */}
                  <rect width="500" height="300" fill="#f1f5f3" />

                  {/* Parks / Green Zones */}
                  <path d="M 0,0 L 150,0 L 120,80 L 0,100 Z" fill="#dcfce7" />
                  <path d="M 380,180 L 500,160 L 500,300 L 410,300 Z" fill="#dcfce7" />

                  {/* Water Canal / Lake */}
                  <path d="M 320,0 C 330,80 370,120 400,160 L 440,160 C 410,110 380,70 370,0 Z" fill="#bae6fd" />

                  {/* Primary Highways (Mirpur Road & Rokeya Sarani) */}
                  <line x1="0" y1="180" x2="500" y2="120" stroke="#fcd34d" strokeWidth="12" />
                  <line x1="0" y1="180" x2="500" y2="120" stroke="#ffffff" strokeWidth="8" />

                  {/* Secondary Roads */}
                  <line x1="160" y1="0" x2="220" y2="300" stroke="#ffffff" strokeWidth="10" />
                  <line x1="160" y1="0" x2="220" y2="300" stroke="#cbd5e1" strokeWidth="8" />

                  <line x1="80" y1="100" x2="380" y2="280" stroke="#ffffff" strokeWidth="8" />
                  <line x1="80" y1="100" x2="380" y2="280" stroke="#e2e8f0" strokeWidth="6" />

                  {/* Road 3 (Apon Height Access Road) */}
                  <line x1="200" y1="150" x2="320" y2="150" stroke="#ffffff" strokeWidth="7" />
                  <line x1="200" y1="150" x2="320" y2="150" stroke="#cbd5e1" strokeWidth="5" />

                  {/* Landmarks */}
                  {/* Liberation War Museum */}
                  <rect x="360" y="50" width="110" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                  <circle cx="375" cy="70" r="5" fill="#ef4444" />
                  <text x="385" y="68" fill="#1e293b" fontSize="9" fontWeight="bold">
                    Liberation War
                  </text>
                  <text x="385" y="80" fill="#64748b" fontSize="8">
                    Museum
                  </text>

                  {/* National Institute of Neurosciences */}
                  <rect x="250" y="230" width="130" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                  <circle cx="265" cy="250" r="5" fill="#3b82f6" />
                  <text x="275" y="248" fill="#1e293b" fontSize="9" fontWeight="bold">
                    National Institute
                  </text>
                  <text x="275" y="260" fill="#64748b" fontSize="8">
                    Of Neurosciences
                  </text>

                  {/* Pinned Green Architect Location (Apon Height, Road No. 3) */}
                  <g transform="translate(255, 125)">
                    {/* Pulsing ring */}
                    <circle cx="0" cy="0" r="18" fill="#22c55e" fillOpacity="0.25">
                      <animate attributeName="r" values="12;24;12" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Pin body */}
                    <path
                      d="M 0,-24 C -8,-24 -14,-18 -14,-10 C -14,2 0,16 0,16 C 0,16 14,2 14,-10 C 14,-18 8,-24 0,-24 Z"
                      fill="#15803d"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <circle cx="0" cy="-12" r="5" fill="#ffffff" />
                    {/* Tooltip Card */}
                    <rect x="-70" y="-56" width="140" height="26" rx="4" fill="#0f172a" fillOpacity="0.95" />
                    <text x="0" y="-39" fill="#4ade80" fontSize="9" fontWeight="bold" textAnchor="middle">
                      GREEN ARCHITECT BD
                    </text>
                  </g>
                </svg>

                {/* Open in Google Maps Link */}
                <div className="absolute bottom-2 right-2 bg-white/95 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs hover:text-emerald-700 transition-colors">
                  House #27A Apon hight, Dhaka-1207
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
