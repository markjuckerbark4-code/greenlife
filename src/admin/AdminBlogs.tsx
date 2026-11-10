import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { BlogPost } from '../data/architectData';
import { FileText, Plus, Trash2, Edit2, Calendar, Clock, X } from 'lucide-react';

export const AdminBlogs: React.FC = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useAdminData();
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [formState, setFormState] = useState({
    title: '',
    bengaliSnippet: '',
    category: 'Architecture',
    date: 'April 20, 2026',
    readTime: '6 min read',
    summary: '',
    contentString: '',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  });

  const handleOpenAdd = () => {
    setFormState({
      title: '',
      bengaliSnippet: '',
      category: 'Architecture',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      summary: '',
      contentString: '',
      imageUrl:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    });
    setEditingBlog(null);
    setShowAddModal(true);
  };

  const handleOpenEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setFormState({
      title: blog.title,
      bengaliSnippet: blog.bengaliSnippet,
      category: blog.category,
      date: blog.date,
      readTime: blog.readTime,
      summary: blog.summary,
      contentString: blog.content.join('\n\n'),
      imageUrl: blog.imageUrl,
    });
    setShowAddModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.title) return;

    const content = formState.contentString
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    if (editingBlog) {
      updateBlog(editingBlog.id, {
        title: formState.title,
        bengaliSnippet: formState.bengaliSnippet,
        category: formState.category,
        date: formState.date,
        readTime: formState.readTime,
        summary: formState.summary,
        content: content.length ? content : [formState.summary],
        imageUrl: formState.imageUrl,
      });
    } else {
      addBlog({
        title: formState.title,
        bengaliSnippet: formState.bengaliSnippet,
        category: formState.category,
        date: formState.date,
        readTime: formState.readTime,
        summary: formState.summary,
        content: content.length ? content : [formState.summary],
        imageUrl: formState.imageUrl,
      });
    }

    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Recent Blog Posts
          </h2>
          <p className="text-xs text-slate-500">
            Publish architectural design guides, BNBC code tips, and cost management articles
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </button>
      </div>

      {/* Grid of Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-16/10 w-full bg-slate-100">
                <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover" />
                <div className="absolute top-2.5 left-2.5 bg-emerald-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {b.category}
                </div>
              </div>

              <div className="p-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span>{b.date}</span>
                  <span>•</span>
                  <span>{b.readTime}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm line-clamp-2">{b.title}</h4>
                <p className="text-slate-500 line-clamp-2">{b.summary}</p>
                {b.bengaliSnippet && (
                  <p className="text-[11px] text-emerald-800 font-medium italic line-clamp-1">
                    {b.bengaliSnippet}
                  </p>
                )}
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
              <span className="text-[10px] text-slate-400">
                {b.content.length} Sections
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(b)}
                  className="p-1.5 rounded hover:bg-slate-100 text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete blog post "${b.title}"?`)) {
                      deleteBlog(b.id);
                    }
                  }}
                  className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Blog Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative border border-slate-100 animate-in fade-in duration-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {editingBlog ? 'Edit Blog Article' : 'Write New Article'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Article will show under &ldquo;Our Recent Blog Post&rdquo; on the homepage.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Residential Duplex Design in Bangladesh"
                  value={formState.title}
                  onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Bengali Subtitle / Snippet</label>
                <input
                  type="text"
                  placeholder="বাংলাদেশে আধুনিক ডুপ্লেক্স বাড়ি নকশা ও রাজউক নিয়মনীতি"
                  value={formState.bengaliSnippet}
                  onChange={(e) => setFormState({ ...formState, bengaliSnippet: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <input
                    type="text"
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="text"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Read Time</label>
                  <input
                    type="text"
                    value={formState.readTime}
                    onChange={(e) => setFormState({ ...formState, readTime: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Cover Image URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formState.imageUrl}
                  onChange={(e) => setFormState({ ...formState, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Short Summary</label>
                <textarea
                  rows={2}
                  placeholder="Brief 1-2 sentence preview for the homepage card..."
                  value={formState.summary}
                  onChange={(e) => setFormState({ ...formState, summary: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Full Article Paragraphs (separate paragraphs with blank line)
                </label>
                <textarea
                  rows={4}
                  placeholder="Paragraph 1...&#10;&#10;Paragraph 2...&#10;&#10;Paragraph 3..."
                  value={formState.contentString}
                  onChange={(e) => setFormState({ ...formState, contentString: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg shadow-sm"
                >
                  {editingBlog ? 'Save Article Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
