import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Edit,
  Plus,
  Trash2,
  MapPin,
  BedDouble,
  Layers,
  ChevronRight,
  User,
  ArrowRight
} from 'lucide-react';

export default function AreaAssignedHotels() {
  const { hotels, setSelectedHotelId, setCurrentRole, setCurrentView, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('Assigned Hotels');
  const [assignedList, setAssignedList] = useState(hotels);

  const tabs = ['Overview', 'Assigned Hotels', 'Manager', 'Staff', 'Revenue', 'Reports'];

  const handleUnassign = (hotelId, name) => {
    setAssignedList(prev => prev.filter(h => h.id !== hotelId));
    showToast(`Unassigned ${name} from North Zone`, 'warning');
  };

  const handleOpenHotelPMS = (hotel) => {
    setSelectedHotelId(hotel.id);
    setCurrentRole('front-desk');
    setCurrentView('dashboard');
    showToast(`Switched to ${hotel.name} Operations!`);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumb & Area Header (Matches Page 26) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-semibold mb-1">
            <button onClick={() => setCurrentView('areas')} className="hover:underline">Areas</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">North Zone</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">North Zone</h1>
            <span className="custom-badge badge-active text-xs">Active</span>
          </div>
          <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Manager: <strong>Rohit Sharma</strong> (rohit.sharma@hotelco.com)</span>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl shadow-xs transition-colors">
          <Edit className="w-4 h-4" />
          <span>Edit Area</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-8 text-xs font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab
                ? 'border-indigo-600 text-indigo-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Assigned Hotels Header & CTA */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Assigned Hotels ({assignedList.length})
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Hotels under active supervision of the North Zone cluster.</p>
        </div>
        <button
          onClick={() => showToast('Hotel assignment modal opened')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Assign Hotel</span>
        </button>
      </div>

      {/* Hotels Grid Cards (Exact Page 26 Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignedList.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => handleOpenHotelPMS(hotel)}
            className="custom-card p-5 hover:shadow-lg transition-all cursor-pointer border border-slate-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {hotel.city}
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUnassign(hotel.id, hotel.name);
                  }}
                  className="p-1.5 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Unassign from Area"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <BedDouble className="w-4 h-4 text-slate-400" />
                  <span><strong>{hotel.rooms}</strong> Rooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Layers className="w-4 h-4 text-slate-400" />
                  <span><strong>{hotel.floors}</strong> Floors</span>
                </div>
              </div>
            </div>

            {/* Bottom manage bar */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-600">{hotel.occupancy}% Occupancy</span>
              <span className="text-indigo-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Front Desk <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
