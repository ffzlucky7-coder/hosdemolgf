import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  BedDouble,
  Percent,
  IndianRupee,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp
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

export default function AreaManagerDashboard() {
  const { hotels, approvals, setCurrentView } = useApp();

  const hotelPerformance = [
    { name: 'Delhi', occupancy: 78, revenue: 14.2 },
    { name: 'Gurgaon', occupancy: 74, revenue: 9.8 },
    { name: 'Noida', occupancy: 68, revenue: 6.4 },
    { name: 'Mumbai', occupancy: 84, revenue: 18.5 },
    { name: 'Pune', occupancy: 70, revenue: 7.2 },
    { name: 'Manali', occupancy: 82, revenue: 8.9 }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase mb-1">Module 4 • Multi-Hotel Area Operations</div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Area Cluster Operations Hub</h1>
          <p className="text-xs text-slate-500 mt-0.5">Cluster level health, guest satisfaction, and pending authorizations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('approvals')}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Approval Center ({approvals.length})</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Supervised Hotels</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">8 Properties</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Across 5 Cities</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <Building2 className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Rooms</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">840</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">638 currently occupied</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <BedDouble className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cluster Occupancy</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">76%</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +5.8% vs last month
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Percent className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Revenue</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">₹42.8L</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">104% of monthly target</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
            <IndianRupee className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Cluster Occupancy Chart & Pending Approvals Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Occupancy Comparison */}
        <div className="lg:col-span-2 custom-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">Hotel Occupancy Comparison (%)</h3>
              <p className="text-xs text-slate-400 font-medium">Live operational percentage across member hotels</p>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Live Feed
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hotelPerformance} barSize={34}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1E293B', borderRadius: '12px', color: '#fff', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="occupancy" fill="#4F46E5" radius={[6, 6, 0, 0]} name="Occupancy %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pending Approvals Quick Card */}
        <div className="custom-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-display font-bold text-base text-slate-900">Pending Actions</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                {approvals.length} Pending
              </span>
            </div>

            <div className="space-y-3">
              {approvals.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentView('approvals')}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-900">{item.title}</span>
                    <span className="text-[11px] font-mono font-extrabold text-slate-800">{item.amount}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 font-medium">
                    {item.hotel} • Req by {item.requester}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentView('approvals')}
            className="w-full mt-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            Open Approval Center
          </button>
        </div>
      </div>
    </div>
  );
}
