import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Settings,
  Building2,
  Clock,
  Shield,
  Bell,
  Save,
  Check,
  Sparkles,
  CreditCard
} from 'lucide-react';

export default function SystemSettings() {
  const { showToast } = useApp();

  const [settings, setSettings] = useState({
    hotelName: 'Grand Horizon Hotel',
    propertyCode: 'GHH-DEL-01',
    currency: 'INR (₹)',
    gstRate: '12%',
    checkInTime: '02:00 PM',
    checkOutTime: '11:00 AM',
    aiAutopilot: true,
    whatsappGuestAlerts: true,
    autoAssignCleanRooms: true,
    kitchenKdsSync: true
  });

  const handleSave = (e) => {
    e.preventDefault();
    showToast('Hotel system settings updated successfully!');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Property Configuration & Settings</h1>
          <p className="text-sm text-slate-500 mt-1">Configure operational policies, taxation rules, and AI automation triggers.</p>
        </div>
        <button
          type="submit"
          form="settings-form"
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <form id="settings-form" onSubmit={handleSave} className="space-y-8">
        {/* General Hotel Settings (Page 18) */}
        <div className="custom-card p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600" />
            <span>General Property Information</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Hotel Display Name</label>
              <input
                type="text"
                value={settings.hotelName}
                onChange={(e) => setSettings({ ...settings, hotelName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Property Master Code</label>
              <input
                type="text"
                value={settings.propertyCode}
                onChange={(e) => setSettings({ ...settings, propertyCode: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Default Base Currency</label>
              <input
                type="text"
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">GST / VAT Standard Rate</label>
              <input
                type="text"
                value={settings.gstRate}
                onChange={(e) => setSettings({ ...settings, gstRate: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
          </div>
        </div>

        {/* Operational Timings (Page 18) */}
        <div className="custom-card p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>Check-in & Check-out Policies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Standard Check-In Time</label>
              <input
                type="text"
                value={settings.checkInTime}
                onChange={(e) => setSettings({ ...settings, checkInTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Standard Check-Out Time</label>
              <input
                type="text"
                value={settings.checkOutTime}
                onChange={(e) => setSettings({ ...settings, checkOutTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
          </div>
        </div>

        {/* Automation Toggles (Page 18) */}
        <div className="custom-card p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Smart Automation & AI Features</span>
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
              <div>
                <div className="font-bold text-slate-900">AI Receptionist Autopilot</div>
                <div className="text-slate-500 mt-0.5">Automatically reply to guest queries regarding Wi-Fi, food menu, and checkouts.</div>
              </div>
              <input
                type="checkbox"
                checked={settings.aiAutopilot}
                onChange={(e) => setSettings({ ...settings, aiAutopilot: e.target.checked })}
                className="w-4 h-4 text-indigo-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
              <div>
                <div className="font-bold text-slate-900">WhatsApp Keycard & Invoice Dispatch</div>
                <div className="text-slate-500 mt-0.5">Send digital invoices and room Wi-Fi passwords directly to guest WhatsApp upon check-in.</div>
              </div>
              <input
                type="checkbox"
                checked={settings.whatsappGuestAlerts}
                onChange={(e) => setSettings({ ...settings, whatsappGuestAlerts: e.target.checked })}
                className="w-4 h-4 text-indigo-600 rounded"
              />
            </div>

            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
              <div>
                <div className="font-bold text-slate-900">Auto-Assign Clean & Inspected Rooms</div>
                <div className="text-slate-500 mt-0.5">Prioritize highest cleanliness score rooms for express arrivals.</div>
              </div>
              <input
                type="checkbox"
                checked={settings.autoAssignCleanRooms}
                onChange={(e) => setSettings({ ...settings, autoAssignCleanRooms: e.target.checked })}
                className="w-4 h-4 text-indigo-600 rounded"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
