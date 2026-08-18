import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Clock,
  User,
  Building,
  Check,
  X,
  Filter
} from 'lucide-react';

export default function ApprovalCenter() {
  const { approvals, approveRequest, rejectRequest, showToast } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredApprovals = approvals.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Purchase Orders') return item.type === 'Purchase Order';
    if (activeFilter === 'Refunds') return item.type === 'Refund';
    if (activeFilter === 'Rate Overrides') return item.type === 'Rate Override';
    return true;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Approval Center</h1>
          <p className="text-sm text-slate-500 mt-1">Review, authorize, or reject financial and operational exceptions.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            {approvals.length} Pending Actions
          </span>
        </div>
      </div>

      {/* KPI Cards (Matches Page 20) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Total Requests</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">12</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
        </div>

        <div className="custom-card p-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Pending Review</div>
            <div className="text-2xl font-bold text-amber-600 mt-1">{approvals.length}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="custom-card p-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Approved Today</div>
            <div className="text-2xl font-bold text-emerald-600 mt-1">6</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="custom-card p-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase">Rejected</div>
            <div className="text-2xl font-bold text-rose-600 mt-1">2</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter Tabs (Page 20) */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-semibold">
        {['All', 'Purchase Orders', 'Refunds', 'Rate Overrides'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === tab
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Approvals Grid List (Matches Page 20) */}
      <div className="space-y-4">
        {filteredApprovals.length === 0 ? (
          <div className="custom-card p-12 text-center text-slate-400 text-sm">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <div className="font-bold text-slate-700">All caught up!</div>
            <div>There are no pending approval requests in this category.</div>
          </div>
        ) : (
          filteredApprovals.map((item) => (
            <div
              key={item.id}
              className="custom-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-md transition-all border-l-4 border-l-amber-500"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {item.id}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                  <span className="custom-badge badge-pending text-xs">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium">
                  {item.reason}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Building className="w-3.5 h-3.5 text-slate-400" /> {item.hotel}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Requested by: {item.requester}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {item.date}
                  </span>
                </div>
              </div>

              {/* Amount & Actions */}
              <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                <div className="text-left md:text-right">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Impact Amount</div>
                  <div className="text-xl font-extrabold text-slate-900 mt-0.5">{item.amount}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => rejectRequest(item.id)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Reject</span>
                  </button>
                  <button
                    onClick={() => approveRequest(item.id)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    <span>Approve</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
