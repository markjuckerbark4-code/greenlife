import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/architectData';
import { Check, Layers, ArrowUpRight, Compass, Maximize2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceModal?: (serviceId: string) => void;
  onScheduleCall: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceModal,
  onScheduleCall,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('architectural-design');
  const [showFullPlanModal, setShowFullPlanModal] = useState<boolean>(false);

  const activeService =
    SERVICES_LIST.find((s) => s.id === activeTabId) || SERVICES_LIST[0];

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Engineering &amp; Aesthetics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services We Provide
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Segmented Control / Tab Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {SERVICES_LIST.map((service) => {
            const isActive = service.id === activeTabId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md scale-102 ring-2 ring-emerald-600/30'
                    : 'bg-white text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 border border-slate-200/90'
                }`}
              >
                {service.name}
              </button>
            );
          })}
        </div>

        {/* Content Box: Left Architectural Plan Graphic, Right Text Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 lg:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Architectural Floor Plan Graphic (as shown in screenshot) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md bg-slate-50 border-2 border-emerald-100 rounded-xl p-4 shadow-inner group">
                {/* Simulated High-Res Architectural Blueprint / Color-coded floor plan */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white border border-slate-200 p-2">
                  <svg
                    viewBox="0 0 500 500"
                    className="w-full h-full text-slate-800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Grid Background */}
                    <defs>
                      <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="500" height="500" fill="url(#smallGrid)" />

                    {/* Outer Boundary Wall */}
                    <rect
                      x="25"
                      y="25"
                      width="450"
                      height="450"
                      stroke="#0f172a"
                      strokeWidth="7"
                      fill="#fafafa"
                    />

                    {/* Unit A (Left Zone) - Soft pastel blue/green zones */}
                    <rect x="35" y="35" width="200" height="200" fill="#ecfdf5" stroke="#15803d" strokeWidth="2.5" />
                    <text x="75" y="75" fill="#15803d" fontWeight="bold" fontSize="13">
                      MASTER BED
                    </text>
                    <text x="75" y="93" fill="#64748b" fontSize="11">
                      14′-0″ × 12′-6″
                    </text>

                    {/* Master Bath */}
                    <rect x="160" y="35" width="75" height="90" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                    <text x="175" y="80" fill="#0369a1" fontWeight="bold" fontSize="11">
                      TOILET
                    </text>

                    {/* Balcony A */}
                    <rect x="35" y="35" width="40" height="80" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                    <text x="40" y="80" fill="#b45309" fontWeight="bold" fontSize="9" transform="rotate(-90 40 80)">
                      VERANDAH
                    </text>

                    {/* Living & Dining Area */}
                    <rect x="35" y="240" width="250" height="150" fill="#fdf4ff" stroke="#a855f7" strokeWidth="2" />
                    <text x="80" y="310" fill="#7e22ce" fontWeight="bold" fontSize="14">
                      LIVING / DINING HALL
                    </text>
                    <text x="80" y="330" fill="#64748b" fontSize="11">
                      18′-6″ × 15′-0″
                    </text>

                    {/* Kitchen */}
                    <rect x="35" y="395" width="130" height="80" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                    <text x="65" y="440" fill="#b91c1c" fontWeight="bold" fontSize="12">
                      KITCHEN
                    </text>
                    <text x="65" y="456" fill="#64748b" fontSize="10">
                      9′-0″ × 7′-6″
                    </text>

                    {/* Central Core: Lift & Staircase */}
                    <rect x="240" y="35" width="100" height="190" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
                    <text x="255" y="100" fill="#1e293b" fontWeight="bold" fontSize="12">
                      STAIR LOBBY
                    </text>
                    {/* Stair steps lines */}
                    <line x1="240" y1="120" x2="340" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="240" y1="135" x2="340" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="240" y1="150" x2="340" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="240" y1="165" x2="340" y2="165" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="240" y1="180" x2="340" y2="180" stroke="#94a3b8" strokeWidth="1.5" />

                    {/* Passenger Elevator Lift */}
                    <rect x="255" y="45" width="70" height="60" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
                    <line x1="255" y1="45" x2="325" y2="105" stroke="#475569" strokeWidth="1.5" />
                    <line x1="325" y1="45" x2="255" y2="105" stroke="#475569" strokeWidth="1.5" />
                    <text x="275" y="80" fill="#0f172a" fontWeight="bold" fontSize="11">
                      LIFT
                    </text>

                    {/* Unit B (Right Zone) - Bed 2 & Guest */}
                    <rect x="345" y="35" width="130" height="180" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
                    <text x="365" y="80" fill="#15803d" fontWeight="bold" fontSize="12">
                      BEDROOM 02
                    </text>
                    <text x="365" y="100" fill="#64748b" fontSize="10">
                      12′-0″ × 12′-0″
                    </text>

                    {/* Bedroom 03 */}
                    <rect x="290" y="240" width="185" height="160" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
                    <text x="320" y="310" fill="#854d0e" fontWeight="bold" fontSize="13">
                      BEDROOM 03
                    </text>
                    <text x="320" y="330" fill="#64748b" fontSize="11">
                      13′-0″ × 11′-6″
                    </text>

                    {/* Common Bath & Servant Room */}
                    <rect x="360" y="405" width="115" height="70" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                    <text x="385" y="445" fill="#334155" fontWeight="bold" fontSize="10">
                      COMMON WC
                    </text>

                    {/* Column Blocks in Solid Black */}
                    <rect x="25" y="25" width="16" height="16" fill="#0f172a" />
                    <rect x="235" y="25" width="16" height="16" fill="#0f172a" />
                    <rect x="340" y="25" width="16" height="16" fill="#0f172a" />
                    <rect x="459" y="25" width="16" height="16" fill="#0f172a" />
                    <rect x="25" y="235" width="16" height="16" fill="#0f172a" />
                    <rect x="235" y="235" width="16" height="16" fill="#0f172a" />
                    <rect x="340" y="235" width="16" height="16" fill="#0f172a" />
                    <rect x="459" y="235" width="16" height="16" fill="#0f172a" />
                    <rect x="25" y="459" width="16" height="16" fill="#0f172a" />
                    <rect x="175" y="459" width="16" height="16" fill="#0f172a" />
                    <rect x="340" y="459" width="16" height="16" fill="#0f172a" />
                    <rect x="459" y="459" width="16" height="16" fill="#0f172a" />

                    {/* North Symbol Arrow */}
                    <circle cx="435" cy="65" r="18" fill="white" stroke="#0f172a" strokeWidth="1.5" />
                    <path d="M435 52L440 68H430L435 52Z" fill="#dc2626" />
                    <text x="431" y="78" fill="#0f172a" fontWeight="bold" fontSize="9">
                      N
                    </text>
                  </svg>

                  {/* Zoom button */}
                  <button
                    onClick={() => setShowFullPlanModal(true)}
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-slate-800 p-2 rounded-md shadow-md border border-slate-200 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                    title="View Enlarged Floor Plan"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Enlarge Plan</span>
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
                  <span className="font-semibold text-emerald-800">
                    {activeService.planType}
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-slate-400" />
                    100% RAJUK BNBC Valid
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Section Text & Deliverables */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Specialized Domain Service</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeService.name}
              </h3>

              {/* Formatted long description highlighting key terms */}
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line">
                <p>
                  As a{' '}
                  <strong className="text-emerald-800 font-bold">
                    top-ranked architectural design company in Bangladesh
                  </strong>
                  , we craft{' '}
                  <span className="text-emerald-700 font-medium">
                    thoughtful architectural designs
                  </span>{' '}
                  that balance form, function, and aesthetics.
                </p>
                <p>
                  Our{' '}
                  <span className="font-semibold text-slate-800">
                    architectural design services
                  </span>{' '}
                  cover residential, commercial, and mixed-use projects, guided by skilled{' '}
                  <span className="font-semibold text-slate-800">
                    architectural designers
                  </span>{' '}
                  and consultants. As a trusted architectural design consultancy in Dhaka, we
                  transform ideas into practical, elegant spaces through concept development,
                  planning, detailing, and 3D visualization.
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  Whether you need{' '}
                  <span className="text-emerald-800 font-medium">
                    residential architectural design
                  </span>
                  ,{' '}
                  <span className="text-emerald-800 font-medium">
                    duplex architectural design
                  </span>
                  , or{' '}
                  <strong className="text-slate-800">
                    complete architectural design &amp; construction
                  </strong>
                  , our team ensures every design reflects your lifestyle, brand, and environment
                  supported with professional{' '}
                  <span className="text-emerald-700 font-medium">
                    3D visualization
                  </span>
                  .
                </p>
              </div>

              {/* Service Highlights Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What You Receive In This Service:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {activeService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-700">
                        <Check className="w-3 h-3 stroke-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onScheduleCall}
                  className="bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Consult An Architect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                {onSelectServiceModal && (
                  <button
                    onClick={() => onSelectServiceModal(activeService.id)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-md transition-colors cursor-pointer"
                  >
                    View Service Details
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button: "View All Of Our Services" (as in screenshot) */}
        <div className="text-center">
          <button
            onClick={() => {
              if (onSelectServiceModal) {
                onSelectServiceModal('all');
              } else {
                onScheduleCall();
              }
            }}
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-8 py-3 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>View All Of Our Services</span>
          </button>
        </div>
      </div>

      {/* Enlarged Floor Plan Modal */}
      {showFullPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Typical Architectural Floor Plan Blueprint
                </h3>
                <p className="text-xs text-slate-500">
                  Green Architect Certified 2-Unit Residential Layout with Lift &amp; Dual Stairway
                </p>
              </div>
              <button
                onClick={() => setShowFullPlanModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="py-4 flex justify-center">
              <div className="w-full max-w-lg aspect-square bg-slate-50 border border-slate-200 rounded-lg p-2">
                {/* Visual Floor Plan */}
                <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
                  <rect width="500" height="500" fill="#f8fafc" />
                  <rect x="25" y="25" width="450" height="450" stroke="#0f172a" strokeWidth="8" fill="#ffffff" />
                  <rect x="35" y="35" width="200" height="200" fill="#ecfdf5" stroke="#15803d" strokeWidth="2.5" />
                  <text x="55" y="100" fill="#15803d" fontWeight="bold" fontSize="16">
                    MASTER BED 14′-0″ × 12′-6″
                  </text>
                  <rect x="35" y="240" width="250" height="150" fill="#fdf4ff" stroke="#a855f7" strokeWidth="2" />
                  <text x="65" y="310" fill="#7e22ce" fontWeight="bold" fontSize="16">
                    LIVING / DINING 18′-6″ × 15′-0″
                  </text>
                  <rect x="240" y="35" width="100" height="190" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
                  <text x="255" y="120" fill="#1e293b" fontWeight="bold" fontSize="13">
                    STAIR &amp; LIFT
                  </text>
                  <rect x="345" y="35" width="130" height="180" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
                  <text x="360" y="100" fill="#15803d" fontWeight="bold" fontSize="13">
                    BED 02 (12′×12′)
                  </text>
                  <rect x="290" y="240" width="185" height="160" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
                  <text x="315" y="310" fill="#854d0e" fontWeight="bold" fontSize="14">
                    BED 03 (13′×11′6″)
                  </text>
                  <rect x="35" y="395" width="130" height="80" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                  <text x="65" y="440" fill="#b91c1c" fontWeight="bold" fontSize="13">
                    KITCHEN
                  </text>
                  <rect x="360" y="405" width="115" height="70" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                  <text x="380" y="445" fill="#334155" fontWeight="bold" fontSize="12">
                    TOILETS
                  </text>
                </svg>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Customized floor plans prepared according to your land shape &amp; orientation.
              </span>
              <button
                onClick={() => {
                  setShowFullPlanModal(false);
                  onScheduleCall();
                }}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2 rounded-md"
              >
                Request Custom Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
