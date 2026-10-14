import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  BedDouble,
  Percent,
  IndianRupee,
  AlertCircle,
  Plus,
  ArrowRight,
  MapPin,
  Users
} from 'lucide-react';

export default function HotelAdminDashboard() {
  const { hotels, areas, setCurrentView, setIsAddHotelModalOpen } = useApp();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 3 • Hotel Admin Management</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Hotel Chain Operations</h1>
          <p className="text-xs text-slate-500 mt-0.5">Multi-property chain performance, area managers, and revenue.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('areas')}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-colors"
          >
            Manage Areas
          </button>
          <button
            onClick={() => setIsAddHotelModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Hotel</span>
          </button>
        </div>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Rooms</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">324</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Across 6 Properties</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <BedDouble className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Occupancy Rate</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">72%</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">+4.2% vs last week</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Percent className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Revenue</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">₹1,24,850</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">On track for month</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
            <IndianRupee className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Payments</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">₹48,350</div>
            <div className="text-xs text-amber-600 font-semibold mt-1">6 corporate folios</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
            <AlertCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-base text-slate-900">Chain Properties</h3>
          <button
            onClick={() => setCurrentView('hotels')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View All Hotels</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.slice(0, 3).map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => setCurrentView('hotels')}
              className="custom-card overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="h-44 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="custom-badge badge-active text-xs bg-white/95 backdrop-blur-xs shadow-xs">
                    {hotel.status}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3.5">
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                    {hotel.name}
                  </h4>
                  <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-indigo-500" />
                    <span>{hotel.city}</span>
                  </div>
                </div>

                {/* Occupancy Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-500">Occupancy</span>
                    <span className="text-indigo-600 font-mono font-bold">{hotel.occupancy}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                      style={{ width: `${hotel.occupancy}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Today's Revenue:</span>
                    <span className="font-mono font-bold text-slate-900 ml-1">₹{hotel.todayRevenue.toLocaleString()}</span>
                  </div>
                  <span className="text-indigo-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                    Manage <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Area Managers List */}
      <div className="custom-card p-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Area Managers Overview</h3>
            <p className="text-xs text-slate-400 font-medium">Regional supervisors assigned across clusters</p>
          </div>
          <button
            onClick={() => setCurrentView('areas')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>Configure Zones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.slice(0, 3).map((area) => (
            <div
              key={area.id}
              onClick={() => setCurrentView('north-zone')}
              className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 cursor-pointer transition-all flex items-center gap-3.5"
            >
              <div className="w-11 h-11 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                {area.manager.avatar}
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-900">{area.manager.name}</div>
                <div className="text-[11px] text-slate-500 font-medium">{area.name} ({area.region})</div>
                <div className="text-[10px] text-indigo-600 font-semibold mt-0.5">
                  {area.hotelsCount} Assigned Hotels • {area.occupancy}% Occupancy
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
