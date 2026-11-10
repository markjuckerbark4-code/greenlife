import React, { useState } from 'react';
import { CLIENT_REVIEWS } from '../data/architectData';
import { Quote, Star } from 'lucide-react';

export const ClientReviews: React.FC = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const currentReview = CLIENT_REVIEWS[activeReviewIdx];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Real Stories &amp; Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Client Reviews
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Content Layout: Left Client Photo + Right Green Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Photo of Happy Client with completed building & caption */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 flex-1 min-h-[380px] group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Md. Shamsul Alam - Satisfied Client Green Architect"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

              {/* Client Info Overlay at bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-black text-white">
                  Md. Shamsul Alam
                </h3>
                <p className="text-xs text-emerald-300 font-semibold mt-0.5">
                  Flat Owner &amp; Land Developer, Mirpur DOHS, Dhaka
                </p>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  &ldquo;গ্রীন আর্কিটেক্টের প্রকৌশলীদের আন্তরিক সহায়তায় আমাদের ৬ তলা ভবনটি নির্ধারিত সময়ের ২ মাস আগেই সম্পন্ন হয়েছে।&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: Testimonials Card with Green Background (as described in breakdown) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm relative flex flex-col justify-between">
              {/* Quote Watermark Icon */}
              <div className="absolute top-6 right-8 text-emerald-200/60 pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              {/* Client Photo at Top */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-emerald-600 shadow-md flex-shrink-0">
                  <img
                    src={currentReview.avatarUrl}
                    alt={currentReview.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-emerald-800">
                    Verified Project Review
                  </div>
                </div>
              </div>

              {/* Client Review Text in Bengali (matching prompt) */}
              <div className="space-y-4 mb-8">
                <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  &ldquo;{currentReview.bengaliText}&rdquo;
                </blockquote>
                <p className="text-xs text-slate-600 italic">
                  {currentReview.englishText}
                </p>
              </div>

              {/* Client Name & Project Info */}
              <div className="pt-4 border-t border-emerald-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    {currentReview.name}
                  </h4>
                  <div className="text-xs text-emerald-700 font-semibold">
                    {currentReview.role} • {currentReview.location}
                  </div>
                </div>

                {/* Navigation Dots below text */}
                <div className="flex items-center gap-2">
                  {CLIENT_REVIEWS.map((review, i) => (
                    <button
                      key={review.id}
                      onClick={() => setActiveReviewIdx(i)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        i === activeReviewIdx
                          ? 'w-7 bg-emerald-700'
                          : 'w-2.5 bg-emerald-300 hover:bg-emerald-400'
                      }`}
                      aria-label={`View review by ${review.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
