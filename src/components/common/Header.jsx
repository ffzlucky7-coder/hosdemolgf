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
  Moon,
  Sun,
  Globe,
  DollarSign,
  X,
  CheckCircle2
} from 'lucide-react';

export default function Header() {
  const {
    currentRole,
    selectedHotelId,
    setSelectedHotelId,
    hotels,
    selectedHotel,
    setIsCommandPaletteOpen,
    setIsCheckInModalOpen,
    setIsNewReservationModalOpen,
    approvals,
    notificationToast,
    isDarkMode,
    setIsDarkMode,
    selectedCurrency,
    setSelectedCurrency,
    selectedLanguage,
    setSelectedLanguage,
    showToast
  } = useApp();

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notificationsList = [
    { id: 1, title: 'New VIP Treehouse Booking', desc: 'Mr. Ankit Verma booked Luxury Treehouse with Jacuzzi (4 Nights)', time: '2 mins ago', unread: true },
    { id: 2, title: 'F&B In-Villa Order Sent to KDS', desc: 'Villa 204 ordered 1x Laal Maas Royal & 2x Garlic Naan', time: '10 mins ago', unread: true },
    { id: 3, title: '2-Way STAAH Rate Sync', desc: 'Pushed ₹9,500 rate update across Booking.com and MMT', time: '25 mins ago', unread: false },
    { id: 4, title: 'Housekeeping Turnover Complete', desc: 'Pool Villa 106 marked Clean & Inspected by Sunita Devi', time: '40 mins ago', unread: false },
  ];

  const getRoleTitle = () => {
    switch (currentRole) {
      case 'super-admin': return 'Super Admin (SaaS Owner)';
      case 'hotel-admin': return 'Resort General Manager';
      case 'area-manager': return 'Cluster Operations Head';
      case 'front-desk': return 'Front Desk Concierge';
      case 'housekeeping': return 'Housekeeping Executive';
      case 'restaurant': return 'F&B Manager / POS';
      case 'banquets': return 'Wedding & Banquet Lead';
      case 'channel-manager': return 'Revenue & OTA Manager';
      case 'inventory': return 'Materials & Inventory Lead';
      case 'sales-crm': return 'Corporate Sales Manager';
      case 'reports': return 'Financial Controller';
      case 'ai-receptionist': return 'AI Virtual Concierge';
      case 'security-apis': return 'Chief Information Security';
      case 'settings': return 'System Administrator';
      default: return 'Administrator';
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
      {/* Live Toast Banner */}
      {notificationToast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-2xl shadow-xl border text-xs font-bold flex items-center gap-2.5 animate-in slide-in-from-top-2 duration-200 ${
          notificationToast.type === 'warning' 
            ? 'bg-amber-50 text-amber-900 border-amber-200' 
            : 'bg-emerald-50 text-emerald-900 border-emerald-200'
        }`}>
          <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{notificationToast.message}</span>
        </div>
      )}

      {/* Left: Global Search Trigger (Cmd + K) */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="w-full flex items-center justify-between px-3.5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 transition-colors shadow-2xs group"
        >
          <div className="flex items-center gap-2.5">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            <span className="font-medium">Quick search rooms, guests, folios, KOTs...</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 rounded-md shadow-2xs">
            <Command className="w-3 h-3" /> K
          </kbd>
        </button>
      </div>

      {/* Right Controls: Hotel Selector, Multi-Currency, Theme, Alerts, User Profile */}
      <div className="flex items-center gap-3">
        {/* Multi-Hotel Selector */}
        {currentRole !== 'super-admin' && (
          <div className="relative">
            <select
              value={selectedHotelId}
              onChange={(e) => {
                setSelectedHotelId(e.target.value);
                showToast(`Switched active property to ${hotels.find(h => h.id === e.target.value)?.name.split(',')[0]}`);
              }}
              className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold py-2 pl-3 pr-8 rounded-xl cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-2xs"
            >
              {hotels.map(h => (
                <option key={h.id} value={h.id}>
                  🏨 {h.name.split(',')[0]}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        )}

        {/* Currency Switcher (Module 20) */}
        <select
          value={selectedCurrency}
          onChange={(e) => {
            setSelectedCurrency(e.target.value);
            showToast(`Display currency switched to ${e.target.value}`);
          }}
          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold py-2 px-2.5 rounded-xl cursor-pointer outline-none shadow-2xs"
        >
          <option value="INR">₹ INR</option>
          <option value="USD">$ USD</option>
          <option value="EUR">€ EUR</option>
          <option value="AED">د.إ AED</option>
        </select>

        {/* Language Switcher (Module 20) */}
        <select
          value={selectedLanguage}
          onChange={(e) => {
            setSelectedLanguage(e.target.value);
            showToast(`Language set to ${e.target.value === 'hi' ? 'हिंदी' : e.target.value.toUpperCase()}`);
          }}
          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold py-2 px-2.5 rounded-xl cursor-pointer outline-none shadow-2xs hidden sm:block"
        >
          <option value="en">🌐 English</option>
          <option value="hi">🇮🇳 हिंदी</option>
          <option value="fr">🇫🇷 Français</option>
          <option value="de">🇩🇪 Deutsch</option>
        </select>

        {/* Quick Check-in Button */}
        {currentRole === 'front-desk' && (
          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+ Walk-In</span>
          </button>
        )}

        {/* Notification Bell with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen(prev => !prev)}
            className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 space-y-3 z-50 animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-xs text-slate-900">Operational Alerts & Feed</span>
                <button
                  onClick={() => setIsNotificationsOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto divide-y divide-slate-100 text-xs">
                {notificationsList.map(n => (
                  <div key={n.id} className="pt-2 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0"></span>
                    <div>
                      <div className="font-bold text-slate-900">{n.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{n.desc}</div>
                      <div className="text-[10px] text-slate-400 font-medium mt-1">{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Info Avatar & Role Badge */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
            {currentRole === 'super-admin' ? 'SA' : 'GM'}
          </div>
          <div className="hidden lg:block text-left">
            <div className="text-xs font-bold text-slate-900 leading-tight">
              {currentRole === 'super-admin' ? 'Shri Mahendra Singh' : 'Gajendra Singh Rathore'}
            </div>
            <div className="text-[10px] font-semibold text-indigo-600">
              {getRoleTitle()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
