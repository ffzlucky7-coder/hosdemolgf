import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Crown,
  Hotel,
  MapPin,
  BedDouble
} from 'lucide-react';

export default function LoginScreen() {
  const { setCurrentRole, setCurrentView, showToast } = useApp();
  const [email, setEmail] = useState('reception@grandhorizon.com');
  const [password, setPassword] = useState('••••••••••••');

  const handleLogin = (role, defaultEmail) => {
    setEmail(defaultEmail);
    setCurrentRole(role);
    setCurrentView('dashboard');
    showToast(`Logged in successfully as ${role.toUpperCase().replace('-', ' ')}!`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative z-10 space-y-6 animate-in zoom-in-95 duration-200">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white mx-auto flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">PMS Hospitality OS</h1>
          <p className="text-xs text-slate-500 font-medium">Enterprise Hotel Operations & SaaS Management</p>
        </div>

        {/* Form (Page 19) */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin('front-desk', email);
          }}
          className="space-y-4 text-xs"
        >
          <div>
            <label className="block text-slate-600 font-semibold mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none focus:ring-2 focus:ring-indigo-500/20"
                placeholder="name@hotel.com"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-slate-600 font-semibold">Password</label>
              <a href="#" className="text-indigo-600 font-bold hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none focus:ring-2 focus:ring-indigo-500/20"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
            <span className="text-slate-600 font-medium">Keep me signed in for 30 days</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>Sign In to PMS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo 1-Click Role Logins */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
            Or Instant Demo 1-Click Sign-In
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleLogin('front-desk', 'frontdesk@grandhorizon.com')}
              className="p-2.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-xl text-indigo-700 font-bold text-left flex items-center gap-2 transition-colors"
            >
              <BedDouble className="w-4 h-4 text-indigo-600" />
              <span>Front Desk</span>
            </button>

            <button
              onClick={() => handleLogin('hotel-admin', 'hoteladmin@grandhorizon.com')}
              className="p-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl text-blue-700 font-bold text-left flex items-center gap-2 transition-colors"
            >
              <Hotel className="w-4 h-4 text-blue-600" />
              <span>Hotel Admin</span>
            </button>

            <button
              onClick={() => handleLogin('area-manager', 'areamanager@grandhorizon.com')}
              className="p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 rounded-xl text-emerald-700 font-bold text-left flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Area Manager</span>
            </button>

            <button
              onClick={() => handleLogin('super-admin', 'superadmin@hos-saas.com')}
              className="p-2.5 bg-purple-50 hover:bg-purple-100 border border-purple-100 rounded-xl text-purple-700 font-bold text-left flex items-center gap-2 transition-colors"
            >
              <Crown className="w-4 h-4 text-purple-600" />
              <span>Super Admin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
