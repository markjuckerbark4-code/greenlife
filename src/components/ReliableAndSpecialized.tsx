import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Building2, Trees } from 'lucide-react';

interface ReliableAndSpecializedProps {
  onScheduleCall: () => void;
}

export const ReliableAndSpecialized: React.FC<ReliableAndSpecializedProps> = ({ onScheduleCall }) => {
  return (
    <div className="space-y-16 py-10 bg-white">
      {/* 1. Reliable Building Design Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden border border-emerald-100 bg-gradient-to-br from-emerald-50/60 via-white to-slate-50 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Layout with Floating Bengali Card Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-white aspect-16/10">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Corporate Building Architecture Bangladesh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20" />
              </div>

              {/* Smaller Graphic Card Overlay on Left with Bengali Text */}
              <div className="absolute -bottom-4 -left-2 sm:left-4 max-w-[280px] sm:max-w-[320px] bg-emerald-900/95 backdrop-blur-md text-white p-4 rounded-xl shadow-xl border border-emerald-400/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wider text-emerald-300 uppercase">
                    Commercial Excellence
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-white leading-snug">
                  আপনার ব্যবসার জন্য সেরা কর্পোরেট ভবন ডিজাইন করুন
                </h4>
                <p className="text-[11px] text-emerald-100/80 mt-1">
                  সর্বাধুনিক কাঁচের ফেসাড, অগ্নিনির্বাপক ব্যবস্থা ও রাজউক অনুমোদন নিশ্চিতকরণ।
                </p>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-6 space-y-4 pt-4 lg:pt-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>Trusted Across Bangladesh</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Reliable Building Design Company for Customized Projects
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong className="text-emerald-800 font-semibold">Green Architect</strong>, we believe great architecture begins with a deep commitment to people, place, and the planet.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                We combine architectural vision with hard-hat structural engineering. Whether navigating challenging soil in low-lying delta areas or engineering earthquake-dampened multi-story structures in urban Dhaka, our multidisciplinary team guarantees transparency, structural safety, and timely delivery.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Custom Floor Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Cost-Effective Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero Structural Failure</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>On-Time Rajuk Approval</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized Design Services Cards (Two side-by-side cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Expert Building Designers and Planners for Residential & Commercial Projects */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>Urban &amp; Residential Architecture</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                Expert Building Designers and Planners for Residential &amp; Commercial Projects
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                From refined private homes to high-performing commercial complexes, Green Architect brings the same level of creativity and precision to every project. Our diverse portfolio showcases our ability as both building designers and planners with a deep understanding of municipal guidelines across Bangladesh.
              </p>

              {/* Inside Dual Sub-Cards with Building Visualizations & Bengali Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Sub-card 1 */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                    alt="Residential Duplex Design"
                    className="w-full h-36 object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] font-bold text-emerald-400 block">
                      রেসিডেন্সিয়াল স্পেস
                    </span>
                    <span className="text-xs font-bold leading-tight">
                      আপনার স্বপ্নের বাড়ি ও ডুপ্লেক্স
                    </span>
                  </div>
                </div>

                {/* Sub-card 2 */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80"
                    alt="Commercial Plaza Architecture"
                    className="w-full h-36 object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] font-bold text-emerald-400 block">
                      কমার্শিয়াল প্রজেক্ট
                    </span>
                    <span className="text-xs font-bold leading-tight">
                      অফিস ও আধুনিক শপিং কমপ্লেক্স
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onScheduleCall}
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 font-bold text-xs py-2.5 rounded-md transition-colors cursor-pointer"
              >
                Book Residential / Commercial Consultation
              </button>
            </div>
          </div>

          {/* Right Card: Coastal Road and Sea View with Leading Building Design and Construction */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <Trees className="w-4 h-4" />
                <span>Resort &amp; Coastal Architecture</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                Leading Building Design and Construction Across All Regions
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Specialized in climate-adaptive construction for coastal zones (Cox&apos;s Bazar, Chittagong, Kuakata) and riverine landscapes. We design high-durability structures resistant to saline corrosion, monsoonal wind forces, and humidity.
              </p>
            </div>

            {/* Coastal Road & Sea Image Banner with Bengali Overlay */}
            <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                alt="Coastal Road, Sea, and Eco Resort Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-emerald-800/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-sm inline-block mb-1">
                  বাড়ি নির্মাণে গ্রীন আর্কিটেক্ট এর স্মার্ট প্ল্যানিং
                </div>
                <div className="text-xs text-emerald-200">
                  ইকোলজিক্যাল রিসোর্ট, রিভারভিউ ভিলা এবং উপকূলীয় টেকসই নির্মাণ
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>✓ Saline Resistant Concrete Mix Design</span>
                <span>✓ Eco-Resort Master Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
