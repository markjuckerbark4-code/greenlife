import React from 'react';
import { ProjectVideo, COMPANY_CONTACT } from '../data/architectData';
import { X, Youtube, ExternalLink, Calendar, MapPin, Building, ShieldCheck, CheckCircle } from 'lucide-react';

interface VideoModalProps {
  project: ProjectVideo | null;
  onClose: () => void;
  onConsult: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose, onConsult }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Thumbnail / Mock Player Header */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden rounded-t-2xl">
          <img
            src={project.thumbnailUrl}
            alt={project.bengaliTitle}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

          {/* YouTube Branding */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-xs text-white px-3 py-1.5 rounded-md text-xs font-bold border border-white/10">
            <Youtube className="w-4 h-4 text-red-600 fill-current" />
            <span>Green Architect Official Video</span>
          </div>

          {/* Bengali Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="inline-block px-2.5 py-1 rounded bg-emerald-700 font-bold text-xs mb-2">
              {project.floors} • {project.katha}
            </div>
            <h3 className="text-lg sm:text-2xl font-black leading-snug">
              {project.bengaliTitle}
            </h3>
            <p className="text-xs text-emerald-200 mt-1">
              উপস্থাপনায়: সিভিল ইঞ্জিনিয়ার টুটুল | Green Architect BD
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 block">আনুমানিক নির্মাণ বাজেট</span>
              <span className="text-xl font-extrabold text-emerald-800">
                {project.costRange}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">জমির সাইজ ও কাঠামো</span>
              <span className="text-sm font-bold text-slate-800">
                {project.katha} ({project.floors})
              </span>
            </div>
            <a
              href={COMPANY_CONTACT.youtubeChannel}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900">
              প্রজেক্ট বিবরণ ও স্থাপত্য পরিকল্পনা:
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.details}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              এই ভবনের ড্রয়িংয়ে বিএনবিসি ২০২০ নির্দেশিকা অনুযায়ী মাটির গভীরতা ও বহন ক্ষমতা বিবেচনা করে ভিত্তি নির্ধারণ করা হয়েছে। প্রতিটি ফ্লোরে পর্যাপ্ত আলো ও প্রাকৃতিক বাতাসের প্রবাহ নিশ্চিত করার মাধ্যমে বিদ্যুৎ খরচ ২০-২৫% কমিয়ে আনা সম্ভব হয়েছে।
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Want a similar cost-optimized design for your own plot?
            </div>
            <button
              onClick={() => {
                onClose();
                onConsult();
              }}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-6 py-2.5 rounded-md shadow-sm transition-all"
            >
              Request Custom Design For Your Land
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
