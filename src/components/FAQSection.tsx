import React, { useState } from 'react';
import { FAQS_LIST, FAQItem } from '../data/architectData';
import { ChevronDown, HelpCircle, Check, DollarSign } from 'lucide-react';
import { Logo } from './Logo';

export const FAQSection: React.FC = () => {
  // Default selected question as highlighted in green in user breakdown and screenshot:
  // "How much can it cost to build a four-story house with two units?"
  const [selectedFaqId, setSelectedFaqId] = useState<string>('faq-2');

  const selectedItem: FAQItem =
    FAQS_LIST.find((f) => f.id === selectedFaqId) || FAQS_LIST[1];

  // Map each FAQ to an architectural image context
  const getContextImage = (faqId: string) => {
    switch (faqId) {
      case 'faq-1':
        return {
          img: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80',
          title: 'Structural Construction Site in Dhaka',
          caption: 'Civil framing and slab reinforcement work',
        };
      case 'faq-2':
        return {
          img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
          title: 'Architectural Drafting & BOQ Costing Studio',
          caption: 'Senior engineers estimating 4-story structural loads',
        };
      case 'faq-3':
        return {
          img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
          title: 'Green Architect Head Office, Dhaka',
          caption: 'House #27A Apon hight, Road No. 3, Dhaka-1207',
        };
      case 'faq-4':
        return {
          img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
          title: 'Modern 3-Story Residential Duplex',
          caption: 'Cost-optimized foundation & modern elevation',
        };
      default:
        return {
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
          title: 'Complete Architectural Drawings & Supervision',
          caption: 'Turnkey architectural consultancy in Bangladesh',
        };
    }
  };

  const contextData = getContextImage(selectedItem.id);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Clear Costing &amp; Expert Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Layout: Left Accordion, Right Contextual Photo with Green Architect Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Accordion FAQ List */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS_LIST.map((faq) => {
              const isOpen = faq.id === selectedFaqId;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-600 ring-2 ring-emerald-600/20 shadow-md bg-white'
                      : 'border-slate-200/90 hover:border-emerald-300 bg-slate-50/50'
                  }`}
                >
                  {/* Header Button: Highlighted in green when active as shown in screenshot */}
                  <button
                    onClick={() => setSelectedFaqId(faq.id)}
                    className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                      isOpen
                        ? 'bg-emerald-700 text-white font-bold'
                        : 'text-slate-800 hover:text-emerald-800 font-semibold'
                    }`}
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-white' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white border-t border-emerald-100 text-slate-700 text-sm leading-relaxed space-y-4 animate-in fade-in duration-200">
                      <p className="whitespace-pre-line">{faq.answer}</p>

                      {/* Cost detail breakdown badge if available */}
                      {faq.costDetail && (
                        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                            <DollarSign className="w-4 h-4 text-emerald-700" />
                            <span>Quick Estimation Summary (Bangladesh Market Rate)</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                            <div className="bg-white p-2 rounded border border-emerald-100">
                              <span className="text-[10px] text-slate-500 block">Estimated Rate</span>
                              <span className="font-bold text-emerald-800">
                                {faq.costDetail.estimatedSqftRate}
                              </span>
                            </div>
                            <div className="bg-white p-2 rounded border border-emerald-100">
                              <span className="text-[10px] text-slate-500 block">Structure (Civil)</span>
                              <span className="font-bold text-slate-800">
                                {faq.costDetail.civilRate}
                              </span>
                            </div>
                            <div className="bg-white p-2 rounded border border-emerald-100">
                              <span className="text-[10px] text-slate-500 block">Finishing</span>
                              <span className="font-bold text-slate-800">
                                {faq.costDetail.finishingRate}
                              </span>
                            </div>
                            <div className="bg-white p-2 rounded border border-emerald-100">
                              <span className="text-[10px] text-slate-500 block">Estimated Time</span>
                              <span className="font-bold text-slate-800">
                                {faq.costDetail.timeRequired}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Architectural Photo Corresponding to Chosen Topic with Watermark Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              <div className="aspect-4/3 sm:aspect-square w-full">
                <img
                  src={contextData.img}
                  alt={contextData.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

              {/* Watermark Logo top-right */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-md">
                <Logo size="sm" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                  Topic Illustration
                </span>
                <h4 className="text-base font-extrabold text-white">
                  {contextData.title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {contextData.caption}
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                Have a different building query? Call our helpline{' '}
                <a href="tel:01744495886" className="font-bold text-emerald-800 underline">
                  01744495886
                </a>{' '}
                for instant technical consultation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
