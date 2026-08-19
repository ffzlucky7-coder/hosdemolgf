import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BedDouble,
  User,
  Phone,
  Calendar,
  Clock,
  IndianRupee,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Receipt,
  LogOut,
  Plus,
  X,
  Send,
  Trash2,
  ShieldAlert
} from 'lucide-react';

export default function RoomDetailModal() {
  const {
    isRoomDetailModalOpen,
    setIsRoomDetailModalOpen,
    selectedRoomForDetail,
    updateRoomStatus,
    expressCheckOut,
    addFolioCharge,
    folios,
    openGuestProfile,
    setIsCheckInModalOpen,
    setCurrentView,
    showToast
  } = useApp();

  const [incidentalItem, setIncidentalItem] = useState('Mini Bar Consumption');
  const [incidentalAmount, setIncidentalAmount] = useState(650);

  if (!isRoomDetailModalOpen || !selectedRoomForDetail) return null;

  const room = selectedRoomForDetail;
  const roomFolio = folios[room.number] || {
    items: [],
    discountPercent: 0,
    isPaid: false
  };

  const totalCharges = roomFolio.items.reduce((sum, i) => sum + i.amount, 0);
  const netPayable = (totalCharges * (1 - (roomFolio.discountPercent || 0) / 100)) * 1.12;

  const handleAddCharge = () => {
    addFolioCharge(room.number, {
      desc: incidentalItem,
      qty: 1,
      price: parseInt(incidentalAmount) || 500,
      category: 'Incidental'
    });
  };

  const handleSendWhatsAppKeycard = () => {
    showToast(`Digital RFID keycard link sent to ${room.guest || 'Guest'} via WhatsApp!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden max-h-[92vh] flex flex-col justify-between">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
              {room.number}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-bold text-lg text-slate-900">Room {room.number}</h2>
                <span className={`custom-badge ${
                  room.status === 'clean' ? 'badge-clean' : room.status === 'occupied' ? 'badge-occupied' : 'badge-dirty'
                }`}>
                  {room.status.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Floor {room.floor} • {room.type} • ₹{room.price.toLocaleString()}/night</p>
            </div>
          </div>

          <button
            onClick={() => setIsRoomDetailModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* 1. OCCUPIED ROOM CONTROLS */}
          {room.status === 'occupied' && (
            <div className="space-y-4">
              {/* Guest Profile Overview Card */}
              <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                      {room.guest ? room.guest.slice(0, 2).toUpperCase() : 'GS'}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-indigo-950">{room.guest || 'Rohit Sharma'}</div>
                      <div className="text-[11px] font-mono text-indigo-700">{room.phone || '+91 98765 43210'}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsRoomDetailModalOpen(false);
                      openGuestProfile({ name: room.guest || 'Rohit Sharma', avatar: 'RS' });
                    }}
                    className="text-xs font-bold text-indigo-600 underline hover:text-indigo-800"
                  >
                    Full Profile →
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-indigo-100 text-indigo-900 font-medium">
                  <div>Check-In: <strong>{room.checkIn || 'May 15, 2025'}</strong></div>
                  <div>Check-Out: <strong>{room.checkOut || 'May 18, 2025'}</strong></div>
                </div>
              </div>

              {/* Live Folio Bill & Add Charge Box */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Receipt className="w-4 h-4 text-indigo-600" />
                    <span>Live Running Room Folio</span>
                  </div>
                  <span className="font-mono font-black text-sm text-slate-900">₹{netPayable.toFixed(2)}</span>
                </div>

                <div className="space-y-1.5 max-h-32 overflow-y-auto divide-y divide-slate-100">
                  {roomFolio.items.map((it, idx) => (
                    <div key={idx} className="pt-1.5 flex justify-between text-slate-600">
                      <span>{it.desc}</span>
                      <span className="font-mono font-bold text-slate-800">₹{it.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                {/* Add Incidental Charge Trigger */}
                <div className="pt-3 border-t border-slate-200 flex items-center gap-2">
                  <select
                    value={incidentalItem}
                    onChange={(e) => setIncidentalItem(e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium outline-none"
                  >
                    <option value="Mini Bar Beverages">Mini Bar Consumption (₹650)</option>
                    <option value="Express Laundry Service">Express Laundry (₹450)</option>
                    <option value="Spa Ayurvedic Massage">Ayurvedic Spa Treatment (₹2,200)</option>
                    <option value="Airport Executive Cab">Airport Transfer (₹1,500)</option>
                  </select>
                  <button
                    onClick={handleAddCharge}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-xs transition-colors shrink-0"
                  >
                    + Charge
                  </button>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleSendWhatsAppKeycard}
                  className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4 text-emerald-600" />
                  <span>Send WhatsApp Keycard</span>
                </button>

                <button
                  onClick={() => {
                    setIsRoomDetailModalOpen(false);
                    setCurrentView('invoice');
                  }}
                  className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Receipt className="w-4 h-4 text-slate-600" />
                  <span>View Printable Folio</span>
                </button>
              </div>

              {/* Express Check-Out CTA */}
              <button
                onClick={() => expressCheckOut(room.number)}
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Express Guest Check-Out (Send to Housekeeping)</span>
              </button>
            </div>
          )}

          {/* 2. CLEAN ROOM CONTROLS */}
          {room.status === 'clean' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3 text-emerald-900">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-display font-bold text-sm">Room is Inspected & Ready for Arrival</div>
                  <div className="text-[11px] text-emerald-700 mt-0.5 font-medium">
                    Sanitized by Housekeeping. All amenities & linen restocked.
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Room Features</div>
                <div className="p-3 bg-slate-50 rounded-xl text-slate-700 font-medium">{room.amenities}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsRoomDetailModalOpen(false);
                    setIsCheckInModalOpen(true);
                  }}
                  className="p-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Check-In Walk-In Guest</span>
                </button>

                <button
                  onClick={() => {
                    updateRoomStatus(room.id, 'dirty');
                    setIsRoomDetailModalOpen(false);
                  }}
                  className="p-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Mark as Dirty</span>
                </button>
              </div>
            </div>
          )}

          {/* 3. DIRTY ROOM CONTROLS */}
          {room.status === 'dirty' && (
            <div className="space-y-4">
              <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200 flex items-center gap-3 text-rose-900">
                <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
                <div>
                  <div className="font-display font-bold text-sm">Room Requires Housekeeping Turnover</div>
                  <div className="text-[11px] text-rose-700 mt-0.5 font-medium">
                    Previous guest departed. Linen swap and sanitation in queue.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    updateRoomStatus(room.id, 'clean');
                    setIsRoomDetailModalOpen(false);
                  }}
                  className="p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark Clean & Inspected</span>
                </button>

                <button
                  onClick={() => {
                    setIsRoomDetailModalOpen(false);
                    setCurrentView('housekeeping');
                  }}
                  className="p-3.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Assign Housekeeper →</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={() => setIsRoomDetailModalOpen(false)}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
