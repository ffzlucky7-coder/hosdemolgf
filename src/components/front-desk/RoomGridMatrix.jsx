import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BedDouble,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  User,
  Filter,
  Layers,
  Plus,
  Trees,
  Waves,
  Tent,
  Crown,
  Home,
  Castle
} from 'lucide-react';

export default function RoomGridMatrix() {
  const {
    rooms,
    updateRoomStatus,
    setSelectedRoomForDetail,
    setIsRoomDetailModalOpen,
    setIsNewReservationModalOpen
  } = useApp();
  
  const [selectedFloor, setSelectedFloor] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredRooms = rooms.filter(room => {
    if (selectedFloor !== 'all' && room.floor !== parseInt(selectedFloor)) return false;
    if (statusFilter !== 'all' && room.status !== statusFilter) return false;
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'clean':
        return 'bg-emerald-50/60 border-emerald-300 text-emerald-950 hover:bg-emerald-100 hover:border-emerald-500';
      case 'dirty':
        return 'bg-rose-50/60 border-rose-300 text-rose-950 hover:bg-rose-100 hover:border-rose-500';
      case 'occupied':
        return 'bg-indigo-50/60 border-indigo-300 text-indigo-950 hover:bg-indigo-100 hover:border-indigo-500';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  const getUnitIcon = (iconType) => {
    switch (iconType) {
      case 'tree': return <Trees className="w-3.5 h-3.5 text-emerald-600" />;
      case 'pool': return <Waves className="w-3.5 h-3.5 text-cyan-600" />;
      case 'tent': return <Tent className="w-3.5 h-3.5 text-amber-600" />;
      case 'crown': return <Crown className="w-3.5 h-3.5 text-purple-600" />;
      case 'suite': return <Castle className="w-3.5 h-3.5 text-indigo-600" />;
      case 'villa': return <Home className="w-3.5 h-3.5 text-blue-600" />;
      default: return <BedDouble className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  const handleRoomClick = (room) => {
    setSelectedRoomForDetail(room);
    setIsRoomDetailModalOpen(true);
  };

  const cleanCount = rooms.filter(r => r.status === 'clean').length;
  const dirtyCount = rooms.filter(r => r.status === 'dirty').length;
  const occupiedCount = rooms.filter(r => r.status === 'occupied').length;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase">Module 6 • Front Desk Operations</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Interactive Room Floor Matrix</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Live occupancy grid. Click any room for walk-in check-in, live billing folios, mini-bar billing, or housekeeping dispatch.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsNewReservationModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Walk-In / Booking</span>
          </button>
        </div>
      </div>

      {/* Legend & Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-slate-400 ml-1" />
          <button
            onClick={() => setSelectedFloor('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              selectedFloor === 'all' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Wings ({rooms.length})
          </button>
          <button
            onClick={() => setSelectedFloor('1')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              selectedFloor === '1' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Ground Wing (101–116)
          </button>
          <button
            onClick={() => setSelectedFloor('2')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              selectedFloor === '2' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Fort Wing (201–216)
          </button>
        </div>

        {/* Legend Counts */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Clean & Ready ({cleanCount})</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span>Turnover ({dirtyCount})</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            <span>Occupied ({occupiedCount})</span>
          </div>
        </div>
      </div>

      {/* Room Matrix Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            onClick={() => handleRoomClick(room)}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer shadow-xs hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between h-36 relative ${getStatusColor(
              room.status
            )}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl text-slate-900 tracking-tight">{room.number}</span>
                {getUnitIcon(room.iconType)}
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-white/80 border border-black/5 shadow-2xs font-mono">
                F{room.floor}
              </span>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-800 line-clamp-1">{room.type}</div>
              <div className="text-[11px] font-mono font-semibold text-slate-600 mt-0.5">₹{room.price.toLocaleString()}</div>
            </div>

            <div className="flex items-center justify-between pt-1.5 border-t border-black/10">
              <span className="capitalize text-[11px] font-bold">{room.status}</span>
              {room.guest && (
                <span className="text-[10px] font-bold text-indigo-900 truncate max-w-[75px] bg-indigo-100/80 px-1.5 py-0.5 rounded">
                  {room.guest}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
