// Comprehensive Mock Data for Enterprise PMS Hospitality Operating System (Nexus HotelOS)

export const INITIAL_HOTELS = [
  {
    id: 'HOTEL-001',
    name: 'Aura Solis Grand Sanctuary & Spa',
    city: 'Goa Coastline',
    area: 'Coastal & Sanctuary Zone',
    address: 'Aura Oceanfront Boulevard, Candolim, North Goa - 403515',
    manager: { name: 'Vikramaditya Singhania', email: 'gm@aurasolis.com', avatar: 'VS' },
    rooms: 95,
    floors: 2,
    occupancy: 89,
    todayRevenue: 285000,
    pendingPayments: 32000,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    type: '5-Star Ultra-Luxury Beachfront & Private Villa Sanctuary',
    phone: '+91 80033 95964',
    email: 'reservations@aurasolis.com',
  },
  {
    id: 'HOTEL-002',
    name: 'The Zenith Metropolis & Convention Center',
    city: 'New Delhi NCR',
    area: 'Capital & Northern Metros',
    address: '12 Connaught Central Plaza, New Delhi - 110001',
    manager: { name: 'Karan Malhotra', email: 'gm@zenithhotels.com', avatar: 'KM' },
    rooms: 120,
    floors: 5,
    occupancy: 82,
    todayRevenue: 148500,
    pendingPayments: 24500,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    type: '5-Star Metropolitan Business & Convention Center',
    phone: '+91 98765 43210',
    email: 'delhi@zenithhotels.com',
  },
  {
    id: 'HOTEL-003',
    name: 'Azure Bay Oceanfront Resort & Marina',
    city: 'Mumbai, Maharashtra',
    area: 'Western Coastal Cluster',
    address: 'Marine Drive Promenade, Mumbai - 400020',
    manager: { name: 'Ananya Deshmukh', email: 'gm@azurebayresort.com', avatar: 'AD' },
    rooms: 150,
    floors: 7,
    occupancy: 88,
    todayRevenue: 195000,
    pendingPayments: 38000,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    type: '5-Star Coastal Luxury Resort',
    phone: '+91 98765 43213',
    email: 'mumbai@azurebayresort.com',
  },
  {
    id: 'HOTEL-004',
    name: 'Celestial Alpine Peaks & Sanctuary',
    city: 'Manali, Himachal Pradesh',
    area: 'Capital & Northern Metros',
    address: 'Pine Forest Ridge, Old Manali - 175131',
    manager: { name: 'Sneha Dasgupta', email: 'gm@celestialpeaks.com', avatar: 'SD' },
    rooms: 50,
    floors: 3,
    occupancy: 92,
    todayRevenue: 112000,
    pendingPayments: 9500,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80',
    type: 'Luxury Himalayan Mountain Sanctuary',
    phone: '+91 98765 43215',
    email: 'manali@celestialpeaks.com',
  },
  {
    id: 'HOTEL-005',
    name: 'Vanguard Tower Executive Residences',
    city: 'Gurgaon, Cyber City',
    area: 'Capital & Northern Metros',
    address: 'Cyber City Horizon Tower, Phase 2, Gurgaon - 122002',
    manager: { name: 'Rohan Verma', email: 'gm@vanguardresidences.com', avatar: 'RV' },
    rooms: 80,
    floors: 6,
    occupancy: 74,
    todayRevenue: 98400,
    pendingPayments: 18200,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    type: 'Luxury Corporate Long-Stay Suites',
    phone: '+91 98765 43211',
    email: 'gurgaon@vanguardresidences.com',
  }
];

export const INITIAL_AREAS = [
  {
    id: 'AREA-01',
    name: 'Coastal & Sanctuary Zone',
    region: 'Goa, Kerala & Coastal Karnataka',
    manager: { name: 'Vikramaditya Singhania', email: 'cluster@aurasolis.com', avatar: 'VS' },
    hotelsCount: 4,
    totalRooms: 420,
    occupancy: 89,
    status: 'Active',
    assignedHotels: ['HOTEL-001']
  },
  {
    id: 'AREA-02',
    name: 'Capital & Northern Metros',
    region: 'Delhi NCR, Haryana, Punjab & Himachal',
    manager: { name: 'Karan Malhotra', email: 'cluster.north@zenithhotels.com', avatar: 'KM' },
    hotelsCount: 9,
    totalRooms: 840,
    occupancy: 78,
    status: 'Active',
    assignedHotels: ['HOTEL-002', 'HOTEL-004', 'HOTEL-005']
  },
  {
    id: 'AREA-03',
    name: 'Western Coastal Cluster',
    region: 'Mumbai, Pune, Goa & Gujarat',
    manager: { name: 'Ananya Deshmukh', email: 'cluster.west@azurebayresort.com', avatar: 'AD' },
    hotelsCount: 6,
    totalRooms: 620,
    occupancy: 84,
    status: 'Active',
    assignedHotels: ['HOTEL-003']
  }
];

export const INITIAL_ORGANIZATIONS = [
  {
    id: 'ORG-100244',
    name: 'Solaria Global Hospitality Portfolio',
    owner: { name: 'Devendra Singhania', email: 'owner@solariagroup.com', avatar: 'DS' },
    hotelsCount: 5,
    usersCount: 48,
    plan: 'Enterprise Sovereign Cloud',
    status: 'Active',
    createdDate: 'Jan 10, 2024',
    nextBillingDate: 'Jul 10, 2025',
    address: 'Solaria Corporate Towers, Level 14, Candolim Boulevard, Goa',
    phone: '+91 80033 95964',
    gstin: '30AABCS9603R1Z8',
    pan: 'AABCS9603R'
  },
  {
    id: 'ORG-100245',
    name: 'Apex International Hotel Holdings',
    owner: { name: 'Rajesh Singhania', email: 'rajesh@apexholdings.cloud', avatar: 'RS' },
    hotelsCount: 5,
    usersCount: 32,
    plan: 'Enterprise Multi-Cluster',
    status: 'Active',
    createdDate: 'Jan 15, 2024',
    nextBillingDate: 'Jun 15, 2025',
    address: '123 Barakhamba Road, Connaught Place, New Delhi',
    phone: '+91 98101 22334',
    gstin: '07AABCU9603R1Z5',
    pan: 'AABCU9603R'
  }
];

// Room & Villa Inventory for Aura Solis Grand Sanctuary & Spa
export const INITIAL_ROOMS_DATA = [
  // Section 1: Ground Level - Nature & Private Pool Villas
  { id: '101', number: '101', floor: 1, type: 'Luxury Canopy Villa with Jacuzzi', price: 9500, status: 'occupied', guest: 'Amit Patel', phone: '+91 98404 55667', checkIn: 'May 16, 2025', checkOut: 'May 19, 2025', balance: 31920, amenities: 'Private Balcony Jacuzzi, Ocean Canopy View, Italian Marble, Rain Shower', iconType: 'tree' },
  { id: '102', number: '102', floor: 1, type: 'Private Pool Villa with Garden', price: 14500, status: 'clean', guest: null, amenities: 'Private Swimming Pool, Sun Loungers, Private Lawn, King Bed', iconType: 'pool' },
  { id: '103', number: '103', floor: 1, type: 'Oceanfront Luxury Pavilion Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Air-conditioned Glamping, Teakwood Bed, Private Sit-out Verandah', iconType: 'tent' },
  { id: '104', number: '104', floor: 1, type: 'Presidential Ocean Suite', price: 18000, status: 'clean', guest: null, amenities: 'Handcrafted Furniture, Bathtub, Butler Service, Sunset Deck', iconType: 'suite' },
  { id: '105', number: '105', floor: 1, type: 'Tropical Garden Luxury Cottage', price: 6500, status: 'occupied', guest: 'Sunita Roy', phone: '+91 98505 66778', checkIn: 'May 17, 2025', checkOut: 'May 20, 2025', balance: 21840, amenities: 'Garden View, Stone Architecture, King Bed', iconType: 'cottage' },
  { id: '106', number: '106', floor: 1, type: 'Private Plunge Pool Villa', price: 16000, status: 'clean', guest: null, amenities: 'Temperature Controlled Plunge Pool, Private Garden', iconType: 'pool' },
  { id: '107', number: '107', floor: 1, type: 'Sanctuary Grand Suite', price: 12000, status: 'dirty', guest: null, amenities: 'Artisan Decor, Courtyard Access', iconType: 'suite' },
  { id: '108', number: '108', floor: 1, type: 'Luxury Tree Canopy Villa Premier', price: 11000, status: 'clean', guest: null, amenities: 'High Elevation Canopy, Open-to-Sky Jacuzzi', iconType: 'tree' },
  { id: '109', number: '109', floor: 1, type: 'Oceanfront Luxury Pavilion Tent', price: 7500, status: 'clean', guest: null, amenities: 'Luxury Glamping, Ocean Breeze', iconType: 'tent' },
  { id: '110', number: '110', floor: 1, type: 'Solaria Signature Suite', price: 18500, status: 'occupied', guest: 'Karan Malhotra', phone: '+91 98112 33445', checkIn: 'May 15, 2025', checkOut: 'May 18, 2025', balance: 62160, amenities: 'Master Royal Suite, Private Dining Table', iconType: 'suite' },
  { id: '111', number: '111', floor: 1, type: 'Sunset Ocean Cottage', price: 6500, status: 'clean', guest: null, amenities: 'Sunset View, Private Sit-out', iconType: 'cottage' },
  { id: '112', number: '112', floor: 1, type: 'Oceanfront Luxury Pavilion Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Luxury Glamping Tent', iconType: 'tent' },
  { id: '113', number: '113', floor: 1, type: 'Grand Ocean Sanctuary Villa', price: 15000, status: 'clean', guest: null, amenities: 'Handcrafted Sandstone Villa, Private Lawn', iconType: 'villa' },
  { id: '114', number: '114', floor: 1, type: 'Luxury Canopy Villa with Jacuzzi', price: 9500, status: 'occupied', guest: 'Dr. Vivek Mehra', phone: '+91 98223 44556', checkIn: 'May 16, 2025', checkOut: 'May 19, 2025', balance: 31920, amenities: 'Tree Canopy, Heated Jacuzzi', iconType: 'tree' },
  { id: '115', number: '115', floor: 1, type: 'Private Pool Villa Deluxe', price: 14500, status: 'clean', guest: null, amenities: 'Private Pool, Garden View', iconType: 'pool' },
  { id: '116', number: '116', floor: 1, type: 'Sanctuary Grand Suite', price: 12000, status: 'clean', guest: null, amenities: 'Heritage Architecture', iconType: 'suite' },

  // Section 2: Upper Floor Wing - Treehouse Canopies & Sovereign Suites
  { id: '201', number: '201', floor: 2, type: 'Private Pool Villa with Jacuzzi', price: 15500, status: 'clean', guest: null, amenities: 'Private Swimming Pool & Jacuzzi Combo', iconType: 'pool' },
  { id: '202', number: '202', floor: 2, type: 'Oceanfront Luxury Pavilion Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Luxury Glamping', iconType: 'tent' },
  { id: '203', number: '203', floor: 2, type: 'Luxury Tree Canopy Villa Premier', price: 11000, status: 'clean', guest: null, amenities: 'Top Floor Tree Canopy Jacuzzi', iconType: 'tree' },
  { id: '204', number: '204', floor: 2, type: 'Presidential Sovereign Villa with Private Pool', price: 24000, status: 'occupied', guest: 'Rohit Sharma', phone: '+91 98765 43210', checkIn: 'May 15, 2025', checkOut: 'May 18, 2025', balance: 80640, vip: true, amenities: 'Private Infinity Pool, Personal Butler, Sovereign Dining, Spa Jacuzzi', iconType: 'crown' },
  { id: '205', number: '205', floor: 2, type: 'Tropical Valley View Cottage', price: 6500, status: 'clean', guest: null, amenities: 'Cottage with Valley View', iconType: 'cottage' },
  { id: '206', number: '206', floor: 2, type: 'Luxury Canopy Villa with Jacuzzi', price: 9500, status: 'occupied', guest: 'Vikram Joshi', phone: '+91 98334 55667', checkIn: 'May 17, 2025', checkOut: 'May 20, 2025', balance: 31920, amenities: 'Private Jacuzzi, Nature Surrounds', iconType: 'tree' },
  { id: '207', number: '207', floor: 2, type: 'Sovereign Haven Villa', price: 15000, status: 'clean', guest: null, amenities: 'Luxury Villa, Private Plunge Pool', iconType: 'villa' },
  { id: '208', number: '208', floor: 2, type: 'Oceanfront Luxury Pavilion Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Glamping Experience', iconType: 'tent' },
  { id: '209', number: '209', floor: 2, type: 'Private Plunge Pool Villa', price: 14500, status: 'clean', guest: null, amenities: 'Private Pool', iconType: 'pool' },
  { id: '210', number: '210', floor: 2, type: 'Presidential Ocean Suite', price: 18000, status: 'occupied', guest: 'Ananya Deshmukh', phone: '+91 98445 66778', checkIn: 'May 16, 2025', checkOut: 'May 19, 2025', balance: 60480, amenities: 'Heritage Suite, Bathtub', iconType: 'suite' },
  { id: '211', number: '211', floor: 2, type: 'Luxury Tree Canopy Villa Premier', price: 11000, status: 'clean', guest: null, amenities: 'Treehouse', iconType: 'tree' },
  { id: '212', number: '212', floor: 2, type: 'Sunset Ocean Cottage', price: 6500, status: 'clean', guest: null, amenities: 'Cottage', iconType: 'cottage' },
  { id: '213', number: '213', floor: 2, type: 'Oceanfront Luxury Pavilion Tent', price: 7500, status: 'clean', guest: null, amenities: 'Pavilion Tent', iconType: 'tent' },
  { id: '214', number: '214', floor: 2, type: 'Imperial Sovereign Presidential Estate Villa', price: 32000, status: 'occupied', guest: 'Devendra Singhania', phone: '+91 80033 95964', checkIn: 'May 14, 2025', checkOut: 'May 20, 2025', balance: 215040, vip: true, amenities: 'Chairman Estate Villa, Private 40ft Pool, Ocean Deck, Private Chef', iconType: 'crown' },
  { id: '215', number: '215', floor: 2, type: 'Private Pool Villa with Lawn', price: 14500, status: 'dirty', guest: null, amenities: 'Private Pool', iconType: 'pool' },
  { id: '216', number: '216', floor: 2, type: 'Presidential Ocean Suite', price: 18000, status: 'clean', guest: null, amenities: 'Sovereign Suite', iconType: 'suite' },
];

export const INITIAL_ROOMS = INITIAL_ROOMS_DATA;

// Today's Arrivals at Aura Solis Grand Sanctuary
export const INITIAL_TODAYS_ARRIVALS = [
  { id: 'ARR-01', name: 'Rohit Sharma', avatar: 'RS', phone: '+91 98765 43210', room: '204', roomType: 'Presidential Sovereign Villa', nights: 3, amount: '₹80,640', status: 'Pending Check-In', eta: '02:00 PM', vip: true },
  { id: 'ARR-02', name: 'Priya Sharma', avatar: 'PS', phone: '+91 98111 22334', room: '106', roomType: 'Private Pool Villa', nights: 2, amount: '₹35,840', status: 'Pending Check-In', eta: '03:30 PM' },
  { id: 'ARR-03', name: 'Amit Verma', avatar: 'AV', phone: '+91 98222 33445', room: '108', roomType: 'Luxury Tree Canopy Villa', nights: 4, amount: '₹49,280', status: 'Pending Check-In', eta: '04:15 PM' },
  { id: 'ARR-04', name: 'Sneha Patel', avatar: 'SP', phone: '+91 98333 44556', room: '201', roomType: 'Private Pool Villa with Jacuzzi', nights: 2, amount: '₹34,720', status: 'Pending Check-In', eta: '05:00 PM' },
  { id: 'ARR-05', name: 'Dr. Vivek Deshmukh', avatar: 'VD', phone: '+91 98444 55667', room: '113', roomType: 'Grand Ocean Sanctuary Villa', nights: 3, amount: '₹50,400', status: 'Pending Check-In', eta: '06:30 PM', vip: true },
];

// Today's Departures
export const INITIAL_TODAYS_DEPARTURES = [
  { id: 'DEP-01', name: 'Rohan Mehta', avatar: 'RM', phone: '+91 98765 43210', room: '101', roomType: 'Luxury Canopy Villa', nights: 3, amount: '₹31,920', status: 'Pending Checkout', balanceDue: '₹0.00 (Paid)' },
  { id: 'DEP-02', name: 'Karan Malhotra', avatar: 'KM', phone: '+91 98112 33445', room: '110', roomType: 'Solaria Signature Suite', nights: 3, amount: '₹62,160', status: 'Pending Checkout', balanceDue: '₹4,500 (Spa & Bar)' },
  { id: 'DEP-03', name: 'Meera Sengupta', avatar: 'MS', phone: '+91 98555 66778', room: '206', roomType: 'Luxury Canopy Villa', nights: 2, amount: '₹21,280', status: 'Pending Checkout', balanceDue: '₹0.00 (Paid)' },
  { id: 'DEP-04', name: 'Vikram Joshi', avatar: 'VJ', phone: '+91 98334 55667', room: '210', roomType: 'Presidential Ocean Suite', nights: 3, amount: '₹60,480', status: 'Pending Checkout', balanceDue: '₹2,800 (F&B Dining)' },
];

// Housekeeping Tasks for Resort
export const INITIAL_HOUSEKEEPING_TASKS = [
  { id: 'HK-101', room: 'Room 103', type: 'Pavilion Tent Sanitization & Turndown', floor: 1, priority: 'High', status: 'to-clean', assignee: 'Ramesh Kumar' },
  { id: 'HK-102', room: 'Room 107', type: 'Sanctuary Suite Linen & Robe Change', floor: 1, priority: 'Medium', status: 'to-clean', assignee: 'Sunita Devi' },
  { id: 'HK-103', room: 'Room 112', type: 'Pavilion Tent Deep Clean', floor: 1, priority: 'Normal', status: 'to-clean', assignee: 'Mohan Lal' },
  { id: 'HK-104', room: 'Room 202', type: 'Pavilion Tent Turnover', floor: 2, priority: 'High', status: 'in-progress', assignee: 'Ramesh Kumar' },
  { id: 'HK-105', room: 'Room 208', type: 'Luxury Tent Amenity Restock', floor: 2, priority: 'Medium', status: 'in-progress', assignee: 'Sunita Devi' },
  { id: 'HK-106', room: 'Room 215', type: 'Private Pool Sanitation & Water pH Check', floor: 2, priority: 'Normal', status: 'inspected', assignee: 'Mohan Lal' },
  { id: 'HK-107', room: 'Room 102', type: 'Private Pool Villa Turnover', floor: 1, priority: 'Normal', status: 'completed', assignee: 'Ramesh Kumar' },
  { id: 'HK-108', room: 'Room 106', type: 'Plunge Pool Villa Sanitized', floor: 1, priority: 'High', status: 'completed', assignee: 'Sunita Devi' },
];

// Gourmet & Multi-Cuisine POS Menu for Aura Solis Grand Sanctuary (Vector Icon Keyed)
export const INITIAL_POS_MENU = [
  { id: 'POS-01', name: 'Artisan Cold Brew & Cinnamon Croissant', category: 'Beverages', price: 240, iconKey: 'coffee' },
  { id: 'POS-02', name: 'Fresh Tropical Dragonfruit & Mint Cooler', category: 'Beverages', price: 220, iconKey: 'glass-water' },
  { id: 'POS-03', name: 'Sparkling San Pellegrino / Fresh Juice', category: 'Beverages', price: 280, iconKey: 'cup-soda' },
  { id: 'POS-04', name: 'Reserve Sauvignon Blanc / Pinot Noir Glass', category: 'Beverages', price: 680, iconKey: 'wine' },
  { id: 'POS-05', name: 'Truffle Edamame & Avocado Tartine', category: 'Starters', price: 420, iconKey: 'cookie' },
  { id: 'POS-06', name: 'Charcoal Smoked Cottage Cheese Skewers', category: 'Starters', price: 460, iconKey: 'flame' },
  { id: 'POS-07', name: 'Crispy Atlantic Salmon & Herb Bites', category: 'Starters', price: 640, iconKey: 'drumstick' },
  { id: 'POS-08', name: 'Mediterranean Herb Grilled Sea Bass', category: 'Main Course', price: 850, iconKey: 'soup' },
  { id: 'POS-09', name: 'Sovereign Braised Lamb Shank with Herb Jus', category: 'Main Course', price: 920, iconKey: 'utensils' },
  { id: 'POS-10', name: 'Wild Morel Mushroom Risotto', category: 'Main Course', price: 680, iconKey: 'wheat' },
  { id: 'POS-11', name: 'Signature Dum Saffron Biryani', category: 'Main Course', price: 580, iconKey: 'bowl' },
  { id: 'POS-12', name: 'Belgian Dark Chocolate Fondant with Pistachio Gelato', category: 'Desserts', price: 340, iconKey: 'cake' },
];

// Initial Folio Items for Room 204 at Aura Solis Grand Sanctuary
export const INITIAL_ROOM_204_FOLIO = [
  { id: 'FOL-01', desc: 'Presidential Sovereign Villa with Private Pool (3 Nights @ ₹24,000)', qty: 3, rate: 24000.00, amount: 72000.00, category: 'Room' },
  { id: 'FOL-02', desc: 'Gourmet Organic Champagne Breakfast (2 Guests)', qty: 3, rate: 1200.00, amount: 3600.00, category: 'F&B' },
  { id: 'FOL-03', desc: 'Aura Thalasso Spa Couple Therapy & Jacuzzi', qty: 1, rate: 4500.00, amount: 4500.00, category: 'Spa' },
  { id: 'FOL-04', desc: 'Private Candlelight Dinner by Oceanfront Lawn', qty: 1, rate: 3800.00, amount: 3800.00, category: 'F&B' },
];

// Inventory SKUs
export const INITIAL_INVENTORY = [
  { id: 'SKU-1001', name: 'Egyptian Cotton King Bed Linen (600 Thread Count)', category: 'Housekeeping', inStock: 340, minThreshold: 100, unit: 'Sets', price: 1450, status: 'In Stock' },
  { id: 'SKU-1002', name: 'Plush Pool Towels (800 GSM Luxury Turkish Cotton)', category: 'Housekeeping', inStock: 480, minThreshold: 150, unit: 'Pcs', price: 550, status: 'In Stock' },
  { id: 'SKU-1003', name: 'Organic Essential Botanicals Toiletries Kit', category: 'Toiletries', inStock: 85, minThreshold: 120, unit: 'Sets', price: 210, status: 'Low Stock' },
  { id: 'SKU-1004', name: 'Private Pool Mineral Water Treatment & Salt Tablets', category: 'Maintenance', inStock: 45, minThreshold: 50, unit: 'Kg', price: 650, status: 'Low Stock' },
  { id: 'SKU-1005', name: 'RFID Smart Bamboo Wooden Keycards', category: 'Front Office', inStock: 450, minThreshold: 150, unit: 'Cards', price: 75, status: 'In Stock' },
  { id: 'SKU-1006', name: 'Organic Cold-Pressed Oils & Artisanal Spices', category: 'F&B Kitchen', inStock: 25, minThreshold: 8, unit: 'Tins', price: 4200, status: 'In Stock' },
];

// Approvals
export const INITIAL_APPROVALS = [
  { id: 'PO-2025-101', title: 'Private Pool Jacuzzi Heater Pump Replacement', type: 'Maintenance PO', hotel: 'Aura Solis Grand Sanctuary', requester: 'Mukesh Sharma (Chief Engineer)', amount: '₹65,000', reason: 'Preventive overhaul for Canopy Villa Jacuzzi units', date: 'May 18, 2025' },
  { id: 'REF-2025-014', title: 'Pre-Wedding Destination Date Reschedule', type: 'Booking Modification', hotel: 'Aura Solis Grand Sanctuary', requester: 'Pooja Rathore (Banquet Sales)', amount: '₹3,50,000', reason: 'Rescheduling Ocean Lawn event from June to November', date: 'May 18, 2025' },
  { id: 'PO-2025-102', title: 'Organic Seafood & Exotic Produce Procurement', type: 'Purchase Order', hotel: 'Aura Solis Grand Sanctuary', requester: 'Chef Digvijay (Executive Chef)', amount: '₹58,400', reason: 'Global summit banquet catering inventory', date: 'May 17, 2025' },
];

// CRM Deals
export const INITIAL_CRM_DEALS = [
  { id: 'DEAL-01', client: 'Global FinTech Executive Summit & Gala', type: '3-Day Oceanfront Villa Retreat & Banquets', value: 4500000, rooms: 80, stage: 'negotiation', contact: 'Vikram Singhania', date: 'Nov 18, 2025' },
  { id: 'DEAL-02', client: 'McKinsey Global Partner Retreat', type: '4-Day Executive Villa Retreat & Banquets', value: 2200000, rooms: 45, stage: 'won', contact: 'Kavita Iyer', date: 'Jul 12, 2025' },
  { id: 'DEAL-03', client: 'Porsche Electric Fleet Showcase & Dinner', type: 'Ocean Lawn Showcase & Poolside Gala', value: 1850000, rooms: 40, stage: 'proposal', contact: 'Rahul Verma', date: 'Aug 05, 2025' },
  { id: 'DEAL-04', client: 'TechStars Founder Network Annual Meet', type: 'Convention Center Keynotes & Networking', value: 1400000, rooms: 50, stage: 'lead', contact: 'Sanjay Rao', date: 'Sep 20, 2025' },
];

// AI Chat Threads for Aura Solis Grand Sanctuary
export const INITIAL_AI_CHAT_THREADS = [
  {
    id: 'CHAT-1',
    guestName: 'Rohit Sharma',
    room: '204',
    time: '15:42',
    preview: 'What time is the sunset acoustic performance at the lawn today?',
    messages: [
      { id: 1, sender: 'guest', text: 'Hello! We just checked into Presidential Villa 204. Can you share the Wi-Fi details and evening acoustic session timing?', time: '15:40' },
      { id: 2, sender: 'ai', text: "Greetings Mr. Sharma! Welcome to Aura Solis Grand Sanctuary & Spa.\n\nHigh-speed Wi-Fi network: 'Solaria_Ultra_Guest_5G' (Passcode: 'SolariaGuest2025').\n\nEvening Sessions: The Sunset Acoustic Jazz & Saxophone performance begins at 6:45 PM at the Ocean Horizon Deck followed by live chef barbecue stations.", time: '15:41' },
      { id: 3, sender: 'guest', text: 'Wonderful! Can we also get a private candle-lit dinner setup next to our villa pool at 9:00 PM?', time: '15:42' },
      { id: 4, sender: 'ai', text: 'Certainly, Mr. Sharma! Our Signature Butler Service has reserved the poolside deck with customized Mediterranean seafood and artisanal delicacies for 9:00 PM tonight.', time: '15:42' }
    ]
  },
  {
    id: 'CHAT-2',
    guestName: 'Amit Patel',
    room: '101',
    time: '14:20',
    preview: 'Can you please arrange the Jacuzzi temperature in Villa 101?',
    messages: [
      { id: 1, sender: 'guest', text: 'Hello, could you please turn on the heater for the canopy balcony Jacuzzi for 5:30 PM?', time: '14:18' },
      { id: 2, sender: 'ai', text: 'Warm greetings Mr. Patel! I have alerted our engineering team. The balcony Jacuzzi in Villa 101 will be pre-heated to a comfortable 38°C by 5:30 PM with eucalyptus aromatherapy salts.', time: '14:20' }
    ]
  }
];

// Tape Chart Dates
export const TAPE_CHART_DATES = [
  { day: 'Mon', date: 'May 12' },
  { day: 'Tue', date: 'May 13' },
  { day: 'Wed', date: 'May 14' },
  { day: 'Thu', date: 'May 15' },
  { day: 'Fri', date: 'May 16' },
  { day: 'Sat', date: 'May 17' },
  { day: 'Sun', date: 'May 18' },
  { day: 'Mon', date: 'May 19' },
  { day: 'Tue', date: 'May 20' },
  { day: 'Wed', date: 'May 21' },
  { day: 'Thu', date: 'May 22' },
  { day: 'Fri', date: 'May 23' },
  { day: 'Sat', date: 'May 24' },
  { day: 'Sun', date: 'May 25' },
];

export const TAPE_CHART_BOOKINGS = [
  { id: 'BK-1', roomNumber: '101', guestName: 'Amit Patel (Canopy Villa)', startCol: 4, spanCols: 3, color: 'bg-indigo-600 text-white' },
  { id: 'BK-2', roomNumber: '103', guestName: 'Corporate McKinsey', startCol: 1, spanCols: 4, color: 'bg-blue-600 text-white' },
  { id: 'BK-3', roomNumber: '105', guestName: 'Sunita Roy', startCol: 5, spanCols: 3, color: 'bg-emerald-600 text-white' },
  { id: 'BK-4', roomNumber: '106', guestName: 'Priya Sharma (Pool Villa)', startCol: 4, spanCols: 2, color: 'bg-indigo-600 text-white' },
  { id: 'BK-5', roomNumber: '201', guestName: 'Sneha Patel', startCol: 4, spanCols: 2, color: 'bg-indigo-600 text-white' },
  { id: 'BK-6', roomNumber: '204', guestName: 'Rohit Sharma (Sovereign Villa VIP)', startCol: 3, spanCols: 3, color: 'bg-purple-600 text-white' },
  { id: 'BK-7', roomNumber: '206', guestName: 'Vikram Joshi (Canopy Villa)', startCol: 5, spanCols: 3, color: 'bg-indigo-600 text-white' },
  { id: 'BK-8', roomNumber: '214', guestName: 'Devendra Singhania (Chairman Estate)', startCol: 2, spanCols: 6, color: 'bg-amber-600 text-white' },
];
