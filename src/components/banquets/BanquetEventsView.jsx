import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  PartyPopper,
  Calendar,
  Users,
  Building,
  Plus,
  Clock,
  IndianRupee,
  Utensils,
  CheckCircle2,
  ChevronRight,
  Music,
  Wine,
  Sparkles,
  X,
  Check,
  Trees,
  Castle,
  Waves,
  Mountain
} from 'lucide-react';

export default function BanquetEventsView() {
  const { showToast } = useApp();
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 'EVT-2025-01',
      title: 'Singhania & Oswal Royal Destination Wedding',
      hall: 'The Grand Aravali Royal Lawn',
      capacity: '850 Guests',
      date: 'May 22, 2025',
      time: '06:30 PM – 01:00 AM',
      package: 'Royal Rajputana 3-Day Wedding Package',
      catering: 'Live Marwari Rasoi, Mughlai Dastarkhwan & Global Gourmet',
      value: 4500000,
      paid: 2200000,
      status: 'Confirmed',
      contact: 'Vikram Singhania (+91 98111 22334)'
    },
    {
      id: 'EVT-2025-02',
      title: 'McKinsey & Co. Global Leadership Retreat',
      hall: 'Sheesh Mahal Grand Ballroom',
      capacity: '200 Guests',
      date: 'May 25, 2025',
      time: '09:00 AM – 06:00 PM',
      package: 'Executive Full-Day Conference & Gala Dinner',
      catering: 'High Tea, Networking Lunch & Live Cocktail Bar',
      value: 1250000,
      paid: 1250000,
      status: 'Fully Paid',
      contact: 'Kavita Iyer (kavita@mckinsey.com)'
    },
    {
      id: 'EVT-2025-03',
      title: 'Rathore Silver Jubilee Anniversary & Folk Night',
      hall: 'Poolside Royal Courtyard & Terrace',
      capacity: '180 Guests',
      date: 'May 28, 2025',
      time: '07:00 PM – 11:30 PM',
      package: 'Heritage Evening with Kalbeliya Dancers & DJ',
      catering: 'Live Barbecue, Jungli Maas & Rajasthani Sweets',
      value: 680000,
      paid: 350000,
      status: 'Advance Paid',
      contact: 'Gajendra Singh Rathore (+91 80033 95964)'
    }
  ]);

  // Builder State
  const [builderData, setBuilderData] = useState({
    title: '',
    hall: 'The Grand Aravali Royal Lawn',
    guests: 450,
    platePrice: 3500,
    decorPkg: 250000,
    djSound: true,
    cocktailBar: true,
    eventDate: '2025-06-15',
    organizer: ''
  });

  const halls = [
    { name: 'The Grand Aravali Royal Lawn', cap: '1200 Guests', area: '25,000 sq.ft.', status: 'Booked on May 22', icon: Trees, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Sheesh Mahal Royal Ballroom', cap: '450 Guests', area: '7,500 sq.ft.', status: 'Available', icon: Castle, color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Poolside Royal Courtyard', cap: '300 Guests', area: '5,000 sq.ft.', status: 'Available', icon: Waves, color: 'text-cyan-600 bg-cyan-50' },
    { name: 'Rooftop Fort Terrace', cap: '150 Guests', area: '3,200 sq.ft.', status: 'Available', icon: Mountain, color: 'text-amber-600 bg-amber-50' },
  ];

  const cateringTotal = builderData.guests * builderData.platePrice;
  const addonsTotal = builderData.decorPkg + (builderData.djSound ? 65000 : 0) + (builderData.cocktailBar ? 120000 : 0);
  const totalBanquetEstimate = cateringTotal + addonsTotal;

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: `EVT-${Date.now().toString().slice(-4)}`,
      title: builderData.title || 'Grand Royal Celebration Event',
      hall: builderData.hall,
      capacity: `${builderData.guests} Guests`,
      date: builderData.eventDate,
      time: '07:00 PM – 11:30 PM',
      package: 'Custom Royal Heritage Package',
      catering: `Royal Banquet Menu (@ ₹${builderData.platePrice}/plate)`,
      value: totalBanquetEstimate,
      paid: Math.round(totalBanquetEstimate * 0.4),
      status: 'Advance Paid',
      contact: builderData.organizer || 'Client Organizer'
    };

    setEvents(prev => [newEvent, ...prev]);
    showToast(`Banquet Booking "${newEvent.title}" confirmed! Quotation BEO generated.`);
    setIsBuilderOpen(false);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 10 • Banquets & Destination Weddings</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Lohagarh Fort Banquets & Royal Lawns Engine</h1>
          <p className="text-xs text-slate-500 mt-0.5">Automated per-plate catering quotation, Aravali lawn scheduling, and destination wedding packages.</p>
        </div>
        <button
          onClick={() => setIsBuilderOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Create Royal Banquet Quotation</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Upcoming Weddings & Galas</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">{events.length + 8}</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">This Season</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <PartyPopper className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Wedding & Event Revenue</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">₹{(events.reduce((s, e) => s + e.value, 0) / 100000).toFixed(1)}L</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">+38% vs Target</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <IndianRupee className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lawn & Hall Utilization</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">94%</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Peak Wedding Dates Sold Out</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Building className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Advances Collected</div>
            <div className="text-3xl font-mono font-bold text-teal-600 mt-2">₹{(events.reduce((s, e) => s + e.paid, 0) / 100000).toFixed(1)}L</div>
            <div className="text-xs text-teal-700 font-semibold mt-1">Secured in Bank</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Banquet Halls Overview */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-base text-slate-900">Royal Venues & Grand Aravali Lawns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {halls.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="custom-card p-4 hover:shadow-md transition-all flex items-start gap-3 border border-slate-200">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${h.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-slate-900">{h.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">{h.cap} • {h.area}</div>
                  <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {h.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booked Events List */}
      <div className="custom-card p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Active Wedding & Gala Schedules</h3>
            <p className="text-xs text-slate-400 font-medium">Complete breakdown of venue, royal catering menu, payment schedules, and coordinators.</p>
          </div>
        </div>

        <div className="space-y-4">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {evt.id}
                  </span>
                  <h4 className="font-display font-bold text-slate-900 text-base">{evt.title}</h4>
                  <span className={`custom-badge ${evt.status === 'Fully Paid' ? 'badge-paid' : 'badge-active'}`}>
                    {evt.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                    <Building className="w-3.5 h-3.5 text-indigo-600" /> {evt.hall}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {evt.date} ({evt.time})
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" /> {evt.capacity}
                  </span>
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-2 pt-1 font-medium">
                  <Utensils className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span><strong>Catering:</strong> {evt.catering}</span>
                </div>
              </div>

              {/* Pricing & Actions */}
              <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <div className="text-left lg:text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Package Value</div>
                  <div className="text-xl font-mono font-extrabold text-slate-900">₹{evt.value.toLocaleString()}</div>
                  <div className="text-[11px] font-mono text-emerald-600 font-bold mt-0.5">
                    ₹{evt.paid.toLocaleString()} Paid (Advance)
                  </div>
                </div>

                <button
                  onClick={() => showToast(`BEO banquet order sheet downloaded for ${evt.title}`)}
                  className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl transition-colors shadow-2xs"
                >
                  Download BEO Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banquet Quotation Builder Modal */}
      {isBuilderOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-2xl w-full shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">Royal Wedding & Banquet Quotation Builder</h3>
                <p className="text-xs text-slate-400 font-medium">Calculate live plate costs, royal decor packages, and generate an instant event contract.</p>
              </div>
              <button onClick={() => setIsBuilderOpen(false)} className="p-1 rounded-lg text-slate-400 hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form id="banquet-form" onSubmit={handleCreateEvent} className="overflow-y-auto p-2 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">Event Name / Wedding Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Rajputana Sangeet & Reception"
                    value={builderData.title}
                    onChange={(e) => setBuilderData({ ...builderData, title: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">Select Hall / Lawn</label>
                  <select
                    value={builderData.hall}
                    onChange={(e) => setBuilderData({ ...builderData, hall: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium outline-none"
                  >
                    <option value="The Grand Aravali Royal Lawn">The Grand Aravali Royal Lawn (1200 Max)</option>
                    <option value="Sheesh Mahal Royal Ballroom">Sheesh Mahal Royal Ballroom (450 Max)</option>
                    <option value="Poolside Royal Courtyard">Poolside Royal Courtyard (300 Max)</option>
                    <option value="Rooftop Fort Terrace">Rooftop Fort Terrace (150 Max)</option>
                  </select>
                </div>
              </div>

              {/* Slider for Guests */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Guest Headcount:</span>
                  <span className="text-indigo-600 font-mono font-black text-sm">{builderData.guests} Guests</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={1200}
                  step={50}
                  value={builderData.guests}
                  onChange={(e) => setBuilderData({ ...builderData, guests: parseInt(e.target.value) })}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* Per-Plate Catering Selection */}
              <div>
                <label className="block text-slate-600 font-bold mb-1">Royal Catering Tier (Per Plate)</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { tier: 'Marwari Heritage', price: 2200, desc: 'Dal Baati Churma, Gatte, 4 Mains, Sweets' },
                    { tier: 'Royal Rajputana', price: 3500, desc: 'Laal Maas, Jungli Maas, Live Counters' },
                    { tier: 'Imperial Palace Buffet', price: 4800, desc: 'Global Gourmet, Live Seafood & Exotic Sweets' },
                  ].map(p => (
                    <div
                      key={p.price}
                      onClick={() => setBuilderData({ ...builderData, platePrice: p.price })}
                      className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        builderData.platePrice === p.price ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{p.tier}</div>
                      <div className="font-mono font-extrabold text-sm text-indigo-600 mt-0.5">₹{p.price}/plate</div>
                      <div className="text-[10px] text-slate-400 mt-1">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <label className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={builderData.djSound}
                    onChange={(e) => setBuilderData({ ...builderData, djSound: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <div>
                    <div className="font-bold text-slate-800">Folk Dancers & Pro DJ (+₹65,000)</div>
                    <div className="text-[10px] text-slate-400">Kalbeliya troupe, JBL Sound & Stage</div>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={builderData.cocktailBar}
                    onChange={(e) => setBuilderData({ ...builderData, cocktailBar: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <div>
                    <div className="font-bold text-slate-800">Royal Cocktail Bar (+₹1,20,000)</div>
                    <div className="text-[10px] text-slate-400">Mixologist & Royal Kesari drinks</div>
                  </div>
                </label>
              </div>

              {/* Live Quotation Summary */}
              <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 flex justify-between items-center text-xs">
                <div>
                  <span className="text-indigo-900 font-bold">Estimated Total Wedding & Banquet Contract:</span>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {builderData.guests} Guests @ ₹{builderData.platePrice} + ₹{addonsTotal.toLocaleString()} Add-ons
                  </div>
                </div>
                <span className="text-xl font-mono font-black text-indigo-950">
                  ₹{totalBanquetEstimate.toLocaleString()}
                </span>
              </div>
            </form>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsBuilderOpen(false)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="banquet-form"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md"
              >
                Confirm & Add to Calendar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
