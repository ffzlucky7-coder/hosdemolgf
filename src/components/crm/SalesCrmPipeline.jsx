import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Briefcase,
  Users,
  Award,
  MessageSquareWarning,
  Star,
  Plus,
  ChevronRight,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  AlertTriangle,
  Gift
} from 'lucide-react';

export default function SalesCrmPipeline() {
  const { crmDeals, moveCrmDeal, openGuestProfile, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'loyalty' | 'feedback'

  const stages = [
    { id: 'lead', title: 'New Leads', color: 'border-t-blue-500 bg-blue-50/20' },
    { id: 'proposal', title: 'BEO Proposal Sent', color: 'border-t-amber-500 bg-amber-50/20' },
    { id: 'negotiation', title: 'Menu Tasting / Negotiation', color: 'border-t-purple-500 bg-purple-50/20' },
    { id: 'won', title: 'Contract Signed & Advance Paid', color: 'border-t-emerald-500 bg-emerald-50/20' }
  ];

  const loyaltyMembers = [
    { id: 'RC-001', name: 'Rohit Sharma', tier: 'Platinum Royal Club', stays: 4, spend: '₹1,84,500', points: 3450, vip: true, favUnit: 'Presidential Fort Villa 204' },
    { id: 'RC-002', name: 'Dr. Vivek Deshmukh', tier: 'Gold Elite', stays: 3, spend: '₹1,12,000', points: 2100, vip: true, favUnit: 'Grand Heritage Villa 113' },
    { id: 'RC-003', name: 'Amit Patel', tier: 'Silver Heritage', stays: 2, spend: '₹62,000', points: 950, vip: false, favUnit: 'Luxury Treehouse 101' },
    { id: 'RC-004', name: 'Sunita Roy', tier: 'Gold Elite', stays: 3, spend: '₹88,000', points: 1750, vip: false, favUnit: 'Aravali View Cottage 105' },
  ];

  const complaintsList = [
    { id: 'CMP-101', guest: 'Amit Patel (Treehouse 101)', issue: 'Balcony Jacuzzi water temperature was low on arrival', priority: 'High', resolution: 'Technician dispatched, heated to 38°C with aromatherapy salts in 12 mins', status: 'Resolved & Happy (5★)' },
    { id: 'CMP-102', guest: 'Karan Malhotra (Suite 110)', issue: 'Requested extra bathrobes and extra fruit basket', priority: 'Normal', resolution: 'Delivered by Butler service with complimentary Rajasthani sweets', status: 'Resolved & Closed' },
  ];

  const getNextStage = (current) => {
    if (current === 'lead') return 'proposal';
    if (current === 'proposal') return 'negotiation';
    if (current === 'negotiation') return 'won';
    return null;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header & Sub-Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Module 7 • Guest CRM & Sales Pipeline</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Deals, Royal Loyalty Club & Guest Feedback</h1>
          <p className="text-sm text-slate-500 mt-0.5">Corporate retreat pipeline, wedding contracts, loyalty points, and SLA resolution tracking.</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pipeline' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💼 Wedding & Corporate Pipeline
          </button>
          <button
            onClick={() => setActiveTab('loyalty')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'loyalty' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            👑 Royal Loyalty Club ({loyaltyMembers.length})
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'feedback' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⭐ Feedback & Complaints ({complaintsList.length})
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Pipeline Value</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">₹{(crmDeals.reduce((s, d) => s + d.value, 0) / 100000).toFixed(1)}L</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">4 Active Contracts</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Loyalty Club Members</div>
            <div className="text-3xl font-bold text-amber-600 mt-2">1,420</div>
            <div className="text-xs text-amber-700 font-semibold mt-1">Platinum & Gold Club</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Avg Wedding Deal</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">₹45.0L</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Aravali Lawn Weddings</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Guest Satisfaction</div>
            <div className="text-3xl font-bold text-emerald-600 mt-2">4.9 / 5.0</div>
            <div className="text-xs text-emerald-700 font-semibold mt-1">98% Positive Reviews</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Star className="w-6 h-6 fill-current" />
          </div>
        </div>
      </div>

      {/* 1. DEALS PIPELINE VIEW */}
      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {stages.map((stage) => {
            const deals = crmDeals.filter(d => d.stage === stage.id);
            return (
              <div
                key={stage.id}
                className={`custom-card p-4 border-t-4 ${stage.color} space-y-3 min-h-[500px] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="font-bold text-sm text-slate-900">{stage.title}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 font-black text-xs">
                      {deals.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {deals.map((deal) => {
                      const next = getNextStage(deal.stage);
                      return (
                        <div
                          key={deal.id}
                          className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-900">{deal.client}</span>
                          </div>

                          <div className="text-xs text-slate-500 font-medium">
                            {deal.type} • <strong>{deal.rooms} Rooms/Villas</strong>
                          </div>

                          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                            <div className="font-extrabold text-sm text-indigo-900">
                              ₹{(deal.value / 100000).toFixed(1)}L
                            </div>

                            {next && (
                              <button
                                onClick={() => moveCrmDeal(deal.id, next)}
                                className="flex items-center gap-1 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold rounded-xl text-xs transition-colors shadow-2xs"
                              >
                                <span>Advance</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                            {deal.stage === 'won' && (
                              <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 border border-emerald-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Won ✓
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => showToast('New CRM Opportunity created')}
                  className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-xl border border-dashed border-slate-300 transition-colors"
                >
                  + Add New Deal
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. ROYAL LOYALTY CLUB VIEW */}
      {activeTab === 'loyalty' && (
        <div className="custom-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-900">Lohagarh Royal Heritage Club Members</h3>
              <p className="text-xs text-slate-400">Exclusive tier privileges, points redemption, and guest preference profiles.</p>
            </div>
            <button
              onClick={() => showToast('Loyalty points campaign dispatched to all Platinum members')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              + Send Tier Rewards
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 pl-4">Member ID</th>
                  <th className="p-3">Guest Name</th>
                  <th className="p-3">Club Tier</th>
                  <th className="p-3">Total Stays</th>
                  <th className="p-3">Lifetime Spend</th>
                  <th className="p-3">Points Balance</th>
                  <th className="p-3">Preferred Villa</th>
                  <th className="p-3 text-right pr-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {loyaltyMembers.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50/70">
                    <td className="p-3 pl-4 font-mono font-bold text-indigo-600">{m.id}</td>
                    <td className="p-3 font-bold text-slate-900">{m.name}</td>
                    <td className="p-3">
                      <span className="custom-badge badge-paid text-[10px]">{m.tier}</span>
                    </td>
                    <td className="p-3 text-slate-600 font-bold">{m.stays} Stays</td>
                    <td className="p-3 font-extrabold text-slate-900">{m.spend}</td>
                    <td className="p-3 font-black text-amber-600">{m.points} Pts</td>
                    <td className="p-3 text-slate-600">{m.favUnit}</td>
                    <td className="p-3 text-right pr-4">
                      <button
                        onClick={() => openGuestProfile({ name: m.name, avatar: m.name.slice(0, 2).toUpperCase() })}
                        className="text-xs text-indigo-600 font-bold hover:underline"
                      >
                        View CRM Profile →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. FEEDBACK & COMPLAINTS SLA TRACKER */}
      {activeTab === 'feedback' && (
        <div className="custom-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-900">Guest Feedback & Resolution SLA Tracker</h3>
              <p className="text-xs text-slate-400">Zero escalation policy: All villa guest requests tracked in under 15 minutes.</p>
            </div>
            <button
              onClick={() => showToast('New guest feedback ticket logged')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              + Log Guest Feedback
            </button>
          </div>

          <div className="space-y-3">
            {complaintsList.map((c) => (
              <div key={c.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-indigo-600 bg-white px-2 py-0.5 rounded border border-slate-200">{c.id}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{c.guest}</h4>
                  </div>
                  <span className="custom-badge badge-clean text-[10px]">{c.status}</span>
                </div>
                <div className="text-slate-700"><strong>Reported:</strong> {c.issue}</div>
                <div className="text-emerald-700 font-medium"><strong>Resolution Action:</strong> {c.resolution}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
