import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Plus,
  BedDouble,
  UtensilsCrossed,
  PartyPopper,
  Search,
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  Compass
} from 'lucide-react';

export default function QuickActionHero() {
  const {
    currentRole,
    selectedHotel,
    hotels,
    setCurrentView,
    setIsNewReservationModalOpen,
    setIsCheckInModalOpen,
    setIsCommandPaletteOpen
  } = useApp();

  // Dynamic Time of Day Greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: 'Suprabhat / Good Morning', sub: 'Morning shift handovers and breakfast turnovers active' };
    if (hour < 17) return { text: 'Shubh Dopahar / Good Afternoon', sub: 'Express guest check-ins & in-villa dining orders active' };
    return { text: 'Shubh Sandhya / Good Evening', sub: 'Evening cultural events, banquets & dinner service active' };
  };

  const greeting = getGreeting();

  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-b border-indigo-900/40 px-6 py-4 relative overflow-hidden shadow-md">
      {/* Ambient background glow accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 relative z-10">
        {/* Left: Property context & Royal greeting */}
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 shrink-0 border border-amber-300/40">
            <Compass className="w-6 h-6 text-slate-950" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                Multi-Tenant Cloud PMS
              </span>
              <span className="text-xs text-indigo-300 font-medium">
                Active Tenant: <strong className="text-white font-semibold">{selectedHotel.name}</strong>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                STAAH 2-Way Live Sync
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-display font-extrabold text-white tracking-tight mt-0.5 flex items-center gap-2">
              <span>{greeting.text}</span>
              <span className="text-xs font-normal text-slate-400 hidden sm:inline">— {greeting.sub}</span>
            </h2>
          </div>
        </div>

        {/* Right: Quick Action Buttons & Command Trigger */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsCheckInModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-900/30 transition-all cursor-pointer border border-emerald-400/30 active:scale-95"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Express Check-In</span>
          </button>

          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-900/30 transition-all cursor-pointer border border-indigo-400/30 active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Reservation</span>
          </button>

          <button
            onClick={() => setCurrentView('restaurant')}
            className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">KDS / POS</span>
          </button>

          <button
            onClick={() => setCurrentView('banquets')}
            className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <PartyPopper className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden sm:inline">Banquet RFP</span>
          </button>

          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
            title="Global Search & Quick Actions (Cmd + K)"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
