import React from 'react';
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
  ShieldCheck
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

  // Define navigation groups tailored to active role
  const getNavLinks = () => {
    switch (currentRole) {
      case 'super-admin':
        return [
          { id: 'dashboard', label: 'Platform Dashboard', icon: LayoutDashboard },
          { id: 'org-details', label: 'Organizations (Tenants)', icon: Building2 },
          { id: 'create-org', label: 'Create Organization', icon: Building, action: () => setIsCreateOrgModalOpen(true) },
          { id: 'pricing', label: 'SaaS Subscriptions', icon: CreditCard },
          { id: 'users', label: 'Users & RBAC', icon: Users },
          { id: 'security-apis', label: 'Security & API Logs', icon: ShieldCheck },
          { id: 'reports', label: 'Platform Revenue', icon: BarChart3 },
          { id: 'settings', label: 'Global Settings', icon: Settings },
        ];

      case 'hotel-admin':
        return [
          { id: 'dashboard', label: 'Multi-Hotel Dashboard', icon: LayoutDashboard },
          { id: 'hotels', label: 'Hotels Directory', icon: Building2 },
          { id: 'areas', label: 'Areas & Clusters', icon: MapPin },
          { id: 'north-zone', label: 'North Zone Properties', icon: Building },
          { id: 'channel-manager', label: 'OTA & STAAH Sync', icon: Globe },
          { id: 'banquets', label: 'Banquets & Events', icon: PartyPopper },
          { id: 'approvals', label: 'Approval Center', icon: CheckCircle2, badge: approvals.length },
          { id: 'users', label: 'Staff & Managers', icon: Users },
          { id: 'reports', label: 'Executive Reports', icon: BarChart3 },
          { id: 'settings', label: 'Property Settings', icon: Settings },
        ];

      case 'area-manager':
        return [
          { id: 'dashboard', label: 'Cluster Dashboard', icon: LayoutDashboard },
          { id: 'north-zone', label: 'My Supervised Hotels', icon: Building2 },
          { id: 'approvals', label: 'Approval Center', icon: CheckCircle2, badge: approvals.length },
          { id: 'channel-manager', label: 'OTA Rate Parity', icon: Globe },
          { id: 'users', label: 'Area Staff Directory', icon: Users },
          { id: 'reports', label: 'Cluster Performance', icon: BarChart3 },
        ];

      case 'front-desk':
        return [
          { id: 'dashboard', label: 'Operations Dashboard', icon: LayoutDashboard },
          { id: 'room-grid', label: 'Room Grid Floor Matrix', icon: BedDouble },
          { id: 'tape-chart', label: 'Tape Chart Gantt', icon: CalendarDays },
          { id: 'check-in-view', label: 'Check-In Wizard', icon: Sparkles, action: () => setIsCheckInModalOpen(true) },
          { id: 'invoice', label: 'Guest Billing Folio', icon: FileText },
          { id: 'notifications', label: 'WhatsApp Guest Desk', icon: MessageSquare },
          { id: 'housekeeping', label: 'Housekeeping Sync', icon: ClipboardList },
          { id: 'restaurant', label: 'Restaurant POS', icon: UtensilsCrossed },
          { id: 'banquets', label: 'Banquets & Events', icon: PartyPopper },
          { id: 'inventory', label: 'Inventory Control', icon: Boxes },
          { id: 'ai-receptionist', label: 'AI Concierge', icon: Bot },
          { id: 'reports', label: 'Daily Analytics', icon: BarChart3 },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];

      case 'banquets':
        return [
          { id: 'banquets', label: 'Banquet Reservations', icon: PartyPopper },
          { id: 'sales-crm', label: 'Corporate & Weddings', icon: Briefcase },
          { id: 'restaurant', label: 'F&B Catering', icon: UtensilsCrossed },
          { id: 'reports', label: 'Event Revenue', icon: BarChart3 },
        ];

      case 'channel-manager':
        return [
          { id: 'channel-manager', label: 'OTA & STAAH Gateways', icon: Globe },
          { id: 'tape-chart', label: 'Reservation Timeline', icon: CalendarDays },
          { id: 'reports', label: 'Channel Reports', icon: BarChart3 },
        ];

      case 'notifications':
        return [
          { id: 'notifications', label: 'WhatsApp Notification Hub', icon: MessageSquare },
          { id: 'ai-receptionist', label: 'AI Virtual Desk', icon: Bot },
          { id: 'settings', label: 'Trigger Policies', icon: Settings },
        ];

      case 'security-apis':
        return [
          { id: 'security-apis', label: 'Security & API Gateway', icon: ShieldCheck },
          { id: 'users', label: 'RBAC Staff Access', icon: Users },
          { id: 'settings', label: 'Security Settings', icon: Settings },
        ];

      case 'housekeeping':
        return [
          { id: 'housekeeping', label: 'Kanban Turnover Board', icon: ClipboardList },
          { id: 'room-grid', label: 'Room Floor Matrix', icon: BedDouble },
          { id: 'inventory', label: 'Linen & Supplies', icon: Boxes },
        ];

      case 'restaurant':
        return [
          { id: 'restaurant', label: 'Point of Sale (POS)', icon: UtensilsCrossed },
          { id: 'inventory', label: 'Kitchen Stock', icon: Boxes },
          { id: 'reports', label: 'F&B Sales Report', icon: BarChart3 },
        ];

      case 'inventory':
        return [
          { id: 'inventory', label: 'Inventory & Stock SKUs', icon: Boxes },
          { id: 'approvals', label: 'Purchase Approvals', icon: CheckCircle2, badge: approvals.length },
          { id: 'reports', label: 'Stock Valuation', icon: BarChart3 },
        ];

      case 'sales-crm':
        return [
          { id: 'sales-crm', label: 'Deals Pipeline', icon: Briefcase },
          { id: 'banquets', label: 'Banquet Venues', icon: PartyPopper },
          { id: 'reports', label: 'Sales Reports', icon: BarChart3 },
        ];

      case 'ai-receptionist':
        return [
          { id: 'ai-receptionist', label: 'Guest Messages', icon: Bot },
          { id: 'notifications', label: 'WhatsApp Alerts', icon: MessageSquare },
          { id: 'dashboard', label: 'Operations Sync', icon: LayoutDashboard },
        ];

      case 'reports':
        return [
          { id: 'reports', label: 'Analytics & RevPAR', icon: BarChart3 },
          { id: 'dashboard', label: 'Operations View', icon: LayoutDashboard },
        ];

      case 'settings':
        return [
          { id: 'settings', label: 'Property Settings', icon: Settings },
          { id: 'pricing', label: 'Billing & Plans', icon: CreditCard },
          { id: 'users', label: 'User Roles (RBAC)', icon: Users },
          { id: 'security-apis', label: 'APIs & Webhooks', icon: ShieldCheck },
        ];

      default:
        return [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        ];
    }
  };

  const navLinks = getNavLinks();

  const handleNavClick = (link) => {
    setCurrentView(link.id);
    if (link.action) {
      link.action();
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-screen sticky top-0 shrink-0 z-20">
      {/* Brand Logo Header */}
      <div>
        <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white shadow-sm">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-lg text-slate-900 tracking-tight leading-none">PMS</div>
            <div className="text-[10px] font-medium text-slate-400 mt-0.5 tracking-wider uppercase">Hospitality OS</div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-140px)]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 font-semibold shadow-xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span className="truncate">{link.label}</span>
                </div>
                {link.badge > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-100 text-amber-800">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout / Login Demo trigger */}
      <div className="p-4 border-t border-slate-100">
        <button
          onClick={() => setCurrentRole('login')}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Demo Login / Logout</span>
        </button>
      </div>
    </aside>
  );
}
