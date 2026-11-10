/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ReliableAndSpecialized } from './components/ReliableAndSpecialized';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RecentBlog } from './components/RecentBlog';
import { ClientReviews } from './components/ClientReviews';
import { ReadyToBuild } from './components/ReadyToBuild';
import { FAQSection } from './components/FAQSection';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { CostCalculatorModal } from './components/CostCalculatorModal';
import { ScheduleModal } from './components/ScheduleModal';
import { VideoModal } from './components/VideoModal';
import { BlogModal } from './components/BlogModal';
import { GlanceModal } from './components/GlanceModal';
import { ServiceCatalogModal } from './components/ServiceCatalogModal';
import { ProjectVideo, BlogPost } from './data/architectData';
import { Heart, Briefcase, Info, X } from 'lucide-react';

export default function App() {
  // Modal states
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [scheduleNote, setScheduleNote] = useState('');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isGlanceOpen, setIsGlanceOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<ProjectVideo | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [catalogServiceId, setCatalogServiceId] = useState<string | null>(null);

  // Informational modals for Social Work, Career, About
  const [infoModalContent, setInfoModalContent] = useState<{
    title: string;
    subtitle: string;
    icon: 'heart' | 'briefcase' | 'about';
    body: React.ReactNode;
  } | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'social-work') {
      setInfoModalContent({
        title: 'Social Work & Humanitarian Mission',
        subtitle: 'Architecture in Service of Humanity and Nature in Bangladesh',
        icon: 'heart',
        body: (
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              As highlighted by our clients, <strong>Green Architect</strong> is not merely a commercial design firm, but an organization rooted in humanitarian action. Founded by <strong>Civil Engineer Tutul</strong>, we pledge a dedicated portion of every design fee to community impact.
            </p>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 text-xs">
              <div className="font-bold text-emerald-950 text-sm">Key Social Initiatives:</div>
              <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                <li><strong>Tree Plantation &amp; Urban Greening:</strong> 10,000+ native shade trees planted across Kushtia, Dhaka, and rural school campuses.</li>
                <li><strong>Pro-Bono Flood Shelter &amp; Mosque Design:</strong> Structural engineering drawings provided free of cost for community institutions in vulnerable delta regions.</li>
                <li><strong>Engineering Scholarships:</strong> Financial stipends and CAD software training for underprivileged civil engineering and architecture polytechnic students.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-500">
              For charity collaborations and community projects, contact us directly at greeninfo222@gmail.com.
            </p>
          </div>
        ),
      });
      return;
    }

    if (sectionId === 'career') {
      setInfoModalContent({
        title: 'Careers at Green Architect',
        subtitle: 'Build Your Career with Bangladesh’s Leading Green Design Team',
        icon: 'briefcase',
        body: (
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              We are constantly seeking passionate architects, structural engineers, and 3D visualizers who want to reshape Bangladesh’s built environment with sustainable design.
            </p>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Junior Architect (Residential &amp; Duplex)</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Dhaka</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">B.Arch with proficiency in AutoCAD, SketchUp, Lumion, and RAJUK setback guidelines.</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Structural Engineer (ETABS &amp; BNBC 2020)</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Dhaka / Kushtia</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">B.Sc in Civil Engineering with 2+ years of experience in multistory RCC frame analysis.</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Site Quality Engineer</span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Multiple Locations</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">Diploma in Civil Engineering with on-site pile casting, rebar inspection, and slump testing expertise.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Send your portfolio &amp; CV to <strong>greeninfo222@gmail.com</strong> with the subject line <em>&ldquo;Application - [Job Title]&rdquo;</em>.
            </p>
          </div>
        ),
      });
      return;
    }

    if (sectionId === 'about') {
      setIsGlanceOpen(true);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenScheduleWithNote = (note?: string) => {
    setScheduleNote(note || '');
    setIsScheduleOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <Header
        onScheduleCall={() => handleOpenScheduleWithNote()}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero & Best Building Design Company In Bangladesh Section */}
        <Hero
          onGlanceClick={() => setIsGlanceOpen(true)}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 2. Services We Provide Section */}
        <ServicesSection
          onSelectServiceModal={(serviceId) => setCatalogServiceId(serviceId)}
          onScheduleCall={() => handleOpenScheduleWithNote('Consultation regarding architectural service')}
        />

        {/* 3. Featured Projects (YouTube Cards Grid) */}
        <FeaturedProjects
          onOpenProjectModal={(project) => setSelectedVideo(project)}
        />

        {/* 4. Reliable Building Design & Specialized Design Cards */}
        <ReliableAndSpecialized
          onScheduleCall={() => handleOpenScheduleWithNote('Consultation on Commercial or Coastal building project')}
        />

        {/* 5. Why Choose Our Building Design Services? */}
        <WhyChooseUs />

        {/* 6. Our Recent Blog Post */}
        <RecentBlog
          onReadArticle={(post) => setSelectedBlog(post)}
          onViewAllBlogs={() => {
            const firstPost = document.getElementById('blog');
            if (firstPost) firstPost.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Our Client Reviews */}
        <ClientReviews />

        {/* 8. Ready To Build Your Dream House? Let's Get Started */}
        <ReadyToBuild
          onScheduleCall={() => handleOpenScheduleWithNote('Initiate Strategy Session for dream home')}
          onOpenCard={(title) => handleOpenScheduleWithNote(`Interest in ${title}`)}
        />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Have A Project Idea In Mind?? Lets Get Started (Contact & Map) */}
        <GetInTouch />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() =>
          setInfoModalContent({
            title: 'Privacy Policy',
            subtitle: 'Green Architect Client Data & Privacy Commitment',
            icon: 'about',
            body: (
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Green Architect BD values your privacy. Any plot documents, land deeds, soil reports, or personal contact numbers shared with our consultancy are treated as strictly confidential architectural intellectual property.
                </p>
                <p>
                  We do not share, sell, or disclose your building drawings or contact details to third-party commercial marketing firms without your explicit written approval.
                </p>
              </div>
            ),
          })
        }
        onOpenTerms={() =>
          setInfoModalContent({
            title: 'Terms & Conditions',
            subtitle: 'Architectural Consultancy Guidelines',
            icon: 'about',
            body: (
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  All architectural drawings, 3D renderings, and structural calculations provided by Green Architect BD comply with Bangladesh National Building Code (BNBC 2020) and relevant municipal authorities (RAJUK, CDA, KDA, City Corporations).
                </p>
                <p>
                  Construction cost estimations are computed using standard prevailing market prices in Bangladesh; site conditions and material selections during actual execution determine final contractor accounts.
                </p>
              </div>
            ),
          })
        }
      />

      {/* Floating Action Buttons (Red Phone on left, Green WhatsApp on right) */}
      <FloatingWidgets onScheduleCall={() => handleOpenScheduleWithNote()} />

      {/* Interactive Modals */}
      {/* 1. Schedule A Call Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        initialNote={scheduleNote}
      />

      {/* 2. Construction Cost Calculator Modal */}
      <CostCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onBookConsultation={(calcDetails) => handleOpenScheduleWithNote(calcDetails)}
      />

      {/* 3. Green Architect At A Glance Profile Modal */}
      <GlanceModal
        isOpen={isGlanceOpen}
        onClose={() => setIsGlanceOpen(false)}
        onScheduleCall={() => handleOpenScheduleWithNote('Meeting following At-A-Glance profile')}
      />

      {/* 4. Full Service Catalog Modal */}
      <ServiceCatalogModal
        isOpen={Boolean(catalogServiceId)}
        onClose={() => setCatalogServiceId(null)}
        initialServiceId={catalogServiceId || 'architectural-design'}
        onScheduleService={(svcName) => handleOpenScheduleWithNote(`Service Inquiry: ${svcName}`)}
      />

      {/* 5. Video Case Study Modal */}
      <VideoModal
        project={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onConsult={() => handleOpenScheduleWithNote(`Inquiry regarding video: ${selectedVideo?.bengaliTitle}`)}
      />

      {/* 6. Blog Article Modal */}
      <BlogModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        onScheduleCall={() => handleOpenScheduleWithNote(`Inquiry inspired by blog: ${selectedBlog?.title}`)}
      />

      {/* 7. Info Modal (Social Work, Career, Privacy) */}
      {infoModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setInfoModalContent(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                {infoModalContent.icon === 'heart' ? (
                  <Heart className="w-6 h-6 text-red-600 fill-current" />
                ) : infoModalContent.icon === 'briefcase' ? (
                  <Briefcase className="w-6 h-6 text-emerald-700" />
                ) : (
                  <Info className="w-6 h-6 text-emerald-700" />
                )}
              </div>
              <h3 className="text-xl font-black text-slate-900">
                {infoModalContent.title}
              </h3>
              <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                {infoModalContent.subtitle}
              </p>
            </div>
            <div className="py-2">{infoModalContent.body}</div>
            <div className="pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setInfoModalContent(null)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
