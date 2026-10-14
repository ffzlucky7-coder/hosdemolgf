import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  UserPlus,
  Search,
  Shield,
  Building2,
  Mail,
  Phone,
  MoreVertical,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function UsersListView() {
  const { showToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const staffUsers = [
    { id: 'USR-01', name: 'Devendra Singhania', email: 'owner@solariagroup.com', role: 'Super Admin', hotel: 'All Properties', status: 'Active', phone: '+91 80033 95964', avatar: 'DS' },
    { id: 'USR-02', name: 'Vikramaditya Singhania', email: 'gm@aurasolis.com', role: 'Resort GM', hotel: 'Aura Solis Grand Sanctuary & Spa', status: 'Active', phone: '+91 98202 33445', avatar: 'VS' },
    { id: 'USR-03', name: 'Karan Malhotra', email: 'cluster.north@zenithhotels.com', role: 'Area Manager', hotel: 'Capital & Northern Metros (4 Properties)', status: 'Active', phone: '+91 98765 43210', avatar: 'KM' },
    { id: 'USR-04', name: 'Ananya Deshmukh', email: 'cluster.west@azurebayresort.com', role: 'Area Manager', hotel: 'Western Coastal Cluster (3 Properties)', status: 'Active', phone: '+91 98303 44556', avatar: 'AD' },
    { id: 'USR-05', name: 'Amit Patel', email: 'reception@aurasolis.com', role: 'Front Desk Lead', hotel: 'Aura Solis Grand Sanctuary & Spa', status: 'Active', phone: '+91 98404 55667', avatar: 'AP' },
    { id: 'USR-06', name: 'Sunita Roy', email: 'sunita.r@aurasolis.com', role: 'Front Desk Associate', hotel: 'Aura Solis Grand Sanctuary & Spa', status: 'Active', phone: '+91 98505 66778', avatar: 'SR' },
    { id: 'USR-07', name: 'Chef Laurent Varma', email: 'chef@aurasolis.com', role: 'Executive Chef (F&B)', hotel: 'Aura Solis Fine Dining', status: 'Active', phone: '+91 98606 77889', avatar: 'LV' },
    { id: 'USR-08', name: 'Ramesh Kumar', email: 'housekeeping@aurasolis.com', role: 'Housekeeping Lead', hotel: 'Aura Solis Grand Sanctuary & Spa', status: 'Active', phone: '+91 98707 88990', avatar: 'RK' },
  ];

  const filteredUsers = staffUsers.filter(u => {
    if (roleFilter !== 'All' && u.role !== roleFilter) return false;
    if (searchTerm && !u.name.toLowerCase().includes(searchTerm.toLowerCase()) && !u.email.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const getRoleBadge = (role) => {
    if (role.includes('Super Admin')) return <span className="custom-badge badge-enterprise">{role}</span>;
    if (role.includes('Resort GM') || role.includes('Hotel Admin')) return <span className="custom-badge badge-pro">{role}</span>;
    if (role.includes('Area Manager')) return <span className="custom-badge badge-active">{role}</span>;
    return <span className="custom-badge badge-starter">{role}</span>;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 11 • Role-Based Staff Access Governance</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Staff & Access Governance</h1>
          <p className="text-xs text-slate-500 mt-0.5">Manage user roles, permissions, and multi-hotel assignments.</p>
        </div>
        <button
          onClick={() => showToast('New staff member invite dispatched!')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add New User</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3 flex-1 min-w-[240px] max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search users by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none cursor-pointer"
          >
            <option value="All">All Roles</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Resort GM">Resort GM</option>
            <option value="Area Manager">Area Manager</option>
            <option value="Front Desk Lead">Front Desk</option>
            <option value="Executive Chef (F&B)">F&B Staff</option>
            <option value="Housekeeping Lead">Housekeeping</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="custom-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-4 pl-5">User Name & Contact</th>
                <th className="p-4">Assigned Role</th>
                <th className="p-4">Assigned Property / Cluster</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right pr-5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 pl-5 flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {u.avatar}
                    </div>
                    <div>
                      <div className="font-display font-bold text-slate-900 text-sm">{u.name}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-indigo-500" /> {u.email}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono"><Phone className="w-3 h-3 text-emerald-500" /> {u.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{getRoleBadge(u.role)}</td>
                  <td className="p-4 font-semibold text-slate-800">{u.hotel}</td>
                  <td className="p-4">
                    <span className="custom-badge badge-active font-mono">{u.status}</span>
                  </td>
                  <td className="p-4 text-right pr-5">
                    <button
                      onClick={() => showToast(`Password reset link sent to ${u.email}`)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Permissions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
