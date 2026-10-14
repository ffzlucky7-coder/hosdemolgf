import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Building,
  Building2,
  Users,
  CreditCard,
  UserCheck,
  Receipt,
  BarChart3,
  Settings,
  LogOut,
  BedDouble,
  CalendarDays,
  Sparkles,
  ClipboardList,
  UtensilsCrossed,
  Boxes,
  Briefcase,
  Bot,
  MapPin,
  CheckCircle2,
  FileText,
  PartyPopper,
  Globe,
  MessageSquare,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Compass,
  Crown
} from 'lucide-react';

export default function Sidebar() {
  const {
    currentRole,
    setCurrentRole,
    currentView,
    setCurrentView,
    approvals,
    setIsCreateOrgModalOpen,
    setIsCheckInModalOpen,
    setIsAddHotelModalOpen
  } = useApp();

  const [isCollapsed, setIsCollapsed] = useState(false);

  // Grouped Navigation Architecture for Multi-Property SaaS
  const getNavSections = () => {
    switch (currentRole) {
      case 'super-admin':
        return [
          {
            title: 'SaaS Platform & Tenants',
            items: [
              { id: 'dashboard', label: 'Platform Overview', icon: LayoutDashboard },
              { id: 'org-details', label: 'Client Organizations', icon: Building2 },
              { id: 'create-org', label: 'Onboard New Tenant', icon: Building, action: () => setIsCreateOrgModalOpen(true) },
              { id: 'pricing', label: 'SaaS Subscriptions', icon: CreditCard },
            ]
          },
          {
            title: 'Governance & Infrastructure',
            items: [
              { id: 'users', label: 'Users & RBAC Matrix', icon: Users },
              { id: 'security-apis', label: 'Security & API Sandbox', icon: ShieldCheck },
              { id: 'reports', label: 'Platform Global Revenue', icon: BarChart3 },
              { id: 'settings', label: 'Global SaaS Config', icon: Settings },
            ]
          }
        ];

      case 'hotel-admin':
        return [
          {
            title: 'Multi-Hotel Executive',
            items: [
              { id: 'dashboard', label: 'Executive Cockpit', icon: LayoutDashboard },
              { id: 'hotels', label: 'Hotels Directory', icon: Building2 },
              { id: 'areas', label: 'Regional Clusters', icon: MapPin },
              { id: 'north-zone', label: 'Assigned Properties', icon: Building },
            ]
          },
          {
            title: 'Commercial & Approvals',
            items: [
              { id: 'channel-manager', label: 'OTA & STAAH Gateways', icon: Globe },
              { id: 'banquets', label: 'Banquets & Weddings', icon: PartyPopper },
              { id: 'approvals', label: 'Approval Center', icon: CheckCircle2, badge: approvals.length },
              { id: 'users', label: 'General Managers & Staff', icon: Users },
              { id: 'reports', label: 'Portfolio Analytics', icon: BarChart3 },
              { id: 'settings', label: 'Property Policies', icon: Settings },
            ]
          }
        ];

      case 'area-manager':
        return [
          {
            title: 'Cluster Operations',
            items: [
              { id: 'dashboard', label: 'Cluster Cockpit', icon: LayoutDashboard },
              { id: 'north-zone', label: 'Supervised Hotels', icon: Building2 },
              { id: 'approvals', label: 'PO & Refund Approvals', icon: CheckCircle2, badge: approvals.length },
              { id: 'channel-manager', label: 'OTA Rate Parity', icon: Globe },
              { id: 'users', label: 'Cluster Staff List', icon: Users },
              { id: 'reports', label: 'Cluster Performance', icon: BarChart3 },
            ]
          }
        ];

      case 'front-desk':
      default:
        return [
          {
            title: 'Front Office & Stays',
            items: [
              { id: 'dashboard', label: 'Front Desk 360°', icon: LayoutDashboard },
              { id: 'room-grid', label: 'Room Grid Matrix', icon: BedDouble },
              { id: 'tape-chart', label: 'Tape Chart Gantt', icon: CalendarDays },
              { id: 'check-in-view', label: 'Check-In Wizard', icon: Sparkles, action: () => setIsCheckInModalOpen(true) },
              { id: 'invoice', label: 'Guest Billing Folio', icon: FileText },
            ]
          },
          {
            title: 'Operations & Dining',
            items: [
              { id: 'notifications', label: 'WhatsApp Guest Hub', icon: MessageSquare },
              { id: 'housekeeping', label: 'Housekeeping Sync', icon: ClipboardList },
              { id: 'restaurant', label: 'Restaurant POS & KDS', icon: UtensilsCrossed },
              { id: 'banquets', label: 'Banquets & Events', icon: PartyPopper },
              { id: 'inventory', label: 'Inventory Control', icon: Boxes },
            ]
          },
          {
            title: 'Guest Care & Reports',
            items: [
              { id: 'ai-receptionist', label: 'AI Concierge Desk', icon: Bot },
              { id: 'reports', label: 'Daily Night Audit', icon: BarChart3 },
              { id: 'settings', label: 'Property Settings', icon: Settings },
            ]
          }
        ];
    }
  };

  const sections = getNavSections();

  const handleNavClick = (link) => {
    setCurrentView(link.id);
    if (link.action) {
      link.action();
    }
  };

  return (
    <aside
      className={`bg-white border-r border-slate-200/90 flex flex-col justify-between h-screen sticky top-0 shrink-0 z-20 transition-all duration-300 shadow-sm ${
        isCollapsed ? 'w-20' : 'w-68'
      }`}
    >
      {/* Brand Header */}
      <div>
        <div className="h-16 px-5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 shrink-0 border border-indigo-400/30">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>

            {!isCollapsed && (
              <div className="min-w-0">
                <div className="font-royal font-black text-base text-slate-900 tracking-wider flex items-center gap-1.5 leading-none">
                  <span>NEXUS</span>
                  <span className="font-sans font-extrabold text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 uppercase">OS</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-400 mt-0.5 tracking-wider uppercase font-display truncate">
                  Multi-Hotel Cloud PMS
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand Navigation' : 'Collapse Navigation'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Grouped Navigation Links */}
        <nav className="p-3 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)]">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-1">
              {!isCollapsed && (
                <div className="px-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider font-display">
                  {sec.title}
                </div>
              )}

              {sec.items.map((link) => {
                const Icon = link.icon;
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer group ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/20 font-display'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-sans'
                    }`}
                    title={isCollapsed ? link.label : undefined}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-amber-300' : 'text-slate-400 group-hover:text-indigo-600'
                        }`}
                      />
                      {!isCollapsed && <span className="truncate">{link.label}</span>}
                    </div>

                    {!isCollapsed && link.badge > 0 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-black rounded-full bg-amber-400 text-slate-950 shadow-2xs">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Profile & Demo Switch */}
      <div className="p-3 border-t border-slate-100 space-y-2">
        <button
          onClick={() => setCurrentRole('login')}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 text-slate-400 shrink-0" />
          {!isCollapsed && <span>Switch to Demo Login</span>}
        </button>
      </div>
    </aside>
  );
}
