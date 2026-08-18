import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Check,
  Building,
  Crown,
  Hotel,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function PricingPlansView() {
  const { showToast, setCurrentView } = useApp();

  const handleSelect = (planName) => {
    showToast(`Plan ${planName} selected for billing!`);
  };

  return (
    <div className="p-10 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-200">
      {/* Top Header (Matches Page 23) */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Choose the Right Plan for Your Organization
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          All plans include core PMS features. Upgrade anytime as you grow your hotel network.
        </p>
      </div>

      {/* 3 Tier Cards (Exact Page 23 UI) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Basic Plan */}
        <div className="custom-card p-8 flex flex-col justify-between hover:shadow-lg transition-all border border-slate-200">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Building className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Basic</h3>
            <p className="text-xs text-slate-500 mt-1">Perfect for small properties and boutique stays</p>

            <div className="mt-6 mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-extrabold text-slate-900">₹2,999</span>
                <span className="text-xs text-slate-500 ml-1.5">/ month</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Billed annually</span>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-6 space-y-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Up to 10 hotels</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Up to 20 users</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Reservations & Front Desk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Housekeeping Management</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Basic Reports & Analytics</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSelect('Basic')}
            className="w-full mt-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-xs rounded-xl transition-colors"
          >
            Select Basic
          </button>
        </div>

        {/* Pro Plan (Recommended) */}
        <div className="custom-card p-8 flex flex-col justify-between relative ring-2 ring-indigo-600 shadow-xl bg-white">
          {/* Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recommended</span>
          </div>

          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-indigo-900">Pro</h3>
            <p className="text-xs text-slate-500 mt-1">Best for growing multi-hotel businesses</p>

            <div className="mt-6 mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-extrabold text-indigo-600">₹6,999</span>
                <span className="text-xs text-indigo-400 ml-1.5">/ month</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Billed annually</span>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-6 space-y-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Up to 50 hotels</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Up to 100 users</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>All Basic features included</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Advanced Reports & Analytics</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Priority 24/7 Support</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSelect('Pro')}
            className="w-full mt-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            Select Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="custom-card p-8 flex flex-col justify-between hover:shadow-lg transition-all border border-slate-200">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Hotel className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
            <p className="text-xs text-slate-500 mt-1">For large hotel chains & international franchises</p>

            <div className="mt-6 mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-extrabold text-slate-900">Custom</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Contact sales for tailored pricing</span>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-6 space-y-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unlimited hotels</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unlimited users</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All Pro features included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom ERP & Hardware Integrations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Account Manager & SLA</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleSelect('Enterprise')}
            className="w-full mt-8 py-3 bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-xs rounded-xl transition-colors"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
