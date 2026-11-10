import React from 'react';
import { X, Award, CheckCircle2, Building, ShieldCheck, Phone, MapPin, Users } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/architectData';
import { Logo } from './Logo';

interface GlanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleCall: () => void;
}

export const GlanceModal: React.FC<GlanceModalProps> = ({
  isOpen,
  onClose,
  onScheduleCall,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-t-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            <span>Company Profile &amp; Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Green Architect At A Glance
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl">
            Pioneering sustainable, earthquake-safe, and green building design solutions throughout Bangladesh.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">508+</div>
              <div className="text-xs font-bold text-slate-600">Projects Delivered</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">709+</div>
              <div className="text-xs font-bold text-slate-600">Happy Families</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">64</div>
              <div className="text-xs font-bold text-slate-600">Districts Served</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-2xl font-black text-emerald-800">120K+</div>
              <div className="text-xs font-bold text-slate-600">YouTube Followers</div>
            </div>
          </div>

          {/* Mission & Philosophy */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Our Founding Vision: Human, Nature, Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded by renowned <strong className="text-slate-900">Civil Engineer Tutul</strong>, Green Architect was established with a singular objective: to bring ethical, transparent, and earthquake-resilient architectural engineering to everyday homeowners and commercial developers across Bangladesh.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We reject wasteful over-design. By utilizing cutting-edge finite-element structural modeling (ETABS &amp; SAFE), accurate geotechnical soil investigation, and biophilic natural ventilation, we regularly reduce construction material expenditures by 15% to 25% without sacrificing a single degree of safety.
            </p>
          </div>

          {/* Why We Are Trusted */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Engineering &amp; Legal Compliance Standards
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>BNBC 2020 Seismic Code Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>RAJUK, CDA, KDA, RDA Approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Digital Total Station Topographic Survey</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Certified Subsoil Boring Laboratory Reports</span>
              </div>
            </div>
          </div>

          {/* Office Network */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-emerald-100 bg-white">
              <span className="font-bold text-emerald-800 block mb-1">
                Dhaka Corporate Head Office
              </span>
              <p className="text-slate-600">{COMPANY_CONTACT.headOffice}</p>
            </div>
            <div className="p-4 rounded-xl border border-emerald-100 bg-white">
              <span className="font-bold text-emerald-800 block mb-1">
                Kushtia Regional Office
              </span>
              <p className="text-slate-600">{COMPANY_CONTACT.branchOffice}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Hotline: {COMPANY_CONTACT.phoneDisplay}</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onScheduleCall();
              }}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-6 py-2.5 rounded-md shadow-sm transition-all"
            >
              Schedule Consultation Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
