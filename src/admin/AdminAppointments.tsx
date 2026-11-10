import React, { useState } from 'react';
import { useAdminData, ScheduledBooking } from '../context/AdminDataContext';
import { Calendar, Clock, Phone, User, CheckCircle2, Trash2, Plus, X } from 'lucide-react';

export const AdminAppointments: React.FC = () => {
  const { appointments, updateAppointmentStatus, deleteAppointment, addAppointment } =
    useAdminData();
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newBooking, setNewBooking] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().slice(0, 10),
    timeSlot: '11:30 AM - 01:00 PM',
    service: 'Architectural & Building Design',
    meetingType: 'In-Person at Dhaka Head Office',
    notes: '',
  });

  const filtered = appointments.filter((app) => {
    return statusFilter === 'All' || app.status === statusFilter;
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBooking.name || !newBooking.phone) return;
    addAppointment(newBooking);
    setShowAddModal(false);
    setNewBooking({
      name: '',
      phone: '',
      date: new Date().toISOString().slice(0, 10),
      timeSlot: '11:30 AM - 01:00 PM',
      service: 'Architectural & Building Design',
      meetingType: 'In-Person at Dhaka Head Office',
      notes: '',
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Consultation Appointments
          </h2>
          <p className="text-xs text-slate-500">
            Bookings made through &ldquo;Schedule A Call Now&rdquo;
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Consultation</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              statusFilter === status
                ? 'bg-emerald-700 text-white'
                : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Grid of Appointments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400 bg-white rounded-xl border border-slate-200">
            No appointments found for this filter.
          </div>
        ) : (
          filtered.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      {app.name}
                    </h3>
                    <a
                      href={`tel:${app.phone}`}
                      className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>{app.phone}</span>
                    </a>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      app.status === 'Confirmed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : app.status === 'Pending'
                        ? 'bg-amber-100 text-amber-800'
                        : app.status === 'Completed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {app.status}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="font-semibold text-slate-800">{app.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{app.timeSlot}</span>
                  </div>
                  <div className="pt-1 text-[11px] text-slate-500">
                    <strong>Service:</strong> {app.service}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <strong>Mode:</strong> {app.meetingType}
                  </div>
                  {app.notes && (
                    <div className="text-[11px] text-slate-700 bg-white p-2 rounded border border-slate-200/60 mt-1 italic">
                      &ldquo;{app.notes}&rdquo;
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Status Update & Delete */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <select
                  value={app.status}
                  onChange={(e) => updateAppointmentStatus(app.id, e.target.value as any)}
                  className="text-xs font-semibold py-1 px-2 rounded border border-slate-300 bg-white"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <div className="flex items-center gap-1">
                  <a
                    href={`tel:${app.phone}`}
                    className="p-1.5 rounded hover:bg-emerald-50 text-emerald-700"
                    title="Call Client"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      if (confirm(`Cancel and delete appointment for ${app.name}?`)) {
                        deleteAppointment(app.id);
                      }
                    }}
                    className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Consultation Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100 animate-in fade-in duration-200">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Schedule Consultation</h3>
            <p className="text-xs text-slate-500 mb-4">Book direct meeting with Lead Engineer</p>

            <form onSubmit={handleCreate} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Client Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al-Haj Shamsur Rahman"
                  value={newBooking.name}
                  onChange={(e) => setNewBooking({ ...newBooking, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  value={newBooking.phone}
                  onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Time Slot</label>
                  <select
                    value={newBooking.timeSlot}
                    onChange={(e) => setNewBooking({ ...newBooking, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  >
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                    <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                    <option value="03:00 PM - 04:30 PM">03:00 PM - 04:30 PM</option>
                    <option value="05:00 PM - 06:30 PM">05:00 PM - 06:30 PM</option>
                    <option value="07:00 PM - 08:30 PM">07:00 PM - 08:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Service</label>
                <select
                  value={newBooking.service}
                  onChange={(e) => setNewBooking({ ...newBooking, service: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                >
                  <option value="Architectural & Building Design">Architectural &amp; Building Design</option>
                  <option value="Cost Estimation & BOQ Calculation">Cost Estimation &amp; BOQ</option>
                  <option value="Soil Test & Structural Analysis">Soil Test &amp; Structural</option>
                  <option value="Duplex & Interior Architecture">Duplex &amp; Interior</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Meeting Type</label>
                <select
                  value={newBooking.meetingType}
                  onChange={(e) => setNewBooking({ ...newBooking, meetingType: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                >
                  <option value="In-Person at Dhaka Head Office">In-Person at Dhaka Head Office</option>
                  <option value="In-Person at Kushtia Branch">In-Person at Kushtia Branch</option>
                  <option value="WhatsApp Video Conference">WhatsApp Video Conference</option>
                  <option value="Direct Phone Call">Direct Phone Call</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Discussion Agenda / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Plot details, drawings required..."
                  value={newBooking.notes}
                  onChange={(e) => setNewBooking({ ...newBooking, notes: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg shadow-sm"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
