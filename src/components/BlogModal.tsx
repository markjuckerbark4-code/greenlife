import React from 'react';
import { BlogPost } from '../data/architectData';
import { X, Calendar, Clock, BookOpen, CheckCircle, Share2 } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onScheduleCall: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onScheduleCall }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image header */}
        <div className="relative aspect-21/9 w-full bg-slate-900 overflow-hidden rounded-t-2xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="bg-emerald-700 text-white text-[11px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider inline-block mb-2">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata bar */}
          <div className="flex items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <div className="text-emerald-800 font-semibold">
              Author: Green Architect Engineering Editorial
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-950 leading-relaxed">
            {post.bengaliSnippet}
          </div>

          {/* Article paragraphs */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-slate-900">
              {post.summary}
            </p>
            {post.content.map((para, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 stroke-3" />
                </div>
                <p className="flex-1">{para}</p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Have questions regarding your residential or commercial floor layout?
            </div>
            <button
              onClick={() => {
                onClose();
                onScheduleCall();
              }}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-6 py-2.5 rounded-md shadow-sm"
            >
              Talk To An Architect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
