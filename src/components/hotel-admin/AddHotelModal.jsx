import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Building2,
  Clock,
  MapPin,
  Mail,
  Phone,
  BedDouble
} from 'lucide-react';

export default function AddHotelModal() {
  const { isAddHotelModalOpen, setIsAddHotelModalOpen, setHotels, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    type: 'Luxury Hotel',
    address: '',
    city: '',
    email: '',
    phone: '',
    rooms: 80,
    checkInTime: '02:00 PM',
    checkOutTime: '11:00 AM',
    area: 'North Zone'
  });

  if (!isAddHotelModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHotel = {
      id: `HOTEL-${Math.floor(100 + Math.random() * 900)}`,
      name: formData.name || 'Aura Solis Bay Resort',
      city: formData.city || 'Goa Coastline',
      area: formData.area,
      address: formData.address || 'Candolim Boulevard, North Goa',
      manager: { name: 'Vikram Mehta', email: formData.email || 'manager@aurasolis.com', avatar: 'VM' },
      rooms: parseInt(formData.rooms) || 80,
      floors: 4,
      occupancy: 65,
      todayRevenue: 85000,
      pendingPayments: 15000,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      type: formData.type,
      phone: formData.phone || '+91 98765 43219',
      email: formData.email || 'info@grandpalace.com'
    };

    setHotels(prev => [newHotel, ...prev]);
    showToast(`Hotel "${newHotel.name}" added successfully!`);
    setIsAddHotelModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden max-h-[90vh] flex flex-col justify-between">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Add New Hotel Property</h2>
            <p className="text-xs text-slate-400">Configure property specifications and operational timings.</p>
          </div>
          <button
            onClick={() => setIsAddHotelModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body (Matches Page 5) */}
        <form id="add-hotel-form" onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          <div>
            <label className="block text-slate-600 font-semibold mb-1">Hotel Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Aura Solis Sanctuary Resort"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Property Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              >
                <option value="Luxury Hotel">Luxury Hotel</option>
                <option value="5-Star Resort">5-Star Resort</option>
                <option value="Business Suites">Business Suites</option>
                <option value="Boutique Stay">Boutique Stay</option>
                <option value="Hill Station Resort">Hill Station Resort</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Assigned Area Zone</label>
              <select
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              >
                <option value="North Zone">North Zone (Delhi NCR)</option>
                <option value="West Zone">West Zone (Mumbai & Pune)</option>
                <option value="South Zone">South Zone (Bangalore)</option>
                <option value="East Zone">East Zone (Kolkata)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">City / Region *</label>
              <input
                type="text"
                required
                placeholder="e.g. Delhi NCR"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Number of Rooms *</label>
              <input
                type="number"
                required
                placeholder="e.g. 120"
                value={formData.rooms}
                onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-600 font-semibold mb-1">Full Physical Address</label>
            <input
              type="text"
              placeholder="e.g. 123 Ocean Drive, Andheri West"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Contact Email</label>
              <input
                type="email"
                placeholder="hotel@grandhorizon.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Contact Phone</label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
          </div>

          {/* Operational Timings */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-slate-600 font-semibold mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-indigo-600" /> Check-in Time
              </label>
              <input
                type="text"
                value={formData.checkInTime}
                onChange={(e) => setFormData({ ...formData, checkInTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-600" /> Check-out Time
              </label>
              <input
                type="text"
                value={formData.checkOutTime}
                onChange={(e) => setFormData({ ...formData, checkOutTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsAddHotelModalOpen(false)}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="add-hotel-form"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm"
          >
            Save Hotel
          </button>
        </div>
      </div>
    </div>
  );
}
