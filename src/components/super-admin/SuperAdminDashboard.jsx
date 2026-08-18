import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Hotel,
  CreditCard,
  DollarSign,
  TrendingUp,
  MoreVertical,
  Plus,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export default function SuperAdminDashboard() {
  const { organizations, setCurrentView, setIsCreateOrgModalOpen } = useApp();

  const growthData = [
    { month: 'Nov', orgs: 85, hotels: 820 },
    { month: 'Dec', orgs: 94, hotels: 910 },
    { month: 'Jan', orgs: 104, hotels: 1010 },
    { month: 'Feb', orgs: 112, hotels: 1090 },
    { month: 'Mar', orgs: 121, hotels: 1180 },
    { month: 'Apr', orgs: 128, hotels: 1248 },
  ];

  const getPlanBadge = (plan) => {
    switch (plan) {
      case 'Enterprise':
        return <span className="custom-badge badge-enterprise">Enterprise</span>;
      case 'Professional':
        return <span className="custom-badge badge-pro">Professional</span>;
      case 'Starter':
        return <span className="custom-badge badge-starter">Starter</span>;
      default:
        return <span className="custom-badge badge-starter">{plan}</span>;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <span className="custom-badge badge-active">Active</span>;
      case 'Trial':
        return <span className="custom-badge badge-pending">Trial</span>;
      case 'Expired':
        return <span className="custom-badge badge-dirty">Expired</span>;
      default:
        return <span className="custom-badge badge-active">{status}</span>;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Super Admin Platform Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Multi-tenant SaaS dashboard for hotel chains and franchises.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('pricing')}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl shadow-xs transition-colors"
          >
            Subscription Plans
          </button>
          <button
            onClick={() => setIsCreateOrgModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Organization</span>
          </button>
        </div>
      </div>

      {/* KPI Cards (Page 1) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Organizations</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">128</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12% this month
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Hotels</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">1,248</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Across 42 cities</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Hotel className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Subscriptions</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">98</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">94% renewal rate</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Revenue</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">$186,540</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18.4% YoY
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="custom-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-base text-slate-900">Hotel & Organization Growth Trend</h3>
            <p className="text-xs text-slate-400">Total properties onboarded over the last 6 months</p>
          </div>
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Last 6 Months
          </span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData} barSize={36}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
              <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1E293B', borderRadius: '10px', color: '#fff', border: 'none' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="hotels" fill="#4F46E5" radius={[6, 6, 0, 0]} name="Hotels Onboarded" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Organizations Table (Matches Page 1) */}
      <div className="custom-card p-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div>
            <h3 className="font-bold text-base text-slate-900">Organizations Directory</h3>
            <p className="text-xs text-slate-400">Manage client hotel groups and account privileges</p>
          </div>
          <button
            onClick={() => setCurrentView('org-details')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View All Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3.5 pl-4">Organization</th>
                <th className="p-3.5">Owner</th>
                <th className="p-3.5 text-center">Hotels</th>
                <th className="p-3.5">Plan</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right pr-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {organizations.map((org) => (
                <tr
                  key={org.id}
                  onClick={() => setCurrentView('org-details')}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                >
                  <td className="p-3.5 pl-4 font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center shadow-2xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold">{org.name}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{org.id}</div>
                    </div>
                  </td>
                  <td className="p-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                        {org.owner.avatar}
                      </div>
                      <span className="font-semibold text-slate-800">{org.owner.name}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-center font-bold text-slate-900">{org.hotelsCount}</td>
                  <td className="p-3.5">{getPlanBadge(org.plan)}</td>
                  <td className="p-3.5">{getStatusBadge(org.status)}</td>
                  <td className="p-3.5 text-right pr-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentView('org-details');
                      }}
                      className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
