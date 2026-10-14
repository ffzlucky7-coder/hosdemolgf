import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  X,
  Zap,
  Grid,
  Calendar,
  FileText
} from 'lucide-react';

export default function RoleSwitcher() {
  const { currentRole, setCurrentRole, currentView, setCurrentView, showToast } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const personas = [
    // 1. Executive Leadership
    { id: 'super-admin', label: 'SaaS Super Admin', category: 'Executive', desc: '128 Client ORGs, ARR, Global SaaS Subscriptions', icon: Crown, view: 'dashboard' },
    { id: 'hotel-admin', label: 'Resort General Manager', category: 'Executive', desc: 'Overall P&L, Department Audits, Live Occupancy', icon: Building2, view: 'dashboard' },
    { id: 'area-manager', label: 'Cluster Area Head', category: 'Executive', desc: 'Multi-Property Oversight, Regional PO Approvals', icon: MapPin, view: 'dashboard' },

    // 2. Front Office & Stays
    { id: 'front-desk', label: 'Front Desk 360°', category: 'Front Office', desc: 'Express Check-In Wizard, Arrivals, Room Keycards', icon: BellRing, view: 'dashboard' },
    { id: 'room-grid', label: 'Room Grid Matrix', category: 'Front Office', desc: 'Visual Floor Matrix, Clean/Dirty Turnover Status', icon: Grid, view: 'room-grid' },
    { id: 'tape-chart', label: '14-Day Tape Chart', category: 'Front Office', desc: 'Interactive Gantt Calendar, Multi-Day Bookings', icon: Calendar, view: 'tape-chart' },
    { id: 'invoice', label: 'Guest Billing & Folio', category: 'Front Office', desc: 'Itemized Room Charges, GST Invoices & Checkout', icon: FileText, view: 'invoice' },

    // 3. F&B & Banquets
    { id: 'restaurant', label: 'Restaurant POS & KDS', category: 'F&B & Outlets', desc: 'Table Management, Multi-Course KOTs, Folio Billing', icon: UtensilsCrossed, view: 'restaurant' },
    { id: 'banquets', label: 'Banquets & Weddings', category: 'F&B & Outlets', desc: 'Interactive RFP Quote Builder & Event Contracts', icon: PartyPopper, view: 'banquets' },
    { id: 'inventory', label: 'Materials & Inventory', category: 'F&B & Outlets', desc: 'SKU Reorder Points, Linen Stock & Kitchen Supplies', icon: Boxes, view: 'inventory' },

    // 4. Operations & Intelligence
    { id: 'channel-manager', label: 'OTA & STAAH Channel', category: 'Operations & AI', desc: '2-Way Live Sync, Rate Parity with OTAs', icon: Globe, view: 'channel-manager' },
    { id: 'housekeeping', label: 'Housekeeping Kanban', category: 'Operations & AI', desc: 'Turnover Stages, Room Inspection & Linen Changes', icon: ClipboardList, view: 'housekeeping' },
    { id: 'sales-crm', label: 'Corporate Sales CRM', category: 'Operations & AI', desc: 'MICE Leads, Corporate Summits & Deal Stages', icon: Briefcase, view: 'sales-crm' },
    { id: 'ai-receptionist', label: 'AI Virtual Concierge', category: 'Operations & AI', desc: '24/7 Guest Chatbot, Wi-Fi & Jacuzzi Requests', icon: Bot, view: 'ai-receptionist' },
    { id: 'notifications', label: 'WhatsApp Dispatch Hub', category: 'Operations & AI', desc: 'Automated Guest Confirmations, Keycards & Alerts', icon: MessageSquare, view: 'notifications' },
    { id: 'reports', label: 'Financial Analytics', category: 'Operations & AI', desc: 'RevPAR, ADR, Occupancy Trends & Tax Audits', icon: BarChart3, view: 'reports' },
    { id: 'security-apis', label: 'Security & API Sandbox', category: 'Operations & AI', desc: 'REST Webhooks, JWT Auth & System Health', icon: ShieldCheck, view: 'security-apis' },
    { id: 'settings', label: 'Property Policies', category: 'Operations & AI', desc: 'GST Rates, Auto-Assignment & Night Audit Rules', icon: Settings, view: 'settings' },
    { id: 'login', label: 'Login Screen Demo', category: 'Operations & AI', desc: 'Multi-Tenant Login Experience with 1-Click Access', icon: Lock, view: 'login' },
  ];

  const currentPersonaObj = personas.find(p => p.id === currentRole) || personas[3];
  const currentIndex = personas.findIndex(p => p.id === currentRole);

  const selectPersona = (p) => {
    setCurrentRole(p.id);
    setCurrentView(p.view);
    setIsOpen(false);
    showToast(`Switched Demo Persona to "${p.label}"!`);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % personas.length;
    selectPersona(personas[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + personas.length) % personas.length;
    selectPersona(personas[prevIdx]);
  };

  const categories = ['Executive', 'Front Office', 'F&B & Outlets', 'Operations & AI'];

  return (
    <>
      {/* Sleek Floating Demo Presentation Dock (Bottom Right) */}
      <div className="fixed bottom-5 right-6 z-40 transition-all">
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-900/95 hover:bg-slate-800 text-white border border-slate-700/80 rounded-full shadow-2xl backdrop-blur-xl text-xs font-bold cursor-pointer transition-all hover:scale-105"
          >
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Demo Controller ({currentPersonaObj.label})</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/95 border border-slate-800 text-white rounded-full shadow-2xl backdrop-blur-2xl text-xs">
            {/* Previous Role Button */}
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
              title="Previous Demo Persona"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Main Interactive Capsule Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-md transition-all cursor-pointer group"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-200 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold text-xs tracking-tight">Demo Role:</span>
              <span className="text-white font-extrabold">{currentPersonaObj.label}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-indigo-100 font-mono">16 Roles ▾</span>
            </button>

            {/* Next Role Button */}
            <button
              onClick={handleNext}
              className="p-2 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
              title="Next Demo Persona"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Minimize Pill */}
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-full transition-colors cursor-pointer ml-1"
              title="Minimize Controller"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Categorized Persona Selector Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black shadow-md">
                  <Zap className="w-5 h-5 text-indigo-200" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                    <span>Nexus HotelOS — Interactive Persona Matrix</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">Select any operational role below to simulate the exact permissions, views, and dashboards.</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categorized Personas Grid */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
              {categories.map(cat => {
                const catPersonas = personas.filter(p => p.category === cat);
                return (
                  <div key={cat} className="space-y-3">
                    <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-display flex items-center gap-2">
                      <span>{cat}</span>
                      <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {catPersonas.map(p => {
                        const Icon = p.icon;
                        const isActive = currentRole === p.id;
                        return (
                          <button
                            key={p.id}
                            onClick={() => selectPersona(p)}
                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                              isActive
                                ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-500/20 shadow-sm'
                                : 'bg-slate-50/70 hover:bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                                isActive ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600 group-hover:text-indigo-600'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>

                              {isActive && (
                                <span className="custom-badge badge-active flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                  Active
                                </span>
                              )}
                            </div>

                            <div>
                              <div className={`font-display font-bold text-xs ${isActive ? 'text-indigo-950 font-extrabold' : 'text-slate-900 group-hover:text-indigo-700'}`}>
                                {p.label}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-1 font-medium leading-relaxed">
                                {p.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
