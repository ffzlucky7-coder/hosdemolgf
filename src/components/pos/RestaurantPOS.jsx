import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  UtensilsCrossed,
  Plus,
  Minus,
  Trash2,
  Receipt,
  Search,
  Sparkles,
  ShoppingBag,
  CreditCard,
  CheckCircle2,
  Printer,
  LayoutGrid,
  Clock,
  Percent,
  ChefHat,
  X,
  Coffee,
  GlassWater,
  CupSoda,
  Wine,
  Cookie,
  Flame,
  Drumstick,
  Soup,
  Wheat,
  CookingPot,
  Cake,
  TableProperties,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function RestaurantPOS() {
  const {
    posMenu,
    cart,
    addToCart,
    removeFromCart,
    updateCartQty,
    clearCart,
    placeOrder,
    setCurrentView,
    restaurantTables,
    setRestaurantTables,
    kdsOrders,
    setKdsOrders,
    selectedHotel,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'tables' | 'kds'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [orderDestination, setOrderDestination] = useState('Villa 204 (Rohit Sharma - Presidential Fort Villa)');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const categories = ['All', 'Beverages', 'Starters', 'Main Course', 'Desserts'];

  const getDishIcon = (iconKey) => {
    switch (iconKey) {
      case 'coffee': return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'glass-water': return <GlassWater className="w-5 h-5 text-sky-600" />;
      case 'cup-soda': return <CupSoda className="w-5 h-5 text-indigo-600" />;
      case 'wine': return <Wine className="w-5 h-5 text-rose-600" />;
      case 'cookie': return <Cookie className="w-5 h-5 text-amber-600" />;
      case 'flame': return <Flame className="w-5 h-5 text-orange-500" />;
      case 'drumstick': return <Drumstick className="w-5 h-5 text-red-600" />;
      case 'soup': return <Soup className="w-5 h-5 text-amber-600" />;
      case 'utensils': return <UtensilsCrossed className="w-5 h-5 text-rose-600" />;
      case 'wheat': return <Wheat className="w-5 h-5 text-yellow-600" />;
      case 'bowl': return <CookingPot className="w-5 h-5 text-indigo-600" />;
      case 'cake': return <Cake className="w-5 h-5 text-pink-600" />;
      default: return <UtensilsCrossed className="w-5 h-5 text-indigo-600" />;
    }
  };

  const filteredItems = posMenu.filter(item => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const taxableSubtotal = subtotal - discountAmount;
  const gst = taxableSubtotal * 0.05; // 5% GST for F&B
  const total = taxableSubtotal + gst;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'ROYAL10') {
      setDiscountPercent(10);
      showToast('Promo Code ROYAL10 Applied: 10% Royal Privilege Discount!');
    } else if (promoCode.toUpperCase() === 'VIP20') {
      setDiscountPercent(20);
      showToast('VIP20 Applied: 20% Privilege Discount!');
    } else {
      showToast('Invalid Promo Code. Try ROYAL10 or VIP20', 'warning');
    }
  };

  const handleKdsComplete = (kotId) => {
    setKdsOrders(prev => prev.map(k => k.id === kotId ? { ...k, status: 'Served & Closed' } : k));
    showToast(`Order ${kotId} marked as Served & Closed!`);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Header & Navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono font-bold text-indigo-600 tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
              Module 9 • Food & Beverage Point of Sale
            </span>
            <span className="text-xs text-slate-400 font-medium">{selectedHotel.name.split(',')[0]}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Multi-Outlet F&B POS & Kitchen Display
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time table orders, in-villa dining dispatch, live KDS kitchen sync, and direct folio settlement.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'menu' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-indigo-600" />
            <span>Order Menu</span>
          </button>
          <button
            onClick={() => setActiveTab('tables')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tables' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TableProperties className="w-3.5 h-3.5 text-slate-600" />
            <span>Table Layout ({restaurantTables.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('kds')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'kds' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ChefHat className="w-3.5 h-3.5 text-rose-500" />
            <span>Kitchen KDS ({kdsOrders.filter(k => k.status !== 'Served & Closed').length})</span>
          </button>
        </div>
      </div>

      {/* 1. POS MENU ORDERING VIEW */}
      {activeTab === 'menu' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Menu & Categories */}
          <div className="lg:col-span-8 space-y-5">
            {/* Category Tabs & Search Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 overflow-x-auto text-xs font-bold">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[220px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search culinary items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => addToCart(item)}
                  className="luxury-card p-4.5 hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between h-46 group"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all shadow-2xs">
                        {getDishIcon(item.iconKey)}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-slate-900 text-sm mt-3 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
                    <span className="font-mono font-black text-base text-slate-900">₹{item.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center gap-1 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Cart & Bill Folio */}
          <div className="lg:col-span-4 luxury-card p-6 space-y-5 sticky top-20 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-indigo-600" />
                <h2 className="font-display font-bold text-base text-slate-900">Active Dining Order</h2>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-rose-500 hover:text-rose-700 font-bold cursor-pointer"
                >
                  Clear Order
                </button>
              )}
            </div>

            {/* Destination Dropdown */}
            <div>
              <label className="block text-slate-500 text-xs font-bold mb-1">Deliver / Folio Bill To</label>
              <select
                value={orderDestination}
                onChange={(e) => setOrderDestination(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none cursor-pointer"
              >
                <option value="Villa 204 (Rohit Sharma - Presidential Sovereign Villa)">Villa 204 — Rohit Sharma (Presidential Sovereign Villa)</option>
                <option value="Villa 101 (Amit Patel - Canopy Villa)">Villa 101 — Amit Patel (Canopy Villa)</option>
                <option value="Poolside Cabana 1 (Dr. Vivek Mehra)">Poolside Cabana 1 (Dr. Vivek Mehra)</option>
                <option value="Ocean Gazebo Private Dining">Ocean Gazebo Private Dining</option>
                <option value="Indoor Sanctuary Table 1 (Sunita Roy)">Indoor Sanctuary Table 1 (Sunita Roy)</option>
                <option value="The Oceanfront Lawn VIP Lounge">The Oceanfront Lawn VIP Lounge</option>
              </select>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3 max-h-56 overflow-y-auto divide-y divide-slate-100">
              {cart.length === 0 ? (
                <div className="py-10 text-center text-xs text-slate-400 space-y-2">
                  <UtensilsCrossed className="w-8 h-8 text-slate-300 mx-auto" />
                  <p>Order is empty. Tap dishes on the left to add items.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="pt-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        {getDishIcon(item.iconKey)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 font-display">{item.name}</div>
                        <div className="text-[11px] font-mono text-slate-400">₹{item.price} each</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50 shadow-2xs">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-1 text-xs font-mono font-bold text-slate-900 bg-white">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="px-2 py-1 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono font-black text-slate-900 w-14 text-right">
                        ₹{item.price * item.qty}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2 text-xs pt-2">
              <input
                type="text"
                placeholder="Enter Promo (ROYAL10, VIP20)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold uppercase outline-none font-mono"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl cursor-pointer"
              >
                Apply
              </button>
            </form>

            {/* Summary */}
            {cart.length > 0 && (
              <div className="space-y-1.5 pt-3 border-t border-slate-200 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal:</span>
                  <span className="font-mono font-semibold text-slate-800">₹{subtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount ({discountPercent}%):</span>
                    <span className="font-mono">-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-500">
                  <span>GST (5% F&B Tax):</span>
                  <span className="font-mono font-semibold text-slate-800">₹{gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Bill Amount:</span>
                  <span className="font-mono text-indigo-600 text-base">₹{total.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Place Order Trigger */}
            <button
              onClick={() => placeOrder(orderDestination)}
              disabled={cart.length === 0}
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:opacity-50 text-white font-bold text-xs rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Receipt className="w-4 h-4" />
              <span>Charge to {orderDestination.split(' ')[0]} & Send KOT</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. TABLE LAYOUT MATRIX VIEW */}
      {activeTab === 'tables' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
            <h3 className="font-display font-bold text-base text-slate-900">Resort Table & Gazebo Dining Grid</h3>
            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Available (2)
              </span>
              <span className="flex items-center gap-1.5 text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span> Occupied (3)
              </span>
              <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Reserved (1)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantTables.map((t) => (
              <div
                key={t.id}
                className={`luxury-card p-6 border-2 transition-all space-y-4 ${
                  t.status === 'Available' ? 'border-emerald-200 bg-emerald-50/20' : t.status === 'Occupied' ? 'border-indigo-200 bg-indigo-50/20' : 'border-amber-200 bg-amber-50/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900">{t.name}</h4>
                    <span className="text-xs text-slate-400 font-medium">{t.section} • {t.seats} Guests Max</span>
                  </div>
                  <span className={`custom-badge ${t.status === 'Available' ? 'badge-clean' : t.status === 'Occupied' ? 'badge-occupied' : 'badge-pending'}`}>
                    {t.status}
                  </span>
                </div>

                {t.guest && (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="text-slate-500 font-medium">Seated Guest:</div>
                    <div className="font-bold text-slate-900 font-display">{t.guest}</div>
                    <div className="font-mono font-extrabold text-indigo-600 pt-1">Live Tab: ₹{t.orderValue.toLocaleString()}</div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <button
                    onClick={() => {
                      setOrderDestination(t.name);
                      setActiveTab('menu');
                      showToast(`Selected ${t.name} for dining order.`);
                    }}
                    className="text-indigo-600 font-bold hover:underline cursor-pointer"
                  >
                    + Take Order on this Table →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. KITCHEN KDS LIVE DISPLAY VIEW */}
      {activeTab === 'kds' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">Live Kitchen Display System (KDS)</h3>
              <p className="text-xs text-slate-400">Directly synchronized with In-Villa Dining & Restaurant Orders.</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Kitchen Display Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kdsOrders.map((k) => (
              <div key={k.id} className="luxury-card p-6 border-t-4 border-t-rose-500 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">{k.id}</span>
                    <h4 className="font-display font-bold text-base text-slate-900 mt-1">{k.tableOrRoom}</h4>
                  </div>
                  <span className={`custom-badge ${k.status === 'Ready to Serve' ? 'badge-clean' : 'badge-dirty'}`}>
                    {k.status}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl space-y-1.5 text-xs font-semibold text-slate-800 divide-y divide-slate-200">
                  {k.items.map((it, idx) => (
                    <div key={idx} className="pt-1 font-sans">{it}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <span>Chef: <strong className="text-slate-700">{k.chef}</strong></span>
                  <span className="font-mono">{k.time}</span>
                </div>

                {k.status !== 'Served & Closed' && (
                  <button
                    onClick={() => handleKdsComplete(k.id)}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    ✓ Mark as Served & Complete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
