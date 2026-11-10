import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/architectData';
import { X, Check, ArrowRight, ShieldCheck, Layers } from 'lucide-react';

interface ServiceCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onScheduleService: (serviceName: string) => void;
}

export const ServiceCatalogModal: React.FC<ServiceCatalogModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'architectural-design',
  onScheduleService,
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    initialServiceId === 'all' ? 'architectural-design' : initialServiceId
  );

  if (!isOpen) return null;

  const currentService: ServiceItem =
    SERVICES_LIST.find((s) => s.id === selectedId) || SERVICES_LIST[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-emerald-800 text-white p-5 sm:p-6 rounded-t-2xl flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">
              <Layers className="w-4 h-4" />
              <span>Full Service Catalog</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Comprehensive Architectural &amp; Engineering Services
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Layout: Sidebar of Services, Main Service Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 p-6 sm:p-8 gap-6">
          {/* Left Sidebar Service List (4 cols) */}
          <div className="md:col-span-4 space-y-1.5 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">
              Select Service
            </div>
            {SERVICES_LIST.map((svc) => {
              const isSelected = svc.id === selectedId;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedId(svc.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  {svc.name}
                </button>
              );
            })}
          </div>

          {/* Right Service Detail (8 cols) */}
          <div className="md:col-span-8 space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Plan Type: {currentService.planType}
              </span>
              <h4 className="text-2xl font-black text-slate-900">
                {currentService.name}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {currentService.shortDesc}
              </p>
            </div>

            <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-100">
              {currentService.longDesc}
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Key Deliverables &amp; Inclusions:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {currentService.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700 mt-0.5">
                      <Check className="w-3 h-3 stroke-3" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Features */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {currentService.features.map((feat, i) => (
                <span
                  key={i}
                  className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold px-2.5 py-1 rounded"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                BNBC 2020 &amp; RAJUK Code Compliant
              </span>
              <button
                onClick={() => {
                  onClose();
                  onScheduleService(currentService.name);
                }}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-6 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request {currentService.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
