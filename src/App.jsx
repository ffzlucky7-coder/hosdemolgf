import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

// Common Navigation & Topbars
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import RoleSwitcher from './components/common/RoleSwitcher';
import QuickCommandPalette from './components/common/QuickCommandPalette';
import UsersListView from './components/common/UsersListView';

// Front Desk & Operations (Modules 4, 5, 6, 7 & 12)
import FrontDeskDashboard from './components/front-desk/FrontDeskDashboard';
import RoomGridMatrix from './components/front-desk/RoomGridMatrix';
import TapeChartGantt from './components/front-desk/TapeChartGantt';
import GuestQuickViewDrawer from './components/front-desk/GuestQuickViewDrawer';
import CheckInWizardModal from './components/front-desk/CheckInWizardModal';
import NewReservationModal from './components/front-desk/NewReservationModal';
import RoomDetailModal from './components/front-desk/RoomDetailModal';
import GuestInvoiceFolio from './components/front-desk/GuestInvoiceFolio';

// Super Admin & Hotel Admin (Modules 1, 2, 3 & 19)
import SuperAdminDashboard from './components/super-admin/SuperAdminDashboard';
import OrgDetailsView from './components/super-admin/OrgDetailsView';
import CreateOrgModal from './components/super-admin/CreateOrgModal';
import PricingPlansView from './components/super-admin/PricingPlansView';
import HotelAdminDashboard from './components/hotel-admin/HotelAdminDashboard';
import HotelsListView from './components/hotel-admin/HotelsListView';
import AddHotelModal from './components/hotel-admin/AddHotelModal';
import AreaListView from './components/hotel-admin/AreaListView';
import AreaAssignedHotels from './components/hotel-admin/AreaAssignedHotels';
import AreaManagerDashboard from './components/area-manager/AreaManagerDashboard';
import ApprovalCenter from './components/area-manager/ApprovalCenter';

// Operations & Specialized Modules (Modules 8, 9, 10, 11, 14, 15, 16, 17, 18)
import HousekeepingKanban from './components/housekeeping/HousekeepingKanban';
import RestaurantPOS from './components/pos/RestaurantPOS';
import BanquetEventsView from './components/banquets/BanquetEventsView';
import InventoryDashboard from './components/inventory/InventoryDashboard';
import ChannelManagerView from './components/channel-manager/ChannelManagerView';
import SalesCrmPipeline from './components/crm/SalesCrmPipeline';
import AiReceptionistChat from './components/ai-receptionist/AiReceptionistChat';
import NotificationEngineView from './components/notifications/NotificationEngineView';
import SystemHealthAuditView from './components/system-health/SystemHealthAuditView';

// Analytics, Settings & Auth (Modules 13, 19, 20)
import AnalyticsReports from './components/reports/AnalyticsReports';
import SystemSettings from './components/settings/SystemSettings';
import LoginScreen from './components/auth/LoginScreen';

function MainAppContent() {
  const { currentRole, currentView, notificationToast } = useApp();

  // If on login demo screen, render full screen login with RoleSwitcher dock
  if (currentRole === 'login' || currentView === 'login') {
    return (
      <div className="flex flex-col min-h-screen relative">
        <LoginScreen />
        <RoleSwitcher />
      </div>
    );
  }

  // Universal Dynamic View Resolver for all 20 PDF Modules
  const renderView = () => {
    switch (currentView) {
      // 1. Dashboards
      case 'dashboard':
        if (currentRole === 'super-admin') return <SuperAdminDashboard />;
        if (currentRole === 'hotel-admin') return <HotelAdminDashboard />;
        if (currentRole === 'area-manager') return <AreaManagerDashboard />;
        return <FrontDeskDashboard />;

      // 2. PMS & Front Desk Suite (Modules 4, 5, 6)
      case 'room-grid':
        return <RoomGridMatrix />;
      case 'tape-chart':
        return <TapeChartGantt />;
      case 'check-in-view':
        return <FrontDeskDashboard />;
      case 'invoice':
        return <GuestInvoiceFolio />;

      // 3. Super Admin & Org Management (Module 1, 19)
      case 'org-details':
      case 'create-org':
        return <OrgDetailsView />;
      case 'pricing':
        return <PricingPlansView />;

      // 4. Multi-Hotel & Area Management (Module 2)
      case 'hotels':
      case 'add-hotel':
        return <HotelsListView />;
      case 'areas':
      case 'create-area':
        return <AreaListView />;
      case 'north-zone':
        return <AreaAssignedHotels />;
      case 'approvals':
        return <ApprovalCenter />;

      // 5. Operations & Specialized Modules (Modules 8, 9, 10, 11, 14, 15, 16, 17, 18)
      case 'housekeeping':
        return <HousekeepingKanban />;
      case 'restaurant':
        return <RestaurantPOS />;
      case 'banquets':
        return <BanquetEventsView />;
      case 'inventory':
        return <InventoryDashboard />;
      case 'channel-manager':
        return <ChannelManagerView />;
      case 'sales-crm':
        return <SalesCrmPipeline />;
      case 'ai-receptionist':
        return <AiReceptionistChat />;
      case 'notifications':
        return <NotificationEngineView />;
      case 'security-apis':
        return <SystemHealthAuditView />;

      // 6. Access, Reports & Settings (Modules 3, 13, 20)
      case 'users':
        return <UsersListView />;
      case 'reports':
        return <AnalyticsReports />;
      case 'settings':
        return <SystemSettings />;

      default:
        // Fallback checks by currentRole
        if (currentRole === 'banquets') return <BanquetEventsView />;
        if (currentRole === 'channel-manager') return <ChannelManagerView />;
        if (currentRole === 'notifications') return <NotificationEngineView />;
        if (currentRole === 'security-apis') return <SystemHealthAuditView />;
        if (currentRole === 'housekeeping') return <HousekeepingKanban />;
        if (currentRole === 'restaurant') return <RestaurantPOS />;
        if (currentRole === 'inventory') return <InventoryDashboard />;
        if (currentRole === 'sales-crm') return <SalesCrmPipeline />;
        if (currentRole === 'ai-receptionist') return <AiReceptionistChat />;
        if (currentRole === 'reports') return <AnalyticsReports />;
        if (currentRole === 'settings') return <SystemSettings />;
        return <FrontDeskDashboard />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-slate-50 antialiased text-slate-800">
      {/* Global Animated Action Feedback Toast */}
      <AnimatePresence>
        {notificationToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-2xl shadow-2xl border text-xs font-bold flex items-center gap-3 backdrop-blur-xl ${
              notificationToast.type === 'warning'
                ? 'bg-amber-500 text-white border-amber-600 shadow-amber-500/20'
                : 'bg-slate-900 text-white border-slate-700 shadow-slate-900/30'
            }`}
          >
            <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black">
              ✓
            </div>
            <span>{notificationToast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Left Navigation Sidebar */}
      <Sidebar />

      {/* Main SaaS Content Workspace */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        <Header />

        {/* Dynamic View Scrollable Body */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-5 sm:p-6 lg:p-8 min-w-0">
          <div className="max-w-7xl mx-auto w-full pb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView + currentRole}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Floating Demo Persona Presentation Dock */}
      <RoleSwitcher />

      {/* Global Modals & Drawers */}
      <CheckInWizardModal />
      <NewReservationModal />
      <RoomDetailModal />
      <GuestQuickViewDrawer />
      <QuickCommandPalette />
      <CreateOrgModal />
      <AddHotelModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
