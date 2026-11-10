import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, MapPin, X, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/architectData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialNote = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-11-12',
    timeSlot: '11:00 AM - 12:30 PM',
    service: 'Architectural & Building Design',
    meetingType: 'In-Person at Dhaka Head Office',
    notes: initialNote,
  });

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Appointment Scheduled!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our senior civil engineer will connect with you on{' '}
              <strong className="text-emerald-800">{formData.date} ({formData.timeSlot})</strong> at{' '}
              <span className="font-semibold">{formData.phone}</span>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1">
              <div><strong>Meeting:</strong> {formData.meetingType}</div>
              <div><strong>Topic:</strong> {formData.service}</div>
              <div><strong>Helpline:</strong> {COMPANY_CONTACT.phoneDisplay}</div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Expert Building Consultation</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Schedule A Call Now
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Connect directly with our Lead Architect &amp; Structural Engineer to review your building goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md. Kabir Hossain"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Contact Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  >
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                    <option value="11:30 AM - 01:00 PM">11:30 AM - 01:00 PM</option>
                    <option value="03:00 PM - 04:30 PM">03:00 PM - 04:30 PM</option>
                    <option value="05:00 PM - 06:30 PM">05:00 PM - 06:30 PM</option>
                    <option value="07:00 PM - 08:30 PM">07:00 PM - 08:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  >
                    <option value="Architectural & Building Design">Architectural Design</option>
                    <option value="Structural Engineering & Soil Test">Structural &amp; Soil Test</option>
                    <option value="Cost Estimation & BOQ Calculation">Cost Estimation &amp; BOQ</option>
                    <option value="Duplex & Interior Architecture">Duplex &amp; Interior Design</option>
                    <option value="Complete Construction Turnkey">Turnkey Construction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Meeting Mode
                  </label>
                  <select
                    value={formData.meetingType}
                    onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  >
                    <option value="In-Person at Dhaka Office">In-Person at Dhaka Head Office</option>
                    <option value="In-Person at Kushtia Branch">In-Person at Kushtia Branch</option>
                    <option value="Direct Phone Call">Direct Phone Call</option>
                    <option value="WhatsApp Video Call">WhatsApp Video Conference</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Additional Notes (Plot Location, Land Size)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 4 Katha plot in Uttara Sector 11, planning for a 6-story building..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white font-bold text-sm py-3 rounded-lg shadow-md transition-all cursor-pointer"
              >
                Confirm Appointment Schedule
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
