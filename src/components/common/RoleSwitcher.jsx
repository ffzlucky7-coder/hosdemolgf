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
  Layers
} from 'lucide-react';

export default function RoleSwitcher() {
  const { currentRole, setCurrentRole, setCurrentView } = useApp();

  const personas = [
    { id: 'front-desk', label: 'Front Desk', icon: BellRing, view: 'dashboard' },
    { id: 'super-admin', label: 'Super Admin', icon: Crown, view: 'dashboard' },
    { id: 'hotel-admin', label: 'Resort Admin', icon: Building2, view: 'dashboard' },
    { id: 'area-manager', label: 'Cluster Head', icon: MapPin, view: 'dashboard' },
    { id: 'housekeeping', label: 'Housekeeping', icon: ClipboardList, view: 'housekeeping' },
    { id: 'restaurant', label: 'F&B POS', icon: UtensilsCrossed, view: 'restaurant' },
    { id: 'banquets', label: 'Banquets & Weddings', icon: PartyPopper, view: 'banquets' },
    { id: 'inventory', label: 'Inventory', icon: Boxes, view: 'inventory' },
    { id: 'channel-manager', label: 'OTA & STAAH', icon: Globe, view: 'channel-manager' },
    { id: 'sales-crm', label: 'Sales CRM', icon: Briefcase, view: 'sales-crm' },
    { id: 'ai-receptionist', label: 'AI Concierge', icon: Bot, view: 'ai-receptionist' },
    { id: 'notifications', label: 'WhatsApp Desk', icon: MessageSquare, view: 'notifications' },
    { id: 'reports', label: 'Analytics', icon: BarChart3, view: 'reports' },
    { id: 'security-apis', label: 'Security & APIs', icon: ShieldCheck, view: 'security-apis' },
    { id: 'settings', label: 'Settings', icon: Settings, view: 'settings' },
    { id: 'login', label: 'Demo Login', icon: Lock, view: 'login' },
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white px-4 py-2 flex items-center justify-between shadow-md z-40 text-xs select-none sticky top-0">
      <div className="flex items-center gap-2 font-display font-bold tracking-wider uppercase text-[10px] text-slate-300 shrink-0 mr-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="hidden md:inline">20-Module System Persona Switcher:</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full scrollbar-thin">
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
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all text-xs shrink-0 whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600 text-white font-bold shadow-md ring-1 ring-indigo-400'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
