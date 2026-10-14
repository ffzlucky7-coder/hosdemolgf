import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Code2,
  Activity,
  Server,
  Key,
  Lock,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Play,
  Copy,
  Terminal,
  Send,
  Zap,
  ClipboardList
} from 'lucide-react';

export default function SystemHealthAuditView() {
  const { rooms, folios, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('apis'); // 'apis' | 'security' | 'audit'
  const [activeEndpoint, setActiveEndpoint] = useState('GET /api/v1/pms/rooms');
  const [apiResponse, setApiResponse] = useState(null);

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/pms/rooms',
      desc: 'Fetch real-time occupancy status, room categories, and clean/dirty state.',
      response: {
        status: 200,
        property: 'Aura Solis Grand Sanctuary & Spa',
        totalRooms: 95,
        occupancyRate: '89.4%',
        activeCleanRooms: rooms.filter(r => r.status === 'clean').length,
        occupiedVillas: rooms.filter(r => r.status === 'occupied').length,
        dirtyTurnover: rooms.filter(r => r.status === 'dirty').length,
        timestamp: new Date().toISOString()
      }
    },
    {
      method: 'POST',
      path: '/api/v1/reservations/create',
      desc: 'Create direct guest reservation with automated GST calculation and RFID keycard issuance.',
      response: {
        status: 201,
        message: 'Reservation confirmed',
        bookingId: 'BK-SOL-9921',
        guestName: 'Rohit Sharma (VIP)',
        villaAssigned: 'Villa 204 (Presidential Sovereign Villa)',
        checkIn: '2025-05-15',
        checkOut: '2025-05-18',
        totalStayAmount: '₹80,640.00',
        paymentStatus: 'Secured via Razorpay UPI',
        staahSync: 'Acknowledged'
      }
    },
    {
      method: 'POST',
      path: '/api/v1/pos/kot',
      desc: 'Dispatch restaurant order directly to Kitchen KDS and post charges to villa folio.',
      response: {
        status: 200,
        kotNumber: 'KOT-8821',
        destination: 'Villa 204 (Rohit Sharma)',
        itemsOrdered: ['1x Laal Maas Royal Handi', '2x Garlic Naan', '1x Masala Chaach'],
        amountChargedToFolio: '₹1,050.00',
        kdsStatus: 'Preparing by Chef Digvijay'
      }
    },
    {
      method: 'POST',
      path: '/api/v1/webhooks/staah-sync',
      desc: '2-way STAAH XML webhook for instant rate parity and Stop-Sell push.',
      response: {
        status: 200,
        channelGateway: 'STAAH Max Channel Manager',
        channelsUpdated: ['Booking.com', 'MakeMyTrip', 'Agoda', 'Expedia', 'Airbnb'],
        publishedRate: '₹9,500.00/night',
        rateDisparityScore: '0.0% (Perfect Parity)',
        syncLatency: '1.18s'
      }
    }
  ];

  const currentEp = endpoints.find(e => `${e.method} ${e.path}` === activeEndpoint) || endpoints[0];

  const handleTestEndpoint = () => {
    showToast(`Executed ${currentEp.method} ${currentEp.path} — Status 200 OK`);
    setApiResponse(currentEp.response);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header & Sub-Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Modules 17, 18 & 19 • Infrastructure & APIs</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Security Compliance, REST APIs & Audit Trail</h1>
          <p className="text-xs text-slate-500 mt-0.5">Enterprise security architecture, interactive API testing sandbox, and role audit logs.</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('apis')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'apis' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>REST API Playground</span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'security' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Security & Compliance</span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'audit' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ClipboardList className="w-3.5 h-3.5 text-amber-500" />
            <span>Audit Trail Logs</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">System Uptime (SLA)</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">99.98%</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Google Cloud Platform</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Server className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">API Calls (Today)</div>
            <div className="text-3xl font-mono font-black text-slate-900 mt-2">48,290</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Avg latency: 42ms</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <Code2 className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Security Posture</div>
            <div className="text-3xl font-display font-black text-emerald-600 mt-2">SOC-2 Type II</div>
            <div className="text-xs text-emerald-700 font-semibold mt-1">PCI-DSS Level 1 Ready</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Data Encryption</div>
            <div className="text-3xl font-display font-black text-slate-900 mt-2">AES-256</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">At Rest & In Transit</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Lock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 1. REST API PLAYGROUND VIEW */}
      {activeTab === 'apis' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Endpoint List */}
          <div className="lg:col-span-5 custom-card p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900">Hospitality REST Endpoints</h3>
            <div className="space-y-2.5">
              {endpoints.map((e) => {
                const epKey = `${e.method} ${e.path}`;
                const isSelected = activeEndpoint === epKey;
                return (
                  <div
                    key={epKey}
                    onClick={() => {
                      setActiveEndpoint(epKey);
                      setApiResponse(null);
                    }}
                    className={`p-3.5 rounded-2xl cursor-pointer border-2 transition-all space-y-1.5 ${
                      isSelected ? 'border-indigo-600 bg-indigo-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-black ${
                        e.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {e.method}
                      </span>
                      <span className="font-mono font-bold text-xs text-slate-900">{e.path}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">{e.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Console Sandbox */}
          <div className="lg:col-span-7 custom-card p-6 space-y-4 bg-slate-900 text-slate-100 border-none shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-bold text-slate-300">Live API Request Console</span>
              </div>
              <button
                onClick={handleTestEndpoint}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Send Request (Test)</span>
              </button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="text-emerald-400 font-bold">{currentEp.method}</span>{' '}
                <span className="text-slate-400">https://api.solariahotels.com</span>
                <span className="text-white font-bold">{currentEp.path}</span>
              </div>
              <span className="text-[10px] text-slate-500">Bearer Token: active</span>
            </div>

            {/* Response Output */}
            <div>
              <div className="text-[11px] font-mono font-bold text-slate-400 mb-1.5">JSON Payload Response:</div>
              <pre className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto max-h-80 leading-relaxed">
                {apiResponse 
                  ? JSON.stringify(apiResponse, null, 2)
                  : `// Click "Send Request" above to test real-time JSON response from ${currentEp.path}`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* 2. SECURITY POSTURE VIEW */}
      {activeTab === 'security' && (
        <div className="custom-card p-6 space-y-6">
          <h3 className="font-display font-bold text-base text-slate-900">Enterprise Security Controls & Compliance Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Key className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-slate-900">OAuth 2.0 & JWT Sessions</h4>
              <p className="text-xs text-slate-500 font-medium">Cryptographically signed tokens with 15-minute rotation and hardware MFA enforcement.</p>
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ Enforced
              </span>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-slate-900">GDPR & DPDP Act India</h4>
              <p className="text-xs text-slate-500 font-medium">Guest PII data masked, automated right-to-be-forgotten deletion workflows, and audit export.</p>
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ Compliant
              </span>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-slate-900">PCI-DSS Tokenization</h4>
              <p className="text-xs text-slate-500 font-medium">Zero raw credit card numbers stored on server. Vault tokenization via RBI certified gateways.</p>
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ Level 1 Certified
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. AUDIT TRAIL LOGS VIEW */}
      {activeTab === 'audit' && (
        <div className="custom-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">System Audit Trail & Access Logs</h3>
              <p className="text-xs text-slate-400 font-medium">Immutable ledger of every staff action, room rate modification, and invoice settlement.</p>
            </div>
            <button
              onClick={() => showToast('Audit logs exported as CSV & PDF')}
              className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-xl hover:bg-indigo-100 transition-colors cursor-pointer"
            >
              Export Audit Trail (CSV)
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 pl-4">Timestamp</th>
                  <th className="p-3">User / Staff</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Action Performed</th>
                  <th className="p-3">IP & Device</th>
                  <th className="p-3 text-right pr-4">Security Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {[
                  { time: '15:52:10', user: 'Gajendra Singh Rathore', role: 'Resort General Manager', action: 'Approved PO #101 (Jacuzzi Heater Replacement ₹65,000)', ip: '103.21.144.12 (Jaipur Office)', level: 'High' },
                  { time: '15:48:02', user: 'Sunita Devi', role: 'Senior Villa Attendant', action: 'Completed 5-Point Inspection for Pool Villa 106', ip: '192.168.1.45 (Staff Tablet)', level: 'Normal' },
                  { time: '15:42:19', user: 'Chef Digvijay', role: 'Executive Chef', action: 'Received KOT #8821 for Villa 204', ip: '192.168.1.80 (Kitchen KDS)', level: 'Normal' },
                  { time: '15:35:40', user: 'STAAH Gateway Bot', role: 'System Integration', action: 'Updated published rates to ₹9,500 on Booking.com & MMT', ip: '52.76.112.90 (STAAH API)', level: 'System' },
                ].map((log, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3 pl-4 font-mono text-slate-500">{log.time}</td>
                    <td className="p-3 font-display font-bold text-slate-900">{log.user}</td>
                    <td className="p-3 text-slate-600">{log.role}</td>
                    <td className="p-3 text-slate-800">{log.action}</td>
                    <td className="p-3 font-mono text-slate-500 text-[11px]">{log.ip}</td>
                    <td className="p-3 text-right pr-4">
                      <span className="custom-badge badge-active text-[10px]">
                        ✓ Verified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
