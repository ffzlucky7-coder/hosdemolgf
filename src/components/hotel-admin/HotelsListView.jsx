import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Plus,
  Filter,
  MapPin,
  Building,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HotelsListView() {
  const { hotels, setIsAddHotelModalOpen, setSelectedHotelId, setCurrentRole, setCurrentView, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredHotels = hotels.filter(hotel => {
    if (searchTerm && !hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) && !hotel.city.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (selectedArea !== 'All' && hotel.area !== selectedArea) return false;
    if (selectedStatus !== 'All' && hotel.status !== selectedStatus) return false;
    return true;
  });

  const handleManageHotel = (hotel) => {
    setSelectedHotelId(hotel.id);
    setCurrentRole('front-desk');
    setCurrentView('dashboard');
    showToast(`Switched to ${hotel.name} Front Desk!`);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hotels Directory</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor all hotel properties across your organization.</p>
        </div>
        <button
          onClick={() => setIsAddHotelModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Hotel</span>
        </button>
      </div>

      {/* Filter Toolbar (Matches Page 4 exact layout) */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3 flex-1 min-w-[240px] max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search hotels by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none cursor-pointer"
          >
            <option value="All">All Areas</option>
            <option value="North Zone">North Zone</option>
            <option value="West Zone">West Zone</option>
            <option value="South Zone">South Zone</option>
            <option value="East Zone">East Zone</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Hotels Table (Exact Page 4 Layout) */}
      <div className="custom-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-4 pl-5">Hotel Name</th>
                <th className="p-4">Area / Zone</th>
                <th className="p-4">General Manager</th>
                <th className="p-4 text-center">Rooms</th>
                <th className="p-4 w-48">Occupancy</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right pr-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredHotels.map((hotel) => (
                <tr
                  key={hotel.id}
                  onClick={() => handleManageHotel(hotel)}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                >
                  <td className="p-4 pl-5 flex items-center gap-3.5">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-12 h-10 rounded-lg object-cover shadow-2xs shrink-0"
                    />
                    <div>
                      <div className="font-bold text-slate-900 text-sm hover:text-indigo-600 transition-colors">
                        {hotel.name}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {hotel.city}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-slate-800">{hotel.area}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] flex items-center justify-center">
                        {hotel.manager.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{hotel.manager.name}</div>
                        <div className="text-[10px] text-slate-400">{hotel.manager.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold text-slate-900">{hotel.rooms}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold">
                        <span className="text-slate-500">Live Rate</span>
                        <span className="text-indigo-600 font-bold">{hotel.occupancy}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: `${hotel.occupancy}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="custom-badge badge-active">{hotel.status}</span>
                  </td>
                  <td className="p-4 text-right pr-5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleManageHotel(hotel);
                      }}
                      className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Open PMS
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer (Page 4) */}
        <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div>Showing 1 to {filteredHotels.length} of 24 hotels</div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 font-bold text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200">
              1
            </span>
            <span className="px-3 py-1 font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
              2
            </span>
            <span className="px-3 py-1 font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
              3
            </span>
            <button className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
