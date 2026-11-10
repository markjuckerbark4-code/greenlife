import React from 'react';
import { CheckSquare, Cog, Building2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Prominent Statistic Counter Widget with ambient architectural background */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 text-white p-8 sm:p-10">
              {/* Background architectural image */}
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Green Architect Interior"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-950/70" />

              <div className="relative z-10 space-y-8">
                {/* Top Row: 508+ Project Complete and 1+ Project Ongoing */}
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10 text-center">
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight mb-1">
                      508+
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wide">
                      Project Complete
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xs border border-white/10 text-center">
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight mb-1">
                      1+
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wide">
                      Project Ongoing
                    </div>
                  </div>
                </div>

                {/* Bottom Center: 709+ Satisfied Clients */}
                <div className="p-6 rounded-xl bg-emerald-950/70 backdrop-blur-sm border border-emerald-500/30 text-center">
                  <div className="text-4xl sm:text-5xl font-black text-emerald-300 tracking-tight mb-1">
                    709+
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Satisfied Clients
                  </div>
                  <div className="text-[11px] text-emerald-200/80 mt-1">
                    Across Dhaka, Chittagong, Kushtia &amp; Nationwide
                  </div>
                </div>

                <div className="text-center text-xs text-slate-400 font-medium pt-2">
                  ✓ 100% Certified Structural Safety Record
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Main Heading & 3 Benefit Points */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
                Our Distinct Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Choose Our Building Design Services?
              </h2>
            </div>

            <div className="space-y-6">
              {/* Point 1: Proven Track Record of Success */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    Proven Track Record of Success
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    With years of experience as a trusted building design and construction company, our portfolio showcases successful projects delivered on time and within budget. We&apos;ve earned a reputation for reliability, precision, and client satisfaction—qualities that make us a preferred building design company in Bangladesh.
                  </p>
                </div>
              </div>

              {/* Point 2: Complete and Smooth Project Delivery */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                  <Cog className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    Complete and Smooth Project Delivery
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Green Architect offers a comprehensive, hassle-free experience. As a one-stop building plan and design firm, we manage every phase with care, providing integrated building plan and design consulting. Our process ensures seamless coordination, timely execution, and a final product that exceeds expectations.
                  </p>
                </div>
              </div>

              {/* Point 3: Customized Solutions for Every Project */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    Customized Solutions for Every Project
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every space tells a different story. We tailor each project to meet your unique goals. Whether you&apos;re looking to design a building plan for a private residence or a commercial development, our team brings expertise in building planning and designing to create solutions that balance aesthetics, function, and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
