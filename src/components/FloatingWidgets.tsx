import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/architectData';

interface FloatingWidgetsProps {
  onScheduleCall: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onScheduleCall }) => {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  return (
    <>
      {/* Floating Red Phone Button on Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <a
          href={`tel:${COMPANY_CONTACT.phone}`}
          className="relative group w-13 h-13 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-red-400/30"
          aria-label="Direct Phone Call"
          title={`Call ${COMPANY_CONTACT.phoneDisplay}`}
        >
          <span className="absolute -inset-1 rounded-full bg-red-500 animate-ping opacity-35 pointer-events-none" />
          <Phone className="w-6 h-6 fill-current animate-pulse" />
        </a>
      </div>

      {/* Floating Green WhatsApp Button on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {/* Quick WhatsApp popup chat hint */}
        {showWhatsAppPopup && (
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 max-w-xs w-72 mb-2 animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  Green Architect Support
                </span>
              </div>
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 my-2 leading-relaxed">
              আসসালামু আলাইকুম! বাড়ি নির্মাণ বা ড্রয়িং সংক্রান্ত যে কোনো প্রশ্নে আমাদের সাথে হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন।
            </p>
            <a
              href={`https://wa.me/8801744495886?text=${encodeURIComponent(
                'Hello Green Architect, I want to discuss a building design project in Bangladesh.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-md text-center transition-colors shadow-2xs"
            >
              Start WhatsApp Chat
            </a>
          </div>
        )}

        <button
          onClick={() => setShowWhatsAppPopup(!showWhatsAppPopup)}
          className="relative group w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-emerald-400/30"
          aria-label="Chat on WhatsApp"
          title="Chat with Green Architect on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 animate-ping opacity-35 pointer-events-none" />
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>
    </>
  );
};
