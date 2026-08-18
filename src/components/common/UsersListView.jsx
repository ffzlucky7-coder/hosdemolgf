import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  UserPlus,
  Search,
  Shield,
  Building,
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
    { id: 'USR-01', name: 'Rajesh Singhania', email: 'rajesh@grandhorizon.com', role: 'Super Admin', hotel: 'All Properties', status: 'Active', phone: '+91 98101 22334', avatar: 'RS' },
    { id: 'USR-02', name: 'Pooja Hegde', email: 'pooja.h@grandhorizon.com', role: 'Hotel Admin', hotel: 'Grand Horizon Delhi', status: 'Active', phone: '+91 98202 33445', avatar: 'PH' },
    { id: 'USR-03', name: 'Rohit Sharma', email: 'rohit.sharma@hotelco.com', role: 'Area Manager', hotel: 'North Zone (9 Hotels)', status: 'Active', phone: '+91 98765 43210', avatar: 'RS' },
    { id: 'USR-04', name: 'Neha Kapoor', email: 'neha.kapoor@hotelco.com', role: 'Area Manager', hotel: 'West Zone (6 Hotels)', status: 'Active', phone: '+91 98303 44556', avatar: 'NK' },
    { id: 'USR-05', name: 'Amit Patel', email: 'amit.p@grandhorizon.com', role: 'Front Desk Lead', hotel: 'Grand Horizon Delhi', status: 'Active', phone: '+91 98404 55667', avatar: 'AP' },
    { id: 'USR-06', name: 'Sunita Roy', email: 'sunita.r@horizon.com', role: 'Front Desk Associate', hotel: 'Horizon Suites Gurgaon', status: 'Active', phone: '+91 98505 66778', avatar: 'SR' },
    { id: 'USR-07', name: 'Chef Anand Varma', email: 'anand.chef@grandhorizon.com', role: 'Executive Chef (F&B)', hotel: 'Grand Horizon Mumbai', status: 'Active', phone: '+91 98606 77889', avatar: 'AV' },
    { id: 'USR-08', name: 'Ramesh Kumar', email: 'ramesh.hk@grandhorizon.com', role: 'Housekeeping Lead', hotel: 'Grand Horizon Delhi', status: 'Active', phone: '+91 98707 88990', avatar: 'RK' },
  ];

  const filteredUsers = staffUsers.filter(u => {
    if (roleFilter !== 'All' && u.role !== roleFilter) return false;
    if (searchTerm && !u.name.toLowerCase().includes(searchTerm.toLowerCase()) && !u.email.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const getRoleBadge = (role) => {
    if (role.includes('Super Admin')) return <span className="custom-badge badge-enterprise">{role}</span>;
    if (role.includes('Hotel Admin')) return <span className="custom-badge badge-pro">{role}</span>;
    if (role.includes('Area Manager')) return <span className="custom-badge badge-active">{role}</span>;
    return <span className="custom-badge badge-starter">{role}</span>;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Staff & Access Governance</h1>
          <p className="text-sm text-slate-500 mt-1">Manage user roles, permissions, and multi-hotel assignments.</p>
        </div>
        <button
          onClick={() => showToast('New staff member invite dispatched!')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
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
            className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none cursor-pointer"
          >
            <option value="All">All Roles</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Hotel Admin">Hotel Admin</option>
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
                      <div className="font-bold text-slate-900 text-sm">{u.name}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {u.email}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {u.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{getRoleBadge(u.role)}</td>
                  <td className="p-4 font-semibold text-slate-800">{u.hotel}</td>
                  <td className="p-4">
                    <span className="custom-badge badge-active">{u.status}</span>
                  </td>
                  <td className="p-4 text-right pr-5">
                    <button
                      onClick={() => showToast(`Password reset link sent to ${u.email}`)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors"
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
