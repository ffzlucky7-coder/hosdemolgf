import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Building2,
  Bell,
  ChevronDown,
  Sparkles,
  Command,
  Plus,
  Globe,
  X,
  CheckCircle2,
  Hotel,
  CloudSun,
  Layers,
  Crown,
  Zap,
  BedDouble,
  UtensilsCrossed
} from 'lucide-react';

export default function Header() {
  const {
    currentRole,
    setCurrentRole,
    currentView,
    setCurrentView,
    selectedHotelId,
    setSelectedHotelId,
    hotels,
    selectedHotel,
    setIsCommandPaletteOpen,
    setIsCheckInModalOpen,
    setIsNewReservationModalOpen,
    approvals,
    notificationToast,
    selectedCurrency,
    setSelectedCurrency,
    selectedLanguage,
    setSelectedLanguage,
    showToast
  } = useApp();

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const notificationsList = [
    { id: 1, title: 'New VIP Villa Booking', desc: 'Mr. Rohit Sharma confirmed Presidential Sovereign Villa (3 Nights @ ₹24,000/N)', time: '2 mins ago', unread: true },
    { id: 2, title: 'F&B In-Villa Order Sent to KDS', desc: 'Villa 204 ordered 1x Mediterranean Sea Bass & 2x Sauvignon Blanc', time: '10 mins ago', unread: true },
    { id: 3, title: '2-Way STAAH Rate Parity Sync', desc: 'Pushed ₹9,500 rate update across Booking.com, Agoda & MMT', time: '25 mins ago', unread: false },
    { id: 4, title: 'Housekeeping Turnover Complete', desc: 'Pool Villa 106 marked Clean & Inspected by Housekeeping Lead', time: '40 mins ago', unread: false },
  ];

  const roleTitles = {
    'super-admin': 'SaaS Platform Owner',
    'hotel-admin': 'Resort General Manager',
    'area-manager': 'Cluster Operations Head',
    'front-desk': 'Front Desk Concierge',
    'housekeeping': 'Housekeeping Lead',
    'restaurant': 'F&B Manager / POS',
    'banquets': 'Wedding & Banquet Lead',
    'channel-manager': 'Revenue & OTA Manager',
    'inventory': 'Materials & Inventory Lead',
    'sales-crm': 'Corporate Sales Manager',
    'reports': 'Financial Controller',
    'ai-receptionist': 'AI Virtual Concierge',
    'security-apis': 'Chief Information Security',
    'settings': 'System Administrator',
  };

  const activeRoleName = roleTitles[currentRole] || 'Front Desk Concierge';

  const userAvatars = {
    'super-admin': { name: 'Devendra Singhania', initials: 'DS' },
    'hotel-admin': { name: 'Vikramaditya Singhania', initials: 'VS' },
    'area-manager': { name: 'Karan Malhotra', initials: 'KM' },
    'front-desk': { name: 'Amit Patel', initials: 'AP' },
    'housekeeping': { name: 'Ramesh Kumar', initials: 'RK' },
    'restaurant': { name: 'Chef Laurent Varma', initials: 'LV' },
    'banquets': { name: 'Pooja Rathore', initials: 'PR' },
    'channel-manager': { name: 'Ananya Deshmukh', initials: 'AD' },
    'sales-crm': { name: 'Vikram Singhania', initials: 'VS' },
  };

  const activeUser = userAvatars[currentRole] || { name: 'Devendra Singhania', initials: 'DS' };

  return (
    <header className="h-16 shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between z-10">
      {/* Left: Global Search & Live Sync Status */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-xs sm:max-w-sm md:max-w-md">
        {/* Quick Command Search Bar */}
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0" />
            <span className="font-medium text-slate-500 truncate">Quick search (Cmd + K)...</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 rounded-md shrink-0">
            <Command className="w-3 h-3" /> K
          </kbd>
        </button>

        {/* Live STAAH Sync Pulse */}
        <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>STAAH 2-Way (22ms)</span>
        </div>
      </div>

      {/* Right Controls: Weather, Occupancy, Property Switcher, Fast Actions, Currency, Notifications, Profile */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        {/* Live Occupancy Gauge */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-900 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          <span className="font-mono font-bold text-indigo-800">{selectedHotel.occupancy}%</span>
          <span className="text-[11px] text-indigo-700 font-medium">Occ</span>
        </div>

        {/* Multi-Hotel Property Switcher */}
        {currentRole !== 'super-admin' && (
          <div className="relative flex items-center">
            <Hotel className="w-3.5 h-3.5 text-indigo-600 absolute left-2.5 pointer-events-none" />
            <select
              value={selectedHotelId}
              onChange={(e) => {
                setSelectedHotelId(e.target.value);
                const hName = hotels.find(h => h.id === e.target.value)?.name.split(',')[0];
                showToast(`Switched active property to "${hName}"!`);
              }}
              className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold py-1.5 pl-7 pr-7 rounded-xl cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20 max-w-[140px] sm:max-w-[180px] md:max-w-[220px] truncate"
            >
              {hotels.map(h => (
                <option key={h.id} value={h.id}>
                  {h.name.split(',')[0]}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        )}

        {/* Fast Action Buttons in Header */}
        <button
          onClick={() => {
            setIsCheckInModalOpen(true);
            showToast('Opening 5-Step Express Check-In Wizard');
          }}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95 shrink-0"
        >
          <BedDouble className="w-3.5 h-3.5" />
          <span>Check-In</span>
        </button>

        <button
          onClick={() => {
            setIsNewReservationModalOpen(true);
            showToast('Opening Direct Walk-In Booking Engine');
          }}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95 shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+ Booking</span>
        </button>

        {/* Currency Switcher */}
        <select
          value={selectedCurrency}
          onChange={(e) => {
            setSelectedCurrency(e.target.value);
            showToast(`Display currency switched to ${e.target.value}`);
          }}
          className="hidden sm:block bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold py-1.5 px-2 rounded-xl cursor-pointer outline-none shrink-0"
        >
          <option value="INR">₹ INR</option>
          <option value="USD">$ USD</option>
          <option value="EUR">€ EUR</option>
          <option value="AED">AED</option>
        </select>

        {/* Notification Bell with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(prev => !prev)}
            className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-84 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 space-y-3 z-50 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xs text-slate-900">Operational Dispatch Feed</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-mono text-[10px] font-bold">4 Live</span>
                </div>
                <button
                  onClick={() => setIsNotificationsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto divide-y divide-slate-100 text-xs">
                {notificationsList.map(n => (
                  <div key={n.id} className="pt-2 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0"></span>
                    <div>
                      <div className="font-bold text-slate-900">{n.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-medium">{n.desc}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setIsNotificationsOpen(false);
                  setCurrentView('notifications');
                }}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl font-bold text-xs text-slate-700 text-center transition-colors cursor-pointer"
              >
                Open Full WhatsApp & Dispatch Engine →
              </button>
            </div>
          )}
        </div>

        {/* User Info Avatar & Role Badge */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-mono font-black text-xs flex items-center justify-center shadow-xs">
            {activeUser.initials}
          </div>
          <div className="hidden xl:block text-left">
            <div className="text-xs font-display font-bold text-slate-900 leading-tight">
              {activeUser.name}
            </div>
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
              {activeRoleName}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
