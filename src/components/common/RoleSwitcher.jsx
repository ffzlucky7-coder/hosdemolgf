import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Crown,
  Building2,
  MapPin,
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
  Lock
} from 'lucide-react';

export default function RoleSwitcher() {
  const { currentRole, setCurrentRole, setCurrentView } = useApp();

  const personas = [
    { id: 'front-desk', label: '🛎️ Front Desk', view: 'dashboard' },
    { id: 'super-admin', label: '👑 Super Admin', view: 'dashboard' },
    { id: 'hotel-admin', label: '🏢 Hotel Admin', view: 'dashboard' },
    { id: 'area-manager', label: '🗺️ Area Manager', view: 'dashboard' },
    { id: 'housekeeping', label: '🧹 Housekeeping', view: 'housekeeping' },
    { id: 'restaurant', label: '🍽️ F&B POS', view: 'restaurant' },
    { id: 'banquets', label: '🏰 Banquets & Events', view: 'banquets' },
    { id: 'inventory', label: '📦 Inventory', view: 'inventory' },
    { id: 'channel-manager', label: '🌐 OTA & STAAH', view: 'channel-manager' },
    { id: 'sales-crm', label: '💼 Sales CRM', view: 'sales-crm' },
    { id: 'ai-receptionist', label: '🤖 AI Concierge', view: 'ai-receptionist' },
    { id: 'notifications', label: '💬 WhatsApp Engine', view: 'notifications' },
    { id: 'reports', label: '📊 Analytics', view: 'reports' },
    { id: 'security-apis', label: '🛡️ Security & APIs', view: 'security-apis' },
    { id: 'settings', label: '⚙️ Settings', view: 'settings' },
    { id: 'login', label: '🔐 Login Screen', view: 'login' },
  ];

  return (
    <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between shadow-md z-40 text-xs select-none sticky top-0">
      <div className="flex items-center gap-2 font-semibold tracking-wide uppercase text-[11px] text-slate-300 shrink-0 mr-3">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="hidden sm:inline">20-Module SaaS Demo:</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full scrollbar-thin">
        {personas.map(p => {
          const isActive = currentRole === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                setCurrentRole(p.id);
                setCurrentView(p.view);
              }}
              className={`px-3 py-1 rounded-full font-medium transition-all text-xs shrink-0 whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/50'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
