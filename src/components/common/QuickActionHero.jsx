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
  Layers,
  Globe,
  Radio
} from 'lucide-react';

export default function QuickActionHero() {
  const {
    currentRole,
    selectedHotel,
    hotels,
    setCurrentView,
    setIsNewReservationModalOpen,
    setIsCheckInModalOpen,
    setIsCommandPaletteOpen,
    showToast
  } = useApp();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 px-6 py-3.5 relative overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 relative z-10">
        {/* Left: Product branding & Active Property Status */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black shadow-md shrink-0">
            <Building2 className="w-5 h-5 text-white" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Multi-Property SaaS
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Active Tenant: <strong className="text-white font-bold">{selectedHotel.name}</strong>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                STAAH 2-Way Sync (22ms)
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-display font-bold text-white tracking-tight mt-0.5 flex items-center gap-2">
              <span>{getGreeting()}, Operations Team</span>
              <span className="text-xs font-normal text-slate-400 hidden sm:inline">— Live property operations & channel distribution active</span>
            </h2>
          </div>
        </div>

        {/* Right: Clean, Crisp Modern SaaS Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setIsCheckInModalOpen(true);
              showToast('Opening 5-Step Express Check-In Wizard');
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>+ Express Check-In</span>
          </button>

          <button
            onClick={() => {
              setIsNewReservationModalOpen(true);
              showToast('Opening Direct Reservation Booking Engine');
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ New Reservation</span>
          </button>

          <button
            onClick={() => {
              setCurrentView('restaurant');
              showToast('Switched to Restaurant POS & Live Kitchen Display (KDS)');
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-slate-400" />
            <span>KDS / POS</span>
          </button>

          <button
            onClick={() => {
              setCurrentView('banquets');
              showToast('Switched to Banquet RFP & Event Quote Builder');
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <PartyPopper className="w-3.5 h-3.5 text-slate-400" />
            <span>Banquet RFP</span>
          </button>

          <button
            onClick={() => {
              setCurrentView('channel-manager');
              showToast('Switched to OTA Channel Manager & Rate Parity Engine');
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all cursor-pointer active:scale-95"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>OTA Sync</span>
          </button>
        </div>
      </div>
    </div>
  );
}
