import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Building, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGlanceClick: () => void;
  onExploreServices: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    title: 'Precision in Design, Perfection in Build',
    subtitle: 'From concept to completion, our unwavering commitment to excellence guarantees superior architectural solutions.',
    caption: 'Modern Multi-Unit Residential Complex | Green Architecture',
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    title: 'Sustainable Living, Climate-Resilient Spaces',
    subtitle: 'Engineered for Bangladesh weather conditions, maximizing natural cross-ventilation and thermal efficiency.',
    caption: 'Luxury Apartment Tower & Commercial Mixed-Use Facility',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    title: 'Earthquake-Resilient Engineering (BNBC 2020)',
    subtitle: 'Meticulously analyzed structural frames that save construction cost while ensuring complete safety.',
    caption: 'Duplex Architectural Villa & Master Urban Landscaping',
  },
];

export const Hero: React.FC<HeroProps> = ({ onGlanceClick, onExploreServices }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="hero" className="relative w-full bg-white">
      {/* 1. Large Hero Banner Carousel */}
      <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden bg-slate-900">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Gentle dark gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-black/25" />
          </div>
        ))}

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-xs transition-all shadow-md hover:scale-105 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-xs transition-all shadow-md hover:scale-105 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Floating Overlay Badge (matching screenshot aesthetic: dark emerald glass badge) */}
        <div className="absolute top-8 sm:top-14 right-4 sm:right-12 md:right-16 z-20 max-w-sm sm:max-w-md bg-emerald-950/85 backdrop-blur-md p-6 sm:p-7 rounded-xl border border-emerald-500/30 shadow-2xl text-white animate-in fade-in duration-500">
          <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Green Architect BD</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 leading-snug">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed mb-4">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
          <div className="flex items-center gap-3 pt-2 border-t border-emerald-800/60 text-xs text-emerald-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>RAJUK &amp; BNBC Certified</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-400" />
              <span>64 Districts</span>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-emerald-500' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Below Hero Button: "Green Architect At A Glance" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4 text-center">
        <button
          onClick={onGlanceClick}
          className="inline-flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span>Green Architect At A Glance</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3. Section: "Best Building Design Company In Bangladesh" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-emerald-700 font-bold text-sm uppercase tracking-wider block mb-2">
                Pioneering Sustainable Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Best Building Design Company In Bangladesh
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <strong className="text-emerald-800 font-semibold">Green Architect</strong>, we take pride in being the best building design company in Bangladesh. We are committed to giving you a safe and green building.
            </p>

            {/* Core Service Bullet Points matching prompt */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1">
                    Affordable Building Plan and Design Consulting Services
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Personalized consultation to bring your vision to life without compromising structural integrity or exceeding your intended budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1">
                    Comprehensive Building Planning and Designing Across Bangladesh
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    End-to-end solutions: Architectural, Structural, Soil Testing, Electrical, Plumbing, and 3D Visualizations with official municipal approval sets.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm px-6 py-3 rounded-md shadow-sm transition-colors cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-slate-500 font-medium">
                ★ 500+ Residential &amp; Commercial Projects Completed
              </div>
            </div>
          </div>

          {/* Right Column: Multi-layer Architectural Renderings Mockup (as shown in screenshot) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Back card: Modern apartment building render */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Apartment Building Design in Bangladesh by Green Architect"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-emerald-300">Modern 8-Story Residential Project</div>
                  <div className="text-sm font-bold">Bashundhara R/A, Dhaka</div>
                </div>
              </div>

              {/* Floating Top-Right Mini Overlay: Interior false ceiling & architectural lighting render */}
              <div className="absolute -top-6 -right-4 sm:-right-8 w-44 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                  alt="Green Architect Interior Lighting & False Ceiling"
                  className="w-full h-28 sm:h-36 object-cover"
                />
                <div className="p-2 bg-slate-900/90 text-[11px] text-white">
                  <span className="text-emerald-400 font-bold block">Smart Lighting &amp; Decor</span>
                  <span className="text-slate-300">Luxury Living Space</span>
                </div>
              </div>

              {/* Floating Badge Bottom Left: Safe & Green Guarantee */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-xl border border-emerald-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% BNBC Code Compliant</div>
                  <div className="text-[11px] text-emerald-700 font-medium">Earthquake &amp; Wind Tested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
