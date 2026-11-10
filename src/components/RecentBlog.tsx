import React from 'react';
import { BLOG_POSTS, BlogPost } from '../data/architectData';
import { ArrowRight, BookOpen } from 'lucide-react';

interface RecentBlogProps {
  onReadArticle: (post: BlogPost) => void;
  onViewAllBlogs: () => void;
}

export const RecentBlog: React.FC<RecentBlogProps> = ({ onReadArticle, onViewAllBlogs }) => {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Architectural Insights &amp; Guidelines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Recent Blog Post
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image placeholder with architectural rendering */}
                <div
                  onClick={() => onReadArticle(post)}
                  className="relative aspect-16/10 w-full bg-slate-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded shadow-2xs">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3
                    onClick={() => onReadArticle(post)}
                    className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Green "Read More" Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onReadArticle(post)}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-semibold text-xs py-2.5 px-4 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Below Cards: Green "View more blogs" Button */}
        <div className="text-center">
          <button
            onClick={onViewAllBlogs}
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-8 py-3 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>View more blogs</span>
          </button>
        </div>
      </div>
    </section>
  );
};
