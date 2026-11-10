import React from 'react';
import { PhoneCall, Compass, Trophy, ArrowRight, Users, Eye, Sparkles } from 'lucide-react';

interface ReadyToBuildProps {
  onScheduleCall: () => void;
  onOpenCard?: (cardTitle: string) => void;
}

export const ReadyToBuild: React.FC<ReadyToBuildProps> = ({ onScheduleCall, onOpenCard }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-emerald-950 text-white overflow-hidden">
      {/* Subtle blueprint grid overlay in background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-800/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* Dynamic Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-700/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Architectural Consultancy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready To Build Your Dream House? <br />
            <span className="text-emerald-400">Let&apos;s Get Started.</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid: Left 3 Action Steps, Right 3 Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: 3 Actionable Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Step 1: Initiate a strategy Session */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-emerald-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/80 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    1. Initiate a Strategy Session
                  </h3>
                  <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed">
                    Book an in-person or virtual consultation with our senior civil engineer and principal architect to discuss your land size, budget, and vision.
                  </p>
                </div>
              </div>

              {/* Step 2: Design & Planning */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-emerald-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/80 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    2. Design &amp; Planning
                  </h3>
                  <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed">
                    We deliver customized architectural floor plans, 3D elevations, structural calculations, and complete municipal approval drawing sets.
                  </p>
                </div>
              </div>

              {/* Step 3: Execution & Project Delivery */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-emerald-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/80 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    3. Execution &amp; Project Delivery
                  </h3>
                  <p className="text-emerald-100/75 text-xs sm:text-sm leading-relaxed">
                    Full Bill of Quantities (BOQ), material guidance, contractor vetting, and periodic on-site engineering supervision until handover.
                  </p>
                </div>
              </div>
            </div>

            {/* Green 'Schedule A Call Now' CTA Button */}
            <div className="pt-2">
              <button
                onClick={onScheduleCall}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>Schedule A Call Now</span>
                <ArrowRight className="w-4 h-4 stroke-3" />
              </button>
            </div>
          </div>

          {/* Right Side: Three Distinct Product Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Family consultation in architect office */}
            <div
              onClick={() => onOpenCard?.('3-Story Building Plan & Design Cost')}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-emerald-500/20 shadow-xl cursor-pointer hover:border-emerald-400 transition-all flex flex-col justify-end min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Family consulting with Green Architect team"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />

              <div className="relative p-4 z-10">
                <div className="w-7 h-7 rounded-md bg-emerald-500/90 text-slate-950 flex items-center justify-center mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white leading-snug mb-1">
                  3-Story Building Plan &amp; Design Cost
                </h4>
                <p className="text-[11px] text-emerald-200/90 line-clamp-2">
                  Family consultation &amp; budget planning for duplexes and multi-unit homes.
                </p>
              </div>
            </div>

            {/* Card 2: People working in drafting studio */}
            <div
              onClick={() => onOpenCard?.('Architectural Drafting Studio')}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-emerald-500/20 shadow-xl cursor-pointer hover:border-emerald-400 transition-all flex flex-col justify-end min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                alt="Architects working in drafting CAD studio"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />

              <div className="relative p-4 z-10">
                <div className="w-7 h-7 rounded-md bg-emerald-500/90 text-slate-950 flex items-center justify-center mb-2">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white leading-snug mb-1">
                  Precision CAD Studio &amp; 3D Studio
                </h4>
                <p className="text-[11px] text-emerald-200/90 line-clamp-2">
                  Advanced structural modeling using ETABS and SAFE for BNBC earthquake compliance.
                </p>
              </div>
            </div>

            {/* Card 3: Site engineering supervision */}
            <div
              onClick={() => onOpenCard?.('On-Site Construction Quality Audits')}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-emerald-500/20 shadow-xl cursor-pointer hover:border-emerald-400 transition-all flex flex-col justify-end min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=600&q=80"
                alt="Engineers inspecting building construction site"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />

              <div className="relative p-4 z-10">
                <div className="w-7 h-7 rounded-md bg-emerald-500/90 text-slate-950 flex items-center justify-center mb-2">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white leading-snug mb-1">
                  Site Supervision &amp; Quality Audits
                </h4>
                <p className="text-[11px] text-emerald-200/90 line-clamp-2">
                  Checking rebar spacing, concrete slump, and beam-column joint integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
