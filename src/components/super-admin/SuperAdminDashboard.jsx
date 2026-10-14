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
  ChevronRight,
  ShieldCheck,
  Globe2,
  Cpu,
  Layers,
  Sparkles,
  Zap
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
    { month: 'Nov', orgs: 85, hotels: 820, mrr: 142 },
    { month: 'Dec', orgs: 94, hotels: 910, mrr: 156 },
    { month: 'Jan', orgs: 104, hotels: 1010, mrr: 168 },
    { month: 'Feb', orgs: 112, hotels: 1090, mrr: 174 },
    { month: 'Mar', orgs: 121, hotels: 1180, mrr: 182 },
    { month: 'Apr', orgs: 128, hotels: 1248, mrr: 194 },
  ];

  const getPlanBadge = (plan) => {
    switch (plan) {
      case 'Enterprise':
        return <span className="custom-badge badge-enterprise">Enterprise Tier</span>;
      case 'Professional':
      case 'Pro':
        return <span className="custom-badge badge-pro">Pro Cluster</span>;
      case 'Starter':
      case 'Basic':
        return <span className="custom-badge badge-starter">Starter Property</span>;
      default:
        return <span className="custom-badge badge-starter">{plan}</span>;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <span className="custom-badge badge-active font-mono">Live Sync</span>;
      case 'Trial':
        return <span className="custom-badge badge-pending font-mono">14d Trial</span>;
      case 'Expired':
        return <span className="custom-badge badge-dirty font-mono">Past Due</span>;
      default:
        return <span className="custom-badge badge-active font-mono">{status}</span>;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
              Module 1 • Multi-Tenant Enterprise Architecture
            </span>
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              99.98% Cloud Uptime SLA
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Nexus Hospitality Cloud SaaS
          </h1>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Multi-tenant orchestration for luxury resort chains, independent boutique hotels, and restaurant groups.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setCurrentView('pricing')}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer"
          >
            SaaS Subscription Tiers
          </button>
          <button
            onClick={() => setIsCreateOrgModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Onboard New Tenant Org</span>
          </button>
        </div>
      </div>

      {/* KPI Cards — SaaS High Level Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              Tenant Groups
            </span>
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/80 shadow-2xs">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">128</div>
            <div className="text-xs text-emerald-600 font-bold mt-1 flex items-center gap-1 font-mono">
              <TrendingUp className="w-3.5 h-3.5" /> +14 Net New This Month
            </div>
          </div>
        </div>

        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              Connected Hotels
            </span>
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/80 shadow-2xs">
              <Hotel className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">1,248</div>
            <div className="text-xs text-indigo-600 font-bold mt-1 font-sans">
              42 Regional Cluster Zones
            </div>
          </div>
        </div>

        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              Live SaaS ARR
            </span>
            <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100/80 shadow-2xs">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">₹2.34 Cr</div>
            <div className="text-xs text-emerald-600 font-bold mt-1 font-mono">
              +18.4% YoY Recurring ARR
            </div>
          </div>
        </div>

        <div className="luxury-card-gold p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider font-display">
              Global Platform Health
            </span>
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/80 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">99.98%</div>
            <div className="text-xs text-amber-700 font-bold mt-1 flex items-center gap-1 font-mono">
              <Zap className="w-3.5 h-3.5" /> STAAH 2-Way Sync Active
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="luxury-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Platform Property Onboarding Velocity</h3>
            <p className="text-xs text-slate-400 font-medium">Monthly volume of verified hotels & resorts joining the SaaS network</p>
          </div>
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Past 6 Months
          </span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData} barSize={38}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
              <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0F172A', borderRadius: '14px', color: '#fff', border: '1px solid #1E293B' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="hotels" fill="#4F46E5" radius={[8, 8, 0, 0]} name="Properties Under Management" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Organizations Table */}
      <div className="luxury-card p-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Tenant Organizations Directory</h3>
            <p className="text-xs text-slate-400 font-medium">Hotel chains, franchise accounts, and independent luxury properties</p>
          </div>
          <button
            onClick={() => setCurrentView('org-details')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Tenants</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3.5 pl-4">Organization / Tenant</th>
                <th className="p-3.5">Designated Administrator</th>
                <th className="p-3.5 text-center">Properties</th>
                <th className="p-3.5">Subscription Plan</th>
                <th className="p-3.5">Platform Status</th>
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
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center border border-indigo-100 shadow-2xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 font-display font-bold">{org.name}</div>
                      <div className="text-[11px] font-mono text-slate-400 font-normal">{org.id}</div>
                    </div>
                  </td>
                  <td className="p-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center font-mono">
                        {org.owner.avatar}
                      </div>
                      <span className="font-semibold text-slate-800 font-sans">{org.owner.name}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-center font-mono font-bold text-slate-900">{org.hotelsCount}</td>
                  <td className="p-3.5">{getPlanBadge(org.plan)}</td>
                  <td className="p-3.5">{getStatusBadge(org.status)}</td>
                  <td className="p-3.5 text-right pr-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentView('org-details');
                      }}
                      className="px-3 py-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors cursor-pointer"
                    >
                      Manage Tenant →
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
