import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Review } from '../data/architectData';
import { Star, Plus, Trash2, Edit2, Quote, X } from 'lucide-react';

export const AdminReviews: React.FC = () => {
  const { reviews, addReview, updateReview, deleteReview } = useAdminData();
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    role: 'Flat Owner & Land Developer',
    location: 'Dhaka',
    bengaliText: '',
    englishText: '',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    projectType: '6-Storey Residential Residence',
  });

  const handleOpenAdd = () => {
    setFormState({
      name: '',
      role: 'Flat Owner & Land Developer',
      location: 'Dhaka',
      bengaliText: '',
      englishText: '',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      projectType: '6-Storey Residential Building',
    });
    setEditingReview(null);
    setShowAddModal(true);
  };

  const handleOpenEdit = (rev: Review) => {
    setEditingReview(rev);
    setFormState({
      name: rev.name,
      role: rev.role,
      location: rev.location,
      bengaliText: rev.bengaliText,
      englishText: rev.englishText,
      avatarUrl: rev.avatarUrl,
      projectType: rev.projectType,
    });
    setShowAddModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.bengaliText) return;

    if (editingReview) {
      updateReview(editingReview.id, {
        name: formState.name,
        role: formState.role,
        location: formState.location,
        bengaliText: formState.bengaliText,
        englishText: formState.englishText || formState.bengaliText,
        avatarUrl: formState.avatarUrl,
        projectType: formState.projectType,
      });
    } else {
      addReview({
        name: formState.name,
        role: formState.role,
        location: formState.location,
        bengaliText: formState.bengaliText,
        englishText: formState.englishText || formState.bengaliText,
        avatarUrl: formState.avatarUrl,
        projectType: formState.projectType,
      });
    }

    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Client Reviews &amp; Testimonials
          </h2>
          <p className="text-xs text-slate-500">
            Manage reviews displayed on &ldquo;Our Client Reviews&rdquo; section
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Client Review</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatarUrl}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                  <div className="text-[11px] text-emerald-800 font-medium">
                    {rev.role} • {rev.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <blockquote className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 line-clamp-4 leading-relaxed italic">
                &ldquo;{rev.bengaliText}&rdquo;
              </blockquote>

              <div className="text-[11px] text-slate-400">
                <strong>Project:</strong> {rev.projectType}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2 mt-3">
              <button
                onClick={() => handleOpenEdit(rev)}
                className="p-1.5 rounded hover:bg-slate-100 text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1 text-xs font-semibold"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => {
                  if (confirm(`Delete review from ${rev.name}?`)) {
                    deleteReview(rev.id);
                  }
                }}
                className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative border border-slate-100 animate-in fade-in duration-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {editingReview ? 'Edit Client Review' : 'Add Client Review'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Add genuine testimonials from homeowners and land developers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MST Fatimatuz Zohra"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Role / Profession</label>
                  <input
                    type="text"
                    placeholder="e.g. Building Owner & Investor"
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Bashundhara R/A, Dhaka"
                    value={formState.location}
                    onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Project Type</label>
                <input
                  type="text"
                  placeholder="e.g. 5-Storey Residential Residence"
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Avatar / Photo URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formState.avatarUrl}
                  onChange={(e) => setFormState({ ...formState, avatarUrl: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Bengali Review Text (বাংলা রিভিউ) *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Green Architect is not only an architectural firm but also an organization..."
                  value={formState.bengaliText}
                  onChange={(e) => setFormState({ ...formState, bengaliText: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">English Translation (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="English summary..."
                  value={formState.englishText}
                  onChange={(e) => setFormState({ ...formState, englishText: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg shadow-sm"
                >
                  {editingReview ? 'Save Review' : 'Publish Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
