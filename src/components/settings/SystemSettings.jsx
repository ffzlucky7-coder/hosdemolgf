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
    hotelName: 'Aura Solis Grand Sanctuary & Spa',
    propertyCode: 'ASG-GOA-01',
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
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 20 • Property Configuration & Settings</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Property Configuration & Settings</h1>
          <p className="text-xs text-slate-500 mt-0.5">Configure operational policies, taxation rules, and AI automation triggers.</p>
        </div>
        <button
          type="submit"
          form="settings-form"
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <form id="settings-form" onSubmit={handleSave} className="space-y-8">
        {/* General Hotel Settings */}
        <div className="custom-card p-6 space-y-4">
          <h2 className="text-base font-display font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600" />
            <span>General Property Information</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Hotel Display Name</label>
              <input
                type="text"
                value={settings.hotelName}
                onChange={(e) => setSettings({ ...settings, hotelName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">Property Master Code</label>
              <input
                type="text"
                value={settings.propertyCode}
                onChange={(e) => setSettings({ ...settings, propertyCode: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">Default Base Currency</label>
              <input
                type="text"
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">GST / VAT Standard Rate</label>
              <input
                type="text"
                value={settings.gstRate}
                onChange={(e) => setSettings({ ...settings, gstRate: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono font-medium outline-none"
              />
            </div>
          </div>
        </div>

        {/* Operational Timings */}
        <div className="custom-card p-6 space-y-4">
          <h2 className="text-base font-display font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>Check-in & Check-out Policies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Standard Check-In Time</label>
              <input
                type="text"
                value={settings.checkInTime}
                onChange={(e) => setSettings({ ...settings, checkInTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono font-medium outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">Standard Check-Out Time</label>
              <input
                type="text"
                value={settings.checkOutTime}
                onChange={(e) => setSettings({ ...settings, checkOutTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono font-medium outline-none"
              />
            </div>
          </div>
        </div>

        {/* Automation Toggles */}
        <div className="custom-card p-6 space-y-4">
          <h2 className="text-base font-display font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Smart Automation & AI Features</span>
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl">
              <div>
                <div className="font-bold text-slate-900">AI Virtual Concierge Autopilot</div>
                <div className="text-slate-500 mt-0.5 font-medium">Automatically reply to guest queries regarding Wi-Fi, in-villa dining, and pool maintenance.</div>
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
                <div className="font-bold text-slate-900">WhatsApp RFID Keycard & Invoice Dispatch</div>
                <div className="text-slate-500 mt-0.5 font-medium">Send digital PDF tax folios and resort Wi-Fi passwords directly to guest WhatsApp.</div>
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
                <div className="font-bold text-slate-900">Auto-Assign Clean & Inspected Villas</div>
                <div className="text-slate-500 mt-0.5 font-medium">Prioritize highest cleanliness score units for express walk-ins.</div>
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
