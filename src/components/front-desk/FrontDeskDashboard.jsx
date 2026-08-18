import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  LogIn,
  LogOut,
  BedDouble,
  Phone,
  ChevronRight,
  Sparkles,
  Search,
  Plus
} from 'lucide-react';

export default function FrontDeskDashboard() {
  const {
    arrivals,
    departures,
    rooms,
    openGuestProfile,
    setIsCheckInModalOpen,
    setIsNewReservationModalOpen,
    setSelectedRoomForDetail,
    setIsRoomDetailModalOpen,
    setCurrentView
  } = useApp();

  const inHouseCount = rooms.filter(r => r.status === 'occupied').length;
  const availableRoomsCount = rooms.filter(r => r.status === 'clean').length;

  const handleArrivalCheckIn = (guest) => {
    setIsCheckInModalOpen(true);
  };

  const handleDepartureClick = (guest) => {
    const matchedRoom = rooms.find(r => r.number === guest.room);
    if (matchedRoom) {
      setSelectedRoomForDetail(matchedRoom);
      setIsRoomDetailModalOpen(true);
    } else {
      setCurrentView('invoice');
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Top Banner & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Front Desk & Hotel Operations</h1>
          <p className="text-sm text-slate-500 mt-1">Live overview of arrivals, departures, and room allocations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('tape-chart')}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            Tape Chart Timeline
          </button>
          <button
            onClick={() => setCurrentView('room-grid')}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            Floor Matrix Map
          </button>
          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>+ Walk-In / Reservation</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Arrivals Today */}
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Arrivals Today</div>
            <div className="text-3xl font-black text-slate-900 mt-2">{arrivals.length}</div>
            <div className="text-xs text-indigo-600 font-bold mt-1">{arrivals.length} pending check-in</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <LogIn className="w-6 h-6" />
          </div>
        </div>

        {/* Departures Today */}
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Departures Today</div>
            <div className="text-3xl font-black text-slate-900 mt-2">{departures.length}</div>
            <div className="text-xs text-amber-600 font-bold mt-1">{departures.length} pending checkout</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <LogOut className="w-6 h-6" />
          </div>
        </div>

        {/* In-House Guests */}
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">In-House Rooms</div>
            <div className="text-3xl font-black text-slate-900 mt-2">{inHouseCount}</div>
            <div className="text-xs text-emerald-600 font-bold mt-1">{Math.round((inHouseCount / rooms.length) * 100)}% occupancy rate</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Available Rooms */}
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ready Clean Rooms</div>
            <div className="text-3xl font-black text-slate-900 mt-2">{availableRoomsCount}</div>
            <div className="text-xs text-blue-600 font-bold mt-1">Ready for walk-in arrivals</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <BedDouble className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Two Column Lists: Today's Arrivals vs Today's Departures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Arrivals */}
        <div className="custom-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Today's Scheduled Arrivals</h3>
                <p className="text-xs text-slate-400 mt-0.5">Expected guests arriving today with live room allocations</p>
              </div>
              <span className="px-3 py-1 text-xs font-black rounded-full bg-indigo-50 text-indigo-700">
                {arrivals.length} Guests
              </span>
            </div>

            <div className="divide-y divide-slate-100 mt-2">
              {arrivals.map((guest) => (
                <div
                  key={guest.id}
                  onClick={() => openGuestProfile({
                    name: guest.name,
                    avatar: guest.avatar,
                    phone: guest.phone,
                    email: `${guest.name.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
                    room: `Room ${guest.room} (${guest.roomType})`
                  })}
                  className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 px-2 rounded-2xl cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 text-indigo-700 group-hover:text-white font-black text-xs flex items-center justify-center transition-colors">
                      {guest.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        <span>{guest.name}</span>
                        {guest.vip && (
                          <span className="px-1.5 py-0.2 text-[9px] font-extrabold bg-amber-100 text-amber-800 rounded">
                            VIP
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5 font-medium">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" /> {guest.phone}
                        </span>
                        <span>•</span>
                        <span className="font-bold text-slate-700">Room {guest.room}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArrivalCheckIn(guest);
                      }}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                    >
                      Check-In →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-2xl border border-slate-200 transition-colors"
          >
            + Process Walk-in Arrival
          </button>
        </div>

        {/* Today's Departures */}
        <div className="custom-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Today's Scheduled Departures</h3>
                <p className="text-xs text-slate-400 mt-0.5">Guests checking out today with pending folios</p>
              </div>
              <span className="px-3 py-1 text-xs font-black rounded-full bg-amber-50 text-amber-800">
                {departures.length} Guests
              </span>
            </div>

            <div className="divide-y divide-slate-100 mt-2">
              {departures.map((guest) => (
                <div
                  key={guest.id}
                  onClick={() => handleDepartureClick(guest)}
                  className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 px-2 rounded-2xl cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-100 group-hover:bg-amber-600 text-amber-800 group-hover:text-white font-black text-xs flex items-center justify-center transition-colors">
                      {guest.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {guest.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5 font-medium">
                        <span className="font-bold text-slate-700">Room {guest.room}</span>
                        <span>•</span>
                        <span className="text-amber-700 font-semibold">{guest.balanceDue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDepartureClick(guest);
                      }}
                      className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                    >
                      Checkout / Bill →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentView('invoice')}
            className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-2xl border border-slate-200 transition-colors"
          >
            View All Billing Folios & Invoices
          </button>
        </div>
      </div>
    </div>
  );
}
