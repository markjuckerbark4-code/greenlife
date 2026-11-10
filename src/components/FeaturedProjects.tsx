import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectVideo, COMPANY_CONTACT } from '../data/architectData';
import { Play, Youtube, ExternalLink, ArrowRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onOpenProjectModal: (project: ProjectVideo) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenProjectModal }) => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Real Construction Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Grid of YouTube Video Thumbnails with Bengali Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col group"
            >
              {/* Video Thumbnail with Bengali Overlay Card & YouTube Branding */}
              <div
                onClick={() => onOpenProjectModal(project)}
                className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
              >
                {/* Background architectural project image */}
                <img
                  src={project.thumbnailUrl}
                  alt={project.bengaliTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />

                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Top YouTube Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[11px] font-semibold border border-white/10">
                  <Youtube className="w-4 h-4 text-red-600 fill-current" />
                  <span>Watch on YouTube</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay with Bold Bengali Text & Price Estimate Badge */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/95 to-transparent text-white">
                  <div className="bg-emerald-900/90 text-emerald-300 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-sm inline-block mb-1">
                    {project.floors} • {project.katha}
                  </div>
                  <h3 className="text-sm font-bold leading-snug line-clamp-2 text-white">
                    {project.bengaliTitle}
                  </h3>
                </div>
              </div>

              {/* Card Bottom Area: Subtitle & Green "Read More" Button */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                <div className="space-y-2 mb-4">
                  <div className="text-xs font-semibold text-emerald-700">
                    {project.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {project.details}
                  </p>
                  <div className="text-[11px] font-medium text-slate-500 pt-1">
                    আনুমানিক বাজেট:{' '}
                    <span className="font-bold text-slate-800">{project.costRange}</span>
                  </div>
                </div>

                {/* Green Read More Button (matching user breakdown & screenshot) */}
                <button
                  onClick={() => onOpenProjectModal(project)}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-semibold text-xs py-2.5 px-4 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel / Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`rounded-full transition-all cursor-pointer ${
                dot === activeDot ? 'w-6 h-2 bg-emerald-700' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Page ${dot + 1}`}
            />
          ))}
        </div>

        {/* Large Green CTA Button: "Lets Take A Tour To Our YouTube Channel" (as in screenshot) */}
        <div className="text-center">
          <a
            href={COMPANY_CONTACT.youtubeChannel}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            <Youtube className="w-5 h-5 text-red-300 fill-current" />
            <span>Lets Take A Tour To Our YouTube Channel</span>
            <ExternalLink className="w-4 h-4 text-emerald-200" />
          </a>
        </div>
      </div>
    </section>
  );
};
