import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TAPE_CHART_DATES } from '../../data/mockData';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Filter,
  Plus,
  Search,
  BedDouble,
  Sparkles
} from 'lucide-react';

export default function TapeChartGantt() {
  const {
    openGuestProfile,
    setIsNewReservationModalOpen,
    tapeChartBookings,
    rooms,
    setSelectedRoomForDetail,
    setIsRoomDetailModalOpen
  } = useApp();

  const [selectedType, setSelectedType] = useState('All Rooms');
  const [activeDateRange, setActiveDateRange] = useState('May 12 – May 25, 2025');

  const roomRows = [
    { number: '101', type: 'Luxury Tree House with Jacuzzi', price: 9500 },
    { number: '102', type: 'Luxury Tree House with Jacuzzi', price: 9500 },
    { number: '103', type: 'Private Pool Villa with Garden', price: 14500 },
    { number: '104', type: 'Royal Swiss Luxury Tent', price: 7500 },
    { number: '105', type: 'Royal Swiss Luxury Tent', price: 7500 },
    { number: '106', type: 'Private Pool Villa with Garden', price: 14500 },
    { number: '201', type: 'Private Pool Villa with Garden', price: 14500 },
    { number: '204', type: 'Presidential Maharaja Fort Villa', price: 24000 },
    { number: '206', type: 'Maharaja Heritage Suite', price: 18000 },
    { number: '214', type: 'Maharaja Heritage Suite', price: 18000 }
  ];

  const filteredRows = selectedType === 'All Rooms' 
    ? roomRows 
    : roomRows.filter(r => r.type.toLowerCase().includes(selectedType.toLowerCase()));

  const handleBookingClick = (booking, room) => {
    const matchedRoom = rooms.find(r => r.number === room.number);
    if (matchedRoom) {
      setSelectedRoomForDetail(matchedRoom);
      setIsRoomDetailModalOpen(true);
    } else {
      openGuestProfile({
        name: booking.guestName,
        avatar: booking.guestName.slice(0, 2).toUpperCase(),
        phone: '+91 98765 43210',
        room: `Villa ${room.number} (${room.type})`
      });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 1 • Front Desk Multi-Day Tape Chart</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Interactive Tape Chart / Gantt Timeline</h1>
          <p className="text-xs text-slate-500 mt-0.5">Multi-day visual calendar for room allocations, guest stays, and live booking extensions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ New Reservation</span>
          </button>
        </div>
      </div>

      {/* Date Navigation & Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
            <button className="p-2 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1.5 text-xs font-mono font-bold text-slate-800 border-x border-slate-200 bg-white">
              Today (May 18)
            </span>
            <button className="p-2 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-xs font-mono font-bold text-slate-800 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-indigo-600" />
            {activeDateRange}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none cursor-pointer"
          >
            <option value="All Rooms">All Villa & Room Types</option>
            <option value="Tree House">Tree Houses</option>
            <option value="Private Pool">Private Pool Villas</option>
            <option value="Tent">Luxury Tents</option>
            <option value="Maharaja">Maharaja Suites</option>
            <option value="Presidential">Presidential Villas</option>
          </select>
        </div>
      </div>

      {/* Gantt Timeline Table Matrix */}
      <div className="custom-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/90 border-b border-slate-200">
                <th className="p-3.5 text-left text-xs font-bold text-slate-700 w-56 sticky left-0 bg-slate-50 border-r border-slate-200 z-10 font-display">
                  Villa / Room & Category
                </th>
                {TAPE_CHART_DATES.map((d, i) => (
                  <th key={i} className="p-2.5 text-center border-r border-slate-100 min-w-[70px]">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{d.day}</div>
                    <div className={`text-xs font-mono font-bold mt-0.5 ${d.date === 'May 18' ? 'text-indigo-600 font-black ring-2 ring-indigo-500/20 bg-indigo-50 rounded px-1' : 'text-slate-800'}`}>
                      {d.date.split(' ')[1]}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredRows.map((room) => {
                const booking = tapeChartBookings.find(b => b.roomNumber === room.number);
                return (
                  <tr key={room.number} className="hover:bg-slate-50/50 transition-colors">
                    {/* Left Fixed Header Column */}
                    <td className="p-3 font-semibold text-slate-900 sticky left-0 bg-white border-r border-slate-200 z-10">
                      <div className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 font-mono font-black flex items-center justify-center text-xs shadow-2xs border border-indigo-100">
                          {room.number}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900 font-display">{room.type}</div>
                          <div className="text-[10px] text-slate-400 font-mono font-medium">₹{room.price.toLocaleString()}/night</div>
                        </div>
                      </div>
                    </td>

                    {/* Timeline Day Grid Cells */}
                    {TAPE_CHART_DATES.map((d, colIndex) => {
                      const isBookingStart = booking && booking.startCol === colIndex;
                      const isInBooking = booking && colIndex >= booking.startCol && colIndex < booking.startCol + booking.spanCols;

                      if (isBookingStart) {
                        return (
                          <td
                            key={colIndex}
                            colSpan={booking.spanCols}
                            className="p-1.5 border-r border-slate-100 relative text-center"
                          >
                            <div
                              onClick={() => handleBookingClick(booking, room)}
                              className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs shadow-sm cursor-pointer hover:opacity-95 transition-all truncate flex items-center justify-between ${booking.color}`}
                            >
                              <span className="truncate">{booking.guestName}</span>
                              <span className="text-[10px] opacity-90 pl-1 font-semibold">Stay ✓</span>
                            </div>
                          </td>
                        );
                      }

                      if (isInBooking) {
                        return null;
                      }

                      return (
                        <td
                          key={colIndex}
                          onClick={() => setIsNewReservationModalOpen(true)}
                          className="p-2 border-r border-slate-100 text-center hover:bg-indigo-50/50 cursor-pointer text-slate-300 hover:text-indigo-600 transition-colors group"
                        >
                          <span className="text-[11px] font-bold opacity-0 group-hover:opacity-100 font-mono">+ Book</span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
