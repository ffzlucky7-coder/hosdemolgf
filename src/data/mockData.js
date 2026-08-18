// Comprehensive Mock Data for PMS Hospitality Operating System

export const INITIAL_HOTELS = [
  {
    id: 'HOTEL-001',
    name: 'Lohagarh Fort Resort & Spa, Jaipur',
    city: 'Jaipur, Rajasthan',
    area: 'North-West Heritage Zone',
    address: 'NH-8, Kachera Wala, Kukas, Jaipur - 302028, Rajasthan',
    manager: { name: 'Gajendra Singh Rathore', email: 'gajendra@lohagarhfortresort.in', avatar: 'GS' },
    rooms: 95,
    floors: 2,
    occupancy: 89,
    todayRevenue: 285000,
    pendingPayments: 32000,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    type: '5-Star Luxury Heritage & Private Pool Villa Resort',
    phone: '+91 80033 95964',
    email: 'reservations@lohagarhfortresort.in',
  },
  {
    id: 'HOTEL-002',
    name: 'Grand Horizon Hotel, Delhi',
    city: 'Delhi NCR',
    area: 'North Zone',
    address: '123 Barakhamba Road, Connaught Place, New Delhi - 110001',
    manager: { name: 'Rohit Sharma', email: 'rohit.sharma@hotelco.com', avatar: 'RS' },
    rooms: 120,
    floors: 5,
    occupancy: 82,
    todayRevenue: 148500,
    pendingPayments: 24500,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    type: 'Luxury 5-Star Hotel',
    phone: '+91 98765 43210',
    email: 'delhi@grandhorizon.com',
  },
  {
    id: 'HOTEL-003',
    name: 'Grand Horizon Resort, Mumbai',
    city: 'Mumbai, Maharashtra',
    area: 'West Zone',
    address: 'Juhu Tara Road, Juhu Beach, Mumbai - 400049',
    manager: { name: 'Priya Singh', email: 'priya.singh@hotelco.com', avatar: 'PS' },
    rooms: 150,
    floors: 7,
    occupancy: 88,
    todayRevenue: 195000,
    pendingPayments: 38000,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    type: '5-Star Beach Resort',
    phone: '+91 98765 43213',
    email: 'mumbai@grandhorizon.com',
  },
  {
    id: 'HOTEL-004',
    name: 'Horizon Valley Resort, Manali',
    city: 'Manali, Himachal Pradesh',
    area: 'North Zone',
    address: 'Hadimba Temple Road, Manali - 175131',
    manager: { name: 'Sneha Das', email: 'sneha.das@hotelco.com', avatar: 'SD' },
    rooms: 50,
    floors: 3,
    occupancy: 92,
    todayRevenue: 112000,
    pendingPayments: 9500,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80',
    type: 'Himalayan Luxury Resort',
    phone: '+91 98765 43215',
    email: 'manali@grandhorizon.com',
  },
  {
    id: 'HOTEL-005',
    name: 'Horizon Suites, Gurgaon',
    city: 'Gurgaon, Haryana',
    area: 'North Zone',
    address: 'DLF Cyber City, Phase 2, Gurgaon - 122002',
    manager: { name: 'Neha Kapoor', email: 'neha.kapoor@hotelco.com', avatar: 'NK' },
    rooms: 80,
    floors: 6,
    occupancy: 74,
    todayRevenue: 98400,
    pendingPayments: 18200,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    type: 'Corporate Business Suites',
    phone: '+91 98765 43211',
    email: 'gurgaon@grandhorizon.com',
  }
];

export const INITIAL_AREAS = [
  {
    id: 'AREA-01',
    name: 'Rajasthan Heritage Zone',
    region: 'Jaipur, Udaipur, Jodhpur & Pushkar',
    manager: { name: 'Gajendra Singh Rathore', email: 'gajendra@lohagarhfortresort.in', avatar: 'GS' },
    hotelsCount: 4,
    totalRooms: 420,
    occupancy: 89,
    status: 'Active',
    assignedHotels: ['HOTEL-001']
  },
  {
    id: 'AREA-02',
    name: 'North Zone',
    region: 'Delhi NCR, Haryana, Punjab & Himachal',
    manager: { name: 'Rohit Sharma', email: 'rohit.sharma@hotelco.com', avatar: 'RS' },
    hotelsCount: 9,
    totalRooms: 840,
    occupancy: 78,
    status: 'Active',
    assignedHotels: ['HOTEL-002', 'HOTEL-004', 'HOTEL-005']
  },
  {
    id: 'AREA-03',
    name: 'West Zone',
    region: 'Maharashtra, Goa & Gujarat',
    manager: { name: 'Neha Kapoor', email: 'neha.kapoor@hotelco.com', avatar: 'NK' },
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
    name: 'Lohagarh Hospitality & Resorts Pvt Ltd',
    owner: { name: 'Shri Mahendra Singh Rathore', email: 'owner@lohagarhfortresort.in', avatar: 'MS' },
    hotelsCount: 2,
    usersCount: 45,
    plan: 'Enterprise Luxury',
    status: 'Active',
    createdDate: 'Jan 10, 2024',
    nextBillingDate: 'Jul 10, 2025',
    address: 'Kukas, NH-8, Delhi-Jaipur Highway, Jaipur, Rajasthan',
    phone: '+91 80033 95964',
    gstin: '08AABCL9603R1Z8',
    pan: 'AABCL9603R'
  },
  {
    id: 'ORG-100245',
    name: 'Grand Horizon Hospitality Group',
    owner: { name: 'Rajesh Singhania', email: 'rajesh@grandhorizon.com', avatar: 'RS' },
    hotelsCount: 5,
    usersCount: 32,
    plan: 'Enterprise',
    status: 'Active',
    createdDate: 'Jan 15, 2024',
    nextBillingDate: 'Jun 15, 2025',
    address: '123 Barakhamba Road, Connaught Place, New Delhi',
    phone: '+91 98101 22334',
    gstin: '27AABCU9603R1Z5',
    pan: 'AABCU9603R'
  }
];

// Room & Villa Inventory for Lohagarh Fort Resort & Spa, Jaipur
export const INITIAL_ROOMS_LOHAGARH = [
  // Section 1 / Ground Level: Nature & Private Pool Villas (Rooms 101 to 116)
  { id: '101', number: '101', floor: 1, type: 'Luxury Tree House with Jacuzzi', price: 9500, status: 'occupied', guest: 'Amit Patel', phone: '+91 98404 55667', checkIn: 'May 16, 2025', checkOut: 'May 19, 2025', balance: 31920, amenities: 'Private Balcony Jacuzzi, Aravali Tree Canopy View, Wooden Interiors, Rain Shower' },
  { id: '102', number: '102', floor: 1, type: 'Private Pool Villa with Garden', price: 14500, status: 'clean', guest: null, amenities: 'Private Swimming Pool, Sun Loungers, Private Lawn, King Bed' },
  { id: '103', number: '103', floor: 1, type: 'Royal Swiss Luxury Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Air-conditioned Glamping, Teakwood Bed, Private Sit-out Verandah' },
  { id: '104', number: '104', floor: 1, type: 'Maharaja Heritage Suite', price: 18000, status: 'clean', guest: null, amenities: 'Royal Carved Furniture, Bathtub, Butler Service, Jharokha Seating' },
  { id: '105', number: '105', floor: 1, type: 'Aravali View Luxury Cottage', price: 6500, status: 'occupied', guest: 'Sunita Roy', phone: '+91 98505 66778', checkIn: 'May 17, 2025', checkOut: 'May 20, 2025', balance: 21840, amenities: 'Mountain View, Stone Architecture, King Bed' },
  { id: '106', number: '106', floor: 1, type: 'Private Plunge Pool Villa', price: 16000, status: 'clean', guest: null, amenities: 'Temperature Controlled Plunge Pool, Private Garden' },
  { id: '107', number: '107', floor: 1, type: 'Royal Rajputana Haveli Suite', price: 12000, status: 'dirty', guest: null, amenities: 'Traditional Fresco Paintings, Heritage Courtyard Access' },
  { id: '108', number: '108', floor: 1, type: 'Luxury Tree House Premier', price: 11000, status: 'clean', guest: null, amenities: 'High Elevation Treehouse, Open-to-Sky Jacuzzi' },
  { id: '109', number: '109', floor: 1, type: 'Royal Swiss Luxury Tent', price: 7500, status: 'clean', guest: null, amenities: 'Royal Glamping, Aravali Breeze' },
  { id: '110', number: '110', floor: 1, type: 'Maharaja Palace Suite', price: 18500, status: 'occupied', guest: 'Karan Malhotra', phone: '+91 98112 33445', checkIn: 'May 15, 2025', checkOut: 'May 18, 2025', balance: 62160, amenities: 'Master Royal Suite, Private Dining Table' },
  { id: '111', number: '111', floor: 1, type: 'Aravali Sunset Cottage', price: 6500, status: 'clean', guest: null, amenities: 'Sunset View, Private Sit-out' },
  { id: '112', number: '112', floor: 1, type: 'Royal Swiss Luxury Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Luxury Glamping Tent' },
  { id: '113', number: '113', floor: 1, type: 'Grand Heritage Villa', price: 15000, status: 'clean', guest: null, amenities: 'Handcrafted Sandstone Villa, Private Lawn' },
  { id: '114', number: '114', floor: 1, type: 'Luxury Tree House with Jacuzzi', price: 9500, status: 'occupied', guest: 'Dr. Vivek Mehra', phone: '+91 98223 44556', checkIn: 'May 16, 2025', checkOut: 'May 19, 2025', balance: 31920, amenities: 'Tree Canopy, Heated Jacuzzi' },
  { id: '115', number: '115', floor: 1, type: 'Private Pool Villa Deluxe', price: 14500, status: 'clean', guest: null, amenities: 'Private Pool, Garden View' },
  { id: '116', number: '116', floor: 1, type: 'Royal Rajputana Haveli Suite', price: 12000, status: 'clean', guest: null, amenities: 'Heritage Architecture' },

  // Section 2 / Royal Fort Wing: Treehouses & Royal Haveli (Rooms 201 to 216)
  { id: '201', number: '201', floor: 2, type: 'Private Pool Villa with Jacuzzi', price: 15500, status: 'clean', guest: null, amenities: 'Private Swimming Pool & Jacuzzi Combo' },
  { id: '202', number: '202', floor: 2, type: 'Royal Swiss Luxury Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Luxury Glamping' },
  { id: '203', number: '203', floor: 2, type: 'Luxury Tree House Premier', price: 11000, status: 'clean', guest: null, amenities: 'Top Floor Tree Canopy Jacuzzi' },
  { id: '204', number: '204', floor: 2, type: 'Presidential Maharaja Fort Villa', price: 24000, status: 'occupied', guest: 'Rohit Sharma', phone: '+91 98765 43210', checkIn: 'May 15, 2025', checkOut: 'May 18, 2025', balance: 80640, vip: true, amenities: 'Private Infinity Pool, Personal Butler, Maharaja Dining, Spa Jacuzzi' },
  { id: '205', number: '205', floor: 2, type: 'Aravali Valley View Cottage', price: 6500, status: 'clean', guest: null, amenities: 'Cottage with Valley View' },
  { id: '206', number: '206', floor: 2, type: 'Luxury Tree House with Jacuzzi', price: 9500, status: 'occupied', guest: 'Vikram Joshi', phone: '+91 98334 55667', checkIn: 'May 17, 2025', checkOut: 'May 20, 2025', balance: 31920, amenities: 'Private Jacuzzi, Nature Surrounds' },
  { id: '207', number: '207', floor: 2, type: 'Royal Rajputana Villa', price: 15000, status: 'clean', guest: null, amenities: 'Luxury Villa, Private Plunge Pool' },
  { id: '208', number: '208', floor: 2, type: 'Royal Swiss Luxury Tent', price: 7500, status: 'dirty', guest: null, amenities: 'Glamping Experience' },
  { id: '209', number: '209', floor: 2, type: 'Private Plunge Pool Villa', price: 14500, status: 'clean', guest: null, amenities: 'Private Pool' },
  { id: '210', number: '210', floor: 2, type: 'Maharaja Heritage Suite', price: 18000, status: 'occupied', guest: 'Ananya Deshmukh', phone: '+91 98445 66778', checkIn: 'May 16, 2025', checkOut: 'May 19, 2025', balance: 60480, amenities: 'Heritage Suite, Bathtub' },
  { id: '211', number: '211', floor: 2, type: 'Luxury Tree House Premier', price: 11000, status: 'clean', guest: null, amenities: 'Treehouse' },
  { id: '212', number: '212', floor: 2, type: 'Aravali Sunset Cottage', price: 6500, status: 'clean', guest: null, amenities: 'Cottage' },
  { id: '213', number: '213', floor: 2, type: 'Royal Swiss Luxury Tent', price: 7500, status: 'clean', guest: null, amenities: 'Swiss Tent' },
  { id: '214', number: '214', floor: 2, type: 'Royal Imperial Presidential Palace Villa', price: 32000, status: 'occupied', guest: 'Shri Mahendra Singh Rathore', phone: '+91 80033 95964', checkIn: 'May 14, 2025', checkOut: 'May 20, 2025', balance: 215040, vip: true, amenities: 'Owner Presidential Villa, Private 40ft Pool, Royal Courtyard, Private Chef' },
  { id: '215', number: '215', floor: 2, type: 'Private Pool Villa with Lawn', price: 14500, status: 'dirty', guest: null, amenities: 'Private Pool' },
  { id: '216', number: '216', floor: 2, type: 'Maharaja Heritage Suite', price: 18000, status: 'clean', guest: null, amenities: 'Heritage Suite' },
];

export const INITIAL_ROOMS = INITIAL_ROOMS_LOHAGARH;

// Today's Arrivals at Lohagarh Fort Resort
export const INITIAL_TODAYS_ARRIVALS = [
  { id: 'ARR-01', name: 'Rohit Sharma', avatar: 'RS', phone: '+91 98765 43210', room: '204', roomType: 'Presidential Fort Villa', nights: 3, amount: '₹80,640', status: 'Pending Check-In', eta: '02:00 PM', vip: true },
  { id: 'ARR-02', name: 'Priya Sharma', avatar: 'PS', phone: '+91 98111 22334', room: '106', roomType: 'Private Pool Villa', nights: 2, amount: '₹35,840', status: 'Pending Check-In', eta: '03:30 PM' },
  { id: 'ARR-03', name: 'Amit Verma', avatar: 'AV', phone: '+91 98222 33445', room: '108', roomType: 'Luxury Tree House Premier', nights: 4, amount: '₹49,280', status: 'Pending Check-In', eta: '04:15 PM' },
  { id: 'ARR-04', name: 'Sneha Patel', avatar: 'SP', phone: '+91 98333 44556', room: '201', roomType: 'Private Pool Villa with Jacuzzi', nights: 2, amount: '₹34,720', status: 'Pending Check-In', eta: '05:00 PM' },
  { id: 'ARR-05', name: 'Dr. Vivek Deshmukh', avatar: 'VD', phone: '+91 98444 55667', room: '113', roomType: 'Grand Heritage Villa', nights: 3, amount: '₹50,400', status: 'Pending Check-In', eta: '06:30 PM', vip: true },
];

// Today's Departures
export const INITIAL_TODAYS_DEPARTURES = [
  { id: 'DEP-01', name: 'Rohan Mehta', avatar: 'RM', phone: '+91 98765 43210', room: '101', roomType: 'Luxury Tree House', nights: 3, amount: '₹31,920', status: 'Pending Checkout', balanceDue: '₹0.00 (Paid)' },
  { id: 'DEP-02', name: 'Karan Malhotra', avatar: 'KM', phone: '+91 98112 33445', room: '110', roomType: 'Maharaja Palace Suite', nights: 3, amount: '₹62,160', status: 'Pending Checkout', balanceDue: '₹4,500 (Spa & Bar)' },
  { id: 'DEP-03', name: 'Meera Sengupta', avatar: 'MS', phone: '+91 98555 66778', room: '206', roomType: 'Luxury Tree House', nights: 2, amount: '₹21,280', status: 'Pending Checkout', balanceDue: '₹0.00 (Paid)' },
  { id: 'DEP-04', name: 'Vikram Joshi', avatar: 'VJ', phone: '+91 98334 55667', room: '210', roomType: 'Maharaja Heritage Suite', nights: 3, amount: '₹60,480', status: 'Pending Checkout', balanceDue: '₹2,800 (F&B Dining)' },
];

// Housekeeping Tasks for Resort
export const INITIAL_HOUSEKEEPING_TASKS = [
  { id: 'HK-101', room: 'Room 103', type: 'Royal Swiss Tent Sanitization', floor: 1, priority: 'High', status: 'to-clean', assignee: 'Ramesh Kumar' },
  { id: 'HK-102', room: 'Room 107', type: 'Haveli Suite Linen Change', floor: 1, priority: 'Medium', status: 'to-clean', assignee: 'Sunita Devi' },
  { id: 'HK-103', room: 'Room 112', type: 'Swiss Tent Deep Clean', floor: 1, priority: 'Normal', status: 'to-clean', assignee: 'Mohan Lal' },
  { id: 'HK-104', room: 'Room 202', type: 'Swiss Tent Turnover', floor: 2, priority: 'High', status: 'in-progress', assignee: 'Ramesh Kumar' },
  { id: 'HK-105', room: 'Room 208', type: 'Royal Tent Setup', floor: 2, priority: 'Medium', status: 'in-progress', assignee: 'Sunita Devi' },
  { id: 'HK-106', room: 'Room 215', type: 'Private Pool Sanitation & Water pH Check', floor: 2, priority: 'Normal', status: 'inspected', assignee: 'Mohan Lal' },
  { id: 'HK-107', room: 'Room 102', type: 'Private Pool Villa', floor: 1, priority: 'Normal', status: 'completed', assignee: 'Ramesh Kumar' },
  { id: 'HK-108', room: 'Room 106', type: 'Plunge Pool Villa', floor: 1, priority: 'High', status: 'completed', assignee: 'Sunita Devi' },
];

// Rajasthani Royal & Multi-Cuisine POS Menu for Lohagarh Fort Resort
export const INITIAL_POS_MENU = [
  { id: 'POS-01', name: 'Special Masala Chai & Mirchi Vada', category: 'Beverages', price: 140, image: '☕' },
  { id: 'POS-02', name: 'Fresh Kokum & Mint Cooler', category: 'Beverages', price: 220, image: '🍹' },
  { id: 'POS-03', name: 'Cold Brew / Cappuccino', category: 'Beverages', price: 240, image: '🥤' },
  { id: 'POS-04', name: 'Royal Kesari Thandai / Wine Glass', category: 'Beverages', price: 480, image: '🍷' },
  { id: 'POS-05', name: 'Rajasthani Pyaaz Kachori & Chutney', category: 'Starters', price: 280, image: '🥟' },
  { id: 'POS-06', name: 'Tandoori Paneer Tikka Shahi', category: 'Starters', price: 420, image: '🧀' },
  { id: 'POS-07', name: 'Rajputana Jungli Maas Bites', category: 'Starters', price: 540, image: '🍗' },
  { id: 'POS-08', name: 'Dal Baati Churma Royal Thali', category: 'Main Course', price: 650, image: '🍲' },
  { id: 'POS-09', name: 'Laal Maas Royal Handi (Specialty)', category: 'Main Course', price: 720, image: '🍛' },
  { id: 'POS-10', name: 'Ker Sangri & Bajra Roti Combo', category: 'Main Course', price: 520, image: '🫓' },
  { id: 'POS-11', name: 'Awadhi Dum Dum Biryani', category: 'Main Course', price: 480, image: '🍚' },
  { id: 'POS-12', name: 'Hot Ghevar with Rabri & Silver Vark', category: 'Desserts', price: 260, image: '🍮' },
];

// Initial Folio Items for Room 204 at Lohagarh Fort Resort
export const INITIAL_ROOM_204_FOLIO = [
  { id: 'FOL-01', desc: 'Presidential Maharaja Fort Villa with Private Pool (3 Nights @ ₹24,000)', qty: 3, rate: 24000.00, amount: 72000.00, category: 'Room' },
  { id: 'FOL-02', desc: 'Royal Rajasthani Buffet Breakfast & High Tea (2 Guests)', qty: 3, rate: 1200.00, amount: 3600.00, category: 'F&B' },
  { id: 'FOL-03', desc: 'Moksha Spa Ayurvedic Couple Therapy & Jacuzzi', qty: 1, rate: 4500.00, amount: 4500.00, category: 'Spa' },
  { id: 'FOL-04', desc: 'Private Candlelight Dinner by Poolside Lawn', qty: 1, rate: 3800.00, amount: 3800.00, category: 'F&B' },
];

// Inventory SKUs
export const INITIAL_INVENTORY = [
  { id: 'SKU-1001', name: 'Luxury King Bed Linen & Rajasthani Quilts', category: 'Housekeeping', inStock: 340, minThreshold: 100, unit: 'Sets', price: 1250, status: 'In Stock' },
  { id: 'SKU-1002', name: 'Plush Pool Towels (800 GSM Luxury)', category: 'Housekeeping', inStock: 480, minThreshold: 150, unit: 'Pcs', price: 550, status: 'In Stock' },
  { id: 'SKU-1003', name: 'Ayurvedic Forest Essentials Toiletries Kit', category: 'Toiletries', inStock: 85, minThreshold: 120, unit: 'Sets', price: 180, status: 'Low Stock' },
  { id: 'SKU-1004', name: 'Private Pool Chlorine & Water Treatment Tablets', category: 'Maintenance', inStock: 45, minThreshold: 50, unit: 'Kg', price: 650, status: 'Low Stock' },
  { id: 'SKU-1005', name: 'RFID Smart Wooden Villa Keycards', category: 'Front Office', inStock: 450, minThreshold: 150, unit: 'Cards', price: 75, status: 'In Stock' },
  { id: 'SKU-1006', name: 'Royal Basmati Rice & Desi Ghee Tins', category: 'F&B Kitchen', inStock: 25, minThreshold: 8, unit: 'Tins', price: 4200, status: 'In Stock' },
];

// Approvals
export const INITIAL_APPROVALS = [
  { id: 'PO-2025-101', title: 'Private Pool Jacuzzi Heater Pump Replacement', type: 'Maintenance PO', hotel: 'Lohagarh Fort Resort Jaipur', requester: 'Mukesh Sharma (Chief Engineer)', amount: '₹65,000', reason: 'Preventive overhaul for Treehouse Jacuzzi units', date: 'May 18, 2025' },
  { id: 'REF-2025-014', title: 'Pre-Wedding Destination Date Reschedule', type: 'Booking Modification', hotel: 'Lohagarh Fort Resort Jaipur', requester: 'Pooja Rathore (Banquet Sales)', amount: '₹3,50,000', reason: 'Rescheduling Aravali Lawn event from June to November', date: 'May 18, 2025' },
  { id: 'PO-2025-102', title: 'Organic Spices & Mutton Procurement for Banquets', type: 'Purchase Order', hotel: 'Lohagarh Fort Resort Jaipur', requester: 'Chef Digvijay (Executive Chef)', amount: '₹58,400', reason: 'Grand Marwar wedding catering inventory', date: 'May 17, 2025' },
];

// CRM Deals
export const INITIAL_CRM_DEALS = [
  { id: 'DEAL-01', client: 'Destination Wedding: Singhania & Oswal', type: '3-Day Royal Aravali Destination Wedding', value: 4500000, rooms: 80, stage: 'negotiation', contact: 'Vikram Singhania', date: 'Nov 18, 2025' },
  { id: 'DEAL-02', client: 'McKinsey Global Partner Retreat', type: '4-Day Executive Villa Retreat & Banquets', value: 2200000, rooms: 45, stage: 'won', contact: 'Kavita Iyer', date: 'Jul 12, 2025' },
  { id: 'DEAL-03', client: 'BMW India Luxury Car Launch & Gala Dinner', type: 'Aravali Lawn Car Showcase & Poolside Dinner', value: 1850000, rooms: 40, stage: 'proposal', contact: 'Rahul Verma', date: 'Aug 05, 2025' },
  { id: 'DEAL-04', client: 'Hero MotoCorp Annual Dealer Meet', type: 'Sheesh Mahal Conference & Folk Night', value: 1400000, rooms: 50, stage: 'lead', contact: 'Sanjay Rao', date: 'Sep 20, 2025' },
];

// AI Chat Threads for Lohagarh Fort Resort
export const INITIAL_AI_CHAT_THREADS = [
  {
    id: 'CHAT-1',
    guestName: 'Rohit Sharma',
    room: '204',
    time: '15:42',
    preview: 'What time is the cultural folk dance at the courtyard today?',
    messages: [
      { id: 1, sender: 'guest', text: 'Khamma Ghani! We just checked into Presidential Villa 204. Can you share the Wi-Fi details and evening cultural event timing?', time: '15:40' },
      { id: 2, sender: 'ai', text: "Khamma Ghani Mr. Sharma! 🏰 Welcome to Lohagarh Fort Resort & Spa, Jaipur!\n\n📶 High-speed Wi-Fi: 'Lohagarh_Royal_Guest' (Pass: 'RoyalLohagarh2025')\n🎭 Cultural Evening: Traditional Rajasthani Folk Dance, Kalbeliya performance & Puppet show begins at 7:30 PM at the Royal Central Courtyard followed by live Barbecue.", time: '15:41' },
      { id: 3, sender: 'guest', text: 'Wonderful! Can we also get a private candle-lit dinner setup next to our villa pool at 9:00 PM?', time: '15:42' },
      { id: 4, sender: 'ai', text: 'Certainly, Mr. Sharma! Our Royal Butler Service has reserved the candlelight poolside table with customized Laal Maas and Marwari delicacies for 9:00 PM tonight. ✨', time: '15:42' }
    ]
  },
  {
    id: 'CHAT-2',
    guestName: 'Amit Patel',
    room: '101',
    time: '14:20',
    preview: 'Can you please arrange the Jacuzzi temperature in Treehouse 101?',
    messages: [
      { id: 1, sender: 'guest', text: 'Hello, could you please turn on the heater for the treehouse balcony Jacuzzi for 5:30 PM?', time: '14:18' },
      { id: 2, sender: 'ai', text: 'Warm greetings Mr. Patel! 🌿 I have alerted our engineering team. The balcony Jacuzzi in Treehouse 101 will be pre-heated to a comfortable 38°C by 5:30 PM with aromatherapy bath salts.', time: '14:20' }
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
  { id: 'BK-1', roomNumber: '101', guestName: 'Amit Patel (Treehouse)', startCol: 4, spanCols: 3, color: 'bg-indigo-600 text-white' },
  { id: 'BK-2', roomNumber: '103', guestName: 'Corporate McKinsey', startCol: 1, spanCols: 4, color: 'bg-blue-600 text-white' },
  { id: 'BK-3', roomNumber: '105', guestName: 'Sunita Roy', startCol: 5, spanCols: 3, color: 'bg-emerald-600 text-white' },
  { id: 'BK-4', roomNumber: '106', guestName: 'Priya Sharma (Pool Villa)', startCol: 4, spanCols: 2, color: 'bg-indigo-600 text-white' },
  { id: 'BK-5', roomNumber: '201', guestName: 'Sneha Patel', startCol: 4, spanCols: 2, color: 'bg-indigo-600 text-white' },
  { id: 'BK-6', roomNumber: '204', guestName: 'Rohit Sharma (Maharaja Fort Villa VIP)', startCol: 3, spanCols: 3, color: 'bg-purple-600 text-white' },
  { id: 'BK-7', roomNumber: '206', guestName: 'Vikram Joshi (Treehouse)', startCol: 5, spanCols: 3, color: 'bg-indigo-600 text-white' },
  { id: 'BK-8', roomNumber: '214', guestName: 'Shri Mahendra Singh Rathore (Owner Villa)', startCol: 2, spanCols: 6, color: 'bg-amber-600 text-white' },
];
