import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  Percent,
  IndianRupee,
  Star,
  Users
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export default function AnalyticsReports() {
  const { showToast } = useApp();
  const [dateRange, setDateRange] = useState('Last 30 Days');

  const revenueTrendData = [
    { day: 'May 1', room: 45000, fnb: 12000, other: 5000 },
    { day: 'May 4', room: 52000, fnb: 15000, other: 6000 },
    { day: 'May 8', room: 48000, fnb: 14000, other: 4000 },
    { day: 'May 12', room: 68000, fnb: 22000, other: 9000 },
    { day: 'May 16', room: 74000, fnb: 26000, other: 11000 },
    { day: 'May 20', room: 62000, fnb: 19000, other: 8000 },
    { day: 'May 24', room: 59000, fnb: 17000, other: 7000 },
    { day: 'May 28', room: 78000, fnb: 28000, other: 12000 },
  ];

  const channelData = [
    { name: 'Direct Web Booking', value: 42, color: '#4F46E5' },
    { name: 'OTAs (Booking.com / MMT)', value: 35, color: '#06B6D4' },
    { name: 'Corporate Contracts', value: 15, color: '#10B981' },
    { name: 'Walk-ins & Phone', value: 8, color: '#F59E0B' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Analytics & Revenue Intelligence</h1>
          <p className="text-sm text-slate-500 mt-1">Multi-dimensional financial reporting, channel mix, and guest satisfaction.</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl px-3.5 py-2 outline-none shadow-xs cursor-pointer"
          >
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="This Quarter">This Quarter (Q2 2025)</option>
            <option value="Year to Date">Year to Date (FY 2025-26)</option>
          </select>
          <button
            onClick={() => showToast('Exporting Analytics Report to PDF & CSV...')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* KPI Cards (Matches Page 16) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Daily Rate (ADR)</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">₹5,420</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +6.4% YoY
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <IndianRupee className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">RevPAR</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">₹4,120</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Per Available Room</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <BarChart3 className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Occupancy</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">78.4%</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">94 rooms occupied/day</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Percent className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Guest CSAT Score</div>
            <div className="text-3xl font-bold text-amber-500 mt-2 flex items-center gap-1">
              4.8 <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Based on 482 reviews</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Star className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 2 Charts Grid (Matches Page 16) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Trend Area Chart (8 cols) */}
        <div className="lg:col-span-8 custom-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-base text-slate-900">Revenue Breakdown by Department</h3>
              <p className="text-xs text-slate-400">Rooms vs F&B vs Spa & Banquets revenue over time</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-indigo-600">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Rooms
              </span>
              <span className="flex items-center gap-1.5 text-teal-600">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span> F&B
              </span>
              <span className="flex items-center gap-1.5 text-amber-600">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Spa / Other
              </span>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrendData}>
                <defs>
                  <linearGradient id="colorRoom" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFnb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="day" stroke="#94A3B8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} tickFormatter={(v) => `₹${v/1000}k`} />
                <Tooltip
                  formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                  contentStyle={{ backgroundColor: '#1E293B', borderRadius: '10px', color: '#fff', border: 'none' }}
                />
                <Area type="monotone" dataKey="room" stroke="#4F46E5" strokeWidth={2} fillOpacity={1} fill="url(#colorRoom)" name="Room Revenue" />
                <Area type="monotone" dataKey="fnb" stroke="#14B8A6" strokeWidth={2} fillOpacity={1} fill="url(#colorFnb)" name="F&B Dining" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Booking Channel Distribution (4 cols - Page 16) */}
        <div className="lg:col-span-4 custom-card p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base text-slate-900">Booking Channel Mix</h3>
            <p className="text-xs text-slate-400 mt-0.5">Where your guest reservations originate</p>

            <div className="h-56 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v) => [`${v}% of bookings`, '']}
                    contentStyle={{ backgroundColor: '#1E293B', borderRadius: '10px', color: '#fff', border: 'none' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            {channelData.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }}></span>
                  <span className="text-slate-600 font-medium">{c.name}</span>
                </div>
                <span className="font-bold text-slate-900">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
