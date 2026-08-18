import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  User,
  Phone,
  Mail,
  Calendar,
  CreditCard,
  Building,
  CheckCircle,
  FileText,
  Star,
  ChevronRight
} from 'lucide-react';

export default function GuestQuickViewDrawer() {
  const {
    isGuestDrawerOpen,
    setIsGuestDrawerOpen,
    selectedGuestForDrawer,
    setCurrentView
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview');

  if (!isGuestDrawerOpen) return null;

  const guest = selectedGuestForDrawer || {
    name: 'Rohit Sharma',
    avatar: 'RS',
    email: 'rohit.sharma@gmail.com',
    phone: '+91 98765 43210',
    room: 'Room 204 (Suite)',
    totalStays: 4,
    totalSpend: '₹84,500',
    vip: true
  };

  const stays = [
    { dates: 'May 15, 2025 – May 18, 2025', room: 'Room 204 (Suite)', nights: '3 Nights', amount: '₹25,500', status: 'In-House' },
    { dates: 'Feb 10, 2025 – Feb 12, 2025', room: 'Room 101 (Deluxe King)', nights: '2 Nights', amount: '₹10,000', status: 'Completed' },
    { dates: 'Nov 20, 2024 – Nov 22, 2024', room: 'Room 301 (Executive)', nights: '2 Nights', amount: '₹19,000', status: 'Completed' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        <div>
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-slate-900">Guest Quick Profile</span>
              {guest.vip && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> VIP Guest
                </span>
              )}
            </div>
            <button
              onClick={() => setIsGuestDrawerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Hero (Matches Page 9) */}
          <div className="p-6 bg-slate-50/70 border-b border-slate-100 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-md">
              {guest.avatar || 'RS'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{guest.name}</h2>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{guest.email || 'guest@example.com'}</span>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{guest.phone || '+91 98765 43210'}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 px-6 gap-6 text-xs font-semibold">
            {['overview', 'bookings', 'billing', 'notes'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`py-3 capitalize border-b-2 transition-colors ${
                  activeTab === t
                    ? 'border-indigo-600 text-indigo-600 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Total Stays</div>
                <div className="text-xl font-bold text-slate-900 mt-1">4 Stays</div>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Lifetime Spend</div>
                <div className="text-xl font-bold text-slate-900 mt-1">₹84,500</div>
              </div>
            </div>

            {/* Stay History List */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm text-slate-900">Stay History</h3>
                <span className="text-xs text-slate-400">3 Past Stays</span>
              </div>

              <div className="space-y-3">
                {stays.map((stay, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setIsGuestDrawerOpen(false);
                      setCurrentView('invoice');
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800">{stay.room}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{stay.dates}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-900">{stay.amount}</div>
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5 ${
                        stay.status === 'In-House' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {stay.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Preferences */}
            <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 space-y-2">
              <div className="text-xs font-bold text-indigo-900">Guest Preferences & Notes</div>
              <ul className="text-xs text-indigo-800 space-y-1 list-disc list-inside">
                <li>Prefers quiet high-floor room facing the pool.</li>
                <li>Vegetarian breakfast preference (Jain style).</li>
                <li>Always requests late check-out till 1:30 PM.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 flex items-center gap-3">
          <button
            onClick={() => {
              setIsGuestDrawerOpen(false);
              setCurrentView('invoice');
            }}
            className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-100 transition-colors"
          >
            View Latest Invoice
          </button>
          <button
            onClick={() => {
              setIsGuestDrawerOpen(false);
              setCurrentView('check-in-view');
            }}
            className="flex-1 py-2.5 bg-indigo-600 text-white font-semibold text-xs rounded-xl hover:bg-indigo-700 shadow-sm transition-colors"
          >
            New Reservation
          </button>
        </div>
      </div>
    </div>
  );
}
