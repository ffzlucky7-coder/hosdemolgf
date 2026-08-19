import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_HOTELS,
  INITIAL_AREAS,
  INITIAL_ORGANIZATIONS,
  INITIAL_ROOMS,
  INITIAL_TODAYS_ARRIVALS,
  INITIAL_TODAYS_DEPARTURES,
  INITIAL_HOUSEKEEPING_TASKS,
  INITIAL_POS_MENU,
  INITIAL_INVENTORY,
  INITIAL_APPROVALS,
  INITIAL_CRM_DEALS,
  INITIAL_AI_CHAT_THREADS,
  INITIAL_ROOM_204_FOLIO,
  TAPE_CHART_BOOKINGS
} from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation & Role State
  const [currentRole, setCurrentRole] = useState('front-desk');
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedHotelId, setSelectedHotelId] = useState('HOTEL-001');
  
  // General System State (Module 20)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('INR'); // INR, USD, EUR, AED
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // en, hi, fr, de
  const [seasonalMultiplier, setSeasonalMultiplier] = useState(1.0); // 1.0 = Regular, 1.35 = Royal Peak Season

  // Core Data State
  const [hotels, setHotels] = useState(INITIAL_HOTELS);
  const [areas, setAreas] = useState(INITIAL_AREAS);
  const [organizations, setOrganizations] = useState(INITIAL_ORGANIZATIONS);
  const [rooms, setRooms] = useState(INITIAL_ROOMS);
  const [arrivals, setArrivals] = useState(INITIAL_TODAYS_ARRIVALS);
  const [departures, setDepartures] = useState(INITIAL_TODAYS_DEPARTURES);
  const [housekeepingTasks, setHousekeepingTasks] = useState(INITIAL_HOUSEKEEPING_TASKS);
  const [posMenu, setPosMenu] = useState(INITIAL_POS_MENU);
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [approvals, setApprovals] = useState(INITIAL_APPROVALS);
  const [crmDeals, setCrmDeals] = useState(INITIAL_CRM_DEALS);
  const [chatThreads, setChatThreads] = useState(INITIAL_AI_CHAT_THREADS);
  const [activeChatId, setActiveChatId] = useState('CHAT-1');
  const [tapeChartBookings, setTapeChartBookings] = useState(TAPE_CHART_BOOKINGS);

  // Lost & Found Items (Module 8)
  const [lostAndFoundItems, setLostAndFoundItems] = useState([
    { id: 'LF-101', item: 'Ray-Ban Sunglasses & Leather Case', room: 'Treehouse 101', foundDate: 'May 16, 2025', foundBy: 'Ramesh Kumar', status: 'Stored in Locker', guestName: 'Amit Patel' },
    { id: 'LF-102', item: 'Apple Watch Series 9 (Midnight)', room: 'Pool Villa 106', foundDate: 'May 17, 2025', foundBy: 'Sunita Devi', status: 'Claimed by Guest', guestName: 'Karan Malhotra' },
    { id: 'LF-103', item: 'Silk Embroidered Dupatta / Shawl', room: 'Aravali Lawn', foundDate: 'May 17, 2025', foundBy: 'Mohan Lal', status: 'Stored in Locker', guestName: 'Singhania Wedding Guest' },
  ]);

  // Maintenance Tickets (Module 8 & 17)
  const [maintenanceTickets, setMaintenanceTickets] = useState([
    { id: 'MNT-401', room: 'Treehouse 101', issue: 'Balcony Jacuzzi Temperature Sensor Check', priority: 'High', technician: 'Mukesh Sharma (HVAC/Plumbing)', status: 'In Progress', reportedAt: '10:15 AM' },
    { id: 'MNT-402', room: 'Villa 106', issue: 'Plunge Pool Filter Backwash & Lighting Test', priority: 'Medium', technician: 'Gopal Lal (Pool Specialist)', status: 'Resolved', reportedAt: '08:30 AM' },
    { id: 'MNT-403', room: 'Swiss Tent 103', issue: 'Heritage Wood Polish & Sit-out Deck Wash', priority: 'Normal', technician: 'Suresh Carpenter', status: 'Pending', reportedAt: '12:45 PM' },
  ]);

  // Live Restaurant Tables Layout (Module 9)
  const [restaurantTables, setRestaurantTables] = useState([
    { id: 'T-01', name: 'Poolside Cabana 1', section: 'Poolside', seats: 4, status: 'Occupied', guest: 'Dr. Vivek Mehra (Villa 114)', orderValue: 2450 },
    { id: 'T-02', name: 'Poolside Cabana 2', section: 'Poolside', seats: 4, status: 'Available', guest: null, orderValue: 0 },
    { id: 'T-03', name: 'Royal Gazebo Private Dining', section: 'Gazebo', seats: 6, status: 'Reserved', guest: 'Rohit Sharma (VIP Villa 204)', orderValue: 6800 },
    { id: 'T-04', name: 'Indoor Marwar Table 1', section: 'Indoor Restaurant', seats: 4, status: 'Occupied', guest: 'Sunita Roy (Villa 105)', orderValue: 1850 },
    { id: 'T-05', name: 'Indoor Marwar Table 2', section: 'Indoor Restaurant', seats: 2, status: 'Available', guest: null, orderValue: 0 },
    { id: 'T-06', name: 'Rooftop Fort Deck Table', section: 'Rooftop', seats: 8, status: 'Occupied', guest: 'McKinsey Delegation', orderValue: 8400 },
  ]);

  // Live Kitchen KDS Orders (Module 9)
  const [kdsOrders, setKdsOrders] = useState([
    { id: 'KOT-8821', tableOrRoom: 'Villa 204 (Rohit Sharma)', items: ['1x Laal Maas Royal', '2x Garlic Naan', '1x Masala Chaach'], status: 'Preparing', time: '12 mins ago', chef: 'Chef Digvijay' },
    { id: 'KOT-8822', tableOrRoom: 'Poolside Cabana 1', items: ['2x Pyaaz Kachori', '2x Kokum Cooler'], status: 'Ready to Serve', time: '4 mins ago', chef: 'Chef Anand' },
  ]);

  // Live Folios mapped by Room Number (Module 12)
  const [folios, setFolios] = useState({
    '204': {
      guestName: 'Rohit Sharma',
      guestEmail: 'rohit.sharma@gmail.com',
      guestPhone: '+91 98765 43210',
      roomType: 'Presidential Maharaja Fort Villa with Private Pool',
      roomNumber: '204',
      checkIn: 'May 15, 2025',
      checkOut: 'May 18, 2025',
      invoiceNumber: 'INV-2025-0587',
      items: INITIAL_ROOM_204_FOLIO,
      discountPercent: 0,
      loyaltyPointsUsed: 0,
      isPaid: false,
      paymentMethod: 'Pending'
    },
    '101': {
      guestName: 'Amit Patel',
      guestEmail: 'amit.patel@gmail.com',
      guestPhone: '+91 98404 55667',
      roomType: 'Luxury Tree House with Jacuzzi',
      roomNumber: '101',
      checkIn: 'May 16, 2025',
      checkOut: 'May 19, 2025',
      invoiceNumber: 'INV-2025-0588',
      items: [
        { id: 'F1', desc: 'Tree House with Jacuzzi (3 Nights @ ₹9,500)', qty: 3, rate: 9500, amount: 28500, category: 'Room' },
        { id: 'F2', desc: 'Royal Rajasthani Buffet Breakfast (2 Guests)', qty: 3, rate: 1200, amount: 3600, category: 'F&B' }
      ],
      discountPercent: 0,
      loyaltyPointsUsed: 0,
      isPaid: true,
      paymentMethod: 'UPI'
    }
  });

  // POS Live Cart State
  const [cart, setCart] = useState([
    { id: 'POS-01', name: 'Special Masala Chai & Mirchi Vada', price: 140, qty: 2, iconKey: 'coffee' },
    { id: 'POS-09', name: 'Laal Maas Royal Handi (Specialty)', price: 720, qty: 1, iconKey: 'curry' }
  ]);

  // UI Modals & Drawers
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isNewReservationModalOpen, setIsNewReservationModalOpen] = useState(false);
  const [isRoomDetailModalOpen, setIsRoomDetailModalOpen] = useState(false);
  const [isDigitalRegCardOpen, setIsDigitalRegCardOpen] = useState(false);
  const [isInspectionChecklistOpen, setIsInspectionChecklistOpen] = useState(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState(null);
  const [selectedGuestForDrawer, setSelectedGuestForDrawer] = useState(null);
  const [isGuestDrawerOpen, setIsGuestDrawerOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAddHotelModalOpen, setIsAddHotelModalOpen] = useState(false);
  const [isCreateOrgModalOpen, setIsCreateOrgModalOpen] = useState(false);
  const [notificationToast, setNotificationToast] = useState(null);

  // Helper toast notification
  const showToast = (message, type = 'success') => {
    setNotificationToast({ message, type });
    setTimeout(() => {
      setNotificationToast(null);
    }, 3500);
  };

  // Get current selected hotel object
  const selectedHotel = hotels.find(h => h.id === selectedHotelId) || hotels[0];

  // Room status updater
  const updateRoomStatus = (roomId, newStatus) => {
    setRooms(prev => prev.map(r => r.id === roomId ? { ...r, status: newStatus } : r));
    showToast(`Room/Villa ${roomId} status updated to ${newStatus.toUpperCase()}`);
  };

  // Add a charge onto a room folio
  const addFolioCharge = (roomNumber, item) => {
    setFolios(prev => {
      const existing = prev[roomNumber] || {
        guestName: 'Walk-In Guest',
        roomNumber: roomNumber,
        items: [],
        discountPercent: 0,
        isPaid: false
      };

      const newItem = {
        id: `FOL-${Date.now()}`,
        desc: item.desc || item.name,
        qty: item.qty || 1,
        rate: item.price || item.rate,
        amount: (item.price || item.rate) * (item.qty || 1),
        category: item.category || 'Incidental'
      };

      return {
        ...prev,
        [roomNumber]: {
          ...existing,
          items: [...existing.items, newItem]
        }
      };
    });
    showToast(`₹${(item.price || item.rate) * (item.qty || 1)} charged to Villa ${roomNumber}`);
  };

  // Apply discount to a room folio
  const applyFolioDiscount = (roomNumber, percent) => {
    setFolios(prev => {
      if (!prev[roomNumber]) return prev;
      return {
        ...prev,
        [roomNumber]: {
          ...prev[roomNumber],
          discountPercent: percent
        }
      };
    });
    showToast(`${percent}% Royal Privilege Discount applied to Villa ${roomNumber}!`);
  };

  // Settle & Mark Folio Paid
  const settleFolio = (roomNumber, paymentMethod = 'UPI / Card') => {
    setFolios(prev => {
      if (!prev[roomNumber]) return prev;
      return {
        ...prev,
        [roomNumber]: {
          ...prev[roomNumber],
          isPaid: true,
          paymentMethod: paymentMethod
        }
      };
    });
    showToast(`Folio for Villa ${roomNumber} settled & paid via ${paymentMethod}!`);
  };

  // Express Check-Out
  const expressCheckOut = (roomNumber) => {
    updateRoomStatus(roomNumber, 'dirty');
    
    const newHkTask = {
      id: `HK-${Date.now()}`,
      room: `Villa ${roomNumber}`,
      type: 'Pool Villa Turnover & Sanitization',
      floor: parseInt(roomNumber[0]) || 1,
      priority: 'High',
      status: 'to-clean',
      assignee: 'Ramesh Kumar'
    };
    setHousekeepingTasks(prev => [newHkTask, ...prev]);

    setDepartures(prev => prev.filter(d => d.room !== roomNumber));
    settleFolio(roomNumber, 'Paid at Checkout');

    showToast(`Villa ${roomNumber} express checked out! Turnover task sent to Housekeeping.`);
    setIsRoomDetailModalOpen(false);
  };

  // Check In Complete
  const completeCheckIn = (guestInfo) => {
    if (guestInfo.roomId) {
      updateRoomStatus(guestInfo.roomId, 'occupied');
      setFolios(prev => ({
        ...prev,
        [guestInfo.roomId]: {
          guestName: guestInfo.name,
          guestEmail: guestInfo.email || `${guestInfo.name.toLowerCase().replace(/\s+/g, '.')}@email.com`,
          guestPhone: guestInfo.phone || '+91 98765 43210',
          roomType: guestInfo.roomType || 'Luxury Villa',
          roomNumber: guestInfo.roomId,
          checkIn: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          checkOut: 'May 21, 2025',
          invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
          items: [
            { id: 'INIT', desc: `${guestInfo.roomType || 'Villa'} Charges (3 Nights)`, qty: 3, rate: 9500, amount: 28500, category: 'Room' }
          ],
          discountPercent: 0,
          isPaid: false
        }
      }));
    }
    setArrivals(prev => prev.filter(a => a.name !== guestInfo.name));
    showToast(`Guest ${guestInfo.name} checked in! RFID Villa Keycard #VK-${guestInfo.roomId} issued.`);
    setIsCheckInModalOpen(false);
  };

  // Add a brand new reservation
  const addReservation = (booking) => {
    const newArr = {
      id: `ARR-${Date.now().toString().slice(-4)}`,
      name: booking.guestName,
      avatar: booking.guestName.slice(0, 2).toUpperCase(),
      phone: booking.phone,
      room: booking.roomNumber,
      roomType: booking.roomType,
      nights: booking.nights || 2,
      amount: `₹${((booking.rate || 9500) * (booking.nights || 2) * 1.12).toFixed(0)}`,
      status: 'Pending Check-In',
      eta: '02:00 PM',
      vip: booking.vip || false
    };

    setArrivals(prev => [newArr, ...prev]);

    setTapeChartBookings(prev => [
      ...prev,
      {
        id: `BK-${Date.now()}`,
        roomNumber: booking.roomNumber,
        guestName: `${booking.guestName} (${booking.roomType.split(' ')[0]})`,
        startCol: 6,
        spanCols: booking.nights || 3,
        color: 'bg-emerald-600 text-white'
      }
    ]);

    showToast(`Reservation confirmed for ${booking.guestName} (Villa ${booking.roomNumber})!`);
    setIsNewReservationModalOpen(false);
  };

  // Housekeeping task stage move
  const moveHousekeepingTask = (taskId, newStatus) => {
    setHousekeepingTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        if (newStatus === 'completed') {
          const roomNum = t.room.replace('Room ', '').replace('Villa ', '').trim();
          updateRoomStatus(roomNum, 'clean');
        }
        return { ...t, status: newStatus };
      }
      return t;
    }));
    showToast(`Housekeeping task advanced to ${newStatus.replace('-', ' ').toUpperCase()}`);
  };

  // POS Cart Actions
  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, iconKey: item.iconKey || 'coffee', qty: 1 }];
    });
    showToast(`Added ${item.name} to order`);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const updateCartQty = (itemId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === itemId) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (destination = 'Villa 204') => {
    if (cart.length === 0) return;
    
    // Push into KDS active orders
    const newKot = {
      id: `KOT-${Date.now().toString().slice(-4)}`,
      tableOrRoom: destination,
      items: cart.map(i => `${i.qty}x ${i.name}`),
      status: 'Preparing',
      time: 'Just now',
      chef: 'Chef Digvijay'
    };
    setKdsOrders(prev => [newKot, ...prev]);

    // If destination contains a Room / Villa number, charge to that folio!
    const match = destination.match(/(?:Room|Villa)\s*(\d+)/i);
    if (match && match[1]) {
      const rNum = match[1];
      cart.forEach(item => {
        addFolioCharge(rNum, { desc: `F&B: ${item.name}`, qty: item.qty, price: item.price, category: 'F&B' });
      });
    }

    showToast(`Order placed for ${destination}! Sent to Kitchen KDS.`);
    setCart([]);
  };

  // Approvals Actions
  const approveRequest = (id) => {
    setApprovals(prev => prev.filter(a => a.id !== id));
    showToast('Purchase Order Approved Successfully!');
  };

  const rejectRequest = (id) => {
    setApprovals(prev => prev.filter(a => a.id !== id));
    showToast('Purchase Order Rejected', 'warning');
  };

  // CRM Stage Move
  const moveCrmDeal = (dealId, newStage) => {
    setCrmDeals(prev => prev.map(d => d.id === dealId ? { ...d, stage: newStage } : d));
    showToast(`Wedding/Corporate Deal moved to ${newStage.toUpperCase()}`);
  };

  // AI Chat message sender
  const sendChatMessage = (threadId, text) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { id: Date.now(), sender: 'guest', text, time: timeNow };
    
    setChatThreads(prev => prev.map(t => {
      if (t.id === threadId) {
        return {
          ...t,
          preview: text,
          time: timeNow,
          messages: [...t.messages, userMsg]
        };
      }
      return t;
    }));

    // Realistic Simulated AI Concierge Responses for Lohagarh Fort Resort
    setTimeout(() => {
      let aiReply = "Khamma Ghani! Thank you for contacting Lohagarh Fort Resort & Spa Concierge. I have logged your request.";
      const lower = text.toLowerCase();
      
      if (lower.includes('wifi') || lower.includes('internet') || lower.includes('passcode')) {
        aiReply = "High-speed Wi-Fi network: 'Lohagarh_Royal_Guest' • Passcode: 'RoyalLohagarh2025'. High-speed streaming is active across all treehouses and private pool villas.";
      } else if (lower.includes('checkout') || lower.includes('late') || lower.includes('extend')) {
        aiReply = "Complimentary late check-out till 01:30 PM confirmed! Your RFID wooden villa keycard has been updated automatically.";
      } else if (lower.includes('cultural') || lower.includes('dance') || lower.includes('folk') || lower.includes('evening') || lower.includes('event')) {
        aiReply = "Our traditional Rajasthani Folk Dance, Kalbeliya performance & Puppet Show starts daily at 7:30 PM at the Royal Central Courtyard, followed by live charcoal barbecue.";
      } else if (lower.includes('pool') || lower.includes('jacuzzi') || lower.includes('spa') || lower.includes('massage')) {
        aiReply = "Moksha Ayurvedic Spa & Balcony Jacuzzi services are available daily from 7:00 AM to 9:00 PM. Would you like to book our Signature Sandalwood Couple Therapy?";
      } else if (lower.includes('food') || lower.includes('menu') || lower.includes('laal maas') || lower.includes('dinner') || lower.includes('chai')) {
        aiReply = "24x7 in-villa royal dining is active! You can order Laal Maas, Dal Baati Churma, or Mirchi Vada directly to your private pool deck.";
      } else if (lower.includes('cab') || lower.includes('taxi') || lower.includes('airport') || lower.includes('sightseeing')) {
        aiReply = "Our royal concierge cab is booked for you. The chauffeur will be ready at the resort porch with cool refreshments.";
      }

      const aiMsg = { id: Date.now() + 1, sender: 'ai', text: aiReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      
      setChatThreads(prev => prev.map(t => {
        if (t.id === threadId) {
          return {
            ...t,
            preview: aiReply,
            messages: [...t.messages, aiMsg]
          };
        }
        return t;
      }));
    }, 700);
  };

  // Guest drawer helper
  const openGuestProfile = (guest) => {
    setSelectedGuestForDrawer(guest || {
      name: 'Rohit Sharma',
      avatar: 'RS',
      email: 'rohit.sharma@gmail.com',
      phone: '+91 98765 43210',
      room: 'Villa 204 (Presidential Fort Villa)',
      totalStays: 4,
      totalSpend: '₹1,84,500',
      loyaltyClub: 'Royal Heritage Club — Platinum Member',
      loyaltyPoints: 3450,
      vip: true,
      lastStay: 'May 15, 2025',
      preferences: 'High-elevation treehouse, Jain food on Tuesdays, Extra pool towels, Jacuzzi temperature 38°C'
    });
    setIsGuestDrawerOpen(true);
  };

  // Keyboard shortcut listener for Command Palette (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const value = {
    currentRole,
    setCurrentRole,
    currentView,
    setCurrentView,
    selectedHotelId,
    setSelectedHotelId,
    selectedHotel,
    isDarkMode,
    setIsDarkMode,
    selectedCurrency,
    setSelectedCurrency,
    selectedLanguage,
    setSelectedLanguage,
    seasonalMultiplier,
    setSeasonalMultiplier,
    hotels,
    setHotels,
    areas,
    setAreas,
    organizations,
    setOrganizations,
    rooms,
    setRooms,
    arrivals,
    departures,
    housekeepingTasks,
    lostAndFoundItems,
    setLostAndFoundItems,
    maintenanceTickets,
    setMaintenanceTickets,
    restaurantTables,
    setRestaurantTables,
    kdsOrders,
    setKdsOrders,
    posMenu,
    inventory,
    approvals,
    crmDeals,
    chatThreads,
    activeChatId,
    setActiveChatId,
    tapeChartBookings,
    folios,
    addFolioCharge,
    applyFolioDiscount,
    settleFolio,
    expressCheckOut,
    addReservation,
    cart,
    addToCart,
    removeFromCart,
    updateCartQty,
    clearCart,
    placeOrder,
    updateRoomStatus,
    completeCheckIn,
    moveHousekeepingTask,
    approveRequest,
    rejectRequest,
    moveCrmDeal,
    sendChatMessage,
    openGuestProfile,
    isGuestDrawerOpen,
    setIsGuestDrawerOpen,
    selectedGuestForDrawer,
    isCheckInModalOpen,
    setIsCheckInModalOpen,
    isNewReservationModalOpen,
    setIsNewReservationModalOpen,
    isRoomDetailModalOpen,
    setIsRoomDetailModalOpen,
    isDigitalRegCardOpen,
    setIsDigitalRegCardOpen,
    isInspectionChecklistOpen,
    setIsInspectionChecklistOpen,
    selectedRoomForDetail,
    setSelectedRoomForDetail,
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    isAddHotelModalOpen,
    setIsAddHotelModalOpen,
    isCreateOrgModalOpen,
    setIsCreateOrgModalOpen,
    notificationToast,
    showToast
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
