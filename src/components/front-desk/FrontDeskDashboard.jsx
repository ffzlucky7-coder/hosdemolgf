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
  Plus,
  CalendarDays,
  Grid,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Crown,
  KeyRound
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
    setCurrentView,
    selectedHotel
  } = useApp();

  const inHouseCount = rooms.filter(r => r.status === 'occupied').length;
  const availableRoomsCount = rooms.filter(r => r.status === 'clean').length;
  const occupancyPercent = Math.round((inHouseCount / rooms.length) * 100);

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
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-bold text-indigo-600 tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
              Module 6 • Front Office Operations
            </span>
            <span className="text-xs text-slate-400 font-medium">Property: {selectedHotel.name.split(',')[0]}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Front Desk Operations Cockpit
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time live guest arrivals, turnover dispatch, keycard allocation, and folio management.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setCurrentView('tape-chart')}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer"
          >
            <CalendarDays className="w-3.5 h-3.5 text-indigo-600" />
            <span>Tape Chart Gantt</span>
          </button>
          <button
            onClick={() => setCurrentView('room-grid')}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer"
          >
            <Grid className="w-3.5 h-3.5 text-indigo-600" />
            <span>Floor Matrix</span>
          </button>
          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>+ Walk-In Reservation</span>
          </button>
        </div>
      </div>

      {/* KPI Cards — Luxury Cards with Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Arrivals Today */}
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              Arrivals Today
            </span>
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/80 shadow-2xs">
              <LogIn className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">{arrivals.length}</div>
            <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-bold mt-1">
              <KeyRound className="w-3.5 h-3.5" />
              <span>{arrivals.length} Pending RFID Keycard Dispatch</span>
            </div>
          </div>
        </div>

        {/* Departures Today */}
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              Departures Today
            </span>
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/80 shadow-2xs">
              <LogOut className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">{departures.length}</div>
            <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold mt-1">
              <CreditCard className="w-3.5 h-3.5" />
              <span>{departures.length} Pending Folio Settlement</span>
            </div>
          </div>
        </div>

        {/* In-House Rooms & Occupancy Rate */}
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              In-House Stays
            </span>
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-2xs">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-black text-slate-900">{inHouseCount}</span>
              <span className="text-xs font-mono font-bold text-slate-400">/ {rooms.length} Units</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${occupancyPercent}%` }}
              ></div>
            </div>
            <div className="text-xs text-indigo-600 font-bold mt-1.5 font-mono">
              {occupancyPercent}% Real-Time Occupancy Rate
            </div>
          </div>
        </div>

        {/* Ready Clean Rooms */}
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-display">
              Ready & Inspected
            </span>
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/80 shadow-2xs">
              <BedDouble className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-mono font-black text-slate-900">{availableRoomsCount}</div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Sanitized & Ready for Express Walk-In</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Lists: Today's Arrivals vs Today's Departures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Arrivals */}
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base">Today's Scheduled Arrivals</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Expected guests arriving today with live room allocations</p>
              </div>
              <span className="px-3 py-1 text-xs font-mono font-black rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
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
                    room: `Villa ${guest.room} (${guest.roomType})`
                  })}
                  className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 px-2 rounded-2xl cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 text-indigo-700 group-hover:text-white font-black text-xs flex items-center justify-center transition-colors">
                      {guest.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2 font-display">
                        <span>{guest.name}</span>
                        {guest.vip && (
                          <span className="px-2 py-0.5 text-[9px] font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-full flex items-center gap-1 shadow-2xs">
                            <Crown className="w-2.5 h-2.5" /> VIP
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5 font-medium">
                        <span className="flex items-center gap-1 font-mono">
                          <Phone className="w-3 h-3 text-slate-400" /> {guest.phone}
                        </span>
                        <span>•</span>
                        <span className="font-bold text-slate-700 font-mono">Villa {guest.room}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArrivalCheckIn(guest);
                      }}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
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
            className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-2xl border border-slate-200 transition-colors cursor-pointer"
          >
            + Process Express Walk-in Arrival
          </button>
        </div>

        {/* Today's Departures */}
        <div className="luxury-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base">Today's Scheduled Departures</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Guests checking out today with pending folios</p>
              </div>
              <span className="px-3 py-1 text-xs font-mono font-black rounded-full bg-amber-50 text-amber-800 border border-amber-200">
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
                      <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-display">
                        {guest.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5 font-medium">
                        <span className="font-bold text-slate-700 font-mono">Villa {guest.room}</span>
                        <span>•</span>
                        <span className="text-amber-700 font-semibold font-mono">{guest.balanceDue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDepartureClick(guest);
                      }}
                      className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
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
            className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-2xl border border-slate-200 transition-colors cursor-pointer"
          >
            View All Billing Folios & Invoices
          </button>
        </div>
      </div>
    </div>
  );
}
