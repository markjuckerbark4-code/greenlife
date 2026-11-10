import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import {
  MessageSquare,
  Calendar,
  Calculator,
  Video,
  FileText,
  Star,
  Clock,
  ArrowRight,
  TrendingUp,
  MapPin,
  CheckCircle,
  Plus,
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigateTab }) => {
  const { inquiries, appointments, calculatorLeads, projects, blogs, reviews } = useAdminData();

  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;
  const pendingAppointmentsCount = appointments.filter((a) => a.status === 'Pending').length;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Welcome & Top Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
            Green Architect Control Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">
            Welcome back, Civil Engineer Tutul
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl">
            Manage your incoming plot inquiries, schedule consultations, update project videos, publish architectural articles, and edit company settings.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigateTab('projects')}
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/20 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-emerald-300" />
            <span>Add Project Video</span>
          </button>
          <button
            onClick={() => onNavigateTab('inquiries')}
            className="bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Review Inquiries</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Inquiries Card */}
        <div
          onClick={() => onNavigateTab('inquiries')}
          className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Total Inquiries
            </span>
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            {inquiries.length}
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              {newInquiriesCount} New
            </span>
            <span className="text-slate-400">awaiting reply</span>
          </div>
        </div>

        {/* Appointments Card */}
        <div
          onClick={() => onNavigateTab('appointments')}
          className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Appointments
            </span>
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            {appointments.length}
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
              {pendingAppointmentsCount} Pending
            </span>
            <span className="text-slate-400">to confirm</span>
          </div>
        </div>

        {/* Cost Calculator Leads Card */}
        <div
          onClick={() => onNavigateTab('calculator-leads')}
          className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Calculator Leads
            </span>
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Calculator className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            {calculatorLeads.length}
          </div>
          <div className="text-xs text-slate-500">
            Plot estimates run by clients
          </div>
        </div>

        {/* Live Content Summary Card */}
        <div
          onClick={() => onNavigateTab('projects')}
          className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Live Content
            </span>
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Video className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
            {projects.length + blogs.length}
          </div>
          <div className="text-xs text-slate-500">
            {projects.length} Videos • {blogs.length} Articles
          </div>
        </div>
      </div>

      {/* Two Column Layout: Recent Inquiries & Upcoming Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Customer Inquiries (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Recent Project Inquiries
              </h3>
              <p className="text-xs text-slate-500">
                Direct submissions from the &ldquo;Have A Project Idea In Mind?&rdquo; form
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 4).map((inq) => (
              <div
                key={inq.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">
                      {inq.fullName}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        inq.status === 'New'
                          ? 'bg-emerald-100 text-emerald-800'
                          : inq.status === 'Contacted'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-slate-200 text-slate-800'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="font-semibold">{inq.phone}</span>
                    <span>•</span>
                    <span className="text-emerald-800 font-medium">{inq.floors}</span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 truncate max-w-md">
                    <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                    <span className="truncate">{inq.location}</span>
                  </div>
                </div>

                <div className="text-right sm:text-right flex-shrink-0">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    {inq.date}
                  </span>
                  <button
                    onClick={() => onNavigateTab('inquiries')}
                    className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Upcoming Scheduled Consultations (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Upcoming Consultations
              </h3>
              <p className="text-xs text-slate-500">
                Bookings from &ldquo;Schedule A Call Now&rdquo;
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('appointments')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Manage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {appointments.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">
                No consultations currently scheduled.
              </p>
            ) : (
              appointments.slice(0, 4).map((app) => (
                <div
                  key={app.id}
                  className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-emerald-200 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-800">
                      {app.name}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        app.status === 'Confirmed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : app.status === 'Pending'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <span>{app.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{app.timeSlot}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 bg-white p-2 rounded border border-slate-200/60">
                    <span className="font-semibold text-slate-700">Mode:</span> {app.meetingType} • {app.phone}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
