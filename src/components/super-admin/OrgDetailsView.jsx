import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Edit,
  Hotel,
  Users,
  CreditCard,
  Calendar,
  ArrowRight,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function OrgDetailsView() {
  const { organizations, setCurrentView, setIsAddHotelModalOpen } = useApp();
  const [activeTab, setActiveTab] = useState('Overview');

  const org = organizations[0]; // Solaria Global Hospitality

  const tabs = ['Overview', 'Hotels', 'Admins', 'Subscription', 'Billing', 'Usage', 'Integrations', 'Activity Logs'];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-bold mb-1">
            <button onClick={() => setCurrentView('dashboard')} className="hover:underline cursor-pointer">Organizations</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">{org.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">{org.name}</h1>
            <span className="custom-badge badge-active text-xs">Active</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 flex items-center gap-3 font-medium">
            <span>Organization ID: <strong className="font-mono text-slate-700">{org.id}</strong></span>
            <span>•</span>
            <span>Created on: {org.createdDate}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddHotelModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Hotel to Org</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer">
            <Edit className="w-4 h-4" />
            <span>Edit Organization</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-8 text-xs font-bold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === tab
                ? 'border-indigo-600 text-indigo-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid: Details + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Organization Details (2 cols span) */}
        <div className="lg:col-span-2 custom-card p-6 space-y-4">
          <h3 className="font-display font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
            Organization Details
          </h3>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Organization Name</span>
              <span className="font-bold text-slate-900 font-display">{org.name}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Organization ID</span>
              <span className="font-mono font-bold text-slate-900">{org.id}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Primary Contact</span>
              <span className="font-semibold text-slate-900">{org.owner.name}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Email</span>
              <span className="font-semibold text-indigo-600">{org.owner.email}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Phone</span>
              <span className="font-mono font-semibold text-slate-900">{org.phone || '+91 80033 95964'}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Address</span>
              <span className="font-semibold text-slate-900 text-right max-w-sm">
                {org.address || 'NH-8, Kukas, Jaipur - 302028, Rajasthan, India'}
              </span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Country</span>
              <span className="font-semibold text-slate-900">India</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Timezone</span>
              <span className="font-semibold text-slate-900">(GMT+05:30) Asia/Kolkata</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">Currency</span>
              <span className="font-semibold text-slate-900">INR - Indian Rupee (₹)</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">GSTIN</span>
              <span className="font-mono font-bold text-slate-800">08AABCL9603R1Z8</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-slate-400 font-medium">PAN</span>
              <span className="font-mono font-bold text-slate-800">AABCL9603R</span>
            </div>
          </div>
        </div>

        {/* Right: Organization Summary (1 col span) */}
        <div className="custom-card p-6 space-y-6">
          <h3 className="font-display font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
            Organization Summary
          </h3>

          <div className="space-y-4">
            {/* Total Hotels */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Hotel className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Hotels</div>
                  <div className="text-2xl font-mono font-black text-slate-900 mt-0.5">{org.hotelsCount}</div>
                </div>
              </div>
              <button
                onClick={() => setCurrentView('hotels')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>View Hotels</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Total Users */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Users</div>
                  <div className="text-2xl font-mono font-black text-slate-900 mt-0.5">{org.usersCount}</div>
                </div>
              </div>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer">
                <span>View Users</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Current Plan */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Current Plan</div>
                  <div className="text-xl font-display font-black text-purple-700 mt-0.5">{org.plan}</div>
                </div>
              </div>
              <button
                onClick={() => setCurrentView('pricing')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Subscription</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Next Billing Date: <strong className="font-mono text-slate-800">{org.nextBillingDate}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
