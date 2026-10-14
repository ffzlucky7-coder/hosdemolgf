import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Plus,
  Search,
  Building2,
  Check,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function AreaListView() {
  const { areas, setAreas, hotels, setCurrentView, showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHotelsForNewArea, setSelectedHotelsForNewArea] = useState(['HOTEL-001']);
  const [newAreaForm, setNewAreaForm] = useState({
    name: '',
    description: '',
    region: '',
    managerName: 'Rohit Sharma'
  });

  const filteredAreas = areas.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleHotel = (hotelId) => {
    setSelectedHotelsForNewArea(prev =>
      prev.includes(hotelId) ? prev.filter(id => id !== hotelId) : [...prev, hotelId]
    );
  };

  const handleCreateArea = (e) => {
    e.preventDefault();
    const createdArea = {
      id: `AREA-${Math.floor(100 + Math.random() * 900)}`,
      name: newAreaForm.name || 'North-East Zone',
      region: newAreaForm.region || 'Assam & Meghalaya',
      manager: { name: newAreaForm.managerName, email: `${newAreaForm.managerName.toLowerCase().replace(/\s+/g, '.')}@hotelco.com`, avatar: 'NM' },
      hotelsCount: selectedHotelsForNewArea.length || 2,
      totalRooms: selectedHotelsForNewArea.length * 75,
      occupancy: 68,
      status: 'Active',
      assignedHotels: selectedHotelsForNewArea
    };

    setAreas(prev => [...prev, createdArea]);
    showToast(`Area "${createdArea.name}" created with ${selectedHotelsForNewArea.length} hotels!`);
    setNewAreaForm({ name: '', description: '', region: '', managerName: 'Rohit Sharma' });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Two Column Split: Area List (Left) + Create Area (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Area List (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 4 • Multi-Hotel Regional Clusters</span>
              </div>
              <h1 className="text-xl font-display font-bold text-slate-900 tracking-tight">Area List</h1>
              <p className="text-xs text-slate-500 mt-0.5">Manage and view all regional cluster zones across your organization.</p>
            </div>
            <button
              onClick={() => setCurrentView('north-zone')}
              className="px-3.5 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>View North Zone</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search areas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 outline-none shadow-2xs"
            />
          </div>

          {/* Areas Table */}
          <div className="custom-card overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5 pl-4">Area Name</th>
                  <th className="p-3.5">Area Manager</th>
                  <th className="p-3.5 text-center">Hotels</th>
                  <th className="p-3.5 text-center">Rooms</th>
                  <th className="p-3.5 w-28">Occupancy</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right pr-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredAreas.map((area) => (
                  <tr
                    key={area.id}
                    onClick={() => setCurrentView('north-zone')}
                    className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                  >
                    <td className="p-3.5 pl-4 font-bold text-slate-900">
                      <div className="font-display">{area.name}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{area.region}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center">
                          {area.manager.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">{area.manager.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{area.manager.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5 text-center font-bold text-slate-900 font-mono">{area.hotelsCount}</td>
                    <td className="p-3.5 text-center font-semibold text-slate-800 font-mono">{area.totalRooms.toLocaleString()}</td>
                    <td className="p-3.5">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-indigo-600 font-mono">{area.occupancy}%</div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-600 rounded-full"
                            style={{ width: `${area.occupancy}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5">
                      <span className={`custom-badge ${area.status === 'Active' ? 'badge-active' : 'badge-pending'}`}>
                        {area.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right pr-4">
                      <MoreVertical className="w-4 h-4 text-slate-400 inline" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <div>Showing 1 to {filteredAreas.length} of {filteredAreas.length} areas</div>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded border border-slate-200 bg-white"><ChevronLeft className="w-3.5 h-3.5" /></button>
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 font-bold rounded border border-indigo-200">1</span>
                <button className="p-1 rounded border border-slate-200 bg-white"><ChevronRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Create Area Form Panel (5 cols) */}
        <div className="lg:col-span-5 custom-card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-display font-bold text-slate-900">Create Area</h2>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Add a new regional cluster and assign hotels to it.</p>
          </div>

          <form onSubmit={handleCreateArea} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Area Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. North Zone"
                value={newAreaForm.name}
                onChange={(e) => setNewAreaForm({ ...newAreaForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Description</label>
              <textarea
                rows={2}
                placeholder="Enter area description (optional)"
                value={newAreaForm.description}
                onChange={(e) => setNewAreaForm({ ...newAreaForm, description: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Location / Region *</label>
              <input
                type="text"
                required
                placeholder="e.g. Delhi NCR, Haryana & Punjab"
                value={newAreaForm.region}
                onChange={(e) => setNewAreaForm({ ...newAreaForm, region: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Area Manager</label>
              <select
                value={newAreaForm.managerName}
                onChange={(e) => setNewAreaForm({ ...newAreaForm, managerName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              >
                <option value="Rohit Sharma">Rohit Sharma (rohit.sharma@hotelco.com)</option>
                <option value="Neha Kapoor">Neha Kapoor (neha.kapoor@hotelco.com)</option>
                <option value="Arjun Menon">Arjun Menon (arjun.menon@hotelco.com)</option>
                <option value="Sneha Das">Sneha Das (sneha.das@hotelco.com)</option>
              </select>
            </div>

            {/* Multi-Hotel Selection Checkboxes */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-slate-600 font-bold">Select Hotels</label>
                <span className="text-[11px] text-slate-400 font-medium">{selectedHotelsForNewArea.length} selected</span>
              </div>

              <div className="border border-slate-200 rounded-xl p-2 max-h-48 overflow-y-auto space-y-1.5 bg-slate-50/50">
                {hotels.map((h) => {
                  const isChecked = selectedHotelsForNewArea.includes(h.id);
                  return (
                    <div
                      key={h.id}
                      onClick={() => handleToggleHotel(h.id)}
                      className={`p-2.5 rounded-lg border flex items-center gap-3 cursor-pointer transition-colors ${
                        isChecked ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded text-indigo-600 focus:ring-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-800 truncate">{h.name}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{h.city} • {h.rooms} Rooms</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setNewAreaForm({ name: '', description: '', region: '', managerName: 'Rohit Sharma' })}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
              >
                Create Area
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
