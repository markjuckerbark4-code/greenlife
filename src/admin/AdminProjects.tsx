import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { ProjectVideo } from '../data/architectData';
import { Video, Youtube, Plus, Trash2, Edit2, Play, ExternalLink, X } from 'lucide-react';

export const AdminProjects: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useAdminData();
  const [editingProject, setEditingProject] = useState<ProjectVideo | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [formState, setFormState] = useState({
    bengaliTitle: '',
    subtitle: 'সিভিল ইঞ্জিনিয়ার টুটুল | Green Architect BD',
    katha: '৪ কাঠা (2,880 Sqft)',
    floors: '৬ তলা (G+5)',
    costRange: '২.১০ - ২.৪০ কোটি টাকা',
    youtubeId: 'ga_featured_video',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tagsString: '৬ তলা বাড়ি, খরচের হিসাব, রাজউক অনুমোদন',
    details: '',
  });

  const handleOpenAdd = () => {
    setFormState({
      bengaliTitle: '',
      subtitle: 'সিভিল ইঞ্জিনিয়ার টুটুল | Green Architect BD',
      katha: '৩.৫ কাঠা (2,520 Sqft)',
      floors: '৫ তলা (G+4)',
      costRange: '১.৬০ - ১.৯০ কোটি টাকা',
      youtubeId: 'ga_video_' + Date.now(),
      thumbnailUrl:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      tagsString: '৫ তলা বাড়ি, খরচের হিসাব, গ্রীন আর্কিটেক্ট',
      details: 'বাস্তব নির্মাণ খরচের হিসাব ও মাটি পরীক্ষার প্রয়োজনীয়তা।',
    });
    setEditingProject(null);
    setShowAddModal(true);
  };

  const handleOpenEdit = (proj: ProjectVideo) => {
    setEditingProject(proj);
    setFormState({
      bengaliTitle: proj.bengaliTitle,
      subtitle: proj.subtitle,
      katha: proj.katha,
      floors: proj.floors,
      costRange: proj.costRange,
      youtubeId: proj.youtubeId,
      thumbnailUrl: proj.thumbnailUrl,
      tagsString: proj.tags.join(', '),
      details: proj.details,
    });
    setShowAddModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.bengaliTitle) return;

    const tags = formState.tagsString
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingProject) {
      updateProject(editingProject.id, {
        bengaliTitle: formState.bengaliTitle,
        subtitle: formState.subtitle,
        katha: formState.katha,
        floors: formState.floors,
        costRange: formState.costRange,
        youtubeId: formState.youtubeId,
        thumbnailUrl: formState.thumbnailUrl,
        tags,
        details: formState.details,
      });
    } else {
      addProject({
        bengaliTitle: formState.bengaliTitle,
        subtitle: formState.subtitle,
        katha: formState.katha,
        floors: formState.floors,
        costRange: formState.costRange,
        youtubeId: formState.youtubeId,
        thumbnailUrl: formState.thumbnailUrl,
        tags,
        details: formState.details,
      });
    }

    setShowAddModal(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Featured YouTube Projects
          </h2>
          <p className="text-xs text-slate-500">
            Control the YouTube videos and construction cost cards displayed on the homepage
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project Video</span>
        </button>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail */}
              <div className="relative aspect-video w-full bg-slate-900">
                <img
                  src={proj.thumbnailUrl}
                  alt={proj.bengaliTitle}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Youtube className="w-3.5 h-3.5 fill-current" />
                  <span>YouTube</span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="bg-emerald-800/90 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-1">
                    {proj.floors} • {proj.katha}
                  </div>
                  <h4 className="text-xs font-bold line-clamp-1">{proj.bengaliTitle}</h4>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2 text-xs">
                <div className="font-semibold text-emerald-800">{proj.subtitle}</div>
                <div className="text-slate-500 line-clamp-2">{proj.details}</div>
                <div className="pt-1 flex items-center justify-between text-[11px] font-medium text-slate-600">
                  <span>আনুমানিক বাজেট:</span>
                  <span className="font-bold text-slate-900">{proj.costRange}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
              <span className="text-[10px] text-slate-400">
                {proj.tags.length} Tags
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(proj)}
                  className="p-1.5 rounded hover:bg-slate-100 text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete project "${proj.bengaliTitle}"?`)) {
                      deleteProject(proj.id);
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

      {/* Add / Edit Project Modal */}
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
              {editingProject ? 'Edit Featured Project' : 'Add New Project Video'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Changes reflect immediately on the live website.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Bengali Title (ভিডিওর শিরোনাম) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ৪ কাঠা জমিতে ৬ তলা বাড়ি করতে কত টাকা খরচ হবে?"
                  value={formState.bengaliTitle}
                  onChange={(e) => setFormState({ ...formState, bengaliTitle: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  placeholder="সিভিল ইঞ্জিনিয়ার টুটুল | Green Architect BD"
                  value={formState.subtitle}
                  onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Floors / Story</label>
                  <input
                    type="text"
                    placeholder="৬ তলা (G+5)"
                    value={formState.floors}
                    onChange={(e) => setFormState({ ...formState, floors: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Plot Area (Katha)</label>
                  <input
                    type="text"
                    placeholder="৩.৫ কাঠা (2,520 Sqft)"
                    value={formState.katha}
                    onChange={(e) => setFormState({ ...formState, katha: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Estimated Cost Range</label>
                <input
                  type="text"
                  placeholder="১.৮৫ - ২.১০ কোটি টাকা"
                  value={formState.costRange}
                  onChange={(e) => setFormState({ ...formState, costRange: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Thumbnail Image URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formState.thumbnailUrl}
                  onChange={(e) => setFormState({ ...formState, thumbnailUrl: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="৬ তলা বাড়ি, খরচের হিসাব, রাজউক"
                  value={formState.tagsString}
                  onChange={(e) => setFormState({ ...formState, tagsString: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Project Details</label>
                <textarea
                  rows={3}
                  placeholder="Detailed breakdown of construction costs, piling, and layout..."
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg shadow-sm"
                >
                  {editingProject ? 'Save Project Changes' : 'Publish Project Video'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
