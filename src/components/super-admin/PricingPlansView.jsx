import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Check,
  Building,
  Crown,
  Hotel,
  Sparkles,
  ArrowRight,
  Zap,
  Globe2,
  ShieldCheck,
  Bot,
  UtensilsCrossed,
  PartyPopper
} from 'lucide-react';

export default function PricingPlansView() {
  const { showToast, setCurrentView } = useApp();

  const handleSelect = (planName) => {
    showToast(`Plan ${planName} selected for demonstration! Invoice contract preview initiated.`);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Enterprise SaaS Licensing & Multi-Property Plans
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
          Flexible Subscription Plans for Hotels, Resorts & Chains
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Whether you manage a boutique heritage hotel, a collection of private pool resorts, or a nationwide hotel chain, Nexus HotelOS scales effortlessly with your portfolio.
        </p>
      </div>

      {/* 3 Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Starter Plan */}
        <div className="luxury-card p-8 flex flex-col justify-between border-slate-200 hover:border-slate-300">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100 shadow-2xs">
              <Building className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-xl font-display font-bold text-slate-900">Boutique & Heritage</h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">Starter</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Ideal for independent boutique hotels & standalone heritage resorts</p>

            <div className="mt-6 mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-mono font-black text-slate-900">₹4,999</span>
                <span className="text-xs text-slate-500 ml-1.5 font-medium">/ month</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Billed annually • 14-day free trial</span>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-6 space-y-3.5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Up to <strong>3 Properties</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Up to <strong>25 Active Staff Logins</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Front Desk 360° & Room Floor Matrix</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Housekeeping Kanban Turnover Board</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single-Outlet Restaurant POS</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] shrink-0">✕</span>
                <span>2-Way STAAH Channel Manager Sync</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSelect('Boutique & Heritage')}
            className="w-full mt-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Start Free 14-Day Trial
          </button>
        </div>

        {/* Pro Plan (Recommended) */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-between relative border border-indigo-500/50 shadow-2xl">
          {/* Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white font-bold rounded-full text-xs shadow-md flex items-center gap-1.5 uppercase tracking-wider font-sans">
            <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
            <span>Most Popular Choice</span>
          </div>

          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center mb-5 border border-indigo-500/40">
              <Crown className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-xl font-display font-extrabold text-white">Resort Cluster Pro</h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-300">Recommended</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Perfect for regional hotel chains, luxury villa clusters & franchise groups</p>

            <div className="mt-6 mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-mono font-black text-white">₹14,999</span>
                <span className="text-xs text-slate-400 ml-1.5 font-medium">/ month</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Billed annually • Includes 2-Way OTA Engine</span>
            </div>

            <div className="border-t border-slate-800 pt-6 mt-6 space-y-3.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Up to <strong>25 Connected Properties</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Up to <strong>150 Multi-Role Users</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full STAAH 2-Way Live Channel Manager</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-Outlet Restaurant POS & Kitchen KDS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Banquets & Destination Wedding Engine</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI Virtual Concierge (WhatsApp Guest Desk)</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSelect('Resort Cluster Pro')}
            className="w-full mt-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer active:scale-95 uppercase tracking-wider font-sans"
          >
            Upgrade to Cluster Pro →
          </button>
        </div>

        {/* Enterprise Sovereign Plan */}
        <div className="luxury-card p-8 flex flex-col justify-between border-slate-200 hover:border-slate-300">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100 shadow-2xs">
              <Hotel className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-xl font-display font-bold text-slate-900">National Chain Sovereign</h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Unlimited</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">For national hospitality brands, luxury palace franchises & global operators</p>

            <div className="mt-6 mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-display font-black text-slate-900">₹39,999</span>
                <span className="text-xs text-slate-500 ml-1.5 font-medium">/ month or Custom</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Dedicated Private Cloud • Custom SLA</span>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-6 space-y-3.5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Unlimited Properties & Villas</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Unlimited Users & Staff Logins</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom ERP & Hardware RFID Keycard Integration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Cloud Database & Region Residency</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>99.99% Uptime Guarantee with 24/7 SLA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Technical Solutions Architect</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSelect('National Chain Sovereign')}
            className="w-full mt-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Contact Enterprise Sales
          </button>
        </div>
      </div>

      {/* Add-on Modules Showcase */}
      <div className="luxury-card p-8 space-y-6">
        <div>
          <h3 className="text-xl font-display font-bold text-slate-900">Nexus SaaS Modular Add-On Marketplace</h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Customize your PMS stack by turning on modular engines on-demand.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Globe2 className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-slate-900 text-sm">STAAH OTA Engine</div>
            <div className="text-xs text-slate-500 font-medium">Instant 2-way rate parity across Booking.com, Agoda, and MakeMyTrip.</div>
            <div className="text-xs font-mono font-bold text-indigo-600 pt-1">+₹1,999/mo/hotel</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-slate-900 text-sm">AI Virtual Concierge</div>
            <div className="text-xs text-slate-500 font-medium">24/7 WhatsApp guest concierge answering pool, Wi-Fi, and late checkout queries.</div>
            <div className="text-xs font-mono font-bold text-emerald-600 pt-1">+₹2,499/mo/hotel</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-slate-900 text-sm">Multi-Kitchen KDS</div>
            <div className="text-xs text-slate-500 font-medium">Interactive kitchen display system with direct room folio billing & table management.</div>
            <div className="text-xs font-mono font-bold text-amber-600 pt-1">+₹1,499/mo/outlet</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
              <PartyPopper className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-slate-900 text-sm">Wedding & Banquets</div>
            <div className="text-xs text-slate-500 font-medium">Venue inventory, plate catering calculators, advance milestone invoicing.</div>
            <div className="text-xs font-mono font-bold text-pink-600 pt-1">+₹2,999/mo/hotel</div>
          </div>
        </div>
      </div>
    </div>
  );
}
