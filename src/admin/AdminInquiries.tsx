import React, { useState } from 'react';
import { useAdminData, CustomerInquiry } from '../context/AdminDataContext';
import {
  Search,
  Filter,
  Download,
  Trash2,
  Eye,
  Mail,
  Phone,
  MapPin,
  Building,
  CheckCircle,
  Plus,
  X,
} from 'lucide-react';

export const AdminInquiries: React.FC = () => {
  const { inquiries, updateInquiryStatus, deleteInquiry, addInquiry } = useAdminData();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<CustomerInquiry | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New manual inquiry state
  const [newInquiry, setNewInquiry] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    floors: '৪ তলা',
    message: '',
  });

  const filtered = inquiries.filter((inq) => {
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.includes(searchTerm) ||
      inq.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleExportCSV = () => {
    const headers = 'ID,Full Name,Phone,Email,Location,Floors,Message,Date,Status\n';
    const rows = inquiries
      .map(
        (i) =>
          `"${i.id}","${i.fullName}","${i.phone}","${i.email}","${i.location.replace(/"/g, '""')}","${
            i.floors
          }","${i.message.replace(/"/g, '""')}","${i.date}","${i.status}"`
      )
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `green_architect_inquiries_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCreateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInquiry.fullName || !newInquiry.phone) return;
    addInquiry(newInquiry);
    setShowAddModal(false);
    setNewInquiry({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      floors: '৪ তলা',
      message: '',
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Page Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Client Inquiries &amp; Leads
          </h2>
          <p className="text-xs text-slate-500">
            Total {inquiries.length} inquiries received from the website contact forms
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Log Manual Lead</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search by client name, phone, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Status:
          </span>
          {['All', 'New', 'Contacted', 'Site Survey', 'Design In Progress', 'Closed'].map(
            (status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  statusFilter === status
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {status}
              </button>
            )
          )}
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Floors / Story</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No inquiries found matching your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((inq) => (
                  <tr
                    key={inq.id}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {inq.fullName}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="space-y-0.5">
                        <a
                          href={`tel:${inq.phone}`}
                          className="font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span>{inq.phone}</span>
                        </a>
                        {inq.email && (
                          <span className="text-slate-400 text-[11px] block">
                            {inq.email}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs truncate text-slate-600">
                      {inq.location || 'Dhaka'}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {inq.floors}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                      {inq.date}
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={inq.status}
                        onChange={(e) =>
                          updateInquiryStatus(inq.id, e.target.value as any)
                        }
                        className={`text-xs font-bold py-1 px-2 rounded-md border cursor-pointer focus:outline-hidden ${
                          inq.status === 'New'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : inq.status === 'Contacted'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : inq.status === 'Site Survey'
                            ? 'bg-purple-50 text-purple-800 border-purple-200'
                            : inq.status === 'Design In Progress'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Site Survey">Site Survey</option>
                        <option value="Design In Progress">Design In Progress</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedInquiry(inq)}
                          className="p-1.5 rounded hover:bg-slate-100 text-slate-600 hover:text-emerald-700 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete inquiry from ${inq.fullName}?`)) {
                              deleteInquiry(inq.id);
                            }
                          }}
                          className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-100 animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                Inquiry Details
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                {selectedInquiry.fullName}
              </h3>
              <p className="text-xs text-slate-400">Received on {selectedInquiry.date}</p>
            </div>

            <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-4">
              <div>
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="text-emerald-800 font-bold underline"
                >
                  {selectedInquiry.phone}
                </a>
              </div>
              <div>
                <strong>Email:</strong> {selectedInquiry.email || 'N/A'}
              </div>
              <div>
                <strong>Plot Location:</strong> {selectedInquiry.location || 'Dhaka'}
              </div>
              <div>
                <strong>Building Stories:</strong> {selectedInquiry.floors}
              </div>
              <div className="pt-2 border-t border-slate-200">
                <strong className="block mb-1 text-slate-900">Client Message:</strong>
                <p className="bg-white p-3 rounded border border-slate-200 whitespace-pre-line text-slate-800 leading-relaxed font-normal">
                  {selectedInquiry.message || 'No additional note provided.'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Update Status:</span>
                <select
                  value={selectedInquiry.status}
                  onChange={(e) => {
                    updateInquiryStatus(selectedInquiry.id, e.target.value as any);
                    setSelectedInquiry({
                      ...selectedInquiry,
                      status: e.target.value as any,
                    });
                  }}
                  className="text-xs font-semibold p-1.5 rounded border border-slate-300"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Site Survey">Site Survey</option>
                  <option value="Design In Progress">Design In Progress</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <a
                href={`tel:${selectedInquiry.phone}`}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Client</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Add Manual Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-100 animate-in fade-in duration-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Log Manual Inquiry</h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter phone or direct walk-in client details
            </p>

            <form onSubmit={handleCreateInquiry} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mr. Mahmudul Hasan"
                  value={newInquiry.fullName}
                  onChange={(e) => setNewInquiry({ ...newInquiry, fullName: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={newInquiry.phone}
                    onChange={(e) => setNewInquiry({ ...newInquiry, phone: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="client@mail.com"
                    value={newInquiry.email}
                    onChange={(e) => setNewInquiry({ ...newInquiry, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Plot Location</label>
                <input
                  type="text"
                  placeholder="e.g. Road 4, Sector 7, Uttara, Dhaka"
                  value={newInquiry.location}
                  onChange={(e) => setNewInquiry({ ...newInquiry, location: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Building Stories</label>
                <select
                  value={newInquiry.floors}
                  onChange={(e) => setNewInquiry({ ...newInquiry, floors: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                >
                  <option value="৩ তলা">৩ তলা</option>
                  <option value="৪ তলা">৪ তলা</option>
                  <option value="৫ তলা">৫ তলা</option>
                  <option value="৬ তলা+ / ডুপ্লেক্স">৬ তলা+ / ডুপ্লেক্স</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Requirements / Message</label>
                <textarea
                  rows={3}
                  placeholder="Details regarding plot dimensions, setbacks, budget, etc."
                  value={newInquiry.message}
                  onChange={(e) => setNewInquiry({ ...newInquiry, message: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg shadow-sm"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
