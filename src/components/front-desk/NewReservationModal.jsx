import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  User,
  Phone,
  Mail,
  BedDouble,
  CreditCard,
  X,
  Check,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function NewReservationModal() {
  const {
    isNewReservationModalOpen,
    setIsNewReservationModalOpen,
    rooms,
    addReservation
  } = useApp();

  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    email: '',
    roomType: 'Luxury Tree House with Jacuzzi',
    roomNumber: '102',
    checkIn: '2025-05-18',
    checkOut: '2025-05-20',
    nights: 2,
    rate: 9500,
    paymentMode: 'UPI / QR',
    advanceAmount: 9500,
    vip: false,
    specialRequests: 'High canopy treehouse, warm Jacuzzi, welcome drink'
  });

  if (!isNewReservationModalOpen) return null;

  const cleanRooms = rooms.filter(r => r.status === 'clean');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation({
      guestName: formData.guestName || 'Gaurav Singhania',
      phone: formData.phone || '+91 98112 44556',
      email: formData.email || 'gaurav@singhania.com',
      roomType: formData.roomType,
      roomNumber: formData.roomNumber,
      nights: parseInt(formData.nights) || 2,
      rate: formData.rate,
      vip: formData.vip
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h2 className="font-display font-bold text-lg text-slate-900">New Guest Reservation & Walk-In</h2>
            </div>
            <p className="text-xs text-slate-400 font-medium">Direct booking creation with live room allocation and tax calculation.</p>
          </div>
          <button
            onClick={() => setIsNewReservationModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form id="new-res-form" onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {/* Guest Personal Info */}
          <div>
            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">1. Guest Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Full Guest Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-bold mb-1">Phone Number *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 98123 45678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 font-mono font-medium"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. guest@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
                />
              </div>
            </div>
          </div>

          {/* Room Allocation */}
          <div className="pt-2 border-t border-slate-100">
            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">2. Room Allocation & Dates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Room Category</label>
                <select
                  value={formData.roomType}
                  onChange={(e) => {
                    const type = e.target.value;
                    let rate = 9500;
                    if (type === 'Private Pool Villa with Garden') rate = 14500;
                    if (type === 'Maharaja Heritage Suite') rate = 18000;
                    if (type === 'Royal Swiss Luxury Tent') rate = 7500;
                    if (type === 'Presidential Maharaja Fort Villa') rate = 24000;
                    setFormData({ ...formData, roomType: type, rate });
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
                >
                  <option value="Luxury Tree House with Jacuzzi">Treehouse with Jacuzzi (₹9,500)</option>
                  <option value="Private Pool Villa with Garden">Private Pool Villa (₹14,500)</option>
                  <option value="Royal Swiss Luxury Tent">Royal Swiss Tent (₹7,500)</option>
                  <option value="Maharaja Heritage Suite">Maharaja Suite (₹18,000)</option>
                  <option value="Presidential Maharaja Fort Villa">Presidential Villa (₹24,000)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Assign Clean Villa / Room</label>
                <select
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
                >
                  {cleanRooms.map(r => (
                    <option key={r.id} value={r.number}>
                      Villa {r.number} (Floor {r.floor} • {r.type})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Stay Duration</label>
                <select
                  value={formData.nights}
                  onChange={(e) => setFormData({ ...formData, nights: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
                >
                  <option value={1}>1 Night</option>
                  <option value={2}>2 Nights</option>
                  <option value={3}>3 Nights</option>
                  <option value={4}>4 Nights</option>
                  <option value={5}>5 Nights</option>
                  <option value={7}>1 Week</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pricing & GST Breakdown */}
          <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
            <div className="flex justify-between text-slate-600">
              <span>Villa Rate ({formData.nights} Nights @ ₹{formData.rate}):</span>
              <span className="font-mono font-bold text-slate-900">₹{(formData.rate * formData.nights).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>GST Tax (12%):</span>
              <span className="font-mono font-bold text-slate-900">₹{(formData.rate * formData.nights * 0.12).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-indigo-900 font-extrabold text-sm pt-2 border-t border-indigo-200">
              <span>Total Estimated Stay Bill:</span>
              <span className="font-mono text-base font-black">₹{(formData.rate * formData.nights * 1.12).toFixed(2)}</span>
            </div>
          </div>

          {/* Special VIP check */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="vip-check"
              checked={formData.vip}
              onChange={(e) => setFormData({ ...formData, vip: e.target.checked })}
              className="w-4 h-4 text-indigo-600 rounded"
            />
            <label htmlFor="vip-check" className="font-semibold text-slate-700 cursor-pointer">
              Tag as VIP Royal Guest (Priority Keycard, Personal Butler & Welcome Drink)
            </label>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsNewReservationModalOpen(false)}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="new-res-form"
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            <Check className="w-4 h-4" />
            <span>Confirm & Allocate Villa {formData.roomNumber}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
