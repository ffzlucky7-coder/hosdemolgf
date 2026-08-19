import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  BedDouble,
  User,
  Building2,
  FileText,
  Calendar,
  X,
  ArrowRight,
  Sparkles,
  ClipboardList,
  UtensilsCrossed,
  CheckCircle2,
  BarChart3,
  Grid
} from 'lucide-react';

export default function QuickCommandPalette() {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    setCurrentRole,
    setCurrentView,
    openGuestProfile,
    setIsCheckInModalOpen
  } = useApp();

  const [search, setSearch] = useState('');

  if (!isCommandPaletteOpen) return null;

  const quickActions = [
    { title: 'Check In Guest (Wizard)', desc: 'Start 5-step guest arrival check-in', role: 'front-desk', view: 'check-in-view', action: () => setIsCheckInModalOpen(true), icon: Sparkles },
    { title: 'Interactive Tape Chart', desc: '14-day Gantt timeline calendar', role: 'front-desk', view: 'tape-chart', icon: Calendar },
    { title: 'Room Grid Floor Matrix', desc: 'Floor 1 & 2 live clean/dirty matrix', role: 'front-desk', view: 'room-grid', icon: Grid },
    { title: 'Guest Profile: Rohit Sharma', desc: 'VIP Guest, Presidential Villa 204', role: 'front-desk', view: 'dashboard', action: () => openGuestProfile({ name: 'Rohit Sharma', avatar: 'RS', phone: '+91 98765 43210', email: 'rohit.sharma@gmail.com' }), icon: User },
    { title: 'Guest Billing Invoice #INV-2025-0587', desc: 'Rohit Sharma, ₹80,640 Settled', role: 'front-desk', view: 'invoice', icon: FileText },
    { title: 'Housekeeping Kanban Board', desc: 'Manage room cleaning tasks & inspection', role: 'housekeeping', view: 'housekeeping', icon: ClipboardList },
    { title: 'Restaurant POS Menu & KDS', desc: 'Take food orders, KDS sync & bill villas', role: 'restaurant', view: 'restaurant', icon: UtensilsCrossed },
    { title: 'Area Manager: North Zone Hotels', desc: 'Lohagarh Fort Resort & properties', role: 'hotel-admin', view: 'north-zone', icon: Building2 },
    { title: 'Approval Center (3 Pending)', desc: 'Purchase orders & refunds', role: 'area-manager', view: 'approvals', icon: CheckCircle2 },
    { title: 'Super Admin: All Organizations', desc: 'Lohagarh Hospitality ORG-100244', role: 'super-admin', view: 'dashboard', icon: Building2 },
    { title: 'Revenue & Occupancy Reports', desc: 'Charts & analytics', role: 'reports', view: 'reports', icon: BarChart3 }
  ];

  const filtered = quickActions.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (item) => {
    setCurrentRole(item.role);
    setCurrentView(item.view);
    if (item.action) item.action();
    setIsCommandPaletteOpen(false);
    setSearch('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden">
        {/* Search input header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Type a command, guest name, room number, or screen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-slate-800 text-sm font-medium placeholder:text-slate-400"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400 font-medium">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50/70 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-indigo-100 text-slate-600 group-hover:text-indigo-600 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-indigo-900 font-display">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between font-medium">
          <span>Navigate with <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">↓</kbd> and <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">Enter</kbd></span>
          <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
