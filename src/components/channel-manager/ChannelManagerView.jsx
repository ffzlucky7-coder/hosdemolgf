import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Globe,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Zap,
  Lock,
  ArrowRight,
  ShieldCheck,
  Edit,
  X,
  Check,
  Building2,
  Plane,
  Compass,
  Home,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ChannelManagerView() {
  const { showToast } = useApp();
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedChannelForEdit, setSelectedChannelForEdit] = useState(null);
  const [rateForm, setRateForm] = useState({
    deluxeRate: 5400,
    suiteRate: 8800,
    minStay: 2,
    stopSell: false
  });

  const [channels, setChannels] = useState([
    {
      name: 'STAAH Max Channel Gateway',
      icon: Globe,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      status: 'Connected & Synced',
      lastSync: '12 seconds ago',
      activeRooms: 120,
      syncHealth: '100%',
      type: 'Primary Gateway',
      rate: 5400
    },
    {
      name: 'Booking.com',
      icon: Building2,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      status: 'Live & Direct Sync',
      lastSync: '1 min ago',
      activeRooms: 80,
      syncHealth: '99.8%',
      type: 'OTA Channel',
      rate: 5400
    },
    {
      name: 'MakeMyTrip / Goibibo',
      icon: Plane,
      color: 'text-red-600 bg-red-50 border-red-200',
      status: 'Live & Direct Sync',
      lastSync: '2 mins ago',
      activeRooms: 95,
      syncHealth: '99.9%',
      type: 'Domestic OTA',
      rate: 5400
    },
    {
      name: 'Agoda',
      icon: Compass,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      status: 'Live & Direct Sync',
      lastSync: '3 mins ago',
      activeRooms: 60,
      syncHealth: '100%',
      type: 'International OTA',
      rate: 5400
    },
    {
      name: 'Expedia Group',
      icon: Layers,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      status: 'Live & Direct Sync',
      lastSync: '4 mins ago',
      activeRooms: 50,
      syncHealth: '99.7%',
      type: 'Global OTA',
      rate: 5400
    },
    {
      name: 'Airbnb',
      icon: Home,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      status: 'Live & Direct Sync',
      lastSync: '6 mins ago',
      activeRooms: 20,
      syncHealth: '100%',
      type: 'Villas & Suites',
      rate: 8800
    }
  ]);

  const [syncLogs, setSyncLogs] = useState([
    { time: '15:48:12', channel: 'STAAH Gateway', event: 'Inventory 2-way sync completed for 120 rooms', status: 'Success' },
    { time: '15:47:04', channel: 'Booking.com', event: 'New Reservation imported: Mr. Ankit Sharma (Deluxe Room)', status: 'Success' },
    { time: '15:45:22', channel: 'MakeMyTrip', event: 'Rate Parity updated to ₹5,420 for weekend dates', status: 'Success' },
    { time: '15:42:19', channel: 'Agoda', event: 'Stop-Sell restriction applied on Presidential Suite (Sold Out)', status: 'Success' },
  ]);

  const handleSyncAll = () => {
    setIsSyncing(true);
    showToast('Triggering two-way instant OTA & STAAH sync...');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncLogs(prev => [
        { time: new Date().toLocaleTimeString(), channel: 'Global 2-Way Sync', event: 'All 6 OTA channels updated with 0 rate disparity', status: 'Success' },
        ...prev
      ]);
      showToast('All 6 channels synchronized successfully with 0 rate disparity!');
    }, 1000);
  };

  const handleSaveRates = (e) => {
    e.preventDefault();
    setChannels(prev => prev.map(c => c.name === selectedChannelForEdit.name ? { ...c, rate: rateForm.deluxeRate, lastSync: 'Just now' } : c));
    setSyncLogs(prev => [
      { time: new Date().toLocaleTimeString(), channel: selectedChannelForEdit.name, event: `Pushed new Deluxe Rate: ₹${rateForm.deluxeRate} (Min Stay: ${rateForm.minStay}N)`, status: 'Success' },
      ...prev
    ]);
    showToast(`Pushed ₹${rateForm.deluxeRate} rate update to ${selectedChannelForEdit.name} via STAAH!`);
    setSelectedChannelForEdit(null);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 14 • OTA & STAAH Engine</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Channel Manager & OTA Rate Parity</h1>
          <p className="text-xs text-slate-500 mt-0.5">Real-time 2-way rate parity, availability sync, and instant booking import.</p>
        </div>
        <button
          onClick={handleSyncAll}
          disabled={isSyncing}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
          <span>{isSyncing ? 'Synchronizing...' : 'Instant Sync All 6 Channels'}</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connected Channels</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">6 Active</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">100% Rate Parity</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <Globe className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">OTA Bookings (MTD)</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">342</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">₹18.4L Gross Revenue</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sync Speed / Latency</div>
            <div className="text-3xl font-mono font-bold text-emerald-600 mt-2">1.2s</div>
            <div className="text-xs text-emerald-700 font-semibold mt-1">Sub-second 2-way sync</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Zap className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Double-Booking Risk</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">0.0%</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Automated Stop-Sell</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Connected Channel Cards Grid */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-base text-slate-900">Active OTA Integrations & Gateways (Tap to Edit Rates)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                onClick={() => {
                  setSelectedChannelForEdit(c);
                  setRateForm({ deluxeRate: c.rate, suiteRate: c.rate + 3500, minStay: 1, stopSell: false });
                }}
                className="custom-card p-5 hover:shadow-xl hover:border-indigo-400 transition-all space-y-4 border border-slate-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-105 transition-transform ${c.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">{c.name}</h4>
                      <div className="text-[11px] text-slate-400 font-medium">{c.type}</div>
                    </div>
                  </div>
                  <span className="custom-badge badge-active text-[10px]">
                    {c.status}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Live Published Rate:</span>
                    <div className="font-mono font-extrabold text-slate-900 text-sm">₹{c.rate.toLocaleString()}/N</div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Sync Uptime:</span>
                    <div className="font-mono font-bold text-emerald-600">{c.syncHealth}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Mapped: <strong>{c.activeRooms} Rooms</strong></span>
                  <span className="text-indigo-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Adjust Rate & Min-Stay →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-time 2-Way Sync Logs Table */}
      <div className="custom-card p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Real-Time Channel Activity & Sync Logs</h3>
            <p className="text-xs text-slate-400 font-medium">Auditable trace of all inbound reservations and outbound rate changes.</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live Stream
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 pl-4">Timestamp</th>
                <th className="p-3">Channel Name</th>
                <th className="p-3">Sync Event Details</th>
                <th className="p-3 text-right pr-4">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {syncLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80">
                  <td className="p-3 pl-4 font-mono text-slate-500">{log.time}</td>
                  <td className="p-3 font-bold text-slate-900">{log.channel}</td>
                  <td className="p-3 text-slate-700">{log.event}</td>
                  <td className="p-3 text-right pr-4">
                    <span className="custom-badge badge-active text-[10px]">
                      ✓ {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Channel Rate & Restriction Modifier Modal */}
      {selectedChannelForEdit && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${selectedChannelForEdit.color}`}>
                  {React.createElement(selectedChannelForEdit.icon, { className: 'w-4 h-4' })}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">Adjust Rates: {selectedChannelForEdit.name}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Push real-time rate updates via STAAH 2-way gateway.</p>
                </div>
              </div>
              <button onClick={() => setSelectedChannelForEdit(null)} className="p-1 rounded-lg text-slate-400 hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveRates} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Deluxe Room Nightly Rate (₹)</label>
                <input
                  type="number"
                  value={rateForm.deluxeRate}
                  onChange={(e) => setRateForm({ ...rateForm, deluxeRate: parseInt(e.target.value) })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono font-bold outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Minimum Stay Restriction</label>
                <select
                  value={rateForm.minStay}
                  onChange={(e) => setRateForm({ ...rateForm, minStay: parseInt(e.target.value) })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold outline-none"
                >
                  <option value={1}>1 Night (No Restriction)</option>
                  <option value={2}>2 Nights (Weekend Minimum)</option>
                  <option value={3}>3 Nights (Long Weekend / Holiday)</option>
                </select>
              </div>

              <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rateForm.stopSell}
                    onChange={(e) => setRateForm({ ...rateForm, stopSell: e.target.checked })}
                    className="w-4 h-4 text-rose-600 rounded"
                  />
                  <div>
                    <div className="font-bold text-rose-900">Apply Stop-Sell on this OTA</div>
                    <div className="text-[10px] text-rose-600">Close availability on {selectedChannelForEdit.name} to maximize direct hotel profit.</div>
                  </div>
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedChannelForEdit(null)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Push 2-Way Sync</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
