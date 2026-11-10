import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { Logo } from '../components/Logo';
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  Calculator,
  Video,
  FileText,
  Star,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Shield,
  User,
} from 'lucide-react';
import { AdminDashboard } from './AdminDashboard';
import { AdminInquiries } from './AdminInquiries';
import { AdminAppointments } from './AdminAppointments';
import { AdminProjects } from './AdminProjects';
import { AdminBlogs } from './AdminBlogs';
import { AdminReviews } from './AdminReviews';
import { AdminSettings } from './AdminSettings';

interface AdminLayoutProps {
  onBackToWebsite: () => void;
  onLogout: () => void;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ onBackToWebsite, onLogout }) => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { inquiries, appointments, calculatorLeads } = useAdminData();

  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;
  const pendingAppointmentsCount = appointments.filter((a) => a.status === 'Pending').length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
    {
      id: 'inquiries',
      label: 'Client Inquiries',
      icon: MessageSquare,
      badge: newInquiriesCount > 0 ? newInquiriesCount : undefined,
    },
    {
      id: 'appointments',
      label: 'Consultation Calls',
      icon: Calendar,
      badge: pendingAppointmentsCount > 0 ? pendingAppointmentsCount : undefined,
    },
    {
      id: 'calculator-leads',
      label: 'Estimator Leads',
      icon: Calculator,
      count: calculatorLeads.length,
    },
    { id: 'projects', label: 'Featured Projects', icon: Video },
    { id: 'blogs', label: 'Recent Blog Posts', icon: FileText },
    { id: 'reviews', label: 'Client Reviews', icon: Star },
    { id: 'settings', label: 'Settings & Contact', icon: Settings },
  ];

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-800">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-40 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Logo size="sm" whiteText={true} />
          <span className="text-xs bg-emerald-700 text-white font-bold px-2 py-0.5 rounded ml-1">
            Admin
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToWebsite}
            className="p-1.5 text-xs text-slate-300 hover:text-white"
            title="View Live Website"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 text-slate-300 hover:text-white"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col justify-between z-50 transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-5 flex-1 overflow-y-auto">
          {/* Brand Header */}
          <div className="pb-6 border-b border-slate-800 flex items-center justify-between">
            <div onClick={onBackToWebsite} className="cursor-pointer">
              <Logo size="md" whiteText={true} />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admin User Mini Card */}
          <div className="my-5 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              <Shield className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">Engr. Tutul (Admin)</div>
              <div className="text-[10px] text-emerald-400 font-medium">Principal Engineer</div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge ? (
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center animate-pulse">
                      {item.badge}
                    </span>
                  ) : item.count !== undefined ? (
                    <span className="text-[10px] text-slate-500 font-medium">
                      {item.count}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer: View Website & Logout */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <button
            onClick={onBackToWebsite}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span>View Public Website</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-red-400 hover:bg-red-950/40 text-xs font-semibold transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        {/* Top Header inside main */}
        <div className="hidden md:flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>Admin Portal</span>
            <span>/</span>
            <span className="text-emerald-800 font-extrabold capitalize">
              {activeTab.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </button>

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        {activeTab === 'dashboard' && <AdminDashboard onNavigateTab={handleSelectTab} />}
        {activeTab === 'inquiries' && <AdminInquiries />}
        {activeTab === 'appointments' && <AdminAppointments />}
        {activeTab === 'calculator-leads' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Construction Cost Estimator Leads
              </h2>
              <p className="text-xs text-slate-500">
                Log of visitors who used the Bangladesh Construction Cost Calculator
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase">
                    <th className="p-3">Date</th>
                    <th className="p-3">Land Size</th>
                    <th className="p-3">Stories</th>
                    <th className="p-3">Finishing</th>
                    <th className="p-3">Foundation</th>
                    <th className="p-3">Built-up Sqft</th>
                    <th className="p-3">Estimated Budget</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {calculatorLeads.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50">
                      <td className="p-3 text-slate-400">{c.date}</td>
                      <td className="p-3 font-bold text-slate-900">{c.landSize}</td>
                      <td className="p-3 font-semibold">{c.floors} Floors</td>
                      <td className="p-3 text-slate-600">{c.finishQuality}</td>
                      <td className="p-3 text-slate-600">{c.foundationType}</td>
                      <td className="p-3 font-semibold text-slate-700">{c.builtUpSqft.toLocaleString()} Sq.ft</td>
                      <td className="p-3 font-black text-emerald-800">{c.estimatedCostBDT}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'projects' && <AdminProjects />}
        {activeTab === 'blogs' && <AdminBlogs />}
        {activeTab === 'reviews' && <AdminReviews />}
        {activeTab === 'settings' && <AdminSettings />}
      </main>
    </div>
  );
};
