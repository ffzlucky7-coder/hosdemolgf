import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  BellRing,
  Crown,
  Building2,
  MapPin,
  Sparkles,
  BedDouble,
  ClipboardList,
  UtensilsCrossed,
  Boxes,
  Briefcase,
  BarChart3,
  Bot,
  PartyPopper,
  Globe,
  MessageSquare,
  ShieldCheck,
  Settings,
  Lock,
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function RoleSwitcher() {
  const { currentRole, setCurrentRole, setCurrentView } = useApp();

  const personas = [
    { id: 'front-desk', label: 'Front Desk 360°', icon: BellRing, view: 'dashboard' },
    { id: 'super-admin', label: 'SaaS Super Admin', icon: Crown, view: 'dashboard' },
    { id: 'hotel-admin', label: 'Resort General Manager', icon: Building2, view: 'dashboard' },
    { id: 'area-manager', label: 'Cluster Area Head', icon: MapPin, view: 'dashboard' },
    { id: 'housekeeping', label: 'Housekeeping Lead', icon: ClipboardList, view: 'housekeeping' },
    { id: 'restaurant', label: 'Restaurant POS & KDS', icon: UtensilsCrossed, view: 'restaurant' },
    { id: 'banquets', label: 'Banquets & Weddings', icon: PartyPopper, view: 'banquets' },
    { id: 'inventory', label: 'Inventory Control', icon: Boxes, view: 'inventory' },
    { id: 'channel-manager', label: 'OTA & STAAH Engine', icon: Globe, view: 'channel-manager' },
    { id: 'sales-crm', label: 'Corporate Sales CRM', icon: Briefcase, view: 'sales-crm' },
    { id: 'ai-receptionist', label: 'AI Virtual Concierge', icon: Bot, view: 'ai-receptionist' },
    { id: 'notifications', label: 'WhatsApp Dispatch', icon: MessageSquare, view: 'notifications' },
    { id: 'reports', label: 'Financial Analytics', icon: BarChart3, view: 'reports' },
    { id: 'security-apis', label: 'Security & API Sandbox', icon: ShieldCheck, view: 'security-apis' },
    { id: 'settings', label: 'Property Policies', icon: Settings, view: 'settings' },
    { id: 'login', label: 'Login Experience', icon: Lock, view: 'login' },
  ];

  return (
    <div className="bg-slate-950 border-b border-slate-800 text-white px-4 py-2.5 flex items-center justify-between shadow-xl z-40 text-xs select-none sticky top-0 backdrop-blur-md">
      {/* SaaS Product Badge */}
      <div className="flex items-center gap-2.5 font-display font-bold tracking-wider text-[11px] text-slate-300 shrink-0 mr-4">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-royal font-bold text-amber-300 tracking-wider">NEXUS HOTELOS</span>
          <span className="text-[9px] font-mono text-slate-400 font-normal">v2.4 Multi-Tenant</span>
        </div>
        <span className="hidden xl:inline text-slate-400 font-normal text-xs">• Select Operational Persona:</span>
      </div>

      {/* 16 Interactive Persona Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-0.5 max-w-full scrollbar-none">
        {personas.map(p => {
          const Icon = p.icon;
          const isActive = currentRole === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                setCurrentRole(p.id);
                setCurrentView(p.view);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all text-xs shrink-0 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-400 font-display'
                  : 'bg-slate-900/90 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/80 font-sans'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>{p.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-0.5 animate-pulse"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
