import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

// Common Navigation & Topbars
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import RoleSwitcher from './components/common/RoleSwitcher';
import QuickActionHero from './components/common/QuickActionHero';
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
  const { currentRole, currentView } = useApp();

  // If on login demo screen, render full screen login
  if (currentRole === 'login' || currentView === 'login') {
    return (
      <div className="flex flex-col min-h-screen">
        <RoleSwitcher />
        <LoginScreen />
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased text-slate-800">
      {/* 1. Universal Multi-Role Switcher Header */}
      <RoleSwitcher />

      {/* 2. Main PMS Layout */}
      <div className="flex flex-1 relative">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <Header />

          {/* Quick Operational Command Hero Deck */}
          <QuickActionHero />

          {/* Main Dynamic View Content with Smooth Fade Animation */}
          <main className="flex-1 pb-16 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView + currentRole}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* 3. Global Modals & Drawers */}
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
